export const id = 153;
export const ids = [153];
export const modules = {
  40179: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      openMobLineupPreview: () => ob,
      openMobPreview: () => Kb,
      openPetPreview: () => lb
    });
    var Ab = Ub(38898),
      Mb = Ub(39185),
      Tb = Ub(40186),
      Eb = Ub(36587),
      Yb = Ub(36392),
      Bb = Ub(39347),
      eb = Ub(40205),
      vb = Ub(37803),
      Lb = Ub(36477),
      Pb = Ub(36460),
      Xb = Ub(36386),
      jb = Ub(37709),
      Rb = Ub(37700),
      kb = Ub(37437),
      yb = Ub(37486),
      Zb = Ub(37458),
      Db = Ub(37134),
      zb = Ub(2549),
      xb = Ub(36959);
    Ub(40207), Ub(39611), Ub(40214);
    const ib = 22,
      fb = 13,
      mb = Math.PI - Math.PI / 16,
      pb = 6,
      Nb = Math.PI / 4;
    let Wb = null;
    const Hb = {},
      Ib = new Map;

    function db() {
      if (null !== Wb) return Wb;
      const bb = document.createElement("canvas");
      bb.classList.add("MobPreviewCanvas");
      const ab = new Ab.d(bb, !0, {
        preserveDrawingBuffer: !0
      });
      ab.hUb = (0, zb.h)().Fj.engine.hUb;
      const Ub = new Mb.c(ab);
      Ub.clearColor = new Eb.b(0, 0, 0, 0), Ub.ambientColor = new Eb.Color3(1, 1, 1);
      const eb = new Tb.c("ek", Math.PI / 2, Math.PI / 2, ib, Yb.Pj.Zero(), Ub),
        vb = new Bb.d("light", new Yb.Pj(-.1, 1, -.3), Ub);
      return vb.diffuse = new Eb.Color3(1, 1, 1), vb.specular = new Eb.Color3(1, 1, 1), vb.groundColor = new Eb.Color3(.5, .5, .5), Wb = {
        engine: ab,
        ZR: Ub,
        canvas: bb,
        camera: eb
      }, Wb
    }

    function Fb(bb) {
      return Hb[bb] ??= (0, kb.p)(bb, db().ZR, !0).catch((ab => {
        throw delete Hb[bb], ab
      })), Hb[bb]
    }

    function hb(bb) {
      let ab = Ib.get(bb);
      return ab || (ab = Db.D[bb].loadModel(db().ZR, !1).then((bb => (bb.Yz(!1), bb)), (ab => {
        throw Ib.delete(bb), ab
      })), Ib.set(bb, ab)), ab
    }

    function Gb(bb) {
      var ab, Ub, Ab;
      let {
        mobType: Mb,
        variation: Tb,
        animation: Eb
      } = bb, Bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, ib = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const pb = null !== (ab = null === Bb || void 0 === Bb ? void 0 : Bb.size) && void 0 !== ab ? ab : 1,
        Nb = null !== (Ub = null === Bb || void 0 === Bb ? void 0 : Bb.cosmetics) && void 0 !== Ub ? Ub : [],
        Wb = null !== (Ab = null === Bb || void 0 === Bb ? void 0 : Bb.dD) && void 0 !== Ab ? Ab : null;
      let Hb = !1,
        Ib = null,
        Gb = null;
      const {
        engine: Qb,
        ZR: qb
      } = db(), ub = qb.onBeforeRenderObservable.add((() => {
        var bb;
        null === (bb = Gb) || void 0 === bb || bb.render(Qb.getDeltaTime())
      })), rb = null === Wb ? null : hb(Wb).catch((bb => (console.error(`Mob preview: could not load ${Wb}`, bb), null)));
      return Promise.all([Fb(Mb), rb]).then((bb => {
        var ab, Ub, Ab;
        let [Bb, Fb] = bb;
        if (Hb) return;
        const hb = (0, zb.h)().Fj.vW,
          {
            hitBoxDimensions: Qb
          } = (0, vb.b)(Mb),
          qb = fb / Math.max(Qb.height, Qb.width);
        if (Ib = (0, kb.j)(Mb, qb * pb, !0, !0), hb.setPosition(Ib, ib, -Qb.height * qb / 2, 0), hb.setRotationEulerY(Ib, mb), Bb.meshApi instanceof Zb.e && Nb.length > 0)
          for (const [Mb, Tb] of Nb) Bb.meshApi.updatePlayerCosmetic(null, Ib, Mb, Tb, !0);
        else Bb.meshApi.updateVariation(Ib, Mb, null !== Tb && void 0 !== Tb ? Tb : "default");
        null !== Wb && null !== Fb && function(bb, ab, Ub, Ab) {
          var Mb;
          const Tb = Db.D[bb],
            Eb = (0, jb.p)();
          (0, jb.i)(Tb, null === (Mb = (0, yb.b)(Ub).meshMetadata.heldItemPositionParams) || void 0 === Mb ? void 0 : Mb.itemOffset, Eb);
          const Bb = xb.b * Eb.nY.y,
            vb = Eb.usesQuaternion ? Eb.quaternion : Yb.Quaternion.FromEulerVector(Eb.rotation),
            Lb = new eb.b(`${ab.name}Hand`, db().ZR);
          Lb.position.EUb((0, Rb.c)(Eb.position, vb, Bb, Tb.heldModelOffsetY())), Lb.rotationQuaternion = vb, Lb.nY.set(Eb.nY.x, Bb, Eb.nY.z), ab.clone(`${ab.name}Held`, Lb).Yz(!0);
          const Pb = (0, zb.h)().Fj.vW;
          Pb.attachTransformNode(Lb, Ab, Pb.getNamedNode(Ab, "ArmRightMesh"))
        }(Wb, Fb, Mb, Ib), hb.set(Ib, "aOpacity", 1);
        const ub = null !== (ab = (0, yb.b)(Mb).meshMetadata.lifeformTypeForModelOverride) && void 0 !== ab ? ab : Mb;
        Gb = new Xb.AnimatorState, Gb.thinInstMgr = hb, Gb.jW = Ib, Gb.MUb = hb.GUb(Ib, 0), Gb.modelLifeformType = ub, Gb.nodeNameAliases = null !== (Ub = null === (Ab = (0, Lb.e)(ub)) || void 0 === Ab ? void 0 : Ab.nodeNameAliases) && void 0 !== Ub ? Ub : null, Gb.startAnimation(Eb, Pb.d.Movement)
      })).catch((bb => {
        console.error(`Mob preview: could not load ${Mb}`, bb)
      })), () => {
        Hb = !0, qb.onBeforeRenderObservable.remove(ub), null !== Ib && (0, zb.h)().Fj.vW.delete(Ib)
      }
    }

    function Qb(bb, ab) {
      return Gb({
        mobType: "NPC",
        variation: null,
        animation: bb.animation
      }, bb, ab)
    }

    function qb(bb) {
      let {
        mobType: ab,
        variation: Ub,
        metaInfo: Ab,
        tamed: Mb
      } = bb, Tb = !1, Eb = null, Yb = 0;
      const Bb = (0, zb.h)(),
        eb = Bb.Fj.vW,
        vb = bb => {
          Yb += Nb * (bb / 1e3) % (2 * Math.PI), eb.setRotationEulerY(Eb, Yb)
        };
      return Fb(ab).then((bb => {
        if (Tb) return;
        Eb = (0, kb.j)(ab, pb, !0, !0), eb.setPosition(Eb, 0, -pb, 0), bb.meshApi.updateVariation(Eb, ab, Ub);
        const Yb = {
          wool: "Sheared" !== Ab,
          saddle: "Saddled" === Ab,
          antlers: "Antlers" === Ab,
          collar: Mb
        };
        for (const [ab, Ub] of Object.entries(Yb)) eb.hasGroup(Eb, ab) && bb.meshApi.setMeshGroupVisibility(Eb, ab, Ub);
        eb.set(Eb, "aOpacity", 1), Bb.on("renderTickBegin", vb)
      })).catch((bb => {
        console.error(`Pet preview: could not load ${ab}`, bb)
      })), () => {
        Tb = !0, Bb.off("renderTickBegin", vb), null !== Eb && eb.delete(Eb)
      }
    }
    class ub {
      constructor(bb, ab) {
        this.place = ab, this.remove = null;
        const {
          engine: Ub,
          ZR: Ab,
          canvas: Mb
        } = db();
        bb.appendChild(Mb), Ub.resize(), Ub.runRenderLoop((() => {
          Ab.render()
        }))
      }
      show(bb) {
        var ab;
        null === (ab = this.remove) || void 0 === ab || ab.call(this), this.remove = this.place(bb)
      }
      resize(bb, ab) {
        const {
          engine: Ub,
          canvas: Ab
        } = db();
        Ab.width = bb, Ab.height = ab, Ub.resize()
      }
      close() {
        var bb;
        db().engine.stopRenderLoop(), null === (bb = this.remove) || void 0 === bb || bb.call(this), this.remove = null
      }
    }
    class rb {
      constructor(bb) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new ub(bb, (() => () => {}))
      }
      show(bb) {
        bb.figures !== this.view.figures && this.preload(bb.figures), this.view = bb, this.place()
      }
      resize(bb, ab) {
        this.preview.resize(bb, ab), this.aspect = bb / ab, this.place()
      }
      close() {
        this.preview.close();
        for (const bb of this.placed) null === bb || void 0 === bb || bb.remove();
        this.placed = []
      }
      preload(bb) {
        const ab = () => {};
        Fb("NPC").catch(ab);
        for (const {
            dD: Ub
          }
          of bb) null !== Ub && hb(Ub).catch(ab)
      }
      place() {
        const {
          figures: bb,
          shown: ab
        } = this.view, Ub = bb.map(((Ub, Ab) => {
          var Mb;
          const Tb = null !== (Mb = this.placed[Ab]) && void 0 !== Mb ? Mb : null;
          if (!ab[Ab]) return null === Tb || void 0 === Tb || Tb.remove(), null;
          const Eb = (Yb = (Ab + .5) / bb.length, Bb = this.aspect, (.5 - Yb) * (2 * ib * Math.tan(db().camera.fov / 2)) * Bb);
          var Yb, Bb;
          return null !== Tb && Tb.figure === Ub && Tb.x === Eb ? Tb : (null === Tb || void 0 === Tb || Tb.remove(), {
            figure: Ub,
            x: Eb,
            remove: Qb(Ub, Eb)
          })
        }));
        for (const Ab of this.placed.slice(bb.length)) null === Ab || void 0 === Ab || Ab.remove();
        this.placed = Ub
      }
    }

    function Kb(bb) {
      return new ub(bb, Gb)
    }

    function ob(bb) {
      return new rb(bb)
    }

    function lb(bb) {
      return new ub(bb, qb)
    }
  },
  38104: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Pb
    });
    var Ab = Ub(36487),
      Mb = Ub(36500),
      Tb = Ub(36785),
      Eb = Ub(36508),
      Yb = Ub(36495);

    function Bb(bb) {
      return `\n\t\t\t\t${(0,Yb.A)(bb,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, Yb.G)(bb, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, Yb.G)(bb, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, Yb.p)(bb, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function eb(bb, ab) {
      let Ub = (0, Yb.Lb)(bb, "skele" + (ab - 1));
      for (let Mb = ab - 2; Mb >= 0; Mb--) Ub = (0, Yb.zb)(bb, `boneIdx == ${Mb}`, (0, Yb.Lb)(bb, `skele${Mb}`), Ub);
      const Ab = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,Yb.G)(bb,"int","boneIdx",(0,Yb.Gb)(bb,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,Yb.G)(bb,"vec3","bone",Ub)}\n\t\t\t\t${(0,Yb.G)(bb,"vec2","pivot",(0,Yb.p)(bb,"vec2","0.0",`${(0,Yb.Sb)(bb,"position")}.z`))}\n\t\t\t\t${(0,Yb.eb)(bb)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${Ab}));`:`positionUpdated.yz += ${Ab};`}\n\t\t`
    }

    function vb(bb) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,Yb.p)(bb,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const Lb = {
        x: 0,
        y: 0,
        z: 0,
        Zab(bb, ab) {
          return this.x = bb[ab], this.y = bb[ab + 1], this.z = bb[ab + 2], this
        }
      },
      Pb = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (bb, ab) => ({
          ...(0, Ab.d)("CAPE"),
          BLOXD_CAPE_BONES: `${bb}`,
          BLOXD_CAPE_MAX_Y: (0, Mb.jb)(ab)
        }),
        getUniforms(bb) {
          return (0, Tb.c)(function(bb) {
            const ab = [];
            for (let Ub = 0; Ub < bb; Ub++) ab.push({
              name: `skele${Ub}`,
              type: "highp vec3"
            });
            return ab
          }(this.skeleLen), "vertex", bb)
        },
        bind(bb) {
          for (let ab = 0; ab < this.skeleLen; ab++) bb.updateVector3(`skele${ab}`, Lb.Zab(this.skele, 3 * ab))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(bb, ab) {
          return "vertex" !== bb ? null : {
            CUSTOM_VERTEX_DEFINITIONS: Bb(ab),
            CUSTOM_VERTEX_UPDATE_POSITION: eb(ab, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: vb(ab)
          }
        }
      };
    (0, Eb.k)(Pb)
  },
  38003: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => vb,
      g: () => Lb
    });
    var Ab = Ub(36487),
      Mb = Ub(36785),
      Tb = Ub(36495),
      Eb = Ub(36508);
    const Yb = "bloxdTextLodBias",
      Bb = [{
        name: Yb,
        type: "float"
      }],
      eb = "bloxdTextSample",
      vb = {
        planes: -.5,
        boards: -.5
      },
      Lb = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, Ab.d)("TEXT_SAMPLER"),
        getUniforms: bb => (0, Mb.c)(Bb, "fragment", bb),
        bind(bb) {
          bb.updateFloat(Yb, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(bb, ab) {
          if ("fragment" !== bb) return null;
          const Ub = (0, Tb.N)(ab, `vec4 ${eb}(sampler2D s, vec2 uv, float bias)`, `fn ${eb}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            Ab = (0, Tb.N)(ab, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            Mb = `${(0,Tb.W)(ab,"vDiffuseUV")} + uvOffset`,
            Eb = (0, Tb.N)(ab, `${eb}(diffuseSampler, ${Mb}, ${(0,Tb.Lb)(ab,Yb)})`, `${eb}(diffuseSampler, diffuseSamplerSampler, ${Mb}, ${(0,Tb.Lb)(ab,Yb)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${Ub} {\n\t\t\t\t\t${(0,Tb.G)(ab,"vec4","texel",Ab)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,Tb.p)(ab,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,Tb.p)(ab,"vec3","0.0")}, ${(0,Tb.p)(ab,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, Tb.J)(ab)]: `baseColor = ${Eb};`
          }
        }
      };
    (0, Eb.k)(Lb)
  },
  40214: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      CapeMaterialPlugin: () => zb,
      HueTintMaterialPlugin: () => xb,
      LifeformMaterialPlugin: () => ib,
      OverlayMaterialPlugin: () => fb
    });
    var Ab = Ub(40217),
      Mb = Ub(37352);
    class Tb extends((0, Ab.d)(Mb.c)) {}(0, Ab.f)(Mb.c, Tb);
    var Eb = Ub(36483);
    class Yb extends((0, Ab.d)(Eb.e)) {}(0, Ab.f)(Eb.e, Yb);
    var Bb = Ub(37202);
    class eb extends((0, Ab.d)(Bb.e)) {}(0, Ab.f)(Bb.e, eb);
    var vb = Ub(36777),
      Lb = Ub(39361),
      Pb = Ub(36768);
    class Xb extends((0, Ab.d)(Pb.f)) {
      constructor(bb, ab, Ub) {
        super(bb, ab, Ub), (0, vb.f)(bb)
      }
      dispose(bb) {
        (0, vb.g)(this._material), super.dispose(bb)
      }
    }(0, Ab.f)(Pb.f, Xb), (0, Pb.j)({
      disableUnusedSpecularTerm: Ab.b,
      isLightingDisabled: bb => bb instanceof Lb.StandardMaterial && bb.disableLighting
    });
    var jb = Ub(38003);
    class Rb extends((0, Ab.d)(jb.g)) {}(0, Ab.f)(jb.g, Rb);
    var kb = Ub(38104),
      yb = Ub(36596),
      Zb = Ub(37468),
      Db = Ub(36540);
    class zb extends((0, Ab.d)(kb.b)) {}(0, Ab.f)(kb.b, zb);
    class xb extends((0, Ab.d)(yb.c)) {}(0, Ab.f)(yb.c, xb);
    class ib extends((0, Ab.d)(Zb.m)) {}(0, Ab.f)(Zb.m, ib);
    class fb extends((0, Ab.d)(Db.b)) {}(0, Ab.f)(Db.b, fb)
  },
  40217: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => ob,
      d: () => Zb,
      f: () => Cb
    });
    var Ab = Ub(39361),
      Mb = Ub(40223),
      Tb = Ub(40267),
      Eb = Ub(40230),
      Yb = Ub(37166),
      Bb = Ub(37177),
      eb = Ub(37180),
      vb = Ub(37188),
      Lb = Ub(36524),
      Pb = Ub(36533),
      Xb = Ub(40238),
      jb = Ub(36508),
      Rb = Ub(36512),
      kb = Ub(36495);

    function yb(bb, ab) {
      return Object.assign((function(bb, Ub, Ab, Mb) {
        return ab(this.featureState, bb, Ub, Ab, Mb)
      }), {
        uX: bb
      })
    }

    function Zb(bb) {
      const ab = class extends Xb.e {
          constructor(ab, Ub) {
            const Ab = (0, Rb.W)(ab),
              Mb = Ab && (0, Rb.w)(Ab, bb.name);
            for (var Tb = arguments.length, Eb = new Array(Tb > 2 ? Tb - 2 : 0), Yb = 2; Yb < Tb; Yb++) Eb[Yb - 2] = arguments[Yb];
            super(ab, bb.name, bb.priority, Mb ? Mb.defines : bb.defines(...Eb), !1), this.featureState = void 0, this.featureState = Ub, this._pluginManager._addPlugin(this), this._enable(!0), (0, Rb.x)(this._material, bb, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return bb.className
          }
          isCompatible(bb) {
            return bb === kb.d.GLSL || bb === kb.d.WGSL
          }
        },
        Ub = (0, jb.g)(bb);
      for (const [Ab, Mb] of Object.entries(jb.b)) {
        const Tb = bb[Ab];
        if (Tb) {
          const bb = Ub[Ab];
          Object.defineProperty(ab.prototype, Mb, {
            value: yb(Tb, bb),
            writable: !0,
            configurable: !0
          })
        }
      }
      return ab
    }
    class Db extends(Zb(Yb.d)) {}
    var zb = Ub(38898),
      xb = Ub(40240);
    const ib = new WeakMap;

    function fb(bb, ab, Ub) {
      let Ab = ib.get(Ub);
      Ab || (Ab = new Map, ib.set(Ub, Ab));
      const {
        url: Mb
      } = bb;
      let Tb = Ab.get(Mb);
      return Tb || (Tb = async function(bb, ab, Ub) {
        const {
          width: Ab,
          height: Mb
        } = bb.getSize(), Tb = Math.round(Mb / Ab), Yb = ab && ab.byteLength === Ab * Ab * Tb * 4 ? ab : bb._readPixelsSync();
        return new xb.e(Yb, Ab, Ab, Tb, zb.d.TEXTUREFORMAT_RGBA, Ub, !0, !1, Eb.b.NEAREST_NEAREST_MIPLINEAR)
      }(bb, ab, Ub), Ab.set(Mb, Tb), Tb.catch((() => {
        Ab.delete(Mb)
      }))), Tb
    }
    var mb = Ub(37194);
    class pb extends(Zb(Bb.g)) {
      constructor(bb, ab) {
        super(bb, ab), ab.textures.forEach(((bb, ab) => {
          bb.mirror.onLoadObservable.add((bb => {
            this.setTextureArrayData(bb, ab).catch((bb => {
              console.error(`Failed to build texture array for atlas ${ab}`, bb)
            }))
          }))
        })), (0, mb.h)(ab, bb.shaderLanguage)
      }
      async setTextureArrayData(bb, ab) {
        var Ub, Ab;
        const Mb = this.featureState,
          {
            width: Tb,
            height: Eb
          } = bb.getSize(),
          Yb = Mb.useWebGL2 ? await fb(bb, null !== (Ub = null === (Ab = Mb.sources.pixels) || void 0 === Ab ? void 0 : Ab[ab]) && void 0 !== Ub ? Ub : null, this._material.oN()) : null;
        (0, mb.b)(this._material, Mb, ab, Yb, Tb, Math.round(Eb / Tb), this._material.shaderLanguage)
      }
    }
    var Nb = Ub(40248),
      Wb = Ub(39413),
      Hb = Ub(36392),
      Ib = Ub(40251),
      db = Ub(39534),
      Fb = Ub(39400),
      hb = Ub(40205),
      Gb = Ub(36926),
      Qb = Ub(40260);
    class qb extends Nb.d {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const ub = {
      Mesh: Ib.b,
      TransformNode: hb.b,
      OX: Nb.d,
      VertexBuffer: Nb.g,
      BoundingInfo: Wb.b,
      Pj: Hb.Pj,
      ArenaBuffer: qb,
      SubMesh: Fb.e,
      VertexData: db.c,
      MirroredGeometry: Qb.e,
      meshFromArrays: Qb.h,
      plainMeshFromArrays: Qb.l
    };
    (0, Gb.f)(ub);
    var rb = Ub(36777);
    class Kb extends(Zb(vb.l)) {
      constructor(bb, ab) {
        if (super(bb, ab), bb instanceof Ab.StandardMaterial && ab.dirLightCount > 0) {
          const ab = bb,
            Ub = ab._blockDirtyMechanism;
          ab._blockDirtyMechanism = !0, bb.disableLighting = !0, ab._blockDirtyMechanism = Ub;
          const Ab = (0, Rb.W)(bb);
          Ab && (Ab.disableLighting = !0, (0, Rb.S)(Ab))
        }(0, rb.f)(bb)
      }
      dispose(bb) {
        (0, rb.g)(this._material), super.dispose(bb)
      }
    }

    function ob(bb, ab) {
      if (!(ab instanceof Ab.StandardMaterial) || ab.specularTexture) return;
      const {
        r: Ub,
        g: Mb,
        b: Tb
      } = ab.specularColor;
      0 === Ub && 0 === Mb && 0 === Tb && (bb.SPECULARTERM = !1)
    }(0, vb.i)({
      disableUnusedSpecularTerm: ob
    });
    var lb = Ub(36618),
      tb = Ub(36937);
    const wb = new RegExp(`^#define ${eb.c}\\s*$`, "m");
    class sb extends(Zb(eb.f)) {
      constructor(bb, ab) {
        super(bb, ab), this.cX = !1, ab.ditherOnlyWhileFading && (tb.e.add(bb), this.prewarmDitherTwins(bb))
      }
      prewarmDitherTwins(bb) {
        const ab = new WeakSet;
        bb.onEffectCreatedObservable.add((Ub => {
          let {
            effect: Ab,
            subMesh: Mb
          } = Ub;
          if (this.featureState.prewarmingDither || ab.has(Ab)) return;
          ab.add(Ab);
          const Tb = null === Mb || void 0 === Mb ? void 0 : Mb.getMesh();
          Tb && !wb.test(Ab.defines) && bb.oN().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Tb) || ab.delete(Ab)
          }))
        }))
      }
      prewarmDither(bb) {
        if (this.cX || bb.Jab()) return !1;
        const ab = new Fb.e(0, 0, 0, 0, 0, bb, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(bb, ab)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== ab.effect
      }
      dispose(bb) {
        this.cX = !0, super.dispose(bb)
      }
    }
    const gb = new Map;

    function Cb(bb, ab) {
      gb.set(bb, ab)
    }
    Cb(Yb.d, Db), Cb(Bb.g, pb), Cb(eb.f, sb), Cb(vb.l, Kb), (0, Lb.c)({
      create: (bb, ab) => {
        const Ub = new Ab.StandardMaterial(bb.name, ab);
        return (0, lb.q)(bb, Ub), Ub.detailMap._pluginDefineNames
      },
      write: (bb, ab, Ub) => {
        (0, lb.X)(bb.mirror, ab, Ub)
      },
      addFeature: (bb, ab, Ub) => {
        const Ab = gb.get(ab.feature);
        if (!Ab) throw new Error(`${ab.feature.name} has no plugin class (registerPluginClass)`);
        new Ab(bb.mirror, ab.state, ...Ub)
      },
      texture: (bb, ab, Ub) => {
        let {
          url: Ab,
          noMipmap: Mb,
          invertY: Tb,
          samplingMode: Yb,
          data: Bb,
          sets: eb
        } = Ub;
        if (!Bb) {
          const Ub = new Eb.b(Ab, ab, Mb, Tb, Yb);
          return Object.assign(Ub, eb), void(0, Pb.P)(bb, Ub)
        }
        const vb = {},
          Lb = new Promise(((bb, ab) => {
            vb.onLoad = bb, vb.onError = (bb, Ub) => {
              ab(new Error(`${Bb.context}: ${(null===Ub||void 0===Ub?void 0:Ub.message)||bb||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: Xb,
            bytes: jb,
            label: Rb
          } = Bb,
          kb = {
            noMipmap: Mb,
            invertY: !1,
            samplingMode: Yb,
            ...vb,
            mimeType: Xb,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          yb = new Eb.b(null, ab, kb);
        lb.r.set(yb, Lb), Object.assign(yb, eb), yb.updateURL(Ab, jb);
        const Zb = yb.getInternalTexture();
        Zb && (Zb.label = Rb), bb.uvSet = yb.coordinatesIndex, bb.matrix.set((0, lb.U)(yb)), (0, Pb.P)(bb, yb)
      },
      cube: (bb, ab, Ub) => {
        let {
          rootUrl: Ab,
          files: Tb,
          noMipmap: Yb,
          luminance: Bb
        } = Ub;
        const {
          samplingMode: eb
        } = bb.sampler, vb = eb === (0, Pb.D)(Yb) ? null : () => {
          (0, lb.Q)(Lb, eb)
        }, Lb = new Mb.e(Ab, ab, null, Yb, Tb, vb, null, (0, Pb.C)(Bb));
        Lb.coordinatesMode = Eb.b.SKYBOX_MODE, (0, Pb.P)(bb, Lb)
      },
      canvas: (bb, ab, Ub) => {
        let {
          width: Ab,
          height: Mb,
          mipmaps: Yb,
          samplingMode: Bb,
          hasAlpha: eb = !1,
          wrap: vb = Eb.b.CLAMP_ADDRESSMODE
        } = Ub;
        const Lb = new Tb.c(ab, {
          width: Ab,
          height: Mb
        }, bb, Yb, Bb);
        Lb.hasAlpha = eb, Lb.wrapU = vb, Lb.wrapV = vb;
        const Pb = (0, lb.D)(Lb);
        return (0, lb.E)(Pb, Lb), Pb
      }
    })
  },
  40260: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => vb,
      h: () => Lb,
      l: () => Pb
    });
    var Ab = Ub(40248),
      Mb = Ub(39167),
      Tb = Ub(39413),
      Eb = Ub(39541),
      Yb = Ub(40251),
      Bb = Ub(39534),
      eb = Ub(36821);
    class vb extends Eb.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (bb, ab) => {
          this.releaseUnlessInstanced(ab)
        }, this.onLinked = null
      }
      link(bb) {
        var ab;
        (0, eb.o)(bb), this.model = bb, null === (ab = this.onLinked) || void 0 === ab || ab.call(this, bb)
      }
      relink() {
        this.release();
        const bb = [];
        for (const Mb of Object.values(this._vertexBuffers))
          if (!Mb.getIsInstanced()) {
            const {
              byteOffset: ab,
              byteStride: Ub,
              type: Ab,
              normalized: Tb
            } = Mb;
            bb.push({
              kind: Mb.getKind(),
              data: Mb.getData(),
              offset: ab,
              stride: Ub,
              components: Mb.getSize(),
              glType: Ab,
              isNormalized: Tb
            })
          } const ab = this._indices.length ? this._indices : null,
          {
            minimum: Ub,
            maximum: Ab
          } = this.extend;
        this.link(new eb.d(bb, ab, this.getTotalVertices(), new Float64Array(Ub.qUb()), new Float64Array(Ab.qUb())))
      }
      copy(bb) {
        if (!this.model) return super.copy(bb);
        const ab = new vb(bb, this.oN()),
          Ub = this.uUb(void 0, !0);
        Ub && ab.setIndices(Ub);
        let Eb = !1;
        for (const Tb in this._vertexBuffers) {
          const bb = this._vertexBuffers[Tb],
            Ub = bb.getData();
          if (!Ub) continue;
          const Yb = bb.getSize(),
            {
              type: Bb,
              byteOffset: eb,
              byteStride: vb,
              normalized: Lb
            } = bb;
          Eb ||= bb.isUpdatable();
          const Pb = bb.getIsInstanced() ? (Ub instanceof Array ? 4 * Ub.length : Ub.byteLength) / vb : this.getTotalVertices(),
            Xb = (0, Mb.p)(Ub, Yb, Bb, eb, vb, Pb, !0),
            jb = {
              updatable: bb.isUpdatable(),
              stride: Yb,
              type: Bb,
              normalized: Lb,
              takeBufferOwnership: !0,
              instanced: bb.getIsInstanced()
            };
          ab.setVerticesBuffer(new Ab.g(this.vj(), Xb, Tb, jb), Pb)
        }
        return ab._updatable = Eb, ab._boundingInfo = new Tb.b(this.extend.minimum, this.extend.maximum), ab.relink(), ab
      }
      static mergeMeshes(bb, ab, Ub, Ab, Mb, Tb) {
        const Bb = bb[0].oN(),
          eb = new Yb.b(bb[0].name + "_merged", Bb),
          Lb = new vb(Eb.d.RandomId(), Bb, void 0, !1, eb);
        try {
          if (!Yb.b.MergeMeshes(bb, ab, Ub, eb, Mb, Tb)) return eb.dispose(), null
        } catch (Pb) {
          throw eb.dispose(), Pb
        }
        return Lb.relink(), eb
      }
      removeVerticesData(bb) {
        this.releaseUnlessInstanced(bb), super.removeVerticesData(bb)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(bb) {
        var ab;
        bb && null !== (ab = this.getVertexBuffer(bb)) && void 0 !== ab && ab.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, eb.x)(this.model), this.model = null)
      }
    }

    function Lb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Yb.b(bb, Ub);
      const Mb = (0, eb.k)(ab),
        {
          positions: Tb,
          normals: Lb,
          uvs: Pb,
          indices: Xb,
          named: jb = {}
        } = ab,
        Rb = new Bb.c;
      Rb.positions = Tb, Rb.normals = null !== Lb && void 0 !== Lb ? Lb : null, Rb.uvs = null !== Pb && void 0 !== Pb ? Pb : null, Rb.indices = Xb;
      const kb = new vb(Eb.d.RandomId(), Ub, Rb, !1, Ab);
      for (const {
          kind: Eb,
          components: Yb
        }
        of Mb.vertexAttributes) Eb in jb && Ab.setVerticesData(Eb, jb[Eb], !1, Yb);
      return kb.link(Mb), Ab
    }

    function Pb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Mb = new Yb.b(bb, Ub),
        {
          positions: Tb,
          normals: Eb,
          uvs: eb,
          indices: vb
        } = ab;
      return Object.assign(new Bb.c, {
        positions: Tb,
        normals: Eb,
        uvs: eb,
        indices: vb
      }).applyToMesh(Mb, Ab), Mb
    }
  },
  8383: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => vb,
      f: () => Yb,
      j: () => Bb
    });
    var Ab = Ub(2091),
      Mb = Ub(1189),
      Tb = Ub(2100);
    const Eb = ",";

    function Yb(bb) {
      if (!bb) return [];
      const ab = new Set,
        Ub = [];
      for (const Ab of bb.split(Eb)) {
        const bb = Ab.trim();
        if ((0, Tb.n)(bb) && !ab.has(bb) && (ab.add(bb), Ub.push(bb), Ub.length >= Mb.m)) break
      }
      return Ub
    }

    function Bb(bb) {
      const ab = new Set,
        Ub = [];
      for (const Ab of bb)
        if ((0, Tb.n)(Ab) && !ab.has(Ab) && (ab.add(Ab), Ub.push(Ab), Ub.length >= Mb.m)) break;
      return Ub.join(Eb)
    }

    function eb() {
      return Bb(Tb.f)
    }

    function vb(bb) {
      var ab;
      return "emote" === bb ? eb() : null !== (ab = Lb[bb][0]) && void 0 !== ab ? ab : Pb[bb]
    }
    const Lb = Mb.s.reduce(((bb, ab) => {
        const Ub = [];
        for (const Tb in Ab.f[ab]) {
          var Mb;
          "default" === (null === (Mb = (0, Ab.j)(ab, Tb)) || void 0 === Mb ? void 0 : Mb.cosmeticPack) && Ub.push(Tb)
        }
        return bb[ab] = Ub, bb
      }), {}),
      Pb = Mb.s.reduce(((bb, ab) => (bb[ab] = Object.keys(Ab.f[ab])[0], bb)), {})
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);