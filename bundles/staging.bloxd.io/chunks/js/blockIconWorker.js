(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var uu = __webpack_require__.u,
        Ru = __webpack_require__.e,
        yu = {},
        Eu = {};
      __webpack_require__.u = function(Ru) {
        return uu(Ru) + (yu.hasOwnProperty(Ru) ? "?" + yu[Ru] : "")
      }, __webpack_require__.e = function(Ku) {
        return Ru(Ku).catch((function(Ru) {
          var Qu = Eu.hasOwnProperty(Ku) ? Eu[Ku] : 4;
          if (Qu < 1) {
            var mu = uu(Ku);
            throw Ru.message = "Loading chunk " + Ku + " failed after 4 retries.\n(" + mu + ")", Ru.request = mu, yu[Ku] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete Eu[Ku]
            }), 0), Ru
          }
          return new Promise((function(uu) {
            var Ru = 4 - Qu + 1;
            setTimeout((function() {
              var Ru = "cache-bust=" + Date.now();
              yu[Ku] = Ru, Eu[Ku] = Qu - 1, uu(__webpack_require__.e(Ku))
            }), function(uu) {
              return 500 * Math.pow(2, uu)
            }(Ru))
          }))
        }))
      }
    }
  })();
  const uu = [15, 15, 15],
    Ru = {
      top: 1,
      left: .85,
      right: .7
    };

  function yu(Ru, yu, Eu) {
    let Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uu => 0 !== Ru[4 * uu + 3];
    const Qu = (uu, Ru) => uu < 0 || Ru < 0 || uu >= yu || Ru >= yu || !Ku(Ru * yu + uu),
      mu = [];
    for (let uu = 0; uu < yu; uu++)
      for (let Ru = 0; Ru < yu; Ru++)
        if (!Qu(Ru, uu)) uu: for (let Ku = -Eu; Ku <= Eu; Ku++) {
          const Ju = Eu - Math.abs(Ku);
          for (let Eu = -Ju; Eu <= Ju; Eu++)
            if (Qu(Ru + Eu, uu + Ku)) {
              mu.push(uu * yu + Ru);
              break uu
            }
        }
    for (const Ju of mu) Ru.set(uu, 4 * Ju), Ru[4 * Ju + 3] = 255
  }
  const Eu = Math.SQRT1_2,
    Ku = Math.sqrt(3) / 2,
    Qu = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    mu = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    Ju = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const Nu = 1e-6;

  function Xu(uu, Ru, yu, Eu) {
    let {
      origin: Ku,
      across: Qu,
      down: mu,
      texture: Ju,
      rect: [Xu, Vu, ru, Bu],
      shade: xu
    } = Eu;
    const Su = Qu.x * mu.y - Qu.y * mu.x;
    if (Math.abs(Su) < 1e-9) return;
    const pu = [Ku.x, Ku.x + Qu.x, Ku.x + mu.x, Ku.x + Qu.x + mu.x],
      Tu = [Ku.y, Ku.y + Qu.y, Ku.y + mu.y, Ku.y + Qu.y + mu.y],
      Wu = Math.max(0, Math.floor(Math.min(...pu))),
      ju = Math.min(yu - 1, Math.ceil(Math.max(...pu))),
      Hu = Math.max(0, Math.floor(Math.min(...Tu))),
      du = Math.min(yu - 1, Math.ceil(Math.max(...Tu)));
    for (let bu = Hu; bu <= du; bu++)
      for (let Eu = Wu; Eu <= ju; Eu++) {
        const pu = Eu + .5 - Ku.x,
          Tu = bu + .5 - Ku.y,
          Wu = (pu * mu.y - Tu * mu.x) / Su,
          ju = (Qu.x * Tu - Qu.y * pu) / Su;
        if (Wu < -Nu || Wu > 1 + Nu || ju < -Nu || ju > 1 + Nu) continue;
        const Hu = bu * yu + Eu;
        Ru[Hu] = 1;
        const du = Xu + Math.min(Math.max(Wu, 0), 1) * (ru - Xu),
          Cu = Vu + Math.min(Math.max(ju, 0), 1) * (Bu - Vu),
          ku = Math.min(Ju.width - 1, Math.floor(du * Ju.width)),
          eu = 4 * (Math.min(Ju.height - 1, Math.floor(Cu * Ju.height)) * Ju.width + ku),
          Au = Ju.pixels[eu + 3] / 255;
        if (0 === Au) continue;
        const Du = 4 * Hu,
          Mu = uu[Du + 3] / 255 * (1 - Au),
          Iu = Au + Mu;
        for (let Ru = 0; Ru < 3; Ru++) uu[Du + Ru] = (Ju.pixels[eu + Ru] * xu * Au + uu[Du + Ru] * Mu) / Iu;
        uu[Du + 3] = 255 * Iu
      }
  }

  function Vu(uu, Ru, yu) {
    const Eu = uu.get(Ru);
    if (void 0 === Eu) throw new Error(`no ${yu} was sent for ${Ru.slice(0,100)}`);
    return Eu
  }
  const ru = {
      pixelsOf(uu) {
        const Ru = new OffscreenCanvas(uu.width, uu.height),
          yu = Ru.getContext("2d");
        if (!yu) throw new Error("no 2D context");
        return yu.drawImage(uu, 0, 0), uu.close(), {
          width: Ru.width,
          height: Ru.height,
          pixels: yu.getImageData(0, 0, Ru.width, Ru.height).data
        }
      },
      async encode(uu, Ru) {
        const yu = new OffscreenCanvas(Ru, Ru),
          Eu = yu.getContext("2d");
        if (!Eu) throw new Error("no 2D context");
        Eu.putImageData(new ImageData(uu, Ru, Ru), 0, 0);
        const Ku = await yu.convertToBlob();
        return new Promise(((uu, Ru) => {
          const yu = new FileReader;
          yu.onload = () => {
            uu(yu.result)
          }, yu.onerror = () => {
            var uu;
            Ru(null !== (uu = yu.error) && void 0 !== uu ? uu : new Error("the icon did not encode"))
          }, yu.readAsDataURL(Ku)
        }))
      }
    },
    Bu = globalThis.WorkerGlobalScope;
  void 0 !== Bu && globalThis instanceof Bu && function(uu, Nu) {
    const ru = new Map,
      Bu = new Map,
      xu = (Ru, yu, Eu) => {
        (async () => {
          try {
            uu.postMessage({
              type: "drawn",
              id: Ru,
              url: await Nu.encode(Eu(), yu)
            })
          } catch (Ku) {
            uu.postMessage({
              type: "failed",
              message: String(Ku)
            })
          }
        })()
      };
    uu.onmessage = uu => {
      let {
        data: Su
      } = uu;
      if ("texture" === Su.type) ru.set(Su.url, Nu.pixelsOf(Su.bitmap));
      else if ("model" === Su.type) Bu.set(Su.name, {
        geometry: Su.geometry,
        texture: Nu.pixelsOf(Su.bitmap)
      });
      else if ("draw" === Su.type) {
        const {
          id: uu,
          top: Nu,
          left: Bu,
          right: pu,
          itemType: Tu,
          size: Wu,
          outlineWidth: ju
        } = Su;
        xu(uu, Wu, (() => function(uu, Qu, mu, Ju) {
          const Nu = .6 * mu,
            Vu = Nu * Eu,
            ru = Nu * Eu * .5,
            Bu = Nu * Ku,
            xu = Math.max(...Qu.boxes.map((uu => uu[4]))),
            Su = Vu / 2 + (mu - Vu) / 2,
            pu = ru + (mu - ru - ru - xu * Bu) / 2,
            Tu = (uu, Ru, yu) => ({
              x: Su + (uu - yu) * Vu,
              y: pu - ru + (uu + yu) * ru + (xu - Ru) * Bu
            }),
            Wu = (uu, Ru, yu, Eu, Ku, mu) => ({
              origin: uu,
              across: {
                x: Ru.x - uu.x,
                y: Ru.y - uu.y
              },
              down: {
                x: yu.x - uu.x,
                y: yu.y - uu.y
              },
              texture: Eu,
              rect: Qu.cropFaces ? Ku : [0, 0, 1, 1],
              shade: mu
            }),
            ju = new Uint8ClampedArray(mu * mu * 4),
            Hu = new Uint8Array(mu * mu),
            du = Ru;
          for (const [Ru, yu, Eu, Ku, bu, Cu] of Qu.boxes) {
            const Qu = Wu(Tu(Ku, bu, Cu), Tu(Ku, bu, Eu), Tu(Ku, yu, Cu), uu.right, [1 - Cu, 1 - bu, 1 - Eu, 1 - yu], du.right),
              Ju = Wu(Tu(Ru, bu, Cu), Tu(Ku, bu, Cu), Tu(Ru, yu, Cu), uu.left, [Ru, 1 - bu, Ku, 1 - yu], du.left),
              Nu = Wu(Tu(Ru, bu, Eu), Tu(Ku, bu, Eu), Tu(Ru, bu, Cu), uu.top, [Ru, Eu, Ku, Cu], du.top);
            for (const uu of [Qu, Ju, Nu]) Xu(ju, Hu, mu, uu)
          }
          return yu(ju, mu, Ju, (uu => 1 === Hu[uu])), ju
        }({
          top: Vu(ru, Nu, "texture"),
          left: Vu(ru, Bu, "texture"),
          right: Vu(ru, pu, "texture")
        }, function(uu) {
          return "SlabBlock" === uu ? mu : "StairsBlock" === uu ? Ju : Qu
        }(Tu), Wu, ju)))
      } else {
        const {
          id: uu,
          name: Ru,
          size: Eu,
          outlineWidth: Ku
        } = Su;
        xu(uu, Eu, (() => {
          const {
            geometry: uu,
            texture: Qu
          } = Vu(Bu, Ru, "model");
          return function(uu, Ru, Eu, Ku) {
            const {
              vertices: Qu,
              uvs: mu,
              indices: Ju,
              shades: Nu
            } = uu, Xu = .03125 * Eu, Vu = Eu - 2 * Xu, ru = new Float32Array(Qu.length);
            for (let yu = 0; yu < Qu.length; yu += 3) ru[yu] = Xu + Qu[yu] * Vu, ru[yu + 1] = Xu + Qu[yu + 1] * Vu, ru[yu + 2] = Qu[yu + 2];
            const Bu = new Float32Array(Eu * Eu).fill(-1 / 0),
              xu = new Uint8ClampedArray(Eu * Eu * 4),
              Su = 255 * uu.alphaCutoff;
            for (let yu = 0; yu < Ju.length; yu += 3) {
              const [uu, Ku, Qu] = [Ju[yu], Ju[yu + 1], Ju[yu + 2]], [Xu, Vu, pu] = [3 * uu, 3 * Ku, 3 * Qu], [Tu, Wu, ju, Hu, du, bu] = [ru[Xu], ru[Xu + 1], ru[Vu], ru[Vu + 1], ru[pu], ru[pu + 1]], Cu = (ju - Tu) * (bu - Wu) - (du - Tu) * (Hu - Wu);
              if (Math.abs(Cu) < 1e-9) continue;
              const ku = Nu[yu / 3],
                [eu, Au, Du, Mu, Iu, Gu] = [mu[2 * uu], mu[2 * uu + 1], mu[2 * Ku], mu[2 * Ku + 1], mu[2 * Qu], mu[2 * Qu + 1]],
                Uu = Math.max(0, Math.floor(Math.min(Tu, ju, du))),
                nu = Math.min(Eu - 1, Math.ceil(Math.max(Tu, ju, du))),
                su = Math.max(0, Math.floor(Math.min(Wu, Hu, bu))),
                tu = Math.min(Eu - 1, Math.ceil(Math.max(Wu, Hu, bu)));
              for (let yu = su; yu <= tu; yu++)
                for (let uu = Uu; uu <= nu; uu++) {
                  const [Ku, Qu] = [uu + .5, yu + .5], mu = ((Ku - Tu) * (bu - Wu) - (du - Tu) * (Qu - Wu)) / Cu, Ju = ((ju - Tu) * (Qu - Wu) - (Ku - Tu) * (Hu - Wu)) / Cu, Nu = 1 - mu - Ju;
                  if (Nu < 0 || mu < 0 || Ju < 0) continue;
                  const Uu = Nu * ru[Xu + 2] + mu * ru[Vu + 2] + Ju * ru[pu + 2],
                    nu = yu * Eu + uu;
                  if (Uu <= Bu[nu]) continue;
                  const su = Math.max(0, Math.min(Ru.width - 1, Math.floor((Nu * eu + mu * Du + Ju * Iu) * Ru.width))),
                    tu = 4 * (Math.max(0, Math.min(Ru.height - 1, Math.floor((Nu * Au + mu * Mu + Ju * Gu) * Ru.height))) * Ru.width + su);
                  Ru.pixels[tu + 3] < Su || (Bu[nu] = Uu, xu[4 * nu] = Ru.pixels[tu] * ku, xu[4 * nu + 1] = Ru.pixels[tu + 1] * ku, xu[4 * nu + 2] = Ru.pixels[tu + 2] * ku, xu[4 * nu + 3] = 255)
                }
            }
            return yu(xu, Eu, Ku), xu
          }(uu, Qu, Eu, Ku)
        }))
      }
    }, uu.postMessage({
      type: "started"
    })
  }(globalThis, ru)
})();