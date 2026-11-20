export const id = 155;
export const ids = [155];
export const modules = {
  40524: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      openMobLineupPreview: () => Ib,
      openMobPreview: () => mb,
      openPetPreview: () => Pb
    });
    var Bb = hb(39277),
      Ob = hb(39544),
      Gb = hb(40528),
      Ub = hb(36889),
      Lb = hb(36720),
      Yb = hb(39689),
      Sb = hb(40551),
      ab = hb(38095),
      Hb = hb(36793),
      wb = hb(36772),
      Zb = hb(36713),
      Xb = hb(38e3),
      pb = hb(37993),
      ob = hb(37708),
      Ab = hb(37756),
      lb = hb(37737),
      Kb = hb(37406),
      Wb = hb(2560),
      Cb = hb(37252);
    hb(40558), hb(39940), hb(40565);
    const db = 22,
      rb = 13,
      jb = Math.PI - Math.PI / 16,
      nb = 6,
      Db = Math.PI / 4;
    let xb = null;
    const zb = {},
      gb = new Map;

    function ib() {
      if (null !== xb) return xb;
      const bb = document.createElement("canvas");
      bb.classList.add("MobPreviewCanvas");
      const ub = new Bb.c(bb, !0, {
        preserveDrawingBuffer: !0
      });
      ub.aBb = (0, Wb.g)().xX.engine.aBb;
      const hb = new Ob.e(ub);
      hb.clearColor = new Ub.b(0, 0, 0, 0), hb.ambientColor = new Ub.Color3(1, 1, 1);
      const Sb = new Gb.d("Ko", Math.PI / 2, Math.PI / 2, db, Lb.YX.Zero(), hb),
        ab = new Yb.b("light", new Lb.YX(-.1, 1, -.3), hb);
      return ab.diffuse = new Ub.Color3(1, 1, 1), ab.specular = new Ub.Color3(1, 1, 1), ab.groundColor = new Ub.Color3(.5, .5, .5), xb = {
        engine: ub,
        Xp: hb,
        canvas: bb,
        camera: Sb
      }, xb
    }

    function vb(bb) {
      return zb[bb] ??= (0, ob.w)(bb, ib().Xp, !0).catch((ub => {
        throw delete zb[bb], ub
      })), zb[bb]
    }

    function tb(bb) {
      let ub = gb.get(bb);
      return ub || (ub = Kb.z[bb].loadModel(ib().Xp, !1).then((bb => (bb.Zx(!1), bb)), (ub => {
        throw gb.delete(bb), ub
      })), gb.set(bb, ub)), ub
    }

    function Jb(bb) {
      var ub, hb, Bb;
      let {
        mobType: Ob,
        variation: Gb,
        animation: Ub
      } = bb, Yb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, db = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const nb = null !== (ub = null === Yb || void 0 === Yb ? void 0 : Yb.size) && void 0 !== ub ? ub : 1,
        Db = null !== (hb = null === Yb || void 0 === Yb ? void 0 : Yb.cosmetics) && void 0 !== hb ? hb : [],
        xb = null !== (Bb = null === Yb || void 0 === Yb ? void 0 : Yb.bC) && void 0 !== Bb ? Bb : null;
      let zb = !1,
        gb = null,
        Jb = null;
      const {
        engine: eb,
        Xp: Nb
      } = ib(), sb = Nb.onBeforeRenderObservable.add((() => {
        var bb;
        null === (bb = Jb) || void 0 === bb || bb.render(eb.getDeltaTime())
      })), Mb = null === xb ? null : tb(xb).catch((bb => (console.error(`Mob preview: could not load ${xb}`, bb), null)));
      return Promise.all([vb(Ob), Mb]).then((bb => {
        var ub, hb, Bb;
        let [Yb, vb] = bb;
        if (zb) return;
        const tb = (0, Wb.g)().xX.oN,
          {
            hitBoxDimensions: eb
          } = (0, ab.e)(Ob),
          Nb = rb / Math.max(eb.height, eb.width);
        if (gb = (0, ob.k)(Ob, Nb * nb, !0, !0), tb.setPosition(gb, db, -eb.height * Nb / 2, 0), tb.setRotationEulerY(gb, jb), Yb.meshApi instanceof lb.e && Db.length > 0)
          for (const [Ob, Gb] of Db) Yb.meshApi.updatePlayerCosmetic(null, gb, Ob, Gb, !0);
        else Yb.meshApi.updateVariation(gb, Ob, null !== Gb && void 0 !== Gb ? Gb : "default");
        null !== xb && null !== vb && function(bb, ub, hb, Bb) {
          var Ob;
          const Gb = Kb.z[bb],
            Ub = (0, Xb.l)();
          (0, Xb.f)(Gb, null === (Ob = (0, Ab.d)(hb).meshMetadata.heldItemPositionParams) || void 0 === Ob ? void 0 : Ob.itemOffset, Ub);
          const Yb = Cb.e * Ub.pa.y,
            ab = Ub.usesQuaternion ? Ub.quaternion : Lb.Quaternion.FromEulerVector(Ub.rotation),
            Hb = new Sb.d(`${ub.name}Hand`, ib().Xp);
          Hb.position.mD((0, pb.c)(Ub.position, ab, Yb, Gb.heldModelOffsetY())), Hb.rotationQuaternion = ab, Hb.pa.set(Ub.pa.x, Yb, Ub.pa.z), ub.clone(`${ub.name}Held`, Hb).Zx(!0);
          const wb = (0, Wb.g)().xX.oN;
          wb.attachTransformNode(Hb, Bb, wb.getNamedNode(Bb, "ArmRightMesh"))
        }(xb, vb, Ob, gb), tb.set(gb, "aOpacity", 1);
        const sb = null !== (ub = (0, Ab.d)(Ob).meshMetadata.lifeformTypeForModelOverride) && void 0 !== ub ? ub : Ob;
        Jb = new Zb.AnimatorState, Jb.thinInstMgr = tb, Jb.lN = gb, Jb.Nhb = tb.HBb(gb, 0), Jb.modelLifeformType = sb, Jb.nodeNameAliases = null !== (hb = null === (Bb = (0, Hb.d)(sb)) || void 0 === Bb ? void 0 : Bb.nodeNameAliases) && void 0 !== hb ? hb : null, Jb.startAnimation(Ub, wb.f.Movement)
      })).catch((bb => {
        console.error(`Mob preview: could not load ${Ob}`, bb)
      })), () => {
        zb = !0, Nb.onBeforeRenderObservable.remove(sb), null !== gb && (0, Wb.g)().xX.oN.delete(gb)
      }
    }

    function eb(bb, ub) {
      return Jb({
        mobType: "NPC",
        variation: null,
        animation: bb.animation
      }, bb, ub)
    }

    function Nb(bb) {
      let {
        mobType: ub,
        variation: hb,
        metaInfo: Bb,
        tamed: Ob
      } = bb, Gb = !1, Ub = null, Lb = 0;
      const Yb = (0, Wb.g)(),
        Sb = Yb.xX.oN,
        ab = bb => {
          Lb += Db * (bb / 1e3) % (2 * Math.PI), Sb.setRotationEulerY(Ub, Lb)
        };
      return vb(ub).then((bb => {
        if (Gb) return;
        Ub = (0, ob.k)(ub, nb, !0, !0), Sb.setPosition(Ub, 0, -nb, 0), bb.meshApi.updateVariation(Ub, ub, hb);
        const Lb = {
          wool: "Sheared" !== Bb,
          saddle: "Saddled" === Bb,
          antlers: "Antlers" === Bb,
          collar: Ob
        };
        for (const [ub, hb] of Object.entries(Lb)) Sb.hasGroup(Ub, ub) && bb.meshApi.setMeshGroupVisibility(Ub, ub, hb);
        Sb.set(Ub, "aOpacity", 1), Yb.on("renderTickBegin", ab)
      })).catch((bb => {
        console.error(`Pet preview: could not load ${ub}`, bb)
      })), () => {
        Gb = !0, Yb.off("renderTickBegin", ab), null !== Ub && Sb.delete(Ub)
      }
    }
    class sb {
      constructor(bb, ub) {
        this.place = ub, this.remove = null;
        const {
          engine: hb,
          Xp: Bb,
          canvas: Ob
        } = ib();
        bb.appendChild(Ob), hb.resize(), hb.runRenderLoop((() => {
          Bb.render()
        }))
      }
      show(bb) {
        var ub;
        null === (ub = this.remove) || void 0 === ub || ub.call(this), this.remove = this.place(bb)
      }
      resize(bb, ub) {
        const {
          engine: hb,
          canvas: Bb
        } = ib();
        Bb.width = bb, Bb.height = ub, hb.resize()
      }
      close() {
        var bb;
        ib().engine.stopRenderLoop(), null === (bb = this.remove) || void 0 === bb || bb.call(this), this.remove = null
      }
    }
    class Mb {
      constructor(bb) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new sb(bb, (() => () => {}))
      }
      show(bb) {
        bb.figures !== this.view.figures && this.preload(bb.figures), this.view = bb, this.place()
      }
      resize(bb, ub) {
        this.preview.resize(bb, ub), this.aspect = bb / ub, this.place()
      }
      close() {
        this.preview.close();
        for (const bb of this.placed) null === bb || void 0 === bb || bb.remove();
        this.placed = []
      }
      preload(bb) {
        const ub = () => {};
        vb("NPC").catch(ub);
        for (const {
            bC: hb
          }
          of bb) null !== hb && tb(hb).catch(ub)
      }
      place() {
        const {
          figures: bb,
          shown: ub
        } = this.view, hb = bb.map(((hb, Bb) => {
          var Ob;
          const Gb = null !== (Ob = this.placed[Bb]) && void 0 !== Ob ? Ob : null;
          if (!ub[Bb]) return null === Gb || void 0 === Gb || Gb.remove(), null;
          const Ub = (Lb = (Bb + .5) / bb.length, Yb = this.aspect, (.5 - Lb) * (2 * db * Math.tan(ib().camera.fov / 2)) * Yb);
          var Lb, Yb;
          return null !== Gb && Gb.figure === hb && Gb.x === Ub ? Gb : (null === Gb || void 0 === Gb || Gb.remove(), {
            figure: hb,
            x: Ub,
            remove: eb(hb, Ub)
          })
        }));
        for (const Bb of this.placed.slice(bb.length)) null === Bb || void 0 === Bb || Bb.remove();
        this.placed = hb
      }
    }

    function mb(bb) {
      return new sb(bb, Jb)
    }

    function Ib(bb) {
      return new Mb(bb)
    }

    function Pb(bb) {
      return new sb(bb, Nb)
    }
  },
  38414: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => wb
    });
    var Bb = hb(36809),
      Ob = hb(36822),
      Gb = hb(37071),
      Ub = hb(36830),
      Lb = hb(36814);

    function Yb(bb) {
      return `\n\t\t\t\t${(0,Lb.x)(bb,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, Lb.E)(bb, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, Lb.E)(bb, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, Lb.k)(bb, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function Sb(bb, ub) {
      let hb = (0, Lb.Ib)(bb, "skele" + (ub - 1));
      for (let Ob = ub - 2; Ob >= 0; Ob--) hb = (0, Lb.Ab)(bb, `boneIdx == ${Ob}`, (0, Lb.Ib)(bb, `skele${Ob}`), hb);
      const Bb = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,Lb.E)(bb,"int","boneIdx",(0,Lb.Db)(bb,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,Lb.E)(bb,"vec3","bone",hb)}\n\t\t\t\t${(0,Lb.E)(bb,"vec2","pivot",(0,Lb.k)(bb,"vec2","0.0",`${(0,Lb.Rb)(bb,"position")}.z`))}\n\t\t\t\t${(0,Lb.db)(bb)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${Bb}));`:`positionUpdated.yz += ${Bb};`}\n\t\t`
    }

    function ab(bb) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,Lb.k)(bb,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const Hb = {
        x: 0,
        y: 0,
        z: 0,
        Ohb(bb, ub) {
          return this.x = bb[ub], this.y = bb[ub + 1], this.z = bb[ub + 2], this
        }
      },
      wb = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (bb, ub) => ({
          ...(0, Bb.e)("CAPE"),
          BLOXD_CAPE_BONES: `${bb}`,
          BLOXD_CAPE_MAX_Y: (0, Ob.ub)(ub)
        }),
        getUniforms(bb) {
          return (0, Gb.d)(function(bb) {
            const ub = [];
            for (let hb = 0; hb < bb; hb++) ub.push({
              name: `skele${hb}`,
              type: "highp vec3"
            });
            return ub
          }(this.skeleLen), "vertex", bb)
        },
        bind(bb) {
          for (let ub = 0; ub < this.skeleLen; ub++) bb.updateVector3(`skele${ub}`, Hb.Ohb(this.skele, 3 * ub))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(bb, ub) {
          return "vertex" !== bb ? null : {
            CUSTOM_VERTEX_DEFINITIONS: Yb(ub),
            CUSTOM_VERTEX_UPDATE_POSITION: Sb(ub, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: ab(ub)
          }
        }
      };
    (0, Ub.p)(wb)
  },
  38315: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ab,
      e: () => Hb
    });
    var Bb = hb(36809),
      Ob = hb(37071),
      Gb = hb(36814),
      Ub = hb(36830);
    const Lb = "bloxdTextLodBias",
      Yb = [{
        name: Lb,
        type: "float"
      }],
      Sb = "bloxdTextSample",
      ab = {
        planes: -.5,
        boards: -.5
      },
      Hb = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, Bb.e)("TEXT_SAMPLER"),
        getUniforms: bb => (0, Ob.d)(Yb, "fragment", bb),
        bind(bb) {
          bb.updateFloat(Lb, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(bb, ub) {
          if ("fragment" !== bb) return null;
          const hb = (0, Gb.L)(ub, `vec4 ${Sb}(sampler2D s, vec2 uv, float bias)`, `fn ${Sb}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            Bb = (0, Gb.L)(ub, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            Ob = `${(0,Gb.Y)(ub,"vDiffuseUV")} + uvOffset`,
            Ub = (0, Gb.L)(ub, `${Sb}(diffuseSampler, ${Ob}, ${(0,Gb.Ib)(ub,Lb)})`, `${Sb}(diffuseSampler, diffuseSamplerSampler, ${Ob}, ${(0,Gb.Ib)(ub,Lb)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${hb} {\n\t\t\t\t\t${(0,Gb.E)(ub,"vec4","texel",Bb)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,Gb.k)(ub,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,Gb.k)(ub,"vec3","0.0")}, ${(0,Gb.k)(ub,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, Gb.G)(ub)]: `baseColor = ${Ub};`
          }
        }
      };
    (0, Ub.p)(Hb)
  },
  40565: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      CapeMaterialPlugin: () => Wb,
      HueTintMaterialPlugin: () => Cb,
      LifeformMaterialPlugin: () => db,
      OverlayMaterialPlugin: () => rb
    });
    var Bb = hb(40574),
      Ob = hb(37605);
    class Gb extends((0, Bb.i)(Ob.e)) {}(0, Bb.l)(Ob.e, Gb);
    var Ub = hb(36800);
    class Lb extends((0, Bb.i)(Ub.f)) {}(0, Bb.l)(Ub.f, Lb);
    var Yb = hb(37452);
    class Sb extends((0, Bb.i)(Yb.g)) {}(0, Bb.l)(Yb.g, Sb);
    var ab = hb(37054),
      Hb = hb(39705),
      wb = hb(37050);
    class Zb extends((0, Bb.i)(wb.g)) {
      constructor(bb, ub, hb) {
        super(bb, ub, hb), (0, ab.h)(bb)
      }
      dispose(bb) {
        (0, ab.i)(this._material), super.dispose(bb)
      }
    }(0, Bb.l)(wb.g, Zb), (0, wb.j)({
      disableUnusedSpecularTerm: Bb.e,
      isLightingDisabled: bb => bb instanceof Hb.StandardMaterial && bb.disableLighting
    });
    var Xb = hb(38315);
    class pb extends((0, Bb.i)(Xb.e)) {}(0, Bb.l)(Xb.e, pb);
    var ob = hb(38414),
      Ab = hb(36895),
      lb = hb(37746),
      Kb = hb(36864);
    class Wb extends((0, Bb.i)(ob.e)) {}(0, Bb.l)(ob.e, Wb);
    class Cb extends((0, Bb.i)(Ab.d)) {}(0, Bb.l)(Ab.d, Cb);
    class db extends((0, Bb.i)(lb.k)) {}(0, Bb.l)(lb.k, db);
    class rb extends((0, Bb.i)(Kb.d)) {}(0, Bb.l)(Kb.d, rb)
  },
  40574: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ib,
      i: () => lb,
      l: () => Fb
    });
    var Bb = hb(39705),
      Ob = hb(40580),
      Gb = hb(40610),
      Ub = hb(40586),
      Lb = hb(37425),
      Yb = hb(37436),
      Sb = hb(37438),
      ab = hb(37444),
      Hb = hb(36846),
      wb = hb(36855),
      Zb = hb(40588),
      Xb = hb(36830),
      pb = hb(36836),
      ob = hb(36814);

    function Ab(bb, ub) {
      return Object.assign((function(bb, hb, Bb, Ob) {
        return ub(this.featureState, bb, hb, Bb, Ob)
      }), {
        JZ: bb
      })
    }

    function lb(bb) {
      const ub = class extends Zb.c {
          constructor(ub, hb) {
            const Bb = (0, pb._)(ub),
              Ob = Bb && (0, pb.v)(Bb, bb.name);
            for (var Gb = arguments.length, Ub = new Array(Gb > 2 ? Gb - 2 : 0), Lb = 2; Lb < Gb; Lb++) Ub[Lb - 2] = arguments[Lb];
            super(ub, bb.name, bb.priority, Ob ? Ob.defines : bb.defines(...Ub), !1), this.featureState = void 0, this.featureState = hb, this._pluginManager._addPlugin(this), this._enable(!0), (0, pb.w)(this._material, bb, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return bb.className
          }
          isCompatible(bb) {
            return bb === ob.d.GLSL || bb === ob.d.WGSL
          }
        },
        hb = (0, Xb.i)(bb);
      for (const [Bb, Ob] of Object.entries(Xb.b)) {
        const Gb = bb[Bb];
        if (Gb) {
          const bb = hb[Bb];
          Object.defineProperty(ub.prototype, Ob, {
            value: Ab(Gb, bb),
            writable: !0,
            configurable: !0
          })
        }
      }
      return ub
    }
    class Kb extends(lb(Lb.b)) {}
    var Wb = hb(39277),
      Cb = hb(40592);
    const db = new WeakMap;

    function rb(bb, ub, hb) {
      let Bb = db.get(hb);
      Bb || (Bb = new Map, db.set(hb, Bb));
      const {
        url: Ob
      } = bb;
      let Gb = Bb.get(Ob);
      return Gb || (Gb = async function(bb, ub, hb) {
        const {
          width: Bb,
          height: Ob
        } = bb.getSize(), Gb = Math.round(Ob / Bb), Lb = ub && ub.byteLength === Bb * Bb * Gb * 4 ? ub : bb._readPixelsSync();
        return new Cb.d(Lb, Bb, Bb, Gb, Wb.c.TEXTUREFORMAT_RGBA, hb, !0, !1, Ub.c.NEAREST_NEAREST_MIPLINEAR)
      }(bb, ub, hb), Bb.set(Ob, Gb), Gb.catch((() => {
        Bb.delete(Ob)
      }))), Gb
    }
    var jb = hb(37449);
    class nb extends(lb(Yb.h)) {
      constructor(bb, ub) {
        super(bb, ub), ub.textures.forEach(((bb, ub) => {
          bb.mirror.onLoadObservable.add((bb => {
            this.setTextureArrayData(bb, ub).catch((bb => {
              console.error(`Failed to build texture array for atlas ${ub}`, bb)
            }))
          }))
        })), (0, jb.h)(ub, bb.shaderLanguage)
      }
      async setTextureArrayData(bb, ub) {
        var hb, Bb;
        const Ob = this.featureState,
          {
            width: Gb,
            height: Ub
          } = bb.getSize(),
          Lb = Ob.useWebGL2 ? await rb(bb, null !== (hb = null === (Bb = Ob.sources.pixels) || void 0 === Bb ? void 0 : Bb[ub]) && void 0 !== hb ? hb : null, this._material.ZN()) : null;
        (0, jb.b)(this._material, Ob, ub, Lb, Gb, Math.round(Ub / Gb), this._material.shaderLanguage)
      }
    }
    var Db = hb(40598),
      xb = hb(39752),
      zb = hb(36720),
      gb = hb(40604),
      ib = hb(39862),
      vb = hb(39736),
      tb = hb(40551),
      Jb = hb(37217),
      eb = hb(40608);
    class Nb extends Db.d {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const sb = {
      Mesh: gb.b,
      TransformNode: tb.d,
      VZ: Db.d,
      VertexBuffer: Db.e,
      BoundingInfo: xb.e,
      YX: zb.YX,
      ArenaBuffer: Nb,
      SubMesh: vb.c,
      VertexData: ib.c,
      MirroredGeometry: eb.b,
      meshFromArrays: eb.e,
      plainMeshFromArrays: eb.h
    };
    (0, Jb.f)(sb);
    var Mb = hb(37054);
    class mb extends(lb(ab.i)) {
      constructor(bb, ub) {
        if (super(bb, ub), bb instanceof Bb.StandardMaterial && ub.dirLightCount > 0) {
          const ub = bb,
            hb = ub._blockDirtyMechanism;
          ub._blockDirtyMechanism = !0, bb.disableLighting = !0, ub._blockDirtyMechanism = hb;
          const Bb = (0, pb._)(bb);
          Bb && (Bb.disableLighting = !0, (0, pb.Y)(Bb))
        }(0, Mb.h)(bb)
      }
      dispose(bb) {
        (0, Mb.i)(this._material), super.dispose(bb)
      }
    }

    function Ib(bb, ub) {
      if (!(ub instanceof Bb.StandardMaterial) || ub.specularTexture) return;
      const {
        r: hb,
        g: Ob,
        b: Gb
      } = ub.specularColor;
      0 === hb && 0 === Ob && 0 === Gb && (bb.SPECULARTERM = !1)
    }(0, ab.f)({
      disableUnusedSpecularTerm: Ib
    });
    var Pb = hb(36928),
      qb = hb(37230);
    const Eb = new RegExp(`^#define ${Sb.e}\\s*$`, "m");
    class yb extends(lb(Sb.j)) {
      constructor(bb, ub) {
        super(bb, ub), this.FZ = !1, ub.ditherOnlyWhileFading && (qb.h.add(bb), this.prewarmDitherTwins(bb))
      }
      prewarmDitherTwins(bb) {
        const ub = new WeakSet;
        bb.onEffectCreatedObservable.add((hb => {
          let {
            effect: Bb,
            subMesh: Ob
          } = hb;
          if (this.featureState.prewarmingDither || ub.has(Bb)) return;
          ub.add(Bb);
          const Gb = null === Ob || void 0 === Ob ? void 0 : Ob.getMesh();
          Gb && !Eb.test(Bb.defines) && bb.ZN().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Gb) || ub.delete(Bb)
          }))
        }))
      }
      prewarmDither(bb) {
        if (this.FZ || bb.tC()) return !1;
        const ub = new vb.c(0, 0, 0, 0, 0, bb, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(bb, ub)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== ub.effect
      }
      dispose(bb) {
        this.FZ = !0, super.dispose(bb)
      }
    }
    const Vb = new Map;

    function Fb(bb, ub) {
      Vb.set(bb, ub)
    }
    Fb(Lb.b, Kb), Fb(Yb.h, nb), Fb(Sb.j, yb), Fb(ab.i, mb), (0, Hb.c)({
      create: (bb, ub) => {
        const hb = new Bb.StandardMaterial(bb.name, ub);
        return (0, Pb.q)(bb, hb), hb.detailMap._pluginDefineNames
      },
      write: (bb, ub, hb) => {
        (0, Pb.X)(bb.mirror, ub, hb)
      },
      addFeature: (bb, ub, hb) => {
        const Bb = Vb.get(ub.feature);
        if (!Bb) throw new Error(`${ub.feature.name} has no plugin class (registerPluginClass)`);
        new Bb(bb.mirror, ub.state, ...hb)
      },
      texture: (bb, ub, hb) => {
        let {
          url: Bb,
          noMipmap: Ob,
          invertY: Gb,
          samplingMode: Lb,
          data: Yb,
          sets: Sb
        } = hb;
        if (!Yb) {
          const hb = new Ub.c(Bb, ub, Ob, Gb, Lb);
          return Object.assign(hb, Sb), void(0, wb.F)(bb, hb)
        }
        const ab = {},
          Hb = new Promise(((bb, ub) => {
            ab.onLoad = bb, ab.onError = (bb, hb) => {
              ub(new Error(`${Yb.context}: ${(null===hb||void 0===hb?void 0:hb.message)||bb||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: Zb,
            bytes: Xb,
            label: pb
          } = Yb,
          ob = {
            noMipmap: Ob,
            invertY: !1,
            samplingMode: Lb,
            ...ab,
            mimeType: Zb,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          Ab = new Ub.c(null, ub, ob);
        Pb.t.set(Ab, Hb), Object.assign(Ab, Sb), Ab.updateURL(Bb, Xb);
        const lb = Ab.getInternalTexture();
        lb && (lb.label = pb), bb.uvSet = Ab.coordinatesIndex, bb.matrix.set((0, Pb.P)(Ab)), (0, wb.F)(bb, Ab)
      },
      cube: (bb, ub, hb) => {
        let {
          rootUrl: Bb,
          files: Gb,
          noMipmap: Lb,
          luminance: Yb
        } = hb;
        const {
          samplingMode: Sb
        } = bb.sampler, ab = Sb === (0, wb.w)(Lb) ? null : () => {
          (0, Pb.M)(Hb, Sb)
        }, Hb = new Ob.b(Bb, ub, null, Lb, Gb, ab, null, (0, wb.v)(Yb));
        Hb.coordinatesMode = Ub.c.SKYBOX_MODE, (0, wb.F)(bb, Hb)
      },
      canvas: (bb, ub, hb) => {
        let {
          width: Bb,
          height: Ob,
          mipmaps: Lb,
          samplingMode: Yb,
          hasAlpha: Sb = !1,
          wrap: ab = Ub.c.CLAMP_ADDRESSMODE
        } = hb;
        const Hb = new Gb.e(ub, {
          width: Bb,
          height: Ob
        }, bb, Lb, Yb);
        Hb.hasAlpha = Sb, Hb.wrapU = ab, Hb.wrapV = ab;
        const wb = (0, Pb.A)(Hb);
        return (0, Pb.E)(wb, Hb), wb
      }
    })
  },
  40608: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => ab,
      e: () => Hb,
      h: () => wb
    });
    var Bb = hb(40598),
      Ob = hb(39533),
      Gb = hb(39752),
      Ub = hb(39869),
      Lb = hb(40604),
      Yb = hb(39862),
      Sb = hb(37110);
    class ab extends Ub.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (bb, ub) => {
          this.releaseUnlessInstanced(ub)
        }, this.onLinked = null
      }
      link(bb) {
        var ub;
        (0, Sb.n)(bb), this.model = bb, null === (ub = this.onLinked) || void 0 === ub || ub.call(this, bb)
      }
      relink() {
        this.release();
        const bb = [];
        for (const Ob of Object.values(this._vertexBuffers))
          if (!Ob.getIsInstanced()) {
            const {
              byteOffset: ub,
              byteStride: hb,
              type: Bb,
              normalized: Gb
            } = Ob;
            bb.push({
              kind: Ob.getKind(),
              data: Ob.getData(),
              offset: ub,
              stride: hb,
              components: Ob.getSize(),
              glType: Bb,
              isNormalized: Gb
            })
          } const ub = this._indices.length ? this._indices : null,
          {
            minimum: hb,
            maximum: Bb
          } = this.extend;
        this.link(new Sb.h(bb, ub, this.getTotalVertices(), new Float64Array(hb.ZBb()), new Float64Array(Bb.ZBb())))
      }
      copy(bb) {
        if (!this.model) return super.copy(bb);
        const ub = new ab(bb, this.ZN()),
          hb = this.XBb(void 0, !0);
        hb && ub.setIndices(hb);
        let Ub = !1;
        for (const Gb in this._vertexBuffers) {
          const bb = this._vertexBuffers[Gb],
            hb = bb.getData();
          if (!hb) continue;
          const Lb = bb.getSize(),
            {
              type: Yb,
              byteOffset: Sb,
              byteStride: ab,
              normalized: Hb
            } = bb;
          Ub ||= bb.isUpdatable();
          const wb = bb.getIsInstanced() ? (hb instanceof Array ? 4 * hb.length : hb.byteLength) / ab : this.getTotalVertices(),
            Zb = (0, Ob.s)(hb, Lb, Yb, Sb, ab, wb, !0),
            Xb = {
              updatable: bb.isUpdatable(),
              stride: Lb,
              type: Yb,
              normalized: Hb,
              takeBufferOwnership: !0,
              instanced: bb.getIsInstanced()
            };
          ub.setVerticesBuffer(new Bb.e(this.UX(), Zb, Gb, Xb), wb)
        }
        return ub._updatable = Ub, ub._boundingInfo = new Gb.e(this.extend.minimum, this.extend.maximum), ub.relink(), ub
      }
      static mergeMeshes(bb, ub, hb, Bb, Ob, Gb) {
        const Yb = bb[0].ZN(),
          Sb = new Lb.b(bb[0].name + "_merged", Yb),
          Hb = new ab(Ub.b.RandomId(), Yb, void 0, !1, Sb);
        try {
          if (!Lb.b.MergeMeshes(bb, ub, hb, Sb, Ob, Gb)) return Sb.dispose(), null
        } catch (wb) {
          throw Sb.dispose(), wb
        }
        return Hb.relink(), Sb
      }
      removeVerticesData(bb) {
        this.releaseUnlessInstanced(bb), super.removeVerticesData(bb)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(bb) {
        var ub;
        bb && null !== (ub = this.getVertexBuffer(bb)) && void 0 !== ub && ub.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Sb.x)(this.model), this.model = null)
      }
    }

    function Hb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Lb.b(bb, hb);
      const Ob = (0, Sb.l)(ub),
        {
          positions: Gb,
          normals: Hb,
          uvs: wb,
          indices: Zb,
          named: Xb = {}
        } = ub,
        pb = new Yb.c;
      pb.positions = Gb, pb.normals = null !== Hb && void 0 !== Hb ? Hb : null, pb.uvs = null !== wb && void 0 !== wb ? wb : null, pb.indices = Zb;
      const ob = new ab(Ub.b.RandomId(), hb, pb, !1, Bb);
      for (const {
          kind: Ub,
          components: Lb
        }
        of Ob.vertexAttributes) Ub in Xb && Bb.setVerticesData(Ub, Xb[Ub], !1, Lb);
      return ob.link(Ob), Bb
    }

    function wb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Ob = new Lb.b(bb, hb),
        {
          positions: Gb,
          normals: Ub,
          uvs: Sb,
          indices: ab
        } = ub;
      return Object.assign(new Yb.c, {
        positions: Gb,
        normals: Ub,
        uvs: Sb,
        indices: ab
      }).applyToMesh(Ob, Bb), Ob
    }
  },
  8549: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ab,
      d: () => Lb,
      g: () => Yb
    });
    var Bb = hb(2100),
      Ob = hb(1133),
      Gb = hb(2104);
    const Ub = ",";

    function Lb(bb) {
      if (!bb) return [];
      const ub = new Set,
        hb = [];
      for (const Bb of bb.split(Ub)) {
        const bb = Bb.trim();
        if ((0, Gb.g)(bb) && !ub.has(bb) && (ub.add(bb), hb.push(bb), hb.length >= Ob.q)) break
      }
      return hb
    }

    function Yb(bb) {
      const ub = new Set,
        hb = [];
      for (const Bb of bb)
        if ((0, Gb.g)(Bb) && !ub.has(Bb) && (ub.add(Bb), hb.push(Bb), hb.length >= Ob.q)) break;
      return hb.join(Ub)
    }

    function Sb() {
      return Yb(Gb.d)
    }

    function ab(bb) {
      var ub;
      return "emote" === bb ? Sb() : null !== (ub = Hb[bb][0]) && void 0 !== ub ? ub : wb[bb]
    }
    const Hb = Ob.y.reduce(((bb, ub) => {
        const hb = [];
        for (const Gb in Bb.c[ub]) {
          var Ob;
          "default" === (null === (Ob = (0, Bb.h)(ub, Gb)) || void 0 === Ob ? void 0 : Ob.cosmeticPack) && hb.push(Gb)
        }
        return bb[ub] = hb, bb
      }), {}),
      wb = Ob.y.reduce(((bb, ub) => (bb[ub] = Object.keys(Bb.c[ub])[0], bb)), {})
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);