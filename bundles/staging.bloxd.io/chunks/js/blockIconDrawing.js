export const id = 2;
export const ids = [2];
export const modules = {
  36776: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      drawBlockIcon: () => Du,
      drawBlockIconUrl: () => gu,
      getDrawnBlockIcon: () => hu
    });
    var su = ju(36779);
    const Uu = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      Zu = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      Xu = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const lu = 1e-6;

    function qu(uu, Eu, ju, su) {
      let {
        origin: Uu,
        across: Zu,
        down: Xu,
        texture: qu,
        rect: [fu, Cu, bu, cu],
        shade: Nu
      } = su;
      const Ou = Zu.x * Xu.y - Zu.y * Xu.x;
      if (Math.abs(Ou) < 1e-9) return;
      const Yu = [Uu.x, Uu.x + Zu.x, Uu.x + Xu.x, Uu.x + Zu.x + Xu.x],
        hu = [Uu.y, Uu.y + Zu.y, Uu.y + Xu.y, Uu.y + Zu.y + Xu.y],
        Du = Math.max(0, Math.floor(Math.min(...Yu))),
        gu = Math.min(ju - 1, Math.ceil(Math.max(...Yu))),
        Mu = Math.max(0, Math.floor(Math.min(...hu))),
        eu = Math.min(ju - 1, Math.ceil(Math.max(...hu)));
      for (let Gu = Mu; Gu <= eu; Gu++)
        for (let su = Du; su <= gu; su++) {
          const Yu = su + .5 - Uu.x,
            hu = Gu + .5 - Uu.y,
            Du = (Yu * Xu.y - hu * Xu.x) / Ou,
            gu = (Zu.x * hu - Zu.y * Yu) / Ou;
          if (Du < -lu || Du > 1 + lu || gu < -lu || gu > 1 + lu) continue;
          const Mu = Gu * ju + su;
          Eu[Mu] = 1;
          const eu = fu + Math.min(Math.max(Du, 0), 1) * (bu - fu),
            pu = Cu + Math.min(Math.max(gu, 0), 1) * (cu - Cu),
            wu = Math.min(qu.width - 1, Math.floor(eu * qu.width)),
            Ju = 4 * (Math.min(qu.height - 1, Math.floor(pu * qu.height)) * qu.width + wu),
            du = qu.pixels[Ju + 3] / 255;
          if (0 === du) continue;
          const au = 4 * Mu,
            Pu = uu[au + 3] / 255 * (1 - du),
            ou = du + Pu;
          for (let Eu = 0; Eu < 3; Eu++) uu[au + Eu] = (qu.pixels[Ju + Eu] * Nu * du + uu[au + Eu] * Pu) / ou;
          uu[au + 3] = 255 * ou
        }
    }
    var fu = ju(36784);
    const Cu = new Map,
      bu = new Map,
      cu = new Map,
      Nu = new Map;

    function Ou(uu, Eu, ju) {
      return `${Eu}|${ju}|${uu}`
    }

    function Yu(uu, Eu, ju) {
      let su = uu.get(Eu);
      return void 0 === su && (su = ju().catch((ju => {
        throw uu.delete(Eu), ju
      })), uu.set(Eu, su)), su
    }

    function hu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return bu.get(Ou(uu, Eu, ju))
    }

    function Du(uu, Eu, ju, su) {
      const Uu = Ou(uu, Eu, ju);
      return Yu(Cu, Uu, (async () => {
        const Zu = await Mu(su(uu), Eu, ju);
        return bu.set(Uu, Zu), Zu
      }))
    }

    function gu(uu, Eu, ju, su) {
      return Yu(cu, Ou(uu, Eu, ju), (async () => {
        var Uu;
        const Zu = su(uu);
        return null !== (Uu = await (0, fu.d)(Zu, Eu, ju)) && void 0 !== Uu ? Uu : (await Mu(Zu, Eu, ju)).toDataURL()
      }))
    }
    async function Mu(uu, Eu, ju) {
      let {
        top: lu,
        left: fu,
        right: Cu,
        itemType: bu
      } = uu;
      const [cu, Nu, Ou] = await Promise.all([eu(lu), eu(fu), eu(Cu)]), Yu = function(uu, Eu, ju, Uu) {
        const Zu = (0, su.f)(ju, Uu),
          Xu = Zu * su.b.across,
          lu = Zu * su.b.down,
          fu = Zu * su.b.up,
          Cu = Math.max(...Eu.boxes.map((uu => uu[4]))),
          bu = ju / 2,
          cu = lu + (ju - lu - lu - Cu * fu) / 2,
          Nu = (uu, Eu, ju) => ({
            x: bu + (uu - ju) * Xu,
            y: cu - lu + (uu + ju) * lu + (Cu - Eu) * fu
          }),
          Ou = (uu, ju, su, Uu, Zu, Xu) => ({
            origin: uu,
            across: {
              x: ju.x - uu.x,
              y: ju.y - uu.y
            },
            down: {
              x: su.x - uu.x,
              y: su.y - uu.y
            },
            texture: Uu,
            rect: Eu.cropFaces ? Zu : [0, 0, 1, 1],
            shade: Xu
          }),
          Yu = new Uint8ClampedArray(ju * ju * 4),
          hu = new Uint8Array(ju * ju),
          Du = su.e;
        for (const [su, gu, Mu, eu, Gu, pu] of Eu.boxes) {
          const Eu = Ou(Nu(eu, Gu, pu), Nu(eu, Gu, Mu), Nu(eu, gu, pu), uu.right, [1 - pu, 1 - Gu, 1 - Mu, 1 - gu], Du.right),
            Uu = Ou(Nu(su, Gu, pu), Nu(eu, Gu, pu), Nu(su, gu, pu), uu.left, [su, 1 - Gu, eu, 1 - gu], Du.left),
            Zu = Ou(Nu(su, Gu, Mu), Nu(eu, Gu, Mu), Nu(su, Gu, pu), uu.top, [su, Mu, eu, pu], Du.top);
          for (const uu of [Eu, Uu, Zu]) qu(Yu, hu, ju, uu)
        }
        return (0, su.j)(Yu, ju, Uu, (uu => 1 === hu[uu])), Yu
      }({
        top: cu,
        left: Nu,
        right: Ou
      }, function(uu) {
        return "SlabBlock" === uu ? Zu : "StairsBlock" === uu ? Xu : Uu
      }(bu), Eu, ju), hu = document.createElement("canvas");
      hu.width = Eu, hu.height = Eu;
      const Du = hu.getContext("2d");
      if (!Du) throw new Error("Failed to get 2D context");
      return Du.putImageData(new ImageData(Yu, Eu, Eu), 0, 0), hu
    }

    function eu(uu) {
      return Yu(Nu, uu, (async () => {
        const Eu = await (0, fu.k)(uu),
          ju = document.createElement("canvas");
        ju.width = Eu.width, ju.height = Eu.height;
        const su = ju.getContext("2d");
        if (!su) throw new Error("Failed to get 2D context");
        return su.drawImage(Eu, 0, 0), {
          width: Eu.width,
          height: Eu.height,
          pixels: su.getImageData(0, 0, Eu.width, Eu.height).data
        }
      }))
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);