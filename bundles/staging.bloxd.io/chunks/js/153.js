export const id = 153;
export const ids = [153];
export const modules = {
  40273: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      openMobLineupPreview: () => gz,
      openMobPreview: () => cz,
      openPetPreview: () => Sz
    });
    var Ez = bz(38998),
      nz = bz(39250),
      iz = bz(40281),
      lz = bz(36709),
      Mz = bz(36514),
      tz = bz(39406),
      Hz = bz(40308),
      Oz = bz(37859),
      pz = bz(36597),
      dz = bz(36577),
      Fz = bz(36506),
      Zz = bz(37781),
      Rz = bz(37772),
      Kz = bz(37522),
      wz = bz(37566),
      Xz = bz(37542),
      fz = bz(37252),
      sz = bz(2623),
      rz = bz(37076);
    bz(40310), bz(39642), bz(40318);
    const oz = 22,
      Nz = 13,
      vz = Math.PI - Math.PI / 16,
      xz = 6,
      Jz = Math.PI / 4;
    let Az = null;
    const Tz = {},
      Lz = new Map;

    function Pz() {
      if (null !== Az) return Az;
      const zz = document.createElement("canvas");
      zz.classList.add("MobPreviewCanvas");
      const uz = new Ez.c(zz, !0, {
        preserveDrawingBuffer: !0
      });
      uz.fbz = (0, sz.g)().oR.engine.fbz;
      const bz = new nz.e(uz);
      bz.clearColor = new lz.d(0, 0, 0, 0), bz.ambientColor = new lz.Color3(1, 1, 1);
      const Hz = new iz.e("JK", Math.PI / 2, Math.PI / 2, oz, Mz.ER.Zero(), bz),
        Oz = new tz.c("light", new Mz.ER(-.1, 1, -.3), bz);
      return Oz.diffuse = new lz.Color3(1, 1, 1), Oz.specular = new lz.Color3(1, 1, 1), Oz.groundColor = new lz.Color3(.5, .5, .5), Az = {
        engine: uz,
        tK: bz,
        canvas: zz,
        camera: Hz
      }, Az
    }

    function Gz(zz) {
      return Tz[zz] ??= (0, Kz.u)(zz, Pz().tK, !0).catch((uz => {
        throw delete Tz[zz], uz
      })), Tz[zz]
    }

    function az(zz) {
      let uz = Lz.get(zz);
      return uz || (uz = fz.F[zz].loadModel(Pz().tK, !1).then((zz => (zz.Zx(!1), zz)), (uz => {
        throw Lz.delete(zz), uz
      })), Lz.set(zz, uz)), uz
    }

    function Vz(zz) {
      var uz, bz, Ez;
      let {
        mobType: nz,
        variation: iz,
        animation: lz
      } = zz, tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, oz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const xz = null !== (uz = null === tz || void 0 === tz ? void 0 : tz.size) && void 0 !== uz ? uz : 1,
        Jz = null !== (bz = null === tz || void 0 === tz ? void 0 : tz.cosmetics) && void 0 !== bz ? bz : [],
        Az = null !== (Ez = null === tz || void 0 === tz ? void 0 : tz.Fv) && void 0 !== Ez ? Ez : null;
      let Tz = !1,
        Lz = null,
        Vz = null;
      const {
        engine: mz,
        tK: qz
      } = Pz(), hz = qz.onBeforeRenderObservable.add((() => {
        var zz;
        null === (zz = Vz) || void 0 === zz || zz.render(mz.getDeltaTime())
      })), Uz = null === Az ? null : az(Az).catch((zz => (console.error(`Mob preview: could not load ${Az}`, zz), null)));
      return Promise.all([Gz(nz), Uz]).then((zz => {
        var uz, bz, Ez;
        let [tz, Gz] = zz;
        if (Tz) return;
        const az = (0, sz.g)().oR.hT,
          {
            hitBoxDimensions: mz
          } = (0, Oz.d)(nz),
          qz = Nz / Math.max(mz.height, mz.width);
        if (Lz = (0, Kz.i)(nz, qz * xz, !0, !0), az.setPosition(Lz, oz, -mz.height * qz / 2, 0), az.setRotationEulerY(Lz, vz), tz.meshApi instanceof Xz.e && Jz.length > 0)
          for (const [nz, iz] of Jz) tz.meshApi.updatePlayerCosmetic(null, Lz, nz, iz, !0);
        else tz.meshApi.updateVariation(Lz, nz, null !== iz && void 0 !== iz ? iz : "default");
        null !== Az && null !== Gz && function(zz, uz, bz, Ez) {
          var nz;
          const iz = fz.F[zz],
            lz = (0, Zz.k)();
          (0, Zz.f)(iz, null === (nz = (0, wz.c)(bz).meshMetadata.heldItemPositionParams) || void 0 === nz ? void 0 : nz.itemOffset, lz);
          const tz = rz.c * lz.ti.y,
            Oz = lz.usesQuaternion ? lz.quaternion : Mz.Quaternion.FromEulerVector(lz.rotation),
            pz = new Hz.e(`${uz.name}Hand`, Pz().tK);
          pz.position.euz((0, Rz.c)(lz.position, Oz, tz, iz.heldModelOffsetY())), pz.rotationQuaternion = Oz, pz.ti.set(lz.ti.x, tz, lz.ti.z), uz.clone(`${uz.name}Held`, pz).Zx(!0);
          const dz = (0, sz.g)().oR.hT;
          dz.attachTransformNode(pz, Ez, dz.getNamedNode(Ez, "ArmRightMesh"))
        }(Az, Gz, nz, Lz), az.set(Lz, "aOpacity", 1);
        const hz = null !== (uz = (0, wz.c)(nz).meshMetadata.lifeformTypeForModelOverride) && void 0 !== uz ? uz : nz;
        Vz = new Fz.AnimatorState, Vz.thinInstMgr = az, Vz.eT = Lz, Vz.Quz = az.sbz(Lz, 0), Vz.modelLifeformType = hz, Vz.nodeNameAliases = null !== (bz = null === (Ez = (0, pz.c)(hz)) || void 0 === Ez ? void 0 : Ez.nodeNameAliases) && void 0 !== bz ? bz : null, Vz.startAnimation(lz, dz.g.Movement)
      })).catch((zz => {
        console.error(`Mob preview: could not load ${nz}`, zz)
      })), () => {
        Tz = !0, qz.onBeforeRenderObservable.remove(hz), null !== Lz && (0, sz.g)().oR.hT.delete(Lz)
      }
    }

    function mz(zz, uz) {
      return Vz({
        mobType: "NPC",
        variation: null,
        animation: zz.animation
      }, zz, uz)
    }

    function qz(zz) {
      let {
        mobType: uz,
        variation: bz,
        metaInfo: Ez,
        tamed: nz
      } = zz, iz = !1, lz = null, Mz = 0;
      const tz = (0, sz.g)(),
        Hz = tz.oR.hT,
        Oz = zz => {
          Mz += Jz * (zz / 1e3) % (2 * Math.PI), Hz.setRotationEulerY(lz, Mz)
        };
      return Gz(uz).then((zz => {
        if (iz) return;
        lz = (0, Kz.i)(uz, xz, !0, !0), Hz.setPosition(lz, 0, -xz, 0), zz.meshApi.updateVariation(lz, uz, bz);
        const Mz = {
          wool: "Sheared" !== Ez,
          saddle: "Saddled" === Ez,
          antlers: "Antlers" === Ez,
          collar: nz
        };
        for (const [uz, bz] of Object.entries(Mz)) Hz.hasGroup(lz, uz) && zz.meshApi.setMeshGroupVisibility(lz, uz, bz);
        Hz.set(lz, "aOpacity", 1), tz.on("renderTickBegin", Oz)
      })).catch((zz => {
        console.error(`Pet preview: could not load ${uz}`, zz)
      })), () => {
        iz = !0, tz.off("renderTickBegin", Oz), null !== lz && Hz.delete(lz)
      }
    }
    class hz {
      constructor(zz, uz) {
        this.place = uz, this.remove = null;
        const {
          engine: bz,
          tK: Ez,
          canvas: nz
        } = Pz();
        zz.appendChild(nz), bz.resize(), bz.runRenderLoop((() => {
          Ez.render()
        }))
      }
      show(zz) {
        var uz;
        null === (uz = this.remove) || void 0 === uz || uz.call(this), this.remove = this.place(zz)
      }
      resize(zz, uz) {
        const {
          engine: bz,
          canvas: Ez
        } = Pz();
        Ez.width = zz, Ez.height = uz, bz.resize()
      }
      close() {
        var zz;
        Pz().engine.stopRenderLoop(), null === (zz = this.remove) || void 0 === zz || zz.call(this), this.remove = null
      }
    }
    class Uz {
      constructor(zz) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new hz(zz, (() => () => {}))
      }
      show(zz) {
        zz.figures !== this.view.figures && this.preload(zz.figures), this.view = zz, this.place()
      }
      resize(zz, uz) {
        this.preview.resize(zz, uz), this.aspect = zz / uz, this.place()
      }
      close() {
        this.preview.close();
        for (const zz of this.placed) null === zz || void 0 === zz || zz.remove();
        this.placed = []
      }
      preload(zz) {
        const uz = () => {};
        Gz("NPC").catch(uz);
        for (const {
            Fv: bz
          }
          of zz) null !== bz && az(bz).catch(uz)
      }
      place() {
        const {
          figures: zz,
          shown: uz
        } = this.view, bz = zz.map(((bz, Ez) => {
          var nz;
          const iz = null !== (nz = this.placed[Ez]) && void 0 !== nz ? nz : null;
          if (!uz[Ez]) return null === iz || void 0 === iz || iz.remove(), null;
          const lz = (Mz = (Ez + .5) / zz.length, tz = this.aspect, (.5 - Mz) * (2 * oz * Math.tan(Pz().camera.fov / 2)) * tz);
          var Mz, tz;
          return null !== iz && iz.figure === bz && iz.x === lz ? iz : (null === iz || void 0 === iz || iz.remove(), {
            figure: bz,
            x: lz,
            remove: mz(bz, lz)
          })
        }));
        for (const Ez of this.placed.slice(zz.length)) null === Ez || void 0 === Ez || Ez.remove();
        this.placed = bz
      }
    }

    function cz(zz) {
      return new hz(zz, Vz)
    }

    function gz(zz) {
      return new Uz(zz)
    }

    function Sz(zz) {
      return new hz(zz, qz)
    }
  },
  38162: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => dz
    });
    var Ez = bz(36611),
      nz = bz(36627),
      iz = bz(36894),
      lz = bz(36633),
      Mz = bz(36619);

    function tz(zz) {
      return `\n\t\t\t\t${(0,Mz.t)(zz,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, Mz.y)(zz, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, Mz.y)(zz, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, Mz.l)(zz, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function Hz(zz, uz) {
      let bz = (0, Mz.vb)(zz, "skele" + (uz - 1));
      for (let nz = uz - 2; nz >= 0; nz--) bz = (0, Mz.mb)(zz, `boneIdx == ${nz}`, (0, Mz.vb)(zz, `skele${nz}`), bz);
      const Ez = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,Mz.y)(zz,"int","boneIdx",(0,Mz.pb)(zz,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,Mz.y)(zz,"vec3","bone",bz)}\n\t\t\t\t${(0,Mz.y)(zz,"vec2","pivot",(0,Mz.l)(zz,"vec2","0.0",`${(0,Mz.Fb)(zz,"position")}.z`))}\n\t\t\t\t${(0,Mz.R)(zz)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${Ez}));`:`positionUpdated.yz += ${Ez};`}\n\t\t`
    }

    function Oz(zz) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,Mz.l)(zz,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const pz = {
        x: 0,
        y: 0,
        z: 0,
        Fuz(zz, uz) {
          return this.x = zz[uz], this.y = zz[uz + 1], this.z = zz[uz + 2], this
        }
      },
      dz = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (zz, uz) => ({
          ...(0, Ez.b)("CAPE"),
          BLOXD_CAPE_BONES: `${zz}`,
          BLOXD_CAPE_MAX_Y: (0, nz.pb)(uz)
        }),
        getUniforms(zz) {
          return (0, iz.c)(function(zz) {
            const uz = [];
            for (let bz = 0; bz < zz; bz++) uz.push({
              name: `skele${bz}`,
              type: "highp vec3"
            });
            return uz
          }(this.skeleLen), "vertex", zz)
        },
        bind(zz) {
          for (let uz = 0; uz < this.skeleLen; uz++) zz.updateVector3(`skele${uz}`, pz.Fuz(this.skele, 3 * uz))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(zz, uz) {
          return "vertex" !== zz ? null : {
            CUSTOM_VERTEX_DEFINITIONS: tz(uz),
            CUSTOM_VERTEX_UPDATE_POSITION: Hz(uz, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: Oz(uz)
          }
        }
      };
    (0, lz.q)(dz)
  },
  38075: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Oz,
      e: () => pz
    });
    var Ez = bz(36611),
      nz = bz(36894),
      iz = bz(36619),
      lz = bz(36633);
    const Mz = "bloxdTextLodBias",
      tz = [{
        name: Mz,
        type: "float"
      }],
      Hz = "bloxdTextSample",
      Oz = {
        planes: -.5,
        boards: -.5
      },
      pz = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, Ez.b)("TEXT_SAMPLER"),
        getUniforms: zz => (0, nz.c)(tz, "fragment", zz),
        bind(zz) {
          zz.updateFloat(Mz, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(zz, uz) {
          if ("fragment" !== zz) return null;
          const bz = (0, iz.G)(uz, `vec4 ${Hz}(sampler2D s, vec2 uv, float bias)`, `fn ${Hz}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            Ez = (0, iz.G)(uz, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            nz = `${(0,iz.M)(uz,"vDiffuseUV")} + uvOffset`,
            lz = (0, iz.G)(uz, `${Hz}(diffuseSampler, ${nz}, ${(0,iz.vb)(uz,Mz)})`, `${Hz}(diffuseSampler, diffuseSamplerSampler, ${nz}, ${(0,iz.vb)(uz,Mz)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${bz} {\n\t\t\t\t\t${(0,iz.y)(uz,"vec4","texel",Ez)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,iz.l)(uz,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,iz.l)(uz,"vec3","0.0")}, ${(0,iz.l)(uz,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, iz.B)(uz)]: `baseColor = ${lz};`
          }
        }
      };
    (0, lz.q)(pz)
  },
  40318: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      CapeMaterialPlugin: () => sz,
      HueTintMaterialPlugin: () => rz,
      LifeformMaterialPlugin: () => oz,
      OverlayMaterialPlugin: () => Nz
    });
    var Ez = bz(40326),
      nz = bz(37435);
    class iz extends((0, Ez.f)(nz.c)) {}(0, Ez.i)(nz.c, iz);
    var lz = bz(36604);
    class Mz extends((0, Ez.f)(lz.e)) {}(0, Ez.i)(lz.e, Mz);
    var tz = bz(37295);
    class Hz extends((0, Ez.f)(tz.e)) {}(0, Ez.i)(tz.e, Hz);
    var Oz = bz(36878),
      pz = bz(39425),
      dz = bz(36870);
    class Fz extends((0, Ez.f)(dz.e)) {
      constructor(zz, uz, bz) {
        super(zz, uz, bz), (0, Oz.k)(zz)
      }
      dispose(zz) {
        (0, Oz.n)(this._material), super.dispose(zz)
      }
    }(0, Ez.i)(dz.e, Fz), (0, dz.i)({
      disableUnusedSpecularTerm: Ez.d,
      isLightingDisabled: zz => zz instanceof pz.StandardMaterial && zz.disableLighting
    });
    var Zz = bz(38075);
    class Rz extends((0, Ez.f)(Zz.e)) {}(0, Ez.i)(Zz.e, Rz);
    var Kz = bz(38162),
      wz = bz(36724),
      Xz = bz(37548),
      fz = bz(36661);
    class sz extends((0, Ez.f)(Kz.c)) {}(0, Ez.i)(Kz.c, sz);
    class rz extends((0, Ez.f)(wz.d)) {}(0, Ez.i)(wz.d, rz);
    class oz extends((0, Ez.f)(Xz.p)) {}(0, Ez.i)(Xz.p, oz);
    class Nz extends((0, Ez.f)(fz.e)) {}(0, Ez.i)(fz.e, Nz)
  },
  40326: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => gz,
      f: () => Xz,
      i: () => ez
    });
    var Ez = bz(39425),
      nz = bz(40334),
      iz = bz(40379),
      lz = bz(40341),
      Mz = bz(37276),
      tz = bz(37282),
      Hz = bz(37287),
      Oz = bz(37290),
      pz = bz(36648),
      dz = bz(36654),
      Fz = bz(40350),
      Zz = bz(36633),
      Rz = bz(36636),
      Kz = bz(36619);

    function wz(zz, uz) {
      return Object.assign((function(zz, bz, Ez, nz) {
        return uz(this.featureState, zz, bz, Ez, nz)
      }), {
        TZ: zz
      })
    }

    function Xz(zz) {
      const uz = class extends Fz.d {
          constructor(uz, bz) {
            const Ez = (0, Rz.W)(uz),
              nz = Ez && (0, Rz.u)(Ez, zz.name);
            for (var iz = arguments.length, lz = new Array(iz > 2 ? iz - 2 : 0), Mz = 2; Mz < iz; Mz++) lz[Mz - 2] = arguments[Mz];
            super(uz, zz.name, zz.priority, nz ? nz.defines : zz.defines(...lz), !1), this.featureState = void 0, this.featureState = bz, this._pluginManager._addPlugin(this), this._enable(!0), (0, Rz.v)(this._material, zz, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return zz.className
          }
          isCompatible(zz) {
            return zz === Kz.c.GLSL || zz === Kz.c.WGSL
          }
        },
        bz = (0, Zz.j)(zz);
      for (const [Ez, nz] of Object.entries(Zz.e)) {
        const iz = zz[Ez];
        if (iz) {
          const zz = bz[Ez];
          Object.defineProperty(uz.prototype, nz, {
            value: wz(iz, zz),
            writable: !0,
            configurable: !0
          })
        }
      }
      return uz
    }
    class fz extends(Xz(Mz.d)) {}
    var sz = bz(38998),
      rz = bz(40354);
    const oz = new WeakMap;

    function Nz(zz, uz, bz) {
      let Ez = oz.get(bz);
      Ez || (Ez = new Map, oz.set(bz, Ez));
      const {
        url: nz
      } = zz;
      let iz = Ez.get(nz);
      return iz || (iz = async function(zz, uz, bz) {
        const {
          width: Ez,
          height: nz
        } = zz.getSize(), iz = Math.round(nz / Ez), Mz = uz && uz.byteLength === Ez * Ez * iz * 4 ? uz : zz._readPixelsSync();
        return new rz.c(Mz, Ez, Ez, iz, sz.c.TEXTUREFORMAT_RGBA, bz, !0, !1, lz.e.NEAREST_NEAREST_MIPLINEAR)
      }(zz, uz, bz), Ez.set(nz, iz), iz.catch((() => {
        Ez.delete(nz)
      }))), iz
    }
    var vz = bz(37292);
    class xz extends(Xz(tz.j)) {
      constructor(zz, uz) {
        super(zz, uz), uz.textures.forEach(((zz, uz) => {
          zz.mirror.onLoadObservable.add((zz => {
            this.setTextureArrayData(zz, uz).catch((zz => {
              console.error(`Failed to build texture array for atlas ${uz}`, zz)
            }))
          }))
        })), (0, vz.i)(uz, zz.shaderLanguage)
      }
      async setTextureArrayData(zz, uz) {
        var bz, Ez;
        const nz = this.featureState,
          {
            width: iz,
            height: lz
          } = zz.getSize(),
          Mz = nz.useWebGL2 ? await Nz(zz, null !== (bz = null === (Ez = nz.sources.pixels) || void 0 === Ez ? void 0 : Ez[uz]) && void 0 !== bz ? bz : null, this._material.XT()) : null;
        (0, vz.b)(this._material, nz, uz, Mz, iz, Math.round(lz / iz), this._material.shaderLanguage)
      }
    }
    var Jz = bz(40360),
      Az = bz(39474),
      Tz = bz(36514),
      Lz = bz(40369),
      Pz = bz(39596),
      Gz = bz(39459),
      az = bz(40308),
      Vz = bz(37046),
      mz = bz(40373);
    class qz extends Jz.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const hz = {
      Mesh: Lz.d,
      TransformNode: az.e,
      gZ: Jz.c,
      VertexBuffer: Jz.d,
      BoundingInfo: Az.e,
      ER: Tz.ER,
      ArenaBuffer: qz,
      SubMesh: Gz.e,
      VertexData: Pz.b,
      MirroredGeometry: mz.d,
      meshFromArrays: mz.e,
      plainMeshFromArrays: mz.i
    };
    (0, Vz.f)(hz);
    var Uz = bz(36878);
    class cz extends(Xz(Oz.i)) {
      constructor(zz, uz) {
        if (super(zz, uz), zz instanceof Ez.StandardMaterial && uz.dirLightCount > 0) {
          const uz = zz,
            bz = uz._blockDirtyMechanism;
          uz._blockDirtyMechanism = !0, zz.disableLighting = !0, uz._blockDirtyMechanism = bz;
          const Ez = (0, Rz.W)(zz);
          Ez && (Ez.disableLighting = !0, (0, Rz.U)(Ez))
        }(0, Uz.k)(zz)
      }
      dispose(zz) {
        (0, Uz.n)(this._material), super.dispose(zz)
      }
    }

    function gz(zz, uz) {
      if (!(uz instanceof Ez.StandardMaterial) || uz.specularTexture) return;
      const {
        r: bz,
        g: nz,
        b: iz
      } = uz.specularColor;
      0 === bz && 0 === nz && 0 === iz && (zz.SPECULARTERM = !1)
    }(0, Oz.g)({
      disableUnusedSpecularTerm: gz
    });
    var Sz = bz(36743),
      yz = bz(37058);
    const Dz = new RegExp(`^#define ${Hz.c}\\s*$`, "m");
    class Qz extends(Xz(Hz.i)) {
      constructor(zz, uz) {
        super(zz, uz), this.SZ = !1, uz.ditherOnlyWhileFading && (yz.f.add(zz), this.prewarmDitherTwins(zz))
      }
      prewarmDitherTwins(zz) {
        const uz = new WeakSet;
        zz.onEffectCreatedObservable.add((bz => {
          let {
            effect: Ez,
            subMesh: nz
          } = bz;
          if (this.featureState.prewarmingDither || uz.has(Ez)) return;
          uz.add(Ez);
          const iz = null === nz || void 0 === nz ? void 0 : nz.getMesh();
          iz && !Dz.test(Ez.defines) && zz.XT().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(iz) || uz.delete(Ez)
          }))
        }))
      }
      prewarmDither(zz) {
        if (this.SZ || zz.Uuz()) return !1;
        const uz = new Gz.e(0, 0, 0, 0, 0, zz, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(zz, uz)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== uz.effect
      }
      dispose(zz) {
        this.SZ = !0, super.dispose(zz)
      }
    }
    const Wz = new Map;

    function ez(zz, uz) {
      Wz.set(zz, uz)
    }
    ez(Mz.d, fz), ez(tz.j, xz), ez(Hz.i, Qz), ez(Oz.i, cz), (0, pz.c)({
      create: (zz, uz) => {
        const bz = new Ez.StandardMaterial(zz.name, uz);
        return (0, Sz.r)(zz, bz), bz.detailMap._pluginDefineNames
      },
      write: (zz, uz, bz) => {
        (0, Sz.X)(zz.mirror, uz, bz)
      },
      addFeature: (zz, uz, bz) => {
        const Ez = Wz.get(uz.feature);
        if (!Ez) throw new Error(`${uz.feature.name} has no plugin class (registerPluginClass)`);
        new Ez(zz.mirror, uz.state, ...bz)
      },
      texture: (zz, uz, bz) => {
        let {
          url: Ez,
          noMipmap: nz,
          invertY: iz,
          samplingMode: Mz,
          data: tz,
          sets: Hz
        } = bz;
        if (!tz) {
          const bz = new lz.e(Ez, uz, nz, iz, Mz);
          return Object.assign(bz, Hz), void(0, dz.H)(zz, bz)
        }
        const Oz = {},
          pz = new Promise(((zz, uz) => {
            Oz.onLoad = zz, Oz.onError = (zz, bz) => {
              uz(new Error(`${tz.context}: ${(null===bz||void 0===bz?void 0:bz.message)||zz||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: Fz,
            bytes: Zz,
            label: Rz
          } = tz,
          Kz = {
            noMipmap: nz,
            invertY: !1,
            samplingMode: Mz,
            ...Oz,
            mimeType: Fz,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          wz = new lz.e(null, uz, Kz);
        Sz.s.set(wz, pz), Object.assign(wz, Hz), wz.updateURL(Ez, Zz);
        const Xz = wz.getInternalTexture();
        Xz && (Xz.label = Rz), zz.uvSet = wz.coordinatesIndex, zz.matrix.set((0, Sz.N)(wz)), (0, dz.H)(zz, wz)
      },
      cube: (zz, uz, bz) => {
        let {
          rootUrl: Ez,
          files: iz,
          noMipmap: Mz,
          luminance: tz
        } = bz;
        const {
          samplingMode: Hz
        } = zz.sampler, Oz = Hz === (0, dz.w)(Mz) ? null : () => {
          (0, Sz.M)(pz, Hz)
        }, pz = new nz.e(Ez, uz, null, Mz, iz, Oz, null, (0, dz.t)(tz));
        pz.coordinatesMode = lz.e.SKYBOX_MODE, (0, dz.H)(zz, pz)
      },
      canvas: (zz, uz, bz) => {
        let {
          width: Ez,
          height: nz,
          mipmaps: Mz,
          samplingMode: tz,
          hasAlpha: Hz = !1,
          wrap: Oz = lz.e.CLAMP_ADDRESSMODE
        } = bz;
        const pz = new iz.b(uz, {
          width: Ez,
          height: nz
        }, zz, Mz, tz);
        pz.hasAlpha = Hz, pz.wrapU = Oz, pz.wrapV = Oz;
        const dz = (0, Sz.z)(pz);
        return (0, Sz.D)(dz, pz), dz
      }
    })
  },
  40373: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Oz,
      e: () => pz,
      i: () => dz
    });
    var Ez = bz(40360),
      nz = bz(39226),
      iz = bz(39474),
      lz = bz(39605),
      Mz = bz(40369),
      tz = bz(39596),
      Hz = bz(36930);
    class Oz extends lz.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (zz, uz) => {
          this.releaseUnlessInstanced(uz)
        }, this.onLinked = null
      }
      link(zz) {
        var uz;
        (0, Hz.n)(zz), this.model = zz, null === (uz = this.onLinked) || void 0 === uz || uz.call(this, zz)
      }
      relink() {
        this.release();
        const zz = [];
        for (const nz of Object.values(this._vertexBuffers))
          if (!nz.getIsInstanced()) {
            const {
              byteOffset: uz,
              byteStride: bz,
              type: Ez,
              normalized: iz
            } = nz;
            zz.push({
              kind: nz.getKind(),
              data: nz.getData(),
              offset: uz,
              stride: bz,
              components: nz.getSize(),
              glType: Ez,
              isNormalized: iz
            })
          } const uz = this._indices.length ? this._indices : null,
          {
            minimum: bz,
            maximum: Ez
          } = this.extend;
        this.link(new Hz.d(zz, uz, this.getTotalVertices(), new Float64Array(bz.obz()), new Float64Array(Ez.obz())))
      }
      copy(zz) {
        if (!this.model) return super.copy(zz);
        const uz = new Oz(zz, this.XT()),
          bz = this.Nbz(void 0, !0);
        bz && uz.setIndices(bz);
        let lz = !1;
        for (const iz in this._vertexBuffers) {
          const zz = this._vertexBuffers[iz],
            bz = zz.getData();
          if (!bz) continue;
          const Mz = zz.getSize(),
            {
              type: tz,
              byteOffset: Hz,
              byteStride: Oz,
              normalized: pz
            } = zz;
          lz ||= zz.isUpdatable();
          const dz = zz.getIsInstanced() ? (bz instanceof Array ? 4 * bz.length : bz.byteLength) / Oz : this.getTotalVertices(),
            Fz = (0, nz.u)(bz, Mz, tz, Hz, Oz, dz, !0),
            Zz = {
              updatable: zz.isUpdatable(),
              stride: Mz,
              type: tz,
              normalized: pz,
              takeBufferOwnership: !0,
              instanced: zz.getIsInstanced()
            };
          uz.setVerticesBuffer(new Ez.d(this.uR(), Fz, iz, Zz), dz)
        }
        return uz._updatable = lz, uz._boundingInfo = new iz.e(this.extend.minimum, this.extend.maximum), uz.relink(), uz
      }
      static mergeMeshes(zz, uz, bz, Ez, nz, iz) {
        const tz = zz[0].XT(),
          Hz = new Mz.d(zz[0].name + "_merged", tz),
          pz = new Oz(lz.b.RandomId(), tz, void 0, !1, Hz);
        try {
          if (!Mz.d.MergeMeshes(zz, uz, bz, Hz, nz, iz)) return Hz.dispose(), null
        } catch (dz) {
          throw Hz.dispose(), dz
        }
        return pz.relink(), Hz
      }
      removeVerticesData(zz) {
        this.releaseUnlessInstanced(zz), super.removeVerticesData(zz)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(zz) {
        var uz;
        zz && null !== (uz = this.getVertexBuffer(zz)) && void 0 !== uz && uz.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Hz.s)(this.model), this.model = null)
      }
    }

    function pz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Mz.d(zz, bz);
      const nz = (0, Hz.j)(uz),
        {
          positions: iz,
          normals: pz,
          uvs: dz,
          indices: Fz,
          named: Zz = {}
        } = uz,
        Rz = new tz.b;
      Rz.positions = iz, Rz.normals = null !== pz && void 0 !== pz ? pz : null, Rz.uvs = null !== dz && void 0 !== dz ? dz : null, Rz.indices = Fz;
      const Kz = new Oz(lz.b.RandomId(), bz, Rz, !1, Ez);
      for (const {
          kind: lz,
          components: Mz
        }
        of nz.vertexAttributes) lz in Zz && Ez.setVerticesData(lz, Zz[lz], !1, Mz);
      return Kz.link(nz), Ez
    }

    function dz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const nz = new Mz.d(zz, bz),
        {
          positions: iz,
          normals: lz,
          uvs: Hz,
          indices: Oz
        } = uz;
      return Object.assign(new tz.b, {
        positions: iz,
        normals: lz,
        uvs: Hz,
        indices: Oz
      }).applyToMesh(nz, Ez), nz
    }
  },
  8494: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Oz,
      e: () => Mz,
      g: () => tz
    });
    var Ez = bz(2132),
      nz = bz(1226),
      iz = bz(2136);
    const lz = ",";

    function Mz(zz) {
      if (!zz) return [];
      const uz = new Set,
        bz = [];
      for (const Ez of zz.split(lz)) {
        const zz = Ez.trim();
        if ((0, iz.l)(zz) && !uz.has(zz) && (uz.add(zz), bz.push(zz), bz.length >= nz.o)) break
      }
      return bz
    }

    function tz(zz) {
      const uz = new Set,
        bz = [];
      for (const Ez of zz)
        if ((0, iz.l)(Ez) && !uz.has(Ez) && (uz.add(Ez), bz.push(Ez), bz.length >= nz.o)) break;
      return bz.join(lz)
    }

    function Hz() {
      return tz(iz.g)
    }

    function Oz(zz) {
      var uz;
      return "emote" === zz ? Hz() : null !== (uz = pz[zz][0]) && void 0 !== uz ? uz : dz[zz]
    }
    const pz = nz.u.reduce(((zz, uz) => {
        const bz = [];
        for (const iz in Ez.h[uz]) {
          var nz;
          "default" === (null === (nz = (0, Ez.m)(uz, iz)) || void 0 === nz ? void 0 : nz.cosmeticPack) && bz.push(iz)
        }
        return zz[uz] = bz, zz
      }), {}),
      dz = nz.u.reduce(((zz, uz) => (zz[uz] = Object.keys(Ez.h[uz])[0], zz)), {})
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);