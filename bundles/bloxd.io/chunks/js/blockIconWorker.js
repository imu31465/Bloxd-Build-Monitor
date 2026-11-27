(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var ee = __webpack_require__.u,
        ie = __webpack_require__.e,
        He = {},
        ye = {};
      __webpack_require__.u = function(ie) {
        return ee(ie) + (He.hasOwnProperty(ie) ? "?" + He[ie] : "")
      }, __webpack_require__.e = function(be) {
        return ie(be).catch((function(ie) {
          var Me = ye.hasOwnProperty(be) ? ye[be] : 4;
          if (Me < 1) {
            var Ke = ee(be);
            if (ie.message = "Loading chunk " + be + " failed after 4 retries.\n(" + Ke + ")", ie.request = Ke, He[be] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete ye[be]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === ie.code) {
              var Ue = __webpack_require__.miniCssF(be);
              ie.message = ie.message.replace("Loading chunk", "Loading CSS chunk").replace(Ke, Ue), ie.request = Ue
            }
            throw ie
          }
          return new Promise((function(ee) {
            var ie = 4 - Me + 1;
            setTimeout((function() {
              var ie = "cache-bust=" + Date.now();
              He[be] = ie, ye[be] = Me - 1, ee(__webpack_require__.e(be))
            }), function(ee) {
              return 500 * Math.pow(2, ee)
            }(ie))
          }))
        }))
      }
    }
  })();
  const ee = Math.SQRT1_2,
    ie = Math.SQRT1_2 / 2,
    He = Math.sqrt(3) / 2,
    ye = 2 * ee,
    be = 2 * ie + He;

  function Me(ie, He) {
    const ye = He > 0 ? He + 1 : 0,
      Me = .6 * ie - He / ee;
    return Math.max(0, Math.min(Me, (ie - 2 * ye) / be))
  }
  const Ke = [15, 15, 15],
    Ue = {
      top: 1,
      left: .85,
      right: .7
    };

  function Fe(ee, ie, He, Ke) {
    const {
      vertices: Ue,
      uvs: Fe,
      indices: Je,
      shades: oe
    } = ee, ke = function(ee, ie) {
      const He = Me(ee, ie),
        Ke = ye * He,
        Ue = be * He;
      return {
        left: (ee - Ke) / 2,
        top: (ee - Ue) / 2,
        width: Ke,
        height: Ue
      }
    }(He, Ke), qe = new Float32Array(Ue.length);
    for (let ye = 0; ye < Ue.length; ye += 3) qe[ye] = ke.left + Ue[ye] * ke.width, qe[ye + 1] = ke.top + Ue[ye + 1] * ke.height, qe[ye + 2] = Ue[ye + 2];
    const fe = new Float32Array(He * He).fill(-1 / 0),
      Te = new Uint8ClampedArray(He * He * 4),
      pe = 255 * ee.alphaCutoff;
    for (let ye = 0; ye < Je.length; ye += 3) {
      const [ee, be, Me] = [Je[ye], Je[ye + 1], Je[ye + 2]], [Ke, Ue, Re] = [3 * ee, 3 * be, 3 * Me], [ke, Xe, ze, Be, Ee, ge] = [qe[Ke], qe[Ke + 1], qe[Ue], qe[Ue + 1], qe[Re], qe[Re + 1]], Oe = (ze - ke) * (ge - Xe) - (Ee - ke) * (Be - Xe);
      if (Math.abs(Oe) < 1e-9) continue;
      const de = oe[ye / 3],
        [We, te, Ze, we, De, Pe] = [Fe[2 * ee], Fe[2 * ee + 1], Fe[2 * be], Fe[2 * be + 1], Fe[2 * Me], Fe[2 * Me + 1]],
        Ae = Math.max(0, Math.floor(Math.min(ke, ze, Ee))),
        Ye = Math.min(He - 1, Math.ceil(Math.max(ke, ze, Ee))),
        Ve = Math.max(0, Math.floor(Math.min(Xe, Be, ge))),
        ae = Math.min(He - 1, Math.ceil(Math.max(Xe, Be, ge)));
      for (let ye = Ve; ye <= ae; ye++)
        for (let ee = Ae; ee <= Ye; ee++) {
          const [be, Me] = [ee + .5, ye + .5], Fe = ((be - ke) * (ge - Xe) - (Ee - ke) * (Me - Xe)) / Oe, Je = ((ze - ke) * (Me - Xe) - (be - ke) * (Be - Xe)) / Oe, oe = 1 - Fe - Je;
          if (oe < 0 || Fe < 0 || Je < 0) continue;
          const Ae = oe * qe[Ke + 2] + Fe * qe[Ue + 2] + Je * qe[Re + 2],
            Ye = ye * He + ee;
          if (Ae <= fe[Ye]) continue;
          const Ve = Math.max(0, Math.min(ie.width - 1, Math.floor((oe * We + Fe * Ze + Je * De) * ie.width))),
            ae = 4 * (Math.max(0, Math.min(ie.height - 1, Math.floor((oe * te + Fe * we + Je * Pe) * ie.height))) * ie.width + Ve);
          ie.pixels[ae + 3] < pe || (fe[Ye] = Ae, Te[4 * Ye] = ie.pixels[ae] * de, Te[4 * Ye + 1] = ie.pixels[ae + 1] * de, Te[4 * Ye + 2] = ie.pixels[ae + 2] * de, Te[4 * Ye + 3] = 255)
        }
    }
    return Re(Te, He, Ke), Te
  }
  let Je = NaN,
    oe = new Int32Array(0);

  function Re(ee, ie, He) {
    let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ie => 0 !== ee[4 * ie + 3];
    const be = new Uint8Array(ie * ie);
    for (let Ke = 0; Ke < ie * ie; Ke++) be[Ke] = ye(Ke) ? 1 : 0;
    const Me = (ee, He) => ee >= 0 && He >= 0 && ee < ie && He < ie && 0 === be[He * ie + ee],
      Ue = new Float32Array(ie * ie).fill(1 / 0),
      Fe = function(ee) {
        if (ee !== Je) {
          const ie = Math.ceil(ee + 1),
            He = [];
          for (let ye = -ie; ye <= ie; ye++)
            for (let be = -ie; be <= ie; be++) {
              const ie = be * be + ye * ye;
              ie > 0 && ie < (ee + 1) ** 2 && He.push(be, ye, ie)
            }
          Je = ee, oe = Int32Array.from(He)
        }
        return oe
      }(He);
    for (let Ke = 0; Ke < ie; Ke++)
      for (let ee = 0; ee < ie; ee++) {
        if (1 === be[Ke * ie + ee] && (Me(ee - 1, Ke) || Me(ee + 1, Ke) || Me(ee, Ke - 1) || Me(ee, Ke + 1)))
          for (let He = 0; He < Fe.length; He += 3) {
            const ye = ee + Fe[He],
              be = Ke + Fe[He + 1];
            if (ye >= 0 && be >= 0 && ye < ie && be < ie) {
              const ee = be * ie + ye;
              Ue[ee] = Math.min(Ue[ee], Fe[He + 2])
            }
          }
      }
    for (let Je = 0; Je < ie * ie; Je++) 1 !== be[Je] && Ue[Je] !== 1 / 0 && (ee.set(Ke, 4 * Je), ee[4 * Je + 3] = Math.round(255 * Math.min(1, He + 1 - Math.sqrt(Ue[Je]))))
  }
  const ke = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    qe = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    fe = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const Te = 1e-6;

  function pe(ee, ie, He, ye) {
    let {
      origin: be,
      across: Me,
      down: Ke,
      texture: Ue,
      rect: [Fe, Je, oe, Re],
      shade: ke
    } = ye;
    const qe = Me.x * Ke.y - Me.y * Ke.x;
    if (Math.abs(qe) < 1e-9) return;
    const fe = [be.x, be.x + Me.x, be.x + Ke.x, be.x + Me.x + Ke.x],
      pe = [be.y, be.y + Me.y, be.y + Ke.y, be.y + Me.y + Ke.y],
      Xe = Math.max(0, Math.floor(Math.min(...fe))),
      ze = Math.min(He - 1, Math.ceil(Math.max(...fe))),
      Be = Math.max(0, Math.floor(Math.min(...pe))),
      Ee = Math.min(He - 1, Math.ceil(Math.max(...pe)));
    for (let ge = Be; ge <= Ee; ge++)
      for (let ye = Xe; ye <= ze; ye++) {
        const fe = ye + .5 - be.x,
          pe = ge + .5 - be.y,
          Xe = (fe * Ke.y - pe * Ke.x) / qe,
          ze = (Me.x * pe - Me.y * fe) / qe;
        if (Xe < -Te || Xe > 1 + Te || ze < -Te || ze > 1 + Te) continue;
        const Be = ge * He + ye;
        ie[Be] = 1;
        const Ee = Fe + Math.min(Math.max(Xe, 0), 1) * (oe - Fe),
          Oe = Je + Math.min(Math.max(ze, 0), 1) * (Re - Je),
          de = Math.min(Ue.width - 1, Math.floor(Ee * Ue.width)),
          We = 4 * (Math.min(Ue.height - 1, Math.floor(Oe * Ue.height)) * Ue.width + de),
          te = Ue.pixels[We + 3] / 255;
        if (0 === te) continue;
        const Ze = 4 * Be,
          we = ee[Ze + 3] / 255 * (1 - te),
          De = te + we;
        for (let ie = 0; ie < 3; ie++) ee[Ze + ie] = (Ue.pixels[We + ie] * ke * te + ee[Ze + ie] * we) / De;
        ee[Ze + 3] = 255 * De
      }
  }

  function Xe(ee, ie, He) {
    const ye = ee.get(ie);
    if (void 0 === ye) throw new Error(`no ${He} was sent for ${ie.slice(0,100)}`);
    return ye
  }
  const ze = {
      pixelsOf(ee) {
        const ie = new OffscreenCanvas(ee.width, ee.height),
          He = ie.getContext("2d");
        if (!He) throw new Error("no 2D context");
        return He.drawImage(ee, 0, 0), ee.close(), {
          width: ie.width,
          height: ie.height,
          pixels: He.getImageData(0, 0, ie.width, ie.height).data
        }
      },
      async encode(ee, ie) {
        const He = new OffscreenCanvas(ie, ie),
          ye = He.getContext("2d");
        if (!ye) throw new Error("no 2D context");
        ye.putImageData(new ImageData(ee, ie, ie), 0, 0);
        const be = await He.convertToBlob();
        return new Promise(((ee, ie) => {
          const He = new FileReader;
          He.onload = () => {
            ee(He.result)
          }, He.onerror = () => {
            var ee;
            ie(null !== (ee = He.error) && void 0 !== ee ? ee : new Error("the icon did not encode"))
          }, He.readAsDataURL(be)
        }))
      }
    },
    Be = globalThis.WorkerGlobalScope;
  void 0 !== Be && globalThis instanceof Be && function(ye, be) {
    const Ke = new Map,
      Je = new Map,
      oe = (ee, ie, He) => {
        (async () => {
          try {
            ye.postMessage({
              type: "drawn",
              id: ee,
              url: await be.encode(He(), ie)
            })
          } catch (Me) {
            ye.postMessage({
              type: "failed",
              message: String(Me)
            })
          }
        })()
      };
    ye.onmessage = ye => {
      let {
        data: Te
      } = ye;
      if ("texture" === Te.type) Ke.set(Te.url, be.pixelsOf(Te.bitmap));
      else if ("model" === Te.type) Je.set(Te.name, {
        geometry: Te.geometry,
        texture: be.pixelsOf(Te.bitmap)
      });
      else if ("draw" === Te.type) {
        const {
          id: ye,
          top: be,
          left: Fe,
          right: Je,
          itemType: ze,
          size: Be,
          outlineWidth: Ee
        } = Te;
        oe(ye, Be, (() => function(ye, be, Ke, Fe) {
          const Je = Me(Ke, Fe),
            oe = Je * ee,
            ke = Je * ie,
            qe = Je * He,
            fe = Math.max(...be.boxes.map((ee => ee[4]))),
            Te = Ke / 2,
            Xe = ke + (Ke - ke - ke - fe * qe) / 2,
            ze = (ee, ie, He) => ({
              x: Te + (ee - He) * oe,
              y: Xe - ke + (ee + He) * ke + (fe - ie) * qe
            }),
            Be = (ee, ie, He, ye, Me, Ke) => ({
              origin: ee,
              across: {
                x: ie.x - ee.x,
                y: ie.y - ee.y
              },
              down: {
                x: He.x - ee.x,
                y: He.y - ee.y
              },
              texture: ye,
              rect: be.cropFaces ? Me : [0, 0, 1, 1],
              shade: Ke
            }),
            Ee = new Uint8ClampedArray(Ke * Ke * 4),
            ge = new Uint8Array(Ke * Ke),
            Oe = Ue;
          for (const [ee, ie, He, Me, Ue, Re] of be.boxes) {
            const be = Be(ze(Me, Ue, Re), ze(Me, Ue, He), ze(Me, ie, Re), ye.right, [1 - Re, 1 - Ue, 1 - He, 1 - ie], Oe.right),
              Fe = Be(ze(ee, Ue, Re), ze(Me, Ue, Re), ze(ee, ie, Re), ye.left, [ee, 1 - Ue, Me, 1 - ie], Oe.left),
              Je = Be(ze(ee, Ue, He), ze(Me, Ue, He), ze(ee, Ue, Re), ye.top, [ee, He, Me, Re], Oe.top);
            for (const ee of [be, Fe, Je]) pe(Ee, ge, Ke, ee)
          }
          return Re(Ee, Ke, Fe, (ee => 1 === ge[ee])), Ee
        }({
          top: Xe(Ke, be, "texture"),
          left: Xe(Ke, Fe, "texture"),
          right: Xe(Ke, Je, "texture")
        }, function(ee) {
          return "SlabBlock" === ee ? qe : "StairsBlock" === ee ? fe : ke
        }(ze), Be, Ee)))
      } else {
        const {
          id: ee,
          name: ie,
          size: He,
          outlineWidth: ye
        } = Te;
        oe(ee, He, (() => {
          const {
            geometry: ee,
            texture: be
          } = Xe(Je, ie, "model");
          return Fe(ee, be, He, ye)
        }))
      }
    }, ye.postMessage({
      type: "started"
    })
  }(globalThis, ze)
})();