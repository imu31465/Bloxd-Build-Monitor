export const id = 152;
export const ids = [152];
export const modules = {
  40593: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      openCharacterPreview: () => Sb
    });
    var kb = sb(37706),
      Wb = sb(2612),
      ab = sb(613),
      Tb = sb(36717),
      Ub = sb(2144),
      Ib = sb(36705),
      Hb = sb(39232),
      fb = sb(39522),
      Mb = sb(40507),
      Xb = sb(36654),
      nb = sb(39695),
      mb = sb(36821),
      lb = sb(39709),
      Qb = sb(40546),
      eb = sb(36645),
      Cb = sb(1235),
      Nb = sb(2141),
      Vb = sb(36784),
      Lb = sb(36873);
    class ub {
      constructor(bb, cb) {
        this.pose = bb, this.nodes = void 0, this.nodes = bb.boneNames.map((bb => cb.get(bb)))
      }
      write(bb) {
        this.pose.pose(bb);
        const {
          rotations: cb
        } = this.pose;
        for (let sb = 0; sb < this.nodes.length; sb++) {
          const bb = 4 * sb;
          this.nodes[sb].rotationQuaternion.set(cb[bb], cb[bb + 1], cb[bb + 2], cb[bb + 3])
        }
      }
    }

    function Yb(bb) {
      bb.unfreezeWorldMatrix();
      for (const cb of bb.getChildren()) Yb(cb)
    }

    function hb(bb, cb) {
      bb.isVisible = cb;
      for (const sb of bb.getChildMeshes()) sb.isVisible = cb
    }
    class Jb {
      constructor(bb, cb, sb) {
        this.aQ = bb, this.thinInstMgr = cb, this.rY = sb, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(bb, cb, sb) {
        const kb = (0, Vb.g)(bb, cb);
        return kb in this.modelCache || (this.modelCache[kb] = (async () => {
          try {
            const kb = await (0, Vb.j)(bb, this.aQ),
              Wb = new Map;
            for (const bb of kb.getNodes()) Wb.set(bb.name, bb);
            const ab = (0, Vb.e)(null !== cb && void 0 !== cb ? cb : bb, this.aQ);
            (0, Vb.k)(kb, ab, {
              keepTransforms: void 0 !== sb,
              onProcessedMesh: bb => {
                (0, Vb.o)(bb), this.aQ.Ksb(bb, !1), bb.isVisible = !1
              }
            });
            for (const bb of kb.rootNodes) Yb(bb);
            const Tb = void 0 === sb ? null : (0, Lb.f)(sb, (bb => {
              var cb, sb;
              return null !== (cb = null === (sb = Wb.get(bb)) || void 0 === sb ? void 0 : sb.rotationQuaternion) && void 0 !== cb ? cb : null
            }));
            return {
              nodesByName: Wb,
              bones: null === Tb ? null : new ub(Tb, Wb)
            }
          } catch (Wb) {
            throw delete this.modelCache[kb], console.error(`Failed to load preview attachment ${kb}:`, Wb), Wb
          }
        })()), this.modelCache[kb]
      }
      async update(bb, cb) {
        var sb;
        const {
          thinInstMgr: kb,
          rY: Wb
        } = this;
        this.cosmeticNames[bb] = cb;
        const ab = this.attachmentsByType[bb];
        if (ab)
          for (const {
              mesh: Ub,
              destNode: Ib,
              bones: Hb
            }
            of ab) {
            null !== Hb && (0, Cb.db)(this.shownBones, Hb), hb(Ub, !1);
            const bb = kb.getNamedNode(Wb, Ib);
            kb.detachTransformNodeIfFound(Ub, Wb, bb)
          }
        this.attachmentsByType[bb] = [];
        const Tb = (0, Nb.i)(bb, cb);
        if (null !== Tb && void 0 !== Tb && null !== (sb = Tb.attachments) && void 0 !== sb && sb.length)
          for (const Ub of Tb.attachments) {
            let sb;
            try {
              sb = await this.loadModel(Ub.modelGlb, Ub.texture, Ub.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[bb] !== cb) return;
            const ab = sb.nodesByName.get(Ub.modelNode);
            if (!ab) {
              console.error(`Preview attachment node ${Ub.modelNode} not found in ${Ub.modelGlb}`);
              continue
            }
            hb(ab, !0), (0, Vb.s)(ab, Ub.overlayColour);
            const Tb = kb.getNamedNode(Wb, Ub.destNode);
            kb.attachTransformNode(ab, Wb, Tb), this.attachmentsByType[bb].push({
              mesh: ab,
              destNode: Ub.destNode,
              bones: sb.bones
            }), null !== sb.bones && this.shownBones.push(sb.bones)
          }
      }
      writePoses(bb) {
        for (const cb of this.shownBones) cb.write(bb)
      }
    }
    var gb = sb(36722),
      Bb = (sb(40531), sb(39902), sb(40535), sb(8960));
    let tb, yb, Pb, Db, Eb, ib, Ob, Gb, Kb, Zb;
    const zb = document.createElement("canvas");
    async function qb() {
      await new Promise((bb => {
        setTimeout((() => {
          bb()
        }), 100)
      }))
    }
    zb.classList.add("CharCustomisationPreviewCanvas");
    const db = {};

    function Ab(bb, cb) {
      zb.width = bb, zb.height = cb, tb.resize()
    }
    let wb = 0;
    class rb {
      constructor(bb, cb) {
        this.framing = cb, this.ready = Zb, this.dev = {
          canvas: () => zb,
          isolateHead(bb) {
            const cb = ib.getNodeNames(Ob);
            for (let sb = 0; sb < cb.length; sb++) "HeadMesh" !== cb[sb] && "__root__" !== cb[sb] && "TorsoNode" !== cb[sb] && ib.setNodeEnabled(Ob, sb, !1);
            if (bb) {
              const bb = ib.getNamedNode(Ob, "HeadMesh");
              ib.setNodeDisableColorWrite(Ob, bb, !0, (bb => {
                const cb = new lb.StandardMaterial(`${bb.name}_depthOnly`, bb.EY());
                return cb.disableColorWrite = !0, cb
              }))
            }
            ib.setPosition(Ob, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const sb = bb.getBoundingClientRect();
        Ab(sb.width, sb.height), wb++, tb.stopRenderLoop(), tb.runRenderLoop((() => {
          var bb, cb;
          null === (bb = Gb) || void 0 === bb || bb.render(tb.getDeltaTime()), null === (cb = Kb) || void 0 === cb || cb.writePoses(performance.now() / 1e3), Pb.render()
        }))
      }
      isReady() {
        return !!Db
      }
      setCosmetic(bb, cb) {
        ! function(bb, cb) {
          if (!Db) return;
          const Tb = (0, Wb.e)();
          Tb.fL(!1), kb.b.Player.meshApi.updatePlayerCosmetic(Tb.yJ, Ob, bb, cb, !0), "cape" === bb && (cb === ab.d ? Eb.GV(!1) : (Eb.GV(!0), Eb.material.diffuseTexture = new Qb.e(sb(38394)(`./cape_${cb}.png`), Eb.EY(), {
            invertY: !1,
            samplingMode: Qb.e.NEAREST_NEAREST_MIPLINEAR
          })));
          db[bb] = Kb.update(bb, cb)
        }(bb, cb)
      }
      playEmote(bb) {
        if (!Gb) return;
        if (!bb) return void Gb.stopAnimation(Ib.f.Emote);
        const cb = (0, Tb.g)((0, Ub.h)(bb).animation);
        Gb.startAnimation(cb, Ib.f.Emote, 0, Ub.d)
      }
      async untilDrawn(bb) {
        if (await qb(), "cape" === bb && Eb) {
          const bb = Eb.material,
            cb = null === bb || void 0 === bb ? void 0 : bb.diffuseTexture;
          cb && !cb.isReady() && (await new Promise((bb => {
            cb.onLoadObservable.addOnce((() => {
              bb()
            }))
          })), await qb())
        }
        db[bb] && (await db[bb], await qb()), await Pb.whenReadyAsync(), await new Promise((bb => {
          Pb.onAfterRenderObservable.addOnce((() => {
            bb()
          }))
        }))
      }
      setOrbit(bb) {
        ob(bb)
      }
      resetCamera() {
        yb.inertialAlphaOffset = 0, yb.inertialBetaOffset = 0, yb.inertialRadiusOffset = 0, ob(Bb.c[this.framing])
      }
      resize(bb, cb) {
        Ab(bb, cb)
      }
      close() {
        this.closed || (this.closed = !0, wb--, 0 === wb && tb.stopRenderLoop())
      }
    }

    function ob(bb) {
      let {
        yaw: cb,
        pitch: sb,
        radius: kb,
        target: Wb
      } = bb;
      yb.alpha = cb, yb.beta = sb, kb && (yb.radius = kb), Wb && yb.target.set(Wb[0], Wb[1], Wb[2])
    }

    function Sb(bb, cb) {
      return bb.appendChild(zb), tb || function() {
        tb = new Hb.c(zb, !0, {
          preserveDrawingBuffer: !0
        });
        const bb = (0, Wb.e)();
        tb.Dsb = bb.Cl.engine.Dsb, Pb = new fb.c(tb), Pb.clearColor = new mb.e(0, 0, 0, 0), Pb.ambientColor = new mb.Color3(1, 1, 1), yb = new Mb.e("GQ", 0, 0, 1, Xb.Fm.Zero(), Pb), yb.attachControl(zb, !0), yb.panningSensibility = 0, Zb = (0, kb.p)("Player", Pb, !0).then((cb => {
          Db = cb.meshApi, Eb = cb.capeMesh, ib = bb.Cl.AY;
          const sb = 8.33;
          Ob = (0, kb.h)("Player", sb, !0, !0), ib.setPosition(Ob, 0, -8.33, 0);
          const Wb = ib.getNamedNode(Ob, "BodyMesh");
          ib.attachTransformNode(Eb, Ob, Wb), ib.set(Ob, "aOpacity", 1), ib.iJ(Ob, "aOpacity", 1), Kb = new Jb(Pb, ib, Ob), Gb = new eb.AnimatorState, Gb.eX = bb, Gb.thinInstMgr = ib, Gb.rY = Ob, Gb.bsb = ib.Esb(Ob, 0), Gb.modelLifeformType = "Player", Gb.nodeNameAliases = (0, gb.d)("Player").nodeNameAliases;
          const ab = Eb.PJ().boundingBox;
          Eb.position.y = ((24 - ab.maximum.y + ab.minimum.y) / 2 - 1 / 32) / sb, Eb.position.z = -1 / sb, Eb.rotationQuaternion = null;
          const Tb = Math.PI / 18,
            Ub = ab.maximum.y / sb;
          Eb.rotation.x = Tb;
          const Ib = Math.cos(Tb),
            Hb = Math.sin(Tb);
          Eb.position.y += Ub * (1 - Ib) + 0 * Hb, Eb.position.z -= Ub * Hb + 0 * (1 - Ib);
          const fb = new lb.StandardMaterial("capeMaterial", Eb.EY());
          Eb.material = fb;
          const Mb = new mb.Color3(1, 1, 1);
          fb.diffuseColor = new mb.Color3, fb.specularColor = new mb.Color3, fb.emissiveColor = new mb.Color3, fb.ambientColor = new mb.Color3, Mb.scaleToRef(.43, fb.diffuseColor), Mb.scaleToRef(1.75, fb.ambientColor), fb.freeze();
          const Qb = new nb.b("light", new Xb.Fm(-.1, 1, -.3), Pb);
          Qb.diffuse = new mb.Color3(1, 1, 1), Qb.specular = new mb.Color3(1, 1, 1), Qb.groundColor = new mb.Color3(.5, .5, .5)
        }))
      }(), new rb(bb, cb)
    }
  },
  38392: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Xb
    });
    var kb = sb(36733),
      Wb = sb(36749),
      ab = sb(36990),
      Tb = sb(36752),
      Ub = sb(36742);

    function Ib(bb) {
      return `\n\t\t\t\t${(0,Ub.v)(bb,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, Ub.A)(bb, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, Ub.A)(bb, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, Ub.l)(bb, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function Hb(bb, cb) {
      let sb = (0, Ub.sb)(bb, "skele" + (cb - 1));
      for (let Wb = cb - 2; Wb >= 0; Wb--) sb = (0, Ub.lb)(bb, `boneIdx == ${Wb}`, (0, Ub.sb)(bb, `skele${Wb}`), sb);
      const kb = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,Ub.A)(bb,"int","boneIdx",(0,Ub.ob)(bb,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,Ub.A)(bb,"vec3","bone",sb)}\n\t\t\t\t${(0,Ub.A)(bb,"vec2","pivot",(0,Ub.l)(bb,"vec2","0.0",`${(0,Ub.Bb)(bb,"position")}.z`))}\n\t\t\t\t${(0,Ub.Z)(bb)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${kb}));`:`positionUpdated.yz += ${kb};`}\n\t\t`
    }

    function fb(bb) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,Ub.l)(bb,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const Mb = {
        x: 0,
        y: 0,
        z: 0,
        Ncb(bb, cb) {
          return this.x = bb[cb], this.y = bb[cb + 1], this.z = bb[cb + 2], this
        }
      },
      Xb = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (bb, cb) => ({
          ...(0, kb.e)("CAPE"),
          BLOXD_CAPE_BONES: `${bb}`,
          BLOXD_CAPE_MAX_Y: (0, Wb.ib)(cb)
        }),
        getUniforms(bb) {
          return (0, ab.e)(function(bb) {
            const cb = [];
            for (let sb = 0; sb < bb; sb++) cb.push({
              name: `skele${sb}`,
              type: "highp vec3"
            });
            return cb
          }(this.skeleLen), "vertex", bb)
        },
        bind(bb) {
          for (let cb = 0; cb < this.skeleLen; cb++) bb.updateVector3(`skele${cb}`, Mb.Ncb(this.skele, 3 * cb))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(bb, cb) {
          return "vertex" !== bb ? null : {
            CUSTOM_VERTEX_DEFINITIONS: Ib(cb),
            CUSTOM_VERTEX_UPDATE_POSITION: Hb(cb, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: fb(cb)
          }
        }
      };
    (0, Tb.l)(Xb)
  },
  38292: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => fb,
      h: () => Mb
    });
    var kb = sb(36733),
      Wb = sb(36990),
      ab = sb(36742),
      Tb = sb(36752);
    const Ub = "bloxdTextLodBias",
      Ib = [{
        name: Ub,
        type: "float"
      }],
      Hb = "bloxdTextSample",
      fb = {
        planes: -.5,
        boards: -.5
      },
      Mb = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, kb.e)("TEXT_SAMPLER"),
        getUniforms: bb => (0, Wb.e)(Ib, "fragment", bb),
        bind(bb) {
          bb.updateFloat(Ub, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(bb, cb) {
          if ("fragment" !== bb) return null;
          const sb = (0, ab.G)(cb, `vec4 ${Hb}(sampler2D s, vec2 uv, float bias)`, `fn ${Hb}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            kb = (0, ab.G)(cb, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            Wb = `${(0,ab.S)(cb,"vDiffuseUV")} + uvOffset`,
            Tb = (0, ab.G)(cb, `${Hb}(diffuseSampler, ${Wb}, ${(0,ab.sb)(cb,Ub)})`, `${Hb}(diffuseSampler, diffuseSamplerSampler, ${Wb}, ${(0,ab.sb)(cb,Ub)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${sb} {\n\t\t\t\t\t${(0,ab.A)(cb,"vec4","texel",kb)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,ab.l)(cb,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,ab.l)(cb,"vec3","0.0")}, ${(0,ab.l)(cb,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, ab.B)(cb)]: `baseColor = ${Tb};`
          }
        }
      };
    (0, Tb.l)(Mb)
  },
  40535: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      CapeMaterialPlugin: () => Vb,
      HueTintMaterialPlugin: () => Lb,
      LifeformMaterialPlugin: () => ub,
      OverlayMaterialPlugin: () => Yb
    });
    var kb = sb(40540),
      Wb = sb(37604);
    class ab extends((0, kb.f)(Wb.c)) {}(0, kb.g)(Wb.c, ab);
    var Tb = sb(36727);
    class Ub extends((0, kb.f)(Tb.g)) {}(0, kb.g)(Tb.g, Ub);
    var Ib = sb(37441);
    class Hb extends((0, kb.f)(Ib.d)) {}(0, kb.g)(Ib.d, Hb);
    var fb = sb(36974),
      Mb = sb(39709),
      Xb = sb(36968);
    class nb extends((0, kb.f)(Xb.g)) {
      constructor(bb, cb, sb) {
        super(bb, cb, sb), (0, fb.g)(bb)
      }
      dispose(bb) {
        (0, fb.h)(this._material), super.dispose(bb)
      }
    }(0, kb.g)(Xb.g, nb), (0, Xb.h)({
      disableUnusedSpecularTerm: kb.c,
      isLightingDisabled: bb => bb instanceof Mb.StandardMaterial && bb.disableLighting
    });
    var mb = sb(38292);
    class lb extends((0, kb.f)(mb.h)) {}(0, kb.g)(mb.h, lb);
    var Qb = sb(38392),
      eb = sb(36836),
      Cb = sb(37736),
      Nb = sb(36780);
    class Vb extends((0, kb.f)(Qb.c)) {}(0, kb.g)(Qb.c, Vb);
    class Lb extends((0, kb.f)(eb.c)) {}(0, kb.g)(eb.c, Lb);
    class ub extends((0, kb.f)(Cb.k)) {}(0, kb.g)(Cb.k, ub);
    class Yb extends((0, kb.f)(Nb.d)) {}(0, kb.g)(Nb.d, Yb)
  },
  40540: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => qb,
      f: () => Cb,
      g: () => Sb
    });
    var kb = sb(39709),
      Wb = sb(40542),
      ab = sb(40590),
      Tb = sb(40546),
      Ub = sb(37415),
      Ib = sb(37428),
      Hb = sb(37433),
      fb = sb(37435),
      Mb = sb(36769),
      Xb = sb(36772),
      nb = sb(40555),
      mb = sb(36752),
      lb = sb(36758),
      Qb = sb(36742);

    function eb(bb, cb) {
      return Object.assign((function(bb, sb, kb, Wb) {
        return cb(this.featureState, bb, sb, kb, Wb)
      }), {
        Nm: bb
      })
    }

    function Cb(bb) {
      const cb = class extends nb.e {
          constructor(cb, sb) {
            const kb = (0, lb.W)(cb),
              Wb = kb && (0, lb.v)(kb, bb.name);
            for (var ab = arguments.length, Tb = new Array(ab > 2 ? ab - 2 : 0), Ub = 2; Ub < ab; Ub++) Tb[Ub - 2] = arguments[Ub];
            super(cb, bb.name, bb.priority, Wb ? Wb.defines : bb.defines(...Tb), !1), this.featureState = void 0, this.featureState = sb, this._pluginManager._addPlugin(this), this._enable(!0), (0, lb.z)(this._material, bb, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return bb.className
          }
          isCompatible(bb) {
            return bb === Qb.e.GLSL || bb === Qb.e.WGSL
          }
        },
        sb = (0, mb.g)(bb);
      for (const [kb, Wb] of Object.entries(mb.c)) {
        const ab = bb[kb];
        if (ab) {
          const bb = sb[kb];
          Object.defineProperty(cb.prototype, Wb, {
            value: eb(ab, bb),
            writable: !0,
            configurable: !0
          })
        }
      }
      return cb
    }
    class Nb extends(Cb(Ub.e)) {}
    var Vb = sb(39232),
      Lb = sb(40564);
    const ub = new WeakMap;

    function Yb(bb, cb, sb) {
      let kb = ub.get(sb);
      kb || (kb = new Map, ub.set(sb, kb));
      const {
        url: Wb
      } = bb;
      let ab = kb.get(Wb);
      return ab || (ab = async function(bb, cb, sb) {
        const {
          width: kb,
          height: Wb
        } = bb.getSize(), ab = Math.round(Wb / kb), Ub = cb && cb.byteLength === kb * kb * ab * 4 ? cb : bb._readPixelsSync();
        return new Lb.c(Ub, kb, kb, ab, Vb.c.TEXTUREFORMAT_RGBA, sb, !0, !1, Tb.e.NEAREST_NEAREST_MIPLINEAR)
      }(bb, cb, sb), kb.set(Wb, ab), ab.catch((() => {
        kb.delete(Wb)
      }))), ab
    }
    var hb = sb(37438);
    class Jb extends(Cb(Ib.j)) {
      constructor(bb, cb) {
        super(bb, cb), cb.textures.forEach(((bb, cb) => {
          bb.mirror.onLoadObservable.add((bb => {
            this.setTextureArrayData(bb, cb).catch((bb => {
              console.error(`Failed to build texture array for atlas ${cb}`, bb)
            }))
          }))
        })), (0, hb.h)(cb, bb.shaderLanguage)
      }
      async setTextureArrayData(bb, cb) {
        var sb, kb;
        const Wb = this.featureState,
          {
            width: ab,
            height: Tb
          } = bb.getSize(),
          Ub = Wb.useWebGL2 ? await Yb(bb, null !== (sb = null === (kb = Wb.sources.pixels) || void 0 === kb ? void 0 : kb[cb]) && void 0 !== sb ? sb : null, this._material.EY()) : null;
        (0, hb.c)(this._material, Wb, cb, Ub, ab, Math.round(Tb / ab), this._material.shaderLanguage)
      }
    }
    var gb = sb(40567),
      Bb = sb(39745),
      tb = sb(36654),
      yb = sb(40574),
      Pb = sb(39848),
      Db = sb(39737),
      Eb = sb(40528),
      ib = sb(37134),
      Ob = sb(40581);
    class Gb extends gb.e {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const Kb = {
      Mesh: yb.e,
      TransformNode: Eb.c,
      Dm: gb.e,
      VertexBuffer: gb.f,
      BoundingInfo: Bb.c,
      Fm: tb.Fm,
      ArenaBuffer: Gb,
      SubMesh: Db.b,
      VertexData: Pb.e,
      MirroredGeometry: Ob.e,
      meshFromArrays: Ob.i,
      plainMeshFromArrays: Ob.k
    };
    (0, ib.e)(Kb);
    var Zb = sb(36974);
    class zb extends(Cb(fb.j)) {
      constructor(bb, cb) {
        if (super(bb, cb), bb instanceof kb.StandardMaterial && cb.dirLightCount > 0) {
          const cb = bb,
            sb = cb._blockDirtyMechanism;
          cb._blockDirtyMechanism = !0, bb.disableLighting = !0, cb._blockDirtyMechanism = sb;
          const kb = (0, lb.W)(bb);
          kb && (kb.disableLighting = !0, (0, lb.U)(kb))
        }(0, Zb.g)(bb)
      }
      dispose(bb) {
        (0, Zb.h)(this._material), super.dispose(bb)
      }
    }

    function qb(bb, cb) {
      if (!(cb instanceof kb.StandardMaterial) || cb.specularTexture) return;
      const {
        r: sb,
        g: Wb,
        b: ab
      } = cb.specularColor;
      0 === sb && 0 === Wb && 0 === ab && (bb.SPECULARTERM = !1)
    }(0, fb.i)({
      disableUnusedSpecularTerm: qb
    });
    var db = sb(36855),
      Ab = sb(37147);
    const wb = new RegExp(`^#define ${Hb.e}\\s*$`, "m");
    class rb extends(Cb(Hb.k)) {
      constructor(bb, cb) {
        super(bb, cb), this.Em = !1, cb.ditherOnlyWhileFading && (Ab.g.add(bb), this.prewarmDitherTwins(bb))
      }
      prewarmDitherTwins(bb) {
        const cb = new WeakSet;
        bb.onEffectCreatedObservable.add((sb => {
          let {
            effect: kb,
            subMesh: Wb
          } = sb;
          if (this.featureState.prewarmingDither || cb.has(kb)) return;
          cb.add(kb);
          const ab = null === Wb || void 0 === Wb ? void 0 : Wb.getMesh();
          ab && !wb.test(kb.defines) && bb.EY().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(ab) || cb.delete(kb)
          }))
        }))
      }
      prewarmDither(bb) {
        if (this.Em || bb.Scb()) return !1;
        const cb = new Db.b(0, 0, 0, 0, 0, bb, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(bb, cb)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== cb.effect
      }
      dispose(bb) {
        this.Em = !0, super.dispose(bb)
      }
    }
    const ob = new Map;

    function Sb(bb, cb) {
      ob.set(bb, cb)
    }
    Sb(Ub.e, Nb), Sb(Ib.j, Jb), Sb(Hb.k, rb), Sb(fb.j, zb), (0, Mb.d)({
      create: (bb, cb) => {
        const sb = new kb.StandardMaterial(bb.name, cb);
        return (0, db.u)(bb, sb), sb.detailMap._pluginDefineNames
      },
      write: (bb, cb, sb) => {
        (0, db.bb)(bb.mirror, cb, sb)
      },
      addFeature: (bb, cb, sb) => {
        const kb = ob.get(cb.feature);
        if (!kb) throw new Error(`${cb.feature.name} has no plugin class (registerPluginClass)`);
        new kb(bb.mirror, cb.state, ...sb)
      },
      texture: (bb, cb, sb) => {
        let {
          url: kb,
          noMipmap: Wb,
          invertY: ab,
          samplingMode: Ub,
          data: Ib,
          sets: Hb
        } = sb;
        if (!Ib) {
          const sb = new Tb.e(kb, cb, Wb, ab, Ub);
          return Object.assign(sb, Hb), void(0, Xb.K)(bb, sb)
        }
        const fb = {},
          Mb = new Promise(((bb, cb) => {
            fb.onLoad = bb, fb.onError = (bb, sb) => {
              cb(new Error(`${Ib.context}: ${(null===sb||void 0===sb?void 0:sb.message)||bb||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: nb,
            bytes: mb,
            label: lb
          } = Ib,
          Qb = {
            noMipmap: Wb,
            invertY: !1,
            samplingMode: Ub,
            ...fb,
            mimeType: nb,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          eb = new Tb.e(null, cb, Qb);
        db.w.set(eb, Mb), Object.assign(eb, Hb), eb.updateURL(kb, mb);
        const Cb = eb.getInternalTexture();
        Cb && (Cb.label = lb), bb.uvSet = eb.coordinatesIndex, bb.matrix.set((0, db.V)(eb)), (0, Xb.K)(bb, eb)
      },
      cube: (bb, cb, sb) => {
        let {
          rootUrl: kb,
          files: ab,
          noMipmap: Ub,
          luminance: Ib
        } = sb;
        const {
          samplingMode: Hb
        } = bb.sampler, fb = Hb === (0, Xb.A)(Ub) ? null : () => {
          (0, db.S)(Mb, Hb)
        }, Mb = new Wb.e(kb, cb, null, Ub, ab, fb, null, (0, Xb.y)(Ib));
        Mb.coordinatesMode = Tb.e.SKYBOX_MODE, (0, Xb.K)(bb, Mb)
      },
      canvas: (bb, cb, sb) => {
        let {
          width: kb,
          height: Wb,
          mipmaps: Ub,
          samplingMode: Ib,
          hasAlpha: Hb = !1,
          wrap: fb = Tb.e.CLAMP_ADDRESSMODE
        } = sb;
        const Mb = new ab.c(cb, {
          width: kb,
          height: Wb
        }, bb, Ub, Ib);
        Mb.hasAlpha = Hb, Mb.wrapU = fb, Mb.wrapV = fb;
        const Xb = (0, db.G)(Mb);
        return (0, db.I)(Xb, Mb), Xb
      }
    })
  },
  40581: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => fb,
      i: () => Mb,
      k: () => Xb
    });
    var kb = sb(40567),
      Wb = sb(39495),
      ab = sb(39745),
      Tb = sb(39853),
      Ub = sb(40574),
      Ib = sb(39848),
      Hb = sb(37029);
    class fb extends Tb.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (bb, cb) => {
          this.releaseUnlessInstanced(cb)
        }, this.onLinked = null
      }
      link(bb) {
        var cb;
        (0, Hb.n)(bb), this.model = bb, null === (cb = this.onLinked) || void 0 === cb || cb.call(this, bb)
      }
      relink() {
        this.release();
        const bb = [];
        for (const Wb of Object.values(this._vertexBuffers))
          if (!Wb.getIsInstanced()) {
            const {
              byteOffset: cb,
              byteStride: sb,
              type: kb,
              normalized: ab
            } = Wb;
            bb.push({
              kind: Wb.getKind(),
              data: Wb.getData(),
              offset: cb,
              stride: sb,
              components: Wb.getSize(),
              glType: kb,
              isNormalized: ab
            })
          } const cb = this._indices.length ? this._indices : null,
          {
            minimum: sb,
            maximum: kb
          } = this.extend;
        this.link(new Hb.e(bb, cb, this.getTotalVertices(), new Float64Array(sb.Osb()), new Float64Array(kb.Osb())))
      }
      copy(bb) {
        if (!this.model) return super.copy(bb);
        const cb = new fb(bb, this.EY()),
          sb = this.Gsb(void 0, !0);
        sb && cb.setIndices(sb);
        let Tb = !1;
        for (const ab in this._vertexBuffers) {
          const bb = this._vertexBuffers[ab],
            sb = bb.getData();
          if (!sb) continue;
          const Ub = bb.getSize(),
            {
              type: Ib,
              byteOffset: Hb,
              byteStride: fb,
              normalized: Mb
            } = bb;
          Tb ||= bb.isUpdatable();
          const Xb = bb.getIsInstanced() ? (sb instanceof Array ? 4 * sb.length : sb.byteLength) / fb : this.getTotalVertices(),
            nb = (0, Wb.t)(sb, Ub, Ib, Hb, fb, Xb, !0),
            mb = {
              updatable: bb.isUpdatable(),
              stride: Ub,
              type: Ib,
              normalized: Mb,
              takeBufferOwnership: !0,
              instanced: bb.getIsInstanced()
            };
          cb.setVerticesBuffer(new kb.f(this.Sm(), nb, ab, mb), Xb)
        }
        return cb._updatable = Tb, cb._boundingInfo = new ab.c(this.extend.minimum, this.extend.maximum), cb.relink(), cb
      }
      static mergeMeshes(bb, cb, sb, kb, Wb, ab) {
        const Ib = bb[0].EY(),
          Hb = new Ub.e(bb[0].name + "_merged", Ib),
          Mb = new fb(Tb.e.RandomId(), Ib, void 0, !1, Hb);
        try {
          if (!Ub.e.MergeMeshes(bb, cb, sb, Hb, Wb, ab)) return Hb.dispose(), null
        } catch (Xb) {
          throw Hb.dispose(), Xb
        }
        return Mb.relink(), Hb
      }
      removeVerticesData(bb) {
        this.releaseUnlessInstanced(bb), super.removeVerticesData(bb)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(bb) {
        var cb;
        bb && null !== (cb = this.getVertexBuffer(bb)) && void 0 !== cb && cb.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Hb.v)(this.model), this.model = null)
      }
    }

    function Mb(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ub.e(bb, sb);
      const Wb = (0, Hb.l)(cb),
        {
          positions: ab,
          normals: Mb,
          uvs: Xb,
          indices: nb,
          named: mb = {}
        } = cb,
        lb = new Ib.e;
      lb.positions = ab, lb.normals = null !== Mb && void 0 !== Mb ? Mb : null, lb.uvs = null !== Xb && void 0 !== Xb ? Xb : null, lb.indices = nb;
      const Qb = new fb(Tb.e.RandomId(), sb, lb, !1, kb);
      for (const {
          kind: Tb,
          components: Ub
        }
        of Wb.vertexAttributes) Tb in mb && kb.setVerticesData(Tb, mb[Tb], !1, Ub);
      return Qb.link(Wb), kb
    }

    function Xb(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Wb = new Ub.e(bb, sb),
        {
          positions: ab,
          normals: Tb,
          uvs: Hb,
          indices: fb
        } = cb;
      return Object.assign(new Ib.e, {
        positions: ab,
        normals: Tb,
        uvs: Hb,
        indices: fb
      }).applyToMesh(Wb, kb), Wb
    }
  },
  8431: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => fb,
      h: () => Ub,
      l: () => Ib
    });
    var kb = sb(2141),
      Wb = sb(1253),
      ab = sb(2144);
    const Tb = ",";

    function Ub(bb) {
      if (!bb) return [];
      const cb = new Set,
        sb = [];
      for (const kb of bb.split(Tb)) {
        const bb = kb.trim();
        if ((0, ab.k)(bb) && !cb.has(bb) && (cb.add(bb), sb.push(bb), sb.length >= Wb.j)) break
      }
      return sb
    }

    function Ib(bb) {
      const cb = new Set,
        sb = [];
      for (const kb of bb)
        if ((0, ab.k)(kb) && !cb.has(kb) && (cb.add(kb), sb.push(kb), sb.length >= Wb.j)) break;
      return sb.join(Tb)
    }

    function Hb() {
      return Ib(ab.f)
    }

    function fb(bb) {
      var cb;
      return "emote" === bb ? Hb() : null !== (cb = Mb[bb][0]) && void 0 !== cb ? cb : Xb[bb]
    }
    const Mb = Wb.p.reduce(((bb, cb) => {
        const sb = [];
        for (const ab in kb.d[cb]) {
          var Wb;
          "default" === (null === (Wb = (0, kb.i)(cb, ab)) || void 0 === Wb ? void 0 : Wb.cosmeticPack) && sb.push(ab)
        }
        return bb[cb] = sb, bb
      }), {}),
      Xb = Wb.p.reduce(((bb, cb) => (bb[cb] = Object.keys(kb.d[cb])[0], bb)), {})
  },
  38394: (bb, cb, sb) => {
    var kb = {
      "./cape_cow_cream.png": 27816,
      "./cape_cow_normal.png": 27819,
      "./cape_creator_level1.png": 27823,
      "./cape_creator_level2.png": 27826,
      "./cape_creator_level3.png": 27830,
      "./cape_none.png": 27837,
      "./cape_pig.png": 27845,
      "./cape_sheep.png": 27849,
      "./cape_super.png": 27855,
      "./cape_super_inverted.png": 27860,
      "./cape_youtuber.png": 27867
    };

    function Wb(bb) {
      var cb = ab(bb);
      return sb(cb)
    }

    function ab(bb) {
      if (!sb.o(kb, bb)) {
        var cb = new Error("Cannot find module '" + bb + "'");
        throw cb.code = "MODULE_NOT_FOUND", cb
      }
      return kb[bb]
    }
    Wb.keys = function() {
      return Object.keys(kb)
    }, Wb.resolve = ab, bb.exports = Wb, Wb.id = 38394
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);