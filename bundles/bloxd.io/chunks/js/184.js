export const id = 184;
export const ids = [184];
export const modules = {
  10178: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      g: () => fR,
      k: () => KR,
      m: () => VR,
      q: () => iR,
      s: () => rR
    });
    var yR = GR(32),
      tR = GR(2218),
      uR = GR(1547),
      ZR = GR(1532);
    const qR = RR => {
        var JR, GR;
        return (0, ZR.j)() && null !== (JR = null === (GR = (0, uR.g)()) || void 0 === GR ? void 0 : GR.getGlyphForNoaAction(RR)) && void 0 !== JR ? JR : null
      },
      iR = "controllerGlyph:",
      fR = RR => {
        var JR, GR;
        return null !== (JR = null === (GR = (0, uR.g)()) || void 0 === GR ? void 0 : GR.getPadGlyphIconName(RR)) && void 0 !== JR ? JR : `${iR}xbox/${RR}`
      },
      VR = RR => RR.startsWith(iR),
      KR = RR => {
        var JR, GR;
        return VR(RR) && null !== (JR = null === (GR = (0, uR.g)()) || void 0 === GR ? void 0 : GR.getPadGlyphIconUrl(RR)) && void 0 !== JR ? JR : null
      },
      wR = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", ZR.d, tR.d, tR.c],
      rR = RR => {
        const JR = wR.map((JR => yR.n.subscribe(JR, RR)));
        return () => {
          for (const RR of JR) yR.n.unsubscribe(RR)
        }
      }
  },
  42729: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      openCharacterPreview: () => WJ
    });
    var yR = GR(39256),
      tR = GR(2435),
      uR = GR(656),
      ZR = GR(38275),
      qR = GR(3180),
      iR = GR(38265),
      fR = GR(41352),
      VR = GR(41610),
      KR = GR(42623),
      wR = GR(38195),
      rR = GR(41768),
      eR = GR(38329),
      aR = GR(41781),
      LR = GR(42685),
      nR = GR(38189),
      UR = GR(42653),
      WR = GR(42644),
      AR = GR(38397),
      CR = GR(39961),
      XR = GR(40393),
      MR = GR(40432),
      BR = GR(40429),
      lR = GR(40402),
      pR = GR(4422),
      gR = GR(38686);
    const bR = [0, 1, 0];
    class vR {
      constructor(RR) {
        this.node = RR, this.nodesByName = new Map, this.rests = new Map, this.clips = new Map;
        for (const JR of RR.getChildTransformNodes()) this.nodesByName.set(JR.name, JR), this.rests.set(JR.name, (0, gR.h)(JR))
      }
      play(RR, JR) {
        const GR = this.clip(RR);
        GR && (GR.pose.pose(JR), (0, gR.p)(GR.pose, GR.nodes))
      }
      clip(RR) {
        let JR = this.clips.get(RR);
        if (void 0 === JR) {
          const GR = (0, gR.i)(RR, (RR => {
            var JR;
            return null !== (JR = this.rests.get(RR)) && void 0 !== JR ? JR : null
          }));
          JR = GR && {
            pose: GR,
            nodes: GR.boneNames.map((RR => this.nodesByName.get(RR)))
          }, this.clips.set(RR, JR)
        }
        return JR
      }
    }

    function OR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return new wR.Fe(RR[0] * JR, RR[1] * JR, RR[2] * JR)
    }
    class xR {
      constructor(RR, JR) {
        this.tL = RR, this.scale = JR, this.petNodes = new Map, this.particleTextures = new Map, this.petName = "pet_none", this.shownPet = null, this.petIsolated = !1, this.auraSeq = 0, this.aura = null, this.auraName = "aura_none", this.auraTuning = null, this.auraDrawn = Promise.resolve()
      }
      async setPet(RR) {
        var JR;
        this.petName = RR, null === (JR = this.shownPet) || void 0 === JR || JR.node.JA(!1), this.shownPet = null;
        const GR = (0, XR.e)(RR);
        if (!GR) return;
        let yR;
        try {
          yR = await this.petNode(GR.model)
        } catch {
          return
        }
        this.petName === RR && (yR.node.JA(!0), this.shownPet = yR)
      }
      setAura(RR) {
        const JR = (0, XR.d)(RR);
        return RR === this.auraName && JR === this.auraTuning || (this.auraName = RR, this.auraTuning = JR, this.auraDrawn = this.showAura(RR, JR)), this.auraDrawn
      }
      async showAura(RR, JR) {
        var GR, yR, tR;
        const uR = ++this.auraSeq;
        if (null === (GR = this.aura) || void 0 === GR || GR.dispose(!1), this.aura = null, !JR) return;
        const ZR = await (0, CR.k)().catch((JR => (console.error(`Couldn't load the preview's particles for ${RR}:`, JR), null)));
        if (!ZR || uR !== this.auraSeq) return;
        const {
          scale: qR
        } = this, {
          opts: iR,
          half: fR
        } = (0, BR.c)(JR), VR = ZR(this.tL, `aura|${RR}`, iR.hK), KR = this.particleTexture(JR.particles.texture);
        VR.texture = KR, (0, lR.b)(VR, {
          ...iR,
          minSize: iR.minSize * qR,
          maxSize: iR.maxSize * qR,
          minEmitPower: iR.minEmitPower * qR,
          maxEmitPower: iR.maxEmitPower * qR,
          gravity: iR.gravity && [iR.gravity[0] * qR, iR.gravity[1] * qR, iR.gravity[2] * qR]
        }), VR.emitRate = iR.emitRate, VR.createBoxEmitter(OR(null !== (yR = iR.dir1) && void 0 !== yR ? yR : bR), OR(null !== (tR = iR.dir2) && void 0 !== tR ? tR : bR), OR(fR, -qR), OR(fR, qR));
        const [rR, eR, aR] = JR.offset;
        VR.emitter = new wR.Fe(rR * qR, (eR - 1) * qR, aR * qR), VR.start(), this.aura = VR;
        const LR = KR.mirror;
        LR.isReady() || LR.loadingError || await new Promise((JR => {
          LR.onLoadObservable.addOnce((() => {
            JR()
          })), LR.getInternalTexture().onErrorObservable.addOnce((GR => {
            let {
              message: yR
            } = GR;
            console.error(`Preview aura ${RR}'s texture failed to load: ${yR}`), JR()
          }))
        }))
      }
      writePose(RR) {
        var JR;
        if (!this.shownPet) return;
        const GR = (0, XR.e)(this.petName),
          {
            scale: yR
          } = this;
        if (this.petIsolated) return void this.writeIsolatedPose(this.shownPet, GR);
        const [tR, uR, ZR] = GR.followOffset, {
          node: qR
        } = this.shownPet;
        qR.position.set(tR * yR, (uR + (0, MR.c)(GR, RR) - 1) * yR, ZR * yR), qR.rotation.y = GR.yawOffset, qR.MK.NRR(GR.scale * yR), null !== (JR = GR.clips) && void 0 !== JR && JR.fly && this.shownPet.play(GR.clips.fly, RR)
      }
      isolatePet() {
        this.petIsolated = !0
      }
      writeIsolatedPose(RR, JR) {
        var GR, yR, tR;
        const {
          node: uR
        } = RR;
        uR.position.NRR(0), uR.rotation.y = JR.yawOffset, uR.MK.NRR(1);
        const ZR = null !== (GR = null === (yR = JR.clips) || void 0 === yR ? void 0 : yR.perch) && void 0 !== GR ? GR : null === (tR = JR.clips) || void 0 === tR ? void 0 : tR.fly;
        ZR && RR.play(ZR, 0);
        const {
          min: qR,
          max: iR
        } = uR.getHierarchyBoundingVectors(!0), fR = 2 * this.scale / (iR.y - qR.y);
        uR.MK.NRR(fR), uR.position.set(-(qR.x + iR.x) / 2 * fR, -(qR.y + iR.y) / 2 * fR, -(qR.z + iR.z) / 2 * fR)
      }
      petNode(RR) {
        let JR = this.petNodes.get(RR);
        return JR || (JR = (0, UR.f)(this.tL, RR, void 0, {
          keepTransforms: !0,
          backFaceCulling: !0
        }).then((JR => {
          const GR = new WR.c(`pet|${RR}`, this.tL);
          GR.JA(!1);
          for (const RR of JR.rootNodes) RR.parent = GR, (0, UR.k)(RR, !0);
          return new vR(GR)
        }), (JR => {
          throw this.petNodes.delete(RR), console.error(`Failed to load preview pet ${RR}:`, JR), JR
        })), this.petNodes.set(RR, JR)), JR
      }
      particleTexture(RR) {
        let JR = this.particleTextures.get(RR);
        return JR || (JR = (0, AR.s)(this.tL, (0, pR.e)(RR)), this.particleTextures.set(RR, JR)), JR
      }
    }
    var NR = GR(41941),
      DR = GR(41951),
      HR = GR(41972);

    function oR(RR) {
      const JR = [],
        GR = [],
        yR = [],
        tR = [],
        uR = void 0 !== RR.width ? RR.width : void 0 !== RR.size ? RR.size : 1,
        ZR = void 0 !== RR.height ? RR.height : void 0 !== RR.size ? RR.size : 1,
        qR = 0 === RR.sideOrientation ? 0 : RR.sideOrientation || DR.c.DEFAULTSIDE,
        iR = uR / 2,
        fR = ZR / 2;
      GR.push(-iR, -fR, 0), yR.push(0, 0, -1), tR.push(0, HR.d ? 1 : 0), GR.push(iR, -fR, 0), yR.push(0, 0, -1), tR.push(1, HR.d ? 1 : 0), GR.push(iR, fR, 0), yR.push(0, 0, -1), tR.push(1, HR.d ? 0 : 1), GR.push(-iR, fR, 0), yR.push(0, 0, -1), tR.push(0, HR.d ? 0 : 1), JR.push(0), JR.push(1), JR.push(2), JR.push(0), JR.push(2), JR.push(3), DR.c._ComputeSides(qR, GR, JR, yR, tR, RR.frontUVs, RR.backUVs);
      const VR = new DR.c;
      return VR.indices = JR, VR.positions = GR, VR.normals = yR, VR.uvs = tR, VR
    }

    function cR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const yR = new NR.e(RR, GR);
      JR.sideOrientation = NR.e._GetDefaultSideOrientation(JR.sideOrientation), yR._originalBuilderSideOrientation = JR.sideOrientation;
      return oR(JR).applyToMesh(yR, JR.updatable), JR.sourcePlane && (yR.translate(JR.sourcePlane.normal, -JR.sourcePlane.d), yR.setDirection(JR.sourcePlane.normal.scale(-1))), yR
    }
    let PR = !1;
    PR || (PR = !0, DR.c.CreatePlane = oR, NR.e.CreatePlane = (RR, JR, GR, yR, tR) => cR(RR, {
      size: JR,
      width: JR,
      height: JR,
      sideOrientation: tR,
      updatable: yR
    }, GR));
    var IR = GR(42722),
      mR = GR(42714),
      zR = GR(37256),
      SR = GR(37272),
      jR = GR(37341),
      dR = GR(40103),
      ER = GR(40112),
      YR = GR(40105);
    class kR {
      constructor(RR, JR) {
        this.scale = JR, this.plane = void 0, this.canvas = document.createElement("canvas"), this.texture = void 0, this.widthPx = 0, this.heightPx = 0, this.shown = null, this.stopRedrawing = null, this.texture = new IR.b("previewNametag", this.canvas, RR, !1, LR.c.BILINEAR_SAMPLINGMODE), this.texture.hasAlpha = !0;
        const GR = new aR.StandardMaterial("previewNametag", RR);
        GR.diffuseTexture = this.texture, GR.useAlphaFromDiffuseTexture = !0, GR.emissiveColor = eR.Color3.White(), GR.disableLighting = !0, this.plane = cR("previewNametag", {
          size: 1
        }, RR), this.plane.material = GR, this.plane.billboardMode = mR.b.BILLBOARDMODE_ALL, this.plane.renderingGroupId = YR.b, this.plane.ZL = !1, this.plane.JA(!1)
      }
      set(RR) {
        var JR;
        if (RR !== this.shown) {
          if (this.shown = RR, null === (JR = this.stopRedrawing) || void 0 === JR || JR.call(this), this.stopRedrawing = null, null === RR || void 0 === RR || !RR.name) return this.heightPx = 0, void this.plane.JA(!1);
          jR.i.untilLoadedFor(RR.name).then((() => {
            this.shown === RR && (this.draw(RR), this.stopRedrawing = (0, jR.h)((() => {
              this.draw(RR)
            })))
          }))
        }
      }
      update(RR) {
        if (0 === this.heightPx) return;
        const JR = -this.scale,
          GR = ER.c * this.scale + JR,
          yR = RR.position,
          tR = Math.hypot(yR.x, yR.y - GR, yR.z) / this.scale,
          uR = 2 * tR * Math.tan(RR.fov / 2) * RR.ke().getAspectRatio(RR),
          ZR = Math.min((0, ER.f)(tR), .9 * uR / (dR.c.TEXT_PLANE_RATIO * this.widthPx)),
          qR = ZR * dR.c.TEXT_PLANE_RATIO * this.heightPx;
        this.plane.position.set(0, JR + (ER.c + .5 * qR - .05) * this.scale, 0);
        const iR = ZR * dR.c.TEXT_PLANE_RATIO * this.scale;
        this.plane.MK.set(iR * this.widthPx, iR * this.heightPx, 1)
      }
      draw(RR) {
        const JR = (0, zR.c)(this.canvas),
          GR = (0, SR.e)({
            name: RR.name,
            ranks: RR.ranks,
            colour: RR.nameColour,
            mesh: !0
          }, JR, jR.n);
        if (null === GR) return this.heightPx = 0, void this.plane.JA(!1);
        this.texture.scaleTo(Math.ceil(2 * GR.width), Math.ceil(2 * GR.height)), JR.scale(2, 2), GR.draw(JR), this.texture.update(), this.widthPx = GR.width, this.heightPx = GR.height, this.plane.JA(!0)
      }
    }
    var QR = GR(38285),
      FR = (GR(42657), GR(42014), GR(42663), GR(35195)),
      TR = GR(37238),
      sR = GR(42736);
    let hR, RJ, JJ, GJ, yJ, tJ, uJ, ZJ, qJ, iJ, fJ, VJ;
    const KJ = document.createElement("canvas");
    async function wJ() {
      await new Promise((RR => {
        setTimeout((() => {
          RR()
        }), 100)
      }))
    }
    KJ.classList.add("CharCustomisationPreviewCanvas");
    const rJ = {};

    function eJ(RR, JR) {
      if (!GJ) return;
      const ZR = (0, tR.i)();
      if (ZR.kN(!1), yR.b.Player.meshApi.updatePlayerCosmetic(ZR.WH, uJ, RR, JR, !0), "cape" === RR)
        if (JR === uR.g) yJ.JA(!1);
        else {
          yJ.JA(!0);
          yJ.material.diffuseTexture = new LR.c(GR(40042)(`./cape_${JR}.png`), yJ.jH(), {
            invertY: !1,
            samplingMode: LR.c.NEAREST_NEAREST_MIPLINEAR
          })
        }
      "pet" === RR ? rJ.pet = iJ.setPet(JR) : "aura" === RR ? rJ.aura = iJ.setAura(JR) : rJ[RR] = qJ.update(RR, JR)
    }

    function aJ(RR, JR) {
      const [GR, yR] = (0, TR.e)(RR, JR, window.devicePixelRatio);
      hR.setSize(Math.max(GR, Math.floor(RR)), Math.max(yR, Math.floor(JR)))
    }
    let LJ = 0;
    class nJ {
      constructor(RR, JR) {
        var GR;
        this.framing = JR, this.ready = VJ, this.dev = {
          canvas: () => KJ,
          captureFrame: RR => (0, sR.e)((() => this.closed ? null : KJ), (RR => {
            const JR = JJ.onAfterRenderObservable.addOnce(RR);
            return () => {
              JJ.onAfterRenderObservable.remove(JR)
            }
          }), RR),
          isolateHead(RR) {
            const JR = tJ.getNodeNames(uJ);
            for (let GR = 0; GR < JR.length; GR++) "HeadMesh" !== JR[GR] && "__root__" !== JR[GR] && "TorsoNode" !== JR[GR] && tJ.setNodeEnabled(uJ, GR, !1);
            if (RR) {
              const RR = tJ.getNamedNode(uJ, "HeadMesh");
              tJ.setNodeDisableColorWrite(uJ, RR, !0, (RR => {
                const JR = new aR.StandardMaterial(`${RR.name}_depthOnly`, RR.jH());
                return JR.disableColorWrite = !0, JR
              }))
            }
            tJ.setPosition(uJ, 0, -12, 0), fJ.set(null), eJ("pet", "pet_none"), eJ("aura", "aura_none")
          },
          isolatePet() {
            const RR = tJ.getNodeNames(uJ).length;
            for (let JR = 0; JR < RR; JR++) tJ.setNodeEnabled(uJ, JR, !1);
            yJ.JA(!1), eJ("aura", "aura_none"), fJ.set(null), iJ.isolatePet()
          }
        }, this.closed = !1, this.resetCamera(), null === (GR = fJ) || void 0 === GR || GR.set(null);
        const yR = RR.getBoundingClientRect();
        aJ(yR.width, yR.height), LJ++, hR.stopRenderLoop(), hR.runRenderLoop((() => {
          var RR, JR, GR, yR;
          null === (RR = ZJ) || void 0 === RR || RR.render(hR.getDeltaTime());
          const tR = performance.now() / 1e3;
          null === (JR = qJ) || void 0 === JR || JR.writePoses(tR), null === (GR = iJ) || void 0 === GR || GR.writePose(tR), null === (yR = fJ) || void 0 === yR || yR.update(RJ), JJ.render()
        }))
      }
      isReady() {
        return !!GJ
      }
      setCosmetic(RR, JR) {
        eJ(RR, JR)
      }
      setNametag(RR) {
        var JR;
        null === (JR = fJ) || void 0 === JR || JR.set(RR)
      }
      playEmote(RR) {
        if (!ZJ) return;
        if (!RR) return void ZJ.stopAnimation(iR.h.Emote);
        const JR = (0, ZR.h)((0, qR.i)(RR).animation);
        ZJ.startAnimation(JR, iR.h.Emote, 0, qR.b)
      }
      async untilDrawn(RR) {
        if (await wJ(), "cape" === RR && yJ) {
          const RR = yJ.material,
            JR = null === RR || void 0 === RR ? void 0 : RR.diffuseTexture;
          JR && !JR.isReady() && (await new Promise((RR => {
            JR.onLoadObservable.addOnce((() => {
              RR()
            }))
          })), await wJ())
        }
        rJ[RR] && (await rJ[RR], await wJ()), await JJ.whenReadyAsync(), await new Promise((RR => {
          JJ.onAfterRenderObservable.addOnce((() => {
            RR()
          }))
        }))
      }
      setOrbit(RR) {
        UJ(RR)
      }
      resetCamera() {
        RJ.inertialAlphaOffset = 0, RJ.inertialBetaOffset = 0, RJ.inertialRadiusOffset = 0, UJ(FR.e[this.framing])
      }
      resize(RR, JR) {
        aJ(RR, JR)
      }
      close() {
        var RR;
        this.closed || (this.closed = !0, LJ--, 0 === LJ && (hR.stopRenderLoop(), null === (RR = fJ) || void 0 === RR || RR.set(null)))
      }
    }

    function UJ(RR) {
      let {
        yaw: JR,
        pitch: GR,
        radius: yR,
        target: tR
      } = RR;
      RJ.alpha = JR, RJ.beta = GR, yR && (RJ.radius = yR), tR && RJ.target.set(tR[0], tR[1], tR[2])
    }

    function WJ(RR, JR) {
      return RR.appendChild(KJ), hR || function() {
        hR = new fR.c(KJ, !0, {
          preserveDrawingBuffer: !0
        });
        const RR = (0, tR.i)();
        hR.LtR = RR.lK.engine.LtR, JJ = new VR.c(hR), JJ.clearColor = new eR.e(0, 0, 0, 0), JJ.ambientColor = new eR.Color3(1, 1, 1), RJ = new KR.c("tn", 0, 0, 1, wR.Fe.Zero(), JJ), RJ.attachControl(KJ, !0), RJ.panningSensibility = 0, VJ = (0, yR.r)("Player", JJ, !0).then((JR => {
          GJ = JR.meshApi, yJ = JR.capeMesh, tJ = RR.lK.RP;
          const GR = 8.33;
          uJ = (0, yR.i)("Player", GR, !0, !0), tJ.setPosition(uJ, 0, -8.33, 0);
          const tR = tJ.getNamedNode(uJ, "BodyMesh");
          tJ.attachTransformNode(yJ, uJ, tR), tJ.set(uJ, "aOpacity", 1), tJ.Yz(uJ, "aOpacity", 1), qJ = new UR.d(JJ, tJ, uJ), iJ = new xR(JJ, GR), fJ = new kR(JJ, GR), ZJ = new nR.AnimatorState, ZJ.xw = RR, ZJ.thinInstMgr = tJ, ZJ.JI = uJ, ZJ.SyR = tJ.JtR(uJ, 0), ZJ.modelLifeformType = "Player", ZJ.nodeNameAliases = (0, QR.b)("Player").nodeNameAliases;
          const uR = yJ.Tm().boundingBox;
          yJ.position.y = ((24 - uR.maximum.y + uR.minimum.y) / 2 - 1 / 32) / GR, yJ.position.z = -1 / GR, yJ.rotationQuaternion = null;
          const ZR = Math.PI / 18,
            qR = uR.maximum.y / GR;
          yJ.rotation.x = ZR;
          const iR = Math.cos(ZR),
            fR = Math.sin(ZR);
          yJ.position.y += qR * (1 - iR) + 0 * fR, yJ.position.z -= qR * fR + 0 * (1 - iR);
          const VR = new aR.StandardMaterial("capeMaterial", yJ.jH());
          yJ.material = VR;
          const KR = new eR.Color3(1, 1, 1);
          VR.diffuseColor = new eR.Color3, VR.specularColor = new eR.Color3, VR.emissiveColor = new eR.Color3, VR.ambientColor = new eR.Color3, KR.scaleToRef(.43, VR.diffuseColor), KR.scaleToRef(1.75, VR.ambientColor), VR.freeze();
          const LR = new rR.b("light", new wR.Fe(-.1, 1, -.3), JJ);
          LR.diffuse = new eR.Color3(1, 1, 1), LR.specular = new eR.Color3(1, 1, 1), LR.groundColor = new eR.Color3(.5, .5, .5)
        }))
      }(), new nJ(RR, JR)
    }
  },
  37357: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      h: () => ZR
    });
    var yR = GR(4563);
    let tR = null,
      uR = null;

    function ZR() {
      return uR ??= GR.e(241).then((() => GR(37221))).then((RR => {
        let {
          ITEM_SPRITES: JR,
          ITEM_SPRITES_WITHOUT_FILE: GR,
          ITEM_FILES_WITHOUT_SPRITE: uR
        } = RR;
        tR = function(RR, JR, GR) {
          const tR = new Set,
            uR = (0, yR.u)(JR);
          let ZR = 0;
          for (const [yR, qR] of RR.entries()) yR === uR[ZR] ? ZR++ : tR.add(qR);
          if ("" !== GR)
            for (const qR of GR.split(yR.r)) tR.add(qR);
          return tR
        }(JR.split(yR.r), GR, uR)
      }), (RR => {
        throw uR = null, RR
      })), uR
    }

    function qR(RR) {
      var JR, GR;
      return null !== (JR = null === (GR = tR) || void 0 === GR ? void 0 : GR.has(RR)) && void 0 !== JR && JR
    }
  },
  35085: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR
    });
    var yR = GR(1406);

    function tR() {
      var RR, JR;
      return null !== (RR = null === (JR = screen.orientation) || void 0 === JR ? void 0 : JR.type) && void 0 !== RR ? RR : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const uR = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && tR() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = tR(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, yR.ma)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const RR of this.resizers) RR()
          }
        }), 1e3)
      }
      heldSizer(RR) {
        let JR = !1;
        return () => {
          if (JR && this.isHeld()) return null;
          const GR = RR();
          return JR ||= null !== GR, GR
        }
      }
      onRelease(RR) {
        return this.resizers.add(RR), () => {
          this.resizers.delete(RR)
        }
      }
    }
  },
  37256: (RR, JR, GR) => {
    function yR(RR, JR, GR) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(RR, JR).getContext("2d", GR);
      const yR = document.createElement("canvas");
      return yR.width = RR, yR.height = JR, yR.getContext("2d", GR)
    }

    function tR(RR, JR) {
      return RR.getContext("2d", JR)
    }
    GR.d(JR, {
      c: () => tR,
      e: () => yR
    })
  },
  42736: (RR, JR, GR) => {
    function yR(RR, JR, GR) {
      return new Promise((yR => {
        const tR = setTimeout((() => {
            uR(), yR(null)
          }), GR),
          uR = JR((() => {
            clearTimeout(tR);
            const JR = RR();
            yR(null === JR ? null : function(RR) {
              if (0 === RR.width || 0 === RR.height) return null;
              const JR = document.createElement("canvas");
              JR.width = RR.width, JR.height = RR.height;
              const GR = JR.getContext("2d");
              return GR ? (GR.drawImage(RR, 0, 0), JR) : null
            }(JR))
          }))
      }))
    }
    GR.d(JR, {
      e: () => yR
    })
  },
  37238: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    const yR = 4e5,
      tR = 2;

    function uR(RR, JR, GR) {
      let [uR, ZR] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [RR, JR], qR = Math.min(Number.isFinite(GR) && GR > 0 ? GR : 1, tR);
      const iR = Math.max(0, uR, RR) * Math.max(0, ZR, JR) * qR * qR;
      return iR > yR && (qR *= Math.sqrt(yR / iR)), [Math.max(1, Math.floor(Math.max(0, RR) * qR)), Math.max(1, Math.floor(Math.max(0, JR) * qR))]
    }
  },
  37278: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => XR,
      e: () => gR,
      i: () => bR,
      m: () => vR
    });
    var yR = GR(37287),
      tR = GR(8059),
      uR = GR(8132),
      ZR = GR(37293),
      qR = GR(37298),
      iR = GR(37301),
      fR = GR(8461),
      VR = GR(8583),
      KR = GR(37303),
      wR = GR(8784),
      rR = GR(7934),
      eR = GR(9048),
      aR = GR(37309),
      LR = GR(37312),
      nR = GR(9074),
      UR = GR(37314),
      WR = GR(37323),
      AR = GR(377);
    const CR = {
        redTeam: uR.c,
        blueTeam: LR.g,
        greenTeam: WR.f,
        yellowTeam: nR.f,
        cyanTeam: iR.f,
        whiteTeam: rR.faPlus,
        pinkTeam: VR.d,
        grayTeam: KR.e,
        blackTeam: aR.h,
        orangeTeam: UR.h,
        lilacTeam: ZR.e,
        purpleTeam: wR.f,
        magentaTeam: qR.e,
        brownTeam: yR.g,
        limeTeam: tR.faBolt,
        lightGrayTeam: fR.h,
        lightBlueTeam: eR.h
      },
      XR = Object.fromEntries(Object.values(CR).map((RR => [MR(RR), RR])));

    function MR(RR) {
      return `team-${RR.iconName}`
    }
    const BR = new Map;
    for (const [OR, xR] of Object.entries(CR)) {
      const RR = MR(xR),
        JR = AR.C[OR];
      JR && BR.set(JR.toLowerCase(), {
        icon: RR,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "white",
          iconShadowRGB: "black"
        },
        visible: !0
      })
    }
    let lR = !1;
    const pR = new Set;

    function gR(RR) {
      if (RR !== lR) {
        lR = RR;
        for (const RR of pR) RR()
      }
    }

    function bR(RR) {
      var JR;
      return "string" === typeof RR && lR && null !== (JR = BR.get(RR.toLowerCase())) && void 0 !== JR ? JR : null
    }

    function vR(RR) {
      return pR.add(RR), () => {
        pR.delete(RR)
      }
    }
  },
  37346: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => VR,
      f: () => iR,
      g: () => qR,
      j: () => fR
    });
    var yR = GR(2144);
    let tR = null,
      uR = 0;
    const ZR = new Set;

    function qR() {
      return tR
    }

    function iR() {
      return uR
    }

    function fR(RR) {
      tR = RR, uR++, (0, yR.e)();
      for (const JR of ZR) JR()
    }

    function VR(RR) {
      ZR.add(RR)
    }
  },
  37353: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR,
      e: () => qR
    });
    var yR = GR(37357);
    let tR = null,
      uR = null;

    function ZR() {
      return tR ??= GR.e(74).then((() => GR(42743))).catch((RR => {
        throw tR = null, RR
      })), tR
    }

    function qR() {
      return uR ??= Promise.all([ZR(), (0, yR.h)()]).then((RR => {
        let [JR] = RR;
        return JR
      }), (RR => {
        throw uR = null, RR
      })), uR
    }
  },
  37272: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => XR
    });
    var yR = GR(5281),
      tR = GR(1359),
      uR = GR(656),
      ZR = GR(2242),
      qR = GR(37278),
      iR = GR(37266);
    const fR = 10,
      VR = 3,
      KR = 3,
      wR = [{
        healthFraction: .25,
        colour: "#ff0000"
      }, {
        healthFraction: .5,
        colour: "#ffaa00"
      }, {
        healthFraction: 1,
        colour: "#00ff00"
      }],
      rR = 64,
      eR = 69,
      aR = {
        icon: ZR.b,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "#f38ab6",
          iconShadowRGB: "black"
        },
        visible: !0
      };

    function LR(RR) {
      return "object" !== typeof RR || null === RR || Array.isArray(RR) ? void 0 : RR
    }
    const nR = new Set(yR.c);

    function UR(RR, JR) {
      return "string" === typeof RR ? (0, iR.m)(RR, JR) : JR
    }

    function WR(RR) {
      return UR(RR.width, VR)
    }

    function AR(RR, JR) {
      var GR;
      const yR = null !== (GR = RR.applyTo) && void 0 !== GR ? GR : "both";
      return "both" === yR || yR === JR
    }

    function CR(RR) {
      const JR = WR(RR);
      return "glow" === RR.style ? JR * KR : Math.ceil(JR / 2) + 1
    }

    function XR(RR, JR, GR) {
      var yR, ZR;
      const VR = null !== (yR = LR(RR.info)) && void 0 !== yR ? yR : {},
        XR = "string" === typeof RR.name ? RR.name : "",
        MR = VR.subtitle;
      if (Array.isArray(VR.content) && 0 === VR.content.length && !(Array.isArray(MR) && MR.length > 0)) return null;
      const BR = "number" === typeof RR.hideNameSeed ? RR.hideNameSeed : null,
        lR = "" === XR || !0 === RR.mesh ? XR : (0, tR.e)(XR, !GR.canSeeRealPlayerNames, BR);
      if (!lR && !VR.content) return null;
      const pR = "string" === typeof RR.colour ? RR.colour : "default",
        gR = Object.hasOwn(uR.v, pR) ? uR.v[pR] : void 0,
        bR = VR.content ? (0, iR.h)(VR.content, iR.c.DEFAULT_FONT_SIZE, GR, gR) : [{
          kind: "text",
          text: lR,
          size: iR.c.DEFAULT_FONT_SIZE,
          colour: gR
        }],
        vR = [],
        OR = "boolean" === typeof RR.player ? RR.player : Array.isArray(RR.ranks),
        xR = OR ? (0, qR.i)(VR.backgroundColor) : null;
      xR && vR.push({
        kind: "rank",
        rank: xR
      });
      for (const tR of Array.isArray(RR.ranks) ? RR.ranks : []) {
        const RR = (0, iR.p)(tR);
        null !== RR && void 0 !== RR && RR.nameTag && RR.visible && vR.push({
          kind: "rank",
          rank: RR
        })
      }
      vR.push(...bR), OR && "" !== XR && GR.isFriend(XR) && vR.push({
        kind: "rank",
        rank: aR
      }), "number" === typeof RR.xZ && vR.push({
        kind: "text",
        text: ` ${RR.xZ}m`,
        size: iR.c.DEFAULT_FONT_SIZE,
        colour: "#cef3ff"
      });
      const NR = MR ? (0, iR.h)(MR, iR.c.DEFAULT_SUBTITLE_FONT_SIZE, GR) : null,
        DR = "string" === typeof VR.backgroundColor ? VR.backgroundColor : "#22283b",
        HR = "string" === typeof VR.subtitleBackgroundColor ? VR.subtitleBackgroundColor : "#1a1e2d",
        oR = LR(VR.healthbar),
        cR = LR(VR.border),
        PR = Array.isArray(RR.effects) ? RR.effects.filter((RR => "string" === typeof RR && nR.has(RR))) : [],
        IR = "number" === typeof RR.health ? Math.max(0, Math.min(1, RR.health)) : null,
        mR = (0, iR.g)(vR, JR, GR),
        zR = (0, iR.g)(null !== NR && void 0 !== NR ? NR : [], JR, GR),
        SR = {
          width: iR.c.EFFECT_ICON_SIZE * PR.length,
          height: PR.length > 0 ? iR.c.EFFECT_ICON_SIZE : 0
        },
        jR = cR && AR(cR, "nametag") ? CR(cR) : 0,
        dR = UR(null === oR || void 0 === oR ? void 0 : oR.height, fR),
        ER = cR && AR(cR, "healthbar") ? CR(cR) : 0,
        YR = "never" === (null !== (ZR = null === oR || void 0 === oR ? void 0 : oR.display) && void 0 !== ZR ? ZR : "onDamage") ? 0 : dR + ER,
        kR = Math.max(SR.height, jR),
        QR = Math.max(iR.c.VERTICAL_PADDING, YR, jR);
      let FR = Math.max(mR.width, zR.width, SR.width);
      if (cR) {
        const RR = CR(cR) + iR.c.HORIZONTAL_PADDING / 2;
        FR = Math.max(FR, Math.max(mR.width, zR.width) + iR.c.HORIZONTAL_PADDING + 2 * RR)
      }
      const TR = mR.height + zR.height + kR + QR,
        sR = mR.width + iR.c.HORIZONTAL_PADDING,
        hR = zR.width + iR.c.HORIZONTAL_PADDING,
        RJ = Math.max(sR, hR),
        JJ = (FR - RJ) / 2,
        GJ = Math.max(SR.height, jR);
      return {
        width: FR,
        height: TR,
        draw: RR => {
          const JR = [];
          if (RR.fillStyle = DR, RR.fillRect(JJ, GJ, RJ, mR.height), (0, iR.l)(vR, (FR - sR) / 2 + iR.c.HORIZONTAL_PADDING / 2, GJ, mR.height, RR, GR, JR), NR) {
            const yR = GJ + mR.height;
            RR.fillStyle = HR, RR.fillRect(JJ, yR, RJ, zR.height), (0, iR.l)(NR, (FR - hR) / 2 + iR.c.HORIZONTAL_PADDING / 2, yR, zR.height, RR, GR, JR)
          }
          let yR = null;
          if (null !== IR) {
            const JR = TR - dR - ER;
            null !== oR && void 0 !== oR && oR.backgroundColour && (RR.fillStyle = oR.backgroundColour, RR.fillRect(JJ, JR, RJ, dR)), RR.fillStyle = function(RR, JR) {
              const GR = null === RR || void 0 === RR ? void 0 : RR.foregroundColour;
              if ("string" === typeof GR) return GR;
              const yR = [...Array.isArray(GR) && GR.length > 0 ? GR : wR].sort(((RR, JR) => RR.healthFraction - JR.healthFraction)),
                tR = yR.find((RR => JR <= RR.healthFraction));
              return (null !== tR && void 0 !== tR ? tR : yR[yR.length - 1]).colour
            }(oR, IR), RR.fillRect(JJ, JR, Math.round(RJ * IR), dR), yR = {
              x: JJ,
              y: JR,
              width: RJ,
              height: dR
            }
          }
          if (cR) {
            const JR = [];
            AR(cR, "nametag") && JR.push({
              x: JJ,
              y: GJ,
              width: RJ,
              height: mR.height + (NR ? zR.height : 0)
            }), yR && AR(cR, "healthbar") && JR.push(yR), JR.length > 0 && function(RR, JR, GR) {
              const yR = WR(JR),
                tR = yR / 2,
                uR = RR => RR.width > 0 && RR.height > 0,
                ZR = GR.map((RR => ({
                  x: RR.x + tR,
                  y: RR.y + tR,
                  width: RR.width - yR,
                  height: RR.height - yR
                }))).filter(uR);
              if (0 === ZR.length) return;
              const qR = JR => {
                const GR = JR.filter(uR);
                if (0 !== GR.length) {
                  RR.beginPath();
                  for (const JR of GR) RR.rect(JR.x, JR.y, JR.width, JR.height);
                  RR.stroke()
                }
              };
              if (RR.save(), RR.strokeStyle = JR.colour, RR.lineWidth = yR, RR.lineJoin = "round", "glow" === JR.style) RR.shadowColor = JR.colour, RR.shadowBlur = yR * KR, qR(ZR), qR(ZR);
              else if ("double" === JR.style) {
                qR(ZR);
                const RR = yR + 2;
                qR(ZR.map((JR => ({
                  x: JR.x + RR,
                  y: JR.y + RR,
                  width: JR.width - 2 * RR,
                  height: JR.height - 2 * RR
                }))))
              } else qR(ZR);
              RR.restore()
            }(RR, cR, JR)
          }(0, iR.j)(JR, RR);
          for (let tR = 0; tR < PR.length; tR++) {
            const JR = GR.effectImage(PR[tR]);
            JR && (RR.imageSmoothingEnabled = !1, RR.drawImage(JR, 5 + eR * tR, 5, rR, rR))
          }
        }
      }
    }
  },
  37266: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      g: () => UR,
      h: () => rR,
      j: () => CR,
      k: () => AR,
      l: () => WR,
      m: () => fR,
      p: () => KR
    });
    var yR = GR(656),
      tR = GR(359);
    const uR = {
        DEFAULT_FONT_SIZE: 47,
        DEFAULT_SUBTITLE_FONT_SIZE: 30,
        HORIZONTAL_PADDING: 30,
        VERTICAL_PADDING: 22,
        TEXT_SHADOW_WIDTH: 2,
        LINE_SPACING: 8,
        EFFECT_ICON_SIZE: 70
      },
      ZR = 41;

    function qR(RR) {
      return `bolder ${RR}px 'Jetbrains Mono'`
    }

    function iR(RR) {
      return "object" === typeof RR && null !== RR
    }

    function fR(RR, JR) {
      const GR = "number" === typeof RR ? RR : "string" === typeof RR ? Number(RR.replace("px", "")) : NaN;
      return Number.isFinite(GR) && GR > 0 ? GR : JR
    }

    function VR(RR) {
      return iR(RR) ? RR : void 0
    }

    function KR(RR) {
      const JR = "number" === typeof RR ? yR.z[RR] : RR;
      return "string" === typeof JR && Object.hasOwn(yR.n, JR) ? yR.n[JR] : void 0
    }

    function wR(RR, JR) {
      return "string" === typeof RR ? RR : iR(RR) ? "string" === typeof RR.translationKey ? JR.translate(RR.translationKey, RR.params).map((RR => "string" === typeof RR ? RR : RR.icon)).join("") : "string" === typeof RR.entityName ? JR.shownPlayerName(RR.entityName) : "" : void 0 === RR || null === RR ? "" : String(RR)
    }

    function rR(RR, JR, GR, yR) {
      if (!Array.isArray(RR)) return [];
      const ZR = [];
      for (const eR of RR) {
        var qR, KR;
        if (iR(eR) && "chatTag" in eR) {
          ZR.push({
            kind: "rank",
            rank: eR
          });
          continue
        }
        if (iR(eR) && "icon" in eR && !("mainRGB" in eR)) {
          var rR;
          ZR.push({
            kind: "icon",
            icon: String(eR.icon),
            size: fR(null === (rR = VR(eR.style)) || void 0 === rR ? void 0 : rR.fontSize, uR.DEFAULT_FONT_SIZE)
          });
          continue
        }
        if (iR(eR) && (0, tR.sb)(eR)) {
          ZR.push({
            kind: "text",
            text: "",
            size: JR,
            colour: yR
          });
          continue
        }
        let RR, aR;
        iR(eR) && (0, tR.rb)(eR) ? (RR = GR.keyBindingText(String(eR.action)), aR = VR(eR.style)) : iR(eR) && "str" in eR ? (RR = eR.str, aR = VR(eR.style)) : RR = eR;
        const LR = fR(null === (qR = aR) || void 0 === qR ? void 0 : qR.fontSize, JR),
          nR = null !== (KR = (0, tR.Zb)(aR)) && void 0 !== KR ? KR : yR;
        if (iR(RR) && "string" === typeof RR.translationKey) {
          const JR = GR.translate(RR.translationKey, RR.params);
          if (JR.some((RR => "string" !== typeof RR))) {
            for (const RR of JR) ZR.push("string" === typeof RR ? {
              kind: "text",
              text: RR,
              size: LR,
              colour: nR
            } : {
              kind: "icon",
              icon: RR.icon,
              size: LR
            });
            continue
          }
        }
        ZR.push({
          kind: "text",
          text: wR(RR, GR),
          size: LR,
          colour: nR
        })
      }
      return ZR
    }

    function eR(RR) {
      return void 0 !== RR && "rank" !== RR.kind
    }

    function aR(RR, JR) {
      const GR = eR(RR),
        yR = eR(JR);
      return void 0 === RR && !yR || !GR && void 0 === JR ? 0 : GR !== yR ? .5 * uR.HORIZONTAL_PADDING : 0
    }

    function LR(RR) {
      return "rank" === RR.kind ? uR.DEFAULT_FONT_SIZE : RR.size
    }

    function nR(RR, JR, GR) {
      return "icon" === RR.kind ? RR.size : "rank" === RR.kind ? function(RR, JR) {
        const GR = JR.rankIcon(RR.rank.icon);
        return GR ? ZR * (GR.width / GR.height) : ZR
      }(RR, GR) + uR.HORIZONTAL_PADDING : (GR.glyphsShown(RR.text), JR.font = qR(RR.size), JR.measureText(RR.text).width)
    }

    function UR(RR, JR, GR) {
      if (0 === RR.length) return {
        width: 0,
        height: 0,
        sizes: []
      };
      let yR = 0;
      for (const uR of RR) yR = Math.max(yR, LR(uR));
      const tR = [];
      let ZR = aR(void 0, RR[0]);
      for (let uR = 0; uR < RR.length; uR++) {
        const yR = ZR;
        ZR += nR(RR[uR], JR, GR), ZR += aR(RR[uR], RR[uR + 1]), tR.push({
          x: yR,
          width: ZR - yR
        })
      }
      return {
        width: ZR,
        height: yR + uR.VERTICAL_PADDING,
        sizes: tR
      }
    }

    function WR(RR, JR, GR, yR, tR, uR, ZR) {
      JR += aR(void 0, RR[0]);
      for (let qR = 0; qR < RR.length; qR++) {
        const iR = AR(RR[qR], JR, GR, yR, tR, uR, ZR);
        JR += 0 === iR ? 0 : iR + aR(RR[qR], RR[qR + 1])
      }
    }

    function AR(RR, JR, GR, yR, tR, iR, fR, VR) {
      var KR;
      if ("icon" === RR.kind) {
        const yR = iR.iconImage(RR.icon);
        return yR && fR.push({
          image: yR,
          x: JR,
          y: GR + uR.VERTICAL_PADDING / 2,
          size: RR.size
        }), RR.size
      }
      if ("rank" === RR.kind) {
        const qR = null !== VR && void 0 !== VR ? VR : nR(RR, tR, iR);
        return function(RR, JR, GR, yR, tR, qR, iR) {
          var fR, VR;
          const {
            rank: KR
          } = RR;
          qR.fillStyle = KR.mainRGB, qR.fillRect(JR, GR, yR, tR);
          const wR = iR.rankIcon(KR.icon);
          if (!wR) return;
          const rR = ZR / wR.height,
            eR = JR + (yR - wR.width * rR) / 2,
            aR = GR + (tR - ZR) / 2,
            LR = new Path2D(wR.path),
            nR = uR.TEXT_SHADOW_WIDTH,
            UR = (null === (fR = KR.nameTag) || void 0 === fR ? void 0 : fR.iconShadowRGB) || "black";
          for (const uR of [-1, 1])
            for (const RR of [-1, 1]) XR(qR, LR, eR + nR * uR, aR + nR * RR, rR, UR);
          XR(qR, LR, eR, aR, rR, (null === (VR = KR.nameTag) || void 0 === VR ? void 0 : VR.iconRGB) || "white")
        }(RR, JR, GR, qR, yR, tR, iR), qR
      }
      if (0 === RR.text.length) return 0;
      const wR = qR(RR.size);
      tR.font = wR;
      const rR = null !== VR && void 0 !== VR ? VR : tR.measureText(RR.text).width;
      return function(RR, JR, GR, yR, tR, ZR) {
        const qR = uR.TEXT_SHADOW_WIDTH;
        ZR.font = yR, ZR.fillStyle = "black";
        for (const uR of [-1, 1])
          for (const yR of [-1, 1]) ZR.fillText(RR, JR + qR * uR, GR + qR * yR);
        ZR.fillStyle = tR, ZR.fillText(RR, JR, GR)
      }(RR.text, JR, GR + yR - uR.VERTICAL_PADDING + 5, wR, null !== (KR = RR.colour) && void 0 !== KR ? KR : "white", tR), rR
    }

    function CR(RR, JR) {
      for (const {
          image: GR,
          x: yR,
          y: tR,
          size: uR
        }
        of RR) JR.imageSmoothingEnabled = !1, JR.drawImage(GR, yR, tR, uR, uR)
    }

    function XR(RR, JR, GR, yR, tR, uR) {
      RR.save(), RR.translate(GR, yR), RR.scale(tR, tR), RR.fillStyle = uR, RR.fill(JR), RR.restore()
    }
  },
  37341: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => QR,
      f: () => JJ,
      h: () => jR,
      i: () => ER,
      l: () => YR,
      m: () => kR,
      n: () => tJ,
      q: () => dR,
      r: () => zR
    });
    var yR = GR(5281),
      tR = GR(5303),
      uR = GR(35162),
      ZR = GR(4555),
      qR = GR(4546),
      iR = GR(1485),
      fR = GR(37256),
      VR = GR(103),
      KR = GR(1351),
      wR = GR(37278),
      rR = GR(37346),
      eR = GR(37353),
      aR = GR(9468),
      LR = GR(8872),
      nR = GR(9056),
      UR = GR(9180),
      WR = GR(9323),
      AR = GR(9338);
    const CR = {
      youtube: aR.f,
      "person-military-pointing": LR.g,
      sparkle: nR.f,
      user: UR.c,
      wrench: WR.d,
      zap: AR.f,
      ...wR.c
    };

    function XR(RR) {
      const [JR, GR, , , yR] = RR.icon;
      return {
        width: JR,
        height: GR,
        path: "string" === typeof yR ? yR : yR.join(" ")
      }
    }
    const MR = new Map(Object.entries(CR).map((RR => {
      let [JR, GR] = RR;
      return [JR, XR(GR)]
    })));
    let BR = !1;
    const lR = new Set;
    var pR = GR(37362);
    const gR = "Jetbrains Mono",
      bR = "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+2248,U+26A1,U+2713,U+FEFF,U+FFFD",
      vR = "U+0100-0130,U+0132-0151,U+0154-017F,U+018F-0190,U+0192,U+019B,U+01A0-01A1,U+01AF-01B0,U+01CD-01CE,U+01D0,U+01D2,U+01D4,U+01D6,U+01D8,U+01DA,U+01DC,U+01E6-01E7,U+01EA-01EB,U+01F4-01F5,U+01FC-01FF,U+0218-021B,U+0232-0233,U+0237,U+0259,U+02B9-02BA,U+02C7,U+02C9,U+02D8-02D9,U+02DB,U+02DD,U+02F3,U+02F7,U+0300-0303,U+0306-0307,U+0309-030C,U+030F,U+0312,U+031B,U+0323,U+0325-0328,U+0336-0338,U+0374-0375,U+037E,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03CF,U+03D5-03D7,U+0401-040C,U+040E-044F,U+0451-045C,U+045E-045F,U+0490-0493,U+049A-049B,U+04A2-04A3,U+04AE-04B1,U+04B6-04B7,U+04BA-04BB,U+04D8-04D9,U+04DC-04DF,U+04E4-04E9,U+04F4-04F5,U+0AEA,U+1E80-1E85,U+1E9E,U+1EA0-1EF9,U+2070,U+2074-207A,U+207C,U+2080-2089,U+20AB,U+20AE,U+20B4,U+20BD,U+20BF,U+2102,U+210D,U+2113,U+2115-2116,U+2119-211A,U+211D,U+2124,U+212E,U+2140,U+218A-218B,U+2194-2199,U+219D-219E,U+21A0,U+21A2-21A3,U+21A5-21A7,U+21A9-21AA,U+21AD,U+21BE,U+21C9,U+21D0-21D4,U+21DB,U+21DE-21DF,U+21E5,U+21E7-21E8,U+21EA,U+2200-220C,U+220E-2211,U+2213,U+2218-221A,U+221E,U+2223-2225,U+2227-222B,U+2234-2239,U+223C,U+223E,U+2243,U+2245,U+2247,U+2249,U+224B,U+224D,U+2254,U+2257,U+225F-2265,U+226A-2273,U+227A-227C,U+2282-2289,U+228E-2299,U+229B-22A5,U+22B4,U+22B8,U+22BB-22BD,U+22C2-22C4,U+22C6,U+22C8-22CA,U+22CE,U+22D0,U+22E2,U+22EE-22F1,U+2302-2305,U+2308-230B,U+2318,U+231C-231F,U+2324-2326,U+2328,U+232B,U+2336-237A,U+2389-238B,U+2395,U+239B-23AD,U+23CE,U+23FB-23FE,U+2400-2421,U+2423-2424,U+2500-25A1,U+25AA-25AB,U+25B2-25CC,U+25CE-25CF,U+25D4-25D5,U+25E6-25EB,U+25EF,U+25F6,U+266D,U+266F,U+2687,U+26A0,U+2715,U+2717,U+2736,U+276E-2771,U+2794,U+279C-279E,U+27C5-27C6,U+27DC,U+27E6-27EB,U+27F5-27F7,U+2916,U+294A,U+2987-2988,U+2A00,U+2A05-2A06,U+2B58,U+E0A0-E0A2,U+E0B0-E0B3,U+FE62,U+FF5B,U+FF5D,U+16910,U+1D538-1D539,U+1D53B-1D53E,U+1D540-1D544,U+1D546,U+1D54A-1D550,U+1D552-1D56B";

    function OR(RR) {
      return RR.split(",").map((RR => {
        const [JR, GR = JR] = RR.slice(2).split("-");
        return [parseInt(JR, 16), parseInt(GR, 16)]
      }))
    }
    const xR = {
        latin: OR(bR),
        rest: OR(vR)
      },
      NR = new RegExp(`[${xR.rest.map((RR=>{let[JR,GR]=RR;return`\\u{${JR.toString(16)}}-\\u{${GR.toString(16)}}`})).join("")}]`, "u");

    function DR(RR) {
      return JR => {
        console.warn(`[bloxd-wasm-client] the text font's ${RR} file did not load`, JR)
      }
    }
    const HR = 397,
      oR = 1,
      cR = {
        translate: RR => [RR],
        keyBindingText: RR => RR,
        isFriend: () => !1,
        hiddenNames: {},
        loadsFontRest: !1
      };
    let PR = null,
      IR = 0,
      mR = "none";

    function zR() {
      return IR
    }
    const SR = new Set;

    function jR(RR) {
      return SR.add(RR), () => {
        SR.delete(RR)
      }
    }

    function dR() {
      IR++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? mR = "all" : "none" === mR && (mR = "notBoards");
      for (const RR of SR) RR()
    }(0, wR.m)((() => {
      dR(!1)
    })), (0, iR.t)((() => {
      (function() {
        const RR = BR;
        return BR = !1, RR
      })() && dR(!1)
    }));
    const ER = new class {
      constructor(RR) {
        this.loaded = RR, this.latin = null, this.rest = null, this.restWanted = !1
      }
      load() {
        if (null === this.latin) {
          this.latin = new FontFace(gR, `url(${(0,pR.f)()}) format("woff2")`, {
            unicodeRange: bR
          }).load().then((RR => {
            document.fonts.add(RR), this.loaded()
          }), DR("Latin"));
          const RR = new FontFace(gR, `url(${(0,pR.j)()}) format("woff2")`, {
            unicodeRange: vR,
            display: "swap"
          });
          document.fonts.add(RR), RR.loaded.then((() => {
            this.loaded()
          }), DR("rest")), this.rest = RR, this.restWanted && RR.load()
        }
        return this.latin
      }
      loadRest() {
        var RR;
        this.restWanted || (this.restWanted = !0, null === (RR = this.rest) || void 0 === RR || RR.load())
      }
      async untilLoadedFor(RR) {
        await this.load(), this.loadFor(RR), await document.fonts.load(`16px '${gR}'`, RR).catch((JR => {
          console.warn("[bloxd-wasm-client] the text font did not load for", RR, JR)
        }))
      }
      loadFor(RR) {
        !this.restWanted && NR.test(RR) && this.loadRest()
      }
    }(dR);

    function YR(RR) {
      Object.assign(cR, RR), cR.loadsFontRest && ER.loadRest(), dR(!1)
    }

    function kR(RR) {
      RR !== PR && (PR = RR, dR())
    }

    function QR(RR) {
      if ("none" === mR || null === RR) return;
      RR(HR, "all" === mR ? 0 : oR, new Uint8Array(0)) && (mR = "none")
    }
    const FR = new Map,
      TR = new Map;

    function sR(RR, JR, GR) {
      var yR;
      const tR = GR ? `${RR}#${GR.join(",")}` : RR,
        uR = FR.get(tR);
      if (uR) return uR.image;
      const ZR = {
        image: null !== (yR = TR.get(tR)) && void 0 !== yR ? yR : null
      };
      return FR.set(tR, ZR), JR().then((async RR => {
        if (null === RR) return null;
        const JR = new Image;
        JR.crossOrigin = "anonymous", JR.src = RR, await JR.decode();
        const yR = await createImageBitmap(JR);
        if (!GR) return yR;
        try {
          return function(RR, JR) {
            let [GR, yR, tR] = JR;
            const uR = (0, fR.e)(RR.width, RR.height),
              {
                canvas: ZR
              } = uR;
            return uR.drawImage(RR, 0, 0), uR.globalCompositeOperation = "multiply", uR.fillStyle = `rgb(${GR}, ${yR}, ${tR})`, uR.fillRect(0, 0, ZR.width, ZR.height), uR.globalCompositeOperation = "destination-in", uR.drawImage(RR, 0, 0), ZR
          }(yR, GR)
        } finally {
          yR.close()
        }
      })).then((RR => {
        FR.get(tR) === ZR && TR.delete(tR), RR !== ZR.image && (ZR.image = RR, dR(!1))
      }), (JR => {
        console.warn(`[bloxd-wasm-client] text icon ${RR} did not load`, JR), FR.get(tR) === ZR && (FR.delete(tR), TR.delete(tR), null !== ZR.image && dR(!1))
      })), ZR.image
    }(0, rR.e)((() => {
      TR.clear();
      for (const [RR, {
          image: JR
        }] of FR) null !== JR && TR.set(RR, JR);
      FR.clear(), dR(!1)
    }));
    const hR = new Set(yR.c),
      RJ = new Set(["CubeBlock", "SlabBlock", "StairsBlock"]);

    function JJ() {
      (0, eR.e)().catch((() => {}))
    }

    function GJ(RR) {
      return hR.has(RR) ? sR(`icon:${RR}`, (async () => {
        var JR, GR;
        return null !== (JR = null === (GR = (0, rR.g)()) || void 0 === GR ? void 0 : GR.textureUrl(RR)) && void 0 !== JR ? JR : (await (0, eR.d)()).ingameIconUrl(RR)
      })) : null
    }
    let yJ = "unasked";
    const tJ = {
      get canSeeRealPlayerNames() {
        return VR.featureFlags.canSeeRealPlayerNames
      },
      get canSeePlayerWrittenText() {
        return VR.featureFlags.canSeePlayerWrittenText
      },
      get localPlayerDbId() {
        return PR
      },
      shownPlayerName: RR => (0, KR.e)(RR, cR.hiddenNames),
      translate: (RR, JR) => {
        const GR = "object" === typeof JR && null !== JR ? JR : void 0;
        return cR.translate(RR, (0, KR.f)(GR, cR.hiddenNames))
      },
      keyBindingText: RR => cR.keyBindingText(RR),
      isFriend: RR => cR.isFriend(RR, cR.hiddenNames),
      iconImage: function(RR) {
        if (hR.has(RR)) return GJ(RR);
        if ("unasked" === yJ && (yJ = "loading", (0, qR.d)().then((() => {
            yJ = "in", dR(!1)
          }), (RR => {
            yJ = "failed", console.warn("[bloxd-wasm-client] the item sprite table did not load, so text item icons stay blank", RR)
          }))), "in" !== yJ) return null;
        const JR = (0, ZR.b)(RR),
          GR = void 0 === JR ? void 0 : (0, uR.itemTypeNameOf)(JR);
        if ("Gun" === GR) return null;
        const yR = (0, qR.c)(RR),
          iR = void 0 !== GR && RJ.has(GR);
        if (iR && void 0 === yR) return null;
        const fR = void 0 !== JR && "GrayscaleArmour" === (0, uR.itemTypeOf)(JR) || Object.hasOwn(tR.d, RR),
          VR = null !== yR && void 0 !== yR ? yR : RR;
        return sR(iR ? `block:${VR}` : `item:${VR}`, (async () => {
          var RR, JR;
          const GR = (0, rR.g)(),
            yR = await (0, eR.e)();
          return null !== (RR = null !== (JR = null === GR || void 0 === GR ? void 0 : GR.textureUrl(VR)) && void 0 !== JR ? JR : yR.itemSpriteUrl(VR)) && void 0 !== RR ? RR : iR ? null : yR.notFoundUrl()
        }), fR ? (0, tR.f)(RR) : void 0)
      },
      effectImage: GJ,
      rankIcon: function(RR) {
        const JR = MR.get(RR);
        if (JR) return JR;
        const GR = (0, iR.e)(RR, (0, iR.l)(RR));
        if (!GR) return (0, iR.h)("brands") && (0, iR.h)("solid") ? lR.has(RR) || (lR.add(RR), console.warn(`[bloxd-wasm-client] unknown rank icon "${RR}": not in the bundled Font Awesome subset, so its tag draws no icon`)) : BR = !0, null;
        const yR = XR(GR);
        return MR.set(RR, yR), yR
      },
      glyphsShown: RR => {
        ER.loadFor(RR)
      }
    }
  },
  37362: (RR, JR, GR) => {
    function yR() {
      return GR(37370)
    }

    function tR() {
      return GR(37379)
    }

    function uR(RR) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(RR)
    }
    GR.d(JR, {
      c: () => uR,
      f: () => yR,
      j: () => tR
    })
  },
  37370: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37379: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);