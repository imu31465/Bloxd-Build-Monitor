export const id = 310;
export const ids = [310];
export const modules = {
  42563: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      openMobLineupPreview: () => GW,
      openMobPreview: () => RW,
      openPetPreview: () => IW
    });
    var mW = OW(41359),
      EW = OW(41604),
      NW = OW(42569),
      PW = OW(38369),
      LW = OW(38235),
      cW = OW(41760),
      wW = OW(42588),
      tW = OW(39661),
      ZW = OW(38328),
      xW = OW(38307),
      lW = OW(38229),
      AW = OW(39553),
      bW = OW(39548),
      jW = OW(39274),
      UW = OW(38333),
      kW = OW(2365),
      sW = OW(42593),
      MW = OW(3083);
    const KW = new Map;

    function SW(WW, iW) {
      const OW = function(WW) {
        return WW.flatMap((WW => {
          var iW;
          let [OW, mW] = WW;
          const EW = void 0 === mW || null === (iW = (0, MW.l)(OW, mW)) || void 0 === iW ? void 0 : iW.attachments;
          return null !== EW && void 0 !== EW ? EW : []
        }))
      }(iW).map((iW => function(WW, iW) {
        let {
          modelGlb: OW,
          texture: mW,
          animation: EW
        } = iW;
        const NW = void 0 !== EW,
          PW = `${(0,UW.h)(OW,mW)}|${NW}`;
        let LW = KW.get(PW);
        return LW || (LW = (0, sW.g)(WW, OW, mW, {
          keepTransforms: NW,
          backFaceCulling: !1
        }).then(sW.i, (WW => {
          throw KW.delete(PW), WW
        })), KW.set(PW, LW)), LW
      }(WW, iW).then((WW => ({
        attachment: iW,
        nodes: WW
      })), (WW => (console.error(`Mob preview: could not load ${iW.modelGlb}`, WW), null)))));
      return Promise.all(OW).then((WW => WW.filter((WW => null !== WW))))
    }
    var YW = OW(39322),
      yW = OW(39294),
      TW = OW(38963),
      JW = OW(38789);
    OW(42599), OW(41997), OW(42601);
    const hW = 22,
      HW = 13,
      nW = Math.PI - Math.PI / 16,
      uW = 6,
      oW = Math.PI / 4;
    let dW = null;
    const eW = {},
      vW = new Map;

    function gW() {
      if (null !== dW) return dW;
      const WW = document.createElement("canvas");
      WW.classList.add("MobPreviewCanvas");
      const iW = new mW.c(WW, !0, {
        preserveDrawingBuffer: !0
      });
      iW.nmW = (0, kW.h)().TZ.engine.nmW;
      const OW = new EW.c(iW);
      OW.clearColor = new PW.c(0, 0, 0, 0), OW.ambientColor = new PW.Color3(1, 1, 1);
      const wW = new NW.b("NU", Math.PI / 2, Math.PI / 2, hW, LW.fA.Zero(), OW),
        tW = new cW.b("light", new LW.fA(-.1, 1, -.3), OW);
      return tW.diffuse = new PW.Color3(1, 1, 1), tW.specular = new PW.Color3(1, 1, 1), tW.groundColor = new PW.Color3(.5, .5, .5), dW = {
        engine: iW,
        rb: OW,
        canvas: WW,
        camera: wW
      }, dW
    }

    function DW(WW) {
      return eW[WW] ??= (0, jW.v)(WW, gW().rb, !0).catch((iW => {
        throw delete eW[WW], iW
      })), eW[WW]
    }

    function VW(WW) {
      let iW = vW.get(WW);
      return iW || (iW = TW.z[WW].loadModel(gW().rb, !1).then((WW => (WW.WK(!1), WW)), (iW => {
        throw vW.delete(WW), iW
      })), vW.set(WW, iW)), iW
    }

    function pW() {
      return 2 * hW * Math.tan(gW().camera.fov / 2)
    }

    function fW(WW) {
      var iW, OW, mW;
      let {
        mobType: EW,
        variation: NW,
        animation: PW
      } = WW, cW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const KW = null !== (iW = null === cW || void 0 === cW ? void 0 : cW.size) && void 0 !== iW ? iW : 1,
        hW = null !== (OW = null === cW || void 0 === cW ? void 0 : cW.cosmetics) && void 0 !== OW ? OW : [],
        uW = null !== (mW = null === cW || void 0 === cW ? void 0 : cW.nS) && void 0 !== mW ? mW : null;
      let oW = !1,
        dW = null,
        eW = null;
      const {
        engine: vW,
        rb: fW
      } = gW(), CW = fW.onBeforeRenderObservable.add((() => {
        var WW;
        null === (WW = eW) || void 0 === WW || WW.render(vW.getDeltaTime())
      })), XW = null === uW ? null : VW(uW).catch((WW => (console.error(`Mob preview: could not load ${uW}`, WW), null)));
      return Promise.all([DW(EW), XW, SW(gW().rb, hW)]).then((WW => {
        var iW, OW, mW, SW;
        let [vW, DW, VW] = WW;
        if (oW) return;
        const fW = (0, kW.h)().TZ.nD,
          {
            hitBoxDimensions: CW
          } = (0, tW.c)(EW),
          XW = HW / Math.max(CW.height, CW.width);
        if (dW = (0, jW.l)(EW, XW * KW, !0, !0), fW.setPosition(dW, MW, -CW.height * XW / 2 + (null !== (iW = null === cW || void 0 === cW ? void 0 : cW.lift) && void 0 !== iW ? iW : 0) * pW(), 0), fW.setRotationEulerY(dW, nW), vW.meshApi instanceof yW.e && hW.length > 0) {
          for (const [WW, iW] of hW) vW.meshApi.updatePlayerCosmetic(null, dW, WW, iW, !0);
          ! function(WW, iW) {
            const OW = (0, kW.h)().TZ.nD;
            for (const {
                attachment: mW,
                nodes: EW
              }
              of WW) {
              const WW = EW.get(mW.modelNode);
              WW ? (0, sW.m)((0, UW.c)(WW, `${WW.name}Worn`), mW, OW, iW) : console.error(`Mob preview: attachment node ${mW.modelNode} not found in ${mW.modelGlb}`)
            }
          }(VW, dW)
        } else vW.meshApi.updateVariation(dW, EW, null !== NW && void 0 !== NW ? NW : "default");
        null !== uW && null !== DW && function(WW, iW, OW, mW) {
          var EW;
          const NW = TW.z[WW],
            PW = (0, AW.m)();
          (0, AW.i)(NW, null === (EW = (0, YW.b)(OW).meshMetadata.heldItemPositionParams) || void 0 === EW ? void 0 : EW.itemOffset, PW);
          const cW = JW.e * PW.YZ.y,
            tW = PW.usesQuaternion ? PW.quaternion : LW.Quaternion.FromEulerVector(PW.rotation),
            ZW = new wW.e(`${iW.name}Hand`, gW().rb);
          ZW.position.HJ((0, bW.b)(PW.position, tW, cW, NW.heldModelOffsetY())), ZW.rotationQuaternion = tW, ZW.YZ.set(PW.YZ.x, cW, PW.YZ.z), iW.clone(`${iW.name}Held`, ZW).WK(!0);
          const xW = (0, kW.h)().TZ.nD;
          xW.attachTransformNode(ZW, mW, xW.getNamedNode(mW, "ArmRightMesh"))
        }(uW, DW, EW, dW), fW.set(dW, "aOpacity", 1);
        const BW = null !== (OW = (0, YW.b)(EW).meshMetadata.lifeformTypeForModelOverride) && void 0 !== OW ? OW : EW;
        eW = new lW.AnimatorState, eW.thinInstMgr = fW, eW.uD = dW, eW.OmW = fW.AmW(dW, 0), eW.modelLifeformType = BW, eW.nodeNameAliases = null !== (mW = null === (SW = (0, ZW.d)(BW)) || void 0 === SW ? void 0 : SW.nodeNameAliases) && void 0 !== mW ? mW : null, eW.startAnimation(PW, xW.d.Movement)
      })).catch((WW => {
        console.error(`Mob preview: could not load ${EW}`, WW)
      })), () => {
        oW = !0, fW.onBeforeRenderObservable.remove(CW), null !== dW && (0, kW.h)().TZ.nD.delete(dW)
      }
    }

    function CW(WW, iW) {
      return fW({
        mobType: "NPC",
        variation: null,
        animation: WW.animation
      }, WW, iW)
    }

    function XW(WW) {
      let {
        mobType: iW,
        variation: OW,
        metaInfo: mW,
        tamed: EW
      } = WW, NW = !1, PW = null, LW = 0;
      const cW = (0, kW.h)(),
        wW = cW.TZ.nD,
        tW = WW => {
          LW += oW * (WW / 1e3) % (2 * Math.PI), wW.setRotationEulerY(PW, LW)
        };
      return DW(iW).then((WW => {
        if (NW) return;
        PW = (0, jW.l)(iW, uW, !0, !0), wW.setPosition(PW, 0, -uW, 0), WW.meshApi.updateVariation(PW, iW, OW);
        const LW = {
          wool: "Sheared" !== mW,
          saddle: "Saddled" === mW,
          antlers: "Antlers" === mW,
          collar: EW
        };
        for (const [iW, OW] of Object.entries(LW)) wW.hasGroup(PW, iW) && WW.meshApi.setMeshGroupVisibility(PW, iW, OW);
        wW.set(PW, "aOpacity", 1), cW.on("renderTickBegin", tW)
      })).catch((WW => {
        console.error(`Pet preview: could not load ${iW}`, WW)
      })), () => {
        NW = !0, cW.off("renderTickBegin", tW), null !== PW && wW.delete(PW)
      }
    }
    class BW {
      constructor(WW, iW) {
        this.place = iW, this.remove = null;
        const {
          engine: OW,
          rb: mW,
          canvas: EW
        } = gW();
        WW.appendChild(EW), OW.resize(), OW.runRenderLoop((() => {
          mW.render()
        }))
      }
      show(WW) {
        var iW;
        null === (iW = this.remove) || void 0 === iW || iW.call(this), this.remove = this.place(WW)
      }
      resize(WW, iW) {
        const {
          engine: OW,
          canvas: mW
        } = gW();
        mW.width = WW, mW.height = iW, OW.resize()
      }
      close() {
        var WW;
        gW().engine.stopRenderLoop(), null === (WW = this.remove) || void 0 === WW || WW.call(this), this.remove = null
      }
    }
    class qW {
      constructor(WW) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new BW(WW, (() => () => {}))
      }
      show(WW) {
        WW.figures !== this.view.figures && this.preload(WW.figures), this.view = WW, this.place()
      }
      resize(WW, iW) {
        this.preview.resize(WW, iW), this.aspect = WW / iW, this.place()
      }
      close() {
        this.preview.close();
        for (const WW of this.placed) null === WW || void 0 === WW || WW.remove();
        this.placed = []
      }
      preload(WW) {
        const iW = () => {};
        DW("NPC").catch(iW);
        for (const {
            nS: OW,
            cosmetics: mW
          }
          of WW) null !== OW && VW(OW).catch(iW), SW(gW().rb, mW).catch(iW)
      }
      place() {
        const {
          figures: WW,
          shown: iW
        } = this.view, OW = WW.map(((OW, mW) => {
          var EW;
          const NW = null !== (EW = this.placed[mW]) && void 0 !== EW ? EW : null;
          if (!iW[mW]) return null === NW || void 0 === NW || NW.remove(), null;
          const PW = (LW = (mW + .5) / WW.length, cW = this.aspect, (.5 - LW) * pW() * cW);
          var LW, cW;
          return null !== NW && NW.figure === OW && NW.x === PW ? NW : (null === NW || void 0 === NW || NW.remove(), {
            figure: OW,
            x: PW,
            remove: CW(OW, PW)
          })
        }));
        for (const mW of this.placed.slice(WW.length)) null === mW || void 0 === mW || mW.remove();
        this.placed = OW
      }
    }

    function RW(WW) {
      return new BW(WW, fW)
    }

    function GW(WW) {
      return new qW(WW)
    }

    function IW(WW) {
      return new BW(WW, XW)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);