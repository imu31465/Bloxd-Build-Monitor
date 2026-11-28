export const id = 122;
export const ids = [122];
export const modules = {
  43068: (dd, Od, md) => {
    md.d(Od, {
      e: () => Nd,
      i: () => vd,
      m: () => td,
      n: () => Qd,
      r: () => od
    });
    var Wd = md(1286),
      Fd = md(3143),
      Rd = md(38698),
      Xd = md(39080);
    class Kd {
      constructor(dd, Od) {
        this.pose = dd, this.nodes = void 0, this.nodes = dd.boneNames.map((dd => Od.get(dd)))
      }
      write(dd) {
        this.pose.pose(dd), (0, Xd.p)(this.pose, this.nodes)
      }
    }

    function hd(dd) {
      dd.unfreezeWorldMatrix();
      for (const Od of dd.getChildren()) hd(Od)
    }
    async function vd(dd, Od, md, Wd) {
      let {
        keepTransforms: Fd,
        backFaceCulling: Xd
      } = Wd;
      const Kd = await (0, Rd.o)(Od, dd),
        vd = (0, Rd.i)(null !== md && void 0 !== md ? md : Od, dd, void 0, Xd);
      (0, Rd.p)(Kd, vd, {
        keepTransforms: Fd,
        backFaceCulling: Xd,
        onProcessedMesh: Od => {
          dd.hRd(Od, !1), Od.isVisible = !1
        }
      });
      for (const Rd of Kd.rootNodes) hd(Rd);
      return Kd
    }

    function Qd(dd, Od) {
      dd.isVisible = Od;
      for (const md of dd.getChildMeshes()) md.isVisible = Od
    }

    function td(dd) {
      const Od = new Map;
      for (const md of dd.getNodes()) Od.set(md.name, md);
      return Od
    }

    function od(dd, Od, md, Wd) {
      Qd(dd, !0), (0, Rd.v)(dd, Od.overlayColour), md.attachTransformNode(dd, Wd, md.getNamedNode(Wd, Od.destNode))
    }
    class Nd {
      constructor(dd, Od, md) {
        this.MH = dd, this.thinInstMgr = Od, this.JA = md, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(dd, Od, md) {
        const Wd = (0, Rd.l)(dd, Od);
        return Wd in this.modelCache || (this.modelCache[Wd] = (async () => {
          try {
            const Wd = td(await vd(this.MH, dd, Od, {
                keepTransforms: void 0 !== md,
                backFaceCulling: !1
              })),
              Fd = void 0 === md ? null : (0, Xd.k)(md, (dd => {
                const Od = Wd.get(dd);
                return Od ? (0, Xd.j)(Od) : null
              }));
            return {
              nodesByName: Wd,
              bones: null === Fd ? null : new Kd(Fd, Wd)
            }
          } catch (Fd) {
            throw delete this.modelCache[Wd], console.error(`Failed to load preview attachment ${Wd}:`, Fd), Fd
          }
        })()), this.modelCache[Wd]
      }
      async update(dd, Od) {
        var md;
        const {
          thinInstMgr: Rd,
          JA: Xd
        } = this;
        this.cosmeticNames[dd] = Od;
        const Kd = this.attachmentsByType[dd];
        if (Kd)
          for (const {
              mesh: Fd,
              destNode: vd,
              bones: td
            }
            of Kd) {
            null !== td && (0, Wd.ib)(this.shownBones, td), Qd(Fd, !1);
            const dd = Rd.getNamedNode(Xd, vd);
            Rd.detachTransformNodeIfFound(Fd, Xd, dd)
          }
        this.attachmentsByType[dd] = [];
        const hd = (0, Fd.i)(dd, Od);
        if (null !== hd && void 0 !== hd && null !== (md = hd.attachments) && void 0 !== md && md.length)
          for (const Wd of hd.attachments) {
            let md;
            try {
              md = await this.loadModel(Wd.modelGlb, Wd.texture, Wd.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[dd] !== Od) return;
            const Fd = md.nodesByName.get(Wd.modelNode);
            Fd ? (od(Fd, Wd, Rd, Xd), this.attachmentsByType[dd].push({
              mesh: Fd,
              destNode: Wd.destNode,
              bones: md.bones
            }), null !== md.bones && this.shownBones.push(md.bones)) : console.error(`Preview attachment node ${Wd.modelNode} not found in ${Wd.modelGlb}`)
          }
      }
      writePoses(dd) {
        for (const Od of this.shownBones) Od.write(dd)
      }
    }
  },
  40373: (dd, Od, md) => {
    md.d(Od, {
      d: () => od
    });
    var Wd = md(38750),
      Fd = md(38856),
      Rd = md(38845),
      Xd = md(38758),
      Kd = md(38752);

    function hd(dd) {
      return `\n\t\t\t\t${(0,Kd.t)(dd,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, Kd.z)(dd, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, Kd.z)(dd, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, Kd.l)(dd, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function vd(dd, Od) {
      let md = (0, Kd.ob)(dd, "skele" + (Od - 1));
      for (let Fd = Od - 2; Fd >= 0; Fd--) md = (0, Kd.fb)(dd, `boneIdx == ${Fd}`, (0, Kd.ob)(dd, `skele${Fd}`), md);
      const Wd = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,Kd.z)(dd,"int","boneIdx",(0,Kd.mb)(dd,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,Kd.z)(dd,"vec3","bone",md)}\n\t\t\t\t${(0,Kd.z)(dd,"vec2","pivot",(0,Kd.l)(dd,"vec2","0.0",`${(0,Kd.wb)(dd,"position")}.z`))}\n\t\t\t\t${(0,Kd.S)(dd)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${Wd}));`:`positionUpdated.yz += ${Wd};`}\n\t\t`
    }

    function Qd(dd) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,Kd.l)(dd,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const td = {
        x: 0,
        y: 0,
        z: 0,
        ZQ(dd, Od) {
          return this.x = dd[Od], this.y = dd[Od + 1], this.z = dd[Od + 2], this
        }
      },
      od = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (dd, Od) => ({
          ...(0, Wd.b)("CAPE"),
          BLOXD_CAPE_BONES: `${dd}`,
          BLOXD_CAPE_MAX_Y: (0, Fd.cb)(Od)
        }),
        getUniforms(dd) {
          return (0, Rd.e)(function(dd) {
            const Od = [];
            for (let md = 0; md < dd; md++) Od.push({
              name: `skele${md}`,
              type: "highp vec3"
            });
            return Od
          }(this.skeleLen), "vertex", dd)
        },
        bind(dd) {
          for (let Od = 0; Od < this.skeleLen; Od++) dd.updateVector3(`skele${Od}`, td.ZQ(this.skele, 3 * Od))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(dd, Od) {
          return "vertex" !== dd ? null : {
            CUSTOM_VERTEX_DEFINITIONS: hd(Od),
            CUSTOM_VERTEX_UPDATE_POSITION: vd(Od, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: Qd(Od)
          }
        }
      };
    (0, Xd.m)(od)
  },
  40272: (dd, Od, md) => {
    md.d(Od, {
      b: () => Qd,
      f: () => td
    });
    var Wd = md(38750),
      Fd = md(38845),
      Rd = md(38752),
      Xd = md(38758);
    const Kd = "bloxdTextLodBias",
      hd = [{
        name: Kd,
        type: "float"
      }],
      vd = "bloxdTextSample",
      Qd = {
        planes: -.5,
        boards: -.5
      },
      td = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, Wd.b)("TEXT_SAMPLER"),
        getUniforms: dd => (0, Fd.e)(hd, "fragment", dd),
        bind(dd) {
          dd.updateFloat(Kd, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(dd, Od) {
          if ("fragment" !== dd) return null;
          const md = (0, Rd.F)(Od, `vec4 ${vd}(sampler2D s, vec2 uv, float bias)`, `fn ${vd}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            Wd = (0, Rd.F)(Od, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            Fd = `${(0,Rd.O)(Od,"vDiffuseUV")} + uvOffset`,
            Xd = (0, Rd.F)(Od, `${vd}(diffuseSampler, ${Fd}, ${(0,Rd.ob)(Od,Kd)})`, `${vd}(diffuseSampler, diffuseSamplerSampler, ${Fd}, ${(0,Rd.ob)(Od,Kd)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${md} {\n\t\t\t\t\t${(0,Rd.z)(Od,"vec4","texel",Wd)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,Rd.l)(Od,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,Rd.l)(Od,"vec3","0.0")}, ${(0,Rd.l)(Od,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, Rd.A)(Od)]: `baseColor = ${Xd};`
          }
        }
      };
    (0, Xd.m)(td)
  },
  43085: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      CapeMaterialPlugin: () => Yd,
      HueTintMaterialPlugin: () => gd,
      LifeformMaterialPlugin: () => wd,
      OverlayMaterialPlugin: () => Ed
    });
    var Wd = md(43088),
      Fd = md(39567);
    class Rd extends((0, Wd.h)(Fd.c)) {}(0, Wd.l)(Fd.c, Rd);
    var Xd = md(38852);
    class Kd extends((0, Wd.h)(Xd.e)) {}(0, Wd.l)(Xd.e, Kd);
    var hd = md(39395);
    class vd extends((0, Wd.h)(hd.d)) {}(0, Wd.l)(hd.d, vd);
    var Qd = md(38877),
      td = md(42179),
      od = md(38869);
    class Nd extends((0, Wd.h)(od.h)) {
      constructor(dd, Od, md) {
        super(dd, Od, md), (0, Qd.i)(dd)
      }
      dispose(dd) {
        (0, Qd.j)(this._material), super.dispose(dd)
      }
    }(0, Wd.l)(od.h, Nd), (0, od.j)({
      disableUnusedSpecularTerm: Wd.e,
      isLightingDisabled: dd => dd instanceof td.StandardMaterial && dd.disableLighting
    });
    var qd = md(40272);
    class Hd extends((0, Wd.h)(qd.f)) {}(0, Wd.l)(qd.f, Hd);
    var yd = md(40373),
      bd = md(38746),
      Td = md(39676),
      pd = md(38860);
    class Yd extends((0, Wd.h)(yd.d)) {}(0, Wd.l)(yd.d, Yd);
    class gd extends((0, Wd.h)(bd.b)) {}(0, Wd.l)(bd.b, gd);
    class wd extends((0, Wd.h)(Td.l)) {}(0, Wd.l)(Td.l, wd);
    class Ed extends((0, Wd.h)(pd.b)) {}(0, Wd.l)(pd.b, Ed)
  },
  10017: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd,
      e: () => Xd,
      f: () => Kd,
      i: () => hd
    });
    var Wd = md(32);
    const Fd = "touchSprintChanged";
    let Rd = !0;

    function Xd() {
      return Rd
    }

    function Kd(dd) {
      dd !== Rd && (Rd = dd, Wd.j.lQ(Fd, dd))
    }

    function hd(dd, Od) {
      return null !== dd && null !== Od && dd > Od
    }
  },
  43088: (dd, Od, md) => {
    md.d(Od, {
      e: () => Dd,
      h: () => pd,
      l: () => fd
    });
    var Wd = md(42179),
      Fd = md(43097),
      Rd = md(43143),
      Xd = md(43101),
      Kd = md(39368),
      hd = md(39371),
      vd = md(39380),
      Qd = md(39384),
      td = md(38835),
      od = md(38788),
      Nd = md(38794),
      qd = md(43110),
      Hd = md(38758),
      yd = md(38779),
      bd = md(38752);

    function Td(dd, Od) {
      return Object.assign((function(dd, md, Wd, Fd) {
        return Od(this.featureState, dd, md, Wd, Fd)
      }), {
        Ot: dd
      })
    }

    function pd(dd) {
      const Od = class extends qd.d {
          constructor(Od, md) {
            const Wd = (0, yd.db)(Od),
              Fd = Wd && (0, yd.B)(Wd, dd.name);
            for (var Rd = arguments.length, Xd = new Array(Rd > 2 ? Rd - 2 : 0), Kd = 2; Kd < Rd; Kd++) Xd[Kd - 2] = arguments[Kd];
            super(Od, dd.name, dd.priority, Fd ? Fd.defines : dd.defines(...Xd), !1), this.featureState = void 0, this.featureState = md, this._pluginManager._addPlugin(this), this._enable(!0), (0, yd.C)(this._material, dd, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return dd.className
          }
          isCompatible(dd) {
            return dd === bd.e.GLSL || dd === bd.e.WGSL
          }
        },
        md = (0, Hd.i)(dd);
      for (const [Wd, Fd] of Object.entries(Hd.d)) {
        const Rd = dd[Wd];
        if (Rd) {
          const dd = md[Wd];
          Object.defineProperty(Od.prototype, Fd, {
            value: Td(Rd, dd),
            writable: !0,
            configurable: !0
          })
        }
      }
      return Od
    }
    class Yd extends(pd(Kd.e)) {}
    var gd = md(41756),
      wd = md(43113),
      Ed = md(43115);

    function Jd(dd, Od, md) {
      return (0, Ed.h)(md, Od.urls, (() => async function(dd, Od, md) {
        const {
          width: Wd
        } = dd[0].getSize(), Fd = dd.map(((dd, md) => {
          var Fd;
          const Rd = Math.round(dd.getSize().height / Wd),
            Xd = null === Od || void 0 === Od ? void 0 : Od[md];
          return {
            pixels: Xd && Xd.byteLength === Wd * Wd * Rd * 4 ? Xd : null !== (Fd = Ud.get(dd.getInternalTexture())) && void 0 !== Fd ? Fd : dd._readPixelsSync(),
            layers: Rd
          }
        })), Rd = Math.min(md.Iq().getCaps().texture2DArrayMaxLayerCount, 256), Kd = (0, Ed.d)(Fd, Wd, Rd).map((dd => {
          let {
            pixels: Od,
            layers: Fd
          } = dd;
          return {
            atlas: new wd.e(Od, Wd, Wd, Fd, gd.d.TEXTUREFORMAT_RGBA, md, !0, !1, Xd.b.NEAREST_NEAREST_MIPLINEAR),
            layers: Fd
          }
        }));
        return dd.forEach(((dd, Od) => {
          const Wd = dd.getInternalTexture();
          Ud.has(Wd) || (! function(dd, Od) {
            const md = Od.createRawTexture(new Uint8Array(4), 1, 1, gd.d.TEXTUREFORMAT_RGBA, !1, !1, Xd.b.NEAREST_SAMPLINGMODE);
            dd._hardwareTexture.release(), Od.unbindAllTextures(), md._swapAndDie(dd, !1)
          }(Wd, md.Iq()), Ud.set(Wd, Fd[Od].pixels))
        })), Kd
      }(dd, Od.pixels, md)))
    }
    const Ud = new WeakMap;
    var xd = md(39391);
    class Bd extends(pd(hd.h)) {
      constructor(dd, Od) {
        super(dd, Od), this.loaded = new Set, this.mirrors = void 0, this.mirrors = Od.textures.map((dd => dd.mirror)), Od.useWebGL2 && !Od.imagesPerAtlas.length && Od.textureAtlases.splice(0, Od.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((dd, Od) => {
          dd.onLoadObservable.add((dd => {
            this.setTextureArrayData(dd, Od).catch((dd => {
              console.error(`Failed to build the texture arrays, at atlas ${Od}`, dd)
            }))
          }))
        })), (0, xd.k)(Od, dd.shaderLanguage)
      }
      async setTextureArrayData(dd, Od) {
        const md = this.featureState,
          {
            width: Wd,
            height: Fd
          } = dd.getSize(),
          Rd = this._material.shaderLanguage;
        if (!md.useWebGL2) return void(0, xd.f)(this._material, md, Od, Wd, Math.round(Fd / Wd), Rd);
        if (this.loaded.add(Od), this.loaded.size < this.mirrors.length) return;
        const Xd = await Jd(this.mirrors, md.sources, this._material.zV());
        (0, xd.e)(this._material, md, Xd, Wd, Rd)
      }
    }
    var Sd = md(43122),
      sd = md(42225),
      ud = md(38627),
      Vd = md(43129),
      Ad = md(42339),
      rd = md(42217),
      Gd = md(43061),
      nd = md(39037),
      Ld = md(43134);
    class Pd extends Sd.d {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const zd = {
      Mesh: Vd.d,
      TransformNode: Gd.c,
      CQ: Sd.d,
      VertexBuffer: Sd.g,
      BoundingInfo: sd.c,
      Cq: ud.Cq,
      ArenaBuffer: Pd,
      SubMesh: rd.d,
      VertexData: Ad.c,
      MirroredGeometry: Ld.d,
      meshFromArrays: Ld.h,
      plainMeshFromArrays: Ld.k
    };
    (0, nd.g)(zd);
    var cd = md(38877);
    class jd extends(pd(Qd.j)) {
      constructor(dd, Od) {
        if (super(dd, Od), dd instanceof Wd.StandardMaterial && Od.dirLightCount > 0) {
          const Od = dd,
            md = Od._blockDirtyMechanism;
          Od._blockDirtyMechanism = !0, dd.disableLighting = !0, Od._blockDirtyMechanism = md;
          const Wd = (0, yd.db)(dd);
          Wd && (Wd.disableLighting = !0, (0, yd.ab)(Wd))
        }(0, cd.i)(dd)
      }
      dispose(dd) {
        (0, cd.j)(this._material), super.dispose(dd)
      }
    }

    function Dd(dd, Od) {
      if (!(Od instanceof Wd.StandardMaterial) || Od.specularTexture) return;
      const {
        r: md,
        g: Fd,
        b: Rd
      } = Od.specularColor;
      0 === md && 0 === Fd && 0 === Rd && (dd.SPECULARTERM = !1)
    }(0, Qd.f)({
      disableUnusedSpecularTerm: Dd
    });
    var ed = md(38799),
      Id = md(39050);
    const ld = new RegExp(`^#define ${vd.e}\\s*$`, "m");
    class Cd extends(pd(vd.i)) {
      constructor(dd, Od) {
        super(dd, Od), this.Aq = !1, Od.ditherOnlyWhileFading && (Id.d.add(dd), this.prewarmDitherTwins(dd))
      }
      prewarmDitherTwins(dd) {
        const Od = new WeakSet;
        dd.onEffectCreatedObservable.add((md => {
          let {
            effect: Wd,
            subMesh: Fd
          } = md;
          if (this.featureState.prewarmingDither || Od.has(Wd)) return;
          Od.add(Wd);
          const Rd = null === Fd || void 0 === Fd ? void 0 : Fd.getMesh();
          Rd && !ld.test(Wd.defines) && dd.zV().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Rd) || Od.delete(Wd)
          }))
        }))
      }
      prewarmDither(dd) {
        if (this.Aq || dd.yJ()) return !1;
        const Od = new rd.d(0, 0, 0, 0, 0, dd, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(dd, Od)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== Od.effect
      }
      dispose(dd) {
        this.Aq = !0, super.dispose(dd)
      }
    }
    class Zd extends(pd(td.b)) {}
    const kd = new Map;

    function fd(dd, Od) {
      kd.set(dd, Od)
    }
    fd(Kd.e, Yd), fd(hd.h, Bd), fd(vd.i, Cd), fd(Qd.j, jd), fd(td.b, Zd), (0, od.d)({
      create: (dd, Od) => {
        const md = new Wd.StandardMaterial(dd.name, Od);
        return (0, ed.p)(dd, md), md.detailMap._pluginDefineNames
      },
      write: (dd, Od, md) => {
        (0, ed.V)(dd.mirror, Od, md)
      },
      addFeature: (dd, Od, md) => {
        const Wd = kd.get(Od.feature);
        if (!Wd) throw new Error(`${Od.feature.name} has no plugin class (registerPluginClass)`);
        new Wd(dd.mirror, Od.state, ...md)
      },
      texture: (dd, Od, md) => {
        let {
          url: Wd,
          noMipmap: Fd,
          invertY: Rd,
          samplingMode: Kd,
          data: hd,
          sets: vd
        } = md;
        if (!hd) {
          const md = new Xd.b(Wd, Od, Fd, Rd, Kd);
          return Object.assign(md, vd), void(0, Nd.F)(dd, md)
        }
        const Qd = {},
          td = new Promise(((dd, Od) => {
            Qd.onLoad = dd, Qd.onError = (dd, md) => {
              Od(new Error(`${hd.context}: ${(null===md||void 0===md?void 0:md.message)||dd||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: od,
            bytes: qd,
            label: Hd
          } = hd,
          yd = {
            noMipmap: Fd,
            invertY: !1,
            samplingMode: Kd,
            ...Qd,
            mimeType: od,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          bd = new Xd.b(null, Od, yd);
        ed.q.set(bd, td), Object.assign(bd, vd), bd.updateURL(Wd, qd);
        const Td = bd.getInternalTexture();
        Td && (Td.label = Hd), dd.uvSet = bd.coordinatesIndex, dd.matrix.set((0, ed.P)(bd)), (0, Nd.F)(dd, bd)
      },
      cube: (dd, Od, md) => {
        let {
          rootUrl: Wd,
          files: Rd,
          noMipmap: Kd,
          luminance: hd
        } = md;
        const {
          samplingMode: vd
        } = dd.sampler, Qd = vd === (0, Nd.v)(Kd) ? null : () => {
          (0, ed.L)(td, vd)
        }, td = new Fd.b(Wd, Od, null, Kd, Rd, Qd, null, (0, Nd.r)(hd));
        td.coordinatesMode = Xd.b.SKYBOX_MODE, (0, Nd.F)(dd, td)
      },
      canvas: (dd, Od, md) => {
        let {
          width: Wd,
          height: Fd,
          mipmaps: Kd,
          samplingMode: hd,
          hasAlpha: vd = !1,
          wrap: Qd = Xd.b.CLAMP_ADDRESSMODE
        } = md;
        const td = new Rd.e(Od, {
          width: Wd,
          height: Fd
        }, dd, Kd, hd);
        td.hasAlpha = vd, td.wrapU = Qd, td.wrapV = Qd;
        const od = (0, ed.y)(td);
        return (0, ed.C)(od, td), od
      }
    })
  },
  43134: (dd, Od, md) => {
    md.d(Od, {
      d: () => Qd,
      h: () => td,
      k: () => od
    });
    var Wd = md(43122),
      Fd = md(41991),
      Rd = md(42225),
      Xd = md(42344),
      Kd = md(43129),
      hd = md(42339),
      vd = md(38929);
    class Qd extends Xd.c {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (dd, Od) => {
          this.releaseUnlessInstanced(Od)
        }, this.onLinked = null
      }
      link(dd) {
        var Od;
        (0, vd.o)(dd), this.model = dd, null === (Od = this.onLinked) || void 0 === Od || Od.call(this, dd)
      }
      relink() {
        this.release();
        const dd = [];
        for (const Fd of Object.values(this._vertexBuffers))
          if (!Fd.getIsInstanced()) {
            const {
              byteOffset: Od,
              byteStride: md,
              type: Wd,
              normalized: Rd
            } = Fd;
            dd.push({
              kind: Fd.getKind(),
              data: Fd.getData(),
              offset: Od,
              stride: md,
              components: Fd.getSize(),
              glType: Wd,
              isNormalized: Rd
            })
          } const Od = this._indices.length ? this._indices : null,
          {
            minimum: md,
            maximum: Wd
          } = this.extend;
        this.link(new vd.i(dd, Od, this.getTotalVertices(), new Float64Array(md.RRd()), new Float64Array(Wd.RRd())))
      }
      copy(dd) {
        if (!this.model) return super.copy(dd);
        const Od = new Qd(dd, this.zV()),
          md = this.jRd(void 0, !0);
        md && Od.setIndices(md);
        let Xd = !1;
        for (const Rd in this._vertexBuffers) {
          const dd = this._vertexBuffers[Rd],
            md = dd.getData();
          if (!md) continue;
          const Kd = dd.getSize(),
            {
              type: hd,
              byteOffset: vd,
              byteStride: Qd,
              normalized: td
            } = dd;
          Xd ||= dd.isUpdatable();
          const od = dd.getIsInstanced() ? (md instanceof Array ? 4 * md.length : md.byteLength) / Qd : this.getTotalVertices(),
            Nd = (0, Fd.q)(md, Kd, hd, vd, Qd, od, !0),
            qd = {
              updatable: dd.isUpdatable(),
              stride: Kd,
              type: hd,
              normalized: td,
              takeBufferOwnership: !0,
              instanced: dd.getIsInstanced()
            };
          Od.setVerticesBuffer(new Wd.g(this.Iq(), Nd, Rd, qd), od)
        }
        return Od._updatable = Xd, Od._boundingInfo = new Rd.c(this.extend.minimum, this.extend.maximum), Od.relink(), Od
      }
      static mergeMeshes(dd, Od, md, Wd, Fd, Rd) {
        const hd = dd[0].zV(),
          vd = new Kd.d(dd[0].name + "_merged", hd),
          td = new Qd(Xd.c.RandomId(), hd, void 0, !1, vd);
        try {
          if (!Kd.d.MergeMeshes(dd, Od, md, vd, Fd, Rd)) return vd.dispose(), null
        } catch (od) {
          throw vd.dispose(), od
        }
        return td.relink(), vd
      }
      removeVerticesData(dd) {
        this.releaseUnlessInstanced(dd), super.removeVerticesData(dd)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(dd) {
        var Od;
        dd && null !== (Od = this.getVertexBuffer(dd)) && void 0 !== Od && Od.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, vd.u)(this.model), this.model = null)
      }
    }

    function td(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Kd.d(dd, md);
      const Fd = (0, vd.l)(Od),
        {
          positions: Rd,
          normals: td,
          uvs: od,
          indices: Nd,
          named: qd = {}
        } = Od,
        Hd = new hd.c;
      Hd.positions = Rd, Hd.normals = null !== td && void 0 !== td ? td : null, Hd.uvs = null !== od && void 0 !== od ? od : null, Hd.indices = Nd;
      const yd = new Qd(Xd.c.RandomId(), md, Hd, !1, Wd);
      for (const {
          kind: Xd,
          components: Kd
        }
        of Fd.vertexAttributes) Xd in qd && Wd.setVerticesData(Xd, qd[Xd], !1, Kd);
      return yd.link(Fd), Wd
    }

    function od(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Fd = new Kd.d(dd, md),
        {
          positions: Rd,
          normals: Xd,
          uvs: vd,
          indices: Qd
        } = Od;
      return Object.assign(new hd.c, {
        positions: Rd,
        normals: Xd,
        uvs: vd,
        indices: Qd
      }).applyToMesh(Fd, Wd), Fd
    }
  },
  43115: (dd, Od, md) => {
    function Wd(dd, Od, md) {
      const Wd = Od * Od * 4,
        Fd = dd[0].layers,
        Rd = Fd * (dd.length - 1) + dd[dd.length - 1].layers,
        Xd = new Uint8Array(Rd * Wd);
      dd.forEach(((Od, md) => {
        const Rd = md + 1 < dd.length ? Math.min(Od.layers, Fd) : Od.layers;
        Xd.set(new Uint8Array(Od.pixels.buffer, Od.pixels.byteOffset, Rd * Wd), md * Fd * Wd)
      }));
      const Kd = Math.max(1, Math.min(Rd, md || Rd));
      if (Kd === Rd) return [{
        pixels: Xd,
        layers: Rd
      }];
      const hd = [];
      for (let vd = 0; vd < Rd; vd += Kd) {
        const dd = Math.min(Rd, vd + Kd);
        hd.push({
          pixels: Xd.slice(vd * Wd, dd * Wd),
          layers: dd - vd
        })
      }
      return hd
    }
    md.d(Od, {
      d: () => Wd,
      h: () => Rd
    });
    const Fd = new WeakMap;

    function Rd(dd, Od, md) {
      var Wd, Rd;
      const Xd = null !== (Wd = Fd.get(dd)) && void 0 !== Wd ? Wd : new Map;
      Fd.set(dd, Xd);
      const Kd = null !== (Rd = Xd.get(Od[0])) && void 0 !== Rd ? Rd : [];
      Xd.set(Od[0], Kd);
      const hd = Kd.find((dd => dd.urls.length === Od.length && dd.urls.every(((dd, md) => dd === Od[md]))));
      if (hd) return hd.built;
      const vd = {
        urls: [...Od],
        built: md()
      };
      return Kd.push(vd), vd.built.catch((() => {
        Kd.splice(Kd.indexOf(vd), 1)
      })), vd.built
    }
  },
  5725: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      f: () => od,
      j: () => hd,
      k: () => qd,
      n: () => vd,
      r: () => Nd
    });
    var Wd = md(5729),
      Fd = md(5733);
    const Rd = !1,
      Xd = Wd.m.map((dd => {
        const Od = [];
        for (let Rd = 1; Rd <= dd.reach; Rd++) Od.push(Fd.i[(0, Wd.i)(dd.source, Rd)].id);
        const md = "water" === dd.family;
        return Object.freeze({
          name: dd.kind,
          family: dd.family,
          reach: dd.reach,
          stepTicks: md ? 5 : 10,
          slopeDistance: md ? 4 : 2,
          sourceId: Fd.i[dd.source].id,
          fallingId: Fd.i[(0, Wd.e)(dd.source)].id,
          flowingIds: Object.freeze(Od),
          makesSources: md,
          stillId: Fd.i[dd.still].id
        })
      })),
      Kd = new Map;
    for (const Hd of Xd) Kd.set(Hd.sourceId, Object.freeze({
      kind: Hd,
      state: "source",
      distance: 0
    })), Kd.set(Hd.fallingId, Object.freeze({
      kind: Hd,
      state: "falling",
      distance: 0
    })), Hd.flowingIds.forEach(((dd, Od) => {
      Kd.set(dd, Object.freeze({
        kind: Hd,
        state: "flowing",
        distance: Od + 1
      }))
    }));

    function hd(dd) {
      return Xd.find((Od => Od.name === dd))
    }

    function vd(dd) {
      return null === dd ? void 0 : Kd.get(dd)
    }
    const Qd = new Uint8Array(65536);
    for (const [Hd, yd] of Kd) Qd[Hd] = "source" === yd.state ? 1 : 2;
    const td = new Map;
    for (const Hd of Xd) td.set(Hd.stillId, Hd.family);

    function od(dd) {
      var Od, md;
      return null !== (Od = null === (md = vd(dd)) || void 0 === md ? void 0 : md.kind.family) && void 0 !== Od ? Od : Nd(dd)
    }

    function Nd(dd) {
      var Od;
      return null === dd ? null : null !== (Od = td.get(dd)) && void 0 !== Od ? Od : null
    }
    Fd.i.Obsidian.id, Fd.i["Messy Stone"].id;

    function qd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
        let dd = 0;
        for (const Od of Xd) dd = Math.max(dd, Od.stillId, Od.sourceId, Od.fallingId, ...Od.flowingIds);
        return dd
      }() + 1;
      const Od = new Uint8Array(dd);
      for (const md of Xd) {
        const Wd = ("water" === md.family ? 1 : 2) << 4;
        for (const Fd of [md.stillId, md.sourceId, md.fallingId, ...md.flowingIds]) Fd < dd && (Od[Fd] = Wd)
      }
      return Od
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);