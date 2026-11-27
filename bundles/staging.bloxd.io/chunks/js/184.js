export const id = 184;
export const ids = [184];
export const modules = {
  10049: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => LW,
      e: () => wW,
      i: () => ZW,
      l: () => tW,
      p: () => cW,
      q: () => lW
    });
    var mW = OW(27),
      EW = OW(2111),
      NW = OW(1479),
      PW = OW(1459);
    const LW = WW => {
        var iW, OW;
        return (0, PW.k)() && null !== (iW = null === (OW = (0, NW.h)()) || void 0 === OW ? void 0 : OW.getGlyphForNoaAction(WW)) && void 0 !== iW ? iW : null
      },
      cW = "controllerGlyph:",
      wW = WW => {
        var iW, OW;
        return null !== (iW = null === (OW = (0, NW.h)()) || void 0 === OW ? void 0 : OW.getPadGlyphIconName(WW)) && void 0 !== iW ? iW : `${cW}xbox/${WW}`
      },
      tW = WW => WW.startsWith(cW),
      ZW = WW => {
        var iW, OW;
        return tW(WW) && null !== (iW = null === (OW = (0, NW.h)()) || void 0 === OW ? void 0 : OW.getPadGlyphIconUrl(WW)) && void 0 !== iW ? iW : null
      },
      xW = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", PW.d, EW.e, EW.b],
      lW = WW => {
        const iW = xW.map((iW => mW.l.subscribe(iW, WW)));
        return () => {
          for (const WW of iW) mW.l.unsubscribe(WW)
        }
      }
  },
  42656: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      openCharacterPreview: () => si
    });
    var mW = OW(39274),
      EW = OW(2365),
      NW = OW(625),
      PW = OW(38320),
      LW = OW(3090),
      cW = OW(38307),
      wW = OW(41359),
      tW = OW(41604),
      ZW = OW(42569),
      xW = OW(38235),
      lW = OW(41760),
      AW = OW(38369),
      bW = OW(41782),
      jW = OW(42616),
      UW = OW(38229),
      kW = OW(42593),
      sW = OW(42588),
      MW = OW(38431),
      KW = OW(39965),
      SW = OW(40337),
      YW = OW(40384),
      yW = OW(40380),
      TW = OW(40345),
      JW = OW(4337),
      hW = OW(38702);
    const HW = [0, 1, 0];
    class nW {
      constructor(WW) {
        this.node = WW, this.nodesByName = new Map, this.rests = new Map, this.clips = new Map;
        for (const iW of WW.getChildTransformNodes()) this.nodesByName.set(iW.name, iW), this.rests.set(iW.name, (0, hW.i)(iW))
      }
      play(WW, iW) {
        const OW = this.clip(WW);
        OW && (OW.pose.pose(iW), (0, hW.s)(OW.pose, OW.nodes))
      }
      clip(WW) {
        let iW = this.clips.get(WW);
        if (void 0 === iW) {
          const OW = (0, hW.m)(WW, (WW => {
            var iW;
            return null !== (iW = this.rests.get(WW)) && void 0 !== iW ? iW : null
          }));
          iW = OW && {
            pose: OW,
            nodes: OW.boneNames.map((WW => this.nodesByName.get(WW)))
          }, this.clips.set(WW, iW)
        }
        return iW
      }
    }

    function uW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return new xW.fA(WW[0] * iW, WW[1] * iW, WW[2] * iW)
    }
    class oW {
      constructor(WW, iW) {
        this.rb = WW, this.scale = iW, this.petNodes = new Map, this.particleTextures = new Map, this.petName = "pet_none", this.shownPet = null, this.petIsolated = !1, this.auraSeq = 0, this.aura = null, this.auraName = "aura_none", this.auraTuning = null, this.auraDrawn = Promise.resolve()
      }
      async setPet(WW) {
        var iW;
        this.petName = WW, null === (iW = this.shownPet) || void 0 === iW || iW.node.WK(!1), this.shownPet = null;
        const OW = (0, SW.h)(WW);
        if (!OW) return;
        let mW;
        try {
          mW = await this.petNode(OW.model)
        } catch {
          return
        }
        this.petName === WW && (mW.node.WK(!0), this.shownPet = mW)
      }
      setAura(WW) {
        const iW = (0, SW.g)(WW);
        return WW === this.auraName && iW === this.auraTuning || (this.auraName = WW, this.auraTuning = iW, this.auraDrawn = this.showAura(WW, iW)), this.auraDrawn
      }
      async showAura(WW, iW) {
        var OW, mW, EW;
        const NW = ++this.auraSeq;
        if (null === (OW = this.aura) || void 0 === OW || OW.dispose(!1), this.aura = null, !iW) return;
        const PW = await (0, KW.j)().catch((iW => (console.error(`Couldn't load the preview's particles for ${WW}:`, iW), null)));
        if (!PW || NW !== this.auraSeq) return;
        const {
          scale: LW
        } = this, {
          opts: cW,
          half: wW
        } = (0, yW.d)(iW), tW = PW(this.rb, `aura|${WW}`, cW.aZ), ZW = this.particleTexture(iW.particles.texture);
        tW.texture = ZW, (0, TW.c)(tW, {
          ...cW,
          minSize: cW.minSize * LW,
          maxSize: cW.maxSize * LW,
          minEmitPower: cW.minEmitPower * LW,
          maxEmitPower: cW.maxEmitPower * LW,
          gravity: cW.gravity && [cW.gravity[0] * LW, cW.gravity[1] * LW, cW.gravity[2] * LW]
        }), tW.emitRate = cW.emitRate, tW.createBoxEmitter(uW(null !== (mW = cW.dir1) && void 0 !== mW ? mW : HW), uW(null !== (EW = cW.dir2) && void 0 !== EW ? EW : HW), uW(wW, -LW), uW(wW, LW));
        const [lW, AW, bW] = iW.offset;
        tW.emitter = new xW.fA(lW * LW, (AW - 1) * LW, bW * LW), tW.start(), this.aura = tW;
        const jW = ZW.mirror;
        jW.isReady() || jW.loadingError || await new Promise((iW => {
          jW.onLoadObservable.addOnce((() => {
            iW()
          })), jW.getInternalTexture().onErrorObservable.addOnce((OW => {
            let {
              message: mW
            } = OW;
            console.error(`Preview aura ${WW}'s texture failed to load: ${mW}`), iW()
          }))
        }))
      }
      writePose(WW) {
        var iW;
        if (!this.shownPet) return;
        const OW = (0, SW.h)(this.petName),
          {
            scale: mW
          } = this;
        if (this.petIsolated) return void this.writeIsolatedPose(this.shownPet, OW);
        const [EW, NW, PW] = OW.followOffset, {
          node: LW
        } = this.shownPet;
        LW.position.set(EW * mW, (NW + (0, YW.f)(OW, WW) - 1) * mW, PW * mW), LW.rotation.y = OW.yawOffset, LW.YZ.Z5(OW.scale * mW), null !== (iW = OW.clips) && void 0 !== iW && iW.fly && this.shownPet.play(OW.clips.fly, WW)
      }
      isolatePet() {
        this.petIsolated = !0
      }
      writeIsolatedPose(WW, iW) {
        var OW, mW, EW;
        const {
          node: NW
        } = WW;
        NW.position.Z5(0), NW.rotation.y = iW.yawOffset, NW.YZ.Z5(1);
        const PW = null !== (OW = null === (mW = iW.clips) || void 0 === mW ? void 0 : mW.perch) && void 0 !== OW ? OW : null === (EW = iW.clips) || void 0 === EW ? void 0 : EW.fly;
        PW && WW.play(PW, 0);
        const {
          min: LW,
          max: cW
        } = NW.getHierarchyBoundingVectors(!0), wW = 2 * this.scale / (cW.y - LW.y);
        NW.YZ.Z5(wW), NW.position.set(-(LW.x + cW.x) / 2 * wW, -(LW.y + cW.y) / 2 * wW, -(LW.z + cW.z) / 2 * wW)
      }
      petNode(WW) {
        let iW = this.petNodes.get(WW);
        return iW || (iW = (0, kW.g)(this.rb, WW, void 0, {
          keepTransforms: !0,
          backFaceCulling: !0
        }).then((iW => {
          const OW = new sW.e(`pet|${WW}`, this.rb);
          OW.WK(!1);
          for (const WW of iW.rootNodes) WW.parent = OW, (0, kW.l)(WW, !0);
          return new nW(OW)
        }), (iW => {
          throw this.petNodes.delete(WW), console.error(`Failed to load preview pet ${WW}:`, iW), iW
        })), this.petNodes.set(WW, iW)), iW
      }
      particleTexture(WW) {
        let iW = this.particleTextures.get(WW);
        return iW || (iW = (0, MW.t)(this.rb, (0, JW.f)(WW)), this.particleTextures.set(WW, iW)), iW
      }
    }
    var dW = OW(41919),
      eW = OW(41927),
      vW = OW(41940);

    function gW(WW) {
      const iW = [],
        OW = [],
        mW = [],
        EW = [],
        NW = void 0 !== WW.width ? WW.width : void 0 !== WW.size ? WW.size : 1,
        PW = void 0 !== WW.height ? WW.height : void 0 !== WW.size ? WW.size : 1,
        LW = 0 === WW.sideOrientation ? 0 : WW.sideOrientation || eW.c.DEFAULTSIDE,
        cW = NW / 2,
        wW = PW / 2;
      OW.push(-cW, -wW, 0), mW.push(0, 0, -1), EW.push(0, vW.b ? 1 : 0), OW.push(cW, -wW, 0), mW.push(0, 0, -1), EW.push(1, vW.b ? 1 : 0), OW.push(cW, wW, 0), mW.push(0, 0, -1), EW.push(1, vW.b ? 0 : 1), OW.push(-cW, wW, 0), mW.push(0, 0, -1), EW.push(0, vW.b ? 0 : 1), iW.push(0), iW.push(1), iW.push(2), iW.push(0), iW.push(2), iW.push(3), eW.c._ComputeSides(LW, OW, iW, mW, EW, WW.frontUVs, WW.backUVs);
      const tW = new eW.c;
      return tW.indices = iW, tW.positions = OW, tW.normals = mW, tW.uvs = EW, tW
    }

    function DW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const mW = new dW.e(WW, OW);
      iW.sideOrientation = dW.e._GetDefaultSideOrientation(iW.sideOrientation), mW._originalBuilderSideOrientation = iW.sideOrientation;
      return gW(iW).applyToMesh(mW, iW.updatable), iW.sourcePlane && (mW.translate(iW.sourcePlane.normal, -iW.sourcePlane.d), mW.setDirection(iW.sourcePlane.normal.scale(-1))), mW
    }
    let VW = !1;
    VW || (VW = !0, eW.c.CreatePlane = gW, dW.e.CreatePlane = (WW, iW, OW, mW, EW) => DW(WW, {
      size: iW,
      width: iW,
      height: iW,
      sideOrientation: EW,
      updatable: mW
    }, OW));
    var pW = OW(42652),
      fW = OW(42641),
      CW = OW(37343),
      XW = OW(37360),
      BW = OW(37432),
      qW = OW(40070),
      RW = OW(40085),
      GW = OW(40073);
    class IW {
      constructor(WW, iW) {
        this.scale = iW, this.plane = void 0, this.canvas = document.createElement("canvas"), this.texture = void 0, this.widthPx = 0, this.heightPx = 0, this.shown = null, this.stopRedrawing = null, this.texture = new pW.d("previewNametag", this.canvas, WW, !1, jW.d.BILINEAR_SAMPLINGMODE), this.texture.hasAlpha = !0;
        const OW = new bW.StandardMaterial("previewNametag", WW);
        OW.diffuseTexture = this.texture, OW.useAlphaFromDiffuseTexture = !0, OW.emissiveColor = AW.Color3.White(), OW.disableLighting = !0, this.plane = DW("previewNametag", {
          size: 1
        }, WW), this.plane.material = OW, this.plane.billboardMode = fW.e.BILLBOARDMODE_ALL, this.plane.renderingGroupId = GW.c, this.plane.Fb = !1, this.plane.WK(!1)
      }
      set(WW) {
        var iW;
        if (WW !== this.shown) {
          if (this.shown = WW, null === (iW = this.stopRedrawing) || void 0 === iW || iW.call(this), this.stopRedrawing = null, !WW) return this.heightPx = 0, void this.plane.WK(!1);
          BW.k.untilLoadedFor(WW.name).then((() => {
            this.shown === WW && (this.draw(WW), this.stopRedrawing = (0, BW.i)((() => {
              this.draw(WW)
            })))
          }))
        }
      }
      update(WW) {
        if (0 === this.heightPx) return;
        const iW = -this.scale,
          OW = RW.b * this.scale + iW,
          mW = WW.position,
          EW = Math.hypot(mW.x, mW.y - OW, mW.z) / this.scale,
          NW = 2 * EW * Math.tan(WW.fov / 2) * WW.VA().getAspectRatio(WW),
          PW = Math.min((0, RW.d)(EW), .9 * NW / (qW.c.TEXT_PLANE_RATIO * this.widthPx)),
          LW = PW * qW.c.TEXT_PLANE_RATIO * this.heightPx;
        this.plane.position.set(0, iW + (RW.b + .5 * LW - .05) * this.scale, 0);
        const cW = PW * qW.c.TEXT_PLANE_RATIO * this.scale;
        this.plane.YZ.set(cW * this.widthPx, cW * this.heightPx, 1)
      }
      draw(WW) {
        const iW = (0, CW.c)(this.canvas),
          OW = (0, XW.e)({
            name: WW.name,
            ranks: WW.ranks,
            colour: WW.nameColour,
            mesh: !0
          }, iW, BW.p);
        if (null === OW) return this.heightPx = 0, void this.plane.WK(!1);
        this.texture.scaleTo(Math.ceil(2 * OW.width), Math.ceil(2 * OW.height)), iW.scale(2, 2), OW.draw(iW), this.texture.update(), this.widthPx = OW.width, this.heightPx = OW.height, this.plane.WK(!0)
      }
    }
    var aW = OW(38328),
      rW = (OW(42599), OW(41997), OW(42601), OW(35270)),
      zW = OW(37327),
      FW = OW(42659);
    let QW, Wi, ii, Oi, mi, Ei, Ni, Pi, Li, ci, wi, ti;
    const Zi = document.createElement("canvas");
    async function xi() {
      await new Promise((WW => {
        setTimeout((() => {
          WW()
        }), 100)
      }))
    }
    Zi.classList.add("CharCustomisationPreviewCanvas");
    const li = {};

    function Ai(WW, iW) {
      if (!Oi) return;
      const PW = (0, EW.h)();
      if (PW.gJ(!1), mW.d.Player.meshApi.updatePlayerCosmetic(PW.Dv, Ni, WW, iW, !0), "cape" === WW)
        if (iW === NW.h) mi.WK(!1);
        else {
          mi.WK(!0);
          mi.material.diffuseTexture = new jW.d(OW(40014)(`./cape_${iW}.png`), mi.bD(), {
            invertY: !1,
            samplingMode: jW.d.NEAREST_NEAREST_MIPLINEAR
          })
        }
      "pet" === WW ? li.pet = ci.setPet(iW) : "aura" === WW ? li.aura = ci.setAura(iW) : li[WW] = Li.update(WW, iW)
    }

    function bi(WW, iW) {
      const [OW, mW] = (0, zW.b)(WW, iW, window.devicePixelRatio);
      QW.setSize(Math.max(OW, Math.floor(WW)), Math.max(mW, Math.floor(iW)))
    }
    let ji = 0;
    class Ui {
      constructor(WW, iW) {
        var OW;
        this.framing = iW, this.ready = ti, this.dev = {
          canvas: () => Zi,
          captureFrame: WW => (0, FW.c)((() => this.closed ? null : Zi), (WW => {
            const iW = ii.onAfterRenderObservable.addOnce(WW);
            return () => {
              ii.onAfterRenderObservable.remove(iW)
            }
          }), WW),
          isolateHead(WW) {
            const iW = Ei.getNodeNames(Ni);
            for (let OW = 0; OW < iW.length; OW++) "HeadMesh" !== iW[OW] && "__root__" !== iW[OW] && "TorsoNode" !== iW[OW] && Ei.setNodeEnabled(Ni, OW, !1);
            if (WW) {
              const WW = Ei.getNamedNode(Ni, "HeadMesh");
              Ei.setNodeDisableColorWrite(Ni, WW, !0, (WW => {
                const iW = new bW.StandardMaterial(`${WW.name}_depthOnly`, WW.bD());
                return iW.disableColorWrite = !0, iW
              }))
            }
            Ei.setPosition(Ni, 0, -12, 0), wi.set(null), Ai("pet", "pet_none"), Ai("aura", "aura_none")
          },
          isolatePet() {
            const WW = Ei.getNodeNames(Ni).length;
            for (let iW = 0; iW < WW; iW++) Ei.setNodeEnabled(Ni, iW, !1);
            mi.WK(!1), Ai("aura", "aura_none"), wi.set(null), ci.isolatePet()
          }
        }, this.closed = !1, this.resetCamera(), null === (OW = wi) || void 0 === OW || OW.set(null);
        const mW = WW.getBoundingClientRect();
        bi(mW.width, mW.height), ji++, QW.stopRenderLoop(), QW.runRenderLoop((() => {
          var WW, iW, OW, mW;
          null === (WW = Pi) || void 0 === WW || WW.render(QW.getDeltaTime());
          const EW = performance.now() / 1e3;
          null === (iW = Li) || void 0 === iW || iW.writePoses(EW), null === (OW = ci) || void 0 === OW || OW.writePose(EW), null === (mW = wi) || void 0 === mW || mW.update(Wi), ii.render()
        }))
      }
      isReady() {
        return !!Oi
      }
      setCosmetic(WW, iW) {
        Ai(WW, iW)
      }
      setNametag(WW) {
        var iW;
        null === (iW = wi) || void 0 === iW || iW.set(WW)
      }
      playEmote(WW) {
        if (!Pi) return;
        if (!WW) return void Pi.stopAnimation(cW.d.Emote);
        const iW = (0, PW.h)((0, LW.j)(WW).animation);
        Pi.startAnimation(iW, cW.d.Emote, 0, LW.d)
      }
      async untilDrawn(WW) {
        if (await xi(), "cape" === WW && mi) {
          const WW = mi.material,
            iW = null === WW || void 0 === WW ? void 0 : WW.diffuseTexture;
          iW && !iW.isReady() && (await new Promise((WW => {
            iW.onLoadObservable.addOnce((() => {
              WW()
            }))
          })), await xi())
        }
        li[WW] && (await li[WW], await xi()), await ii.whenReadyAsync(), await new Promise((WW => {
          ii.onAfterRenderObservable.addOnce((() => {
            WW()
          }))
        }))
      }
      setOrbit(WW) {
        ki(WW)
      }
      resetCamera() {
        Wi.inertialAlphaOffset = 0, Wi.inertialBetaOffset = 0, Wi.inertialRadiusOffset = 0, ki(rW.d[this.framing])
      }
      resize(WW, iW) {
        bi(WW, iW)
      }
      close() {
        var WW;
        this.closed || (this.closed = !0, ji--, 0 === ji && (QW.stopRenderLoop(), null === (WW = wi) || void 0 === WW || WW.set(null)))
      }
    }

    function ki(WW) {
      let {
        yaw: iW,
        pitch: OW,
        radius: mW,
        target: EW
      } = WW;
      Wi.alpha = iW, Wi.beta = OW, mW && (Wi.radius = mW), EW && Wi.target.set(EW[0], EW[1], EW[2])
    }

    function si(WW, iW) {
      return WW.appendChild(Zi), QW || function() {
        QW = new wW.c(Zi, !0, {
          preserveDrawingBuffer: !0
        });
        const WW = (0, EW.h)();
        QW.nmW = WW.TZ.engine.nmW, ii = new tW.c(QW), ii.clearColor = new AW.c(0, 0, 0, 0), ii.ambientColor = new AW.Color3(1, 1, 1), Wi = new ZW.b("NU", 0, 0, 1, xW.fA.Zero(), ii), Wi.attachControl(Zi, !0), Wi.panningSensibility = 0, ti = (0, mW.v)("Player", ii, !0).then((iW => {
          Oi = iW.meshApi, mi = iW.capeMesh, Ei = WW.TZ.nD;
          const OW = 8.33;
          Ni = (0, mW.l)("Player", OW, !0, !0), Ei.setPosition(Ni, 0, -8.33, 0);
          const EW = Ei.getNamedNode(Ni, "BodyMesh");
          Ei.attachTransformNode(mi, Ni, EW), Ei.set(Ni, "aOpacity", 1), Ei.YV(Ni, "aOpacity", 1), Li = new kW.c(ii, Ei, Ni), ci = new oW(ii, OW), wi = new IW(ii, OW), Pi = new UW.AnimatorState, Pi.Hx = WW, Pi.thinInstMgr = Ei, Pi.uD = Ni, Pi.OmW = Ei.AmW(Ni, 0), Pi.modelLifeformType = "Player", Pi.nodeNameAliases = (0, aW.d)("Player").nodeNameAliases;
          const NW = mi.KV().boundingBox;
          mi.position.y = ((24 - NW.maximum.y + NW.minimum.y) / 2 - 1 / 32) / OW, mi.position.z = -1 / OW, mi.rotationQuaternion = null;
          const PW = Math.PI / 18,
            LW = NW.maximum.y / OW;
          mi.rotation.x = PW;
          const cW = Math.cos(PW),
            wW = Math.sin(PW);
          mi.position.y += LW * (1 - cW) + 0 * wW, mi.position.z -= LW * wW + 0 * (1 - cW);
          const tW = new bW.StandardMaterial("capeMaterial", mi.bD());
          mi.material = tW;
          const ZW = new AW.Color3(1, 1, 1);
          tW.diffuseColor = new AW.Color3, tW.specularColor = new AW.Color3, tW.emissiveColor = new AW.Color3, tW.ambientColor = new AW.Color3, ZW.scaleToRef(.43, tW.diffuseColor), ZW.scaleToRef(1.75, tW.ambientColor), tW.freeze();
          const jW = new lW.b("light", new xW.fA(-.1, 1, -.3), ii);
          jW.diffuse = new AW.Color3(1, 1, 1), jW.specular = new AW.Color3(1, 1, 1), jW.groundColor = new AW.Color3(.5, .5, .5)
        }))
      }(), new Ui(WW, iW)
    }
  },
  37444: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW,
      e: () => PW
    });
    var mW = OW(4459);
    let EW = null,
      NW = null;

    function PW() {
      return NW ??= OW.e(241).then((() => OW(37314))).then((WW => {
        let {
          ITEM_SPRITES: iW,
          ITEM_SPRITES_WITHOUT_FILE: OW,
          ITEM_FILES_WITHOUT_SPRITE: NW
        } = WW;
        EW = function(WW, iW, OW) {
          const EW = new Set,
            NW = (0, mW.w)(iW);
          let PW = 0;
          for (const [mW, LW] of WW.entries()) mW === NW[PW] ? PW++ : EW.add(LW);
          if ("" !== OW)
            for (const LW of OW.split(mW.s)) EW.add(LW);
          return EW
        }(iW.split(mW.s), OW, NW)
      }), (WW => {
        throw NW = null, WW
      })), NW
    }

    function LW(WW) {
      var iW, OW;
      return null !== (iW = null === (OW = EW) || void 0 === OW ? void 0 : OW.has(WW)) && void 0 !== iW && iW
    }
  },
  35167: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW
    });
    var mW = OW(1303);

    function EW() {
      var WW, iW;
      return null !== (WW = null === (iW = screen.orientation) || void 0 === iW ? void 0 : iW.type) && void 0 !== WW ? WW : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const NW = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && EW() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = EW(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, mW.ub)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const WW of this.resizers) WW()
          }
        }), 1e3)
      }
      heldSizer(WW) {
        let iW = !1;
        return () => {
          if (iW && this.isHeld()) return null;
          const OW = WW();
          return iW ||= null !== OW, OW
        }
      }
      onRelease(WW) {
        return this.resizers.add(WW), () => {
          this.resizers.delete(WW)
        }
      }
    }
  },
  37343: (WW, iW, OW) => {
    function mW(WW, iW, OW) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(WW, iW).getContext("2d", OW);
      const mW = document.createElement("canvas");
      return mW.width = WW, mW.height = iW, mW.getContext("2d", OW)
    }

    function EW(WW, iW) {
      return WW.getContext("2d", iW)
    }
    OW.d(iW, {
      c: () => EW,
      g: () => mW
    })
  },
  42659: (WW, iW, OW) => {
    function mW(WW, iW, OW) {
      return new Promise((mW => {
        const EW = setTimeout((() => {
            NW(), mW(null)
          }), OW),
          NW = iW((() => {
            clearTimeout(EW);
            const iW = WW();
            mW(null === iW ? null : function(WW) {
              if (0 === WW.width || 0 === WW.height) return null;
              const iW = document.createElement("canvas");
              iW.width = WW.width, iW.height = WW.height;
              const OW = iW.getContext("2d");
              return OW ? (OW.drawImage(WW, 0, 0), iW) : null
            }(iW))
          }))
      }))
    }
    OW.d(iW, {
      c: () => mW
    })
  },
  37327: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW
    });
    const mW = 4e5,
      EW = 2;

    function NW(WW, iW, OW) {
      let [NW, PW] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [WW, iW], LW = Math.min(Number.isFinite(OW) && OW > 0 ? OW : 1, EW);
      const cW = Math.max(0, NW, WW) * Math.max(0, PW, iW) * LW * LW;
      return cW > mW && (LW *= Math.sqrt(mW / cW)), [Math.max(1, Math.floor(Math.max(0, WW) * LW)), Math.max(1, Math.floor(Math.max(0, iW) * LW))]
    }
  },
  37369: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => SW,
      h: () => hW,
      k: () => HW,
      o: () => nW
    });
    var mW = OW(37371),
      EW = OW(7912),
      NW = OW(7998),
      PW = OW(37373),
      LW = OW(37375),
      cW = OW(37380),
      wW = OW(8308),
      tW = OW(8437),
      ZW = OW(37383),
      xW = OW(8647),
      lW = OW(7787),
      AW = OW(8930),
      bW = OW(37389),
      jW = OW(37398),
      UW = OW(8956),
      kW = OW(37403),
      sW = OW(37410),
      MW = OW(344);
    const KW = {
        redTeam: NW.d,
        blueTeam: jW.f,
        greenTeam: sW.g,
        yellowTeam: UW.f,
        cyanTeam: cW.e,
        whiteTeam: lW.faPlus,
        pinkTeam: tW.h,
        grayTeam: ZW.f,
        blackTeam: bW.g,
        orangeTeam: kW.g,
        lilacTeam: PW.f,
        purpleTeam: xW.f,
        magentaTeam: LW.g,
        brownTeam: mW.i,
        limeTeam: EW.faBolt,
        lightGrayTeam: wW.d,
        lightBlueTeam: AW.f
      },
      SW = Object.fromEntries(Object.values(KW).map((WW => [YW(WW), WW])));

    function YW(WW) {
      return `team-${WW.iconName}`
    }
    const yW = new Map;
    for (const [uW, oW] of Object.entries(KW)) {
      const WW = YW(oW),
        iW = MW.M[uW];
      iW && yW.set(iW.toLowerCase(), {
        icon: WW,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "white",
          iconShadowRGB: "black"
        },
        visible: !0
      })
    }
    let TW = !1;
    const JW = new Set;

    function hW(WW) {
      if (WW !== TW) {
        TW = WW;
        for (const WW of JW) WW()
      }
    }

    function HW(WW) {
      var iW;
      return "string" === typeof WW && TW && null !== (iW = yW.get(WW.toLowerCase())) && void 0 !== iW ? iW : null
    }

    function nW(WW) {
      return JW.add(WW), () => {
        JW.delete(WW)
      }
    }
  },
  37436: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => tW,
      d: () => cW,
      f: () => LW,
      i: () => wW
    });
    var mW = OW(2047);
    let EW = null,
      NW = 0;
    const PW = new Set;

    function LW() {
      return EW
    }

    function cW() {
      return NW
    }

    function wW(WW) {
      EW = WW, NW++, (0, mW.b)();
      for (const iW of PW) iW()
    }

    function tW(WW) {
      PW.add(WW)
    }
  },
  37441: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW,
      d: () => LW
    });
    var mW = OW(37444);
    let EW = null,
      NW = null;

    function PW() {
      return EW ??= OW.e(74).then((() => OW(42663))).catch((WW => {
        throw EW = null, WW
      })), EW
    }

    function LW() {
      return NW ??= Promise.all([PW(), (0, mW.e)()]).then((WW => {
        let [iW] = WW;
        return iW
      }), (WW => {
        throw NW = null, WW
      })), NW
    }
  },
  37360: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => SW
    });
    var mW = OW(5185),
      EW = OW(1259),
      NW = OW(625),
      PW = OW(2138),
      LW = OW(37369),
      cW = OW(37353);
    const wW = 10,
      tW = 3,
      ZW = 3,
      xW = [{
        healthFraction: .25,
        colour: "#ff0000"
      }, {
        healthFraction: .5,
        colour: "#ffaa00"
      }, {
        healthFraction: 1,
        colour: "#00ff00"
      }],
      lW = 64,
      AW = 69,
      bW = {
        icon: PW.e,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "#f38ab6",
          iconShadowRGB: "black"
        },
        visible: !0
      };

    function jW(WW) {
      return "object" !== typeof WW || null === WW || Array.isArray(WW) ? void 0 : WW
    }
    const UW = new Set(mW.c);

    function kW(WW, iW) {
      return "string" === typeof WW ? (0, cW.r)(WW, iW) : iW
    }

    function sW(WW) {
      return kW(WW.width, tW)
    }

    function MW(WW, iW) {
      var OW;
      const mW = null !== (OW = WW.applyTo) && void 0 !== OW ? OW : "both";
      return "both" === mW || mW === iW
    }

    function KW(WW) {
      const iW = sW(WW);
      return "glow" === WW.style ? iW * ZW : Math.ceil(iW / 2) + 1
    }

    function SW(WW, iW, OW) {
      var mW, PW;
      const tW = null !== (mW = jW(WW.info)) && void 0 !== mW ? mW : {},
        SW = "string" === typeof WW.name ? WW.name : "",
        YW = tW.subtitle;
      if (Array.isArray(tW.content) && 0 === tW.content.length && !(Array.isArray(YW) && YW.length > 0)) return null;
      const yW = "number" === typeof WW.hideNameSeed ? WW.hideNameSeed : null,
        TW = "" === SW || !0 === WW.mesh ? SW : (0, EW.b)(SW, !OW.canSeeRealPlayerNames, yW);
      if (!TW && !tW.content) return null;
      const JW = "string" === typeof WW.colour ? WW.colour : "default",
        hW = Object.hasOwn(NW.C, JW) ? NW.C[JW] : void 0,
        HW = tW.content ? (0, cW.h)(tW.content, cW.c.DEFAULT_FONT_SIZE, OW, hW) : [{
          kind: "text",
          text: TW,
          size: cW.c.DEFAULT_FONT_SIZE,
          colour: hW
        }],
        nW = [],
        uW = "boolean" === typeof WW.player ? WW.player : Array.isArray(WW.ranks),
        oW = uW ? (0, LW.k)(tW.backgroundColor) : null;
      oW && nW.push({
        kind: "rank",
        rank: oW
      });
      for (const EW of Array.isArray(WW.ranks) ? WW.ranks : []) {
        const WW = (0, cW.s)(EW);
        null !== WW && void 0 !== WW && WW.nameTag && WW.visible && nW.push({
          kind: "rank",
          rank: WW
        })
      }
      nW.push(...HW), uW && "" !== SW && OW.isFriend(SW) && nW.push({
        kind: "rank",
        rank: bW
      }), "number" === typeof WW.TP && nW.push({
        kind: "text",
        text: ` ${WW.TP}m`,
        size: cW.c.DEFAULT_FONT_SIZE,
        colour: "#cef3ff"
      });
      const dW = YW ? (0, cW.h)(YW, cW.c.DEFAULT_SUBTITLE_FONT_SIZE, OW) : null,
        eW = "string" === typeof tW.backgroundColor ? tW.backgroundColor : "#22283b",
        vW = "string" === typeof tW.subtitleBackgroundColor ? tW.subtitleBackgroundColor : "#1a1e2d",
        gW = jW(tW.healthbar),
        DW = jW(tW.border),
        VW = Array.isArray(WW.effects) ? WW.effects.filter((WW => "string" === typeof WW && UW.has(WW))) : [],
        pW = "number" === typeof WW.health ? Math.max(0, Math.min(1, WW.health)) : null,
        fW = (0, cW.d)(nW, iW, OW),
        CW = (0, cW.d)(null !== dW && void 0 !== dW ? dW : [], iW, OW),
        XW = {
          width: cW.c.EFFECT_ICON_SIZE * VW.length,
          height: VW.length > 0 ? cW.c.EFFECT_ICON_SIZE : 0
        },
        BW = DW && MW(DW, "nametag") ? KW(DW) : 0,
        qW = kW(null === gW || void 0 === gW ? void 0 : gW.height, wW),
        RW = DW && MW(DW, "healthbar") ? KW(DW) : 0,
        GW = "never" === (null !== (PW = null === gW || void 0 === gW ? void 0 : gW.display) && void 0 !== PW ? PW : "onDamage") ? 0 : qW + RW,
        IW = Math.max(XW.height, BW),
        aW = Math.max(cW.c.VERTICAL_PADDING, GW, BW);
      let rW = Math.max(fW.width, CW.width, XW.width);
      if (DW) {
        const WW = KW(DW) + cW.c.HORIZONTAL_PADDING / 2;
        rW = Math.max(rW, Math.max(fW.width, CW.width) + cW.c.HORIZONTAL_PADDING + 2 * WW)
      }
      const zW = fW.height + CW.height + IW + aW,
        FW = fW.width + cW.c.HORIZONTAL_PADDING,
        QW = CW.width + cW.c.HORIZONTAL_PADDING,
        Wi = Math.max(FW, QW),
        ii = (rW - Wi) / 2,
        Oi = Math.max(XW.height, BW);
      return {
        width: rW,
        height: zW,
        draw: WW => {
          const iW = [];
          if (WW.fillStyle = eW, WW.fillRect(ii, Oi, Wi, fW.height), (0, cW.p)(nW, (rW - FW) / 2 + cW.c.HORIZONTAL_PADDING / 2, Oi, fW.height, WW, OW, iW), dW) {
            const mW = Oi + fW.height;
            WW.fillStyle = vW, WW.fillRect(ii, mW, Wi, CW.height), (0, cW.p)(dW, (rW - QW) / 2 + cW.c.HORIZONTAL_PADDING / 2, mW, CW.height, WW, OW, iW)
          }
          let mW = null;
          if (null !== pW) {
            const iW = zW - qW - RW;
            null !== gW && void 0 !== gW && gW.backgroundColour && (WW.fillStyle = gW.backgroundColour, WW.fillRect(ii, iW, Wi, qW)), WW.fillStyle = function(WW, iW) {
              const OW = null === WW || void 0 === WW ? void 0 : WW.foregroundColour;
              if ("string" === typeof OW) return OW;
              const mW = [...Array.isArray(OW) && OW.length > 0 ? OW : xW].sort(((WW, iW) => WW.healthFraction - iW.healthFraction)),
                EW = mW.find((WW => iW <= WW.healthFraction));
              return (null !== EW && void 0 !== EW ? EW : mW[mW.length - 1]).colour
            }(gW, pW), WW.fillRect(ii, iW, Math.round(Wi * pW), qW), mW = {
              x: ii,
              y: iW,
              width: Wi,
              height: qW
            }
          }
          if (DW) {
            const iW = [];
            MW(DW, "nametag") && iW.push({
              x: ii,
              y: Oi,
              width: Wi,
              height: fW.height + (dW ? CW.height : 0)
            }), mW && MW(DW, "healthbar") && iW.push(mW), iW.length > 0 && function(WW, iW, OW) {
              const mW = sW(iW),
                EW = mW / 2,
                NW = WW => WW.width > 0 && WW.height > 0,
                PW = OW.map((WW => ({
                  x: WW.x + EW,
                  y: WW.y + EW,
                  width: WW.width - mW,
                  height: WW.height - mW
                }))).filter(NW);
              if (0 === PW.length) return;
              const LW = iW => {
                const OW = iW.filter(NW);
                if (0 !== OW.length) {
                  WW.beginPath();
                  for (const iW of OW) WW.rect(iW.x, iW.y, iW.width, iW.height);
                  WW.stroke()
                }
              };
              if (WW.save(), WW.strokeStyle = iW.colour, WW.lineWidth = mW, WW.lineJoin = "round", "glow" === iW.style) WW.shadowColor = iW.colour, WW.shadowBlur = mW * ZW, LW(PW), LW(PW);
              else if ("double" === iW.style) {
                LW(PW);
                const WW = mW + 2;
                LW(PW.map((iW => ({
                  x: iW.x + WW,
                  y: iW.y + WW,
                  width: iW.width - 2 * WW,
                  height: iW.height - 2 * WW
                }))))
              } else LW(PW);
              WW.restore()
            }(WW, DW, iW)
          }(0, cW.k)(iW, WW);
          for (let EW = 0; EW < VW.length; EW++) {
            const iW = OW.effectImage(VW[EW]);
            iW && (WW.imageSmoothingEnabled = !1, WW.drawImage(iW, 5 + AW * EW, 5, lW, lW))
          }
        }
      }
    }
  },
  37353: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW,
      d: () => kW,
      h: () => lW,
      k: () => KW,
      n: () => MW,
      p: () => sW,
      r: () => wW,
      s: () => ZW
    });
    var mW = OW(625),
      EW = OW(327);
    const NW = {
        DEFAULT_FONT_SIZE: 47,
        DEFAULT_SUBTITLE_FONT_SIZE: 30,
        HORIZONTAL_PADDING: 30,
        VERTICAL_PADDING: 22,
        TEXT_SHADOW_WIDTH: 2,
        LINE_SPACING: 8,
        EFFECT_ICON_SIZE: 70
      },
      PW = 41;

    function LW(WW) {
      return `bolder ${WW}px 'Jetbrains Mono'`
    }

    function cW(WW) {
      return "object" === typeof WW && null !== WW
    }

    function wW(WW, iW) {
      const OW = "number" === typeof WW ? WW : "string" === typeof WW ? Number(WW.replace("px", "")) : NaN;
      return Number.isFinite(OW) && OW > 0 ? OW : iW
    }

    function tW(WW) {
      return cW(WW) ? WW : void 0
    }

    function ZW(WW) {
      const iW = "number" === typeof WW ? mW.E[WW] : WW;
      return "string" === typeof iW && Object.hasOwn(mW.p, iW) ? mW.p[iW] : void 0
    }

    function xW(WW, iW) {
      return "string" === typeof WW ? WW : cW(WW) ? "string" === typeof WW.translationKey ? iW.translate(WW.translationKey, WW.params).map((WW => "string" === typeof WW ? WW : WW.icon)).join("") : "string" === typeof WW.entityName ? iW.shownPlayerName(WW.entityName) : "" : void 0 === WW || null === WW ? "" : String(WW)
    }

    function lW(WW, iW, OW, mW) {
      if (!Array.isArray(WW)) return [];
      const PW = [];
      for (const AW of WW) {
        var LW, ZW;
        if (cW(AW) && "chatTag" in AW) {
          PW.push({
            kind: "rank",
            rank: AW
          });
          continue
        }
        if (cW(AW) && "icon" in AW && !("mainRGB" in AW)) {
          var lW;
          PW.push({
            kind: "icon",
            icon: String(AW.icon),
            size: wW(null === (lW = tW(AW.style)) || void 0 === lW ? void 0 : lW.fontSize, NW.DEFAULT_FONT_SIZE)
          });
          continue
        }
        if (cW(AW) && (0, EW.Cb)(AW)) {
          PW.push({
            kind: "text",
            text: "",
            size: iW,
            colour: mW
          });
          continue
        }
        let WW, bW;
        cW(AW) && (0, EW.yb)(AW) ? (WW = OW.keyBindingText(String(AW.action)), bW = tW(AW.style)) : cW(AW) && "str" in AW ? (WW = AW.str, bW = tW(AW.style)) : WW = AW;
        const jW = wW(null === (LW = bW) || void 0 === LW ? void 0 : LW.fontSize, iW),
          UW = null !== (ZW = (0, EW.cc)(bW)) && void 0 !== ZW ? ZW : mW;
        if (cW(WW) && "string" === typeof WW.translationKey) {
          const iW = OW.translate(WW.translationKey, WW.params);
          if (iW.some((WW => "string" !== typeof WW))) {
            for (const WW of iW) PW.push("string" === typeof WW ? {
              kind: "text",
              text: WW,
              size: jW,
              colour: UW
            } : {
              kind: "icon",
              icon: WW.icon,
              size: jW
            });
            continue
          }
        }
        PW.push({
          kind: "text",
          text: xW(WW, OW),
          size: jW,
          colour: UW
        })
      }
      return PW
    }

    function AW(WW) {
      return void 0 !== WW && "rank" !== WW.kind
    }

    function bW(WW, iW) {
      const OW = AW(WW),
        mW = AW(iW);
      return void 0 === WW && !mW || !OW && void 0 === iW ? 0 : OW !== mW ? .5 * NW.HORIZONTAL_PADDING : 0
    }

    function jW(WW) {
      return "rank" === WW.kind ? NW.DEFAULT_FONT_SIZE : WW.size
    }

    function UW(WW, iW, OW) {
      return "icon" === WW.kind ? WW.size : "rank" === WW.kind ? function(WW, iW) {
        const OW = iW.rankIcon(WW.rank.icon);
        return OW ? PW * (OW.width / OW.height) : PW
      }(WW, OW) + NW.HORIZONTAL_PADDING : (OW.glyphsShown(WW.text), iW.font = LW(WW.size), iW.measureText(WW.text).width)
    }

    function kW(WW, iW, OW) {
      if (0 === WW.length) return {
        width: 0,
        height: 0,
        sizes: []
      };
      let mW = 0;
      for (const NW of WW) mW = Math.max(mW, jW(NW));
      const EW = [];
      let PW = bW(void 0, WW[0]);
      for (let NW = 0; NW < WW.length; NW++) {
        const mW = PW;
        PW += UW(WW[NW], iW, OW), PW += bW(WW[NW], WW[NW + 1]), EW.push({
          x: mW,
          width: PW - mW
        })
      }
      return {
        width: PW,
        height: mW + NW.VERTICAL_PADDING,
        sizes: EW
      }
    }

    function sW(WW, iW, OW, mW, EW, NW, PW) {
      iW += bW(void 0, WW[0]);
      for (let LW = 0; LW < WW.length; LW++) {
        const cW = MW(WW[LW], iW, OW, mW, EW, NW, PW);
        iW += 0 === cW ? 0 : cW + bW(WW[LW], WW[LW + 1])
      }
    }

    function MW(WW, iW, OW, mW, EW, cW, wW, tW) {
      var ZW;
      if ("icon" === WW.kind) {
        const mW = cW.iconImage(WW.icon);
        return mW && wW.push({
          image: mW,
          x: iW,
          y: OW + NW.VERTICAL_PADDING / 2,
          size: WW.size
        }), WW.size
      }
      if ("rank" === WW.kind) {
        const LW = null !== tW && void 0 !== tW ? tW : UW(WW, EW, cW);
        return function(WW, iW, OW, mW, EW, LW, cW) {
          var wW, tW;
          const {
            rank: ZW
          } = WW;
          LW.fillStyle = ZW.mainRGB, LW.fillRect(iW, OW, mW, EW);
          const xW = cW.rankIcon(ZW.icon);
          if (!xW) return;
          const lW = PW / xW.height,
            AW = iW + (mW - xW.width * lW) / 2,
            bW = OW + (EW - PW) / 2,
            jW = new Path2D(xW.path),
            UW = NW.TEXT_SHADOW_WIDTH,
            kW = (null === (wW = ZW.nameTag) || void 0 === wW ? void 0 : wW.iconShadowRGB) || "black";
          for (const NW of [-1, 1])
            for (const WW of [-1, 1]) SW(LW, jW, AW + UW * NW, bW + UW * WW, lW, kW);
          SW(LW, jW, AW, bW, lW, (null === (tW = ZW.nameTag) || void 0 === tW ? void 0 : tW.iconRGB) || "white")
        }(WW, iW, OW, LW, mW, EW, cW), LW
      }
      if (0 === WW.text.length) return 0;
      const xW = LW(WW.size);
      EW.font = xW;
      const lW = null !== tW && void 0 !== tW ? tW : EW.measureText(WW.text).width;
      return function(WW, iW, OW, mW, EW, PW) {
        const LW = NW.TEXT_SHADOW_WIDTH;
        PW.font = mW, PW.fillStyle = "black";
        for (const NW of [-1, 1])
          for (const mW of [-1, 1]) PW.fillText(WW, iW + LW * NW, OW + LW * mW);
        PW.fillStyle = EW, PW.fillText(WW, iW, OW)
      }(WW.text, iW, OW + mW - NW.VERTICAL_PADDING + 5, xW, null !== (ZW = WW.colour) && void 0 !== ZW ? ZW : "white", EW), lW
    }

    function KW(WW, iW) {
      for (const {
          image: OW,
          x: mW,
          y: EW,
          size: NW
        }
        of WW) iW.imageSmoothingEnabled = !1, iW.drawImage(OW, mW, EW, NW, NW)
    }

    function SW(WW, iW, OW, mW, EW, NW) {
      WW.save(), WW.translate(OW, mW), WW.scale(EW, EW), WW.fillStyle = NW, WW.fill(iW), WW.restore()
    }
  },
  37432: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => aW,
      h: () => ii,
      i: () => BW,
      k: () => RW,
      m: () => GW,
      o: () => IW,
      p: () => Ei,
      q: () => qW,
      t: () => CW
    });
    var mW = OW(5185),
      EW = OW(5199),
      NW = OW(35231),
      PW = OW(4454),
      LW = OW(4448),
      cW = OW(1407),
      wW = OW(37343),
      tW = OW(100),
      ZW = OW(1255),
      xW = OW(37369),
      lW = OW(37436),
      AW = OW(37441),
      bW = OW(9346),
      jW = OW(8740),
      UW = OW(8942),
      kW = OW(9046),
      sW = OW(9208),
      MW = OW(9225);
    const KW = {
      youtube: bW.h,
      "person-military-pointing": jW.h,
      sparkle: UW.c,
      user: kW.i,
      wrench: sW.d,
      zap: MW.d,
      ...xW.e
    };

    function SW(WW) {
      const [iW, OW, , , mW] = WW.icon;
      return {
        width: iW,
        height: OW,
        path: "string" === typeof mW ? mW : mW.join(" ")
      }
    }
    const YW = new Map(Object.entries(KW).map((WW => {
      let [iW, OW] = WW;
      return [iW, SW(OW)]
    })));
    let yW = !1;
    const TW = new Set;
    var JW = OW(37446);
    const hW = "Jetbrains Mono",
      HW = "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+2248,U+26A1,U+2713,U+FEFF,U+FFFD",
      nW = "U+0100-0130,U+0132-0151,U+0154-017F,U+018F-0190,U+0192,U+019B,U+01A0-01A1,U+01AF-01B0,U+01CD-01CE,U+01D0,U+01D2,U+01D4,U+01D6,U+01D8,U+01DA,U+01DC,U+01E6-01E7,U+01EA-01EB,U+01F4-01F5,U+01FC-01FF,U+0218-021B,U+0232-0233,U+0237,U+0259,U+02B9-02BA,U+02C7,U+02C9,U+02D8-02D9,U+02DB,U+02DD,U+02F3,U+02F7,U+0300-0303,U+0306-0307,U+0309-030C,U+030F,U+0312,U+031B,U+0323,U+0325-0328,U+0336-0338,U+0374-0375,U+037E,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03CF,U+03D5-03D7,U+0401-040C,U+040E-044F,U+0451-045C,U+045E-045F,U+0490-0493,U+049A-049B,U+04A2-04A3,U+04AE-04B1,U+04B6-04B7,U+04BA-04BB,U+04D8-04D9,U+04DC-04DF,U+04E4-04E9,U+04F4-04F5,U+0AEA,U+1E80-1E85,U+1E9E,U+1EA0-1EF9,U+2070,U+2074-207A,U+207C,U+2080-2089,U+20AB,U+20AE,U+20B4,U+20BD,U+20BF,U+2102,U+210D,U+2113,U+2115-2116,U+2119-211A,U+211D,U+2124,U+212E,U+2140,U+218A-218B,U+2194-2199,U+219D-219E,U+21A0,U+21A2-21A3,U+21A5-21A7,U+21A9-21AA,U+21AD,U+21BE,U+21C9,U+21D0-21D4,U+21DB,U+21DE-21DF,U+21E5,U+21E7-21E8,U+21EA,U+2200-220C,U+220E-2211,U+2213,U+2218-221A,U+221E,U+2223-2225,U+2227-222B,U+2234-2239,U+223C,U+223E,U+2243,U+2245,U+2247,U+2249,U+224B,U+224D,U+2254,U+2257,U+225F-2265,U+226A-2273,U+227A-227C,U+2282-2289,U+228E-2299,U+229B-22A5,U+22B4,U+22B8,U+22BB-22BD,U+22C2-22C4,U+22C6,U+22C8-22CA,U+22CE,U+22D0,U+22E2,U+22EE-22F1,U+2302-2305,U+2308-230B,U+2318,U+231C-231F,U+2324-2326,U+2328,U+232B,U+2336-237A,U+2389-238B,U+2395,U+239B-23AD,U+23CE,U+23FB-23FE,U+2400-2421,U+2423-2424,U+2500-25A1,U+25AA-25AB,U+25B2-25CC,U+25CE-25CF,U+25D4-25D5,U+25E6-25EB,U+25EF,U+25F6,U+266D,U+266F,U+2687,U+26A0,U+2715,U+2717,U+2736,U+276E-2771,U+2794,U+279C-279E,U+27C5-27C6,U+27DC,U+27E6-27EB,U+27F5-27F7,U+2916,U+294A,U+2987-2988,U+2A00,U+2A05-2A06,U+2B58,U+E0A0-E0A2,U+E0B0-E0B3,U+FE62,U+FF5B,U+FF5D,U+16910,U+1D538-1D539,U+1D53B-1D53E,U+1D540-1D544,U+1D546,U+1D54A-1D550,U+1D552-1D56B";

    function uW(WW) {
      return WW.split(",").map((WW => {
        const [iW, OW = iW] = WW.slice(2).split("-");
        return [parseInt(iW, 16), parseInt(OW, 16)]
      }))
    }
    const oW = {
        latin: uW(HW),
        rest: uW(nW)
      },
      dW = new RegExp(`[${oW.rest.map((WW=>{let[iW,OW]=WW;return`\\u{${iW.toString(16)}}-\\u{${OW.toString(16)}}`})).join("")}]`, "u");

    function eW(WW) {
      return iW => {
        console.warn(`[bloxd-wasm-client] the text font's ${WW} file did not load`, iW)
      }
    }
    const vW = 397,
      gW = 1,
      DW = {
        translate: WW => [WW],
        keyBindingText: WW => WW,
        isFriend: () => !1,
        hiddenNames: {},
        loadsFontRest: !1
      };
    let VW = null,
      pW = 0,
      fW = "none";

    function CW() {
      return pW
    }
    const XW = new Set;

    function BW(WW) {
      return XW.add(WW), () => {
        XW.delete(WW)
      }
    }

    function qW() {
      pW++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? fW = "all" : "none" === fW && (fW = "notBoards");
      for (const WW of XW) WW()
    }(0, xW.o)((() => {
      qW(!1)
    })), (0, cW.u)((() => {
      (function() {
        const WW = yW;
        return yW = !1, WW
      })() && qW(!1)
    }));
    const RW = new class {
      constructor(WW) {
        this.loaded = WW, this.latin = null, this.rest = null, this.restWanted = !1
      }
      load() {
        if (null === this.latin) {
          this.latin = new FontFace(hW, `url(${(0,JW.d)()}) format("woff2")`, {
            unicodeRange: HW
          }).load().then((WW => {
            document.fonts.add(WW), this.loaded()
          }), eW("Latin"));
          const WW = new FontFace(hW, `url(${(0,JW.h)()}) format("woff2")`, {
            unicodeRange: nW,
            display: "swap"
          });
          document.fonts.add(WW), WW.loaded.then((() => {
            this.loaded()
          }), eW("rest")), this.rest = WW, this.restWanted && WW.load()
        }
        return this.latin
      }
      loadRest() {
        var WW;
        this.restWanted || (this.restWanted = !0, null === (WW = this.rest) || void 0 === WW || WW.load())
      }
      async untilLoadedFor(WW) {
        await this.load(), this.loadFor(WW), await document.fonts.load(`16px '${hW}'`, WW).catch((iW => {
          console.warn("[bloxd-wasm-client] the text font did not load for", WW, iW)
        }))
      }
      loadFor(WW) {
        !this.restWanted && dW.test(WW) && this.loadRest()
      }
    }(qW);

    function GW(WW) {
      Object.assign(DW, WW), DW.loadsFontRest && RW.loadRest(), qW(!1)
    }

    function IW(WW) {
      WW !== VW && (VW = WW, qW())
    }

    function aW(WW) {
      if ("none" === fW || null === WW) return;
      WW(vW, "all" === fW ? 0 : gW, new Uint8Array(0)) && (fW = "none")
    }
    const rW = new Map,
      zW = new Map;

    function FW(WW, iW, OW) {
      var mW;
      const EW = OW ? `${WW}#${OW.join(",")}` : WW,
        NW = rW.get(EW);
      if (NW) return NW.image;
      const PW = {
        image: null !== (mW = zW.get(EW)) && void 0 !== mW ? mW : null
      };
      return rW.set(EW, PW), iW().then((async WW => {
        if (null === WW) return null;
        const iW = new Image;
        iW.crossOrigin = "anonymous", iW.src = WW, await iW.decode();
        const mW = await createImageBitmap(iW);
        if (!OW) return mW;
        try {
          return function(WW, iW) {
            let [OW, mW, EW] = iW;
            const NW = (0, wW.g)(WW.width, WW.height),
              {
                canvas: PW
              } = NW;
            return NW.drawImage(WW, 0, 0), NW.globalCompositeOperation = "multiply", NW.fillStyle = `rgb(${OW}, ${mW}, ${EW})`, NW.fillRect(0, 0, PW.width, PW.height), NW.globalCompositeOperation = "destination-in", NW.drawImage(WW, 0, 0), PW
          }(mW, OW)
        } finally {
          mW.close()
        }
      })).then((WW => {
        rW.get(EW) === PW && zW.delete(EW), WW !== PW.image && (PW.image = WW, qW(!1))
      }), (iW => {
        console.warn(`[bloxd-wasm-client] text icon ${WW} did not load`, iW), rW.get(EW) === PW && (rW.delete(EW), zW.delete(EW), null !== PW.image && qW(!1))
      })), PW.image
    }(0, lW.b)((() => {
      zW.clear();
      for (const [WW, {
          image: iW
        }] of rW) null !== iW && zW.set(WW, iW);
      rW.clear(), qW(!1)
    }));
    const QW = new Set(mW.c),
      Wi = new Set(["CubeBlock", "SlabBlock", "StairsBlock"]);

    function ii() {
      (0, AW.d)().catch((() => {}))
    }

    function Oi(WW) {
      return QW.has(WW) ? FW(`icon:${WW}`, (async () => {
        var iW, OW;
        return null !== (iW = null === (OW = (0, lW.f)()) || void 0 === OW ? void 0 : OW.textureUrl(WW)) && void 0 !== iW ? iW : (await (0, AW.c)()).ingameIconUrl(WW)
      })) : null
    }
    let mi = "unasked";
    const Ei = {
      get canSeeRealPlayerNames() {
        return tW.featureFlags.canSeeRealPlayerNames
      },
      get canSeePlayerWrittenText() {
        return tW.featureFlags.canSeePlayerWrittenText
      },
      get localPlayerDbId() {
        return VW
      },
      shownPlayerName: WW => (0, ZW.g)(WW, DW.hiddenNames),
      translate: (WW, iW) => {
        const OW = "object" === typeof iW && null !== iW ? iW : void 0;
        return DW.translate(WW, (0, ZW.j)(OW, DW.hiddenNames))
      },
      keyBindingText: WW => DW.keyBindingText(WW),
      isFriend: WW => DW.isFriend(WW, DW.hiddenNames),
      iconImage: function(WW) {
        if (QW.has(WW)) return Oi(WW);
        if ("unasked" === mi && (mi = "loading", (0, LW.f)().then((() => {
            mi = "in", qW(!1)
          }), (WW => {
            mi = "failed", console.warn("[bloxd-wasm-client] the item sprite table did not load, so text item icons stay blank", WW)
          }))), "in" !== mi) return null;
        const iW = (0, PW.b)(WW),
          OW = void 0 === iW ? void 0 : (0, NW.itemTypeNameOf)(iW);
        if ("Gun" === OW) return null;
        const mW = (0, LW.b)(WW),
          cW = void 0 !== OW && Wi.has(OW);
        if (cW && void 0 === mW) return null;
        const wW = void 0 !== iW && "GrayscaleArmour" === (0, NW.itemTypeOf)(iW) || Object.hasOwn(EW.b, WW),
          tW = null !== mW && void 0 !== mW ? mW : WW;
        return FW(cW ? `block:${tW}` : `item:${tW}`, (async () => {
          var WW, iW;
          const OW = (0, lW.f)(),
            mW = await (0, AW.d)();
          return null !== (WW = null !== (iW = null === OW || void 0 === OW ? void 0 : OW.textureUrl(tW)) && void 0 !== iW ? iW : mW.itemSpriteUrl(tW)) && void 0 !== WW ? WW : cW ? null : mW.notFoundUrl()
        }), wW ? (0, EW.c)(WW) : void 0)
      },
      effectImage: Oi,
      rankIcon: function(WW) {
        const iW = YW.get(WW);
        if (iW) return iW;
        const OW = (0, cW.f)(WW, (0, cW.m)(WW));
        if (!OW) return (0, cW.j)("brands") && (0, cW.j)("solid") ? TW.has(WW) || (TW.add(WW), console.warn(`[bloxd-wasm-client] unknown rank icon "${WW}": not in the bundled Font Awesome subset, so its tag draws no icon`)) : yW = !0, null;
        const mW = SW(OW);
        return YW.set(WW, mW), mW
      },
      glyphsShown: WW => {
        RW.loadFor(WW)
      }
    }
  },
  37446: (WW, iW, OW) => {
    function mW() {
      return OW(37453)
    }

    function EW() {
      return OW(37460)
    }

    function NW(WW) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(WW)
    }
    OW.d(iW, {
      b: () => NW,
      d: () => mW,
      h: () => EW
    })
  },
  37453: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37460: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);