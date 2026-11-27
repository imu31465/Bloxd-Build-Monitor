export const id = 221;
export const ids = [221];
export const modules = {
  37024: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      capturePreviewPicture: () => Xe,
      holdPreviewsLow: () => Ke.g,
      openLiveFigure: () => pe,
      rasterNametag: () => ge
    });
    var ye = He(1189),
      be = He(2683),
      Me = He(34919),
      Ke = He(37028),
      Ue = He(37035),
      Fe = He(37043),
      Je = He(37081),
      oe = He(3820);
    const Re = 480,
      ke = 16,
      qe = {
        minGapMs: 250,
        now: () => performance.now(),
        skip: Ke.u
      },
      fe = 30,
      Te = 1e4;

    function pe(ee, ie, He, Fe) {
      const Je = Me.i.openCharacter(ee, "player");
      let oe = !1,
        Re = !1,
        fe = null;
      const pe = async () => {
        const ee = Je.dev.canvas(),
          ie = await (ye = () => ee.isConnected && function(ee) {
            const {
              x: ie,
              width: He
            } = ze(ee);
            if (0 === He || 0 === ee.height) return !1;
            if (Be ??= document.createElement("canvas").getContext("2d", {
                willReadFrequently: !0
              }), null === Be) return !1;
            const ye = Be.canvas;
            ye.height = Math.min(ee.height, ke), ye.width = Math.max(1, Math.round(He * ye.height / ee.height));
            const be = Be;
            return be.imageSmoothingQuality = "high", be.drawImage(ee, ie, 0, He, ee.height, 0, 0, ye.width, ye.height), Ee(be.getImageData(0, 0, ye.width, ye.height).data)
          }(ee), be = Ke.e, Me = () => !oe && Je.isReady(), Ue = qe, new Promise((ee => {
            let ie = Number.NEGATIVE_INFINITY;
            const He = () => {
              be((() => {
                try {
                  if (!Me()) return void ee(!1);
                  if (Ue.skip()) return void ee(!0);
                  const be = Ue.now();
                  if (be - ie >= Ue.minGapMs && (ie = be, ye())) return void ee(!0);
                  He()
                } catch (be) {
                  console.warn("[loading-character] couldn't read a figure's frame", be), ee(!1)
                }
              }))
            };
            He()
          })));
        var ye, be, Me, Ue;
        return !ie || oe || Re || (Re = !0, He(!0)), ie
      };
      return Je.ready.then((() => {
        if (oe) return !1;
        for (const Ke of ye.v) {
          var ee;
          Je.setCosmetic(Ke, null !== (ee = ie.cosmetics[Ke]) && void 0 !== ee ? ee : (0, be.e)(Ke))
        }
        const He = Promise.all(ye.v.map((ee => Je.untilDrawn(ee)))).then((() => !0)),
          Me = new Promise((ee => {
            setTimeout((() => {
              (0, Ke.e)((() => {
                ee(!1)
              }))
            }), Te)
          }));
        return Promise.race([He, Me])
      })).then((async ee => {
        if (!oe && Je.isReady() && await pe() && ee) return Xe(Je.dev.canvas(), (() => !oe && Je.isReady())).then((ee => {
          null === ee || oe || Fe(ee)
        }))
      })).catch((ee => {
        console.warn("[loading-character] a figure couldn't draw", ee)
      })), {
        resize: (ee, ie) => {
          const ye = (0, Ue.c)(ee, ie, window.devicePixelRatio),
            be = null !== fe && (fe[0] !== ye[0] || fe[1] !== ye[1]);
          fe = ye, Je.resize(ee, ie), be && Re && (Re = !1, He(!1), pe())
        },
        close: () => {
          oe = !0, Je.close()
        }
      }
    }

    function Xe(ee, ie) {
      return new Promise((He => {
        const ye = be => {
          (0, Ke.e)((() => {
            if (!ie()) return void He(null);
            const Me = ee.isConnected ? function(ee) {
              let {
                canvas: ie,
                x: He,
                width: ye
              } = ee;
              if (0 === ye || 0 === ie.height) return null;
              const be = Math.min(1, Re / ie.height),
                Me = document.createElement("canvas");
              Me.width = Math.max(1, Math.round(ye * be)), Me.height = Math.max(1, Math.round(ie.height * be));
              const Ke = Me.getContext("2d", {
                willReadFrequently: !0
              });
              if (!Ke) return null;
              if (Ke.drawImage(ie, He, 0, ye, ie.height, 0, 0, Me.width, Me.height), !Ee(Ke.getImageData(0, 0, Me.width, Me.height).data)) return null;
              return Me.toDataURL("image/webp", .85)
            }(ze(ee)) : null;
            null !== Me || be <= 1 || !ee.isConnected ? He(Me) : ye(be - 1)
          }))
        };
        ye(fe)
      }))
    }

    function ze(ee) {
      const ie = Math.min(ee.width, Math.round(ee.height * oe.b));
      return {
        canvas: ee,
        x: Math.round((ee.width - ie) / 2),
        width: ie
      }
    }
    let Be = null;

    function Ee(ee) {
      for (let ie = 3; ie < ee.length; ie += 4)
        if (0 !== ee[ie]) return !0;
      return !1
    }
    async function ge(ee) {
      var ie;
      await Je.j.load();
      const He = {
          name: ee.name,
          info: null,
          colour: null !== (ie = ee.nameColour) && void 0 !== ie ? ie : "default",
          ranks: ee.ranks,
          effects: [],
          health: null,
          Po: null,
          hideNameSeed: null,
          player: !ee.isYou
        },
        ye = document.createElement("canvas"),
        [be, Me] = (0, Fe.f)((0, Fe.i)(Fe.e.Nametag, He), ye, !0);
      return 0 === be || 0 === Me ? null : {
        src: ye.toDataURL("image/png"),
        width: be,
        height: Me
      }
    }
  },
  34927: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke,
      d: () => be,
      h: () => oe
    });
    var ye = He(1557);

    function be(ee) {
      var ie;
      return {
        ...Ke.store,
        yaw: Ke.store.yaw + (null !== (ie = ye.b[ee].previewYaw) && void 0 !== ie ? ie : 0)
      }
    }
    const Me = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Ke = {
        player: Me,
        store: {
          ...Me,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Ue(ee, ie) {
      ee instanceof Promise ? ee.then(ie).catch((ee => {
        console.error("Couldn't open the preview", ee)
      })) : ie(ee)
    }
    class Fe {
      constructor(ee) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Ue(ee, (ee => {
          this.closed ? ee.close() : (this.opened = ee, null !== this.size && ee.resize(this.size.width, this.size.height), null !== this.view && ee.show(this.view))
        }))
      }
      show(ee) {
        var ie;
        this.view = ee, null === (ie = this.opened) || void 0 === ie || ie.show(ee)
      }
      resize(ee, ie) {
        var He;
        this.size = {
          width: ee,
          height: ie
        }, null === (He = this.opened) || void 0 === He || He.resize(ee, ie)
      }
      close() {
        var ee;
        this.closed = !0, null === (ee = this.opened) || void 0 === ee || ee.close(), this.opened = null
      }
    }
    class Je {
      constructor(ee) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(ee).then((ee => ee.ready)), Ue(ee, (ee => {
          this.closed ? ee.close() : (this.opened = ee, null !== this.size && ee.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var ee, ie;
        return null !== (ee = null === (ie = this.opened) || void 0 === ie ? void 0 : ie.isReady()) && void 0 !== ee && ee
      }
      setCosmetic(ee, ie) {
        var He;
        null === (He = this.opened) || void 0 === He || He.setCosmetic(ee, ie)
      }
      playEmote(ee) {
        var ie;
        null === (ie = this.opened) || void 0 === ie || ie.playEmote(ee)
      }
      setOrbit(ee) {
        var ie;
        null === (ie = this.opened) || void 0 === ie || ie.setOrbit(ee)
      }
      resetCamera() {
        var ee;
        null === (ee = this.opened) || void 0 === ee || ee.resetCamera()
      }
      async untilDrawn(ee) {
        var ie;
        await this.ready, await (null === (ie = this.opened) || void 0 === ie ? void 0 : ie.untilDrawn(ee))
      }
      resize(ee, ie) {
        var He;
        this.size = {
          width: ee,
          height: ie
        }, null === (He = this.opened) || void 0 === He || He.resize(ee, ie)
      }
      close() {
        var ee;
        this.closed = !0, null === (ee = this.opened) || void 0 === ee || ee.close(), this.opened = null
      }
    }
    const oe = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(ee) {
        this.host = ee
      }
      setDefaultHost(ee) {
        this.makeDefault = ee
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(ee) {
        return new Fe(this.current().openMob(ee))
      }
      openPet(ee) {
        return new Fe(this.current().openPet(ee))
      }
      openMobLineup(ee) {
        return new Fe(this.current().openMobLineup(ee))
      }
      openCharacter(ee, ie) {
        return new Je(this.current().openCharacter(ee, ie))
      }
    }
  },
  34919: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye.b,
      f: () => ye.d,
      i: () => ye.h
    });
    var ye = He(34927);
    class be {
      constructor(ee) {
        this.load = ee, this.loaded = null, this.loading = null
      }
      run(ee) {
        return null !== this.loaded ? ee(this.loaded) : (this.loading ??= this.load().then((ee => (this.loaded = ee, ee)), (ee => {
          throw this.loading = null, ee
        })), this.loading.then(ee))
      }
    }
    class Me {
      constructor() {
        this.mobScene = new be((() => Promise.all([He.e(84), He.e(259), He.e(258), He.e(283), He.e(111), He.e(284), He.e(87), He.e(281), He.e(85), He.e(86), He.e(291), He.e(285), He.e(290), He.e(288), He.e(280), He.e(303), He.e(255), He.e(272), He.e(286), He.e(289), He.e(89), He.e(249), He.e(204), He.e(109), He.e(261), He.e(252), He.e(268), He.e(219), He.e(269), He.e(88), He.e(273)]).then((() => He(42155))))), this.characterScene = new be((() => Promise.all([He.e(84), He.e(259), He.e(258), He.e(283), He.e(111), He.e(284), He.e(87), He.e(281), He.e(85), He.e(86), He.e(291), He.e(285), He.e(290), He.e(288), He.e(280), He.e(303), He.e(255), He.e(272), He.e(286), He.e(289), He.e(89), He.e(249), He.e(204), He.e(109), He.e(261), He.e(252), He.e(268), He.e(219), He.e(269), He.e(88), He.e(218)]).then((() => He(42256)))))
      }
      openMob(ee) {
        return this.mobScene.run((ie => ie.openMobPreview(ee)))
      }
      openPet(ee) {
        return this.mobScene.run((ie => ie.openPetPreview(ee)))
      }
      openMobLineup(ee) {
        return this.mobScene.run((ie => ie.openMobLineupPreview(ee)))
      }
      openCharacter(ee, ie) {
        return this.characterScene.run((He => He.openCharacterPreview(ee, ie)))
      }
    }
    ye.h.setDefaultHost((() => new Me))
  },
  37049: (ee, ie, He) => {
    function ye(ee, ie, He) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(ee, ie).getContext("2d", He);
      const ye = document.createElement("canvas");
      return ye.width = ee, ye.height = ie, ye.getContext("2d", He)
    }

    function be(ee, ie) {
      return ee.getContext("2d", ie)
    }
    He.d(ie, {
      c: () => be,
      f: () => ye
    })
  },
  37035: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me
    });
    const ye = 4e5,
      be = 2;

    function Me(ee, ie, He) {
      let [Me, Ke] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [ee, ie], Ue = Math.min(Number.isFinite(He) && He > 0 ? He : 1, be);
      const Fe = Math.max(0, Me, ee) * Math.max(0, Ke, ie) * Ue * Ue;
      return Fe > ye && (Ue *= Math.sqrt(ye / Fe)), [Math.max(1, Math.floor(Math.max(0, ee) * Ue)), Math.max(1, Math.floor(Math.max(0, ie) * Ue))]
    }
  },
  37090: (ee, ie, He) => {
    He.d(ie, {
      e: () => oe,
      f: () => Fe,
      j: () => Ue,
      n: () => Je
    });
    var ye = He(1992);
    let be = null,
      Me = 0;
    const Ke = new Set;

    function Ue() {
      return be
    }

    function Fe() {
      return Me
    }

    function Je(ee) {
      be = ee, Me++, (0, ye.d)();
      for (const ie of Ke) ie()
    }

    function oe(ee) {
      Ke.add(ee)
    }
  },
  37028: (ee, ie, He) => {
    He.d(ie, {
      e: () => Te,
      g: () => oe,
      h: () => qe,
      l: () => Re,
      o: () => pe,
      q: () => fe,
      u: () => ke
    });
    const ye = 30,
      be = 4;
    let Me = 0,
      Ke = !1,
      Ue = !1,
      Fe = Number.NEGATIVE_INFINITY,
      Je = [];

    function oe() {
      0 === Me && (Ke = !1, Ue = !1), Me++;
      let ee = !1;
      return () => {
        ee || (ee = !0, Me--)
      }
    }

    function Re(ee) {
      ee && (Ue = !0)
    }

    function ke() {
      return Ue
    }

    function qe(ee) {
      Ke = ee
    }

    function fe(ee) {
      return !(Me > 0 && (Ke || ee - Fe < 1e3 / ye - be)) && (Fe = ee, !0)
    }

    function Te(ee) {
      Je.push(ee)
    }

    function pe() {
      if (0 === Je.length) return;
      const ee = Je;
      Je = [];
      for (const He of ee) try {
        He()
      } catch (ie) {
        console.warn("[bloxd-previews] an after-draw callback threw", ie)
      }
    }
  },
  37102: (ee, ie, He) => {
    function ye() {
      return He(37108)
    }

    function be() {
      return He(37116)
    }

    function Me(ee) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(ee)
    }
    He.d(ie, {
      b: () => Me,
      e: () => ye,
      h: () => be
    })
  },
  37043: (ee, ie, He) => {
    He.d(ie, {
      e: () => pe,
      f: () => ue,
      i: () => Pe,
      m: () => Ve
    });
    var ye = He(37068),
      be = He(37049),
      Me = He(37058),
      Ke = He(37062);

    function Ue(ee, ie, He) {
      const ye = "object" === typeof ee && null !== ee ? ee : {},
        be = function(ee, ie, He) {
          if (!Array.isArray(ee) || 0 === ee.length) return [];
          const ye = [{
            width: 0,
            height: 0,
            y: 0,
            items: []
          }];
          for (const Ue of (0, Ke.k)(ee, Ke.d.DEFAULT_FONT_SIZE, He)) {
            if ("text" !== Ue.kind) {
              ye[ye.length - 1].items.push({
                content: Ue,
                chars: 1,
                size: {
                  x: 0,
                  width: 0
                }
              });
              continue
            }
            if (0 === Ue.text.length) continue;
            const ee = ye[ye.length - 1].items.reduce(((ee, ie) => ee + ("text" === ie.content.kind ? (0, Me.e)(ie.content.text) : ie.chars)), 0);
            (0, Me.i)(Ue.text, ee).forEach(((ee, ie) => {
              ie > 0 && ye.push({
                width: 0,
                height: 0,
                y: 0,
                items: []
              }), ee.length > 0 && ye[ye.length - 1].items.push({
                content: {
                  ...Ue,
                  text: ee
                },
                chars: ee.length,
                size: {
                  x: 0,
                  width: 0
                }
              })
            }))
          }
          let be = Ke.d.VERTICAL_PADDING / 2;
          for (const Me of ye) {
            if (0 === Me.items.length) continue;
            const {
              width: ee,
              height: ye,
              sizes: Ue
            } = (0, Ke.g)(Me.items.map((ee => ee.content)), ie, He);
            Me.items.forEach(((ee, ie) => {
              ee.size = Ue[ie]
            })), Me.width = ee, Me.height = ye, Me.y = be, be += ye + Ke.d.LINE_SPACING
          }
          return ye
        }(ye.content, ie, He);
      let Ue = 0,
        Fe = Ke.d.VERTICAL_PADDING,
        Je = 0;
      for (const Me of be) {
        Ue = Math.max(Ue, Me.width + 2 * Ke.d.HORIZONTAL_PADDING), Fe += Me.height + Ke.d.LINE_SPACING;
        for (const ee of Me.items) Je += ee.chars
      }
      const oe = "string" === typeof ye.backgroundColor ? ye.backgroundColor : "#22283b";
      return {
        width: Ue,
        height: Fe,
        chars: Je,
        draw: (ee, ie) => {
          const ye = [];
          if (ee.fillStyle = oe, ee.fillRect(0, 0, Ue, Fe), null === ie)
            for (const Me of be) Me.items.length > 0 && (0, Ke.o)(Me.items.map((ee => ee.content)), 0, Me.y, Me.height, ee, He, ye);
          else {
            let Me = 0;
            for (const Ue of be)
              for (const be of Ue.items) {
                if (Me >= ie) break;
                const Fe = "text" === be.content.kind ? {
                  ...be.content,
                  text: be.content.text.substring(0, ie - Me)
                } : be.content;
                (0, Ke.n)(Fe, be.size.x, Ue.y, Ue.height, ee, He, ye, be.size.width), Me += be.chars
              }
          }(0, Ke.l)(ye, ee)
        }
      }
    }
    var Fe = He(37064),
      Je = He(37066);
    const oe = 256,
      Re = 1024,
      ke = {
        width: 1,
        height: 7 / 8
      };
    var qe = He(37076);
    const fe = {
      leaderboard: ""
    };
    var Te = He(37081);
    const pe = {
        Nametag: 1,
        MultilineText: 2,
        Board: 3,
        Leaderboard: 4
      },
      Xe = 2048,
      ze = 256,
      Be = 10,
      Ee = 4,
      ge = 65536,
      Oe = new TextDecoder;
    let de = Te.q,
      We = -1;
    const te = new Map,
      Ze = new Map;
    let we = 0;
    const De = new TextEncoder;

    function Pe(ee, ie) {
      const He = De.encode(JSON.stringify(ie)),
        ye = new Uint8Array(He.length + 1);
      return ye[0] = ee, ye.set(He, 1), ye
    }
    const Ae = {
        name: "Ag",
        info: null,
        colour: "default",
        ranks: [],
        effects: [],
        health: .5,
        Po: null,
        hideNameSeed: null
      },
      Ye = [Pe(pe.Nametag, Ae), Pe(pe.Nametag, {
        ...Ae,
        info: {
          content: [{
            str: "Ag"
          }],
          subtitle: ["Ag"]
        }
      }), Pe(pe.MultilineText, {
        box: {
          content: ["Ag"]
        },
        shown: null
      }), ...ye.d.map(((ee, ie) => Pe(pe.Board, {
        shared: {
          text: "Ag",
          textSize: ie
        },
        w: 0,
        h: 0
      })))];

    function Ve(ee) {
      Te.j.load().then((() => {
        if (ee()) return;
        const ie = (0, be.f)(1, 1, {
          willReadFrequently: !0
        });
        var He;
        ie && (He = ie.canvas, Ye.map((ee => ue(ee, He))))
      }))
    }
    let ae = Te.w;

    function ce() {
      te.clear(), Ze.clear()
    }

    function xe(ee, ie) {
      const He = ee.get(ie);
      return void 0 !== He && (ee.delete(ie), ee.set(ie, He)), He
    }

    function Le(ee, ie, He) {
      ee.set(ie, He), ee.size > ze && ee.delete(ee.keys().next().value)
    }

    function Ce(ee, ie, He) {
      if (ee === pe.Nametag) {
        let ee = xe(te, ie);
        return void 0 === ee && (ee = (0, Fe.e)(JSON.parse(ie), He, de), Le(te, ie, ee)), ee
      }
      if (ee === pe.MultilineText) {
        var be;
        const ee = JSON.parse(ie),
          ye = JSON.stringify(null !== (be = ee.box) && void 0 !== be ? be : null),
          Me = "number" === typeof ee.shown ? ee.shown : null;
        let Ke = xe(Ze, ye);
        void 0 === Ke && (Ke = Ue(ee.box, He, de), Le(Ze, ye, Ke));
        const Fe = null === Me ? null : Math.min(Math.max(0, Math.floor(Me)), Ke.chars),
          Je = Ke;
        return {
          width: Je.width,
          height: Je.height,
          draw: ee => {
            Je.draw(ee, Fe)
          }
        }
      }
      if (ee === pe.Board) return function(ee, ie) {
        var He;
        if (!ie.canSeePlayerWrittenText) return null;
        const {
          shared: be,
          w: Me = 0,
          h: Ke = 0
        } = ee, Ue = !Me;
        let Fe;
        if (Ue) {
          var qe, fe;
          Fe = null !== (qe = null === be || void 0 === be || null === (fe = be.text) || void 0 === fe ? void 0 : fe.toString()) && void 0 !== qe ? qe : ""
        } else {
          if ("string" !== typeof(null === be || void 0 === be ? void 0 : be.text)) return null;
          Fe = be.text
        }
        if ("" === Fe.trim()) return null;
        const Te = null !== (He = null === be || void 0 === be ? void 0 : be.textSize) && void 0 !== He ? He : 0,
          pe = ye.d[Te].ingameFontSize;
        let Xe = ke,
          ze = oe;
        Ue || (Fe = (0, ye.n)(Fe, Te, Me, Ke), Xe = (0, ye.v)(Me, Ke), ze = Math.min(oe, Re / Math.max(Xe.width, Xe.height)));
        const Be = Math.round(ze * Xe.width),
          Ee = Math.round(ze * Xe.height),
          ge = ze / oe;
        return {
          width: Be,
          height: Ee,
          draw: ee => {
            Je.b.fontSize = pe * ge, Je.b.fontWeight = "bold", Je.b.font = "'Jetbrains Mono', monospace", Je.b.drawText(ee, Fe, 0, (-10 - 7 * Te) * ge, Be, Ee)
          }
        }
      }(JSON.parse(ie), de);
      if (ee === pe.Leaderboard) return function(ee, ie, He) {
        var ye;
        const be = (0, qe.k)(ee.opts, fe),
          Me = (0, qe.f)(be, He),
          Ke = {
            top: (0, qe.g)(be, (0, qe.m)(ee.top)),
            around: null !== (ye = ee.around) && void 0 !== ye ? ye : null,
            showPlayerText: ie.canSeePlayerWrittenText,
            localPlayerDbId: ie.localPlayerDbId
          };
        return {
          width: Me.pixelWidth,
          height: Me.pixelHeight,
          draw: ee => {
            const {
              a: ie,
              d: He
            } = ee.getTransform();
            (0, qe.d)(ee, Math.round(Me.pixelWidth * ie), Math.round(Me.pixelHeight * He), Me, be, Ke)
          }
        }
      }(JSON.parse(ie), de, Xe);
      throw new Error(`unknown text plane kind ${ee}`)
    }
    const ve = 2 ** Math.floor(Math.log2(Xe));

    function ue(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      try {
        if (ee.length < 2) return [0, 0];
        const Me = (0, be.c)(ie);
        if (!Me) return [0, 0];
        const Ke = ae();
        Ke !== We && (We = Ke, ce());
        const [Ue] = ee, Fe = Oe.decode(ee.subarray(1));
        let Je;
        Ue !== pe.Board && Ue !== pe.Leaderboard || !de.canSeePlayerWrittenText || de.glyphsShown(Fe), Me.save();
        try {
          Je = Ce(Ue, Fe, Me)
        } finally {
          Me.restore()
        }
        if (null === Je || !(Je.width > 0 && Je.height > 0)) return [0, 0];
        const oe = Math.min(1, Xe / Je.width, Xe / Je.height),
          Re = ee => ye ? function(ee) {
            const ie = 2 ** Math.ceil(Math.log2(ee));
            return Math.min(ve, ie - ee > ee - ie / 2 ? ie / 2 : ie)
          }(ee) : Math.min(Xe, Math.ceil(ee * oe)),
          [ke, qe] = [Re(Je.width), Re(Je.height)];
        ! function(ee, ie, He, ye, be) {
          const Me = Math.max(ee.width, He),
            Ke = Math.max(ee.height, ye),
            Ue = be || Me * Ke > Math.max(Ee * He * ye, ge),
            [Fe, Je] = Ue ? [He, ye] : [Me, Ke];
          Fe === ee.width && Je === ee.height ? ie.clearRect(0, 0, Fe, Je) : (ee.width = Fe, ee.height = Je)
        }(ie, Me, ke, qe, He), Me.save();
        try {
          const [ee, ie] = ye ? [ke / Je.width, qe / Je.height] : [oe, oe];
          1 === ee && 1 === ie || Me.scale(ee, ie), Je.draw(Me)
        } finally {
          Me.restore()
        }
        return [ke, qe]
      } catch (Me) {
        ! function(ee, ie) {
          we < Be && (we++, console.warn(`[bloxd-wasm-client] ${ee}`, ie))
        }("could not raster a text plane", Me);
        try {
          ie.width = 1
        } catch {}
        return [0, 0]
      }
    }
  },
  37108: (ee, ie, He) => {
    ee.exports = He.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37116: (ee, ie, He) => {
    ee.exports = He.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);