export const id = 252;
export const ids = [252];
export const modules = {
  40141: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => lk,
      f: () => wk,
      i: () => qk,
      l: () => ak
    });
    var Xk = Ik(39914),
      Tk = Ik(38674),
      ik = Ik(40056),
      yk = Ik(39972);
    class lk {
      get Hs() {
        return this._isDisposed
      }
      constructor(kk, Fk, Ik) {
        let Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          ik = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          lk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          ak = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          qk = arguments.length > 7 ? arguments[7] : void 0,
          Lk = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, yk.e)(), kk && kk.mG ? this._engine = kk.mG().Oe() : this._engine = kk, this._updatable = Ik, this._instanced = lk, this._divisor = qk || 1, this._label = Lk, Fk instanceof Xk.d ? (this._data = null, this._buffer = Fk) : (this._data = Fk, this._buffer = null), this.byteStride = ak ? Tk : Tk * Float32Array.BYTES_PER_ELEMENT, ik || this.create()
      }
      createVertexBuffer(kk, Fk, Ik, Xk, Tk) {
        let ik = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          yk = arguments.length > 6 ? arguments[6] : void 0;
        const lk = ik ? Fk : Fk * Float32Array.BYTES_PER_ELEMENT,
          qk = Xk ? ik ? Xk : Xk * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new ak(this._engine, this, kk, this._updatable, !0, qk, void 0 === Tk ? this._instanced : Tk, lk, Ik, void 0, void 0, !0, this._divisor || yk)
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
          if (this._buffer.St > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.St, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.St, void 0, this._label));
          Tk.e.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(kk) {
        this.create(kk)
      }
      updateDirectly(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, kk, Xk ? Fk : Fk * Float32Array.BYTES_PER_ELEMENT, Ik ? Ik * this.byteStride : void 0), this._data = 0 === Fk && void 0 === Ik ? kk : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class ak {
      get Hs() {
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
      constructor(kk, Fk, Ik, Xk, Tk, yk, tk, Zk, jk, ek) {
        let wk, Hk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          Jk = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          xk = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          Pk = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = kk, "object" === typeof Xk && null !== Xk ? (wk = Xk.updatable ?? !1, Tk = Xk.postponeInternalCreation, yk = Xk.stride, tk = Xk.instanced, Zk = Xk.offset, jk = Xk.size, ek = Xk.type, Hk = Xk.normalized ?? !1, Jk = Xk.useBytes ?? !1, xk = Xk.divisor ?? 1, Pk = Xk.takeBufferOwnership ?? !1, this._label = Xk.label) : wk = !!Xk, Fk instanceof lk ? (this._buffer = Fk, this._ownsBuffer = Pk) : (this._buffer = new lk(kk, Fk, wk, yk, Tk, tk, Jk, xk, this._label), this._ownsBuffer = !0), this.uniqueId = ak._Counter++, this._kind = Ik, void 0 === ek) {
          const kk = this.getData();
          this.type = kk ? Lk(kk) : ak.FLOAT
        } else this.type = ek;
        const Kk = (0, ik.k)(this.type);
        Jk ? (this._size = jk || (yk ? yk / Kk : qk(Ik)), this.byteStride = yk || this._buffer.byteStride || this._size * Kk, this.byteOffset = Zk || 0) : (this._size = jk || yk || qk(Ik), this.byteStride = yk ? yk * Kk : this._buffer.byteStride || this._size * Kk, this.byteOffset = (Zk || 0) * Kk), this.normalized = Hk, this._instanced = void 0 !== tk && tk, this._instanceDivisor = tk ? xk : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(kk) {
        switch (kk) {
          case ak.BYTE:
            return 0;
          case ak.UNSIGNED_BYTE:
            return 1;
          case ak.SHORT:
            return 2;
          case ak.UNSIGNED_SHORT:
            return 3;
          case ak.INT:
            return 4;
          case ak.UNSIGNED_INT:
            return 5;
          case ak.FLOAT:
            return 6;
          case ak.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${kk}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (ak._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
        const Ik = this.getData();
        return Ik ? (0, ik.i)(Ik, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, kk, Fk) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, ik.k)(this.type)
      }
      qIk() {
        return this.byteOffset / (0, ik.k)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, ik.k)(this.type) : this._size
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
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(kk, Fk, void 0, Ik), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(kk, Fk) {
        (0, ik.d)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, kk, this.normalized, ((kk, Ik) => {
          for (let Xk = 0; Xk < this._size; Xk++) Fk(kk[Xk], Ik + Xk)
        }))
      }
      _alignBuffer() {}
    }

    function qk(kk) {
      switch (kk) {
        case ak.UVKind:
        case ak.UV2Kind:
        case ak.UV3Kind:
        case ak.UV4Kind:
        case ak.UV5Kind:
        case ak.UV6Kind:
          return 2;
        case ak.NormalKind:
        case ak.PositionKind:
          return 3;
        case ak.ColorKind:
        case ak.ColorInstanceKind:
        case ak.MatricesIndicesKind:
        case ak.MatricesIndicesExtraKind:
        case ak.MatricesWeightsKind:
        case ak.MatricesWeightsExtraKind:
        case ak.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + kk + "'")
      }
    }

    function Lk(kk) {
      return kk instanceof Int8Array ? ak.BYTE : kk instanceof Uint8Array ? ak.UNSIGNED_BYTE : kk instanceof Int16Array ? ak.SHORT : kk instanceof Uint16Array ? ak.UNSIGNED_SHORT : kk instanceof Int32Array ? ak.INT : kk instanceof Uint32Array ? ak.UNSIGNED_INT : ak.FLOAT
    }

    function tk(kk) {
      return (0, ik.k)(kk)
    }

    function Zk(kk, Fk, Ik, Xk, Tk, yk, lk, ak) {
      (0, ik.d)(kk, Fk, Ik, Xk, Tk, yk, lk, ((kk, Fk) => {
        for (let Ik = 0; Ik < Xk; Ik++) ak(kk[Ik], Fk + Ik)
      }))
    }

    function jk(kk, Fk, Ik, Xk, Tk, yk, lk, ak) {
      return (0, ik.i)(kk, Fk, Ik, Xk, Tk, yk, lk, ak)
    }
    ak._Counter = 0, ak.BYTE = 5120, ak.UNSIGNED_BYTE = 5121, ak.SHORT = 5122, ak.UNSIGNED_SHORT = 5123, ak.INT = 5124, ak.UNSIGNED_INT = 5125, ak.FLOAT = 5126, ak.HALF_FLOAT = 5131, ak.PositionKind = "position", ak.NormalKind = "normal", ak.TangentKind = "tangent", ak.UVKind = "uv", ak.UV2Kind = "uv2", ak.UV3Kind = "uv3", ak.UV4Kind = "uv4", ak.UV5Kind = "uv5", ak.UV6Kind = "uv6", ak.ColorKind = "color", ak.ColorInstanceKind = "instanceColor", ak.MatricesIndicesKind = "matricesIndices", ak.MatricesWeightsKind = "matricesWeights", ak.MatricesIndicesExtraKind = "matricesIndicesExtra", ak.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let ek = !1;

    function wk() {
      ek || (ek = !0, ak.DeduceStride = qk, ak.GetDataType = Lk, ak.GetTypeByteLength = tk, ak.ForEach = Zk, ak.GetFloatData = jk)
    }
  },
  39914: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk
    });
    class Xk {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.St = 0, this.is32Bits = !1, this.uniqueId = Xk._Counter++
      }
    }
    Xk._Counter = 0
  },
  40139: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ik
    });
    var Xk = Ik(37153),
      Tk = Ik(40141);
    class ik {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || Fk && !this.pickedMesh.isVerticesDataPresent(Tk.l.NormalKind)) return null;
        let Ik, ik = this.pickedMesh.yXk();
        0 === ik?.length && (ik = null);
        const yk = Xk.l.Ge[0],
          lk = Xk.l.Ge[1],
          ak = Xk.l.Ge[2];
        if (Fk) {
          const kk = this.pickedMesh.getVerticesData(Tk.l.NormalKind);
          let Fk = ik ? Xk.t.FromArrayToRef(kk, 3 * ik[3 * this.faceId], yk) : yk.t5(kk[3 * this.faceId * 3], kk[3 * this.faceId * 3 + 1], kk[3 * this.faceId * 3 + 2]),
            qk = ik ? Xk.t.FromArrayToRef(kk, 3 * ik[3 * this.faceId + 1], lk) : lk.t5(kk[3 * (3 * this.faceId + 1)], kk[3 * (3 * this.faceId + 1) + 1], kk[3 * (3 * this.faceId + 1) + 2]),
            Lk = ik ? Xk.t.FromArrayToRef(kk, 3 * ik[3 * this.faceId + 2], ak) : ak.t5(kk[3 * (3 * this.faceId + 2)], kk[3 * (3 * this.faceId + 2) + 1], kk[3 * (3 * this.faceId + 2) + 2]);
          Fk = Fk.scale(this.bu), qk = qk.scale(this.bv), Lk = Lk.scale(1 - this.bu - this.bv), Ik = new Xk.t(Fk.x + qk.x + Lk.x, Fk.y + qk.y + Lk.y, Fk.z + qk.z + Lk.z)
        } else {
          const kk = this.pickedMesh.getVerticesData(Tk.l.PositionKind),
            Fk = ik ? Xk.t.FromArrayToRef(kk, 3 * ik[3 * this.faceId], yk) : yk.t5(kk[3 * this.faceId * 3], kk[3 * this.faceId * 3 + 1], kk[3 * this.faceId * 3 + 2]),
            qk = ik ? Xk.t.FromArrayToRef(kk, 3 * ik[3 * this.faceId + 1], lk) : lk.t5(kk[3 * (3 * this.faceId + 1)], kk[3 * (3 * this.faceId + 1) + 1], kk[3 * (3 * this.faceId + 1) + 2]),
            Lk = ik ? Xk.t.FromArrayToRef(kk, 3 * ik[3 * this.faceId + 2], ak) : ak.t5(kk[3 * (3 * this.faceId + 2)], kk[3 * (3 * this.faceId + 2) + 1], kk[3 * (3 * this.faceId + 2) + 2]),
            tk = Fk.subtract(qk),
            Zk = Lk.subtract(qk);
          Ik = Xk.t.Cross(tk, Zk)
        }
        const qk = (kk, Fk) => {
          if (-1 !== this.thinInstanceIndex) {
            const Ik = kk._thinInstanceDataStorage.matrixData,
              Tk = this.thinInstanceIndex << 4;
            if (Ik && Ik.length > Tk) {
              const kk = Xk.l.Matrix[0];
              Xk.c.FromArrayToRef(Ik, Tk, kk), Xk.t.TransformNormalToRef(Fk, kk, Fk)
            }
          }
          let Ik = kk.getWorldMatrix();
          kk.nonUniformScaling && (Xk.l.Matrix[0].kS(Ik), Ik = Xk.l.Matrix[0], Ik.setTranslationFromFloats(0, 0, 0), Ik.invert(), Ik.transposeToRef(Xk.l.Matrix[1]), Ik = Xk.l.Matrix[1]), Xk.t.TransformNormalToRef(Fk, Ik, Fk)
        };
        if (kk && qk(this.pickedMesh, Ik), this.ray) {
          const Fk = Xk.l.Ge[0].kS(Ik);
          kk || qk(this.pickedMesh, Fk), Xk.t.Dot(Fk, this.ray.direction) > 0 && Ik.negateInPlace()
        }
        return Ik.normalize(), Ik
      }
      getTextureCoordinates() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tk.l.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(kk)) return null;
        const Fk = this.pickedMesh.yXk();
        if (!Fk) return null;
        const Ik = this.pickedMesh.getVerticesData(kk);
        if (!Ik) return null;
        let ik = Xk.p.FromArray(Ik, 2 * Fk[3 * this.faceId]),
          yk = Xk.p.FromArray(Ik, 2 * Fk[3 * this.faceId + 1]),
          lk = Xk.p.FromArray(Ik, 2 * Fk[3 * this.faceId + 2]);
        return ik = ik.scale(this.bu), yk = yk.scale(this.bv), lk = lk.scale(1 - this.bu - this.bv), new Xk.p(ik.x + yk.x + lk.x, ik.y + yk.y + lk.y)
      }
    }
  },
  39972: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ik
    });
    var Xk = Ik(39825);
    let Tk = !1;

    function ik() {
      Tk || (Tk = !0, Xk.ThinEngine.prototype.updateDynamicIndexBuffer = function(kk, Fk) {
        let Ik;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(kk), Ik = kk.is32Bits ? Fk instanceof Uint32Array ? Fk : new Uint32Array(Fk) : Fk instanceof Uint16Array ? Fk : new Uint16Array(Fk), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Ik, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, Xk.ThinEngine.prototype.updateDynamicVertexBuffer = function(kk, Fk, Ik, Xk) {
        this.bindArrayBuffer(kk), void 0 === Ik && (Ik = 0);
        const Tk = Fk.byteLength || Fk.length;
        void 0 === Xk || Xk >= Tk && 0 === Ik ? Fk instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Ik, new Float32Array(Fk)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Ik, Fk) : Fk instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Ik, new Float32Array(Fk).subarray(0, Xk / 4)) : (Fk = ArrayBuffer.isView(Fk) ? new Uint8Array(Fk.buffer, Fk.byteOffset, Xk) : new Uint8Array(Fk, 0, Xk), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Ik, Fk)), this._resetVertexBufferBinding()
      })
    }
  },
  39931: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk
    });
    class Xk {
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
  39885: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => xk
    });
    var Xk = Ik(37187),
      Tk = Ik(39830),
      ik = Ik(37178),
      yk = Ik(38674),
      lk = Ik(37173),
      ak = Ik(39891);
    class qk {
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
    class Lk {
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
    class tk {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = tk.ALWAYS, this.opStencilFail = tk.KEEP, this.opDepthFail = tk.KEEP, this.opStencilDepthPass = tk.REPLACE, this.backFunc = tk.ALWAYS, this.backOpStencilFail = tk.KEEP, this.backOpDepthFail = tk.KEEP, this.backOpStencilDepthPass = tk.REPLACE
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
    tk.ALWAYS = 519, tk.KEEP = 7680, tk.REPLACE = 7681;
    var Zk = Ik(39894),
      jk = Ik(39863),
      ek = Ik(39818),
      wk = Ik(39850),
      Hk = Ik(39860);

    function Jk(kk, Fk) {
      if (Fk) {
        const {
          requestAnimationFrame: Ik
        } = Fk;
        if ("function" === typeof Ik) return Ik(kk)
      }
      if ((0, wk.j)()) {
        const {
          requestAnimationFrame: Ik
        } = Fk || window;
        if ("function" === typeof Ik) return Ik(kk)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(kk);
      return setTimeout(kk, 16)
    }
    class xk {
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
      get IXk() {
        return this._useReverseDepthBuffer
      }
      set IXk(kk) {
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
        if (kk) return this.isNDCHalfZRange ? kk.IS_NDC_HALF_ZRANGE = "" : delete kk.IS_NDC_HALF_ZRANGE, this.IXk ? kk.USE_REVERSE_DEPTHBUFFER = "" : delete kk.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? kk.USE_EXACT_SRGB_CONVERSIONS = "" : delete kk.USE_EXACT_SRGB_CONVERSIONS);
        {
          let kk = "";
          return this.isNDCHalfZRange && (kk += "#define IS_NDC_HALF_ZRANGE"), this.IXk && (kk && (kk += "\n"), kk += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (kk && (kk += "\n"), kk += "#define USE_EXACT_SRGB_CONVERSIONS"), kk
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
        Tk.d.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        yk.e.Warn(this.name + " context successfully restored."), this.Ee.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(kk) {
        setTimeout((() => {
          this._clearEmptyResources();
          const Fk = this._depthCullingState.depthTest,
            Ik = this._depthCullingState.depthFunc,
            Xk = this._depthCullingState.depthMask,
            Tk = this._stencilState.stencilTest;
          kk(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = Fk, this._depthCullingState.depthFunc = Ik, this._depthCullingState.depthMask = Xk, this._stencilState.stencilTest = Tk, this._flagContextRestored()
        }), 0)
      }
      get Hs() {
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
            kk && kk(this.customAnimationFrameRequester.pe), delete this.customAnimationFrameRequester.pe
          }
        } else if (0 !== this._frameHandler) {
          const kk = this._frameHandler;
          if (this._frameHandler = 0, (0, wk.j)()) {
            const {
              cancelAnimationFrame: Fk
            } = this.getHostWindow() || window;
            if ("function" === typeof Fk) return Fk(kk)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(kk);
          return clearTimeout(kk)
        }
      }
      Zx() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      Hx() {
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
          (this.Hs || !this.renderEvenInBackground && this._windowIsBackground) && (kk = !1), kk && (this.Zx(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.Hx())
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
        return Jk(kk, Fk)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.pe = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.pe) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
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
        this._depthCullingState.zOffset = this.IXk ? -kk : kk
      }
      getZOffset() {
        const kk = this._depthCullingState.zOffset;
        return this.IXk ? -kk : kk
      }
      setZOffsetUnits(kk) {
        this._depthCullingState.zOffsetUnits = this.IXk ? -kk : kk
      }
      getZOffsetUnits() {
        const kk = this._depthCullingState.zOffsetUnits;
        return this.IXk ? -kk : kk
      }
      getHostWindow() {
        return (0, wk.j)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
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
      setViewport(kk, Fk, Ik) {
        const Xk = Fk || this.getRenderWidth(),
          Tk = Ik || this.getRenderHeight(),
          ik = kk.x || 0,
          yk = kk.y || 0;
        this._cachedViewport = kk, this._viewport(ik * Xk, yk * Tk, Xk * kk.width, Tk * kk.height)
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
      _createTextureBase(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          lk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          ak = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          qk = arguments.length > 7 ? arguments[7] : void 0,
          Lk = arguments.length > 8 ? arguments[8] : void 0,
          tk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Zk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          jk = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          wk = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          Hk = arguments.length > 13 ? arguments[13] : void 0,
          Jk = arguments.length > 14 ? arguments[14] : void 0,
          Pk = arguments.length > 15 ? arguments[15] : void 0;
        const Kk = "data:" === (kk = kk || "").substring(0, 5),
          Qk = "blob:" === kk.substring(0, 5),
          sk = Kk && -1 !== kk.indexOf(";base64,"),
          Vk = Zk || new ek.b(this, 1);
        Vk !== Zk && (Vk.label = kk.substring(0, 60));
        const zk = kk;
        !this._transformTextureUrl || sk || Zk || tk || (kk = this._transformTextureUrl(kk)), zk !== kk && (Vk._originalUrl = zk);
        const Sk = kk.lastIndexOf(".");
        let vk = wk || (Sk > -1 ? kk.substring(Sk).toLowerCase() : "");
        vk.indexOf("?") > -1 && (vk = vk.split("?")[0]);
        const Ek = xk.GetCompatibleTextureLoader(vk, Hk);
        Xk && Xk.addPendingData(Vk), Vk.url = kk, Vk.generateMipMaps = !Fk, Vk.samplingMode = Tk, Vk.invertY = Ik, Vk._useSRGBBuffer = this._getUseSRGBBuffer(!!Pk, Fk), this._doNotHandleContextLost || (Vk._buffer = tk);
        let Ok = null;
        lk && !Zk && (Ok = Vk.onLoadedObservable.add(lk)), Zk || this._internalTexturesCache.push(Vk);
        const nk = (Ik, Zk) => {
          Xk && Xk.removePendingData(Vk), kk === zk ? (Ok && Vk.onLoadedObservable.remove(Ok), ik.e.UseFallbackTexture && kk !== ik.e.FallbackTexture && this._createTextureBase(ik.e.FallbackTexture, Fk, Vk.invertY, Xk, Tk, null, ak, qk, Lk, tk, Vk), Ik = (Ik || "Unknown error") + (ik.e.UseFallbackTexture ? " - Fallback texture was used" : ""), Vk.onErrorObservable.notifyObservers({
            message: Ik,
            exception: Zk
          }), ak && ak(Ik, Zk)) : (yk.e.Warn(`Failed to load ${kk}, falling back to ${zk}`), this._createTextureBase(zk, Fk, Vk.invertY, Xk, Tk, lk, ak, qk, Lk, tk, Vk, jk, wk, Hk, Jk, Pk))
        };
        if (Ek) {
          const Fk = async kk => {
            (await Ek).loadData(kk, Vk, ((kk, Fk, Ik, ik, yk, lk) => {
              lk ? nk("TextureLoader failed to load data") : qk(Vk, vk, Xk, {
                width: kk,
                height: Fk
              }, Vk.invertY, !Ik, ik, (() => (yk(), !1)), Tk)
            }), Jk)
          };
          if (tk) {
            const kk = async kk => {
              try {
                await Fk(kk)
              } catch (Ik) {
                nk("Failed to parse texture data", Ik)
              }
            };
            tk instanceof ArrayBuffer ? kk(new Uint8Array(tk)) : ArrayBuffer.isView(tk) ? kk(tk) : ak && ak("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(kk, (async kk => {
            try {
              await Fk(new Uint8Array(kk))
            } catch (Ik) {
              nk("Failed to parse texture data", Ik)
            }
          }), void 0, Xk ? Xk.offlineProvider : void 0, !0, ((kk, Fk) => {
            nk("Unable to load " + (kk && kk.responseURL, Fk))
          }))
        } else {
          const Ik = kk => {
            Qk && !this._doNotHandleContextLost && (Vk._buffer = kk), qk(Vk, vk, Xk, kk, Vk.invertY, Fk, !1, Lk, Tk)
          };
          !Kk || sk ? tk && ("string" === typeof tk.decoding || tk.close) ? Ik(tk) : xk._FileToolsLoadImage(kk || "", Ik, nk, Xk ? Xk.offlineProvider : null, Hk, Vk.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof tk || tk instanceof ArrayBuffer || ArrayBuffer.isView(tk) || tk instanceof Blob ? xk._FileToolsLoadImage(tk, Ik, nk, Xk ? Xk.offlineProvider : null, Hk, Vk.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : tk && Ik(tk)
        }
        return Vk
      }
      _rebuildBuffers() {
        for (const kk of this._uniformBuffers) kk._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, wk.d)() ? document : null
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
      constructor(kk, Fk, Ik) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new qk, this._stencilStateComposer = new Lk, this._stencilState = new tk, this._alphaState = new Zk.b(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new Xk.e, this.onCanvasFocusObservable = new Xk.e, this.onNewSceneAddedObservable = new Xk.e, this.onResizeObservable = new Xk.e, this.onCanvasPointerOutObservable = new Xk.e, this.onEffectErrorObservable = new Xk.e, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new Xk.e, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = kk => this._renderLoop(kk), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new Xk.e, this.onAfterShaderCompilationObservable = new Xk.e, this.onBeginFrameObservable = new Xk.e, this.onEndFrameObservable = new Xk.e, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new Xk.e, this.Ee = new Xk.e, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.hG = new Xk.e, this.onReleaseEffectsObservable = new Xk.e, ik.e.Instances.push(this), this.startTime = ak.d.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, lk.d.SetMatrixPrecision(!!Fk.useLargeWorldRendering || !!Fk.useHighPrecisionMatrix), (0, wk.h)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), Fk.antialias = kk ?? Fk.antialias, Fk.deterministicLockstep = Fk.deterministicLockstep ?? !1, Fk.lockstepMaxSteps = Fk.lockstepMaxSteps ?? 4, Fk.timeStep = Fk.timeStep ?? 1 / 60, Fk.stencil = Fk.stencil ?? !0, this._audioContext = Fk.audioEngineOptions?.audioContext ?? null, this._audioDestination = Fk.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = Fk.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!Fk.doNotHandleContextLost, this._isStencilEnable = !!Fk.stencil, this.useExactSrgbConversions = Fk.useExactSrgbConversions ?? !1, this.canvasTabIndex = Fk.canvasTabIndex ?? this.canvasTabIndex;
        const Tk = (0, wk.j)() && window.devicePixelRatio || 1,
          yk = Fk.limitDeviceRatio || Tk;
        Ik = Ik || Fk.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = Ik, this._hardwareScalingLevel = Ik ? 1 / Math.min(yk, Tk) : 1, this._lastDevicePixelRatio = Tk, this._creationOptions = Fk
      }
      resize() {
        let kk, Fk, Ik = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const kk = (0, wk.j)() && window.devicePixelRatio || 1,
            Fk = this._lastDevicePixelRatio / kk;
          this._lastDevicePixelRatio = kk, this._hardwareScalingLevel *= Fk
        }
        if ((0, wk.j)() && (0, wk.d)())
          if (this._renderingCanvas) {
            const Ik = this._renderingCanvas.getBoundingClientRect?.();
            kk = this._renderingCanvas.clientWidth || Ik?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, Fk = this._renderingCanvas.clientHeight || Ik?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else kk = window.innerWidth, Fk = window.innerHeight;
        else kk = this._renderingCanvas ? this._renderingCanvas.width : 100, Fk = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(kk / this._hardwareScalingLevel, Fk / this._hardwareScalingLevel, Ik)
      }
      setSize(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (kk |= 0, Fk |= 0, !Ik && this._renderingCanvas.width === kk && this._renderingCanvas.height === Fk) return !1;
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
      createRawTexture(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk) {
        throw (0, jk.j)("engine.rawTexture")
      }
      createRawCubeTexture(kk, Fk, Ik, Xk, Tk, ik, yk, lk) {
        throw (0, jk.j)("engine.rawTexture")
      }
      createRawTexture3D(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk) {
        throw (0, jk.j)("engine.rawTexture")
      }
      createRawTexture2DArray(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk) {
        throw (0, jk.j)("engine.rawTexture")
      }
      _sharedInit(kk) {
        this._renderingCanvas = kk
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const kk = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== kk.indexOf("Mobile") || -1 !== kk.indexOf("Mac") && (0, wk.d)() && "ontouchend" in document
        }, this._checkForMobile(), (0, wk.j)() && window.addEventListener("resize", this._checkForMobile))
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
      resizeImageBitmap(kk, Fk, Ik) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(kk) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(kk, Fk) {
        if ("undefined" === typeof document) return new OffscreenCanvas(kk, Fk);
        const Ik = document.createElement("canvas");
        return Ik.width = kk, Ik.height = Fk, Ik
      }
      createCanvas(kk, Fk) {
        return xk._CreateCanvas(kk, Fk)
      }
      static _FileToolsLoadImage(kk, Fk, Ik, Xk, Tk, ik, yk) {
        if (!Hk.e.loadImage) throw (0, jk.j)("FileTools");
        return Hk.e.loadImage(kk, Fk, Ik, Xk, Tk, ik, yk)
      }
      _loadFile(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = (0, Hk.k)(kk, Fk, Ik, Xk, Tk, ik);
        return this._activeRequests.push(yk), yk.onCompleteObservable.add((() => {
          const kk = this._activeRequests.indexOf(yk); - 1 !== kk && this._activeRequests.splice(kk, 1)
        })), yk
      }
      static _FileToolsLoadFile(kk, Fk, Ik, Xk, Tk, ik) {
        if (Hk.e.loadFile) return Hk.e.loadFile(kk, Fk, Ik, Xk, Tk, ik);
        throw (0, jk.j)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), Tk.d.ResetCache();
        for (const Fk of this._activeRequests) Fk.abort();
        this._boundRenderFunction = null, this.hG.notifyObservers(this), this.hG.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, wk.j)() && window.removeEventListener("resize", this._checkForMobile);
        const kk = ik.e.Instances.indexOf(this);
        kk >= 0 && ik.e.Instances.splice(kk, 1), ik.e.Instances.length || (ik.e.OnEnginesDisposedObservable.notifyObservers(this), ik.e.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(kk) {
        throw (0, jk.j)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(kk, Fk) {
        for (let Ik = 0; Ik < ik.e.Instances.length; Ik++) {
          const Xk = ik.e.Instances[Ik];
          for (let Ik = 0; Ik < Xk.scenes.length; Ik++) Xk.scenes[Ik].markAllMaterialsAsDirty(kk, Fk)
        }
      }
      static GetCompatibleTextureLoader(kk, Fk) {
        return null
      }
    }
    xk._RenderPassIdCounter = 0, xk._RescalePostProcessFactory = null, xk.CollisionsEpsilon = .001, xk.QueueNewFrame = Jk
  },
  39837: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk
    });
    class Xk {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Xk.ShadersRepository : Xk.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Xk.ShadersStore : Xk.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Xk.IncludesShadersStore : Xk.IncludesShadersStoreWGSL
      }
    }
    Xk.ShadersRepository = "src/Shaders/", Xk.ShadersStore = {}, Xk.IncludesShadersStore = {}, Xk.ShadersRepositoryWGSL = "src/ShadersWGSL/", Xk.ShadersStoreWGSL = {}, Xk.IncludesShadersStoreWGSL = {}
  },
  39852: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Zk,
      c: () => Pk,
      d: () => ek,
      g: () => jk,
      h: () => wk,
      i: () => xk,
      j: () => tk,
      k: () => qk,
      n: () => Lk,
      q: () => ak,
      u: () => lk
    });
    class Xk {
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
      _fillEffectInformation(kk, Fk, Ik, Xk, Tk, ik, yk, lk) {
        const ak = this.engine;
        if (ak.supportsUniformBuffers)
          for (const Lk in Fk) kk.bindUniformBlock(Lk, Fk[Lk]);
        let qk;
        for (this.engine.getUniforms(this, Ik).forEach(((kk, Fk) => {
            Xk[Ik[Fk]] = kk
          })), this._uniforms = Xk, qk = 0; qk < Tk.length; qk++) {
          null == kk.getUniform(Tk[qk]) && (Tk.splice(qk, 1), qk--)
        }
        Tk.forEach(((kk, Fk) => {
          ik[kk] = Fk
        }));
        for (const Lk of ak.getAttributes(this, yk)) lk.push(Lk)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(kk, Fk) {
        const Ik = this._valueCache[kk],
          Xk = Fk.updateFlag;
        if (void 0 !== Ik && Ik === Xk) return !1;
        const Tk = Fk.iXk();
        let ik = this._matrixValueCache[kk];
        if (void 0 !== Ik && null !== Ik && void 0 !== ik) {
          let Fk = !0;
          for (let kk = 15; kk >= 0; kk--)
            if (ik[kk] !== Tk[kk]) {
              Fk = !1;
              break
            } if (Fk) return this._valueCache[kk] = Xk, !1
        }
        return void 0 === ik && (ik = this._matrixValueCache[kk] = new Float32Array(16)), ik.set(Tk), this._valueCache[kk] = Xk, !0
      }
      _cacheFloat2(kk, Fk, Ik) {
        let Xk = this._valueCache[kk];
        if (!Xk || 2 !== Xk.length) return Xk = [Fk, Ik], this._valueCache[kk] = Xk, !0;
        let Tk = !1;
        return Xk[0] !== Fk && (Xk[0] = Fk, Tk = !0), Xk[1] !== Ik && (Xk[1] = Ik, Tk = !0), Tk
      }
      _cacheFloat3(kk, Fk, Ik, Xk) {
        let Tk = this._valueCache[kk];
        if (!Tk || 3 !== Tk.length) return Tk = [Fk, Ik, Xk], this._valueCache[kk] = Tk, !0;
        let ik = !1;
        return Tk[0] !== Fk && (Tk[0] = Fk, ik = !0), Tk[1] !== Ik && (Tk[1] = Ik, ik = !0), Tk[2] !== Xk && (Tk[2] = Xk, ik = !0), ik
      }
      _cacheFloat4(kk, Fk, Ik, Xk, Tk) {
        let ik = this._valueCache[kk];
        if (!ik || 4 !== ik.length) return ik = [Fk, Ik, Xk, Tk], this._valueCache[kk] = ik, !0;
        let yk = !1;
        return ik[0] !== Fk && (ik[0] = Fk, yk = !0), ik[1] !== Ik && (ik[1] = Ik, yk = !0), ik[2] !== Xk && (ik[2] = Xk, yk = !0), ik[3] !== Tk && (ik[3] = Tk, yk = !0), yk
      }
      setInt(kk, Fk) {
        const Ik = this._valueCache[kk];
        void 0 !== Ik && Ik === Fk || this.engine.setInt(this._uniforms[kk], Fk) && (this._valueCache[kk] = Fk)
      }
      setInt2(kk, Fk, Ik) {
        this._cacheFloat2(kk, Fk, Ik) && (this.engine.setInt2(this._uniforms[kk], Fk, Ik) || (this._valueCache[kk] = null))
      }
      setInt3(kk, Fk, Ik, Xk) {
        this._cacheFloat3(kk, Fk, Ik, Xk) && (this.engine.setInt3(this._uniforms[kk], Fk, Ik, Xk) || (this._valueCache[kk] = null))
      }
      setInt4(kk, Fk, Ik, Xk, Tk) {
        this._cacheFloat4(kk, Fk, Ik, Xk, Tk) && (this.engine.setInt4(this._uniforms[kk], Fk, Ik, Xk, Tk) || (this._valueCache[kk] = null))
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
        const Ik = this._valueCache[kk];
        void 0 !== Ik && Ik === Fk || this.engine.setUInt(this._uniforms[kk], Fk) && (this._valueCache[kk] = Fk)
      }
      setUInt2(kk, Fk, Ik) {
        this._cacheFloat2(kk, Fk, Ik) && (this.engine.setUInt2(this._uniforms[kk], Fk, Ik) || (this._valueCache[kk] = null))
      }
      setUInt3(kk, Fk, Ik, Xk) {
        this._cacheFloat3(kk, Fk, Ik, Xk) && (this.engine.setUInt3(this._uniforms[kk], Fk, Ik, Xk) || (this._valueCache[kk] = null))
      }
      setUInt4(kk, Fk, Ik, Xk, Tk) {
        this._cacheFloat4(kk, Fk, Ik, Xk, Tk) && (this.engine.setUInt4(this._uniforms[kk], Fk, Ik, Xk, Tk) || (this._valueCache[kk] = null))
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
        this._cacheMatrix(kk, Fk) && (this.engine.setMatrices(this._uniforms[kk], Fk.iXk()) || (this._valueCache[kk] = null))
      }
      setMatrix3x3(kk, Fk) {
        this._valueCache[kk] = null, this.engine.setMatrix3x3(this._uniforms[kk], Fk)
      }
      setMatrix2x2(kk, Fk) {
        this._valueCache[kk] = null, this.engine.setMatrix2x2(this._uniforms[kk], Fk)
      }
      setFloat(kk, Fk) {
        const Ik = this._valueCache[kk];
        void 0 !== Ik && Ik === Fk || this.engine.setFloat(this._uniforms[kk], Fk) && (this._valueCache[kk] = Fk)
      }
      setVector2(kk, Fk) {
        this._cacheFloat2(kk, Fk.x, Fk.y) && (this.engine.setFloat2(this._uniforms[kk], Fk.x, Fk.y) || (this._valueCache[kk] = null))
      }
      setFloat2(kk, Fk, Ik) {
        this._cacheFloat2(kk, Fk, Ik) && (this.engine.setFloat2(this._uniforms[kk], Fk, Ik) || (this._valueCache[kk] = null))
      }
      setVector3(kk, Fk) {
        this._cacheFloat3(kk, Fk.x, Fk.y, Fk.z) && (this.engine.setFloat3(this._uniforms[kk], Fk.x, Fk.y, Fk.z) || (this._valueCache[kk] = null))
      }
      setFloat3(kk, Fk, Ik, Xk) {
        this._cacheFloat3(kk, Fk, Ik, Xk) && (this.engine.setFloat3(this._uniforms[kk], Fk, Ik, Xk) || (this._valueCache[kk] = null))
      }
      setVector4(kk, Fk) {
        this._cacheFloat4(kk, Fk.x, Fk.y, Fk.z, Fk.w) && (this.engine.setFloat4(this._uniforms[kk], Fk.x, Fk.y, Fk.z, Fk.w) || (this._valueCache[kk] = null))
      }
      setQuaternion(kk, Fk) {
        this._cacheFloat4(kk, Fk.x, Fk.y, Fk.z, Fk.w) && (this.engine.setFloat4(this._uniforms[kk], Fk.x, Fk.y, Fk.z, Fk.w) || (this._valueCache[kk] = null))
      }
      setFloat4(kk, Fk, Ik, Xk, Tk) {
        this._cacheFloat4(kk, Fk, Ik, Xk, Tk) && (this.engine.setFloat4(this._uniforms[kk], Fk, Ik, Xk, Tk) || (this._valueCache[kk] = null))
      }
      setColor3(kk, Fk) {
        this._cacheFloat3(kk, Fk.r, Fk.g, Fk.b) && (this.engine.setFloat3(this._uniforms[kk], Fk.r, Fk.g, Fk.b) || (this._valueCache[kk] = null))
      }
      setColor4(kk, Fk, Ik) {
        this._cacheFloat4(kk, Fk.r, Fk.g, Fk.b, Ik) && (this.engine.setFloat4(this._uniforms[kk], Fk.r, Fk.g, Fk.b, Ik) || (this._valueCache[kk] = null))
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
    var Tk = Ik(39860);
    const ik = new WeakMap,
      yk = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function lk(kk) {
      let Fk = ik.get(kk);
      if (!Fk) {
        if (!kk) return yk;
        Fk = {
          _webGLVersion: kk.TEXTURE_BINDING_3D ? 2 : 1,
          _context: kk,
          parallelShaderCompile: kk.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, ik.set(kk, Fk)
      }
      return Fk
    }

    function ak(kk) {
      ik.delete(kk)
    }

    function qk(kk, Fk, Ik, Xk, Tk, ik) {
      const yk = lk(Xk);
      ik || (ik = yk._createShaderProgramInjection ?? Zk);
      return ik(kk, Jk(Fk, "vertex", Xk, yk._contextWasLost), Jk(Ik, "fragment", Xk, yk._contextWasLost), Xk, Tk, yk.validateShaderPrograms)
    }

    function Lk(kk, Fk, Ik, Xk, Tk) {
      let ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        yk = arguments.length > 6 ? arguments[6] : void 0;
      const ak = lk(Tk);
      yk || (yk = ak._createShaderProgramInjection ?? Zk);
      const qk = ak._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return yk(kk, Hk(Fk, "vertex", Xk, qk, Tk, ak._contextWasLost), Hk(Ik, "fragment", Xk, qk, Tk, ak._contextWasLost), Tk, ik, ak.validateShaderPrograms)
    }

    function tk(kk, Fk) {
      const Ik = new Xk,
        Tk = lk(kk);
      return Tk.parallelShaderCompile && !Tk.disableParallelShaderCompile && (Ik.isParallelCompiled = !0), Ik.context = Tk._context, Ik
    }

    function Zk(kk, Fk, Ik, Xk) {
      let Tk = arguments.length > 5 ? arguments[5] : void 0;
      const ik = Xk.createProgram();
      if (kk.program = ik, !ik) throw new Error("Unable to create program");
      return Xk.attachShader(ik, Fk), Xk.attachShader(ik, Ik), Xk.linkProgram(ik), kk.context = Xk, kk.vertexShader = Fk, kk.fragmentShader = Ik, kk.isParallelCompiled || ek(kk, Xk, Tk), ik
    }

    function jk(kk, Fk, Ik) {
      const Xk = kk;
      if (Xk._isDisposed) return !1;
      const Tk = lk(Fk);
      return !!(Tk && Tk.parallelShaderCompile && Tk.parallelShaderCompile.COMPLETION_STATUS_KHR && Xk.program && Fk.getProgramParameter(Xk.program, Tk.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (ek(Xk, Fk, Ik), !0)
    }

    function ek(kk, Fk, Ik) {
      const Xk = kk.context,
        Tk = kk.vertexShader,
        ik = kk.fragmentShader,
        yk = kk.program;
      if (!Xk.getProgramParameter(yk, Xk.LINK_STATUS)) {
        if (!Fk.getShaderParameter(Tk, Fk.COMPILE_STATUS)) {
          const Ik = Fk.getShaderInfoLog(Tk);
          if (Ik) throw kk.vertexCompilationError = Ik, new Error("VERTEX SHADER " + Ik)
        }
        if (!Fk.getShaderParameter(ik, Fk.COMPILE_STATUS)) {
          const Ik = Fk.getShaderInfoLog(ik);
          if (Ik) throw kk.fragmentCompilationError = Ik, new Error("FRAGMENT SHADER " + Ik)
        }
        const Ik = Xk.getProgramInfoLog(yk);
        if (Ik) throw kk.programLinkError = Ik, new Error(Ik)
      }
      if (Ik) {
        Xk.validateProgram(yk);
        if (!Xk.getProgramParameter(yk, Xk.VALIDATE_STATUS)) {
          const Fk = Xk.getProgramInfoLog(yk);
          if (Fk) throw kk.programValidationError = Fk, new Error(Fk)
        }
      }
      Xk.deleteShader(Tk), Xk.deleteShader(ik), kk.vertexShader = void 0, kk.fragmentShader = void 0, kk.onCompiled && (kk.onCompiled(), kk.onCompiled = void 0)
    }

    function wk(kk, Fk, Ik, Xk, Tk, ik, yk, ak, tk) {
      let Zk = arguments.length > 10 ? arguments[10] : void 0,
        jk = arguments.length > 11 ? arguments[11] : void 0,
        ek = arguments.length > 12 ? arguments[12] : void 0;
      const wk = lk(kk.context);
      jk || (jk = wk.createRawShaderProgramInjection ?? qk), ek || (ek = wk.createShaderProgramInjection ?? Lk);
      const Hk = kk;
      Hk.program = Xk ? jk(Hk, Fk, Ik, Hk.context, tk) : ek(Hk, Fk, Ik, ak, Hk.context, tk), Hk.program.__SPECTOR_rebuildProgram = yk, Zk()
    }

    function Hk(kk, Fk, Ik, Xk, ik, yk) {
      return Jk((0, Tk.f)(kk, Ik, Xk), Fk, ik, yk)
    }

    function Jk(kk, Fk, Ik, Xk) {
      const Tk = Ik.createShader("vertex" === Fk ? Ik.VERTEX_SHADER : Ik.FRAGMENT_SHADER);
      if (!Tk) {
        let kk, Tk = Ik.NO_ERROR;
        for (;
          (kk = Ik.getError()) !== Ik.NO_ERROR;) Tk = kk;
        throw new Error(`Something went wrong while creating a gl ${Fk} shader object. gl error=${Tk}, gl isContextLost=${Ik.isContextLost()}, _contextWasLost=${Xk}`)
      }
      return Ik.shaderSource(Tk, kk), Ik.compileShader(Tk), Tk
    }

    function xk(kk, Fk) {
      Fk.useProgram(kk)
    }

    function Pk(kk, Fk) {
      const Ik = kk;
      if (!Ik.isParallelCompiled) return void Fk(kk);
      const Xk = Ik.onCompiled;
      Ik.onCompiled = () => {
        Xk?.(), Fk(kk)
      }
    }
  },
  39825: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      ThinEngine: () => Qk
    });
    var Xk = Ik(39830),
      Tk = Ik(39852),
      ik = Ik(39885),
      yk = Ik(39902),
      lk = Ik(38674),
      ak = Ik(39850);
    class qk {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(kk, Fk, Ik, Xk, Tk) {
        if (Tk.drawBuffersExtensionDisabled) {
          const Fk = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          kk = kk.replace(Fk, "")
        }
        return kk
      }
    }
    const Lk = /(flat\s)?\s*varying\s*.*/;
    class tk {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(kk) {
        return kk.replace("attribute", "in")
      }
      varyingCheck(kk, Fk) {
        return Lk.test(kk)
      }
      varyingProcessor(kk, Fk) {
        return kk.replace("varying", Fk ? "in" : "out")
      }
      postProcessor(kk, Fk, Ik) {
        const Xk = -1 !== kk.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (kk = (kk = kk.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), Ik) {
          const Ik = -1 !== kk.search(/layout *\(location *= *0\) *out/g),
            Tk = -1 !== Fk.indexOf("#define DUAL_SOURCE_BLENDING"),
            ik = Tk ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          Tk && (kk = "#extension GL_EXT_blend_func_extended : require\n" + kk), kk = (kk = (kk = (kk = (kk = (kk = (kk = kk.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (Xk || Ik ? "" : ik) + "void main(")
        } else {
          Fk.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (kk = "invariant gl_Position;\n" + kk);
          if (-1 !== Fk.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + kk
        }
        return kk
      }
    }
    var Zk = Ik(39906),
      jk = Ik(39923),
      ek = Ik(39931),
      wk = Ik(39818),
      Hk = Ik(39860),
      Jk = Ik(39841),
      xk = Ik(39939),
      Pk = Ik(39894);
    class Kk {}
    class Qk extends ik.c {
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
        return Xk.d.ShadersRepository
      }
      static set ShadersRepository(kk) {
        Xk.d.ShadersRepository = kk
      }
      get supportsUniformBuffers() {
        return this.tw > 1 && !this.disableUniformBuffers
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
      constructor(kk, Fk, Ik, Xk) {
        if (Ik = Ik || {}, super(Fk ?? Ik.antialias, Ik, Xk), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !kk) return;
        let ik;
        if (kk.getContext) {
          if (ik = kk, void 0 === Ik.preserveDrawingBuffer && (Ik.preserveDrawingBuffer = !1), void 0 === Ik.xrCompatible && (Ik.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const kk = navigator.userAgent;
            for (const Fk of Qk.ExceptionList) {
              const Xk = Fk.key,
                Tk = Fk.targets;
              if (new RegExp(Xk).test(kk)) {
                if (Fk.capture && Fk.captureConstraint) {
                  const Ik = Fk.capture,
                    Xk = Fk.captureConstraint,
                    Tk = new RegExp(Ik).exec(kk);
                  if (Tk && Tk.length > 0) {
                    if (parseInt(Tk[Tk.length - 1]) >= Xk) continue
                  }
                }
                for (const kk of Tk) switch (kk) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    Ik.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, Tk.q)(this._gl)
            } : (this._onContextLost = kk => {
              kk.preventDefault(), this._contextWasLost = !0, (0, Tk.q)(this._gl), lk.e.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, ik.addEventListener("webglcontextrestored", this._onContextRestored, !1), Ik.powerPreference = Ik.powerPreference || "high-performance"), ik.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (Ik.xrCompatible = !1), !Ik.disableWebGL2Support) try {
            this._gl = ik.getContext("webgl2", Ik) || ik.getContext("experimental-webgl2", Ik), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (Lk) {}
          if (!this._gl) {
            if (!ik) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = ik.getContext("webgl", Ik) || ik.getContext("experimental-webgl", Ik)
            } catch (Lk) {
              throw new Error("WebGL not supported", {
                cause: Lk
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = kk, ik = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const Fk = this._gl.getContextAttributes();
          Fk && (Ik.stencil = Fk.stencil)
        }
        this._sharedInit(ik), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== Ik.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = Ik.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let Tk = 0; Tk < this._caps.maxVertexAttribs; Tk++) this._currentBufferPointers[Tk] = new Kk;
        this._shaderProcessor = this.tw > 1 ? new tk : new qk;
        const yk = `Babylon.js v${Qk.Version}`;
        lk.e.Log(yk + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", yk);
        const ak = (0, Tk.u)(this._gl);
        ak.validateShaderPrograms = this.validateShaderPrograms, ak.parallelShaderCompile = this._caps.parallelShaderCompile
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
        if (this._caps.blendParametersPerTarget = !!Fk, this._alphaState = new Pk.b(this._caps.blendParametersPerTarget), Fk && (this._gl.blendEquationSeparateIndexed = Fk.blendEquationSeparateiOES.bind(Fk), this._gl.blendEquationIndexed = Fk.blendEquationiOES.bind(Fk), this._gl.blendFuncSeparateIndexed = Fk.blendFuncSeparateiOES.bind(Fk), this._gl.blendFuncIndexed = Fk.blendFunciOES.bind(Fk), this._gl.colorMaskIndexed = Fk.colorMaskiOES.bind(Fk), this._gl.disableIndexed = Fk.disableiOES.bind(Fk), this._gl.enableIndexed = Fk.enableiOES.bind(Fk)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
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
        for (let Ik = 0; Ik < this._maxSimultaneousTextures; Ik++) this._nextFreeTextureSlots.push(Ik);
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
      get tw() {
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
      clear(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const ik = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = ik;
        let yk = 0;
        if (Fk && kk) {
          let Fk = !0;
          if (this._currentRenderTarget) {
            const Ik = this._currentRenderTarget.texture?.format;
            if (void 0 !== Ik && (0, xk.k)(Ik)) {
              const Ik = this._currentRenderTarget.texture?.type;
              void 0 !== Ik && (0, xk.l)(Ik) ? (Qk._TempClearColorUint32[0] = 255 * kk.r, Qk._TempClearColorUint32[1] = 255 * kk.g, Qk._TempClearColorUint32[2] = 255 * kk.b, Qk._TempClearColorUint32[3] = 255 * kk.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, Qk._TempClearColorUint32), Fk = !1) : (Qk._TempClearColorInt32[0] = 255 * kk.r, Qk._TempClearColorInt32[1] = 255 * kk.g, Qk._TempClearColorInt32[2] = 255 * kk.b, Qk._TempClearColorInt32[3] = 255 * kk.a, this._gl.clearBufferiv(this._gl.COLOR, 0, Qk._TempClearColorInt32), Fk = !1)
            }
          }
          Fk && (this._gl.clearColor(kk.r, kk.g, kk.b, void 0 !== kk.a ? kk.a : 1), yk |= this._gl.COLOR_BUFFER_BIT)
        }
        Ik && (this.IXk ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), yk |= this._gl.DEPTH_BUFFER_BIT), Xk && (this._gl.clearStencil(Tk), yk |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(yk)
      }
      _clearColorAttachment(kk, Fk, Ik, Xk) {
        if ((0, xk.k)(Ik)) {
          const Ik = (0, xk.l)(Xk),
            Tk = Ik ? Qk._TempClearColorUint32 : Qk._TempClearColorInt32;
          return Tk[0] = Fk.r, Tk[1] = Fk.g, Tk[2] = Fk.b, Tk[3] = Fk.a, void(Ik ? this._gl.clearBufferuiv(this._gl.COLOR, kk, Tk) : this._gl.clearBufferiv(this._gl.COLOR, kk, Tk))
        }
        Qk._TempClearColorFloat32[0] = Fk.r, Qk._TempClearColorFloat32[1] = Fk.g, Qk._TempClearColorFloat32[2] = Fk.b, Qk._TempClearColorFloat32[3] = Fk.a, this._gl.clearBufferfv(this._gl.COLOR, kk, Qk._TempClearColorFloat32)
      }
      _viewport(kk, Fk, Ik, Xk) {
        kk === this._viewportCached.x && Fk === this._viewportCached.y && Ik === this._viewportCached.z && Xk === this._viewportCached.w || (this._viewportCached.x = kk, this._viewportCached.y = Fk, this._viewportCached.z = Ik, this._viewportCached.w = Xk, this._gl.viewport(kk, Fk, Ik, Xk))
      }
      Hx() {
        super.Hx(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0,
          Xk = arguments.length > 3 ? arguments[3] : void 0,
          Tk = arguments.length > 4 ? arguments[4] : void 0,
          ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          yk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const ak = kk;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = kk, this._integerMRTAttachmentsMask = !kk.isMulti && kk.texture && (0, xk.k)(kk.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(ak._framebuffer);
        const qk = this._gl;
        kk.isMulti || (kk.is2DArray || kk.is3D ? (qk.framebufferTextureLayer(qk.FRAMEBUFFER, qk.COLOR_ATTACHMENT0, kk.texture._hardwareTexture?.underlyingResource, ik, yk), ak._currentLOD = ik) : kk.isCube ? qk.framebufferTexture2D(qk.FRAMEBUFFER, qk.COLOR_ATTACHMENT0, qk.TEXTURE_CUBE_MAP_POSITIVE_X + Fk, kk.texture._hardwareTexture?.underlyingResource, ik) : ak._currentLOD !== ik && (qk.framebufferTexture2D(qk.FRAMEBUFFER, qk.COLOR_ATTACHMENT0, qk.TEXTURE_2D, kk.texture._hardwareTexture?.underlyingResource, ik), ak._currentLOD = ik));
        const Lk = kk._depthStencilTexture;
        if (Lk) {
          kk.is3D && (kk.texture.width === Lk.width && kk.texture.height === Lk.height && kk.texture.depth === Lk.depth || lk.e.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const Ik = kk._depthStencilTextureWithStencil ? qk.DEPTH_STENCIL_ATTACHMENT : qk.DEPTH_ATTACHMENT;
          kk.is2DArray || kk.is3D ? qk.framebufferTextureLayer(qk.FRAMEBUFFER, Ik, Lk._hardwareTexture?.underlyingResource, ik, yk) : kk.isCube ? qk.framebufferTexture2D(qk.FRAMEBUFFER, Ik, qk.TEXTURE_CUBE_MAP_POSITIVE_X + Fk, Lk._hardwareTexture?.underlyingResource, ik) : qk.framebufferTexture2D(qk.FRAMEBUFFER, Ik, qk.TEXTURE_2D, Lk._hardwareTexture?.underlyingResource, ik)
        }
        ak._MSAAFramebuffer && this._bindUnboundFramebuffer(ak._MSAAFramebuffer), this._cachedViewport && !Tk ? this.setViewport(this._cachedViewport, Ik, Xk) : (Ik || (Ik = kk.width, ik && (Ik /= Math.pow(2, ik))), Xk || (Xk = kk.height, ik && (Xk /= Math.pow(2, ik))), this._viewport(0, 0, Ik, Xk)), this.wipeCaches()
      }
      setStateCullFaceType(kk, Fk) {
        const Ik = this.cullBackFaces ?? kk ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== Ik || Fk) && (this._depthCullingState.cullFace = Ik)
      }
      setState(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0,
          Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Tk = arguments.length > 4 ? arguments[4] : void 0,
          ik = arguments.length > 5 ? arguments[5] : void 0,
          yk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== kk || Ik) && (this._depthCullingState.cull = kk), this.setStateCullFaceType(Tk, Ik), this.setZOffset(Fk), this.setZOffsetUnits(yk);
        const lk = Xk ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== lk || Ik) && (this._depthCullingState.frontFace = lk), this._stencilStateComposer.stencilMaterial = ik
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
      unBindFramebuffer(kk, Fk, Ik) {
        const Xk = kk;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(kk, Fk), Ik && (Xk._MSAAFramebuffer && this._bindUnboundFramebuffer(Xk._framebuffer), Ik()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(kk) {
        kk.isMulti || !kk.texture?.generateMipMaps || kk.isCube || this.generateMipmaps(kk.texture)
      }
      resolveFramebuffer(kk) {
        const Fk = kk,
          Ik = this._gl;
        if (!Fk._MSAAFramebuffer || Fk.isMulti) return;
        let Xk = Fk.resolveMSAAColors ? Ik.COLOR_BUFFER_BIT : 0;
        Xk |= Fk._generateDepthBuffer && Fk.resolveMSAADepth ? Ik.DEPTH_BUFFER_BIT : 0, Xk |= Fk._generateStencilBuffer && Fk.resolveMSAAStencil ? Ik.STENCIL_BUFFER_BIT : 0, Ik.bindFramebuffer(Ik.READ_FRAMEBUFFER, Fk._MSAAFramebuffer), Ik.bindFramebuffer(Ik.DRAW_FRAMEBUFFER, Fk._framebuffer), Ik.blitFramebuffer(0, 0, kk.width, kk.height, 0, 0, kk.width, kk.height, Xk, Ik.NEAREST)
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
      createVertexBuffer(kk, Fk, Ik) {
        return this._createVertexBuffer(kk, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(kk, Fk) {
        const Ik = this._gl.createBuffer();
        if (!Ik) throw new Error("Unable to create vertex buffer");
        const Xk = new Zk.e(Ik);
        return this.bindArrayBuffer(Xk), "number" !== typeof kk ? kk instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(kk), Fk), Xk.St = 4 * kk.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, kk, Fk), Xk.St = kk.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(kk), Fk), Xk.St = kk), this._resetVertexBufferBinding(), Xk.references = 1, Xk
      }
      createDynamicVertexBuffer(kk, Fk) {
        return this._createVertexBuffer(kk, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(kk, Fk, Ik) {
        const Xk = this._gl.createBuffer(),
          Tk = new Zk.e(Xk);
        if (!Xk) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(Tk);
        const ik = this._normalizeIndexData(kk);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, ik, Fk ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), Tk.references = 1, Tk.is32Bits = 4 === ik.BYTES_PER_ELEMENT, Tk
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
      bindUniformBlock(kk, Fk, Ik) {
        const Xk = kk.program,
          Tk = this._gl.getUniformBlockIndex(Xk, Fk);
        this._gl.uniformBlockBinding(Xk, Tk, Ik)
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
      _vertexAttribPointer(kk, Fk, Ik, Xk, Tk, ik, yk) {
        const lk = this._currentBufferPointers[Fk];
        if (!lk) return;
        let ak = !1;
        lk.active ? (lk.buffer !== kk && (lk.buffer = kk, ak = !0), lk.size !== Ik && (lk.size = Ik, ak = !0), lk.type !== Xk && (lk.type = Xk, ak = !0), lk.normalized !== Tk && (lk.normalized = Tk, ak = !0), lk.stride !== ik && (lk.stride = ik, ak = !0), lk.offset !== yk && (lk.offset = yk, ak = !0)) : (ak = !0, lk.active = !0, lk.index = Fk, lk.size = Ik, lk.type = Xk, lk.normalized = Tk, lk.stride = ik, lk.offset = yk, lk.buffer = kk), (ak || this._vaoRecordInProgress) && (this.bindArrayBuffer(kk), Xk === this._gl.UNSIGNED_INT || Xk === this._gl.INT ? this._gl.vertexAttribIPointer(Fk, Ik, Xk, ik, yk) : this._gl.vertexAttribPointer(Fk, Ik, Xk, Tk, ik, yk))
      }
      _bindIndexBufferWithCache(kk) {
        null != kk && this._cachedIndexBuffer !== kk && (this._cachedIndexBuffer = kk, this.bindIndexBuffer(kk), this._uintIndicesCurrentlySet = kk.is32Bits)
      }
      _bindVertexBuffersAttributes(kk, Fk, Ik) {
        const Xk = Fk.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let Tk = 0; Tk < Xk.length; Tk++) {
          const ik = Fk.getAttributeLocation(Tk);
          if (ik >= 0) {
            const Fk = Xk[Tk];
            let yk = null;
            if (Ik && (yk = Ik[Fk]), yk || (yk = kk[Fk]), !yk) continue;
            this._gl.enableVertexAttribArray(ik), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[ik] = !0);
            const lk = yk.getBuffer();
            lk && (this._vertexAttribPointer(lk, ik, yk.getSize(), yk.type, yk.normalized, yk.byteStride, yk.byteOffset), yk.getIsInstanced() && (this._gl.vertexAttribDivisor(ik, yk.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(ik), this._currentInstanceBuffers.push(lk))))
          }
        }
      }
      recordVertexArrayObject(kk, Fk, Ik, Xk) {
        const Tk = this._gl.createVertexArray();
        if (!Tk) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(Tk), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(kk, Ik, Xk), this.bindIndexBuffer(Fk), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), Tk
      }
      bindVertexArrayObject(kk, Fk) {
        this._cachedVertexArrayObject !== kk && (this._cachedVertexArrayObject = kk, this._gl.bindVertexArray(kk), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != Fk && Fk.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(kk, Fk, Ik, Xk, Tk) {
        if (this._cachedVertexBuffers !== kk || this._cachedEffectForVertexBuffers !== Tk) {
          this._cachedVertexBuffers = kk, this._cachedEffectForVertexBuffers = Tk;
          const Fk = Tk.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let ik = 0;
          for (let yk = 0; yk < Fk; yk++)
            if (yk < Ik.length) {
              const Fk = Tk.getAttributeLocation(yk);
              Fk >= 0 && (this._gl.enableVertexAttribArray(Fk), this._vertexAttribArraysEnabled[Fk] = !0, this._vertexAttribPointer(kk, Fk, Ik[yk], this._gl.FLOAT, !1, Xk, ik)), ik += 4 * Ik[yk]
            }
        }
        this._bindIndexBufferWithCache(Fk)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(kk, Fk, Ik, Xk) {
        this._cachedVertexBuffers === kk && this._cachedEffectForVertexBuffers === Ik || (this._cachedVertexBuffers = kk, this._cachedEffectForVertexBuffers = Ik, this._bindVertexBuffersAttributes(kk, Ik, Xk)), this._bindIndexBufferWithCache(Fk)
      }
      unbindInstanceAttributes() {
        let kk;
        for (let Fk = 0, Ik = this._currentInstanceLocations.length; Fk < Ik; Fk++) {
          const Ik = this._currentInstanceBuffers[Fk];
          kk != Ik && Ik.references && (kk = Ik, this.bindArrayBuffer(Ik));
          const Xk = this._currentInstanceLocations[Fk];
          this._gl.vertexAttribDivisor(Xk, 0)
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
      updateAndBindInstancesBuffer(kk, Fk, Ik) {
        if (this.bindArrayBuffer(kk), Fk && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, Fk), void 0 !== Ik[0].index) this.bindInstancesBuffer(kk, Ik, !0);
        else
          for (let Xk = 0; Xk < 4; Xk++) {
            const Fk = Ik[Xk];
            this._vertexAttribArraysEnabled[Fk] || (this._gl.enableVertexAttribArray(Fk), this._vertexAttribArraysEnabled[Fk] = !0), this._vertexAttribPointer(kk, Fk, 4, this._gl.FLOAT, !1, 64, 16 * Xk), this._gl.vertexAttribDivisor(Fk, 1), this._currentInstanceLocations.push(Fk), this._currentInstanceBuffers.push(kk)
          }
      }
      bindInstancesBuffer(kk, Fk) {
        let Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(kk);
        let Xk = 0;
        if (Ik)
          for (let Tk = 0; Tk < Fk.length; Tk++) {
            Xk += 4 * Fk[Tk].attributeSize
          }
        for (let Tk = 0; Tk < Fk.length; Tk++) {
          const Ik = Fk[Tk];
          void 0 === Ik.index && (Ik.index = this._currentEffect.getAttributeLocationByName(Ik.attributeName)), Ik.index < 0 || (this._vertexAttribArraysEnabled[Ik.index] || (this._gl.enableVertexAttribArray(Ik.index), this._vertexAttribArraysEnabled[Ik.index] = !0), this._vertexAttribPointer(kk, Ik.index, Ik.attributeSize, Ik.attributeType || this._gl.FLOAT, Ik.normalized || !1, Xk, Ik.offset), this._gl.vertexAttribDivisor(Ik.index, void 0 === Ik.divisor ? 1 : Ik.divisor), this._currentInstanceLocations.push(Ik.index), this._currentInstanceBuffers.push(kk))
        }
      }
      disableInstanceAttributeByName(kk) {
        if (!this._currentEffect) return;
        const Fk = this._currentEffect.getAttributeLocationByName(kk);
        this.disableInstanceAttribute(Fk)
      }
      disableInstanceAttribute(kk) {
        let Fk, Ik = !1;
        for (; - 1 !== (Fk = this._currentInstanceLocations.indexOf(kk));) this._currentInstanceLocations.splice(Fk, 1), this._currentInstanceBuffers.splice(Fk, 1), Ik = !0;
        Ik && (this._gl.vertexAttribDivisor(kk, 0), this.disableAttributeByIndex(kk))
      }
      disableAttributeByIndex(kk) {
        this._gl.disableVertexAttribArray(kk), this._vertexAttribArraysEnabled[kk] = !1, this._currentBufferPointers[kk].active = !1
      }
      draw(kk, Fk, Ik, Xk) {
        this.drawElementsType(kk ? 0 : 1, Fk, Ik, Xk)
      }
      drawPointClouds(kk, Fk, Ik) {
        this.drawArraysType(2, kk, Fk, Ik)
      }
      drawUnIndexed(kk, Fk, Ik, Xk) {
        this.drawArraysType(kk ? 0 : 1, Fk, Ik, Xk)
      }
      drawElementsType(kk, Fk, Ik, Xk) {
        this.applyStates(), this._reportDrawCall();
        const Tk = this._drawMode(kk),
          ik = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          yk = this._uintIndicesCurrentlySet ? 4 : 2;
        Xk ? this._gl.drawElementsInstanced(Tk, Ik, ik, Fk * yk, Xk) : this._gl.drawElements(Tk, Ik, ik, Fk * yk)
      }
      drawArraysType(kk, Fk, Ik, Xk) {
        this.applyStates(), this._reportDrawCall();
        const Tk = this._drawMode(kk);
        Xk ? this._gl.drawArraysInstanced(Tk, Fk, Ik, Xk) : this._gl.drawArrays(Tk, Fk, Ik)
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
        Fk && Fk.program && (Fk.program.__SPECTOR_rebuildProgram = null, (0, Jk.g)(Fk), this._gl && (this._currentProgram === Fk.program && this._setProgram(null), this._gl.deleteProgram(Fk.program)))
      }
      _getGlobalDefines(kk) {
        return (0, Hk.i)(kk, this.isNDCHalfZRange, this.IXk, this.useExactSrgbConversions)
      }
      createEffect(kk, Fk, Ik, ik, yk, lk, ak, qk, Lk) {
        let tk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Zk = arguments.length > 10 ? arguments[10] : void 0;
        const jk = "string" === typeof kk ? kk : kk.vertexToken || kk.vertexSource || kk.vertexElement || kk.vertex,
          ek = "string" === typeof kk ? kk : kk.fragmentToken || kk.fragmentSource || kk.fragmentElement || kk.fragment,
          wk = this._getGlobalDefines(),
          Hk = void 0 !== Fk.attributes;
        let Jk = yk ?? Fk.defines ?? "";
        wk && (Jk += wk);
        const xk = jk + "+" + ek + "@" + Jk;
        if (this._compiledEffects[xk]) {
          const kk = this._compiledEffects[xk];
          return ak && kk.isReady() && ak(kk), kk._refCount++, kk
        }
        this._gl && (0, Tk.u)(this._gl);
        const Pk = new Xk.d(kk, Fk, Hk ? this : Ik, ik, this, yk, lk, ak, qk, Lk, xk, Fk.shaderLanguage ?? tk, Fk.extraInitializationsAsync ?? Zk);
        return this._compiledEffects[xk] = Pk, Pk
      }
      _getShaderSource(kk) {
        return this._gl.getShaderSource(kk)
      }
      createRawShaderProgram(kk, Fk, Ik, Xk) {
        let ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const yk = (0, Tk.u)(this._gl);
        return yk._contextWasLost = this._contextWasLost, yk.validateShaderPrograms = this.validateShaderPrograms, (0, Tk.k)(kk, Fk, Ik, Xk || this._gl, ik)
      }
      createShaderProgram(kk, Fk, Ik, Xk, ik) {
        let yk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const lk = (0, Tk.u)(this._gl);
        return lk._contextWasLost = this._contextWasLost, lk.validateShaderPrograms = this.validateShaderPrograms, (0, Tk.n)(kk, Fk, Ik, Xk, ik || this._gl, yk)
      }
      inlineShaderCode(kk) {
        return kk
      }
      createPipelineContext(kk) {
        if (this._gl) {
          (0, Tk.u)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const Fk = (0, Tk.j)(this._gl, kk);
        return Fk.engine = this, Fk
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(kk) {
        return (0, Tk.d)(kk, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(kk, Fk, Ik, Xk, ik, yk, lk, ak, qk, Lk, tk) {
        const Zk = (0, Tk.u)(this._gl);
        return Zk._contextWasLost = this._contextWasLost, Zk.validateShaderPrograms = this.validateShaderPrograms, Zk._createShaderProgramInjection = this._createShaderProgram.bind(this), Zk.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), Zk.createShaderProgramInjection = this.createShaderProgram.bind(this), Zk.loadFileInjection = this._loadFile.bind(this), (0, Tk.h)(kk, Fk, Ik, Xk, ik, yk, lk, ak, qk, Lk, tk)
      }
      _createShaderProgram(kk, Fk, Ik, Xk) {
        let ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, Tk.b)(kk, Fk, Ik, Xk, ik)
      }
      _isRenderingStateCompiled(kk) {
        return !this._isDisposed && (0, Tk.g)(kk, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(kk, Fk) {
        (0, Tk.c)(kk, Fk)
      }
      getUniforms(kk, Fk) {
        const Ik = new Array,
          Xk = kk;
        for (let Tk = 0; Tk < Fk.length; Tk++) Ik.push(this._gl.getUniformLocation(Xk.program, Fk[Tk]));
        return Ik
      }
      getAttributes(kk, Fk) {
        const Ik = [],
          Xk = kk;
        for (let ik = 0; ik < Fk.length; ik++) try {
          Ik.push(this._gl.getAttribLocation(Xk.program, Fk[ik]))
        } catch (Tk) {
          Ik.push(-1)
        }
        return Ik
      }
      enableEffect(kk) {
        (kk = null !== kk && (0, yk.e)(kk) ? kk.effect : kk) && kk !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(kk), this._currentEffect = kk, kk.onBind && kk.onBind(kk), kk._onBindObservable && kk._onBindObservable.notifyObservers(kk))
      }
      setInt(kk, Fk) {
        return !!kk && (this._gl.uniform1i(kk, Fk), !0)
      }
      setInt2(kk, Fk, Ik) {
        return !!kk && (this._gl.uniform2i(kk, Fk, Ik), !0)
      }
      setInt3(kk, Fk, Ik, Xk) {
        return !!kk && (this._gl.uniform3i(kk, Fk, Ik, Xk), !0)
      }
      setInt4(kk, Fk, Ik, Xk, Tk) {
        return !!kk && (this._gl.uniform4i(kk, Fk, Ik, Xk, Tk), !0)
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
      setUInt2(kk, Fk, Ik) {
        return !!kk && (this._gl.uniform2ui(kk, Fk, Ik), !0)
      }
      setUInt3(kk, Fk, Ik, Xk) {
        return !!kk && (this._gl.uniform3ui(kk, Fk, Ik, Xk), !0)
      }
      setUInt4(kk, Fk, Ik, Xk, Tk) {
        return !!kk && (this._gl.uniform4ui(kk, Fk, Ik, Xk, Tk), !0)
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
      setFloat2(kk, Fk, Ik) {
        return !!kk && (this._gl.uniform2f(kk, Fk, Ik), !0)
      }
      setFloat3(kk, Fk, Ik, Xk) {
        return !!kk && (this._gl.uniform3f(kk, Fk, Ik, Xk), !0)
      }
      setFloat4(kk, Fk, Ik, Xk, Tk) {
        return !!kk && (this._gl.uniform4f(kk, Fk, Ik, Xk, Tk), !0)
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
        const Ik = this._gl;
        let Xk = Ik.NEAREST,
          Tk = Ik.NEAREST,
          ik = !1;
        switch (kk) {
          case 11:
            Xk = Ik.LINEAR, Tk = Fk ? Ik.LINEAR_MIPMAP_NEAREST : Ik.LINEAR;
            break;
          case 3:
            Xk = Ik.LINEAR, ik = !0, Tk = Fk ? Ik.LINEAR_MIPMAP_LINEAR : Ik.LINEAR;
            break;
          case 8:
            ik = !0, Xk = Ik.NEAREST, Tk = Fk ? Ik.NEAREST_MIPMAP_LINEAR : Ik.NEAREST;
            break;
          case 4:
            Xk = Ik.NEAREST, Tk = Fk ? Ik.NEAREST_MIPMAP_NEAREST : Ik.NEAREST;
            break;
          case 5:
            Xk = Ik.NEAREST, Tk = Fk ? Ik.LINEAR_MIPMAP_NEAREST : Ik.LINEAR;
            break;
          case 6:
            ik = !0, Xk = Ik.NEAREST, Tk = Fk ? Ik.LINEAR_MIPMAP_LINEAR : Ik.LINEAR;
            break;
          case 7:
            Xk = Ik.NEAREST, Tk = Ik.LINEAR;
            break;
          case 1:
            Xk = Ik.NEAREST, Tk = Ik.NEAREST;
            break;
          case 9:
            Xk = Ik.LINEAR, Tk = Fk ? Ik.NEAREST_MIPMAP_NEAREST : Ik.NEAREST;
            break;
          case 10:
            ik = !0, Xk = Ik.LINEAR, Tk = Fk ? Ik.NEAREST_MIPMAP_LINEAR : Ik.NEAREST;
            break;
          case 2:
            Xk = Ik.LINEAR, Tk = Ik.LINEAR;
            break;
          case 12:
            Xk = Ik.LINEAR, Tk = Ik.NEAREST
        }
        return {
          min: Tk,
          mag: Xk,
          hasMipMaps: ik
        }
      }
      _createTexture() {
        const kk = this._gl.createTexture();
        if (!kk) throw new Error("Unable to create texture");
        return kk
      }
      _createHardwareTexture() {
        return new ek.b(this._createTexture(), this._gl)
      }
      _createInternalTexture(kk, Fk) {
        let Ik, Xk, Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          ik = !1,
          yk = 0,
          ak = 3,
          qk = 5,
          Lk = !1,
          tk = 1,
          Zk = !1,
          jk = 0,
          ek = !1;
        void 0 !== Fk && "object" === typeof Fk ? (Ik = !!Fk.generateMipMaps, ik = !!Fk.createMipMaps, yk = void 0 === Fk.type ? 0 : Fk.type, ak = void 0 === Fk.samplingMode ? 3 : Fk.samplingMode, qk = void 0 === Fk.format ? 5 : Fk.format, Lk = void 0 !== Fk.useSRGBBuffer && Fk.useSRGBBuffer, tk = Fk.samples ?? 1, Xk = Fk.label, Zk = !!Fk.createMSAATexture, jk = Fk.comparisonFunction || 0, ek = !!Fk.isCube) : Ik = !!Fk, Lk && (Lk = this._caps.supportSRGBBuffers && (this.tw > 1 || this.isWebGPU)), (1 !== yk || this._caps.textureFloatLinearFiltering) && (2 !== yk || this._caps.textureHalfFloatLinearFiltering) || (ak = 1), 1 !== yk || this._caps.textureFloat || (yk = 0, lk.e.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const Hk = (0, xk.i)(qk),
          Jk = (0, xk.e)(qk),
          Pk = this._gl,
          Kk = new wk.b(this, Tk),
          Qk = kk.width || kk,
          sk = kk.height || kk,
          Vk = kk.depth || 0,
          zk = kk.layers || 0,
          Sk = this._getSamplingParameters(ak, (Ik || ik) && !Hk),
          vk = 0 !== zk ? Pk.TEXTURE_2D_ARRAY : 0 !== Vk ? Pk.TEXTURE_3D : ek ? Pk.TEXTURE_CUBE_MAP : Pk.TEXTURE_2D,
          Ek = Hk ? this._getInternalFormatFromDepthTextureFormat(qk, !0, Jk) : this._getRGBABufferInternalSizedFormat(yk, qk, Lk),
          Ok = Hk ? Jk ? Pk.DEPTH_STENCIL : Pk.DEPTH_COMPONENT : this._getInternalFormat(qk),
          nk = Hk ? this._getWebGLTextureTypeFromDepthTextureFormat(qk) : this._getWebGLTextureType(yk);
        if (this._bindTextureDirectly(vk, Kk), 0 !== zk) Kk.is2DArray = !0, Pk.texImage3D(vk, 0, Ek, Qk, sk, zk, 0, Ok, nk, null);
        else if (0 !== Vk) Kk.is3D = !0, Pk.texImage3D(vk, 0, Ek, Qk, sk, Vk, 0, Ok, nk, null);
        else if (ek) {
          Kk.isCube = !0;
          for (let kk = 0; kk < 6; kk++) Pk.texImage2D(Pk.TEXTURE_CUBE_MAP_POSITIVE_X + kk, 0, Ek, Qk, sk, 0, Ok, nk, null)
        } else Pk.texImage2D(vk, 0, Ek, Qk, sk, 0, Ok, nk, null);
        if (Pk.texParameteri(vk, Pk.TEXTURE_MAG_FILTER, Sk.mag), Pk.texParameteri(vk, Pk.TEXTURE_MIN_FILTER, Sk.min), Pk.texParameteri(vk, Pk.TEXTURE_WRAP_S, Pk.CLAMP_TO_EDGE), Pk.texParameteri(vk, Pk.TEXTURE_WRAP_T, Pk.CLAMP_TO_EDGE), Hk && this.tw > 1 && (0 === jk ? (Pk.texParameteri(vk, Pk.TEXTURE_COMPARE_FUNC, 515), Pk.texParameteri(vk, Pk.TEXTURE_COMPARE_MODE, Pk.NONE)) : (Pk.texParameteri(vk, Pk.TEXTURE_COMPARE_FUNC, jk), Pk.texParameteri(vk, Pk.TEXTURE_COMPARE_MODE, Pk.COMPARE_REF_TO_TEXTURE))), (Ik || ik) && this._gl.generateMipmap(vk), this._bindTextureDirectly(vk, null), Kk._useSRGBBuffer = Lk, Kk.baseWidth = Qk, Kk.baseHeight = sk, Kk.width = Qk, Kk.height = sk, Kk.depth = zk || Vk, Kk.isReady = !0, Kk.samples = tk, Kk.generateMipMaps = Ik, Kk.samplingMode = ak, Kk.type = yk, Kk.format = qk, Kk.label = Xk, Kk.comparisonFunction = jk, this._internalTexturesCache.push(Kk), Zk) {
          let kk;
          if (kk = (0, xk.i)(Kk.format) ? this._setupFramebufferDepthAttachments((0, xk.e)(Kk.format), 19 !== Kk.format, Kk.width, Kk.height, tk, Kk.format, !0) : this._createRenderBuffer(Kk.width, Kk.height, tk, -1, this._getRGBABufferInternalSizedFormat(Kk.type, Kk.format, Kk._useSRGBBuffer), -1), !kk) throw new Error("Unable to create render buffer");
          Kk._autoMSAAManagement = !0;
          let Fk = Kk._hardwareTexture;
          Fk || (Fk = Kk._hardwareTexture = this._createHardwareTexture()), Fk.addMSAARenderBuffer(kk)
        }
        return Kk
      }
      _getUseSRGBBuffer(kk, Fk) {
        return kk && this._caps.supportSRGBBuffers && (this.tw > 1 || Fk)
      }
      createTexture(kk, Fk, Ik, Xk) {
        var Tk = this;
        let ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          yk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          lk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          ak = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          qk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Lk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          tk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Zk = arguments.length > 11 ? arguments[11] : void 0,
          jk = arguments.length > 12 ? arguments[12] : void 0,
          ek = arguments.length > 13 ? arguments[13] : void 0,
          Hk = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(kk, Fk, Ik, Xk, ik, yk, lk, (function() {
          for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
          return Tk._prepareWebGLTexture(...Fk, Lk)
        }), ((kk, Fk, Ik, Tk, ik, yk) => {
          const lk = this._gl,
            ak = Ik.width === kk && Ik.height === Fk;
          ik._creationFlags = ek ?? 0;
          const qk = this._getTexImageParametersForCreateTexture(ik.format, ik._useSRGBBuffer);
          if (ak) return lk.texImage2D(lk.TEXTURE_2D, 0, qk.internalFormat, qk.format, qk.type, Ik), !1;
          const Lk = this._caps.maxTextureSize;
          if (Ik.width > Lk || Ik.height > Lk || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = kk, this._workingCanvas.height = Fk, this._workingContext.drawImage(Ik, 0, 0, Ik.width, Ik.height, 0, 0, kk, Fk), lk.texImage2D(lk.TEXTURE_2D, 0, qk.internalFormat, qk.format, qk.type, this._workingCanvas), ik.width = kk, ik.height = Fk, !1);
          {
            const kk = new wk.b(this, 2);
            this._bindTextureDirectly(lk.TEXTURE_2D, kk, !0), lk.texImage2D(lk.TEXTURE_2D, 0, qk.internalFormat, qk.format, qk.type, Ik), this._rescaleTexture(kk, ik, Xk, qk.format, (() => {
              this._releaseTexture(kk), this._bindTextureDirectly(lk.TEXTURE_2D, ik, !0), yk()
            }))
          }
          return !0
        }), ak, qk, Lk, tk, Zk, jk, Hk)
      }
      _getTexImageParametersForCreateTexture(kk, Fk) {
        let Ik, Xk;
        return 1 === this.tw ? (Ik = this._getInternalFormat(kk, Fk), Xk = Ik) : (Ik = this._getInternalFormat(kk, !1), Xk = this._getRGBABufferInternalSizedFormat(0, kk, Fk)), {
          internalFormat: Xk,
          format: Ik,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(kk, Fk, Ik, Xk, Tk) {}
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
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Xk = this._getTextureTarget(Fk),
          Tk = this._getSamplingParameters(kk, Fk.useMipMaps || Ik);
        this._setTextureParameterInteger(Xk, this._gl.TEXTURE_MAG_FILTER, Tk.mag, Fk), this._setTextureParameterInteger(Xk, this._gl.TEXTURE_MIN_FILTER, Tk.min), Ik && Tk.hasMipMaps && (Fk.generateMipMaps = !0, this._gl.generateMipmap(Xk)), this._bindTextureDirectly(Xk, null), Fk.samplingMode = kk
      }
      updateTextureDimensions(kk, Fk, Ik) {}
      updateTextureWrappingMode(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Tk = this._getTextureTarget(kk);
        null !== Fk && (this._setTextureParameterInteger(Tk, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(Fk), kk), kk._cachedWrapU = Fk), null !== Ik && (this._setTextureParameterInteger(Tk, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(Ik), kk), kk._cachedWrapV = Ik), (kk.is2DArray || kk.is3D) && null !== Xk && (this._setTextureParameterInteger(Tk, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Xk), kk), kk._cachedWrapR = Xk), this._bindTextureDirectly(Tk, null)
      }
      _uploadCompressedDataToTextureDirectly(kk, Fk, Ik, Xk, Tk) {
        let ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          yk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const lk = this._gl;
        let ak = lk.TEXTURE_2D;
        if (kk.isCube && (ak = lk.TEXTURE_CUBE_MAP_POSITIVE_X + ik), kk._useSRGBBuffer) switch (Fk) {
          case 37492:
          case 36196:
            this._caps.etc2 ? Fk = lk.COMPRESSED_SRGB8_ETC2 : kk._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? Fk = lk.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : kk._useSRGBBuffer = !1;
            break;
          case 36492:
            Fk = lk.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            Fk = lk.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            Fk = lk.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            Fk = lk.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            Fk = lk.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            Fk = lk.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            Fk = lk.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            Fk = lk.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            Fk = lk.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            Fk = lk.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            Fk = lk.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            Fk = lk.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            Fk = lk.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            Fk = lk.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            Fk = lk.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? Fk = lk.COMPRESSED_SRGB_S3TC_DXT1_EXT : kk._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? Fk = lk.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : kk._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? Fk = lk.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : kk._useSRGBBuffer = !1;
            break;
          default:
            kk._useSRGBBuffer = !1
        }
        if (kk.generateMipMaps) {
          const ik = kk._hardwareTexture;
          ik.memoryAllocated || (lk.texStorage2D(kk.isCube ? lk.TEXTURE_CUBE_MAP : lk.TEXTURE_2D, Math.floor(Math.log2(Math.max(Ik, Xk))) + 1, Fk, kk.width, kk.height), ik.memoryAllocated = !0), this._gl.compressedTexSubImage2D(ak, yk, 0, 0, Ik, Xk, Fk, Tk)
        } else this._gl.compressedTexImage2D(ak, yk, Fk, Ik, Xk, 0, Tk)
      }
      _uploadDataToTextureDirectly(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Tk = arguments.length > 4 ? arguments[4] : void 0,
          ik = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const yk = this._gl,
          lk = this._getWebGLTextureType(kk.type),
          ak = this._getInternalFormat(kk.format),
          qk = void 0 === Tk ? this._getRGBABufferInternalSizedFormat(kk.type, kk.format, kk._useSRGBBuffer) : this._getInternalFormat(Tk, kk._useSRGBBuffer);
        this._unpackFlipY(kk.invertY);
        let Lk = yk.TEXTURE_2D;
        kk.isCube && (Lk = yk.TEXTURE_CUBE_MAP_POSITIVE_X + Ik);
        const tk = Math.round(Math.log(kk.width) * Math.LOG2E),
          Zk = Math.round(Math.log(kk.height) * Math.LOG2E),
          jk = ik ? kk.width : Math.pow(2, Math.max(tk - Xk, 0)),
          ek = ik ? kk.height : Math.pow(2, Math.max(Zk - Xk, 0));
        yk.texImage2D(Lk, Xk, qk, jk, ek, 0, ak, lk, Fk)
      }
      updateTextureData(kk, Fk, Ik, Xk, Tk, ik) {
        let yk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          lk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          ak = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const qk = this._gl,
          Lk = this._getWebGLTextureType(kk.type),
          tk = this._getInternalFormat(kk.format);
        this._unpackFlipY(kk.invertY);
        let Zk = qk.TEXTURE_2D,
          jk = qk.TEXTURE_2D;
        kk.isCube && (jk = qk.TEXTURE_CUBE_MAP_POSITIVE_X + yk, Zk = qk.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Zk, kk, !0), qk.texSubImage2D(jk, lk, Ik, Xk, Tk, ik, tk, Lk, Fk), ak && this._gl.generateMipmap(jk), this._bindTextureDirectly(Zk, null)
      }
      _uploadArrayBufferViewToTexture(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Tk = this._gl,
          ik = kk.isCube ? Tk.TEXTURE_CUBE_MAP : Tk.TEXTURE_2D;
        this._bindTextureDirectly(ik, kk, !0), this._uploadDataToTextureDirectly(kk, Fk, Ik, Xk), this._bindTextureDirectly(ik, null, !0)
      }
      _prepareWebGLTextureContinuation(kk, Fk, Ik, Xk, Tk) {
        const ik = this._gl;
        if (!ik) return;
        const yk = this._getSamplingParameters(Tk, !Ik);
        ik.texParameteri(ik.TEXTURE_2D, ik.TEXTURE_MAG_FILTER, yk.mag), ik.texParameteri(ik.TEXTURE_2D, ik.TEXTURE_MIN_FILTER, yk.min), Ik || Xk || ik.generateMipmap(ik.TEXTURE_2D), this._bindTextureDirectly(ik.TEXTURE_2D, null), Fk && Fk.removePendingData(kk), kk.onLoadedObservable.notifyObservers(kk), kk.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk) {
        const Lk = this.getCaps().maxTextureSize,
          tk = Math.min(Lk, this.needPOTTextures ? (0, jk.g)(Xk.width, Lk) : Xk.width),
          Zk = Math.min(Lk, this.needPOTTextures ? (0, jk.g)(Xk.height, Lk) : Xk.height),
          ek = this._gl;
        ek && (kk._hardwareTexture ? (this._bindTextureDirectly(ek.TEXTURE_2D, kk, !0), this._unpackFlipY(void 0 === Tk || !!Tk), kk.baseWidth = Xk.width, kk.baseHeight = Xk.height, kk.width = tk, kk.height = Zk, kk.isReady = !0, kk.type = -1 !== kk.type ? kk.type : 0, kk.format = -1 !== kk.format ? kk.format : qk ?? (".jpg" !== Fk || kk._useSRGBBuffer ? 5 : 4), lk(tk, Zk, Xk, Fk, kk, (() => {
          this._prepareWebGLTextureContinuation(kk, Ik, ik, yk, ak)
        })) || this._prepareWebGLTextureContinuation(kk, Ik, ik, yk, ak)) : Ik && Ik.removePendingData(kk))
      }
      _getInternalFormatFromDepthTextureFormat(kk, Fk, Ik) {
        const Xk = this._gl;
        if (!Fk) return Xk.STENCIL_INDEX8;
        let Tk = Ik ? Xk.DEPTH_STENCIL : Xk.DEPTH_COMPONENT;
        return this.tw > 1 ? 15 === kk ? Tk = Xk.DEPTH_COMPONENT16 : 16 === kk ? Tk = Xk.DEPTH_COMPONENT24 : 17 === kk || 13 === kk ? Tk = Ik ? Xk.DEPTH24_STENCIL8 : Xk.DEPTH_COMPONENT24 : 14 === kk ? Tk = Xk.DEPTH_COMPONENT32F : 18 === kk && (Tk = Ik ? Xk.DEPTH32F_STENCIL8 : Xk.DEPTH_COMPONENT32F) : Tk = Xk.DEPTH_COMPONENT16, Tk
      }
      _getWebGLTextureTypeFromDepthTextureFormat(kk) {
        const Fk = this._gl;
        let Ik = Fk.UNSIGNED_INT;
        return 15 === kk ? Ik = Fk.UNSIGNED_SHORT : 17 === kk || 13 === kk ? Ik = Fk.UNSIGNED_INT_24_8 : 14 === kk ? Ik = Fk.FLOAT : 18 === kk ? Ik = Fk.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === kk && (Ik = Fk.UNSIGNED_BYTE), Ik
      }
      _setupFramebufferDepthAttachments(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          ik = arguments.length > 5 ? arguments[5] : void 0,
          yk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const lk = this._gl;
        ik = ik ?? (kk ? 13 : 14);
        const ak = this._getInternalFormatFromDepthTextureFormat(ik, Fk, kk);
        return kk && Fk ? this._createRenderBuffer(Ik, Xk, Tk, lk.DEPTH_STENCIL, ak, yk ? -1 : lk.DEPTH_STENCIL_ATTACHMENT) : Fk ? this._createRenderBuffer(Ik, Xk, Tk, ak, ak, yk ? -1 : lk.DEPTH_ATTACHMENT) : kk ? this._createRenderBuffer(Ik, Xk, Tk, ak, ak, yk ? -1 : lk.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(kk, Fk, Ik, Xk, Tk, ik) {
        let yk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const lk = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(lk, kk, Fk, Ik, Xk, Tk, ik, yk)
      }
      _updateRenderBuffer(kk, Fk, Ik, Xk, Tk, ik, yk) {
        let lk = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const ak = this._gl;
        return ak.bindRenderbuffer(ak.RENDERBUFFER, kk), Xk > 1 && ak.renderbufferStorageMultisample ? ak.renderbufferStorageMultisample(ak.RENDERBUFFER, Xk, ik, Fk, Ik) : ak.renderbufferStorage(ak.RENDERBUFFER, Tk, Fk, Ik), -1 !== yk && ak.framebufferRenderbuffer(ak.FRAMEBUFFER, yk, ak.RENDERBUFFER, kk), lk && ak.bindRenderbuffer(ak.RENDERBUFFER, null), kk
      }
      _releaseTexture(kk) {
        this._deleteTexture(kk._hardwareTexture), this.unbindAllTextures();
        const Fk = this._internalTexturesCache.indexOf(kk); - 1 !== Fk && this._internalTexturesCache.splice(Fk, 1), kk._lodTextureHigh && kk._lodTextureHigh.dispose(), kk._lodTextureMid && kk._lodTextureMid.dispose(), kk._lodTextureLow && kk._lodTextureLow.dispose(), kk._irradianceTexture && kk._irradianceTexture.dispose()
      }
      _deleteTexture(kk) {
        kk?.release()
      }
      _setProgram(kk) {
        this._currentProgram !== kk && ((0, Tk.i)(kk, this._gl), this._currentProgram = kk)
      }
      bindSamplers(kk) {
        const Fk = kk.getPipelineContext();
        this._setProgram(Fk.program);
        const Ik = kk.getSamplers();
        for (let Xk = 0; Xk < Ik.length; Xk++) {
          const Fk = kk.getUniform(Ik[Xk]);
          Fk && (this._boundUniforms[Xk] = Fk)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Tk = !1;
        const ik = Fk && Fk._associatedChannel > -1;
        Ik && ik && (this._activeChannel = Fk._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== Fk || Xk) {
          if (this._activateCurrentTexture(), Fk && Fk.isMultiview) throw lk.e.Error(["_bindTextureDirectly called with a multiview texture!", kk, Fk]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(kk, Fk?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = Fk, Fk && (Fk._associatedChannel = this._activeChannel)
        } else Ik && (Tk = !0, this._activateCurrentTexture());
        return ik && !Ik && this._bindSamplerUniformToChannel(Fk._associatedChannel, this._activeChannel), Tk
      }
      _bindTexture(kk, Fk, Ik) {
        if (void 0 === kk) return;
        Fk && (Fk._associatedChannel = kk), this._activeChannel = kk;
        const Xk = Fk ? this._getTextureTarget(Fk) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(Xk, Fk)
      }
      unbindAllTextures() {
        for (let kk = 0; kk < this._maxSimultaneousTextures; kk++) this._activeChannel = kk, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.tw > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(kk, Fk, Ik, Xk) {
        void 0 !== kk && (Fk && (this._boundUniforms[kk] = Fk), this._setTexture(kk, Ik))
      }
      _bindSamplerUniformToChannel(kk, Fk) {
        const Ik = this._boundUniforms[kk];
        Ik && Ik._currentState !== Fk && (this._gl.uniform1i(Ik, Fk), Ik._currentState = Fk)
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
        let Ik, Xk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Tk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!Fk) return null != this._boundTexturesCache[kk] && (this._activeChannel = kk, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.tw > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (Fk.video) {
          this._activeChannel = kk;
          const Ik = Fk.getInternalTexture();
          Ik && (Ik._associatedChannel = kk), Fk.update()
        } else if (4 === Fk.delayLoadState) return Fk.delayLoad(), !1;
        Ik = Tk ? Fk.depthStencilTexture : Fk.isReady() ? Fk.getInternalTexture() : Fk.isCube ? this.emptyCubeTexture : Fk.is3D ? this.emptyTexture3D : Fk.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !Xk && Ik && (Ik._associatedChannel = kk);
        let ik = !0;
        this._boundTexturesCache[kk] === Ik && (Xk || this._bindSamplerUniformToChannel(Ik._associatedChannel, kk), ik = !1), this._activeChannel = kk;
        const yk = this._getTextureTarget(Ik);
        if (ik && this._bindTextureDirectly(yk, Ik, Xk), Ik && !Ik.isMultiview) {
          if (Ik.isCube && Ik._cachedCoordinatesMode !== Fk.coordinatesMode) {
            Ik._cachedCoordinatesMode = Fk.coordinatesMode;
            const kk = 3 !== Fk.coordinatesMode && 5 !== Fk.coordinatesMode ? 1 : 0;
            Fk.wrapU = kk, Fk.wrapV = kk
          }
          Ik._cachedWrapU !== Fk.wrapU && (Ik._cachedWrapU = Fk.wrapU, this._setTextureParameterInteger(yk, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(Fk.wrapU), Ik)), Ik._cachedWrapV !== Fk.wrapV && (Ik._cachedWrapV = Fk.wrapV, this._setTextureParameterInteger(yk, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(Fk.wrapV), Ik)), Ik.is3D && Ik._cachedWrapR !== Fk.wrapR && (Ik._cachedWrapR = Fk.wrapR, this._setTextureParameterInteger(yk, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Fk.wrapR), Ik)), this._setAnisotropicLevel(yk, Ik, Fk.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(kk, Fk, Ik, Xk) {
        if (void 0 !== kk && Fk) {
          this._textureUnits && this._textureUnits.length === Ik.length || (this._textureUnits = new Int32Array(Ik.length));
          for (let Fk = 0; Fk < Ik.length; Fk++) {
            const Xk = Ik[Fk].getInternalTexture();
            Xk ? (this._textureUnits[Fk] = kk + Fk, Xk._associatedChannel = kk + Fk) : this._textureUnits[Fk] = -1
          }
          this._gl.uniform1iv(Fk, this._textureUnits);
          for (let kk = 0; kk < Ik.length; kk++) this._setTexture(this._textureUnits[kk], Ik[kk], !0)
        }
      }
      _setAnisotropicLevel(kk, Fk, Ik) {
        const Xk = this._caps.textureAnisotropicFilterExtension;
        11 !== Fk.samplingMode && 3 !== Fk.samplingMode && 2 !== Fk.samplingMode && (Ik = 1), Xk && Fk._cachedAnisotropicFilteringLevel !== Ik && (this._setTextureParameterFloat(kk, Xk.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(Ik, this._caps.maxAnisotropy), Fk), Fk._cachedAnisotropicFilteringLevel = Ik)
      }
      _setTextureParameterFloat(kk, Fk, Ik, Xk) {
        this._bindTextureDirectly(kk, Xk, !0, !0), this._gl.texParameterf(kk, Fk, Ik)
      }
      _setTextureParameterInteger(kk, Fk, Ik, Xk) {
        Xk && this._bindTextureDirectly(kk, Xk, !0, !0), this._gl.texParameteri(kk, Fk, Ik)
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
        (0, ak.j)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, Tk.q)(this._gl)
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
        let Ik = !0;
        const Xk = Fk.createTexture();
        Fk.bindTexture(Fk.TEXTURE_2D, Xk), Fk.texImage2D(Fk.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(kk), 1, 1, 0, Fk.RGBA, this._getWebGLTextureType(kk), null), Fk.texParameteri(Fk.TEXTURE_2D, Fk.TEXTURE_MIN_FILTER, Fk.NEAREST), Fk.texParameteri(Fk.TEXTURE_2D, Fk.TEXTURE_MAG_FILTER, Fk.NEAREST);
        const Tk = Fk.createFramebuffer();
        Fk.bindFramebuffer(Fk.FRAMEBUFFER, Tk), Fk.framebufferTexture2D(Fk.FRAMEBUFFER, Fk.COLOR_ATTACHMENT0, Fk.TEXTURE_2D, Xk, 0);
        const ik = Fk.checkFramebufferStatus(Fk.FRAMEBUFFER);
        if (Ik = Ik && ik === Fk.FRAMEBUFFER_COMPLETE, Ik = Ik && Fk.getError() === Fk.NO_ERROR, Ik && (Fk.clear(Fk.COLOR_BUFFER_BIT), Ik = Ik && Fk.getError() === Fk.NO_ERROR), Ik) {
          Fk.bindFramebuffer(Fk.FRAMEBUFFER, null);
          const kk = Fk.RGBA,
            Xk = Fk.UNSIGNED_BYTE,
            Tk = new Uint8Array(4);
          Fk.readPixels(0, 0, 1, 1, kk, Xk, Tk), Ik = Ik && Fk.getError() === Fk.NO_ERROR
        }
        for (Fk.deleteTexture(Xk), Fk.deleteFramebuffer(Tk), Fk.bindFramebuffer(Fk.FRAMEBUFFER, null); !Ik && Fk.getError() !== Fk.NO_ERROR;);
        return Ik
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
          Ik = Fk ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (kk) {
          case 0:
            Ik = this._gl.ALPHA;
            break;
          case 1:
            Ik = this._gl.LUMINANCE;
            break;
          case 2:
            Ik = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            Ik = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            Ik = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            Ik = Fk ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            Ik = Fk ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (kk) {
          case 8:
            Ik = this._gl.RED_INTEGER;
            break;
          case 9:
            Ik = this._gl.RG_INTEGER;
            break;
          case 10:
            Ik = this._gl.RGB_INTEGER;
            break;
          case 11:
            Ik = this._gl.RGBA_INTEGER
        }
        return Ik
      }
      _getRGBABufferInternalSizedFormat(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== Fk) switch (Fk) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return Ik ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
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
                return Ik ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return Ik ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
        return Ik ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(kk, Fk, Ik, Xk) {
        let Tk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          ik = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const ak = Tk ? 4 : 3,
          qk = Tk ? this._gl.RGBA : this._gl.RGB,
          Lk = Ik * Xk * ak;
        if (yk) {
          if (yk.length < Lk) return lk.e.Error(`Data buffer is too small to store the read pixels (${yk.length} should be more than ${Lk})`), Promise.resolve(yk)
        } else yk = new Uint8Array(Lk);
        return ik && this.flushFramebuffer(), this._gl.readPixels(kk, Fk, Ik, Xk, qk, this._gl.UNSIGNED_BYTE, yk), Promise.resolve(yk)
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
          const kk = ik.c._CreateCanvas(1, 1),
            Fk = kk.getContext("webgl") || kk.getContext("experimental-webgl");
          this._IsSupported = null != Fk && !!globalThis.WebGLRenderingContext
        } catch (kk) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const kk = ik.c._CreateCanvas(1, 1),
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
    Qk._TempClearColorUint32 = new Uint32Array(4), Qk._TempClearColorInt32 = new Int32Array(4), Qk._TempClearColorFloat32 = new Float32Array(4), Qk.ExceptionList = [{
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
    }], Qk._ConcatenateShader = Hk.f, Qk._IsSupported = null, Qk._HasMajorPerformanceCaveat = null
  },
  40182: (kk, Fk, Ik) => {
    var Xk;
    Ik.d(Fk, {
        c: () => Tk
      }),
      function(kk) {
        kk[kk.PointerMove = 0] = "PointerMove", kk[kk.PointerDown = 1] = "PointerDown", kk[kk.PointerUp = 2] = "PointerUp"
      }(Xk || (Xk = {}));
    class Tk {}
    Tk.DOM_DELTA_PIXEL = 0, Tk.DOM_DELTA_LINE = 1, Tk.DOM_DELTA_PAGE = 2
  },
  40176: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk,
      f: () => ik,
      i: () => Tk
    });
    class Xk {}
    Xk.KEYDOWN = 1, Xk.KEYUP = 2;
    class Tk {
      constructor(kk, Fk) {
        this.type = kk, this.event = Fk
      }
    }
    class ik extends Tk {
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
  40169: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Tk,
      h: () => yk,
      j: () => lk
    });
    var Xk = Ik(37153);
    class Tk {}
    Tk.POINTERDOWN = 1, Tk.POINTERUP = 2, Tk.POINTERMOVE = 4, Tk.POINTERWHEEL = 8, Tk.POINTERPICK = 16, Tk.POINTERTAP = 32, Tk.POINTERDOUBLETAP = 64;
    class ik {
      constructor(kk, Fk) {
        this.type = kk, this.event = Fk
      }
    }
    class yk extends ik {
      constructor(kk, Fk, Ik, Tk) {
        super(kk, Fk), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new Xk.p(Ik, Tk)
      }
    }
    class lk extends ik {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(kk, Fk), this._pickInfo = Ik, this._inputManager = Xk
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  40195: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk
    });
    class Xk {
      static CompareLightsPriority(kk, Fk) {
        return kk.shadowEnabled !== Fk.shadowEnabled ? (Fk.shadowEnabled ? 1 : 0) - (kk.shadowEnabled ? 1 : 0) : Fk.renderPriority - kk.renderPriority
      }
    }
    Xk.FALLOFF_DEFAULT = 0, Xk.FALLOFF_PHYSICAL = 1, Xk.FALLOFF_GLTF = 2, Xk.FALLOFF_STANDARD = 3, Xk.LIGHTMAP_DEFAULT = 0, Xk.LIGHTMAP_SPECULAR = 1, Xk.LIGHTMAP_SHADOWSONLY = 2, Xk.INTENSITYMODE_AUTOMATIC = 0, Xk.INTENSITYMODE_LUMINOUSPOWER = 1, Xk.INTENSITYMODE_LUMINOUSINTENSITY = 2, Xk.INTENSITYMODE_ILLUMINANCE = 3, Xk.INTENSITYMODE_LUMINANCE = 4, Xk.LIGHTTYPEID_POINTLIGHT = 0, Xk.LIGHTTYPEID_DIRECTIONALLIGHT = 1, Xk.LIGHTTYPEID_SPOTLIGHT = 2, Xk.LIGHTTYPEID_HEMISPHERICLIGHT = 3, Xk.LIGHTTYPEID_RECT_AREALIGHT = 4, Xk.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  39818: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => yk
    });
    var Xk, Tk = Ik(37187),
      ik = Ik(39821);
    ! function(kk) {
      kk[kk.Unknown = 0] = "Unknown", kk[kk.Url = 1] = "Url", kk[kk.Temp = 2] = "Temp", kk[kk.Raw = 3] = "Raw", kk[kk.Dynamic = 4] = "Dynamic", kk[kk.RenderTarget = 5] = "RenderTarget", kk[kk.MultiRenderTarget = 6] = "MultiRenderTarget", kk[kk.Cube = 7] = "Cube", kk[kk.CubeRaw = 8] = "CubeRaw", kk[kk.CubePrefiltered = 9] = "CubePrefiltered", kk[kk.Raw3D = 10] = "Raw3D", kk[kk.Raw2DArray = 11] = "Raw2DArray", kk[kk.DepthStencil = 12] = "DepthStencil", kk[kk.CubeRawRGBD = 13] = "CubeRawRGBD", kk[kk.Depth = 14] = "Depth", kk[kk.External = 15] = "External"
    }(Xk || (Xk = {}));
    class yk extends ik.b {
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
      Oe() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new Tk.e, this.onErrorObservable = new Tk.e, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = kk, this._source = Fk, this._uniqueId = yk._Counter++, Ik || (this._hardwareTexture = kk._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, kk, Fk, Ik), this.width = kk, this.height = Fk, this.depth = Ik, this.baseWidth = kk, this.baseHeight = Fk, this.baseDepth = Ik, this._size = kk * Fk * Ik
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
        this._hardwareTexture?.setUsage(kk._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), kk._hardwareTexture = this._hardwareTexture, kk._setUniqueId(yk._Counter++), Fk && (kk._isRGBD = this._isRGBD), this._lodTextureHigh && (kk._lodTextureHigh && kk._lodTextureHigh.dispose(), kk._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (kk._lodTextureMid && kk._lodTextureMid.dispose(), kk._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (kk._lodTextureLow && kk._lodTextureLow.dispose(), kk._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (kk._irradianceTexture && kk._irradianceTexture.dispose(), kk._irradianceTexture = this._irradianceTexture);
        const Ik = this._engine.getLoadedTexturesCache();
        let Xk = Ik.indexOf(this); - 1 !== Xk && Ik.splice(Xk, 1), Xk = Ik.indexOf(kk), -1 === Xk && Ik.push(kk)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    yk._Counter = 0
  },
  39939: (kk, Fk, Ik) => {
    function Xk(kk) {
      return 13 === kk || 14 === kk || 15 === kk || 16 === kk || 17 === kk || 18 === kk || 19 === kk
    }

    function Tk(kk) {
      return 8 === kk || 9 === kk || 10 === kk || 11 === kk
    }

    function ik(kk) {
      return 0 === kk || 5 === kk || 7 === kk || 11 === kk
    }

    function yk(kk) {
      return 13 === kk || 17 === kk || 18 === kk || 19 === kk
    }
    Ik.d(Fk, {
      e: () => yk,
      i: () => Xk,
      k: () => Tk,
      l: () => ik
    })
  },
  39821: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk
    });
    class Xk {
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
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = kk, this._cachedWrapV = Fk, this._cachedWrapR = Ik, this._cachedAnisotropicFilteringLevel = Xk, this.samplingMode = Tk, this._comparisonFunction = ik, this
      }
      compareSampler(kk) {
        return this._cachedWrapU === kk._cachedWrapU && this._cachedWrapV === kk._cachedWrapV && this._cachedWrapR === kk._cachedWrapR && this._cachedAnisotropicFilteringLevel === kk._cachedAnisotropicFilteringLevel && this.samplingMode === kk.samplingMode && this._comparisonFunction === kk._comparisonFunction && this._useMipMaps === kk._useMipMaps
      }
    }
  },
  40121: (kk, Fk, Ik) => {
    function Xk(kk) {
      kk.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    Ik.d(Fk, {
      c: () => Xk
    })
  },
  39902: (kk, Fk, Ik) => {
    function Xk(kk) {
      return void 0 === kk.getPipelineContext
    }
    Ik.d(Fk, {
      e: () => Xk
    })
  },
  40324: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk
    });
    var Xk = Ik(39878);
    class Tk {
      static GetEffect(kk) {
        return void 0 === kk.getPipelineContext ? kk.effect : kk
      }
      constructor(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = kk.createDrawContext(), Fk && (this.materialContext = kk.createMaterialContext())
      }
      setEffect(kk, Fk) {
        let Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        Ik || this.effect === kk || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = kk, void 0 !== Fk && (this.defines = Fk), Ik && this.drawContext?.reset()
      }
      dispose() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const Fk = this.effect;
          kk ? Fk.dispose() : Xk.d.SetImmediate((() => {
            Fk.Oe().onEndFrameObservable.addOnce((() => {
              Fk.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39841: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => tk,
      d: () => jk,
      e: () => qk,
      g: () => Lk
    });
    var Xk = Ik(39850),
      Tk = Ik(39852),
      ik = Ik(39837),
      yk = Ik(38674),
      lk = Ik(39872),
      ak = Ik(39860);

    function qk(kk, Fk) {
      return (0, Tk.u)(Fk).cachedPipelines[kk]
    }

    function Lk(kk) {
      const Fk = kk._name,
        Ik = kk.context;
      if (Fk && Ik) {
        const kk = (0, Tk.u)(Ik),
          Xk = kk.cachedPipelines[Fk];
        Xk?.dispose(), delete kk.cachedPipelines[Fk]
      }
    }

    function tk(kk, Fk, Ik, Tk, ik, yk, ak) {
      let qk, Lk;
      const tk = (0, Xk.j)() ? yk?.getHostDocument() : null;
      qk = "string" === typeof Fk ? Fk : "string" === typeof Fk.vertexSource ? "source:" + Fk.vertexSource : "string" === typeof Fk.vertexElement ? tk?.getElementById(Fk.vertexElement) || Fk.vertexElement : Fk.vertex || Fk, Lk = "string" === typeof Fk ? Fk : "string" === typeof Fk.fragmentSource ? "source:" + Fk.fragmentSource : "string" === typeof Fk.fragmentElement ? tk?.getElementById(Fk.fragmentElement) || Fk.fragmentElement : Fk.fragment || Fk;
      const jk = [void 0, void 0],
        ek = () => {
          if (jk[0] && jk[1]) {
            const [Xk, qk] = jk;
            (0, lk.e)(kk), (0, lk.k)(Xk, kk, ((Xk, Lk) => {
              ak && (ak._vertexSourceCodeBeforeMigration = Lk), Ik && (Xk = Ik("vertex", Xk)), kk.isFragment = !0, (0, lk.k)(qk, kk, ((yk, qk) => {
                ak && (ak._fragmentSourceCodeBeforeMigration = qk), Ik && (yk = Ik("fragment", yk));
                const Lk = (0, lk.d)(Xk, yk, kk);
                kk = null;
                const tk = function(kk, Fk, Ik, Xk) {
                  if (Ik) {
                    return {
                      vertexSourceCode: (1 === Xk ? "//" : "") + "#define SHADER_NAME vertex:" + (Ik.vertexElement || Ik.vertex || Ik.spectorName || Ik) + "\n" + kk,
                      fragmentSourceCode: (1 === Xk ? "//" : "") + "#define SHADER_NAME fragment:" + (Ik.fragmentElement || Ik.fragment || Ik.spectorName || Ik) + "\n" + Fk
                    }
                  }
                  return {
                    vertexSourceCode: kk,
                    fragmentSourceCode: Fk
                  }
                }(Lk.vertexCode, Lk.fragmentCode, Fk, ik);
                Tk?.(tk.vertexSourceCode, tk.fragmentSourceCode)
              }), yk)
            }), yk)
          }
        };
      Zk(qk, "Vertex", "", (kk => {
        ak && (ak._rawVertexSourceCode = kk), jk[0] = kk, ek()
      }), ik), Zk(Lk, "Fragment", "Pixel", (kk => {
        ak && (ak._rawFragmentSourceCode = kk), jk[1] = kk, ek()
      }), ik)
    }

    function Zk(kk, Fk, Ik, Tk, yk, lk) {
      if ("undefined" !== typeof HTMLElement && kk instanceof HTMLElement) {
        return void Tk((0, Xk.c)(kk))
      }
      if ("source:" === kk.substring(0, 7)) return void Tk(kk.substring(7));
      if ("base64:" === kk.substring(0, 7)) {
        return void Tk(window.atob(kk.substring(7)))
      }
      const qk = ik.b.GetShadersStore(yk);
      if (qk[kk + Fk + "Shader"]) return void Tk(qk[kk + Fk + "Shader"]);
      if (Ik && qk[kk + Ik + "Shader"]) return void Tk(qk[kk + Ik + "Shader"]);
      let Lk;
      if (Lk = "." === kk[0] || "/" === kk[0] || kk.indexOf("http") > -1 ? kk : ik.b.GetShadersRepository(yk) + kk, !(lk = lk || ak.k)) throw new Error("loadFileInjection is not defined");
      lk(Lk + "." + Fk.toLowerCase() + ".fx", Tk)
    }
    const jk = (kk, Fk, Ik, Xk) => {
      try {
        const ik = kk.context ? (0, Tk.u)(kk.context) : null;
        ik && (ik.disableParallelShaderCompile = kk.disableParallelCompilation);
        const yk = kk.existingPipelineContext || Fk(kk.shaderProcessingContext);
        return yk._name = kk.name, kk.name && ik && (ik.cachedPipelines[kk.name] = yk), Ik(yk, kk.vertex, kk.fragment, !!kk.createAsRaw, "", "", kk.rebuildRebind, kk.defines, kk.transformFeedbackVaryings, "", (() => {
          Xk(yk, (() => {
            kk.onRenderingStateCompiled?.(yk)
          }))
        })), yk
      } catch (ik) {
        throw yk.e.Error("Error compiling effect"), ik
      }
    }
  },
  39830: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ak
    });
    var Xk = Ik(37187),
      Tk = Ik(38674),
      ik = Ik(39837),
      yk = Ik(39841),
      lk = Ik(39878);
    class ak {
      static get ShadersRepository() {
        return ik.b.ShadersRepository
      }
      static set ShadersRepository(kk) {
        ik.b.ShadersRepository = kk
      }
      get Hs() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new Xk.e), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(kk, Fk, Ik) {
        let Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          ik = arguments.length > 4 ? arguments[4] : void 0,
          lk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          qk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Lk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          tk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Zk = arguments.length > 9 ? arguments[9] : void 0,
          jk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          ek = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          wk = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new Xk.e, this.onErrorObservable = new Xk.e, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = kk, this._key = jk;
        const Hk = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let Jk;
        if (Fk.attributes) {
          const kk = Fk;
          if (this._engine = Ik, this._attributesNames = kk.attributes, this._uniformsNames = kk.uniformsNames.concat(kk.samplers), this._samplerList = kk.samplers.slice(), this.defines = kk.defines, this.onError = kk.onError, this.onCompiled = kk.onCompiled, this._fallbacks = kk.fallbacks, this._indexParameters = kk.indexParameters, this._transformFeedbackVaryings = kk.transformFeedbackVaryings || null, this._multiTarget = !!kk.multiTarget, this._shaderLanguage = kk.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!kk.disableParallelShaderCompilation, kk.uniformBuffersNames) {
            this._uniformBuffersNamesList = kk.uniformBuffersNames.slice();
            for (let Fk = 0; Fk < kk.uniformBuffersNames.length; Fk++) this._uniformBuffersNames[kk.uniformBuffersNames[Fk]] = Fk
          }
          this._processFinalCode = kk.processFinalCode ?? null, this._processCodeAfterIncludes = kk.processCodeAfterIncludes ?? void 0, wk = kk.extraInitializationsAsync, Jk = kk.existingPipelineContext
        } else this._engine = ik, this.defines = null == lk ? "" : lk, this._uniformsNames = Ik.concat(Tk), this._samplerList = Tk ? Tk.slice() : [], this._attributesNames = Fk, this._uniformBuffersNamesList = [], this._shaderLanguage = ek, this.onError = tk, this.onCompiled = Lk, this._indexParameters = Zk, this._fallbacks = qk;
        "WEBGL2" === this._engine.shaderPlatformName && (Jk = (0, yk.e)(Hk, this._engine._gl) ?? Jk), this._attributeLocationByName = {}, this.uniqueId = ak._UniqueIdSeed++, Jk ? (this._pipelineContext = Jk, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, wk).catch((kk => {
          const Fk = kk?.message ?? String(kk),
            Ik = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${Fk}`);
          kk && "string" === typeof kk.stack && (Ik.stack = `${Ik.message}\nCaused by: ${kk.stack}`), this._processCompilationErrors(Ik)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.Hs || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Xk = arguments.length > 3 ? arguments[3] : void 0;
        Xk && await Xk(), this._processingContext = Ik || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const Tk = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: kk ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: ik.b.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: ik.b.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          IXk: this._engine.IXk,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, yk.b)(Tk, this.name, this._processFinalCode, ((kk, Ik) => {
          this._vertexSourceCode = kk, this._fragmentSourceCode = Ik, this._prepareEffect(Fk)
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
        return !!this._engine.Hs || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      Oe() {
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
        (0, lk.h)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (Fk => {
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
            IXk: this._engine.IXk,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(kk, Fk, Ik, Xk) {
        this._isReady = !1, this._vertexSourceCodeOverride = kk, this._fragmentSourceCodeOverride = Fk, this.onError = (kk, Fk) => {
          Xk && Xk(Fk)
        }, this.onCompiled = () => {
          const kk = this.Oe().scenes;
          if (kk)
            for (let Fk = 0; Fk < kk.length; Fk++) kk[Fk].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(Ik)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(kk) {
        if (this._pipelineContext = kk, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let Fk = 0; Fk < this._attributesNames.length; Fk++) {
            const kk = this._attributesNames[Fk];
            this._attributeLocationByName[kk] = this._attributes[Fk]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), ak.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Fk = this._pipelineContext;
        this._isReady = !1;
        try {
          const Ik = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            Xk = Ik ? null : this.defines,
            Tk = Ik ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            ik = Ik ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            lk = this._engine;
          this._pipelineContext = (0, yk.d)({
            existingPipelineContext: kk ? Fk : null,
            vertex: Tk,
            fragment: ik,
            context: "WEBGL2" === lk.shaderPlatformName || "WEBGL1" === lk.shaderPlatformName ? lk._gl : void 0,
            rebuildRebind: (kk, Fk, Ik, Xk) => this._rebuildProgram(kk, Fk, Ik, Xk),
            defines: Xk,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: Ik,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: Ik => {
              Fk && !kk && this._engine._deletePipelineContext(Fk), Ik && this._onRenderingStateCompiled(Ik)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(Fk)
        } catch (Ik) {
          this._processCompilationErrors(Ik, Fk)
        }
      }
      _getShaderCodeAndErrorLine(kk, Fk, Ik) {
        const Xk = Ik ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let Tk = null;
        if (Fk && kk) {
          const ik = Fk.match(Xk);
          if (ik && 2 === ik.length) {
            const Fk = parseInt(ik[1]),
              Xk = kk.split("\n", -1);
            Xk.length >= Fk && (Tk = `Offending line [${Fk}] in ${Ik?"fragment":"vertex"} code: ${Xk[Fk-1]}`)
          }
        }
        return [kk, Tk]
      }
      _processCompilationErrors(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof kk?.stack ? kk.stack : kk?.message ?? String(kk);
        const Ik = this._attributesNames,
          Xk = this._fallbacks;
        if (Tk.e.Error("Unable to compile effect:"), Tk.e.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), Tk.e.Error(`Attributes: ${Ik.join(" ")}`), Tk.e.Error("Defines:\n" + this.defines), ak.LogShaderCodeOnCompilationError) {
          let kk, Fk = null,
            Ik = null;
          this._pipelineContext?._getVertexShaderCode() && ([kk, Fk] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), kk && (Tk.e.Error("Vertex code:"), Tk.e.Error(kk))), this._pipelineContext?._getFragmentShaderCode() && ([kk, Ik] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), kk && (Tk.e.Error("Fragment code:"), Tk.e.Error(kk))), Fk && Tk.e.Error(Fk), Ik && Tk.e.Error(Ik)
        }
        Tk.e.Error("Error: " + this._compilationError);
        const ik = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        Fk && (this._pipelineContext = Fk, this._isReady = !0, ik()), Xk ? (this._pipelineContext = null, Xk.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, Tk.e.Error("Trying next fallback."), this.defines = Xk.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, ik(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, Fk || ik())
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
        const Ik = kk + "Ex";
        if (-1 === this._samplerList.indexOf(Ik + "0")) {
          const Xk = this._samplerList.indexOf(kk);
          for (let kk = 1; kk < Fk.length; kk++) {
            const Fk = Ik + (kk - 1).toString();
            this._samplerList.splice(Xk + kk, 0, Fk)
          }
          let Tk = 0;
          for (const kk of this._samplerList) this._samplers[kk] = Tk, Tk += 1
        }
        this._engine.setTextureArray(this._samplers[kk], this._uniforms[kk], Fk, kk)
      }
      bindUniformBuffer(kk, Fk) {
        const Ik = this._uniformBuffersNames[Fk];
        void 0 === Ik || ak._BaseCache[Ik] === kk && this._engine._features.useUBOBindingCache || (ak._BaseCache[Ik] = kk, this._engine.bindUniformBufferBase(kk, Ik, Fk))
      }
      bindUniformBlock(kk, Fk) {
        this._engine.bindUniformBlock(this._pipelineContext, kk, Fk)
      }
      setInt(kk, Fk) {
        return this._pipelineContext.setInt(kk, Fk), this
      }
      setInt2(kk, Fk, Ik) {
        return this._pipelineContext.setInt2(kk, Fk, Ik), this
      }
      setInt3(kk, Fk, Ik, Xk) {
        return this._pipelineContext.setInt3(kk, Fk, Ik, Xk), this
      }
      setInt4(kk, Fk, Ik, Xk, Tk) {
        return this._pipelineContext.setInt4(kk, Fk, Ik, Xk, Tk), this
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
      setUInt2(kk, Fk, Ik) {
        return this._pipelineContext.setUInt2(kk, Fk, Ik), this
      }
      setUInt3(kk, Fk, Ik, Xk) {
        return this._pipelineContext.setUInt3(kk, Fk, Ik, Xk), this
      }
      setUInt4(kk, Fk, Ik, Xk, Tk) {
        return this._pipelineContext.setUInt4(kk, Fk, Ik, Xk, Tk), this
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
      setFloat2(kk, Fk, Ik) {
        return this._pipelineContext.setFloat2(kk, Fk, Ik), this
      }
      setVector3(kk, Fk) {
        return this._pipelineContext.setVector3(kk, Fk), this
      }
      setFloat3(kk, Fk, Ik, Xk) {
        return this._pipelineContext.setFloat3(kk, Fk, Ik, Xk), this
      }
      setVector4(kk, Fk) {
        return this._pipelineContext.setVector4(kk, Fk), this
      }
      setQuaternion(kk, Fk) {
        return this._pipelineContext.setQuaternion(kk, Fk), this
      }
      setFloat4(kk, Fk, Ik, Xk, Tk) {
        return this._pipelineContext.setFloat4(kk, Fk, Ik, Xk, Tk), this
      }
      setColor3(kk, Fk) {
        return this._pipelineContext.setColor3(kk, Fk), this
      }
      setColor4(kk, Fk, Ik) {
        return this._pipelineContext.setColor4(kk, Fk, Ik), this
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
          if (ak.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, yk.g)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        Fk && (ik.b.GetShadersStore(Xk)[`${kk}PixelShader`] = Fk), Ik && (ik.b.GetShadersStore(Xk)[`${kk}VertexShader`] = Ik)
      }
      static ResetCache() {
        ak._BaseCache = {}
      }
    }
    ak.LogShaderCodeOnCompilationError = !0, ak.PersistentMode = !1, ak.AutomaticallyClearCodeCache = !1, ak._UniqueIdSeed = 0, ak._BaseCache = {}, ak.ShadersStore = ik.b.ShadersStore, ak.IncludesShadersStore = ik.b.IncludesShadersStore
  },
  40152: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Lk,
      f: () => Vk,
      h: () => sk
    });
    var Xk = Ik(39830),
      Tk = Ik(37153),
      ik = Ik(37192),
      yk = Ik(40134);
    const lk = new Tk.c,
      ak = new Tk.c,
      qk = new Tk.c,
      Lk = {
        mG: () => {},
        eyeAtCamera: !0
      };

    function tk(kk, Fk, Ik) {
      const Xk = Ik.iXk(),
        Tk = Fk.iXk();
      for (let ik = 0; ik < 16; ik++) Xk[ik] = Tk[ik];
      return Xk[12] -= kk.x, Xk[13] -= kk.y, Xk[14] -= kk.z, Ik.markAsUpdated(), Ik
    }

    function Zk(kk, Fk, Ik) {
      return (0, ik.h)(Fk, ak), tk(kk, ak, qk), (0, ik.h)(qk, Ik), Ik
    }

    function jk(kk, Fk, Ik) {
      if (!Lk.eyeAtCamera) return Zk(kk, Fk, Ik);
      const Xk = Ik.iXk(),
        Tk = Fk.iXk();
      for (let ik = 0; ik < 16; ik++) Xk[ik] = Tk[ik];
      return Xk[12] = 0, Xk[13] = 0, Xk[14] = 0, Ik.markAsUpdated(), Ik
    }

    function ek(kk, Fk, Ik, Xk) {
      return (0, ik.k)(jk(kk, Fk, Xk), Ik, Xk), Xk
    }

    function wk(kk, Fk, Ik, Xk) {
      return (0, ik.h)(Ik, ak), (0, ik.k)(Fk, ak, qk), tk(kk, qk, ak), jk(kk, Ik, qk), (0, ik.k)(ak, qk, Xk), Xk
    }

    function Hk(kk, Fk, Ik, Xk, Tk, yk) {
      return (0, ik.h)(Ik, ak), (0, ik.k)(Fk, ak, qk), tk(kk, qk, ak), ek(kk, Xk, Tk, qk), (0, ik.k)(ak, qk, yk), yk
    }

    function Jk(kk, Fk) {
      const Ik = Lk.mG();
      if (!Ik || lk === Fk) return Fk;
      lk.updateFlag = Fk.updateFlag;
      const Xk = Ik.floatingOriginOffset;
      switch (kk) {
        case "world":
          return tk(Xk, Fk, lk);
        case "view":
          return jk(Xk, Fk, lk);
        case "worldView":
          return wk(Xk, Fk, Ik.getViewMatrix(), lk);
        case "viewProjection":
          return ek(Xk, Ik.getViewMatrix(), Ik.getProjectionMatrix(), lk);
        case "worldViewProjection":
          return Hk(Xk, Fk, Ik.getTransformMatrix(), Ik.getViewMatrix(), Ik.getProjectionMatrix(), lk);
        default:
          if (kk.startsWith("u_")) {
            const Tk = kk.toLowerCase();
            if (Tk.startsWith("u_worldviewprojection")) return Hk(Xk, Fk, Ik.getTransformMatrix(), Ik.getViewMatrix(), Ik.getProjectionMatrix(), lk);
            if (Tk.startsWith("u_viewprojection")) return ek(Xk, Ik.getViewMatrix(), Ik.getProjectionMatrix(), lk);
            if (Tk.startsWith("u_worldview")) return wk(Xk, Fk, Ik.getViewMatrix(), lk);
            if (Tk.startsWith("u_world")) return tk(Xk, Fk, lk);
            if (Tk.startsWith("u_view")) return jk(Xk, Fk, lk)
          }
          return Fk
      }
    }
    const xk = yk.c,
      Pk = Xk.d,
      Kk = xk.prototype._updateMatrixForUniform,
      Qk = Xk.d.prototype.setMatrix;

    function sk() {
      Xk.d.prototype.setMatrix = Qk, Pk._setMatrixOverride = void 0, xk.prototype._updateMatrixForUniform = Kk, xk.prototype._updateMatrixForUniformOverride = void 0
    }

    function Vk() {
      Pk.prototype._setMatrixOverride = Qk, Pk.prototype.setMatrix = function(kk, Fk) {
        return this._setMatrixOverride(kk, Jk(kk, Fk)), this
      }, xk.prototype._updateMatrixForUniformOverride = Kk, xk.prototype._updateMatrixForUniform = function(kk, Fk) {
        this._updateMatrixForUniformOverride(kk, Jk(kk, Fk))
      }
    }
  },
  40126: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik,
      f: () => Tk
    });
    var Xk = Ik(40121);

    function Tk(kk, Fk) {
      Fk.WHITEBALANCE && kk.push("whiteBalanceMatrix"), Fk.EXPOSURE && kk.push("exposureLinear"), Fk.CONTRAST && kk.push("contrast"), Fk.COLORGRADING && kk.push("colorTransformSettings"), (Fk.VIGNETTE || Fk.DITHER) && kk.push("vInverseScreenSize"), Fk.VIGNETTE && (kk.push("vignetteSettings1"), kk.push("vignetteSettings2")), Fk.COLORCURVES && (0, Xk.c)(kk), Fk.DITHER && kk.push("ditherIntensity")
    }

    function ik(kk, Fk) {
      Fk.COLORGRADING && kk.push("txColorTransform")
    }
  },
  40113: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Ok,
      e: () => pk
    });
    var Xk = Ik(40003),
      Tk = Ik(40011),
      ik = Ik(37187),
      yk = Ik(37331),
      lk = Ik(37189),
      ak = Ik(37153);
    const qk = [
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
      Lk = 1e6 / qk[qk.length - 1][0],
      tk = 150;

    function Zk(kk, Fk) {
      const Ik = Number.isNaN(kk) ? Lk : Math.max(kk, Lk),
        Xk = (0, lk.Clamp)(1e6 / Ik, qk[0][0], qk[qk.length - 1][0]);
      let Tk = 0,
        ik = qk.length - 1;
      for (; ik - Tk > 1;) {
        const kk = Tk + ik >> 1;
        qk[kk][0] <= Xk ? Tk = kk : ik = kk
      }
      const yk = Tk,
        [Zk, jk, ek, wk] = qk[yk],
        [Hk, Jk, xk, Pk] = qk[yk + 1],
        Kk = (Xk - Zk) / (Hk - Zk),
        Qk = ak.p.Lerp(new ak.p(jk, ek), new ak.p(Jk, xk), Kk),
        sk = ak.p.Normalize(new ak.p(1, wk)),
        Vk = ak.p.Normalize(new ak.p(1, Pk)),
        zk = ak.p.Normalize(ak.p.Lerp(sk, Vk, Kk)),
        Sk = (0, lk.Clamp)(Fk, -150, tk);
      Qk.zXk(zk.scale(Sk / 3e3));
      const vk = 2 * Qk.x - 8 * Qk.y + 4,
        Ek = 3 * Qk.x / vk,
        Ok = 2 * Qk.y / vk;
      return new ak.t(Ek / Ok, 1, (1 - Ek - Ok) / Ok)
    }
    const jk = ak.c.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      ek = ak.c.Invert(jk);

    function wk(kk, Fk) {
      const Ik = Fk > 0 ? kk / Fk : 10;
      return (0, lk.Clamp)(Ik, .1, 10)
    }

    function Hk(kk, Fk) {
      const Ik = ak.t.TransformNormal(kk, jk),
        Xk = ak.t.TransformNormal(Fk, jk),
        Tk = ak.c.FromArray([wk(Xk.x, Ik.x), 0, 0, 0, 0, wk(Xk.y, Ik.y), 0, 0, 0, 0, wk(Xk.z, Ik.z), 0, 0, 0, 0, 1]);
      return jk.multiply(Tk).multiply(ek)
    }
    const Jk = new ak.t(.95047, 1, 1.08883),
      xk = ak.c.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(Hk(Jk, Zk(6500, 0))),
      Pk = ak.c.Invert(xk),
      Kk = ak.t.TransformNormal(new ak.t(1, 1, 1), xk);
    var Qk = Ik(40021),
      sk = Ik(40121);
    let Vk = (() => {
      var kk;
      let Fk, Ik, ik, lk, ak, qk, Lk, tk, Zk, jk, ek, wk, Hk = [],
        Jk = [],
        xk = [],
        Pk = [],
        Kk = [],
        Vk = [],
        zk = [],
        Sk = [],
        vk = [],
        Ek = [],
        Ok = [],
        nk = [],
        Gk = [],
        pk = [],
        uk = [],
        bk = [],
        Rk = [],
        Uk = [],
        Ck = [],
        Nk = [],
        ck = [],
        Wk = [],
        fk = [],
        Bk = [];
      return kk = class {
        constructor() {
          this._dirty = !0, this._tempColor = new yk.h(0, 0, 0, 0), this._globalCurve = new yk.h(0, 0, 0, 0), this._highlightsCurve = new yk.h(0, 0, 0, 0), this._midtonesCurve = new yk.h(0, 0, 0, 0), this._shadowsCurve = new yk.h(0, 0, 0, 0), this._positiveCurve = new yk.h(0, 0, 0, 0), this._negativeCurve = new yk.h(0, 0, 0, 0), this._globalHue = (0, Xk.n)(this, Hk, 30), this._globalDensity = ((0, Xk.n)(this, Jk), (0, Xk.n)(this, xk, 0)), this._globalSaturation = ((0, Xk.n)(this, Pk), (0, Xk.n)(this, Kk, 0)), this._globalExposure = ((0, Xk.n)(this, Vk), (0, Xk.n)(this, zk, 0)), this._highlightsHue = ((0, Xk.n)(this, Sk), (0, Xk.n)(this, vk, 30)), this._highlightsDensity = ((0, Xk.n)(this, Ek), (0, Xk.n)(this, Ok, 0)), this._highlightsSaturation = ((0, Xk.n)(this, nk), (0, Xk.n)(this, Gk, 0)), this._highlightsExposure = ((0, Xk.n)(this, pk), (0, Xk.n)(this, uk, 0)), this._midtonesHue = ((0, Xk.n)(this, bk), (0, Xk.n)(this, Rk, 30)), this._midtonesDensity = ((0, Xk.n)(this, Uk), (0, Xk.n)(this, Ck, 0)), this._midtonesSaturation = ((0, Xk.n)(this, Nk), (0, Xk.n)(this, ck, 0)), this._midtonesExposure = ((0, Xk.n)(this, Wk), (0, Xk.n)(this, fk, 0)), this._shadowsHue = ((0, Xk.n)(this, Bk), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
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
        _getColorGradingDataToRef(Fk, Ik, Xk, Tk, ik) {
          null != Fk && (Fk = kk._Clamp(Fk, 0, 360), Ik = kk._Clamp(Ik, -100, 100), Xk = kk._Clamp(Xk, -100, 100), Tk = kk._Clamp(Tk, -100, 100), Ik = kk._ApplyColorGradingSliderNonlinear(Ik), Ik *= .5, Tk = kk._ApplyColorGradingSliderNonlinear(Tk), Ik < 0 && (Ik *= -1, Fk = (Fk + 180) % 360), kk._FromHSBToRef(Fk, Ik, 50 + .25 * Tk, ik), ik.scaleToRef(2, ik), ik.a = 1 + .01 * Xk)
        }
        static _ApplyColorGradingSliderNonlinear(kk) {
          kk /= 100;
          let Fk = Math.abs(kk);
          return Fk = Math.pow(Fk, 2), kk < 0 && (Fk *= -1), Fk *= 100, Fk
        }
        static _FromHSBToRef(Fk, Ik, Xk, Tk) {
          let ik = kk._Clamp(Fk, 0, 360);
          const yk = kk._Clamp(Ik / 100, 0, 1),
            lk = kk._Clamp(Xk / 100, 0, 1);
          if (0 === yk) Tk.r = lk, Tk.g = lk, Tk.b = lk;
          else {
            ik /= 60;
            const kk = Math.floor(ik),
              Fk = ik - kk,
              Ik = lk * (1 - yk),
              Xk = lk * (1 - yk * Fk),
              ak = lk * (1 - yk * (1 - Fk));
            switch (kk) {
              case 0:
                Tk.r = lk, Tk.g = ak, Tk.b = Ik;
                break;
              case 1:
                Tk.r = Xk, Tk.g = lk, Tk.b = Ik;
                break;
              case 2:
                Tk.r = Ik, Tk.g = lk, Tk.b = ak;
                break;
              case 3:
                Tk.r = Ik, Tk.g = Xk, Tk.b = lk;
                break;
              case 4:
                Tk.r = ak, Tk.g = Ik, Tk.b = lk;
                break;
              default:
                Tk.r = lk, Tk.g = Ik, Tk.b = Xk
            }
          }
          Tk.a = 1
        }
        static _Clamp(kk, Fk, Ik) {
          return Math.min(Math.max(kk, Fk), Ik)
        }
        clone() {
          return Qk.b.Clone((() => new kk), this)
        }
        serialize() {
          return Qk.b.Serialize(this)
        }
        _bind(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), kk && (kk.setFloat4(Fk, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), kk.setFloat4(Ik, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), kk.setFloat4(Xk, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const yk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], ik = [(0, Tk.J)()], lk = [(0, Tk.J)()], ak = [(0, Tk.J)()], qk = [(0, Tk.J)()], Lk = [(0, Tk.J)()], tk = [(0, Tk.J)()], Zk = [(0, Tk.J)()], jk = [(0, Tk.J)()], ek = [(0, Tk.J)()], wk = [(0, Tk.J)()], (0, Xk.j)(null, null, Fk, {
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
          metadata: yk
        }, Hk, Jk), (0, Xk.j)(null, null, Ik, {
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
          metadata: yk
        }, xk, Pk), (0, Xk.j)(null, null, ik, {
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
          metadata: yk
        }, Kk, Vk), (0, Xk.j)(null, null, lk, {
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
          metadata: yk
        }, zk, Sk), (0, Xk.j)(null, null, ak, {
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
          metadata: yk
        }, vk, Ek), (0, Xk.j)(null, null, qk, {
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
          metadata: yk
        }, Ok, nk), (0, Xk.j)(null, null, Lk, {
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
          metadata: yk
        }, Gk, pk), (0, Xk.j)(null, null, tk, {
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
          metadata: yk
        }, uk, bk), (0, Xk.j)(null, null, Zk, {
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
          metadata: yk
        }, Rk, Uk), (0, Xk.j)(null, null, jk, {
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
          metadata: yk
        }, Ck, Nk), (0, Xk.j)(null, null, ek, {
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
          metadata: yk
        }, ck, Wk), (0, Xk.j)(null, null, wk, {
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
          metadata: yk
        }, fk, Bk), yk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yk
        })
      })(), kk.PrepareUniforms = sk.c, kk
    })();

    function zk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      kk._bind(Fk, Ik, Xk, Tk)
    }
    var Sk = Ik(39923),
      vk = Ik(40126),
      Ek = Ik(37201);
    let Ok = (() => {
        var kk;
        let Fk, Ik, qk, jk, ek, wk, Jk, sk, Ek, Ok, nk, Gk, pk, uk, bk, Rk, Uk, Ck, Nk, ck, Wk, fk, Bk, dk, Yk, Ak, gk, mk, hk = [],
          rk = [],
          Dk = [],
          Mk = [],
          kF = [],
          FF = [],
          IF = [],
          XF = [],
          TF = [],
          iF = [],
          yF = [],
          lF = [],
          aF = [],
          qF = [],
          LF = [],
          tF = [],
          ZF = [],
          jF = [],
          eF = [],
          wF = [],
          HF = [],
          JF = [],
          xF = [],
          PF = [],
          KF = [],
          QF = [],
          sF = [],
          VF = [],
          zF = [],
          SF = [],
          oF = [],
          vF = [],
          EF = [],
          OF = [],
          nF = [],
          GF = [],
          pF = [],
          uF = [],
          bF = [],
          RF = [],
          UF = [],
          CF = [],
          NF = [],
          cF = [],
          WF = [],
          fF = [],
          BF = [],
          dF = [],
          YF = [],
          AF = [],
          gF = [],
          mF = [],
          hF = [],
          rF = [],
          DF = [],
          MF = [];
        return kk = class {
          constructor() {
            this.colorCurves = (0, Xk.n)(this, hk, new Vk), this._colorCurvesEnabled = ((0, Xk.n)(this, rk), (0, Xk.n)(this, Dk, !1)), this._colorGradingTexture = ((0, Xk.n)(this, Mk), (0, Xk.n)(this, kF, void 0)), this._colorGradingEnabled = ((0, Xk.n)(this, FF), (0, Xk.n)(this, IF, !1)), this._colorGradingWithGreenDepth = ((0, Xk.n)(this, XF), (0, Xk.n)(this, TF, !0)), this._colorGradingBGR = ((0, Xk.n)(this, iF), (0, Xk.n)(this, yF, !0)), this._exposure = ((0, Xk.n)(this, lF), (0, Xk.n)(this, aF, 1)), this._toneMappingEnabled = ((0, Xk.n)(this, qF), (0, Xk.n)(this, LF, !1)), this._toneMappingType = ((0, Xk.n)(this, tF), (0, Xk.n)(this, ZF, kk.TONEMAPPING_STANDARD)), this._contrast = ((0, Xk.n)(this, jF), (0, Xk.n)(this, eF, 1)), this._whiteBalanceEnabled = ((0, Xk.n)(this, wF), (0, Xk.n)(this, HF, !1)), this._temperature = ((0, Xk.n)(this, JF), (0, Xk.n)(this, xF, 6500)), this._tint = ((0, Xk.n)(this, PF), (0, Xk.n)(this, KF, 0)), this._whiteBalanceMatrix = ((0, Xk.n)(this, QF), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, Xk.n)(this, sF, 0), this.vignetteCenterX = ((0, Xk.n)(this, VF), (0, Xk.n)(this, zF, 0)), this.vignetteCenterY = ((0, Xk.n)(this, SF), (0, Xk.n)(this, oF, 0)), this.vignetteWeight = ((0, Xk.n)(this, vF), (0, Xk.n)(this, EF, 1.5)), this.vignetteColor = ((0, Xk.n)(this, OF), (0, Xk.n)(this, nF, new yk.h(0, 0, 0, 0))), this.vignetteCameraFov = ((0, Xk.n)(this, GF), (0, Xk.n)(this, pF, .5)), this._vignetteBlendMode = ((0, Xk.n)(this, uF), (0, Xk.n)(this, bF, kk.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, Xk.n)(this, RF), (0, Xk.n)(this, UF, !1)), this._ditheringEnabled = ((0, Xk.n)(this, CF), (0, Xk.n)(this, NF, !1)), this._ditheringIntensity = ((0, Xk.n)(this, cF), (0, Xk.n)(this, WF, 1 / 255)), this._skipFinalColorClamp = ((0, Xk.n)(this, fF), (0, Xk.n)(this, BF, !1)), this._applyByPostProcess = ((0, Xk.n)(this, dF), (0, Xk.n)(this, YF, !1)), this._isEnabled = ((0, Xk.n)(this, AF), (0, Xk.n)(this, gF, !0)), this.outputTextureWidth = ((0, Xk.n)(this, mF), (0, Xk.n)(this, hF, 0)), this.outputTextureHeight = ((0, Xk.n)(this, rF), (0, Xk.n)(this, DF, 0)), this.onUpdateParameters = ((0, Xk.n)(this, MF), new ik.e)
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
            kk = Number.isNaN(kk) ? Lk : Math.max(kk, Lk), this._temperature !== kk && (this._temperature = kk, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(kk) {
            kk = (0, lk.Clamp)(kk, -150, tk), this._tint !== kk && (this._tint = kk, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(kk, Fk) {
              const Ik = Hk(Zk(kk, Fk), Kk),
                Xk = xk.multiply(Ik).multiply(Pk);
              return ak.c.GetAsMatrix3x3(Xk)
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
            if (this._whiteBalanceEnabled && kk.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && zk(this.colorCurves, kk), this._vignetteEnabled || this._ditheringEnabled) {
              const Ik = 1 / (this.outputTextureWidth || kk.Oe().getRenderWidth()),
                Xk = 1 / (this.outputTextureHeight || kk.Oe().getRenderHeight());
              if (kk.setFloat2("vInverseScreenSize", Ik, Xk), this._ditheringEnabled && kk.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const Tk = null != Fk ? Fk : Xk / Ik;
                let ik = Math.tan(.5 * this.vignetteCameraFov),
                  yk = ik * Tk;
                const lk = Math.sqrt(yk * ik);
                yk = (0, Sk.l)(yk, lk, this.vignetteStretch), ik = (0, Sk.l)(ik, lk, this.vignetteStretch), kk.setFloat4("vignetteSettings1", yk, ik, -yk * this.vignetteCenterX, -ik * this.vignetteCenterY);
                const ak = -2 * this.vignetteWeight;
                kk.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, ak)
              }
            }
            if (kk.setFloat("exposureLinear", this.exposure), kk.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              kk.setTexture("txColorTransform", this.colorGradingTexture);
              const Fk = this.colorGradingTexture.getSize().height;
              kk.setFloat4("colorTransformSettings", (Fk - 1) / Fk, .5 / Fk, Fk, this.colorGradingTexture.level)
            }
          }
          clone() {
            return Qk.b.Clone((() => new kk), this)
          }
          serialize() {
            return Qk.b.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Fk = [(0, Tk.k)()], Ik = [(0, Tk.J)()], qk = [(0, Tk.B)("colorGradingTexture")], jk = [(0, Tk.J)()], ek = [(0, Tk.J)()], wk = [(0, Tk.J)()], Jk = [(0, Tk.J)()], sk = [(0, Tk.J)()], Ek = [(0, Tk.J)()], Ok = [(0, Tk.J)()], nk = [(0, Tk.J)()], Gk = [(0, Tk.J)()], pk = [(0, Tk.J)()], uk = [(0, Tk.J)()], bk = [(0, Tk.J)()], Rk = [(0, Tk.J)()], Uk = [(0, Tk.J)()], Ck = [(0, Tk.r)()], Nk = [(0, Tk.J)()], ck = [(0, Tk.J)()], Wk = [(0, Tk.J)()], fk = [(0, Tk.J)()], Bk = [(0, Tk.J)()], dk = [(0, Tk.J)()], Yk = [(0, Tk.J)()], Ak = [(0, Tk.J)()], gk = [(0, Tk.J)()], mk = [(0, Tk.J)()], (0, Xk.j)(null, null, Fk, {
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
            metadata: ik
          }, hk, rk), (0, Xk.j)(null, null, Ik, {
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
            metadata: ik
          }, Dk, Mk), (0, Xk.j)(null, null, qk, {
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
            metadata: ik
          }, kF, FF), (0, Xk.j)(null, null, jk, {
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
            metadata: ik
          }, IF, XF), (0, Xk.j)(null, null, ek, {
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
            metadata: ik
          }, TF, iF), (0, Xk.j)(null, null, wk, {
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
            metadata: ik
          }, yF, lF), (0, Xk.j)(null, null, Jk, {
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
            metadata: ik
          }, aF, qF), (0, Xk.j)(null, null, sk, {
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
            metadata: ik
          }, LF, tF), (0, Xk.j)(null, null, Ek, {
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
            metadata: ik
          }, ZF, jF), (0, Xk.j)(null, null, Ok, {
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
            metadata: ik
          }, eF, wF), (0, Xk.j)(null, null, nk, {
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
            metadata: ik
          }, HF, JF), (0, Xk.j)(null, null, Gk, {
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
            metadata: ik
          }, xF, PF), (0, Xk.j)(null, null, pk, {
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
            metadata: ik
          }, KF, QF), (0, Xk.j)(null, null, uk, {
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
            metadata: ik
          }, sF, VF), (0, Xk.j)(null, null, bk, {
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
            metadata: ik
          }, zF, SF), (0, Xk.j)(null, null, Rk, {
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
            metadata: ik
          }, oF, vF), (0, Xk.j)(null, null, Uk, {
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
            metadata: ik
          }, EF, OF), (0, Xk.j)(null, null, Ck, {
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
            metadata: ik
          }, nF, GF), (0, Xk.j)(null, null, Nk, {
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
            metadata: ik
          }, pF, uF), (0, Xk.j)(null, null, ck, {
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
            metadata: ik
          }, bF, RF), (0, Xk.j)(null, null, Wk, {
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
            metadata: ik
          }, UF, CF), (0, Xk.j)(null, null, fk, {
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
            metadata: ik
          }, NF, cF), (0, Xk.j)(null, null, Bk, {
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
            metadata: ik
          }, WF, fF), (0, Xk.j)(null, null, dk, {
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
            metadata: ik
          }, BF, dF), (0, Xk.j)(null, null, Yk, {
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
            metadata: ik
          }, YF, AF), (0, Xk.j)(null, null, Ak, {
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
            metadata: ik
          }, gF, mF), (0, Xk.j)(null, null, gk, {
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
            metadata: ik
          }, hF, rF), (0, Xk.j)(null, null, mk, {
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
            metadata: ik
          }, DF, MF), ik && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ik
          })
        })(), kk.TONEMAPPING_STANDARD = 0, kk.TONEMAPPING_ACES = 1, kk.TONEMAPPING_KHR_PBR_NEUTRAL = 2, kk.PrepareUniforms = vk.f, kk.PrepareSamplers = vk.c, kk._VIGNETTEMODE_MULTIPLY = 0, kk._VIGNETTEMODE_OPAQUE = 1, kk
      })(),
      nk = !1;

    function Gk(kk) {
      const Fk = Qk.b.Parse((() => new Ok), kk, null, null);
      return void 0 !== kk.vignetteCentreX && (Fk.vignetteCenterX = kk.vignetteCentreX), void 0 !== kk.vignetteCentreY && (Fk.vignetteCenterY = kk.vignetteCentreY), Fk
    }

    function pk() {
      nk || (nk = !0, Ok.Parse = Gk, Qk.b._ImageProcessingConfigurationParser = Gk, (0, Ek.f)("BABYLON.ImageProcessingConfiguration", Ok))
    }
  },
  40134: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik
    });
    var Xk = Ik(38674),
      Tk = Ik(40097);
    class ik {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Xk = arguments.length > 3 ? arguments[3] : void 0,
          Tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          ik = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = kk, this._noUBO = !kk.supportsUniformBuffers || Tk, this._dynamic = Ik, this._name = Xk ?? "no-name", this._data = Fk || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === ik && this._engine._features.trackUbosInFrame || !0 === ik) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.I9 = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.I9 = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
          const Ik = this._uniformLocationPointer - kk;
          for (let Fk = 0; Fk < Ik; Fk++) this._data.push(0)
        }
      }
      addUniform(kk, Fk) {
        let Ik, Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (Xk > 0 && "number" === typeof Fk && (this._uniformArraySizes[kk] = {
            strideSize: Fk,
            arraySize: Xk
          }), void 0 === this._uniformLocations[kk] && (this._uniformNames.push(kk), !this._noUBO)) {
          if (Xk > 0) {
            if (Fk instanceof Array) throw "addUniform should not be use with Array in UBO: " + kk;
            if (this._fillAlignment(4), 16 == Fk) Fk *= Xk;
            else {
              Fk = Fk * Xk + (4 - Fk) * Xk
            }
            Ik = [];
            for (let kk = 0; kk < Fk; kk++) Ik.push(0)
          } else {
            if (Fk instanceof Array) Ik = Fk, Fk = Ik.length;
            else {
              Ik = [];
              for (let kk = 0; kk < Fk; kk++) Ik.push(0)
            }
            this._fillAlignment(Fk)
          }
          this._uniformSizes[kk] = Fk, this._uniformLocations[kk] = this._uniformLocationPointer, this._uniformLocationPointer += Fk;
          for (let kk = 0; kk < Fk; kk++) this._data.push(Ik[kk]);
          this._needSync = !0
        }
      }
      addMatrix(kk, Fk) {
        this.addUniform(kk, Array.prototype.slice.call(Fk.iXk()))
      }
      addFloat2(kk, Fk, Ik) {
        const Xk = [Fk, Ik];
        this.addUniform(kk, Xk)
      }
      addFloat3(kk, Fk, Ik, Xk) {
        const Tk = [Fk, Ik, Xk];
        this.addUniform(kk, Tk)
      }
      addColor3(kk, Fk) {
        const Ik = [Fk.r, Fk.g, Fk.b];
        this.addUniform(kk, Ik)
      }
      addColor4(kk, Fk, Ik) {
        const Xk = [Fk.r, Fk.g, Fk.b, Ik];
        this.addUniform(kk, Xk)
      }
      addVector3(kk, Fk) {
        const Ik = [Fk.x, Fk.y, Fk.z];
        this.addUniform(kk, Ik)
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
        for (const Ik in this._uniformLocations)
          if (kk.push(Ik), 10 === ++Fk) break;
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
        for (let Ik = 0; Ik < kk.length; ++Ik)
          if (kk[Ik] !== Fk[Ik]) return !1;
        return !0
      }
      _copyBuffer(kk, Fk) {
        for (let Ik = 0; Ik < kk.length; ++Ik) Fk[Ik] = kk[Ik]
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
        const Ik = this._buffers[Fk][1];
        this._slotFrameId[Fk] === this._currentFrameId && Ik && !this._buffersEqual(this._bufferData, Ik) && (Fk = this._takeFreeSlot(!1)), this._bufferIndex = Fk, this._buffer = this._buffers[Fk][0], this.bindUniformBuffer();
        const Xk = this._buffers[Fk][1];
        Xk && this._buffersEqual(this._bufferData, Xk) || (Xk && this._copyBuffer(this._bufferData, Xk), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[Fk] = this._currentFrameId, this._slotGeneration[Fk] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(kk) {
        for (let Ik = 0; Ik < this._freeSlots.length; ++Ik) {
          const Fk = this._freeSlots[Ik];
          if (this._slotFrameId[Fk] !== this._currentFrameId) return kk && (this._freeSlots[Ik] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), Fk
        }
        this._rebuild();
        const Fk = this._buffers.length - 1;
        return kk || this._freeSlots.push(Fk), Fk
      }
      _releaseOwnerSlot(kk) {
        const Fk = this._slotByOwner?.get(kk);
        if (void 0 === Fk) return;
        this._slotByOwner.delete(kk);
        const Ik = this._ownerListsBySlot.get(Fk);
        Ik && (this._removeOwnerBacklink(Ik), this._ownerListsBySlot.delete(Fk)), this._ownerCount--, this._freeSlots.push(Fk)
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
      updateUniform(kk, Fk, Ik) {
        this._checkNewFrame();
        let Tk = this._uniformLocations[kk];
        if (void 0 === Tk) {
          if (this._buffer) return void Xk.e.Error("Cannot add an uniform after UBO has been created. uniformName=" + kk);
          this.addUniform(kk, Ik), Tk = this._uniformLocations[kk]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let kk = 0; kk < Ik; kk++) this._bufferData[Tk + kk] = Fk[kk];
          this._dataGeneration++
        } else {
          let kk = !1;
          for (let Xk = 0; Xk < Ik; Xk++)(16 === Ik && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[Tk + Xk] !== Math.fround(Fk[Xk])) && (kk = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Tk + Xk] = Fk[Xk]);
          this._needSync = this._needSync || kk, kk && this._dataGeneration++
        }
      }
      updateUniformArray(kk, Fk, Ik) {
        this._checkNewFrame();
        const ik = this._uniformLocations[kk];
        if (void 0 === ik) return void Xk.e.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const yk = this._uniformArraySizes[kk];
        if (this._dynamic) {
          for (let kk = 0; kk < Ik; kk++) this._bufferData[ik + kk] = Fk[kk];
          this._dataGeneration++
        } else {
          let kk = !1,
            Xk = 0,
            lk = 0;
          for (let ak = 0; ak < Ik; ak++)
            if (this._bufferData[ik + 4 * lk + Xk] !== Tk.h.FloatRound(Fk[ak]) && (kk = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[ik + 4 * lk + Xk] = Fk[ak]), Xk++, Xk === yk.strideSize) {
              for (; Xk < 4; Xk++) this._bufferData[ik + 4 * lk + Xk] = 0;
              Xk = 0, lk++
            } this._needSync = this._needSync || kk, kk && this._dataGeneration++
        }
      }
      _cacheMatrix(kk, Fk) {
        this._checkNewFrame();
        const Ik = this._valueCache[kk],
          Xk = Fk.updateFlag;
        return (void 0 === Ik || Ik !== Xk) && (this._valueCache[kk] = Xk, !0)
      }
      _updateMatrix3x3ForUniform(kk, Fk) {
        for (let Ik = 0; Ik < 3; Ik++) ik._TempBuffer[4 * Ik] = Fk[3 * Ik], ik._TempBuffer[4 * Ik + 1] = Fk[3 * Ik + 1], ik._TempBuffer[4 * Ik + 2] = Fk[3 * Ik + 2], ik._TempBuffer[4 * Ik + 3] = 0;
        this.updateUniform(kk, ik._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(kk, Fk) {
        this._currentEffect.setMatrix3x3(kk, Fk)
      }
      _updateMatrix2x2ForEffect(kk, Fk) {
        this._currentEffect.setMatrix2x2(kk, Fk)
      }
      _updateMatrix2x2ForUniform(kk, Fk) {
        for (let Ik = 0; Ik < 2; Ik++) ik._TempBuffer[4 * Ik] = Fk[2 * Ik], ik._TempBuffer[4 * Ik + 1] = Fk[2 * Ik + 1], ik._TempBuffer[4 * Ik + 2] = 0, ik._TempBuffer[4 * Ik + 3] = 0;
        this.updateUniform(kk, ik._TempBuffer, 8)
      }
      _updateFloatForEffect(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(kk + Ik, Fk)
      }
      _updateFloatForUniform(kk, Fk) {
        ik._TempBuffer[0] = Fk, this.updateUniform(kk, ik._TempBuffer, 1)
      }
      _updateFloat2ForEffect(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(kk + Xk, Fk, Ik)
      }
      _updateFloat2ForUniform(kk, Fk, Ik) {
        ik._TempBuffer[0] = Fk, ik._TempBuffer[1] = Ik, this.updateUniform(kk, ik._TempBuffer, 2)
      }
      _updateFloat3ForEffect(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(kk + Tk, Fk, Ik, Xk)
      }
      _updateFloat3ForUniform(kk, Fk, Ik, Xk) {
        ik._TempBuffer[0] = Fk, ik._TempBuffer[1] = Ik, ik._TempBuffer[2] = Xk, this.updateUniform(kk, ik._TempBuffer, 3)
      }
      _updateFloat4ForEffect(kk, Fk, Ik, Xk, Tk) {
        let ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(kk + ik, Fk, Ik, Xk, Tk)
      }
      _updateFloat4ForUniform(kk, Fk, Ik, Xk, Tk) {
        ik._TempBuffer[0] = Fk, ik._TempBuffer[1] = Ik, ik._TempBuffer[2] = Xk, ik._TempBuffer[3] = Tk, this.updateUniform(kk, ik._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[kk]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(kk + Ik, Fk);
            break;
          case 3:
            this._currentEffect.setFloatArray3(kk + Ik, Fk);
            break;
          case 4:
            this._currentEffect.setFloatArray4(kk + Ik, Fk);
            break;
          default:
            this._currentEffect.setFloatArray(kk + Ik, Fk)
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
        ik._TempBufferInt32View.set(Fk), this.updateUniformArray(kk, ik._TempBuffer, Fk.length)
      }
      _updateUIntArrayForEffect(kk, Fk) {
        this._currentEffect.setUIntArray(kk, Fk)
      }
      _updateUIntArrayForUniform(kk, Fk) {
        ik._TempBufferUInt32View.set(Fk), this.updateUniformArray(kk, ik._TempBuffer, Fk.length)
      }
      _updateMatrixForEffect(kk, Fk) {
        this._currentEffect.setMatrix(kk, Fk)
      }
      _updateMatrixForUniform(kk, Fk) {
        this._cacheMatrix(kk, Fk) && this.updateUniform(kk, Fk.iXk(), 16)
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
        ik._TempBuffer[0] = Fk.x, ik._TempBuffer[1] = Fk.y, ik._TempBuffer[2] = Fk.z, this.updateUniform(kk, ik._TempBuffer, 3)
      }
      _updateVector4ForEffect(kk, Fk) {
        this._currentEffect.setVector4(kk, Fk)
      }
      _updateVector4ForUniform(kk, Fk) {
        ik._TempBuffer[0] = Fk.x, ik._TempBuffer[1] = Fk.y, ik._TempBuffer[2] = Fk.z, ik._TempBuffer[3] = Fk.w, this.updateUniform(kk, ik._TempBuffer, 4)
      }
      _updateColor3ForEffect(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(kk + Ik, Fk)
      }
      _updateColor3ForUniform(kk, Fk) {
        ik._TempBuffer[0] = Fk.r, ik._TempBuffer[1] = Fk.g, ik._TempBuffer[2] = Fk.b, this.updateUniform(kk, ik._TempBuffer, 3)
      }
      _updateColor4ForEffect(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(kk + Xk, Fk, Ik)
      }
      _updateDirectColor4ForEffect(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(kk + Ik, Fk)
      }
      _updateColor4ForUniform(kk, Fk, Ik) {
        ik._TempBuffer[0] = Fk.r, ik._TempBuffer[1] = Fk.g, ik._TempBuffer[2] = Fk.b, ik._TempBuffer[3] = Ik, this.updateUniform(kk, ik._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(kk, Fk) {
        ik._TempBuffer[0] = Fk.r, ik._TempBuffer[1] = Fk.g, ik._TempBuffer[2] = Fk.b, ik._TempBuffer[3] = Fk.a, this.updateUniform(kk, ik._TempBuffer, 4)
      }
      _updateIntForEffect(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(kk + Ik, Fk)
      }
      _updateIntForUniform(kk, Fk) {
        ik._TempBufferInt32View[0] = Fk, this.updateUniform(kk, ik._TempBuffer, 1)
      }
      _updateInt2ForEffect(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(kk + Xk, Fk, Ik)
      }
      _updateInt2ForUniform(kk, Fk, Ik) {
        ik._TempBufferInt32View[0] = Fk, ik._TempBufferInt32View[1] = Ik, this.updateUniform(kk, ik._TempBuffer, 2)
      }
      _updateInt3ForEffect(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(kk + Tk, Fk, Ik, Xk)
      }
      _updateInt3ForUniform(kk, Fk, Ik, Xk) {
        ik._TempBufferInt32View[0] = Fk, ik._TempBufferInt32View[1] = Ik, ik._TempBufferInt32View[2] = Xk, this.updateUniform(kk, ik._TempBuffer, 3)
      }
      _updateInt4ForEffect(kk, Fk, Ik, Xk, Tk) {
        let ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(kk + ik, Fk, Ik, Xk, Tk)
      }
      _updateInt4ForUniform(kk, Fk, Ik, Xk, Tk) {
        ik._TempBufferInt32View[0] = Fk, ik._TempBufferInt32View[1] = Ik, ik._TempBufferInt32View[2] = Xk, ik._TempBufferInt32View[3] = Tk, this.updateUniform(kk, ik._TempBuffer, 4)
      }
      _updateUIntForEffect(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(kk + Ik, Fk)
      }
      _updateUIntForUniform(kk, Fk) {
        ik._TempBufferUInt32View[0] = Fk, this.updateUniform(kk, ik._TempBuffer, 1)
      }
      _updateUInt2ForEffect(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(kk + Xk, Fk, Ik)
      }
      _updateUInt2ForUniform(kk, Fk, Ik) {
        ik._TempBufferUInt32View[0] = Fk, ik._TempBufferUInt32View[1] = Ik, this.updateUniform(kk, ik._TempBuffer, 2)
      }
      _updateUInt3ForEffect(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(kk + Tk, Fk, Ik, Xk)
      }
      _updateUInt3ForUniform(kk, Fk, Ik, Xk) {
        ik._TempBufferUInt32View[0] = Fk, ik._TempBufferUInt32View[1] = Ik, ik._TempBufferUInt32View[2] = Xk, this.updateUniform(kk, ik._TempBuffer, 3)
      }
      _updateUInt4ForEffect(kk, Fk, Ik, Xk, Tk) {
        let ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(kk + ik, Fk, Ik, Xk, Tk)
      }
      _updateUInt4ForUniform(kk, Fk, Ik, Xk, Tk) {
        ik._TempBufferUInt32View[0] = Fk, ik._TempBufferUInt32View[1] = Ik, ik._TempBufferUInt32View[2] = Xk, ik._TempBufferUInt32View[3] = Tk, this.updateUniform(kk, ik._TempBuffer, 4)
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
    ik._MAX_UNIFORM_SIZE = 256, ik._TempBuffer = new Float32Array(ik._MAX_UNIFORM_SIZE), ik._TempBufferInt32View = new Int32Array(ik._TempBuffer.buffer), ik._TempBufferUInt32View = new Uint32Array(ik._TempBuffer.buffer)
  },
  39906: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk
    });
    var Xk = Ik(39914);
    class Tk extends Xk.d {
      constructor(kk) {
        super(), this._buffer = kk
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  40013: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ak,
      e: () => qk
    });
    const Xk = "__bjs_serializable__",
      Tk = new WeakMap;

    function ik(kk, Fk) {
      return Object.prototype.hasOwnProperty.call(kk, Fk)
    }
    const yk = function() {
      let kk = Symbol.metadata;
      return kk || (kk = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: kk
      })), kk
    }();

    function lk(kk) {
      return "function" === typeof kk ? kk : kk?.constructor
    }

    function ak(kk) {
      if (!kk) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(yk)}) polyfill must run before decorated classes are evaluated.`);
      return ik(kk, Xk) || (kk[Xk] = {}), kk[Xk]
    }

    function qk(kk) {
      const Fk = lk(kk),
        Ik = Fk ? Fk[yk] : void 0;
      if (!Ik) return {};
      const ak = Tk.get(Ik);
      if (ak) return ak;
      const qk = {},
        Lk = [];
      let tk = Ik;
      for (; tk;) Lk.push(tk), tk = Object.getPrototypeOf(tk);
      for (const Tk of Lk)
        if (ik(Tk, Xk)) {
          const kk = Tk[Xk];
          for (const Fk in kk) qk[Fk] = kk[Fk]
        } return Tk.set(Ik, qk), qk
    }
  },
  40011: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      B: () => lk,
      F: () => Lk,
      H: () => tk,
      J: () => yk,
      d: () => Pk,
      e: () => ik,
      h: () => xk,
      k: () => jk,
      n: () => ak,
      r: () => ek,
      v: () => qk,
      w: () => Hk,
      x: () => Zk,
      z: () => wk
    });
    var Xk = Ik(40013);

    function Tk(kk, Fk) {
      return (Ik, Tk) => {
        if (!Tk.metadata) return;
        const ik = String(Tk.name),
          yk = (0, Xk.c)(Tk.metadata);
        yk[ik] || (yk[ik] = {
          type: kk,
          sourceName: Fk
        })
      }
    }

    function ik(kk) {
      return function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (Ik, Xk) => {
          const Tk = Fk || "_" + String(Xk.name);
          return {
            init(kk) {
              return void 0 === kk && Tk in this || (this[Tk] = kk), kk
            },
            get() {
              return this[Tk]
            },
            set(Fk) {
              "function" === typeof this[Tk]?.equals && this[Tk].equals(Fk) || this[Tk] !== Fk && (this[Tk] = Fk, this[kk]())
            }
          }
        }
      }(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function yk(kk) {
      return Tk(0, kk)
    }

    function lk(kk) {
      return Tk(1, kk)
    }

    function ak(kk) {
      return Tk(2, kk)
    }

    function qk(kk) {
      return Tk(3, kk)
    }

    function Lk(kk) {
      return Tk(4, kk)
    }

    function tk(kk) {
      return Tk(5, kk)
    }

    function Zk(kk) {
      return Tk(6, kk)
    }

    function jk(kk) {
      return Tk(7, kk)
    }

    function ek(kk) {
      return Tk(8, kk)
    }

    function wk(kk) {
      return Tk(10, kk)
    }

    function Hk(kk) {
      return Tk(12, kk)
    }

    function Jk(kk, Fk, Ik) {
      const Xk = String(Fk.name);
      let Tk = null;
      const ik = function() {
        if (null === Tk) {
          Tk = kk, "undefined" !== typeof _native && _native[Xk] && (Tk = Ik(_native[Xk], kk));
          const yk = this && (Fk.static ? this : Object.getPrototypeOf(this));
          yk?.[Xk] === ik && (yk[Xk] = Tk)
        }
        for (var yk = arguments.length, lk = new Array(yk), ak = 0; ak < yk; ak++) lk[ak] = arguments[ak];
        return Tk.apply(this, lk)
      };
      return ik
    }

    function xk(kk, Fk) {
      return Jk(kk, Fk, (kk => kk))
    }

    function Pk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (Ik, Xk) => {
        const Tk = Fk || "_" + String(Xk.name);
        return {
          get() {
            return this[Tk]?.value
          },
          set(Fk) {
            "function" === typeof this[Tk]?.value?.equals && this[Tk].value.equals(Fk) || this[Tk].value !== Fk && (this[Tk].value = Fk, this[kk]())
          }
        }
      }
    }
    xk.filter = function(kk) {
      return (Fk, Ik) => Jk(Fk, Ik, ((Fk, Ik) => function() {
        for (var Xk = arguments.length, Tk = new Array(Xk), ik = 0; ik < Xk; ik++) Tk[ik] = arguments[ik];
        return kk(...Tk) ? Fk(...Tk) : Ik.apply(this, Tk)
      }))
    }
  },
  40021: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => qk
    });
    var Xk = Ik(39863),
      Tk = Ik(40025),
      ik = Ik(37331),
      yk = Ik(37153),
      lk = Ik(40013);
    const ak = function(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const ik = kk();
      Tk.d && Tk.d.HasTags(Fk) && Tk.d.AddTagsTo(ik, Tk.d.GetTags(Fk, !0));
      const yk = (0, lk.e)(ik),
        ak = {};
      for (const Tk in yk) {
        const kk = yk[Tk],
          lk = Fk[Tk],
          Lk = kk.type;
        if (void 0 !== lk && null !== lk && ("uniqueId" !== Tk || qk.AllowLoadingUniqueId)) switch (Lk) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof lk.slice ? ik[Tk] = lk.slice() : ik[Tk] = lk;
            break;
          case 1:
            Xk.cloneTexturesOnlyOnce && ak[lk.uniqueId] ? ik[Tk] = ak[lk.uniqueId] : (ik[Tk] = Ik || lk.isRenderTarget ? lk : lk.clone(), ak[lk.uniqueId] = ik[Tk]);
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
            ik[Tk] = Ik ? lk : lk.clone()
        }
      }
      return ik
    };
    class qk {
      static AppendSerializedAnimations(kk, Fk) {
        if (kk.animations) {
          Fk.animations = [];
          for (let Ik = 0; Ik < kk.animations.length; Ik++) {
            const Xk = kk.animations[Ik];
            Fk.animations.push(Xk.serialize())
          }
        }
      }
      static Serialize(kk, Fk) {
        Fk || (Fk = {}), Tk.d && (Fk.tags = Tk.d.GetTags(kk));
        const Ik = (0, lk.e)(kk);
        for (const Xk in Ik) {
          const Tk = Ik[Xk],
            ik = Tk.sourceName || Xk,
            yk = Tk.type,
            lk = kk[Xk];
          if (void 0 !== lk && null !== lk && ("uniqueId" !== Xk || qk.AllowLoadingUniqueId)) switch (yk) {
            case 0:
              Array.isArray(lk) ? Fk[ik] = lk.slice() : Fk[ik] = lk;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              Fk[ik] = lk.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              Fk[ik] = lk.iXk();
              break;
            case 6:
            case 11:
              Fk[ik] = lk.id
          }
        }
        return Fk
      }
      static ParseProperties(kk, Fk, Ik, Xk) {
        Xk || (Xk = "");
        const Tk = (0, lk.e)(Fk);
        for (const lk in Tk) {
          const ak = Tk[lk],
            Lk = kk[ak.sourceName || lk],
            tk = ak.type;
          if (void 0 !== Lk && null !== Lk && ("uniqueId" !== lk || qk.AllowLoadingUniqueId)) {
            const kk = Fk;
            switch (tk) {
              case 0:
                kk[lk] = Lk;
                break;
              case 1:
                Ik && (kk[lk] = qk._TextureParser(Lk, Ik, Xk));
                break;
              case 2:
                kk[lk] = ik.e.FromArray(Lk);
                break;
              case 3:
                kk[lk] = qk._FresnelParametersParser(Lk);
                break;
              case 4:
                kk[lk] = yk.p.FromArray(Lk);
                break;
              case 5:
                kk[lk] = yk.t.FromArray(Lk);
                break;
              case 6:
                Ik && (kk[lk] = Ik.getLastMeshById(Lk));
                break;
              case 7:
                kk[lk] = qk._ColorCurvesParser(Lk);
                break;
              case 8:
                kk[lk] = ik.h.FromArray(Lk);
                break;
              case 9:
                kk[lk] = qk._ImageProcessingConfigurationParser(Lk);
                break;
              case 10:
                kk[lk] = yk.f.FromArray(Lk);
                break;
              case 11:
                Ik && (kk[lk] = Ik.getCameraById(Lk));
                break;
              case 12:
                kk[lk] = yk.c.FromArray(Lk);
                break;
              case 13:
                kk[lk] = yk.u.FromArray(Lk)
            }
          }
        }
      }
      static Parse(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const ik = kk();
        return Tk.d && Tk.d.AddTagsTo(ik, Fk.tags), qk.ParseProperties(Fk, ik, Ik, Xk), ik
      }
      static Clone(kk, Fk) {
        return ak(kk, Fk, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(kk, Fk) {
        return ak(kk, Fk, !0)
      }
    }
    qk.AllowLoadingUniqueId = !1, qk._ImageProcessingConfigurationParser = kk => {
      throw (0, Xk.j)("ImageProcessingConfiguration")
    }, qk._FresnelParametersParser = kk => {
      throw (0, Xk.j)("FresnelParameters")
    }, qk._ColorCurvesParser = kk => {
      throw (0, Xk.j)("ColorCurves")
    }, qk._TextureParser = (kk, Fk, Ik) => {
      throw (0, Xk.j)("Texture")
    }
  },
  39947: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk
    });
    var Xk = Ik(39891);
    class Tk {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = Tk.Enabled, this._lastSecValueCount++
      }
      addCount(kk, Fk) {
        Tk.Enabled && (this._current += kk, this._hasCurrentValue = !0, Fk && this._fetchResult())
      }
      beginMonitoring() {
        Tk.Enabled && (this._startMonitoringTime = Xk.d.Now)
      }
      endMonitoring() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!Tk.Enabled) return;
        kk && this.fetchNewFrame();
        const Fk = Xk.d.Now;
        this._current = Fk - this._startMonitoringTime, this._hasCurrentValue = !0, kk && this._fetchResult()
      }
      Hx() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const kk = Xk.d.Now;
        kk - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = kk, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    Tk.Enabled = !0
  },
  40107: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Tk,
      f: () => Xk
    });
    class Xk {
      constructor(kk) {
        this.length = 0, this.data = new Array(kk), this._id = Xk._GlobalId++
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
    Xk._GlobalId = 0;
    class Tk extends Xk {
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
            const Ik = (kk.data || kk)[Fk];
            this.pushNoDuplicate(Ik)
          }
        }
      }
    }
  },
  40025: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Tk
    });
    class Xk {
      static Eval(kk, Fk) {
        return "true" === (kk = kk.match(/\([^()]*\)/g) ? kk.replace(/\([^()]*\)/g, (kk => (kk = kk.slice(1, kk.length - 1), Xk._HandleParenthesisContent(kk, Fk)))) : Xk._HandleParenthesisContent(kk, Fk)) || "false" !== kk && Xk.Eval(kk, Fk)
      }
      static _HandleParenthesisContent(kk, Fk) {
        let Ik;
        Fk = Fk || (kk => "true" === kk);
        const Tk = kk.split("||");
        for (const ik in Tk)
          if (Object.prototype.hasOwnProperty.call(Tk, ik)) {
            let kk = Xk._SimplifyNegation(Tk[ik].trim());
            const yk = kk.split("&&");
            if (yk.length > 1)
              for (let Tk = 0; Tk < yk.length; ++Tk) {
                const ik = Xk._SimplifyNegation(yk[Tk].trim());
                if (Ik = "true" !== ik && "false" !== ik ? "!" === ik[0] ? !Fk(ik.substring(1)) : Fk(ik) : "true" === ik, !Ik) {
                  kk = "false";
                  break
                }
              }
            if (Ik || "true" === kk) {
              Ik = !0;
              break
            }
            Ik = "true" !== kk && "false" !== kk ? "!" === kk[0] ? !Fk(kk.substring(1)) : Fk(kk) : "true" === kk
          } return Ik ? "true" : "false"
      }
      static _SimplifyNegation(kk) {
        return "!true" === (kk = (kk = kk.replace(/^[\s!]+/, (kk => (kk = kk.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? kk = "false" : "!false" === kk && (kk = "true"), kk
      }
    }
    class Tk {
      static EnableFor(kk) {
        kk._tags = kk._tags || {}, kk.hasTags = () => Tk.HasTags(kk), kk.addTags = Fk => Tk.AddTagsTo(kk, Fk), kk.removeTags = Fk => Tk.RemoveTagsFrom(kk, Fk), kk.matchesTagsQuery = Fk => Tk.MatchesQuery(kk, Fk)
      }
      static DisableFor(kk) {
        delete kk._tags, delete kk.hasTags, delete kk.addTags, delete kk.removeTags, delete kk.matchesTagsQuery
      }
      static HasTags(kk) {
        if (!kk._tags) return !1;
        const Fk = kk._tags;
        for (const Ik in Fk)
          if (Object.prototype.hasOwnProperty.call(Fk, Ik)) return !0;
        return !1
      }
      static GetTags(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!kk._tags) return null;
        if (Fk) {
          const Fk = [];
          for (const Ik in kk._tags) Object.prototype.hasOwnProperty.call(kk._tags, Ik) && !0 === kk._tags[Ik] && Fk.push(Ik);
          return Fk.join(" ")
        }
        return kk._tags
      }
      static AddTagsTo(kk, Fk) {
        if (!Fk) return;
        if ("string" !== typeof Fk) return;
        const Ik = Fk.split(" ");
        for (const Xk of Ik) Tk._AddTagTo(kk, Xk)
      }
      static _AddTagTo(kk, Fk) {
        "" !== (Fk = Fk.trim()) && "true" !== Fk && "false" !== Fk && (Fk.match(/[\s]/) || Fk.match(/^([!]|([|]|[&]){2})/) || (Tk.EnableFor(kk), kk._tags[Fk] = !0))
      }
      static RemoveTagsFrom(kk, Fk) {
        if (!Tk.HasTags(kk)) return;
        const Ik = Fk.split(" ");
        for (const Xk in Ik) Tk._RemoveTagFrom(kk, Ik[Xk])
      }
      static _RemoveTagFrom(kk, Fk) {
        delete kk._tags[Fk]
      }
      static MatchesQuery(kk, Fk) {
        return void 0 === Fk || ("" === Fk ? Tk.HasTags(kk) : Xk.Eval(Fk, (Fk => Tk.HasTags(kk) && kk._tags[Fk])))
      }
    }
  },
  40149: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ik
    });
    var Xk = Ik(40141),
      Tk = Ik(37187);
    class ik {
      constructor(kk) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new Tk.e, this._scene = kk
      }
      _prepareBuffers() {
        if (this._vertexBuffers[Xk.l.PositionKind]) return;
        const kk = [];
        kk.push(1, 1), kk.push(-1, 1), kk.push(-1, -1), kk.push(1, -1), this._vertexBuffers[Xk.l.PositionKind] = new Xk.l(this._scene.Oe(), kk, Xk.l.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const kk = [];
        kk.push(0), kk.push(1), kk.push(2), kk.push(0), kk.push(2), kk.push(3), this._indexBuffer = this._scene.Oe().createIndexBuffer(kk)
      }
      _getActivePostProcesses(kk) {
        const Fk = this._activePostProcesses;
        Fk.length = 0;
        for (let Ik = 0; Ik < kk.length; Ik++) {
          const Xk = kk[Ik];
          Xk && Fk.push(Xk)
        }
        return Fk
      }
      _rebuild() {
        const kk = this._vertexBuffers[Xk.l.PositionKind];
        kk && (kk._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Ik = this._scene.activeCamera;
        return !!Ik && (Fk = Fk || this._getActivePostProcesses(Ik._postProcesses), !(!Fk || 0 === Fk.length || !this._scene.postProcessesEnabled) && (Fk[0].activate(Ik, kk, null !== Fk && void 0 !== Fk), !0))
      }
      directRender(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          ik = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          yk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : kk.length;
        const lk = this._scene.Oe();
        for (let ak = 0; ak < yk; ak++) {
          ak < kk.length - 1 ? kk[ak + 1].activate(this._scene.activeCamera || this._scene, Fk?.texture) : (Fk ? lk.bindFramebuffer(Fk, Xk, void 0, void 0, Ik, Tk) : ik || lk.restoreDefaultFramebuffer(), lk._debugInsertMarker?.(`post process ${kk[ak].name} output`));
          const yk = kk[ak],
            qk = yk.apply();
          qk && (yk.onBeforeRenderObservable.notifyObservers(qk), this._prepareBuffers(), lk.bindBuffers(this._vertexBuffers, this._indexBuffer, qk), lk.drawElementsType(0, 0, 6), yk.onAfterRenderObservable.notifyObservers(qk))
        }
        lk.setDepthBuffer(!0), lk.setDepthWrite(!0)
      }
      _finalizeFrame(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const ik = this._scene.activeCamera;
        if (!ik) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (Xk = Xk || this._getActivePostProcesses(ik._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const yk = this._scene.Oe();
        for (let lk = 0, ak = Xk.length; lk < ak; lk++) {
          const qk = Xk[lk];
          if (lk < ak - 1 ? qk._outputTexture = Xk[lk + 1].activate(ik, Fk?.texture) : (Fk ? (yk.bindFramebuffer(Fk, Ik, void 0, void 0, Tk), qk._outputTexture = Fk) : (yk.restoreDefaultFramebuffer(), qk._outputTexture = null), yk._debugInsertMarker?.(`post process ${Xk[lk].name} output`)), kk) break;
          const Lk = qk.apply();
          Lk && (qk.onBeforeRenderObservable.notifyObservers(Lk), this._prepareBuffers(), yk.bindBuffers(this._vertexBuffers, this._indexBuffer, Lk), yk.drawElementsType(0, 0, 6), qk.onAfterRenderObservable.notifyObservers(Lk))
        }
        yk.setDepthBuffer(!0), yk.setDepthWrite(!0), yk.setAlphaMode(0)
      }
      dispose() {
        const kk = this._vertexBuffers[Xk.l.PositionKind];
        kk && (kk.dispose(), this._vertexBuffers[Xk.l.PositionKind] = null), this._indexBuffer && (this._scene.Oe()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  40161: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => qk
    });
    var Xk = Ik(40107),
      Tk = Ik(37153);
    const ik = [],
      yk = [];
    let lk = !1;

    function ak(kk, Fk) {
      for (; kk.length < Fk;) kk.push(void 0)
    }
    class qk {
      set opaqueSortCompareFn(kk) {
        this._opaqueSortCompareFn = kk || qk.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(kk) {
        this._alphaTestSortCompareFn = kk || qk.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(kk) {
        this._transparentSortCompareFn = kk || qk.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = kk, this._opaqueSubMeshes = new Xk.f(256), this._transparentSubMeshes = new Xk.f(256), this._alphaTestSubMeshes = new Xk.f(256), this._depthOnlySubMeshes = new Xk.f(256), this._particleSystems = new Xk.f(256), this._spriteManagers = new Xk.f(256), this._empty = !0, this._edgesRenderers = new Xk.d(16), this.disableDepthPrePass = !1, this._scene = Fk, this.opaqueSortCompareFn = Ik, this.alphaTestSortCompareFn = Tk, this.transparentSortCompareFn = ik
      }
      render(kk, Fk, Ik, Xk) {
        let Tk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          ik = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          lk = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          ak = arguments.length > 8 ? arguments[8] : void 0;
        if (kk) return void kk(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const qk = this._scene.Oe();
        Tk && 0 !== this._depthOnlySubMeshes.length && (qk.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), qk.setColorWrite(!0)), ik && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), yk && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const Lk = qk.getStencilBuffer();
        if (qk.setStencilBuffer(!1), Fk && this._renderSprites(), Ik && this._renderParticles(Xk), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), lk && (ak || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (qk.setStencilBuffer(Lk), ak) ak(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const kk = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            kk.length && this._renderTransparent(kk)
          } else this._renderTransparent(this._transparentSubMeshes);
          qk.setAlphaMode(0)
        }
        if (qk.setStencilBuffer(!1), ik && this._edgesRenderers.length) {
          for (let kk = 0; kk < this._edgesRenderers.length; kk++) this._edgesRenderers.data[kk].render();
          qk.setAlphaMode(0)
        }
        qk.setStencilBuffer(Lk)
      }
      _renderOpaqueSorted(kk) {
        qk._RenderSorted(kk, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(kk) {
        qk._RenderSorted(kk, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(kk) {
        qk._RenderSorted(kk, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(kk, Fk, Ik, Xk, ik) {
        let Lk, tk = 0;
        const Zk = Ik ? Ik.globalPosition : qk._ZeroVector;
        if (Xk && Fk !== qk.PainterSortCompare)
          for (; tk < kk.length; tk++) Lk = kk.data[tk], Lk._alphaIndex = Lk.getMesh().alphaIndex, Lk._distanceToCamera = Tk.t.Distance(Lk.vR().EXk.centerWorld, Zk);
        const jk = kk.length;
        let ek = kk.data;
        const wk = jk !== ek.length && !lk;
        if (wk) {
          for (lk = !0, ak(yk, jk), tk = 0; tk < jk; tk++) yk[tk] = ek[tk];
          ek = yk
        } else jk !== ek.length && (ek = ek.slice(0, jk));
        try {
          Fk && qk._StableSort(ek, jk, Fk), qk._DrawSorted(ek, jk, Xk, ik)
        } finally {
          wk && (yk.fill(void 0, 0, jk), lk = !1)
        }
      }
      static _DrawSorted(kk, Fk, Ik, Xk) {
        let Tk;
        const ik = kk[0].getMesh().mG();
        for (let yk = 0; yk < Fk; yk++) {
          if (Tk = kk[yk], ik._activeMeshesFrozenButKeepClipping && !Tk.isInFrustum(ik._frustumPlanes)) continue;
          let Fk = !1;
          if (Ik) {
            const kk = Tk.Ue();
            if (kk && kk.needDepthPrePass && !Xk) {
              Fk = !0;
              const Ik = kk.mG().Oe();
              Ik.setColorWrite(!1), Ik.setAlphaMode(0), Tk.render(!1), Ik.setColorWrite(!0)
            }
          }
          const lk = Tk._renderingMesh;
          !Fk && lk._renderRunFollower(Tk, Ik) || Tk.render(Ik)
        }
      }
      static _StableSort(kk, Fk, Ik) {
        for (let Xk = 0; Xk < Fk; Xk += 16) {
          const Tk = Math.min(Xk + 16, Fk);
          for (let Fk = Xk + 1; Fk < Tk; Fk++) {
            const Tk = kk[Fk];
            let ik = Xk,
              yk = Fk;
            for (; ik < yk;) {
              const Fk = ik + yk >>> 1;
              Ik(Tk, kk[Fk]) < 0 ? yk = Fk : ik = Fk + 1
            }
            for (let Ik = Fk; Ik > ik; Ik--) kk[Ik] = kk[Ik - 1];
            kk[ik] = Tk
          }
        }
        if (!(Fk <= 16)) {
          ak(ik, Fk);
          try {
            let Xk = kk,
              Tk = ik;
            for (let kk = 16; kk < Fk; kk *= 2) {
              for (let yk = 0; yk < Fk; yk += 2 * kk) {
                const ik = Math.min(yk + kk, Fk),
                  lk = Math.min(yk + 2 * kk, Fk);
                let ak = yk,
                  qk = ik,
                  Lk = yk;
                if (ik < lk && Ik(Xk[ik], Xk[ik - 1]) < 0)
                  for (; ak < ik && qk < lk;) Tk[Lk++] = Ik(Xk[qk], Xk[ak]) < 0 ? Xk[qk++] : Xk[ak++];
                for (; ak < ik;) Tk[Lk++] = Xk[ak++];
                for (; qk < lk;) Tk[Lk++] = Xk[qk++]
              }
              const ik = Tk;
              Tk = Xk, Xk = ik
            }
            if (Xk !== kk)
              for (let Ik = 0; Ik < Fk; Ik++) kk[Ik] = Xk[Ik]
          } finally {
            ik.fill(void 0, 0, Fk)
          }
        }
      }
      static defaultTransparentSortCompare(kk, Fk) {
        return kk._alphaIndex > Fk._alphaIndex ? 1 : kk._alphaIndex < Fk._alphaIndex ? -1 : qk.backToFrontSortCompare(kk, Fk)
      }
      static backToFrontSortCompare(kk, Fk) {
        return kk._distanceToCamera < Fk._distanceToCamera ? 1 : kk._distanceToCamera > Fk._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(kk, Fk) {
        return kk._distanceToCamera < Fk._distanceToCamera ? -1 : kk._distanceToCamera > Fk._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(kk, Fk) {
        const Ik = kk.getMesh(),
          Xk = Fk.getMesh();
        return Ik.material && Xk.material ? Ik.material.uniqueId - Xk.material.uniqueId : Ik.uniqueId - Xk.uniqueId
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
      dispatch(kk, Fk, Ik) {
        void 0 === Fk && (Fk = kk.getMesh()), void 0 === Ik && (Ik = kk.Ue()), null !== Ik && void 0 !== Ik && (Ik.needAlphaBlendingForMesh(Fk) ? this._transparentSubMeshes.push(kk) : Ik.needAlphaTestingForMesh(Fk) ? (Ik.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(kk), this._alphaTestSubMeshes.push(kk)) : (Ik.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(kk), this._opaqueSubMeshes.push(kk)), Fk._renderingGroup = this, Fk._edgesRenderer && Fk.isEnabled() && Fk.isVisible && Fk._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(Fk._edgesRenderer), this._empty = !1)
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
        for (let Ik = 0; Ik < this._particleSystems.length; Ik++) {
          const Xk = this._particleSystems.data[Ik];
          if (0 === (Fk && Fk.layerMask & Xk.layerMask)) continue;
          const Tk = Xk.emitter;
          Tk.position && kk && -1 === kk.indexOf(Tk) || this._scene._activeParticles.addCount(Xk.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const kk = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let Fk = 0; Fk < this._spriteManagers.length; Fk++) {
          const Ik = this._spriteManagers.data[Fk];
          0 !== (kk && kk.layerMask & Ik.layerMask) && Ik.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    qk._ZeroVector = Tk.t.Zero()
  },
  40157: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ik
    });
    var Xk = Ik(40161);
    class Tk {}
    class ik {
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
          if (kk.lK)
            for (const Fk of kk.lK) Fk._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const kk of this._scene.spriteManagers) kk._wasDispatched = !1;
        for (const kk of this._scene.jK) kk._wasDispatched = !1
      }
      constructor(kk) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new Tk, this._maintainStateBetweenFrames = !1, this._scene = kk;
        for (let Fk = ik.MIN_RENDERINGGROUPS; Fk < ik.MAX_RENDERINGGROUPS; Fk++) this._autoClearDepthStencil[Fk] = {
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
        this._depthStencilBufferAlreadyCleaned || (this._scene.Oe().clear(null, !1, kk, Fk), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(kk, Fk, Ik, Xk) {
        let Tk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          yk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          lk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          ak = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          qk = arguments.length > 8 ? arguments[8] : void 0,
          Lk = arguments.length > 9 ? arguments[9] : void 0;
        const tk = this._renderingGroupInfo;
        tk.Yw = this._scene, tk.camera = this._scene.activeCamera, tk.renderingManager = this;
        const Zk = Lk ?? this._scene.spriteManagers;
        if (Zk && Xk)
          for (let ik = 0; ik < Zk.length; ik++) {
            const kk = Zk[ik];
            this.dispatchSprites(kk)
          }
        for (let jk = ik.MIN_RENDERINGGROUPS; jk < ik.MAX_RENDERINGGROUPS; jk++) {
          this._depthStencilBufferAlreadyCleaned = jk === ik.MIN_RENDERINGGROUPS;
          const Lk = this._renderingGroups[jk];
          if (!Lk || Lk._empty) continue;
          const Zk = 1 << jk;
          if (tk.renderingGroupId = jk, this._scene.onBeforeRenderingGroupObservable.notifyObservers(tk, Zk), ik.AUTOCLEAR) {
            const kk = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(jk) : this._autoClearDepthStencil[jk];
            kk && kk.autoClear && this._clearDepthStencilBuffer(kk.depth, kk.stencil)
          }
          for (let kk = 0, Fk = this._scene._beforeRenderingGroupDrawStage; kk < Fk.length; kk++) {
            Fk[kk].action(jk)
          }
          Lk.render(kk, Xk, Ik, Fk, Tk, yk, lk, ak, qk);
          for (let kk = 0, Fk = this._scene._afterRenderingGroupDrawStage; kk < Fk.length; kk++) {
            Fk[kk].action(jk)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(tk, Zk)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let kk = ik.MIN_RENDERINGGROUPS; kk < ik.MAX_RENDERINGGROUPS; kk++) {
            const Fk = this._renderingGroups[kk];
            Fk && Fk.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let kk = ik.MIN_RENDERINGGROUPS; kk < ik.MAX_RENDERINGGROUPS; kk++) {
            const Fk = this._renderingGroups[kk];
            Fk && Fk.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let kk = ik.MIN_RENDERINGGROUPS; kk < ik.MAX_RENDERINGGROUPS; kk++) {
          const Fk = this._renderingGroups[kk];
          Fk && Fk.dispose()
        }
      }
      _prepareRenderingGroup(kk) {
        void 0 === this._renderingGroups[kk] && (this._renderingGroups[kk] = new Xk.d(kk, this._scene, this._customOpaqueSortCompareFn[kk], this._customAlphaTestSortCompareFn[kk], this._customTransparentSortCompareFn[kk]), this._renderingGroups[kk].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(kk) {
        this.maintainStateBetweenFrames && kk._wasDispatched || (kk._wasDispatched = !0, this.getRenderingGroup(kk.renderingGroupId).dispatchSprites(kk))
      }
      dispatchParticles(kk) {
        this.maintainStateBetweenFrames && kk._wasDispatched || (kk._wasDispatched = !0, this.getRenderingGroup(kk.renderingGroupId).dispatchParticles(kk))
      }
      dispatch(kk, Fk, Ik) {
        void 0 === Fk && (Fk = kk.getMesh()), this.maintainStateBetweenFrames && kk._wasDispatched || (kk._wasDispatched = !0, this.getRenderingGroup(Fk.renderingGroupId).dispatch(kk, Fk, Ik))
      }
      setRenderingOrder(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[kk] = Fk, this._customAlphaTestSortCompareFn[kk] = Ik, this._customTransparentSortCompareFn[kk] = Xk, this._renderingGroups[kk]) {
          const Fk = this._renderingGroups[kk];
          Fk.opaqueSortCompareFn = this._customOpaqueSortCompareFn[kk], Fk.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[kk], Fk.transparentSortCompareFn = this._customTransparentSortCompareFn[kk]
        }
      }
      setRenderingAutoClearDepthStencil(kk, Fk) {
        let Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Xk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[kk] = {
          autoClear: Fk,
          depth: Ik,
          stencil: Xk
        }
      }
      getAutoClearDepthStencilSetup(kk) {
        return this._autoClearDepthStencil[kk]
      }
    }
    ik.MAX_RENDERINGGROUPS = 4, ik.MIN_RENDERINGGROUPS = 0, ik.AUTOCLEAR = !0
  },
  39894: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk
    });
    class Xk {
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
      setAlphaBlendConstants(kk, Fk, Ik, Xk) {
        this._blendConstants[0] === kk && this._blendConstants[1] === Fk && this._blendConstants[2] === Ik && this._blendConstants[3] === Xk || (this._blendConstants[0] = kk, this._blendConstants[1] = Fk, this._blendConstants[2] = Ik, this._blendConstants[3] = Xk, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(kk, Fk, Ik, Xk) {
        const Tk = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[Tk + 0] === kk && this._blendFunctionParameters[Tk + 1] === Fk && this._blendFunctionParameters[Tk + 2] === Ik && this._blendFunctionParameters[Tk + 3] === Xk || (this._blendFunctionParameters[Tk + 0] = kk, this._blendFunctionParameters[Tk + 1] = Fk, this._blendFunctionParameters[Tk + 2] = Ik, this._blendFunctionParameters[Tk + 3] = Xk, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(kk, Fk) {
        const Ik = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[Ik + 0] === kk && this._blendEquationParameters[Ik + 1] === Fk || (this._blendEquationParameters[Ik + 0] = kk, this._blendEquationParameters[Ik + 1] = Fk, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== Fk && (this._numTargets = Fk, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== Ik && (this._blendDisabledTargetsMask = Ik, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (kk.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === Fk || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (Fk > 1 && 0 !== Ik && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & Ik) ? kk.enable(kk.BLEND) : kk.disable(kk.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (kk.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (kk.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const Xk = kk;
        if (this._isAlphaBlendDirty) {
          for (let Tk = 0; Tk < Fk; Tk++) {
            const Fk = Tk < this._numTargetEnabled ? Tk : 0;
            this._alphaBlend[Fk] && 0 === (Ik & 1 << Tk) ? Xk.enableIndexed(kk.BLEND, Tk) : Xk.disableIndexed(kk.BLEND, Tk)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let kk = 0; kk < Fk; kk++) {
            const Fk = kk < this._numTargetEnabled ? 4 * kk : 0;
            Xk.blendFuncSeparateIndexed(kk, this._blendFunctionParameters[Fk + 0], this._blendFunctionParameters[Fk + 1], this._blendFunctionParameters[Fk + 2], this._blendFunctionParameters[Fk + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let kk = 0; kk < Fk; kk++) {
            const Fk = kk < this._numTargetEnabled ? 2 * kk : 0;
            Xk.blendEquationSeparateIndexed(kk, this._blendEquationParameters[Fk + 0], this._blendEquationParameters[Fk + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(kk, Fk) {
        let Ik = 32774;
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
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Fk), Ik = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Fk), Ik = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, Fk);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, Fk)
        }
        this.setAlphaEquationParameters(Ik, Ik, Fk)
      }
    }
  },
  40189: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Xk
    });
    class Xk {}
    Xk._IsPickingAvailable = !1
  },
  40090: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => aI,
      f: () => yI
    });
    var Xk = Ik(40097),
      Tk = Ik(39878),
      ik = Ik(39891),
      yk = Ik(37187),
      lk = Ik(40107);
    class ak {
      constructor() {
        this._count = 0, this._data = {}
      }
      kS(kk) {
        this.clear(), kk.forEach(((kk, Fk) => this.add(kk, Fk)))
      }
      get(kk) {
        const Fk = this._data[kk];
        if (void 0 !== Fk) return Fk
      }
      getOrAddWithFactory(kk, Fk) {
        let Ik = this.get(kk);
        return void 0 !== Ik || (Ik = Fk(kk), Ik && this.add(kk, Ik)), Ik
      }
      getOrAdd(kk, Fk) {
        const Ik = this.get(kk);
        return void 0 !== Ik ? Ik : (this.add(kk, Fk), Fk)
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
          const Ik = kk(Fk, this._data[Fk]);
          if (Ik) return Ik
        }
        return null
      }
    }
    var qk = Ik(40025),
      Lk = Ik(37153),
      tk = Ik(40113),
      Zk = Ik(40134),
      jk = Ik(40139);
    class ek {
      constructor(kk, Fk, Ik, Xk, Tk, ik) {
        this.source = kk, this.pointerX = Fk, this.pointerY = Ik, this.meshUnderPointer = Xk, this.sourceEvent = Tk, this.additionalData = ik
      }
      static CreateNew(kk, Fk, Ik) {
        const Xk = kk.mG();
        return new ek(kk, Xk.pointerX, Xk.pointerY, Xk.meshUnderPointer || kk, Fk, Ik)
      }
      static CreateNewFromSprite(kk, Fk, Ik, Xk) {
        return new ek(kk, Fk.pointerX, Fk.pointerY, Fk.meshUnderPointer, Ik, Xk)
      }
      static CreateNewFromScene(kk, Fk) {
        return new ek(null, kk.pointerX, kk.pointerY, kk.meshUnderPointer, Fk)
      }
      static CreateNewFromPrimitive(kk, Fk, Ik, Xk) {
        return new ek(kk, Fk.x, Fk.y, null, Ik, Xk)
      }
    }
    var wk = Ik(40149),
      Hk = Ik(40152),
      Jk = Ik(40157),
      xk = Ik(40166),
      Pk = Ik(39850),
      Kk = Ik(37178),
      Qk = Ik(39863),
      sk = Ik(40169);
    class Vk {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const kk in Vk.Triggers)
          if (Object.prototype.hasOwnProperty.call(Vk.Triggers, kk)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const kk in Vk.Triggers)
          if (Object.prototype.hasOwnProperty.call(Vk.Triggers, kk)) {
            const Fk = parseInt(kk);
            if (Fk >= 1 && Fk <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(kk) {
        for (const Fk in Vk.Triggers)
          if (Object.prototype.hasOwnProperty.call(Vk.Triggers, Fk)) {
            if (parseInt(Fk) === kk) return !0
          } return !1
      }
    }
    Vk.Triggers = {};
    var zk, Sk, vk, Ek, Ok, nk, Gk, pk = Ik(40176);
    ! function(kk) {
      kk[kk.Generic = 0] = "Generic", kk[kk.Keyboard = 1] = "Keyboard", kk[kk.Mouse = 2] = "Mouse", kk[kk.Touch = 3] = "Touch", kk[kk.DualShock = 4] = "DualShock", kk[kk.Xbox = 5] = "Xbox", kk[kk.Switch = 6] = "Switch", kk[kk.DualSense = 7] = "DualSense"
    }(zk || (zk = {})),
    function(kk) {
      kk[kk.Horizontal = 0] = "Horizontal", kk[kk.Vertical = 1] = "Vertical", kk[kk.LeftClick = 2] = "LeftClick", kk[kk.MiddleClick = 3] = "MiddleClick", kk[kk.RightClick = 4] = "RightClick", kk[kk.BrowserBack = 5] = "BrowserBack", kk[kk.BrowserForward = 6] = "BrowserForward", kk[kk.MouseWheelX = 7] = "MouseWheelX", kk[kk.MouseWheelY = 8] = "MouseWheelY", kk[kk.MouseWheelZ = 9] = "MouseWheelZ", kk[kk.Move = 12] = "Move"
    }(Sk || (Sk = {})),
    function(kk) {
      kk[kk.Horizontal = 0] = "Horizontal", kk[kk.Vertical = 1] = "Vertical", kk[kk.LeftClick = 2] = "LeftClick", kk[kk.MiddleClick = 3] = "MiddleClick", kk[kk.RightClick = 4] = "RightClick", kk[kk.BrowserBack = 5] = "BrowserBack", kk[kk.BrowserForward = 6] = "BrowserForward", kk[kk.MouseWheelX = 7] = "MouseWheelX", kk[kk.MouseWheelY = 8] = "MouseWheelY", kk[kk.MouseWheelZ = 9] = "MouseWheelZ", kk[kk.DeltaHorizontal = 10] = "DeltaHorizontal", kk[kk.DeltaVertical = 11] = "DeltaVertical"
    }(vk || (vk = {})),
    function(kk) {
      kk[kk.Cross = 0] = "Cross", kk[kk.Circle = 1] = "Circle", kk[kk.Square = 2] = "Square", kk[kk.Triangle = 3] = "Triangle", kk[kk.L1 = 4] = "L1", kk[kk.R1 = 5] = "R1", kk[kk.L2 = 6] = "L2", kk[kk.R2 = 7] = "R2", kk[kk.Share = 8] = "Share", kk[kk.Options = 9] = "Options", kk[kk.L3 = 10] = "L3", kk[kk.R3 = 11] = "R3", kk[kk.DPadUp = 12] = "DPadUp", kk[kk.DPadDown = 13] = "DPadDown", kk[kk.DPadLeft = 14] = "DPadLeft", kk[kk.DPadRight = 15] = "DPadRight", kk[kk.Home = 16] = "Home", kk[kk.TouchPad = 17] = "TouchPad", kk[kk.LStickXAxis = 18] = "LStickXAxis", kk[kk.LStickYAxis = 19] = "LStickYAxis", kk[kk.RStickXAxis = 20] = "RStickXAxis", kk[kk.RStickYAxis = 21] = "RStickYAxis"
    }(Ek || (Ek = {})),
    function(kk) {
      kk[kk.Cross = 0] = "Cross", kk[kk.Circle = 1] = "Circle", kk[kk.Square = 2] = "Square", kk[kk.Triangle = 3] = "Triangle", kk[kk.L1 = 4] = "L1", kk[kk.R1 = 5] = "R1", kk[kk.L2 = 6] = "L2", kk[kk.R2 = 7] = "R2", kk[kk.Create = 8] = "Create", kk[kk.Options = 9] = "Options", kk[kk.L3 = 10] = "L3", kk[kk.R3 = 11] = "R3", kk[kk.DPadUp = 12] = "DPadUp", kk[kk.DPadDown = 13] = "DPadDown", kk[kk.DPadLeft = 14] = "DPadLeft", kk[kk.DPadRight = 15] = "DPadRight", kk[kk.Home = 16] = "Home", kk[kk.TouchPad = 17] = "TouchPad", kk[kk.LStickXAxis = 18] = "LStickXAxis", kk[kk.LStickYAxis = 19] = "LStickYAxis", kk[kk.RStickXAxis = 20] = "RStickXAxis", kk[kk.RStickYAxis = 21] = "RStickYAxis"
    }(Ok || (Ok = {})),
    function(kk) {
      kk[kk.A = 0] = "A", kk[kk.B = 1] = "B", kk[kk.X = 2] = "X", kk[kk.Y = 3] = "Y", kk[kk.LB = 4] = "LB", kk[kk.RB = 5] = "RB", kk[kk.LT = 6] = "LT", kk[kk.RT = 7] = "RT", kk[kk.Back = 8] = "Back", kk[kk.Start = 9] = "Start", kk[kk.LS = 10] = "LS", kk[kk.RS = 11] = "RS", kk[kk.DPadUp = 12] = "DPadUp", kk[kk.DPadDown = 13] = "DPadDown", kk[kk.DPadLeft = 14] = "DPadLeft", kk[kk.DPadRight = 15] = "DPadRight", kk[kk.Home = 16] = "Home", kk[kk.LStickXAxis = 17] = "LStickXAxis", kk[kk.LStickYAxis = 18] = "LStickYAxis", kk[kk.RStickXAxis = 19] = "RStickXAxis", kk[kk.RStickYAxis = 20] = "RStickYAxis"
    }(nk || (nk = {})),
    function(kk) {
      kk[kk.B = 0] = "B", kk[kk.A = 1] = "A", kk[kk.Y = 2] = "Y", kk[kk.X = 3] = "X", kk[kk.L = 4] = "L", kk[kk.R = 5] = "R", kk[kk.ZL = 6] = "ZL", kk[kk.ZR = 7] = "ZR", kk[kk.Minus = 8] = "Minus", kk[kk.Plus = 9] = "Plus", kk[kk.LS = 10] = "LS", kk[kk.RS = 11] = "RS", kk[kk.DPadUp = 12] = "DPadUp", kk[kk.DPadDown = 13] = "DPadDown", kk[kk.DPadLeft = 14] = "DPadLeft", kk[kk.DPadRight = 15] = "DPadRight", kk[kk.Home = 16] = "Home", kk[kk.Capture = 17] = "Capture", kk[kk.LStickXAxis = 18] = "LStickXAxis", kk[kk.LStickYAxis = 19] = "LStickYAxis", kk[kk.RStickXAxis = 20] = "RStickXAxis", kk[kk.RStickYAxis = 21] = "RStickYAxis"
    }(Gk || (Gk = {}));
    var uk = Ik(40182);
    class bk {
      static CreateDeviceEvent(kk, Fk, Ik, Xk, Tk, ik, yk) {
        switch (kk) {
          case zk.Keyboard:
            return this._CreateKeyboardEvent(Ik, Xk, Tk, ik);
          case zk.Mouse:
            if (Ik === Sk.MouseWheelX || Ik === Sk.MouseWheelY || Ik === Sk.MouseWheelZ) return this._CreateWheelEvent(kk, Fk, Ik, Xk, Tk, ik);
          case zk.Touch:
            return this._CreatePointerEvent(kk, Fk, Ik, Xk, Tk, ik, yk);
          default:
            throw `Unable to generate event for device ${zk[kk]}`
        }
      }
      static _CreatePointerEvent(kk, Fk, Ik, Xk, Tk, ik, yk) {
        const lk = this._CreateMouseEvent(kk, Fk, Ik, Xk, Tk, ik);
        kk === zk.Mouse ? (lk.deviceType = zk.Mouse, lk.pointerId = 1, lk.pointerType = "mouse") : (lk.deviceType = zk.Touch, lk.pointerId = yk ?? Fk, lk.pointerType = "touch");
        let ak = 0;
        return ak += Tk.pollInput(kk, Fk, Sk.LeftClick), ak += 2 * Tk.pollInput(kk, Fk, Sk.RightClick), ak += 4 * Tk.pollInput(kk, Fk, Sk.MiddleClick), lk.buttons = ak, Ik === Sk.Move ? lk.type = "pointermove" : Ik >= Sk.LeftClick && Ik <= Sk.RightClick && (lk.type = 1 === Xk ? "pointerdown" : "pointerup", lk.button = Ik - 2), lk
      }
      static _CreateWheelEvent(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = this._CreateMouseEvent(kk, Fk, Ik, Xk, Tk, ik);
        switch (yk.pointerId = 1, yk.type = "wheel", yk.deltaMode = uk.c.DOM_DELTA_PIXEL, yk.deltaX = 0, yk.deltaY = 0, yk.deltaZ = 0, Ik) {
          case Sk.MouseWheelX:
            yk.deltaX = Xk;
            break;
          case Sk.MouseWheelY:
            yk.deltaY = Xk;
            break;
          case Sk.MouseWheelZ:
            yk.deltaZ = Xk
        }
        return yk
      }
      static _CreateMouseEvent(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = this._CreateEvent(ik),
          lk = Tk.pollInput(kk, Fk, Sk.Horizontal),
          ak = Tk.pollInput(kk, Fk, Sk.Vertical);
        return ik ? (yk.movementX = 0, yk.movementY = 0, yk.offsetX = yk.movementX - ik.getBoundingClientRect().x, yk.offsetY = yk.movementY - ik.getBoundingClientRect().y) : (yk.movementX = Tk.pollInput(kk, Fk, 10), yk.movementY = Tk.pollInput(kk, Fk, 11), yk.offsetX = 0, yk.offsetY = 0), this._CheckNonCharacterKeys(yk, Tk), yk.clientX = lk, yk.clientY = ak, yk.x = lk, yk.y = ak, yk.deviceType = kk, yk.deviceSlot = Fk, yk.inputIndex = Ik, yk
      }
      static _CreateKeyboardEvent(kk, Fk, Ik, Xk) {
        const Tk = this._CreateEvent(Xk);
        return this._CheckNonCharacterKeys(Tk, Ik), Tk.deviceType = zk.Keyboard, Tk.deviceSlot = 0, Tk.inputIndex = kk, Tk.type = 1 === Fk ? "keydown" : "keyup", Tk.key = String.fromCharCode(kk), Tk.keyCode = kk, Tk
      }
      static _CheckNonCharacterKeys(kk, Fk) {
        const Ik = Fk.isDeviceAvailable(zk.Keyboard),
          Xk = Ik && 1 === Fk.pollInput(zk.Keyboard, 0, 18),
          Tk = Ik && 1 === Fk.pollInput(zk.Keyboard, 0, 17),
          ik = Ik && (1 === Fk.pollInput(zk.Keyboard, 0, 91) || 1 === Fk.pollInput(zk.Keyboard, 0, 92) || 1 === Fk.pollInput(zk.Keyboard, 0, 93)),
          yk = Ik && 1 === Fk.pollInput(zk.Keyboard, 0, 16);
        kk.altKey = Xk, kk.ctrlKey = Tk, kk.metaKey = ik, kk.shiftKey = yk
      }
      static _CreateEvent(kk) {
        const Fk = {
          preventDefault: () => {}
        };
        return Fk.target = kk, Fk
      }
    }
    class Rk {
      constructor(kk, Fk, Ik) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(kk, Fk, ((kk, Fk, Xk, Tk) => {
          const ik = bk.CreateDeviceEvent(kk, Fk, Xk, Tk, this);
          Ik(kk, Fk, ik)
        })) : this._createDummyNativeInput()
      }
      pollInput(kk, Fk, Ik) {
        return this._nativeInput.pollInput(kk, Fk, Ik)
      }
      isDeviceAvailable(kk) {
        return kk === zk.Mouse || kk === zk.Touch
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
    const Uk = Object.keys(Sk).length / 2;
    class Ck {
      constructor(kk, Fk, Ik, Tk) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = Xk.h.IsSafari(), this._usingMacOs = (0, Pk.h)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = kk => {}, this._keyboardUpEvent = kk => {}, this._keyboardBlurEvent = kk => {}, this._pointerMoveEvent = kk => {}, this._pointerDownEvent = kk => {}, this._pointerUpEvent = kk => {}, this._pointerCancelEvent = kk => {}, this._pointerCancelTouch = kk => {}, this._pointerLeaveEvent = kk => {}, this._pointerWheelEvent = kk => {}, this._pointerBlurEvent = kk => {}, this._pointerMacOsChromeOutEvent = kk => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, Pk.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, Pk.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = kk => {}, this._gamepadDisconnectedEvent = kk => {}, this._eventPrefix = Xk.h.GetPointerPrefix(kk), this._engine = kk, this._onDeviceConnected = Fk, this._onDeviceDisconnected = Ik, this._onInputChanged = Tk, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(kk, Fk, Ik) {
        const Tk = this._inputs[kk][Fk];
        if (!Tk) throw `Unable to find device ${zk[kk]}`;
        kk >= zk.DualShock && kk <= zk.DualSense && this._updateDevice(kk, Fk, Ik);
        const ik = Tk[Ik];
        if (void 0 === ik) throw `Unable to find input ${Ik} for device ${zk[kk]} in slot ${Fk}`;
        return Ik === Sk.Move && Xk.h.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), ik
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
                  const Ik = kk[+Fk];
                  if (Ik)
                    for (let kk = 0; kk < Ik.length; kk++) Ik[kk] = 0
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
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(zk.Mouse, 0, 0, 0)
      }
      _addGamePad(kk) {
        const Fk = this._getGamepadDeviceType(kk.id),
          Ik = kk.index;
        this._gamepads = this._gamepads || new Array(kk.index + 1), this._registerDevice(Fk, Ik, kk.buttons.length + kk.axes.length), this._gamepads[Ik] = Fk
      }
      _addPointerDevice(kk, Fk, Ik, Xk) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(kk, Fk, Uk);
        const Tk = this._inputs[kk][Fk];
        Tk[0] = Ik, Tk[1] = Xk
      }
      _registerDevice(kk, Fk, Ik) {
        if (void 0 === Fk) throw `Unable to register device ${zk[kk]} to undefined slot.`;
        if (this._inputs[kk] || (this._inputs[kk] = {}), !this._inputs[kk][Fk]) {
          const Xk = new Array(Ik);
          Xk.fill(0), this._inputs[kk][Fk] = Xk, this._onDeviceConnected(kk, Fk)
        }
      }
      _unregisterDevice(kk, Fk) {
        this._inputs[kk][Fk] && (delete this._inputs[kk][Fk], this._onDeviceDisconnected(kk, Fk))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = kk => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(zk.Keyboard, 0, 255));
          const Fk = this._inputs[zk.Keyboard][0];
          if (Fk) {
            Fk[kk.keyCode] = 1;
            const Ik = kk;
            Ik.inputIndex = kk.keyCode, this._usingMacOs && kk.metaKey && "Meta" !== kk.key && (this._metaKeys.includes(kk.keyCode) || this._metaKeys.push(kk.keyCode)), this._onInputChanged(zk.Keyboard, 0, Ik)
          }
        }, this._keyboardUpEvent = kk => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(zk.Keyboard, 0, 255));
          const Fk = this._inputs[zk.Keyboard][0];
          if (Fk) {
            Fk[kk.keyCode] = 0;
            const Ik = kk;
            if (Ik.inputIndex = kk.keyCode, this._usingMacOs && "Meta" === kk.key && this._metaKeys.length > 0) {
              for (const kk of this._metaKeys) {
                const Ik = bk.CreateDeviceEvent(zk.Keyboard, 0, kk, 0, this, this._elementToAttachTo);
                Fk[kk] = 0, this._onInputChanged(zk.Keyboard, 0, Ik)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(zk.Keyboard, 0, Ik)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const kk = this._inputs[zk.Keyboard][0];
            for (let Fk = 0; Fk < kk.length; Fk++)
              if (0 !== kk[Fk]) {
                kk[Fk] = 0;
                const Ik = bk.CreateDeviceEvent(zk.Keyboard, 0, Fk, 0, this, this._elementToAttachTo);
                this._onInputChanged(zk.Keyboard, 0, Ik)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, Pk.h)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let Xk = 0; Xk < this._maxTouchPoints; Xk++) this._activeTouchIds[Xk] = -1;
        this._pointerMoveEvent = kk => {
          const Fk = this._getPointerType(kk);
          let Ik = Fk === zk.Mouse ? 0 : this._activeTouchIds.indexOf(kk.pointerId);
          if (Fk === zk.Touch && -1 === Ik) {
            if (0 === kk.buttons) return;
            const Tk = this._activeTouchIds.indexOf(-1);
            if (!(Tk >= 0)) return void Xk.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            Ik = Tk, this._activeTouchIds[Tk] = kk.pointerId, this._onDeviceConnected(Fk, Ik)
          }
          this._inputs[Fk] || (this._inputs[Fk] = {}), this._inputs[Fk][Ik] || this._addPointerDevice(Fk, Ik, kk.clientX, kk.clientY);
          const Tk = this._inputs[Fk][Ik];
          if (Tk) {
            const Xk = kk;
            Xk.inputIndex = Sk.Move, Tk[Sk.Horizontal] = kk.clientX, Tk[Sk.Vertical] = kk.clientY, Fk === zk.Touch && 0 === Tk[Sk.LeftClick] && (Tk[Sk.LeftClick] = 1), void 0 === kk.pointerId && (kk.pointerId = this._mouseId), this._onInputChanged(Fk, Ik, Xk), this._usingSafari || -1 === kk.button || (Xk.inputIndex = kk.button + 2, Tk[kk.button + 2] = Tk[kk.button + 2] ? 0 : 1, this._onInputChanged(Fk, Ik, Xk))
          }
        }, this._pointerDownEvent = kk => {
          const Fk = this._getPointerType(kk);
          let Ik = Fk === zk.Mouse ? 0 : kk.pointerId;
          if (Fk === zk.Touch) {
            let Fk = this._activeTouchIds.indexOf(kk.pointerId);
            if (-1 === Fk && (Fk = this._activeTouchIds.indexOf(-1)), !(Fk >= 0)) return void Xk.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            Ik = Fk, this._activeTouchIds[Fk] = kk.pointerId
          }
          this._inputs[Fk] || (this._inputs[Fk] = {}), this._inputs[Fk][Ik] ? Fk === zk.Touch && this._onDeviceConnected(Fk, Ik) : this._addPointerDevice(Fk, Ik, kk.clientX, kk.clientY);
          const Tk = this._inputs[Fk][Ik];
          if (Tk) {
            const Xk = Tk[Sk.Horizontal],
              yk = Tk[Sk.Vertical];
            if (Fk === zk.Mouse) {
              if (void 0 === kk.pointerId && (kk.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (ik) {}
            } else if (kk.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(kk.pointerId)
            } catch (ik) {}
            Tk[Sk.Horizontal] = kk.clientX, Tk[Sk.Vertical] = kk.clientY, Tk[kk.button + 2] = 1;
            const lk = kk;
            lk.inputIndex = kk.button + 2, this._onInputChanged(Fk, Ik, lk), Xk === kk.clientX && yk === kk.clientY || (lk.inputIndex = Sk.Move, this._onInputChanged(Fk, Ik, lk))
          }
        }, this._pointerUpEvent = kk => {
          const Fk = this._getPointerType(kk),
            Ik = Fk === zk.Mouse ? 0 : this._activeTouchIds.indexOf(kk.pointerId);
          if (Fk === zk.Touch) {
            if (-1 === Ik) return;
            this._activeTouchIds[Ik] = -1
          }
          const Xk = this._inputs[Fk]?.[Ik];
          let Tk = kk.button,
            ik = Xk && 0 !== Xk[Tk + 2];
          if (!ik && this._isUsingFirefox && this._usingMacOs && Xk && (Tk = 2 === Tk ? 0 : 2, ik = 0 !== Xk[Tk + 2]), ik) {
            const ik = Xk[Sk.Horizontal],
              yk = Xk[Sk.Vertical];
            Xk[Sk.Horizontal] = kk.clientX, Xk[Sk.Vertical] = kk.clientY, Xk[Tk + 2] = 0;
            const lk = kk;
            void 0 === kk.pointerId && (kk.pointerId = this._mouseId), ik === kk.clientX && yk === kk.clientY || (lk.inputIndex = Sk.Move, this._onInputChanged(Fk, Ik, lk)), lk.inputIndex = Tk + 2, Fk === zk.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : kk.pointerId && this._elementToAttachTo.hasPointerCapture?.(kk.pointerId) && this._elementToAttachTo.releasePointerCapture(kk.pointerId), this._onInputChanged(Fk, Ik, lk), Fk === zk.Touch && this._onDeviceDisconnected(Fk, Ik)
          }
        }, this._pointerCancelTouch = kk => {
          const Fk = this._activeTouchIds.indexOf(kk);
          if (-1 === Fk) return;
          this._elementToAttachTo.hasPointerCapture?.(kk) && this._elementToAttachTo.releasePointerCapture(kk), this._inputs[zk.Touch][Fk][Sk.LeftClick] = 0;
          const Ik = bk.CreateDeviceEvent(zk.Touch, Fk, Sk.LeftClick, 0, this, this._elementToAttachTo, kk);
          this._onInputChanged(zk.Touch, Fk, Ik), this._activeTouchIds[Fk] = -1, this._onDeviceDisconnected(zk.Touch, Fk)
        }, this._pointerCancelEvent = kk => {
          if ("mouse" === kk.pointerType) {
            const kk = this._inputs[zk.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let Fk = Sk.LeftClick; Fk <= Sk.BrowserForward; Fk++)
              if (1 === kk[Fk]) {
                kk[Fk] = 0;
                const Ik = bk.CreateDeviceEvent(zk.Mouse, 0, Fk, 0, this, this._elementToAttachTo);
                this._onInputChanged(zk.Mouse, 0, Ik)
              }
          } else this._pointerCancelTouch(kk.pointerId)
        }, this._pointerLeaveEvent = kk => {
          "pen" === kk.pointerType && this._pointerCancelTouch(kk.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let kk = !1;
        const Fk = function() {};
        try {
          const Ik = Object.defineProperty({}, "passive", {
            get: function() {
              kk = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", Fk, Ik), this._elementToAttachTo.removeEventListener("test", Fk, Ik)
        } catch (Ik) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(zk.Mouse)) {
            const kk = this._inputs[zk.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let Fk = Sk.LeftClick; Fk <= Sk.BrowserForward; Fk++)
              if (1 === kk[Fk]) {
                kk[Fk] = 0;
                const Ik = bk.CreateDeviceEvent(zk.Mouse, 0, Fk, 0, this, this._elementToAttachTo);
                this._onInputChanged(zk.Mouse, 0, Ik)
              }
          }
          if (this.isDeviceAvailable(zk.Touch)) {
            const kk = this._inputs[zk.Touch];
            for (let Fk = 0; Fk < this._activeTouchIds.length; Fk++) {
              const Ik = this._activeTouchIds[Fk];
              if (this._elementToAttachTo.hasPointerCapture?.(Ik) && this._elementToAttachTo.releasePointerCapture(Ik), -1 !== Ik && 1 === kk[Fk]?.[Sk.LeftClick]) {
                kk[Fk][Sk.LeftClick] = 0;
                const Xk = bk.CreateDeviceEvent(zk.Touch, Fk, Sk.LeftClick, 0, this, this._elementToAttachTo, Ik);
                this._onInputChanged(zk.Touch, Fk, Xk), this._activeTouchIds[Fk] = -1, this._onDeviceDisconnected(zk.Touch, Fk)
              }
            }
          }
        }, this._pointerWheelEvent = kk => {
          const Fk = zk.Mouse;
          this._inputs[Fk] || (this._inputs[Fk] = []), this._inputs[Fk][0] || (this._pointerActive = !0, this._registerDevice(Fk, 0, Uk));
          const Ik = this._inputs[Fk][0];
          if (Ik) {
            Ik[Sk.MouseWheelX] = kk.deltaX || 0, Ik[Sk.MouseWheelY] = kk.deltaY || kk.wheelDelta || 0, Ik[Sk.MouseWheelZ] = kk.deltaZ || 0;
            const Xk = kk;
            void 0 === kk.pointerId && (kk.pointerId = this._mouseId), 0 !== Ik[Sk.MouseWheelX] && (Xk.inputIndex = Sk.MouseWheelX, this._onInputChanged(Fk, 0, Xk)), 0 !== Ik[Sk.MouseWheelY] && (Xk.inputIndex = Sk.MouseWheelY, this._onInputChanged(Fk, 0, Xk)), 0 !== Ik[Sk.MouseWheelZ] && (Xk.inputIndex = Sk.MouseWheelZ, this._onInputChanged(Fk, 0, Xk))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = kk => {
          kk.buttons > 1 && this._pointerCancelEvent(kk)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!kk && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(zk.Mouse)) {
            const kk = this._inputs[zk.Mouse][0];
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
              Ik = kk.gamepad.index;
            this._unregisterDevice(Fk, Ik), delete this._gamepads[Ik]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(kk, Fk, Ik) {
        const Xk = navigator.getGamepads()[Fk];
        if (Xk && kk === this._gamepads[Fk]) {
          const Tk = this._inputs[kk][Fk];
          Ik >= Xk.buttons.length ? Tk[Ik] = Xk.axes[Ik - Xk.buttons.length].valueOf() : Tk[Ik] = Xk.buttons[Ik].value
        }
      }
      _getGamepadDeviceType(kk) {
        return -1 !== kk.indexOf("054c") ? -1 !== kk.indexOf("0ce6") ? zk.DualSense : zk.DualShock : -1 !== kk.indexOf("Xbox One") || -1 !== kk.search("Xbox 360") || -1 !== kk.search("xinput") || -1 !== kk.indexOf("045e") && -1 === kk.indexOf("Surface Dock") ? zk.Xbox : -1 !== kk.indexOf("057e") ? zk.Switch : zk.Generic
      }
      _getPointerType(kk) {
        let Fk = zk.Mouse;
        return ("touch" === kk.pointerType || "pen" === kk.pointerType || kk.touches) && (Fk = zk.Touch), Fk
      }
    }
    class Nk {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = Fk, this.deviceSlot = Ik, this.onInputChangedObservable = new yk.e, this._deviceInputSystem = kk
      }
      getInput(kk) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, kk)
      }
    }
    class ck {
      constructor(kk) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = kk => {
          for (let Fk = 0; Fk < this._devices.length; Fk++) {
            const Ik = this._devices[Fk];
            for (const Xk in Ik) {
              const Ik = +Xk;
              kk._addDevice(new Nk(this._deviceInputSystem, Fk, Ik))
            }
          }
          this._registeredManagers.push(kk)
        }, this.unregisterManager = kk => {
          const Fk = this._registeredManagers.indexOf(kk);
          Fk > -1 && this._registeredManagers.splice(Fk, 1)
        };
        const Fk = Object.keys(zk).length / 2;
        this._devices = new Array(Fk);
        const Ik = (kk, Fk) => {
            this._devices[kk] || (this._devices[kk] = new Array), this._devices[kk][Fk] || (this._devices[kk][Fk] = Fk);
            for (const Ik of this._registeredManagers) {
              const Xk = new Nk(this._deviceInputSystem, kk, Fk);
              Ik._addDevice(Xk)
            }
          },
          Xk = (kk, Fk) => {
            this._devices[kk]?.[Fk] && delete this._devices[kk][Fk];
            for (const Ik of this._registeredManagers) Ik._removeDevice(kk, Fk)
          },
          Tk = (kk, Fk, Ik) => {
            if (Ik)
              for (const Xk of this._registeredManagers) Xk._onInputChanged(kk, Fk, Ik)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new Rk(Ik, Xk, Tk) : this._deviceInputSystem = new Ck(kk, Ik, Xk, Tk)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class Wk {
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
        const Fk = Object.keys(zk).length / 2;
        this._devices = new Array(Fk), this._firstDevice = new Array(Fk), this._engine = kk, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new ck(kk)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new yk.e((kk => {
          for (const Fk of this._devices)
            if (Fk)
              for (const Ik of Fk) Ik && this.onDeviceConnectedObservable.notifyObserver(kk, Ik)
        })), this.onDeviceDisconnectedObservable = new yk.e, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = kk.hG.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.hG.remove(this._onDisposeObserver)
      }
      _addDevice(kk) {
        this._devices[kk.deviceType] || (this._devices[kk.deviceType] = []), this._devices[kk.deviceType][kk.deviceSlot] || (this._devices[kk.deviceType][kk.deviceSlot] = kk, this._updateFirstDevices(kk.deviceType)), this.onDeviceConnectedObservable.notifyObservers(kk)
      }
      _removeDevice(kk, Fk) {
        const Ik = this._devices[kk]?.[Fk];
        this.onDeviceDisconnectedObservable.notifyObservers(Ik), this._devices[kk]?.[Fk] && delete this._devices[kk][Fk], this._updateFirstDevices(kk)
      }
      _onInputChanged(kk, Fk, Ik) {
        this._devices[kk]?.[Fk]?.onInputChangedObservable.notifyObservers(Ik)
      }
      _updateFirstDevices(kk) {
        switch (kk) {
          case zk.Keyboard:
          case zk.Mouse:
            this._firstDevice[kk] = 0;
            break;
          case zk.Touch:
          case zk.DualSense:
          case zk.DualShock:
          case zk.Xbox:
          case zk.Switch:
          case zk.Generic: {
            delete this._firstDevice[kk];
            const Fk = this._devices[kk];
            if (Fk)
              for (let Ik = 0; Ik < Fk.length; Ik++)
                if (Fk[Ik]) {
                  this._firstDevice[kk] = Ik;
                  break
                } break
          }
        }
      }
    }
    var fk = Ik(40189);
    class Bk {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get lL() {
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
      set lL(kk) {
        this._doubleClick = kk
      }
      set hasSwiped(kk) {
        this._hasSwiped = kk
      }
      set ignore(kk) {
        this._ignore = kk
      }
    }
    class dk {
      constructor(kk) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new Lk.p(0, 0), this._previousStartingPointerPosition = new Lk.p(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = kk || Kk.e.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(kk) {
        return this._meshUnderPointerId[kk] || null
      }
      get unTranslatedPointer() {
        return new Lk.p(this._unTranslatedPointerX, this._unTranslatedPointerY)
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
        const Fk = this._scene.Oe().getInputElementClientRect();
        Fk && (this._pointerX = kk.clientX - Fk.left, this._pointerY = kk.clientY - Fk.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(kk, Fk) {
        const Ik = this._scene,
          Xk = Ik.Oe(),
          Tk = Xk.getInputElement();
        Tk && (Tk.tabIndex = Xk.canvasTabIndex, Ik.doNotHandleCursors || (Tk.style.cursor = Ik.defaultCursor)), this._setCursorAndPointerOverMesh(kk, Fk, Ik);
        for (const lk of Ik._pointerMoveStage) {
          kk = kk || this._pickMove(Fk);
          const Ik = !!kk?.pickedMesh;
          kk = lk.action(this._unTranslatedPointerX, this._unTranslatedPointerY, kk, Ik, Tk)
        }
        const ik = Fk.inputIndex >= Sk.MouseWheelX && Fk.inputIndex <= Sk.MouseWheelZ ? sk.d.POINTERWHEEL : sk.d.POINTERMOVE;
        let yk;
        Ik.onPointerMove && (kk = kk || this._pickMove(Fk), Ik.onPointerMove(Fk, kk, ik)), kk ? (yk = new sk.j(ik, Fk, kk), this._setRayOnPointerInfo(kk, Fk)) : (yk = new sk.j(ik, Fk, null, this), this._movePointerInfo = yk), Ik.onPointerObservable.hasObservers() && Ik.onPointerObservable.notifyObservers(yk, ik)
      }
      _setRayOnPointerInfo(kk, Fk) {
        const Ik = this._scene;
        kk && fk.e._IsPickingAvailable && (kk.ray || (kk.ray = Ik.createPickingRay(Fk.offsetX, Fk.offsetY, Lk.c.Identity(), Ik.activeCamera)))
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
      _checkPrePointerObservable(kk, Fk, Ik) {
        const Xk = this._scene,
          Tk = new sk.h(Ik, Fk, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return kk && (Tk.originalPickingInfo = kk, Tk.ray = kk.ray, "xr-near" === Fk.pointerType && kk.originMesh && (Tk.nearInteractionPickingInfo = kk)), Xk.onPrePointerObservable.notifyObservers(Tk, Ik), !!Tk.skipOnPointerObservable
      }
      _pickMove(kk) {
        const Fk = this._scene,
          Ik = Fk.rZ(this._unTranslatedPointerX, this._unTranslatedPointerY, Fk.pointerMovePredicate, Fk.pointerMoveFastCheck, Fk.cameraToUseForPointers, Fk.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(Ik, kk, Fk), Ik
      }
      _updateMeshUnderPointer() {
        const kk = this._scene;
        if (!kk.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || kk.skipPointerMovePicking || !kk.cameraToUseForPointers && !kk.activeCamera) return;
        this._ensurePointerMovePredicate();
        const Fk = this._pointerX,
          Ik = this._pointerY,
          Xk = this._unTranslatedPointerX,
          Tk = this._unTranslatedPointerY;
        for (const ik of this._latestPointerMoveEvents.values()) this._pointerX = ik.pointerX, this._pointerY = ik.pointerY, this._unTranslatedPointerX = ik.unTranslatedPointerX, this._unTranslatedPointerY = ik.unTranslatedPointerY, this._pickMove(ik.event);
        this._pointerX = Fk, this._pointerY = Ik, this._unTranslatedPointerX = Xk, this._unTranslatedPointerY = Tk
      }
      _ensurePointerMovePredicate() {
        const kk = this._scene;
        kk.pointerMovePredicate || (kk.pointerMovePredicate = Fk => (Fk._isPointerMovePickable ?? Fk.gw) && Fk.isVisible && Fk.isReady() && Fk.isEnabled() && (Fk.enablePointerMoveEvents || kk.constantlyUpdateMeshUnderPointer || null !== Fk._getActionManagerForTrigger()) && (!kk.cameraToUseForPointers || 0 !== (kk.cameraToUseForPointers.layerMask & Fk.layerMask)))
      }
      _setCursorAndPointerOverMesh(kk, Fk, Ik) {
        const Xk = Ik.Oe().getInputElement();
        if (kk?.pickedMesh) {
          if (this.setPointerOverMesh(kk.pickedMesh, Fk.pointerId, kk, Fk), !Ik.doNotHandleCursors && Xk && this._pointerOverMesh) {
            const kk = this._pointerOverMesh._getActionManagerForTrigger();
            kk && kk.hasPointerTriggers && (Xk.style.cursor = kk.hoverCursor || Ik.hoverCursor)
          }
        } else this.setPointerOverMesh(null, Fk.pointerId, kk, Fk)
      }
      simulatePointerMove(kk, Fk) {
        const Ik = new PointerEvent("pointermove", Fk);
        Ik.inputIndex = Sk.Move, this._checkPrePointerObservable(kk, Ik, sk.d.POINTERMOVE) || this._processPointerMove(kk, Ik)
      }
      simulatePointerDown(kk, Fk) {
        const Ik = new PointerEvent("pointerdown", Fk);
        Ik.inputIndex = Ik.button + 2, this._checkPrePointerObservable(kk, Ik, sk.d.POINTERDOWN) || this._processPointerDown(kk, Ik)
      }
      _processPointerDown(kk, Fk) {
        const Ik = this._scene;
        if (kk?.pickedMesh) {
          this._pickedDownMesh = kk.pickedMesh;
          const Xk = kk.pickedMesh._getActionManagerForTrigger();
          if (Xk) {
            if (Xk.hasPickTriggers) switch (Xk.processTrigger(5, new ek(kk.pickedMesh, Ik.pointerX, Ik.pointerY, kk.pickedMesh, Fk, kk)), Fk.button) {
              case 0:
                Xk.processTrigger(2, new ek(kk.pickedMesh, Ik.pointerX, Ik.pointerY, kk.pickedMesh, Fk, kk));
                break;
              case 1:
                Xk.processTrigger(4, new ek(kk.pickedMesh, Ik.pointerX, Ik.pointerY, kk.pickedMesh, Fk, kk));
                break;
              case 2:
                Xk.processTrigger(3, new ek(kk.pickedMesh, Ik.pointerX, Ik.pointerY, kk.pickedMesh, Fk, kk))
            }
            Xk.hasSpecificTrigger(8) && window.setTimeout((() => {
              const kk = Ik.rZ(this._unTranslatedPointerX, this._unTranslatedPointerY, (kk => kk.gw && kk.isVisible && kk.isReady() && kk.actionManager && kk.actionManager.hasSpecificTrigger(8) && kk === this._pickedDownMesh), !1, Ik.cameraToUseForPointers);
              kk?.pickedMesh && Xk && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > dk.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, Xk.processTrigger(8, ek.CreateNew(kk.pickedMesh, Fk)))
            }), dk.LongPressDelay)
          }
        } else
          for (const ik of Ik._pointerDownStage) kk = ik.action(this._unTranslatedPointerX, this._unTranslatedPointerY, kk, Fk, !1);
        let Xk;
        const Tk = sk.d.POINTERDOWN;
        kk ? (Ik.onPointerDown && Ik.onPointerDown(Fk, kk, Tk), Xk = new sk.j(Tk, Fk, kk), this._setRayOnPointerInfo(kk, Fk)) : Xk = new sk.j(Tk, Fk, null, this), Ik.onPointerObservable.hasObservers() && Ik.onPointerObservable.notifyObservers(Xk, Tk)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(kk, Fk, Ik) {
        const Xk = new PointerEvent("pointerup", Fk);
        Xk.inputIndex = Sk.Move;
        const Tk = new Bk;
        Ik ? Tk.lL = !0 : Tk.singleClick = !0, this._checkPrePointerObservable(kk, Xk, sk.d.POINTERUP) || this._processPointerUp(kk, Xk, Tk)
      }
      _processPointerUp(kk, Fk, Ik) {
        const Xk = this._scene;
        if (kk?.pickedMesh) {
          if (this._pickedUpMesh = kk.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (Xk.onPointerPick && Xk.onPointerPick(Fk, kk), Ik.singleClick && !Ik.ignore && Xk.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const Ik = sk.d.POINTERPICK,
              Tk = new sk.j(Ik, Fk, kk);
            this._setRayOnPointerInfo(kk, Fk), Xk.onPointerObservable.notifyObservers(Tk, Ik)
          }
          const Tk = kk.pickedMesh._getActionManagerForTrigger();
          if (Tk && !Ik.ignore) {
            Tk.processTrigger(7, ek.CreateNew(kk.pickedMesh, Fk, kk)), !Ik.hasSwiped && Ik.singleClick && Tk.processTrigger(1, ek.CreateNew(kk.pickedMesh, Fk, kk));
            const Xk = kk.pickedMesh._getActionManagerForTrigger(6);
            Ik.lL && Xk && Xk.processTrigger(6, ek.CreateNew(kk.pickedMesh, Fk, kk))
          }
        } else if (!Ik.ignore)
          for (const Tk of Xk._pointerUpStage) kk = Tk.action(this._unTranslatedPointerX, this._unTranslatedPointerY, kk, Fk, Ik.lL);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const kk = this._pickedDownMesh._getActionManagerForTrigger(16);
          kk && kk.processTrigger(16, ek.CreateNew(this._pickedDownMesh, Fk))
        }
        if (!Ik.ignore) {
          const Tk = new sk.j(sk.d.POINTERUP, Fk, kk);
          if (this._setRayOnPointerInfo(kk, Fk), Xk.onPointerObservable.notifyObservers(Tk, sk.d.POINTERUP), Xk.onPointerUp && Xk.onPointerUp(Fk, kk, sk.d.POINTERUP), !Ik.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let Tk = 0;
            if (Ik.singleClick ? Tk = sk.d.POINTERTAP : Ik.lL && (Tk = sk.d.POINTERDOUBLETAP), Tk) {
              const Ik = new sk.j(Tk, Fk, kk);
              Xk.onPointerObservable.hasObservers() && Xk.onPointerObservable.hasSpecificMask(Tk) && Xk.onPointerObservable.notifyObservers(Ik, Tk)
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
          Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Tk = this._scene,
          ik = Tk.Oe();
        Xk || (Xk = ik.getInputElement()), this._alreadyAttached && this.detachControl(), Xk && (this._alreadyAttachedTo = Xk), this._deviceSourceManager = new Wk(ik), this._initActionManager = kk => {
          if (!this._meshPickProceed) {
            const Fk = Tk.skipPointerUpPicking || 0 === Tk._registeredActions && !this._checkForPicking() && !Tk.onPointerUp ? null : Tk.rZ(this._unTranslatedPointerX, this._unTranslatedPointerY, Tk.pointerUpPredicate, Tk.pointerUpFastCheck, Tk.cameraToUseForPointers, Tk.pointerUpTrianglePredicate);
            this._currentPickResult = Fk, Fk && (kk = Fk.hit && Fk.pickedMesh ? Fk.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return kk
        }, this._delayedSimpleClick = (kk, Fk, Ik) => {
          if ((Date.now() - this._previousStartingPointerTime > dk.DoubleClickDelay && !this._doubleClickOccured || kk !== this._previousButtonPressed) && (this._doubleClickOccured = !1, Fk.singleClick = !0, Fk.ignore = !1, this._delayedClicks[kk])) {
            const Fk = this._delayedClicks[kk].evt,
              Ik = sk.d.POINTERTAP,
              Xk = new sk.j(Ik, Fk, this._currentPickResult);
            Tk.onPointerObservable.hasObservers() && Tk.onPointerObservable.hasSpecificMask(Ik) && Tk.onPointerObservable.notifyObservers(Xk, Ik), this._delayedClicks[kk] = null
          }
        }, this._initClickEvent = (kk, Fk, Ik, Xk) => {
          const Tk = new Bk;
          this._currentPickResult = null;
          let ik = null,
            yk = kk.hasSpecificMask(sk.d.POINTERPICK) || Fk.hasSpecificMask(sk.d.POINTERPICK) || kk.hasSpecificMask(sk.d.POINTERTAP) || Fk.hasSpecificMask(sk.d.POINTERTAP) || kk.hasSpecificMask(sk.d.POINTERDOUBLETAP) || Fk.hasSpecificMask(sk.d.POINTERDOUBLETAP);
          !yk && Vk && (ik = this._initActionManager(ik, Tk), ik && (yk = ik.hasPickTriggers));
          let lk = !1;
          if (yk = yk && !this._isMultiTouchGesture, yk) {
            const yk = Ik.button;
            if (Tk.hasSwiped = this._isPointerSwiping(), !Tk.hasSwiped) {
              let ak = !dk.ExclusiveDoubleClickMode;
              if (ak || (ak = !kk.hasSpecificMask(sk.d.POINTERDOUBLETAP) && !Fk.hasSpecificMask(sk.d.POINTERDOUBLETAP), ak && !Vk.HasSpecificTrigger(6) && (ik = this._initActionManager(ik, Tk), ik && (ak = !ik.hasSpecificTrigger(6)))), ak)(Date.now() - this._previousStartingPointerTime > dk.DoubleClickDelay || yk !== this._previousButtonPressed) && (Tk.singleClick = !0, Xk(Tk, this._currentPickResult), lk = !0);
              else {
                const kk = {
                  evt: Ik,
                  clickInfo: Tk,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, yk, Tk, Xk), dk.DoubleClickDelay)
                };
                this._delayedClicks[yk] = kk
              }
              let qk = kk.hasSpecificMask(sk.d.POINTERDOUBLETAP) || Fk.hasSpecificMask(sk.d.POINTERDOUBLETAP);
              !qk && Vk.HasSpecificTrigger(6) && (ik = this._initActionManager(ik, Tk), ik && (qk = ik.hasSpecificTrigger(6))), qk && (yk === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < dk.DoubleClickDelay && !this._doubleClickOccured ? (Tk.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = yk, dk.ExclusiveDoubleClickMode ? (this._delayedClicks[yk] && (clearTimeout(this._delayedClicks[yk]?.timeoutId), this._delayedClicks[yk] = null), Xk(Tk, this._previousPickResult)) : Xk(Tk, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, Tk.lL = !0, Tk.ignore = !1, dk.ExclusiveDoubleClickMode && this._delayedClicks[yk] && (clearTimeout(this._delayedClicks[yk]?.timeoutId), this._delayedClicks[yk] = null), Xk(Tk, this._currentPickResult)), lk = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = yk))
            }
          }
          lk || Xk(Tk, this._currentPickResult)
        }, this._onPointerMove = kk => {
          if (this._updatePointerPosition(kk), this._latestPointerMoveEvents.set(kk.pointerId, {
              event: kk,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > dk.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > dk.DragMovementThreshold), ik.isPointerLock && ik._verifyPointerLock(), this._checkPrePointerObservable(null, kk, kk.inputIndex >= Sk.MouseWheelX && kk.inputIndex <= Sk.MouseWheelZ ? sk.d.POINTERWHEEL : sk.d.POINTERMOVE)) return;
          if (!Tk.cameraToUseForPointers && !Tk.activeCamera) return;
          if (Tk.skipPointerMovePicking) return void this._processPointerMove(new jk.b, kk);
          this._ensurePointerMovePredicate();
          const Fk = Tk._registeredActions > 0 || Tk.constantlyUpdateMeshUnderPointer ? this._pickMove(kk) : null;
          this._processPointerMove(Fk, kk)
        }, this._onPointerDown = kk => {
          const Fk = this._activePointerIds.indexOf(-1);
          if (-1 === Fk ? this._activePointerIds.push(kk.pointerId) : this._activePointerIds[Fk] = kk.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, dk.ExclusiveDoubleClickMode)
            for (let Xk = 0; Xk < this._delayedClicks.length; Xk++)
              if (this._delayedClicks[Xk])
                if (kk.button === Xk) clearTimeout(this._delayedClicks[Xk]?.timeoutId);
                else {
                  const kk = this._delayedClicks[Xk].clickInfo;
                  this._doubleClickOccured = !1, kk.singleClick = !0, kk.ignore = !1;
                  const Fk = this._delayedClicks[Xk].evt,
                    Ik = sk.d.POINTERTAP,
                    ik = new sk.j(Ik, Fk, this._currentPickResult);
                  Tk.onPointerObservable.hasObservers() && Tk.onPointerObservable.hasSpecificMask(Ik) && Tk.onPointerObservable.notifyObservers(ik, Ik), this._delayedClicks[Xk] = null
                } if (this._updatePointerPosition(kk), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = kk.button), Tk.preventDefaultOnPointerDown && Xk && (kk.preventDefault(), Xk.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, kk, sk.d.POINTERDOWN)) return;
          if (!Tk.cameraToUseForPointers && !Tk.activeCamera) return;
          let Ik;
          this._pointerCaptures[kk.pointerId] = !0, Tk.pointerDownPredicate || (Tk.pointerDownPredicate = kk => kk.gw && kk.isVisible && kk.isReady() && kk.isEnabled() && (!Tk.cameraToUseForPointers || 0 !== (Tk.cameraToUseForPointers.layerMask & kk.layerMask))), this._pickedDownMesh = null, Ik = Tk.skipPointerDownPicking || 0 === Tk._registeredActions && !this._checkForPicking() && !Tk.onPointerDown ? new jk.b : Tk.rZ(this._unTranslatedPointerX, this._unTranslatedPointerY, Tk.pointerDownPredicate, Tk.pointerDownFastCheck, Tk.cameraToUseForPointers, Tk.pointerDownTrianglePredicate), this._processPointerDown(Ik, kk)
        }, this._onPointerUp = kk => {
          const Fk = this._activePointerIds.indexOf(kk.pointerId); - 1 !== Fk && (this._activePointerIds[Fk] = -1, this._activePointerIdsCount--, "touch" === kk.pointerType && this._latestPointerMoveEvents.delete(kk.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(kk), Tk.preventDefaultOnPointerUp && Xk && (kk.preventDefault(), Xk.focus()), this._initClickEvent(Tk.onPrePointerObservable, Tk.onPointerObservable, kk, ((Fk, Ik) => {
            if (Tk.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !Fk.ignore)) {
              if (this._checkPrePointerObservable(null, kk, sk.d.POINTERUP)) return this._swipeButtonPressed === kk.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === kk.buttons && (this._pointerCaptures[kk.pointerId] = !1));
              Fk.hasSwiped || (Fk.singleClick && Tk.onPrePointerObservable.hasSpecificMask(sk.d.POINTERTAP) && this._checkPrePointerObservable(null, kk, sk.d.POINTERTAP) && (this._skipPointerTap = !0), Fk.lL && Tk.onPrePointerObservable.hasSpecificMask(sk.d.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, kk, sk.d.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[kk.pointerId] ? (0 === kk.buttons && (this._pointerCaptures[kk.pointerId] = !1), (Tk.cameraToUseForPointers || Tk.activeCamera) && (Tk.pointerUpPredicate || (Tk.pointerUpPredicate = kk => kk.gw && kk.isVisible && kk.isReady() && kk.isEnabled() && (!Tk.cameraToUseForPointers || 0 !== (Tk.cameraToUseForPointers.layerMask & kk.layerMask))), !this._meshPickProceed && (Vk && Vk.HasTriggers || this._checkForPicking() || Tk.onPointerUp) && this._initActionManager(null, Fk), Ik || (Ik = this._currentPickResult), this._processPointerUp(Ik, kk, Fk), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === kk.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === kk.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = kk => {
          const Fk = pk.d.KEYDOWN;
          if (Tk.onPreKeyboardObservable.hasObservers()) {
            const Ik = new pk.f(Fk, kk);
            if (Tk.onPreKeyboardObservable.notifyObservers(Ik, Fk), Ik.skipOnKeyboardObservable) return
          }
          if (Tk.onKeyboardObservable.hasObservers()) {
            const Ik = new pk.i(Fk, kk);
            Tk.onKeyboardObservable.notifyObservers(Ik, Fk)
          }
          Tk.actionManager && Tk.actionManager.processTrigger(14, ek.CreateNewFromScene(Tk, kk))
        }, this._onKeyUp = kk => {
          const Fk = pk.d.KEYUP;
          if (Tk.onPreKeyboardObservable.hasObservers()) {
            const Ik = new pk.f(Fk, kk);
            if (Tk.onPreKeyboardObservable.notifyObservers(Ik, Fk), Ik.skipOnKeyboardObservable) return
          }
          if (Tk.onKeyboardObservable.hasObservers()) {
            const Ik = new pk.i(Fk, kk);
            Tk.onKeyboardObservable.notifyObservers(Ik, Fk)
          }
          Tk.actionManager && Tk.actionManager.processTrigger(15, ek.CreateNewFromScene(Tk, kk))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((Xk => {
          Xk.deviceType === zk.Mouse ? Xk.onInputChangedObservable.add((Tk => {
            this._originMouseEvent = Tk, Tk.inputIndex === Sk.LeftClick || Tk.inputIndex === Sk.MiddleClick || Tk.inputIndex === Sk.RightClick || Tk.inputIndex === Sk.BrowserBack || Tk.inputIndex === Sk.BrowserForward ? Fk && 1 === Xk.getInput(Tk.inputIndex) ? this._onPointerDown(Tk) : kk && 0 === Xk.getInput(Tk.inputIndex) && this._onPointerUp(Tk) : Ik && (Tk.inputIndex === Sk.Move ? this._onPointerMove(Tk) : Tk.inputIndex !== Sk.MouseWheelX && Tk.inputIndex !== Sk.MouseWheelY && Tk.inputIndex !== Sk.MouseWheelZ || this._onPointerMove(Tk))
          })) : Xk.deviceType === zk.Touch ? Xk.onInputChangedObservable.add((Tk => {
            Tk.inputIndex === Sk.LeftClick && (Fk && 1 === Xk.getInput(Tk.inputIndex) ? (this._onPointerDown(Tk), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : kk && 0 === Xk.getInput(Tk.inputIndex) && (this._onPointerUp(Tk), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), Ik && Tk.inputIndex === Sk.Move && this._onPointerMove(Tk)
          })) : Xk.deviceType === zk.Keyboard && Xk.onInputChangedObservable.add((kk => {
            "keydown" === kk.type ? this._onKeyDown(kk) : "keyup" === kk.type && this._onKeyUp(kk)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0,
          Xk = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[Fk] === kk && (!kk || !kk._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const Tk = this._meshUnderPointerId[Fk];
        let ik;
        Tk && (ik = Tk._getActionManagerForTrigger(10), ik && ik.processTrigger(10, new ek(Tk, this._pointerX, this._pointerY, kk, Xk, {
          pointerId: Fk
        }))), kk ? (this._meshUnderPointerId[Fk] = kk, this._pointerOverMesh = kk, ik = kk._getActionManagerForTrigger(9), ik && ik.processTrigger(9, new ek(kk, this._pointerX, this._pointerY, kk, Xk, {
          pointerId: Fk,
          pickResult: Ik
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
    dk.DragMovementThreshold = 10, dk.LongPressDelay = 500, dk.DoubleClickDelay = 300, dk.ExclusiveDoubleClickMode = !1;
    var Yk = Ik(39947),
      Ak = Ik(37331),
      gk = Ik(37780);
    class mk {
      static get UniqueId() {
        const kk = this._UniqueIdCounter;
        return this._UniqueIdCounter++, kk
      }
    }
    mk._UniqueIdCounter = 1;
    var hk = Ik(40038),
      rk = Ik(40195),
      Dk = Ik(37166);
    class Mk {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var kF, FF, IF, XF, TF, iF, yF, lF, aF, qF, LF, tF, ZF, jF, eF, wF, HF, JF, xF, PF, KF, QF, sF, VF, zF, SF, oF, vF, EF, OF, nF, GF, pF, uF, bF, RF, UF, CF, NF, cF, WF, fF, BF, dF, YF, AF, gF, mF, hF, rF, DF, MF, kI, FI = Ik(38674),
      II = Ik(37201);
    const XI = new Lk.u,
      TI = new Lk.u;
    var iI;
    ! function(kk) {
      kk[kk.BackwardCompatible = 0] = "BackwardCompatible", kk[kk.Intermediate = 1] = "Intermediate", kk[kk.Aggressive = 2] = "Aggressive"
    }(iI || (iI = {}));
    class yI {
      static DefaultMaterialFactory(kk) {
        throw (0, Qk.j)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, Qk.j)("DefaultCollisionCoordinator")
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
        this._onDisposeObserver && this.hG.remove(this._onDisposeObserver), this._onDisposeObserver = this.hG.add(kk)
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
        return dk.DragMovementThreshold
      }
      static set DragMovementThreshold(kk) {
        dk.DragMovementThreshold = kk
      }
      static get LongPressDelay() {
        return dk.LongPressDelay
      }
      static set LongPressDelay(kk) {
        dk.LongPressDelay = kk
      }
      static get DoubleClickDelay() {
        return dk.DoubleClickDelay
      }
      static set DoubleClickDelay(kk) {
        dk.DoubleClickDelay = kk
      }
      static get ExclusiveDoubleClickMode() {
        return dk.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(kk) {
        dk.ExclusiveDoubleClickMode = kk
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? Lk.t.ZeroReadOnly
      }
      bindEyePosition(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Xk = this._eyePosition,
          Tk = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          ik = this.floatingOriginOffset,
          yk = XI.set(Xk.x, Xk.y, Xk.z, Tk ? -1 : 1),
          lk = yk.subtractFromFloatsToRef(ik.x, ik.y, ik.z, 0, TI);
        return kk && (Ik ? kk.setFloat3(Fk, lk.x, lk.y, lk.z) : kk.setVector4(Fk, lk)), yk
      }
      finalizeSceneUbo() {
        const kk = this.getSceneUniformBuffer(),
          Fk = this.bindEyePosition(null),
          Ik = this.floatingOriginOffset;
        return kk.updateFloat4("vEyePosition", Fk.x - Ik.x, Fk.y - Ik.y, Fk.z - Ik.z, Fk.w), kk.update(), kk
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
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), kk && (this._unObserveActiveCameras = (0, Dk.f)(kk, (() => {
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
        return yI.DefaultMaterialFactory !== yI._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = yI.DefaultMaterialFactory(this)), this._defaultMaterial
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
        return this._collisionCoordinator || (this._collisionCoordinator = yI.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
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
      AIk(kk) {
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
        this._inputManager = new dk(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new Ak.h(.2, .2, .3, 1), this.onClearColorChangedObservable = new yk.e, this.ambientColor = new Ak.e(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new yk.e, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.jK = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.hG = new yk.e, this._onDisposeObserver = null, this.onBeforeRenderObservable = new yk.e, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new yk.e, this.onAfterRenderCameraObservable = new yk.e, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new yk.e, this.onAfterAnimationsObservable = new yk.e, this.onBeforeDrawPhaseObservable = new yk.e, this.onAfterDrawPhaseObservable = new yk.e, this.onReadyObservable = new yk.e, this.onBeforeCameraRenderObservable = new yk.e, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new yk.e, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new yk.e, this.onAfterActiveMeshesEvaluationObservable = new yk.e, this.onBeforeParticlesRenderingObservable = new yk.e, this.onAfterParticlesRenderingObservable = new yk.e, this.onDataLoadedObservable = new yk.e, this.onNewCameraAddedObservable = new yk.e, this.onCameraRemovedObservable = new yk.e, this.onNewLightAddedObservable = new yk.e, this.onLightRemovedObservable = new yk.e, this.onNewGeometryAddedObservable = new yk.e, this.onGeometryRemovedObservable = new yk.e, this.onNewTransformNodeAddedObservable = new yk.e, this.onTransformNodeRemovedObservable = new yk.e, this.onNewMeshAddedObservable = new yk.e, this.onMeshRemovedObservable = new yk.e, this.onNewSkeletonAddedObservable = new yk.e, this.onSkeletonRemovedObservable = new yk.e, this.onNewParticleSystemAddedObservable = new yk.e, this.onParticleSystemRemovedObservable = new yk.e, this.onNewAnimationGroupAddedObservable = new yk.e, this.onAnimationGroupRemovedObservable = new yk.e, this.onNewMaterialAddedObservable = new yk.e, this.onNewMultiMaterialAddedObservable = new yk.e, this.onMaterialRemovedObservable = new yk.e, this.onMultiMaterialRemovedObservable = new yk.e, this.onNewTextureAddedObservable = new yk.e, this.onTextureRemovedObservable = new yk.e, this.onNewFrameGraphAddedObservable = new yk.e, this.onFrameGraphRemovedObservable = new yk.e, this.onNewObjectRendererAddedObservable = new yk.e, this.onObjectRendererRemovedObservable = new yk.e, this.onNewPostProcessAddedObservable = new yk.e, this.onPostProcessRemovedObservable = new yk.e, this.onNewEffectLayerAddedObservable = new yk.e, this.onEffectLayerRemovedObservable = new yk.e, this.onBeforeRenderTargetsRenderObservable = new yk.e, this.onAfterRenderTargetsRenderObservable = new yk.e, this.onBeforeStepObservable = new yk.e, this.onAfterStepObservable = new yk.e, this.onActiveCameraChanged = new yk.e, this.onActiveCamerasChanged = new yk.e, this.onBeforeRenderingGroupObservable = new yk.e, this.onAfterRenderingGroupObservable = new yk.e, this.onMeshImportedObservable = new yk.e, this.onAnimationFileImportedObservable = new yk.e, this.onEnvironmentTextureChangedObservable = new yk.e, this.onMeshUnderPointerUpdatedObservable = new yk.e, this._registeredForLateAnimationBindings = new lk.d(256), this._pointerPickingConfiguration = new Mk, this.onPrePointerObservable = new yk.e, this.onPointerObservable = new yk.e, this.onPreKeyboardObservable = new yk.e, this.onKeyboardObservable = new yk.e, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = yI.FOGMODE_NONE, this.fogColor = new Ak.e(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.bC = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new Lk.t(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new lk.d(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new Yk.e, this._activeIndices = new Yk.e, this._activeParticles = new Yk.e, this._activeBones = new Yk.e, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new lk.f(256), this._processedMaterials = new lk.f(256), this._renderTargets = new lk.d(256), this._materialsRenderTargets = new lk.d(256), this._activeParticleSystems = new lk.f(256), this._activeSkeletons = new lk.d(32), this._softwareSkinnedMeshes = new lk.d(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = Lk.c.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = xk.c.Create(), this._beforeClearStage = xk.c.Create(), this._beforeRenderTargetClearStage = xk.c.Create(), this._gatherRenderTargetsStage = xk.c.Create(), this._gatherActiveCameraRenderTargetsStage = xk.c.Create(), this._isReadyForMeshStage = xk.c.Create(), this._beforeEvaluateActiveMeshStage = xk.c.Create(), this._evaluateSubMeshStage = xk.c.Create(), this._preActiveMeshStage = xk.c.Create(), this._cameraDrawRenderTargetStage = xk.c.Create(), this._beforeCameraDrawStage = xk.c.Create(), this._beforeRenderTargetDrawStage = xk.c.Create(), this._beforeRenderingGroupDrawStage = xk.c.Create(), this._beforeRenderingMeshStage = xk.c.Create(), this._afterRenderingMeshStage = xk.c.Create(), this._afterRenderingGroupDrawStage = xk.c.Create(), this._afterCameraDrawStage = xk.c.Create(), this._afterCameraPostProcessStage = xk.c.Create(), this._afterRenderTargetDrawStage = xk.c.Create(), this._afterRenderTargetPostProcessStage = xk.c.Create(), this._afterRenderStage = xk.c.Create(), this._pointerMoveStage = xk.c.Create(), this._pointerDownStage = xk.c.Create(), this._pointerUpStage = xk.c.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new yk.e, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const Ik = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...Fk
        };
        this.defaultCameraLayerMask = Ik.defaultCameraLayerMask, this.defaultRenderableLayerMask = Ik.defaultRenderableLayerMask, kk = this._engine = kk || Kk.e.LastCreatedEngine, Ik.virtual ? kk._virtualScenes.push(this) : (Kk.e._LastCreatedScene = this, kk.scenes.push(this)), (kk.getCreationOptions().useLargeWorldRendering || Fk?.useFloatingOrigin) && ((0, Hk.f)(), this._floatingOriginScene = this, Hk.d.mG = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new Jk.e(this), wk.e && (this.postProcessManager = new wk.e(this)), (0, Pk.j)() && this.attachControl(), this._createUbo(), tk.d && (this._imageProcessingConfiguration = new tk.d), this.setDefaultCandidateProviders(), Ik.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = Ik.useMaterialMeshMap, this.useClonedMeshMap = Ik.useClonedMeshMap, Fk && Fk.virtual || kk.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(kk) {
        return this._defaultSubMeshCandidates.data = kk.lK, this._defaultSubMeshCandidates.length = kk.lK.length, this._defaultSubMeshCandidates
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
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== Fk || this._cachedMaterial !== kk || this._cachedVisibility !== Ik
      }
      Oe() {
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
      simulatePointerUp(kk, Fk, Ik) {
        return this._inputManager.simulatePointerUp(kk, Fk, Ik), this
      }
      isPointerCaptured() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(kk)
      }
      attachControl() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(kk, Fk, Ik)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let kk, Fk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const Ik = this.Oe(),
          Xk = Ik.currentRenderPassId;
        Ik.currentRenderPassId = this.activeCamera?.renderPassId ?? Xk;
        let Tk = !0;
        for (this._pendingData.length > 0 && (Tk = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && Tk && (Tk = this.depthPeelingRenderer.isReady()), Fk && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), kk = 0; kk < this.meshes.length; kk++) {
          const Xk = this.meshes[kk];
          if (!Xk.lK || 0 === Xk.lK.length) continue;
          if (!Xk.isReady(!0)) {
            Tk = !1;
            continue
          }
          const ik = Xk.hasThinInstances || "InstancedMesh" === Xk.getClassName() || "InstancedLinesMesh" === Xk.getClassName() || Ik.getCaps().instancedArrays && Xk.instances.length > 0;
          for (let kk = 0, Fk = this._isReadyForMeshStage; kk < Fk.length; kk++) {
            Fk[kk].action(Xk, ik) || (Tk = !1)
          }
          if (!Fk) continue;
          const yk = Xk.material || this.defaultMaterial;
          if (yk)
            if (yk._storeEffectOnSubMeshes)
              for (const kk of Xk.lK) {
                const Fk = kk.Ue();
                Fk && Fk.hasRenderTargetTextures && null != Fk.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Fk) && (this._processedMaterials.push(Fk), this._materialsRenderTargets.concatWithNoDuplicate(Fk.getRenderTargetTextures()))
              } else yk.hasRenderTargetTextures && null != yk.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(yk) && (this._processedMaterials.push(yk), this._materialsRenderTargets.concatWithNoDuplicate(yk.getRenderTargetTextures()))
        }
        if (Fk) {
          for (kk = 0; kk < this._materialsRenderTargets.length; ++kk) {
            this._materialsRenderTargets.data[kk].isReadyForRendering() || (Tk = !1)
          }
          for (kk = 0; kk < this.customRenderTargets.length; ++kk) {
            this.customRenderTargets[kk].isReadyForRendering() || (Tk = !1)
          }
        }
        for (kk = 0; kk < this.geometries.length; kk++) {
          2 === this.geometries[kk].delayLoadState && (Tk = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const ik of this.activeCameras) ik.isReady(!0) || (Tk = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (Tk = !1));
        for (const ik of this.jK) ik.isReady() || (Tk = !1);
        if (this.proceduralTexturesEnabled)
          for (const ik of this.proceduralTextures) ik.isReady() || (Tk = !1);
        if (this.layers)
          for (const ik of this.layers) ik.isReady() || (Tk = !1);
        if (this.effectLayers)
          for (const ik of this.effectLayers) ik.isLayerReady() || (Tk = !1);
        for (const ik of this._isReadyChecks) ik.isReady() || (Tk = !1);
        return Ik.areAllEffectsReady() || (Tk = !1), Ik.currentRenderPassId = Xk, Tk
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
          Ik = this._pendingData.indexOf(kk); - 1 !== Ik && this._pendingData.splice(Ik, 1), Fk && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
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
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = ik.d.Now;
        else if (this.onReadyTimeoutDuration > 0 && ik.d.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(kk)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(kk)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = ik.d.Now
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
      setTransformMatrix(kk, Fk, Ik, Xk) {
        this._multiviewSceneUboIsActive = !!(Ik && Xk && this._multiviewSceneUbo), this._viewUpdateFlag === kk.updateFlag && this._projectionUpdateFlag === Fk.updateFlag || (this._viewUpdateFlag = kk.updateFlag, this._projectionUpdateFlag = Fk.updateFlag, this._viewMatrix = kk, this._projectionMatrix = Fk, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new Lk.c), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? gk.b.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = gk.b.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(Ik, Xk) : this._sceneUbo.useUbo && (this._sceneUbo.I9("viewProjection", this._transformMatrix), this._sceneUbo.I9("view", this._viewMatrix), this._sceneUbo.I9("projection", this._projectionMatrix), this._sceneUbo.I9("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(kk, Fk) {
        const Ik = "boolean" === typeof Fk ? Fk : Fk?.trackUBOsInFrame,
          Xk = new Zk.c(this._engine, void 0, !1, kk ?? "Yw", void 0, Ik);
        return Xk.addUniform("viewProjection", 16), Xk.addUniform("view", 16), Xk.addUniform("projection", 16), Xk.addUniform("vEyePosition", 4), Xk.addUniform("inverseProjection", 16), Xk
      }
      setSceneUniformBuffer(kk) {
        this._sceneUbo = kk, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : Lk.t.ZeroReadOnly
      }
      getUniqueId() {
        return mk.UniqueId
      }
      lXk(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(kk), kk._resyncLightSources(), kk.parent || kk._addToSceneRootNodes(), Tk.d.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(kk)
          })), Fk)) {
          const Fk = kk.getChildMeshes();
          for (const kk of Fk) this.lXk(kk)
        }
      }
      zp(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ik = this.meshes.indexOf(kk);
        if (-1 !== Ik && (this.meshes.splice(Ik, 1), kk.parent || kk._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(kk), this.onMeshRemovedObservable.notifyObservers(kk), Fk) {
          const Fk = kk.getChildMeshes();
          for (const kk of Fk) this.zp(kk)
        }
        return Ik
      }
      addTransformNode(kk) {
        this._blockEntityCollection || kk.mG() === this && -1 !== kk._indexInSceneTransformNodesArray || (kk._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(kk), kk.parent || kk._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(kk))
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
        const Fk = this.jK.indexOf(kk);
        return -1 !== Fk && (this.jK.splice(Fk, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(kk), Fk
      }
      removeAnimation(kk) {
        const Fk = this.animations.indexOf(kk);
        return -1 !== Fk && this.animations.splice(Fk, 1), Fk
      }
      stopAnimation(kk, Fk, Ik) {}
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
          Tk.d.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(kk)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(rk.b.CompareLightsPriority)
      }
      addCamera(kk) {
        this._blockEntityCollection || (this.cameras.push(kk), Tk.d.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(kk)
        })), kk.parent || kk._addToSceneRootNodes())
      }
      addSkeleton(kk) {
        this._blockEntityCollection || (this.skeletons.push(kk), Tk.d.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(kk)
        })))
      }
      addParticleSystem(kk) {
        this._blockEntityCollection || (this.jK.push(kk), Tk.d.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(kk)
        })))
      }
      addAnimation(kk) {
        this._blockEntityCollection || this.animations.push(kk)
      }
      addAnimationGroup(kk) {
        this._blockEntityCollection || (this.animationGroups.push(kk), Tk.d.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(kk)
        })))
      }
      addMultiMaterial(kk) {
        this._blockEntityCollection || (this.multiMaterials.push(kk), Tk.d.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(kk)
        })))
      }
      addMaterial(kk) {
        this._blockEntityCollection || kk.mG() === this && -1 !== kk._indexInSceneMaterialArray || (kk._indexInSceneMaterialArray = this.materials.length, this.materials.push(kk), Tk.d.SetImmediate((() => {
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
        this.frameGraphs.push(kk), Tk.d.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(kk)
        }))
      }
      addObjectRenderer(kk) {
        this.objectRenderers.push(kk), Tk.d.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(kk)
        }))
      }
      addPostProcess(kk) {
        this._blockEntityCollection || (this.postProcesses.push(kk), Tk.d.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(kk)
        })))
      }
      addEffectLayer(kk) {
        this._blockEntityCollection || (this.effectLayers.push(kk), Tk.d.SetImmediate((() => {
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
        for (let Ik = 0; Ik < this.materials.length; Ik++) {
          const kk = this.materials[Ik];
          if (Fk(kk)) return kk
        }
        if (kk)
          for (let Ik = 0; Ik < this.multiMaterials.length; Ik++) {
            const kk = this.multiMaterials[Ik];
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
        for (let Ik = this.materials.length - 1; Ik >= 0; Ik--)
          if (this.materials[Ik].id === kk) return this.materials[Ik];
        if (Fk)
          for (let Ik = this.multiMaterials.length - 1; Ik >= 0; Ik--)
            if (this.multiMaterials[Ik].id === kk) return this.multiMaterials[Ik];
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
          const Ik = this.skeletons[Fk];
          for (let Fk = 0; Fk < Ik.bones.length; Fk++)
            if (Ik.bones[Fk].id === kk) return Ik.bones[Fk]
        }
        return null
      }
      getBoneByName(kk) {
        for (let Fk = 0; Fk < this.skeletons.length; Fk++) {
          const Ik = this.skeletons[Fk];
          for (let Fk = 0; Fk < Ik.bones.length; Fk++)
            if (Ik.bones[Fk].name === kk) return Ik.bones[Fk]
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
        for (let Fk = 0; Fk < this.jK.length; Fk++)
          if (this.jK[Fk].id === kk) return this.jK[Fk];
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
        return !(!Fk && this._getGeometryByUniqueId(kk.uniqueId)) && (this.addGeometry(kk), Tk.d.SetImmediate((() => {
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
          const Ik = this.skeletons[Fk];
          for (let Fk = Ik.bones.length - 1; Fk >= 0; Fk--)
            if (Ik.bones[Fk].id === kk) return Ik.bones[Fk]
        }
        return null
      }
      getNodeById(kk) {
        const Fk = this.getMeshById(kk);
        if (Fk) return Fk;
        const Ik = this.getTransformNodeById(kk);
        if (Ik) return Ik;
        const Xk = this.getLightById(kk);
        if (Xk) return Xk;
        const Tk = this.getCameraById(kk);
        if (Tk) return Tk;
        const ik = this.getBoneById(kk);
        return ik || null
      }
      getNodeByName(kk) {
        const Fk = this.getMeshByName(kk);
        if (Fk) return Fk;
        const Ik = this.getTransformNodeByName(kk);
        if (Ik) return Ik;
        const Xk = this.getLightByName(kk);
        if (Xk) return Xk;
        const Tk = this.getCameraByName(kk);
        if (Tk) return Tk;
        const ik = this.getBoneByName(kk);
        return ik || null
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
          const Ik = this.morphTargetManagers[Fk];
          for (let Fk = 0; Fk < Ik.numTargets; ++Fk) {
            const Xk = Ik.getTarget(Fk);
            if (Xk.id === kk) return Xk
          }
        }
        return null
      }
      getMorphTargetByName(kk) {
        for (let Fk = 0; Fk < this.morphTargetManagers.length; ++Fk) {
          const Ik = this.morphTargetManagers[Fk];
          for (let Fk = 0; Fk < Ik.numTargets; ++Fk) {
            const Xk = Ik.getTarget(Fk);
            if (Xk.name === kk) return Xk
          }
        }
        return null
      }
      getPostProcessByName(kk) {
        for (let Fk = 0; Fk < this.postProcesses.length; ++Fk) {
          const Ik = this.postProcesses[Fk];
          if (Ik.name === kk) return Ik
        }
        return null
      }
      isActiveMesh(kk) {
        return -1 !== this._activeMeshes.indexOf(kk)
      }
      get uid() {
        return this._uid || (this._uid = Xk.h.RandomId()), this._uid
      }
      addExternalData(kk, Fk) {
        return this._externalData || (this._externalData = new ak), this._externalData.add(kk, Fk)
      }
      getExternalData(kk) {
        return this._externalData ? this._externalData.get(kk) : null
      }
      getOrAddExternalDataWithFactory(kk, Fk) {
        return this._externalData || (this._externalData = new ak), this._externalData.getOrAddWithFactory(kk, Fk)
      }
      removeExternalData(kk) {
        return this._externalData.remove(kk)
      }
      _evaluateSubMesh(kk, Fk, Ik, Xk) {
        if (Xk || kk.isInFrustum(this._frustumPlanes)) {
          for (let Xk = 0, Tk = this._evaluateSubMeshStage; Xk < Tk.length; Xk++) {
            Tk[Xk].action(Fk, kk)
          }
          const Ik = kk.Ue();
          null !== Ik && void 0 !== Ik && (Ik.hasRenderTargetTextures && null != Ik.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Ik) && (this._processedMaterials.push(Ik), this._materialsRenderTargets.concatWithNoDuplicate(Ik.getRenderTargetTextures())), this._renderingManager.dispatch(kk, Fk, Ik))
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
          Ik = arguments.length > 2 ? arguments[2] : void 0,
          Xk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          ik = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const yk = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const kk of yk) kk.objectRenderer._freezeActiveMeshes(Xk);
          return this._freezeActiveMeshesCancel = (0, Tk.h)((() => {
            let kk = !0,
              Fk = !0;
            for (const Ik of yk) kk && (kk = Ik.objectRenderer._isFrozen), Fk && (Fk = null !== Ik.objectRenderer._freezeActiveMeshesCancel);
            if (kk) return !0;
            if (!Fk) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = ik, this._skipEvaluateActiveMeshesCompletely = kk, Fk?.()
          }), ((kk, Fk) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), Fk) {
              const Fk = "Scene: Timeout while waiting for meshes to be frozen.";
              Ik ? Ik(Fk) : (FI.e.Error(Fk), kk && FI.e.Error(kk))
            } else {
              const Fk = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              Ik ? Ik(Fk) : (FI.e.Error(Fk), kk && (FI.e.Error(kk), kk.stack && FI.e.Error(kk.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = ik, this._skipEvaluateActiveMeshesCompletely = kk, Xk)
              for (let kk = 0; kk < this._activeMeshes.length; kk++) this._activeMeshes.data[kk]._freeze();
            Fk && Fk()
          } else Ik && Ik("No active camera found")
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
        for (let Tk = 0, ik = this._beforeEvaluateActiveMeshStage; Tk < ik.length; Tk++) {
          ik[Tk].action()
        }
        const kk = this.getActiveMeshCandidates(),
          Fk = kk.length,
          Ik = Yk.e.Enabled,
          Xk = this.customLODSelector;
        for (let Tk = 0; Tk < Fk; Tk++) {
          const Fk = kk.data[Tk],
            ik = !Xk && !Fk.rG && !Fk._internalMeshDataInfo?._LODLevels.length;
          let yk, lk;
          if ((ik || (yk = Fk._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), yk ? yk[1] = -1 : (yk = [Fk, -1], Fk._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, yk))), !Fk.isBlocked) && (Ik && this._totalVertices.addCount(Fk.getTotalVertices(), !1), Fk.isReady() && Fk.isEnabled() && !Fk.ci.hasAZeroComponent)) {
            if (Fk.computeWorldMatrix(), Fk.actionManager && Fk.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(Fk), ik) lk = Fk;
            else if (lk = Xk ? Xk(Fk, this.activeCamera) : Fk.getLOD(this.activeCamera), yk[0] = lk, yk[1] = this._frameId, void 0 === lk || null === lk) continue;
            if (lk !== Fk && 0 !== lk.billboardMode && lk.computeWorldMatrix(), Fk._preActivate(), Fk.isVisible && Fk.visibility > 0 && 0 !== (Fk.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || Fk.ne || Fk.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(Fk), this.activeCamera._activeMeshes.push(Fk), lk !== Fk && lk._activate(this._renderId, !1);
              for (let kk = 0, Ik = this._preActiveMeshStage; kk < Ik.length; kk++) {
                Ik[kk].action(Fk)
              }
              Fk._activate(this._renderId, !1) && (Fk.rG ? Fk._internalAbstractMeshDataInfo._actAsRegularMesh && (lk = Fk) : lk._internalAbstractMeshDataInfo._onlyForInstances = !1, lk._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(Fk, lk)), Fk._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let kk = 0; kk < this.jK.length; kk++) {
            const Fk = this.jK[kk];
            if (!Fk.isStarted() || !Fk.emitter) continue;
            const Ik = Fk.emitter;
            Ik.position && !Ik.isEnabled() || (this._activeParticleSystems.push(Fk), Fk.animate(), this._renderingManager.dispatchParticles(Fk))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(kk) {
        this._skeletonsEnabled && kk.skeleton && (this._activeSkeletons.pushNoDuplicate(kk.skeleton) && (kk.skeleton.prepare(), this._activeBones.addCount(kk.skeleton.bones.length, !1)), kk.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(kk) && this.frameGraph && kk.applySkeleton(kk.skeleton))
      }
      _activeMesh(kk, Fk) {
        this._prepareSkeleton(Fk);
        let Ik = kk.rXk || kk.rG || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || Fk.ne;
        if (Fk && Fk.lK && Fk.lK.length > 0) {
          const Xk = this.getActiveSubMeshCandidates(Fk),
            Tk = Xk.length;
          Ik = Ik || 1 === Tk;
          for (let ik = 0; ik < Tk; ik++) {
            const Tk = Xk.data[ik];
            this._evaluateSubMesh(Tk, Fk, kk, Ik)
          }
        }
      }
      updateTransformMatrix(kk) {
        const Fk = this.activeCamera;
        if (Fk)
          if (Fk._renderingMultiview) {
            const Ik = Fk._rigCameras[0],
              Xk = Fk._rigCameras[1];
            this.setTransformMatrix(Ik.getViewMatrix(), Ik.getProjectionMatrix(kk), Xk.getViewMatrix(), Xk.getProjectionMatrix(kk))
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
        let Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (kk && kk._skipRendering) return;
        const Tk = this._engine;
        if (this._activeCamera = kk, !this.activeCamera) throw new Error("Active camera not set");
        if (Tk.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && Ik) {
          let Fk = !0;
          kk._renderingMultiview && kk.outputRenderTarget && (Fk = kk.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, kk.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), kk._renderingMultiview && kk.outputRenderTarget && (kk.outputRenderTarget.skipInitialClear = Fk)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = kk.outputRenderTarget?.renderPassId ?? kk.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let Xk = 0; Xk < this._softwareSkinnedMeshes.length; Xk++) {
          const kk = this._softwareSkinnedMeshes.data[Xk];
          kk.applySkeleton(kk.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), kk.customRenderTargets && kk.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(kk.customRenderTargets), Fk && Fk.customRenderTargets && Fk.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(Fk.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let Xk = 0, lk = this._gatherActiveCameraRenderTargetsStage; Xk < lk.length; Xk++) {
          lk[Xk].action(this._renderTargets)
        }
        let ik = !1;
        if (this.renderTargetsEnabled) {
          let kk;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            Xk.h.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const Fk = this.getBoundingBoxRenderer?.();
            for (let Ik = 0; Ik < this._renderTargets.length; Ik++) {
              const Xk = this._renderTargets.data[Ik];
              if (Xk._shouldRender()) {
                this._renderId++;
                const Ik = Xk.activeCamera && Xk.activeCamera !== this.activeCamera;
                Fk && !kk && (kk = Fk.renderList.length > 0 ? Fk.renderList.data.slice() : [], kk.length = Fk.renderList.length), Xk.render(Ik, this.dumpNextRenderTargets), ik = !0
              }
            }
            Fk && kk && (Fk.renderList.data = kk, Fk.renderList.length = kk.length), Xk.h.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const Fk = this.getBoundingBoxRenderer?.();
            Fk && !kk && (kk = Fk.renderList.length > 0 ? Fk.renderList.data.slice() : [], kk.length = Fk.renderList.length);
            for (let kk = 0, Ik = this._cameraDrawRenderTargetStage; kk < Ik.length; kk++) {
              ik = Ik[kk].action(this.activeCamera) || ik
            }
            Fk && kk && (Fk.renderList.data = kk, Fk.renderList.length = kk.length)
          }
          this._intermediateRendering = !1
        }
        ik && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || kk._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let Xk = 0, lk = this._beforeCameraDrawStage; Xk < lk.length; Xk++) {
          lk[Xk].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const yk = Tk.snapshotRendering && 1 === Tk.snapshotRenderingMode;
        yk && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !yk), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let Xk = 0, lk = this._afterCameraDrawStage; Xk < lk.length; Xk++) {
          lk[Xk].action(this.activeCamera)
        }
        if (this.postProcessManager && !kk._multiviewTexture) {
          const Fk = kk.outputRenderTarget ? kk.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(kk.isIntermediate, Fk)
        }
        for (let Xk = 0, lk = this._afterCameraPostProcessStage; Xk < lk.length; Xk++) {
          lk[Xk].action(this.activeCamera)
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
              const Ik = Fk.actionManager.actions[kk];
              if (12 === Ik.trigger || 13 === Ik.trigger) {
                const kk = Ik.getTriggerParameter(),
                  Xk = kk.mesh ? kk.mesh : kk,
                  Tk = Xk.dXk(Fk, kk.usePreciseIntersection),
                  ik = Fk._intersectionsInProgress.indexOf(Xk);
                Tk && -1 === ik ? 12 === Ik.trigger ? (Ik._executeCurrent(ek.CreateNew(Fk, void 0, Xk)), Fk._intersectionsInProgress.push(Xk)) : 13 === Ik.trigger && Fk._intersectionsInProgress.push(Xk) : !Tk && ik > -1 && (13 === Ik.trigger && Ik._executeCurrent(ek.CreateNew(Fk, void 0, Xk)), Fk.actionManager.hasSpecificTrigger(13, (kk => {
                  const Fk = kk.mesh ? kk.mesh : kk;
                  return Xk === Fk
                })) && 13 !== Ik.trigger || Fk._intersectionsInProgress.splice(ik, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(kk) {}
      _animate(kk) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let kk = Math.max(yI.MinDeltaTime, Math.min(this._engine.getDeltaTime(), yI.MaxDeltaTime)) + this._timeAccumulator;
          const Fk = this._engine.getTimeStep(),
            Ik = 1e3 / Fk / 1e3;
          let Xk = 0;
          const Tk = this._engine.getLockstepMaxSteps();
          let ik = Math.floor(kk / Fk);
          for (ik = Math.min(ik, Tk); kk > 0 && Xk < ik;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = Fk * Ik, this._animate(Fk), this.onAfterAnimationsObservable.notifyObservers(this), this.bC && this._advancePhysicsEngineStep(Fk), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, Xk++, kk -= Fk;
          this._timeAccumulator = kk < 0 ? 0 : kk
        } else {
          const kk = this.useConstantAnimationDeltaTime ? 16 : Math.max(yI.MinDeltaTime, Math.min(this._engine.getDeltaTime(), yI.MaxDeltaTime));
          this._animationRatio = .06 * kk, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.bC && this._advancePhysicsEngineStep(kk)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(kk) {
        if (kk?.outputRenderTarget && !kk?.isRigCamera && (kk.outputRenderTarget._cleared = !1), kk?.rigCameras?.length)
          for (let Fk = 0; Fk < kk.rigCameras.length; ++Fk) {
            const Ik = kk.rigCameras[Fk].outputRenderTarget;
            Ik && (Ik._cleared = !1)
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
          for (const Ik of this.cameras)
            if (Ik.update(), 0 !== Ik.cameraRigMode)
              for (let kk = 0; kk < Ik._rigCameras.length; kk++) Ik._rigCameras[kk].update();
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
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), Xk.h.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let kk = 0; kk < this._renderTargets.length; kk++) {
            const Ik = this._renderTargets.data[kk],
              Xk = Ik.activeCamera || Fk;
            this._renderRenderTarget(Ik, Xk, !0, this.dumpNextRenderTargets)
          }
          Xk.h.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let Ik = 0, Xk = this._beforeClearStage; Ik < Xk.length; Ik++) {
          Xk[Ik].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const Fk = this.getActiveMeshCandidates(),
            Ik = Fk.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let kk = 0; kk < Ik; kk++) {
                const Ik = Fk.data[kk];
                Ik._internalAbstractMeshDataInfo._wasActiveLastFrame && Ik.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const kk = this._activeParticleSystems.length;
              for (let Fk = 0; Fk < kk; Fk++) this._activeParticleSystems.data[Fk].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let Xk = 0; Xk < Ik; Xk++) {
              const Ik = Fk.data[Xk];
              Ik._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, Ik.isBlocked || (this._totalVertices.addCount(Ik.getTotalVertices(), !1), Ik.isReady() && Ik.isEnabled() && !Ik.ci.hasAZeroComponent && (Ik.computeWorldMatrix(kk), Ik.actionManager && Ik.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(Ik)))
            }
            if (this.particlesEnabled)
              for (let kk = 0; kk < this.jK.length; kk++) {
                const Fk = this.jK[kk];
                if (!Fk.isStarted() || !Fk.emitter) continue;
                const Ik = Fk.emitter;
                Ik.position && !Ik.isEnabled() || (this._activeParticleSystems.push(Fk), Fk.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, kk._shouldRender()) {
          if (this._renderId++, this.activeCamera = Fk, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), kk.render(Ik, Xk)
        }
        this._intermediateRendering = !1
      }
      render() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.Hs) return;
        const Ik = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(kk, Fk)
        } finally {
          this._renderingMeshEvaluationDepth = Ik
        }
      }
      _renderFrame(kk, Fk) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), Hk.d.mG = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const Ik of this.activeCameras) this._checkCameraRenderTarget(Ik);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), Fk || this.animate();
        for (let Ik = 0, Xk = this._beforeCameraUpdateStage; Ik < Xk.length; Ik++) {
          Xk[Ik].action()
        }
        if (kk)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let Ik = 0; Ik < this.activeCameras.length; Ik++) {
              const kk = this.activeCameras[Ik];
              if (kk.update(), 0 !== kk.cameraRigMode)
                for (let Fk = 0; Fk < kk._rigCameras.length; Fk++) kk._rigCameras[Fk].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let Ik = 0; Ik < this.activeCamera._rigCameras.length; Ik++) this.activeCamera._rigCameras[Ik].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(kk, Fk);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const kk = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            Xk.h.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let Fk = 0; Fk < this.customRenderTargets.length; Fk++) {
              const Ik = this.customRenderTargets[Fk],
                Xk = Ik.activeCamera || this.activeCamera;
              this._renderRenderTarget(Ik, Xk, kk !== Xk, this.dumpNextRenderTargets)
            }
            Xk.h.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = kk?.renderPassId ?? 0, this.activeCamera = kk, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let Fk = 0, Ik = this._beforeClearStage; Fk < Ik.length; Fk++) {
            Ik[Fk].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let Fk = 0, Ik = this._gatherRenderTargetsStage; Fk < Ik.length; Fk++) {
            Ik[Fk].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let Fk = 0; Fk < this.activeCameras.length; Fk++) this._processSubCameras(this.activeCameras[Fk], Fk > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let Ik = 0, Xk = this._afterRenderStage; Ik < Xk.length; Ik++) {
          Xk[Ik].action()
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
        if (this.Hs) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, Qk.e)(this.stopAllAnimations)) {
          for (const kk of this._activeAnimatables) kk.onAnimationEndObservable.clear(), kk.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const kk = this._activeRequests.slice();
        for (const ik of kk) ik.abort();
        this._activeRequests.length = 0;
        try {
          this.hG.notifyObservers(this)
        } catch (Tk) {
          FI.e.Error("An error occurred while calling onDisposeObservable!", Tk)
        }
        this.detachControl();
        const Fk = this._engine.getInputElement?.();
        if (Fk)
          for (let ik = 0; ik < this.cameras.length; ik++) this.cameras[ik].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (kk => kk.dispose(!0))), this._disposeList(this.transformNodes, (kk => kk.dispose(!0)));
        const Ik = this.cameras;
        this._disposeList(Ik), this._disposeList(this.jK), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let Xk = this._engine.scenes.indexOf(this);
        if (Xk > -1 && this._engine.scenes.splice(Xk, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, Hk.h)(), Kk.e._LastCreatedScene === this) {
          Kk.e._LastCreatedScene = null;
          let kk = Kk.e.Instances.length - 1;
          for (; kk >= 0;) {
            const Fk = Kk.e.Instances[kk];
            if (Fk.scenes.length > 0) {
              Kk.e._LastCreatedScene = Fk.scenes[this._engine.scenes.length - 1];
              break
            }
            kk--
          }
        }
        Xk = this._engine._virtualScenes.indexOf(this), Xk > -1 && this._engine._virtualScenes.splice(Xk, 1), this._engine.wipeCaches(!0), this.hG.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(kk, Fk) {
        const Ik = kk.slice(0);
        Fk = Fk ?? (kk => kk.dispose());
        for (const Xk of Ik) Fk(Xk);
        kk.length = 0
      }
      get Hs() {
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
        const Fk = new Lk.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          Ik = new Lk.t(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        kk = kk || (() => !0);
        const Xk = this.meshes.filter(kk);
        for (const Tk of Xk) {
          if (Tk.computeWorldMatrix(!0), !Tk.lK || 0 === Tk.lK.length || Tk.infiniteDistance) continue;
          const kk = Tk.vR(),
            Xk = kk.boundingBox.minimumWorld,
            ik = kk.boundingBox.maximumWorld;
          Lk.t.CheckExtends(Xk, Fk, Ik), Lk.t.CheckExtends(ik, Fk, Ik)
        }
        return Fk.x === Number.MAX_VALUE ? {
          min: Lk.t.Zero(),
          max: Lk.t.Zero()
        } : {
          min: Fk,
          max: Ik
        }
      }
      createPickingRay(kk, Fk, Ik, Xk) {
        throw (0, Qk.j)("Ray")
      }
      createPickingRayToRef(kk, Fk, Ik, Xk, Tk) {
        throw (0, Qk.j)("Ray")
      }
      createPickingRayInCameraSpace(kk, Fk, Ik) {
        throw (0, Qk.j)("Ray")
      }
      createPickingRayInCameraSpaceToRef(kk, Fk, Ik, Xk) {
        throw (0, Qk.j)("Ray")
      }
      rZ(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = (0, Qk.j)("Ray", !0);
        return yk && FI.e.Warn(yk), new jk.b
      }
      pickWithBoundingInfo(kk, Fk, Ik, Xk, Tk) {
        const ik = (0, Qk.j)("Ray", !0);
        return ik && FI.e.Warn(ik), new jk.b
      }
      pickWithRay(kk, Fk, Ik, Xk) {
        throw (0, Qk.j)("Ray")
      }
      multiPick(kk, Fk, Ik, Xk, Tk) {
        throw (0, Qk.j)("Ray")
      }
      multiPickWithRay(kk, Fk, Ik) {
        throw (0, Qk.j)("Ray")
      }
      setPointerOverMesh(kk, Fk, Ik) {
        this._inputManager.setPointerOverMesh(kk, Fk, Ik)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const kk of this.geometries) kk._rebuild();
        for (const kk of this.meshes) kk._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const kk of this._components) kk.rebuild();
        for (const kk of this.jK) kk.rebuild();
        if (this.spriteManagers)
          for (const kk of this.spriteManagers) kk.rebuild()
      }
      _rebuildTextures() {
        for (const kk of this.textures) kk._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(kk, Fk, Ik) {
        if (void 0 === Fk) return kk;
        const Xk = [];
        for (const Tk in kk) {
          const ik = kk[Tk];
          qk.d && qk.d.MatchesQuery(ik, Fk) && (!Ik || Ik(ik)) && Xk.push(ik)
        }
        return Xk
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
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(kk, Fk, Ik, Xk)
      }
      setRenderingAutoClearDepthStencil(kk, Fk) {
        let Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Xk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(kk, Fk, Ik, Xk)
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
          for (const Ik of this.materials) Fk && !Fk(Ik) || Ik.UFk(kk)
      }
      _loadFile(kk, Fk, Ik, Xk, Tk, ik, yk) {
        const lk = (0, hk.p)(kk, Fk, Ik, Xk ? this.offlineProvider : void 0, Tk, ik, yk);
        return this._activeRequests.push(lk), lk.onCompleteObservable.add((kk => {
          this._activeRequests.splice(this._activeRequests.indexOf(kk), 1)
        })), lk
      }
      async _loadFileAsync(kk, Fk, Ik, Xk, Tk) {
        return await new Promise(((ik, yk) => {
          this._loadFile(kk, (kk => {
            ik(kk)
          }), Fk, Ik, Xk, ((kk, Fk) => {
            yk(Fk)
          }), Tk)
        }))
      }
      async _loadDelayedFileAsync(kk, Fk, Ik) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const Xk = `${kk}|${Fk?"binary":"string"}`;
        let Tk = this._delayedFileRequests.get(Xk);
        if (!Tk) {
          Tk = Fk ? this._loadFileAsync(kk, void 0, Ik, !0) : this._loadFileAsync(kk, void 0, Ik, !1);
          const ik = Tk;
          (async () => {
            try {
              await ik
            } catch {}
            this._delayedFileRequests?.delete(Xk)
          })(), this._delayedFileRequests.set(Xk, Tk)
        }
        return await Tk
      }
      _requestFile(kk, Fk, Ik, Xk, Tk, ik, yk) {
        const lk = (0, hk.z)(kk, Fk, Ik, Xk ? this.offlineProvider : void 0, Tk, ik, yk);
        return this._activeRequests.push(lk), lk.onCompleteObservable.add((kk => {
          this._activeRequests.splice(this._activeRequests.indexOf(kk), 1)
        })), lk
      }
      async _requestFileAsync(kk, Fk, Ik, Xk, Tk) {
        return await new Promise(((ik, yk) => {
          this._requestFile(kk, (kk => {
            ik(kk)
          }), Fk, Ik, Xk, (kk => {
            yk(kk)
          }), Tk)
        }))
      }
      _readFile(kk, Fk, Ik, Xk, Tk) {
        const ik = (0, hk.w)(kk, Fk, Ik, Xk, Tk);
        return this._activeRequests.push(ik), ik.onCompleteObservable.add((kk => {
          this._activeRequests.splice(this._activeRequests.indexOf(kk), 1)
        })), ik
      }
      async _readFileAsync(kk, Fk, Ik) {
        return await new Promise(((Xk, Tk) => {
          this._readFile(kk, (kk => {
            Xk(kk)
          }), Fk, Ik, (kk => {
            Tk(kk)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, Qk.j)("performanceViewerSceneExtension")
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
    yI.FOGMODE_NONE = 0, yI.FOGMODE_EXP = 1, yI.FOGMODE_EXP2 = 2, yI.FOGMODE_LINEAR = 3, yI.MinDeltaTime = 1, yI.MaxDeltaTime = 1e3, yI._OriginalDefaultMaterialFactory = yI.DefaultMaterialFactory;
    let lI = !1;

    function aI() {
      lI || (lI = !0, (0, II.f)("BABYLON.Scene", yI))
    }(kF = yI.prototype).sortActiveAnimatables ?? (kF.sortActiveAnimatables = (0, Qk.h)("Scene", "sortActiveAnimatables")), (FF = yI.prototype).beginWeightedAnimation ?? (FF.beginWeightedAnimation = (0, Qk.h)("Scene", "beginWeightedAnimation")), (IF = yI.prototype).beginAnimation ?? (IF.beginAnimation = (0, Qk.h)("Scene", "beginAnimation")), (XF = yI.prototype).beginHierarchyAnimation ?? (XF.beginHierarchyAnimation = (0, Qk.h)("Scene", "beginHierarchyAnimation")), (TF = yI.prototype).beginDirectAnimation ?? (TF.beginDirectAnimation = (0, Qk.h)("Scene", "beginDirectAnimation")), (iF = yI.prototype).beginDirectHierarchyAnimation ?? (iF.beginDirectHierarchyAnimation = (0, Qk.h)("Scene", "beginDirectHierarchyAnimation")), (yF = yI.prototype).getAnimatableByTarget ?? (yF.getAnimatableByTarget = (0, Qk.h)("Scene", "getAnimatableByTarget")), (lF = yI.prototype).getAllAnimatablesByTarget ?? (lF.getAllAnimatablesByTarget = (0, Qk.h)("Scene", "getAllAnimatablesByTarget")), (aF = yI.prototype).stopAllAnimations ?? (aF.stopAllAnimations = (0, Qk.h)("Scene", "stopAllAnimations")), (qF = yI.prototype).getSoundByName ?? (qF.getSoundByName = (0, Qk.h)("Scene", "getSoundByName")), (LF = yI.prototype).createOrUpdateSelectionOctree ?? (LF.createOrUpdateSelectionOctree = (0, Qk.h)("Scene", "createOrUpdateSelectionOctree")), (tF = yI.prototype).createDefaultLight ?? (tF.createDefaultLight = (0, Qk.h)("Scene", "createDefaultLight")), (ZF = yI.prototype).createDefaultCamera ?? (ZF.createDefaultCamera = (0, Qk.h)("Scene", "createDefaultCamera")), (jF = yI.prototype).createDefaultCameraOrLight ?? (jF.createDefaultCameraOrLight = (0, Qk.h)("Scene", "createDefaultCameraOrLight")), (eF = yI.prototype).createDefaultSkybox ?? (eF.createDefaultSkybox = (0, Qk.h)("Scene", "createDefaultSkybox")), (wF = yI.prototype).createDefaultEnvironment ?? (wF.createDefaultEnvironment = (0, Qk.h)("Scene", "createDefaultEnvironment")), (HF = yI.prototype).createDefaultVRExperience ?? (HF.createDefaultVRExperience = (0, Qk.h)("Scene", "createDefaultVRExperience")), (JF = yI.prototype).createDefaultXRExperienceAsync ?? (JF.createDefaultXRExperienceAsync = (0, Qk.h)("Scene", "createDefaultXRExperienceAsync")), (xF = yI.prototype).getGlowLayerByName ?? (xF.getGlowLayerByName = (0, Qk.h)("Scene", "getGlowLayerByName")), (PF = yI.prototype).getHighlightLayerByName ?? (PF.getHighlightLayerByName = (0, Qk.h)("Scene", "getHighlightLayerByName")), (KF = yI.prototype).getSelectionOutlineLayerByName ?? (KF.getSelectionOutlineLayerByName = (0, Qk.h)("Scene", "getSelectionOutlineLayerByName")), (QF = yI.prototype).removeLensFlareSystem ?? (QF.removeLensFlareSystem = (0, Qk.h)("Scene", "removeLensFlareSystem")), (sF = yI.prototype).addLensFlareSystem ?? (sF.addLensFlareSystem = (0, Qk.h)("Scene", "addLensFlareSystem")), (VF = yI.prototype).getLensFlareSystemByName ?? (VF.getLensFlareSystemByName = (0, Qk.h)("Scene", "getLensFlareSystemByName")), (zF = yI.prototype).getLensFlareSystemByID ?? (zF.getLensFlareSystemByID = (0, Qk.h)("Scene", "getLensFlareSystemByID")), (SF = yI.prototype).getLensFlareSystemById ?? (SF.getLensFlareSystemById = (0, Qk.h)("Scene", "getLensFlareSystemById")), (oF = yI.prototype).getPhysicsEngine ?? (oF.getPhysicsEngine = (0, Qk.h)("Scene", "getPhysicsEngine")), (vF = yI.prototype).enablePhysics ?? (vF.enablePhysics = (0, Qk.h)("Scene", "enablePhysics")), (EF = yI.prototype).disablePhysicsEngine ?? (EF.disablePhysicsEngine = (0, Qk.h)("Scene", "disablePhysicsEngine")), (OF = yI.prototype).isPhysicsEnabled ?? (OF.isPhysicsEnabled = (0, Qk.h)("Scene", "isPhysicsEnabled")), (nF = yI.prototype).deleteCompoundImpostor ?? (nF.deleteCompoundImpostor = (0, Qk.h)("Scene", "deleteCompoundImpostor")), (GF = yI.prototype).removeReflectionProbe ?? (GF.removeReflectionProbe = (0, Qk.h)("Scene", "removeReflectionProbe")), (pF = yI.prototype).addReflectionProbe ?? (pF.addReflectionProbe = (0, Qk.h)("Scene", "addReflectionProbe")), (uF = yI.prototype).getBoundingBoxRenderer ?? (uF.getBoundingBoxRenderer = (0, Qk.h)("Scene", "getBoundingBoxRenderer")), (bF = yI.prototype).enableDepthRenderer ?? (bF.enableDepthRenderer = (0, Qk.h)("Scene", "enableDepthRenderer")), (RF = yI.prototype).disableDepthRenderer ?? (RF.disableDepthRenderer = (0, Qk.h)("Scene", "disableDepthRenderer")), (UF = yI.prototype).enableFluidRenderer ?? (UF.enableFluidRenderer = (0, Qk.h)("Scene", "enableFluidRenderer")), (CF = yI.prototype).disableFluidRenderer ?? (CF.disableFluidRenderer = (0, Qk.h)("Scene", "disableFluidRenderer")), (NF = yI.prototype).enableGeometryBufferRenderer ?? (NF.enableGeometryBufferRenderer = (0, Qk.h)("Scene", "enableGeometryBufferRenderer")), (cF = yI.prototype).disableGeometryBufferRenderer ?? (cF.disableGeometryBufferRenderer = (0, Qk.h)("Scene", "disableGeometryBufferRenderer")), (WF = yI.prototype).enableIblCdfGenerator ?? (WF.enableIblCdfGenerator = (0, Qk.h)("Scene", "enableIblCdfGenerator")), (fF = yI.prototype).disableIblCdfGenerator ?? (fF.disableIblCdfGenerator = (0, Qk.h)("Scene", "disableIblCdfGenerator")), (BF = yI.prototype).getOutlineRenderer ?? (BF.getOutlineRenderer = (0, Qk.h)("Scene", "getOutlineRenderer")), (dF = yI.prototype).enablePrePassRenderer ?? (dF.enablePrePassRenderer = (0, Qk.h)("Scene", "enablePrePassRenderer")), (YF = yI.prototype).disablePrePassRenderer ?? (YF.disablePrePassRenderer = (0, Qk.h)("Scene", "disablePrePassRenderer")), (AF = yI.prototype).enableSubSurfaceForPrePass ?? (AF.enableSubSurfaceForPrePass = (0, Qk.h)("Scene", "enableSubSurfaceForPrePass")), (gF = yI.prototype).disableSubSurfaceForPrePass ?? (gF.disableSubSurfaceForPrePass = (0, Qk.h)("Scene", "disableSubSurfaceForPrePass")), (mF = yI.prototype).pickSprite ?? (mF.pickSprite = (0, Qk.h)("Scene", "pickSprite")), (hF = yI.prototype).pickSpriteWithRay ?? (hF.pickSpriteWithRay = (0, Qk.h)("Scene", "pickSpriteWithRay")), (rF = yI.prototype).multiPickSprite ?? (rF.multiPickSprite = (0, Qk.h)("Scene", "multiPickSprite")), (DF = yI.prototype).multiPickSpriteWithRay ?? (DF.multiPickSpriteWithRay = (0, Qk.h)("Scene", "multiPickSpriteWithRay")), (MF = yI.prototype).setPointerOverSprite ?? (MF.setPointerOverSprite = (0, Qk.h)("Scene", "setPointerOverSprite")), (kI = yI.prototype).getPointerOverSprite ?? (kI.getPointerOverSprite = (0, Qk.h)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(yI.prototype, "mainSoundTrack") || Object.defineProperty(yI.prototype, "mainSoundTrack", (0, Qk.g)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(yI.prototype, "soundTracks") || Object.defineProperty(yI.prototype, "soundTracks", (0, Qk.g)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(yI.prototype, "audioEnabled") || Object.defineProperty(yI.prototype, "audioEnabled", (0, Qk.g)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(yI.prototype, "headphone") || Object.defineProperty(yI.prototype, "headphone", (0, Qk.g)("Scene", "headphone")), Object.getOwnPropertyDescriptor(yI.prototype, "audioListenerPositionProvider") || Object.defineProperty(yI.prototype, "audioListenerPositionProvider", (0, Qk.g)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(yI.prototype, "audioListenerRotationProvider") || Object.defineProperty(yI.prototype, "audioListenerRotationProvider", (0, Qk.g)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(yI.prototype, "audioPositioningRefreshRate") || Object.defineProperty(yI.prototype, "audioPositioningRefreshRate", (0, Qk.g)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(yI.prototype, "selectionOctree") || Object.defineProperty(yI.prototype, "selectionOctree", (0, Qk.g)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(yI.prototype, "debugLayer") || Object.defineProperty(yI.prototype, "debugLayer", (0, Qk.g)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(yI.prototype, "gamepadManager") || Object.defineProperty(yI.prototype, "gamepadManager", (0, Qk.g)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(yI.prototype, "simplificationQueue") || Object.defineProperty(yI.prototype, "simplificationQueue", (0, Qk.g)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(yI.prototype, "onBeforePhysicsObservable") || Object.defineProperty(yI.prototype, "onBeforePhysicsObservable", (0, Qk.g)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(yI.prototype, "onAfterPhysicsObservable") || Object.defineProperty(yI.prototype, "onAfterPhysicsObservable", (0, Qk.g)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(yI.prototype, "reflectionProbes") || Object.defineProperty(yI.prototype, "reflectionProbes", (0, Qk.g)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(yI.prototype, "forceShowBoundingBoxes") || Object.defineProperty(yI.prototype, "forceShowBoundingBoxes", (0, Qk.g)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(yI.prototype, "depthPeelingRenderer") || Object.defineProperty(yI.prototype, "depthPeelingRenderer", (0, Qk.g)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(yI.prototype, "useOrderIndependentTransparency") || Object.defineProperty(yI.prototype, "useOrderIndependentTransparency", (0, Qk.g)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(yI.prototype, "fluidRenderer") || Object.defineProperty(yI.prototype, "fluidRenderer", (0, Qk.g)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(yI.prototype, "geometryBufferRenderer") || Object.defineProperty(yI.prototype, "geometryBufferRenderer", (0, Qk.g)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(yI.prototype, "iblCdfGenerator") || Object.defineProperty(yI.prototype, "iblCdfGenerator", (0, Qk.g)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(yI.prototype, "prePassRenderer") || Object.defineProperty(yI.prototype, "prePassRenderer", (0, Qk.g)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(yI.prototype, "subSurfaceConfiguration") || Object.defineProperty(yI.prototype, "subSurfaceConfiguration", (0, Qk.g)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(yI.prototype, "spriteManagers") || Object.defineProperty(yI.prototype, "spriteManagers", (0, Qk.g)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(yI.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(yI.prototype, "onBeforeSpritesRenderingObservable", (0, Qk.g)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(yI.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(yI.prototype, "onAfterSpritesRenderingObservable", (0, Qk.g)("Scene", "onAfterSpritesRenderingObservable"))
  },
  40166: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk,
      c: () => Tk
    });
    class Xk {}
    Xk.NAME_EFFECTLAYER = "EffectLayer", Xk.NAME_LAYER = "Layer", Xk.NAME_LENSFLARESYSTEM = "LensFlareSystem", Xk.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", Xk.NAME_PARTICLESYSTEM = "ParticleSystem", Xk.NAME_GAMEPAD = "Gamepad", Xk.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", Xk.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", Xk.NAME_PREPASSRENDERER = "PrePassRenderer", Xk.NAME_DEPTHRENDERER = "DepthRenderer", Xk.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", Xk.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", Xk.NAME_SPRITE = "Sprite", Xk.NAME_SUBSURFACE = "SubSurface", Xk.NAME_OUTLINERENDERER = "Outline", Xk.NAME_PROCEDURALTEXTURE = "ProceduralTexture", Xk.NAME_SHADOWGENERATOR = "ShadowGenerator", Xk.NAME_OCTREE = "wXk", Xk.NAME_PHYSICSENGINE = "PhysicsEngine", Xk.NAME_AUDIO = "Audio", Xk.NAME_FLUIDRENDERER = "FluidRenderer", Xk.NAME_IBLCDFGENERATOR = "iblCDFGenerator", Xk.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", Xk.STEP_ISREADYFORMESH_EFFECTLAYER = 0, Xk.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, Xk.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, Xk.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, Xk.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, Xk.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, Xk.STEP_BEFORECAMERADRAW_PREPASS = 0, Xk.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, Xk.STEP_BEFORECAMERADRAW_LAYER = 2, Xk.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, Xk.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, Xk.STEP_BEFORERENDERINGMESH_PREPASS = 0, Xk.STEP_BEFORERENDERINGMESH_OUTLINE = 1, Xk.STEP_AFTERRENDERINGMESH_PREPASS = 0, Xk.STEP_AFTERRENDERINGMESH_OUTLINE = 1, Xk.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, Xk.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, Xk.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, Xk.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, Xk.STEP_BEFORECLEAR_PREPASS = 1, Xk.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, Xk.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, Xk.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, Xk.STEP_AFTERCAMERADRAW_PREPASS = 0, Xk.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, Xk.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, Xk.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, Xk.STEP_AFTERCAMERADRAW_LAYER = 4, Xk.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, Xk.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, Xk.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, Xk.STEP_AFTERRENDER_AUDIO = 0, Xk.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, Xk.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, Xk.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, Xk.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, Xk.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, Xk.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, Xk.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, Xk.STEP_POINTERMOVE_SPRITE = 0, Xk.STEP_POINTERDOWN_SPRITE = 0, Xk.STEP_POINTERUP_SPRITE = 0;
    class Tk extends Array {
      constructor(kk) {
        super(...kk)
      }
      static Create() {
        return Object.create(Tk.prototype)
      }
      registerStep(kk, Fk, Ik) {
        let Xk, Tk = 0;
        for (; Tk < this.length; Tk++) {
          if (Xk = this[Tk].index, kk < Xk) break
        }
        this.splice(Tk, 0, {
          index: kk,
          component: Fk,
          action: Ik.bind(Fk)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  40003: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk,
      f: () => lk,
      j: () => Xk,
      n: () => Tk,
      q: () => ik
    });

    function Xk(kk, Fk, Ik, Xk, Tk, ik) {
      function yk(kk) {
        if (void 0 !== kk && "function" !== typeof kk) throw new TypeError("Function expected");
        return kk
      }
      for (var lk, ak = Xk.kind, qk = "getter" === ak ? "get" : "setter" === ak ? "set" : "value", Lk = !Fk && kk ? Xk.static ? kk : kk.prototype : null, tk = Fk || (Lk ? Object.getOwnPropertyDescriptor(Lk, Xk.name) : {}), Zk = !1, jk = Ik.length - 1; jk >= 0; jk--) {
        var ek = {};
        for (var wk in Xk) ek[wk] = "access" === wk ? {} : Xk[wk];
        for (var wk in Xk.access) ek.access[wk] = Xk.access[wk];
        ek.addInitializer = function(kk) {
          if (Zk) throw new TypeError("Cannot add initializers after decoration has completed");
          ik.push(yk(kk || null))
        };
        var Hk = (0, Ik[jk])("accessor" === ak ? {
          get: tk.get,
          set: tk.set
        } : tk[qk], ek);
        if ("accessor" === ak) {
          if (void 0 === Hk) continue;
          if (null === Hk || "object" !== typeof Hk) throw new TypeError("Object expected");
          (lk = yk(Hk.get)) && (tk.get = lk), (lk = yk(Hk.set)) && (tk.set = lk), (lk = yk(Hk.init)) && Tk.unshift(lk)
        } else(lk = yk(Hk)) && ("field" === ak ? Tk.unshift(lk) : tk[qk] = lk)
      }
      Lk && Object.defineProperty(Lk, Xk.name, tk), Zk = !0
    }

    function Tk(kk, Fk, Ik) {
      for (var Xk = arguments.length > 2, Tk = 0; Tk < Fk.length; Tk++) Ik = Xk ? Fk[Tk].call(kk, Ik) : Fk[Tk].call(kk);
      return Xk ? Ik : void 0
    }

    function ik(kk, Fk, Ik) {
      return "symbol" === typeof Fk && (Fk = Fk.description ? "[".concat(Fk.description, "]") : ""), Object.defineProperty(kk, "name", {
        configurable: !0,
        value: Ik ? "".concat(Ik, " ", Fk) : Fk
      })
    }
    Object.create;
    Object.create;

    function yk(kk, Fk, Ik, Xk) {
      if ("a" === Ik && !Xk) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof Fk ? kk !== Fk || !Xk : !Fk.has(kk)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === Ik ? Xk : "a" === Ik ? Xk.call(kk) : Xk ? Xk.value : Fk.get(kk)
    }

    function lk(kk, Fk, Ik, Xk, Tk) {
      if ("m" === Xk) throw new TypeError("Private method is not writable");
      if ("a" === Xk && !Tk) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof Fk ? kk !== Fk || !Tk : !Fk.has(kk)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Xk ? Tk.call(kk, Ik) : Tk ? Tk.value = Ik : Fk.set(kk, Ik), Ik
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);