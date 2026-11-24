export const id = 55;
export const ids = [55];
export const modules = {
  51242: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      startPageTexturePackFeed: () => Sp
    });
    var Op = cp(1211),
      op = cp(44),
      Ip = cp(51229);

    function Sp(pp, ip) {
      const cp = new Ip.b({
        store: op.g,
        warn: pp,
        oneShot: ip,
        fetchLatest: async pp => {
          const ip = await fetch(`${Op.clientSideServerUrls.texturePackUrl}/${pp}.json`, {
            cache: "reload"
          });
          if (!ip.ok) throw new Error(`fetching texture pack ${pp} answered HTTP ${ip.status}`);
          return await ip.json()
        }
      });
      return (0, Ip.d)(cp), cp
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);