export const id = 158;
export const ids = [158];
export const modules = {
  38375: (kk, ek, ik) => {
    var Dk = {
      "./cape_cow_cream.png": 27576,
      "./cape_cow_normal.png": 27581,
      "./cape_creator_level1.png": 27584,
      "./cape_creator_level2.png": 27589,
      "./cape_creator_level3.png": 27596,
      "./cape_none.png": 27598,
      "./cape_pig.png": 27607,
      "./cape_sheep.png": 27616,
      "./cape_super.png": 27625,
      "./cape_super_inverted.png": 27629,
      "./cape_youtuber.png": 27632
    };

    function fk(kk) {
      var ek = Sk(kk);
      return ik(ek)
    }

    function Sk(kk) {
      if (!ik.o(Dk, kk)) {
        var ek = new Error("Cannot find module '" + kk + "'");
        throw ek.code = "MODULE_NOT_FOUND", ek
      }
      return Dk[kk]
    }
    fk.keys = function() {
      return Object.keys(Dk)
    }, fk.resolve = Sk, kk.exports = fk, fk.id = 38375
  },
  40742: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      openCharacterPreview: () => Ok
    });
    var Dk = ik(37685),
      fk = ik(2704),
      Sk = ik(581),
      bk = ik(36754),
      rk = ik(2201),
      Pk = ik(36747),
      mk = ik(39377),
      Mk = ik(39651),
      Kk = ik(40673),
      xk = ik(36690),
      nk = ik(39813),
      Uk = ik(36868),
      Hk = ik(39829),
      wk = ik(40720),
      lk = ik(36685),
      pk = ik(1207),
      yk = ik(2195),
      Yk = ik(36832),
      Lk = ik(36925);
    class Ck {
      constructor(kk, ek) {
        this.pose = kk, this.nodes = void 0, this.nodes = kk.boneNames.map((kk => ek.get(kk)))
      }
      write(kk) {
        this.pose.pose(kk);
        const {
          rotations: ek
        } = this.pose;
        for (let ik = 0; ik < this.nodes.length; ik++) {
          const kk = 4 * ik;
          this.nodes[ik].rotationQuaternion.set(ek[kk], ek[kk + 1], ek[kk + 2], ek[kk + 3])
        }
      }
    }

    function Ak(kk) {
      kk.unfreezeWorldMatrix();
      for (const ek of kk.getChildren()) Ak(ek)
    }

    function jk(kk, ek) {
      kk.isVisible = ek;
      for (const ik of kk.getChildMeshes()) ik.isVisible = ek
    }
    class sk {
      constructor(kk, ek, ik) {
        this.bw = kk, this.thinInstMgr = ek, this.Yu = ik, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(kk, ek, ik) {
        const Dk = (0, Yk.g)(kk, ek);
        return Dk in this.modelCache || (this.modelCache[Dk] = (async () => {
          try {
            const Dk = await (0, Yk.j)(kk, this.bw),
              fk = new Map;
            for (const kk of Dk.getNodes()) fk.set(kk.name, kk);
            const Sk = (0, Yk.d)(null !== ek && void 0 !== ek ? ek : kk, this.bw);
            (0, Yk.n)(Dk, Sk, {
              keepTransforms: void 0 !== ik,
              onProcessedMesh: kk => {
                (0, Yk.o)(kk), this.bw.Zik(kk, !1), kk.isVisible = !1
              }
            });
            for (const kk of Dk.rootNodes) Ak(kk);
            const bk = void 0 === ik ? null : (0, Lk.c)(ik, (kk => {
              var ek, ik;
              return null !== (ek = null === (ik = fk.get(kk)) || void 0 === ik ? void 0 : ik.rotationQuaternion) && void 0 !== ek ? ek : null
            }));
            return {
              nodesByName: fk,
              bones: null === bk ? null : new Ck(bk, fk)
            }
          } catch (fk) {
            throw delete this.modelCache[Dk], console.error(`Failed to load preview attachment ${Dk}:`, fk), fk
          }
        })()), this.modelCache[Dk]
      }
      async update(kk, ek) {
        var ik;
        const {
          thinInstMgr: Dk,
          Yu: fk
        } = this;
        this.cosmeticNames[kk] = ek;
        const Sk = this.attachmentsByType[kk];
        if (Sk)
          for (const {
              mesh: rk,
              destNode: Pk,
              bones: mk
            }
            of Sk) {
            null !== mk && (0, pk.kb)(this.shownBones, mk), jk(rk, !1);
            const kk = Dk.getNamedNode(fk, Pk);
            Dk.detachTransformNodeIfFound(rk, fk, kk)
          }
        this.attachmentsByType[kk] = [];
        const bk = (0, yk.j)(kk, ek);
        if (null !== bk && void 0 !== bk && null !== (ik = bk.attachments) && void 0 !== ik && ik.length)
          for (const rk of bk.attachments) {
            let ik;
            try {
              ik = await this.loadModel(rk.modelGlb, rk.texture, rk.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[kk] !== ek) return;
            const Sk = ik.nodesByName.get(rk.modelNode);
            if (!Sk) {
              console.error(`Preview attachment node ${rk.modelNode} not found in ${rk.modelGlb}`);
              continue
            }
            jk(Sk, !0), (0, Yk.v)(Sk, rk.overlayColour);
            const bk = Dk.getNamedNode(fk, rk.destNode);
            Dk.attachTransformNode(Sk, fk, bk), this.attachmentsByType[kk].push({
              mesh: Sk,
              destNode: rk.destNode,
              bones: ik.bones
            }), null !== ik.bones && this.shownBones.push(ik.bones)
          }
      }
      writePoses(kk) {
        for (const ek of this.shownBones) ek.write(kk)
      }
    }
    var dk = ik(36758),
      Vk = (ik(40701), ik(40055), ik(40705), ik(33801));
    let Fk, uk, qk, Ik, zk, Qk, vk, Ek, hk, ak;
    const Wk = document.createElement("canvas");
    async function tk() {
      await new Promise((kk => {
        setTimeout((() => {
          kk()
        }), 100)
      }))
    }
    Wk.classList.add("CharCustomisationPreviewCanvas");
    const Xk = {};

    function Bk(kk, ek) {
      Wk.width = kk, Wk.height = ek, Fk.resize()
    }
    let ck = 0;
    class Tk {
      constructor(kk, ek) {
        this.framing = ek, this.ready = ak, this.dev = {
          canvas: () => Wk,
          isolateHead(kk) {
            const ek = Qk.getNodeNames(vk);
            for (let ik = 0; ik < ek.length; ik++) "HeadMesh" !== ek[ik] && "__root__" !== ek[ik] && "TorsoNode" !== ek[ik] && Qk.setNodeEnabled(vk, ik, !1);
            if (kk) {
              const kk = Qk.getNamedNode(vk, "HeadMesh");
              Qk.setNodeDisableColorWrite(vk, kk, !0, (kk => {
                const ek = new Hk.StandardMaterial(`${kk.name}_depthOnly`, kk.XF());
                return ek.disableColorWrite = !0, ek
              }))
            }
            Qk.setPosition(vk, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const ik = kk.getBoundingClientRect();
        Bk(ik.width, ik.height), ck++, Fk.stopRenderLoop(), Fk.runRenderLoop((() => {
          var kk, ek;
          null === (kk = Ek) || void 0 === kk || kk.render(Fk.getDeltaTime()), null === (ek = hk) || void 0 === ek || ek.writePoses(performance.now() / 1e3), qk.render()
        }))
      }
      isReady() {
        return !!Ik
      }
      setCosmetic(kk, ek) {
        ! function(kk, ek) {
          if (!Ik) return;
          const bk = (0, fk.e)();
          bk.VV(!1), Dk.e.Player.meshApi.updatePlayerCosmetic(bk.Qq, vk, kk, ek, !0), "cape" === kk && (ek === Sk.f ? zk.bV(!1) : (zk.bV(!0), zk.material.diffuseTexture = new wk.d(ik(38375)(`./cape_${ek}.png`), zk.XF(), {
            invertY: !1,
            samplingMode: wk.d.NEAREST_NEAREST_MIPLINEAR
          })));
          Xk[kk] = hk.update(kk, ek)
        }(kk, ek)
      }
      playEmote(kk) {
        if (!Ek) return;
        if (!kk) return void Ek.stopAnimation(Pk.g.Emote);
        const ek = (0, bk.g)((0, rk.g)(kk).animation);
        Ek.startAnimation(ek, Pk.g.Emote, 0, rk.d)
      }
      async untilDrawn(kk) {
        if (await tk(), "cape" === kk && zk) {
          const kk = zk.material,
            ek = null === kk || void 0 === kk ? void 0 : kk.diffuseTexture;
          ek && !ek.isReady() && (await new Promise((kk => {
            ek.onLoadObservable.addOnce((() => {
              kk()
            }))
          })), await tk())
        }
        Xk[kk] && (await Xk[kk], await tk()), await qk.whenReadyAsync(), await new Promise((kk => {
          qk.onAfterRenderObservable.addOnce((() => {
            kk()
          }))
        }))
      }
      setOrbit(kk) {
        Zk(kk)
      }
      resetCamera() {
        uk.inertialAlphaOffset = 0, uk.inertialBetaOffset = 0, uk.inertialRadiusOffset = 0, Zk(Vk.d[this.framing])
      }
      resize(kk, ek) {
        Bk(kk, ek)
      }
      close() {
        this.closed || (this.closed = !0, ck--, 0 === ck && Fk.stopRenderLoop())
      }
    }

    function Zk(kk) {
      let {
        yaw: ek,
        pitch: ik,
        radius: Dk,
        target: fk
      } = kk;
      uk.alpha = ek, uk.beta = ik, Dk && (uk.radius = Dk), fk && uk.target.set(fk[0], fk[1], fk[2])
    }

    function Ok(kk, ek) {
      return kk.appendChild(Wk), Fk || function() {
        Fk = new mk.d(Wk, !0, {
          preserveDrawingBuffer: !0
        });
        const kk = (0, fk.e)();
        Fk.Xik = kk.yH.engine.Xik, qk = new Mk.d(Fk), qk.clearColor = new Uk.e(0, 0, 0, 0), qk.ambientColor = new Uk.Color3(1, 1, 1), uk = new Kk.c("gw", 0, 0, 1, xk.eH.Zero(), qk), uk.attachControl(Wk, !0), uk.panningSensibility = 0, ak = (0, Dk.u)("Player", qk, !0).then((ek => {
          Ik = ek.meshApi, zk = ek.capeMesh, Qk = kk.yH.ku;
          const ik = 8.33;
          vk = (0, Dk.m)("Player", ik, !0, !0), Qk.setPosition(vk, 0, -8.33, 0);
          const fk = Qk.getNamedNode(vk, "BodyMesh");
          Qk.attachTransformNode(zk, vk, fk), Qk.set(vk, "aOpacity", 1), Qk.oq(vk, "aOpacity", 1), hk = new sk(qk, Qk, vk), Ek = new lk.AnimatorState, Ek.Lx = kk, Ek.thinInstMgr = Qk, Ek.Yu = vk, Ek.xik = Qk.Bik(vk, 0), Ek.modelLifeformType = "Player", Ek.nodeNameAliases = (0, dk.b)("Player").nodeNameAliases;
          const Sk = zk.hq().boundingBox;
          zk.position.y = ((24 - Sk.maximum.y + Sk.minimum.y) / 2 - 1 / 32) / ik, zk.position.z = -1 / ik, zk.rotationQuaternion = null;
          const bk = Math.PI / 18,
            rk = Sk.maximum.y / ik;
          zk.rotation.x = bk;
          const Pk = Math.cos(bk),
            mk = Math.sin(bk);
          zk.position.y += rk * (1 - Pk) + 0 * mk, zk.position.z -= rk * mk + 0 * (1 - Pk);
          const Mk = new Hk.StandardMaterial("capeMaterial", zk.XF());
          zk.material = Mk;
          const Kk = new Uk.Color3(1, 1, 1);
          Mk.diffuseColor = new Uk.Color3, Mk.specularColor = new Uk.Color3, Mk.emissiveColor = new Uk.Color3, Mk.ambientColor = new Uk.Color3, Kk.scaleToRef(.43, Mk.diffuseColor), Kk.scaleToRef(1.75, Mk.ambientColor), Mk.freeze();
          const wk = new nk.c("light", new xk.eH(-.1, 1, -.3), qk);
          wk.diffuse = new Uk.Color3(1, 1, 1), wk.specular = new Uk.Color3(1, 1, 1), wk.groundColor = new Uk.Color3(.5, .5, .5)
        }))
      }(), new Tk(kk, ek)
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