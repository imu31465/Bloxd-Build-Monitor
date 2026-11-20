export const id = 152;
export const ids = [152];
export const modules = {
  40271: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      openCharacterPreview: () => Cb
    });
    var Ab = Ub(37437),
      Mb = Ub(2549),
      Tb = Ub(574),
      Eb = Ub(36471),
      Yb = Ub(2100),
      Bb = Ub(36460),
      eb = Ub(38898),
      vb = Ub(39185),
      Lb = Ub(40186),
      Pb = Ub(36392),
      Xb = Ub(39347),
      jb = Ub(36587),
      Rb = Ub(39361),
      kb = Ub(40230),
      yb = Ub(36386),
      Zb = Ub(1162),
      Db = Ub(2091),
      zb = Ub(36546),
      xb = Ub(36646);
    class ib {
      constructor(bb, ab) {
        this.pose = bb, this.nodes = void 0, this.nodes = bb.boneNames.map((bb => ab.get(bb)))
      }
      write(bb) {
        this.pose.pose(bb);
        const {
          rotations: ab
        } = this.pose;
        for (let Ub = 0; Ub < this.nodes.length; Ub++) {
          const bb = 4 * Ub;
          this.nodes[Ub].rotationQuaternion.set(ab[bb], ab[bb + 1], ab[bb + 2], ab[bb + 3])
        }
      }
    }

    function fb(bb) {
      bb.unfreezeWorldMatrix();
      for (const ab of bb.getChildren()) fb(ab)
    }

    function mb(bb, ab) {
      bb.isVisible = ab;
      for (const Ub of bb.getChildMeshes()) Ub.isVisible = ab
    }
    class pb {
      constructor(bb, ab, Ub) {
        this.ZR = bb, this.thinInstMgr = ab, this.jW = Ub, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(bb, ab, Ub) {
        const Ab = (0, zb.g)(bb, ab);
        return Ab in this.modelCache || (this.modelCache[Ab] = (async () => {
          try {
            const Ab = await (0, zb.h)(bb, this.ZR),
              Mb = new Map;
            for (const bb of Ab.getNodes()) Mb.set(bb.name, bb);
            const Tb = (0, zb.c)(null !== ab && void 0 !== ab ? ab : bb, this.ZR);
            (0, zb.i)(Ab, Tb, {
              keepTransforms: void 0 !== Ub,
              onProcessedMesh: bb => {
                (0, zb.k)(bb), this.ZR.rUb(bb, !1), bb.isVisible = !1
              }
            });
            for (const bb of Ab.rootNodes) fb(bb);
            const Eb = void 0 === Ub ? null : (0, xb.f)(Ub, (bb => {
              var ab, Ub;
              return null !== (ab = null === (Ub = Mb.get(bb)) || void 0 === Ub ? void 0 : Ub.rotationQuaternion) && void 0 !== ab ? ab : null
            }));
            return {
              nodesByName: Mb,
              bones: null === Eb ? null : new ib(Eb, Mb)
            }
          } catch (Mb) {
            throw delete this.modelCache[Ab], console.error(`Failed to load preview attachment ${Ab}:`, Mb), Mb
          }
        })()), this.modelCache[Ab]
      }
      async update(bb, ab) {
        var Ub;
        const {
          thinInstMgr: Ab,
          jW: Mb
        } = this;
        this.cosmeticNames[bb] = ab;
        const Tb = this.attachmentsByType[bb];
        if (Tb)
          for (const {
              mesh: Yb,
              destNode: Bb,
              bones: eb
            }
            of Tb) {
            null !== eb && (0, Zb.sb)(this.shownBones, eb), mb(Yb, !1);
            const bb = Ab.getNamedNode(Mb, Bb);
            Ab.detachTransformNodeIfFound(Yb, Mb, bb)
          }
        this.attachmentsByType[bb] = [];
        const Eb = (0, Db.j)(bb, ab);
        if (null !== Eb && void 0 !== Eb && null !== (Ub = Eb.attachments) && void 0 !== Ub && Ub.length)
          for (const Yb of Eb.attachments) {
            let Ub;
            try {
              Ub = await this.loadModel(Yb.modelGlb, Yb.texture, Yb.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[bb] !== ab) return;
            const Tb = Ub.nodesByName.get(Yb.modelNode);
            if (!Tb) {
              console.error(`Preview attachment node ${Yb.modelNode} not found in ${Yb.modelGlb}`);
              continue
            }
            mb(Tb, !0), (0, zb.o)(Tb, Yb.overlayColour);
            const Eb = Ab.getNamedNode(Mb, Yb.destNode);
            Ab.attachTransformNode(Tb, Mb, Eb), this.attachmentsByType[bb].push({
              mesh: Tb,
              destNode: Yb.destNode,
              bones: Ub.bones
            }), null !== Ub.bones && this.shownBones.push(Ub.bones)
          }
      }
      writePoses(bb) {
        for (const ab of this.shownBones) ab.write(bb)
      }
    }
    var Nb = Ub(36477),
      Wb = (Ub(40207), Ub(39611), Ub(40214), Ub(8951));
    let Hb, Ib, db, Fb, hb, Gb, Qb, qb, ub, rb;
    const Kb = document.createElement("canvas");
    async function ob() {
      await new Promise((bb => {
        setTimeout((() => {
          bb()
        }), 100)
      }))
    }
    Kb.classList.add("CharCustomisationPreviewCanvas");
    const lb = {};

    function tb(bb, ab) {
      Kb.width = bb, Kb.height = ab, Hb.resize()
    }
    let wb = 0;
    class sb {
      constructor(bb, ab) {
        this.framing = ab, this.ready = rb, this.dev = {
          canvas: () => Kb,
          isolateHead(bb) {
            const ab = Gb.getNodeNames(Qb);
            for (let Ub = 0; Ub < ab.length; Ub++) "HeadMesh" !== ab[Ub] && "__root__" !== ab[Ub] && "TorsoNode" !== ab[Ub] && Gb.setNodeEnabled(Qb, Ub, !1);
            if (bb) {
              const bb = Gb.getNamedNode(Qb, "HeadMesh");
              Gb.setNodeDisableColorWrite(Qb, bb, !0, (bb => {
                const ab = new Rb.StandardMaterial(`${bb.name}_depthOnly`, bb.oN());
                return ab.disableColorWrite = !0, ab
              }))
            }
            Gb.setPosition(Qb, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const Ub = bb.getBoundingClientRect();
        tb(Ub.width, Ub.height), wb++, Hb.stopRenderLoop(), Hb.runRenderLoop((() => {
          var bb, ab;
          null === (bb = qb) || void 0 === bb || bb.render(Hb.getDeltaTime()), null === (ab = ub) || void 0 === ab || ab.writePoses(performance.now() / 1e3), db.render()
        }))
      }
      isReady() {
        return !!Fb
      }
      setCosmetic(bb, ab) {
        ! function(bb, ab) {
          if (!Fb) return;
          const Eb = (0, Mb.h)();
          Eb.Wm(!1), Ab.c.Player.meshApi.updatePlayerCosmetic(Eb.ZH, Qb, bb, ab, !0), "cape" === bb && (ab === Tb.f ? hb.Yz(!1) : (hb.Yz(!0), hb.material.diffuseTexture = new kb.b(Ub(38111)(`./cape_${ab}.png`), hb.oN(), {
            invertY: !1,
            samplingMode: kb.b.NEAREST_NEAREST_MIPLINEAR
          })));
          lb[bb] = ub.update(bb, ab)
        }(bb, ab)
      }
      playEmote(bb) {
        if (!qb) return;
        if (!bb) return void qb.stopAnimation(Bb.d.Emote);
        const ab = (0, Eb.e)((0, Yb.j)(bb).animation);
        qb.startAnimation(ab, Bb.d.Emote, 0, Yb.e)
      }
      async untilDrawn(bb) {
        if (await ob(), "cape" === bb && hb) {
          const bb = hb.material,
            ab = null === bb || void 0 === bb ? void 0 : bb.diffuseTexture;
          ab && !ab.isReady() && (await new Promise((bb => {
            ab.onLoadObservable.addOnce((() => {
              bb()
            }))
          })), await ob())
        }
        lb[bb] && (await lb[bb], await ob()), await db.whenReadyAsync(), await new Promise((bb => {
          db.onAfterRenderObservable.addOnce((() => {
            bb()
          }))
        }))
      }
      setOrbit(bb) {
        gb(bb)
      }
      resetCamera() {
        Ib.inertialAlphaOffset = 0, Ib.inertialBetaOffset = 0, Ib.inertialRadiusOffset = 0, gb(Wb.d[this.framing])
      }
      resize(bb, ab) {
        tb(bb, ab)
      }
      close() {
        this.closed || (this.closed = !0, wb--, 0 === wb && Hb.stopRenderLoop())
      }
    }

    function gb(bb) {
      let {
        yaw: ab,
        pitch: Ub,
        radius: Ab,
        target: Mb
      } = bb;
      Ib.alpha = ab, Ib.beta = Ub, Ab && (Ib.radius = Ab), Mb && Ib.target.set(Mb[0], Mb[1], Mb[2])
    }

    function Cb(bb, ab) {
      return bb.appendChild(Kb), Hb || function() {
        Hb = new eb.d(Kb, !0, {
          preserveDrawingBuffer: !0
        });
        const bb = (0, Mb.h)();
        Hb.hUb = bb.Fj.engine.hUb, db = new vb.c(Hb), db.clearColor = new jb.b(0, 0, 0, 0), db.ambientColor = new jb.Color3(1, 1, 1), Ib = new Lb.c("ek", 0, 0, 1, Pb.Pj.Zero(), db), Ib.attachControl(Kb, !0), Ib.panningSensibility = 0, rb = (0, Ab.p)("Player", db, !0).then((ab => {
          Fb = ab.meshApi, hb = ab.capeMesh, Gb = bb.Fj.vW;
          const Ub = 8.33;
          Qb = (0, Ab.j)("Player", Ub, !0, !0), Gb.setPosition(Qb, 0, -8.33, 0);
          const Mb = Gb.getNamedNode(Qb, "BodyMesh");
          Gb.attachTransformNode(hb, Qb, Mb), Gb.set(Qb, "aOpacity", 1), Gb.xH(Qb, "aOpacity", 1), ub = new pb(db, Gb, Qb), qb = new yb.AnimatorState, qb.VL = bb, qb.thinInstMgr = Gb, qb.jW = Qb, qb.MUb = Gb.GUb(Qb, 0), qb.modelLifeformType = "Player", qb.nodeNameAliases = (0, Nb.e)("Player").nodeNameAliases;
          const Tb = hb.DH().boundingBox;
          hb.position.y = ((24 - Tb.maximum.y + Tb.minimum.y) / 2 - 1 / 32) / Ub, hb.position.z = -1 / Ub, hb.rotationQuaternion = null;
          const Eb = Math.PI / 18,
            Yb = Tb.maximum.y / Ub;
          hb.rotation.x = Eb;
          const Bb = Math.cos(Eb),
            eb = Math.sin(Eb);
          hb.position.y += Yb * (1 - Bb) + 0 * eb, hb.position.z -= Yb * eb + 0 * (1 - Bb);
          const vb = new Rb.StandardMaterial("capeMaterial", hb.oN());
          hb.material = vb;
          const Lb = new jb.Color3(1, 1, 1);
          vb.diffuseColor = new jb.Color3, vb.specularColor = new jb.Color3, vb.emissiveColor = new jb.Color3, vb.ambientColor = new jb.Color3, Lb.scaleToRef(.43, vb.diffuseColor), Lb.scaleToRef(1.75, vb.ambientColor), vb.freeze();
          const kb = new Xb.d("light", new Pb.Pj(-.1, 1, -.3), db);
          kb.diffuse = new jb.Color3(1, 1, 1), kb.specular = new jb.Color3(1, 1, 1), kb.groundColor = new jb.Color3(.5, .5, .5)
        }))
      }(), new sb(bb, ab)
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
  },
  38111: (bb, ab, Ub) => {
    var Ab = {
      "./cape_cow_cream.png": 27650,
      "./cape_cow_normal.png": 27657,
      "./cape_creator_level1.png": 27661,
      "./cape_creator_level2.png": 27666,
      "./cape_creator_level3.png": 27671,
      "./cape_none.png": 27680,
      "./cape_pig.png": 27686,
      "./cape_sheep.png": 27695,
      "./cape_super.png": 27698,
      "./cape_super_inverted.png": 27704,
      "./cape_youtuber.png": 27707
    };

    function Mb(bb) {
      var ab = Tb(bb);
      return Ub(ab)
    }

    function Tb(bb) {
      if (!Ub.o(Ab, bb)) {
        var ab = new Error("Cannot find module '" + bb + "'");
        throw ab.code = "MODULE_NOT_FOUND", ab
      }
      return Ab[bb]
    }
    Mb.keys = function() {
      return Object.keys(Ab)
    }, Mb.resolve = Tb, bb.exports = Mb, Mb.id = 38111
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);