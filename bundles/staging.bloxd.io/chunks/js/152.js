export const id = 152;
export const ids = [152];
export const modules = {
  40255: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      openCharacterPreview: () => qz
    });
    var Fz = sz(37543),
      Wz = sz(2555),
      Xz = sz(571),
      Oz = sz(36547),
      oz = sz(2145),
      vz = sz(36531),
      Uz = sz(39010),
      Kz = sz(39252),
      uz = sz(40177),
      Nz = sz(36473),
      bz = sz(39408),
      wz = sz(36652),
      Dz = sz(39427),
      gz = sz(40220),
      Hz = sz(36464),
      Bz = sz(1213),
      Pz = sz(2140),
      rz = sz(36617),
      Yz = sz(36705);
    class xz {
      constructor(zz, tz) {
        this.pose = zz, this.nodes = void 0, this.nodes = zz.boneNames.map((zz => tz.get(zz)))
      }
      write(zz) {
        this.pose.pose(zz);
        const {
          rotations: tz
        } = this.pose;
        for (let sz = 0; sz < this.nodes.length; sz++) {
          const zz = 4 * sz;
          this.nodes[sz].rotationQuaternion.set(tz[zz], tz[zz + 1], tz[zz + 2], tz[zz + 3])
        }
      }
    }

    function mz(zz) {
      zz.unfreezeWorldMatrix();
      for (const tz of zz.getChildren()) mz(tz)
    }

    function Jz(zz, tz) {
      zz.isVisible = tz;
      for (const sz of zz.getChildMeshes()) sz.isVisible = tz
    }
    class Iz {
      constructor(zz, tz, sz) {
        this.Kg = zz, this.thinInstMgr = tz, this.bI = sz, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(zz, tz, sz) {
        const Fz = (0, rz.g)(zz, tz);
        return Fz in this.modelCache || (this.modelCache[Fz] = (async () => {
          try {
            const Fz = await (0, rz.j)(zz, this.Kg),
              Wz = new Map;
            for (const zz of Fz.getNodes()) Wz.set(zz.name, zz);
            const Xz = (0, rz.e)(null !== tz && void 0 !== tz ? tz : zz, this.Kg);
            (0, rz.k)(Fz, Xz, {
              keepTransforms: void 0 !== sz,
              onProcessedMesh: zz => {
                (0, rz.m)(zz), this.Kg.ksz(zz, !1), zz.isVisible = !1
              }
            });
            for (const zz of Fz.rootNodes) mz(zz);
            const Oz = void 0 === sz ? null : (0, Yz.f)(sz, (zz => {
              var tz, sz;
              return null !== (tz = null === (sz = Wz.get(zz)) || void 0 === sz ? void 0 : sz.rotationQuaternion) && void 0 !== tz ? tz : null
            }));
            return {
              nodesByName: Wz,
              bones: null === Oz ? null : new xz(Oz, Wz)
            }
          } catch (Wz) {
            throw delete this.modelCache[Fz], console.error(`Failed to load preview attachment ${Fz}:`, Wz), Wz
          }
        })()), this.modelCache[Fz]
      }
      async update(zz, tz) {
        var sz;
        const {
          thinInstMgr: Fz,
          bI: Wz
        } = this;
        this.cosmeticNames[zz] = tz;
        const Xz = this.attachmentsByType[zz];
        if (Xz)
          for (const {
              mesh: oz,
              destNode: vz,
              bones: Uz
            }
            of Xz) {
            null !== Uz && (0, Bz.ob)(this.shownBones, Uz), Jz(oz, !1);
            const zz = Fz.getNamedNode(Wz, vz);
            Fz.detachTransformNodeIfFound(oz, Wz, zz)
          }
        this.attachmentsByType[zz] = [];
        const Oz = (0, Pz.n)(zz, tz);
        if (null !== Oz && void 0 !== Oz && null !== (sz = Oz.attachments) && void 0 !== sz && sz.length)
          for (const oz of Oz.attachments) {
            let sz;
            try {
              sz = await this.loadModel(oz.modelGlb, oz.texture, oz.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[zz] !== tz) return;
            const Xz = sz.nodesByName.get(oz.modelNode);
            if (!Xz) {
              console.error(`Preview attachment node ${oz.modelNode} not found in ${oz.modelGlb}`);
              continue
            }
            Jz(Xz, !0), (0, rz.r)(Xz, oz.overlayColour);
            const Oz = Fz.getNamedNode(Wz, oz.destNode);
            Fz.attachTransformNode(Xz, Wz, Oz), this.attachmentsByType[zz].push({
              mesh: Xz,
              destNode: oz.destNode,
              bones: sz.bones
            }), null !== sz.bones && this.shownBones.push(sz.bones)
          }
      }
      writePoses(zz) {
        for (const tz of this.shownBones) tz.write(zz)
      }
    }
    var Cz = sz(36552),
      ez = (sz(40201), sz(39623), sz(40204), sz(8897));
    let Zz, Gz, Tz, cz, jz, Az, yz, Mz, dz, hz;
    const Qz = document.createElement("canvas");
    async function kz() {
      await new Promise((zz => {
        setTimeout((() => {
          zz()
        }), 100)
      }))
    }
    Qz.classList.add("CharCustomisationPreviewCanvas");
    const iz = {};

    function Lz(zz, tz) {
      Qz.width = zz, Qz.height = tz, Zz.resize()
    }
    let lz = 0;
    class nz {
      constructor(zz, tz) {
        this.framing = tz, this.ready = hz, this.dev = {
          canvas: () => Qz,
          isolateHead(zz) {
            const tz = Az.getNodeNames(yz);
            for (let sz = 0; sz < tz.length; sz++) "HeadMesh" !== tz[sz] && "__root__" !== tz[sz] && "TorsoNode" !== tz[sz] && Az.setNodeEnabled(yz, sz, !1);
            if (zz) {
              const zz = Az.getNamedNode(yz, "HeadMesh");
              Az.setNodeDisableColorWrite(yz, zz, !0, (zz => {
                const tz = new Dz.StandardMaterial(`${zz.name}_depthOnly`, zz.aJ());
                return tz.disableColorWrite = !0, tz
              }))
            }
            Az.setPosition(yz, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const sz = zz.getBoundingClientRect();
        Lz(sz.width, sz.height), lz++, Zz.stopRenderLoop(), Zz.runRenderLoop((() => {
          var zz, tz;
          null === (zz = Mz) || void 0 === zz || zz.render(Zz.getDeltaTime()), null === (tz = dz) || void 0 === tz || tz.writePoses(performance.now() / 1e3), Tz.render()
        }))
      }
      isReady() {
        return !!cz
      }
      setCosmetic(zz, tz) {
        ! function(zz, tz) {
          if (!cz) return;
          const Oz = (0, Wz.e)();
          Oz.Zm(!1), Fz.c.Player.meshApi.updatePlayerCosmetic(Oz.gC, yz, zz, tz, !0), "cape" === zz && (tz === Xz.i ? jz.Xx(!1) : (jz.Xx(!0), jz.material.diffuseTexture = new gz.c(sz(38212)(`./cape_${tz}.png`), jz.aJ(), {
            invertY: !1,
            samplingMode: gz.c.NEAREST_NEAREST_MIPLINEAR
          })));
          iz[zz] = dz.update(zz, tz)
        }(zz, tz)
      }
      playEmote(zz) {
        if (!Mz) return;
        if (!zz) return void Mz.stopAnimation(vz.c.Emote);
        const tz = (0, Oz.f)((0, oz.d)(zz).animation);
        Mz.startAnimation(tz, vz.c.Emote, 0, oz.b)
      }
      async untilDrawn(zz) {
        if (await kz(), "cape" === zz && jz) {
          const zz = jz.material,
            tz = null === zz || void 0 === zz ? void 0 : zz.diffuseTexture;
          tz && !tz.isReady() && (await new Promise((zz => {
            tz.onLoadObservable.addOnce((() => {
              zz()
            }))
          })), await kz())
        }
        iz[zz] && (await iz[zz], await kz()), await Tz.whenReadyAsync(), await new Promise((zz => {
          Tz.onAfterRenderObservable.addOnce((() => {
            zz()
          }))
        }))
      }
      setOrbit(zz) {
        az(zz)
      }
      resetCamera() {
        Gz.inertialAlphaOffset = 0, Gz.inertialBetaOffset = 0, Gz.inertialRadiusOffset = 0, az(ez.b[this.framing])
      }
      resize(zz, tz) {
        Lz(zz, tz)
      }
      close() {
        this.closed || (this.closed = !0, lz--, 0 === lz && Zz.stopRenderLoop())
      }
    }

    function az(zz) {
      let {
        yaw: tz,
        pitch: sz,
        radius: Fz,
        target: Wz
      } = zz;
      Gz.alpha = tz, Gz.beta = sz, Fz && (Gz.radius = Fz), Wz && Gz.target.set(Wz[0], Wz[1], Wz[2])
    }

    function qz(zz, tz) {
      return zz.appendChild(Qz), Zz || function() {
        Zz = new Uz.b(Qz, !0, {
          preserveDrawingBuffer: !0
        });
        const zz = (0, Wz.e)();
        Zz.ysz = zz.mD.engine.ysz, Tz = new Kz.b(Zz), Tz.clearColor = new wz.c(0, 0, 0, 0), Tz.ambientColor = new wz.Color3(1, 1, 1), Gz = new uz.e("Tg", 0, 0, 1, Nz.XD.Zero(), Tz), Gz.attachControl(Qz, !0), Gz.panningSensibility = 0, hz = (0, Fz.t)("Player", Tz, !0).then((tz => {
          cz = tz.meshApi, jz = tz.capeMesh, Az = zz.mD.vI;
          const sz = 8.33;
          yz = (0, Fz.i)("Player", sz, !0, !0), Az.setPosition(yz, 0, -8.33, 0);
          const Wz = Az.getNamedNode(yz, "BodyMesh");
          Az.attachTransformNode(jz, yz, Wz), Az.set(yz, "aOpacity", 1), Az.YC(yz, "aOpacity", 1), dz = new Iz(Tz, Az, yz), Mz = new Hz.AnimatorState, Mz.CN = zz, Mz.thinInstMgr = Az, Mz.bI = yz, Mz.Osz = Az.Msz(yz, 0), Mz.modelLifeformType = "Player", Mz.nodeNameAliases = (0, Cz.e)("Player").nodeNameAliases;
          const Xz = jz.rC().boundingBox;
          jz.position.y = ((24 - Xz.maximum.y + Xz.minimum.y) / 2 - 1 / 32) / sz, jz.position.z = -1 / sz, jz.rotationQuaternion = null;
          const Oz = Math.PI / 18,
            oz = Xz.maximum.y / sz;
          jz.rotation.x = Oz;
          const vz = Math.cos(Oz),
            Uz = Math.sin(Oz);
          jz.position.y += oz * (1 - vz) + 0 * Uz, jz.position.z -= oz * Uz + 0 * (1 - vz);
          const Kz = new Dz.StandardMaterial("capeMaterial", jz.aJ());
          jz.material = Kz;
          const uz = new wz.Color3(1, 1, 1);
          Kz.diffuseColor = new wz.Color3, Kz.specularColor = new wz.Color3, Kz.emissiveColor = new wz.Color3, Kz.ambientColor = new wz.Color3, uz.scaleToRef(.43, Kz.diffuseColor), uz.scaleToRef(1.75, Kz.ambientColor), Kz.freeze();
          const gz = new bz.b("light", new Nz.XD(-.1, 1, -.3), Tz);
          gz.diffuse = new wz.Color3(1, 1, 1), gz.specular = new wz.Color3(1, 1, 1), gz.groundColor = new wz.Color3(.5, .5, .5)
        }))
      }(), new nz(zz, tz)
    }
  },
  38210: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Nz
    });
    var Fz = sz(36567),
      Wz = sz(36576),
      Xz = sz(36818),
      Oz = sz(36581),
      oz = sz(36569);

    function vz(zz) {
      return `\n\t\t\t\t${(0,oz.w)(zz,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, oz.C)(zz, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, oz.C)(zz, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, oz.p)(zz, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function Uz(zz, tz) {
      let sz = (0, oz.Ab)(zz, "skele" + (tz - 1));
      for (let Wz = tz - 2; Wz >= 0; Wz--) sz = (0, oz.sb)(zz, `boneIdx == ${Wz}`, (0, oz.Ab)(zz, `skele${Wz}`), sz);
      const Fz = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,oz.C)(zz,"int","boneIdx",(0,oz.wb)(zz,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,oz.C)(zz,"vec3","bone",sz)}\n\t\t\t\t${(0,oz.C)(zz,"vec2","pivot",(0,oz.p)(zz,"vec2","0.0",`${(0,oz.Gb)(zz,"position")}.z`))}\n\t\t\t\t${(0,oz.$)(zz)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${Fz}));`:`positionUpdated.yz += ${Fz};`}\n\t\t`
    }

    function Kz(zz) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,oz.p)(zz,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const uz = {
        x: 0,
        y: 0,
        z: 0,
        Ztz(zz, tz) {
          return this.x = zz[tz], this.y = zz[tz + 1], this.z = zz[tz + 2], this
        }
      },
      Nz = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (zz, tz) => ({
          ...(0, Fz.e)("CAPE"),
          BLOXD_CAPE_BONES: `${zz}`,
          BLOXD_CAPE_MAX_Y: (0, Wz.ob)(tz)
        }),
        getUniforms(zz) {
          return (0, Xz.e)(function(zz) {
            const tz = [];
            for (let sz = 0; sz < zz; sz++) tz.push({
              name: `skele${sz}`,
              type: "highp vec3"
            });
            return tz
          }(this.skeleLen), "vertex", zz)
        },
        bind(zz) {
          for (let tz = 0; tz < this.skeleLen; tz++) zz.updateVector3(`skele${tz}`, uz.Ztz(this.skele, 3 * tz))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(zz, tz) {
          return "vertex" !== zz ? null : {
            CUSTOM_VERTEX_DEFINITIONS: vz(tz),
            CUSTOM_VERTEX_UPDATE_POSITION: Uz(tz, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: Kz(tz)
          }
        }
      };
    (0, Oz.i)(Nz)
  },
  38108: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Kz,
      e: () => uz
    });
    var Fz = sz(36567),
      Wz = sz(36818),
      Xz = sz(36569),
      Oz = sz(36581);
    const oz = "bloxdTextLodBias",
      vz = [{
        name: oz,
        type: "float"
      }],
      Uz = "bloxdTextSample",
      Kz = {
        planes: -.5,
        boards: -.5
      },
      uz = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, Fz.e)("TEXT_SAMPLER"),
        getUniforms: zz => (0, Wz.e)(vz, "fragment", zz),
        bind(zz) {
          zz.updateFloat(oz, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(zz, tz) {
          if ("fragment" !== zz) return null;
          const sz = (0, Xz.K)(tz, `vec4 ${Uz}(sampler2D s, vec2 uv, float bias)`, `fn ${Uz}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            Fz = (0, Xz.K)(tz, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            Wz = `${(0,Xz.T)(tz,"vDiffuseUV")} + uvOffset`,
            Oz = (0, Xz.K)(tz, `${Uz}(diffuseSampler, ${Wz}, ${(0,Xz.Ab)(tz,oz)})`, `${Uz}(diffuseSampler, diffuseSamplerSampler, ${Wz}, ${(0,Xz.Ab)(tz,oz)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${sz} {\n\t\t\t\t\t${(0,Xz.C)(tz,"vec4","texel",Fz)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,Xz.p)(tz,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,Xz.p)(tz,"vec3","0.0")}, ${(0,Xz.p)(tz,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, Xz.E)(tz)]: `baseColor = ${Oz};`
          }
        }
      };
    (0, Oz.i)(uz)
  },
  40204: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      CapeMaterialPlugin: () => rz,
      HueTintMaterialPlugin: () => Yz,
      LifeformMaterialPlugin: () => xz,
      OverlayMaterialPlugin: () => mz
    });
    var Fz = sz(40211),
      Wz = sz(37437);
    class Xz extends((0, Fz.f)(Wz.b)) {}(0, Fz.h)(Wz.b, Xz);
    var Oz = sz(36560);
    class oz extends((0, Fz.f)(Oz.i)) {}(0, Fz.h)(Oz.i, oz);
    var vz = sz(37277);
    class Uz extends((0, Fz.f)(vz.g)) {}(0, Fz.h)(vz.g, Uz);
    var Kz = sz(36800),
      uz = sz(39427),
      Nz = sz(36794);
    class bz extends((0, Fz.f)(Nz.f)) {
      constructor(zz, tz, sz) {
        super(zz, tz, sz), (0, Kz.i)(zz)
      }
      dispose(zz) {
        (0, Kz.k)(this._material), super.dispose(zz)
      }
    }(0, Fz.h)(Nz.f, bz), (0, Nz.g)({
      disableUnusedSpecularTerm: Fz.c,
      isLightingDisabled: zz => zz instanceof uz.StandardMaterial && zz.disableLighting
    });
    var wz = sz(38108);
    class Dz extends((0, Fz.f)(wz.e)) {}(0, Fz.h)(wz.e, Dz);
    var gz = sz(38210),
      Hz = sz(36662),
      Bz = sz(37583),
      Pz = sz(36608);
    class rz extends((0, Fz.f)(gz.e)) {}(0, Fz.h)(gz.e, rz);
    class Yz extends((0, Fz.f)(Hz.b)) {}(0, Fz.h)(Hz.b, Yz);
    class xz extends((0, Fz.f)(Bz.l)) {}(0, Fz.h)(Bz.l, xz);
    class mz extends((0, Fz.f)(Pz.b)) {}(0, Fz.h)(Pz.b, mz)
  },
  40211: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => kz,
      f: () => Bz,
      h: () => qz
    });
    var Fz = sz(39427),
      Wz = sz(40216),
      Xz = sz(40253),
      Oz = sz(40220),
      oz = sz(37250),
      vz = sz(37257),
      Uz = sz(37259),
      Kz = sz(37268),
      uz = sz(36600),
      Nz = sz(36605),
      bz = sz(40225),
      wz = sz(36581),
      Dz = sz(36590),
      gz = sz(36569);

    function Hz(zz, tz) {
      return Object.assign((function(zz, sz, Fz, Wz) {
        return tz(this.featureState, zz, sz, Fz, Wz)
      }), {
        Zw: zz
      })
    }

    function Bz(zz) {
      const tz = class extends bz.d {
          constructor(tz, sz) {
            const Fz = (0, Dz.$)(tz),
              Wz = Fz && (0, Dz.z)(Fz, zz.name);
            for (var Xz = arguments.length, Oz = new Array(Xz > 2 ? Xz - 2 : 0), oz = 2; oz < Xz; oz++) Oz[oz - 2] = arguments[oz];
            super(tz, zz.name, zz.priority, Wz ? Wz.defines : zz.defines(...Oz), !1), this.featureState = void 0, this.featureState = sz, this._pluginManager._addPlugin(this), this._enable(!0), (0, Dz.B)(this._material, zz, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return zz.className
          }
          isCompatible(zz) {
            return zz === gz.e.GLSL || zz === gz.e.WGSL
          }
        },
        sz = (0, wz.g)(zz);
      for (const [Fz, Wz] of Object.entries(wz.b)) {
        const Xz = zz[Fz];
        if (Xz) {
          const zz = sz[Fz];
          Object.defineProperty(tz.prototype, Wz, {
            value: Hz(Xz, zz),
            writable: !0,
            configurable: !0
          })
        }
      }
      return tz
    }
    class Pz extends(Bz(oz.e)) {}
    var rz = sz(39010),
      Yz = sz(40234);
    const xz = new WeakMap;

    function mz(zz, tz, sz) {
      let Fz = xz.get(sz);
      Fz || (Fz = new Map, xz.set(sz, Fz));
      const {
        url: Wz
      } = zz;
      let Xz = Fz.get(Wz);
      return Xz || (Xz = async function(zz, tz, sz) {
        const {
          width: Fz,
          height: Wz
        } = zz.getSize(), Xz = Math.round(Wz / Fz), oz = tz && tz.byteLength === Fz * Fz * Xz * 4 ? tz : zz._readPixelsSync();
        return new Yz.e(oz, Fz, Fz, Xz, rz.b.TEXTUREFORMAT_RGBA, sz, !0, !1, Oz.c.NEAREST_NEAREST_MIPLINEAR)
      }(zz, tz, sz), Fz.set(Wz, Xz), Xz.catch((() => {
        Fz.delete(Wz)
      }))), Xz
    }
    var Jz = sz(37271);
    class Iz extends(Bz(vz.i)) {
      constructor(zz, tz) {
        super(zz, tz), tz.textures.forEach(((zz, tz) => {
          zz.mirror.onLoadObservable.add((zz => {
            this.setTextureArrayData(zz, tz).catch((zz => {
              console.error(`Failed to build texture array for atlas ${tz}`, zz)
            }))
          }))
        })), (0, Jz.h)(tz, zz.shaderLanguage)
      }
      async setTextureArrayData(zz, tz) {
        var sz, Fz;
        const Wz = this.featureState,
          {
            width: Xz,
            height: Oz
          } = zz.getSize(),
          oz = Wz.useWebGL2 ? await mz(zz, null !== (sz = null === (Fz = Wz.sources.pixels) || void 0 === Fz ? void 0 : Fz[tz]) && void 0 !== sz ? sz : null, this._material.aJ()) : null;
        (0, Jz.d)(this._material, Wz, tz, oz, Xz, Math.round(Oz / Xz), this._material.shaderLanguage)
      }
    }
    var Cz = sz(40238),
      ez = sz(39472),
      Zz = sz(36473),
      Gz = sz(40240),
      Tz = sz(39562),
      cz = sz(39458),
      jz = sz(40192),
      Az = sz(36969),
      yz = sz(40249);
    class Mz extends Cz.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const dz = {
      Mesh: Gz.b,
      TransformNode: jz.c,
      Lw: Cz.b,
      VertexBuffer: Cz.c,
      BoundingInfo: ez.d,
      XD: Zz.XD,
      ArenaBuffer: Mz,
      SubMesh: cz.c,
      VertexData: Tz.b,
      MirroredGeometry: yz.c,
      meshFromArrays: yz.f,
      plainMeshFromArrays: yz.j
    };
    (0, Az.f)(dz);
    var hz = sz(36800);
    class Qz extends(Bz(Kz.h)) {
      constructor(zz, tz) {
        if (super(zz, tz), zz instanceof Fz.StandardMaterial && tz.dirLightCount > 0) {
          const tz = zz,
            sz = tz._blockDirtyMechanism;
          tz._blockDirtyMechanism = !0, zz.disableLighting = !0, tz._blockDirtyMechanism = sz;
          const Fz = (0, Dz.$)(zz);
          Fz && (Fz.disableLighting = !0, (0, Dz.Z)(Fz))
        }(0, hz.i)(zz)
      }
      dispose(zz) {
        (0, hz.k)(this._material), super.dispose(zz)
      }
    }

    function kz(zz, tz) {
      if (!(tz instanceof Fz.StandardMaterial) || tz.specularTexture) return;
      const {
        r: sz,
        g: Wz,
        b: Xz
      } = tz.specularColor;
      0 === sz && 0 === Wz && 0 === Xz && (zz.SPECULARTERM = !1)
    }(0, Kz.f)({
      disableUnusedSpecularTerm: kz
    });
    var iz = sz(36682),
      Lz = sz(36976);
    const lz = new RegExp(`^#define ${Uz.c}\\s*$`, "m");
    class nz extends(Bz(Uz.k)) {
      constructor(zz, tz) {
        super(zz, tz), this.lw = !1, tz.ditherOnlyWhileFading && (Lz.e.add(zz), this.prewarmDitherTwins(zz))
      }
      prewarmDitherTwins(zz) {
        const tz = new WeakSet;
        zz.onEffectCreatedObservable.add((sz => {
          let {
            effect: Fz,
            subMesh: Wz
          } = sz;
          if (this.featureState.prewarmingDither || tz.has(Fz)) return;
          tz.add(Fz);
          const Xz = null === Wz || void 0 === Wz ? void 0 : Wz.getMesh();
          Xz && !lz.test(Fz.defines) && zz.aJ().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Xz) || tz.delete(Fz)
          }))
        }))
      }
      prewarmDither(zz) {
        if (this.lw || zz.zsz()) return !1;
        const tz = new cz.c(0, 0, 0, 0, 0, zz, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(zz, tz)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== tz.effect
      }
      dispose(zz) {
        this.lw = !0, super.dispose(zz)
      }
    }
    const az = new Map;

    function qz(zz, tz) {
      az.set(zz, tz)
    }
    qz(oz.e, Pz), qz(vz.i, Iz), qz(Uz.k, nz), qz(Kz.h, Qz), (0, uz.b)({
      create: (zz, tz) => {
        const sz = new Fz.StandardMaterial(zz.name, tz);
        return (0, iz.m)(zz, sz), sz.detailMap._pluginDefineNames
      },
      write: (zz, tz, sz) => {
        (0, iz.Q)(zz.mirror, tz, sz)
      },
      addFeature: (zz, tz, sz) => {
        const Fz = az.get(tz.feature);
        if (!Fz) throw new Error(`${tz.feature.name} has no plugin class (registerPluginClass)`);
        new Fz(zz.mirror, tz.state, ...sz)
      },
      texture: (zz, tz, sz) => {
        let {
          url: Fz,
          noMipmap: Wz,
          invertY: Xz,
          samplingMode: oz,
          data: vz,
          sets: Uz
        } = sz;
        if (!vz) {
          const sz = new Oz.c(Fz, tz, Wz, Xz, oz);
          return Object.assign(sz, Uz), void(0, Nz.T)(zz, sz)
        }
        const Kz = {},
          uz = new Promise(((zz, tz) => {
            Kz.onLoad = zz, Kz.onError = (zz, sz) => {
              tz(new Error(`${vz.context}: ${(null===sz||void 0===sz?void 0:sz.message)||zz||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: bz,
            bytes: wz,
            label: Dz
          } = vz,
          gz = {
            noMipmap: Wz,
            invertY: !1,
            samplingMode: oz,
            ...Kz,
            mimeType: bz,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          Hz = new Oz.c(null, tz, gz);
        iz.p.set(Hz, uz), Object.assign(Hz, Uz), Hz.updateURL(Fz, wz);
        const Bz = Hz.getInternalTexture();
        Bz && (Bz.label = Dz), zz.uvSet = Hz.coordinatesIndex, zz.matrix.set((0, iz.K)(Hz)), (0, Nz.T)(zz, Hz)
      },
      cube: (zz, tz, sz) => {
        let {
          rootUrl: Fz,
          files: Xz,
          noMipmap: oz,
          luminance: vz
        } = sz;
        const {
          samplingMode: Uz
        } = zz.sampler, Kz = Uz === (0, Nz.I)(oz) ? null : () => {
          (0, iz.I)(uz, Uz)
        }, uz = new Wz.b(Fz, tz, null, oz, Xz, Kz, null, (0, Nz.E)(vz));
        uz.coordinatesMode = Oz.c.SKYBOX_MODE, (0, Nz.T)(zz, uz)
      },
      canvas: (zz, tz, sz) => {
        let {
          width: Fz,
          height: Wz,
          mipmaps: oz,
          samplingMode: vz,
          hasAlpha: Uz = !1,
          wrap: Kz = Oz.c.CLAMP_ADDRESSMODE
        } = sz;
        const uz = new Xz.d(tz, {
          width: Fz,
          height: Wz
        }, zz, oz, vz);
        uz.hasAlpha = Uz, uz.wrapU = Kz, uz.wrapV = Kz;
        const Nz = (0, iz.x)(uz);
        return (0, iz.A)(Nz, uz), Nz
      }
    })
  },
  40249: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Kz,
      f: () => uz,
      j: () => Nz
    });
    var Fz = sz(40238),
      Wz = sz(39231),
      Xz = sz(39472),
      Oz = sz(39566),
      oz = sz(40240),
      vz = sz(39562),
      Uz = sz(36860);
    class Kz extends Oz.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (zz, tz) => {
          this.releaseUnlessInstanced(tz)
        }, this.onLinked = null
      }
      link(zz) {
        var tz;
        (0, Uz.p)(zz), this.model = zz, null === (tz = this.onLinked) || void 0 === tz || tz.call(this, zz)
      }
      relink() {
        this.release();
        const zz = [];
        for (const Wz of Object.values(this._vertexBuffers))
          if (!Wz.getIsInstanced()) {
            const {
              byteOffset: tz,
              byteStride: sz,
              type: Fz,
              normalized: Xz
            } = Wz;
            zz.push({
              kind: Wz.getKind(),
              data: Wz.getData(),
              offset: tz,
              stride: sz,
              components: Wz.getSize(),
              glType: Fz,
              isNormalized: Xz
            })
          } const tz = this._indices.length ? this._indices : null,
          {
            minimum: sz,
            maximum: Fz
          } = this.extend;
        this.link(new Uz.g(zz, tz, this.getTotalVertices(), new Float64Array(sz.hsz()), new Float64Array(Fz.hsz())))
      }
      copy(zz) {
        if (!this.model) return super.copy(zz);
        const tz = new Kz(zz, this.aJ()),
          sz = this.Qsz(void 0, !0);
        sz && tz.setIndices(sz);
        let Oz = !1;
        for (const Xz in this._vertexBuffers) {
          const zz = this._vertexBuffers[Xz],
            sz = zz.getData();
          if (!sz) continue;
          const oz = zz.getSize(),
            {
              type: vz,
              byteOffset: Uz,
              byteStride: Kz,
              normalized: uz
            } = zz;
          Oz ||= zz.isUpdatable();
          const Nz = zz.getIsInstanced() ? (sz instanceof Array ? 4 * sz.length : sz.byteLength) / Kz : this.getTotalVertices(),
            bz = (0, Wz.s)(sz, oz, vz, Uz, Kz, Nz, !0),
            wz = {
              updatable: zz.isUpdatable(),
              stride: oz,
              type: vz,
              normalized: uz,
              takeBufferOwnership: !0,
              instanced: zz.getIsInstanced()
            };
          tz.setVerticesBuffer(new Fz.c(this.FD(), bz, Xz, wz), Nz)
        }
        return tz._updatable = Oz, tz._boundingInfo = new Xz.d(this.extend.minimum, this.extend.maximum), tz.relink(), tz
      }
      static mergeMeshes(zz, tz, sz, Fz, Wz, Xz) {
        const vz = zz[0].aJ(),
          Uz = new oz.b(zz[0].name + "_merged", vz),
          uz = new Kz(Oz.b.RandomId(), vz, void 0, !1, Uz);
        try {
          if (!oz.b.MergeMeshes(zz, tz, sz, Uz, Wz, Xz)) return Uz.dispose(), null
        } catch (Nz) {
          throw Uz.dispose(), Nz
        }
        return uz.relink(), Uz
      }
      removeVerticesData(zz) {
        this.releaseUnlessInstanced(zz), super.removeVerticesData(zz)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(zz) {
        var tz;
        zz && null !== (tz = this.getVertexBuffer(zz)) && void 0 !== tz && tz.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Uz.v)(this.model), this.model = null)
      }
    }

    function uz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new oz.b(zz, sz);
      const Wz = (0, Uz.m)(tz),
        {
          positions: Xz,
          normals: uz,
          uvs: Nz,
          indices: bz,
          named: wz = {}
        } = tz,
        Dz = new vz.b;
      Dz.positions = Xz, Dz.normals = null !== uz && void 0 !== uz ? uz : null, Dz.uvs = null !== Nz && void 0 !== Nz ? Nz : null, Dz.indices = bz;
      const gz = new Kz(Oz.b.RandomId(), sz, Dz, !1, Fz);
      for (const {
          kind: Oz,
          components: oz
        }
        of Wz.vertexAttributes) Oz in wz && Fz.setVerticesData(Oz, wz[Oz], !1, oz);
      return gz.link(Wz), Fz
    }

    function Nz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Wz = new oz.b(zz, sz),
        {
          positions: Xz,
          normals: Oz,
          uvs: Uz,
          indices: Kz
        } = tz;
      return Object.assign(new vz.b, {
        positions: Xz,
        normals: Oz,
        uvs: Uz,
        indices: Kz
      }).applyToMesh(Wz, Fz), Wz
    }
  },
  8318: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Kz,
      f: () => oz,
      j: () => vz
    });
    var Fz = sz(2140),
      Wz = sz(1223),
      Xz = sz(2145);
    const Oz = ",";

    function oz(zz) {
      if (!zz) return [];
      const tz = new Set,
        sz = [];
      for (const Fz of zz.split(Oz)) {
        const zz = Fz.trim();
        if ((0, Xz.g)(zz) && !tz.has(zz) && (tz.add(zz), sz.push(zz), sz.length >= Wz.n)) break
      }
      return sz
    }

    function vz(zz) {
      const tz = new Set,
        sz = [];
      for (const Fz of zz)
        if ((0, Xz.g)(Fz) && !tz.has(Fz) && (tz.add(Fz), sz.push(Fz), sz.length >= Wz.n)) break;
      return sz.join(Oz)
    }

    function Uz() {
      return vz(Xz.c)
    }

    function Kz(zz) {
      var tz;
      return "emote" === zz ? Uz() : null !== (tz = uz[zz][0]) && void 0 !== tz ? tz : Nz[zz]
    }
    const uz = Wz.u.reduce(((zz, tz) => {
        const sz = [];
        for (const Xz in Fz.h[tz]) {
          var Wz;
          "default" === (null === (Wz = (0, Fz.n)(tz, Xz)) || void 0 === Wz ? void 0 : Wz.cosmeticPack) && sz.push(Xz)
        }
        return zz[tz] = sz, zz
      }), {}),
      Nz = Wz.u.reduce(((zz, tz) => (zz[tz] = Object.keys(Fz.h[tz])[0], zz)), {})
  },
  38212: (zz, tz, sz) => {
    var Fz = {
      "./cape_cow_cream.png": 27680,
      "./cape_cow_normal.png": 27688,
      "./cape_creator_level1.png": 27693,
      "./cape_creator_level2.png": 27700,
      "./cape_creator_level3.png": 27707,
      "./cape_none.png": 27712,
      "./cape_pig.png": 27719,
      "./cape_sheep.png": 27726,
      "./cape_super.png": 27731,
      "./cape_super_inverted.png": 27738,
      "./cape_youtuber.png": 27741
    };

    function Wz(zz) {
      var tz = Xz(zz);
      return sz(tz)
    }

    function Xz(zz) {
      if (!sz.o(Fz, zz)) {
        var tz = new Error("Cannot find module '" + zz + "'");
        throw tz.code = "MODULE_NOT_FOUND", tz
      }
      return Fz[zz]
    }
    Wz.keys = function() {
      return Object.keys(Fz)
    }, Wz.resolve = Xz, zz.exports = Wz, Wz.id = 38212
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);