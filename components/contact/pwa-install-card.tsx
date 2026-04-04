import { getLocale } from "next-intl/server";
import { PwaInstallClient } from "./pwa-install-client";

export async function PwaInstallCard() {
  const locale = await getLocale();
  const isRtl = locale === "ar";
  return <PwaInstallClient isRtl={isRtl} />;
}
