export const id = 184;
export const ids = [184];
export const modules = {
  9937: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir,
      h: () => Er,
      l: () => xr,
      p: () => pr,
      r: () => fr,
      u: () => Nr
    });
    var Zr = Qr(34),
      Wr = Qr(2156),
      ar = Qr(1541),
      jr = Qr(1518);
    const Ir = rr => {
        var Sr, Qr;
        return (0, jr.j)() && null !== (Sr = null === (Qr = (0, ar.g)()) || void 0 === Qr ? void 0 : Qr.getGlyphForNoaAction(rr)) && void 0 !== Sr ? Sr : null
      },
      fr = "controllerGlyph:",
      Er = rr => {
        var Sr, Qr;
        return null !== (Sr = null === (Qr = (0, ar.g)()) || void 0 === Qr ? void 0 : Qr.getPadGlyphIconName(rr)) && void 0 !== Sr ? Sr : `${fr}xbox/${rr}`
      },
      pr = rr => rr.startsWith(fr),
      xr = rr => {
        var Sr, Qr;
        return pr(rr) && null !== (Sr = null === (Qr = (0, ar.g)()) || void 0 === Qr ? void 0 : Qr.getPadGlyphIconUrl(rr)) && void 0 !== Sr ? Sr : null
      },
      mr = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", jr.e, Wr.f, Wr.d],
      Nr = rr => {
        const Sr = mr.map((Sr => Zr.i.subscribe(Sr, rr)));
        return () => {
          for (const rr of Sr) Zr.i.unsubscribe(rr)
        }
      }
  },
  43048: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      openCharacterPreview: () => nS
    });
    var Zr = Qr(39609),
      Wr = Qr(2383),
      ar = Qr(672),
      jr = Qr(38638),
      Ir = Qr(3148),
      fr = Qr(38625),
      Er = Qr(41725),
      pr = Qr(41934),
      xr = Qr(42949),
      mr = Qr(38555),
      Nr = Qr(42085),
      Ur = Qr(38679),
      tr = Qr(42100),
      hr = Qr(43008),
      zr = Qr(38552),
      Yr = Qr(42974),
      nr = Qr(42966),
      er = Qr(38754),
      Kr = Qr(40313),
      yr = Qr(40699),
      Br = Qr(40733),
      Tr = Qr(40728),
      vr = Qr(40701),
      Or = Qr(4354),
      Lr = Qr(39038);
    const lr = [0, 1, 0];
    class Xr {
      constructor(rr) {
        this.node = rr, this.nodesByName = new Map, this.rests = new Map, this.clips = new Map;
        for (const Sr of rr.getChildTransformNodes()) this.nodesByName.set(Sr.name, Sr), this.rests.set(Sr.name, (0, Lr.g)(Sr))
      }
      play(rr, Sr) {
        const Qr = this.clip(rr);
        Qr && (Qr.pose.pose(Sr), (0, Lr.o)(Qr.pose, Qr.nodes))
      }
      clip(rr) {
        let Sr = this.clips.get(rr);
        if (void 0 === Sr) {
          const Qr = (0, Lr.h)(rr, (rr => {
            var Sr;
            return null !== (Sr = this.rests.get(rr)) && void 0 !== Sr ? Sr : null
          }));
          Sr = Qr && {
            pose: Qr,
            nodes: Qr.boneNames.map((rr => this.nodesByName.get(rr)))
          }, this.clips.set(rr, Sr)
        }
        return Sr
      }
    }

    function Pr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return new mr.kU(rr[0] * Sr, rr[1] * Sr, rr[2] * Sr)
    }
    class Hr {
      constructor(rr, Sr) {
        this.Dt = rr, this.scale = Sr, this.petNodes = new Map, this.particleTextures = new Map, this.petName = "pet_none", this.shownPet = null, this.petIsolated = !1, this.auraSeq = 0, this.aura = null, this.auraName = "aura_none", this.auraTuning = null, this.auraDrawn = Promise.resolve()
      }
      async setPet(rr) {
        var Sr;
        this.petName = rr, null === (Sr = this.shownPet) || void 0 === Sr || Sr.node.VK(!1), this.shownPet = null;
        const Qr = (0, yr.i)(rr);
        if (!Qr) return;
        let Zr;
        try {
          Zr = await this.petNode(Qr.model)
        } catch {
          return
        }
        this.petName === rr && (Zr.node.VK(!0), this.shownPet = Zr)
      }
      setAura(rr) {
        const Sr = (0, yr.h)(rr);
        return rr === this.auraName && Sr === this.auraTuning || (this.auraName = rr, this.auraTuning = Sr, this.auraDrawn = this.showAura(rr, Sr)), this.auraDrawn
      }
      async showAura(rr, Sr) {
        var Qr, Zr, Wr;
        const ar = ++this.auraSeq;
        if (null === (Qr = this.aura) || void 0 === Qr || Qr.dispose(!1), this.aura = null, !Sr) return;
        const jr = await (0, Kr.i)().catch((Sr => (console.error(`Couldn't load the preview's particles for ${rr}:`, Sr), null)));
        if (!jr || ar !== this.auraSeq) return;
        const {
          scale: Ir
        } = this, {
          opts: fr,
          half: Er
        } = (0, Tr.e)(Sr), pr = jr(this.Dt, `aura|${rr}`, fr.sx), xr = this.particleTexture(Sr.particles.texture);
        pr.texture = xr, (0, vr.b)(pr, {
          ...fr,
          minSize: fr.minSize * Ir,
          maxSize: fr.maxSize * Ir,
          minEmitPower: fr.minEmitPower * Ir,
          maxEmitPower: fr.maxEmitPower * Ir,
          gravity: fr.gravity && [fr.gravity[0] * Ir, fr.gravity[1] * Ir, fr.gravity[2] * Ir]
        }), pr.emitRate = fr.emitRate, pr.createBoxEmitter(Pr(null !== (Zr = fr.dir1) && void 0 !== Zr ? Zr : lr), Pr(null !== (Wr = fr.dir2) && void 0 !== Wr ? Wr : lr), Pr(Er, -Ir), Pr(Er, Ir));
        const [Nr, Ur, tr] = Sr.offset;
        pr.emitter = new mr.kU(Nr * Ir, (Ur - 1) * Ir, tr * Ir), pr.start(), this.aura = pr;
        const hr = xr.mirror;
        hr.isReady() || hr.loadingError || await new Promise((Sr => {
          hr.onLoadObservable.addOnce((() => {
            Sr()
          })), hr.getInternalTexture().onErrorObservable.addOnce((Qr => {
            let {
              message: Zr
            } = Qr;
            console.error(`Preview aura ${rr}'s texture failed to load: ${Zr}`), Sr()
          }))
        }))
      }
      writePose(rr) {
        var Sr;
        if (!this.shownPet) return;
        const Qr = (0, yr.i)(this.petName),
          {
            scale: Zr
          } = this;
        if (this.petIsolated) return void this.writeIsolatedPose(this.shownPet, Qr);
        const [Wr, ar, jr] = Qr.followOffset, {
          node: Ir
        } = this.shownPet;
        Ir.position.set(Wr * Zr, (ar + (0, Br.e)(Qr, rr) - 1) * Zr, jr * Zr), Ir.rotation.y = Qr.yawOffset, Ir.Tx.Srr(Qr.scale * Zr), null !== (Sr = Qr.clips) && void 0 !== Sr && Sr.fly && this.shownPet.play(Qr.clips.fly, rr)
      }
      isolatePet() {
        this.petIsolated = !0
      }
      writeIsolatedPose(rr, Sr) {
        var Qr, Zr, Wr;
        const {
          node: ar
        } = rr;
        ar.position.Srr(0), ar.rotation.y = Sr.yawOffset, ar.Tx.Srr(1);
        const jr = null !== (Qr = null === (Zr = Sr.clips) || void 0 === Zr ? void 0 : Zr.perch) && void 0 !== Qr ? Qr : null === (Wr = Sr.clips) || void 0 === Wr ? void 0 : Wr.fly;
        jr && rr.play(jr, 0);
        const {
          min: Ir,
          max: fr
        } = ar.getHierarchyBoundingVectors(!0), Er = 2 * this.scale / (fr.y - Ir.y);
        ar.Tx.Srr(Er), ar.position.set(-(Ir.x + fr.x) / 2 * Er, -(Ir.y + fr.y) / 2 * Er, -(Ir.z + fr.z) / 2 * Er)
      }
      petNode(rr) {
        let Sr = this.petNodes.get(rr);
        return Sr || (Sr = (0, Yr.f)(this.Dt, rr, void 0, {
          keepTransforms: !0,
          backFaceCulling: !0
        }).then((Sr => {
          const Qr = new nr.b(`pet|${rr}`, this.Dt);
          Qr.VK(!1);
          for (const rr of Sr.rootNodes) rr.parent = Qr, (0, Yr.k)(rr, !0);
          return new Xr(Qr)
        }), (Sr => {
          throw this.petNodes.delete(rr), console.error(`Failed to load preview pet ${rr}:`, Sr), Sr
        })), this.petNodes.set(rr, Sr)), Sr
      }
      particleTexture(rr) {
        let Sr = this.particleTextures.get(rr);
        return Sr || (Sr = (0, er.p)(this.Dt, (0, Or.e)(rr)), this.particleTextures.set(rr, Sr)), Sr
      }
    }
    var qr = Qr(42243),
      Rr = Qr(42256),
      gr = Qr(42275);

    function Cr(rr) {
      const Sr = [],
        Qr = [],
        Zr = [],
        Wr = [],
        ar = void 0 !== rr.width ? rr.width : void 0 !== rr.size ? rr.size : 1,
        jr = void 0 !== rr.height ? rr.height : void 0 !== rr.size ? rr.size : 1,
        Ir = 0 === rr.sideOrientation ? 0 : rr.sideOrientation || Rr.b.DEFAULTSIDE,
        fr = ar / 2,
        Er = jr / 2;
      Qr.push(-fr, -Er, 0), Zr.push(0, 0, -1), Wr.push(0, gr.b ? 1 : 0), Qr.push(fr, -Er, 0), Zr.push(0, 0, -1), Wr.push(1, gr.b ? 1 : 0), Qr.push(fr, Er, 0), Zr.push(0, 0, -1), Wr.push(1, gr.b ? 0 : 1), Qr.push(-fr, Er, 0), Zr.push(0, 0, -1), Wr.push(0, gr.b ? 0 : 1), Sr.push(0), Sr.push(1), Sr.push(2), Sr.push(0), Sr.push(2), Sr.push(3), Rr.b._ComputeSides(Ir, Qr, Sr, Zr, Wr, rr.frontUVs, rr.backUVs);
      const pr = new Rr.b;
      return pr.indices = Sr, pr.positions = Qr, pr.normals = Zr, pr.uvs = Wr, pr
    }

    function Mr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Zr = new qr.c(rr, Qr);
      Sr.sideOrientation = qr.c._GetDefaultSideOrientation(Sr.sideOrientation), Zr._originalBuilderSideOrientation = Sr.sideOrientation;
      return Cr(Sr).applyToMesh(Zr, Sr.updatable), Sr.sourcePlane && (Zr.translate(Sr.sourcePlane.normal, -Sr.sourcePlane.d), Zr.setDirection(Sr.sourcePlane.normal.scale(-1))), Zr
    }
    let Gr = !1;
    Gr || (Gr = !0, Rr.b.CreatePlane = Cr, qr.c.CreatePlane = (rr, Sr, Qr, Zr, Wr) => Mr(rr, {
      size: Sr,
      width: Sr,
      height: Sr,
      sideOrientation: Wr,
      updatable: Zr
    }, Qr));
    var kr = Qr(43041),
      Ar = Qr(43037),
      Vr = Qr(37613),
      ir = Qr(37635),
      wr = Qr(37718),
      cr = Qr(40434),
      Fr = Qr(40445),
      or = Qr(40436);
    class br {
      constructor(rr, Sr) {
        this.scale = Sr, this.plane = void 0, this.canvas = document.createElement("canvas"), this.texture = void 0, this.widthPx = 0, this.heightPx = 0, this.shown = null, this.stopRedrawing = null, this.texture = new kr.e("previewNametag", this.canvas, rr, !1, hr.e.BILINEAR_SAMPLINGMODE), this.texture.hasAlpha = !0;
        const Qr = new tr.StandardMaterial("previewNametag", rr);
        Qr.diffuseTexture = this.texture, Qr.useAlphaFromDiffuseTexture = !0, Qr.emissiveColor = Ur.Color3.White(), Qr.disableLighting = !0, this.plane = Mr("previewNametag", {
          size: 1
        }, rr), this.plane.material = Qr, this.plane.billboardMode = Ar.d.BILLBOARDMODE_ALL, this.plane.renderingGroupId = or.c, this.plane.ut = !1, this.plane.VK(!1)
      }
      set(rr) {
        var Sr;
        if (rr !== this.shown) {
          if (this.shown = rr, null === (Sr = this.stopRedrawing) || void 0 === Sr || Sr.call(this), this.stopRedrawing = null, null === rr || void 0 === rr || !rr.name) return this.heightPx = 0, void this.plane.VK(!1);
          wr.i.untilLoadedFor(rr.name).then((() => {
            this.shown === rr && (this.draw(rr), this.stopRedrawing = (0, wr.f)((() => {
              this.draw(rr)
            })))
          }))
        }
      }
      update(rr) {
        if (0 === this.heightPx) return;
        const Sr = -this.scale,
          Qr = Fr.d * this.scale + Sr,
          Zr = rr.position,
          Wr = Math.hypot(Zr.x, Zr.y - Qr, Zr.z) / this.scale,
          ar = 2 * Wr * Math.tan(rr.fov / 2) * rr.MU().getAspectRatio(rr),
          jr = Math.min((0, Fr.f)(Wr), .9 * ar / (cr.i.TEXT_PLANE_RATIO * this.widthPx)),
          Ir = jr * cr.i.TEXT_PLANE_RATIO * this.heightPx;
        this.plane.position.set(0, Sr + (Fr.d + .5 * Ir - .05) * this.scale, 0);
        const fr = jr * cr.i.TEXT_PLANE_RATIO * this.scale;
        this.plane.Tx.set(fr * this.widthPx, fr * this.heightPx, 1)
      }
      draw(rr) {
        const Sr = (0, Vr.d)(this.canvas),
          Qr = (0, ir.c)({
            name: rr.name,
            ranks: rr.ranks,
            colour: rr.nameColour,
            mesh: !0
          }, Sr, wr.p);
        if (null === Qr) return this.heightPx = 0, void this.plane.VK(!1);
        this.texture.scaleTo(Math.ceil(2 * Qr.width), Math.ceil(2 * Qr.height)), Sr.scale(2, 2), Qr.draw(Sr), this.texture.update(), this.widthPx = Qr.width, this.heightPx = Qr.height, this.plane.VK(!0)
      }
    }
    var Jr = Qr(38650),
      Dr = (Qr(42980), Qr(42318), Qr(42986), Qr(35509)),
      dr = Qr(37596),
      sr = Qr(43054);
    let ur, rS, SS, QS, ZS, WS, aS, jS, IS, fS, ES, pS;
    const xS = document.createElement("canvas");
    async function mS() {
      await new Promise((rr => {
        setTimeout((() => {
          rr()
        }), 100)
      }))
    }
    xS.classList.add("CharCustomisationPreviewCanvas");
    const NS = {};

    function US(rr, Sr) {
      if (!QS) return;
      const jr = (0, Wr.e)();
      if (jr.Qq(!1), Zr.c.Player.meshApi.updatePlayerCosmetic(jr.fC, aS, rr, Sr, !0), "cape" === rr)
        if (Sr === ar.g) ZS.VK(!1);
        else {
          ZS.VK(!0);
          ZS.material.diffuseTexture = new hr.e(Qr(40378)(`./cape_${Sr}.png`), ZS.eC(), {
            invertY: !1,
            samplingMode: hr.e.NEAREST_NEAREST_MIPLINEAR
          })
        }
      "pet" === rr ? NS.pet = fS.setPet(Sr) : "aura" === rr ? NS.aura = fS.setAura(Sr) : NS[rr] = IS.update(rr, Sr)
    }

    function tS(rr, Sr) {
      const [Qr, Zr] = (0, dr.d)(rr, Sr, window.devicePixelRatio);
      ur.setSize(Math.max(Qr, Math.floor(rr)), Math.max(Zr, Math.floor(Sr)))
    }
    let hS = 0;
    class zS {
      constructor(rr, Sr) {
        var Qr;
        this.framing = Sr, this.ready = pS, this.dev = {
          canvas: () => xS,
          captureFrame: rr => (0, sr.b)((() => this.closed ? null : xS), (rr => {
            const Sr = SS.onAfterRenderObservable.addOnce(rr);
            return () => {
              SS.onAfterRenderObservable.remove(Sr)
            }
          }), rr),
          isolateHead(rr) {
            const Sr = WS.getNodeNames(aS);
            for (let Qr = 0; Qr < Sr.length; Qr++) "HeadMesh" !== Sr[Qr] && "__root__" !== Sr[Qr] && "TorsoNode" !== Sr[Qr] && WS.setNodeEnabled(aS, Qr, !1);
            if (rr) {
              const rr = WS.getNamedNode(aS, "HeadMesh");
              WS.setNodeDisableColorWrite(aS, rr, !0, (rr => {
                const Sr = new tr.StandardMaterial(`${rr.name}_depthOnly`, rr.eC());
                return Sr.disableColorWrite = !0, Sr
              }))
            }
            WS.setPosition(aS, 0, -12, 0), ES.set(null), US("pet", "pet_none"), US("aura", "aura_none")
          },
          isolatePet() {
            const rr = WS.getNodeNames(aS).length;
            for (let Sr = 0; Sr < rr; Sr++) WS.setNodeEnabled(aS, Sr, !1);
            ZS.VK(!1), US("aura", "aura_none"), ES.set(null), fS.isolatePet()
          }
        }, this.closed = !1, this.resetCamera(), null === (Qr = ES) || void 0 === Qr || Qr.set(null);
        const Zr = rr.getBoundingClientRect();
        tS(Zr.width, Zr.height), hS++, ur.stopRenderLoop(), ur.runRenderLoop((() => {
          var rr, Sr, Qr, Zr;
          null === (rr = jS) || void 0 === rr || rr.render(ur.getDeltaTime());
          const Wr = performance.now() / 1e3;
          null === (Sr = IS) || void 0 === Sr || Sr.writePoses(Wr), null === (Qr = fS) || void 0 === Qr || Qr.writePose(Wr), null === (Zr = ES) || void 0 === Zr || Zr.update(rS), SS.render()
        }))
      }
      isReady() {
        return !!QS
      }
      setCosmetic(rr, Sr) {
        US(rr, Sr)
      }
      setNametag(rr) {
        var Sr;
        null === (Sr = ES) || void 0 === Sr || Sr.set(rr)
      }
      playEmote(rr) {
        if (!jS) return;
        if (!rr) return void jS.stopAnimation(fr.i.Emote);
        const Sr = (0, jr.d)((0, Ir.h)(rr).animation);
        jS.startAnimation(Sr, fr.i.Emote, 0, Ir.c)
      }
      async untilDrawn(rr) {
        if (await mS(), "cape" === rr && ZS) {
          const rr = ZS.material,
            Sr = null === rr || void 0 === rr ? void 0 : rr.diffuseTexture;
          Sr && !Sr.isReady() && (await new Promise((rr => {
            Sr.onLoadObservable.addOnce((() => {
              rr()
            }))
          })), await mS())
        }
        NS[rr] && (await NS[rr], await mS()), await SS.whenReadyAsync(), await new Promise((rr => {
          SS.onAfterRenderObservable.addOnce((() => {
            rr()
          }))
        }))
      }
      setOrbit(rr) {
        YS(rr)
      }
      resetCamera() {
        rS.inertialAlphaOffset = 0, rS.inertialBetaOffset = 0, rS.inertialRadiusOffset = 0, YS(Dr.d[this.framing])
      }
      resize(rr, Sr) {
        tS(rr, Sr)
      }
      close() {
        var rr;
        this.closed || (this.closed = !0, hS--, 0 === hS && (ur.stopRenderLoop(), null === (rr = ES) || void 0 === rr || rr.set(null)))
      }
    }

    function YS(rr) {
      let {
        yaw: Sr,
        pitch: Qr,
        radius: Zr,
        target: Wr
      } = rr;
      rS.alpha = Sr, rS.beta = Qr, Zr && (rS.radius = Zr), Wr && rS.target.set(Wr[0], Wr[1], Wr[2])
    }

    function nS(rr, Sr) {
      return rr.appendChild(xS), ur || function() {
        ur = new Er.d(xS, !0, {
          preserveDrawingBuffer: !0
        });
        const rr = (0, Wr.e)();
        ur.JZr = rr.Ox.engine.JZr, SS = new pr.c(ur), SS.clearColor = new Ur.d(0, 0, 0, 0), SS.ambientColor = new Ur.Color3(1, 1, 1), rS = new xr.d("fz", 0, 0, 1, mr.kU.Zero(), SS), rS.attachControl(xS, !0), rS.panningSensibility = 0, pS = (0, Zr.s)("Player", SS, !0).then((Sr => {
          QS = Sr.meshApi, ZS = Sr.capeMesh, WS = rr.Ox.bC;
          const Qr = 8.33;
          aS = (0, Zr.i)("Player", Qr, !0, !0), WS.setPosition(aS, 0, -8.33, 0);
          const Wr = WS.getNamedNode(aS, "BodyMesh");
          WS.attachTransformNode(ZS, aS, Wr), WS.set(aS, "aOpacity", 1), WS.hG(aS, "aOpacity", 1), IS = new Yr.d(SS, WS, aS), fS = new Hr(SS, Qr), ES = new br(SS, Qr), jS = new zr.AnimatorState, jS.gm = rr, jS.thinInstMgr = WS, jS.JC = aS, jS.tZr = WS.lZr(aS, 0), jS.modelLifeformType = "Player", jS.nodeNameAliases = (0, Jr.c)("Player").nodeNameAliases;
          const ar = ZS.mG().boundingBox;
          ZS.position.y = ((24 - ar.maximum.y + ar.minimum.y) / 2 - 1 / 32) / Qr, ZS.position.z = -1 / Qr, ZS.rotationQuaternion = null;
          const jr = Math.PI / 18,
            Ir = ar.maximum.y / Qr;
          ZS.rotation.x = jr;
          const fr = Math.cos(jr),
            Er = Math.sin(jr);
          ZS.position.y += Ir * (1 - fr) + 0 * Er, ZS.position.z -= Ir * Er + 0 * (1 - fr);
          const pr = new tr.StandardMaterial("capeMaterial", ZS.eC());
          ZS.material = pr;
          const xr = new Ur.Color3(1, 1, 1);
          pr.diffuseColor = new Ur.Color3, pr.specularColor = new Ur.Color3, pr.emissiveColor = new Ur.Color3, pr.ambientColor = new Ur.Color3, xr.scaleToRef(.43, pr.diffuseColor), xr.scaleToRef(1.75, pr.ambientColor), pr.freeze();
          const hr = new Nr.b("light", new mr.kU(-.1, 1, -.3), SS);
          hr.diffuse = new Ur.Color3(1, 1, 1), hr.specular = new Ur.Color3(1, 1, 1), hr.groundColor = new Ur.Color3(.5, .5, .5)
        }))
      }(), new zS(rr, Sr)
    }
  },
  37743: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir,
      e: () => jr
    });
    var Zr = Qr(4494);
    let Wr = null,
      ar = null;

    function jr() {
      return ar ??= Qr.e(242).then((() => Qr(37580))).then((rr => {
        let {
          ITEM_SPRITES: Sr,
          ITEM_SPRITES_WITHOUT_FILE: Qr,
          ITEM_FILES_WITHOUT_SPRITE: ar
        } = rr;
        Wr = function(rr, Sr, Qr) {
          const Wr = new Set,
            ar = (0, Zr.t)(Sr);
          let jr = 0;
          for (const [Zr, Ir] of rr.entries()) Zr === ar[jr] ? jr++ : Wr.add(Ir);
          if ("" !== Qr)
            for (const Ir of Qr.split(Zr.r)) Wr.add(Ir);
          return Wr
        }(Sr.split(Zr.r), Qr, ar)
      }), (rr => {
        throw ar = null, rr
      })), ar
    }

    function Ir(rr) {
      var Sr, Qr;
      return null !== (Sr = null === (Qr = Wr) || void 0 === Qr ? void 0 : Qr.has(rr)) && void 0 !== Sr && Sr
    }
  },
  35399: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar
    });
    var Zr = Qr(1371);

    function Wr() {
      var rr, Sr;
      return null !== (rr = null === (Sr = screen.orientation) || void 0 === Sr ? void 0 : Sr.type) && void 0 !== rr ? rr : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const ar = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Wr() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Wr(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Zr.Pt)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const rr of this.resizers) rr()
          }
        }), 1e3)
      }
      heldSizer(rr) {
        let Sr = !1;
        return () => {
          if (Sr && this.isHeld()) return null;
          const Qr = rr();
          return Sr ||= null !== Qr, Qr
        }
      }
      onRelease(rr) {
        return this.resizers.add(rr), () => {
          this.resizers.delete(rr)
        }
      }
    }
  },
  37613: (rr, Sr, Qr) => {
    function Zr(rr, Sr, Qr) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(rr, Sr).getContext("2d", Qr);
      const Zr = document.createElement("canvas");
      return Zr.width = rr, Zr.height = Sr, Zr.getContext("2d", Qr)
    }

    function Wr(rr, Sr) {
      return rr.getContext("2d", Sr)
    }
    Qr.d(Sr, {
      d: () => Wr,
      g: () => Zr
    })
  },
  43054: (rr, Sr, Qr) => {
    function Zr(rr, Sr, Qr) {
      return new Promise((Zr => {
        const Wr = setTimeout((() => {
            ar(), Zr(null)
          }), Qr),
          ar = Sr((() => {
            clearTimeout(Wr);
            const Sr = rr();
            Zr(null === Sr ? null : function(rr) {
              if (0 === rr.width || 0 === rr.height) return null;
              const Sr = document.createElement("canvas");
              Sr.width = rr.width, Sr.height = rr.height;
              const Qr = Sr.getContext("2d");
              return Qr ? (Qr.drawImage(rr, 0, 0), Sr) : null
            }(Sr))
          }))
      }))
    }
    Qr.d(Sr, {
      b: () => Zr
    })
  },
  37596: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar
    });
    const Zr = 4e5,
      Wr = 2;

    function ar(rr, Sr, Qr) {
      let [ar, jr] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [rr, Sr], Ir = Math.min(Number.isFinite(Qr) && Qr > 0 ? Qr : 1, Wr);
      const fr = Math.max(0, ar, rr) * Math.max(0, jr, Sr) * Ir * Ir;
      return fr > Zr && (Ir *= Math.sqrt(Zr / fr)), [Math.max(1, Math.floor(Math.max(0, rr) * Ir)), Math.max(1, Math.floor(Math.max(0, Sr) * Ir))]
    }
  },
  37642: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => yr,
      g: () => Lr,
      i: () => lr,
      m: () => Xr
    });
    var Zr = Qr(37644),
      Wr = Qr(7878),
      ar = Qr(7947),
      jr = Qr(37653),
      Ir = Qr(37661),
      fr = Qr(37667),
      Er = Qr(8285),
      pr = Qr(8418),
      xr = Qr(37671),
      mr = Qr(8637),
      Nr = Qr(7733),
      Ur = Qr(8913),
      tr = Qr(37679),
      hr = Qr(37684),
      zr = Qr(8942),
      Yr = Qr(37689),
      nr = Qr(37697),
      er = Qr(379);
    const Kr = {
        redTeam: ar.h,
        blueTeam: hr.c,
        greenTeam: nr.f,
        yellowTeam: zr.g,
        cyanTeam: fr.e,
        whiteTeam: Nr.faPlus,
        pinkTeam: pr.d,
        grayTeam: xr.c,
        blackTeam: tr.d,
        orangeTeam: Yr.g,
        lilacTeam: jr.f,
        purpleTeam: mr.c,
        magentaTeam: Ir.f,
        brownTeam: Zr.d,
        limeTeam: Wr.faBolt,
        lightGrayTeam: Er.f,
        lightBlueTeam: Ur.g
      },
      yr = Object.fromEntries(Object.values(Kr).map((rr => [Br(rr), rr])));

    function Br(rr) {
      return `team-${rr.iconName}`
    }
    const Tr = new Map;
    for (const [Pr, Hr] of Object.entries(Kr)) {
      const rr = Br(Hr),
        Sr = er.K[Pr];
      Sr && Tr.set(Sr.toLowerCase(), {
        icon: rr,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "white",
          iconShadowRGB: "black"
        },
        visible: !0
      })
    }
    let vr = !1;
    const Or = new Set;

    function Lr(rr) {
      if (rr !== vr) {
        vr = rr;
        for (const rr of Or) rr()
      }
    }

    function lr(rr) {
      var Sr;
      return "string" === typeof rr && vr && null !== (Sr = Tr.get(rr.toLowerCase())) && void 0 !== Sr ? Sr : null
    }

    function Xr(rr) {
      return Or.add(rr), () => {
        Or.delete(rr)
      }
    }
  },
  37726: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => pr,
      g: () => fr,
      j: () => Ir,
      k: () => Er
    });
    var Zr = Qr(2098);
    let Wr = null,
      ar = 0;
    const jr = new Set;

    function Ir() {
      return Wr
    }

    function fr() {
      return ar
    }

    function Er(rr) {
      Wr = rr, ar++, (0, Zr.b)();
      for (const Sr of jr) Sr()
    }

    function pr(rr) {
      jr.add(rr)
    }
  },
  37734: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      g: () => Ir
    });
    var Zr = Qr(37743);
    let Wr = null,
      ar = null;

    function jr() {
      return Wr ??= Qr.e(74).then((() => Qr(43057))).catch((rr => {
        throw Wr = null, rr
      })), Wr
    }

    function Ir() {
      return ar ??= Promise.all([jr(), (0, Zr.e)()]).then((rr => {
        let [Sr] = rr;
        return Sr
      }), (rr => {
        throw ar = null, rr
      })), ar
    }
  },
  37635: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => yr
    });
    var Zr = Qr(5223),
      Wr = Qr(1321),
      ar = Qr(672),
      jr = Qr(2179),
      Ir = Qr(37642),
      fr = Qr(37630);
    const Er = 10,
      pr = 3,
      xr = 3,
      mr = [{
        healthFraction: .25,
        colour: "#ff0000"
      }, {
        healthFraction: .5,
        colour: "#ffaa00"
      }, {
        healthFraction: 1,
        colour: "#00ff00"
      }],
      Nr = 64,
      Ur = 69,
      tr = {
        icon: jr.b,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "#f38ab6",
          iconShadowRGB: "black"
        },
        visible: !0
      };

    function hr(rr) {
      return "object" !== typeof rr || null === rr || Array.isArray(rr) ? void 0 : rr
    }
    const zr = new Set(Zr.b);

    function Yr(rr, Sr) {
      return "string" === typeof rr ? (0, fr.u)(rr, Sr) : Sr
    }

    function nr(rr) {
      return Yr(rr.width, pr)
    }

    function er(rr, Sr) {
      var Qr;
      const Zr = null !== (Qr = rr.applyTo) && void 0 !== Qr ? Qr : "both";
      return "both" === Zr || Zr === Sr
    }

    function Kr(rr) {
      const Sr = nr(rr);
      return "glow" === rr.style ? Sr * xr : Math.ceil(Sr / 2) + 1
    }

    function yr(rr, Sr, Qr) {
      var Zr, jr;
      const pr = null !== (Zr = hr(rr.info)) && void 0 !== Zr ? Zr : {},
        yr = "string" === typeof rr.name ? rr.name : "",
        Br = pr.subtitle;
      if (Array.isArray(pr.content) && 0 === pr.content.length && !(Array.isArray(Br) && Br.length > 0)) return null;
      const Tr = "number" === typeof rr.hideNameSeed ? rr.hideNameSeed : null,
        vr = "" === yr || !0 === rr.mesh ? yr : (0, Wr.e)(yr, !Qr.canSeeRealPlayerNames, Tr);
      if (!vr && !pr.content) return null;
      const Or = "string" === typeof rr.colour ? rr.colour : "default",
        Lr = Object.hasOwn(ar.r, Or) ? ar.r[Or] : void 0,
        lr = pr.content ? (0, fr.i)(pr.content, fr.d.DEFAULT_FONT_SIZE, Qr, Lr) : [{
          kind: "text",
          text: vr,
          size: fr.d.DEFAULT_FONT_SIZE,
          colour: Lr
        }],
        Xr = [],
        Pr = "boolean" === typeof rr.player ? rr.player : Array.isArray(rr.ranks),
        Hr = Pr ? (0, Ir.i)(pr.backgroundColor) : null;
      Hr && Xr.push({
        kind: "rank",
        rank: Hr
      });
      for (const Wr of Array.isArray(rr.ranks) ? rr.ranks : []) {
        const rr = (0, fr.y)(Wr);
        null !== rr && void 0 !== rr && rr.nameTag && rr.visible && Xr.push({
          kind: "rank",
          rank: rr
        })
      }
      Xr.push(...lr), Pr && "" !== yr && Qr.isFriend(yr) && Xr.push({
        kind: "rank",
        rank: tr
      }), "number" === typeof rr.Oj && Xr.push({
        kind: "text",
        text: ` ${rr.Oj}m`,
        size: fr.d.DEFAULT_FONT_SIZE,
        colour: "#cef3ff"
      });
      const qr = Br ? (0, fr.i)(Br, fr.d.DEFAULT_SUBTITLE_FONT_SIZE, Qr) : null,
        Rr = "string" === typeof pr.backgroundColor ? pr.backgroundColor : "#22283b",
        gr = "string" === typeof pr.subtitleBackgroundColor ? pr.subtitleBackgroundColor : "#1a1e2d",
        Cr = hr(pr.healthbar),
        Mr = hr(pr.border),
        Gr = Array.isArray(rr.effects) ? rr.effects.filter((rr => "string" === typeof rr && zr.has(rr))) : [],
        kr = "number" === typeof rr.health ? Math.max(0, Math.min(1, rr.health)) : null,
        Ar = (0, fr.g)(Xr, Sr, Qr),
        Vr = (0, fr.g)(null !== qr && void 0 !== qr ? qr : [], Sr, Qr),
        ir = {
          width: fr.d.EFFECT_ICON_SIZE * Gr.length,
          height: Gr.length > 0 ? fr.d.EFFECT_ICON_SIZE : 0
        },
        wr = Mr && er(Mr, "nametag") ? Kr(Mr) : 0,
        cr = Yr(null === Cr || void 0 === Cr ? void 0 : Cr.height, Er),
        Fr = Mr && er(Mr, "healthbar") ? Kr(Mr) : 0,
        or = "never" === (null !== (jr = null === Cr || void 0 === Cr ? void 0 : Cr.display) && void 0 !== jr ? jr : "onDamage") ? 0 : cr + Fr,
        br = Math.max(ir.height, wr),
        Jr = Math.max(fr.d.VERTICAL_PADDING, or, wr);
      let Dr = Math.max(Ar.width, Vr.width, ir.width);
      if (Mr) {
        const rr = Kr(Mr) + fr.d.HORIZONTAL_PADDING / 2;
        Dr = Math.max(Dr, Math.max(Ar.width, Vr.width) + fr.d.HORIZONTAL_PADDING + 2 * rr)
      }
      const dr = Ar.height + Vr.height + br + Jr,
        sr = Ar.width + fr.d.HORIZONTAL_PADDING,
        ur = Vr.width + fr.d.HORIZONTAL_PADDING,
        rS = Math.max(sr, ur),
        SS = (Dr - rS) / 2,
        QS = Math.max(ir.height, wr);
      return {
        width: Dr,
        height: dr,
        draw: rr => {
          const Sr = [];
          if (rr.fillStyle = Rr, rr.fillRect(SS, QS, rS, Ar.height), (0, fr.s)(Xr, (Dr - sr) / 2 + fr.d.HORIZONTAL_PADDING / 2, QS, Ar.height, rr, Qr, Sr), qr) {
            const Zr = QS + Ar.height;
            rr.fillStyle = gr, rr.fillRect(SS, Zr, rS, Vr.height), (0, fr.s)(qr, (Dr - ur) / 2 + fr.d.HORIZONTAL_PADDING / 2, Zr, Vr.height, rr, Qr, Sr)
          }
          let Zr = null;
          if (null !== kr) {
            const Sr = dr - cr - Fr;
            null !== Cr && void 0 !== Cr && Cr.backgroundColour && (rr.fillStyle = Cr.backgroundColour, rr.fillRect(SS, Sr, rS, cr)), rr.fillStyle = function(rr, Sr) {
              const Qr = null === rr || void 0 === rr ? void 0 : rr.foregroundColour;
              if ("string" === typeof Qr) return Qr;
              const Zr = [...Array.isArray(Qr) && Qr.length > 0 ? Qr : mr].sort(((rr, Sr) => rr.healthFraction - Sr.healthFraction)),
                Wr = Zr.find((rr => Sr <= rr.healthFraction));
              return (null !== Wr && void 0 !== Wr ? Wr : Zr[Zr.length - 1]).colour
            }(Cr, kr), rr.fillRect(SS, Sr, Math.round(rS * kr), cr), Zr = {
              x: SS,
              y: Sr,
              width: rS,
              height: cr
            }
          }
          if (Mr) {
            const Sr = [];
            er(Mr, "nametag") && Sr.push({
              x: SS,
              y: QS,
              width: rS,
              height: Ar.height + (qr ? Vr.height : 0)
            }), Zr && er(Mr, "healthbar") && Sr.push(Zr), Sr.length > 0 && function(rr, Sr, Qr) {
              const Zr = nr(Sr),
                Wr = Zr / 2,
                ar = rr => rr.width > 0 && rr.height > 0,
                jr = Qr.map((rr => ({
                  x: rr.x + Wr,
                  y: rr.y + Wr,
                  width: rr.width - Zr,
                  height: rr.height - Zr
                }))).filter(ar);
              if (0 === jr.length) return;
              const Ir = Sr => {
                const Qr = Sr.filter(ar);
                if (0 !== Qr.length) {
                  rr.beginPath();
                  for (const Sr of Qr) rr.rect(Sr.x, Sr.y, Sr.width, Sr.height);
                  rr.stroke()
                }
              };
              if (rr.save(), rr.strokeStyle = Sr.colour, rr.lineWidth = Zr, rr.lineJoin = "round", "glow" === Sr.style) rr.shadowColor = Sr.colour, rr.shadowBlur = Zr * xr, Ir(jr), Ir(jr);
              else if ("double" === Sr.style) {
                Ir(jr);
                const rr = Zr + 2;
                Ir(jr.map((Sr => ({
                  x: Sr.x + rr,
                  y: Sr.y + rr,
                  width: Sr.width - 2 * rr,
                  height: Sr.height - 2 * rr
                }))))
              } else Ir(jr);
              rr.restore()
            }(rr, Mr, Sr)
          }(0, fr.m)(Sr, rr);
          for (let Wr = 0; Wr < Gr.length; Wr++) {
            const Sr = Qr.effectImage(Gr[Wr]);
            Sr && (rr.imageSmoothingEnabled = !1, rr.drawImage(Sr, 5 + Ur * Wr, 5, Nr, Nr))
          }
        }
      }
    }
  },
  37630: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      g: () => Yr,
      i: () => Nr,
      m: () => Kr,
      q: () => er,
      s: () => nr,
      u: () => Er,
      y: () => xr
    });
    var Zr = Qr(672),
      Wr = Qr(360);
    const ar = {
        DEFAULT_FONT_SIZE: 47,
        DEFAULT_SUBTITLE_FONT_SIZE: 30,
        HORIZONTAL_PADDING: 30,
        VERTICAL_PADDING: 22,
        TEXT_SHADOW_WIDTH: 2,
        LINE_SPACING: 8,
        EFFECT_ICON_SIZE: 70
      },
      jr = 41;

    function Ir(rr) {
      return `bolder ${rr}px 'Jetbrains Mono'`
    }

    function fr(rr) {
      return "object" === typeof rr && null !== rr
    }

    function Er(rr, Sr) {
      const Qr = "number" === typeof rr ? rr : "string" === typeof rr ? Number(rr.replace("px", "")) : NaN;
      return Number.isFinite(Qr) && Qr > 0 ? Qr : Sr
    }

    function pr(rr) {
      return fr(rr) ? rr : void 0
    }

    function xr(rr) {
      const Sr = "number" === typeof rr ? Zr.v[rr] : rr;
      return "string" === typeof Sr && Object.hasOwn(Zr.k, Sr) ? Zr.k[Sr] : void 0
    }

    function mr(rr, Sr) {
      return "string" === typeof rr ? rr : fr(rr) ? "string" === typeof rr.translationKey ? Sr.translate(rr.translationKey, rr.params).map((rr => "string" === typeof rr ? rr : rr.icon)).join("") : "string" === typeof rr.entityName ? Sr.shownPlayerName(rr.entityName) : "" : void 0 === rr || null === rr ? "" : String(rr)
    }

    function Nr(rr, Sr, Qr, Zr) {
      if (!Array.isArray(rr)) return [];
      const jr = [];
      for (const Ur of rr) {
        var Ir, xr;
        if (fr(Ur) && "chatTag" in Ur) {
          jr.push({
            kind: "rank",
            rank: Ur
          });
          continue
        }
        if (fr(Ur) && "icon" in Ur && !("mainRGB" in Ur)) {
          var Nr;
          jr.push({
            kind: "icon",
            icon: String(Ur.icon),
            size: Er(null === (Nr = pr(Ur.style)) || void 0 === Nr ? void 0 : Nr.fontSize, ar.DEFAULT_FONT_SIZE)
          });
          continue
        }
        if (fr(Ur) && (0, Wr.xb)(Ur)) {
          jr.push({
            kind: "text",
            text: "",
            size: Sr,
            colour: Zr
          });
          continue
        }
        let rr, tr;
        fr(Ur) && (0, Wr.wb)(Ur) ? (rr = Qr.keyBindingText(String(Ur.action)), tr = pr(Ur.style)) : fr(Ur) && "str" in Ur ? (rr = Ur.str, tr = pr(Ur.style)) : rr = Ur;
        const hr = Er(null === (Ir = tr) || void 0 === Ir ? void 0 : Ir.fontSize, Sr),
          zr = null !== (xr = (0, Wr._b)(tr)) && void 0 !== xr ? xr : Zr;
        if (fr(rr) && "string" === typeof rr.translationKey) {
          const Sr = Qr.translate(rr.translationKey, rr.params);
          if (Sr.some((rr => "string" !== typeof rr))) {
            for (const rr of Sr) jr.push("string" === typeof rr ? {
              kind: "text",
              text: rr,
              size: hr,
              colour: zr
            } : {
              kind: "icon",
              icon: rr.icon,
              size: hr
            });
            continue
          }
        }
        jr.push({
          kind: "text",
          text: mr(rr, Qr),
          size: hr,
          colour: zr
        })
      }
      return jr
    }

    function Ur(rr) {
      return void 0 !== rr && "rank" !== rr.kind
    }

    function tr(rr, Sr) {
      const Qr = Ur(rr),
        Zr = Ur(Sr);
      return void 0 === rr && !Zr || !Qr && void 0 === Sr ? 0 : Qr !== Zr ? .5 * ar.HORIZONTAL_PADDING : 0
    }

    function hr(rr) {
      return "rank" === rr.kind ? ar.DEFAULT_FONT_SIZE : rr.size
    }

    function zr(rr, Sr, Qr) {
      return "icon" === rr.kind ? rr.size : "rank" === rr.kind ? function(rr, Sr) {
        const Qr = Sr.rankIcon(rr.rank.icon);
        return Qr ? jr * (Qr.width / Qr.height) : jr
      }(rr, Qr) + ar.HORIZONTAL_PADDING : (Qr.glyphsShown(rr.text), Sr.font = Ir(rr.size), Sr.measureText(rr.text).width)
    }

    function Yr(rr, Sr, Qr) {
      if (0 === rr.length) return {
        width: 0,
        height: 0,
        sizes: []
      };
      let Zr = 0;
      for (const ar of rr) Zr = Math.max(Zr, hr(ar));
      const Wr = [];
      let jr = tr(void 0, rr[0]);
      for (let ar = 0; ar < rr.length; ar++) {
        const Zr = jr;
        jr += zr(rr[ar], Sr, Qr), jr += tr(rr[ar], rr[ar + 1]), Wr.push({
          x: Zr,
          width: jr - Zr
        })
      }
      return {
        width: jr,
        height: Zr + ar.VERTICAL_PADDING,
        sizes: Wr
      }
    }

    function nr(rr, Sr, Qr, Zr, Wr, ar, jr) {
      Sr += tr(void 0, rr[0]);
      for (let Ir = 0; Ir < rr.length; Ir++) {
        const fr = er(rr[Ir], Sr, Qr, Zr, Wr, ar, jr);
        Sr += 0 === fr ? 0 : fr + tr(rr[Ir], rr[Ir + 1])
      }
    }

    function er(rr, Sr, Qr, Zr, Wr, fr, Er, pr) {
      var xr;
      if ("icon" === rr.kind) {
        const Zr = fr.iconImage(rr.icon);
        return Zr && Er.push({
          image: Zr,
          x: Sr,
          y: Qr + ar.VERTICAL_PADDING / 2,
          size: rr.size
        }), rr.size
      }
      if ("rank" === rr.kind) {
        const Ir = null !== pr && void 0 !== pr ? pr : zr(rr, Wr, fr);
        return function(rr, Sr, Qr, Zr, Wr, Ir, fr) {
          var Er, pr;
          const {
            rank: xr
          } = rr;
          Ir.fillStyle = xr.mainRGB, Ir.fillRect(Sr, Qr, Zr, Wr);
          const mr = fr.rankIcon(xr.icon);
          if (!mr) return;
          const Nr = jr / mr.height,
            Ur = Sr + (Zr - mr.width * Nr) / 2,
            tr = Qr + (Wr - jr) / 2,
            hr = new Path2D(mr.path),
            zr = ar.TEXT_SHADOW_WIDTH,
            Yr = (null === (Er = xr.nameTag) || void 0 === Er ? void 0 : Er.iconShadowRGB) || "black";
          for (const ar of [-1, 1])
            for (const rr of [-1, 1]) yr(Ir, hr, Ur + zr * ar, tr + zr * rr, Nr, Yr);
          yr(Ir, hr, Ur, tr, Nr, (null === (pr = xr.nameTag) || void 0 === pr ? void 0 : pr.iconRGB) || "white")
        }(rr, Sr, Qr, Ir, Zr, Wr, fr), Ir
      }
      if (0 === rr.text.length) return 0;
      const mr = Ir(rr.size);
      Wr.font = mr;
      const Nr = null !== pr && void 0 !== pr ? pr : Wr.measureText(rr.text).width;
      return function(rr, Sr, Qr, Zr, Wr, jr) {
        const Ir = ar.TEXT_SHADOW_WIDTH;
        jr.font = Zr, jr.fillStyle = "black";
        for (const ar of [-1, 1])
          for (const Zr of [-1, 1]) jr.fillText(rr, Sr + Ir * ar, Qr + Ir * Zr);
        jr.fillStyle = Wr, jr.fillText(rr, Sr, Qr)
      }(rr.text, Sr, Qr + Zr - ar.VERTICAL_PADDING + 5, mr, null !== (xr = rr.colour) && void 0 !== xr ? xr : "white", Wr), Nr
    }

    function Kr(rr, Sr) {
      for (const {
          image: Qr,
          x: Zr,
          y: Wr,
          size: ar
        }
        of rr) Sr.imageSmoothingEnabled = !1, Sr.drawImage(Qr, Zr, Wr, ar, ar)
    }

    function yr(rr, Sr, Qr, Zr, Wr, ar) {
      rr.save(), rr.translate(Qr, Zr), rr.scale(Wr, Wr), rr.fillStyle = ar, rr.fill(Sr), rr.restore()
    }
  },
  37718: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Jr,
      e: () => SS,
      f: () => wr,
      i: () => Fr,
      k: () => or,
      l: () => br,
      p: () => WS,
      t: () => cr,
      u: () => Vr
    });
    var Zr = Qr(5223),
      Wr = Qr(5249),
      ar = Qr(35472),
      jr = Qr(4489),
      Ir = Qr(4485),
      fr = Qr(1469),
      Er = Qr(37613),
      pr = Qr(109),
      xr = Qr(1317),
      mr = Qr(37642),
      Nr = Qr(37726),
      Ur = Qr(37734),
      tr = Qr(9282),
      hr = Qr(8734),
      zr = Qr(8927),
      Yr = Qr(9019),
      nr = Qr(9159),
      er = Qr(9172);
    const Kr = {
      youtube: tr.c,
      "person-military-pointing": hr.i,
      sparkle: zr.f,
      user: Yr.f,
      wrench: nr.g,
      zap: er.g,
      ...mr.d
    };

    function yr(rr) {
      const [Sr, Qr, , , Zr] = rr.icon;
      return {
        width: Sr,
        height: Qr,
        path: "string" === typeof Zr ? Zr : Zr.join(" ")
      }
    }
    const Br = new Map(Object.entries(Kr).map((rr => {
      let [Sr, Qr] = rr;
      return [Sr, yr(Qr)]
    })));
    let Tr = !1;
    const vr = new Set;
    var Or = Qr(37748);
    const Lr = "Jetbrains Mono",
      lr = "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+2248,U+26A1,U+2713,U+FEFF,U+FFFD",
      Xr = "U+0100-0130,U+0132-0151,U+0154-017F,U+018F-0190,U+0192,U+019B,U+01A0-01A1,U+01AF-01B0,U+01CD-01CE,U+01D0,U+01D2,U+01D4,U+01D6,U+01D8,U+01DA,U+01DC,U+01E6-01E7,U+01EA-01EB,U+01F4-01F5,U+01FC-01FF,U+0218-021B,U+0232-0233,U+0237,U+0259,U+02B9-02BA,U+02C7,U+02C9,U+02D8-02D9,U+02DB,U+02DD,U+02F3,U+02F7,U+0300-0303,U+0306-0307,U+0309-030C,U+030F,U+0312,U+031B,U+0323,U+0325-0328,U+0336-0338,U+0374-0375,U+037E,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03CF,U+03D5-03D7,U+0401-040C,U+040E-044F,U+0451-045C,U+045E-045F,U+0490-0493,U+049A-049B,U+04A2-04A3,U+04AE-04B1,U+04B6-04B7,U+04BA-04BB,U+04D8-04D9,U+04DC-04DF,U+04E4-04E9,U+04F4-04F5,U+0AEA,U+1E80-1E85,U+1E9E,U+1EA0-1EF9,U+2070,U+2074-207A,U+207C,U+2080-2089,U+20AB,U+20AE,U+20B4,U+20BD,U+20BF,U+2102,U+210D,U+2113,U+2115-2116,U+2119-211A,U+211D,U+2124,U+212E,U+2140,U+218A-218B,U+2194-2199,U+219D-219E,U+21A0,U+21A2-21A3,U+21A5-21A7,U+21A9-21AA,U+21AD,U+21BE,U+21C9,U+21D0-21D4,U+21DB,U+21DE-21DF,U+21E5,U+21E7-21E8,U+21EA,U+2200-220C,U+220E-2211,U+2213,U+2218-221A,U+221E,U+2223-2225,U+2227-222B,U+2234-2239,U+223C,U+223E,U+2243,U+2245,U+2247,U+2249,U+224B,U+224D,U+2254,U+2257,U+225F-2265,U+226A-2273,U+227A-227C,U+2282-2289,U+228E-2299,U+229B-22A5,U+22B4,U+22B8,U+22BB-22BD,U+22C2-22C4,U+22C6,U+22C8-22CA,U+22CE,U+22D0,U+22E2,U+22EE-22F1,U+2302-2305,U+2308-230B,U+2318,U+231C-231F,U+2324-2326,U+2328,U+232B,U+2336-237A,U+2389-238B,U+2395,U+239B-23AD,U+23CE,U+23FB-23FE,U+2400-2421,U+2423-2424,U+2500-25A1,U+25AA-25AB,U+25B2-25CC,U+25CE-25CF,U+25D4-25D5,U+25E6-25EB,U+25EF,U+25F6,U+266D,U+266F,U+2687,U+26A0,U+2715,U+2717,U+2736,U+276E-2771,U+2794,U+279C-279E,U+27C5-27C6,U+27DC,U+27E6-27EB,U+27F5-27F7,U+2916,U+294A,U+2987-2988,U+2A00,U+2A05-2A06,U+2B58,U+E0A0-E0A2,U+E0B0-E0B3,U+FE62,U+FF5B,U+FF5D,U+16910,U+1D538-1D539,U+1D53B-1D53E,U+1D540-1D544,U+1D546,U+1D54A-1D550,U+1D552-1D56B";

    function Pr(rr) {
      return rr.split(",").map((rr => {
        const [Sr, Qr = Sr] = rr.slice(2).split("-");
        return [parseInt(Sr, 16), parseInt(Qr, 16)]
      }))
    }
    const Hr = {
        latin: Pr(lr),
        rest: Pr(Xr)
      },
      qr = new RegExp(`[${Hr.rest.map((rr=>{let[Sr,Qr]=rr;return`\\u{${Sr.toString(16)}}-\\u{${Qr.toString(16)}}`})).join("")}]`, "u");

    function Rr(rr) {
      return Sr => {
        console.warn(`[bloxd-wasm-client] the text font's ${rr} file did not load`, Sr)
      }
    }
    const gr = 397,
      Cr = 1,
      Mr = {
        translate: rr => [rr],
        keyBindingText: rr => rr,
        isFriend: () => !1,
        hiddenNames: {},
        loadsFontRest: !1
      };
    let Gr = null,
      kr = 0,
      Ar = "none";

    function Vr() {
      return kr
    }
    const ir = new Set;

    function wr(rr) {
      return ir.add(rr), () => {
        ir.delete(rr)
      }
    }

    function cr() {
      kr++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? Ar = "all" : "none" === Ar && (Ar = "notBoards");
      for (const rr of ir) rr()
    }(0, mr.m)((() => {
      cr(!1)
    })), (0, fr.s)((() => {
      (function() {
        const rr = Tr;
        return Tr = !1, rr
      })() && cr(!1)
    }));
    const Fr = new class {
      constructor(rr) {
        this.loaded = rr, this.latin = null, this.rest = null, this.restWanted = !1
      }
      load() {
        if (null === this.latin) {
          this.latin = new FontFace(Lr, `url(${(0,Or.c)()}) format("woff2")`, {
            unicodeRange: lr
          }).load().then((rr => {
            document.fonts.add(rr), this.loaded()
          }), Rr("Latin"));
          const rr = new FontFace(Lr, `url(${(0,Or.e)()}) format("woff2")`, {
            unicodeRange: Xr,
            display: "swap"
          });
          document.fonts.add(rr), rr.loaded.then((() => {
            this.loaded()
          }), Rr("rest")), this.rest = rr, this.restWanted && rr.load()
        }
        return this.latin
      }
      loadRest() {
        var rr;
        this.restWanted || (this.restWanted = !0, null === (rr = this.rest) || void 0 === rr || rr.load())
      }
      async untilLoadedFor(rr) {
        await this.load(), this.loadFor(rr), await document.fonts.load(`16px '${Lr}'`, rr).catch((Sr => {
          console.warn("[bloxd-wasm-client] the text font did not load for", rr, Sr)
        }))
      }
      loadFor(rr) {
        !this.restWanted && qr.test(rr) && this.loadRest()
      }
    }(cr);

    function or(rr) {
      Object.assign(Mr, rr), Mr.loadsFontRest && Fr.loadRest(), cr(!1)
    }

    function br(rr) {
      rr !== Gr && (Gr = rr, cr())
    }

    function Jr(rr) {
      if ("none" === Ar || null === rr) return;
      rr(gr, "all" === Ar ? 0 : Cr, new Uint8Array(0)) && (Ar = "none")
    }
    const Dr = new Map,
      dr = new Map;

    function sr(rr, Sr, Qr) {
      var Zr;
      const Wr = Qr ? `${rr}#${Qr.join(",")}` : rr,
        ar = Dr.get(Wr);
      if (ar) return ar.image;
      const jr = {
        image: null !== (Zr = dr.get(Wr)) && void 0 !== Zr ? Zr : null
      };
      return Dr.set(Wr, jr), Sr().then((async rr => {
        if (null === rr) return null;
        const Sr = new Image;
        Sr.crossOrigin = "anonymous", Sr.src = rr, await Sr.decode();
        const Zr = await createImageBitmap(Sr);
        if (!Qr) return Zr;
        try {
          return function(rr, Sr) {
            let [Qr, Zr, Wr] = Sr;
            const ar = (0, Er.g)(rr.width, rr.height),
              {
                canvas: jr
              } = ar;
            return ar.drawImage(rr, 0, 0), ar.globalCompositeOperation = "multiply", ar.fillStyle = `rgb(${Qr}, ${Zr}, ${Wr})`, ar.fillRect(0, 0, jr.width, jr.height), ar.globalCompositeOperation = "destination-in", ar.drawImage(rr, 0, 0), jr
          }(Zr, Qr)
        } finally {
          Zr.close()
        }
      })).then((rr => {
        Dr.get(Wr) === jr && dr.delete(Wr), rr !== jr.image && (jr.image = rr, cr(!1))
      }), (Sr => {
        console.warn(`[bloxd-wasm-client] text icon ${rr} did not load`, Sr), Dr.get(Wr) === jr && (Dr.delete(Wr), dr.delete(Wr), null !== jr.image && cr(!1))
      })), jr.image
    }(0, Nr.d)((() => {
      dr.clear();
      for (const [rr, {
          image: Sr
        }] of Dr) null !== Sr && dr.set(rr, Sr);
      Dr.clear(), cr(!1)
    }));
    const ur = new Set(Zr.b),
      rS = new Set(["CubeBlock", "SlabBlock", "StairsBlock"]);

    function SS() {
      (0, Ur.g)().catch((() => {}))
    }

    function QS(rr) {
      return ur.has(rr) ? sr(`icon:${rr}`, (async () => {
        var Sr, Qr;
        return null !== (Sr = null === (Qr = (0, Nr.j)()) || void 0 === Qr ? void 0 : Qr.textureUrl(rr)) && void 0 !== Sr ? Sr : (await (0, Ur.c)()).ingameIconUrl(rr)
      })) : null
    }
    let ZS = "unasked";
    const WS = {
      get canSeeRealPlayerNames() {
        return pr.featureFlags.canSeeRealPlayerNames
      },
      get canSeePlayerWrittenText() {
        return pr.featureFlags.canSeePlayerWrittenText
      },
      get localPlayerDbId() {
        return Gr
      },
      shownPlayerName: rr => (0, xr.c)(rr, Mr.hiddenNames),
      translate: (rr, Sr) => {
        const Qr = "object" === typeof Sr && null !== Sr ? Sr : void 0;
        return Mr.translate(rr, (0, xr.e)(Qr, Mr.hiddenNames))
      },
      keyBindingText: rr => Mr.keyBindingText(rr),
      isFriend: rr => Mr.isFriend(rr, Mr.hiddenNames),
      iconImage: function(rr) {
        if (ur.has(rr)) return QS(rr);
        if ("unasked" === ZS && (ZS = "loading", (0, Ir.h)().then((() => {
            ZS = "in", cr(!1)
          }), (rr => {
            ZS = "failed", console.warn("[bloxd-wasm-client] the item sprite table did not load, so text item icons stay blank", rr)
          }))), "in" !== ZS) return null;
        const Sr = (0, jr.e)(rr),
          Qr = void 0 === Sr ? void 0 : (0, ar.itemTypeNameOf)(Sr);
        if ("Gun" === Qr) return null;
        const Zr = (0, Ir.d)(rr),
          fr = void 0 !== Qr && rS.has(Qr);
        if (fr && void 0 === Zr) return null;
        const Er = void 0 !== Sr && "GrayscaleArmour" === (0, ar.itemTypeOf)(Sr) || Object.hasOwn(Wr.c, rr),
          pr = null !== Zr && void 0 !== Zr ? Zr : rr;
        return sr(fr ? `block:${pr}` : `item:${pr}`, (async () => {
          var rr, Sr;
          const Qr = (0, Nr.j)(),
            Zr = await (0, Ur.g)();
          return null !== (rr = null !== (Sr = null === Qr || void 0 === Qr ? void 0 : Qr.textureUrl(pr)) && void 0 !== Sr ? Sr : Zr.itemSpriteUrl(pr)) && void 0 !== rr ? rr : fr ? null : Zr.notFoundUrl()
        }), Er ? (0, Wr.e)(rr) : void 0)
      },
      effectImage: QS,
      rankIcon: function(rr) {
        const Sr = Br.get(rr);
        if (Sr) return Sr;
        const Qr = (0, fr.f)(rr, (0, fr.k)(rr));
        if (!Qr) return (0, fr.i)("brands") && (0, fr.i)("solid") ? vr.has(rr) || (vr.add(rr), console.warn(`[bloxd-wasm-client] unknown rank icon "${rr}": not in the bundled Font Awesome subset, so its tag draws no icon`)) : Tr = !0, null;
        const Zr = yr(Qr);
        return Br.set(rr, Zr), Zr
      },
      glyphsShown: rr => {
        Fr.loadFor(rr)
      }
    }
  },
  37748: (rr, Sr, Qr) => {
    function Zr() {
      return Qr(37757)
    }

    function Wr() {
      return Qr(37760)
    }

    function ar(rr) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(rr)
    }
    Qr.d(Sr, {
      b: () => ar,
      c: () => Zr,
      e: () => Wr
    })
  },
  37757: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37760: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);