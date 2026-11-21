export const id = 130;
export const ids = [130, 131];
export const modules = {
  6429: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ.h,
      i: () => qQ,
      m: () => LQ.m
    });
    var LQ = wQ(6414);
    const qQ = [!1, !0].flatMap((QQ => ["terrain", "liquid", "model"].map((FQ => ({
      strict: QQ,
      program: FQ
    })))))
  },
  38741: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      ShaderPackPage: () => vQ,
      harnessShaderPackMode: () => bQ,
      setHarnessUrlShaderPack: () => HQ,
      shaderPackPage: () => uQ
    });
    var LQ = wQ(96),
      qQ = wQ(27),
      oQ = (wQ(3325), wQ(6429), wQ(3318)),
      DQ = wQ(6485);
    wQ(6460);
    const kQ = {
      status: "none"
    };
    class vQ {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, oQ.h)(LQ.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), mQ().then((QQ => {
            QQ && qQ.i.removeItem(oQ.d)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, oQ.f)(LQ.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const QQ = await this.load();
        return "active" === QQ.status ? QQ.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((QQ => (console.error("Failed to load the shader pack", QQ), kQ))).then((QQ => (this.resolved ??= QQ, QQ))), this.pagePack
      }
      hasNone() {
        var QQ;
        return "none" === (null === (QQ = this.resolved) || void 0 === QQ ? void 0 : QQ.status)
      }
      block(QQ) {
        this.resolved = {
          status: "blocked",
          messageKey: QQ,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([wQ.e(75), wQ.e(132), wQ.e(135)]).then((() => wQ(41149))).then((QQ => (QQ.prefetchCompiler(), QQ))), this.compiling
      }
      async readStored() {
        const QQ = await mQ();
        return QQ && this.compiler().then((QQ => QQ.reconcileHint())).catch((QQ => {
          console.error("Failed to correct the shader pack hint", QQ)
        })), QQ
      }
      async read() {
        const QQ = await this.preload();
        return QQ ? (await this.compiler()).compilePagePack(QQ) : kQ
      }
    }
    async function mQ() {
      if (!(0, oQ.l)(LQ.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const QQ = await (0, DQ.f)(!0);
        return QQ || qQ.i.setItem(oQ.d, !1), QQ
      } catch (QQ) {
        return console.error("Failed to read the stored shader pack", QQ), qQ.i.removeItem(oQ.d), null
      }
    }
    const uQ = new vQ;

    function HQ(QQ, FQ) {}

    function bQ() {
      return null
    }
  },
  6485: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      f: () => oQ
    });
    var LQ = wQ(27);
    const qQ = "shaderPack";
    async function oQ() {
      var QQ;
      let FQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (QQ = await LQ.h.getItem(qQ, FQ)) && void 0 !== QQ ? QQ : null
    }
  },
  6460: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      loadShaderPackTextures: () => DQ,
      shaderPackTextures: () => kQ
    });
    var LQ = wQ(6414);
    let qQ = null,
      oQ = null;

    function DQ() {
      return oQ ??= Promise.all([wQ.e(70), wQ.e(199)]).then((() => wQ(39913))).then((QQ => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: FQ,
          textureNameToIndex: wQ,
          textureAnimationData: oQ
        } = QQ;
        return qQ ??= (0, LQ.i)(wQ, oQ, FQ), qQ
      })), oQ
    }

    function kQ() {
      if (null === qQ) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return qQ
    }
  },
  6414: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ,
      f: () => oQ,
      h: () => LQ,
      i: () => xQ,
      k: () => uQ,
      m: () => qQ,
      p: () => vQ,
      r: () => mQ,
      v: () => HQ
    });
    const LQ = 5;

    function qQ(QQ) {
      return QQ === LQ
    }
    const oQ = 262144,
      DQ = 256,
      kQ = 256;

    function vQ(QQ) {
      if ("object" !== typeof QQ || null === QQ || Array.isArray(QQ)) return "The pack has no files.";
      const FQ = [];
      for (const [wQ, LQ] of Object.entries(QQ)) {
        if ("string" !== typeof LQ) return `${wQ} isn't text.`;
        FQ.push({
          path: wQ,
          source: LQ
        })
      }
      return FQ.sort(((QQ, FQ) => uQ(QQ.path, FQ.path))),
        function(QQ) {
          if (0 === QQ.length) return "The pack has no .wgsl files.";
          if (QQ.length > DQ) return `The pack has more than ${DQ} .wgsl files.`;
          const FQ = new Set;
          for (const {
              path: wQ
            }
            of QQ) {
            const QQ = bQ(wQ);
            if (null !== QQ) return QQ;
            if (FQ.has(wQ)) return `The pack has two files at ${wQ}.`;
            FQ.add(wQ)
          }
          return HQ(QQ) > oQ ? `The pack's .wgsl files are over ${oQ/1024} KB in total.` : null
        }(FQ) ?? FQ
    }

    function mQ(QQ) {
      const FQ = {};
      for (const wQ of QQ) FQ[wQ.path] = wQ.source;
      return FQ
    }

    function uQ(QQ, FQ) {
      return QQ < FQ ? -1 : QQ > FQ ? 1 : 0
    }

    function HQ(QQ) {
      const FQ = new TextEncoder;
      let wQ = 0;
      for (const {
          source: LQ
        }
        of QQ) wQ += FQ.encode(LQ).byteLength;
      return wQ
    }

    function bQ(QQ) {
      if (!QQ.toLowerCase().endsWith(".wgsl")) return `${QQ} isn't a .wgsl file.`;
      if (QQ.length > kQ) return `A file path is over ${kQ} characters.`;
      if (QQ.includes("\\") || /[\u0000-\u001f]/.test(QQ)) return `${QQ} isn't a valid file path.`;
      return QQ.split("/").some((QQ => "" === QQ || "." === QQ || ".." === QQ)) ? `${QQ} isn't a valid file path.` : null
    }
    const YQ = /^(.*)\[rot\[([1-4])$/;

    function xQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const LQ = new Map;
      FQ.forEach(((QQ, FQ) => {
        let {
          numAnimStates: wQ,
          animStartIdx: qQ
        } = QQ;
        for (let oQ = 1; oQ < wQ; oQ++) LQ.set(qQ + oQ - 1, FQ)
      }));
      const qQ = Object.entries(QQ),
        oQ = new Map;
      for (const [AQ, tQ] of qQ) {
        const QQ = YQ.exec(AQ);
        "1" === QQ?.[2] && oQ.set(QQ[1], tQ + 1)
      }
      const DQ = QQ => {
          const FQ = YQ.exec(QQ);
          return FQ && oQ.has(FQ[1]) ? {
            root: FQ[1],
            rotation: Number(FQ[2]) - 1
          } : null
        },
        kQ = new Set(qQ.map((QQ => {
          let [FQ] = QQ;
          return DQ(FQ)?.root ?? FQ
        }))),
        vQ = (QQ, wQ) => {
          const LQ = QQ.replace(/_?0$/, "");
          return (FQ[wQ]?.numAnimStates ?? 0) > 1 && !kQ.has(LQ) ? LQ : QQ
        },
        mQ = new Map;
      for (const [YQ, AQ] of qQ) mQ.set(AQ, vQ(DQ(YQ)?.root ?? YQ, AQ));
      const uQ = qQ.reduce(((QQ, FQ) => {
          let [, wQ] = FQ;
          return Math.max(QQ, wQ + 1)
        }), 0),
        HQ = Array.from({
          length: uQ
        }, ((QQ, FQ) => ({
          id: FQ + 1,
          rotation: 0
        }))),
        bQ = new Map,
        xQ = new Map;
      for (const [YQ, AQ] of qQ) {
        const QQ = DQ(YQ),
          FQ = LQ.get(AQ);
        if (void 0 !== FQ) {
          const wQ = mQ.get(FQ);
          xQ.set(YQ, {
            name: YQ,
            texture: wQ,
            kind: "frame"
          }), QQ && !xQ.has(QQ.root) && xQ.set(QQ.root, {
            name: QQ.root,
            texture: wQ,
            kind: "frame"
          });
          continue
        }
        const wQ = mQ.get(AQ),
          qQ = QQ?.root ?? YQ;
        if (wQ !== qQ && xQ.set(qQ, {
            name: qQ,
            texture: wQ,
            kind: "frame"
          }), QQ) {
          const FQ = oQ.get(QQ.root);
          HQ[AQ] = {
            id: FQ,
            rotation: QQ.rotation
          }, bQ.set(wQ, FQ), xQ.set(YQ, {
            name: YQ,
            texture: wQ,
            kind: "rotation"
          })
        } else bQ.set(wQ, AQ + 1)
      }
      for (const YQ of bQ.keys()) xQ.delete(YQ);
      for (const [YQ, AQ] of wQ) {
        const QQ = bQ.get(AQ);
        void 0 === QQ || bQ.has(YQ) || (bQ.set(YQ, QQ), xQ.delete(YQ))
      }
      return {
        named: [...bQ].sort(((QQ, FQ) => {
          let [wQ] = QQ, [LQ] = FQ;
          return wQ < LQ ? -1 : wQ > LQ ? 1 : 0
        })).map((QQ => {
          let [FQ, wQ] = QQ;
          return {
            name: FQ,
            id: wQ
          }
        })),
        aliases: [...xQ.values()],
        layers: HQ
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);