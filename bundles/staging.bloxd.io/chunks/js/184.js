export const id = 184;
export const ids = [184];
export const modules = {
  10155: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => gb,
      e: () => Lb,
      i: () => Ob,
      j: () => Ib,
      m: () => lb,
      p: () => tb
    });
    var eb = Mb(29),
      Hb = Mb(2212),
      pb = Mb(1567),
      Vb = Mb(1549);
    const gb = bb => {
        var wb, Mb;
        return (0, Vb.j)() && null !== (wb = null === (Mb = (0, pb.e)()) || void 0 === Mb ? void 0 : Mb.getGlyphForNoaAction(bb)) && void 0 !== wb ? wb : null
      },
      lb = "controllerGlyph:",
      Lb = bb => {
        var wb, Mb;
        return null !== (wb = null === (Mb = (0, pb.e)()) || void 0 === Mb ? void 0 : Mb.getPadGlyphIconName(bb)) && void 0 !== wb ? wb : `${lb}xbox/${bb}`
      },
      Ib = bb => bb.startsWith(lb),
      Ob = bb => {
        var wb, Mb;
        return Ib(bb) && null !== (wb = null === (Mb = (0, pb.e)()) || void 0 === Mb ? void 0 : Mb.getPadGlyphIconUrl(bb)) && void 0 !== wb ? wb : null
      },
      Ub = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", Vb.b, Hb.f, Hb.d],
      tb = bb => {
        const wb = Ub.map((wb => eb.k.subscribe(wb, bb)));
        return () => {
          for (const bb of wb) eb.k.unsubscribe(bb)
        }
      }
  },
  42854: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      openCharacterPreview: () => mw
    });
    var eb = Mb(39330),
      Hb = Mb(2451),
      pb = Mb(644),
      Vb = Mb(38356),
      gb = Mb(3222),
      lb = Mb(38343),
      Lb = Mb(41496),
      Ib = Mb(41759),
      Ob = Mb(42757),
      Ub = Mb(38281),
      tb = Mb(41920),
      Cb = Mb(38401),
      Eb = Mb(41933),
      Fb = Mb(42807),
      Bb = Mb(38279),
      sb = Mb(42790),
      mb = Mb(42787),
      hb = Mb(38468),
      zb = Mb(40032),
      Xb = Mb(40463),
      xb = Mb(40510),
      jb = Mb(40504),
      Kb = Mb(40470),
      rb = Mb(4522),
      Rb = Mb(38761);
    const Db = [0, 1, 0];
    class cb {
      constructor(bb) {
        this.node = bb, this.nodesByName = new Map, this.rests = new Map, this.clips = new Map;
        for (const wb of bb.getChildTransformNodes()) this.nodesByName.set(wb.name, wb), this.rests.set(wb.name, (0, Rb.i)(wb))
      }
      play(bb, wb) {
        const Mb = this.clip(bb);
        Mb && (Mb.pose.pose(wb), (0, Rb.p)(Mb.pose, Mb.nodes))
      }
      clip(bb) {
        let wb = this.clips.get(bb);
        if (void 0 === wb) {
          const Mb = (0, Rb.m)(bb, (bb => {
            var wb;
            return null !== (wb = this.rests.get(bb)) && void 0 !== wb ? wb : null
          }));
          wb = Mb && {
            pose: Mb,
            nodes: Mb.boneNames.map((bb => this.nodesByName.get(bb)))
          }, this.clips.set(bb, wb)
        }
        return wb
      }
    }

    function Yb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return new Ub.YC(bb[0] * wb, bb[1] * wb, bb[2] * wb)
    }
    class Zb {
      constructor(bb, wb) {
        this.JE = bb, this.scale = wb, this.petNodes = new Map, this.particleTextures = new Map, this.petName = "pet_none", this.shownPet = null, this.petIsolated = !1, this.auraSeq = 0, this.aura = null, this.auraName = "aura_none", this.auraTuning = null, this.auraDrawn = Promise.resolve()
      }
      async setPet(bb) {
        var wb;
        this.petName = bb, null === (wb = this.shownPet) || void 0 === wb || wb.node.Bx(!1), this.shownPet = null;
        const Mb = (0, Xb.j)(bb);
        if (!Mb) return;
        let eb;
        try {
          eb = await this.petNode(Mb.model)
        } catch {
          return
        }
        this.petName === bb && (eb.node.Bx(!0), this.shownPet = eb)
      }
      setAura(bb) {
        const wb = (0, Xb.i)(bb);
        return bb === this.auraName && wb === this.auraTuning || (this.auraName = bb, this.auraTuning = wb, this.auraDrawn = this.showAura(bb, wb)), this.auraDrawn
      }
      async showAura(bb, wb) {
        var Mb, eb, Hb;
        const pb = ++this.auraSeq;
        if (null === (Mb = this.aura) || void 0 === Mb || Mb.dispose(!1), this.aura = null, !wb) return;
        const Vb = await (0, zb.g)().catch((wb => (console.error(`Couldn't load the preview's particles for ${bb}:`, wb), null)));
        if (!Vb || pb !== this.auraSeq) return;
        const {
          scale: gb
        } = this, {
          opts: lb,
          half: Lb
        } = (0, jb.d)(wb), Ib = Vb(this.JE, `aura|${bb}`, lb.qO), Ob = this.particleTexture(wb.particles.texture);
        Ib.texture = Ob, (0, Kb.e)(Ib, {
          ...lb,
          minSize: lb.minSize * gb,
          maxSize: lb.maxSize * gb,
          minEmitPower: lb.minEmitPower * gb,
          maxEmitPower: lb.maxEmitPower * gb,
          gravity: lb.gravity && [lb.gravity[0] * gb, lb.gravity[1] * gb, lb.gravity[2] * gb]
        }), Ib.emitRate = lb.emitRate, Ib.createBoxEmitter(Yb(null !== (eb = lb.dir1) && void 0 !== eb ? eb : Db), Yb(null !== (Hb = lb.dir2) && void 0 !== Hb ? Hb : Db), Yb(Lb, -gb), Yb(Lb, gb));
        const [tb, Cb, Eb] = wb.offset;
        Ib.emitter = new Ub.YC(tb * gb, (Cb - 1) * gb, Eb * gb), Ib.start(), this.aura = Ib;
        const Fb = Ob.mirror;
        Fb.isReady() || Fb.loadingError || await new Promise((wb => {
          Fb.onLoadObservable.addOnce((() => {
            wb()
          })), Fb.getInternalTexture().onErrorObservable.addOnce((Mb => {
            let {
              message: eb
            } = Mb;
            console.error(`Preview aura ${bb}'s texture failed to load: ${eb}`), wb()
          }))
        }))
      }
      writePose(bb) {
        var wb;
        if (!this.shownPet) return;
        const Mb = (0, Xb.j)(this.petName),
          {
            scale: eb
          } = this;
        if (this.petIsolated) return void this.writeIsolatedPose(this.shownPet, Mb);
        const [Hb, pb, Vb] = Mb.followOffset, {
          node: gb
        } = this.shownPet;
        gb.position.set(Hb * eb, (pb + (0, xb.d)(Mb, bb) - 1) * eb, Vb * eb), gb.rotation.y = Mb.yawOffset, gb.CO.Jbb(Mb.scale * eb), null !== (wb = Mb.clips) && void 0 !== wb && wb.fly && this.shownPet.play(Mb.clips.fly, bb)
      }
      isolatePet() {
        this.petIsolated = !0
      }
      writeIsolatedPose(bb, wb) {
        var Mb, eb, Hb;
        const {
          node: pb
        } = bb;
        pb.position.Jbb(0), pb.rotation.y = wb.yawOffset, pb.CO.Jbb(1);
        const Vb = null !== (Mb = null === (eb = wb.clips) || void 0 === eb ? void 0 : eb.perch) && void 0 !== Mb ? Mb : null === (Hb = wb.clips) || void 0 === Hb ? void 0 : Hb.fly;
        Vb && bb.play(Vb, 0);
        const {
          min: gb,
          max: lb
        } = pb.getHierarchyBoundingVectors(!0), Lb = 2 * this.scale / (lb.y - gb.y);
        pb.CO.Jbb(Lb), pb.position.set(-(gb.x + lb.x) / 2 * Lb, -(gb.y + lb.y) / 2 * Lb, -(gb.z + lb.z) / 2 * Lb)
      }
      petNode(bb) {
        let wb = this.petNodes.get(bb);
        return wb || (wb = (0, sb.h)(this.JE, bb, void 0, {
          keepTransforms: !0,
          backFaceCulling: !0
        }).then((wb => {
          const Mb = new mb.b(`pet|${bb}`, this.JE);
          Mb.Bx(!1);
          for (const bb of wb.rootNodes) bb.parent = Mb, (0, sb.o)(bb, !0);
          return new cb(Mb)
        }), (wb => {
          throw this.petNodes.delete(bb), console.error(`Failed to load preview pet ${bb}:`, wb), wb
        })), this.petNodes.set(bb, wb)), wb
      }
      particleTexture(bb) {
        let wb = this.particleTextures.get(bb);
        return wb || (wb = (0, hb.t)(this.JE, (0, rb.e)(bb)), this.particleTextures.set(bb, wb)), wb
      }
    }
    var fb = Mb(42078),
      Ab = Mb(42091),
      Wb = Mb(42107);

    function Jb(bb) {
      const wb = [],
        Mb = [],
        eb = [],
        Hb = [],
        pb = void 0 !== bb.width ? bb.width : void 0 !== bb.size ? bb.size : 1,
        Vb = void 0 !== bb.height ? bb.height : void 0 !== bb.size ? bb.size : 1,
        gb = 0 === bb.sideOrientation ? 0 : bb.sideOrientation || Ab.d.DEFAULTSIDE,
        lb = pb / 2,
        Lb = Vb / 2;
      Mb.push(-lb, -Lb, 0), eb.push(0, 0, -1), Hb.push(0, Wb.d ? 1 : 0), Mb.push(lb, -Lb, 0), eb.push(0, 0, -1), Hb.push(1, Wb.d ? 1 : 0), Mb.push(lb, Lb, 0), eb.push(0, 0, -1), Hb.push(1, Wb.d ? 0 : 1), Mb.push(-lb, Lb, 0), eb.push(0, 0, -1), Hb.push(0, Wb.d ? 0 : 1), wb.push(0), wb.push(1), wb.push(2), wb.push(0), wb.push(2), wb.push(3), Ab.d._ComputeSides(gb, Mb, wb, eb, Hb, bb.frontUVs, bb.backUVs);
      const Ib = new Ab.d;
      return Ib.indices = wb, Ib.positions = Mb, Ib.normals = eb, Ib.uvs = Hb, Ib
    }

    function Sb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const eb = new fb.e(bb, Mb);
      wb.sideOrientation = fb.e._GetDefaultSideOrientation(wb.sideOrientation), eb._originalBuilderSideOrientation = wb.sideOrientation;
      return Jb(wb).applyToMesh(eb, wb.updatable), wb.sourcePlane && (eb.translate(wb.sourcePlane.normal, -wb.sourcePlane.d), eb.setDirection(wb.sourcePlane.normal.scale(-1))), eb
    }
    let Nb = !1;
    Nb || (Nb = !0, Ab.d.CreatePlane = Jb, fb.e.CreatePlane = (bb, wb, Mb, eb, Hb) => Sb(bb, {
      size: wb,
      width: wb,
      height: wb,
      sideOrientation: Hb,
      updatable: eb
    }, Mb));
    var vb = Mb(42847),
      Qb = Mb(42839),
      Gb = Mb(37455),
      qb = Mb(37469),
      ab = Mb(37528),
      ib = Mb(40168),
      ub = Mb(40182),
      db = Mb(40170);
    class Pb {
      constructor(bb, wb) {
        this.scale = wb, this.plane = void 0, this.canvas = document.createElement("canvas"), this.texture = void 0, this.widthPx = 0, this.heightPx = 0, this.shown = null, this.stopRedrawing = null, this.texture = new vb.e("previewNametag", this.canvas, bb, !1, Fb.c.BILINEAR_SAMPLINGMODE), this.texture.hasAlpha = !0;
        const Mb = new Eb.StandardMaterial("previewNametag", bb);
        Mb.diffuseTexture = this.texture, Mb.useAlphaFromDiffuseTexture = !0, Mb.emissiveColor = Cb.Color3.White(), Mb.disableLighting = !0, this.plane = Sb("previewNametag", {
          size: 1
        }, bb), this.plane.material = Mb, this.plane.billboardMode = Qb.e.BILLBOARDMODE_ALL, this.plane.renderingGroupId = db.e, this.plane.NE = !1, this.plane.Bx(!1)
      }
      set(bb) {
        var wb;
        if (bb !== this.shown) {
          if (this.shown = bb, null === (wb = this.stopRedrawing) || void 0 === wb || wb.call(this), this.stopRedrawing = null, null === bb || void 0 === bb || !bb.name) return this.heightPx = 0, void this.plane.Bx(!1);
          ab.k.untilLoadedFor(bb.name).then((() => {
            this.shown === bb && (this.draw(bb), this.stopRedrawing = (0, ab.i)((() => {
              this.draw(bb)
            })))
          }))
        }
      }
      update(bb) {
        if (0 === this.heightPx) return;
        const wb = -this.scale,
          Mb = ub.b * this.scale + wb,
          eb = bb.position,
          Hb = Math.hypot(eb.x, eb.y - Mb, eb.z) / this.scale,
          pb = 2 * Hb * Math.tan(bb.fov / 2) * bb.DC().getAspectRatio(bb),
          Vb = Math.min((0, ub.f)(Hb), .9 * pb / (ib.f.TEXT_PLANE_RATIO * this.widthPx)),
          gb = Vb * ib.f.TEXT_PLANE_RATIO * this.heightPx;
        this.plane.position.set(0, wb + (ub.b + .5 * gb - .05) * this.scale, 0);
        const lb = Vb * ib.f.TEXT_PLANE_RATIO * this.scale;
        this.plane.CO.set(lb * this.widthPx, lb * this.heightPx, 1)
      }
      draw(bb) {
        const wb = (0, Gb.d)(this.canvas),
          Mb = (0, qb.d)({
            name: bb.name,
            ranks: bb.ranks,
            colour: bb.nameColour,
            mesh: !0
          }, wb, ab.t);
        if (null === Mb) return this.heightPx = 0, void this.plane.Bx(!1);
        this.texture.scaleTo(Math.ceil(2 * Mb.width), Math.ceil(2 * Mb.height)), wb.scale(2, 2), Mb.draw(wb), this.texture.update(), this.widthPx = Mb.width, this.heightPx = Mb.height, this.plane.Bx(!0)
      }
    }
    var nb = Mb(38366),
      yb = (Mb(42792), Mb(42161), Mb(42795), Mb(35370)),
      ob = Mb(37449),
      Tb = Mb(42862);
    let kb, bw, ww, Mw, ew, Hw, pw, Vw, gw, lw, Lw, Iw;
    const Ow = document.createElement("canvas");
    async function Uw() {
      await new Promise((bb => {
        setTimeout((() => {
          bb()
        }), 100)
      }))
    }
    Ow.classList.add("CharCustomisationPreviewCanvas");
    const tw = {};

    function Cw(bb, wb) {
      if (!Mw) return;
      const Vb = (0, Hb.h)();
      if (Vb.RZ(!1), eb.d.Player.meshApi.updatePlayerCosmetic(Vb.VJ, pw, bb, wb, !0), "cape" === bb)
        if (wb === pb.e) ew.Bx(!1);
        else {
          ew.Bx(!0);
          ew.material.diffuseTexture = new Fb.c(Mb(40110)(`./cape_${wb}.png`), ew.RJ(), {
            invertY: !1,
            samplingMode: Fb.c.NEAREST_NEAREST_MIPLINEAR
          })
        }
      "pet" === bb ? tw.pet = lw.setPet(wb) : "aura" === bb ? tw.aura = lw.setAura(wb) : tw[bb] = gw.update(bb, wb)
    }

    function Ew(bb, wb) {
      const [Mb, eb] = (0, ob.b)(bb, wb, window.devicePixelRatio);
      kb.setSize(Math.max(Mb, Math.floor(bb)), Math.max(eb, Math.floor(wb)))
    }
    let Fw = 0;
    class Bw {
      constructor(bb, wb) {
        var Mb;
        this.framing = wb, this.ready = Iw, this.dev = {
          canvas: () => Ow,
          captureFrame: bb => (0, Tb.e)((() => this.closed ? null : Ow), (bb => {
            const wb = ww.onAfterRenderObservable.addOnce(bb);
            return () => {
              ww.onAfterRenderObservable.remove(wb)
            }
          }), bb),
          isolateHead(bb) {
            const wb = Hw.getNodeNames(pw);
            for (let Mb = 0; Mb < wb.length; Mb++) "HeadMesh" !== wb[Mb] && "__root__" !== wb[Mb] && "TorsoNode" !== wb[Mb] && Hw.setNodeEnabled(pw, Mb, !1);
            if (bb) {
              const bb = Hw.getNamedNode(pw, "HeadMesh");
              Hw.setNodeDisableColorWrite(pw, bb, !0, (bb => {
                const wb = new Eb.StandardMaterial(`${bb.name}_depthOnly`, bb.RJ());
                return wb.disableColorWrite = !0, wb
              }))
            }
            Hw.setPosition(pw, 0, -12, 0), Lw.set(null), Cw("pet", "pet_none"), Cw("aura", "aura_none")
          },
          isolatePet() {
            const bb = Hw.getNodeNames(pw).length;
            for (let wb = 0; wb < bb; wb++) Hw.setNodeEnabled(pw, wb, !1);
            ew.Bx(!1), Cw("aura", "aura_none"), Lw.set(null), lw.isolatePet()
          }
        }, this.closed = !1, this.resetCamera(), null === (Mb = Lw) || void 0 === Mb || Mb.set(null);
        const eb = bb.getBoundingClientRect();
        Ew(eb.width, eb.height), Fw++, kb.stopRenderLoop(), kb.runRenderLoop((() => {
          var bb, wb, Mb, eb;
          null === (bb = Vw) || void 0 === bb || bb.render(kb.getDeltaTime());
          const Hb = performance.now() / 1e3;
          null === (wb = gw) || void 0 === wb || wb.writePoses(Hb), null === (Mb = lw) || void 0 === Mb || Mb.writePose(Hb), null === (eb = Lw) || void 0 === eb || eb.update(bw), ww.render()
        }))
      }
      isReady() {
        return !!Mw
      }
      setCosmetic(bb, wb) {
        Cw(bb, wb)
      }
      setNametag(bb) {
        var wb;
        null === (wb = Lw) || void 0 === wb || wb.set(bb)
      }
      playEmote(bb) {
        if (!Vw) return;
        if (!bb) return void Vw.stopAnimation(lb.e.Emote);
        const wb = (0, Vb.h)((0, gb.h)(bb).animation);
        Vw.startAnimation(wb, lb.e.Emote, 0, gb.b)
      }
      async untilDrawn(bb) {
        if (await Uw(), "cape" === bb && ew) {
          const bb = ew.material,
            wb = null === bb || void 0 === bb ? void 0 : bb.diffuseTexture;
          wb && !wb.isReady() && (await new Promise((bb => {
            wb.onLoadObservable.addOnce((() => {
              bb()
            }))
          })), await Uw())
        }
        tw[bb] && (await tw[bb], await Uw()), await ww.whenReadyAsync(), await new Promise((bb => {
          ww.onAfterRenderObservable.addOnce((() => {
            bb()
          }))
        }))
      }
      setOrbit(bb) {
        sw(bb)
      }
      resetCamera() {
        bw.inertialAlphaOffset = 0, bw.inertialBetaOffset = 0, bw.inertialRadiusOffset = 0, sw(yb.b[this.framing])
      }
      resize(bb, wb) {
        Ew(bb, wb)
      }
      close() {
        var bb;
        this.closed || (this.closed = !0, Fw--, 0 === Fw && (kb.stopRenderLoop(), null === (bb = Lw) || void 0 === bb || bb.set(null)))
      }
    }

    function sw(bb) {
      let {
        yaw: wb,
        pitch: Mb,
        radius: eb,
        target: Hb
      } = bb;
      bw.alpha = wb, bw.beta = Mb, eb && (bw.radius = eb), Hb && bw.target.set(Hb[0], Hb[1], Hb[2])
    }

    function mw(bb, wb) {
      return bb.appendChild(Ow), kb || function() {
        kb = new Lb.e(Ow, !0, {
          preserveDrawingBuffer: !0
        });
        const bb = (0, Hb.h)();
        kb.rHb = bb.FO.engine.rHb, ww = new Ib.b(kb), ww.clearColor = new Cb.c(0, 0, 0, 0), ww.ambientColor = new Cb.Color3(1, 1, 1), bw = new Ob.e("iF", 0, 0, 1, Ub.YC.Zero(), ww), bw.attachControl(Ow, !0), bw.panningSensibility = 0, Iw = (0, eb.q)("Player", ww, !0).then((wb => {
          Mw = wb.meshApi, ew = wb.capeMesh, Hw = bb.FO.GJ;
          const Mb = 8.33;
          pw = (0, eb.l)("Player", Mb, !0, !0), Hw.setPosition(pw, 0, -8.33, 0);
          const Hb = Hw.getNamedNode(pw, "BodyMesh");
          Hw.attachTransformNode(ew, pw, Hb), Hw.set(pw, "aOpacity", 1), Hw.ZN(pw, "aOpacity", 1), gw = new sb.d(ww, Hw, pw), lw = new Zb(ww, Mb), Lw = new Pb(ww, Mb), Vw = new Bb.AnimatorState, Vw.hU = bb, Vw.thinInstMgr = Hw, Vw.qJ = pw, Vw.keb = Hw.OHb(pw, 0), Vw.modelLifeformType = "Player", Vw.nodeNameAliases = (0, nb.b)("Player").nodeNameAliases;
          const pb = ew.XN().boundingBox;
          ew.position.y = ((24 - pb.maximum.y + pb.minimum.y) / 2 - 1 / 32) / Mb, ew.position.z = -1 / Mb, ew.rotationQuaternion = null;
          const Vb = Math.PI / 18,
            gb = pb.maximum.y / Mb;
          ew.rotation.x = Vb;
          const lb = Math.cos(Vb),
            Lb = Math.sin(Vb);
          ew.position.y += gb * (1 - lb) + 0 * Lb, ew.position.z -= gb * Lb + 0 * (1 - lb);
          const Ib = new Eb.StandardMaterial("capeMaterial", ew.RJ());
          ew.material = Ib;
          const Ob = new Cb.Color3(1, 1, 1);
          Ib.diffuseColor = new Cb.Color3, Ib.specularColor = new Cb.Color3, Ib.emissiveColor = new Cb.Color3, Ib.ambientColor = new Cb.Color3, Ob.scaleToRef(.43, Ib.diffuseColor), Ob.scaleToRef(1.75, Ib.ambientColor), Ib.freeze();
          const Fb = new tb.c("light", new Ub.YC(-.1, 1, -.3), ww);
          Fb.diffuse = new Cb.Color3(1, 1, 1), Fb.specular = new Cb.Color3(1, 1, 1), Fb.groundColor = new Cb.Color3(.5, .5, .5)
        }))
      }(), new Bw(bb, wb)
    }
  },
  37539: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => gb,
      h: () => Vb
    });
    var eb = Mb(4662);
    let Hb = null,
      pb = null;

    function Vb() {
      return pb ??= Mb.e(242).then((() => Mb(37441))).then((bb => {
        let {
          ITEM_SPRITES: wb,
          ITEM_SPRITES_WITHOUT_FILE: Mb,
          ITEM_FILES_WITHOUT_SPRITE: pb
        } = bb;
        Hb = function(bb, wb, Mb) {
          const Hb = new Set,
            pb = (0, eb.z)(wb);
          let Vb = 0;
          for (const [eb, gb] of bb.entries()) eb === pb[Vb] ? Vb++ : Hb.add(gb);
          if ("" !== Mb)
            for (const gb of Mb.split(eb.v)) Hb.add(gb);
          return Hb
        }(wb.split(eb.v), Mb, pb)
      }), (bb => {
        throw pb = null, bb
      })), pb
    }

    function gb(bb) {
      var wb, Mb;
      return null !== (wb = null === (Mb = Hb) || void 0 === Mb ? void 0 : Mb.has(bb)) && void 0 !== wb && wb
    }
  },
  35281: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb
    });
    var eb = Mb(1400);

    function Hb() {
      var bb, wb;
      return null !== (bb = null === (wb = screen.orientation) || void 0 === wb ? void 0 : wb.type) && void 0 !== bb ? bb : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const pb = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Hb() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Hb(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, eb.mE)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const bb of this.resizers) bb()
          }
        }), 1e3)
      }
      heldSizer(bb) {
        let wb = !1;
        return () => {
          if (wb && this.isHeld()) return null;
          const Mb = bb();
          return wb ||= null !== Mb, Mb
        }
      }
      onRelease(bb) {
        return this.resizers.add(bb), () => {
          this.resizers.delete(bb)
        }
      }
    }
  },
  37455: (bb, wb, Mb) => {
    function eb(bb, wb, Mb) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(bb, wb).getContext("2d", Mb);
      const eb = document.createElement("canvas");
      return eb.width = bb, eb.height = wb, eb.getContext("2d", Mb)
    }

    function Hb(bb, wb) {
      return bb.getContext("2d", wb)
    }
    Mb.d(wb, {
      d: () => Hb,
      g: () => eb
    })
  },
  42862: (bb, wb, Mb) => {
    function eb(bb, wb, Mb) {
      return new Promise((eb => {
        const Hb = setTimeout((() => {
            pb(), eb(null)
          }), Mb),
          pb = wb((() => {
            clearTimeout(Hb);
            const wb = bb();
            eb(null === wb ? null : function(bb) {
              if (0 === bb.width || 0 === bb.height) return null;
              const wb = document.createElement("canvas");
              wb.width = bb.width, wb.height = bb.height;
              const Mb = wb.getContext("2d");
              return Mb ? (Mb.drawImage(bb, 0, 0), wb) : null
            }(wb))
          }))
      }))
    }
    Mb.d(wb, {
      e: () => eb
    })
  },
  37449: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb
    });
    const eb = 4e5,
      Hb = 2;

    function pb(bb, wb, Mb) {
      let [pb, Vb] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [bb, wb], gb = Math.min(Number.isFinite(Mb) && Mb > 0 ? Mb : 1, Hb);
      const lb = Math.max(0, pb, bb) * Math.max(0, Vb, wb) * gb * gb;
      return lb > eb && (gb *= Math.sqrt(eb / lb)), [Math.max(1, Math.floor(Math.max(0, bb) * gb)), Math.max(1, Math.floor(Math.max(0, wb) * gb))]
    }
  },
  37471: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Xb,
      e: () => Rb,
      h: () => Db,
      j: () => cb
    });
    var eb = Mb(37475),
      Hb = Mb(8107),
      pb = Mb(8175),
      Vb = Mb(37478),
      gb = Mb(37480),
      lb = Mb(37486),
      Lb = Mb(8465),
      Ib = Mb(8583),
      Ob = Mb(37490),
      Ub = Mb(8793),
      tb = Mb(7982),
      Cb = Mb(9065),
      Eb = Mb(37496),
      Fb = Mb(37503),
      Bb = Mb(9091),
      sb = Mb(37507),
      mb = Mb(37509),
      hb = Mb(382);
    const zb = {
        redTeam: pb.c,
        blueTeam: Fb.h,
        greenTeam: mb.e,
        yellowTeam: Bb.d,
        cyanTeam: lb.g,
        whiteTeam: tb.faPlus,
        pinkTeam: Ib.g,
        grayTeam: Ob.d,
        blackTeam: Eb.e,
        orangeTeam: sb.h,
        lilacTeam: Vb.d,
        purpleTeam: Ub.g,
        magentaTeam: gb.f,
        brownTeam: eb.f,
        limeTeam: Hb.faBolt,
        lightGrayTeam: Lb.e,
        lightBlueTeam: Cb.d
      },
      Xb = Object.fromEntries(Object.values(zb).map((bb => [xb(bb), bb])));

    function xb(bb) {
      return `team-${bb.iconName}`
    }
    const jb = new Map;
    for (const [Yb, Zb] of Object.entries(zb)) {
      const bb = xb(Zb),
        wb = hb.O[Yb];
      wb && jb.set(wb.toLowerCase(), {
        icon: bb,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "white",
          iconShadowRGB: "black"
        },
        visible: !0
      })
    }
    let Kb = !1;
    const rb = new Set;

    function Rb(bb) {
      if (bb !== Kb) {
        Kb = bb;
        for (const bb of rb) bb()
      }
    }

    function Db(bb) {
      var wb;
      return "string" === typeof bb && Kb && null !== (wb = jb.get(bb.toLowerCase())) && void 0 !== wb ? wb : null
    }

    function cb(bb) {
      return rb.add(bb), () => {
        rb.delete(bb)
      }
    }
  },
  37530: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Ib,
      f: () => lb,
      h: () => gb,
      l: () => Lb
    });
    var eb = Mb(2150);
    let Hb = null,
      pb = 0;
    const Vb = new Set;

    function gb() {
      return Hb
    }

    function lb() {
      return pb
    }

    function Lb(bb) {
      Hb = bb, pb++, (0, eb.d)();
      for (const wb of Vb) wb()
    }

    function Ib(bb) {
      Vb.add(bb)
    }
  },
  37534: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb,
      g: () => gb
    });
    var eb = Mb(37539);
    let Hb = null,
      pb = null;

    function Vb() {
      return Hb ??= Mb.e(74).then((() => Mb(42864))).catch((bb => {
        throw Hb = null, bb
      })), Hb
    }

    function gb() {
      return pb ??= Promise.all([Vb(), (0, eb.h)()]).then((bb => {
        let [wb] = bb;
        return wb
      }), (bb => {
        throw pb = null, bb
      })), pb
    }
  },
  37469: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Xb
    });
    var eb = Mb(5315),
      Hb = Mb(1333),
      pb = Mb(644),
      Vb = Mb(2228),
      gb = Mb(37471),
      lb = Mb(37464);
    const Lb = 10,
      Ib = 3,
      Ob = 3,
      Ub = [{
        healthFraction: .25,
        colour: "#ff0000"
      }, {
        healthFraction: .5,
        colour: "#ffaa00"
      }, {
        healthFraction: 1,
        colour: "#00ff00"
      }],
      tb = 64,
      Cb = 69,
      Eb = {
        icon: Vb.c,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "#f38ab6",
          iconShadowRGB: "black"
        },
        visible: !0
      };

    function Fb(bb) {
      return "object" !== typeof bb || null === bb || Array.isArray(bb) ? void 0 : bb
    }
    const Bb = new Set(eb.d);

    function sb(bb, wb) {
      return "string" === typeof bb ? (0, lb.p)(bb, wb) : wb
    }

    function mb(bb) {
      return sb(bb.width, Ib)
    }

    function hb(bb, wb) {
      var Mb;
      const eb = null !== (Mb = bb.applyTo) && void 0 !== Mb ? Mb : "both";
      return "both" === eb || eb === wb
    }

    function zb(bb) {
      const wb = mb(bb);
      return "glow" === bb.style ? wb * Ob : Math.ceil(wb / 2) + 1
    }

    function Xb(bb, wb, Mb) {
      var eb, Vb;
      const Ib = null !== (eb = Fb(bb.info)) && void 0 !== eb ? eb : {},
        Xb = "string" === typeof bb.name ? bb.name : "",
        xb = Ib.subtitle;
      if (Array.isArray(Ib.content) && 0 === Ib.content.length && !(Array.isArray(xb) && xb.length > 0)) return null;
      const jb = "number" === typeof bb.hideNameSeed ? bb.hideNameSeed : null,
        Kb = "" === Xb || !0 === bb.mesh ? Xb : (0, Hb.b)(Xb, !Mb.canSeeRealPlayerNames, jb);
      if (!Kb && !Ib.content) return null;
      const rb = "string" === typeof bb.colour ? bb.colour : "default",
        Rb = Object.hasOwn(pb.v, rb) ? pb.v[rb] : void 0,
        Db = Ib.content ? (0, lb.h)(Ib.content, lb.b.DEFAULT_FONT_SIZE, Mb, Rb) : [{
          kind: "text",
          text: Kb,
          size: lb.b.DEFAULT_FONT_SIZE,
          colour: Rb
        }],
        cb = [],
        Yb = "boolean" === typeof bb.player ? bb.player : Array.isArray(bb.ranks),
        Zb = Yb ? (0, gb.h)(Ib.backgroundColor) : null;
      Zb && cb.push({
        kind: "rank",
        rank: Zb
      });
      for (const Hb of Array.isArray(bb.ranks) ? bb.ranks : []) {
        const bb = (0, lb.q)(Hb);
        null !== bb && void 0 !== bb && bb.nameTag && bb.visible && cb.push({
          kind: "rank",
          rank: bb
        })
      }
      cb.push(...Db), Yb && "" !== Xb && Mb.isFriend(Xb) && cb.push({
        kind: "rank",
        rank: Eb
      }), "number" === typeof bb.DV && cb.push({
        kind: "text",
        text: ` ${bb.DV}m`,
        size: lb.b.DEFAULT_FONT_SIZE,
        colour: "#cef3ff"
      });
      const fb = xb ? (0, lb.h)(xb, lb.b.DEFAULT_SUBTITLE_FONT_SIZE, Mb) : null,
        Ab = "string" === typeof Ib.backgroundColor ? Ib.backgroundColor : "#22283b",
        Wb = "string" === typeof Ib.subtitleBackgroundColor ? Ib.subtitleBackgroundColor : "#1a1e2d",
        Jb = Fb(Ib.healthbar),
        Sb = Fb(Ib.border),
        Nb = Array.isArray(bb.effects) ? bb.effects.filter((bb => "string" === typeof bb && Bb.has(bb))) : [],
        vb = "number" === typeof bb.health ? Math.max(0, Math.min(1, bb.health)) : null,
        Qb = (0, lb.d)(cb, wb, Mb),
        Gb = (0, lb.d)(null !== fb && void 0 !== fb ? fb : [], wb, Mb),
        qb = {
          width: lb.b.EFFECT_ICON_SIZE * Nb.length,
          height: Nb.length > 0 ? lb.b.EFFECT_ICON_SIZE : 0
        },
        ab = Sb && hb(Sb, "nametag") ? zb(Sb) : 0,
        ib = sb(null === Jb || void 0 === Jb ? void 0 : Jb.height, Lb),
        ub = Sb && hb(Sb, "healthbar") ? zb(Sb) : 0,
        db = "never" === (null !== (Vb = null === Jb || void 0 === Jb ? void 0 : Jb.display) && void 0 !== Vb ? Vb : "onDamage") ? 0 : ib + ub,
        Pb = Math.max(qb.height, ab),
        nb = Math.max(lb.b.VERTICAL_PADDING, db, ab);
      let yb = Math.max(Qb.width, Gb.width, qb.width);
      if (Sb) {
        const bb = zb(Sb) + lb.b.HORIZONTAL_PADDING / 2;
        yb = Math.max(yb, Math.max(Qb.width, Gb.width) + lb.b.HORIZONTAL_PADDING + 2 * bb)
      }
      const ob = Qb.height + Gb.height + Pb + nb,
        Tb = Qb.width + lb.b.HORIZONTAL_PADDING,
        kb = Gb.width + lb.b.HORIZONTAL_PADDING,
        bw = Math.max(Tb, kb),
        ww = (yb - bw) / 2,
        Mw = Math.max(qb.height, ab);
      return {
        width: yb,
        height: ob,
        draw: bb => {
          const wb = [];
          if (bb.fillStyle = Ab, bb.fillRect(ww, Mw, bw, Qb.height), (0, lb.m)(cb, (yb - Tb) / 2 + lb.b.HORIZONTAL_PADDING / 2, Mw, Qb.height, bb, Mb, wb), fb) {
            const eb = Mw + Qb.height;
            bb.fillStyle = Wb, bb.fillRect(ww, eb, bw, Gb.height), (0, lb.m)(fb, (yb - kb) / 2 + lb.b.HORIZONTAL_PADDING / 2, eb, Gb.height, bb, Mb, wb)
          }
          let eb = null;
          if (null !== vb) {
            const wb = ob - ib - ub;
            null !== Jb && void 0 !== Jb && Jb.backgroundColour && (bb.fillStyle = Jb.backgroundColour, bb.fillRect(ww, wb, bw, ib)), bb.fillStyle = function(bb, wb) {
              const Mb = null === bb || void 0 === bb ? void 0 : bb.foregroundColour;
              if ("string" === typeof Mb) return Mb;
              const eb = [...Array.isArray(Mb) && Mb.length > 0 ? Mb : Ub].sort(((bb, wb) => bb.healthFraction - wb.healthFraction)),
                Hb = eb.find((bb => wb <= bb.healthFraction));
              return (null !== Hb && void 0 !== Hb ? Hb : eb[eb.length - 1]).colour
            }(Jb, vb), bb.fillRect(ww, wb, Math.round(bw * vb), ib), eb = {
              x: ww,
              y: wb,
              width: bw,
              height: ib
            }
          }
          if (Sb) {
            const wb = [];
            hb(Sb, "nametag") && wb.push({
              x: ww,
              y: Mw,
              width: bw,
              height: Qb.height + (fb ? Gb.height : 0)
            }), eb && hb(Sb, "healthbar") && wb.push(eb), wb.length > 0 && function(bb, wb, Mb) {
              const eb = mb(wb),
                Hb = eb / 2,
                pb = bb => bb.width > 0 && bb.height > 0,
                Vb = Mb.map((bb => ({
                  x: bb.x + Hb,
                  y: bb.y + Hb,
                  width: bb.width - eb,
                  height: bb.height - eb
                }))).filter(pb);
              if (0 === Vb.length) return;
              const gb = wb => {
                const Mb = wb.filter(pb);
                if (0 !== Mb.length) {
                  bb.beginPath();
                  for (const wb of Mb) bb.rect(wb.x, wb.y, wb.width, wb.height);
                  bb.stroke()
                }
              };
              if (bb.save(), bb.strokeStyle = wb.colour, bb.lineWidth = eb, bb.lineJoin = "round", "glow" === wb.style) bb.shadowColor = wb.colour, bb.shadowBlur = eb * Ob, gb(Vb), gb(Vb);
              else if ("double" === wb.style) {
                gb(Vb);
                const bb = eb + 2;
                gb(Vb.map((wb => ({
                  x: wb.x + bb,
                  y: wb.y + bb,
                  width: wb.width - 2 * bb,
                  height: wb.height - 2 * bb
                }))))
              } else gb(Vb);
              bb.restore()
            }(bb, Sb, wb)
          }(0, lb.j)(wb, bb);
          for (let Hb = 0; Hb < Nb.length; Hb++) {
            const wb = Mb.effectImage(Nb[Hb]);
            wb && (bb.imageSmoothingEnabled = !1, bb.drawImage(wb, 5 + Cb * Hb, 5, tb, tb))
          }
        }
      }
    }
  },
  37464: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      d: () => sb,
      h: () => tb,
      j: () => zb,
      k: () => hb,
      m: () => mb,
      p: () => Lb,
      q: () => Ob
    });
    var eb = Mb(644),
      Hb = Mb(366);
    const pb = {
        DEFAULT_FONT_SIZE: 47,
        DEFAULT_SUBTITLE_FONT_SIZE: 30,
        HORIZONTAL_PADDING: 30,
        VERTICAL_PADDING: 22,
        TEXT_SHADOW_WIDTH: 2,
        LINE_SPACING: 8,
        EFFECT_ICON_SIZE: 70
      },
      Vb = 41;

    function gb(bb) {
      return `bolder ${bb}px 'Jetbrains Mono'`
    }

    function lb(bb) {
      return "object" === typeof bb && null !== bb
    }

    function Lb(bb, wb) {
      const Mb = "number" === typeof bb ? bb : "string" === typeof bb ? Number(bb.replace("px", "")) : NaN;
      return Number.isFinite(Mb) && Mb > 0 ? Mb : wb
    }

    function Ib(bb) {
      return lb(bb) ? bb : void 0
    }

    function Ob(bb) {
      const wb = "number" === typeof bb ? eb.x[bb] : bb;
      return "string" === typeof wb && Object.hasOwn(eb.l, wb) ? eb.l[wb] : void 0
    }

    function Ub(bb, wb) {
      return "string" === typeof bb ? bb : lb(bb) ? "string" === typeof bb.translationKey ? wb.translate(bb.translationKey, bb.params).map((bb => "string" === typeof bb ? bb : bb.icon)).join("") : "string" === typeof bb.entityName ? wb.shownPlayerName(bb.entityName) : "" : void 0 === bb || null === bb ? "" : String(bb)
    }

    function tb(bb, wb, Mb, eb) {
      if (!Array.isArray(bb)) return [];
      const Vb = [];
      for (const Cb of bb) {
        var gb, Ob;
        if (lb(Cb) && "chatTag" in Cb) {
          Vb.push({
            kind: "rank",
            rank: Cb
          });
          continue
        }
        if (lb(Cb) && "icon" in Cb && !("mainRGB" in Cb)) {
          var tb;
          Vb.push({
            kind: "icon",
            icon: String(Cb.icon),
            size: Lb(null === (tb = Ib(Cb.style)) || void 0 === tb ? void 0 : tb.fontSize, pb.DEFAULT_FONT_SIZE)
          });
          continue
        }
        if (lb(Cb) && (0, Hb.xb)(Cb)) {
          Vb.push({
            kind: "text",
            text: "",
            size: wb,
            colour: eb
          });
          continue
        }
        let bb, Eb;
        lb(Cb) && (0, Hb.tb)(Cb) ? (bb = Mb.keyBindingText(String(Cb.action)), Eb = Ib(Cb.style)) : lb(Cb) && "str" in Cb ? (bb = Cb.str, Eb = Ib(Cb.style)) : bb = Cb;
        const Fb = Lb(null === (gb = Eb) || void 0 === gb ? void 0 : gb.fontSize, wb),
          Bb = null !== (Ob = (0, Hb._b)(Eb)) && void 0 !== Ob ? Ob : eb;
        if (lb(bb) && "string" === typeof bb.translationKey) {
          const wb = Mb.translate(bb.translationKey, bb.params);
          if (wb.some((bb => "string" !== typeof bb))) {
            for (const bb of wb) Vb.push("string" === typeof bb ? {
              kind: "text",
              text: bb,
              size: Fb,
              colour: Bb
            } : {
              kind: "icon",
              icon: bb.icon,
              size: Fb
            });
            continue
          }
        }
        Vb.push({
          kind: "text",
          text: Ub(bb, Mb),
          size: Fb,
          colour: Bb
        })
      }
      return Vb
    }

    function Cb(bb) {
      return void 0 !== bb && "rank" !== bb.kind
    }

    function Eb(bb, wb) {
      const Mb = Cb(bb),
        eb = Cb(wb);
      return void 0 === bb && !eb || !Mb && void 0 === wb ? 0 : Mb !== eb ? .5 * pb.HORIZONTAL_PADDING : 0
    }

    function Fb(bb) {
      return "rank" === bb.kind ? pb.DEFAULT_FONT_SIZE : bb.size
    }

    function Bb(bb, wb, Mb) {
      return "icon" === bb.kind ? bb.size : "rank" === bb.kind ? function(bb, wb) {
        const Mb = wb.rankIcon(bb.rank.icon);
        return Mb ? Vb * (Mb.width / Mb.height) : Vb
      }(bb, Mb) + pb.HORIZONTAL_PADDING : (Mb.glyphsShown(bb.text), wb.font = gb(bb.size), wb.measureText(bb.text).width)
    }

    function sb(bb, wb, Mb) {
      if (0 === bb.length) return {
        width: 0,
        height: 0,
        sizes: []
      };
      let eb = 0;
      for (const pb of bb) eb = Math.max(eb, Fb(pb));
      const Hb = [];
      let Vb = Eb(void 0, bb[0]);
      for (let pb = 0; pb < bb.length; pb++) {
        const eb = Vb;
        Vb += Bb(bb[pb], wb, Mb), Vb += Eb(bb[pb], bb[pb + 1]), Hb.push({
          x: eb,
          width: Vb - eb
        })
      }
      return {
        width: Vb,
        height: eb + pb.VERTICAL_PADDING,
        sizes: Hb
      }
    }

    function mb(bb, wb, Mb, eb, Hb, pb, Vb) {
      wb += Eb(void 0, bb[0]);
      for (let gb = 0; gb < bb.length; gb++) {
        const lb = hb(bb[gb], wb, Mb, eb, Hb, pb, Vb);
        wb += 0 === lb ? 0 : lb + Eb(bb[gb], bb[gb + 1])
      }
    }

    function hb(bb, wb, Mb, eb, Hb, lb, Lb, Ib) {
      var Ob;
      if ("icon" === bb.kind) {
        const eb = lb.iconImage(bb.icon);
        return eb && Lb.push({
          image: eb,
          x: wb,
          y: Mb + pb.VERTICAL_PADDING / 2,
          size: bb.size
        }), bb.size
      }
      if ("rank" === bb.kind) {
        const gb = null !== Ib && void 0 !== Ib ? Ib : Bb(bb, Hb, lb);
        return function(bb, wb, Mb, eb, Hb, gb, lb) {
          var Lb, Ib;
          const {
            rank: Ob
          } = bb;
          gb.fillStyle = Ob.mainRGB, gb.fillRect(wb, Mb, eb, Hb);
          const Ub = lb.rankIcon(Ob.icon);
          if (!Ub) return;
          const tb = Vb / Ub.height,
            Cb = wb + (eb - Ub.width * tb) / 2,
            Eb = Mb + (Hb - Vb) / 2,
            Fb = new Path2D(Ub.path),
            Bb = pb.TEXT_SHADOW_WIDTH,
            sb = (null === (Lb = Ob.nameTag) || void 0 === Lb ? void 0 : Lb.iconShadowRGB) || "black";
          for (const pb of [-1, 1])
            for (const bb of [-1, 1]) Xb(gb, Fb, Cb + Bb * pb, Eb + Bb * bb, tb, sb);
          Xb(gb, Fb, Cb, Eb, tb, (null === (Ib = Ob.nameTag) || void 0 === Ib ? void 0 : Ib.iconRGB) || "white")
        }(bb, wb, Mb, gb, eb, Hb, lb), gb
      }
      if (0 === bb.text.length) return 0;
      const Ub = gb(bb.size);
      Hb.font = Ub;
      const tb = null !== Ib && void 0 !== Ib ? Ib : Hb.measureText(bb.text).width;
      return function(bb, wb, Mb, eb, Hb, Vb) {
        const gb = pb.TEXT_SHADOW_WIDTH;
        Vb.font = eb, Vb.fillStyle = "black";
        for (const pb of [-1, 1])
          for (const eb of [-1, 1]) Vb.fillText(bb, wb + gb * pb, Mb + gb * eb);
        Vb.fillStyle = Hb, Vb.fillText(bb, wb, Mb)
      }(bb.text, wb, Mb + eb - pb.VERTICAL_PADDING + 5, Ub, null !== (Ob = bb.colour) && void 0 !== Ob ? Ob : "white", Hb), tb
    }

    function zb(bb, wb) {
      for (const {
          image: Mb,
          x: eb,
          y: Hb,
          size: pb
        }
        of bb) wb.imageSmoothingEnabled = !1, wb.drawImage(Mb, eb, Hb, pb, pb)
    }

    function Xb(bb, wb, Mb, eb, Hb, pb) {
      bb.save(), bb.translate(Mb, eb), bb.scale(Hb, Hb), bb.fillStyle = pb, bb.fill(wb), bb.restore()
    }
  },
  37528: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => nb,
      e: () => ww,
      i: () => ab,
      k: () => ub,
      n: () => db,
      r: () => Pb,
      t: () => Hw,
      x: () => ib,
      B: () => Gb
    });
    var eb = Mb(5315),
      Hb = Mb(5331),
      pb = Mb(35334),
      Vb = Mb(4659),
      gb = Mb(4653),
      lb = Mb(1499),
      Lb = Mb(37455),
      Ib = Mb(110),
      Ob = Mb(1329),
      Ub = Mb(37471),
      tb = Mb(37530),
      Cb = Mb(37534),
      Eb = Mb(9503),
      Fb = Mb(8894),
      Bb = Mb(9076),
      sb = Mb(9190),
      mb = Mb(9344),
      hb = Mb(9364);
    const zb = {
      youtube: Eb.i,
      "person-military-pointing": Fb.f,
      sparkle: Bb.f,
      user: sb.e,
      wrench: mb.g,
      zap: hb.d,
      ...Ub.d
    };

    function Xb(bb) {
      const [wb, Mb, , , eb] = bb.icon;
      return {
        width: wb,
        height: Mb,
        path: "string" === typeof eb ? eb : eb.join(" ")
      }
    }
    const xb = new Map(Object.entries(zb).map((bb => {
      let [wb, Mb] = bb;
      return [wb, Xb(Mb)]
    })));
    let jb = !1;
    const Kb = new Set;
    var rb = Mb(37544);
    const Rb = "Jetbrains Mono",
      Db = "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+2248,U+26A1,U+2713,U+FEFF,U+FFFD",
      cb = "U+0100-0130,U+0132-0151,U+0154-017F,U+018F-0190,U+0192,U+019B,U+01A0-01A1,U+01AF-01B0,U+01CD-01CE,U+01D0,U+01D2,U+01D4,U+01D6,U+01D8,U+01DA,U+01DC,U+01E6-01E7,U+01EA-01EB,U+01F4-01F5,U+01FC-01FF,U+0218-021B,U+0232-0233,U+0237,U+0259,U+02B9-02BA,U+02C7,U+02C9,U+02D8-02D9,U+02DB,U+02DD,U+02F3,U+02F7,U+0300-0303,U+0306-0307,U+0309-030C,U+030F,U+0312,U+031B,U+0323,U+0325-0328,U+0336-0338,U+0374-0375,U+037E,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03CF,U+03D5-03D7,U+0401-040C,U+040E-044F,U+0451-045C,U+045E-045F,U+0490-0493,U+049A-049B,U+04A2-04A3,U+04AE-04B1,U+04B6-04B7,U+04BA-04BB,U+04D8-04D9,U+04DC-04DF,U+04E4-04E9,U+04F4-04F5,U+0AEA,U+1E80-1E85,U+1E9E,U+1EA0-1EF9,U+2070,U+2074-207A,U+207C,U+2080-2089,U+20AB,U+20AE,U+20B4,U+20BD,U+20BF,U+2102,U+210D,U+2113,U+2115-2116,U+2119-211A,U+211D,U+2124,U+212E,U+2140,U+218A-218B,U+2194-2199,U+219D-219E,U+21A0,U+21A2-21A3,U+21A5-21A7,U+21A9-21AA,U+21AD,U+21BE,U+21C9,U+21D0-21D4,U+21DB,U+21DE-21DF,U+21E5,U+21E7-21E8,U+21EA,U+2200-220C,U+220E-2211,U+2213,U+2218-221A,U+221E,U+2223-2225,U+2227-222B,U+2234-2239,U+223C,U+223E,U+2243,U+2245,U+2247,U+2249,U+224B,U+224D,U+2254,U+2257,U+225F-2265,U+226A-2273,U+227A-227C,U+2282-2289,U+228E-2299,U+229B-22A5,U+22B4,U+22B8,U+22BB-22BD,U+22C2-22C4,U+22C6,U+22C8-22CA,U+22CE,U+22D0,U+22E2,U+22EE-22F1,U+2302-2305,U+2308-230B,U+2318,U+231C-231F,U+2324-2326,U+2328,U+232B,U+2336-237A,U+2389-238B,U+2395,U+239B-23AD,U+23CE,U+23FB-23FE,U+2400-2421,U+2423-2424,U+2500-25A1,U+25AA-25AB,U+25B2-25CC,U+25CE-25CF,U+25D4-25D5,U+25E6-25EB,U+25EF,U+25F6,U+266D,U+266F,U+2687,U+26A0,U+2715,U+2717,U+2736,U+276E-2771,U+2794,U+279C-279E,U+27C5-27C6,U+27DC,U+27E6-27EB,U+27F5-27F7,U+2916,U+294A,U+2987-2988,U+2A00,U+2A05-2A06,U+2B58,U+E0A0-E0A2,U+E0B0-E0B3,U+FE62,U+FF5B,U+FF5D,U+16910,U+1D538-1D539,U+1D53B-1D53E,U+1D540-1D544,U+1D546,U+1D54A-1D550,U+1D552-1D56B";

    function Yb(bb) {
      return bb.split(",").map((bb => {
        const [wb, Mb = wb] = bb.slice(2).split("-");
        return [parseInt(wb, 16), parseInt(Mb, 16)]
      }))
    }
    const Zb = {
        latin: Yb(Db),
        rest: Yb(cb)
      },
      fb = new RegExp(`[${Zb.rest.map((bb=>{let[wb,Mb]=bb;return`\\u{${wb.toString(16)}}-\\u{${Mb.toString(16)}}`})).join("")}]`, "u");

    function Ab(bb) {
      return wb => {
        console.warn(`[bloxd-wasm-client] the text font's ${bb} file did not load`, wb)
      }
    }
    const Wb = 397,
      Jb = 1,
      Sb = {
        translate: bb => [bb],
        keyBindingText: bb => bb,
        isFriend: () => !1,
        hiddenNames: {},
        loadsFontRest: !1
      };
    let Nb = null,
      vb = 0,
      Qb = "none";

    function Gb() {
      return vb
    }
    const qb = new Set;

    function ab(bb) {
      return qb.add(bb), () => {
        qb.delete(bb)
      }
    }

    function ib() {
      vb++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? Qb = "all" : "none" === Qb && (Qb = "notBoards");
      for (const bb of qb) bb()
    }(0, Ub.j)((() => {
      ib(!1)
    })), (0, lb.p)((() => {
      (function() {
        const bb = jb;
        return jb = !1, bb
      })() && ib(!1)
    }));
    const ub = new class {
      constructor(bb) {
        this.loaded = bb, this.latin = null, this.rest = null, this.restWanted = !1
      }
      load() {
        if (null === this.latin) {
          this.latin = new FontFace(Rb, `url(${(0,rb.e)()}) format("woff2")`, {
            unicodeRange: Db
          }).load().then((bb => {
            document.fonts.add(bb), this.loaded()
          }), Ab("Latin"));
          const bb = new FontFace(Rb, `url(${(0,rb.f)()}) format("woff2")`, {
            unicodeRange: cb,
            display: "swap"
          });
          document.fonts.add(bb), bb.loaded.then((() => {
            this.loaded()
          }), Ab("rest")), this.rest = bb, this.restWanted && bb.load()
        }
        return this.latin
      }
      loadRest() {
        var bb;
        this.restWanted || (this.restWanted = !0, null === (bb = this.rest) || void 0 === bb || bb.load())
      }
      async untilLoadedFor(bb) {
        await this.load(), this.loadFor(bb), await document.fonts.load(`16px '${Rb}'`, bb).catch((wb => {
          console.warn("[bloxd-wasm-client] the text font did not load for", bb, wb)
        }))
      }
      loadFor(bb) {
        !this.restWanted && fb.test(bb) && this.loadRest()
      }
    }(ib);

    function db(bb) {
      Object.assign(Sb, bb), Sb.loadsFontRest && ub.loadRest(), ib(!1)
    }

    function Pb(bb) {
      bb !== Nb && (Nb = bb, ib())
    }

    function nb(bb) {
      if ("none" === Qb || null === bb) return;
      bb(Wb, "all" === Qb ? 0 : Jb, new Uint8Array(0)) && (Qb = "none")
    }
    const yb = new Map,
      ob = new Map;

    function Tb(bb, wb, Mb) {
      var eb;
      const Hb = Mb ? `${bb}#${Mb.join(",")}` : bb,
        pb = yb.get(Hb);
      if (pb) return pb.image;
      const Vb = {
        image: null !== (eb = ob.get(Hb)) && void 0 !== eb ? eb : null
      };
      return yb.set(Hb, Vb), wb().then((async bb => {
        if (null === bb) return null;
        const wb = new Image;
        wb.crossOrigin = "anonymous", wb.src = bb, await wb.decode();
        const eb = await createImageBitmap(wb);
        if (!Mb) return eb;
        try {
          return function(bb, wb) {
            let [Mb, eb, Hb] = wb;
            const pb = (0, Lb.g)(bb.width, bb.height),
              {
                canvas: Vb
              } = pb;
            return pb.drawImage(bb, 0, 0), pb.globalCompositeOperation = "multiply", pb.fillStyle = `rgb(${Mb}, ${eb}, ${Hb})`, pb.fillRect(0, 0, Vb.width, Vb.height), pb.globalCompositeOperation = "destination-in", pb.drawImage(bb, 0, 0), Vb
          }(eb, Mb)
        } finally {
          eb.close()
        }
      })).then((bb => {
        yb.get(Hb) === Vb && ob.delete(Hb), bb !== Vb.image && (Vb.image = bb, ib(!1))
      }), (wb => {
        console.warn(`[bloxd-wasm-client] text icon ${bb} did not load`, wb), yb.get(Hb) === Vb && (yb.delete(Hb), ob.delete(Hb), null !== Vb.image && ib(!1))
      })), Vb.image
    }(0, tb.c)((() => {
      ob.clear();
      for (const [bb, {
          image: wb
        }] of yb) null !== wb && ob.set(bb, wb);
      yb.clear(), ib(!1)
    }));
    const kb = new Set(eb.d),
      bw = new Set(["CubeBlock", "SlabBlock", "StairsBlock"]);

    function ww() {
      (0, Cb.g)().catch((() => {}))
    }

    function Mw(bb) {
      return kb.has(bb) ? Tb(`icon:${bb}`, (async () => {
        var wb, Mb;
        return null !== (wb = null === (Mb = (0, tb.h)()) || void 0 === Mb ? void 0 : Mb.textureUrl(bb)) && void 0 !== wb ? wb : (await (0, Cb.c)()).ingameIconUrl(bb)
      })) : null
    }
    let ew = "unasked";
    const Hw = {
      get canSeeRealPlayerNames() {
        return Ib.featureFlags.canSeeRealPlayerNames
      },
      get canSeePlayerWrittenText() {
        return Ib.featureFlags.canSeePlayerWrittenText
      },
      get localPlayerDbId() {
        return Nb
      },
      shownPlayerName: bb => (0, Ob.c)(bb, Sb.hiddenNames),
      translate: (bb, wb) => {
        const Mb = "object" === typeof wb && null !== wb ? wb : void 0;
        return Sb.translate(bb, (0, Ob.g)(Mb, Sb.hiddenNames))
      },
      keyBindingText: bb => Sb.keyBindingText(bb),
      isFriend: bb => Sb.isFriend(bb, Sb.hiddenNames),
      iconImage: function(bb) {
        if (kb.has(bb)) return Mw(bb);
        if ("unasked" === ew && (ew = "loading", (0, gb.f)().then((() => {
            ew = "in", ib(!1)
          }), (bb => {
            ew = "failed", console.warn("[bloxd-wasm-client] the item sprite table did not load, so text item icons stay blank", bb)
          }))), "in" !== ew) return null;
        const wb = (0, Vb.c)(bb),
          Mb = void 0 === wb ? void 0 : (0, pb.itemTypeNameOf)(wb);
        if ("Gun" === Mb) return null;
        const eb = (0, gb.e)(bb),
          lb = void 0 !== Mb && bw.has(Mb);
        if (lb && void 0 === eb) return null;
        const Lb = void 0 !== wb && "GrayscaleArmour" === (0, pb.itemTypeOf)(wb) || Object.hasOwn(Hb.b, bb),
          Ib = null !== eb && void 0 !== eb ? eb : bb;
        return Tb(lb ? `block:${Ib}` : `item:${Ib}`, (async () => {
          var bb, wb;
          const Mb = (0, tb.h)(),
            eb = await (0, Cb.g)();
          return null !== (bb = null !== (wb = null === Mb || void 0 === Mb ? void 0 : Mb.textureUrl(Ib)) && void 0 !== wb ? wb : eb.itemSpriteUrl(Ib)) && void 0 !== bb ? bb : lb ? null : eb.notFoundUrl()
        }), Lb ? (0, Hb.c)(bb) : void 0)
      },
      effectImage: Mw,
      rankIcon: function(bb) {
        const wb = xb.get(bb);
        if (wb) return wb;
        const Mb = (0, lb.f)(bb, (0, lb.j)(bb));
        if (!Mb) return (0, lb.i)("brands") && (0, lb.i)("solid") ? Kb.has(bb) || (Kb.add(bb), console.warn(`[bloxd-wasm-client] unknown rank icon "${bb}": not in the bundled Font Awesome subset, so its tag draws no icon`)) : jb = !0, null;
        const eb = Xb(Mb);
        return xb.set(bb, eb), eb
      },
      glyphsShown: bb => {
        ub.loadFor(bb)
      }
    }
  },
  37544: (bb, wb, Mb) => {
    function eb() {
      return Mb(37546)
    }

    function Hb() {
      return Mb(37550)
    }

    function pb(bb) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(bb)
    }
    Mb.d(wb, {
      b: () => pb,
      e: () => eb,
      f: () => Hb
    })
  },
  37546: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37550: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);