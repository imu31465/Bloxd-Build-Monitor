export const id = 122;
export const ids = [122];
export const modules = {
  42790: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => tb,
      h: () => Lb,
      k: () => Ob,
      o: () => Ib,
      r: () => Ub
    });
    var eb = Mb(1301),
      Hb = Mb(3217),
      pb = Mb(38374),
      Vb = Mb(38761);
    class gb {
      constructor(bb, wb) {
        this.pose = bb, this.nodes = void 0, this.nodes = bb.boneNames.map((bb => wb.get(bb)))
      }
      write(bb) {
        this.pose.pose(bb), (0, Vb.p)(this.pose, this.nodes)
      }
    }

    function lb(bb) {
      bb.unfreezeWorldMatrix();
      for (const wb of bb.getChildren()) lb(wb)
    }
    async function Lb(bb, wb, Mb, eb) {
      let {
        keepTransforms: Hb,
        backFaceCulling: Vb
      } = eb;
      const gb = await (0, pb.f)(wb, bb),
        Lb = (0, pb.d)(null !== Mb && void 0 !== Mb ? Mb : wb, bb, void 0, Vb);
      (0, pb.g)(gb, Lb, {
        keepTransforms: Hb,
        backFaceCulling: Vb,
        onProcessedMesh: wb => {
          bb.lpb(wb, !1), wb.isVisible = !1
        }
      });
      for (const pb of gb.rootNodes) lb(pb);
      return gb
    }

    function Ib(bb, wb) {
      bb.isVisible = wb;
      for (const Mb of bb.getChildMeshes()) Mb.isVisible = wb
    }

    function Ob(bb) {
      const wb = new Map;
      for (const Mb of bb.getNodes()) wb.set(Mb.name, Mb);
      return wb
    }

    function Ub(bb, wb, Mb, eb) {
      Ib(bb, !0), (0, pb.l)(bb, wb.overlayColour), Mb.attachTransformNode(bb, eb, Mb.getNamedNode(eb, wb.destNode))
    }
    class tb {
      constructor(bb, wb, Mb) {
        this.JE = bb, this.thinInstMgr = wb, this.qJ = Mb, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(bb, wb, Mb) {
        const eb = (0, pb.e)(bb, wb);
        return eb in this.modelCache || (this.modelCache[eb] = (async () => {
          try {
            const eb = Ob(await Lb(this.JE, bb, wb, {
                keepTransforms: void 0 !== Mb,
                backFaceCulling: !1
              })),
              Hb = void 0 === Mb ? null : (0, Vb.m)(Mb, (bb => {
                const wb = eb.get(bb);
                return wb ? (0, Vb.i)(wb) : null
              }));
            return {
              nodesByName: eb,
              bones: null === Hb ? null : new gb(Hb, eb)
            }
          } catch (Hb) {
            throw delete this.modelCache[eb], console.error(`Failed to load preview attachment ${eb}:`, Hb), Hb
          }
        })()), this.modelCache[eb]
      }
      async update(bb, wb) {
        var Mb;
        const {
          thinInstMgr: pb,
          qJ: Vb
        } = this;
        this.cosmeticNames[bb] = wb;
        const gb = this.attachmentsByType[bb];
        if (gb)
          for (const {
              mesh: Hb,
              destNode: Lb,
              bones: Ob
            }
            of gb) {
            null !== Ob && (0, eb.db)(this.shownBones, Ob), Ib(Hb, !1);
            const bb = pb.getNamedNode(Vb, Lb);
            pb.detachTransformNodeIfFound(Hb, Vb, bb)
          }
        this.attachmentsByType[bb] = [];
        const lb = (0, Hb.l)(bb, wb);
        if (null !== lb && void 0 !== lb && null !== (Mb = lb.attachments) && void 0 !== Mb && Mb.length)
          for (const eb of lb.attachments) {
            let Mb;
            try {
              Mb = await this.loadModel(eb.modelGlb, eb.texture, eb.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[bb] !== wb) return;
            const Hb = Mb.nodesByName.get(eb.modelNode);
            Hb ? (Ub(Hb, eb, pb, Vb), this.attachmentsByType[bb].push({
              mesh: Hb,
              destNode: eb.destNode,
              bones: Mb.bones
            }), null !== Mb.bones && this.shownBones.push(Mb.bones)) : console.error(`Preview attachment node ${eb.modelNode} not found in ${eb.modelGlb}`)
          }
      }
      writePoses(bb) {
        for (const wb of this.shownBones) wb.write(bb)
      }
    }
  },
  40101: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Ub
    });
    var eb = Mb(38414),
      Hb = Mb(38526),
      pb = Mb(38516),
      Vb = Mb(38432),
      gb = Mb(38419);

    function lb(bb) {
      return `\n\t\t\t\t${(0,gb.r)(bb,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, gb.u)(bb, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, gb.u)(bb, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, gb.j)(bb, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function Lb(bb, wb) {
      let Mb = (0, gb.sb)(bb, "skele" + (wb - 1));
      for (let Hb = wb - 2; Hb >= 0; Hb--) Mb = (0, gb.ib)(bb, `boneIdx == ${Hb}`, (0, gb.sb)(bb, `skele${Hb}`), Mb);
      const eb = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,gb.u)(bb,"int","boneIdx",(0,gb.ob)(bb,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,gb.u)(bb,"vec3","bone",Mb)}\n\t\t\t\t${(0,gb.u)(bb,"vec2","pivot",(0,gb.j)(bb,"vec2","0.0",`${(0,gb.zb)(bb,"position")}.z`))}\n\t\t\t\t${(0,gb.Y)(bb)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${eb}));`:`positionUpdated.yz += ${eb};`}\n\t\t`
    }

    function Ib(bb) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,gb.j)(bb,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const Ob = {
        x: 0,
        y: 0,
        z: 0,
        dI(bb, wb) {
          return this.x = bb[wb], this.y = bb[wb + 1], this.z = bb[wb + 2], this
        }
      },
      Ub = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (bb, wb) => ({
          ...(0, eb.e)("CAPE"),
          BLOXD_CAPE_BONES: `${bb}`,
          BLOXD_CAPE_MAX_Y: (0, Hb.mb)(wb)
        }),
        getUniforms(bb) {
          return (0, pb.e)(function(bb) {
            const wb = [];
            for (let Mb = 0; Mb < bb; Mb++) wb.push({
              name: `skele${Mb}`,
              type: "highp vec3"
            });
            return wb
          }(this.skeleLen), "vertex", bb)
        },
        bind(bb) {
          for (let wb = 0; wb < this.skeleLen; wb++) bb.updateVector3(`skele${wb}`, Ob.dI(this.skele, 3 * wb))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(bb, wb) {
          return "vertex" !== bb ? null : {
            CUSTOM_VERTEX_DEFINITIONS: lb(wb),
            CUSTOM_VERTEX_UPDATE_POSITION: Lb(wb, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: Ib(wb)
          }
        }
      };
    (0, Vb.j)(Ub)
  },
  39980: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Ib,
      d: () => Ob
    });
    var eb = Mb(38414),
      Hb = Mb(38516),
      pb = Mb(38419),
      Vb = Mb(38432);
    const gb = "bloxdTextLodBias",
      lb = [{
        name: gb,
        type: "float"
      }],
      Lb = "bloxdTextSample",
      Ib = {
        planes: -.5,
        boards: -.5
      },
      Ob = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, eb.e)("TEXT_SAMPLER"),
        getUniforms: bb => (0, Hb.e)(lb, "fragment", bb),
        bind(bb) {
          bb.updateFloat(gb, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(bb, wb) {
          if ("fragment" !== bb) return null;
          const Mb = (0, pb.D)(wb, `vec4 ${Lb}(sampler2D s, vec2 uv, float bias)`, `fn ${Lb}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            eb = (0, pb.D)(wb, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            Hb = `${(0,pb.R)(wb,"vDiffuseUV")} + uvOffset`,
            Vb = (0, pb.D)(wb, `${Lb}(diffuseSampler, ${Hb}, ${(0,pb.sb)(wb,gb)})`, `${Lb}(diffuseSampler, diffuseSamplerSampler, ${Hb}, ${(0,pb.sb)(wb,gb)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${Mb} {\n\t\t\t\t\t${(0,pb.u)(wb,"vec4","texel",eb)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,pb.j)(wb,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,pb.j)(wb,"vec3","0.0")}, ${(0,pb.j)(wb,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, pb.y)(wb)]: `baseColor = ${Vb};`
          }
        }
      };
    (0, Vb.j)(Ob)
  },
  42795: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      CapeMaterialPlugin: () => hb,
      HueTintMaterialPlugin: () => zb,
      LifeformMaterialPlugin: () => Xb,
      OverlayMaterialPlugin: () => xb
    });
    var eb = Mb(42800),
      Hb = Mb(39254);
    class pb extends((0, eb.d)(Hb.e)) {}(0, eb.f)(Hb.e, pb);
    var Vb = Mb(38523);
    class gb extends((0, eb.d)(Vb.e)) {}(0, eb.f)(Vb.e, gb);
    var lb = Mb(39079);
    class Lb extends((0, eb.d)(lb.h)) {}(0, eb.f)(lb.h, Lb);
    var Ib = Mb(38547),
      Ob = Mb(41933),
      Ub = Mb(38542);
    class tb extends((0, eb.d)(Ub.c)) {
      constructor(bb, wb, Mb) {
        super(bb, wb, Mb), (0, Ib.g)(bb)
      }
      dispose(bb) {
        (0, Ib.j)(this._material), super.dispose(bb)
      }
    }(0, eb.f)(Ub.c, tb), (0, Ub.d)({
      disableUnusedSpecularTerm: eb.c,
      isLightingDisabled: bb => bb instanceof Ob.StandardMaterial && bb.disableLighting
    });
    var Cb = Mb(39980);
    class Eb extends((0, eb.d)(Cb.d)) {}(0, eb.f)(Cb.d, Eb);
    var Fb = Mb(40101),
      Bb = Mb(38411),
      sb = Mb(39362),
      mb = Mb(38535);
    class hb extends((0, eb.d)(Fb.b)) {}(0, eb.f)(Fb.b, hb);
    class zb extends((0, eb.d)(Bb.e)) {}(0, eb.f)(Bb.e, zb);
    class Xb extends((0, eb.d)(sb.l)) {}(0, eb.f)(sb.l, Xb);
    class xb extends((0, eb.d)(mb.b)) {}(0, eb.f)(mb.b, xb)
  },
  10207: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb,
      g: () => Vb,
      k: () => gb,
      o: () => lb
    });
    var eb = Mb(29);
    const Hb = "touchSprintChanged";
    let pb = !0;

    function Vb() {
      return pb
    }

    function gb(bb) {
      bb !== pb && (pb = bb, eb.k.iI(Hb, bb))
    }

    function lb(bb, wb) {
      return null !== bb && null !== wb && bb > wb
    }
  },
  42800: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => qb,
      d: () => mb,
      f: () => yb
    });
    var eb = Mb(41933),
      Hb = Mb(42805),
      pb = Mb(42847),
      Vb = Mb(42807),
      gb = Mb(39054),
      lb = Mb(39056),
      Lb = Mb(39059),
      Ib = Mb(39068),
      Ob = Mb(38505),
      Ub = Mb(38462),
      tb = Mb(38468),
      Cb = Mb(42814),
      Eb = Mb(38432),
      Fb = Mb(38449),
      Bb = Mb(38419);

    function sb(bb, wb) {
      return Object.assign((function(bb, Mb, eb, Hb) {
        return wb(this.featureState, bb, Mb, eb, Hb)
      }), {
        kI: bb
      })
    }

    function mb(bb) {
      const wb = class extends Cb.e {
          constructor(wb, Mb) {
            const eb = (0, Fb.ab)(wb),
              Hb = eb && (0, Fb.w)(eb, bb.name);
            for (var pb = arguments.length, Vb = new Array(pb > 2 ? pb - 2 : 0), gb = 2; gb < pb; gb++) Vb[gb - 2] = arguments[gb];
            super(wb, bb.name, bb.priority, Hb ? Hb.defines : bb.defines(...Vb), !1), this.featureState = void 0, this.featureState = Mb, this._pluginManager._addPlugin(this), this._enable(!0), (0, Fb.A)(this._material, bb, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return bb.className
          }
          isCompatible(bb) {
            return bb === Bb.b.GLSL || bb === Bb.b.WGSL
          }
        },
        Mb = (0, Eb.e)(bb);
      for (const [eb, Hb] of Object.entries(Eb.c)) {
        const pb = bb[eb];
        if (pb) {
          const bb = Mb[eb];
          Object.defineProperty(wb.prototype, Hb, {
            value: sb(pb, bb),
            writable: !0,
            configurable: !0
          })
        }
      }
      return wb
    }
    class hb extends(mb(gb.c)) {}
    var zb = Mb(41496),
      Xb = Mb(42822),
      xb = Mb(42829);

    function jb(bb, wb, Mb) {
      return (0, xb.e)(Mb, wb.urls, (() => async function(bb, wb, Mb) {
        const {
          width: eb
        } = bb[0].getSize(), Hb = bb.map(((bb, Mb) => {
          var Hb;
          const pb = Math.round(bb.getSize().height / eb),
            Vb = null === wb || void 0 === wb ? void 0 : wb[Mb];
          return {
            pixels: Vb && Vb.byteLength === eb * eb * pb * 4 ? Vb : null !== (Hb = Kb.get(bb.getInternalTexture())) && void 0 !== Hb ? Hb : bb._readPixelsSync(),
            layers: pb
          }
        })), pb = Math.min(Mb.DC().getCaps().texture2DArrayMaxLayerCount, 256), gb = (0, xb.b)(Hb, eb, pb).map((bb => {
          let {
            pixels: wb,
            layers: Hb
          } = bb;
          return {
            atlas: new Xb.d(wb, eb, eb, Hb, zb.e.TEXTUREFORMAT_RGBA, Mb, !0, !1, Vb.c.NEAREST_NEAREST_MIPLINEAR),
            layers: Hb
          }
        }));
        return bb.forEach(((bb, wb) => {
          const eb = bb.getInternalTexture();
          Kb.has(eb) || (! function(bb, wb) {
            const Mb = wb.createRawTexture(new Uint8Array(4), 1, 1, zb.e.TEXTUREFORMAT_RGBA, !1, !1, Vb.c.NEAREST_SAMPLINGMODE);
            bb._hardwareTexture.release(), wb.unbindAllTextures(), Mb._swapAndDie(bb, !1)
          }(eb, Mb.DC()), Kb.set(eb, Hb[wb].pixels))
        })), gb
      }(bb, wb.pixels, Mb)))
    }
    const Kb = new WeakMap;
    var rb = Mb(39072);
    class Rb extends(mb(lb.i)) {
      constructor(bb, wb) {
        super(bb, wb), this.loaded = new Set, this.mirrors = void 0, this.mirrors = wb.textures.map((bb => bb.mirror)), wb.useWebGL2 && !wb.imagesPerAtlas.length && wb.textureAtlases.splice(0, wb.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((bb, wb) => {
          bb.onLoadObservable.add((bb => {
            this.setTextureArrayData(bb, wb).catch((bb => {
              console.error(`Failed to build the texture arrays, at atlas ${wb}`, bb)
            }))
          }))
        })), (0, rb.g)(wb, bb.shaderLanguage)
      }
      async setTextureArrayData(bb, wb) {
        const Mb = this.featureState,
          {
            width: eb,
            height: Hb
          } = bb.getSize(),
          pb = this._material.shaderLanguage;
        if (!Mb.useWebGL2) return void(0, rb.e)(this._material, Mb, wb, eb, Math.round(Hb / eb), pb);
        if (this.loaded.add(wb), this.loaded.size < this.mirrors.length) return;
        const Vb = await jb(this.mirrors, Mb.sources, this._material.RJ());
        (0, rb.b)(this._material, Mb, Vb, eb, pb)
      }
    }
    var Db = Mb(42831),
      cb = Mb(41984),
      Yb = Mb(38281),
      Zb = Mb(42839),
      fb = Mb(42091),
      Ab = Mb(41972),
      Wb = Mb(42787),
      Jb = Mb(38714),
      Sb = Mb(42845);
    class Nb extends Db.d {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const vb = {
      Mesh: Zb.e,
      TransformNode: Wb.b,
      uI: Db.d,
      VertexBuffer: Db.f,
      BoundingInfo: cb.e,
      YC: Yb.YC,
      ArenaBuffer: Nb,
      SubMesh: Ab.d,
      VertexData: fb.d,
      MirroredGeometry: Sb.b,
      meshFromArrays: Sb.e,
      plainMeshFromArrays: Sb.g
    };
    (0, Jb.f)(vb);
    var Qb = Mb(38547);
    class Gb extends(mb(Ib.g)) {
      constructor(bb, wb) {
        if (super(bb, wb), bb instanceof eb.StandardMaterial && wb.dirLightCount > 0) {
          const wb = bb,
            Mb = wb._blockDirtyMechanism;
          wb._blockDirtyMechanism = !0, bb.disableLighting = !0, wb._blockDirtyMechanism = Mb;
          const eb = (0, Fb.ab)(bb);
          eb && (eb.disableLighting = !0, (0, Fb.Z)(eb))
        }(0, Qb.g)(bb)
      }
      dispose(bb) {
        (0, Qb.j)(this._material), super.dispose(bb)
      }
    }

    function qb(bb, wb) {
      if (!(wb instanceof eb.StandardMaterial) || wb.specularTexture) return;
      const {
        r: Mb,
        g: Hb,
        b: pb
      } = wb.specularColor;
      0 === Mb && 0 === Hb && 0 === pb && (bb.SPECULARTERM = !1)
    }(0, Ib.d)({
      disableUnusedSpecularTerm: qb
    });
    var ab = Mb(38473),
      ib = Mb(38728);
    const ub = new RegExp(`^#define ${Lb.e}\\s*$`, "m");
    class db extends(mb(Lb.l)) {
      constructor(bb, wb) {
        super(bb, wb), this.BC = !1, wb.ditherOnlyWhileFading && (ib.f.add(bb), this.prewarmDitherTwins(bb))
      }
      prewarmDitherTwins(bb) {
        const wb = new WeakSet;
        bb.onEffectCreatedObservable.add((Mb => {
          let {
            effect: eb,
            subMesh: Hb
          } = Mb;
          if (this.featureState.prewarmingDither || wb.has(eb)) return;
          wb.add(eb);
          const pb = null === Hb || void 0 === Hb ? void 0 : Hb.getMesh();
          pb && !ub.test(eb.defines) && bb.RJ().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(pb) || wb.delete(eb)
          }))
        }))
      }
      prewarmDither(bb) {
        if (this.BC || bb.RD()) return !1;
        const wb = new Ab.d(0, 0, 0, 0, 0, bb, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(bb, wb)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== wb.effect
      }
      dispose(bb) {
        this.BC = !0, super.dispose(bb)
      }
    }
    class Pb extends(mb(Ob.c)) {}
    const nb = new Map;

    function yb(bb, wb) {
      nb.set(bb, wb)
    }
    yb(gb.c, hb), yb(lb.i, Rb), yb(Lb.l, db), yb(Ib.g, Gb), yb(Ob.c, Pb), (0, Ub.b)({
      create: (bb, wb) => {
        const Mb = new eb.StandardMaterial(bb.name, wb);
        return (0, ab.o)(bb, Mb), Mb.detailMap._pluginDefineNames
      },
      write: (bb, wb, Mb) => {
        (0, ab.Z)(bb.mirror, wb, Mb)
      },
      addFeature: (bb, wb, Mb) => {
        const eb = nb.get(wb.feature);
        if (!eb) throw new Error(`${wb.feature.name} has no plugin class (registerPluginClass)`);
        new eb(bb.mirror, wb.state, ...Mb)
      },
      texture: (bb, wb, Mb) => {
        let {
          url: eb,
          noMipmap: Hb,
          invertY: pb,
          samplingMode: gb,
          data: lb,
          sets: Lb
        } = Mb;
        if (!lb) {
          const Mb = new Vb.c(eb, wb, Hb, pb, gb);
          return Object.assign(Mb, Lb), void(0, tb.G)(bb, Mb)
        }
        const Ib = {},
          Ob = new Promise(((bb, wb) => {
            Ib.onLoad = bb, Ib.onError = (bb, Mb) => {
              wb(new Error(`${lb.context}: ${(null===Mb||void 0===Mb?void 0:Mb.message)||bb||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: Ub,
            bytes: Cb,
            label: Eb
          } = lb,
          Fb = {
            noMipmap: Hb,
            invertY: !1,
            samplingMode: gb,
            ...Ib,
            mimeType: Ub,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          Bb = new Vb.c(null, wb, Fb);
        ab.r.set(Bb, Ob), Object.assign(Bb, Lb), Bb.updateURL(eb, Cb);
        const sb = Bb.getInternalTexture();
        sb && (sb.label = Eb), bb.uvSet = Bb.coordinatesIndex, bb.matrix.set((0, ab.P)(Bb)), (0, tb.G)(bb, Bb)
      },
      cube: (bb, wb, Mb) => {
        let {
          rootUrl: eb,
          files: pb,
          noMipmap: gb,
          luminance: lb
        } = Mb;
        const {
          samplingMode: Lb
        } = bb.sampler, Ib = Lb === (0, tb.z)(gb) ? null : () => {
          (0, ab.L)(Ob, Lb)
        }, Ob = new Hb.e(eb, wb, null, gb, pb, Ib, null, (0, tb.w)(lb));
        Ob.coordinatesMode = Vb.c.SKYBOX_MODE, (0, tb.G)(bb, Ob)
      },
      canvas: (bb, wb, Mb) => {
        let {
          width: eb,
          height: Hb,
          mipmaps: gb,
          samplingMode: lb,
          hasAlpha: Lb = !1,
          wrap: Ib = Vb.c.CLAMP_ADDRESSMODE
        } = Mb;
        const Ob = new pb.e(wb, {
          width: eb,
          height: Hb
        }, bb, gb, lb);
        Ob.hasAlpha = Lb, Ob.wrapU = Ib, Ob.wrapV = Ib;
        const Ub = (0, ab.B)(Ob);
        return (0, ab.D)(Ub, Ob), Ub
      }
    })
  },
  42845: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Ib,
      e: () => Ob,
      g: () => Ub
    });
    var eb = Mb(42831),
      Hb = Mb(41740),
      pb = Mb(41984),
      Vb = Mb(42093),
      gb = Mb(42839),
      lb = Mb(42091),
      Lb = Mb(38599);
    class Ib extends Vb.c {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (bb, wb) => {
          this.releaseUnlessInstanced(wb)
        }, this.onLinked = null
      }
      link(bb) {
        var wb;
        (0, Lb.j)(bb), this.model = bb, null === (wb = this.onLinked) || void 0 === wb || wb.call(this, bb)
      }
      relink() {
        this.release();
        const bb = [];
        for (const Hb of Object.values(this._vertexBuffers))
          if (!Hb.getIsInstanced()) {
            const {
              byteOffset: wb,
              byteStride: Mb,
              type: eb,
              normalized: pb
            } = Hb;
            bb.push({
              kind: Hb.getKind(),
              data: Hb.getData(),
              offset: wb,
              stride: Mb,
              components: Hb.getSize(),
              glType: eb,
              isNormalized: pb
            })
          } const wb = this._indices.length ? this._indices : null,
          {
            minimum: Mb,
            maximum: eb
          } = this.extend;
        this.link(new Lb.d(bb, wb, this.getTotalVertices(), new Float64Array(Mb.ppb()), new Float64Array(eb.ppb())))
      }
      copy(bb) {
        if (!this.model) return super.copy(bb);
        const wb = new Ib(bb, this.RJ()),
          Mb = this.ipb(void 0, !0);
        Mb && wb.setIndices(Mb);
        let Vb = !1;
        for (const pb in this._vertexBuffers) {
          const bb = this._vertexBuffers[pb],
            Mb = bb.getData();
          if (!Mb) continue;
          const gb = bb.getSize(),
            {
              type: lb,
              byteOffset: Lb,
              byteStride: Ib,
              normalized: Ob
            } = bb;
          Vb ||= bb.isUpdatable();
          const Ub = bb.getIsInstanced() ? (Mb instanceof Array ? 4 * Mb.length : Mb.byteLength) / Ib : this.getTotalVertices(),
            tb = (0, Hb.s)(Mb, gb, lb, Lb, Ib, Ub, !0),
            Cb = {
              updatable: bb.isUpdatable(),
              stride: gb,
              type: lb,
              normalized: Ob,
              takeBufferOwnership: !0,
              instanced: bb.getIsInstanced()
            };
          wb.setVerticesBuffer(new eb.f(this.DC(), tb, pb, Cb), Ub)
        }
        return wb._updatable = Vb, wb._boundingInfo = new pb.e(this.extend.minimum, this.extend.maximum), wb.relink(), wb
      }
      static mergeMeshes(bb, wb, Mb, eb, Hb, pb) {
        const lb = bb[0].RJ(),
          Lb = new gb.e(bb[0].name + "_merged", lb),
          Ob = new Ib(Vb.c.RandomId(), lb, void 0, !1, Lb);
        try {
          if (!gb.e.MergeMeshes(bb, wb, Mb, Lb, Hb, pb)) return Lb.dispose(), null
        } catch (Ub) {
          throw Lb.dispose(), Ub
        }
        return Ob.relink(), Lb
      }
      removeVerticesData(bb) {
        this.releaseUnlessInstanced(bb), super.removeVerticesData(bb)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(bb) {
        var wb;
        bb && null !== (wb = this.getVertexBuffer(bb)) && void 0 !== wb && wb.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Lb.p)(this.model), this.model = null)
      }
    }

    function Ob(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new gb.e(bb, Mb);
      const Hb = (0, Lb.i)(wb),
        {
          positions: pb,
          normals: Ob,
          uvs: Ub,
          indices: tb,
          named: Cb = {}
        } = wb,
        Eb = new lb.d;
      Eb.positions = pb, Eb.normals = null !== Ob && void 0 !== Ob ? Ob : null, Eb.uvs = null !== Ub && void 0 !== Ub ? Ub : null, Eb.indices = tb;
      const Fb = new Ib(Vb.c.RandomId(), Mb, Eb, !1, eb);
      for (const {
          kind: Vb,
          components: gb
        }
        of Hb.vertexAttributes) Vb in Cb && eb.setVerticesData(Vb, Cb[Vb], !1, gb);
      return Fb.link(Hb), eb
    }

    function Ub(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Hb = new gb.e(bb, Mb),
        {
          positions: pb,
          normals: Vb,
          uvs: Lb,
          indices: Ib
        } = wb;
      return Object.assign(new lb.d, {
        positions: pb,
        normals: Vb,
        uvs: Lb,
        indices: Ib
      }).applyToMesh(Hb, eb), Hb
    }
  },
  42829: (bb, wb, Mb) => {
    function eb(bb, wb, Mb) {
      const eb = wb * wb * 4,
        Hb = bb[0].layers,
        pb = Hb * (bb.length - 1) + bb[bb.length - 1].layers,
        Vb = new Uint8Array(pb * eb);
      bb.forEach(((wb, Mb) => {
        const pb = Mb + 1 < bb.length ? Math.min(wb.layers, Hb) : wb.layers;
        Vb.set(new Uint8Array(wb.pixels.buffer, wb.pixels.byteOffset, pb * eb), Mb * Hb * eb)
      }));
      const gb = Math.max(1, Math.min(pb, Mb || pb));
      if (gb === pb) return [{
        pixels: Vb,
        layers: pb
      }];
      const lb = [];
      for (let Lb = 0; Lb < pb; Lb += gb) {
        const bb = Math.min(pb, Lb + gb);
        lb.push({
          pixels: Vb.slice(Lb * eb, bb * eb),
          layers: bb - Lb
        })
      }
      return lb
    }
    Mb.d(wb, {
      b: () => eb,
      e: () => pb
    });
    const Hb = new WeakMap;

    function pb(bb, wb, Mb) {
      var eb, pb;
      const Vb = null !== (eb = Hb.get(bb)) && void 0 !== eb ? eb : new Map;
      Hb.set(bb, Vb);
      const gb = null !== (pb = Vb.get(wb[0])) && void 0 !== pb ? pb : [];
      Vb.set(wb[0], gb);
      const lb = gb.find((bb => bb.urls.length === wb.length && bb.urls.every(((bb, Mb) => bb === wb[Mb]))));
      if (lb) return lb.built;
      const Lb = {
        urls: [...wb],
        built: Mb()
      };
      return gb.push(Lb), Lb.built.catch((() => {
        gb.splice(gb.indexOf(Lb), 1)
      })), Lb.built
    }
  },
  5857: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      e: () => Ub,
      g: () => lb,
      h: () => Cb,
      i: () => Lb,
      j: () => tb
    });
    var eb = Mb(5859),
      Hb = Mb(5868);
    const pb = !1,
      Vb = eb.k.map((bb => {
        const wb = [];
        for (let pb = 1; pb <= bb.reach; pb++) wb.push(Hb.g[(0, eb.h)(bb.source, pb)].id);
        const Mb = "water" === bb.family;
        return Object.freeze({
          name: bb.kind,
          family: bb.family,
          reach: bb.reach,
          stepTicks: Mb ? 5 : 10,
          slopeDistance: Mb ? 4 : 2,
          sourceId: Hb.g[bb.source].id,
          fallingId: Hb.g[(0, eb.e)(bb.source)].id,
          flowingIds: Object.freeze(wb),
          makesSources: Mb,
          stillId: Hb.g[bb.still].id
        })
      })),
      gb = new Map;
    for (const Eb of Vb) gb.set(Eb.sourceId, Object.freeze({
      kind: Eb,
      state: "source",
      distance: 0
    })), gb.set(Eb.fallingId, Object.freeze({
      kind: Eb,
      state: "falling",
      distance: 0
    })), Eb.flowingIds.forEach(((bb, wb) => {
      gb.set(bb, Object.freeze({
        kind: Eb,
        state: "flowing",
        distance: wb + 1
      }))
    }));

    function lb(bb) {
      return Vb.find((wb => wb.name === bb))
    }

    function Lb(bb) {
      return null === bb ? void 0 : gb.get(bb)
    }
    const Ib = new Uint8Array(65536);
    for (const [Eb, Fb] of gb) Ib[Eb] = "source" === Fb.state ? 1 : 2;
    const Ob = new Map;
    for (const Eb of Vb) Ob.set(Eb.stillId, Eb.family);

    function Ub(bb) {
      var wb, Mb;
      return null !== (wb = null === (Mb = Lb(bb)) || void 0 === Mb ? void 0 : Mb.kind.family) && void 0 !== wb ? wb : tb(bb)
    }

    function tb(bb) {
      var wb;
      return null === bb ? null : null !== (wb = Ob.get(bb)) && void 0 !== wb ? wb : null
    }
    Hb.g.Obsidian.id, Hb.g["Messy Stone"].id;

    function Cb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
        let bb = 0;
        for (const wb of Vb) bb = Math.max(bb, wb.stillId, wb.sourceId, wb.fallingId, ...wb.flowingIds);
        return bb
      }() + 1;
      const wb = new Uint8Array(bb);
      for (const Mb of Vb) {
        const eb = ("water" === Mb.family ? 1 : 2) << 4;
        for (const Hb of [Mb.stillId, Mb.sourceId, Mb.fallingId, ...Mb.flowingIds]) Hb < bb && (wb[Hb] = eb)
      }
      return wb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);