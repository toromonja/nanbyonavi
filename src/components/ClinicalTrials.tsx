"use client";

import { useEffect, useState } from "react";
import { ExternalLink, FlaskConical, Loader2, AlertCircle, Search } from "lucide-react";

// ─── API 型定義 ──────────────────────────────────────────
interface CTGovStudy {
  protocolSection: {
    identificationModule: {
      nctId: string;
      briefTitle: string;
    };
    statusModule: {
      overallStatus: string;
      startDateStruct?: { date: string };
      primaryCompletionDateStruct?: { date: string };
    };
    designModule?: {
      phases?: string[];
    };
    contactsLocationsModule?: {
      locations?: Array<{
        facility?: string;
        country?: string;
        city?: string;
      }>;
    };
    descriptionModule?: {
      briefSummary?: string;
    };
  };
}

interface CTGovResponse {
  studies?: CTGovStudy[];
  totalCount?: number;
}

// ─── 表示用型定義 ─────────────────────────────────────────
interface TrialCard {
  nctId: string;
  title: string;
  status: string;
  phases: string[];
  startDate?: string;
  primaryCompletionDate?: string;
  locations: Array<{ facility?: string; country?: string; city?: string }>;
  briefSummary?: string;
}

// ─── 定数 ────────────────────────────────────────────────
const STATUS_LABEL: Record<string, { label: string; cls: string }> = {
  RECRUITING: {
    label: "募集中",
    cls: "bg-green-100 text-green-700 border border-green-200",
  },
  NOT_YET_RECRUITING: {
    label: "近日開始",
    cls: "bg-blue-100 text-blue-700 border border-blue-200",
  },
  ACTIVE_NOT_RECRUITING: {
    label: "実施中（募集終了）",
    cls: "bg-amber-100 text-amber-700 border border-amber-200",
  },
  COMPLETED: {
    label: "完了",
    cls: "bg-slate-100 text-slate-600 border border-slate-200",
  },
};

const PHASE_LABEL: Record<string, string> = {
  PHASE1: "第1相",
  PHASE2: "第2相",
  PHASE3: "第3相",
  PHASE4: "第4相",
  EARLY_PHASE1: "前期第1相",
  NA: "該当なし",
};

function formatPhases(phases: string[]): string {
  if (!phases || phases.length === 0) return "—";
  return phases.map((p) => PHASE_LABEL[p] ?? p).join("・");
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "—";
  // "2024-03" or "2024-03-15" 両対応
  const parts = dateStr.split("-");
  if (parts.length >= 2) return `${parts[0]}年${parseInt(parts[1])}月`;
  return dateStr;
}

function getStatusInfo(status: string) {
  return STATUS_LABEL[status] ?? { label: status, cls: "bg-slate-100 text-slate-600 border border-slate-200" };
}

// ─── Props ───────────────────────────────────────────────
interface Props {
  diseaseNameEn: string;
  diseaseNameJa: string;
  jrctSearchUrl: string;
}

// ─── コンポーネント ───────────────────────────────────────
export default function ClinicalTrials({ diseaseNameEn, diseaseNameJa, jrctSearchUrl }: Props) {
  const [trials, setTrials] = useState<TrialCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [totalCount, setTotalCount] = useState<number | null>(null);

  const worldSearchUrl = `https://clinicaltrials.gov/search?cond=${encodeURIComponent(diseaseNameEn)}&recrs=a&recrs=b`;
  const japanSearchUrl = `https://clinicaltrials.gov/search?cond=${encodeURIComponent(diseaseNameEn)}&locn=Japan&recrs=a&recrs=b`;

  useEffect(() => {
    let cancelled = false;

    async function fetchTrials() {
      setLoading(true);
      setError(false);
      try {
        const params = new URLSearchParams({
          "query.cond": diseaseNameEn,
          format: "json",
          pageSize: "5",
          "query.locn": "Japan",
          "filter.overallStatus": "RECRUITING,NOT_YET_RECRUITING",
          fields: [
            "NCTId",
            "BriefTitle",
            "OverallStatus",
            "Phase",
            "StartDate",
            "PrimaryCompletionDate",
            "LocationFacility",
            "LocationCountry",
            "LocationCity",
            "BriefSummary",
          ].join(","),
        });

        const res = await fetch(
          `https://clinicaltrials.gov/api/v2/studies?${params.toString()}`,
          { signal: AbortSignal.timeout(10000) }
        );

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data: CTGovResponse = await res.json();

        if (cancelled) return;

        setTotalCount(data.totalCount ?? 0);

        const parsed: TrialCard[] = (data.studies ?? []).map((s) => {
          const id = s.protocolSection.identificationModule;
          const status = s.protocolSection.statusModule;
          const design = s.protocolSection.designModule;
          const contacts = s.protocolSection.contactsLocationsModule;
          const desc = s.protocolSection.descriptionModule;

          return {
            nctId: id.nctId,
            title: id.briefTitle,
            status: status.overallStatus,
            phases: design?.phases ?? [],
            startDate: status.startDateStruct?.date,
            primaryCompletionDate: status.primaryCompletionDateStruct?.date,
            locations: contacts?.locations ?? [],
            briefSummary: desc?.briefSummary,
          };
        });

        setTrials(parsed);
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchTrials();
    return () => { cancelled = true; };
  }, [diseaseNameEn]);

  // ─── ローディング ──────────────────────────────────────
  if (loading) {
    return (
      <div className="bg-indigo-900 rounded-2xl p-6">
        <SectionHeader />
        <div className="flex items-center justify-center gap-3 py-10 text-indigo-300">
          <Loader2 className="animate-spin" size={20} />
          <span className="text-sm">ClinicalTrials.govから治験情報を取得中...</span>
        </div>
      </div>
    );
  }

  // ─── エラー ────────────────────────────────────────────
  if (error) {
    return (
      <div className="bg-indigo-900 rounded-2xl p-6">
        <SectionHeader />
        <div className="flex items-start gap-3 bg-white/10 rounded-xl p-4 mb-4">
          <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={18} />
          <div>
            <p className="text-white text-sm font-medium">治験情報の取得に失敗しました</p>
            <p className="text-indigo-300 text-xs mt-1">
              ネットワーク環境をご確認のうえ、直接データベースをご検索ください。
            </p>
          </div>
        </div>
        <FallbackLinks jrctSearchUrl={jrctSearchUrl} worldSearchUrl={worldSearchUrl} />
        <Notice />
      </div>
    );
  }

  // ─── 0件 ──────────────────────────────────────────────
  if (trials.length === 0) {
    return (
      <div className="bg-indigo-900 rounded-2xl p-6">
        <SectionHeader />
        <div className="bg-white/10 rounded-xl p-4 mb-4">
          <p className="text-white text-sm font-medium mb-1">
            現在、日本での募集中の治験は見つかりませんでした
          </p>
          <p className="text-indigo-300 text-xs">
            {diseaseNameJa}に関するグローバル治験や、jRCT（国内）も合わせてご確認ください。
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mb-4">
          <a
            href={worldSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
          >
            <Search size={14} />
            世界の治験を検索する
            <ExternalLink size={13} />
          </a>
          <a
            href={jrctSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-sm px-4 py-2.5 rounded-lg transition-colors border border-white/20"
          >
            jRCTで検索する
            <ExternalLink size={13} />
          </a>
        </div>
        <Notice />
      </div>
    );
  }

  // ─── 結果表示 ──────────────────────────────────────────
  // 日本施設を優先ソート
  const sorted = [...trials].sort((a, b) => {
    const aJp = a.locations.some((l) => l.country === "Japan") ? 0 : 1;
    const bJp = b.locations.some((l) => l.country === "Japan") ? 0 : 1;
    return aJp - bJp;
  });

  return (
    <div className="bg-indigo-900 rounded-2xl p-6 space-y-4">
      <div className="flex items-start justify-between">
        <SectionHeader />
        {totalCount !== null && (
          <span className="text-indigo-400 text-xs shrink-0">
            日本: {trials.length}件 表示
            {totalCount > trials.length && `（全${totalCount}件）`}
          </span>
        )}
      </div>

      <div className="space-y-3">
        {sorted.map((trial) => {
          const statusInfo = getStatusInfo(trial.status);
          const japanLocations = trial.locations.filter((l) => l.country === "Japan");
          const trialUrl = `https://clinicaltrials.gov/study/${trial.nctId}`;

          return (
            <div
              key={trial.nctId}
              className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl p-4 transition-colors"
            >
              {/* バッジ行 */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${statusInfo.cls}`}>
                  {statusInfo.label}
                </span>
                <span className="text-xs bg-white/10 text-indigo-200 px-2 py-0.5 rounded-full">
                  {formatPhases(trial.phases)}
                </span>
                <a
                  href={trialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-400 hover:text-indigo-200 font-mono ml-auto"
                >
                  {trial.nctId}
                </a>
              </div>

              {/* タイトル */}
              <p className="text-white font-semibold text-sm leading-snug mb-2">
                {trial.title}
              </p>

              {/* 概要（省略） */}
              {trial.briefSummary && (
                <p className="text-indigo-300 text-xs leading-relaxed mb-2 line-clamp-2">
                  {trial.briefSummary.replace(/\n/g, " ")}
                </p>
              )}

              {/* 施設・日程 */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-indigo-400 mb-3">
                {japanLocations.length > 0 && (
                  <span>
                    施設: {japanLocations.slice(0, 2).map((l) => l.facility ?? l.city ?? "—").join("、")}
                    {japanLocations.length > 2 && `他${japanLocations.length - 2}施設`}
                  </span>
                )}
                {trial.startDate && (
                  <span>開始: {formatDate(trial.startDate)}</span>
                )}
                {trial.primaryCompletionDate && (
                  <span>終了予定: {formatDate(trial.primaryCompletionDate)}</span>
                )}
              </div>

              {/* 詳細ボタン */}
              <a
                href={trialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-300 hover:text-white transition-colors"
              >
                詳細を見る（ClinicalTrials.gov）
                <ExternalLink size={12} />
              </a>
            </div>
          );
        })}
      </div>

      {/* 全件検索リンク */}
      <div className="border-t border-indigo-700 pt-4 flex flex-wrap gap-3">
        <a
          href={japanSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
        >
          ClinicalTrials.govで全件を見る
          <ExternalLink size={13} />
        </a>
        <a
          href={jrctSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-sm px-4 py-2 rounded-lg transition-colors border border-white/20"
        >
          jRCT（国内）を検索する
          <ExternalLink size={13} />
        </a>
      </div>

      <Notice />
    </div>
  );
}

// ─── 共通サブコンポーネント ────────────────────────────────
function SectionHeader() {
  return (
    <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wide mb-1">
      <FlaskConical size={15} />
      この疾患の治験情報（ClinicalTrials.gov）
    </div>
  );
}

function FallbackLinks({
  jrctSearchUrl,
  worldSearchUrl,
}: {
  jrctSearchUrl: string;
  worldSearchUrl: string;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={worldSearchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
      >
        ClinicalTrials.govで検索する
        <ExternalLink size={13} />
      </a>
      <a
        href={jrctSearchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-sm px-4 py-2.5 rounded-lg transition-colors border border-white/20"
      >
        jRCTで検索する
        <ExternalLink size={13} />
      </a>
    </div>
  );
}

function Notice() {
  return (
    <div className="text-indigo-400 text-xs leading-relaxed pt-1 border-t border-indigo-800 mt-2 space-y-0.5">
      <p>※ 治験情報はClinicalTrials.gov（米国NIH）のAPIから自動取得しています。表示件数・内容は取得時点のものです。</p>
      <p>※ 参加を検討される際は必ず担当医にご相談ください。</p>
    </div>
  );
}
