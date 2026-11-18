export const id = 145;
export const ids = [145];
export const modules = {
  37477: (yb, bb, Wy) => {
    var Uy = {
      "./cape_cow_cream.png": 27228,
      "./cape_cow_normal.png": 27232,
      "./cape_creator_level1.png": 27236,
      "./cape_creator_level2.png": 27242,
      "./cape_creator_level3.png": 27250,
      "./cape_none.png": 27252,
      "./cape_pig.png": 27255,
      "./cape_sheep.png": 27264,
      "./cape_super.png": 27267,
      "./cape_super_inverted.png": 27275,
      "./cape_youtuber.png": 27280
    };

    function hy(yb) {
      var bb = fy(yb);
      return Wy(bb)
    }

    function fy(yb) {
      if (!Wy.o(Uy, yb)) {
        var bb = new Error("Cannot find module '" + yb + "'");
        throw bb.code = "MODULE_NOT_FOUND", bb
      }
      return Uy[yb]
    }
    hy.keys = function() {
      return Object.keys(Uy)
    }, hy.resolve = fy, yb.exports = hy, hy.id = 37477
  },
  39743: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      openCharacterPreview: () => wy
    });
    var Uy = Wy(36797),
      hy = Wy(2234),
      fy = Wy(1844),
      Zy = Wy(530),
      cb = Wy(36237),
      Py = Wy(1849),
      oy = Wy(36235),
      By = Wy(38272),
      Ky = Wy(38564),
      ey = Wy(39668),
      qb = Wy(35856),
      sy = Wy(38731),
      Sy = Wy(35917),
      Ey = Wy(38746),
      ly = Wy(39705),
      mb = Wy(35826),
      Cy = Wy(36251),
      Ty = Wy(36262),
      Vy = (Wy(39693), Wy(38991), Wy(39695), Wy(35578));
    let Jy, gb, Gy, Oy, Ry, vb, ib, My, Yy;
    const Xy = document.createElement("canvas");
    async function ny() {
      await new Promise((yb => {
        setTimeout((() => {
          yb()
        }), 100)
      }))
    }
    Xy.classList.add("CharCustomisationPreviewCanvas");
    const uy = {},
      rb = {},
      Hy = {},
      ab = {};

    function Fy(yb) {
      yb.unfreezeWorldMatrix();
      for (const bb of yb.getChildren()) Fy(bb)
    }

    function py(yb, bb) {
      const Wy = (0, mb.g)(yb, bb);
      return Wy in uy || (uy[Wy] = (async () => {
        try {
          const Wy = await (0, mb.j)(yb, Gy),
            Uy = new Map;
          for (const yb of Wy.getNodes()) Uy.set(yb.name, yb);
          const hy = (0, mb.c)(null !== bb && void 0 !== bb ? bb : yb, Gy);
          (0, mb.n)(Wy, hy, {
            onProcessedMesh: yb => {
              (0, mb.q)(yb), Gy.yKy(yb, !1), yb.isVisible = !1
            }
          });
          for (const yb of Wy.rootNodes) Fy(yb);
          return Uy
        } catch (Uy) {
          throw delete uy[Wy], console.error(`Failed to load preview attachment ${Wy}:`, Uy), Uy
        }
      })()), uy[Wy]
    }

    function Ly(yb, bb) {
      yb.isVisible = bb;
      for (const Wy of yb.getChildMeshes()) Wy.isVisible = bb
    }

    function Qy(yb, bb) {
      if (!Oy) return;
      const cb = (0, hy.g)();
      if (cb.Jby(!1), Uy.c.Player.meshApi.updatePlayerCosmetic(cb.eWy, ib, yb, bb, !0), "cape" === yb)
        if (bb === Zy.f) Ry.dJ(!1);
        else {
          Ry.dJ(!0);
          Ry.material.diffuseTexture = new ly.e(Wy(37477)(`./cape_${bb}.png`), Ry.kWy(), {
            invertY: !1,
            samplingMode: ly.e.NEAREST_NEAREST_MIPLINEAR
          })
        } ab[yb] = async function(yb, bb) {
        var Wy;
        Hy[yb] = bb;
        const Uy = rb[yb];
        if (Uy)
          for (const {
              mesh: fy,
              destNode: Zy
            }
            of Uy) {
            Ly(fy, !1);
            const yb = vb.getNamedNode(ib, Zy);
            vb.detachTransformNodeIfFound(fy, ib, yb)
          }
        rb[yb] = [];
        const hy = (0, fy.m)(yb, bb);
        if (null !== hy && void 0 !== hy && null !== (Wy = hy.attachments) && void 0 !== Wy && Wy.length)
          for (const fy of hy.attachments) {
            let Wy;
            try {
              Wy = await py(fy.modelGlb, fy.texture)
            } catch {
              continue
            }
            if (Hy[yb] !== bb) return;
            const Uy = Wy.get(fy.modelNode);
            if (!Uy) {
              console.error(`Preview attachment node ${fy.modelNode} not found in ${fy.modelGlb}`);
              continue
            }
            Ly(Uy, !0), (0, mb.v)(Uy, fy.overlayColour);
            const hy = vb.getNamedNode(ib, fy.destNode);
            vb.attachTransformNode(Uy, ib, hy), rb[yb].push({
              mesh: Uy,
              destNode: fy.destNode
            })
          }
      }(yb, bb)
    }

    function jb(yb, bb) {
      Xy.width = yb, Xy.height = bb, Jy.resize()
    }
    let Dy = 0;
    class tb {
      constructor(yb) {
        this.ready = Yy, this.dev = {
          setCamera(yb) {
            let {
              yaw: bb,
              pitch: Wy,
              radius: Uy
            } = yb;
            gb.alpha = bb, gb.beta = Wy, Uy && (gb.radius = Uy)
          },
          canvas: () => Xy,
          isolateHead(yb) {
            const bb = vb.getNodeNames(ib);
            for (let Wy = 0; Wy < bb.length; Wy++) "HeadMesh" !== bb[Wy] && "__root__" !== bb[Wy] && "TorsoNode" !== bb[Wy] && vb.setNodeEnabled(ib, Wy, !1);
            if (yb) {
              const yb = vb.getNamedNode(ib, "HeadMesh");
              vb.setNodeDisableColorWrite(ib, yb, !0, (yb => {
                const bb = new Ey.StandardMaterial(`${yb.name}_depthOnly`, yb.kWy());
                return bb.disableColorWrite = !0, bb
              }))
            }
            vb.setPosition(ib, 0, -12, 0)
          }
        }, this.closed = !1;
        const bb = yb.getBoundingClientRect();
        jb(bb.width, bb.height), Dy++, Jy.stopRenderLoop(), Jy.runRenderLoop((() => {
          var yb;
          null === (yb = My) || void 0 === yb || yb.render(Jy.getDeltaTime()), Gy.render()
        }))
      }
      isReady() {
        return !!Oy
      }
      setCosmetic(yb, bb) {
        Qy(yb, bb)
      }
      playEmote(yb) {
        if (!My) return;
        if (!yb) return void My.stopAnimation(oy.h.Emote);
        const bb = (0, cb.d)((0, Py.f)(yb).animation);
        My.startAnimation(bb, oy.h.Emote, 0, Py.c)
      }
      async untilDrawn(yb) {
        if (await ny(), "cape" === yb && Ry) {
          const yb = Ry.material,
            bb = null === yb || void 0 === yb ? void 0 : yb.diffuseTexture;
          bb && !bb.isReady() && (await new Promise((yb => {
            bb.onLoadObservable.addOnce((() => {
              yb()
            }))
          })), await ny())
        }
        ab[yb] && (await ab[yb], await ny()), await Gy.whenReadyAsync(), await new Promise((yb => {
          Gy.onAfterRenderObservable.addOnce((() => {
            yb()
          }))
        }))
      }
      resetCamera() {
        gb.inertialAlphaOffset = 0, gb.inertialBetaOffset = 0, gb.inertialRadiusOffset = 0, this.dev.setCamera(Vy.d)
      }
      resize(yb, bb) {
        jb(yb, bb)
      }
      close() {
        this.closed || (this.closed = !0, Dy--, 0 === Dy && Jy.stopRenderLoop())
      }
    }

    function wy(yb) {
      return yb.appendChild(Xy), Jy || function() {
        Jy = new By.b(Xy, !0, {
          preserveDrawingBuffer: !0
        });
        const yb = (0, hy.g)();
        Jy.Aoy = yb.Ch.engine.Aoy, Gy = new Ky.b(Jy), Gy.clearColor = new Sy.e(0, 0, 0, 0), Gy.ambientColor = new Sy.Color3(1, 1, 1);
        const {
          yaw: bb,
          pitch: Wy,
          radius: fy
        } = Vy.d;
        gb = new ey.c("Bc", bb, Wy, fy, qb.dU.Zero(), Gy), gb.attachControl(Xy, !0), gb.panningSensibility = 0, Yy = (0, Uy.s)("Player", Gy, !0).then((bb => {
          Oy = bb.meshApi, Ry = bb.capeMesh, vb = yb.Ch.Iby;
          const Wy = 8.33;
          ib = (0, Uy.i)("Player", Wy, !0, !0), vb.setPosition(ib, 0, -8.33, 0);
          const hy = vb.getNamedNode(ib, "BodyMesh");
          vb.attachTransformNode(Ry, ib, hy), vb.set(ib, "aOpacity", 1), vb.sWy(ib, "aOpacity", 1), My = new Cy.AnimatorState, My.lb = yb, My.thinInstMgr = vb, My.xWy = ib, My.lob = vb.doy(ib, 0), My.modelLifeformType = "Player", My.nodeNameAliases = (0, Ty.d)("Player").nodeNameAliases;
          const fy = Ry.qUy().boundingBox;
          Ry.position.y = ((24 - fy.maximum.y + fy.minimum.y) / 2 - 1 / 32) / Wy, Ry.position.z = -1 / Wy, Ry.rotationQuaternion = null;
          const Zy = Math.PI / 18,
            cb = fy.maximum.y / Wy;
          Ry.rotation.x = Zy;
          const Py = Math.cos(Zy),
            oy = Math.sin(Zy);
          Ry.position.y += cb * (1 - Py) + 0 * oy, Ry.position.z -= cb * oy + 0 * (1 - Py);
          const By = new Ey.StandardMaterial("capeMaterial", Ry.kWy());
          Ry.material = By;
          const Ky = new Sy.Color3(1, 1, 1);
          By.diffuseColor = new Sy.Color3, By.specularColor = new Sy.Color3, By.emissiveColor = new Sy.Color3, By.ambientColor = new Sy.Color3, Ky.scaleToRef(.43, By.diffuseColor), Ky.scaleToRef(1.75, By.ambientColor), By.freeze();
          const ey = new sy.d("light", new qb.dU(-.1, 1, -.3), Gy);
          ey.diffuse = new Sy.Color3(1, 1, 1), ey.specular = new Sy.Color3(1, 1, 1), ey.groundColor = new Sy.Color3(.5, .5, .5)
        }))
      }(), new tb(yb)
    }
  },
  37468: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => ey
    });
    var Uy = Wy(35786),
      hy = Wy(35797),
      fy = Wy(36021),
      Zy = Wy(35800),
      cb = Wy(35790);

    function Py(yb) {
      return `\n\t\t\t\t${(0,cb.u)(yb,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, cb.A)(yb, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, cb.A)(yb, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, cb.j)(yb, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function oy(yb, bb) {
      let Wy = (0, cb.zb)(yb, "skele" + (bb - 1));
      for (let hy = bb - 2; hy >= 0; hy--) Wy = (0, cb.qb)(yb, `boneIdx == ${hy}`, (0, cb.zb)(yb, `skele${hy}`), Wy);
      const Uy = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,cb.A)(yb,"int","boneIdx",(0,cb.ub)(yb,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,cb.A)(yb,"vec3","bone",Wy)}\n\t\t\t\t${(0,cb.A)(yb,"vec2","pivot",(0,cb.j)(yb,"vec2","0.0",`${(0,cb.Fb)(yb,"position")}.z`))}\n\t\t\t\t${(0,cb.$)(yb)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${Uy}));`:`positionUpdated.yz += ${Uy};`}\n\t\t`
    }

    function By(yb) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,cb.j)(yb,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const Ky = {
        x: 0,
        y: 0,
        z: 0,
        FPy(yb, bb) {
          return this.x = yb[bb], this.y = yb[bb + 1], this.z = yb[bb + 2], this
        }
      },
      ey = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (yb, bb) => ({
          ...(0, Uy.d)("CAPE"),
          BLOXD_CAPE_BONES: `${yb}`,
          BLOXD_CAPE_MAX_Y: (0, hy.kb)(bb)
        }),
        getUniforms(yb) {
          return (0, fy.e)(function(yb) {
            const bb = [];
            for (let Wy = 0; Wy < yb; Wy++) bb.push({
              name: `skele${Wy}`,
              type: "highp vec3"
            });
            return bb
          }(this.skeleLen), "vertex", yb)
        },
        bind(yb) {
          for (let bb = 0; bb < this.skeleLen; bb++) yb.updateVector3(`skele${bb}`, Ky.FPy(this.skele, 3 * bb))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(yb, bb) {
          return "vertex" !== yb ? null : {
            CUSTOM_VERTEX_DEFINITIONS: Py(bb),
            CUSTOM_VERTEX_UPDATE_POSITION: oy(bb, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: By(bb)
          }
        }
      };
    (0, Zy.l)(ey)
  },
  37363: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => By,
      f: () => Ky
    });
    var Uy = Wy(35786),
      hy = Wy(36021),
      fy = Wy(35790),
      Zy = Wy(35800);
    const cb = "bloxdTextLodBias",
      Py = [{
        name: cb,
        type: "float"
      }],
      oy = "bloxdTextSample",
      By = {
        planes: -.5,
        boards: -.5
      },
      Ky = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, Uy.d)("TEXT_SAMPLER"),
        getUniforms: yb => (0, hy.e)(Py, "fragment", yb),
        bind(yb) {
          yb.updateFloat(cb, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(yb, bb) {
          if ("fragment" !== yb) return null;
          const Wy = (0, fy.H)(bb, `vec4 ${oy}(sampler2D s, vec2 uv, float bias)`, `fn ${oy}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            Uy = (0, fy.H)(bb, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            hy = `${(0,fy.U)(bb,"vDiffuseUV")} + uvOffset`,
            Zy = (0, fy.H)(bb, `${oy}(diffuseSampler, ${hy}, ${(0,fy.zb)(bb,cb)})`, `${oy}(diffuseSampler, diffuseSamplerSampler, ${hy}, ${(0,fy.zb)(bb,cb)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${Wy} {\n\t\t\t\t\t${(0,fy.A)(bb,"vec4","texel",Uy)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,fy.j)(bb,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,fy.j)(bb,"vec3","0.0")}, ${(0,fy.j)(bb,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, fy.D)(bb)]: `baseColor = ${Zy};`
          }
        }
      };
    (0, Zy.l)(Ky)
  },
  7955: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => By,
      g: () => cb,
      j: () => Py
    });
    var Uy = Wy(1844),
      hy = Wy(1102),
      fy = Wy(1849);
    const Zy = ",";

    function cb(yb) {
      if (!yb) return [];
      const bb = new Set,
        Wy = [];
      for (const Uy of yb.split(Zy)) {
        const yb = Uy.trim();
        if ((0, fy.g)(yb) && !bb.has(yb) && (bb.add(yb), Wy.push(yb), Wy.length >= hy.o)) break
      }
      return Wy
    }

    function Py(yb) {
      const bb = new Set,
        Wy = [];
      for (const Uy of yb)
        if ((0, fy.g)(Uy) && !bb.has(Uy) && (bb.add(Uy), Wy.push(Uy), Wy.length >= hy.o)) break;
      return Wy.join(Zy)
    }

    function oy() {
      return Py(fy.d)
    }

    function By(yb) {
      var bb;
      return "emote" === yb ? oy() : null !== (bb = Ky[yb][0]) && void 0 !== bb ? bb : ey[yb]
    }
    const Ky = hy.x.reduce(((yb, bb) => {
        const Wy = [];
        for (const fy in Uy.g[bb]) {
          var hy;
          "default" === (null === (hy = (0, Uy.m)(bb, fy)) || void 0 === hy ? void 0 : hy.cosmeticPack) && Wy.push(fy)
        }
        return yb[bb] = Wy, yb
      }), {}),
      ey = hy.x.reduce(((yb, bb) => (yb[bb] = Object.keys(Uy.g[bb])[0], yb)), {})
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);