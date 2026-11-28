export const id = 311;
export const ids = [311];
export const modules = {
  43035: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      openMobLineupPreview: () => Cd,
      openMobPreview: () => ld,
      openPetPreview: () => Zd
    });
    var Wd = md(41756),
      Fd = md(42016),
      Rd = md(43038),
      Xd = md(38736),
      Kd = md(38627),
      hd = md(42162),
      vd = md(43061),
      Qd = md(40001),
      td = md(38691),
      od = md(38673),
      Nd = md(38623),
      qd = md(39911),
      Hd = md(39906),
      yd = md(39645),
      bd = md(38698),
      Td = md(2402),
      pd = md(43068),
      Yd = md(3143);
    const gd = new Map;

    function wd(dd, Od) {
      const md = function(dd) {
        return dd.flatMap((dd => {
          var Od;
          let [md, Wd] = dd;
          const Fd = void 0 === Wd || null === (Od = (0, Yd.i)(md, Wd)) || void 0 === Od ? void 0 : Od.attachments;
          return null !== Fd && void 0 !== Fd ? Fd : []
        }))
      }(Od).map((Od => function(dd, Od) {
        let {
          modelGlb: md,
          texture: Wd,
          animation: Fd
        } = Od;
        const Rd = void 0 !== Fd,
          Xd = `${(0,bd.l)(md,Wd)}|${Rd}`;
        let Kd = gd.get(Xd);
        return Kd || (Kd = (0, pd.i)(dd, md, Wd, {
          keepTransforms: Rd,
          backFaceCulling: !1
        }).then(pd.m, (dd => {
          throw gd.delete(Xd), dd
        })), gd.set(Xd, Kd)), Kd
      }(dd, Od).then((dd => ({
        attachment: Od,
        nodes: dd
      })), (dd => (console.error(`Mob preview: could not load ${Od.modelGlb}`, dd), null)))));
      return Promise.all(md).then((dd => dd.filter((dd => null !== dd))))
    }
    var Ed = md(39693),
      Jd = md(39669),
      Ud = md(39327),
      xd = md(39155);
    md(43076), md(42420), md(43085);
    const Bd = 22,
      Sd = 13,
      sd = Math.PI - Math.PI / 16,
      ud = 6,
      Vd = Math.PI / 4;
    let Ad = null;
    const rd = {},
      Gd = new Map;

    function nd() {
      if (null !== Ad) return Ad;
      const dd = document.createElement("canvas");
      dd.classList.add("MobPreviewCanvas");
      const Od = new Wd.d(dd, !0, {
        preserveDrawingBuffer: !0
      });
      Od.JFd = (0, Td.c)().gt.engine.JFd;
      const md = new Fd.e(Od);
      md.clearColor = new Xd.b(0, 0, 0, 0), md.ambientColor = new Xd.Color3(1, 1, 1);
      const vd = new Rd.e("Qb", Math.PI / 2, Math.PI / 2, Bd, Kd.Cq.Zero(), md),
        Qd = new hd.e("light", new Kd.Cq(-.1, 1, -.3), md);
      return Qd.diffuse = new Xd.Color3(1, 1, 1), Qd.specular = new Xd.Color3(1, 1, 1), Qd.groundColor = new Xd.Color3(.5, .5, .5), Ad = {
        engine: Od,
        MH: md,
        canvas: dd,
        camera: vd
      }, Ad
    }

    function Ld(dd) {
      return rd[dd] ??= (0, yd.x)(dd, nd().MH, !0).catch((Od => {
        throw delete rd[dd], Od
      })), rd[dd]
    }

    function Pd(dd) {
      let Od = Gd.get(dd);
      return Od || (Od = Ud.v[dd].loadModel(nd().MH, !1).then((dd => (dd.rY(!1), dd)), (Od => {
        throw Gd.delete(dd), Od
      })), Gd.set(dd, Od)), Od
    }

    function zd() {
      return 2 * Bd * Math.tan(nd().camera.fov / 2)
    }

    function cd(dd) {
      var Od, md, Wd;
      let {
        mobType: Fd,
        variation: Rd,
        animation: Xd
      } = dd, hd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, Yd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const gd = null !== (Od = null === hd || void 0 === hd ? void 0 : hd.size) && void 0 !== Od ? Od : 1,
        Bd = null !== (md = null === hd || void 0 === hd ? void 0 : hd.cosmetics) && void 0 !== md ? md : [],
        ud = null !== (Wd = null === hd || void 0 === hd ? void 0 : hd.WE) && void 0 !== Wd ? Wd : null;
      let Vd = !1,
        Ad = null,
        rd = null;
      const {
        engine: Gd,
        MH: cd
      } = nd(), jd = cd.onBeforeRenderObservable.add((() => {
        var dd;
        null === (dd = rd) || void 0 === dd || dd.render(Gd.getDeltaTime())
      })), Dd = null === ud ? null : Pd(ud).catch((dd => (console.error(`Mob preview: could not load ${ud}`, dd), null)));
      return Promise.all([Ld(Fd), Dd, wd(nd().MH, Bd)]).then((dd => {
        var Od, md, Wd, wd;
        let [Gd, Ld, Pd] = dd;
        if (Vd) return;
        const cd = (0, Td.c)().gt.HA,
          {
            hitBoxDimensions: jd
          } = (0, Qd.e)(Fd),
          Dd = Sd / Math.max(jd.height, jd.width);
        if (Ad = (0, yd.m)(Fd, Dd * gd, !0, !0), cd.setPosition(Ad, Yd, -jd.height * Dd / 2 + (null !== (Od = null === hd || void 0 === hd ? void 0 : hd.lift) && void 0 !== Od ? Od : 0) * zd(), 0), cd.setRotationEulerY(Ad, sd), Gd.meshApi instanceof Jd.c && Bd.length > 0) {
          for (const [dd, Od] of Bd) Gd.meshApi.updatePlayerCosmetic(null, Ad, dd, Od, !0);
          ! function(dd, Od) {
            const md = (0, Td.c)().gt.HA;
            for (const {
                attachment: Wd,
                nodes: Fd
              }
              of dd) {
              const dd = Fd.get(Wd.modelNode);
              dd ? (0, pd.r)((0, bd.e)(dd, `${dd.name}Worn`), Wd, md, Od) : console.error(`Mob preview: attachment node ${Wd.modelNode} not found in ${Wd.modelGlb}`)
            }
          }(Pd, Ad)
        } else Gd.meshApi.updateVariation(Ad, Fd, null !== Rd && void 0 !== Rd ? Rd : "default");
        null !== ud && null !== Ld && function(dd, Od, md, Wd) {
          var Fd;
          const Rd = Ud.v[dd],
            Xd = (0, qd.j)();
          (0, qd.f)(Rd, null === (Fd = (0, Ed.d)(md).meshMetadata.heldItemPositionParams) || void 0 === Fd ? void 0 : Fd.itemOffset, Xd);
          const hd = xd.e * Xd.Tt.y,
            Qd = Xd.usesQuaternion ? Xd.quaternion : Kd.Quaternion.FromEulerVector(Xd.rotation),
            td = new vd.c(`${Od.name}Hand`, nd().MH);
          td.position.Bx((0, Hd.e)(Xd.position, Qd, hd, Rd.heldModelOffsetY())), td.rotationQuaternion = Qd, td.Tt.set(Xd.Tt.x, hd, Xd.Tt.z), Od.clone(`${Od.name}Held`, td).rY(!0);
          const od = (0, Td.c)().gt.HA;
          od.attachTransformNode(td, Wd, od.getNamedNode(Wd, "ArmRightMesh"))
        }(ud, Ld, Fd, Ad), cd.set(Ad, "aOpacity", 1);
        const ed = null !== (md = (0, Ed.d)(Fd).meshMetadata.lifeformTypeForModelOverride) && void 0 !== md ? md : Fd;
        rd = new Nd.AnimatorState, rd.thinInstMgr = cd, rd.JA = Ad, rd.fWd = cd.QFd(Ad, 0), rd.modelLifeformType = ed, rd.nodeNameAliases = null !== (Wd = null === (wd = (0, td.e)(ed)) || void 0 === wd ? void 0 : wd.nodeNameAliases) && void 0 !== Wd ? Wd : null, rd.startAnimation(Xd, od.c.Movement)
      })).catch((dd => {
        console.error(`Mob preview: could not load ${Fd}`, dd)
      })), () => {
        Vd = !0, cd.onBeforeRenderObservable.remove(jd), null !== Ad && (0, Td.c)().gt.HA.delete(Ad)
      }
    }

    function jd(dd, Od) {
      return cd({
        mobType: "NPC",
        variation: null,
        animation: dd.animation
      }, dd, Od)
    }

    function Dd(dd) {
      let {
        mobType: Od,
        variation: md,
        metaInfo: Wd,
        tamed: Fd
      } = dd, Rd = !1, Xd = null, Kd = 0;
      const hd = (0, Td.c)(),
        vd = hd.gt.HA,
        Qd = dd => {
          Kd += Vd * (dd / 1e3) % (2 * Math.PI), vd.setRotationEulerY(Xd, Kd)
        };
      return Ld(Od).then((dd => {
        if (Rd) return;
        Xd = (0, yd.m)(Od, ud, !0, !0), vd.setPosition(Xd, 0, -ud, 0), dd.meshApi.updateVariation(Xd, Od, md);
        const Kd = {
          wool: "Sheared" !== Wd,
          saddle: "Saddled" === Wd,
          antlers: "Antlers" === Wd,
          collar: Fd
        };
        for (const [Od, md] of Object.entries(Kd)) vd.hasGroup(Xd, Od) && dd.meshApi.setMeshGroupVisibility(Xd, Od, md);
        vd.set(Xd, "aOpacity", 1), hd.on("renderTickBegin", Qd)
      })).catch((dd => {
        console.error(`Pet preview: could not load ${Od}`, dd)
      })), () => {
        Rd = !0, hd.off("renderTickBegin", Qd), null !== Xd && vd.delete(Xd)
      }
    }
    class ed {
      constructor(dd, Od) {
        this.place = Od, this.remove = null;
        const {
          engine: md,
          MH: Wd,
          canvas: Fd
        } = nd();
        dd.appendChild(Fd), md.resize(), md.runRenderLoop((() => {
          Wd.render()
        }))
      }
      show(dd) {
        var Od;
        null === (Od = this.remove) || void 0 === Od || Od.call(this), this.remove = this.place(dd)
      }
      resize(dd, Od) {
        const {
          engine: md,
          canvas: Wd
        } = nd();
        Wd.width = dd, Wd.height = Od, md.resize()
      }
      close() {
        var dd;
        nd().engine.stopRenderLoop(), null === (dd = this.remove) || void 0 === dd || dd.call(this), this.remove = null
      }
    }
    class Id {
      constructor(dd) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new ed(dd, (() => () => {}))
      }
      show(dd) {
        dd.figures !== this.view.figures && this.preload(dd.figures), this.view = dd, this.place()
      }
      resize(dd, Od) {
        this.preview.resize(dd, Od), this.aspect = dd / Od, this.place()
      }
      close() {
        this.preview.close();
        for (const dd of this.placed) null === dd || void 0 === dd || dd.remove();
        this.placed = []
      }
      preload(dd) {
        const Od = () => {};
        Ld("NPC").catch(Od);
        for (const {
            WE: md,
            cosmetics: Wd
          }
          of dd) null !== md && Pd(md).catch(Od), wd(nd().MH, Wd).catch(Od)
      }
      place() {
        const {
          figures: dd,
          shown: Od
        } = this.view, md = dd.map(((md, Wd) => {
          var Fd;
          const Rd = null !== (Fd = this.placed[Wd]) && void 0 !== Fd ? Fd : null;
          if (!Od[Wd]) return null === Rd || void 0 === Rd || Rd.remove(), null;
          const Xd = (Kd = (Wd + .5) / dd.length, hd = this.aspect, (.5 - Kd) * zd() * hd);
          var Kd, hd;
          return null !== Rd && Rd.figure === md && Rd.x === Xd ? Rd : (null === Rd || void 0 === Rd || Rd.remove(), {
            figure: md,
            x: Xd,
            remove: jd(md, Xd)
          })
        }));
        for (const Wd of this.placed.slice(dd.length)) null === Wd || void 0 === Wd || Wd.remove();
        this.placed = md
      }
    }

    function ld(dd) {
      return new ed(dd, cd)
    }

    function Cd(dd) {
      return new Id(dd)
    }

    function Zd(dd) {
      return new ed(dd, Dd)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);