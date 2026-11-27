export const id = 128;
export const ids = [128, 131, 152, 153];
export const modules = {
  5563: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye.e,
      g: () => be,
      h: () => ye.m
    });
    var ye = He(5570);
    const be = [!1, !0].flatMap((ee => ["terrain", "liquid", "model"].map((ie => ({
      strict: ee,
      program: ie
    })))))
  },
  41618: (ee, ie, He) => {
    He.d(ie, {
      b: () => Re,
      installListedShaderPack: () => oe
    });
    var ye = He(7206),
      be = He(5570),
      Me = He(1141),
      Ke = He(7249),
      Ue = He(5563),
      Fe = He(7290),
      Je = He(7283);
    async function oe(ee) {
      const ie = await (0, Ke.loadPageShaderPackCompiler)();
      if (null === ie) return {
        kind: "failed",
        reason: "compiler"
      };
      const He = await Re(ee, ie);
      return "failed" === He.kind ? He : await (0, Fe.saveShaderPack)(He.stored, ie) ? ((0, Fe.markShaderPackChangePending)(), He) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function Re(ee, ie) {
      const He = await async function(ee) {
        let {
          packId: ie,
          sourceHash: He
        } = ee;
        try {
          const ee = await fetch(`${Me.clientSideServerUrls.s3Url}/${(0,ye.H)(ie,He)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!ee.ok) return console.error(`Failed to download shader pack ${ie} (${ee.status})`), null;
          const be = await ee.json();
          return "object" !== typeof be || null === be ? (console.error(`Shader pack ${ie}'s source isn't an object`), null) : be
        } catch (be) {
          return console.error(`Failed to download shader pack ${ie}`, be), null
        }
      }(ee);
      if (null === He) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, Ue.h)(He.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const Ke = (0, be.r)(He.files);
      if ("string" === typeof Ke) return console.error(`A listed shader pack breaks the pack rules: ${Ke}`), {
        kind: "failed",
        reason: "invalid"
      };
      const oe = await (0, Je.g)(ie, Ke);
      if (!1 === (null === oe || void 0 === oe ? void 0 : oe.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const Re = {
        manifest: {
          apiVersion: He.apiVersion,
          name: ee.name,
          author: ee.ownerName,
          description: ee.description || null,
          keepCircleShadows: !0 === He.keepCircleShadows
        },
        files: Ke
      };
      return {
        kind: "loaded",
        stored: (0, Fe.toStoredShaderPack)(Re, oe, {
          packId: ee.packId,
          sourceHash: ee.sourceHash
        })
      }
    }
  },
  7290: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      forgetShaderPackActiveHint: () => De,
      isOtherApiVersion: () => We,
      isShaderPackActive: () => Ee,
      isShaderPackChangePending: () => de,
      markShaderPackChangePending: () => Oe,
      pageShaderPackValidationVersion: () => te,
      reconcileStoredShaderPackHint: () => we,
      removeShaderPack: () => Be,
      replaceShaderPack: () => pe,
      saveShaderPack: () => Te,
      shaderPackNeedsCheck: () => Ze,
      storedPackOutcome: () => ge,
      storedShaderPackFiles: () => ke,
      toStoredShaderPack: () => Re
    });
    var ye = He(5570),
      be = He(5563),
      Me = He(35),
      Ke = He(3808),
      Ue = He(7296),
      Fe = He(7262);
    const Je = "shaderPackChangePending";
    let oe = null;

    function Re(ee, ie, He) {
      return {
        manifest: ee.manifest,
        files: (0, ye.s)(ee.files),
        validation: ie,
        ...He && {
          listing: He
        }
      }
    }

    function ke(ee) {
      return Object.keys(ee.files).map((ie => ({
        path: ie,
        source: ee.files[ie]
      })))
    }
    let qe = Promise.resolve();

    function fe(ee) {
      const ie = qe.then(ee);
      return qe = ie.catch((() => {})), ie
    }

    function Te(ee, ie) {
      return fe((() => Xe(ee, ie)))
    }

    function pe(ee, ie, He) {
      return fe((async () => JSON.stringify(await (0, Ue.h)()) === JSON.stringify(ee) && (null === ie ? (await ze(), !0) : Xe(ie, He))))
    }
    async function Xe(ee, ie) {
      const He = await Me.e.setItem(Ue.e, ee);
      return He && Pe(ee, ie), He
    }
    async function ze() {
      await Me.e.removeItem(Ue.e), Me.i.removeItem(Ke.b)
    }

    function Be() {
      return fe(ze)
    }

    function Ee(ee, ie) {
      return "active" === ge(ee, ie).kind
    }

    function ge(ee, ie) {
      var He;
      return null === ee ? {
        kind: "none",
        reason: "nothingStored"
      } : We(ee) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (He = ee.validation) || void 0 === He ? void 0 : He.ok) || ee.validation.fromRecheck ? null === ie ? {
        kind: "none",
        reason: "noCompiler"
      } : Ze(ee, ie) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : ee.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function Oe() {
      Me.m.setItem(Je, performance.timeOrigin)
    }

    function de() {
      return Me.m.getItem(Je) === performance.timeOrigin
    }

    function We(ee) {
      return !(0, be.h)(ee.manifest.apiVersion)
    }

    function te(ee) {
      return oe ??= ee.cV((0, Fe.shaderPackTextures)()), oe
    }

    function Ze(ee, ie) {
      var He;
      return (null === (He = ee.validation) || void 0 === He ? void 0 : He.headerVersion) !== te(ie)
    }

    function we(ee) {
      return fe((async () => {
        Pe(await (0, Ue.h)(!0), ee)
      }))
    }

    function De() {
      return fe((async () => {
        Me.i.removeItem(Ke.b)
      }))
    }

    function Pe(ee, ie) {
      Ee(ee, ie) ? Me.i.setItem(Ke.b, !0) : Me.i.removeItem(Ke.b)
    }
  },
  7262: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      loadShaderPackTextures: () => Ke,
      shaderPackTextures: () => Ue
    });
    var ye = He(5570);
    let be = null,
      Me = null;

    function Ke() {
      return Me ??= Promise.all([He.e(84), He.e(206)]).then((() => He(41616))).then((ee => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: ie,
          textureNameToIndex: He,
          textureAnimationData: Me
        } = ee;
        return be ??= (0, ye.h)(He, Me, ie), be
      })), Me
    }

    function Ue() {
      if (null === be) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return be
    }
  },
  7283: (ee, ie, He) => {
    He.d(ie, {
      e: () => Fe,
      g: () => Ue
    });
    var ye = He(7290),
      be = He(7262),
      Me = He(115);
    const Ke = 100;
    async function Ue(ee, ie) {
      var He;
      let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (He = navigator.gpu) && void 0 !== He ? He : null;
      const Ke = ee.vie(ie, (0, be.shaderPackTextures)());
      if (Ke.errors.length > 0) return Je(ee, Ke.errors, Ke.offInStrict);
      const Ue = await async function(ee) {
        if (!ee) return null;
        try {
          const ie = await (0, Me.v)(ee);
          return ie ? await ie.requestDevice() : null
        } catch (ie) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", ie), null
        }
      }(ye);
      if (!Ue) return null;
      let Fe = !1;
      Ue.lost.then((() => {
        Fe = !0
      }));
      try {
        const ie = await Promise.all(Ke.validationModules.map((ie => async function(ee, ie, He) {
          ie.pushErrorScope("validation");
          const ye = ie.createShaderModule({
              code: He.code
            }),
            be = ie.popErrorScope(),
            {
              messages: Me
            } = await ye.getCompilationInfo(),
            Ke = Me.filter((ee => "error" === ee.type)).map((ie => ee.mapValidationMessage(He, ie))),
            Ue = await be;
          Ue && 0 === Ke.length && Ke.push({
            file: null,
            line: 0,
            message: Ue.message,
            variants: [He.key]
          });
          return Ke
        }(ee, Ue, ie))));
        return Fe ? null : Je(ee, ee.Lbe(ie.flat()), Ke.offInStrict)
      } catch (oe) {
        return console.error("Couldn't validate the shader pack on WebGPU.", oe), null
      } finally {
        Ue.destroy()
      }
    }
    async function Fe(ee, ie) {
      var He;
      if (!(0, ye.shaderPackNeedsCheck)(ee, ie) || (0, ye.isOtherApiVersion)(ee)) return ee;
      const be = await Ue(ie, (0, ye.storedShaderPackFiles)(ee));
      if (!be) return ee;
      const Me = !1 === (null === (He = ee.validation) || void 0 === He ? void 0 : He.ok) && !ee.validation.fromRecheck,
        Ke = {
          ...ee,
          validation: Me ? be : {
            ...be,
            fromRecheck: !0
          }
        };
      return await (0, ye.replaceShaderPack)(ee, Ke, ie) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Ke
    }

    function Je(ee, ie, He) {
      return {
        headerVersion: (0, ye.pageShaderPackValidationVersion)(ee),
        ok: 0 === ie.length,
        errors: ie.slice(0, Ke),
        moreErrors: Math.max(0, ie.length - Ke),
        offInStrict: He
      }
    }
  },
  5570: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue,
      d: () => Ke,
      e: () => ye,
      h: () => Te,
      k: () => Re,
      m: () => be,
      q: () => Me,
      r: () => Je,
      s: () => oe,
      t: () => ke
    });
    const ye = 5;

    function be(ee) {
      return ee === ye
    }

    function Me(ee) {
      return [...ee.features]
    }
    const Ke = 262144,
      Ue = 256,
      Fe = 256;

    function Je(ee) {
      if ("object" !== typeof ee || null === ee || Array.isArray(ee)) return "The pack has no files.";
      const ie = [];
      for (const [He, ye] of Object.entries(ee)) {
        if ("string" !== typeof ye) return `${He} isn't text.`;
        ie.push({
          path: He,
          source: ye
        })
      }
      return ie.sort(((ee, ie) => Re(ee.path, ie.path))),
        function(ee) {
          if (0 === ee.length) return "The pack has no .wgsl files.";
          if (ee.length > Ue) return `The pack has more than ${Ue} .wgsl files.`;
          const ie = new Set;
          for (const {
              path: He
            }
            of ee) {
            const ee = qe(He);
            if (null !== ee) return ee;
            if (ie.has(He)) return `The pack has two files at ${He}.`;
            ie.add(He)
          }
          return ke(ee) > Ke ? `The pack's .wgsl files are over ${Ke/1024} KB in total.` : null
        }(ie) ?? ie
    }

    function oe(ee) {
      const ie = {};
      for (const He of ee) ie[He.path] = He.source;
      return ie
    }

    function Re(ee, ie) {
      return ee < ie ? -1 : ee > ie ? 1 : 0
    }

    function ke(ee) {
      const ie = new TextEncoder;
      let He = 0;
      for (const {
          source: ye
        }
        of ee) He += ie.encode(ye).byteLength;
      return He
    }

    function qe(ee) {
      if (!ee.toLowerCase().endsWith(".wgsl")) return `${ee} isn't a .wgsl file.`;
      if (ee.length > Fe) return `A file path is over ${Fe} characters.`;
      if (ee.includes("\\") || /[\u0000-\u001f]/.test(ee)) return `${ee} isn't a valid file path.`;
      return ee.split("/").some((ee => "" === ee || "." === ee || ".." === ee)) ? `${ee} isn't a valid file path.` : null
    }
    const fe = /^(.*)\[rot\[([1-4])$/;

    function Te(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const ye = new Map;
      ie.forEach(((ee, ie) => {
        let {
          numAnimStates: He,
          animStartIdx: be
        } = ee;
        for (let Me = 1; Me < He; Me++) ye.set(be + Me - 1, ie)
      }));
      const be = Object.entries(ee),
        Me = new Map;
      for (const [Te, pe] of be) {
        const ee = fe.exec(Te);
        "1" === ee?.[2] && Me.set(ee[1], pe + 1)
      }
      const Ke = ee => {
          const ie = fe.exec(ee);
          return ie && Me.has(ie[1]) ? {
            root: ie[1],
            rotation: Number(ie[2]) - 1
          } : null
        },
        Ue = new Set(be.map((ee => {
          let [ie] = ee;
          return Ke(ie)?.root ?? ie
        }))),
        Fe = (ee, He) => {
          const ye = ee.replace(/_?0$/, "");
          return (ie[He]?.numAnimStates ?? 0) > 1 && !Ue.has(ye) ? ye : ee
        },
        Je = new Map;
      for (const [fe, Te] of be) Je.set(Te, Fe(Ke(fe)?.root ?? fe, Te));
      const oe = be.reduce(((ee, ie) => {
          let [, He] = ie;
          return Math.max(ee, He + 1)
        }), 0),
        Re = Array.from({
          length: oe
        }, ((ee, ie) => ({
          id: ie + 1,
          rotation: 0
        }))),
        ke = new Map,
        qe = new Map;
      for (const [fe, Te] of be) {
        const ee = Ke(fe),
          ie = ye.get(Te);
        if (void 0 !== ie) {
          const He = Je.get(ie);
          qe.set(fe, {
            name: fe,
            texture: He,
            kind: "frame"
          }), ee && !qe.has(ee.root) && qe.set(ee.root, {
            name: ee.root,
            texture: He,
            kind: "frame"
          });
          continue
        }
        const He = Je.get(Te),
          be = ee?.root ?? fe;
        if (He !== be && qe.set(be, {
            name: be,
            texture: He,
            kind: "frame"
          }), ee) {
          const ie = Me.get(ee.root);
          Re[Te] = {
            id: ie,
            rotation: ee.rotation
          }, ke.set(He, ie), qe.set(fe, {
            name: fe,
            texture: He,
            kind: "rotation"
          })
        } else ke.set(He, Te + 1)
      }
      for (const fe of ke.keys()) qe.delete(fe);
      for (const [fe, Te] of He) {
        const ee = ke.get(Te);
        void 0 === ee || ke.has(fe) || (ke.set(fe, ee), qe.delete(fe))
      }
      return {
        named: [...ke].sort(((ee, ie) => {
          let [He] = ee, [ye] = ie;
          return He < ye ? -1 : He > ye ? 1 : 0
        })).map((ee => {
          let [ie, He] = ee;
          return {
            name: ie,
            id: He
          }
        })),
        aliases: [...qe.values()],
        layers: Re
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);