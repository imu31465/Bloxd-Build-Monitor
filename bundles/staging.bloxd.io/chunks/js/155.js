export const id = 155;
export const ids = [155];
export const modules = {
  41071: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      openMobLineupPreview: () => Td,
      openMobPreview: () => Dd,
      openPetPreview: () => Ed
    });
    var pd = kd(39791),
      Nd = kd(40054),
      Wd = kd(41074),
      Pd = kd(37438),
      Zd = kd(37245),
      gd = kd(40226),
      Cd = kd(41090),
      Kd = kd(38613),
      od = kd(37334),
      ld = kd(37314),
      Qd = kd(37236),
      Ld = kd(38527),
      Od = kd(38520),
      ed = kd(38286),
      Rd = kd(38330),
      Id = kd(38311),
      Gd = kd(37987),
      vd = kd(2634),
      xd = kd(37821);
    kd(41095), kd(40475), kd(41099);
    const qd = 22,
      Bd = 13,
      sd = Math.PI - Math.PI / 16,
      ad = 6,
      Md = Math.PI / 4;
    let Fd = null;
    const Yd = {},
      md = new Map;

    function bd() {
      if (null !== Fd) return Fd;
      const dd = document.createElement("canvas");
      dd.classList.add("MobPreviewCanvas");
      const Jd = new pd.b(dd, !0, {
        preserveDrawingBuffer: !0
      });
      Jd.vpd = (0, vd.e)().UL.engine.vpd;
      const kd = new Nd.e(Jd);
      kd.clearColor = new Pd.c(0, 0, 0, 0), kd.ambientColor = new Pd.Color3(1, 1, 1);
      const Cd = new Wd.e("Ge", Math.PI / 2, Math.PI / 2, qd, Zd.IL.Zero(), kd),
        Kd = new gd.c("light", new Zd.IL(-.1, 1, -.3), kd);
      return Kd.diffuse = new Pd.Color3(1, 1, 1), Kd.specular = new Pd.Color3(1, 1, 1), Kd.groundColor = new Pd.Color3(.5, .5, .5), Fd = {
        engine: Jd,
        BO: kd,
        canvas: dd,
        camera: Cd
      }, Fd
    }

    function Sd(dd) {
      return Yd[dd] ??= (0, ed.z)(dd, bd().BO, !0).catch((Jd => {
        throw delete Yd[dd], Jd
      })), Yd[dd]
    }

    function jd(dd) {
      let Jd = md.get(dd);
      return Jd || (Jd = Gd.D[dd].loadModel(bd().BO, !1).then((dd => (dd.XM(!1), dd)), (Jd => {
        throw md.delete(dd), Jd
      })), md.set(dd, Jd)), Jd
    }

    function Xd(dd) {
      var Jd, kd, pd;
      let {
        mobType: Nd,
        variation: Wd,
        animation: Pd
      } = dd, gd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, qd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const ad = null !== (Jd = null === gd || void 0 === gd ? void 0 : gd.size) && void 0 !== Jd ? Jd : 1,
        Md = null !== (kd = null === gd || void 0 === gd ? void 0 : gd.cosmetics) && void 0 !== kd ? kd : [],
        Fd = null !== (pd = null === gd || void 0 === gd ? void 0 : gd.Dv) && void 0 !== pd ? pd : null;
      let Yd = !1,
        md = null,
        Xd = null;
      const {
        engine: fd,
        BO: nd
      } = bd(), Ud = nd.onBeforeRenderObservable.add((() => {
        var dd;
        null === (dd = Xd) || void 0 === dd || dd.render(fd.getDeltaTime())
      })), yd = null === Fd ? null : jd(Fd).catch((dd => (console.error(`Mob preview: could not load ${Fd}`, dd), null)));
      return Promise.all([Sd(Nd), yd]).then((dd => {
        var Jd, kd, pd;
        let [gd, Sd] = dd;
        if (Yd) return;
        const jd = (0, vd.e)().UL.Qm,
          {
            hitBoxDimensions: fd
          } = (0, Kd.d)(Nd),
          nd = Bd / Math.max(fd.height, fd.width);
        if (md = (0, ed.m)(Nd, nd * ad, !0, !0), jd.setPosition(md, qd, -fd.height * nd / 2, 0), jd.setRotationEulerY(md, sd), gd.meshApi instanceof Id.b && Md.length > 0)
          for (const [Nd, Wd] of Md) gd.meshApi.updatePlayerCosmetic(null, md, Nd, Wd, !0);
        else gd.meshApi.updateVariation(md, Nd, null !== Wd && void 0 !== Wd ? Wd : "default");
        null !== Fd && null !== Sd && function(dd, Jd, kd, pd) {
          var Nd;
          const Wd = Gd.D[dd],
            Pd = (0, Ld.i)();
          (0, Ld.e)(Wd, null === (Nd = (0, Rd.d)(kd).meshMetadata.heldItemPositionParams) || void 0 === Nd ? void 0 : Nd.itemOffset, Pd);
          const gd = xd.c * Pd.fp.y,
            Kd = Pd.usesQuaternion ? Pd.quaternion : Zd.Quaternion.FromEulerVector(Pd.rotation),
            od = new Cd.e(`${Jd.name}Hand`, bd().BO);
          od.position.Fs((0, Od.d)(Pd.position, Kd, gd, Wd.heldModelOffsetY())), od.rotationQuaternion = Kd, od.fp.set(Pd.fp.x, gd, Pd.fp.z), Jd.clone(`${Jd.name}Held`, od).XM(!0);
          const ld = (0, vd.e)().UL.Qm;
          ld.attachTransformNode(od, pd, ld.getNamedNode(pd, "ArmRightMesh"))
        }(Fd, Sd, Nd, md), jd.set(md, "aOpacity", 1);
        const Ud = null !== (Jd = (0, Rd.d)(Nd).meshMetadata.lifeformTypeForModelOverride) && void 0 !== Jd ? Jd : Nd;
        Xd = new Qd.AnimatorState, Xd.thinInstMgr = jd, Xd.Rm = md, Xd.rkd = jd.qpd(md, 0), Xd.modelLifeformType = Ud, Xd.nodeNameAliases = null !== (kd = null === (pd = (0, od.b)(Ud)) || void 0 === pd ? void 0 : pd.nodeNameAliases) && void 0 !== kd ? kd : null, Xd.startAnimation(Pd, ld.h.Movement)
      })).catch((dd => {
        console.error(`Mob preview: could not load ${Nd}`, dd)
      })), () => {
        Yd = !0, nd.onBeforeRenderObservable.remove(Ud), null !== md && (0, vd.e)().UL.Qm.delete(md)
      }
    }

    function fd(dd, Jd) {
      return Xd({
        mobType: "NPC",
        variation: null,
        animation: dd.animation
      }, dd, Jd)
    }

    function nd(dd) {
      let {
        mobType: Jd,
        variation: kd,
        metaInfo: pd,
        tamed: Nd
      } = dd, Wd = !1, Pd = null, Zd = 0;
      const gd = (0, vd.e)(),
        Cd = gd.UL.Qm,
        Kd = dd => {
          Zd += Md * (dd / 1e3) % (2 * Math.PI), Cd.setRotationEulerY(Pd, Zd)
        };
      return Sd(Jd).then((dd => {
        if (Wd) return;
        Pd = (0, ed.m)(Jd, ad, !0, !0), Cd.setPosition(Pd, 0, -ad, 0), dd.meshApi.updateVariation(Pd, Jd, kd);
        const Zd = {
          wool: "Sheared" !== pd,
          saddle: "Saddled" === pd,
          antlers: "Antlers" === pd,
          collar: Nd
        };
        for (const [Jd, kd] of Object.entries(Zd)) Cd.hasGroup(Pd, Jd) && dd.meshApi.setMeshGroupVisibility(Pd, Jd, kd);
        Cd.set(Pd, "aOpacity", 1), gd.on("renderTickBegin", Kd)
      })).catch((dd => {
        console.error(`Pet preview: could not load ${Jd}`, dd)
      })), () => {
        Wd = !0, gd.off("renderTickBegin", Kd), null !== Pd && Cd.delete(Pd)
      }
    }
    class Ud {
      constructor(dd, Jd) {
        this.place = Jd, this.remove = null;
        const {
          engine: kd,
          BO: pd,
          canvas: Nd
        } = bd();
        dd.appendChild(Nd), kd.resize(), kd.runRenderLoop((() => {
          pd.render()
        }))
      }
      show(dd) {
        var Jd;
        null === (Jd = this.remove) || void 0 === Jd || Jd.call(this), this.remove = this.place(dd)
      }
      resize(dd, Jd) {
        const {
          engine: kd,
          canvas: pd
        } = bd();
        pd.width = dd, pd.height = Jd, kd.resize()
      }
      close() {
        var dd;
        bd().engine.stopRenderLoop(), null === (dd = this.remove) || void 0 === dd || dd.call(this), this.remove = null
      }
    }
    class yd {
      constructor(dd) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new Ud(dd, (() => () => {}))
      }
      show(dd) {
        dd.figures !== this.view.figures && this.preload(dd.figures), this.view = dd, this.place()
      }
      resize(dd, Jd) {
        this.preview.resize(dd, Jd), this.aspect = dd / Jd, this.place()
      }
      close() {
        this.preview.close();
        for (const dd of this.placed) null === dd || void 0 === dd || dd.remove();
        this.placed = []
      }
      preload(dd) {
        const Jd = () => {};
        Sd("NPC").catch(Jd);
        for (const {
            Dv: kd
          }
          of dd) null !== kd && jd(kd).catch(Jd)
      }
      place() {
        const {
          figures: dd,
          shown: Jd
        } = this.view, kd = dd.map(((kd, pd) => {
          var Nd;
          const Wd = null !== (Nd = this.placed[pd]) && void 0 !== Nd ? Nd : null;
          if (!Jd[pd]) return null === Wd || void 0 === Wd || Wd.remove(), null;
          const Pd = (Zd = (pd + .5) / dd.length, gd = this.aspect, (.5 - Zd) * (2 * qd * Math.tan(bd().camera.fov / 2)) * gd);
          var Zd, gd;
          return null !== Wd && Wd.figure === kd && Wd.x === Pd ? Wd : (null === Wd || void 0 === Wd || Wd.remove(), {
            figure: kd,
            x: Pd,
            remove: fd(kd, Pd)
          })
        }));
        for (const pd of this.placed.slice(dd.length)) null === pd || void 0 === pd || pd.remove();
        this.placed = kd
      }
    }

    function Dd(dd) {
      return new Ud(dd, Xd)
    }

    function Td(dd) {
      return new yd(dd)
    }

    function Ed(dd) {
      return new Ud(dd, nd)
    }
  },
  38947: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => ld
    });
    var pd = kd(37341),
      Nd = kd(37351),
      Wd = kd(37632),
      Pd = kd(37360),
      Zd = kd(37347);

    function gd(dd) {
      return `\n\t\t\t\t${(0,Zd.w)(dd,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, Zd.z)(dd, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, Zd.z)(dd, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, Zd.n)(dd, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function Cd(dd, Jd) {
      let kd = (0, Zd.Cb)(dd, "skele" + (Jd - 1));
      for (let Nd = Jd - 2; Nd >= 0; Nd--) kd = (0, Zd.sb)(dd, `boneIdx == ${Nd}`, (0, Zd.Cb)(dd, `skele${Nd}`), kd);
      const pd = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,Zd.z)(dd,"int","boneIdx",(0,Zd.yb)(dd,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,Zd.z)(dd,"vec3","bone",kd)}\n\t\t\t\t${(0,Zd.z)(dd,"vec2","pivot",(0,Zd.n)(dd,"vec2","0.0",`${(0,Zd.Jb)(dd,"position")}.z`))}\n\t\t\t\t${(0,Zd.V)(dd)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${pd}));`:`positionUpdated.yz += ${pd};`}\n\t\t`
    }

    function Kd(dd) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,Zd.n)(dd,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const od = {
        x: 0,
        y: 0,
        z: 0,
        lkd(dd, Jd) {
          return this.x = dd[Jd], this.y = dd[Jd + 1], this.z = dd[Jd + 2], this
        }
      },
      ld = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (dd, Jd) => ({
          ...(0, pd.b)("CAPE"),
          BLOXD_CAPE_BONES: `${dd}`,
          BLOXD_CAPE_MAX_Y: (0, Nd.mb)(Jd)
        }),
        getUniforms(dd) {
          return (0, Wd.c)(function(dd) {
            const Jd = [];
            for (let kd = 0; kd < dd; kd++) Jd.push({
              name: `skele${kd}`,
              type: "highp vec3"
            });
            return Jd
          }(this.skeleLen), "vertex", dd)
        },
        bind(dd) {
          for (let Jd = 0; Jd < this.skeleLen; Jd++) dd.updateVector3(`skele${Jd}`, od.lkd(this.skele, 3 * Jd))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(dd, Jd) {
          return "vertex" !== dd ? null : {
            CUSTOM_VERTEX_DEFINITIONS: gd(Jd),
            CUSTOM_VERTEX_UPDATE_POSITION: Cd(Jd, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: Kd(Jd)
          }
        }
      };
    (0, Pd.n)(ld)
  },
  38817: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Kd,
      f: () => od
    });
    var pd = kd(37341),
      Nd = kd(37632),
      Wd = kd(37347),
      Pd = kd(37360);
    const Zd = "bloxdTextLodBias",
      gd = [{
        name: Zd,
        type: "float"
      }],
      Cd = "bloxdTextSample",
      Kd = {
        planes: -.5,
        boards: -.5
      },
      od = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, pd.b)("TEXT_SAMPLER"),
        getUniforms: dd => (0, Nd.c)(gd, "fragment", dd),
        bind(dd) {
          dd.updateFloat(Zd, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(dd, Jd) {
          if ("fragment" !== dd) return null;
          const kd = (0, Wd.F)(Jd, `vec4 ${Cd}(sampler2D s, vec2 uv, float bias)`, `fn ${Cd}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            pd = (0, Wd.F)(Jd, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            Nd = `${(0,Wd.M)(Jd,"vDiffuseUV")} + uvOffset`,
            Pd = (0, Wd.F)(Jd, `${Cd}(diffuseSampler, ${Nd}, ${(0,Wd.Cb)(Jd,Zd)})`, `${Cd}(diffuseSampler, diffuseSamplerSampler, ${Nd}, ${(0,Wd.Cb)(Jd,Zd)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${kd} {\n\t\t\t\t\t${(0,Wd.z)(Jd,"vec4","texel",pd)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,Wd.n)(Jd,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,Wd.n)(Jd,"vec3","0.0")}, ${(0,Wd.n)(Jd,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, Wd.A)(Jd)]: `baseColor = ${Pd};`
          }
        }
      };
    (0, Pd.n)(od)
  },
  41099: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      CapeMaterialPlugin: () => vd,
      HueTintMaterialPlugin: () => xd,
      LifeformMaterialPlugin: () => qd,
      OverlayMaterialPlugin: () => Bd
    });
    var pd = kd(41102),
      Nd = kd(38202);
    class Wd extends((0, pd.g)(Nd.c)) {}(0, pd.k)(Nd.c, Wd);
    var Pd = kd(37337);
    class Zd extends((0, pd.g)(Pd.h)) {}(0, pd.k)(Pd.h, Zd);
    var gd = kd(38054);
    class Cd extends((0, pd.g)(gd.f)) {}(0, pd.k)(gd.f, Cd);
    var Kd = kd(37613),
      od = kd(40251),
      ld = kd(37610);
    class Qd extends((0, pd.g)(ld.f)) {
      constructor(dd, Jd, kd) {
        super(dd, Jd, kd), (0, Kd.j)(dd)
      }
      dispose(dd) {
        (0, Kd.l)(this._material), super.dispose(dd)
      }
    }(0, pd.k)(ld.f, Qd), (0, ld.j)({
      disableUnusedSpecularTerm: pd.e,
      isLightingDisabled: dd => dd instanceof od.StandardMaterial && dd.disableLighting
    });
    var Ld = kd(38817);
    class Od extends((0, pd.g)(Ld.f)) {}(0, pd.k)(Ld.f, Od);
    var ed = kd(38947),
      Rd = kd(37446),
      Id = kd(38317),
      Gd = kd(37389);
    class vd extends((0, pd.g)(ed.e)) {}(0, pd.k)(ed.e, vd);
    class xd extends((0, pd.g)(Rd.b)) {}(0, pd.k)(Rd.b, xd);
    class qd extends((0, pd.g)(Id.n)) {}(0, pd.k)(Id.n, qd);
    class Bd extends((0, pd.g)(Gd.d)) {}(0, pd.k)(Gd.d, Bd)
  },
  41102: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Td,
      g: () => Id,
      k: () => td
    });
    var pd = kd(40251),
      Nd = kd(41108),
      Wd = kd(41148),
      Pd = kd(41115),
      Zd = kd(38016),
      gd = kd(38027),
      Cd = kd(38034),
      Kd = kd(38043),
      od = kd(37381),
      ld = kd(37386),
      Qd = kd(41117),
      Ld = kd(37360),
      Od = kd(37366),
      ed = kd(37347);

    function Rd(dd, Jd) {
      return Object.assign((function(dd, kd, pd, Nd) {
        return Jd(this.featureState, dd, kd, pd, Nd)
      }), {
        hQ: dd
      })
    }

    function Id(dd) {
      const Jd = class extends Qd.d {
          constructor(Jd, kd) {
            const pd = (0, Od.$)(Jd),
              Nd = pd && (0, Od.v)(pd, dd.name);
            for (var Wd = arguments.length, Pd = new Array(Wd > 2 ? Wd - 2 : 0), Zd = 2; Zd < Wd; Zd++) Pd[Zd - 2] = arguments[Zd];
            super(Jd, dd.name, dd.priority, Nd ? Nd.defines : dd.defines(...Pd), !1), this.featureState = void 0, this.featureState = kd, this._pluginManager._addPlugin(this), this._enable(!0), (0, Od.w)(this._material, dd, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return dd.className
          }
          isCompatible(dd) {
            return dd === ed.d.GLSL || dd === ed.d.WGSL
          }
        },
        kd = (0, Ld.i)(dd);
      for (const [pd, Nd] of Object.entries(Ld.c)) {
        const Wd = dd[pd];
        if (Wd) {
          const dd = kd[pd];
          Object.defineProperty(Jd.prototype, Nd, {
            value: Rd(Wd, dd),
            writable: !0,
            configurable: !0
          })
        }
      }
      return Jd
    }
    class Gd extends(Id(Zd.d)) {}
    var vd = kd(39791),
      xd = kd(41125);
    const qd = new WeakMap;

    function Bd(dd, Jd, kd) {
      let pd = qd.get(kd);
      pd || (pd = new Map, qd.set(kd, pd));
      const {
        url: Nd
      } = dd;
      let Wd = pd.get(Nd);
      return Wd || (Wd = async function(dd, Jd, kd) {
        const {
          width: pd,
          height: Nd
        } = dd.getSize(), Wd = Math.round(Nd / pd), Zd = Jd && Jd.byteLength === pd * pd * Wd * 4 ? Jd : dd._readPixelsSync();
        return new xd.d(Zd, pd, pd, Wd, vd.b.TEXTUREFORMAT_RGBA, kd, !0, !1, Pd.d.NEAREST_NEAREST_MIPLINEAR)
      }(dd, Jd, kd), pd.set(Nd, Wd), Wd.catch((() => {
        pd.delete(Nd)
      }))), Wd
    }
    var sd = kd(38047);
    class ad extends(Id(gd.i)) {
      constructor(dd, Jd) {
        super(dd, Jd), Jd.textures.forEach(((dd, Jd) => {
          dd.mirror.onLoadObservable.add((dd => {
            this.setTextureArrayData(dd, Jd).catch((dd => {
              console.error(`Failed to build texture array for atlas ${Jd}`, dd)
            }))
          }))
        })), (0, sd.j)(Jd, dd.shaderLanguage)
      }
      async setTextureArrayData(dd, Jd) {
        var kd, pd;
        const Nd = this.featureState,
          {
            width: Wd,
            height: Pd
          } = dd.getSize(),
          Zd = Nd.useWebGL2 ? await Bd(dd, null !== (kd = null === (pd = Nd.sources.pixels) || void 0 === pd ? void 0 : pd[Jd]) && void 0 !== kd ? kd : null, this._material.Wm()) : null;
        (0, sd.e)(this._material, Nd, Jd, Zd, Wd, Math.round(Pd / Wd), this._material.shaderLanguage)
      }
    }
    var Md = kd(41134),
      Fd = kd(40292),
      Yd = kd(37245),
      md = kd(41140),
      bd = kd(40402),
      Sd = kd(40282),
      jd = kd(41090),
      Xd = kd(37797),
      fd = kd(41144);
    class nd extends Md.e {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const Ud = {
      Mesh: md.d,
      TransformNode: jd.e,
      kL: Md.e,
      VertexBuffer: Md.f,
      BoundingInfo: Fd.b,
      IL: Yd.IL,
      ArenaBuffer: nd,
      SubMesh: Sd.c,
      VertexData: bd.c,
      MirroredGeometry: fd.b,
      meshFromArrays: fd.c,
      plainMeshFromArrays: fd.g
    };
    (0, Xd.g)(Ud);
    var yd = kd(37613);
    class Dd extends(Id(Kd.f)) {
      constructor(dd, Jd) {
        if (super(dd, Jd), dd instanceof pd.StandardMaterial && Jd.dirLightCount > 0) {
          const Jd = dd,
            kd = Jd._blockDirtyMechanism;
          Jd._blockDirtyMechanism = !0, dd.disableLighting = !0, Jd._blockDirtyMechanism = kd;
          const pd = (0, Od.$)(dd);
          pd && (pd.disableLighting = !0, (0, Od.Y)(pd))
        }(0, yd.j)(dd)
      }
      dispose(dd) {
        (0, yd.l)(this._material), super.dispose(dd)
      }
    }

    function Td(dd, Jd) {
      if (!(Jd instanceof pd.StandardMaterial) || Jd.specularTexture) return;
      const {
        r: kd,
        g: Nd,
        b: Wd
      } = Jd.specularColor;
      0 === kd && 0 === Nd && 0 === Wd && (dd.SPECULARTERM = !1)
    }(0, Kd.c)({
      disableUnusedSpecularTerm: Td
    });
    var Ed = kd(37473),
      cd = kd(37807);
    const hd = new RegExp(`^#define ${Cd.c}\\s*$`, "m");
    class rd extends(Id(Cd.i)) {
      constructor(dd, Jd) {
        super(dd, Jd), this.pL = !1, Jd.ditherOnlyWhileFading && (cd.e.add(dd), this.prewarmDitherTwins(dd))
      }
      prewarmDitherTwins(dd) {
        const Jd = new WeakSet;
        dd.onEffectCreatedObservable.add((kd => {
          let {
            effect: pd,
            subMesh: Nd
          } = kd;
          if (this.featureState.prewarmingDither || Jd.has(pd)) return;
          Jd.add(pd);
          const Wd = null === Nd || void 0 === Nd ? void 0 : Nd.getMesh();
          Wd && !hd.test(pd.defines) && dd.Wm().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Wd) || Jd.delete(pd)
          }))
        }))
      }
      prewarmDither(dd) {
        if (this.pL || dd.lq()) return !1;
        const Jd = new Sd.c(0, 0, 0, 0, 0, dd, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(dd, Jd)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== Jd.effect
      }
      dispose(dd) {
        this.pL = !0, super.dispose(dd)
      }
    }
    const ud = new Map;

    function td(dd, Jd) {
      ud.set(dd, Jd)
    }
    td(Zd.d, Gd), td(gd.i, ad), td(Cd.i, rd), td(Kd.f, Dd), (0, od.c)({
      create: (dd, Jd) => {
        const kd = new pd.StandardMaterial(dd.name, Jd);
        return (0, Ed.p)(dd, kd), kd.detailMap._pluginDefineNames
      },
      write: (dd, Jd, kd) => {
        (0, Ed.R)(dd.mirror, Jd, kd)
      },
      addFeature: (dd, Jd, kd) => {
        const pd = ud.get(Jd.feature);
        if (!pd) throw new Error(`${Jd.feature.name} has no plugin class (registerPluginClass)`);
        new pd(dd.mirror, Jd.state, ...kd)
      },
      texture: (dd, Jd, kd) => {
        let {
          url: pd,
          noMipmap: Nd,
          invertY: Wd,
          samplingMode: Zd,
          data: gd,
          sets: Cd
        } = kd;
        if (!gd) {
          const kd = new Pd.d(pd, Jd, Nd, Wd, Zd);
          return Object.assign(kd, Cd), void(0, ld.K)(dd, kd)
        }
        const Kd = {},
          od = new Promise(((dd, Jd) => {
            Kd.onLoad = dd, Kd.onError = (dd, kd) => {
              Jd(new Error(`${gd.context}: ${(null===kd||void 0===kd?void 0:kd.message)||dd||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: Qd,
            bytes: Ld,
            label: Od
          } = gd,
          ed = {
            noMipmap: Nd,
            invertY: !1,
            samplingMode: Zd,
            ...Kd,
            mimeType: Qd,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          Rd = new Pd.d(null, Jd, ed);
        Ed.s.set(Rd, od), Object.assign(Rd, Cd), Rd.updateURL(pd, Ld);
        const Id = Rd.getInternalTexture();
        Id && (Id.label = Od), dd.uvSet = Rd.coordinatesIndex, dd.matrix.set((0, Ed.L)(Rd)), (0, ld.K)(dd, Rd)
      },
      cube: (dd, Jd, kd) => {
        let {
          rootUrl: pd,
          files: Wd,
          noMipmap: Zd,
          luminance: gd
        } = kd;
        const {
          samplingMode: Cd
        } = dd.sampler, Kd = Cd === (0, ld.D)(Zd) ? null : () => {
          (0, Ed.I)(od, Cd)
        }, od = new Nd.e(pd, Jd, null, Zd, Wd, Kd, null, (0, ld.A)(gd));
        od.coordinatesMode = Pd.d.SKYBOX_MODE, (0, ld.K)(dd, od)
      },
      canvas: (dd, Jd, kd) => {
        let {
          width: pd,
          height: Nd,
          mipmaps: Zd,
          samplingMode: gd,
          hasAlpha: Cd = !1,
          wrap: Kd = Pd.d.CLAMP_ADDRESSMODE
        } = kd;
        const od = new Wd.b(Jd, {
          width: pd,
          height: Nd
        }, dd, Zd, gd);
        od.hasAlpha = Cd, od.wrapU = Kd, od.wrapV = Kd;
        const ld = (0, Ed.z)(od);
        return (0, Ed.B)(ld, od), ld
      }
    })
  },
  41144: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Kd,
      c: () => od,
      g: () => ld
    });
    var pd = kd(41134),
      Nd = kd(40032),
      Wd = kd(40292),
      Pd = kd(40411),
      Zd = kd(41140),
      gd = kd(40402),
      Cd = kd(37682);
    class Kd extends Pd.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (dd, Jd) => {
          this.releaseUnlessInstanced(Jd)
        }, this.onLinked = null
      }
      link(dd) {
        var Jd;
        (0, Cd.j)(dd), this.model = dd, null === (Jd = this.onLinked) || void 0 === Jd || Jd.call(this, dd)
      }
      relink() {
        this.release();
        const dd = [];
        for (const Nd of Object.values(this._vertexBuffers))
          if (!Nd.getIsInstanced()) {
            const {
              byteOffset: Jd,
              byteStride: kd,
              type: pd,
              normalized: Wd
            } = Nd;
            dd.push({
              kind: Nd.getKind(),
              data: Nd.getData(),
              offset: Jd,
              stride: kd,
              components: Nd.getSize(),
              glType: pd,
              isNormalized: Wd
            })
          } const Jd = this._indices.length ? this._indices : null,
          {
            minimum: kd,
            maximum: pd
          } = this.extend;
        this.link(new Cd.c(dd, Jd, this.getTotalVertices(), new Float64Array(kd.spd()), new Float64Array(pd.spd())))
      }
      copy(dd) {
        if (!this.model) return super.copy(dd);
        const Jd = new Kd(dd, this.Wm()),
          kd = this.ipd(void 0, !0);
        kd && Jd.setIndices(kd);
        let Pd = !1;
        for (const Wd in this._vertexBuffers) {
          const dd = this._vertexBuffers[Wd],
            kd = dd.getData();
          if (!kd) continue;
          const Zd = dd.getSize(),
            {
              type: gd,
              byteOffset: Cd,
              byteStride: Kd,
              normalized: od
            } = dd;
          Pd ||= dd.isUpdatable();
          const ld = dd.getIsInstanced() ? (kd instanceof Array ? 4 * kd.length : kd.byteLength) / Kd : this.getTotalVertices(),
            Qd = (0, Nd.t)(kd, Zd, gd, Cd, Kd, ld, !0),
            Ld = {
              updatable: dd.isUpdatable(),
              stride: Zd,
              type: gd,
              normalized: od,
              takeBufferOwnership: !0,
              instanced: dd.getIsInstanced()
            };
          Jd.setVerticesBuffer(new pd.f(this.eL(), Qd, Wd, Ld), ld)
        }
        return Jd._updatable = Pd, Jd._boundingInfo = new Wd.b(this.extend.minimum, this.extend.maximum), Jd.relink(), Jd
      }
      static mergeMeshes(dd, Jd, kd, pd, Nd, Wd) {
        const gd = dd[0].Wm(),
          Cd = new Zd.d(dd[0].name + "_merged", gd),
          od = new Kd(Pd.e.RandomId(), gd, void 0, !1, Cd);
        try {
          if (!Zd.d.MergeMeshes(dd, Jd, kd, Cd, Nd, Wd)) return Cd.dispose(), null
        } catch (ld) {
          throw Cd.dispose(), ld
        }
        return od.relink(), Cd
      }
      removeVerticesData(dd) {
        this.releaseUnlessInstanced(dd), super.removeVerticesData(dd)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(dd) {
        var Jd;
        dd && null !== (Jd = this.getVertexBuffer(dd)) && void 0 !== Jd && Jd.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Cd.t)(this.model), this.model = null)
      }
    }

    function od(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Zd.d(dd, kd);
      const Nd = (0, Cd.h)(Jd),
        {
          positions: Wd,
          normals: od,
          uvs: ld,
          indices: Qd,
          named: Ld = {}
        } = Jd,
        Od = new gd.c;
      Od.positions = Wd, Od.normals = null !== od && void 0 !== od ? od : null, Od.uvs = null !== ld && void 0 !== ld ? ld : null, Od.indices = Qd;
      const ed = new Kd(Pd.e.RandomId(), kd, Od, !1, pd);
      for (const {
          kind: Pd,
          components: Zd
        }
        of Nd.vertexAttributes) Pd in Ld && pd.setVerticesData(Pd, Ld[Pd], !1, Zd);
      return ed.link(Nd), pd
    }

    function ld(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Nd = new Zd.d(dd, kd),
        {
          positions: Wd,
          normals: Pd,
          uvs: Cd,
          indices: Kd
        } = Jd;
      return Object.assign(new gd.c, {
        positions: Wd,
        normals: Pd,
        uvs: Cd,
        indices: Kd
      }).applyToMesh(Nd, pd), Nd
    }
  },
  8734: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Kd,
      d: () => Zd,
      e: () => gd
    });
    var pd = kd(2196),
      Nd = kd(1260),
      Wd = kd(2203);
    const Pd = ",";

    function Zd(dd) {
      if (!dd) return [];
      const Jd = new Set,
        kd = [];
      for (const pd of dd.split(Pd)) {
        const dd = pd.trim();
        if ((0, Wd.i)(dd) && !Jd.has(dd) && (Jd.add(dd), kd.push(dd), kd.length >= Nd.n)) break
      }
      return kd
    }

    function gd(dd) {
      const Jd = new Set,
        kd = [];
      for (const pd of dd)
        if ((0, Wd.i)(pd) && !Jd.has(pd) && (Jd.add(pd), kd.push(pd), kd.length >= Nd.n)) break;
      return kd.join(Pd)
    }

    function Cd() {
      return gd(Wd.e)
    }

    function Kd(dd) {
      var Jd;
      return "emote" === dd ? Cd() : null !== (Jd = od[dd][0]) && void 0 !== Jd ? Jd : ld[dd]
    }
    const od = Nd.x.reduce(((dd, Jd) => {
        const kd = [];
        for (const Wd in pd.e[Jd]) {
          var Nd;
          "default" === (null === (Nd = (0, pd.h)(Jd, Wd)) || void 0 === Nd ? void 0 : Nd.cosmeticPack) && kd.push(Wd)
        }
        return dd[Jd] = kd, dd
      }), {}),
      ld = Nd.x.reduce(((dd, Jd) => (dd[Jd] = Object.keys(pd.e[Jd])[0], dd)), {})
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);