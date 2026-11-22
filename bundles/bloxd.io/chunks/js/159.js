export const id = 159;
export const ids = [159];
export const modules = {
  40671: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      openMobLineupPreview: () => tk,
      openMobPreview: () => Wk,
      openPetPreview: () => Xk
    });
    var Dk = ik(39377),
      fk = ik(39651),
      Sk = ik(40673),
      bk = ik(36868),
      rk = ik(36690),
      Pk = ik(39813),
      mk = ik(40693),
      Mk = ik(38057),
      Kk = ik(36758),
      xk = ik(36747),
      nk = ik(36685),
      Uk = ik(37953),
      Hk = ik(37950),
      wk = ik(37685),
      lk = ik(37738),
      pk = ik(37702),
      yk = ik(37380),
      Yk = ik(2704),
      Lk = ik(37220);
    ik(40701), ik(40055), ik(40705);
    const Ck = 22,
      Ak = 13,
      jk = Math.PI - Math.PI / 16,
      sk = 6,
      dk = Math.PI / 4;
    let Vk = null;
    const Fk = {},
      uk = new Map;

    function qk() {
      if (null !== Vk) return Vk;
      const kk = document.createElement("canvas");
      kk.classList.add("MobPreviewCanvas");
      const ek = new Dk.d(kk, !0, {
        preserveDrawingBuffer: !0
      });
      ek.Xik = (0, Yk.e)().yH.engine.Xik;
      const ik = new fk.d(ek);
      ik.clearColor = new bk.e(0, 0, 0, 0), ik.ambientColor = new bk.Color3(1, 1, 1);
      const mk = new Sk.c("gw", Math.PI / 2, Math.PI / 2, Ck, rk.eH.Zero(), ik),
        Mk = new Pk.c("light", new rk.eH(-.1, 1, -.3), ik);
      return Mk.diffuse = new bk.Color3(1, 1, 1), Mk.specular = new bk.Color3(1, 1, 1), Mk.groundColor = new bk.Color3(.5, .5, .5), Vk = {
        engine: ek,
        bw: ik,
        canvas: kk,
        camera: mk
      }, Vk
    }

    function Ik(kk) {
      return Fk[kk] ??= (0, wk.u)(kk, qk().bw, !0).catch((ek => {
        throw delete Fk[kk], ek
      })), Fk[kk]
    }

    function zk(kk) {
      let ek = uk.get(kk);
      return ek || (ek = yk.C[kk].loadModel(qk().bw, !1).then((kk => (kk.bV(!1), kk)), (ek => {
        throw uk.delete(kk), ek
      })), uk.set(kk, ek)), ek
    }

    function Qk(kk) {
      var ek, ik, Dk;
      let {
        mobType: fk,
        variation: Sk,
        animation: bk
      } = kk, Pk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, Ck = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const sk = null !== (ek = null === Pk || void 0 === Pk ? void 0 : Pk.size) && void 0 !== ek ? ek : 1,
        dk = null !== (ik = null === Pk || void 0 === Pk ? void 0 : Pk.cosmetics) && void 0 !== ik ? ik : [],
        Vk = null !== (Dk = null === Pk || void 0 === Pk ? void 0 : Pk.JY) && void 0 !== Dk ? Dk : null;
      let Fk = !1,
        uk = null,
        Qk = null;
      const {
        engine: vk,
        bw: Ek
      } = qk(), hk = Ek.onBeforeRenderObservable.add((() => {
        var kk;
        null === (kk = Qk) || void 0 === kk || kk.render(vk.getDeltaTime())
      })), ak = null === Vk ? null : zk(Vk).catch((kk => (console.error(`Mob preview: could not load ${Vk}`, kk), null)));
      return Promise.all([Ik(fk), ak]).then((kk => {
        var ek, ik, Dk;
        let [Pk, Ik] = kk;
        if (Fk) return;
        const zk = (0, Yk.e)().yH.ku,
          {
            hitBoxDimensions: vk
          } = (0, Mk.e)(fk),
          Ek = Ak / Math.max(vk.height, vk.width);
        if (uk = (0, wk.m)(fk, Ek * sk, !0, !0), zk.setPosition(uk, Ck, -vk.height * Ek / 2, 0), zk.setRotationEulerY(uk, jk), Pk.meshApi instanceof pk.d && dk.length > 0)
          for (const [fk, Sk] of dk) Pk.meshApi.updatePlayerCosmetic(null, uk, fk, Sk, !0);
        else Pk.meshApi.updateVariation(uk, fk, null !== Sk && void 0 !== Sk ? Sk : "default");
        null !== Vk && null !== Ik && function(kk, ek, ik, Dk) {
          var fk;
          const Sk = yk.C[kk],
            bk = (0, Uk.j)();
          (0, Uk.e)(Sk, null === (fk = (0, lk.b)(ik).meshMetadata.heldItemPositionParams) || void 0 === fk ? void 0 : fk.itemOffset, bk);
          const Pk = Lk.d * bk.wi.y,
            Mk = bk.usesQuaternion ? bk.quaternion : rk.Quaternion.FromEulerVector(bk.rotation),
            Kk = new mk.b(`${ek.name}Hand`, qk().bw);
          Kk.position.Fs((0, Hk.d)(bk.position, Mk, Pk, Sk.heldModelOffsetY())), Kk.rotationQuaternion = Mk, Kk.wi.set(bk.wi.x, Pk, bk.wi.z), ek.clone(`${ek.name}Held`, Kk).bV(!0);
          const xk = (0, Yk.e)().yH.ku;
          xk.attachTransformNode(Kk, Dk, xk.getNamedNode(Dk, "ArmRightMesh"))
        }(Vk, Ik, fk, uk), zk.set(uk, "aOpacity", 1);
        const hk = null !== (ek = (0, lk.b)(fk).meshMetadata.lifeformTypeForModelOverride) && void 0 !== ek ? ek : fk;
        Qk = new nk.AnimatorState, Qk.thinInstMgr = zk, Qk.Yu = uk, Qk.xik = zk.Bik(uk, 0), Qk.modelLifeformType = hk, Qk.nodeNameAliases = null !== (ik = null === (Dk = (0, Kk.b)(hk)) || void 0 === Dk ? void 0 : Dk.nodeNameAliases) && void 0 !== ik ? ik : null, Qk.startAnimation(bk, xk.g.Movement)
      })).catch((kk => {
        console.error(`Mob preview: could not load ${fk}`, kk)
      })), () => {
        Fk = !0, Ek.onBeforeRenderObservable.remove(hk), null !== uk && (0, Yk.e)().yH.ku.delete(uk)
      }
    }

    function vk(kk, ek) {
      return Qk({
        mobType: "NPC",
        variation: null,
        animation: kk.animation
      }, kk, ek)
    }

    function Ek(kk) {
      let {
        mobType: ek,
        variation: ik,
        metaInfo: Dk,
        tamed: fk
      } = kk, Sk = !1, bk = null, rk = 0;
      const Pk = (0, Yk.e)(),
        mk = Pk.yH.ku,
        Mk = kk => {
          rk += dk * (kk / 1e3) % (2 * Math.PI), mk.setRotationEulerY(bk, rk)
        };
      return Ik(ek).then((kk => {
        if (Sk) return;
        bk = (0, wk.m)(ek, sk, !0, !0), mk.setPosition(bk, 0, -sk, 0), kk.meshApi.updateVariation(bk, ek, ik);
        const rk = {
          wool: "Sheared" !== Dk,
          saddle: "Saddled" === Dk,
          antlers: "Antlers" === Dk,
          collar: fk
        };
        for (const [ek, ik] of Object.entries(rk)) mk.hasGroup(bk, ek) && kk.meshApi.setMeshGroupVisibility(bk, ek, ik);
        mk.set(bk, "aOpacity", 1), Pk.on("renderTickBegin", Mk)
      })).catch((kk => {
        console.error(`Pet preview: could not load ${ek}`, kk)
      })), () => {
        Sk = !0, Pk.off("renderTickBegin", Mk), null !== bk && mk.delete(bk)
      }
    }
    class hk {
      constructor(kk, ek) {
        this.place = ek, this.remove = null;
        const {
          engine: ik,
          bw: Dk,
          canvas: fk
        } = qk();
        kk.appendChild(fk), ik.resize(), ik.runRenderLoop((() => {
          Dk.render()
        }))
      }
      show(kk) {
        var ek;
        null === (ek = this.remove) || void 0 === ek || ek.call(this), this.remove = this.place(kk)
      }
      resize(kk, ek) {
        const {
          engine: ik,
          canvas: Dk
        } = qk();
        Dk.width = kk, Dk.height = ek, ik.resize()
      }
      close() {
        var kk;
        qk().engine.stopRenderLoop(), null === (kk = this.remove) || void 0 === kk || kk.call(this), this.remove = null
      }
    }
    class ak {
      constructor(kk) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new hk(kk, (() => () => {}))
      }
      show(kk) {
        kk.figures !== this.view.figures && this.preload(kk.figures), this.view = kk, this.place()
      }
      resize(kk, ek) {
        this.preview.resize(kk, ek), this.aspect = kk / ek, this.place()
      }
      close() {
        this.preview.close();
        for (const kk of this.placed) null === kk || void 0 === kk || kk.remove();
        this.placed = []
      }
      preload(kk) {
        const ek = () => {};
        Ik("NPC").catch(ek);
        for (const {
            JY: ik
          }
          of kk) null !== ik && zk(ik).catch(ek)
      }
      place() {
        const {
          figures: kk,
          shown: ek
        } = this.view, ik = kk.map(((ik, Dk) => {
          var fk;
          const Sk = null !== (fk = this.placed[Dk]) && void 0 !== fk ? fk : null;
          if (!ek[Dk]) return null === Sk || void 0 === Sk || Sk.remove(), null;
          const bk = (rk = (Dk + .5) / kk.length, Pk = this.aspect, (.5 - rk) * (2 * Ck * Math.tan(qk().camera.fov / 2)) * Pk);
          var rk, Pk;
          return null !== Sk && Sk.figure === ik && Sk.x === bk ? Sk : (null === Sk || void 0 === Sk || Sk.remove(), {
            figure: ik,
            x: bk,
            remove: vk(ik, bk)
          })
        }));
        for (const Dk of this.placed.slice(kk.length)) null === Dk || void 0 === Dk || Dk.remove();
        this.placed = ik
      }
    }

    function Wk(kk) {
      return new hk(kk, Qk)
    }

    function tk(kk) {
      return new ak(kk)
    }

    function Xk(kk) {
      return new hk(kk, Ek)
    }
  },
  38371: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => xk
    });
    var Dk = ik(36764),
      fk = ik(36781),
      Sk = ik(37037),
      bk = ik(36789),
      rk = ik(36773);

    function Pk(kk) {
      return `\n\t\t\t\t${(0,rk.A)(kk,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, rk.F)(kk, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, rk.F)(kk, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, rk.n)(kk, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function mk(kk, ek) {
      let ik = (0, rk.Hb)(kk, "skele" + (ek - 1));
      for (let fk = ek - 2; fk >= 0; fk--) ik = (0, rk.vb)(kk, `boneIdx == ${fk}`, (0, rk.Hb)(kk, `skele${fk}`), ik);
      const Dk = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,rk.F)(kk,"int","boneIdx",(0,rk.Ab)(kk,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,rk.F)(kk,"vec3","bone",ik)}\n\t\t\t\t${(0,rk.F)(kk,"vec2","pivot",(0,rk.n)(kk,"vec2","0.0",`${(0,rk.Rb)(kk,"position")}.z`))}\n\t\t\t\t${(0,rk.$)(kk)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${Dk}));`:`positionUpdated.yz += ${Dk};`}\n\t\t`
    }

    function Mk(kk) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,rk.n)(kk,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const Kk = {
        x: 0,
        y: 0,
        z: 0,
        zek(kk, ek) {
          return this.x = kk[ek], this.y = kk[ek + 1], this.z = kk[ek + 2], this
        }
      },
      xk = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (kk, ek) => ({
          ...(0, Dk.e)("CAPE"),
          BLOXD_CAPE_BONES: `${kk}`,
          BLOXD_CAPE_MAX_Y: (0, fk.rb)(ek)
        }),
        getUniforms(kk) {
          return (0, Sk.d)(function(kk) {
            const ek = [];
            for (let ik = 0; ik < kk; ik++) ek.push({
              name: `skele${ik}`,
              type: "highp vec3"
            });
            return ek
          }(this.skeleLen), "vertex", kk)
        },
        bind(kk) {
          for (let ek = 0; ek < this.skeleLen; ek++) kk.updateVector3(`skele${ek}`, Kk.zek(this.skele, 3 * ek))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(kk, ek) {
          return "vertex" !== kk ? null : {
            CUSTOM_VERTEX_DEFINITIONS: Pk(ek),
            CUSTOM_VERTEX_UPDATE_POSITION: mk(ek, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: Mk(ek)
          }
        }
      };
    (0, bk.l)(xk)
  },
  38279: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Mk,
      e: () => Kk
    });
    var Dk = ik(36764),
      fk = ik(37037),
      Sk = ik(36773),
      bk = ik(36789);
    const rk = "bloxdTextLodBias",
      Pk = [{
        name: rk,
        type: "float"
      }],
      mk = "bloxdTextSample",
      Mk = {
        planes: -.5,
        boards: -.5
      },
      Kk = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, Dk.e)("TEXT_SAMPLER"),
        getUniforms: kk => (0, fk.d)(Pk, "fragment", kk),
        bind(kk) {
          kk.updateFloat(rk, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(kk, ek) {
          if ("fragment" !== kk) return null;
          const ik = (0, Sk.N)(ek, `vec4 ${mk}(sampler2D s, vec2 uv, float bias)`, `fn ${mk}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            Dk = (0, Sk.N)(ek, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            fk = `${(0,Sk.T)(ek,"vDiffuseUV")} + uvOffset`,
            bk = (0, Sk.N)(ek, `${mk}(diffuseSampler, ${fk}, ${(0,Sk.Hb)(ek,rk)})`, `${mk}(diffuseSampler, diffuseSamplerSampler, ${fk}, ${(0,Sk.Hb)(ek,rk)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${ik} {\n\t\t\t\t\t${(0,Sk.F)(ek,"vec4","texel",Dk)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,Sk.n)(ek,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,Sk.n)(ek,"vec3","0.0")}, ${(0,Sk.n)(ek,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, Sk.I)(ek)]: `baseColor = ${bk};`
          }
        }
      };
    (0, bk.l)(Kk)
  },
  40705: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      CapeMaterialPlugin: () => Yk,
      HueTintMaterialPlugin: () => Lk,
      LifeformMaterialPlugin: () => Ck,
      OverlayMaterialPlugin: () => Ak
    });
    var Dk = ik(40707),
      fk = ik(37599);
    class Sk extends((0, Dk.g)(fk.e)) {}(0, Dk.j)(fk.e, Sk);
    var bk = ik(36761);
    class rk extends((0, Dk.g)(bk.f)) {}(0, Dk.j)(bk.f, rk);
    var Pk = ik(37451);
    class mk extends((0, Dk.g)(Pk.h)) {}(0, Dk.j)(Pk.h, mk);
    var Mk = ik(37028),
      Kk = ik(39829),
      xk = ik(37020);
    class nk extends((0, Dk.g)(xk.e)) {
      constructor(kk, ek, ik) {
        super(kk, ek, ik), (0, Mk.j)(kk)
      }
      dispose(kk) {
        (0, Mk.m)(this._material), super.dispose(kk)
      }
    }(0, Dk.j)(xk.e, nk), (0, xk.h)({
      disableUnusedSpecularTerm: Dk.d,
      isLightingDisabled: kk => kk instanceof Kk.StandardMaterial && kk.disableLighting
    });
    var Uk = ik(38279);
    class Hk extends((0, Dk.g)(Uk.e)) {}(0, Dk.j)(Uk.e, Hk);
    var wk = ik(38371),
      lk = ik(36883),
      pk = ik(37717),
      yk = ik(36826);
    class Yk extends((0, Dk.g)(wk.d)) {}(0, Dk.j)(wk.d, Yk);
    class Lk extends((0, Dk.g)(lk.c)) {}(0, Dk.j)(lk.c, Lk);
    class Ck extends((0, Dk.g)(pk.o)) {}(0, Dk.j)(pk.o, Ck);
    class Ak extends((0, Dk.g)(yk.d)) {}(0, Dk.j)(yk.d, Ak)
  },
  40707: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Xk,
      g: () => pk,
      j: () => gk
    });
    var Dk = ik(39829),
      fk = ik(40711),
      Sk = ik(40738),
      bk = ik(40720),
      rk = ik(37416),
      Pk = ik(37430),
      mk = ik(37435),
      Mk = ik(37441),
      Kk = ik(36812),
      xk = ik(36821),
      nk = ik(40724),
      Uk = ik(36789),
      Hk = ik(36798),
      wk = ik(36773);

    function lk(kk, ek) {
      return Object.assign((function(kk, ik, Dk, fk) {
        return ek(this.featureState, kk, ik, Dk, fk)
      }), {
        sU: kk
      })
    }

    function pk(kk) {
      const ek = class extends nk.c {
          constructor(ek, ik) {
            const Dk = (0, Hk.Y)(ek),
              fk = Dk && (0, Hk.w)(Dk, kk.name);
            for (var Sk = arguments.length, bk = new Array(Sk > 2 ? Sk - 2 : 0), rk = 2; rk < Sk; rk++) bk[rk - 2] = arguments[rk];
            super(ek, kk.name, kk.priority, fk ? fk.defines : kk.defines(...bk), !1), this.featureState = void 0, this.featureState = ik, this._pluginManager._addPlugin(this), this._enable(!0), (0, Hk.z)(this._material, kk, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return kk.className
          }
          isCompatible(kk) {
            return kk === wk.d.GLSL || kk === wk.d.WGSL
          }
        },
        ik = (0, Uk.g)(kk);
      for (const [Dk, fk] of Object.entries(Uk.b)) {
        const Sk = kk[Dk];
        if (Sk) {
          const kk = ik[Dk];
          Object.defineProperty(ek.prototype, fk, {
            value: lk(Sk, kk),
            writable: !0,
            configurable: !0
          })
        }
      }
      return ek
    }
    class yk extends(pk(rk.c)) {}
    var Yk = ik(39377),
      Lk = ik(40727);
    const Ck = new WeakMap;

    function Ak(kk, ek, ik) {
      let Dk = Ck.get(ik);
      Dk || (Dk = new Map, Ck.set(ik, Dk));
      const {
        url: fk
      } = kk;
      let Sk = Dk.get(fk);
      return Sk || (Sk = async function(kk, ek, ik) {
        var Dk;
        const {
          width: fk,
          height: Sk
        } = kk.getSize(), rk = Math.round(Sk / fk), Pk = kk.getInternalTexture(), mk = ek && ek.byteLength === fk * fk * rk * 4 ? ek : null !== (Dk = jk.get(Pk)) && void 0 !== Dk ? Dk : kk._readPixelsSync(), Mk = new Lk.c(mk, fk, fk, rk, Yk.d.TEXTUREFORMAT_RGBA, ik, !0, !1, bk.d.NEAREST_NEAREST_MIPLINEAR);
        jk.has(Pk) || (! function(kk, ek) {
          const ik = ek.createRawTexture(new Uint8Array(4), 1, 1, Yk.d.TEXTUREFORMAT_RGBA, !1, !1, bk.d.NEAREST_SAMPLINGMODE);
          kk._hardwareTexture.release(), ek.unbindAllTextures(), ik._swapAndDie(kk, !1)
        }(Pk, ik.JU()), jk.set(Pk, mk));
        return Mk
      }(kk, ek, ik), Dk.set(fk, Sk), Sk.catch((() => {
        Dk.delete(fk)
      }))), Sk
    }
    const jk = new WeakMap;
    var sk = ik(37444);
    class dk extends(pk(Pk.j)) {
      constructor(kk, ek) {
        super(kk, ek), ek.textures.forEach(((kk, ek) => {
          kk.mirror.onLoadObservable.add((kk => {
            this.setTextureArrayData(kk, ek).catch((kk => {
              console.error(`Failed to build texture array for atlas ${ek}`, kk)
            }))
          }))
        })), (0, sk.i)(ek, kk.shaderLanguage)
      }
      async setTextureArrayData(kk, ek) {
        var ik, Dk;
        const fk = this.featureState,
          {
            width: Sk,
            height: bk
          } = kk.getSize(),
          rk = fk.useWebGL2 ? await Ak(kk, null !== (ik = null === (Dk = fk.sources.pixels) || void 0 === Dk ? void 0 : Dk[ek]) && void 0 !== ik ? ik : null, this._material.XF()) : null;
        (0, sk.e)(this._material, fk, ek, rk, Sk, Math.round(bk / Sk), this._material.shaderLanguage)
      }
    }
    var Vk = ik(40729),
      Fk = ik(39887),
      uk = ik(36690),
      qk = ik(40732),
      Ik = ik(40001),
      zk = ik(39870),
      Qk = ik(40693),
      vk = ik(37189),
      Ek = ik(40734);
    class hk extends Vk.d {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const ak = {
      Mesh: qk.d,
      TransformNode: Qk.b,
      hU: Vk.d,
      VertexBuffer: Vk.h,
      BoundingInfo: Fk.b,
      eH: uk.eH,
      ArenaBuffer: hk,
      SubMesh: zk.e,
      VertexData: Ik.b,
      MirroredGeometry: Ek.c,
      meshFromArrays: Ek.e,
      plainMeshFromArrays: Ek.i
    };
    (0, vk.e)(ak);
    var Wk = ik(37028);
    class tk extends(pk(Mk.f)) {
      constructor(kk, ek) {
        if (super(kk, ek), kk instanceof Dk.StandardMaterial && ek.dirLightCount > 0) {
          const ek = kk,
            ik = ek._blockDirtyMechanism;
          ek._blockDirtyMechanism = !0, kk.disableLighting = !0, ek._blockDirtyMechanism = ik;
          const Dk = (0, Hk.Y)(kk);
          Dk && (Dk.disableLighting = !0, (0, Hk.V)(Dk))
        }(0, Wk.j)(kk)
      }
      dispose(kk) {
        (0, Wk.m)(this._material), super.dispose(kk)
      }
    }

    function Xk(kk, ek) {
      if (!(ek instanceof Dk.StandardMaterial) || ek.specularTexture) return;
      const {
        r: ik,
        g: fk,
        b: Sk
      } = ek.specularColor;
      0 === ik && 0 === fk && 0 === Sk && (kk.SPECULARTERM = !1)
    }(0, Mk.e)({
      disableUnusedSpecularTerm: Xk
    });
    var Bk = ik(36903),
      ck = ik(37199);
    const Tk = new RegExp(`^#define ${mk.d}\\s*$`, "m");
    class Zk extends(pk(mk.g)) {
      constructor(kk, ek) {
        super(kk, ek), this.aU = !1, ek.ditherOnlyWhileFading && (ck.i.add(kk), this.prewarmDitherTwins(kk))
      }
      prewarmDitherTwins(kk) {
        const ek = new WeakSet;
        kk.onEffectCreatedObservable.add((ik => {
          let {
            effect: Dk,
            subMesh: fk
          } = ik;
          if (this.featureState.prewarmingDither || ek.has(Dk)) return;
          ek.add(Dk);
          const Sk = null === fk || void 0 === fk ? void 0 : fk.getMesh();
          Sk && !Tk.test(Dk.defines) && kk.XF().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Sk) || ek.delete(Dk)
          }))
        }))
      }
      prewarmDither(kk) {
        if (this.aU || kk.RL()) return !1;
        const ek = new zk.e(0, 0, 0, 0, 0, kk, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(kk, ek)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== ek.effect
      }
      dispose(kk) {
        this.aU = !0, super.dispose(kk)
      }
    }
    const Ok = new Map;

    function gk(kk, ek) {
      Ok.set(kk, ek)
    }
    gk(rk.c, yk), gk(Pk.j, dk), gk(mk.g, Zk), gk(Mk.f, tk), (0, Kk.b)({
      create: (kk, ek) => {
        const ik = new Dk.StandardMaterial(kk.name, ek);
        return (0, Bk.m)(kk, ik), ik.detailMap._pluginDefineNames
      },
      write: (kk, ek, ik) => {
        (0, Bk.S)(kk.mirror, ek, ik)
      },
      addFeature: (kk, ek, ik) => {
        const Dk = Ok.get(ek.feature);
        if (!Dk) throw new Error(`${ek.feature.name} has no plugin class (registerPluginClass)`);
        new Dk(kk.mirror, ek.state, ...ik)
      },
      texture: (kk, ek, ik) => {
        let {
          url: Dk,
          noMipmap: fk,
          invertY: Sk,
          samplingMode: rk,
          data: Pk,
          sets: mk
        } = ik;
        if (!Pk) {
          const ik = new bk.d(Dk, ek, fk, Sk, rk);
          return Object.assign(ik, mk), void(0, xk.G)(kk, ik)
        }
        const Mk = {},
          Kk = new Promise(((kk, ek) => {
            Mk.onLoad = kk, Mk.onError = (kk, ik) => {
              ek(new Error(`${Pk.context}: ${(null===ik||void 0===ik?void 0:ik.message)||kk||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: nk,
            bytes: Uk,
            label: Hk
          } = Pk,
          wk = {
            noMipmap: fk,
            invertY: !1,
            samplingMode: rk,
            ...Mk,
            mimeType: nk,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          lk = new bk.d(null, ek, wk);
        Bk.o.set(lk, Kk), Object.assign(lk, mk), lk.updateURL(Dk, Uk);
        const pk = lk.getInternalTexture();
        pk && (pk.label = Hk), kk.uvSet = lk.coordinatesIndex, kk.matrix.set((0, Bk.H)(lk)), (0, xk.G)(kk, lk)
      },
      cube: (kk, ek, ik) => {
        let {
          rootUrl: Dk,
          files: Sk,
          noMipmap: rk,
          luminance: Pk
        } = ik;
        const {
          samplingMode: mk
        } = kk.sampler, Mk = mk === (0, xk.y)(rk) ? null : () => {
          (0, Bk.E)(Kk, mk)
        }, Kk = new fk.b(Dk, ek, null, rk, Sk, Mk, null, (0, xk.x)(Pk));
        Kk.coordinatesMode = bk.d.SKYBOX_MODE, (0, xk.G)(kk, Kk)
      },
      canvas: (kk, ek, ik) => {
        let {
          width: Dk,
          height: fk,
          mipmaps: rk,
          samplingMode: Pk,
          hasAlpha: mk = !1,
          wrap: Mk = bk.d.CLAMP_ADDRESSMODE
        } = ik;
        const Kk = new Sk.d(ek, {
          width: Dk,
          height: fk
        }, kk, rk, Pk);
        Kk.hasAlpha = mk, Kk.wrapU = Mk, Kk.wrapV = Mk;
        const xk = (0, Bk.u)(Kk);
        return (0, Bk.x)(xk, Kk), xk
      }
    })
  },
  40734: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Mk,
      e: () => Kk,
      i: () => xk
    });
    var Dk = ik(40729),
      fk = ik(39623),
      Sk = ik(39887),
      bk = ik(40010),
      rk = ik(40732),
      Pk = ik(40001),
      mk = ik(37075);
    class Mk extends bk.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (kk, ek) => {
          this.releaseUnlessInstanced(ek)
        }, this.onLinked = null
      }
      link(kk) {
        var ek;
        (0, mk.m)(kk), this.model = kk, null === (ek = this.onLinked) || void 0 === ek || ek.call(this, kk)
      }
      relink() {
        this.release();
        const kk = [];
        for (const fk of Object.values(this._vertexBuffers))
          if (!fk.getIsInstanced()) {
            const {
              byteOffset: ek,
              byteStride: ik,
              type: Dk,
              normalized: Sk
            } = fk;
            kk.push({
              kind: fk.getKind(),
              data: fk.getData(),
              offset: ek,
              stride: ik,
              components: fk.getSize(),
              glType: Dk,
              isNormalized: Sk
            })
          } const ek = this._indices.length ? this._indices : null,
          {
            minimum: ik,
            maximum: Dk
          } = this.extend;
        this.link(new mk.c(kk, ek, this.getTotalVertices(), new Float64Array(ik.Tik()), new Float64Array(Dk.Tik())))
      }
      copy(kk) {
        if (!this.model) return super.copy(kk);
        const ek = new Mk(kk, this.XF()),
          ik = this.oik(void 0, !0);
        ik && ek.setIndices(ik);
        let bk = !1;
        for (const Sk in this._vertexBuffers) {
          const kk = this._vertexBuffers[Sk],
            ik = kk.getData();
          if (!ik) continue;
          const rk = kk.getSize(),
            {
              type: Pk,
              byteOffset: mk,
              byteStride: Mk,
              normalized: Kk
            } = kk;
          bk ||= kk.isUpdatable();
          const xk = kk.getIsInstanced() ? (ik instanceof Array ? 4 * ik.length : ik.byteLength) / Mk : this.getTotalVertices(),
            nk = (0, fk.q)(ik, rk, Pk, mk, Mk, xk, !0),
            Uk = {
              updatable: kk.isUpdatable(),
              stride: rk,
              type: Pk,
              normalized: Kk,
              takeBufferOwnership: !0,
              instanced: kk.getIsInstanced()
            };
          ek.setVerticesBuffer(new Dk.h(this.JU(), nk, Sk, Uk), xk)
        }
        return ek._updatable = bk, ek._boundingInfo = new Sk.b(this.extend.minimum, this.extend.maximum), ek.relink(), ek
      }
      static mergeMeshes(kk, ek, ik, Dk, fk, Sk) {
        const Pk = kk[0].XF(),
          mk = new rk.d(kk[0].name + "_merged", Pk),
          Kk = new Mk(bk.e.RandomId(), Pk, void 0, !1, mk);
        try {
          if (!rk.d.MergeMeshes(kk, ek, ik, mk, fk, Sk)) return mk.dispose(), null
        } catch (xk) {
          throw mk.dispose(), xk
        }
        return Kk.relink(), mk
      }
      removeVerticesData(kk) {
        this.releaseUnlessInstanced(kk), super.removeVerticesData(kk)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(kk) {
        var ek;
        kk && null !== (ek = this.getVertexBuffer(kk)) && void 0 !== ek && ek.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, mk.s)(this.model), this.model = null)
      }
    }

    function Kk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new rk.d(kk, ik);
      const fk = (0, mk.i)(ek),
        {
          positions: Sk,
          normals: Kk,
          uvs: xk,
          indices: nk,
          named: Uk = {}
        } = ek,
        Hk = new Pk.b;
      Hk.positions = Sk, Hk.normals = null !== Kk && void 0 !== Kk ? Kk : null, Hk.uvs = null !== xk && void 0 !== xk ? xk : null, Hk.indices = nk;
      const wk = new Mk(bk.e.RandomId(), ik, Hk, !1, Dk);
      for (const {
          kind: bk,
          components: rk
        }
        of fk.vertexAttributes) bk in Uk && Dk.setVerticesData(bk, Uk[bk], !1, rk);
      return wk.link(fk), Dk
    }

    function xk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const fk = new rk.d(kk, ik),
        {
          positions: Sk,
          normals: bk,
          uvs: mk,
          indices: Mk
        } = ek;
      return Object.assign(new Pk.b, {
        positions: Sk,
        normals: bk,
        uvs: mk,
        indices: Mk
      }).applyToMesh(fk, Dk), fk
    }
  },
  8658: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Mk,
      f: () => rk,
      i: () => Pk
    });
    var Dk = ik(2195),
      fk = ik(1218),
      Sk = ik(2201);
    const bk = ",";

    function rk(kk) {
      if (!kk) return [];
      const ek = new Set,
        ik = [];
      for (const Dk of kk.split(bk)) {
        const kk = Dk.trim();
        if ((0, Sk.i)(kk) && !ek.has(kk) && (ek.add(kk), ik.push(kk), ik.length >= fk.o)) break
      }
      return ik
    }

    function Pk(kk) {
      const ek = new Set,
        ik = [];
      for (const Dk of kk)
        if ((0, Sk.i)(Dk) && !ek.has(Dk) && (ek.add(Dk), ik.push(Dk), ik.length >= fk.o)) break;
      return ik.join(bk)
    }

    function mk() {
      return Pk(Sk.f)
    }

    function Mk(kk) {
      var ek;
      return "emote" === kk ? mk() : null !== (ek = Kk[kk][0]) && void 0 !== ek ? ek : xk[kk]
    }
    const Kk = fk.y.reduce(((kk, ek) => {
        const ik = [];
        for (const Sk in Dk.f[ek]) {
          var fk;
          "default" === (null === (fk = (0, Dk.j)(ek, Sk)) || void 0 === fk ? void 0 : fk.cosmeticPack) && ik.push(Sk)
        }
        return kk[ek] = ik, kk
      }), {}),
      xk = fk.y.reduce(((kk, ek) => (kk[ek] = Object.keys(Dk.f[ek])[0], kk)), {})
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);