export const id = 132;
export const ids = [132];
export const modules = {
  35734: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => UD,
      f: () => JD,
      i: () => HD
    });
    var ID = cD(3525),
      pD = cD(3535),
      iD = cD(6372),
      fD = cD(4495),
      bD = cD(3529);
    const QD = ".zst.bin",
      wD = Reflect.apply,
      SD = ArrayBuffer,
      BD = "undefined" === typeof Response ? void 0 : Response,
      yD = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      MD = function() {
        let DD;
        void 0 !== yD && new yD({
          __proto__: null,
          start(CD) {
            const {
              enqueue: cD,
              close: ID,
              error: pD
            } = Object.getPrototypeOf(CD);
            DD = {
              enqueue: cD,
              close: ID,
              error: pD
            }
          }
        }, {
          __proto__: null
        });
        return DD
      }(),
      tD = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== MD && (0, fD.l)(BD, "Response", !0) && (0, fD.l)(yD, "ReadableStream", !0) && (0, fD.l)(MD.enqueue, "enqueue") && (0, fD.l)(MD.close, "close") && (0, fD.l)(MD.error, "error") && (0, fD.l)(bD.Y, "body") && (0, fD.l)(bD.O, "getReader") && (0, fD.l)(bD.W, "read")
        } catch {
          return !1
        }
      }();
    let ZD = !1;

    function oD(DD) {
      for (const CD of "bloxd_wasm_webgpu:4996717,bloxd_wasm_webgl:5287863,bloxd_wasm_webgl1:4757578,bloxd_wasm_workers:196044,bloxd_wasm_models:311375,bloxd_wasm_client:3666436"?.split(",") ?? []) {
        const [cD, ID] = CD.split(":");
        if (cD === DD) {
          const DD = Number(ID);
          return Number.isInteger(DD) && DD > 0 ? DD : void 0
        }
      }
    }

    function vD(DD, CD) {
      let ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const iD = function(DD) {
        const CD = oD(DD.name);
        if (void 0 !== CD && tD && !ZD) return {
          href: `${DD.url().href}${QD}`,
          length: CD
        }
      }(DD);
      return void 0 !== iD ? async function(DD, CD, ID, iD) {
        let {
          href: fD,
          length: QD
        } = CD;
        try {
          return await (0, bD.bb)(fD, ((DD, CD, iD) => async function(DD, CD, ID, iD, fD, QD) {
            const tD = new SD(CD);
            let oD;
            gD ??= (0, bD.V)(cD.e(64).then((() => cD(40237))));
            try {
              oD = await fetch(DD, {
                signal: ID
              })
            } catch (zD) {
              throw new Error(`Fetching ${DD} failed: ${mD(zD)}`)
            }
            const {
              ok: vD,
              status: ND,
              body: nD
            } = function(DD, CD) {
              try {
                const {
                  ok: DD,
                  status: cD
                } = CD;
                return {
                  ok: DD,
                  status: cD,
                  body: wD(bD.Y, CD, [])
                }
              } catch {
                throw new Error(`${DD} came in a response a page script made`)
              }
            }(DD, oD);
            if (!vD) throw new Error(`Fetching ${DD} failed: HTTP ${ND}`);
            iD();
            const {
              reader: OD,
              controller: PD,
              compiled: HD
            } = function(DD, CD) {
              let cD;
              try {
                let DD;
                cD = wD(bD.O, CD, []);
                const ID = new yD({
                    __proto__: null,
                    start(CD) {
                      DD = CD
                    }
                  }, {
                    __proto__: null
                  }),
                  pD = new BD(ID, {
                    __proto__: null,
                    headers: {
                      __proto__: null,
                      "Content-Type": "application/wasm"
                    }
                  });
                return {
                  reader: cD,
                  controller: DD,
                  compiled: (0, bD.V)((0, bD.z)((0, bD.fb)(pD)))
                }
              } catch (zD) {
                throw void 0 !== cD && XD(cD), new Error(`${DD} could not be streamed into a compile: ${mD(zD)}`)
              }
            }(DD, nD), {
              enqueue: UD,
              close: xD,
              error: qD
            } = MD, JD = DD => {
              try {
                wD(qD, PD, [DD])
              } catch {} finally {
                XD(OD)
              }
            };
            ID.addEventListener("abort", (() => {
              JD(new Error(`${DD} stalled`))
            }), {
              once: !0
            });
            let KD = !1;
            (0, pD.o)(HD, (() => {}), (() => {
              KD = !0, XD(OD)
            }));
            let aD = 0;
            try {
              let cD;
              try {
                cD = await gD
              } catch (zD) {
                throw ZD = !0, new Error(`The zstd decoder did not load: ${mD(zD)}`)
              }
              const {
                ZstdFrameDecoder: ID
              } = cD, pD = new ID(CD);
              for (; !pD.done && !KD;) {
                let CD;
                try {
                  CD = await wD(bD.W, OD, [])
                } catch (zD) {
                  throw new Error(`Downloading ${DD} failed: ${mD(zD)}`)
                }
                if (CD.done || KD) break;
                iD();
                try {
                  pD.push(CD.value)
                } catch (zD) {
                  throw new Error(`${DD} did not decode: ${mD(zD)}`)
                }
                const {
                  output: cD,
                  decoded: ID
                } = pD;
                if (null !== cD && ID !== aD) {
                  wD(bD.ab, new bD.n(tD), [cD.subarray(aD, ID), aD]);
                  try {
                    wD(UD, PD, [new bD.n(tD, aD, ID - aD)])
                  } catch {
                    KD = !0
                  }
                  aD = ID
                }
              }
              if (fD(), KD) throw await HD, new Error(`${DD}'s compile stopped reading before its end`);
              if (!pD.done) throw new Error(`${DD} ended before its module did`);
              XD(OD);
              try {
                wD(xD, PD, [])
              } catch {}
            } catch (zD) {
              throw JD(zD), zD
            }
            const VD = await HD;
            void 0 !== QD && await (0, bD.w)(DD, new bD.n(tD), {
              sha256: QD.sha256,
              onMismatch: () => {}
            });
            return VD
          }(fD, QD, DD, CD, iD, ID)))
        } catch (oD) {
          console.warn(`${mD(oD)}: loading ${DD.href} instead`)
        }
        const tD = await (0, bD.H)(DD, ID, {
          ...iD,
          hideThen: !0
        });
        return tD
      }(DD.url(), iD, CD, ID): ND(DD, CD, ID)
    }

    function ND(DD, CD, cD) {
      return (0, bD.H)(DD.url(), CD, {
        ...cD,
        hideThen: void 0 !== oD(DD.name)
      })
    }
    let gD = null;

    function XD(DD) {
      try {
        (0, bD.V)(DD.cancel())
      } catch {}
    }

    function mD(DD) {
      return DD instanceof Error ? DD.message : String(DD)
    }
    let nD = null,
      OD = !1;
    const PD = new Map;

    function HD(DD, CD, cD) {
      return null === nD ? nD = xD(DD, CD) : DD !== nD.build ? console.warn(`Bloxd wasm: ${DD.name} was asked for after ${nD.build.name} started loading, which this thread keeps`) : CD.name !== nD.workers.name && console.warn(`Bloxd wasm: ${CD.name} was asked for workers after ${nD.workers.name}, which this thread keeps`), cD?.reloadFailedDownload && !OD && (0, ID.O)() && (OD = !0, nD = xD(nD.build, nD.workers)), nD.loaded
    }

    function UD(DD, CD) {
      if (null !== nD) return (0, pD.c)([]);
      const cD = DD.filter((DD => !PD.has(DD.name))).map((DD => {
        const cD = new AbortController,
          ID = {
            compiled: ND(DD, (0, iD.e)(DD.name), {
              priority: CD,
              tc: cD.signal,
              onDownloaded: () => {
                ID.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  ID.downloaded = !1, null !== nD && cD.abort()
                }
              }
            }),
            cancel: cD,
            downloaded: !1
          };
        return PD.set(DD.name, ID), (0, pD.e)((CD => {
          (0, pD.o)(ID.compiled, (() => {
            ID.downloaded = !0, CD()
          }), (ID => {
            cD.signal.aborted || console.warn(`Bloxd wasm: ${DD.name}'s compile ahead of the load failed: the load compiles it afresh`, ID), CD()
          }))
        }))
      }));
      return (0, pD.c)(cD)
    }

    function xD(DD, CD) {
      const cD = (0, ID.C)((async () => {
        (0, fD.z)();
        const cD = qD(DD),
          ID = CD.name === DD.name ? cD : qD(CD);
        for (const {
            cancel: DD
          }
          of PD.values()) DD.abort();
        PD.clear(), await (0, pD.c)([cD, ID]);
        const iD = await cD,
          bD = await ID;
        return (0, fD.z)(), {
          module: iD,
          workerModule: bD
        }
      }), DD);
      return {
        build: DD,
        workers: CD,
        loaded: cD
      }
    }

    function qD(DD) {
      const CD = PD.get(DD.name);
      return CD?.downloaded ? (PD.delete(DD.name), (0, pD.e)(((cD, ID) => {
        (0, pD.o)(CD.compiled, cD, (() => {
          (0, pD.o)(KD(DD), cD, ID)
        }))
      }))) : KD(DD)
    }
    async function JD(DD, CD) {
      return KD(DD, {
        retries: CD
      })
    }

    function KD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return vD(DD, (0, iD.e)(DD.name), CD)
    }
  },
  6372: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => fD
    });
    var ID = cD(3529);
    const pD = {
      bloxd_wasm: () => "0d17f541f551a53f4dab724907dfd17c2f5e497131bb2f0746463cf7a85b45bd",
      bloxd_wasm_client: () => "d6e226c9d75d445b020168abe06f72e7048eeb030e81e1c51b07a85852e3609f",
      bloxd_wasm_workers: () => "a532339ee7770d546b5211eae4811431c5af4bef0f6bb1f1bd9d9cedfe642720",
      bloxd_wasm_models: () => "5831b416c1ed8d38d5851a3544f33f1dbf9ce134ab804da19046d201729a0e57",
      bloxd_wasm_webgpu: () => "f931d06e251abe5711fda5efd0c8f6b13c28366b4ac2d5d8847dd6de0a7c2502",
      bloxd_wasm_webgl: () => "76d7d6a654e5f0a7055ecf5f60b4be1c5fa941239d1fc25cad0eeb9117a9d50d",
      bloxd_wasm_webgl1: () => "bbb62056b165fcb2da03a0e26b34e721e5d1836ef01440ade5fd39a17ef2351f",
      bloxd_wasm_replay: () => "ab1e675b3f2654cebc6cb9fcc2eb625d7e3becf9545d6aaec6d35e28d2b68a56",
      bloxd_wasm_recorder: () => "191548def26c8771cc0d55137afcbedfc047ac41e34a07f34acfc4a9c88d9352",
      bloxd_wasm_anim: () => "8df2ff23aed1fe182321a7874775d9d81cd1a481ed48f89ab986aeb54b6aba72",
      bloxd_wasm_textures: () => "24200f89bea0ac9a6bb6d6c36427b0a05df327d7b83abe32fb2d1e0b136a1861",
      bloxd_wasm_shader_pack: () => "7e7c31d2eef819d6f78ae283bdf7f325715093016c9b3415b5500d163bb24552"
    };
    var iD = cD(4495);

    function fD(DD) {
      const CD = Object.prototype.hasOwnProperty.call(pD, DD) ? pD[DD]() : void 0;
      if (void 0 !== CD) return {
        sha256: CD,
        onMismatch: iD.y
      };
      throw new ID.h(`${DD} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);