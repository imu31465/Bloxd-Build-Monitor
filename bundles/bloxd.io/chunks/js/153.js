export const id = 153;
export const ids = [153];
export const modules = {
  40499: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      openMobLineupPreview: () => hk,
      openMobPreview: () => Pk,
      openPetPreview: () => qk
    });
    var Rk = Bk(39236),
      tk = Bk(39486),
      ak = Bk(40507),
      Xk = Bk(36911),
      bk = Bk(36754),
      wk = Bk(39659),
      dk = Bk(40536),
      sk = Bk(38118),
      Vk = Bk(36819),
      Jk = Bk(36805),
      Ak = Bk(36749),
      ek = Bk(38018),
      yk = Bk(38009),
      fk = Bk(37763),
      mk = Bk(37805),
      Wk = Bk(37779),
      vk = Bk(37484),
      ik = Bk(2626),
      Yk = Bk(37282);
    Bk(40541), Bk(39897), Bk(40550);
    const Lk = 22,
      Ok = 13,
      Ek = Math.PI - Math.PI / 16,
      Sk = 6,
      Nk = Math.PI / 4;
    let Hk = null;
    const uk = {},
      Mk = new Map;

    function gk() {
      if (null !== Hk) return Hk;
      const kk = document.createElement("canvas");
      kk.classList.add("MobPreviewCanvas");
      const Fk = new Rk.e(kk, !0, {
        preserveDrawingBuffer: !0
      });
      Fk.rBk = (0, ik.d)().Ly.engine.rBk;
      const Bk = new tk.c(Fk);
      Bk.clearColor = new Xk.c(0, 0, 0, 0), Bk.ambientColor = new Xk.Color3(1, 1, 1);
      const dk = new ak.c("rf", Math.PI / 2, Math.PI / 2, Lk, bk.Qe.Zero(), Bk),
        sk = new wk.e("light", new bk.Qe(-.1, 1, -.3), Bk);
      return sk.diffuse = new Xk.Color3(1, 1, 1), sk.specular = new Xk.Color3(1, 1, 1), sk.groundColor = new Xk.Color3(.5, .5, .5), Hk = {
        engine: Fk,
        ef: Bk,
        canvas: kk,
        camera: dk
      }, Hk
    }

    function Uk(kk) {
      return uk[kk] ??= (0, fk.v)(kk, gk().ef, !0).catch((Fk => {
        throw delete uk[kk], Fk
      })), uk[kk]
    }

    function ck(kk) {
      let Fk = Mk.get(kk);
      return Fk || (Fk = vk.t[kk].loadModel(gk().ef, !1).then((kk => (kk.lY(!1), kk)), (Fk => {
        throw Mk.delete(kk), Fk
      })), Mk.set(kk, Fk)), Fk
    }

    function Gk(kk) {
      var Fk, Bk, Rk;
      let {
        mobType: tk,
        variation: ak,
        animation: Xk
      } = kk, wk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, Lk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Sk = null !== (Fk = null === wk || void 0 === wk ? void 0 : wk.size) && void 0 !== Fk ? Fk : 1,
        Nk = null !== (Bk = null === wk || void 0 === wk ? void 0 : wk.cosmetics) && void 0 !== Bk ? Bk : [],
        Hk = null !== (Rk = null === wk || void 0 === wk ? void 0 : wk.TY) && void 0 !== Rk ? Rk : null;
      let uk = !1,
        Mk = null,
        Gk = null;
      const {
        engine: Tk,
        ef: rk
      } = gk(), Dk = rk.onBeforeRenderObservable.add((() => {
        var kk;
        null === (kk = Gk) || void 0 === kk || kk.render(Tk.getDeltaTime())
      })), zk = null === Hk ? null : ck(Hk).catch((kk => (console.error(`Mob preview: could not load ${Hk}`, kk), null)));
      return Promise.all([Uk(tk), zk]).then((kk => {
        var Fk, Bk, Rk;
        let [wk, Uk] = kk;
        if (uk) return;
        const ck = (0, ik.d)().Ly.vN,
          {
            hitBoxDimensions: Tk
          } = (0, sk.b)(tk),
          rk = Ok / Math.max(Tk.height, Tk.width);
        if (Mk = (0, fk.k)(tk, rk * Sk, !0, !0), ck.setPosition(Mk, Lk, -Tk.height * rk / 2, 0), ck.setRotationEulerY(Mk, Ek), wk.meshApi instanceof Wk.d && Nk.length > 0)
          for (const [tk, ak] of Nk) wk.meshApi.updatePlayerCosmetic(null, Mk, tk, ak, !0);
        else wk.meshApi.updateVariation(Mk, tk, null !== ak && void 0 !== ak ? ak : "default");
        null !== Hk && null !== Uk && function(kk, Fk, Bk, Rk) {
          var tk;
          const ak = vk.t[kk],
            Xk = (0, ek.l)();
          (0, ek.f)(ak, null === (tk = (0, mk.b)(Bk).meshMetadata.heldItemPositionParams) || void 0 === tk ? void 0 : tk.itemOffset, Xk);
          const wk = Yk.c * Xk.ta.y,
            sk = Xk.usesQuaternion ? Xk.quaternion : bk.Quaternion.FromEulerVector(Xk.rotation),
            Vk = new dk.e(`${Fk.name}Hand`, gk().ef);
          Vk.position.sBk((0, yk.c)(Xk.position, sk, wk, ak.heldModelOffsetY())), Vk.rotationQuaternion = sk, Vk.ta.set(Xk.ta.x, wk, Xk.ta.z), Fk.clone(`${Fk.name}Held`, Vk).lY(!0);
          const Jk = (0, ik.d)().Ly.vN;
          Jk.attachTransformNode(Vk, Rk, Jk.getNamedNode(Rk, "ArmRightMesh"))
        }(Hk, Uk, tk, Mk), ck.set(Mk, "aOpacity", 1);
        const Dk = null !== (Fk = (0, mk.b)(tk).meshMetadata.lifeformTypeForModelOverride) && void 0 !== Fk ? Fk : tk;
        Gk = new Ak.AnimatorState, Gk.thinInstMgr = ck, Gk.iN = Mk, Gk.wBk = ck.DBk(Mk, 0), Gk.modelLifeformType = Dk, Gk.nodeNameAliases = null !== (Bk = null === (Rk = (0, Vk.d)(Dk)) || void 0 === Rk ? void 0 : Rk.nodeNameAliases) && void 0 !== Bk ? Bk : null, Gk.startAnimation(Xk, Jk.h.Movement)
      })).catch((kk => {
        console.error(`Mob preview: could not load ${tk}`, kk)
      })), () => {
        uk = !0, rk.onBeforeRenderObservable.remove(Dk), null !== Mk && (0, ik.d)().Ly.vN.delete(Mk)
      }
    }

    function Tk(kk, Fk) {
      return Gk({
        mobType: "NPC",
        variation: null,
        animation: kk.animation
      }, kk, Fk)
    }

    function rk(kk) {
      let {
        mobType: Fk,
        variation: Bk,
        metaInfo: Rk,
        tamed: tk
      } = kk, ak = !1, Xk = null, bk = 0;
      const wk = (0, ik.d)(),
        dk = wk.Ly.vN,
        sk = kk => {
          bk += Nk * (kk / 1e3) % (2 * Math.PI), dk.setRotationEulerY(Xk, bk)
        };
      return Uk(Fk).then((kk => {
        if (ak) return;
        Xk = (0, fk.k)(Fk, Sk, !0, !0), dk.setPosition(Xk, 0, -Sk, 0), kk.meshApi.updateVariation(Xk, Fk, Bk);
        const bk = {
          wool: "Sheared" !== Rk,
          saddle: "Saddled" === Rk,
          antlers: "Antlers" === Rk,
          collar: tk
        };
        for (const [Fk, Bk] of Object.entries(bk)) dk.hasGroup(Xk, Fk) && kk.meshApi.setMeshGroupVisibility(Xk, Fk, Bk);
        dk.set(Xk, "aOpacity", 1), wk.on("renderTickBegin", sk)
      })).catch((kk => {
        console.error(`Pet preview: could not load ${Fk}`, kk)
      })), () => {
        ak = !0, wk.off("renderTickBegin", sk), null !== Xk && dk.delete(Xk)
      }
    }
    class Dk {
      constructor(kk, Fk) {
        this.place = Fk, this.remove = null;
        const {
          engine: Bk,
          ef: Rk,
          canvas: tk
        } = gk();
        kk.appendChild(tk), Bk.resize(), Bk.runRenderLoop((() => {
          Rk.render()
        }))
      }
      show(kk) {
        var Fk;
        null === (Fk = this.remove) || void 0 === Fk || Fk.call(this), this.remove = this.place(kk)
      }
      resize(kk, Fk) {
        const {
          engine: Bk,
          canvas: Rk
        } = gk();
        Rk.width = kk, Rk.height = Fk, Bk.resize()
      }
      close() {
        var kk;
        gk().engine.stopRenderLoop(), null === (kk = this.remove) || void 0 === kk || kk.call(this), this.remove = null
      }
    }
    class zk {
      constructor(kk) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new Dk(kk, (() => () => {}))
      }
      show(kk) {
        kk.figures !== this.view.figures && this.preload(kk.figures), this.view = kk, this.place()
      }
      resize(kk, Fk) {
        this.preview.resize(kk, Fk), this.aspect = kk / Fk, this.place()
      }
      close() {
        this.preview.close();
        for (const kk of this.placed) null === kk || void 0 === kk || kk.remove();
        this.placed = []
      }
      preload(kk) {
        const Fk = () => {};
        Uk("NPC").catch(Fk);
        for (const {
            TY: Bk
          }
          of kk) null !== Bk && ck(Bk).catch(Fk)
      }
      place() {
        const {
          figures: kk,
          shown: Fk
        } = this.view, Bk = kk.map(((Bk, Rk) => {
          var tk;
          const ak = null !== (tk = this.placed[Rk]) && void 0 !== tk ? tk : null;
          if (!Fk[Rk]) return null === ak || void 0 === ak || ak.remove(), null;
          const Xk = (bk = (Rk + .5) / kk.length, wk = this.aspect, (.5 - bk) * (2 * Lk * Math.tan(gk().camera.fov / 2)) * wk);
          var bk, wk;
          return null !== ak && ak.figure === Bk && ak.x === Xk ? ak : (null === ak || void 0 === ak || ak.remove(), {
            figure: Bk,
            x: Xk,
            remove: Tk(Bk, Xk)
          })
        }));
        for (const Rk of this.placed.slice(kk.length)) null === Rk || void 0 === Rk || Rk.remove();
        this.placed = Bk
      }
    }

    function Pk(kk) {
      return new Dk(kk, Gk)
    }

    function hk(kk) {
      return new zk(kk)
    }

    function qk(kk) {
      return new Dk(kk, rk)
    }
  },
  38431: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Jk
    });
    var Rk = Bk(36830),
      tk = Bk(36838),
      ak = Bk(37076),
      Xk = Bk(36842),
      bk = Bk(36836);

    function wk(kk) {
      return `\n\t\t\t\t${(0,bk.A)(kk,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, bk.I)(kk, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, bk.I)(kk, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, bk.p)(kk, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function dk(kk, Fk) {
      let Bk = (0, bk.Hb)(kk, "skele" + (Fk - 1));
      for (let tk = Fk - 2; tk >= 0; tk--) Bk = (0, bk.vb)(kk, `boneIdx == ${tk}`, (0, bk.Hb)(kk, `skele${tk}`), Bk);
      const Rk = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,bk.I)(kk,"int","boneIdx",(0,bk.Db)(kk,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,bk.I)(kk,"vec3","bone",Bk)}\n\t\t\t\t${(0,bk.I)(kk,"vec2","pivot",(0,bk.p)(kk,"vec2","0.0",`${(0,bk.Ob)(kk,"position")}.z`))}\n\t\t\t\t${(0,bk.fb)(kk)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${Rk}));`:`positionUpdated.yz += ${Rk};`}\n\t\t`
    }

    function sk(kk) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,bk.p)(kk,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const Vk = {
        x: 0,
        y: 0,
        z: 0,
        MFk(kk, Fk) {
          return this.x = kk[Fk], this.y = kk[Fk + 1], this.z = kk[Fk + 2], this
        }
      },
      Jk = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (kk, Fk) => ({
          ...(0, Rk.e)("CAPE"),
          BLOXD_CAPE_BONES: `${kk}`,
          BLOXD_CAPE_MAX_Y: (0, tk.fb)(Fk)
        }),
        getUniforms(kk) {
          return (0, ak.e)(function(kk) {
            const Fk = [];
            for (let Bk = 0; Bk < kk; Bk++) Fk.push({
              name: `skele${Bk}`,
              type: "highp vec3"
            });
            return Fk
          }(this.skeleLen), "vertex", kk)
        },
        bind(kk) {
          for (let Fk = 0; Fk < this.skeleLen; Fk++) kk.updateVector3(`skele${Fk}`, Vk.MFk(this.skele, 3 * Fk))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(kk, Fk) {
          return "vertex" !== kk ? null : {
            CUSTOM_VERTEX_DEFINITIONS: wk(Fk),
            CUSTOM_VERTEX_UPDATE_POSITION: dk(Fk, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: sk(Fk)
          }
        }
      };
    (0, Xk.r)(Jk)
  },
  38330: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => sk,
      d: () => Vk
    });
    var Rk = Bk(36830),
      tk = Bk(37076),
      ak = Bk(36836),
      Xk = Bk(36842);
    const bk = "bloxdTextLodBias",
      wk = [{
        name: bk,
        type: "float"
      }],
      dk = "bloxdTextSample",
      sk = {
        planes: -.5,
        boards: -.5
      },
      Vk = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, Rk.e)("TEXT_SAMPLER"),
        getUniforms: kk => (0, tk.e)(wk, "fragment", kk),
        bind(kk) {
          kk.updateFloat(bk, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(kk, Fk) {
          if ("fragment" !== kk) return null;
          const Bk = (0, ak.T)(Fk, `vec4 ${dk}(sampler2D s, vec2 uv, float bias)`, `fn ${dk}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            Rk = (0, ak.T)(Fk, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            tk = `${(0,ak.$)(Fk,"vDiffuseUV")} + uvOffset`,
            Xk = (0, ak.T)(Fk, `${dk}(diffuseSampler, ${tk}, ${(0,ak.Hb)(Fk,bk)})`, `${dk}(diffuseSampler, diffuseSamplerSampler, ${tk}, ${(0,ak.Hb)(Fk,bk)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${Bk} {\n\t\t\t\t\t${(0,ak.I)(Fk,"vec4","texel",Rk)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,ak.p)(Fk,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,ak.p)(Fk,"vec3","0.0")}, ${(0,ak.p)(Fk,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, ak.M)(Fk)]: `baseColor = ${Xk};`
          }
        }
      };
    (0, Xk.r)(Vk)
  },
  40550: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      CapeMaterialPlugin: () => ik,
      HueTintMaterialPlugin: () => Yk,
      LifeformMaterialPlugin: () => Lk,
      OverlayMaterialPlugin: () => Ok
    });
    var Rk = Bk(40554),
      tk = Bk(37693);
    class ak extends((0, Rk.f)(tk.e)) {}(0, Rk.i)(tk.e, ak);
    var Xk = Bk(36826);
    class bk extends((0, Rk.f)(Xk.h)) {}(0, Rk.i)(Xk.h, bk);
    var wk = Bk(37540);
    class dk extends((0, Rk.f)(wk.d)) {}(0, Rk.i)(wk.d, dk);
    var sk = Bk(37061),
      Vk = Bk(39674),
      Jk = Bk(37055);
    class Ak extends((0, Rk.f)(Jk.f)) {
      constructor(kk, Fk, Bk) {
        super(kk, Fk, Bk), (0, sk.k)(kk)
      }
      dispose(kk) {
        (0, sk.o)(this._material), super.dispose(kk)
      }
    }(0, Rk.i)(Jk.f, Ak), (0, Jk.j)({
      disableUnusedSpecularTerm: Rk.d,
      isLightingDisabled: kk => kk instanceof Vk.StandardMaterial && kk.disableLighting
    });
    var ek = Bk(38330);
    class yk extends((0, Rk.f)(ek.d)) {}(0, Rk.i)(ek.d, yk);
    var fk = Bk(38431),
      mk = Bk(36920),
      Wk = Bk(37794),
      vk = Bk(36876);
    class ik extends((0, Rk.f)(fk.b)) {}(0, Rk.i)(fk.b, ik);
    class Yk extends((0, Rk.f)(mk.e)) {}(0, Rk.i)(mk.e, Yk);
    class Lk extends((0, Rk.f)(Wk.m)) {}(0, Rk.i)(Wk.m, Lk);
    class Ok extends((0, Rk.f)(vk.b)) {}(0, Rk.i)(vk.b, Ok)
  },
  40554: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => hk,
      f: () => Wk,
      i: () => xk
    });
    var Rk = Bk(39674),
      tk = Bk(40563),
      ak = Bk(40603),
      Xk = Bk(40570),
      bk = Bk(37512),
      wk = Bk(37521),
      dk = Bk(37524),
      sk = Bk(37526),
      Vk = Bk(36861),
      Jk = Bk(36867),
      Ak = Bk(40573),
      ek = Bk(36842),
      yk = Bk(36851),
      fk = Bk(36836);

    function mk(kk, Fk) {
      return Object.assign((function(kk, Bk, Rk, tk) {
        return Fk(this.featureState, kk, Bk, Rk, tk)
      }), {
        oe: kk
      })
    }

    function Wk(kk) {
      const Fk = class extends Ak.d {
          constructor(Fk, Bk) {
            const Rk = (0, yk._)(Fk),
              tk = Rk && (0, yk.z)(Rk, kk.name);
            for (var ak = arguments.length, Xk = new Array(ak > 2 ? ak - 2 : 0), bk = 2; bk < ak; bk++) Xk[bk - 2] = arguments[bk];
            super(Fk, kk.name, kk.priority, tk ? tk.defines : kk.defines(...Xk), !1), this.featureState = void 0, this.featureState = Bk, this._pluginManager._addPlugin(this), this._enable(!0), (0, yk.A)(this._material, kk, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return kk.className
          }
          isCompatible(kk) {
            return kk === fk.e.GLSL || kk === fk.e.WGSL
          }
        },
        Bk = (0, ek.j)(kk);
      for (const [Rk, tk] of Object.entries(ek.e)) {
        const ak = kk[Rk];
        if (ak) {
          const kk = Bk[Rk];
          Object.defineProperty(Fk.prototype, tk, {
            value: mk(ak, kk),
            writable: !0,
            configurable: !0
          })
        }
      }
      return Fk
    }
    class vk extends(Wk(bk.e)) {}
    var ik = Bk(39236),
      Yk = Bk(40576);
    const Lk = new WeakMap;

    function Ok(kk, Fk, Bk) {
      let Rk = Lk.get(Bk);
      Rk || (Rk = new Map, Lk.set(Bk, Rk));
      const {
        url: tk
      } = kk;
      let ak = Rk.get(tk);
      return ak || (ak = async function(kk, Fk, Bk) {
        const {
          width: Rk,
          height: tk
        } = kk.getSize(), ak = Math.round(tk / Rk), bk = Fk && Fk.byteLength === Rk * Rk * ak * 4 ? Fk : kk._readPixelsSync();
        return new Yk.d(bk, Rk, Rk, ak, ik.e.TEXTUREFORMAT_RGBA, Bk, !0, !1, Xk.c.NEAREST_NEAREST_MIPLINEAR)
      }(kk, Fk, Bk), Rk.set(tk, ak), ak.catch((() => {
        Rk.delete(tk)
      }))), ak
    }
    var Ek = Bk(37533);
    class Sk extends(Wk(wk.i)) {
      constructor(kk, Fk) {
        super(kk, Fk), Fk.textures.forEach(((kk, Fk) => {
          kk.mirror.onLoadObservable.add((kk => {
            this.setTextureArrayData(kk, Fk).catch((kk => {
              console.error(`Failed to build texture array for atlas ${Fk}`, kk)
            }))
          }))
        })), (0, Ek.g)(Fk, kk.shaderLanguage)
      }
      async setTextureArrayData(kk, Fk) {
        var Bk, Rk;
        const tk = this.featureState,
          {
            width: ak,
            height: Xk
          } = kk.getSize(),
          bk = tk.useWebGL2 ? await Ok(kk, null !== (Bk = null === (Rk = tk.sources.pixels) || void 0 === Rk ? void 0 : Rk[Fk]) && void 0 !== Bk ? Bk : null, this._material.XN()) : null;
        (0, Ek.b)(this._material, tk, Fk, bk, ak, Math.round(Xk / ak), this._material.shaderLanguage)
      }
    }
    var Nk = Bk(40583),
      Hk = Bk(39716),
      uk = Bk(36754),
      Mk = Bk(40592),
      gk = Bk(39829),
      Uk = Bk(39703),
      ck = Bk(40536),
      Gk = Bk(37245),
      Tk = Bk(40601);
    class rk extends Nk.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const Dk = {
      Mesh: Mk.d,
      TransformNode: ck.e,
      Ge: Nk.b,
      VertexBuffer: Nk.e,
      BoundingInfo: Hk.b,
      Qe: uk.Qe,
      ArenaBuffer: rk,
      SubMesh: Uk.d,
      VertexData: gk.e,
      MirroredGeometry: Tk.b,
      meshFromArrays: Tk.e,
      plainMeshFromArrays: Tk.g
    };
    (0, Gk.h)(Dk);
    var zk = Bk(37061);
    class Pk extends(Wk(sk.f)) {
      constructor(kk, Fk) {
        if (super(kk, Fk), kk instanceof Rk.StandardMaterial && Fk.dirLightCount > 0) {
          const Fk = kk,
            Bk = Fk._blockDirtyMechanism;
          Fk._blockDirtyMechanism = !0, kk.disableLighting = !0, Fk._blockDirtyMechanism = Bk;
          const Rk = (0, yk._)(kk);
          Rk && (Rk.disableLighting = !0, (0, yk.X)(Rk))
        }(0, zk.k)(kk)
      }
      dispose(kk) {
        (0, zk.o)(this._material), super.dispose(kk)
      }
    }

    function hk(kk, Fk) {
      if (!(Fk instanceof Rk.StandardMaterial) || Fk.specularTexture) return;
      const {
        r: Bk,
        g: tk,
        b: ak
      } = Fk.specularColor;
      0 === Bk && 0 === tk && 0 === ak && (kk.SPECULARTERM = !1)
    }(0, sk.e)({
      disableUnusedSpecularTerm: hk
    });
    var qk = Bk(36939),
      Ck = Bk(37258);
    const Zk = new RegExp(`^#define ${dk.d}\\s*$`, "m");
    class pk extends(Wk(dk.j)) {
      constructor(kk, Fk) {
        super(kk, Fk), this.Te = !1, Fk.ditherOnlyWhileFading && (Ck.h.add(kk), this.prewarmDitherTwins(kk))
      }
      prewarmDitherTwins(kk) {
        const Fk = new WeakSet;
        kk.onEffectCreatedObservable.add((Bk => {
          let {
            effect: Rk,
            subMesh: tk
          } = Bk;
          if (this.featureState.prewarmingDither || Fk.has(Rk)) return;
          Fk.add(Rk);
          const ak = null === tk || void 0 === tk ? void 0 : tk.getMesh();
          ak && !Zk.test(Rk.defines) && kk.XN().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(ak) || Fk.delete(Rk)
          }))
        }))
      }
      prewarmDither(kk) {
        if (this.Te || kk.BBk()) return !1;
        const Fk = new Uk.d(0, 0, 0, 0, 0, kk, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(kk, Fk)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== Fk.effect
      }
      dispose(kk) {
        this.Te = !0, super.dispose(kk)
      }
    }
    const Kk = new Map;

    function xk(kk, Fk) {
      Kk.set(kk, Fk)
    }
    xk(bk.e, vk), xk(wk.i, Sk), xk(dk.j, pk), xk(sk.f, Pk), (0, Vk.b)({
      create: (kk, Fk) => {
        const Bk = new Rk.StandardMaterial(kk.name, Fk);
        return (0, qk.r)(kk, Bk), Bk.detailMap._pluginDefineNames
      },
      write: (kk, Fk, Bk) => {
        (0, qk.T)(kk.mirror, Fk, Bk)
      },
      addFeature: (kk, Fk, Bk) => {
        const Rk = Kk.get(Fk.feature);
        if (!Rk) throw new Error(`${Fk.feature.name} has no plugin class (registerPluginClass)`);
        new Rk(kk.mirror, Fk.state, ...Bk)
      },
      texture: (kk, Fk, Bk) => {
        let {
          url: Rk,
          noMipmap: tk,
          invertY: ak,
          samplingMode: bk,
          data: wk,
          sets: dk
        } = Bk;
        if (!wk) {
          const Bk = new Xk.c(Rk, Fk, tk, ak, bk);
          return Object.assign(Bk, dk), void(0, Jk.O)(kk, Bk)
        }
        const sk = {},
          Vk = new Promise(((kk, Fk) => {
            sk.onLoad = kk, sk.onError = (kk, Bk) => {
              Fk(new Error(`${wk.context}: ${(null===Bk||void 0===Bk?void 0:Bk.message)||kk||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: Ak,
            bytes: ek,
            label: yk
          } = wk,
          fk = {
            noMipmap: tk,
            invertY: !1,
            samplingMode: bk,
            ...sk,
            mimeType: Ak,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          mk = new Xk.c(null, Fk, fk);
        qk.t.set(mk, Vk), Object.assign(mk, dk), mk.updateURL(Rk, ek);
        const Wk = mk.getInternalTexture();
        Wk && (Wk.label = yk), kk.uvSet = mk.coordinatesIndex, kk.matrix.set((0, qk.M)(mk)), (0, Jk.O)(kk, mk)
      },
      cube: (kk, Fk, Bk) => {
        let {
          rootUrl: Rk,
          files: ak,
          noMipmap: bk,
          luminance: wk
        } = Bk;
        const {
          samplingMode: dk
        } = kk.sampler, sk = dk === (0, Jk.B)(bk) ? null : () => {
          (0, qk.K)(Vk, dk)
        }, Vk = new tk.d(Rk, Fk, null, bk, ak, sk, null, (0, Jk.A)(wk));
        Vk.coordinatesMode = Xk.c.SKYBOX_MODE, (0, Jk.O)(kk, Vk)
      },
      canvas: (kk, Fk, Bk) => {
        let {
          width: Rk,
          height: tk,
          mipmaps: bk,
          samplingMode: wk,
          hasAlpha: dk = !1,
          wrap: sk = Xk.c.CLAMP_ADDRESSMODE
        } = Bk;
        const Vk = new ak.d(Fk, {
          width: Rk,
          height: tk
        }, kk, bk, wk);
        Vk.hasAlpha = dk, Vk.wrapU = sk, Vk.wrapV = sk;
        const Jk = (0, qk.y)(Vk);
        return (0, qk.B)(Jk, Vk), Jk
      }
    })
  },
  40601: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => sk,
      e: () => Vk,
      g: () => Jk
    });
    var Rk = Bk(40583),
      tk = Bk(39463),
      ak = Bk(39716),
      Xk = Bk(39836),
      bk = Bk(40592),
      wk = Bk(39829),
      dk = Bk(37131);
    class sk extends Xk.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (kk, Fk) => {
          this.releaseUnlessInstanced(Fk)
        }, this.onLinked = null
      }
      link(kk) {
        var Fk;
        (0, dk.m)(kk), this.model = kk, null === (Fk = this.onLinked) || void 0 === Fk || Fk.call(this, kk)
      }
      relink() {
        this.release();
        const kk = [];
        for (const tk of Object.values(this._vertexBuffers))
          if (!tk.getIsInstanced()) {
            const {
              byteOffset: Fk,
              byteStride: Bk,
              type: Rk,
              normalized: ak
            } = tk;
            kk.push({
              kind: tk.getKind(),
              data: tk.getData(),
              offset: Fk,
              stride: Bk,
              components: tk.getSize(),
              glType: Rk,
              isNormalized: ak
            })
          } const Fk = this._indices.length ? this._indices : null,
          {
            minimum: Bk,
            maximum: Rk
          } = this.extend;
        this.link(new dk.d(kk, Fk, this.getTotalVertices(), new Float64Array(Bk.PBk()), new Float64Array(Rk.PBk())))
      }
      copy(kk) {
        if (!this.model) return super.copy(kk);
        const Fk = new sk(kk, this.XN()),
          Bk = this.hBk(void 0, !0);
        Bk && Fk.setIndices(Bk);
        let Xk = !1;
        for (const ak in this._vertexBuffers) {
          const kk = this._vertexBuffers[ak],
            Bk = kk.getData();
          if (!Bk) continue;
          const bk = kk.getSize(),
            {
              type: wk,
              byteOffset: dk,
              byteStride: sk,
              normalized: Vk
            } = kk;
          Xk ||= kk.isUpdatable();
          const Jk = kk.getIsInstanced() ? (Bk instanceof Array ? 4 * Bk.length : Bk.byteLength) / sk : this.getTotalVertices(),
            Ak = (0, tk.p)(Bk, bk, wk, dk, sk, Jk, !0),
            ek = {
              updatable: kk.isUpdatable(),
              stride: bk,
              type: wk,
              normalized: Vk,
              takeBufferOwnership: !0,
              instanced: kk.getIsInstanced()
            };
          Fk.setVerticesBuffer(new Rk.e(this.ne(), Ak, ak, ek), Jk)
        }
        return Fk._updatable = Xk, Fk._boundingInfo = new ak.b(this.extend.minimum, this.extend.maximum), Fk.relink(), Fk
      }
      static mergeMeshes(kk, Fk, Bk, Rk, tk, ak) {
        const wk = kk[0].XN(),
          dk = new bk.d(kk[0].name + "_merged", wk),
          Vk = new sk(Xk.e.RandomId(), wk, void 0, !1, dk);
        try {
          if (!bk.d.MergeMeshes(kk, Fk, Bk, dk, tk, ak)) return dk.dispose(), null
        } catch (Jk) {
          throw dk.dispose(), Jk
        }
        return Vk.relink(), dk
      }
      removeVerticesData(kk) {
        this.releaseUnlessInstanced(kk), super.removeVerticesData(kk)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(kk) {
        var Fk;
        kk && null !== (Fk = this.getVertexBuffer(kk)) && void 0 !== Fk && Fk.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, dk.r)(this.model), this.model = null)
      }
    }

    function Vk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new bk.d(kk, Bk);
      const tk = (0, dk.j)(Fk),
        {
          positions: ak,
          normals: Vk,
          uvs: Jk,
          indices: Ak,
          named: ek = {}
        } = Fk,
        yk = new wk.e;
      yk.positions = ak, yk.normals = null !== Vk && void 0 !== Vk ? Vk : null, yk.uvs = null !== Jk && void 0 !== Jk ? Jk : null, yk.indices = Ak;
      const fk = new sk(Xk.e.RandomId(), Bk, yk, !1, Rk);
      for (const {
          kind: Xk,
          components: bk
        }
        of tk.vertexAttributes) Xk in ek && Rk.setVerticesData(Xk, ek[Xk], !1, bk);
      return fk.link(tk), Rk
    }

    function Jk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const tk = new bk.d(kk, Bk),
        {
          positions: ak,
          normals: Xk,
          uvs: dk,
          indices: sk
        } = Fk;
      return Object.assign(new wk.e, {
        positions: ak,
        normals: Xk,
        uvs: dk,
        indices: sk
      }).applyToMesh(tk, Rk), tk
    }
  },
  8500: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => sk,
      f: () => bk,
      i: () => wk
    });
    var Rk = Bk(2124),
      tk = Bk(1192),
      ak = Bk(2133);
    const Xk = ",";

    function bk(kk) {
      if (!kk) return [];
      const Fk = new Set,
        Bk = [];
      for (const Rk of kk.split(Xk)) {
        const kk = Rk.trim();
        if ((0, ak.n)(kk) && !Fk.has(kk) && (Fk.add(kk), Bk.push(kk), Bk.length >= tk.l)) break
      }
      return Bk
    }

    function wk(kk) {
      const Fk = new Set,
        Bk = [];
      for (const Rk of kk)
        if ((0, ak.n)(Rk) && !Fk.has(Rk) && (Fk.add(Rk), Bk.push(Rk), Bk.length >= tk.l)) break;
      return Bk.join(Xk)
    }

    function dk() {
      return wk(ak.f)
    }

    function sk(kk) {
      var Fk;
      return "emote" === kk ? dk() : null !== (Fk = Vk[kk][0]) && void 0 !== Fk ? Fk : Jk[kk]
    }
    const Vk = tk.t.reduce(((kk, Fk) => {
        const Bk = [];
        for (const ak in Rk.h[Fk]) {
          var tk;
          "default" === (null === (tk = (0, Rk.o)(Fk, ak)) || void 0 === tk ? void 0 : tk.cosmeticPack) && Bk.push(ak)
        }
        return kk[Fk] = Bk, kk
      }), {}),
      Jk = tk.t.reduce(((kk, Fk) => (kk[Fk] = Object.keys(Rk.h[Fk])[0], kk)), {})
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);