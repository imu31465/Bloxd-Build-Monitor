export const id = 184;
export const ids = [184];
export const modules = {
  9965: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd,
      e: () => vd,
      i: () => td,
      m: () => Qd,
      q: () => hd,
      r: () => Nd
    });
    var Wd = md(32),
      Fd = md(2152),
      Rd = md(1518),
      Xd = md(1498);
    const Kd = dd => {
        var Od, md;
        return (0, Xd.m)() && null !== (Od = null === (md = (0, Rd.h)()) || void 0 === md ? void 0 : md.getGlyphForNoaAction(dd)) && void 0 !== Od ? Od : null
      },
      hd = "controllerGlyph:",
      vd = dd => {
        var Od, md;
        return null !== (Od = null === (md = (0, Rd.h)()) || void 0 === md ? void 0 : md.getPadGlyphIconName(dd)) && void 0 !== Od ? Od : `${hd}xbox/${dd}`
      },
      Qd = dd => dd.startsWith(hd),
      td = dd => {
        var Od, md;
        return Qd(dd) && null !== (Od = null === (md = (0, Rd.h)()) || void 0 === md ? void 0 : md.getPadGlyphIconUrl(dd)) && void 0 !== Od ? Od : null
      },
      od = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", Xd.b, Fd.c, Fd.b],
      Nd = dd => {
        const Od = od.map((Od => Wd.j.subscribe(Od, dd)));
        return () => {
          for (const dd of Od) Wd.j.unsubscribe(dd)
        }
      }
  },
  43148: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      openCharacterPreview: () => gO
    });
    var Wd = md(39645),
      Fd = md(2402),
      Rd = md(689),
      Xd = md(38682),
      Kd = md(3146),
      hd = md(38673),
      vd = md(41756),
      Qd = md(42016),
      td = md(43038),
      od = md(38627),
      Nd = md(42162),
      qd = md(38736),
      Hd = md(42179),
      yd = md(43101),
      bd = md(38623),
      Td = md(43068),
      pd = md(43061),
      Yd = md(38794),
      gd = md(40319),
      wd = md(40721),
      Ed = md(40760),
      Jd = md(40756),
      Ud = md(40729),
      xd = md(4365),
      Bd = md(39080);
    const Sd = [0, 1, 0];
    class sd {
      constructor(dd) {
        this.node = dd, this.nodesByName = new Map, this.rests = new Map, this.clips = new Map;
        for (const Od of dd.getChildTransformNodes()) this.nodesByName.set(Od.name, Od), this.rests.set(Od.name, (0, Bd.j)(Od))
      }
      play(dd, Od) {
        const md = this.clip(dd);
        md && (md.pose.pose(Od), (0, Bd.p)(md.pose, md.nodes))
      }
      clip(dd) {
        let Od = this.clips.get(dd);
        if (void 0 === Od) {
          const md = (0, Bd.k)(dd, (dd => {
            var Od;
            return null !== (Od = this.rests.get(dd)) && void 0 !== Od ? Od : null
          }));
          Od = md && {
            pose: md,
            nodes: md.boneNames.map((dd => this.nodesByName.get(dd)))
          }, this.clips.set(dd, Od)
        }
        return Od
      }
    }

    function ud(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return new od.Cq(dd[0] * Od, dd[1] * Od, dd[2] * Od)
    }
    class Vd {
      constructor(dd, Od) {
        this.MH = dd, this.scale = Od, this.petNodes = new Map, this.particleTextures = new Map, this.petName = "pet_none", this.shownPet = null, this.petIsolated = !1, this.auraSeq = 0, this.aura = null, this.auraName = "aura_none", this.auraTuning = null, this.auraDrawn = Promise.resolve()
      }
      async setPet(dd) {
        var Od;
        this.petName = dd, null === (Od = this.shownPet) || void 0 === Od || Od.node.rY(!1), this.shownPet = null;
        const md = (0, wd.j)(dd);
        if (!md) return;
        let Wd;
        try {
          Wd = await this.petNode(md.model)
        } catch {
          return
        }
        this.petName === dd && (Wd.node.rY(!0), this.shownPet = Wd)
      }
      setAura(dd) {
        const Od = (0, wd.i)(dd);
        return dd === this.auraName && Od === this.auraTuning || (this.auraName = dd, this.auraTuning = Od, this.auraDrawn = this.showAura(dd, Od)), this.auraDrawn
      }
      async showAura(dd, Od) {
        var md, Wd, Fd;
        const Rd = ++this.auraSeq;
        if (null === (md = this.aura) || void 0 === md || md.dispose(!1), this.aura = null, !Od) return;
        const Xd = await (0, gd.l)().catch((Od => (console.error(`Couldn't load the preview's particles for ${dd}:`, Od), null)));
        if (!Xd || Rd !== this.auraSeq) return;
        const {
          scale: Kd
        } = this, {
          opts: hd,
          half: vd
        } = (0, Jd.d)(Od), Qd = Xd(this.MH, `aura|${dd}`, hd.Mt), td = this.particleTexture(Od.particles.texture);
        Qd.texture = td, (0, Ud.e)(Qd, {
          ...hd,
          minSize: hd.minSize * Kd,
          maxSize: hd.maxSize * Kd,
          minEmitPower: hd.minEmitPower * Kd,
          maxEmitPower: hd.maxEmitPower * Kd,
          gravity: hd.gravity && [hd.gravity[0] * Kd, hd.gravity[1] * Kd, hd.gravity[2] * Kd]
        }), Qd.emitRate = hd.emitRate, Qd.createBoxEmitter(ud(null !== (Wd = hd.dir1) && void 0 !== Wd ? Wd : Sd), ud(null !== (Fd = hd.dir2) && void 0 !== Fd ? Fd : Sd), ud(vd, -Kd), ud(vd, Kd));
        const [Nd, qd, Hd] = Od.offset;
        Qd.emitter = new od.Cq(Nd * Kd, (qd - 1) * Kd, Hd * Kd), Qd.start(), this.aura = Qd;
        const yd = td.mirror;
        yd.isReady() || yd.loadingError || await new Promise((Od => {
          yd.onLoadObservable.addOnce((() => {
            Od()
          })), yd.getInternalTexture().onErrorObservable.addOnce((md => {
            let {
              message: Wd
            } = md;
            console.error(`Preview aura ${dd}'s texture failed to load: ${Wd}`), Od()
          }))
        }))
      }
      writePose(dd) {
        var Od;
        if (!this.shownPet) return;
        const md = (0, wd.j)(this.petName),
          {
            scale: Wd
          } = this;
        if (this.petIsolated) return void this.writeIsolatedPose(this.shownPet, md);
        const [Fd, Rd, Xd] = md.followOffset, {
          node: Kd
        } = this.shownPet;
        Kd.position.set(Fd * Wd, (Rd + (0, Ed.d)(md, dd) - 1) * Wd, Xd * Wd), Kd.rotation.y = md.yawOffset, Kd.Tt.Bdd(md.scale * Wd), null !== (Od = md.clips) && void 0 !== Od && Od.fly && this.shownPet.play(md.clips.fly, dd)
      }
      isolatePet() {
        this.petIsolated = !0
      }
      writeIsolatedPose(dd, Od) {
        var md, Wd, Fd;
        const {
          node: Rd
        } = dd;
        Rd.position.Bdd(0), Rd.rotation.y = Od.yawOffset, Rd.Tt.Bdd(1);
        const Xd = null !== (md = null === (Wd = Od.clips) || void 0 === Wd ? void 0 : Wd.perch) && void 0 !== md ? md : null === (Fd = Od.clips) || void 0 === Fd ? void 0 : Fd.fly;
        Xd && dd.play(Xd, 0);
        const {
          min: Kd,
          max: hd
        } = Rd.getHierarchyBoundingVectors(!0), vd = 2 * this.scale / (hd.y - Kd.y);
        Rd.Tt.Bdd(vd), Rd.position.set(-(Kd.x + hd.x) / 2 * vd, -(Kd.y + hd.y) / 2 * vd, -(Kd.z + hd.z) / 2 * vd)
      }
      petNode(dd) {
        let Od = this.petNodes.get(dd);
        return Od || (Od = (0, Td.i)(this.MH, dd, void 0, {
          keepTransforms: !0,
          backFaceCulling: !0
        }).then((Od => {
          const md = new pd.c(`pet|${dd}`, this.MH);
          md.rY(!1);
          for (const dd of Od.rootNodes) dd.parent = md, (0, Td.n)(dd, !0);
          return new sd(md)
        }), (Od => {
          throw this.petNodes.delete(dd), console.error(`Failed to load preview pet ${dd}:`, Od), Od
        })), this.petNodes.set(dd, Od)), Od
      }
      particleTexture(dd) {
        let Od = this.particleTextures.get(dd);
        return Od || (Od = (0, Yd.m)(this.MH, (0, xd.e)(dd)), this.particleTextures.set(dd, Od)), Od
      }
    }
    var Ad = md(42330),
      rd = md(42339),
      Gd = md(42358);

    function nd(dd) {
      const Od = [],
        md = [],
        Wd = [],
        Fd = [],
        Rd = void 0 !== dd.width ? dd.width : void 0 !== dd.size ? dd.size : 1,
        Xd = void 0 !== dd.height ? dd.height : void 0 !== dd.size ? dd.size : 1,
        Kd = 0 === dd.sideOrientation ? 0 : dd.sideOrientation || rd.c.DEFAULTSIDE,
        hd = Rd / 2,
        vd = Xd / 2;
      md.push(-hd, -vd, 0), Wd.push(0, 0, -1), Fd.push(0, Gd.e ? 1 : 0), md.push(hd, -vd, 0), Wd.push(0, 0, -1), Fd.push(1, Gd.e ? 1 : 0), md.push(hd, vd, 0), Wd.push(0, 0, -1), Fd.push(1, Gd.e ? 0 : 1), md.push(-hd, vd, 0), Wd.push(0, 0, -1), Fd.push(0, Gd.e ? 0 : 1), Od.push(0), Od.push(1), Od.push(2), Od.push(0), Od.push(2), Od.push(3), rd.c._ComputeSides(Kd, md, Od, Wd, Fd, dd.frontUVs, dd.backUVs);
      const Qd = new rd.c;
      return Qd.indices = Od, Qd.positions = md, Qd.normals = Wd, Qd.uvs = Fd, Qd
    }

    function Ld(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Wd = new Ad.d(dd, md);
      Od.sideOrientation = Ad.d._GetDefaultSideOrientation(Od.sideOrientation), Wd._originalBuilderSideOrientation = Od.sideOrientation;
      return nd(Od).applyToMesh(Wd, Od.updatable), Od.sourcePlane && (Wd.translate(Od.sourcePlane.normal, -Od.sourcePlane.d), Wd.setDirection(Od.sourcePlane.normal.scale(-1))), Wd
    }
    let Pd = !1;
    Pd || (Pd = !0, rd.c.CreatePlane = nd, Ad.d.CreatePlane = (dd, Od, md, Wd, Fd) => Ld(dd, {
      size: Od,
      width: Od,
      height: Od,
      sideOrientation: Fd,
      updatable: Wd
    }, md));
    var zd = md(43143),
      cd = md(43129),
      jd = md(37729),
      Dd = md(37746),
      ed = md(37829),
      Id = md(40431),
      ld = md(40453),
      Cd = md(40439);
    class Zd {
      constructor(dd, Od) {
        this.scale = Od, this.plane = void 0, this.canvas = document.createElement("canvas"), this.texture = void 0, this.widthPx = 0, this.heightPx = 0, this.shown = null, this.stopRedrawing = null, this.texture = new zd.e("previewNametag", this.canvas, dd, !1, yd.b.BILINEAR_SAMPLINGMODE), this.texture.hasAlpha = !0;
        const md = new Hd.StandardMaterial("previewNametag", dd);
        md.diffuseTexture = this.texture, md.useAlphaFromDiffuseTexture = !0, md.emissiveColor = qd.Color3.White(), md.disableLighting = !0, this.plane = Ld("previewNametag", {
          size: 1
        }, dd), this.plane.material = md, this.plane.billboardMode = cd.d.BILLBOARDMODE_ALL, this.plane.renderingGroupId = Cd.b, this.plane.my = !1, this.plane.rY(!1)
      }
      set(dd) {
        var Od;
        if (dd !== this.shown) {
          if (this.shown = dd, null === (Od = this.stopRedrawing) || void 0 === Od || Od.call(this), this.stopRedrawing = null, null === dd || void 0 === dd || !dd.name) return this.heightPx = 0, void this.plane.rY(!1);
          ed.j.untilLoadedFor(dd.name).then((() => {
            this.shown === dd && (this.draw(dd), this.stopRedrawing = (0, ed.i)((() => {
              this.draw(dd)
            })))
          }))
        }
      }
      update(dd) {
        if (0 === this.heightPx) return;
        const Od = -this.scale,
          md = ld.e * this.scale + Od,
          Wd = dd.position,
          Fd = Math.hypot(Wd.x, Wd.y - md, Wd.z) / this.scale,
          Rd = 2 * Fd * Math.tan(dd.fov / 2) * dd.Iq().getAspectRatio(dd),
          Xd = Math.min((0, ld.f)(Fd), .9 * Rd / (Id.h.TEXT_PLANE_RATIO * this.widthPx)),
          Kd = Xd * Id.h.TEXT_PLANE_RATIO * this.heightPx;
        this.plane.position.set(0, Od + (ld.e + .5 * Kd - .05) * this.scale, 0);
        const hd = Xd * Id.h.TEXT_PLANE_RATIO * this.scale;
        this.plane.Tt.set(hd * this.widthPx, hd * this.heightPx, 1)
      }
      draw(dd) {
        const Od = (0, jd.e)(this.canvas),
          md = (0, Dd.d)({
            name: dd.name,
            ranks: dd.ranks,
            colour: dd.nameColour,
            mesh: !0
          }, Od, ed.o);
        if (null === md) return this.heightPx = 0, void this.plane.rY(!1);
        this.texture.scaleTo(Math.ceil(2 * md.width), Math.ceil(2 * md.height)), Od.scale(2, 2), md.draw(Od), this.texture.update(), this.widthPx = md.width, this.heightPx = md.height, this.plane.rY(!0)
      }
    }
    var kd = md(38691),
      fd = (md(43076), md(42420), md(43085), md(35587)),
      Md = md(37713),
      dO = md(43152);
    let OO, mO, WO, FO, RO, XO, KO, hO, vO, QO, tO, oO;
    const NO = document.createElement("canvas");
    async function qO() {
      await new Promise((dd => {
        setTimeout((() => {
          dd()
        }), 100)
      }))
    }
    NO.classList.add("CharCustomisationPreviewCanvas");
    const HO = {};

    function yO(dd, Od) {
      if (!FO) return;
      const Xd = (0, Fd.c)();
      if (Xd.qB(!1), Wd.c.Player.meshApi.updatePlayerCosmetic(Xd.YV, KO, dd, Od, !0), "cape" === dd)
        if (Od === Rd.e) RO.rY(!1);
        else {
          RO.rY(!0);
          RO.material.diffuseTexture = new yd.b(md(40376)(`./cape_${Od}.png`), RO.zV(), {
            invertY: !1,
            samplingMode: yd.b.NEAREST_NEAREST_MIPLINEAR
          })
        }
      "pet" === dd ? HO.pet = QO.setPet(Od) : "aura" === dd ? HO.aura = QO.setAura(Od) : HO[dd] = vO.update(dd, Od)
    }

    function bO(dd, Od) {
      const [md, Wd] = (0, Md.c)(dd, Od, window.devicePixelRatio);
      OO.setSize(Math.max(md, Math.floor(dd)), Math.max(Wd, Math.floor(Od)))
    }
    let TO = 0;
    class pO {
      constructor(dd, Od) {
        var md;
        this.framing = Od, this.ready = oO, this.dev = {
          canvas: () => NO,
          captureFrame: dd => (0, dO.b)((() => this.closed ? null : NO), (dd => {
            const Od = WO.onAfterRenderObservable.addOnce(dd);
            return () => {
              WO.onAfterRenderObservable.remove(Od)
            }
          }), dd),
          isolateHead(dd) {
            const Od = XO.getNodeNames(KO);
            for (let md = 0; md < Od.length; md++) "HeadMesh" !== Od[md] && "__root__" !== Od[md] && "TorsoNode" !== Od[md] && XO.setNodeEnabled(KO, md, !1);
            if (dd) {
              const dd = XO.getNamedNode(KO, "HeadMesh");
              XO.setNodeDisableColorWrite(KO, dd, !0, (dd => {
                const Od = new Hd.StandardMaterial(`${dd.name}_depthOnly`, dd.zV());
                return Od.disableColorWrite = !0, Od
              }))
            }
            XO.setPosition(KO, 0, -12, 0), tO.set(null), yO("pet", "pet_none"), yO("aura", "aura_none")
          },
          isolatePet() {
            const dd = XO.getNodeNames(KO).length;
            for (let Od = 0; Od < dd; Od++) XO.setNodeEnabled(KO, Od, !1);
            RO.rY(!1), yO("aura", "aura_none"), tO.set(null), QO.isolatePet()
          }
        }, this.closed = !1, this.resetCamera(), null === (md = tO) || void 0 === md || md.set(null);
        const Wd = dd.getBoundingClientRect();
        bO(Wd.width, Wd.height), TO++, OO.stopRenderLoop(), OO.runRenderLoop((() => {
          var dd, Od, md, Wd;
          null === (dd = hO) || void 0 === dd || dd.render(OO.getDeltaTime());
          const Fd = performance.now() / 1e3;
          null === (Od = vO) || void 0 === Od || Od.writePoses(Fd), null === (md = QO) || void 0 === md || md.writePose(Fd), null === (Wd = tO) || void 0 === Wd || Wd.update(mO), WO.render()
        }))
      }
      isReady() {
        return !!FO
      }
      setCosmetic(dd, Od) {
        yO(dd, Od)
      }
      setNametag(dd) {
        var Od;
        null === (Od = tO) || void 0 === Od || Od.set(dd)
      }
      playEmote(dd) {
        if (!hO) return;
        if (!dd) return void hO.stopAnimation(hd.c.Emote);
        const Od = (0, Xd.h)((0, Kd.j)(dd).animation);
        hO.startAnimation(Od, hd.c.Emote, 0, Kd.d)
      }
      async untilDrawn(dd) {
        if (await qO(), "cape" === dd && RO) {
          const dd = RO.material,
            Od = null === dd || void 0 === dd ? void 0 : dd.diffuseTexture;
          Od && !Od.isReady() && (await new Promise((dd => {
            Od.onLoadObservable.addOnce((() => {
              dd()
            }))
          })), await qO())
        }
        HO[dd] && (await HO[dd], await qO()), await WO.whenReadyAsync(), await new Promise((dd => {
          WO.onAfterRenderObservable.addOnce((() => {
            dd()
          }))
        }))
      }
      setOrbit(dd) {
        YO(dd)
      }
      resetCamera() {
        mO.inertialAlphaOffset = 0, mO.inertialBetaOffset = 0, mO.inertialRadiusOffset = 0, YO(fd.c[this.framing])
      }
      resize(dd, Od) {
        bO(dd, Od)
      }
      close() {
        var dd;
        this.closed || (this.closed = !0, TO--, 0 === TO && (OO.stopRenderLoop(), null === (dd = tO) || void 0 === dd || dd.set(null)))
      }
    }

    function YO(dd) {
      let {
        yaw: Od,
        pitch: md,
        radius: Wd,
        target: Fd
      } = dd;
      mO.alpha = Od, mO.beta = md, Wd && (mO.radius = Wd), Fd && mO.target.set(Fd[0], Fd[1], Fd[2])
    }

    function gO(dd, Od) {
      return dd.appendChild(NO), OO || function() {
        OO = new vd.d(NO, !0, {
          preserveDrawingBuffer: !0
        });
        const dd = (0, Fd.c)();
        OO.JFd = dd.gt.engine.JFd, WO = new Qd.e(OO), WO.clearColor = new qd.b(0, 0, 0, 0), WO.ambientColor = new qd.Color3(1, 1, 1), mO = new td.e("Qb", 0, 0, 1, od.Cq.Zero(), WO), mO.attachControl(NO, !0), mO.panningSensibility = 0, oO = (0, Wd.x)("Player", WO, !0).then((Od => {
          FO = Od.meshApi, RO = Od.capeMesh, XO = dd.gt.HA;
          const md = 8.33;
          KO = (0, Wd.m)("Player", md, !0, !0), XO.setPosition(KO, 0, -8.33, 0);
          const Fd = XO.getNamedNode(KO, "BodyMesh");
          XO.attachTransformNode(RO, KO, Fd), XO.set(KO, "aOpacity", 1), XO.rG(KO, "aOpacity", 1), vO = new Td.e(WO, XO, KO), QO = new Vd(WO, md), tO = new Zd(WO, md), hO = new bd.AnimatorState, hO.zo = dd, hO.thinInstMgr = XO, hO.JA = KO, hO.fWd = XO.QFd(KO, 0), hO.modelLifeformType = "Player", hO.nodeNameAliases = (0, kd.e)("Player").nodeNameAliases;
          const Rd = RO.iG().boundingBox;
          RO.position.y = ((24 - Rd.maximum.y + Rd.minimum.y) / 2 - 1 / 32) / md, RO.position.z = -1 / md, RO.rotationQuaternion = null;
          const Xd = Math.PI / 18,
            Kd = Rd.maximum.y / md;
          RO.rotation.x = Xd;
          const hd = Math.cos(Xd),
            vd = Math.sin(Xd);
          RO.position.y += Kd * (1 - hd) + 0 * vd, RO.position.z -= Kd * vd + 0 * (1 - hd);
          const Qd = new Hd.StandardMaterial("capeMaterial", RO.zV());
          RO.material = Qd;
          const td = new qd.Color3(1, 1, 1);
          Qd.diffuseColor = new qd.Color3, Qd.specularColor = new qd.Color3, Qd.emissiveColor = new qd.Color3, Qd.ambientColor = new qd.Color3, td.scaleToRef(.43, Qd.diffuseColor), td.scaleToRef(1.75, Qd.ambientColor), Qd.freeze();
          const yd = new Nd.e("light", new od.Cq(-.1, 1, -.3), WO);
          yd.diffuse = new qd.Color3(1, 1, 1), yd.specular = new qd.Color3(1, 1, 1), yd.groundColor = new qd.Color3(.5, .5, .5)
        }))
      }(), new pO(dd, Od)
    }
  },
  37846: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd,
      e: () => Xd
    });
    var Wd = md(4515);
    let Fd = null,
      Rd = null;

    function Xd() {
      return Rd ??= md.e(242).then((() => md(37698))).then((dd => {
        let {
          ITEM_SPRITES: Od,
          ITEM_SPRITES_WITHOUT_FILE: md,
          ITEM_FILES_WITHOUT_SPRITE: Rd
        } = dd;
        Fd = function(dd, Od, md) {
          const Fd = new Set,
            Rd = (0, Wd.C)(Od);
          let Xd = 0;
          for (const [Wd, Kd] of dd.entries()) Wd === Rd[Xd] ? Xd++ : Fd.add(Kd);
          if ("" !== md)
            for (const Kd of md.split(Wd.v)) Fd.add(Kd);
          return Fd
        }(Od.split(Wd.v), md, Rd)
      }), (dd => {
        throw Rd = null, dd
      })), Rd
    }

    function Kd(dd) {
      var Od, md;
      return null !== (Od = null === (md = Fd) || void 0 === md ? void 0 : md.has(dd)) && void 0 !== Od && Od
    }
  },
  35482: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd
    });
    var Wd = md(1368);

    function Fd() {
      var dd, Od;
      return null !== (dd = null === (Od = screen.orientation) || void 0 === Od ? void 0 : Od.type) && void 0 !== dd ? dd : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Rd = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Fd() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Fd(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Wd.rH)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const dd of this.resizers) dd()
          }
        }), 1e3)
      }
      heldSizer(dd) {
        let Od = !1;
        return () => {
          if (Od && this.isHeld()) return null;
          const md = dd();
          return Od ||= null !== md, md
        }
      }
      onRelease(dd) {
        return this.resizers.add(dd), () => {
          this.resizers.delete(dd)
        }
      }
    }
  },
  37729: (dd, Od, md) => {
    function Wd(dd, Od, md) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(dd, Od).getContext("2d", md);
      const Wd = document.createElement("canvas");
      return Wd.width = dd, Wd.height = Od, Wd.getContext("2d", md)
    }

    function Fd(dd, Od) {
      return dd.getContext("2d", Od)
    }
    md.d(Od, {
      e: () => Fd,
      i: () => Wd
    })
  },
  43152: (dd, Od, md) => {
    function Wd(dd, Od, md) {
      return new Promise((Wd => {
        const Fd = setTimeout((() => {
            Rd(), Wd(null)
          }), md),
          Rd = Od((() => {
            clearTimeout(Fd);
            const Od = dd();
            Wd(null === Od ? null : function(dd) {
              if (0 === dd.width || 0 === dd.height) return null;
              const Od = document.createElement("canvas");
              Od.width = dd.width, Od.height = dd.height;
              const md = Od.getContext("2d");
              return md ? (md.drawImage(dd, 0, 0), Od) : null
            }(Od))
          }))
      }))
    }
    md.d(Od, {
      b: () => Wd
    })
  },
  37713: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd
    });
    const Wd = 4e5,
      Fd = 2;

    function Rd(dd, Od, md) {
      let [Rd, Xd] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [dd, Od], Kd = Math.min(Number.isFinite(md) && md > 0 ? md : 1, Fd);
      const hd = Math.max(0, Rd, dd) * Math.max(0, Xd, Od) * Kd * Kd;
      return hd > Wd && (Kd *= Math.sqrt(Wd / hd)), [Math.max(1, Math.floor(Math.max(0, dd) * Kd)), Math.max(1, Math.floor(Math.max(0, Od) * Kd))]
    }
  },
  37755: (dd, Od, md) => {
    md.d(Od, {
      d: () => wd,
      e: () => Bd,
      i: () => Sd,
      m: () => sd
    });
    var Wd = md(37763),
      Fd = md(7874),
      Rd = md(7953),
      Xd = md(37765),
      Kd = md(37772),
      hd = md(37775),
      vd = md(8286),
      Qd = md(8407),
      td = md(37784),
      od = md(8587),
      Nd = md(7723),
      qd = md(8838),
      Hd = md(37787),
      yd = md(37789),
      bd = md(8874),
      Td = md(37796),
      pd = md(37801),
      Yd = md(405);
    const gd = {
        redTeam: Rd.e,
        blueTeam: yd.d,
        greenTeam: pd.f,
        yellowTeam: bd.c,
        cyanTeam: hd.e,
        whiteTeam: Nd.faPlus,
        pinkTeam: Qd.e,
        grayTeam: td.f,
        blackTeam: Hd.d,
        orangeTeam: Td.f,
        lilacTeam: Xd.h,
        purpleTeam: od.g,
        magentaTeam: Kd.h,
        brownTeam: Wd.g,
        limeTeam: Fd.faBolt,
        lightGrayTeam: vd.g,
        lightBlueTeam: qd.e
      },
      wd = Object.fromEntries(Object.values(gd).map((dd => [Ed(dd), dd])));

    function Ed(dd) {
      return `team-${dd.iconName}`
    }
    const Jd = new Map;
    for (const [ud, Vd] of Object.entries(gd)) {
      const dd = Ed(Vd),
        Od = Yd.E[ud];
      Od && Jd.set(Od.toLowerCase(), {
        icon: dd,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "white",
          iconShadowRGB: "black"
        },
        visible: !0
      })
    }
    let Ud = !1;
    const xd = new Set;

    function Bd(dd) {
      if (dd !== Ud) {
        Ud = dd;
        for (const dd of xd) dd()
      }
    }

    function Sd(dd) {
      var Od;
      return "string" === typeof dd && Ud && null !== (Od = Jd.get(dd.toLowerCase())) && void 0 !== Od ? Od : null
    }

    function sd(dd) {
      return xd.add(dd), () => {
        xd.delete(dd)
      }
    }
  },
  37837: (dd, Od, md) => {
    md.d(Od, {
      c: () => Qd,
      e: () => hd,
      i: () => Kd,
      j: () => vd
    });
    var Wd = md(2100);
    let Fd = null,
      Rd = 0;
    const Xd = new Set;

    function Kd() {
      return Fd
    }

    function hd() {
      return Rd
    }

    function vd(dd) {
      Fd = dd, Rd++, (0, Wd.d)();
      for (const Od of Xd) Od()
    }

    function Qd(dd) {
      Xd.add(dd)
    }
  },
  37839: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd,
      d: () => Kd
    });
    var Wd = md(37846);
    let Fd = null,
      Rd = null;

    function Xd() {
      return Fd ??= md.e(74).then((() => md(43159))).catch((dd => {
        throw Fd = null, dd
      })), Fd
    }

    function Kd() {
      return Rd ??= Promise.all([Xd(), (0, Wd.e)()]).then((dd => {
        let [Od] = dd;
        return Od
      }), (dd => {
        throw Rd = null, dd
      })), Rd
    }
  },
  37746: (dd, Od, md) => {
    md.d(Od, {
      d: () => wd
    });
    var Wd = md(5134),
      Fd = md(1322),
      Rd = md(689),
      Xd = md(2178),
      Kd = md(37755),
      hd = md(37740);
    const vd = 10,
      Qd = 3,
      td = 3,
      od = [{
        healthFraction: .25,
        colour: "#ff0000"
      }, {
        healthFraction: .5,
        colour: "#ffaa00"
      }, {
        healthFraction: 1,
        colour: "#00ff00"
      }],
      Nd = 64,
      qd = 69,
      Hd = {
        icon: Xd.e,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "#f38ab6",
          iconShadowRGB: "black"
        },
        visible: !0
      };

    function yd(dd) {
      return "object" !== typeof dd || null === dd || Array.isArray(dd) ? void 0 : dd
    }
    const bd = new Set(Wd.e);

    function Td(dd, Od) {
      return "string" === typeof dd ? (0, hd.s)(dd, Od) : Od
    }

    function pd(dd) {
      return Td(dd.width, Qd)
    }

    function Yd(dd, Od) {
      var md;
      const Wd = null !== (md = dd.applyTo) && void 0 !== md ? md : "both";
      return "both" === Wd || Wd === Od
    }

    function gd(dd) {
      const Od = pd(dd);
      return "glow" === dd.style ? Od * td : Math.ceil(Od / 2) + 1
    }

    function wd(dd, Od, md) {
      var Wd, Xd;
      const Qd = null !== (Wd = yd(dd.info)) && void 0 !== Wd ? Wd : {},
        wd = "string" === typeof dd.name ? dd.name : "",
        Ed = Qd.subtitle;
      if (Array.isArray(Qd.content) && 0 === Qd.content.length && !(Array.isArray(Ed) && Ed.length > 0)) return null;
      const Jd = "number" === typeof dd.hideNameSeed ? dd.hideNameSeed : null,
        Ud = "" === wd || !0 === dd.mesh ? wd : (0, Fd.b)(wd, !md.canSeeRealPlayerNames, Jd);
      if (!Ud && !Qd.content) return null;
      const xd = "string" === typeof dd.colour ? dd.colour : "default",
        Bd = Object.hasOwn(Rd.q, xd) ? Rd.q[xd] : void 0,
        Sd = Qd.content ? (0, hd.i)(Qd.content, hd.c.DEFAULT_FONT_SIZE, md, Bd) : [{
          kind: "text",
          text: Ud,
          size: hd.c.DEFAULT_FONT_SIZE,
          colour: Bd
        }],
        sd = [],
        ud = "boolean" === typeof dd.player ? dd.player : Array.isArray(dd.ranks),
        Vd = ud ? (0, Kd.i)(Qd.backgroundColor) : null;
      Vd && sd.push({
        kind: "rank",
        rank: Vd
      });
      for (const Fd of Array.isArray(dd.ranks) ? dd.ranks : []) {
        const dd = (0, hd.t)(Fd);
        null !== dd && void 0 !== dd && dd.nameTag && dd.visible && sd.push({
          kind: "rank",
          rank: dd
        })
      }
      sd.push(...Sd), ud && "" !== wd && md.isFriend(wd) && sd.push({
        kind: "rank",
        rank: Hd
      }), "number" === typeof dd.UX && sd.push({
        kind: "text",
        text: ` ${dd.UX}m`,
        size: hd.c.DEFAULT_FONT_SIZE,
        colour: "#cef3ff"
      });
      const Ad = Ed ? (0, hd.i)(Ed, hd.c.DEFAULT_SUBTITLE_FONT_SIZE, md) : null,
        rd = "string" === typeof Qd.backgroundColor ? Qd.backgroundColor : "#22283b",
        Gd = "string" === typeof Qd.subtitleBackgroundColor ? Qd.subtitleBackgroundColor : "#1a1e2d",
        nd = yd(Qd.healthbar),
        Ld = yd(Qd.border),
        Pd = Array.isArray(dd.effects) ? dd.effects.filter((dd => "string" === typeof dd && bd.has(dd))) : [],
        zd = "number" === typeof dd.health ? Math.max(0, Math.min(1, dd.health)) : null,
        cd = (0, hd.e)(sd, Od, md),
        jd = (0, hd.e)(null !== Ad && void 0 !== Ad ? Ad : [], Od, md),
        Dd = {
          width: hd.c.EFFECT_ICON_SIZE * Pd.length,
          height: Pd.length > 0 ? hd.c.EFFECT_ICON_SIZE : 0
        },
        ed = Ld && Yd(Ld, "nametag") ? gd(Ld) : 0,
        Id = Td(null === nd || void 0 === nd ? void 0 : nd.height, vd),
        ld = Ld && Yd(Ld, "healthbar") ? gd(Ld) : 0,
        Cd = "never" === (null !== (Xd = null === nd || void 0 === nd ? void 0 : nd.display) && void 0 !== Xd ? Xd : "onDamage") ? 0 : Id + ld,
        Zd = Math.max(Dd.height, ed),
        kd = Math.max(hd.c.VERTICAL_PADDING, Cd, ed);
      let fd = Math.max(cd.width, jd.width, Dd.width);
      if (Ld) {
        const dd = gd(Ld) + hd.c.HORIZONTAL_PADDING / 2;
        fd = Math.max(fd, Math.max(cd.width, jd.width) + hd.c.HORIZONTAL_PADDING + 2 * dd)
      }
      const Md = cd.height + jd.height + Zd + kd,
        dO = cd.width + hd.c.HORIZONTAL_PADDING,
        OO = jd.width + hd.c.HORIZONTAL_PADDING,
        mO = Math.max(dO, OO),
        WO = (fd - mO) / 2,
        FO = Math.max(Dd.height, ed);
      return {
        width: fd,
        height: Md,
        draw: dd => {
          const Od = [];
          if (dd.fillStyle = rd, dd.fillRect(WO, FO, mO, cd.height), (0, hd.p)(sd, (fd - dO) / 2 + hd.c.HORIZONTAL_PADDING / 2, FO, cd.height, dd, md, Od), Ad) {
            const Wd = FO + cd.height;
            dd.fillStyle = Gd, dd.fillRect(WO, Wd, mO, jd.height), (0, hd.p)(Ad, (fd - OO) / 2 + hd.c.HORIZONTAL_PADDING / 2, Wd, jd.height, dd, md, Od)
          }
          let Wd = null;
          if (null !== zd) {
            const Od = Md - Id - ld;
            null !== nd && void 0 !== nd && nd.backgroundColour && (dd.fillStyle = nd.backgroundColour, dd.fillRect(WO, Od, mO, Id)), dd.fillStyle = function(dd, Od) {
              const md = null === dd || void 0 === dd ? void 0 : dd.foregroundColour;
              if ("string" === typeof md) return md;
              const Wd = [...Array.isArray(md) && md.length > 0 ? md : od].sort(((dd, Od) => dd.healthFraction - Od.healthFraction)),
                Fd = Wd.find((dd => Od <= dd.healthFraction));
              return (null !== Fd && void 0 !== Fd ? Fd : Wd[Wd.length - 1]).colour
            }(nd, zd), dd.fillRect(WO, Od, Math.round(mO * zd), Id), Wd = {
              x: WO,
              y: Od,
              width: mO,
              height: Id
            }
          }
          if (Ld) {
            const Od = [];
            Yd(Ld, "nametag") && Od.push({
              x: WO,
              y: FO,
              width: mO,
              height: cd.height + (Ad ? jd.height : 0)
            }), Wd && Yd(Ld, "healthbar") && Od.push(Wd), Od.length > 0 && function(dd, Od, md) {
              const Wd = pd(Od),
                Fd = Wd / 2,
                Rd = dd => dd.width > 0 && dd.height > 0,
                Xd = md.map((dd => ({
                  x: dd.x + Fd,
                  y: dd.y + Fd,
                  width: dd.width - Wd,
                  height: dd.height - Wd
                }))).filter(Rd);
              if (0 === Xd.length) return;
              const Kd = Od => {
                const md = Od.filter(Rd);
                if (0 !== md.length) {
                  dd.beginPath();
                  for (const Od of md) dd.rect(Od.x, Od.y, Od.width, Od.height);
                  dd.stroke()
                }
              };
              if (dd.save(), dd.strokeStyle = Od.colour, dd.lineWidth = Wd, dd.lineJoin = "round", "glow" === Od.style) dd.shadowColor = Od.colour, dd.shadowBlur = Wd * td, Kd(Xd), Kd(Xd);
              else if ("double" === Od.style) {
                Kd(Xd);
                const dd = Wd + 2;
                Kd(Xd.map((Od => ({
                  x: Od.x + dd,
                  y: Od.y + dd,
                  width: Od.width - 2 * dd,
                  height: Od.height - 2 * dd
                }))))
              } else Kd(Xd);
              dd.restore()
            }(dd, Ld, Od)
          }(0, hd.k)(Od, dd);
          for (let Fd = 0; Fd < Pd.length; Fd++) {
            const Od = md.effectImage(Pd[Fd]);
            Od && (dd.imageSmoothingEnabled = !1, dd.drawImage(Od, 5 + qd * Fd, 5, Nd, Nd))
          }
        }
      }
    }
  },
  37740: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      e: () => Td,
      i: () => Nd,
      k: () => gd,
      m: () => Yd,
      p: () => pd,
      s: () => vd,
      t: () => td
    });
    var Wd = md(689),
      Fd = md(387);
    const Rd = {
        DEFAULT_FONT_SIZE: 47,
        DEFAULT_SUBTITLE_FONT_SIZE: 30,
        HORIZONTAL_PADDING: 30,
        VERTICAL_PADDING: 22,
        TEXT_SHADOW_WIDTH: 2,
        LINE_SPACING: 8,
        EFFECT_ICON_SIZE: 70
      },
      Xd = 41;

    function Kd(dd) {
      return `bolder ${dd}px 'Jetbrains Mono'`
    }

    function hd(dd) {
      return "object" === typeof dd && null !== dd
    }

    function vd(dd, Od) {
      const md = "number" === typeof dd ? dd : "string" === typeof dd ? Number(dd.replace("px", "")) : NaN;
      return Number.isFinite(md) && md > 0 ? md : Od
    }

    function Qd(dd) {
      return hd(dd) ? dd : void 0
    }

    function td(dd) {
      const Od = "number" === typeof dd ? Wd.r[dd] : dd;
      return "string" === typeof Od && Object.hasOwn(Wd.l, Od) ? Wd.l[Od] : void 0
    }

    function od(dd, Od) {
      return "string" === typeof dd ? dd : hd(dd) ? "string" === typeof dd.translationKey ? Od.translate(dd.translationKey, dd.params).map((dd => "string" === typeof dd ? dd : dd.icon)).join("") : "string" === typeof dd.entityName ? Od.shownPlayerName(dd.entityName) : "" : void 0 === dd || null === dd ? "" : String(dd)
    }

    function Nd(dd, Od, md, Wd) {
      if (!Array.isArray(dd)) return [];
      const Xd = [];
      for (const qd of dd) {
        var Kd, td;
        if (hd(qd) && "chatTag" in qd) {
          Xd.push({
            kind: "rank",
            rank: qd
          });
          continue
        }
        if (hd(qd) && "icon" in qd && !("mainRGB" in qd)) {
          var Nd;
          Xd.push({
            kind: "icon",
            icon: String(qd.icon),
            size: vd(null === (Nd = Qd(qd.style)) || void 0 === Nd ? void 0 : Nd.fontSize, Rd.DEFAULT_FONT_SIZE)
          });
          continue
        }
        if (hd(qd) && (0, Fd.wb)(qd)) {
          Xd.push({
            kind: "text",
            text: "",
            size: Od,
            colour: Wd
          });
          continue
        }
        let dd, Hd;
        hd(qd) && (0, Fd.sb)(qd) ? (dd = md.keyBindingText(String(qd.action)), Hd = Qd(qd.style)) : hd(qd) && "str" in qd ? (dd = qd.str, Hd = Qd(qd.style)) : dd = qd;
        const yd = vd(null === (Kd = Hd) || void 0 === Kd ? void 0 : Kd.fontSize, Od),
          bd = null !== (td = (0, Fd.Yb)(Hd)) && void 0 !== td ? td : Wd;
        if (hd(dd) && "string" === typeof dd.translationKey) {
          const Od = md.translate(dd.translationKey, dd.params);
          if (Od.some((dd => "string" !== typeof dd))) {
            for (const dd of Od) Xd.push("string" === typeof dd ? {
              kind: "text",
              text: dd,
              size: yd,
              colour: bd
            } : {
              kind: "icon",
              icon: dd.icon,
              size: yd
            });
            continue
          }
        }
        Xd.push({
          kind: "text",
          text: od(dd, md),
          size: yd,
          colour: bd
        })
      }
      return Xd
    }

    function qd(dd) {
      return void 0 !== dd && "rank" !== dd.kind
    }

    function Hd(dd, Od) {
      const md = qd(dd),
        Wd = qd(Od);
      return void 0 === dd && !Wd || !md && void 0 === Od ? 0 : md !== Wd ? .5 * Rd.HORIZONTAL_PADDING : 0
    }

    function yd(dd) {
      return "rank" === dd.kind ? Rd.DEFAULT_FONT_SIZE : dd.size
    }

    function bd(dd, Od, md) {
      return "icon" === dd.kind ? dd.size : "rank" === dd.kind ? function(dd, Od) {
        const md = Od.rankIcon(dd.rank.icon);
        return md ? Xd * (md.width / md.height) : Xd
      }(dd, md) + Rd.HORIZONTAL_PADDING : (md.glyphsShown(dd.text), Od.font = Kd(dd.size), Od.measureText(dd.text).width)
    }

    function Td(dd, Od, md) {
      if (0 === dd.length) return {
        width: 0,
        height: 0,
        sizes: []
      };
      let Wd = 0;
      for (const Rd of dd) Wd = Math.max(Wd, yd(Rd));
      const Fd = [];
      let Xd = Hd(void 0, dd[0]);
      for (let Rd = 0; Rd < dd.length; Rd++) {
        const Wd = Xd;
        Xd += bd(dd[Rd], Od, md), Xd += Hd(dd[Rd], dd[Rd + 1]), Fd.push({
          x: Wd,
          width: Xd - Wd
        })
      }
      return {
        width: Xd,
        height: Wd + Rd.VERTICAL_PADDING,
        sizes: Fd
      }
    }

    function pd(dd, Od, md, Wd, Fd, Rd, Xd) {
      Od += Hd(void 0, dd[0]);
      for (let Kd = 0; Kd < dd.length; Kd++) {
        const hd = Yd(dd[Kd], Od, md, Wd, Fd, Rd, Xd);
        Od += 0 === hd ? 0 : hd + Hd(dd[Kd], dd[Kd + 1])
      }
    }

    function Yd(dd, Od, md, Wd, Fd, hd, vd, Qd) {
      var td;
      if ("icon" === dd.kind) {
        const Wd = hd.iconImage(dd.icon);
        return Wd && vd.push({
          image: Wd,
          x: Od,
          y: md + Rd.VERTICAL_PADDING / 2,
          size: dd.size
        }), dd.size
      }
      if ("rank" === dd.kind) {
        const Kd = null !== Qd && void 0 !== Qd ? Qd : bd(dd, Fd, hd);
        return function(dd, Od, md, Wd, Fd, Kd, hd) {
          var vd, Qd;
          const {
            rank: td
          } = dd;
          Kd.fillStyle = td.mainRGB, Kd.fillRect(Od, md, Wd, Fd);
          const od = hd.rankIcon(td.icon);
          if (!od) return;
          const Nd = Xd / od.height,
            qd = Od + (Wd - od.width * Nd) / 2,
            Hd = md + (Fd - Xd) / 2,
            yd = new Path2D(od.path),
            bd = Rd.TEXT_SHADOW_WIDTH,
            Td = (null === (vd = td.nameTag) || void 0 === vd ? void 0 : vd.iconShadowRGB) || "black";
          for (const Rd of [-1, 1])
            for (const dd of [-1, 1]) wd(Kd, yd, qd + bd * Rd, Hd + bd * dd, Nd, Td);
          wd(Kd, yd, qd, Hd, Nd, (null === (Qd = td.nameTag) || void 0 === Qd ? void 0 : Qd.iconRGB) || "white")
        }(dd, Od, md, Kd, Wd, Fd, hd), Kd
      }
      if (0 === dd.text.length) return 0;
      const od = Kd(dd.size);
      Fd.font = od;
      const Nd = null !== Qd && void 0 !== Qd ? Qd : Fd.measureText(dd.text).width;
      return function(dd, Od, md, Wd, Fd, Xd) {
        const Kd = Rd.TEXT_SHADOW_WIDTH;
        Xd.font = Wd, Xd.fillStyle = "black";
        for (const Rd of [-1, 1])
          for (const Wd of [-1, 1]) Xd.fillText(dd, Od + Kd * Rd, md + Kd * Wd);
        Xd.fillStyle = Fd, Xd.fillText(dd, Od, md)
      }(dd.text, Od, md + Wd - Rd.VERTICAL_PADDING + 5, od, null !== (td = dd.colour) && void 0 !== td ? td : "white", Fd), Nd
    }

    function gd(dd, Od) {
      for (const {
          image: md,
          x: Wd,
          y: Fd,
          size: Rd
        }
        of dd) Od.imageSmoothingEnabled = !1, Od.drawImage(md, Wd, Fd, Rd, Rd)
    }

    function wd(dd, Od, md, Wd, Fd, Rd) {
      dd.save(), dd.translate(md, Wd), dd.scale(Fd, Fd), dd.fillStyle = Rd, dd.fill(Od), dd.restore()
    }
  },
  37829: (dd, Od, md) => {
    md.d(Od, {
      d: () => kd,
      h: () => WO,
      i: () => ed,
      j: () => ld,
      l: () => Cd,
      n: () => Zd,
      o: () => XO,
      r: () => Id,
      u: () => jd
    });
    var Wd = md(5134),
      Fd = md(5155),
      Rd = md(35549),
      Xd = md(4509),
      Kd = md(4502),
      hd = md(1455),
      vd = md(37729),
      Qd = md(107),
      td = md(1315),
      od = md(37755),
      Nd = md(37837),
      qd = md(37839),
      Hd = md(9278),
      yd = md(8672),
      bd = md(8854),
      Td = md(8980),
      pd = md(9116),
      Yd = md(9133);
    const gd = {
      youtube: Hd.g,
      "person-military-pointing": yd.d,
      sparkle: bd.c,
      user: Td.i,
      wrench: pd.h,
      zap: Yd.f,
      ...od.d
    };

    function wd(dd) {
      const [Od, md, , , Wd] = dd.icon;
      return {
        width: Od,
        height: md,
        path: "string" === typeof Wd ? Wd : Wd.join(" ")
      }
    }
    const Ed = new Map(Object.entries(gd).map((dd => {
      let [Od, md] = dd;
      return [Od, wd(md)]
    })));
    let Jd = !1;
    const Ud = new Set;
    var xd = md(37851);
    const Bd = "Jetbrains Mono",
      Sd = "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+2248,U+26A1,U+2713,U+FEFF,U+FFFD",
      sd = "U+0100-0130,U+0132-0151,U+0154-017F,U+018F-0190,U+0192,U+019B,U+01A0-01A1,U+01AF-01B0,U+01CD-01CE,U+01D0,U+01D2,U+01D4,U+01D6,U+01D8,U+01DA,U+01DC,U+01E6-01E7,U+01EA-01EB,U+01F4-01F5,U+01FC-01FF,U+0218-021B,U+0232-0233,U+0237,U+0259,U+02B9-02BA,U+02C7,U+02C9,U+02D8-02D9,U+02DB,U+02DD,U+02F3,U+02F7,U+0300-0303,U+0306-0307,U+0309-030C,U+030F,U+0312,U+031B,U+0323,U+0325-0328,U+0336-0338,U+0374-0375,U+037E,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03CF,U+03D5-03D7,U+0401-040C,U+040E-044F,U+0451-045C,U+045E-045F,U+0490-0493,U+049A-049B,U+04A2-04A3,U+04AE-04B1,U+04B6-04B7,U+04BA-04BB,U+04D8-04D9,U+04DC-04DF,U+04E4-04E9,U+04F4-04F5,U+0AEA,U+1E80-1E85,U+1E9E,U+1EA0-1EF9,U+2070,U+2074-207A,U+207C,U+2080-2089,U+20AB,U+20AE,U+20B4,U+20BD,U+20BF,U+2102,U+210D,U+2113,U+2115-2116,U+2119-211A,U+211D,U+2124,U+212E,U+2140,U+218A-218B,U+2194-2199,U+219D-219E,U+21A0,U+21A2-21A3,U+21A5-21A7,U+21A9-21AA,U+21AD,U+21BE,U+21C9,U+21D0-21D4,U+21DB,U+21DE-21DF,U+21E5,U+21E7-21E8,U+21EA,U+2200-220C,U+220E-2211,U+2213,U+2218-221A,U+221E,U+2223-2225,U+2227-222B,U+2234-2239,U+223C,U+223E,U+2243,U+2245,U+2247,U+2249,U+224B,U+224D,U+2254,U+2257,U+225F-2265,U+226A-2273,U+227A-227C,U+2282-2289,U+228E-2299,U+229B-22A5,U+22B4,U+22B8,U+22BB-22BD,U+22C2-22C4,U+22C6,U+22C8-22CA,U+22CE,U+22D0,U+22E2,U+22EE-22F1,U+2302-2305,U+2308-230B,U+2318,U+231C-231F,U+2324-2326,U+2328,U+232B,U+2336-237A,U+2389-238B,U+2395,U+239B-23AD,U+23CE,U+23FB-23FE,U+2400-2421,U+2423-2424,U+2500-25A1,U+25AA-25AB,U+25B2-25CC,U+25CE-25CF,U+25D4-25D5,U+25E6-25EB,U+25EF,U+25F6,U+266D,U+266F,U+2687,U+26A0,U+2715,U+2717,U+2736,U+276E-2771,U+2794,U+279C-279E,U+27C5-27C6,U+27DC,U+27E6-27EB,U+27F5-27F7,U+2916,U+294A,U+2987-2988,U+2A00,U+2A05-2A06,U+2B58,U+E0A0-E0A2,U+E0B0-E0B3,U+FE62,U+FF5B,U+FF5D,U+16910,U+1D538-1D539,U+1D53B-1D53E,U+1D540-1D544,U+1D546,U+1D54A-1D550,U+1D552-1D56B";

    function ud(dd) {
      return dd.split(",").map((dd => {
        const [Od, md = Od] = dd.slice(2).split("-");
        return [parseInt(Od, 16), parseInt(md, 16)]
      }))
    }
    const Vd = {
        latin: ud(Sd),
        rest: ud(sd)
      },
      Ad = new RegExp(`[${Vd.rest.map((dd=>{let[Od,md]=dd;return`\\u{${Od.toString(16)}}-\\u{${md.toString(16)}}`})).join("")}]`, "u");

    function rd(dd) {
      return Od => {
        console.warn(`[bloxd-wasm-client] the text font's ${dd} file did not load`, Od)
      }
    }
    const Gd = 397,
      nd = 1,
      Ld = {
        translate: dd => [dd],
        keyBindingText: dd => dd,
        isFriend: () => !1,
        hiddenNames: {},
        loadsFontRest: !1
      };
    let Pd = null,
      zd = 0,
      cd = "none";

    function jd() {
      return zd
    }
    const Dd = new Set;

    function ed(dd) {
      return Dd.add(dd), () => {
        Dd.delete(dd)
      }
    }

    function Id() {
      zd++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? cd = "all" : "none" === cd && (cd = "notBoards");
      for (const dd of Dd) dd()
    }(0, od.m)((() => {
      Id(!1)
    })), (0, hd.n)((() => {
      (function() {
        const dd = Jd;
        return Jd = !1, dd
      })() && Id(!1)
    }));
    const ld = new class {
      constructor(dd) {
        this.loaded = dd, this.latin = null, this.rest = null, this.restWanted = !1
      }
      load() {
        if (null === this.latin) {
          this.latin = new FontFace(Bd, `url(${(0,xd.d)()}) format("woff2")`, {
            unicodeRange: Sd
          }).load().then((dd => {
            document.fonts.add(dd), this.loaded()
          }), rd("Latin"));
          const dd = new FontFace(Bd, `url(${(0,xd.f)()}) format("woff2")`, {
            unicodeRange: sd,
            display: "swap"
          });
          document.fonts.add(dd), dd.loaded.then((() => {
            this.loaded()
          }), rd("rest")), this.rest = dd, this.restWanted && dd.load()
        }
        return this.latin
      }
      loadRest() {
        var dd;
        this.restWanted || (this.restWanted = !0, null === (dd = this.rest) || void 0 === dd || dd.load())
      }
      async untilLoadedFor(dd) {
        await this.load(), this.loadFor(dd), await document.fonts.load(`16px '${Bd}'`, dd).catch((Od => {
          console.warn("[bloxd-wasm-client] the text font did not load for", dd, Od)
        }))
      }
      loadFor(dd) {
        !this.restWanted && Ad.test(dd) && this.loadRest()
      }
    }(Id);

    function Cd(dd) {
      Object.assign(Ld, dd), Ld.loadsFontRest && ld.loadRest(), Id(!1)
    }

    function Zd(dd) {
      dd !== Pd && (Pd = dd, Id())
    }

    function kd(dd) {
      if ("none" === cd || null === dd) return;
      dd(Gd, "all" === cd ? 0 : nd, new Uint8Array(0)) && (cd = "none")
    }
    const fd = new Map,
      Md = new Map;

    function dO(dd, Od, md) {
      var Wd;
      const Fd = md ? `${dd}#${md.join(",")}` : dd,
        Rd = fd.get(Fd);
      if (Rd) return Rd.image;
      const Xd = {
        image: null !== (Wd = Md.get(Fd)) && void 0 !== Wd ? Wd : null
      };
      return fd.set(Fd, Xd), Od().then((async dd => {
        if (null === dd) return null;
        const Od = new Image;
        Od.crossOrigin = "anonymous", Od.src = dd, await Od.decode();
        const Wd = await createImageBitmap(Od);
        if (!md) return Wd;
        try {
          return function(dd, Od) {
            let [md, Wd, Fd] = Od;
            const Rd = (0, vd.i)(dd.width, dd.height),
              {
                canvas: Xd
              } = Rd;
            return Rd.drawImage(dd, 0, 0), Rd.globalCompositeOperation = "multiply", Rd.fillStyle = `rgb(${md}, ${Wd}, ${Fd})`, Rd.fillRect(0, 0, Xd.width, Xd.height), Rd.globalCompositeOperation = "destination-in", Rd.drawImage(dd, 0, 0), Xd
          }(Wd, md)
        } finally {
          Wd.close()
        }
      })).then((dd => {
        fd.get(Fd) === Xd && Md.delete(Fd), dd !== Xd.image && (Xd.image = dd, Id(!1))
      }), (Od => {
        console.warn(`[bloxd-wasm-client] text icon ${dd} did not load`, Od), fd.get(Fd) === Xd && (fd.delete(Fd), Md.delete(Fd), null !== Xd.image && Id(!1))
      })), Xd.image
    }(0, Nd.c)((() => {
      Md.clear();
      for (const [dd, {
          image: Od
        }] of fd) null !== Od && Md.set(dd, Od);
      fd.clear(), Id(!1)
    }));
    const OO = new Set(Wd.e),
      mO = new Set(["CubeBlock", "SlabBlock", "StairsBlock"]);

    function WO() {
      (0, qd.d)().catch((() => {}))
    }

    function FO(dd) {
      return OO.has(dd) ? dO(`icon:${dd}`, (async () => {
        var Od, md;
        return null !== (Od = null === (md = (0, Nd.i)()) || void 0 === md ? void 0 : md.textureUrl(dd)) && void 0 !== Od ? Od : (await (0, qd.b)()).ingameIconUrl(dd)
      })) : null
    }
    let RO = "unasked";
    const XO = {
      get canSeeRealPlayerNames() {
        return Qd.featureFlags.canSeeRealPlayerNames
      },
      get canSeePlayerWrittenText() {
        return Qd.featureFlags.canSeePlayerWrittenText
      },
      get localPlayerDbId() {
        return Pd
      },
      shownPlayerName: dd => (0, td.e)(dd, Ld.hiddenNames),
      translate: (dd, Od) => {
        const md = "object" === typeof Od && null !== Od ? Od : void 0;
        return Ld.translate(dd, (0, td.g)(md, Ld.hiddenNames))
      },
      keyBindingText: dd => Ld.keyBindingText(dd),
      isFriend: dd => Ld.isFriend(dd, Ld.hiddenNames),
      iconImage: function(dd) {
        if (OO.has(dd)) return FO(dd);
        if ("unasked" === RO && (RO = "loading", (0, Kd.d)().then((() => {
            RO = "in", Id(!1)
          }), (dd => {
            RO = "failed", console.warn("[bloxd-wasm-client] the item sprite table did not load, so text item icons stay blank", dd)
          }))), "in" !== RO) return null;
        const Od = (0, Xd.d)(dd),
          md = void 0 === Od ? void 0 : (0, Rd.itemTypeNameOf)(Od);
        if ("Gun" === md) return null;
        const Wd = (0, Kd.c)(dd),
          hd = void 0 !== md && mO.has(md);
        if (hd && void 0 === Wd) return null;
        const vd = void 0 !== Od && "GrayscaleArmour" === (0, Rd.itemTypeOf)(Od) || Object.hasOwn(Fd.b, dd),
          Qd = null !== Wd && void 0 !== Wd ? Wd : dd;
        return dO(hd ? `block:${Qd}` : `item:${Qd}`, (async () => {
          var dd, Od;
          const md = (0, Nd.i)(),
            Wd = await (0, qd.d)();
          return null !== (dd = null !== (Od = null === md || void 0 === md ? void 0 : md.textureUrl(Qd)) && void 0 !== Od ? Od : Wd.itemSpriteUrl(Qd)) && void 0 !== dd ? dd : hd ? null : Wd.notFoundUrl()
        }), vd ? (0, Fd.c)(dd) : void 0)
      },
      effectImage: FO,
      rankIcon: function(dd) {
        const Od = Ed.get(dd);
        if (Od) return Od;
        const md = (0, hd.e)(dd, (0, hd.k)(dd));
        if (!md) return (0, hd.h)("brands") && (0, hd.h)("solid") ? Ud.has(dd) || (Ud.add(dd), console.warn(`[bloxd-wasm-client] unknown rank icon "${dd}": not in the bundled Font Awesome subset, so its tag draws no icon`)) : Jd = !0, null;
        const Wd = wd(md);
        return Ed.set(dd, Wd), Wd
      },
      glyphsShown: dd => {
        ld.loadFor(dd)
      }
    }
  },
  37851: (dd, Od, md) => {
    function Wd() {
      return md(37857)
    }

    function Fd() {
      return md(37866)
    }

    function Rd(dd) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(dd)
    }
    md.d(Od, {
      b: () => Rd,
      d: () => Wd,
      f: () => Fd
    })
  },
  37857: (dd, Od, md) => {
    dd.exports = md.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37866: (dd, Od, md) => {
    dd.exports = md.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);