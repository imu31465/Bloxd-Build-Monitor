export const id = 248;
export const ids = [248];
export const modules = {
  39708: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => rk,
      c: () => Hk,
      d: () => mk,
      e: () => Pk
    });
    var Dk = ik(39492),
      fk = ik(38272),
      Sk = ik(39623),
      bk = ik(39545);
    class rk {
      get RL() {
        return this._isDisposed
      }
      constructor(kk, ek, ik) {
        let fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Sk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          rk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Pk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          mk = arguments.length > 7 ? arguments[7] : void 0,
          Mk = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, bk.d)(), kk && kk.XF ? this._engine = kk.XF().JU() : this._engine = kk, this._updatable = ik, this._instanced = rk, this._divisor = mk || 1, this._label = Mk, ek instanceof Dk.b ? (this._data = null, this._buffer = ek) : (this._data = ek, this._buffer = null), this.byteStride = Pk ? fk : fk * Float32Array.BYTES_PER_ELEMENT, Sk || this.create()
      }
      createVertexBuffer(kk, ek, ik, Dk, fk) {
        let Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          bk = arguments.length > 6 ? arguments[6] : void 0;
        const rk = Sk ? ek : ek * Float32Array.BYTES_PER_ELEMENT,
          mk = Dk ? Sk ? Dk : Dk * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new Pk(this._engine, this, kk, this._updatable, !0, mk, void 0 === fk ? this._instanced : fk, rk, ik, void 0, void 0, !0, this._divisor || bk)
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
          if (this._buffer.vK > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.vK, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.vK, void 0, this._label));
          fk.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(kk) {
        this.create(kk)
      }
      updateDirectly(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, kk, Dk ? ek : ek * Float32Array.BYTES_PER_ELEMENT, ik ? ik * this.byteStride : void 0), this._data = 0 === ek && void 0 === ik ? kk : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class Pk {
      get RL() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(kk) {
        const ek = 0 != kk;
        this._instanceDivisor = kk, ek !== this._instanced && (this._instanced = ek, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const kk = this.getData();
        return kk ? Array.isArray(kk) ? kk.length / (this.byteStride / 4) - this.byteOffset / 4 : (kk.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(kk, ek, ik, Dk, fk, bk, Kk, xk, nk, Uk) {
        let Hk, wk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          lk = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          pk = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          yk = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = kk, "object" === typeof Dk && null !== Dk ? (Hk = Dk.updatable ?? !1, fk = Dk.postponeInternalCreation, bk = Dk.stride, Kk = Dk.instanced, xk = Dk.offset, nk = Dk.size, Uk = Dk.type, wk = Dk.normalized ?? !1, lk = Dk.useBytes ?? !1, pk = Dk.divisor ?? 1, yk = Dk.takeBufferOwnership ?? !1, this._label = Dk.label) : Hk = !!Dk, ek instanceof rk ? (this._buffer = ek, this._ownsBuffer = yk) : (this._buffer = new rk(kk, ek, Hk, bk, fk, Kk, lk, pk, this._label), this._ownsBuffer = !0), this.uniqueId = Pk._Counter++, this._kind = ik, void 0 === Uk) {
          const kk = this.getData();
          this.type = kk ? Mk(kk) : Pk.FLOAT
        } else this.type = Uk;
        const Yk = (0, Sk.p)(this.type);
        lk ? (this._size = nk || (bk ? bk / Yk : mk(ik)), this.byteStride = bk || this._buffer.byteStride || this._size * Yk, this.byteOffset = xk || 0) : (this._size = nk || bk || mk(ik), this.byteStride = bk ? bk * Yk : this._buffer.byteStride || this._size * Yk, this.byteOffset = (xk || 0) * Yk), this.normalized = wk, this._instanced = void 0 !== Kk && Kk, this._instanceDivisor = Kk ? pk : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(kk) {
        switch (kk) {
          case Pk.BYTE:
            return 0;
          case Pk.UNSIGNED_BYTE:
            return 1;
          case Pk.SHORT:
            return 2;
          case Pk.UNSIGNED_SHORT:
            return 3;
          case Pk.INT:
            return 4;
          case Pk.UNSIGNED_INT:
            return 5;
          case Pk.FLOAT:
            return 6;
          case Pk.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${kk}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (Pk._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(kk, ek) {
        const ik = this.getData();
        return ik ? (0, Sk.n)(ik, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, kk, ek) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, Sk.p)(this.type)
      }
      Zek() {
        return this.byteOffset / (0, Sk.p)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, Sk.p)(this.type) : this._size
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
      updateDirectly(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(kk, ek, void 0, ik), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(kk, ek) {
        (0, Sk.l)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, kk, this.normalized, ((kk, ik) => {
          for (let Dk = 0; Dk < this._size; Dk++) ek(kk[Dk], ik + Dk)
        }))
      }
      _alignBuffer() {}
    }

    function mk(kk) {
      switch (kk) {
        case Pk.UVKind:
        case Pk.UV2Kind:
        case Pk.UV3Kind:
        case Pk.UV4Kind:
        case Pk.UV5Kind:
        case Pk.UV6Kind:
          return 2;
        case Pk.NormalKind:
        case Pk.PositionKind:
          return 3;
        case Pk.ColorKind:
        case Pk.ColorInstanceKind:
        case Pk.MatricesIndicesKind:
        case Pk.MatricesIndicesExtraKind:
        case Pk.MatricesWeightsKind:
        case Pk.MatricesWeightsExtraKind:
        case Pk.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + kk + "'")
      }
    }

    function Mk(kk) {
      return kk instanceof Int8Array ? Pk.BYTE : kk instanceof Uint8Array ? Pk.UNSIGNED_BYTE : kk instanceof Int16Array ? Pk.SHORT : kk instanceof Uint16Array ? Pk.UNSIGNED_SHORT : kk instanceof Int32Array ? Pk.INT : kk instanceof Uint32Array ? Pk.UNSIGNED_INT : Pk.FLOAT
    }

    function Kk(kk) {
      return (0, Sk.p)(kk)
    }

    function xk(kk, ek, ik, Dk, fk, bk, rk, Pk) {
      (0, Sk.l)(kk, ek, ik, Dk, fk, bk, rk, ((kk, ek) => {
        for (let ik = 0; ik < Dk; ik++) Pk(kk[ik], ek + ik)
      }))
    }

    function nk(kk, ek, ik, Dk, fk, bk, rk, Pk) {
      return (0, Sk.n)(kk, ek, ik, Dk, fk, bk, rk, Pk)
    }
    Pk._Counter = 0, Pk.BYTE = 5120, Pk.UNSIGNED_BYTE = 5121, Pk.SHORT = 5122, Pk.UNSIGNED_SHORT = 5123, Pk.INT = 5124, Pk.UNSIGNED_INT = 5125, Pk.FLOAT = 5126, Pk.HALF_FLOAT = 5131, Pk.PositionKind = "position", Pk.NormalKind = "normal", Pk.TangentKind = "tangent", Pk.UVKind = "uv", Pk.UV2Kind = "uv2", Pk.UV3Kind = "uv3", Pk.UV4Kind = "uv4", Pk.UV5Kind = "uv5", Pk.UV6Kind = "uv6", Pk.ColorKind = "color", Pk.ColorInstanceKind = "instanceColor", Pk.MatricesIndicesKind = "matricesIndices", Pk.MatricesWeightsKind = "matricesWeights", Pk.MatricesIndicesExtraKind = "matricesIndicesExtra", Pk.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let Uk = !1;

    function Hk() {
      Uk || (Uk = !0, Pk.DeduceStride = mk, Pk.GetDataType = Mk, Pk.GetTypeByteLength = Kk, Pk.ForEach = xk, Pk.GetFloatData = nk)
    }
  },
  39492: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk
    });
    class Dk {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.vK = 0, this.is32Bits = !1, this.uniqueId = Dk._Counter++
      }
    }
    Dk._Counter = 0
  },
  39701: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Sk
    });
    var Dk = ik(36698),
      fk = ik(39708);
    class Sk {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || ek && !this.pickedMesh.isVerticesDataPresent(fk.e.NormalKind)) return null;
        let ik, Sk = this.pickedMesh.oik();
        0 === Sk?.length && (Sk = null);
        const bk = Dk.j.eH[0],
          rk = Dk.j.eH[1],
          Pk = Dk.j.eH[2];
        if (ek) {
          const kk = this.pickedMesh.getVerticesData(fk.e.NormalKind);
          let ek = Sk ? Dk.o.FromArrayToRef(kk, 3 * Sk[3 * this.faceId], bk) : bk.Z6(kk[3 * this.faceId * 3], kk[3 * this.faceId * 3 + 1], kk[3 * this.faceId * 3 + 2]),
            mk = Sk ? Dk.o.FromArrayToRef(kk, 3 * Sk[3 * this.faceId + 1], rk) : rk.Z6(kk[3 * (3 * this.faceId + 1)], kk[3 * (3 * this.faceId + 1) + 1], kk[3 * (3 * this.faceId + 1) + 2]),
            Mk = Sk ? Dk.o.FromArrayToRef(kk, 3 * Sk[3 * this.faceId + 2], Pk) : Pk.Z6(kk[3 * (3 * this.faceId + 2)], kk[3 * (3 * this.faceId + 2) + 1], kk[3 * (3 * this.faceId + 2) + 2]);
          ek = ek.scale(this.bu), mk = mk.scale(this.bv), Mk = Mk.scale(1 - this.bu - this.bv), ik = new Dk.o(ek.x + mk.x + Mk.x, ek.y + mk.y + Mk.y, ek.z + mk.z + Mk.z)
        } else {
          const kk = this.pickedMesh.getVerticesData(fk.e.PositionKind),
            ek = Sk ? Dk.o.FromArrayToRef(kk, 3 * Sk[3 * this.faceId], bk) : bk.Z6(kk[3 * this.faceId * 3], kk[3 * this.faceId * 3 + 1], kk[3 * this.faceId * 3 + 2]),
            mk = Sk ? Dk.o.FromArrayToRef(kk, 3 * Sk[3 * this.faceId + 1], rk) : rk.Z6(kk[3 * (3 * this.faceId + 1)], kk[3 * (3 * this.faceId + 1) + 1], kk[3 * (3 * this.faceId + 1) + 2]),
            Mk = Sk ? Dk.o.FromArrayToRef(kk, 3 * Sk[3 * this.faceId + 2], Pk) : Pk.Z6(kk[3 * (3 * this.faceId + 2)], kk[3 * (3 * this.faceId + 2) + 1], kk[3 * (3 * this.faceId + 2) + 2]),
            Kk = ek.subtract(mk),
            xk = Mk.subtract(mk);
          ik = Dk.o.Cross(Kk, xk)
        }
        const mk = (kk, ek) => {
          if (-1 !== this.thinInstanceIndex) {
            const ik = kk._thinInstanceDataStorage.matrixData,
              fk = this.thinInstanceIndex << 4;
            if (ik && ik.length > fk) {
              const kk = Dk.j.Matrix[0];
              Dk.b.FromArrayToRef(ik, fk, kk), Dk.o.TransformNormalToRef(ek, kk, ek)
            }
          }
          let ik = kk.getWorldMatrix();
          kk.nonUniformScaling && (Dk.j.Matrix[0].Fs(ik), ik = Dk.j.Matrix[0], ik.setTranslationFromFloats(0, 0, 0), ik.invert(), ik.transposeToRef(Dk.j.Matrix[1]), ik = Dk.j.Matrix[1]), Dk.o.TransformNormalToRef(ek, ik, ek)
        };
        if (kk && mk(this.pickedMesh, ik), this.ray) {
          const ek = Dk.j.eH[0].Fs(ik);
          kk || mk(this.pickedMesh, ek), Dk.o.Dot(ek, this.ray.direction) > 0 && ik.negateInPlace()
        }
        return ik.normalize(), ik
      }
      getTextureCoordinates() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fk.e.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(kk)) return null;
        const ek = this.pickedMesh.oik();
        if (!ek) return null;
        const ik = this.pickedMesh.getVerticesData(kk);
        if (!ik) return null;
        let Sk = Dk.l.FromArray(ik, 2 * ek[3 * this.faceId]),
          bk = Dk.l.FromArray(ik, 2 * ek[3 * this.faceId + 1]),
          rk = Dk.l.FromArray(ik, 2 * ek[3 * this.faceId + 2]);
        return Sk = Sk.scale(this.bu), bk = bk.scale(this.bv), rk = rk.scale(1 - this.bu - this.bv), new Dk.l(Sk.x + bk.x + rk.x, Sk.y + bk.y + rk.y)
      }
    }
  },
  39545: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk
    });
    var Dk = ik(39398);
    let fk = !1;

    function Sk() {
      fk || (fk = !0, Dk.ThinEngine.prototype.updateDynamicIndexBuffer = function(kk, ek) {
        let ik;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(kk), ik = kk.is32Bits ? ek instanceof Uint32Array ? ek : new Uint32Array(ek) : ek instanceof Uint16Array ? ek : new Uint16Array(ek), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, ik, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, Dk.ThinEngine.prototype.updateDynamicVertexBuffer = function(kk, ek, ik, Dk) {
        this.bindArrayBuffer(kk), void 0 === ik && (ik = 0);
        const fk = ek.byteLength || ek.length;
        void 0 === Dk || Dk >= fk && 0 === ik ? ek instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ik, new Float32Array(ek)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ik, ek) : ek instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ik, new Float32Array(ek).subarray(0, Dk / 4)) : (ek = ArrayBuffer.isView(ek) ? new Uint8Array(ek.buffer, ek.byteOffset, Dk) : new Uint8Array(ek, 0, Dk), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ik, ek)), this._resetVertexBufferBinding()
      })
    }
  },
  39509: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk
    });
    class Dk {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ek = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = ek, !kk && (kk = ek.createTexture(), !kk)) throw new Error("Unable to create webGL texture");
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
  39467: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => pk
    });
    var Dk = ik(36726),
      fk = ik(39403),
      Sk = ik(36722),
      bk = ik(38272),
      rk = ik(36713),
      Pk = ik(39470);
    class mk {
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
    class Mk {
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
        const ek = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = ek ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = ek ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = ek ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = ek ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = ek ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = ek ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = ek ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = ek ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = ek ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = ek ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = ek ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = ek ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? kk.enable(kk.STENCIL_TEST) : kk.disable(kk.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (kk.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (kk.stencilFuncSeparate(kk.FRONT, this.func, this.funcRef, this.funcMask), kk.stencilFuncSeparate(kk.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (kk.stencilOpSeparate(kk.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), kk.stencilOpSeparate(kk.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class Kk {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = Kk.ALWAYS, this.opStencilFail = Kk.KEEP, this.opDepthFail = Kk.KEEP, this.opStencilDepthPass = Kk.REPLACE, this.backFunc = Kk.ALWAYS, this.backOpStencilFail = Kk.KEEP, this.backOpDepthFail = Kk.KEEP, this.backOpStencilDepthPass = Kk.REPLACE
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
    Kk.ALWAYS = 519, Kk.KEEP = 7680, Kk.REPLACE = 7681;
    var xk = ik(39475),
      nk = ik(39447),
      Uk = ik(39391),
      Hk = ik(39429),
      wk = ik(39445);

    function lk(kk, ek) {
      if (ek) {
        const {
          requestAnimationFrame: ik
        } = ek;
        if ("function" === typeof ik) return ik(kk)
      }
      if ((0, Hk.i)()) {
        const {
          requestAnimationFrame: ik
        } = ek || window;
        if ("function" === typeof ik) return ik(kk)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(kk);
      return setTimeout(kk, 16)
    }
    class pk {
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
      get Xik() {
        return this._useReverseDepthBuffer
      }
      set Xik(kk) {
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
        if (kk) return this.isNDCHalfZRange ? kk.IS_NDC_HALF_ZRANGE = "" : delete kk.IS_NDC_HALF_ZRANGE, this.Xik ? kk.USE_REVERSE_DEPTHBUFFER = "" : delete kk.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? kk.USE_EXACT_SRGB_CONVERSIONS = "" : delete kk.USE_EXACT_SRGB_CONVERSIONS);
        {
          let kk = "";
          return this.isNDCHalfZRange && (kk += "#define IS_NDC_HALF_ZRANGE"), this.Xik && (kk && (kk += "\n"), kk += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (kk && (kk += "\n"), kk += "#define USE_EXACT_SRGB_CONVERSIONS"), kk
        }
      }
      _rebuildInternalTextures() {
        const kk = this._internalTexturesCache.slice();
        for (const ek of kk) ek._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const kk = this._renderTargetWrapperCache.slice();
        for (const ek of kk) ek.textures?.some((kk => 15 === kk.source)) || ek._rebuild()
      }
      _rebuildEffects() {
        for (const kk in this._compiledEffects) {
          const ek = this._compiledEffects[kk];
          ek._pipelineContext = null, ek._prepareEffect()
        }
        fk.e.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        bk.b.Warn(this.name + " context successfully restored."), this.RU.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(kk) {
        setTimeout((() => {
          this._clearEmptyResources();
          const ek = this._depthCullingState.depthTest,
            ik = this._depthCullingState.depthFunc,
            Dk = this._depthCullingState.depthMask,
            fk = this._stencilState.stencilTest;
          kk(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = ek, this._depthCullingState.depthFunc = ik, this._depthCullingState.depthMask = Dk, this._stencilState.stencilTest = fk, this._flagContextRestored()
        }), 0)
      }
      get RL() {
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
            ek = [kk, kk, kk, kk, kk, kk];
          this._emptyCubeTexture = this.createRawCubeTexture(ek, 1, 5, 0, !1, !1, 1)
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
        const ek = this._activeRenderLoops.indexOf(kk);
        ek >= 0 && (this._activeRenderLoops.splice(ek, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: kk
            } = this.customAnimationFrameRequester;
            kk && kk(this.customAnimationFrameRequester.iH), delete this.customAnimationFrameRequester.iH
          }
        } else if (0 !== this._frameHandler) {
          const kk = this._frameHandler;
          if (this._frameHandler = 0, (0, Hk.i)()) {
            const {
              cancelAnimationFrame: ek
            } = this.getHostWindow() || window;
            if ("function" === typeof ek) return ek(kk)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(kk);
          return clearTimeout(kk)
        }
      }
      AY() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      VY() {
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
        const ek = kk - this._lastFrameTime;
        return this._lastFrameTime = kk, this._renderAccumulator += ek, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(kk) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(kk)) {
          let kk = !0;
          (this.RL || !this.renderEvenInBackground && this._windowIsBackground) && (kk = !1), kk && (this.AY(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.VY())
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
      _queueNewFrame(kk, ek) {
        return lk(kk, ek)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.iH = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.iH) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
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
        this._depthCullingState.zOffset = this.Xik ? -kk : kk
      }
      getZOffset() {
        const kk = this._depthCullingState.zOffset;
        return this.Xik ? -kk : kk
      }
      setZOffsetUnits(kk) {
        this._depthCullingState.zOffsetUnits = this.Xik ? -kk : kk
      }
      getZOffsetUnits() {
        const kk = this._depthCullingState.zOffsetUnits;
        return this.Xik ? -kk : kk
      }
      getHostWindow() {
        return (0, Hk.i)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
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
        const ek = this._renderTargetWrapperCache.indexOf(kk); - 1 !== ek && this._renderTargetWrapperCache.splice(ek, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(kk, ek, ik) {
        const Dk = ek || this.getRenderWidth(),
          fk = ik || this.getRenderHeight(),
          Sk = kk.x || 0,
          bk = kk.y || 0;
        this._cachedViewport = kk, this._viewport(Sk * Dk, bk * fk, Dk * kk.width, fk * kk.height)
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
      _createTextureBase(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          rk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Pk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          mk = arguments.length > 7 ? arguments[7] : void 0,
          Mk = arguments.length > 8 ? arguments[8] : void 0,
          Kk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          xk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          nk = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          Hk = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          wk = arguments.length > 13 ? arguments[13] : void 0,
          lk = arguments.length > 14 ? arguments[14] : void 0,
          yk = arguments.length > 15 ? arguments[15] : void 0;
        const Yk = "data:" === (kk = kk || "").substring(0, 5),
          Lk = "blob:" === kk.substring(0, 5),
          Ck = Yk && -1 !== kk.indexOf(";base64,"),
          Ak = xk || new Uk.b(this, 1);
        Ak !== xk && (Ak.label = kk.substring(0, 60));
        const jk = kk;
        !this._transformTextureUrl || Ck || xk || Kk || (kk = this._transformTextureUrl(kk)), jk !== kk && (Ak._originalUrl = jk);
        const sk = kk.lastIndexOf(".");
        let dk = Hk || (sk > -1 ? kk.substring(sk).toLowerCase() : "");
        dk.indexOf("?") > -1 && (dk = dk.split("?")[0]);
        const Vk = pk.GetCompatibleTextureLoader(dk, wk);
        Dk && Dk.addPendingData(Ak), Ak.url = kk, Ak.generateMipMaps = !ek, Ak.samplingMode = fk, Ak.invertY = ik, Ak._useSRGBBuffer = this._getUseSRGBBuffer(!!yk, ek), this._doNotHandleContextLost || (Ak._buffer = Kk);
        let Fk = null;
        rk && !xk && (Fk = Ak.onLoadedObservable.add(rk)), xk || this._internalTexturesCache.push(Ak);
        const uk = (ik, xk) => {
          Dk && Dk.removePendingData(Ak), kk === jk ? (Fk && Ak.onLoadedObservable.remove(Fk), Sk.e.UseFallbackTexture && kk !== Sk.e.FallbackTexture && this._createTextureBase(Sk.e.FallbackTexture, ek, Ak.invertY, Dk, fk, null, Pk, mk, Mk, Kk, Ak), ik = (ik || "Unknown error") + (Sk.e.UseFallbackTexture ? " - Fallback texture was used" : ""), Ak.onErrorObservable.notifyObservers({
            message: ik,
            exception: xk
          }), Pk && Pk(ik, xk)) : (bk.b.Warn(`Failed to load ${kk}, falling back to ${jk}`), this._createTextureBase(jk, ek, Ak.invertY, Dk, fk, rk, Pk, mk, Mk, Kk, Ak, nk, Hk, wk, lk, yk))
        };
        if (Vk) {
          const ek = async kk => {
            (await Vk).loadData(kk, Ak, ((kk, ek, ik, Sk, bk, rk) => {
              rk ? uk("TextureLoader failed to load data") : mk(Ak, dk, Dk, {
                width: kk,
                height: ek
              }, Ak.invertY, !ik, Sk, (() => (bk(), !1)), fk)
            }), lk)
          };
          if (Kk) {
            const kk = async kk => {
              try {
                await ek(kk)
              } catch (ik) {
                uk("Failed to parse texture data", ik)
              }
            };
            Kk instanceof ArrayBuffer ? kk(new Uint8Array(Kk)) : ArrayBuffer.isView(Kk) ? kk(Kk) : Pk && Pk("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(kk, (async kk => {
            try {
              await ek(new Uint8Array(kk))
            } catch (ik) {
              uk("Failed to parse texture data", ik)
            }
          }), void 0, Dk ? Dk.offlineProvider : void 0, !0, ((kk, ek) => {
            uk("Unable to load " + (kk && kk.responseURL, ek))
          }))
        } else {
          const ik = kk => {
            Lk && !this._doNotHandleContextLost && (Ak._buffer = kk), mk(Ak, dk, Dk, kk, Ak.invertY, ek, !1, Mk, fk)
          };
          !Yk || Ck ? Kk && ("string" === typeof Kk.decoding || Kk.close) ? ik(Kk) : pk._FileToolsLoadImage(kk || "", ik, uk, Dk ? Dk.offlineProvider : null, wk, Ak.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof Kk || Kk instanceof ArrayBuffer || ArrayBuffer.isView(Kk) || Kk instanceof Blob ? pk._FileToolsLoadImage(Kk, ik, uk, Dk ? Dk.offlineProvider : null, wk, Ak.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : Kk && ik(Kk)
        }
        return Ak
      }
      _rebuildBuffers() {
        for (const kk of this._uniformBuffers) kk._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, Hk.e)() ? document : null
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
      constructor(kk, ek, ik) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new mk, this._stencilStateComposer = new Mk, this._stencilState = new Kk, this._alphaState = new xk.e(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new Dk.c, this.onCanvasFocusObservable = new Dk.c, this.onNewSceneAddedObservable = new Dk.c, this.onResizeObservable = new Dk.c, this.onCanvasPointerOutObservable = new Dk.c, this.onEffectErrorObservable = new Dk.c, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new Dk.c, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = kk => this._renderLoop(kk), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new Dk.c, this.onAfterShaderCompilationObservable = new Dk.c, this.onBeginFrameObservable = new Dk.c, this.onEndFrameObservable = new Dk.c, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new Dk.c, this.RU = new Dk.c, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.ZF = new Dk.c, this.onReleaseEffectsObservable = new Dk.c, Sk.e.Instances.push(this), this.startTime = Pk.d.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, rk.c.SetMatrixPrecision(!!ek.useLargeWorldRendering || !!ek.useHighPrecisionMatrix), (0, Hk.f)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), ek.antialias = kk ?? ek.antialias, ek.deterministicLockstep = ek.deterministicLockstep ?? !1, ek.lockstepMaxSteps = ek.lockstepMaxSteps ?? 4, ek.timeStep = ek.timeStep ?? 1 / 60, ek.stencil = ek.stencil ?? !0, this._audioContext = ek.audioEngineOptions?.audioContext ?? null, this._audioDestination = ek.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = ek.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!ek.doNotHandleContextLost, this._isStencilEnable = !!ek.stencil, this.useExactSrgbConversions = ek.useExactSrgbConversions ?? !1, this.canvasTabIndex = ek.canvasTabIndex ?? this.canvasTabIndex;
        const fk = (0, Hk.i)() && window.devicePixelRatio || 1,
          bk = ek.limitDeviceRatio || fk;
        ik = ik || ek.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = ik, this._hardwareScalingLevel = ik ? 1 / Math.min(bk, fk) : 1, this._lastDevicePixelRatio = fk, this._creationOptions = ek
      }
      resize() {
        let kk, ek, ik = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const kk = (0, Hk.i)() && window.devicePixelRatio || 1,
            ek = this._lastDevicePixelRatio / kk;
          this._lastDevicePixelRatio = kk, this._hardwareScalingLevel *= ek
        }
        if ((0, Hk.i)() && (0, Hk.e)())
          if (this._renderingCanvas) {
            const ik = this._renderingCanvas.getBoundingClientRect?.();
            kk = this._renderingCanvas.clientWidth || ik?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, ek = this._renderingCanvas.clientHeight || ik?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else kk = window.innerWidth, ek = window.innerHeight;
        else kk = this._renderingCanvas ? this._renderingCanvas.width : 100, ek = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(kk / this._hardwareScalingLevel, ek / this._hardwareScalingLevel, ik)
      }
      setSize(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (kk |= 0, ek |= 0, !ik && this._renderingCanvas.width === kk && this._renderingCanvas.height === ek) return !1;
        if (this._renderingCanvas.width = kk, this._renderingCanvas.height = ek, this.scenes) {
          for (let kk = 0; kk < this.scenes.length; kk++) {
            const ek = this.scenes[kk];
            for (let kk = 0; kk < ek.cameras.length; kk++) {
              ek.cameras[kk]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk) {
        throw (0, nk.k)("engine.rawTexture")
      }
      createRawCubeTexture(kk, ek, ik, Dk, fk, Sk, bk, rk) {
        throw (0, nk.k)("engine.rawTexture")
      }
      createRawTexture3D(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk) {
        throw (0, nk.k)("engine.rawTexture")
      }
      createRawTexture2DArray(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk) {
        throw (0, nk.k)("engine.rawTexture")
      }
      _sharedInit(kk) {
        this._renderingCanvas = kk
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const kk = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== kk.indexOf("Mobile") || -1 !== kk.indexOf("Mac") && (0, Hk.e)() && "ontouchend" in document
        }, this._checkForMobile(), (0, Hk.i)() && window.addEventListener("resize", this._checkForMobile))
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
      _createImageBitmapFromSource(kk, ek) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(kk, ek) {
        return createImageBitmap(kk, ek)
      }
      resizeImageBitmap(kk, ek, ik) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(kk) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(kk, ek) {
        if ("undefined" === typeof document) return new OffscreenCanvas(kk, ek);
        const ik = document.createElement("canvas");
        return ik.width = kk, ik.height = ek, ik
      }
      createCanvas(kk, ek) {
        return pk._CreateCanvas(kk, ek)
      }
      static _FileToolsLoadImage(kk, ek, ik, Dk, fk, Sk, bk) {
        if (!wk.b.loadImage) throw (0, nk.k)("FileTools");
        return wk.b.loadImage(kk, ek, ik, Dk, fk, Sk, bk)
      }
      _loadFile(kk, ek, ik, Dk, fk, Sk) {
        const bk = (0, wk.h)(kk, ek, ik, Dk, fk, Sk);
        return this._activeRequests.push(bk), bk.onCompleteObservable.add((() => {
          const kk = this._activeRequests.indexOf(bk); - 1 !== kk && this._activeRequests.splice(kk, 1)
        })), bk
      }
      static _FileToolsLoadFile(kk, ek, ik, Dk, fk, Sk) {
        if (wk.b.loadFile) return wk.b.loadFile(kk, ek, ik, Dk, fk, Sk);
        throw (0, nk.k)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), fk.e.ResetCache();
        for (const ek of this._activeRequests) ek.abort();
        this._boundRenderFunction = null, this.ZF.notifyObservers(this), this.ZF.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, Hk.i)() && window.removeEventListener("resize", this._checkForMobile);
        const kk = Sk.e.Instances.indexOf(this);
        kk >= 0 && Sk.e.Instances.splice(kk, 1), Sk.e.Instances.length || (Sk.e.OnEnginesDisposedObservable.notifyObservers(this), Sk.e.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(kk) {
        throw (0, nk.k)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(kk, ek) {
        for (let ik = 0; ik < Sk.e.Instances.length; ik++) {
          const Dk = Sk.e.Instances[ik];
          for (let ik = 0; ik < Dk.scenes.length; ik++) Dk.scenes[ik].markAllMaterialsAsDirty(kk, ek)
        }
      }
      static GetCompatibleTextureLoader(kk, ek) {
        return null
      }
    }
    pk._RenderPassIdCounter = 0, pk._RescalePostProcessFactory = null, pk.CollisionsEpsilon = .001, pk.QueueNewFrame = lk
  },
  39412: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk
    });
    class Dk {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Dk.ShadersRepository : Dk.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Dk.ShadersStore : Dk.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Dk.IncludesShadersStore : Dk.IncludesShadersStoreWGSL
      }
    }
    Dk.ShadersRepository = "src/Shaders/", Dk.ShadersStore = {}, Dk.IncludesShadersStore = {}, Dk.ShadersRepositoryWGSL = "src/ShadersWGSL/", Dk.ShadersStoreWGSL = {}, Dk.IncludesShadersStoreWGSL = {}
  },
  39437: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => xk,
      e: () => yk,
      h: () => Uk,
      i: () => nk,
      l: () => Hk,
      n: () => pk,
      q: () => Kk,
      t: () => mk,
      x: () => Mk,
      y: () => Pk,
      A: () => rk
    });
    class Dk {
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
      _fillEffectInformation(kk, ek, ik, Dk, fk, Sk, bk, rk) {
        const Pk = this.engine;
        if (Pk.supportsUniformBuffers)
          for (const Mk in ek) kk.bindUniformBlock(Mk, ek[Mk]);
        let mk;
        for (this.engine.getUniforms(this, ik).forEach(((kk, ek) => {
            Dk[ik[ek]] = kk
          })), this._uniforms = Dk, mk = 0; mk < fk.length; mk++) {
          null == kk.getUniform(fk[mk]) && (fk.splice(mk, 1), mk--)
        }
        fk.forEach(((kk, ek) => {
          Sk[kk] = ek
        }));
        for (const Mk of Pk.getAttributes(this, bk)) rk.push(Mk)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(kk, ek) {
        const ik = this._valueCache[kk],
          Dk = ek.updateFlag;
        if (void 0 !== ik && ik === Dk) return !1;
        const fk = ek.Tik();
        let Sk = this._matrixValueCache[kk];
        if (void 0 !== ik && null !== ik && void 0 !== Sk) {
          let ek = !0;
          for (let kk = 15; kk >= 0; kk--)
            if (Sk[kk] !== fk[kk]) {
              ek = !1;
              break
            } if (ek) return this._valueCache[kk] = Dk, !1
        }
        return void 0 === Sk && (Sk = this._matrixValueCache[kk] = new Float32Array(16)), Sk.set(fk), this._valueCache[kk] = Dk, !0
      }
      _cacheFloat2(kk, ek, ik) {
        let Dk = this._valueCache[kk];
        if (!Dk || 2 !== Dk.length) return Dk = [ek, ik], this._valueCache[kk] = Dk, !0;
        let fk = !1;
        return Dk[0] !== ek && (Dk[0] = ek, fk = !0), Dk[1] !== ik && (Dk[1] = ik, fk = !0), fk
      }
      _cacheFloat3(kk, ek, ik, Dk) {
        let fk = this._valueCache[kk];
        if (!fk || 3 !== fk.length) return fk = [ek, ik, Dk], this._valueCache[kk] = fk, !0;
        let Sk = !1;
        return fk[0] !== ek && (fk[0] = ek, Sk = !0), fk[1] !== ik && (fk[1] = ik, Sk = !0), fk[2] !== Dk && (fk[2] = Dk, Sk = !0), Sk
      }
      _cacheFloat4(kk, ek, ik, Dk, fk) {
        let Sk = this._valueCache[kk];
        if (!Sk || 4 !== Sk.length) return Sk = [ek, ik, Dk, fk], this._valueCache[kk] = Sk, !0;
        let bk = !1;
        return Sk[0] !== ek && (Sk[0] = ek, bk = !0), Sk[1] !== ik && (Sk[1] = ik, bk = !0), Sk[2] !== Dk && (Sk[2] = Dk, bk = !0), Sk[3] !== fk && (Sk[3] = fk, bk = !0), bk
      }
      setInt(kk, ek) {
        const ik = this._valueCache[kk];
        void 0 !== ik && ik === ek || this.engine.setInt(this._uniforms[kk], ek) && (this._valueCache[kk] = ek)
      }
      setInt2(kk, ek, ik) {
        this._cacheFloat2(kk, ek, ik) && (this.engine.setInt2(this._uniforms[kk], ek, ik) || (this._valueCache[kk] = null))
      }
      setInt3(kk, ek, ik, Dk) {
        this._cacheFloat3(kk, ek, ik, Dk) && (this.engine.setInt3(this._uniforms[kk], ek, ik, Dk) || (this._valueCache[kk] = null))
      }
      setInt4(kk, ek, ik, Dk, fk) {
        this._cacheFloat4(kk, ek, ik, Dk, fk) && (this.engine.setInt4(this._uniforms[kk], ek, ik, Dk, fk) || (this._valueCache[kk] = null))
      }
      setIntArray(kk, ek) {
        this._valueCache[kk] = null, this.engine.setIntArray(this._uniforms[kk], ek)
      }
      setIntArray2(kk, ek) {
        this._valueCache[kk] = null, this.engine.setIntArray2(this._uniforms[kk], ek)
      }
      setIntArray3(kk, ek) {
        this._valueCache[kk] = null, this.engine.setIntArray3(this._uniforms[kk], ek)
      }
      setIntArray4(kk, ek) {
        this._valueCache[kk] = null, this.engine.setIntArray4(this._uniforms[kk], ek)
      }
      setUInt(kk, ek) {
        const ik = this._valueCache[kk];
        void 0 !== ik && ik === ek || this.engine.setUInt(this._uniforms[kk], ek) && (this._valueCache[kk] = ek)
      }
      setUInt2(kk, ek, ik) {
        this._cacheFloat2(kk, ek, ik) && (this.engine.setUInt2(this._uniforms[kk], ek, ik) || (this._valueCache[kk] = null))
      }
      setUInt3(kk, ek, ik, Dk) {
        this._cacheFloat3(kk, ek, ik, Dk) && (this.engine.setUInt3(this._uniforms[kk], ek, ik, Dk) || (this._valueCache[kk] = null))
      }
      setUInt4(kk, ek, ik, Dk, fk) {
        this._cacheFloat4(kk, ek, ik, Dk, fk) && (this.engine.setUInt4(this._uniforms[kk], ek, ik, Dk, fk) || (this._valueCache[kk] = null))
      }
      setUIntArray(kk, ek) {
        this._valueCache[kk] = null, this.engine.setUIntArray(this._uniforms[kk], ek)
      }
      setUIntArray2(kk, ek) {
        this._valueCache[kk] = null, this.engine.setUIntArray2(this._uniforms[kk], ek)
      }
      setUIntArray3(kk, ek) {
        this._valueCache[kk] = null, this.engine.setUIntArray3(this._uniforms[kk], ek)
      }
      setUIntArray4(kk, ek) {
        this._valueCache[kk] = null, this.engine.setUIntArray4(this._uniforms[kk], ek)
      }
      setArray(kk, ek) {
        this._valueCache[kk] = null, this.engine.setArray(this._uniforms[kk], ek)
      }
      setArray2(kk, ek) {
        this._valueCache[kk] = null, this.engine.setArray2(this._uniforms[kk], ek)
      }
      setArray3(kk, ek) {
        this._valueCache[kk] = null, this.engine.setArray3(this._uniforms[kk], ek)
      }
      setArray4(kk, ek) {
        this._valueCache[kk] = null, this.engine.setArray4(this._uniforms[kk], ek)
      }
      setMatrices(kk, ek) {
        ek && (this._valueCache[kk] = null, this.engine.setMatrices(this._uniforms[kk], ek))
      }
      setMatrix(kk, ek) {
        this._cacheMatrix(kk, ek) && (this.engine.setMatrices(this._uniforms[kk], ek.Tik()) || (this._valueCache[kk] = null))
      }
      setMatrix3x3(kk, ek) {
        this._valueCache[kk] = null, this.engine.setMatrix3x3(this._uniforms[kk], ek)
      }
      setMatrix2x2(kk, ek) {
        this._valueCache[kk] = null, this.engine.setMatrix2x2(this._uniforms[kk], ek)
      }
      setFloat(kk, ek) {
        const ik = this._valueCache[kk];
        void 0 !== ik && ik === ek || this.engine.setFloat(this._uniforms[kk], ek) && (this._valueCache[kk] = ek)
      }
      setVector2(kk, ek) {
        this._cacheFloat2(kk, ek.x, ek.y) && (this.engine.setFloat2(this._uniforms[kk], ek.x, ek.y) || (this._valueCache[kk] = null))
      }
      setFloat2(kk, ek, ik) {
        this._cacheFloat2(kk, ek, ik) && (this.engine.setFloat2(this._uniforms[kk], ek, ik) || (this._valueCache[kk] = null))
      }
      setVector3(kk, ek) {
        this._cacheFloat3(kk, ek.x, ek.y, ek.z) && (this.engine.setFloat3(this._uniforms[kk], ek.x, ek.y, ek.z) || (this._valueCache[kk] = null))
      }
      setFloat3(kk, ek, ik, Dk) {
        this._cacheFloat3(kk, ek, ik, Dk) && (this.engine.setFloat3(this._uniforms[kk], ek, ik, Dk) || (this._valueCache[kk] = null))
      }
      setVector4(kk, ek) {
        this._cacheFloat4(kk, ek.x, ek.y, ek.z, ek.w) && (this.engine.setFloat4(this._uniforms[kk], ek.x, ek.y, ek.z, ek.w) || (this._valueCache[kk] = null))
      }
      setQuaternion(kk, ek) {
        this._cacheFloat4(kk, ek.x, ek.y, ek.z, ek.w) && (this.engine.setFloat4(this._uniforms[kk], ek.x, ek.y, ek.z, ek.w) || (this._valueCache[kk] = null))
      }
      setFloat4(kk, ek, ik, Dk, fk) {
        this._cacheFloat4(kk, ek, ik, Dk, fk) && (this.engine.setFloat4(this._uniforms[kk], ek, ik, Dk, fk) || (this._valueCache[kk] = null))
      }
      setColor3(kk, ek) {
        this._cacheFloat3(kk, ek.r, ek.g, ek.b) && (this.engine.setFloat3(this._uniforms[kk], ek.r, ek.g, ek.b) || (this._valueCache[kk] = null))
      }
      setColor4(kk, ek, ik) {
        this._cacheFloat4(kk, ek.r, ek.g, ek.b, ik) && (this.engine.setFloat4(this._uniforms[kk], ek.r, ek.g, ek.b, ik) || (this._valueCache[kk] = null))
      }
      setDirectColor4(kk, ek) {
        this._cacheFloat4(kk, ek.r, ek.g, ek.b, ek.a) && (this.engine.setFloat4(this._uniforms[kk], ek.r, ek.g, ek.b, ek.a) || (this._valueCache[kk] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var fk = ik(39445);
    const Sk = new WeakMap,
      bk = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function rk(kk) {
      let ek = Sk.get(kk);
      if (!ek) {
        if (!kk) return bk;
        ek = {
          _webGLVersion: kk.TEXTURE_BINDING_3D ? 2 : 1,
          _context: kk,
          parallelShaderCompile: kk.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, Sk.set(kk, ek)
      }
      return ek
    }

    function Pk(kk) {
      Sk.delete(kk)
    }

    function mk(kk, ek, ik, Dk, fk, Sk) {
      const bk = rk(Dk);
      Sk || (Sk = bk._createShaderProgramInjection ?? xk);
      return Sk(kk, lk(ek, "vertex", Dk, bk._contextWasLost), lk(ik, "fragment", Dk, bk._contextWasLost), Dk, fk, bk.validateShaderPrograms)
    }

    function Mk(kk, ek, ik, Dk, fk) {
      let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        bk = arguments.length > 6 ? arguments[6] : void 0;
      const Pk = rk(fk);
      bk || (bk = Pk._createShaderProgramInjection ?? xk);
      const mk = Pk._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return bk(kk, wk(ek, "vertex", Dk, mk, fk, Pk._contextWasLost), wk(ik, "fragment", Dk, mk, fk, Pk._contextWasLost), fk, Sk, Pk.validateShaderPrograms)
    }

    function Kk(kk, ek) {
      const ik = new Dk,
        fk = rk(kk);
      return fk.parallelShaderCompile && !fk.disableParallelShaderCompile && (ik.isParallelCompiled = !0), ik.context = fk._context, ik
    }

    function xk(kk, ek, ik, Dk) {
      let fk = arguments.length > 5 ? arguments[5] : void 0;
      const Sk = Dk.createProgram();
      if (kk.program = Sk, !Sk) throw new Error("Unable to create program");
      return Dk.attachShader(Sk, ek), Dk.attachShader(Sk, ik), Dk.linkProgram(Sk), kk.context = Dk, kk.vertexShader = ek, kk.fragmentShader = ik, kk.isParallelCompiled || Uk(kk, Dk, fk), Sk
    }

    function nk(kk, ek, ik) {
      const Dk = kk;
      if (Dk._isDisposed) return !1;
      const fk = rk(ek);
      return !!(fk && fk.parallelShaderCompile && fk.parallelShaderCompile.COMPLETION_STATUS_KHR && Dk.program && ek.getProgramParameter(Dk.program, fk.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (Uk(Dk, ek, ik), !0)
    }

    function Uk(kk, ek, ik) {
      const Dk = kk.context,
        fk = kk.vertexShader,
        Sk = kk.fragmentShader,
        bk = kk.program;
      if (!Dk.getProgramParameter(bk, Dk.LINK_STATUS)) {
        if (!ek.getShaderParameter(fk, ek.COMPILE_STATUS)) {
          const ik = ek.getShaderInfoLog(fk);
          if (ik) throw kk.vertexCompilationError = ik, new Error("VERTEX SHADER " + ik)
        }
        if (!ek.getShaderParameter(Sk, ek.COMPILE_STATUS)) {
          const ik = ek.getShaderInfoLog(Sk);
          if (ik) throw kk.fragmentCompilationError = ik, new Error("FRAGMENT SHADER " + ik)
        }
        const ik = Dk.getProgramInfoLog(bk);
        if (ik) throw kk.programLinkError = ik, new Error(ik)
      }
      if (ik) {
        Dk.validateProgram(bk);
        if (!Dk.getProgramParameter(bk, Dk.VALIDATE_STATUS)) {
          const ek = Dk.getProgramInfoLog(bk);
          if (ek) throw kk.programValidationError = ek, new Error(ek)
        }
      }
      Dk.deleteShader(fk), Dk.deleteShader(Sk), kk.vertexShader = void 0, kk.fragmentShader = void 0, kk.onCompiled && (kk.onCompiled(), kk.onCompiled = void 0)
    }

    function Hk(kk, ek, ik, Dk, fk, Sk, bk, Pk, Kk) {
      let xk = arguments.length > 10 ? arguments[10] : void 0,
        nk = arguments.length > 11 ? arguments[11] : void 0,
        Uk = arguments.length > 12 ? arguments[12] : void 0;
      const Hk = rk(kk.context);
      nk || (nk = Hk.createRawShaderProgramInjection ?? mk), Uk || (Uk = Hk.createShaderProgramInjection ?? Mk);
      const wk = kk;
      wk.program = Dk ? nk(wk, ek, ik, wk.context, Kk) : Uk(wk, ek, ik, Pk, wk.context, Kk), wk.program.__SPECTOR_rebuildProgram = bk, xk()
    }

    function wk(kk, ek, ik, Dk, Sk, bk) {
      return lk((0, fk.c)(kk, ik, Dk), ek, Sk, bk)
    }

    function lk(kk, ek, ik, Dk) {
      const fk = ik.createShader("vertex" === ek ? ik.VERTEX_SHADER : ik.FRAGMENT_SHADER);
      if (!fk) {
        let kk, fk = ik.NO_ERROR;
        for (;
          (kk = ik.getError()) !== ik.NO_ERROR;) fk = kk;
        throw new Error(`Something went wrong while creating a gl ${ek} shader object. gl error=${fk}, gl isContextLost=${ik.isContextLost()}, _contextWasLost=${Dk}`)
      }
      return ik.shaderSource(fk, kk), ik.compileShader(fk), fk
    }

    function pk(kk, ek) {
      ek.useProgram(kk)
    }

    function yk(kk, ek) {
      const ik = kk;
      if (!ik.isParallelCompiled) return void ek(kk);
      const Dk = ik.onCompiled;
      ik.onCompiled = () => {
        Dk?.(), ek(kk)
      }
    }
  },
  39398: (kk, ek, ik) => {
    ik.d(ek, {
      ThinEngine: () => Lk
    });
    var Dk = ik(39403),
      fk = ik(39437),
      Sk = ik(39467),
      bk = ik(39483),
      rk = ik(38272),
      Pk = ik(39429);
    class mk {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(kk, ek, ik, Dk, fk) {
        if (fk.drawBuffersExtensionDisabled) {
          const ek = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          kk = kk.replace(ek, "")
        }
        return kk
      }
    }
    const Mk = /(flat\s)?\s*varying\s*.*/;
    class Kk {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(kk) {
        return kk.replace("attribute", "in")
      }
      varyingCheck(kk, ek) {
        return Mk.test(kk)
      }
      varyingProcessor(kk, ek) {
        return kk.replace("varying", ek ? "in" : "out")
      }
      postProcessor(kk, ek, ik) {
        const Dk = -1 !== kk.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (kk = (kk = kk.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), ik) {
          const ik = -1 !== kk.search(/layout *\(location *= *0\) *out/g),
            fk = -1 !== ek.indexOf("#define DUAL_SOURCE_BLENDING"),
            Sk = fk ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          fk && (kk = "#extension GL_EXT_blend_func_extended : require\n" + kk), kk = (kk = (kk = (kk = (kk = (kk = (kk = kk.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (Dk || ik ? "" : Sk) + "void main(")
        } else {
          ek.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (kk = "invariant gl_Position;\n" + kk);
          if (-1 !== ek.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + kk
        }
        return kk
      }
    }
    var xk = ik(39486),
      nk = ik(39501),
      Uk = ik(39509),
      Hk = ik(39391),
      wk = ik(39445),
      lk = ik(39420),
      pk = ik(39517),
      yk = ik(39475);
    class Yk {}
    class Lk extends Sk.c {
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
        return Dk.e.ShadersRepository
      }
      static set ShadersRepository(kk) {
        Dk.e.ShadersRepository = kk
      }
      get supportsUniformBuffers() {
        return this.VH > 1 && !this.disableUniformBuffers
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
      constructor(kk, ek, ik, Dk) {
        if (ik = ik || {}, super(ek ?? ik.antialias, ik, Dk), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !kk) return;
        let Sk;
        if (kk.getContext) {
          if (Sk = kk, void 0 === ik.preserveDrawingBuffer && (ik.preserveDrawingBuffer = !1), void 0 === ik.xrCompatible && (ik.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const kk = navigator.userAgent;
            for (const ek of Lk.ExceptionList) {
              const Dk = ek.key,
                fk = ek.targets;
              if (new RegExp(Dk).test(kk)) {
                if (ek.capture && ek.captureConstraint) {
                  const ik = ek.capture,
                    Dk = ek.captureConstraint,
                    fk = new RegExp(ik).exec(kk);
                  if (fk && fk.length > 0) {
                    if (parseInt(fk[fk.length - 1]) >= Dk) continue
                  }
                }
                for (const kk of fk) switch (kk) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    ik.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, fk.y)(this._gl)
            } : (this._onContextLost = kk => {
              kk.preventDefault(), this._contextWasLost = !0, (0, fk.y)(this._gl), rk.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, Sk.addEventListener("webglcontextrestored", this._onContextRestored, !1), ik.powerPreference = ik.powerPreference || "high-performance"), Sk.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (ik.xrCompatible = !1), !ik.disableWebGL2Support) try {
            this._gl = Sk.getContext("webgl2", ik) || Sk.getContext("experimental-webgl2", ik), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (Mk) {}
          if (!this._gl) {
            if (!Sk) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = Sk.getContext("webgl", ik) || Sk.getContext("experimental-webgl", ik)
            } catch (Mk) {
              throw new Error("WebGL not supported", {
                cause: Mk
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = kk, Sk = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const ek = this._gl.getContextAttributes();
          ek && (ik.stencil = ek.stencil)
        }
        this._sharedInit(Sk), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== ik.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = ik.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let fk = 0; fk < this._caps.maxVertexAttribs; fk++) this._currentBufferPointers[fk] = new Yk;
        this._shaderProcessor = this.VH > 1 ? new Kk : new mk;
        const bk = `Babylon.js v${Lk.Version}`;
        rk.b.Log(bk + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", bk);
        const Pk = (0, fk.A)(this._gl);
        Pk.validateShaderPrograms = this.validateShaderPrograms, Pk.parallelShaderCompile = this._caps.parallelShaderCompile
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
        const ek = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!ek, this._alphaState = new yk.e(this._caps.blendParametersPerTarget), ek && (this._gl.blendEquationSeparateIndexed = ek.blendEquationSeparateiOES.bind(ek), this._gl.blendEquationIndexed = ek.blendEquationiOES.bind(ek), this._gl.blendFuncSeparateIndexed = ek.blendFuncSeparateiOES.bind(ek), this._gl.blendFuncIndexed = ek.blendFunciOES.bind(ek), this._gl.colorMaskIndexed = ek.colorMaskiOES.bind(ek), this._gl.disableIndexed = ek.disableiOES.bind(ek), this._gl.enableIndexed = ek.enableiOES.bind(ek)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const kk = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== kk) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = kk.drawBuffersWEBGL.bind(kk), this._caps.maxDrawBuffers = this._gl.getParameter(kk.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let ek = 0; ek < 16; ek++) this._gl["COLOR_ATTACHMENT" + ek + "_WEBGL"] = kk["COLOR_ATTACHMENT" + ek + "_WEBGL"]
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
            ek = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (kk && ek && (this._caps.highPrecisionShaderSupported = 0 !== kk.precision && 0 !== ek.precision, this._caps.shaderFloatPrecision = Math.min(kk.precision, ek.precision)), !this._shouldUseHighPrecisionShader) {
            const kk = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              ek = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            kk && ek && (this._caps.shaderFloatPrecision = Math.min(kk.precision, ek.precision))
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
        for (let ik = 0; ik < this._maxSimultaneousTextures; ik++) this._nextFreeTextureSlots.push(ik);
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
      get VH() {
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
      clear(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Sk = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = Sk;
        let bk = 0;
        if (ek && kk) {
          let ek = !0;
          if (this._currentRenderTarget) {
            const ik = this._currentRenderTarget.texture?.format;
            if (void 0 !== ik && (0, pk.f)(ik)) {
              const ik = this._currentRenderTarget.texture?.type;
              void 0 !== ik && (0, pk.i)(ik) ? (Lk._TempClearColorUint32[0] = 255 * kk.r, Lk._TempClearColorUint32[1] = 255 * kk.g, Lk._TempClearColorUint32[2] = 255 * kk.b, Lk._TempClearColorUint32[3] = 255 * kk.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, Lk._TempClearColorUint32), ek = !1) : (Lk._TempClearColorInt32[0] = 255 * kk.r, Lk._TempClearColorInt32[1] = 255 * kk.g, Lk._TempClearColorInt32[2] = 255 * kk.b, Lk._TempClearColorInt32[3] = 255 * kk.a, this._gl.clearBufferiv(this._gl.COLOR, 0, Lk._TempClearColorInt32), ek = !1)
            }
          }
          ek && (this._gl.clearColor(kk.r, kk.g, kk.b, void 0 !== kk.a ? kk.a : 1), bk |= this._gl.COLOR_BUFFER_BIT)
        }
        ik && (this.Xik ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), bk |= this._gl.DEPTH_BUFFER_BIT), Dk && (this._gl.clearStencil(fk), bk |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(bk)
      }
      _clearColorAttachment(kk, ek, ik, Dk) {
        if ((0, pk.f)(ik)) {
          const ik = (0, pk.i)(Dk),
            fk = ik ? Lk._TempClearColorUint32 : Lk._TempClearColorInt32;
          return fk[0] = ek.r, fk[1] = ek.g, fk[2] = ek.b, fk[3] = ek.a, void(ik ? this._gl.clearBufferuiv(this._gl.COLOR, kk, fk) : this._gl.clearBufferiv(this._gl.COLOR, kk, fk))
        }
        Lk._TempClearColorFloat32[0] = ek.r, Lk._TempClearColorFloat32[1] = ek.g, Lk._TempClearColorFloat32[2] = ek.b, Lk._TempClearColorFloat32[3] = ek.a, this._gl.clearBufferfv(this._gl.COLOR, kk, Lk._TempClearColorFloat32)
      }
      _viewport(kk, ek, ik, Dk) {
        kk === this._viewportCached.x && ek === this._viewportCached.y && ik === this._viewportCached.z && Dk === this._viewportCached.w || (this._viewportCached.x = kk, this._viewportCached.y = ek, this._viewportCached.z = ik, this._viewportCached.w = Dk, this._gl.viewport(kk, ek, ik, Dk))
      }
      VY() {
        super.VY(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 ? arguments[2] : void 0,
          Dk = arguments.length > 3 ? arguments[3] : void 0,
          fk = arguments.length > 4 ? arguments[4] : void 0,
          Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Pk = kk;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = kk, this._integerMRTAttachmentsMask = !kk.isMulti && kk.texture && (0, pk.f)(kk.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(Pk._framebuffer);
        const mk = this._gl;
        kk.isMulti || (kk.is2DArray || kk.is3D ? (mk.framebufferTextureLayer(mk.FRAMEBUFFER, mk.COLOR_ATTACHMENT0, kk.texture._hardwareTexture?.underlyingResource, Sk, bk), Pk._currentLOD = Sk) : kk.isCube ? mk.framebufferTexture2D(mk.FRAMEBUFFER, mk.COLOR_ATTACHMENT0, mk.TEXTURE_CUBE_MAP_POSITIVE_X + ek, kk.texture._hardwareTexture?.underlyingResource, Sk) : Pk._currentLOD !== Sk && (mk.framebufferTexture2D(mk.FRAMEBUFFER, mk.COLOR_ATTACHMENT0, mk.TEXTURE_2D, kk.texture._hardwareTexture?.underlyingResource, Sk), Pk._currentLOD = Sk));
        const Mk = kk._depthStencilTexture;
        if (Mk) {
          kk.is3D && (kk.texture.width === Mk.width && kk.texture.height === Mk.height && kk.texture.depth === Mk.depth || rk.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const ik = kk._depthStencilTextureWithStencil ? mk.DEPTH_STENCIL_ATTACHMENT : mk.DEPTH_ATTACHMENT;
          kk.is2DArray || kk.is3D ? mk.framebufferTextureLayer(mk.FRAMEBUFFER, ik, Mk._hardwareTexture?.underlyingResource, Sk, bk) : kk.isCube ? mk.framebufferTexture2D(mk.FRAMEBUFFER, ik, mk.TEXTURE_CUBE_MAP_POSITIVE_X + ek, Mk._hardwareTexture?.underlyingResource, Sk) : mk.framebufferTexture2D(mk.FRAMEBUFFER, ik, mk.TEXTURE_2D, Mk._hardwareTexture?.underlyingResource, Sk)
        }
        Pk._MSAAFramebuffer && this._bindUnboundFramebuffer(Pk._MSAAFramebuffer), this._cachedViewport && !fk ? this.setViewport(this._cachedViewport, ik, Dk) : (ik || (ik = kk.width, Sk && (ik /= Math.pow(2, Sk))), Dk || (Dk = kk.height, Sk && (Dk /= Math.pow(2, Sk))), this._viewport(0, 0, ik, Dk)), this.wipeCaches()
      }
      setStateCullFaceType(kk, ek) {
        const ik = this.cullBackFaces ?? kk ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== ik || ek) && (this._depthCullingState.cullFace = ik)
      }
      setState(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 ? arguments[2] : void 0,
          Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          fk = arguments.length > 4 ? arguments[4] : void 0,
          Sk = arguments.length > 5 ? arguments[5] : void 0,
          bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== kk || ik) && (this._depthCullingState.cull = kk), this.setStateCullFaceType(fk, ik), this.setZOffset(ek), this.setZOffsetUnits(bk);
        const rk = Dk ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== rk || ik) && (this._depthCullingState.frontFace = rk), this._stencilStateComposer.stencilMaterial = Sk
      }
      _resolveAndGenerateMipMapsFramebuffer(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        kk.disableAutomaticMSAAResolve || (kk.isMulti ? this.resolveMultiFramebuffer(kk) : this.resolveFramebuffer(kk)), ek || (kk.isMulti ? this.generateMipMapsMultiFramebuffer(kk) : this.generateMipMapsFramebuffer(kk))
      }
      _bindUnboundFramebuffer(kk) {
        this._currentFramebuffer !== kk && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, kk), this._currentFramebuffer = kk)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(kk) {
        const ek = this._getTextureTarget(kk);
        this._bindTextureDirectly(ek, kk, !0), this._gl.generateMipmap(ek), this._bindTextureDirectly(ek, null)
      }
      unBindFramebuffer(kk, ek, ik) {
        const Dk = kk;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(kk, ek), ik && (Dk._MSAAFramebuffer && this._bindUnboundFramebuffer(Dk._framebuffer), ik()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(kk) {
        kk.isMulti || !kk.texture?.generateMipMaps || kk.isCube || this.generateMipmaps(kk.texture)
      }
      resolveFramebuffer(kk) {
        const ek = kk,
          ik = this._gl;
        if (!ek._MSAAFramebuffer || ek.isMulti) return;
        let Dk = ek.resolveMSAAColors ? ik.COLOR_BUFFER_BIT : 0;
        Dk |= ek._generateDepthBuffer && ek.resolveMSAADepth ? ik.DEPTH_BUFFER_BIT : 0, Dk |= ek._generateStencilBuffer && ek.resolveMSAAStencil ? ik.STENCIL_BUFFER_BIT : 0, ik.bindFramebuffer(ik.READ_FRAMEBUFFER, ek._MSAAFramebuffer), ik.bindFramebuffer(ik.DRAW_FRAMEBUFFER, ek._framebuffer), ik.blitFramebuffer(0, 0, kk.width, kk.height, 0, 0, kk.width, kk.height, Dk, ik.NEAREST)
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
      createVertexBuffer(kk, ek, ik) {
        return this._createVertexBuffer(kk, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(kk, ek) {
        const ik = this._gl.createBuffer();
        if (!ik) throw new Error("Unable to create vertex buffer");
        const Dk = new xk.b(ik);
        return this.bindArrayBuffer(Dk), "number" !== typeof kk ? kk instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(kk), ek), Dk.vK = 4 * kk.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, kk, ek), Dk.vK = kk.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(kk), ek), Dk.vK = kk), this._resetVertexBufferBinding(), Dk.references = 1, Dk
      }
      createDynamicVertexBuffer(kk, ek) {
        return this._createVertexBuffer(kk, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(kk, ek, ik) {
        const Dk = this._gl.createBuffer(),
          fk = new xk.b(Dk);
        if (!Dk) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(fk);
        const Sk = this._normalizeIndexData(kk);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Sk, ek ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), fk.references = 1, fk.is32Bits = 4 === Sk.BYTES_PER_ELEMENT, fk
      }
      _normalizeIndexData(kk) {
        if (2 === kk.BYTES_PER_ELEMENT) return kk;
        if (this._caps.uintIndices) {
          if (kk instanceof Uint32Array) return kk;
          for (let ek = 0; ek < kk.length; ek++)
            if (kk[ek] >= 65535) return new Uint32Array(kk);
          return new Uint16Array(kk)
        }
        return new Uint16Array(kk)
      }
      bindArrayBuffer(kk) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(kk, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(kk, ek, ik) {
        const Dk = kk.program,
          fk = this._gl.getUniformBlockIndex(Dk, ek);
        this._gl.uniformBlockBinding(Dk, fk, ik)
      }
      bindIndexBuffer(kk) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(kk, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(kk, ek) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[ek] !== kk) && (this._gl.bindBuffer(ek, kk ? kk.underlyingResource : null), this._currentBoundBuffer[ek] = kk)
      }
      updateArrayBuffer(kk) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, kk)
      }
      _vertexAttribPointer(kk, ek, ik, Dk, fk, Sk, bk) {
        const rk = this._currentBufferPointers[ek];
        if (!rk) return;
        let Pk = !1;
        rk.active ? (rk.buffer !== kk && (rk.buffer = kk, Pk = !0), rk.size !== ik && (rk.size = ik, Pk = !0), rk.type !== Dk && (rk.type = Dk, Pk = !0), rk.normalized !== fk && (rk.normalized = fk, Pk = !0), rk.stride !== Sk && (rk.stride = Sk, Pk = !0), rk.offset !== bk && (rk.offset = bk, Pk = !0)) : (Pk = !0, rk.active = !0, rk.index = ek, rk.size = ik, rk.type = Dk, rk.normalized = fk, rk.stride = Sk, rk.offset = bk, rk.buffer = kk), (Pk || this._vaoRecordInProgress) && (this.bindArrayBuffer(kk), Dk === this._gl.UNSIGNED_INT || Dk === this._gl.INT ? this._gl.vertexAttribIPointer(ek, ik, Dk, Sk, bk) : this._gl.vertexAttribPointer(ek, ik, Dk, fk, Sk, bk))
      }
      _bindIndexBufferWithCache(kk) {
        null != kk && this._cachedIndexBuffer !== kk && (this._cachedIndexBuffer = kk, this.bindIndexBuffer(kk), this._uintIndicesCurrentlySet = kk.is32Bits)
      }
      _bindVertexBuffersAttributes(kk, ek, ik) {
        const Dk = ek.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let fk = 0; fk < Dk.length; fk++) {
          const Sk = ek.getAttributeLocation(fk);
          if (Sk >= 0) {
            const ek = Dk[fk];
            let bk = null;
            if (ik && (bk = ik[ek]), bk || (bk = kk[ek]), !bk) continue;
            this._gl.enableVertexAttribArray(Sk), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[Sk] = !0);
            const rk = bk.getBuffer();
            rk && (this._vertexAttribPointer(rk, Sk, bk.getSize(), bk.type, bk.normalized, bk.byteStride, bk.byteOffset), bk.getIsInstanced() && (this._gl.vertexAttribDivisor(Sk, bk.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(Sk), this._currentInstanceBuffers.push(rk))))
          }
        }
      }
      recordVertexArrayObject(kk, ek, ik, Dk) {
        const fk = this._gl.createVertexArray();
        if (!fk) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(fk), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(kk, ik, Dk), this.bindIndexBuffer(ek), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), fk
      }
      bindVertexArrayObject(kk, ek) {
        this._cachedVertexArrayObject !== kk && (this._cachedVertexArrayObject = kk, this._gl.bindVertexArray(kk), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != ek && ek.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(kk, ek, ik, Dk, fk) {
        if (this._cachedVertexBuffers !== kk || this._cachedEffectForVertexBuffers !== fk) {
          this._cachedVertexBuffers = kk, this._cachedEffectForVertexBuffers = fk;
          const ek = fk.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let Sk = 0;
          for (let bk = 0; bk < ek; bk++)
            if (bk < ik.length) {
              const ek = fk.getAttributeLocation(bk);
              ek >= 0 && (this._gl.enableVertexAttribArray(ek), this._vertexAttribArraysEnabled[ek] = !0, this._vertexAttribPointer(kk, ek, ik[bk], this._gl.FLOAT, !1, Dk, Sk)), Sk += 4 * ik[bk]
            }
        }
        this._bindIndexBufferWithCache(ek)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(kk, ek, ik, Dk) {
        this._cachedVertexBuffers === kk && this._cachedEffectForVertexBuffers === ik || (this._cachedVertexBuffers = kk, this._cachedEffectForVertexBuffers = ik, this._bindVertexBuffersAttributes(kk, ik, Dk)), this._bindIndexBufferWithCache(ek)
      }
      unbindInstanceAttributes() {
        let kk;
        for (let ek = 0, ik = this._currentInstanceLocations.length; ek < ik; ek++) {
          const ik = this._currentInstanceBuffers[ek];
          kk != ik && ik.references && (kk = ik, this.bindArrayBuffer(ik));
          const Dk = this._currentInstanceLocations[ek];
          this._gl.vertexAttribDivisor(Dk, 0)
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
      updateAndBindInstancesBuffer(kk, ek, ik) {
        if (this.bindArrayBuffer(kk), ek && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, ek), void 0 !== ik[0].index) this.bindInstancesBuffer(kk, ik, !0);
        else
          for (let Dk = 0; Dk < 4; Dk++) {
            const ek = ik[Dk];
            this._vertexAttribArraysEnabled[ek] || (this._gl.enableVertexAttribArray(ek), this._vertexAttribArraysEnabled[ek] = !0), this._vertexAttribPointer(kk, ek, 4, this._gl.FLOAT, !1, 64, 16 * Dk), this._gl.vertexAttribDivisor(ek, 1), this._currentInstanceLocations.push(ek), this._currentInstanceBuffers.push(kk)
          }
      }
      bindInstancesBuffer(kk, ek) {
        let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(kk);
        let Dk = 0;
        if (ik)
          for (let fk = 0; fk < ek.length; fk++) {
            Dk += 4 * ek[fk].attributeSize
          }
        for (let fk = 0; fk < ek.length; fk++) {
          const ik = ek[fk];
          void 0 === ik.index && (ik.index = this._currentEffect.getAttributeLocationByName(ik.attributeName)), ik.index < 0 || (this._vertexAttribArraysEnabled[ik.index] || (this._gl.enableVertexAttribArray(ik.index), this._vertexAttribArraysEnabled[ik.index] = !0), this._vertexAttribPointer(kk, ik.index, ik.attributeSize, ik.attributeType || this._gl.FLOAT, ik.normalized || !1, Dk, ik.offset), this._gl.vertexAttribDivisor(ik.index, void 0 === ik.divisor ? 1 : ik.divisor), this._currentInstanceLocations.push(ik.index), this._currentInstanceBuffers.push(kk))
        }
      }
      disableInstanceAttributeByName(kk) {
        if (!this._currentEffect) return;
        const ek = this._currentEffect.getAttributeLocationByName(kk);
        this.disableInstanceAttribute(ek)
      }
      disableInstanceAttribute(kk) {
        let ek, ik = !1;
        for (; - 1 !== (ek = this._currentInstanceLocations.indexOf(kk));) this._currentInstanceLocations.splice(ek, 1), this._currentInstanceBuffers.splice(ek, 1), ik = !0;
        ik && (this._gl.vertexAttribDivisor(kk, 0), this.disableAttributeByIndex(kk))
      }
      disableAttributeByIndex(kk) {
        this._gl.disableVertexAttribArray(kk), this._vertexAttribArraysEnabled[kk] = !1, this._currentBufferPointers[kk].active = !1
      }
      draw(kk, ek, ik, Dk) {
        this.drawElementsType(kk ? 0 : 1, ek, ik, Dk)
      }
      drawPointClouds(kk, ek, ik) {
        this.drawArraysType(2, kk, ek, ik)
      }
      drawUnIndexed(kk, ek, ik, Dk) {
        this.drawArraysType(kk ? 0 : 1, ek, ik, Dk)
      }
      drawElementsType(kk, ek, ik, Dk) {
        this.applyStates(), this._reportDrawCall();
        const fk = this._drawMode(kk),
          Sk = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          bk = this._uintIndicesCurrentlySet ? 4 : 2;
        Dk ? this._gl.drawElementsInstanced(fk, ik, Sk, ek * bk, Dk) : this._gl.drawElements(fk, ik, Sk, ek * bk)
      }
      drawArraysType(kk, ek, ik, Dk) {
        this.applyStates(), this._reportDrawCall();
        const fk = this._drawMode(kk);
        Dk ? this._gl.drawArraysInstanced(fk, ek, ik, Dk) : this._gl.drawArrays(fk, ek, ik)
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
        const ek = kk.getPipelineContext();
        ek && this._deletePipelineContext(ek)
      }
      _deletePipelineContext(kk) {
        const ek = kk;
        ek && ek.program && (ek.program.__SPECTOR_rebuildProgram = null, (0, lk.i)(ek), this._gl && (this._currentProgram === ek.program && this._setProgram(null), this._gl.deleteProgram(ek.program)))
      }
      _getGlobalDefines(kk) {
        return (0, wk.f)(kk, this.isNDCHalfZRange, this.Xik, this.useExactSrgbConversions)
      }
      createEffect(kk, ek, ik, Sk, bk, rk, Pk, mk, Mk) {
        let Kk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          xk = arguments.length > 10 ? arguments[10] : void 0;
        const nk = "string" === typeof kk ? kk : kk.vertexToken || kk.vertexSource || kk.vertexElement || kk.vertex,
          Uk = "string" === typeof kk ? kk : kk.fragmentToken || kk.fragmentSource || kk.fragmentElement || kk.fragment,
          Hk = this._getGlobalDefines(),
          wk = void 0 !== ek.attributes;
        let lk = bk ?? ek.defines ?? "";
        Hk && (lk += Hk);
        const pk = nk + "+" + Uk + "@" + lk;
        if (this._compiledEffects[pk]) {
          const kk = this._compiledEffects[pk];
          return Pk && kk.isReady() && Pk(kk), kk._refCount++, kk
        }
        this._gl && (0, fk.A)(this._gl);
        const yk = new Dk.e(kk, ek, wk ? this : ik, Sk, this, bk, rk, Pk, mk, Mk, pk, ek.shaderLanguage ?? Kk, ek.extraInitializationsAsync ?? xk);
        return this._compiledEffects[pk] = yk, yk
      }
      _getShaderSource(kk) {
        return this._gl.getShaderSource(kk)
      }
      createRawShaderProgram(kk, ek, ik, Dk) {
        let Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const bk = (0, fk.A)(this._gl);
        return bk._contextWasLost = this._contextWasLost, bk.validateShaderPrograms = this.validateShaderPrograms, (0, fk.t)(kk, ek, ik, Dk || this._gl, Sk)
      }
      createShaderProgram(kk, ek, ik, Dk, Sk) {
        let bk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const rk = (0, fk.A)(this._gl);
        return rk._contextWasLost = this._contextWasLost, rk.validateShaderPrograms = this.validateShaderPrograms, (0, fk.x)(kk, ek, ik, Dk, Sk || this._gl, bk)
      }
      inlineShaderCode(kk) {
        return kk
      }
      createPipelineContext(kk) {
        if (this._gl) {
          (0, fk.A)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const ek = (0, fk.q)(this._gl, kk);
        return ek.engine = this, ek
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(kk) {
        return (0, fk.h)(kk, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(kk, ek, ik, Dk, Sk, bk, rk, Pk, mk, Mk, Kk) {
        const xk = (0, fk.A)(this._gl);
        return xk._contextWasLost = this._contextWasLost, xk.validateShaderPrograms = this.validateShaderPrograms, xk._createShaderProgramInjection = this._createShaderProgram.bind(this), xk.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), xk.createShaderProgramInjection = this.createShaderProgram.bind(this), xk.loadFileInjection = this._loadFile.bind(this), (0, fk.l)(kk, ek, ik, Dk, Sk, bk, rk, Pk, mk, Mk, Kk)
      }
      _createShaderProgram(kk, ek, ik, Dk) {
        let Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, fk.d)(kk, ek, ik, Dk, Sk)
      }
      _isRenderingStateCompiled(kk) {
        return !this._isDisposed && (0, fk.i)(kk, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(kk, ek) {
        (0, fk.e)(kk, ek)
      }
      getUniforms(kk, ek) {
        const ik = new Array,
          Dk = kk;
        for (let fk = 0; fk < ek.length; fk++) ik.push(this._gl.getUniformLocation(Dk.program, ek[fk]));
        return ik
      }
      getAttributes(kk, ek) {
        const ik = [],
          Dk = kk;
        for (let Sk = 0; Sk < ek.length; Sk++) try {
          ik.push(this._gl.getAttribLocation(Dk.program, ek[Sk]))
        } catch (fk) {
          ik.push(-1)
        }
        return ik
      }
      enableEffect(kk) {
        (kk = null !== kk && (0, bk.b)(kk) ? kk.effect : kk) && kk !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(kk), this._currentEffect = kk, kk.onBind && kk.onBind(kk), kk._onBindObservable && kk._onBindObservable.notifyObservers(kk))
      }
      setInt(kk, ek) {
        return !!kk && (this._gl.uniform1i(kk, ek), !0)
      }
      setInt2(kk, ek, ik) {
        return !!kk && (this._gl.uniform2i(kk, ek, ik), !0)
      }
      setInt3(kk, ek, ik, Dk) {
        return !!kk && (this._gl.uniform3i(kk, ek, ik, Dk), !0)
      }
      setInt4(kk, ek, ik, Dk, fk) {
        return !!kk && (this._gl.uniform4i(kk, ek, ik, Dk, fk), !0)
      }
      setIntArray(kk, ek) {
        return !!kk && (this._gl.uniform1iv(kk, ek), !0)
      }
      setIntArray2(kk, ek) {
        return !(!kk || ek.length % 2 !== 0) && (this._gl.uniform2iv(kk, ek), !0)
      }
      setIntArray3(kk, ek) {
        return !(!kk || ek.length % 3 !== 0) && (this._gl.uniform3iv(kk, ek), !0)
      }
      setIntArray4(kk, ek) {
        return !(!kk || ek.length % 4 !== 0) && (this._gl.uniform4iv(kk, ek), !0)
      }
      setUInt(kk, ek) {
        return !!kk && (this._gl.uniform1ui(kk, ek), !0)
      }
      setUInt2(kk, ek, ik) {
        return !!kk && (this._gl.uniform2ui(kk, ek, ik), !0)
      }
      setUInt3(kk, ek, ik, Dk) {
        return !!kk && (this._gl.uniform3ui(kk, ek, ik, Dk), !0)
      }
      setUInt4(kk, ek, ik, Dk, fk) {
        return !!kk && (this._gl.uniform4ui(kk, ek, ik, Dk, fk), !0)
      }
      setUIntArray(kk, ek) {
        return !!kk && (this._gl.uniform1uiv(kk, ek), !0)
      }
      setUIntArray2(kk, ek) {
        return !(!kk || ek.length % 2 !== 0) && (this._gl.uniform2uiv(kk, ek), !0)
      }
      setUIntArray3(kk, ek) {
        return !(!kk || ek.length % 3 !== 0) && (this._gl.uniform3uiv(kk, ek), !0)
      }
      setUIntArray4(kk, ek) {
        return !(!kk || ek.length % 4 !== 0) && (this._gl.uniform4uiv(kk, ek), !0)
      }
      setArray(kk, ek) {
        return !!kk && (!(ek.length < 1) && (this._gl.uniform1fv(kk, ek), !0))
      }
      setArray2(kk, ek) {
        return !(!kk || ek.length % 2 !== 0) && (this._gl.uniform2fv(kk, ek), !0)
      }
      setArray3(kk, ek) {
        return !(!kk || ek.length % 3 !== 0) && (this._gl.uniform3fv(kk, ek), !0)
      }
      setArray4(kk, ek) {
        return !(!kk || ek.length % 4 !== 0) && (this._gl.uniform4fv(kk, ek), !0)
      }
      setMatrices(kk, ek) {
        return !!kk && (this._gl.uniformMatrix4fv(kk, !1, ek), !0)
      }
      setMatrix3x3(kk, ek) {
        return !!kk && (this._gl.uniformMatrix3fv(kk, !1, ek), !0)
      }
      setMatrix2x2(kk, ek) {
        return !!kk && (this._gl.uniformMatrix2fv(kk, !1, ek), !0)
      }
      setFloat(kk, ek) {
        return !!kk && (this._gl.uniform1f(kk, ek), !0)
      }
      setFloat2(kk, ek, ik) {
        return !!kk && (this._gl.uniform2f(kk, ek, ik), !0)
      }
      setFloat3(kk, ek, ik, Dk) {
        return !!kk && (this._gl.uniform3f(kk, ek, ik, Dk), !0)
      }
      setFloat4(kk, ek, ik, Dk, fk) {
        return !!kk && (this._gl.uniform4f(kk, ek, ik, Dk, fk), !0)
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
      _getSamplingParameters(kk, ek) {
        const ik = this._gl;
        let Dk = ik.NEAREST,
          fk = ik.NEAREST,
          Sk = !1;
        switch (kk) {
          case 11:
            Dk = ik.LINEAR, fk = ek ? ik.LINEAR_MIPMAP_NEAREST : ik.LINEAR;
            break;
          case 3:
            Dk = ik.LINEAR, Sk = !0, fk = ek ? ik.LINEAR_MIPMAP_LINEAR : ik.LINEAR;
            break;
          case 8:
            Sk = !0, Dk = ik.NEAREST, fk = ek ? ik.NEAREST_MIPMAP_LINEAR : ik.NEAREST;
            break;
          case 4:
            Dk = ik.NEAREST, fk = ek ? ik.NEAREST_MIPMAP_NEAREST : ik.NEAREST;
            break;
          case 5:
            Dk = ik.NEAREST, fk = ek ? ik.LINEAR_MIPMAP_NEAREST : ik.LINEAR;
            break;
          case 6:
            Sk = !0, Dk = ik.NEAREST, fk = ek ? ik.LINEAR_MIPMAP_LINEAR : ik.LINEAR;
            break;
          case 7:
            Dk = ik.NEAREST, fk = ik.LINEAR;
            break;
          case 1:
            Dk = ik.NEAREST, fk = ik.NEAREST;
            break;
          case 9:
            Dk = ik.LINEAR, fk = ek ? ik.NEAREST_MIPMAP_NEAREST : ik.NEAREST;
            break;
          case 10:
            Sk = !0, Dk = ik.LINEAR, fk = ek ? ik.NEAREST_MIPMAP_LINEAR : ik.NEAREST;
            break;
          case 2:
            Dk = ik.LINEAR, fk = ik.LINEAR;
            break;
          case 12:
            Dk = ik.LINEAR, fk = ik.NEAREST
        }
        return {
          min: fk,
          mag: Dk,
          hasMipMaps: Sk
        }
      }
      _createTexture() {
        const kk = this._gl.createTexture();
        if (!kk) throw new Error("Unable to create texture");
        return kk
      }
      _createHardwareTexture() {
        return new Uk.c(this._createTexture(), this._gl)
      }
      _createInternalTexture(kk, ek) {
        let ik, Dk, fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Sk = !1,
          bk = 0,
          Pk = 3,
          mk = 5,
          Mk = !1,
          Kk = 1,
          xk = !1,
          nk = 0,
          Uk = !1;
        void 0 !== ek && "object" === typeof ek ? (ik = !!ek.generateMipMaps, Sk = !!ek.createMipMaps, bk = void 0 === ek.type ? 0 : ek.type, Pk = void 0 === ek.samplingMode ? 3 : ek.samplingMode, mk = void 0 === ek.format ? 5 : ek.format, Mk = void 0 !== ek.useSRGBBuffer && ek.useSRGBBuffer, Kk = ek.samples ?? 1, Dk = ek.label, xk = !!ek.createMSAATexture, nk = ek.comparisonFunction || 0, Uk = !!ek.isCube) : ik = !!ek, Mk && (Mk = this._caps.supportSRGBBuffers && (this.VH > 1 || this.isWebGPU)), (1 !== bk || this._caps.textureFloatLinearFiltering) && (2 !== bk || this._caps.textureHalfFloatLinearFiltering) || (Pk = 1), 1 !== bk || this._caps.textureFloat || (bk = 0, rk.b.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const wk = (0, pk.e)(mk),
          lk = (0, pk.b)(mk),
          yk = this._gl,
          Yk = new Hk.b(this, fk),
          Lk = kk.width || kk,
          Ck = kk.height || kk,
          Ak = kk.depth || 0,
          jk = kk.layers || 0,
          sk = this._getSamplingParameters(Pk, (ik || Sk) && !wk),
          dk = 0 !== jk ? yk.TEXTURE_2D_ARRAY : 0 !== Ak ? yk.TEXTURE_3D : Uk ? yk.TEXTURE_CUBE_MAP : yk.TEXTURE_2D,
          Vk = wk ? this._getInternalFormatFromDepthTextureFormat(mk, !0, lk) : this._getRGBABufferInternalSizedFormat(bk, mk, Mk),
          Fk = wk ? lk ? yk.DEPTH_STENCIL : yk.DEPTH_COMPONENT : this._getInternalFormat(mk),
          uk = wk ? this._getWebGLTextureTypeFromDepthTextureFormat(mk) : this._getWebGLTextureType(bk);
        if (this._bindTextureDirectly(dk, Yk), 0 !== jk) Yk.is2DArray = !0, yk.texImage3D(dk, 0, Vk, Lk, Ck, jk, 0, Fk, uk, null);
        else if (0 !== Ak) Yk.is3D = !0, yk.texImage3D(dk, 0, Vk, Lk, Ck, Ak, 0, Fk, uk, null);
        else if (Uk) {
          Yk.isCube = !0;
          for (let kk = 0; kk < 6; kk++) yk.texImage2D(yk.TEXTURE_CUBE_MAP_POSITIVE_X + kk, 0, Vk, Lk, Ck, 0, Fk, uk, null)
        } else yk.texImage2D(dk, 0, Vk, Lk, Ck, 0, Fk, uk, null);
        if (yk.texParameteri(dk, yk.TEXTURE_MAG_FILTER, sk.mag), yk.texParameteri(dk, yk.TEXTURE_MIN_FILTER, sk.min), yk.texParameteri(dk, yk.TEXTURE_WRAP_S, yk.CLAMP_TO_EDGE), yk.texParameteri(dk, yk.TEXTURE_WRAP_T, yk.CLAMP_TO_EDGE), wk && this.VH > 1 && (0 === nk ? (yk.texParameteri(dk, yk.TEXTURE_COMPARE_FUNC, 515), yk.texParameteri(dk, yk.TEXTURE_COMPARE_MODE, yk.NONE)) : (yk.texParameteri(dk, yk.TEXTURE_COMPARE_FUNC, nk), yk.texParameteri(dk, yk.TEXTURE_COMPARE_MODE, yk.COMPARE_REF_TO_TEXTURE))), (ik || Sk) && this._gl.generateMipmap(dk), this._bindTextureDirectly(dk, null), Yk._useSRGBBuffer = Mk, Yk.baseWidth = Lk, Yk.baseHeight = Ck, Yk.width = Lk, Yk.height = Ck, Yk.depth = jk || Ak, Yk.isReady = !0, Yk.samples = Kk, Yk.generateMipMaps = ik, Yk.samplingMode = Pk, Yk.type = bk, Yk.format = mk, Yk.label = Dk, Yk.comparisonFunction = nk, this._internalTexturesCache.push(Yk), xk) {
          let kk;
          if (kk = (0, pk.e)(Yk.format) ? this._setupFramebufferDepthAttachments((0, pk.b)(Yk.format), 19 !== Yk.format, Yk.width, Yk.height, Kk, Yk.format, !0) : this._createRenderBuffer(Yk.width, Yk.height, Kk, -1, this._getRGBABufferInternalSizedFormat(Yk.type, Yk.format, Yk._useSRGBBuffer), -1), !kk) throw new Error("Unable to create render buffer");
          Yk._autoMSAAManagement = !0;
          let ek = Yk._hardwareTexture;
          ek || (ek = Yk._hardwareTexture = this._createHardwareTexture()), ek.addMSAARenderBuffer(kk)
        }
        return Yk
      }
      _getUseSRGBBuffer(kk, ek) {
        return kk && this._caps.supportSRGBBuffers && (this.VH > 1 || ek)
      }
      createTexture(kk, ek, ik, Dk) {
        var fk = this;
        let Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          bk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          rk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Pk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          mk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Mk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Kk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          xk = arguments.length > 11 ? arguments[11] : void 0,
          nk = arguments.length > 12 ? arguments[12] : void 0,
          Uk = arguments.length > 13 ? arguments[13] : void 0,
          wk = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(kk, ek, ik, Dk, Sk, bk, rk, (function() {
          for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
          return fk._prepareWebGLTexture(...ek, Mk)
        }), ((kk, ek, ik, fk, Sk, bk) => {
          const rk = this._gl,
            Pk = ik.width === kk && ik.height === ek;
          Sk._creationFlags = Uk ?? 0;
          const mk = this._getTexImageParametersForCreateTexture(Sk.format, Sk._useSRGBBuffer);
          if (Pk) return rk.texImage2D(rk.TEXTURE_2D, 0, mk.internalFormat, mk.format, mk.type, ik), !1;
          const Mk = this._caps.maxTextureSize;
          if (ik.width > Mk || ik.height > Mk || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = kk, this._workingCanvas.height = ek, this._workingContext.drawImage(ik, 0, 0, ik.width, ik.height, 0, 0, kk, ek), rk.texImage2D(rk.TEXTURE_2D, 0, mk.internalFormat, mk.format, mk.type, this._workingCanvas), Sk.width = kk, Sk.height = ek, !1);
          {
            const kk = new Hk.b(this, 2);
            this._bindTextureDirectly(rk.TEXTURE_2D, kk, !0), rk.texImage2D(rk.TEXTURE_2D, 0, mk.internalFormat, mk.format, mk.type, ik), this._rescaleTexture(kk, Sk, Dk, mk.format, (() => {
              this._releaseTexture(kk), this._bindTextureDirectly(rk.TEXTURE_2D, Sk, !0), bk()
            }))
          }
          return !0
        }), Pk, mk, Mk, Kk, xk, nk, wk)
      }
      _getTexImageParametersForCreateTexture(kk, ek) {
        let ik, Dk;
        return 1 === this.VH ? (ik = this._getInternalFormat(kk, ek), Dk = ik) : (ik = this._getInternalFormat(kk, !1), Dk = this._getRGBABufferInternalSizedFormat(0, kk, ek)), {
          internalFormat: Dk,
          format: ik,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(kk, ek, ik, Dk, fk) {}
      _unpackFlipY(kk) {
        this._unpackFlipYCached !== kk && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, kk ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = kk))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(kk) {
        return kk.isCube ? this._gl.TEXTURE_CUBE_MAP : kk.is3D ? this._gl.TEXTURE_3D : kk.is2DArray || kk.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Dk = this._getTextureTarget(ek),
          fk = this._getSamplingParameters(kk, ek.useMipMaps || ik);
        this._setTextureParameterInteger(Dk, this._gl.TEXTURE_MAG_FILTER, fk.mag, ek), this._setTextureParameterInteger(Dk, this._gl.TEXTURE_MIN_FILTER, fk.min), ik && fk.hasMipMaps && (ek.generateMipMaps = !0, this._gl.generateMipmap(Dk)), this._bindTextureDirectly(Dk, null), ek.samplingMode = kk
      }
      updateTextureDimensions(kk, ek, ik) {}
      updateTextureWrappingMode(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const fk = this._getTextureTarget(kk);
        null !== ek && (this._setTextureParameterInteger(fk, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(ek), kk), kk._cachedWrapU = ek), null !== ik && (this._setTextureParameterInteger(fk, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(ik), kk), kk._cachedWrapV = ik), (kk.is2DArray || kk.is3D) && null !== Dk && (this._setTextureParameterInteger(fk, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Dk), kk), kk._cachedWrapR = Dk), this._bindTextureDirectly(fk, null)
      }
      _uploadCompressedDataToTextureDirectly(kk, ek, ik, Dk, fk) {
        let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const rk = this._gl;
        let Pk = rk.TEXTURE_2D;
        if (kk.isCube && (Pk = rk.TEXTURE_CUBE_MAP_POSITIVE_X + Sk), kk._useSRGBBuffer) switch (ek) {
          case 37492:
          case 36196:
            this._caps.etc2 ? ek = rk.COMPRESSED_SRGB8_ETC2 : kk._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? ek = rk.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : kk._useSRGBBuffer = !1;
            break;
          case 36492:
            ek = rk.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            ek = rk.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            ek = rk.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            ek = rk.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            ek = rk.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            ek = rk.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            ek = rk.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            ek = rk.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            ek = rk.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            ek = rk.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            ek = rk.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            ek = rk.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            ek = rk.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            ek = rk.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            ek = rk.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? ek = rk.COMPRESSED_SRGB_S3TC_DXT1_EXT : kk._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? ek = rk.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : kk._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? ek = rk.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : kk._useSRGBBuffer = !1;
            break;
          default:
            kk._useSRGBBuffer = !1
        }
        if (kk.generateMipMaps) {
          const Sk = kk._hardwareTexture;
          Sk.memoryAllocated || (rk.texStorage2D(kk.isCube ? rk.TEXTURE_CUBE_MAP : rk.TEXTURE_2D, Math.floor(Math.log2(Math.max(ik, Dk))) + 1, ek, kk.width, kk.height), Sk.memoryAllocated = !0), this._gl.compressedTexSubImage2D(Pk, bk, 0, 0, ik, Dk, ek, fk)
        } else this._gl.compressedTexImage2D(Pk, bk, ek, ik, Dk, 0, fk)
      }
      _uploadDataToTextureDirectly(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          fk = arguments.length > 4 ? arguments[4] : void 0,
          Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const bk = this._gl,
          rk = this._getWebGLTextureType(kk.type),
          Pk = this._getInternalFormat(kk.format),
          mk = void 0 === fk ? this._getRGBABufferInternalSizedFormat(kk.type, kk.format, kk._useSRGBBuffer) : this._getInternalFormat(fk, kk._useSRGBBuffer);
        this._unpackFlipY(kk.invertY);
        let Mk = bk.TEXTURE_2D;
        kk.isCube && (Mk = bk.TEXTURE_CUBE_MAP_POSITIVE_X + ik);
        const Kk = Math.round(Math.log(kk.width) * Math.LOG2E),
          xk = Math.round(Math.log(kk.height) * Math.LOG2E),
          nk = Sk ? kk.width : Math.pow(2, Math.max(Kk - Dk, 0)),
          Uk = Sk ? kk.height : Math.pow(2, Math.max(xk - Dk, 0));
        bk.texImage2D(Mk, Dk, mk, nk, Uk, 0, Pk, rk, ek)
      }
      updateTextureData(kk, ek, ik, Dk, fk, Sk) {
        let bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          rk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Pk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const mk = this._gl,
          Mk = this._getWebGLTextureType(kk.type),
          Kk = this._getInternalFormat(kk.format);
        this._unpackFlipY(kk.invertY);
        let xk = mk.TEXTURE_2D,
          nk = mk.TEXTURE_2D;
        kk.isCube && (nk = mk.TEXTURE_CUBE_MAP_POSITIVE_X + bk, xk = mk.TEXTURE_CUBE_MAP), this._bindTextureDirectly(xk, kk, !0), mk.texSubImage2D(nk, rk, ik, Dk, fk, Sk, Kk, Mk, ek), Pk && this._gl.generateMipmap(nk), this._bindTextureDirectly(xk, null)
      }
      _uploadArrayBufferViewToTexture(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const fk = this._gl,
          Sk = kk.isCube ? fk.TEXTURE_CUBE_MAP : fk.TEXTURE_2D;
        this._bindTextureDirectly(Sk, kk, !0), this._uploadDataToTextureDirectly(kk, ek, ik, Dk), this._bindTextureDirectly(Sk, null, !0)
      }
      _prepareWebGLTextureContinuation(kk, ek, ik, Dk, fk) {
        const Sk = this._gl;
        if (!Sk) return;
        const bk = this._getSamplingParameters(fk, !ik);
        Sk.texParameteri(Sk.TEXTURE_2D, Sk.TEXTURE_MAG_FILTER, bk.mag), Sk.texParameteri(Sk.TEXTURE_2D, Sk.TEXTURE_MIN_FILTER, bk.min), ik || Dk || Sk.generateMipmap(Sk.TEXTURE_2D), this._bindTextureDirectly(Sk.TEXTURE_2D, null), ek && ek.removePendingData(kk), kk.onLoadedObservable.notifyObservers(kk), kk.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk) {
        const Mk = this.getCaps().maxTextureSize,
          Kk = Math.min(Mk, this.needPOTTextures ? (0, nk.g)(Dk.width, Mk) : Dk.width),
          xk = Math.min(Mk, this.needPOTTextures ? (0, nk.g)(Dk.height, Mk) : Dk.height),
          Uk = this._gl;
        Uk && (kk._hardwareTexture ? (this._bindTextureDirectly(Uk.TEXTURE_2D, kk, !0), this._unpackFlipY(void 0 === fk || !!fk), kk.baseWidth = Dk.width, kk.baseHeight = Dk.height, kk.width = Kk, kk.height = xk, kk.isReady = !0, kk.type = -1 !== kk.type ? kk.type : 0, kk.format = -1 !== kk.format ? kk.format : mk ?? (".jpg" !== ek || kk._useSRGBBuffer ? 5 : 4), rk(Kk, xk, Dk, ek, kk, (() => {
          this._prepareWebGLTextureContinuation(kk, ik, Sk, bk, Pk)
        })) || this._prepareWebGLTextureContinuation(kk, ik, Sk, bk, Pk)) : ik && ik.removePendingData(kk))
      }
      _getInternalFormatFromDepthTextureFormat(kk, ek, ik) {
        const Dk = this._gl;
        if (!ek) return Dk.STENCIL_INDEX8;
        let fk = ik ? Dk.DEPTH_STENCIL : Dk.DEPTH_COMPONENT;
        return this.VH > 1 ? 15 === kk ? fk = Dk.DEPTH_COMPONENT16 : 16 === kk ? fk = Dk.DEPTH_COMPONENT24 : 17 === kk || 13 === kk ? fk = ik ? Dk.DEPTH24_STENCIL8 : Dk.DEPTH_COMPONENT24 : 14 === kk ? fk = Dk.DEPTH_COMPONENT32F : 18 === kk && (fk = ik ? Dk.DEPTH32F_STENCIL8 : Dk.DEPTH_COMPONENT32F) : fk = Dk.DEPTH_COMPONENT16, fk
      }
      _getWebGLTextureTypeFromDepthTextureFormat(kk) {
        const ek = this._gl;
        let ik = ek.UNSIGNED_INT;
        return 15 === kk ? ik = ek.UNSIGNED_SHORT : 17 === kk || 13 === kk ? ik = ek.UNSIGNED_INT_24_8 : 14 === kk ? ik = ek.FLOAT : 18 === kk ? ik = ek.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === kk && (ik = ek.UNSIGNED_BYTE), ik
      }
      _setupFramebufferDepthAttachments(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Sk = arguments.length > 5 ? arguments[5] : void 0,
          bk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const rk = this._gl;
        Sk = Sk ?? (kk ? 13 : 14);
        const Pk = this._getInternalFormatFromDepthTextureFormat(Sk, ek, kk);
        return kk && ek ? this._createRenderBuffer(ik, Dk, fk, rk.DEPTH_STENCIL, Pk, bk ? -1 : rk.DEPTH_STENCIL_ATTACHMENT) : ek ? this._createRenderBuffer(ik, Dk, fk, Pk, Pk, bk ? -1 : rk.DEPTH_ATTACHMENT) : kk ? this._createRenderBuffer(ik, Dk, fk, Pk, Pk, bk ? -1 : rk.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(kk, ek, ik, Dk, fk, Sk) {
        let bk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const rk = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(rk, kk, ek, ik, Dk, fk, Sk, bk)
      }
      _updateRenderBuffer(kk, ek, ik, Dk, fk, Sk, bk) {
        let rk = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const Pk = this._gl;
        return Pk.bindRenderbuffer(Pk.RENDERBUFFER, kk), Dk > 1 && Pk.renderbufferStorageMultisample ? Pk.renderbufferStorageMultisample(Pk.RENDERBUFFER, Dk, Sk, ek, ik) : Pk.renderbufferStorage(Pk.RENDERBUFFER, fk, ek, ik), -1 !== bk && Pk.framebufferRenderbuffer(Pk.FRAMEBUFFER, bk, Pk.RENDERBUFFER, kk), rk && Pk.bindRenderbuffer(Pk.RENDERBUFFER, null), kk
      }
      _releaseTexture(kk) {
        this._deleteTexture(kk._hardwareTexture), this.unbindAllTextures();
        const ek = this._internalTexturesCache.indexOf(kk); - 1 !== ek && this._internalTexturesCache.splice(ek, 1), kk._lodTextureHigh && kk._lodTextureHigh.dispose(), kk._lodTextureMid && kk._lodTextureMid.dispose(), kk._lodTextureLow && kk._lodTextureLow.dispose(), kk._irradianceTexture && kk._irradianceTexture.dispose()
      }
      _deleteTexture(kk) {
        kk?.release()
      }
      _setProgram(kk) {
        this._currentProgram !== kk && ((0, fk.n)(kk, this._gl), this._currentProgram = kk)
      }
      bindSamplers(kk) {
        const ek = kk.getPipelineContext();
        this._setProgram(ek.program);
        const ik = kk.getSamplers();
        for (let Dk = 0; Dk < ik.length; Dk++) {
          const ek = kk.getUniform(ik[Dk]);
          ek && (this._boundUniforms[Dk] = ek)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          fk = !1;
        const Sk = ek && ek._associatedChannel > -1;
        ik && Sk && (this._activeChannel = ek._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== ek || Dk) {
          if (this._activateCurrentTexture(), ek && ek.isMultiview) throw rk.b.Error(["_bindTextureDirectly called with a multiview texture!", kk, ek]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(kk, ek?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = ek, ek && (ek._associatedChannel = this._activeChannel)
        } else ik && (fk = !0, this._activateCurrentTexture());
        return Sk && !ik && this._bindSamplerUniformToChannel(ek._associatedChannel, this._activeChannel), fk
      }
      _bindTexture(kk, ek, ik) {
        if (void 0 === kk) return;
        ek && (ek._associatedChannel = kk), this._activeChannel = kk;
        const Dk = ek ? this._getTextureTarget(ek) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(Dk, ek)
      }
      unbindAllTextures() {
        for (let kk = 0; kk < this._maxSimultaneousTextures; kk++) this._activeChannel = kk, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.VH > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(kk, ek, ik, Dk) {
        void 0 !== kk && (ek && (this._boundUniforms[kk] = ek), this._setTexture(kk, ik))
      }
      _bindSamplerUniformToChannel(kk, ek) {
        const ik = this._boundUniforms[kk];
        ik && ik._currentState !== ek && (this._gl.uniform1i(ik, ek), ik._currentState = ek)
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
      _setTexture(kk, ek) {
        let ik, Dk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          fk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!ek) return null != this._boundTexturesCache[kk] && (this._activeChannel = kk, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.VH > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (ek.video) {
          this._activeChannel = kk;
          const ik = ek.getInternalTexture();
          ik && (ik._associatedChannel = kk), ek.update()
        } else if (4 === ek.delayLoadState) return ek.delayLoad(), !1;
        ik = fk ? ek.depthStencilTexture : ek.isReady() ? ek.getInternalTexture() : ek.isCube ? this.emptyCubeTexture : ek.is3D ? this.emptyTexture3D : ek.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !Dk && ik && (ik._associatedChannel = kk);
        let Sk = !0;
        this._boundTexturesCache[kk] === ik && (Dk || this._bindSamplerUniformToChannel(ik._associatedChannel, kk), Sk = !1), this._activeChannel = kk;
        const bk = this._getTextureTarget(ik);
        if (Sk && this._bindTextureDirectly(bk, ik, Dk), ik && !ik.isMultiview) {
          if (ik.isCube && ik._cachedCoordinatesMode !== ek.coordinatesMode) {
            ik._cachedCoordinatesMode = ek.coordinatesMode;
            const kk = 3 !== ek.coordinatesMode && 5 !== ek.coordinatesMode ? 1 : 0;
            ek.wrapU = kk, ek.wrapV = kk
          }
          ik._cachedWrapU !== ek.wrapU && (ik._cachedWrapU = ek.wrapU, this._setTextureParameterInteger(bk, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(ek.wrapU), ik)), ik._cachedWrapV !== ek.wrapV && (ik._cachedWrapV = ek.wrapV, this._setTextureParameterInteger(bk, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(ek.wrapV), ik)), ik.is3D && ik._cachedWrapR !== ek.wrapR && (ik._cachedWrapR = ek.wrapR, this._setTextureParameterInteger(bk, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(ek.wrapR), ik)), this._setAnisotropicLevel(bk, ik, ek.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(kk, ek, ik, Dk) {
        if (void 0 !== kk && ek) {
          this._textureUnits && this._textureUnits.length === ik.length || (this._textureUnits = new Int32Array(ik.length));
          for (let ek = 0; ek < ik.length; ek++) {
            const Dk = ik[ek].getInternalTexture();
            Dk ? (this._textureUnits[ek] = kk + ek, Dk._associatedChannel = kk + ek) : this._textureUnits[ek] = -1
          }
          this._gl.uniform1iv(ek, this._textureUnits);
          for (let kk = 0; kk < ik.length; kk++) this._setTexture(this._textureUnits[kk], ik[kk], !0)
        }
      }
      _setAnisotropicLevel(kk, ek, ik) {
        const Dk = this._caps.textureAnisotropicFilterExtension;
        11 !== ek.samplingMode && 3 !== ek.samplingMode && 2 !== ek.samplingMode && (ik = 1), Dk && ek._cachedAnisotropicFilteringLevel !== ik && (this._setTextureParameterFloat(kk, Dk.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(ik, this._caps.maxAnisotropy), ek), ek._cachedAnisotropicFilteringLevel = ik)
      }
      _setTextureParameterFloat(kk, ek, ik, Dk) {
        this._bindTextureDirectly(kk, Dk, !0, !0), this._gl.texParameterf(kk, ek, ik)
      }
      _setTextureParameterInteger(kk, ek, ik, Dk) {
        Dk && this._bindTextureDirectly(kk, Dk, !0, !0), this._gl.texParameteri(kk, ek, ik)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let kk = 0; kk < this._caps.maxVertexAttribs; kk++) this.disableAttributeByIndex(kk)
        } else
          for (let kk = 0, ek = this._vertexAttribArraysEnabled.length; kk < ek; kk++) kk >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[kk] || this.disableAttributeByIndex(kk)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, Pk.i)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, fk.y)(this._gl)
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
        const ek = this._gl;
        for (; ek.getError() !== ek.NO_ERROR;);
        let ik = !0;
        const Dk = ek.createTexture();
        ek.bindTexture(ek.TEXTURE_2D, Dk), ek.texImage2D(ek.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(kk), 1, 1, 0, ek.RGBA, this._getWebGLTextureType(kk), null), ek.texParameteri(ek.TEXTURE_2D, ek.TEXTURE_MIN_FILTER, ek.NEAREST), ek.texParameteri(ek.TEXTURE_2D, ek.TEXTURE_MAG_FILTER, ek.NEAREST);
        const fk = ek.createFramebuffer();
        ek.bindFramebuffer(ek.FRAMEBUFFER, fk), ek.framebufferTexture2D(ek.FRAMEBUFFER, ek.COLOR_ATTACHMENT0, ek.TEXTURE_2D, Dk, 0);
        const Sk = ek.checkFramebufferStatus(ek.FRAMEBUFFER);
        if (ik = ik && Sk === ek.FRAMEBUFFER_COMPLETE, ik = ik && ek.getError() === ek.NO_ERROR, ik && (ek.clear(ek.COLOR_BUFFER_BIT), ik = ik && ek.getError() === ek.NO_ERROR), ik) {
          ek.bindFramebuffer(ek.FRAMEBUFFER, null);
          const kk = ek.RGBA,
            Dk = ek.UNSIGNED_BYTE,
            fk = new Uint8Array(4);
          ek.readPixels(0, 0, 1, 1, kk, Dk, fk), ik = ik && ek.getError() === ek.NO_ERROR
        }
        for (ek.deleteTexture(Dk), ek.deleteFramebuffer(fk), ek.bindFramebuffer(ek.FRAMEBUFFER, null); !ik && ek.getError() !== ek.NO_ERROR;);
        return ik
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
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = ek ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (kk) {
          case 0:
            ik = this._gl.ALPHA;
            break;
          case 1:
            ik = this._gl.LUMINANCE;
            break;
          case 2:
            ik = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            ik = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            ik = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            ik = ek ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            ik = ek ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (kk) {
          case 8:
            ik = this._gl.RED_INTEGER;
            break;
          case 9:
            ik = this._gl.RG_INTEGER;
            break;
          case 10:
            ik = this._gl.RGB_INTEGER;
            break;
          case 11:
            ik = this._gl.RGBA_INTEGER
        }
        return ik
      }
      _getRGBABufferInternalSizedFormat(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== ek) switch (ek) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return ik ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (kk) {
          case 3:
            switch (ek) {
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
            switch (ek) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return ik ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return ik ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (ek) {
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
            switch (ek) {
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
            switch (ek) {
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
            switch (ek) {
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
            switch (ek) {
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
            switch (ek) {
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
            switch (ek) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return ik ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(kk, ek, ik, Dk) {
        let fk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Sk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const Pk = fk ? 4 : 3,
          mk = fk ? this._gl.RGBA : this._gl.RGB,
          Mk = ik * Dk * Pk;
        if (bk) {
          if (bk.length < Mk) return rk.b.Error(`Data buffer is too small to store the read pixels (${bk.length} should be more than ${Mk})`), Promise.resolve(bk)
        } else bk = new Uint8Array(Mk);
        return Sk && this.flushFramebuffer(), this._gl.readPixels(kk, ek, ik, Dk, mk, this._gl.UNSIGNED_BYTE, bk), Promise.resolve(bk)
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
          const kk = Sk.c._CreateCanvas(1, 1),
            ek = kk.getContext("webgl") || kk.getContext("experimental-webgl");
          this._IsSupported = null != ek && !!globalThis.WebGLRenderingContext
        } catch (kk) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const kk = Sk.c._CreateCanvas(1, 1),
            ek = kk.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || kk.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !ek
        } catch (kk) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    Lk._TempClearColorUint32 = new Uint32Array(4), Lk._TempClearColorInt32 = new Int32Array(4), Lk._TempClearColorFloat32 = new Float32Array(4), Lk.ExceptionList = [{
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
    }], Lk._ConcatenateShader = wk.c, Lk._IsSupported = null, Lk._HasMajorPerformanceCaveat = null
  },
  39758: (kk, ek, ik) => {
    var Dk;
    ik.d(ek, {
        c: () => fk
      }),
      function(kk) {
        kk[kk.PointerMove = 0] = "PointerMove", kk[kk.PointerDown = 1] = "PointerDown", kk[kk.PointerUp = 2] = "PointerUp"
      }(Dk || (Dk = {}));
    class fk {}
    fk.DOM_DELTA_PIXEL = 0, fk.DOM_DELTA_LINE = 1, fk.DOM_DELTA_PAGE = 2
  },
  39751: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk,
      f: () => Sk,
      h: () => fk
    });
    class Dk {}
    Dk.KEYDOWN = 1, Dk.KEYUP = 2;
    class fk {
      constructor(kk, ek) {
        this.type = kk, this.event = ek
      }
    }
    class Sk extends fk {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(kk) {
        this.skipOnKeyboardObservable = kk
      }
      constructor(kk, ek) {
        super(kk, ek), this.type = kk, this.event = ek, this.skipOnKeyboardObservable = !1
      }
    }
  },
  39742: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk,
      g: () => bk,
      h: () => rk
    });
    var Dk = ik(36698);
    class fk {}
    fk.POINTERDOWN = 1, fk.POINTERUP = 2, fk.POINTERMOVE = 4, fk.POINTERWHEEL = 8, fk.POINTERPICK = 16, fk.POINTERTAP = 32, fk.POINTERDOUBLETAP = 64;
    class Sk {
      constructor(kk, ek) {
        this.type = kk, this.event = ek
      }
    }
    class bk extends Sk {
      constructor(kk, ek, ik, fk) {
        super(kk, ek), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new Dk.l(ik, fk)
      }
    }
    class rk extends Sk {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(kk, ek), this._pickInfo = ik, this._inputManager = Dk
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  39769: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk
    });
    class Dk {
      static CompareLightsPriority(kk, ek) {
        return kk.shadowEnabled !== ek.shadowEnabled ? (ek.shadowEnabled ? 1 : 0) - (kk.shadowEnabled ? 1 : 0) : ek.renderPriority - kk.renderPriority
      }
    }
    Dk.FALLOFF_DEFAULT = 0, Dk.FALLOFF_PHYSICAL = 1, Dk.FALLOFF_GLTF = 2, Dk.FALLOFF_STANDARD = 3, Dk.LIGHTMAP_DEFAULT = 0, Dk.LIGHTMAP_SPECULAR = 1, Dk.LIGHTMAP_SHADOWSONLY = 2, Dk.INTENSITYMODE_AUTOMATIC = 0, Dk.INTENSITYMODE_LUMINOUSPOWER = 1, Dk.INTENSITYMODE_LUMINOUSINTENSITY = 2, Dk.INTENSITYMODE_ILLUMINANCE = 3, Dk.INTENSITYMODE_LUMINANCE = 4, Dk.LIGHTTYPEID_POINTLIGHT = 0, Dk.LIGHTTYPEID_DIRECTIONALLIGHT = 1, Dk.LIGHTTYPEID_SPOTLIGHT = 2, Dk.LIGHTTYPEID_HEMISPHERICLIGHT = 3, Dk.LIGHTTYPEID_RECT_AREALIGHT = 4, Dk.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  39391: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk
    });
    var Dk, fk = ik(36726),
      Sk = ik(39394);
    ! function(kk) {
      kk[kk.Unknown = 0] = "Unknown", kk[kk.Url = 1] = "Url", kk[kk.Temp = 2] = "Temp", kk[kk.Raw = 3] = "Raw", kk[kk.Dynamic = 4] = "Dynamic", kk[kk.RenderTarget = 5] = "RenderTarget", kk[kk.MultiRenderTarget = 6] = "MultiRenderTarget", kk[kk.Cube = 7] = "Cube", kk[kk.CubeRaw = 8] = "CubeRaw", kk[kk.CubePrefiltered = 9] = "CubePrefiltered", kk[kk.Raw3D = 10] = "Raw3D", kk[kk.Raw2DArray = 11] = "Raw2DArray", kk[kk.DepthStencil = 12] = "DepthStencil", kk[kk.CubeRawRGBD = 13] = "CubeRawRGBD", kk[kk.Depth = 14] = "Depth", kk[kk.External = 15] = "External"
    }(Dk || (Dk = {}));
    class bk extends Sk.d {
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
      JU() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new fk.c, this.onErrorObservable = new fk.c, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = kk, this._source = ek, this._uniqueId = bk._Counter++, ik || (this._hardwareTexture = kk._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, kk, ek, ik), this.width = kk, this.height = ek, this.depth = ik, this.baseWidth = kk, this.baseHeight = ek, this.baseDepth = ik, this._size = kk * ek * ik
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const kk = this.onRebuildCallback(this),
            ek = ek => {
              ek._swapAndDie(this, !1), this.isReady = kk.isReady
            };
          return void(kk.isAsync ? kk.proxy.then(ek) : ek(kk.proxy))
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
                const ek = this._bufferViewArray[kk];
                ek && this._engine.updateRawTexture(this, ek, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, kk)
              }
            this.isReady = !0;
            break;
          case 10:
            kk = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), kk._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (kk = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), kk._swapAndDie(this, !1), this._bufferViewArray)
              for (let kk = 0; kk < this._bufferViewArray.length; kk++) {
                const ek = this._bufferViewArray[kk];
                ek && this._engine.updateRawTexture2DArray(this, ek, this.format, this.invertY, this._compression, this.type, kk)
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
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(kk._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), kk._hardwareTexture = this._hardwareTexture, kk._setUniqueId(bk._Counter++), ek && (kk._isRGBD = this._isRGBD), this._lodTextureHigh && (kk._lodTextureHigh && kk._lodTextureHigh.dispose(), kk._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (kk._lodTextureMid && kk._lodTextureMid.dispose(), kk._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (kk._lodTextureLow && kk._lodTextureLow.dispose(), kk._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (kk._irradianceTexture && kk._irradianceTexture.dispose(), kk._irradianceTexture = this._irradianceTexture);
        const ik = this._engine.getLoadedTexturesCache();
        let Dk = ik.indexOf(this); - 1 !== Dk && ik.splice(Dk, 1), Dk = ik.indexOf(kk), -1 === Dk && ik.push(kk)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    bk._Counter = 0
  },
  39517: (kk, ek, ik) => {
    function Dk(kk) {
      return 13 === kk || 14 === kk || 15 === kk || 16 === kk || 17 === kk || 18 === kk || 19 === kk
    }

    function fk(kk) {
      return 8 === kk || 9 === kk || 10 === kk || 11 === kk
    }

    function Sk(kk) {
      return 0 === kk || 5 === kk || 7 === kk || 11 === kk
    }

    function bk(kk) {
      return 13 === kk || 17 === kk || 18 === kk || 19 === kk
    }
    ik.d(ek, {
      b: () => bk,
      e: () => Dk,
      f: () => fk,
      i: () => Sk
    })
  },
  39394: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk
    });
    class Dk {
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
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = kk, this._cachedWrapV = ek, this._cachedWrapR = ik, this._cachedAnisotropicFilteringLevel = Dk, this.samplingMode = fk, this._comparisonFunction = Sk, this
      }
      compareSampler(kk) {
        return this._cachedWrapU === kk._cachedWrapU && this._cachedWrapV === kk._cachedWrapV && this._cachedWrapR === kk._cachedWrapR && this._cachedAnisotropicFilteringLevel === kk._cachedAnisotropicFilteringLevel && this.samplingMode === kk.samplingMode && this._comparisonFunction === kk._comparisonFunction && this._useMipMaps === kk._useMipMaps
      }
    }
  },
  39685: (kk, ek, ik) => {
    function Dk(kk) {
      kk.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    ik.d(ek, {
      d: () => Dk
    })
  },
  39483: (kk, ek, ik) => {
    function Dk(kk) {
      return void 0 === kk.getPipelineContext
    }
    ik.d(ek, {
      b: () => Dk
    })
  },
  39906: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk
    });
    var Dk = ik(39458);
    class fk {
      static GetEffect(kk) {
        return void 0 === kk.getPipelineContext ? kk.effect : kk
      }
      constructor(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = kk.createDrawContext(), ek && (this.materialContext = kk.createMaterialContext())
      }
      setEffect(kk, ek) {
        let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        ik || this.effect === kk || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = kk, void 0 !== ek && (this.defines = ek), ik && this.drawContext?.reset()
      }
      dispose() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const ek = this.effect;
          kk ? ek.dispose() : Dk.e.SetImmediate((() => {
            ek.JU().onEndFrameObservable.addOnce((() => {
              ek.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39420: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Kk,
      f: () => nk,
      g: () => mk,
      i: () => Mk
    });
    var Dk = ik(39429),
      fk = ik(39437),
      Sk = ik(39412),
      bk = ik(38272),
      rk = ik(39455),
      Pk = ik(39445);

    function mk(kk, ek) {
      return (0, fk.A)(ek).cachedPipelines[kk]
    }

    function Mk(kk) {
      const ek = kk._name,
        ik = kk.context;
      if (ek && ik) {
        const kk = (0, fk.A)(ik),
          Dk = kk.cachedPipelines[ek];
        Dk?.dispose(), delete kk.cachedPipelines[ek]
      }
    }

    function Kk(kk, ek, ik, fk, Sk, bk, Pk) {
      let mk, Mk;
      const Kk = (0, Dk.i)() ? bk?.getHostDocument() : null;
      mk = "string" === typeof ek ? ek : "string" === typeof ek.vertexSource ? "source:" + ek.vertexSource : "string" === typeof ek.vertexElement ? Kk?.getElementById(ek.vertexElement) || ek.vertexElement : ek.vertex || ek, Mk = "string" === typeof ek ? ek : "string" === typeof ek.fragmentSource ? "source:" + ek.fragmentSource : "string" === typeof ek.fragmentElement ? Kk?.getElementById(ek.fragmentElement) || ek.fragmentElement : ek.fragment || ek;
      const nk = [void 0, void 0],
        Uk = () => {
          if (nk[0] && nk[1]) {
            const [Dk, mk] = nk;
            (0, rk.g)(kk), (0, rk.k)(Dk, kk, ((Dk, Mk) => {
              Pk && (Pk._vertexSourceCodeBeforeMigration = Mk), ik && (Dk = ik("vertex", Dk)), kk.isFragment = !0, (0, rk.k)(mk, kk, ((bk, mk) => {
                Pk && (Pk._fragmentSourceCodeBeforeMigration = mk), ik && (bk = ik("fragment", bk));
                const Mk = (0, rk.c)(Dk, bk, kk);
                kk = null;
                const Kk = function(kk, ek, ik, Dk) {
                  if (ik) {
                    return {
                      vertexSourceCode: (1 === Dk ? "//" : "") + "#define SHADER_NAME vertex:" + (ik.vertexElement || ik.vertex || ik.spectorName || ik) + "\n" + kk,
                      fragmentSourceCode: (1 === Dk ? "//" : "") + "#define SHADER_NAME fragment:" + (ik.fragmentElement || ik.fragment || ik.spectorName || ik) + "\n" + ek
                    }
                  }
                  return {
                    vertexSourceCode: kk,
                    fragmentSourceCode: ek
                  }
                }(Mk.vertexCode, Mk.fragmentCode, ek, Sk);
                fk?.(Kk.vertexSourceCode, Kk.fragmentSourceCode)
              }), bk)
            }), bk)
          }
        };
      xk(mk, "Vertex", "", (kk => {
        Pk && (Pk._rawVertexSourceCode = kk), nk[0] = kk, Uk()
      }), Sk), xk(Mk, "Fragment", "Pixel", (kk => {
        Pk && (Pk._rawFragmentSourceCode = kk), nk[1] = kk, Uk()
      }), Sk)
    }

    function xk(kk, ek, ik, fk, bk, rk) {
      if ("undefined" !== typeof HTMLElement && kk instanceof HTMLElement) {
        return void fk((0, Dk.c)(kk))
      }
      if ("source:" === kk.substring(0, 7)) return void fk(kk.substring(7));
      if ("base64:" === kk.substring(0, 7)) {
        return void fk(window.atob(kk.substring(7)))
      }
      const mk = Sk.d.GetShadersStore(bk);
      if (mk[kk + ek + "Shader"]) return void fk(mk[kk + ek + "Shader"]);
      if (ik && mk[kk + ik + "Shader"]) return void fk(mk[kk + ik + "Shader"]);
      let Mk;
      if (Mk = "." === kk[0] || "/" === kk[0] || kk.indexOf("http") > -1 ? kk : Sk.d.GetShadersRepository(bk) + kk, !(rk = rk || Pk.h)) throw new Error("loadFileInjection is not defined");
      rk(Mk + "." + ek.toLowerCase() + ".fx", fk)
    }
    const nk = (kk, ek, ik, Dk) => {
      try {
        const Sk = kk.context ? (0, fk.A)(kk.context) : null;
        Sk && (Sk.disableParallelShaderCompile = kk.disableParallelCompilation);
        const bk = kk.existingPipelineContext || ek(kk.shaderProcessingContext);
        return bk._name = kk.name, kk.name && Sk && (Sk.cachedPipelines[kk.name] = bk), ik(bk, kk.vertex, kk.fragment, !!kk.createAsRaw, "", "", kk.rebuildRebind, kk.defines, kk.transformFeedbackVaryings, "", (() => {
          Dk(bk, (() => {
            kk.onRenderingStateCompiled?.(bk)
          }))
        })), bk
      } catch (Sk) {
        throw bk.b.Error("Error compiling effect"), Sk
      }
    }
  },
  39403: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Pk
    });
    var Dk = ik(36726),
      fk = ik(38272),
      Sk = ik(39412),
      bk = ik(39420),
      rk = ik(39458);
    class Pk {
      static get ShadersRepository() {
        return Sk.d.ShadersRepository
      }
      static set ShadersRepository(kk) {
        Sk.d.ShadersRepository = kk
      }
      get RL() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new Dk.c), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(kk, ek, ik) {
        let fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Sk = arguments.length > 4 ? arguments[4] : void 0,
          rk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          mk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Mk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Kk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          xk = arguments.length > 9 ? arguments[9] : void 0,
          nk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          Uk = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          Hk = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new Dk.c, this.onErrorObservable = new Dk.c, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = kk, this._key = nk;
        const wk = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let lk;
        if (ek.attributes) {
          const kk = ek;
          if (this._engine = ik, this._attributesNames = kk.attributes, this._uniformsNames = kk.uniformsNames.concat(kk.samplers), this._samplerList = kk.samplers.slice(), this.defines = kk.defines, this.onError = kk.onError, this.onCompiled = kk.onCompiled, this._fallbacks = kk.fallbacks, this._indexParameters = kk.indexParameters, this._transformFeedbackVaryings = kk.transformFeedbackVaryings || null, this._multiTarget = !!kk.multiTarget, this._shaderLanguage = kk.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!kk.disableParallelShaderCompilation, kk.uniformBuffersNames) {
            this._uniformBuffersNamesList = kk.uniformBuffersNames.slice();
            for (let ek = 0; ek < kk.uniformBuffersNames.length; ek++) this._uniformBuffersNames[kk.uniformBuffersNames[ek]] = ek
          }
          this._processFinalCode = kk.processFinalCode ?? null, this._processCodeAfterIncludes = kk.processCodeAfterIncludes ?? void 0, Hk = kk.extraInitializationsAsync, lk = kk.existingPipelineContext
        } else this._engine = Sk, this.defines = null == rk ? "" : rk, this._uniformsNames = ik.concat(fk), this._samplerList = fk ? fk.slice() : [], this._attributesNames = ek, this._uniformBuffersNamesList = [], this._shaderLanguage = Uk, this.onError = Kk, this.onCompiled = Mk, this._indexParameters = xk, this._fallbacks = mk;
        "WEBGL2" === this._engine.shaderPlatformName && (lk = (0, bk.g)(wk, this._engine._gl) ?? lk), this._attributeLocationByName = {}, this.uniqueId = Pk._UniqueIdSeed++, lk ? (this._pipelineContext = lk, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, Hk).catch((kk => {
          const ek = kk?.message ?? String(kk),
            ik = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${ek}`);
          kk && "string" === typeof kk.stack && (ik.stack = `${ik.message}\nCaused by: ${kk.stack}`), this._processCompilationErrors(ik)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.RL || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Dk = arguments.length > 3 ? arguments[3] : void 0;
        Dk && await Dk(), this._processingContext = ik || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const fk = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: kk ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: Sk.d.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: Sk.d.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          Xik: this._engine.Xik,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, bk.c)(fk, this.name, this._processFinalCode, ((kk, ik) => {
          this._vertexSourceCode = kk, this._fragmentSourceCode = ik, this._prepareEffect(ek)
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
        return !!this._engine.RL || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      JU() {
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
        this.isReady() ? kk(this) : (this.onCompileObservable.add((ek => {
          kk(ek)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(kk) {
        (0, rk.h)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (ek => {
          this._processCompilationErrors(ek, kk)
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
            Xik: this._engine.Xik,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(kk, ek, ik, Dk) {
        this._isReady = !1, this._vertexSourceCodeOverride = kk, this._fragmentSourceCodeOverride = ek, this.onError = (kk, ek) => {
          Dk && Dk(ek)
        }, this.onCompiled = () => {
          const kk = this.JU().scenes;
          if (kk)
            for (let ek = 0; ek < kk.length; ek++) kk[ek].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(ik)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(kk) {
        if (this._pipelineContext = kk, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let ek = 0; ek < this._attributesNames.length; ek++) {
            const kk = this._attributesNames[ek];
            this._attributeLocationByName[kk] = this._attributes[ek]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), Pk.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ek = this._pipelineContext;
        this._isReady = !1;
        try {
          const ik = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            Dk = ik ? null : this.defines,
            fk = ik ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            Sk = ik ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            rk = this._engine;
          this._pipelineContext = (0, bk.f)({
            existingPipelineContext: kk ? ek : null,
            vertex: fk,
            fragment: Sk,
            context: "WEBGL2" === rk.shaderPlatformName || "WEBGL1" === rk.shaderPlatformName ? rk._gl : void 0,
            rebuildRebind: (kk, ek, ik, Dk) => this._rebuildProgram(kk, ek, ik, Dk),
            defines: Dk,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: ik,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: ik => {
              ek && !kk && this._engine._deletePipelineContext(ek), ik && this._onRenderingStateCompiled(ik)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(ek)
        } catch (ik) {
          this._processCompilationErrors(ik, ek)
        }
      }
      _getShaderCodeAndErrorLine(kk, ek, ik) {
        const Dk = ik ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let fk = null;
        if (ek && kk) {
          const Sk = ek.match(Dk);
          if (Sk && 2 === Sk.length) {
            const ek = parseInt(Sk[1]),
              Dk = kk.split("\n", -1);
            Dk.length >= ek && (fk = `Offending line [${ek}] in ${ik?"fragment":"vertex"} code: ${Dk[ek-1]}`)
          }
        }
        return [kk, fk]
      }
      _processCompilationErrors(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof kk?.stack ? kk.stack : kk?.message ?? String(kk);
        const ik = this._attributesNames,
          Dk = this._fallbacks;
        if (fk.b.Error("Unable to compile effect:"), fk.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), fk.b.Error(`Attributes: ${ik.join(" ")}`), fk.b.Error("Defines:\n" + this.defines), Pk.LogShaderCodeOnCompilationError) {
          let kk, ek = null,
            ik = null;
          this._pipelineContext?._getVertexShaderCode() && ([kk, ek] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), kk && (fk.b.Error("Vertex code:"), fk.b.Error(kk))), this._pipelineContext?._getFragmentShaderCode() && ([kk, ik] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), kk && (fk.b.Error("Fragment code:"), fk.b.Error(kk))), ek && fk.b.Error(ek), ik && fk.b.Error(ik)
        }
        fk.b.Error("Error: " + this._compilationError);
        const Sk = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        ek && (this._pipelineContext = ek, this._isReady = !0, Sk()), Dk ? (this._pipelineContext = null, Dk.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, fk.b.Error("Trying next fallback."), this.defines = Dk.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, Sk(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, ek || Sk())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(kk, ek) {
        this._engine._bindTexture(this._samplers[kk], ek, kk)
      }
      setTexture(kk, ek) {
        this._engine.setTexture(this._samplers[kk], this._uniforms[kk], ek, kk)
      }
      setTextureArray(kk, ek) {
        const ik = kk + "Ex";
        if (-1 === this._samplerList.indexOf(ik + "0")) {
          const Dk = this._samplerList.indexOf(kk);
          for (let kk = 1; kk < ek.length; kk++) {
            const ek = ik + (kk - 1).toString();
            this._samplerList.splice(Dk + kk, 0, ek)
          }
          let fk = 0;
          for (const kk of this._samplerList) this._samplers[kk] = fk, fk += 1
        }
        this._engine.setTextureArray(this._samplers[kk], this._uniforms[kk], ek, kk)
      }
      bindUniformBuffer(kk, ek) {
        const ik = this._uniformBuffersNames[ek];
        void 0 === ik || Pk._BaseCache[ik] === kk && this._engine._features.useUBOBindingCache || (Pk._BaseCache[ik] = kk, this._engine.bindUniformBufferBase(kk, ik, ek))
      }
      bindUniformBlock(kk, ek) {
        this._engine.bindUniformBlock(this._pipelineContext, kk, ek)
      }
      setInt(kk, ek) {
        return this._pipelineContext.setInt(kk, ek), this
      }
      setInt2(kk, ek, ik) {
        return this._pipelineContext.setInt2(kk, ek, ik), this
      }
      setInt3(kk, ek, ik, Dk) {
        return this._pipelineContext.setInt3(kk, ek, ik, Dk), this
      }
      setInt4(kk, ek, ik, Dk, fk) {
        return this._pipelineContext.setInt4(kk, ek, ik, Dk, fk), this
      }
      setIntArray(kk, ek) {
        return this._pipelineContext.setIntArray(kk, ek), this
      }
      setIntArray2(kk, ek) {
        return this._pipelineContext.setIntArray2(kk, ek), this
      }
      setIntArray3(kk, ek) {
        return this._pipelineContext.setIntArray3(kk, ek), this
      }
      setIntArray4(kk, ek) {
        return this._pipelineContext.setIntArray4(kk, ek), this
      }
      setUInt(kk, ek) {
        return this._pipelineContext.setUInt(kk, ek), this
      }
      setUInt2(kk, ek, ik) {
        return this._pipelineContext.setUInt2(kk, ek, ik), this
      }
      setUInt3(kk, ek, ik, Dk) {
        return this._pipelineContext.setUInt3(kk, ek, ik, Dk), this
      }
      setUInt4(kk, ek, ik, Dk, fk) {
        return this._pipelineContext.setUInt4(kk, ek, ik, Dk, fk), this
      }
      setUIntArray(kk, ek) {
        return this._pipelineContext.setUIntArray(kk, ek), this
      }
      setUIntArray2(kk, ek) {
        return this._pipelineContext.setUIntArray2(kk, ek), this
      }
      setUIntArray3(kk, ek) {
        return this._pipelineContext.setUIntArray3(kk, ek), this
      }
      setUIntArray4(kk, ek) {
        return this._pipelineContext.setUIntArray4(kk, ek), this
      }
      setFloatArray(kk, ek) {
        return this._pipelineContext.setArray(kk, ek), this
      }
      setFloatArray2(kk, ek) {
        return this._pipelineContext.setArray2(kk, ek), this
      }
      setFloatArray3(kk, ek) {
        return this._pipelineContext.setArray3(kk, ek), this
      }
      setFloatArray4(kk, ek) {
        return this._pipelineContext.setArray4(kk, ek), this
      }
      setArray(kk, ek) {
        return this._pipelineContext.setArray(kk, ek), this
      }
      setArray2(kk, ek) {
        return this._pipelineContext.setArray2(kk, ek), this
      }
      setArray3(kk, ek) {
        return this._pipelineContext.setArray3(kk, ek), this
      }
      setArray4(kk, ek) {
        return this._pipelineContext.setArray4(kk, ek), this
      }
      setMatrices(kk, ek) {
        return this._pipelineContext.setMatrices(kk, ek), this
      }
      setMatrix(kk, ek) {
        return this._pipelineContext.setMatrix(kk, ek), this
      }
      setMatrix3x3(kk, ek) {
        return this._pipelineContext.setMatrix3x3(kk, ek), this
      }
      setMatrix2x2(kk, ek) {
        return this._pipelineContext.setMatrix2x2(kk, ek), this
      }
      setFloat(kk, ek) {
        return this._pipelineContext.setFloat(kk, ek), this
      }
      setBool(kk, ek) {
        return this._pipelineContext.setInt(kk, ek ? 1 : 0), this
      }
      setVector2(kk, ek) {
        return this._pipelineContext.setVector2(kk, ek), this
      }
      setFloat2(kk, ek, ik) {
        return this._pipelineContext.setFloat2(kk, ek, ik), this
      }
      setVector3(kk, ek) {
        return this._pipelineContext.setVector3(kk, ek), this
      }
      setFloat3(kk, ek, ik, Dk) {
        return this._pipelineContext.setFloat3(kk, ek, ik, Dk), this
      }
      setVector4(kk, ek) {
        return this._pipelineContext.setVector4(kk, ek), this
      }
      setQuaternion(kk, ek) {
        return this._pipelineContext.setQuaternion(kk, ek), this
      }
      setFloat4(kk, ek, ik, Dk, fk) {
        return this._pipelineContext.setFloat4(kk, ek, ik, Dk, fk), this
      }
      setColor3(kk, ek) {
        return this._pipelineContext.setColor3(kk, ek), this
      }
      setColor4(kk, ek, ik) {
        return this._pipelineContext.setColor4(kk, ek, ik), this
      }
      setDirectColor4(kk, ek) {
        return this._pipelineContext.setDirectColor4(kk, ek), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (Pk.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, bk.i)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        ek && (Sk.d.GetShadersStore(Dk)[`${kk}PixelShader`] = ek), ik && (Sk.d.GetShadersStore(Dk)[`${kk}VertexShader`] = ik)
      }
      static ResetCache() {
        Pk._BaseCache = {}
      }
    }
    Pk.LogShaderCodeOnCompilationError = !0, Pk.PersistentMode = !1, Pk.AutomaticallyClearCodeCache = !1, Pk._UniqueIdSeed = 0, Pk._BaseCache = {}, Pk.ShadersStore = Sk.d.ShadersStore, Pk.IncludesShadersStore = Sk.d.IncludesShadersStore
  },
  39722: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Mk,
      c: () => Ak,
      d: () => Ck
    });
    var Dk = ik(39403),
      fk = ik(36698),
      Sk = ik(36731),
      bk = ik(39696);
    const rk = new fk.b,
      Pk = new fk.b,
      mk = new fk.b,
      Mk = {
        XF: () => {},
        eyeAtCamera: !0
      };

    function Kk(kk, ek, ik) {
      const Dk = ik.Tik(),
        fk = ek.Tik();
      for (let Sk = 0; Sk < 16; Sk++) Dk[Sk] = fk[Sk];
      return Dk[12] -= kk.x, Dk[13] -= kk.y, Dk[14] -= kk.z, ik.markAsUpdated(), ik
    }

    function xk(kk, ek, ik) {
      return (0, Sk.j)(ek, Pk), Kk(kk, Pk, mk), (0, Sk.j)(mk, ik), ik
    }

    function nk(kk, ek, ik) {
      if (!Mk.eyeAtCamera) return xk(kk, ek, ik);
      const Dk = ik.Tik(),
        fk = ek.Tik();
      for (let Sk = 0; Sk < 16; Sk++) Dk[Sk] = fk[Sk];
      return Dk[12] = 0, Dk[13] = 0, Dk[14] = 0, ik.markAsUpdated(), ik
    }

    function Uk(kk, ek, ik, Dk) {
      return (0, Sk.s)(nk(kk, ek, Dk), ik, Dk), Dk
    }

    function Hk(kk, ek, ik, Dk) {
      return (0, Sk.j)(ik, Pk), (0, Sk.s)(ek, Pk, mk), Kk(kk, mk, Pk), nk(kk, ik, mk), (0, Sk.s)(Pk, mk, Dk), Dk
    }

    function wk(kk, ek, ik, Dk, fk, bk) {
      return (0, Sk.j)(ik, Pk), (0, Sk.s)(ek, Pk, mk), Kk(kk, mk, Pk), Uk(kk, Dk, fk, mk), (0, Sk.s)(Pk, mk, bk), bk
    }

    function lk(kk, ek) {
      const ik = Mk.XF();
      if (!ik || rk === ek) return ek;
      rk.updateFlag = ek.updateFlag;
      const Dk = ik.floatingOriginOffset;
      switch (kk) {
        case "world":
          return Kk(Dk, ek, rk);
        case "view":
          return nk(Dk, ek, rk);
        case "worldView":
          return Hk(Dk, ek, ik.getViewMatrix(), rk);
        case "viewProjection":
          return Uk(Dk, ik.getViewMatrix(), ik.getProjectionMatrix(), rk);
        case "worldViewProjection":
          return wk(Dk, ek, ik.getTransformMatrix(), ik.getViewMatrix(), ik.getProjectionMatrix(), rk);
        default:
          if (kk.startsWith("u_")) {
            const fk = kk.toLowerCase();
            if (fk.startsWith("u_worldviewprojection")) return wk(Dk, ek, ik.getTransformMatrix(), ik.getViewMatrix(), ik.getProjectionMatrix(), rk);
            if (fk.startsWith("u_viewprojection")) return Uk(Dk, ik.getViewMatrix(), ik.getProjectionMatrix(), rk);
            if (fk.startsWith("u_worldview")) return Hk(Dk, ek, ik.getViewMatrix(), rk);
            if (fk.startsWith("u_world")) return Kk(Dk, ek, rk);
            if (fk.startsWith("u_view")) return nk(Dk, ek, rk)
          }
          return ek
      }
    }
    const pk = bk.d,
      yk = Dk.e,
      Yk = pk.prototype._updateMatrixForUniform,
      Lk = Dk.e.prototype.setMatrix;

    function Ck() {
      Dk.e.prototype.setMatrix = Lk, yk._setMatrixOverride = void 0, pk.prototype._updateMatrixForUniform = Yk, pk.prototype._updateMatrixForUniformOverride = void 0
    }

    function Ak() {
      yk.prototype._setMatrixOverride = Lk, yk.prototype.setMatrix = function(kk, ek) {
        return this._setMatrixOverride(kk, lk(kk, ek)), this
      }, pk.prototype._updateMatrixForUniformOverride = Yk, pk.prototype._updateMatrixForUniform = function(kk, ek) {
        this._updateMatrixForUniformOverride(kk, lk(kk, ek))
      }
    }
  },
  39694: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      g: () => fk
    });
    var Dk = ik(39685);

    function fk(kk, ek) {
      ek.WHITEBALANCE && kk.push("whiteBalanceMatrix"), ek.EXPOSURE && kk.push("exposureLinear"), ek.CONTRAST && kk.push("contrast"), ek.COLORGRADING && kk.push("colorTransformSettings"), (ek.VIGNETTE || ek.DITHER) && kk.push("vInverseScreenSize"), ek.VIGNETTE && (kk.push("vignetteSettings1"), kk.push("vignetteSettings2")), ek.COLORCURVES && (0, Dk.d)(kk), ek.DITHER && kk.push("ditherIntensity")
    }

    function Sk(kk, ek) {
      ek.COLORGRADING && kk.push("txColorTransform")
    }
  },
  39677: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Fk,
      e: () => Ik
    });
    var Dk = ik(39566),
      fk = ik(39570),
      Sk = ik(36726),
      bk = ik(36874),
      rk = ik(36729),
      Pk = ik(36698);
    const mk = [
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
      Mk = 1e6 / mk[mk.length - 1][0],
      Kk = 150;

    function xk(kk, ek) {
      const ik = Number.isNaN(kk) ? Mk : Math.max(kk, Mk),
        Dk = (0, rk.Clamp)(1e6 / ik, mk[0][0], mk[mk.length - 1][0]);
      let fk = 0,
        Sk = mk.length - 1;
      for (; Sk - fk > 1;) {
        const kk = fk + Sk >> 1;
        mk[kk][0] <= Dk ? fk = kk : Sk = kk
      }
      const bk = fk,
        [xk, nk, Uk, Hk] = mk[bk],
        [wk, lk, pk, yk] = mk[bk + 1],
        Yk = (Dk - xk) / (wk - xk),
        Lk = Pk.l.Lerp(new Pk.l(nk, Uk), new Pk.l(lk, pk), Yk),
        Ck = Pk.l.Normalize(new Pk.l(1, Hk)),
        Ak = Pk.l.Normalize(new Pk.l(1, yk)),
        jk = Pk.l.Normalize(Pk.l.Lerp(Ck, Ak, Yk)),
        sk = (0, rk.Clamp)(ek, -150, Kk);
      Lk.KDk(jk.scale(sk / 3e3));
      const dk = 2 * Lk.x - 8 * Lk.y + 4,
        Vk = 3 * Lk.x / dk,
        Fk = 2 * Lk.y / dk;
      return new Pk.o(Vk / Fk, 1, (1 - Vk - Fk) / Fk)
    }
    const nk = Pk.b.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      Uk = Pk.b.Invert(nk);

    function Hk(kk, ek) {
      const ik = ek > 0 ? kk / ek : 10;
      return (0, rk.Clamp)(ik, .1, 10)
    }

    function wk(kk, ek) {
      const ik = Pk.o.TransformNormal(kk, nk),
        Dk = Pk.o.TransformNormal(ek, nk),
        fk = Pk.b.FromArray([Hk(Dk.x, ik.x), 0, 0, 0, 0, Hk(Dk.y, ik.y), 0, 0, 0, 0, Hk(Dk.z, ik.z), 0, 0, 0, 0, 1]);
      return nk.multiply(fk).multiply(Uk)
    }
    const lk = new Pk.o(.95047, 1, 1.08883),
      pk = Pk.b.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(wk(lk, xk(6500, 0))),
      yk = Pk.b.Invert(pk),
      Yk = Pk.o.TransformNormal(new Pk.o(1, 1, 1), pk);
    var Lk = ik(39585),
      Ck = ik(39685);
    let Ak = (() => {
      var kk;
      let ek, ik, Sk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk = [],
        lk = [],
        pk = [],
        yk = [],
        Yk = [],
        Ak = [],
        jk = [],
        sk = [],
        dk = [],
        Vk = [],
        Fk = [],
        uk = [],
        qk = [],
        Ik = [],
        zk = [],
        Qk = [],
        vk = [],
        Ek = [],
        hk = [],
        ak = [],
        Wk = [],
        tk = [],
        Xk = [],
        Bk = [];
      return kk = class {
        constructor() {
          this._dirty = !0, this._tempColor = new bk.f(0, 0, 0, 0), this._globalCurve = new bk.f(0, 0, 0, 0), this._highlightsCurve = new bk.f(0, 0, 0, 0), this._midtonesCurve = new bk.f(0, 0, 0, 0), this._shadowsCurve = new bk.f(0, 0, 0, 0), this._positiveCurve = new bk.f(0, 0, 0, 0), this._negativeCurve = new bk.f(0, 0, 0, 0), this._globalHue = (0, Dk.e)(this, wk, 30), this._globalDensity = ((0, Dk.e)(this, lk), (0, Dk.e)(this, pk, 0)), this._globalSaturation = ((0, Dk.e)(this, yk), (0, Dk.e)(this, Yk, 0)), this._globalExposure = ((0, Dk.e)(this, Ak), (0, Dk.e)(this, jk, 0)), this._highlightsHue = ((0, Dk.e)(this, sk), (0, Dk.e)(this, dk, 30)), this._highlightsDensity = ((0, Dk.e)(this, Vk), (0, Dk.e)(this, Fk, 0)), this._highlightsSaturation = ((0, Dk.e)(this, uk), (0, Dk.e)(this, qk, 0)), this._highlightsExposure = ((0, Dk.e)(this, Ik), (0, Dk.e)(this, zk, 0)), this._midtonesHue = ((0, Dk.e)(this, Qk), (0, Dk.e)(this, vk, 30)), this._midtonesDensity = ((0, Dk.e)(this, Ek), (0, Dk.e)(this, hk, 0)), this._midtonesSaturation = ((0, Dk.e)(this, ak), (0, Dk.e)(this, Wk, 0)), this._midtonesExposure = ((0, Dk.e)(this, tk), (0, Dk.e)(this, Xk, 0)), this._shadowsHue = ((0, Dk.e)(this, Bk), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
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
        _getColorGradingDataToRef(ek, ik, Dk, fk, Sk) {
          null != ek && (ek = kk._Clamp(ek, 0, 360), ik = kk._Clamp(ik, -100, 100), Dk = kk._Clamp(Dk, -100, 100), fk = kk._Clamp(fk, -100, 100), ik = kk._ApplyColorGradingSliderNonlinear(ik), ik *= .5, fk = kk._ApplyColorGradingSliderNonlinear(fk), ik < 0 && (ik *= -1, ek = (ek + 180) % 360), kk._FromHSBToRef(ek, ik, 50 + .25 * fk, Sk), Sk.scaleToRef(2, Sk), Sk.a = 1 + .01 * Dk)
        }
        static _ApplyColorGradingSliderNonlinear(kk) {
          kk /= 100;
          let ek = Math.abs(kk);
          return ek = Math.pow(ek, 2), kk < 0 && (ek *= -1), ek *= 100, ek
        }
        static _FromHSBToRef(ek, ik, Dk, fk) {
          let Sk = kk._Clamp(ek, 0, 360);
          const bk = kk._Clamp(ik / 100, 0, 1),
            rk = kk._Clamp(Dk / 100, 0, 1);
          if (0 === bk) fk.r = rk, fk.g = rk, fk.b = rk;
          else {
            Sk /= 60;
            const kk = Math.floor(Sk),
              ek = Sk - kk,
              ik = rk * (1 - bk),
              Dk = rk * (1 - bk * ek),
              Pk = rk * (1 - bk * (1 - ek));
            switch (kk) {
              case 0:
                fk.r = rk, fk.g = Pk, fk.b = ik;
                break;
              case 1:
                fk.r = Dk, fk.g = rk, fk.b = ik;
                break;
              case 2:
                fk.r = ik, fk.g = rk, fk.b = Pk;
                break;
              case 3:
                fk.r = ik, fk.g = Dk, fk.b = rk;
                break;
              case 4:
                fk.r = Pk, fk.g = ik, fk.b = rk;
                break;
              default:
                fk.r = rk, fk.g = ik, fk.b = Dk
            }
          }
          fk.a = 1
        }
        static _Clamp(kk, ek, ik) {
          return Math.min(Math.max(kk, ek), ik)
        }
        clone() {
          return Lk.b.Clone((() => new kk), this)
        }
        serialize() {
          return Lk.b.Serialize(this)
        }
        _bind(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), kk && (kk.setFloat4(ek, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), kk.setFloat4(ik, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), kk.setFloat4(Dk, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const bk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ek = [(0, fk.I)()], ik = [(0, fk.I)()], Sk = [(0, fk.I)()], rk = [(0, fk.I)()], Pk = [(0, fk.I)()], mk = [(0, fk.I)()], Mk = [(0, fk.I)()], Kk = [(0, fk.I)()], xk = [(0, fk.I)()], nk = [(0, fk.I)()], Uk = [(0, fk.I)()], Hk = [(0, fk.I)()], (0, Dk.d)(null, null, ek, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: kk => "_globalHue" in kk,
            get: kk => kk._globalHue,
            set: (kk, ek) => {
              kk._globalHue = ek
            }
          },
          metadata: bk
        }, wk, lk), (0, Dk.d)(null, null, ik, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "_globalDensity" in kk,
            get: kk => kk._globalDensity,
            set: (kk, ek) => {
              kk._globalDensity = ek
            }
          },
          metadata: bk
        }, pk, yk), (0, Dk.d)(null, null, Sk, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: kk => "_globalSaturation" in kk,
            get: kk => kk._globalSaturation,
            set: (kk, ek) => {
              kk._globalSaturation = ek
            }
          },
          metadata: bk
        }, Yk, Ak), (0, Dk.d)(null, null, rk, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: kk => "_globalExposure" in kk,
            get: kk => kk._globalExposure,
            set: (kk, ek) => {
              kk._globalExposure = ek
            }
          },
          metadata: bk
        }, jk, sk), (0, Dk.d)(null, null, Pk, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: kk => "_highlightsHue" in kk,
            get: kk => kk._highlightsHue,
            set: (kk, ek) => {
              kk._highlightsHue = ek
            }
          },
          metadata: bk
        }, dk, Vk), (0, Dk.d)(null, null, mk, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "_highlightsDensity" in kk,
            get: kk => kk._highlightsDensity,
            set: (kk, ek) => {
              kk._highlightsDensity = ek
            }
          },
          metadata: bk
        }, Fk, uk), (0, Dk.d)(null, null, Mk, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: kk => "_highlightsSaturation" in kk,
            get: kk => kk._highlightsSaturation,
            set: (kk, ek) => {
              kk._highlightsSaturation = ek
            }
          },
          metadata: bk
        }, qk, Ik), (0, Dk.d)(null, null, Kk, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: kk => "_highlightsExposure" in kk,
            get: kk => kk._highlightsExposure,
            set: (kk, ek) => {
              kk._highlightsExposure = ek
            }
          },
          metadata: bk
        }, zk, Qk), (0, Dk.d)(null, null, xk, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: kk => "_midtonesHue" in kk,
            get: kk => kk._midtonesHue,
            set: (kk, ek) => {
              kk._midtonesHue = ek
            }
          },
          metadata: bk
        }, vk, Ek), (0, Dk.d)(null, null, nk, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "_midtonesDensity" in kk,
            get: kk => kk._midtonesDensity,
            set: (kk, ek) => {
              kk._midtonesDensity = ek
            }
          },
          metadata: bk
        }, hk, ak), (0, Dk.d)(null, null, Uk, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: kk => "_midtonesSaturation" in kk,
            get: kk => kk._midtonesSaturation,
            set: (kk, ek) => {
              kk._midtonesSaturation = ek
            }
          },
          metadata: bk
        }, Wk, tk), (0, Dk.d)(null, null, Hk, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: kk => "_midtonesExposure" in kk,
            get: kk => kk._midtonesExposure,
            set: (kk, ek) => {
              kk._midtonesExposure = ek
            }
          },
          metadata: bk
        }, Xk, Bk), bk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bk
        })
      })(), kk.PrepareUniforms = Ck.d, kk
    })();

    function jk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      kk._bind(ek, ik, Dk, fk)
    }
    var sk = ik(39501),
      dk = ik(39694),
      Vk = ik(36734);
    let Fk = (() => {
        var kk;
        let ek, ik, mk, nk, Uk, Hk, lk, Ck, Vk, Fk, uk, qk, Ik, zk, Qk, vk, Ek, hk, ak, Wk, tk, Xk, Bk, ck, Tk, Zk, Ok, gk, Gk = [],
          Nk = [],
          Rk = [],
          Jk = [],
          ke = [],
          ee = [],
          ie = [],
          De = [],
          fe = [],
          Se = [],
          be = [],
          re = [],
          Pe = [],
          me = [],
          Me = [],
          Ke = [],
          xe = [],
          ne = [],
          Ue = [],
          He = [],
          we = [],
          le = [],
          pe = [],
          ye = [],
          Ye = [],
          Le = [],
          Ce = [],
          Ae = [],
          je = [],
          se = [],
          de = [],
          Ve = [],
          Fe = [],
          ue = [],
          qe = [],
          Ie = [],
          ze = [],
          Qe = [],
          ve = [],
          Ee = [],
          he = [],
          ae = [],
          We = [],
          te = [],
          Xe = [],
          Be = [],
          ce = [],
          Te = [],
          oe = [],
          Ze = [],
          Oe = [],
          ge = [],
          Ge = [],
          Ne = [],
          Re = [],
          Je = [];
        return kk = class {
          constructor() {
            this.colorCurves = (0, Dk.e)(this, Gk, new Ak), this._colorCurvesEnabled = ((0, Dk.e)(this, Nk), (0, Dk.e)(this, Rk, !1)), this._colorGradingTexture = ((0, Dk.e)(this, Jk), (0, Dk.e)(this, ke, void 0)), this._colorGradingEnabled = ((0, Dk.e)(this, ee), (0, Dk.e)(this, ie, !1)), this._colorGradingWithGreenDepth = ((0, Dk.e)(this, De), (0, Dk.e)(this, fe, !0)), this._colorGradingBGR = ((0, Dk.e)(this, Se), (0, Dk.e)(this, be, !0)), this._exposure = ((0, Dk.e)(this, re), (0, Dk.e)(this, Pe, 1)), this._toneMappingEnabled = ((0, Dk.e)(this, me), (0, Dk.e)(this, Me, !1)), this._toneMappingType = ((0, Dk.e)(this, Ke), (0, Dk.e)(this, xe, kk.TONEMAPPING_STANDARD)), this._contrast = ((0, Dk.e)(this, ne), (0, Dk.e)(this, Ue, 1)), this._whiteBalanceEnabled = ((0, Dk.e)(this, He), (0, Dk.e)(this, we, !1)), this._temperature = ((0, Dk.e)(this, le), (0, Dk.e)(this, pe, 6500)), this._tint = ((0, Dk.e)(this, ye), (0, Dk.e)(this, Ye, 0)), this._whiteBalanceMatrix = ((0, Dk.e)(this, Le), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, Dk.e)(this, Ce, 0), this.vignetteCenterX = ((0, Dk.e)(this, Ae), (0, Dk.e)(this, je, 0)), this.vignetteCenterY = ((0, Dk.e)(this, se), (0, Dk.e)(this, de, 0)), this.vignetteWeight = ((0, Dk.e)(this, Ve), (0, Dk.e)(this, Fe, 1.5)), this.vignetteColor = ((0, Dk.e)(this, ue), (0, Dk.e)(this, qe, new bk.f(0, 0, 0, 0))), this.vignetteCameraFov = ((0, Dk.e)(this, Ie), (0, Dk.e)(this, ze, .5)), this._vignetteBlendMode = ((0, Dk.e)(this, Qe), (0, Dk.e)(this, ve, kk.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, Dk.e)(this, Ee), (0, Dk.e)(this, he, !1)), this._ditheringEnabled = ((0, Dk.e)(this, ae), (0, Dk.e)(this, We, !1)), this._ditheringIntensity = ((0, Dk.e)(this, te), (0, Dk.e)(this, Xe, 1 / 255)), this._skipFinalColorClamp = ((0, Dk.e)(this, Be), (0, Dk.e)(this, ce, !1)), this._applyByPostProcess = ((0, Dk.e)(this, Te), (0, Dk.e)(this, oe, !1)), this._isEnabled = ((0, Dk.e)(this, Ze), (0, Dk.e)(this, Oe, !0)), this.outputTextureWidth = ((0, Dk.e)(this, ge), (0, Dk.e)(this, Ge, 0)), this.outputTextureHeight = ((0, Dk.e)(this, Ne), (0, Dk.e)(this, Re, 0)), this.onUpdateParameters = ((0, Dk.e)(this, Je), new Sk.c)
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
            kk = Number.isNaN(kk) ? Mk : Math.max(kk, Mk), this._temperature !== kk && (this._temperature = kk, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(kk) {
            kk = (0, rk.Clamp)(kk, -150, Kk), this._tint !== kk && (this._tint = kk, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(kk, ek) {
              const ik = wk(xk(kk, ek), Yk),
                Dk = pk.multiply(ik).multiply(yk);
              return Pk.b.GetAsMatrix3x3(Dk)
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
          prepareDefines(ek) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return ek.WHITEBALANCE = !1, ek.VIGNETTE = !1, ek.TONEMAPPING = 0, ek.CONTRAST = !1, ek.EXPOSURE = !1, ek.COLORCURVES = !1, ek.COLORGRADING = !1, ek.COLORGRADING3D = !1, ek.DITHER = !1, ek.IMAGEPROCESSING = !1, ek.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(ek.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (ek.WHITEBALANCE = this._whiteBalanceEnabled, ek.VIGNETTE = this.vignetteEnabled, ek.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === kk._VIGNETTEMODE_MULTIPLY, ek.VIGNETTEBLENDMODEOPAQUE = !ek.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case kk.TONEMAPPING_KHR_PBR_NEUTRAL:
                ek.TONEMAPPING = 3;
                break;
              case kk.TONEMAPPING_ACES:
                ek.TONEMAPPING = 2;
                break;
              default:
                ek.TONEMAPPING = 1
            } else ek.TONEMAPPING = 0;
            ek.CONTRAST = 1 !== this.contrast, ek.EXPOSURE = 1 !== this.exposure, ek.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, ek.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, ek.COLORGRADING ? ek.COLORGRADING3D = this.colorGradingTexture.is3D : ek.COLORGRADING3D = !1, ek.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, ek.SAMPLER3DBGRMAP = this.colorGradingBGR, ek.DITHER = this._ditheringEnabled, ek.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, ek.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, ek.IMAGEPROCESSING = ek.WHITEBALANCE || ek.VIGNETTE || !!ek.TONEMAPPING || ek.CONTRAST || ek.EXPOSURE || ek.COLORCURVES || ek.COLORGRADING || ek.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(kk, ek) {
            if (this._whiteBalanceEnabled && kk.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && jk(this.colorCurves, kk), this._vignetteEnabled || this._ditheringEnabled) {
              const ik = 1 / (this.outputTextureWidth || kk.JU().getRenderWidth()),
                Dk = 1 / (this.outputTextureHeight || kk.JU().getRenderHeight());
              if (kk.setFloat2("vInverseScreenSize", ik, Dk), this._ditheringEnabled && kk.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const fk = null != ek ? ek : Dk / ik;
                let Sk = Math.tan(.5 * this.vignetteCameraFov),
                  bk = Sk * fk;
                const rk = Math.sqrt(bk * Sk);
                bk = (0, sk.l)(bk, rk, this.vignetteStretch), Sk = (0, sk.l)(Sk, rk, this.vignetteStretch), kk.setFloat4("vignetteSettings1", bk, Sk, -bk * this.vignetteCenterX, -Sk * this.vignetteCenterY);
                const Pk = -2 * this.vignetteWeight;
                kk.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, Pk)
              }
            }
            if (kk.setFloat("exposureLinear", this.exposure), kk.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              kk.setTexture("txColorTransform", this.colorGradingTexture);
              const ek = this.colorGradingTexture.getSize().height;
              kk.setFloat4("colorTransformSettings", (ek - 1) / ek, .5 / ek, ek, this.colorGradingTexture.level)
            }
          }
          clone() {
            return Lk.b.Clone((() => new kk), this)
          }
          serialize() {
            return Lk.b.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ek = [(0, fk.j)()], ik = [(0, fk.I)()], mk = [(0, fk.z)("colorGradingTexture")], nk = [(0, fk.I)()], Uk = [(0, fk.I)()], Hk = [(0, fk.I)()], lk = [(0, fk.I)()], Ck = [(0, fk.I)()], Vk = [(0, fk.I)()], Fk = [(0, fk.I)()], uk = [(0, fk.I)()], qk = [(0, fk.I)()], Ik = [(0, fk.I)()], zk = [(0, fk.I)()], Qk = [(0, fk.I)()], vk = [(0, fk.I)()], Ek = [(0, fk.I)()], hk = [(0, fk.m)()], ak = [(0, fk.I)()], Wk = [(0, fk.I)()], tk = [(0, fk.I)()], Xk = [(0, fk.I)()], Bk = [(0, fk.I)()], ck = [(0, fk.I)()], Tk = [(0, fk.I)()], Zk = [(0, fk.I)()], Ok = [(0, fk.I)()], gk = [(0, fk.I)()], (0, Dk.d)(null, null, ek, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: kk => "colorCurves" in kk,
              get: kk => kk.colorCurves,
              set: (kk, ek) => {
                kk.colorCurves = ek
              }
            },
            metadata: Sk
          }, Gk, Nk), (0, Dk.d)(null, null, ik, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: kk => "_colorCurvesEnabled" in kk,
              get: kk => kk._colorCurvesEnabled,
              set: (kk, ek) => {
                kk._colorCurvesEnabled = ek
              }
            },
            metadata: Sk
          }, Rk, Jk), (0, Dk.d)(null, null, mk, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "_colorGradingTexture" in kk,
              get: kk => kk._colorGradingTexture,
              set: (kk, ek) => {
                kk._colorGradingTexture = ek
              }
            },
            metadata: Sk
          }, ke, ee), (0, Dk.d)(null, null, nk, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: kk => "_colorGradingEnabled" in kk,
              get: kk => kk._colorGradingEnabled,
              set: (kk, ek) => {
                kk._colorGradingEnabled = ek
              }
            },
            metadata: Sk
          }, ie, De), (0, Dk.d)(null, null, Uk, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: kk => "_colorGradingWithGreenDepth" in kk,
              get: kk => kk._colorGradingWithGreenDepth,
              set: (kk, ek) => {
                kk._colorGradingWithGreenDepth = ek
              }
            },
            metadata: Sk
          }, fe, Se), (0, Dk.d)(null, null, Hk, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: kk => "_colorGradingBGR" in kk,
              get: kk => kk._colorGradingBGR,
              set: (kk, ek) => {
                kk._colorGradingBGR = ek
              }
            },
            metadata: Sk
          }, be, re), (0, Dk.d)(null, null, lk, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: kk => "_exposure" in kk,
              get: kk => kk._exposure,
              set: (kk, ek) => {
                kk._exposure = ek
              }
            },
            metadata: Sk
          }, Pe, me), (0, Dk.d)(null, null, Ck, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: kk => "_toneMappingEnabled" in kk,
              get: kk => kk._toneMappingEnabled,
              set: (kk, ek) => {
                kk._toneMappingEnabled = ek
              }
            },
            metadata: Sk
          }, Me, Ke), (0, Dk.d)(null, null, Vk, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: kk => "_toneMappingType" in kk,
              get: kk => kk._toneMappingType,
              set: (kk, ek) => {
                kk._toneMappingType = ek
              }
            },
            metadata: Sk
          }, xe, ne), (0, Dk.d)(null, null, Fk, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: kk => "_contrast" in kk,
              get: kk => kk._contrast,
              set: (kk, ek) => {
                kk._contrast = ek
              }
            },
            metadata: Sk
          }, Ue, He), (0, Dk.d)(null, null, uk, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: kk => "_whiteBalanceEnabled" in kk,
              get: kk => kk._whiteBalanceEnabled,
              set: (kk, ek) => {
                kk._whiteBalanceEnabled = ek
              }
            },
            metadata: Sk
          }, we, le), (0, Dk.d)(null, null, qk, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: kk => "_temperature" in kk,
              get: kk => kk._temperature,
              set: (kk, ek) => {
                kk._temperature = ek
              }
            },
            metadata: Sk
          }, pe, ye), (0, Dk.d)(null, null, Ik, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: kk => "_tint" in kk,
              get: kk => kk._tint,
              set: (kk, ek) => {
                kk._tint = ek
              }
            },
            metadata: Sk
          }, Ye, Le), (0, Dk.d)(null, null, zk, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: kk => "vignetteStretch" in kk,
              get: kk => kk.vignetteStretch,
              set: (kk, ek) => {
                kk.vignetteStretch = ek
              }
            },
            metadata: Sk
          }, Ce, Ae), (0, Dk.d)(null, null, Qk, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: kk => "vignetteCenterX" in kk,
              get: kk => kk.vignetteCenterX,
              set: (kk, ek) => {
                kk.vignetteCenterX = ek
              }
            },
            metadata: Sk
          }, je, se), (0, Dk.d)(null, null, vk, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: kk => "vignetteCenterY" in kk,
              get: kk => kk.vignetteCenterY,
              set: (kk, ek) => {
                kk.vignetteCenterY = ek
              }
            },
            metadata: Sk
          }, de, Ve), (0, Dk.d)(null, null, Ek, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: kk => "vignetteWeight" in kk,
              get: kk => kk.vignetteWeight,
              set: (kk, ek) => {
                kk.vignetteWeight = ek
              }
            },
            metadata: Sk
          }, Fe, ue), (0, Dk.d)(null, null, hk, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "vignetteColor" in kk,
              get: kk => kk.vignetteColor,
              set: (kk, ek) => {
                kk.vignetteColor = ek
              }
            },
            metadata: Sk
          }, qe, Ie), (0, Dk.d)(null, null, ak, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: kk => "vignetteCameraFov" in kk,
              get: kk => kk.vignetteCameraFov,
              set: (kk, ek) => {
                kk.vignetteCameraFov = ek
              }
            },
            metadata: Sk
          }, ze, Qe), (0, Dk.d)(null, null, Wk, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: kk => "_vignetteBlendMode" in kk,
              get: kk => kk._vignetteBlendMode,
              set: (kk, ek) => {
                kk._vignetteBlendMode = ek
              }
            },
            metadata: Sk
          }, ve, Ee), (0, Dk.d)(null, null, tk, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: kk => "_vignetteEnabled" in kk,
              get: kk => kk._vignetteEnabled,
              set: (kk, ek) => {
                kk._vignetteEnabled = ek
              }
            },
            metadata: Sk
          }, he, ae), (0, Dk.d)(null, null, Xk, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: kk => "_ditheringEnabled" in kk,
              get: kk => kk._ditheringEnabled,
              set: (kk, ek) => {
                kk._ditheringEnabled = ek
              }
            },
            metadata: Sk
          }, We, te), (0, Dk.d)(null, null, Bk, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: kk => "_ditheringIntensity" in kk,
              get: kk => kk._ditheringIntensity,
              set: (kk, ek) => {
                kk._ditheringIntensity = ek
              }
            },
            metadata: Sk
          }, Xe, Be), (0, Dk.d)(null, null, ck, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: kk => "_skipFinalColorClamp" in kk,
              get: kk => kk._skipFinalColorClamp,
              set: (kk, ek) => {
                kk._skipFinalColorClamp = ek
              }
            },
            metadata: Sk
          }, ce, Te), (0, Dk.d)(null, null, Tk, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: kk => "_applyByPostProcess" in kk,
              get: kk => kk._applyByPostProcess,
              set: (kk, ek) => {
                kk._applyByPostProcess = ek
              }
            },
            metadata: Sk
          }, oe, Ze), (0, Dk.d)(null, null, Zk, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: kk => "_isEnabled" in kk,
              get: kk => kk._isEnabled,
              set: (kk, ek) => {
                kk._isEnabled = ek
              }
            },
            metadata: Sk
          }, Oe, ge), (0, Dk.d)(null, null, Ok, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: kk => "outputTextureWidth" in kk,
              get: kk => kk.outputTextureWidth,
              set: (kk, ek) => {
                kk.outputTextureWidth = ek
              }
            },
            metadata: Sk
          }, Ge, Ne), (0, Dk.d)(null, null, gk, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: kk => "outputTextureHeight" in kk,
              get: kk => kk.outputTextureHeight,
              set: (kk, ek) => {
                kk.outputTextureHeight = ek
              }
            },
            metadata: Sk
          }, Re, Je), Sk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Sk
          })
        })(), kk.TONEMAPPING_STANDARD = 0, kk.TONEMAPPING_ACES = 1, kk.TONEMAPPING_KHR_PBR_NEUTRAL = 2, kk.PrepareUniforms = dk.g, kk.PrepareSamplers = dk.c, kk._VIGNETTEMODE_MULTIPLY = 0, kk._VIGNETTEMODE_OPAQUE = 1, kk
      })(),
      uk = !1;

    function qk(kk) {
      const ek = Lk.b.Parse((() => new Fk), kk, null, null);
      return void 0 !== kk.vignetteCentreX && (ek.vignetteCenterX = kk.vignetteCentreX), void 0 !== kk.vignetteCentreY && (ek.vignetteCenterY = kk.vignetteCentreY), ek
    }

    function Ik() {
      uk || (uk = !0, Fk.Parse = qk, Lk.b._ImageProcessingConfigurationParser = qk, (0, Vk.h)("BABYLON.ImageProcessingConfiguration", Fk))
    }
  },
  39696: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk
    });
    var Dk = ik(38272),
      fk = ik(39662);
    class Sk {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Dk = arguments.length > 3 ? arguments[3] : void 0,
          fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Sk = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = kk, this._noUBO = !kk.supportsUniformBuffers || fk, this._dynamic = ik, this._name = Dk ?? "no-name", this._data = ek || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === Sk && this._engine._features.trackUbosInFrame || !0 === Sk) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.N7 = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.N7 = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
        let ek;
        if (ek = kk <= 2 ? kk : 4, this._uniformLocationPointer % ek !== 0) {
          const kk = this._uniformLocationPointer;
          this._uniformLocationPointer += ek - this._uniformLocationPointer % ek;
          const ik = this._uniformLocationPointer - kk;
          for (let ek = 0; ek < ik; ek++) this._data.push(0)
        }
      }
      addUniform(kk, ek) {
        let ik, Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (Dk > 0 && "number" === typeof ek && (this._uniformArraySizes[kk] = {
            strideSize: ek,
            arraySize: Dk
          }), void 0 === this._uniformLocations[kk] && (this._uniformNames.push(kk), !this._noUBO)) {
          if (Dk > 0) {
            if (ek instanceof Array) throw "addUniform should not be use with Array in UBO: " + kk;
            if (this._fillAlignment(4), 16 == ek) ek *= Dk;
            else {
              ek = ek * Dk + (4 - ek) * Dk
            }
            ik = [];
            for (let kk = 0; kk < ek; kk++) ik.push(0)
          } else {
            if (ek instanceof Array) ik = ek, ek = ik.length;
            else {
              ik = [];
              for (let kk = 0; kk < ek; kk++) ik.push(0)
            }
            this._fillAlignment(ek)
          }
          this._uniformSizes[kk] = ek, this._uniformLocations[kk] = this._uniformLocationPointer, this._uniformLocationPointer += ek;
          for (let kk = 0; kk < ek; kk++) this._data.push(ik[kk]);
          this._needSync = !0
        }
      }
      addMatrix(kk, ek) {
        this.addUniform(kk, Array.prototype.slice.call(ek.Tik()))
      }
      addFloat2(kk, ek, ik) {
        const Dk = [ek, ik];
        this.addUniform(kk, Dk)
      }
      addFloat3(kk, ek, ik, Dk) {
        const fk = [ek, ik, Dk];
        this.addUniform(kk, fk)
      }
      addColor3(kk, ek) {
        const ik = [ek.r, ek.g, ek.b];
        this.addUniform(kk, ik)
      }
      addColor4(kk, ek, ik) {
        const Dk = [ek.r, ek.g, ek.b, ik];
        this.addUniform(kk, Dk)
      }
      addVector3(kk, ek) {
        const ik = [ek.x, ek.y, ek.z];
        this.addUniform(kk, ik)
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
        let ek = 0;
        for (const ik in this._uniformLocations)
          if (kk.push(ik), 10 === ++ek) break;
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
      _buffersEqual(kk, ek) {
        for (let ik = 0; ik < kk.length; ++ik)
          if (kk[ik] !== ek[ik]) return !1;
        return !0
      }
      _copyBuffer(kk, ek) {
        for (let ik = 0; ik < kk.length; ++ik) ek[ik] = kk[ik]
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
        let ek = this._slotByOwner.get(kk);
        if (void 0 === ek && (ek = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(kk, ek), this._ownerCount++, kk._uniformBuffersWithOwnedSlot || (kk._uniformBuffersWithOwnedSlot = []), kk._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(ek, kk._uniformBuffersWithOwnedSlot)), this._slotGeneration[ek] === this._dataGeneration) return this._bufferIndex = ek, this._buffer = this._buffers[ek][0], this.bindUniformBuffer(), this._slotFrameId[ek] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const ik = this._buffers[ek][1];
        this._slotFrameId[ek] === this._currentFrameId && ik && !this._buffersEqual(this._bufferData, ik) && (ek = this._takeFreeSlot(!1)), this._bufferIndex = ek, this._buffer = this._buffers[ek][0], this.bindUniformBuffer();
        const Dk = this._buffers[ek][1];
        Dk && this._buffersEqual(this._bufferData, Dk) || (Dk && this._copyBuffer(this._bufferData, Dk), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[ek] = this._currentFrameId, this._slotGeneration[ek] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(kk) {
        for (let ik = 0; ik < this._freeSlots.length; ++ik) {
          const ek = this._freeSlots[ik];
          if (this._slotFrameId[ek] !== this._currentFrameId) return kk && (this._freeSlots[ik] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), ek
        }
        this._rebuild();
        const ek = this._buffers.length - 1;
        return kk || this._freeSlots.push(ek), ek
      }
      _releaseOwnerSlot(kk) {
        const ek = this._slotByOwner?.get(kk);
        if (void 0 === ek) return;
        this._slotByOwner.delete(kk);
        const ik = this._ownerListsBySlot.get(ek);
        ik && (this._removeOwnerBacklink(ik), this._ownerListsBySlot.delete(ek)), this._ownerCount--, this._freeSlots.push(ek)
      }
      _removeOwnerBacklink(kk) {
        const ek = kk.indexOf(this); - 1 !== ek && (kk[ek] = kk[kk.length - 1], kk.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(kk, ek, ik) {
        this._checkNewFrame();
        let fk = this._uniformLocations[kk];
        if (void 0 === fk) {
          if (this._buffer) return void Dk.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + kk);
          this.addUniform(kk, ik), fk = this._uniformLocations[kk]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let kk = 0; kk < ik; kk++) this._bufferData[fk + kk] = ek[kk];
          this._dataGeneration++
        } else {
          let kk = !1;
          for (let Dk = 0; Dk < ik; Dk++)(16 === ik && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[fk + Dk] !== Math.fround(ek[Dk])) && (kk = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[fk + Dk] = ek[Dk]);
          this._needSync = this._needSync || kk, kk && this._dataGeneration++
        }
      }
      updateUniformArray(kk, ek, ik) {
        this._checkNewFrame();
        const Sk = this._uniformLocations[kk];
        if (void 0 === Sk) return void Dk.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const bk = this._uniformArraySizes[kk];
        if (this._dynamic) {
          for (let kk = 0; kk < ik; kk++) this._bufferData[Sk + kk] = ek[kk];
          this._dataGeneration++
        } else {
          let kk = !1,
            Dk = 0,
            rk = 0;
          for (let Pk = 0; Pk < ik; Pk++)
            if (this._bufferData[Sk + 4 * rk + Dk] !== fk.i.FloatRound(ek[Pk]) && (kk = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Sk + 4 * rk + Dk] = ek[Pk]), Dk++, Dk === bk.strideSize) {
              for (; Dk < 4; Dk++) this._bufferData[Sk + 4 * rk + Dk] = 0;
              Dk = 0, rk++
            } this._needSync = this._needSync || kk, kk && this._dataGeneration++
        }
      }
      _cacheMatrix(kk, ek) {
        this._checkNewFrame();
        const ik = this._valueCache[kk],
          Dk = ek.updateFlag;
        return (void 0 === ik || ik !== Dk) && (this._valueCache[kk] = Dk, !0)
      }
      _updateMatrix3x3ForUniform(kk, ek) {
        for (let ik = 0; ik < 3; ik++) Sk._TempBuffer[4 * ik] = ek[3 * ik], Sk._TempBuffer[4 * ik + 1] = ek[3 * ik + 1], Sk._TempBuffer[4 * ik + 2] = ek[3 * ik + 2], Sk._TempBuffer[4 * ik + 3] = 0;
        this.updateUniform(kk, Sk._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(kk, ek) {
        this._currentEffect.setMatrix3x3(kk, ek)
      }
      _updateMatrix2x2ForEffect(kk, ek) {
        this._currentEffect.setMatrix2x2(kk, ek)
      }
      _updateMatrix2x2ForUniform(kk, ek) {
        for (let ik = 0; ik < 2; ik++) Sk._TempBuffer[4 * ik] = ek[2 * ik], Sk._TempBuffer[4 * ik + 1] = ek[2 * ik + 1], Sk._TempBuffer[4 * ik + 2] = 0, Sk._TempBuffer[4 * ik + 3] = 0;
        this.updateUniform(kk, Sk._TempBuffer, 8)
      }
      _updateFloatForEffect(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(kk + ik, ek)
      }
      _updateFloatForUniform(kk, ek) {
        Sk._TempBuffer[0] = ek, this.updateUniform(kk, Sk._TempBuffer, 1)
      }
      _updateFloat2ForEffect(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(kk + Dk, ek, ik)
      }
      _updateFloat2ForUniform(kk, ek, ik) {
        Sk._TempBuffer[0] = ek, Sk._TempBuffer[1] = ik, this.updateUniform(kk, Sk._TempBuffer, 2)
      }
      _updateFloat3ForEffect(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(kk + fk, ek, ik, Dk)
      }
      _updateFloat3ForUniform(kk, ek, ik, Dk) {
        Sk._TempBuffer[0] = ek, Sk._TempBuffer[1] = ik, Sk._TempBuffer[2] = Dk, this.updateUniform(kk, Sk._TempBuffer, 3)
      }
      _updateFloat4ForEffect(kk, ek, ik, Dk, fk) {
        let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(kk + Sk, ek, ik, Dk, fk)
      }
      _updateFloat4ForUniform(kk, ek, ik, Dk, fk) {
        Sk._TempBuffer[0] = ek, Sk._TempBuffer[1] = ik, Sk._TempBuffer[2] = Dk, Sk._TempBuffer[3] = fk, this.updateUniform(kk, Sk._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[kk]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(kk + ik, ek);
            break;
          case 3:
            this._currentEffect.setFloatArray3(kk + ik, ek);
            break;
          case 4:
            this._currentEffect.setFloatArray4(kk + ik, ek);
            break;
          default:
            this._currentEffect.setFloatArray(kk + ik, ek)
        }
      }
      _updateFloatArrayForUniform(kk, ek) {
        this.updateUniformArray(kk, ek, ek.length)
      }
      _updateArrayForEffect(kk, ek) {
        this._currentEffect.setArray(kk, ek)
      }
      _updateArrayForUniform(kk, ek) {
        this.updateUniformArray(kk, ek, ek.length)
      }
      _updateIntArrayForEffect(kk, ek) {
        this._currentEffect.setIntArray(kk, ek)
      }
      _updateIntArrayForUniform(kk, ek) {
        Sk._TempBufferInt32View.set(ek), this.updateUniformArray(kk, Sk._TempBuffer, ek.length)
      }
      _updateUIntArrayForEffect(kk, ek) {
        this._currentEffect.setUIntArray(kk, ek)
      }
      _updateUIntArrayForUniform(kk, ek) {
        Sk._TempBufferUInt32View.set(ek), this.updateUniformArray(kk, Sk._TempBuffer, ek.length)
      }
      _updateMatrixForEffect(kk, ek) {
        this._currentEffect.setMatrix(kk, ek)
      }
      _updateMatrixForUniform(kk, ek) {
        this._cacheMatrix(kk, ek) && this.updateUniform(kk, ek.Tik(), 16)
      }
      _updateMatricesForEffect(kk, ek) {
        this._currentEffect.setMatrices(kk, ek)
      }
      _updateMatricesForUniform(kk, ek) {
        this.updateUniform(kk, ek, ek.length)
      }
      _updateVector3ForEffect(kk, ek) {
        this._currentEffect.setVector3(kk, ek)
      }
      _updateVector3ForUniform(kk, ek) {
        Sk._TempBuffer[0] = ek.x, Sk._TempBuffer[1] = ek.y, Sk._TempBuffer[2] = ek.z, this.updateUniform(kk, Sk._TempBuffer, 3)
      }
      _updateVector4ForEffect(kk, ek) {
        this._currentEffect.setVector4(kk, ek)
      }
      _updateVector4ForUniform(kk, ek) {
        Sk._TempBuffer[0] = ek.x, Sk._TempBuffer[1] = ek.y, Sk._TempBuffer[2] = ek.z, Sk._TempBuffer[3] = ek.w, this.updateUniform(kk, Sk._TempBuffer, 4)
      }
      _updateColor3ForEffect(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(kk + ik, ek)
      }
      _updateColor3ForUniform(kk, ek) {
        Sk._TempBuffer[0] = ek.r, Sk._TempBuffer[1] = ek.g, Sk._TempBuffer[2] = ek.b, this.updateUniform(kk, Sk._TempBuffer, 3)
      }
      _updateColor4ForEffect(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(kk + Dk, ek, ik)
      }
      _updateDirectColor4ForEffect(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(kk + ik, ek)
      }
      _updateColor4ForUniform(kk, ek, ik) {
        Sk._TempBuffer[0] = ek.r, Sk._TempBuffer[1] = ek.g, Sk._TempBuffer[2] = ek.b, Sk._TempBuffer[3] = ik, this.updateUniform(kk, Sk._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(kk, ek) {
        Sk._TempBuffer[0] = ek.r, Sk._TempBuffer[1] = ek.g, Sk._TempBuffer[2] = ek.b, Sk._TempBuffer[3] = ek.a, this.updateUniform(kk, Sk._TempBuffer, 4)
      }
      _updateIntForEffect(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(kk + ik, ek)
      }
      _updateIntForUniform(kk, ek) {
        Sk._TempBufferInt32View[0] = ek, this.updateUniform(kk, Sk._TempBuffer, 1)
      }
      _updateInt2ForEffect(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(kk + Dk, ek, ik)
      }
      _updateInt2ForUniform(kk, ek, ik) {
        Sk._TempBufferInt32View[0] = ek, Sk._TempBufferInt32View[1] = ik, this.updateUniform(kk, Sk._TempBuffer, 2)
      }
      _updateInt3ForEffect(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(kk + fk, ek, ik, Dk)
      }
      _updateInt3ForUniform(kk, ek, ik, Dk) {
        Sk._TempBufferInt32View[0] = ek, Sk._TempBufferInt32View[1] = ik, Sk._TempBufferInt32View[2] = Dk, this.updateUniform(kk, Sk._TempBuffer, 3)
      }
      _updateInt4ForEffect(kk, ek, ik, Dk, fk) {
        let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(kk + Sk, ek, ik, Dk, fk)
      }
      _updateInt4ForUniform(kk, ek, ik, Dk, fk) {
        Sk._TempBufferInt32View[0] = ek, Sk._TempBufferInt32View[1] = ik, Sk._TempBufferInt32View[2] = Dk, Sk._TempBufferInt32View[3] = fk, this.updateUniform(kk, Sk._TempBuffer, 4)
      }
      _updateUIntForEffect(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(kk + ik, ek)
      }
      _updateUIntForUniform(kk, ek) {
        Sk._TempBufferUInt32View[0] = ek, this.updateUniform(kk, Sk._TempBuffer, 1)
      }
      _updateUInt2ForEffect(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(kk + Dk, ek, ik)
      }
      _updateUInt2ForUniform(kk, ek, ik) {
        Sk._TempBufferUInt32View[0] = ek, Sk._TempBufferUInt32View[1] = ik, this.updateUniform(kk, Sk._TempBuffer, 2)
      }
      _updateUInt3ForEffect(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(kk + fk, ek, ik, Dk)
      }
      _updateUInt3ForUniform(kk, ek, ik, Dk) {
        Sk._TempBufferUInt32View[0] = ek, Sk._TempBufferUInt32View[1] = ik, Sk._TempBufferUInt32View[2] = Dk, this.updateUniform(kk, Sk._TempBuffer, 3)
      }
      _updateUInt4ForEffect(kk, ek, ik, Dk, fk) {
        let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(kk + Sk, ek, ik, Dk, fk)
      }
      _updateUInt4ForUniform(kk, ek, ik, Dk, fk) {
        Sk._TempBufferUInt32View[0] = ek, Sk._TempBufferUInt32View[1] = ik, Sk._TempBufferUInt32View[2] = Dk, Sk._TempBufferUInt32View[3] = fk, this.updateUniform(kk, Sk._TempBuffer, 4)
      }
      setTexture(kk, ek) {
        this._currentEffect.setTexture(kk, ek)
      }
      setTextureArray(kk, ek) {
        this._currentEffect.setTextureArray(kk, ek)
      }
      bindTexture(kk, ek) {
        this._currentEffect._bindTexture(kk, ek)
      }
      updateUniformDirectly(kk, ek) {
        this.updateUniform(kk, ek, ek.length), this.update()
      }
      bindToEffect(kk, ek) {
        this._currentEffect = kk, this._currentEffectName = ek
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(kk) {
        if (!this._buffers) return this._buffer === kk;
        for (let ek = 0; ek < this._buffers.length; ++ek) {
          if (this._buffers[ek][0] === kk) return this._bufferIndex = ek, this._buffer = kk, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[ek][1] && (this._bufferData.set(this._buffers[ek][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(kk) {
        return void 0 !== this._uniformLocations[kk]
      }
      dispose() {
        if (this._noUBO) return;
        const kk = this._engine._uniformBuffers,
          ek = kk.indexOf(this);
        if (-1 !== ek && (kk[ek] = kk[kk.length - 1], kk.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let kk = 0; kk < this._buffers.length; ++kk) {
            const ek = this._buffers[kk][0];
            this._engine._releaseBuffer(ek)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    Sk._MAX_UNIFORM_SIZE = 256, Sk._TempBuffer = new Float32Array(Sk._MAX_UNIFORM_SIZE), Sk._TempBufferInt32View = new Int32Array(Sk._TempBuffer.buffer), Sk._TempBufferUInt32View = new Uint32Array(Sk._TempBuffer.buffer)
  },
  39486: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk
    });
    var Dk = ik(39492);
    class fk extends Dk.b {
      constructor(kk) {
        super(), this._buffer = kk
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  39574: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Pk,
      d: () => mk
    });
    const Dk = "__bjs_serializable__",
      fk = new WeakMap;

    function Sk(kk, ek) {
      return Object.prototype.hasOwnProperty.call(kk, ek)
    }
    const bk = function() {
      let kk = Symbol.metadata;
      return kk || (kk = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: kk
      })), kk
    }();

    function rk(kk) {
      return "function" === typeof kk ? kk : kk?.constructor
    }

    function Pk(kk) {
      if (!kk) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(bk)}) polyfill must run before decorated classes are evaluated.`);
      return Sk(kk, Dk) || (kk[Dk] = {}), kk[Dk]
    }

    function mk(kk) {
      const ek = rk(kk),
        ik = ek ? ek[bk] : void 0;
      if (!ik) return {};
      const Pk = fk.get(ik);
      if (Pk) return Pk;
      const mk = {},
        Mk = [];
      let Kk = ik;
      for (; Kk;) Mk.push(Kk), Kk = Object.getPrototypeOf(Kk);
      for (const fk of Mk)
        if (Sk(fk, Dk)) {
          const kk = fk[Dk];
          for (const ek in kk) mk[ek] = kk[ek]
        } return fk.set(ik, mk), mk
    }
  },
  39570: (kk, ek, ik) => {
    ik.d(ek, {
      D: () => Mk,
      F: () => Kk,
      I: () => bk,
      c: () => yk,
      e: () => Sk,
      i: () => pk,
      j: () => nk,
      k: () => Pk,
      m: () => Uk,
      p: () => mk,
      t: () => wk,
      u: () => xk,
      v: () => Hk,
      z: () => rk
    });
    var Dk = ik(39574);

    function fk(kk, ek) {
      return (ik, fk) => {
        if (!fk.metadata) return;
        const Sk = String(fk.name),
          bk = (0, Dk.c)(fk.metadata);
        bk[Sk] || (bk[Sk] = {
          type: kk,
          sourceName: ek
        })
      }
    }

    function Sk(kk) {
      return function(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (ik, Dk) => {
          const fk = ek || "_" + String(Dk.name);
          return {
            init(kk) {
              return void 0 === kk && fk in this || (this[fk] = kk), kk
            },
            get() {
              return this[fk]
            },
            set(ek) {
              "function" === typeof this[fk]?.equals && this[fk].equals(ek) || this[fk] !== ek && (this[fk] = ek, this[kk]())
            }
          }
        }
      }(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function bk(kk) {
      return fk(0, kk)
    }

    function rk(kk) {
      return fk(1, kk)
    }

    function Pk(kk) {
      return fk(2, kk)
    }

    function mk(kk) {
      return fk(3, kk)
    }

    function Mk(kk) {
      return fk(4, kk)
    }

    function Kk(kk) {
      return fk(5, kk)
    }

    function xk(kk) {
      return fk(6, kk)
    }

    function nk(kk) {
      return fk(7, kk)
    }

    function Uk(kk) {
      return fk(8, kk)
    }

    function Hk(kk) {
      return fk(10, kk)
    }

    function wk(kk) {
      return fk(12, kk)
    }

    function lk(kk, ek, ik) {
      const Dk = String(ek.name);
      let fk = null;
      const Sk = function() {
        if (null === fk) {
          fk = kk, "undefined" !== typeof _native && _native[Dk] && (fk = ik(_native[Dk], kk));
          const bk = this && (ek.static ? this : Object.getPrototypeOf(this));
          bk?.[Dk] === Sk && (bk[Dk] = fk)
        }
        for (var bk = arguments.length, rk = new Array(bk), Pk = 0; Pk < bk; Pk++) rk[Pk] = arguments[Pk];
        return fk.apply(this, rk)
      };
      return Sk
    }

    function pk(kk, ek) {
      return lk(kk, ek, (kk => kk))
    }

    function yk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (ik, Dk) => {
        const fk = ek || "_" + String(Dk.name);
        return {
          get() {
            return this[fk]?.value
          },
          set(ek) {
            "function" === typeof this[fk]?.value?.equals && this[fk].value.equals(ek) || this[fk].value !== ek && (this[fk].value = ek, this[kk]())
          }
        }
      }
    }
    pk.filter = function(kk) {
      return (ek, ik) => lk(ek, ik, ((ek, ik) => function() {
        for (var Dk = arguments.length, fk = new Array(Dk), Sk = 0; Sk < Dk; Sk++) fk[Sk] = arguments[Sk];
        return kk(...fk) ? ek(...fk) : ik.apply(this, fk)
      }))
    }
  },
  39585: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => mk
    });
    var Dk = ik(39447),
      fk = ik(39592),
      Sk = ik(36874),
      bk = ik(36698),
      rk = ik(39574);
    const Pk = function(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Sk = kk();
      fk.c && fk.c.HasTags(ek) && fk.c.AddTagsTo(Sk, fk.c.GetTags(ek, !0));
      const bk = (0, rk.d)(Sk),
        Pk = {};
      for (const fk in bk) {
        const kk = bk[fk],
          rk = ek[fk],
          Mk = kk.type;
        if (void 0 !== rk && null !== rk && ("uniqueId" !== fk || mk.AllowLoadingUniqueId)) switch (Mk) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof rk.slice ? Sk[fk] = rk.slice() : Sk[fk] = rk;
            break;
          case 1:
            Dk.cloneTexturesOnlyOnce && Pk[rk.uniqueId] ? Sk[fk] = Pk[rk.uniqueId] : (Sk[fk] = ik || rk.isRenderTarget ? rk : rk.clone(), Pk[rk.uniqueId] = Sk[fk]);
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
            Sk[fk] = ik ? rk : rk.clone()
        }
      }
      return Sk
    };
    class mk {
      static AppendSerializedAnimations(kk, ek) {
        if (kk.animations) {
          ek.animations = [];
          for (let ik = 0; ik < kk.animations.length; ik++) {
            const Dk = kk.animations[ik];
            ek.animations.push(Dk.serialize())
          }
        }
      }
      static Serialize(kk, ek) {
        ek || (ek = {}), fk.c && (ek.tags = fk.c.GetTags(kk));
        const ik = (0, rk.d)(kk);
        for (const Dk in ik) {
          const fk = ik[Dk],
            Sk = fk.sourceName || Dk,
            bk = fk.type,
            rk = kk[Dk];
          if (void 0 !== rk && null !== rk && ("uniqueId" !== Dk || mk.AllowLoadingUniqueId)) switch (bk) {
            case 0:
              Array.isArray(rk) ? ek[Sk] = rk.slice() : ek[Sk] = rk;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              ek[Sk] = rk.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              ek[Sk] = rk.Tik();
              break;
            case 6:
            case 11:
              ek[Sk] = rk.id
          }
        }
        return ek
      }
      static ParseProperties(kk, ek, ik, Dk) {
        Dk || (Dk = "");
        const fk = (0, rk.d)(ek);
        for (const rk in fk) {
          const Pk = fk[rk],
            Mk = kk[Pk.sourceName || rk],
            Kk = Pk.type;
          if (void 0 !== Mk && null !== Mk && ("uniqueId" !== rk || mk.AllowLoadingUniqueId)) {
            const kk = ek;
            switch (Kk) {
              case 0:
                kk[rk] = Mk;
                break;
              case 1:
                ik && (kk[rk] = mk._TextureParser(Mk, ik, Dk));
                break;
              case 2:
                kk[rk] = Sk.e.FromArray(Mk);
                break;
              case 3:
                kk[rk] = mk._FresnelParametersParser(Mk);
                break;
              case 4:
                kk[rk] = bk.l.FromArray(Mk);
                break;
              case 5:
                kk[rk] = bk.o.FromArray(Mk);
                break;
              case 6:
                ik && (kk[rk] = ik.getLastMeshById(Mk));
                break;
              case 7:
                kk[rk] = mk._ColorCurvesParser(Mk);
                break;
              case 8:
                kk[rk] = Sk.f.FromArray(Mk);
                break;
              case 9:
                kk[rk] = mk._ImageProcessingConfigurationParser(Mk);
                break;
              case 10:
                kk[rk] = bk.c.FromArray(Mk);
                break;
              case 11:
                ik && (kk[rk] = ik.getCameraById(Mk));
                break;
              case 12:
                kk[rk] = bk.b.FromArray(Mk);
                break;
              case 13:
                kk[rk] = bk.p.FromArray(Mk)
            }
          }
        }
      }
      static Parse(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Sk = kk();
        return fk.c && fk.c.AddTagsTo(Sk, ek.tags), mk.ParseProperties(ek, Sk, ik, Dk), Sk
      }
      static Clone(kk, ek) {
        return Pk(kk, ek, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(kk, ek) {
        return Pk(kk, ek, !0)
      }
    }
    mk.AllowLoadingUniqueId = !1, mk._ImageProcessingConfigurationParser = kk => {
      throw (0, Dk.k)("ImageProcessingConfiguration")
    }, mk._FresnelParametersParser = kk => {
      throw (0, Dk.k)("FresnelParameters")
    }, mk._ColorCurvesParser = kk => {
      throw (0, Dk.k)("ColorCurves")
    }, mk._TextureParser = (kk, ek, ik) => {
      throw (0, Dk.k)("Texture")
    }
  },
  39523: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk
    });
    var Dk = ik(39470);
    class fk {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = fk.Enabled, this._lastSecValueCount++
      }
      addCount(kk, ek) {
        fk.Enabled && (this._current += kk, this._hasCurrentValue = !0, ek && this._fetchResult())
      }
      beginMonitoring() {
        fk.Enabled && (this._startMonitoringTime = Dk.d.Now)
      }
      endMonitoring() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!fk.Enabled) return;
        kk && this.fetchNewFrame();
        const ek = Dk.d.Now;
        this._current = ek - this._startMonitoringTime, this._hasCurrentValue = !0, kk && this._fetchResult()
      }
      VY() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const kk = Dk.d.Now;
        kk - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = kk, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    fk.Enabled = !0
  },
  39672: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk,
      h: () => Dk
    });
    class Dk {
      constructor(kk) {
        this.length = 0, this.data = new Array(kk), this._id = Dk._GlobalId++
      }
      push(kk) {
        this.data[this.length++] = kk, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(kk) {
        for (let ek = 0; ek < this.length; ek++) kk(this.data[ek])
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
          for (let ek = 0; ek < kk.length; ek++) this.data[this.length++] = (kk.data || kk)[ek]
        }
      }
      indexOf(kk) {
        const ek = this.data.indexOf(kk);
        return ek >= this.length ? -1 : ek
      }
      contains(kk) {
        return -1 !== this.indexOf(kk)
      }
    }
    Dk._GlobalId = 0;
    class fk extends Dk {
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
          for (let ek = 0; ek < kk.length; ek++) {
            const ik = (kk.data || kk)[ek];
            this.pushNoDuplicate(ik)
          }
        }
      }
    }
  },
  39592: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk
    });
    class Dk {
      static Eval(kk, ek) {
        return "true" === (kk = kk.match(/\([^()]*\)/g) ? kk.replace(/\([^()]*\)/g, (kk => (kk = kk.slice(1, kk.length - 1), Dk._HandleParenthesisContent(kk, ek)))) : Dk._HandleParenthesisContent(kk, ek)) || "false" !== kk && Dk.Eval(kk, ek)
      }
      static _HandleParenthesisContent(kk, ek) {
        let ik;
        ek = ek || (kk => "true" === kk);
        const fk = kk.split("||");
        for (const Sk in fk)
          if (Object.prototype.hasOwnProperty.call(fk, Sk)) {
            let kk = Dk._SimplifyNegation(fk[Sk].trim());
            const bk = kk.split("&&");
            if (bk.length > 1)
              for (let fk = 0; fk < bk.length; ++fk) {
                const Sk = Dk._SimplifyNegation(bk[fk].trim());
                if (ik = "true" !== Sk && "false" !== Sk ? "!" === Sk[0] ? !ek(Sk.substring(1)) : ek(Sk) : "true" === Sk, !ik) {
                  kk = "false";
                  break
                }
              }
            if (ik || "true" === kk) {
              ik = !0;
              break
            }
            ik = "true" !== kk && "false" !== kk ? "!" === kk[0] ? !ek(kk.substring(1)) : ek(kk) : "true" === kk
          } return ik ? "true" : "false"
      }
      static _SimplifyNegation(kk) {
        return "!true" === (kk = (kk = kk.replace(/^[\s!]+/, (kk => (kk = kk.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? kk = "false" : "!false" === kk && (kk = "true"), kk
      }
    }
    class fk {
      static EnableFor(kk) {
        kk._tags = kk._tags || {}, kk.hasTags = () => fk.HasTags(kk), kk.addTags = ek => fk.AddTagsTo(kk, ek), kk.removeTags = ek => fk.RemoveTagsFrom(kk, ek), kk.matchesTagsQuery = ek => fk.MatchesQuery(kk, ek)
      }
      static DisableFor(kk) {
        delete kk._tags, delete kk.hasTags, delete kk.addTags, delete kk.removeTags, delete kk.matchesTagsQuery
      }
      static HasTags(kk) {
        if (!kk._tags) return !1;
        const ek = kk._tags;
        for (const ik in ek)
          if (Object.prototype.hasOwnProperty.call(ek, ik)) return !0;
        return !1
      }
      static GetTags(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!kk._tags) return null;
        if (ek) {
          const ek = [];
          for (const ik in kk._tags) Object.prototype.hasOwnProperty.call(kk._tags, ik) && !0 === kk._tags[ik] && ek.push(ik);
          return ek.join(" ")
        }
        return kk._tags
      }
      static AddTagsTo(kk, ek) {
        if (!ek) return;
        if ("string" !== typeof ek) return;
        const ik = ek.split(" ");
        for (const Dk of ik) fk._AddTagTo(kk, Dk)
      }
      static _AddTagTo(kk, ek) {
        "" !== (ek = ek.trim()) && "true" !== ek && "false" !== ek && (ek.match(/[\s]/) || ek.match(/^([!]|([|]|[&]){2})/) || (fk.EnableFor(kk), kk._tags[ek] = !0))
      }
      static RemoveTagsFrom(kk, ek) {
        if (!fk.HasTags(kk)) return;
        const ik = ek.split(" ");
        for (const Dk in ik) fk._RemoveTagFrom(kk, ik[Dk])
      }
      static _RemoveTagFrom(kk, ek) {
        delete kk._tags[ek]
      }
      static MatchesQuery(kk, ek) {
        return void 0 === ek || ("" === ek ? fk.HasTags(kk) : Dk.Eval(ek, (ek => fk.HasTags(kk) && kk._tags[ek])))
      }
    }
  },
  39716: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk
    });
    var Dk = ik(39708),
      fk = ik(36726);
    class Sk {
      constructor(kk) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new fk.c, this._scene = kk
      }
      _prepareBuffers() {
        if (this._vertexBuffers[Dk.e.PositionKind]) return;
        const kk = [];
        kk.push(1, 1), kk.push(-1, 1), kk.push(-1, -1), kk.push(1, -1), this._vertexBuffers[Dk.e.PositionKind] = new Dk.e(this._scene.JU(), kk, Dk.e.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const kk = [];
        kk.push(0), kk.push(1), kk.push(2), kk.push(0), kk.push(2), kk.push(3), this._indexBuffer = this._scene.JU().createIndexBuffer(kk)
      }
      _getActivePostProcesses(kk) {
        const ek = this._activePostProcesses;
        ek.length = 0;
        for (let ik = 0; ik < kk.length; ik++) {
          const Dk = kk[ik];
          Dk && ek.push(Dk)
        }
        return ek
      }
      _rebuild() {
        const kk = this._vertexBuffers[Dk.e.PositionKind];
        kk && (kk._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ik = this._scene.activeCamera;
        return !!ik && (ek = ek || this._getActivePostProcesses(ik._postProcesses), !(!ek || 0 === ek.length || !this._scene.postProcessesEnabled) && (ek[0].activate(ik, kk, null !== ek && void 0 !== ek), !0))
      }
      directRender(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : kk.length;
        const rk = this._scene.JU();
        for (let Pk = 0; Pk < bk; Pk++) {
          Pk < kk.length - 1 ? kk[Pk + 1].activate(this._scene.activeCamera || this._scene, ek?.texture) : (ek ? rk.bindFramebuffer(ek, Dk, void 0, void 0, ik, fk) : Sk || rk.restoreDefaultFramebuffer(), rk._debugInsertMarker?.(`post process ${kk[Pk].name} output`));
          const bk = kk[Pk],
            mk = bk.apply();
          mk && (bk.onBeforeRenderObservable.notifyObservers(mk), this._prepareBuffers(), rk.bindBuffers(this._vertexBuffers, this._indexBuffer, mk), rk.drawElementsType(0, 0, 6), bk.onAfterRenderObservable.notifyObservers(mk))
        }
        rk.setDepthBuffer(!0), rk.setDepthWrite(!0)
      }
      _finalizeFrame(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Sk = this._scene.activeCamera;
        if (!Sk) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (Dk = Dk || this._getActivePostProcesses(Sk._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const bk = this._scene.JU();
        for (let rk = 0, Pk = Dk.length; rk < Pk; rk++) {
          const mk = Dk[rk];
          if (rk < Pk - 1 ? mk._outputTexture = Dk[rk + 1].activate(Sk, ek?.texture) : (ek ? (bk.bindFramebuffer(ek, ik, void 0, void 0, fk), mk._outputTexture = ek) : (bk.restoreDefaultFramebuffer(), mk._outputTexture = null), bk._debugInsertMarker?.(`post process ${Dk[rk].name} output`)), kk) break;
          const Mk = mk.apply();
          Mk && (mk.onBeforeRenderObservable.notifyObservers(Mk), this._prepareBuffers(), bk.bindBuffers(this._vertexBuffers, this._indexBuffer, Mk), bk.drawElementsType(0, 0, 6), mk.onAfterRenderObservable.notifyObservers(Mk))
        }
        bk.setDepthBuffer(!0), bk.setDepthWrite(!0), bk.setAlphaMode(0)
      }
      dispose() {
        const kk = this._vertexBuffers[Dk.e.PositionKind];
        kk && (kk.dispose(), this._vertexBuffers[Dk.e.PositionKind] = null), this._indexBuffer && (this._scene.JU()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  39730: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => mk
    });
    var Dk = ik(39672),
      fk = ik(36698);
    const Sk = [],
      bk = [];
    let rk = !1;

    function Pk(kk, ek) {
      for (; kk.length < ek;) kk.push(void 0)
    }
    class mk {
      set opaqueSortCompareFn(kk) {
        this._opaqueSortCompareFn = kk || mk.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(kk) {
        this._alphaTestSortCompareFn = kk || mk.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(kk) {
        this._transparentSortCompareFn = kk || mk.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = kk, this._opaqueSubMeshes = new Dk.h(256), this._transparentSubMeshes = new Dk.h(256), this._alphaTestSubMeshes = new Dk.h(256), this._depthOnlySubMeshes = new Dk.h(256), this._particleSystems = new Dk.h(256), this._spriteManagers = new Dk.h(256), this._empty = !0, this._edgesRenderers = new Dk.e(16), this.disableDepthPrePass = !1, this._scene = ek, this.opaqueSortCompareFn = ik, this.alphaTestSortCompareFn = fk, this.transparentSortCompareFn = Sk
      }
      render(kk, ek, ik, Dk) {
        let fk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Sk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          bk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          rk = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Pk = arguments.length > 8 ? arguments[8] : void 0;
        if (kk) return void kk(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const mk = this._scene.JU();
        fk && 0 !== this._depthOnlySubMeshes.length && (mk.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), mk.setColorWrite(!0)), Sk && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), bk && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const Mk = mk.getStencilBuffer();
        if (mk.setStencilBuffer(!1), ek && this._renderSprites(), ik && this._renderParticles(Dk), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), rk && (Pk || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (mk.setStencilBuffer(Mk), Pk) Pk(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const kk = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            kk.length && this._renderTransparent(kk)
          } else this._renderTransparent(this._transparentSubMeshes);
          mk.setAlphaMode(0)
        }
        if (mk.setStencilBuffer(!1), Sk && this._edgesRenderers.length) {
          for (let kk = 0; kk < this._edgesRenderers.length; kk++) this._edgesRenderers.data[kk].render();
          mk.setAlphaMode(0)
        }
        mk.setStencilBuffer(Mk)
      }
      _renderOpaqueSorted(kk) {
        mk._RenderSorted(kk, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(kk) {
        mk._RenderSorted(kk, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(kk) {
        mk._RenderSorted(kk, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(kk, ek, ik, Dk, Sk) {
        let Mk, Kk = 0;
        const xk = ik ? ik.globalPosition : mk._ZeroVector;
        if (Dk && ek !== mk.PainterSortCompare)
          for (; Kk < kk.length; Kk++) Mk = kk.data[Kk], Mk._alphaIndex = Mk.getMesh().alphaIndex, Mk._distanceToCamera = fk.o.Distance(Mk.hq().HDk.centerWorld, xk);
        const nk = kk.length;
        let Uk = kk.data;
        const Hk = nk !== Uk.length && !rk;
        if (Hk) {
          for (rk = !0, Pk(bk, nk), Kk = 0; Kk < nk; Kk++) bk[Kk] = Uk[Kk];
          Uk = bk
        } else nk !== Uk.length && (Uk = Uk.slice(0, nk));
        try {
          ek && mk._StableSort(Uk, nk, ek), mk._DrawSorted(Uk, nk, Dk, Sk)
        } finally {
          Hk && (bk.fill(void 0, 0, nk), rk = !1)
        }
      }
      static _DrawSorted(kk, ek, ik, Dk) {
        let fk;
        const Sk = kk[0].getMesh().XF();
        for (let bk = 0; bk < ek; bk++) {
          if (fk = kk[bk], Sk._activeMeshesFrozenButKeepClipping && !fk.isInFrustum(Sk._frustumPlanes)) continue;
          let ek = !1;
          if (ik) {
            const kk = fk.fH();
            if (kk && kk.needDepthPrePass && !Dk) {
              ek = !0;
              const ik = kk.XF().JU();
              ik.setColorWrite(!1), ik.setAlphaMode(0), fk.render(!1), ik.setColorWrite(!0)
            }
          }
          const rk = fk._renderingMesh;
          !ek && rk._renderRunFollower(fk, ik) || fk.render(ik)
        }
      }
      static _StableSort(kk, ek, ik) {
        for (let Dk = 0; Dk < ek; Dk += 16) {
          const fk = Math.min(Dk + 16, ek);
          for (let ek = Dk + 1; ek < fk; ek++) {
            const fk = kk[ek];
            let Sk = Dk,
              bk = ek;
            for (; Sk < bk;) {
              const ek = Sk + bk >>> 1;
              ik(fk, kk[ek]) < 0 ? bk = ek : Sk = ek + 1
            }
            for (let ik = ek; ik > Sk; ik--) kk[ik] = kk[ik - 1];
            kk[Sk] = fk
          }
        }
        if (!(ek <= 16)) {
          Pk(Sk, ek);
          try {
            let Dk = kk,
              fk = Sk;
            for (let kk = 16; kk < ek; kk *= 2) {
              for (let bk = 0; bk < ek; bk += 2 * kk) {
                const Sk = Math.min(bk + kk, ek),
                  rk = Math.min(bk + 2 * kk, ek);
                let Pk = bk,
                  mk = Sk,
                  Mk = bk;
                if (Sk < rk && ik(Dk[Sk], Dk[Sk - 1]) < 0)
                  for (; Pk < Sk && mk < rk;) fk[Mk++] = ik(Dk[mk], Dk[Pk]) < 0 ? Dk[mk++] : Dk[Pk++];
                for (; Pk < Sk;) fk[Mk++] = Dk[Pk++];
                for (; mk < rk;) fk[Mk++] = Dk[mk++]
              }
              const Sk = fk;
              fk = Dk, Dk = Sk
            }
            if (Dk !== kk)
              for (let ik = 0; ik < ek; ik++) kk[ik] = Dk[ik]
          } finally {
            Sk.fill(void 0, 0, ek)
          }
        }
      }
      static defaultTransparentSortCompare(kk, ek) {
        return kk._alphaIndex > ek._alphaIndex ? 1 : kk._alphaIndex < ek._alphaIndex ? -1 : mk.backToFrontSortCompare(kk, ek)
      }
      static backToFrontSortCompare(kk, ek) {
        return kk._distanceToCamera < ek._distanceToCamera ? 1 : kk._distanceToCamera > ek._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(kk, ek) {
        return kk._distanceToCamera < ek._distanceToCamera ? -1 : kk._distanceToCamera > ek._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(kk, ek) {
        const ik = kk.getMesh(),
          Dk = ek.getMesh();
        return ik.material && Dk.material ? ik.material.uniqueId - Dk.material.uniqueId : ik.uniqueId - Dk.uniqueId
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
      dispatch(kk, ek, ik) {
        void 0 === ek && (ek = kk.getMesh()), void 0 === ik && (ik = kk.fH()), null !== ik && void 0 !== ik && (ik.needAlphaBlendingForMesh(ek) ? this._transparentSubMeshes.push(kk) : ik.needAlphaTestingForMesh(ek) ? (ik.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(kk), this._alphaTestSubMeshes.push(kk)) : (ik.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(kk), this._opaqueSubMeshes.push(kk)), ek._renderingGroup = this, ek._edgesRenderer && ek.isEnabled() && ek.isVisible && ek._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(ek._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(kk) {
        this._spriteManagers.push(kk), this._empty = !1
      }
      dispatchParticles(kk) {
        this._particleSystems.push(kk), this._empty = !1
      }
      _renderParticles(kk) {
        if (0 === this._particleSystems.length) return;
        const ek = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let ik = 0; ik < this._particleSystems.length; ik++) {
          const Dk = this._particleSystems.data[ik];
          if (0 === (ek && ek.layerMask & Dk.layerMask)) continue;
          const fk = Dk.emitter;
          fk.position && kk && -1 === kk.indexOf(fk) || this._scene._activeParticles.addCount(Dk.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const kk = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let ek = 0; ek < this._spriteManagers.length; ek++) {
          const ik = this._spriteManagers.data[ek];
          0 !== (kk && kk.layerMask & ik.layerMask) && ik.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    mk._ZeroVector = fk.o.Zero()
  },
  39728: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk
    });
    var Dk = ik(39730);
    class fk {}
    class Sk {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(kk) {
        this._disableDepthPrePass = kk;
        for (const ek of this._renderingGroups) ek.disableDepthPrePass = kk
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(kk) {
        kk !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = kk, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const kk of this._scene.meshes)
          if (kk.TY)
            for (const ek of kk.TY) ek._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const kk of this._scene.spriteManagers) kk._wasDispatched = !1;
        for (const kk of this._scene.ZY) kk._wasDispatched = !1
      }
      constructor(kk) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new fk, this._maintainStateBetweenFrames = !1, this._scene = kk;
        for (let ek = Sk.MIN_RENDERINGGROUPS; ek < Sk.MAX_RENDERINGGROUPS; ek++) this._autoClearDepthStencil[ek] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(kk) {
        const ek = kk || 0;
        return this._prepareRenderingGroup(ek), this._renderingGroups[ek]
      }
      _clearDepthStencilBuffer() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.JU().clear(null, !1, kk, ek), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(kk, ek, ik, Dk) {
        let fk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          bk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          rk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Pk = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          mk = arguments.length > 8 ? arguments[8] : void 0,
          Mk = arguments.length > 9 ? arguments[9] : void 0;
        const Kk = this._renderingGroupInfo;
        Kk.bw = this._scene, Kk.camera = this._scene.activeCamera, Kk.renderingManager = this;
        const xk = Mk ?? this._scene.spriteManagers;
        if (xk && Dk)
          for (let Sk = 0; Sk < xk.length; Sk++) {
            const kk = xk[Sk];
            this.dispatchSprites(kk)
          }
        for (let nk = Sk.MIN_RENDERINGGROUPS; nk < Sk.MAX_RENDERINGGROUPS; nk++) {
          this._depthStencilBufferAlreadyCleaned = nk === Sk.MIN_RENDERINGGROUPS;
          const Mk = this._renderingGroups[nk];
          if (!Mk || Mk._empty) continue;
          const xk = 1 << nk;
          if (Kk.renderingGroupId = nk, this._scene.onBeforeRenderingGroupObservable.notifyObservers(Kk, xk), Sk.AUTOCLEAR) {
            const kk = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(nk) : this._autoClearDepthStencil[nk];
            kk && kk.autoClear && this._clearDepthStencilBuffer(kk.depth, kk.stencil)
          }
          for (let kk = 0, ek = this._scene._beforeRenderingGroupDrawStage; kk < ek.length; kk++) {
            ek[kk].action(nk)
          }
          Mk.render(kk, Dk, ik, ek, fk, bk, rk, Pk, mk);
          for (let kk = 0, ek = this._scene._afterRenderingGroupDrawStage; kk < ek.length; kk++) {
            ek[kk].action(nk)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(Kk, xk)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let kk = Sk.MIN_RENDERINGGROUPS; kk < Sk.MAX_RENDERINGGROUPS; kk++) {
            const ek = this._renderingGroups[kk];
            ek && ek.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let kk = Sk.MIN_RENDERINGGROUPS; kk < Sk.MAX_RENDERINGGROUPS; kk++) {
            const ek = this._renderingGroups[kk];
            ek && ek.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let kk = Sk.MIN_RENDERINGGROUPS; kk < Sk.MAX_RENDERINGGROUPS; kk++) {
          const ek = this._renderingGroups[kk];
          ek && ek.dispose()
        }
      }
      _prepareRenderingGroup(kk) {
        void 0 === this._renderingGroups[kk] && (this._renderingGroups[kk] = new Dk.b(kk, this._scene, this._customOpaqueSortCompareFn[kk], this._customAlphaTestSortCompareFn[kk], this._customTransparentSortCompareFn[kk]), this._renderingGroups[kk].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(kk) {
        this.maintainStateBetweenFrames && kk._wasDispatched || (kk._wasDispatched = !0, this.getRenderingGroup(kk.renderingGroupId).dispatchSprites(kk))
      }
      dispatchParticles(kk) {
        this.maintainStateBetweenFrames && kk._wasDispatched || (kk._wasDispatched = !0, this.getRenderingGroup(kk.renderingGroupId).dispatchParticles(kk))
      }
      dispatch(kk, ek, ik) {
        void 0 === ek && (ek = kk.getMesh()), this.maintainStateBetweenFrames && kk._wasDispatched || (kk._wasDispatched = !0, this.getRenderingGroup(ek.renderingGroupId).dispatch(kk, ek, ik))
      }
      setRenderingOrder(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[kk] = ek, this._customAlphaTestSortCompareFn[kk] = ik, this._customTransparentSortCompareFn[kk] = Dk, this._renderingGroups[kk]) {
          const ek = this._renderingGroups[kk];
          ek.opaqueSortCompareFn = this._customOpaqueSortCompareFn[kk], ek.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[kk], ek.transparentSortCompareFn = this._customTransparentSortCompareFn[kk]
        }
      }
      setRenderingAutoClearDepthStencil(kk, ek) {
        let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Dk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[kk] = {
          autoClear: ek,
          depth: ik,
          stencil: Dk
        }
      }
      getAutoClearDepthStencilSetup(kk) {
        return this._autoClearDepthStencil[kk]
      }
    }
    Sk.MAX_RENDERINGGROUPS = 4, Sk.MIN_RENDERINGGROUPS = 0, Sk.AUTOCLEAR = !0
  },
  39475: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Dk
    });
    class Dk {
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
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[ek] !== kk && (kk ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[ek] = kk, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(kk, ek, ik, Dk) {
        this._blendConstants[0] === kk && this._blendConstants[1] === ek && this._blendConstants[2] === ik && this._blendConstants[3] === Dk || (this._blendConstants[0] = kk, this._blendConstants[1] = ek, this._blendConstants[2] = ik, this._blendConstants[3] = Dk, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(kk, ek, ik, Dk) {
        const fk = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[fk + 0] === kk && this._blendFunctionParameters[fk + 1] === ek && this._blendFunctionParameters[fk + 2] === ik && this._blendFunctionParameters[fk + 3] === Dk || (this._blendFunctionParameters[fk + 0] = kk, this._blendFunctionParameters[fk + 1] = ek, this._blendFunctionParameters[fk + 2] = ik, this._blendFunctionParameters[fk + 3] = Dk, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(kk, ek) {
        const ik = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[ik + 0] === kk && this._blendEquationParameters[ik + 1] === ek || (this._blendEquationParameters[ik + 0] = kk, this._blendEquationParameters[ik + 1] = ek, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== ek && (this._numTargets = ek, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== ik && (this._blendDisabledTargetsMask = ik, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (kk.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === ek || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (ek > 1 && 0 !== ik && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & ik) ? kk.enable(kk.BLEND) : kk.disable(kk.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (kk.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (kk.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const Dk = kk;
        if (this._isAlphaBlendDirty) {
          for (let fk = 0; fk < ek; fk++) {
            const ek = fk < this._numTargetEnabled ? fk : 0;
            this._alphaBlend[ek] && 0 === (ik & 1 << fk) ? Dk.enableIndexed(kk.BLEND, fk) : Dk.disableIndexed(kk.BLEND, fk)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let kk = 0; kk < ek; kk++) {
            const ek = kk < this._numTargetEnabled ? 4 * kk : 0;
            Dk.blendFuncSeparateIndexed(kk, this._blendFunctionParameters[ek + 0], this._blendFunctionParameters[ek + 1], this._blendFunctionParameters[ek + 2], this._blendFunctionParameters[ek + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let kk = 0; kk < ek; kk++) {
            const ek = kk < this._numTargetEnabled ? 2 * kk : 0;
            Dk.blendEquationSeparateIndexed(kk, this._blendEquationParameters[ek + 0], this._blendEquationParameters[ek + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(kk, ek) {
        let ik = 32774;
        switch (kk) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, ek);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, ek);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, ek);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, ek);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, ek);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, ek);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, ek);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, ek);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, ek);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, ek);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, ek);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, ek);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, ek);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, ek);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, ek);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, ek);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, ek), ik = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, ek), ik = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, ek);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, ek)
        }
        this.setAlphaEquationParameters(ik, ik, ek)
      }
    }
  },
  39767: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk
    });
    class Dk {}
    Dk._IsPickingAvailable = !1
  },
  39653: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Pi,
      f: () => bi
    });
    var Dk = ik(39662),
      fk = ik(39458),
      Sk = ik(39470),
      bk = ik(36726),
      rk = ik(39672);
    class Pk {
      constructor() {
        this._count = 0, this._data = {}
      }
      Fs(kk) {
        this.clear(), kk.forEach(((kk, ek) => this.add(kk, ek)))
      }
      get(kk) {
        const ek = this._data[kk];
        if (void 0 !== ek) return ek
      }
      getOrAddWithFactory(kk, ek) {
        let ik = this.get(kk);
        return void 0 !== ik || (ik = ek(kk), ik && this.add(kk, ik)), ik
      }
      getOrAdd(kk, ek) {
        const ik = this.get(kk);
        return void 0 !== ik ? ik : (this.add(kk, ek), ek)
      }
      contains(kk) {
        return void 0 !== this._data[kk]
      }
      add(kk, ek) {
        return void 0 === this._data[kk] && (this._data[kk] = ek, ++this._count, !0)
      }
      set(kk, ek) {
        return void 0 !== this._data[kk] && (this._data[kk] = ek, !0)
      }
      getAndRemove(kk) {
        const ek = this.get(kk);
        return void 0 !== ek ? (delete this._data[kk], --this._count, ek) : null
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
        for (const ek in this._data) {
          kk(ek, this._data[ek])
        }
      }
      first(kk) {
        for (const ek in this._data) {
          const ik = kk(ek, this._data[ek]);
          if (ik) return ik
        }
        return null
      }
    }
    var mk = ik(39592),
      Mk = ik(36698),
      Kk = ik(39677),
      xk = ik(39696),
      nk = ik(39701);
    class Uk {
      constructor(kk, ek, ik, Dk, fk, Sk) {
        this.source = kk, this.pointerX = ek, this.pointerY = ik, this.meshUnderPointer = Dk, this.sourceEvent = fk, this.additionalData = Sk
      }
      static CreateNew(kk, ek, ik) {
        const Dk = kk.XF();
        return new Uk(kk, Dk.pointerX, Dk.pointerY, Dk.meshUnderPointer || kk, ek, ik)
      }
      static CreateNewFromSprite(kk, ek, ik, Dk) {
        return new Uk(kk, ek.pointerX, ek.pointerY, ek.meshUnderPointer, ik, Dk)
      }
      static CreateNewFromScene(kk, ek) {
        return new Uk(null, kk.pointerX, kk.pointerY, kk.meshUnderPointer, ek)
      }
      static CreateNewFromPrimitive(kk, ek, ik, Dk) {
        return new Uk(kk, ek.x, ek.y, null, ik, Dk)
      }
    }
    var Hk = ik(39716),
      wk = ik(39722),
      lk = ik(39728),
      pk = ik(39736),
      yk = ik(39429),
      Yk = ik(36722),
      Lk = ik(39447),
      Ck = ik(39742);
    class Ak {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const kk in Ak.Triggers)
          if (Object.prototype.hasOwnProperty.call(Ak.Triggers, kk)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const kk in Ak.Triggers)
          if (Object.prototype.hasOwnProperty.call(Ak.Triggers, kk)) {
            const ek = parseInt(kk);
            if (ek >= 1 && ek <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(kk) {
        for (const ek in Ak.Triggers)
          if (Object.prototype.hasOwnProperty.call(Ak.Triggers, ek)) {
            if (parseInt(ek) === kk) return !0
          } return !1
      }
    }
    Ak.Triggers = {};
    var jk, sk, dk, Vk, Fk, uk, qk, Ik = ik(39751);
    ! function(kk) {
      kk[kk.Generic = 0] = "Generic", kk[kk.Keyboard = 1] = "Keyboard", kk[kk.Mouse = 2] = "Mouse", kk[kk.Touch = 3] = "Touch", kk[kk.DualShock = 4] = "DualShock", kk[kk.Xbox = 5] = "Xbox", kk[kk.Switch = 6] = "Switch", kk[kk.DualSense = 7] = "DualSense"
    }(jk || (jk = {})),
    function(kk) {
      kk[kk.Horizontal = 0] = "Horizontal", kk[kk.Vertical = 1] = "Vertical", kk[kk.LeftClick = 2] = "LeftClick", kk[kk.MiddleClick = 3] = "MiddleClick", kk[kk.RightClick = 4] = "RightClick", kk[kk.BrowserBack = 5] = "BrowserBack", kk[kk.BrowserForward = 6] = "BrowserForward", kk[kk.MouseWheelX = 7] = "MouseWheelX", kk[kk.MouseWheelY = 8] = "MouseWheelY", kk[kk.MouseWheelZ = 9] = "MouseWheelZ", kk[kk.Move = 12] = "Move"
    }(sk || (sk = {})),
    function(kk) {
      kk[kk.Horizontal = 0] = "Horizontal", kk[kk.Vertical = 1] = "Vertical", kk[kk.LeftClick = 2] = "LeftClick", kk[kk.MiddleClick = 3] = "MiddleClick", kk[kk.RightClick = 4] = "RightClick", kk[kk.BrowserBack = 5] = "BrowserBack", kk[kk.BrowserForward = 6] = "BrowserForward", kk[kk.MouseWheelX = 7] = "MouseWheelX", kk[kk.MouseWheelY = 8] = "MouseWheelY", kk[kk.MouseWheelZ = 9] = "MouseWheelZ", kk[kk.DeltaHorizontal = 10] = "DeltaHorizontal", kk[kk.DeltaVertical = 11] = "DeltaVertical"
    }(dk || (dk = {})),
    function(kk) {
      kk[kk.Cross = 0] = "Cross", kk[kk.Circle = 1] = "Circle", kk[kk.Square = 2] = "Square", kk[kk.Triangle = 3] = "Triangle", kk[kk.L1 = 4] = "L1", kk[kk.R1 = 5] = "R1", kk[kk.L2 = 6] = "L2", kk[kk.R2 = 7] = "R2", kk[kk.Share = 8] = "Share", kk[kk.Options = 9] = "Options", kk[kk.L3 = 10] = "L3", kk[kk.R3 = 11] = "R3", kk[kk.DPadUp = 12] = "DPadUp", kk[kk.DPadDown = 13] = "DPadDown", kk[kk.DPadLeft = 14] = "DPadLeft", kk[kk.DPadRight = 15] = "DPadRight", kk[kk.Home = 16] = "Home", kk[kk.TouchPad = 17] = "TouchPad", kk[kk.LStickXAxis = 18] = "LStickXAxis", kk[kk.LStickYAxis = 19] = "LStickYAxis", kk[kk.RStickXAxis = 20] = "RStickXAxis", kk[kk.RStickYAxis = 21] = "RStickYAxis"
    }(Vk || (Vk = {})),
    function(kk) {
      kk[kk.Cross = 0] = "Cross", kk[kk.Circle = 1] = "Circle", kk[kk.Square = 2] = "Square", kk[kk.Triangle = 3] = "Triangle", kk[kk.L1 = 4] = "L1", kk[kk.R1 = 5] = "R1", kk[kk.L2 = 6] = "L2", kk[kk.R2 = 7] = "R2", kk[kk.Create = 8] = "Create", kk[kk.Options = 9] = "Options", kk[kk.L3 = 10] = "L3", kk[kk.R3 = 11] = "R3", kk[kk.DPadUp = 12] = "DPadUp", kk[kk.DPadDown = 13] = "DPadDown", kk[kk.DPadLeft = 14] = "DPadLeft", kk[kk.DPadRight = 15] = "DPadRight", kk[kk.Home = 16] = "Home", kk[kk.TouchPad = 17] = "TouchPad", kk[kk.LStickXAxis = 18] = "LStickXAxis", kk[kk.LStickYAxis = 19] = "LStickYAxis", kk[kk.RStickXAxis = 20] = "RStickXAxis", kk[kk.RStickYAxis = 21] = "RStickYAxis"
    }(Fk || (Fk = {})),
    function(kk) {
      kk[kk.A = 0] = "A", kk[kk.B = 1] = "B", kk[kk.X = 2] = "X", kk[kk.Y = 3] = "Y", kk[kk.LB = 4] = "LB", kk[kk.RB = 5] = "RB", kk[kk.LT = 6] = "LT", kk[kk.RT = 7] = "RT", kk[kk.Back = 8] = "Back", kk[kk.Start = 9] = "Start", kk[kk.LS = 10] = "LS", kk[kk.RS = 11] = "RS", kk[kk.DPadUp = 12] = "DPadUp", kk[kk.DPadDown = 13] = "DPadDown", kk[kk.DPadLeft = 14] = "DPadLeft", kk[kk.DPadRight = 15] = "DPadRight", kk[kk.Home = 16] = "Home", kk[kk.LStickXAxis = 17] = "LStickXAxis", kk[kk.LStickYAxis = 18] = "LStickYAxis", kk[kk.RStickXAxis = 19] = "RStickXAxis", kk[kk.RStickYAxis = 20] = "RStickYAxis"
    }(uk || (uk = {})),
    function(kk) {
      kk[kk.B = 0] = "B", kk[kk.A = 1] = "A", kk[kk.Y = 2] = "Y", kk[kk.X = 3] = "X", kk[kk.L = 4] = "L", kk[kk.R = 5] = "R", kk[kk.ZL = 6] = "ZL", kk[kk.ZR = 7] = "ZR", kk[kk.Minus = 8] = "Minus", kk[kk.Plus = 9] = "Plus", kk[kk.LS = 10] = "LS", kk[kk.RS = 11] = "RS", kk[kk.DPadUp = 12] = "DPadUp", kk[kk.DPadDown = 13] = "DPadDown", kk[kk.DPadLeft = 14] = "DPadLeft", kk[kk.DPadRight = 15] = "DPadRight", kk[kk.Home = 16] = "Home", kk[kk.Capture = 17] = "Capture", kk[kk.LStickXAxis = 18] = "LStickXAxis", kk[kk.LStickYAxis = 19] = "LStickYAxis", kk[kk.RStickXAxis = 20] = "RStickXAxis", kk[kk.RStickYAxis = 21] = "RStickYAxis"
    }(qk || (qk = {}));
    var zk = ik(39758);
    class Qk {
      static CreateDeviceEvent(kk, ek, ik, Dk, fk, Sk, bk) {
        switch (kk) {
          case jk.Keyboard:
            return this._CreateKeyboardEvent(ik, Dk, fk, Sk);
          case jk.Mouse:
            if (ik === sk.MouseWheelX || ik === sk.MouseWheelY || ik === sk.MouseWheelZ) return this._CreateWheelEvent(kk, ek, ik, Dk, fk, Sk);
          case jk.Touch:
            return this._CreatePointerEvent(kk, ek, ik, Dk, fk, Sk, bk);
          default:
            throw `Unable to generate event for device ${jk[kk]}`
        }
      }
      static _CreatePointerEvent(kk, ek, ik, Dk, fk, Sk, bk) {
        const rk = this._CreateMouseEvent(kk, ek, ik, Dk, fk, Sk);
        kk === jk.Mouse ? (rk.deviceType = jk.Mouse, rk.pointerId = 1, rk.pointerType = "mouse") : (rk.deviceType = jk.Touch, rk.pointerId = bk ?? ek, rk.pointerType = "touch");
        let Pk = 0;
        return Pk += fk.pollInput(kk, ek, sk.LeftClick), Pk += 2 * fk.pollInput(kk, ek, sk.RightClick), Pk += 4 * fk.pollInput(kk, ek, sk.MiddleClick), rk.buttons = Pk, ik === sk.Move ? rk.type = "pointermove" : ik >= sk.LeftClick && ik <= sk.RightClick && (rk.type = 1 === Dk ? "pointerdown" : "pointerup", rk.button = ik - 2), rk
      }
      static _CreateWheelEvent(kk, ek, ik, Dk, fk, Sk) {
        const bk = this._CreateMouseEvent(kk, ek, ik, Dk, fk, Sk);
        switch (bk.pointerId = 1, bk.type = "wheel", bk.deltaMode = zk.c.DOM_DELTA_PIXEL, bk.deltaX = 0, bk.deltaY = 0, bk.deltaZ = 0, ik) {
          case sk.MouseWheelX:
            bk.deltaX = Dk;
            break;
          case sk.MouseWheelY:
            bk.deltaY = Dk;
            break;
          case sk.MouseWheelZ:
            bk.deltaZ = Dk
        }
        return bk
      }
      static _CreateMouseEvent(kk, ek, ik, Dk, fk, Sk) {
        const bk = this._CreateEvent(Sk),
          rk = fk.pollInput(kk, ek, sk.Horizontal),
          Pk = fk.pollInput(kk, ek, sk.Vertical);
        return Sk ? (bk.movementX = 0, bk.movementY = 0, bk.offsetX = bk.movementX - Sk.getBoundingClientRect().x, bk.offsetY = bk.movementY - Sk.getBoundingClientRect().y) : (bk.movementX = fk.pollInput(kk, ek, 10), bk.movementY = fk.pollInput(kk, ek, 11), bk.offsetX = 0, bk.offsetY = 0), this._CheckNonCharacterKeys(bk, fk), bk.clientX = rk, bk.clientY = Pk, bk.x = rk, bk.y = Pk, bk.deviceType = kk, bk.deviceSlot = ek, bk.inputIndex = ik, bk
      }
      static _CreateKeyboardEvent(kk, ek, ik, Dk) {
        const fk = this._CreateEvent(Dk);
        return this._CheckNonCharacterKeys(fk, ik), fk.deviceType = jk.Keyboard, fk.deviceSlot = 0, fk.inputIndex = kk, fk.type = 1 === ek ? "keydown" : "keyup", fk.key = String.fromCharCode(kk), fk.keyCode = kk, fk
      }
      static _CheckNonCharacterKeys(kk, ek) {
        const ik = ek.isDeviceAvailable(jk.Keyboard),
          Dk = ik && 1 === ek.pollInput(jk.Keyboard, 0, 18),
          fk = ik && 1 === ek.pollInput(jk.Keyboard, 0, 17),
          Sk = ik && (1 === ek.pollInput(jk.Keyboard, 0, 91) || 1 === ek.pollInput(jk.Keyboard, 0, 92) || 1 === ek.pollInput(jk.Keyboard, 0, 93)),
          bk = ik && 1 === ek.pollInput(jk.Keyboard, 0, 16);
        kk.altKey = Dk, kk.ctrlKey = fk, kk.metaKey = Sk, kk.shiftKey = bk
      }
      static _CreateEvent(kk) {
        const ek = {
          preventDefault: () => {}
        };
        return ek.target = kk, ek
      }
    }
    class vk {
      constructor(kk, ek, ik) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(kk, ek, ((kk, ek, Dk, fk) => {
          const Sk = Qk.CreateDeviceEvent(kk, ek, Dk, fk, this);
          ik(kk, ek, Sk)
        })) : this._createDummyNativeInput()
      }
      pollInput(kk, ek, ik) {
        return this._nativeInput.pollInput(kk, ek, ik)
      }
      isDeviceAvailable(kk) {
        return kk === jk.Mouse || kk === jk.Touch
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
    const Ek = Object.keys(sk).length / 2;
    class hk {
      constructor(kk, ek, ik, fk) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = Dk.i.IsSafari(), this._usingMacOs = (0, yk.f)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = kk => {}, this._keyboardUpEvent = kk => {}, this._keyboardBlurEvent = kk => {}, this._pointerMoveEvent = kk => {}, this._pointerDownEvent = kk => {}, this._pointerUpEvent = kk => {}, this._pointerCancelEvent = kk => {}, this._pointerCancelTouch = kk => {}, this._pointerLeaveEvent = kk => {}, this._pointerWheelEvent = kk => {}, this._pointerBlurEvent = kk => {}, this._pointerMacOsChromeOutEvent = kk => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, yk.f)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, yk.f)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = kk => {}, this._gamepadDisconnectedEvent = kk => {}, this._eventPrefix = Dk.i.GetPointerPrefix(kk), this._engine = kk, this._onDeviceConnected = ek, this._onDeviceDisconnected = ik, this._onInputChanged = fk, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(kk, ek, ik) {
        const fk = this._inputs[kk][ek];
        if (!fk) throw `Unable to find device ${jk[kk]}`;
        kk >= jk.DualShock && kk <= jk.DualSense && this._updateDevice(kk, ek, ik);
        const Sk = fk[ik];
        if (void 0 === Sk) throw `Unable to find input ${ik} for device ${jk[kk]} in slot ${ek}`;
        return ik === sk.Move && Dk.i.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), Sk
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
                for (const ek in kk) {
                  const ik = kk[+ek];
                  if (ik)
                    for (let kk = 0; kk < ik.length; kk++) ik[kk] = 0
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
          for (const ek of kk) ek && this._addGamePad(ek)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(jk.Mouse, 0, 0, 0)
      }
      _addGamePad(kk) {
        const ek = this._getGamepadDeviceType(kk.id),
          ik = kk.index;
        this._gamepads = this._gamepads || new Array(kk.index + 1), this._registerDevice(ek, ik, kk.buttons.length + kk.axes.length), this._gamepads[ik] = ek
      }
      _addPointerDevice(kk, ek, ik, Dk) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(kk, ek, Ek);
        const fk = this._inputs[kk][ek];
        fk[0] = ik, fk[1] = Dk
      }
      _registerDevice(kk, ek, ik) {
        if (void 0 === ek) throw `Unable to register device ${jk[kk]} to undefined slot.`;
        if (this._inputs[kk] || (this._inputs[kk] = {}), !this._inputs[kk][ek]) {
          const Dk = new Array(ik);
          Dk.fill(0), this._inputs[kk][ek] = Dk, this._onDeviceConnected(kk, ek)
        }
      }
      _unregisterDevice(kk, ek) {
        this._inputs[kk][ek] && (delete this._inputs[kk][ek], this._onDeviceDisconnected(kk, ek))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = kk => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(jk.Keyboard, 0, 255));
          const ek = this._inputs[jk.Keyboard][0];
          if (ek) {
            ek[kk.keyCode] = 1;
            const ik = kk;
            ik.inputIndex = kk.keyCode, this._usingMacOs && kk.metaKey && "Meta" !== kk.key && (this._metaKeys.includes(kk.keyCode) || this._metaKeys.push(kk.keyCode)), this._onInputChanged(jk.Keyboard, 0, ik)
          }
        }, this._keyboardUpEvent = kk => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(jk.Keyboard, 0, 255));
          const ek = this._inputs[jk.Keyboard][0];
          if (ek) {
            ek[kk.keyCode] = 0;
            const ik = kk;
            if (ik.inputIndex = kk.keyCode, this._usingMacOs && "Meta" === kk.key && this._metaKeys.length > 0) {
              for (const kk of this._metaKeys) {
                const ik = Qk.CreateDeviceEvent(jk.Keyboard, 0, kk, 0, this, this._elementToAttachTo);
                ek[kk] = 0, this._onInputChanged(jk.Keyboard, 0, ik)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(jk.Keyboard, 0, ik)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const kk = this._inputs[jk.Keyboard][0];
            for (let ek = 0; ek < kk.length; ek++)
              if (0 !== kk[ek]) {
                kk[ek] = 0;
                const ik = Qk.CreateDeviceEvent(jk.Keyboard, 0, ek, 0, this, this._elementToAttachTo);
                this._onInputChanged(jk.Keyboard, 0, ik)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, yk.f)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let Dk = 0; Dk < this._maxTouchPoints; Dk++) this._activeTouchIds[Dk] = -1;
        this._pointerMoveEvent = kk => {
          const ek = this._getPointerType(kk);
          let ik = ek === jk.Mouse ? 0 : this._activeTouchIds.indexOf(kk.pointerId);
          if (ek === jk.Touch && -1 === ik) {
            if (0 === kk.buttons) return;
            const fk = this._activeTouchIds.indexOf(-1);
            if (!(fk >= 0)) return void Dk.i.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            ik = fk, this._activeTouchIds[fk] = kk.pointerId, this._onDeviceConnected(ek, ik)
          }
          this._inputs[ek] || (this._inputs[ek] = {}), this._inputs[ek][ik] || this._addPointerDevice(ek, ik, kk.clientX, kk.clientY);
          const fk = this._inputs[ek][ik];
          if (fk) {
            const Dk = kk;
            Dk.inputIndex = sk.Move, fk[sk.Horizontal] = kk.clientX, fk[sk.Vertical] = kk.clientY, ek === jk.Touch && 0 === fk[sk.LeftClick] && (fk[sk.LeftClick] = 1), void 0 === kk.pointerId && (kk.pointerId = this._mouseId), this._onInputChanged(ek, ik, Dk), this._usingSafari || -1 === kk.button || (Dk.inputIndex = kk.button + 2, fk[kk.button + 2] = fk[kk.button + 2] ? 0 : 1, this._onInputChanged(ek, ik, Dk))
          }
        }, this._pointerDownEvent = kk => {
          const ek = this._getPointerType(kk);
          let ik = ek === jk.Mouse ? 0 : kk.pointerId;
          if (ek === jk.Touch) {
            let ek = this._activeTouchIds.indexOf(kk.pointerId);
            if (-1 === ek && (ek = this._activeTouchIds.indexOf(-1)), !(ek >= 0)) return void Dk.i.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            ik = ek, this._activeTouchIds[ek] = kk.pointerId
          }
          this._inputs[ek] || (this._inputs[ek] = {}), this._inputs[ek][ik] ? ek === jk.Touch && this._onDeviceConnected(ek, ik) : this._addPointerDevice(ek, ik, kk.clientX, kk.clientY);
          const fk = this._inputs[ek][ik];
          if (fk) {
            const Dk = fk[sk.Horizontal],
              bk = fk[sk.Vertical];
            if (ek === jk.Mouse) {
              if (void 0 === kk.pointerId && (kk.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (Sk) {}
            } else if (kk.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(kk.pointerId)
            } catch (Sk) {}
            fk[sk.Horizontal] = kk.clientX, fk[sk.Vertical] = kk.clientY, fk[kk.button + 2] = 1;
            const rk = kk;
            rk.inputIndex = kk.button + 2, this._onInputChanged(ek, ik, rk), Dk === kk.clientX && bk === kk.clientY || (rk.inputIndex = sk.Move, this._onInputChanged(ek, ik, rk))
          }
        }, this._pointerUpEvent = kk => {
          const ek = this._getPointerType(kk),
            ik = ek === jk.Mouse ? 0 : this._activeTouchIds.indexOf(kk.pointerId);
          if (ek === jk.Touch) {
            if (-1 === ik) return;
            this._activeTouchIds[ik] = -1
          }
          const Dk = this._inputs[ek]?.[ik];
          let fk = kk.button,
            Sk = Dk && 0 !== Dk[fk + 2];
          if (!Sk && this._isUsingFirefox && this._usingMacOs && Dk && (fk = 2 === fk ? 0 : 2, Sk = 0 !== Dk[fk + 2]), Sk) {
            const Sk = Dk[sk.Horizontal],
              bk = Dk[sk.Vertical];
            Dk[sk.Horizontal] = kk.clientX, Dk[sk.Vertical] = kk.clientY, Dk[fk + 2] = 0;
            const rk = kk;
            void 0 === kk.pointerId && (kk.pointerId = this._mouseId), Sk === kk.clientX && bk === kk.clientY || (rk.inputIndex = sk.Move, this._onInputChanged(ek, ik, rk)), rk.inputIndex = fk + 2, ek === jk.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : kk.pointerId && this._elementToAttachTo.hasPointerCapture?.(kk.pointerId) && this._elementToAttachTo.releasePointerCapture(kk.pointerId), this._onInputChanged(ek, ik, rk), ek === jk.Touch && this._onDeviceDisconnected(ek, ik)
          }
        }, this._pointerCancelTouch = kk => {
          const ek = this._activeTouchIds.indexOf(kk);
          if (-1 === ek) return;
          this._elementToAttachTo.hasPointerCapture?.(kk) && this._elementToAttachTo.releasePointerCapture(kk), this._inputs[jk.Touch][ek][sk.LeftClick] = 0;
          const ik = Qk.CreateDeviceEvent(jk.Touch, ek, sk.LeftClick, 0, this, this._elementToAttachTo, kk);
          this._onInputChanged(jk.Touch, ek, ik), this._activeTouchIds[ek] = -1, this._onDeviceDisconnected(jk.Touch, ek)
        }, this._pointerCancelEvent = kk => {
          if ("mouse" === kk.pointerType) {
            const kk = this._inputs[jk.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let ek = sk.LeftClick; ek <= sk.BrowserForward; ek++)
              if (1 === kk[ek]) {
                kk[ek] = 0;
                const ik = Qk.CreateDeviceEvent(jk.Mouse, 0, ek, 0, this, this._elementToAttachTo);
                this._onInputChanged(jk.Mouse, 0, ik)
              }
          } else this._pointerCancelTouch(kk.pointerId)
        }, this._pointerLeaveEvent = kk => {
          "pen" === kk.pointerType && this._pointerCancelTouch(kk.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let kk = !1;
        const ek = function() {};
        try {
          const ik = Object.defineProperty({}, "passive", {
            get: function() {
              kk = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", ek, ik), this._elementToAttachTo.removeEventListener("test", ek, ik)
        } catch (ik) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(jk.Mouse)) {
            const kk = this._inputs[jk.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let ek = sk.LeftClick; ek <= sk.BrowserForward; ek++)
              if (1 === kk[ek]) {
                kk[ek] = 0;
                const ik = Qk.CreateDeviceEvent(jk.Mouse, 0, ek, 0, this, this._elementToAttachTo);
                this._onInputChanged(jk.Mouse, 0, ik)
              }
          }
          if (this.isDeviceAvailable(jk.Touch)) {
            const kk = this._inputs[jk.Touch];
            for (let ek = 0; ek < this._activeTouchIds.length; ek++) {
              const ik = this._activeTouchIds[ek];
              if (this._elementToAttachTo.hasPointerCapture?.(ik) && this._elementToAttachTo.releasePointerCapture(ik), -1 !== ik && 1 === kk[ek]?.[sk.LeftClick]) {
                kk[ek][sk.LeftClick] = 0;
                const Dk = Qk.CreateDeviceEvent(jk.Touch, ek, sk.LeftClick, 0, this, this._elementToAttachTo, ik);
                this._onInputChanged(jk.Touch, ek, Dk), this._activeTouchIds[ek] = -1, this._onDeviceDisconnected(jk.Touch, ek)
              }
            }
          }
        }, this._pointerWheelEvent = kk => {
          const ek = jk.Mouse;
          this._inputs[ek] || (this._inputs[ek] = []), this._inputs[ek][0] || (this._pointerActive = !0, this._registerDevice(ek, 0, Ek));
          const ik = this._inputs[ek][0];
          if (ik) {
            ik[sk.MouseWheelX] = kk.deltaX || 0, ik[sk.MouseWheelY] = kk.deltaY || kk.wheelDelta || 0, ik[sk.MouseWheelZ] = kk.deltaZ || 0;
            const Dk = kk;
            void 0 === kk.pointerId && (kk.pointerId = this._mouseId), 0 !== ik[sk.MouseWheelX] && (Dk.inputIndex = sk.MouseWheelX, this._onInputChanged(ek, 0, Dk)), 0 !== ik[sk.MouseWheelY] && (Dk.inputIndex = sk.MouseWheelY, this._onInputChanged(ek, 0, Dk)), 0 !== ik[sk.MouseWheelZ] && (Dk.inputIndex = sk.MouseWheelZ, this._onInputChanged(ek, 0, Dk))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = kk => {
          kk.buttons > 1 && this._pointerCancelEvent(kk)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!kk && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(jk.Mouse)) {
            const kk = this._inputs[jk.Mouse][0];
            kk[sk.MouseWheelX] = 0, kk[sk.MouseWheelY] = 0, kk[sk.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = kk => {
          this._addGamePad(kk.gamepad)
        }, this._gamepadDisconnectedEvent = kk => {
          if (this._gamepads) {
            const ek = this._getGamepadDeviceType(kk.gamepad.id),
              ik = kk.gamepad.index;
            this._unregisterDevice(ek, ik), delete this._gamepads[ik]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(kk, ek, ik) {
        const Dk = navigator.getGamepads()[ek];
        if (Dk && kk === this._gamepads[ek]) {
          const fk = this._inputs[kk][ek];
          ik >= Dk.buttons.length ? fk[ik] = Dk.axes[ik - Dk.buttons.length].valueOf() : fk[ik] = Dk.buttons[ik].value
        }
      }
      _getGamepadDeviceType(kk) {
        return -1 !== kk.indexOf("054c") ? -1 !== kk.indexOf("0ce6") ? jk.DualSense : jk.DualShock : -1 !== kk.indexOf("Xbox One") || -1 !== kk.search("Xbox 360") || -1 !== kk.search("xinput") || -1 !== kk.indexOf("045e") && -1 === kk.indexOf("Surface Dock") ? jk.Xbox : -1 !== kk.indexOf("057e") ? jk.Switch : jk.Generic
      }
      _getPointerType(kk) {
        let ek = jk.Mouse;
        return ("touch" === kk.pointerType || "pen" === kk.pointerType || kk.touches) && (ek = jk.Touch), ek
      }
    }
    class ak {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = ek, this.deviceSlot = ik, this.onInputChangedObservable = new bk.c, this._deviceInputSystem = kk
      }
      getInput(kk) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, kk)
      }
    }
    class Wk {
      constructor(kk) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = kk => {
          for (let ek = 0; ek < this._devices.length; ek++) {
            const ik = this._devices[ek];
            for (const Dk in ik) {
              const ik = +Dk;
              kk._addDevice(new ak(this._deviceInputSystem, ek, ik))
            }
          }
          this._registeredManagers.push(kk)
        }, this.unregisterManager = kk => {
          const ek = this._registeredManagers.indexOf(kk);
          ek > -1 && this._registeredManagers.splice(ek, 1)
        };
        const ek = Object.keys(jk).length / 2;
        this._devices = new Array(ek);
        const ik = (kk, ek) => {
            this._devices[kk] || (this._devices[kk] = new Array), this._devices[kk][ek] || (this._devices[kk][ek] = ek);
            for (const ik of this._registeredManagers) {
              const Dk = new ak(this._deviceInputSystem, kk, ek);
              ik._addDevice(Dk)
            }
          },
          Dk = (kk, ek) => {
            this._devices[kk]?.[ek] && delete this._devices[kk][ek];
            for (const ik of this._registeredManagers) ik._removeDevice(kk, ek)
          },
          fk = (kk, ek, ik) => {
            if (ik)
              for (const Dk of this._registeredManagers) Dk._onInputChanged(kk, ek, ik)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new vk(ik, Dk, fk) : this._deviceInputSystem = new hk(kk, ik, Dk, fk)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class tk {
      getDeviceSource(kk, ek) {
        if (void 0 === ek) {
          if (void 0 === this._firstDevice[kk]) return null;
          ek = this._firstDevice[kk]
        }
        return this._devices[kk] && void 0 !== this._devices[kk][ek] ? this._devices[kk][ek] : null
      }
      getDeviceSources(kk) {
        return this._devices[kk] ? this._devices[kk].filter((kk => !!kk)) : []
      }
      constructor(kk) {
        const ek = Object.keys(jk).length / 2;
        this._devices = new Array(ek), this._firstDevice = new Array(ek), this._engine = kk, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new Wk(kk)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new bk.c((kk => {
          for (const ek of this._devices)
            if (ek)
              for (const ik of ek) ik && this.onDeviceConnectedObservable.notifyObserver(kk, ik)
        })), this.onDeviceDisconnectedObservable = new bk.c, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = kk.ZF.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.ZF.remove(this._onDisposeObserver)
      }
      _addDevice(kk) {
        this._devices[kk.deviceType] || (this._devices[kk.deviceType] = []), this._devices[kk.deviceType][kk.deviceSlot] || (this._devices[kk.deviceType][kk.deviceSlot] = kk, this._updateFirstDevices(kk.deviceType)), this.onDeviceConnectedObservable.notifyObservers(kk)
      }
      _removeDevice(kk, ek) {
        const ik = this._devices[kk]?.[ek];
        this.onDeviceDisconnectedObservable.notifyObservers(ik), this._devices[kk]?.[ek] && delete this._devices[kk][ek], this._updateFirstDevices(kk)
      }
      _onInputChanged(kk, ek, ik) {
        this._devices[kk]?.[ek]?.onInputChangedObservable.notifyObservers(ik)
      }
      _updateFirstDevices(kk) {
        switch (kk) {
          case jk.Keyboard:
          case jk.Mouse:
            this._firstDevice[kk] = 0;
            break;
          case jk.Touch:
          case jk.DualSense:
          case jk.DualShock:
          case jk.Xbox:
          case jk.Switch:
          case jk.Generic: {
            delete this._firstDevice[kk];
            const ek = this._devices[kk];
            if (ek)
              for (let ik = 0; ik < ek.length; ik++)
                if (ek[ik]) {
                  this._firstDevice[kk] = ik;
                  break
                } break
          }
        }
      }
    }
    var Xk = ik(39767);
    class Bk {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get Lr() {
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
      set Lr(kk) {
        this._doubleClick = kk
      }
      set hasSwiped(kk) {
        this._hasSwiped = kk
      }
      set ignore(kk) {
        this._ignore = kk
      }
    }
    class ck {
      constructor(kk) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new Mk.l(0, 0), this._previousStartingPointerPosition = new Mk.l(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = kk || Yk.e.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(kk) {
        return this._meshUnderPointerId[kk] || null
      }
      get unTranslatedPointer() {
        return new Mk.l(this._unTranslatedPointerX, this._unTranslatedPointerY)
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
        const ek = this._scene.JU().getInputElementClientRect();
        ek && (this._pointerX = kk.clientX - ek.left, this._pointerY = kk.clientY - ek.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(kk, ek) {
        const ik = this._scene,
          Dk = ik.JU(),
          fk = Dk.getInputElement();
        fk && (fk.tabIndex = Dk.canvasTabIndex, ik.doNotHandleCursors || (fk.style.cursor = ik.defaultCursor)), this._setCursorAndPointerOverMesh(kk, ek, ik);
        for (const rk of ik._pointerMoveStage) {
          kk = kk || this._pickMove(ek);
          const ik = !!kk?.pickedMesh;
          kk = rk.action(this._unTranslatedPointerX, this._unTranslatedPointerY, kk, ik, fk)
        }
        const Sk = ek.inputIndex >= sk.MouseWheelX && ek.inputIndex <= sk.MouseWheelZ ? Ck.c.POINTERWHEEL : Ck.c.POINTERMOVE;
        let bk;
        ik.onPointerMove && (kk = kk || this._pickMove(ek), ik.onPointerMove(ek, kk, Sk)), kk ? (bk = new Ck.h(Sk, ek, kk), this._setRayOnPointerInfo(kk, ek)) : (bk = new Ck.h(Sk, ek, null, this), this._movePointerInfo = bk), ik.onPointerObservable.hasObservers() && ik.onPointerObservable.notifyObservers(bk, Sk)
      }
      _setRayOnPointerInfo(kk, ek) {
        const ik = this._scene;
        kk && Xk.c._IsPickingAvailable && (kk.ray || (kk.ray = ik.createPickingRay(ek.offsetX, ek.offsetY, Mk.b.Identity(), ik.activeCamera)))
      }
      _addCameraPointerObserver(kk, ek) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(kk, ek)
      }
      _removeCameraPointerObserver(kk) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(kk)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(kk, ek, ik) {
        const Dk = this._scene,
          fk = new Ck.g(ik, ek, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return kk && (fk.originalPickingInfo = kk, fk.ray = kk.ray, "xr-near" === ek.pointerType && kk.originMesh && (fk.nearInteractionPickingInfo = kk)), Dk.onPrePointerObservable.notifyObservers(fk, ik), !!fk.skipOnPointerObservable
      }
      _pickMove(kk) {
        const ek = this._scene,
          ik = ek.Un(this._unTranslatedPointerX, this._unTranslatedPointerY, ek.pointerMovePredicate, ek.pointerMoveFastCheck, ek.cameraToUseForPointers, ek.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(ik, kk, ek), ik
      }
      _updateMeshUnderPointer() {
        const kk = this._scene;
        if (!kk.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || kk.skipPointerMovePicking || !kk.cameraToUseForPointers && !kk.activeCamera) return;
        this._ensurePointerMovePredicate();
        const ek = this._pointerX,
          ik = this._pointerY,
          Dk = this._unTranslatedPointerX,
          fk = this._unTranslatedPointerY;
        for (const Sk of this._latestPointerMoveEvents.values()) this._pointerX = Sk.pointerX, this._pointerY = Sk.pointerY, this._unTranslatedPointerX = Sk.unTranslatedPointerX, this._unTranslatedPointerY = Sk.unTranslatedPointerY, this._pickMove(Sk.event);
        this._pointerX = ek, this._pointerY = ik, this._unTranslatedPointerX = Dk, this._unTranslatedPointerY = fk
      }
      _ensurePointerMovePredicate() {
        const kk = this._scene;
        kk.pointerMovePredicate || (kk.pointerMovePredicate = ek => (ek._isPointerMovePickable ?? ek.Pw) && ek.isVisible && ek.isReady() && ek.isEnabled() && (ek.enablePointerMoveEvents || kk.constantlyUpdateMeshUnderPointer || null !== ek._getActionManagerForTrigger()) && (!kk.cameraToUseForPointers || 0 !== (kk.cameraToUseForPointers.layerMask & ek.layerMask)))
      }
      _setCursorAndPointerOverMesh(kk, ek, ik) {
        const Dk = ik.JU().getInputElement();
        if (kk?.pickedMesh) {
          if (this.setPointerOverMesh(kk.pickedMesh, ek.pointerId, kk, ek), !ik.doNotHandleCursors && Dk && this._pointerOverMesh) {
            const kk = this._pointerOverMesh._getActionManagerForTrigger();
            kk && kk.hasPointerTriggers && (Dk.style.cursor = kk.hoverCursor || ik.hoverCursor)
          }
        } else this.setPointerOverMesh(null, ek.pointerId, kk, ek)
      }
      simulatePointerMove(kk, ek) {
        const ik = new PointerEvent("pointermove", ek);
        ik.inputIndex = sk.Move, this._checkPrePointerObservable(kk, ik, Ck.c.POINTERMOVE) || this._processPointerMove(kk, ik)
      }
      simulatePointerDown(kk, ek) {
        const ik = new PointerEvent("pointerdown", ek);
        ik.inputIndex = ik.button + 2, this._checkPrePointerObservable(kk, ik, Ck.c.POINTERDOWN) || this._processPointerDown(kk, ik)
      }
      _processPointerDown(kk, ek) {
        const ik = this._scene;
        if (kk?.pickedMesh) {
          this._pickedDownMesh = kk.pickedMesh;
          const Dk = kk.pickedMesh._getActionManagerForTrigger();
          if (Dk) {
            if (Dk.hasPickTriggers) switch (Dk.processTrigger(5, new Uk(kk.pickedMesh, ik.pointerX, ik.pointerY, kk.pickedMesh, ek, kk)), ek.button) {
              case 0:
                Dk.processTrigger(2, new Uk(kk.pickedMesh, ik.pointerX, ik.pointerY, kk.pickedMesh, ek, kk));
                break;
              case 1:
                Dk.processTrigger(4, new Uk(kk.pickedMesh, ik.pointerX, ik.pointerY, kk.pickedMesh, ek, kk));
                break;
              case 2:
                Dk.processTrigger(3, new Uk(kk.pickedMesh, ik.pointerX, ik.pointerY, kk.pickedMesh, ek, kk))
            }
            Dk.hasSpecificTrigger(8) && window.setTimeout((() => {
              const kk = ik.Un(this._unTranslatedPointerX, this._unTranslatedPointerY, (kk => kk.Pw && kk.isVisible && kk.isReady() && kk.actionManager && kk.actionManager.hasSpecificTrigger(8) && kk === this._pickedDownMesh), !1, ik.cameraToUseForPointers);
              kk?.pickedMesh && Dk && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > ck.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, Dk.processTrigger(8, Uk.CreateNew(kk.pickedMesh, ek)))
            }), ck.LongPressDelay)
          }
        } else
          for (const Sk of ik._pointerDownStage) kk = Sk.action(this._unTranslatedPointerX, this._unTranslatedPointerY, kk, ek, !1);
        let Dk;
        const fk = Ck.c.POINTERDOWN;
        kk ? (ik.onPointerDown && ik.onPointerDown(ek, kk, fk), Dk = new Ck.h(fk, ek, kk), this._setRayOnPointerInfo(kk, ek)) : Dk = new Ck.h(fk, ek, null, this), ik.onPointerObservable.hasObservers() && ik.onPointerObservable.notifyObservers(Dk, fk)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(kk, ek, ik) {
        const Dk = new PointerEvent("pointerup", ek);
        Dk.inputIndex = sk.Move;
        const fk = new Bk;
        ik ? fk.Lr = !0 : fk.singleClick = !0, this._checkPrePointerObservable(kk, Dk, Ck.c.POINTERUP) || this._processPointerUp(kk, Dk, fk)
      }
      _processPointerUp(kk, ek, ik) {
        const Dk = this._scene;
        if (kk?.pickedMesh) {
          if (this._pickedUpMesh = kk.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (Dk.onPointerPick && Dk.onPointerPick(ek, kk), ik.singleClick && !ik.ignore && Dk.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const ik = Ck.c.POINTERPICK,
              fk = new Ck.h(ik, ek, kk);
            this._setRayOnPointerInfo(kk, ek), Dk.onPointerObservable.notifyObservers(fk, ik)
          }
          const fk = kk.pickedMesh._getActionManagerForTrigger();
          if (fk && !ik.ignore) {
            fk.processTrigger(7, Uk.CreateNew(kk.pickedMesh, ek, kk)), !ik.hasSwiped && ik.singleClick && fk.processTrigger(1, Uk.CreateNew(kk.pickedMesh, ek, kk));
            const Dk = kk.pickedMesh._getActionManagerForTrigger(6);
            ik.Lr && Dk && Dk.processTrigger(6, Uk.CreateNew(kk.pickedMesh, ek, kk))
          }
        } else if (!ik.ignore)
          for (const fk of Dk._pointerUpStage) kk = fk.action(this._unTranslatedPointerX, this._unTranslatedPointerY, kk, ek, ik.Lr);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const kk = this._pickedDownMesh._getActionManagerForTrigger(16);
          kk && kk.processTrigger(16, Uk.CreateNew(this._pickedDownMesh, ek))
        }
        if (!ik.ignore) {
          const fk = new Ck.h(Ck.c.POINTERUP, ek, kk);
          if (this._setRayOnPointerInfo(kk, ek), Dk.onPointerObservable.notifyObservers(fk, Ck.c.POINTERUP), Dk.onPointerUp && Dk.onPointerUp(ek, kk, Ck.c.POINTERUP), !ik.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let fk = 0;
            if (ik.singleClick ? fk = Ck.c.POINTERTAP : ik.Lr && (fk = Ck.c.POINTERDOUBLETAP), fk) {
              const ik = new Ck.h(fk, ek, kk);
              Dk.onPointerObservable.hasObservers() && Dk.onPointerObservable.hasSpecificMask(fk) && Dk.onPointerObservable.notifyObservers(ik, fk)
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
          ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const fk = this._scene,
          Sk = fk.JU();
        Dk || (Dk = Sk.getInputElement()), this._alreadyAttached && this.detachControl(), Dk && (this._alreadyAttachedTo = Dk), this._deviceSourceManager = new tk(Sk), this._initActionManager = kk => {
          if (!this._meshPickProceed) {
            const ek = fk.skipPointerUpPicking || 0 === fk._registeredActions && !this._checkForPicking() && !fk.onPointerUp ? null : fk.Un(this._unTranslatedPointerX, this._unTranslatedPointerY, fk.pointerUpPredicate, fk.pointerUpFastCheck, fk.cameraToUseForPointers, fk.pointerUpTrianglePredicate);
            this._currentPickResult = ek, ek && (kk = ek.hit && ek.pickedMesh ? ek.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return kk
        }, this._delayedSimpleClick = (kk, ek, ik) => {
          if ((Date.now() - this._previousStartingPointerTime > ck.DoubleClickDelay && !this._doubleClickOccured || kk !== this._previousButtonPressed) && (this._doubleClickOccured = !1, ek.singleClick = !0, ek.ignore = !1, this._delayedClicks[kk])) {
            const ek = this._delayedClicks[kk].evt,
              ik = Ck.c.POINTERTAP,
              Dk = new Ck.h(ik, ek, this._currentPickResult);
            fk.onPointerObservable.hasObservers() && fk.onPointerObservable.hasSpecificMask(ik) && fk.onPointerObservable.notifyObservers(Dk, ik), this._delayedClicks[kk] = null
          }
        }, this._initClickEvent = (kk, ek, ik, Dk) => {
          const fk = new Bk;
          this._currentPickResult = null;
          let Sk = null,
            bk = kk.hasSpecificMask(Ck.c.POINTERPICK) || ek.hasSpecificMask(Ck.c.POINTERPICK) || kk.hasSpecificMask(Ck.c.POINTERTAP) || ek.hasSpecificMask(Ck.c.POINTERTAP) || kk.hasSpecificMask(Ck.c.POINTERDOUBLETAP) || ek.hasSpecificMask(Ck.c.POINTERDOUBLETAP);
          !bk && Ak && (Sk = this._initActionManager(Sk, fk), Sk && (bk = Sk.hasPickTriggers));
          let rk = !1;
          if (bk = bk && !this._isMultiTouchGesture, bk) {
            const bk = ik.button;
            if (fk.hasSwiped = this._isPointerSwiping(), !fk.hasSwiped) {
              let Pk = !ck.ExclusiveDoubleClickMode;
              if (Pk || (Pk = !kk.hasSpecificMask(Ck.c.POINTERDOUBLETAP) && !ek.hasSpecificMask(Ck.c.POINTERDOUBLETAP), Pk && !Ak.HasSpecificTrigger(6) && (Sk = this._initActionManager(Sk, fk), Sk && (Pk = !Sk.hasSpecificTrigger(6)))), Pk)(Date.now() - this._previousStartingPointerTime > ck.DoubleClickDelay || bk !== this._previousButtonPressed) && (fk.singleClick = !0, Dk(fk, this._currentPickResult), rk = !0);
              else {
                const kk = {
                  evt: ik,
                  clickInfo: fk,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, bk, fk, Dk), ck.DoubleClickDelay)
                };
                this._delayedClicks[bk] = kk
              }
              let mk = kk.hasSpecificMask(Ck.c.POINTERDOUBLETAP) || ek.hasSpecificMask(Ck.c.POINTERDOUBLETAP);
              !mk && Ak.HasSpecificTrigger(6) && (Sk = this._initActionManager(Sk, fk), Sk && (mk = Sk.hasSpecificTrigger(6))), mk && (bk === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < ck.DoubleClickDelay && !this._doubleClickOccured ? (fk.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = bk, ck.ExclusiveDoubleClickMode ? (this._delayedClicks[bk] && (clearTimeout(this._delayedClicks[bk]?.timeoutId), this._delayedClicks[bk] = null), Dk(fk, this._previousPickResult)) : Dk(fk, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, fk.Lr = !0, fk.ignore = !1, ck.ExclusiveDoubleClickMode && this._delayedClicks[bk] && (clearTimeout(this._delayedClicks[bk]?.timeoutId), this._delayedClicks[bk] = null), Dk(fk, this._currentPickResult)), rk = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = bk))
            }
          }
          rk || Dk(fk, this._currentPickResult)
        }, this._onPointerMove = kk => {
          if (this._updatePointerPosition(kk), this._latestPointerMoveEvents.set(kk.pointerId, {
              event: kk,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > ck.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > ck.DragMovementThreshold), Sk.isPointerLock && Sk._verifyPointerLock(), this._checkPrePointerObservable(null, kk, kk.inputIndex >= sk.MouseWheelX && kk.inputIndex <= sk.MouseWheelZ ? Ck.c.POINTERWHEEL : Ck.c.POINTERMOVE)) return;
          if (!fk.cameraToUseForPointers && !fk.activeCamera) return;
          if (fk.skipPointerMovePicking) return void this._processPointerMove(new nk.b, kk);
          this._ensurePointerMovePredicate();
          const ek = fk._registeredActions > 0 || fk.constantlyUpdateMeshUnderPointer ? this._pickMove(kk) : null;
          this._processPointerMove(ek, kk)
        }, this._onPointerDown = kk => {
          const ek = this._activePointerIds.indexOf(-1);
          if (-1 === ek ? this._activePointerIds.push(kk.pointerId) : this._activePointerIds[ek] = kk.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, ck.ExclusiveDoubleClickMode)
            for (let Dk = 0; Dk < this._delayedClicks.length; Dk++)
              if (this._delayedClicks[Dk])
                if (kk.button === Dk) clearTimeout(this._delayedClicks[Dk]?.timeoutId);
                else {
                  const kk = this._delayedClicks[Dk].clickInfo;
                  this._doubleClickOccured = !1, kk.singleClick = !0, kk.ignore = !1;
                  const ek = this._delayedClicks[Dk].evt,
                    ik = Ck.c.POINTERTAP,
                    Sk = new Ck.h(ik, ek, this._currentPickResult);
                  fk.onPointerObservable.hasObservers() && fk.onPointerObservable.hasSpecificMask(ik) && fk.onPointerObservable.notifyObservers(Sk, ik), this._delayedClicks[Dk] = null
                } if (this._updatePointerPosition(kk), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = kk.button), fk.preventDefaultOnPointerDown && Dk && (kk.preventDefault(), Dk.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, kk, Ck.c.POINTERDOWN)) return;
          if (!fk.cameraToUseForPointers && !fk.activeCamera) return;
          let ik;
          this._pointerCaptures[kk.pointerId] = !0, fk.pointerDownPredicate || (fk.pointerDownPredicate = kk => kk.Pw && kk.isVisible && kk.isReady() && kk.isEnabled() && (!fk.cameraToUseForPointers || 0 !== (fk.cameraToUseForPointers.layerMask & kk.layerMask))), this._pickedDownMesh = null, ik = fk.skipPointerDownPicking || 0 === fk._registeredActions && !this._checkForPicking() && !fk.onPointerDown ? new nk.b : fk.Un(this._unTranslatedPointerX, this._unTranslatedPointerY, fk.pointerDownPredicate, fk.pointerDownFastCheck, fk.cameraToUseForPointers, fk.pointerDownTrianglePredicate), this._processPointerDown(ik, kk)
        }, this._onPointerUp = kk => {
          const ek = this._activePointerIds.indexOf(kk.pointerId); - 1 !== ek && (this._activePointerIds[ek] = -1, this._activePointerIdsCount--, "touch" === kk.pointerType && this._latestPointerMoveEvents.delete(kk.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(kk), fk.preventDefaultOnPointerUp && Dk && (kk.preventDefault(), Dk.focus()), this._initClickEvent(fk.onPrePointerObservable, fk.onPointerObservable, kk, ((ek, ik) => {
            if (fk.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !ek.ignore)) {
              if (this._checkPrePointerObservable(null, kk, Ck.c.POINTERUP)) return this._swipeButtonPressed === kk.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === kk.buttons && (this._pointerCaptures[kk.pointerId] = !1));
              ek.hasSwiped || (ek.singleClick && fk.onPrePointerObservable.hasSpecificMask(Ck.c.POINTERTAP) && this._checkPrePointerObservable(null, kk, Ck.c.POINTERTAP) && (this._skipPointerTap = !0), ek.Lr && fk.onPrePointerObservable.hasSpecificMask(Ck.c.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, kk, Ck.c.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[kk.pointerId] ? (0 === kk.buttons && (this._pointerCaptures[kk.pointerId] = !1), (fk.cameraToUseForPointers || fk.activeCamera) && (fk.pointerUpPredicate || (fk.pointerUpPredicate = kk => kk.Pw && kk.isVisible && kk.isReady() && kk.isEnabled() && (!fk.cameraToUseForPointers || 0 !== (fk.cameraToUseForPointers.layerMask & kk.layerMask))), !this._meshPickProceed && (Ak && Ak.HasTriggers || this._checkForPicking() || fk.onPointerUp) && this._initActionManager(null, ek), ik || (ik = this._currentPickResult), this._processPointerUp(ik, kk, ek), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === kk.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === kk.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = kk => {
          const ek = Ik.b.KEYDOWN;
          if (fk.onPreKeyboardObservable.hasObservers()) {
            const ik = new Ik.f(ek, kk);
            if (fk.onPreKeyboardObservable.notifyObservers(ik, ek), ik.skipOnKeyboardObservable) return
          }
          if (fk.onKeyboardObservable.hasObservers()) {
            const ik = new Ik.h(ek, kk);
            fk.onKeyboardObservable.notifyObservers(ik, ek)
          }
          fk.actionManager && fk.actionManager.processTrigger(14, Uk.CreateNewFromScene(fk, kk))
        }, this._onKeyUp = kk => {
          const ek = Ik.b.KEYUP;
          if (fk.onPreKeyboardObservable.hasObservers()) {
            const ik = new Ik.f(ek, kk);
            if (fk.onPreKeyboardObservable.notifyObservers(ik, ek), ik.skipOnKeyboardObservable) return
          }
          if (fk.onKeyboardObservable.hasObservers()) {
            const ik = new Ik.h(ek, kk);
            fk.onKeyboardObservable.notifyObservers(ik, ek)
          }
          fk.actionManager && fk.actionManager.processTrigger(15, Uk.CreateNewFromScene(fk, kk))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((Dk => {
          Dk.deviceType === jk.Mouse ? Dk.onInputChangedObservable.add((fk => {
            this._originMouseEvent = fk, fk.inputIndex === sk.LeftClick || fk.inputIndex === sk.MiddleClick || fk.inputIndex === sk.RightClick || fk.inputIndex === sk.BrowserBack || fk.inputIndex === sk.BrowserForward ? ek && 1 === Dk.getInput(fk.inputIndex) ? this._onPointerDown(fk) : kk && 0 === Dk.getInput(fk.inputIndex) && this._onPointerUp(fk) : ik && (fk.inputIndex === sk.Move ? this._onPointerMove(fk) : fk.inputIndex !== sk.MouseWheelX && fk.inputIndex !== sk.MouseWheelY && fk.inputIndex !== sk.MouseWheelZ || this._onPointerMove(fk))
          })) : Dk.deviceType === jk.Touch ? Dk.onInputChangedObservable.add((fk => {
            fk.inputIndex === sk.LeftClick && (ek && 1 === Dk.getInput(fk.inputIndex) ? (this._onPointerDown(fk), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : kk && 0 === Dk.getInput(fk.inputIndex) && (this._onPointerUp(fk), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), ik && fk.inputIndex === sk.Move && this._onPointerMove(fk)
          })) : Dk.deviceType === jk.Keyboard && Dk.onInputChangedObservable.add((kk => {
            "keydown" === kk.type ? this._onKeyDown(kk) : "keyup" === kk.type && this._onKeyUp(kk)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 ? arguments[2] : void 0,
          Dk = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[ek] === kk && (!kk || !kk._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const fk = this._meshUnderPointerId[ek];
        let Sk;
        fk && (Sk = fk._getActionManagerForTrigger(10), Sk && Sk.processTrigger(10, new Uk(fk, this._pointerX, this._pointerY, kk, Dk, {
          pointerId: ek
        }))), kk ? (this._meshUnderPointerId[ek] = kk, this._pointerOverMesh = kk, Sk = kk._getActionManagerForTrigger(9), Sk && Sk.processTrigger(9, new Uk(kk, this._pointerX, this._pointerY, kk, Dk, {
          pointerId: ek,
          pickResult: ik
        }))) : (delete this._meshUnderPointerId[ek], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: kk,
          pointerId: ek
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(kk) {
        this._pointerOverMesh === kk && (this._pointerOverMesh = null), this._pickedDownMesh === kk && (this._pickedDownMesh = null), this._pickedUpMesh === kk && (this._pickedUpMesh = null);
        for (const ek in this._meshUnderPointerId) this._meshUnderPointerId[ek] === kk && delete this._meshUnderPointerId[ek]
      }
    }
    ck.DragMovementThreshold = 10, ck.LongPressDelay = 500, ck.DoubleClickDelay = 300, ck.ExclusiveDoubleClickMode = !1;
    var Tk = ik(39523),
      Zk = ik(36874),
      Ok = ik(37365);
    class gk {
      static get UniqueId() {
        const kk = this._UniqueIdCounter;
        return this._UniqueIdCounter++, kk
      }
    }
    gk._UniqueIdCounter = 1;
    var Gk = ik(39607),
      Nk = ik(39769),
      Rk = ik(36707);
    class Jk {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var ke, ee, ie, De, fe, Se, be, re, Pe, me, Me, Ke, xe, ne, Ue, He, we, le, pe, ye, Ye, Le, Ce, Ae, je, se, de, Ve, Fe, ue, qe, Ie, ze, Qe, ve, Ee, he, ae, We, te, Xe, Be, ce, Te, oe, Ze, Oe, ge, Ge, Ne, Re, Je, ki, ei = ik(38272),
      ii = ik(36734);
    const Di = new Mk.p,
      fi = new Mk.p;
    var Si;
    ! function(kk) {
      kk[kk.BackwardCompatible = 0] = "BackwardCompatible", kk[kk.Intermediate = 1] = "Intermediate", kk[kk.Aggressive = 2] = "Aggressive"
    }(Si || (Si = {}));
    class bi {
      static DefaultMaterialFactory(kk) {
        throw (0, Lk.k)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, Lk.k)("DefaultCollisionCoordinator")
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
        for (const ek of this.skeletons) kk = kk.concat(ek.bones);
        return kk
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(kk) {
        this._animationPropertiesOverride = kk
      }
      set onDispose(kk) {
        this._onDisposeObserver && this.ZF.remove(this._onDisposeObserver), this._onDisposeObserver = this.ZF.add(kk)
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
        return ck.DragMovementThreshold
      }
      static set DragMovementThreshold(kk) {
        ck.DragMovementThreshold = kk
      }
      static get LongPressDelay() {
        return ck.LongPressDelay
      }
      static set LongPressDelay(kk) {
        ck.LongPressDelay = kk
      }
      static get DoubleClickDelay() {
        return ck.DoubleClickDelay
      }
      static set DoubleClickDelay(kk) {
        ck.DoubleClickDelay = kk
      }
      static get ExclusiveDoubleClickMode() {
        return ck.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(kk) {
        ck.ExclusiveDoubleClickMode = kk
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? Mk.o.ZeroReadOnly
      }
      bindEyePosition(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Dk = this._eyePosition,
          fk = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          Sk = this.floatingOriginOffset,
          bk = Di.set(Dk.x, Dk.y, Dk.z, fk ? -1 : 1),
          rk = bk.subtractFromFloatsToRef(Sk.x, Sk.y, Sk.z, 0, fi);
        return kk && (ik ? kk.setFloat3(ek, rk.x, rk.y, rk.z) : kk.setVector4(ek, rk)), bk
      }
      finalizeSceneUbo() {
        const kk = this.getSceneUniformBuffer(),
          ek = this.bindEyePosition(null),
          ik = this.floatingOriginOffset;
        return kk.updateFloat4("vEyePosition", ek.x - ik.x, ek.y - ik.y, ek.z - ik.z, ek.w), kk.update(), kk
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
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), kk && (this._unObserveActiveCameras = (0, Rk.h)(kk, (() => {
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
        return bi.DefaultMaterialFactory !== bi._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = bi.DefaultMaterialFactory(this)), this._defaultMaterial
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
        return this._collisionCoordinator || (this._collisionCoordinator = bi.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
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
      qik(kk) {
        this._components.push(kk), this._transientComponents.push(kk);
        const ek = kk;
        ek.addFromContainer && ek.serialize && this._serializableComponents.push(ek)
      }
      _getComponent(kk) {
        for (const ek of this._components)
          if (ek.name === kk) return ek;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(kk, ek) {
        this._inputManager = new ck(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new Zk.f(.2, .2, .3, 1), this.onClearColorChangedObservable = new bk.c, this.ambientColor = new Zk.e(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new bk.c, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.ZY = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.ZF = new bk.c, this._onDisposeObserver = null, this.onBeforeRenderObservable = new bk.c, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new bk.c, this.onAfterRenderCameraObservable = new bk.c, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new bk.c, this.onAfterAnimationsObservable = new bk.c, this.onBeforeDrawPhaseObservable = new bk.c, this.onAfterDrawPhaseObservable = new bk.c, this.onReadyObservable = new bk.c, this.onBeforeCameraRenderObservable = new bk.c, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new bk.c, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new bk.c, this.onAfterActiveMeshesEvaluationObservable = new bk.c, this.onBeforeParticlesRenderingObservable = new bk.c, this.onAfterParticlesRenderingObservable = new bk.c, this.onDataLoadedObservable = new bk.c, this.onNewCameraAddedObservable = new bk.c, this.onCameraRemovedObservable = new bk.c, this.onNewLightAddedObservable = new bk.c, this.onLightRemovedObservable = new bk.c, this.onNewGeometryAddedObservable = new bk.c, this.onGeometryRemovedObservable = new bk.c, this.onNewTransformNodeAddedObservable = new bk.c, this.onTransformNodeRemovedObservable = new bk.c, this.onNewMeshAddedObservable = new bk.c, this.onMeshRemovedObservable = new bk.c, this.onNewSkeletonAddedObservable = new bk.c, this.onSkeletonRemovedObservable = new bk.c, this.onNewParticleSystemAddedObservable = new bk.c, this.onParticleSystemRemovedObservable = new bk.c, this.onNewAnimationGroupAddedObservable = new bk.c, this.onAnimationGroupRemovedObservable = new bk.c, this.onNewMaterialAddedObservable = new bk.c, this.onNewMultiMaterialAddedObservable = new bk.c, this.onMaterialRemovedObservable = new bk.c, this.onMultiMaterialRemovedObservable = new bk.c, this.onNewTextureAddedObservable = new bk.c, this.onTextureRemovedObservable = new bk.c, this.onNewFrameGraphAddedObservable = new bk.c, this.onFrameGraphRemovedObservable = new bk.c, this.onNewObjectRendererAddedObservable = new bk.c, this.onObjectRendererRemovedObservable = new bk.c, this.onNewPostProcessAddedObservable = new bk.c, this.onPostProcessRemovedObservable = new bk.c, this.onNewEffectLayerAddedObservable = new bk.c, this.onEffectLayerRemovedObservable = new bk.c, this.onBeforeRenderTargetsRenderObservable = new bk.c, this.onAfterRenderTargetsRenderObservable = new bk.c, this.onBeforeStepObservable = new bk.c, this.onAfterStepObservable = new bk.c, this.onActiveCameraChanged = new bk.c, this.onActiveCamerasChanged = new bk.c, this.onBeforeRenderingGroupObservable = new bk.c, this.onAfterRenderingGroupObservable = new bk.c, this.onMeshImportedObservable = new bk.c, this.onAnimationFileImportedObservable = new bk.c, this.onEnvironmentTextureChangedObservable = new bk.c, this.onMeshUnderPointerUpdatedObservable = new bk.c, this._registeredForLateAnimationBindings = new rk.e(256), this._pointerPickingConfiguration = new Jk, this.onPrePointerObservable = new bk.c, this.onPointerObservable = new bk.c, this.onPreKeyboardObservable = new bk.c, this.onKeyboardObservable = new bk.c, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = bi.FOGMODE_NONE, this.fogColor = new Zk.e(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.qE = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new Mk.o(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new rk.e(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new Tk.b, this._activeIndices = new Tk.b, this._activeParticles = new Tk.b, this._activeBones = new Tk.b, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new rk.h(256), this._processedMaterials = new rk.h(256), this._renderTargets = new rk.e(256), this._materialsRenderTargets = new rk.e(256), this._activeParticleSystems = new rk.h(256), this._activeSkeletons = new rk.e(32), this._softwareSkinnedMeshes = new rk.e(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = Mk.b.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = pk.c.Create(), this._beforeClearStage = pk.c.Create(), this._beforeRenderTargetClearStage = pk.c.Create(), this._gatherRenderTargetsStage = pk.c.Create(), this._gatherActiveCameraRenderTargetsStage = pk.c.Create(), this._isReadyForMeshStage = pk.c.Create(), this._beforeEvaluateActiveMeshStage = pk.c.Create(), this._evaluateSubMeshStage = pk.c.Create(), this._preActiveMeshStage = pk.c.Create(), this._cameraDrawRenderTargetStage = pk.c.Create(), this._beforeCameraDrawStage = pk.c.Create(), this._beforeRenderTargetDrawStage = pk.c.Create(), this._beforeRenderingGroupDrawStage = pk.c.Create(), this._beforeRenderingMeshStage = pk.c.Create(), this._afterRenderingMeshStage = pk.c.Create(), this._afterRenderingGroupDrawStage = pk.c.Create(), this._afterCameraDrawStage = pk.c.Create(), this._afterCameraPostProcessStage = pk.c.Create(), this._afterRenderTargetDrawStage = pk.c.Create(), this._afterRenderTargetPostProcessStage = pk.c.Create(), this._afterRenderStage = pk.c.Create(), this._pointerMoveStage = pk.c.Create(), this._pointerDownStage = pk.c.Create(), this._pointerUpStage = pk.c.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new bk.c, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const ik = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...ek
        };
        this.defaultCameraLayerMask = ik.defaultCameraLayerMask, this.defaultRenderableLayerMask = ik.defaultRenderableLayerMask, kk = this._engine = kk || Yk.e.LastCreatedEngine, ik.virtual ? kk._virtualScenes.push(this) : (Yk.e._LastCreatedScene = this, kk.scenes.push(this)), (kk.getCreationOptions().useLargeWorldRendering || ek?.useFloatingOrigin) && ((0, wk.c)(), this._floatingOriginScene = this, wk.b.XF = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new lk.c(this), Hk.d && (this.postProcessManager = new Hk.d(this)), (0, yk.i)() && this.attachControl(), this._createUbo(), Kk.b && (this._imageProcessingConfiguration = new Kk.b), this.setDefaultCandidateProviders(), ik.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = ik.useMaterialMeshMap, this.useClonedMeshMap = ik.useClonedMeshMap, ek && ek.virtual || kk.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(kk) {
        return this._defaultSubMeshCandidates.data = kk.TY, this._defaultSubMeshCandidates.length = kk.TY.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = kk => this._getDefaultSubMeshCandidates(kk), this.getIntersectingSubMeshCandidates = (kk, ek) => this._getDefaultSubMeshCandidates(kk), this.getCollidingSubMeshCandidates = (kk, ek) => this._getDefaultSubMeshCandidates(kk)
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
      isCachedMaterialInvalid(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== ek || this._cachedMaterial !== kk || this._cachedVisibility !== ik
      }
      JU() {
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
      simulatePointerMove(kk, ek) {
        return this._inputManager.simulatePointerMove(kk, ek), this
      }
      simulatePointerDown(kk, ek) {
        return this._inputManager.simulatePointerDown(kk, ek), this
      }
      simulatePointerUp(kk, ek, ik) {
        return this._inputManager.simulatePointerUp(kk, ek, ik), this
      }
      isPointerCaptured() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(kk)
      }
      attachControl() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(kk, ek, ik)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let kk, ek = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const ik = this.JU(),
          Dk = ik.currentRenderPassId;
        ik.currentRenderPassId = this.activeCamera?.renderPassId ?? Dk;
        let fk = !0;
        for (this._pendingData.length > 0 && (fk = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && fk && (fk = this.depthPeelingRenderer.isReady()), ek && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), kk = 0; kk < this.meshes.length; kk++) {
          const Dk = this.meshes[kk];
          if (!Dk.TY || 0 === Dk.TY.length) continue;
          if (!Dk.isReady(!0)) {
            fk = !1;
            continue
          }
          const Sk = Dk.hasThinInstances || "InstancedMesh" === Dk.getClassName() || "InstancedLinesMesh" === Dk.getClassName() || ik.getCaps().instancedArrays && Dk.instances.length > 0;
          for (let kk = 0, ek = this._isReadyForMeshStage; kk < ek.length; kk++) {
            ek[kk].action(Dk, Sk) || (fk = !1)
          }
          if (!ek) continue;
          const bk = Dk.material || this.defaultMaterial;
          if (bk)
            if (bk._storeEffectOnSubMeshes)
              for (const kk of Dk.TY) {
                const ek = kk.fH();
                ek && ek.hasRenderTargetTextures && null != ek.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(ek) && (this._processedMaterials.push(ek), this._materialsRenderTargets.concatWithNoDuplicate(ek.getRenderTargetTextures()))
              } else bk.hasRenderTargetTextures && null != bk.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(bk) && (this._processedMaterials.push(bk), this._materialsRenderTargets.concatWithNoDuplicate(bk.getRenderTargetTextures()))
        }
        if (ek) {
          for (kk = 0; kk < this._materialsRenderTargets.length; ++kk) {
            this._materialsRenderTargets.data[kk].isReadyForRendering() || (fk = !1)
          }
          for (kk = 0; kk < this.customRenderTargets.length; ++kk) {
            this.customRenderTargets[kk].isReadyForRendering() || (fk = !1)
          }
        }
        for (kk = 0; kk < this.geometries.length; kk++) {
          2 === this.geometries[kk].delayLoadState && (fk = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const Sk of this.activeCameras) Sk.isReady(!0) || (fk = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (fk = !1));
        for (const Sk of this.ZY) Sk.isReady() || (fk = !1);
        if (this.proceduralTexturesEnabled)
          for (const Sk of this.proceduralTextures) Sk.isReady() || (fk = !1);
        if (this.layers)
          for (const Sk of this.layers) Sk.isReady() || (fk = !1);
        if (this.effectLayers)
          for (const Sk of this.effectLayers) Sk.isLayerReady() || (fk = !1);
        for (const Sk of this._isReadyChecks) Sk.isReady() || (fk = !1);
        return ik.areAllEffectsReady() || (fk = !1), ik.currentRenderPassId = Dk, fk
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
        const ek = () => {
          kk(), setTimeout((() => {
            this.unregisterBeforeRender(ek)
          }))
        };
        this.registerBeforeRender(ek)
      }
      executeOnceBeforeRender(kk, ek) {
        void 0 !== ek ? setTimeout((() => {
          this._executeOnceBeforeRender(kk)
        }), ek) : this._executeOnceBeforeRender(kk)
      }
      addPendingData(kk) {
        this._pendingData.push(kk)
      }
      removePendingData(kk) {
        const ek = this.isLoading,
          ik = this._pendingData.indexOf(kk); - 1 !== ik && this._pendingData.splice(ik, 1), ek && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
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
        const ek = this._isReadyChecks.indexOf(kk); - 1 !== ek && this._isReadyChecks.splice(ek, 1)
      }
      executeWhenReady(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(kk), null === this._executeWhenReadyTimeoutId && this._checkIsReady(ek)
      }
      async whenReadyAsync() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((ek => {
          this.executeWhenReady((() => {
            ek()
          }), kk)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = Sk.d.Now;
        else if (this.onReadyTimeoutDuration > 0 && Sk.d.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(kk)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(kk)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = Sk.d.Now
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
      setTransformMatrix(kk, ek, ik, Dk) {
        this._multiviewSceneUboIsActive = !!(ik && Dk && this._multiviewSceneUbo), this._viewUpdateFlag === kk.updateFlag && this._projectionUpdateFlag === ek.updateFlag || (this._viewUpdateFlag = kk.updateFlag, this._projectionUpdateFlag = ek.updateFlag, this._viewMatrix = kk, this._projectionMatrix = ek, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new Mk.b), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? Ok.b.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = Ok.b.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(ik, Dk) : this._sceneUbo.useUbo && (this._sceneUbo.N7("viewProjection", this._transformMatrix), this._sceneUbo.N7("view", this._viewMatrix), this._sceneUbo.N7("projection", this._projectionMatrix), this._sceneUbo.N7("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(kk, ek) {
        const ik = "boolean" === typeof ek ? ek : ek?.trackUBOsInFrame,
          Dk = new xk.d(this._engine, void 0, !1, kk ?? "bw", void 0, ik);
        return Dk.addUniform("viewProjection", 16), Dk.addUniform("view", 16), Dk.addUniform("projection", 16), Dk.addUniform("vEyePosition", 4), Dk.addUniform("inverseProjection", 16), Dk
      }
      setSceneUniformBuffer(kk) {
        this._sceneUbo = kk, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : Mk.o.ZeroReadOnly
      }
      getUniqueId() {
        return gk.UniqueId
      }
      Zik(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(kk), kk._resyncLightSources(), kk.parent || kk._addToSceneRootNodes(), fk.e.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(kk)
          })), ek)) {
          const ek = kk.getChildMeshes();
          for (const kk of ek) this.Zik(kk)
        }
      }
      Tu(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ik = this.meshes.indexOf(kk);
        if (-1 !== ik && (this.meshes.splice(ik, 1), kk.parent || kk._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(kk), this.onMeshRemovedObservable.notifyObservers(kk), ek) {
          const ek = kk.getChildMeshes();
          for (const kk of ek) this.Tu(kk)
        }
        return ik
      }
      addTransformNode(kk) {
        this._blockEntityCollection || kk.XF() === this && -1 !== kk._indexInSceneTransformNodesArray || (kk._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(kk), kk.parent || kk._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(kk))
      }
      removeTransformNode(kk) {
        const ek = kk._indexInSceneTransformNodesArray;
        if (-1 !== ek) {
          if (ek !== this.transformNodes.length - 1) {
            const kk = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[ek] = kk, kk._indexInSceneTransformNodesArray = ek
          }
          kk._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), kk.parent || kk._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(kk), ek
      }
      removeSkeleton(kk) {
        const ek = this.skeletons.indexOf(kk);
        return -1 !== ek && (this.skeletons.splice(ek, 1), this.onSkeletonRemovedObservable.notifyObservers(kk), this._executeActiveContainerCleanup(this._activeSkeletons)), ek
      }
      removeMorphTargetManager(kk) {
        const ek = this.morphTargetManagers.indexOf(kk);
        return -1 !== ek && this.morphTargetManagers.splice(ek, 1), ek
      }
      removeLight(kk) {
        const ek = this.lights.indexOf(kk);
        if (-1 !== ek) {
          for (const ek of this.meshes) ek._removeLightSource(kk, !1);
          this.lights.splice(ek, 1), this.sortLightsByPriority(), kk.parent || kk._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(kk)
        }
        return ek
      }
      removeCamera(kk) {
        const ek = this.cameras.indexOf(kk);
        if (-1 !== ek && (this.cameras.splice(ek, 1), kk.parent || kk._removeFromSceneRootNodes()), this.activeCameras) {
          const ek = this.activeCameras.indexOf(kk); - 1 !== ek && this.activeCameras.splice(ek, 1)
        }
        return this.activeCamera === kk && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(kk), ek
      }
      removeParticleSystem(kk) {
        const ek = this.ZY.indexOf(kk);
        return -1 !== ek && (this.ZY.splice(ek, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(kk), ek
      }
      removeAnimation(kk) {
        const ek = this.animations.indexOf(kk);
        return -1 !== ek && this.animations.splice(ek, 1), ek
      }
      stopAnimation(kk, ek, ik) {}
      removeAnimationGroup(kk) {
        const ek = this.animationGroups.indexOf(kk);
        return -1 !== ek && this.animationGroups.splice(ek, 1), this.onAnimationGroupRemovedObservable.notifyObservers(kk), ek
      }
      removeMultiMaterial(kk) {
        const ek = this.multiMaterials.indexOf(kk);
        return -1 !== ek && this.multiMaterials.splice(ek, 1), this.onMultiMaterialRemovedObservable.notifyObservers(kk), ek
      }
      removeMaterial(kk) {
        const ek = kk._indexInSceneMaterialArray;
        if (-1 !== ek && ek < this.materials.length) {
          if (ek !== this.materials.length - 1) {
            const kk = this.materials[this.materials.length - 1];
            this.materials[ek] = kk, kk._indexInSceneMaterialArray = ek
          }
          kk._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(kk), ek
      }
      removeActionManager(kk) {
        const ek = this.actionManagers.indexOf(kk);
        return -1 !== ek && this.actionManagers.splice(ek, 1), ek
      }
      removeTexture(kk) {
        const ek = this.textures.indexOf(kk);
        return -1 !== ek && this.textures.splice(ek, 1), this.onTextureRemovedObservable.notifyObservers(kk), ek
      }
      removeFrameGraph(kk) {
        const ek = this.frameGraphs.indexOf(kk);
        return -1 !== ek && this.frameGraphs.splice(ek, 1), this.onFrameGraphRemovedObservable.notifyObservers(kk), ek
      }
      removeObjectRenderer(kk) {
        const ek = this.objectRenderers.indexOf(kk);
        return -1 !== ek && this.objectRenderers.splice(ek, 1), this.onObjectRendererRemovedObservable.notifyObservers(kk), ek
      }
      removePostProcess(kk) {
        const ek = this.postProcesses.indexOf(kk);
        return -1 !== ek && this.postProcesses.splice(ek, 1), this.onPostProcessRemovedObservable.notifyObservers(kk), ek
      }
      removeEffectLayer(kk) {
        const ek = this.effectLayers.indexOf(kk);
        return -1 !== ek && this.effectLayers.splice(ek, 1), this.onEffectLayerRemovedObservable.notifyObservers(kk), ek
      }
      addLight(kk) {
        if (!this._blockEntityCollection) {
          this.lights.push(kk), this.sortLightsByPriority(), kk.parent || kk._addToSceneRootNodes();
          for (const ek of this.meshes) - 1 === ek.lightSources.indexOf(kk) && (ek.lightSources.push(kk), ek._resyncLightSources());
          fk.e.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(kk)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(Nk.d.CompareLightsPriority)
      }
      addCamera(kk) {
        this._blockEntityCollection || (this.cameras.push(kk), fk.e.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(kk)
        })), kk.parent || kk._addToSceneRootNodes())
      }
      addSkeleton(kk) {
        this._blockEntityCollection || (this.skeletons.push(kk), fk.e.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(kk)
        })))
      }
      addParticleSystem(kk) {
        this._blockEntityCollection || (this.ZY.push(kk), fk.e.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(kk)
        })))
      }
      addAnimation(kk) {
        this._blockEntityCollection || this.animations.push(kk)
      }
      addAnimationGroup(kk) {
        this._blockEntityCollection || (this.animationGroups.push(kk), fk.e.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(kk)
        })))
      }
      addMultiMaterial(kk) {
        this._blockEntityCollection || (this.multiMaterials.push(kk), fk.e.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(kk)
        })))
      }
      addMaterial(kk) {
        this._blockEntityCollection || kk.XF() === this && -1 !== kk._indexInSceneMaterialArray || (kk._indexInSceneMaterialArray = this.materials.length, this.materials.push(kk), fk.e.SetImmediate((() => {
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
        this.frameGraphs.push(kk), fk.e.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(kk)
        }))
      }
      addObjectRenderer(kk) {
        this.objectRenderers.push(kk), fk.e.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(kk)
        }))
      }
      addPostProcess(kk) {
        this._blockEntityCollection || (this.postProcesses.push(kk), fk.e.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(kk)
        })))
      }
      addEffectLayer(kk) {
        this._blockEntityCollection || (this.effectLayers.push(kk), fk.e.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(kk)
        })))
      }
      switchActiveCamera(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = kk, ek && kk.attachControl())
      }
      setActiveCameraById(kk) {
        const ek = this.getCameraById(kk);
        return ek ? (this.activeCamera = ek, ek) : null
      }
      setActiveCameraByName(kk) {
        const ek = this.getCameraByName(kk);
        return ek ? (this.activeCamera = ek, ek) : null
      }
      getAnimationGroupByName(kk) {
        for (let ek = 0; ek < this.animationGroups.length; ek++)
          if (this.animationGroups[ek].name === kk) return this.animationGroups[ek];
        return null
      }
      _getMaterial(kk, ek) {
        for (let ik = 0; ik < this.materials.length; ik++) {
          const kk = this.materials[ik];
          if (ek(kk)) return kk
        }
        if (kk)
          for (let ik = 0; ik < this.multiMaterials.length; ik++) {
            const kk = this.multiMaterials[ik];
            if (ek(kk)) return kk
          }
        return null
      }
      getMaterialByUniqueID(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(kk, ek)
      }
      getMaterialByUniqueId(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(ek, (ek => ek.uniqueId === kk))
      }
      getMaterialById(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(ek, (ek => ek.id === kk))
      }
      getMaterialByName(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(ek, (ek => ek.name === kk))
      }
      getLastMaterialById(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let ik = this.materials.length - 1; ik >= 0; ik--)
          if (this.materials[ik].id === kk) return this.materials[ik];
        if (ek)
          for (let ik = this.multiMaterials.length - 1; ik >= 0; ik--)
            if (this.multiMaterials[ik].id === kk) return this.multiMaterials[ik];
        return null
      }
      getTextureByUniqueId(kk) {
        for (let ek = 0; ek < this.textures.length; ek++)
          if (this.textures[ek].uniqueId === kk) return this.textures[ek];
        return null
      }
      getTextureByName(kk) {
        for (let ek = 0; ek < this.textures.length; ek++)
          if (this.textures[ek].name === kk) return this.textures[ek];
        return null
      }
      getCameraById(kk) {
        for (let ek = 0; ek < this.cameras.length; ek++)
          if (this.cameras[ek].id === kk) return this.cameras[ek];
        return null
      }
      getCameraByUniqueId(kk) {
        for (let ek = 0; ek < this.cameras.length; ek++)
          if (this.cameras[ek].uniqueId === kk) return this.cameras[ek];
        return null
      }
      getCameraByName(kk) {
        for (let ek = 0; ek < this.cameras.length; ek++)
          if (this.cameras[ek].name === kk) return this.cameras[ek];
        return null
      }
      getBoneById(kk) {
        for (let ek = 0; ek < this.skeletons.length; ek++) {
          const ik = this.skeletons[ek];
          for (let ek = 0; ek < ik.bones.length; ek++)
            if (ik.bones[ek].id === kk) return ik.bones[ek]
        }
        return null
      }
      getBoneByName(kk) {
        for (let ek = 0; ek < this.skeletons.length; ek++) {
          const ik = this.skeletons[ek];
          for (let ek = 0; ek < ik.bones.length; ek++)
            if (ik.bones[ek].name === kk) return ik.bones[ek]
        }
        return null
      }
      getLightByName(kk) {
        for (let ek = 0; ek < this.lights.length; ek++)
          if (this.lights[ek].name === kk) return this.lights[ek];
        return null
      }
      getLightById(kk) {
        for (let ek = 0; ek < this.lights.length; ek++)
          if (this.lights[ek].id === kk) return this.lights[ek];
        return null
      }
      getLightByUniqueId(kk) {
        for (let ek = 0; ek < this.lights.length; ek++)
          if (this.lights[ek].uniqueId === kk) return this.lights[ek];
        return null
      }
      getParticleSystemById(kk) {
        for (let ek = 0; ek < this.ZY.length; ek++)
          if (this.ZY[ek].id === kk) return this.ZY[ek];
        return null
      }
      getGeometryById(kk) {
        for (let ek = 0; ek < this.geometries.length; ek++)
          if (this.geometries[ek].id === kk) return this.geometries[ek];
        return null
      }
      _getGeometryByUniqueId(kk) {
        if (this._geometriesByUniqueId) {
          const ek = this._geometriesByUniqueId[kk];
          if (void 0 !== ek) return this.geometries[ek]
        } else
          for (let ek = 0; ek < this.geometries.length; ek++)
            if (this.geometries[ek].uniqueId === kk) return this.geometries[ek];
        return null
      }
      getFrameGraphByName(kk) {
        for (let ek = 0; ek < this.frameGraphs.length; ek++)
          if (this.frameGraphs[ek].name === kk) return this.frameGraphs[ek];
        return null
      }
      pushGeometry(kk, ek) {
        return !(!ek && this._getGeometryByUniqueId(kk.uniqueId)) && (this.addGeometry(kk), fk.e.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(kk)
        })), !0)
      }
      removeGeometry(kk) {
        let ek;
        if (this._geometriesByUniqueId) {
          if (ek = this._geometriesByUniqueId[kk.uniqueId], void 0 === ek) return !1
        } else if (ek = this.geometries.indexOf(kk), ek < 0) return !1;
        if (ek !== this.geometries.length - 1) {
          const kk = this.geometries[this.geometries.length - 1];
          kk && (this.geometries[ek] = kk, this._geometriesByUniqueId && (this._geometriesByUniqueId[kk.uniqueId] = ek))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[kk.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(kk), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(kk) {
        for (let ek = 0; ek < this.meshes.length; ek++)
          if (this.meshes[ek].id === kk) return this.meshes[ek];
        return null
      }
      getMeshesById(kk) {
        return this.meshes.filter((function(ek) {
          return ek.id === kk
        }))
      }
      getTransformNodeById(kk) {
        for (let ek = 0; ek < this.transformNodes.length; ek++)
          if (this.transformNodes[ek].id === kk) return this.transformNodes[ek];
        return null
      }
      getTransformNodeByUniqueId(kk) {
        for (let ek = 0; ek < this.transformNodes.length; ek++)
          if (this.transformNodes[ek].uniqueId === kk) return this.transformNodes[ek];
        return null
      }
      getTransformNodesById(kk) {
        return this.transformNodes.filter((function(ek) {
          return ek.id === kk
        }))
      }
      getMeshByUniqueId(kk) {
        for (let ek = 0; ek < this.meshes.length; ek++)
          if (this.meshes[ek].uniqueId === kk) return this.meshes[ek];
        return null
      }
      getLastMeshById(kk) {
        for (let ek = this.meshes.length - 1; ek >= 0; ek--)
          if (this.meshes[ek].id === kk) return this.meshes[ek];
        return null
      }
      getLastTransformNodeById(kk) {
        for (let ek = this.transformNodes.length - 1; ek >= 0; ek--)
          if (this.transformNodes[ek].id === kk) return this.transformNodes[ek];
        return null
      }
      getLastEntryById(kk) {
        let ek;
        for (ek = this.meshes.length - 1; ek >= 0; ek--)
          if (this.meshes[ek].id === kk) return this.meshes[ek];
        for (ek = this.transformNodes.length - 1; ek >= 0; ek--)
          if (this.transformNodes[ek].id === kk) return this.transformNodes[ek];
        for (ek = this.cameras.length - 1; ek >= 0; ek--)
          if (this.cameras[ek].id === kk) return this.cameras[ek];
        for (ek = this.lights.length - 1; ek >= 0; ek--)
          if (this.lights[ek].id === kk) return this.lights[ek];
        for (ek = this.skeletons.length - 1; ek >= 0; ek--) {
          const ik = this.skeletons[ek];
          for (let ek = ik.bones.length - 1; ek >= 0; ek--)
            if (ik.bones[ek].id === kk) return ik.bones[ek]
        }
        return null
      }
      getNodeById(kk) {
        const ek = this.getMeshById(kk);
        if (ek) return ek;
        const ik = this.getTransformNodeById(kk);
        if (ik) return ik;
        const Dk = this.getLightById(kk);
        if (Dk) return Dk;
        const fk = this.getCameraById(kk);
        if (fk) return fk;
        const Sk = this.getBoneById(kk);
        return Sk || null
      }
      getNodeByName(kk) {
        const ek = this.getMeshByName(kk);
        if (ek) return ek;
        const ik = this.getTransformNodeByName(kk);
        if (ik) return ik;
        const Dk = this.getLightByName(kk);
        if (Dk) return Dk;
        const fk = this.getCameraByName(kk);
        if (fk) return fk;
        const Sk = this.getBoneByName(kk);
        return Sk || null
      }
      getMeshByName(kk) {
        for (let ek = 0; ek < this.meshes.length; ek++)
          if (this.meshes[ek].name === kk) return this.meshes[ek];
        return null
      }
      getTransformNodeByName(kk) {
        for (let ek = 0; ek < this.transformNodes.length; ek++)
          if (this.transformNodes[ek].name === kk) return this.transformNodes[ek];
        return null
      }
      getLastSkeletonById(kk) {
        for (let ek = this.skeletons.length - 1; ek >= 0; ek--)
          if (this.skeletons[ek].id === kk) return this.skeletons[ek];
        return null
      }
      getSkeletonByUniqueId(kk) {
        for (let ek = 0; ek < this.skeletons.length; ek++)
          if (this.skeletons[ek].uniqueId === kk) return this.skeletons[ek];
        return null
      }
      getSkeletonById(kk) {
        for (let ek = 0; ek < this.skeletons.length; ek++)
          if (this.skeletons[ek].id === kk) return this.skeletons[ek];
        return null
      }
      getSkeletonByName(kk) {
        for (let ek = 0; ek < this.skeletons.length; ek++)
          if (this.skeletons[ek].name === kk) return this.skeletons[ek];
        return null
      }
      getMorphTargetManagerById(kk) {
        for (let ek = 0; ek < this.morphTargetManagers.length; ek++)
          if (this.morphTargetManagers[ek].uniqueId === kk) return this.morphTargetManagers[ek];
        return null
      }
      getMorphTargetById(kk) {
        for (let ek = 0; ek < this.morphTargetManagers.length; ++ek) {
          const ik = this.morphTargetManagers[ek];
          for (let ek = 0; ek < ik.numTargets; ++ek) {
            const Dk = ik.getTarget(ek);
            if (Dk.id === kk) return Dk
          }
        }
        return null
      }
      getMorphTargetByName(kk) {
        for (let ek = 0; ek < this.morphTargetManagers.length; ++ek) {
          const ik = this.morphTargetManagers[ek];
          for (let ek = 0; ek < ik.numTargets; ++ek) {
            const Dk = ik.getTarget(ek);
            if (Dk.name === kk) return Dk
          }
        }
        return null
      }
      getPostProcessByName(kk) {
        for (let ek = 0; ek < this.postProcesses.length; ++ek) {
          const ik = this.postProcesses[ek];
          if (ik.name === kk) return ik
        }
        return null
      }
      isActiveMesh(kk) {
        return -1 !== this._activeMeshes.indexOf(kk)
      }
      get uid() {
        return this._uid || (this._uid = Dk.i.RandomId()), this._uid
      }
      addExternalData(kk, ek) {
        return this._externalData || (this._externalData = new Pk), this._externalData.add(kk, ek)
      }
      getExternalData(kk) {
        return this._externalData ? this._externalData.get(kk) : null
      }
      getOrAddExternalDataWithFactory(kk, ek) {
        return this._externalData || (this._externalData = new Pk), this._externalData.getOrAddWithFactory(kk, ek)
      }
      removeExternalData(kk) {
        return this._externalData.remove(kk)
      }
      _evaluateSubMesh(kk, ek, ik, Dk) {
        if (Dk || kk.isInFrustum(this._frustumPlanes)) {
          for (let Dk = 0, fk = this._evaluateSubMeshStage; Dk < fk.length; Dk++) {
            fk[Dk].action(ek, kk)
          }
          const ik = kk.fH();
          null !== ik && void 0 !== ik && (ik.hasRenderTargetTextures && null != ik.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(ik) && (this._processedMaterials.push(ik), this._materialsRenderTargets.concatWithNoDuplicate(ik.getRenderTargetTextures())), this._renderingManager.dispatch(kk, ek, ik))
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
            const ek = this.activeCameras[kk];
            ek && ek._activeMeshes && ek._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let kk = 0; kk < this.textures.length; kk++) {
            const ek = this.textures[kk];
            ek && ek.renderList && ek.freeRenderingGroups()
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
          ek = arguments.length > 1 ? arguments[1] : void 0,
          ik = arguments.length > 2 ? arguments[2] : void 0,
          Dk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          Sk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const bk = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const kk of bk) kk.objectRenderer._freezeActiveMeshes(Dk);
          return this._freezeActiveMeshesCancel = (0, fk.h)((() => {
            let kk = !0,
              ek = !0;
            for (const ik of bk) kk && (kk = ik.objectRenderer._isFrozen), ek && (ek = null !== ik.objectRenderer._freezeActiveMeshesCancel);
            if (kk) return !0;
            if (!ek) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Sk, this._skipEvaluateActiveMeshesCompletely = kk, ek?.()
          }), ((kk, ek) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), ek) {
              const ek = "Scene: Timeout while waiting for meshes to be frozen.";
              ik ? ik(ek) : (ei.b.Error(ek), kk && ei.b.Error(kk))
            } else {
              const ek = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              ik ? ik(ek) : (ei.b.Error(ek), kk && (ei.b.Error(kk), kk.stack && ei.b.Error(kk.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Sk, this._skipEvaluateActiveMeshesCompletely = kk, Dk)
              for (let kk = 0; kk < this._activeMeshes.length; kk++) this._activeMeshes.data[kk]._freeze();
            ek && ek()
          } else ik && ik("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let kk = 0; kk < this.meshes.length; kk++) {
          const ek = this.meshes[kk];
          ek._internalAbstractMeshDataInfo && (ek._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const kk = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const ek of kk) ek.objectRenderer._unfreezeActiveMeshes()
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
            for (let ek = 0; ek < kk; ek++) {
              this._activeMeshes.data[ek].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const kk = this._activeParticleSystems.length;
            for (let ek = 0; ek < kk; ek++) this._activeParticleSystems.data[ek].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let fk = 0, Sk = this._beforeEvaluateActiveMeshStage; fk < Sk.length; fk++) {
          Sk[fk].action()
        }
        const kk = this.getActiveMeshCandidates(),
          ek = kk.length,
          ik = Tk.b.Enabled,
          Dk = this.customLODSelector;
        for (let fk = 0; fk < ek; fk++) {
          const ek = kk.data[fk],
            Sk = !Dk && !ek.JF && !ek._internalMeshDataInfo?._LODLevels.length;
          let bk, rk;
          if ((Sk || (bk = ek._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), bk ? bk[1] = -1 : (bk = [ek, -1], ek._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, bk))), !ek.isBlocked) && (ik && this._totalVertices.addCount(ek.getTotalVertices(), !1), ek.isReady() && ek.isEnabled() && !ek.wi.hasAZeroComponent)) {
            if (ek.computeWorldMatrix(), ek.actionManager && ek.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(ek), Sk) rk = ek;
            else if (rk = Dk ? Dk(ek, this.activeCamera) : ek.getLOD(this.activeCamera), bk[0] = rk, bk[1] = this._frameId, void 0 === rk || null === rk) continue;
            if (rk !== ek && 0 !== rk.billboardMode && rk.computeWorldMatrix(), ek._preActivate(), ek.isVisible && ek.visibility > 0 && 0 !== (ek.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || ek.kH || ek.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(ek), this.activeCamera._activeMeshes.push(ek), rk !== ek && rk._activate(this._renderId, !1);
              for (let kk = 0, ik = this._preActiveMeshStage; kk < ik.length; kk++) {
                ik[kk].action(ek)
              }
              ek._activate(this._renderId, !1) && (ek.JF ? ek._internalAbstractMeshDataInfo._actAsRegularMesh && (rk = ek) : rk._internalAbstractMeshDataInfo._onlyForInstances = !1, rk._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(ek, rk)), ek._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let kk = 0; kk < this.ZY.length; kk++) {
            const ek = this.ZY[kk];
            if (!ek.isStarted() || !ek.emitter) continue;
            const ik = ek.emitter;
            ik.position && !ik.isEnabled() || (this._activeParticleSystems.push(ek), ek.animate(), this._renderingManager.dispatchParticles(ek))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(kk) {
        this._skeletonsEnabled && kk.skeleton && (this._activeSkeletons.pushNoDuplicate(kk.skeleton) && (kk.skeleton.prepare(), this._activeBones.addCount(kk.skeleton.bones.length, !1)), kk.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(kk) && this.frameGraph && kk.applySkeleton(kk.skeleton))
      }
      _activeMesh(kk, ek) {
        this._prepareSkeleton(ek);
        let ik = kk.hDk || kk.JF || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || ek.kH;
        if (ek && ek.TY && ek.TY.length > 0) {
          const Dk = this.getActiveSubMeshCandidates(ek),
            fk = Dk.length;
          ik = ik || 1 === fk;
          for (let Sk = 0; Sk < fk; Sk++) {
            const fk = Dk.data[Sk];
            this._evaluateSubMesh(fk, ek, kk, ik)
          }
        }
      }
      updateTransformMatrix(kk) {
        const ek = this.activeCamera;
        if (ek)
          if (ek._renderingMultiview) {
            const ik = ek._rigCameras[0],
              Dk = ek._rigCameras[1];
            this.setTransformMatrix(ik.getViewMatrix(), ik.getProjectionMatrix(kk), Dk.getViewMatrix(), Dk.getProjectionMatrix(kk))
          } else this.setTransformMatrix(ek.getViewMatrix(), ek.getProjectionMatrix(kk))
      }
      _bindFrameBuffer(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (kk && kk._multiviewTexture ? kk._multiviewTexture._bindFrameBuffer() : kk && kk.outputRenderTarget ? kk.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), ek && this._clearFrameBuffer(kk)
      }
      _clearFrameBuffer(kk) {
        if (kk && kk._multiviewTexture);
        else if (kk && kk.outputRenderTarget && !kk._renderingMultiview) {
          const ek = kk.outputRenderTarget;
          ek.onClearObservable.hasObservers() ? ek.onClearObservable.notifyObservers(this._engine) : ek.skipInitialClear || kk.isRightCamera || (this.autoClear && this._engine.clear(ek.clearColor || this._clearColor, !ek._cleared, !0, !0), ek._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(kk, ek) {
        let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (kk && kk._skipRendering) return;
        const fk = this._engine;
        if (this._activeCamera = kk, !this.activeCamera) throw new Error("Active camera not set");
        if (fk.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && ik) {
          let ek = !0;
          kk._renderingMultiview && kk.outputRenderTarget && (ek = kk.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, kk.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), kk._renderingMultiview && kk.outputRenderTarget && (kk.outputRenderTarget.skipInitialClear = ek)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = kk.outputRenderTarget?.renderPassId ?? kk.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let Dk = 0; Dk < this._softwareSkinnedMeshes.length; Dk++) {
          const kk = this._softwareSkinnedMeshes.data[Dk];
          kk.applySkeleton(kk.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), kk.customRenderTargets && kk.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(kk.customRenderTargets), ek && ek.customRenderTargets && ek.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(ek.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let Dk = 0, rk = this._gatherActiveCameraRenderTargetsStage; Dk < rk.length; Dk++) {
          rk[Dk].action(this._renderTargets)
        }
        let Sk = !1;
        if (this.renderTargetsEnabled) {
          let kk;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            Dk.i.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const ek = this.getBoundingBoxRenderer?.();
            for (let ik = 0; ik < this._renderTargets.length; ik++) {
              const Dk = this._renderTargets.data[ik];
              if (Dk._shouldRender()) {
                this._renderId++;
                const ik = Dk.activeCamera && Dk.activeCamera !== this.activeCamera;
                ek && !kk && (kk = ek.renderList.length > 0 ? ek.renderList.data.slice() : [], kk.length = ek.renderList.length), Dk.render(ik, this.dumpNextRenderTargets), Sk = !0
              }
            }
            ek && kk && (ek.renderList.data = kk, ek.renderList.length = kk.length), Dk.i.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const ek = this.getBoundingBoxRenderer?.();
            ek && !kk && (kk = ek.renderList.length > 0 ? ek.renderList.data.slice() : [], kk.length = ek.renderList.length);
            for (let kk = 0, ik = this._cameraDrawRenderTargetStage; kk < ik.length; kk++) {
              Sk = ik[kk].action(this.activeCamera) || Sk
            }
            ek && kk && (ek.renderList.data = kk, ek.renderList.length = kk.length)
          }
          this._intermediateRendering = !1
        }
        Sk && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || kk._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let Dk = 0, rk = this._beforeCameraDrawStage; Dk < rk.length; Dk++) {
          rk[Dk].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const bk = fk.snapshotRendering && 1 === fk.snapshotRenderingMode;
        bk && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !bk), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let Dk = 0, rk = this._afterCameraDrawStage; Dk < rk.length; Dk++) {
          rk[Dk].action(this.activeCamera)
        }
        if (this.postProcessManager && !kk._multiviewTexture) {
          const ek = kk.outputRenderTarget ? kk.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(kk.isIntermediate, ek)
        }
        for (let Dk = 0, rk = this._afterCameraPostProcessStage; Dk < rk.length; Dk++) {
          rk[Dk].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === kk.cameraRigMode || kk._renderingMultiview) return kk._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(kk, void 0, ek), void this.onAfterRenderCameraObservable.notifyObservers(kk);
        if (kk._useMultiviewToSingleView) this._renderMultiviewToSingleView(kk);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(kk);
          for (let ek = 0; ek < kk._rigCameras.length; ek++) this._renderForCamera(kk._rigCameras[ek], kk)
        }
        this._activeCamera = kk, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(kk)
      }
      _checkIntersections() {
        for (let kk = 0; kk < this._meshesForIntersections.length; kk++) {
          const ek = this._meshesForIntersections.data[kk];
          if (ek.actionManager)
            for (let kk = 0; ek.actionManager && kk < ek.actionManager.actions.length; kk++) {
              const ik = ek.actionManager.actions[kk];
              if (12 === ik.trigger || 13 === ik.trigger) {
                const kk = ik.getTriggerParameter(),
                  Dk = kk.mesh ? kk.mesh : kk,
                  fk = Dk.qDk(ek, kk.usePreciseIntersection),
                  Sk = ek._intersectionsInProgress.indexOf(Dk);
                fk && -1 === Sk ? 12 === ik.trigger ? (ik._executeCurrent(Uk.CreateNew(ek, void 0, Dk)), ek._intersectionsInProgress.push(Dk)) : 13 === ik.trigger && ek._intersectionsInProgress.push(Dk) : !fk && Sk > -1 && (13 === ik.trigger && ik._executeCurrent(Uk.CreateNew(ek, void 0, Dk)), ek.actionManager.hasSpecificTrigger(13, (kk => {
                  const ek = kk.mesh ? kk.mesh : kk;
                  return Dk === ek
                })) && 13 !== ik.trigger || ek._intersectionsInProgress.splice(Sk, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(kk) {}
      _animate(kk) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let kk = Math.max(bi.MinDeltaTime, Math.min(this._engine.getDeltaTime(), bi.MaxDeltaTime)) + this._timeAccumulator;
          const ek = this._engine.getTimeStep(),
            ik = 1e3 / ek / 1e3;
          let Dk = 0;
          const fk = this._engine.getLockstepMaxSteps();
          let Sk = Math.floor(kk / ek);
          for (Sk = Math.min(Sk, fk); kk > 0 && Dk < Sk;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = ek * ik, this._animate(ek), this.onAfterAnimationsObservable.notifyObservers(this), this.qE && this._advancePhysicsEngineStep(ek), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, Dk++, kk -= ek;
          this._timeAccumulator = kk < 0 ? 0 : kk
        } else {
          const kk = this.useConstantAnimationDeltaTime ? 16 : Math.max(bi.MinDeltaTime, Math.min(this._engine.getDeltaTime(), bi.MaxDeltaTime));
          this._animationRatio = .06 * kk, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.qE && this._advancePhysicsEngineStep(kk)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(kk) {
        if (kk?.outputRenderTarget && !kk?.isRigCamera && (kk.outputRenderTarget._cleared = !1), kk?.rigCameras?.length)
          for (let ek = 0; ek < kk.rigCameras.length; ++ek) {
            const ik = kk.rigCameras[ek].outputRenderTarget;
            ik && (ik._cleared = !1)
          }
      }
      resetDrawCache(kk) {
        if (this.meshes)
          for (const ek of this.meshes) ek.resetDrawCache(kk)
      }
      _renderWithFrameGraph() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ek = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, kk)
          for (const ik of this.cameras)
            if (ik.update(), 0 !== ik.cameraRigMode)
              for (let kk = 0; kk < ik._rigCameras.length; kk++) ik._rigCameras[kk].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(ek)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(kk) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const ek = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), Dk.i.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let kk = 0; kk < this._renderTargets.length; kk++) {
            const ik = this._renderTargets.data[kk],
              Dk = ik.activeCamera || ek;
            this._renderRenderTarget(ik, Dk, !0, this.dumpNextRenderTargets)
          }
          Dk.i.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let ik = 0, Dk = this._beforeClearStage; ik < Dk.length; ik++) {
          Dk[ik].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const ek = this.getActiveMeshCandidates(),
            ik = ek.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let kk = 0; kk < ik; kk++) {
                const ik = ek.data[kk];
                ik._internalAbstractMeshDataInfo._wasActiveLastFrame && ik.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const kk = this._activeParticleSystems.length;
              for (let ek = 0; ek < kk; ek++) this._activeParticleSystems.data[ek].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let Dk = 0; Dk < ik; Dk++) {
              const ik = ek.data[Dk];
              ik._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, ik.isBlocked || (this._totalVertices.addCount(ik.getTotalVertices(), !1), ik.isReady() && ik.isEnabled() && !ik.wi.hasAZeroComponent && (ik.computeWorldMatrix(kk), ik.actionManager && ik.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(ik)))
            }
            if (this.particlesEnabled)
              for (let kk = 0; kk < this.ZY.length; kk++) {
                const ek = this.ZY[kk];
                if (!ek.isStarted() || !ek.emitter) continue;
                const ik = ek.emitter;
                ik.position && !ik.isEnabled() || (this._activeParticleSystems.push(ek), ek.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, kk._shouldRender()) {
          if (this._renderId++, this.activeCamera = ek, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), kk.render(ik, Dk)
        }
        this._intermediateRendering = !1
      }
      render() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.RL) return;
        const ik = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(kk, ek)
        } finally {
          this._renderingMeshEvaluationDepth = ik
        }
      }
      _renderFrame(kk, ek) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), wk.b.XF = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const ik of this.activeCameras) this._checkCameraRenderTarget(ik);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), ek || this.animate();
        for (let ik = 0, Dk = this._beforeCameraUpdateStage; ik < Dk.length; ik++) {
          Dk[ik].action()
        }
        if (kk)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let ik = 0; ik < this.activeCameras.length; ik++) {
              const kk = this.activeCameras[ik];
              if (kk.update(), 0 !== kk.cameraRigMode)
                for (let ek = 0; ek < kk._rigCameras.length; ek++) kk._rigCameras[ek].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let ik = 0; ik < this.activeCamera._rigCameras.length; ik++) this.activeCamera._rigCameras[ik].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(kk, ek);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const kk = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            Dk.i.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let ek = 0; ek < this.customRenderTargets.length; ek++) {
              const ik = this.customRenderTargets[ek],
                Dk = ik.activeCamera || this.activeCamera;
              this._renderRenderTarget(ik, Dk, kk !== Dk, this.dumpNextRenderTargets)
            }
            Dk.i.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = kk?.renderPassId ?? 0, this.activeCamera = kk, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let ek = 0, ik = this._beforeClearStage; ek < ik.length; ek++) {
            ik[ek].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let ek = 0, ik = this._gatherRenderTargetsStage; ek < ik.length; ek++) {
            ik[ek].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let ek = 0; ek < this.activeCameras.length; ek++) this._processSubCameras(this.activeCameras[ek], ek > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let ik = 0, Dk = this._afterRenderStage; ik < Dk.length; ik++) {
          Dk[ik].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let kk = 0; kk < this._toBeDisposed.length; kk++) {
            const ek = this._toBeDisposed[kk];
            ek && ek.dispose()
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
        if (this.RL) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, Lk.d)(this.stopAllAnimations)) {
          for (const kk of this._activeAnimatables) kk.onAnimationEndObservable.clear(), kk.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const kk = this._activeRequests.slice();
        for (const Sk of kk) Sk.abort();
        this._activeRequests.length = 0;
        try {
          this.ZF.notifyObservers(this)
        } catch (fk) {
          ei.b.Error("An error occurred while calling onDisposeObservable!", fk)
        }
        this.detachControl();
        const ek = this._engine.getInputElement?.();
        if (ek)
          for (let Sk = 0; Sk < this.cameras.length; Sk++) this.cameras[Sk].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (kk => kk.dispose(!0))), this._disposeList(this.transformNodes, (kk => kk.dispose(!0)));
        const ik = this.cameras;
        this._disposeList(ik), this._disposeList(this.ZY), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let Dk = this._engine.scenes.indexOf(this);
        if (Dk > -1 && this._engine.scenes.splice(Dk, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, wk.d)(), Yk.e._LastCreatedScene === this) {
          Yk.e._LastCreatedScene = null;
          let kk = Yk.e.Instances.length - 1;
          for (; kk >= 0;) {
            const ek = Yk.e.Instances[kk];
            if (ek.scenes.length > 0) {
              Yk.e._LastCreatedScene = ek.scenes[this._engine.scenes.length - 1];
              break
            }
            kk--
          }
        }
        Dk = this._engine._virtualScenes.indexOf(this), Dk > -1 && this._engine._virtualScenes.splice(Dk, 1), this._engine.wipeCaches(!0), this.ZF.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(kk, ek) {
        const ik = kk.slice(0);
        ek = ek ?? (kk => kk.dispose());
        for (const Dk of ik) ek(Dk);
        kk.length = 0
      }
      get RL() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let kk = 0; kk < this.meshes.length; kk++) {
          const ek = this.meshes[kk].geometry;
          ek && ek.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const kk of this.textures) {
          kk._buffer && (kk._buffer = null)
        }
      }
      getWorldExtends(kk) {
        const ek = new Mk.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          ik = new Mk.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        kk = kk || (() => !0);
        const Dk = this.meshes.filter(kk);
        for (const fk of Dk) {
          if (fk.computeWorldMatrix(!0), !fk.TY || 0 === fk.TY.length || fk.infiniteDistance) continue;
          const kk = fk.hq(),
            Dk = kk.boundingBox.minimumWorld,
            Sk = kk.boundingBox.maximumWorld;
          Mk.o.CheckExtends(Dk, ek, ik), Mk.o.CheckExtends(Sk, ek, ik)
        }
        return ek.x === Number.MAX_VALUE ? {
          min: Mk.o.Zero(),
          max: Mk.o.Zero()
        } : {
          min: ek,
          max: ik
        }
      }
      createPickingRay(kk, ek, ik, Dk) {
        throw (0, Lk.k)("Ray")
      }
      createPickingRayToRef(kk, ek, ik, Dk, fk) {
        throw (0, Lk.k)("Ray")
      }
      createPickingRayInCameraSpace(kk, ek, ik) {
        throw (0, Lk.k)("Ray")
      }
      createPickingRayInCameraSpaceToRef(kk, ek, ik, Dk) {
        throw (0, Lk.k)("Ray")
      }
      Un(kk, ek, ik, Dk, fk, Sk) {
        const bk = (0, Lk.k)("Ray", !0);
        return bk && ei.b.Warn(bk), new nk.b
      }
      pickWithBoundingInfo(kk, ek, ik, Dk, fk) {
        const Sk = (0, Lk.k)("Ray", !0);
        return Sk && ei.b.Warn(Sk), new nk.b
      }
      pickWithRay(kk, ek, ik, Dk) {
        throw (0, Lk.k)("Ray")
      }
      multiPick(kk, ek, ik, Dk, fk) {
        throw (0, Lk.k)("Ray")
      }
      multiPickWithRay(kk, ek, ik) {
        throw (0, Lk.k)("Ray")
      }
      setPointerOverMesh(kk, ek, ik) {
        this._inputManager.setPointerOverMesh(kk, ek, ik)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const kk of this.geometries) kk._rebuild();
        for (const kk of this.meshes) kk._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const kk of this._components) kk.rebuild();
        for (const kk of this.ZY) kk.rebuild();
        if (this.spriteManagers)
          for (const kk of this.spriteManagers) kk.rebuild()
      }
      _rebuildTextures() {
        for (const kk of this.textures) kk._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(kk, ek, ik) {
        if (void 0 === ek) return kk;
        const Dk = [];
        for (const fk in kk) {
          const Sk = kk[fk];
          mk.c && mk.c.MatchesQuery(Sk, ek) && (!ik || ik(Sk)) && Dk.push(Sk)
        }
        return Dk
      }
      getMeshesByTags(kk, ek) {
        return this._getByTags(this.meshes, kk, ek)
      }
      getCamerasByTags(kk, ek) {
        return this._getByTags(this.cameras, kk, ek)
      }
      getLightsByTags(kk, ek) {
        return this._getByTags(this.lights, kk, ek)
      }
      getMaterialByTags(kk, ek) {
        return this._getByTags(this.materials, kk, ek).concat(this._getByTags(this.multiMaterials, kk, ek))
      }
      getTransformNodesByTags(kk, ek) {
        return this._getByTags(this.transformNodes, kk, ek)
      }
      setRenderingOrder(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(kk, ek, ik, Dk)
      }
      setRenderingAutoClearDepthStencil(kk, ek) {
        let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Dk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(kk, ek, ik, Dk)
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
      markAllMaterialsAsDirty(kk, ek) {
        if (!this._blockMaterialDirtyMechanism)
          for (const ik of this.materials) ek && !ek(ik) || ik.pek(kk)
      }
      _loadFile(kk, ek, ik, Dk, fk, Sk, bk) {
        const rk = (0, Gk.k)(kk, ek, ik, Dk ? this.offlineProvider : void 0, fk, Sk, bk);
        return this._activeRequests.push(rk), rk.onCompleteObservable.add((kk => {
          this._activeRequests.splice(this._activeRequests.indexOf(kk), 1)
        })), rk
      }
      async _loadFileAsync(kk, ek, ik, Dk, fk) {
        return await new Promise(((Sk, bk) => {
          this._loadFile(kk, (kk => {
            Sk(kk)
          }), ek, ik, Dk, ((kk, ek) => {
            bk(ek)
          }), fk)
        }))
      }
      async _loadDelayedFileAsync(kk, ek, ik) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const Dk = `${kk}|${ek?"binary":"string"}`;
        let fk = this._delayedFileRequests.get(Dk);
        if (!fk) {
          fk = ek ? this._loadFileAsync(kk, void 0, ik, !0) : this._loadFileAsync(kk, void 0, ik, !1);
          const Sk = fk;
          (async () => {
            try {
              await Sk
            } catch {}
            this._delayedFileRequests?.delete(Dk)
          })(), this._delayedFileRequests.set(Dk, fk)
        }
        return await fk
      }
      _requestFile(kk, ek, ik, Dk, fk, Sk, bk) {
        const rk = (0, Gk.t)(kk, ek, ik, Dk ? this.offlineProvider : void 0, fk, Sk, bk);
        return this._activeRequests.push(rk), rk.onCompleteObservable.add((kk => {
          this._activeRequests.splice(this._activeRequests.indexOf(kk), 1)
        })), rk
      }
      async _requestFileAsync(kk, ek, ik, Dk, fk) {
        return await new Promise(((Sk, bk) => {
          this._requestFile(kk, (kk => {
            Sk(kk)
          }), ek, ik, Dk, (kk => {
            bk(kk)
          }), fk)
        }))
      }
      _readFile(kk, ek, ik, Dk, fk) {
        const Sk = (0, Gk.q)(kk, ek, ik, Dk, fk);
        return this._activeRequests.push(Sk), Sk.onCompleteObservable.add((kk => {
          this._activeRequests.splice(this._activeRequests.indexOf(kk), 1)
        })), Sk
      }
      async _readFileAsync(kk, ek, ik) {
        return await new Promise(((Dk, fk) => {
          this._readFile(kk, (kk => {
            Dk(kk)
          }), ek, ik, (kk => {
            fk(kk)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, Lk.k)("performanceViewerSceneExtension")
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
    bi.FOGMODE_NONE = 0, bi.FOGMODE_EXP = 1, bi.FOGMODE_EXP2 = 2, bi.FOGMODE_LINEAR = 3, bi.MinDeltaTime = 1, bi.MaxDeltaTime = 1e3, bi._OriginalDefaultMaterialFactory = bi.DefaultMaterialFactory;
    let ri = !1;

    function Pi() {
      ri || (ri = !0, (0, ii.h)("BABYLON.Scene", bi))
    }(ke = bi.prototype).sortActiveAnimatables ?? (ke.sortActiveAnimatables = (0, Lk.i)("Scene", "sortActiveAnimatables")), (ee = bi.prototype).beginWeightedAnimation ?? (ee.beginWeightedAnimation = (0, Lk.i)("Scene", "beginWeightedAnimation")), (ie = bi.prototype).beginAnimation ?? (ie.beginAnimation = (0, Lk.i)("Scene", "beginAnimation")), (De = bi.prototype).beginHierarchyAnimation ?? (De.beginHierarchyAnimation = (0, Lk.i)("Scene", "beginHierarchyAnimation")), (fe = bi.prototype).beginDirectAnimation ?? (fe.beginDirectAnimation = (0, Lk.i)("Scene", "beginDirectAnimation")), (Se = bi.prototype).beginDirectHierarchyAnimation ?? (Se.beginDirectHierarchyAnimation = (0, Lk.i)("Scene", "beginDirectHierarchyAnimation")), (be = bi.prototype).getAnimatableByTarget ?? (be.getAnimatableByTarget = (0, Lk.i)("Scene", "getAnimatableByTarget")), (re = bi.prototype).getAllAnimatablesByTarget ?? (re.getAllAnimatablesByTarget = (0, Lk.i)("Scene", "getAllAnimatablesByTarget")), (Pe = bi.prototype).stopAllAnimations ?? (Pe.stopAllAnimations = (0, Lk.i)("Scene", "stopAllAnimations")), (me = bi.prototype).getSoundByName ?? (me.getSoundByName = (0, Lk.i)("Scene", "getSoundByName")), (Me = bi.prototype).createOrUpdateSelectionOctree ?? (Me.createOrUpdateSelectionOctree = (0, Lk.i)("Scene", "createOrUpdateSelectionOctree")), (Ke = bi.prototype).createDefaultLight ?? (Ke.createDefaultLight = (0, Lk.i)("Scene", "createDefaultLight")), (xe = bi.prototype).createDefaultCamera ?? (xe.createDefaultCamera = (0, Lk.i)("Scene", "createDefaultCamera")), (ne = bi.prototype).createDefaultCameraOrLight ?? (ne.createDefaultCameraOrLight = (0, Lk.i)("Scene", "createDefaultCameraOrLight")), (Ue = bi.prototype).createDefaultSkybox ?? (Ue.createDefaultSkybox = (0, Lk.i)("Scene", "createDefaultSkybox")), (He = bi.prototype).createDefaultEnvironment ?? (He.createDefaultEnvironment = (0, Lk.i)("Scene", "createDefaultEnvironment")), (we = bi.prototype).createDefaultVRExperience ?? (we.createDefaultVRExperience = (0, Lk.i)("Scene", "createDefaultVRExperience")), (le = bi.prototype).createDefaultXRExperienceAsync ?? (le.createDefaultXRExperienceAsync = (0, Lk.i)("Scene", "createDefaultXRExperienceAsync")), (pe = bi.prototype).getGlowLayerByName ?? (pe.getGlowLayerByName = (0, Lk.i)("Scene", "getGlowLayerByName")), (ye = bi.prototype).getHighlightLayerByName ?? (ye.getHighlightLayerByName = (0, Lk.i)("Scene", "getHighlightLayerByName")), (Ye = bi.prototype).getSelectionOutlineLayerByName ?? (Ye.getSelectionOutlineLayerByName = (0, Lk.i)("Scene", "getSelectionOutlineLayerByName")), (Le = bi.prototype).removeLensFlareSystem ?? (Le.removeLensFlareSystem = (0, Lk.i)("Scene", "removeLensFlareSystem")), (Ce = bi.prototype).addLensFlareSystem ?? (Ce.addLensFlareSystem = (0, Lk.i)("Scene", "addLensFlareSystem")), (Ae = bi.prototype).getLensFlareSystemByName ?? (Ae.getLensFlareSystemByName = (0, Lk.i)("Scene", "getLensFlareSystemByName")), (je = bi.prototype).getLensFlareSystemByID ?? (je.getLensFlareSystemByID = (0, Lk.i)("Scene", "getLensFlareSystemByID")), (se = bi.prototype).getLensFlareSystemById ?? (se.getLensFlareSystemById = (0, Lk.i)("Scene", "getLensFlareSystemById")), (de = bi.prototype).getPhysicsEngine ?? (de.getPhysicsEngine = (0, Lk.i)("Scene", "getPhysicsEngine")), (Ve = bi.prototype).enablePhysics ?? (Ve.enablePhysics = (0, Lk.i)("Scene", "enablePhysics")), (Fe = bi.prototype).disablePhysicsEngine ?? (Fe.disablePhysicsEngine = (0, Lk.i)("Scene", "disablePhysicsEngine")), (ue = bi.prototype).isPhysicsEnabled ?? (ue.isPhysicsEnabled = (0, Lk.i)("Scene", "isPhysicsEnabled")), (qe = bi.prototype).deleteCompoundImpostor ?? (qe.deleteCompoundImpostor = (0, Lk.i)("Scene", "deleteCompoundImpostor")), (Ie = bi.prototype).removeReflectionProbe ?? (Ie.removeReflectionProbe = (0, Lk.i)("Scene", "removeReflectionProbe")), (ze = bi.prototype).addReflectionProbe ?? (ze.addReflectionProbe = (0, Lk.i)("Scene", "addReflectionProbe")), (Qe = bi.prototype).getBoundingBoxRenderer ?? (Qe.getBoundingBoxRenderer = (0, Lk.i)("Scene", "getBoundingBoxRenderer")), (ve = bi.prototype).enableDepthRenderer ?? (ve.enableDepthRenderer = (0, Lk.i)("Scene", "enableDepthRenderer")), (Ee = bi.prototype).disableDepthRenderer ?? (Ee.disableDepthRenderer = (0, Lk.i)("Scene", "disableDepthRenderer")), (he = bi.prototype).enableFluidRenderer ?? (he.enableFluidRenderer = (0, Lk.i)("Scene", "enableFluidRenderer")), (ae = bi.prototype).disableFluidRenderer ?? (ae.disableFluidRenderer = (0, Lk.i)("Scene", "disableFluidRenderer")), (We = bi.prototype).enableGeometryBufferRenderer ?? (We.enableGeometryBufferRenderer = (0, Lk.i)("Scene", "enableGeometryBufferRenderer")), (te = bi.prototype).disableGeometryBufferRenderer ?? (te.disableGeometryBufferRenderer = (0, Lk.i)("Scene", "disableGeometryBufferRenderer")), (Xe = bi.prototype).enableIblCdfGenerator ?? (Xe.enableIblCdfGenerator = (0, Lk.i)("Scene", "enableIblCdfGenerator")), (Be = bi.prototype).disableIblCdfGenerator ?? (Be.disableIblCdfGenerator = (0, Lk.i)("Scene", "disableIblCdfGenerator")), (ce = bi.prototype).getOutlineRenderer ?? (ce.getOutlineRenderer = (0, Lk.i)("Scene", "getOutlineRenderer")), (Te = bi.prototype).enablePrePassRenderer ?? (Te.enablePrePassRenderer = (0, Lk.i)("Scene", "enablePrePassRenderer")), (oe = bi.prototype).disablePrePassRenderer ?? (oe.disablePrePassRenderer = (0, Lk.i)("Scene", "disablePrePassRenderer")), (Ze = bi.prototype).enableSubSurfaceForPrePass ?? (Ze.enableSubSurfaceForPrePass = (0, Lk.i)("Scene", "enableSubSurfaceForPrePass")), (Oe = bi.prototype).disableSubSurfaceForPrePass ?? (Oe.disableSubSurfaceForPrePass = (0, Lk.i)("Scene", "disableSubSurfaceForPrePass")), (ge = bi.prototype).pickSprite ?? (ge.pickSprite = (0, Lk.i)("Scene", "pickSprite")), (Ge = bi.prototype).pickSpriteWithRay ?? (Ge.pickSpriteWithRay = (0, Lk.i)("Scene", "pickSpriteWithRay")), (Ne = bi.prototype).multiPickSprite ?? (Ne.multiPickSprite = (0, Lk.i)("Scene", "multiPickSprite")), (Re = bi.prototype).multiPickSpriteWithRay ?? (Re.multiPickSpriteWithRay = (0, Lk.i)("Scene", "multiPickSpriteWithRay")), (Je = bi.prototype).setPointerOverSprite ?? (Je.setPointerOverSprite = (0, Lk.i)("Scene", "setPointerOverSprite")), (ki = bi.prototype).getPointerOverSprite ?? (ki.getPointerOverSprite = (0, Lk.i)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(bi.prototype, "mainSoundTrack") || Object.defineProperty(bi.prototype, "mainSoundTrack", (0, Lk.h)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(bi.prototype, "soundTracks") || Object.defineProperty(bi.prototype, "soundTracks", (0, Lk.h)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(bi.prototype, "audioEnabled") || Object.defineProperty(bi.prototype, "audioEnabled", (0, Lk.h)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(bi.prototype, "headphone") || Object.defineProperty(bi.prototype, "headphone", (0, Lk.h)("Scene", "headphone")), Object.getOwnPropertyDescriptor(bi.prototype, "audioListenerPositionProvider") || Object.defineProperty(bi.prototype, "audioListenerPositionProvider", (0, Lk.h)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(bi.prototype, "audioListenerRotationProvider") || Object.defineProperty(bi.prototype, "audioListenerRotationProvider", (0, Lk.h)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(bi.prototype, "audioPositioningRefreshRate") || Object.defineProperty(bi.prototype, "audioPositioningRefreshRate", (0, Lk.h)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(bi.prototype, "selectionOctree") || Object.defineProperty(bi.prototype, "selectionOctree", (0, Lk.h)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(bi.prototype, "debugLayer") || Object.defineProperty(bi.prototype, "debugLayer", (0, Lk.h)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(bi.prototype, "gamepadManager") || Object.defineProperty(bi.prototype, "gamepadManager", (0, Lk.h)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(bi.prototype, "simplificationQueue") || Object.defineProperty(bi.prototype, "simplificationQueue", (0, Lk.h)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(bi.prototype, "onBeforePhysicsObservable") || Object.defineProperty(bi.prototype, "onBeforePhysicsObservable", (0, Lk.h)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(bi.prototype, "onAfterPhysicsObservable") || Object.defineProperty(bi.prototype, "onAfterPhysicsObservable", (0, Lk.h)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(bi.prototype, "reflectionProbes") || Object.defineProperty(bi.prototype, "reflectionProbes", (0, Lk.h)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(bi.prototype, "forceShowBoundingBoxes") || Object.defineProperty(bi.prototype, "forceShowBoundingBoxes", (0, Lk.h)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(bi.prototype, "depthPeelingRenderer") || Object.defineProperty(bi.prototype, "depthPeelingRenderer", (0, Lk.h)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(bi.prototype, "useOrderIndependentTransparency") || Object.defineProperty(bi.prototype, "useOrderIndependentTransparency", (0, Lk.h)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(bi.prototype, "fluidRenderer") || Object.defineProperty(bi.prototype, "fluidRenderer", (0, Lk.h)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(bi.prototype, "geometryBufferRenderer") || Object.defineProperty(bi.prototype, "geometryBufferRenderer", (0, Lk.h)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(bi.prototype, "iblCdfGenerator") || Object.defineProperty(bi.prototype, "iblCdfGenerator", (0, Lk.h)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(bi.prototype, "prePassRenderer") || Object.defineProperty(bi.prototype, "prePassRenderer", (0, Lk.h)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(bi.prototype, "subSurfaceConfiguration") || Object.defineProperty(bi.prototype, "subSurfaceConfiguration", (0, Lk.h)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(bi.prototype, "spriteManagers") || Object.defineProperty(bi.prototype, "spriteManagers", (0, Lk.h)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(bi.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(bi.prototype, "onBeforeSpritesRenderingObservable", (0, Lk.h)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(bi.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(bi.prototype, "onAfterSpritesRenderingObservable", (0, Lk.h)("Scene", "onAfterSpritesRenderingObservable"))
  },
  39736: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk,
      c: () => fk
    });
    class Dk {}
    Dk.NAME_EFFECTLAYER = "EffectLayer", Dk.NAME_LAYER = "Layer", Dk.NAME_LENSFLARESYSTEM = "LensFlareSystem", Dk.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", Dk.NAME_PARTICLESYSTEM = "ParticleSystem", Dk.NAME_GAMEPAD = "Gamepad", Dk.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", Dk.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", Dk.NAME_PREPASSRENDERER = "PrePassRenderer", Dk.NAME_DEPTHRENDERER = "DepthRenderer", Dk.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", Dk.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", Dk.NAME_SPRITE = "Sprite", Dk.NAME_SUBSURFACE = "SubSurface", Dk.NAME_OUTLINERENDERER = "Outline", Dk.NAME_PROCEDURALTEXTURE = "ProceduralTexture", Dk.NAME_SHADOWGENERATOR = "ShadowGenerator", Dk.NAME_OCTREE = "iDk", Dk.NAME_PHYSICSENGINE = "PhysicsEngine", Dk.NAME_AUDIO = "Audio", Dk.NAME_FLUIDRENDERER = "FluidRenderer", Dk.NAME_IBLCDFGENERATOR = "iblCDFGenerator", Dk.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", Dk.STEP_ISREADYFORMESH_EFFECTLAYER = 0, Dk.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, Dk.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, Dk.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, Dk.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, Dk.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, Dk.STEP_BEFORECAMERADRAW_PREPASS = 0, Dk.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, Dk.STEP_BEFORECAMERADRAW_LAYER = 2, Dk.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, Dk.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, Dk.STEP_BEFORERENDERINGMESH_PREPASS = 0, Dk.STEP_BEFORERENDERINGMESH_OUTLINE = 1, Dk.STEP_AFTERRENDERINGMESH_PREPASS = 0, Dk.STEP_AFTERRENDERINGMESH_OUTLINE = 1, Dk.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, Dk.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, Dk.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, Dk.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, Dk.STEP_BEFORECLEAR_PREPASS = 1, Dk.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, Dk.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, Dk.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, Dk.STEP_AFTERCAMERADRAW_PREPASS = 0, Dk.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, Dk.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, Dk.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, Dk.STEP_AFTERCAMERADRAW_LAYER = 4, Dk.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, Dk.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, Dk.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, Dk.STEP_AFTERRENDER_AUDIO = 0, Dk.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, Dk.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, Dk.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, Dk.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, Dk.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, Dk.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, Dk.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, Dk.STEP_POINTERMOVE_SPRITE = 0, Dk.STEP_POINTERDOWN_SPRITE = 0, Dk.STEP_POINTERUP_SPRITE = 0;
    class fk extends Array {
      constructor(kk) {
        super(...kk)
      }
      static Create() {
        return Object.create(fk.prototype)
      }
      registerStep(kk, ek, ik) {
        let Dk, fk = 0;
        for (; fk < this.length; fk++) {
          if (Dk = this[fk].index, kk < Dk) break
        }
        this.splice(fk, 0, {
          index: kk,
          component: ek,
          action: ik.bind(ek)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  39566: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk,
      c: () => rk,
      d: () => Dk,
      e: () => fk,
      h: () => Sk
    });

    function Dk(kk, ek, ik, Dk, fk, Sk) {
      function bk(kk) {
        if (void 0 !== kk && "function" !== typeof kk) throw new TypeError("Function expected");
        return kk
      }
      for (var rk, Pk = Dk.kind, mk = "getter" === Pk ? "get" : "setter" === Pk ? "set" : "value", Mk = !ek && kk ? Dk.static ? kk : kk.prototype : null, Kk = ek || (Mk ? Object.getOwnPropertyDescriptor(Mk, Dk.name) : {}), xk = !1, nk = ik.length - 1; nk >= 0; nk--) {
        var Uk = {};
        for (var Hk in Dk) Uk[Hk] = "access" === Hk ? {} : Dk[Hk];
        for (var Hk in Dk.access) Uk.access[Hk] = Dk.access[Hk];
        Uk.addInitializer = function(kk) {
          if (xk) throw new TypeError("Cannot add initializers after decoration has completed");
          Sk.push(bk(kk || null))
        };
        var wk = (0, ik[nk])("accessor" === Pk ? {
          get: Kk.get,
          set: Kk.set
        } : Kk[mk], Uk);
        if ("accessor" === Pk) {
          if (void 0 === wk) continue;
          if (null === wk || "object" !== typeof wk) throw new TypeError("Object expected");
          (rk = bk(wk.get)) && (Kk.get = rk), (rk = bk(wk.set)) && (Kk.set = rk), (rk = bk(wk.init)) && fk.unshift(rk)
        } else(rk = bk(wk)) && ("field" === Pk ? fk.unshift(rk) : Kk[mk] = rk)
      }
      Mk && Object.defineProperty(Mk, Dk.name, Kk), xk = !0
    }

    function fk(kk, ek, ik) {
      for (var Dk = arguments.length > 2, fk = 0; fk < ek.length; fk++) ik = Dk ? ek[fk].call(kk, ik) : ek[fk].call(kk);
      return Dk ? ik : void 0
    }

    function Sk(kk, ek, ik) {
      return "symbol" === typeof ek && (ek = ek.description ? "[".concat(ek.description, "]") : ""), Object.defineProperty(kk, "name", {
        configurable: !0,
        value: ik ? "".concat(ik, " ", ek) : ek
      })
    }
    Object.create;
    Object.create;

    function bk(kk, ek, ik, Dk) {
      if ("a" === ik && !Dk) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof ek ? kk !== ek || !Dk : !ek.has(kk)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === ik ? Dk : "a" === ik ? Dk.call(kk) : Dk ? Dk.value : ek.get(kk)
    }

    function rk(kk, ek, ik, Dk, fk) {
      if ("m" === Dk) throw new TypeError("Private method is not writable");
      if ("a" === Dk && !fk) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof ek ? kk !== ek || !fk : !ek.has(kk)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Dk ? fk.call(kk, ik) : fk ? fk.value = ik : ek.set(kk, ik), ik
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);