(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var uu = __webpack_require__.u,
        Eu = __webpack_require__.e,
        ju = {},
        su = {};
      __webpack_require__.u = function(Eu) {
        return uu(Eu) + (ju.hasOwnProperty(Eu) ? "?" + ju[Eu] : "")
      }, __webpack_require__.e = function(Uu) {
        return Eu(Uu).catch((function(Eu) {
          var Zu = su.hasOwnProperty(Uu) ? su[Uu] : 4;
          if (Zu < 1) {
            var Xu = uu(Uu);
            if (Eu.message = "Loading chunk " + Uu + " failed after 4 retries.\n(" + Xu + ")", Eu.request = Xu, ju[Uu] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete su[Uu]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === Eu.code) {
              var lu = __webpack_require__.miniCssF(Uu);
              Eu.message = Eu.message.replace("Loading chunk", "Loading CSS chunk").replace(Xu, lu), Eu.request = lu
            }
            throw Eu
          }
          return new Promise((function(uu) {
            var Eu = 4 - Zu + 1;
            setTimeout((function() {
              var Eu = "cache-bust=" + Date.now();
              ju[Uu] = Eu, su[Uu] = Zu - 1, uu(__webpack_require__.e(Uu))
            }), function(uu) {
              return 500 * Math.pow(2, uu)
            }(Eu))
          }))
        }))
      }
    }
  })();
  const uu = Math.SQRT1_2,
    Eu = Math.SQRT1_2 / 2,
    ju = Math.sqrt(3) / 2,
    su = 2 * uu,
    Uu = 2 * Eu + ju;

  function Zu(Eu, ju) {
    const su = ju > 0 ? ju + 1 : 0,
      Zu = .6 * Eu - ju / uu;
    return Math.max(0, Math.min(Zu, (Eu - 2 * su) / Uu))
  }
  const Xu = [15, 15, 15],
    lu = {
      top: 1,
      left: .85,
      right: .7
    };

  function qu(uu, Eu, ju, Xu) {
    const {
      vertices: lu,
      uvs: qu,
      indices: fu,
      shades: Cu
    } = uu, cu = function(uu, Eu) {
      const ju = Zu(uu, Eu),
        Xu = su * ju,
        lu = Uu * ju;
      return {
        left: (uu - Xu) / 2,
        top: (uu - lu) / 2,
        width: Xu,
        height: lu
      }
    }(ju, Xu), Nu = new Float32Array(lu.length);
    for (let su = 0; su < lu.length; su += 3) Nu[su] = cu.left + lu[su] * cu.width, Nu[su + 1] = cu.top + lu[su + 1] * cu.height, Nu[su + 2] = lu[su + 2];
    const Ou = new Float32Array(ju * ju).fill(-1 / 0),
      Yu = new Uint8ClampedArray(ju * ju * 4),
      hu = 255 * uu.alphaCutoff;
    for (let su = 0; su < fu.length; su += 3) {
      const [uu, Uu, Zu] = [fu[su], fu[su + 1], fu[su + 2]], [Xu, lu, bu] = [3 * uu, 3 * Uu, 3 * Zu], [cu, Du, gu, Mu, eu, Gu] = [Nu[Xu], Nu[Xu + 1], Nu[lu], Nu[lu + 1], Nu[bu], Nu[bu + 1]], pu = (gu - cu) * (Gu - Du) - (eu - cu) * (Mu - Du);
      if (Math.abs(pu) < 1e-9) continue;
      const wu = Cu[su / 3],
        [Ju, du, au, Pu, ou, ku] = [qu[2 * uu], qu[2 * uu + 1], qu[2 * Uu], qu[2 * Uu + 1], qu[2 * Zu], qu[2 * Zu + 1]],
        mu = Math.max(0, Math.floor(Math.min(cu, gu, eu))),
        vu = Math.min(ju - 1, Math.ceil(Math.max(cu, gu, eu))),
        Ku = Math.max(0, Math.floor(Math.min(Du, Mu, Gu))),
        Vu = Math.min(ju - 1, Math.ceil(Math.max(Du, Mu, Gu)));
      for (let su = Ku; su <= Vu; su++)
        for (let uu = mu; uu <= vu; uu++) {
          const [Uu, Zu] = [uu + .5, su + .5], qu = ((Uu - cu) * (Gu - Du) - (eu - cu) * (Zu - Du)) / pu, fu = ((gu - cu) * (Zu - Du) - (Uu - cu) * (Mu - Du)) / pu, Cu = 1 - qu - fu;
          if (Cu < 0 || qu < 0 || fu < 0) continue;
          const mu = Cu * Nu[Xu + 2] + qu * Nu[lu + 2] + fu * Nu[bu + 2],
            vu = su * ju + uu;
          if (mu <= Ou[vu]) continue;
          const Ku = Math.max(0, Math.min(Eu.width - 1, Math.floor((Cu * Ju + qu * au + fu * ou) * Eu.width))),
            Vu = 4 * (Math.max(0, Math.min(Eu.height - 1, Math.floor((Cu * du + qu * Pu + fu * ku) * Eu.height))) * Eu.width + Ku);
          Eu.pixels[Vu + 3] < hu || (Ou[vu] = mu, Yu[4 * vu] = Eu.pixels[Vu] * wu, Yu[4 * vu + 1] = Eu.pixels[Vu + 1] * wu, Yu[4 * vu + 2] = Eu.pixels[Vu + 2] * wu, Yu[4 * vu + 3] = 255)
        }
    }
    return bu(Yu, ju, Xu), Yu
  }
  let fu = NaN,
    Cu = new Int32Array(0);

  function bu(uu, Eu, ju) {
    let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Eu => 0 !== uu[4 * Eu + 3];
    const Uu = new Uint8Array(Eu * Eu);
    for (let Xu = 0; Xu < Eu * Eu; Xu++) Uu[Xu] = su(Xu) ? 1 : 0;
    const Zu = (uu, ju) => uu >= 0 && ju >= 0 && uu < Eu && ju < Eu && 0 === Uu[ju * Eu + uu],
      lu = new Float32Array(Eu * Eu).fill(1 / 0),
      qu = function(uu) {
        if (uu !== fu) {
          const Eu = Math.ceil(uu + 1),
            ju = [];
          for (let su = -Eu; su <= Eu; su++)
            for (let Uu = -Eu; Uu <= Eu; Uu++) {
              const Eu = Uu * Uu + su * su;
              Eu > 0 && Eu < (uu + 1) ** 2 && ju.push(Uu, su, Eu)
            }
          fu = uu, Cu = Int32Array.from(ju)
        }
        return Cu
      }(ju);
    for (let Xu = 0; Xu < Eu; Xu++)
      for (let uu = 0; uu < Eu; uu++) {
        if (1 === Uu[Xu * Eu + uu] && (Zu(uu - 1, Xu) || Zu(uu + 1, Xu) || Zu(uu, Xu - 1) || Zu(uu, Xu + 1)))
          for (let ju = 0; ju < qu.length; ju += 3) {
            const su = uu + qu[ju],
              Uu = Xu + qu[ju + 1];
            if (su >= 0 && Uu >= 0 && su < Eu && Uu < Eu) {
              const uu = Uu * Eu + su;
              lu[uu] = Math.min(lu[uu], qu[ju + 2])
            }
          }
      }
    for (let fu = 0; fu < Eu * Eu; fu++) 1 !== Uu[fu] && lu[fu] !== 1 / 0 && (uu.set(Xu, 4 * fu), uu[4 * fu + 3] = Math.round(255 * Math.min(1, ju + 1 - Math.sqrt(lu[fu]))))
  }
  const cu = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    Nu = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    Ou = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const Yu = 1e-6;

  function hu(uu, Eu, ju, su) {
    let {
      origin: Uu,
      across: Zu,
      down: Xu,
      texture: lu,
      rect: [qu, fu, Cu, bu],
      shade: cu
    } = su;
    const Nu = Zu.x * Xu.y - Zu.y * Xu.x;
    if (Math.abs(Nu) < 1e-9) return;
    const Ou = [Uu.x, Uu.x + Zu.x, Uu.x + Xu.x, Uu.x + Zu.x + Xu.x],
      hu = [Uu.y, Uu.y + Zu.y, Uu.y + Xu.y, Uu.y + Zu.y + Xu.y],
      Du = Math.max(0, Math.floor(Math.min(...Ou))),
      gu = Math.min(ju - 1, Math.ceil(Math.max(...Ou))),
      Mu = Math.max(0, Math.floor(Math.min(...hu))),
      eu = Math.min(ju - 1, Math.ceil(Math.max(...hu)));
    for (let Gu = Mu; Gu <= eu; Gu++)
      for (let su = Du; su <= gu; su++) {
        const Ou = su + .5 - Uu.x,
          hu = Gu + .5 - Uu.y,
          Du = (Ou * Xu.y - hu * Xu.x) / Nu,
          gu = (Zu.x * hu - Zu.y * Ou) / Nu;
        if (Du < -Yu || Du > 1 + Yu || gu < -Yu || gu > 1 + Yu) continue;
        const Mu = Gu * ju + su;
        Eu[Mu] = 1;
        const eu = qu + Math.min(Math.max(Du, 0), 1) * (Cu - qu),
          pu = fu + Math.min(Math.max(gu, 0), 1) * (bu - fu),
          wu = Math.min(lu.width - 1, Math.floor(eu * lu.width)),
          Ju = 4 * (Math.min(lu.height - 1, Math.floor(pu * lu.height)) * lu.width + wu),
          du = lu.pixels[Ju + 3] / 255;
        if (0 === du) continue;
        const au = 4 * Mu,
          Pu = uu[au + 3] / 255 * (1 - du),
          ou = du + Pu;
        for (let Eu = 0; Eu < 3; Eu++) uu[au + Eu] = (lu.pixels[Ju + Eu] * cu * du + uu[au + Eu] * Pu) / ou;
        uu[au + 3] = 255 * ou
      }
  }

  function Du(uu, Eu, ju) {
    const su = uu.get(Eu);
    if (void 0 === su) throw new Error(`no ${ju} was sent for ${Eu.slice(0,100)}`);
    return su
  }
  const gu = {
      pixelsOf(uu) {
        const Eu = new OffscreenCanvas(uu.width, uu.height),
          ju = Eu.getContext("2d");
        if (!ju) throw new Error("no 2D context");
        return ju.drawImage(uu, 0, 0), uu.close(), {
          width: Eu.width,
          height: Eu.height,
          pixels: ju.getImageData(0, 0, Eu.width, Eu.height).data
        }
      },
      async encode(uu, Eu) {
        const ju = new OffscreenCanvas(Eu, Eu),
          su = ju.getContext("2d");
        if (!su) throw new Error("no 2D context");
        su.putImageData(new ImageData(uu, Eu, Eu), 0, 0);
        const Uu = await ju.convertToBlob();
        return new Promise(((uu, Eu) => {
          const ju = new FileReader;
          ju.onload = () => {
            uu(ju.result)
          }, ju.onerror = () => {
            var uu;
            Eu(null !== (uu = ju.error) && void 0 !== uu ? uu : new Error("the icon did not encode"))
          }, ju.readAsDataURL(Uu)
        }))
      }
    },
    Mu = globalThis.WorkerGlobalScope;
  void 0 !== Mu && globalThis instanceof Mu && function(su, Uu) {
    const Xu = new Map,
      fu = new Map,
      Cu = (uu, Eu, ju) => {
        (async () => {
          try {
            su.postMessage({
              type: "drawn",
              id: uu,
              url: await Uu.encode(ju(), Eu)
            })
          } catch (Zu) {
            su.postMessage({
              type: "failed",
              message: String(Zu)
            })
          }
        })()
      };
    su.onmessage = su => {
      let {
        data: Yu
      } = su;
      if ("texture" === Yu.type) Xu.set(Yu.url, Uu.pixelsOf(Yu.bitmap));
      else if ("model" === Yu.type) fu.set(Yu.name, {
        geometry: Yu.geometry,
        texture: Uu.pixelsOf(Yu.bitmap)
      });
      else if ("draw" === Yu.type) {
        const {
          id: su,
          top: Uu,
          left: qu,
          right: fu,
          itemType: gu,
          size: Mu,
          outlineWidth: eu
        } = Yu;
        Cu(su, Mu, (() => function(su, Uu, Xu, qu) {
          const fu = Zu(Xu, qu),
            Cu = fu * uu,
            cu = fu * Eu,
            Nu = fu * ju,
            Ou = Math.max(...Uu.boxes.map((uu => uu[4]))),
            Yu = Xu / 2,
            Du = cu + (Xu - cu - cu - Ou * Nu) / 2,
            gu = (uu, Eu, ju) => ({
              x: Yu + (uu - ju) * Cu,
              y: Du - cu + (uu + ju) * cu + (Ou - Eu) * Nu
            }),
            Mu = (uu, Eu, ju, su, Zu, Xu) => ({
              origin: uu,
              across: {
                x: Eu.x - uu.x,
                y: Eu.y - uu.y
              },
              down: {
                x: ju.x - uu.x,
                y: ju.y - uu.y
              },
              texture: su,
              rect: Uu.cropFaces ? Zu : [0, 0, 1, 1],
              shade: Xu
            }),
            eu = new Uint8ClampedArray(Xu * Xu * 4),
            Gu = new Uint8Array(Xu * Xu),
            pu = lu;
          for (const [uu, Eu, ju, Zu, lu, bu] of Uu.boxes) {
            const Uu = Mu(gu(Zu, lu, bu), gu(Zu, lu, ju), gu(Zu, Eu, bu), su.right, [1 - bu, 1 - lu, 1 - ju, 1 - Eu], pu.right),
              qu = Mu(gu(uu, lu, bu), gu(Zu, lu, bu), gu(uu, Eu, bu), su.left, [uu, 1 - lu, Zu, 1 - Eu], pu.left),
              fu = Mu(gu(uu, lu, ju), gu(Zu, lu, ju), gu(uu, lu, bu), su.top, [uu, ju, Zu, bu], pu.top);
            for (const uu of [Uu, qu, fu]) hu(eu, Gu, Xu, uu)
          }
          return bu(eu, Xu, qu, (uu => 1 === Gu[uu])), eu
        }({
          top: Du(Xu, Uu, "texture"),
          left: Du(Xu, qu, "texture"),
          right: Du(Xu, fu, "texture")
        }, function(uu) {
          return "SlabBlock" === uu ? Nu : "StairsBlock" === uu ? Ou : cu
        }(gu), Mu, eu)))
      } else {
        const {
          id: uu,
          name: Eu,
          size: ju,
          outlineWidth: su
        } = Yu;
        Cu(uu, ju, (() => {
          const {
            geometry: uu,
            texture: Uu
          } = Du(fu, Eu, "model");
          return qu(uu, Uu, ju, su)
        }))
      }
    }, su.postMessage({
      type: "started"
    })
  }(globalThis, gu)
})();