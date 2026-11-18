export const id = 146;
export const ids = [146];
export const modules = {
  39662: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      openMobLineupPreview: () => Ly,
      openMobPreview: () => py,
      openPetPreview: () => Qy
    });
    var Uy = Wy(38272),
      hy = Wy(38564),
      fy = Wy(39668),
      Zy = Wy(35917),
      cb = Wy(35856),
      Py = Wy(38731),
      oy = Wy(39689),
      By = Wy(37156),
      Ky = Wy(36262),
      ey = Wy(36235),
      qb = Wy(36251),
      sy = Wy(37068),
      Sy = Wy(37064),
      Ey = Wy(36797),
      ly = Wy(36847),
      mb = Wy(36822),
      Cy = Wy(36446),
      Ty = Wy(2234),
      Vy = Wy(36224);
    Wy(39693), Wy(38991), Wy(39695);
    const Jy = 22,
      gb = 13,
      Gy = Math.PI - Math.PI / 16,
      Oy = 6,
      Ry = Math.PI / 4;
    let vb = null;
    const ib = {},
      My = new Map;

    function Yy() {
      if (null !== vb) return vb;
      const yb = document.createElement("canvas");
      yb.classList.add("MobPreviewCanvas");
      const bb = new Uy.b(yb, !0, {
        preserveDrawingBuffer: !0
      });
      bb.Aoy = (0, Ty.g)().Ch.engine.Aoy;
      const Wy = new hy.b(bb);
      Wy.clearColor = new Zy.e(0, 0, 0, 0), Wy.ambientColor = new Zy.Color3(1, 1, 1);
      const oy = new fy.c("Bc", Math.PI / 2, Math.PI / 2, Jy, cb.dU.Zero(), Wy),
        By = new Py.d("light", new cb.dU(-.1, 1, -.3), Wy);
      return By.diffuse = new Zy.Color3(1, 1, 1), By.specular = new Zy.Color3(1, 1, 1), By.groundColor = new Zy.Color3(.5, .5, .5), vb = {
        engine: bb,
        Pf: Wy,
        canvas: yb,
        camera: oy
      }, vb
    }

    function Xy(yb) {
      return ib[yb] ??= (0, Ey.s)(yb, Yy().Pf, !0).catch((bb => {
        throw delete ib[yb], bb
      })), ib[yb]
    }

    function ny(yb) {
      let bb = My.get(yb);
      return bb || (bb = Cy.t[yb].loadModel(Yy().Pf, !1).then((yb => (yb.dJ(!1), yb)), (bb => {
        throw My.delete(yb), bb
      })), My.set(yb, bb)), bb
    }

    function uy(yb) {
      var bb, Wy, Uy;
      let {
        mobType: hy,
        variation: fy,
        animation: Zy
      } = yb, Py = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, Jy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Oy = null !== (bb = null === Py || void 0 === Py ? void 0 : Py.size) && void 0 !== bb ? bb : 1,
        Ry = null !== (Wy = null === Py || void 0 === Py ? void 0 : Py.cosmetics) && void 0 !== Wy ? Wy : [],
        vb = null !== (Uy = null === Py || void 0 === Py ? void 0 : Py.OJ) && void 0 !== Uy ? Uy : null;
      let ib = !1,
        My = null,
        uy = null;
      const {
        engine: rb,
        Pf: Hy
      } = Yy(), ab = Hy.onBeforeRenderObservable.add((() => {
        var yb;
        null === (yb = uy) || void 0 === yb || yb.render(rb.getDeltaTime())
      })), Fy = null === vb ? null : ny(vb).catch((yb => (console.error(`Mob preview: could not load ${vb}`, yb), null)));
      return Promise.all([Xy(hy), Fy]).then((yb => {
        var bb, Wy, Uy;
        let [Py, Xy] = yb;
        if (ib) return;
        const ny = (0, Ty.g)().Ch.Iby,
          {
            hitBoxDimensions: rb
          } = (0, By.c)(hy),
          Hy = gb / Math.max(rb.height, rb.width);
        if (My = (0, Ey.i)(hy, Hy * Oy, !0, !0), ny.setPosition(My, Jy, -rb.height * Hy / 2, 0), ny.setRotationEulerY(My, Gy), Py.meshApi instanceof mb.b && Ry.length > 0)
          for (const [hy, fy] of Ry) Py.meshApi.updatePlayerCosmetic(null, My, hy, fy, !0);
        else Py.meshApi.updateVariation(My, hy, null !== fy && void 0 !== fy ? fy : "default");
        null !== vb && null !== Xy && function(yb, bb, Wy, Uy) {
          var hy;
          const fy = Cy.t[yb],
            Zy = (0, sy.g)();
          (0, sy.d)(fy, null === (hy = (0, ly.b)(Wy).meshMetadata.heldItemPositionParams) || void 0 === hy ? void 0 : hy.itemOffset, Zy);
          const Py = Vy.e * Zy.vZ.y,
            By = Zy.usesQuaternion ? Zy.quaternion : cb.Quaternion.FromEulerVector(Zy.rotation),
            Ky = new oy.d(`${bb.name}Hand`, Yy().Pf);
          Ky.position.Coy((0, Sy.c)(Zy.position, By, Py, fy.heldModelOffsetY())), Ky.rotationQuaternion = By, Ky.vZ.set(Zy.vZ.x, Py, Zy.vZ.z), bb.clone(`${bb.name}Held`, Ky).dJ(!0);
          const ey = (0, Ty.g)().Ch.Iby;
          ey.attachTransformNode(Ky, Uy, ey.getNamedNode(Uy, "ArmRightMesh"))
        }(vb, Xy, hy, My), ny.set(My, "aOpacity", 1);
        const ab = null !== (bb = (0, ly.b)(hy).meshMetadata.lifeformTypeForModelOverride) && void 0 !== bb ? bb : hy;
        uy = new qb.AnimatorState, uy.thinInstMgr = ny, uy.xWy = My, uy.lob = ny.doy(My, 0), uy.modelLifeformType = ab, uy.nodeNameAliases = null !== (Wy = null === (Uy = (0, Ky.d)(ab)) || void 0 === Uy ? void 0 : Uy.nodeNameAliases) && void 0 !== Wy ? Wy : null, uy.startAnimation(Zy, ey.h.Movement)
      })).catch((yb => {
        console.error(`Mob preview: could not load ${hy}`, yb)
      })), () => {
        ib = !0, Hy.onBeforeRenderObservable.remove(ab), null !== My && (0, Ty.g)().Ch.Iby.delete(My)
      }
    }

    function rb(yb, bb) {
      return uy({
        mobType: "NPC",
        variation: null,
        animation: yb.animation
      }, yb, bb)
    }

    function Hy(yb) {
      let {
        mobType: bb,
        variation: Wy,
        metaInfo: Uy,
        tamed: hy
      } = yb, fy = !1, Zy = null, cb = 0;
      const Py = (0, Ty.g)(),
        oy = Py.Ch.Iby,
        By = yb => {
          cb += Ry * (yb / 1e3) % (2 * Math.PI), oy.setRotationEulerY(Zy, cb)
        };
      return Xy(bb).then((yb => {
        if (fy) return;
        Zy = (0, Ey.i)(bb, Oy, !0, !0), oy.setPosition(Zy, 0, -Oy, 0), yb.meshApi.updateVariation(Zy, bb, Wy);
        const cb = {
          wool: "Sheared" !== Uy,
          saddle: "Saddled" === Uy,
          antlers: "Antlers" === Uy,
          collar: hy
        };
        for (const [bb, Wy] of Object.entries(cb)) oy.hasGroup(Zy, bb) && yb.meshApi.setMeshGroupVisibility(Zy, bb, Wy);
        oy.set(Zy, "aOpacity", 1), Py.on("renderTickBegin", By)
      })).catch((yb => {
        console.error(`Pet preview: could not load ${bb}`, yb)
      })), () => {
        fy = !0, Py.off("renderTickBegin", By), null !== Zy && oy.delete(Zy)
      }
    }
    class ab {
      constructor(yb, bb) {
        this.place = bb, this.remove = null;
        const {
          engine: Wy,
          Pf: Uy,
          canvas: hy
        } = Yy();
        yb.appendChild(hy), Wy.resize(), Wy.runRenderLoop((() => {
          Uy.render()
        }))
      }
      show(yb) {
        var bb;
        null === (bb = this.remove) || void 0 === bb || bb.call(this), this.remove = this.place(yb)
      }
      resize(yb, bb) {
        const {
          engine: Wy,
          canvas: Uy
        } = Yy();
        Uy.width = yb, Uy.height = bb, Wy.resize()
      }
      close() {
        var yb;
        Yy().engine.stopRenderLoop(), null === (yb = this.remove) || void 0 === yb || yb.call(this), this.remove = null
      }
    }
    class Fy {
      constructor(yb) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new ab(yb, (() => () => {}))
      }
      show(yb) {
        yb.figures !== this.view.figures && this.preload(yb.figures), this.view = yb, this.place()
      }
      resize(yb, bb) {
        this.preview.resize(yb, bb), this.aspect = yb / bb, this.place()
      }
      close() {
        this.preview.close();
        for (const yb of this.placed) null === yb || void 0 === yb || yb.remove();
        this.placed = []
      }
      preload(yb) {
        const bb = () => {};
        Xy("NPC").catch(bb);
        for (const {
            OJ: Wy
          }
          of yb) null !== Wy && ny(Wy).catch(bb)
      }
      place() {
        const {
          figures: yb,
          shown: bb
        } = this.view, Wy = yb.map(((Wy, Uy) => {
          var hy;
          const fy = null !== (hy = this.placed[Uy]) && void 0 !== hy ? hy : null;
          if (!bb[Uy]) return null === fy || void 0 === fy || fy.remove(), null;
          const Zy = (cb = (Uy + .5) / yb.length, Py = this.aspect, (.5 - cb) * (2 * Jy * Math.tan(Yy().camera.fov / 2)) * Py);
          var cb, Py;
          return null !== fy && fy.figure === Wy && fy.x === Zy ? fy : (null === fy || void 0 === fy || fy.remove(), {
            figure: Wy,
            x: Zy,
            remove: rb(Wy, Zy)
          })
        }));
        for (const Uy of this.placed.slice(yb.length)) null === Uy || void 0 === Uy || Uy.remove();
        this.placed = Wy
      }
    }

    function py(yb) {
      return new ab(yb, uy)
    }

    function Ly(yb) {
      return new Fy(yb)
    }

    function Qy(yb) {
      return new ab(yb, Hy)
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