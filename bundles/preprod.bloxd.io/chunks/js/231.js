export const id = 231;
export const ids = [231];
export const modules = {
  38620: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => cb,
      d: () => Sy,
      g: () => oy,
      k: () => Py
    });
    var Uy = Wy(38399),
      hy = Wy(37350),
      fy = Wy(38540),
      Zy = Wy(38442);
    class cb {
      get Koy() {
        return this._isDisposed
      }
      constructor(yb, bb, Wy) {
        let hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          fy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          cb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Py = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          oy = arguments.length > 7 ? arguments[7] : void 0,
          By = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, Zy.d)(), yb && yb.kWy ? this._engine = yb.kWy().xh() : this._engine = yb, this._updatable = Wy, this._instanced = cb, this._divisor = oy || 1, this._label = By, bb instanceof Uy.e ? (this._data = null, this._buffer = bb) : (this._data = bb, this._buffer = null), this.byteStride = Py ? hy : hy * Float32Array.BYTES_PER_ELEMENT, fy || this.create()
      }
      createVertexBuffer(yb, bb, Wy, Uy, hy) {
        let fy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Zy = arguments.length > 6 ? arguments[6] : void 0;
        const cb = fy ? bb : bb * Float32Array.BYTES_PER_ELEMENT,
          oy = Uy ? fy ? Uy : Uy * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new Py(this._engine, this, yb, this._updatable, !0, oy, void 0 === hy ? this._instanced : hy, cb, Wy, void 0, void 0, !0, this._divisor || Zy)
      }
      isUpdatable() {
        return this._updatable
      }
      getData() {
        return this._data
      }
      getBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / Float32Array.BYTES_PER_ELEMENT
      }
      create() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !yb && this._buffer || (yb = yb || this._data, yb && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, yb), this._data = yb) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(yb, this._label), this._data = yb) : this._buffer = this._engine.createVertexBuffer(yb, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.Hy > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.Hy, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.Hy, void 0, this._label));
          hy.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(yb) {
        this.create(yb)
      }
      updateDirectly(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, yb, Uy ? bb : bb * Float32Array.BYTES_PER_ELEMENT, Wy ? Wy * this.byteStride : void 0), this._data = 0 === bb && void 0 === Wy ? yb : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class Py {
      get Koy() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(yb) {
        const bb = 0 != yb;
        this._instanceDivisor = yb, bb !== this._instanced && (this._instanced = bb, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const yb = this.getData();
        return yb ? Array.isArray(yb) ? yb.length / (this.byteStride / 4) - this.byteOffset / 4 : (yb.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(yb, bb, Wy, Uy, hy, Zy, Ky, ey, qb, sy) {
        let Sy, Ey = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          ly = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          mb = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          Cy = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = yb, "object" === typeof Uy && null !== Uy ? (Sy = Uy.updatable ?? !1, hy = Uy.postponeInternalCreation, Zy = Uy.stride, Ky = Uy.instanced, ey = Uy.offset, qb = Uy.size, sy = Uy.type, Ey = Uy.normalized ?? !1, ly = Uy.useBytes ?? !1, mb = Uy.divisor ?? 1, Cy = Uy.takeBufferOwnership ?? !1, this._label = Uy.label) : Sy = !!Uy, bb instanceof cb ? (this._buffer = bb, this._ownsBuffer = Cy) : (this._buffer = new cb(yb, bb, Sy, Zy, hy, Ky, ly, mb, this._label), this._ownsBuffer = !0), this.uniqueId = Py._Counter++, this._kind = Wy, void 0 === sy) {
          const yb = this.getData();
          this.type = yb ? By(yb) : Py.FLOAT
        } else this.type = sy;
        const Ty = (0, fy.s)(this.type);
        ly ? (this._size = qb || (Zy ? Zy / Ty : oy(Wy)), this.byteStride = Zy || this._buffer.byteStride || this._size * Ty, this.byteOffset = ey || 0) : (this._size = qb || Zy || oy(Wy), this.byteStride = Zy ? Zy * Ty : this._buffer.byteStride || this._size * Ty, this.byteOffset = (ey || 0) * Ty), this.normalized = Ey, this._instanced = void 0 !== Ky && Ky, this._instanceDivisor = Ky ? mb : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(yb) {
        switch (yb) {
          case Py.BYTE:
            return 0;
          case Py.UNSIGNED_BYTE:
            return 1;
          case Py.SHORT:
            return 2;
          case Py.UNSIGNED_SHORT:
            return 3;
          case Py.INT:
            return 4;
          case Py.UNSIGNED_INT:
            return 5;
          case Py.FLOAT:
            return 6;
          case Py.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${yb}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (Py._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
      }
      _rebuild() {
        this._buffer?._rebuild()
      }
      getKind() {
        return this._kind
      }
      isUpdatable() {
        return this._buffer.isUpdatable()
      }
      getData() {
        return this._buffer.getData()
      }
      getFloatData(yb, bb) {
        const Wy = this.getData();
        return Wy ? (0, fy.p)(Wy, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, yb, bb) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, fy.s)(this.type)
      }
      dPy() {
        return this.byteOffset / (0, fy.s)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, fy.s)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(yb) {
        this._buffer.create(yb), this._alignBuffer()
      }
      update(yb) {
        this._buffer.update(yb), this._alignBuffer()
      }
      updateDirectly(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(yb, bb, void 0, Wy), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(yb, bb) {
        (0, fy.i)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, yb, this.normalized, ((yb, Wy) => {
          for (let Uy = 0; Uy < this._size; Uy++) bb(yb[Uy], Wy + Uy)
        }))
      }
      _alignBuffer() {}
    }

    function oy(yb) {
      switch (yb) {
        case Py.UVKind:
        case Py.UV2Kind:
        case Py.UV3Kind:
        case Py.UV4Kind:
        case Py.UV5Kind:
        case Py.UV6Kind:
          return 2;
        case Py.NormalKind:
        case Py.PositionKind:
          return 3;
        case Py.ColorKind:
        case Py.ColorInstanceKind:
        case Py.MatricesIndicesKind:
        case Py.MatricesIndicesExtraKind:
        case Py.MatricesWeightsKind:
        case Py.MatricesWeightsExtraKind:
        case Py.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + yb + "'")
      }
    }

    function By(yb) {
      return yb instanceof Int8Array ? Py.BYTE : yb instanceof Uint8Array ? Py.UNSIGNED_BYTE : yb instanceof Int16Array ? Py.SHORT : yb instanceof Uint16Array ? Py.UNSIGNED_SHORT : yb instanceof Int32Array ? Py.INT : yb instanceof Uint32Array ? Py.UNSIGNED_INT : Py.FLOAT
    }

    function Ky(yb) {
      return (0, fy.s)(yb)
    }

    function ey(yb, bb, Wy, Uy, hy, Zy, cb, Py) {
      (0, fy.i)(yb, bb, Wy, Uy, hy, Zy, cb, ((yb, bb) => {
        for (let Wy = 0; Wy < Uy; Wy++) Py(yb[Wy], bb + Wy)
      }))
    }

    function qb(yb, bb, Wy, Uy, hy, Zy, cb, Py) {
      return (0, fy.p)(yb, bb, Wy, Uy, hy, Zy, cb, Py)
    }
    Py._Counter = 0, Py.BYTE = 5120, Py.UNSIGNED_BYTE = 5121, Py.SHORT = 5122, Py.UNSIGNED_SHORT = 5123, Py.INT = 5124, Py.UNSIGNED_INT = 5125, Py.FLOAT = 5126, Py.HALF_FLOAT = 5131, Py.PositionKind = "position", Py.NormalKind = "normal", Py.TangentKind = "tangent", Py.UVKind = "uv", Py.UV2Kind = "uv2", Py.UV3Kind = "uv3", Py.UV4Kind = "uv4", Py.UV5Kind = "uv5", Py.UV6Kind = "uv6", Py.ColorKind = "color", Py.ColorInstanceKind = "instanceColor", Py.MatricesIndicesKind = "matricesIndices", Py.MatricesWeightsKind = "matricesWeights", Py.MatricesIndicesExtraKind = "matricesIndicesExtra", Py.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let sy = !1;

    function Sy() {
      sy || (sy = !0, Py.DeduceStride = oy, Py.GetDataType = By, Py.GetTypeByteLength = Ky, Py.ForEach = ey, Py.GetFloatData = qb)
    }
  },
  38399: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy
    });
    class Uy {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.Hy = 0, this.is32Bits = !1, this.uniqueId = Uy._Counter++
      }
    }
    Uy._Counter = 0
  },
  38611: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy
    });
    var Uy = Wy(35861),
      hy = Wy(38620);
    class fy {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || bb && !this.pickedMesh.isVerticesDataPresent(hy.k.NormalKind)) return null;
        let Wy, fy = this.pickedMesh.Mqy();
        0 === fy?.length && (fy = null);
        const Zy = Uy.j.dU[0],
          cb = Uy.j.dU[1],
          Py = Uy.j.dU[2];
        if (bb) {
          const yb = this.pickedMesh.getVerticesData(hy.k.NormalKind);
          let bb = fy ? Uy.n.FromArrayToRef(yb, 3 * fy[3 * this.faceId], Zy) : Zy.vcy(yb[3 * this.faceId * 3], yb[3 * this.faceId * 3 + 1], yb[3 * this.faceId * 3 + 2]),
            oy = fy ? Uy.n.FromArrayToRef(yb, 3 * fy[3 * this.faceId + 1], cb) : cb.vcy(yb[3 * (3 * this.faceId + 1)], yb[3 * (3 * this.faceId + 1) + 1], yb[3 * (3 * this.faceId + 1) + 2]),
            By = fy ? Uy.n.FromArrayToRef(yb, 3 * fy[3 * this.faceId + 2], Py) : Py.vcy(yb[3 * (3 * this.faceId + 2)], yb[3 * (3 * this.faceId + 2) + 1], yb[3 * (3 * this.faceId + 2) + 2]);
          bb = bb.scale(this.bu), oy = oy.scale(this.bv), By = By.scale(1 - this.bu - this.bv), Wy = new Uy.n(bb.x + oy.x + By.x, bb.y + oy.y + By.y, bb.z + oy.z + By.z)
        } else {
          const yb = this.pickedMesh.getVerticesData(hy.k.PositionKind),
            bb = fy ? Uy.n.FromArrayToRef(yb, 3 * fy[3 * this.faceId], Zy) : Zy.vcy(yb[3 * this.faceId * 3], yb[3 * this.faceId * 3 + 1], yb[3 * this.faceId * 3 + 2]),
            oy = fy ? Uy.n.FromArrayToRef(yb, 3 * fy[3 * this.faceId + 1], cb) : cb.vcy(yb[3 * (3 * this.faceId + 1)], yb[3 * (3 * this.faceId + 1) + 1], yb[3 * (3 * this.faceId + 1) + 2]),
            By = fy ? Uy.n.FromArrayToRef(yb, 3 * fy[3 * this.faceId + 2], Py) : Py.vcy(yb[3 * (3 * this.faceId + 2)], yb[3 * (3 * this.faceId + 2) + 1], yb[3 * (3 * this.faceId + 2) + 2]),
            Ky = bb.subtract(oy),
            ey = By.subtract(oy);
          Wy = Uy.n.Cross(Ky, ey)
        }
        const oy = (yb, bb) => {
          if (-1 !== this.thinInstanceIndex) {
            const Wy = yb._thinInstanceDataStorage.matrixData,
              hy = this.thinInstanceIndex << 4;
            if (Wy && Wy.length > hy) {
              const yb = Uy.j.Matrix[0];
              Uy.c.FromArrayToRef(Wy, hy, yb), Uy.n.TransformNormalToRef(bb, yb, bb)
            }
          }
          let Wy = yb.getWorldMatrix();
          yb.nonUniformScaling && (Uy.j.Matrix[0].Coy(Wy), Wy = Uy.j.Matrix[0], Wy.setTranslationFromFloats(0, 0, 0), Wy.invert(), Wy.transposeToRef(Uy.j.Matrix[1]), Wy = Uy.j.Matrix[1]), Uy.n.TransformNormalToRef(bb, Wy, bb)
        };
        if (yb && oy(this.pickedMesh, Wy), this.ray) {
          const bb = Uy.j.dU[0].Coy(Wy);
          yb || oy(this.pickedMesh, bb), Uy.n.Dot(bb, this.ray.direction) > 0 && Wy.negateInPlace()
        }
        return Wy.normalize(), Wy
      }
      getTextureCoordinates() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hy.k.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(yb)) return null;
        const bb = this.pickedMesh.Mqy();
        if (!bb) return null;
        const Wy = this.pickedMesh.getVerticesData(yb);
        if (!Wy) return null;
        let fy = Uy.m.FromArray(Wy, 2 * bb[3 * this.faceId]),
          Zy = Uy.m.FromArray(Wy, 2 * bb[3 * this.faceId + 1]),
          cb = Uy.m.FromArray(Wy, 2 * bb[3 * this.faceId + 2]);
        return fy = fy.scale(this.bu), Zy = Zy.scale(this.bv), cb = cb.scale(1 - this.bu - this.bv), new Uy.m(fy.x + Zy.x + cb.x, fy.y + Zy.y + cb.y)
      }
    }
  },
  38442: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy
    });
    var Uy = Wy(38305);
    let hy = !1;

    function fy() {
      hy || (hy = !0, Uy.ThinEngine.prototype.updateDynamicIndexBuffer = function(yb, bb) {
        let Wy;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(yb), Wy = yb.is32Bits ? bb instanceof Uint32Array ? bb : new Uint32Array(bb) : bb instanceof Uint16Array ? bb : new Uint16Array(bb), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Wy, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, Uy.ThinEngine.prototype.updateDynamicVertexBuffer = function(yb, bb, Wy, Uy) {
        this.bindArrayBuffer(yb), void 0 === Wy && (Wy = 0);
        const hy = bb.byteLength || bb.length;
        void 0 === Uy || Uy >= hy && 0 === Wy ? bb instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Wy, new Float32Array(bb)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Wy, bb) : bb instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Wy, new Float32Array(bb).subarray(0, Uy / 4)) : (bb = ArrayBuffer.isView(bb) ? new Uint8Array(bb.buffer, bb.byteOffset, Uy) : new Uint8Array(bb, 0, Uy), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Wy, bb)), this._resetVertexBufferBinding()
      })
    }
  },
  38411: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy
    });
    class Uy {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          bb = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = bb, !yb && (yb = bb.createTexture(), !yb)) throw new Error("Unable to create webGL texture");
        this.set(yb)
      }
      setUsage() {}
      set(yb) {
        this._webGLTexture = yb
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(yb) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(yb)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const yb of this._MSAARenderBuffers) this._context.deleteRenderbuffer(yb);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[yb] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  38362: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => mb
    });
    var Uy = Wy(35893),
      hy = Wy(38312),
      fy = Wy(35886),
      Zy = Wy(37350),
      cb = Wy(35877),
      Py = Wy(38371);
    class oy {
      constructor() {
        let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, yb && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(yb) {
        this._zOffset !== yb && (this._zOffset = yb, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(yb) {
        this._zOffsetUnits !== yb && (this._zOffsetUnits = yb, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(yb) {
        this._cullFace !== yb && (this._cullFace = yb, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(yb) {
        this._cull !== yb && (this._cull = yb, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(yb) {
        this._depthFunc !== yb && (this._depthFunc = yb, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(yb) {
        this._depthMask !== yb && (this._depthMask = yb, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(yb) {
        this._depthTest !== yb && (this._depthTest = yb, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(yb) {
        this._frontFace !== yb && (this._frontFace = yb, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(yb) {
        this.isDirty && (this._isCullDirty && (this.cull ? yb.enable(yb.CULL_FACE) : yb.disable(yb.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (yb.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (yb.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? yb.enable(yb.DEPTH_TEST) : yb.disable(yb.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (yb.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (yb.enable(yb.POLYGON_OFFSET_FILL), yb.polygonOffset(this.zOffset, this.zOffsetUnits)) : yb.disable(yb.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (yb.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class By {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(yb) {
        this._func !== yb && (this._func = yb, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(yb) {
        this._backFunc !== yb && (this._backFunc = yb, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(yb) {
        this._funcRef !== yb && (this._funcRef = yb, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(yb) {
        this._funcMask !== yb && (this._funcMask = yb, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(yb) {
        this._opStencilFail !== yb && (this._opStencilFail = yb, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(yb) {
        this._opDepthFail !== yb && (this._opDepthFail = yb, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(yb) {
        this._opStencilDepthPass !== yb && (this._opStencilDepthPass = yb, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(yb) {
        this._backOpStencilFail !== yb && (this._backOpStencilFail = yb, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(yb) {
        this._backOpDepthFail !== yb && (this._backOpDepthFail = yb, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(yb) {
        this._backOpStencilDepthPass !== yb && (this._backOpStencilDepthPass = yb, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(yb) {
        this._mask !== yb && (this._mask = yb, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(yb) {
        this._enabled !== yb && (this._enabled = yb, this._isStencilTestDirty = !0)
      }
      constructor() {
        let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, yb && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(yb) {
        if (!yb) return;
        const bb = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = bb ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = bb ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = bb ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = bb ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = bb ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = bb ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = bb ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = bb ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = bb ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = bb ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = bb ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = bb ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? yb.enable(yb.STENCIL_TEST) : yb.disable(yb.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (yb.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (yb.stencilFuncSeparate(yb.FRONT, this.func, this.funcRef, this.funcMask), yb.stencilFuncSeparate(yb.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (yb.stencilOpSeparate(yb.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), yb.stencilOpSeparate(yb.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class Ky {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = Ky.ALWAYS, this.opStencilFail = Ky.KEEP, this.opDepthFail = Ky.KEEP, this.opStencilDepthPass = Ky.REPLACE, this.backFunc = Ky.ALWAYS, this.backOpStencilFail = Ky.KEEP, this.backOpDepthFail = Ky.KEEP, this.backOpStencilDepthPass = Ky.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(yb) {
        this.func = yb
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(yb) {
        this.backFunc = yb
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(yb) {
        this.funcRef = yb
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(yb) {
        this.funcMask = yb
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(yb) {
        this.opStencilFail = yb
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(yb) {
        this.opDepthFail = yb
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(yb) {
        this.opStencilDepthPass = yb
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(yb) {
        this.backOpStencilFail = yb
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(yb) {
        this.backOpDepthFail = yb
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(yb) {
        this.backOpStencilDepthPass = yb
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(yb) {
        this.mask = yb
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(yb) {
        this.enabled = yb
      }
    }
    Ky.ALWAYS = 519, Ky.KEEP = 7680, Ky.REPLACE = 7681;
    var ey = Wy(38376),
      qb = Wy(38347),
      sy = Wy(38287),
      Sy = Wy(38325),
      Ey = Wy(38338);

    function ly(yb, bb) {
      if (bb) {
        const {
          requestAnimationFrame: Wy
        } = bb;
        if ("function" === typeof Wy) return Wy(yb)
      }
      if ((0, Sy.i)()) {
        const {
          requestAnimationFrame: Wy
        } = bb || window;
        if ("function" === typeof Wy) return Wy(yb)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(yb);
      return setTimeout(yb, 16)
    }
    class mb {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(yb) {
        return this._shaderProcessor
      }
      _resetAlphaMode() {
        this._alphaMode.fill(-1), this._alphaEquation.fill(-1)
      }
      get shaderPlatformName() {
        return this._shaderPlatformName
      }
      _clearEmptyResources() {
        this._emptyTexture = null, this._emptyCubeTexture = null, this._emptyTexture3D = null, this._emptyTexture2DArray = null
      }
      get Aoy() {
        return this._useReverseDepthBuffer
      }
      set Aoy(yb) {
        yb !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = yb, this._depthCullingState.depthFunc = yb ? 518 : 515)
      }
      setColorWrite(yb) {
        yb !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = yb)
      }
      getColorWrite() {
        return this._colorWrite
      }
      get depthCullingState() {
        return this._depthCullingState
      }
      get alphaState() {
        return this._alphaState
      }
      get stencilState() {
        return this._stencilState
      }
      get stencilStateComposer() {
        return this._stencilStateComposer
      }
      _getGlobalDefines(yb) {
        if (yb) return this.isNDCHalfZRange ? yb.IS_NDC_HALF_ZRANGE = "" : delete yb.IS_NDC_HALF_ZRANGE, this.Aoy ? yb.USE_REVERSE_DEPTHBUFFER = "" : delete yb.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? yb.USE_EXACT_SRGB_CONVERSIONS = "" : delete yb.USE_EXACT_SRGB_CONVERSIONS);
        {
          let yb = "";
          return this.isNDCHalfZRange && (yb += "#define IS_NDC_HALF_ZRANGE"), this.Aoy && (yb && (yb += "\n"), yb += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (yb && (yb += "\n"), yb += "#define USE_EXACT_SRGB_CONVERSIONS"), yb
        }
      }
      _rebuildInternalTextures() {
        const yb = this._internalTexturesCache.slice();
        for (const bb of yb) bb._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const yb = this._renderTargetWrapperCache.slice();
        for (const bb of yb) bb.textures?.some((yb => 15 === yb.source)) || bb._rebuild()
      }
      _rebuildEffects() {
        for (const yb in this._compiledEffects) {
          const bb = this._compiledEffects[yb];
          bb._pipelineContext = null, bb._prepareEffect()
        }
        hy.c.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        Zy.b.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(yb) {
        setTimeout((() => {
          this._clearEmptyResources();
          const bb = this._depthCullingState.depthTest,
            Wy = this._depthCullingState.depthFunc,
            Uy = this._depthCullingState.depthMask,
            hy = this._stencilState.stencilTest;
          yb(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = bb, this._depthCullingState.depthFunc = Wy, this._depthCullingState.depthMask = Uy, this._stencilState.stencilTest = hy, this._flagContextRestored()
        }), 0)
      }
      get Koy() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(yb) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(yb) {}
      getClassName() {
        return "AbstractEngine"
      }
      get emptyTexture() {
        return this._emptyTexture || (this._emptyTexture = this.createRawTexture(new Uint8Array(4), 1, 1, 5, !1, !1, 1)), this._emptyTexture
      }
      get emptyTexture3D() {
        return this._emptyTexture3D || (this._emptyTexture3D = this.createRawTexture3D(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture3D
      }
      get emptyTexture2DArray() {
        return this._emptyTexture2DArray || (this._emptyTexture2DArray = this.createRawTexture2DArray(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture2DArray
      }
      get emptyCubeTexture() {
        if (!this._emptyCubeTexture) {
          const yb = new Uint8Array(4),
            bb = [yb, yb, yb, yb, yb, yb];
          this._emptyCubeTexture = this.createRawCubeTexture(bb, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(yb) {
        this._framebufferDimensionsObject = yb
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(yb) {
        if (!yb) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const bb = this._activeRenderLoops.indexOf(yb);
        bb >= 0 && (this._activeRenderLoops.splice(bb, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: yb
            } = this.customAnimationFrameRequester;
            yb && yb(this.customAnimationFrameRequester.yf), delete this.customAnimationFrameRequester.yf
          }
        } else if (0 !== this._frameHandler) {
          const yb = this._frameHandler;
          if (this._frameHandler = 0, (0, Sy.i)()) {
            const {
              cancelAnimationFrame: bb
            } = this.getHostWindow() || window;
            if ("function" === typeof bb) return bb(yb)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(yb);
          return clearTimeout(yb)
        }
      }
      Jm() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      gC() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(yb) {
        this._maxFPS = yb, void 0 !== yb && (this._minFrameTime = yb <= 0 ? Number.MAX_VALUE : 1e3 / yb)
      }
      _isOverFrameTime(yb) {
        if (!yb || void 0 === this._maxFPS) return !1;
        const bb = yb - this._lastFrameTime;
        return this._lastFrameTime = yb, this._renderAccumulator += bb, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(yb) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(yb)) {
          let yb = !0;
          (this.Koy || !this.renderEvenInBackground && this._windowIsBackground) && (yb = !1), yb && (this.Jm(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.gC())
        }
      }
      _renderLoop(yb) {
        this._processFrame(yb), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let yb = 0; yb < this._activeRenderLoops.length; yb++) {
          (0, this._activeRenderLoops[yb])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(yb, bb) {
        return ly(yb, bb)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.yf = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.yf) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(yb) {
        -1 === this._activeRenderLoops.indexOf(yb) && (this._activeRenderLoops.push(yb), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(yb) {
        this._depthCullingState.depthTest = yb
      }
      setZOffset(yb) {
        this._depthCullingState.zOffset = this.Aoy ? -yb : yb
      }
      getZOffset() {
        const yb = this._depthCullingState.zOffset;
        return this.Aoy ? -yb : yb
      }
      setZOffsetUnits(yb) {
        this._depthCullingState.zOffsetUnits = this.Aoy ? -yb : yb
      }
      getZOffsetUnits() {
        const yb = this._depthCullingState.zOffsetUnits;
        return this.Aoy ? -yb : yb
      }
      getHostWindow() {
        return (0, Sy.i)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(yb) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const yb of this.scenes) yb._rebuildTextures();
        for (const yb of this._virtualScenes) yb._rebuildTextures()
      }
      _releaseRenderTargetWrapper(yb) {
        const bb = this._renderTargetWrapperCache.indexOf(yb); - 1 !== bb && this._renderTargetWrapperCache.splice(bb, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(yb, bb, Wy) {
        const Uy = bb || this.getRenderWidth(),
          hy = Wy || this.getRenderHeight(),
          fy = yb.x || 0,
          Zy = yb.y || 0;
        this._cachedViewport = yb, this._viewport(fy * Uy, Zy * hy, Uy * yb.width, hy * yb.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(yb) {
        return new Path2D(yb)
      }
      get description() {
        let yb = this.name + this.version;
        return this._caps.parallelShaderCompile && (yb += " - Parallel shader compilation"), yb
      }
      _createTextureBase(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          cb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Py = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          oy = arguments.length > 7 ? arguments[7] : void 0,
          By = arguments.length > 8 ? arguments[8] : void 0,
          Ky = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          ey = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          qb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          Sy = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          Ey = arguments.length > 13 ? arguments[13] : void 0,
          ly = arguments.length > 14 ? arguments[14] : void 0,
          Cy = arguments.length > 15 ? arguments[15] : void 0;
        const Ty = "data:" === (yb = yb || "").substring(0, 5),
          Vy = "blob:" === yb.substring(0, 5),
          Jy = Ty && -1 !== yb.indexOf(";base64,"),
          gb = ey || new sy.d(this, 1);
        gb !== ey && (gb.label = yb.substring(0, 60));
        const Gy = yb;
        !this._transformTextureUrl || Jy || ey || Ky || (yb = this._transformTextureUrl(yb)), Gy !== yb && (gb._originalUrl = Gy);
        const Oy = yb.lastIndexOf(".");
        let Ry = Sy || (Oy > -1 ? yb.substring(Oy).toLowerCase() : "");
        Ry.indexOf("?") > -1 && (Ry = Ry.split("?")[0]);
        const vb = mb.GetCompatibleTextureLoader(Ry, Ey);
        Uy && Uy.addPendingData(gb), gb.url = yb, gb.generateMipMaps = !bb, gb.samplingMode = hy, gb.invertY = Wy, gb._useSRGBBuffer = this._getUseSRGBBuffer(!!Cy, bb), this._doNotHandleContextLost || (gb._buffer = Ky);
        let ib = null;
        cb && !ey && (ib = gb.onLoadedObservable.add(cb)), ey || this._internalTexturesCache.push(gb);
        const My = (Wy, ey) => {
          Uy && Uy.removePendingData(gb), yb === Gy ? (ib && gb.onLoadedObservable.remove(ib), fy.c.UseFallbackTexture && yb !== fy.c.FallbackTexture && this._createTextureBase(fy.c.FallbackTexture, bb, gb.invertY, Uy, hy, null, Py, oy, By, Ky, gb), Wy = (Wy || "Unknown error") + (fy.c.UseFallbackTexture ? " - Fallback texture was used" : ""), gb.onErrorObservable.notifyObservers({
            message: Wy,
            exception: ey
          }), Py && Py(Wy, ey)) : (Zy.b.Warn(`Failed to load ${yb}, falling back to ${Gy}`), this._createTextureBase(Gy, bb, gb.invertY, Uy, hy, cb, Py, oy, By, Ky, gb, qb, Sy, Ey, ly, Cy))
        };
        if (vb) {
          const bb = async yb => {
            (await vb).loadData(yb, gb, ((yb, bb, Wy, fy, Zy, cb) => {
              cb ? My("TextureLoader failed to load data") : oy(gb, Ry, Uy, {
                width: yb,
                height: bb
              }, gb.invertY, !Wy, fy, (() => (Zy(), !1)), hy)
            }), ly)
          };
          if (Ky) {
            const yb = async yb => {
              try {
                await bb(yb)
              } catch (Wy) {
                My("Failed to parse texture data", Wy)
              }
            };
            Ky instanceof ArrayBuffer ? yb(new Uint8Array(Ky)) : ArrayBuffer.isView(Ky) ? yb(Ky) : Py && Py("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(yb, (async yb => {
            try {
              await bb(new Uint8Array(yb))
            } catch (Wy) {
              My("Failed to parse texture data", Wy)
            }
          }), void 0, Uy ? Uy.offlineProvider : void 0, !0, ((yb, bb) => {
            My("Unable to load " + (yb && yb.responseURL, bb))
          }))
        } else {
          const Wy = yb => {
            Vy && !this._doNotHandleContextLost && (gb._buffer = yb), oy(gb, Ry, Uy, yb, gb.invertY, bb, !1, By, hy)
          };
          !Ty || Jy ? Ky && ("string" === typeof Ky.decoding || Ky.close) ? Wy(Ky) : mb._FileToolsLoadImage(yb || "", Wy, My, Uy ? Uy.offlineProvider : null, Ey, gb.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof Ky || Ky instanceof ArrayBuffer || ArrayBuffer.isView(Ky) || Ky instanceof Blob ? mb._FileToolsLoadImage(Ky, Wy, My, Uy ? Uy.offlineProvider : null, Ey, gb.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : Ky && Wy(Ky)
        }
        return gb
      }
      _rebuildBuffers() {
        for (const yb of this._uniformBuffers) yb._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, Sy.f)() ? document : null
      }
      getLoadedTexturesCache() {
        return this._internalTexturesCache
      }
      clearInternalTexturesCache() {
        this._internalTexturesCache.length = 0
      }
      getCaps() {
        return this._caps
      }
      resetTextureCache() {
        for (const yb in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, yb) && (this._boundTexturesCache[yb] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(yb) {
        this._name = yb
      }
      static get NpmPackage() {
        return "babylonjs@9.28.0"
      }
      static get Version() {
        return "9.28.0"
      }
      getRenderingCanvas() {
        return this._renderingCanvas
      }
      getAudioContext() {
        return this._audioContext
      }
      getAudioDestination() {
        return this._audioDestination
      }
      setHardwareScalingLevel(yb) {
        this._hardwareScalingLevel = yb, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(yb) {
        this._doNotHandleContextLost = yb
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(yb, bb, Wy) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new oy, this._stencilStateComposer = new By, this._stencilState = new Ky, this._alphaState = new ey.c(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new Uy.c, this.onCanvasFocusObservable = new Uy.c, this.onNewSceneAddedObservable = new Uy.c, this.onResizeObservable = new Uy.c, this.onCanvasPointerOutObservable = new Uy.c, this.onEffectErrorObservable = new Uy.c, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new Uy.c, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = yb => this._renderLoop(yb), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new Uy.c, this.onAfterShaderCompilationObservable = new Uy.c, this.onBeginFrameObservable = new Uy.c, this.onEndFrameObservable = new Uy.c, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new Uy.c, this.onContextRestoredObservable = new Uy.c, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.Nby = new Uy.c, this.onReleaseEffectsObservable = new Uy.c, fy.c.Instances.push(this), this.startTime = Py.d.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, cb.c.SetMatrixPrecision(!!bb.useLargeWorldRendering || !!bb.useHighPrecisionMatrix), (0, Sy.h)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), bb.antialias = yb ?? bb.antialias, bb.deterministicLockstep = bb.deterministicLockstep ?? !1, bb.lockstepMaxSteps = bb.lockstepMaxSteps ?? 4, bb.timeStep = bb.timeStep ?? 1 / 60, bb.stencil = bb.stencil ?? !0, this._audioContext = bb.audioEngineOptions?.audioContext ?? null, this._audioDestination = bb.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = bb.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!bb.doNotHandleContextLost, this._isStencilEnable = !!bb.stencil, this.useExactSrgbConversions = bb.useExactSrgbConversions ?? !1, this.canvasTabIndex = bb.canvasTabIndex ?? this.canvasTabIndex;
        const hy = (0, Sy.i)() && window.devicePixelRatio || 1,
          Zy = bb.limitDeviceRatio || hy;
        Wy = Wy || bb.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = Wy, this._hardwareScalingLevel = Wy ? 1 / Math.min(Zy, hy) : 1, this._lastDevicePixelRatio = hy, this._creationOptions = bb
      }
      resize() {
        let yb, bb, Wy = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const yb = (0, Sy.i)() && window.devicePixelRatio || 1,
            bb = this._lastDevicePixelRatio / yb;
          this._lastDevicePixelRatio = yb, this._hardwareScalingLevel *= bb
        }
        if ((0, Sy.i)() && (0, Sy.f)())
          if (this._renderingCanvas) {
            const Wy = this._renderingCanvas.getBoundingClientRect?.();
            yb = this._renderingCanvas.clientWidth || Wy?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, bb = this._renderingCanvas.clientHeight || Wy?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else yb = window.innerWidth, bb = window.innerHeight;
        else yb = this._renderingCanvas ? this._renderingCanvas.width : 100, bb = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(yb / this._hardwareScalingLevel, bb / this._hardwareScalingLevel, Wy)
      }
      setSize(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (yb |= 0, bb |= 0, !Wy && this._renderingCanvas.width === yb && this._renderingCanvas.height === bb) return !1;
        if (this._renderingCanvas.width = yb, this._renderingCanvas.height = bb, this.scenes) {
          for (let yb = 0; yb < this.scenes.length; yb++) {
            const bb = this.scenes[yb];
            for (let yb = 0; yb < bb.cameras.length; yb++) {
              bb.cameras[yb]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By, Ky) {
        throw (0, qb.g)("engine.rawTexture")
      }
      createRawCubeTexture(yb, bb, Wy, Uy, hy, fy, Zy, cb) {
        throw (0, qb.g)("engine.rawTexture")
      }
      createRawTexture3D(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By) {
        throw (0, qb.g)("engine.rawTexture")
      }
      createRawTexture2DArray(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By, Ky) {
        throw (0, qb.g)("engine.rawTexture")
      }
      _sharedInit(yb) {
        this._renderingCanvas = yb
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const yb = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== yb.indexOf("Mobile") || -1 !== yb.indexOf("Mac") && (0, Sy.f)() && "ontouchend" in document
        }, this._checkForMobile(), (0, Sy.i)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(yb) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(yb, !1)
      }
      getFps() {
        return this._fps
      }
      getDeltaTime() {
        return this._deltaTime
      }
      isDeterministicLockStep() {
        return this._deterministicLockstep
      }
      getLockstepMaxSteps() {
        return this._lockstepMaxSteps
      }
      getTimeStep() {
        return 1e3 * this._timeStep
      }
      _createImageBitmapFromSource(yb, bb) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(yb, bb) {
        return createImageBitmap(yb, bb)
      }
      resizeImageBitmap(yb, bb, Wy) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(yb) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(yb, bb) {
        if ("undefined" === typeof document) return new OffscreenCanvas(yb, bb);
        const Wy = document.createElement("canvas");
        return Wy.width = yb, Wy.height = bb, Wy
      }
      createCanvas(yb, bb) {
        return mb._CreateCanvas(yb, bb)
      }
      static _FileToolsLoadImage(yb, bb, Wy, Uy, hy, fy, Zy) {
        if (!Ey.c.loadImage) throw (0, qb.g)("FileTools");
        return Ey.c.loadImage(yb, bb, Wy, Uy, hy, fy, Zy)
      }
      _loadFile(yb, bb, Wy, Uy, hy, fy) {
        const Zy = (0, Ey.j)(yb, bb, Wy, Uy, hy, fy);
        return this._activeRequests.push(Zy), Zy.onCompleteObservable.add((() => {
          const yb = this._activeRequests.indexOf(Zy); - 1 !== yb && this._activeRequests.splice(yb, 1)
        })), Zy
      }
      static _FileToolsLoadFile(yb, bb, Wy, Uy, hy, fy) {
        if (Ey.c.loadFile) return Ey.c.loadFile(yb, bb, Wy, Uy, hy, fy);
        throw (0, qb.g)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), hy.c.ResetCache();
        for (const bb of this._activeRequests) bb.abort();
        this._boundRenderFunction = null, this.Nby.notifyObservers(this), this.Nby.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, Sy.i)() && window.removeEventListener("resize", this._checkForMobile);
        const yb = fy.c.Instances.indexOf(this);
        yb >= 0 && fy.c.Instances.splice(yb, 1), fy.c.Instances.length || (fy.c.OnEnginesDisposedObservable.notifyObservers(this), fy.c.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(yb) {
        throw (0, qb.g)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(yb, bb) {
        for (let Wy = 0; Wy < fy.c.Instances.length; Wy++) {
          const Uy = fy.c.Instances[Wy];
          for (let Wy = 0; Wy < Uy.scenes.length; Wy++) Uy.scenes[Wy].markAllMaterialsAsDirty(yb, bb)
        }
      }
      static GetCompatibleTextureLoader(yb, bb) {
        return null
      }
    }
    mb._RenderPassIdCounter = 0, mb._RescalePostProcessFactory = null, mb.CollisionsEpsilon = .001, mb.QueueNewFrame = ly
  },
  38319: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy
    });
    class Uy {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Uy.ShadersRepository : Uy.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Uy.ShadersStore : Uy.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Uy.IncludesShadersStore : Uy.IncludesShadersStoreWGSL
      }
    }
    Uy.ShadersRepository = "src/Shaders/", Uy.ShadersStore = {}, Uy.IncludesShadersStore = {}, Uy.ShadersRepositoryWGSL = "src/ShadersWGSL/", Uy.ShadersStoreWGSL = {}, Uy.IncludesShadersStoreWGSL = {}
  },
  38330: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => ey,
      e: () => Cy,
      f: () => sy,
      g: () => qb,
      i: () => Sy,
      l: () => mb,
      p: () => Ky,
      t: () => oy,
      w: () => By,
      y: () => Py,
      B: () => cb
    });
    class Uy {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(yb) {
        yb && this.program && yb(this.program)
      }
      setEngine(yb) {
        this.engine = yb
      }
      _fillEffectInformation(yb, bb, Wy, Uy, hy, fy, Zy, cb) {
        const Py = this.engine;
        if (Py.supportsUniformBuffers)
          for (const By in bb) yb.bindUniformBlock(By, bb[By]);
        let oy;
        for (this.engine.getUniforms(this, Wy).forEach(((yb, bb) => {
            Uy[Wy[bb]] = yb
          })), this._uniforms = Uy, oy = 0; oy < hy.length; oy++) {
          null == yb.getUniform(hy[oy]) && (hy.splice(oy, 1), oy--)
        }
        hy.forEach(((yb, bb) => {
          fy[yb] = bb
        }));
        for (const By of Py.getAttributes(this, Zy)) cb.push(By)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(yb, bb) {
        const Wy = this._valueCache[yb],
          Uy = bb.updateFlag;
        if (void 0 !== Wy && Wy === Uy) return !1;
        const hy = bb.hBy();
        let fy = this._matrixValueCache[yb];
        if (void 0 !== Wy && null !== Wy && void 0 !== fy) {
          let bb = !0;
          for (let yb = 15; yb >= 0; yb--)
            if (fy[yb] !== hy[yb]) {
              bb = !1;
              break
            } if (bb) return this._valueCache[yb] = Uy, !1
        }
        return void 0 === fy && (fy = this._matrixValueCache[yb] = new Float32Array(16)), fy.set(hy), this._valueCache[yb] = Uy, !0
      }
      _cacheFloat2(yb, bb, Wy) {
        let Uy = this._valueCache[yb];
        if (!Uy || 2 !== Uy.length) return Uy = [bb, Wy], this._valueCache[yb] = Uy, !0;
        let hy = !1;
        return Uy[0] !== bb && (Uy[0] = bb, hy = !0), Uy[1] !== Wy && (Uy[1] = Wy, hy = !0), hy
      }
      _cacheFloat3(yb, bb, Wy, Uy) {
        let hy = this._valueCache[yb];
        if (!hy || 3 !== hy.length) return hy = [bb, Wy, Uy], this._valueCache[yb] = hy, !0;
        let fy = !1;
        return hy[0] !== bb && (hy[0] = bb, fy = !0), hy[1] !== Wy && (hy[1] = Wy, fy = !0), hy[2] !== Uy && (hy[2] = Uy, fy = !0), fy
      }
      _cacheFloat4(yb, bb, Wy, Uy, hy) {
        let fy = this._valueCache[yb];
        if (!fy || 4 !== fy.length) return fy = [bb, Wy, Uy, hy], this._valueCache[yb] = fy, !0;
        let Zy = !1;
        return fy[0] !== bb && (fy[0] = bb, Zy = !0), fy[1] !== Wy && (fy[1] = Wy, Zy = !0), fy[2] !== Uy && (fy[2] = Uy, Zy = !0), fy[3] !== hy && (fy[3] = hy, Zy = !0), Zy
      }
      setInt(yb, bb) {
        const Wy = this._valueCache[yb];
        void 0 !== Wy && Wy === bb || this.engine.setInt(this._uniforms[yb], bb) && (this._valueCache[yb] = bb)
      }
      setInt2(yb, bb, Wy) {
        this._cacheFloat2(yb, bb, Wy) && (this.engine.setInt2(this._uniforms[yb], bb, Wy) || (this._valueCache[yb] = null))
      }
      setInt3(yb, bb, Wy, Uy) {
        this._cacheFloat3(yb, bb, Wy, Uy) && (this.engine.setInt3(this._uniforms[yb], bb, Wy, Uy) || (this._valueCache[yb] = null))
      }
      setInt4(yb, bb, Wy, Uy, hy) {
        this._cacheFloat4(yb, bb, Wy, Uy, hy) && (this.engine.setInt4(this._uniforms[yb], bb, Wy, Uy, hy) || (this._valueCache[yb] = null))
      }
      setIntArray(yb, bb) {
        this._valueCache[yb] = null, this.engine.setIntArray(this._uniforms[yb], bb)
      }
      setIntArray2(yb, bb) {
        this._valueCache[yb] = null, this.engine.setIntArray2(this._uniforms[yb], bb)
      }
      setIntArray3(yb, bb) {
        this._valueCache[yb] = null, this.engine.setIntArray3(this._uniforms[yb], bb)
      }
      setIntArray4(yb, bb) {
        this._valueCache[yb] = null, this.engine.setIntArray4(this._uniforms[yb], bb)
      }
      setUInt(yb, bb) {
        const Wy = this._valueCache[yb];
        void 0 !== Wy && Wy === bb || this.engine.setUInt(this._uniforms[yb], bb) && (this._valueCache[yb] = bb)
      }
      setUInt2(yb, bb, Wy) {
        this._cacheFloat2(yb, bb, Wy) && (this.engine.setUInt2(this._uniforms[yb], bb, Wy) || (this._valueCache[yb] = null))
      }
      setUInt3(yb, bb, Wy, Uy) {
        this._cacheFloat3(yb, bb, Wy, Uy) && (this.engine.setUInt3(this._uniforms[yb], bb, Wy, Uy) || (this._valueCache[yb] = null))
      }
      setUInt4(yb, bb, Wy, Uy, hy) {
        this._cacheFloat4(yb, bb, Wy, Uy, hy) && (this.engine.setUInt4(this._uniforms[yb], bb, Wy, Uy, hy) || (this._valueCache[yb] = null))
      }
      setUIntArray(yb, bb) {
        this._valueCache[yb] = null, this.engine.setUIntArray(this._uniforms[yb], bb)
      }
      setUIntArray2(yb, bb) {
        this._valueCache[yb] = null, this.engine.setUIntArray2(this._uniforms[yb], bb)
      }
      setUIntArray3(yb, bb) {
        this._valueCache[yb] = null, this.engine.setUIntArray3(this._uniforms[yb], bb)
      }
      setUIntArray4(yb, bb) {
        this._valueCache[yb] = null, this.engine.setUIntArray4(this._uniforms[yb], bb)
      }
      setArray(yb, bb) {
        this._valueCache[yb] = null, this.engine.setArray(this._uniforms[yb], bb)
      }
      setArray2(yb, bb) {
        this._valueCache[yb] = null, this.engine.setArray2(this._uniforms[yb], bb)
      }
      setArray3(yb, bb) {
        this._valueCache[yb] = null, this.engine.setArray3(this._uniforms[yb], bb)
      }
      setArray4(yb, bb) {
        this._valueCache[yb] = null, this.engine.setArray4(this._uniforms[yb], bb)
      }
      setMatrices(yb, bb) {
        bb && (this._valueCache[yb] = null, this.engine.setMatrices(this._uniforms[yb], bb))
      }
      setMatrix(yb, bb) {
        this._cacheMatrix(yb, bb) && (this.engine.setMatrices(this._uniforms[yb], bb.hBy()) || (this._valueCache[yb] = null))
      }
      setMatrix3x3(yb, bb) {
        this._valueCache[yb] = null, this.engine.setMatrix3x3(this._uniforms[yb], bb)
      }
      setMatrix2x2(yb, bb) {
        this._valueCache[yb] = null, this.engine.setMatrix2x2(this._uniforms[yb], bb)
      }
      setFloat(yb, bb) {
        const Wy = this._valueCache[yb];
        void 0 !== Wy && Wy === bb || this.engine.setFloat(this._uniforms[yb], bb) && (this._valueCache[yb] = bb)
      }
      setVector2(yb, bb) {
        this._cacheFloat2(yb, bb.x, bb.y) && (this.engine.setFloat2(this._uniforms[yb], bb.x, bb.y) || (this._valueCache[yb] = null))
      }
      setFloat2(yb, bb, Wy) {
        this._cacheFloat2(yb, bb, Wy) && (this.engine.setFloat2(this._uniforms[yb], bb, Wy) || (this._valueCache[yb] = null))
      }
      setVector3(yb, bb) {
        this._cacheFloat3(yb, bb.x, bb.y, bb.z) && (this.engine.setFloat3(this._uniforms[yb], bb.x, bb.y, bb.z) || (this._valueCache[yb] = null))
      }
      setFloat3(yb, bb, Wy, Uy) {
        this._cacheFloat3(yb, bb, Wy, Uy) && (this.engine.setFloat3(this._uniforms[yb], bb, Wy, Uy) || (this._valueCache[yb] = null))
      }
      setVector4(yb, bb) {
        this._cacheFloat4(yb, bb.x, bb.y, bb.z, bb.w) && (this.engine.setFloat4(this._uniforms[yb], bb.x, bb.y, bb.z, bb.w) || (this._valueCache[yb] = null))
      }
      setQuaternion(yb, bb) {
        this._cacheFloat4(yb, bb.x, bb.y, bb.z, bb.w) && (this.engine.setFloat4(this._uniforms[yb], bb.x, bb.y, bb.z, bb.w) || (this._valueCache[yb] = null))
      }
      setFloat4(yb, bb, Wy, Uy, hy) {
        this._cacheFloat4(yb, bb, Wy, Uy, hy) && (this.engine.setFloat4(this._uniforms[yb], bb, Wy, Uy, hy) || (this._valueCache[yb] = null))
      }
      setColor3(yb, bb) {
        this._cacheFloat3(yb, bb.r, bb.g, bb.b) && (this.engine.setFloat3(this._uniforms[yb], bb.r, bb.g, bb.b) || (this._valueCache[yb] = null))
      }
      setColor4(yb, bb, Wy) {
        this._cacheFloat4(yb, bb.r, bb.g, bb.b, Wy) && (this.engine.setFloat4(this._uniforms[yb], bb.r, bb.g, bb.b, Wy) || (this._valueCache[yb] = null))
      }
      setDirectColor4(yb, bb) {
        this._cacheFloat4(yb, bb.r, bb.g, bb.b, bb.a) && (this.engine.setFloat4(this._uniforms[yb], bb.r, bb.g, bb.b, bb.a) || (this._valueCache[yb] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var hy = Wy(38338);
    const fy = new WeakMap,
      Zy = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function cb(yb) {
      let bb = fy.get(yb);
      if (!bb) {
        if (!yb) return Zy;
        bb = {
          _webGLVersion: yb.TEXTURE_BINDING_3D ? 2 : 1,
          _context: yb,
          parallelShaderCompile: yb.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, fy.set(yb, bb)
      }
      return bb
    }

    function Py(yb) {
      fy.delete(yb)
    }

    function oy(yb, bb, Wy, Uy, hy, fy) {
      const Zy = cb(Uy);
      fy || (fy = Zy._createShaderProgramInjection ?? ey);
      return fy(yb, ly(bb, "vertex", Uy, Zy._contextWasLost), ly(Wy, "fragment", Uy, Zy._contextWasLost), Uy, hy, Zy.validateShaderPrograms)
    }

    function By(yb, bb, Wy, Uy, hy) {
      let fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Zy = arguments.length > 6 ? arguments[6] : void 0;
      const Py = cb(hy);
      Zy || (Zy = Py._createShaderProgramInjection ?? ey);
      const oy = Py._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return Zy(yb, Ey(bb, "vertex", Uy, oy, hy, Py._contextWasLost), Ey(Wy, "fragment", Uy, oy, hy, Py._contextWasLost), hy, fy, Py.validateShaderPrograms)
    }

    function Ky(yb, bb) {
      const Wy = new Uy,
        hy = cb(yb);
      return hy.parallelShaderCompile && !hy.disableParallelShaderCompile && (Wy.isParallelCompiled = !0), Wy.context = hy._context, Wy
    }

    function ey(yb, bb, Wy, Uy) {
      let hy = arguments.length > 5 ? arguments[5] : void 0;
      const fy = Uy.createProgram();
      if (yb.program = fy, !fy) throw new Error("Unable to create program");
      return Uy.attachShader(fy, bb), Uy.attachShader(fy, Wy), Uy.linkProgram(fy), yb.context = Uy, yb.vertexShader = bb, yb.fragmentShader = Wy, yb.isParallelCompiled || sy(yb, Uy, hy), fy
    }

    function qb(yb, bb, Wy) {
      const Uy = yb;
      if (Uy._isDisposed) return !1;
      const hy = cb(bb);
      return !!(hy && hy.parallelShaderCompile && hy.parallelShaderCompile.COMPLETION_STATUS_KHR && Uy.program && bb.getProgramParameter(Uy.program, hy.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (sy(Uy, bb, Wy), !0)
    }

    function sy(yb, bb, Wy) {
      const Uy = yb.context,
        hy = yb.vertexShader,
        fy = yb.fragmentShader,
        Zy = yb.program;
      if (!Uy.getProgramParameter(Zy, Uy.LINK_STATUS)) {
        if (!bb.getShaderParameter(hy, bb.COMPILE_STATUS)) {
          const Wy = bb.getShaderInfoLog(hy);
          if (Wy) throw yb.vertexCompilationError = Wy, new Error("VERTEX SHADER " + Wy)
        }
        if (!bb.getShaderParameter(fy, bb.COMPILE_STATUS)) {
          const Wy = bb.getShaderInfoLog(fy);
          if (Wy) throw yb.fragmentCompilationError = Wy, new Error("FRAGMENT SHADER " + Wy)
        }
        const Wy = Uy.getProgramInfoLog(Zy);
        if (Wy) throw yb.programLinkError = Wy, new Error(Wy)
      }
      if (Wy) {
        Uy.validateProgram(Zy);
        if (!Uy.getProgramParameter(Zy, Uy.VALIDATE_STATUS)) {
          const bb = Uy.getProgramInfoLog(Zy);
          if (bb) throw yb.programValidationError = bb, new Error(bb)
        }
      }
      Uy.deleteShader(hy), Uy.deleteShader(fy), yb.vertexShader = void 0, yb.fragmentShader = void 0, yb.onCompiled && (yb.onCompiled(), yb.onCompiled = void 0)
    }

    function Sy(yb, bb, Wy, Uy, hy, fy, Zy, Py, Ky) {
      let ey = arguments.length > 10 ? arguments[10] : void 0,
        qb = arguments.length > 11 ? arguments[11] : void 0,
        sy = arguments.length > 12 ? arguments[12] : void 0;
      const Sy = cb(yb.context);
      qb || (qb = Sy.createRawShaderProgramInjection ?? oy), sy || (sy = Sy.createShaderProgramInjection ?? By);
      const Ey = yb;
      Ey.program = Uy ? qb(Ey, bb, Wy, Ey.context, Ky) : sy(Ey, bb, Wy, Py, Ey.context, Ky), Ey.program.__SPECTOR_rebuildProgram = Zy, ey()
    }

    function Ey(yb, bb, Wy, Uy, fy, Zy) {
      return ly((0, hy.d)(yb, Wy, Uy), bb, fy, Zy)
    }

    function ly(yb, bb, Wy, Uy) {
      const hy = Wy.createShader("vertex" === bb ? Wy.VERTEX_SHADER : Wy.FRAGMENT_SHADER);
      if (!hy) {
        let yb, hy = Wy.NO_ERROR;
        for (;
          (yb = Wy.getError()) !== Wy.NO_ERROR;) hy = yb;
        throw new Error(`Something went wrong while creating a gl ${bb} shader object. gl error=${hy}, gl isContextLost=${Wy.isContextLost()}, _contextWasLost=${Uy}`)
      }
      return Wy.shaderSource(hy, yb), Wy.compileShader(hy), hy
    }

    function mb(yb, bb) {
      bb.useProgram(yb)
    }

    function Cy(yb, bb) {
      const Wy = yb;
      if (!Wy.isParallelCompiled) return void bb(yb);
      const Uy = Wy.onCompiled;
      Wy.onCompiled = () => {
        Uy?.(), bb(yb)
      }
    }
  },
  38305: (yb, bb, Wy) => {
    Wy.d(bb, {
      ThinEngine: () => Vy
    });
    var Uy = Wy(38312),
      hy = Wy(38330),
      fy = Wy(38362),
      Zy = Wy(38383),
      cb = Wy(37350),
      Py = Wy(38325);
    class oy {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(yb, bb, Wy, Uy, hy) {
        if (hy.drawBuffersExtensionDisabled) {
          const bb = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          yb = yb.replace(bb, "")
        }
        return yb
      }
    }
    const By = /(flat\s)?\s*varying\s*.*/;
    class Ky {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(yb) {
        return yb.replace("attribute", "in")
      }
      varyingCheck(yb, bb) {
        return By.test(yb)
      }
      varyingProcessor(yb, bb) {
        return yb.replace("varying", bb ? "in" : "out")
      }
      postProcessor(yb, bb, Wy) {
        const Uy = -1 !== yb.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (yb = (yb = yb.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), Wy) {
          const Wy = -1 !== yb.search(/layout *\(location *= *0\) *out/g),
            hy = -1 !== bb.indexOf("#define DUAL_SOURCE_BLENDING"),
            fy = hy ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          hy && (yb = "#extension GL_EXT_blend_func_extended : require\n" + yb), yb = (yb = (yb = (yb = (yb = (yb = (yb = yb.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (Uy || Wy ? "" : fy) + "void main(")
        } else {
          bb.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (yb = "invariant gl_Position;\n" + yb);
          if (-1 !== bb.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + yb
        }
        return yb
      }
    }
    var ey = Wy(38390),
      qb = Wy(38405),
      sy = Wy(38411),
      Sy = Wy(38287),
      Ey = Wy(38338),
      ly = Wy(38321),
      mb = Wy(38414),
      Cy = Wy(38376);
    class Ty {}
    class Vy extends fy.d {
      get name() {
        return this._name
      }
      set name(yb) {
        this._name = yb
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return Uy.c.ShadersRepository
      }
      static set ShadersRepository(yb) {
        Uy.c.ShadersRepository = yb
      }
      get supportsUniformBuffers() {
        return this.vf > 1 && !this.disableUniformBuffers
      }
      get needPOTTextures() {
        return this._webGLVersion < 2 || this.forcePOTTextures
      }
      get _supportsHardwareTextureRescaling() {
        return !1
      }
      snapshotRenderingReset() {
        this.snapshotRendering = !1
      }
      constructor(yb, bb, Wy, Uy) {
        if (Wy = Wy || {}, super(bb ?? Wy.antialias, Wy, Uy), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !yb) return;
        let fy;
        if (yb.getContext) {
          if (fy = yb, void 0 === Wy.preserveDrawingBuffer && (Wy.preserveDrawingBuffer = !1), void 0 === Wy.xrCompatible && (Wy.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const yb = navigator.userAgent;
            for (const bb of Vy.ExceptionList) {
              const Uy = bb.key,
                hy = bb.targets;
              if (new RegExp(Uy).test(yb)) {
                if (bb.capture && bb.captureConstraint) {
                  const Wy = bb.capture,
                    Uy = bb.captureConstraint,
                    hy = new RegExp(Wy).exec(yb);
                  if (hy && hy.length > 0) {
                    if (parseInt(hy[hy.length - 1]) >= Uy) continue
                  }
                }
                for (const yb of hy) switch (yb) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    Wy.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, hy.y)(this._gl)
            } : (this._onContextLost = yb => {
              yb.preventDefault(), this._contextWasLost = !0, (0, hy.y)(this._gl), cb.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, fy.addEventListener("webglcontextrestored", this._onContextRestored, !1), Wy.powerPreference = Wy.powerPreference || "high-performance"), fy.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (Wy.xrCompatible = !1), !Wy.disableWebGL2Support) try {
            this._gl = fy.getContext("webgl2", Wy) || fy.getContext("experimental-webgl2", Wy), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (By) {}
          if (!this._gl) {
            if (!fy) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = fy.getContext("webgl", Wy) || fy.getContext("experimental-webgl", Wy)
            } catch (By) {
              throw new Error("WebGL not supported", {
                cause: By
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = yb, fy = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const bb = this._gl.getContextAttributes();
          bb && (Wy.stencil = bb.stencil)
        }
        this._sharedInit(fy), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== Wy.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = Wy.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let hy = 0; hy < this._caps.maxVertexAttribs; hy++) this._currentBufferPointers[hy] = new Ty;
        this._shaderProcessor = this.vf > 1 ? new Ky : new oy;
        const Zy = `Babylon.js v${Vy.Version}`;
        cb.b.Log(Zy + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", Zy);
        const Py = (0, hy.B)(this._gl);
        Py.validateShaderPrograms = this.validateShaderPrograms, Py.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(yb) {
        return null
      }
      areAllEffectsReady() {
        for (const yb in this._compiledEffects) {
          if (!this._compiledEffects[yb].isReady()) return !1
        }
        return !0
      }
      _initGLContext() {
        this._caps = {
          maxTexturesImageUnits: this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS),
          maxCombinedTexturesImageUnits: this._gl.getParameter(this._gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
          maxVertexTextureImageUnits: this._gl.getParameter(this._gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
          maxTextureSize: this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE),
          maxSamples: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_SAMPLES) : 1,
          maxCubemapTextureSize: this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE),
          maxRenderTextureSize: this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE),
          maxVertexAttribs: this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS),
          maxVaryingVectors: this._gl.getParameter(this._gl.MAX_VARYING_VECTORS),
          maxFragmentUniformVectors: this._gl.getParameter(this._gl.MAX_FRAGMENT_UNIFORM_VECTORS),
          maxVertexUniformVectors: this._gl.getParameter(this._gl.MAX_VERTEX_UNIFORM_VECTORS),
          shaderFloatPrecision: 0,
          parallelShaderCompile: this._gl.getExtension("KHR_parallel_shader_compile") || void 0,
          standardDerivatives: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_standard_derivatives"),
          maxAnisotropy: 1,
          astc: this._gl.getExtension("WEBGL_compressed_texture_astc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_astc"),
          bptc: this._gl.getExtension("EXT_texture_compression_bptc") || this._gl.getExtension("WEBKIT_EXT_texture_compression_bptc"),
          s3tc: this._gl.getExtension("WEBGL_compressed_texture_s3tc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"),
          s3tc_srgb: this._gl.getExtension("WEBGL_compressed_texture_s3tc_srgb") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc_srgb"),
          pvrtc: this._gl.getExtension("WEBGL_compressed_texture_pvrtc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
          etc1: this._gl.getExtension("WEBGL_compressed_texture_etc1") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc1"),
          etc2: this._gl.getExtension("WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBGL_compressed_texture_es3_0"),
          textureAnisotropicFilterExtension: this._gl.getExtension("EXT_texture_filter_anisotropic") || this._gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this._gl.getExtension("MOZ_EXT_texture_filter_anisotropic"),
          uintIndices: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_element_index_uint"),
          fragmentDepthSupported: this._webGLVersion > 1 || null !== this._gl.getExtension("EXT_frag_depth"),
          highPrecisionShaderSupported: !1,
          timerQuery: this._gl.getExtension("EXT_disjoint_timer_query_webgl2") || this._gl.getExtension("EXT_disjoint_timer_query"),
          supportOcclusionQuery: this._webGLVersion > 1,
          canUseTimestampForTimerQuery: !1,
          drawBuffersExtension: !1,
          maxMSAASamples: 1,
          colorBufferFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_float")),
          blendFloat: null !== this._gl.getExtension("EXT_float_blend"),
          supportFloatTexturesResolve: !1,
          rg11b10ufColorRenderable: !1,
          colorBufferHalfFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_half_float")),
          textureFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_float")),
          textureHalfFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_half_float")),
          textureHalfFloatRender: !1,
          textureFloatLinearFiltering: !1,
          textureFloatRender: !1,
          textureHalfFloatLinearFiltering: !1,
          vertexArrayObject: !1,
          instancedArrays: !1,
          textureLOD: !!(this._webGLVersion > 1 || this._gl.getExtension("EXT_shader_texture_lod")),
          texelFetch: 1 !== this._webGLVersion,
          blendMinMax: !1,
          multiview: this._gl.getExtension("OVR_multiview2"),
          oculusMultiview: this._gl.getExtension("OCULUS_multiview"),
          depthTextureExtension: !1,
          canUseGLInstanceID: this._webGLVersion > 1,
          canUseGLVertexID: this._webGLVersion > 1,
          supportComputeShaders: !1,
          supportSRGBBuffers: !1,
          supportTransformFeedbacks: this._webGLVersion > 1,
          textureMaxLevel: this._webGLVersion > 1,
          texture2DArrayMaxLayerCount: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_ARRAY_TEXTURE_LAYERS) : 128,
          disableMorphTargetTexture: !1,
          textureNorm16: !!this._gl.getExtension("EXT_texture_norm16"),
          blendParametersPerTarget: !1,
          dualSourceBlending: !1,
          supportReadWriteStorageTextures: !1
        }, this._caps.supportFloatTexturesResolve = this._caps.colorBufferFloat, this._caps.rg11b10ufColorRenderable = this._caps.colorBufferFloat, this._glVersion = this._gl.getParameter(this._gl.VERSION);
        const yb = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != yb && (this._glRenderer = this._gl.getParameter(yb.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(yb.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const bb = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!bb, this._alphaState = new Cy.c(this._caps.blendParametersPerTarget), bb && (this._gl.blendEquationSeparateIndexed = bb.blendEquationSeparateiOES.bind(bb), this._gl.blendEquationIndexed = bb.blendEquationiOES.bind(bb), this._gl.blendFuncSeparateIndexed = bb.blendFuncSeparateiOES.bind(bb), this._gl.blendFuncIndexed = bb.blendFunciOES.bind(bb), this._gl.colorMaskIndexed = bb.colorMaskiOES.bind(bb), this._gl.disableIndexed = bb.disableiOES.bind(bb), this._gl.enableIndexed = bb.enableiOES.bind(bb)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const yb = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== yb) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = yb.drawBuffersWEBGL.bind(yb), this._caps.maxDrawBuffers = this._gl.getParameter(yb.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let bb = 0; bb < 16; bb++) this._gl["COLOR_ATTACHMENT" + bb + "_WEBGL"] = yb["COLOR_ATTACHMENT" + bb + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const yb = this._gl.getExtension("WEBGL_depth_texture");
          null != yb && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = yb.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const yb = this._gl.getExtension("OES_vertex_array_object");
          null != yb && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = yb.createVertexArrayOES.bind(yb), this._gl.bindVertexArray = yb.bindVertexArrayOES.bind(yb), this._gl.deleteVertexArray = yb.deleteVertexArrayOES.bind(yb))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const yb = this._gl.getExtension("ANGLE_instanced_arrays");
          null != yb ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = yb.drawArraysInstancedANGLE.bind(yb), this._gl.drawElementsInstanced = yb.drawElementsInstancedANGLE.bind(yb), this._gl.vertexAttribDivisor = yb.vertexAttribDivisorANGLE.bind(yb)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const yb = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            bb = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (yb && bb && (this._caps.highPrecisionShaderSupported = 0 !== yb.precision && 0 !== bb.precision, this._caps.shaderFloatPrecision = Math.min(yb.precision, bb.precision)), !this._shouldUseHighPrecisionShader) {
            const yb = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              bb = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            yb && bb && (this._caps.shaderFloatPrecision = Math.min(yb.precision, bb.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const yb = this._gl.getExtension("EXT_blend_minmax");
          null != yb && (this._caps.blendMinMax = !0, this._gl.MAX = yb.MAX_EXT, this._gl.MIN = yb.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const yb = this._gl.getExtension("EXT_sRGB");
            null != yb && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: yb.SRGB_EXT,
              SRGB8: yb.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: yb.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const yb = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== yb && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && yb)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let Wy = 0; Wy < this._maxSimultaneousTextures; Wy++) this._nextFreeTextureSlots.push(Wy);
        "Mali-G72" === this._glRenderer && (this._caps.disableMorphTargetTexture = !0)
      }
      _initFeatures() {
        this._features = {
          forceBitmapOverHTMLImageElement: "undefined" === typeof HTMLImageElement,
          supportRenderAndCopyToLodForFloatTextures: 1 !== this._webGLVersion,
          supportDepthStencilTexture: 1 !== this._webGLVersion,
          supportShadowSamplers: 1 !== this._webGLVersion,
          uniformBufferHardCheckMatrix: !1,
          allowTexturePrefiltering: 1 !== this._webGLVersion,
          trackUbosInFrame: !1,
          checkUbosContentBeforeUpload: !1,
          supportCSM: 1 !== this._webGLVersion,
          basisNeedsPOT: 1 === this._webGLVersion,
          support3DTextures: 1 !== this._webGLVersion,
          needTypeSuffixInShaderConstants: 1 !== this._webGLVersion,
          supportMSAA: 1 !== this._webGLVersion,
          supportSSAO2: 1 !== this._webGLVersion,
          supportIBLShadows: 1 !== this._webGLVersion,
          supportExtendedTextureFormats: 1 !== this._webGLVersion,
          supportSwitchCaseInShader: 1 !== this._webGLVersion,
          supportSyncTextureRead: !0,
          needsInvertingBitmap: !0,
          useUBOBindingCache: !0,
          needShaderCodeInlining: !1,
          needToAlwaysBindUniformBuffers: !1,
          supportRenderPasses: !1,
          supportSpriteInstancing: !0,
          forceVertexBufferStrideAndOffsetMultiple4Bytes: !1,
          _checkNonFloatVertexBuffersDontRecreatePipelineContext: !1
        }
      }
      get vf() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const yb = this._workingCanvas.getContext("2d");
        yb && (this._workingContext = yb)
      }
      getInfo() {
        return this.getGlInfo()
      }
      getGlInfo() {
        return {
          vendor: this._glVendor,
          renderer: this._glRenderer,
          version: this._glVersion
        }
      }
      extractDriverInfo() {
        const yb = this.getGlInfo();
        return yb && yb.renderer ? yb.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const fy = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = fy;
        let Zy = 0;
        if (bb && yb) {
          let bb = !0;
          if (this._currentRenderTarget) {
            const Wy = this._currentRenderTarget.texture?.format;
            if (void 0 !== Wy && (0, mb.h)(Wy)) {
              const Wy = this._currentRenderTarget.texture?.type;
              void 0 !== Wy && (0, mb.i)(Wy) ? (Vy._TempClearColorUint32[0] = 255 * yb.r, Vy._TempClearColorUint32[1] = 255 * yb.g, Vy._TempClearColorUint32[2] = 255 * yb.b, Vy._TempClearColorUint32[3] = 255 * yb.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, Vy._TempClearColorUint32), bb = !1) : (Vy._TempClearColorInt32[0] = 255 * yb.r, Vy._TempClearColorInt32[1] = 255 * yb.g, Vy._TempClearColorInt32[2] = 255 * yb.b, Vy._TempClearColorInt32[3] = 255 * yb.a, this._gl.clearBufferiv(this._gl.COLOR, 0, Vy._TempClearColorInt32), bb = !1)
            }
          }
          bb && (this._gl.clearColor(yb.r, yb.g, yb.b, void 0 !== yb.a ? yb.a : 1), Zy |= this._gl.COLOR_BUFFER_BIT)
        }
        Wy && (this.Aoy ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), Zy |= this._gl.DEPTH_BUFFER_BIT), Uy && (this._gl.clearStencil(hy), Zy |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(Zy)
      }
      _clearColorAttachment(yb, bb, Wy, Uy) {
        if ((0, mb.h)(Wy)) {
          const Wy = (0, mb.i)(Uy),
            hy = Wy ? Vy._TempClearColorUint32 : Vy._TempClearColorInt32;
          return hy[0] = bb.r, hy[1] = bb.g, hy[2] = bb.b, hy[3] = bb.a, void(Wy ? this._gl.clearBufferuiv(this._gl.COLOR, yb, hy) : this._gl.clearBufferiv(this._gl.COLOR, yb, hy))
        }
        Vy._TempClearColorFloat32[0] = bb.r, Vy._TempClearColorFloat32[1] = bb.g, Vy._TempClearColorFloat32[2] = bb.b, Vy._TempClearColorFloat32[3] = bb.a, this._gl.clearBufferfv(this._gl.COLOR, yb, Vy._TempClearColorFloat32)
      }
      _viewport(yb, bb, Wy, Uy) {
        yb === this._viewportCached.x && bb === this._viewportCached.y && Wy === this._viewportCached.z && Uy === this._viewportCached.w || (this._viewportCached.x = yb, this._viewportCached.y = bb, this._viewportCached.z = Wy, this._viewportCached.w = Uy, this._gl.viewport(yb, bb, Wy, Uy))
      }
      gC() {
        super.gC(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0,
          Uy = arguments.length > 3 ? arguments[3] : void 0,
          hy = arguments.length > 4 ? arguments[4] : void 0,
          fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Zy = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Py = yb;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = yb, this._integerMRTAttachmentsMask = !yb.isMulti && yb.texture && (0, mb.h)(yb.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(Py._framebuffer);
        const oy = this._gl;
        yb.isMulti || (yb.is2DArray || yb.is3D ? (oy.framebufferTextureLayer(oy.FRAMEBUFFER, oy.COLOR_ATTACHMENT0, yb.texture._hardwareTexture?.underlyingResource, fy, Zy), Py._currentLOD = fy) : yb.isCube ? oy.framebufferTexture2D(oy.FRAMEBUFFER, oy.COLOR_ATTACHMENT0, oy.TEXTURE_CUBE_MAP_POSITIVE_X + bb, yb.texture._hardwareTexture?.underlyingResource, fy) : Py._currentLOD !== fy && (oy.framebufferTexture2D(oy.FRAMEBUFFER, oy.COLOR_ATTACHMENT0, oy.TEXTURE_2D, yb.texture._hardwareTexture?.underlyingResource, fy), Py._currentLOD = fy));
        const By = yb._depthStencilTexture;
        if (By) {
          yb.is3D && (yb.texture.width === By.width && yb.texture.height === By.height && yb.texture.depth === By.depth || cb.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const Wy = yb._depthStencilTextureWithStencil ? oy.DEPTH_STENCIL_ATTACHMENT : oy.DEPTH_ATTACHMENT;
          yb.is2DArray || yb.is3D ? oy.framebufferTextureLayer(oy.FRAMEBUFFER, Wy, By._hardwareTexture?.underlyingResource, fy, Zy) : yb.isCube ? oy.framebufferTexture2D(oy.FRAMEBUFFER, Wy, oy.TEXTURE_CUBE_MAP_POSITIVE_X + bb, By._hardwareTexture?.underlyingResource, fy) : oy.framebufferTexture2D(oy.FRAMEBUFFER, Wy, oy.TEXTURE_2D, By._hardwareTexture?.underlyingResource, fy)
        }
        Py._MSAAFramebuffer && this._bindUnboundFramebuffer(Py._MSAAFramebuffer), this._cachedViewport && !hy ? this.setViewport(this._cachedViewport, Wy, Uy) : (Wy || (Wy = yb.width, fy && (Wy /= Math.pow(2, fy))), Uy || (Uy = yb.height, fy && (Uy /= Math.pow(2, fy))), this._viewport(0, 0, Wy, Uy)), this.wipeCaches()
      }
      setStateCullFaceType(yb, bb) {
        const Wy = this.cullBackFaces ?? yb ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== Wy || bb) && (this._depthCullingState.cullFace = Wy)
      }
      setState(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0,
          Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          hy = arguments.length > 4 ? arguments[4] : void 0,
          fy = arguments.length > 5 ? arguments[5] : void 0,
          Zy = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== yb || Wy) && (this._depthCullingState.cull = yb), this.setStateCullFaceType(hy, Wy), this.setZOffset(bb), this.setZOffsetUnits(Zy);
        const cb = Uy ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== cb || Wy) && (this._depthCullingState.frontFace = cb), this._stencilStateComposer.stencilMaterial = fy
      }
      _resolveAndGenerateMipMapsFramebuffer(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        yb.disableAutomaticMSAAResolve || (yb.isMulti ? this.resolveMultiFramebuffer(yb) : this.resolveFramebuffer(yb)), bb || (yb.isMulti ? this.generateMipMapsMultiFramebuffer(yb) : this.generateMipMapsFramebuffer(yb))
      }
      _bindUnboundFramebuffer(yb) {
        this._currentFramebuffer !== yb && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, yb), this._currentFramebuffer = yb)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(yb) {
        const bb = this._getTextureTarget(yb);
        this._bindTextureDirectly(bb, yb, !0), this._gl.generateMipmap(bb), this._bindTextureDirectly(bb, null)
      }
      unBindFramebuffer(yb, bb, Wy) {
        const Uy = yb;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(yb, bb), Wy && (Uy._MSAAFramebuffer && this._bindUnboundFramebuffer(Uy._framebuffer), Wy()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(yb) {
        yb.isMulti || !yb.texture?.generateMipMaps || yb.isCube || this.generateMipmaps(yb.texture)
      }
      resolveFramebuffer(yb) {
        const bb = yb,
          Wy = this._gl;
        if (!bb._MSAAFramebuffer || bb.isMulti) return;
        let Uy = bb.resolveMSAAColors ? Wy.COLOR_BUFFER_BIT : 0;
        Uy |= bb._generateDepthBuffer && bb.resolveMSAADepth ? Wy.DEPTH_BUFFER_BIT : 0, Uy |= bb._generateStencilBuffer && bb.resolveMSAAStencil ? Wy.STENCIL_BUFFER_BIT : 0, Wy.bindFramebuffer(Wy.READ_FRAMEBUFFER, bb._MSAAFramebuffer), Wy.bindFramebuffer(Wy.DRAW_FRAMEBUFFER, bb._framebuffer), Wy.blitFramebuffer(0, 0, yb.width, yb.height, 0, 0, yb.width, yb.height, Uy, Wy.NEAREST)
      }
      flushFramebuffer() {
        this._gl.flush()
      }
      restoreDefaultFramebuffer() {
        this._currentRenderTarget ? this.unBindFramebuffer(this._currentRenderTarget) : this._bindUnboundFramebuffer(null), this._cachedViewport && this.setViewport(this._cachedViewport), this.wipeCaches()
      }
      _resetVertexBufferBinding() {
        this.bindArrayBuffer(null), this._cachedVertexBuffers = null
      }
      createVertexBuffer(yb, bb, Wy) {
        return this._createVertexBuffer(yb, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(yb, bb) {
        const Wy = this._gl.createBuffer();
        if (!Wy) throw new Error("Unable to create vertex buffer");
        const Uy = new ey.c(Wy);
        return this.bindArrayBuffer(Uy), "number" !== typeof yb ? yb instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(yb), bb), Uy.Hy = 4 * yb.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, yb, bb), Uy.Hy = yb.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(yb), bb), Uy.Hy = yb), this._resetVertexBufferBinding(), Uy.references = 1, Uy
      }
      createDynamicVertexBuffer(yb, bb) {
        return this._createVertexBuffer(yb, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(yb, bb, Wy) {
        const Uy = this._gl.createBuffer(),
          hy = new ey.c(Uy);
        if (!Uy) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(hy);
        const fy = this._normalizeIndexData(yb);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, fy, bb ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), hy.references = 1, hy.is32Bits = 4 === fy.BYTES_PER_ELEMENT, hy
      }
      _normalizeIndexData(yb) {
        if (2 === yb.BYTES_PER_ELEMENT) return yb;
        if (this._caps.uintIndices) {
          if (yb instanceof Uint32Array) return yb;
          for (let bb = 0; bb < yb.length; bb++)
            if (yb[bb] >= 65535) return new Uint32Array(yb);
          return new Uint16Array(yb)
        }
        return new Uint16Array(yb)
      }
      bindArrayBuffer(yb) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(yb, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(yb, bb, Wy) {
        const Uy = yb.program,
          hy = this._gl.getUniformBlockIndex(Uy, bb);
        this._gl.uniformBlockBinding(Uy, hy, Wy)
      }
      bindIndexBuffer(yb) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(yb, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(yb, bb) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[bb] !== yb) && (this._gl.bindBuffer(bb, yb ? yb.underlyingResource : null), this._currentBoundBuffer[bb] = yb)
      }
      updateArrayBuffer(yb) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, yb)
      }
      _vertexAttribPointer(yb, bb, Wy, Uy, hy, fy, Zy) {
        const cb = this._currentBufferPointers[bb];
        if (!cb) return;
        let Py = !1;
        cb.active ? (cb.buffer !== yb && (cb.buffer = yb, Py = !0), cb.size !== Wy && (cb.size = Wy, Py = !0), cb.type !== Uy && (cb.type = Uy, Py = !0), cb.normalized !== hy && (cb.normalized = hy, Py = !0), cb.stride !== fy && (cb.stride = fy, Py = !0), cb.offset !== Zy && (cb.offset = Zy, Py = !0)) : (Py = !0, cb.active = !0, cb.index = bb, cb.size = Wy, cb.type = Uy, cb.normalized = hy, cb.stride = fy, cb.offset = Zy, cb.buffer = yb), (Py || this._vaoRecordInProgress) && (this.bindArrayBuffer(yb), Uy === this._gl.UNSIGNED_INT || Uy === this._gl.INT ? this._gl.vertexAttribIPointer(bb, Wy, Uy, fy, Zy) : this._gl.vertexAttribPointer(bb, Wy, Uy, hy, fy, Zy))
      }
      _bindIndexBufferWithCache(yb) {
        null != yb && this._cachedIndexBuffer !== yb && (this._cachedIndexBuffer = yb, this.bindIndexBuffer(yb), this._uintIndicesCurrentlySet = yb.is32Bits)
      }
      _bindVertexBuffersAttributes(yb, bb, Wy) {
        const Uy = bb.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let hy = 0; hy < Uy.length; hy++) {
          const fy = bb.getAttributeLocation(hy);
          if (fy >= 0) {
            const bb = Uy[hy];
            let Zy = null;
            if (Wy && (Zy = Wy[bb]), Zy || (Zy = yb[bb]), !Zy) continue;
            this._gl.enableVertexAttribArray(fy), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[fy] = !0);
            const cb = Zy.getBuffer();
            cb && (this._vertexAttribPointer(cb, fy, Zy.getSize(), Zy.type, Zy.normalized, Zy.byteStride, Zy.byteOffset), Zy.getIsInstanced() && (this._gl.vertexAttribDivisor(fy, Zy.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(fy), this._currentInstanceBuffers.push(cb))))
          }
        }
      }
      recordVertexArrayObject(yb, bb, Wy, Uy) {
        const hy = this._gl.createVertexArray();
        if (!hy) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(hy), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(yb, Wy, Uy), this.bindIndexBuffer(bb), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), hy
      }
      bindVertexArrayObject(yb, bb) {
        this._cachedVertexArrayObject !== yb && (this._cachedVertexArrayObject = yb, this._gl.bindVertexArray(yb), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != bb && bb.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(yb, bb, Wy, Uy, hy) {
        if (this._cachedVertexBuffers !== yb || this._cachedEffectForVertexBuffers !== hy) {
          this._cachedVertexBuffers = yb, this._cachedEffectForVertexBuffers = hy;
          const bb = hy.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let fy = 0;
          for (let Zy = 0; Zy < bb; Zy++)
            if (Zy < Wy.length) {
              const bb = hy.getAttributeLocation(Zy);
              bb >= 0 && (this._gl.enableVertexAttribArray(bb), this._vertexAttribArraysEnabled[bb] = !0, this._vertexAttribPointer(yb, bb, Wy[Zy], this._gl.FLOAT, !1, Uy, fy)), fy += 4 * Wy[Zy]
            }
        }
        this._bindIndexBufferWithCache(bb)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(yb, bb, Wy, Uy) {
        this._cachedVertexBuffers === yb && this._cachedEffectForVertexBuffers === Wy || (this._cachedVertexBuffers = yb, this._cachedEffectForVertexBuffers = Wy, this._bindVertexBuffersAttributes(yb, Wy, Uy)), this._bindIndexBufferWithCache(bb)
      }
      unbindInstanceAttributes() {
        let yb;
        for (let bb = 0, Wy = this._currentInstanceLocations.length; bb < Wy; bb++) {
          const Wy = this._currentInstanceBuffers[bb];
          yb != Wy && Wy.references && (yb = Wy, this.bindArrayBuffer(Wy));
          const Uy = this._currentInstanceLocations[bb];
          this._gl.vertexAttribDivisor(Uy, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(yb) {
        this._gl.deleteVertexArray(yb)
      }
      _releaseBuffer(yb) {
        return yb.references--, 0 === yb.references && (this._deleteBuffer(yb), !0)
      }
      _deleteBuffer(yb) {
        this._gl.deleteBuffer(yb.underlyingResource)
      }
      updateAndBindInstancesBuffer(yb, bb, Wy) {
        if (this.bindArrayBuffer(yb), bb && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, bb), void 0 !== Wy[0].index) this.bindInstancesBuffer(yb, Wy, !0);
        else
          for (let Uy = 0; Uy < 4; Uy++) {
            const bb = Wy[Uy];
            this._vertexAttribArraysEnabled[bb] || (this._gl.enableVertexAttribArray(bb), this._vertexAttribArraysEnabled[bb] = !0), this._vertexAttribPointer(yb, bb, 4, this._gl.FLOAT, !1, 64, 16 * Uy), this._gl.vertexAttribDivisor(bb, 1), this._currentInstanceLocations.push(bb), this._currentInstanceBuffers.push(yb)
          }
      }
      bindInstancesBuffer(yb, bb) {
        let Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(yb);
        let Uy = 0;
        if (Wy)
          for (let hy = 0; hy < bb.length; hy++) {
            Uy += 4 * bb[hy].attributeSize
          }
        for (let hy = 0; hy < bb.length; hy++) {
          const Wy = bb[hy];
          void 0 === Wy.index && (Wy.index = this._currentEffect.getAttributeLocationByName(Wy.attributeName)), Wy.index < 0 || (this._vertexAttribArraysEnabled[Wy.index] || (this._gl.enableVertexAttribArray(Wy.index), this._vertexAttribArraysEnabled[Wy.index] = !0), this._vertexAttribPointer(yb, Wy.index, Wy.attributeSize, Wy.attributeType || this._gl.FLOAT, Wy.normalized || !1, Uy, Wy.offset), this._gl.vertexAttribDivisor(Wy.index, void 0 === Wy.divisor ? 1 : Wy.divisor), this._currentInstanceLocations.push(Wy.index), this._currentInstanceBuffers.push(yb))
        }
      }
      disableInstanceAttributeByName(yb) {
        if (!this._currentEffect) return;
        const bb = this._currentEffect.getAttributeLocationByName(yb);
        this.disableInstanceAttribute(bb)
      }
      disableInstanceAttribute(yb) {
        let bb, Wy = !1;
        for (; - 1 !== (bb = this._currentInstanceLocations.indexOf(yb));) this._currentInstanceLocations.splice(bb, 1), this._currentInstanceBuffers.splice(bb, 1), Wy = !0;
        Wy && (this._gl.vertexAttribDivisor(yb, 0), this.disableAttributeByIndex(yb))
      }
      disableAttributeByIndex(yb) {
        this._gl.disableVertexAttribArray(yb), this._vertexAttribArraysEnabled[yb] = !1, this._currentBufferPointers[yb].active = !1
      }
      draw(yb, bb, Wy, Uy) {
        this.drawElementsType(yb ? 0 : 1, bb, Wy, Uy)
      }
      drawPointClouds(yb, bb, Wy) {
        this.drawArraysType(2, yb, bb, Wy)
      }
      drawUnIndexed(yb, bb, Wy, Uy) {
        this.drawArraysType(yb ? 0 : 1, bb, Wy, Uy)
      }
      drawElementsType(yb, bb, Wy, Uy) {
        this.applyStates(), this._reportDrawCall();
        const hy = this._drawMode(yb),
          fy = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          Zy = this._uintIndicesCurrentlySet ? 4 : 2;
        Uy ? this._gl.drawElementsInstanced(hy, Wy, fy, bb * Zy, Uy) : this._gl.drawElements(hy, Wy, fy, bb * Zy)
      }
      drawArraysType(yb, bb, Wy, Uy) {
        this.applyStates(), this._reportDrawCall();
        const hy = this._drawMode(yb);
        Uy ? this._gl.drawArraysInstanced(hy, bb, Wy, Uy) : this._gl.drawArrays(hy, bb, Wy)
      }
      _drawMode(yb) {
        switch (yb) {
          case 0:
          default:
            return this._gl.TRIANGLES;
          case 2:
          case 3:
            return this._gl.POINTS;
          case 1:
          case 4:
            return this._gl.LINES;
          case 5:
            return this._gl.LINE_LOOP;
          case 6:
            return this._gl.LINE_STRIP;
          case 7:
            return this._gl.TRIANGLE_STRIP;
          case 8:
            return this._gl.TRIANGLE_FAN
        }
      }
      _releaseEffect(yb) {
        this._compiledEffects[yb._key] && delete this._compiledEffects[yb._key];
        const bb = yb.getPipelineContext();
        bb && this._deletePipelineContext(bb)
      }
      _deletePipelineContext(yb) {
        const bb = yb;
        bb && bb.program && (bb.program.__SPECTOR_rebuildProgram = null, (0, ly.k)(bb), this._gl && (this._currentProgram === bb.program && this._setProgram(null), this._gl.deleteProgram(bb.program)))
      }
      _getGlobalDefines(yb) {
        return (0, Ey.h)(yb, this.isNDCHalfZRange, this.Aoy, this.useExactSrgbConversions)
      }
      createEffect(yb, bb, Wy, fy, Zy, cb, Py, oy, By) {
        let Ky = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          ey = arguments.length > 10 ? arguments[10] : void 0;
        const qb = "string" === typeof yb ? yb : yb.vertexToken || yb.vertexSource || yb.vertexElement || yb.vertex,
          sy = "string" === typeof yb ? yb : yb.fragmentToken || yb.fragmentSource || yb.fragmentElement || yb.fragment,
          Sy = this._getGlobalDefines(),
          Ey = void 0 !== bb.attributes;
        let ly = Zy ?? bb.defines ?? "";
        Sy && (ly += Sy);
        const mb = qb + "+" + sy + "@" + ly;
        if (this._compiledEffects[mb]) {
          const yb = this._compiledEffects[mb];
          return Py && yb.isReady() && Py(yb), yb._refCount++, yb
        }
        this._gl && (0, hy.B)(this._gl);
        const Cy = new Uy.c(yb, bb, Ey ? this : Wy, fy, this, Zy, cb, Py, oy, By, mb, bb.shaderLanguage ?? Ky, bb.extraInitializationsAsync ?? ey);
        return this._compiledEffects[mb] = Cy, Cy
      }
      _getShaderSource(yb) {
        return this._gl.getShaderSource(yb)
      }
      createRawShaderProgram(yb, bb, Wy, Uy) {
        let fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Zy = (0, hy.B)(this._gl);
        return Zy._contextWasLost = this._contextWasLost, Zy.validateShaderPrograms = this.validateShaderPrograms, (0, hy.t)(yb, bb, Wy, Uy || this._gl, fy)
      }
      createShaderProgram(yb, bb, Wy, Uy, fy) {
        let Zy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const cb = (0, hy.B)(this._gl);
        return cb._contextWasLost = this._contextWasLost, cb.validateShaderPrograms = this.validateShaderPrograms, (0, hy.w)(yb, bb, Wy, Uy, fy || this._gl, Zy)
      }
      inlineShaderCode(yb) {
        return yb
      }
      createPipelineContext(yb) {
        if (this._gl) {
          (0, hy.B)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const bb = (0, hy.p)(this._gl, yb);
        return bb.engine = this, bb
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(yb) {
        return (0, hy.f)(yb, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(yb, bb, Wy, Uy, fy, Zy, cb, Py, oy, By, Ky) {
        const ey = (0, hy.B)(this._gl);
        return ey._contextWasLost = this._contextWasLost, ey.validateShaderPrograms = this.validateShaderPrograms, ey._createShaderProgramInjection = this._createShaderProgram.bind(this), ey.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), ey.createShaderProgramInjection = this.createShaderProgram.bind(this), ey.loadFileInjection = this._loadFile.bind(this), (0, hy.i)(yb, bb, Wy, Uy, fy, Zy, cb, Py, oy, By, Ky)
      }
      _createShaderProgram(yb, bb, Wy, Uy) {
        let fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, hy.d)(yb, bb, Wy, Uy, fy)
      }
      _isRenderingStateCompiled(yb) {
        return !this._isDisposed && (0, hy.g)(yb, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(yb, bb) {
        (0, hy.e)(yb, bb)
      }
      getUniforms(yb, bb) {
        const Wy = new Array,
          Uy = yb;
        for (let hy = 0; hy < bb.length; hy++) Wy.push(this._gl.getUniformLocation(Uy.program, bb[hy]));
        return Wy
      }
      getAttributes(yb, bb) {
        const Wy = [],
          Uy = yb;
        for (let fy = 0; fy < bb.length; fy++) try {
          Wy.push(this._gl.getAttribLocation(Uy.program, bb[fy]))
        } catch (hy) {
          Wy.push(-1)
        }
        return Wy
      }
      enableEffect(yb) {
        (yb = null !== yb && (0, Zy.d)(yb) ? yb.effect : yb) && yb !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(yb), this._currentEffect = yb, yb.onBind && yb.onBind(yb), yb._onBindObservable && yb._onBindObservable.notifyObservers(yb))
      }
      setInt(yb, bb) {
        return !!yb && (this._gl.uniform1i(yb, bb), !0)
      }
      setInt2(yb, bb, Wy) {
        return !!yb && (this._gl.uniform2i(yb, bb, Wy), !0)
      }
      setInt3(yb, bb, Wy, Uy) {
        return !!yb && (this._gl.uniform3i(yb, bb, Wy, Uy), !0)
      }
      setInt4(yb, bb, Wy, Uy, hy) {
        return !!yb && (this._gl.uniform4i(yb, bb, Wy, Uy, hy), !0)
      }
      setIntArray(yb, bb) {
        return !!yb && (this._gl.uniform1iv(yb, bb), !0)
      }
      setIntArray2(yb, bb) {
        return !(!yb || bb.length % 2 !== 0) && (this._gl.uniform2iv(yb, bb), !0)
      }
      setIntArray3(yb, bb) {
        return !(!yb || bb.length % 3 !== 0) && (this._gl.uniform3iv(yb, bb), !0)
      }
      setIntArray4(yb, bb) {
        return !(!yb || bb.length % 4 !== 0) && (this._gl.uniform4iv(yb, bb), !0)
      }
      setUInt(yb, bb) {
        return !!yb && (this._gl.uniform1ui(yb, bb), !0)
      }
      setUInt2(yb, bb, Wy) {
        return !!yb && (this._gl.uniform2ui(yb, bb, Wy), !0)
      }
      setUInt3(yb, bb, Wy, Uy) {
        return !!yb && (this._gl.uniform3ui(yb, bb, Wy, Uy), !0)
      }
      setUInt4(yb, bb, Wy, Uy, hy) {
        return !!yb && (this._gl.uniform4ui(yb, bb, Wy, Uy, hy), !0)
      }
      setUIntArray(yb, bb) {
        return !!yb && (this._gl.uniform1uiv(yb, bb), !0)
      }
      setUIntArray2(yb, bb) {
        return !(!yb || bb.length % 2 !== 0) && (this._gl.uniform2uiv(yb, bb), !0)
      }
      setUIntArray3(yb, bb) {
        return !(!yb || bb.length % 3 !== 0) && (this._gl.uniform3uiv(yb, bb), !0)
      }
      setUIntArray4(yb, bb) {
        return !(!yb || bb.length % 4 !== 0) && (this._gl.uniform4uiv(yb, bb), !0)
      }
      setArray(yb, bb) {
        return !!yb && (!(bb.length < 1) && (this._gl.uniform1fv(yb, bb), !0))
      }
      setArray2(yb, bb) {
        return !(!yb || bb.length % 2 !== 0) && (this._gl.uniform2fv(yb, bb), !0)
      }
      setArray3(yb, bb) {
        return !(!yb || bb.length % 3 !== 0) && (this._gl.uniform3fv(yb, bb), !0)
      }
      setArray4(yb, bb) {
        return !(!yb || bb.length % 4 !== 0) && (this._gl.uniform4fv(yb, bb), !0)
      }
      setMatrices(yb, bb) {
        return !!yb && (this._gl.uniformMatrix4fv(yb, !1, bb), !0)
      }
      setMatrix3x3(yb, bb) {
        return !!yb && (this._gl.uniformMatrix3fv(yb, !1, bb), !0)
      }
      setMatrix2x2(yb, bb) {
        return !!yb && (this._gl.uniformMatrix2fv(yb, !1, bb), !0)
      }
      setFloat(yb, bb) {
        return !!yb && (this._gl.uniform1f(yb, bb), !0)
      }
      setFloat2(yb, bb, Wy) {
        return !!yb && (this._gl.uniform2f(yb, bb, Wy), !0)
      }
      setFloat3(yb, bb, Wy, Uy) {
        return !!yb && (this._gl.uniform3f(yb, bb, Wy, Uy), !0)
      }
      setFloat4(yb, bb, Wy, Uy, hy) {
        return !!yb && (this._gl.uniform4f(yb, bb, Wy, Uy, hy), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const yb = this._colorWrite;
          this._gl.colorMask(yb, yb, yb, yb)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(yb) {
        this.preventCacheWipeBetweenFrames && !yb || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), yb && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(yb, bb) {
        const Wy = this._gl;
        let Uy = Wy.NEAREST,
          hy = Wy.NEAREST,
          fy = !1;
        switch (yb) {
          case 11:
            Uy = Wy.LINEAR, hy = bb ? Wy.LINEAR_MIPMAP_NEAREST : Wy.LINEAR;
            break;
          case 3:
            Uy = Wy.LINEAR, fy = !0, hy = bb ? Wy.LINEAR_MIPMAP_LINEAR : Wy.LINEAR;
            break;
          case 8:
            fy = !0, Uy = Wy.NEAREST, hy = bb ? Wy.NEAREST_MIPMAP_LINEAR : Wy.NEAREST;
            break;
          case 4:
            Uy = Wy.NEAREST, hy = bb ? Wy.NEAREST_MIPMAP_NEAREST : Wy.NEAREST;
            break;
          case 5:
            Uy = Wy.NEAREST, hy = bb ? Wy.LINEAR_MIPMAP_NEAREST : Wy.LINEAR;
            break;
          case 6:
            fy = !0, Uy = Wy.NEAREST, hy = bb ? Wy.LINEAR_MIPMAP_LINEAR : Wy.LINEAR;
            break;
          case 7:
            Uy = Wy.NEAREST, hy = Wy.LINEAR;
            break;
          case 1:
            Uy = Wy.NEAREST, hy = Wy.NEAREST;
            break;
          case 9:
            Uy = Wy.LINEAR, hy = bb ? Wy.NEAREST_MIPMAP_NEAREST : Wy.NEAREST;
            break;
          case 10:
            fy = !0, Uy = Wy.LINEAR, hy = bb ? Wy.NEAREST_MIPMAP_LINEAR : Wy.NEAREST;
            break;
          case 2:
            Uy = Wy.LINEAR, hy = Wy.LINEAR;
            break;
          case 12:
            Uy = Wy.LINEAR, hy = Wy.NEAREST
        }
        return {
          min: hy,
          mag: Uy,
          hasMipMaps: fy
        }
      }
      _createTexture() {
        const yb = this._gl.createTexture();
        if (!yb) throw new Error("Unable to create texture");
        return yb
      }
      _createHardwareTexture() {
        return new sy.c(this._createTexture(), this._gl)
      }
      _createInternalTexture(yb, bb) {
        let Wy, Uy, hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          fy = !1,
          Zy = 0,
          Py = 3,
          oy = 5,
          By = !1,
          Ky = 1,
          ey = !1,
          qb = 0,
          sy = !1;
        void 0 !== bb && "object" === typeof bb ? (Wy = !!bb.generateMipMaps, fy = !!bb.createMipMaps, Zy = void 0 === bb.type ? 0 : bb.type, Py = void 0 === bb.samplingMode ? 3 : bb.samplingMode, oy = void 0 === bb.format ? 5 : bb.format, By = void 0 !== bb.useSRGBBuffer && bb.useSRGBBuffer, Ky = bb.samples ?? 1, Uy = bb.label, ey = !!bb.createMSAATexture, qb = bb.comparisonFunction || 0, sy = !!bb.isCube) : Wy = !!bb, By && (By = this._caps.supportSRGBBuffers && (this.vf > 1 || this.isWebGPU)), (1 !== Zy || this._caps.textureFloatLinearFiltering) && (2 !== Zy || this._caps.textureHalfFloatLinearFiltering) || (Py = 1), 1 !== Zy || this._caps.textureFloat || (Zy = 0, cb.b.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const Ey = (0, mb.g)(oy),
          ly = (0, mb.c)(oy),
          Cy = this._gl,
          Ty = new Sy.d(this, hy),
          Vy = yb.width || yb,
          Jy = yb.height || yb,
          gb = yb.depth || 0,
          Gy = yb.layers || 0,
          Oy = this._getSamplingParameters(Py, (Wy || fy) && !Ey),
          Ry = 0 !== Gy ? Cy.TEXTURE_2D_ARRAY : 0 !== gb ? Cy.TEXTURE_3D : sy ? Cy.TEXTURE_CUBE_MAP : Cy.TEXTURE_2D,
          vb = Ey ? this._getInternalFormatFromDepthTextureFormat(oy, !0, ly) : this._getRGBABufferInternalSizedFormat(Zy, oy, By),
          ib = Ey ? ly ? Cy.DEPTH_STENCIL : Cy.DEPTH_COMPONENT : this._getInternalFormat(oy),
          My = Ey ? this._getWebGLTextureTypeFromDepthTextureFormat(oy) : this._getWebGLTextureType(Zy);
        if (this._bindTextureDirectly(Ry, Ty), 0 !== Gy) Ty.is2DArray = !0, Cy.texImage3D(Ry, 0, vb, Vy, Jy, Gy, 0, ib, My, null);
        else if (0 !== gb) Ty.is3D = !0, Cy.texImage3D(Ry, 0, vb, Vy, Jy, gb, 0, ib, My, null);
        else if (sy) {
          Ty.isCube = !0;
          for (let yb = 0; yb < 6; yb++) Cy.texImage2D(Cy.TEXTURE_CUBE_MAP_POSITIVE_X + yb, 0, vb, Vy, Jy, 0, ib, My, null)
        } else Cy.texImage2D(Ry, 0, vb, Vy, Jy, 0, ib, My, null);
        if (Cy.texParameteri(Ry, Cy.TEXTURE_MAG_FILTER, Oy.mag), Cy.texParameteri(Ry, Cy.TEXTURE_MIN_FILTER, Oy.min), Cy.texParameteri(Ry, Cy.TEXTURE_WRAP_S, Cy.CLAMP_TO_EDGE), Cy.texParameteri(Ry, Cy.TEXTURE_WRAP_T, Cy.CLAMP_TO_EDGE), Ey && this.vf > 1 && (0 === qb ? (Cy.texParameteri(Ry, Cy.TEXTURE_COMPARE_FUNC, 515), Cy.texParameteri(Ry, Cy.TEXTURE_COMPARE_MODE, Cy.NONE)) : (Cy.texParameteri(Ry, Cy.TEXTURE_COMPARE_FUNC, qb), Cy.texParameteri(Ry, Cy.TEXTURE_COMPARE_MODE, Cy.COMPARE_REF_TO_TEXTURE))), (Wy || fy) && this._gl.generateMipmap(Ry), this._bindTextureDirectly(Ry, null), Ty._useSRGBBuffer = By, Ty.baseWidth = Vy, Ty.baseHeight = Jy, Ty.width = Vy, Ty.height = Jy, Ty.depth = Gy || gb, Ty.isReady = !0, Ty.samples = Ky, Ty.generateMipMaps = Wy, Ty.samplingMode = Py, Ty.type = Zy, Ty.format = oy, Ty.label = Uy, Ty.comparisonFunction = qb, this._internalTexturesCache.push(Ty), ey) {
          let yb;
          if (yb = (0, mb.g)(Ty.format) ? this._setupFramebufferDepthAttachments((0, mb.c)(Ty.format), 19 !== Ty.format, Ty.width, Ty.height, Ky, Ty.format, !0) : this._createRenderBuffer(Ty.width, Ty.height, Ky, -1, this._getRGBABufferInternalSizedFormat(Ty.type, Ty.format, Ty._useSRGBBuffer), -1), !yb) throw new Error("Unable to create render buffer");
          Ty._autoMSAAManagement = !0;
          let bb = Ty._hardwareTexture;
          bb || (bb = Ty._hardwareTexture = this._createHardwareTexture()), bb.addMSAARenderBuffer(yb)
        }
        return Ty
      }
      _getUseSRGBBuffer(yb, bb) {
        return yb && this._caps.supportSRGBBuffers && (this.vf > 1 || bb)
      }
      createTexture(yb, bb, Wy, Uy) {
        var hy = this;
        let fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Zy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          cb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Py = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          oy = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          By = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Ky = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          ey = arguments.length > 11 ? arguments[11] : void 0,
          qb = arguments.length > 12 ? arguments[12] : void 0,
          sy = arguments.length > 13 ? arguments[13] : void 0,
          Ey = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(yb, bb, Wy, Uy, fy, Zy, cb, (function() {
          for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
          return hy._prepareWebGLTexture(...bb, By)
        }), ((yb, bb, Wy, hy, fy, Zy) => {
          const cb = this._gl,
            Py = Wy.width === yb && Wy.height === bb;
          fy._creationFlags = sy ?? 0;
          const oy = this._getTexImageParametersForCreateTexture(fy.format, fy._useSRGBBuffer);
          if (Py) return cb.texImage2D(cb.TEXTURE_2D, 0, oy.internalFormat, oy.format, oy.type, Wy), !1;
          const By = this._caps.maxTextureSize;
          if (Wy.width > By || Wy.height > By || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = yb, this._workingCanvas.height = bb, this._workingContext.drawImage(Wy, 0, 0, Wy.width, Wy.height, 0, 0, yb, bb), cb.texImage2D(cb.TEXTURE_2D, 0, oy.internalFormat, oy.format, oy.type, this._workingCanvas), fy.width = yb, fy.height = bb, !1);
          {
            const yb = new Sy.d(this, 2);
            this._bindTextureDirectly(cb.TEXTURE_2D, yb, !0), cb.texImage2D(cb.TEXTURE_2D, 0, oy.internalFormat, oy.format, oy.type, Wy), this._rescaleTexture(yb, fy, Uy, oy.format, (() => {
              this._releaseTexture(yb), this._bindTextureDirectly(cb.TEXTURE_2D, fy, !0), Zy()
            }))
          }
          return !0
        }), Py, oy, By, Ky, ey, qb, Ey)
      }
      _getTexImageParametersForCreateTexture(yb, bb) {
        let Wy, Uy;
        return 1 === this.vf ? (Wy = this._getInternalFormat(yb, bb), Uy = Wy) : (Wy = this._getInternalFormat(yb, !1), Uy = this._getRGBABufferInternalSizedFormat(0, yb, bb)), {
          internalFormat: Uy,
          format: Wy,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(yb, bb, Wy, Uy, hy) {}
      _unpackFlipY(yb) {
        this._unpackFlipYCached !== yb && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, yb ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = yb))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(yb) {
        return yb.isCube ? this._gl.TEXTURE_CUBE_MAP : yb.is3D ? this._gl.TEXTURE_3D : yb.is2DArray || yb.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Uy = this._getTextureTarget(bb),
          hy = this._getSamplingParameters(yb, bb.useMipMaps || Wy);
        this._setTextureParameterInteger(Uy, this._gl.TEXTURE_MAG_FILTER, hy.mag, bb), this._setTextureParameterInteger(Uy, this._gl.TEXTURE_MIN_FILTER, hy.min), Wy && hy.hasMipMaps && (bb.generateMipMaps = !0, this._gl.generateMipmap(Uy)), this._bindTextureDirectly(Uy, null), bb.samplingMode = yb
      }
      updateTextureDimensions(yb, bb, Wy) {}
      updateTextureWrappingMode(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const hy = this._getTextureTarget(yb);
        null !== bb && (this._setTextureParameterInteger(hy, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(bb), yb), yb._cachedWrapU = bb), null !== Wy && (this._setTextureParameterInteger(hy, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(Wy), yb), yb._cachedWrapV = Wy), (yb.is2DArray || yb.is3D) && null !== Uy && (this._setTextureParameterInteger(hy, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Uy), yb), yb._cachedWrapR = Uy), this._bindTextureDirectly(hy, null)
      }
      _uploadCompressedDataToTextureDirectly(yb, bb, Wy, Uy, hy) {
        let fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Zy = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const cb = this._gl;
        let Py = cb.TEXTURE_2D;
        if (yb.isCube && (Py = cb.TEXTURE_CUBE_MAP_POSITIVE_X + fy), yb._useSRGBBuffer) switch (bb) {
          case 37492:
          case 36196:
            this._caps.etc2 ? bb = cb.COMPRESSED_SRGB8_ETC2 : yb._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? bb = cb.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : yb._useSRGBBuffer = !1;
            break;
          case 36492:
            bb = cb.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            bb = cb.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            bb = cb.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            bb = cb.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            bb = cb.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            bb = cb.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            bb = cb.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            bb = cb.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            bb = cb.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            bb = cb.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            bb = cb.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            bb = cb.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            bb = cb.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            bb = cb.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            bb = cb.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? bb = cb.COMPRESSED_SRGB_S3TC_DXT1_EXT : yb._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? bb = cb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : yb._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? bb = cb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : yb._useSRGBBuffer = !1;
            break;
          default:
            yb._useSRGBBuffer = !1
        }
        if (yb.generateMipMaps) {
          const fy = yb._hardwareTexture;
          fy.memoryAllocated || (cb.texStorage2D(yb.isCube ? cb.TEXTURE_CUBE_MAP : cb.TEXTURE_2D, Math.floor(Math.log2(Math.max(Wy, Uy))) + 1, bb, yb.width, yb.height), fy.memoryAllocated = !0), this._gl.compressedTexSubImage2D(Py, Zy, 0, 0, Wy, Uy, bb, hy)
        } else this._gl.compressedTexImage2D(Py, Zy, bb, Wy, Uy, 0, hy)
      }
      _uploadDataToTextureDirectly(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          hy = arguments.length > 4 ? arguments[4] : void 0,
          fy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Zy = this._gl,
          cb = this._getWebGLTextureType(yb.type),
          Py = this._getInternalFormat(yb.format),
          oy = void 0 === hy ? this._getRGBABufferInternalSizedFormat(yb.type, yb.format, yb._useSRGBBuffer) : this._getInternalFormat(hy, yb._useSRGBBuffer);
        this._unpackFlipY(yb.invertY);
        let By = Zy.TEXTURE_2D;
        yb.isCube && (By = Zy.TEXTURE_CUBE_MAP_POSITIVE_X + Wy);
        const Ky = Math.round(Math.log(yb.width) * Math.LOG2E),
          ey = Math.round(Math.log(yb.height) * Math.LOG2E),
          qb = fy ? yb.width : Math.pow(2, Math.max(Ky - Uy, 0)),
          sy = fy ? yb.height : Math.pow(2, Math.max(ey - Uy, 0));
        Zy.texImage2D(By, Uy, oy, qb, sy, 0, Py, cb, bb)
      }
      updateTextureData(yb, bb, Wy, Uy, hy, fy) {
        let Zy = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          cb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Py = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const oy = this._gl,
          By = this._getWebGLTextureType(yb.type),
          Ky = this._getInternalFormat(yb.format);
        this._unpackFlipY(yb.invertY);
        let ey = oy.TEXTURE_2D,
          qb = oy.TEXTURE_2D;
        yb.isCube && (qb = oy.TEXTURE_CUBE_MAP_POSITIVE_X + Zy, ey = oy.TEXTURE_CUBE_MAP), this._bindTextureDirectly(ey, yb, !0), oy.texSubImage2D(qb, cb, Wy, Uy, hy, fy, Ky, By, bb), Py && this._gl.generateMipmap(qb), this._bindTextureDirectly(ey, null)
      }
      _uploadArrayBufferViewToTexture(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const hy = this._gl,
          fy = yb.isCube ? hy.TEXTURE_CUBE_MAP : hy.TEXTURE_2D;
        this._bindTextureDirectly(fy, yb, !0), this._uploadDataToTextureDirectly(yb, bb, Wy, Uy), this._bindTextureDirectly(fy, null, !0)
      }
      _prepareWebGLTextureContinuation(yb, bb, Wy, Uy, hy) {
        const fy = this._gl;
        if (!fy) return;
        const Zy = this._getSamplingParameters(hy, !Wy);
        fy.texParameteri(fy.TEXTURE_2D, fy.TEXTURE_MAG_FILTER, Zy.mag), fy.texParameteri(fy.TEXTURE_2D, fy.TEXTURE_MIN_FILTER, Zy.min), Wy || Uy || fy.generateMipmap(fy.TEXTURE_2D), this._bindTextureDirectly(fy.TEXTURE_2D, null), bb && bb.removePendingData(yb), yb.onLoadedObservable.notifyObservers(yb), yb.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy) {
        const By = this.getCaps().maxTextureSize,
          Ky = Math.min(By, this.needPOTTextures ? (0, qb.d)(Uy.width, By) : Uy.width),
          ey = Math.min(By, this.needPOTTextures ? (0, qb.d)(Uy.height, By) : Uy.height),
          sy = this._gl;
        sy && (yb._hardwareTexture ? (this._bindTextureDirectly(sy.TEXTURE_2D, yb, !0), this._unpackFlipY(void 0 === hy || !!hy), yb.baseWidth = Uy.width, yb.baseHeight = Uy.height, yb.width = Ky, yb.height = ey, yb.isReady = !0, yb.type = -1 !== yb.type ? yb.type : 0, yb.format = -1 !== yb.format ? yb.format : oy ?? (".jpg" !== bb || yb._useSRGBBuffer ? 5 : 4), cb(Ky, ey, Uy, bb, yb, (() => {
          this._prepareWebGLTextureContinuation(yb, Wy, fy, Zy, Py)
        })) || this._prepareWebGLTextureContinuation(yb, Wy, fy, Zy, Py)) : Wy && Wy.removePendingData(yb))
      }
      _getInternalFormatFromDepthTextureFormat(yb, bb, Wy) {
        const Uy = this._gl;
        if (!bb) return Uy.STENCIL_INDEX8;
        let hy = Wy ? Uy.DEPTH_STENCIL : Uy.DEPTH_COMPONENT;
        return this.vf > 1 ? 15 === yb ? hy = Uy.DEPTH_COMPONENT16 : 16 === yb ? hy = Uy.DEPTH_COMPONENT24 : 17 === yb || 13 === yb ? hy = Wy ? Uy.DEPTH24_STENCIL8 : Uy.DEPTH_COMPONENT24 : 14 === yb ? hy = Uy.DEPTH_COMPONENT32F : 18 === yb && (hy = Wy ? Uy.DEPTH32F_STENCIL8 : Uy.DEPTH_COMPONENT32F) : hy = Uy.DEPTH_COMPONENT16, hy
      }
      _getWebGLTextureTypeFromDepthTextureFormat(yb) {
        const bb = this._gl;
        let Wy = bb.UNSIGNED_INT;
        return 15 === yb ? Wy = bb.UNSIGNED_SHORT : 17 === yb || 13 === yb ? Wy = bb.UNSIGNED_INT_24_8 : 14 === yb ? Wy = bb.FLOAT : 18 === yb ? Wy = bb.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === yb && (Wy = bb.UNSIGNED_BYTE), Wy
      }
      _setupFramebufferDepthAttachments(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          fy = arguments.length > 5 ? arguments[5] : void 0,
          Zy = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const cb = this._gl;
        fy = fy ?? (yb ? 13 : 14);
        const Py = this._getInternalFormatFromDepthTextureFormat(fy, bb, yb);
        return yb && bb ? this._createRenderBuffer(Wy, Uy, hy, cb.DEPTH_STENCIL, Py, Zy ? -1 : cb.DEPTH_STENCIL_ATTACHMENT) : bb ? this._createRenderBuffer(Wy, Uy, hy, Py, Py, Zy ? -1 : cb.DEPTH_ATTACHMENT) : yb ? this._createRenderBuffer(Wy, Uy, hy, Py, Py, Zy ? -1 : cb.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(yb, bb, Wy, Uy, hy, fy) {
        let Zy = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const cb = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(cb, yb, bb, Wy, Uy, hy, fy, Zy)
      }
      _updateRenderBuffer(yb, bb, Wy, Uy, hy, fy, Zy) {
        let cb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const Py = this._gl;
        return Py.bindRenderbuffer(Py.RENDERBUFFER, yb), Uy > 1 && Py.renderbufferStorageMultisample ? Py.renderbufferStorageMultisample(Py.RENDERBUFFER, Uy, fy, bb, Wy) : Py.renderbufferStorage(Py.RENDERBUFFER, hy, bb, Wy), -1 !== Zy && Py.framebufferRenderbuffer(Py.FRAMEBUFFER, Zy, Py.RENDERBUFFER, yb), cb && Py.bindRenderbuffer(Py.RENDERBUFFER, null), yb
      }
      _releaseTexture(yb) {
        this._deleteTexture(yb._hardwareTexture), this.unbindAllTextures();
        const bb = this._internalTexturesCache.indexOf(yb); - 1 !== bb && this._internalTexturesCache.splice(bb, 1), yb._lodTextureHigh && yb._lodTextureHigh.dispose(), yb._lodTextureMid && yb._lodTextureMid.dispose(), yb._lodTextureLow && yb._lodTextureLow.dispose(), yb._irradianceTexture && yb._irradianceTexture.dispose()
      }
      _deleteTexture(yb) {
        yb?.release()
      }
      _setProgram(yb) {
        this._currentProgram !== yb && ((0, hy.l)(yb, this._gl), this._currentProgram = yb)
      }
      bindSamplers(yb) {
        const bb = yb.getPipelineContext();
        this._setProgram(bb.program);
        const Wy = yb.getSamplers();
        for (let Uy = 0; Uy < Wy.length; Uy++) {
          const bb = yb.getUniform(Wy[Uy]);
          bb && (this._boundUniforms[Uy] = bb)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          hy = !1;
        const fy = bb && bb._associatedChannel > -1;
        Wy && fy && (this._activeChannel = bb._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== bb || Uy) {
          if (this._activateCurrentTexture(), bb && bb.isMultiview) throw cb.b.Error(["_bindTextureDirectly called with a multiview texture!", yb, bb]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(yb, bb?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = bb, bb && (bb._associatedChannel = this._activeChannel)
        } else Wy && (hy = !0, this._activateCurrentTexture());
        return fy && !Wy && this._bindSamplerUniformToChannel(bb._associatedChannel, this._activeChannel), hy
      }
      _bindTexture(yb, bb, Wy) {
        if (void 0 === yb) return;
        bb && (bb._associatedChannel = yb), this._activeChannel = yb;
        const Uy = bb ? this._getTextureTarget(bb) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(Uy, bb)
      }
      unbindAllTextures() {
        for (let yb = 0; yb < this._maxSimultaneousTextures; yb++) this._activeChannel = yb, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.vf > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(yb, bb, Wy, Uy) {
        void 0 !== yb && (bb && (this._boundUniforms[yb] = bb), this._setTexture(yb, Wy))
      }
      _bindSamplerUniformToChannel(yb, bb) {
        const Wy = this._boundUniforms[yb];
        Wy && Wy._currentState !== bb && (this._gl.uniform1i(Wy, bb), Wy._currentState = bb)
      }
      _getTextureWrapMode(yb) {
        switch (yb) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(yb, bb) {
        let Wy, Uy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!bb) return null != this._boundTexturesCache[yb] && (this._activeChannel = yb, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.vf > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (bb.video) {
          this._activeChannel = yb;
          const Wy = bb.getInternalTexture();
          Wy && (Wy._associatedChannel = yb), bb.update()
        } else if (4 === bb.delayLoadState) return bb.delayLoad(), !1;
        Wy = hy ? bb.depthStencilTexture : bb.isReady() ? bb.getInternalTexture() : bb.isCube ? this.emptyCubeTexture : bb.is3D ? this.emptyTexture3D : bb.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !Uy && Wy && (Wy._associatedChannel = yb);
        let fy = !0;
        this._boundTexturesCache[yb] === Wy && (Uy || this._bindSamplerUniformToChannel(Wy._associatedChannel, yb), fy = !1), this._activeChannel = yb;
        const Zy = this._getTextureTarget(Wy);
        if (fy && this._bindTextureDirectly(Zy, Wy, Uy), Wy && !Wy.isMultiview) {
          if (Wy.isCube && Wy._cachedCoordinatesMode !== bb.coordinatesMode) {
            Wy._cachedCoordinatesMode = bb.coordinatesMode;
            const yb = 3 !== bb.coordinatesMode && 5 !== bb.coordinatesMode ? 1 : 0;
            bb.wrapU = yb, bb.wrapV = yb
          }
          Wy._cachedWrapU !== bb.wrapU && (Wy._cachedWrapU = bb.wrapU, this._setTextureParameterInteger(Zy, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(bb.wrapU), Wy)), Wy._cachedWrapV !== bb.wrapV && (Wy._cachedWrapV = bb.wrapV, this._setTextureParameterInteger(Zy, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(bb.wrapV), Wy)), Wy.is3D && Wy._cachedWrapR !== bb.wrapR && (Wy._cachedWrapR = bb.wrapR, this._setTextureParameterInteger(Zy, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(bb.wrapR), Wy)), this._setAnisotropicLevel(Zy, Wy, bb.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(yb, bb, Wy, Uy) {
        if (void 0 !== yb && bb) {
          this._textureUnits && this._textureUnits.length === Wy.length || (this._textureUnits = new Int32Array(Wy.length));
          for (let bb = 0; bb < Wy.length; bb++) {
            const Uy = Wy[bb].getInternalTexture();
            Uy ? (this._textureUnits[bb] = yb + bb, Uy._associatedChannel = yb + bb) : this._textureUnits[bb] = -1
          }
          this._gl.uniform1iv(bb, this._textureUnits);
          for (let yb = 0; yb < Wy.length; yb++) this._setTexture(this._textureUnits[yb], Wy[yb], !0)
        }
      }
      _setAnisotropicLevel(yb, bb, Wy) {
        const Uy = this._caps.textureAnisotropicFilterExtension;
        11 !== bb.samplingMode && 3 !== bb.samplingMode && 2 !== bb.samplingMode && (Wy = 1), Uy && bb._cachedAnisotropicFilteringLevel !== Wy && (this._setTextureParameterFloat(yb, Uy.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(Wy, this._caps.maxAnisotropy), bb), bb._cachedAnisotropicFilteringLevel = Wy)
      }
      _setTextureParameterFloat(yb, bb, Wy, Uy) {
        this._bindTextureDirectly(yb, Uy, !0, !0), this._gl.texParameterf(yb, bb, Wy)
      }
      _setTextureParameterInteger(yb, bb, Wy, Uy) {
        Uy && this._bindTextureDirectly(yb, Uy, !0, !0), this._gl.texParameteri(yb, bb, Wy)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let yb = 0; yb < this._caps.maxVertexAttribs; yb++) this.disableAttributeByIndex(yb)
        } else
          for (let yb = 0, bb = this._vertexAttribArraysEnabled.length; yb < bb; yb++) yb >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[yb] || this.disableAttributeByIndex(yb)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, Py.i)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, hy.y)(this._gl)
      }
      attachContextLostEvent(yb) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", yb, !1)
      }
      attachContextRestoredEvent(yb) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", yb, !1)
      }
      getError() {
        return this._gl.getError()
      }
      _canRenderToFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(1)
      }
      _canRenderToHalfFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(2)
      }
      _canRenderToFramebuffer(yb) {
        const bb = this._gl;
        for (; bb.getError() !== bb.NO_ERROR;);
        let Wy = !0;
        const Uy = bb.createTexture();
        bb.bindTexture(bb.TEXTURE_2D, Uy), bb.texImage2D(bb.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(yb), 1, 1, 0, bb.RGBA, this._getWebGLTextureType(yb), null), bb.texParameteri(bb.TEXTURE_2D, bb.TEXTURE_MIN_FILTER, bb.NEAREST), bb.texParameteri(bb.TEXTURE_2D, bb.TEXTURE_MAG_FILTER, bb.NEAREST);
        const hy = bb.createFramebuffer();
        bb.bindFramebuffer(bb.FRAMEBUFFER, hy), bb.framebufferTexture2D(bb.FRAMEBUFFER, bb.COLOR_ATTACHMENT0, bb.TEXTURE_2D, Uy, 0);
        const fy = bb.checkFramebufferStatus(bb.FRAMEBUFFER);
        if (Wy = Wy && fy === bb.FRAMEBUFFER_COMPLETE, Wy = Wy && bb.getError() === bb.NO_ERROR, Wy && (bb.clear(bb.COLOR_BUFFER_BIT), Wy = Wy && bb.getError() === bb.NO_ERROR), Wy) {
          bb.bindFramebuffer(bb.FRAMEBUFFER, null);
          const yb = bb.RGBA,
            Uy = bb.UNSIGNED_BYTE,
            hy = new Uint8Array(4);
          bb.readPixels(0, 0, 1, 1, yb, Uy, hy), Wy = Wy && bb.getError() === bb.NO_ERROR
        }
        for (bb.deleteTexture(Uy), bb.deleteFramebuffer(hy), bb.bindFramebuffer(bb.FRAMEBUFFER, null); !Wy && bb.getError() !== bb.NO_ERROR;);
        return Wy
      }
      _getWebGLTextureType(yb) {
        if (1 === this._webGLVersion) {
          switch (yb) {
            case 1:
              return this._gl.FLOAT;
            case 2:
              return this._gl.HALF_FLOAT_OES;
            case 0:
              return this._gl.UNSIGNED_BYTE;
            case 8:
              return this._gl.UNSIGNED_SHORT_4_4_4_4;
            case 9:
              return this._gl.UNSIGNED_SHORT_5_5_5_1;
            case 10:
              return this._gl.UNSIGNED_SHORT_5_6_5
          }
          return this._gl.UNSIGNED_BYTE
        }
        switch (yb) {
          case 3:
            return this._gl.BYTE;
          case 0:
            return this._gl.UNSIGNED_BYTE;
          case 4:
            return this._gl.SHORT;
          case 5:
            return this._gl.UNSIGNED_SHORT;
          case 6:
            return this._gl.INT;
          case 7:
            return this._gl.UNSIGNED_INT;
          case 1:
            return this._gl.FLOAT;
          case 2:
            return this._gl.HALF_FLOAT;
          case 8:
            return this._gl.UNSIGNED_SHORT_4_4_4_4;
          case 9:
            return this._gl.UNSIGNED_SHORT_5_5_5_1;
          case 10:
            return this._gl.UNSIGNED_SHORT_5_6_5;
          case 11:
            return this._gl.UNSIGNED_INT_2_10_10_10_REV;
          case 12:
            return this._gl.UNSIGNED_INT_24_8;
          case 13:
            return this._gl.UNSIGNED_INT_10F_11F_11F_REV;
          case 14:
            return this._gl.UNSIGNED_INT_5_9_9_9_REV;
          case 15:
            return this._gl.FLOAT_32_UNSIGNED_INT_24_8_REV
        }
        return this._gl.UNSIGNED_BYTE
      }
      _getInternalFormat(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = bb ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (yb) {
          case 0:
            Wy = this._gl.ALPHA;
            break;
          case 1:
            Wy = this._gl.LUMINANCE;
            break;
          case 2:
            Wy = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            Wy = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            Wy = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            Wy = bb ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            Wy = bb ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (yb) {
          case 8:
            Wy = this._gl.RED_INTEGER;
            break;
          case 9:
            Wy = this._gl.RG_INTEGER;
            break;
          case 10:
            Wy = this._gl.RGB_INTEGER;
            break;
          case 11:
            Wy = this._gl.RGBA_INTEGER
        }
        return Wy
      }
      _getRGBABufferInternalSizedFormat(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== bb) switch (bb) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return Wy ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (yb) {
          case 3:
            switch (bb) {
              case 6:
                return this._gl.R8_SNORM;
              case 7:
                return this._gl.RG8_SNORM;
              case 4:
                return this._gl.RGB8_SNORM;
              case 8:
                return this._gl.R8I;
              case 9:
                return this._gl.RG8I;
              case 10:
                return this._gl.RGB8I;
              case 11:
                return this._gl.RGBA8I;
              default:
                return this._gl.RGBA8_SNORM
            }
          case 0:
            switch (bb) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return Wy ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return Wy ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
              case 8:
                return this._gl.R8UI;
              case 9:
                return this._gl.RG8UI;
              case 10:
                return this._gl.RGB8UI;
              case 11:
                return this._gl.RGBA8UI;
              case 0:
                return this._gl.ALPHA;
              case 1:
                return this._gl.LUMINANCE;
              case 2:
                return this._gl.LUMINANCE_ALPHA;
              default:
                return this._gl.RGBA8
            }
          case 4:
            switch (bb) {
              case 8:
                return this._gl.R16I;
              case 36760:
                return this._gl.R16_SNORM_EXT;
              case 36761:
                return this._gl.RG16_SNORM_EXT;
              case 36762:
                return this._gl.RGB16_SNORM_EXT;
              case 36763:
                return this._gl.RGBA16_SNORM_EXT;
              case 9:
                return this._gl.RG16I;
              case 10:
                return this._gl.RGB16I;
              default:
                return this._gl.RGBA16I
            }
          case 5:
            switch (bb) {
              case 8:
                return this._gl.R16UI;
              case 33322:
                return this._gl.R16_EXT;
              case 33324:
                return this._gl.RG16_EXT;
              case 32852:
                return this._gl.RGB16_EXT;
              case 32859:
                return this._gl.RGBA16_EXT;
              case 9:
                return this._gl.RG16UI;
              case 10:
                return this._gl.RGB16UI;
              default:
                return this._gl.RGBA16UI
            }
          case 6:
            switch (bb) {
              case 8:
                return this._gl.R32I;
              case 9:
                return this._gl.RG32I;
              case 10:
                return this._gl.RGB32I;
              default:
                return this._gl.RGBA32I
            }
          case 7:
            switch (bb) {
              case 8:
                return this._gl.R32UI;
              case 9:
                return this._gl.RG32UI;
              case 10:
                return this._gl.RGB32UI;
              default:
                return this._gl.RGBA32UI
            }
          case 1:
            switch (bb) {
              case 6:
                return this._gl.R32F;
              case 7:
                return this._gl.RG32F;
              case 4:
                return this._gl.RGB32F;
              default:
                return this._gl.RGBA32F
            }
          case 2:
            switch (bb) {
              case 6:
                return this._gl.R16F;
              case 7:
                return this._gl.RG16F;
              case 4:
                return this._gl.RGB16F;
              default:
                return this._gl.RGBA16F
            }
          case 10:
            return this._gl.RGB565;
          case 13:
            return this._gl.R11F_G11F_B10F;
          case 14:
            return this._gl.RGB9_E5;
          case 8:
            return this._gl.RGBA4;
          case 9:
            return this._gl.RGB5_A1;
          case 11:
            switch (bb) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return Wy ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(yb, bb, Wy, Uy) {
        let hy = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          fy = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Zy = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const Py = hy ? 4 : 3,
          oy = hy ? this._gl.RGBA : this._gl.RGB,
          By = Wy * Uy * Py;
        if (Zy) {
          if (Zy.length < By) return cb.b.Error(`Data buffer is too small to store the read pixels (${Zy.length} should be more than ${By})`), Promise.resolve(Zy)
        } else Zy = new Uint8Array(By);
        return fy && this.flushFramebuffer(), this._gl.readPixels(yb, bb, Wy, Uy, oy, this._gl.UNSIGNED_BYTE, Zy), Promise.resolve(Zy)
      }
      static get IsSupportedAsync() {
        return Promise.resolve(this.isSupported())
      }
      static get IsSupported() {
        return this.isSupported()
      }
      static isSupported() {
        if (null !== this._HasMajorPerformanceCaveat) return !this._HasMajorPerformanceCaveat;
        if (null === this._IsSupported) try {
          const yb = fy.d._CreateCanvas(1, 1),
            bb = yb.getContext("webgl") || yb.getContext("experimental-webgl");
          this._IsSupported = null != bb && !!globalThis.WebGLRenderingContext
        } catch (yb) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const yb = fy.d._CreateCanvas(1, 1),
            bb = yb.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || yb.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !bb
        } catch (yb) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    Vy._TempClearColorUint32 = new Uint32Array(4), Vy._TempClearColorInt32 = new Int32Array(4), Vy._TempClearColorFloat32 = new Float32Array(4), Vy.ExceptionList = [{
      key: "Chrome/63.0",
      capture: "63\\.0\\.3239\\.(\\d+)",
      captureConstraint: 108,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/58",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/59",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/72.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/73.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/74.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/71",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/72",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/12\\d\\..+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: ".*AppleWebKit.*(15.4).*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }, {
      key: ".*(15.4).*AppleWebKit.*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }], Vy._ConcatenateShader = Ey.d, Vy._IsSupported = null, Vy._HasMajorPerformanceCaveat = null
  },
  38664: (yb, bb, Wy) => {
    var Uy;
    Wy.d(bb, {
        c: () => hy
      }),
      function(yb) {
        yb[yb.PointerMove = 0] = "PointerMove", yb[yb.PointerDown = 1] = "PointerDown", yb[yb.PointerUp = 2] = "PointerUp"
      }(Uy || (Uy = {}));
    class hy {}
    hy.DOM_DELTA_PIXEL = 0, hy.DOM_DELTA_LINE = 1, hy.DOM_DELTA_PAGE = 2
  },
  38662: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy,
      d: () => fy,
      e: () => hy
    });
    class Uy {}
    Uy.KEYDOWN = 1, Uy.KEYUP = 2;
    class hy {
      constructor(yb, bb) {
        this.type = yb, this.event = bb
      }
    }
    class fy extends hy {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(yb) {
        this.skipOnKeyboardObservable = yb
      }
      constructor(yb, bb) {
        super(yb, bb), this.type = yb, this.event = bb, this.skipOnKeyboardObservable = !1
      }
    }
  },
  38655: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy,
      h: () => Zy,
      l: () => cb
    });
    var Uy = Wy(35861);
    class hy {}
    hy.POINTERDOWN = 1, hy.POINTERUP = 2, hy.POINTERMOVE = 4, hy.POINTERWHEEL = 8, hy.POINTERPICK = 16, hy.POINTERTAP = 32, hy.POINTERDOUBLETAP = 64;
    class fy {
      constructor(yb, bb) {
        this.type = yb, this.event = bb
      }
    }
    class Zy extends fy {
      constructor(yb, bb, Wy, hy) {
        super(yb, bb), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new Uy.m(Wy, hy)
      }
    }
    class cb extends fy {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(yb, bb), this._pickInfo = Wy, this._inputManager = Uy
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  38675: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Uy
    });
    class Uy {
      static CompareLightsPriority(yb, bb) {
        return yb.shadowEnabled !== bb.shadowEnabled ? (bb.shadowEnabled ? 1 : 0) - (yb.shadowEnabled ? 1 : 0) : bb.renderPriority - yb.renderPriority
      }
    }
    Uy.FALLOFF_DEFAULT = 0, Uy.FALLOFF_PHYSICAL = 1, Uy.FALLOFF_GLTF = 2, Uy.FALLOFF_STANDARD = 3, Uy.LIGHTMAP_DEFAULT = 0, Uy.LIGHTMAP_SPECULAR = 1, Uy.LIGHTMAP_SHADOWSONLY = 2, Uy.INTENSITYMODE_AUTOMATIC = 0, Uy.INTENSITYMODE_LUMINOUSPOWER = 1, Uy.INTENSITYMODE_LUMINOUSINTENSITY = 2, Uy.INTENSITYMODE_ILLUMINANCE = 3, Uy.INTENSITYMODE_LUMINANCE = 4, Uy.LIGHTTYPEID_POINTLIGHT = 0, Uy.LIGHTTYPEID_DIRECTIONALLIGHT = 1, Uy.LIGHTTYPEID_SPOTLIGHT = 2, Uy.LIGHTTYPEID_HEMISPHERICLIGHT = 3, Uy.LIGHTTYPEID_RECT_AREALIGHT = 4, Uy.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  38287: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy
    });
    var Uy, hy = Wy(35893),
      fy = Wy(38296);
    ! function(yb) {
      yb[yb.Unknown = 0] = "Unknown", yb[yb.Url = 1] = "Url", yb[yb.Temp = 2] = "Temp", yb[yb.Raw = 3] = "Raw", yb[yb.Dynamic = 4] = "Dynamic", yb[yb.RenderTarget = 5] = "RenderTarget", yb[yb.MultiRenderTarget = 6] = "MultiRenderTarget", yb[yb.Cube = 7] = "Cube", yb[yb.CubeRaw = 8] = "CubeRaw", yb[yb.CubePrefiltered = 9] = "CubePrefiltered", yb[yb.Raw3D = 10] = "Raw3D", yb[yb.Raw2DArray = 11] = "Raw2DArray", yb[yb.DepthStencil = 12] = "DepthStencil", yb[yb.CubeRawRGBD = 13] = "CubeRawRGBD", yb[yb.Depth = 14] = "Depth", yb[yb.External = 15] = "External"
    }(Uy || (Uy = {}));
    class Zy extends fy.d {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(yb) {
        this._useMipMaps = yb
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(yb) {
        this._uniqueId = yb
      }
      xh() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new hy.c, this.onErrorObservable = new hy.c, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = yb, this._source = bb, this._uniqueId = Zy._Counter++, Wy || (this._hardwareTexture = yb._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, yb, bb, Wy), this.width = yb, this.height = bb, this.depth = Wy, this.baseWidth = yb, this.baseHeight = bb, this.baseDepth = Wy, this._size = yb * bb * Wy
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const yb = this.onRebuildCallback(this),
            bb = bb => {
              bb._swapAndDie(this, !1), this.isReady = yb.isReady
            };
          return void(yb.isAsync ? yb.proxy.then(bb) : bb(yb.proxy))
        }
        let yb;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(yb = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (yb => {
              yb._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (yb = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), yb._swapAndDie(this, !1), this._bufferViewArray)
              for (let yb = 0; yb < this._bufferViewArray.length; yb++) {
                const bb = this._bufferViewArray[yb];
                bb && this._engine.updateRawTexture(this, bb, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, yb)
              }
            this.isReady = !0;
            break;
          case 10:
            yb = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), yb._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (yb = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), yb._swapAndDie(this, !1), this._bufferViewArray)
              for (let yb = 0; yb < this._bufferViewArray.length; yb++) {
                const bb = this._bufferViewArray[yb];
                bb && this._engine.updateRawTexture2DArray(this, bb, this.format, this.invertY, this._compression, this.type, yb)
              }
            this.isReady = !0;
            break;
          case 4:
            yb = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), yb._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(yb = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              yb._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            yb = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), yb._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return yb = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (yb => {
              yb && yb._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(yb._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(yb._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), yb._hardwareTexture = this._hardwareTexture, yb._setUniqueId(Zy._Counter++), bb && (yb._isRGBD = this._isRGBD), this._lodTextureHigh && (yb._lodTextureHigh && yb._lodTextureHigh.dispose(), yb._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (yb._lodTextureMid && yb._lodTextureMid.dispose(), yb._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (yb._lodTextureLow && yb._lodTextureLow.dispose(), yb._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (yb._irradianceTexture && yb._irradianceTexture.dispose(), yb._irradianceTexture = this._irradianceTexture);
        const Wy = this._engine.getLoadedTexturesCache();
        let Uy = Wy.indexOf(this); - 1 !== Uy && Wy.splice(Uy, 1), Uy = Wy.indexOf(yb), -1 === Uy && Wy.push(yb)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    Zy._Counter = 0
  },
  38414: (yb, bb, Wy) => {
    function Uy(yb) {
      return 13 === yb || 14 === yb || 15 === yb || 16 === yb || 17 === yb || 18 === yb || 19 === yb
    }

    function hy(yb) {
      return 8 === yb || 9 === yb || 10 === yb || 11 === yb
    }

    function fy(yb) {
      return 0 === yb || 5 === yb || 7 === yb || 11 === yb
    }

    function Zy(yb) {
      return 13 === yb || 17 === yb || 18 === yb || 19 === yb
    }
    Wy.d(bb, {
      c: () => Zy,
      g: () => Uy,
      h: () => hy,
      i: () => fy
    })
  },
  38296: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Uy
    });
    class Uy {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(yb) {
        this._cachedWrapU = yb
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(yb) {
        this._cachedWrapV = yb
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(yb) {
        this._cachedWrapR = yb
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(yb) {
        this._cachedAnisotropicFilteringLevel = yb
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(yb) {
        this._comparisonFunction = yb
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(yb) {
        this._useMipMaps = yb
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = yb, this._cachedWrapV = bb, this._cachedWrapR = Wy, this._cachedAnisotropicFilteringLevel = Uy, this.samplingMode = hy, this._comparisonFunction = fy, this
      }
      compareSampler(yb) {
        return this._cachedWrapU === yb._cachedWrapU && this._cachedWrapV === yb._cachedWrapV && this._cachedWrapR === yb._cachedWrapR && this._cachedAnisotropicFilteringLevel === yb._cachedAnisotropicFilteringLevel && this.samplingMode === yb.samplingMode && this._comparisonFunction === yb._comparisonFunction && this._useMipMaps === yb._useMipMaps
      }
    }
  },
  38597: (yb, bb, Wy) => {
    function Uy(yb) {
      yb.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    Wy.d(bb, {
      e: () => Uy
    })
  },
  38383: (yb, bb, Wy) => {
    function Uy(yb) {
      return void 0 === yb.getPipelineContext
    }
    Wy.d(bb, {
      d: () => Uy
    })
  },
  38822: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy
    });
    var Uy = Wy(38354);
    class hy {
      static GetEffect(yb) {
        return void 0 === yb.getPipelineContext ? yb.effect : yb
      }
      constructor(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = yb.createDrawContext(), bb && (this.materialContext = yb.createMaterialContext())
      }
      setEffect(yb, bb) {
        let Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        Wy || this.effect === yb || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = yb, void 0 !== bb && (this.defines = bb), Wy && this.drawContext?.reset()
      }
      dispose() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const bb = this.effect;
          yb ? bb.dispose() : Uy.b.SetImmediate((() => {
            bb.xh().onEndFrameObservable.addOnce((() => {
              bb.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  38321: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Ky,
      g: () => qb,
      i: () => oy,
      k: () => By
    });
    var Uy = Wy(38325),
      hy = Wy(38330),
      fy = Wy(38319),
      Zy = Wy(37350),
      cb = Wy(38350),
      Py = Wy(38338);

    function oy(yb, bb) {
      return (0, hy.B)(bb).cachedPipelines[yb]
    }

    function By(yb) {
      const bb = yb._name,
        Wy = yb.context;
      if (bb && Wy) {
        const yb = (0, hy.B)(Wy),
          Uy = yb.cachedPipelines[bb];
        Uy?.dispose(), delete yb.cachedPipelines[bb]
      }
    }

    function Ky(yb, bb, Wy, hy, fy, Zy, Py) {
      let oy, By;
      const Ky = (0, Uy.i)() ? Zy?.getHostDocument() : null;
      oy = "string" === typeof bb ? bb : "string" === typeof bb.vertexSource ? "source:" + bb.vertexSource : "string" === typeof bb.vertexElement ? Ky?.getElementById(bb.vertexElement) || bb.vertexElement : bb.vertex || bb, By = "string" === typeof bb ? bb : "string" === typeof bb.fragmentSource ? "source:" + bb.fragmentSource : "string" === typeof bb.fragmentElement ? Ky?.getElementById(bb.fragmentElement) || bb.fragmentElement : bb.fragment || bb;
      const qb = [void 0, void 0],
        sy = () => {
          if (qb[0] && qb[1]) {
            const [Uy, oy] = qb;
            (0, cb.c)(yb), (0, cb.g)(Uy, yb, ((Uy, By) => {
              Py && (Py._vertexSourceCodeBeforeMigration = By), Wy && (Uy = Wy("vertex", Uy)), yb.isFragment = !0, (0, cb.g)(oy, yb, ((Zy, oy) => {
                Py && (Py._fragmentSourceCodeBeforeMigration = oy), Wy && (Zy = Wy("fragment", Zy));
                const By = (0, cb.b)(Uy, Zy, yb);
                yb = null;
                const Ky = function(yb, bb, Wy, Uy) {
                  if (Wy) {
                    return {
                      vertexSourceCode: (1 === Uy ? "//" : "") + "#define SHADER_NAME vertex:" + (Wy.vertexElement || Wy.vertex || Wy.spectorName || Wy) + "\n" + yb,
                      fragmentSourceCode: (1 === Uy ? "//" : "") + "#define SHADER_NAME fragment:" + (Wy.fragmentElement || Wy.fragment || Wy.spectorName || Wy) + "\n" + bb
                    }
                  }
                  return {
                    vertexSourceCode: yb,
                    fragmentSourceCode: bb
                  }
                }(By.vertexCode, By.fragmentCode, bb, fy);
                hy?.(Ky.vertexSourceCode, Ky.fragmentSourceCode)
              }), Zy)
            }), Zy)
          }
        };
      ey(oy, "Vertex", "", (yb => {
        Py && (Py._rawVertexSourceCode = yb), qb[0] = yb, sy()
      }), fy), ey(By, "Fragment", "Pixel", (yb => {
        Py && (Py._rawFragmentSourceCode = yb), qb[1] = yb, sy()
      }), fy)
    }

    function ey(yb, bb, Wy, hy, Zy, cb) {
      if ("undefined" !== typeof HTMLElement && yb instanceof HTMLElement) {
        return void hy((0, Uy.d)(yb))
      }
      if ("source:" === yb.substring(0, 7)) return void hy(yb.substring(7));
      if ("base64:" === yb.substring(0, 7)) {
        return void hy(window.atob(yb.substring(7)))
      }
      const oy = fy.e.GetShadersStore(Zy);
      if (oy[yb + bb + "Shader"]) return void hy(oy[yb + bb + "Shader"]);
      if (Wy && oy[yb + Wy + "Shader"]) return void hy(oy[yb + Wy + "Shader"]);
      let By;
      if (By = "." === yb[0] || "/" === yb[0] || yb.indexOf("http") > -1 ? yb : fy.e.GetShadersRepository(Zy) + yb, !(cb = cb || Py.j)) throw new Error("loadFileInjection is not defined");
      cb(By + "." + bb.toLowerCase() + ".fx", hy)
    }
    const qb = (yb, bb, Wy, Uy) => {
      try {
        const fy = yb.context ? (0, hy.B)(yb.context) : null;
        fy && (fy.disableParallelShaderCompile = yb.disableParallelCompilation);
        const Zy = yb.existingPipelineContext || bb(yb.shaderProcessingContext);
        return Zy._name = yb.name, yb.name && fy && (fy.cachedPipelines[yb.name] = Zy), Wy(Zy, yb.vertex, yb.fragment, !!yb.createAsRaw, "", "", yb.rebuildRebind, yb.defines, yb.transformFeedbackVaryings, "", (() => {
          Uy(Zy, (() => {
            yb.onRenderingStateCompiled?.(Zy)
          }))
        })), Zy
      } catch (fy) {
        throw Zy.b.Error("Error compiling effect"), fy
      }
    }
  },
  38312: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Py
    });
    var Uy = Wy(35893),
      hy = Wy(37350),
      fy = Wy(38319),
      Zy = Wy(38321),
      cb = Wy(38354);
    class Py {
      static get ShadersRepository() {
        return fy.e.ShadersRepository
      }
      static set ShadersRepository(yb) {
        fy.e.ShadersRepository = yb
      }
      get Koy() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new Uy.c), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(yb, bb, Wy) {
        let hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          fy = arguments.length > 4 ? arguments[4] : void 0,
          cb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          oy = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          By = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Ky = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          ey = arguments.length > 9 ? arguments[9] : void 0,
          qb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          sy = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          Sy = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new Uy.c, this.onErrorObservable = new Uy.c, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = yb, this._key = qb;
        const Ey = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let ly;
        if (bb.attributes) {
          const yb = bb;
          if (this._engine = Wy, this._attributesNames = yb.attributes, this._uniformsNames = yb.uniformsNames.concat(yb.samplers), this._samplerList = yb.samplers.slice(), this.defines = yb.defines, this.onError = yb.onError, this.onCompiled = yb.onCompiled, this._fallbacks = yb.fallbacks, this._indexParameters = yb.indexParameters, this._transformFeedbackVaryings = yb.transformFeedbackVaryings || null, this._multiTarget = !!yb.multiTarget, this._shaderLanguage = yb.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!yb.disableParallelShaderCompilation, yb.uniformBuffersNames) {
            this._uniformBuffersNamesList = yb.uniformBuffersNames.slice();
            for (let bb = 0; bb < yb.uniformBuffersNames.length; bb++) this._uniformBuffersNames[yb.uniformBuffersNames[bb]] = bb
          }
          this._processFinalCode = yb.processFinalCode ?? null, this._processCodeAfterIncludes = yb.processCodeAfterIncludes ?? void 0, Sy = yb.extraInitializationsAsync, ly = yb.existingPipelineContext
        } else this._engine = fy, this.defines = null == cb ? "" : cb, this._uniformsNames = Wy.concat(hy), this._samplerList = hy ? hy.slice() : [], this._attributesNames = bb, this._uniformBuffersNamesList = [], this._shaderLanguage = sy, this.onError = Ky, this.onCompiled = By, this._indexParameters = ey, this._fallbacks = oy;
        "WEBGL2" === this._engine.shaderPlatformName && (ly = (0, Zy.i)(Ey, this._engine._gl) ?? ly), this._attributeLocationByName = {}, this.uniqueId = Py._UniqueIdSeed++, ly ? (this._pipelineContext = ly, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, Sy).catch((yb => {
          const bb = yb?.message ?? String(yb),
            Wy = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${bb}`);
          yb && "string" === typeof yb.stack && (Wy.stack = `${Wy.message}\nCaused by: ${yb.stack}`), this._processCompilationErrors(Wy)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.Koy || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Uy = arguments.length > 3 ? arguments[3] : void 0;
        Uy && await Uy(), this._processingContext = Wy || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const hy = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: yb ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: fy.e.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: fy.e.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          Aoy: this._engine.Aoy,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, Zy.e)(hy, this.name, this._processFinalCode, ((yb, Wy) => {
          this._vertexSourceCode = yb, this._fragmentSourceCode = Wy, this._prepareEffect(bb)
        }), this._shaderLanguage, this._engine, this)
      }
      get key() {
        return this._key
      }
      isReady() {
        try {
          return this._isReadyInternal()
        } catch {
          return !1
        }
      }
      _isReadyInternal() {
        return !!this._engine.Koy || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      xh() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(yb) {
        return this._attributes[yb]
      }
      getAttributeLocationByName(yb) {
        return this._attributeLocationByName[yb]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(yb) {
        return this._uniformsNames.indexOf(yb)
      }
      getUniform(yb) {
        return this._uniforms[yb]
      }
      getSamplers() {
        return this._samplerList
      }
      getUniformNames() {
        return this._uniformsNames
      }
      getUniformBuffersNames() {
        return this._uniformBuffersNamesList
      }
      getIndexParameters() {
        return this._indexParameters
      }
      getCompilationError() {
        return this._compilationError
      }
      allFallbacksProcessed() {
        return this._allFallbacksProcessed
      }
      async whenCompiledAsync() {
        return await new Promise((yb => {
          this.executeWhenCompiled(yb)
        }))
      }
      executeWhenCompiled(yb) {
        this.isReady() ? yb(this) : (this.onCompileObservable.add((bb => {
          yb(bb)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(yb) {
        (0, cb.c)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (bb => {
          this._processCompilationErrors(bb, yb)
        }), 16, 12e4, !0, ` - Effect: ${"string"===typeof this.name?this.name:this.key}`)
      }
      get vertexSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._vertexSourceCodeOverride : this._pipelineContext?._getVertexShaderCode() ?? this._vertexSourceCode
      }
      get fragmentSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._fragmentSourceCodeOverride : this._pipelineContext?._getFragmentShaderCode() ?? this._fragmentSourceCode
      }
      get vertexSourceCodeBeforeMigration() {
        return this._vertexSourceCodeBeforeMigration
      }
      get fragmentSourceCodeBeforeMigration() {
        return this._fragmentSourceCodeBeforeMigration
      }
      get rawVertexSourceCode() {
        return this._rawVertexSourceCode
      }
      get rawFragmentSourceCode() {
        return this._rawFragmentSourceCode
      }
      getPipelineGenerationOptions() {
        return {
          platformName: this._engine.shaderPlatformName,
          shaderLanguage: this._shaderLanguage,
          shaderNameOrContent: this.name,
          key: this._key,
          defines: this.defines.split("\n"),
          addGlobalDefines: !1,
          extendedProcessingOptions: {
            indexParameters: this._indexParameters,
            isNDCHalfZRange: this._engine.isNDCHalfZRange,
            Aoy: this._engine.Aoy,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(yb, bb, Wy, Uy) {
        this._isReady = !1, this._vertexSourceCodeOverride = yb, this._fragmentSourceCodeOverride = bb, this.onError = (yb, bb) => {
          Uy && Uy(bb)
        }, this.onCompiled = () => {
          const yb = this.xh().scenes;
          if (yb)
            for (let bb = 0; bb < yb.length; bb++) yb[bb].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(Wy)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(yb) {
        if (this._pipelineContext = yb, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let bb = 0; bb < this._attributesNames.length; bb++) {
            const yb = this._attributesNames[bb];
            this._attributeLocationByName[yb] = this._attributes[bb]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), Py.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bb = this._pipelineContext;
        this._isReady = !1;
        try {
          const Wy = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            Uy = Wy ? null : this.defines,
            hy = Wy ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            fy = Wy ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            cb = this._engine;
          this._pipelineContext = (0, Zy.g)({
            existingPipelineContext: yb ? bb : null,
            vertex: hy,
            fragment: fy,
            context: "WEBGL2" === cb.shaderPlatformName || "WEBGL1" === cb.shaderPlatformName ? cb._gl : void 0,
            rebuildRebind: (yb, bb, Wy, Uy) => this._rebuildProgram(yb, bb, Wy, Uy),
            defines: Uy,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: Wy,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: Wy => {
              bb && !yb && this._engine._deletePipelineContext(bb), Wy && this._onRenderingStateCompiled(Wy)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(bb)
        } catch (Wy) {
          this._processCompilationErrors(Wy, bb)
        }
      }
      _getShaderCodeAndErrorLine(yb, bb, Wy) {
        const Uy = Wy ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let hy = null;
        if (bb && yb) {
          const fy = bb.match(Uy);
          if (fy && 2 === fy.length) {
            const bb = parseInt(fy[1]),
              Uy = yb.split("\n", -1);
            Uy.length >= bb && (hy = `Offending line [${bb}] in ${Wy?"fragment":"vertex"} code: ${Uy[bb-1]}`)
          }
        }
        return [yb, hy]
      }
      _processCompilationErrors(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof yb?.stack ? yb.stack : yb?.message ?? String(yb);
        const Wy = this._attributesNames,
          Uy = this._fallbacks;
        if (hy.b.Error("Unable to compile effect:"), hy.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), hy.b.Error(`Attributes: ${Wy.join(" ")}`), hy.b.Error("Defines:\n" + this.defines), Py.LogShaderCodeOnCompilationError) {
          let yb, bb = null,
            Wy = null;
          this._pipelineContext?._getVertexShaderCode() && ([yb, bb] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), yb && (hy.b.Error("Vertex code:"), hy.b.Error(yb))), this._pipelineContext?._getFragmentShaderCode() && ([yb, Wy] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), yb && (hy.b.Error("Fragment code:"), hy.b.Error(yb))), bb && hy.b.Error(bb), Wy && hy.b.Error(Wy)
        }
        hy.b.Error("Error: " + this._compilationError);
        const fy = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        bb && (this._pipelineContext = bb, this._isReady = !0, fy()), Uy ? (this._pipelineContext = null, Uy.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, hy.b.Error("Trying next fallback."), this.defines = Uy.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, fy(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, bb || fy())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(yb, bb) {
        this._engine._bindTexture(this._samplers[yb], bb, yb)
      }
      setTexture(yb, bb) {
        this._engine.setTexture(this._samplers[yb], this._uniforms[yb], bb, yb)
      }
      setTextureArray(yb, bb) {
        const Wy = yb + "Ex";
        if (-1 === this._samplerList.indexOf(Wy + "0")) {
          const Uy = this._samplerList.indexOf(yb);
          for (let yb = 1; yb < bb.length; yb++) {
            const bb = Wy + (yb - 1).toString();
            this._samplerList.splice(Uy + yb, 0, bb)
          }
          let hy = 0;
          for (const yb of this._samplerList) this._samplers[yb] = hy, hy += 1
        }
        this._engine.setTextureArray(this._samplers[yb], this._uniforms[yb], bb, yb)
      }
      bindUniformBuffer(yb, bb) {
        const Wy = this._uniformBuffersNames[bb];
        void 0 === Wy || Py._BaseCache[Wy] === yb && this._engine._features.useUBOBindingCache || (Py._BaseCache[Wy] = yb, this._engine.bindUniformBufferBase(yb, Wy, bb))
      }
      bindUniformBlock(yb, bb) {
        this._engine.bindUniformBlock(this._pipelineContext, yb, bb)
      }
      setInt(yb, bb) {
        return this._pipelineContext.setInt(yb, bb), this
      }
      setInt2(yb, bb, Wy) {
        return this._pipelineContext.setInt2(yb, bb, Wy), this
      }
      setInt3(yb, bb, Wy, Uy) {
        return this._pipelineContext.setInt3(yb, bb, Wy, Uy), this
      }
      setInt4(yb, bb, Wy, Uy, hy) {
        return this._pipelineContext.setInt4(yb, bb, Wy, Uy, hy), this
      }
      setIntArray(yb, bb) {
        return this._pipelineContext.setIntArray(yb, bb), this
      }
      setIntArray2(yb, bb) {
        return this._pipelineContext.setIntArray2(yb, bb), this
      }
      setIntArray3(yb, bb) {
        return this._pipelineContext.setIntArray3(yb, bb), this
      }
      setIntArray4(yb, bb) {
        return this._pipelineContext.setIntArray4(yb, bb), this
      }
      setUInt(yb, bb) {
        return this._pipelineContext.setUInt(yb, bb), this
      }
      setUInt2(yb, bb, Wy) {
        return this._pipelineContext.setUInt2(yb, bb, Wy), this
      }
      setUInt3(yb, bb, Wy, Uy) {
        return this._pipelineContext.setUInt3(yb, bb, Wy, Uy), this
      }
      setUInt4(yb, bb, Wy, Uy, hy) {
        return this._pipelineContext.setUInt4(yb, bb, Wy, Uy, hy), this
      }
      setUIntArray(yb, bb) {
        return this._pipelineContext.setUIntArray(yb, bb), this
      }
      setUIntArray2(yb, bb) {
        return this._pipelineContext.setUIntArray2(yb, bb), this
      }
      setUIntArray3(yb, bb) {
        return this._pipelineContext.setUIntArray3(yb, bb), this
      }
      setUIntArray4(yb, bb) {
        return this._pipelineContext.setUIntArray4(yb, bb), this
      }
      setFloatArray(yb, bb) {
        return this._pipelineContext.setArray(yb, bb), this
      }
      setFloatArray2(yb, bb) {
        return this._pipelineContext.setArray2(yb, bb), this
      }
      setFloatArray3(yb, bb) {
        return this._pipelineContext.setArray3(yb, bb), this
      }
      setFloatArray4(yb, bb) {
        return this._pipelineContext.setArray4(yb, bb), this
      }
      setArray(yb, bb) {
        return this._pipelineContext.setArray(yb, bb), this
      }
      setArray2(yb, bb) {
        return this._pipelineContext.setArray2(yb, bb), this
      }
      setArray3(yb, bb) {
        return this._pipelineContext.setArray3(yb, bb), this
      }
      setArray4(yb, bb) {
        return this._pipelineContext.setArray4(yb, bb), this
      }
      setMatrices(yb, bb) {
        return this._pipelineContext.setMatrices(yb, bb), this
      }
      setMatrix(yb, bb) {
        return this._pipelineContext.setMatrix(yb, bb), this
      }
      setMatrix3x3(yb, bb) {
        return this._pipelineContext.setMatrix3x3(yb, bb), this
      }
      setMatrix2x2(yb, bb) {
        return this._pipelineContext.setMatrix2x2(yb, bb), this
      }
      setFloat(yb, bb) {
        return this._pipelineContext.setFloat(yb, bb), this
      }
      setBool(yb, bb) {
        return this._pipelineContext.setInt(yb, bb ? 1 : 0), this
      }
      setVector2(yb, bb) {
        return this._pipelineContext.setVector2(yb, bb), this
      }
      setFloat2(yb, bb, Wy) {
        return this._pipelineContext.setFloat2(yb, bb, Wy), this
      }
      setVector3(yb, bb) {
        return this._pipelineContext.setVector3(yb, bb), this
      }
      setFloat3(yb, bb, Wy, Uy) {
        return this._pipelineContext.setFloat3(yb, bb, Wy, Uy), this
      }
      setVector4(yb, bb) {
        return this._pipelineContext.setVector4(yb, bb), this
      }
      setQuaternion(yb, bb) {
        return this._pipelineContext.setQuaternion(yb, bb), this
      }
      setFloat4(yb, bb, Wy, Uy, hy) {
        return this._pipelineContext.setFloat4(yb, bb, Wy, Uy, hy), this
      }
      setColor3(yb, bb) {
        return this._pipelineContext.setColor3(yb, bb), this
      }
      setColor4(yb, bb, Wy) {
        return this._pipelineContext.setColor4(yb, bb, Wy), this
      }
      setDirectColor4(yb, bb) {
        return this._pipelineContext.setDirectColor4(yb, bb), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (Py.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, Zy.k)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        bb && (fy.e.GetShadersStore(Uy)[`${yb}PixelShader`] = bb), Wy && (fy.e.GetShadersStore(Uy)[`${yb}VertexShader`] = Wy)
      }
      static ResetCache() {
        Py._BaseCache = {}
      }
    }
    Py.LogShaderCodeOnCompilationError = !0, Py.PersistentMode = !1, Py.AutomaticallyClearCodeCache = !1, Py._UniqueIdSeed = 0, Py._BaseCache = {}, Py.ShadersStore = fy.e.ShadersStore, Py.IncludesShadersStore = fy.e.IncludesShadersStore
  },
  38633: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => By,
      e: () => gb,
      i: () => Jy
    });
    var Uy = Wy(38312),
      hy = Wy(35861),
      fy = Wy(35905),
      Zy = Wy(38607);
    const cb = new hy.c,
      Py = new hy.c,
      oy = new hy.c,
      By = {
        kWy: () => {},
        eyeAtCamera: !0
      };

    function Ky(yb, bb, Wy) {
      const Uy = Wy.hBy(),
        hy = bb.hBy();
      for (let fy = 0; fy < 16; fy++) Uy[fy] = hy[fy];
      return Uy[12] -= yb.x, Uy[13] -= yb.y, Uy[14] -= yb.z, Wy.markAsUpdated(), Wy
    }

    function ey(yb, bb, Wy) {
      return (0, fy.i)(bb, Py), Ky(yb, Py, oy), (0, fy.i)(oy, Wy), Wy
    }

    function qb(yb, bb, Wy) {
      if (!By.eyeAtCamera) return ey(yb, bb, Wy);
      const Uy = Wy.hBy(),
        hy = bb.hBy();
      for (let fy = 0; fy < 16; fy++) Uy[fy] = hy[fy];
      return Uy[12] = 0, Uy[13] = 0, Uy[14] = 0, Wy.markAsUpdated(), Wy
    }

    function sy(yb, bb, Wy, Uy) {
      return (0, fy.o)(qb(yb, bb, Uy), Wy, Uy), Uy
    }

    function Sy(yb, bb, Wy, Uy) {
      return (0, fy.i)(Wy, Py), (0, fy.o)(bb, Py, oy), Ky(yb, oy, Py), qb(yb, Wy, oy), (0, fy.o)(Py, oy, Uy), Uy
    }

    function Ey(yb, bb, Wy, Uy, hy, Zy) {
      return (0, fy.i)(Wy, Py), (0, fy.o)(bb, Py, oy), Ky(yb, oy, Py), sy(yb, Uy, hy, oy), (0, fy.o)(Py, oy, Zy), Zy
    }

    function ly(yb, bb) {
      const Wy = By.kWy();
      if (!Wy || cb === bb) return bb;
      cb.updateFlag = bb.updateFlag;
      const Uy = Wy.floatingOriginOffset;
      switch (yb) {
        case "world":
          return Ky(Uy, bb, cb);
        case "view":
          return qb(Uy, bb, cb);
        case "worldView":
          return Sy(Uy, bb, Wy.getViewMatrix(), cb);
        case "viewProjection":
          return sy(Uy, Wy.getViewMatrix(), Wy.getProjectionMatrix(), cb);
        case "worldViewProjection":
          return Ey(Uy, bb, Wy.getTransformMatrix(), Wy.getViewMatrix(), Wy.getProjectionMatrix(), cb);
        default:
          if (yb.startsWith("u_")) {
            const hy = yb.toLowerCase();
            if (hy.startsWith("u_worldviewprojection")) return Ey(Uy, bb, Wy.getTransformMatrix(), Wy.getViewMatrix(), Wy.getProjectionMatrix(), cb);
            if (hy.startsWith("u_viewprojection")) return sy(Uy, Wy.getViewMatrix(), Wy.getProjectionMatrix(), cb);
            if (hy.startsWith("u_worldview")) return Sy(Uy, bb, Wy.getViewMatrix(), cb);
            if (hy.startsWith("u_world")) return Ky(Uy, bb, cb);
            if (hy.startsWith("u_view")) return qb(Uy, bb, cb)
          }
          return bb
      }
    }
    const mb = Zy.b,
      Cy = Uy.c,
      Ty = mb.prototype._updateMatrixForUniform,
      Vy = Uy.c.prototype.setMatrix;

    function Jy() {
      Uy.c.prototype.setMatrix = Vy, Cy._setMatrixOverride = void 0, mb.prototype._updateMatrixForUniform = Ty, mb.prototype._updateMatrixForUniformOverride = void 0
    }

    function gb() {
      Cy.prototype._setMatrixOverride = Vy, Cy.prototype.setMatrix = function(yb, bb) {
        return this._setMatrixOverride(yb, ly(yb, bb)), this
      }, mb.prototype._updateMatrixForUniformOverride = Ty, mb.prototype._updateMatrixForUniform = function(yb, bb) {
        this._updateMatrixForUniformOverride(yb, ly(yb, bb))
      }
    }
  },
  38599: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy,
      h: () => hy
    });
    var Uy = Wy(38597);

    function hy(yb, bb) {
      bb.WHITEBALANCE && yb.push("whiteBalanceMatrix"), bb.EXPOSURE && yb.push("exposureLinear"), bb.CONTRAST && yb.push("contrast"), bb.COLORGRADING && yb.push("colorTransformSettings"), (bb.VIGNETTE || bb.DITHER) && yb.push("vInverseScreenSize"), bb.VIGNETTE && (yb.push("vignetteSettings1"), yb.push("vignetteSettings2")), bb.COLORCURVES && (0, Uy.e)(yb), bb.DITHER && yb.push("ditherIntensity")
    }

    function fy(yb, bb) {
      bb.COLORGRADING && yb.push("txColorTransform")
    }
  },
  38594: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => ib,
      f: () => Xy
    });
    var Uy = Wy(38464),
      hy = Wy(38466),
      fy = Wy(35893),
      Zy = Wy(35919),
      cb = Wy(35902),
      Py = Wy(35861);
    const oy = [
        [0, .18006, .26352, -.24341],
        [10, .18066, .26589, -.25479],
        [20, .18133, .26846, -.26876],
        [30, .18208, .27119, -.28539],
        [40, .18293, .27407, -.3047],
        [50, .18388, .27709, -.32675],
        [60, .18494, .28021, -.35156],
        [70, .18611, .28342, -.37915],
        [80, .1874, .28668, -.40955],
        [90, .1888, .28997, -.44278],
        [100, .19032, .29326, -.47888],
        [125, .19462, .30141, -.58204],
        [150, .19962, .30921, -.70471],
        [175, .20525, .31647, -.84901],
        [200, .21142, .32312, -1.0182],
        [225, .21807, .32909, -1.2168],
        [250, .22511, .33439, -1.4512],
        [275, .23247, .33904, -1.7298],
        [300, .2401, .34308, -2.0637],
        [325, .24792, .34655, -2.4681],
        [350, .25591, .34951, -2.9641],
        [375, .264, .352, -3.5814],
        [400, .27218, .35407, -4.3633],
        [425, .28039, .35577, -5.3762],
        [450, .28863, .35714, -6.7262],
        [475, .29685, .35823, -8.5955],
        [500, .30505, .35907, -11.324],
        [525, .3132, .35968, -15.628],
        [550, .32129, .36011, -23.325],
        [575, .32931, .36038, -40.77],
        [600, .33724, .36051, -116.45]
      ],
      By = 1e6 / oy[oy.length - 1][0],
      Ky = 150;

    function ey(yb, bb) {
      const Wy = Number.isNaN(yb) ? By : Math.max(yb, By),
        Uy = (0, cb.Clamp)(1e6 / Wy, oy[0][0], oy[oy.length - 1][0]);
      let hy = 0,
        fy = oy.length - 1;
      for (; fy - hy > 1;) {
        const yb = hy + fy >> 1;
        oy[yb][0] <= Uy ? hy = yb : fy = yb
      }
      const Zy = hy,
        [ey, qb, sy, Sy] = oy[Zy],
        [Ey, ly, mb, Cy] = oy[Zy + 1],
        Ty = (Uy - ey) / (Ey - ey),
        Vy = Py.m.Lerp(new Py.m(qb, sy), new Py.m(ly, mb), Ty),
        Jy = Py.m.Normalize(new Py.m(1, Sy)),
        gb = Py.m.Normalize(new Py.m(1, Cy)),
        Gy = Py.m.Normalize(Py.m.Lerp(Jy, gb, Ty)),
        Oy = (0, cb.Clamp)(bb, -150, Ky);
      Vy.TBy(Gy.scale(Oy / 3e3));
      const Ry = 2 * Vy.x - 8 * Vy.y + 4,
        vb = 3 * Vy.x / Ry,
        ib = 2 * Vy.y / Ry;
      return new Py.n(vb / ib, 1, (1 - vb - ib) / ib)
    }
    const qb = Py.c.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      sy = Py.c.Invert(qb);

    function Sy(yb, bb) {
      const Wy = bb > 0 ? yb / bb : 10;
      return (0, cb.Clamp)(Wy, .1, 10)
    }

    function Ey(yb, bb) {
      const Wy = Py.n.TransformNormal(yb, qb),
        Uy = Py.n.TransformNormal(bb, qb),
        hy = Py.c.FromArray([Sy(Uy.x, Wy.x), 0, 0, 0, 0, Sy(Uy.y, Wy.y), 0, 0, 0, 0, Sy(Uy.z, Wy.z), 0, 0, 0, 0, 1]);
      return qb.multiply(hy).multiply(sy)
    }
    const ly = new Py.n(.95047, 1, 1.08883),
      mb = Py.c.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(Ey(ly, ey(6500, 0))),
      Cy = Py.c.Invert(mb),
      Ty = Py.n.TransformNormal(new Py.n(1, 1, 1), mb);
    var Vy = Wy(38485),
      Jy = Wy(38597);
    let gb = (() => {
      var yb;
      let bb, Wy, fy, cb, Py, oy, By, Ky, ey, qb, sy, Sy, Ey = [],
        ly = [],
        mb = [],
        Cy = [],
        Ty = [],
        gb = [],
        Gy = [],
        Oy = [],
        Ry = [],
        vb = [],
        ib = [],
        My = [],
        Yy = [],
        Xy = [],
        ny = [],
        uy = [],
        rb = [],
        Hy = [],
        ab = [],
        Fy = [],
        py = [],
        Ly = [],
        Qy = [],
        jb = [];
      return yb = class {
        constructor() {
          this._dirty = !0, this._tempColor = new Zy.e(0, 0, 0, 0), this._globalCurve = new Zy.e(0, 0, 0, 0), this._highlightsCurve = new Zy.e(0, 0, 0, 0), this._midtonesCurve = new Zy.e(0, 0, 0, 0), this._shadowsCurve = new Zy.e(0, 0, 0, 0), this._positiveCurve = new Zy.e(0, 0, 0, 0), this._negativeCurve = new Zy.e(0, 0, 0, 0), this._globalHue = (0, Uy.l)(this, Ey, 30), this._globalDensity = ((0, Uy.l)(this, ly), (0, Uy.l)(this, mb, 0)), this._globalSaturation = ((0, Uy.l)(this, Cy), (0, Uy.l)(this, Ty, 0)), this._globalExposure = ((0, Uy.l)(this, gb), (0, Uy.l)(this, Gy, 0)), this._highlightsHue = ((0, Uy.l)(this, Oy), (0, Uy.l)(this, Ry, 30)), this._highlightsDensity = ((0, Uy.l)(this, vb), (0, Uy.l)(this, ib, 0)), this._highlightsSaturation = ((0, Uy.l)(this, My), (0, Uy.l)(this, Yy, 0)), this._highlightsExposure = ((0, Uy.l)(this, Xy), (0, Uy.l)(this, ny, 0)), this._midtonesHue = ((0, Uy.l)(this, uy), (0, Uy.l)(this, rb, 30)), this._midtonesDensity = ((0, Uy.l)(this, Hy), (0, Uy.l)(this, ab, 0)), this._midtonesSaturation = ((0, Uy.l)(this, Fy), (0, Uy.l)(this, py, 0)), this._midtonesExposure = ((0, Uy.l)(this, Ly), (0, Uy.l)(this, Qy, 0)), this._shadowsHue = ((0, Uy.l)(this, jb), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(yb) {
          this._globalHue = yb, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(yb) {
          this._globalDensity = yb, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(yb) {
          this._globalSaturation = yb, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(yb) {
          this._globalExposure = yb, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(yb) {
          this._highlightsHue = yb, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(yb) {
          this._highlightsDensity = yb, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(yb) {
          this._highlightsSaturation = yb, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(yb) {
          this._highlightsExposure = yb, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(yb) {
          this._midtonesHue = yb, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(yb) {
          this._midtonesDensity = yb, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(yb) {
          this._midtonesSaturation = yb, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(yb) {
          this._midtonesExposure = yb, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(yb) {
          this._shadowsHue = yb, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(yb) {
          this._shadowsDensity = yb, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(yb) {
          this._shadowsSaturation = yb, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(yb) {
          this._shadowsExposure = yb, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(bb, Wy, Uy, hy, fy) {
          null != bb && (bb = yb._Clamp(bb, 0, 360), Wy = yb._Clamp(Wy, -100, 100), Uy = yb._Clamp(Uy, -100, 100), hy = yb._Clamp(hy, -100, 100), Wy = yb._ApplyColorGradingSliderNonlinear(Wy), Wy *= .5, hy = yb._ApplyColorGradingSliderNonlinear(hy), Wy < 0 && (Wy *= -1, bb = (bb + 180) % 360), yb._FromHSBToRef(bb, Wy, 50 + .25 * hy, fy), fy.scaleToRef(2, fy), fy.a = 1 + .01 * Uy)
        }
        static _ApplyColorGradingSliderNonlinear(yb) {
          yb /= 100;
          let bb = Math.abs(yb);
          return bb = Math.pow(bb, 2), yb < 0 && (bb *= -1), bb *= 100, bb
        }
        static _FromHSBToRef(bb, Wy, Uy, hy) {
          let fy = yb._Clamp(bb, 0, 360);
          const Zy = yb._Clamp(Wy / 100, 0, 1),
            cb = yb._Clamp(Uy / 100, 0, 1);
          if (0 === Zy) hy.r = cb, hy.g = cb, hy.b = cb;
          else {
            fy /= 60;
            const yb = Math.floor(fy),
              bb = fy - yb,
              Wy = cb * (1 - Zy),
              Uy = cb * (1 - Zy * bb),
              Py = cb * (1 - Zy * (1 - bb));
            switch (yb) {
              case 0:
                hy.r = cb, hy.g = Py, hy.b = Wy;
                break;
              case 1:
                hy.r = Uy, hy.g = cb, hy.b = Wy;
                break;
              case 2:
                hy.r = Wy, hy.g = cb, hy.b = Py;
                break;
              case 3:
                hy.r = Wy, hy.g = Uy, hy.b = cb;
                break;
              case 4:
                hy.r = Py, hy.g = Wy, hy.b = cb;
                break;
              default:
                hy.r = cb, hy.g = Wy, hy.b = Uy
            }
          }
          hy.a = 1
        }
        static _Clamp(yb, bb, Wy) {
          return Math.min(Math.max(yb, bb), Wy)
        }
        clone() {
          return Vy.c.Clone((() => new yb), this)
        }
        serialize() {
          return Vy.c.Serialize(this)
        }
        _bind(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), yb && (yb.setFloat4(bb, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), yb.setFloat4(Wy, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), yb.setFloat4(Uy, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const Zy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bb = [(0, hy.T)()], Wy = [(0, hy.T)()], fy = [(0, hy.T)()], cb = [(0, hy.T)()], Py = [(0, hy.T)()], oy = [(0, hy.T)()], By = [(0, hy.T)()], Ky = [(0, hy.T)()], ey = [(0, hy.T)()], qb = [(0, hy.T)()], sy = [(0, hy.T)()], Sy = [(0, hy.T)()], (0, Uy.j)(null, null, bb, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: yb => "_globalHue" in yb,
            get: yb => yb._globalHue,
            set: (yb, bb) => {
              yb._globalHue = bb
            }
          },
          metadata: Zy
        }, Ey, ly), (0, Uy.j)(null, null, Wy, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: yb => "_globalDensity" in yb,
            get: yb => yb._globalDensity,
            set: (yb, bb) => {
              yb._globalDensity = bb
            }
          },
          metadata: Zy
        }, mb, Cy), (0, Uy.j)(null, null, fy, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: yb => "_globalSaturation" in yb,
            get: yb => yb._globalSaturation,
            set: (yb, bb) => {
              yb._globalSaturation = bb
            }
          },
          metadata: Zy
        }, Ty, gb), (0, Uy.j)(null, null, cb, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: yb => "_globalExposure" in yb,
            get: yb => yb._globalExposure,
            set: (yb, bb) => {
              yb._globalExposure = bb
            }
          },
          metadata: Zy
        }, Gy, Oy), (0, Uy.j)(null, null, Py, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: yb => "_highlightsHue" in yb,
            get: yb => yb._highlightsHue,
            set: (yb, bb) => {
              yb._highlightsHue = bb
            }
          },
          metadata: Zy
        }, Ry, vb), (0, Uy.j)(null, null, oy, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: yb => "_highlightsDensity" in yb,
            get: yb => yb._highlightsDensity,
            set: (yb, bb) => {
              yb._highlightsDensity = bb
            }
          },
          metadata: Zy
        }, ib, My), (0, Uy.j)(null, null, By, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: yb => "_highlightsSaturation" in yb,
            get: yb => yb._highlightsSaturation,
            set: (yb, bb) => {
              yb._highlightsSaturation = bb
            }
          },
          metadata: Zy
        }, Yy, Xy), (0, Uy.j)(null, null, Ky, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: yb => "_highlightsExposure" in yb,
            get: yb => yb._highlightsExposure,
            set: (yb, bb) => {
              yb._highlightsExposure = bb
            }
          },
          metadata: Zy
        }, ny, uy), (0, Uy.j)(null, null, ey, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: yb => "_midtonesHue" in yb,
            get: yb => yb._midtonesHue,
            set: (yb, bb) => {
              yb._midtonesHue = bb
            }
          },
          metadata: Zy
        }, rb, Hy), (0, Uy.j)(null, null, qb, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: yb => "_midtonesDensity" in yb,
            get: yb => yb._midtonesDensity,
            set: (yb, bb) => {
              yb._midtonesDensity = bb
            }
          },
          metadata: Zy
        }, ab, Fy), (0, Uy.j)(null, null, sy, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: yb => "_midtonesSaturation" in yb,
            get: yb => yb._midtonesSaturation,
            set: (yb, bb) => {
              yb._midtonesSaturation = bb
            }
          },
          metadata: Zy
        }, py, Ly), (0, Uy.j)(null, null, Sy, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: yb => "_midtonesExposure" in yb,
            get: yb => yb._midtonesExposure,
            set: (yb, bb) => {
              yb._midtonesExposure = bb
            }
          },
          metadata: Zy
        }, Qy, jb), Zy && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Zy
        })
      })(), yb.PrepareUniforms = Jy.e, yb
    })();

    function Gy(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      yb._bind(bb, Wy, Uy, hy)
    }
    var Oy = Wy(38405),
      Ry = Wy(38599),
      vb = Wy(35909);
    let ib = (() => {
        var yb;
        let bb, Wy, oy, qb, sy, Sy, ly, Jy, vb, ib, My, Yy, Xy, ny, uy, rb, Hy, ab, Fy, py, Ly, Qy, jb, Dy, tb, wy, kb, Ny, zb = [],
          Iy = [],
          xb = [],
          Ay = [],
          dy = [],
          yW = [],
          bW = [],
          Wb = [],
          Ub = [],
          hb = [],
          fb = [],
          Zb = [],
          cW = [],
          Pb = [],
          ob = [],
          Bb = [],
          Kb = [],
          eb = [],
          qW = [],
          sb = [],
          Sb = [],
          Eb = [],
          lb = [],
          mW = [],
          Cb = [],
          Tb = [],
          Vb = [],
          Jb = [],
          gW = [],
          Gb = [],
          Ob = [],
          Rb = [],
          vW = [],
          iW = [],
          Mb = [],
          Yb = [],
          Xb = [],
          nb = [],
          ub = [],
          rW = [],
          Hb = [],
          aW = [],
          Fb = [],
          pb = [],
          Lb = [],
          Qb = [],
          jW = [],
          Db = [],
          tW = [],
          wb = [],
          kW = [],
          Nb = [],
          zW = [],
          Ib = [],
          xW = [],
          Ab = [];
        return yb = class {
          constructor() {
            this.colorCurves = (0, Uy.l)(this, zb, new gb), this._colorCurvesEnabled = ((0, Uy.l)(this, Iy), (0, Uy.l)(this, xb, !1)), this._colorGradingTexture = ((0, Uy.l)(this, Ay), (0, Uy.l)(this, dy, void 0)), this._colorGradingEnabled = ((0, Uy.l)(this, yW), (0, Uy.l)(this, bW, !1)), this._colorGradingWithGreenDepth = ((0, Uy.l)(this, Wb), (0, Uy.l)(this, Ub, !0)), this._colorGradingBGR = ((0, Uy.l)(this, hb), (0, Uy.l)(this, fb, !0)), this._exposure = ((0, Uy.l)(this, Zb), (0, Uy.l)(this, cW, 1)), this._toneMappingEnabled = ((0, Uy.l)(this, Pb), (0, Uy.l)(this, ob, !1)), this._toneMappingType = ((0, Uy.l)(this, Bb), (0, Uy.l)(this, Kb, yb.TONEMAPPING_STANDARD)), this._contrast = ((0, Uy.l)(this, eb), (0, Uy.l)(this, qW, 1)), this._whiteBalanceEnabled = ((0, Uy.l)(this, sb), (0, Uy.l)(this, Sb, !1)), this._temperature = ((0, Uy.l)(this, Eb), (0, Uy.l)(this, lb, 6500)), this._tint = ((0, Uy.l)(this, mW), (0, Uy.l)(this, Cb, 0)), this._whiteBalanceMatrix = ((0, Uy.l)(this, Tb), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, Uy.l)(this, Vb, 0), this.vignetteCenterX = ((0, Uy.l)(this, Jb), (0, Uy.l)(this, gW, 0)), this.vignetteCenterY = ((0, Uy.l)(this, Gb), (0, Uy.l)(this, Ob, 0)), this.vignetteWeight = ((0, Uy.l)(this, Rb), (0, Uy.l)(this, vW, 1.5)), this.vignetteColor = ((0, Uy.l)(this, iW), (0, Uy.l)(this, Mb, new Zy.e(0, 0, 0, 0))), this.vignetteCameraFov = ((0, Uy.l)(this, Yb), (0, Uy.l)(this, Xb, .5)), this._vignetteBlendMode = ((0, Uy.l)(this, nb), (0, Uy.l)(this, ub, yb.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, Uy.l)(this, rW), (0, Uy.l)(this, Hb, !1)), this._ditheringEnabled = ((0, Uy.l)(this, aW), (0, Uy.l)(this, Fb, !1)), this._ditheringIntensity = ((0, Uy.l)(this, pb), (0, Uy.l)(this, Lb, 1 / 255)), this._skipFinalColorClamp = ((0, Uy.l)(this, Qb), (0, Uy.l)(this, jW, !1)), this._applyByPostProcess = ((0, Uy.l)(this, Db), (0, Uy.l)(this, tW, !1)), this._isEnabled = ((0, Uy.l)(this, wb), (0, Uy.l)(this, kW, !0)), this.outputTextureWidth = ((0, Uy.l)(this, Nb), (0, Uy.l)(this, zW, 0)), this.outputTextureHeight = ((0, Uy.l)(this, Ib), (0, Uy.l)(this, xW, 0)), this.onUpdateParameters = ((0, Uy.l)(this, Ab), new fy.c)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(yb) {
            this._colorCurvesEnabled !== yb && (this._colorCurvesEnabled = yb, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(yb) {
            this._colorGradingTexture !== yb && (this._colorGradingTexture = yb, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(yb) {
            this._colorGradingEnabled !== yb && (this._colorGradingEnabled = yb, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(yb) {
            this._colorGradingWithGreenDepth !== yb && (this._colorGradingWithGreenDepth = yb, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(yb) {
            this._colorGradingBGR !== yb && (this._colorGradingBGR = yb, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(yb) {
            this._exposure !== yb && (this._exposure = yb, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(yb) {
            this._toneMappingEnabled !== yb && (this._toneMappingEnabled = yb, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(yb) {
            this._toneMappingType !== yb && (this._toneMappingType = yb, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(yb) {
            this._contrast !== yb && (this._contrast = yb, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(yb) {
            this._whiteBalanceEnabled !== yb && (this._whiteBalanceEnabled = yb, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(yb) {
            yb = Number.isNaN(yb) ? By : Math.max(yb, By), this._temperature !== yb && (this._temperature = yb, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(yb) {
            yb = (0, cb.Clamp)(yb, -150, Ky), this._tint !== yb && (this._tint = yb, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(yb, bb) {
              const Wy = Ey(ey(yb, bb), Ty),
                Uy = mb.multiply(Wy).multiply(Cy);
              return Py.c.GetAsMatrix3x3(Uy)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(yb) {
            this.vignetteCenterY = yb
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(yb) {
            this.vignetteCenterX = yb
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(yb) {
            this._vignetteBlendMode !== yb && (this._vignetteBlendMode = yb, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(yb) {
            this._vignetteEnabled !== yb && (this._vignetteEnabled = yb, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(yb) {
            this._ditheringEnabled !== yb && (this._ditheringEnabled = yb, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(yb) {
            this._ditheringIntensity !== yb && (this._ditheringIntensity = yb, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(yb) {
            this._skipFinalColorClamp !== yb && (this._skipFinalColorClamp = yb, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(yb) {
            this._applyByPostProcess !== yb && (this._applyByPostProcess = yb, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(yb) {
            this._isEnabled !== yb && (this._isEnabled = yb, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(bb) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return bb.WHITEBALANCE = !1, bb.VIGNETTE = !1, bb.TONEMAPPING = 0, bb.CONTRAST = !1, bb.EXPOSURE = !1, bb.COLORCURVES = !1, bb.COLORGRADING = !1, bb.COLORGRADING3D = !1, bb.DITHER = !1, bb.IMAGEPROCESSING = !1, bb.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(bb.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (bb.WHITEBALANCE = this._whiteBalanceEnabled, bb.VIGNETTE = this.vignetteEnabled, bb.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === yb._VIGNETTEMODE_MULTIPLY, bb.VIGNETTEBLENDMODEOPAQUE = !bb.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case yb.TONEMAPPING_KHR_PBR_NEUTRAL:
                bb.TONEMAPPING = 3;
                break;
              case yb.TONEMAPPING_ACES:
                bb.TONEMAPPING = 2;
                break;
              default:
                bb.TONEMAPPING = 1
            } else bb.TONEMAPPING = 0;
            bb.CONTRAST = 1 !== this.contrast, bb.EXPOSURE = 1 !== this.exposure, bb.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, bb.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, bb.COLORGRADING ? bb.COLORGRADING3D = this.colorGradingTexture.is3D : bb.COLORGRADING3D = !1, bb.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, bb.SAMPLER3DBGRMAP = this.colorGradingBGR, bb.DITHER = this._ditheringEnabled, bb.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, bb.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, bb.IMAGEPROCESSING = bb.WHITEBALANCE || bb.VIGNETTE || !!bb.TONEMAPPING || bb.CONTRAST || bb.EXPOSURE || bb.COLORCURVES || bb.COLORGRADING || bb.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(yb, bb) {
            if (this._whiteBalanceEnabled && yb.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && Gy(this.colorCurves, yb), this._vignetteEnabled || this._ditheringEnabled) {
              const Wy = 1 / (this.outputTextureWidth || yb.xh().getRenderWidth()),
                Uy = 1 / (this.outputTextureHeight || yb.xh().getRenderHeight());
              if (yb.setFloat2("vInverseScreenSize", Wy, Uy), this._ditheringEnabled && yb.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const hy = null != bb ? bb : Uy / Wy;
                let fy = Math.tan(.5 * this.vignetteCameraFov),
                  Zy = fy * hy;
                const cb = Math.sqrt(Zy * fy);
                Zy = (0, Oy.h)(Zy, cb, this.vignetteStretch), fy = (0, Oy.h)(fy, cb, this.vignetteStretch), yb.setFloat4("vignetteSettings1", Zy, fy, -Zy * this.vignetteCenterX, -fy * this.vignetteCenterY);
                const Py = -2 * this.vignetteWeight;
                yb.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, Py)
              }
            }
            if (yb.setFloat("exposureLinear", this.exposure), yb.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              yb.setTexture("txColorTransform", this.colorGradingTexture);
              const bb = this.colorGradingTexture.getSize().height;
              yb.setFloat4("colorTransformSettings", (bb - 1) / bb, .5 / bb, bb, this.colorGradingTexture.level)
            }
          }
          clone() {
            return Vy.c.Clone((() => new yb), this)
          }
          serialize() {
            return Vy.c.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const fy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          bb = [(0, hy.m)()], Wy = [(0, hy.T)()], oy = [(0, hy.M)("colorGradingTexture")], qb = [(0, hy.T)()], sy = [(0, hy.T)()], Sy = [(0, hy.T)()], ly = [(0, hy.T)()], Jy = [(0, hy.T)()], vb = [(0, hy.T)()], ib = [(0, hy.T)()], My = [(0, hy.T)()], Yy = [(0, hy.T)()], Xy = [(0, hy.T)()], ny = [(0, hy.T)()], uy = [(0, hy.T)()], rb = [(0, hy.T)()], Hy = [(0, hy.T)()], ab = [(0, hy.t)()], Fy = [(0, hy.T)()], py = [(0, hy.T)()], Ly = [(0, hy.T)()], Qy = [(0, hy.T)()], jb = [(0, hy.T)()], Dy = [(0, hy.T)()], tb = [(0, hy.T)()], wy = [(0, hy.T)()], kb = [(0, hy.T)()], Ny = [(0, hy.T)()], (0, Uy.j)(null, null, bb, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: yb => "colorCurves" in yb,
              get: yb => yb.colorCurves,
              set: (yb, bb) => {
                yb.colorCurves = bb
              }
            },
            metadata: fy
          }, zb, Iy), (0, Uy.j)(null, null, Wy, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: yb => "_colorCurvesEnabled" in yb,
              get: yb => yb._colorCurvesEnabled,
              set: (yb, bb) => {
                yb._colorCurvesEnabled = bb
              }
            },
            metadata: fy
          }, xb, Ay), (0, Uy.j)(null, null, oy, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "_colorGradingTexture" in yb,
              get: yb => yb._colorGradingTexture,
              set: (yb, bb) => {
                yb._colorGradingTexture = bb
              }
            },
            metadata: fy
          }, dy, yW), (0, Uy.j)(null, null, qb, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: yb => "_colorGradingEnabled" in yb,
              get: yb => yb._colorGradingEnabled,
              set: (yb, bb) => {
                yb._colorGradingEnabled = bb
              }
            },
            metadata: fy
          }, bW, Wb), (0, Uy.j)(null, null, sy, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: yb => "_colorGradingWithGreenDepth" in yb,
              get: yb => yb._colorGradingWithGreenDepth,
              set: (yb, bb) => {
                yb._colorGradingWithGreenDepth = bb
              }
            },
            metadata: fy
          }, Ub, hb), (0, Uy.j)(null, null, Sy, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: yb => "_colorGradingBGR" in yb,
              get: yb => yb._colorGradingBGR,
              set: (yb, bb) => {
                yb._colorGradingBGR = bb
              }
            },
            metadata: fy
          }, fb, Zb), (0, Uy.j)(null, null, ly, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: yb => "_exposure" in yb,
              get: yb => yb._exposure,
              set: (yb, bb) => {
                yb._exposure = bb
              }
            },
            metadata: fy
          }, cW, Pb), (0, Uy.j)(null, null, Jy, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: yb => "_toneMappingEnabled" in yb,
              get: yb => yb._toneMappingEnabled,
              set: (yb, bb) => {
                yb._toneMappingEnabled = bb
              }
            },
            metadata: fy
          }, ob, Bb), (0, Uy.j)(null, null, vb, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: yb => "_toneMappingType" in yb,
              get: yb => yb._toneMappingType,
              set: (yb, bb) => {
                yb._toneMappingType = bb
              }
            },
            metadata: fy
          }, Kb, eb), (0, Uy.j)(null, null, ib, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: yb => "_contrast" in yb,
              get: yb => yb._contrast,
              set: (yb, bb) => {
                yb._contrast = bb
              }
            },
            metadata: fy
          }, qW, sb), (0, Uy.j)(null, null, My, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: yb => "_whiteBalanceEnabled" in yb,
              get: yb => yb._whiteBalanceEnabled,
              set: (yb, bb) => {
                yb._whiteBalanceEnabled = bb
              }
            },
            metadata: fy
          }, Sb, Eb), (0, Uy.j)(null, null, Yy, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: yb => "_temperature" in yb,
              get: yb => yb._temperature,
              set: (yb, bb) => {
                yb._temperature = bb
              }
            },
            metadata: fy
          }, lb, mW), (0, Uy.j)(null, null, Xy, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: yb => "_tint" in yb,
              get: yb => yb._tint,
              set: (yb, bb) => {
                yb._tint = bb
              }
            },
            metadata: fy
          }, Cb, Tb), (0, Uy.j)(null, null, ny, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: yb => "vignetteStretch" in yb,
              get: yb => yb.vignetteStretch,
              set: (yb, bb) => {
                yb.vignetteStretch = bb
              }
            },
            metadata: fy
          }, Vb, Jb), (0, Uy.j)(null, null, uy, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: yb => "vignetteCenterX" in yb,
              get: yb => yb.vignetteCenterX,
              set: (yb, bb) => {
                yb.vignetteCenterX = bb
              }
            },
            metadata: fy
          }, gW, Gb), (0, Uy.j)(null, null, rb, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: yb => "vignetteCenterY" in yb,
              get: yb => yb.vignetteCenterY,
              set: (yb, bb) => {
                yb.vignetteCenterY = bb
              }
            },
            metadata: fy
          }, Ob, Rb), (0, Uy.j)(null, null, Hy, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: yb => "vignetteWeight" in yb,
              get: yb => yb.vignetteWeight,
              set: (yb, bb) => {
                yb.vignetteWeight = bb
              }
            },
            metadata: fy
          }, vW, iW), (0, Uy.j)(null, null, ab, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: yb => "vignetteColor" in yb,
              get: yb => yb.vignetteColor,
              set: (yb, bb) => {
                yb.vignetteColor = bb
              }
            },
            metadata: fy
          }, Mb, Yb), (0, Uy.j)(null, null, Fy, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: yb => "vignetteCameraFov" in yb,
              get: yb => yb.vignetteCameraFov,
              set: (yb, bb) => {
                yb.vignetteCameraFov = bb
              }
            },
            metadata: fy
          }, Xb, nb), (0, Uy.j)(null, null, py, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: yb => "_vignetteBlendMode" in yb,
              get: yb => yb._vignetteBlendMode,
              set: (yb, bb) => {
                yb._vignetteBlendMode = bb
              }
            },
            metadata: fy
          }, ub, rW), (0, Uy.j)(null, null, Ly, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: yb => "_vignetteEnabled" in yb,
              get: yb => yb._vignetteEnabled,
              set: (yb, bb) => {
                yb._vignetteEnabled = bb
              }
            },
            metadata: fy
          }, Hb, aW), (0, Uy.j)(null, null, Qy, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: yb => "_ditheringEnabled" in yb,
              get: yb => yb._ditheringEnabled,
              set: (yb, bb) => {
                yb._ditheringEnabled = bb
              }
            },
            metadata: fy
          }, Fb, pb), (0, Uy.j)(null, null, jb, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: yb => "_ditheringIntensity" in yb,
              get: yb => yb._ditheringIntensity,
              set: (yb, bb) => {
                yb._ditheringIntensity = bb
              }
            },
            metadata: fy
          }, Lb, Qb), (0, Uy.j)(null, null, Dy, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: yb => "_skipFinalColorClamp" in yb,
              get: yb => yb._skipFinalColorClamp,
              set: (yb, bb) => {
                yb._skipFinalColorClamp = bb
              }
            },
            metadata: fy
          }, jW, Db), (0, Uy.j)(null, null, tb, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: yb => "_applyByPostProcess" in yb,
              get: yb => yb._applyByPostProcess,
              set: (yb, bb) => {
                yb._applyByPostProcess = bb
              }
            },
            metadata: fy
          }, tW, wb), (0, Uy.j)(null, null, wy, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: yb => "_isEnabled" in yb,
              get: yb => yb._isEnabled,
              set: (yb, bb) => {
                yb._isEnabled = bb
              }
            },
            metadata: fy
          }, kW, Nb), (0, Uy.j)(null, null, kb, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: yb => "outputTextureWidth" in yb,
              get: yb => yb.outputTextureWidth,
              set: (yb, bb) => {
                yb.outputTextureWidth = bb
              }
            },
            metadata: fy
          }, zW, Ib), (0, Uy.j)(null, null, Ny, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: yb => "outputTextureHeight" in yb,
              get: yb => yb.outputTextureHeight,
              set: (yb, bb) => {
                yb.outputTextureHeight = bb
              }
            },
            metadata: fy
          }, xW, Ab), fy && Object.defineProperty(yb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fy
          })
        })(), yb.TONEMAPPING_STANDARD = 0, yb.TONEMAPPING_ACES = 1, yb.TONEMAPPING_KHR_PBR_NEUTRAL = 2, yb.PrepareUniforms = Ry.h, yb.PrepareSamplers = Ry.d, yb._VIGNETTEMODE_MULTIPLY = 0, yb._VIGNETTEMODE_OPAQUE = 1, yb
      })(),
      My = !1;

    function Yy(yb) {
      const bb = Vy.c.Parse((() => new ib), yb, null, null);
      return void 0 !== yb.vignetteCentreX && (bb.vignetteCenterX = yb.vignetteCentreX), void 0 !== yb.vignetteCentreY && (bb.vignetteCenterY = yb.vignetteCentreY), bb
    }

    function Xy() {
      My || (My = !0, ib.Parse = Yy, Vy.c._ImageProcessingConfigurationParser = Yy, (0, vb.e)("BABYLON.ImageProcessingConfiguration", ib))
    }
  },
  38607: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy
    });
    var Uy = Wy(37350),
      hy = Wy(38576);
    class fy {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Uy = arguments.length > 3 ? arguments[3] : void 0,
          hy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          fy = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = yb, this._noUBO = !yb.supportsUniformBuffers || hy, this._dynamic = Wy, this._name = Uy ?? "no-name", this._data = bb || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === fy && this._engine._features.trackUbosInFrame || !0 === fy) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.qcy = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.qcy = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
      }
      get useUbo() {
        return !this._noUBO
      }
      get isSync() {
        return !this._needSync
      }
      isDynamic() {
        return this._dynamic
      }
      getData() {
        return this._bufferData
      }
      getBuffer() {
        return this._buffer
      }
      getUniformNames() {
        return this._uniformNames
      }
      _fillAlignment(yb) {
        let bb;
        if (bb = yb <= 2 ? yb : 4, this._uniformLocationPointer % bb !== 0) {
          const yb = this._uniformLocationPointer;
          this._uniformLocationPointer += bb - this._uniformLocationPointer % bb;
          const Wy = this._uniformLocationPointer - yb;
          for (let bb = 0; bb < Wy; bb++) this._data.push(0)
        }
      }
      addUniform(yb, bb) {
        let Wy, Uy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (Uy > 0 && "number" === typeof bb && (this._uniformArraySizes[yb] = {
            strideSize: bb,
            arraySize: Uy
          }), void 0 === this._uniformLocations[yb] && (this._uniformNames.push(yb), !this._noUBO)) {
          if (Uy > 0) {
            if (bb instanceof Array) throw "addUniform should not be use with Array in UBO: " + yb;
            if (this._fillAlignment(4), 16 == bb) bb *= Uy;
            else {
              bb = bb * Uy + (4 - bb) * Uy
            }
            Wy = [];
            for (let yb = 0; yb < bb; yb++) Wy.push(0)
          } else {
            if (bb instanceof Array) Wy = bb, bb = Wy.length;
            else {
              Wy = [];
              for (let yb = 0; yb < bb; yb++) Wy.push(0)
            }
            this._fillAlignment(bb)
          }
          this._uniformSizes[yb] = bb, this._uniformLocations[yb] = this._uniformLocationPointer, this._uniformLocationPointer += bb;
          for (let yb = 0; yb < bb; yb++) this._data.push(Wy[yb]);
          this._needSync = !0
        }
      }
      addMatrix(yb, bb) {
        this.addUniform(yb, Array.prototype.slice.call(bb.hBy()))
      }
      addFloat2(yb, bb, Wy) {
        const Uy = [bb, Wy];
        this.addUniform(yb, Uy)
      }
      addFloat3(yb, bb, Wy, Uy) {
        const hy = [bb, Wy, Uy];
        this.addUniform(yb, hy)
      }
      addColor3(yb, bb) {
        const Wy = [bb.r, bb.g, bb.b];
        this.addUniform(yb, Wy)
      }
      addColor4(yb, bb, Wy) {
        const Uy = [bb.r, bb.g, bb.b, Wy];
        this.addUniform(yb, Uy)
      }
      addVector3(yb, bb) {
        const Wy = [bb.x, bb.y, bb.z];
        this.addUniform(yb, Wy)
      }
      addMatrix3x3(yb) {
        this.addUniform(yb, 12)
      }
      addMatrix2x2(yb) {
        this.addUniform(yb, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const yb = [];
        let bb = 0;
        for (const Wy in this._uniformLocations)
          if (yb.push(Wy), 10 === ++bb) break;
        return yb.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const yb of this._ownerListsBySlot.values()) this._removeOwnerBacklink(yb);
        this._ownerListsBySlot = new Map, this._slotByOwner = new WeakMap, this._slotFrameId = [], this._ownerCount = 0, this._freeSlots = [], this._slotGeneration = []
      }
      get _numBuffers() {
        return this._buffers.length
      }
      get _indexBuffer() {
        return this._bufferIndex
      }
      get name() {
        return this._name
      }
      set name(yb) {
        this._name = yb
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(yb, bb) {
        for (let Wy = 0; Wy < yb.length; ++Wy)
          if (yb[Wy] !== bb[Wy]) return !1;
        return !0
      }
      _copyBuffer(yb, bb) {
        for (let Wy = 0; Wy < yb.length; ++Wy) bb[Wy] = yb[Wy]
      }
      update() {
        if (!this._noUBO)
          if (this.bindUniformBuffer(), this._buffer)
            if (this._dynamic || this._needSync) {
              if (this._buffers && this._buffers.length > 1 && this._buffers[this._bufferIndex][1]) {
                if (this._buffersEqual(this._bufferData, this._buffers[this._bufferIndex][1])) return this._needSync = !1, void(this._createBufferOnWrite = this._trackUBOsInFrame);
                this._copyBuffer(this._bufferData, this._buffers[this._bufferIndex][1])
              }
              this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData), this._needSync = !1, this._createBufferOnWrite = this._trackUBOsInFrame
            } else this._createBufferOnWrite = this._trackUBOsInFrame;
        else this.create()
      }
      _updateOwnerKeyed(yb) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let bb = this._slotByOwner.get(yb);
        if (void 0 === bb && (bb = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(yb, bb), this._ownerCount++, yb._uniformBuffersWithOwnedSlot || (yb._uniformBuffersWithOwnedSlot = []), yb._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(bb, yb._uniformBuffersWithOwnedSlot)), this._slotGeneration[bb] === this._dataGeneration) return this._bufferIndex = bb, this._buffer = this._buffers[bb][0], this.bindUniformBuffer(), this._slotFrameId[bb] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const Wy = this._buffers[bb][1];
        this._slotFrameId[bb] === this._currentFrameId && Wy && !this._buffersEqual(this._bufferData, Wy) && (bb = this._takeFreeSlot(!1)), this._bufferIndex = bb, this._buffer = this._buffers[bb][0], this.bindUniformBuffer();
        const Uy = this._buffers[bb][1];
        Uy && this._buffersEqual(this._bufferData, Uy) || (Uy && this._copyBuffer(this._bufferData, Uy), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[bb] = this._currentFrameId, this._slotGeneration[bb] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(yb) {
        for (let Wy = 0; Wy < this._freeSlots.length; ++Wy) {
          const bb = this._freeSlots[Wy];
          if (this._slotFrameId[bb] !== this._currentFrameId) return yb && (this._freeSlots[Wy] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), bb
        }
        this._rebuild();
        const bb = this._buffers.length - 1;
        return yb || this._freeSlots.push(bb), bb
      }
      _releaseOwnerSlot(yb) {
        const bb = this._slotByOwner?.get(yb);
        if (void 0 === bb) return;
        this._slotByOwner.delete(yb);
        const Wy = this._ownerListsBySlot.get(bb);
        Wy && (this._removeOwnerBacklink(Wy), this._ownerListsBySlot.delete(bb)), this._ownerCount--, this._freeSlots.push(bb)
      }
      _removeOwnerBacklink(yb) {
        const bb = yb.indexOf(this); - 1 !== bb && (yb[bb] = yb[yb.length - 1], yb.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(yb, bb, Wy) {
        this._checkNewFrame();
        let hy = this._uniformLocations[yb];
        if (void 0 === hy) {
          if (this._buffer) return void Uy.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + yb);
          this.addUniform(yb, Wy), hy = this._uniformLocations[yb]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let yb = 0; yb < Wy; yb++) this._bufferData[hy + yb] = bb[yb];
          this._dataGeneration++
        } else {
          let yb = !1;
          for (let Uy = 0; Uy < Wy; Uy++)(16 === Wy && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[hy + Uy] !== Math.fround(bb[Uy])) && (yb = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[hy + Uy] = bb[Uy]);
          this._needSync = this._needSync || yb, yb && this._dataGeneration++
        }
      }
      updateUniformArray(yb, bb, Wy) {
        this._checkNewFrame();
        const fy = this._uniformLocations[yb];
        if (void 0 === fy) return void Uy.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const Zy = this._uniformArraySizes[yb];
        if (this._dynamic) {
          for (let yb = 0; yb < Wy; yb++) this._bufferData[fy + yb] = bb[yb];
          this._dataGeneration++
        } else {
          let yb = !1,
            Uy = 0,
            cb = 0;
          for (let Py = 0; Py < Wy; Py++)
            if (this._bufferData[fy + 4 * cb + Uy] !== hy.k.FloatRound(bb[Py]) && (yb = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[fy + 4 * cb + Uy] = bb[Py]), Uy++, Uy === Zy.strideSize) {
              for (; Uy < 4; Uy++) this._bufferData[fy + 4 * cb + Uy] = 0;
              Uy = 0, cb++
            } this._needSync = this._needSync || yb, yb && this._dataGeneration++
        }
      }
      _cacheMatrix(yb, bb) {
        this._checkNewFrame();
        const Wy = this._valueCache[yb],
          Uy = bb.updateFlag;
        return (void 0 === Wy || Wy !== Uy) && (this._valueCache[yb] = Uy, !0)
      }
      _updateMatrix3x3ForUniform(yb, bb) {
        for (let Wy = 0; Wy < 3; Wy++) fy._TempBuffer[4 * Wy] = bb[3 * Wy], fy._TempBuffer[4 * Wy + 1] = bb[3 * Wy + 1], fy._TempBuffer[4 * Wy + 2] = bb[3 * Wy + 2], fy._TempBuffer[4 * Wy + 3] = 0;
        this.updateUniform(yb, fy._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(yb, bb) {
        this._currentEffect.setMatrix3x3(yb, bb)
      }
      _updateMatrix2x2ForEffect(yb, bb) {
        this._currentEffect.setMatrix2x2(yb, bb)
      }
      _updateMatrix2x2ForUniform(yb, bb) {
        for (let Wy = 0; Wy < 2; Wy++) fy._TempBuffer[4 * Wy] = bb[2 * Wy], fy._TempBuffer[4 * Wy + 1] = bb[2 * Wy + 1], fy._TempBuffer[4 * Wy + 2] = 0, fy._TempBuffer[4 * Wy + 3] = 0;
        this.updateUniform(yb, fy._TempBuffer, 8)
      }
      _updateFloatForEffect(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(yb + Wy, bb)
      }
      _updateFloatForUniform(yb, bb) {
        fy._TempBuffer[0] = bb, this.updateUniform(yb, fy._TempBuffer, 1)
      }
      _updateFloat2ForEffect(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(yb + Uy, bb, Wy)
      }
      _updateFloat2ForUniform(yb, bb, Wy) {
        fy._TempBuffer[0] = bb, fy._TempBuffer[1] = Wy, this.updateUniform(yb, fy._TempBuffer, 2)
      }
      _updateFloat3ForEffect(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(yb + hy, bb, Wy, Uy)
      }
      _updateFloat3ForUniform(yb, bb, Wy, Uy) {
        fy._TempBuffer[0] = bb, fy._TempBuffer[1] = Wy, fy._TempBuffer[2] = Uy, this.updateUniform(yb, fy._TempBuffer, 3)
      }
      _updateFloat4ForEffect(yb, bb, Wy, Uy, hy) {
        let fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(yb + fy, bb, Wy, Uy, hy)
      }
      _updateFloat4ForUniform(yb, bb, Wy, Uy, hy) {
        fy._TempBuffer[0] = bb, fy._TempBuffer[1] = Wy, fy._TempBuffer[2] = Uy, fy._TempBuffer[3] = hy, this.updateUniform(yb, fy._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[yb]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(yb + Wy, bb);
            break;
          case 3:
            this._currentEffect.setFloatArray3(yb + Wy, bb);
            break;
          case 4:
            this._currentEffect.setFloatArray4(yb + Wy, bb);
            break;
          default:
            this._currentEffect.setFloatArray(yb + Wy, bb)
        }
      }
      _updateFloatArrayForUniform(yb, bb) {
        this.updateUniformArray(yb, bb, bb.length)
      }
      _updateArrayForEffect(yb, bb) {
        this._currentEffect.setArray(yb, bb)
      }
      _updateArrayForUniform(yb, bb) {
        this.updateUniformArray(yb, bb, bb.length)
      }
      _updateIntArrayForEffect(yb, bb) {
        this._currentEffect.setIntArray(yb, bb)
      }
      _updateIntArrayForUniform(yb, bb) {
        fy._TempBufferInt32View.set(bb), this.updateUniformArray(yb, fy._TempBuffer, bb.length)
      }
      _updateUIntArrayForEffect(yb, bb) {
        this._currentEffect.setUIntArray(yb, bb)
      }
      _updateUIntArrayForUniform(yb, bb) {
        fy._TempBufferUInt32View.set(bb), this.updateUniformArray(yb, fy._TempBuffer, bb.length)
      }
      _updateMatrixForEffect(yb, bb) {
        this._currentEffect.setMatrix(yb, bb)
      }
      _updateMatrixForUniform(yb, bb) {
        this._cacheMatrix(yb, bb) && this.updateUniform(yb, bb.hBy(), 16)
      }
      _updateMatricesForEffect(yb, bb) {
        this._currentEffect.setMatrices(yb, bb)
      }
      _updateMatricesForUniform(yb, bb) {
        this.updateUniform(yb, bb, bb.length)
      }
      _updateVector3ForEffect(yb, bb) {
        this._currentEffect.setVector3(yb, bb)
      }
      _updateVector3ForUniform(yb, bb) {
        fy._TempBuffer[0] = bb.x, fy._TempBuffer[1] = bb.y, fy._TempBuffer[2] = bb.z, this.updateUniform(yb, fy._TempBuffer, 3)
      }
      _updateVector4ForEffect(yb, bb) {
        this._currentEffect.setVector4(yb, bb)
      }
      _updateVector4ForUniform(yb, bb) {
        fy._TempBuffer[0] = bb.x, fy._TempBuffer[1] = bb.y, fy._TempBuffer[2] = bb.z, fy._TempBuffer[3] = bb.w, this.updateUniform(yb, fy._TempBuffer, 4)
      }
      _updateColor3ForEffect(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(yb + Wy, bb)
      }
      _updateColor3ForUniform(yb, bb) {
        fy._TempBuffer[0] = bb.r, fy._TempBuffer[1] = bb.g, fy._TempBuffer[2] = bb.b, this.updateUniform(yb, fy._TempBuffer, 3)
      }
      _updateColor4ForEffect(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(yb + Uy, bb, Wy)
      }
      _updateDirectColor4ForEffect(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(yb + Wy, bb)
      }
      _updateColor4ForUniform(yb, bb, Wy) {
        fy._TempBuffer[0] = bb.r, fy._TempBuffer[1] = bb.g, fy._TempBuffer[2] = bb.b, fy._TempBuffer[3] = Wy, this.updateUniform(yb, fy._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(yb, bb) {
        fy._TempBuffer[0] = bb.r, fy._TempBuffer[1] = bb.g, fy._TempBuffer[2] = bb.b, fy._TempBuffer[3] = bb.a, this.updateUniform(yb, fy._TempBuffer, 4)
      }
      _updateIntForEffect(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(yb + Wy, bb)
      }
      _updateIntForUniform(yb, bb) {
        fy._TempBufferInt32View[0] = bb, this.updateUniform(yb, fy._TempBuffer, 1)
      }
      _updateInt2ForEffect(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(yb + Uy, bb, Wy)
      }
      _updateInt2ForUniform(yb, bb, Wy) {
        fy._TempBufferInt32View[0] = bb, fy._TempBufferInt32View[1] = Wy, this.updateUniform(yb, fy._TempBuffer, 2)
      }
      _updateInt3ForEffect(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(yb + hy, bb, Wy, Uy)
      }
      _updateInt3ForUniform(yb, bb, Wy, Uy) {
        fy._TempBufferInt32View[0] = bb, fy._TempBufferInt32View[1] = Wy, fy._TempBufferInt32View[2] = Uy, this.updateUniform(yb, fy._TempBuffer, 3)
      }
      _updateInt4ForEffect(yb, bb, Wy, Uy, hy) {
        let fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(yb + fy, bb, Wy, Uy, hy)
      }
      _updateInt4ForUniform(yb, bb, Wy, Uy, hy) {
        fy._TempBufferInt32View[0] = bb, fy._TempBufferInt32View[1] = Wy, fy._TempBufferInt32View[2] = Uy, fy._TempBufferInt32View[3] = hy, this.updateUniform(yb, fy._TempBuffer, 4)
      }
      _updateUIntForEffect(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(yb + Wy, bb)
      }
      _updateUIntForUniform(yb, bb) {
        fy._TempBufferUInt32View[0] = bb, this.updateUniform(yb, fy._TempBuffer, 1)
      }
      _updateUInt2ForEffect(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(yb + Uy, bb, Wy)
      }
      _updateUInt2ForUniform(yb, bb, Wy) {
        fy._TempBufferUInt32View[0] = bb, fy._TempBufferUInt32View[1] = Wy, this.updateUniform(yb, fy._TempBuffer, 2)
      }
      _updateUInt3ForEffect(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(yb + hy, bb, Wy, Uy)
      }
      _updateUInt3ForUniform(yb, bb, Wy, Uy) {
        fy._TempBufferUInt32View[0] = bb, fy._TempBufferUInt32View[1] = Wy, fy._TempBufferUInt32View[2] = Uy, this.updateUniform(yb, fy._TempBuffer, 3)
      }
      _updateUInt4ForEffect(yb, bb, Wy, Uy, hy) {
        let fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(yb + fy, bb, Wy, Uy, hy)
      }
      _updateUInt4ForUniform(yb, bb, Wy, Uy, hy) {
        fy._TempBufferUInt32View[0] = bb, fy._TempBufferUInt32View[1] = Wy, fy._TempBufferUInt32View[2] = Uy, fy._TempBufferUInt32View[3] = hy, this.updateUniform(yb, fy._TempBuffer, 4)
      }
      setTexture(yb, bb) {
        this._currentEffect.setTexture(yb, bb)
      }
      setTextureArray(yb, bb) {
        this._currentEffect.setTextureArray(yb, bb)
      }
      bindTexture(yb, bb) {
        this._currentEffect._bindTexture(yb, bb)
      }
      updateUniformDirectly(yb, bb) {
        this.updateUniform(yb, bb, bb.length), this.update()
      }
      bindToEffect(yb, bb) {
        this._currentEffect = yb, this._currentEffectName = bb
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(yb) {
        if (!this._buffers) return this._buffer === yb;
        for (let bb = 0; bb < this._buffers.length; ++bb) {
          if (this._buffers[bb][0] === yb) return this._bufferIndex = bb, this._buffer = yb, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[bb][1] && (this._bufferData.set(this._buffers[bb][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(yb) {
        return void 0 !== this._uniformLocations[yb]
      }
      dispose() {
        if (this._noUBO) return;
        const yb = this._engine._uniformBuffers,
          bb = yb.indexOf(this);
        if (-1 !== bb && (yb[bb] = yb[yb.length - 1], yb.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let yb = 0; yb < this._buffers.length; ++yb) {
            const bb = this._buffers[yb][0];
            this._engine._releaseBuffer(bb)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    fy._MAX_UNIFORM_SIZE = 256, fy._TempBuffer = new Float32Array(fy._MAX_UNIFORM_SIZE), fy._TempBufferInt32View = new Int32Array(fy._TempBuffer.buffer), fy._TempBufferUInt32View = new Uint32Array(fy._TempBuffer.buffer)
  },
  38390: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy
    });
    var Uy = Wy(38399);
    class hy extends Uy.e {
      constructor(yb) {
        super(), this._buffer = yb
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  38469: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Py,
      e: () => oy
    });
    const Uy = "__bjs_serializable__",
      hy = new WeakMap;

    function fy(yb, bb) {
      return Object.prototype.hasOwnProperty.call(yb, bb)
    }
    const Zy = function() {
      let yb = Symbol.metadata;
      return yb || (yb = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: yb
      })), yb
    }();

    function cb(yb) {
      return "function" === typeof yb ? yb : yb?.constructor
    }

    function Py(yb) {
      if (!yb) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(Zy)}) polyfill must run before decorated classes are evaluated.`);
      return fy(yb, Uy) || (yb[Uy] = {}), yb[Uy]
    }

    function oy(yb) {
      const bb = cb(yb),
        Wy = bb ? bb[Zy] : void 0;
      if (!Wy) return {};
      const Py = hy.get(Wy);
      if (Py) return Py;
      const oy = {},
        By = [];
      let Ky = Wy;
      for (; Ky;) By.push(Ky), Ky = Object.getPrototypeOf(Ky);
      for (const hy of By)
        if (fy(hy, Uy)) {
          const yb = hy[Uy];
          for (const bb in yb) oy[bb] = yb[bb]
        } return hy.set(Wy, oy), oy
    }
  },
  38466: (yb, bb, Wy) => {
    Wy.d(bb, {
      B: () => Ey,
      F: () => ey,
      I: () => Sy,
      M: () => cb,
      N: () => By,
      P: () => Ky,
      T: () => Zy,
      e: () => Cy,
      h: () => fy,
      i: () => mb,
      m: () => qb,
      q: () => Py,
      t: () => sy,
      x: () => oy
    });
    var Uy = Wy(38469);

    function hy(yb, bb) {
      return (Wy, hy) => {
        if (!hy.metadata) return;
        const fy = String(hy.name),
          Zy = (0, Uy.d)(hy.metadata);
        Zy[fy] || (Zy[fy] = {
          type: yb,
          sourceName: bb
        })
      }
    }

    function fy(yb) {
      return function(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (Wy, Uy) => {
          const hy = bb || "_" + String(Uy.name);
          return {
            init(yb) {
              return void 0 === yb && hy in this || (this[hy] = yb), yb
            },
            get() {
              return this[hy]
            },
            set(bb) {
              "function" === typeof this[hy]?.equals && this[hy].equals(bb) || this[hy] !== bb && (this[hy] = bb, this[yb]())
            }
          }
        }
      }(yb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function Zy(yb) {
      return hy(0, yb)
    }

    function cb(yb) {
      return hy(1, yb)
    }

    function Py(yb) {
      return hy(2, yb)
    }

    function oy(yb) {
      return hy(3, yb)
    }

    function By(yb) {
      return hy(4, yb)
    }

    function Ky(yb) {
      return hy(5, yb)
    }

    function ey(yb) {
      return hy(6, yb)
    }

    function qb(yb) {
      return hy(7, yb)
    }

    function sy(yb) {
      return hy(8, yb)
    }

    function Sy(yb) {
      return hy(10, yb)
    }

    function Ey(yb) {
      return hy(12, yb)
    }

    function ly(yb, bb, Wy) {
      const Uy = String(bb.name);
      let hy = null;
      const fy = function() {
        if (null === hy) {
          hy = yb, "undefined" !== typeof _native && _native[Uy] && (hy = Wy(_native[Uy], yb));
          const Zy = this && (bb.static ? this : Object.getPrototypeOf(this));
          Zy?.[Uy] === fy && (Zy[Uy] = hy)
        }
        for (var Zy = arguments.length, cb = new Array(Zy), Py = 0; Py < Zy; Py++) cb[Py] = arguments[Py];
        return hy.apply(this, cb)
      };
      return fy
    }

    function mb(yb, bb) {
      return ly(yb, bb, (yb => yb))
    }

    function Cy(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (Wy, Uy) => {
        const hy = bb || "_" + String(Uy.name);
        return {
          get() {
            return this[hy]?.value
          },
          set(bb) {
            "function" === typeof this[hy]?.value?.equals && this[hy].value.equals(bb) || this[hy].value !== bb && (this[hy].value = bb, this[yb]())
          }
        }
      }
    }
    mb.filter = function(yb) {
      return (bb, Wy) => ly(bb, Wy, ((bb, Wy) => function() {
        for (var Uy = arguments.length, hy = new Array(Uy), fy = 0; fy < Uy; fy++) hy[fy] = arguments[fy];
        return yb(...hy) ? bb(...hy) : Wy.apply(this, hy)
      }))
    }
  },
  38485: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => oy
    });
    var Uy = Wy(38347),
      hy = Wy(38494),
      fy = Wy(35919),
      Zy = Wy(35861),
      cb = Wy(38469);
    const Py = function(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const fy = yb();
      hy.c && hy.c.HasTags(bb) && hy.c.AddTagsTo(fy, hy.c.GetTags(bb, !0));
      const Zy = (0, cb.e)(fy),
        Py = {};
      for (const hy in Zy) {
        const yb = Zy[hy],
          cb = bb[hy],
          By = yb.type;
        if (void 0 !== cb && null !== cb && ("uniqueId" !== hy || oy.AllowLoadingUniqueId)) switch (By) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof cb.slice ? fy[hy] = cb.slice() : fy[hy] = cb;
            break;
          case 1:
            Uy.cloneTexturesOnlyOnce && Py[cb.uniqueId] ? fy[hy] = Py[cb.uniqueId] : (fy[hy] = Wy || cb.isRenderTarget ? cb : cb.clone(), Py[cb.uniqueId] = fy[hy]);
            break;
          case 2:
          case 3:
          case 4:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12:
          case 13:
            fy[hy] = Wy ? cb : cb.clone()
        }
      }
      return fy
    };
    class oy {
      static AppendSerializedAnimations(yb, bb) {
        if (yb.animations) {
          bb.animations = [];
          for (let Wy = 0; Wy < yb.animations.length; Wy++) {
            const Uy = yb.animations[Wy];
            bb.animations.push(Uy.serialize())
          }
        }
      }
      static Serialize(yb, bb) {
        bb || (bb = {}), hy.c && (bb.tags = hy.c.GetTags(yb));
        const Wy = (0, cb.e)(yb);
        for (const Uy in Wy) {
          const hy = Wy[Uy],
            fy = hy.sourceName || Uy,
            Zy = hy.type,
            cb = yb[Uy];
          if (void 0 !== cb && null !== cb && ("uniqueId" !== Uy || oy.AllowLoadingUniqueId)) switch (Zy) {
            case 0:
              Array.isArray(cb) ? bb[fy] = cb.slice() : bb[fy] = cb;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              bb[fy] = cb.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              bb[fy] = cb.hBy();
              break;
            case 6:
            case 11:
              bb[fy] = cb.id
          }
        }
        return bb
      }
      static ParseProperties(yb, bb, Wy, Uy) {
        Uy || (Uy = "");
        const hy = (0, cb.e)(bb);
        for (const cb in hy) {
          const Py = hy[cb],
            By = yb[Py.sourceName || cb],
            Ky = Py.type;
          if (void 0 !== By && null !== By && ("uniqueId" !== cb || oy.AllowLoadingUniqueId)) {
            const yb = bb;
            switch (Ky) {
              case 0:
                yb[cb] = By;
                break;
              case 1:
                Wy && (yb[cb] = oy._TextureParser(By, Wy, Uy));
                break;
              case 2:
                yb[cb] = fy.d.FromArray(By);
                break;
              case 3:
                yb[cb] = oy._FresnelParametersParser(By);
                break;
              case 4:
                yb[cb] = Zy.m.FromArray(By);
                break;
              case 5:
                yb[cb] = Zy.n.FromArray(By);
                break;
              case 6:
                Wy && (yb[cb] = Wy.getLastMeshById(By));
                break;
              case 7:
                yb[cb] = oy._ColorCurvesParser(By);
                break;
              case 8:
                yb[cb] = fy.e.FromArray(By);
                break;
              case 9:
                yb[cb] = oy._ImageProcessingConfigurationParser(By);
                break;
              case 10:
                yb[cb] = Zy.e.FromArray(By);
                break;
              case 11:
                Wy && (yb[cb] = Wy.getCameraById(By));
                break;
              case 12:
                yb[cb] = Zy.c.FromArray(By);
                break;
              case 13:
                yb[cb] = Zy.p.FromArray(By)
            }
          }
        }
      }
      static Parse(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const fy = yb();
        return hy.c && hy.c.AddTagsTo(fy, bb.tags), oy.ParseProperties(bb, fy, Wy, Uy), fy
      }
      static Clone(yb, bb) {
        return Py(yb, bb, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(yb, bb) {
        return Py(yb, bb, !0)
      }
    }
    oy.AllowLoadingUniqueId = !1, oy._ImageProcessingConfigurationParser = yb => {
      throw (0, Uy.g)("ImageProcessingConfiguration")
    }, oy._FresnelParametersParser = yb => {
      throw (0, Uy.g)("FresnelParameters")
    }, oy._ColorCurvesParser = yb => {
      throw (0, Uy.g)("ColorCurves")
    }, oy._TextureParser = (yb, bb, Wy) => {
      throw (0, Uy.g)("Texture")
    }
  },
  38422: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy
    });
    var Uy = Wy(38371);
    class hy {
      get min() {
        return this._min
      }
      get max() {
        return this._max
      }
      get average() {
        return this._average
      }
      get lastSecAverage() {
        return this._lastSecAverage
      }
      get current() {
        return this._current
      }
      get total() {
        return this._totalAccumulated
      }
      get count() {
        return this._totalValueCount
      }
      constructor() {
        this._startMonitoringTime = 0, this._min = 0, this._max = 0, this._hasResult = !1, this._hasCurrentValue = !1, this._average = 0, this._lastSecAverage = 0, this._current = 0, this._totalValueCount = 0, this._totalAccumulated = 0, this._lastSecAccumulated = 0, this._lastSecTime = 0, this._lastSecValueCount = 0
      }
      fetchNewFrame() {
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = hy.Enabled, this._lastSecValueCount++
      }
      addCount(yb, bb) {
        hy.Enabled && (this._current += yb, this._hasCurrentValue = !0, bb && this._fetchResult())
      }
      beginMonitoring() {
        hy.Enabled && (this._startMonitoringTime = Uy.d.Now)
      }
      endMonitoring() {
        let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!hy.Enabled) return;
        yb && this.fetchNewFrame();
        const bb = Uy.d.Now;
        this._current = bb - this._startMonitoringTime, this._hasCurrentValue = !0, yb && this._fetchResult()
      }
      gC() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const yb = Uy.d.Now;
        yb - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = yb, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    hy.Enabled = !0
  },
  38587: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy,
      e: () => Uy
    });
    class Uy {
      constructor(yb) {
        this.length = 0, this.data = new Array(yb), this._id = Uy._GlobalId++
      }
      push(yb) {
        this.data[this.length++] = yb, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(yb) {
        for (let bb = 0; bb < this.length; bb++) yb(this.data[bb])
      }
      sort(yb) {
        this.data.sort(yb)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(yb) {
        if (0 !== yb.length) {
          this.length + yb.length > this.data.length && (this.data.length = 2 * (this.length + yb.length));
          for (let bb = 0; bb < yb.length; bb++) this.data[this.length++] = (yb.data || yb)[bb]
        }
      }
      indexOf(yb) {
        const bb = this.data.indexOf(yb);
        return bb >= this.length ? -1 : bb
      }
      contains(yb) {
        return -1 !== this.indexOf(yb)
      }
    }
    Uy._GlobalId = 0;
    class hy extends Uy {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(yb) {
        super.push(yb), yb.__smartArrayFlags || (yb.__smartArrayFlags = {}), yb.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(yb) {
        return (!yb.__smartArrayFlags || yb.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(yb), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(yb) {
        if (0 !== yb.length) {
          this.length + yb.length > this.data.length && (this.data.length = 2 * (this.length + yb.length));
          for (let bb = 0; bb < yb.length; bb++) {
            const Wy = (yb.data || yb)[bb];
            this.pushNoDuplicate(Wy)
          }
        }
      }
    }
  },
  38494: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy
    });
    class Uy {
      static Eval(yb, bb) {
        return "true" === (yb = yb.match(/\([^()]*\)/g) ? yb.replace(/\([^()]*\)/g, (yb => (yb = yb.slice(1, yb.length - 1), Uy._HandleParenthesisContent(yb, bb)))) : Uy._HandleParenthesisContent(yb, bb)) || "false" !== yb && Uy.Eval(yb, bb)
      }
      static _HandleParenthesisContent(yb, bb) {
        let Wy;
        bb = bb || (yb => "true" === yb);
        const hy = yb.split("||");
        for (const fy in hy)
          if (Object.prototype.hasOwnProperty.call(hy, fy)) {
            let yb = Uy._SimplifyNegation(hy[fy].trim());
            const Zy = yb.split("&&");
            if (Zy.length > 1)
              for (let hy = 0; hy < Zy.length; ++hy) {
                const fy = Uy._SimplifyNegation(Zy[hy].trim());
                if (Wy = "true" !== fy && "false" !== fy ? "!" === fy[0] ? !bb(fy.substring(1)) : bb(fy) : "true" === fy, !Wy) {
                  yb = "false";
                  break
                }
              }
            if (Wy || "true" === yb) {
              Wy = !0;
              break
            }
            Wy = "true" !== yb && "false" !== yb ? "!" === yb[0] ? !bb(yb.substring(1)) : bb(yb) : "true" === yb
          } return Wy ? "true" : "false"
      }
      static _SimplifyNegation(yb) {
        return "!true" === (yb = (yb = yb.replace(/^[\s!]+/, (yb => (yb = yb.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? yb = "false" : "!false" === yb && (yb = "true"), yb
      }
    }
    class hy {
      static EnableFor(yb) {
        yb._tags = yb._tags || {}, yb.hasTags = () => hy.HasTags(yb), yb.addTags = bb => hy.AddTagsTo(yb, bb), yb.removeTags = bb => hy.RemoveTagsFrom(yb, bb), yb.matchesTagsQuery = bb => hy.MatchesQuery(yb, bb)
      }
      static DisableFor(yb) {
        delete yb._tags, delete yb.hasTags, delete yb.addTags, delete yb.removeTags, delete yb.matchesTagsQuery
      }
      static HasTags(yb) {
        if (!yb._tags) return !1;
        const bb = yb._tags;
        for (const Wy in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Wy)) return !0;
        return !1
      }
      static GetTags(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!yb._tags) return null;
        if (bb) {
          const bb = [];
          for (const Wy in yb._tags) Object.prototype.hasOwnProperty.call(yb._tags, Wy) && !0 === yb._tags[Wy] && bb.push(Wy);
          return bb.join(" ")
        }
        return yb._tags
      }
      static AddTagsTo(yb, bb) {
        if (!bb) return;
        if ("string" !== typeof bb) return;
        const Wy = bb.split(" ");
        for (const Uy of Wy) hy._AddTagTo(yb, Uy)
      }
      static _AddTagTo(yb, bb) {
        "" !== (bb = bb.trim()) && "true" !== bb && "false" !== bb && (bb.match(/[\s]/) || bb.match(/^([!]|([|]|[&]){2})/) || (hy.EnableFor(yb), yb._tags[bb] = !0))
      }
      static RemoveTagsFrom(yb, bb) {
        if (!hy.HasTags(yb)) return;
        const Wy = bb.split(" ");
        for (const Uy in Wy) hy._RemoveTagFrom(yb, Wy[Uy])
      }
      static _RemoveTagFrom(yb, bb) {
        delete yb._tags[bb]
      }
      static MatchesQuery(yb, bb) {
        return void 0 === bb || ("" === bb ? hy.HasTags(yb) : Uy.Eval(bb, (bb => hy.HasTags(yb) && yb._tags[bb])))
      }
    }
  },
  38627: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy
    });
    var Uy = Wy(38620),
      hy = Wy(35893);
    class fy {
      constructor(yb) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new hy.c, this._scene = yb
      }
      _prepareBuffers() {
        if (this._vertexBuffers[Uy.k.PositionKind]) return;
        const yb = [];
        yb.push(1, 1), yb.push(-1, 1), yb.push(-1, -1), yb.push(1, -1), this._vertexBuffers[Uy.k.PositionKind] = new Uy.k(this._scene.xh(), yb, Uy.k.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const yb = [];
        yb.push(0), yb.push(1), yb.push(2), yb.push(0), yb.push(2), yb.push(3), this._indexBuffer = this._scene.xh().createIndexBuffer(yb)
      }
      _getActivePostProcesses(yb) {
        const bb = this._activePostProcesses;
        bb.length = 0;
        for (let Wy = 0; Wy < yb.length; Wy++) {
          const Uy = yb[Wy];
          Uy && bb.push(Uy)
        }
        return bb
      }
      _rebuild() {
        const yb = this._vertexBuffers[Uy.k.PositionKind];
        yb && (yb._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Wy = this._scene.activeCamera;
        return !!Wy && (bb = bb || this._getActivePostProcesses(Wy._postProcesses), !(!bb || 0 === bb.length || !this._scene.postProcessesEnabled) && (bb[0].activate(Wy, yb, null !== bb && void 0 !== bb), !0))
      }
      directRender(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          fy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Zy = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : yb.length;
        const cb = this._scene.xh();
        for (let Py = 0; Py < Zy; Py++) {
          Py < yb.length - 1 ? yb[Py + 1].activate(this._scene.activeCamera || this._scene, bb?.texture) : (bb ? cb.bindFramebuffer(bb, Uy, void 0, void 0, Wy, hy) : fy || cb.restoreDefaultFramebuffer(), cb._debugInsertMarker?.(`post process ${yb[Py].name} output`));
          const Zy = yb[Py],
            oy = Zy.apply();
          oy && (Zy.onBeforeRenderObservable.notifyObservers(oy), this._prepareBuffers(), cb.bindBuffers(this._vertexBuffers, this._indexBuffer, oy), cb.drawElementsType(0, 0, 6), Zy.onAfterRenderObservable.notifyObservers(oy))
        }
        cb.setDepthBuffer(!0), cb.setDepthWrite(!0)
      }
      _finalizeFrame(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const fy = this._scene.activeCamera;
        if (!fy) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (Uy = Uy || this._getActivePostProcesses(fy._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const Zy = this._scene.xh();
        for (let cb = 0, Py = Uy.length; cb < Py; cb++) {
          const oy = Uy[cb];
          if (cb < Py - 1 ? oy._outputTexture = Uy[cb + 1].activate(fy, bb?.texture) : (bb ? (Zy.bindFramebuffer(bb, Wy, void 0, void 0, hy), oy._outputTexture = bb) : (Zy.restoreDefaultFramebuffer(), oy._outputTexture = null), Zy._debugInsertMarker?.(`post process ${Uy[cb].name} output`)), yb) break;
          const By = oy.apply();
          By && (oy.onBeforeRenderObservable.notifyObservers(By), this._prepareBuffers(), Zy.bindBuffers(this._vertexBuffers, this._indexBuffer, By), Zy.drawElementsType(0, 0, 6), oy.onAfterRenderObservable.notifyObservers(By))
        }
        Zy.setDepthBuffer(!0), Zy.setDepthWrite(!0), Zy.setAlphaMode(0)
      }
      dispose() {
        const yb = this._vertexBuffers[Uy.k.PositionKind];
        yb && (yb.dispose(), this._vertexBuffers[Uy.k.PositionKind] = null), this._indexBuffer && (this._scene.xh()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  38644: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy
    });
    var Uy = Wy(38587),
      hy = Wy(35861);
    class fy {
      set opaqueSortCompareFn(yb) {
        this._opaqueSortCompareFn = yb || fy.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(yb) {
        this._alphaTestSortCompareFn = yb || fy.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(yb) {
        this._transparentSortCompareFn = yb || fy.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = yb, this._opaqueSubMeshes = new Uy.e(256), this._transparentSubMeshes = new Uy.e(256), this._alphaTestSubMeshes = new Uy.e(256), this._depthOnlySubMeshes = new Uy.e(256), this._particleSystems = new Uy.e(256), this._spriteManagers = new Uy.e(256), this._empty = !0, this._edgesRenderers = new Uy.d(16), this.disableDepthPrePass = !1, this._scene = bb, this.opaqueSortCompareFn = Wy, this.alphaTestSortCompareFn = hy, this.transparentSortCompareFn = fy
      }
      render(yb, bb, Wy, Uy) {
        let hy = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          fy = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Zy = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          cb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Py = arguments.length > 8 ? arguments[8] : void 0;
        if (yb) return void yb(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const oy = this._scene.xh();
        hy && 0 !== this._depthOnlySubMeshes.length && (oy.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), oy.setColorWrite(!0)), fy && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), Zy && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const By = oy.getStencilBuffer();
        if (oy.setStencilBuffer(!1), bb && this._renderSprites(), Wy && this._renderParticles(Uy), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), cb && (Py || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (oy.setStencilBuffer(By), Py) Py(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const yb = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            yb.length && this._renderTransparent(yb)
          } else this._renderTransparent(this._transparentSubMeshes);
          oy.setAlphaMode(0)
        }
        if (oy.setStencilBuffer(!1), fy && this._edgesRenderers.length) {
          for (let yb = 0; yb < this._edgesRenderers.length; yb++) this._edgesRenderers.data[yb].render();
          oy.setAlphaMode(0)
        }
        oy.setStencilBuffer(By)
      }
      _renderOpaqueSorted(yb) {
        fy._RenderSorted(yb, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(yb) {
        fy._RenderSorted(yb, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(yb) {
        fy._RenderSorted(yb, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(yb, bb, Wy, Uy, Zy) {
        let cb, Py = 0;
        const oy = Wy ? Wy.globalPosition : fy._ZeroVector;
        if (Uy && bb !== fy.PainterSortCompare)
          for (; Py < yb.length; Py++) cb = yb.data[Py], cb._alphaIndex = cb.getMesh().alphaIndex, cb._distanceToCamera = hy.n.Distance(cb.qUy().GBy.centerWorld, oy);
        const By = yb.length === yb.data.length ? yb.data : yb.data.slice(0, yb.length);
        bb && By.sort(bb);
        const Ky = By[0].getMesh().kWy();
        for (Py = 0; Py < By.length; Py++) {
          if (cb = By[Py], Ky._activeMeshesFrozenButKeepClipping && !cb.isInFrustum(Ky._frustumPlanes)) continue;
          let yb = !1;
          if (Uy) {
            const bb = cb.Wh();
            if (bb && bb.needDepthPrePass && !Zy) {
              yb = !0;
              const Wy = bb.kWy().xh();
              Wy.setColorWrite(!1), Wy.setAlphaMode(0), cb.render(!1), Wy.setColorWrite(!0)
            }
          }
          const bb = cb._renderingMesh;
          !yb && bb._renderRunFollower(cb, Uy) || cb.render(Uy)
        }
      }
      static defaultTransparentSortCompare(yb, bb) {
        return yb._alphaIndex > bb._alphaIndex ? 1 : yb._alphaIndex < bb._alphaIndex ? -1 : fy.backToFrontSortCompare(yb, bb)
      }
      static backToFrontSortCompare(yb, bb) {
        return yb._distanceToCamera < bb._distanceToCamera ? 1 : yb._distanceToCamera > bb._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(yb, bb) {
        return yb._distanceToCamera < bb._distanceToCamera ? -1 : yb._distanceToCamera > bb._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(yb, bb) {
        const Wy = yb.getMesh(),
          Uy = bb.getMesh();
        return Wy.material && Uy.material ? Wy.material.uniqueId - Uy.material.uniqueId : Wy.uniqueId - Uy.uniqueId
      }
      prepare() {
        this._opaqueSubMeshes.reset(), this._transparentSubMeshes.reset(), this._alphaTestSubMeshes.reset(), this._depthOnlySubMeshes.reset(), this._particleSystems.reset(), this.prepareSprites(), this._edgesRenderers.reset(), this._empty = !0
      }
      prepareSprites() {
        this._spriteManagers.reset()
      }
      dispose() {
        this._opaqueSubMeshes.dispose(), this._transparentSubMeshes.dispose(), this._alphaTestSubMeshes.dispose(), this._depthOnlySubMeshes.dispose(), this._particleSystems.dispose(), this._spriteManagers.dispose(), this._edgesRenderers.dispose()
      }
      dispatch(yb, bb, Wy) {
        void 0 === bb && (bb = yb.getMesh()), void 0 === Wy && (Wy = yb.Wh()), null !== Wy && void 0 !== Wy && (Wy.needAlphaBlendingForMesh(bb) ? this._transparentSubMeshes.push(yb) : Wy.needAlphaTestingForMesh(bb) ? (Wy.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(yb), this._alphaTestSubMeshes.push(yb)) : (Wy.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(yb), this._opaqueSubMeshes.push(yb)), bb._renderingGroup = this, bb._edgesRenderer && bb.isEnabled() && bb.isVisible && bb._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(bb._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(yb) {
        this._spriteManagers.push(yb), this._empty = !1
      }
      dispatchParticles(yb) {
        this._particleSystems.push(yb), this._empty = !1
      }
      _renderParticles(yb) {
        if (0 === this._particleSystems.length) return;
        const bb = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let Wy = 0; Wy < this._particleSystems.length; Wy++) {
          const Uy = this._particleSystems.data[Wy];
          if (0 === (bb && bb.layerMask & Uy.layerMask)) continue;
          const hy = Uy.emitter;
          hy.position && yb && -1 === yb.indexOf(hy) || this._scene._activeParticles.addCount(Uy.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const yb = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let bb = 0; bb < this._spriteManagers.length; bb++) {
          const Wy = this._spriteManagers.data[bb];
          0 !== (yb && yb.layerMask & Wy.layerMask) && Wy.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    fy._ZeroVector = hy.n.Zero()
  },
  38637: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => fy
    });
    var Uy = Wy(38644);
    class hy {}
    class fy {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(yb) {
        this._disableDepthPrePass = yb;
        for (const bb of this._renderingGroups) bb.disableDepthPrePass = yb
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(yb) {
        yb !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = yb, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const yb of this._scene.meshes)
          if (yb.vJ)
            for (const bb of yb.vJ) bb._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const yb of this._scene.spriteManagers) yb._wasDispatched = !1;
        for (const yb of this._scene.YV) yb._wasDispatched = !1
      }
      constructor(yb) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new hy, this._maintainStateBetweenFrames = !1, this._scene = yb;
        for (let bb = fy.MIN_RENDERINGGROUPS; bb < fy.MAX_RENDERINGGROUPS; bb++) this._autoClearDepthStencil[bb] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(yb) {
        const bb = yb || 0;
        return this._prepareRenderingGroup(bb), this._renderingGroups[bb]
      }
      _clearDepthStencilBuffer() {
        let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.xh().clear(null, !1, yb, bb), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(yb, bb, Wy, Uy) {
        let hy = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Zy = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          cb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Py = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          oy = arguments.length > 8 ? arguments[8] : void 0,
          By = arguments.length > 9 ? arguments[9] : void 0;
        const Ky = this._renderingGroupInfo;
        Ky.Pf = this._scene, Ky.camera = this._scene.activeCamera, Ky.renderingManager = this;
        const ey = By ?? this._scene.spriteManagers;
        if (ey && Uy)
          for (let fy = 0; fy < ey.length; fy++) {
            const yb = ey[fy];
            this.dispatchSprites(yb)
          }
        for (let qb = fy.MIN_RENDERINGGROUPS; qb < fy.MAX_RENDERINGGROUPS; qb++) {
          this._depthStencilBufferAlreadyCleaned = qb === fy.MIN_RENDERINGGROUPS;
          const By = this._renderingGroups[qb];
          if (!By || By._empty) continue;
          const ey = 1 << qb;
          if (Ky.renderingGroupId = qb, this._scene.onBeforeRenderingGroupObservable.notifyObservers(Ky, ey), fy.AUTOCLEAR) {
            const yb = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(qb) : this._autoClearDepthStencil[qb];
            yb && yb.autoClear && this._clearDepthStencilBuffer(yb.depth, yb.stencil)
          }
          for (let yb = 0, bb = this._scene._beforeRenderingGroupDrawStage; yb < bb.length; yb++) {
            bb[yb].action(qb)
          }
          By.render(yb, Uy, Wy, bb, hy, Zy, cb, Py, oy);
          for (let yb = 0, bb = this._scene._afterRenderingGroupDrawStage; yb < bb.length; yb++) {
            bb[yb].action(qb)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(Ky, ey)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let yb = fy.MIN_RENDERINGGROUPS; yb < fy.MAX_RENDERINGGROUPS; yb++) {
            const bb = this._renderingGroups[yb];
            bb && bb.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let yb = fy.MIN_RENDERINGGROUPS; yb < fy.MAX_RENDERINGGROUPS; yb++) {
            const bb = this._renderingGroups[yb];
            bb && bb.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let yb = fy.MIN_RENDERINGGROUPS; yb < fy.MAX_RENDERINGGROUPS; yb++) {
          const bb = this._renderingGroups[yb];
          bb && bb.dispose()
        }
      }
      _prepareRenderingGroup(yb) {
        void 0 === this._renderingGroups[yb] && (this._renderingGroups[yb] = new Uy.b(yb, this._scene, this._customOpaqueSortCompareFn[yb], this._customAlphaTestSortCompareFn[yb], this._customTransparentSortCompareFn[yb]), this._renderingGroups[yb].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(yb) {
        this.maintainStateBetweenFrames && yb._wasDispatched || (yb._wasDispatched = !0, this.getRenderingGroup(yb.renderingGroupId).dispatchSprites(yb))
      }
      dispatchParticles(yb) {
        this.maintainStateBetweenFrames && yb._wasDispatched || (yb._wasDispatched = !0, this.getRenderingGroup(yb.renderingGroupId).dispatchParticles(yb))
      }
      dispatch(yb, bb, Wy) {
        void 0 === bb && (bb = yb.getMesh()), this.maintainStateBetweenFrames && yb._wasDispatched || (yb._wasDispatched = !0, this.getRenderingGroup(bb.renderingGroupId).dispatch(yb, bb, Wy))
      }
      setRenderingOrder(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[yb] = bb, this._customAlphaTestSortCompareFn[yb] = Wy, this._customTransparentSortCompareFn[yb] = Uy, this._renderingGroups[yb]) {
          const bb = this._renderingGroups[yb];
          bb.opaqueSortCompareFn = this._customOpaqueSortCompareFn[yb], bb.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[yb], bb.transparentSortCompareFn = this._customTransparentSortCompareFn[yb]
        }
      }
      setRenderingAutoClearDepthStencil(yb, bb) {
        let Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Uy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[yb] = {
          autoClear: bb,
          depth: Wy,
          stencil: Uy
        }
      }
      getAutoClearDepthStencilSetup(yb) {
        return this._autoClearDepthStencil[yb]
      }
    }
    fy.MAX_RENDERINGGROUPS = 4, fy.MIN_RENDERINGGROUPS = 0, fy.AUTOCLEAR = !0
  },
  38376: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy
    });
    class Uy {
      constructor(yb) {
        this._supportBlendParametersPerTarget = yb, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(yb) {
        this.setAlphaBlend(yb)
      }
      setAlphaBlend(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[bb] !== yb && (yb ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[bb] = yb, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(yb, bb, Wy, Uy) {
        this._blendConstants[0] === yb && this._blendConstants[1] === bb && this._blendConstants[2] === Wy && this._blendConstants[3] === Uy || (this._blendConstants[0] = yb, this._blendConstants[1] = bb, this._blendConstants[2] = Wy, this._blendConstants[3] = Uy, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(yb, bb, Wy, Uy) {
        const hy = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[hy + 0] === yb && this._blendFunctionParameters[hy + 1] === bb && this._blendFunctionParameters[hy + 2] === Wy && this._blendFunctionParameters[hy + 3] === Uy || (this._blendFunctionParameters[hy + 0] = yb, this._blendFunctionParameters[hy + 1] = bb, this._blendFunctionParameters[hy + 2] = Wy, this._blendFunctionParameters[hy + 3] = Uy, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(yb, bb) {
        const Wy = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[Wy + 0] === yb && this._blendEquationParameters[Wy + 1] === bb || (this._blendEquationParameters[Wy + 0] = yb, this._blendEquationParameters[Wy + 1] = bb, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== bb && (this._numTargets = bb, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== Wy && (this._blendDisabledTargetsMask = Wy, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (yb.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === bb || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (bb > 1 && 0 !== Wy && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & Wy) ? yb.enable(yb.BLEND) : yb.disable(yb.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (yb.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (yb.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const Uy = yb;
        if (this._isAlphaBlendDirty) {
          for (let hy = 0; hy < bb; hy++) {
            const bb = hy < this._numTargetEnabled ? hy : 0;
            this._alphaBlend[bb] && 0 === (Wy & 1 << hy) ? Uy.enableIndexed(yb.BLEND, hy) : Uy.disableIndexed(yb.BLEND, hy)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let yb = 0; yb < bb; yb++) {
            const bb = yb < this._numTargetEnabled ? 4 * yb : 0;
            Uy.blendFuncSeparateIndexed(yb, this._blendFunctionParameters[bb + 0], this._blendFunctionParameters[bb + 1], this._blendFunctionParameters[bb + 2], this._blendFunctionParameters[bb + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let yb = 0; yb < bb; yb++) {
            const bb = yb < this._numTargetEnabled ? 2 * yb : 0;
            Uy.blendEquationSeparateIndexed(yb, this._blendEquationParameters[bb + 0], this._blendEquationParameters[bb + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(yb, bb) {
        let Wy = 32774;
        switch (yb) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, bb);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, bb);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, bb);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, bb);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, bb);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, bb);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, bb);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, bb);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, bb);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, bb);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, bb);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, bb);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, bb);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, bb);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, bb);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, bb);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, bb), Wy = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, bb), Wy = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, bb);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, bb)
        }
        this.setAlphaEquationParameters(Wy, Wy, bb)
      }
    }
  },
  38670: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Uy
    });
    class Uy {}
    Uy._IsPickingAvailable = !1
  },
  38569: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => cU,
      g: () => fW
    });
    var Uy = Wy(38576),
      hy = Wy(38354),
      fy = Wy(38371),
      Zy = Wy(35893),
      cb = Wy(38587);
    class Py {
      constructor() {
        this._count = 0, this._data = {}
      }
      Coy(yb) {
        this.clear(), yb.forEach(((yb, bb) => this.add(yb, bb)))
      }
      get(yb) {
        const bb = this._data[yb];
        if (void 0 !== bb) return bb
      }
      getOrAddWithFactory(yb, bb) {
        let Wy = this.get(yb);
        return void 0 !== Wy || (Wy = bb(yb), Wy && this.add(yb, Wy)), Wy
      }
      getOrAdd(yb, bb) {
        const Wy = this.get(yb);
        return void 0 !== Wy ? Wy : (this.add(yb, bb), bb)
      }
      contains(yb) {
        return void 0 !== this._data[yb]
      }
      add(yb, bb) {
        return void 0 === this._data[yb] && (this._data[yb] = bb, ++this._count, !0)
      }
      set(yb, bb) {
        return void 0 !== this._data[yb] && (this._data[yb] = bb, !0)
      }
      getAndRemove(yb) {
        const bb = this.get(yb);
        return void 0 !== bb ? (delete this._data[yb], --this._count, bb) : null
      }
      remove(yb) {
        return !!this.contains(yb) && (delete this._data[yb], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(yb) {
        for (const bb in this._data) {
          yb(bb, this._data[bb])
        }
      }
      first(yb) {
        for (const bb in this._data) {
          const Wy = yb(bb, this._data[bb]);
          if (Wy) return Wy
        }
        return null
      }
    }
    var oy = Wy(38494),
      By = Wy(35861),
      Ky = Wy(38594),
      ey = Wy(38607),
      qb = Wy(38611);
    class sy {
      constructor(yb, bb, Wy, Uy, hy, fy) {
        this.source = yb, this.pointerX = bb, this.pointerY = Wy, this.meshUnderPointer = Uy, this.sourceEvent = hy, this.additionalData = fy
      }
      static CreateNew(yb, bb, Wy) {
        const Uy = yb.kWy();
        return new sy(yb, Uy.pointerX, Uy.pointerY, Uy.meshUnderPointer || yb, bb, Wy)
      }
      static CreateNewFromSprite(yb, bb, Wy, Uy) {
        return new sy(yb, bb.pointerX, bb.pointerY, bb.meshUnderPointer, Wy, Uy)
      }
      static CreateNewFromScene(yb, bb) {
        return new sy(null, yb.pointerX, yb.pointerY, yb.meshUnderPointer, bb)
      }
      static CreateNewFromPrimitive(yb, bb, Wy, Uy) {
        return new sy(yb, bb.x, bb.y, null, Wy, Uy)
      }
    }
    var Sy = Wy(38627),
      Ey = Wy(38633),
      ly = Wy(38637),
      mb = Wy(38649),
      Cy = Wy(38325),
      Ty = Wy(35886),
      Vy = Wy(38347),
      Jy = Wy(38655);
    class gb {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const yb in gb.Triggers)
          if (Object.prototype.hasOwnProperty.call(gb.Triggers, yb)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const yb in gb.Triggers)
          if (Object.prototype.hasOwnProperty.call(gb.Triggers, yb)) {
            const bb = parseInt(yb);
            if (bb >= 1 && bb <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(yb) {
        for (const bb in gb.Triggers)
          if (Object.prototype.hasOwnProperty.call(gb.Triggers, bb)) {
            if (parseInt(bb) === yb) return !0
          } return !1
      }
    }
    gb.Triggers = {};
    var Gy, Oy, Ry, vb, ib, My, Yy, Xy = Wy(38662);
    ! function(yb) {
      yb[yb.Generic = 0] = "Generic", yb[yb.Keyboard = 1] = "Keyboard", yb[yb.Mouse = 2] = "Mouse", yb[yb.Touch = 3] = "Touch", yb[yb.DualShock = 4] = "DualShock", yb[yb.Xbox = 5] = "Xbox", yb[yb.Switch = 6] = "Switch", yb[yb.DualSense = 7] = "DualSense"
    }(Gy || (Gy = {})),
    function(yb) {
      yb[yb.Horizontal = 0] = "Horizontal", yb[yb.Vertical = 1] = "Vertical", yb[yb.LeftClick = 2] = "LeftClick", yb[yb.MiddleClick = 3] = "MiddleClick", yb[yb.RightClick = 4] = "RightClick", yb[yb.BrowserBack = 5] = "BrowserBack", yb[yb.BrowserForward = 6] = "BrowserForward", yb[yb.MouseWheelX = 7] = "MouseWheelX", yb[yb.MouseWheelY = 8] = "MouseWheelY", yb[yb.MouseWheelZ = 9] = "MouseWheelZ", yb[yb.Move = 12] = "Move"
    }(Oy || (Oy = {})),
    function(yb) {
      yb[yb.Horizontal = 0] = "Horizontal", yb[yb.Vertical = 1] = "Vertical", yb[yb.LeftClick = 2] = "LeftClick", yb[yb.MiddleClick = 3] = "MiddleClick", yb[yb.RightClick = 4] = "RightClick", yb[yb.BrowserBack = 5] = "BrowserBack", yb[yb.BrowserForward = 6] = "BrowserForward", yb[yb.MouseWheelX = 7] = "MouseWheelX", yb[yb.MouseWheelY = 8] = "MouseWheelY", yb[yb.MouseWheelZ = 9] = "MouseWheelZ", yb[yb.DeltaHorizontal = 10] = "DeltaHorizontal", yb[yb.DeltaVertical = 11] = "DeltaVertical"
    }(Ry || (Ry = {})),
    function(yb) {
      yb[yb.Cross = 0] = "Cross", yb[yb.Circle = 1] = "Circle", yb[yb.Square = 2] = "Square", yb[yb.Triangle = 3] = "Triangle", yb[yb.L1 = 4] = "L1", yb[yb.R1 = 5] = "R1", yb[yb.L2 = 6] = "L2", yb[yb.R2 = 7] = "R2", yb[yb.Share = 8] = "Share", yb[yb.Options = 9] = "Options", yb[yb.L3 = 10] = "L3", yb[yb.R3 = 11] = "R3", yb[yb.DPadUp = 12] = "DPadUp", yb[yb.DPadDown = 13] = "DPadDown", yb[yb.DPadLeft = 14] = "DPadLeft", yb[yb.DPadRight = 15] = "DPadRight", yb[yb.Home = 16] = "Home", yb[yb.TouchPad = 17] = "TouchPad", yb[yb.LStickXAxis = 18] = "LStickXAxis", yb[yb.LStickYAxis = 19] = "LStickYAxis", yb[yb.RStickXAxis = 20] = "RStickXAxis", yb[yb.RStickYAxis = 21] = "RStickYAxis"
    }(vb || (vb = {})),
    function(yb) {
      yb[yb.Cross = 0] = "Cross", yb[yb.Circle = 1] = "Circle", yb[yb.Square = 2] = "Square", yb[yb.Triangle = 3] = "Triangle", yb[yb.L1 = 4] = "L1", yb[yb.R1 = 5] = "R1", yb[yb.L2 = 6] = "L2", yb[yb.R2 = 7] = "R2", yb[yb.Create = 8] = "Create", yb[yb.Options = 9] = "Options", yb[yb.L3 = 10] = "L3", yb[yb.R3 = 11] = "R3", yb[yb.DPadUp = 12] = "DPadUp", yb[yb.DPadDown = 13] = "DPadDown", yb[yb.DPadLeft = 14] = "DPadLeft", yb[yb.DPadRight = 15] = "DPadRight", yb[yb.Home = 16] = "Home", yb[yb.TouchPad = 17] = "TouchPad", yb[yb.LStickXAxis = 18] = "LStickXAxis", yb[yb.LStickYAxis = 19] = "LStickYAxis", yb[yb.RStickXAxis = 20] = "RStickXAxis", yb[yb.RStickYAxis = 21] = "RStickYAxis"
    }(ib || (ib = {})),
    function(yb) {
      yb[yb.A = 0] = "A", yb[yb.B = 1] = "B", yb[yb.X = 2] = "X", yb[yb.Y = 3] = "Y", yb[yb.LB = 4] = "LB", yb[yb.RB = 5] = "RB", yb[yb.LT = 6] = "LT", yb[yb.RT = 7] = "RT", yb[yb.Back = 8] = "Back", yb[yb.Start = 9] = "Start", yb[yb.LS = 10] = "LS", yb[yb.RS = 11] = "RS", yb[yb.DPadUp = 12] = "DPadUp", yb[yb.DPadDown = 13] = "DPadDown", yb[yb.DPadLeft = 14] = "DPadLeft", yb[yb.DPadRight = 15] = "DPadRight", yb[yb.Home = 16] = "Home", yb[yb.LStickXAxis = 17] = "LStickXAxis", yb[yb.LStickYAxis = 18] = "LStickYAxis", yb[yb.RStickXAxis = 19] = "RStickXAxis", yb[yb.RStickYAxis = 20] = "RStickYAxis"
    }(My || (My = {})),
    function(yb) {
      yb[yb.B = 0] = "B", yb[yb.A = 1] = "A", yb[yb.Y = 2] = "Y", yb[yb.X = 3] = "X", yb[yb.L = 4] = "L", yb[yb.R = 5] = "R", yb[yb.ZL = 6] = "ZL", yb[yb.ZR = 7] = "ZR", yb[yb.Minus = 8] = "Minus", yb[yb.Plus = 9] = "Plus", yb[yb.LS = 10] = "LS", yb[yb.RS = 11] = "RS", yb[yb.DPadUp = 12] = "DPadUp", yb[yb.DPadDown = 13] = "DPadDown", yb[yb.DPadLeft = 14] = "DPadLeft", yb[yb.DPadRight = 15] = "DPadRight", yb[yb.Home = 16] = "Home", yb[yb.Capture = 17] = "Capture", yb[yb.LStickXAxis = 18] = "LStickXAxis", yb[yb.LStickYAxis = 19] = "LStickYAxis", yb[yb.RStickXAxis = 20] = "RStickXAxis", yb[yb.RStickYAxis = 21] = "RStickYAxis"
    }(Yy || (Yy = {}));
    var ny = Wy(38664);
    class uy {
      static CreateDeviceEvent(yb, bb, Wy, Uy, hy, fy, Zy) {
        switch (yb) {
          case Gy.Keyboard:
            return this._CreateKeyboardEvent(Wy, Uy, hy, fy);
          case Gy.Mouse:
            if (Wy === Oy.MouseWheelX || Wy === Oy.MouseWheelY || Wy === Oy.MouseWheelZ) return this._CreateWheelEvent(yb, bb, Wy, Uy, hy, fy);
          case Gy.Touch:
            return this._CreatePointerEvent(yb, bb, Wy, Uy, hy, fy, Zy);
          default:
            throw `Unable to generate event for device ${Gy[yb]}`
        }
      }
      static _CreatePointerEvent(yb, bb, Wy, Uy, hy, fy, Zy) {
        const cb = this._CreateMouseEvent(yb, bb, Wy, Uy, hy, fy);
        yb === Gy.Mouse ? (cb.deviceType = Gy.Mouse, cb.pointerId = 1, cb.pointerType = "mouse") : (cb.deviceType = Gy.Touch, cb.pointerId = Zy ?? bb, cb.pointerType = "touch");
        let Py = 0;
        return Py += hy.pollInput(yb, bb, Oy.LeftClick), Py += 2 * hy.pollInput(yb, bb, Oy.RightClick), Py += 4 * hy.pollInput(yb, bb, Oy.MiddleClick), cb.buttons = Py, Wy === Oy.Move ? cb.type = "pointermove" : Wy >= Oy.LeftClick && Wy <= Oy.RightClick && (cb.type = 1 === Uy ? "pointerdown" : "pointerup", cb.button = Wy - 2), cb
      }
      static _CreateWheelEvent(yb, bb, Wy, Uy, hy, fy) {
        const Zy = this._CreateMouseEvent(yb, bb, Wy, Uy, hy, fy);
        switch (Zy.pointerId = 1, Zy.type = "wheel", Zy.deltaMode = ny.c.DOM_DELTA_PIXEL, Zy.deltaX = 0, Zy.deltaY = 0, Zy.deltaZ = 0, Wy) {
          case Oy.MouseWheelX:
            Zy.deltaX = Uy;
            break;
          case Oy.MouseWheelY:
            Zy.deltaY = Uy;
            break;
          case Oy.MouseWheelZ:
            Zy.deltaZ = Uy
        }
        return Zy
      }
      static _CreateMouseEvent(yb, bb, Wy, Uy, hy, fy) {
        const Zy = this._CreateEvent(fy),
          cb = hy.pollInput(yb, bb, Oy.Horizontal),
          Py = hy.pollInput(yb, bb, Oy.Vertical);
        return fy ? (Zy.movementX = 0, Zy.movementY = 0, Zy.offsetX = Zy.movementX - fy.getBoundingClientRect().x, Zy.offsetY = Zy.movementY - fy.getBoundingClientRect().y) : (Zy.movementX = hy.pollInput(yb, bb, 10), Zy.movementY = hy.pollInput(yb, bb, 11), Zy.offsetX = 0, Zy.offsetY = 0), this._CheckNonCharacterKeys(Zy, hy), Zy.clientX = cb, Zy.clientY = Py, Zy.x = cb, Zy.y = Py, Zy.deviceType = yb, Zy.deviceSlot = bb, Zy.inputIndex = Wy, Zy
      }
      static _CreateKeyboardEvent(yb, bb, Wy, Uy) {
        const hy = this._CreateEvent(Uy);
        return this._CheckNonCharacterKeys(hy, Wy), hy.deviceType = Gy.Keyboard, hy.deviceSlot = 0, hy.inputIndex = yb, hy.type = 1 === bb ? "keydown" : "keyup", hy.key = String.fromCharCode(yb), hy.keyCode = yb, hy
      }
      static _CheckNonCharacterKeys(yb, bb) {
        const Wy = bb.isDeviceAvailable(Gy.Keyboard),
          Uy = Wy && 1 === bb.pollInput(Gy.Keyboard, 0, 18),
          hy = Wy && 1 === bb.pollInput(Gy.Keyboard, 0, 17),
          fy = Wy && (1 === bb.pollInput(Gy.Keyboard, 0, 91) || 1 === bb.pollInput(Gy.Keyboard, 0, 92) || 1 === bb.pollInput(Gy.Keyboard, 0, 93)),
          Zy = Wy && 1 === bb.pollInput(Gy.Keyboard, 0, 16);
        yb.altKey = Uy, yb.ctrlKey = hy, yb.metaKey = fy, yb.shiftKey = Zy
      }
      static _CreateEvent(yb) {
        const bb = {
          preventDefault: () => {}
        };
        return bb.target = yb, bb
      }
    }
    class rb {
      constructor(yb, bb, Wy) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(yb, bb, ((yb, bb, Uy, hy) => {
          const fy = uy.CreateDeviceEvent(yb, bb, Uy, hy, this);
          Wy(yb, bb, fy)
        })) : this._createDummyNativeInput()
      }
      pollInput(yb, bb, Wy) {
        return this._nativeInput.pollInput(yb, bb, Wy)
      }
      isDeviceAvailable(yb) {
        return yb === Gy.Mouse || yb === Gy.Touch
      }
      dispose() {
        this._nativeInput.dispose()
      }
      _createDummyNativeInput() {
        return {
          pollInput: () => 0,
          isDeviceAvailable: () => !1,
          dispose: () => {}
        }
      }
    }
    const Hy = Object.keys(Oy).length / 2;
    class ab {
      constructor(yb, bb, Wy, hy) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = Uy.k.IsSafari(), this._usingMacOs = (0, Cy.h)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = yb => {}, this._keyboardUpEvent = yb => {}, this._keyboardBlurEvent = yb => {}, this._pointerMoveEvent = yb => {}, this._pointerDownEvent = yb => {}, this._pointerUpEvent = yb => {}, this._pointerCancelEvent = yb => {}, this._pointerCancelTouch = yb => {}, this._pointerLeaveEvent = yb => {}, this._pointerWheelEvent = yb => {}, this._pointerBlurEvent = yb => {}, this._pointerMacOsChromeOutEvent = yb => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, Cy.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, Cy.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = yb => {}, this._gamepadDisconnectedEvent = yb => {}, this._eventPrefix = Uy.k.GetPointerPrefix(yb), this._engine = yb, this._onDeviceConnected = bb, this._onDeviceDisconnected = Wy, this._onInputChanged = hy, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(yb, bb, Wy) {
        const hy = this._inputs[yb][bb];
        if (!hy) throw `Unable to find device ${Gy[yb]}`;
        yb >= Gy.DualShock && yb <= Gy.DualSense && this._updateDevice(yb, bb, Wy);
        const fy = hy[Wy];
        if (void 0 === fy) throw `Unable to find input ${Wy} for device ${Gy[yb]} in slot ${bb}`;
        return Wy === Oy.Move && Uy.k.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), fy
      }
      isDeviceAvailable(yb) {
        return void 0 !== this._inputs[yb]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const yb = this?._engine.getInputElement();
        if (yb && (!this._eventsAttached || this._elementToAttachTo !== yb)) {
          if (this._disableEvents(), this._inputs)
            for (const yb of this._inputs)
              if (yb)
                for (const bb in yb) {
                  const Wy = yb[+bb];
                  if (Wy)
                    for (let yb = 0; yb < Wy.length; yb++) Wy[yb] = 0
                }
          this._elementToAttachTo = yb, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "qh", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const yb = navigator.getGamepads();
          for (const bb of yb) bb && this._addGamePad(bb)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(Gy.Mouse, 0, 0, 0)
      }
      _addGamePad(yb) {
        const bb = this._getGamepadDeviceType(yb.id),
          Wy = yb.index;
        this._gamepads = this._gamepads || new Array(yb.index + 1), this._registerDevice(bb, Wy, yb.buttons.length + yb.axes.length), this._gamepads[Wy] = bb
      }
      _addPointerDevice(yb, bb, Wy, Uy) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(yb, bb, Hy);
        const hy = this._inputs[yb][bb];
        hy[0] = Wy, hy[1] = Uy
      }
      _registerDevice(yb, bb, Wy) {
        if (void 0 === bb) throw `Unable to register device ${Gy[yb]} to undefined slot.`;
        if (this._inputs[yb] || (this._inputs[yb] = {}), !this._inputs[yb][bb]) {
          const Uy = new Array(Wy);
          Uy.fill(0), this._inputs[yb][bb] = Uy, this._onDeviceConnected(yb, bb)
        }
      }
      _unregisterDevice(yb, bb) {
        this._inputs[yb][bb] && (delete this._inputs[yb][bb], this._onDeviceDisconnected(yb, bb))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = yb => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(Gy.Keyboard, 0, 255));
          const bb = this._inputs[Gy.Keyboard][0];
          if (bb) {
            bb[yb.keyCode] = 1;
            const Wy = yb;
            Wy.inputIndex = yb.keyCode, this._usingMacOs && yb.metaKey && "Meta" !== yb.key && (this._metaKeys.includes(yb.keyCode) || this._metaKeys.push(yb.keyCode)), this._onInputChanged(Gy.Keyboard, 0, Wy)
          }
        }, this._keyboardUpEvent = yb => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(Gy.Keyboard, 0, 255));
          const bb = this._inputs[Gy.Keyboard][0];
          if (bb) {
            bb[yb.keyCode] = 0;
            const Wy = yb;
            if (Wy.inputIndex = yb.keyCode, this._usingMacOs && "Meta" === yb.key && this._metaKeys.length > 0) {
              for (const yb of this._metaKeys) {
                const Wy = uy.CreateDeviceEvent(Gy.Keyboard, 0, yb, 0, this, this._elementToAttachTo);
                bb[yb] = 0, this._onInputChanged(Gy.Keyboard, 0, Wy)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(Gy.Keyboard, 0, Wy)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const yb = this._inputs[Gy.Keyboard][0];
            for (let bb = 0; bb < yb.length; bb++)
              if (0 !== yb[bb]) {
                yb[bb] = 0;
                const Wy = uy.CreateDeviceEvent(Gy.Keyboard, 0, bb, 0, this, this._elementToAttachTo);
                this._onInputChanged(Gy.Keyboard, 0, Wy)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, Cy.h)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let Uy = 0; Uy < this._maxTouchPoints; Uy++) this._activeTouchIds[Uy] = -1;
        this._pointerMoveEvent = yb => {
          const bb = this._getPointerType(yb);
          let Wy = bb === Gy.Mouse ? 0 : this._activeTouchIds.indexOf(yb.pointerId);
          if (bb === Gy.Touch && -1 === Wy) {
            if (0 === yb.buttons) return;
            const hy = this._activeTouchIds.indexOf(-1);
            if (!(hy >= 0)) return void Uy.k.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            Wy = hy, this._activeTouchIds[hy] = yb.pointerId, this._onDeviceConnected(bb, Wy)
          }
          this._inputs[bb] || (this._inputs[bb] = {}), this._inputs[bb][Wy] || this._addPointerDevice(bb, Wy, yb.clientX, yb.clientY);
          const hy = this._inputs[bb][Wy];
          if (hy) {
            const Uy = yb;
            Uy.inputIndex = Oy.Move, hy[Oy.Horizontal] = yb.clientX, hy[Oy.Vertical] = yb.clientY, bb === Gy.Touch && 0 === hy[Oy.LeftClick] && (hy[Oy.LeftClick] = 1), void 0 === yb.pointerId && (yb.pointerId = this._mouseId), this._onInputChanged(bb, Wy, Uy), this._usingSafari || -1 === yb.button || (Uy.inputIndex = yb.button + 2, hy[yb.button + 2] = hy[yb.button + 2] ? 0 : 1, this._onInputChanged(bb, Wy, Uy))
          }
        }, this._pointerDownEvent = yb => {
          const bb = this._getPointerType(yb);
          let Wy = bb === Gy.Mouse ? 0 : yb.pointerId;
          if (bb === Gy.Touch) {
            let bb = this._activeTouchIds.indexOf(yb.pointerId);
            if (-1 === bb && (bb = this._activeTouchIds.indexOf(-1)), !(bb >= 0)) return void Uy.k.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            Wy = bb, this._activeTouchIds[bb] = yb.pointerId
          }
          this._inputs[bb] || (this._inputs[bb] = {}), this._inputs[bb][Wy] ? bb === Gy.Touch && this._onDeviceConnected(bb, Wy) : this._addPointerDevice(bb, Wy, yb.clientX, yb.clientY);
          const hy = this._inputs[bb][Wy];
          if (hy) {
            const Uy = hy[Oy.Horizontal],
              Zy = hy[Oy.Vertical];
            if (bb === Gy.Mouse) {
              if (void 0 === yb.pointerId && (yb.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (fy) {}
            } else if (yb.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(yb.pointerId)
            } catch (fy) {}
            hy[Oy.Horizontal] = yb.clientX, hy[Oy.Vertical] = yb.clientY, hy[yb.button + 2] = 1;
            const cb = yb;
            cb.inputIndex = yb.button + 2, this._onInputChanged(bb, Wy, cb), Uy === yb.clientX && Zy === yb.clientY || (cb.inputIndex = Oy.Move, this._onInputChanged(bb, Wy, cb))
          }
        }, this._pointerUpEvent = yb => {
          const bb = this._getPointerType(yb),
            Wy = bb === Gy.Mouse ? 0 : this._activeTouchIds.indexOf(yb.pointerId);
          if (bb === Gy.Touch) {
            if (-1 === Wy) return;
            this._activeTouchIds[Wy] = -1
          }
          const Uy = this._inputs[bb]?.[Wy];
          let hy = yb.button,
            fy = Uy && 0 !== Uy[hy + 2];
          if (!fy && this._isUsingFirefox && this._usingMacOs && Uy && (hy = 2 === hy ? 0 : 2, fy = 0 !== Uy[hy + 2]), fy) {
            const fy = Uy[Oy.Horizontal],
              Zy = Uy[Oy.Vertical];
            Uy[Oy.Horizontal] = yb.clientX, Uy[Oy.Vertical] = yb.clientY, Uy[hy + 2] = 0;
            const cb = yb;
            void 0 === yb.pointerId && (yb.pointerId = this._mouseId), fy === yb.clientX && Zy === yb.clientY || (cb.inputIndex = Oy.Move, this._onInputChanged(bb, Wy, cb)), cb.inputIndex = hy + 2, bb === Gy.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : yb.pointerId && this._elementToAttachTo.hasPointerCapture?.(yb.pointerId) && this._elementToAttachTo.releasePointerCapture(yb.pointerId), this._onInputChanged(bb, Wy, cb), bb === Gy.Touch && this._onDeviceDisconnected(bb, Wy)
          }
        }, this._pointerCancelTouch = yb => {
          const bb = this._activeTouchIds.indexOf(yb);
          if (-1 === bb) return;
          this._elementToAttachTo.hasPointerCapture?.(yb) && this._elementToAttachTo.releasePointerCapture(yb), this._inputs[Gy.Touch][bb][Oy.LeftClick] = 0;
          const Wy = uy.CreateDeviceEvent(Gy.Touch, bb, Oy.LeftClick, 0, this, this._elementToAttachTo, yb);
          this._onInputChanged(Gy.Touch, bb, Wy), this._activeTouchIds[bb] = -1, this._onDeviceDisconnected(Gy.Touch, bb)
        }, this._pointerCancelEvent = yb => {
          if ("mouse" === yb.pointerType) {
            const yb = this._inputs[Gy.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let bb = Oy.LeftClick; bb <= Oy.BrowserForward; bb++)
              if (1 === yb[bb]) {
                yb[bb] = 0;
                const Wy = uy.CreateDeviceEvent(Gy.Mouse, 0, bb, 0, this, this._elementToAttachTo);
                this._onInputChanged(Gy.Mouse, 0, Wy)
              }
          } else this._pointerCancelTouch(yb.pointerId)
        }, this._pointerLeaveEvent = yb => {
          "pen" === yb.pointerType && this._pointerCancelTouch(yb.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let yb = !1;
        const bb = function() {};
        try {
          const Wy = Object.defineProperty({}, "passive", {
            get: function() {
              yb = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", bb, Wy), this._elementToAttachTo.removeEventListener("test", bb, Wy)
        } catch (Wy) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(Gy.Mouse)) {
            const yb = this._inputs[Gy.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let bb = Oy.LeftClick; bb <= Oy.BrowserForward; bb++)
              if (1 === yb[bb]) {
                yb[bb] = 0;
                const Wy = uy.CreateDeviceEvent(Gy.Mouse, 0, bb, 0, this, this._elementToAttachTo);
                this._onInputChanged(Gy.Mouse, 0, Wy)
              }
          }
          if (this.isDeviceAvailable(Gy.Touch)) {
            const yb = this._inputs[Gy.Touch];
            for (let bb = 0; bb < this._activeTouchIds.length; bb++) {
              const Wy = this._activeTouchIds[bb];
              if (this._elementToAttachTo.hasPointerCapture?.(Wy) && this._elementToAttachTo.releasePointerCapture(Wy), -1 !== Wy && 1 === yb[bb]?.[Oy.LeftClick]) {
                yb[bb][Oy.LeftClick] = 0;
                const Uy = uy.CreateDeviceEvent(Gy.Touch, bb, Oy.LeftClick, 0, this, this._elementToAttachTo, Wy);
                this._onInputChanged(Gy.Touch, bb, Uy), this._activeTouchIds[bb] = -1, this._onDeviceDisconnected(Gy.Touch, bb)
              }
            }
          }
        }, this._pointerWheelEvent = yb => {
          const bb = Gy.Mouse;
          this._inputs[bb] || (this._inputs[bb] = []), this._inputs[bb][0] || (this._pointerActive = !0, this._registerDevice(bb, 0, Hy));
          const Wy = this._inputs[bb][0];
          if (Wy) {
            Wy[Oy.MouseWheelX] = yb.deltaX || 0, Wy[Oy.MouseWheelY] = yb.deltaY || yb.wheelDelta || 0, Wy[Oy.MouseWheelZ] = yb.deltaZ || 0;
            const Uy = yb;
            void 0 === yb.pointerId && (yb.pointerId = this._mouseId), 0 !== Wy[Oy.MouseWheelX] && (Uy.inputIndex = Oy.MouseWheelX, this._onInputChanged(bb, 0, Uy)), 0 !== Wy[Oy.MouseWheelY] && (Uy.inputIndex = Oy.MouseWheelY, this._onInputChanged(bb, 0, Uy)), 0 !== Wy[Oy.MouseWheelZ] && (Uy.inputIndex = Oy.MouseWheelZ, this._onInputChanged(bb, 0, Uy))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = yb => {
          yb.buttons > 1 && this._pointerCancelEvent(yb)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "qh", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!yb && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(Gy.Mouse)) {
            const yb = this._inputs[Gy.Mouse][0];
            yb[Oy.MouseWheelX] = 0, yb[Oy.MouseWheelY] = 0, yb[Oy.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = yb => {
          this._addGamePad(yb.gamepad)
        }, this._gamepadDisconnectedEvent = yb => {
          if (this._gamepads) {
            const bb = this._getGamepadDeviceType(yb.gamepad.id),
              Wy = yb.gamepad.index;
            this._unregisterDevice(bb, Wy), delete this._gamepads[Wy]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(yb, bb, Wy) {
        const Uy = navigator.getGamepads()[bb];
        if (Uy && yb === this._gamepads[bb]) {
          const hy = this._inputs[yb][bb];
          Wy >= Uy.buttons.length ? hy[Wy] = Uy.axes[Wy - Uy.buttons.length].valueOf() : hy[Wy] = Uy.buttons[Wy].value
        }
      }
      _getGamepadDeviceType(yb) {
        return -1 !== yb.indexOf("054c") ? -1 !== yb.indexOf("0ce6") ? Gy.DualSense : Gy.DualShock : -1 !== yb.indexOf("Xbox One") || -1 !== yb.search("Xbox 360") || -1 !== yb.search("xinput") || -1 !== yb.indexOf("045e") && -1 === yb.indexOf("Surface Dock") ? Gy.Xbox : -1 !== yb.indexOf("057e") ? Gy.Switch : Gy.Generic
      }
      _getPointerType(yb) {
        let bb = Gy.Mouse;
        return ("touch" === yb.pointerType || "pen" === yb.pointerType || yb.touches) && (bb = Gy.Touch), bb
      }
    }
    class Fy {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = bb, this.deviceSlot = Wy, this.onInputChangedObservable = new Zy.c, this._deviceInputSystem = yb
      }
      getInput(yb) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, yb)
      }
    }
    class py {
      constructor(yb) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = yb => {
          for (let bb = 0; bb < this._devices.length; bb++) {
            const Wy = this._devices[bb];
            for (const Uy in Wy) {
              const Wy = +Uy;
              yb._addDevice(new Fy(this._deviceInputSystem, bb, Wy))
            }
          }
          this._registeredManagers.push(yb)
        }, this.unregisterManager = yb => {
          const bb = this._registeredManagers.indexOf(yb);
          bb > -1 && this._registeredManagers.splice(bb, 1)
        };
        const bb = Object.keys(Gy).length / 2;
        this._devices = new Array(bb);
        const Wy = (yb, bb) => {
            this._devices[yb] || (this._devices[yb] = new Array), this._devices[yb][bb] || (this._devices[yb][bb] = bb);
            for (const Wy of this._registeredManagers) {
              const Uy = new Fy(this._deviceInputSystem, yb, bb);
              Wy._addDevice(Uy)
            }
          },
          Uy = (yb, bb) => {
            this._devices[yb]?.[bb] && delete this._devices[yb][bb];
            for (const Wy of this._registeredManagers) Wy._removeDevice(yb, bb)
          },
          hy = (yb, bb, Wy) => {
            if (Wy)
              for (const Uy of this._registeredManagers) Uy._onInputChanged(yb, bb, Wy)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new rb(Wy, Uy, hy) : this._deviceInputSystem = new ab(yb, Wy, Uy, hy)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class Ly {
      getDeviceSource(yb, bb) {
        if (void 0 === bb) {
          if (void 0 === this._firstDevice[yb]) return null;
          bb = this._firstDevice[yb]
        }
        return this._devices[yb] && void 0 !== this._devices[yb][bb] ? this._devices[yb][bb] : null
      }
      getDeviceSources(yb) {
        return this._devices[yb] ? this._devices[yb].filter((yb => !!yb)) : []
      }
      constructor(yb) {
        const bb = Object.keys(Gy).length / 2;
        this._devices = new Array(bb), this._firstDevice = new Array(bb), this._engine = yb, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new py(yb)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new Zy.c((yb => {
          for (const bb of this._devices)
            if (bb)
              for (const Wy of bb) Wy && this.onDeviceConnectedObservable.notifyObserver(yb, Wy)
        })), this.onDeviceDisconnectedObservable = new Zy.c, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = yb.Nby.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.Nby.remove(this._onDisposeObserver)
      }
      _addDevice(yb) {
        this._devices[yb.deviceType] || (this._devices[yb.deviceType] = []), this._devices[yb.deviceType][yb.deviceSlot] || (this._devices[yb.deviceType][yb.deviceSlot] = yb, this._updateFirstDevices(yb.deviceType)), this.onDeviceConnectedObservable.notifyObservers(yb)
      }
      _removeDevice(yb, bb) {
        const Wy = this._devices[yb]?.[bb];
        this.onDeviceDisconnectedObservable.notifyObservers(Wy), this._devices[yb]?.[bb] && delete this._devices[yb][bb], this._updateFirstDevices(yb)
      }
      _onInputChanged(yb, bb, Wy) {
        this._devices[yb]?.[bb]?.onInputChangedObservable.notifyObservers(Wy)
      }
      _updateFirstDevices(yb) {
        switch (yb) {
          case Gy.Keyboard:
          case Gy.Mouse:
            this._firstDevice[yb] = 0;
            break;
          case Gy.Touch:
          case Gy.DualSense:
          case Gy.DualShock:
          case Gy.Xbox:
          case Gy.Switch:
          case Gy.Generic: {
            delete this._firstDevice[yb];
            const bb = this._devices[yb];
            if (bb)
              for (let Wy = 0; Wy < bb.length; Wy++)
                if (bb[Wy]) {
                  this._firstDevice[yb] = Wy;
                  break
                } break
          }
        }
      }
    }
    var Qy = Wy(38670);
    class jb {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get uB() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(yb) {
        this._singleClick = yb
      }
      set uB(yb) {
        this._doubleClick = yb
      }
      set hasSwiped(yb) {
        this._hasSwiped = yb
      }
      set ignore(yb) {
        this._ignore = yb
      }
    }
    class Dy {
      constructor(yb) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new By.m(0, 0), this._previousStartingPointerPosition = new By.m(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = yb || Ty.c.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(yb) {
        return this._meshUnderPointerId[yb] || null
      }
      get unTranslatedPointer() {
        return new By.m(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(yb) {
        this._pointerX = yb
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(yb) {
        this._pointerY = yb
      }
      _updatePointerPosition(yb) {
        const bb = this._scene.xh().getInputElementClientRect();
        bb && (this._pointerX = yb.clientX - bb.left, this._pointerY = yb.clientY - bb.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(yb, bb) {
        const Wy = this._scene,
          Uy = Wy.xh(),
          hy = Uy.getInputElement();
        hy && (hy.tabIndex = Uy.canvasTabIndex, Wy.doNotHandleCursors || (hy.style.cursor = Wy.defaultCursor)), this._setCursorAndPointerOverMesh(yb, bb, Wy);
        for (const cb of Wy._pointerMoveStage) {
          yb = yb || this._pickMove(bb);
          const Wy = !!yb?.pickedMesh;
          yb = cb.action(this._unTranslatedPointerX, this._unTranslatedPointerY, yb, Wy, hy)
        }
        const fy = bb.inputIndex >= Oy.MouseWheelX && bb.inputIndex <= Oy.MouseWheelZ ? Jy.d.POINTERWHEEL : Jy.d.POINTERMOVE;
        let Zy;
        Wy.onPointerMove && (yb = yb || this._pickMove(bb), Wy.onPointerMove(bb, yb, fy)), yb ? (Zy = new Jy.l(fy, bb, yb), this._setRayOnPointerInfo(yb, bb)) : (Zy = new Jy.l(fy, bb, null, this), this._movePointerInfo = Zy), Wy.onPointerObservable.hasObservers() && Wy.onPointerObservable.notifyObservers(Zy, fy)
      }
      _setRayOnPointerInfo(yb, bb) {
        const Wy = this._scene;
        yb && Qy.d._IsPickingAvailable && (yb.ray || (yb.ray = Wy.createPickingRay(bb.offsetX, bb.offsetY, By.c.Identity(), Wy.activeCamera)))
      }
      _addCameraPointerObserver(yb, bb) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(yb, bb)
      }
      _removeCameraPointerObserver(yb) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(yb)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(yb, bb, Wy) {
        const Uy = this._scene,
          hy = new Jy.h(Wy, bb, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return yb && (hy.originalPickingInfo = yb, hy.ray = yb.ray, "xr-near" === bb.pointerType && yb.originMesh && (hy.nearInteractionPickingInfo = yb)), Uy.onPrePointerObservable.notifyObservers(hy, Wy), !!hy.skipOnPointerObservable
      }
      _pickMove(yb) {
        const bb = this._scene,
          Wy = bb.cU(this._unTranslatedPointerX, this._unTranslatedPointerY, bb.pointerMovePredicate, bb.pointerMoveFastCheck, bb.cameraToUseForPointers, bb.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(Wy, yb, bb), Wy
      }
      _updateMeshUnderPointer() {
        const yb = this._scene;
        if (!yb.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || yb.skipPointerMovePicking || !yb.cameraToUseForPointers && !yb.activeCamera) return;
        this._ensurePointerMovePredicate();
        const bb = this._pointerX,
          Wy = this._pointerY,
          Uy = this._unTranslatedPointerX,
          hy = this._unTranslatedPointerY;
        for (const fy of this._latestPointerMoveEvents.values()) this._pointerX = fy.pointerX, this._pointerY = fy.pointerY, this._unTranslatedPointerX = fy.unTranslatedPointerX, this._unTranslatedPointerY = fy.unTranslatedPointerY, this._pickMove(fy.event);
        this._pointerX = bb, this._pointerY = Wy, this._unTranslatedPointerX = Uy, this._unTranslatedPointerY = hy
      }
      _ensurePointerMovePredicate() {
        const yb = this._scene;
        yb.pointerMovePredicate || (yb.pointerMovePredicate = bb => (bb._isPointerMovePickable ?? bb.Kf) && bb.isVisible && bb.isReady() && bb.isEnabled() && (bb.enablePointerMoveEvents || yb.constantlyUpdateMeshUnderPointer || null !== bb._getActionManagerForTrigger()) && (!yb.cameraToUseForPointers || 0 !== (yb.cameraToUseForPointers.layerMask & bb.layerMask)))
      }
      _setCursorAndPointerOverMesh(yb, bb, Wy) {
        const Uy = Wy.xh().getInputElement();
        if (yb?.pickedMesh) {
          if (this.setPointerOverMesh(yb.pickedMesh, bb.pointerId, yb, bb), !Wy.doNotHandleCursors && Uy && this._pointerOverMesh) {
            const yb = this._pointerOverMesh._getActionManagerForTrigger();
            yb && yb.hasPointerTriggers && (Uy.style.cursor = yb.hoverCursor || Wy.hoverCursor)
          }
        } else this.setPointerOverMesh(null, bb.pointerId, yb, bb)
      }
      simulatePointerMove(yb, bb) {
        const Wy = new PointerEvent("pointermove", bb);
        Wy.inputIndex = Oy.Move, this._checkPrePointerObservable(yb, Wy, Jy.d.POINTERMOVE) || this._processPointerMove(yb, Wy)
      }
      simulatePointerDown(yb, bb) {
        const Wy = new PointerEvent("pointerdown", bb);
        Wy.inputIndex = Wy.button + 2, this._checkPrePointerObservable(yb, Wy, Jy.d.POINTERDOWN) || this._processPointerDown(yb, Wy)
      }
      _processPointerDown(yb, bb) {
        const Wy = this._scene;
        if (yb?.pickedMesh) {
          this._pickedDownMesh = yb.pickedMesh;
          const Uy = yb.pickedMesh._getActionManagerForTrigger();
          if (Uy) {
            if (Uy.hasPickTriggers) switch (Uy.processTrigger(5, new sy(yb.pickedMesh, Wy.pointerX, Wy.pointerY, yb.pickedMesh, bb, yb)), bb.button) {
              case 0:
                Uy.processTrigger(2, new sy(yb.pickedMesh, Wy.pointerX, Wy.pointerY, yb.pickedMesh, bb, yb));
                break;
              case 1:
                Uy.processTrigger(4, new sy(yb.pickedMesh, Wy.pointerX, Wy.pointerY, yb.pickedMesh, bb, yb));
                break;
              case 2:
                Uy.processTrigger(3, new sy(yb.pickedMesh, Wy.pointerX, Wy.pointerY, yb.pickedMesh, bb, yb))
            }
            Uy.hasSpecificTrigger(8) && window.setTimeout((() => {
              const yb = Wy.cU(this._unTranslatedPointerX, this._unTranslatedPointerY, (yb => yb.Kf && yb.isVisible && yb.isReady() && yb.actionManager && yb.actionManager.hasSpecificTrigger(8) && yb === this._pickedDownMesh), !1, Wy.cameraToUseForPointers);
              yb?.pickedMesh && Uy && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > Dy.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, Uy.processTrigger(8, sy.CreateNew(yb.pickedMesh, bb)))
            }), Dy.LongPressDelay)
          }
        } else
          for (const fy of Wy._pointerDownStage) yb = fy.action(this._unTranslatedPointerX, this._unTranslatedPointerY, yb, bb, !1);
        let Uy;
        const hy = Jy.d.POINTERDOWN;
        yb ? (Wy.onPointerDown && Wy.onPointerDown(bb, yb, hy), Uy = new Jy.l(hy, bb, yb), this._setRayOnPointerInfo(yb, bb)) : Uy = new Jy.l(hy, bb, null, this), Wy.onPointerObservable.hasObservers() && Wy.onPointerObservable.notifyObservers(Uy, hy)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(yb, bb, Wy) {
        const Uy = new PointerEvent("pointerup", bb);
        Uy.inputIndex = Oy.Move;
        const hy = new jb;
        Wy ? hy.uB = !0 : hy.singleClick = !0, this._checkPrePointerObservable(yb, Uy, Jy.d.POINTERUP) || this._processPointerUp(yb, Uy, hy)
      }
      _processPointerUp(yb, bb, Wy) {
        const Uy = this._scene;
        if (yb?.pickedMesh) {
          if (this._pickedUpMesh = yb.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (Uy.onPointerPick && Uy.onPointerPick(bb, yb), Wy.singleClick && !Wy.ignore && Uy.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const Wy = Jy.d.POINTERPICK,
              hy = new Jy.l(Wy, bb, yb);
            this._setRayOnPointerInfo(yb, bb), Uy.onPointerObservable.notifyObservers(hy, Wy)
          }
          const hy = yb.pickedMesh._getActionManagerForTrigger();
          if (hy && !Wy.ignore) {
            hy.processTrigger(7, sy.CreateNew(yb.pickedMesh, bb, yb)), !Wy.hasSwiped && Wy.singleClick && hy.processTrigger(1, sy.CreateNew(yb.pickedMesh, bb, yb));
            const Uy = yb.pickedMesh._getActionManagerForTrigger(6);
            Wy.uB && Uy && Uy.processTrigger(6, sy.CreateNew(yb.pickedMesh, bb, yb))
          }
        } else if (!Wy.ignore)
          for (const hy of Uy._pointerUpStage) yb = hy.action(this._unTranslatedPointerX, this._unTranslatedPointerY, yb, bb, Wy.uB);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const yb = this._pickedDownMesh._getActionManagerForTrigger(16);
          yb && yb.processTrigger(16, sy.CreateNew(this._pickedDownMesh, bb))
        }
        if (!Wy.ignore) {
          const hy = new Jy.l(Jy.d.POINTERUP, bb, yb);
          if (this._setRayOnPointerInfo(yb, bb), Uy.onPointerObservable.notifyObservers(hy, Jy.d.POINTERUP), Uy.onPointerUp && Uy.onPointerUp(bb, yb, Jy.d.POINTERUP), !Wy.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let hy = 0;
            if (Wy.singleClick ? hy = Jy.d.POINTERTAP : Wy.uB && (hy = Jy.d.POINTERDOUBLETAP), hy) {
              const Wy = new Jy.l(hy, bb, yb);
              Uy.onPointerObservable.hasObservers() && Uy.onPointerObservable.hasSpecificMask(hy) && Uy.onPointerObservable.notifyObservers(Wy, hy)
            }
          }
        }
      }
      isPointerCaptured() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[yb]
      }
      attachControl() {
        let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const hy = this._scene,
          fy = hy.xh();
        Uy || (Uy = fy.getInputElement()), this._alreadyAttached && this.detachControl(), Uy && (this._alreadyAttachedTo = Uy), this._deviceSourceManager = new Ly(fy), this._initActionManager = yb => {
          if (!this._meshPickProceed) {
            const bb = hy.skipPointerUpPicking || 0 === hy._registeredActions && !this._checkForPicking() && !hy.onPointerUp ? null : hy.cU(this._unTranslatedPointerX, this._unTranslatedPointerY, hy.pointerUpPredicate, hy.pointerUpFastCheck, hy.cameraToUseForPointers, hy.pointerUpTrianglePredicate);
            this._currentPickResult = bb, bb && (yb = bb.hit && bb.pickedMesh ? bb.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return yb
        }, this._delayedSimpleClick = (yb, bb, Wy) => {
          if ((Date.now() - this._previousStartingPointerTime > Dy.DoubleClickDelay && !this._doubleClickOccured || yb !== this._previousButtonPressed) && (this._doubleClickOccured = !1, bb.singleClick = !0, bb.ignore = !1, this._delayedClicks[yb])) {
            const bb = this._delayedClicks[yb].evt,
              Wy = Jy.d.POINTERTAP,
              Uy = new Jy.l(Wy, bb, this._currentPickResult);
            hy.onPointerObservable.hasObservers() && hy.onPointerObservable.hasSpecificMask(Wy) && hy.onPointerObservable.notifyObservers(Uy, Wy), this._delayedClicks[yb] = null
          }
        }, this._initClickEvent = (yb, bb, Wy, Uy) => {
          const hy = new jb;
          this._currentPickResult = null;
          let fy = null,
            Zy = yb.hasSpecificMask(Jy.d.POINTERPICK) || bb.hasSpecificMask(Jy.d.POINTERPICK) || yb.hasSpecificMask(Jy.d.POINTERTAP) || bb.hasSpecificMask(Jy.d.POINTERTAP) || yb.hasSpecificMask(Jy.d.POINTERDOUBLETAP) || bb.hasSpecificMask(Jy.d.POINTERDOUBLETAP);
          !Zy && gb && (fy = this._initActionManager(fy, hy), fy && (Zy = fy.hasPickTriggers));
          let cb = !1;
          if (Zy = Zy && !this._isMultiTouchGesture, Zy) {
            const Zy = Wy.button;
            if (hy.hasSwiped = this._isPointerSwiping(), !hy.hasSwiped) {
              let Py = !Dy.ExclusiveDoubleClickMode;
              if (Py || (Py = !yb.hasSpecificMask(Jy.d.POINTERDOUBLETAP) && !bb.hasSpecificMask(Jy.d.POINTERDOUBLETAP), Py && !gb.HasSpecificTrigger(6) && (fy = this._initActionManager(fy, hy), fy && (Py = !fy.hasSpecificTrigger(6)))), Py)(Date.now() - this._previousStartingPointerTime > Dy.DoubleClickDelay || Zy !== this._previousButtonPressed) && (hy.singleClick = !0, Uy(hy, this._currentPickResult), cb = !0);
              else {
                const yb = {
                  evt: Wy,
                  clickInfo: hy,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, Zy, hy, Uy), Dy.DoubleClickDelay)
                };
                this._delayedClicks[Zy] = yb
              }
              let oy = yb.hasSpecificMask(Jy.d.POINTERDOUBLETAP) || bb.hasSpecificMask(Jy.d.POINTERDOUBLETAP);
              !oy && gb.HasSpecificTrigger(6) && (fy = this._initActionManager(fy, hy), fy && (oy = fy.hasSpecificTrigger(6))), oy && (Zy === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < Dy.DoubleClickDelay && !this._doubleClickOccured ? (hy.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Zy, Dy.ExclusiveDoubleClickMode ? (this._delayedClicks[Zy] && (clearTimeout(this._delayedClicks[Zy]?.timeoutId), this._delayedClicks[Zy] = null), Uy(hy, this._previousPickResult)) : Uy(hy, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, hy.uB = !0, hy.ignore = !1, Dy.ExclusiveDoubleClickMode && this._delayedClicks[Zy] && (clearTimeout(this._delayedClicks[Zy]?.timeoutId), this._delayedClicks[Zy] = null), Uy(hy, this._currentPickResult)), cb = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Zy))
            }
          }
          cb || Uy(hy, this._currentPickResult)
        }, this._onPointerMove = yb => {
          if (this._updatePointerPosition(yb), this._latestPointerMoveEvents.set(yb.pointerId, {
              event: yb,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > Dy.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > Dy.DragMovementThreshold), fy.isPointerLock && fy._verifyPointerLock(), this._checkPrePointerObservable(null, yb, yb.inputIndex >= Oy.MouseWheelX && yb.inputIndex <= Oy.MouseWheelZ ? Jy.d.POINTERWHEEL : Jy.d.POINTERMOVE)) return;
          if (!hy.cameraToUseForPointers && !hy.activeCamera) return;
          if (hy.skipPointerMovePicking) return void this._processPointerMove(new qb.b, yb);
          this._ensurePointerMovePredicate();
          const bb = hy._registeredActions > 0 || hy.constantlyUpdateMeshUnderPointer ? this._pickMove(yb) : null;
          this._processPointerMove(bb, yb)
        }, this._onPointerDown = yb => {
          const bb = this._activePointerIds.indexOf(-1);
          if (-1 === bb ? this._activePointerIds.push(yb.pointerId) : this._activePointerIds[bb] = yb.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, Dy.ExclusiveDoubleClickMode)
            for (let Uy = 0; Uy < this._delayedClicks.length; Uy++)
              if (this._delayedClicks[Uy])
                if (yb.button === Uy) clearTimeout(this._delayedClicks[Uy]?.timeoutId);
                else {
                  const yb = this._delayedClicks[Uy].clickInfo;
                  this._doubleClickOccured = !1, yb.singleClick = !0, yb.ignore = !1;
                  const bb = this._delayedClicks[Uy].evt,
                    Wy = Jy.d.POINTERTAP,
                    fy = new Jy.l(Wy, bb, this._currentPickResult);
                  hy.onPointerObservable.hasObservers() && hy.onPointerObservable.hasSpecificMask(Wy) && hy.onPointerObservable.notifyObservers(fy, Wy), this._delayedClicks[Uy] = null
                } if (this._updatePointerPosition(yb), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = yb.button), hy.preventDefaultOnPointerDown && Uy && (yb.preventDefault(), Uy.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, yb, Jy.d.POINTERDOWN)) return;
          if (!hy.cameraToUseForPointers && !hy.activeCamera) return;
          let Wy;
          this._pointerCaptures[yb.pointerId] = !0, hy.pointerDownPredicate || (hy.pointerDownPredicate = yb => yb.Kf && yb.isVisible && yb.isReady() && yb.isEnabled() && (!hy.cameraToUseForPointers || 0 !== (hy.cameraToUseForPointers.layerMask & yb.layerMask))), this._pickedDownMesh = null, Wy = hy.skipPointerDownPicking || 0 === hy._registeredActions && !this._checkForPicking() && !hy.onPointerDown ? new qb.b : hy.cU(this._unTranslatedPointerX, this._unTranslatedPointerY, hy.pointerDownPredicate, hy.pointerDownFastCheck, hy.cameraToUseForPointers, hy.pointerDownTrianglePredicate), this._processPointerDown(Wy, yb)
        }, this._onPointerUp = yb => {
          const bb = this._activePointerIds.indexOf(yb.pointerId); - 1 !== bb && (this._activePointerIds[bb] = -1, this._activePointerIdsCount--, "touch" === yb.pointerType && this._latestPointerMoveEvents.delete(yb.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(yb), hy.preventDefaultOnPointerUp && Uy && (yb.preventDefault(), Uy.focus()), this._initClickEvent(hy.onPrePointerObservable, hy.onPointerObservable, yb, ((bb, Wy) => {
            if (hy.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !bb.ignore)) {
              if (this._checkPrePointerObservable(null, yb, Jy.d.POINTERUP)) return this._swipeButtonPressed === yb.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === yb.buttons && (this._pointerCaptures[yb.pointerId] = !1));
              bb.hasSwiped || (bb.singleClick && hy.onPrePointerObservable.hasSpecificMask(Jy.d.POINTERTAP) && this._checkPrePointerObservable(null, yb, Jy.d.POINTERTAP) && (this._skipPointerTap = !0), bb.uB && hy.onPrePointerObservable.hasSpecificMask(Jy.d.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, yb, Jy.d.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[yb.pointerId] ? (0 === yb.buttons && (this._pointerCaptures[yb.pointerId] = !1), (hy.cameraToUseForPointers || hy.activeCamera) && (hy.pointerUpPredicate || (hy.pointerUpPredicate = yb => yb.Kf && yb.isVisible && yb.isReady() && yb.isEnabled() && (!hy.cameraToUseForPointers || 0 !== (hy.cameraToUseForPointers.layerMask & yb.layerMask))), !this._meshPickProceed && (gb && gb.HasTriggers || this._checkForPicking() || hy.onPointerUp) && this._initActionManager(null, bb), Wy || (Wy = this._currentPickResult), this._processPointerUp(Wy, yb, bb), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === yb.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === yb.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = yb => {
          const bb = Xy.b.KEYDOWN;
          if (hy.onPreKeyboardObservable.hasObservers()) {
            const Wy = new Xy.d(bb, yb);
            if (hy.onPreKeyboardObservable.notifyObservers(Wy, bb), Wy.skipOnKeyboardObservable) return
          }
          if (hy.onKeyboardObservable.hasObservers()) {
            const Wy = new Xy.e(bb, yb);
            hy.onKeyboardObservable.notifyObservers(Wy, bb)
          }
          hy.actionManager && hy.actionManager.processTrigger(14, sy.CreateNewFromScene(hy, yb))
        }, this._onKeyUp = yb => {
          const bb = Xy.b.KEYUP;
          if (hy.onPreKeyboardObservable.hasObservers()) {
            const Wy = new Xy.d(bb, yb);
            if (hy.onPreKeyboardObservable.notifyObservers(Wy, bb), Wy.skipOnKeyboardObservable) return
          }
          if (hy.onKeyboardObservable.hasObservers()) {
            const Wy = new Xy.e(bb, yb);
            hy.onKeyboardObservable.notifyObservers(Wy, bb)
          }
          hy.actionManager && hy.actionManager.processTrigger(15, sy.CreateNewFromScene(hy, yb))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((Uy => {
          Uy.deviceType === Gy.Mouse ? Uy.onInputChangedObservable.add((hy => {
            this._originMouseEvent = hy, hy.inputIndex === Oy.LeftClick || hy.inputIndex === Oy.MiddleClick || hy.inputIndex === Oy.RightClick || hy.inputIndex === Oy.BrowserBack || hy.inputIndex === Oy.BrowserForward ? bb && 1 === Uy.getInput(hy.inputIndex) ? this._onPointerDown(hy) : yb && 0 === Uy.getInput(hy.inputIndex) && this._onPointerUp(hy) : Wy && (hy.inputIndex === Oy.Move ? this._onPointerMove(hy) : hy.inputIndex !== Oy.MouseWheelX && hy.inputIndex !== Oy.MouseWheelY && hy.inputIndex !== Oy.MouseWheelZ || this._onPointerMove(hy))
          })) : Uy.deviceType === Gy.Touch ? Uy.onInputChangedObservable.add((hy => {
            hy.inputIndex === Oy.LeftClick && (bb && 1 === Uy.getInput(hy.inputIndex) ? (this._onPointerDown(hy), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : yb && 0 === Uy.getInput(hy.inputIndex) && (this._onPointerUp(hy), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), Wy && hy.inputIndex === Oy.Move && this._onPointerMove(hy)
          })) : Uy.deviceType === Gy.Keyboard && Uy.onInputChangedObservable.add((yb => {
            "keydown" === yb.type ? this._onKeyDown(yb) : "keyup" === yb.type && this._onKeyUp(yb)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0,
          Uy = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[bb] === yb && (!yb || !yb._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const hy = this._meshUnderPointerId[bb];
        let fy;
        hy && (fy = hy._getActionManagerForTrigger(10), fy && fy.processTrigger(10, new sy(hy, this._pointerX, this._pointerY, yb, Uy, {
          pointerId: bb
        }))), yb ? (this._meshUnderPointerId[bb] = yb, this._pointerOverMesh = yb, fy = yb._getActionManagerForTrigger(9), fy && fy.processTrigger(9, new sy(yb, this._pointerX, this._pointerY, yb, Uy, {
          pointerId: bb,
          pickResult: Wy
        }))) : (delete this._meshUnderPointerId[bb], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: yb,
          pointerId: bb
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(yb) {
        this._pointerOverMesh === yb && (this._pointerOverMesh = null), this._pickedDownMesh === yb && (this._pickedDownMesh = null), this._pickedUpMesh === yb && (this._pickedUpMesh = null);
        for (const bb in this._meshUnderPointerId) this._meshUnderPointerId[bb] === yb && delete this._meshUnderPointerId[bb]
      }
    }
    Dy.DragMovementThreshold = 10, Dy.LongPressDelay = 500, Dy.DoubleClickDelay = 300, Dy.ExclusiveDoubleClickMode = !1;
    var tb = Wy(38422),
      wy = Wy(35919),
      kb = Wy(36425);
    class Ny {
      static get UniqueId() {
        const yb = this._UniqueIdCounter;
        return this._UniqueIdCounter++, yb
      }
    }
    Ny._UniqueIdCounter = 1;
    var zb = Wy(38511),
      Iy = Wy(38675),
      xb = Wy(35869);
    class Ay {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var dy, yW, bW, Wb, Ub, hb, fb, Zb, cW, Pb, ob, Bb, Kb, eb, qW, sb, Sb, Eb, lb, mW, Cb, Tb, Vb, Jb, gW, Gb, Ob, Rb, vW, iW, Mb, Yb, Xb, nb, ub, rW, Hb, aW, Fb, pb, Lb, Qb, jW, Db, tW, wb, kW, Nb, zW, Ib, xW, Ab, db, yU = Wy(37350),
      bU = Wy(35909);
    const WW = new By.p,
      UW = new By.p;
    var hW;
    ! function(yb) {
      yb[yb.BackwardCompatible = 0] = "BackwardCompatible", yb[yb.Intermediate = 1] = "Intermediate", yb[yb.Aggressive = 2] = "Aggressive"
    }(hW || (hW = {}));
    class fW {
      static DefaultMaterialFactory(yb) {
        throw (0, Vy.g)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, Vy.g)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(yb) {
        yb !== this._clearColor && (this._clearColor = yb, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(yb) {
        if (yb !== this._performancePriority) {
          switch (this._performancePriority = yb, yb) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(yb)
        }
      }
      set forceWireframe(yb) {
        this._forceWireframe !== yb && (this._forceWireframe = yb, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(yb) {
        this._skipFrustumClipping !== yb && (this._skipFrustumClipping = yb)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(yb) {
        this._forcePointsCloud !== yb && (this._forcePointsCloud = yb, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(yb) {
        this._environmentTexture !== yb && (this._environmentTexture = yb, this.onEnvironmentTextureChangedObservable.notifyObservers(yb), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let yb = [];
        yb = yb.concat(this.meshes), yb = yb.concat(this.lights), yb = yb.concat(this.cameras), yb = yb.concat(this.transformNodes);
        for (const bb of this.skeletons) yb = yb.concat(bb.bones);
        return yb
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(yb) {
        this._animationPropertiesOverride = yb
      }
      set onDispose(yb) {
        this._onDisposeObserver && this.Nby.remove(this._onDisposeObserver), this._onDisposeObserver = this.Nby.add(yb)
      }
      set beforeRender(yb) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), yb && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(yb))
      }
      set afterRender(yb) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), yb && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(yb))
      }
      set beforeCameraRender(yb) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(yb)
      }
      set afterCameraRender(yb) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(yb)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(yb) {
        this._pointerPickingConfiguration.pointerDownPredicate = yb
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(yb) {
        this._pointerPickingConfiguration.pointerUpPredicate = yb
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(yb) {
        this._pointerPickingConfiguration.pointerMovePredicate = yb
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(yb) {
        this._pointerPickingConfiguration.pointerDownFastCheck = yb
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(yb) {
        this._pointerPickingConfiguration.pointerUpFastCheck = yb
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(yb) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = yb
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(yb) {
        this._pointerPickingConfiguration.skipPointerMovePicking = yb
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(yb) {
        this._pointerPickingConfiguration.skipPointerDownPicking = yb
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(yb) {
        this._pointerPickingConfiguration.skipPointerUpPicking = yb
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return Dy.DragMovementThreshold
      }
      static set DragMovementThreshold(yb) {
        Dy.DragMovementThreshold = yb
      }
      static get LongPressDelay() {
        return Dy.LongPressDelay
      }
      static set LongPressDelay(yb) {
        Dy.LongPressDelay = yb
      }
      static get DoubleClickDelay() {
        return Dy.DoubleClickDelay
      }
      static set DoubleClickDelay(yb) {
        Dy.DoubleClickDelay = yb
      }
      static get ExclusiveDoubleClickMode() {
        return Dy.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(yb) {
        Dy.ExclusiveDoubleClickMode = yb
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? By.n.ZeroReadOnly
      }
      bindEyePosition(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Uy = this._eyePosition,
          hy = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          fy = this.floatingOriginOffset,
          Zy = WW.set(Uy.x, Uy.y, Uy.z, hy ? -1 : 1),
          cb = Zy.subtractFromFloatsToRef(fy.x, fy.y, fy.z, 0, UW);
        return yb && (Wy ? yb.setFloat3(bb, cb.x, cb.y, cb.z) : yb.setVector4(bb, cb)), Zy
      }
      finalizeSceneUbo() {
        const yb = this.getSceneUniformBuffer(),
          bb = this.bindEyePosition(null),
          Wy = this.floatingOriginOffset;
        return yb.updateFloat4("vEyePosition", bb.x - Wy.x, bb.y - Wy.y, bb.z - Wy.z, bb.w), yb.update(), yb
      }
      set useRightHandedSystem(yb) {
        this._useRightHandedSystem !== yb && (this._useRightHandedSystem = yb, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(yb) {
        this._currentStepId = yb
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(yb) {
        this._fogEnabled !== yb && (this._fogEnabled = yb, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(yb) {
        this._fogMode !== yb && (this._fogMode = yb, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(yb) {
        this._shadowsEnabled !== yb && (this._shadowsEnabled = yb, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(yb) {
        this._lightsEnabled !== yb && (this._lightsEnabled = yb, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(yb) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), yb && (this._unObserveActiveCameras = (0, xb.h)(yb, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = yb
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(yb) {
        yb !== this._activeCamera && (this._activeCamera = yb, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return fW.DefaultMaterialFactory !== fW._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = fW.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(yb) {
        this._defaultMaterial = yb
      }
      set texturesEnabled(yb) {
        this._texturesEnabled !== yb && (this._texturesEnabled = yb, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(yb) {
        if (this._frameGraph) return this._frameGraph = yb, void(yb || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = yb, yb && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(yb) {
        this._skeletonsEnabled !== yb && (this._skeletonsEnabled = yb, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = fW.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const yb of this._transientComponents) yb.register();
          this._transientComponents.length = 0
        }
      }
      Foy(yb) {
        this._components.push(yb), this._transientComponents.push(yb);
        const bb = yb;
        bb.addFromContainer && bb.serialize && this._serializableComponents.push(bb)
      }
      _getComponent(yb) {
        for (const bb of this._components)
          if (bb.name === yb) return bb;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(yb, bb) {
        this._inputManager = new Dy(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new wy.e(.2, .2, .3, 1), this.onClearColorChangedObservable = new Zy.c, this.ambientColor = new wy.d(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new Zy.c, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.YV = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.Nby = new Zy.c, this._onDisposeObserver = null, this.onBeforeRenderObservable = new Zy.c, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new Zy.c, this.onAfterRenderCameraObservable = new Zy.c, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new Zy.c, this.onAfterAnimationsObservable = new Zy.c, this.onBeforeDrawPhaseObservable = new Zy.c, this.onAfterDrawPhaseObservable = new Zy.c, this.onReadyObservable = new Zy.c, this.onBeforeCameraRenderObservable = new Zy.c, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new Zy.c, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new Zy.c, this.onAfterActiveMeshesEvaluationObservable = new Zy.c, this.onBeforeParticlesRenderingObservable = new Zy.c, this.onAfterParticlesRenderingObservable = new Zy.c, this.onDataLoadedObservable = new Zy.c, this.onNewCameraAddedObservable = new Zy.c, this.onCameraRemovedObservable = new Zy.c, this.onNewLightAddedObservable = new Zy.c, this.onLightRemovedObservable = new Zy.c, this.onNewGeometryAddedObservable = new Zy.c, this.onGeometryRemovedObservable = new Zy.c, this.onNewTransformNodeAddedObservable = new Zy.c, this.onTransformNodeRemovedObservable = new Zy.c, this.onNewMeshAddedObservable = new Zy.c, this.onMeshRemovedObservable = new Zy.c, this.onNewSkeletonAddedObservable = new Zy.c, this.onSkeletonRemovedObservable = new Zy.c, this.onNewParticleSystemAddedObservable = new Zy.c, this.onParticleSystemRemovedObservable = new Zy.c, this.onNewAnimationGroupAddedObservable = new Zy.c, this.onAnimationGroupRemovedObservable = new Zy.c, this.onNewMaterialAddedObservable = new Zy.c, this.onNewMultiMaterialAddedObservable = new Zy.c, this.onMaterialRemovedObservable = new Zy.c, this.onMultiMaterialRemovedObservable = new Zy.c, this.onNewTextureAddedObservable = new Zy.c, this.onTextureRemovedObservable = new Zy.c, this.onNewFrameGraphAddedObservable = new Zy.c, this.onFrameGraphRemovedObservable = new Zy.c, this.onNewObjectRendererAddedObservable = new Zy.c, this.onObjectRendererRemovedObservable = new Zy.c, this.onNewPostProcessAddedObservable = new Zy.c, this.onPostProcessRemovedObservable = new Zy.c, this.onNewEffectLayerAddedObservable = new Zy.c, this.onEffectLayerRemovedObservable = new Zy.c, this.onBeforeRenderTargetsRenderObservable = new Zy.c, this.onAfterRenderTargetsRenderObservable = new Zy.c, this.onBeforeStepObservable = new Zy.c, this.onAfterStepObservable = new Zy.c, this.onActiveCameraChanged = new Zy.c, this.onActiveCamerasChanged = new Zy.c, this.onBeforeRenderingGroupObservable = new Zy.c, this.onAfterRenderingGroupObservable = new Zy.c, this.onMeshImportedObservable = new Zy.c, this.onAnimationFileImportedObservable = new Zy.c, this.onEnvironmentTextureChangedObservable = new Zy.c, this.onMeshUnderPointerUpdatedObservable = new Zy.c, this._registeredForLateAnimationBindings = new cb.d(256), this._pointerPickingConfiguration = new Ay, this.onPrePointerObservable = new Zy.c, this.onPointerObservable = new Zy.c, this.onPreKeyboardObservable = new Zy.c, this.onKeyboardObservable = new Zy.c, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = fW.FOGMODE_NONE, this.fogColor = new wy.d(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.QWy = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new By.n(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new cb.d(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new tb.c, this._activeIndices = new tb.c, this._activeParticles = new tb.c, this._activeBones = new tb.c, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new cb.e(256), this._processedMaterials = new cb.e(256), this._renderTargets = new cb.d(256), this._materialsRenderTargets = new cb.d(256), this._activeParticleSystems = new cb.e(256), this._activeSkeletons = new cb.d(32), this._softwareSkinnedMeshes = new cb.d(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = By.c.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = mb.c.Create(), this._beforeClearStage = mb.c.Create(), this._beforeRenderTargetClearStage = mb.c.Create(), this._gatherRenderTargetsStage = mb.c.Create(), this._gatherActiveCameraRenderTargetsStage = mb.c.Create(), this._isReadyForMeshStage = mb.c.Create(), this._beforeEvaluateActiveMeshStage = mb.c.Create(), this._evaluateSubMeshStage = mb.c.Create(), this._preActiveMeshStage = mb.c.Create(), this._cameraDrawRenderTargetStage = mb.c.Create(), this._beforeCameraDrawStage = mb.c.Create(), this._beforeRenderTargetDrawStage = mb.c.Create(), this._beforeRenderingGroupDrawStage = mb.c.Create(), this._beforeRenderingMeshStage = mb.c.Create(), this._afterRenderingMeshStage = mb.c.Create(), this._afterRenderingGroupDrawStage = mb.c.Create(), this._afterCameraDrawStage = mb.c.Create(), this._afterCameraPostProcessStage = mb.c.Create(), this._afterRenderTargetDrawStage = mb.c.Create(), this._afterRenderTargetPostProcessStage = mb.c.Create(), this._afterRenderStage = mb.c.Create(), this._pointerMoveStage = mb.c.Create(), this._pointerDownStage = mb.c.Create(), this._pointerUpStage = mb.c.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new Zy.c, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const Wy = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...bb
        };
        this.defaultCameraLayerMask = Wy.defaultCameraLayerMask, this.defaultRenderableLayerMask = Wy.defaultRenderableLayerMask, yb = this._engine = yb || Ty.c.LastCreatedEngine, Wy.virtual ? yb._virtualScenes.push(this) : (Ty.c._LastCreatedScene = this, yb.scenes.push(this)), (yb.getCreationOptions().useLargeWorldRendering || bb?.useFloatingOrigin) && ((0, Ey.e)(), this._floatingOriginScene = this, Ey.c.kWy = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new ly.e(this), Sy.b && (this.postProcessManager = new Sy.b(this)), (0, Cy.i)() && this.attachControl(), this._createUbo(), Ky.b && (this._imageProcessingConfiguration = new Ky.b), this.setDefaultCandidateProviders(), Wy.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = Wy.useMaterialMeshMap, this.useClonedMeshMap = Wy.useClonedMeshMap, bb && bb.virtual || yb.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(yb) {
        return this._defaultSubMeshCandidates.data = yb.vJ, this._defaultSubMeshCandidates.length = yb.vJ.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = yb => this._getDefaultSubMeshCandidates(yb), this.getIntersectingSubMeshCandidates = (yb, bb) => this._getDefaultSubMeshCandidates(yb), this.getCollidingSubMeshCandidates = (yb, bb) => this._getDefaultSubMeshCandidates(yb)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(yb) {
        this._inputManager.pointerX = yb
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(yb) {
        this._inputManager.pointerY = yb
      }
      getCachedMaterial() {
        return this._cachedMaterial
      }
      getCachedEffect() {
        return this._cachedEffect
      }
      getCachedVisibility() {
        return this._cachedVisibility
      }
      isCachedMaterialInvalid(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== bb || this._cachedMaterial !== yb || this._cachedVisibility !== Wy
      }
      xh() {
        return this._engine
      }
      getTotalVertices() {
        return this._totalVertices.current
      }
      get totalVerticesPerfCounter() {
        return this._totalVertices
      }
      getActiveIndices() {
        return this._activeIndices.current
      }
      get totalActiveIndicesPerfCounter() {
        return this._activeIndices
      }
      getActiveParticles() {
        return this._activeParticles.current
      }
      get activeParticlesPerfCounter() {
        return this._activeParticles
      }
      getActiveBones() {
        return this._activeBones.current
      }
      get activeBonesPerfCounter() {
        return this._activeBones
      }
      getActiveMeshes() {
        return this._activeMeshes
      }
      getAnimationRatio() {
        return void 0 !== this._animationRatio ? this._animationRatio : 1
      }
      getRenderId() {
        return this._renderId
      }
      getFrameId() {
        return this._frameId
      }
      incrementRenderId() {
        this._renderId++
      }
      _createUbo() {
        this.setSceneUniformBuffer(this.createSceneUniformBuffer())
      }
      simulatePointerMove(yb, bb) {
        return this._inputManager.simulatePointerMove(yb, bb), this
      }
      simulatePointerDown(yb, bb) {
        return this._inputManager.simulatePointerDown(yb, bb), this
      }
      simulatePointerUp(yb, bb, Wy) {
        return this._inputManager.simulatePointerUp(yb, bb, Wy), this
      }
      isPointerCaptured() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(yb)
      }
      attachControl() {
        let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(yb, bb, Wy)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let yb, bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const Wy = this.xh(),
          Uy = Wy.currentRenderPassId;
        Wy.currentRenderPassId = this.activeCamera?.renderPassId ?? Uy;
        let hy = !0;
        for (this._pendingData.length > 0 && (hy = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && hy && (hy = this.depthPeelingRenderer.isReady()), bb && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), yb = 0; yb < this.meshes.length; yb++) {
          const Uy = this.meshes[yb];
          if (!Uy.vJ || 0 === Uy.vJ.length) continue;
          if (!Uy.isReady(!0)) {
            hy = !1;
            continue
          }
          const fy = Uy.hasThinInstances || "InstancedMesh" === Uy.getClassName() || "InstancedLinesMesh" === Uy.getClassName() || Wy.getCaps().instancedArrays && Uy.instances.length > 0;
          for (let yb = 0, bb = this._isReadyForMeshStage; yb < bb.length; yb++) {
            bb[yb].action(Uy, fy) || (hy = !1)
          }
          if (!bb) continue;
          const Zy = Uy.material || this.defaultMaterial;
          if (Zy)
            if (Zy._storeEffectOnSubMeshes)
              for (const yb of Uy.vJ) {
                const bb = yb.Wh();
                bb && bb.hasRenderTargetTextures && null != bb.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(bb) && (this._processedMaterials.push(bb), this._materialsRenderTargets.concatWithNoDuplicate(bb.getRenderTargetTextures()))
              } else Zy.hasRenderTargetTextures && null != Zy.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Zy) && (this._processedMaterials.push(Zy), this._materialsRenderTargets.concatWithNoDuplicate(Zy.getRenderTargetTextures()))
        }
        if (bb) {
          for (yb = 0; yb < this._materialsRenderTargets.length; ++yb) {
            this._materialsRenderTargets.data[yb].isReadyForRendering() || (hy = !1)
          }
          for (yb = 0; yb < this.customRenderTargets.length; ++yb) {
            this.customRenderTargets[yb].isReadyForRendering() || (hy = !1)
          }
        }
        for (yb = 0; yb < this.geometries.length; yb++) {
          2 === this.geometries[yb].delayLoadState && (hy = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const fy of this.activeCameras) fy.isReady(!0) || (hy = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (hy = !1));
        for (const fy of this.YV) fy.isReady() || (hy = !1);
        if (this.proceduralTexturesEnabled)
          for (const fy of this.proceduralTextures) fy.isReady() || (hy = !1);
        if (this.layers)
          for (const fy of this.layers) fy.isReady() || (hy = !1);
        if (this.effectLayers)
          for (const fy of this.effectLayers) fy.isLayerReady() || (hy = !1);
        for (const fy of this._isReadyChecks) fy.isReady() || (hy = !1);
        return Wy.areAllEffectsReady() || (hy = !1), Wy.currentRenderPassId = Uy, hy
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(yb) {
        this.onBeforeRenderObservable.add(yb)
      }
      unregisterBeforeRender(yb) {
        this.onBeforeRenderObservable.removeCallback(yb)
      }
      registerAfterRender(yb) {
        this.onAfterRenderObservable.add(yb)
      }
      unregisterAfterRender(yb) {
        this.onAfterRenderObservable.removeCallback(yb)
      }
      _executeOnceBeforeRender(yb) {
        const bb = () => {
          yb(), setTimeout((() => {
            this.unregisterBeforeRender(bb)
          }))
        };
        this.registerBeforeRender(bb)
      }
      executeOnceBeforeRender(yb, bb) {
        void 0 !== bb ? setTimeout((() => {
          this._executeOnceBeforeRender(yb)
        }), bb) : this._executeOnceBeforeRender(yb)
      }
      addPendingData(yb) {
        this._pendingData.push(yb)
      }
      removePendingData(yb) {
        const bb = this.isLoading,
          Wy = this._pendingData.indexOf(yb); - 1 !== Wy && this._pendingData.splice(Wy, 1), bb && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(yb) {
        -1 === this._isReadyChecks.indexOf(yb) && this._isReadyChecks.push(yb)
      }
      removeIsReadyCheck(yb) {
        const bb = this._isReadyChecks.indexOf(yb); - 1 !== bb && this._isReadyChecks.splice(bb, 1)
      }
      executeWhenReady(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(yb), null === this._executeWhenReadyTimeoutId && this._checkIsReady(bb)
      }
      async whenReadyAsync() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((bb => {
          this.executeWhenReady((() => {
            bb()
          }), yb)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = fy.d.Now;
        else if (this.onReadyTimeoutDuration > 0 && fy.d.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(yb)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(yb)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = fy.d.Now
      }
      getViewMatrix() {
        return this._viewMatrix
      }
      getProjectionMatrix() {
        return this._projectionMatrix
      }
      getInverseProjectionMatrix() {
        return this._inverseProjectionMatrix
      }
      getTransformMatrix() {
        return this._transformMatrix
      }
      setTransformMatrix(yb, bb, Wy, Uy) {
        this._multiviewSceneUboIsActive = !!(Wy && Uy && this._multiviewSceneUbo), this._viewUpdateFlag === yb.updateFlag && this._projectionUpdateFlag === bb.updateFlag || (this._viewUpdateFlag = yb.updateFlag, this._projectionUpdateFlag = bb.updateFlag, this._viewMatrix = yb, this._projectionMatrix = bb, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new By.c), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? kb.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = kb.d.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(Wy, Uy) : this._sceneUbo.useUbo && (this._sceneUbo.qcy("viewProjection", this._transformMatrix), this._sceneUbo.qcy("view", this._viewMatrix), this._sceneUbo.qcy("projection", this._projectionMatrix), this._sceneUbo.qcy("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(yb, bb) {
        const Wy = "boolean" === typeof bb ? bb : bb?.trackUBOsInFrame,
          Uy = new ey.b(this._engine, void 0, !1, yb ?? "Pf", void 0, Wy);
        return Uy.addUniform("viewProjection", 16), Uy.addUniform("view", 16), Uy.addUniform("projection", 16), Uy.addUniform("vEyePosition", 4), Uy.addUniform("inverseProjection", 16), Uy
      }
      setSceneUniformBuffer(yb) {
        this._sceneUbo = yb, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : By.n.ZeroReadOnly
      }
      getUniqueId() {
        return Ny.UniqueId
      }
      yKy(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(yb), yb._resyncLightSources(), yb.parent || yb._addToSceneRootNodes(), hy.b.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(yb)
          })), bb)) {
          const bb = yb.getChildMeshes();
          for (const yb of bb) this.yKy(yb)
        }
      }
      yUy(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Wy = this.meshes.indexOf(yb);
        if (-1 !== Wy && (this.meshes.splice(Wy, 1), yb.parent || yb._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(yb), this.onMeshRemovedObservable.notifyObservers(yb), bb) {
          const bb = yb.getChildMeshes();
          for (const yb of bb) this.yUy(yb)
        }
        return Wy
      }
      addTransformNode(yb) {
        this._blockEntityCollection || yb.kWy() === this && -1 !== yb._indexInSceneTransformNodesArray || (yb._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(yb), yb.parent || yb._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(yb))
      }
      removeTransformNode(yb) {
        const bb = yb._indexInSceneTransformNodesArray;
        if (-1 !== bb) {
          if (bb !== this.transformNodes.length - 1) {
            const yb = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[bb] = yb, yb._indexInSceneTransformNodesArray = bb
          }
          yb._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), yb.parent || yb._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(yb), bb
      }
      removeSkeleton(yb) {
        const bb = this.skeletons.indexOf(yb);
        return -1 !== bb && (this.skeletons.splice(bb, 1), this.onSkeletonRemovedObservable.notifyObservers(yb), this._executeActiveContainerCleanup(this._activeSkeletons)), bb
      }
      removeMorphTargetManager(yb) {
        const bb = this.morphTargetManagers.indexOf(yb);
        return -1 !== bb && this.morphTargetManagers.splice(bb, 1), bb
      }
      removeLight(yb) {
        const bb = this.lights.indexOf(yb);
        if (-1 !== bb) {
          for (const bb of this.meshes) bb._removeLightSource(yb, !1);
          this.lights.splice(bb, 1), this.sortLightsByPriority(), yb.parent || yb._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(yb)
        }
        return bb
      }
      removeCamera(yb) {
        const bb = this.cameras.indexOf(yb);
        if (-1 !== bb && (this.cameras.splice(bb, 1), yb.parent || yb._removeFromSceneRootNodes()), this.activeCameras) {
          const bb = this.activeCameras.indexOf(yb); - 1 !== bb && this.activeCameras.splice(bb, 1)
        }
        return this.activeCamera === yb && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(yb), bb
      }
      removeParticleSystem(yb) {
        const bb = this.YV.indexOf(yb);
        return -1 !== bb && (this.YV.splice(bb, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(yb), bb
      }
      removeAnimation(yb) {
        const bb = this.animations.indexOf(yb);
        return -1 !== bb && this.animations.splice(bb, 1), bb
      }
      stopAnimation(yb, bb, Wy) {}
      removeAnimationGroup(yb) {
        const bb = this.animationGroups.indexOf(yb);
        return -1 !== bb && this.animationGroups.splice(bb, 1), this.onAnimationGroupRemovedObservable.notifyObservers(yb), bb
      }
      removeMultiMaterial(yb) {
        const bb = this.multiMaterials.indexOf(yb);
        return -1 !== bb && this.multiMaterials.splice(bb, 1), this.onMultiMaterialRemovedObservable.notifyObservers(yb), bb
      }
      removeMaterial(yb) {
        const bb = yb._indexInSceneMaterialArray;
        if (-1 !== bb && bb < this.materials.length) {
          if (bb !== this.materials.length - 1) {
            const yb = this.materials[this.materials.length - 1];
            this.materials[bb] = yb, yb._indexInSceneMaterialArray = bb
          }
          yb._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(yb), bb
      }
      removeActionManager(yb) {
        const bb = this.actionManagers.indexOf(yb);
        return -1 !== bb && this.actionManagers.splice(bb, 1), bb
      }
      removeTexture(yb) {
        const bb = this.textures.indexOf(yb);
        return -1 !== bb && this.textures.splice(bb, 1), this.onTextureRemovedObservable.notifyObservers(yb), bb
      }
      removeFrameGraph(yb) {
        const bb = this.frameGraphs.indexOf(yb);
        return -1 !== bb && this.frameGraphs.splice(bb, 1), this.onFrameGraphRemovedObservable.notifyObservers(yb), bb
      }
      removeObjectRenderer(yb) {
        const bb = this.objectRenderers.indexOf(yb);
        return -1 !== bb && this.objectRenderers.splice(bb, 1), this.onObjectRendererRemovedObservable.notifyObservers(yb), bb
      }
      removePostProcess(yb) {
        const bb = this.postProcesses.indexOf(yb);
        return -1 !== bb && this.postProcesses.splice(bb, 1), this.onPostProcessRemovedObservable.notifyObservers(yb), bb
      }
      removeEffectLayer(yb) {
        const bb = this.effectLayers.indexOf(yb);
        return -1 !== bb && this.effectLayers.splice(bb, 1), this.onEffectLayerRemovedObservable.notifyObservers(yb), bb
      }
      addLight(yb) {
        if (!this._blockEntityCollection) {
          this.lights.push(yb), this.sortLightsByPriority(), yb.parent || yb._addToSceneRootNodes();
          for (const bb of this.meshes) - 1 === bb.lightSources.indexOf(yb) && (bb.lightSources.push(yb), bb._resyncLightSources());
          hy.b.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(yb)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(Iy.d.CompareLightsPriority)
      }
      addCamera(yb) {
        this._blockEntityCollection || (this.cameras.push(yb), hy.b.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(yb)
        })), yb.parent || yb._addToSceneRootNodes())
      }
      addSkeleton(yb) {
        this._blockEntityCollection || (this.skeletons.push(yb), hy.b.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(yb)
        })))
      }
      addParticleSystem(yb) {
        this._blockEntityCollection || (this.YV.push(yb), hy.b.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(yb)
        })))
      }
      addAnimation(yb) {
        this._blockEntityCollection || this.animations.push(yb)
      }
      addAnimationGroup(yb) {
        this._blockEntityCollection || (this.animationGroups.push(yb), hy.b.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(yb)
        })))
      }
      addMultiMaterial(yb) {
        this._blockEntityCollection || (this.multiMaterials.push(yb), hy.b.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(yb)
        })))
      }
      addMaterial(yb) {
        this._blockEntityCollection || yb.kWy() === this && -1 !== yb._indexInSceneMaterialArray || (yb._indexInSceneMaterialArray = this.materials.length, this.materials.push(yb), hy.b.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(yb)
        })))
      }
      addMorphTargetManager(yb) {
        this._blockEntityCollection || this.morphTargetManagers.push(yb)
      }
      addGeometry(yb) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[yb.uniqueId] = this.geometries.length), this.geometries.push(yb))
      }
      addActionManager(yb) {
        this.actionManagers.push(yb)
      }
      addTexture(yb) {
        this._blockEntityCollection || (this.textures.push(yb), this.onNewTextureAddedObservable.notifyObservers(yb))
      }
      addFrameGraph(yb) {
        this.frameGraphs.push(yb), hy.b.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(yb)
        }))
      }
      addObjectRenderer(yb) {
        this.objectRenderers.push(yb), hy.b.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(yb)
        }))
      }
      addPostProcess(yb) {
        this._blockEntityCollection || (this.postProcesses.push(yb), hy.b.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(yb)
        })))
      }
      addEffectLayer(yb) {
        this._blockEntityCollection || (this.effectLayers.push(yb), hy.b.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(yb)
        })))
      }
      switchActiveCamera(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = yb, bb && yb.attachControl())
      }
      setActiveCameraById(yb) {
        const bb = this.getCameraById(yb);
        return bb ? (this.activeCamera = bb, bb) : null
      }
      setActiveCameraByName(yb) {
        const bb = this.getCameraByName(yb);
        return bb ? (this.activeCamera = bb, bb) : null
      }
      getAnimationGroupByName(yb) {
        for (let bb = 0; bb < this.animationGroups.length; bb++)
          if (this.animationGroups[bb].name === yb) return this.animationGroups[bb];
        return null
      }
      _getMaterial(yb, bb) {
        for (let Wy = 0; Wy < this.materials.length; Wy++) {
          const yb = this.materials[Wy];
          if (bb(yb)) return yb
        }
        if (yb)
          for (let Wy = 0; Wy < this.multiMaterials.length; Wy++) {
            const yb = this.multiMaterials[Wy];
            if (bb(yb)) return yb
          }
        return null
      }
      getMaterialByUniqueID(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(yb, bb)
      }
      getMaterialByUniqueId(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(bb, (bb => bb.uniqueId === yb))
      }
      getMaterialById(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(bb, (bb => bb.id === yb))
      }
      getMaterialByName(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(bb, (bb => bb.name === yb))
      }
      getLastMaterialById(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let Wy = this.materials.length - 1; Wy >= 0; Wy--)
          if (this.materials[Wy].id === yb) return this.materials[Wy];
        if (bb)
          for (let Wy = this.multiMaterials.length - 1; Wy >= 0; Wy--)
            if (this.multiMaterials[Wy].id === yb) return this.multiMaterials[Wy];
        return null
      }
      getTextureByUniqueId(yb) {
        for (let bb = 0; bb < this.textures.length; bb++)
          if (this.textures[bb].uniqueId === yb) return this.textures[bb];
        return null
      }
      getTextureByName(yb) {
        for (let bb = 0; bb < this.textures.length; bb++)
          if (this.textures[bb].name === yb) return this.textures[bb];
        return null
      }
      getCameraById(yb) {
        for (let bb = 0; bb < this.cameras.length; bb++)
          if (this.cameras[bb].id === yb) return this.cameras[bb];
        return null
      }
      getCameraByUniqueId(yb) {
        for (let bb = 0; bb < this.cameras.length; bb++)
          if (this.cameras[bb].uniqueId === yb) return this.cameras[bb];
        return null
      }
      getCameraByName(yb) {
        for (let bb = 0; bb < this.cameras.length; bb++)
          if (this.cameras[bb].name === yb) return this.cameras[bb];
        return null
      }
      getBoneById(yb) {
        for (let bb = 0; bb < this.skeletons.length; bb++) {
          const Wy = this.skeletons[bb];
          for (let bb = 0; bb < Wy.bones.length; bb++)
            if (Wy.bones[bb].id === yb) return Wy.bones[bb]
        }
        return null
      }
      getBoneByName(yb) {
        for (let bb = 0; bb < this.skeletons.length; bb++) {
          const Wy = this.skeletons[bb];
          for (let bb = 0; bb < Wy.bones.length; bb++)
            if (Wy.bones[bb].name === yb) return Wy.bones[bb]
        }
        return null
      }
      getLightByName(yb) {
        for (let bb = 0; bb < this.lights.length; bb++)
          if (this.lights[bb].name === yb) return this.lights[bb];
        return null
      }
      getLightById(yb) {
        for (let bb = 0; bb < this.lights.length; bb++)
          if (this.lights[bb].id === yb) return this.lights[bb];
        return null
      }
      getLightByUniqueId(yb) {
        for (let bb = 0; bb < this.lights.length; bb++)
          if (this.lights[bb].uniqueId === yb) return this.lights[bb];
        return null
      }
      getParticleSystemById(yb) {
        for (let bb = 0; bb < this.YV.length; bb++)
          if (this.YV[bb].id === yb) return this.YV[bb];
        return null
      }
      getGeometryById(yb) {
        for (let bb = 0; bb < this.geometries.length; bb++)
          if (this.geometries[bb].id === yb) return this.geometries[bb];
        return null
      }
      _getGeometryByUniqueId(yb) {
        if (this._geometriesByUniqueId) {
          const bb = this._geometriesByUniqueId[yb];
          if (void 0 !== bb) return this.geometries[bb]
        } else
          for (let bb = 0; bb < this.geometries.length; bb++)
            if (this.geometries[bb].uniqueId === yb) return this.geometries[bb];
        return null
      }
      getFrameGraphByName(yb) {
        for (let bb = 0; bb < this.frameGraphs.length; bb++)
          if (this.frameGraphs[bb].name === yb) return this.frameGraphs[bb];
        return null
      }
      pushGeometry(yb, bb) {
        return !(!bb && this._getGeometryByUniqueId(yb.uniqueId)) && (this.addGeometry(yb), hy.b.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(yb)
        })), !0)
      }
      removeGeometry(yb) {
        let bb;
        if (this._geometriesByUniqueId) {
          if (bb = this._geometriesByUniqueId[yb.uniqueId], void 0 === bb) return !1
        } else if (bb = this.geometries.indexOf(yb), bb < 0) return !1;
        if (bb !== this.geometries.length - 1) {
          const yb = this.geometries[this.geometries.length - 1];
          yb && (this.geometries[bb] = yb, this._geometriesByUniqueId && (this._geometriesByUniqueId[yb.uniqueId] = bb))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[yb.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(yb), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(yb) {
        for (let bb = 0; bb < this.meshes.length; bb++)
          if (this.meshes[bb].id === yb) return this.meshes[bb];
        return null
      }
      getMeshesById(yb) {
        return this.meshes.filter((function(bb) {
          return bb.id === yb
        }))
      }
      getTransformNodeById(yb) {
        for (let bb = 0; bb < this.transformNodes.length; bb++)
          if (this.transformNodes[bb].id === yb) return this.transformNodes[bb];
        return null
      }
      getTransformNodeByUniqueId(yb) {
        for (let bb = 0; bb < this.transformNodes.length; bb++)
          if (this.transformNodes[bb].uniqueId === yb) return this.transformNodes[bb];
        return null
      }
      getTransformNodesById(yb) {
        return this.transformNodes.filter((function(bb) {
          return bb.id === yb
        }))
      }
      getMeshByUniqueId(yb) {
        for (let bb = 0; bb < this.meshes.length; bb++)
          if (this.meshes[bb].uniqueId === yb) return this.meshes[bb];
        return null
      }
      getLastMeshById(yb) {
        for (let bb = this.meshes.length - 1; bb >= 0; bb--)
          if (this.meshes[bb].id === yb) return this.meshes[bb];
        return null
      }
      getLastTransformNodeById(yb) {
        for (let bb = this.transformNodes.length - 1; bb >= 0; bb--)
          if (this.transformNodes[bb].id === yb) return this.transformNodes[bb];
        return null
      }
      getLastEntryById(yb) {
        let bb;
        for (bb = this.meshes.length - 1; bb >= 0; bb--)
          if (this.meshes[bb].id === yb) return this.meshes[bb];
        for (bb = this.transformNodes.length - 1; bb >= 0; bb--)
          if (this.transformNodes[bb].id === yb) return this.transformNodes[bb];
        for (bb = this.cameras.length - 1; bb >= 0; bb--)
          if (this.cameras[bb].id === yb) return this.cameras[bb];
        for (bb = this.lights.length - 1; bb >= 0; bb--)
          if (this.lights[bb].id === yb) return this.lights[bb];
        for (bb = this.skeletons.length - 1; bb >= 0; bb--) {
          const Wy = this.skeletons[bb];
          for (let bb = Wy.bones.length - 1; bb >= 0; bb--)
            if (Wy.bones[bb].id === yb) return Wy.bones[bb]
        }
        return null
      }
      getNodeById(yb) {
        const bb = this.getMeshById(yb);
        if (bb) return bb;
        const Wy = this.getTransformNodeById(yb);
        if (Wy) return Wy;
        const Uy = this.getLightById(yb);
        if (Uy) return Uy;
        const hy = this.getCameraById(yb);
        if (hy) return hy;
        const fy = this.getBoneById(yb);
        return fy || null
      }
      getNodeByName(yb) {
        const bb = this.getMeshByName(yb);
        if (bb) return bb;
        const Wy = this.getTransformNodeByName(yb);
        if (Wy) return Wy;
        const Uy = this.getLightByName(yb);
        if (Uy) return Uy;
        const hy = this.getCameraByName(yb);
        if (hy) return hy;
        const fy = this.getBoneByName(yb);
        return fy || null
      }
      getMeshByName(yb) {
        for (let bb = 0; bb < this.meshes.length; bb++)
          if (this.meshes[bb].name === yb) return this.meshes[bb];
        return null
      }
      getTransformNodeByName(yb) {
        for (let bb = 0; bb < this.transformNodes.length; bb++)
          if (this.transformNodes[bb].name === yb) return this.transformNodes[bb];
        return null
      }
      getLastSkeletonById(yb) {
        for (let bb = this.skeletons.length - 1; bb >= 0; bb--)
          if (this.skeletons[bb].id === yb) return this.skeletons[bb];
        return null
      }
      getSkeletonByUniqueId(yb) {
        for (let bb = 0; bb < this.skeletons.length; bb++)
          if (this.skeletons[bb].uniqueId === yb) return this.skeletons[bb];
        return null
      }
      getSkeletonById(yb) {
        for (let bb = 0; bb < this.skeletons.length; bb++)
          if (this.skeletons[bb].id === yb) return this.skeletons[bb];
        return null
      }
      getSkeletonByName(yb) {
        for (let bb = 0; bb < this.skeletons.length; bb++)
          if (this.skeletons[bb].name === yb) return this.skeletons[bb];
        return null
      }
      getMorphTargetManagerById(yb) {
        for (let bb = 0; bb < this.morphTargetManagers.length; bb++)
          if (this.morphTargetManagers[bb].uniqueId === yb) return this.morphTargetManagers[bb];
        return null
      }
      getMorphTargetById(yb) {
        for (let bb = 0; bb < this.morphTargetManagers.length; ++bb) {
          const Wy = this.morphTargetManagers[bb];
          for (let bb = 0; bb < Wy.numTargets; ++bb) {
            const Uy = Wy.getTarget(bb);
            if (Uy.id === yb) return Uy
          }
        }
        return null
      }
      getMorphTargetByName(yb) {
        for (let bb = 0; bb < this.morphTargetManagers.length; ++bb) {
          const Wy = this.morphTargetManagers[bb];
          for (let bb = 0; bb < Wy.numTargets; ++bb) {
            const Uy = Wy.getTarget(bb);
            if (Uy.name === yb) return Uy
          }
        }
        return null
      }
      getPostProcessByName(yb) {
        for (let bb = 0; bb < this.postProcesses.length; ++bb) {
          const Wy = this.postProcesses[bb];
          if (Wy.name === yb) return Wy
        }
        return null
      }
      isActiveMesh(yb) {
        return -1 !== this._activeMeshes.indexOf(yb)
      }
      get uid() {
        return this._uid || (this._uid = Uy.k.RandomId()), this._uid
      }
      addExternalData(yb, bb) {
        return this._externalData || (this._externalData = new Py), this._externalData.add(yb, bb)
      }
      getExternalData(yb) {
        return this._externalData ? this._externalData.get(yb) : null
      }
      getOrAddExternalDataWithFactory(yb, bb) {
        return this._externalData || (this._externalData = new Py), this._externalData.getOrAddWithFactory(yb, bb)
      }
      removeExternalData(yb) {
        return this._externalData.remove(yb)
      }
      _evaluateSubMesh(yb, bb, Wy, Uy) {
        if (Uy || yb.isInFrustum(this._frustumPlanes)) {
          for (let Uy = 0, hy = this._evaluateSubMeshStage; Uy < hy.length; Uy++) {
            hy[Uy].action(bb, yb)
          }
          const Wy = yb.Wh();
          null !== Wy && void 0 !== Wy && (Wy.hasRenderTargetTextures && null != Wy.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Wy) && (this._processedMaterials.push(Wy), this._materialsRenderTargets.concatWithNoDuplicate(Wy.getRenderTargetTextures())), this._renderingManager.dispatch(yb, bb, Wy))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(yb) {
        this._preventFreeActiveMeshesAndRenderingGroups !== yb && (yb && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = yb)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let yb = 0; yb < this.activeCameras.length; yb++) {
            const bb = this.activeCameras[yb];
            bb && bb._activeMeshes && bb._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let yb = 0; yb < this.textures.length; yb++) {
            const bb = this.textures[yb];
            bb && bb.renderList && bb.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bb = arguments.length > 1 ? arguments[1] : void 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0,
          Uy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          fy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const Zy = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const yb of Zy) yb.objectRenderer._freezeActiveMeshes(Uy);
          return this._freezeActiveMeshesCancel = (0, hy.c)((() => {
            let yb = !0,
              bb = !0;
            for (const Wy of Zy) yb && (yb = Wy.objectRenderer._isFrozen), bb && (bb = null !== Wy.objectRenderer._freezeActiveMeshesCancel);
            if (yb) return !0;
            if (!bb) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = fy, this._skipEvaluateActiveMeshesCompletely = yb, bb?.()
          }), ((yb, bb) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), bb) {
              const bb = "Scene: Timeout while waiting for meshes to be frozen.";
              Wy ? Wy(bb) : (yU.b.Error(bb), yb && yU.b.Error(yb))
            } else {
              const bb = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              Wy ? Wy(bb) : (yU.b.Error(bb), yb && (yU.b.Error(yb), yb.stack && yU.b.Error(yb.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = fy, this._skipEvaluateActiveMeshesCompletely = yb, Uy)
              for (let yb = 0; yb < this._activeMeshes.length; yb++) this._activeMeshes.data[yb]._freeze();
            bb && bb()
          } else Wy && Wy("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let yb = 0; yb < this.meshes.length; yb++) {
          const bb = this.meshes[yb];
          bb._internalAbstractMeshDataInfo && (bb._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const yb = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const bb of yb) bb.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let yb = 0; yb < this._activeMeshes.length; yb++) this._activeMeshes.data[yb]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(yb) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => yb.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const yb = this._activeMeshes.length;
            for (let bb = 0; bb < yb; bb++) {
              this._activeMeshes.data[bb].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const yb = this._activeParticleSystems.length;
            for (let bb = 0; bb < yb; bb++) this._activeParticleSystems.data[bb].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let hy = 0, fy = this._beforeEvaluateActiveMeshStage; hy < fy.length; hy++) {
          fy[hy].action()
        }
        const yb = this.getActiveMeshCandidates(),
          bb = yb.length,
          Wy = tb.c.Enabled,
          Uy = this.customLODSelector;
        for (let hy = 0; hy < bb; hy++) {
          const bb = yb.data[hy],
            fy = !Uy && !bb.zWy && !bb._internalMeshDataInfo?._LODLevels.length;
          let Zy, cb;
          if ((fy || (Zy = bb._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), Zy ? Zy[1] = -1 : (Zy = [bb, -1], bb._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, Zy))), !bb.isBlocked) && (Wy && this._totalVertices.addCount(bb.getTotalVertices(), !1), bb.isReady() && bb.isEnabled() && !bb.vZ.hasAZeroComponent)) {
            if (bb.computeWorldMatrix(), bb.actionManager && bb.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(bb), fy) cb = bb;
            else if (cb = Uy ? Uy(bb, this.activeCamera) : bb.getLOD(this.activeCamera), Zy[0] = cb, Zy[1] = this._frameId, void 0 === cb || null === cb) continue;
            if (cb !== bb && 0 !== cb.billboardMode && cb.computeWorldMatrix(), bb._preActivate(), bb.isVisible && bb.visibility > 0 && 0 !== (bb.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || bb.AU || bb.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(bb), this.activeCamera._activeMeshes.push(bb), cb !== bb && cb._activate(this._renderId, !1);
              for (let yb = 0, Wy = this._preActiveMeshStage; yb < Wy.length; yb++) {
                Wy[yb].action(bb)
              }
              bb._activate(this._renderId, !1) && (bb.zWy ? bb._internalAbstractMeshDataInfo._actAsRegularMesh && (cb = bb) : cb._internalAbstractMeshDataInfo._onlyForInstances = !1, cb._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(bb, cb)), bb._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let yb = 0; yb < this.YV.length; yb++) {
            const bb = this.YV[yb];
            if (!bb.isStarted() || !bb.emitter) continue;
            const Wy = bb.emitter;
            Wy.position && !Wy.isEnabled() || (this._activeParticleSystems.push(bb), bb.animate(), this._renderingManager.dispatchParticles(bb))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(yb) {
        this._skeletonsEnabled && yb.skeleton && (this._activeSkeletons.pushNoDuplicate(yb.skeleton) && (yb.skeleton.prepare(), this._activeBones.addCount(yb.skeleton.bones.length, !1)), yb.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(yb) && this.frameGraph && yb.applySkeleton(yb.skeleton))
      }
      _activeMesh(yb, bb) {
        this._prepareSkeleton(bb);
        let Wy = yb.NBy || yb.zWy || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || bb.AU;
        if (bb && bb.vJ && bb.vJ.length > 0) {
          const Uy = this.getActiveSubMeshCandidates(bb),
            hy = Uy.length;
          Wy = Wy || 1 === hy;
          for (let fy = 0; fy < hy; fy++) {
            const hy = Uy.data[fy];
            this._evaluateSubMesh(hy, bb, yb, Wy)
          }
        }
      }
      updateTransformMatrix(yb) {
        const bb = this.activeCamera;
        if (bb)
          if (bb._renderingMultiview) {
            const Wy = bb._rigCameras[0],
              Uy = bb._rigCameras[1];
            this.setTransformMatrix(Wy.getViewMatrix(), Wy.getProjectionMatrix(yb), Uy.getViewMatrix(), Uy.getProjectionMatrix(yb))
          } else this.setTransformMatrix(bb.getViewMatrix(), bb.getProjectionMatrix(yb))
      }
      _bindFrameBuffer(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (yb && yb._multiviewTexture ? yb._multiviewTexture._bindFrameBuffer() : yb && yb.outputRenderTarget ? yb.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), bb && this._clearFrameBuffer(yb)
      }
      _clearFrameBuffer(yb) {
        if (yb && yb._multiviewTexture);
        else if (yb && yb.outputRenderTarget && !yb._renderingMultiview) {
          const bb = yb.outputRenderTarget;
          bb.onClearObservable.hasObservers() ? bb.onClearObservable.notifyObservers(this._engine) : bb.skipInitialClear || yb.isRightCamera || (this.autoClear && this._engine.clear(bb.clearColor || this._clearColor, !bb._cleared, !0, !0), bb._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(yb, bb) {
        let Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (yb && yb._skipRendering) return;
        const hy = this._engine;
        if (this._activeCamera = yb, !this.activeCamera) throw new Error("Active camera not set");
        if (hy.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && Wy) {
          let bb = !0;
          yb._renderingMultiview && yb.outputRenderTarget && (bb = yb.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, yb.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), yb._renderingMultiview && yb.outputRenderTarget && (yb.outputRenderTarget.skipInitialClear = bb)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = yb.outputRenderTarget?.renderPassId ?? yb.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let Uy = 0; Uy < this._softwareSkinnedMeshes.length; Uy++) {
          const yb = this._softwareSkinnedMeshes.data[Uy];
          yb.applySkeleton(yb.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), yb.customRenderTargets && yb.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(yb.customRenderTargets), bb && bb.customRenderTargets && bb.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(bb.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let Uy = 0, cb = this._gatherActiveCameraRenderTargetsStage; Uy < cb.length; Uy++) {
          cb[Uy].action(this._renderTargets)
        }
        let fy = !1;
        if (this.renderTargetsEnabled) {
          let yb;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            Uy.k.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const bb = this.getBoundingBoxRenderer?.();
            for (let Wy = 0; Wy < this._renderTargets.length; Wy++) {
              const Uy = this._renderTargets.data[Wy];
              if (Uy._shouldRender()) {
                this._renderId++;
                const Wy = Uy.activeCamera && Uy.activeCamera !== this.activeCamera;
                bb && !yb && (yb = bb.renderList.length > 0 ? bb.renderList.data.slice() : [], yb.length = bb.renderList.length), Uy.render(Wy, this.dumpNextRenderTargets), fy = !0
              }
            }
            bb && yb && (bb.renderList.data = yb, bb.renderList.length = yb.length), Uy.k.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const bb = this.getBoundingBoxRenderer?.();
            bb && !yb && (yb = bb.renderList.length > 0 ? bb.renderList.data.slice() : [], yb.length = bb.renderList.length);
            for (let yb = 0, Wy = this._cameraDrawRenderTargetStage; yb < Wy.length; yb++) {
              fy = Wy[yb].action(this.activeCamera) || fy
            }
            bb && yb && (bb.renderList.data = yb, bb.renderList.length = yb.length)
          }
          this._intermediateRendering = !1
        }
        fy && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || yb._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let Uy = 0, cb = this._beforeCameraDrawStage; Uy < cb.length; Uy++) {
          cb[Uy].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const Zy = hy.snapshotRendering && 1 === hy.snapshotRenderingMode;
        Zy && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !Zy), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let Uy = 0, cb = this._afterCameraDrawStage; Uy < cb.length; Uy++) {
          cb[Uy].action(this.activeCamera)
        }
        if (this.postProcessManager && !yb._multiviewTexture) {
          const bb = yb.outputRenderTarget ? yb.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(yb.isIntermediate, bb)
        }
        for (let Uy = 0, cb = this._afterCameraPostProcessStage; Uy < cb.length; Uy++) {
          cb[Uy].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === yb.cameraRigMode || yb._renderingMultiview) return yb._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(yb, void 0, bb), void this.onAfterRenderCameraObservable.notifyObservers(yb);
        if (yb._useMultiviewToSingleView) this._renderMultiviewToSingleView(yb);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(yb);
          for (let bb = 0; bb < yb._rigCameras.length; bb++) this._renderForCamera(yb._rigCameras[bb], yb)
        }
        this._activeCamera = yb, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(yb)
      }
      _checkIntersections() {
        for (let yb = 0; yb < this._meshesForIntersections.length; yb++) {
          const bb = this._meshesForIntersections.data[yb];
          if (bb.actionManager)
            for (let yb = 0; bb.actionManager && yb < bb.actionManager.actions.length; yb++) {
              const Wy = bb.actionManager.actions[yb];
              if (12 === Wy.trigger || 13 === Wy.trigger) {
                const yb = Wy.getTriggerParameter(),
                  Uy = yb.mesh ? yb.mesh : yb,
                  hy = Uy.QBy(bb, yb.usePreciseIntersection),
                  fy = bb._intersectionsInProgress.indexOf(Uy);
                hy && -1 === fy ? 12 === Wy.trigger ? (Wy._executeCurrent(sy.CreateNew(bb, void 0, Uy)), bb._intersectionsInProgress.push(Uy)) : 13 === Wy.trigger && bb._intersectionsInProgress.push(Uy) : !hy && fy > -1 && (13 === Wy.trigger && Wy._executeCurrent(sy.CreateNew(bb, void 0, Uy)), bb.actionManager.hasSpecificTrigger(13, (yb => {
                  const bb = yb.mesh ? yb.mesh : yb;
                  return Uy === bb
                })) && 13 !== Wy.trigger || bb._intersectionsInProgress.splice(fy, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(yb) {}
      _animate(yb) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let yb = Math.max(fW.MinDeltaTime, Math.min(this._engine.getDeltaTime(), fW.MaxDeltaTime)) + this._timeAccumulator;
          const bb = this._engine.getTimeStep(),
            Wy = 1e3 / bb / 1e3;
          let Uy = 0;
          const hy = this._engine.getLockstepMaxSteps();
          let fy = Math.floor(yb / bb);
          for (fy = Math.min(fy, hy); yb > 0 && Uy < fy;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = bb * Wy, this._animate(bb), this.onAfterAnimationsObservable.notifyObservers(this), this.QWy && this._advancePhysicsEngineStep(bb), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, Uy++, yb -= bb;
          this._timeAccumulator = yb < 0 ? 0 : yb
        } else {
          const yb = this.useConstantAnimationDeltaTime ? 16 : Math.max(fW.MinDeltaTime, Math.min(this._engine.getDeltaTime(), fW.MaxDeltaTime));
          this._animationRatio = .06 * yb, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.QWy && this._advancePhysicsEngineStep(yb)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(yb) {
        if (yb?.outputRenderTarget && !yb?.isRigCamera && (yb.outputRenderTarget._cleared = !1), yb?.rigCameras?.length)
          for (let bb = 0; bb < yb.rigCameras.length; ++bb) {
            const Wy = yb.rigCameras[bb].outputRenderTarget;
            Wy && (Wy._cleared = !1)
          }
      }
      resetDrawCache(yb) {
        if (this.meshes)
          for (const bb of this.meshes) bb.resetDrawCache(yb)
      }
      _renderWithFrameGraph() {
        let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          bb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, yb)
          for (const Wy of this.cameras)
            if (Wy.update(), 0 !== Wy.cameraRigMode)
              for (let yb = 0; yb < Wy._rigCameras.length; yb++) Wy._rigCameras[yb].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(bb)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(yb) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const bb = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), Uy.k.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let yb = 0; yb < this._renderTargets.length; yb++) {
            const Wy = this._renderTargets.data[yb],
              Uy = Wy.activeCamera || bb;
            this._renderRenderTarget(Wy, Uy, !0, this.dumpNextRenderTargets)
          }
          Uy.k.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let Wy = 0, Uy = this._beforeClearStage; Wy < Uy.length; Wy++) {
          Uy[Wy].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const bb = this.getActiveMeshCandidates(),
            Wy = bb.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let yb = 0; yb < Wy; yb++) {
                const Wy = bb.data[yb];
                Wy._internalAbstractMeshDataInfo._wasActiveLastFrame && Wy.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const yb = this._activeParticleSystems.length;
              for (let bb = 0; bb < yb; bb++) this._activeParticleSystems.data[bb].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let Uy = 0; Uy < Wy; Uy++) {
              const Wy = bb.data[Uy];
              Wy._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, Wy.isBlocked || (this._totalVertices.addCount(Wy.getTotalVertices(), !1), Wy.isReady() && Wy.isEnabled() && !Wy.vZ.hasAZeroComponent && (Wy.computeWorldMatrix(yb), Wy.actionManager && Wy.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(Wy)))
            }
            if (this.particlesEnabled)
              for (let yb = 0; yb < this.YV.length; yb++) {
                const bb = this.YV[yb];
                if (!bb.isStarted() || !bb.emitter) continue;
                const Wy = bb.emitter;
                Wy.position && !Wy.isEnabled() || (this._activeParticleSystems.push(bb), bb.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, yb._shouldRender()) {
          if (this._renderId++, this.activeCamera = bb, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), yb.render(Wy, Uy)
        }
        this._intermediateRendering = !1
      }
      render() {
        let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.Koy) return;
        const Wy = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(yb, bb)
        } finally {
          this._renderingMeshEvaluationDepth = Wy
        }
      }
      _renderFrame(yb, bb) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), Ey.c.kWy = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const Wy of this.activeCameras) this._checkCameraRenderTarget(Wy);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), bb || this.animate();
        for (let Wy = 0, Uy = this._beforeCameraUpdateStage; Wy < Uy.length; Wy++) {
          Uy[Wy].action()
        }
        if (yb)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let Wy = 0; Wy < this.activeCameras.length; Wy++) {
              const yb = this.activeCameras[Wy];
              if (yb.update(), 0 !== yb.cameraRigMode)
                for (let bb = 0; bb < yb._rigCameras.length; bb++) yb._rigCameras[bb].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let Wy = 0; Wy < this.activeCamera._rigCameras.length; Wy++) this.activeCamera._rigCameras[Wy].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(yb, bb);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const yb = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            Uy.k.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let bb = 0; bb < this.customRenderTargets.length; bb++) {
              const Wy = this.customRenderTargets[bb],
                Uy = Wy.activeCamera || this.activeCamera;
              this._renderRenderTarget(Wy, Uy, yb !== Uy, this.dumpNextRenderTargets)
            }
            Uy.k.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = yb?.renderPassId ?? 0, this.activeCamera = yb, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let bb = 0, Wy = this._beforeClearStage; bb < Wy.length; bb++) {
            Wy[bb].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let bb = 0, Wy = this._gatherRenderTargetsStage; bb < Wy.length; bb++) {
            Wy[bb].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let bb = 0; bb < this.activeCameras.length; bb++) this._processSubCameras(this.activeCameras[bb], bb > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let Wy = 0, Uy = this._afterRenderStage; Wy < Uy.length; Wy++) {
          Uy[Wy].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let yb = 0; yb < this._toBeDisposed.length; yb++) {
            const bb = this._toBeDisposed[yb];
            bb && bb.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let yb = 0; yb < this.materials.length; yb++) this.materials[yb].freeze()
      }
      unfreezeMaterials() {
        for (let yb = 0; yb < this.materials.length; yb++) this.materials[yb].unfreeze()
      }
      dispose() {
        if (this.Koy) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, Vy.d)(this.stopAllAnimations)) {
          for (const yb of this._activeAnimatables) yb.onAnimationEndObservable.clear(), yb.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const yb = this._activeRequests.slice();
        for (const fy of yb) fy.abort();
        this._activeRequests.length = 0;
        try {
          this.Nby.notifyObservers(this)
        } catch (hy) {
          yU.b.Error("An error occurred while calling onDisposeObservable!", hy)
        }
        this.detachControl();
        const bb = this._engine.getInputElement?.();
        if (bb)
          for (let fy = 0; fy < this.cameras.length; fy++) this.cameras[fy].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (yb => yb.dispose(!0))), this._disposeList(this.transformNodes, (yb => yb.dispose(!0)));
        const Wy = this.cameras;
        this._disposeList(Wy), this._disposeList(this.YV), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let Uy = this._engine.scenes.indexOf(this);
        if (Uy > -1 && this._engine.scenes.splice(Uy, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, Ey.i)(), Ty.c._LastCreatedScene === this) {
          Ty.c._LastCreatedScene = null;
          let yb = Ty.c.Instances.length - 1;
          for (; yb >= 0;) {
            const bb = Ty.c.Instances[yb];
            if (bb.scenes.length > 0) {
              Ty.c._LastCreatedScene = bb.scenes[this._engine.scenes.length - 1];
              break
            }
            yb--
          }
        }
        Uy = this._engine._virtualScenes.indexOf(this), Uy > -1 && this._engine._virtualScenes.splice(Uy, 1), this._engine.wipeCaches(!0), this.Nby.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(yb, bb) {
        const Wy = yb.slice(0);
        bb = bb ?? (yb => yb.dispose());
        for (const Uy of Wy) bb(Uy);
        yb.length = 0
      }
      get Koy() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let yb = 0; yb < this.meshes.length; yb++) {
          const bb = this.meshes[yb].geometry;
          bb && bb.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const yb of this.textures) {
          yb._buffer && (yb._buffer = null)
        }
      }
      getWorldExtends(yb) {
        const bb = new By.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          Wy = new By.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        yb = yb || (() => !0);
        const Uy = this.meshes.filter(yb);
        for (const hy of Uy) {
          if (hy.computeWorldMatrix(!0), !hy.vJ || 0 === hy.vJ.length || hy.infiniteDistance) continue;
          const yb = hy.qUy(),
            Uy = yb.boundingBox.minimumWorld,
            fy = yb.boundingBox.maximumWorld;
          By.n.CheckExtends(Uy, bb, Wy), By.n.CheckExtends(fy, bb, Wy)
        }
        return bb.x === Number.MAX_VALUE ? {
          min: By.n.Zero(),
          max: By.n.Zero()
        } : {
          min: bb,
          max: Wy
        }
      }
      createPickingRay(yb, bb, Wy, Uy) {
        throw (0, Vy.g)("Ray")
      }
      createPickingRayToRef(yb, bb, Wy, Uy, hy) {
        throw (0, Vy.g)("Ray")
      }
      createPickingRayInCameraSpace(yb, bb, Wy) {
        throw (0, Vy.g)("Ray")
      }
      createPickingRayInCameraSpaceToRef(yb, bb, Wy, Uy) {
        throw (0, Vy.g)("Ray")
      }
      cU(yb, bb, Wy, Uy, hy, fy) {
        const Zy = (0, Vy.g)("Ray", !0);
        return Zy && yU.b.Warn(Zy), new qb.b
      }
      pickWithBoundingInfo(yb, bb, Wy, Uy, hy) {
        const fy = (0, Vy.g)("Ray", !0);
        return fy && yU.b.Warn(fy), new qb.b
      }
      pickWithRay(yb, bb, Wy, Uy) {
        throw (0, Vy.g)("Ray")
      }
      multiPick(yb, bb, Wy, Uy, hy) {
        throw (0, Vy.g)("Ray")
      }
      multiPickWithRay(yb, bb, Wy) {
        throw (0, Vy.g)("Ray")
      }
      setPointerOverMesh(yb, bb, Wy) {
        this._inputManager.setPointerOverMesh(yb, bb, Wy)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const yb of this.geometries) yb._rebuild();
        for (const yb of this.meshes) yb._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const yb of this._components) yb.rebuild();
        for (const yb of this.YV) yb.rebuild();
        if (this.spriteManagers)
          for (const yb of this.spriteManagers) yb.rebuild()
      }
      _rebuildTextures() {
        for (const yb of this.textures) yb._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(yb, bb, Wy) {
        if (void 0 === bb) return yb;
        const Uy = [];
        for (const hy in yb) {
          const fy = yb[hy];
          oy.c && oy.c.MatchesQuery(fy, bb) && (!Wy || Wy(fy)) && Uy.push(fy)
        }
        return Uy
      }
      getMeshesByTags(yb, bb) {
        return this._getByTags(this.meshes, yb, bb)
      }
      getCamerasByTags(yb, bb) {
        return this._getByTags(this.cameras, yb, bb)
      }
      getLightsByTags(yb, bb) {
        return this._getByTags(this.lights, yb, bb)
      }
      getMaterialByTags(yb, bb) {
        return this._getByTags(this.materials, yb, bb).concat(this._getByTags(this.multiMaterials, yb, bb))
      }
      getTransformNodesByTags(yb, bb) {
        return this._getByTags(this.transformNodes, yb, bb)
      }
      setRenderingOrder(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(yb, bb, Wy, Uy)
      }
      setRenderingAutoClearDepthStencil(yb, bb) {
        let Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Uy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(yb, bb, Wy, Uy)
      }
      getAutoClearDepthStencilSetup(yb) {
        return this._renderingManager.getAutoClearDepthStencilSetup(yb)
      }
      _forceBlockMaterialDirtyMechanism(yb) {
        this._blockMaterialDirtyMechanism = yb
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(yb) {
        this._blockMaterialDirtyMechanism !== yb && (this._blockMaterialDirtyMechanism = yb, yb || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(yb, bb) {
        if (!this._blockMaterialDirtyMechanism)
          for (const Wy of this.materials) bb && !bb(Wy) || Wy.goy(yb)
      }
      _loadFile(yb, bb, Wy, Uy, hy, fy, Zy) {
        const cb = (0, zb.t)(yb, bb, Wy, Uy ? this.offlineProvider : void 0, hy, fy, Zy);
        return this._activeRequests.push(cb), cb.onCompleteObservable.add((yb => {
          this._activeRequests.splice(this._activeRequests.indexOf(yb), 1)
        })), cb
      }
      async _loadFileAsync(yb, bb, Wy, Uy, hy) {
        return await new Promise(((fy, Zy) => {
          this._loadFile(yb, (yb => {
            fy(yb)
          }), bb, Wy, Uy, ((yb, bb) => {
            Zy(bb)
          }), hy)
        }))
      }
      async _loadDelayedFileAsync(yb, bb, Wy) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const Uy = `${yb}|${bb?"binary":"string"}`;
        let hy = this._delayedFileRequests.get(Uy);
        if (!hy) {
          hy = bb ? this._loadFileAsync(yb, void 0, Wy, !0) : this._loadFileAsync(yb, void 0, Wy, !1);
          const fy = hy;
          (async () => {
            try {
              await fy
            } catch {}
            this._delayedFileRequests?.delete(Uy)
          })(), this._delayedFileRequests.set(Uy, hy)
        }
        return await hy
      }
      _requestFile(yb, bb, Wy, Uy, hy, fy, Zy) {
        const cb = (0, zb.H)(yb, bb, Wy, Uy ? this.offlineProvider : void 0, hy, fy, Zy);
        return this._activeRequests.push(cb), cb.onCompleteObservable.add((yb => {
          this._activeRequests.splice(this._activeRequests.indexOf(yb), 1)
        })), cb
      }
      async _requestFileAsync(yb, bb, Wy, Uy, hy) {
        return await new Promise(((fy, Zy) => {
          this._requestFile(yb, (yb => {
            fy(yb)
          }), bb, Wy, Uy, (yb => {
            Zy(yb)
          }), hy)
        }))
      }
      _readFile(yb, bb, Wy, Uy, hy) {
        const fy = (0, zb.A)(yb, bb, Wy, Uy, hy);
        return this._activeRequests.push(fy), fy.onCompleteObservable.add((yb => {
          this._activeRequests.splice(this._activeRequests.indexOf(yb), 1)
        })), fy
      }
      async _readFileAsync(yb, bb, Wy) {
        return await new Promise(((Uy, hy) => {
          this._readFile(yb, (yb => {
            Uy(yb)
          }), bb, Wy, (yb => {
            hy(yb)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, Vy.g)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(yb) {
        return this.setActiveCameraById(yb)
      }
      getMaterialByID(yb) {
        return this.getMaterialById(yb)
      }
      getLastMaterialByID(yb) {
        return this.getLastMaterialById(yb)
      }
      getTextureByUniqueID(yb) {
        return this.getTextureByUniqueId(yb)
      }
      getCameraByID(yb) {
        return this.getCameraById(yb)
      }
      getCameraByUniqueID(yb) {
        return this.getCameraByUniqueId(yb)
      }
      getBoneByID(yb) {
        return this.getBoneById(yb)
      }
      getLightByID(yb) {
        return this.getLightById(yb)
      }
      getLightByUniqueID(yb) {
        return this.getLightByUniqueId(yb)
      }
      getParticleSystemByID(yb) {
        return this.getParticleSystemById(yb)
      }
      getGeometryByID(yb) {
        return this.getGeometryById(yb)
      }
      getMeshByID(yb) {
        return this.getMeshById(yb)
      }
      getMeshByUniqueID(yb) {
        return this.getMeshByUniqueId(yb)
      }
      getLastMeshByID(yb) {
        return this.getLastMeshById(yb)
      }
      getMeshesByID(yb) {
        return this.getMeshesById(yb)
      }
      getTransformNodeByID(yb) {
        return this.getTransformNodeById(yb)
      }
      getTransformNodeByUniqueID(yb) {
        return this.getTransformNodeByUniqueId(yb)
      }
      getTransformNodesByID(yb) {
        return this.getTransformNodesById(yb)
      }
      getNodeByID(yb) {
        return this.getNodeById(yb)
      }
      getLastEntryByID(yb) {
        return this.getLastEntryById(yb)
      }
      getLastSkeletonByID(yb) {
        return this.getLastSkeletonById(yb)
      }
    }
    fW.FOGMODE_NONE = 0, fW.FOGMODE_EXP = 1, fW.FOGMODE_EXP2 = 2, fW.FOGMODE_LINEAR = 3, fW.MinDeltaTime = 1, fW.MaxDeltaTime = 1e3, fW._OriginalDefaultMaterialFactory = fW.DefaultMaterialFactory;
    let ZW = !1;

    function cU() {
      ZW || (ZW = !0, (0, bU.e)("BABYLON.Scene", fW))
    }(dy = fW.prototype).sortActiveAnimatables ?? (dy.sortActiveAnimatables = (0, Vy.f)("Scene", "sortActiveAnimatables")), (yW = fW.prototype).beginWeightedAnimation ?? (yW.beginWeightedAnimation = (0, Vy.f)("Scene", "beginWeightedAnimation")), (bW = fW.prototype).beginAnimation ?? (bW.beginAnimation = (0, Vy.f)("Scene", "beginAnimation")), (Wb = fW.prototype).beginHierarchyAnimation ?? (Wb.beginHierarchyAnimation = (0, Vy.f)("Scene", "beginHierarchyAnimation")), (Ub = fW.prototype).beginDirectAnimation ?? (Ub.beginDirectAnimation = (0, Vy.f)("Scene", "beginDirectAnimation")), (hb = fW.prototype).beginDirectHierarchyAnimation ?? (hb.beginDirectHierarchyAnimation = (0, Vy.f)("Scene", "beginDirectHierarchyAnimation")), (fb = fW.prototype).getAnimatableByTarget ?? (fb.getAnimatableByTarget = (0, Vy.f)("Scene", "getAnimatableByTarget")), (Zb = fW.prototype).getAllAnimatablesByTarget ?? (Zb.getAllAnimatablesByTarget = (0, Vy.f)("Scene", "getAllAnimatablesByTarget")), (cW = fW.prototype).stopAllAnimations ?? (cW.stopAllAnimations = (0, Vy.f)("Scene", "stopAllAnimations")), (Pb = fW.prototype).getSoundByName ?? (Pb.getSoundByName = (0, Vy.f)("Scene", "getSoundByName")), (ob = fW.prototype).createOrUpdateSelectionOctree ?? (ob.createOrUpdateSelectionOctree = (0, Vy.f)("Scene", "createOrUpdateSelectionOctree")), (Bb = fW.prototype).createDefaultLight ?? (Bb.createDefaultLight = (0, Vy.f)("Scene", "createDefaultLight")), (Kb = fW.prototype).createDefaultCamera ?? (Kb.createDefaultCamera = (0, Vy.f)("Scene", "createDefaultCamera")), (eb = fW.prototype).createDefaultCameraOrLight ?? (eb.createDefaultCameraOrLight = (0, Vy.f)("Scene", "createDefaultCameraOrLight")), (qW = fW.prototype).createDefaultSkybox ?? (qW.createDefaultSkybox = (0, Vy.f)("Scene", "createDefaultSkybox")), (sb = fW.prototype).createDefaultEnvironment ?? (sb.createDefaultEnvironment = (0, Vy.f)("Scene", "createDefaultEnvironment")), (Sb = fW.prototype).createDefaultVRExperience ?? (Sb.createDefaultVRExperience = (0, Vy.f)("Scene", "createDefaultVRExperience")), (Eb = fW.prototype).createDefaultXRExperienceAsync ?? (Eb.createDefaultXRExperienceAsync = (0, Vy.f)("Scene", "createDefaultXRExperienceAsync")), (lb = fW.prototype).getGlowLayerByName ?? (lb.getGlowLayerByName = (0, Vy.f)("Scene", "getGlowLayerByName")), (mW = fW.prototype).getHighlightLayerByName ?? (mW.getHighlightLayerByName = (0, Vy.f)("Scene", "getHighlightLayerByName")), (Cb = fW.prototype).getSelectionOutlineLayerByName ?? (Cb.getSelectionOutlineLayerByName = (0, Vy.f)("Scene", "getSelectionOutlineLayerByName")), (Tb = fW.prototype).removeLensFlareSystem ?? (Tb.removeLensFlareSystem = (0, Vy.f)("Scene", "removeLensFlareSystem")), (Vb = fW.prototype).addLensFlareSystem ?? (Vb.addLensFlareSystem = (0, Vy.f)("Scene", "addLensFlareSystem")), (Jb = fW.prototype).getLensFlareSystemByName ?? (Jb.getLensFlareSystemByName = (0, Vy.f)("Scene", "getLensFlareSystemByName")), (gW = fW.prototype).getLensFlareSystemByID ?? (gW.getLensFlareSystemByID = (0, Vy.f)("Scene", "getLensFlareSystemByID")), (Gb = fW.prototype).getLensFlareSystemById ?? (Gb.getLensFlareSystemById = (0, Vy.f)("Scene", "getLensFlareSystemById")), (Ob = fW.prototype).getPhysicsEngine ?? (Ob.getPhysicsEngine = (0, Vy.f)("Scene", "getPhysicsEngine")), (Rb = fW.prototype).enablePhysics ?? (Rb.enablePhysics = (0, Vy.f)("Scene", "enablePhysics")), (vW = fW.prototype).disablePhysicsEngine ?? (vW.disablePhysicsEngine = (0, Vy.f)("Scene", "disablePhysicsEngine")), (iW = fW.prototype).isPhysicsEnabled ?? (iW.isPhysicsEnabled = (0, Vy.f)("Scene", "isPhysicsEnabled")), (Mb = fW.prototype).deleteCompoundImpostor ?? (Mb.deleteCompoundImpostor = (0, Vy.f)("Scene", "deleteCompoundImpostor")), (Yb = fW.prototype).removeReflectionProbe ?? (Yb.removeReflectionProbe = (0, Vy.f)("Scene", "removeReflectionProbe")), (Xb = fW.prototype).addReflectionProbe ?? (Xb.addReflectionProbe = (0, Vy.f)("Scene", "addReflectionProbe")), (nb = fW.prototype).getBoundingBoxRenderer ?? (nb.getBoundingBoxRenderer = (0, Vy.f)("Scene", "getBoundingBoxRenderer")), (ub = fW.prototype).enableDepthRenderer ?? (ub.enableDepthRenderer = (0, Vy.f)("Scene", "enableDepthRenderer")), (rW = fW.prototype).disableDepthRenderer ?? (rW.disableDepthRenderer = (0, Vy.f)("Scene", "disableDepthRenderer")), (Hb = fW.prototype).enableFluidRenderer ?? (Hb.enableFluidRenderer = (0, Vy.f)("Scene", "enableFluidRenderer")), (aW = fW.prototype).disableFluidRenderer ?? (aW.disableFluidRenderer = (0, Vy.f)("Scene", "disableFluidRenderer")), (Fb = fW.prototype).enableGeometryBufferRenderer ?? (Fb.enableGeometryBufferRenderer = (0, Vy.f)("Scene", "enableGeometryBufferRenderer")), (pb = fW.prototype).disableGeometryBufferRenderer ?? (pb.disableGeometryBufferRenderer = (0, Vy.f)("Scene", "disableGeometryBufferRenderer")), (Lb = fW.prototype).enableIblCdfGenerator ?? (Lb.enableIblCdfGenerator = (0, Vy.f)("Scene", "enableIblCdfGenerator")), (Qb = fW.prototype).disableIblCdfGenerator ?? (Qb.disableIblCdfGenerator = (0, Vy.f)("Scene", "disableIblCdfGenerator")), (jW = fW.prototype).getOutlineRenderer ?? (jW.getOutlineRenderer = (0, Vy.f)("Scene", "getOutlineRenderer")), (Db = fW.prototype).enablePrePassRenderer ?? (Db.enablePrePassRenderer = (0, Vy.f)("Scene", "enablePrePassRenderer")), (tW = fW.prototype).disablePrePassRenderer ?? (tW.disablePrePassRenderer = (0, Vy.f)("Scene", "disablePrePassRenderer")), (wb = fW.prototype).enableSubSurfaceForPrePass ?? (wb.enableSubSurfaceForPrePass = (0, Vy.f)("Scene", "enableSubSurfaceForPrePass")), (kW = fW.prototype).disableSubSurfaceForPrePass ?? (kW.disableSubSurfaceForPrePass = (0, Vy.f)("Scene", "disableSubSurfaceForPrePass")), (Nb = fW.prototype).pickSprite ?? (Nb.pickSprite = (0, Vy.f)("Scene", "pickSprite")), (zW = fW.prototype).pickSpriteWithRay ?? (zW.pickSpriteWithRay = (0, Vy.f)("Scene", "pickSpriteWithRay")), (Ib = fW.prototype).multiPickSprite ?? (Ib.multiPickSprite = (0, Vy.f)("Scene", "multiPickSprite")), (xW = fW.prototype).multiPickSpriteWithRay ?? (xW.multiPickSpriteWithRay = (0, Vy.f)("Scene", "multiPickSpriteWithRay")), (Ab = fW.prototype).setPointerOverSprite ?? (Ab.setPointerOverSprite = (0, Vy.f)("Scene", "setPointerOverSprite")), (db = fW.prototype).getPointerOverSprite ?? (db.getPointerOverSprite = (0, Vy.f)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(fW.prototype, "mainSoundTrack") || Object.defineProperty(fW.prototype, "mainSoundTrack", (0, Vy.e)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(fW.prototype, "soundTracks") || Object.defineProperty(fW.prototype, "soundTracks", (0, Vy.e)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(fW.prototype, "audioEnabled") || Object.defineProperty(fW.prototype, "audioEnabled", (0, Vy.e)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(fW.prototype, "headphone") || Object.defineProperty(fW.prototype, "headphone", (0, Vy.e)("Scene", "headphone")), Object.getOwnPropertyDescriptor(fW.prototype, "audioListenerPositionProvider") || Object.defineProperty(fW.prototype, "audioListenerPositionProvider", (0, Vy.e)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(fW.prototype, "audioListenerRotationProvider") || Object.defineProperty(fW.prototype, "audioListenerRotationProvider", (0, Vy.e)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(fW.prototype, "audioPositioningRefreshRate") || Object.defineProperty(fW.prototype, "audioPositioningRefreshRate", (0, Vy.e)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(fW.prototype, "selectionOctree") || Object.defineProperty(fW.prototype, "selectionOctree", (0, Vy.e)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(fW.prototype, "debugLayer") || Object.defineProperty(fW.prototype, "debugLayer", (0, Vy.e)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(fW.prototype, "gamepadManager") || Object.defineProperty(fW.prototype, "gamepadManager", (0, Vy.e)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(fW.prototype, "simplificationQueue") || Object.defineProperty(fW.prototype, "simplificationQueue", (0, Vy.e)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(fW.prototype, "onBeforePhysicsObservable") || Object.defineProperty(fW.prototype, "onBeforePhysicsObservable", (0, Vy.e)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(fW.prototype, "onAfterPhysicsObservable") || Object.defineProperty(fW.prototype, "onAfterPhysicsObservable", (0, Vy.e)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(fW.prototype, "reflectionProbes") || Object.defineProperty(fW.prototype, "reflectionProbes", (0, Vy.e)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(fW.prototype, "forceShowBoundingBoxes") || Object.defineProperty(fW.prototype, "forceShowBoundingBoxes", (0, Vy.e)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(fW.prototype, "depthPeelingRenderer") || Object.defineProperty(fW.prototype, "depthPeelingRenderer", (0, Vy.e)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(fW.prototype, "useOrderIndependentTransparency") || Object.defineProperty(fW.prototype, "useOrderIndependentTransparency", (0, Vy.e)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(fW.prototype, "fluidRenderer") || Object.defineProperty(fW.prototype, "fluidRenderer", (0, Vy.e)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(fW.prototype, "geometryBufferRenderer") || Object.defineProperty(fW.prototype, "geometryBufferRenderer", (0, Vy.e)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(fW.prototype, "iblCdfGenerator") || Object.defineProperty(fW.prototype, "iblCdfGenerator", (0, Vy.e)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(fW.prototype, "prePassRenderer") || Object.defineProperty(fW.prototype, "prePassRenderer", (0, Vy.e)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(fW.prototype, "subSurfaceConfiguration") || Object.defineProperty(fW.prototype, "subSurfaceConfiguration", (0, Vy.e)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(fW.prototype, "spriteManagers") || Object.defineProperty(fW.prototype, "spriteManagers", (0, Vy.e)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(fW.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(fW.prototype, "onBeforeSpritesRenderingObservable", (0, Vy.e)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(fW.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(fW.prototype, "onAfterSpritesRenderingObservable", (0, Vy.e)("Scene", "onAfterSpritesRenderingObservable"))
  },
  38649: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy,
      c: () => hy
    });
    class Uy {}
    Uy.NAME_EFFECTLAYER = "EffectLayer", Uy.NAME_LAYER = "Layer", Uy.NAME_LENSFLARESYSTEM = "LensFlareSystem", Uy.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", Uy.NAME_PARTICLESYSTEM = "ParticleSystem", Uy.NAME_GAMEPAD = "Gamepad", Uy.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", Uy.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", Uy.NAME_PREPASSRENDERER = "PrePassRenderer", Uy.NAME_DEPTHRENDERER = "DepthRenderer", Uy.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", Uy.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", Uy.NAME_SPRITE = "Sprite", Uy.NAME_SUBSURFACE = "SubSurface", Uy.NAME_OUTLINERENDERER = "Outline", Uy.NAME_PROCEDURALTEXTURE = "ProceduralTexture", Uy.NAME_SHADOWGENERATOR = "ShadowGenerator", Uy.NAME_OCTREE = "BBy", Uy.NAME_PHYSICSENGINE = "PhysicsEngine", Uy.NAME_AUDIO = "Audio", Uy.NAME_FLUIDRENDERER = "FluidRenderer", Uy.NAME_IBLCDFGENERATOR = "iblCDFGenerator", Uy.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", Uy.STEP_ISREADYFORMESH_EFFECTLAYER = 0, Uy.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, Uy.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, Uy.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, Uy.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, Uy.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, Uy.STEP_BEFORECAMERADRAW_PREPASS = 0, Uy.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, Uy.STEP_BEFORECAMERADRAW_LAYER = 2, Uy.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, Uy.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, Uy.STEP_BEFORERENDERINGMESH_PREPASS = 0, Uy.STEP_BEFORERENDERINGMESH_OUTLINE = 1, Uy.STEP_AFTERRENDERINGMESH_PREPASS = 0, Uy.STEP_AFTERRENDERINGMESH_OUTLINE = 1, Uy.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, Uy.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, Uy.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, Uy.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, Uy.STEP_BEFORECLEAR_PREPASS = 1, Uy.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, Uy.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, Uy.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, Uy.STEP_AFTERCAMERADRAW_PREPASS = 0, Uy.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, Uy.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, Uy.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, Uy.STEP_AFTERCAMERADRAW_LAYER = 4, Uy.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, Uy.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, Uy.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, Uy.STEP_AFTERRENDER_AUDIO = 0, Uy.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, Uy.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, Uy.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, Uy.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, Uy.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, Uy.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, Uy.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, Uy.STEP_POINTERMOVE_SPRITE = 0, Uy.STEP_POINTERDOWN_SPRITE = 0, Uy.STEP_POINTERUP_SPRITE = 0;
    class hy extends Array {
      constructor(yb) {
        super(...yb)
      }
      static Create() {
        return Object.create(hy.prototype)
      }
      registerStep(yb, bb, Wy) {
        let Uy, hy = 0;
        for (; hy < this.length; hy++) {
          if (Uy = this[hy].index, yb < Uy) break
        }
        this.splice(hy, 0, {
          index: yb,
          component: bb,
          action: Wy.bind(bb)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  38464: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Zy,
      f: () => cb,
      j: () => Uy,
      l: () => hy,
      p: () => fy
    });

    function Uy(yb, bb, Wy, Uy, hy, fy) {
      function Zy(yb) {
        if (void 0 !== yb && "function" !== typeof yb) throw new TypeError("Function expected");
        return yb
      }
      for (var cb, Py = Uy.kind, oy = "getter" === Py ? "get" : "setter" === Py ? "set" : "value", By = !bb && yb ? Uy.static ? yb : yb.prototype : null, Ky = bb || (By ? Object.getOwnPropertyDescriptor(By, Uy.name) : {}), ey = !1, qb = Wy.length - 1; qb >= 0; qb--) {
        var sy = {};
        for (var Sy in Uy) sy[Sy] = "access" === Sy ? {} : Uy[Sy];
        for (var Sy in Uy.access) sy.access[Sy] = Uy.access[Sy];
        sy.addInitializer = function(yb) {
          if (ey) throw new TypeError("Cannot add initializers after decoration has completed");
          fy.push(Zy(yb || null))
        };
        var Ey = (0, Wy[qb])("accessor" === Py ? {
          get: Ky.get,
          set: Ky.set
        } : Ky[oy], sy);
        if ("accessor" === Py) {
          if (void 0 === Ey) continue;
          if (null === Ey || "object" !== typeof Ey) throw new TypeError("Object expected");
          (cb = Zy(Ey.get)) && (Ky.get = cb), (cb = Zy(Ey.set)) && (Ky.set = cb), (cb = Zy(Ey.init)) && hy.unshift(cb)
        } else(cb = Zy(Ey)) && ("field" === Py ? hy.unshift(cb) : Ky[oy] = cb)
      }
      By && Object.defineProperty(By, Uy.name, Ky), ey = !0
    }

    function hy(yb, bb, Wy) {
      for (var Uy = arguments.length > 2, hy = 0; hy < bb.length; hy++) Wy = Uy ? bb[hy].call(yb, Wy) : bb[hy].call(yb);
      return Uy ? Wy : void 0
    }

    function fy(yb, bb, Wy) {
      return "symbol" === typeof bb && (bb = bb.description ? "[".concat(bb.description, "]") : ""), Object.defineProperty(yb, "name", {
        configurable: !0,
        value: Wy ? "".concat(Wy, " ", bb) : bb
      })
    }
    Object.create;
    Object.create;

    function Zy(yb, bb, Wy, Uy) {
      if ("a" === Wy && !Uy) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof bb ? yb !== bb || !Uy : !bb.has(yb)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === Wy ? Uy : "a" === Wy ? Uy.call(yb) : Uy ? Uy.value : bb.get(yb)
    }

    function cb(yb, bb, Wy, Uy, hy) {
      if ("m" === Uy) throw new TypeError("Private method is not writable");
      if ("a" === Uy && !hy) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof bb ? yb !== bb || !hy : !bb.has(yb)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Uy ? hy.call(yb, Wy) : hy ? hy.value = Wy : bb.set(yb, Wy), Wy
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);