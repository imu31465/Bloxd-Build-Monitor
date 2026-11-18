export const id = 270;
export const ids = [270];
export const modules = {
  39695: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      CapeMaterialPlugin: () => Ty,
      HueTintMaterialPlugin: () => Vy,
      LifeformMaterialPlugin: () => Jy,
      OverlayMaterialPlugin: () => gb
    });
    var Uy = Wy(39700),
      hy = Wy(36670);
    class fy extends((0, Uy.h)(hy.d)) {}(0, Uy.k)(hy.d, fy);
    var Zy = Wy(35784);
    class cb extends((0, Uy.h)(Zy.f)) {}(0, Uy.k)(Zy.f, cb);
    var Py = Wy(36513);
    class oy extends((0, Uy.h)(Py.c)) {}(0, Uy.k)(Py.c, oy);
    var By = Wy(36001),
      Ky = Wy(38746),
      ey = Wy(35997);
    class qb extends((0, Uy.h)(ey.e)) {
      constructor(yb, bb, Wy) {
        super(yb, bb, Wy), (0, By.f)(yb)
      }
      dispose(yb) {
        (0, By.j)(this._material), super.dispose(yb)
      }
    }(0, Uy.k)(ey.e, qb), (0, ey.g)({
      disableUnusedSpecularTerm: Uy.d,
      isLightingDisabled: yb => yb instanceof Ky.StandardMaterial && yb.disableLighting
    });
    var sy = Wy(37363);
    class Sy extends((0, Uy.h)(sy.f)) {}(0, Uy.k)(sy.f, Sy);
    var Ey = Wy(37468),
      ly = Wy(35921),
      mb = Wy(36835),
      Cy = Wy(35824);
    class Ty extends((0, Uy.h)(Ey.c)) {}(0, Uy.k)(Ey.c, Ty);
    class Vy extends((0, Uy.h)(ly.c)) {}(0, Uy.k)(ly.c, Vy);
    class Jy extends((0, Uy.h)(mb.l)) {}(0, Uy.k)(mb.l, Jy);
    class gb extends((0, Uy.h)(Cy.d)) {}(0, Uy.k)(Cy.d, gb)
  },
  39700: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Ly,
      h: () => mb,
      k: () => kb
    });
    var Uy = Wy(38746),
      hy = Wy(39702),
      fy = Wy(39734),
      Zy = Wy(39705),
      cb = Wy(36475),
      Py = Wy(36491),
      oy = Wy(36499),
      By = Wy(36503),
      Ky = Wy(35808),
      ey = Wy(35817),
      qb = Wy(39711),
      sy = Wy(35800),
      Sy = Wy(35804),
      Ey = Wy(35790);

    function ly(yb, bb) {
      return Object.assign((function(yb, Wy, Uy, hy) {
        return bb(this.featureState, yb, Wy, Uy, hy)
      }), {
        EU: yb
      })
    }

    function mb(yb) {
      const bb = class extends qb.d {
          constructor(bb, Wy) {
            const Uy = (0, Sy.bb)(bb),
              hy = Uy && (0, Sy.x)(Uy, yb.name);
            for (var fy = arguments.length, Zy = new Array(fy > 2 ? fy - 2 : 0), cb = 2; cb < fy; cb++) Zy[cb - 2] = arguments[cb];
            super(bb, yb.name, yb.priority, hy ? hy.defines : yb.defines(...Zy), !1), this.featureState = void 0, this.featureState = Wy, this._pluginManager._addPlugin(this), this._enable(!0), (0, Sy.z)(this._material, yb, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return yb.className
          }
          isCompatible(yb) {
            return yb === Ey.b.GLSL || yb === Ey.b.WGSL
          }
        },
        Wy = (0, sy.g)(yb);
      for (const [Uy, hy] of Object.entries(sy.e)) {
        const fy = yb[Uy];
        if (fy) {
          const yb = Wy[Uy];
          Object.defineProperty(bb.prototype, hy, {
            value: ly(fy, yb),
            writable: !0,
            configurable: !0
          })
        }
      }
      return bb
    }
    class Cy extends(mb(cb.b)) {}
    var Ty = Wy(38272),
      Vy = Wy(39714);
    const Jy = new WeakMap;

    function gb(yb, bb, Wy) {
      let Uy = Jy.get(Wy);
      Uy || (Uy = new Map, Jy.set(Wy, Uy));
      const {
        url: hy
      } = yb;
      let fy = Uy.get(hy);
      return fy || (fy = async function(yb, bb, Wy) {
        const {
          width: Uy,
          height: hy
        } = yb.getSize(), fy = Math.round(hy / Uy), cb = bb && bb.byteLength === Uy * Uy * fy * 4 ? bb : yb._readPixelsSync();
        return new Vy.e(cb, Uy, Uy, fy, Ty.b.TEXTUREFORMAT_RGBA, Wy, !0, !1, Zy.e.NEAREST_NEAREST_MIPLINEAR)
      }(yb, bb, Wy), Uy.set(hy, fy), fy.catch((() => {
        Uy.delete(hy)
      }))), fy
    }
    var Gy = Wy(36508);
    class Oy extends(mb(Py.j)) {
      constructor(yb, bb) {
        super(yb, bb), bb.textures.forEach(((yb, bb) => {
          yb.mirror.onLoadObservable.add((yb => {
            this.setTextureArrayData(yb, bb).catch((yb => {
              console.error(`Failed to build texture array for atlas ${bb}`, yb)
            }))
          }))
        })), (0, Gy.h)(bb, yb.shaderLanguage)
      }
      async setTextureArrayData(yb, bb) {
        var Wy, Uy;
        const hy = this.featureState,
          {
            width: fy,
            height: Zy
          } = yb.getSize(),
          cb = hy.useWebGL2 ? await gb(yb, null !== (Wy = null === (Uy = hy.sources.pixels) || void 0 === Uy ? void 0 : Uy[bb]) && void 0 !== Wy ? Wy : null, this._material.kWy()) : null;
        (0, Gy.e)(this._material, hy, bb, cb, fy, Math.round(Zy / fy), this._material.shaderLanguage)
      }
    }
    var Ry = Wy(39719),
      vb = Wy(38797),
      ib = Wy(35856),
      My = Wy(39721),
      Yy = Wy(38915),
      Xy = Wy(38784),
      ny = Wy(39689),
      uy = Wy(36185),
      rb = Wy(39729);
    class Hy extends Ry.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const ab = {
      Mesh: My.b,
      TransformNode: ny.d,
      uU: Ry.c,
      VertexBuffer: Ry.g,
      BoundingInfo: vb.b,
      dU: ib.dU,
      ArenaBuffer: Hy,
      SubMesh: Xy.d,
      VertexData: Yy.e,
      MirroredGeometry: rb.d,
      meshFromArrays: rb.e,
      plainMeshFromArrays: rb.i
    };
    (0, uy.f)(ab);
    var Fy = Wy(36001);
    class py extends(mb(By.g)) {
      constructor(yb, bb) {
        if (super(yb, bb), yb instanceof Uy.StandardMaterial && bb.dirLightCount > 0) {
          const bb = yb,
            Wy = bb._blockDirtyMechanism;
          bb._blockDirtyMechanism = !0, yb.disableLighting = !0, bb._blockDirtyMechanism = Wy;
          const Uy = (0, Sy.bb)(yb);
          Uy && (Uy.disableLighting = !0, (0, Sy._)(Uy))
        }(0, Fy.f)(yb)
      }
      dispose(yb) {
        (0, Fy.j)(this._material), super.dispose(yb)
      }
    }

    function Ly(yb, bb) {
      if (!(bb instanceof Uy.StandardMaterial) || bb.specularTexture) return;
      const {
        r: Wy,
        g: hy,
        b: fy
      } = bb.specularColor;
      0 === Wy && 0 === hy && 0 === fy && (yb.SPECULARTERM = !1)
    }(0, By.f)({
      disableUnusedSpecularTerm: Ly
    });
    var Qy = Wy(35943),
      jb = Wy(36201);
    const Dy = new RegExp(`^#define ${oy.b}\\s*$`, "m");
    class tb extends(mb(oy.f)) {
      constructor(yb, bb) {
        super(yb, bb), this.rh = !1, bb.ditherOnlyWhileFading && (jb.g.add(yb), this.prewarmDitherTwins(yb))
      }
      prewarmDitherTwins(yb) {
        const bb = new WeakSet;
        yb.onEffectCreatedObservable.add((Wy => {
          let {
            effect: Uy,
            subMesh: hy
          } = Wy;
          if (this.featureState.prewarmingDither || bb.has(Uy)) return;
          bb.add(Uy);
          const fy = null === hy || void 0 === hy ? void 0 : hy.getMesh();
          fy && !Dy.test(Uy.defines) && yb.kWy().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(fy) || bb.delete(Uy)
          }))
        }))
      }
      prewarmDither(yb) {
        if (this.rh || yb.Koy()) return !1;
        const bb = new Xy.d(0, 0, 0, 0, 0, yb, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(yb, bb)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== bb.effect
      }
      dispose(yb) {
        this.rh = !0, super.dispose(yb)
      }
    }
    const wy = new Map;

    function kb(yb, bb) {
      wy.set(yb, bb)
    }
    kb(cb.b, Cy), kb(Py.j, Oy), kb(oy.f, tb), kb(By.g, py), (0, Ky.c)({
      create: (yb, bb) => {
        const Wy = new Uy.StandardMaterial(yb.name, bb);
        return (0, Qy.t)(yb, Wy), Wy.detailMap._pluginDefineNames
      },
      write: (yb, bb, Wy) => {
        (0, Qy.X)(yb.mirror, bb, Wy)
      },
      addFeature: (yb, bb, Wy) => {
        const Uy = wy.get(bb.feature);
        if (!Uy) throw new Error(`${bb.feature.name} has no plugin class (registerPluginClass)`);
        new Uy(yb.mirror, bb.state, ...Wy)
      },
      texture: (yb, bb, Wy) => {
        let {
          url: Uy,
          noMipmap: hy,
          invertY: fy,
          samplingMode: cb,
          data: Py,
          sets: oy
        } = Wy;
        if (!Py) {
          const Wy = new Zy.e(Uy, bb, hy, fy, cb);
          return Object.assign(Wy, oy), void(0, ey.F)(yb, Wy)
        }
        const By = {},
          Ky = new Promise(((yb, bb) => {
            By.onLoad = yb, By.onError = (yb, Wy) => {
              bb(new Error(`${Py.context}: ${(null===Wy||void 0===Wy?void 0:Wy.message)||yb||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: qb,
            bytes: sy,
            label: Sy
          } = Py,
          Ey = {
            noMipmap: hy,
            invertY: !1,
            samplingMode: cb,
            ...By,
            mimeType: qb,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          ly = new Zy.e(null, bb, Ey);
        Qy.v.set(ly, Ky), Object.assign(ly, oy), ly.updateURL(Uy, sy);
        const mb = ly.getInternalTexture();
        mb && (mb.label = Sy), yb.uvSet = ly.coordinatesIndex, yb.matrix.set((0, Qy.P)(ly)), (0, ey.F)(yb, ly)
      },
      cube: (yb, bb, Wy) => {
        let {
          rootUrl: Uy,
          files: fy,
          noMipmap: cb,
          luminance: Py
        } = Wy;
        const {
          samplingMode: oy
        } = yb.sampler, By = oy === (0, ey.y)(cb) ? null : () => {
          (0, Qy.N)(Ky, oy)
        }, Ky = new hy.e(Uy, bb, null, cb, fy, By, null, (0, ey.w)(Py));
        Ky.coordinatesMode = Zy.e.SKYBOX_MODE, (0, ey.F)(yb, Ky)
      },
      canvas: (yb, bb, Wy) => {
        let {
          width: Uy,
          height: hy,
          mipmaps: cb,
          samplingMode: Py,
          hasAlpha: oy = !1,
          wrap: By = Zy.e.CLAMP_ADDRESSMODE
        } = Wy;
        const Ky = new fy.c(bb, {
          width: Uy,
          height: hy
        }, yb, cb, Py);
        Ky.hasAlpha = oy, Ky.wrapU = By, Ky.wrapV = By;
        const ey = (0, Qy.E)(Ky);
        return (0, Qy.G)(ey, Ky), ey
      }
    })
  },
  39729: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => By,
      e: () => Ky,
      i: () => ey
    });
    var Uy = Wy(39719),
      hy = Wy(38540),
      fy = Wy(38797),
      Zy = Wy(38922),
      cb = Wy(39721),
      Py = Wy(38915),
      oy = Wy(36060);
    class By extends Zy.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (yb, bb) => {
          this.releaseUnlessInstanced(bb)
        }, this.onLinked = null
      }
      link(yb) {
        var bb;
        (0, oy.n)(yb), this.model = yb, null === (bb = this.onLinked) || void 0 === bb || bb.call(this, yb)
      }
      relink() {
        this.release();
        const yb = [];
        for (const hy of Object.values(this._vertexBuffers))
          if (!hy.getIsInstanced()) {
            const {
              byteOffset: bb,
              byteStride: Wy,
              type: Uy,
              normalized: fy
            } = hy;
            yb.push({
              kind: hy.getKind(),
              data: hy.getData(),
              offset: bb,
              stride: Wy,
              components: hy.getSize(),
              glType: Uy,
              isNormalized: fy
            })
          } const bb = this._indices.length ? this._indices : null,
          {
            minimum: Wy,
            maximum: Uy
          } = this.extend;
        this.link(new oy.f(yb, bb, this.getTotalVertices(), new Float64Array(Wy.hBy()), new Float64Array(Uy.hBy())))
      }
      copy(yb) {
        if (!this.model) return super.copy(yb);
        const bb = new By(yb, this.kWy()),
          Wy = this.Mqy(void 0, !0);
        Wy && bb.setIndices(Wy);
        let Zy = !1;
        for (const fy in this._vertexBuffers) {
          const yb = this._vertexBuffers[fy],
            Wy = yb.getData();
          if (!Wy) continue;
          const cb = yb.getSize(),
            {
              type: Py,
              byteOffset: oy,
              byteStride: By,
              normalized: Ky
            } = yb;
          Zy ||= yb.isUpdatable();
          const ey = yb.getIsInstanced() ? (Wy instanceof Array ? 4 * Wy.length : Wy.byteLength) / By : this.getTotalVertices(),
            qb = (0, hy.u)(Wy, cb, Py, oy, By, ey, !0),
            sy = {
              updatable: yb.isUpdatable(),
              stride: cb,
              type: Py,
              normalized: Ky,
              takeBufferOwnership: !0,
              instanced: yb.getIsInstanced()
            };
          bb.setVerticesBuffer(new Uy.g(this.xh(), qb, fy, sy), ey)
        }
        return bb._updatable = Zy, bb._boundingInfo = new fy.b(this.extend.minimum, this.extend.maximum), bb.relink(), bb
      }
      static mergeMeshes(yb, bb, Wy, Uy, hy, fy) {
        const Py = yb[0].kWy(),
          oy = new cb.b(yb[0].name + "_merged", Py),
          Ky = new By(Zy.e.RandomId(), Py, void 0, !1, oy);
        try {
          if (!cb.b.MergeMeshes(yb, bb, Wy, oy, hy, fy)) return oy.dispose(), null
        } catch (ey) {
          throw oy.dispose(), ey
        }
        return Ky.relink(), oy
      }
      removeVerticesData(yb) {
        this.releaseUnlessInstanced(yb), super.removeVerticesData(yb)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(yb) {
        var bb;
        yb && null !== (bb = this.getVertexBuffer(yb)) && void 0 !== bb && bb.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, oy.v)(this.model), this.model = null)
      }
    }

    function Ky(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new cb.b(yb, Wy);
      const hy = (0, oy.l)(bb),
        {
          positions: fy,
          normals: Ky,
          uvs: ey,
          indices: qb,
          named: sy = {}
        } = bb,
        Sy = new Py.e;
      Sy.positions = fy, Sy.normals = null !== Ky && void 0 !== Ky ? Ky : null, Sy.uvs = null !== ey && void 0 !== ey ? ey : null, Sy.indices = qb;
      const Ey = new By(Zy.e.RandomId(), Wy, Sy, !1, Uy);
      for (const {
          kind: Zy,
          components: cb
        }
        of hy.vertexAttributes) Zy in sy && Uy.setVerticesData(Zy, sy[Zy], !1, cb);
      return Ey.link(hy), Uy
    }

    function ey(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const hy = new cb.b(yb, Wy),
        {
          positions: fy,
          normals: Zy,
          uvs: oy,
          indices: By
        } = bb;
      return Object.assign(new Py.e, {
        positions: fy,
        normals: Zy,
        uvs: oy,
        indices: By
      }).applyToMesh(hy, Uy), hy
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);