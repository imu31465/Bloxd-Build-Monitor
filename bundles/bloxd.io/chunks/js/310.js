export const id = 310;
export const ids = [310];
export const modules = {
  42616: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      openMobLineupPreview: () => YR,
      openMobPreview: () => ER,
      openPetPreview: () => kR
    });
    var yR = GR(41352),
      tR = GR(41610),
      uR = GR(42623),
      ZR = GR(38329),
      qR = GR(38195),
      iR = GR(41768),
      fR = GR(42644),
      VR = GR(39630),
      KR = GR(38285),
      wR = GR(38265),
      rR = GR(38189),
      eR = GR(39524),
      aR = GR(39518),
      LR = GR(39256),
      nR = GR(38287),
      UR = GR(2435),
      WR = GR(42653),
      AR = GR(3178);
    const CR = new Map;

    function XR(RR, JR) {
      const GR = function(RR) {
        return RR.flatMap((RR => {
          var JR;
          let [GR, yR] = RR;
          const tR = void 0 === yR || null === (JR = (0, AR.m)(GR, yR)) || void 0 === JR ? void 0 : JR.attachments;
          return null !== tR && void 0 !== tR ? tR : []
        }))
      }(JR).map((JR => function(RR, JR) {
        let {
          modelGlb: GR,
          texture: yR,
          animation: tR
        } = JR;
        const uR = void 0 !== tR,
          ZR = `${(0,nR.i)(GR,yR)}|${uR}`;
        let qR = CR.get(ZR);
        return qR || (qR = (0, WR.f)(RR, GR, yR, {
          keepTransforms: uR,
          backFaceCulling: !1
        }).then(WR.h, (RR => {
          throw CR.delete(ZR), RR
        })), CR.set(ZR, qR)), qR
      }(RR, JR).then((RR => ({
        attachment: JR,
        nodes: RR
      })), (RR => (console.error(`Mob preview: could not load ${JR.modelGlb}`, RR), null)))));
      return Promise.all(GR).then((RR => RR.filter((RR => null !== RR))))
    }
    var MR = GR(39300),
      BR = GR(39274),
      lR = GR(38950),
      pR = GR(38796);
    GR(42657), GR(42014), GR(42663);
    const gR = 22,
      bR = 13,
      vR = Math.PI - Math.PI / 16,
      OR = 6,
      xR = Math.PI / 4;
    let NR = null;
    const DR = {},
      HR = new Map;

    function oR() {
      if (null !== NR) return NR;
      const RR = document.createElement("canvas");
      RR.classList.add("MobPreviewCanvas");
      const JR = new yR.c(RR, !0, {
        preserveDrawingBuffer: !0
      });
      JR.LtR = (0, UR.i)().lK.engine.LtR;
      const GR = new tR.c(JR);
      GR.clearColor = new ZR.e(0, 0, 0, 0), GR.ambientColor = new ZR.Color3(1, 1, 1);
      const fR = new uR.c("tn", Math.PI / 2, Math.PI / 2, gR, qR.Fe.Zero(), GR),
        VR = new iR.b("light", new qR.Fe(-.1, 1, -.3), GR);
      return VR.diffuse = new ZR.Color3(1, 1, 1), VR.specular = new ZR.Color3(1, 1, 1), VR.groundColor = new ZR.Color3(.5, .5, .5), NR = {
        engine: JR,
        tL: GR,
        canvas: RR,
        camera: fR
      }, NR
    }

    function cR(RR) {
      return DR[RR] ??= (0, LR.r)(RR, oR().tL, !0).catch((JR => {
        throw delete DR[RR], JR
      })), DR[RR]
    }

    function PR(RR) {
      let JR = HR.get(RR);
      return JR || (JR = lR.B[RR].loadModel(oR().tL, !1).then((RR => (RR.JA(!1), RR)), (JR => {
        throw HR.delete(RR), JR
      })), HR.set(RR, JR)), JR
    }

    function IR() {
      return 2 * gR * Math.tan(oR().camera.fov / 2)
    }

    function mR(RR) {
      var JR, GR, yR;
      let {
        mobType: tR,
        variation: uR,
        animation: ZR
      } = RR, iR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, AR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const CR = null !== (JR = null === iR || void 0 === iR ? void 0 : iR.size) && void 0 !== JR ? JR : 1,
        gR = null !== (GR = null === iR || void 0 === iR ? void 0 : iR.cosmetics) && void 0 !== GR ? GR : [],
        OR = null !== (yR = null === iR || void 0 === iR ? void 0 : iR.gC) && void 0 !== yR ? yR : null;
      let xR = !1,
        NR = null,
        DR = null;
      const {
        engine: HR,
        tL: mR
      } = oR(), zR = mR.onBeforeRenderObservable.add((() => {
        var RR;
        null === (RR = DR) || void 0 === RR || RR.render(HR.getDeltaTime())
      })), SR = null === OR ? null : PR(OR).catch((RR => (console.error(`Mob preview: could not load ${OR}`, RR), null)));
      return Promise.all([cR(tR), SR, XR(oR().tL, gR)]).then((RR => {
        var JR, GR, yR, XR;
        let [HR, cR, PR] = RR;
        if (xR) return;
        const mR = (0, UR.i)().lK.RP,
          {
            hitBoxDimensions: zR
          } = (0, VR.d)(tR),
          SR = bR / Math.max(zR.height, zR.width);
        if (NR = (0, LR.i)(tR, SR * CR, !0, !0), mR.setPosition(NR, AR, -zR.height * SR / 2 + (null !== (JR = null === iR || void 0 === iR ? void 0 : iR.lift) && void 0 !== JR ? JR : 0) * IR(), 0), mR.setRotationEulerY(NR, vR), HR.meshApi instanceof BR.e && gR.length > 0) {
          for (const [RR, JR] of gR) HR.meshApi.updatePlayerCosmetic(null, NR, RR, JR, !0);
          ! function(RR, JR) {
            const GR = (0, UR.i)().lK.RP;
            for (const {
                attachment: yR,
                nodes: tR
              }
              of RR) {
              const RR = tR.get(yR.modelNode);
              RR ? (0, WR.o)((0, nR.c)(RR, `${RR.name}Worn`), yR, GR, JR) : console.error(`Mob preview: attachment node ${yR.modelNode} not found in ${yR.modelGlb}`)
            }
          }(PR, NR)
        } else HR.meshApi.updateVariation(NR, tR, null !== uR && void 0 !== uR ? uR : "default");
        null !== OR && null !== cR && function(RR, JR, GR, yR) {
          var tR;
          const uR = lR.B[RR],
            ZR = (0, eR.m)();
          (0, eR.g)(uR, null === (tR = (0, MR.c)(GR).meshMetadata.heldItemPositionParams) || void 0 === tR ? void 0 : tR.itemOffset, ZR);
          const iR = pR.d * ZR.MK.y,
            VR = ZR.usesQuaternion ? ZR.quaternion : qR.Quaternion.FromEulerVector(ZR.rotation),
            KR = new fR.c(`${JR.name}Hand`, oR().tL);
          KR.position.vN((0, aR.c)(ZR.position, VR, iR, uR.heldModelOffsetY())), KR.rotationQuaternion = VR, KR.MK.set(ZR.MK.x, iR, ZR.MK.z), JR.clone(`${JR.name}Held`, KR).JA(!0);
          const wR = (0, UR.i)().lK.RP;
          wR.attachTransformNode(KR, yR, wR.getNamedNode(yR, "ArmRightMesh"))
        }(OR, cR, tR, NR), mR.set(NR, "aOpacity", 1);
        const jR = null !== (GR = (0, MR.c)(tR).meshMetadata.lifeformTypeForModelOverride) && void 0 !== GR ? GR : tR;
        DR = new rR.AnimatorState, DR.thinInstMgr = mR, DR.JI = NR, DR.SyR = mR.JtR(NR, 0), DR.modelLifeformType = jR, DR.nodeNameAliases = null !== (yR = null === (XR = (0, KR.b)(jR)) || void 0 === XR ? void 0 : XR.nodeNameAliases) && void 0 !== yR ? yR : null, DR.startAnimation(ZR, wR.h.Movement)
      })).catch((RR => {
        console.error(`Mob preview: could not load ${tR}`, RR)
      })), () => {
        xR = !0, mR.onBeforeRenderObservable.remove(zR), null !== NR && (0, UR.i)().lK.RP.delete(NR)
      }
    }

    function zR(RR, JR) {
      return mR({
        mobType: "NPC",
        variation: null,
        animation: RR.animation
      }, RR, JR)
    }

    function SR(RR) {
      let {
        mobType: JR,
        variation: GR,
        metaInfo: yR,
        tamed: tR
      } = RR, uR = !1, ZR = null, qR = 0;
      const iR = (0, UR.i)(),
        fR = iR.lK.RP,
        VR = RR => {
          qR += xR * (RR / 1e3) % (2 * Math.PI), fR.setRotationEulerY(ZR, qR)
        };
      return cR(JR).then((RR => {
        if (uR) return;
        ZR = (0, LR.i)(JR, OR, !0, !0), fR.setPosition(ZR, 0, -OR, 0), RR.meshApi.updateVariation(ZR, JR, GR);
        const qR = {
          wool: "Sheared" !== yR,
          saddle: "Saddled" === yR,
          antlers: "Antlers" === yR,
          collar: tR
        };
        for (const [JR, GR] of Object.entries(qR)) fR.hasGroup(ZR, JR) && RR.meshApi.setMeshGroupVisibility(ZR, JR, GR);
        fR.set(ZR, "aOpacity", 1), iR.on("renderTickBegin", VR)
      })).catch((RR => {
        console.error(`Pet preview: could not load ${JR}`, RR)
      })), () => {
        uR = !0, iR.off("renderTickBegin", VR), null !== ZR && fR.delete(ZR)
      }
    }
    class jR {
      constructor(RR, JR) {
        this.place = JR, this.remove = null;
        const {
          engine: GR,
          tL: yR,
          canvas: tR
        } = oR();
        RR.appendChild(tR), GR.resize(), GR.runRenderLoop((() => {
          yR.render()
        }))
      }
      show(RR) {
        var JR;
        null === (JR = this.remove) || void 0 === JR || JR.call(this), this.remove = this.place(RR)
      }
      resize(RR, JR) {
        const {
          engine: GR,
          canvas: yR
        } = oR();
        yR.width = RR, yR.height = JR, GR.resize()
      }
      close() {
        var RR;
        oR().engine.stopRenderLoop(), null === (RR = this.remove) || void 0 === RR || RR.call(this), this.remove = null
      }
    }
    class dR {
      constructor(RR) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new jR(RR, (() => () => {}))
      }
      show(RR) {
        RR.figures !== this.view.figures && this.preload(RR.figures), this.view = RR, this.place()
      }
      resize(RR, JR) {
        this.preview.resize(RR, JR), this.aspect = RR / JR, this.place()
      }
      close() {
        this.preview.close();
        for (const RR of this.placed) null === RR || void 0 === RR || RR.remove();
        this.placed = []
      }
      preload(RR) {
        const JR = () => {};
        cR("NPC").catch(JR);
        for (const {
            gC: GR,
            cosmetics: yR
          }
          of RR) null !== GR && PR(GR).catch(JR), XR(oR().tL, yR).catch(JR)
      }
      place() {
        const {
          figures: RR,
          shown: JR
        } = this.view, GR = RR.map(((GR, yR) => {
          var tR;
          const uR = null !== (tR = this.placed[yR]) && void 0 !== tR ? tR : null;
          if (!JR[yR]) return null === uR || void 0 === uR || uR.remove(), null;
          const ZR = (qR = (yR + .5) / RR.length, iR = this.aspect, (.5 - qR) * IR() * iR);
          var qR, iR;
          return null !== uR && uR.figure === GR && uR.x === ZR ? uR : (null === uR || void 0 === uR || uR.remove(), {
            figure: GR,
            x: ZR,
            remove: zR(GR, ZR)
          })
        }));
        for (const yR of this.placed.slice(RR.length)) null === yR || void 0 === yR || yR.remove();
        this.placed = GR
      }
    }

    function ER(RR) {
      return new jR(RR, mR)
    }

    function YR(RR) {
      return new dR(RR)
    }

    function kR(RR) {
      return new jR(RR, SR)
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);