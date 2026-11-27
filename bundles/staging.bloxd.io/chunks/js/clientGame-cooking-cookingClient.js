export const id = 16;
export const ids = [16];
export const modules = {
  41034: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => Wr
    });
    const Zr = [
        [25, 8, 56],
        [25, 8, 54]
      ],
      Wr = function(rr, Sr, Qr) {
        let Wr;
        return {
          onCreate: rr => {
            Wr = rr
          },
          onPlayerAltAction: (rr, Sr, Qr, ar, jr, Ir) => {
            Zr.some((rr => rr[0] === Sr && rr[2] === ar)) && Wr.openShop(rr, !1)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);