export const id = 242;
export const ids = [242];
export const modules = {
  39541: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => bk,
      h: () => yk,
      k: () => dk,
      n: () => wk
    });
    var Rk = Bk(39323),
      tk = Bk(38320),
      ak = Bk(39463),
      Xk = Bk(39365);
    class bk {
      get BBk() {
        return this._isDisposed
      }
      constructor(kk, Fk, Bk) {
        let tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          ak = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          bk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          wk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          dk = arguments.length > 7 ? arguments[7] : void 0,
          sk = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, Xk.c)(), kk && kk.XN ? this._engine = kk.XN().ne() : this._engine = kk, this._updatable = Bk, this._instanced = bk, this._divisor = dk || 1, this._label = sk, Fk instanceof Rk.d ? (this._data = null, this._buffer = Fk) : (this._data = Fk, this._buffer = null), this.byteStride = wk ? tk : tk * Float32Array.BYTES_PER_ELEMENT, ak || this.create()
      }
      createVertexBuffer(kk, Fk, Bk, Rk, tk) {
        let ak = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Xk = arguments.length > 6 ? arguments[6] : void 0;
        const bk = ak ? Fk : Fk * Float32Array.BYTES_PER_ELEMENT,
          dk = Rk ? ak ? Rk : Rk * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new wk(this._engine, this, kk, this._updatable, !0, dk, void 0 === tk ? this._instanced : tk, bk, Bk, void 0, void 0, !0, this._divisor || Xk)
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
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !kk && this._buffer || (kk = kk || this._data, kk && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, kk), this._data = kk) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(kk, this._label), this._data = kk) : this._buffer = this._engine.createVertexBuffer(kk, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.KV > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.KV, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.KV, void 0, this._label));
          tk.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(kk) {
        this.create(kk)
      }
      updateDirectly(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, kk, Rk ? Fk : Fk * Float32Array.BYTES_PER_ELEMENT, Bk ? Bk * this.byteStride : void 0), this._data = 0 === Fk && void 0 === Bk ? kk : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class wk {
      get BBk() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(kk) {
        const Fk = 0 != kk;
        this._instanceDivisor = kk, Fk !== this._instanced && (this._instanced = Fk, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const kk = this.getData();
        return kk ? Array.isArray(kk) ? kk.length / (this.byteStride / 4) - this.byteOffset / 4 : (kk.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(kk, Fk, Bk, Rk, tk, Xk, Vk, Jk, Ak, ek) {
        let yk, fk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          mk = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          Wk = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          vk = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = kk, "object" === typeof Rk && null !== Rk ? (yk = Rk.updatable ?? !1, tk = Rk.postponeInternalCreation, Xk = Rk.stride, Vk = Rk.instanced, Jk = Rk.offset, Ak = Rk.size, ek = Rk.type, fk = Rk.normalized ?? !1, mk = Rk.useBytes ?? !1, Wk = Rk.divisor ?? 1, vk = Rk.takeBufferOwnership ?? !1, this._label = Rk.label) : yk = !!Rk, Fk instanceof bk ? (this._buffer = Fk, this._ownsBuffer = vk) : (this._buffer = new bk(kk, Fk, yk, Xk, tk, Vk, mk, Wk, this._label), this._ownsBuffer = !0), this.uniqueId = wk._Counter++, this._kind = Bk, void 0 === ek) {
          const kk = this.getData();
          this.type = kk ? sk(kk) : wk.FLOAT
        } else this.type = ek;
        const ik = (0, ak.n)(this.type);
        mk ? (this._size = Ak || (Xk ? Xk / ik : dk(Bk)), this.byteStride = Xk || this._buffer.byteStride || this._size * ik, this.byteOffset = Jk || 0) : (this._size = Ak || Xk || dk(Bk), this.byteStride = Xk ? Xk * ik : this._buffer.byteStride || this._size * ik, this.byteOffset = (Jk || 0) * ik), this.normalized = fk, this._instanced = void 0 !== Vk && Vk, this._instanceDivisor = Vk ? Wk : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(kk) {
        switch (kk) {
          case wk.BYTE:
            return 0;
          case wk.UNSIGNED_BYTE:
            return 1;
          case wk.SHORT:
            return 2;
          case wk.UNSIGNED_SHORT:
            return 3;
          case wk.INT:
            return 4;
          case wk.UNSIGNED_INT:
            return 5;
          case wk.FLOAT:
            return 6;
          case wk.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${kk}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (wk._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(kk, Fk) {
        const Bk = this.getData();
        return Bk ? (0, ak.l)(Bk, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, kk, Fk) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, ak.n)(this.type)
      }
      ZFk() {
        return this.byteOffset / (0, ak.n)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, ak.n)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(kk) {
        this._buffer.create(kk), this._alignBuffer()
      }
      update(kk) {
        this._buffer.update(kk), this._alignBuffer()
      }
      updateDirectly(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(kk, Fk, void 0, Bk), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(kk, Fk) {
        (0, ak.i)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, kk, this.normalized, ((kk, Bk) => {
          for (let Rk = 0; Rk < this._size; Rk++) Fk(kk[Rk], Bk + Rk)
        }))
      }
      _alignBuffer() {}
    }

    function dk(kk) {
      switch (kk) {
        case wk.UVKind:
        case wk.UV2Kind:
        case wk.UV3Kind:
        case wk.UV4Kind:
        case wk.UV5Kind:
        case wk.UV6Kind:
          return 2;
        case wk.NormalKind:
        case wk.PositionKind:
          return 3;
        case wk.ColorKind:
        case wk.ColorInstanceKind:
        case wk.MatricesIndicesKind:
        case wk.MatricesIndicesExtraKind:
        case wk.MatricesWeightsKind:
        case wk.MatricesWeightsExtraKind:
        case wk.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + kk + "'")
      }
    }

    function sk(kk) {
      return kk instanceof Int8Array ? wk.BYTE : kk instanceof Uint8Array ? wk.UNSIGNED_BYTE : kk instanceof Int16Array ? wk.SHORT : kk instanceof Uint16Array ? wk.UNSIGNED_SHORT : kk instanceof Int32Array ? wk.INT : kk instanceof Uint32Array ? wk.UNSIGNED_INT : wk.FLOAT
    }

    function Vk(kk) {
      return (0, ak.n)(kk)
    }

    function Jk(kk, Fk, Bk, Rk, tk, Xk, bk, wk) {
      (0, ak.i)(kk, Fk, Bk, Rk, tk, Xk, bk, ((kk, Fk) => {
        for (let Bk = 0; Bk < Rk; Bk++) wk(kk[Bk], Fk + Bk)
      }))
    }

    function Ak(kk, Fk, Bk, Rk, tk, Xk, bk, wk) {
      return (0, ak.l)(kk, Fk, Bk, Rk, tk, Xk, bk, wk)
    }
    wk._Counter = 0, wk.BYTE = 5120, wk.UNSIGNED_BYTE = 5121, wk.SHORT = 5122, wk.UNSIGNED_SHORT = 5123, wk.INT = 5124, wk.UNSIGNED_INT = 5125, wk.FLOAT = 5126, wk.HALF_FLOAT = 5131, wk.PositionKind = "position", wk.NormalKind = "normal", wk.TangentKind = "tangent", wk.UVKind = "uv", wk.UV2Kind = "uv2", wk.UV3Kind = "uv3", wk.UV4Kind = "uv4", wk.UV5Kind = "uv5", wk.UV6Kind = "uv6", wk.ColorKind = "color", wk.ColorInstanceKind = "instanceColor", wk.MatricesIndicesKind = "matricesIndices", wk.MatricesWeightsKind = "matricesWeights", wk.MatricesIndicesExtraKind = "matricesIndicesExtra", wk.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let ek = !1;

    function yk() {
      ek || (ek = !0, wk.DeduceStride = dk, wk.GetDataType = sk, wk.GetTypeByteLength = Vk, wk.ForEach = Jk, wk.GetFloatData = Ak)
    }
  },
  39323: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk
    });
    class Rk {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.KV = 0, this.is32Bits = !1, this.uniqueId = Rk._Counter++
      }
    }
    Rk._Counter = 0
  },
  39537: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak
    });
    var Rk = Bk(36758),
      tk = Bk(39541);
    class ak {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || Fk && !this.pickedMesh.isVerticesDataPresent(tk.n.NormalKind)) return null;
        let Bk, ak = this.pickedMesh.hBk();
        0 === ak?.length && (ak = null);
        const Xk = Rk.l.Qe[0],
          bk = Rk.l.Qe[1],
          wk = Rk.l.Qe[2];
        if (Fk) {
          const kk = this.pickedMesh.getVerticesData(tk.n.NormalKind);
          let Fk = ak ? Rk.s.FromArrayToRef(kk, 3 * ak[3 * this.faceId], Xk) : Xk.E1(kk[3 * this.faceId * 3], kk[3 * this.faceId * 3 + 1], kk[3 * this.faceId * 3 + 2]),
            dk = ak ? Rk.s.FromArrayToRef(kk, 3 * ak[3 * this.faceId + 1], bk) : bk.E1(kk[3 * (3 * this.faceId + 1)], kk[3 * (3 * this.faceId + 1) + 1], kk[3 * (3 * this.faceId + 1) + 2]),
            sk = ak ? Rk.s.FromArrayToRef(kk, 3 * ak[3 * this.faceId + 2], wk) : wk.E1(kk[3 * (3 * this.faceId + 2)], kk[3 * (3 * this.faceId + 2) + 1], kk[3 * (3 * this.faceId + 2) + 2]);
          Fk = Fk.scale(this.bu), dk = dk.scale(this.bv), sk = sk.scale(1 - this.bu - this.bv), Bk = new Rk.s(Fk.x + dk.x + sk.x, Fk.y + dk.y + sk.y, Fk.z + dk.z + sk.z)
        } else {
          const kk = this.pickedMesh.getVerticesData(tk.n.PositionKind),
            Fk = ak ? Rk.s.FromArrayToRef(kk, 3 * ak[3 * this.faceId], Xk) : Xk.E1(kk[3 * this.faceId * 3], kk[3 * this.faceId * 3 + 1], kk[3 * this.faceId * 3 + 2]),
            dk = ak ? Rk.s.FromArrayToRef(kk, 3 * ak[3 * this.faceId + 1], bk) : bk.E1(kk[3 * (3 * this.faceId + 1)], kk[3 * (3 * this.faceId + 1) + 1], kk[3 * (3 * this.faceId + 1) + 2]),
            sk = ak ? Rk.s.FromArrayToRef(kk, 3 * ak[3 * this.faceId + 2], wk) : wk.E1(kk[3 * (3 * this.faceId + 2)], kk[3 * (3 * this.faceId + 2) + 1], kk[3 * (3 * this.faceId + 2) + 2]),
            Vk = Fk.subtract(dk),
            Jk = sk.subtract(dk);
          Bk = Rk.s.Cross(Vk, Jk)
        }
        const dk = (kk, Fk) => {
          if (-1 !== this.thinInstanceIndex) {
            const Bk = kk._thinInstanceDataStorage.matrixData,
              tk = this.thinInstanceIndex << 4;
            if (Bk && Bk.length > tk) {
              const kk = Rk.l.Matrix[0];
              Rk.c.FromArrayToRef(Bk, tk, kk), Rk.s.TransformNormalToRef(Fk, kk, Fk)
            }
          }
          let Bk = kk.getWorldMatrix();
          kk.nonUniformScaling && (Rk.l.Matrix[0].sBk(Bk), Bk = Rk.l.Matrix[0], Bk.setTranslationFromFloats(0, 0, 0), Bk.invert(), Bk.transposeToRef(Rk.l.Matrix[1]), Bk = Rk.l.Matrix[1]), Rk.s.TransformNormalToRef(Fk, Bk, Fk)
        };
        if (kk && dk(this.pickedMesh, Bk), this.ray) {
          const Fk = Rk.l.Qe[0].sBk(Bk);
          kk || dk(this.pickedMesh, Fk), Rk.s.Dot(Fk, this.ray.direction) > 0 && Bk.negateInPlace()
        }
        return Bk.normalize(), Bk
      }
      getTextureCoordinates() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tk.n.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(kk)) return null;
        const Fk = this.pickedMesh.hBk();
        if (!Fk) return null;
        const Bk = this.pickedMesh.getVerticesData(kk);
        if (!Bk) return null;
        let ak = Rk.p.FromArray(Bk, 2 * Fk[3 * this.faceId]),
          Xk = Rk.p.FromArray(Bk, 2 * Fk[3 * this.faceId + 1]),
          bk = Rk.p.FromArray(Bk, 2 * Fk[3 * this.faceId + 2]);
        return ak = ak.scale(this.bu), Xk = Xk.scale(this.bv), bk = bk.scale(1 - this.bu - this.bv), new Rk.p(ak.x + Xk.x + bk.x, ak.y + Xk.y + bk.y)
      }
    }
  },
  39365: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak
    });
    var Rk = Bk(39258);
    let tk = !1;

    function ak() {
      tk || (tk = !0, Rk.ThinEngine.prototype.updateDynamicIndexBuffer = function(kk, Fk) {
        let Bk;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(kk), Bk = kk.is32Bits ? Fk instanceof Uint32Array ? Fk : new Uint32Array(Fk) : Fk instanceof Uint16Array ? Fk : new Uint16Array(Fk), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Bk, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, Rk.ThinEngine.prototype.updateDynamicVertexBuffer = function(kk, Fk, Bk, Rk) {
        this.bindArrayBuffer(kk), void 0 === Bk && (Bk = 0);
        const tk = Fk.byteLength || Fk.length;
        void 0 === Rk || Rk >= tk && 0 === Bk ? Fk instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Bk, new Float32Array(Fk)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Bk, Fk) : Fk instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Bk, new Float32Array(Fk).subarray(0, Rk / 4)) : (Fk = ArrayBuffer.isView(Fk) ? new Uint8Array(Fk.buffer, Fk.byteOffset, Rk) : new Uint8Array(Fk, 0, Rk), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Bk, Fk)), this._resetVertexBufferBinding()
      })
    }
  },
  39334: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk
    });
    class Rk {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Fk = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = Fk, !kk && (kk = Fk.createTexture(), !kk)) throw new Error("Unable to create webGL texture");
        this.set(kk)
      }
      setUsage() {}
      set(kk) {
        this._webGLTexture = kk
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(kk) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(kk)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const kk of this._MSAARenderBuffers) this._context.deleteRenderbuffer(kk);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[kk] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  39305: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Wk
    });
    var Rk = Bk(36781),
      tk = Bk(39261),
      ak = Bk(36772),
      Xk = Bk(38320),
      bk = Bk(36770),
      wk = Bk(39307);
    class dk {
      constructor() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, kk && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(kk) {
        this._zOffset !== kk && (this._zOffset = kk, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(kk) {
        this._zOffsetUnits !== kk && (this._zOffsetUnits = kk, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(kk) {
        this._cullFace !== kk && (this._cullFace = kk, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(kk) {
        this._cull !== kk && (this._cull = kk, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(kk) {
        this._depthFunc !== kk && (this._depthFunc = kk, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(kk) {
        this._depthMask !== kk && (this._depthMask = kk, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(kk) {
        this._depthTest !== kk && (this._depthTest = kk, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(kk) {
        this._frontFace !== kk && (this._frontFace = kk, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(kk) {
        this.isDirty && (this._isCullDirty && (this.cull ? kk.enable(kk.CULL_FACE) : kk.disable(kk.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (kk.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (kk.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? kk.enable(kk.DEPTH_TEST) : kk.disable(kk.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (kk.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (kk.enable(kk.POLYGON_OFFSET_FILL), kk.polygonOffset(this.zOffset, this.zOffsetUnits)) : kk.disable(kk.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (kk.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class sk {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(kk) {
        this._func !== kk && (this._func = kk, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(kk) {
        this._backFunc !== kk && (this._backFunc = kk, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(kk) {
        this._funcRef !== kk && (this._funcRef = kk, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(kk) {
        this._funcMask !== kk && (this._funcMask = kk, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(kk) {
        this._opStencilFail !== kk && (this._opStencilFail = kk, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(kk) {
        this._opDepthFail !== kk && (this._opDepthFail = kk, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(kk) {
        this._opStencilDepthPass !== kk && (this._opStencilDepthPass = kk, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(kk) {
        this._backOpStencilFail !== kk && (this._backOpStencilFail = kk, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(kk) {
        this._backOpDepthFail !== kk && (this._backOpDepthFail = kk, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(kk) {
        this._backOpStencilDepthPass !== kk && (this._backOpStencilDepthPass = kk, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(kk) {
        this._mask !== kk && (this._mask = kk, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(kk) {
        this._enabled !== kk && (this._enabled = kk, this._isStencilTestDirty = !0)
      }
      constructor() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, kk && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(kk) {
        if (!kk) return;
        const Fk = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = Fk ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = Fk ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = Fk ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = Fk ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = Fk ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = Fk ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = Fk ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = Fk ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = Fk ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = Fk ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = Fk ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = Fk ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? kk.enable(kk.STENCIL_TEST) : kk.disable(kk.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (kk.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (kk.stencilFuncSeparate(kk.FRONT, this.func, this.funcRef, this.funcMask), kk.stencilFuncSeparate(kk.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (kk.stencilOpSeparate(kk.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), kk.stencilOpSeparate(kk.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class Vk {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = Vk.ALWAYS, this.opStencilFail = Vk.KEEP, this.opDepthFail = Vk.KEEP, this.opStencilDepthPass = Vk.REPLACE, this.backFunc = Vk.ALWAYS, this.backOpStencilFail = Vk.KEEP, this.backOpDepthFail = Vk.KEEP, this.backOpStencilDepthPass = Vk.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(kk) {
        this.func = kk
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(kk) {
        this.backFunc = kk
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(kk) {
        this.funcRef = kk
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(kk) {
        this.funcMask = kk
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(kk) {
        this.opStencilFail = kk
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(kk) {
        this.opDepthFail = kk
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(kk) {
        this.opStencilDepthPass = kk
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(kk) {
        this.backOpStencilFail = kk
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(kk) {
        this.backOpDepthFail = kk
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(kk) {
        this.backOpStencilDepthPass = kk
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(kk) {
        this.mask = kk
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(kk) {
        this.enabled = kk
      }
    }
    Vk.ALWAYS = 519, Vk.KEEP = 7680, Vk.REPLACE = 7681;
    var Jk = Bk(39311),
      Ak = Bk(39296),
      ek = Bk(39248),
      yk = Bk(39281),
      fk = Bk(39293);

    function mk(kk, Fk) {
      if (Fk) {
        const {
          requestAnimationFrame: Bk
        } = Fk;
        if ("function" === typeof Bk) return Bk(kk)
      }
      if ((0, yk.j)()) {
        const {
          requestAnimationFrame: Bk
        } = Fk || window;
        if ("function" === typeof Bk) return Bk(kk)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(kk);
      return setTimeout(kk, 16)
    }
    class Wk {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(kk) {
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
      get rBk() {
        return this._useReverseDepthBuffer
      }
      set rBk(kk) {
        kk !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = kk, this._depthCullingState.depthFunc = kk ? 518 : 515)
      }
      setColorWrite(kk) {
        kk !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = kk)
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
      _getGlobalDefines(kk) {
        if (kk) return this.isNDCHalfZRange ? kk.IS_NDC_HALF_ZRANGE = "" : delete kk.IS_NDC_HALF_ZRANGE, this.rBk ? kk.USE_REVERSE_DEPTHBUFFER = "" : delete kk.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? kk.USE_EXACT_SRGB_CONVERSIONS = "" : delete kk.USE_EXACT_SRGB_CONVERSIONS);
        {
          let kk = "";
          return this.isNDCHalfZRange && (kk += "#define IS_NDC_HALF_ZRANGE"), this.rBk && (kk && (kk += "\n"), kk += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (kk && (kk += "\n"), kk += "#define USE_EXACT_SRGB_CONVERSIONS"), kk
        }
      }
      _rebuildInternalTextures() {
        const kk = this._internalTexturesCache.slice();
        for (const Fk of kk) Fk._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const kk = this._renderTargetWrapperCache.slice();
        for (const Fk of kk) Fk.textures?.some((kk => 15 === kk.source)) || Fk._rebuild()
      }
      _rebuildEffects() {
        for (const kk in this._compiledEffects) {
          const Fk = this._compiledEffects[kk];
          Fk._pipelineContext = null, Fk._prepareEffect()
        }
        tk.b.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        Xk.b.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(kk) {
        setTimeout((() => {
          this._clearEmptyResources();
          const Fk = this._depthCullingState.depthTest,
            Bk = this._depthCullingState.depthFunc,
            Rk = this._depthCullingState.depthMask,
            tk = this._stencilState.stencilTest;
          kk(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = Fk, this._depthCullingState.depthFunc = Bk, this._depthCullingState.depthMask = Rk, this._stencilState.stencilTest = tk, this._flagContextRestored()
        }), 0)
      }
      get BBk() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(kk) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(kk) {}
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
          const kk = new Uint8Array(4),
            Fk = [kk, kk, kk, kk, kk, kk];
          this._emptyCubeTexture = this.createRawCubeTexture(Fk, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(kk) {
        this._framebufferDimensionsObject = kk
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(kk) {
        if (!kk) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const Fk = this._activeRenderLoops.indexOf(kk);
        Fk >= 0 && (this._activeRenderLoops.splice(Fk, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: kk
            } = this.customAnimationFrameRequester;
            kk && kk(this.customAnimationFrameRequester.ky), delete this.customAnimationFrameRequester.ky
          }
        } else if (0 !== this._frameHandler) {
          const kk = this._frameHandler;
          if (this._frameHandler = 0, (0, yk.j)()) {
            const {
              cancelAnimationFrame: Fk
            } = this.getHostWindow() || window;
            if ("function" === typeof Fk) return Fk(kk)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(kk);
          return clearTimeout(kk)
        }
      }
      kY() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      FY() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(kk) {
        this._maxFPS = kk, void 0 !== kk && (this._minFrameTime = kk <= 0 ? Number.MAX_VALUE : 1e3 / kk)
      }
      _isOverFrameTime(kk) {
        if (!kk || void 0 === this._maxFPS) return !1;
        const Fk = kk - this._lastFrameTime;
        return this._lastFrameTime = kk, this._renderAccumulator += Fk, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(kk) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(kk)) {
          let kk = !0;
          (this.BBk || !this.renderEvenInBackground && this._windowIsBackground) && (kk = !1), kk && (this.kY(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.FY())
        }
      }
      _renderLoop(kk) {
        this._processFrame(kk), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let kk = 0; kk < this._activeRenderLoops.length; kk++) {
          (0, this._activeRenderLoops[kk])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(kk, Fk) {
        return mk(kk, Fk)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.ky = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.ky) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(kk) {
        -1 === this._activeRenderLoops.indexOf(kk) && (this._activeRenderLoops.push(kk), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(kk) {
        this._depthCullingState.depthTest = kk
      }
      setZOffset(kk) {
        this._depthCullingState.zOffset = this.rBk ? -kk : kk
      }
      getZOffset() {
        const kk = this._depthCullingState.zOffset;
        return this.rBk ? -kk : kk
      }
      setZOffsetUnits(kk) {
        this._depthCullingState.zOffsetUnits = this.rBk ? -kk : kk
      }
      getZOffsetUnits() {
        const kk = this._depthCullingState.zOffsetUnits;
        return this.rBk ? -kk : kk
      }
      getHostWindow() {
        return (0, yk.j)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(kk) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const kk of this.scenes) kk._rebuildTextures();
        for (const kk of this._virtualScenes) kk._rebuildTextures()
      }
      _releaseRenderTargetWrapper(kk) {
        const Fk = this._renderTargetWrapperCache.indexOf(kk); - 1 !== Fk && this._renderTargetWrapperCache.splice(Fk, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(kk, Fk, Bk) {
        const Rk = Fk || this.getRenderWidth(),
          tk = Bk || this.getRenderHeight(),
          ak = kk.x || 0,
          Xk = kk.y || 0;
        this._cachedViewport = kk, this._viewport(ak * Rk, Xk * tk, Rk * kk.width, tk * kk.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(kk) {
        return new Path2D(kk)
      }
      get description() {
        let kk = this.name + this.version;
        return this._caps.parallelShaderCompile && (kk += " - Parallel shader compilation"), kk
      }
      _createTextureBase(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          bk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          wk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          dk = arguments.length > 7 ? arguments[7] : void 0,
          sk = arguments.length > 8 ? arguments[8] : void 0,
          Vk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Jk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Ak = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          yk = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          fk = arguments.length > 13 ? arguments[13] : void 0,
          mk = arguments.length > 14 ? arguments[14] : void 0,
          vk = arguments.length > 15 ? arguments[15] : void 0;
        const ik = "data:" === (kk = kk || "").substring(0, 5),
          Yk = "blob:" === kk.substring(0, 5),
          Lk = ik && -1 !== kk.indexOf(";base64,"),
          Ok = Jk || new ek.c(this, 1);
        Ok !== Jk && (Ok.label = kk.substring(0, 60));
        const Ek = kk;
        !this._transformTextureUrl || Lk || Jk || Vk || (kk = this._transformTextureUrl(kk)), Ek !== kk && (Ok._originalUrl = Ek);
        const Sk = kk.lastIndexOf(".");
        let Nk = yk || (Sk > -1 ? kk.substring(Sk).toLowerCase() : "");
        Nk.indexOf("?") > -1 && (Nk = Nk.split("?")[0]);
        const Hk = Wk.GetCompatibleTextureLoader(Nk, fk);
        Rk && Rk.addPendingData(Ok), Ok.url = kk, Ok.generateMipMaps = !Fk, Ok.samplingMode = tk, Ok.invertY = Bk, Ok._useSRGBBuffer = this._getUseSRGBBuffer(!!vk, Fk), this._doNotHandleContextLost || (Ok._buffer = Vk);
        let uk = null;
        bk && !Jk && (uk = Ok.onLoadedObservable.add(bk)), Jk || this._internalTexturesCache.push(Ok);
        const Mk = (Bk, Jk) => {
          Rk && Rk.removePendingData(Ok), kk === Ek ? (uk && Ok.onLoadedObservable.remove(uk), ak.c.UseFallbackTexture && kk !== ak.c.FallbackTexture && this._createTextureBase(ak.c.FallbackTexture, Fk, Ok.invertY, Rk, tk, null, wk, dk, sk, Vk, Ok), Bk = (Bk || "Unknown error") + (ak.c.UseFallbackTexture ? " - Fallback texture was used" : ""), Ok.onErrorObservable.notifyObservers({
            message: Bk,
            exception: Jk
          }), wk && wk(Bk, Jk)) : (Xk.b.Warn(`Failed to load ${kk}, falling back to ${Ek}`), this._createTextureBase(Ek, Fk, Ok.invertY, Rk, tk, bk, wk, dk, sk, Vk, Ok, Ak, yk, fk, mk, vk))
        };
        if (Hk) {
          const Fk = async kk => {
            (await Hk).loadData(kk, Ok, ((kk, Fk, Bk, ak, Xk, bk) => {
              bk ? Mk("TextureLoader failed to load data") : dk(Ok, Nk, Rk, {
                width: kk,
                height: Fk
              }, Ok.invertY, !Bk, ak, (() => (Xk(), !1)), tk)
            }), mk)
          };
          if (Vk) {
            const kk = async kk => {
              try {
                await Fk(kk)
              } catch (Bk) {
                Mk("Failed to parse texture data", Bk)
              }
            };
            Vk instanceof ArrayBuffer ? kk(new Uint8Array(Vk)) : ArrayBuffer.isView(Vk) ? kk(Vk) : wk && wk("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(kk, (async kk => {
            try {
              await Fk(new Uint8Array(kk))
            } catch (Bk) {
              Mk("Failed to parse texture data", Bk)
            }
          }), void 0, Rk ? Rk.offlineProvider : void 0, !0, ((kk, Fk) => {
            Mk("Unable to load " + (kk && kk.responseURL, Fk))
          }))
        } else {
          const Bk = kk => {
            Yk && !this._doNotHandleContextLost && (Ok._buffer = kk), dk(Ok, Nk, Rk, kk, Ok.invertY, Fk, !1, sk, tk)
          };
          !ik || Lk ? Vk && ("string" === typeof Vk.decoding || Vk.close) ? Bk(Vk) : Wk._FileToolsLoadImage(kk || "", Bk, Mk, Rk ? Rk.offlineProvider : null, fk, Ok.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof Vk || Vk instanceof ArrayBuffer || ArrayBuffer.isView(Vk) || Vk instanceof Blob ? Wk._FileToolsLoadImage(Vk, Bk, Mk, Rk ? Rk.offlineProvider : null, fk, Ok.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : Vk && Bk(Vk)
        }
        return Ok
      }
      _rebuildBuffers() {
        for (const kk of this._uniformBuffers) kk._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, yk.e)() ? document : null
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
        for (const kk in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, kk) && (this._boundTexturesCache[kk] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(kk) {
        this._name = kk
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
      setHardwareScalingLevel(kk) {
        this._hardwareScalingLevel = kk, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(kk) {
        this._doNotHandleContextLost = kk
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(kk, Fk, Bk) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new dk, this._stencilStateComposer = new sk, this._stencilState = new Vk, this._alphaState = new Jk.e(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new Rk.e, this.onCanvasFocusObservable = new Rk.e, this.onNewSceneAddedObservable = new Rk.e, this.onResizeObservable = new Rk.e, this.onCanvasPointerOutObservable = new Rk.e, this.onEffectErrorObservable = new Rk.e, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new Rk.e, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = kk => this._renderLoop(kk), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new Rk.e, this.onAfterShaderCompilationObservable = new Rk.e, this.onBeginFrameObservable = new Rk.e, this.onEndFrameObservable = new Rk.e, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new Rk.e, this.onContextRestoredObservable = new Rk.e, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.yN = new Rk.e, this.onReleaseEffectsObservable = new Rk.e, ak.c.Instances.push(this), this.startTime = wk.e.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, bk.e.SetMatrixPrecision(!!Fk.useLargeWorldRendering || !!Fk.useHighPrecisionMatrix), (0, yk.g)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), Fk.antialias = kk ?? Fk.antialias, Fk.deterministicLockstep = Fk.deterministicLockstep ?? !1, Fk.lockstepMaxSteps = Fk.lockstepMaxSteps ?? 4, Fk.timeStep = Fk.timeStep ?? 1 / 60, Fk.stencil = Fk.stencil ?? !0, this._audioContext = Fk.audioEngineOptions?.audioContext ?? null, this._audioDestination = Fk.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = Fk.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!Fk.doNotHandleContextLost, this._isStencilEnable = !!Fk.stencil, this.useExactSrgbConversions = Fk.useExactSrgbConversions ?? !1, this.canvasTabIndex = Fk.canvasTabIndex ?? this.canvasTabIndex;
        const tk = (0, yk.j)() && window.devicePixelRatio || 1,
          Xk = Fk.limitDeviceRatio || tk;
        Bk = Bk || Fk.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = Bk, this._hardwareScalingLevel = Bk ? 1 / Math.min(Xk, tk) : 1, this._lastDevicePixelRatio = tk, this._creationOptions = Fk
      }
      resize() {
        let kk, Fk, Bk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const kk = (0, yk.j)() && window.devicePixelRatio || 1,
            Fk = this._lastDevicePixelRatio / kk;
          this._lastDevicePixelRatio = kk, this._hardwareScalingLevel *= Fk
        }
        if ((0, yk.j)() && (0, yk.e)())
          if (this._renderingCanvas) {
            const Bk = this._renderingCanvas.getBoundingClientRect?.();
            kk = this._renderingCanvas.clientWidth || Bk?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, Fk = this._renderingCanvas.clientHeight || Bk?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else kk = window.innerWidth, Fk = window.innerHeight;
        else kk = this._renderingCanvas ? this._renderingCanvas.width : 100, Fk = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(kk / this._hardwareScalingLevel, Fk / this._hardwareScalingLevel, Bk)
      }
      setSize(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (kk |= 0, Fk |= 0, !Bk && this._renderingCanvas.width === kk && this._renderingCanvas.height === Fk) return !1;
        if (this._renderingCanvas.width = kk, this._renderingCanvas.height = Fk, this.scenes) {
          for (let kk = 0; kk < this.scenes.length; kk++) {
            const Fk = this.scenes[kk];
            for (let kk = 0; kk < Fk.cameras.length; kk++) {
              Fk.cameras[kk]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk, sk, Vk) {
        throw (0, Ak.i)("engine.rawTexture")
      }
      createRawCubeTexture(kk, Fk, Bk, Rk, tk, ak, Xk, bk) {
        throw (0, Ak.i)("engine.rawTexture")
      }
      createRawTexture3D(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk, sk) {
        throw (0, Ak.i)("engine.rawTexture")
      }
      createRawTexture2DArray(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk, sk, Vk) {
        throw (0, Ak.i)("engine.rawTexture")
      }
      _sharedInit(kk) {
        this._renderingCanvas = kk
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const kk = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== kk.indexOf("Mobile") || -1 !== kk.indexOf("Mac") && (0, yk.e)() && "ontouchend" in document
        }, this._checkForMobile(), (0, yk.j)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(kk) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(kk, !1)
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
      _createImageBitmapFromSource(kk, Fk) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(kk, Fk) {
        return createImageBitmap(kk, Fk)
      }
      resizeImageBitmap(kk, Fk, Bk) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(kk) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(kk, Fk) {
        if ("undefined" === typeof document) return new OffscreenCanvas(kk, Fk);
        const Bk = document.createElement("canvas");
        return Bk.width = kk, Bk.height = Fk, Bk
      }
      createCanvas(kk, Fk) {
        return Wk._CreateCanvas(kk, Fk)
      }
      static _FileToolsLoadImage(kk, Fk, Bk, Rk, tk, ak, Xk) {
        if (!fk.e.loadImage) throw (0, Ak.i)("FileTools");
        return fk.e.loadImage(kk, Fk, Bk, Rk, tk, ak, Xk)
      }
      _loadFile(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = (0, fk.m)(kk, Fk, Bk, Rk, tk, ak);
        return this._activeRequests.push(Xk), Xk.onCompleteObservable.add((() => {
          const kk = this._activeRequests.indexOf(Xk); - 1 !== kk && this._activeRequests.splice(kk, 1)
        })), Xk
      }
      static _FileToolsLoadFile(kk, Fk, Bk, Rk, tk, ak) {
        if (fk.e.loadFile) return fk.e.loadFile(kk, Fk, Bk, Rk, tk, ak);
        throw (0, Ak.i)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), tk.b.ResetCache();
        for (const Fk of this._activeRequests) Fk.abort();
        this._boundRenderFunction = null, this.yN.notifyObservers(this), this.yN.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, yk.j)() && window.removeEventListener("resize", this._checkForMobile);
        const kk = ak.c.Instances.indexOf(this);
        kk >= 0 && ak.c.Instances.splice(kk, 1), ak.c.Instances.length || (ak.c.OnEnginesDisposedObservable.notifyObservers(this), ak.c.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(kk) {
        throw (0, Ak.i)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(kk, Fk) {
        for (let Bk = 0; Bk < ak.c.Instances.length; Bk++) {
          const Rk = ak.c.Instances[Bk];
          for (let Bk = 0; Bk < Rk.scenes.length; Bk++) Rk.scenes[Bk].markAllMaterialsAsDirty(kk, Fk)
        }
      }
      static GetCompatibleTextureLoader(kk, Fk) {
        return null
      }
    }
    Wk._RenderPassIdCounter = 0, Wk._RescalePostProcessFactory = null, Wk.CollisionsEpsilon = .001, Wk.QueueNewFrame = mk
  },
  39270: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk
    });
    class Rk {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Rk.ShadersRepository : Rk.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Rk.ShadersStore : Rk.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Rk.IncludesShadersStore : Rk.IncludesShadersStoreWGSL
      }
    }
    Rk.ShadersRepository = "src/Shaders/", Rk.ShadersStore = {}, Rk.IncludesShadersStore = {}, Rk.ShadersRepositoryWGSL = "src/ShadersWGSL/", Rk.ShadersStoreWGSL = {}, Rk.IncludesShadersStoreWGSL = {}
  },
  39288: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Jk,
      g: () => vk,
      i: () => ek,
      m: () => Ak,
      n: () => yk,
      q: () => Wk,
      t: () => Vk,
      x: () => dk,
      y: () => sk,
      A: () => wk,
      E: () => bk
    });
    class Rk {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(kk) {
        kk && this.program && kk(this.program)
      }
      setEngine(kk) {
        this.engine = kk
      }
      _fillEffectInformation(kk, Fk, Bk, Rk, tk, ak, Xk, bk) {
        const wk = this.engine;
        if (wk.supportsUniformBuffers)
          for (const sk in Fk) kk.bindUniformBlock(sk, Fk[sk]);
        let dk;
        for (this.engine.getUniforms(this, Bk).forEach(((kk, Fk) => {
            Rk[Bk[Fk]] = kk
          })), this._uniforms = Rk, dk = 0; dk < tk.length; dk++) {
          null == kk.getUniform(tk[dk]) && (tk.splice(dk, 1), dk--)
        }
        tk.forEach(((kk, Fk) => {
          ak[kk] = Fk
        }));
        for (const sk of wk.getAttributes(this, Xk)) bk.push(sk)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(kk, Fk) {
        const Bk = this._valueCache[kk],
          Rk = Fk.updateFlag;
        if (void 0 !== Bk && Bk === Rk) return !1;
        const tk = Fk.PBk();
        let ak = this._matrixValueCache[kk];
        if (void 0 !== Bk && null !== Bk && void 0 !== ak) {
          let Fk = !0;
          for (let kk = 15; kk >= 0; kk--)
            if (ak[kk] !== tk[kk]) {
              Fk = !1;
              break
            } if (Fk) return this._valueCache[kk] = Rk, !1
        }
        return void 0 === ak && (ak = this._matrixValueCache[kk] = new Float32Array(16)), ak.set(tk), this._valueCache[kk] = Rk, !0
      }
      _cacheFloat2(kk, Fk, Bk) {
        let Rk = this._valueCache[kk];
        if (!Rk || 2 !== Rk.length) return Rk = [Fk, Bk], this._valueCache[kk] = Rk, !0;
        let tk = !1;
        return Rk[0] !== Fk && (Rk[0] = Fk, tk = !0), Rk[1] !== Bk && (Rk[1] = Bk, tk = !0), tk
      }
      _cacheFloat3(kk, Fk, Bk, Rk) {
        let tk = this._valueCache[kk];
        if (!tk || 3 !== tk.length) return tk = [Fk, Bk, Rk], this._valueCache[kk] = tk, !0;
        let ak = !1;
        return tk[0] !== Fk && (tk[0] = Fk, ak = !0), tk[1] !== Bk && (tk[1] = Bk, ak = !0), tk[2] !== Rk && (tk[2] = Rk, ak = !0), ak
      }
      _cacheFloat4(kk, Fk, Bk, Rk, tk) {
        let ak = this._valueCache[kk];
        if (!ak || 4 !== ak.length) return ak = [Fk, Bk, Rk, tk], this._valueCache[kk] = ak, !0;
        let Xk = !1;
        return ak[0] !== Fk && (ak[0] = Fk, Xk = !0), ak[1] !== Bk && (ak[1] = Bk, Xk = !0), ak[2] !== Rk && (ak[2] = Rk, Xk = !0), ak[3] !== tk && (ak[3] = tk, Xk = !0), Xk
      }
      setInt(kk, Fk) {
        const Bk = this._valueCache[kk];
        void 0 !== Bk && Bk === Fk || this.engine.setInt(this._uniforms[kk], Fk) && (this._valueCache[kk] = Fk)
      }
      setInt2(kk, Fk, Bk) {
        this._cacheFloat2(kk, Fk, Bk) && (this.engine.setInt2(this._uniforms[kk], Fk, Bk) || (this._valueCache[kk] = null))
      }
      setInt3(kk, Fk, Bk, Rk) {
        this._cacheFloat3(kk, Fk, Bk, Rk) && (this.engine.setInt3(this._uniforms[kk], Fk, Bk, Rk) || (this._valueCache[kk] = null))
      }
      setInt4(kk, Fk, Bk, Rk, tk) {
        this._cacheFloat4(kk, Fk, Bk, Rk, tk) && (this.engine.setInt4(this._uniforms[kk], Fk, Bk, Rk, tk) || (this._valueCache[kk] = null))
      }
      setIntArray(kk, Fk) {
        this._valueCache[kk] = null, this.engine.setIntArray(this._uniforms[kk], Fk)
      }
      setIntArray2(kk, Fk) {
        this._valueCache[kk] = null, this.engine.setIntArray2(this._uniforms[kk], Fk)
      }
      setIntArray3(kk, Fk) {
        this._valueCache[kk] = null, this.engine.setIntArray3(this._uniforms[kk], Fk)
      }
      setIntArray4(kk, Fk) {
        this._valueCache[kk] = null, this.engine.setIntArray4(this._uniforms[kk], Fk)
      }
      setUInt(kk, Fk) {
        const Bk = this._valueCache[kk];
        void 0 !== Bk && Bk === Fk || this.engine.setUInt(this._uniforms[kk], Fk) && (this._valueCache[kk] = Fk)
      }
      setUInt2(kk, Fk, Bk) {
        this._cacheFloat2(kk, Fk, Bk) && (this.engine.setUInt2(this._uniforms[kk], Fk, Bk) || (this._valueCache[kk] = null))
      }
      setUInt3(kk, Fk, Bk, Rk) {
        this._cacheFloat3(kk, Fk, Bk, Rk) && (this.engine.setUInt3(this._uniforms[kk], Fk, Bk, Rk) || (this._valueCache[kk] = null))
      }
      setUInt4(kk, Fk, Bk, Rk, tk) {
        this._cacheFloat4(kk, Fk, Bk, Rk, tk) && (this.engine.setUInt4(this._uniforms[kk], Fk, Bk, Rk, tk) || (this._valueCache[kk] = null))
      }
      setUIntArray(kk, Fk) {
        this._valueCache[kk] = null, this.engine.setUIntArray(this._uniforms[kk], Fk)
      }
      setUIntArray2(kk, Fk) {
        this._valueCache[kk] = null, this.engine.setUIntArray2(this._uniforms[kk], Fk)
      }
      setUIntArray3(kk, Fk) {
        this._valueCache[kk] = null, this.engine.setUIntArray3(this._uniforms[kk], Fk)
      }
      setUIntArray4(kk, Fk) {
        this._valueCache[kk] = null, this.engine.setUIntArray4(this._uniforms[kk], Fk)
      }
      setArray(kk, Fk) {
        this._valueCache[kk] = null, this.engine.setArray(this._uniforms[kk], Fk)
      }
      setArray2(kk, Fk) {
        this._valueCache[kk] = null, this.engine.setArray2(this._uniforms[kk], Fk)
      }
      setArray3(kk, Fk) {
        this._valueCache[kk] = null, this.engine.setArray3(this._uniforms[kk], Fk)
      }
      setArray4(kk, Fk) {
        this._valueCache[kk] = null, this.engine.setArray4(this._uniforms[kk], Fk)
      }
      setMatrices(kk, Fk) {
        Fk && (this._valueCache[kk] = null, this.engine.setMatrices(this._uniforms[kk], Fk))
      }
      setMatrix(kk, Fk) {
        this._cacheMatrix(kk, Fk) && (this.engine.setMatrices(this._uniforms[kk], Fk.PBk()) || (this._valueCache[kk] = null))
      }
      setMatrix3x3(kk, Fk) {
        this._valueCache[kk] = null, this.engine.setMatrix3x3(this._uniforms[kk], Fk)
      }
      setMatrix2x2(kk, Fk) {
        this._valueCache[kk] = null, this.engine.setMatrix2x2(this._uniforms[kk], Fk)
      }
      setFloat(kk, Fk) {
        const Bk = this._valueCache[kk];
        void 0 !== Bk && Bk === Fk || this.engine.setFloat(this._uniforms[kk], Fk) && (this._valueCache[kk] = Fk)
      }
      setVector2(kk, Fk) {
        this._cacheFloat2(kk, Fk.x, Fk.y) && (this.engine.setFloat2(this._uniforms[kk], Fk.x, Fk.y) || (this._valueCache[kk] = null))
      }
      setFloat2(kk, Fk, Bk) {
        this._cacheFloat2(kk, Fk, Bk) && (this.engine.setFloat2(this._uniforms[kk], Fk, Bk) || (this._valueCache[kk] = null))
      }
      setVector3(kk, Fk) {
        this._cacheFloat3(kk, Fk.x, Fk.y, Fk.z) && (this.engine.setFloat3(this._uniforms[kk], Fk.x, Fk.y, Fk.z) || (this._valueCache[kk] = null))
      }
      setFloat3(kk, Fk, Bk, Rk) {
        this._cacheFloat3(kk, Fk, Bk, Rk) && (this.engine.setFloat3(this._uniforms[kk], Fk, Bk, Rk) || (this._valueCache[kk] = null))
      }
      setVector4(kk, Fk) {
        this._cacheFloat4(kk, Fk.x, Fk.y, Fk.z, Fk.w) && (this.engine.setFloat4(this._uniforms[kk], Fk.x, Fk.y, Fk.z, Fk.w) || (this._valueCache[kk] = null))
      }
      setQuaternion(kk, Fk) {
        this._cacheFloat4(kk, Fk.x, Fk.y, Fk.z, Fk.w) && (this.engine.setFloat4(this._uniforms[kk], Fk.x, Fk.y, Fk.z, Fk.w) || (this._valueCache[kk] = null))
      }
      setFloat4(kk, Fk, Bk, Rk, tk) {
        this._cacheFloat4(kk, Fk, Bk, Rk, tk) && (this.engine.setFloat4(this._uniforms[kk], Fk, Bk, Rk, tk) || (this._valueCache[kk] = null))
      }
      setColor3(kk, Fk) {
        this._cacheFloat3(kk, Fk.r, Fk.g, Fk.b) && (this.engine.setFloat3(this._uniforms[kk], Fk.r, Fk.g, Fk.b) || (this._valueCache[kk] = null))
      }
      setColor4(kk, Fk, Bk) {
        this._cacheFloat4(kk, Fk.r, Fk.g, Fk.b, Bk) && (this.engine.setFloat4(this._uniforms[kk], Fk.r, Fk.g, Fk.b, Bk) || (this._valueCache[kk] = null))
      }
      setDirectColor4(kk, Fk) {
        this._cacheFloat4(kk, Fk.r, Fk.g, Fk.b, Fk.a) && (this.engine.setFloat4(this._uniforms[kk], Fk.r, Fk.g, Fk.b, Fk.a) || (this._valueCache[kk] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var tk = Bk(39293);
    const ak = new WeakMap,
      Xk = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function bk(kk) {
      let Fk = ak.get(kk);
      if (!Fk) {
        if (!kk) return Xk;
        Fk = {
          _webGLVersion: kk.TEXTURE_BINDING_3D ? 2 : 1,
          _context: kk,
          parallelShaderCompile: kk.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, ak.set(kk, Fk)
      }
      return Fk
    }

    function wk(kk) {
      ak.delete(kk)
    }

    function dk(kk, Fk, Bk, Rk, tk, ak) {
      const Xk = bk(Rk);
      ak || (ak = Xk._createShaderProgramInjection ?? Jk);
      return ak(kk, mk(Fk, "vertex", Rk, Xk._contextWasLost), mk(Bk, "fragment", Rk, Xk._contextWasLost), Rk, tk, Xk.validateShaderPrograms)
    }

    function sk(kk, Fk, Bk, Rk, tk) {
      let ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Xk = arguments.length > 6 ? arguments[6] : void 0;
      const wk = bk(tk);
      Xk || (Xk = wk._createShaderProgramInjection ?? Jk);
      const dk = wk._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return Xk(kk, fk(Fk, "vertex", Rk, dk, tk, wk._contextWasLost), fk(Bk, "fragment", Rk, dk, tk, wk._contextWasLost), tk, ak, wk.validateShaderPrograms)
    }

    function Vk(kk, Fk) {
      const Bk = new Rk,
        tk = bk(kk);
      return tk.parallelShaderCompile && !tk.disableParallelShaderCompile && (Bk.isParallelCompiled = !0), Bk.context = tk._context, Bk
    }

    function Jk(kk, Fk, Bk, Rk) {
      let tk = arguments.length > 5 ? arguments[5] : void 0;
      const ak = Rk.createProgram();
      if (kk.program = ak, !ak) throw new Error("Unable to create program");
      return Rk.attachShader(ak, Fk), Rk.attachShader(ak, Bk), Rk.linkProgram(ak), kk.context = Rk, kk.vertexShader = Fk, kk.fragmentShader = Bk, kk.isParallelCompiled || ek(kk, Rk, tk), ak
    }

    function Ak(kk, Fk, Bk) {
      const Rk = kk;
      if (Rk._isDisposed) return !1;
      const tk = bk(Fk);
      return !!(tk && tk.parallelShaderCompile && tk.parallelShaderCompile.COMPLETION_STATUS_KHR && Rk.program && Fk.getProgramParameter(Rk.program, tk.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (ek(Rk, Fk, Bk), !0)
    }

    function ek(kk, Fk, Bk) {
      const Rk = kk.context,
        tk = kk.vertexShader,
        ak = kk.fragmentShader,
        Xk = kk.program;
      if (!Rk.getProgramParameter(Xk, Rk.LINK_STATUS)) {
        if (!Fk.getShaderParameter(tk, Fk.COMPILE_STATUS)) {
          const Bk = Fk.getShaderInfoLog(tk);
          if (Bk) throw kk.vertexCompilationError = Bk, new Error("VERTEX SHADER " + Bk)
        }
        if (!Fk.getShaderParameter(ak, Fk.COMPILE_STATUS)) {
          const Bk = Fk.getShaderInfoLog(ak);
          if (Bk) throw kk.fragmentCompilationError = Bk, new Error("FRAGMENT SHADER " + Bk)
        }
        const Bk = Rk.getProgramInfoLog(Xk);
        if (Bk) throw kk.programLinkError = Bk, new Error(Bk)
      }
      if (Bk) {
        Rk.validateProgram(Xk);
        if (!Rk.getProgramParameter(Xk, Rk.VALIDATE_STATUS)) {
          const Fk = Rk.getProgramInfoLog(Xk);
          if (Fk) throw kk.programValidationError = Fk, new Error(Fk)
        }
      }
      Rk.deleteShader(tk), Rk.deleteShader(ak), kk.vertexShader = void 0, kk.fragmentShader = void 0, kk.onCompiled && (kk.onCompiled(), kk.onCompiled = void 0)
    }

    function yk(kk, Fk, Bk, Rk, tk, ak, Xk, wk, Vk) {
      let Jk = arguments.length > 10 ? arguments[10] : void 0,
        Ak = arguments.length > 11 ? arguments[11] : void 0,
        ek = arguments.length > 12 ? arguments[12] : void 0;
      const yk = bk(kk.context);
      Ak || (Ak = yk.createRawShaderProgramInjection ?? dk), ek || (ek = yk.createShaderProgramInjection ?? sk);
      const fk = kk;
      fk.program = Rk ? Ak(fk, Fk, Bk, fk.context, Vk) : ek(fk, Fk, Bk, wk, fk.context, Vk), fk.program.__SPECTOR_rebuildProgram = Xk, Jk()
    }

    function fk(kk, Fk, Bk, Rk, ak, Xk) {
      return mk((0, tk.h)(kk, Bk, Rk), Fk, ak, Xk)
    }

    function mk(kk, Fk, Bk, Rk) {
      const tk = Bk.createShader("vertex" === Fk ? Bk.VERTEX_SHADER : Bk.FRAGMENT_SHADER);
      if (!tk) {
        let kk, tk = Bk.NO_ERROR;
        for (;
          (kk = Bk.getError()) !== Bk.NO_ERROR;) tk = kk;
        throw new Error(`Something went wrong while creating a gl ${Fk} shader object. gl error=${tk}, gl isContextLost=${Bk.isContextLost()}, _contextWasLost=${Rk}`)
      }
      return Bk.shaderSource(tk, kk), Bk.compileShader(tk), tk
    }

    function Wk(kk, Fk) {
      Fk.useProgram(kk)
    }

    function vk(kk, Fk) {
      const Bk = kk;
      if (!Bk.isParallelCompiled) return void Fk(kk);
      const Rk = Bk.onCompiled;
      Bk.onCompiled = () => {
        Rk?.(), Fk(kk)
      }
    }
  },
  39258: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      ThinEngine: () => Yk
    });
    var Rk = Bk(39261),
      tk = Bk(39288),
      ak = Bk(39305),
      Xk = Bk(39313),
      bk = Bk(38320),
      wk = Bk(39281);
    class dk {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(kk, Fk, Bk, Rk, tk) {
        if (tk.drawBuffersExtensionDisabled) {
          const Fk = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          kk = kk.replace(Fk, "")
        }
        return kk
      }
    }
    const sk = /(flat\s)?\s*varying\s*.*/;
    class Vk {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(kk) {
        return kk.replace("attribute", "in")
      }
      varyingCheck(kk, Fk) {
        return sk.test(kk)
      }
      varyingProcessor(kk, Fk) {
        return kk.replace("varying", Fk ? "in" : "out")
      }
      postProcessor(kk, Fk, Bk) {
        const Rk = -1 !== kk.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (kk = (kk = kk.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), Bk) {
          const Bk = -1 !== kk.search(/layout *\(location *= *0\) *out/g),
            tk = -1 !== Fk.indexOf("#define DUAL_SOURCE_BLENDING"),
            ak = tk ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          tk && (kk = "#extension GL_EXT_blend_func_extended : require\n" + kk), kk = (kk = (kk = (kk = (kk = (kk = (kk = kk.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (Rk || Bk ? "" : ak) + "void main(")
        } else {
          Fk.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (kk = "invariant gl_Position;\n" + kk);
          if (-1 !== Fk.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + kk
        }
        return kk
      }
    }
    var Jk = Bk(39317),
      Ak = Bk(39329),
      ek = Bk(39334),
      yk = Bk(39248),
      fk = Bk(39293),
      mk = Bk(39279),
      Wk = Bk(39342),
      vk = Bk(39311);
    class ik {}
    class Yk extends ak.c {
      get name() {
        return this._name
      }
      set name(kk) {
        this._name = kk
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return Rk.b.ShadersRepository
      }
      static set ShadersRepository(kk) {
        Rk.b.ShadersRepository = kk
      }
      get supportsUniformBuffers() {
        return this.Uy > 1 && !this.disableUniformBuffers
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
      constructor(kk, Fk, Bk, Rk) {
        if (Bk = Bk || {}, super(Fk ?? Bk.antialias, Bk, Rk), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !kk) return;
        let ak;
        if (kk.getContext) {
          if (ak = kk, void 0 === Bk.preserveDrawingBuffer && (Bk.preserveDrawingBuffer = !1), void 0 === Bk.xrCompatible && (Bk.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const kk = navigator.userAgent;
            for (const Fk of Yk.ExceptionList) {
              const Rk = Fk.key,
                tk = Fk.targets;
              if (new RegExp(Rk).test(kk)) {
                if (Fk.capture && Fk.captureConstraint) {
                  const Bk = Fk.capture,
                    Rk = Fk.captureConstraint,
                    tk = new RegExp(Bk).exec(kk);
                  if (tk && tk.length > 0) {
                    if (parseInt(tk[tk.length - 1]) >= Rk) continue
                  }
                }
                for (const kk of tk) switch (kk) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    Bk.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, tk.A)(this._gl)
            } : (this._onContextLost = kk => {
              kk.preventDefault(), this._contextWasLost = !0, (0, tk.A)(this._gl), bk.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, ak.addEventListener("webglcontextrestored", this._onContextRestored, !1), Bk.powerPreference = Bk.powerPreference || "high-performance"), ak.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (Bk.xrCompatible = !1), !Bk.disableWebGL2Support) try {
            this._gl = ak.getContext("webgl2", Bk) || ak.getContext("experimental-webgl2", Bk), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (sk) {}
          if (!this._gl) {
            if (!ak) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = ak.getContext("webgl", Bk) || ak.getContext("experimental-webgl", Bk)
            } catch (sk) {
              throw new Error("WebGL not supported", {
                cause: sk
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = kk, ak = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const Fk = this._gl.getContextAttributes();
          Fk && (Bk.stencil = Fk.stencil)
        }
        this._sharedInit(ak), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== Bk.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = Bk.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let tk = 0; tk < this._caps.maxVertexAttribs; tk++) this._currentBufferPointers[tk] = new ik;
        this._shaderProcessor = this.Uy > 1 ? new Vk : new dk;
        const Xk = `Babylon.js v${Yk.Version}`;
        bk.b.Log(Xk + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", Xk);
        const wk = (0, tk.E)(this._gl);
        wk.validateShaderPrograms = this.validateShaderPrograms, wk.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(kk) {
        return null
      }
      areAllEffectsReady() {
        for (const kk in this._compiledEffects) {
          if (!this._compiledEffects[kk].isReady()) return !1
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
        const kk = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != kk && (this._glRenderer = this._gl.getParameter(kk.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(kk.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const Fk = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!Fk, this._alphaState = new vk.e(this._caps.blendParametersPerTarget), Fk && (this._gl.blendEquationSeparateIndexed = Fk.blendEquationSeparateiOES.bind(Fk), this._gl.blendEquationIndexed = Fk.blendEquationiOES.bind(Fk), this._gl.blendFuncSeparateIndexed = Fk.blendFuncSeparateiOES.bind(Fk), this._gl.blendFuncIndexed = Fk.blendFunciOES.bind(Fk), this._gl.colorMaskIndexed = Fk.colorMaskiOES.bind(Fk), this._gl.disableIndexed = Fk.disableiOES.bind(Fk), this._gl.enableIndexed = Fk.enableiOES.bind(Fk)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const kk = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== kk) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = kk.drawBuffersWEBGL.bind(kk), this._caps.maxDrawBuffers = this._gl.getParameter(kk.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let Fk = 0; Fk < 16; Fk++) this._gl["COLOR_ATTACHMENT" + Fk + "_WEBGL"] = kk["COLOR_ATTACHMENT" + Fk + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const kk = this._gl.getExtension("WEBGL_depth_texture");
          null != kk && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = kk.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const kk = this._gl.getExtension("OES_vertex_array_object");
          null != kk && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = kk.createVertexArrayOES.bind(kk), this._gl.bindVertexArray = kk.bindVertexArrayOES.bind(kk), this._gl.deleteVertexArray = kk.deleteVertexArrayOES.bind(kk))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const kk = this._gl.getExtension("ANGLE_instanced_arrays");
          null != kk ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = kk.drawArraysInstancedANGLE.bind(kk), this._gl.drawElementsInstanced = kk.drawElementsInstancedANGLE.bind(kk), this._gl.vertexAttribDivisor = kk.vertexAttribDivisorANGLE.bind(kk)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const kk = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            Fk = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (kk && Fk && (this._caps.highPrecisionShaderSupported = 0 !== kk.precision && 0 !== Fk.precision, this._caps.shaderFloatPrecision = Math.min(kk.precision, Fk.precision)), !this._shouldUseHighPrecisionShader) {
            const kk = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              Fk = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            kk && Fk && (this._caps.shaderFloatPrecision = Math.min(kk.precision, Fk.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const kk = this._gl.getExtension("EXT_blend_minmax");
          null != kk && (this._caps.blendMinMax = !0, this._gl.MAX = kk.MAX_EXT, this._gl.MIN = kk.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const kk = this._gl.getExtension("EXT_sRGB");
            null != kk && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: kk.SRGB_EXT,
              SRGB8: kk.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: kk.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const kk = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== kk && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && kk)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let Bk = 0; Bk < this._maxSimultaneousTextures; Bk++) this._nextFreeTextureSlots.push(Bk);
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
      get Uy() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const kk = this._workingCanvas.getContext("2d");
        kk && (this._workingContext = kk)
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
        const kk = this.getGlInfo();
        return kk && kk.renderer ? kk.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const ak = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = ak;
        let Xk = 0;
        if (Fk && kk) {
          let Fk = !0;
          if (this._currentRenderTarget) {
            const Bk = this._currentRenderTarget.texture?.format;
            if (void 0 !== Bk && (0, Wk.l)(Bk)) {
              const Bk = this._currentRenderTarget.texture?.type;
              void 0 !== Bk && (0, Wk.m)(Bk) ? (Yk._TempClearColorUint32[0] = 255 * kk.r, Yk._TempClearColorUint32[1] = 255 * kk.g, Yk._TempClearColorUint32[2] = 255 * kk.b, Yk._TempClearColorUint32[3] = 255 * kk.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, Yk._TempClearColorUint32), Fk = !1) : (Yk._TempClearColorInt32[0] = 255 * kk.r, Yk._TempClearColorInt32[1] = 255 * kk.g, Yk._TempClearColorInt32[2] = 255 * kk.b, Yk._TempClearColorInt32[3] = 255 * kk.a, this._gl.clearBufferiv(this._gl.COLOR, 0, Yk._TempClearColorInt32), Fk = !1)
            }
          }
          Fk && (this._gl.clearColor(kk.r, kk.g, kk.b, void 0 !== kk.a ? kk.a : 1), Xk |= this._gl.COLOR_BUFFER_BIT)
        }
        Bk && (this.rBk ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), Xk |= this._gl.DEPTH_BUFFER_BIT), Rk && (this._gl.clearStencil(tk), Xk |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(Xk)
      }
      _clearColorAttachment(kk, Fk, Bk, Rk) {
        if ((0, Wk.l)(Bk)) {
          const Bk = (0, Wk.m)(Rk),
            tk = Bk ? Yk._TempClearColorUint32 : Yk._TempClearColorInt32;
          return tk[0] = Fk.r, tk[1] = Fk.g, tk[2] = Fk.b, tk[3] = Fk.a, void(Bk ? this._gl.clearBufferuiv(this._gl.COLOR, kk, tk) : this._gl.clearBufferiv(this._gl.COLOR, kk, tk))
        }
        Yk._TempClearColorFloat32[0] = Fk.r, Yk._TempClearColorFloat32[1] = Fk.g, Yk._TempClearColorFloat32[2] = Fk.b, Yk._TempClearColorFloat32[3] = Fk.a, this._gl.clearBufferfv(this._gl.COLOR, kk, Yk._TempClearColorFloat32)
      }
      _viewport(kk, Fk, Bk, Rk) {
        kk === this._viewportCached.x && Fk === this._viewportCached.y && Bk === this._viewportCached.z && Rk === this._viewportCached.w || (this._viewportCached.x = kk, this._viewportCached.y = Fk, this._viewportCached.z = Bk, this._viewportCached.w = Rk, this._gl.viewport(kk, Fk, Bk, Rk))
      }
      FY() {
        super.FY(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0,
          Rk = arguments.length > 3 ? arguments[3] : void 0,
          tk = arguments.length > 4 ? arguments[4] : void 0,
          ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Xk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const wk = kk;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = kk, this._integerMRTAttachmentsMask = !kk.isMulti && kk.texture && (0, Wk.l)(kk.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(wk._framebuffer);
        const dk = this._gl;
        kk.isMulti || (kk.is2DArray || kk.is3D ? (dk.framebufferTextureLayer(dk.FRAMEBUFFER, dk.COLOR_ATTACHMENT0, kk.texture._hardwareTexture?.underlyingResource, ak, Xk), wk._currentLOD = ak) : kk.isCube ? dk.framebufferTexture2D(dk.FRAMEBUFFER, dk.COLOR_ATTACHMENT0, dk.TEXTURE_CUBE_MAP_POSITIVE_X + Fk, kk.texture._hardwareTexture?.underlyingResource, ak) : wk._currentLOD !== ak && (dk.framebufferTexture2D(dk.FRAMEBUFFER, dk.COLOR_ATTACHMENT0, dk.TEXTURE_2D, kk.texture._hardwareTexture?.underlyingResource, ak), wk._currentLOD = ak));
        const sk = kk._depthStencilTexture;
        if (sk) {
          kk.is3D && (kk.texture.width === sk.width && kk.texture.height === sk.height && kk.texture.depth === sk.depth || bk.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const Bk = kk._depthStencilTextureWithStencil ? dk.DEPTH_STENCIL_ATTACHMENT : dk.DEPTH_ATTACHMENT;
          kk.is2DArray || kk.is3D ? dk.framebufferTextureLayer(dk.FRAMEBUFFER, Bk, sk._hardwareTexture?.underlyingResource, ak, Xk) : kk.isCube ? dk.framebufferTexture2D(dk.FRAMEBUFFER, Bk, dk.TEXTURE_CUBE_MAP_POSITIVE_X + Fk, sk._hardwareTexture?.underlyingResource, ak) : dk.framebufferTexture2D(dk.FRAMEBUFFER, Bk, dk.TEXTURE_2D, sk._hardwareTexture?.underlyingResource, ak)
        }
        wk._MSAAFramebuffer && this._bindUnboundFramebuffer(wk._MSAAFramebuffer), this._cachedViewport && !tk ? this.setViewport(this._cachedViewport, Bk, Rk) : (Bk || (Bk = kk.width, ak && (Bk /= Math.pow(2, ak))), Rk || (Rk = kk.height, ak && (Rk /= Math.pow(2, ak))), this._viewport(0, 0, Bk, Rk)), this.wipeCaches()
      }
      setStateCullFaceType(kk, Fk) {
        const Bk = this.cullBackFaces ?? kk ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== Bk || Fk) && (this._depthCullingState.cullFace = Bk)
      }
      setState(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0,
          Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          tk = arguments.length > 4 ? arguments[4] : void 0,
          ak = arguments.length > 5 ? arguments[5] : void 0,
          Xk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== kk || Bk) && (this._depthCullingState.cull = kk), this.setStateCullFaceType(tk, Bk), this.setZOffset(Fk), this.setZOffsetUnits(Xk);
        const bk = Rk ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== bk || Bk) && (this._depthCullingState.frontFace = bk), this._stencilStateComposer.stencilMaterial = ak
      }
      _resolveAndGenerateMipMapsFramebuffer(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        kk.disableAutomaticMSAAResolve || (kk.isMulti ? this.resolveMultiFramebuffer(kk) : this.resolveFramebuffer(kk)), Fk || (kk.isMulti ? this.generateMipMapsMultiFramebuffer(kk) : this.generateMipMapsFramebuffer(kk))
      }
      _bindUnboundFramebuffer(kk) {
        this._currentFramebuffer !== kk && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, kk), this._currentFramebuffer = kk)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(kk) {
        const Fk = this._getTextureTarget(kk);
        this._bindTextureDirectly(Fk, kk, !0), this._gl.generateMipmap(Fk), this._bindTextureDirectly(Fk, null)
      }
      unBindFramebuffer(kk, Fk, Bk) {
        const Rk = kk;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(kk, Fk), Bk && (Rk._MSAAFramebuffer && this._bindUnboundFramebuffer(Rk._framebuffer), Bk()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(kk) {
        kk.isMulti || !kk.texture?.generateMipMaps || kk.isCube || this.generateMipmaps(kk.texture)
      }
      resolveFramebuffer(kk) {
        const Fk = kk,
          Bk = this._gl;
        if (!Fk._MSAAFramebuffer || Fk.isMulti) return;
        let Rk = Fk.resolveMSAAColors ? Bk.COLOR_BUFFER_BIT : 0;
        Rk |= Fk._generateDepthBuffer && Fk.resolveMSAADepth ? Bk.DEPTH_BUFFER_BIT : 0, Rk |= Fk._generateStencilBuffer && Fk.resolveMSAAStencil ? Bk.STENCIL_BUFFER_BIT : 0, Bk.bindFramebuffer(Bk.READ_FRAMEBUFFER, Fk._MSAAFramebuffer), Bk.bindFramebuffer(Bk.DRAW_FRAMEBUFFER, Fk._framebuffer), Bk.blitFramebuffer(0, 0, kk.width, kk.height, 0, 0, kk.width, kk.height, Rk, Bk.NEAREST)
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
      createVertexBuffer(kk, Fk, Bk) {
        return this._createVertexBuffer(kk, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(kk, Fk) {
        const Bk = this._gl.createBuffer();
        if (!Bk) throw new Error("Unable to create vertex buffer");
        const Rk = new Jk.c(Bk);
        return this.bindArrayBuffer(Rk), "number" !== typeof kk ? kk instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(kk), Fk), Rk.KV = 4 * kk.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, kk, Fk), Rk.KV = kk.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(kk), Fk), Rk.KV = kk), this._resetVertexBufferBinding(), Rk.references = 1, Rk
      }
      createDynamicVertexBuffer(kk, Fk) {
        return this._createVertexBuffer(kk, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(kk, Fk, Bk) {
        const Rk = this._gl.createBuffer(),
          tk = new Jk.c(Rk);
        if (!Rk) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(tk);
        const ak = this._normalizeIndexData(kk);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, ak, Fk ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), tk.references = 1, tk.is32Bits = 4 === ak.BYTES_PER_ELEMENT, tk
      }
      _normalizeIndexData(kk) {
        if (2 === kk.BYTES_PER_ELEMENT) return kk;
        if (this._caps.uintIndices) {
          if (kk instanceof Uint32Array) return kk;
          for (let Fk = 0; Fk < kk.length; Fk++)
            if (kk[Fk] >= 65535) return new Uint32Array(kk);
          return new Uint16Array(kk)
        }
        return new Uint16Array(kk)
      }
      bindArrayBuffer(kk) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(kk, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(kk, Fk, Bk) {
        const Rk = kk.program,
          tk = this._gl.getUniformBlockIndex(Rk, Fk);
        this._gl.uniformBlockBinding(Rk, tk, Bk)
      }
      bindIndexBuffer(kk) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(kk, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(kk, Fk) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[Fk] !== kk) && (this._gl.bindBuffer(Fk, kk ? kk.underlyingResource : null), this._currentBoundBuffer[Fk] = kk)
      }
      updateArrayBuffer(kk) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, kk)
      }
      _vertexAttribPointer(kk, Fk, Bk, Rk, tk, ak, Xk) {
        const bk = this._currentBufferPointers[Fk];
        if (!bk) return;
        let wk = !1;
        bk.active ? (bk.buffer !== kk && (bk.buffer = kk, wk = !0), bk.size !== Bk && (bk.size = Bk, wk = !0), bk.type !== Rk && (bk.type = Rk, wk = !0), bk.normalized !== tk && (bk.normalized = tk, wk = !0), bk.stride !== ak && (bk.stride = ak, wk = !0), bk.offset !== Xk && (bk.offset = Xk, wk = !0)) : (wk = !0, bk.active = !0, bk.index = Fk, bk.size = Bk, bk.type = Rk, bk.normalized = tk, bk.stride = ak, bk.offset = Xk, bk.buffer = kk), (wk || this._vaoRecordInProgress) && (this.bindArrayBuffer(kk), Rk === this._gl.UNSIGNED_INT || Rk === this._gl.INT ? this._gl.vertexAttribIPointer(Fk, Bk, Rk, ak, Xk) : this._gl.vertexAttribPointer(Fk, Bk, Rk, tk, ak, Xk))
      }
      _bindIndexBufferWithCache(kk) {
        null != kk && this._cachedIndexBuffer !== kk && (this._cachedIndexBuffer = kk, this.bindIndexBuffer(kk), this._uintIndicesCurrentlySet = kk.is32Bits)
      }
      _bindVertexBuffersAttributes(kk, Fk, Bk) {
        const Rk = Fk.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let tk = 0; tk < Rk.length; tk++) {
          const ak = Fk.getAttributeLocation(tk);
          if (ak >= 0) {
            const Fk = Rk[tk];
            let Xk = null;
            if (Bk && (Xk = Bk[Fk]), Xk || (Xk = kk[Fk]), !Xk) continue;
            this._gl.enableVertexAttribArray(ak), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[ak] = !0);
            const bk = Xk.getBuffer();
            bk && (this._vertexAttribPointer(bk, ak, Xk.getSize(), Xk.type, Xk.normalized, Xk.byteStride, Xk.byteOffset), Xk.getIsInstanced() && (this._gl.vertexAttribDivisor(ak, Xk.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(ak), this._currentInstanceBuffers.push(bk))))
          }
        }
      }
      recordVertexArrayObject(kk, Fk, Bk, Rk) {
        const tk = this._gl.createVertexArray();
        if (!tk) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(tk), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(kk, Bk, Rk), this.bindIndexBuffer(Fk), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), tk
      }
      bindVertexArrayObject(kk, Fk) {
        this._cachedVertexArrayObject !== kk && (this._cachedVertexArrayObject = kk, this._gl.bindVertexArray(kk), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != Fk && Fk.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(kk, Fk, Bk, Rk, tk) {
        if (this._cachedVertexBuffers !== kk || this._cachedEffectForVertexBuffers !== tk) {
          this._cachedVertexBuffers = kk, this._cachedEffectForVertexBuffers = tk;
          const Fk = tk.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let ak = 0;
          for (let Xk = 0; Xk < Fk; Xk++)
            if (Xk < Bk.length) {
              const Fk = tk.getAttributeLocation(Xk);
              Fk >= 0 && (this._gl.enableVertexAttribArray(Fk), this._vertexAttribArraysEnabled[Fk] = !0, this._vertexAttribPointer(kk, Fk, Bk[Xk], this._gl.FLOAT, !1, Rk, ak)), ak += 4 * Bk[Xk]
            }
        }
        this._bindIndexBufferWithCache(Fk)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(kk, Fk, Bk, Rk) {
        this._cachedVertexBuffers === kk && this._cachedEffectForVertexBuffers === Bk || (this._cachedVertexBuffers = kk, this._cachedEffectForVertexBuffers = Bk, this._bindVertexBuffersAttributes(kk, Bk, Rk)), this._bindIndexBufferWithCache(Fk)
      }
      unbindInstanceAttributes() {
        let kk;
        for (let Fk = 0, Bk = this._currentInstanceLocations.length; Fk < Bk; Fk++) {
          const Bk = this._currentInstanceBuffers[Fk];
          kk != Bk && Bk.references && (kk = Bk, this.bindArrayBuffer(Bk));
          const Rk = this._currentInstanceLocations[Fk];
          this._gl.vertexAttribDivisor(Rk, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(kk) {
        this._gl.deleteVertexArray(kk)
      }
      _releaseBuffer(kk) {
        return kk.references--, 0 === kk.references && (this._deleteBuffer(kk), !0)
      }
      _deleteBuffer(kk) {
        this._gl.deleteBuffer(kk.underlyingResource)
      }
      updateAndBindInstancesBuffer(kk, Fk, Bk) {
        if (this.bindArrayBuffer(kk), Fk && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, Fk), void 0 !== Bk[0].index) this.bindInstancesBuffer(kk, Bk, !0);
        else
          for (let Rk = 0; Rk < 4; Rk++) {
            const Fk = Bk[Rk];
            this._vertexAttribArraysEnabled[Fk] || (this._gl.enableVertexAttribArray(Fk), this._vertexAttribArraysEnabled[Fk] = !0), this._vertexAttribPointer(kk, Fk, 4, this._gl.FLOAT, !1, 64, 16 * Rk), this._gl.vertexAttribDivisor(Fk, 1), this._currentInstanceLocations.push(Fk), this._currentInstanceBuffers.push(kk)
          }
      }
      bindInstancesBuffer(kk, Fk) {
        let Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(kk);
        let Rk = 0;
        if (Bk)
          for (let tk = 0; tk < Fk.length; tk++) {
            Rk += 4 * Fk[tk].attributeSize
          }
        for (let tk = 0; tk < Fk.length; tk++) {
          const Bk = Fk[tk];
          void 0 === Bk.index && (Bk.index = this._currentEffect.getAttributeLocationByName(Bk.attributeName)), Bk.index < 0 || (this._vertexAttribArraysEnabled[Bk.index] || (this._gl.enableVertexAttribArray(Bk.index), this._vertexAttribArraysEnabled[Bk.index] = !0), this._vertexAttribPointer(kk, Bk.index, Bk.attributeSize, Bk.attributeType || this._gl.FLOAT, Bk.normalized || !1, Rk, Bk.offset), this._gl.vertexAttribDivisor(Bk.index, void 0 === Bk.divisor ? 1 : Bk.divisor), this._currentInstanceLocations.push(Bk.index), this._currentInstanceBuffers.push(kk))
        }
      }
      disableInstanceAttributeByName(kk) {
        if (!this._currentEffect) return;
        const Fk = this._currentEffect.getAttributeLocationByName(kk);
        this.disableInstanceAttribute(Fk)
      }
      disableInstanceAttribute(kk) {
        let Fk, Bk = !1;
        for (; - 1 !== (Fk = this._currentInstanceLocations.indexOf(kk));) this._currentInstanceLocations.splice(Fk, 1), this._currentInstanceBuffers.splice(Fk, 1), Bk = !0;
        Bk && (this._gl.vertexAttribDivisor(kk, 0), this.disableAttributeByIndex(kk))
      }
      disableAttributeByIndex(kk) {
        this._gl.disableVertexAttribArray(kk), this._vertexAttribArraysEnabled[kk] = !1, this._currentBufferPointers[kk].active = !1
      }
      draw(kk, Fk, Bk, Rk) {
        this.drawElementsType(kk ? 0 : 1, Fk, Bk, Rk)
      }
      drawPointClouds(kk, Fk, Bk) {
        this.drawArraysType(2, kk, Fk, Bk)
      }
      drawUnIndexed(kk, Fk, Bk, Rk) {
        this.drawArraysType(kk ? 0 : 1, Fk, Bk, Rk)
      }
      drawElementsType(kk, Fk, Bk, Rk) {
        this.applyStates(), this._reportDrawCall();
        const tk = this._drawMode(kk),
          ak = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          Xk = this._uintIndicesCurrentlySet ? 4 : 2;
        Rk ? this._gl.drawElementsInstanced(tk, Bk, ak, Fk * Xk, Rk) : this._gl.drawElements(tk, Bk, ak, Fk * Xk)
      }
      drawArraysType(kk, Fk, Bk, Rk) {
        this.applyStates(), this._reportDrawCall();
        const tk = this._drawMode(kk);
        Rk ? this._gl.drawArraysInstanced(tk, Fk, Bk, Rk) : this._gl.drawArrays(tk, Fk, Bk)
      }
      _drawMode(kk) {
        switch (kk) {
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
      _releaseEffect(kk) {
        this._compiledEffects[kk._key] && delete this._compiledEffects[kk._key];
        const Fk = kk.getPipelineContext();
        Fk && this._deletePipelineContext(Fk)
      }
      _deletePipelineContext(kk) {
        const Fk = kk;
        Fk && Fk.program && (Fk.program.__SPECTOR_rebuildProgram = null, (0, mk.h)(Fk), this._gl && (this._currentProgram === Fk.program && this._setProgram(null), this._gl.deleteProgram(Fk.program)))
      }
      _getGlobalDefines(kk) {
        return (0, fk.i)(kk, this.isNDCHalfZRange, this.rBk, this.useExactSrgbConversions)
      }
      createEffect(kk, Fk, Bk, ak, Xk, bk, wk, dk, sk) {
        let Vk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Jk = arguments.length > 10 ? arguments[10] : void 0;
        const Ak = "string" === typeof kk ? kk : kk.vertexToken || kk.vertexSource || kk.vertexElement || kk.vertex,
          ek = "string" === typeof kk ? kk : kk.fragmentToken || kk.fragmentSource || kk.fragmentElement || kk.fragment,
          yk = this._getGlobalDefines(),
          fk = void 0 !== Fk.attributes;
        let mk = Xk ?? Fk.defines ?? "";
        yk && (mk += yk);
        const Wk = Ak + "+" + ek + "@" + mk;
        if (this._compiledEffects[Wk]) {
          const kk = this._compiledEffects[Wk];
          return wk && kk.isReady() && wk(kk), kk._refCount++, kk
        }
        this._gl && (0, tk.E)(this._gl);
        const vk = new Rk.b(kk, Fk, fk ? this : Bk, ak, this, Xk, bk, wk, dk, sk, Wk, Fk.shaderLanguage ?? Vk, Fk.extraInitializationsAsync ?? Jk);
        return this._compiledEffects[Wk] = vk, vk
      }
      _getShaderSource(kk) {
        return this._gl.getShaderSource(kk)
      }
      createRawShaderProgram(kk, Fk, Bk, Rk) {
        let ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Xk = (0, tk.E)(this._gl);
        return Xk._contextWasLost = this._contextWasLost, Xk.validateShaderPrograms = this.validateShaderPrograms, (0, tk.x)(kk, Fk, Bk, Rk || this._gl, ak)
      }
      createShaderProgram(kk, Fk, Bk, Rk, ak) {
        let Xk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const bk = (0, tk.E)(this._gl);
        return bk._contextWasLost = this._contextWasLost, bk.validateShaderPrograms = this.validateShaderPrograms, (0, tk.y)(kk, Fk, Bk, Rk, ak || this._gl, Xk)
      }
      inlineShaderCode(kk) {
        return kk
      }
      createPipelineContext(kk) {
        if (this._gl) {
          (0, tk.E)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const Fk = (0, tk.t)(this._gl, kk);
        return Fk.engine = this, Fk
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(kk) {
        return (0, tk.i)(kk, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(kk, Fk, Bk, Rk, ak, Xk, bk, wk, dk, sk, Vk) {
        const Jk = (0, tk.E)(this._gl);
        return Jk._contextWasLost = this._contextWasLost, Jk.validateShaderPrograms = this.validateShaderPrograms, Jk._createShaderProgramInjection = this._createShaderProgram.bind(this), Jk.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), Jk.createShaderProgramInjection = this.createShaderProgram.bind(this), Jk.loadFileInjection = this._loadFile.bind(this), (0, tk.n)(kk, Fk, Bk, Rk, ak, Xk, bk, wk, dk, sk, Vk)
      }
      _createShaderProgram(kk, Fk, Bk, Rk) {
        let ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, tk.e)(kk, Fk, Bk, Rk, ak)
      }
      _isRenderingStateCompiled(kk) {
        return !this._isDisposed && (0, tk.m)(kk, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(kk, Fk) {
        (0, tk.g)(kk, Fk)
      }
      getUniforms(kk, Fk) {
        const Bk = new Array,
          Rk = kk;
        for (let tk = 0; tk < Fk.length; tk++) Bk.push(this._gl.getUniformLocation(Rk.program, Fk[tk]));
        return Bk
      }
      getAttributes(kk, Fk) {
        const Bk = [],
          Rk = kk;
        for (let ak = 0; ak < Fk.length; ak++) try {
          Bk.push(this._gl.getAttribLocation(Rk.program, Fk[ak]))
        } catch (tk) {
          Bk.push(-1)
        }
        return Bk
      }
      enableEffect(kk) {
        (kk = null !== kk && (0, Xk.c)(kk) ? kk.effect : kk) && kk !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(kk), this._currentEffect = kk, kk.onBind && kk.onBind(kk), kk._onBindObservable && kk._onBindObservable.notifyObservers(kk))
      }
      setInt(kk, Fk) {
        return !!kk && (this._gl.uniform1i(kk, Fk), !0)
      }
      setInt2(kk, Fk, Bk) {
        return !!kk && (this._gl.uniform2i(kk, Fk, Bk), !0)
      }
      setInt3(kk, Fk, Bk, Rk) {
        return !!kk && (this._gl.uniform3i(kk, Fk, Bk, Rk), !0)
      }
      setInt4(kk, Fk, Bk, Rk, tk) {
        return !!kk && (this._gl.uniform4i(kk, Fk, Bk, Rk, tk), !0)
      }
      setIntArray(kk, Fk) {
        return !!kk && (this._gl.uniform1iv(kk, Fk), !0)
      }
      setIntArray2(kk, Fk) {
        return !(!kk || Fk.length % 2 !== 0) && (this._gl.uniform2iv(kk, Fk), !0)
      }
      setIntArray3(kk, Fk) {
        return !(!kk || Fk.length % 3 !== 0) && (this._gl.uniform3iv(kk, Fk), !0)
      }
      setIntArray4(kk, Fk) {
        return !(!kk || Fk.length % 4 !== 0) && (this._gl.uniform4iv(kk, Fk), !0)
      }
      setUInt(kk, Fk) {
        return !!kk && (this._gl.uniform1ui(kk, Fk), !0)
      }
      setUInt2(kk, Fk, Bk) {
        return !!kk && (this._gl.uniform2ui(kk, Fk, Bk), !0)
      }
      setUInt3(kk, Fk, Bk, Rk) {
        return !!kk && (this._gl.uniform3ui(kk, Fk, Bk, Rk), !0)
      }
      setUInt4(kk, Fk, Bk, Rk, tk) {
        return !!kk && (this._gl.uniform4ui(kk, Fk, Bk, Rk, tk), !0)
      }
      setUIntArray(kk, Fk) {
        return !!kk && (this._gl.uniform1uiv(kk, Fk), !0)
      }
      setUIntArray2(kk, Fk) {
        return !(!kk || Fk.length % 2 !== 0) && (this._gl.uniform2uiv(kk, Fk), !0)
      }
      setUIntArray3(kk, Fk) {
        return !(!kk || Fk.length % 3 !== 0) && (this._gl.uniform3uiv(kk, Fk), !0)
      }
      setUIntArray4(kk, Fk) {
        return !(!kk || Fk.length % 4 !== 0) && (this._gl.uniform4uiv(kk, Fk), !0)
      }
      setArray(kk, Fk) {
        return !!kk && (!(Fk.length < 1) && (this._gl.uniform1fv(kk, Fk), !0))
      }
      setArray2(kk, Fk) {
        return !(!kk || Fk.length % 2 !== 0) && (this._gl.uniform2fv(kk, Fk), !0)
      }
      setArray3(kk, Fk) {
        return !(!kk || Fk.length % 3 !== 0) && (this._gl.uniform3fv(kk, Fk), !0)
      }
      setArray4(kk, Fk) {
        return !(!kk || Fk.length % 4 !== 0) && (this._gl.uniform4fv(kk, Fk), !0)
      }
      setMatrices(kk, Fk) {
        return !!kk && (this._gl.uniformMatrix4fv(kk, !1, Fk), !0)
      }
      setMatrix3x3(kk, Fk) {
        return !!kk && (this._gl.uniformMatrix3fv(kk, !1, Fk), !0)
      }
      setMatrix2x2(kk, Fk) {
        return !!kk && (this._gl.uniformMatrix2fv(kk, !1, Fk), !0)
      }
      setFloat(kk, Fk) {
        return !!kk && (this._gl.uniform1f(kk, Fk), !0)
      }
      setFloat2(kk, Fk, Bk) {
        return !!kk && (this._gl.uniform2f(kk, Fk, Bk), !0)
      }
      setFloat3(kk, Fk, Bk, Rk) {
        return !!kk && (this._gl.uniform3f(kk, Fk, Bk, Rk), !0)
      }
      setFloat4(kk, Fk, Bk, Rk, tk) {
        return !!kk && (this._gl.uniform4f(kk, Fk, Bk, Rk, tk), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const kk = this._colorWrite;
          this._gl.colorMask(kk, kk, kk, kk)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(kk) {
        this.preventCacheWipeBetweenFrames && !kk || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), kk && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(kk, Fk) {
        const Bk = this._gl;
        let Rk = Bk.NEAREST,
          tk = Bk.NEAREST,
          ak = !1;
        switch (kk) {
          case 11:
            Rk = Bk.LINEAR, tk = Fk ? Bk.LINEAR_MIPMAP_NEAREST : Bk.LINEAR;
            break;
          case 3:
            Rk = Bk.LINEAR, ak = !0, tk = Fk ? Bk.LINEAR_MIPMAP_LINEAR : Bk.LINEAR;
            break;
          case 8:
            ak = !0, Rk = Bk.NEAREST, tk = Fk ? Bk.NEAREST_MIPMAP_LINEAR : Bk.NEAREST;
            break;
          case 4:
            Rk = Bk.NEAREST, tk = Fk ? Bk.NEAREST_MIPMAP_NEAREST : Bk.NEAREST;
            break;
          case 5:
            Rk = Bk.NEAREST, tk = Fk ? Bk.LINEAR_MIPMAP_NEAREST : Bk.LINEAR;
            break;
          case 6:
            ak = !0, Rk = Bk.NEAREST, tk = Fk ? Bk.LINEAR_MIPMAP_LINEAR : Bk.LINEAR;
            break;
          case 7:
            Rk = Bk.NEAREST, tk = Bk.LINEAR;
            break;
          case 1:
            Rk = Bk.NEAREST, tk = Bk.NEAREST;
            break;
          case 9:
            Rk = Bk.LINEAR, tk = Fk ? Bk.NEAREST_MIPMAP_NEAREST : Bk.NEAREST;
            break;
          case 10:
            ak = !0, Rk = Bk.LINEAR, tk = Fk ? Bk.NEAREST_MIPMAP_LINEAR : Bk.NEAREST;
            break;
          case 2:
            Rk = Bk.LINEAR, tk = Bk.LINEAR;
            break;
          case 12:
            Rk = Bk.LINEAR, tk = Bk.NEAREST
        }
        return {
          min: tk,
          mag: Rk,
          hasMipMaps: ak
        }
      }
      _createTexture() {
        const kk = this._gl.createTexture();
        if (!kk) throw new Error("Unable to create texture");
        return kk
      }
      _createHardwareTexture() {
        return new ek.c(this._createTexture(), this._gl)
      }
      _createInternalTexture(kk, Fk) {
        let Bk, Rk, tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          ak = !1,
          Xk = 0,
          wk = 3,
          dk = 5,
          sk = !1,
          Vk = 1,
          Jk = !1,
          Ak = 0,
          ek = !1;
        void 0 !== Fk && "object" === typeof Fk ? (Bk = !!Fk.generateMipMaps, ak = !!Fk.createMipMaps, Xk = void 0 === Fk.type ? 0 : Fk.type, wk = void 0 === Fk.samplingMode ? 3 : Fk.samplingMode, dk = void 0 === Fk.format ? 5 : Fk.format, sk = void 0 !== Fk.useSRGBBuffer && Fk.useSRGBBuffer, Vk = Fk.samples ?? 1, Rk = Fk.label, Jk = !!Fk.createMSAATexture, Ak = Fk.comparisonFunction || 0, ek = !!Fk.isCube) : Bk = !!Fk, sk && (sk = this._caps.supportSRGBBuffers && (this.Uy > 1 || this.isWebGPU)), (1 !== Xk || this._caps.textureFloatLinearFiltering) && (2 !== Xk || this._caps.textureHalfFloatLinearFiltering) || (wk = 1), 1 !== Xk || this._caps.textureFloat || (Xk = 0, bk.b.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const fk = (0, Wk.i)(dk),
          mk = (0, Wk.e)(dk),
          vk = this._gl,
          ik = new yk.c(this, tk),
          Yk = kk.width || kk,
          Lk = kk.height || kk,
          Ok = kk.depth || 0,
          Ek = kk.layers || 0,
          Sk = this._getSamplingParameters(wk, (Bk || ak) && !fk),
          Nk = 0 !== Ek ? vk.TEXTURE_2D_ARRAY : 0 !== Ok ? vk.TEXTURE_3D : ek ? vk.TEXTURE_CUBE_MAP : vk.TEXTURE_2D,
          Hk = fk ? this._getInternalFormatFromDepthTextureFormat(dk, !0, mk) : this._getRGBABufferInternalSizedFormat(Xk, dk, sk),
          uk = fk ? mk ? vk.DEPTH_STENCIL : vk.DEPTH_COMPONENT : this._getInternalFormat(dk),
          Mk = fk ? this._getWebGLTextureTypeFromDepthTextureFormat(dk) : this._getWebGLTextureType(Xk);
        if (this._bindTextureDirectly(Nk, ik), 0 !== Ek) ik.is2DArray = !0, vk.texImage3D(Nk, 0, Hk, Yk, Lk, Ek, 0, uk, Mk, null);
        else if (0 !== Ok) ik.is3D = !0, vk.texImage3D(Nk, 0, Hk, Yk, Lk, Ok, 0, uk, Mk, null);
        else if (ek) {
          ik.isCube = !0;
          for (let kk = 0; kk < 6; kk++) vk.texImage2D(vk.TEXTURE_CUBE_MAP_POSITIVE_X + kk, 0, Hk, Yk, Lk, 0, uk, Mk, null)
        } else vk.texImage2D(Nk, 0, Hk, Yk, Lk, 0, uk, Mk, null);
        if (vk.texParameteri(Nk, vk.TEXTURE_MAG_FILTER, Sk.mag), vk.texParameteri(Nk, vk.TEXTURE_MIN_FILTER, Sk.min), vk.texParameteri(Nk, vk.TEXTURE_WRAP_S, vk.CLAMP_TO_EDGE), vk.texParameteri(Nk, vk.TEXTURE_WRAP_T, vk.CLAMP_TO_EDGE), fk && this.Uy > 1 && (0 === Ak ? (vk.texParameteri(Nk, vk.TEXTURE_COMPARE_FUNC, 515), vk.texParameteri(Nk, vk.TEXTURE_COMPARE_MODE, vk.NONE)) : (vk.texParameteri(Nk, vk.TEXTURE_COMPARE_FUNC, Ak), vk.texParameteri(Nk, vk.TEXTURE_COMPARE_MODE, vk.COMPARE_REF_TO_TEXTURE))), (Bk || ak) && this._gl.generateMipmap(Nk), this._bindTextureDirectly(Nk, null), ik._useSRGBBuffer = sk, ik.baseWidth = Yk, ik.baseHeight = Lk, ik.width = Yk, ik.height = Lk, ik.depth = Ek || Ok, ik.isReady = !0, ik.samples = Vk, ik.generateMipMaps = Bk, ik.samplingMode = wk, ik.type = Xk, ik.format = dk, ik.label = Rk, ik.comparisonFunction = Ak, this._internalTexturesCache.push(ik), Jk) {
          let kk;
          if (kk = (0, Wk.i)(ik.format) ? this._setupFramebufferDepthAttachments((0, Wk.e)(ik.format), 19 !== ik.format, ik.width, ik.height, Vk, ik.format, !0) : this._createRenderBuffer(ik.width, ik.height, Vk, -1, this._getRGBABufferInternalSizedFormat(ik.type, ik.format, ik._useSRGBBuffer), -1), !kk) throw new Error("Unable to create render buffer");
          ik._autoMSAAManagement = !0;
          let Fk = ik._hardwareTexture;
          Fk || (Fk = ik._hardwareTexture = this._createHardwareTexture()), Fk.addMSAARenderBuffer(kk)
        }
        return ik
      }
      _getUseSRGBBuffer(kk, Fk) {
        return kk && this._caps.supportSRGBBuffers && (this.Uy > 1 || Fk)
      }
      createTexture(kk, Fk, Bk, Rk) {
        var tk = this;
        let ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Xk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          wk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          dk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          sk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Vk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Jk = arguments.length > 11 ? arguments[11] : void 0,
          Ak = arguments.length > 12 ? arguments[12] : void 0,
          ek = arguments.length > 13 ? arguments[13] : void 0,
          fk = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(kk, Fk, Bk, Rk, ak, Xk, bk, (function() {
          for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
          return tk._prepareWebGLTexture(...Fk, sk)
        }), ((kk, Fk, Bk, tk, ak, Xk) => {
          const bk = this._gl,
            wk = Bk.width === kk && Bk.height === Fk;
          ak._creationFlags = ek ?? 0;
          const dk = this._getTexImageParametersForCreateTexture(ak.format, ak._useSRGBBuffer);
          if (wk) return bk.texImage2D(bk.TEXTURE_2D, 0, dk.internalFormat, dk.format, dk.type, Bk), !1;
          const sk = this._caps.maxTextureSize;
          if (Bk.width > sk || Bk.height > sk || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = kk, this._workingCanvas.height = Fk, this._workingContext.drawImage(Bk, 0, 0, Bk.width, Bk.height, 0, 0, kk, Fk), bk.texImage2D(bk.TEXTURE_2D, 0, dk.internalFormat, dk.format, dk.type, this._workingCanvas), ak.width = kk, ak.height = Fk, !1);
          {
            const kk = new yk.c(this, 2);
            this._bindTextureDirectly(bk.TEXTURE_2D, kk, !0), bk.texImage2D(bk.TEXTURE_2D, 0, dk.internalFormat, dk.format, dk.type, Bk), this._rescaleTexture(kk, ak, Rk, dk.format, (() => {
              this._releaseTexture(kk), this._bindTextureDirectly(bk.TEXTURE_2D, ak, !0), Xk()
            }))
          }
          return !0
        }), wk, dk, sk, Vk, Jk, Ak, fk)
      }
      _getTexImageParametersForCreateTexture(kk, Fk) {
        let Bk, Rk;
        return 1 === this.Uy ? (Bk = this._getInternalFormat(kk, Fk), Rk = Bk) : (Bk = this._getInternalFormat(kk, !1), Rk = this._getRGBABufferInternalSizedFormat(0, kk, Fk)), {
          internalFormat: Rk,
          format: Bk,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(kk, Fk, Bk, Rk, tk) {}
      _unpackFlipY(kk) {
        this._unpackFlipYCached !== kk && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, kk ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = kk))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(kk) {
        return kk.isCube ? this._gl.TEXTURE_CUBE_MAP : kk.is3D ? this._gl.TEXTURE_3D : kk.is2DArray || kk.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Rk = this._getTextureTarget(Fk),
          tk = this._getSamplingParameters(kk, Fk.useMipMaps || Bk);
        this._setTextureParameterInteger(Rk, this._gl.TEXTURE_MAG_FILTER, tk.mag, Fk), this._setTextureParameterInteger(Rk, this._gl.TEXTURE_MIN_FILTER, tk.min), Bk && tk.hasMipMaps && (Fk.generateMipMaps = !0, this._gl.generateMipmap(Rk)), this._bindTextureDirectly(Rk, null), Fk.samplingMode = kk
      }
      updateTextureDimensions(kk, Fk, Bk) {}
      updateTextureWrappingMode(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const tk = this._getTextureTarget(kk);
        null !== Fk && (this._setTextureParameterInteger(tk, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(Fk), kk), kk._cachedWrapU = Fk), null !== Bk && (this._setTextureParameterInteger(tk, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(Bk), kk), kk._cachedWrapV = Bk), (kk.is2DArray || kk.is3D) && null !== Rk && (this._setTextureParameterInteger(tk, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Rk), kk), kk._cachedWrapR = Rk), this._bindTextureDirectly(tk, null)
      }
      _uploadCompressedDataToTextureDirectly(kk, Fk, Bk, Rk, tk) {
        let ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Xk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const bk = this._gl;
        let wk = bk.TEXTURE_2D;
        if (kk.isCube && (wk = bk.TEXTURE_CUBE_MAP_POSITIVE_X + ak), kk._useSRGBBuffer) switch (Fk) {
          case 37492:
          case 36196:
            this._caps.etc2 ? Fk = bk.COMPRESSED_SRGB8_ETC2 : kk._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? Fk = bk.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : kk._useSRGBBuffer = !1;
            break;
          case 36492:
            Fk = bk.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            Fk = bk.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            Fk = bk.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            Fk = bk.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            Fk = bk.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            Fk = bk.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            Fk = bk.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            Fk = bk.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            Fk = bk.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            Fk = bk.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            Fk = bk.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            Fk = bk.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            Fk = bk.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            Fk = bk.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            Fk = bk.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? Fk = bk.COMPRESSED_SRGB_S3TC_DXT1_EXT : kk._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? Fk = bk.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : kk._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? Fk = bk.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : kk._useSRGBBuffer = !1;
            break;
          default:
            kk._useSRGBBuffer = !1
        }
        if (kk.generateMipMaps) {
          const ak = kk._hardwareTexture;
          ak.memoryAllocated || (bk.texStorage2D(kk.isCube ? bk.TEXTURE_CUBE_MAP : bk.TEXTURE_2D, Math.floor(Math.log2(Math.max(Bk, Rk))) + 1, Fk, kk.width, kk.height), ak.memoryAllocated = !0), this._gl.compressedTexSubImage2D(wk, Xk, 0, 0, Bk, Rk, Fk, tk)
        } else this._gl.compressedTexImage2D(wk, Xk, Fk, Bk, Rk, 0, tk)
      }
      _uploadDataToTextureDirectly(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          tk = arguments.length > 4 ? arguments[4] : void 0,
          ak = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Xk = this._gl,
          bk = this._getWebGLTextureType(kk.type),
          wk = this._getInternalFormat(kk.format),
          dk = void 0 === tk ? this._getRGBABufferInternalSizedFormat(kk.type, kk.format, kk._useSRGBBuffer) : this._getInternalFormat(tk, kk._useSRGBBuffer);
        this._unpackFlipY(kk.invertY);
        let sk = Xk.TEXTURE_2D;
        kk.isCube && (sk = Xk.TEXTURE_CUBE_MAP_POSITIVE_X + Bk);
        const Vk = Math.round(Math.log(kk.width) * Math.LOG2E),
          Jk = Math.round(Math.log(kk.height) * Math.LOG2E),
          Ak = ak ? kk.width : Math.pow(2, Math.max(Vk - Rk, 0)),
          ek = ak ? kk.height : Math.pow(2, Math.max(Jk - Rk, 0));
        Xk.texImage2D(sk, Rk, dk, Ak, ek, 0, wk, bk, Fk)
      }
      updateTextureData(kk, Fk, Bk, Rk, tk, ak) {
        let Xk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          bk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          wk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const dk = this._gl,
          sk = this._getWebGLTextureType(kk.type),
          Vk = this._getInternalFormat(kk.format);
        this._unpackFlipY(kk.invertY);
        let Jk = dk.TEXTURE_2D,
          Ak = dk.TEXTURE_2D;
        kk.isCube && (Ak = dk.TEXTURE_CUBE_MAP_POSITIVE_X + Xk, Jk = dk.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Jk, kk, !0), dk.texSubImage2D(Ak, bk, Bk, Rk, tk, ak, Vk, sk, Fk), wk && this._gl.generateMipmap(Ak), this._bindTextureDirectly(Jk, null)
      }
      _uploadArrayBufferViewToTexture(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const tk = this._gl,
          ak = kk.isCube ? tk.TEXTURE_CUBE_MAP : tk.TEXTURE_2D;
        this._bindTextureDirectly(ak, kk, !0), this._uploadDataToTextureDirectly(kk, Fk, Bk, Rk), this._bindTextureDirectly(ak, null, !0)
      }
      _prepareWebGLTextureContinuation(kk, Fk, Bk, Rk, tk) {
        const ak = this._gl;
        if (!ak) return;
        const Xk = this._getSamplingParameters(tk, !Bk);
        ak.texParameteri(ak.TEXTURE_2D, ak.TEXTURE_MAG_FILTER, Xk.mag), ak.texParameteri(ak.TEXTURE_2D, ak.TEXTURE_MIN_FILTER, Xk.min), Bk || Rk || ak.generateMipmap(ak.TEXTURE_2D), this._bindTextureDirectly(ak.TEXTURE_2D, null), Fk && Fk.removePendingData(kk), kk.onLoadedObservable.notifyObservers(kk), kk.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk) {
        const sk = this.getCaps().maxTextureSize,
          Vk = Math.min(sk, this.needPOTTextures ? (0, Ak.g)(Rk.width, sk) : Rk.width),
          Jk = Math.min(sk, this.needPOTTextures ? (0, Ak.g)(Rk.height, sk) : Rk.height),
          ek = this._gl;
        ek && (kk._hardwareTexture ? (this._bindTextureDirectly(ek.TEXTURE_2D, kk, !0), this._unpackFlipY(void 0 === tk || !!tk), kk.baseWidth = Rk.width, kk.baseHeight = Rk.height, kk.width = Vk, kk.height = Jk, kk.isReady = !0, kk.type = -1 !== kk.type ? kk.type : 0, kk.format = -1 !== kk.format ? kk.format : dk ?? (".jpg" !== Fk || kk._useSRGBBuffer ? 5 : 4), bk(Vk, Jk, Rk, Fk, kk, (() => {
          this._prepareWebGLTextureContinuation(kk, Bk, ak, Xk, wk)
        })) || this._prepareWebGLTextureContinuation(kk, Bk, ak, Xk, wk)) : Bk && Bk.removePendingData(kk))
      }
      _getInternalFormatFromDepthTextureFormat(kk, Fk, Bk) {
        const Rk = this._gl;
        if (!Fk) return Rk.STENCIL_INDEX8;
        let tk = Bk ? Rk.DEPTH_STENCIL : Rk.DEPTH_COMPONENT;
        return this.Uy > 1 ? 15 === kk ? tk = Rk.DEPTH_COMPONENT16 : 16 === kk ? tk = Rk.DEPTH_COMPONENT24 : 17 === kk || 13 === kk ? tk = Bk ? Rk.DEPTH24_STENCIL8 : Rk.DEPTH_COMPONENT24 : 14 === kk ? tk = Rk.DEPTH_COMPONENT32F : 18 === kk && (tk = Bk ? Rk.DEPTH32F_STENCIL8 : Rk.DEPTH_COMPONENT32F) : tk = Rk.DEPTH_COMPONENT16, tk
      }
      _getWebGLTextureTypeFromDepthTextureFormat(kk) {
        const Fk = this._gl;
        let Bk = Fk.UNSIGNED_INT;
        return 15 === kk ? Bk = Fk.UNSIGNED_SHORT : 17 === kk || 13 === kk ? Bk = Fk.UNSIGNED_INT_24_8 : 14 === kk ? Bk = Fk.FLOAT : 18 === kk ? Bk = Fk.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === kk && (Bk = Fk.UNSIGNED_BYTE), Bk
      }
      _setupFramebufferDepthAttachments(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          ak = arguments.length > 5 ? arguments[5] : void 0,
          Xk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const bk = this._gl;
        ak = ak ?? (kk ? 13 : 14);
        const wk = this._getInternalFormatFromDepthTextureFormat(ak, Fk, kk);
        return kk && Fk ? this._createRenderBuffer(Bk, Rk, tk, bk.DEPTH_STENCIL, wk, Xk ? -1 : bk.DEPTH_STENCIL_ATTACHMENT) : Fk ? this._createRenderBuffer(Bk, Rk, tk, wk, wk, Xk ? -1 : bk.DEPTH_ATTACHMENT) : kk ? this._createRenderBuffer(Bk, Rk, tk, wk, wk, Xk ? -1 : bk.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(kk, Fk, Bk, Rk, tk, ak) {
        let Xk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const bk = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(bk, kk, Fk, Bk, Rk, tk, ak, Xk)
      }
      _updateRenderBuffer(kk, Fk, Bk, Rk, tk, ak, Xk) {
        let bk = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const wk = this._gl;
        return wk.bindRenderbuffer(wk.RENDERBUFFER, kk), Rk > 1 && wk.renderbufferStorageMultisample ? wk.renderbufferStorageMultisample(wk.RENDERBUFFER, Rk, ak, Fk, Bk) : wk.renderbufferStorage(wk.RENDERBUFFER, tk, Fk, Bk), -1 !== Xk && wk.framebufferRenderbuffer(wk.FRAMEBUFFER, Xk, wk.RENDERBUFFER, kk), bk && wk.bindRenderbuffer(wk.RENDERBUFFER, null), kk
      }
      _releaseTexture(kk) {
        this._deleteTexture(kk._hardwareTexture), this.unbindAllTextures();
        const Fk = this._internalTexturesCache.indexOf(kk); - 1 !== Fk && this._internalTexturesCache.splice(Fk, 1), kk._lodTextureHigh && kk._lodTextureHigh.dispose(), kk._lodTextureMid && kk._lodTextureMid.dispose(), kk._lodTextureLow && kk._lodTextureLow.dispose(), kk._irradianceTexture && kk._irradianceTexture.dispose()
      }
      _deleteTexture(kk) {
        kk?.release()
      }
      _setProgram(kk) {
        this._currentProgram !== kk && ((0, tk.q)(kk, this._gl), this._currentProgram = kk)
      }
      bindSamplers(kk) {
        const Fk = kk.getPipelineContext();
        this._setProgram(Fk.program);
        const Bk = kk.getSamplers();
        for (let Rk = 0; Rk < Bk.length; Rk++) {
          const Fk = kk.getUniform(Bk[Rk]);
          Fk && (this._boundUniforms[Rk] = Fk)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          tk = !1;
        const ak = Fk && Fk._associatedChannel > -1;
        Bk && ak && (this._activeChannel = Fk._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== Fk || Rk) {
          if (this._activateCurrentTexture(), Fk && Fk.isMultiview) throw bk.b.Error(["_bindTextureDirectly called with a multiview texture!", kk, Fk]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(kk, Fk?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = Fk, Fk && (Fk._associatedChannel = this._activeChannel)
        } else Bk && (tk = !0, this._activateCurrentTexture());
        return ak && !Bk && this._bindSamplerUniformToChannel(Fk._associatedChannel, this._activeChannel), tk
      }
      _bindTexture(kk, Fk, Bk) {
        if (void 0 === kk) return;
        Fk && (Fk._associatedChannel = kk), this._activeChannel = kk;
        const Rk = Fk ? this._getTextureTarget(Fk) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(Rk, Fk)
      }
      unbindAllTextures() {
        for (let kk = 0; kk < this._maxSimultaneousTextures; kk++) this._activeChannel = kk, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Uy > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(kk, Fk, Bk, Rk) {
        void 0 !== kk && (Fk && (this._boundUniforms[kk] = Fk), this._setTexture(kk, Bk))
      }
      _bindSamplerUniformToChannel(kk, Fk) {
        const Bk = this._boundUniforms[kk];
        Bk && Bk._currentState !== Fk && (this._gl.uniform1i(Bk, Fk), Bk._currentState = Fk)
      }
      _getTextureWrapMode(kk) {
        switch (kk) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(kk, Fk) {
        let Bk, Rk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!Fk) return null != this._boundTexturesCache[kk] && (this._activeChannel = kk, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Uy > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (Fk.video) {
          this._activeChannel = kk;
          const Bk = Fk.getInternalTexture();
          Bk && (Bk._associatedChannel = kk), Fk.update()
        } else if (4 === Fk.delayLoadState) return Fk.delayLoad(), !1;
        Bk = tk ? Fk.depthStencilTexture : Fk.isReady() ? Fk.getInternalTexture() : Fk.isCube ? this.emptyCubeTexture : Fk.is3D ? this.emptyTexture3D : Fk.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !Rk && Bk && (Bk._associatedChannel = kk);
        let ak = !0;
        this._boundTexturesCache[kk] === Bk && (Rk || this._bindSamplerUniformToChannel(Bk._associatedChannel, kk), ak = !1), this._activeChannel = kk;
        const Xk = this._getTextureTarget(Bk);
        if (ak && this._bindTextureDirectly(Xk, Bk, Rk), Bk && !Bk.isMultiview) {
          if (Bk.isCube && Bk._cachedCoordinatesMode !== Fk.coordinatesMode) {
            Bk._cachedCoordinatesMode = Fk.coordinatesMode;
            const kk = 3 !== Fk.coordinatesMode && 5 !== Fk.coordinatesMode ? 1 : 0;
            Fk.wrapU = kk, Fk.wrapV = kk
          }
          Bk._cachedWrapU !== Fk.wrapU && (Bk._cachedWrapU = Fk.wrapU, this._setTextureParameterInteger(Xk, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(Fk.wrapU), Bk)), Bk._cachedWrapV !== Fk.wrapV && (Bk._cachedWrapV = Fk.wrapV, this._setTextureParameterInteger(Xk, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(Fk.wrapV), Bk)), Bk.is3D && Bk._cachedWrapR !== Fk.wrapR && (Bk._cachedWrapR = Fk.wrapR, this._setTextureParameterInteger(Xk, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Fk.wrapR), Bk)), this._setAnisotropicLevel(Xk, Bk, Fk.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(kk, Fk, Bk, Rk) {
        if (void 0 !== kk && Fk) {
          this._textureUnits && this._textureUnits.length === Bk.length || (this._textureUnits = new Int32Array(Bk.length));
          for (let Fk = 0; Fk < Bk.length; Fk++) {
            const Rk = Bk[Fk].getInternalTexture();
            Rk ? (this._textureUnits[Fk] = kk + Fk, Rk._associatedChannel = kk + Fk) : this._textureUnits[Fk] = -1
          }
          this._gl.uniform1iv(Fk, this._textureUnits);
          for (let kk = 0; kk < Bk.length; kk++) this._setTexture(this._textureUnits[kk], Bk[kk], !0)
        }
      }
      _setAnisotropicLevel(kk, Fk, Bk) {
        const Rk = this._caps.textureAnisotropicFilterExtension;
        11 !== Fk.samplingMode && 3 !== Fk.samplingMode && 2 !== Fk.samplingMode && (Bk = 1), Rk && Fk._cachedAnisotropicFilteringLevel !== Bk && (this._setTextureParameterFloat(kk, Rk.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(Bk, this._caps.maxAnisotropy), Fk), Fk._cachedAnisotropicFilteringLevel = Bk)
      }
      _setTextureParameterFloat(kk, Fk, Bk, Rk) {
        this._bindTextureDirectly(kk, Rk, !0, !0), this._gl.texParameterf(kk, Fk, Bk)
      }
      _setTextureParameterInteger(kk, Fk, Bk, Rk) {
        Rk && this._bindTextureDirectly(kk, Rk, !0, !0), this._gl.texParameteri(kk, Fk, Bk)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let kk = 0; kk < this._caps.maxVertexAttribs; kk++) this.disableAttributeByIndex(kk)
        } else
          for (let kk = 0, Fk = this._vertexAttribArraysEnabled.length; kk < Fk; kk++) kk >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[kk] || this.disableAttributeByIndex(kk)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, wk.j)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, tk.A)(this._gl)
      }
      attachContextLostEvent(kk) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", kk, !1)
      }
      attachContextRestoredEvent(kk) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", kk, !1)
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
      _canRenderToFramebuffer(kk) {
        const Fk = this._gl;
        for (; Fk.getError() !== Fk.NO_ERROR;);
        let Bk = !0;
        const Rk = Fk.createTexture();
        Fk.bindTexture(Fk.TEXTURE_2D, Rk), Fk.texImage2D(Fk.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(kk), 1, 1, 0, Fk.RGBA, this._getWebGLTextureType(kk), null), Fk.texParameteri(Fk.TEXTURE_2D, Fk.TEXTURE_MIN_FILTER, Fk.NEAREST), Fk.texParameteri(Fk.TEXTURE_2D, Fk.TEXTURE_MAG_FILTER, Fk.NEAREST);
        const tk = Fk.createFramebuffer();
        Fk.bindFramebuffer(Fk.FRAMEBUFFER, tk), Fk.framebufferTexture2D(Fk.FRAMEBUFFER, Fk.COLOR_ATTACHMENT0, Fk.TEXTURE_2D, Rk, 0);
        const ak = Fk.checkFramebufferStatus(Fk.FRAMEBUFFER);
        if (Bk = Bk && ak === Fk.FRAMEBUFFER_COMPLETE, Bk = Bk && Fk.getError() === Fk.NO_ERROR, Bk && (Fk.clear(Fk.COLOR_BUFFER_BIT), Bk = Bk && Fk.getError() === Fk.NO_ERROR), Bk) {
          Fk.bindFramebuffer(Fk.FRAMEBUFFER, null);
          const kk = Fk.RGBA,
            Rk = Fk.UNSIGNED_BYTE,
            tk = new Uint8Array(4);
          Fk.readPixels(0, 0, 1, 1, kk, Rk, tk), Bk = Bk && Fk.getError() === Fk.NO_ERROR
        }
        for (Fk.deleteTexture(Rk), Fk.deleteFramebuffer(tk), Fk.bindFramebuffer(Fk.FRAMEBUFFER, null); !Bk && Fk.getError() !== Fk.NO_ERROR;);
        return Bk
      }
      _getWebGLTextureType(kk) {
        if (1 === this._webGLVersion) {
          switch (kk) {
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
        switch (kk) {
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
      _getInternalFormat(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = Fk ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (kk) {
          case 0:
            Bk = this._gl.ALPHA;
            break;
          case 1:
            Bk = this._gl.LUMINANCE;
            break;
          case 2:
            Bk = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            Bk = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            Bk = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            Bk = Fk ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            Bk = Fk ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (kk) {
          case 8:
            Bk = this._gl.RED_INTEGER;
            break;
          case 9:
            Bk = this._gl.RG_INTEGER;
            break;
          case 10:
            Bk = this._gl.RGB_INTEGER;
            break;
          case 11:
            Bk = this._gl.RGBA_INTEGER
        }
        return Bk
      }
      _getRGBABufferInternalSizedFormat(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== Fk) switch (Fk) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return Bk ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (kk) {
          case 3:
            switch (Fk) {
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
            switch (Fk) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return Bk ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return Bk ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (Fk) {
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
            switch (Fk) {
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
            switch (Fk) {
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
            switch (Fk) {
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
            switch (Fk) {
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
            switch (Fk) {
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
            switch (Fk) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return Bk ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(kk, Fk, Bk, Rk) {
        let tk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          ak = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Xk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const wk = tk ? 4 : 3,
          dk = tk ? this._gl.RGBA : this._gl.RGB,
          sk = Bk * Rk * wk;
        if (Xk) {
          if (Xk.length < sk) return bk.b.Error(`Data buffer is too small to store the read pixels (${Xk.length} should be more than ${sk})`), Promise.resolve(Xk)
        } else Xk = new Uint8Array(sk);
        return ak && this.flushFramebuffer(), this._gl.readPixels(kk, Fk, Bk, Rk, dk, this._gl.UNSIGNED_BYTE, Xk), Promise.resolve(Xk)
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
          const kk = ak.c._CreateCanvas(1, 1),
            Fk = kk.getContext("webgl") || kk.getContext("experimental-webgl");
          this._IsSupported = null != Fk && !!globalThis.WebGLRenderingContext
        } catch (kk) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const kk = ak.c._CreateCanvas(1, 1),
            Fk = kk.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || kk.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !Fk
        } catch (kk) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    Yk._TempClearColorUint32 = new Uint32Array(4), Yk._TempClearColorInt32 = new Int32Array(4), Yk._TempClearColorFloat32 = new Float32Array(4), Yk.ExceptionList = [{
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
    }], Yk._ConcatenateShader = fk.h, Yk._IsSupported = null, Yk._HasMajorPerformanceCaveat = null
  },
  39595: (kk, Fk, Bk) => {
    var Rk;
    Bk.d(Fk, {
        b: () => tk
      }),
      function(kk) {
        kk[kk.PointerMove = 0] = "PointerMove", kk[kk.PointerDown = 1] = "PointerDown", kk[kk.PointerUp = 2] = "PointerUp"
      }(Rk || (Rk = {}));
    class tk {}
    tk.DOM_DELTA_PIXEL = 0, tk.DOM_DELTA_LINE = 1, tk.DOM_DELTA_PAGE = 2
  },
  39589: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk,
      h: () => ak,
      j: () => tk
    });
    class Rk {}
    Rk.KEYDOWN = 1, Rk.KEYUP = 2;
    class tk {
      constructor(kk, Fk) {
        this.type = kk, this.event = Fk
      }
    }
    class ak extends tk {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(kk) {
        this.skipOnKeyboardObservable = kk
      }
      constructor(kk, Fk) {
        super(kk, Fk), this.type = kk, this.event = Fk, this.skipOnKeyboardObservable = !1
      }
    }
  },
  39582: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk,
      g: () => Xk,
      i: () => bk
    });
    var Rk = Bk(36758);
    class tk {}
    tk.POINTERDOWN = 1, tk.POINTERUP = 2, tk.POINTERMOVE = 4, tk.POINTERWHEEL = 8, tk.POINTERPICK = 16, tk.POINTERTAP = 32, tk.POINTERDOUBLETAP = 64;
    class ak {
      constructor(kk, Fk) {
        this.type = kk, this.event = Fk
      }
    }
    class Xk extends ak {
      constructor(kk, Fk, Bk, tk) {
        super(kk, Fk), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new Rk.p(Bk, tk)
      }
    }
    class bk extends ak {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(kk, Fk), this._pickInfo = Bk, this._inputManager = Rk
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  39606: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk
    });
    class Rk {
      static CompareLightsPriority(kk, Fk) {
        return kk.shadowEnabled !== Fk.shadowEnabled ? (Fk.shadowEnabled ? 1 : 0) - (kk.shadowEnabled ? 1 : 0) : Fk.renderPriority - kk.renderPriority
      }
    }
    Rk.FALLOFF_DEFAULT = 0, Rk.FALLOFF_PHYSICAL = 1, Rk.FALLOFF_GLTF = 2, Rk.FALLOFF_STANDARD = 3, Rk.LIGHTMAP_DEFAULT = 0, Rk.LIGHTMAP_SPECULAR = 1, Rk.LIGHTMAP_SHADOWSONLY = 2, Rk.INTENSITYMODE_AUTOMATIC = 0, Rk.INTENSITYMODE_LUMINOUSPOWER = 1, Rk.INTENSITYMODE_LUMINOUSINTENSITY = 2, Rk.INTENSITYMODE_ILLUMINANCE = 3, Rk.INTENSITYMODE_LUMINANCE = 4, Rk.LIGHTTYPEID_POINTLIGHT = 0, Rk.LIGHTTYPEID_DIRECTIONALLIGHT = 1, Rk.LIGHTTYPEID_SPOTLIGHT = 2, Rk.LIGHTTYPEID_HEMISPHERICLIGHT = 3, Rk.LIGHTTYPEID_RECT_AREALIGHT = 4, Rk.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  39248: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Xk
    });
    var Rk, tk = Bk(36781),
      ak = Bk(39255);
    ! function(kk) {
      kk[kk.Unknown = 0] = "Unknown", kk[kk.Url = 1] = "Url", kk[kk.Temp = 2] = "Temp", kk[kk.Raw = 3] = "Raw", kk[kk.Dynamic = 4] = "Dynamic", kk[kk.RenderTarget = 5] = "RenderTarget", kk[kk.MultiRenderTarget = 6] = "MultiRenderTarget", kk[kk.Cube = 7] = "Cube", kk[kk.CubeRaw = 8] = "CubeRaw", kk[kk.CubePrefiltered = 9] = "CubePrefiltered", kk[kk.Raw3D = 10] = "Raw3D", kk[kk.Raw2DArray = 11] = "Raw2DArray", kk[kk.DepthStencil = 12] = "DepthStencil", kk[kk.CubeRawRGBD = 13] = "CubeRawRGBD", kk[kk.Depth = 14] = "Depth", kk[kk.External = 15] = "External"
    }(Rk || (Rk = {}));
    class Xk extends ak.d {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(kk) {
        this._useMipMaps = kk
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(kk) {
        this._uniqueId = kk
      }
      ne() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new tk.e, this.onErrorObservable = new tk.e, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = kk, this._source = Fk, this._uniqueId = Xk._Counter++, Bk || (this._hardwareTexture = kk._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, kk, Fk, Bk), this.width = kk, this.height = Fk, this.depth = Bk, this.baseWidth = kk, this.baseHeight = Fk, this.baseDepth = Bk, this._size = kk * Fk * Bk
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const kk = this.onRebuildCallback(this),
            Fk = Fk => {
              Fk._swapAndDie(this, !1), this.isReady = kk.isReady
            };
          return void(kk.isAsync ? kk.proxy.then(Fk) : Fk(kk.proxy))
        }
        let kk;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(kk = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (kk => {
              kk._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (kk = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), kk._swapAndDie(this, !1), this._bufferViewArray)
              for (let kk = 0; kk < this._bufferViewArray.length; kk++) {
                const Fk = this._bufferViewArray[kk];
                Fk && this._engine.updateRawTexture(this, Fk, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, kk)
              }
            this.isReady = !0;
            break;
          case 10:
            kk = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), kk._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (kk = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), kk._swapAndDie(this, !1), this._bufferViewArray)
              for (let kk = 0; kk < this._bufferViewArray.length; kk++) {
                const Fk = this._bufferViewArray[kk];
                Fk && this._engine.updateRawTexture2DArray(this, Fk, this.format, this.invertY, this._compression, this.type, kk)
              }
            this.isReady = !0;
            break;
          case 4:
            kk = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), kk._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(kk = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              kk._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            kk = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), kk._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return kk = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (kk => {
              kk && kk._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(kk._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(kk._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), kk._hardwareTexture = this._hardwareTexture, kk._setUniqueId(Xk._Counter++), Fk && (kk._isRGBD = this._isRGBD), this._lodTextureHigh && (kk._lodTextureHigh && kk._lodTextureHigh.dispose(), kk._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (kk._lodTextureMid && kk._lodTextureMid.dispose(), kk._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (kk._lodTextureLow && kk._lodTextureLow.dispose(), kk._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (kk._irradianceTexture && kk._irradianceTexture.dispose(), kk._irradianceTexture = this._irradianceTexture);
        const Bk = this._engine.getLoadedTexturesCache();
        let Rk = Bk.indexOf(this); - 1 !== Rk && Bk.splice(Rk, 1), Rk = Bk.indexOf(kk), -1 === Rk && Bk.push(kk)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    Xk._Counter = 0
  },
  39342: (kk, Fk, Bk) => {
    function Rk(kk) {
      return 13 === kk || 14 === kk || 15 === kk || 16 === kk || 17 === kk || 18 === kk || 19 === kk
    }

    function tk(kk) {
      return 8 === kk || 9 === kk || 10 === kk || 11 === kk
    }

    function ak(kk) {
      return 0 === kk || 5 === kk || 7 === kk || 11 === kk
    }

    function Xk(kk) {
      return 13 === kk || 17 === kk || 18 === kk || 19 === kk
    }
    Bk.d(Fk, {
      e: () => Xk,
      i: () => Rk,
      l: () => tk,
      m: () => ak
    })
  },
  39255: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk
    });
    class Rk {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(kk) {
        this._cachedWrapU = kk
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(kk) {
        this._cachedWrapV = kk
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(kk) {
        this._cachedWrapR = kk
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(kk) {
        this._cachedAnisotropicFilteringLevel = kk
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(kk) {
        this._comparisonFunction = kk
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(kk) {
        this._useMipMaps = kk
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = kk, this._cachedWrapV = Fk, this._cachedWrapR = Bk, this._cachedAnisotropicFilteringLevel = Rk, this.samplingMode = tk, this._comparisonFunction = ak, this
      }
      compareSampler(kk) {
        return this._cachedWrapU === kk._cachedWrapU && this._cachedWrapV === kk._cachedWrapV && this._cachedWrapR === kk._cachedWrapR && this._cachedAnisotropicFilteringLevel === kk._cachedAnisotropicFilteringLevel && this.samplingMode === kk.samplingMode && this._comparisonFunction === kk._comparisonFunction && this._useMipMaps === kk._useMipMaps
      }
    }
  },
  39519: (kk, Fk, Bk) => {
    function Rk(kk) {
      kk.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    Bk.d(Fk, {
      d: () => Rk
    })
  },
  39313: (kk, Fk, Bk) => {
    function Rk(kk) {
      return void 0 === kk.getPipelineContext
    }
    Bk.d(Fk, {
      c: () => Rk
    })
  },
  39733: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk
    });
    var Rk = Bk(39302);
    class tk {
      static GetEffect(kk) {
        return void 0 === kk.getPipelineContext ? kk.effect : kk
      }
      constructor(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = kk.createDrawContext(), Fk && (this.materialContext = kk.createMaterialContext())
      }
      setEffect(kk, Fk) {
        let Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        Bk || this.effect === kk || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = kk, void 0 !== Fk && (this.defines = Fk), Bk && this.drawContext?.reset()
      }
      dispose() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const Fk = this.effect;
          kk ? Fk.dispose() : Rk.e.SetImmediate((() => {
            Fk.ne().onEndFrameObservable.addOnce((() => {
              Fk.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39279: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Vk,
      c: () => Ak,
      g: () => dk,
      h: () => sk
    });
    var Rk = Bk(39281),
      tk = Bk(39288),
      ak = Bk(39270),
      Xk = Bk(38320),
      bk = Bk(39300),
      wk = Bk(39293);

    function dk(kk, Fk) {
      return (0, tk.E)(Fk).cachedPipelines[kk]
    }

    function sk(kk) {
      const Fk = kk._name,
        Bk = kk.context;
      if (Fk && Bk) {
        const kk = (0, tk.E)(Bk),
          Rk = kk.cachedPipelines[Fk];
        Rk?.dispose(), delete kk.cachedPipelines[Fk]
      }
    }

    function Vk(kk, Fk, Bk, tk, ak, Xk, wk) {
      let dk, sk;
      const Vk = (0, Rk.j)() ? Xk?.getHostDocument() : null;
      dk = "string" === typeof Fk ? Fk : "string" === typeof Fk.vertexSource ? "source:" + Fk.vertexSource : "string" === typeof Fk.vertexElement ? Vk?.getElementById(Fk.vertexElement) || Fk.vertexElement : Fk.vertex || Fk, sk = "string" === typeof Fk ? Fk : "string" === typeof Fk.fragmentSource ? "source:" + Fk.fragmentSource : "string" === typeof Fk.fragmentElement ? Vk?.getElementById(Fk.fragmentElement) || Fk.fragmentElement : Fk.fragment || Fk;
      const Ak = [void 0, void 0],
        ek = () => {
          if (Ak[0] && Ak[1]) {
            const [Rk, dk] = Ak;
            (0, bk.i)(kk), (0, bk.n)(Rk, kk, ((Rk, sk) => {
              wk && (wk._vertexSourceCodeBeforeMigration = sk), Bk && (Rk = Bk("vertex", Rk)), kk.isFragment = !0, (0, bk.n)(dk, kk, ((Xk, dk) => {
                wk && (wk._fragmentSourceCodeBeforeMigration = dk), Bk && (Xk = Bk("fragment", Xk));
                const sk = (0, bk.e)(Rk, Xk, kk);
                kk = null;
                const Vk = function(kk, Fk, Bk, Rk) {
                  if (Bk) {
                    return {
                      vertexSourceCode: (1 === Rk ? "//" : "") + "#define SHADER_NAME vertex:" + (Bk.vertexElement || Bk.vertex || Bk.spectorName || Bk) + "\n" + kk,
                      fragmentSourceCode: (1 === Rk ? "//" : "") + "#define SHADER_NAME fragment:" + (Bk.fragmentElement || Bk.fragment || Bk.spectorName || Bk) + "\n" + Fk
                    }
                  }
                  return {
                    vertexSourceCode: kk,
                    fragmentSourceCode: Fk
                  }
                }(sk.vertexCode, sk.fragmentCode, Fk, ak);
                tk?.(Vk.vertexSourceCode, Vk.fragmentSourceCode)
              }), Xk)
            }), Xk)
          }
        };
      Jk(dk, "Vertex", "", (kk => {
        wk && (wk._rawVertexSourceCode = kk), Ak[0] = kk, ek()
      }), ak), Jk(sk, "Fragment", "Pixel", (kk => {
        wk && (wk._rawFragmentSourceCode = kk), Ak[1] = kk, ek()
      }), ak)
    }

    function Jk(kk, Fk, Bk, tk, Xk, bk) {
      if ("undefined" !== typeof HTMLElement && kk instanceof HTMLElement) {
        return void tk((0, Rk.d)(kk))
      }
      if ("source:" === kk.substring(0, 7)) return void tk(kk.substring(7));
      if ("base64:" === kk.substring(0, 7)) {
        return void tk(window.atob(kk.substring(7)))
      }
      const dk = ak.d.GetShadersStore(Xk);
      if (dk[kk + Fk + "Shader"]) return void tk(dk[kk + Fk + "Shader"]);
      if (Bk && dk[kk + Bk + "Shader"]) return void tk(dk[kk + Bk + "Shader"]);
      let sk;
      if (sk = "." === kk[0] || "/" === kk[0] || kk.indexOf("http") > -1 ? kk : ak.d.GetShadersRepository(Xk) + kk, !(bk = bk || wk.m)) throw new Error("loadFileInjection is not defined");
      bk(sk + "." + Fk.toLowerCase() + ".fx", tk)
    }
    const Ak = (kk, Fk, Bk, Rk) => {
      try {
        const ak = kk.context ? (0, tk.E)(kk.context) : null;
        ak && (ak.disableParallelShaderCompile = kk.disableParallelCompilation);
        const Xk = kk.existingPipelineContext || Fk(kk.shaderProcessingContext);
        return Xk._name = kk.name, kk.name && ak && (ak.cachedPipelines[kk.name] = Xk), Bk(Xk, kk.vertex, kk.fragment, !!kk.createAsRaw, "", "", kk.rebuildRebind, kk.defines, kk.transformFeedbackVaryings, "", (() => {
          Rk(Xk, (() => {
            kk.onRenderingStateCompiled?.(Xk)
          }))
        })), Xk
      } catch (ak) {
        throw Xk.b.Error("Error compiling effect"), ak
      }
    }
  },
  39261: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => wk
    });
    var Rk = Bk(36781),
      tk = Bk(38320),
      ak = Bk(39270),
      Xk = Bk(39279),
      bk = Bk(39302);
    class wk {
      static get ShadersRepository() {
        return ak.d.ShadersRepository
      }
      static set ShadersRepository(kk) {
        ak.d.ShadersRepository = kk
      }
      get BBk() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new Rk.e), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(kk, Fk, Bk) {
        let tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          ak = arguments.length > 4 ? arguments[4] : void 0,
          bk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          dk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          sk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Vk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Jk = arguments.length > 9 ? arguments[9] : void 0,
          Ak = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          ek = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          yk = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new Rk.e, this.onErrorObservable = new Rk.e, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = kk, this._key = Ak;
        const fk = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let mk;
        if (Fk.attributes) {
          const kk = Fk;
          if (this._engine = Bk, this._attributesNames = kk.attributes, this._uniformsNames = kk.uniformsNames.concat(kk.samplers), this._samplerList = kk.samplers.slice(), this.defines = kk.defines, this.onError = kk.onError, this.onCompiled = kk.onCompiled, this._fallbacks = kk.fallbacks, this._indexParameters = kk.indexParameters, this._transformFeedbackVaryings = kk.transformFeedbackVaryings || null, this._multiTarget = !!kk.multiTarget, this._shaderLanguage = kk.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!kk.disableParallelShaderCompilation, kk.uniformBuffersNames) {
            this._uniformBuffersNamesList = kk.uniformBuffersNames.slice();
            for (let Fk = 0; Fk < kk.uniformBuffersNames.length; Fk++) this._uniformBuffersNames[kk.uniformBuffersNames[Fk]] = Fk
          }
          this._processFinalCode = kk.processFinalCode ?? null, this._processCodeAfterIncludes = kk.processCodeAfterIncludes ?? void 0, yk = kk.extraInitializationsAsync, mk = kk.existingPipelineContext
        } else this._engine = ak, this.defines = null == bk ? "" : bk, this._uniformsNames = Bk.concat(tk), this._samplerList = tk ? tk.slice() : [], this._attributesNames = Fk, this._uniformBuffersNamesList = [], this._shaderLanguage = ek, this.onError = Vk, this.onCompiled = sk, this._indexParameters = Jk, this._fallbacks = dk;
        "WEBGL2" === this._engine.shaderPlatformName && (mk = (0, Xk.g)(fk, this._engine._gl) ?? mk), this._attributeLocationByName = {}, this.uniqueId = wk._UniqueIdSeed++, mk ? (this._pipelineContext = mk, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, yk).catch((kk => {
          const Fk = kk?.message ?? String(kk),
            Bk = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${Fk}`);
          kk && "string" === typeof kk.stack && (Bk.stack = `${Bk.message}\nCaused by: ${kk.stack}`), this._processCompilationErrors(Bk)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.BBk || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Rk = arguments.length > 3 ? arguments[3] : void 0;
        Rk && await Rk(), this._processingContext = Bk || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const tk = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: kk ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: ak.d.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: ak.d.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          rBk: this._engine.rBk,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, Xk.b)(tk, this.name, this._processFinalCode, ((kk, Bk) => {
          this._vertexSourceCode = kk, this._fragmentSourceCode = Bk, this._prepareEffect(Fk)
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
        return !!this._engine.BBk || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      ne() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(kk) {
        return this._attributes[kk]
      }
      getAttributeLocationByName(kk) {
        return this._attributeLocationByName[kk]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(kk) {
        return this._uniformsNames.indexOf(kk)
      }
      getUniform(kk) {
        return this._uniforms[kk]
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
        return await new Promise((kk => {
          this.executeWhenCompiled(kk)
        }))
      }
      executeWhenCompiled(kk) {
        this.isReady() ? kk(this) : (this.onCompileObservable.add((Fk => {
          kk(Fk)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(kk) {
        (0, bk.g)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (Fk => {
          this._processCompilationErrors(Fk, kk)
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
            rBk: this._engine.rBk,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(kk, Fk, Bk, Rk) {
        this._isReady = !1, this._vertexSourceCodeOverride = kk, this._fragmentSourceCodeOverride = Fk, this.onError = (kk, Fk) => {
          Rk && Rk(Fk)
        }, this.onCompiled = () => {
          const kk = this.ne().scenes;
          if (kk)
            for (let Fk = 0; Fk < kk.length; Fk++) kk[Fk].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(Bk)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(kk) {
        if (this._pipelineContext = kk, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let Fk = 0; Fk < this._attributesNames.length; Fk++) {
            const kk = this._attributesNames[Fk];
            this._attributeLocationByName[kk] = this._attributes[Fk]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), wk.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Fk = this._pipelineContext;
        this._isReady = !1;
        try {
          const Bk = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            Rk = Bk ? null : this.defines,
            tk = Bk ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            ak = Bk ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            bk = this._engine;
          this._pipelineContext = (0, Xk.c)({
            existingPipelineContext: kk ? Fk : null,
            vertex: tk,
            fragment: ak,
            context: "WEBGL2" === bk.shaderPlatformName || "WEBGL1" === bk.shaderPlatformName ? bk._gl : void 0,
            rebuildRebind: (kk, Fk, Bk, Rk) => this._rebuildProgram(kk, Fk, Bk, Rk),
            defines: Rk,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: Bk,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: Bk => {
              Fk && !kk && this._engine._deletePipelineContext(Fk), Bk && this._onRenderingStateCompiled(Bk)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(Fk)
        } catch (Bk) {
          this._processCompilationErrors(Bk, Fk)
        }
      }
      _getShaderCodeAndErrorLine(kk, Fk, Bk) {
        const Rk = Bk ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let tk = null;
        if (Fk && kk) {
          const ak = Fk.match(Rk);
          if (ak && 2 === ak.length) {
            const Fk = parseInt(ak[1]),
              Rk = kk.split("\n", -1);
            Rk.length >= Fk && (tk = `Offending line [${Fk}] in ${Bk?"fragment":"vertex"} code: ${Rk[Fk-1]}`)
          }
        }
        return [kk, tk]
      }
      _processCompilationErrors(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof kk?.stack ? kk.stack : kk?.message ?? String(kk);
        const Bk = this._attributesNames,
          Rk = this._fallbacks;
        if (tk.b.Error("Unable to compile effect:"), tk.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), tk.b.Error(`Attributes: ${Bk.join(" ")}`), tk.b.Error("Defines:\n" + this.defines), wk.LogShaderCodeOnCompilationError) {
          let kk, Fk = null,
            Bk = null;
          this._pipelineContext?._getVertexShaderCode() && ([kk, Fk] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), kk && (tk.b.Error("Vertex code:"), tk.b.Error(kk))), this._pipelineContext?._getFragmentShaderCode() && ([kk, Bk] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), kk && (tk.b.Error("Fragment code:"), tk.b.Error(kk))), Fk && tk.b.Error(Fk), Bk && tk.b.Error(Bk)
        }
        tk.b.Error("Error: " + this._compilationError);
        const ak = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        Fk && (this._pipelineContext = Fk, this._isReady = !0, ak()), Rk ? (this._pipelineContext = null, Rk.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, tk.b.Error("Trying next fallback."), this.defines = Rk.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, ak(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, Fk || ak())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(kk, Fk) {
        this._engine._bindTexture(this._samplers[kk], Fk, kk)
      }
      setTexture(kk, Fk) {
        this._engine.setTexture(this._samplers[kk], this._uniforms[kk], Fk, kk)
      }
      setTextureArray(kk, Fk) {
        const Bk = kk + "Ex";
        if (-1 === this._samplerList.indexOf(Bk + "0")) {
          const Rk = this._samplerList.indexOf(kk);
          for (let kk = 1; kk < Fk.length; kk++) {
            const Fk = Bk + (kk - 1).toString();
            this._samplerList.splice(Rk + kk, 0, Fk)
          }
          let tk = 0;
          for (const kk of this._samplerList) this._samplers[kk] = tk, tk += 1
        }
        this._engine.setTextureArray(this._samplers[kk], this._uniforms[kk], Fk, kk)
      }
      bindUniformBuffer(kk, Fk) {
        const Bk = this._uniformBuffersNames[Fk];
        void 0 === Bk || wk._BaseCache[Bk] === kk && this._engine._features.useUBOBindingCache || (wk._BaseCache[Bk] = kk, this._engine.bindUniformBufferBase(kk, Bk, Fk))
      }
      bindUniformBlock(kk, Fk) {
        this._engine.bindUniformBlock(this._pipelineContext, kk, Fk)
      }
      setInt(kk, Fk) {
        return this._pipelineContext.setInt(kk, Fk), this
      }
      setInt2(kk, Fk, Bk) {
        return this._pipelineContext.setInt2(kk, Fk, Bk), this
      }
      setInt3(kk, Fk, Bk, Rk) {
        return this._pipelineContext.setInt3(kk, Fk, Bk, Rk), this
      }
      setInt4(kk, Fk, Bk, Rk, tk) {
        return this._pipelineContext.setInt4(kk, Fk, Bk, Rk, tk), this
      }
      setIntArray(kk, Fk) {
        return this._pipelineContext.setIntArray(kk, Fk), this
      }
      setIntArray2(kk, Fk) {
        return this._pipelineContext.setIntArray2(kk, Fk), this
      }
      setIntArray3(kk, Fk) {
        return this._pipelineContext.setIntArray3(kk, Fk), this
      }
      setIntArray4(kk, Fk) {
        return this._pipelineContext.setIntArray4(kk, Fk), this
      }
      setUInt(kk, Fk) {
        return this._pipelineContext.setUInt(kk, Fk), this
      }
      setUInt2(kk, Fk, Bk) {
        return this._pipelineContext.setUInt2(kk, Fk, Bk), this
      }
      setUInt3(kk, Fk, Bk, Rk) {
        return this._pipelineContext.setUInt3(kk, Fk, Bk, Rk), this
      }
      setUInt4(kk, Fk, Bk, Rk, tk) {
        return this._pipelineContext.setUInt4(kk, Fk, Bk, Rk, tk), this
      }
      setUIntArray(kk, Fk) {
        return this._pipelineContext.setUIntArray(kk, Fk), this
      }
      setUIntArray2(kk, Fk) {
        return this._pipelineContext.setUIntArray2(kk, Fk), this
      }
      setUIntArray3(kk, Fk) {
        return this._pipelineContext.setUIntArray3(kk, Fk), this
      }
      setUIntArray4(kk, Fk) {
        return this._pipelineContext.setUIntArray4(kk, Fk), this
      }
      setFloatArray(kk, Fk) {
        return this._pipelineContext.setArray(kk, Fk), this
      }
      setFloatArray2(kk, Fk) {
        return this._pipelineContext.setArray2(kk, Fk), this
      }
      setFloatArray3(kk, Fk) {
        return this._pipelineContext.setArray3(kk, Fk), this
      }
      setFloatArray4(kk, Fk) {
        return this._pipelineContext.setArray4(kk, Fk), this
      }
      setArray(kk, Fk) {
        return this._pipelineContext.setArray(kk, Fk), this
      }
      setArray2(kk, Fk) {
        return this._pipelineContext.setArray2(kk, Fk), this
      }
      setArray3(kk, Fk) {
        return this._pipelineContext.setArray3(kk, Fk), this
      }
      setArray4(kk, Fk) {
        return this._pipelineContext.setArray4(kk, Fk), this
      }
      setMatrices(kk, Fk) {
        return this._pipelineContext.setMatrices(kk, Fk), this
      }
      setMatrix(kk, Fk) {
        return this._pipelineContext.setMatrix(kk, Fk), this
      }
      setMatrix3x3(kk, Fk) {
        return this._pipelineContext.setMatrix3x3(kk, Fk), this
      }
      setMatrix2x2(kk, Fk) {
        return this._pipelineContext.setMatrix2x2(kk, Fk), this
      }
      setFloat(kk, Fk) {
        return this._pipelineContext.setFloat(kk, Fk), this
      }
      setBool(kk, Fk) {
        return this._pipelineContext.setInt(kk, Fk ? 1 : 0), this
      }
      setVector2(kk, Fk) {
        return this._pipelineContext.setVector2(kk, Fk), this
      }
      setFloat2(kk, Fk, Bk) {
        return this._pipelineContext.setFloat2(kk, Fk, Bk), this
      }
      setVector3(kk, Fk) {
        return this._pipelineContext.setVector3(kk, Fk), this
      }
      setFloat3(kk, Fk, Bk, Rk) {
        return this._pipelineContext.setFloat3(kk, Fk, Bk, Rk), this
      }
      setVector4(kk, Fk) {
        return this._pipelineContext.setVector4(kk, Fk), this
      }
      setQuaternion(kk, Fk) {
        return this._pipelineContext.setQuaternion(kk, Fk), this
      }
      setFloat4(kk, Fk, Bk, Rk, tk) {
        return this._pipelineContext.setFloat4(kk, Fk, Bk, Rk, tk), this
      }
      setColor3(kk, Fk) {
        return this._pipelineContext.setColor3(kk, Fk), this
      }
      setColor4(kk, Fk, Bk) {
        return this._pipelineContext.setColor4(kk, Fk, Bk), this
      }
      setDirectColor4(kk, Fk) {
        return this._pipelineContext.setDirectColor4(kk, Fk), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (wk.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, Xk.h)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        Fk && (ak.d.GetShadersStore(Rk)[`${kk}PixelShader`] = Fk), Bk && (ak.d.GetShadersStore(Rk)[`${kk}VertexShader`] = Bk)
      }
      static ResetCache() {
        wk._BaseCache = {}
      }
    }
    wk.LogShaderCodeOnCompilationError = !0, wk.PersistentMode = !1, wk.AutomaticallyClearCodeCache = !1, wk._UniqueIdSeed = 0, wk._BaseCache = {}, wk.ShadersStore = ak.d.ShadersStore, wk.IncludesShadersStore = ak.d.IncludesShadersStore
  },
  39553: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => sk,
      f: () => Ok,
      g: () => Lk
    });
    var Rk = Bk(39261),
      tk = Bk(36758),
      ak = Bk(36793),
      Xk = Bk(39530);
    const bk = new tk.c,
      wk = new tk.c,
      dk = new tk.c,
      sk = {
        XN: () => {},
        eyeAtCamera: !0
      };

    function Vk(kk, Fk, Bk) {
      const Rk = Bk.PBk(),
        tk = Fk.PBk();
      for (let ak = 0; ak < 16; ak++) Rk[ak] = tk[ak];
      return Rk[12] -= kk.x, Rk[13] -= kk.y, Rk[14] -= kk.z, Bk.markAsUpdated(), Bk
    }

    function Jk(kk, Fk, Bk) {
      return (0, ak.l)(Fk, wk), Vk(kk, wk, dk), (0, ak.l)(dk, Bk), Bk
    }

    function Ak(kk, Fk, Bk) {
      if (!sk.eyeAtCamera) return Jk(kk, Fk, Bk);
      const Rk = Bk.PBk(),
        tk = Fk.PBk();
      for (let ak = 0; ak < 16; ak++) Rk[ak] = tk[ak];
      return Rk[12] = 0, Rk[13] = 0, Rk[14] = 0, Bk.markAsUpdated(), Bk
    }

    function ek(kk, Fk, Bk, Rk) {
      return (0, ak.t)(Ak(kk, Fk, Rk), Bk, Rk), Rk
    }

    function yk(kk, Fk, Bk, Rk) {
      return (0, ak.l)(Bk, wk), (0, ak.t)(Fk, wk, dk), Vk(kk, dk, wk), Ak(kk, Bk, dk), (0, ak.t)(wk, dk, Rk), Rk
    }

    function fk(kk, Fk, Bk, Rk, tk, Xk) {
      return (0, ak.l)(Bk, wk), (0, ak.t)(Fk, wk, dk), Vk(kk, dk, wk), ek(kk, Rk, tk, dk), (0, ak.t)(wk, dk, Xk), Xk
    }

    function mk(kk, Fk) {
      const Bk = sk.XN();
      if (!Bk || bk === Fk) return Fk;
      bk.updateFlag = Fk.updateFlag;
      const Rk = Bk.floatingOriginOffset;
      switch (kk) {
        case "world":
          return Vk(Rk, Fk, bk);
        case "view":
          return Ak(Rk, Fk, bk);
        case "worldView":
          return yk(Rk, Fk, Bk.getViewMatrix(), bk);
        case "viewProjection":
          return ek(Rk, Bk.getViewMatrix(), Bk.getProjectionMatrix(), bk);
        case "worldViewProjection":
          return fk(Rk, Fk, Bk.getTransformMatrix(), Bk.getViewMatrix(), Bk.getProjectionMatrix(), bk);
        default:
          if (kk.startsWith("u_")) {
            const tk = kk.toLowerCase();
            if (tk.startsWith("u_worldviewprojection")) return fk(Rk, Fk, Bk.getTransformMatrix(), Bk.getViewMatrix(), Bk.getProjectionMatrix(), bk);
            if (tk.startsWith("u_viewprojection")) return ek(Rk, Bk.getViewMatrix(), Bk.getProjectionMatrix(), bk);
            if (tk.startsWith("u_worldview")) return yk(Rk, Fk, Bk.getViewMatrix(), bk);
            if (tk.startsWith("u_world")) return Vk(Rk, Fk, bk);
            if (tk.startsWith("u_view")) return Ak(Rk, Fk, bk)
          }
          return Fk
      }
    }
    const Wk = Xk.e,
      vk = Rk.b,
      ik = Wk.prototype._updateMatrixForUniform,
      Yk = Rk.b.prototype.setMatrix;

    function Lk() {
      Rk.b.prototype.setMatrix = Yk, vk._setMatrixOverride = void 0, Wk.prototype._updateMatrixForUniform = ik, Wk.prototype._updateMatrixForUniformOverride = void 0
    }

    function Ok() {
      vk.prototype._setMatrixOverride = Yk, vk.prototype.setMatrix = function(kk, Fk) {
        return this._setMatrixOverride(kk, mk(kk, Fk)), this
      }, Wk.prototype._updateMatrixForUniformOverride = ik, Wk.prototype._updateMatrixForUniform = function(kk, Fk) {
        this._updateMatrixForUniformOverride(kk, mk(kk, Fk))
      }
    }
  },
  39526: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ak,
      d: () => tk
    });
    var Rk = Bk(39519);

    function tk(kk, Fk) {
      Fk.WHITEBALANCE && kk.push("whiteBalanceMatrix"), Fk.EXPOSURE && kk.push("exposureLinear"), Fk.CONTRAST && kk.push("contrast"), Fk.COLORGRADING && kk.push("colorTransformSettings"), (Fk.VIGNETTE || Fk.DITHER) && kk.push("vInverseScreenSize"), Fk.VIGNETTE && (kk.push("vignetteSettings1"), kk.push("vignetteSettings2")), Fk.COLORCURVES && (0, Rk.d)(kk), Fk.DITHER && kk.push("ditherIntensity")
    }

    function ak(kk, Fk) {
      Fk.COLORGRADING && kk.push("txColorTransform")
    }
  },
  39510: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => uk,
      d: () => Uk
    });
    var Rk = Bk(39397),
      tk = Bk(39404),
      ak = Bk(36781),
      Xk = Bk(36917),
      bk = Bk(36790),
      wk = Bk(36758);
    const dk = [
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
      sk = 1e6 / dk[dk.length - 1][0],
      Vk = 150;

    function Jk(kk, Fk) {
      const Bk = Number.isNaN(kk) ? sk : Math.max(kk, sk),
        Rk = (0, bk.Clamp)(1e6 / Bk, dk[0][0], dk[dk.length - 1][0]);
      let tk = 0,
        ak = dk.length - 1;
      for (; ak - tk > 1;) {
        const kk = tk + ak >> 1;
        dk[kk][0] <= Rk ? tk = kk : ak = kk
      }
      const Xk = tk,
        [Jk, Ak, ek, yk] = dk[Xk],
        [fk, mk, Wk, vk] = dk[Xk + 1],
        ik = (Rk - Jk) / (fk - Jk),
        Yk = wk.p.Lerp(new wk.p(Ak, ek), new wk.p(mk, Wk), ik),
        Lk = wk.p.Normalize(new wk.p(1, yk)),
        Ok = wk.p.Normalize(new wk.p(1, vk)),
        Ek = wk.p.Normalize(wk.p.Lerp(Lk, Ok, ik)),
        Sk = (0, bk.Clamp)(Fk, -150, Vk);
      Yk.wRk(Ek.scale(Sk / 3e3));
      const Nk = 2 * Yk.x - 8 * Yk.y + 4,
        Hk = 3 * Yk.x / Nk,
        uk = 2 * Yk.y / Nk;
      return new wk.s(Hk / uk, 1, (1 - Hk - uk) / uk)
    }
    const Ak = wk.c.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      ek = wk.c.Invert(Ak);

    function yk(kk, Fk) {
      const Bk = Fk > 0 ? kk / Fk : 10;
      return (0, bk.Clamp)(Bk, .1, 10)
    }

    function fk(kk, Fk) {
      const Bk = wk.s.TransformNormal(kk, Ak),
        Rk = wk.s.TransformNormal(Fk, Ak),
        tk = wk.c.FromArray([yk(Rk.x, Bk.x), 0, 0, 0, 0, yk(Rk.y, Bk.y), 0, 0, 0, 0, yk(Rk.z, Bk.z), 0, 0, 0, 0, 1]);
      return Ak.multiply(tk).multiply(ek)
    }
    const mk = new wk.s(.95047, 1, 1.08883),
      Wk = wk.c.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(fk(mk, Jk(6500, 0))),
      vk = wk.c.Invert(Wk),
      ik = wk.s.TransformNormal(new wk.s(1, 1, 1), Wk);
    var Yk = Bk(39414),
      Lk = Bk(39519);
    let Ok = (() => {
      var kk;
      let Fk, Bk, ak, bk, wk, dk, sk, Vk, Jk, Ak, ek, yk, fk = [],
        mk = [],
        Wk = [],
        vk = [],
        ik = [],
        Ok = [],
        Ek = [],
        Sk = [],
        Nk = [],
        Hk = [],
        uk = [],
        Mk = [],
        gk = [],
        Uk = [],
        ck = [],
        Gk = [],
        Tk = [],
        rk = [],
        Dk = [],
        zk = [],
        Pk = [],
        hk = [],
        qk = [],
        Ck = [];
      return kk = class {
        constructor() {
          this._dirty = !0, this._tempColor = new Xk.i(0, 0, 0, 0), this._globalCurve = new Xk.i(0, 0, 0, 0), this._highlightsCurve = new Xk.i(0, 0, 0, 0), this._midtonesCurve = new Xk.i(0, 0, 0, 0), this._shadowsCurve = new Xk.i(0, 0, 0, 0), this._positiveCurve = new Xk.i(0, 0, 0, 0), this._negativeCurve = new Xk.i(0, 0, 0, 0), this._globalHue = (0, Rk.l)(this, fk, 30), this._globalDensity = ((0, Rk.l)(this, mk), (0, Rk.l)(this, Wk, 0)), this._globalSaturation = ((0, Rk.l)(this, vk), (0, Rk.l)(this, ik, 0)), this._globalExposure = ((0, Rk.l)(this, Ok), (0, Rk.l)(this, Ek, 0)), this._highlightsHue = ((0, Rk.l)(this, Sk), (0, Rk.l)(this, Nk, 30)), this._highlightsDensity = ((0, Rk.l)(this, Hk), (0, Rk.l)(this, uk, 0)), this._highlightsSaturation = ((0, Rk.l)(this, Mk), (0, Rk.l)(this, gk, 0)), this._highlightsExposure = ((0, Rk.l)(this, Uk), (0, Rk.l)(this, ck, 0)), this._midtonesHue = ((0, Rk.l)(this, Gk), (0, Rk.l)(this, Tk, 30)), this._midtonesDensity = ((0, Rk.l)(this, rk), (0, Rk.l)(this, Dk, 0)), this._midtonesSaturation = ((0, Rk.l)(this, zk), (0, Rk.l)(this, Pk, 0)), this._midtonesExposure = ((0, Rk.l)(this, hk), (0, Rk.l)(this, qk, 0)), this._shadowsHue = ((0, Rk.l)(this, Ck), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(kk) {
          this._globalHue = kk, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(kk) {
          this._globalDensity = kk, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(kk) {
          this._globalSaturation = kk, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(kk) {
          this._globalExposure = kk, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(kk) {
          this._highlightsHue = kk, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(kk) {
          this._highlightsDensity = kk, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(kk) {
          this._highlightsSaturation = kk, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(kk) {
          this._highlightsExposure = kk, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(kk) {
          this._midtonesHue = kk, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(kk) {
          this._midtonesDensity = kk, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(kk) {
          this._midtonesSaturation = kk, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(kk) {
          this._midtonesExposure = kk, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(kk) {
          this._shadowsHue = kk, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(kk) {
          this._shadowsDensity = kk, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(kk) {
          this._shadowsSaturation = kk, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(kk) {
          this._shadowsExposure = kk, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(Fk, Bk, Rk, tk, ak) {
          null != Fk && (Fk = kk._Clamp(Fk, 0, 360), Bk = kk._Clamp(Bk, -100, 100), Rk = kk._Clamp(Rk, -100, 100), tk = kk._Clamp(tk, -100, 100), Bk = kk._ApplyColorGradingSliderNonlinear(Bk), Bk *= .5, tk = kk._ApplyColorGradingSliderNonlinear(tk), Bk < 0 && (Bk *= -1, Fk = (Fk + 180) % 360), kk._FromHSBToRef(Fk, Bk, 50 + .25 * tk, ak), ak.scaleToRef(2, ak), ak.a = 1 + .01 * Rk)
        }
        static _ApplyColorGradingSliderNonlinear(kk) {
          kk /= 100;
          let Fk = Math.abs(kk);
          return Fk = Math.pow(Fk, 2), kk < 0 && (Fk *= -1), Fk *= 100, Fk
        }
        static _FromHSBToRef(Fk, Bk, Rk, tk) {
          let ak = kk._Clamp(Fk, 0, 360);
          const Xk = kk._Clamp(Bk / 100, 0, 1),
            bk = kk._Clamp(Rk / 100, 0, 1);
          if (0 === Xk) tk.r = bk, tk.g = bk, tk.b = bk;
          else {
            ak /= 60;
            const kk = Math.floor(ak),
              Fk = ak - kk,
              Bk = bk * (1 - Xk),
              Rk = bk * (1 - Xk * Fk),
              wk = bk * (1 - Xk * (1 - Fk));
            switch (kk) {
              case 0:
                tk.r = bk, tk.g = wk, tk.b = Bk;
                break;
              case 1:
                tk.r = Rk, tk.g = bk, tk.b = Bk;
                break;
              case 2:
                tk.r = Bk, tk.g = bk, tk.b = wk;
                break;
              case 3:
                tk.r = Bk, tk.g = Rk, tk.b = bk;
                break;
              case 4:
                tk.r = wk, tk.g = Bk, tk.b = bk;
                break;
              default:
                tk.r = bk, tk.g = Bk, tk.b = Rk
            }
          }
          tk.a = 1
        }
        static _Clamp(kk, Fk, Bk) {
          return Math.min(Math.max(kk, Fk), Bk)
        }
        clone() {
          return Yk.c.Clone((() => new kk), this)
        }
        serialize() {
          return Yk.c.Serialize(this)
        }
        _bind(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), kk && (kk.setFloat4(Fk, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), kk.setFloat4(Bk, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), kk.setFloat4(Rk, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const Xk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [(0, tk.M)()], Bk = [(0, tk.M)()], ak = [(0, tk.M)()], bk = [(0, tk.M)()], wk = [(0, tk.M)()], dk = [(0, tk.M)()], sk = [(0, tk.M)()], Vk = [(0, tk.M)()], Jk = [(0, tk.M)()], Ak = [(0, tk.M)()], ek = [(0, tk.M)()], yk = [(0, tk.M)()], (0, Rk.j)(null, null, Fk, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: kk => "_globalHue" in kk,
            get: kk => kk._globalHue,
            set: (kk, Fk) => {
              kk._globalHue = Fk
            }
          },
          metadata: Xk
        }, fk, mk), (0, Rk.j)(null, null, Bk, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "_globalDensity" in kk,
            get: kk => kk._globalDensity,
            set: (kk, Fk) => {
              kk._globalDensity = Fk
            }
          },
          metadata: Xk
        }, Wk, vk), (0, Rk.j)(null, null, ak, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: kk => "_globalSaturation" in kk,
            get: kk => kk._globalSaturation,
            set: (kk, Fk) => {
              kk._globalSaturation = Fk
            }
          },
          metadata: Xk
        }, ik, Ok), (0, Rk.j)(null, null, bk, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: kk => "_globalExposure" in kk,
            get: kk => kk._globalExposure,
            set: (kk, Fk) => {
              kk._globalExposure = Fk
            }
          },
          metadata: Xk
        }, Ek, Sk), (0, Rk.j)(null, null, wk, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: kk => "_highlightsHue" in kk,
            get: kk => kk._highlightsHue,
            set: (kk, Fk) => {
              kk._highlightsHue = Fk
            }
          },
          metadata: Xk
        }, Nk, Hk), (0, Rk.j)(null, null, dk, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "_highlightsDensity" in kk,
            get: kk => kk._highlightsDensity,
            set: (kk, Fk) => {
              kk._highlightsDensity = Fk
            }
          },
          metadata: Xk
        }, uk, Mk), (0, Rk.j)(null, null, sk, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: kk => "_highlightsSaturation" in kk,
            get: kk => kk._highlightsSaturation,
            set: (kk, Fk) => {
              kk._highlightsSaturation = Fk
            }
          },
          metadata: Xk
        }, gk, Uk), (0, Rk.j)(null, null, Vk, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: kk => "_highlightsExposure" in kk,
            get: kk => kk._highlightsExposure,
            set: (kk, Fk) => {
              kk._highlightsExposure = Fk
            }
          },
          metadata: Xk
        }, ck, Gk), (0, Rk.j)(null, null, Jk, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: kk => "_midtonesHue" in kk,
            get: kk => kk._midtonesHue,
            set: (kk, Fk) => {
              kk._midtonesHue = Fk
            }
          },
          metadata: Xk
        }, Tk, rk), (0, Rk.j)(null, null, Ak, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "_midtonesDensity" in kk,
            get: kk => kk._midtonesDensity,
            set: (kk, Fk) => {
              kk._midtonesDensity = Fk
            }
          },
          metadata: Xk
        }, Dk, zk), (0, Rk.j)(null, null, ek, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: kk => "_midtonesSaturation" in kk,
            get: kk => kk._midtonesSaturation,
            set: (kk, Fk) => {
              kk._midtonesSaturation = Fk
            }
          },
          metadata: Xk
        }, Pk, hk), (0, Rk.j)(null, null, yk, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: kk => "_midtonesExposure" in kk,
            get: kk => kk._midtonesExposure,
            set: (kk, Fk) => {
              kk._midtonesExposure = Fk
            }
          },
          metadata: Xk
        }, qk, Ck), Xk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Xk
        })
      })(), kk.PrepareUniforms = Lk.d, kk
    })();

    function Ek(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      kk._bind(Fk, Bk, Rk, tk)
    }
    var Sk = Bk(39329),
      Nk = Bk(39526),
      Hk = Bk(36798);
    let uk = (() => {
        var kk;
        let Fk, Bk, dk, Ak, ek, yk, mk, Lk, Hk, uk, Mk, gk, Uk, ck, Gk, Tk, rk, Dk, zk, Pk, hk, qk, Ck, Zk, pk, Kk, xk, jk, lk = [],
          nk = [],
          Ik = [],
          Qk = [],
          kF = [],
          FF = [],
          BF = [],
          RF = [],
          tF = [],
          aF = [],
          XF = [],
          bF = [],
          wF = [],
          dF = [],
          sF = [],
          VF = [],
          JF = [],
          AF = [],
          eF = [],
          yF = [],
          fF = [],
          mF = [],
          WF = [],
          vF = [],
          iF = [],
          YF = [],
          oF = [],
          LF = [],
          OF = [],
          EF = [],
          SF = [],
          NF = [],
          HF = [],
          uF = [],
          MF = [],
          gF = [],
          UF = [],
          cF = [],
          GF = [],
          TF = [],
          rF = [],
          DF = [],
          zF = [],
          PF = [],
          hF = [],
          qF = [],
          CF = [],
          ZF = [],
          pF = [],
          KF = [],
          xF = [],
          jF = [],
          lF = [],
          nF = [],
          IF = [],
          QF = [];
        return kk = class {
          constructor() {
            this.colorCurves = (0, Rk.l)(this, lk, new Ok), this._colorCurvesEnabled = ((0, Rk.l)(this, nk), (0, Rk.l)(this, Ik, !1)), this._colorGradingTexture = ((0, Rk.l)(this, Qk), (0, Rk.l)(this, kF, void 0)), this._colorGradingEnabled = ((0, Rk.l)(this, FF), (0, Rk.l)(this, BF, !1)), this._colorGradingWithGreenDepth = ((0, Rk.l)(this, RF), (0, Rk.l)(this, tF, !0)), this._colorGradingBGR = ((0, Rk.l)(this, aF), (0, Rk.l)(this, XF, !0)), this._exposure = ((0, Rk.l)(this, bF), (0, Rk.l)(this, wF, 1)), this._toneMappingEnabled = ((0, Rk.l)(this, dF), (0, Rk.l)(this, sF, !1)), this._toneMappingType = ((0, Rk.l)(this, VF), (0, Rk.l)(this, JF, kk.TONEMAPPING_STANDARD)), this._contrast = ((0, Rk.l)(this, AF), (0, Rk.l)(this, eF, 1)), this._whiteBalanceEnabled = ((0, Rk.l)(this, yF), (0, Rk.l)(this, fF, !1)), this._temperature = ((0, Rk.l)(this, mF), (0, Rk.l)(this, WF, 6500)), this._tint = ((0, Rk.l)(this, vF), (0, Rk.l)(this, iF, 0)), this._whiteBalanceMatrix = ((0, Rk.l)(this, YF), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, Rk.l)(this, oF, 0), this.vignetteCenterX = ((0, Rk.l)(this, LF), (0, Rk.l)(this, OF, 0)), this.vignetteCenterY = ((0, Rk.l)(this, EF), (0, Rk.l)(this, SF, 0)), this.vignetteWeight = ((0, Rk.l)(this, NF), (0, Rk.l)(this, HF, 1.5)), this.vignetteColor = ((0, Rk.l)(this, uF), (0, Rk.l)(this, MF, new Xk.i(0, 0, 0, 0))), this.vignetteCameraFov = ((0, Rk.l)(this, gF), (0, Rk.l)(this, UF, .5)), this._vignetteBlendMode = ((0, Rk.l)(this, cF), (0, Rk.l)(this, GF, kk.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, Rk.l)(this, TF), (0, Rk.l)(this, rF, !1)), this._ditheringEnabled = ((0, Rk.l)(this, DF), (0, Rk.l)(this, zF, !1)), this._ditheringIntensity = ((0, Rk.l)(this, PF), (0, Rk.l)(this, hF, 1 / 255)), this._skipFinalColorClamp = ((0, Rk.l)(this, qF), (0, Rk.l)(this, CF, !1)), this._applyByPostProcess = ((0, Rk.l)(this, ZF), (0, Rk.l)(this, pF, !1)), this._isEnabled = ((0, Rk.l)(this, KF), (0, Rk.l)(this, xF, !0)), this.outputTextureWidth = ((0, Rk.l)(this, jF), (0, Rk.l)(this, lF, 0)), this.outputTextureHeight = ((0, Rk.l)(this, nF), (0, Rk.l)(this, IF, 0)), this.onUpdateParameters = ((0, Rk.l)(this, QF), new ak.e)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(kk) {
            this._colorCurvesEnabled !== kk && (this._colorCurvesEnabled = kk, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(kk) {
            this._colorGradingTexture !== kk && (this._colorGradingTexture = kk, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(kk) {
            this._colorGradingEnabled !== kk && (this._colorGradingEnabled = kk, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(kk) {
            this._colorGradingWithGreenDepth !== kk && (this._colorGradingWithGreenDepth = kk, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(kk) {
            this._colorGradingBGR !== kk && (this._colorGradingBGR = kk, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(kk) {
            this._exposure !== kk && (this._exposure = kk, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(kk) {
            this._toneMappingEnabled !== kk && (this._toneMappingEnabled = kk, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(kk) {
            this._toneMappingType !== kk && (this._toneMappingType = kk, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(kk) {
            this._contrast !== kk && (this._contrast = kk, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(kk) {
            this._whiteBalanceEnabled !== kk && (this._whiteBalanceEnabled = kk, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(kk) {
            kk = Number.isNaN(kk) ? sk : Math.max(kk, sk), this._temperature !== kk && (this._temperature = kk, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(kk) {
            kk = (0, bk.Clamp)(kk, -150, Vk), this._tint !== kk && (this._tint = kk, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(kk, Fk) {
              const Bk = fk(Jk(kk, Fk), ik),
                Rk = Wk.multiply(Bk).multiply(vk);
              return wk.c.GetAsMatrix3x3(Rk)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(kk) {
            this.vignetteCenterY = kk
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(kk) {
            this.vignetteCenterX = kk
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(kk) {
            this._vignetteBlendMode !== kk && (this._vignetteBlendMode = kk, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(kk) {
            this._vignetteEnabled !== kk && (this._vignetteEnabled = kk, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(kk) {
            this._ditheringEnabled !== kk && (this._ditheringEnabled = kk, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(kk) {
            this._ditheringIntensity !== kk && (this._ditheringIntensity = kk, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(kk) {
            this._skipFinalColorClamp !== kk && (this._skipFinalColorClamp = kk, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(kk) {
            this._applyByPostProcess !== kk && (this._applyByPostProcess = kk, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(kk) {
            this._isEnabled !== kk && (this._isEnabled = kk, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(Fk) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return Fk.WHITEBALANCE = !1, Fk.VIGNETTE = !1, Fk.TONEMAPPING = 0, Fk.CONTRAST = !1, Fk.EXPOSURE = !1, Fk.COLORCURVES = !1, Fk.COLORGRADING = !1, Fk.COLORGRADING3D = !1, Fk.DITHER = !1, Fk.IMAGEPROCESSING = !1, Fk.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(Fk.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (Fk.WHITEBALANCE = this._whiteBalanceEnabled, Fk.VIGNETTE = this.vignetteEnabled, Fk.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === kk._VIGNETTEMODE_MULTIPLY, Fk.VIGNETTEBLENDMODEOPAQUE = !Fk.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case kk.TONEMAPPING_KHR_PBR_NEUTRAL:
                Fk.TONEMAPPING = 3;
                break;
              case kk.TONEMAPPING_ACES:
                Fk.TONEMAPPING = 2;
                break;
              default:
                Fk.TONEMAPPING = 1
            } else Fk.TONEMAPPING = 0;
            Fk.CONTRAST = 1 !== this.contrast, Fk.EXPOSURE = 1 !== this.exposure, Fk.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, Fk.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, Fk.COLORGRADING ? Fk.COLORGRADING3D = this.colorGradingTexture.is3D : Fk.COLORGRADING3D = !1, Fk.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, Fk.SAMPLER3DBGRMAP = this.colorGradingBGR, Fk.DITHER = this._ditheringEnabled, Fk.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, Fk.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, Fk.IMAGEPROCESSING = Fk.WHITEBALANCE || Fk.VIGNETTE || !!Fk.TONEMAPPING || Fk.CONTRAST || Fk.EXPOSURE || Fk.COLORCURVES || Fk.COLORGRADING || Fk.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(kk, Fk) {
            if (this._whiteBalanceEnabled && kk.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && Ek(this.colorCurves, kk), this._vignetteEnabled || this._ditheringEnabled) {
              const Bk = 1 / (this.outputTextureWidth || kk.ne().getRenderWidth()),
                Rk = 1 / (this.outputTextureHeight || kk.ne().getRenderHeight());
              if (kk.setFloat2("vInverseScreenSize", Bk, Rk), this._ditheringEnabled && kk.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const tk = null != Fk ? Fk : Rk / Bk;
                let ak = Math.tan(.5 * this.vignetteCameraFov),
                  Xk = ak * tk;
                const bk = Math.sqrt(Xk * ak);
                Xk = (0, Sk.j)(Xk, bk, this.vignetteStretch), ak = (0, Sk.j)(ak, bk, this.vignetteStretch), kk.setFloat4("vignetteSettings1", Xk, ak, -Xk * this.vignetteCenterX, -ak * this.vignetteCenterY);
                const wk = -2 * this.vignetteWeight;
                kk.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, wk)
              }
            }
            if (kk.setFloat("exposureLinear", this.exposure), kk.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              kk.setTexture("txColorTransform", this.colorGradingTexture);
              const Fk = this.colorGradingTexture.getSize().height;
              kk.setFloat4("colorTransformSettings", (Fk - 1) / Fk, .5 / Fk, Fk, this.colorGradingTexture.level)
            }
          }
          clone() {
            return Yk.c.Clone((() => new kk), this)
          }
          serialize() {
            return Yk.c.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Fk = [(0, tk.j)()], Bk = [(0, tk.M)()], dk = [(0, tk.D)("colorGradingTexture")], Ak = [(0, tk.M)()], ek = [(0, tk.M)()], yk = [(0, tk.M)()], mk = [(0, tk.M)()], Lk = [(0, tk.M)()], Hk = [(0, tk.M)()], uk = [(0, tk.M)()], Mk = [(0, tk.M)()], gk = [(0, tk.M)()], Uk = [(0, tk.M)()], ck = [(0, tk.M)()], Gk = [(0, tk.M)()], Tk = [(0, tk.M)()], rk = [(0, tk.M)()], Dk = [(0, tk.o)()], zk = [(0, tk.M)()], Pk = [(0, tk.M)()], hk = [(0, tk.M)()], qk = [(0, tk.M)()], Ck = [(0, tk.M)()], Zk = [(0, tk.M)()], pk = [(0, tk.M)()], Kk = [(0, tk.M)()], xk = [(0, tk.M)()], jk = [(0, tk.M)()], (0, Rk.j)(null, null, Fk, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: kk => "colorCurves" in kk,
              get: kk => kk.colorCurves,
              set: (kk, Fk) => {
                kk.colorCurves = Fk
              }
            },
            metadata: ak
          }, lk, nk), (0, Rk.j)(null, null, Bk, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: kk => "_colorCurvesEnabled" in kk,
              get: kk => kk._colorCurvesEnabled,
              set: (kk, Fk) => {
                kk._colorCurvesEnabled = Fk
              }
            },
            metadata: ak
          }, Ik, Qk), (0, Rk.j)(null, null, dk, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "_colorGradingTexture" in kk,
              get: kk => kk._colorGradingTexture,
              set: (kk, Fk) => {
                kk._colorGradingTexture = Fk
              }
            },
            metadata: ak
          }, kF, FF), (0, Rk.j)(null, null, Ak, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: kk => "_colorGradingEnabled" in kk,
              get: kk => kk._colorGradingEnabled,
              set: (kk, Fk) => {
                kk._colorGradingEnabled = Fk
              }
            },
            metadata: ak
          }, BF, RF), (0, Rk.j)(null, null, ek, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: kk => "_colorGradingWithGreenDepth" in kk,
              get: kk => kk._colorGradingWithGreenDepth,
              set: (kk, Fk) => {
                kk._colorGradingWithGreenDepth = Fk
              }
            },
            metadata: ak
          }, tF, aF), (0, Rk.j)(null, null, yk, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: kk => "_colorGradingBGR" in kk,
              get: kk => kk._colorGradingBGR,
              set: (kk, Fk) => {
                kk._colorGradingBGR = Fk
              }
            },
            metadata: ak
          }, XF, bF), (0, Rk.j)(null, null, mk, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: kk => "_exposure" in kk,
              get: kk => kk._exposure,
              set: (kk, Fk) => {
                kk._exposure = Fk
              }
            },
            metadata: ak
          }, wF, dF), (0, Rk.j)(null, null, Lk, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: kk => "_toneMappingEnabled" in kk,
              get: kk => kk._toneMappingEnabled,
              set: (kk, Fk) => {
                kk._toneMappingEnabled = Fk
              }
            },
            metadata: ak
          }, sF, VF), (0, Rk.j)(null, null, Hk, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: kk => "_toneMappingType" in kk,
              get: kk => kk._toneMappingType,
              set: (kk, Fk) => {
                kk._toneMappingType = Fk
              }
            },
            metadata: ak
          }, JF, AF), (0, Rk.j)(null, null, uk, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: kk => "_contrast" in kk,
              get: kk => kk._contrast,
              set: (kk, Fk) => {
                kk._contrast = Fk
              }
            },
            metadata: ak
          }, eF, yF), (0, Rk.j)(null, null, Mk, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: kk => "_whiteBalanceEnabled" in kk,
              get: kk => kk._whiteBalanceEnabled,
              set: (kk, Fk) => {
                kk._whiteBalanceEnabled = Fk
              }
            },
            metadata: ak
          }, fF, mF), (0, Rk.j)(null, null, gk, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: kk => "_temperature" in kk,
              get: kk => kk._temperature,
              set: (kk, Fk) => {
                kk._temperature = Fk
              }
            },
            metadata: ak
          }, WF, vF), (0, Rk.j)(null, null, Uk, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: kk => "_tint" in kk,
              get: kk => kk._tint,
              set: (kk, Fk) => {
                kk._tint = Fk
              }
            },
            metadata: ak
          }, iF, YF), (0, Rk.j)(null, null, ck, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: kk => "vignetteStretch" in kk,
              get: kk => kk.vignetteStretch,
              set: (kk, Fk) => {
                kk.vignetteStretch = Fk
              }
            },
            metadata: ak
          }, oF, LF), (0, Rk.j)(null, null, Gk, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: kk => "vignetteCenterX" in kk,
              get: kk => kk.vignetteCenterX,
              set: (kk, Fk) => {
                kk.vignetteCenterX = Fk
              }
            },
            metadata: ak
          }, OF, EF), (0, Rk.j)(null, null, Tk, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: kk => "vignetteCenterY" in kk,
              get: kk => kk.vignetteCenterY,
              set: (kk, Fk) => {
                kk.vignetteCenterY = Fk
              }
            },
            metadata: ak
          }, SF, NF), (0, Rk.j)(null, null, rk, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: kk => "vignetteWeight" in kk,
              get: kk => kk.vignetteWeight,
              set: (kk, Fk) => {
                kk.vignetteWeight = Fk
              }
            },
            metadata: ak
          }, HF, uF), (0, Rk.j)(null, null, Dk, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "vignetteColor" in kk,
              get: kk => kk.vignetteColor,
              set: (kk, Fk) => {
                kk.vignetteColor = Fk
              }
            },
            metadata: ak
          }, MF, gF), (0, Rk.j)(null, null, zk, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: kk => "vignetteCameraFov" in kk,
              get: kk => kk.vignetteCameraFov,
              set: (kk, Fk) => {
                kk.vignetteCameraFov = Fk
              }
            },
            metadata: ak
          }, UF, cF), (0, Rk.j)(null, null, Pk, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: kk => "_vignetteBlendMode" in kk,
              get: kk => kk._vignetteBlendMode,
              set: (kk, Fk) => {
                kk._vignetteBlendMode = Fk
              }
            },
            metadata: ak
          }, GF, TF), (0, Rk.j)(null, null, hk, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: kk => "_vignetteEnabled" in kk,
              get: kk => kk._vignetteEnabled,
              set: (kk, Fk) => {
                kk._vignetteEnabled = Fk
              }
            },
            metadata: ak
          }, rF, DF), (0, Rk.j)(null, null, qk, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: kk => "_ditheringEnabled" in kk,
              get: kk => kk._ditheringEnabled,
              set: (kk, Fk) => {
                kk._ditheringEnabled = Fk
              }
            },
            metadata: ak
          }, zF, PF), (0, Rk.j)(null, null, Ck, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: kk => "_ditheringIntensity" in kk,
              get: kk => kk._ditheringIntensity,
              set: (kk, Fk) => {
                kk._ditheringIntensity = Fk
              }
            },
            metadata: ak
          }, hF, qF), (0, Rk.j)(null, null, Zk, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: kk => "_skipFinalColorClamp" in kk,
              get: kk => kk._skipFinalColorClamp,
              set: (kk, Fk) => {
                kk._skipFinalColorClamp = Fk
              }
            },
            metadata: ak
          }, CF, ZF), (0, Rk.j)(null, null, pk, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: kk => "_applyByPostProcess" in kk,
              get: kk => kk._applyByPostProcess,
              set: (kk, Fk) => {
                kk._applyByPostProcess = Fk
              }
            },
            metadata: ak
          }, pF, KF), (0, Rk.j)(null, null, Kk, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: kk => "_isEnabled" in kk,
              get: kk => kk._isEnabled,
              set: (kk, Fk) => {
                kk._isEnabled = Fk
              }
            },
            metadata: ak
          }, xF, jF), (0, Rk.j)(null, null, xk, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: kk => "outputTextureWidth" in kk,
              get: kk => kk.outputTextureWidth,
              set: (kk, Fk) => {
                kk.outputTextureWidth = Fk
              }
            },
            metadata: ak
          }, lF, nF), (0, Rk.j)(null, null, jk, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: kk => "outputTextureHeight" in kk,
              get: kk => kk.outputTextureHeight,
              set: (kk, Fk) => {
                kk.outputTextureHeight = Fk
              }
            },
            metadata: ak
          }, IF, QF), ak && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ak
          })
        })(), kk.TONEMAPPING_STANDARD = 0, kk.TONEMAPPING_ACES = 1, kk.TONEMAPPING_KHR_PBR_NEUTRAL = 2, kk.PrepareUniforms = Nk.d, kk.PrepareSamplers = Nk.b, kk._VIGNETTEMODE_MULTIPLY = 0, kk._VIGNETTEMODE_OPAQUE = 1, kk
      })(),
      Mk = !1;

    function gk(kk) {
      const Fk = Yk.c.Parse((() => new uk), kk, null, null);
      return void 0 !== kk.vignetteCentreX && (Fk.vignetteCenterX = kk.vignetteCentreX), void 0 !== kk.vignetteCentreY && (Fk.vignetteCenterY = kk.vignetteCentreY), Fk
    }

    function Uk() {
      Mk || (Mk = !0, uk.Parse = gk, Yk.c._ImageProcessingConfigurationParser = gk, (0, Hk.d)("BABYLON.ImageProcessingConfiguration", uk))
    }
  },
  39530: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak
    });
    var Rk = Bk(38320),
      tk = Bk(39492);
    class ak {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Rk = arguments.length > 3 ? arguments[3] : void 0,
          tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          ak = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = kk, this._noUBO = !kk.supportsUniformBuffers || tk, this._dynamic = Bk, this._name = Rk ?? "no-name", this._data = Fk || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === ak && this._engine._features.trackUbosInFrame || !0 === ak) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.M_ = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.M_ = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(kk) {
        let Fk;
        if (Fk = kk <= 2 ? kk : 4, this._uniformLocationPointer % Fk !== 0) {
          const kk = this._uniformLocationPointer;
          this._uniformLocationPointer += Fk - this._uniformLocationPointer % Fk;
          const Bk = this._uniformLocationPointer - kk;
          for (let Fk = 0; Fk < Bk; Fk++) this._data.push(0)
        }
      }
      addUniform(kk, Fk) {
        let Bk, Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (Rk > 0 && "number" === typeof Fk && (this._uniformArraySizes[kk] = {
            strideSize: Fk,
            arraySize: Rk
          }), void 0 === this._uniformLocations[kk] && (this._uniformNames.push(kk), !this._noUBO)) {
          if (Rk > 0) {
            if (Fk instanceof Array) throw "addUniform should not be use with Array in UBO: " + kk;
            if (this._fillAlignment(4), 16 == Fk) Fk *= Rk;
            else {
              Fk = Fk * Rk + (4 - Fk) * Rk
            }
            Bk = [];
            for (let kk = 0; kk < Fk; kk++) Bk.push(0)
          } else {
            if (Fk instanceof Array) Bk = Fk, Fk = Bk.length;
            else {
              Bk = [];
              for (let kk = 0; kk < Fk; kk++) Bk.push(0)
            }
            this._fillAlignment(Fk)
          }
          this._uniformSizes[kk] = Fk, this._uniformLocations[kk] = this._uniformLocationPointer, this._uniformLocationPointer += Fk;
          for (let kk = 0; kk < Fk; kk++) this._data.push(Bk[kk]);
          this._needSync = !0
        }
      }
      addMatrix(kk, Fk) {
        this.addUniform(kk, Array.prototype.slice.call(Fk.PBk()))
      }
      addFloat2(kk, Fk, Bk) {
        const Rk = [Fk, Bk];
        this.addUniform(kk, Rk)
      }
      addFloat3(kk, Fk, Bk, Rk) {
        const tk = [Fk, Bk, Rk];
        this.addUniform(kk, tk)
      }
      addColor3(kk, Fk) {
        const Bk = [Fk.r, Fk.g, Fk.b];
        this.addUniform(kk, Bk)
      }
      addColor4(kk, Fk, Bk) {
        const Rk = [Fk.r, Fk.g, Fk.b, Bk];
        this.addUniform(kk, Rk)
      }
      addVector3(kk, Fk) {
        const Bk = [Fk.x, Fk.y, Fk.z];
        this.addUniform(kk, Bk)
      }
      addMatrix3x3(kk) {
        this.addUniform(kk, 12)
      }
      addMatrix2x2(kk) {
        this.addUniform(kk, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const kk = [];
        let Fk = 0;
        for (const Bk in this._uniformLocations)
          if (kk.push(Bk), 10 === ++Fk) break;
        return kk.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const kk of this._ownerListsBySlot.values()) this._removeOwnerBacklink(kk);
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
      set name(kk) {
        this._name = kk
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(kk, Fk) {
        for (let Bk = 0; Bk < kk.length; ++Bk)
          if (kk[Bk] !== Fk[Bk]) return !1;
        return !0
      }
      _copyBuffer(kk, Fk) {
        for (let Bk = 0; Bk < kk.length; ++Bk) Fk[Bk] = kk[Bk]
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
      _updateOwnerKeyed(kk) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let Fk = this._slotByOwner.get(kk);
        if (void 0 === Fk && (Fk = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(kk, Fk), this._ownerCount++, kk._uniformBuffersWithOwnedSlot || (kk._uniformBuffersWithOwnedSlot = []), kk._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(Fk, kk._uniformBuffersWithOwnedSlot)), this._slotGeneration[Fk] === this._dataGeneration) return this._bufferIndex = Fk, this._buffer = this._buffers[Fk][0], this.bindUniformBuffer(), this._slotFrameId[Fk] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const Bk = this._buffers[Fk][1];
        this._slotFrameId[Fk] === this._currentFrameId && Bk && !this._buffersEqual(this._bufferData, Bk) && (Fk = this._takeFreeSlot(!1)), this._bufferIndex = Fk, this._buffer = this._buffers[Fk][0], this.bindUniformBuffer();
        const Rk = this._buffers[Fk][1];
        Rk && this._buffersEqual(this._bufferData, Rk) || (Rk && this._copyBuffer(this._bufferData, Rk), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[Fk] = this._currentFrameId, this._slotGeneration[Fk] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(kk) {
        for (let Bk = 0; Bk < this._freeSlots.length; ++Bk) {
          const Fk = this._freeSlots[Bk];
          if (this._slotFrameId[Fk] !== this._currentFrameId) return kk && (this._freeSlots[Bk] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), Fk
        }
        this._rebuild();
        const Fk = this._buffers.length - 1;
        return kk || this._freeSlots.push(Fk), Fk
      }
      _releaseOwnerSlot(kk) {
        const Fk = this._slotByOwner?.get(kk);
        if (void 0 === Fk) return;
        this._slotByOwner.delete(kk);
        const Bk = this._ownerListsBySlot.get(Fk);
        Bk && (this._removeOwnerBacklink(Bk), this._ownerListsBySlot.delete(Fk)), this._ownerCount--, this._freeSlots.push(Fk)
      }
      _removeOwnerBacklink(kk) {
        const Fk = kk.indexOf(this); - 1 !== Fk && (kk[Fk] = kk[kk.length - 1], kk.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(kk, Fk, Bk) {
        this._checkNewFrame();
        let tk = this._uniformLocations[kk];
        if (void 0 === tk) {
          if (this._buffer) return void Rk.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + kk);
          this.addUniform(kk, Bk), tk = this._uniformLocations[kk]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let kk = 0; kk < Bk; kk++) this._bufferData[tk + kk] = Fk[kk];
          this._dataGeneration++
        } else {
          let kk = !1;
          for (let Rk = 0; Rk < Bk; Rk++)(16 === Bk && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[tk + Rk] !== Math.fround(Fk[Rk])) && (kk = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[tk + Rk] = Fk[Rk]);
          this._needSync = this._needSync || kk, kk && this._dataGeneration++
        }
      }
      updateUniformArray(kk, Fk, Bk) {
        this._checkNewFrame();
        const ak = this._uniformLocations[kk];
        if (void 0 === ak) return void Rk.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const Xk = this._uniformArraySizes[kk];
        if (this._dynamic) {
          for (let kk = 0; kk < Bk; kk++) this._bufferData[ak + kk] = Fk[kk];
          this._dataGeneration++
        } else {
          let kk = !1,
            Rk = 0,
            bk = 0;
          for (let wk = 0; wk < Bk; wk++)
            if (this._bufferData[ak + 4 * bk + Rk] !== tk.h.FloatRound(Fk[wk]) && (kk = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[ak + 4 * bk + Rk] = Fk[wk]), Rk++, Rk === Xk.strideSize) {
              for (; Rk < 4; Rk++) this._bufferData[ak + 4 * bk + Rk] = 0;
              Rk = 0, bk++
            } this._needSync = this._needSync || kk, kk && this._dataGeneration++
        }
      }
      _cacheMatrix(kk, Fk) {
        this._checkNewFrame();
        const Bk = this._valueCache[kk],
          Rk = Fk.updateFlag;
        return (void 0 === Bk || Bk !== Rk) && (this._valueCache[kk] = Rk, !0)
      }
      _updateMatrix3x3ForUniform(kk, Fk) {
        for (let Bk = 0; Bk < 3; Bk++) ak._TempBuffer[4 * Bk] = Fk[3 * Bk], ak._TempBuffer[4 * Bk + 1] = Fk[3 * Bk + 1], ak._TempBuffer[4 * Bk + 2] = Fk[3 * Bk + 2], ak._TempBuffer[4 * Bk + 3] = 0;
        this.updateUniform(kk, ak._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(kk, Fk) {
        this._currentEffect.setMatrix3x3(kk, Fk)
      }
      _updateMatrix2x2ForEffect(kk, Fk) {
        this._currentEffect.setMatrix2x2(kk, Fk)
      }
      _updateMatrix2x2ForUniform(kk, Fk) {
        for (let Bk = 0; Bk < 2; Bk++) ak._TempBuffer[4 * Bk] = Fk[2 * Bk], ak._TempBuffer[4 * Bk + 1] = Fk[2 * Bk + 1], ak._TempBuffer[4 * Bk + 2] = 0, ak._TempBuffer[4 * Bk + 3] = 0;
        this.updateUniform(kk, ak._TempBuffer, 8)
      }
      _updateFloatForEffect(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(kk + Bk, Fk)
      }
      _updateFloatForUniform(kk, Fk) {
        ak._TempBuffer[0] = Fk, this.updateUniform(kk, ak._TempBuffer, 1)
      }
      _updateFloat2ForEffect(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(kk + Rk, Fk, Bk)
      }
      _updateFloat2ForUniform(kk, Fk, Bk) {
        ak._TempBuffer[0] = Fk, ak._TempBuffer[1] = Bk, this.updateUniform(kk, ak._TempBuffer, 2)
      }
      _updateFloat3ForEffect(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(kk + tk, Fk, Bk, Rk)
      }
      _updateFloat3ForUniform(kk, Fk, Bk, Rk) {
        ak._TempBuffer[0] = Fk, ak._TempBuffer[1] = Bk, ak._TempBuffer[2] = Rk, this.updateUniform(kk, ak._TempBuffer, 3)
      }
      _updateFloat4ForEffect(kk, Fk, Bk, Rk, tk) {
        let ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(kk + ak, Fk, Bk, Rk, tk)
      }
      _updateFloat4ForUniform(kk, Fk, Bk, Rk, tk) {
        ak._TempBuffer[0] = Fk, ak._TempBuffer[1] = Bk, ak._TempBuffer[2] = Rk, ak._TempBuffer[3] = tk, this.updateUniform(kk, ak._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[kk]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(kk + Bk, Fk);
            break;
          case 3:
            this._currentEffect.setFloatArray3(kk + Bk, Fk);
            break;
          case 4:
            this._currentEffect.setFloatArray4(kk + Bk, Fk);
            break;
          default:
            this._currentEffect.setFloatArray(kk + Bk, Fk)
        }
      }
      _updateFloatArrayForUniform(kk, Fk) {
        this.updateUniformArray(kk, Fk, Fk.length)
      }
      _updateArrayForEffect(kk, Fk) {
        this._currentEffect.setArray(kk, Fk)
      }
      _updateArrayForUniform(kk, Fk) {
        this.updateUniformArray(kk, Fk, Fk.length)
      }
      _updateIntArrayForEffect(kk, Fk) {
        this._currentEffect.setIntArray(kk, Fk)
      }
      _updateIntArrayForUniform(kk, Fk) {
        ak._TempBufferInt32View.set(Fk), this.updateUniformArray(kk, ak._TempBuffer, Fk.length)
      }
      _updateUIntArrayForEffect(kk, Fk) {
        this._currentEffect.setUIntArray(kk, Fk)
      }
      _updateUIntArrayForUniform(kk, Fk) {
        ak._TempBufferUInt32View.set(Fk), this.updateUniformArray(kk, ak._TempBuffer, Fk.length)
      }
      _updateMatrixForEffect(kk, Fk) {
        this._currentEffect.setMatrix(kk, Fk)
      }
      _updateMatrixForUniform(kk, Fk) {
        this._cacheMatrix(kk, Fk) && this.updateUniform(kk, Fk.PBk(), 16)
      }
      _updateMatricesForEffect(kk, Fk) {
        this._currentEffect.setMatrices(kk, Fk)
      }
      _updateMatricesForUniform(kk, Fk) {
        this.updateUniform(kk, Fk, Fk.length)
      }
      _updateVector3ForEffect(kk, Fk) {
        this._currentEffect.setVector3(kk, Fk)
      }
      _updateVector3ForUniform(kk, Fk) {
        ak._TempBuffer[0] = Fk.x, ak._TempBuffer[1] = Fk.y, ak._TempBuffer[2] = Fk.z, this.updateUniform(kk, ak._TempBuffer, 3)
      }
      _updateVector4ForEffect(kk, Fk) {
        this._currentEffect.setVector4(kk, Fk)
      }
      _updateVector4ForUniform(kk, Fk) {
        ak._TempBuffer[0] = Fk.x, ak._TempBuffer[1] = Fk.y, ak._TempBuffer[2] = Fk.z, ak._TempBuffer[3] = Fk.w, this.updateUniform(kk, ak._TempBuffer, 4)
      }
      _updateColor3ForEffect(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(kk + Bk, Fk)
      }
      _updateColor3ForUniform(kk, Fk) {
        ak._TempBuffer[0] = Fk.r, ak._TempBuffer[1] = Fk.g, ak._TempBuffer[2] = Fk.b, this.updateUniform(kk, ak._TempBuffer, 3)
      }
      _updateColor4ForEffect(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(kk + Rk, Fk, Bk)
      }
      _updateDirectColor4ForEffect(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(kk + Bk, Fk)
      }
      _updateColor4ForUniform(kk, Fk, Bk) {
        ak._TempBuffer[0] = Fk.r, ak._TempBuffer[1] = Fk.g, ak._TempBuffer[2] = Fk.b, ak._TempBuffer[3] = Bk, this.updateUniform(kk, ak._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(kk, Fk) {
        ak._TempBuffer[0] = Fk.r, ak._TempBuffer[1] = Fk.g, ak._TempBuffer[2] = Fk.b, ak._TempBuffer[3] = Fk.a, this.updateUniform(kk, ak._TempBuffer, 4)
      }
      _updateIntForEffect(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(kk + Bk, Fk)
      }
      _updateIntForUniform(kk, Fk) {
        ak._TempBufferInt32View[0] = Fk, this.updateUniform(kk, ak._TempBuffer, 1)
      }
      _updateInt2ForEffect(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(kk + Rk, Fk, Bk)
      }
      _updateInt2ForUniform(kk, Fk, Bk) {
        ak._TempBufferInt32View[0] = Fk, ak._TempBufferInt32View[1] = Bk, this.updateUniform(kk, ak._TempBuffer, 2)
      }
      _updateInt3ForEffect(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(kk + tk, Fk, Bk, Rk)
      }
      _updateInt3ForUniform(kk, Fk, Bk, Rk) {
        ak._TempBufferInt32View[0] = Fk, ak._TempBufferInt32View[1] = Bk, ak._TempBufferInt32View[2] = Rk, this.updateUniform(kk, ak._TempBuffer, 3)
      }
      _updateInt4ForEffect(kk, Fk, Bk, Rk, tk) {
        let ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(kk + ak, Fk, Bk, Rk, tk)
      }
      _updateInt4ForUniform(kk, Fk, Bk, Rk, tk) {
        ak._TempBufferInt32View[0] = Fk, ak._TempBufferInt32View[1] = Bk, ak._TempBufferInt32View[2] = Rk, ak._TempBufferInt32View[3] = tk, this.updateUniform(kk, ak._TempBuffer, 4)
      }
      _updateUIntForEffect(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(kk + Bk, Fk)
      }
      _updateUIntForUniform(kk, Fk) {
        ak._TempBufferUInt32View[0] = Fk, this.updateUniform(kk, ak._TempBuffer, 1)
      }
      _updateUInt2ForEffect(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(kk + Rk, Fk, Bk)
      }
      _updateUInt2ForUniform(kk, Fk, Bk) {
        ak._TempBufferUInt32View[0] = Fk, ak._TempBufferUInt32View[1] = Bk, this.updateUniform(kk, ak._TempBuffer, 2)
      }
      _updateUInt3ForEffect(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(kk + tk, Fk, Bk, Rk)
      }
      _updateUInt3ForUniform(kk, Fk, Bk, Rk) {
        ak._TempBufferUInt32View[0] = Fk, ak._TempBufferUInt32View[1] = Bk, ak._TempBufferUInt32View[2] = Rk, this.updateUniform(kk, ak._TempBuffer, 3)
      }
      _updateUInt4ForEffect(kk, Fk, Bk, Rk, tk) {
        let ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(kk + ak, Fk, Bk, Rk, tk)
      }
      _updateUInt4ForUniform(kk, Fk, Bk, Rk, tk) {
        ak._TempBufferUInt32View[0] = Fk, ak._TempBufferUInt32View[1] = Bk, ak._TempBufferUInt32View[2] = Rk, ak._TempBufferUInt32View[3] = tk, this.updateUniform(kk, ak._TempBuffer, 4)
      }
      setTexture(kk, Fk) {
        this._currentEffect.setTexture(kk, Fk)
      }
      setTextureArray(kk, Fk) {
        this._currentEffect.setTextureArray(kk, Fk)
      }
      bindTexture(kk, Fk) {
        this._currentEffect._bindTexture(kk, Fk)
      }
      updateUniformDirectly(kk, Fk) {
        this.updateUniform(kk, Fk, Fk.length), this.update()
      }
      bindToEffect(kk, Fk) {
        this._currentEffect = kk, this._currentEffectName = Fk
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(kk) {
        if (!this._buffers) return this._buffer === kk;
        for (let Fk = 0; Fk < this._buffers.length; ++Fk) {
          if (this._buffers[Fk][0] === kk) return this._bufferIndex = Fk, this._buffer = kk, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[Fk][1] && (this._bufferData.set(this._buffers[Fk][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(kk) {
        return void 0 !== this._uniformLocations[kk]
      }
      dispose() {
        if (this._noUBO) return;
        const kk = this._engine._uniformBuffers,
          Fk = kk.indexOf(this);
        if (-1 !== Fk && (kk[Fk] = kk[kk.length - 1], kk.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let kk = 0; kk < this._buffers.length; ++kk) {
            const Fk = this._buffers[kk][0];
            this._engine._releaseBuffer(Fk)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    ak._MAX_UNIFORM_SIZE = 256, ak._TempBuffer = new Float32Array(ak._MAX_UNIFORM_SIZE), ak._TempBufferInt32View = new Int32Array(ak._TempBuffer.buffer), ak._TempBufferUInt32View = new Uint32Array(ak._TempBuffer.buffer)
  },
  39317: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk
    });
    var Rk = Bk(39323);
    class tk extends Rk.d {
      constructor(kk) {
        super(), this._buffer = kk
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  39406: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => wk,
      g: () => dk
    });
    const Rk = "__bjs_serializable__",
      tk = new WeakMap;

    function ak(kk, Fk) {
      return Object.prototype.hasOwnProperty.call(kk, Fk)
    }
    const Xk = function() {
      let kk = Symbol.metadata;
      return kk || (kk = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: kk
      })), kk
    }();

    function bk(kk) {
      return "function" === typeof kk ? kk : kk?.constructor
    }

    function wk(kk) {
      if (!kk) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(Xk)}) polyfill must run before decorated classes are evaluated.`);
      return ak(kk, Rk) || (kk[Rk] = {}), kk[Rk]
    }

    function dk(kk) {
      const Fk = bk(kk),
        Bk = Fk ? Fk[Xk] : void 0;
      if (!Bk) return {};
      const wk = tk.get(Bk);
      if (wk) return wk;
      const dk = {},
        sk = [];
      let Vk = Bk;
      for (; Vk;) sk.push(Vk), Vk = Object.getPrototypeOf(Vk);
      for (const tk of sk)
        if (ak(tk, Rk)) {
          const kk = tk[Rk];
          for (const Fk in kk) dk[Fk] = kk[Fk]
        } return tk.set(Bk, dk), dk
    }
  },
  39404: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      A: () => yk,
      D: () => bk,
      H: () => sk,
      K: () => Vk,
      M: () => Xk,
      c: () => vk,
      d: () => ak,
      g: () => Wk,
      j: () => Ak,
      l: () => wk,
      o: () => ek,
      s: () => dk,
      u: () => fk,
      w: () => Jk
    });
    var Rk = Bk(39406);

    function tk(kk, Fk) {
      return (Bk, tk) => {
        if (!tk.metadata) return;
        const ak = String(tk.name),
          Xk = (0, Rk.c)(tk.metadata);
        Xk[ak] || (Xk[ak] = {
          type: kk,
          sourceName: Fk
        })
      }
    }

    function ak(kk) {
      return function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (Bk, Rk) => {
          const tk = Fk || "_" + String(Rk.name);
          return {
            init(kk) {
              return void 0 === kk && tk in this || (this[tk] = kk), kk
            },
            get() {
              return this[tk]
            },
            set(Fk) {
              "function" === typeof this[tk]?.equals && this[tk].equals(Fk) || this[tk] !== Fk && (this[tk] = Fk, this[kk]())
            }
          }
        }
      }(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function Xk(kk) {
      return tk(0, kk)
    }

    function bk(kk) {
      return tk(1, kk)
    }

    function wk(kk) {
      return tk(2, kk)
    }

    function dk(kk) {
      return tk(3, kk)
    }

    function sk(kk) {
      return tk(4, kk)
    }

    function Vk(kk) {
      return tk(5, kk)
    }

    function Jk(kk) {
      return tk(6, kk)
    }

    function Ak(kk) {
      return tk(7, kk)
    }

    function ek(kk) {
      return tk(8, kk)
    }

    function yk(kk) {
      return tk(10, kk)
    }

    function fk(kk) {
      return tk(12, kk)
    }

    function mk(kk, Fk, Bk) {
      const Rk = String(Fk.name);
      let tk = null;
      const ak = function() {
        if (null === tk) {
          tk = kk, "undefined" !== typeof _native && _native[Rk] && (tk = Bk(_native[Rk], kk));
          const Xk = this && (Fk.static ? this : Object.getPrototypeOf(this));
          Xk?.[Rk] === ak && (Xk[Rk] = tk)
        }
        for (var Xk = arguments.length, bk = new Array(Xk), wk = 0; wk < Xk; wk++) bk[wk] = arguments[wk];
        return tk.apply(this, bk)
      };
      return ak
    }

    function Wk(kk, Fk) {
      return mk(kk, Fk, (kk => kk))
    }

    function vk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (Bk, Rk) => {
        const tk = Fk || "_" + String(Rk.name);
        return {
          get() {
            return this[tk]?.value
          },
          set(Fk) {
            "function" === typeof this[tk]?.value?.equals && this[tk].value.equals(Fk) || this[tk].value !== Fk && (this[tk].value = Fk, this[kk]())
          }
        }
      }
    }
    Wk.filter = function(kk) {
      return (Fk, Bk) => mk(Fk, Bk, ((Fk, Bk) => function() {
        for (var Rk = arguments.length, tk = new Array(Rk), ak = 0; ak < Rk; ak++) tk[ak] = arguments[ak];
        return kk(...tk) ? Fk(...tk) : Bk.apply(this, tk)
      }))
    }
  },
  39414: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => dk
    });
    var Rk = Bk(39296),
      tk = Bk(39420),
      ak = Bk(36917),
      Xk = Bk(36758),
      bk = Bk(39406);
    const wk = function(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const ak = kk();
      tk.b && tk.b.HasTags(Fk) && tk.b.AddTagsTo(ak, tk.b.GetTags(Fk, !0));
      const Xk = (0, bk.g)(ak),
        wk = {};
      for (const tk in Xk) {
        const kk = Xk[tk],
          bk = Fk[tk],
          sk = kk.type;
        if (void 0 !== bk && null !== bk && ("uniqueId" !== tk || dk.AllowLoadingUniqueId)) switch (sk) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof bk.slice ? ak[tk] = bk.slice() : ak[tk] = bk;
            break;
          case 1:
            Rk.cloneTexturesOnlyOnce && wk[bk.uniqueId] ? ak[tk] = wk[bk.uniqueId] : (ak[tk] = Bk || bk.isRenderTarget ? bk : bk.clone(), wk[bk.uniqueId] = ak[tk]);
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
            ak[tk] = Bk ? bk : bk.clone()
        }
      }
      return ak
    };
    class dk {
      static AppendSerializedAnimations(kk, Fk) {
        if (kk.animations) {
          Fk.animations = [];
          for (let Bk = 0; Bk < kk.animations.length; Bk++) {
            const Rk = kk.animations[Bk];
            Fk.animations.push(Rk.serialize())
          }
        }
      }
      static Serialize(kk, Fk) {
        Fk || (Fk = {}), tk.b && (Fk.tags = tk.b.GetTags(kk));
        const Bk = (0, bk.g)(kk);
        for (const Rk in Bk) {
          const tk = Bk[Rk],
            ak = tk.sourceName || Rk,
            Xk = tk.type,
            bk = kk[Rk];
          if (void 0 !== bk && null !== bk && ("uniqueId" !== Rk || dk.AllowLoadingUniqueId)) switch (Xk) {
            case 0:
              Array.isArray(bk) ? Fk[ak] = bk.slice() : Fk[ak] = bk;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              Fk[ak] = bk.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              Fk[ak] = bk.PBk();
              break;
            case 6:
            case 11:
              Fk[ak] = bk.id
          }
        }
        return Fk
      }
      static ParseProperties(kk, Fk, Bk, Rk) {
        Rk || (Rk = "");
        const tk = (0, bk.g)(Fk);
        for (const bk in tk) {
          const wk = tk[bk],
            sk = kk[wk.sourceName || bk],
            Vk = wk.type;
          if (void 0 !== sk && null !== sk && ("uniqueId" !== bk || dk.AllowLoadingUniqueId)) {
            const kk = Fk;
            switch (Vk) {
              case 0:
                kk[bk] = sk;
                break;
              case 1:
                Bk && (kk[bk] = dk._TextureParser(sk, Bk, Rk));
                break;
              case 2:
                kk[bk] = ak.e.FromArray(sk);
                break;
              case 3:
                kk[bk] = dk._FresnelParametersParser(sk);
                break;
              case 4:
                kk[bk] = Xk.p.FromArray(sk);
                break;
              case 5:
                kk[bk] = Xk.s.FromArray(sk);
                break;
              case 6:
                Bk && (kk[bk] = Bk.getLastMeshById(sk));
                break;
              case 7:
                kk[bk] = dk._ColorCurvesParser(sk);
                break;
              case 8:
                kk[bk] = ak.i.FromArray(sk);
                break;
              case 9:
                kk[bk] = dk._ImageProcessingConfigurationParser(sk);
                break;
              case 10:
                kk[bk] = Xk.e.FromArray(sk);
                break;
              case 11:
                Bk && (kk[bk] = Bk.getCameraById(sk));
                break;
              case 12:
                kk[bk] = Xk.c.FromArray(sk);
                break;
              case 13:
                kk[bk] = Xk.v.FromArray(sk)
            }
          }
        }
      }
      static Parse(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const ak = kk();
        return tk.b && tk.b.AddTagsTo(ak, Fk.tags), dk.ParseProperties(Fk, ak, Bk, Rk), ak
      }
      static Clone(kk, Fk) {
        return wk(kk, Fk, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(kk, Fk) {
        return wk(kk, Fk, !0)
      }
    }
    dk.AllowLoadingUniqueId = !1, dk._ImageProcessingConfigurationParser = kk => {
      throw (0, Rk.i)("ImageProcessingConfiguration")
    }, dk._FresnelParametersParser = kk => {
      throw (0, Rk.i)("FresnelParameters")
    }, dk._ColorCurvesParser = kk => {
      throw (0, Rk.i)("ColorCurves")
    }, dk._TextureParser = (kk, Fk, Bk) => {
      throw (0, Rk.i)("Texture")
    }
  },
  39347: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => tk
    });
    var Rk = Bk(39307);
    class tk {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = tk.Enabled, this._lastSecValueCount++
      }
      addCount(kk, Fk) {
        tk.Enabled && (this._current += kk, this._hasCurrentValue = !0, Fk && this._fetchResult())
      }
      beginMonitoring() {
        tk.Enabled && (this._startMonitoringTime = Rk.e.Now)
      }
      endMonitoring() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!tk.Enabled) return;
        kk && this.fetchNewFrame();
        const Fk = Rk.e.Now;
        this._current = Fk - this._startMonitoringTime, this._hasCurrentValue = !0, kk && this._fetchResult()
      }
      FY() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const kk = Rk.e.Now;
        kk - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = kk, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    tk.Enabled = !0
  },
  39506: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => tk,
      c: () => Rk
    });
    class Rk {
      constructor(kk) {
        this.length = 0, this.data = new Array(kk), this._id = Rk._GlobalId++
      }
      push(kk) {
        this.data[this.length++] = kk, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(kk) {
        for (let Fk = 0; Fk < this.length; Fk++) kk(this.data[Fk])
      }
      sort(kk) {
        this.data.sort(kk)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(kk) {
        if (0 !== kk.length) {
          this.length + kk.length > this.data.length && (this.data.length = 2 * (this.length + kk.length));
          for (let Fk = 0; Fk < kk.length; Fk++) this.data[this.length++] = (kk.data || kk)[Fk]
        }
      }
      indexOf(kk) {
        const Fk = this.data.indexOf(kk);
        return Fk >= this.length ? -1 : Fk
      }
      contains(kk) {
        return -1 !== this.indexOf(kk)
      }
    }
    Rk._GlobalId = 0;
    class tk extends Rk {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(kk) {
        super.push(kk), kk.__smartArrayFlags || (kk.__smartArrayFlags = {}), kk.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(kk) {
        return (!kk.__smartArrayFlags || kk.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(kk), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(kk) {
        if (0 !== kk.length) {
          this.length + kk.length > this.data.length && (this.data.length = 2 * (this.length + kk.length));
          for (let Fk = 0; Fk < kk.length; Fk++) {
            const Bk = (kk.data || kk)[Fk];
            this.pushNoDuplicate(Bk)
          }
        }
      }
    }
  },
  39420: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => tk
    });
    class Rk {
      static Eval(kk, Fk) {
        return "true" === (kk = kk.match(/\([^()]*\)/g) ? kk.replace(/\([^()]*\)/g, (kk => (kk = kk.slice(1, kk.length - 1), Rk._HandleParenthesisContent(kk, Fk)))) : Rk._HandleParenthesisContent(kk, Fk)) || "false" !== kk && Rk.Eval(kk, Fk)
      }
      static _HandleParenthesisContent(kk, Fk) {
        let Bk;
        Fk = Fk || (kk => "true" === kk);
        const tk = kk.split("||");
        for (const ak in tk)
          if (Object.prototype.hasOwnProperty.call(tk, ak)) {
            let kk = Rk._SimplifyNegation(tk[ak].trim());
            const Xk = kk.split("&&");
            if (Xk.length > 1)
              for (let tk = 0; tk < Xk.length; ++tk) {
                const ak = Rk._SimplifyNegation(Xk[tk].trim());
                if (Bk = "true" !== ak && "false" !== ak ? "!" === ak[0] ? !Fk(ak.substring(1)) : Fk(ak) : "true" === ak, !Bk) {
                  kk = "false";
                  break
                }
              }
            if (Bk || "true" === kk) {
              Bk = !0;
              break
            }
            Bk = "true" !== kk && "false" !== kk ? "!" === kk[0] ? !Fk(kk.substring(1)) : Fk(kk) : "true" === kk
          } return Bk ? "true" : "false"
      }
      static _SimplifyNegation(kk) {
        return "!true" === (kk = (kk = kk.replace(/^[\s!]+/, (kk => (kk = kk.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? kk = "false" : "!false" === kk && (kk = "true"), kk
      }
    }
    class tk {
      static EnableFor(kk) {
        kk._tags = kk._tags || {}, kk.hasTags = () => tk.HasTags(kk), kk.addTags = Fk => tk.AddTagsTo(kk, Fk), kk.removeTags = Fk => tk.RemoveTagsFrom(kk, Fk), kk.matchesTagsQuery = Fk => tk.MatchesQuery(kk, Fk)
      }
      static DisableFor(kk) {
        delete kk._tags, delete kk.hasTags, delete kk.addTags, delete kk.removeTags, delete kk.matchesTagsQuery
      }
      static HasTags(kk) {
        if (!kk._tags) return !1;
        const Fk = kk._tags;
        for (const Bk in Fk)
          if (Object.prototype.hasOwnProperty.call(Fk, Bk)) return !0;
        return !1
      }
      static GetTags(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!kk._tags) return null;
        if (Fk) {
          const Fk = [];
          for (const Bk in kk._tags) Object.prototype.hasOwnProperty.call(kk._tags, Bk) && !0 === kk._tags[Bk] && Fk.push(Bk);
          return Fk.join(" ")
        }
        return kk._tags
      }
      static AddTagsTo(kk, Fk) {
        if (!Fk) return;
        if ("string" !== typeof Fk) return;
        const Bk = Fk.split(" ");
        for (const Rk of Bk) tk._AddTagTo(kk, Rk)
      }
      static _AddTagTo(kk, Fk) {
        "" !== (Fk = Fk.trim()) && "true" !== Fk && "false" !== Fk && (Fk.match(/[\s]/) || Fk.match(/^([!]|([|]|[&]){2})/) || (tk.EnableFor(kk), kk._tags[Fk] = !0))
      }
      static RemoveTagsFrom(kk, Fk) {
        if (!tk.HasTags(kk)) return;
        const Bk = Fk.split(" ");
        for (const Rk in Bk) tk._RemoveTagFrom(kk, Bk[Rk])
      }
      static _RemoveTagFrom(kk, Fk) {
        delete kk._tags[Fk]
      }
      static MatchesQuery(kk, Fk) {
        return void 0 === Fk || ("" === Fk ? tk.HasTags(kk) : Rk.Eval(Fk, (Fk => tk.HasTags(kk) && kk._tags[Fk])))
      }
    }
  },
  39545: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ak
    });
    var Rk = Bk(39541),
      tk = Bk(36781);
    class ak {
      constructor(kk) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new tk.e, this._scene = kk
      }
      _prepareBuffers() {
        if (this._vertexBuffers[Rk.n.PositionKind]) return;
        const kk = [];
        kk.push(1, 1), kk.push(-1, 1), kk.push(-1, -1), kk.push(1, -1), this._vertexBuffers[Rk.n.PositionKind] = new Rk.n(this._scene.ne(), kk, Rk.n.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const kk = [];
        kk.push(0), kk.push(1), kk.push(2), kk.push(0), kk.push(2), kk.push(3), this._indexBuffer = this._scene.ne().createIndexBuffer(kk)
      }
      _getActivePostProcesses(kk) {
        const Fk = this._activePostProcesses;
        Fk.length = 0;
        for (let Bk = 0; Bk < kk.length; Bk++) {
          const Rk = kk[Bk];
          Rk && Fk.push(Rk)
        }
        return Fk
      }
      _rebuild() {
        const kk = this._vertexBuffers[Rk.n.PositionKind];
        kk && (kk._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Bk = this._scene.activeCamera;
        return !!Bk && (Fk = Fk || this._getActivePostProcesses(Bk._postProcesses), !(!Fk || 0 === Fk.length || !this._scene.postProcessesEnabled) && (Fk[0].activate(Bk, kk, null !== Fk && void 0 !== Fk), !0))
      }
      directRender(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          ak = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Xk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : kk.length;
        const bk = this._scene.ne();
        for (let wk = 0; wk < Xk; wk++) {
          wk < kk.length - 1 ? kk[wk + 1].activate(this._scene.activeCamera || this._scene, Fk?.texture) : (Fk ? bk.bindFramebuffer(Fk, Rk, void 0, void 0, Bk, tk) : ak || bk.restoreDefaultFramebuffer(), bk._debugInsertMarker?.(`post process ${kk[wk].name} output`));
          const Xk = kk[wk],
            dk = Xk.apply();
          dk && (Xk.onBeforeRenderObservable.notifyObservers(dk), this._prepareBuffers(), bk.bindBuffers(this._vertexBuffers, this._indexBuffer, dk), bk.drawElementsType(0, 0, 6), Xk.onAfterRenderObservable.notifyObservers(dk))
        }
        bk.setDepthBuffer(!0), bk.setDepthWrite(!0)
      }
      _finalizeFrame(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const ak = this._scene.activeCamera;
        if (!ak) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (Rk = Rk || this._getActivePostProcesses(ak._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const Xk = this._scene.ne();
        for (let bk = 0, wk = Rk.length; bk < wk; bk++) {
          const dk = Rk[bk];
          if (bk < wk - 1 ? dk._outputTexture = Rk[bk + 1].activate(ak, Fk?.texture) : (Fk ? (Xk.bindFramebuffer(Fk, Bk, void 0, void 0, tk), dk._outputTexture = Fk) : (Xk.restoreDefaultFramebuffer(), dk._outputTexture = null), Xk._debugInsertMarker?.(`post process ${Rk[bk].name} output`)), kk) break;
          const sk = dk.apply();
          sk && (dk.onBeforeRenderObservable.notifyObservers(sk), this._prepareBuffers(), Xk.bindBuffers(this._vertexBuffers, this._indexBuffer, sk), Xk.drawElementsType(0, 0, 6), dk.onAfterRenderObservable.notifyObservers(sk))
        }
        Xk.setDepthBuffer(!0), Xk.setDepthWrite(!0), Xk.setAlphaMode(0)
      }
      dispose() {
        const kk = this._vertexBuffers[Rk.n.PositionKind];
        kk && (kk.dispose(), this._vertexBuffers[Rk.n.PositionKind] = null), this._indexBuffer && (this._scene.ne()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  39567: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ak
    });
    var Rk = Bk(39506),
      tk = Bk(36758);
    class ak {
      set opaqueSortCompareFn(kk) {
        this._opaqueSortCompareFn = kk || ak.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(kk) {
        this._alphaTestSortCompareFn = kk || ak.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(kk) {
        this._transparentSortCompareFn = kk || ak.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = kk, this._opaqueSubMeshes = new Rk.c(256), this._transparentSubMeshes = new Rk.c(256), this._alphaTestSubMeshes = new Rk.c(256), this._depthOnlySubMeshes = new Rk.c(256), this._particleSystems = new Rk.c(256), this._spriteManagers = new Rk.c(256), this._empty = !0, this._edgesRenderers = new Rk.b(16), this.disableDepthPrePass = !1, this._scene = Fk, this.opaqueSortCompareFn = Bk, this.alphaTestSortCompareFn = tk, this.transparentSortCompareFn = ak
      }
      render(kk, Fk, Bk, Rk) {
        let tk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          ak = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Xk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          bk = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          wk = arguments.length > 8 ? arguments[8] : void 0;
        if (kk) return void kk(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const dk = this._scene.ne();
        tk && 0 !== this._depthOnlySubMeshes.length && (dk.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), dk.setColorWrite(!0)), ak && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), Xk && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const sk = dk.getStencilBuffer();
        if (dk.setStencilBuffer(!1), Fk && this._renderSprites(), Bk && this._renderParticles(Rk), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), bk && (wk || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (dk.setStencilBuffer(sk), wk) wk(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const kk = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            kk.length && this._renderTransparent(kk)
          } else this._renderTransparent(this._transparentSubMeshes);
          dk.setAlphaMode(0)
        }
        if (dk.setStencilBuffer(!1), ak && this._edgesRenderers.length) {
          for (let kk = 0; kk < this._edgesRenderers.length; kk++) this._edgesRenderers.data[kk].render();
          dk.setAlphaMode(0)
        }
        dk.setStencilBuffer(sk)
      }
      _renderOpaqueSorted(kk) {
        ak._RenderSorted(kk, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(kk) {
        ak._RenderSorted(kk, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(kk) {
        ak._RenderSorted(kk, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(kk, Fk, Bk, Rk, Xk) {
        let bk, wk = 0;
        const dk = Bk ? Bk.globalPosition : ak._ZeroVector;
        if (Rk && Fk !== ak.PainterSortCompare)
          for (; wk < kk.length; wk++) bk = kk.data[wk], bk._alphaIndex = bk.getMesh().alphaIndex, bk._distanceToCamera = tk.s.Distance(bk.ZH().JRk.centerWorld, dk);
        const sk = kk.length === kk.data.length ? kk.data : kk.data.slice(0, kk.length);
        Fk && sk.sort(Fk);
        const Vk = sk[0].getMesh().XN();
        for (wk = 0; wk < sk.length; wk++) {
          if (bk = sk[wk], Vk._activeMeshesFrozenButKeepClipping && !bk.isInFrustum(Vk._frustumPlanes)) continue;
          let kk = !1;
          if (Rk) {
            const Fk = bk.Ry();
            if (Fk && Fk.needDepthPrePass && !Xk) {
              kk = !0;
              const Bk = Fk.XN().ne();
              Bk.setColorWrite(!1), Bk.setAlphaMode(0), bk.render(!1), Bk.setColorWrite(!0)
            }
          }
          const Fk = bk._renderingMesh;
          !kk && Fk._renderRunFollower(bk, Rk) || bk.render(Rk)
        }
      }
      static defaultTransparentSortCompare(kk, Fk) {
        return kk._alphaIndex > Fk._alphaIndex ? 1 : kk._alphaIndex < Fk._alphaIndex ? -1 : ak.backToFrontSortCompare(kk, Fk)
      }
      static backToFrontSortCompare(kk, Fk) {
        return kk._distanceToCamera < Fk._distanceToCamera ? 1 : kk._distanceToCamera > Fk._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(kk, Fk) {
        return kk._distanceToCamera < Fk._distanceToCamera ? -1 : kk._distanceToCamera > Fk._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(kk, Fk) {
        const Bk = kk.getMesh(),
          Rk = Fk.getMesh();
        return Bk.material && Rk.material ? Bk.material.uniqueId - Rk.material.uniqueId : Bk.uniqueId - Rk.uniqueId
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
      dispatch(kk, Fk, Bk) {
        void 0 === Fk && (Fk = kk.getMesh()), void 0 === Bk && (Bk = kk.Ry()), null !== Bk && void 0 !== Bk && (Bk.needAlphaBlendingForMesh(Fk) ? this._transparentSubMeshes.push(kk) : Bk.needAlphaTestingForMesh(Fk) ? (Bk.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(kk), this._alphaTestSubMeshes.push(kk)) : (Bk.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(kk), this._opaqueSubMeshes.push(kk)), Fk._renderingGroup = this, Fk._edgesRenderer && Fk.isEnabled() && Fk.isVisible && Fk._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(Fk._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(kk) {
        this._spriteManagers.push(kk), this._empty = !1
      }
      dispatchParticles(kk) {
        this._particleSystems.push(kk), this._empty = !1
      }
      _renderParticles(kk) {
        if (0 === this._particleSystems.length) return;
        const Fk = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let Bk = 0; Bk < this._particleSystems.length; Bk++) {
          const Rk = this._particleSystems.data[Bk];
          if (0 === (Fk && Fk.layerMask & Rk.layerMask)) continue;
          const tk = Rk.emitter;
          tk.position && kk && -1 === kk.indexOf(tk) || this._scene._activeParticles.addCount(Rk.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const kk = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let Fk = 0; Fk < this._spriteManagers.length; Fk++) {
          const Bk = this._spriteManagers.data[Fk];
          0 !== (kk && kk.layerMask & Bk.layerMask) && Bk.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    ak._ZeroVector = tk.s.Zero()
  },
  39560: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak
    });
    var Rk = Bk(39567);
    class tk {}
    class ak {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(kk) {
        this._disableDepthPrePass = kk;
        for (const Fk of this._renderingGroups) Fk.disableDepthPrePass = kk
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(kk) {
        kk !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = kk, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const kk of this._scene.meshes)
          if (kk.AY)
            for (const Fk of kk.AY) Fk._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const kk of this._scene.spriteManagers) kk._wasDispatched = !1;
        for (const kk of this._scene.fY) kk._wasDispatched = !1
      }
      constructor(kk) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new tk, this._maintainStateBetweenFrames = !1, this._scene = kk;
        for (let Fk = ak.MIN_RENDERINGGROUPS; Fk < ak.MAX_RENDERINGGROUPS; Fk++) this._autoClearDepthStencil[Fk] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(kk) {
        const Fk = kk || 0;
        return this._prepareRenderingGroup(Fk), this._renderingGroups[Fk]
      }
      _clearDepthStencilBuffer() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.ne().clear(null, !1, kk, Fk), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(kk, Fk, Bk, Rk) {
        let tk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Xk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          bk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          wk = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          dk = arguments.length > 8 ? arguments[8] : void 0,
          sk = arguments.length > 9 ? arguments[9] : void 0;
        const Vk = this._renderingGroupInfo;
        Vk.ef = this._scene, Vk.camera = this._scene.activeCamera, Vk.renderingManager = this;
        const Jk = sk ?? this._scene.spriteManagers;
        if (Jk && Rk)
          for (let ak = 0; ak < Jk.length; ak++) {
            const kk = Jk[ak];
            this.dispatchSprites(kk)
          }
        for (let Ak = ak.MIN_RENDERINGGROUPS; Ak < ak.MAX_RENDERINGGROUPS; Ak++) {
          this._depthStencilBufferAlreadyCleaned = Ak === ak.MIN_RENDERINGGROUPS;
          const sk = this._renderingGroups[Ak];
          if (!sk || sk._empty) continue;
          const Jk = 1 << Ak;
          if (Vk.renderingGroupId = Ak, this._scene.onBeforeRenderingGroupObservable.notifyObservers(Vk, Jk), ak.AUTOCLEAR) {
            const kk = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(Ak) : this._autoClearDepthStencil[Ak];
            kk && kk.autoClear && this._clearDepthStencilBuffer(kk.depth, kk.stencil)
          }
          for (let kk = 0, Fk = this._scene._beforeRenderingGroupDrawStage; kk < Fk.length; kk++) {
            Fk[kk].action(Ak)
          }
          sk.render(kk, Rk, Bk, Fk, tk, Xk, bk, wk, dk);
          for (let kk = 0, Fk = this._scene._afterRenderingGroupDrawStage; kk < Fk.length; kk++) {
            Fk[kk].action(Ak)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(Vk, Jk)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let kk = ak.MIN_RENDERINGGROUPS; kk < ak.MAX_RENDERINGGROUPS; kk++) {
            const Fk = this._renderingGroups[kk];
            Fk && Fk.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let kk = ak.MIN_RENDERINGGROUPS; kk < ak.MAX_RENDERINGGROUPS; kk++) {
            const Fk = this._renderingGroups[kk];
            Fk && Fk.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let kk = ak.MIN_RENDERINGGROUPS; kk < ak.MAX_RENDERINGGROUPS; kk++) {
          const Fk = this._renderingGroups[kk];
          Fk && Fk.dispose()
        }
      }
      _prepareRenderingGroup(kk) {
        void 0 === this._renderingGroups[kk] && (this._renderingGroups[kk] = new Rk.b(kk, this._scene, this._customOpaqueSortCompareFn[kk], this._customAlphaTestSortCompareFn[kk], this._customTransparentSortCompareFn[kk]), this._renderingGroups[kk].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(kk) {
        this.maintainStateBetweenFrames && kk._wasDispatched || (kk._wasDispatched = !0, this.getRenderingGroup(kk.renderingGroupId).dispatchSprites(kk))
      }
      dispatchParticles(kk) {
        this.maintainStateBetweenFrames && kk._wasDispatched || (kk._wasDispatched = !0, this.getRenderingGroup(kk.renderingGroupId).dispatchParticles(kk))
      }
      dispatch(kk, Fk, Bk) {
        void 0 === Fk && (Fk = kk.getMesh()), this.maintainStateBetweenFrames && kk._wasDispatched || (kk._wasDispatched = !0, this.getRenderingGroup(Fk.renderingGroupId).dispatch(kk, Fk, Bk))
      }
      setRenderingOrder(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[kk] = Fk, this._customAlphaTestSortCompareFn[kk] = Bk, this._customTransparentSortCompareFn[kk] = Rk, this._renderingGroups[kk]) {
          const Fk = this._renderingGroups[kk];
          Fk.opaqueSortCompareFn = this._customOpaqueSortCompareFn[kk], Fk.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[kk], Fk.transparentSortCompareFn = this._customTransparentSortCompareFn[kk]
        }
      }
      setRenderingAutoClearDepthStencil(kk, Fk) {
        let Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Rk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[kk] = {
          autoClear: Fk,
          depth: Bk,
          stencil: Rk
        }
      }
      getAutoClearDepthStencilSetup(kk) {
        return this._autoClearDepthStencil[kk]
      }
    }
    ak.MAX_RENDERINGGROUPS = 4, ak.MIN_RENDERINGGROUPS = 0, ak.AUTOCLEAR = !0
  },
  39311: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk
    });
    class Rk {
      constructor(kk) {
        this._supportBlendParametersPerTarget = kk, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(kk) {
        this.setAlphaBlend(kk)
      }
      setAlphaBlend(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[Fk] !== kk && (kk ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[Fk] = kk, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(kk, Fk, Bk, Rk) {
        this._blendConstants[0] === kk && this._blendConstants[1] === Fk && this._blendConstants[2] === Bk && this._blendConstants[3] === Rk || (this._blendConstants[0] = kk, this._blendConstants[1] = Fk, this._blendConstants[2] = Bk, this._blendConstants[3] = Rk, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(kk, Fk, Bk, Rk) {
        const tk = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[tk + 0] === kk && this._blendFunctionParameters[tk + 1] === Fk && this._blendFunctionParameters[tk + 2] === Bk && this._blendFunctionParameters[tk + 3] === Rk || (this._blendFunctionParameters[tk + 0] = kk, this._blendFunctionParameters[tk + 1] = Fk, this._blendFunctionParameters[tk + 2] = Bk, this._blendFunctionParameters[tk + 3] = Rk, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(kk, Fk) {
        const Bk = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[Bk + 0] === kk && this._blendEquationParameters[Bk + 1] === Fk || (this._blendEquationParameters[Bk + 0] = kk, this._blendEquationParameters[Bk + 1] = Fk, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== Fk && (this._numTargets = Fk, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== Bk && (this._blendDisabledTargetsMask = Bk, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (kk.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === Fk || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (Fk > 1 && 0 !== Bk && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & Bk) ? kk.enable(kk.BLEND) : kk.disable(kk.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (kk.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (kk.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const Rk = kk;
        if (this._isAlphaBlendDirty) {
          for (let tk = 0; tk < Fk; tk++) {
            const Fk = tk < this._numTargetEnabled ? tk : 0;
            this._alphaBlend[Fk] && 0 === (Bk & 1 << tk) ? Rk.enableIndexed(kk.BLEND, tk) : Rk.disableIndexed(kk.BLEND, tk)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let kk = 0; kk < Fk; kk++) {
            const Fk = kk < this._numTargetEnabled ? 4 * kk : 0;
            Rk.blendFuncSeparateIndexed(kk, this._blendFunctionParameters[Fk + 0], this._blendFunctionParameters[Fk + 1], this._blendFunctionParameters[Fk + 2], this._blendFunctionParameters[Fk + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let kk = 0; kk < Fk; kk++) {
            const Fk = kk < this._numTargetEnabled ? 2 * kk : 0;
            Rk.blendEquationSeparateIndexed(kk, this._blendEquationParameters[Fk + 0], this._blendEquationParameters[Fk + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(kk, Fk) {
        let Bk = 32774;
        switch (kk) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, Fk);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, Fk);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, Fk);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, Fk);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, Fk);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, Fk);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, Fk);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, Fk);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, Fk);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, Fk);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Fk);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, Fk);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, Fk);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, Fk);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, Fk);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, Fk);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Fk), Bk = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Fk), Bk = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, Fk);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, Fk)
        }
        this.setAlphaEquationParameters(Bk, Bk, Fk)
      }
    }
  },
  39598: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Rk
    });
    class Rk {}
    Rk._IsPickingAvailable = !1
  },
  39489: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => wB,
      c: () => XB
    });
    var Rk = Bk(39492),
      tk = Bk(39302),
      ak = Bk(39307),
      Xk = Bk(36781),
      bk = Bk(39506);
    class wk {
      constructor() {
        this._count = 0, this._data = {}
      }
      sBk(kk) {
        this.clear(), kk.forEach(((kk, Fk) => this.add(kk, Fk)))
      }
      get(kk) {
        const Fk = this._data[kk];
        if (void 0 !== Fk) return Fk
      }
      getOrAddWithFactory(kk, Fk) {
        let Bk = this.get(kk);
        return void 0 !== Bk || (Bk = Fk(kk), Bk && this.add(kk, Bk)), Bk
      }
      getOrAdd(kk, Fk) {
        const Bk = this.get(kk);
        return void 0 !== Bk ? Bk : (this.add(kk, Fk), Fk)
      }
      contains(kk) {
        return void 0 !== this._data[kk]
      }
      add(kk, Fk) {
        return void 0 === this._data[kk] && (this._data[kk] = Fk, ++this._count, !0)
      }
      set(kk, Fk) {
        return void 0 !== this._data[kk] && (this._data[kk] = Fk, !0)
      }
      getAndRemove(kk) {
        const Fk = this.get(kk);
        return void 0 !== Fk ? (delete this._data[kk], --this._count, Fk) : null
      }
      remove(kk) {
        return !!this.contains(kk) && (delete this._data[kk], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(kk) {
        for (const Fk in this._data) {
          kk(Fk, this._data[Fk])
        }
      }
      first(kk) {
        for (const Fk in this._data) {
          const Bk = kk(Fk, this._data[Fk]);
          if (Bk) return Bk
        }
        return null
      }
    }
    var dk = Bk(39420),
      sk = Bk(36758),
      Vk = Bk(39510),
      Jk = Bk(39530),
      Ak = Bk(39537);
    class ek {
      constructor(kk, Fk, Bk, Rk, tk, ak) {
        this.source = kk, this.pointerX = Fk, this.pointerY = Bk, this.meshUnderPointer = Rk, this.sourceEvent = tk, this.additionalData = ak
      }
      static CreateNew(kk, Fk, Bk) {
        const Rk = kk.XN();
        return new ek(kk, Rk.pointerX, Rk.pointerY, Rk.meshUnderPointer || kk, Fk, Bk)
      }
      static CreateNewFromSprite(kk, Fk, Bk, Rk) {
        return new ek(kk, Fk.pointerX, Fk.pointerY, Fk.meshUnderPointer, Bk, Rk)
      }
      static CreateNewFromScene(kk, Fk) {
        return new ek(null, kk.pointerX, kk.pointerY, kk.meshUnderPointer, Fk)
      }
      static CreateNewFromPrimitive(kk, Fk, Bk, Rk) {
        return new ek(kk, Fk.x, Fk.y, null, Bk, Rk)
      }
    }
    var yk = Bk(39545),
      fk = Bk(39553),
      mk = Bk(39560),
      Wk = Bk(39575),
      vk = Bk(39281),
      ik = Bk(36772),
      Yk = Bk(39296),
      Lk = Bk(39582);
    class Ok {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const kk in Ok.Triggers)
          if (Object.prototype.hasOwnProperty.call(Ok.Triggers, kk)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const kk in Ok.Triggers)
          if (Object.prototype.hasOwnProperty.call(Ok.Triggers, kk)) {
            const Fk = parseInt(kk);
            if (Fk >= 1 && Fk <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(kk) {
        for (const Fk in Ok.Triggers)
          if (Object.prototype.hasOwnProperty.call(Ok.Triggers, Fk)) {
            if (parseInt(Fk) === kk) return !0
          } return !1
      }
    }
    Ok.Triggers = {};
    var Ek, Sk, Nk, Hk, uk, Mk, gk, Uk = Bk(39589);
    ! function(kk) {
      kk[kk.Generic = 0] = "Generic", kk[kk.Keyboard = 1] = "Keyboard", kk[kk.Mouse = 2] = "Mouse", kk[kk.Touch = 3] = "Touch", kk[kk.DualShock = 4] = "DualShock", kk[kk.Xbox = 5] = "Xbox", kk[kk.Switch = 6] = "Switch", kk[kk.DualSense = 7] = "DualSense"
    }(Ek || (Ek = {})),
    function(kk) {
      kk[kk.Horizontal = 0] = "Horizontal", kk[kk.Vertical = 1] = "Vertical", kk[kk.LeftClick = 2] = "LeftClick", kk[kk.MiddleClick = 3] = "MiddleClick", kk[kk.RightClick = 4] = "RightClick", kk[kk.BrowserBack = 5] = "BrowserBack", kk[kk.BrowserForward = 6] = "BrowserForward", kk[kk.MouseWheelX = 7] = "MouseWheelX", kk[kk.MouseWheelY = 8] = "MouseWheelY", kk[kk.MouseWheelZ = 9] = "MouseWheelZ", kk[kk.Move = 12] = "Move"
    }(Sk || (Sk = {})),
    function(kk) {
      kk[kk.Horizontal = 0] = "Horizontal", kk[kk.Vertical = 1] = "Vertical", kk[kk.LeftClick = 2] = "LeftClick", kk[kk.MiddleClick = 3] = "MiddleClick", kk[kk.RightClick = 4] = "RightClick", kk[kk.BrowserBack = 5] = "BrowserBack", kk[kk.BrowserForward = 6] = "BrowserForward", kk[kk.MouseWheelX = 7] = "MouseWheelX", kk[kk.MouseWheelY = 8] = "MouseWheelY", kk[kk.MouseWheelZ = 9] = "MouseWheelZ", kk[kk.DeltaHorizontal = 10] = "DeltaHorizontal", kk[kk.DeltaVertical = 11] = "DeltaVertical"
    }(Nk || (Nk = {})),
    function(kk) {
      kk[kk.Cross = 0] = "Cross", kk[kk.Circle = 1] = "Circle", kk[kk.Square = 2] = "Square", kk[kk.Triangle = 3] = "Triangle", kk[kk.L1 = 4] = "L1", kk[kk.R1 = 5] = "R1", kk[kk.L2 = 6] = "L2", kk[kk.R2 = 7] = "R2", kk[kk.Share = 8] = "Share", kk[kk.Options = 9] = "Options", kk[kk.L3 = 10] = "L3", kk[kk.R3 = 11] = "R3", kk[kk.DPadUp = 12] = "DPadUp", kk[kk.DPadDown = 13] = "DPadDown", kk[kk.DPadLeft = 14] = "DPadLeft", kk[kk.DPadRight = 15] = "DPadRight", kk[kk.Home = 16] = "Home", kk[kk.TouchPad = 17] = "TouchPad", kk[kk.LStickXAxis = 18] = "LStickXAxis", kk[kk.LStickYAxis = 19] = "LStickYAxis", kk[kk.RStickXAxis = 20] = "RStickXAxis", kk[kk.RStickYAxis = 21] = "RStickYAxis"
    }(Hk || (Hk = {})),
    function(kk) {
      kk[kk.Cross = 0] = "Cross", kk[kk.Circle = 1] = "Circle", kk[kk.Square = 2] = "Square", kk[kk.Triangle = 3] = "Triangle", kk[kk.L1 = 4] = "L1", kk[kk.R1 = 5] = "R1", kk[kk.L2 = 6] = "L2", kk[kk.R2 = 7] = "R2", kk[kk.Create = 8] = "Create", kk[kk.Options = 9] = "Options", kk[kk.L3 = 10] = "L3", kk[kk.R3 = 11] = "R3", kk[kk.DPadUp = 12] = "DPadUp", kk[kk.DPadDown = 13] = "DPadDown", kk[kk.DPadLeft = 14] = "DPadLeft", kk[kk.DPadRight = 15] = "DPadRight", kk[kk.Home = 16] = "Home", kk[kk.TouchPad = 17] = "TouchPad", kk[kk.LStickXAxis = 18] = "LStickXAxis", kk[kk.LStickYAxis = 19] = "LStickYAxis", kk[kk.RStickXAxis = 20] = "RStickXAxis", kk[kk.RStickYAxis = 21] = "RStickYAxis"
    }(uk || (uk = {})),
    function(kk) {
      kk[kk.A = 0] = "A", kk[kk.B = 1] = "B", kk[kk.X = 2] = "X", kk[kk.Y = 3] = "Y", kk[kk.LB = 4] = "LB", kk[kk.RB = 5] = "RB", kk[kk.LT = 6] = "LT", kk[kk.RT = 7] = "RT", kk[kk.Back = 8] = "Back", kk[kk.Start = 9] = "Start", kk[kk.LS = 10] = "LS", kk[kk.RS = 11] = "RS", kk[kk.DPadUp = 12] = "DPadUp", kk[kk.DPadDown = 13] = "DPadDown", kk[kk.DPadLeft = 14] = "DPadLeft", kk[kk.DPadRight = 15] = "DPadRight", kk[kk.Home = 16] = "Home", kk[kk.LStickXAxis = 17] = "LStickXAxis", kk[kk.LStickYAxis = 18] = "LStickYAxis", kk[kk.RStickXAxis = 19] = "RStickXAxis", kk[kk.RStickYAxis = 20] = "RStickYAxis"
    }(Mk || (Mk = {})),
    function(kk) {
      kk[kk.B = 0] = "B", kk[kk.A = 1] = "A", kk[kk.Y = 2] = "Y", kk[kk.X = 3] = "X", kk[kk.L = 4] = "L", kk[kk.R = 5] = "R", kk[kk.ZL = 6] = "ZL", kk[kk.ZR = 7] = "ZR", kk[kk.Minus = 8] = "Minus", kk[kk.Plus = 9] = "Plus", kk[kk.LS = 10] = "LS", kk[kk.RS = 11] = "RS", kk[kk.DPadUp = 12] = "DPadUp", kk[kk.DPadDown = 13] = "DPadDown", kk[kk.DPadLeft = 14] = "DPadLeft", kk[kk.DPadRight = 15] = "DPadRight", kk[kk.Home = 16] = "Home", kk[kk.Capture = 17] = "Capture", kk[kk.LStickXAxis = 18] = "LStickXAxis", kk[kk.LStickYAxis = 19] = "LStickYAxis", kk[kk.RStickXAxis = 20] = "RStickXAxis", kk[kk.RStickYAxis = 21] = "RStickYAxis"
    }(gk || (gk = {}));
    var ck = Bk(39595);
    class Gk {
      static CreateDeviceEvent(kk, Fk, Bk, Rk, tk, ak, Xk) {
        switch (kk) {
          case Ek.Keyboard:
            return this._CreateKeyboardEvent(Bk, Rk, tk, ak);
          case Ek.Mouse:
            if (Bk === Sk.MouseWheelX || Bk === Sk.MouseWheelY || Bk === Sk.MouseWheelZ) return this._CreateWheelEvent(kk, Fk, Bk, Rk, tk, ak);
          case Ek.Touch:
            return this._CreatePointerEvent(kk, Fk, Bk, Rk, tk, ak, Xk);
          default:
            throw `Unable to generate event for device ${Ek[kk]}`
        }
      }
      static _CreatePointerEvent(kk, Fk, Bk, Rk, tk, ak, Xk) {
        const bk = this._CreateMouseEvent(kk, Fk, Bk, Rk, tk, ak);
        kk === Ek.Mouse ? (bk.deviceType = Ek.Mouse, bk.pointerId = 1, bk.pointerType = "mouse") : (bk.deviceType = Ek.Touch, bk.pointerId = Xk ?? Fk, bk.pointerType = "touch");
        let wk = 0;
        return wk += tk.pollInput(kk, Fk, Sk.LeftClick), wk += 2 * tk.pollInput(kk, Fk, Sk.RightClick), wk += 4 * tk.pollInput(kk, Fk, Sk.MiddleClick), bk.buttons = wk, Bk === Sk.Move ? bk.type = "pointermove" : Bk >= Sk.LeftClick && Bk <= Sk.RightClick && (bk.type = 1 === Rk ? "pointerdown" : "pointerup", bk.button = Bk - 2), bk
      }
      static _CreateWheelEvent(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = this._CreateMouseEvent(kk, Fk, Bk, Rk, tk, ak);
        switch (Xk.pointerId = 1, Xk.type = "wheel", Xk.deltaMode = ck.b.DOM_DELTA_PIXEL, Xk.deltaX = 0, Xk.deltaY = 0, Xk.deltaZ = 0, Bk) {
          case Sk.MouseWheelX:
            Xk.deltaX = Rk;
            break;
          case Sk.MouseWheelY:
            Xk.deltaY = Rk;
            break;
          case Sk.MouseWheelZ:
            Xk.deltaZ = Rk
        }
        return Xk
      }
      static _CreateMouseEvent(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = this._CreateEvent(ak),
          bk = tk.pollInput(kk, Fk, Sk.Horizontal),
          wk = tk.pollInput(kk, Fk, Sk.Vertical);
        return ak ? (Xk.movementX = 0, Xk.movementY = 0, Xk.offsetX = Xk.movementX - ak.getBoundingClientRect().x, Xk.offsetY = Xk.movementY - ak.getBoundingClientRect().y) : (Xk.movementX = tk.pollInput(kk, Fk, 10), Xk.movementY = tk.pollInput(kk, Fk, 11), Xk.offsetX = 0, Xk.offsetY = 0), this._CheckNonCharacterKeys(Xk, tk), Xk.clientX = bk, Xk.clientY = wk, Xk.x = bk, Xk.y = wk, Xk.deviceType = kk, Xk.deviceSlot = Fk, Xk.inputIndex = Bk, Xk
      }
      static _CreateKeyboardEvent(kk, Fk, Bk, Rk) {
        const tk = this._CreateEvent(Rk);
        return this._CheckNonCharacterKeys(tk, Bk), tk.deviceType = Ek.Keyboard, tk.deviceSlot = 0, tk.inputIndex = kk, tk.type = 1 === Fk ? "keydown" : "keyup", tk.key = String.fromCharCode(kk), tk.keyCode = kk, tk
      }
      static _CheckNonCharacterKeys(kk, Fk) {
        const Bk = Fk.isDeviceAvailable(Ek.Keyboard),
          Rk = Bk && 1 === Fk.pollInput(Ek.Keyboard, 0, 18),
          tk = Bk && 1 === Fk.pollInput(Ek.Keyboard, 0, 17),
          ak = Bk && (1 === Fk.pollInput(Ek.Keyboard, 0, 91) || 1 === Fk.pollInput(Ek.Keyboard, 0, 92) || 1 === Fk.pollInput(Ek.Keyboard, 0, 93)),
          Xk = Bk && 1 === Fk.pollInput(Ek.Keyboard, 0, 16);
        kk.altKey = Rk, kk.ctrlKey = tk, kk.metaKey = ak, kk.shiftKey = Xk
      }
      static _CreateEvent(kk) {
        const Fk = {
          preventDefault: () => {}
        };
        return Fk.target = kk, Fk
      }
    }
    class Tk {
      constructor(kk, Fk, Bk) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(kk, Fk, ((kk, Fk, Rk, tk) => {
          const ak = Gk.CreateDeviceEvent(kk, Fk, Rk, tk, this);
          Bk(kk, Fk, ak)
        })) : this._createDummyNativeInput()
      }
      pollInput(kk, Fk, Bk) {
        return this._nativeInput.pollInput(kk, Fk, Bk)
      }
      isDeviceAvailable(kk) {
        return kk === Ek.Mouse || kk === Ek.Touch
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
    const rk = Object.keys(Sk).length / 2;
    class Dk {
      constructor(kk, Fk, Bk, tk) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = Rk.h.IsSafari(), this._usingMacOs = (0, vk.g)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = kk => {}, this._keyboardUpEvent = kk => {}, this._keyboardBlurEvent = kk => {}, this._pointerMoveEvent = kk => {}, this._pointerDownEvent = kk => {}, this._pointerUpEvent = kk => {}, this._pointerCancelEvent = kk => {}, this._pointerCancelTouch = kk => {}, this._pointerLeaveEvent = kk => {}, this._pointerWheelEvent = kk => {}, this._pointerBlurEvent = kk => {}, this._pointerMacOsChromeOutEvent = kk => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, vk.g)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, vk.g)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = kk => {}, this._gamepadDisconnectedEvent = kk => {}, this._eventPrefix = Rk.h.GetPointerPrefix(kk), this._engine = kk, this._onDeviceConnected = Fk, this._onDeviceDisconnected = Bk, this._onInputChanged = tk, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(kk, Fk, Bk) {
        const tk = this._inputs[kk][Fk];
        if (!tk) throw `Unable to find device ${Ek[kk]}`;
        kk >= Ek.DualShock && kk <= Ek.DualSense && this._updateDevice(kk, Fk, Bk);
        const ak = tk[Bk];
        if (void 0 === ak) throw `Unable to find input ${Bk} for device ${Ek[kk]} in slot ${Fk}`;
        return Bk === Sk.Move && Rk.h.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), ak
      }
      isDeviceAvailable(kk) {
        return void 0 !== this._inputs[kk]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const kk = this?._engine.getInputElement();
        if (kk && (!this._eventsAttached || this._elementToAttachTo !== kk)) {
          if (this._disableEvents(), this._inputs)
            for (const kk of this._inputs)
              if (kk)
                for (const Fk in kk) {
                  const Bk = kk[+Fk];
                  if (Bk)
                    for (let kk = 0; kk < Bk.length; kk++) Bk[kk] = 0
                }
          this._elementToAttachTo = kk, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const kk = navigator.getGamepads();
          for (const Fk of kk) Fk && this._addGamePad(Fk)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(Ek.Mouse, 0, 0, 0)
      }
      _addGamePad(kk) {
        const Fk = this._getGamepadDeviceType(kk.id),
          Bk = kk.index;
        this._gamepads = this._gamepads || new Array(kk.index + 1), this._registerDevice(Fk, Bk, kk.buttons.length + kk.axes.length), this._gamepads[Bk] = Fk
      }
      _addPointerDevice(kk, Fk, Bk, Rk) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(kk, Fk, rk);
        const tk = this._inputs[kk][Fk];
        tk[0] = Bk, tk[1] = Rk
      }
      _registerDevice(kk, Fk, Bk) {
        if (void 0 === Fk) throw `Unable to register device ${Ek[kk]} to undefined slot.`;
        if (this._inputs[kk] || (this._inputs[kk] = {}), !this._inputs[kk][Fk]) {
          const Rk = new Array(Bk);
          Rk.fill(0), this._inputs[kk][Fk] = Rk, this._onDeviceConnected(kk, Fk)
        }
      }
      _unregisterDevice(kk, Fk) {
        this._inputs[kk][Fk] && (delete this._inputs[kk][Fk], this._onDeviceDisconnected(kk, Fk))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = kk => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(Ek.Keyboard, 0, 255));
          const Fk = this._inputs[Ek.Keyboard][0];
          if (Fk) {
            Fk[kk.keyCode] = 1;
            const Bk = kk;
            Bk.inputIndex = kk.keyCode, this._usingMacOs && kk.metaKey && "Meta" !== kk.key && (this._metaKeys.includes(kk.keyCode) || this._metaKeys.push(kk.keyCode)), this._onInputChanged(Ek.Keyboard, 0, Bk)
          }
        }, this._keyboardUpEvent = kk => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(Ek.Keyboard, 0, 255));
          const Fk = this._inputs[Ek.Keyboard][0];
          if (Fk) {
            Fk[kk.keyCode] = 0;
            const Bk = kk;
            if (Bk.inputIndex = kk.keyCode, this._usingMacOs && "Meta" === kk.key && this._metaKeys.length > 0) {
              for (const kk of this._metaKeys) {
                const Bk = Gk.CreateDeviceEvent(Ek.Keyboard, 0, kk, 0, this, this._elementToAttachTo);
                Fk[kk] = 0, this._onInputChanged(Ek.Keyboard, 0, Bk)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(Ek.Keyboard, 0, Bk)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const kk = this._inputs[Ek.Keyboard][0];
            for (let Fk = 0; Fk < kk.length; Fk++)
              if (0 !== kk[Fk]) {
                kk[Fk] = 0;
                const Bk = Gk.CreateDeviceEvent(Ek.Keyboard, 0, Fk, 0, this, this._elementToAttachTo);
                this._onInputChanged(Ek.Keyboard, 0, Bk)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, vk.g)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let Rk = 0; Rk < this._maxTouchPoints; Rk++) this._activeTouchIds[Rk] = -1;
        this._pointerMoveEvent = kk => {
          const Fk = this._getPointerType(kk);
          let Bk = Fk === Ek.Mouse ? 0 : this._activeTouchIds.indexOf(kk.pointerId);
          if (Fk === Ek.Touch && -1 === Bk) {
            if (0 === kk.buttons) return;
            const tk = this._activeTouchIds.indexOf(-1);
            if (!(tk >= 0)) return void Rk.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            Bk = tk, this._activeTouchIds[tk] = kk.pointerId, this._onDeviceConnected(Fk, Bk)
          }
          this._inputs[Fk] || (this._inputs[Fk] = {}), this._inputs[Fk][Bk] || this._addPointerDevice(Fk, Bk, kk.clientX, kk.clientY);
          const tk = this._inputs[Fk][Bk];
          if (tk) {
            const Rk = kk;
            Rk.inputIndex = Sk.Move, tk[Sk.Horizontal] = kk.clientX, tk[Sk.Vertical] = kk.clientY, Fk === Ek.Touch && 0 === tk[Sk.LeftClick] && (tk[Sk.LeftClick] = 1), void 0 === kk.pointerId && (kk.pointerId = this._mouseId), this._onInputChanged(Fk, Bk, Rk), this._usingSafari || -1 === kk.button || (Rk.inputIndex = kk.button + 2, tk[kk.button + 2] = tk[kk.button + 2] ? 0 : 1, this._onInputChanged(Fk, Bk, Rk))
          }
        }, this._pointerDownEvent = kk => {
          const Fk = this._getPointerType(kk);
          let Bk = Fk === Ek.Mouse ? 0 : kk.pointerId;
          if (Fk === Ek.Touch) {
            let Fk = this._activeTouchIds.indexOf(kk.pointerId);
            if (-1 === Fk && (Fk = this._activeTouchIds.indexOf(-1)), !(Fk >= 0)) return void Rk.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            Bk = Fk, this._activeTouchIds[Fk] = kk.pointerId
          }
          this._inputs[Fk] || (this._inputs[Fk] = {}), this._inputs[Fk][Bk] ? Fk === Ek.Touch && this._onDeviceConnected(Fk, Bk) : this._addPointerDevice(Fk, Bk, kk.clientX, kk.clientY);
          const tk = this._inputs[Fk][Bk];
          if (tk) {
            const Rk = tk[Sk.Horizontal],
              Xk = tk[Sk.Vertical];
            if (Fk === Ek.Mouse) {
              if (void 0 === kk.pointerId && (kk.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (ak) {}
            } else if (kk.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(kk.pointerId)
            } catch (ak) {}
            tk[Sk.Horizontal] = kk.clientX, tk[Sk.Vertical] = kk.clientY, tk[kk.button + 2] = 1;
            const bk = kk;
            bk.inputIndex = kk.button + 2, this._onInputChanged(Fk, Bk, bk), Rk === kk.clientX && Xk === kk.clientY || (bk.inputIndex = Sk.Move, this._onInputChanged(Fk, Bk, bk))
          }
        }, this._pointerUpEvent = kk => {
          const Fk = this._getPointerType(kk),
            Bk = Fk === Ek.Mouse ? 0 : this._activeTouchIds.indexOf(kk.pointerId);
          if (Fk === Ek.Touch) {
            if (-1 === Bk) return;
            this._activeTouchIds[Bk] = -1
          }
          const Rk = this._inputs[Fk]?.[Bk];
          let tk = kk.button,
            ak = Rk && 0 !== Rk[tk + 2];
          if (!ak && this._isUsingFirefox && this._usingMacOs && Rk && (tk = 2 === tk ? 0 : 2, ak = 0 !== Rk[tk + 2]), ak) {
            const ak = Rk[Sk.Horizontal],
              Xk = Rk[Sk.Vertical];
            Rk[Sk.Horizontal] = kk.clientX, Rk[Sk.Vertical] = kk.clientY, Rk[tk + 2] = 0;
            const bk = kk;
            void 0 === kk.pointerId && (kk.pointerId = this._mouseId), ak === kk.clientX && Xk === kk.clientY || (bk.inputIndex = Sk.Move, this._onInputChanged(Fk, Bk, bk)), bk.inputIndex = tk + 2, Fk === Ek.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : kk.pointerId && this._elementToAttachTo.hasPointerCapture?.(kk.pointerId) && this._elementToAttachTo.releasePointerCapture(kk.pointerId), this._onInputChanged(Fk, Bk, bk), Fk === Ek.Touch && this._onDeviceDisconnected(Fk, Bk)
          }
        }, this._pointerCancelTouch = kk => {
          const Fk = this._activeTouchIds.indexOf(kk);
          if (-1 === Fk) return;
          this._elementToAttachTo.hasPointerCapture?.(kk) && this._elementToAttachTo.releasePointerCapture(kk), this._inputs[Ek.Touch][Fk][Sk.LeftClick] = 0;
          const Bk = Gk.CreateDeviceEvent(Ek.Touch, Fk, Sk.LeftClick, 0, this, this._elementToAttachTo, kk);
          this._onInputChanged(Ek.Touch, Fk, Bk), this._activeTouchIds[Fk] = -1, this._onDeviceDisconnected(Ek.Touch, Fk)
        }, this._pointerCancelEvent = kk => {
          if ("mouse" === kk.pointerType) {
            const kk = this._inputs[Ek.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let Fk = Sk.LeftClick; Fk <= Sk.BrowserForward; Fk++)
              if (1 === kk[Fk]) {
                kk[Fk] = 0;
                const Bk = Gk.CreateDeviceEvent(Ek.Mouse, 0, Fk, 0, this, this._elementToAttachTo);
                this._onInputChanged(Ek.Mouse, 0, Bk)
              }
          } else this._pointerCancelTouch(kk.pointerId)
        }, this._pointerLeaveEvent = kk => {
          "pen" === kk.pointerType && this._pointerCancelTouch(kk.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let kk = !1;
        const Fk = function() {};
        try {
          const Bk = Object.defineProperty({}, "passive", {
            get: function() {
              kk = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", Fk, Bk), this._elementToAttachTo.removeEventListener("test", Fk, Bk)
        } catch (Bk) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(Ek.Mouse)) {
            const kk = this._inputs[Ek.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let Fk = Sk.LeftClick; Fk <= Sk.BrowserForward; Fk++)
              if (1 === kk[Fk]) {
                kk[Fk] = 0;
                const Bk = Gk.CreateDeviceEvent(Ek.Mouse, 0, Fk, 0, this, this._elementToAttachTo);
                this._onInputChanged(Ek.Mouse, 0, Bk)
              }
          }
          if (this.isDeviceAvailable(Ek.Touch)) {
            const kk = this._inputs[Ek.Touch];
            for (let Fk = 0; Fk < this._activeTouchIds.length; Fk++) {
              const Bk = this._activeTouchIds[Fk];
              if (this._elementToAttachTo.hasPointerCapture?.(Bk) && this._elementToAttachTo.releasePointerCapture(Bk), -1 !== Bk && 1 === kk[Fk]?.[Sk.LeftClick]) {
                kk[Fk][Sk.LeftClick] = 0;
                const Rk = Gk.CreateDeviceEvent(Ek.Touch, Fk, Sk.LeftClick, 0, this, this._elementToAttachTo, Bk);
                this._onInputChanged(Ek.Touch, Fk, Rk), this._activeTouchIds[Fk] = -1, this._onDeviceDisconnected(Ek.Touch, Fk)
              }
            }
          }
        }, this._pointerWheelEvent = kk => {
          const Fk = Ek.Mouse;
          this._inputs[Fk] || (this._inputs[Fk] = []), this._inputs[Fk][0] || (this._pointerActive = !0, this._registerDevice(Fk, 0, rk));
          const Bk = this._inputs[Fk][0];
          if (Bk) {
            Bk[Sk.MouseWheelX] = kk.deltaX || 0, Bk[Sk.MouseWheelY] = kk.deltaY || kk.wheelDelta || 0, Bk[Sk.MouseWheelZ] = kk.deltaZ || 0;
            const Rk = kk;
            void 0 === kk.pointerId && (kk.pointerId = this._mouseId), 0 !== Bk[Sk.MouseWheelX] && (Rk.inputIndex = Sk.MouseWheelX, this._onInputChanged(Fk, 0, Rk)), 0 !== Bk[Sk.MouseWheelY] && (Rk.inputIndex = Sk.MouseWheelY, this._onInputChanged(Fk, 0, Rk)), 0 !== Bk[Sk.MouseWheelZ] && (Rk.inputIndex = Sk.MouseWheelZ, this._onInputChanged(Fk, 0, Rk))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = kk => {
          kk.buttons > 1 && this._pointerCancelEvent(kk)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!kk && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(Ek.Mouse)) {
            const kk = this._inputs[Ek.Mouse][0];
            kk[Sk.MouseWheelX] = 0, kk[Sk.MouseWheelY] = 0, kk[Sk.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = kk => {
          this._addGamePad(kk.gamepad)
        }, this._gamepadDisconnectedEvent = kk => {
          if (this._gamepads) {
            const Fk = this._getGamepadDeviceType(kk.gamepad.id),
              Bk = kk.gamepad.index;
            this._unregisterDevice(Fk, Bk), delete this._gamepads[Bk]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(kk, Fk, Bk) {
        const Rk = navigator.getGamepads()[Fk];
        if (Rk && kk === this._gamepads[Fk]) {
          const tk = this._inputs[kk][Fk];
          Bk >= Rk.buttons.length ? tk[Bk] = Rk.axes[Bk - Rk.buttons.length].valueOf() : tk[Bk] = Rk.buttons[Bk].value
        }
      }
      _getGamepadDeviceType(kk) {
        return -1 !== kk.indexOf("054c") ? -1 !== kk.indexOf("0ce6") ? Ek.DualSense : Ek.DualShock : -1 !== kk.indexOf("Xbox One") || -1 !== kk.search("Xbox 360") || -1 !== kk.search("xinput") || -1 !== kk.indexOf("045e") && -1 === kk.indexOf("Surface Dock") ? Ek.Xbox : -1 !== kk.indexOf("057e") ? Ek.Switch : Ek.Generic
      }
      _getPointerType(kk) {
        let Fk = Ek.Mouse;
        return ("touch" === kk.pointerType || "pen" === kk.pointerType || kk.touches) && (Fk = Ek.Touch), Fk
      }
    }
    class zk {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = Fk, this.deviceSlot = Bk, this.onInputChangedObservable = new Xk.e, this._deviceInputSystem = kk
      }
      getInput(kk) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, kk)
      }
    }
    class Pk {
      constructor(kk) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = kk => {
          for (let Fk = 0; Fk < this._devices.length; Fk++) {
            const Bk = this._devices[Fk];
            for (const Rk in Bk) {
              const Bk = +Rk;
              kk._addDevice(new zk(this._deviceInputSystem, Fk, Bk))
            }
          }
          this._registeredManagers.push(kk)
        }, this.unregisterManager = kk => {
          const Fk = this._registeredManagers.indexOf(kk);
          Fk > -1 && this._registeredManagers.splice(Fk, 1)
        };
        const Fk = Object.keys(Ek).length / 2;
        this._devices = new Array(Fk);
        const Bk = (kk, Fk) => {
            this._devices[kk] || (this._devices[kk] = new Array), this._devices[kk][Fk] || (this._devices[kk][Fk] = Fk);
            for (const Bk of this._registeredManagers) {
              const Rk = new zk(this._deviceInputSystem, kk, Fk);
              Bk._addDevice(Rk)
            }
          },
          Rk = (kk, Fk) => {
            this._devices[kk]?.[Fk] && delete this._devices[kk][Fk];
            for (const Bk of this._registeredManagers) Bk._removeDevice(kk, Fk)
          },
          tk = (kk, Fk, Bk) => {
            if (Bk)
              for (const Rk of this._registeredManagers) Rk._onInputChanged(kk, Fk, Bk)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new Tk(Bk, Rk, tk) : this._deviceInputSystem = new Dk(kk, Bk, Rk, tk)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class hk {
      getDeviceSource(kk, Fk) {
        if (void 0 === Fk) {
          if (void 0 === this._firstDevice[kk]) return null;
          Fk = this._firstDevice[kk]
        }
        return this._devices[kk] && void 0 !== this._devices[kk][Fk] ? this._devices[kk][Fk] : null
      }
      getDeviceSources(kk) {
        return this._devices[kk] ? this._devices[kk].filter((kk => !!kk)) : []
      }
      constructor(kk) {
        const Fk = Object.keys(Ek).length / 2;
        this._devices = new Array(Fk), this._firstDevice = new Array(Fk), this._engine = kk, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new Pk(kk)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new Xk.e((kk => {
          for (const Fk of this._devices)
            if (Fk)
              for (const Bk of Fk) Bk && this.onDeviceConnectedObservable.notifyObserver(kk, Bk)
        })), this.onDeviceDisconnectedObservable = new Xk.e, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = kk.yN.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.yN.remove(this._onDisposeObserver)
      }
      _addDevice(kk) {
        this._devices[kk.deviceType] || (this._devices[kk.deviceType] = []), this._devices[kk.deviceType][kk.deviceSlot] || (this._devices[kk.deviceType][kk.deviceSlot] = kk, this._updateFirstDevices(kk.deviceType)), this.onDeviceConnectedObservable.notifyObservers(kk)
      }
      _removeDevice(kk, Fk) {
        const Bk = this._devices[kk]?.[Fk];
        this.onDeviceDisconnectedObservable.notifyObservers(Bk), this._devices[kk]?.[Fk] && delete this._devices[kk][Fk], this._updateFirstDevices(kk)
      }
      _onInputChanged(kk, Fk, Bk) {
        this._devices[kk]?.[Fk]?.onInputChangedObservable.notifyObservers(Bk)
      }
      _updateFirstDevices(kk) {
        switch (kk) {
          case Ek.Keyboard:
          case Ek.Mouse:
            this._firstDevice[kk] = 0;
            break;
          case Ek.Touch:
          case Ek.DualSense:
          case Ek.DualShock:
          case Ek.Xbox:
          case Ek.Switch:
          case Ek.Generic: {
            delete this._firstDevice[kk];
            const Fk = this._devices[kk];
            if (Fk)
              for (let Bk = 0; Bk < Fk.length; Bk++)
                if (Fk[Bk]) {
                  this._firstDevice[kk] = Bk;
                  break
                } break
          }
        }
      }
    }
    var qk = Bk(39598);
    class Ck {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get xs() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(kk) {
        this._singleClick = kk
      }
      set xs(kk) {
        this._doubleClick = kk
      }
      set hasSwiped(kk) {
        this._hasSwiped = kk
      }
      set ignore(kk) {
        this._ignore = kk
      }
    }
    class Zk {
      constructor(kk) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new sk.p(0, 0), this._previousStartingPointerPosition = new sk.p(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = kk || ik.c.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(kk) {
        return this._meshUnderPointerId[kk] || null
      }
      get unTranslatedPointer() {
        return new sk.p(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(kk) {
        this._pointerX = kk
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(kk) {
        this._pointerY = kk
      }
      _updatePointerPosition(kk) {
        const Fk = this._scene.ne().getInputElementClientRect();
        Fk && (this._pointerX = kk.clientX - Fk.left, this._pointerY = kk.clientY - Fk.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(kk, Fk) {
        const Bk = this._scene,
          Rk = Bk.ne(),
          tk = Rk.getInputElement();
        tk && (tk.tabIndex = Rk.canvasTabIndex, Bk.doNotHandleCursors || (tk.style.cursor = Bk.defaultCursor)), this._setCursorAndPointerOverMesh(kk, Fk, Bk);
        for (const bk of Bk._pointerMoveStage) {
          kk = kk || this._pickMove(Fk);
          const Bk = !!kk?.pickedMesh;
          kk = bk.action(this._unTranslatedPointerX, this._unTranslatedPointerY, kk, Bk, tk)
        }
        const ak = Fk.inputIndex >= Sk.MouseWheelX && Fk.inputIndex <= Sk.MouseWheelZ ? Lk.c.POINTERWHEEL : Lk.c.POINTERMOVE;
        let Xk;
        Bk.onPointerMove && (kk = kk || this._pickMove(Fk), Bk.onPointerMove(Fk, kk, ak)), kk ? (Xk = new Lk.i(ak, Fk, kk), this._setRayOnPointerInfo(kk, Fk)) : (Xk = new Lk.i(ak, Fk, null, this), this._movePointerInfo = Xk), Bk.onPointerObservable.hasObservers() && Bk.onPointerObservable.notifyObservers(Xk, ak)
      }
      _setRayOnPointerInfo(kk, Fk) {
        const Bk = this._scene;
        kk && qk.b._IsPickingAvailable && (kk.ray || (kk.ray = Bk.createPickingRay(Fk.offsetX, Fk.offsetY, sk.c.Identity(), Bk.activeCamera)))
      }
      _addCameraPointerObserver(kk, Fk) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(kk, Fk)
      }
      _removeCameraPointerObserver(kk) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(kk)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(kk, Fk, Bk) {
        const Rk = this._scene,
          tk = new Lk.g(Bk, Fk, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return kk && (tk.originalPickingInfo = kk, tk.ray = kk.ray, "xr-near" === Fk.pointerType && kk.originMesh && (tk.nearInteractionPickingInfo = kk)), Rk.onPrePointerObservable.notifyObservers(tk, Bk), !!tk.skipOnPointerObservable
      }
      _pickMove(kk) {
        const Fk = this._scene,
          Bk = Fk.AA(this._unTranslatedPointerX, this._unTranslatedPointerY, Fk.pointerMovePredicate, Fk.pointerMoveFastCheck, Fk.cameraToUseForPointers, Fk.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(Bk, kk, Fk), Bk
      }
      _updateMeshUnderPointer() {
        const kk = this._scene;
        if (!kk.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || kk.skipPointerMovePicking || !kk.cameraToUseForPointers && !kk.activeCamera) return;
        this._ensurePointerMovePredicate();
        const Fk = this._pointerX,
          Bk = this._pointerY,
          Rk = this._unTranslatedPointerX,
          tk = this._unTranslatedPointerY;
        for (const ak of this._latestPointerMoveEvents.values()) this._pointerX = ak.pointerX, this._pointerY = ak.pointerY, this._unTranslatedPointerX = ak.unTranslatedPointerX, this._unTranslatedPointerY = ak.unTranslatedPointerY, this._pickMove(ak.event);
        this._pointerX = Fk, this._pointerY = Bk, this._unTranslatedPointerX = Rk, this._unTranslatedPointerY = tk
      }
      _ensurePointerMovePredicate() {
        const kk = this._scene;
        kk.pointerMovePredicate || (kk.pointerMovePredicate = Fk => (Fk._isPointerMovePickable ?? Fk.ff) && Fk.isVisible && Fk.isReady() && Fk.isEnabled() && (Fk.enablePointerMoveEvents || kk.constantlyUpdateMeshUnderPointer || null !== Fk._getActionManagerForTrigger()) && (!kk.cameraToUseForPointers || 0 !== (kk.cameraToUseForPointers.layerMask & Fk.layerMask)))
      }
      _setCursorAndPointerOverMesh(kk, Fk, Bk) {
        const Rk = Bk.ne().getInputElement();
        if (kk?.pickedMesh) {
          if (this.setPointerOverMesh(kk.pickedMesh, Fk.pointerId, kk, Fk), !Bk.doNotHandleCursors && Rk && this._pointerOverMesh) {
            const kk = this._pointerOverMesh._getActionManagerForTrigger();
            kk && kk.hasPointerTriggers && (Rk.style.cursor = kk.hoverCursor || Bk.hoverCursor)
          }
        } else this.setPointerOverMesh(null, Fk.pointerId, kk, Fk)
      }
      simulatePointerMove(kk, Fk) {
        const Bk = new PointerEvent("pointermove", Fk);
        Bk.inputIndex = Sk.Move, this._checkPrePointerObservable(kk, Bk, Lk.c.POINTERMOVE) || this._processPointerMove(kk, Bk)
      }
      simulatePointerDown(kk, Fk) {
        const Bk = new PointerEvent("pointerdown", Fk);
        Bk.inputIndex = Bk.button + 2, this._checkPrePointerObservable(kk, Bk, Lk.c.POINTERDOWN) || this._processPointerDown(kk, Bk)
      }
      _processPointerDown(kk, Fk) {
        const Bk = this._scene;
        if (kk?.pickedMesh) {
          this._pickedDownMesh = kk.pickedMesh;
          const Rk = kk.pickedMesh._getActionManagerForTrigger();
          if (Rk) {
            if (Rk.hasPickTriggers) switch (Rk.processTrigger(5, new ek(kk.pickedMesh, Bk.pointerX, Bk.pointerY, kk.pickedMesh, Fk, kk)), Fk.button) {
              case 0:
                Rk.processTrigger(2, new ek(kk.pickedMesh, Bk.pointerX, Bk.pointerY, kk.pickedMesh, Fk, kk));
                break;
              case 1:
                Rk.processTrigger(4, new ek(kk.pickedMesh, Bk.pointerX, Bk.pointerY, kk.pickedMesh, Fk, kk));
                break;
              case 2:
                Rk.processTrigger(3, new ek(kk.pickedMesh, Bk.pointerX, Bk.pointerY, kk.pickedMesh, Fk, kk))
            }
            Rk.hasSpecificTrigger(8) && window.setTimeout((() => {
              const kk = Bk.AA(this._unTranslatedPointerX, this._unTranslatedPointerY, (kk => kk.ff && kk.isVisible && kk.isReady() && kk.actionManager && kk.actionManager.hasSpecificTrigger(8) && kk === this._pickedDownMesh), !1, Bk.cameraToUseForPointers);
              kk?.pickedMesh && Rk && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > Zk.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, Rk.processTrigger(8, ek.CreateNew(kk.pickedMesh, Fk)))
            }), Zk.LongPressDelay)
          }
        } else
          for (const ak of Bk._pointerDownStage) kk = ak.action(this._unTranslatedPointerX, this._unTranslatedPointerY, kk, Fk, !1);
        let Rk;
        const tk = Lk.c.POINTERDOWN;
        kk ? (Bk.onPointerDown && Bk.onPointerDown(Fk, kk, tk), Rk = new Lk.i(tk, Fk, kk), this._setRayOnPointerInfo(kk, Fk)) : Rk = new Lk.i(tk, Fk, null, this), Bk.onPointerObservable.hasObservers() && Bk.onPointerObservable.notifyObservers(Rk, tk)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(kk, Fk, Bk) {
        const Rk = new PointerEvent("pointerup", Fk);
        Rk.inputIndex = Sk.Move;
        const tk = new Ck;
        Bk ? tk.xs = !0 : tk.singleClick = !0, this._checkPrePointerObservable(kk, Rk, Lk.c.POINTERUP) || this._processPointerUp(kk, Rk, tk)
      }
      _processPointerUp(kk, Fk, Bk) {
        const Rk = this._scene;
        if (kk?.pickedMesh) {
          if (this._pickedUpMesh = kk.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (Rk.onPointerPick && Rk.onPointerPick(Fk, kk), Bk.singleClick && !Bk.ignore && Rk.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const Bk = Lk.c.POINTERPICK,
              tk = new Lk.i(Bk, Fk, kk);
            this._setRayOnPointerInfo(kk, Fk), Rk.onPointerObservable.notifyObservers(tk, Bk)
          }
          const tk = kk.pickedMesh._getActionManagerForTrigger();
          if (tk && !Bk.ignore) {
            tk.processTrigger(7, ek.CreateNew(kk.pickedMesh, Fk, kk)), !Bk.hasSwiped && Bk.singleClick && tk.processTrigger(1, ek.CreateNew(kk.pickedMesh, Fk, kk));
            const Rk = kk.pickedMesh._getActionManagerForTrigger(6);
            Bk.xs && Rk && Rk.processTrigger(6, ek.CreateNew(kk.pickedMesh, Fk, kk))
          }
        } else if (!Bk.ignore)
          for (const tk of Rk._pointerUpStage) kk = tk.action(this._unTranslatedPointerX, this._unTranslatedPointerY, kk, Fk, Bk.xs);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const kk = this._pickedDownMesh._getActionManagerForTrigger(16);
          kk && kk.processTrigger(16, ek.CreateNew(this._pickedDownMesh, Fk))
        }
        if (!Bk.ignore) {
          const tk = new Lk.i(Lk.c.POINTERUP, Fk, kk);
          if (this._setRayOnPointerInfo(kk, Fk), Rk.onPointerObservable.notifyObservers(tk, Lk.c.POINTERUP), Rk.onPointerUp && Rk.onPointerUp(Fk, kk, Lk.c.POINTERUP), !Bk.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let tk = 0;
            if (Bk.singleClick ? tk = Lk.c.POINTERTAP : Bk.xs && (tk = Lk.c.POINTERDOUBLETAP), tk) {
              const Bk = new Lk.i(tk, Fk, kk);
              Rk.onPointerObservable.hasObservers() && Rk.onPointerObservable.hasSpecificMask(tk) && Rk.onPointerObservable.notifyObservers(Bk, tk)
            }
          }
        }
      }
      isPointerCaptured() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[kk]
      }
      attachControl() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const tk = this._scene,
          ak = tk.ne();
        Rk || (Rk = ak.getInputElement()), this._alreadyAttached && this.detachControl(), Rk && (this._alreadyAttachedTo = Rk), this._deviceSourceManager = new hk(ak), this._initActionManager = kk => {
          if (!this._meshPickProceed) {
            const Fk = tk.skipPointerUpPicking || 0 === tk._registeredActions && !this._checkForPicking() && !tk.onPointerUp ? null : tk.AA(this._unTranslatedPointerX, this._unTranslatedPointerY, tk.pointerUpPredicate, tk.pointerUpFastCheck, tk.cameraToUseForPointers, tk.pointerUpTrianglePredicate);
            this._currentPickResult = Fk, Fk && (kk = Fk.hit && Fk.pickedMesh ? Fk.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return kk
        }, this._delayedSimpleClick = (kk, Fk, Bk) => {
          if ((Date.now() - this._previousStartingPointerTime > Zk.DoubleClickDelay && !this._doubleClickOccured || kk !== this._previousButtonPressed) && (this._doubleClickOccured = !1, Fk.singleClick = !0, Fk.ignore = !1, this._delayedClicks[kk])) {
            const Fk = this._delayedClicks[kk].evt,
              Bk = Lk.c.POINTERTAP,
              Rk = new Lk.i(Bk, Fk, this._currentPickResult);
            tk.onPointerObservable.hasObservers() && tk.onPointerObservable.hasSpecificMask(Bk) && tk.onPointerObservable.notifyObservers(Rk, Bk), this._delayedClicks[kk] = null
          }
        }, this._initClickEvent = (kk, Fk, Bk, Rk) => {
          const tk = new Ck;
          this._currentPickResult = null;
          let ak = null,
            Xk = kk.hasSpecificMask(Lk.c.POINTERPICK) || Fk.hasSpecificMask(Lk.c.POINTERPICK) || kk.hasSpecificMask(Lk.c.POINTERTAP) || Fk.hasSpecificMask(Lk.c.POINTERTAP) || kk.hasSpecificMask(Lk.c.POINTERDOUBLETAP) || Fk.hasSpecificMask(Lk.c.POINTERDOUBLETAP);
          !Xk && Ok && (ak = this._initActionManager(ak, tk), ak && (Xk = ak.hasPickTriggers));
          let bk = !1;
          if (Xk = Xk && !this._isMultiTouchGesture, Xk) {
            const Xk = Bk.button;
            if (tk.hasSwiped = this._isPointerSwiping(), !tk.hasSwiped) {
              let wk = !Zk.ExclusiveDoubleClickMode;
              if (wk || (wk = !kk.hasSpecificMask(Lk.c.POINTERDOUBLETAP) && !Fk.hasSpecificMask(Lk.c.POINTERDOUBLETAP), wk && !Ok.HasSpecificTrigger(6) && (ak = this._initActionManager(ak, tk), ak && (wk = !ak.hasSpecificTrigger(6)))), wk)(Date.now() - this._previousStartingPointerTime > Zk.DoubleClickDelay || Xk !== this._previousButtonPressed) && (tk.singleClick = !0, Rk(tk, this._currentPickResult), bk = !0);
              else {
                const kk = {
                  evt: Bk,
                  clickInfo: tk,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, Xk, tk, Rk), Zk.DoubleClickDelay)
                };
                this._delayedClicks[Xk] = kk
              }
              let dk = kk.hasSpecificMask(Lk.c.POINTERDOUBLETAP) || Fk.hasSpecificMask(Lk.c.POINTERDOUBLETAP);
              !dk && Ok.HasSpecificTrigger(6) && (ak = this._initActionManager(ak, tk), ak && (dk = ak.hasSpecificTrigger(6))), dk && (Xk === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < Zk.DoubleClickDelay && !this._doubleClickOccured ? (tk.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Xk, Zk.ExclusiveDoubleClickMode ? (this._delayedClicks[Xk] && (clearTimeout(this._delayedClicks[Xk]?.timeoutId), this._delayedClicks[Xk] = null), Rk(tk, this._previousPickResult)) : Rk(tk, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, tk.xs = !0, tk.ignore = !1, Zk.ExclusiveDoubleClickMode && this._delayedClicks[Xk] && (clearTimeout(this._delayedClicks[Xk]?.timeoutId), this._delayedClicks[Xk] = null), Rk(tk, this._currentPickResult)), bk = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Xk))
            }
          }
          bk || Rk(tk, this._currentPickResult)
        }, this._onPointerMove = kk => {
          if (this._updatePointerPosition(kk), this._latestPointerMoveEvents.set(kk.pointerId, {
              event: kk,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > Zk.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > Zk.DragMovementThreshold), ak.isPointerLock && ak._verifyPointerLock(), this._checkPrePointerObservable(null, kk, kk.inputIndex >= Sk.MouseWheelX && kk.inputIndex <= Sk.MouseWheelZ ? Lk.c.POINTERWHEEL : Lk.c.POINTERMOVE)) return;
          if (!tk.cameraToUseForPointers && !tk.activeCamera) return;
          if (tk.skipPointerMovePicking) return void this._processPointerMove(new Ak.c, kk);
          this._ensurePointerMovePredicate();
          const Fk = tk._registeredActions > 0 || tk.constantlyUpdateMeshUnderPointer ? this._pickMove(kk) : null;
          this._processPointerMove(Fk, kk)
        }, this._onPointerDown = kk => {
          const Fk = this._activePointerIds.indexOf(-1);
          if (-1 === Fk ? this._activePointerIds.push(kk.pointerId) : this._activePointerIds[Fk] = kk.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, Zk.ExclusiveDoubleClickMode)
            for (let Rk = 0; Rk < this._delayedClicks.length; Rk++)
              if (this._delayedClicks[Rk])
                if (kk.button === Rk) clearTimeout(this._delayedClicks[Rk]?.timeoutId);
                else {
                  const kk = this._delayedClicks[Rk].clickInfo;
                  this._doubleClickOccured = !1, kk.singleClick = !0, kk.ignore = !1;
                  const Fk = this._delayedClicks[Rk].evt,
                    Bk = Lk.c.POINTERTAP,
                    ak = new Lk.i(Bk, Fk, this._currentPickResult);
                  tk.onPointerObservable.hasObservers() && tk.onPointerObservable.hasSpecificMask(Bk) && tk.onPointerObservable.notifyObservers(ak, Bk), this._delayedClicks[Rk] = null
                } if (this._updatePointerPosition(kk), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = kk.button), tk.preventDefaultOnPointerDown && Rk && (kk.preventDefault(), Rk.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, kk, Lk.c.POINTERDOWN)) return;
          if (!tk.cameraToUseForPointers && !tk.activeCamera) return;
          let Bk;
          this._pointerCaptures[kk.pointerId] = !0, tk.pointerDownPredicate || (tk.pointerDownPredicate = kk => kk.ff && kk.isVisible && kk.isReady() && kk.isEnabled() && (!tk.cameraToUseForPointers || 0 !== (tk.cameraToUseForPointers.layerMask & kk.layerMask))), this._pickedDownMesh = null, Bk = tk.skipPointerDownPicking || 0 === tk._registeredActions && !this._checkForPicking() && !tk.onPointerDown ? new Ak.c : tk.AA(this._unTranslatedPointerX, this._unTranslatedPointerY, tk.pointerDownPredicate, tk.pointerDownFastCheck, tk.cameraToUseForPointers, tk.pointerDownTrianglePredicate), this._processPointerDown(Bk, kk)
        }, this._onPointerUp = kk => {
          const Fk = this._activePointerIds.indexOf(kk.pointerId); - 1 !== Fk && (this._activePointerIds[Fk] = -1, this._activePointerIdsCount--, "touch" === kk.pointerType && this._latestPointerMoveEvents.delete(kk.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(kk), tk.preventDefaultOnPointerUp && Rk && (kk.preventDefault(), Rk.focus()), this._initClickEvent(tk.onPrePointerObservable, tk.onPointerObservable, kk, ((Fk, Bk) => {
            if (tk.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !Fk.ignore)) {
              if (this._checkPrePointerObservable(null, kk, Lk.c.POINTERUP)) return this._swipeButtonPressed === kk.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === kk.buttons && (this._pointerCaptures[kk.pointerId] = !1));
              Fk.hasSwiped || (Fk.singleClick && tk.onPrePointerObservable.hasSpecificMask(Lk.c.POINTERTAP) && this._checkPrePointerObservable(null, kk, Lk.c.POINTERTAP) && (this._skipPointerTap = !0), Fk.xs && tk.onPrePointerObservable.hasSpecificMask(Lk.c.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, kk, Lk.c.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[kk.pointerId] ? (0 === kk.buttons && (this._pointerCaptures[kk.pointerId] = !1), (tk.cameraToUseForPointers || tk.activeCamera) && (tk.pointerUpPredicate || (tk.pointerUpPredicate = kk => kk.ff && kk.isVisible && kk.isReady() && kk.isEnabled() && (!tk.cameraToUseForPointers || 0 !== (tk.cameraToUseForPointers.layerMask & kk.layerMask))), !this._meshPickProceed && (Ok && Ok.HasTriggers || this._checkForPicking() || tk.onPointerUp) && this._initActionManager(null, Fk), Bk || (Bk = this._currentPickResult), this._processPointerUp(Bk, kk, Fk), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === kk.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === kk.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = kk => {
          const Fk = Uk.e.KEYDOWN;
          if (tk.onPreKeyboardObservable.hasObservers()) {
            const Bk = new Uk.h(Fk, kk);
            if (tk.onPreKeyboardObservable.notifyObservers(Bk, Fk), Bk.skipOnKeyboardObservable) return
          }
          if (tk.onKeyboardObservable.hasObservers()) {
            const Bk = new Uk.j(Fk, kk);
            tk.onKeyboardObservable.notifyObservers(Bk, Fk)
          }
          tk.actionManager && tk.actionManager.processTrigger(14, ek.CreateNewFromScene(tk, kk))
        }, this._onKeyUp = kk => {
          const Fk = Uk.e.KEYUP;
          if (tk.onPreKeyboardObservable.hasObservers()) {
            const Bk = new Uk.h(Fk, kk);
            if (tk.onPreKeyboardObservable.notifyObservers(Bk, Fk), Bk.skipOnKeyboardObservable) return
          }
          if (tk.onKeyboardObservable.hasObservers()) {
            const Bk = new Uk.j(Fk, kk);
            tk.onKeyboardObservable.notifyObservers(Bk, Fk)
          }
          tk.actionManager && tk.actionManager.processTrigger(15, ek.CreateNewFromScene(tk, kk))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((Rk => {
          Rk.deviceType === Ek.Mouse ? Rk.onInputChangedObservable.add((tk => {
            this._originMouseEvent = tk, tk.inputIndex === Sk.LeftClick || tk.inputIndex === Sk.MiddleClick || tk.inputIndex === Sk.RightClick || tk.inputIndex === Sk.BrowserBack || tk.inputIndex === Sk.BrowserForward ? Fk && 1 === Rk.getInput(tk.inputIndex) ? this._onPointerDown(tk) : kk && 0 === Rk.getInput(tk.inputIndex) && this._onPointerUp(tk) : Bk && (tk.inputIndex === Sk.Move ? this._onPointerMove(tk) : tk.inputIndex !== Sk.MouseWheelX && tk.inputIndex !== Sk.MouseWheelY && tk.inputIndex !== Sk.MouseWheelZ || this._onPointerMove(tk))
          })) : Rk.deviceType === Ek.Touch ? Rk.onInputChangedObservable.add((tk => {
            tk.inputIndex === Sk.LeftClick && (Fk && 1 === Rk.getInput(tk.inputIndex) ? (this._onPointerDown(tk), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : kk && 0 === Rk.getInput(tk.inputIndex) && (this._onPointerUp(tk), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), Bk && tk.inputIndex === Sk.Move && this._onPointerMove(tk)
          })) : Rk.deviceType === Ek.Keyboard && Rk.onInputChangedObservable.add((kk => {
            "keydown" === kk.type ? this._onKeyDown(kk) : "keyup" === kk.type && this._onKeyUp(kk)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0,
          Rk = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[Fk] === kk && (!kk || !kk._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const tk = this._meshUnderPointerId[Fk];
        let ak;
        tk && (ak = tk._getActionManagerForTrigger(10), ak && ak.processTrigger(10, new ek(tk, this._pointerX, this._pointerY, kk, Rk, {
          pointerId: Fk
        }))), kk ? (this._meshUnderPointerId[Fk] = kk, this._pointerOverMesh = kk, ak = kk._getActionManagerForTrigger(9), ak && ak.processTrigger(9, new ek(kk, this._pointerX, this._pointerY, kk, Rk, {
          pointerId: Fk,
          pickResult: Bk
        }))) : (delete this._meshUnderPointerId[Fk], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: kk,
          pointerId: Fk
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(kk) {
        this._pointerOverMesh === kk && (this._pointerOverMesh = null), this._pickedDownMesh === kk && (this._pickedDownMesh = null), this._pickedUpMesh === kk && (this._pickedUpMesh = null);
        for (const Fk in this._meshUnderPointerId) this._meshUnderPointerId[Fk] === kk && delete this._meshUnderPointerId[Fk]
      }
    }
    Zk.DragMovementThreshold = 10, Zk.LongPressDelay = 500, Zk.DoubleClickDelay = 300, Zk.ExclusiveDoubleClickMode = !1;
    var pk = Bk(39347),
      Kk = Bk(36917),
      xk = Bk(37459);
    class jk {
      static get UniqueId() {
        const kk = this._UniqueIdCounter;
        return this._UniqueIdCounter++, kk
      }
    }
    jk._UniqueIdCounter = 1;
    var lk = Bk(39436),
      nk = Bk(39606),
      Ik = Bk(36768);
    class Qk {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var kF, FF, BF, RF, tF, aF, XF, bF, wF, dF, sF, VF, JF, AF, eF, yF, fF, mF, WF, vF, iF, YF, oF, LF, OF, EF, SF, NF, HF, uF, MF, gF, UF, cF, GF, TF, rF, DF, zF, PF, hF, qF, CF, ZF, pF, KF, xF, jF, lF, nF, IF, QF, kB, FB = Bk(38320),
      BB = Bk(36798);
    const RB = new sk.v,
      tB = new sk.v;
    var aB;
    ! function(kk) {
      kk[kk.BackwardCompatible = 0] = "BackwardCompatible", kk[kk.Intermediate = 1] = "Intermediate", kk[kk.Aggressive = 2] = "Aggressive"
    }(aB || (aB = {}));
    class XB {
      static DefaultMaterialFactory(kk) {
        throw (0, Yk.i)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, Yk.i)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(kk) {
        kk !== this._clearColor && (this._clearColor = kk, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(kk) {
        if (kk !== this._performancePriority) {
          switch (this._performancePriority = kk, kk) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(kk)
        }
      }
      set forceWireframe(kk) {
        this._forceWireframe !== kk && (this._forceWireframe = kk, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(kk) {
        this._skipFrustumClipping !== kk && (this._skipFrustumClipping = kk)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(kk) {
        this._forcePointsCloud !== kk && (this._forcePointsCloud = kk, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(kk) {
        this._environmentTexture !== kk && (this._environmentTexture = kk, this.onEnvironmentTextureChangedObservable.notifyObservers(kk), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let kk = [];
        kk = kk.concat(this.meshes), kk = kk.concat(this.lights), kk = kk.concat(this.cameras), kk = kk.concat(this.transformNodes);
        for (const Fk of this.skeletons) kk = kk.concat(Fk.bones);
        return kk
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(kk) {
        this._animationPropertiesOverride = kk
      }
      set onDispose(kk) {
        this._onDisposeObserver && this.yN.remove(this._onDisposeObserver), this._onDisposeObserver = this.yN.add(kk)
      }
      set beforeRender(kk) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), kk && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(kk))
      }
      set afterRender(kk) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), kk && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(kk))
      }
      set beforeCameraRender(kk) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(kk)
      }
      set afterCameraRender(kk) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(kk)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(kk) {
        this._pointerPickingConfiguration.pointerDownPredicate = kk
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(kk) {
        this._pointerPickingConfiguration.pointerUpPredicate = kk
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(kk) {
        this._pointerPickingConfiguration.pointerMovePredicate = kk
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(kk) {
        this._pointerPickingConfiguration.pointerDownFastCheck = kk
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(kk) {
        this._pointerPickingConfiguration.pointerUpFastCheck = kk
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(kk) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = kk
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(kk) {
        this._pointerPickingConfiguration.skipPointerMovePicking = kk
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(kk) {
        this._pointerPickingConfiguration.skipPointerDownPicking = kk
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(kk) {
        this._pointerPickingConfiguration.skipPointerUpPicking = kk
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return Zk.DragMovementThreshold
      }
      static set DragMovementThreshold(kk) {
        Zk.DragMovementThreshold = kk
      }
      static get LongPressDelay() {
        return Zk.LongPressDelay
      }
      static set LongPressDelay(kk) {
        Zk.LongPressDelay = kk
      }
      static get DoubleClickDelay() {
        return Zk.DoubleClickDelay
      }
      static set DoubleClickDelay(kk) {
        Zk.DoubleClickDelay = kk
      }
      static get ExclusiveDoubleClickMode() {
        return Zk.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(kk) {
        Zk.ExclusiveDoubleClickMode = kk
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? sk.s.ZeroReadOnly
      }
      bindEyePosition(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Rk = this._eyePosition,
          tk = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          ak = this.floatingOriginOffset,
          Xk = RB.set(Rk.x, Rk.y, Rk.z, tk ? -1 : 1),
          bk = Xk.subtractFromFloatsToRef(ak.x, ak.y, ak.z, 0, tB);
        return kk && (Bk ? kk.setFloat3(Fk, bk.x, bk.y, bk.z) : kk.setVector4(Fk, bk)), Xk
      }
      finalizeSceneUbo() {
        const kk = this.getSceneUniformBuffer(),
          Fk = this.bindEyePosition(null),
          Bk = this.floatingOriginOffset;
        return kk.updateFloat4("vEyePosition", Fk.x - Bk.x, Fk.y - Bk.y, Fk.z - Bk.z, Fk.w), kk.update(), kk
      }
      set useRightHandedSystem(kk) {
        this._useRightHandedSystem !== kk && (this._useRightHandedSystem = kk, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(kk) {
        this._currentStepId = kk
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(kk) {
        this._fogEnabled !== kk && (this._fogEnabled = kk, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(kk) {
        this._fogMode !== kk && (this._fogMode = kk, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(kk) {
        this._shadowsEnabled !== kk && (this._shadowsEnabled = kk, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(kk) {
        this._lightsEnabled !== kk && (this._lightsEnabled = kk, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(kk) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), kk && (this._unObserveActiveCameras = (0, Ik.j)(kk, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = kk
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(kk) {
        kk !== this._activeCamera && (this._activeCamera = kk, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return XB.DefaultMaterialFactory !== XB._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = XB.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(kk) {
        this._defaultMaterial = kk
      }
      set texturesEnabled(kk) {
        this._texturesEnabled !== kk && (this._texturesEnabled = kk, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(kk) {
        if (this._frameGraph) return this._frameGraph = kk, void(kk || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = kk, kk && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(kk) {
        this._skeletonsEnabled !== kk && (this._skeletonsEnabled = kk, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = XB.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const kk of this._transientComponents) kk.register();
          this._transientComponents.length = 0
        }
      }
      SBk(kk) {
        this._components.push(kk), this._transientComponents.push(kk);
        const Fk = kk;
        Fk.addFromContainer && Fk.serialize && this._serializableComponents.push(Fk)
      }
      _getComponent(kk) {
        for (const Fk of this._components)
          if (Fk.name === kk) return Fk;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(kk, Fk) {
        this._inputManager = new Zk(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new Kk.i(.2, .2, .3, 1), this.onClearColorChangedObservable = new Xk.e, this.ambientColor = new Kk.e(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new Xk.e, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.fY = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.yN = new Xk.e, this._onDisposeObserver = null, this.onBeforeRenderObservable = new Xk.e, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new Xk.e, this.onAfterRenderCameraObservable = new Xk.e, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new Xk.e, this.onAfterAnimationsObservable = new Xk.e, this.onBeforeDrawPhaseObservable = new Xk.e, this.onAfterDrawPhaseObservable = new Xk.e, this.onReadyObservable = new Xk.e, this.onBeforeCameraRenderObservable = new Xk.e, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new Xk.e, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new Xk.e, this.onAfterActiveMeshesEvaluationObservable = new Xk.e, this.onBeforeParticlesRenderingObservable = new Xk.e, this.onAfterParticlesRenderingObservable = new Xk.e, this.onDataLoadedObservable = new Xk.e, this.onNewCameraAddedObservable = new Xk.e, this.onCameraRemovedObservable = new Xk.e, this.onNewLightAddedObservable = new Xk.e, this.onLightRemovedObservable = new Xk.e, this.onNewGeometryAddedObservable = new Xk.e, this.onGeometryRemovedObservable = new Xk.e, this.onNewTransformNodeAddedObservable = new Xk.e, this.onTransformNodeRemovedObservable = new Xk.e, this.onNewMeshAddedObservable = new Xk.e, this.onMeshRemovedObservable = new Xk.e, this.onNewSkeletonAddedObservable = new Xk.e, this.onSkeletonRemovedObservable = new Xk.e, this.onNewParticleSystemAddedObservable = new Xk.e, this.onParticleSystemRemovedObservable = new Xk.e, this.onNewAnimationGroupAddedObservable = new Xk.e, this.onAnimationGroupRemovedObservable = new Xk.e, this.onNewMaterialAddedObservable = new Xk.e, this.onNewMultiMaterialAddedObservable = new Xk.e, this.onMaterialRemovedObservable = new Xk.e, this.onMultiMaterialRemovedObservable = new Xk.e, this.onNewTextureAddedObservable = new Xk.e, this.onTextureRemovedObservable = new Xk.e, this.onNewFrameGraphAddedObservable = new Xk.e, this.onFrameGraphRemovedObservable = new Xk.e, this.onNewObjectRendererAddedObservable = new Xk.e, this.onObjectRendererRemovedObservable = new Xk.e, this.onNewPostProcessAddedObservable = new Xk.e, this.onPostProcessRemovedObservable = new Xk.e, this.onNewEffectLayerAddedObservable = new Xk.e, this.onEffectLayerRemovedObservable = new Xk.e, this.onBeforeRenderTargetsRenderObservable = new Xk.e, this.onAfterRenderTargetsRenderObservable = new Xk.e, this.onBeforeStepObservable = new Xk.e, this.onAfterStepObservable = new Xk.e, this.onActiveCameraChanged = new Xk.e, this.onActiveCamerasChanged = new Xk.e, this.onBeforeRenderingGroupObservable = new Xk.e, this.onAfterRenderingGroupObservable = new Xk.e, this.onMeshImportedObservable = new Xk.e, this.onAnimationFileImportedObservable = new Xk.e, this.onEnvironmentTextureChangedObservable = new Xk.e, this.onMeshUnderPointerUpdatedObservable = new Xk.e, this._registeredForLateAnimationBindings = new bk.b(256), this._pointerPickingConfiguration = new Qk, this.onPrePointerObservable = new Xk.e, this.onPointerObservable = new Xk.e, this.onPreKeyboardObservable = new Xk.e, this.onKeyboardObservable = new Xk.e, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = XB.FOGMODE_NONE, this.fogColor = new Kk.e(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.IU = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new sk.s(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new bk.b(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new pk.b, this._activeIndices = new pk.b, this._activeParticles = new pk.b, this._activeBones = new pk.b, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new bk.c(256), this._processedMaterials = new bk.c(256), this._renderTargets = new bk.b(256), this._materialsRenderTargets = new bk.b(256), this._activeParticleSystems = new bk.c(256), this._activeSkeletons = new bk.b(32), this._softwareSkinnedMeshes = new bk.b(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = sk.c.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = Wk.f.Create(), this._beforeClearStage = Wk.f.Create(), this._beforeRenderTargetClearStage = Wk.f.Create(), this._gatherRenderTargetsStage = Wk.f.Create(), this._gatherActiveCameraRenderTargetsStage = Wk.f.Create(), this._isReadyForMeshStage = Wk.f.Create(), this._beforeEvaluateActiveMeshStage = Wk.f.Create(), this._evaluateSubMeshStage = Wk.f.Create(), this._preActiveMeshStage = Wk.f.Create(), this._cameraDrawRenderTargetStage = Wk.f.Create(), this._beforeCameraDrawStage = Wk.f.Create(), this._beforeRenderTargetDrawStage = Wk.f.Create(), this._beforeRenderingGroupDrawStage = Wk.f.Create(), this._beforeRenderingMeshStage = Wk.f.Create(), this._afterRenderingMeshStage = Wk.f.Create(), this._afterRenderingGroupDrawStage = Wk.f.Create(), this._afterCameraDrawStage = Wk.f.Create(), this._afterCameraPostProcessStage = Wk.f.Create(), this._afterRenderTargetDrawStage = Wk.f.Create(), this._afterRenderTargetPostProcessStage = Wk.f.Create(), this._afterRenderStage = Wk.f.Create(), this._pointerMoveStage = Wk.f.Create(), this._pointerDownStage = Wk.f.Create(), this._pointerUpStage = Wk.f.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new Xk.e, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const Bk = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...Fk
        };
        this.defaultCameraLayerMask = Bk.defaultCameraLayerMask, this.defaultRenderableLayerMask = Bk.defaultRenderableLayerMask, kk = this._engine = kk || ik.c.LastCreatedEngine, Bk.virtual ? kk._virtualScenes.push(this) : (ik.c._LastCreatedScene = this, kk.scenes.push(this)), (kk.getCreationOptions().useLargeWorldRendering || Fk?.useFloatingOrigin) && ((0, fk.f)(), this._floatingOriginScene = this, fk.e.XN = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new mk.e(this), yk.d && (this.postProcessManager = new yk.d(this)), (0, vk.j)() && this.attachControl(), this._createUbo(), Vk.b && (this._imageProcessingConfiguration = new Vk.b), this.setDefaultCandidateProviders(), Bk.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = Bk.useMaterialMeshMap, this.useClonedMeshMap = Bk.useClonedMeshMap, Fk && Fk.virtual || kk.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(kk) {
        return this._defaultSubMeshCandidates.data = kk.AY, this._defaultSubMeshCandidates.length = kk.AY.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = kk => this._getDefaultSubMeshCandidates(kk), this.getIntersectingSubMeshCandidates = (kk, Fk) => this._getDefaultSubMeshCandidates(kk), this.getCollidingSubMeshCandidates = (kk, Fk) => this._getDefaultSubMeshCandidates(kk)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(kk) {
        this._inputManager.pointerX = kk
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(kk) {
        this._inputManager.pointerY = kk
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
      isCachedMaterialInvalid(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== Fk || this._cachedMaterial !== kk || this._cachedVisibility !== Bk
      }
      ne() {
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
      simulatePointerMove(kk, Fk) {
        return this._inputManager.simulatePointerMove(kk, Fk), this
      }
      simulatePointerDown(kk, Fk) {
        return this._inputManager.simulatePointerDown(kk, Fk), this
      }
      simulatePointerUp(kk, Fk, Bk) {
        return this._inputManager.simulatePointerUp(kk, Fk, Bk), this
      }
      isPointerCaptured() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(kk)
      }
      attachControl() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(kk, Fk, Bk)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let kk, Fk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const Bk = this.ne(),
          Rk = Bk.currentRenderPassId;
        Bk.currentRenderPassId = this.activeCamera?.renderPassId ?? Rk;
        let tk = !0;
        for (this._pendingData.length > 0 && (tk = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && tk && (tk = this.depthPeelingRenderer.isReady()), Fk && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), kk = 0; kk < this.meshes.length; kk++) {
          const Rk = this.meshes[kk];
          if (!Rk.AY || 0 === Rk.AY.length) continue;
          if (!Rk.isReady(!0)) {
            tk = !1;
            continue
          }
          const ak = Rk.hasThinInstances || "InstancedMesh" === Rk.getClassName() || "InstancedLinesMesh" === Rk.getClassName() || Bk.getCaps().instancedArrays && Rk.instances.length > 0;
          for (let kk = 0, Fk = this._isReadyForMeshStage; kk < Fk.length; kk++) {
            Fk[kk].action(Rk, ak) || (tk = !1)
          }
          if (!Fk) continue;
          const Xk = Rk.material || this.defaultMaterial;
          if (Xk)
            if (Xk._storeEffectOnSubMeshes)
              for (const kk of Rk.AY) {
                const Fk = kk.Ry();
                Fk && Fk.hasRenderTargetTextures && null != Fk.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Fk) && (this._processedMaterials.push(Fk), this._materialsRenderTargets.concatWithNoDuplicate(Fk.getRenderTargetTextures()))
              } else Xk.hasRenderTargetTextures && null != Xk.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Xk) && (this._processedMaterials.push(Xk), this._materialsRenderTargets.concatWithNoDuplicate(Xk.getRenderTargetTextures()))
        }
        if (Fk) {
          for (kk = 0; kk < this._materialsRenderTargets.length; ++kk) {
            this._materialsRenderTargets.data[kk].isReadyForRendering() || (tk = !1)
          }
          for (kk = 0; kk < this.customRenderTargets.length; ++kk) {
            this.customRenderTargets[kk].isReadyForRendering() || (tk = !1)
          }
        }
        for (kk = 0; kk < this.geometries.length; kk++) {
          2 === this.geometries[kk].delayLoadState && (tk = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const ak of this.activeCameras) ak.isReady(!0) || (tk = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (tk = !1));
        for (const ak of this.fY) ak.isReady() || (tk = !1);
        if (this.proceduralTexturesEnabled)
          for (const ak of this.proceduralTextures) ak.isReady() || (tk = !1);
        if (this.layers)
          for (const ak of this.layers) ak.isReady() || (tk = !1);
        if (this.effectLayers)
          for (const ak of this.effectLayers) ak.isLayerReady() || (tk = !1);
        for (const ak of this._isReadyChecks) ak.isReady() || (tk = !1);
        return Bk.areAllEffectsReady() || (tk = !1), Bk.currentRenderPassId = Rk, tk
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(kk) {
        this.onBeforeRenderObservable.add(kk)
      }
      unregisterBeforeRender(kk) {
        this.onBeforeRenderObservable.removeCallback(kk)
      }
      registerAfterRender(kk) {
        this.onAfterRenderObservable.add(kk)
      }
      unregisterAfterRender(kk) {
        this.onAfterRenderObservable.removeCallback(kk)
      }
      _executeOnceBeforeRender(kk) {
        const Fk = () => {
          kk(), setTimeout((() => {
            this.unregisterBeforeRender(Fk)
          }))
        };
        this.registerBeforeRender(Fk)
      }
      executeOnceBeforeRender(kk, Fk) {
        void 0 !== Fk ? setTimeout((() => {
          this._executeOnceBeforeRender(kk)
        }), Fk) : this._executeOnceBeforeRender(kk)
      }
      addPendingData(kk) {
        this._pendingData.push(kk)
      }
      removePendingData(kk) {
        const Fk = this.isLoading,
          Bk = this._pendingData.indexOf(kk); - 1 !== Bk && this._pendingData.splice(Bk, 1), Fk && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(kk) {
        -1 === this._isReadyChecks.indexOf(kk) && this._isReadyChecks.push(kk)
      }
      removeIsReadyCheck(kk) {
        const Fk = this._isReadyChecks.indexOf(kk); - 1 !== Fk && this._isReadyChecks.splice(Fk, 1)
      }
      executeWhenReady(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(kk), null === this._executeWhenReadyTimeoutId && this._checkIsReady(Fk)
      }
      async whenReadyAsync() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((Fk => {
          this.executeWhenReady((() => {
            Fk()
          }), kk)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = ak.e.Now;
        else if (this.onReadyTimeoutDuration > 0 && ak.e.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(kk)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(kk)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = ak.e.Now
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
      setTransformMatrix(kk, Fk, Bk, Rk) {
        this._multiviewSceneUboIsActive = !!(Bk && Rk && this._multiviewSceneUbo), this._viewUpdateFlag === kk.updateFlag && this._projectionUpdateFlag === Fk.updateFlag || (this._viewUpdateFlag = kk.updateFlag, this._projectionUpdateFlag = Fk.updateFlag, this._viewMatrix = kk, this._projectionMatrix = Fk, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new sk.c), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? xk.c.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = xk.c.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(Bk, Rk) : this._sceneUbo.useUbo && (this._sceneUbo.M_("viewProjection", this._transformMatrix), this._sceneUbo.M_("view", this._viewMatrix), this._sceneUbo.M_("projection", this._projectionMatrix), this._sceneUbo.M_("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(kk, Fk) {
        const Bk = "boolean" === typeof Fk ? Fk : Fk?.trackUBOsInFrame,
          Rk = new Jk.e(this._engine, void 0, !1, kk ?? "ef", void 0, Bk);
        return Rk.addUniform("viewProjection", 16), Rk.addUniform("view", 16), Rk.addUniform("projection", 16), Rk.addUniform("vEyePosition", 4), Rk.addUniform("inverseProjection", 16), Rk
      }
      setSceneUniformBuffer(kk) {
        this._sceneUbo = kk, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : sk.s.ZeroReadOnly
      }
      getUniqueId() {
        return jk.UniqueId
      }
      qBk(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(kk), kk._resyncLightSources(), kk.parent || kk._addToSceneRootNodes(), tk.e.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(kk)
          })), Fk)) {
          const Fk = kk.getChildMeshes();
          for (const kk of Fk) this.qBk(kk)
        }
      }
      hN(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Bk = this.meshes.indexOf(kk);
        if (-1 !== Bk && (this.meshes.splice(Bk, 1), kk.parent || kk._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(kk), this.onMeshRemovedObservable.notifyObservers(kk), Fk) {
          const Fk = kk.getChildMeshes();
          for (const kk of Fk) this.hN(kk)
        }
        return Bk
      }
      addTransformNode(kk) {
        this._blockEntityCollection || kk.XN() === this && -1 !== kk._indexInSceneTransformNodesArray || (kk._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(kk), kk.parent || kk._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(kk))
      }
      removeTransformNode(kk) {
        const Fk = kk._indexInSceneTransformNodesArray;
        if (-1 !== Fk) {
          if (Fk !== this.transformNodes.length - 1) {
            const kk = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[Fk] = kk, kk._indexInSceneTransformNodesArray = Fk
          }
          kk._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), kk.parent || kk._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(kk), Fk
      }
      removeSkeleton(kk) {
        const Fk = this.skeletons.indexOf(kk);
        return -1 !== Fk && (this.skeletons.splice(Fk, 1), this.onSkeletonRemovedObservable.notifyObservers(kk), this._executeActiveContainerCleanup(this._activeSkeletons)), Fk
      }
      removeMorphTargetManager(kk) {
        const Fk = this.morphTargetManagers.indexOf(kk);
        return -1 !== Fk && this.morphTargetManagers.splice(Fk, 1), Fk
      }
      removeLight(kk) {
        const Fk = this.lights.indexOf(kk);
        if (-1 !== Fk) {
          for (const Fk of this.meshes) Fk._removeLightSource(kk, !1);
          this.lights.splice(Fk, 1), this.sortLightsByPriority(), kk.parent || kk._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(kk)
        }
        return Fk
      }
      removeCamera(kk) {
        const Fk = this.cameras.indexOf(kk);
        if (-1 !== Fk && (this.cameras.splice(Fk, 1), kk.parent || kk._removeFromSceneRootNodes()), this.activeCameras) {
          const Fk = this.activeCameras.indexOf(kk); - 1 !== Fk && this.activeCameras.splice(Fk, 1)
        }
        return this.activeCamera === kk && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(kk), Fk
      }
      removeParticleSystem(kk) {
        const Fk = this.fY.indexOf(kk);
        return -1 !== Fk && (this.fY.splice(Fk, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(kk), Fk
      }
      removeAnimation(kk) {
        const Fk = this.animations.indexOf(kk);
        return -1 !== Fk && this.animations.splice(Fk, 1), Fk
      }
      stopAnimation(kk, Fk, Bk) {}
      removeAnimationGroup(kk) {
        const Fk = this.animationGroups.indexOf(kk);
        return -1 !== Fk && this.animationGroups.splice(Fk, 1), this.onAnimationGroupRemovedObservable.notifyObservers(kk), Fk
      }
      removeMultiMaterial(kk) {
        const Fk = this.multiMaterials.indexOf(kk);
        return -1 !== Fk && this.multiMaterials.splice(Fk, 1), this.onMultiMaterialRemovedObservable.notifyObservers(kk), Fk
      }
      removeMaterial(kk) {
        const Fk = kk._indexInSceneMaterialArray;
        if (-1 !== Fk && Fk < this.materials.length) {
          if (Fk !== this.materials.length - 1) {
            const kk = this.materials[this.materials.length - 1];
            this.materials[Fk] = kk, kk._indexInSceneMaterialArray = Fk
          }
          kk._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(kk), Fk
      }
      removeActionManager(kk) {
        const Fk = this.actionManagers.indexOf(kk);
        return -1 !== Fk && this.actionManagers.splice(Fk, 1), Fk
      }
      removeTexture(kk) {
        const Fk = this.textures.indexOf(kk);
        return -1 !== Fk && this.textures.splice(Fk, 1), this.onTextureRemovedObservable.notifyObservers(kk), Fk
      }
      removeFrameGraph(kk) {
        const Fk = this.frameGraphs.indexOf(kk);
        return -1 !== Fk && this.frameGraphs.splice(Fk, 1), this.onFrameGraphRemovedObservable.notifyObservers(kk), Fk
      }
      removeObjectRenderer(kk) {
        const Fk = this.objectRenderers.indexOf(kk);
        return -1 !== Fk && this.objectRenderers.splice(Fk, 1), this.onObjectRendererRemovedObservable.notifyObservers(kk), Fk
      }
      removePostProcess(kk) {
        const Fk = this.postProcesses.indexOf(kk);
        return -1 !== Fk && this.postProcesses.splice(Fk, 1), this.onPostProcessRemovedObservable.notifyObservers(kk), Fk
      }
      removeEffectLayer(kk) {
        const Fk = this.effectLayers.indexOf(kk);
        return -1 !== Fk && this.effectLayers.splice(Fk, 1), this.onEffectLayerRemovedObservable.notifyObservers(kk), Fk
      }
      addLight(kk) {
        if (!this._blockEntityCollection) {
          this.lights.push(kk), this.sortLightsByPriority(), kk.parent || kk._addToSceneRootNodes();
          for (const Fk of this.meshes) - 1 === Fk.lightSources.indexOf(kk) && (Fk.lightSources.push(kk), Fk._resyncLightSources());
          tk.e.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(kk)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(nk.e.CompareLightsPriority)
      }
      addCamera(kk) {
        this._blockEntityCollection || (this.cameras.push(kk), tk.e.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(kk)
        })), kk.parent || kk._addToSceneRootNodes())
      }
      addSkeleton(kk) {
        this._blockEntityCollection || (this.skeletons.push(kk), tk.e.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(kk)
        })))
      }
      addParticleSystem(kk) {
        this._blockEntityCollection || (this.fY.push(kk), tk.e.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(kk)
        })))
      }
      addAnimation(kk) {
        this._blockEntityCollection || this.animations.push(kk)
      }
      addAnimationGroup(kk) {
        this._blockEntityCollection || (this.animationGroups.push(kk), tk.e.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(kk)
        })))
      }
      addMultiMaterial(kk) {
        this._blockEntityCollection || (this.multiMaterials.push(kk), tk.e.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(kk)
        })))
      }
      addMaterial(kk) {
        this._blockEntityCollection || kk.XN() === this && -1 !== kk._indexInSceneMaterialArray || (kk._indexInSceneMaterialArray = this.materials.length, this.materials.push(kk), tk.e.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(kk)
        })))
      }
      addMorphTargetManager(kk) {
        this._blockEntityCollection || this.morphTargetManagers.push(kk)
      }
      addGeometry(kk) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[kk.uniqueId] = this.geometries.length), this.geometries.push(kk))
      }
      addActionManager(kk) {
        this.actionManagers.push(kk)
      }
      addTexture(kk) {
        this._blockEntityCollection || (this.textures.push(kk), this.onNewTextureAddedObservable.notifyObservers(kk))
      }
      addFrameGraph(kk) {
        this.frameGraphs.push(kk), tk.e.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(kk)
        }))
      }
      addObjectRenderer(kk) {
        this.objectRenderers.push(kk), tk.e.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(kk)
        }))
      }
      addPostProcess(kk) {
        this._blockEntityCollection || (this.postProcesses.push(kk), tk.e.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(kk)
        })))
      }
      addEffectLayer(kk) {
        this._blockEntityCollection || (this.effectLayers.push(kk), tk.e.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(kk)
        })))
      }
      switchActiveCamera(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = kk, Fk && kk.attachControl())
      }
      setActiveCameraById(kk) {
        const Fk = this.getCameraById(kk);
        return Fk ? (this.activeCamera = Fk, Fk) : null
      }
      setActiveCameraByName(kk) {
        const Fk = this.getCameraByName(kk);
        return Fk ? (this.activeCamera = Fk, Fk) : null
      }
      getAnimationGroupByName(kk) {
        for (let Fk = 0; Fk < this.animationGroups.length; Fk++)
          if (this.animationGroups[Fk].name === kk) return this.animationGroups[Fk];
        return null
      }
      _getMaterial(kk, Fk) {
        for (let Bk = 0; Bk < this.materials.length; Bk++) {
          const kk = this.materials[Bk];
          if (Fk(kk)) return kk
        }
        if (kk)
          for (let Bk = 0; Bk < this.multiMaterials.length; Bk++) {
            const kk = this.multiMaterials[Bk];
            if (Fk(kk)) return kk
          }
        return null
      }
      getMaterialByUniqueID(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(kk, Fk)
      }
      getMaterialByUniqueId(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Fk, (Fk => Fk.uniqueId === kk))
      }
      getMaterialById(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Fk, (Fk => Fk.id === kk))
      }
      getMaterialByName(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Fk, (Fk => Fk.name === kk))
      }
      getLastMaterialById(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let Bk = this.materials.length - 1; Bk >= 0; Bk--)
          if (this.materials[Bk].id === kk) return this.materials[Bk];
        if (Fk)
          for (let Bk = this.multiMaterials.length - 1; Bk >= 0; Bk--)
            if (this.multiMaterials[Bk].id === kk) return this.multiMaterials[Bk];
        return null
      }
      getTextureByUniqueId(kk) {
        for (let Fk = 0; Fk < this.textures.length; Fk++)
          if (this.textures[Fk].uniqueId === kk) return this.textures[Fk];
        return null
      }
      getTextureByName(kk) {
        for (let Fk = 0; Fk < this.textures.length; Fk++)
          if (this.textures[Fk].name === kk) return this.textures[Fk];
        return null
      }
      getCameraById(kk) {
        for (let Fk = 0; Fk < this.cameras.length; Fk++)
          if (this.cameras[Fk].id === kk) return this.cameras[Fk];
        return null
      }
      getCameraByUniqueId(kk) {
        for (let Fk = 0; Fk < this.cameras.length; Fk++)
          if (this.cameras[Fk].uniqueId === kk) return this.cameras[Fk];
        return null
      }
      getCameraByName(kk) {
        for (let Fk = 0; Fk < this.cameras.length; Fk++)
          if (this.cameras[Fk].name === kk) return this.cameras[Fk];
        return null
      }
      getBoneById(kk) {
        for (let Fk = 0; Fk < this.skeletons.length; Fk++) {
          const Bk = this.skeletons[Fk];
          for (let Fk = 0; Fk < Bk.bones.length; Fk++)
            if (Bk.bones[Fk].id === kk) return Bk.bones[Fk]
        }
        return null
      }
      getBoneByName(kk) {
        for (let Fk = 0; Fk < this.skeletons.length; Fk++) {
          const Bk = this.skeletons[Fk];
          for (let Fk = 0; Fk < Bk.bones.length; Fk++)
            if (Bk.bones[Fk].name === kk) return Bk.bones[Fk]
        }
        return null
      }
      getLightByName(kk) {
        for (let Fk = 0; Fk < this.lights.length; Fk++)
          if (this.lights[Fk].name === kk) return this.lights[Fk];
        return null
      }
      getLightById(kk) {
        for (let Fk = 0; Fk < this.lights.length; Fk++)
          if (this.lights[Fk].id === kk) return this.lights[Fk];
        return null
      }
      getLightByUniqueId(kk) {
        for (let Fk = 0; Fk < this.lights.length; Fk++)
          if (this.lights[Fk].uniqueId === kk) return this.lights[Fk];
        return null
      }
      getParticleSystemById(kk) {
        for (let Fk = 0; Fk < this.fY.length; Fk++)
          if (this.fY[Fk].id === kk) return this.fY[Fk];
        return null
      }
      getGeometryById(kk) {
        for (let Fk = 0; Fk < this.geometries.length; Fk++)
          if (this.geometries[Fk].id === kk) return this.geometries[Fk];
        return null
      }
      _getGeometryByUniqueId(kk) {
        if (this._geometriesByUniqueId) {
          const Fk = this._geometriesByUniqueId[kk];
          if (void 0 !== Fk) return this.geometries[Fk]
        } else
          for (let Fk = 0; Fk < this.geometries.length; Fk++)
            if (this.geometries[Fk].uniqueId === kk) return this.geometries[Fk];
        return null
      }
      getFrameGraphByName(kk) {
        for (let Fk = 0; Fk < this.frameGraphs.length; Fk++)
          if (this.frameGraphs[Fk].name === kk) return this.frameGraphs[Fk];
        return null
      }
      pushGeometry(kk, Fk) {
        return !(!Fk && this._getGeometryByUniqueId(kk.uniqueId)) && (this.addGeometry(kk), tk.e.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(kk)
        })), !0)
      }
      removeGeometry(kk) {
        let Fk;
        if (this._geometriesByUniqueId) {
          if (Fk = this._geometriesByUniqueId[kk.uniqueId], void 0 === Fk) return !1
        } else if (Fk = this.geometries.indexOf(kk), Fk < 0) return !1;
        if (Fk !== this.geometries.length - 1) {
          const kk = this.geometries[this.geometries.length - 1];
          kk && (this.geometries[Fk] = kk, this._geometriesByUniqueId && (this._geometriesByUniqueId[kk.uniqueId] = Fk))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[kk.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(kk), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(kk) {
        for (let Fk = 0; Fk < this.meshes.length; Fk++)
          if (this.meshes[Fk].id === kk) return this.meshes[Fk];
        return null
      }
      getMeshesById(kk) {
        return this.meshes.filter((function(Fk) {
          return Fk.id === kk
        }))
      }
      getTransformNodeById(kk) {
        for (let Fk = 0; Fk < this.transformNodes.length; Fk++)
          if (this.transformNodes[Fk].id === kk) return this.transformNodes[Fk];
        return null
      }
      getTransformNodeByUniqueId(kk) {
        for (let Fk = 0; Fk < this.transformNodes.length; Fk++)
          if (this.transformNodes[Fk].uniqueId === kk) return this.transformNodes[Fk];
        return null
      }
      getTransformNodesById(kk) {
        return this.transformNodes.filter((function(Fk) {
          return Fk.id === kk
        }))
      }
      getMeshByUniqueId(kk) {
        for (let Fk = 0; Fk < this.meshes.length; Fk++)
          if (this.meshes[Fk].uniqueId === kk) return this.meshes[Fk];
        return null
      }
      getLastMeshById(kk) {
        for (let Fk = this.meshes.length - 1; Fk >= 0; Fk--)
          if (this.meshes[Fk].id === kk) return this.meshes[Fk];
        return null
      }
      getLastTransformNodeById(kk) {
        for (let Fk = this.transformNodes.length - 1; Fk >= 0; Fk--)
          if (this.transformNodes[Fk].id === kk) return this.transformNodes[Fk];
        return null
      }
      getLastEntryById(kk) {
        let Fk;
        for (Fk = this.meshes.length - 1; Fk >= 0; Fk--)
          if (this.meshes[Fk].id === kk) return this.meshes[Fk];
        for (Fk = this.transformNodes.length - 1; Fk >= 0; Fk--)
          if (this.transformNodes[Fk].id === kk) return this.transformNodes[Fk];
        for (Fk = this.cameras.length - 1; Fk >= 0; Fk--)
          if (this.cameras[Fk].id === kk) return this.cameras[Fk];
        for (Fk = this.lights.length - 1; Fk >= 0; Fk--)
          if (this.lights[Fk].id === kk) return this.lights[Fk];
        for (Fk = this.skeletons.length - 1; Fk >= 0; Fk--) {
          const Bk = this.skeletons[Fk];
          for (let Fk = Bk.bones.length - 1; Fk >= 0; Fk--)
            if (Bk.bones[Fk].id === kk) return Bk.bones[Fk]
        }
        return null
      }
      getNodeById(kk) {
        const Fk = this.getMeshById(kk);
        if (Fk) return Fk;
        const Bk = this.getTransformNodeById(kk);
        if (Bk) return Bk;
        const Rk = this.getLightById(kk);
        if (Rk) return Rk;
        const tk = this.getCameraById(kk);
        if (tk) return tk;
        const ak = this.getBoneById(kk);
        return ak || null
      }
      getNodeByName(kk) {
        const Fk = this.getMeshByName(kk);
        if (Fk) return Fk;
        const Bk = this.getTransformNodeByName(kk);
        if (Bk) return Bk;
        const Rk = this.getLightByName(kk);
        if (Rk) return Rk;
        const tk = this.getCameraByName(kk);
        if (tk) return tk;
        const ak = this.getBoneByName(kk);
        return ak || null
      }
      getMeshByName(kk) {
        for (let Fk = 0; Fk < this.meshes.length; Fk++)
          if (this.meshes[Fk].name === kk) return this.meshes[Fk];
        return null
      }
      getTransformNodeByName(kk) {
        for (let Fk = 0; Fk < this.transformNodes.length; Fk++)
          if (this.transformNodes[Fk].name === kk) return this.transformNodes[Fk];
        return null
      }
      getLastSkeletonById(kk) {
        for (let Fk = this.skeletons.length - 1; Fk >= 0; Fk--)
          if (this.skeletons[Fk].id === kk) return this.skeletons[Fk];
        return null
      }
      getSkeletonByUniqueId(kk) {
        for (let Fk = 0; Fk < this.skeletons.length; Fk++)
          if (this.skeletons[Fk].uniqueId === kk) return this.skeletons[Fk];
        return null
      }
      getSkeletonById(kk) {
        for (let Fk = 0; Fk < this.skeletons.length; Fk++)
          if (this.skeletons[Fk].id === kk) return this.skeletons[Fk];
        return null
      }
      getSkeletonByName(kk) {
        for (let Fk = 0; Fk < this.skeletons.length; Fk++)
          if (this.skeletons[Fk].name === kk) return this.skeletons[Fk];
        return null
      }
      getMorphTargetManagerById(kk) {
        for (let Fk = 0; Fk < this.morphTargetManagers.length; Fk++)
          if (this.morphTargetManagers[Fk].uniqueId === kk) return this.morphTargetManagers[Fk];
        return null
      }
      getMorphTargetById(kk) {
        for (let Fk = 0; Fk < this.morphTargetManagers.length; ++Fk) {
          const Bk = this.morphTargetManagers[Fk];
          for (let Fk = 0; Fk < Bk.numTargets; ++Fk) {
            const Rk = Bk.getTarget(Fk);
            if (Rk.id === kk) return Rk
          }
        }
        return null
      }
      getMorphTargetByName(kk) {
        for (let Fk = 0; Fk < this.morphTargetManagers.length; ++Fk) {
          const Bk = this.morphTargetManagers[Fk];
          for (let Fk = 0; Fk < Bk.numTargets; ++Fk) {
            const Rk = Bk.getTarget(Fk);
            if (Rk.name === kk) return Rk
          }
        }
        return null
      }
      getPostProcessByName(kk) {
        for (let Fk = 0; Fk < this.postProcesses.length; ++Fk) {
          const Bk = this.postProcesses[Fk];
          if (Bk.name === kk) return Bk
        }
        return null
      }
      isActiveMesh(kk) {
        return -1 !== this._activeMeshes.indexOf(kk)
      }
      get uid() {
        return this._uid || (this._uid = Rk.h.RandomId()), this._uid
      }
      addExternalData(kk, Fk) {
        return this._externalData || (this._externalData = new wk), this._externalData.add(kk, Fk)
      }
      getExternalData(kk) {
        return this._externalData ? this._externalData.get(kk) : null
      }
      getOrAddExternalDataWithFactory(kk, Fk) {
        return this._externalData || (this._externalData = new wk), this._externalData.getOrAddWithFactory(kk, Fk)
      }
      removeExternalData(kk) {
        return this._externalData.remove(kk)
      }
      _evaluateSubMesh(kk, Fk, Bk, Rk) {
        if (Rk || kk.isInFrustum(this._frustumPlanes)) {
          for (let Rk = 0, tk = this._evaluateSubMeshStage; Rk < tk.length; Rk++) {
            tk[Rk].action(Fk, kk)
          }
          const Bk = kk.Ry();
          null !== Bk && void 0 !== Bk && (Bk.hasRenderTargetTextures && null != Bk.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Bk) && (this._processedMaterials.push(Bk), this._materialsRenderTargets.concatWithNoDuplicate(Bk.getRenderTargetTextures())), this._renderingManager.dispatch(kk, Fk, Bk))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(kk) {
        this._preventFreeActiveMeshesAndRenderingGroups !== kk && (kk && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = kk)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let kk = 0; kk < this.activeCameras.length; kk++) {
            const Fk = this.activeCameras[kk];
            Fk && Fk._activeMeshes && Fk._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let kk = 0; kk < this.textures.length; kk++) {
            const Fk = this.textures[kk];
            Fk && Fk.renderList && Fk.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0,
          Rk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          ak = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const Xk = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const kk of Xk) kk.objectRenderer._freezeActiveMeshes(Rk);
          return this._freezeActiveMeshesCancel = (0, tk.g)((() => {
            let kk = !0,
              Fk = !0;
            for (const Bk of Xk) kk && (kk = Bk.objectRenderer._isFrozen), Fk && (Fk = null !== Bk.objectRenderer._freezeActiveMeshesCancel);
            if (kk) return !0;
            if (!Fk) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = ak, this._skipEvaluateActiveMeshesCompletely = kk, Fk?.()
          }), ((kk, Fk) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), Fk) {
              const Fk = "Scene: Timeout while waiting for meshes to be frozen.";
              Bk ? Bk(Fk) : (FB.b.Error(Fk), kk && FB.b.Error(kk))
            } else {
              const Fk = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              Bk ? Bk(Fk) : (FB.b.Error(Fk), kk && (FB.b.Error(kk), kk.stack && FB.b.Error(kk.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = ak, this._skipEvaluateActiveMeshesCompletely = kk, Rk)
              for (let kk = 0; kk < this._activeMeshes.length; kk++) this._activeMeshes.data[kk]._freeze();
            Fk && Fk()
          } else Bk && Bk("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let kk = 0; kk < this.meshes.length; kk++) {
          const Fk = this.meshes[kk];
          Fk._internalAbstractMeshDataInfo && (Fk._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const kk = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const Fk of kk) Fk.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let kk = 0; kk < this._activeMeshes.length; kk++) this._activeMeshes.data[kk]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(kk) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => kk.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const kk = this._activeMeshes.length;
            for (let Fk = 0; Fk < kk; Fk++) {
              this._activeMeshes.data[Fk].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const kk = this._activeParticleSystems.length;
            for (let Fk = 0; Fk < kk; Fk++) this._activeParticleSystems.data[Fk].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let tk = 0, ak = this._beforeEvaluateActiveMeshStage; tk < ak.length; tk++) {
          ak[tk].action()
        }
        const kk = this.getActiveMeshCandidates(),
          Fk = kk.length,
          Bk = pk.b.Enabled,
          Rk = this.customLODSelector;
        for (let tk = 0; tk < Fk; tk++) {
          const Fk = kk.data[tk],
            ak = !Rk && !Fk.mN && !Fk._internalMeshDataInfo?._LODLevels.length;
          let Xk, bk;
          if ((ak || (Xk = Fk._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), Xk ? Xk[1] = -1 : (Xk = [Fk, -1], Fk._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, Xk))), !Fk.isBlocked) && (Bk && this._totalVertices.addCount(Fk.getTotalVertices(), !1), Fk.isReady() && Fk.isEnabled() && !Fk.ta.hasAZeroComponent)) {
            if (Fk.computeWorldMatrix(), Fk.actionManager && Fk.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(Fk), ak) bk = Fk;
            else if (bk = Rk ? Rk(Fk, this.activeCamera) : Fk.getLOD(this.activeCamera), Xk[0] = bk, Xk[1] = this._frameId, void 0 === bk || null === bk) continue;
            if (bk !== Fk && 0 !== bk.billboardMode && bk.computeWorldMatrix(), Fk._preActivate(), Fk.isVisible && Fk.visibility > 0 && 0 !== (Fk.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || Fk.Ie || Fk.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(Fk), this.activeCamera._activeMeshes.push(Fk), bk !== Fk && bk._activate(this._renderId, !1);
              for (let kk = 0, Bk = this._preActiveMeshStage; kk < Bk.length; kk++) {
                Bk[kk].action(Fk)
              }
              Fk._activate(this._renderId, !1) && (Fk.mN ? Fk._internalAbstractMeshDataInfo._actAsRegularMesh && (bk = Fk) : bk._internalAbstractMeshDataInfo._onlyForInstances = !1, bk._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(Fk, bk)), Fk._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let kk = 0; kk < this.fY.length; kk++) {
            const Fk = this.fY[kk];
            if (!Fk.isStarted() || !Fk.emitter) continue;
            const Bk = Fk.emitter;
            Bk.position && !Bk.isEnabled() || (this._activeParticleSystems.push(Fk), Fk.animate(), this._renderingManager.dispatchParticles(Fk))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(kk) {
        this._skeletonsEnabled && kk.skeleton && (this._activeSkeletons.pushNoDuplicate(kk.skeleton) && (kk.skeleton.prepare(), this._activeBones.addCount(kk.skeleton.bones.length, !1)), kk.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(kk) && this.frameGraph && kk.applySkeleton(kk.skeleton))
      }
      _activeMesh(kk, Fk) {
        this._prepareSkeleton(Fk);
        let Bk = kk.GRk || kk.mN || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || Fk.Ie;
        if (Fk && Fk.AY && Fk.AY.length > 0) {
          const Rk = this.getActiveSubMeshCandidates(Fk),
            tk = Rk.length;
          Bk = Bk || 1 === tk;
          for (let ak = 0; ak < tk; ak++) {
            const tk = Rk.data[ak];
            this._evaluateSubMesh(tk, Fk, kk, Bk)
          }
        }
      }
      updateTransformMatrix(kk) {
        const Fk = this.activeCamera;
        if (Fk)
          if (Fk._renderingMultiview) {
            const Bk = Fk._rigCameras[0],
              Rk = Fk._rigCameras[1];
            this.setTransformMatrix(Bk.getViewMatrix(), Bk.getProjectionMatrix(kk), Rk.getViewMatrix(), Rk.getProjectionMatrix(kk))
          } else this.setTransformMatrix(Fk.getViewMatrix(), Fk.getProjectionMatrix(kk))
      }
      _bindFrameBuffer(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (kk && kk._multiviewTexture ? kk._multiviewTexture._bindFrameBuffer() : kk && kk.outputRenderTarget ? kk.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), Fk && this._clearFrameBuffer(kk)
      }
      _clearFrameBuffer(kk) {
        if (kk && kk._multiviewTexture);
        else if (kk && kk.outputRenderTarget && !kk._renderingMultiview) {
          const Fk = kk.outputRenderTarget;
          Fk.onClearObservable.hasObservers() ? Fk.onClearObservable.notifyObservers(this._engine) : Fk.skipInitialClear || kk.isRightCamera || (this.autoClear && this._engine.clear(Fk.clearColor || this._clearColor, !Fk._cleared, !0, !0), Fk._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(kk, Fk) {
        let Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (kk && kk._skipRendering) return;
        const tk = this._engine;
        if (this._activeCamera = kk, !this.activeCamera) throw new Error("Active camera not set");
        if (tk.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && Bk) {
          let Fk = !0;
          kk._renderingMultiview && kk.outputRenderTarget && (Fk = kk.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, kk.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), kk._renderingMultiview && kk.outputRenderTarget && (kk.outputRenderTarget.skipInitialClear = Fk)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = kk.outputRenderTarget?.renderPassId ?? kk.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let Rk = 0; Rk < this._softwareSkinnedMeshes.length; Rk++) {
          const kk = this._softwareSkinnedMeshes.data[Rk];
          kk.applySkeleton(kk.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), kk.customRenderTargets && kk.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(kk.customRenderTargets), Fk && Fk.customRenderTargets && Fk.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(Fk.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let Rk = 0, bk = this._gatherActiveCameraRenderTargetsStage; Rk < bk.length; Rk++) {
          bk[Rk].action(this._renderTargets)
        }
        let ak = !1;
        if (this.renderTargetsEnabled) {
          let kk;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            Rk.h.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const Fk = this.getBoundingBoxRenderer?.();
            for (let Bk = 0; Bk < this._renderTargets.length; Bk++) {
              const Rk = this._renderTargets.data[Bk];
              if (Rk._shouldRender()) {
                this._renderId++;
                const Bk = Rk.activeCamera && Rk.activeCamera !== this.activeCamera;
                Fk && !kk && (kk = Fk.renderList.length > 0 ? Fk.renderList.data.slice() : [], kk.length = Fk.renderList.length), Rk.render(Bk, this.dumpNextRenderTargets), ak = !0
              }
            }
            Fk && kk && (Fk.renderList.data = kk, Fk.renderList.length = kk.length), Rk.h.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const Fk = this.getBoundingBoxRenderer?.();
            Fk && !kk && (kk = Fk.renderList.length > 0 ? Fk.renderList.data.slice() : [], kk.length = Fk.renderList.length);
            for (let kk = 0, Bk = this._cameraDrawRenderTargetStage; kk < Bk.length; kk++) {
              ak = Bk[kk].action(this.activeCamera) || ak
            }
            Fk && kk && (Fk.renderList.data = kk, Fk.renderList.length = kk.length)
          }
          this._intermediateRendering = !1
        }
        ak && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || kk._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let Rk = 0, bk = this._beforeCameraDrawStage; Rk < bk.length; Rk++) {
          bk[Rk].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const Xk = tk.snapshotRendering && 1 === tk.snapshotRenderingMode;
        Xk && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !Xk), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let Rk = 0, bk = this._afterCameraDrawStage; Rk < bk.length; Rk++) {
          bk[Rk].action(this.activeCamera)
        }
        if (this.postProcessManager && !kk._multiviewTexture) {
          const Fk = kk.outputRenderTarget ? kk.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(kk.isIntermediate, Fk)
        }
        for (let Rk = 0, bk = this._afterCameraPostProcessStage; Rk < bk.length; Rk++) {
          bk[Rk].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === kk.cameraRigMode || kk._renderingMultiview) return kk._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(kk, void 0, Fk), void this.onAfterRenderCameraObservable.notifyObservers(kk);
        if (kk._useMultiviewToSingleView) this._renderMultiviewToSingleView(kk);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(kk);
          for (let Fk = 0; Fk < kk._rigCameras.length; Fk++) this._renderForCamera(kk._rigCameras[Fk], kk)
        }
        this._activeCamera = kk, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(kk)
      }
      _checkIntersections() {
        for (let kk = 0; kk < this._meshesForIntersections.length; kk++) {
          const Fk = this._meshesForIntersections.data[kk];
          if (Fk.actionManager)
            for (let kk = 0; Fk.actionManager && kk < Fk.actionManager.actions.length; kk++) {
              const Bk = Fk.actionManager.actions[kk];
              if (12 === Bk.trigger || 13 === Bk.trigger) {
                const kk = Bk.getTriggerParameter(),
                  Rk = kk.mesh ? kk.mesh : kk,
                  tk = Rk.NRk(Fk, kk.usePreciseIntersection),
                  ak = Fk._intersectionsInProgress.indexOf(Rk);
                tk && -1 === ak ? 12 === Bk.trigger ? (Bk._executeCurrent(ek.CreateNew(Fk, void 0, Rk)), Fk._intersectionsInProgress.push(Rk)) : 13 === Bk.trigger && Fk._intersectionsInProgress.push(Rk) : !tk && ak > -1 && (13 === Bk.trigger && Bk._executeCurrent(ek.CreateNew(Fk, void 0, Rk)), Fk.actionManager.hasSpecificTrigger(13, (kk => {
                  const Fk = kk.mesh ? kk.mesh : kk;
                  return Rk === Fk
                })) && 13 !== Bk.trigger || Fk._intersectionsInProgress.splice(ak, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(kk) {}
      _animate(kk) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let kk = Math.max(XB.MinDeltaTime, Math.min(this._engine.getDeltaTime(), XB.MaxDeltaTime)) + this._timeAccumulator;
          const Fk = this._engine.getTimeStep(),
            Bk = 1e3 / Fk / 1e3;
          let Rk = 0;
          const tk = this._engine.getLockstepMaxSteps();
          let ak = Math.floor(kk / Fk);
          for (ak = Math.min(ak, tk); kk > 0 && Rk < ak;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = Fk * Bk, this._animate(Fk), this.onAfterAnimationsObservable.notifyObservers(this), this.IU && this._advancePhysicsEngineStep(Fk), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, Rk++, kk -= Fk;
          this._timeAccumulator = kk < 0 ? 0 : kk
        } else {
          const kk = this.useConstantAnimationDeltaTime ? 16 : Math.max(XB.MinDeltaTime, Math.min(this._engine.getDeltaTime(), XB.MaxDeltaTime));
          this._animationRatio = .06 * kk, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.IU && this._advancePhysicsEngineStep(kk)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(kk) {
        if (kk?.outputRenderTarget && !kk?.isRigCamera && (kk.outputRenderTarget._cleared = !1), kk?.rigCameras?.length)
          for (let Fk = 0; Fk < kk.rigCameras.length; ++Fk) {
            const Bk = kk.rigCameras[Fk].outputRenderTarget;
            Bk && (Bk._cleared = !1)
          }
      }
      resetDrawCache(kk) {
        if (this.meshes)
          for (const Fk of this.meshes) Fk.resetDrawCache(kk)
      }
      _renderWithFrameGraph() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Fk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, kk)
          for (const Bk of this.cameras)
            if (Bk.update(), 0 !== Bk.cameraRigMode)
              for (let kk = 0; kk < Bk._rigCameras.length; kk++) Bk._rigCameras[kk].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(Fk)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(kk) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const Fk = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), Rk.h.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let kk = 0; kk < this._renderTargets.length; kk++) {
            const Bk = this._renderTargets.data[kk],
              Rk = Bk.activeCamera || Fk;
            this._renderRenderTarget(Bk, Rk, !0, this.dumpNextRenderTargets)
          }
          Rk.h.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let Bk = 0, Rk = this._beforeClearStage; Bk < Rk.length; Bk++) {
          Rk[Bk].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const Fk = this.getActiveMeshCandidates(),
            Bk = Fk.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let kk = 0; kk < Bk; kk++) {
                const Bk = Fk.data[kk];
                Bk._internalAbstractMeshDataInfo._wasActiveLastFrame && Bk.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const kk = this._activeParticleSystems.length;
              for (let Fk = 0; Fk < kk; Fk++) this._activeParticleSystems.data[Fk].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let Rk = 0; Rk < Bk; Rk++) {
              const Bk = Fk.data[Rk];
              Bk._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, Bk.isBlocked || (this._totalVertices.addCount(Bk.getTotalVertices(), !1), Bk.isReady() && Bk.isEnabled() && !Bk.ta.hasAZeroComponent && (Bk.computeWorldMatrix(kk), Bk.actionManager && Bk.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(Bk)))
            }
            if (this.particlesEnabled)
              for (let kk = 0; kk < this.fY.length; kk++) {
                const Fk = this.fY[kk];
                if (!Fk.isStarted() || !Fk.emitter) continue;
                const Bk = Fk.emitter;
                Bk.position && !Bk.isEnabled() || (this._activeParticleSystems.push(Fk), Fk.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, kk._shouldRender()) {
          if (this._renderId++, this.activeCamera = Fk, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), kk.render(Bk, Rk)
        }
        this._intermediateRendering = !1
      }
      render() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.BBk) return;
        const Bk = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(kk, Fk)
        } finally {
          this._renderingMeshEvaluationDepth = Bk
        }
      }
      _renderFrame(kk, Fk) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), fk.e.XN = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const Bk of this.activeCameras) this._checkCameraRenderTarget(Bk);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), Fk || this.animate();
        for (let Bk = 0, Rk = this._beforeCameraUpdateStage; Bk < Rk.length; Bk++) {
          Rk[Bk].action()
        }
        if (kk)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let Bk = 0; Bk < this.activeCameras.length; Bk++) {
              const kk = this.activeCameras[Bk];
              if (kk.update(), 0 !== kk.cameraRigMode)
                for (let Fk = 0; Fk < kk._rigCameras.length; Fk++) kk._rigCameras[Fk].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let Bk = 0; Bk < this.activeCamera._rigCameras.length; Bk++) this.activeCamera._rigCameras[Bk].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(kk, Fk);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const kk = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            Rk.h.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let Fk = 0; Fk < this.customRenderTargets.length; Fk++) {
              const Bk = this.customRenderTargets[Fk],
                Rk = Bk.activeCamera || this.activeCamera;
              this._renderRenderTarget(Bk, Rk, kk !== Rk, this.dumpNextRenderTargets)
            }
            Rk.h.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = kk?.renderPassId ?? 0, this.activeCamera = kk, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let Fk = 0, Bk = this._beforeClearStage; Fk < Bk.length; Fk++) {
            Bk[Fk].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let Fk = 0, Bk = this._gatherRenderTargetsStage; Fk < Bk.length; Fk++) {
            Bk[Fk].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let Fk = 0; Fk < this.activeCameras.length; Fk++) this._processSubCameras(this.activeCameras[Fk], Fk > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let Bk = 0, Rk = this._afterRenderStage; Bk < Rk.length; Bk++) {
          Rk[Bk].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let kk = 0; kk < this._toBeDisposed.length; kk++) {
            const Fk = this._toBeDisposed[kk];
            Fk && Fk.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let kk = 0; kk < this.materials.length; kk++) this.materials[kk].freeze()
      }
      unfreezeMaterials() {
        for (let kk = 0; kk < this.materials.length; kk++) this.materials[kk].unfreeze()
      }
      dispose() {
        if (this.BBk) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, Yk.c)(this.stopAllAnimations)) {
          for (const kk of this._activeAnimatables) kk.onAnimationEndObservable.clear(), kk.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const kk = this._activeRequests.slice();
        for (const ak of kk) ak.abort();
        this._activeRequests.length = 0;
        try {
          this.yN.notifyObservers(this)
        } catch (tk) {
          FB.b.Error("An error occurred while calling onDisposeObservable!", tk)
        }
        this.detachControl();
        const Fk = this._engine.getInputElement?.();
        if (Fk)
          for (let ak = 0; ak < this.cameras.length; ak++) this.cameras[ak].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (kk => kk.dispose(!0))), this._disposeList(this.transformNodes, (kk => kk.dispose(!0)));
        const Bk = this.cameras;
        this._disposeList(Bk), this._disposeList(this.fY), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let Rk = this._engine.scenes.indexOf(this);
        if (Rk > -1 && this._engine.scenes.splice(Rk, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, fk.g)(), ik.c._LastCreatedScene === this) {
          ik.c._LastCreatedScene = null;
          let kk = ik.c.Instances.length - 1;
          for (; kk >= 0;) {
            const Fk = ik.c.Instances[kk];
            if (Fk.scenes.length > 0) {
              ik.c._LastCreatedScene = Fk.scenes[this._engine.scenes.length - 1];
              break
            }
            kk--
          }
        }
        Rk = this._engine._virtualScenes.indexOf(this), Rk > -1 && this._engine._virtualScenes.splice(Rk, 1), this._engine.wipeCaches(!0), this.yN.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(kk, Fk) {
        const Bk = kk.slice(0);
        Fk = Fk ?? (kk => kk.dispose());
        for (const Rk of Bk) Fk(Rk);
        kk.length = 0
      }
      get BBk() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let kk = 0; kk < this.meshes.length; kk++) {
          const Fk = this.meshes[kk].geometry;
          Fk && Fk.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const kk of this.textures) {
          kk._buffer && (kk._buffer = null)
        }
      }
      getWorldExtends(kk) {
        const Fk = new sk.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          Bk = new sk.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        kk = kk || (() => !0);
        const Rk = this.meshes.filter(kk);
        for (const tk of Rk) {
          if (tk.computeWorldMatrix(!0), !tk.AY || 0 === tk.AY.length || tk.infiniteDistance) continue;
          const kk = tk.ZH(),
            Rk = kk.boundingBox.minimumWorld,
            ak = kk.boundingBox.maximumWorld;
          sk.s.CheckExtends(Rk, Fk, Bk), sk.s.CheckExtends(ak, Fk, Bk)
        }
        return Fk.x === Number.MAX_VALUE ? {
          min: sk.s.Zero(),
          max: sk.s.Zero()
        } : {
          min: Fk,
          max: Bk
        }
      }
      createPickingRay(kk, Fk, Bk, Rk) {
        throw (0, Yk.i)("Ray")
      }
      createPickingRayToRef(kk, Fk, Bk, Rk, tk) {
        throw (0, Yk.i)("Ray")
      }
      createPickingRayInCameraSpace(kk, Fk, Bk) {
        throw (0, Yk.i)("Ray")
      }
      createPickingRayInCameraSpaceToRef(kk, Fk, Bk, Rk) {
        throw (0, Yk.i)("Ray")
      }
      AA(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = (0, Yk.i)("Ray", !0);
        return Xk && FB.b.Warn(Xk), new Ak.c
      }
      pickWithBoundingInfo(kk, Fk, Bk, Rk, tk) {
        const ak = (0, Yk.i)("Ray", !0);
        return ak && FB.b.Warn(ak), new Ak.c
      }
      pickWithRay(kk, Fk, Bk, Rk) {
        throw (0, Yk.i)("Ray")
      }
      multiPick(kk, Fk, Bk, Rk, tk) {
        throw (0, Yk.i)("Ray")
      }
      multiPickWithRay(kk, Fk, Bk) {
        throw (0, Yk.i)("Ray")
      }
      setPointerOverMesh(kk, Fk, Bk) {
        this._inputManager.setPointerOverMesh(kk, Fk, Bk)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const kk of this.geometries) kk._rebuild();
        for (const kk of this.meshes) kk._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const kk of this._components) kk.rebuild();
        for (const kk of this.fY) kk.rebuild();
        if (this.spriteManagers)
          for (const kk of this.spriteManagers) kk.rebuild()
      }
      _rebuildTextures() {
        for (const kk of this.textures) kk._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(kk, Fk, Bk) {
        if (void 0 === Fk) return kk;
        const Rk = [];
        for (const tk in kk) {
          const ak = kk[tk];
          dk.b && dk.b.MatchesQuery(ak, Fk) && (!Bk || Bk(ak)) && Rk.push(ak)
        }
        return Rk
      }
      getMeshesByTags(kk, Fk) {
        return this._getByTags(this.meshes, kk, Fk)
      }
      getCamerasByTags(kk, Fk) {
        return this._getByTags(this.cameras, kk, Fk)
      }
      getLightsByTags(kk, Fk) {
        return this._getByTags(this.lights, kk, Fk)
      }
      getMaterialByTags(kk, Fk) {
        return this._getByTags(this.materials, kk, Fk).concat(this._getByTags(this.multiMaterials, kk, Fk))
      }
      getTransformNodesByTags(kk, Fk) {
        return this._getByTags(this.transformNodes, kk, Fk)
      }
      setRenderingOrder(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(kk, Fk, Bk, Rk)
      }
      setRenderingAutoClearDepthStencil(kk, Fk) {
        let Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Rk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(kk, Fk, Bk, Rk)
      }
      getAutoClearDepthStencilSetup(kk) {
        return this._renderingManager.getAutoClearDepthStencilSetup(kk)
      }
      _forceBlockMaterialDirtyMechanism(kk) {
        this._blockMaterialDirtyMechanism = kk
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(kk) {
        this._blockMaterialDirtyMechanism !== kk && (this._blockMaterialDirtyMechanism = kk, kk || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(kk, Fk) {
        if (!this._blockMaterialDirtyMechanism)
          for (const Bk of this.materials) Fk && !Fk(Bk) || Bk.mFk(kk)
      }
      _loadFile(kk, Fk, Bk, Rk, tk, ak, Xk) {
        const bk = (0, lk.i)(kk, Fk, Bk, Rk ? this.offlineProvider : void 0, tk, ak, Xk);
        return this._activeRequests.push(bk), bk.onCompleteObservable.add((kk => {
          this._activeRequests.splice(this._activeRequests.indexOf(kk), 1)
        })), bk
      }
      async _loadFileAsync(kk, Fk, Bk, Rk, tk) {
        return await new Promise(((ak, Xk) => {
          this._loadFile(kk, (kk => {
            ak(kk)
          }), Fk, Bk, Rk, ((kk, Fk) => {
            Xk(Fk)
          }), tk)
        }))
      }
      async _loadDelayedFileAsync(kk, Fk, Bk) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const Rk = `${kk}|${Fk?"binary":"string"}`;
        let tk = this._delayedFileRequests.get(Rk);
        if (!tk) {
          tk = Fk ? this._loadFileAsync(kk, void 0, Bk, !0) : this._loadFileAsync(kk, void 0, Bk, !1);
          const ak = tk;
          (async () => {
            try {
              await ak
            } catch {}
            this._delayedFileRequests?.delete(Rk)
          })(), this._delayedFileRequests.set(Rk, tk)
        }
        return await tk
      }
      _requestFile(kk, Fk, Bk, Rk, tk, ak, Xk) {
        const bk = (0, lk.s)(kk, Fk, Bk, Rk ? this.offlineProvider : void 0, tk, ak, Xk);
        return this._activeRequests.push(bk), bk.onCompleteObservable.add((kk => {
          this._activeRequests.splice(this._activeRequests.indexOf(kk), 1)
        })), bk
      }
      async _requestFileAsync(kk, Fk, Bk, Rk, tk) {
        return await new Promise(((ak, Xk) => {
          this._requestFile(kk, (kk => {
            ak(kk)
          }), Fk, Bk, Rk, (kk => {
            Xk(kk)
          }), tk)
        }))
      }
      _readFile(kk, Fk, Bk, Rk, tk) {
        const ak = (0, lk.m)(kk, Fk, Bk, Rk, tk);
        return this._activeRequests.push(ak), ak.onCompleteObservable.add((kk => {
          this._activeRequests.splice(this._activeRequests.indexOf(kk), 1)
        })), ak
      }
      async _readFileAsync(kk, Fk, Bk) {
        return await new Promise(((Rk, tk) => {
          this._readFile(kk, (kk => {
            Rk(kk)
          }), Fk, Bk, (kk => {
            tk(kk)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, Yk.i)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(kk) {
        return this.setActiveCameraById(kk)
      }
      getMaterialByID(kk) {
        return this.getMaterialById(kk)
      }
      getLastMaterialByID(kk) {
        return this.getLastMaterialById(kk)
      }
      getTextureByUniqueID(kk) {
        return this.getTextureByUniqueId(kk)
      }
      getCameraByID(kk) {
        return this.getCameraById(kk)
      }
      getCameraByUniqueID(kk) {
        return this.getCameraByUniqueId(kk)
      }
      getBoneByID(kk) {
        return this.getBoneById(kk)
      }
      getLightByID(kk) {
        return this.getLightById(kk)
      }
      getLightByUniqueID(kk) {
        return this.getLightByUniqueId(kk)
      }
      getParticleSystemByID(kk) {
        return this.getParticleSystemById(kk)
      }
      getGeometryByID(kk) {
        return this.getGeometryById(kk)
      }
      getMeshByID(kk) {
        return this.getMeshById(kk)
      }
      getMeshByUniqueID(kk) {
        return this.getMeshByUniqueId(kk)
      }
      getLastMeshByID(kk) {
        return this.getLastMeshById(kk)
      }
      getMeshesByID(kk) {
        return this.getMeshesById(kk)
      }
      getTransformNodeByID(kk) {
        return this.getTransformNodeById(kk)
      }
      getTransformNodeByUniqueID(kk) {
        return this.getTransformNodeByUniqueId(kk)
      }
      getTransformNodesByID(kk) {
        return this.getTransformNodesById(kk)
      }
      getNodeByID(kk) {
        return this.getNodeById(kk)
      }
      getLastEntryByID(kk) {
        return this.getLastEntryById(kk)
      }
      getLastSkeletonByID(kk) {
        return this.getLastSkeletonById(kk)
      }
    }
    XB.FOGMODE_NONE = 0, XB.FOGMODE_EXP = 1, XB.FOGMODE_EXP2 = 2, XB.FOGMODE_LINEAR = 3, XB.MinDeltaTime = 1, XB.MaxDeltaTime = 1e3, XB._OriginalDefaultMaterialFactory = XB.DefaultMaterialFactory;
    let bB = !1;

    function wB() {
      bB || (bB = !0, (0, BB.d)("BABYLON.Scene", XB))
    }(kF = XB.prototype).sortActiveAnimatables ?? (kF.sortActiveAnimatables = (0, Yk.g)("Scene", "sortActiveAnimatables")), (FF = XB.prototype).beginWeightedAnimation ?? (FF.beginWeightedAnimation = (0, Yk.g)("Scene", "beginWeightedAnimation")), (BF = XB.prototype).beginAnimation ?? (BF.beginAnimation = (0, Yk.g)("Scene", "beginAnimation")), (RF = XB.prototype).beginHierarchyAnimation ?? (RF.beginHierarchyAnimation = (0, Yk.g)("Scene", "beginHierarchyAnimation")), (tF = XB.prototype).beginDirectAnimation ?? (tF.beginDirectAnimation = (0, Yk.g)("Scene", "beginDirectAnimation")), (aF = XB.prototype).beginDirectHierarchyAnimation ?? (aF.beginDirectHierarchyAnimation = (0, Yk.g)("Scene", "beginDirectHierarchyAnimation")), (XF = XB.prototype).getAnimatableByTarget ?? (XF.getAnimatableByTarget = (0, Yk.g)("Scene", "getAnimatableByTarget")), (bF = XB.prototype).getAllAnimatablesByTarget ?? (bF.getAllAnimatablesByTarget = (0, Yk.g)("Scene", "getAllAnimatablesByTarget")), (wF = XB.prototype).stopAllAnimations ?? (wF.stopAllAnimations = (0, Yk.g)("Scene", "stopAllAnimations")), (dF = XB.prototype).getSoundByName ?? (dF.getSoundByName = (0, Yk.g)("Scene", "getSoundByName")), (sF = XB.prototype).createOrUpdateSelectionOctree ?? (sF.createOrUpdateSelectionOctree = (0, Yk.g)("Scene", "createOrUpdateSelectionOctree")), (VF = XB.prototype).createDefaultLight ?? (VF.createDefaultLight = (0, Yk.g)("Scene", "createDefaultLight")), (JF = XB.prototype).createDefaultCamera ?? (JF.createDefaultCamera = (0, Yk.g)("Scene", "createDefaultCamera")), (AF = XB.prototype).createDefaultCameraOrLight ?? (AF.createDefaultCameraOrLight = (0, Yk.g)("Scene", "createDefaultCameraOrLight")), (eF = XB.prototype).createDefaultSkybox ?? (eF.createDefaultSkybox = (0, Yk.g)("Scene", "createDefaultSkybox")), (yF = XB.prototype).createDefaultEnvironment ?? (yF.createDefaultEnvironment = (0, Yk.g)("Scene", "createDefaultEnvironment")), (fF = XB.prototype).createDefaultVRExperience ?? (fF.createDefaultVRExperience = (0, Yk.g)("Scene", "createDefaultVRExperience")), (mF = XB.prototype).createDefaultXRExperienceAsync ?? (mF.createDefaultXRExperienceAsync = (0, Yk.g)("Scene", "createDefaultXRExperienceAsync")), (WF = XB.prototype).getGlowLayerByName ?? (WF.getGlowLayerByName = (0, Yk.g)("Scene", "getGlowLayerByName")), (vF = XB.prototype).getHighlightLayerByName ?? (vF.getHighlightLayerByName = (0, Yk.g)("Scene", "getHighlightLayerByName")), (iF = XB.prototype).getSelectionOutlineLayerByName ?? (iF.getSelectionOutlineLayerByName = (0, Yk.g)("Scene", "getSelectionOutlineLayerByName")), (YF = XB.prototype).removeLensFlareSystem ?? (YF.removeLensFlareSystem = (0, Yk.g)("Scene", "removeLensFlareSystem")), (oF = XB.prototype).addLensFlareSystem ?? (oF.addLensFlareSystem = (0, Yk.g)("Scene", "addLensFlareSystem")), (LF = XB.prototype).getLensFlareSystemByName ?? (LF.getLensFlareSystemByName = (0, Yk.g)("Scene", "getLensFlareSystemByName")), (OF = XB.prototype).getLensFlareSystemByID ?? (OF.getLensFlareSystemByID = (0, Yk.g)("Scene", "getLensFlareSystemByID")), (EF = XB.prototype).getLensFlareSystemById ?? (EF.getLensFlareSystemById = (0, Yk.g)("Scene", "getLensFlareSystemById")), (SF = XB.prototype).getPhysicsEngine ?? (SF.getPhysicsEngine = (0, Yk.g)("Scene", "getPhysicsEngine")), (NF = XB.prototype).enablePhysics ?? (NF.enablePhysics = (0, Yk.g)("Scene", "enablePhysics")), (HF = XB.prototype).disablePhysicsEngine ?? (HF.disablePhysicsEngine = (0, Yk.g)("Scene", "disablePhysicsEngine")), (uF = XB.prototype).isPhysicsEnabled ?? (uF.isPhysicsEnabled = (0, Yk.g)("Scene", "isPhysicsEnabled")), (MF = XB.prototype).deleteCompoundImpostor ?? (MF.deleteCompoundImpostor = (0, Yk.g)("Scene", "deleteCompoundImpostor")), (gF = XB.prototype).removeReflectionProbe ?? (gF.removeReflectionProbe = (0, Yk.g)("Scene", "removeReflectionProbe")), (UF = XB.prototype).addReflectionProbe ?? (UF.addReflectionProbe = (0, Yk.g)("Scene", "addReflectionProbe")), (cF = XB.prototype).getBoundingBoxRenderer ?? (cF.getBoundingBoxRenderer = (0, Yk.g)("Scene", "getBoundingBoxRenderer")), (GF = XB.prototype).enableDepthRenderer ?? (GF.enableDepthRenderer = (0, Yk.g)("Scene", "enableDepthRenderer")), (TF = XB.prototype).disableDepthRenderer ?? (TF.disableDepthRenderer = (0, Yk.g)("Scene", "disableDepthRenderer")), (rF = XB.prototype).enableFluidRenderer ?? (rF.enableFluidRenderer = (0, Yk.g)("Scene", "enableFluidRenderer")), (DF = XB.prototype).disableFluidRenderer ?? (DF.disableFluidRenderer = (0, Yk.g)("Scene", "disableFluidRenderer")), (zF = XB.prototype).enableGeometryBufferRenderer ?? (zF.enableGeometryBufferRenderer = (0, Yk.g)("Scene", "enableGeometryBufferRenderer")), (PF = XB.prototype).disableGeometryBufferRenderer ?? (PF.disableGeometryBufferRenderer = (0, Yk.g)("Scene", "disableGeometryBufferRenderer")), (hF = XB.prototype).enableIblCdfGenerator ?? (hF.enableIblCdfGenerator = (0, Yk.g)("Scene", "enableIblCdfGenerator")), (qF = XB.prototype).disableIblCdfGenerator ?? (qF.disableIblCdfGenerator = (0, Yk.g)("Scene", "disableIblCdfGenerator")), (CF = XB.prototype).getOutlineRenderer ?? (CF.getOutlineRenderer = (0, Yk.g)("Scene", "getOutlineRenderer")), (ZF = XB.prototype).enablePrePassRenderer ?? (ZF.enablePrePassRenderer = (0, Yk.g)("Scene", "enablePrePassRenderer")), (pF = XB.prototype).disablePrePassRenderer ?? (pF.disablePrePassRenderer = (0, Yk.g)("Scene", "disablePrePassRenderer")), (KF = XB.prototype).enableSubSurfaceForPrePass ?? (KF.enableSubSurfaceForPrePass = (0, Yk.g)("Scene", "enableSubSurfaceForPrePass")), (xF = XB.prototype).disableSubSurfaceForPrePass ?? (xF.disableSubSurfaceForPrePass = (0, Yk.g)("Scene", "disableSubSurfaceForPrePass")), (jF = XB.prototype).pickSprite ?? (jF.pickSprite = (0, Yk.g)("Scene", "pickSprite")), (lF = XB.prototype).pickSpriteWithRay ?? (lF.pickSpriteWithRay = (0, Yk.g)("Scene", "pickSpriteWithRay")), (nF = XB.prototype).multiPickSprite ?? (nF.multiPickSprite = (0, Yk.g)("Scene", "multiPickSprite")), (IF = XB.prototype).multiPickSpriteWithRay ?? (IF.multiPickSpriteWithRay = (0, Yk.g)("Scene", "multiPickSpriteWithRay")), (QF = XB.prototype).setPointerOverSprite ?? (QF.setPointerOverSprite = (0, Yk.g)("Scene", "setPointerOverSprite")), (kB = XB.prototype).getPointerOverSprite ?? (kB.getPointerOverSprite = (0, Yk.g)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(XB.prototype, "mainSoundTrack") || Object.defineProperty(XB.prototype, "mainSoundTrack", (0, Yk.f)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(XB.prototype, "soundTracks") || Object.defineProperty(XB.prototype, "soundTracks", (0, Yk.f)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(XB.prototype, "audioEnabled") || Object.defineProperty(XB.prototype, "audioEnabled", (0, Yk.f)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(XB.prototype, "headphone") || Object.defineProperty(XB.prototype, "headphone", (0, Yk.f)("Scene", "headphone")), Object.getOwnPropertyDescriptor(XB.prototype, "audioListenerPositionProvider") || Object.defineProperty(XB.prototype, "audioListenerPositionProvider", (0, Yk.f)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(XB.prototype, "audioListenerRotationProvider") || Object.defineProperty(XB.prototype, "audioListenerRotationProvider", (0, Yk.f)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(XB.prototype, "audioPositioningRefreshRate") || Object.defineProperty(XB.prototype, "audioPositioningRefreshRate", (0, Yk.f)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(XB.prototype, "selectionOctree") || Object.defineProperty(XB.prototype, "selectionOctree", (0, Yk.f)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(XB.prototype, "debugLayer") || Object.defineProperty(XB.prototype, "debugLayer", (0, Yk.f)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(XB.prototype, "gamepadManager") || Object.defineProperty(XB.prototype, "gamepadManager", (0, Yk.f)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(XB.prototype, "simplificationQueue") || Object.defineProperty(XB.prototype, "simplificationQueue", (0, Yk.f)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(XB.prototype, "onBeforePhysicsObservable") || Object.defineProperty(XB.prototype, "onBeforePhysicsObservable", (0, Yk.f)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(XB.prototype, "onAfterPhysicsObservable") || Object.defineProperty(XB.prototype, "onAfterPhysicsObservable", (0, Yk.f)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(XB.prototype, "reflectionProbes") || Object.defineProperty(XB.prototype, "reflectionProbes", (0, Yk.f)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(XB.prototype, "forceShowBoundingBoxes") || Object.defineProperty(XB.prototype, "forceShowBoundingBoxes", (0, Yk.f)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(XB.prototype, "depthPeelingRenderer") || Object.defineProperty(XB.prototype, "depthPeelingRenderer", (0, Yk.f)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(XB.prototype, "useOrderIndependentTransparency") || Object.defineProperty(XB.prototype, "useOrderIndependentTransparency", (0, Yk.f)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(XB.prototype, "fluidRenderer") || Object.defineProperty(XB.prototype, "fluidRenderer", (0, Yk.f)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(XB.prototype, "geometryBufferRenderer") || Object.defineProperty(XB.prototype, "geometryBufferRenderer", (0, Yk.f)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(XB.prototype, "iblCdfGenerator") || Object.defineProperty(XB.prototype, "iblCdfGenerator", (0, Yk.f)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(XB.prototype, "prePassRenderer") || Object.defineProperty(XB.prototype, "prePassRenderer", (0, Yk.f)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(XB.prototype, "subSurfaceConfiguration") || Object.defineProperty(XB.prototype, "subSurfaceConfiguration", (0, Yk.f)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(XB.prototype, "spriteManagers") || Object.defineProperty(XB.prototype, "spriteManagers", (0, Yk.f)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(XB.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(XB.prototype, "onBeforeSpritesRenderingObservable", (0, Yk.f)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(XB.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(XB.prototype, "onAfterSpritesRenderingObservable", (0, Yk.f)("Scene", "onAfterSpritesRenderingObservable"))
  },
  39575: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Rk,
      f: () => tk
    });
    class Rk {}
    Rk.NAME_EFFECTLAYER = "EffectLayer", Rk.NAME_LAYER = "Layer", Rk.NAME_LENSFLARESYSTEM = "LensFlareSystem", Rk.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", Rk.NAME_PARTICLESYSTEM = "ParticleSystem", Rk.NAME_GAMEPAD = "Gamepad", Rk.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", Rk.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", Rk.NAME_PREPASSRENDERER = "PrePassRenderer", Rk.NAME_DEPTHRENDERER = "DepthRenderer", Rk.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", Rk.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", Rk.NAME_SPRITE = "Sprite", Rk.NAME_SUBSURFACE = "SubSurface", Rk.NAME_OUTLINERENDERER = "Outline", Rk.NAME_PROCEDURALTEXTURE = "ProceduralTexture", Rk.NAME_SHADOWGENERATOR = "ShadowGenerator", Rk.NAME_OCTREE = "IBk", Rk.NAME_PHYSICSENGINE = "PhysicsEngine", Rk.NAME_AUDIO = "Audio", Rk.NAME_FLUIDRENDERER = "FluidRenderer", Rk.NAME_IBLCDFGENERATOR = "iblCDFGenerator", Rk.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", Rk.STEP_ISREADYFORMESH_EFFECTLAYER = 0, Rk.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, Rk.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, Rk.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, Rk.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, Rk.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, Rk.STEP_BEFORECAMERADRAW_PREPASS = 0, Rk.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, Rk.STEP_BEFORECAMERADRAW_LAYER = 2, Rk.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, Rk.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, Rk.STEP_BEFORERENDERINGMESH_PREPASS = 0, Rk.STEP_BEFORERENDERINGMESH_OUTLINE = 1, Rk.STEP_AFTERRENDERINGMESH_PREPASS = 0, Rk.STEP_AFTERRENDERINGMESH_OUTLINE = 1, Rk.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, Rk.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, Rk.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, Rk.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, Rk.STEP_BEFORECLEAR_PREPASS = 1, Rk.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, Rk.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, Rk.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, Rk.STEP_AFTERCAMERADRAW_PREPASS = 0, Rk.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, Rk.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, Rk.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, Rk.STEP_AFTERCAMERADRAW_LAYER = 4, Rk.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, Rk.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, Rk.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, Rk.STEP_AFTERRENDER_AUDIO = 0, Rk.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, Rk.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, Rk.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, Rk.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, Rk.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, Rk.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, Rk.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, Rk.STEP_POINTERMOVE_SPRITE = 0, Rk.STEP_POINTERDOWN_SPRITE = 0, Rk.STEP_POINTERUP_SPRITE = 0;
    class tk extends Array {
      constructor(kk) {
        super(...kk)
      }
      static Create() {
        return Object.create(tk.prototype)
      }
      registerStep(kk, Fk, Bk) {
        let Rk, tk = 0;
        for (; tk < this.length; tk++) {
          if (Rk = this[tk].index, kk < Rk) break
        }
        this.splice(tk, 0, {
          index: kk,
          component: Fk,
          action: Bk.bind(Fk)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  39397: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk,
      i: () => bk,
      j: () => Rk,
      l: () => tk,
      o: () => ak
    });

    function Rk(kk, Fk, Bk, Rk, tk, ak) {
      function Xk(kk) {
        if (void 0 !== kk && "function" !== typeof kk) throw new TypeError("Function expected");
        return kk
      }
      for (var bk, wk = Rk.kind, dk = "getter" === wk ? "get" : "setter" === wk ? "set" : "value", sk = !Fk && kk ? Rk.static ? kk : kk.prototype : null, Vk = Fk || (sk ? Object.getOwnPropertyDescriptor(sk, Rk.name) : {}), Jk = !1, Ak = Bk.length - 1; Ak >= 0; Ak--) {
        var ek = {};
        for (var yk in Rk) ek[yk] = "access" === yk ? {} : Rk[yk];
        for (var yk in Rk.access) ek.access[yk] = Rk.access[yk];
        ek.addInitializer = function(kk) {
          if (Jk) throw new TypeError("Cannot add initializers after decoration has completed");
          ak.push(Xk(kk || null))
        };
        var fk = (0, Bk[Ak])("accessor" === wk ? {
          get: Vk.get,
          set: Vk.set
        } : Vk[dk], ek);
        if ("accessor" === wk) {
          if (void 0 === fk) continue;
          if (null === fk || "object" !== typeof fk) throw new TypeError("Object expected");
          (bk = Xk(fk.get)) && (Vk.get = bk), (bk = Xk(fk.set)) && (Vk.set = bk), (bk = Xk(fk.init)) && tk.unshift(bk)
        } else(bk = Xk(fk)) && ("field" === wk ? tk.unshift(bk) : Vk[dk] = bk)
      }
      sk && Object.defineProperty(sk, Rk.name, Vk), Jk = !0
    }

    function tk(kk, Fk, Bk) {
      for (var Rk = arguments.length > 2, tk = 0; tk < Fk.length; tk++) Bk = Rk ? Fk[tk].call(kk, Bk) : Fk[tk].call(kk);
      return Rk ? Bk : void 0
    }

    function ak(kk, Fk, Bk) {
      return "symbol" === typeof Fk && (Fk = Fk.description ? "[".concat(Fk.description, "]") : ""), Object.defineProperty(kk, "name", {
        configurable: !0,
        value: Bk ? "".concat(Bk, " ", Fk) : Fk
      })
    }
    Object.create;
    Object.create;

    function Xk(kk, Fk, Bk, Rk) {
      if ("a" === Bk && !Rk) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof Fk ? kk !== Fk || !Rk : !Fk.has(kk)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === Bk ? Rk : "a" === Bk ? Rk.call(kk) : Rk ? Rk.value : Fk.get(kk)
    }

    function bk(kk, Fk, Bk, Rk, tk) {
      if ("m" === Rk) throw new TypeError("Private method is not writable");
      if ("a" === Rk && !tk) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof Fk ? kk !== Fk || !tk : !Fk.has(kk)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Rk ? tk.call(kk, Bk) : tk ? tk.value = Bk : Fk.set(kk, Bk), Bk
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);