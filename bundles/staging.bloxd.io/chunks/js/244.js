export const id = 244;
export const ids = [244];
export const modules = {
  39782: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => yT,
      h: () => tT,
      k: () => xT,
      l: () => fT
    });
    var lT = cT(39547),
      MT = cT(38512),
      KT = cT(39689),
      OT = cT(39592);
    class yT {
      get VkT() {
        return this._isDisposed
      }
      constructor(TT, kT, cT) {
        let MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          KT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          yT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          fT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          xT = arguments.length > 7 ? arguments[7] : void 0,
          IT = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, OT.b)(), TT && TT.NJ ? this._engine = TT.NJ().Dv() : this._engine = TT, this._updatable = cT, this._instanced = yT, this._divisor = xT || 1, this._label = IT, kT instanceof lT.c ? (this._data = null, this._buffer = kT) : (this._data = kT, this._buffer = null), this.byteStride = fT ? MT : MT * Float32Array.BYTES_PER_ELEMENT, KT || this.create()
      }
      createVertexBuffer(TT, kT, cT, lT, MT) {
        let KT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          OT = arguments.length > 6 ? arguments[6] : void 0;
        const yT = KT ? kT : kT * Float32Array.BYTES_PER_ELEMENT,
          xT = lT ? KT ? lT : lT * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new fT(this._engine, this, TT, this._updatable, !0, xT, void 0 === MT ? this._instanced : MT, yT, cT, void 0, void 0, !0, this._divisor || OT)
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
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !TT && this._buffer || (TT = TT || this._data, TT && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, TT), this._data = TT) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(TT, this._label), this._data = TT) : this._buffer = this._engine.createVertexBuffer(TT, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.DA > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.DA, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.DA, void 0, this._label));
          MT.e.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(TT) {
        this.create(TT)
      }
      updateDirectly(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, TT, lT ? kT : kT * Float32Array.BYTES_PER_ELEMENT, cT ? cT * this.byteStride : void 0), this._data = 0 === kT && void 0 === cT ? TT : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class fT {
      get VkT() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(TT) {
        const kT = 0 != TT;
        this._instanceDivisor = TT, kT !== this._instanced && (this._instanced = kT, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const TT = this.getData();
        return TT ? Array.isArray(TT) ? TT.length / (this.byteStride / 4) - this.byteOffset / 4 : (TT.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(TT, kT, cT, lT, MT, OT, AT, CT, jT, vT) {
        let tT, hT = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          NT = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          QT = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          ST = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = TT, "object" === typeof lT && null !== lT ? (tT = lT.updatable ?? !1, MT = lT.postponeInternalCreation, OT = lT.stride, AT = lT.instanced, CT = lT.offset, jT = lT.size, vT = lT.type, hT = lT.normalized ?? !1, NT = lT.useBytes ?? !1, QT = lT.divisor ?? 1, ST = lT.takeBufferOwnership ?? !1, this._label = lT.label) : tT = !!lT, kT instanceof yT ? (this._buffer = kT, this._ownsBuffer = ST) : (this._buffer = new yT(TT, kT, tT, OT, MT, AT, NT, QT, this._label), this._ownsBuffer = !0), this.uniqueId = fT._Counter++, this._kind = cT, void 0 === vT) {
          const TT = this.getData();
          this.type = TT ? IT(TT) : fT.FLOAT
        } else this.type = vT;
        const DT = (0, KT.j)(this.type);
        NT ? (this._size = jT || (OT ? OT / DT : xT(cT)), this.byteStride = OT || this._buffer.byteStride || this._size * DT, this.byteOffset = CT || 0) : (this._size = jT || OT || xT(cT), this.byteStride = OT ? OT * DT : this._buffer.byteStride || this._size * DT, this.byteOffset = (CT || 0) * DT), this.normalized = hT, this._instanced = void 0 !== AT && AT, this._instanceDivisor = AT ? QT : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(TT) {
        switch (TT) {
          case fT.BYTE:
            return 0;
          case fT.UNSIGNED_BYTE:
            return 1;
          case fT.SHORT:
            return 2;
          case fT.UNSIGNED_SHORT:
            return 3;
          case fT.INT:
            return 4;
          case fT.UNSIGNED_INT:
            return 5;
          case fT.FLOAT:
            return 6;
          case fT.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${TT}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (fT._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(TT, kT) {
        const cT = this.getData();
        return cT ? (0, KT.i)(cT, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, TT, kT) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, KT.j)(this.type)
      }
      FkT() {
        return this.byteOffset / (0, KT.j)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, KT.j)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(TT) {
        this._buffer.create(TT), this._alignBuffer()
      }
      update(TT) {
        this._buffer.update(TT), this._alignBuffer()
      }
      updateDirectly(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(TT, kT, void 0, cT), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(TT, kT) {
        (0, KT.g)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, TT, this.normalized, ((TT, cT) => {
          for (let lT = 0; lT < this._size; lT++) kT(TT[lT], cT + lT)
        }))
      }
      _alignBuffer() {}
    }

    function xT(TT) {
      switch (TT) {
        case fT.UVKind:
        case fT.UV2Kind:
        case fT.UV3Kind:
        case fT.UV4Kind:
        case fT.UV5Kind:
        case fT.UV6Kind:
          return 2;
        case fT.NormalKind:
        case fT.PositionKind:
          return 3;
        case fT.ColorKind:
        case fT.ColorInstanceKind:
        case fT.MatricesIndicesKind:
        case fT.MatricesIndicesExtraKind:
        case fT.MatricesWeightsKind:
        case fT.MatricesWeightsExtraKind:
        case fT.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + TT + "'")
      }
    }

    function IT(TT) {
      return TT instanceof Int8Array ? fT.BYTE : TT instanceof Uint8Array ? fT.UNSIGNED_BYTE : TT instanceof Int16Array ? fT.SHORT : TT instanceof Uint16Array ? fT.UNSIGNED_SHORT : TT instanceof Int32Array ? fT.INT : TT instanceof Uint32Array ? fT.UNSIGNED_INT : fT.FLOAT
    }

    function AT(TT) {
      return (0, KT.j)(TT)
    }

    function CT(TT, kT, cT, lT, MT, OT, yT, fT) {
      (0, KT.g)(TT, kT, cT, lT, MT, OT, yT, ((TT, kT) => {
        for (let cT = 0; cT < lT; cT++) fT(TT[cT], kT + cT)
      }))
    }

    function jT(TT, kT, cT, lT, MT, OT, yT, fT) {
      return (0, KT.i)(TT, kT, cT, lT, MT, OT, yT, fT)
    }
    fT._Counter = 0, fT.BYTE = 5120, fT.UNSIGNED_BYTE = 5121, fT.SHORT = 5122, fT.UNSIGNED_SHORT = 5123, fT.INT = 5124, fT.UNSIGNED_INT = 5125, fT.FLOAT = 5126, fT.HALF_FLOAT = 5131, fT.PositionKind = "position", fT.NormalKind = "normal", fT.TangentKind = "tangent", fT.UVKind = "uv", fT.UV2Kind = "uv2", fT.UV3Kind = "uv3", fT.UV4Kind = "uv4", fT.UV5Kind = "uv5", fT.UV6Kind = "uv6", fT.ColorKind = "color", fT.ColorInstanceKind = "instanceColor", fT.MatricesIndicesKind = "matricesIndices", fT.MatricesWeightsKind = "matricesWeights", fT.MatricesIndicesExtraKind = "matricesIndicesExtra", fT.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let vT = !1;

    function tT() {
      vT || (vT = !0, fT.DeduceStride = xT, fT.GetDataType = IT, fT.GetTypeByteLength = AT, fT.ForEach = CT, fT.GetFloatData = jT)
    }
  },
  39547: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT
    });
    class lT {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.DA = 0, this.is32Bits = !1, this.uniqueId = lT._Counter++
      }
    }
    lT._Counter = 0
  },
  39775: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT
    });
    var lT = cT(36892),
      MT = cT(39782);
    class KT {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || kT && !this.pickedMesh.isVerticesDataPresent(MT.l.NormalKind)) return null;
        let cT, KT = this.pickedMesh.FcT();
        0 === KT?.length && (KT = null);
        const OT = lT.h.Fv[0],
          yT = lT.h.Fv[1],
          fT = lT.h.Fv[2];
        if (kT) {
          const TT = this.pickedMesh.getVerticesData(MT.l.NormalKind);
          let kT = KT ? lT.m.FromArrayToRef(TT, 3 * KT[3 * this.faceId], OT) : OT.I5(TT[3 * this.faceId * 3], TT[3 * this.faceId * 3 + 1], TT[3 * this.faceId * 3 + 2]),
            xT = KT ? lT.m.FromArrayToRef(TT, 3 * KT[3 * this.faceId + 1], yT) : yT.I5(TT[3 * (3 * this.faceId + 1)], TT[3 * (3 * this.faceId + 1) + 1], TT[3 * (3 * this.faceId + 1) + 2]),
            IT = KT ? lT.m.FromArrayToRef(TT, 3 * KT[3 * this.faceId + 2], fT) : fT.I5(TT[3 * (3 * this.faceId + 2)], TT[3 * (3 * this.faceId + 2) + 1], TT[3 * (3 * this.faceId + 2) + 2]);
          kT = kT.scale(this.bu), xT = xT.scale(this.bv), IT = IT.scale(1 - this.bu - this.bv), cT = new lT.m(kT.x + xT.x + IT.x, kT.y + xT.y + IT.y, kT.z + xT.z + IT.z)
        } else {
          const TT = this.pickedMesh.getVerticesData(MT.l.PositionKind),
            kT = KT ? lT.m.FromArrayToRef(TT, 3 * KT[3 * this.faceId], OT) : OT.I5(TT[3 * this.faceId * 3], TT[3 * this.faceId * 3 + 1], TT[3 * this.faceId * 3 + 2]),
            xT = KT ? lT.m.FromArrayToRef(TT, 3 * KT[3 * this.faceId + 1], yT) : yT.I5(TT[3 * (3 * this.faceId + 1)], TT[3 * (3 * this.faceId + 1) + 1], TT[3 * (3 * this.faceId + 1) + 2]),
            IT = KT ? lT.m.FromArrayToRef(TT, 3 * KT[3 * this.faceId + 2], fT) : fT.I5(TT[3 * (3 * this.faceId + 2)], TT[3 * (3 * this.faceId + 2) + 1], TT[3 * (3 * this.faceId + 2) + 2]),
            AT = kT.subtract(xT),
            CT = IT.subtract(xT);
          cT = lT.m.Cross(AT, CT)
        }
        const xT = (TT, kT) => {
          if (-1 !== this.thinInstanceIndex) {
            const cT = TT._thinInstanceDataStorage.matrixData,
              MT = this.thinInstanceIndex << 4;
            if (cT && cT.length > MT) {
              const TT = lT.h.Matrix[0];
              lT.d.FromArrayToRef(cT, MT, TT), lT.m.TransformNormalToRef(kT, TT, kT)
            }
          }
          let cT = TT.getWorldMatrix();
          TT.nonUniformScaling && (lT.h.Matrix[0].UkT(cT), cT = lT.h.Matrix[0], cT.setTranslationFromFloats(0, 0, 0), cT.invert(), cT.transposeToRef(lT.h.Matrix[1]), cT = lT.h.Matrix[1]), lT.m.TransformNormalToRef(kT, cT, kT)
        };
        if (TT && xT(this.pickedMesh, cT), this.ray) {
          const kT = lT.h.Fv[0].UkT(cT);
          TT || xT(this.pickedMesh, kT), lT.m.Dot(kT, this.ray.direction) > 0 && cT.negateInPlace()
        }
        return cT.normalize(), cT
      }
      getTextureCoordinates() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : MT.l.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(TT)) return null;
        const kT = this.pickedMesh.FcT();
        if (!kT) return null;
        const cT = this.pickedMesh.getVerticesData(TT);
        if (!cT) return null;
        let KT = lT.i.FromArray(cT, 2 * kT[3 * this.faceId]),
          OT = lT.i.FromArray(cT, 2 * kT[3 * this.faceId + 1]),
          yT = lT.i.FromArray(cT, 2 * kT[3 * this.faceId + 2]);
        return KT = KT.scale(this.bu), OT = OT.scale(this.bv), yT = yT.scale(1 - this.bu - this.bv), new lT.i(KT.x + OT.x + yT.x, KT.y + OT.y + yT.y)
      }
    }
  },
  39592: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT
    });
    var lT = cT(39463);
    let MT = !1;

    function KT() {
      MT || (MT = !0, lT.ThinEngine.prototype.updateDynamicIndexBuffer = function(TT, kT) {
        let cT;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(TT), cT = TT.is32Bits ? kT instanceof Uint32Array ? kT : new Uint32Array(kT) : kT instanceof Uint16Array ? kT : new Uint16Array(kT), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, cT, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, lT.ThinEngine.prototype.updateDynamicVertexBuffer = function(TT, kT, cT, lT) {
        this.bindArrayBuffer(TT), void 0 === cT && (cT = 0);
        const MT = kT.byteLength || kT.length;
        void 0 === lT || lT >= MT && 0 === cT ? kT instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, cT, new Float32Array(kT)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, cT, kT) : kT instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, cT, new Float32Array(kT).subarray(0, lT / 4)) : (kT = ArrayBuffer.isView(kT) ? new Uint8Array(kT.buffer, kT.byteOffset, lT) : new Uint8Array(kT, 0, lT), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, cT, kT)), this._resetVertexBufferBinding()
      })
    }
  },
  39557: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT
    });
    class lT {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          kT = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = kT, !TT && (TT = kT.createTexture(), !TT)) throw new Error("Unable to create webGL texture");
        this.set(TT)
      }
      setUsage() {}
      set(TT) {
        this._webGLTexture = TT
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(TT) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(TT)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const TT of this._MSAARenderBuffers) this._context.deleteRenderbuffer(TT);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[TT] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  39516: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => QT
    });
    var lT = cT(36932),
      MT = cT(39467),
      KT = cT(36925),
      OT = cT(38512),
      yT = cT(36918),
      fT = cT(39521);
    class xT {
      constructor() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, TT && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(TT) {
        this._zOffset !== TT && (this._zOffset = TT, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(TT) {
        this._zOffsetUnits !== TT && (this._zOffsetUnits = TT, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(TT) {
        this._cullFace !== TT && (this._cullFace = TT, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(TT) {
        this._cull !== TT && (this._cull = TT, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(TT) {
        this._depthFunc !== TT && (this._depthFunc = TT, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(TT) {
        this._depthMask !== TT && (this._depthMask = TT, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(TT) {
        this._depthTest !== TT && (this._depthTest = TT, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(TT) {
        this._frontFace !== TT && (this._frontFace = TT, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(TT) {
        this.isDirty && (this._isCullDirty && (this.cull ? TT.enable(TT.CULL_FACE) : TT.disable(TT.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (TT.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (TT.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? TT.enable(TT.DEPTH_TEST) : TT.disable(TT.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (TT.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (TT.enable(TT.POLYGON_OFFSET_FILL), TT.polygonOffset(this.zOffset, this.zOffsetUnits)) : TT.disable(TT.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (TT.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class IT {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(TT) {
        this._func !== TT && (this._func = TT, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(TT) {
        this._backFunc !== TT && (this._backFunc = TT, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(TT) {
        this._funcRef !== TT && (this._funcRef = TT, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(TT) {
        this._funcMask !== TT && (this._funcMask = TT, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(TT) {
        this._opStencilFail !== TT && (this._opStencilFail = TT, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(TT) {
        this._opDepthFail !== TT && (this._opDepthFail = TT, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(TT) {
        this._opStencilDepthPass !== TT && (this._opStencilDepthPass = TT, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(TT) {
        this._backOpStencilFail !== TT && (this._backOpStencilFail = TT, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(TT) {
        this._backOpDepthFail !== TT && (this._backOpDepthFail = TT, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(TT) {
        this._backOpStencilDepthPass !== TT && (this._backOpStencilDepthPass = TT, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(TT) {
        this._mask !== TT && (this._mask = TT, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(TT) {
        this._enabled !== TT && (this._enabled = TT, this._isStencilTestDirty = !0)
      }
      constructor() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, TT && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(TT) {
        if (!TT) return;
        const kT = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = kT ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = kT ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = kT ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = kT ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = kT ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = kT ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = kT ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = kT ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = kT ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = kT ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = kT ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = kT ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? TT.enable(TT.STENCIL_TEST) : TT.disable(TT.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (TT.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (TT.stencilFuncSeparate(TT.FRONT, this.func, this.funcRef, this.funcMask), TT.stencilFuncSeparate(TT.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (TT.stencilOpSeparate(TT.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), TT.stencilOpSeparate(TT.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class AT {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = AT.ALWAYS, this.opStencilFail = AT.KEEP, this.opDepthFail = AT.KEEP, this.opStencilDepthPass = AT.REPLACE, this.backFunc = AT.ALWAYS, this.backOpStencilFail = AT.KEEP, this.backOpDepthFail = AT.KEEP, this.backOpStencilDepthPass = AT.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(TT) {
        this.func = TT
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(TT) {
        this.backFunc = TT
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(TT) {
        this.funcRef = TT
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(TT) {
        this.funcMask = TT
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(TT) {
        this.opStencilFail = TT
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(TT) {
        this.opDepthFail = TT
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(TT) {
        this.opStencilDepthPass = TT
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(TT) {
        this.backOpStencilFail = TT
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(TT) {
        this.backOpDepthFail = TT
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(TT) {
        this.backOpStencilDepthPass = TT
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(TT) {
        this.mask = TT
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(TT) {
        this.enabled = TT
      }
    }
    AT.ALWAYS = 519, AT.KEEP = 7680, AT.REPLACE = 7681;
    var CT = cT(39524),
      jT = cT(39500),
      vT = cT(39454),
      tT = cT(39482),
      hT = cT(39496);

    function NT(TT, kT) {
      if (kT) {
        const {
          requestAnimationFrame: cT
        } = kT;
        if ("function" === typeof cT) return cT(TT)
      }
      if ((0, tT.i)()) {
        const {
          requestAnimationFrame: cT
        } = kT || window;
        if ("function" === typeof cT) return cT(TT)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(TT);
      return setTimeout(TT, 16)
    }
    class QT {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(TT) {
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
      get QcT() {
        return this._useReverseDepthBuffer
      }
      set QcT(TT) {
        TT !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = TT, this._depthCullingState.depthFunc = TT ? 518 : 515)
      }
      setColorWrite(TT) {
        TT !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = TT)
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
      _getGlobalDefines(TT) {
        if (TT) return this.isNDCHalfZRange ? TT.IS_NDC_HALF_ZRANGE = "" : delete TT.IS_NDC_HALF_ZRANGE, this.QcT ? TT.USE_REVERSE_DEPTHBUFFER = "" : delete TT.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? TT.USE_EXACT_SRGB_CONVERSIONS = "" : delete TT.USE_EXACT_SRGB_CONVERSIONS);
        {
          let TT = "";
          return this.isNDCHalfZRange && (TT += "#define IS_NDC_HALF_ZRANGE"), this.QcT && (TT && (TT += "\n"), TT += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (TT && (TT += "\n"), TT += "#define USE_EXACT_SRGB_CONVERSIONS"), TT
        }
      }
      _rebuildInternalTextures() {
        const TT = this._internalTexturesCache.slice();
        for (const kT of TT) kT._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const TT = this._renderTargetWrapperCache.slice();
        for (const kT of TT) kT.textures?.some((TT => 15 === TT.source)) || kT._rebuild()
      }
      _rebuildEffects() {
        for (const TT in this._compiledEffects) {
          const kT = this._compiledEffects[TT];
          kT._pipelineContext = null, kT._prepareEffect()
        }
        MT.e.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        OT.e.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(TT) {
        setTimeout((() => {
          this._clearEmptyResources();
          const kT = this._depthCullingState.depthTest,
            cT = this._depthCullingState.depthFunc,
            lT = this._depthCullingState.depthMask,
            MT = this._stencilState.stencilTest;
          TT(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = kT, this._depthCullingState.depthFunc = cT, this._depthCullingState.depthMask = lT, this._stencilState.stencilTest = MT, this._flagContextRestored()
        }), 0)
      }
      get VkT() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(TT) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(TT) {}
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
          const TT = new Uint8Array(4),
            kT = [TT, TT, TT, TT, TT, TT];
          this._emptyCubeTexture = this.createRawCubeTexture(kT, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(TT) {
        this._framebufferDimensionsObject = TT
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(TT) {
        if (!TT) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const kT = this._activeRenderLoops.indexOf(TT);
        kT >= 0 && (this._activeRenderLoops.splice(kT, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: TT
            } = this.customAnimationFrameRequester;
            TT && TT(this.customAnimationFrameRequester.rv), delete this.customAnimationFrameRequester.rv
          }
        } else if (0 !== this._frameHandler) {
          const TT = this._frameHandler;
          if (this._frameHandler = 0, (0, tT.i)()) {
            const {
              cancelAnimationFrame: kT
            } = this.getHostWindow() || window;
            if ("function" === typeof kT) return kT(TT)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(TT);
          return clearTimeout(TT)
        }
      }
      iN() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      qN() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(TT) {
        this._maxFPS = TT, void 0 !== TT && (this._minFrameTime = TT <= 0 ? Number.MAX_VALUE : 1e3 / TT)
      }
      _isOverFrameTime(TT) {
        if (!TT || void 0 === this._maxFPS) return !1;
        const kT = TT - this._lastFrameTime;
        return this._lastFrameTime = TT, this._renderAccumulator += kT, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(TT) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(TT)) {
          let TT = !0;
          (this.VkT || !this.renderEvenInBackground && this._windowIsBackground) && (TT = !1), TT && (this.iN(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.qN())
        }
      }
      _renderLoop(TT) {
        this._processFrame(TT), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let TT = 0; TT < this._activeRenderLoops.length; TT++) {
          (0, this._activeRenderLoops[TT])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(TT, kT) {
        return NT(TT, kT)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.rv = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.rv) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(TT) {
        -1 === this._activeRenderLoops.indexOf(TT) && (this._activeRenderLoops.push(TT), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(TT) {
        this._depthCullingState.depthTest = TT
      }
      setZOffset(TT) {
        this._depthCullingState.zOffset = this.QcT ? -TT : TT
      }
      getZOffset() {
        const TT = this._depthCullingState.zOffset;
        return this.QcT ? -TT : TT
      }
      setZOffsetUnits(TT) {
        this._depthCullingState.zOffsetUnits = this.QcT ? -TT : TT
      }
      getZOffsetUnits() {
        const TT = this._depthCullingState.zOffsetUnits;
        return this.QcT ? -TT : TT
      }
      getHostWindow() {
        return (0, tT.i)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(TT) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const TT of this.scenes) TT._rebuildTextures();
        for (const TT of this._virtualScenes) TT._rebuildTextures()
      }
      _releaseRenderTargetWrapper(TT) {
        const kT = this._renderTargetWrapperCache.indexOf(TT); - 1 !== kT && this._renderTargetWrapperCache.splice(kT, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(TT, kT, cT) {
        const lT = kT || this.getRenderWidth(),
          MT = cT || this.getRenderHeight(),
          KT = TT.x || 0,
          OT = TT.y || 0;
        this._cachedViewport = TT, this._viewport(KT * lT, OT * MT, lT * TT.width, MT * TT.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(TT) {
        return new Path2D(TT)
      }
      get description() {
        let TT = this.name + this.version;
        return this._caps.parallelShaderCompile && (TT += " - Parallel shader compilation"), TT
      }
      _createTextureBase(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          yT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          fT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          xT = arguments.length > 7 ? arguments[7] : void 0,
          IT = arguments.length > 8 ? arguments[8] : void 0,
          AT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          CT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          jT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          tT = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          hT = arguments.length > 13 ? arguments[13] : void 0,
          NT = arguments.length > 14 ? arguments[14] : void 0,
          ST = arguments.length > 15 ? arguments[15] : void 0;
        const DT = "data:" === (TT = TT || "").substring(0, 5),
          aT = "blob:" === TT.substring(0, 5),
          FT = DT && -1 !== TT.indexOf(";base64,"),
          rT = CT || new vT.b(this, 1);
        rT !== CT && (rT.label = TT.substring(0, 60));
        const PT = TT;
        !this._transformTextureUrl || FT || CT || AT || (TT = this._transformTextureUrl(TT)), PT !== TT && (rT._originalUrl = PT);
        const wT = TT.lastIndexOf(".");
        let mT = tT || (wT > -1 ? TT.substring(wT).toLowerCase() : "");
        mT.indexOf("?") > -1 && (mT = mT.split("?")[0]);
        const bT = QT.GetCompatibleTextureLoader(mT, hT);
        lT && lT.addPendingData(rT), rT.url = TT, rT.generateMipMaps = !kT, rT.samplingMode = MT, rT.invertY = cT, rT._useSRGBBuffer = this._getUseSRGBBuffer(!!ST, kT), this._doNotHandleContextLost || (rT._buffer = AT);
        let zT = null;
        yT && !CT && (zT = rT.onLoadedObservable.add(yT)), CT || this._internalTexturesCache.push(rT);
        const JT = (cT, CT) => {
          lT && lT.removePendingData(rT), TT === PT ? (zT && rT.onLoadedObservable.remove(zT), KT.d.UseFallbackTexture && TT !== KT.d.FallbackTexture && this._createTextureBase(KT.d.FallbackTexture, kT, rT.invertY, lT, MT, null, fT, xT, IT, AT, rT), cT = (cT || "Unknown error") + (KT.d.UseFallbackTexture ? " - Fallback texture was used" : ""), rT.onErrorObservable.notifyObservers({
            message: cT,
            exception: CT
          }), fT && fT(cT, CT)) : (OT.e.Warn(`Failed to load ${TT}, falling back to ${PT}`), this._createTextureBase(PT, kT, rT.invertY, lT, MT, yT, fT, xT, IT, AT, rT, jT, tT, hT, NT, ST))
        };
        if (bT) {
          const kT = async TT => {
            (await bT).loadData(TT, rT, ((TT, kT, cT, KT, OT, yT) => {
              yT ? JT("TextureLoader failed to load data") : xT(rT, mT, lT, {
                width: TT,
                height: kT
              }, rT.invertY, !cT, KT, (() => (OT(), !1)), MT)
            }), NT)
          };
          if (AT) {
            const TT = async TT => {
              try {
                await kT(TT)
              } catch (cT) {
                JT("Failed to parse texture data", cT)
              }
            };
            AT instanceof ArrayBuffer ? TT(new Uint8Array(AT)) : ArrayBuffer.isView(AT) ? TT(AT) : fT && fT("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(TT, (async TT => {
            try {
              await kT(new Uint8Array(TT))
            } catch (cT) {
              JT("Failed to parse texture data", cT)
            }
          }), void 0, lT ? lT.offlineProvider : void 0, !0, ((TT, kT) => {
            JT("Unable to load " + (TT && TT.responseURL, kT))
          }))
        } else {
          const cT = TT => {
            aT && !this._doNotHandleContextLost && (rT._buffer = TT), xT(rT, mT, lT, TT, rT.invertY, kT, !1, IT, MT)
          };
          !DT || FT ? AT && ("string" === typeof AT.decoding || AT.close) ? cT(AT) : QT._FileToolsLoadImage(TT || "", cT, JT, lT ? lT.offlineProvider : null, hT, rT.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof AT || AT instanceof ArrayBuffer || ArrayBuffer.isView(AT) || AT instanceof Blob ? QT._FileToolsLoadImage(AT, cT, JT, lT ? lT.offlineProvider : null, hT, rT.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : AT && cT(AT)
        }
        return rT
      }
      _rebuildBuffers() {
        for (const TT of this._uniformBuffers) TT._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, tT.d)() ? document : null
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
        for (const TT in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, TT) && (this._boundTexturesCache[TT] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(TT) {
        this._name = TT
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
      setHardwareScalingLevel(TT) {
        this._hardwareScalingLevel = TT, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(TT) {
        this._doNotHandleContextLost = TT
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(TT, kT, cT) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new xT, this._stencilStateComposer = new IT, this._stencilState = new AT, this._alphaState = new CT.c(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new lT.b, this.onCanvasFocusObservable = new lT.b, this.onNewSceneAddedObservable = new lT.b, this.onResizeObservable = new lT.b, this.onCanvasPointerOutObservable = new lT.b, this.onEffectErrorObservable = new lT.b, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new lT.b, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = TT => this._renderLoop(TT), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new lT.b, this.onAfterShaderCompilationObservable = new lT.b, this.onBeginFrameObservable = new lT.b, this.onEndFrameObservable = new lT.b, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new lT.b, this.onContextRestoredObservable = new lT.b, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.QJ = new lT.b, this.onReleaseEffectsObservable = new lT.b, KT.d.Instances.push(this), this.startTime = fT.d.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, yT.d.SetMatrixPrecision(!!kT.useLargeWorldRendering || !!kT.useHighPrecisionMatrix), (0, tT.g)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), kT.antialias = TT ?? kT.antialias, kT.deterministicLockstep = kT.deterministicLockstep ?? !1, kT.lockstepMaxSteps = kT.lockstepMaxSteps ?? 4, kT.timeStep = kT.timeStep ?? 1 / 60, kT.stencil = kT.stencil ?? !0, this._audioContext = kT.audioEngineOptions?.audioContext ?? null, this._audioDestination = kT.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = kT.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!kT.doNotHandleContextLost, this._isStencilEnable = !!kT.stencil, this.useExactSrgbConversions = kT.useExactSrgbConversions ?? !1, this.canvasTabIndex = kT.canvasTabIndex ?? this.canvasTabIndex;
        const MT = (0, tT.i)() && window.devicePixelRatio || 1,
          OT = kT.limitDeviceRatio || MT;
        cT = cT || kT.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = cT, this._hardwareScalingLevel = cT ? 1 / Math.min(OT, MT) : 1, this._lastDevicePixelRatio = MT, this._creationOptions = kT
      }
      resize() {
        let TT, kT, cT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const TT = (0, tT.i)() && window.devicePixelRatio || 1,
            kT = this._lastDevicePixelRatio / TT;
          this._lastDevicePixelRatio = TT, this._hardwareScalingLevel *= kT
        }
        if ((0, tT.i)() && (0, tT.d)())
          if (this._renderingCanvas) {
            const cT = this._renderingCanvas.getBoundingClientRect?.();
            TT = this._renderingCanvas.clientWidth || cT?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, kT = this._renderingCanvas.clientHeight || cT?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else TT = window.innerWidth, kT = window.innerHeight;
        else TT = this._renderingCanvas ? this._renderingCanvas.width : 100, kT = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(TT / this._hardwareScalingLevel, kT / this._hardwareScalingLevel, cT)
      }
      setSize(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (TT |= 0, kT |= 0, !cT && this._renderingCanvas.width === TT && this._renderingCanvas.height === kT) return !1;
        if (this._renderingCanvas.width = TT, this._renderingCanvas.height = kT, this.scenes) {
          for (let TT = 0; TT < this.scenes.length; TT++) {
            const kT = this.scenes[TT];
            for (let TT = 0; TT < kT.cameras.length; TT++) {
              kT.cameras[TT]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT, IT, AT) {
        throw (0, jT.i)("engine.rawTexture")
      }
      createRawCubeTexture(TT, kT, cT, lT, MT, KT, OT, yT) {
        throw (0, jT.i)("engine.rawTexture")
      }
      createRawTexture3D(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT, IT) {
        throw (0, jT.i)("engine.rawTexture")
      }
      createRawTexture2DArray(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT, IT, AT) {
        throw (0, jT.i)("engine.rawTexture")
      }
      _sharedInit(TT) {
        this._renderingCanvas = TT
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const TT = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== TT.indexOf("Mobile") || -1 !== TT.indexOf("Mac") && (0, tT.d)() && "ontouchend" in document
        }, this._checkForMobile(), (0, tT.i)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(TT) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(TT, !1)
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
      _createImageBitmapFromSource(TT, kT) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(TT, kT) {
        return createImageBitmap(TT, kT)
      }
      resizeImageBitmap(TT, kT, cT) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(TT) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(TT, kT) {
        if ("undefined" === typeof document) return new OffscreenCanvas(TT, kT);
        const cT = document.createElement("canvas");
        return cT.width = TT, cT.height = kT, cT
      }
      createCanvas(TT, kT) {
        return QT._CreateCanvas(TT, kT)
      }
      static _FileToolsLoadImage(TT, kT, cT, lT, MT, KT, OT) {
        if (!hT.e.loadImage) throw (0, jT.i)("FileTools");
        return hT.e.loadImage(TT, kT, cT, lT, MT, KT, OT)
      }
      _loadFile(TT, kT, cT, lT, MT, KT) {
        const OT = (0, hT.m)(TT, kT, cT, lT, MT, KT);
        return this._activeRequests.push(OT), OT.onCompleteObservable.add((() => {
          const TT = this._activeRequests.indexOf(OT); - 1 !== TT && this._activeRequests.splice(TT, 1)
        })), OT
      }
      static _FileToolsLoadFile(TT, kT, cT, lT, MT, KT) {
        if (hT.e.loadFile) return hT.e.loadFile(TT, kT, cT, lT, MT, KT);
        throw (0, jT.i)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), MT.e.ResetCache();
        for (const kT of this._activeRequests) kT.abort();
        this._boundRenderFunction = null, this.QJ.notifyObservers(this), this.QJ.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, tT.i)() && window.removeEventListener("resize", this._checkForMobile);
        const TT = KT.d.Instances.indexOf(this);
        TT >= 0 && KT.d.Instances.splice(TT, 1), KT.d.Instances.length || (KT.d.OnEnginesDisposedObservable.notifyObservers(this), KT.d.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(TT) {
        throw (0, jT.i)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(TT, kT) {
        for (let cT = 0; cT < KT.d.Instances.length; cT++) {
          const lT = KT.d.Instances[cT];
          for (let cT = 0; cT < lT.scenes.length; cT++) lT.scenes[cT].markAllMaterialsAsDirty(TT, kT)
        }
      }
      static GetCompatibleTextureLoader(TT, kT) {
        return null
      }
    }
    QT._RenderPassIdCounter = 0, QT._RescalePostProcessFactory = null, QT.CollisionsEpsilon = .001, QT.QueueNewFrame = NT
  },
  39474: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT
    });
    class lT {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? lT.ShadersRepository : lT.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? lT.ShadersStore : lT.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? lT.IncludesShadersStore : lT.IncludesShadersStoreWGSL
      }
    }
    lT.ShadersRepository = "src/Shaders/", lT.ShadersStore = {}, lT.IncludesShadersStore = {}, lT.ShadersRepositoryWGSL = "src/ShadersWGSL/", lT.ShadersStoreWGSL = {}, lT.IncludesShadersStoreWGSL = {}
  },
  39489: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => CT,
      f: () => ST,
      j: () => vT,
      m: () => jT,
      p: () => tT,
      r: () => QT,
      t: () => AT,
      v: () => xT,
      w: () => IT,
      y: () => fT,
      B: () => yT
    });
    class lT {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(TT) {
        TT && this.program && TT(this.program)
      }
      setEngine(TT) {
        this.engine = TT
      }
      _fillEffectInformation(TT, kT, cT, lT, MT, KT, OT, yT) {
        const fT = this.engine;
        if (fT.supportsUniformBuffers)
          for (const IT in kT) TT.bindUniformBlock(IT, kT[IT]);
        let xT;
        for (this.engine.getUniforms(this, cT).forEach(((TT, kT) => {
            lT[cT[kT]] = TT
          })), this._uniforms = lT, xT = 0; xT < MT.length; xT++) {
          null == TT.getUniform(MT[xT]) && (MT.splice(xT, 1), xT--)
        }
        MT.forEach(((TT, kT) => {
          KT[TT] = kT
        }));
        for (const IT of fT.getAttributes(this, OT)) yT.push(IT)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(TT, kT) {
        const cT = this._valueCache[TT],
          lT = kT.updateFlag;
        if (void 0 !== cT && cT === lT) return !1;
        const MT = kT.acT();
        let KT = this._matrixValueCache[TT];
        if (void 0 !== cT && null !== cT && void 0 !== KT) {
          let kT = !0;
          for (let TT = 15; TT >= 0; TT--)
            if (KT[TT] !== MT[TT]) {
              kT = !1;
              break
            } if (kT) return this._valueCache[TT] = lT, !1
        }
        return void 0 === KT && (KT = this._matrixValueCache[TT] = new Float32Array(16)), KT.set(MT), this._valueCache[TT] = lT, !0
      }
      _cacheFloat2(TT, kT, cT) {
        let lT = this._valueCache[TT];
        if (!lT || 2 !== lT.length) return lT = [kT, cT], this._valueCache[TT] = lT, !0;
        let MT = !1;
        return lT[0] !== kT && (lT[0] = kT, MT = !0), lT[1] !== cT && (lT[1] = cT, MT = !0), MT
      }
      _cacheFloat3(TT, kT, cT, lT) {
        let MT = this._valueCache[TT];
        if (!MT || 3 !== MT.length) return MT = [kT, cT, lT], this._valueCache[TT] = MT, !0;
        let KT = !1;
        return MT[0] !== kT && (MT[0] = kT, KT = !0), MT[1] !== cT && (MT[1] = cT, KT = !0), MT[2] !== lT && (MT[2] = lT, KT = !0), KT
      }
      _cacheFloat4(TT, kT, cT, lT, MT) {
        let KT = this._valueCache[TT];
        if (!KT || 4 !== KT.length) return KT = [kT, cT, lT, MT], this._valueCache[TT] = KT, !0;
        let OT = !1;
        return KT[0] !== kT && (KT[0] = kT, OT = !0), KT[1] !== cT && (KT[1] = cT, OT = !0), KT[2] !== lT && (KT[2] = lT, OT = !0), KT[3] !== MT && (KT[3] = MT, OT = !0), OT
      }
      setInt(TT, kT) {
        const cT = this._valueCache[TT];
        void 0 !== cT && cT === kT || this.engine.setInt(this._uniforms[TT], kT) && (this._valueCache[TT] = kT)
      }
      setInt2(TT, kT, cT) {
        this._cacheFloat2(TT, kT, cT) && (this.engine.setInt2(this._uniforms[TT], kT, cT) || (this._valueCache[TT] = null))
      }
      setInt3(TT, kT, cT, lT) {
        this._cacheFloat3(TT, kT, cT, lT) && (this.engine.setInt3(this._uniforms[TT], kT, cT, lT) || (this._valueCache[TT] = null))
      }
      setInt4(TT, kT, cT, lT, MT) {
        this._cacheFloat4(TT, kT, cT, lT, MT) && (this.engine.setInt4(this._uniforms[TT], kT, cT, lT, MT) || (this._valueCache[TT] = null))
      }
      setIntArray(TT, kT) {
        this._valueCache[TT] = null, this.engine.setIntArray(this._uniforms[TT], kT)
      }
      setIntArray2(TT, kT) {
        this._valueCache[TT] = null, this.engine.setIntArray2(this._uniforms[TT], kT)
      }
      setIntArray3(TT, kT) {
        this._valueCache[TT] = null, this.engine.setIntArray3(this._uniforms[TT], kT)
      }
      setIntArray4(TT, kT) {
        this._valueCache[TT] = null, this.engine.setIntArray4(this._uniforms[TT], kT)
      }
      setUInt(TT, kT) {
        const cT = this._valueCache[TT];
        void 0 !== cT && cT === kT || this.engine.setUInt(this._uniforms[TT], kT) && (this._valueCache[TT] = kT)
      }
      setUInt2(TT, kT, cT) {
        this._cacheFloat2(TT, kT, cT) && (this.engine.setUInt2(this._uniforms[TT], kT, cT) || (this._valueCache[TT] = null))
      }
      setUInt3(TT, kT, cT, lT) {
        this._cacheFloat3(TT, kT, cT, lT) && (this.engine.setUInt3(this._uniforms[TT], kT, cT, lT) || (this._valueCache[TT] = null))
      }
      setUInt4(TT, kT, cT, lT, MT) {
        this._cacheFloat4(TT, kT, cT, lT, MT) && (this.engine.setUInt4(this._uniforms[TT], kT, cT, lT, MT) || (this._valueCache[TT] = null))
      }
      setUIntArray(TT, kT) {
        this._valueCache[TT] = null, this.engine.setUIntArray(this._uniforms[TT], kT)
      }
      setUIntArray2(TT, kT) {
        this._valueCache[TT] = null, this.engine.setUIntArray2(this._uniforms[TT], kT)
      }
      setUIntArray3(TT, kT) {
        this._valueCache[TT] = null, this.engine.setUIntArray3(this._uniforms[TT], kT)
      }
      setUIntArray4(TT, kT) {
        this._valueCache[TT] = null, this.engine.setUIntArray4(this._uniforms[TT], kT)
      }
      setArray(TT, kT) {
        this._valueCache[TT] = null, this.engine.setArray(this._uniforms[TT], kT)
      }
      setArray2(TT, kT) {
        this._valueCache[TT] = null, this.engine.setArray2(this._uniforms[TT], kT)
      }
      setArray3(TT, kT) {
        this._valueCache[TT] = null, this.engine.setArray3(this._uniforms[TT], kT)
      }
      setArray4(TT, kT) {
        this._valueCache[TT] = null, this.engine.setArray4(this._uniforms[TT], kT)
      }
      setMatrices(TT, kT) {
        kT && (this._valueCache[TT] = null, this.engine.setMatrices(this._uniforms[TT], kT))
      }
      setMatrix(TT, kT) {
        this._cacheMatrix(TT, kT) && (this.engine.setMatrices(this._uniforms[TT], kT.acT()) || (this._valueCache[TT] = null))
      }
      setMatrix3x3(TT, kT) {
        this._valueCache[TT] = null, this.engine.setMatrix3x3(this._uniforms[TT], kT)
      }
      setMatrix2x2(TT, kT) {
        this._valueCache[TT] = null, this.engine.setMatrix2x2(this._uniforms[TT], kT)
      }
      setFloat(TT, kT) {
        const cT = this._valueCache[TT];
        void 0 !== cT && cT === kT || this.engine.setFloat(this._uniforms[TT], kT) && (this._valueCache[TT] = kT)
      }
      setVector2(TT, kT) {
        this._cacheFloat2(TT, kT.x, kT.y) && (this.engine.setFloat2(this._uniforms[TT], kT.x, kT.y) || (this._valueCache[TT] = null))
      }
      setFloat2(TT, kT, cT) {
        this._cacheFloat2(TT, kT, cT) && (this.engine.setFloat2(this._uniforms[TT], kT, cT) || (this._valueCache[TT] = null))
      }
      setVector3(TT, kT) {
        this._cacheFloat3(TT, kT.x, kT.y, kT.z) && (this.engine.setFloat3(this._uniforms[TT], kT.x, kT.y, kT.z) || (this._valueCache[TT] = null))
      }
      setFloat3(TT, kT, cT, lT) {
        this._cacheFloat3(TT, kT, cT, lT) && (this.engine.setFloat3(this._uniforms[TT], kT, cT, lT) || (this._valueCache[TT] = null))
      }
      setVector4(TT, kT) {
        this._cacheFloat4(TT, kT.x, kT.y, kT.z, kT.w) && (this.engine.setFloat4(this._uniforms[TT], kT.x, kT.y, kT.z, kT.w) || (this._valueCache[TT] = null))
      }
      setQuaternion(TT, kT) {
        this._cacheFloat4(TT, kT.x, kT.y, kT.z, kT.w) && (this.engine.setFloat4(this._uniforms[TT], kT.x, kT.y, kT.z, kT.w) || (this._valueCache[TT] = null))
      }
      setFloat4(TT, kT, cT, lT, MT) {
        this._cacheFloat4(TT, kT, cT, lT, MT) && (this.engine.setFloat4(this._uniforms[TT], kT, cT, lT, MT) || (this._valueCache[TT] = null))
      }
      setColor3(TT, kT) {
        this._cacheFloat3(TT, kT.r, kT.g, kT.b) && (this.engine.setFloat3(this._uniforms[TT], kT.r, kT.g, kT.b) || (this._valueCache[TT] = null))
      }
      setColor4(TT, kT, cT) {
        this._cacheFloat4(TT, kT.r, kT.g, kT.b, cT) && (this.engine.setFloat4(this._uniforms[TT], kT.r, kT.g, kT.b, cT) || (this._valueCache[TT] = null))
      }
      setDirectColor4(TT, kT) {
        this._cacheFloat4(TT, kT.r, kT.g, kT.b, kT.a) && (this.engine.setFloat4(this._uniforms[TT], kT.r, kT.g, kT.b, kT.a) || (this._valueCache[TT] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var MT = cT(39496);
    const KT = new WeakMap,
      OT = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function yT(TT) {
      let kT = KT.get(TT);
      if (!kT) {
        if (!TT) return OT;
        kT = {
          _webGLVersion: TT.TEXTURE_BINDING_3D ? 2 : 1,
          _context: TT,
          parallelShaderCompile: TT.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, KT.set(TT, kT)
      }
      return kT
    }

    function fT(TT) {
      KT.delete(TT)
    }

    function xT(TT, kT, cT, lT, MT, KT) {
      const OT = yT(lT);
      KT || (KT = OT._createShaderProgramInjection ?? CT);
      return KT(TT, NT(kT, "vertex", lT, OT._contextWasLost), NT(cT, "fragment", lT, OT._contextWasLost), lT, MT, OT.validateShaderPrograms)
    }

    function IT(TT, kT, cT, lT, MT) {
      let KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        OT = arguments.length > 6 ? arguments[6] : void 0;
      const fT = yT(MT);
      OT || (OT = fT._createShaderProgramInjection ?? CT);
      const xT = fT._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return OT(TT, hT(kT, "vertex", lT, xT, MT, fT._contextWasLost), hT(cT, "fragment", lT, xT, MT, fT._contextWasLost), MT, KT, fT.validateShaderPrograms)
    }

    function AT(TT, kT) {
      const cT = new lT,
        MT = yT(TT);
      return MT.parallelShaderCompile && !MT.disableParallelShaderCompile && (cT.isParallelCompiled = !0), cT.context = MT._context, cT
    }

    function CT(TT, kT, cT, lT) {
      let MT = arguments.length > 5 ? arguments[5] : void 0;
      const KT = lT.createProgram();
      if (TT.program = KT, !KT) throw new Error("Unable to create program");
      return lT.attachShader(KT, kT), lT.attachShader(KT, cT), lT.linkProgram(KT), TT.context = lT, TT.vertexShader = kT, TT.fragmentShader = cT, TT.isParallelCompiled || vT(TT, lT, MT), KT
    }

    function jT(TT, kT, cT) {
      const lT = TT;
      if (lT._isDisposed) return !1;
      const MT = yT(kT);
      return !!(MT && MT.parallelShaderCompile && MT.parallelShaderCompile.COMPLETION_STATUS_KHR && lT.program && kT.getProgramParameter(lT.program, MT.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (vT(lT, kT, cT), !0)
    }

    function vT(TT, kT, cT) {
      const lT = TT.context,
        MT = TT.vertexShader,
        KT = TT.fragmentShader,
        OT = TT.program;
      if (!lT.getProgramParameter(OT, lT.LINK_STATUS)) {
        if (!kT.getShaderParameter(MT, kT.COMPILE_STATUS)) {
          const cT = kT.getShaderInfoLog(MT);
          if (cT) throw TT.vertexCompilationError = cT, new Error("VERTEX SHADER " + cT)
        }
        if (!kT.getShaderParameter(KT, kT.COMPILE_STATUS)) {
          const cT = kT.getShaderInfoLog(KT);
          if (cT) throw TT.fragmentCompilationError = cT, new Error("FRAGMENT SHADER " + cT)
        }
        const cT = lT.getProgramInfoLog(OT);
        if (cT) throw TT.programLinkError = cT, new Error(cT)
      }
      if (cT) {
        lT.validateProgram(OT);
        if (!lT.getProgramParameter(OT, lT.VALIDATE_STATUS)) {
          const kT = lT.getProgramInfoLog(OT);
          if (kT) throw TT.programValidationError = kT, new Error(kT)
        }
      }
      lT.deleteShader(MT), lT.deleteShader(KT), TT.vertexShader = void 0, TT.fragmentShader = void 0, TT.onCompiled && (TT.onCompiled(), TT.onCompiled = void 0)
    }

    function tT(TT, kT, cT, lT, MT, KT, OT, fT, AT) {
      let CT = arguments.length > 10 ? arguments[10] : void 0,
        jT = arguments.length > 11 ? arguments[11] : void 0,
        vT = arguments.length > 12 ? arguments[12] : void 0;
      const tT = yT(TT.context);
      jT || (jT = tT.createRawShaderProgramInjection ?? xT), vT || (vT = tT.createShaderProgramInjection ?? IT);
      const hT = TT;
      hT.program = lT ? jT(hT, kT, cT, hT.context, AT) : vT(hT, kT, cT, fT, hT.context, AT), hT.program.__SPECTOR_rebuildProgram = OT, CT()
    }

    function hT(TT, kT, cT, lT, KT, OT) {
      return NT((0, MT.i)(TT, cT, lT), kT, KT, OT)
    }

    function NT(TT, kT, cT, lT) {
      const MT = cT.createShader("vertex" === kT ? cT.VERTEX_SHADER : cT.FRAGMENT_SHADER);
      if (!MT) {
        let TT, MT = cT.NO_ERROR;
        for (;
          (TT = cT.getError()) !== cT.NO_ERROR;) MT = TT;
        throw new Error(`Something went wrong while creating a gl ${kT} shader object. gl error=${MT}, gl isContextLost=${cT.isContextLost()}, _contextWasLost=${lT}`)
      }
      return cT.shaderSource(MT, TT), cT.compileShader(MT), MT
    }

    function QT(TT, kT) {
      kT.useProgram(TT)
    }

    function ST(TT, kT) {
      const cT = TT;
      if (!cT.isParallelCompiled) return void kT(TT);
      const lT = cT.onCompiled;
      cT.onCompiled = () => {
        lT?.(), kT(TT)
      }
    }
  },
  39463: (TT, kT, cT) => {
    cT.d(kT, {
      ThinEngine: () => aT
    });
    var lT = cT(39467),
      MT = cT(39489),
      KT = cT(39516),
      OT = cT(39533),
      yT = cT(38512),
      fT = cT(39482);
    class xT {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(TT, kT, cT, lT, MT) {
        if (MT.drawBuffersExtensionDisabled) {
          const kT = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          TT = TT.replace(kT, "")
        }
        return TT
      }
    }
    const IT = /(flat\s)?\s*varying\s*.*/;
    class AT {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(TT) {
        return TT.replace("attribute", "in")
      }
      varyingCheck(TT, kT) {
        return IT.test(TT)
      }
      varyingProcessor(TT, kT) {
        return TT.replace("varying", kT ? "in" : "out")
      }
      postProcessor(TT, kT, cT) {
        const lT = -1 !== TT.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (TT = (TT = TT.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), cT) {
          const cT = -1 !== TT.search(/layout *\(location *= *0\) *out/g),
            MT = -1 !== kT.indexOf("#define DUAL_SOURCE_BLENDING"),
            KT = MT ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          MT && (TT = "#extension GL_EXT_blend_func_extended : require\n" + TT), TT = (TT = (TT = (TT = (TT = (TT = (TT = TT.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (lT || cT ? "" : KT) + "void main(")
        } else {
          kT.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (TT = "invariant gl_Position;\n" + TT);
          if (-1 !== kT.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + TT
        }
        return TT
      }
    }
    var CT = cT(39539),
      jT = cT(39549),
      vT = cT(39557),
      tT = cT(39454),
      hT = cT(39496),
      NT = cT(39477),
      QT = cT(39562),
      ST = cT(39524);
    class DT {}
    class aT extends KT.d {
      get name() {
        return this._name
      }
      set name(TT) {
        this._name = TT
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return lT.e.ShadersRepository
      }
      static set ShadersRepository(TT) {
        lT.e.ShadersRepository = TT
      }
      get supportsUniformBuffers() {
        return this.qv > 1 && !this.disableUniformBuffers
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
      constructor(TT, kT, cT, lT) {
        if (cT = cT || {}, super(kT ?? cT.antialias, cT, lT), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !TT) return;
        let KT;
        if (TT.getContext) {
          if (KT = TT, void 0 === cT.preserveDrawingBuffer && (cT.preserveDrawingBuffer = !1), void 0 === cT.xrCompatible && (cT.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const TT = navigator.userAgent;
            for (const kT of aT.ExceptionList) {
              const lT = kT.key,
                MT = kT.targets;
              if (new RegExp(lT).test(TT)) {
                if (kT.capture && kT.captureConstraint) {
                  const cT = kT.capture,
                    lT = kT.captureConstraint,
                    MT = new RegExp(cT).exec(TT);
                  if (MT && MT.length > 0) {
                    if (parseInt(MT[MT.length - 1]) >= lT) continue
                  }
                }
                for (const TT of MT) switch (TT) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    cT.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, MT.y)(this._gl)
            } : (this._onContextLost = TT => {
              TT.preventDefault(), this._contextWasLost = !0, (0, MT.y)(this._gl), yT.e.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, KT.addEventListener("webglcontextrestored", this._onContextRestored, !1), cT.powerPreference = cT.powerPreference || "high-performance"), KT.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (cT.xrCompatible = !1), !cT.disableWebGL2Support) try {
            this._gl = KT.getContext("webgl2", cT) || KT.getContext("experimental-webgl2", cT), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (IT) {}
          if (!this._gl) {
            if (!KT) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = KT.getContext("webgl", cT) || KT.getContext("experimental-webgl", cT)
            } catch (IT) {
              throw new Error("WebGL not supported", {
                cause: IT
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = TT, KT = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const kT = this._gl.getContextAttributes();
          kT && (cT.stencil = kT.stencil)
        }
        this._sharedInit(KT), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== cT.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = cT.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let MT = 0; MT < this._caps.maxVertexAttribs; MT++) this._currentBufferPointers[MT] = new DT;
        this._shaderProcessor = this.qv > 1 ? new AT : new xT;
        const OT = `Babylon.js v${aT.Version}`;
        yT.e.Log(OT + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", OT);
        const fT = (0, MT.B)(this._gl);
        fT.validateShaderPrograms = this.validateShaderPrograms, fT.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(TT) {
        return null
      }
      areAllEffectsReady() {
        for (const TT in this._compiledEffects) {
          if (!this._compiledEffects[TT].isReady()) return !1
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
        const TT = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != TT && (this._glRenderer = this._gl.getParameter(TT.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(TT.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const kT = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!kT, this._alphaState = new ST.c(this._caps.blendParametersPerTarget), kT && (this._gl.blendEquationSeparateIndexed = kT.blendEquationSeparateiOES.bind(kT), this._gl.blendEquationIndexed = kT.blendEquationiOES.bind(kT), this._gl.blendFuncSeparateIndexed = kT.blendFuncSeparateiOES.bind(kT), this._gl.blendFuncIndexed = kT.blendFunciOES.bind(kT), this._gl.colorMaskIndexed = kT.colorMaskiOES.bind(kT), this._gl.disableIndexed = kT.disableiOES.bind(kT), this._gl.enableIndexed = kT.enableiOES.bind(kT)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const TT = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== TT) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = TT.drawBuffersWEBGL.bind(TT), this._caps.maxDrawBuffers = this._gl.getParameter(TT.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let kT = 0; kT < 16; kT++) this._gl["COLOR_ATTACHMENT" + kT + "_WEBGL"] = TT["COLOR_ATTACHMENT" + kT + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const TT = this._gl.getExtension("WEBGL_depth_texture");
          null != TT && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = TT.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const TT = this._gl.getExtension("OES_vertex_array_object");
          null != TT && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = TT.createVertexArrayOES.bind(TT), this._gl.bindVertexArray = TT.bindVertexArrayOES.bind(TT), this._gl.deleteVertexArray = TT.deleteVertexArrayOES.bind(TT))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const TT = this._gl.getExtension("ANGLE_instanced_arrays");
          null != TT ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = TT.drawArraysInstancedANGLE.bind(TT), this._gl.drawElementsInstanced = TT.drawElementsInstancedANGLE.bind(TT), this._gl.vertexAttribDivisor = TT.vertexAttribDivisorANGLE.bind(TT)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const TT = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            kT = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (TT && kT && (this._caps.highPrecisionShaderSupported = 0 !== TT.precision && 0 !== kT.precision, this._caps.shaderFloatPrecision = Math.min(TT.precision, kT.precision)), !this._shouldUseHighPrecisionShader) {
            const TT = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              kT = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            TT && kT && (this._caps.shaderFloatPrecision = Math.min(TT.precision, kT.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const TT = this._gl.getExtension("EXT_blend_minmax");
          null != TT && (this._caps.blendMinMax = !0, this._gl.MAX = TT.MAX_EXT, this._gl.MIN = TT.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const TT = this._gl.getExtension("EXT_sRGB");
            null != TT && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: TT.SRGB_EXT,
              SRGB8: TT.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: TT.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const TT = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== TT && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && TT)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let cT = 0; cT < this._maxSimultaneousTextures; cT++) this._nextFreeTextureSlots.push(cT);
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
      get qv() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const TT = this._workingCanvas.getContext("2d");
        TT && (this._workingContext = TT)
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
        const TT = this.getGlInfo();
        return TT && TT.renderer ? TT.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const KT = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = KT;
        let OT = 0;
        if (kT && TT) {
          let kT = !0;
          if (this._currentRenderTarget) {
            const cT = this._currentRenderTarget.texture?.format;
            if (void 0 !== cT && (0, QT.h)(cT)) {
              const cT = this._currentRenderTarget.texture?.type;
              void 0 !== cT && (0, QT.j)(cT) ? (aT._TempClearColorUint32[0] = 255 * TT.r, aT._TempClearColorUint32[1] = 255 * TT.g, aT._TempClearColorUint32[2] = 255 * TT.b, aT._TempClearColorUint32[3] = 255 * TT.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, aT._TempClearColorUint32), kT = !1) : (aT._TempClearColorInt32[0] = 255 * TT.r, aT._TempClearColorInt32[1] = 255 * TT.g, aT._TempClearColorInt32[2] = 255 * TT.b, aT._TempClearColorInt32[3] = 255 * TT.a, this._gl.clearBufferiv(this._gl.COLOR, 0, aT._TempClearColorInt32), kT = !1)
            }
          }
          kT && (this._gl.clearColor(TT.r, TT.g, TT.b, void 0 !== TT.a ? TT.a : 1), OT |= this._gl.COLOR_BUFFER_BIT)
        }
        cT && (this.QcT ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), OT |= this._gl.DEPTH_BUFFER_BIT), lT && (this._gl.clearStencil(MT), OT |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(OT)
      }
      _clearColorAttachment(TT, kT, cT, lT) {
        if ((0, QT.h)(cT)) {
          const cT = (0, QT.j)(lT),
            MT = cT ? aT._TempClearColorUint32 : aT._TempClearColorInt32;
          return MT[0] = kT.r, MT[1] = kT.g, MT[2] = kT.b, MT[3] = kT.a, void(cT ? this._gl.clearBufferuiv(this._gl.COLOR, TT, MT) : this._gl.clearBufferiv(this._gl.COLOR, TT, MT))
        }
        aT._TempClearColorFloat32[0] = kT.r, aT._TempClearColorFloat32[1] = kT.g, aT._TempClearColorFloat32[2] = kT.b, aT._TempClearColorFloat32[3] = kT.a, this._gl.clearBufferfv(this._gl.COLOR, TT, aT._TempClearColorFloat32)
      }
      _viewport(TT, kT, cT, lT) {
        TT === this._viewportCached.x && kT === this._viewportCached.y && cT === this._viewportCached.z && lT === this._viewportCached.w || (this._viewportCached.x = TT, this._viewportCached.y = kT, this._viewportCached.z = cT, this._viewportCached.w = lT, this._gl.viewport(TT, kT, cT, lT))
      }
      qN() {
        super.qN(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 ? arguments[2] : void 0,
          lT = arguments.length > 3 ? arguments[3] : void 0,
          MT = arguments.length > 4 ? arguments[4] : void 0,
          KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          OT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const fT = TT;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = TT, this._integerMRTAttachmentsMask = !TT.isMulti && TT.texture && (0, QT.h)(TT.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(fT._framebuffer);
        const xT = this._gl;
        TT.isMulti || (TT.is2DArray || TT.is3D ? (xT.framebufferTextureLayer(xT.FRAMEBUFFER, xT.COLOR_ATTACHMENT0, TT.texture._hardwareTexture?.underlyingResource, KT, OT), fT._currentLOD = KT) : TT.isCube ? xT.framebufferTexture2D(xT.FRAMEBUFFER, xT.COLOR_ATTACHMENT0, xT.TEXTURE_CUBE_MAP_POSITIVE_X + kT, TT.texture._hardwareTexture?.underlyingResource, KT) : fT._currentLOD !== KT && (xT.framebufferTexture2D(xT.FRAMEBUFFER, xT.COLOR_ATTACHMENT0, xT.TEXTURE_2D, TT.texture._hardwareTexture?.underlyingResource, KT), fT._currentLOD = KT));
        const IT = TT._depthStencilTexture;
        if (IT) {
          TT.is3D && (TT.texture.width === IT.width && TT.texture.height === IT.height && TT.texture.depth === IT.depth || yT.e.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const cT = TT._depthStencilTextureWithStencil ? xT.DEPTH_STENCIL_ATTACHMENT : xT.DEPTH_ATTACHMENT;
          TT.is2DArray || TT.is3D ? xT.framebufferTextureLayer(xT.FRAMEBUFFER, cT, IT._hardwareTexture?.underlyingResource, KT, OT) : TT.isCube ? xT.framebufferTexture2D(xT.FRAMEBUFFER, cT, xT.TEXTURE_CUBE_MAP_POSITIVE_X + kT, IT._hardwareTexture?.underlyingResource, KT) : xT.framebufferTexture2D(xT.FRAMEBUFFER, cT, xT.TEXTURE_2D, IT._hardwareTexture?.underlyingResource, KT)
        }
        fT._MSAAFramebuffer && this._bindUnboundFramebuffer(fT._MSAAFramebuffer), this._cachedViewport && !MT ? this.setViewport(this._cachedViewport, cT, lT) : (cT || (cT = TT.width, KT && (cT /= Math.pow(2, KT))), lT || (lT = TT.height, KT && (lT /= Math.pow(2, KT))), this._viewport(0, 0, cT, lT)), this.wipeCaches()
      }
      setStateCullFaceType(TT, kT) {
        const cT = this.cullBackFaces ?? TT ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== cT || kT) && (this._depthCullingState.cullFace = cT)
      }
      setState(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 ? arguments[2] : void 0,
          lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          MT = arguments.length > 4 ? arguments[4] : void 0,
          KT = arguments.length > 5 ? arguments[5] : void 0,
          OT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== TT || cT) && (this._depthCullingState.cull = TT), this.setStateCullFaceType(MT, cT), this.setZOffset(kT), this.setZOffsetUnits(OT);
        const yT = lT ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== yT || cT) && (this._depthCullingState.frontFace = yT), this._stencilStateComposer.stencilMaterial = KT
      }
      _resolveAndGenerateMipMapsFramebuffer(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        TT.disableAutomaticMSAAResolve || (TT.isMulti ? this.resolveMultiFramebuffer(TT) : this.resolveFramebuffer(TT)), kT || (TT.isMulti ? this.generateMipMapsMultiFramebuffer(TT) : this.generateMipMapsFramebuffer(TT))
      }
      _bindUnboundFramebuffer(TT) {
        this._currentFramebuffer !== TT && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, TT), this._currentFramebuffer = TT)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(TT) {
        const kT = this._getTextureTarget(TT);
        this._bindTextureDirectly(kT, TT, !0), this._gl.generateMipmap(kT), this._bindTextureDirectly(kT, null)
      }
      unBindFramebuffer(TT, kT, cT) {
        const lT = TT;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(TT, kT), cT && (lT._MSAAFramebuffer && this._bindUnboundFramebuffer(lT._framebuffer), cT()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(TT) {
        TT.isMulti || !TT.texture?.generateMipMaps || TT.isCube || this.generateMipmaps(TT.texture)
      }
      resolveFramebuffer(TT) {
        const kT = TT,
          cT = this._gl;
        if (!kT._MSAAFramebuffer || kT.isMulti) return;
        let lT = kT.resolveMSAAColors ? cT.COLOR_BUFFER_BIT : 0;
        lT |= kT._generateDepthBuffer && kT.resolveMSAADepth ? cT.DEPTH_BUFFER_BIT : 0, lT |= kT._generateStencilBuffer && kT.resolveMSAAStencil ? cT.STENCIL_BUFFER_BIT : 0, cT.bindFramebuffer(cT.READ_FRAMEBUFFER, kT._MSAAFramebuffer), cT.bindFramebuffer(cT.DRAW_FRAMEBUFFER, kT._framebuffer), cT.blitFramebuffer(0, 0, TT.width, TT.height, 0, 0, TT.width, TT.height, lT, cT.NEAREST)
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
      createVertexBuffer(TT, kT, cT) {
        return this._createVertexBuffer(TT, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(TT, kT) {
        const cT = this._gl.createBuffer();
        if (!cT) throw new Error("Unable to create vertex buffer");
        const lT = new CT.c(cT);
        return this.bindArrayBuffer(lT), "number" !== typeof TT ? TT instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(TT), kT), lT.DA = 4 * TT.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, TT, kT), lT.DA = TT.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(TT), kT), lT.DA = TT), this._resetVertexBufferBinding(), lT.references = 1, lT
      }
      createDynamicVertexBuffer(TT, kT) {
        return this._createVertexBuffer(TT, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(TT, kT, cT) {
        const lT = this._gl.createBuffer(),
          MT = new CT.c(lT);
        if (!lT) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(MT);
        const KT = this._normalizeIndexData(TT);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, KT, kT ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), MT.references = 1, MT.is32Bits = 4 === KT.BYTES_PER_ELEMENT, MT
      }
      _normalizeIndexData(TT) {
        if (2 === TT.BYTES_PER_ELEMENT) return TT;
        if (this._caps.uintIndices) {
          if (TT instanceof Uint32Array) return TT;
          for (let kT = 0; kT < TT.length; kT++)
            if (TT[kT] >= 65535) return new Uint32Array(TT);
          return new Uint16Array(TT)
        }
        return new Uint16Array(TT)
      }
      bindArrayBuffer(TT) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(TT, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(TT, kT, cT) {
        const lT = TT.program,
          MT = this._gl.getUniformBlockIndex(lT, kT);
        this._gl.uniformBlockBinding(lT, MT, cT)
      }
      bindIndexBuffer(TT) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(TT, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(TT, kT) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[kT] !== TT) && (this._gl.bindBuffer(kT, TT ? TT.underlyingResource : null), this._currentBoundBuffer[kT] = TT)
      }
      updateArrayBuffer(TT) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, TT)
      }
      _vertexAttribPointer(TT, kT, cT, lT, MT, KT, OT) {
        const yT = this._currentBufferPointers[kT];
        if (!yT) return;
        let fT = !1;
        yT.active ? (yT.buffer !== TT && (yT.buffer = TT, fT = !0), yT.size !== cT && (yT.size = cT, fT = !0), yT.type !== lT && (yT.type = lT, fT = !0), yT.normalized !== MT && (yT.normalized = MT, fT = !0), yT.stride !== KT && (yT.stride = KT, fT = !0), yT.offset !== OT && (yT.offset = OT, fT = !0)) : (fT = !0, yT.active = !0, yT.index = kT, yT.size = cT, yT.type = lT, yT.normalized = MT, yT.stride = KT, yT.offset = OT, yT.buffer = TT), (fT || this._vaoRecordInProgress) && (this.bindArrayBuffer(TT), lT === this._gl.UNSIGNED_INT || lT === this._gl.INT ? this._gl.vertexAttribIPointer(kT, cT, lT, KT, OT) : this._gl.vertexAttribPointer(kT, cT, lT, MT, KT, OT))
      }
      _bindIndexBufferWithCache(TT) {
        null != TT && this._cachedIndexBuffer !== TT && (this._cachedIndexBuffer = TT, this.bindIndexBuffer(TT), this._uintIndicesCurrentlySet = TT.is32Bits)
      }
      _bindVertexBuffersAttributes(TT, kT, cT) {
        const lT = kT.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let MT = 0; MT < lT.length; MT++) {
          const KT = kT.getAttributeLocation(MT);
          if (KT >= 0) {
            const kT = lT[MT];
            let OT = null;
            if (cT && (OT = cT[kT]), OT || (OT = TT[kT]), !OT) continue;
            this._gl.enableVertexAttribArray(KT), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[KT] = !0);
            const yT = OT.getBuffer();
            yT && (this._vertexAttribPointer(yT, KT, OT.getSize(), OT.type, OT.normalized, OT.byteStride, OT.byteOffset), OT.getIsInstanced() && (this._gl.vertexAttribDivisor(KT, OT.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(KT), this._currentInstanceBuffers.push(yT))))
          }
        }
      }
      recordVertexArrayObject(TT, kT, cT, lT) {
        const MT = this._gl.createVertexArray();
        if (!MT) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(MT), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(TT, cT, lT), this.bindIndexBuffer(kT), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), MT
      }
      bindVertexArrayObject(TT, kT) {
        this._cachedVertexArrayObject !== TT && (this._cachedVertexArrayObject = TT, this._gl.bindVertexArray(TT), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != kT && kT.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(TT, kT, cT, lT, MT) {
        if (this._cachedVertexBuffers !== TT || this._cachedEffectForVertexBuffers !== MT) {
          this._cachedVertexBuffers = TT, this._cachedEffectForVertexBuffers = MT;
          const kT = MT.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let KT = 0;
          for (let OT = 0; OT < kT; OT++)
            if (OT < cT.length) {
              const kT = MT.getAttributeLocation(OT);
              kT >= 0 && (this._gl.enableVertexAttribArray(kT), this._vertexAttribArraysEnabled[kT] = !0, this._vertexAttribPointer(TT, kT, cT[OT], this._gl.FLOAT, !1, lT, KT)), KT += 4 * cT[OT]
            }
        }
        this._bindIndexBufferWithCache(kT)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(TT, kT, cT, lT) {
        this._cachedVertexBuffers === TT && this._cachedEffectForVertexBuffers === cT || (this._cachedVertexBuffers = TT, this._cachedEffectForVertexBuffers = cT, this._bindVertexBuffersAttributes(TT, cT, lT)), this._bindIndexBufferWithCache(kT)
      }
      unbindInstanceAttributes() {
        let TT;
        for (let kT = 0, cT = this._currentInstanceLocations.length; kT < cT; kT++) {
          const cT = this._currentInstanceBuffers[kT];
          TT != cT && cT.references && (TT = cT, this.bindArrayBuffer(cT));
          const lT = this._currentInstanceLocations[kT];
          this._gl.vertexAttribDivisor(lT, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(TT) {
        this._gl.deleteVertexArray(TT)
      }
      _releaseBuffer(TT) {
        return TT.references--, 0 === TT.references && (this._deleteBuffer(TT), !0)
      }
      _deleteBuffer(TT) {
        this._gl.deleteBuffer(TT.underlyingResource)
      }
      updateAndBindInstancesBuffer(TT, kT, cT) {
        if (this.bindArrayBuffer(TT), kT && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, kT), void 0 !== cT[0].index) this.bindInstancesBuffer(TT, cT, !0);
        else
          for (let lT = 0; lT < 4; lT++) {
            const kT = cT[lT];
            this._vertexAttribArraysEnabled[kT] || (this._gl.enableVertexAttribArray(kT), this._vertexAttribArraysEnabled[kT] = !0), this._vertexAttribPointer(TT, kT, 4, this._gl.FLOAT, !1, 64, 16 * lT), this._gl.vertexAttribDivisor(kT, 1), this._currentInstanceLocations.push(kT), this._currentInstanceBuffers.push(TT)
          }
      }
      bindInstancesBuffer(TT, kT) {
        let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(TT);
        let lT = 0;
        if (cT)
          for (let MT = 0; MT < kT.length; MT++) {
            lT += 4 * kT[MT].attributeSize
          }
        for (let MT = 0; MT < kT.length; MT++) {
          const cT = kT[MT];
          void 0 === cT.index && (cT.index = this._currentEffect.getAttributeLocationByName(cT.attributeName)), cT.index < 0 || (this._vertexAttribArraysEnabled[cT.index] || (this._gl.enableVertexAttribArray(cT.index), this._vertexAttribArraysEnabled[cT.index] = !0), this._vertexAttribPointer(TT, cT.index, cT.attributeSize, cT.attributeType || this._gl.FLOAT, cT.normalized || !1, lT, cT.offset), this._gl.vertexAttribDivisor(cT.index, void 0 === cT.divisor ? 1 : cT.divisor), this._currentInstanceLocations.push(cT.index), this._currentInstanceBuffers.push(TT))
        }
      }
      disableInstanceAttributeByName(TT) {
        if (!this._currentEffect) return;
        const kT = this._currentEffect.getAttributeLocationByName(TT);
        this.disableInstanceAttribute(kT)
      }
      disableInstanceAttribute(TT) {
        let kT, cT = !1;
        for (; - 1 !== (kT = this._currentInstanceLocations.indexOf(TT));) this._currentInstanceLocations.splice(kT, 1), this._currentInstanceBuffers.splice(kT, 1), cT = !0;
        cT && (this._gl.vertexAttribDivisor(TT, 0), this.disableAttributeByIndex(TT))
      }
      disableAttributeByIndex(TT) {
        this._gl.disableVertexAttribArray(TT), this._vertexAttribArraysEnabled[TT] = !1, this._currentBufferPointers[TT].active = !1
      }
      draw(TT, kT, cT, lT) {
        this.drawElementsType(TT ? 0 : 1, kT, cT, lT)
      }
      drawPointClouds(TT, kT, cT) {
        this.drawArraysType(2, TT, kT, cT)
      }
      drawUnIndexed(TT, kT, cT, lT) {
        this.drawArraysType(TT ? 0 : 1, kT, cT, lT)
      }
      drawElementsType(TT, kT, cT, lT) {
        this.applyStates(), this._reportDrawCall();
        const MT = this._drawMode(TT),
          KT = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          OT = this._uintIndicesCurrentlySet ? 4 : 2;
        lT ? this._gl.drawElementsInstanced(MT, cT, KT, kT * OT, lT) : this._gl.drawElements(MT, cT, KT, kT * OT)
      }
      drawArraysType(TT, kT, cT, lT) {
        this.applyStates(), this._reportDrawCall();
        const MT = this._drawMode(TT);
        lT ? this._gl.drawArraysInstanced(MT, kT, cT, lT) : this._gl.drawArrays(MT, kT, cT)
      }
      _drawMode(TT) {
        switch (TT) {
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
      _releaseEffect(TT) {
        this._compiledEffects[TT._key] && delete this._compiledEffects[TT._key];
        const kT = TT.getPipelineContext();
        kT && this._deletePipelineContext(kT)
      }
      _deletePipelineContext(TT) {
        const kT = TT;
        kT && kT.program && (kT.program.__SPECTOR_rebuildProgram = null, (0, NT.o)(kT), this._gl && (this._currentProgram === kT.program && this._setProgram(null), this._gl.deleteProgram(kT.program)))
      }
      _getGlobalDefines(TT) {
        return (0, hT.l)(TT, this.isNDCHalfZRange, this.QcT, this.useExactSrgbConversions)
      }
      createEffect(TT, kT, cT, KT, OT, yT, fT, xT, IT) {
        let AT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          CT = arguments.length > 10 ? arguments[10] : void 0;
        const jT = "string" === typeof TT ? TT : TT.vertexToken || TT.vertexSource || TT.vertexElement || TT.vertex,
          vT = "string" === typeof TT ? TT : TT.fragmentToken || TT.fragmentSource || TT.fragmentElement || TT.fragment,
          tT = this._getGlobalDefines(),
          hT = void 0 !== kT.attributes;
        let NT = OT ?? kT.defines ?? "";
        tT && (NT += tT);
        const QT = jT + "+" + vT + "@" + NT;
        if (this._compiledEffects[QT]) {
          const TT = this._compiledEffects[QT];
          return fT && TT.isReady() && fT(TT), TT._refCount++, TT
        }
        this._gl && (0, MT.B)(this._gl);
        const ST = new lT.e(TT, kT, hT ? this : cT, KT, this, OT, yT, fT, xT, IT, QT, kT.shaderLanguage ?? AT, kT.extraInitializationsAsync ?? CT);
        return this._compiledEffects[QT] = ST, ST
      }
      _getShaderSource(TT) {
        return this._gl.getShaderSource(TT)
      }
      createRawShaderProgram(TT, kT, cT, lT) {
        let KT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const OT = (0, MT.B)(this._gl);
        return OT._contextWasLost = this._contextWasLost, OT.validateShaderPrograms = this.validateShaderPrograms, (0, MT.v)(TT, kT, cT, lT || this._gl, KT)
      }
      createShaderProgram(TT, kT, cT, lT, KT) {
        let OT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const yT = (0, MT.B)(this._gl);
        return yT._contextWasLost = this._contextWasLost, yT.validateShaderPrograms = this.validateShaderPrograms, (0, MT.w)(TT, kT, cT, lT, KT || this._gl, OT)
      }
      inlineShaderCode(TT) {
        return TT
      }
      createPipelineContext(TT) {
        if (this._gl) {
          (0, MT.B)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const kT = (0, MT.t)(this._gl, TT);
        return kT.engine = this, kT
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(TT) {
        return (0, MT.j)(TT, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(TT, kT, cT, lT, KT, OT, yT, fT, xT, IT, AT) {
        const CT = (0, MT.B)(this._gl);
        return CT._contextWasLost = this._contextWasLost, CT.validateShaderPrograms = this.validateShaderPrograms, CT._createShaderProgramInjection = this._createShaderProgram.bind(this), CT.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), CT.createShaderProgramInjection = this.createShaderProgram.bind(this), CT.loadFileInjection = this._loadFile.bind(this), (0, MT.p)(TT, kT, cT, lT, KT, OT, yT, fT, xT, IT, AT)
      }
      _createShaderProgram(TT, kT, cT, lT) {
        let KT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, MT.d)(TT, kT, cT, lT, KT)
      }
      _isRenderingStateCompiled(TT) {
        return !this._isDisposed && (0, MT.m)(TT, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(TT, kT) {
        (0, MT.f)(TT, kT)
      }
      getUniforms(TT, kT) {
        const cT = new Array,
          lT = TT;
        for (let MT = 0; MT < kT.length; MT++) cT.push(this._gl.getUniformLocation(lT.program, kT[MT]));
        return cT
      }
      getAttributes(TT, kT) {
        const cT = [],
          lT = TT;
        for (let KT = 0; KT < kT.length; KT++) try {
          cT.push(this._gl.getAttribLocation(lT.program, kT[KT]))
        } catch (MT) {
          cT.push(-1)
        }
        return cT
      }
      enableEffect(TT) {
        (TT = null !== TT && (0, OT.d)(TT) ? TT.effect : TT) && TT !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(TT), this._currentEffect = TT, TT.onBind && TT.onBind(TT), TT._onBindObservable && TT._onBindObservable.notifyObservers(TT))
      }
      setInt(TT, kT) {
        return !!TT && (this._gl.uniform1i(TT, kT), !0)
      }
      setInt2(TT, kT, cT) {
        return !!TT && (this._gl.uniform2i(TT, kT, cT), !0)
      }
      setInt3(TT, kT, cT, lT) {
        return !!TT && (this._gl.uniform3i(TT, kT, cT, lT), !0)
      }
      setInt4(TT, kT, cT, lT, MT) {
        return !!TT && (this._gl.uniform4i(TT, kT, cT, lT, MT), !0)
      }
      setIntArray(TT, kT) {
        return !!TT && (this._gl.uniform1iv(TT, kT), !0)
      }
      setIntArray2(TT, kT) {
        return !(!TT || kT.length % 2 !== 0) && (this._gl.uniform2iv(TT, kT), !0)
      }
      setIntArray3(TT, kT) {
        return !(!TT || kT.length % 3 !== 0) && (this._gl.uniform3iv(TT, kT), !0)
      }
      setIntArray4(TT, kT) {
        return !(!TT || kT.length % 4 !== 0) && (this._gl.uniform4iv(TT, kT), !0)
      }
      setUInt(TT, kT) {
        return !!TT && (this._gl.uniform1ui(TT, kT), !0)
      }
      setUInt2(TT, kT, cT) {
        return !!TT && (this._gl.uniform2ui(TT, kT, cT), !0)
      }
      setUInt3(TT, kT, cT, lT) {
        return !!TT && (this._gl.uniform3ui(TT, kT, cT, lT), !0)
      }
      setUInt4(TT, kT, cT, lT, MT) {
        return !!TT && (this._gl.uniform4ui(TT, kT, cT, lT, MT), !0)
      }
      setUIntArray(TT, kT) {
        return !!TT && (this._gl.uniform1uiv(TT, kT), !0)
      }
      setUIntArray2(TT, kT) {
        return !(!TT || kT.length % 2 !== 0) && (this._gl.uniform2uiv(TT, kT), !0)
      }
      setUIntArray3(TT, kT) {
        return !(!TT || kT.length % 3 !== 0) && (this._gl.uniform3uiv(TT, kT), !0)
      }
      setUIntArray4(TT, kT) {
        return !(!TT || kT.length % 4 !== 0) && (this._gl.uniform4uiv(TT, kT), !0)
      }
      setArray(TT, kT) {
        return !!TT && (!(kT.length < 1) && (this._gl.uniform1fv(TT, kT), !0))
      }
      setArray2(TT, kT) {
        return !(!TT || kT.length % 2 !== 0) && (this._gl.uniform2fv(TT, kT), !0)
      }
      setArray3(TT, kT) {
        return !(!TT || kT.length % 3 !== 0) && (this._gl.uniform3fv(TT, kT), !0)
      }
      setArray4(TT, kT) {
        return !(!TT || kT.length % 4 !== 0) && (this._gl.uniform4fv(TT, kT), !0)
      }
      setMatrices(TT, kT) {
        return !!TT && (this._gl.uniformMatrix4fv(TT, !1, kT), !0)
      }
      setMatrix3x3(TT, kT) {
        return !!TT && (this._gl.uniformMatrix3fv(TT, !1, kT), !0)
      }
      setMatrix2x2(TT, kT) {
        return !!TT && (this._gl.uniformMatrix2fv(TT, !1, kT), !0)
      }
      setFloat(TT, kT) {
        return !!TT && (this._gl.uniform1f(TT, kT), !0)
      }
      setFloat2(TT, kT, cT) {
        return !!TT && (this._gl.uniform2f(TT, kT, cT), !0)
      }
      setFloat3(TT, kT, cT, lT) {
        return !!TT && (this._gl.uniform3f(TT, kT, cT, lT), !0)
      }
      setFloat4(TT, kT, cT, lT, MT) {
        return !!TT && (this._gl.uniform4f(TT, kT, cT, lT, MT), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const TT = this._colorWrite;
          this._gl.colorMask(TT, TT, TT, TT)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(TT) {
        this.preventCacheWipeBetweenFrames && !TT || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), TT && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(TT, kT) {
        const cT = this._gl;
        let lT = cT.NEAREST,
          MT = cT.NEAREST,
          KT = !1;
        switch (TT) {
          case 11:
            lT = cT.LINEAR, MT = kT ? cT.LINEAR_MIPMAP_NEAREST : cT.LINEAR;
            break;
          case 3:
            lT = cT.LINEAR, KT = !0, MT = kT ? cT.LINEAR_MIPMAP_LINEAR : cT.LINEAR;
            break;
          case 8:
            KT = !0, lT = cT.NEAREST, MT = kT ? cT.NEAREST_MIPMAP_LINEAR : cT.NEAREST;
            break;
          case 4:
            lT = cT.NEAREST, MT = kT ? cT.NEAREST_MIPMAP_NEAREST : cT.NEAREST;
            break;
          case 5:
            lT = cT.NEAREST, MT = kT ? cT.LINEAR_MIPMAP_NEAREST : cT.LINEAR;
            break;
          case 6:
            KT = !0, lT = cT.NEAREST, MT = kT ? cT.LINEAR_MIPMAP_LINEAR : cT.LINEAR;
            break;
          case 7:
            lT = cT.NEAREST, MT = cT.LINEAR;
            break;
          case 1:
            lT = cT.NEAREST, MT = cT.NEAREST;
            break;
          case 9:
            lT = cT.LINEAR, MT = kT ? cT.NEAREST_MIPMAP_NEAREST : cT.NEAREST;
            break;
          case 10:
            KT = !0, lT = cT.LINEAR, MT = kT ? cT.NEAREST_MIPMAP_LINEAR : cT.NEAREST;
            break;
          case 2:
            lT = cT.LINEAR, MT = cT.LINEAR;
            break;
          case 12:
            lT = cT.LINEAR, MT = cT.NEAREST
        }
        return {
          min: MT,
          mag: lT,
          hasMipMaps: KT
        }
      }
      _createTexture() {
        const TT = this._gl.createTexture();
        if (!TT) throw new Error("Unable to create texture");
        return TT
      }
      _createHardwareTexture() {
        return new vT.b(this._createTexture(), this._gl)
      }
      _createInternalTexture(TT, kT) {
        let cT, lT, MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          KT = !1,
          OT = 0,
          fT = 3,
          xT = 5,
          IT = !1,
          AT = 1,
          CT = !1,
          jT = 0,
          vT = !1;
        void 0 !== kT && "object" === typeof kT ? (cT = !!kT.generateMipMaps, KT = !!kT.createMipMaps, OT = void 0 === kT.type ? 0 : kT.type, fT = void 0 === kT.samplingMode ? 3 : kT.samplingMode, xT = void 0 === kT.format ? 5 : kT.format, IT = void 0 !== kT.useSRGBBuffer && kT.useSRGBBuffer, AT = kT.samples ?? 1, lT = kT.label, CT = !!kT.createMSAATexture, jT = kT.comparisonFunction || 0, vT = !!kT.isCube) : cT = !!kT, IT && (IT = this._caps.supportSRGBBuffers && (this.qv > 1 || this.isWebGPU)), (1 !== OT || this._caps.textureFloatLinearFiltering) && (2 !== OT || this._caps.textureHalfFloatLinearFiltering) || (fT = 1), 1 !== OT || this._caps.textureFloat || (OT = 0, yT.e.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const hT = (0, QT.d)(xT),
          NT = (0, QT.c)(xT),
          ST = this._gl,
          DT = new tT.b(this, MT),
          aT = TT.width || TT,
          FT = TT.height || TT,
          rT = TT.depth || 0,
          PT = TT.layers || 0,
          wT = this._getSamplingParameters(fT, (cT || KT) && !hT),
          mT = 0 !== PT ? ST.TEXTURE_2D_ARRAY : 0 !== rT ? ST.TEXTURE_3D : vT ? ST.TEXTURE_CUBE_MAP : ST.TEXTURE_2D,
          bT = hT ? this._getInternalFormatFromDepthTextureFormat(xT, !0, NT) : this._getRGBABufferInternalSizedFormat(OT, xT, IT),
          zT = hT ? NT ? ST.DEPTH_STENCIL : ST.DEPTH_COMPONENT : this._getInternalFormat(xT),
          JT = hT ? this._getWebGLTextureTypeFromDepthTextureFormat(xT) : this._getWebGLTextureType(OT);
        if (this._bindTextureDirectly(mT, DT), 0 !== PT) DT.is2DArray = !0, ST.texImage3D(mT, 0, bT, aT, FT, PT, 0, zT, JT, null);
        else if (0 !== rT) DT.is3D = !0, ST.texImage3D(mT, 0, bT, aT, FT, rT, 0, zT, JT, null);
        else if (vT) {
          DT.isCube = !0;
          for (let TT = 0; TT < 6; TT++) ST.texImage2D(ST.TEXTURE_CUBE_MAP_POSITIVE_X + TT, 0, bT, aT, FT, 0, zT, JT, null)
        } else ST.texImage2D(mT, 0, bT, aT, FT, 0, zT, JT, null);
        if (ST.texParameteri(mT, ST.TEXTURE_MAG_FILTER, wT.mag), ST.texParameteri(mT, ST.TEXTURE_MIN_FILTER, wT.min), ST.texParameteri(mT, ST.TEXTURE_WRAP_S, ST.CLAMP_TO_EDGE), ST.texParameteri(mT, ST.TEXTURE_WRAP_T, ST.CLAMP_TO_EDGE), hT && this.qv > 1 && (0 === jT ? (ST.texParameteri(mT, ST.TEXTURE_COMPARE_FUNC, 515), ST.texParameteri(mT, ST.TEXTURE_COMPARE_MODE, ST.NONE)) : (ST.texParameteri(mT, ST.TEXTURE_COMPARE_FUNC, jT), ST.texParameteri(mT, ST.TEXTURE_COMPARE_MODE, ST.COMPARE_REF_TO_TEXTURE))), (cT || KT) && this._gl.generateMipmap(mT), this._bindTextureDirectly(mT, null), DT._useSRGBBuffer = IT, DT.baseWidth = aT, DT.baseHeight = FT, DT.width = aT, DT.height = FT, DT.depth = PT || rT, DT.isReady = !0, DT.samples = AT, DT.generateMipMaps = cT, DT.samplingMode = fT, DT.type = OT, DT.format = xT, DT.label = lT, DT.comparisonFunction = jT, this._internalTexturesCache.push(DT), CT) {
          let TT;
          if (TT = (0, QT.d)(DT.format) ? this._setupFramebufferDepthAttachments((0, QT.c)(DT.format), 19 !== DT.format, DT.width, DT.height, AT, DT.format, !0) : this._createRenderBuffer(DT.width, DT.height, AT, -1, this._getRGBABufferInternalSizedFormat(DT.type, DT.format, DT._useSRGBBuffer), -1), !TT) throw new Error("Unable to create render buffer");
          DT._autoMSAAManagement = !0;
          let kT = DT._hardwareTexture;
          kT || (kT = DT._hardwareTexture = this._createHardwareTexture()), kT.addMSAARenderBuffer(TT)
        }
        return DT
      }
      _getUseSRGBBuffer(TT, kT) {
        return TT && this._caps.supportSRGBBuffers && (this.qv > 1 || kT)
      }
      createTexture(TT, kT, cT, lT) {
        var MT = this;
        let KT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          OT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          yT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          fT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          xT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          IT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          AT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          CT = arguments.length > 11 ? arguments[11] : void 0,
          jT = arguments.length > 12 ? arguments[12] : void 0,
          vT = arguments.length > 13 ? arguments[13] : void 0,
          hT = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(TT, kT, cT, lT, KT, OT, yT, (function() {
          for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
          return MT._prepareWebGLTexture(...kT, IT)
        }), ((TT, kT, cT, MT, KT, OT) => {
          const yT = this._gl,
            fT = cT.width === TT && cT.height === kT;
          KT._creationFlags = vT ?? 0;
          const xT = this._getTexImageParametersForCreateTexture(KT.format, KT._useSRGBBuffer);
          if (fT) return yT.texImage2D(yT.TEXTURE_2D, 0, xT.internalFormat, xT.format, xT.type, cT), !1;
          const IT = this._caps.maxTextureSize;
          if (cT.width > IT || cT.height > IT || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = TT, this._workingCanvas.height = kT, this._workingContext.drawImage(cT, 0, 0, cT.width, cT.height, 0, 0, TT, kT), yT.texImage2D(yT.TEXTURE_2D, 0, xT.internalFormat, xT.format, xT.type, this._workingCanvas), KT.width = TT, KT.height = kT, !1);
          {
            const TT = new tT.b(this, 2);
            this._bindTextureDirectly(yT.TEXTURE_2D, TT, !0), yT.texImage2D(yT.TEXTURE_2D, 0, xT.internalFormat, xT.format, xT.type, cT), this._rescaleTexture(TT, KT, lT, xT.format, (() => {
              this._releaseTexture(TT), this._bindTextureDirectly(yT.TEXTURE_2D, KT, !0), OT()
            }))
          }
          return !0
        }), fT, xT, IT, AT, CT, jT, hT)
      }
      _getTexImageParametersForCreateTexture(TT, kT) {
        let cT, lT;
        return 1 === this.qv ? (cT = this._getInternalFormat(TT, kT), lT = cT) : (cT = this._getInternalFormat(TT, !1), lT = this._getRGBABufferInternalSizedFormat(0, TT, kT)), {
          internalFormat: lT,
          format: cT,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(TT, kT, cT, lT, MT) {}
      _unpackFlipY(TT) {
        this._unpackFlipYCached !== TT && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, TT ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = TT))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(TT) {
        return TT.isCube ? this._gl.TEXTURE_CUBE_MAP : TT.is3D ? this._gl.TEXTURE_3D : TT.is2DArray || TT.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const lT = this._getTextureTarget(kT),
          MT = this._getSamplingParameters(TT, kT.useMipMaps || cT);
        this._setTextureParameterInteger(lT, this._gl.TEXTURE_MAG_FILTER, MT.mag, kT), this._setTextureParameterInteger(lT, this._gl.TEXTURE_MIN_FILTER, MT.min), cT && MT.hasMipMaps && (kT.generateMipMaps = !0, this._gl.generateMipmap(lT)), this._bindTextureDirectly(lT, null), kT.samplingMode = TT
      }
      updateTextureDimensions(TT, kT, cT) {}
      updateTextureWrappingMode(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const MT = this._getTextureTarget(TT);
        null !== kT && (this._setTextureParameterInteger(MT, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(kT), TT), TT._cachedWrapU = kT), null !== cT && (this._setTextureParameterInteger(MT, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(cT), TT), TT._cachedWrapV = cT), (TT.is2DArray || TT.is3D) && null !== lT && (this._setTextureParameterInteger(MT, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(lT), TT), TT._cachedWrapR = lT), this._bindTextureDirectly(MT, null)
      }
      _uploadCompressedDataToTextureDirectly(TT, kT, cT, lT, MT) {
        let KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          OT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const yT = this._gl;
        let fT = yT.TEXTURE_2D;
        if (TT.isCube && (fT = yT.TEXTURE_CUBE_MAP_POSITIVE_X + KT), TT._useSRGBBuffer) switch (kT) {
          case 37492:
          case 36196:
            this._caps.etc2 ? kT = yT.COMPRESSED_SRGB8_ETC2 : TT._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? kT = yT.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : TT._useSRGBBuffer = !1;
            break;
          case 36492:
            kT = yT.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            kT = yT.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            kT = yT.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            kT = yT.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            kT = yT.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            kT = yT.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            kT = yT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            kT = yT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            kT = yT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            kT = yT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            kT = yT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            kT = yT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            kT = yT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            kT = yT.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            kT = yT.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? kT = yT.COMPRESSED_SRGB_S3TC_DXT1_EXT : TT._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? kT = yT.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : TT._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? kT = yT.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : TT._useSRGBBuffer = !1;
            break;
          default:
            TT._useSRGBBuffer = !1
        }
        if (TT.generateMipMaps) {
          const KT = TT._hardwareTexture;
          KT.memoryAllocated || (yT.texStorage2D(TT.isCube ? yT.TEXTURE_CUBE_MAP : yT.TEXTURE_2D, Math.floor(Math.log2(Math.max(cT, lT))) + 1, kT, TT.width, TT.height), KT.memoryAllocated = !0), this._gl.compressedTexSubImage2D(fT, OT, 0, 0, cT, lT, kT, MT)
        } else this._gl.compressedTexImage2D(fT, OT, kT, cT, lT, 0, MT)
      }
      _uploadDataToTextureDirectly(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          MT = arguments.length > 4 ? arguments[4] : void 0,
          KT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const OT = this._gl,
          yT = this._getWebGLTextureType(TT.type),
          fT = this._getInternalFormat(TT.format),
          xT = void 0 === MT ? this._getRGBABufferInternalSizedFormat(TT.type, TT.format, TT._useSRGBBuffer) : this._getInternalFormat(MT, TT._useSRGBBuffer);
        this._unpackFlipY(TT.invertY);
        let IT = OT.TEXTURE_2D;
        TT.isCube && (IT = OT.TEXTURE_CUBE_MAP_POSITIVE_X + cT);
        const AT = Math.round(Math.log(TT.width) * Math.LOG2E),
          CT = Math.round(Math.log(TT.height) * Math.LOG2E),
          jT = KT ? TT.width : Math.pow(2, Math.max(AT - lT, 0)),
          vT = KT ? TT.height : Math.pow(2, Math.max(CT - lT, 0));
        OT.texImage2D(IT, lT, xT, jT, vT, 0, fT, yT, kT)
      }
      updateTextureData(TT, kT, cT, lT, MT, KT) {
        let OT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          yT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          fT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const xT = this._gl,
          IT = this._getWebGLTextureType(TT.type),
          AT = this._getInternalFormat(TT.format);
        this._unpackFlipY(TT.invertY);
        let CT = xT.TEXTURE_2D,
          jT = xT.TEXTURE_2D;
        TT.isCube && (jT = xT.TEXTURE_CUBE_MAP_POSITIVE_X + OT, CT = xT.TEXTURE_CUBE_MAP), this._bindTextureDirectly(CT, TT, !0), xT.texSubImage2D(jT, yT, cT, lT, MT, KT, AT, IT, kT), fT && this._gl.generateMipmap(jT), this._bindTextureDirectly(CT, null)
      }
      _uploadArrayBufferViewToTexture(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const MT = this._gl,
          KT = TT.isCube ? MT.TEXTURE_CUBE_MAP : MT.TEXTURE_2D;
        this._bindTextureDirectly(KT, TT, !0), this._uploadDataToTextureDirectly(TT, kT, cT, lT), this._bindTextureDirectly(KT, null, !0)
      }
      _prepareWebGLTextureContinuation(TT, kT, cT, lT, MT) {
        const KT = this._gl;
        if (!KT) return;
        const OT = this._getSamplingParameters(MT, !cT);
        KT.texParameteri(KT.TEXTURE_2D, KT.TEXTURE_MAG_FILTER, OT.mag), KT.texParameteri(KT.TEXTURE_2D, KT.TEXTURE_MIN_FILTER, OT.min), cT || lT || KT.generateMipmap(KT.TEXTURE_2D), this._bindTextureDirectly(KT.TEXTURE_2D, null), kT && kT.removePendingData(TT), TT.onLoadedObservable.notifyObservers(TT), TT.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT) {
        const IT = this.getCaps().maxTextureSize,
          AT = Math.min(IT, this.needPOTTextures ? (0, jT.c)(lT.width, IT) : lT.width),
          CT = Math.min(IT, this.needPOTTextures ? (0, jT.c)(lT.height, IT) : lT.height),
          vT = this._gl;
        vT && (TT._hardwareTexture ? (this._bindTextureDirectly(vT.TEXTURE_2D, TT, !0), this._unpackFlipY(void 0 === MT || !!MT), TT.baseWidth = lT.width, TT.baseHeight = lT.height, TT.width = AT, TT.height = CT, TT.isReady = !0, TT.type = -1 !== TT.type ? TT.type : 0, TT.format = -1 !== TT.format ? TT.format : xT ?? (".jpg" !== kT || TT._useSRGBBuffer ? 5 : 4), yT(AT, CT, lT, kT, TT, (() => {
          this._prepareWebGLTextureContinuation(TT, cT, KT, OT, fT)
        })) || this._prepareWebGLTextureContinuation(TT, cT, KT, OT, fT)) : cT && cT.removePendingData(TT))
      }
      _getInternalFormatFromDepthTextureFormat(TT, kT, cT) {
        const lT = this._gl;
        if (!kT) return lT.STENCIL_INDEX8;
        let MT = cT ? lT.DEPTH_STENCIL : lT.DEPTH_COMPONENT;
        return this.qv > 1 ? 15 === TT ? MT = lT.DEPTH_COMPONENT16 : 16 === TT ? MT = lT.DEPTH_COMPONENT24 : 17 === TT || 13 === TT ? MT = cT ? lT.DEPTH24_STENCIL8 : lT.DEPTH_COMPONENT24 : 14 === TT ? MT = lT.DEPTH_COMPONENT32F : 18 === TT && (MT = cT ? lT.DEPTH32F_STENCIL8 : lT.DEPTH_COMPONENT32F) : MT = lT.DEPTH_COMPONENT16, MT
      }
      _getWebGLTextureTypeFromDepthTextureFormat(TT) {
        const kT = this._gl;
        let cT = kT.UNSIGNED_INT;
        return 15 === TT ? cT = kT.UNSIGNED_SHORT : 17 === TT || 13 === TT ? cT = kT.UNSIGNED_INT_24_8 : 14 === TT ? cT = kT.FLOAT : 18 === TT ? cT = kT.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === TT && (cT = kT.UNSIGNED_BYTE), cT
      }
      _setupFramebufferDepthAttachments(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          KT = arguments.length > 5 ? arguments[5] : void 0,
          OT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const yT = this._gl;
        KT = KT ?? (TT ? 13 : 14);
        const fT = this._getInternalFormatFromDepthTextureFormat(KT, kT, TT);
        return TT && kT ? this._createRenderBuffer(cT, lT, MT, yT.DEPTH_STENCIL, fT, OT ? -1 : yT.DEPTH_STENCIL_ATTACHMENT) : kT ? this._createRenderBuffer(cT, lT, MT, fT, fT, OT ? -1 : yT.DEPTH_ATTACHMENT) : TT ? this._createRenderBuffer(cT, lT, MT, fT, fT, OT ? -1 : yT.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(TT, kT, cT, lT, MT, KT) {
        let OT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const yT = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(yT, TT, kT, cT, lT, MT, KT, OT)
      }
      _updateRenderBuffer(TT, kT, cT, lT, MT, KT, OT) {
        let yT = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const fT = this._gl;
        return fT.bindRenderbuffer(fT.RENDERBUFFER, TT), lT > 1 && fT.renderbufferStorageMultisample ? fT.renderbufferStorageMultisample(fT.RENDERBUFFER, lT, KT, kT, cT) : fT.renderbufferStorage(fT.RENDERBUFFER, MT, kT, cT), -1 !== OT && fT.framebufferRenderbuffer(fT.FRAMEBUFFER, OT, fT.RENDERBUFFER, TT), yT && fT.bindRenderbuffer(fT.RENDERBUFFER, null), TT
      }
      _releaseTexture(TT) {
        this._deleteTexture(TT._hardwareTexture), this.unbindAllTextures();
        const kT = this._internalTexturesCache.indexOf(TT); - 1 !== kT && this._internalTexturesCache.splice(kT, 1), TT._lodTextureHigh && TT._lodTextureHigh.dispose(), TT._lodTextureMid && TT._lodTextureMid.dispose(), TT._lodTextureLow && TT._lodTextureLow.dispose(), TT._irradianceTexture && TT._irradianceTexture.dispose()
      }
      _deleteTexture(TT) {
        TT?.release()
      }
      _setProgram(TT) {
        this._currentProgram !== TT && ((0, MT.r)(TT, this._gl), this._currentProgram = TT)
      }
      bindSamplers(TT) {
        const kT = TT.getPipelineContext();
        this._setProgram(kT.program);
        const cT = TT.getSamplers();
        for (let lT = 0; lT < cT.length; lT++) {
          const kT = TT.getUniform(cT[lT]);
          kT && (this._boundUniforms[lT] = kT)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          MT = !1;
        const KT = kT && kT._associatedChannel > -1;
        cT && KT && (this._activeChannel = kT._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== kT || lT) {
          if (this._activateCurrentTexture(), kT && kT.isMultiview) throw yT.e.Error(["_bindTextureDirectly called with a multiview texture!", TT, kT]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(TT, kT?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = kT, kT && (kT._associatedChannel = this._activeChannel)
        } else cT && (MT = !0, this._activateCurrentTexture());
        return KT && !cT && this._bindSamplerUniformToChannel(kT._associatedChannel, this._activeChannel), MT
      }
      _bindTexture(TT, kT, cT) {
        if (void 0 === TT) return;
        kT && (kT._associatedChannel = TT), this._activeChannel = TT;
        const lT = kT ? this._getTextureTarget(kT) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(lT, kT)
      }
      unbindAllTextures() {
        for (let TT = 0; TT < this._maxSimultaneousTextures; TT++) this._activeChannel = TT, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.qv > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(TT, kT, cT, lT) {
        void 0 !== TT && (kT && (this._boundUniforms[TT] = kT), this._setTexture(TT, cT))
      }
      _bindSamplerUniformToChannel(TT, kT) {
        const cT = this._boundUniforms[TT];
        cT && cT._currentState !== kT && (this._gl.uniform1i(cT, kT), cT._currentState = kT)
      }
      _getTextureWrapMode(TT) {
        switch (TT) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(TT, kT) {
        let cT, lT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          MT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!kT) return null != this._boundTexturesCache[TT] && (this._activeChannel = TT, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.qv > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (kT.video) {
          this._activeChannel = TT;
          const cT = kT.getInternalTexture();
          cT && (cT._associatedChannel = TT), kT.update()
        } else if (4 === kT.delayLoadState) return kT.delayLoad(), !1;
        cT = MT ? kT.depthStencilTexture : kT.isReady() ? kT.getInternalTexture() : kT.isCube ? this.emptyCubeTexture : kT.is3D ? this.emptyTexture3D : kT.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !lT && cT && (cT._associatedChannel = TT);
        let KT = !0;
        this._boundTexturesCache[TT] === cT && (lT || this._bindSamplerUniformToChannel(cT._associatedChannel, TT), KT = !1), this._activeChannel = TT;
        const OT = this._getTextureTarget(cT);
        if (KT && this._bindTextureDirectly(OT, cT, lT), cT && !cT.isMultiview) {
          if (cT.isCube && cT._cachedCoordinatesMode !== kT.coordinatesMode) {
            cT._cachedCoordinatesMode = kT.coordinatesMode;
            const TT = 3 !== kT.coordinatesMode && 5 !== kT.coordinatesMode ? 1 : 0;
            kT.wrapU = TT, kT.wrapV = TT
          }
          cT._cachedWrapU !== kT.wrapU && (cT._cachedWrapU = kT.wrapU, this._setTextureParameterInteger(OT, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(kT.wrapU), cT)), cT._cachedWrapV !== kT.wrapV && (cT._cachedWrapV = kT.wrapV, this._setTextureParameterInteger(OT, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(kT.wrapV), cT)), cT.is3D && cT._cachedWrapR !== kT.wrapR && (cT._cachedWrapR = kT.wrapR, this._setTextureParameterInteger(OT, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(kT.wrapR), cT)), this._setAnisotropicLevel(OT, cT, kT.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(TT, kT, cT, lT) {
        if (void 0 !== TT && kT) {
          this._textureUnits && this._textureUnits.length === cT.length || (this._textureUnits = new Int32Array(cT.length));
          for (let kT = 0; kT < cT.length; kT++) {
            const lT = cT[kT].getInternalTexture();
            lT ? (this._textureUnits[kT] = TT + kT, lT._associatedChannel = TT + kT) : this._textureUnits[kT] = -1
          }
          this._gl.uniform1iv(kT, this._textureUnits);
          for (let TT = 0; TT < cT.length; TT++) this._setTexture(this._textureUnits[TT], cT[TT], !0)
        }
      }
      _setAnisotropicLevel(TT, kT, cT) {
        const lT = this._caps.textureAnisotropicFilterExtension;
        11 !== kT.samplingMode && 3 !== kT.samplingMode && 2 !== kT.samplingMode && (cT = 1), lT && kT._cachedAnisotropicFilteringLevel !== cT && (this._setTextureParameterFloat(TT, lT.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(cT, this._caps.maxAnisotropy), kT), kT._cachedAnisotropicFilteringLevel = cT)
      }
      _setTextureParameterFloat(TT, kT, cT, lT) {
        this._bindTextureDirectly(TT, lT, !0, !0), this._gl.texParameterf(TT, kT, cT)
      }
      _setTextureParameterInteger(TT, kT, cT, lT) {
        lT && this._bindTextureDirectly(TT, lT, !0, !0), this._gl.texParameteri(TT, kT, cT)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let TT = 0; TT < this._caps.maxVertexAttribs; TT++) this.disableAttributeByIndex(TT)
        } else
          for (let TT = 0, kT = this._vertexAttribArraysEnabled.length; TT < kT; TT++) TT >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[TT] || this.disableAttributeByIndex(TT)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, fT.i)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, MT.y)(this._gl)
      }
      attachContextLostEvent(TT) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", TT, !1)
      }
      attachContextRestoredEvent(TT) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", TT, !1)
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
      _canRenderToFramebuffer(TT) {
        const kT = this._gl;
        for (; kT.getError() !== kT.NO_ERROR;);
        let cT = !0;
        const lT = kT.createTexture();
        kT.bindTexture(kT.TEXTURE_2D, lT), kT.texImage2D(kT.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(TT), 1, 1, 0, kT.RGBA, this._getWebGLTextureType(TT), null), kT.texParameteri(kT.TEXTURE_2D, kT.TEXTURE_MIN_FILTER, kT.NEAREST), kT.texParameteri(kT.TEXTURE_2D, kT.TEXTURE_MAG_FILTER, kT.NEAREST);
        const MT = kT.createFramebuffer();
        kT.bindFramebuffer(kT.FRAMEBUFFER, MT), kT.framebufferTexture2D(kT.FRAMEBUFFER, kT.COLOR_ATTACHMENT0, kT.TEXTURE_2D, lT, 0);
        const KT = kT.checkFramebufferStatus(kT.FRAMEBUFFER);
        if (cT = cT && KT === kT.FRAMEBUFFER_COMPLETE, cT = cT && kT.getError() === kT.NO_ERROR, cT && (kT.clear(kT.COLOR_BUFFER_BIT), cT = cT && kT.getError() === kT.NO_ERROR), cT) {
          kT.bindFramebuffer(kT.FRAMEBUFFER, null);
          const TT = kT.RGBA,
            lT = kT.UNSIGNED_BYTE,
            MT = new Uint8Array(4);
          kT.readPixels(0, 0, 1, 1, TT, lT, MT), cT = cT && kT.getError() === kT.NO_ERROR
        }
        for (kT.deleteTexture(lT), kT.deleteFramebuffer(MT), kT.bindFramebuffer(kT.FRAMEBUFFER, null); !cT && kT.getError() !== kT.NO_ERROR;);
        return cT
      }
      _getWebGLTextureType(TT) {
        if (1 === this._webGLVersion) {
          switch (TT) {
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
        switch (TT) {
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
      _getInternalFormat(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = kT ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (TT) {
          case 0:
            cT = this._gl.ALPHA;
            break;
          case 1:
            cT = this._gl.LUMINANCE;
            break;
          case 2:
            cT = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            cT = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            cT = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            cT = kT ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            cT = kT ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (TT) {
          case 8:
            cT = this._gl.RED_INTEGER;
            break;
          case 9:
            cT = this._gl.RG_INTEGER;
            break;
          case 10:
            cT = this._gl.RGB_INTEGER;
            break;
          case 11:
            cT = this._gl.RGBA_INTEGER
        }
        return cT
      }
      _getRGBABufferInternalSizedFormat(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== kT) switch (kT) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return cT ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (TT) {
          case 3:
            switch (kT) {
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
            switch (kT) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return cT ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return cT ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (kT) {
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
            switch (kT) {
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
            switch (kT) {
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
            switch (kT) {
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
            switch (kT) {
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
            switch (kT) {
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
            switch (kT) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return cT ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(TT, kT, cT, lT) {
        let MT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          KT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          OT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const fT = MT ? 4 : 3,
          xT = MT ? this._gl.RGBA : this._gl.RGB,
          IT = cT * lT * fT;
        if (OT) {
          if (OT.length < IT) return yT.e.Error(`Data buffer is too small to store the read pixels (${OT.length} should be more than ${IT})`), Promise.resolve(OT)
        } else OT = new Uint8Array(IT);
        return KT && this.flushFramebuffer(), this._gl.readPixels(TT, kT, cT, lT, xT, this._gl.UNSIGNED_BYTE, OT), Promise.resolve(OT)
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
          const TT = KT.d._CreateCanvas(1, 1),
            kT = TT.getContext("webgl") || TT.getContext("experimental-webgl");
          this._IsSupported = null != kT && !!globalThis.WebGLRenderingContext
        } catch (TT) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const TT = KT.d._CreateCanvas(1, 1),
            kT = TT.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || TT.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !kT
        } catch (TT) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    aT._TempClearColorUint32 = new Uint32Array(4), aT._TempClearColorInt32 = new Int32Array(4), aT._TempClearColorFloat32 = new Float32Array(4), aT.ExceptionList = [{
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
    }], aT._ConcatenateShader = hT.i, aT._IsSupported = null, aT._HasMajorPerformanceCaveat = null
  },
  39819: (TT, kT, cT) => {
    var lT;
    cT.d(kT, {
        d: () => MT
      }),
      function(TT) {
        TT[TT.PointerMove = 0] = "PointerMove", TT[TT.PointerDown = 1] = "PointerDown", TT[TT.PointerUp = 2] = "PointerUp"
      }(lT || (lT = {}));
    class MT {}
    MT.DOM_DELTA_PIXEL = 0, MT.DOM_DELTA_LINE = 1, MT.DOM_DELTA_PAGE = 2
  },
  39814: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT,
      d: () => KT,
      f: () => MT
    });
    class lT {}
    lT.KEYDOWN = 1, lT.KEYUP = 2;
    class MT {
      constructor(TT, kT) {
        this.type = TT, this.event = kT
      }
    }
    class KT extends MT {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(TT) {
        this.skipOnKeyboardObservable = TT
      }
      constructor(TT, kT) {
        super(TT, kT), this.type = TT, this.event = kT, this.skipOnKeyboardObservable = !1
      }
    }
  },
  39812: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT,
      g: () => OT,
      h: () => yT
    });
    var lT = cT(36892);
    class MT {}
    MT.POINTERDOWN = 1, MT.POINTERUP = 2, MT.POINTERMOVE = 4, MT.POINTERWHEEL = 8, MT.POINTERPICK = 16, MT.POINTERTAP = 32, MT.POINTERDOUBLETAP = 64;
    class KT {
      constructor(TT, kT) {
        this.type = TT, this.event = kT
      }
    }
    class OT extends KT {
      constructor(TT, kT, cT, MT) {
        super(TT, kT), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new lT.i(cT, MT)
      }
    }
    class yT extends KT {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(TT, kT), this._pickInfo = cT, this._inputManager = lT
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  39829: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT
    });
    class lT {
      static CompareLightsPriority(TT, kT) {
        return TT.shadowEnabled !== kT.shadowEnabled ? (kT.shadowEnabled ? 1 : 0) - (TT.shadowEnabled ? 1 : 0) : kT.renderPriority - TT.renderPriority
      }
    }
    lT.FALLOFF_DEFAULT = 0, lT.FALLOFF_PHYSICAL = 1, lT.FALLOFF_GLTF = 2, lT.FALLOFF_STANDARD = 3, lT.LIGHTMAP_DEFAULT = 0, lT.LIGHTMAP_SPECULAR = 1, lT.LIGHTMAP_SHADOWSONLY = 2, lT.INTENSITYMODE_AUTOMATIC = 0, lT.INTENSITYMODE_LUMINOUSPOWER = 1, lT.INTENSITYMODE_LUMINOUSINTENSITY = 2, lT.INTENSITYMODE_ILLUMINANCE = 3, lT.INTENSITYMODE_LUMINANCE = 4, lT.LIGHTTYPEID_POINTLIGHT = 0, lT.LIGHTTYPEID_DIRECTIONALLIGHT = 1, lT.LIGHTTYPEID_SPOTLIGHT = 2, lT.LIGHTTYPEID_HEMISPHERICLIGHT = 3, lT.LIGHTTYPEID_RECT_AREALIGHT = 4, lT.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  39454: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT
    });
    var lT, MT = cT(36932),
      KT = cT(39458);
    ! function(TT) {
      TT[TT.Unknown = 0] = "Unknown", TT[TT.Url = 1] = "Url", TT[TT.Temp = 2] = "Temp", TT[TT.Raw = 3] = "Raw", TT[TT.Dynamic = 4] = "Dynamic", TT[TT.RenderTarget = 5] = "RenderTarget", TT[TT.MultiRenderTarget = 6] = "MultiRenderTarget", TT[TT.Cube = 7] = "Cube", TT[TT.CubeRaw = 8] = "CubeRaw", TT[TT.CubePrefiltered = 9] = "CubePrefiltered", TT[TT.Raw3D = 10] = "Raw3D", TT[TT.Raw2DArray = 11] = "Raw2DArray", TT[TT.DepthStencil = 12] = "DepthStencil", TT[TT.CubeRawRGBD = 13] = "CubeRawRGBD", TT[TT.Depth = 14] = "Depth", TT[TT.External = 15] = "External"
    }(lT || (lT = {}));
    class OT extends KT.b {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(TT) {
        this._useMipMaps = TT
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(TT) {
        this._uniqueId = TT
      }
      Dv() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new MT.b, this.onErrorObservable = new MT.b, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = TT, this._source = kT, this._uniqueId = OT._Counter++, cT || (this._hardwareTexture = TT._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, TT, kT, cT), this.width = TT, this.height = kT, this.depth = cT, this.baseWidth = TT, this.baseHeight = kT, this.baseDepth = cT, this._size = TT * kT * cT
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const TT = this.onRebuildCallback(this),
            kT = kT => {
              kT._swapAndDie(this, !1), this.isReady = TT.isReady
            };
          return void(TT.isAsync ? TT.proxy.then(kT) : kT(TT.proxy))
        }
        let TT;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(TT = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (TT => {
              TT._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (TT = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), TT._swapAndDie(this, !1), this._bufferViewArray)
              for (let TT = 0; TT < this._bufferViewArray.length; TT++) {
                const kT = this._bufferViewArray[TT];
                kT && this._engine.updateRawTexture(this, kT, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, TT)
              }
            this.isReady = !0;
            break;
          case 10:
            TT = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), TT._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (TT = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), TT._swapAndDie(this, !1), this._bufferViewArray)
              for (let TT = 0; TT < this._bufferViewArray.length; TT++) {
                const kT = this._bufferViewArray[TT];
                kT && this._engine.updateRawTexture2DArray(this, kT, this.format, this.invertY, this._compression, this.type, TT)
              }
            this.isReady = !0;
            break;
          case 4:
            TT = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), TT._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(TT = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              TT._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            TT = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), TT._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return TT = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (TT => {
              TT && TT._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(TT._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(TT._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), TT._hardwareTexture = this._hardwareTexture, TT._setUniqueId(OT._Counter++), kT && (TT._isRGBD = this._isRGBD), this._lodTextureHigh && (TT._lodTextureHigh && TT._lodTextureHigh.dispose(), TT._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (TT._lodTextureMid && TT._lodTextureMid.dispose(), TT._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (TT._lodTextureLow && TT._lodTextureLow.dispose(), TT._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (TT._irradianceTexture && TT._irradianceTexture.dispose(), TT._irradianceTexture = this._irradianceTexture);
        const cT = this._engine.getLoadedTexturesCache();
        let lT = cT.indexOf(this); - 1 !== lT && cT.splice(lT, 1), lT = cT.indexOf(TT), -1 === lT && cT.push(TT)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    OT._Counter = 0
  },
  39562: (TT, kT, cT) => {
    function lT(TT) {
      return 13 === TT || 14 === TT || 15 === TT || 16 === TT || 17 === TT || 18 === TT || 19 === TT
    }

    function MT(TT) {
      return 8 === TT || 9 === TT || 10 === TT || 11 === TT
    }

    function KT(TT) {
      return 0 === TT || 5 === TT || 7 === TT || 11 === TT
    }

    function OT(TT) {
      return 13 === TT || 17 === TT || 18 === TT || 19 === TT
    }
    cT.d(kT, {
      c: () => OT,
      d: () => lT,
      h: () => MT,
      j: () => KT
    })
  },
  39458: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT
    });
    class lT {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(TT) {
        this._cachedWrapU = TT
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(TT) {
        this._cachedWrapV = TT
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(TT) {
        this._cachedWrapR = TT
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(TT) {
        this._cachedAnisotropicFilteringLevel = TT
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(TT) {
        this._comparisonFunction = TT
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(TT) {
        this._useMipMaps = TT
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = TT, this._cachedWrapV = kT, this._cachedWrapR = cT, this._cachedAnisotropicFilteringLevel = lT, this.samplingMode = MT, this._comparisonFunction = KT, this
      }
      compareSampler(TT) {
        return this._cachedWrapU === TT._cachedWrapU && this._cachedWrapV === TT._cachedWrapV && this._cachedWrapR === TT._cachedWrapR && this._cachedAnisotropicFilteringLevel === TT._cachedAnisotropicFilteringLevel && this.samplingMode === TT.samplingMode && this._comparisonFunction === TT._comparisonFunction && this._useMipMaps === TT._useMipMaps
      }
    }
  },
  39755: (TT, kT, cT) => {
    function lT(TT) {
      TT.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    cT.d(kT, {
      d: () => lT
    })
  },
  39533: (TT, kT, cT) => {
    function lT(TT) {
      return void 0 === TT.getPipelineContext
    }
    cT.d(kT, {
      d: () => lT
    })
  },
  39936: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT
    });
    var lT = cT(39514);
    class MT {
      static GetEffect(TT) {
        return void 0 === TT.getPipelineContext ? TT.effect : TT
      }
      constructor(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = TT.createDrawContext(), kT && (this.materialContext = TT.createMaterialContext())
      }
      setEffect(TT, kT) {
        let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        cT || this.effect === TT || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = TT, void 0 !== kT && (this.defines = kT), cT && this.drawContext?.reset()
      }
      dispose() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const kT = this.effect;
          TT ? kT.dispose() : lT.e.SetImmediate((() => {
            kT.Dv().onEndFrameObservable.addOnce((() => {
              kT.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39477: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => AT,
      h: () => jT,
      l: () => xT,
      o: () => IT
    });
    var lT = cT(39482),
      MT = cT(39489),
      KT = cT(39474),
      OT = cT(38512),
      yT = cT(39509),
      fT = cT(39496);

    function xT(TT, kT) {
      return (0, MT.B)(kT).cachedPipelines[TT]
    }

    function IT(TT) {
      const kT = TT._name,
        cT = TT.context;
      if (kT && cT) {
        const TT = (0, MT.B)(cT),
          lT = TT.cachedPipelines[kT];
        lT?.dispose(), delete TT.cachedPipelines[kT]
      }
    }

    function AT(TT, kT, cT, MT, KT, OT, fT) {
      let xT, IT;
      const AT = (0, lT.i)() ? OT?.getHostDocument() : null;
      xT = "string" === typeof kT ? kT : "string" === typeof kT.vertexSource ? "source:" + kT.vertexSource : "string" === typeof kT.vertexElement ? AT?.getElementById(kT.vertexElement) || kT.vertexElement : kT.vertex || kT, IT = "string" === typeof kT ? kT : "string" === typeof kT.fragmentSource ? "source:" + kT.fragmentSource : "string" === typeof kT.fragmentElement ? AT?.getElementById(kT.fragmentElement) || kT.fragmentElement : kT.fragment || kT;
      const jT = [void 0, void 0],
        vT = () => {
          if (jT[0] && jT[1]) {
            const [lT, xT] = jT;
            (0, yT.e)(TT), (0, yT.k)(lT, TT, ((lT, IT) => {
              fT && (fT._vertexSourceCodeBeforeMigration = IT), cT && (lT = cT("vertex", lT)), TT.isFragment = !0, (0, yT.k)(xT, TT, ((OT, xT) => {
                fT && (fT._fragmentSourceCodeBeforeMigration = xT), cT && (OT = cT("fragment", OT));
                const IT = (0, yT.c)(lT, OT, TT);
                TT = null;
                const AT = function(TT, kT, cT, lT) {
                  if (cT) {
                    return {
                      vertexSourceCode: (1 === lT ? "//" : "") + "#define SHADER_NAME vertex:" + (cT.vertexElement || cT.vertex || cT.spectorName || cT) + "\n" + TT,
                      fragmentSourceCode: (1 === lT ? "//" : "") + "#define SHADER_NAME fragment:" + (cT.fragmentElement || cT.fragment || cT.spectorName || cT) + "\n" + kT
                    }
                  }
                  return {
                    vertexSourceCode: TT,
                    fragmentSourceCode: kT
                  }
                }(IT.vertexCode, IT.fragmentCode, kT, KT);
                MT?.(AT.vertexSourceCode, AT.fragmentSourceCode)
              }), OT)
            }), OT)
          }
        };
      CT(xT, "Vertex", "", (TT => {
        fT && (fT._rawVertexSourceCode = TT), jT[0] = TT, vT()
      }), KT), CT(IT, "Fragment", "Pixel", (TT => {
        fT && (fT._rawFragmentSourceCode = TT), jT[1] = TT, vT()
      }), KT)
    }

    function CT(TT, kT, cT, MT, OT, yT) {
      if ("undefined" !== typeof HTMLElement && TT instanceof HTMLElement) {
        return void MT((0, lT.b)(TT))
      }
      if ("source:" === TT.substring(0, 7)) return void MT(TT.substring(7));
      if ("base64:" === TT.substring(0, 7)) {
        return void MT(window.atob(TT.substring(7)))
      }
      const xT = KT.d.GetShadersStore(OT);
      if (xT[TT + kT + "Shader"]) return void MT(xT[TT + kT + "Shader"]);
      if (cT && xT[TT + cT + "Shader"]) return void MT(xT[TT + cT + "Shader"]);
      let IT;
      if (IT = "." === TT[0] || "/" === TT[0] || TT.indexOf("http") > -1 ? TT : KT.d.GetShadersRepository(OT) + TT, !(yT = yT || fT.m)) throw new Error("loadFileInjection is not defined");
      yT(IT + "." + kT.toLowerCase() + ".fx", MT)
    }
    const jT = (TT, kT, cT, lT) => {
      try {
        const KT = TT.context ? (0, MT.B)(TT.context) : null;
        KT && (KT.disableParallelShaderCompile = TT.disableParallelCompilation);
        const OT = TT.existingPipelineContext || kT(TT.shaderProcessingContext);
        return OT._name = TT.name, TT.name && KT && (KT.cachedPipelines[TT.name] = OT), cT(OT, TT.vertex, TT.fragment, !!TT.createAsRaw, "", "", TT.rebuildRebind, TT.defines, TT.transformFeedbackVaryings, "", (() => {
          lT(OT, (() => {
            TT.onRenderingStateCompiled?.(OT)
          }))
        })), OT
      } catch (KT) {
        throw OT.e.Error("Error compiling effect"), KT
      }
    }
  },
  39467: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => fT
    });
    var lT = cT(36932),
      MT = cT(38512),
      KT = cT(39474),
      OT = cT(39477),
      yT = cT(39514);
    class fT {
      static get ShadersRepository() {
        return KT.d.ShadersRepository
      }
      static set ShadersRepository(TT) {
        KT.d.ShadersRepository = TT
      }
      get VkT() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new lT.b), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(TT, kT, cT) {
        let MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          KT = arguments.length > 4 ? arguments[4] : void 0,
          yT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          xT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          IT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          AT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          CT = arguments.length > 9 ? arguments[9] : void 0,
          jT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          vT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          tT = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new lT.b, this.onErrorObservable = new lT.b, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = TT, this._key = jT;
        const hT = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let NT;
        if (kT.attributes) {
          const TT = kT;
          if (this._engine = cT, this._attributesNames = TT.attributes, this._uniformsNames = TT.uniformsNames.concat(TT.samplers), this._samplerList = TT.samplers.slice(), this.defines = TT.defines, this.onError = TT.onError, this.onCompiled = TT.onCompiled, this._fallbacks = TT.fallbacks, this._indexParameters = TT.indexParameters, this._transformFeedbackVaryings = TT.transformFeedbackVaryings || null, this._multiTarget = !!TT.multiTarget, this._shaderLanguage = TT.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!TT.disableParallelShaderCompilation, TT.uniformBuffersNames) {
            this._uniformBuffersNamesList = TT.uniformBuffersNames.slice();
            for (let kT = 0; kT < TT.uniformBuffersNames.length; kT++) this._uniformBuffersNames[TT.uniformBuffersNames[kT]] = kT
          }
          this._processFinalCode = TT.processFinalCode ?? null, this._processCodeAfterIncludes = TT.processCodeAfterIncludes ?? void 0, tT = TT.extraInitializationsAsync, NT = TT.existingPipelineContext
        } else this._engine = KT, this.defines = null == yT ? "" : yT, this._uniformsNames = cT.concat(MT), this._samplerList = MT ? MT.slice() : [], this._attributesNames = kT, this._uniformBuffersNamesList = [], this._shaderLanguage = vT, this.onError = AT, this.onCompiled = IT, this._indexParameters = CT, this._fallbacks = xT;
        "WEBGL2" === this._engine.shaderPlatformName && (NT = (0, OT.l)(hT, this._engine._gl) ?? NT), this._attributeLocationByName = {}, this.uniqueId = fT._UniqueIdSeed++, NT ? (this._pipelineContext = NT, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, tT).catch((TT => {
          const kT = TT?.message ?? String(TT),
            cT = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${kT}`);
          TT && "string" === typeof TT.stack && (cT.stack = `${cT.message}\nCaused by: ${TT.stack}`), this._processCompilationErrors(cT)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.VkT || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          lT = arguments.length > 3 ? arguments[3] : void 0;
        lT && await lT(), this._processingContext = cT || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const MT = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: TT ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: KT.d.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: KT.d.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          QcT: this._engine.QcT,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, OT.d)(MT, this.name, this._processFinalCode, ((TT, cT) => {
          this._vertexSourceCode = TT, this._fragmentSourceCode = cT, this._prepareEffect(kT)
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
        return !!this._engine.VkT || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      Dv() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(TT) {
        return this._attributes[TT]
      }
      getAttributeLocationByName(TT) {
        return this._attributeLocationByName[TT]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(TT) {
        return this._uniformsNames.indexOf(TT)
      }
      getUniform(TT) {
        return this._uniforms[TT]
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
        return await new Promise((TT => {
          this.executeWhenCompiled(TT)
        }))
      }
      executeWhenCompiled(TT) {
        this.isReady() ? TT(this) : (this.onCompileObservable.add((kT => {
          TT(kT)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(TT) {
        (0, yT.g)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (kT => {
          this._processCompilationErrors(kT, TT)
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
            QcT: this._engine.QcT,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(TT, kT, cT, lT) {
        this._isReady = !1, this._vertexSourceCodeOverride = TT, this._fragmentSourceCodeOverride = kT, this.onError = (TT, kT) => {
          lT && lT(kT)
        }, this.onCompiled = () => {
          const TT = this.Dv().scenes;
          if (TT)
            for (let kT = 0; kT < TT.length; kT++) TT[kT].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(cT)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(TT) {
        if (this._pipelineContext = TT, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let kT = 0; kT < this._attributesNames.length; kT++) {
            const TT = this._attributesNames[kT];
            this._attributeLocationByName[TT] = this._attributes[kT]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), fT.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const kT = this._pipelineContext;
        this._isReady = !1;
        try {
          const cT = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            lT = cT ? null : this.defines,
            MT = cT ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            KT = cT ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            yT = this._engine;
          this._pipelineContext = (0, OT.h)({
            existingPipelineContext: TT ? kT : null,
            vertex: MT,
            fragment: KT,
            context: "WEBGL2" === yT.shaderPlatformName || "WEBGL1" === yT.shaderPlatformName ? yT._gl : void 0,
            rebuildRebind: (TT, kT, cT, lT) => this._rebuildProgram(TT, kT, cT, lT),
            defines: lT,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: cT,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: cT => {
              kT && !TT && this._engine._deletePipelineContext(kT), cT && this._onRenderingStateCompiled(cT)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(kT)
        } catch (cT) {
          this._processCompilationErrors(cT, kT)
        }
      }
      _getShaderCodeAndErrorLine(TT, kT, cT) {
        const lT = cT ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let MT = null;
        if (kT && TT) {
          const KT = kT.match(lT);
          if (KT && 2 === KT.length) {
            const kT = parseInt(KT[1]),
              lT = TT.split("\n", -1);
            lT.length >= kT && (MT = `Offending line [${kT}] in ${cT?"fragment":"vertex"} code: ${lT[kT-1]}`)
          }
        }
        return [TT, MT]
      }
      _processCompilationErrors(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof TT?.stack ? TT.stack : TT?.message ?? String(TT);
        const cT = this._attributesNames,
          lT = this._fallbacks;
        if (MT.e.Error("Unable to compile effect:"), MT.e.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), MT.e.Error(`Attributes: ${cT.join(" ")}`), MT.e.Error("Defines:\n" + this.defines), fT.LogShaderCodeOnCompilationError) {
          let TT, kT = null,
            cT = null;
          this._pipelineContext?._getVertexShaderCode() && ([TT, kT] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), TT && (MT.e.Error("Vertex code:"), MT.e.Error(TT))), this._pipelineContext?._getFragmentShaderCode() && ([TT, cT] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), TT && (MT.e.Error("Fragment code:"), MT.e.Error(TT))), kT && MT.e.Error(kT), cT && MT.e.Error(cT)
        }
        MT.e.Error("Error: " + this._compilationError);
        const KT = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        kT && (this._pipelineContext = kT, this._isReady = !0, KT()), lT ? (this._pipelineContext = null, lT.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, MT.e.Error("Trying next fallback."), this.defines = lT.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, KT(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, kT || KT())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(TT, kT) {
        this._engine._bindTexture(this._samplers[TT], kT, TT)
      }
      setTexture(TT, kT) {
        this._engine.setTexture(this._samplers[TT], this._uniforms[TT], kT, TT)
      }
      setTextureArray(TT, kT) {
        const cT = TT + "Ex";
        if (-1 === this._samplerList.indexOf(cT + "0")) {
          const lT = this._samplerList.indexOf(TT);
          for (let TT = 1; TT < kT.length; TT++) {
            const kT = cT + (TT - 1).toString();
            this._samplerList.splice(lT + TT, 0, kT)
          }
          let MT = 0;
          for (const TT of this._samplerList) this._samplers[TT] = MT, MT += 1
        }
        this._engine.setTextureArray(this._samplers[TT], this._uniforms[TT], kT, TT)
      }
      bindUniformBuffer(TT, kT) {
        const cT = this._uniformBuffersNames[kT];
        void 0 === cT || fT._BaseCache[cT] === TT && this._engine._features.useUBOBindingCache || (fT._BaseCache[cT] = TT, this._engine.bindUniformBufferBase(TT, cT, kT))
      }
      bindUniformBlock(TT, kT) {
        this._engine.bindUniformBlock(this._pipelineContext, TT, kT)
      }
      setInt(TT, kT) {
        return this._pipelineContext.setInt(TT, kT), this
      }
      setInt2(TT, kT, cT) {
        return this._pipelineContext.setInt2(TT, kT, cT), this
      }
      setInt3(TT, kT, cT, lT) {
        return this._pipelineContext.setInt3(TT, kT, cT, lT), this
      }
      setInt4(TT, kT, cT, lT, MT) {
        return this._pipelineContext.setInt4(TT, kT, cT, lT, MT), this
      }
      setIntArray(TT, kT) {
        return this._pipelineContext.setIntArray(TT, kT), this
      }
      setIntArray2(TT, kT) {
        return this._pipelineContext.setIntArray2(TT, kT), this
      }
      setIntArray3(TT, kT) {
        return this._pipelineContext.setIntArray3(TT, kT), this
      }
      setIntArray4(TT, kT) {
        return this._pipelineContext.setIntArray4(TT, kT), this
      }
      setUInt(TT, kT) {
        return this._pipelineContext.setUInt(TT, kT), this
      }
      setUInt2(TT, kT, cT) {
        return this._pipelineContext.setUInt2(TT, kT, cT), this
      }
      setUInt3(TT, kT, cT, lT) {
        return this._pipelineContext.setUInt3(TT, kT, cT, lT), this
      }
      setUInt4(TT, kT, cT, lT, MT) {
        return this._pipelineContext.setUInt4(TT, kT, cT, lT, MT), this
      }
      setUIntArray(TT, kT) {
        return this._pipelineContext.setUIntArray(TT, kT), this
      }
      setUIntArray2(TT, kT) {
        return this._pipelineContext.setUIntArray2(TT, kT), this
      }
      setUIntArray3(TT, kT) {
        return this._pipelineContext.setUIntArray3(TT, kT), this
      }
      setUIntArray4(TT, kT) {
        return this._pipelineContext.setUIntArray4(TT, kT), this
      }
      setFloatArray(TT, kT) {
        return this._pipelineContext.setArray(TT, kT), this
      }
      setFloatArray2(TT, kT) {
        return this._pipelineContext.setArray2(TT, kT), this
      }
      setFloatArray3(TT, kT) {
        return this._pipelineContext.setArray3(TT, kT), this
      }
      setFloatArray4(TT, kT) {
        return this._pipelineContext.setArray4(TT, kT), this
      }
      setArray(TT, kT) {
        return this._pipelineContext.setArray(TT, kT), this
      }
      setArray2(TT, kT) {
        return this._pipelineContext.setArray2(TT, kT), this
      }
      setArray3(TT, kT) {
        return this._pipelineContext.setArray3(TT, kT), this
      }
      setArray4(TT, kT) {
        return this._pipelineContext.setArray4(TT, kT), this
      }
      setMatrices(TT, kT) {
        return this._pipelineContext.setMatrices(TT, kT), this
      }
      setMatrix(TT, kT) {
        return this._pipelineContext.setMatrix(TT, kT), this
      }
      setMatrix3x3(TT, kT) {
        return this._pipelineContext.setMatrix3x3(TT, kT), this
      }
      setMatrix2x2(TT, kT) {
        return this._pipelineContext.setMatrix2x2(TT, kT), this
      }
      setFloat(TT, kT) {
        return this._pipelineContext.setFloat(TT, kT), this
      }
      setBool(TT, kT) {
        return this._pipelineContext.setInt(TT, kT ? 1 : 0), this
      }
      setVector2(TT, kT) {
        return this._pipelineContext.setVector2(TT, kT), this
      }
      setFloat2(TT, kT, cT) {
        return this._pipelineContext.setFloat2(TT, kT, cT), this
      }
      setVector3(TT, kT) {
        return this._pipelineContext.setVector3(TT, kT), this
      }
      setFloat3(TT, kT, cT, lT) {
        return this._pipelineContext.setFloat3(TT, kT, cT, lT), this
      }
      setVector4(TT, kT) {
        return this._pipelineContext.setVector4(TT, kT), this
      }
      setQuaternion(TT, kT) {
        return this._pipelineContext.setQuaternion(TT, kT), this
      }
      setFloat4(TT, kT, cT, lT, MT) {
        return this._pipelineContext.setFloat4(TT, kT, cT, lT, MT), this
      }
      setColor3(TT, kT) {
        return this._pipelineContext.setColor3(TT, kT), this
      }
      setColor4(TT, kT, cT) {
        return this._pipelineContext.setColor4(TT, kT, cT), this
      }
      setDirectColor4(TT, kT) {
        return this._pipelineContext.setDirectColor4(TT, kT), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (fT.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, OT.o)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        kT && (KT.d.GetShadersStore(lT)[`${TT}PixelShader`] = kT), cT && (KT.d.GetShadersStore(lT)[`${TT}VertexShader`] = cT)
      }
      static ResetCache() {
        fT._BaseCache = {}
      }
    }
    fT.LogShaderCodeOnCompilationError = !0, fT.PersistentMode = !1, fT.AutomaticallyClearCodeCache = !1, fT._UniqueIdSeed = 0, fT._BaseCache = {}, fT.ShadersStore = KT.d.ShadersStore, fT.IncludesShadersStore = KT.d.IncludesShadersStore
  },
  39796: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => IT,
      g: () => rT,
      j: () => FT
    });
    var lT = cT(39467),
      MT = cT(36892),
      KT = cT(36942),
      OT = cT(39770);
    const yT = new MT.d,
      fT = new MT.d,
      xT = new MT.d,
      IT = {
        NJ: () => {},
        eyeAtCamera: !0
      };

    function AT(TT, kT, cT) {
      const lT = cT.acT(),
        MT = kT.acT();
      for (let KT = 0; KT < 16; KT++) lT[KT] = MT[KT];
      return lT[12] -= TT.x, lT[13] -= TT.y, lT[14] -= TT.z, cT.markAsUpdated(), cT
    }

    function CT(TT, kT, cT) {
      return (0, KT.k)(kT, fT), AT(TT, fT, xT), (0, KT.k)(xT, cT), cT
    }

    function jT(TT, kT, cT) {
      if (!IT.eyeAtCamera) return CT(TT, kT, cT);
      const lT = cT.acT(),
        MT = kT.acT();
      for (let KT = 0; KT < 16; KT++) lT[KT] = MT[KT];
      return lT[12] = 0, lT[13] = 0, lT[14] = 0, cT.markAsUpdated(), cT
    }

    function vT(TT, kT, cT, lT) {
      return (0, KT.r)(jT(TT, kT, lT), cT, lT), lT
    }

    function tT(TT, kT, cT, lT) {
      return (0, KT.k)(cT, fT), (0, KT.r)(kT, fT, xT), AT(TT, xT, fT), jT(TT, cT, xT), (0, KT.r)(fT, xT, lT), lT
    }

    function hT(TT, kT, cT, lT, MT, OT) {
      return (0, KT.k)(cT, fT), (0, KT.r)(kT, fT, xT), AT(TT, xT, fT), vT(TT, lT, MT, xT), (0, KT.r)(fT, xT, OT), OT
    }

    function NT(TT, kT) {
      const cT = IT.NJ();
      if (!cT || yT === kT) return kT;
      yT.updateFlag = kT.updateFlag;
      const lT = cT.floatingOriginOffset;
      switch (TT) {
        case "world":
          return AT(lT, kT, yT);
        case "view":
          return jT(lT, kT, yT);
        case "worldView":
          return tT(lT, kT, cT.getViewMatrix(), yT);
        case "viewProjection":
          return vT(lT, cT.getViewMatrix(), cT.getProjectionMatrix(), yT);
        case "worldViewProjection":
          return hT(lT, kT, cT.getTransformMatrix(), cT.getViewMatrix(), cT.getProjectionMatrix(), yT);
        default:
          if (TT.startsWith("u_")) {
            const MT = TT.toLowerCase();
            if (MT.startsWith("u_worldviewprojection")) return hT(lT, kT, cT.getTransformMatrix(), cT.getViewMatrix(), cT.getProjectionMatrix(), yT);
            if (MT.startsWith("u_viewprojection")) return vT(lT, cT.getViewMatrix(), cT.getProjectionMatrix(), yT);
            if (MT.startsWith("u_worldview")) return tT(lT, kT, cT.getViewMatrix(), yT);
            if (MT.startsWith("u_world")) return AT(lT, kT, yT);
            if (MT.startsWith("u_view")) return jT(lT, kT, yT)
          }
          return kT
      }
    }
    const QT = OT.b,
      ST = lT.e,
      DT = QT.prototype._updateMatrixForUniform,
      aT = lT.e.prototype.setMatrix;

    function FT() {
      lT.e.prototype.setMatrix = aT, ST._setMatrixOverride = void 0, QT.prototype._updateMatrixForUniform = DT, QT.prototype._updateMatrixForUniformOverride = void 0
    }

    function rT() {
      ST.prototype._setMatrixOverride = aT, ST.prototype.setMatrix = function(TT, kT) {
        return this._setMatrixOverride(TT, NT(TT, kT)), this
      }, QT.prototype._updateMatrixForUniformOverride = DT, QT.prototype._updateMatrixForUniform = function(TT, kT) {
        this._updateMatrixForUniformOverride(TT, NT(TT, kT))
      }
    }
  },
  39764: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT,
      e: () => MT
    });
    var lT = cT(39755);

    function MT(TT, kT) {
      kT.WHITEBALANCE && TT.push("whiteBalanceMatrix"), kT.EXPOSURE && TT.push("exposureLinear"), kT.CONTRAST && TT.push("contrast"), kT.COLORGRADING && TT.push("colorTransformSettings"), (kT.VIGNETTE || kT.DITHER) && TT.push("vInverseScreenSize"), kT.VIGNETTE && (TT.push("vignetteSettings1"), TT.push("vignetteSettings2")), kT.COLORCURVES && (0, lT.d)(TT), kT.DITHER && TT.push("ditherIntensity")
    }

    function KT(TT, kT) {
      kT.COLORGRADING && TT.push("txColorTransform")
    }
  },
  39746: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => zT,
      g: () => HT
    });
    var lT = cT(39620),
      MT = cT(39624),
      KT = cT(36932),
      OT = cT(37093),
      yT = cT(36937),
      fT = cT(36892);
    const xT = [
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
      IT = 1e6 / xT[xT.length - 1][0],
      AT = 150;

    function CT(TT, kT) {
      const cT = Number.isNaN(TT) ? IT : Math.max(TT, IT),
        lT = (0, yT.Clamp)(1e6 / cT, xT[0][0], xT[xT.length - 1][0]);
      let MT = 0,
        KT = xT.length - 1;
      for (; KT - MT > 1;) {
        const TT = MT + KT >> 1;
        xT[TT][0] <= lT ? MT = TT : KT = TT
      }
      const OT = MT,
        [CT, jT, vT, tT] = xT[OT],
        [hT, NT, QT, ST] = xT[OT + 1],
        DT = (lT - CT) / (hT - CT),
        aT = fT.i.Lerp(new fT.i(jT, vT), new fT.i(NT, QT), DT),
        FT = fT.i.Normalize(new fT.i(1, tT)),
        rT = fT.i.Normalize(new fT.i(1, ST)),
        PT = fT.i.Normalize(fT.i.Lerp(FT, rT, DT)),
        wT = (0, yT.Clamp)(kT, -150, AT);
      aT.gcT(PT.scale(wT / 3e3));
      const mT = 2 * aT.x - 8 * aT.y + 4,
        bT = 3 * aT.x / mT,
        zT = 2 * aT.y / mT;
      return new fT.m(bT / zT, 1, (1 - bT - zT) / zT)
    }
    const jT = fT.d.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      vT = fT.d.Invert(jT);

    function tT(TT, kT) {
      const cT = kT > 0 ? TT / kT : 10;
      return (0, yT.Clamp)(cT, .1, 10)
    }

    function hT(TT, kT) {
      const cT = fT.m.TransformNormal(TT, jT),
        lT = fT.m.TransformNormal(kT, jT),
        MT = fT.d.FromArray([tT(lT.x, cT.x), 0, 0, 0, 0, tT(lT.y, cT.y), 0, 0, 0, 0, tT(lT.z, cT.z), 0, 0, 0, 0, 1]);
      return jT.multiply(MT).multiply(vT)
    }
    const NT = new fT.m(.95047, 1, 1.08883),
      QT = fT.d.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(hT(NT, CT(6500, 0))),
      ST = fT.d.Invert(QT),
      DT = fT.m.TransformNormal(new fT.m(1, 1, 1), QT);
    var aT = cT(39645),
      FT = cT(39755);
    let rT = (() => {
      var TT;
      let kT, cT, KT, yT, fT, xT, IT, AT, CT, jT, vT, tT, hT = [],
        NT = [],
        QT = [],
        ST = [],
        DT = [],
        rT = [],
        PT = [],
        wT = [],
        mT = [],
        bT = [],
        zT = [],
        JT = [],
        oT = [],
        HT = [],
        eT = [],
        GT = [],
        VT = [],
        ET = [],
        ZT = [],
        uT = [],
        XT = [],
        dT = [],
        LT = [],
        RT = [];
      return TT = class {
        constructor() {
          this._dirty = !0, this._tempColor = new OT.g(0, 0, 0, 0), this._globalCurve = new OT.g(0, 0, 0, 0), this._highlightsCurve = new OT.g(0, 0, 0, 0), this._midtonesCurve = new OT.g(0, 0, 0, 0), this._shadowsCurve = new OT.g(0, 0, 0, 0), this._positiveCurve = new OT.g(0, 0, 0, 0), this._negativeCurve = new OT.g(0, 0, 0, 0), this._globalHue = (0, lT.h)(this, hT, 30), this._globalDensity = ((0, lT.h)(this, NT), (0, lT.h)(this, QT, 0)), this._globalSaturation = ((0, lT.h)(this, ST), (0, lT.h)(this, DT, 0)), this._globalExposure = ((0, lT.h)(this, rT), (0, lT.h)(this, PT, 0)), this._highlightsHue = ((0, lT.h)(this, wT), (0, lT.h)(this, mT, 30)), this._highlightsDensity = ((0, lT.h)(this, bT), (0, lT.h)(this, zT, 0)), this._highlightsSaturation = ((0, lT.h)(this, JT), (0, lT.h)(this, oT, 0)), this._highlightsExposure = ((0, lT.h)(this, HT), (0, lT.h)(this, eT, 0)), this._midtonesHue = ((0, lT.h)(this, GT), (0, lT.h)(this, VT, 30)), this._midtonesDensity = ((0, lT.h)(this, ET), (0, lT.h)(this, ZT, 0)), this._midtonesSaturation = ((0, lT.h)(this, uT), (0, lT.h)(this, XT, 0)), this._midtonesExposure = ((0, lT.h)(this, dT), (0, lT.h)(this, LT, 0)), this._shadowsHue = ((0, lT.h)(this, RT), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(TT) {
          this._globalHue = TT, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(TT) {
          this._globalDensity = TT, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(TT) {
          this._globalSaturation = TT, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(TT) {
          this._globalExposure = TT, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(TT) {
          this._highlightsHue = TT, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(TT) {
          this._highlightsDensity = TT, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(TT) {
          this._highlightsSaturation = TT, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(TT) {
          this._highlightsExposure = TT, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(TT) {
          this._midtonesHue = TT, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(TT) {
          this._midtonesDensity = TT, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(TT) {
          this._midtonesSaturation = TT, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(TT) {
          this._midtonesExposure = TT, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(TT) {
          this._shadowsHue = TT, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(TT) {
          this._shadowsDensity = TT, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(TT) {
          this._shadowsSaturation = TT, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(TT) {
          this._shadowsExposure = TT, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(kT, cT, lT, MT, KT) {
          null != kT && (kT = TT._Clamp(kT, 0, 360), cT = TT._Clamp(cT, -100, 100), lT = TT._Clamp(lT, -100, 100), MT = TT._Clamp(MT, -100, 100), cT = TT._ApplyColorGradingSliderNonlinear(cT), cT *= .5, MT = TT._ApplyColorGradingSliderNonlinear(MT), cT < 0 && (cT *= -1, kT = (kT + 180) % 360), TT._FromHSBToRef(kT, cT, 50 + .25 * MT, KT), KT.scaleToRef(2, KT), KT.a = 1 + .01 * lT)
        }
        static _ApplyColorGradingSliderNonlinear(TT) {
          TT /= 100;
          let kT = Math.abs(TT);
          return kT = Math.pow(kT, 2), TT < 0 && (kT *= -1), kT *= 100, kT
        }
        static _FromHSBToRef(kT, cT, lT, MT) {
          let KT = TT._Clamp(kT, 0, 360);
          const OT = TT._Clamp(cT / 100, 0, 1),
            yT = TT._Clamp(lT / 100, 0, 1);
          if (0 === OT) MT.r = yT, MT.g = yT, MT.b = yT;
          else {
            KT /= 60;
            const TT = Math.floor(KT),
              kT = KT - TT,
              cT = yT * (1 - OT),
              lT = yT * (1 - OT * kT),
              fT = yT * (1 - OT * (1 - kT));
            switch (TT) {
              case 0:
                MT.r = yT, MT.g = fT, MT.b = cT;
                break;
              case 1:
                MT.r = lT, MT.g = yT, MT.b = cT;
                break;
              case 2:
                MT.r = cT, MT.g = yT, MT.b = fT;
                break;
              case 3:
                MT.r = cT, MT.g = lT, MT.b = yT;
                break;
              case 4:
                MT.r = fT, MT.g = cT, MT.b = yT;
                break;
              default:
                MT.r = yT, MT.g = cT, MT.b = lT
            }
          }
          MT.a = 1
        }
        static _Clamp(TT, kT, cT) {
          return Math.min(Math.max(TT, kT), cT)
        }
        clone() {
          return aT.d.Clone((() => new TT), this)
        }
        serialize() {
          return aT.d.Serialize(this)
        }
        _bind(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), TT && (TT.setFloat4(kT, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), TT.setFloat4(cT, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), TT.setFloat4(lT, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const OT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        kT = [(0, MT.J)()], cT = [(0, MT.J)()], KT = [(0, MT.J)()], yT = [(0, MT.J)()], fT = [(0, MT.J)()], xT = [(0, MT.J)()], IT = [(0, MT.J)()], AT = [(0, MT.J)()], CT = [(0, MT.J)()], jT = [(0, MT.J)()], vT = [(0, MT.J)()], tT = [(0, MT.J)()], (0, lT.e)(null, null, kT, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: TT => "_globalHue" in TT,
            get: TT => TT._globalHue,
            set: (TT, kT) => {
              TT._globalHue = kT
            }
          },
          metadata: OT
        }, hT, NT), (0, lT.e)(null, null, cT, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "_globalDensity" in TT,
            get: TT => TT._globalDensity,
            set: (TT, kT) => {
              TT._globalDensity = kT
            }
          },
          metadata: OT
        }, QT, ST), (0, lT.e)(null, null, KT, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: TT => "_globalSaturation" in TT,
            get: TT => TT._globalSaturation,
            set: (TT, kT) => {
              TT._globalSaturation = kT
            }
          },
          metadata: OT
        }, DT, rT), (0, lT.e)(null, null, yT, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: TT => "_globalExposure" in TT,
            get: TT => TT._globalExposure,
            set: (TT, kT) => {
              TT._globalExposure = kT
            }
          },
          metadata: OT
        }, PT, wT), (0, lT.e)(null, null, fT, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: TT => "_highlightsHue" in TT,
            get: TT => TT._highlightsHue,
            set: (TT, kT) => {
              TT._highlightsHue = kT
            }
          },
          metadata: OT
        }, mT, bT), (0, lT.e)(null, null, xT, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "_highlightsDensity" in TT,
            get: TT => TT._highlightsDensity,
            set: (TT, kT) => {
              TT._highlightsDensity = kT
            }
          },
          metadata: OT
        }, zT, JT), (0, lT.e)(null, null, IT, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: TT => "_highlightsSaturation" in TT,
            get: TT => TT._highlightsSaturation,
            set: (TT, kT) => {
              TT._highlightsSaturation = kT
            }
          },
          metadata: OT
        }, oT, HT), (0, lT.e)(null, null, AT, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: TT => "_highlightsExposure" in TT,
            get: TT => TT._highlightsExposure,
            set: (TT, kT) => {
              TT._highlightsExposure = kT
            }
          },
          metadata: OT
        }, eT, GT), (0, lT.e)(null, null, CT, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: TT => "_midtonesHue" in TT,
            get: TT => TT._midtonesHue,
            set: (TT, kT) => {
              TT._midtonesHue = kT
            }
          },
          metadata: OT
        }, VT, ET), (0, lT.e)(null, null, jT, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "_midtonesDensity" in TT,
            get: TT => TT._midtonesDensity,
            set: (TT, kT) => {
              TT._midtonesDensity = kT
            }
          },
          metadata: OT
        }, ZT, uT), (0, lT.e)(null, null, vT, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: TT => "_midtonesSaturation" in TT,
            get: TT => TT._midtonesSaturation,
            set: (TT, kT) => {
              TT._midtonesSaturation = kT
            }
          },
          metadata: OT
        }, XT, dT), (0, lT.e)(null, null, tT, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: TT => "_midtonesExposure" in TT,
            get: TT => TT._midtonesExposure,
            set: (TT, kT) => {
              TT._midtonesExposure = kT
            }
          },
          metadata: OT
        }, LT, RT), OT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: OT
        })
      })(), TT.PrepareUniforms = FT.d, TT
    })();

    function PT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      TT._bind(kT, cT, lT, MT)
    }
    var wT = cT(39549),
      mT = cT(39764),
      bT = cT(36949);
    let zT = (() => {
        var TT;
        let kT, cT, xT, jT, vT, tT, NT, FT, bT, zT, JT, oT, HT, eT, GT, VT, ET, ZT, uT, XT, dT, LT, RT, gT, UT, YT, BT, WT, nT = [],
          pT = [],
          iT = [],
          qT = [],
          sT = [],
          Tk = [],
          kk = [],
          ck = [],
          lk = [],
          Mk = [],
          Kk = [],
          Ok = [],
          yk = [],
          fk = [],
          xk = [],
          Ik = [],
          Ak = [],
          Ck = [],
          jk = [],
          vk = [],
          tk = [],
          hk = [],
          Nk = [],
          Qk = [],
          Sk = [],
          Dk = [],
          ak = [],
          Fk = [],
          rk = [],
          Pk = [],
          wk = [],
          mk = [],
          bk = [],
          zk = [],
          Jk = [],
          Hk = [],
          ek = [],
          Gk = [],
          Vk = [],
          Ek = [],
          Zk = [],
          uk = [],
          Xk = [],
          dk = [],
          Lk = [],
          Rk = [],
          gk = [],
          Uk = [],
          Yk = [],
          Bk = [],
          Wk = [],
          nk = [],
          pk = [],
          ik = [],
          qk = [],
          sk = [];
        return TT = class {
          constructor() {
            this.colorCurves = (0, lT.h)(this, nT, new rT), this._colorCurvesEnabled = ((0, lT.h)(this, pT), (0, lT.h)(this, iT, !1)), this._colorGradingTexture = ((0, lT.h)(this, qT), (0, lT.h)(this, sT, void 0)), this._colorGradingEnabled = ((0, lT.h)(this, Tk), (0, lT.h)(this, kk, !1)), this._colorGradingWithGreenDepth = ((0, lT.h)(this, ck), (0, lT.h)(this, lk, !0)), this._colorGradingBGR = ((0, lT.h)(this, Mk), (0, lT.h)(this, Kk, !0)), this._exposure = ((0, lT.h)(this, Ok), (0, lT.h)(this, yk, 1)), this._toneMappingEnabled = ((0, lT.h)(this, fk), (0, lT.h)(this, xk, !1)), this._toneMappingType = ((0, lT.h)(this, Ik), (0, lT.h)(this, Ak, TT.TONEMAPPING_STANDARD)), this._contrast = ((0, lT.h)(this, Ck), (0, lT.h)(this, jk, 1)), this._whiteBalanceEnabled = ((0, lT.h)(this, vk), (0, lT.h)(this, tk, !1)), this._temperature = ((0, lT.h)(this, hk), (0, lT.h)(this, Nk, 6500)), this._tint = ((0, lT.h)(this, Qk), (0, lT.h)(this, Sk, 0)), this._whiteBalanceMatrix = ((0, lT.h)(this, Dk), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, lT.h)(this, ak, 0), this.vignetteCenterX = ((0, lT.h)(this, Fk), (0, lT.h)(this, rk, 0)), this.vignetteCenterY = ((0, lT.h)(this, Pk), (0, lT.h)(this, wk, 0)), this.vignetteWeight = ((0, lT.h)(this, mk), (0, lT.h)(this, bk, 1.5)), this.vignetteColor = ((0, lT.h)(this, zk), (0, lT.h)(this, Jk, new OT.g(0, 0, 0, 0))), this.vignetteCameraFov = ((0, lT.h)(this, Hk), (0, lT.h)(this, ek, .5)), this._vignetteBlendMode = ((0, lT.h)(this, Gk), (0, lT.h)(this, Vk, TT.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, lT.h)(this, Ek), (0, lT.h)(this, Zk, !1)), this._ditheringEnabled = ((0, lT.h)(this, uk), (0, lT.h)(this, Xk, !1)), this._ditheringIntensity = ((0, lT.h)(this, dk), (0, lT.h)(this, Lk, 1 / 255)), this._skipFinalColorClamp = ((0, lT.h)(this, Rk), (0, lT.h)(this, gk, !1)), this._applyByPostProcess = ((0, lT.h)(this, Uk), (0, lT.h)(this, Yk, !1)), this._isEnabled = ((0, lT.h)(this, Bk), (0, lT.h)(this, Wk, !0)), this.outputTextureWidth = ((0, lT.h)(this, nk), (0, lT.h)(this, pk, 0)), this.outputTextureHeight = ((0, lT.h)(this, ik), (0, lT.h)(this, qk, 0)), this.onUpdateParameters = ((0, lT.h)(this, sk), new KT.b)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(TT) {
            this._colorCurvesEnabled !== TT && (this._colorCurvesEnabled = TT, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(TT) {
            this._colorGradingTexture !== TT && (this._colorGradingTexture = TT, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(TT) {
            this._colorGradingEnabled !== TT && (this._colorGradingEnabled = TT, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(TT) {
            this._colorGradingWithGreenDepth !== TT && (this._colorGradingWithGreenDepth = TT, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(TT) {
            this._colorGradingBGR !== TT && (this._colorGradingBGR = TT, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(TT) {
            this._exposure !== TT && (this._exposure = TT, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(TT) {
            this._toneMappingEnabled !== TT && (this._toneMappingEnabled = TT, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(TT) {
            this._toneMappingType !== TT && (this._toneMappingType = TT, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(TT) {
            this._contrast !== TT && (this._contrast = TT, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(TT) {
            this._whiteBalanceEnabled !== TT && (this._whiteBalanceEnabled = TT, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(TT) {
            TT = Number.isNaN(TT) ? IT : Math.max(TT, IT), this._temperature !== TT && (this._temperature = TT, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(TT) {
            TT = (0, yT.Clamp)(TT, -150, AT), this._tint !== TT && (this._tint = TT, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(TT, kT) {
              const cT = hT(CT(TT, kT), DT),
                lT = QT.multiply(cT).multiply(ST);
              return fT.d.GetAsMatrix3x3(lT)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(TT) {
            this.vignetteCenterY = TT
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(TT) {
            this.vignetteCenterX = TT
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(TT) {
            this._vignetteBlendMode !== TT && (this._vignetteBlendMode = TT, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(TT) {
            this._vignetteEnabled !== TT && (this._vignetteEnabled = TT, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(TT) {
            this._ditheringEnabled !== TT && (this._ditheringEnabled = TT, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(TT) {
            this._ditheringIntensity !== TT && (this._ditheringIntensity = TT, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(TT) {
            this._skipFinalColorClamp !== TT && (this._skipFinalColorClamp = TT, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(TT) {
            this._applyByPostProcess !== TT && (this._applyByPostProcess = TT, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(TT) {
            this._isEnabled !== TT && (this._isEnabled = TT, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(kT) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return kT.WHITEBALANCE = !1, kT.VIGNETTE = !1, kT.TONEMAPPING = 0, kT.CONTRAST = !1, kT.EXPOSURE = !1, kT.COLORCURVES = !1, kT.COLORGRADING = !1, kT.COLORGRADING3D = !1, kT.DITHER = !1, kT.IMAGEPROCESSING = !1, kT.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(kT.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (kT.WHITEBALANCE = this._whiteBalanceEnabled, kT.VIGNETTE = this.vignetteEnabled, kT.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === TT._VIGNETTEMODE_MULTIPLY, kT.VIGNETTEBLENDMODEOPAQUE = !kT.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case TT.TONEMAPPING_KHR_PBR_NEUTRAL:
                kT.TONEMAPPING = 3;
                break;
              case TT.TONEMAPPING_ACES:
                kT.TONEMAPPING = 2;
                break;
              default:
                kT.TONEMAPPING = 1
            } else kT.TONEMAPPING = 0;
            kT.CONTRAST = 1 !== this.contrast, kT.EXPOSURE = 1 !== this.exposure, kT.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, kT.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, kT.COLORGRADING ? kT.COLORGRADING3D = this.colorGradingTexture.is3D : kT.COLORGRADING3D = !1, kT.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, kT.SAMPLER3DBGRMAP = this.colorGradingBGR, kT.DITHER = this._ditheringEnabled, kT.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, kT.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, kT.IMAGEPROCESSING = kT.WHITEBALANCE || kT.VIGNETTE || !!kT.TONEMAPPING || kT.CONTRAST || kT.EXPOSURE || kT.COLORCURVES || kT.COLORGRADING || kT.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(TT, kT) {
            if (this._whiteBalanceEnabled && TT.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && PT(this.colorCurves, TT), this._vignetteEnabled || this._ditheringEnabled) {
              const cT = 1 / (this.outputTextureWidth || TT.Dv().getRenderWidth()),
                lT = 1 / (this.outputTextureHeight || TT.Dv().getRenderHeight());
              if (TT.setFloat2("vInverseScreenSize", cT, lT), this._ditheringEnabled && TT.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const MT = null != kT ? kT : lT / cT;
                let KT = Math.tan(.5 * this.vignetteCameraFov),
                  OT = KT * MT;
                const yT = Math.sqrt(OT * KT);
                OT = (0, wT.i)(OT, yT, this.vignetteStretch), KT = (0, wT.i)(KT, yT, this.vignetteStretch), TT.setFloat4("vignetteSettings1", OT, KT, -OT * this.vignetteCenterX, -KT * this.vignetteCenterY);
                const fT = -2 * this.vignetteWeight;
                TT.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, fT)
              }
            }
            if (TT.setFloat("exposureLinear", this.exposure), TT.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              TT.setTexture("txColorTransform", this.colorGradingTexture);
              const kT = this.colorGradingTexture.getSize().height;
              TT.setFloat4("colorTransformSettings", (kT - 1) / kT, .5 / kT, kT, this.colorGradingTexture.level)
            }
          }
          clone() {
            return aT.d.Clone((() => new TT), this)
          }
          serialize() {
            return aT.d.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const KT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          kT = [(0, MT.i)()], cT = [(0, MT.J)()], xT = [(0, MT.A)("colorGradingTexture")], jT = [(0, MT.J)()], vT = [(0, MT.J)()], tT = [(0, MT.J)()], NT = [(0, MT.J)()], FT = [(0, MT.J)()], bT = [(0, MT.J)()], zT = [(0, MT.J)()], JT = [(0, MT.J)()], oT = [(0, MT.J)()], HT = [(0, MT.J)()], eT = [(0, MT.J)()], GT = [(0, MT.J)()], VT = [(0, MT.J)()], ET = [(0, MT.J)()], ZT = [(0, MT.n)()], uT = [(0, MT.J)()], XT = [(0, MT.J)()], dT = [(0, MT.J)()], LT = [(0, MT.J)()], RT = [(0, MT.J)()], gT = [(0, MT.J)()], UT = [(0, MT.J)()], YT = [(0, MT.J)()], BT = [(0, MT.J)()], WT = [(0, MT.J)()], (0, lT.e)(null, null, kT, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: TT => "colorCurves" in TT,
              get: TT => TT.colorCurves,
              set: (TT, kT) => {
                TT.colorCurves = kT
              }
            },
            metadata: KT
          }, nT, pT), (0, lT.e)(null, null, cT, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: TT => "_colorCurvesEnabled" in TT,
              get: TT => TT._colorCurvesEnabled,
              set: (TT, kT) => {
                TT._colorCurvesEnabled = kT
              }
            },
            metadata: KT
          }, iT, qT), (0, lT.e)(null, null, xT, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_colorGradingTexture" in TT,
              get: TT => TT._colorGradingTexture,
              set: (TT, kT) => {
                TT._colorGradingTexture = kT
              }
            },
            metadata: KT
          }, sT, Tk), (0, lT.e)(null, null, jT, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: TT => "_colorGradingEnabled" in TT,
              get: TT => TT._colorGradingEnabled,
              set: (TT, kT) => {
                TT._colorGradingEnabled = kT
              }
            },
            metadata: KT
          }, kk, ck), (0, lT.e)(null, null, vT, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: TT => "_colorGradingWithGreenDepth" in TT,
              get: TT => TT._colorGradingWithGreenDepth,
              set: (TT, kT) => {
                TT._colorGradingWithGreenDepth = kT
              }
            },
            metadata: KT
          }, lk, Mk), (0, lT.e)(null, null, tT, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: TT => "_colorGradingBGR" in TT,
              get: TT => TT._colorGradingBGR,
              set: (TT, kT) => {
                TT._colorGradingBGR = kT
              }
            },
            metadata: KT
          }, Kk, Ok), (0, lT.e)(null, null, NT, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: TT => "_exposure" in TT,
              get: TT => TT._exposure,
              set: (TT, kT) => {
                TT._exposure = kT
              }
            },
            metadata: KT
          }, yk, fk), (0, lT.e)(null, null, FT, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: TT => "_toneMappingEnabled" in TT,
              get: TT => TT._toneMappingEnabled,
              set: (TT, kT) => {
                TT._toneMappingEnabled = kT
              }
            },
            metadata: KT
          }, xk, Ik), (0, lT.e)(null, null, bT, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: TT => "_toneMappingType" in TT,
              get: TT => TT._toneMappingType,
              set: (TT, kT) => {
                TT._toneMappingType = kT
              }
            },
            metadata: KT
          }, Ak, Ck), (0, lT.e)(null, null, zT, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: TT => "_contrast" in TT,
              get: TT => TT._contrast,
              set: (TT, kT) => {
                TT._contrast = kT
              }
            },
            metadata: KT
          }, jk, vk), (0, lT.e)(null, null, JT, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: TT => "_whiteBalanceEnabled" in TT,
              get: TT => TT._whiteBalanceEnabled,
              set: (TT, kT) => {
                TT._whiteBalanceEnabled = kT
              }
            },
            metadata: KT
          }, tk, hk), (0, lT.e)(null, null, oT, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: TT => "_temperature" in TT,
              get: TT => TT._temperature,
              set: (TT, kT) => {
                TT._temperature = kT
              }
            },
            metadata: KT
          }, Nk, Qk), (0, lT.e)(null, null, HT, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: TT => "_tint" in TT,
              get: TT => TT._tint,
              set: (TT, kT) => {
                TT._tint = kT
              }
            },
            metadata: KT
          }, Sk, Dk), (0, lT.e)(null, null, eT, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: TT => "vignetteStretch" in TT,
              get: TT => TT.vignetteStretch,
              set: (TT, kT) => {
                TT.vignetteStretch = kT
              }
            },
            metadata: KT
          }, ak, Fk), (0, lT.e)(null, null, GT, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: TT => "vignetteCenterX" in TT,
              get: TT => TT.vignetteCenterX,
              set: (TT, kT) => {
                TT.vignetteCenterX = kT
              }
            },
            metadata: KT
          }, rk, Pk), (0, lT.e)(null, null, VT, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: TT => "vignetteCenterY" in TT,
              get: TT => TT.vignetteCenterY,
              set: (TT, kT) => {
                TT.vignetteCenterY = kT
              }
            },
            metadata: KT
          }, wk, mk), (0, lT.e)(null, null, ET, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "vignetteWeight" in TT,
              get: TT => TT.vignetteWeight,
              set: (TT, kT) => {
                TT.vignetteWeight = kT
              }
            },
            metadata: KT
          }, bk, zk), (0, lT.e)(null, null, ZT, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "vignetteColor" in TT,
              get: TT => TT.vignetteColor,
              set: (TT, kT) => {
                TT.vignetteColor = kT
              }
            },
            metadata: KT
          }, Jk, Hk), (0, lT.e)(null, null, uT, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: TT => "vignetteCameraFov" in TT,
              get: TT => TT.vignetteCameraFov,
              set: (TT, kT) => {
                TT.vignetteCameraFov = kT
              }
            },
            metadata: KT
          }, ek, Gk), (0, lT.e)(null, null, XT, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "_vignetteBlendMode" in TT,
              get: TT => TT._vignetteBlendMode,
              set: (TT, kT) => {
                TT._vignetteBlendMode = kT
              }
            },
            metadata: KT
          }, Vk, Ek), (0, lT.e)(null, null, dT, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: TT => "_vignetteEnabled" in TT,
              get: TT => TT._vignetteEnabled,
              set: (TT, kT) => {
                TT._vignetteEnabled = kT
              }
            },
            metadata: KT
          }, Zk, uk), (0, lT.e)(null, null, LT, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: TT => "_ditheringEnabled" in TT,
              get: TT => TT._ditheringEnabled,
              set: (TT, kT) => {
                TT._ditheringEnabled = kT
              }
            },
            metadata: KT
          }, Xk, dk), (0, lT.e)(null, null, RT, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: TT => "_ditheringIntensity" in TT,
              get: TT => TT._ditheringIntensity,
              set: (TT, kT) => {
                TT._ditheringIntensity = kT
              }
            },
            metadata: KT
          }, Lk, Rk), (0, lT.e)(null, null, gT, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: TT => "_skipFinalColorClamp" in TT,
              get: TT => TT._skipFinalColorClamp,
              set: (TT, kT) => {
                TT._skipFinalColorClamp = kT
              }
            },
            metadata: KT
          }, gk, Uk), (0, lT.e)(null, null, UT, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: TT => "_applyByPostProcess" in TT,
              get: TT => TT._applyByPostProcess,
              set: (TT, kT) => {
                TT._applyByPostProcess = kT
              }
            },
            metadata: KT
          }, Yk, Bk), (0, lT.e)(null, null, YT, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: TT => "_isEnabled" in TT,
              get: TT => TT._isEnabled,
              set: (TT, kT) => {
                TT._isEnabled = kT
              }
            },
            metadata: KT
          }, Wk, nk), (0, lT.e)(null, null, BT, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: TT => "outputTextureWidth" in TT,
              get: TT => TT.outputTextureWidth,
              set: (TT, kT) => {
                TT.outputTextureWidth = kT
              }
            },
            metadata: KT
          }, pk, ik), (0, lT.e)(null, null, WT, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "outputTextureHeight" in TT,
              get: TT => TT.outputTextureHeight,
              set: (TT, kT) => {
                TT.outputTextureHeight = kT
              }
            },
            metadata: KT
          }, qk, sk), KT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: KT
          })
        })(), TT.TONEMAPPING_STANDARD = 0, TT.TONEMAPPING_ACES = 1, TT.TONEMAPPING_KHR_PBR_NEUTRAL = 2, TT.PrepareUniforms = mT.e, TT.PrepareSamplers = mT.d, TT._VIGNETTEMODE_MULTIPLY = 0, TT._VIGNETTEMODE_OPAQUE = 1, TT
      })(),
      JT = !1;

    function oT(TT) {
      const kT = aT.d.Parse((() => new zT), TT, null, null);
      return void 0 !== TT.vignetteCentreX && (kT.vignetteCenterX = TT.vignetteCentreX), void 0 !== TT.vignetteCentreY && (kT.vignetteCenterY = TT.vignetteCentreY), kT
    }

    function HT() {
      JT || (JT = !0, zT.Parse = oT, aT.d._ImageProcessingConfigurationParser = oT, (0, bT.g)("BABYLON.ImageProcessingConfiguration", zT))
    }
  },
  39770: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT
    });
    var lT = cT(38512),
      MT = cT(39727);
    class KT {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          lT = arguments.length > 3 ? arguments[3] : void 0,
          MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          KT = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = TT, this._noUBO = !TT.supportsUniformBuffers || MT, this._dynamic = cT, this._name = lT ?? "no-name", this._data = kT || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === KT && this._engine._features.trackUbosInFrame || !0 === KT) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.X3 = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.X3 = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(TT) {
        let kT;
        if (kT = TT <= 2 ? TT : 4, this._uniformLocationPointer % kT !== 0) {
          const TT = this._uniformLocationPointer;
          this._uniformLocationPointer += kT - this._uniformLocationPointer % kT;
          const cT = this._uniformLocationPointer - TT;
          for (let kT = 0; kT < cT; kT++) this._data.push(0)
        }
      }
      addUniform(TT, kT) {
        let cT, lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (lT > 0 && "number" === typeof kT && (this._uniformArraySizes[TT] = {
            strideSize: kT,
            arraySize: lT
          }), void 0 === this._uniformLocations[TT] && (this._uniformNames.push(TT), !this._noUBO)) {
          if (lT > 0) {
            if (kT instanceof Array) throw "addUniform should not be use with Array in UBO: " + TT;
            if (this._fillAlignment(4), 16 == kT) kT *= lT;
            else {
              kT = kT * lT + (4 - kT) * lT
            }
            cT = [];
            for (let TT = 0; TT < kT; TT++) cT.push(0)
          } else {
            if (kT instanceof Array) cT = kT, kT = cT.length;
            else {
              cT = [];
              for (let TT = 0; TT < kT; TT++) cT.push(0)
            }
            this._fillAlignment(kT)
          }
          this._uniformSizes[TT] = kT, this._uniformLocations[TT] = this._uniformLocationPointer, this._uniformLocationPointer += kT;
          for (let TT = 0; TT < kT; TT++) this._data.push(cT[TT]);
          this._needSync = !0
        }
      }
      addMatrix(TT, kT) {
        this.addUniform(TT, Array.prototype.slice.call(kT.acT()))
      }
      addFloat2(TT, kT, cT) {
        const lT = [kT, cT];
        this.addUniform(TT, lT)
      }
      addFloat3(TT, kT, cT, lT) {
        const MT = [kT, cT, lT];
        this.addUniform(TT, MT)
      }
      addColor3(TT, kT) {
        const cT = [kT.r, kT.g, kT.b];
        this.addUniform(TT, cT)
      }
      addColor4(TT, kT, cT) {
        const lT = [kT.r, kT.g, kT.b, cT];
        this.addUniform(TT, lT)
      }
      addVector3(TT, kT) {
        const cT = [kT.x, kT.y, kT.z];
        this.addUniform(TT, cT)
      }
      addMatrix3x3(TT) {
        this.addUniform(TT, 12)
      }
      addMatrix2x2(TT) {
        this.addUniform(TT, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const TT = [];
        let kT = 0;
        for (const cT in this._uniformLocations)
          if (TT.push(cT), 10 === ++kT) break;
        return TT.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const TT of this._ownerListsBySlot.values()) this._removeOwnerBacklink(TT);
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
      set name(TT) {
        this._name = TT
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(TT, kT) {
        for (let cT = 0; cT < TT.length; ++cT)
          if (TT[cT] !== kT[cT]) return !1;
        return !0
      }
      _copyBuffer(TT, kT) {
        for (let cT = 0; cT < TT.length; ++cT) kT[cT] = TT[cT]
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
      _updateOwnerKeyed(TT) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let kT = this._slotByOwner.get(TT);
        if (void 0 === kT && (kT = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(TT, kT), this._ownerCount++, TT._uniformBuffersWithOwnedSlot || (TT._uniformBuffersWithOwnedSlot = []), TT._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(kT, TT._uniformBuffersWithOwnedSlot)), this._slotGeneration[kT] === this._dataGeneration) return this._bufferIndex = kT, this._buffer = this._buffers[kT][0], this.bindUniformBuffer(), this._slotFrameId[kT] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const cT = this._buffers[kT][1];
        this._slotFrameId[kT] === this._currentFrameId && cT && !this._buffersEqual(this._bufferData, cT) && (kT = this._takeFreeSlot(!1)), this._bufferIndex = kT, this._buffer = this._buffers[kT][0], this.bindUniformBuffer();
        const lT = this._buffers[kT][1];
        lT && this._buffersEqual(this._bufferData, lT) || (lT && this._copyBuffer(this._bufferData, lT), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[kT] = this._currentFrameId, this._slotGeneration[kT] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(TT) {
        for (let cT = 0; cT < this._freeSlots.length; ++cT) {
          const kT = this._freeSlots[cT];
          if (this._slotFrameId[kT] !== this._currentFrameId) return TT && (this._freeSlots[cT] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), kT
        }
        this._rebuild();
        const kT = this._buffers.length - 1;
        return TT || this._freeSlots.push(kT), kT
      }
      _releaseOwnerSlot(TT) {
        const kT = this._slotByOwner?.get(TT);
        if (void 0 === kT) return;
        this._slotByOwner.delete(TT);
        const cT = this._ownerListsBySlot.get(kT);
        cT && (this._removeOwnerBacklink(cT), this._ownerListsBySlot.delete(kT)), this._ownerCount--, this._freeSlots.push(kT)
      }
      _removeOwnerBacklink(TT) {
        const kT = TT.indexOf(this); - 1 !== kT && (TT[kT] = TT[TT.length - 1], TT.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(TT, kT, cT) {
        this._checkNewFrame();
        let MT = this._uniformLocations[TT];
        if (void 0 === MT) {
          if (this._buffer) return void lT.e.Error("Cannot add an uniform after UBO has been created. uniformName=" + TT);
          this.addUniform(TT, cT), MT = this._uniformLocations[TT]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let TT = 0; TT < cT; TT++) this._bufferData[MT + TT] = kT[TT];
          this._dataGeneration++
        } else {
          let TT = !1;
          for (let lT = 0; lT < cT; lT++)(16 === cT && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[MT + lT] !== Math.fround(kT[lT])) && (TT = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[MT + lT] = kT[lT]);
          this._needSync = this._needSync || TT, TT && this._dataGeneration++
        }
      }
      updateUniformArray(TT, kT, cT) {
        this._checkNewFrame();
        const KT = this._uniformLocations[TT];
        if (void 0 === KT) return void lT.e.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const OT = this._uniformArraySizes[TT];
        if (this._dynamic) {
          for (let TT = 0; TT < cT; TT++) this._bufferData[KT + TT] = kT[TT];
          this._dataGeneration++
        } else {
          let TT = !1,
            lT = 0,
            yT = 0;
          for (let fT = 0; fT < cT; fT++)
            if (this._bufferData[KT + 4 * yT + lT] !== MT.h.FloatRound(kT[fT]) && (TT = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[KT + 4 * yT + lT] = kT[fT]), lT++, lT === OT.strideSize) {
              for (; lT < 4; lT++) this._bufferData[KT + 4 * yT + lT] = 0;
              lT = 0, yT++
            } this._needSync = this._needSync || TT, TT && this._dataGeneration++
        }
      }
      _cacheMatrix(TT, kT) {
        this._checkNewFrame();
        const cT = this._valueCache[TT],
          lT = kT.updateFlag;
        return (void 0 === cT || cT !== lT) && (this._valueCache[TT] = lT, !0)
      }
      _updateMatrix3x3ForUniform(TT, kT) {
        for (let cT = 0; cT < 3; cT++) KT._TempBuffer[4 * cT] = kT[3 * cT], KT._TempBuffer[4 * cT + 1] = kT[3 * cT + 1], KT._TempBuffer[4 * cT + 2] = kT[3 * cT + 2], KT._TempBuffer[4 * cT + 3] = 0;
        this.updateUniform(TT, KT._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(TT, kT) {
        this._currentEffect.setMatrix3x3(TT, kT)
      }
      _updateMatrix2x2ForEffect(TT, kT) {
        this._currentEffect.setMatrix2x2(TT, kT)
      }
      _updateMatrix2x2ForUniform(TT, kT) {
        for (let cT = 0; cT < 2; cT++) KT._TempBuffer[4 * cT] = kT[2 * cT], KT._TempBuffer[4 * cT + 1] = kT[2 * cT + 1], KT._TempBuffer[4 * cT + 2] = 0, KT._TempBuffer[4 * cT + 3] = 0;
        this.updateUniform(TT, KT._TempBuffer, 8)
      }
      _updateFloatForEffect(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(TT + cT, kT)
      }
      _updateFloatForUniform(TT, kT) {
        KT._TempBuffer[0] = kT, this.updateUniform(TT, KT._TempBuffer, 1)
      }
      _updateFloat2ForEffect(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(TT + lT, kT, cT)
      }
      _updateFloat2ForUniform(TT, kT, cT) {
        KT._TempBuffer[0] = kT, KT._TempBuffer[1] = cT, this.updateUniform(TT, KT._TempBuffer, 2)
      }
      _updateFloat3ForEffect(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(TT + MT, kT, cT, lT)
      }
      _updateFloat3ForUniform(TT, kT, cT, lT) {
        KT._TempBuffer[0] = kT, KT._TempBuffer[1] = cT, KT._TempBuffer[2] = lT, this.updateUniform(TT, KT._TempBuffer, 3)
      }
      _updateFloat4ForEffect(TT, kT, cT, lT, MT) {
        let KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(TT + KT, kT, cT, lT, MT)
      }
      _updateFloat4ForUniform(TT, kT, cT, lT, MT) {
        KT._TempBuffer[0] = kT, KT._TempBuffer[1] = cT, KT._TempBuffer[2] = lT, KT._TempBuffer[3] = MT, this.updateUniform(TT, KT._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[TT]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(TT + cT, kT);
            break;
          case 3:
            this._currentEffect.setFloatArray3(TT + cT, kT);
            break;
          case 4:
            this._currentEffect.setFloatArray4(TT + cT, kT);
            break;
          default:
            this._currentEffect.setFloatArray(TT + cT, kT)
        }
      }
      _updateFloatArrayForUniform(TT, kT) {
        this.updateUniformArray(TT, kT, kT.length)
      }
      _updateArrayForEffect(TT, kT) {
        this._currentEffect.setArray(TT, kT)
      }
      _updateArrayForUniform(TT, kT) {
        this.updateUniformArray(TT, kT, kT.length)
      }
      _updateIntArrayForEffect(TT, kT) {
        this._currentEffect.setIntArray(TT, kT)
      }
      _updateIntArrayForUniform(TT, kT) {
        KT._TempBufferInt32View.set(kT), this.updateUniformArray(TT, KT._TempBuffer, kT.length)
      }
      _updateUIntArrayForEffect(TT, kT) {
        this._currentEffect.setUIntArray(TT, kT)
      }
      _updateUIntArrayForUniform(TT, kT) {
        KT._TempBufferUInt32View.set(kT), this.updateUniformArray(TT, KT._TempBuffer, kT.length)
      }
      _updateMatrixForEffect(TT, kT) {
        this._currentEffect.setMatrix(TT, kT)
      }
      _updateMatrixForUniform(TT, kT) {
        this._cacheMatrix(TT, kT) && this.updateUniform(TT, kT.acT(), 16)
      }
      _updateMatricesForEffect(TT, kT) {
        this._currentEffect.setMatrices(TT, kT)
      }
      _updateMatricesForUniform(TT, kT) {
        this.updateUniform(TT, kT, kT.length)
      }
      _updateVector3ForEffect(TT, kT) {
        this._currentEffect.setVector3(TT, kT)
      }
      _updateVector3ForUniform(TT, kT) {
        KT._TempBuffer[0] = kT.x, KT._TempBuffer[1] = kT.y, KT._TempBuffer[2] = kT.z, this.updateUniform(TT, KT._TempBuffer, 3)
      }
      _updateVector4ForEffect(TT, kT) {
        this._currentEffect.setVector4(TT, kT)
      }
      _updateVector4ForUniform(TT, kT) {
        KT._TempBuffer[0] = kT.x, KT._TempBuffer[1] = kT.y, KT._TempBuffer[2] = kT.z, KT._TempBuffer[3] = kT.w, this.updateUniform(TT, KT._TempBuffer, 4)
      }
      _updateColor3ForEffect(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(TT + cT, kT)
      }
      _updateColor3ForUniform(TT, kT) {
        KT._TempBuffer[0] = kT.r, KT._TempBuffer[1] = kT.g, KT._TempBuffer[2] = kT.b, this.updateUniform(TT, KT._TempBuffer, 3)
      }
      _updateColor4ForEffect(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(TT + lT, kT, cT)
      }
      _updateDirectColor4ForEffect(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(TT + cT, kT)
      }
      _updateColor4ForUniform(TT, kT, cT) {
        KT._TempBuffer[0] = kT.r, KT._TempBuffer[1] = kT.g, KT._TempBuffer[2] = kT.b, KT._TempBuffer[3] = cT, this.updateUniform(TT, KT._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(TT, kT) {
        KT._TempBuffer[0] = kT.r, KT._TempBuffer[1] = kT.g, KT._TempBuffer[2] = kT.b, KT._TempBuffer[3] = kT.a, this.updateUniform(TT, KT._TempBuffer, 4)
      }
      _updateIntForEffect(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(TT + cT, kT)
      }
      _updateIntForUniform(TT, kT) {
        KT._TempBufferInt32View[0] = kT, this.updateUniform(TT, KT._TempBuffer, 1)
      }
      _updateInt2ForEffect(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(TT + lT, kT, cT)
      }
      _updateInt2ForUniform(TT, kT, cT) {
        KT._TempBufferInt32View[0] = kT, KT._TempBufferInt32View[1] = cT, this.updateUniform(TT, KT._TempBuffer, 2)
      }
      _updateInt3ForEffect(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(TT + MT, kT, cT, lT)
      }
      _updateInt3ForUniform(TT, kT, cT, lT) {
        KT._TempBufferInt32View[0] = kT, KT._TempBufferInt32View[1] = cT, KT._TempBufferInt32View[2] = lT, this.updateUniform(TT, KT._TempBuffer, 3)
      }
      _updateInt4ForEffect(TT, kT, cT, lT, MT) {
        let KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(TT + KT, kT, cT, lT, MT)
      }
      _updateInt4ForUniform(TT, kT, cT, lT, MT) {
        KT._TempBufferInt32View[0] = kT, KT._TempBufferInt32View[1] = cT, KT._TempBufferInt32View[2] = lT, KT._TempBufferInt32View[3] = MT, this.updateUniform(TT, KT._TempBuffer, 4)
      }
      _updateUIntForEffect(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(TT + cT, kT)
      }
      _updateUIntForUniform(TT, kT) {
        KT._TempBufferUInt32View[0] = kT, this.updateUniform(TT, KT._TempBuffer, 1)
      }
      _updateUInt2ForEffect(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(TT + lT, kT, cT)
      }
      _updateUInt2ForUniform(TT, kT, cT) {
        KT._TempBufferUInt32View[0] = kT, KT._TempBufferUInt32View[1] = cT, this.updateUniform(TT, KT._TempBuffer, 2)
      }
      _updateUInt3ForEffect(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(TT + MT, kT, cT, lT)
      }
      _updateUInt3ForUniform(TT, kT, cT, lT) {
        KT._TempBufferUInt32View[0] = kT, KT._TempBufferUInt32View[1] = cT, KT._TempBufferUInt32View[2] = lT, this.updateUniform(TT, KT._TempBuffer, 3)
      }
      _updateUInt4ForEffect(TT, kT, cT, lT, MT) {
        let KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(TT + KT, kT, cT, lT, MT)
      }
      _updateUInt4ForUniform(TT, kT, cT, lT, MT) {
        KT._TempBufferUInt32View[0] = kT, KT._TempBufferUInt32View[1] = cT, KT._TempBufferUInt32View[2] = lT, KT._TempBufferUInt32View[3] = MT, this.updateUniform(TT, KT._TempBuffer, 4)
      }
      setTexture(TT, kT) {
        this._currentEffect.setTexture(TT, kT)
      }
      setTextureArray(TT, kT) {
        this._currentEffect.setTextureArray(TT, kT)
      }
      bindTexture(TT, kT) {
        this._currentEffect._bindTexture(TT, kT)
      }
      updateUniformDirectly(TT, kT) {
        this.updateUniform(TT, kT, kT.length), this.update()
      }
      bindToEffect(TT, kT) {
        this._currentEffect = TT, this._currentEffectName = kT
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(TT) {
        if (!this._buffers) return this._buffer === TT;
        for (let kT = 0; kT < this._buffers.length; ++kT) {
          if (this._buffers[kT][0] === TT) return this._bufferIndex = kT, this._buffer = TT, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[kT][1] && (this._bufferData.set(this._buffers[kT][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(TT) {
        return void 0 !== this._uniformLocations[TT]
      }
      dispose() {
        if (this._noUBO) return;
        const TT = this._engine._uniformBuffers,
          kT = TT.indexOf(this);
        if (-1 !== kT && (TT[kT] = TT[TT.length - 1], TT.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let TT = 0; TT < this._buffers.length; ++TT) {
            const kT = this._buffers[TT][0];
            this._engine._releaseBuffer(kT)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    KT._MAX_UNIFORM_SIZE = 256, KT._TempBuffer = new Float32Array(KT._MAX_UNIFORM_SIZE), KT._TempBufferInt32View = new Int32Array(KT._TempBuffer.buffer), KT._TempBufferUInt32View = new Uint32Array(KT._TempBuffer.buffer)
  },
  39539: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT
    });
    var lT = cT(39547);
    class MT extends lT.c {
      constructor(TT) {
        super(), this._buffer = TT
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  39631: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => fT,
      h: () => xT
    });
    const lT = "__bjs_serializable__",
      MT = new WeakMap;

    function KT(TT, kT) {
      return Object.prototype.hasOwnProperty.call(TT, kT)
    }
    const OT = function() {
      let TT = Symbol.metadata;
      return TT || (TT = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: TT
      })), TT
    }();

    function yT(TT) {
      return "function" === typeof TT ? TT : TT?.constructor
    }

    function fT(TT) {
      if (!TT) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(OT)}) polyfill must run before decorated classes are evaluated.`);
      return KT(TT, lT) || (TT[lT] = {}), TT[lT]
    }

    function xT(TT) {
      const kT = yT(TT),
        cT = kT ? kT[OT] : void 0;
      if (!cT) return {};
      const fT = MT.get(cT);
      if (fT) return fT;
      const xT = {},
        IT = [];
      let AT = cT;
      for (; AT;) IT.push(AT), AT = Object.getPrototypeOf(AT);
      for (const MT of IT)
        if (KT(MT, lT)) {
          const TT = MT[lT];
          for (const kT in TT) xT[kT] = TT[kT]
        } return MT.set(cT, xT), xT
    }
  },
  39624: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => yT,
      C: () => IT,
      F: () => AT,
      J: () => OT,
      b: () => ST,
      c: () => KT,
      e: () => QT,
      i: () => jT,
      m: () => fT,
      n: () => vT,
      p: () => xT,
      r: () => hT,
      t: () => CT,
      x: () => tT
    });
    var lT = cT(39631);

    function MT(TT, kT) {
      return (cT, MT) => {
        if (!MT.metadata) return;
        const KT = String(MT.name),
          OT = (0, lT.d)(MT.metadata);
        OT[KT] || (OT[KT] = {
          type: TT,
          sourceName: kT
        })
      }
    }

    function KT(TT) {
      return function(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (cT, lT) => {
          const MT = kT || "_" + String(lT.name);
          return {
            init(TT) {
              return void 0 === TT && MT in this || (this[MT] = TT), TT
            },
            get() {
              return this[MT]
            },
            set(kT) {
              "function" === typeof this[MT]?.equals && this[MT].equals(kT) || this[MT] !== kT && (this[MT] = kT, this[TT]())
            }
          }
        }
      }(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function OT(TT) {
      return MT(0, TT)
    }

    function yT(TT) {
      return MT(1, TT)
    }

    function fT(TT) {
      return MT(2, TT)
    }

    function xT(TT) {
      return MT(3, TT)
    }

    function IT(TT) {
      return MT(4, TT)
    }

    function AT(TT) {
      return MT(5, TT)
    }

    function CT(TT) {
      return MT(6, TT)
    }

    function jT(TT) {
      return MT(7, TT)
    }

    function vT(TT) {
      return MT(8, TT)
    }

    function tT(TT) {
      return MT(10, TT)
    }

    function hT(TT) {
      return MT(12, TT)
    }

    function NT(TT, kT, cT) {
      const lT = String(kT.name);
      let MT = null;
      const KT = function() {
        if (null === MT) {
          MT = TT, "undefined" !== typeof _native && _native[lT] && (MT = cT(_native[lT], TT));
          const OT = this && (kT.static ? this : Object.getPrototypeOf(this));
          OT?.[lT] === KT && (OT[lT] = MT)
        }
        for (var OT = arguments.length, yT = new Array(OT), fT = 0; fT < OT; fT++) yT[fT] = arguments[fT];
        return MT.apply(this, yT)
      };
      return KT
    }

    function QT(TT, kT) {
      return NT(TT, kT, (TT => TT))
    }

    function ST(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (cT, lT) => {
        const MT = kT || "_" + String(lT.name);
        return {
          get() {
            return this[MT]?.value
          },
          set(kT) {
            "function" === typeof this[MT]?.value?.equals && this[MT].value.equals(kT) || this[MT].value !== kT && (this[MT].value = kT, this[TT]())
          }
        }
      }
    }
    QT.filter = function(TT) {
      return (kT, cT) => NT(kT, cT, ((kT, cT) => function() {
        for (var lT = arguments.length, MT = new Array(lT), KT = 0; KT < lT; KT++) MT[KT] = arguments[KT];
        return TT(...MT) ? kT(...MT) : cT.apply(this, MT)
      }))
    }
  },
  39645: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => xT
    });
    var lT = cT(39500),
      MT = cT(39649),
      KT = cT(37093),
      OT = cT(36892),
      yT = cT(39631);
    const fT = function(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const KT = TT();
      MT.b && MT.b.HasTags(kT) && MT.b.AddTagsTo(KT, MT.b.GetTags(kT, !0));
      const OT = (0, yT.h)(KT),
        fT = {};
      for (const MT in OT) {
        const TT = OT[MT],
          yT = kT[MT],
          IT = TT.type;
        if (void 0 !== yT && null !== yT && ("uniqueId" !== MT || xT.AllowLoadingUniqueId)) switch (IT) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof yT.slice ? KT[MT] = yT.slice() : KT[MT] = yT;
            break;
          case 1:
            lT.cloneTexturesOnlyOnce && fT[yT.uniqueId] ? KT[MT] = fT[yT.uniqueId] : (KT[MT] = cT || yT.isRenderTarget ? yT : yT.clone(), fT[yT.uniqueId] = KT[MT]);
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
            KT[MT] = cT ? yT : yT.clone()
        }
      }
      return KT
    };
    class xT {
      static AppendSerializedAnimations(TT, kT) {
        if (TT.animations) {
          kT.animations = [];
          for (let cT = 0; cT < TT.animations.length; cT++) {
            const lT = TT.animations[cT];
            kT.animations.push(lT.serialize())
          }
        }
      }
      static Serialize(TT, kT) {
        kT || (kT = {}), MT.b && (kT.tags = MT.b.GetTags(TT));
        const cT = (0, yT.h)(TT);
        for (const lT in cT) {
          const MT = cT[lT],
            KT = MT.sourceName || lT,
            OT = MT.type,
            yT = TT[lT];
          if (void 0 !== yT && null !== yT && ("uniqueId" !== lT || xT.AllowLoadingUniqueId)) switch (OT) {
            case 0:
              Array.isArray(yT) ? kT[KT] = yT.slice() : kT[KT] = yT;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              kT[KT] = yT.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              kT[KT] = yT.acT();
              break;
            case 6:
            case 11:
              kT[KT] = yT.id
          }
        }
        return kT
      }
      static ParseProperties(TT, kT, cT, lT) {
        lT || (lT = "");
        const MT = (0, yT.h)(kT);
        for (const yT in MT) {
          const fT = MT[yT],
            IT = TT[fT.sourceName || yT],
            AT = fT.type;
          if (void 0 !== IT && null !== IT && ("uniqueId" !== yT || xT.AllowLoadingUniqueId)) {
            const TT = kT;
            switch (AT) {
              case 0:
                TT[yT] = IT;
                break;
              case 1:
                cT && (TT[yT] = xT._TextureParser(IT, cT, lT));
                break;
              case 2:
                TT[yT] = KT.c.FromArray(IT);
                break;
              case 3:
                TT[yT] = xT._FresnelParametersParser(IT);
                break;
              case 4:
                TT[yT] = OT.i.FromArray(IT);
                break;
              case 5:
                TT[yT] = OT.m.FromArray(IT);
                break;
              case 6:
                cT && (TT[yT] = cT.getLastMeshById(IT));
                break;
              case 7:
                TT[yT] = xT._ColorCurvesParser(IT);
                break;
              case 8:
                TT[yT] = KT.g.FromArray(IT);
                break;
              case 9:
                TT[yT] = xT._ImageProcessingConfigurationParser(IT);
                break;
              case 10:
                TT[yT] = OT.f.FromArray(IT);
                break;
              case 11:
                cT && (TT[yT] = cT.getCameraById(IT));
                break;
              case 12:
                TT[yT] = OT.d.FromArray(IT);
                break;
              case 13:
                TT[yT] = OT.o.FromArray(IT)
            }
          }
        }
      }
      static Parse(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const KT = TT();
        return MT.b && MT.b.AddTagsTo(KT, kT.tags), xT.ParseProperties(kT, KT, cT, lT), KT
      }
      static Clone(TT, kT) {
        return fT(TT, kT, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(TT, kT) {
        return fT(TT, kT, !0)
      }
    }
    xT.AllowLoadingUniqueId = !1, xT._ImageProcessingConfigurationParser = TT => {
      throw (0, lT.i)("ImageProcessingConfiguration")
    }, xT._FresnelParametersParser = TT => {
      throw (0, lT.i)("FresnelParameters")
    }, xT._ColorCurvesParser = TT => {
      throw (0, lT.i)("ColorCurves")
    }, xT._TextureParser = (TT, kT, cT) => {
      throw (0, lT.i)("Texture")
    }
  },
  39571: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT
    });
    var lT = cT(39521);
    class MT {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = MT.Enabled, this._lastSecValueCount++
      }
      addCount(TT, kT) {
        MT.Enabled && (this._current += TT, this._hasCurrentValue = !0, kT && this._fetchResult())
      }
      beginMonitoring() {
        MT.Enabled && (this._startMonitoringTime = lT.d.Now)
      }
      endMonitoring() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!MT.Enabled) return;
        TT && this.fetchNewFrame();
        const kT = lT.d.Now;
        this._current = kT - this._startMonitoringTime, this._hasCurrentValue = !0, TT && this._fetchResult()
      }
      qN() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const TT = lT.d.Now;
        TT - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = TT, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    MT.Enabled = !0
  },
  39741: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => MT,
      g: () => lT
    });
    class lT {
      constructor(TT) {
        this.length = 0, this.data = new Array(TT), this._id = lT._GlobalId++
      }
      push(TT) {
        this.data[this.length++] = TT, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(TT) {
        for (let kT = 0; kT < this.length; kT++) TT(this.data[kT])
      }
      sort(TT) {
        this.data.sort(TT)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(TT) {
        if (0 !== TT.length) {
          this.length + TT.length > this.data.length && (this.data.length = 2 * (this.length + TT.length));
          for (let kT = 0; kT < TT.length; kT++) this.data[this.length++] = (TT.data || TT)[kT]
        }
      }
      indexOf(TT) {
        const kT = this.data.indexOf(TT);
        return kT >= this.length ? -1 : kT
      }
      contains(TT) {
        return -1 !== this.indexOf(TT)
      }
    }
    lT._GlobalId = 0;
    class MT extends lT {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(TT) {
        super.push(TT), TT.__smartArrayFlags || (TT.__smartArrayFlags = {}), TT.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(TT) {
        return (!TT.__smartArrayFlags || TT.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(TT), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(TT) {
        if (0 !== TT.length) {
          this.length + TT.length > this.data.length && (this.data.length = 2 * (this.length + TT.length));
          for (let kT = 0; kT < TT.length; kT++) {
            const cT = (TT.data || TT)[kT];
            this.pushNoDuplicate(cT)
          }
        }
      }
    }
  },
  39649: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT
    });
    class lT {
      static Eval(TT, kT) {
        return "true" === (TT = TT.match(/\([^()]*\)/g) ? TT.replace(/\([^()]*\)/g, (TT => (TT = TT.slice(1, TT.length - 1), lT._HandleParenthesisContent(TT, kT)))) : lT._HandleParenthesisContent(TT, kT)) || "false" !== TT && lT.Eval(TT, kT)
      }
      static _HandleParenthesisContent(TT, kT) {
        let cT;
        kT = kT || (TT => "true" === TT);
        const MT = TT.split("||");
        for (const KT in MT)
          if (Object.prototype.hasOwnProperty.call(MT, KT)) {
            let TT = lT._SimplifyNegation(MT[KT].trim());
            const OT = TT.split("&&");
            if (OT.length > 1)
              for (let MT = 0; MT < OT.length; ++MT) {
                const KT = lT._SimplifyNegation(OT[MT].trim());
                if (cT = "true" !== KT && "false" !== KT ? "!" === KT[0] ? !kT(KT.substring(1)) : kT(KT) : "true" === KT, !cT) {
                  TT = "false";
                  break
                }
              }
            if (cT || "true" === TT) {
              cT = !0;
              break
            }
            cT = "true" !== TT && "false" !== TT ? "!" === TT[0] ? !kT(TT.substring(1)) : kT(TT) : "true" === TT
          } return cT ? "true" : "false"
      }
      static _SimplifyNegation(TT) {
        return "!true" === (TT = (TT = TT.replace(/^[\s!]+/, (TT => (TT = TT.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? TT = "false" : "!false" === TT && (TT = "true"), TT
      }
    }
    class MT {
      static EnableFor(TT) {
        TT._tags = TT._tags || {}, TT.hasTags = () => MT.HasTags(TT), TT.addTags = kT => MT.AddTagsTo(TT, kT), TT.removeTags = kT => MT.RemoveTagsFrom(TT, kT), TT.matchesTagsQuery = kT => MT.MatchesQuery(TT, kT)
      }
      static DisableFor(TT) {
        delete TT._tags, delete TT.hasTags, delete TT.addTags, delete TT.removeTags, delete TT.matchesTagsQuery
      }
      static HasTags(TT) {
        if (!TT._tags) return !1;
        const kT = TT._tags;
        for (const cT in kT)
          if (Object.prototype.hasOwnProperty.call(kT, cT)) return !0;
        return !1
      }
      static GetTags(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!TT._tags) return null;
        if (kT) {
          const kT = [];
          for (const cT in TT._tags) Object.prototype.hasOwnProperty.call(TT._tags, cT) && !0 === TT._tags[cT] && kT.push(cT);
          return kT.join(" ")
        }
        return TT._tags
      }
      static AddTagsTo(TT, kT) {
        if (!kT) return;
        if ("string" !== typeof kT) return;
        const cT = kT.split(" ");
        for (const lT of cT) MT._AddTagTo(TT, lT)
      }
      static _AddTagTo(TT, kT) {
        "" !== (kT = kT.trim()) && "true" !== kT && "false" !== kT && (kT.match(/[\s]/) || kT.match(/^([!]|([|]|[&]){2})/) || (MT.EnableFor(TT), TT._tags[kT] = !0))
      }
      static RemoveTagsFrom(TT, kT) {
        if (!MT.HasTags(TT)) return;
        const cT = kT.split(" ");
        for (const lT in cT) MT._RemoveTagFrom(TT, cT[lT])
      }
      static _RemoveTagFrom(TT, kT) {
        delete TT._tags[kT]
      }
      static MatchesQuery(TT, kT) {
        return void 0 === kT || ("" === kT ? MT.HasTags(TT) : lT.Eval(kT, (kT => MT.HasTags(TT) && TT._tags[kT])))
      }
    }
  },
  39791: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT
    });
    var lT = cT(39782),
      MT = cT(36932);
    class KT {
      constructor(TT) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new MT.b, this._scene = TT
      }
      _prepareBuffers() {
        if (this._vertexBuffers[lT.l.PositionKind]) return;
        const TT = [];
        TT.push(1, 1), TT.push(-1, 1), TT.push(-1, -1), TT.push(1, -1), this._vertexBuffers[lT.l.PositionKind] = new lT.l(this._scene.Dv(), TT, lT.l.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const TT = [];
        TT.push(0), TT.push(1), TT.push(2), TT.push(0), TT.push(2), TT.push(3), this._indexBuffer = this._scene.Dv().createIndexBuffer(TT)
      }
      _getActivePostProcesses(TT) {
        const kT = this._activePostProcesses;
        kT.length = 0;
        for (let cT = 0; cT < TT.length; cT++) {
          const lT = TT[cT];
          lT && kT.push(lT)
        }
        return kT
      }
      _rebuild() {
        const TT = this._vertexBuffers[lT.l.PositionKind];
        TT && (TT._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cT = this._scene.activeCamera;
        return !!cT && (kT = kT || this._getActivePostProcesses(cT._postProcesses), !(!kT || 0 === kT.length || !this._scene.postProcessesEnabled) && (kT[0].activate(cT, TT, null !== kT && void 0 !== kT), !0))
      }
      directRender(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          KT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          OT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : TT.length;
        const yT = this._scene.Dv();
        for (let fT = 0; fT < OT; fT++) {
          fT < TT.length - 1 ? TT[fT + 1].activate(this._scene.activeCamera || this._scene, kT?.texture) : (kT ? yT.bindFramebuffer(kT, lT, void 0, void 0, cT, MT) : KT || yT.restoreDefaultFramebuffer(), yT._debugInsertMarker?.(`post process ${TT[fT].name} output`));
          const OT = TT[fT],
            xT = OT.apply();
          xT && (OT.onBeforeRenderObservable.notifyObservers(xT), this._prepareBuffers(), yT.bindBuffers(this._vertexBuffers, this._indexBuffer, xT), yT.drawElementsType(0, 0, 6), OT.onAfterRenderObservable.notifyObservers(xT))
        }
        yT.setDepthBuffer(!0), yT.setDepthWrite(!0)
      }
      _finalizeFrame(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const KT = this._scene.activeCamera;
        if (!KT) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (lT = lT || this._getActivePostProcesses(KT._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const OT = this._scene.Dv();
        for (let yT = 0, fT = lT.length; yT < fT; yT++) {
          const xT = lT[yT];
          if (yT < fT - 1 ? xT._outputTexture = lT[yT + 1].activate(KT, kT?.texture) : (kT ? (OT.bindFramebuffer(kT, cT, void 0, void 0, MT), xT._outputTexture = kT) : (OT.restoreDefaultFramebuffer(), xT._outputTexture = null), OT._debugInsertMarker?.(`post process ${lT[yT].name} output`)), TT) break;
          const IT = xT.apply();
          IT && (xT.onBeforeRenderObservable.notifyObservers(IT), this._prepareBuffers(), OT.bindBuffers(this._vertexBuffers, this._indexBuffer, IT), OT.drawElementsType(0, 0, 6), xT.onAfterRenderObservable.notifyObservers(IT))
        }
        OT.setDepthBuffer(!0), OT.setDepthWrite(!0), OT.setAlphaMode(0)
      }
      dispose() {
        const TT = this._vertexBuffers[lT.l.PositionKind];
        TT && (TT.dispose(), this._vertexBuffers[lT.l.PositionKind] = null), this._indexBuffer && (this._scene.Dv()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  39803: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT
    });
    var lT = cT(39741),
      MT = cT(36892);
    class KT {
      set opaqueSortCompareFn(TT) {
        this._opaqueSortCompareFn = TT || KT.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(TT) {
        this._alphaTestSortCompareFn = TT || KT.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(TT) {
        this._transparentSortCompareFn = TT || KT.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          KT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = TT, this._opaqueSubMeshes = new lT.g(256), this._transparentSubMeshes = new lT.g(256), this._alphaTestSubMeshes = new lT.g(256), this._depthOnlySubMeshes = new lT.g(256), this._particleSystems = new lT.g(256), this._spriteManagers = new lT.g(256), this._empty = !0, this._edgesRenderers = new lT.d(16), this.disableDepthPrePass = !1, this._scene = kT, this.opaqueSortCompareFn = cT, this.alphaTestSortCompareFn = MT, this.transparentSortCompareFn = KT
      }
      render(TT, kT, cT, lT) {
        let MT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          KT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          OT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          yT = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          fT = arguments.length > 8 ? arguments[8] : void 0;
        if (TT) return void TT(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const xT = this._scene.Dv();
        MT && 0 !== this._depthOnlySubMeshes.length && (xT.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), xT.setColorWrite(!0)), KT && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), OT && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const IT = xT.getStencilBuffer();
        if (xT.setStencilBuffer(!1), kT && this._renderSprites(), cT && this._renderParticles(lT), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), yT && (fT || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (xT.setStencilBuffer(IT), fT) fT(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const TT = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            TT.length && this._renderTransparent(TT)
          } else this._renderTransparent(this._transparentSubMeshes);
          xT.setAlphaMode(0)
        }
        if (xT.setStencilBuffer(!1), KT && this._edgesRenderers.length) {
          for (let TT = 0; TT < this._edgesRenderers.length; TT++) this._edgesRenderers.data[TT].render();
          xT.setAlphaMode(0)
        }
        xT.setStencilBuffer(IT)
      }
      _renderOpaqueSorted(TT) {
        KT._RenderSorted(TT, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(TT) {
        KT._RenderSorted(TT, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(TT) {
        KT._RenderSorted(TT, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(TT, kT, cT, lT, OT) {
        let yT, fT = 0;
        const xT = cT ? cT.globalPosition : KT._ZeroVector;
        if (lT && kT !== KT.PainterSortCompare)
          for (; fT < TT.length; fT++) yT = TT.data[fT], yT._alphaIndex = yT.getMesh().alphaIndex, yT._distanceToCamera = MT.m.Distance(yT.DH().WcT.centerWorld, xT);
        const IT = TT.length === TT.data.length ? TT.data : TT.data.slice(0, TT.length);
        kT && IT.sort(kT);
        const AT = IT[0].getMesh().NJ();
        for (fT = 0; fT < IT.length; fT++) {
          if (yT = IT[fT], AT._activeMeshesFrozenButKeepClipping && !yT.isInFrustum(AT._frustumPlanes)) continue;
          let TT = !1;
          if (lT) {
            const kT = yT.wv();
            if (kT && kT.needDepthPrePass && !OT) {
              TT = !0;
              const cT = kT.NJ().Dv();
              cT.setColorWrite(!1), cT.setAlphaMode(0), yT.render(!1), cT.setColorWrite(!0)
            }
          }
          const kT = yT._renderingMesh;
          !TT && kT._renderRunFollower(yT, lT) || yT.render(lT)
        }
      }
      static defaultTransparentSortCompare(TT, kT) {
        return TT._alphaIndex > kT._alphaIndex ? 1 : TT._alphaIndex < kT._alphaIndex ? -1 : KT.backToFrontSortCompare(TT, kT)
      }
      static backToFrontSortCompare(TT, kT) {
        return TT._distanceToCamera < kT._distanceToCamera ? 1 : TT._distanceToCamera > kT._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(TT, kT) {
        return TT._distanceToCamera < kT._distanceToCamera ? -1 : TT._distanceToCamera > kT._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(TT, kT) {
        const cT = TT.getMesh(),
          lT = kT.getMesh();
        return cT.material && lT.material ? cT.material.uniqueId - lT.material.uniqueId : cT.uniqueId - lT.uniqueId
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
      dispatch(TT, kT, cT) {
        void 0 === kT && (kT = TT.getMesh()), void 0 === cT && (cT = TT.wv()), null !== cT && void 0 !== cT && (cT.needAlphaBlendingForMesh(kT) ? this._transparentSubMeshes.push(TT) : cT.needAlphaTestingForMesh(kT) ? (cT.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(TT), this._alphaTestSubMeshes.push(TT)) : (cT.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(TT), this._opaqueSubMeshes.push(TT)), kT._renderingGroup = this, kT._edgesRenderer && kT.isEnabled() && kT.isVisible && kT._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(kT._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(TT) {
        this._spriteManagers.push(TT), this._empty = !1
      }
      dispatchParticles(TT) {
        this._particleSystems.push(TT), this._empty = !1
      }
      _renderParticles(TT) {
        if (0 === this._particleSystems.length) return;
        const kT = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let cT = 0; cT < this._particleSystems.length; cT++) {
          const lT = this._particleSystems.data[cT];
          if (0 === (kT && kT.layerMask & lT.layerMask)) continue;
          const MT = lT.emitter;
          MT.position && TT && -1 === TT.indexOf(MT) || this._scene._activeParticles.addCount(lT.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const TT = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let kT = 0; kT < this._spriteManagers.length; kT++) {
          const cT = this._spriteManagers.data[kT];
          0 !== (TT && TT.layerMask & cT.layerMask) && cT.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    KT._ZeroVector = MT.m.Zero()
  },
  39799: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT
    });
    var lT = cT(39803);
    class MT {}
    class KT {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(TT) {
        this._disableDepthPrePass = TT;
        for (const kT of this._renderingGroups) kT.disableDepthPrePass = TT
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(TT) {
        TT !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = TT, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const TT of this._scene.meshes)
          if (TT.kF)
            for (const kT of TT.kF) kT._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const TT of this._scene.spriteManagers) TT._wasDispatched = !1;
        for (const TT of this._scene.lF) TT._wasDispatched = !1
      }
      constructor(TT) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new MT, this._maintainStateBetweenFrames = !1, this._scene = TT;
        for (let kT = KT.MIN_RENDERINGGROUPS; kT < KT.MAX_RENDERINGGROUPS; kT++) this._autoClearDepthStencil[kT] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(TT) {
        const kT = TT || 0;
        return this._prepareRenderingGroup(kT), this._renderingGroups[kT]
      }
      _clearDepthStencilBuffer() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.Dv().clear(null, !1, TT, kT), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(TT, kT, cT, lT) {
        let MT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          OT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          fT = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          xT = arguments.length > 8 ? arguments[8] : void 0,
          IT = arguments.length > 9 ? arguments[9] : void 0;
        const AT = this._renderingGroupInfo;
        AT.et = this._scene, AT.camera = this._scene.activeCamera, AT.renderingManager = this;
        const CT = IT ?? this._scene.spriteManagers;
        if (CT && lT)
          for (let KT = 0; KT < CT.length; KT++) {
            const TT = CT[KT];
            this.dispatchSprites(TT)
          }
        for (let jT = KT.MIN_RENDERINGGROUPS; jT < KT.MAX_RENDERINGGROUPS; jT++) {
          this._depthStencilBufferAlreadyCleaned = jT === KT.MIN_RENDERINGGROUPS;
          const IT = this._renderingGroups[jT];
          if (!IT || IT._empty) continue;
          const CT = 1 << jT;
          if (AT.renderingGroupId = jT, this._scene.onBeforeRenderingGroupObservable.notifyObservers(AT, CT), KT.AUTOCLEAR) {
            const TT = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(jT) : this._autoClearDepthStencil[jT];
            TT && TT.autoClear && this._clearDepthStencilBuffer(TT.depth, TT.stencil)
          }
          for (let TT = 0, kT = this._scene._beforeRenderingGroupDrawStage; TT < kT.length; TT++) {
            kT[TT].action(jT)
          }
          IT.render(TT, lT, cT, kT, MT, OT, yT, fT, xT);
          for (let TT = 0, kT = this._scene._afterRenderingGroupDrawStage; TT < kT.length; TT++) {
            kT[TT].action(jT)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(AT, CT)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let TT = KT.MIN_RENDERINGGROUPS; TT < KT.MAX_RENDERINGGROUPS; TT++) {
            const kT = this._renderingGroups[TT];
            kT && kT.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let TT = KT.MIN_RENDERINGGROUPS; TT < KT.MAX_RENDERINGGROUPS; TT++) {
            const kT = this._renderingGroups[TT];
            kT && kT.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let TT = KT.MIN_RENDERINGGROUPS; TT < KT.MAX_RENDERINGGROUPS; TT++) {
          const kT = this._renderingGroups[TT];
          kT && kT.dispose()
        }
      }
      _prepareRenderingGroup(TT) {
        void 0 === this._renderingGroups[TT] && (this._renderingGroups[TT] = new lT.b(TT, this._scene, this._customOpaqueSortCompareFn[TT], this._customAlphaTestSortCompareFn[TT], this._customTransparentSortCompareFn[TT]), this._renderingGroups[TT].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(TT) {
        this.maintainStateBetweenFrames && TT._wasDispatched || (TT._wasDispatched = !0, this.getRenderingGroup(TT.renderingGroupId).dispatchSprites(TT))
      }
      dispatchParticles(TT) {
        this.maintainStateBetweenFrames && TT._wasDispatched || (TT._wasDispatched = !0, this.getRenderingGroup(TT.renderingGroupId).dispatchParticles(TT))
      }
      dispatch(TT, kT, cT) {
        void 0 === kT && (kT = TT.getMesh()), this.maintainStateBetweenFrames && TT._wasDispatched || (TT._wasDispatched = !0, this.getRenderingGroup(kT.renderingGroupId).dispatch(TT, kT, cT))
      }
      setRenderingOrder(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[TT] = kT, this._customAlphaTestSortCompareFn[TT] = cT, this._customTransparentSortCompareFn[TT] = lT, this._renderingGroups[TT]) {
          const kT = this._renderingGroups[TT];
          kT.opaqueSortCompareFn = this._customOpaqueSortCompareFn[TT], kT.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[TT], kT.transparentSortCompareFn = this._customTransparentSortCompareFn[TT]
        }
      }
      setRenderingAutoClearDepthStencil(TT, kT) {
        let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          lT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[TT] = {
          autoClear: kT,
          depth: cT,
          stencil: lT
        }
      }
      getAutoClearDepthStencilSetup(TT) {
        return this._autoClearDepthStencil[TT]
      }
    }
    KT.MAX_RENDERINGGROUPS = 4, KT.MIN_RENDERINGGROUPS = 0, KT.AUTOCLEAR = !0
  },
  39524: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT
    });
    class lT {
      constructor(TT) {
        this._supportBlendParametersPerTarget = TT, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(TT) {
        this.setAlphaBlend(TT)
      }
      setAlphaBlend(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[kT] !== TT && (TT ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[kT] = TT, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(TT, kT, cT, lT) {
        this._blendConstants[0] === TT && this._blendConstants[1] === kT && this._blendConstants[2] === cT && this._blendConstants[3] === lT || (this._blendConstants[0] = TT, this._blendConstants[1] = kT, this._blendConstants[2] = cT, this._blendConstants[3] = lT, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(TT, kT, cT, lT) {
        const MT = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[MT + 0] === TT && this._blendFunctionParameters[MT + 1] === kT && this._blendFunctionParameters[MT + 2] === cT && this._blendFunctionParameters[MT + 3] === lT || (this._blendFunctionParameters[MT + 0] = TT, this._blendFunctionParameters[MT + 1] = kT, this._blendFunctionParameters[MT + 2] = cT, this._blendFunctionParameters[MT + 3] = lT, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(TT, kT) {
        const cT = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[cT + 0] === TT && this._blendEquationParameters[cT + 1] === kT || (this._blendEquationParameters[cT + 0] = TT, this._blendEquationParameters[cT + 1] = kT, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== kT && (this._numTargets = kT, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== cT && (this._blendDisabledTargetsMask = cT, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (TT.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === kT || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (kT > 1 && 0 !== cT && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & cT) ? TT.enable(TT.BLEND) : TT.disable(TT.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (TT.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (TT.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const lT = TT;
        if (this._isAlphaBlendDirty) {
          for (let MT = 0; MT < kT; MT++) {
            const kT = MT < this._numTargetEnabled ? MT : 0;
            this._alphaBlend[kT] && 0 === (cT & 1 << MT) ? lT.enableIndexed(TT.BLEND, MT) : lT.disableIndexed(TT.BLEND, MT)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let TT = 0; TT < kT; TT++) {
            const kT = TT < this._numTargetEnabled ? 4 * TT : 0;
            lT.blendFuncSeparateIndexed(TT, this._blendFunctionParameters[kT + 0], this._blendFunctionParameters[kT + 1], this._blendFunctionParameters[kT + 2], this._blendFunctionParameters[kT + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let TT = 0; TT < kT; TT++) {
            const kT = TT < this._numTargetEnabled ? 2 * TT : 0;
            lT.blendEquationSeparateIndexed(TT, this._blendEquationParameters[kT + 0], this._blendEquationParameters[kT + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(TT, kT) {
        let cT = 32774;
        switch (TT) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, kT);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, kT);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, kT);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, kT);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, kT);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, kT);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, kT);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, kT);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, kT);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, kT);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, kT);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, kT);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, kT);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, kT);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, kT);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, kT);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, kT), cT = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, kT), cT = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, kT);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, kT)
        }
        this.setAlphaEquationParameters(cT, cT, kT)
      }
    }
  },
  39827: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT
    });
    class lT {}
    lT._IsPickingAvailable = !1
  },
  39720: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => fc,
      f: () => Oc
    });
    var lT = cT(39727),
      MT = cT(39514),
      KT = cT(39521),
      OT = cT(36932),
      yT = cT(39741);
    class fT {
      constructor() {
        this._count = 0, this._data = {}
      }
      UkT(TT) {
        this.clear(), TT.forEach(((TT, kT) => this.add(TT, kT)))
      }
      get(TT) {
        const kT = this._data[TT];
        if (void 0 !== kT) return kT
      }
      getOrAddWithFactory(TT, kT) {
        let cT = this.get(TT);
        return void 0 !== cT || (cT = kT(TT), cT && this.add(TT, cT)), cT
      }
      getOrAdd(TT, kT) {
        const cT = this.get(TT);
        return void 0 !== cT ? cT : (this.add(TT, kT), kT)
      }
      contains(TT) {
        return void 0 !== this._data[TT]
      }
      add(TT, kT) {
        return void 0 === this._data[TT] && (this._data[TT] = kT, ++this._count, !0)
      }
      set(TT, kT) {
        return void 0 !== this._data[TT] && (this._data[TT] = kT, !0)
      }
      getAndRemove(TT) {
        const kT = this.get(TT);
        return void 0 !== kT ? (delete this._data[TT], --this._count, kT) : null
      }
      remove(TT) {
        return !!this.contains(TT) && (delete this._data[TT], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(TT) {
        for (const kT in this._data) {
          TT(kT, this._data[kT])
        }
      }
      first(TT) {
        for (const kT in this._data) {
          const cT = TT(kT, this._data[kT]);
          if (cT) return cT
        }
        return null
      }
    }
    var xT = cT(39649),
      IT = cT(36892),
      AT = cT(39746),
      CT = cT(39770),
      jT = cT(39775);
    class vT {
      constructor(TT, kT, cT, lT, MT, KT) {
        this.source = TT, this.pointerX = kT, this.pointerY = cT, this.meshUnderPointer = lT, this.sourceEvent = MT, this.additionalData = KT
      }
      static CreateNew(TT, kT, cT) {
        const lT = TT.NJ();
        return new vT(TT, lT.pointerX, lT.pointerY, lT.meshUnderPointer || TT, kT, cT)
      }
      static CreateNewFromSprite(TT, kT, cT, lT) {
        return new vT(TT, kT.pointerX, kT.pointerY, kT.meshUnderPointer, cT, lT)
      }
      static CreateNewFromScene(TT, kT) {
        return new vT(null, TT.pointerX, TT.pointerY, TT.meshUnderPointer, kT)
      }
      static CreateNewFromPrimitive(TT, kT, cT, lT) {
        return new vT(TT, kT.x, kT.y, null, cT, lT)
      }
    }
    var tT = cT(39791),
      hT = cT(39796),
      NT = cT(39799),
      QT = cT(39809),
      ST = cT(39482),
      DT = cT(36925),
      aT = cT(39500),
      FT = cT(39812);
    class rT {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const TT in rT.Triggers)
          if (Object.prototype.hasOwnProperty.call(rT.Triggers, TT)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const TT in rT.Triggers)
          if (Object.prototype.hasOwnProperty.call(rT.Triggers, TT)) {
            const kT = parseInt(TT);
            if (kT >= 1 && kT <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(TT) {
        for (const kT in rT.Triggers)
          if (Object.prototype.hasOwnProperty.call(rT.Triggers, kT)) {
            if (parseInt(kT) === TT) return !0
          } return !1
      }
    }
    rT.Triggers = {};
    var PT, wT, mT, bT, zT, JT, oT, HT = cT(39814);
    ! function(TT) {
      TT[TT.Generic = 0] = "Generic", TT[TT.Keyboard = 1] = "Keyboard", TT[TT.Mouse = 2] = "Mouse", TT[TT.Touch = 3] = "Touch", TT[TT.DualShock = 4] = "DualShock", TT[TT.Xbox = 5] = "Xbox", TT[TT.Switch = 6] = "Switch", TT[TT.DualSense = 7] = "DualSense"
    }(PT || (PT = {})),
    function(TT) {
      TT[TT.Horizontal = 0] = "Horizontal", TT[TT.Vertical = 1] = "Vertical", TT[TT.LeftClick = 2] = "LeftClick", TT[TT.MiddleClick = 3] = "MiddleClick", TT[TT.RightClick = 4] = "RightClick", TT[TT.BrowserBack = 5] = "BrowserBack", TT[TT.BrowserForward = 6] = "BrowserForward", TT[TT.MouseWheelX = 7] = "MouseWheelX", TT[TT.MouseWheelY = 8] = "MouseWheelY", TT[TT.MouseWheelZ = 9] = "MouseWheelZ", TT[TT.Move = 12] = "Move"
    }(wT || (wT = {})),
    function(TT) {
      TT[TT.Horizontal = 0] = "Horizontal", TT[TT.Vertical = 1] = "Vertical", TT[TT.LeftClick = 2] = "LeftClick", TT[TT.MiddleClick = 3] = "MiddleClick", TT[TT.RightClick = 4] = "RightClick", TT[TT.BrowserBack = 5] = "BrowserBack", TT[TT.BrowserForward = 6] = "BrowserForward", TT[TT.MouseWheelX = 7] = "MouseWheelX", TT[TT.MouseWheelY = 8] = "MouseWheelY", TT[TT.MouseWheelZ = 9] = "MouseWheelZ", TT[TT.DeltaHorizontal = 10] = "DeltaHorizontal", TT[TT.DeltaVertical = 11] = "DeltaVertical"
    }(mT || (mT = {})),
    function(TT) {
      TT[TT.Cross = 0] = "Cross", TT[TT.Circle = 1] = "Circle", TT[TT.Square = 2] = "Square", TT[TT.Triangle = 3] = "Triangle", TT[TT.L1 = 4] = "L1", TT[TT.R1 = 5] = "R1", TT[TT.L2 = 6] = "L2", TT[TT.R2 = 7] = "R2", TT[TT.Share = 8] = "Share", TT[TT.Options = 9] = "Options", TT[TT.L3 = 10] = "L3", TT[TT.R3 = 11] = "R3", TT[TT.DPadUp = 12] = "DPadUp", TT[TT.DPadDown = 13] = "DPadDown", TT[TT.DPadLeft = 14] = "DPadLeft", TT[TT.DPadRight = 15] = "DPadRight", TT[TT.Home = 16] = "Home", TT[TT.TouchPad = 17] = "TouchPad", TT[TT.LStickXAxis = 18] = "LStickXAxis", TT[TT.LStickYAxis = 19] = "LStickYAxis", TT[TT.RStickXAxis = 20] = "RStickXAxis", TT[TT.RStickYAxis = 21] = "RStickYAxis"
    }(bT || (bT = {})),
    function(TT) {
      TT[TT.Cross = 0] = "Cross", TT[TT.Circle = 1] = "Circle", TT[TT.Square = 2] = "Square", TT[TT.Triangle = 3] = "Triangle", TT[TT.L1 = 4] = "L1", TT[TT.R1 = 5] = "R1", TT[TT.L2 = 6] = "L2", TT[TT.R2 = 7] = "R2", TT[TT.Create = 8] = "Create", TT[TT.Options = 9] = "Options", TT[TT.L3 = 10] = "L3", TT[TT.R3 = 11] = "R3", TT[TT.DPadUp = 12] = "DPadUp", TT[TT.DPadDown = 13] = "DPadDown", TT[TT.DPadLeft = 14] = "DPadLeft", TT[TT.DPadRight = 15] = "DPadRight", TT[TT.Home = 16] = "Home", TT[TT.TouchPad = 17] = "TouchPad", TT[TT.LStickXAxis = 18] = "LStickXAxis", TT[TT.LStickYAxis = 19] = "LStickYAxis", TT[TT.RStickXAxis = 20] = "RStickXAxis", TT[TT.RStickYAxis = 21] = "RStickYAxis"
    }(zT || (zT = {})),
    function(TT) {
      TT[TT.A = 0] = "A", TT[TT.B = 1] = "B", TT[TT.X = 2] = "X", TT[TT.Y = 3] = "Y", TT[TT.LB = 4] = "LB", TT[TT.RB = 5] = "RB", TT[TT.LT = 6] = "LT", TT[TT.RT = 7] = "RT", TT[TT.Back = 8] = "Back", TT[TT.Start = 9] = "Start", TT[TT.LS = 10] = "LS", TT[TT.RS = 11] = "RS", TT[TT.DPadUp = 12] = "DPadUp", TT[TT.DPadDown = 13] = "DPadDown", TT[TT.DPadLeft = 14] = "DPadLeft", TT[TT.DPadRight = 15] = "DPadRight", TT[TT.Home = 16] = "Home", TT[TT.LStickXAxis = 17] = "LStickXAxis", TT[TT.LStickYAxis = 18] = "LStickYAxis", TT[TT.RStickXAxis = 19] = "RStickXAxis", TT[TT.RStickYAxis = 20] = "RStickYAxis"
    }(JT || (JT = {})),
    function(TT) {
      TT[TT.B = 0] = "B", TT[TT.A = 1] = "A", TT[TT.Y = 2] = "Y", TT[TT.X = 3] = "X", TT[TT.L = 4] = "L", TT[TT.R = 5] = "R", TT[TT.ZL = 6] = "ZL", TT[TT.ZR = 7] = "ZR", TT[TT.Minus = 8] = "Minus", TT[TT.Plus = 9] = "Plus", TT[TT.LS = 10] = "LS", TT[TT.RS = 11] = "RS", TT[TT.DPadUp = 12] = "DPadUp", TT[TT.DPadDown = 13] = "DPadDown", TT[TT.DPadLeft = 14] = "DPadLeft", TT[TT.DPadRight = 15] = "DPadRight", TT[TT.Home = 16] = "Home", TT[TT.Capture = 17] = "Capture", TT[TT.LStickXAxis = 18] = "LStickXAxis", TT[TT.LStickYAxis = 19] = "LStickYAxis", TT[TT.RStickXAxis = 20] = "RStickXAxis", TT[TT.RStickYAxis = 21] = "RStickYAxis"
    }(oT || (oT = {}));
    var eT = cT(39819);
    class GT {
      static CreateDeviceEvent(TT, kT, cT, lT, MT, KT, OT) {
        switch (TT) {
          case PT.Keyboard:
            return this._CreateKeyboardEvent(cT, lT, MT, KT);
          case PT.Mouse:
            if (cT === wT.MouseWheelX || cT === wT.MouseWheelY || cT === wT.MouseWheelZ) return this._CreateWheelEvent(TT, kT, cT, lT, MT, KT);
          case PT.Touch:
            return this._CreatePointerEvent(TT, kT, cT, lT, MT, KT, OT);
          default:
            throw `Unable to generate event for device ${PT[TT]}`
        }
      }
      static _CreatePointerEvent(TT, kT, cT, lT, MT, KT, OT) {
        const yT = this._CreateMouseEvent(TT, kT, cT, lT, MT, KT);
        TT === PT.Mouse ? (yT.deviceType = PT.Mouse, yT.pointerId = 1, yT.pointerType = "mouse") : (yT.deviceType = PT.Touch, yT.pointerId = OT ?? kT, yT.pointerType = "touch");
        let fT = 0;
        return fT += MT.pollInput(TT, kT, wT.LeftClick), fT += 2 * MT.pollInput(TT, kT, wT.RightClick), fT += 4 * MT.pollInput(TT, kT, wT.MiddleClick), yT.buttons = fT, cT === wT.Move ? yT.type = "pointermove" : cT >= wT.LeftClick && cT <= wT.RightClick && (yT.type = 1 === lT ? "pointerdown" : "pointerup", yT.button = cT - 2), yT
      }
      static _CreateWheelEvent(TT, kT, cT, lT, MT, KT) {
        const OT = this._CreateMouseEvent(TT, kT, cT, lT, MT, KT);
        switch (OT.pointerId = 1, OT.type = "wheel", OT.deltaMode = eT.d.DOM_DELTA_PIXEL, OT.deltaX = 0, OT.deltaY = 0, OT.deltaZ = 0, cT) {
          case wT.MouseWheelX:
            OT.deltaX = lT;
            break;
          case wT.MouseWheelY:
            OT.deltaY = lT;
            break;
          case wT.MouseWheelZ:
            OT.deltaZ = lT
        }
        return OT
      }
      static _CreateMouseEvent(TT, kT, cT, lT, MT, KT) {
        const OT = this._CreateEvent(KT),
          yT = MT.pollInput(TT, kT, wT.Horizontal),
          fT = MT.pollInput(TT, kT, wT.Vertical);
        return KT ? (OT.movementX = 0, OT.movementY = 0, OT.offsetX = OT.movementX - KT.getBoundingClientRect().x, OT.offsetY = OT.movementY - KT.getBoundingClientRect().y) : (OT.movementX = MT.pollInput(TT, kT, 10), OT.movementY = MT.pollInput(TT, kT, 11), OT.offsetX = 0, OT.offsetY = 0), this._CheckNonCharacterKeys(OT, MT), OT.clientX = yT, OT.clientY = fT, OT.x = yT, OT.y = fT, OT.deviceType = TT, OT.deviceSlot = kT, OT.inputIndex = cT, OT
      }
      static _CreateKeyboardEvent(TT, kT, cT, lT) {
        const MT = this._CreateEvent(lT);
        return this._CheckNonCharacterKeys(MT, cT), MT.deviceType = PT.Keyboard, MT.deviceSlot = 0, MT.inputIndex = TT, MT.type = 1 === kT ? "keydown" : "keyup", MT.key = String.fromCharCode(TT), MT.keyCode = TT, MT
      }
      static _CheckNonCharacterKeys(TT, kT) {
        const cT = kT.isDeviceAvailable(PT.Keyboard),
          lT = cT && 1 === kT.pollInput(PT.Keyboard, 0, 18),
          MT = cT && 1 === kT.pollInput(PT.Keyboard, 0, 17),
          KT = cT && (1 === kT.pollInput(PT.Keyboard, 0, 91) || 1 === kT.pollInput(PT.Keyboard, 0, 92) || 1 === kT.pollInput(PT.Keyboard, 0, 93)),
          OT = cT && 1 === kT.pollInput(PT.Keyboard, 0, 16);
        TT.altKey = lT, TT.ctrlKey = MT, TT.metaKey = KT, TT.shiftKey = OT
      }
      static _CreateEvent(TT) {
        const kT = {
          preventDefault: () => {}
        };
        return kT.target = TT, kT
      }
    }
    class VT {
      constructor(TT, kT, cT) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(TT, kT, ((TT, kT, lT, MT) => {
          const KT = GT.CreateDeviceEvent(TT, kT, lT, MT, this);
          cT(TT, kT, KT)
        })) : this._createDummyNativeInput()
      }
      pollInput(TT, kT, cT) {
        return this._nativeInput.pollInput(TT, kT, cT)
      }
      isDeviceAvailable(TT) {
        return TT === PT.Mouse || TT === PT.Touch
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
    const ET = Object.keys(wT).length / 2;
    class ZT {
      constructor(TT, kT, cT, MT) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = lT.h.IsSafari(), this._usingMacOs = (0, ST.g)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = TT => {}, this._keyboardUpEvent = TT => {}, this._keyboardBlurEvent = TT => {}, this._pointerMoveEvent = TT => {}, this._pointerDownEvent = TT => {}, this._pointerUpEvent = TT => {}, this._pointerCancelEvent = TT => {}, this._pointerCancelTouch = TT => {}, this._pointerLeaveEvent = TT => {}, this._pointerWheelEvent = TT => {}, this._pointerBlurEvent = TT => {}, this._pointerMacOsChromeOutEvent = TT => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, ST.g)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, ST.g)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = TT => {}, this._gamepadDisconnectedEvent = TT => {}, this._eventPrefix = lT.h.GetPointerPrefix(TT), this._engine = TT, this._onDeviceConnected = kT, this._onDeviceDisconnected = cT, this._onInputChanged = MT, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(TT, kT, cT) {
        const MT = this._inputs[TT][kT];
        if (!MT) throw `Unable to find device ${PT[TT]}`;
        TT >= PT.DualShock && TT <= PT.DualSense && this._updateDevice(TT, kT, cT);
        const KT = MT[cT];
        if (void 0 === KT) throw `Unable to find input ${cT} for device ${PT[TT]} in slot ${kT}`;
        return cT === wT.Move && lT.h.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), KT
      }
      isDeviceAvailable(TT) {
        return void 0 !== this._inputs[TT]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const TT = this?._engine.getInputElement();
        if (TT && (!this._eventsAttached || this._elementToAttachTo !== TT)) {
          if (this._disableEvents(), this._inputs)
            for (const TT of this._inputs)
              if (TT)
                for (const kT in TT) {
                  const cT = TT[+kT];
                  if (cT)
                    for (let TT = 0; TT < cT.length; TT++) cT[TT] = 0
                }
          this._elementToAttachTo = TT, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const TT = navigator.getGamepads();
          for (const kT of TT) kT && this._addGamePad(kT)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(PT.Mouse, 0, 0, 0)
      }
      _addGamePad(TT) {
        const kT = this._getGamepadDeviceType(TT.id),
          cT = TT.index;
        this._gamepads = this._gamepads || new Array(TT.index + 1), this._registerDevice(kT, cT, TT.buttons.length + TT.axes.length), this._gamepads[cT] = kT
      }
      _addPointerDevice(TT, kT, cT, lT) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(TT, kT, ET);
        const MT = this._inputs[TT][kT];
        MT[0] = cT, MT[1] = lT
      }
      _registerDevice(TT, kT, cT) {
        if (void 0 === kT) throw `Unable to register device ${PT[TT]} to undefined slot.`;
        if (this._inputs[TT] || (this._inputs[TT] = {}), !this._inputs[TT][kT]) {
          const lT = new Array(cT);
          lT.fill(0), this._inputs[TT][kT] = lT, this._onDeviceConnected(TT, kT)
        }
      }
      _unregisterDevice(TT, kT) {
        this._inputs[TT][kT] && (delete this._inputs[TT][kT], this._onDeviceDisconnected(TT, kT))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = TT => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(PT.Keyboard, 0, 255));
          const kT = this._inputs[PT.Keyboard][0];
          if (kT) {
            kT[TT.keyCode] = 1;
            const cT = TT;
            cT.inputIndex = TT.keyCode, this._usingMacOs && TT.metaKey && "Meta" !== TT.key && (this._metaKeys.includes(TT.keyCode) || this._metaKeys.push(TT.keyCode)), this._onInputChanged(PT.Keyboard, 0, cT)
          }
        }, this._keyboardUpEvent = TT => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(PT.Keyboard, 0, 255));
          const kT = this._inputs[PT.Keyboard][0];
          if (kT) {
            kT[TT.keyCode] = 0;
            const cT = TT;
            if (cT.inputIndex = TT.keyCode, this._usingMacOs && "Meta" === TT.key && this._metaKeys.length > 0) {
              for (const TT of this._metaKeys) {
                const cT = GT.CreateDeviceEvent(PT.Keyboard, 0, TT, 0, this, this._elementToAttachTo);
                kT[TT] = 0, this._onInputChanged(PT.Keyboard, 0, cT)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(PT.Keyboard, 0, cT)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const TT = this._inputs[PT.Keyboard][0];
            for (let kT = 0; kT < TT.length; kT++)
              if (0 !== TT[kT]) {
                TT[kT] = 0;
                const cT = GT.CreateDeviceEvent(PT.Keyboard, 0, kT, 0, this, this._elementToAttachTo);
                this._onInputChanged(PT.Keyboard, 0, cT)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, ST.g)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let lT = 0; lT < this._maxTouchPoints; lT++) this._activeTouchIds[lT] = -1;
        this._pointerMoveEvent = TT => {
          const kT = this._getPointerType(TT);
          let cT = kT === PT.Mouse ? 0 : this._activeTouchIds.indexOf(TT.pointerId);
          if (kT === PT.Touch && -1 === cT) {
            if (0 === TT.buttons) return;
            const MT = this._activeTouchIds.indexOf(-1);
            if (!(MT >= 0)) return void lT.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            cT = MT, this._activeTouchIds[MT] = TT.pointerId, this._onDeviceConnected(kT, cT)
          }
          this._inputs[kT] || (this._inputs[kT] = {}), this._inputs[kT][cT] || this._addPointerDevice(kT, cT, TT.clientX, TT.clientY);
          const MT = this._inputs[kT][cT];
          if (MT) {
            const lT = TT;
            lT.inputIndex = wT.Move, MT[wT.Horizontal] = TT.clientX, MT[wT.Vertical] = TT.clientY, kT === PT.Touch && 0 === MT[wT.LeftClick] && (MT[wT.LeftClick] = 1), void 0 === TT.pointerId && (TT.pointerId = this._mouseId), this._onInputChanged(kT, cT, lT), this._usingSafari || -1 === TT.button || (lT.inputIndex = TT.button + 2, MT[TT.button + 2] = MT[TT.button + 2] ? 0 : 1, this._onInputChanged(kT, cT, lT))
          }
        }, this._pointerDownEvent = TT => {
          const kT = this._getPointerType(TT);
          let cT = kT === PT.Mouse ? 0 : TT.pointerId;
          if (kT === PT.Touch) {
            let kT = this._activeTouchIds.indexOf(TT.pointerId);
            if (-1 === kT && (kT = this._activeTouchIds.indexOf(-1)), !(kT >= 0)) return void lT.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            cT = kT, this._activeTouchIds[kT] = TT.pointerId
          }
          this._inputs[kT] || (this._inputs[kT] = {}), this._inputs[kT][cT] ? kT === PT.Touch && this._onDeviceConnected(kT, cT) : this._addPointerDevice(kT, cT, TT.clientX, TT.clientY);
          const MT = this._inputs[kT][cT];
          if (MT) {
            const lT = MT[wT.Horizontal],
              OT = MT[wT.Vertical];
            if (kT === PT.Mouse) {
              if (void 0 === TT.pointerId && (TT.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (KT) {}
            } else if (TT.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(TT.pointerId)
            } catch (KT) {}
            MT[wT.Horizontal] = TT.clientX, MT[wT.Vertical] = TT.clientY, MT[TT.button + 2] = 1;
            const yT = TT;
            yT.inputIndex = TT.button + 2, this._onInputChanged(kT, cT, yT), lT === TT.clientX && OT === TT.clientY || (yT.inputIndex = wT.Move, this._onInputChanged(kT, cT, yT))
          }
        }, this._pointerUpEvent = TT => {
          const kT = this._getPointerType(TT),
            cT = kT === PT.Mouse ? 0 : this._activeTouchIds.indexOf(TT.pointerId);
          if (kT === PT.Touch) {
            if (-1 === cT) return;
            this._activeTouchIds[cT] = -1
          }
          const lT = this._inputs[kT]?.[cT];
          let MT = TT.button,
            KT = lT && 0 !== lT[MT + 2];
          if (!KT && this._isUsingFirefox && this._usingMacOs && lT && (MT = 2 === MT ? 0 : 2, KT = 0 !== lT[MT + 2]), KT) {
            const KT = lT[wT.Horizontal],
              OT = lT[wT.Vertical];
            lT[wT.Horizontal] = TT.clientX, lT[wT.Vertical] = TT.clientY, lT[MT + 2] = 0;
            const yT = TT;
            void 0 === TT.pointerId && (TT.pointerId = this._mouseId), KT === TT.clientX && OT === TT.clientY || (yT.inputIndex = wT.Move, this._onInputChanged(kT, cT, yT)), yT.inputIndex = MT + 2, kT === PT.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : TT.pointerId && this._elementToAttachTo.hasPointerCapture?.(TT.pointerId) && this._elementToAttachTo.releasePointerCapture(TT.pointerId), this._onInputChanged(kT, cT, yT), kT === PT.Touch && this._onDeviceDisconnected(kT, cT)
          }
        }, this._pointerCancelTouch = TT => {
          const kT = this._activeTouchIds.indexOf(TT);
          if (-1 === kT) return;
          this._elementToAttachTo.hasPointerCapture?.(TT) && this._elementToAttachTo.releasePointerCapture(TT), this._inputs[PT.Touch][kT][wT.LeftClick] = 0;
          const cT = GT.CreateDeviceEvent(PT.Touch, kT, wT.LeftClick, 0, this, this._elementToAttachTo, TT);
          this._onInputChanged(PT.Touch, kT, cT), this._activeTouchIds[kT] = -1, this._onDeviceDisconnected(PT.Touch, kT)
        }, this._pointerCancelEvent = TT => {
          if ("mouse" === TT.pointerType) {
            const TT = this._inputs[PT.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let kT = wT.LeftClick; kT <= wT.BrowserForward; kT++)
              if (1 === TT[kT]) {
                TT[kT] = 0;
                const cT = GT.CreateDeviceEvent(PT.Mouse, 0, kT, 0, this, this._elementToAttachTo);
                this._onInputChanged(PT.Mouse, 0, cT)
              }
          } else this._pointerCancelTouch(TT.pointerId)
        }, this._pointerLeaveEvent = TT => {
          "pen" === TT.pointerType && this._pointerCancelTouch(TT.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let TT = !1;
        const kT = function() {};
        try {
          const cT = Object.defineProperty({}, "passive", {
            get: function() {
              TT = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", kT, cT), this._elementToAttachTo.removeEventListener("test", kT, cT)
        } catch (cT) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(PT.Mouse)) {
            const TT = this._inputs[PT.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let kT = wT.LeftClick; kT <= wT.BrowserForward; kT++)
              if (1 === TT[kT]) {
                TT[kT] = 0;
                const cT = GT.CreateDeviceEvent(PT.Mouse, 0, kT, 0, this, this._elementToAttachTo);
                this._onInputChanged(PT.Mouse, 0, cT)
              }
          }
          if (this.isDeviceAvailable(PT.Touch)) {
            const TT = this._inputs[PT.Touch];
            for (let kT = 0; kT < this._activeTouchIds.length; kT++) {
              const cT = this._activeTouchIds[kT];
              if (this._elementToAttachTo.hasPointerCapture?.(cT) && this._elementToAttachTo.releasePointerCapture(cT), -1 !== cT && 1 === TT[kT]?.[wT.LeftClick]) {
                TT[kT][wT.LeftClick] = 0;
                const lT = GT.CreateDeviceEvent(PT.Touch, kT, wT.LeftClick, 0, this, this._elementToAttachTo, cT);
                this._onInputChanged(PT.Touch, kT, lT), this._activeTouchIds[kT] = -1, this._onDeviceDisconnected(PT.Touch, kT)
              }
            }
          }
        }, this._pointerWheelEvent = TT => {
          const kT = PT.Mouse;
          this._inputs[kT] || (this._inputs[kT] = []), this._inputs[kT][0] || (this._pointerActive = !0, this._registerDevice(kT, 0, ET));
          const cT = this._inputs[kT][0];
          if (cT) {
            cT[wT.MouseWheelX] = TT.deltaX || 0, cT[wT.MouseWheelY] = TT.deltaY || TT.wheelDelta || 0, cT[wT.MouseWheelZ] = TT.deltaZ || 0;
            const lT = TT;
            void 0 === TT.pointerId && (TT.pointerId = this._mouseId), 0 !== cT[wT.MouseWheelX] && (lT.inputIndex = wT.MouseWheelX, this._onInputChanged(kT, 0, lT)), 0 !== cT[wT.MouseWheelY] && (lT.inputIndex = wT.MouseWheelY, this._onInputChanged(kT, 0, lT)), 0 !== cT[wT.MouseWheelZ] && (lT.inputIndex = wT.MouseWheelZ, this._onInputChanged(kT, 0, lT))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = TT => {
          TT.buttons > 1 && this._pointerCancelEvent(TT)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!TT && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(PT.Mouse)) {
            const TT = this._inputs[PT.Mouse][0];
            TT[wT.MouseWheelX] = 0, TT[wT.MouseWheelY] = 0, TT[wT.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = TT => {
          this._addGamePad(TT.gamepad)
        }, this._gamepadDisconnectedEvent = TT => {
          if (this._gamepads) {
            const kT = this._getGamepadDeviceType(TT.gamepad.id),
              cT = TT.gamepad.index;
            this._unregisterDevice(kT, cT), delete this._gamepads[cT]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(TT, kT, cT) {
        const lT = navigator.getGamepads()[kT];
        if (lT && TT === this._gamepads[kT]) {
          const MT = this._inputs[TT][kT];
          cT >= lT.buttons.length ? MT[cT] = lT.axes[cT - lT.buttons.length].valueOf() : MT[cT] = lT.buttons[cT].value
        }
      }
      _getGamepadDeviceType(TT) {
        return -1 !== TT.indexOf("054c") ? -1 !== TT.indexOf("0ce6") ? PT.DualSense : PT.DualShock : -1 !== TT.indexOf("Xbox One") || -1 !== TT.search("Xbox 360") || -1 !== TT.search("xinput") || -1 !== TT.indexOf("045e") && -1 === TT.indexOf("Surface Dock") ? PT.Xbox : -1 !== TT.indexOf("057e") ? PT.Switch : PT.Generic
      }
      _getPointerType(TT) {
        let kT = PT.Mouse;
        return ("touch" === TT.pointerType || "pen" === TT.pointerType || TT.touches) && (kT = PT.Touch), kT
      }
    }
    class uT {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = kT, this.deviceSlot = cT, this.onInputChangedObservable = new OT.b, this._deviceInputSystem = TT
      }
      getInput(TT) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, TT)
      }
    }
    class XT {
      constructor(TT) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = TT => {
          for (let kT = 0; kT < this._devices.length; kT++) {
            const cT = this._devices[kT];
            for (const lT in cT) {
              const cT = +lT;
              TT._addDevice(new uT(this._deviceInputSystem, kT, cT))
            }
          }
          this._registeredManagers.push(TT)
        }, this.unregisterManager = TT => {
          const kT = this._registeredManagers.indexOf(TT);
          kT > -1 && this._registeredManagers.splice(kT, 1)
        };
        const kT = Object.keys(PT).length / 2;
        this._devices = new Array(kT);
        const cT = (TT, kT) => {
            this._devices[TT] || (this._devices[TT] = new Array), this._devices[TT][kT] || (this._devices[TT][kT] = kT);
            for (const cT of this._registeredManagers) {
              const lT = new uT(this._deviceInputSystem, TT, kT);
              cT._addDevice(lT)
            }
          },
          lT = (TT, kT) => {
            this._devices[TT]?.[kT] && delete this._devices[TT][kT];
            for (const cT of this._registeredManagers) cT._removeDevice(TT, kT)
          },
          MT = (TT, kT, cT) => {
            if (cT)
              for (const lT of this._registeredManagers) lT._onInputChanged(TT, kT, cT)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new VT(cT, lT, MT) : this._deviceInputSystem = new ZT(TT, cT, lT, MT)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class dT {
      getDeviceSource(TT, kT) {
        if (void 0 === kT) {
          if (void 0 === this._firstDevice[TT]) return null;
          kT = this._firstDevice[TT]
        }
        return this._devices[TT] && void 0 !== this._devices[TT][kT] ? this._devices[TT][kT] : null
      }
      getDeviceSources(TT) {
        return this._devices[TT] ? this._devices[TT].filter((TT => !!TT)) : []
      }
      constructor(TT) {
        const kT = Object.keys(PT).length / 2;
        this._devices = new Array(kT), this._firstDevice = new Array(kT), this._engine = TT, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new XT(TT)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new OT.b((TT => {
          for (const kT of this._devices)
            if (kT)
              for (const cT of kT) cT && this.onDeviceConnectedObservable.notifyObserver(TT, cT)
        })), this.onDeviceDisconnectedObservable = new OT.b, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = TT.QJ.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.QJ.remove(this._onDisposeObserver)
      }
      _addDevice(TT) {
        this._devices[TT.deviceType] || (this._devices[TT.deviceType] = []), this._devices[TT.deviceType][TT.deviceSlot] || (this._devices[TT.deviceType][TT.deviceSlot] = TT, this._updateFirstDevices(TT.deviceType)), this.onDeviceConnectedObservable.notifyObservers(TT)
      }
      _removeDevice(TT, kT) {
        const cT = this._devices[TT]?.[kT];
        this.onDeviceDisconnectedObservable.notifyObservers(cT), this._devices[TT]?.[kT] && delete this._devices[TT][kT], this._updateFirstDevices(TT)
      }
      _onInputChanged(TT, kT, cT) {
        this._devices[TT]?.[kT]?.onInputChangedObservable.notifyObservers(cT)
      }
      _updateFirstDevices(TT) {
        switch (TT) {
          case PT.Keyboard:
          case PT.Mouse:
            this._firstDevice[TT] = 0;
            break;
          case PT.Touch:
          case PT.DualSense:
          case PT.DualShock:
          case PT.Xbox:
          case PT.Switch:
          case PT.Generic: {
            delete this._firstDevice[TT];
            const kT = this._devices[TT];
            if (kT)
              for (let cT = 0; cT < kT.length; cT++)
                if (kT[cT]) {
                  this._firstDevice[TT] = cT;
                  break
                } break
          }
        }
      }
    }
    var LT = cT(39827);
    class RT {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get Oy() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(TT) {
        this._singleClick = TT
      }
      set Oy(TT) {
        this._doubleClick = TT
      }
      set hasSwiped(TT) {
        this._hasSwiped = TT
      }
      set ignore(TT) {
        this._ignore = TT
      }
    }
    class gT {
      constructor(TT) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new IT.i(0, 0), this._previousStartingPointerPosition = new IT.i(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = TT || DT.d.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(TT) {
        return this._meshUnderPointerId[TT] || null
      }
      get unTranslatedPointer() {
        return new IT.i(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(TT) {
        this._pointerX = TT
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(TT) {
        this._pointerY = TT
      }
      _updatePointerPosition(TT) {
        const kT = this._scene.Dv().getInputElementClientRect();
        kT && (this._pointerX = TT.clientX - kT.left, this._pointerY = TT.clientY - kT.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(TT, kT) {
        const cT = this._scene,
          lT = cT.Dv(),
          MT = lT.getInputElement();
        MT && (MT.tabIndex = lT.canvasTabIndex, cT.doNotHandleCursors || (MT.style.cursor = cT.defaultCursor)), this._setCursorAndPointerOverMesh(TT, kT, cT);
        for (const yT of cT._pointerMoveStage) {
          TT = TT || this._pickMove(kT);
          const cT = !!TT?.pickedMesh;
          TT = yT.action(this._unTranslatedPointerX, this._unTranslatedPointerY, TT, cT, MT)
        }
        const KT = kT.inputIndex >= wT.MouseWheelX && kT.inputIndex <= wT.MouseWheelZ ? FT.c.POINTERWHEEL : FT.c.POINTERMOVE;
        let OT;
        cT.onPointerMove && (TT = TT || this._pickMove(kT), cT.onPointerMove(kT, TT, KT)), TT ? (OT = new FT.h(KT, kT, TT), this._setRayOnPointerInfo(TT, kT)) : (OT = new FT.h(KT, kT, null, this), this._movePointerInfo = OT), cT.onPointerObservable.hasObservers() && cT.onPointerObservable.notifyObservers(OT, KT)
      }
      _setRayOnPointerInfo(TT, kT) {
        const cT = this._scene;
        TT && LT.b._IsPickingAvailable && (TT.ray || (TT.ray = cT.createPickingRay(kT.offsetX, kT.offsetY, IT.d.Identity(), cT.activeCamera)))
      }
      _addCameraPointerObserver(TT, kT) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(TT, kT)
      }
      _removeCameraPointerObserver(TT) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(TT)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(TT, kT, cT) {
        const lT = this._scene,
          MT = new FT.g(cT, kT, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return TT && (MT.originalPickingInfo = TT, MT.ray = TT.ray, "xr-near" === kT.pointerType && TT.originMesh && (MT.nearInteractionPickingInfo = TT)), lT.onPrePointerObservable.notifyObservers(MT, cT), !!MT.skipOnPointerObservable
      }
      _pickMove(TT) {
        const kT = this._scene,
          cT = kT.gC(this._unTranslatedPointerX, this._unTranslatedPointerY, kT.pointerMovePredicate, kT.pointerMoveFastCheck, kT.cameraToUseForPointers, kT.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(cT, TT, kT), cT
      }
      _updateMeshUnderPointer() {
        const TT = this._scene;
        if (!TT.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || TT.skipPointerMovePicking || !TT.cameraToUseForPointers && !TT.activeCamera) return;
        this._ensurePointerMovePredicate();
        const kT = this._pointerX,
          cT = this._pointerY,
          lT = this._unTranslatedPointerX,
          MT = this._unTranslatedPointerY;
        for (const KT of this._latestPointerMoveEvents.values()) this._pointerX = KT.pointerX, this._pointerY = KT.pointerY, this._unTranslatedPointerX = KT.unTranslatedPointerX, this._unTranslatedPointerY = KT.unTranslatedPointerY, this._pickMove(KT.event);
        this._pointerX = kT, this._pointerY = cT, this._unTranslatedPointerX = lT, this._unTranslatedPointerY = MT
      }
      _ensurePointerMovePredicate() {
        const TT = this._scene;
        TT.pointerMovePredicate || (TT.pointerMovePredicate = kT => (kT._isPointerMovePickable ?? kT.Vt) && kT.isVisible && kT.isReady() && kT.isEnabled() && (kT.enablePointerMoveEvents || TT.constantlyUpdateMeshUnderPointer || null !== kT._getActionManagerForTrigger()) && (!TT.cameraToUseForPointers || 0 !== (TT.cameraToUseForPointers.layerMask & kT.layerMask)))
      }
      _setCursorAndPointerOverMesh(TT, kT, cT) {
        const lT = cT.Dv().getInputElement();
        if (TT?.pickedMesh) {
          if (this.setPointerOverMesh(TT.pickedMesh, kT.pointerId, TT, kT), !cT.doNotHandleCursors && lT && this._pointerOverMesh) {
            const TT = this._pointerOverMesh._getActionManagerForTrigger();
            TT && TT.hasPointerTriggers && (lT.style.cursor = TT.hoverCursor || cT.hoverCursor)
          }
        } else this.setPointerOverMesh(null, kT.pointerId, TT, kT)
      }
      simulatePointerMove(TT, kT) {
        const cT = new PointerEvent("pointermove", kT);
        cT.inputIndex = wT.Move, this._checkPrePointerObservable(TT, cT, FT.c.POINTERMOVE) || this._processPointerMove(TT, cT)
      }
      simulatePointerDown(TT, kT) {
        const cT = new PointerEvent("pointerdown", kT);
        cT.inputIndex = cT.button + 2, this._checkPrePointerObservable(TT, cT, FT.c.POINTERDOWN) || this._processPointerDown(TT, cT)
      }
      _processPointerDown(TT, kT) {
        const cT = this._scene;
        if (TT?.pickedMesh) {
          this._pickedDownMesh = TT.pickedMesh;
          const lT = TT.pickedMesh._getActionManagerForTrigger();
          if (lT) {
            if (lT.hasPickTriggers) switch (lT.processTrigger(5, new vT(TT.pickedMesh, cT.pointerX, cT.pointerY, TT.pickedMesh, kT, TT)), kT.button) {
              case 0:
                lT.processTrigger(2, new vT(TT.pickedMesh, cT.pointerX, cT.pointerY, TT.pickedMesh, kT, TT));
                break;
              case 1:
                lT.processTrigger(4, new vT(TT.pickedMesh, cT.pointerX, cT.pointerY, TT.pickedMesh, kT, TT));
                break;
              case 2:
                lT.processTrigger(3, new vT(TT.pickedMesh, cT.pointerX, cT.pointerY, TT.pickedMesh, kT, TT))
            }
            lT.hasSpecificTrigger(8) && window.setTimeout((() => {
              const TT = cT.gC(this._unTranslatedPointerX, this._unTranslatedPointerY, (TT => TT.Vt && TT.isVisible && TT.isReady() && TT.actionManager && TT.actionManager.hasSpecificTrigger(8) && TT === this._pickedDownMesh), !1, cT.cameraToUseForPointers);
              TT?.pickedMesh && lT && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > gT.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, lT.processTrigger(8, vT.CreateNew(TT.pickedMesh, kT)))
            }), gT.LongPressDelay)
          }
        } else
          for (const KT of cT._pointerDownStage) TT = KT.action(this._unTranslatedPointerX, this._unTranslatedPointerY, TT, kT, !1);
        let lT;
        const MT = FT.c.POINTERDOWN;
        TT ? (cT.onPointerDown && cT.onPointerDown(kT, TT, MT), lT = new FT.h(MT, kT, TT), this._setRayOnPointerInfo(TT, kT)) : lT = new FT.h(MT, kT, null, this), cT.onPointerObservable.hasObservers() && cT.onPointerObservable.notifyObservers(lT, MT)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(TT, kT, cT) {
        const lT = new PointerEvent("pointerup", kT);
        lT.inputIndex = wT.Move;
        const MT = new RT;
        cT ? MT.Oy = !0 : MT.singleClick = !0, this._checkPrePointerObservable(TT, lT, FT.c.POINTERUP) || this._processPointerUp(TT, lT, MT)
      }
      _processPointerUp(TT, kT, cT) {
        const lT = this._scene;
        if (TT?.pickedMesh) {
          if (this._pickedUpMesh = TT.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (lT.onPointerPick && lT.onPointerPick(kT, TT), cT.singleClick && !cT.ignore && lT.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const cT = FT.c.POINTERPICK,
              MT = new FT.h(cT, kT, TT);
            this._setRayOnPointerInfo(TT, kT), lT.onPointerObservable.notifyObservers(MT, cT)
          }
          const MT = TT.pickedMesh._getActionManagerForTrigger();
          if (MT && !cT.ignore) {
            MT.processTrigger(7, vT.CreateNew(TT.pickedMesh, kT, TT)), !cT.hasSwiped && cT.singleClick && MT.processTrigger(1, vT.CreateNew(TT.pickedMesh, kT, TT));
            const lT = TT.pickedMesh._getActionManagerForTrigger(6);
            cT.Oy && lT && lT.processTrigger(6, vT.CreateNew(TT.pickedMesh, kT, TT))
          }
        } else if (!cT.ignore)
          for (const MT of lT._pointerUpStage) TT = MT.action(this._unTranslatedPointerX, this._unTranslatedPointerY, TT, kT, cT.Oy);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const TT = this._pickedDownMesh._getActionManagerForTrigger(16);
          TT && TT.processTrigger(16, vT.CreateNew(this._pickedDownMesh, kT))
        }
        if (!cT.ignore) {
          const MT = new FT.h(FT.c.POINTERUP, kT, TT);
          if (this._setRayOnPointerInfo(TT, kT), lT.onPointerObservable.notifyObservers(MT, FT.c.POINTERUP), lT.onPointerUp && lT.onPointerUp(kT, TT, FT.c.POINTERUP), !cT.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let MT = 0;
            if (cT.singleClick ? MT = FT.c.POINTERTAP : cT.Oy && (MT = FT.c.POINTERDOUBLETAP), MT) {
              const cT = new FT.h(MT, kT, TT);
              lT.onPointerObservable.hasObservers() && lT.onPointerObservable.hasSpecificMask(MT) && lT.onPointerObservable.notifyObservers(cT, MT)
            }
          }
        }
      }
      isPointerCaptured() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[TT]
      }
      attachControl() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const MT = this._scene,
          KT = MT.Dv();
        lT || (lT = KT.getInputElement()), this._alreadyAttached && this.detachControl(), lT && (this._alreadyAttachedTo = lT), this._deviceSourceManager = new dT(KT), this._initActionManager = TT => {
          if (!this._meshPickProceed) {
            const kT = MT.skipPointerUpPicking || 0 === MT._registeredActions && !this._checkForPicking() && !MT.onPointerUp ? null : MT.gC(this._unTranslatedPointerX, this._unTranslatedPointerY, MT.pointerUpPredicate, MT.pointerUpFastCheck, MT.cameraToUseForPointers, MT.pointerUpTrianglePredicate);
            this._currentPickResult = kT, kT && (TT = kT.hit && kT.pickedMesh ? kT.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return TT
        }, this._delayedSimpleClick = (TT, kT, cT) => {
          if ((Date.now() - this._previousStartingPointerTime > gT.DoubleClickDelay && !this._doubleClickOccured || TT !== this._previousButtonPressed) && (this._doubleClickOccured = !1, kT.singleClick = !0, kT.ignore = !1, this._delayedClicks[TT])) {
            const kT = this._delayedClicks[TT].evt,
              cT = FT.c.POINTERTAP,
              lT = new FT.h(cT, kT, this._currentPickResult);
            MT.onPointerObservable.hasObservers() && MT.onPointerObservable.hasSpecificMask(cT) && MT.onPointerObservable.notifyObservers(lT, cT), this._delayedClicks[TT] = null
          }
        }, this._initClickEvent = (TT, kT, cT, lT) => {
          const MT = new RT;
          this._currentPickResult = null;
          let KT = null,
            OT = TT.hasSpecificMask(FT.c.POINTERPICK) || kT.hasSpecificMask(FT.c.POINTERPICK) || TT.hasSpecificMask(FT.c.POINTERTAP) || kT.hasSpecificMask(FT.c.POINTERTAP) || TT.hasSpecificMask(FT.c.POINTERDOUBLETAP) || kT.hasSpecificMask(FT.c.POINTERDOUBLETAP);
          !OT && rT && (KT = this._initActionManager(KT, MT), KT && (OT = KT.hasPickTriggers));
          let yT = !1;
          if (OT = OT && !this._isMultiTouchGesture, OT) {
            const OT = cT.button;
            if (MT.hasSwiped = this._isPointerSwiping(), !MT.hasSwiped) {
              let fT = !gT.ExclusiveDoubleClickMode;
              if (fT || (fT = !TT.hasSpecificMask(FT.c.POINTERDOUBLETAP) && !kT.hasSpecificMask(FT.c.POINTERDOUBLETAP), fT && !rT.HasSpecificTrigger(6) && (KT = this._initActionManager(KT, MT), KT && (fT = !KT.hasSpecificTrigger(6)))), fT)(Date.now() - this._previousStartingPointerTime > gT.DoubleClickDelay || OT !== this._previousButtonPressed) && (MT.singleClick = !0, lT(MT, this._currentPickResult), yT = !0);
              else {
                const TT = {
                  evt: cT,
                  clickInfo: MT,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, OT, MT, lT), gT.DoubleClickDelay)
                };
                this._delayedClicks[OT] = TT
              }
              let xT = TT.hasSpecificMask(FT.c.POINTERDOUBLETAP) || kT.hasSpecificMask(FT.c.POINTERDOUBLETAP);
              !xT && rT.HasSpecificTrigger(6) && (KT = this._initActionManager(KT, MT), KT && (xT = KT.hasSpecificTrigger(6))), xT && (OT === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < gT.DoubleClickDelay && !this._doubleClickOccured ? (MT.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = OT, gT.ExclusiveDoubleClickMode ? (this._delayedClicks[OT] && (clearTimeout(this._delayedClicks[OT]?.timeoutId), this._delayedClicks[OT] = null), lT(MT, this._previousPickResult)) : lT(MT, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, MT.Oy = !0, MT.ignore = !1, gT.ExclusiveDoubleClickMode && this._delayedClicks[OT] && (clearTimeout(this._delayedClicks[OT]?.timeoutId), this._delayedClicks[OT] = null), lT(MT, this._currentPickResult)), yT = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = OT))
            }
          }
          yT || lT(MT, this._currentPickResult)
        }, this._onPointerMove = TT => {
          if (this._updatePointerPosition(TT), this._latestPointerMoveEvents.set(TT.pointerId, {
              event: TT,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > gT.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > gT.DragMovementThreshold), KT.isPointerLock && KT._verifyPointerLock(), this._checkPrePointerObservable(null, TT, TT.inputIndex >= wT.MouseWheelX && TT.inputIndex <= wT.MouseWheelZ ? FT.c.POINTERWHEEL : FT.c.POINTERMOVE)) return;
          if (!MT.cameraToUseForPointers && !MT.activeCamera) return;
          if (MT.skipPointerMovePicking) return void this._processPointerMove(new jT.d, TT);
          this._ensurePointerMovePredicate();
          const kT = MT._registeredActions > 0 || MT.constantlyUpdateMeshUnderPointer ? this._pickMove(TT) : null;
          this._processPointerMove(kT, TT)
        }, this._onPointerDown = TT => {
          const kT = this._activePointerIds.indexOf(-1);
          if (-1 === kT ? this._activePointerIds.push(TT.pointerId) : this._activePointerIds[kT] = TT.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, gT.ExclusiveDoubleClickMode)
            for (let lT = 0; lT < this._delayedClicks.length; lT++)
              if (this._delayedClicks[lT])
                if (TT.button === lT) clearTimeout(this._delayedClicks[lT]?.timeoutId);
                else {
                  const TT = this._delayedClicks[lT].clickInfo;
                  this._doubleClickOccured = !1, TT.singleClick = !0, TT.ignore = !1;
                  const kT = this._delayedClicks[lT].evt,
                    cT = FT.c.POINTERTAP,
                    KT = new FT.h(cT, kT, this._currentPickResult);
                  MT.onPointerObservable.hasObservers() && MT.onPointerObservable.hasSpecificMask(cT) && MT.onPointerObservable.notifyObservers(KT, cT), this._delayedClicks[lT] = null
                } if (this._updatePointerPosition(TT), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = TT.button), MT.preventDefaultOnPointerDown && lT && (TT.preventDefault(), lT.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, TT, FT.c.POINTERDOWN)) return;
          if (!MT.cameraToUseForPointers && !MT.activeCamera) return;
          let cT;
          this._pointerCaptures[TT.pointerId] = !0, MT.pointerDownPredicate || (MT.pointerDownPredicate = TT => TT.Vt && TT.isVisible && TT.isReady() && TT.isEnabled() && (!MT.cameraToUseForPointers || 0 !== (MT.cameraToUseForPointers.layerMask & TT.layerMask))), this._pickedDownMesh = null, cT = MT.skipPointerDownPicking || 0 === MT._registeredActions && !this._checkForPicking() && !MT.onPointerDown ? new jT.d : MT.gC(this._unTranslatedPointerX, this._unTranslatedPointerY, MT.pointerDownPredicate, MT.pointerDownFastCheck, MT.cameraToUseForPointers, MT.pointerDownTrianglePredicate), this._processPointerDown(cT, TT)
        }, this._onPointerUp = TT => {
          const kT = this._activePointerIds.indexOf(TT.pointerId); - 1 !== kT && (this._activePointerIds[kT] = -1, this._activePointerIdsCount--, "touch" === TT.pointerType && this._latestPointerMoveEvents.delete(TT.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(TT), MT.preventDefaultOnPointerUp && lT && (TT.preventDefault(), lT.focus()), this._initClickEvent(MT.onPrePointerObservable, MT.onPointerObservable, TT, ((kT, cT) => {
            if (MT.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !kT.ignore)) {
              if (this._checkPrePointerObservable(null, TT, FT.c.POINTERUP)) return this._swipeButtonPressed === TT.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === TT.buttons && (this._pointerCaptures[TT.pointerId] = !1));
              kT.hasSwiped || (kT.singleClick && MT.onPrePointerObservable.hasSpecificMask(FT.c.POINTERTAP) && this._checkPrePointerObservable(null, TT, FT.c.POINTERTAP) && (this._skipPointerTap = !0), kT.Oy && MT.onPrePointerObservable.hasSpecificMask(FT.c.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, TT, FT.c.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[TT.pointerId] ? (0 === TT.buttons && (this._pointerCaptures[TT.pointerId] = !1), (MT.cameraToUseForPointers || MT.activeCamera) && (MT.pointerUpPredicate || (MT.pointerUpPredicate = TT => TT.Vt && TT.isVisible && TT.isReady() && TT.isEnabled() && (!MT.cameraToUseForPointers || 0 !== (MT.cameraToUseForPointers.layerMask & TT.layerMask))), !this._meshPickProceed && (rT && rT.HasTriggers || this._checkForPicking() || MT.onPointerUp) && this._initActionManager(null, kT), cT || (cT = this._currentPickResult), this._processPointerUp(cT, TT, kT), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === TT.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === TT.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = TT => {
          const kT = HT.b.KEYDOWN;
          if (MT.onPreKeyboardObservable.hasObservers()) {
            const cT = new HT.d(kT, TT);
            if (MT.onPreKeyboardObservable.notifyObservers(cT, kT), cT.skipOnKeyboardObservable) return
          }
          if (MT.onKeyboardObservable.hasObservers()) {
            const cT = new HT.f(kT, TT);
            MT.onKeyboardObservable.notifyObservers(cT, kT)
          }
          MT.actionManager && MT.actionManager.processTrigger(14, vT.CreateNewFromScene(MT, TT))
        }, this._onKeyUp = TT => {
          const kT = HT.b.KEYUP;
          if (MT.onPreKeyboardObservable.hasObservers()) {
            const cT = new HT.d(kT, TT);
            if (MT.onPreKeyboardObservable.notifyObservers(cT, kT), cT.skipOnKeyboardObservable) return
          }
          if (MT.onKeyboardObservable.hasObservers()) {
            const cT = new HT.f(kT, TT);
            MT.onKeyboardObservable.notifyObservers(cT, kT)
          }
          MT.actionManager && MT.actionManager.processTrigger(15, vT.CreateNewFromScene(MT, TT))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((lT => {
          lT.deviceType === PT.Mouse ? lT.onInputChangedObservable.add((MT => {
            this._originMouseEvent = MT, MT.inputIndex === wT.LeftClick || MT.inputIndex === wT.MiddleClick || MT.inputIndex === wT.RightClick || MT.inputIndex === wT.BrowserBack || MT.inputIndex === wT.BrowserForward ? kT && 1 === lT.getInput(MT.inputIndex) ? this._onPointerDown(MT) : TT && 0 === lT.getInput(MT.inputIndex) && this._onPointerUp(MT) : cT && (MT.inputIndex === wT.Move ? this._onPointerMove(MT) : MT.inputIndex !== wT.MouseWheelX && MT.inputIndex !== wT.MouseWheelY && MT.inputIndex !== wT.MouseWheelZ || this._onPointerMove(MT))
          })) : lT.deviceType === PT.Touch ? lT.onInputChangedObservable.add((MT => {
            MT.inputIndex === wT.LeftClick && (kT && 1 === lT.getInput(MT.inputIndex) ? (this._onPointerDown(MT), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : TT && 0 === lT.getInput(MT.inputIndex) && (this._onPointerUp(MT), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), cT && MT.inputIndex === wT.Move && this._onPointerMove(MT)
          })) : lT.deviceType === PT.Keyboard && lT.onInputChangedObservable.add((TT => {
            "keydown" === TT.type ? this._onKeyDown(TT) : "keyup" === TT.type && this._onKeyUp(TT)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 ? arguments[2] : void 0,
          lT = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[kT] === TT && (!TT || !TT._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const MT = this._meshUnderPointerId[kT];
        let KT;
        MT && (KT = MT._getActionManagerForTrigger(10), KT && KT.processTrigger(10, new vT(MT, this._pointerX, this._pointerY, TT, lT, {
          pointerId: kT
        }))), TT ? (this._meshUnderPointerId[kT] = TT, this._pointerOverMesh = TT, KT = TT._getActionManagerForTrigger(9), KT && KT.processTrigger(9, new vT(TT, this._pointerX, this._pointerY, TT, lT, {
          pointerId: kT,
          pickResult: cT
        }))) : (delete this._meshUnderPointerId[kT], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: TT,
          pointerId: kT
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(TT) {
        this._pointerOverMesh === TT && (this._pointerOverMesh = null), this._pickedDownMesh === TT && (this._pickedDownMesh = null), this._pickedUpMesh === TT && (this._pickedUpMesh = null);
        for (const kT in this._meshUnderPointerId) this._meshUnderPointerId[kT] === TT && delete this._meshUnderPointerId[kT]
      }
    }
    gT.DragMovementThreshold = 10, gT.LongPressDelay = 500, gT.DoubleClickDelay = 300, gT.ExclusiveDoubleClickMode = !1;
    var UT = cT(39571),
      YT = cT(37093),
      BT = cT(37632);
    class WT {
      static get UniqueId() {
        const TT = this._UniqueIdCounter;
        return this._UniqueIdCounter++, TT
      }
    }
    WT._UniqueIdCounter = 1;
    var nT = cT(39666),
      pT = cT(39829),
      iT = cT(36910);
    class qT {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var sT, Tk, kk, ck, lk, Mk, Kk, Ok, yk, fk, xk, Ik, Ak, Ck, jk, vk, tk, hk, Nk, Qk, Sk, Dk, ak, Fk, rk, Pk, wk, mk, bk, zk, Jk, Hk, ek, Gk, Vk, Ek, Zk, uk, Xk, dk, Lk, Rk, gk, Uk, Yk, Bk, Wk, nk, pk, ik, qk, sk, Tc, kc = cT(38512),
      cc = cT(36949);
    const lc = new IT.o,
      Mc = new IT.o;
    var Kc;
    ! function(TT) {
      TT[TT.BackwardCompatible = 0] = "BackwardCompatible", TT[TT.Intermediate = 1] = "Intermediate", TT[TT.Aggressive = 2] = "Aggressive"
    }(Kc || (Kc = {}));
    class Oc {
      static DefaultMaterialFactory(TT) {
        throw (0, aT.i)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, aT.i)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(TT) {
        TT !== this._clearColor && (this._clearColor = TT, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(TT) {
        if (TT !== this._performancePriority) {
          switch (this._performancePriority = TT, TT) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(TT)
        }
      }
      set forceWireframe(TT) {
        this._forceWireframe !== TT && (this._forceWireframe = TT, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(TT) {
        this._skipFrustumClipping !== TT && (this._skipFrustumClipping = TT)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(TT) {
        this._forcePointsCloud !== TT && (this._forcePointsCloud = TT, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(TT) {
        this._environmentTexture !== TT && (this._environmentTexture = TT, this.onEnvironmentTextureChangedObservable.notifyObservers(TT), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let TT = [];
        TT = TT.concat(this.meshes), TT = TT.concat(this.lights), TT = TT.concat(this.cameras), TT = TT.concat(this.transformNodes);
        for (const kT of this.skeletons) TT = TT.concat(kT.bones);
        return TT
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(TT) {
        this._animationPropertiesOverride = TT
      }
      set onDispose(TT) {
        this._onDisposeObserver && this.QJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.QJ.add(TT)
      }
      set beforeRender(TT) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), TT && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(TT))
      }
      set afterRender(TT) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), TT && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(TT))
      }
      set beforeCameraRender(TT) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(TT)
      }
      set afterCameraRender(TT) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(TT)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(TT) {
        this._pointerPickingConfiguration.pointerDownPredicate = TT
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(TT) {
        this._pointerPickingConfiguration.pointerUpPredicate = TT
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(TT) {
        this._pointerPickingConfiguration.pointerMovePredicate = TT
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(TT) {
        this._pointerPickingConfiguration.pointerDownFastCheck = TT
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(TT) {
        this._pointerPickingConfiguration.pointerUpFastCheck = TT
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(TT) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = TT
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(TT) {
        this._pointerPickingConfiguration.skipPointerMovePicking = TT
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(TT) {
        this._pointerPickingConfiguration.skipPointerDownPicking = TT
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(TT) {
        this._pointerPickingConfiguration.skipPointerUpPicking = TT
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return gT.DragMovementThreshold
      }
      static set DragMovementThreshold(TT) {
        gT.DragMovementThreshold = TT
      }
      static get LongPressDelay() {
        return gT.LongPressDelay
      }
      static set LongPressDelay(TT) {
        gT.LongPressDelay = TT
      }
      static get DoubleClickDelay() {
        return gT.DoubleClickDelay
      }
      static set DoubleClickDelay(TT) {
        gT.DoubleClickDelay = TT
      }
      static get ExclusiveDoubleClickMode() {
        return gT.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(TT) {
        gT.ExclusiveDoubleClickMode = TT
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? IT.m.ZeroReadOnly
      }
      bindEyePosition(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const lT = this._eyePosition,
          MT = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          KT = this.floatingOriginOffset,
          OT = lc.set(lT.x, lT.y, lT.z, MT ? -1 : 1),
          yT = OT.subtractFromFloatsToRef(KT.x, KT.y, KT.z, 0, Mc);
        return TT && (cT ? TT.setFloat3(kT, yT.x, yT.y, yT.z) : TT.setVector4(kT, yT)), OT
      }
      finalizeSceneUbo() {
        const TT = this.getSceneUniformBuffer(),
          kT = this.bindEyePosition(null),
          cT = this.floatingOriginOffset;
        return TT.updateFloat4("vEyePosition", kT.x - cT.x, kT.y - cT.y, kT.z - cT.z, kT.w), TT.update(), TT
      }
      set useRightHandedSystem(TT) {
        this._useRightHandedSystem !== TT && (this._useRightHandedSystem = TT, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(TT) {
        this._currentStepId = TT
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(TT) {
        this._fogEnabled !== TT && (this._fogEnabled = TT, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(TT) {
        this._fogMode !== TT && (this._fogMode = TT, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(TT) {
        this._shadowsEnabled !== TT && (this._shadowsEnabled = TT, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(TT) {
        this._lightsEnabled !== TT && (this._lightsEnabled = TT, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(TT) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), TT && (this._unObserveActiveCameras = (0, iT.g)(TT, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = TT
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(TT) {
        TT !== this._activeCamera && (this._activeCamera = TT, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return Oc.DefaultMaterialFactory !== Oc._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = Oc.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(TT) {
        this._defaultMaterial = TT
      }
      set texturesEnabled(TT) {
        this._texturesEnabled !== TT && (this._texturesEnabled = TT, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(TT) {
        if (this._frameGraph) return this._frameGraph = TT, void(TT || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = TT, TT && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(TT) {
        this._skeletonsEnabled !== TT && (this._skeletonsEnabled = TT, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = Oc.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const TT of this._transientComponents) TT.register();
          this._transientComponents.length = 0
        }
      }
      ycT(TT) {
        this._components.push(TT), this._transientComponents.push(TT);
        const kT = TT;
        kT.addFromContainer && kT.serialize && this._serializableComponents.push(kT)
      }
      _getComponent(TT) {
        for (const kT of this._components)
          if (kT.name === TT) return kT;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(TT, kT) {
        this._inputManager = new gT(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new YT.g(.2, .2, .3, 1), this.onClearColorChangedObservable = new OT.b, this.ambientColor = new YT.c(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new OT.b, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.lF = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.QJ = new OT.b, this._onDisposeObserver = null, this.onBeforeRenderObservable = new OT.b, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new OT.b, this.onAfterRenderCameraObservable = new OT.b, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new OT.b, this.onAfterAnimationsObservable = new OT.b, this.onBeforeDrawPhaseObservable = new OT.b, this.onAfterDrawPhaseObservable = new OT.b, this.onReadyObservable = new OT.b, this.onBeforeCameraRenderObservable = new OT.b, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new OT.b, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new OT.b, this.onAfterActiveMeshesEvaluationObservable = new OT.b, this.onBeforeParticlesRenderingObservable = new OT.b, this.onAfterParticlesRenderingObservable = new OT.b, this.onDataLoadedObservable = new OT.b, this.onNewCameraAddedObservable = new OT.b, this.onCameraRemovedObservable = new OT.b, this.onNewLightAddedObservable = new OT.b, this.onLightRemovedObservable = new OT.b, this.onNewGeometryAddedObservable = new OT.b, this.onGeometryRemovedObservable = new OT.b, this.onNewTransformNodeAddedObservable = new OT.b, this.onTransformNodeRemovedObservable = new OT.b, this.onNewMeshAddedObservable = new OT.b, this.onMeshRemovedObservable = new OT.b, this.onNewSkeletonAddedObservable = new OT.b, this.onSkeletonRemovedObservable = new OT.b, this.onNewParticleSystemAddedObservable = new OT.b, this.onParticleSystemRemovedObservable = new OT.b, this.onNewAnimationGroupAddedObservable = new OT.b, this.onAnimationGroupRemovedObservable = new OT.b, this.onNewMaterialAddedObservable = new OT.b, this.onNewMultiMaterialAddedObservable = new OT.b, this.onMaterialRemovedObservable = new OT.b, this.onMultiMaterialRemovedObservable = new OT.b, this.onNewTextureAddedObservable = new OT.b, this.onTextureRemovedObservable = new OT.b, this.onNewFrameGraphAddedObservable = new OT.b, this.onFrameGraphRemovedObservable = new OT.b, this.onNewObjectRendererAddedObservable = new OT.b, this.onObjectRendererRemovedObservable = new OT.b, this.onNewPostProcessAddedObservable = new OT.b, this.onPostProcessRemovedObservable = new OT.b, this.onNewEffectLayerAddedObservable = new OT.b, this.onEffectLayerRemovedObservable = new OT.b, this.onBeforeRenderTargetsRenderObservable = new OT.b, this.onAfterRenderTargetsRenderObservable = new OT.b, this.onBeforeStepObservable = new OT.b, this.onAfterStepObservable = new OT.b, this.onActiveCameraChanged = new OT.b, this.onActiveCamerasChanged = new OT.b, this.onBeforeRenderingGroupObservable = new OT.b, this.onAfterRenderingGroupObservable = new OT.b, this.onMeshImportedObservable = new OT.b, this.onAnimationFileImportedObservable = new OT.b, this.onEnvironmentTextureChangedObservable = new OT.b, this.onMeshUnderPointerUpdatedObservable = new OT.b, this._registeredForLateAnimationBindings = new yT.d(256), this._pointerPickingConfiguration = new qT, this.onPrePointerObservable = new OT.b, this.onPointerObservable = new OT.b, this.onPreKeyboardObservable = new OT.b, this.onKeyboardObservable = new OT.b, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = Oc.FOGMODE_NONE, this.fogColor = new YT.c(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.sG = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new IT.m(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new yT.d(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new UT.b, this._activeIndices = new UT.b, this._activeParticles = new UT.b, this._activeBones = new UT.b, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new yT.g(256), this._processedMaterials = new yT.g(256), this._renderTargets = new yT.d(256), this._materialsRenderTargets = new yT.d(256), this._activeParticleSystems = new yT.g(256), this._activeSkeletons = new yT.d(32), this._softwareSkinnedMeshes = new yT.d(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = IT.d.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = QT.g.Create(), this._beforeClearStage = QT.g.Create(), this._beforeRenderTargetClearStage = QT.g.Create(), this._gatherRenderTargetsStage = QT.g.Create(), this._gatherActiveCameraRenderTargetsStage = QT.g.Create(), this._isReadyForMeshStage = QT.g.Create(), this._beforeEvaluateActiveMeshStage = QT.g.Create(), this._evaluateSubMeshStage = QT.g.Create(), this._preActiveMeshStage = QT.g.Create(), this._cameraDrawRenderTargetStage = QT.g.Create(), this._beforeCameraDrawStage = QT.g.Create(), this._beforeRenderTargetDrawStage = QT.g.Create(), this._beforeRenderingGroupDrawStage = QT.g.Create(), this._beforeRenderingMeshStage = QT.g.Create(), this._afterRenderingMeshStage = QT.g.Create(), this._afterRenderingGroupDrawStage = QT.g.Create(), this._afterCameraDrawStage = QT.g.Create(), this._afterCameraPostProcessStage = QT.g.Create(), this._afterRenderTargetDrawStage = QT.g.Create(), this._afterRenderTargetPostProcessStage = QT.g.Create(), this._afterRenderStage = QT.g.Create(), this._pointerMoveStage = QT.g.Create(), this._pointerDownStage = QT.g.Create(), this._pointerUpStage = QT.g.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new OT.b, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const cT = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...kT
        };
        this.defaultCameraLayerMask = cT.defaultCameraLayerMask, this.defaultRenderableLayerMask = cT.defaultRenderableLayerMask, TT = this._engine = TT || DT.d.LastCreatedEngine, cT.virtual ? TT._virtualScenes.push(this) : (DT.d._LastCreatedScene = this, TT.scenes.push(this)), (TT.getCreationOptions().useLargeWorldRendering || kT?.useFloatingOrigin) && ((0, hT.g)(), this._floatingOriginScene = this, hT.d.NJ = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new NT.c(this), tT.b && (this.postProcessManager = new tT.b(this)), (0, ST.i)() && this.attachControl(), this._createUbo(), AT.c && (this._imageProcessingConfiguration = new AT.c), this.setDefaultCandidateProviders(), cT.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = cT.useMaterialMeshMap, this.useClonedMeshMap = cT.useClonedMeshMap, kT && kT.virtual || TT.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(TT) {
        return this._defaultSubMeshCandidates.data = TT.kF, this._defaultSubMeshCandidates.length = TT.kF.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = TT => this._getDefaultSubMeshCandidates(TT), this.getIntersectingSubMeshCandidates = (TT, kT) => this._getDefaultSubMeshCandidates(TT), this.getCollidingSubMeshCandidates = (TT, kT) => this._getDefaultSubMeshCandidates(TT)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(TT) {
        this._inputManager.pointerX = TT
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(TT) {
        this._inputManager.pointerY = TT
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
      isCachedMaterialInvalid(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== kT || this._cachedMaterial !== TT || this._cachedVisibility !== cT
      }
      Dv() {
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
      simulatePointerMove(TT, kT) {
        return this._inputManager.simulatePointerMove(TT, kT), this
      }
      simulatePointerDown(TT, kT) {
        return this._inputManager.simulatePointerDown(TT, kT), this
      }
      simulatePointerUp(TT, kT, cT) {
        return this._inputManager.simulatePointerUp(TT, kT, cT), this
      }
      isPointerCaptured() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(TT)
      }
      attachControl() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(TT, kT, cT)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let TT, kT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const cT = this.Dv(),
          lT = cT.currentRenderPassId;
        cT.currentRenderPassId = this.activeCamera?.renderPassId ?? lT;
        let MT = !0;
        for (this._pendingData.length > 0 && (MT = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && MT && (MT = this.depthPeelingRenderer.isReady()), kT && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), TT = 0; TT < this.meshes.length; TT++) {
          const lT = this.meshes[TT];
          if (!lT.kF || 0 === lT.kF.length) continue;
          if (!lT.isReady(!0)) {
            MT = !1;
            continue
          }
          const KT = lT.hasThinInstances || "InstancedMesh" === lT.getClassName() || "InstancedLinesMesh" === lT.getClassName() || cT.getCaps().instancedArrays && lT.instances.length > 0;
          for (let TT = 0, kT = this._isReadyForMeshStage; TT < kT.length; TT++) {
            kT[TT].action(lT, KT) || (MT = !1)
          }
          if (!kT) continue;
          const OT = lT.material || this.defaultMaterial;
          if (OT)
            if (OT._storeEffectOnSubMeshes)
              for (const TT of lT.kF) {
                const kT = TT.wv();
                kT && kT.hasRenderTargetTextures && null != kT.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(kT) && (this._processedMaterials.push(kT), this._materialsRenderTargets.concatWithNoDuplicate(kT.getRenderTargetTextures()))
              } else OT.hasRenderTargetTextures && null != OT.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(OT) && (this._processedMaterials.push(OT), this._materialsRenderTargets.concatWithNoDuplicate(OT.getRenderTargetTextures()))
        }
        if (kT) {
          for (TT = 0; TT < this._materialsRenderTargets.length; ++TT) {
            this._materialsRenderTargets.data[TT].isReadyForRendering() || (MT = !1)
          }
          for (TT = 0; TT < this.customRenderTargets.length; ++TT) {
            this.customRenderTargets[TT].isReadyForRendering() || (MT = !1)
          }
        }
        for (TT = 0; TT < this.geometries.length; TT++) {
          2 === this.geometries[TT].delayLoadState && (MT = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const KT of this.activeCameras) KT.isReady(!0) || (MT = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (MT = !1));
        for (const KT of this.lF) KT.isReady() || (MT = !1);
        if (this.proceduralTexturesEnabled)
          for (const KT of this.proceduralTextures) KT.isReady() || (MT = !1);
        if (this.layers)
          for (const KT of this.layers) KT.isReady() || (MT = !1);
        if (this.effectLayers)
          for (const KT of this.effectLayers) KT.isLayerReady() || (MT = !1);
        for (const KT of this._isReadyChecks) KT.isReady() || (MT = !1);
        return cT.areAllEffectsReady() || (MT = !1), cT.currentRenderPassId = lT, MT
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(TT) {
        this.onBeforeRenderObservable.add(TT)
      }
      unregisterBeforeRender(TT) {
        this.onBeforeRenderObservable.removeCallback(TT)
      }
      registerAfterRender(TT) {
        this.onAfterRenderObservable.add(TT)
      }
      unregisterAfterRender(TT) {
        this.onAfterRenderObservable.removeCallback(TT)
      }
      _executeOnceBeforeRender(TT) {
        const kT = () => {
          TT(), setTimeout((() => {
            this.unregisterBeforeRender(kT)
          }))
        };
        this.registerBeforeRender(kT)
      }
      executeOnceBeforeRender(TT, kT) {
        void 0 !== kT ? setTimeout((() => {
          this._executeOnceBeforeRender(TT)
        }), kT) : this._executeOnceBeforeRender(TT)
      }
      addPendingData(TT) {
        this._pendingData.push(TT)
      }
      removePendingData(TT) {
        const kT = this.isLoading,
          cT = this._pendingData.indexOf(TT); - 1 !== cT && this._pendingData.splice(cT, 1), kT && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(TT) {
        -1 === this._isReadyChecks.indexOf(TT) && this._isReadyChecks.push(TT)
      }
      removeIsReadyCheck(TT) {
        const kT = this._isReadyChecks.indexOf(TT); - 1 !== kT && this._isReadyChecks.splice(kT, 1)
      }
      executeWhenReady(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(TT), null === this._executeWhenReadyTimeoutId && this._checkIsReady(kT)
      }
      async whenReadyAsync() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((kT => {
          this.executeWhenReady((() => {
            kT()
          }), TT)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = KT.d.Now;
        else if (this.onReadyTimeoutDuration > 0 && KT.d.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(TT)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(TT)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = KT.d.Now
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
      setTransformMatrix(TT, kT, cT, lT) {
        this._multiviewSceneUboIsActive = !!(cT && lT && this._multiviewSceneUbo), this._viewUpdateFlag === TT.updateFlag && this._projectionUpdateFlag === kT.updateFlag || (this._viewUpdateFlag = TT.updateFlag, this._projectionUpdateFlag = kT.updateFlag, this._viewMatrix = TT, this._projectionMatrix = kT, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new IT.d), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? BT.c.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = BT.c.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(cT, lT) : this._sceneUbo.useUbo && (this._sceneUbo.X3("viewProjection", this._transformMatrix), this._sceneUbo.X3("view", this._viewMatrix), this._sceneUbo.X3("projection", this._projectionMatrix), this._sceneUbo.X3("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(TT, kT) {
        const cT = "boolean" === typeof kT ? kT : kT?.trackUBOsInFrame,
          lT = new CT.b(this._engine, void 0, !1, TT ?? "et", void 0, cT);
        return lT.addUniform("viewProjection", 16), lT.addUniform("view", 16), lT.addUniform("projection", 16), lT.addUniform("vEyePosition", 4), lT.addUniform("inverseProjection", 16), lT
      }
      setSceneUniformBuffer(TT) {
        this._sceneUbo = TT, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : IT.m.ZeroReadOnly
      }
      getUniqueId() {
        return WT.UniqueId
      }
      rcT(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(TT), TT._resyncLightSources(), TT.parent || TT._addToSceneRootNodes(), MT.e.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(TT)
          })), kT)) {
          const kT = TT.getChildMeshes();
          for (const TT of kT) this.rcT(TT)
        }
      }
      eJ(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cT = this.meshes.indexOf(TT);
        if (-1 !== cT && (this.meshes.splice(cT, 1), TT.parent || TT._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(TT), this.onMeshRemovedObservable.notifyObservers(TT), kT) {
          const kT = TT.getChildMeshes();
          for (const TT of kT) this.eJ(TT)
        }
        return cT
      }
      addTransformNode(TT) {
        this._blockEntityCollection || TT.NJ() === this && -1 !== TT._indexInSceneTransformNodesArray || (TT._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(TT), TT.parent || TT._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(TT))
      }
      removeTransformNode(TT) {
        const kT = TT._indexInSceneTransformNodesArray;
        if (-1 !== kT) {
          if (kT !== this.transformNodes.length - 1) {
            const TT = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[kT] = TT, TT._indexInSceneTransformNodesArray = kT
          }
          TT._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), TT.parent || TT._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(TT), kT
      }
      removeSkeleton(TT) {
        const kT = this.skeletons.indexOf(TT);
        return -1 !== kT && (this.skeletons.splice(kT, 1), this.onSkeletonRemovedObservable.notifyObservers(TT), this._executeActiveContainerCleanup(this._activeSkeletons)), kT
      }
      removeMorphTargetManager(TT) {
        const kT = this.morphTargetManagers.indexOf(TT);
        return -1 !== kT && this.morphTargetManagers.splice(kT, 1), kT
      }
      removeLight(TT) {
        const kT = this.lights.indexOf(TT);
        if (-1 !== kT) {
          for (const kT of this.meshes) kT._removeLightSource(TT, !1);
          this.lights.splice(kT, 1), this.sortLightsByPriority(), TT.parent || TT._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(TT)
        }
        return kT
      }
      removeCamera(TT) {
        const kT = this.cameras.indexOf(TT);
        if (-1 !== kT && (this.cameras.splice(kT, 1), TT.parent || TT._removeFromSceneRootNodes()), this.activeCameras) {
          const kT = this.activeCameras.indexOf(TT); - 1 !== kT && this.activeCameras.splice(kT, 1)
        }
        return this.activeCamera === TT && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(TT), kT
      }
      removeParticleSystem(TT) {
        const kT = this.lF.indexOf(TT);
        return -1 !== kT && (this.lF.splice(kT, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(TT), kT
      }
      removeAnimation(TT) {
        const kT = this.animations.indexOf(TT);
        return -1 !== kT && this.animations.splice(kT, 1), kT
      }
      stopAnimation(TT, kT, cT) {}
      removeAnimationGroup(TT) {
        const kT = this.animationGroups.indexOf(TT);
        return -1 !== kT && this.animationGroups.splice(kT, 1), this.onAnimationGroupRemovedObservable.notifyObservers(TT), kT
      }
      removeMultiMaterial(TT) {
        const kT = this.multiMaterials.indexOf(TT);
        return -1 !== kT && this.multiMaterials.splice(kT, 1), this.onMultiMaterialRemovedObservable.notifyObservers(TT), kT
      }
      removeMaterial(TT) {
        const kT = TT._indexInSceneMaterialArray;
        if (-1 !== kT && kT < this.materials.length) {
          if (kT !== this.materials.length - 1) {
            const TT = this.materials[this.materials.length - 1];
            this.materials[kT] = TT, TT._indexInSceneMaterialArray = kT
          }
          TT._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(TT), kT
      }
      removeActionManager(TT) {
        const kT = this.actionManagers.indexOf(TT);
        return -1 !== kT && this.actionManagers.splice(kT, 1), kT
      }
      removeTexture(TT) {
        const kT = this.textures.indexOf(TT);
        return -1 !== kT && this.textures.splice(kT, 1), this.onTextureRemovedObservable.notifyObservers(TT), kT
      }
      removeFrameGraph(TT) {
        const kT = this.frameGraphs.indexOf(TT);
        return -1 !== kT && this.frameGraphs.splice(kT, 1), this.onFrameGraphRemovedObservable.notifyObservers(TT), kT
      }
      removeObjectRenderer(TT) {
        const kT = this.objectRenderers.indexOf(TT);
        return -1 !== kT && this.objectRenderers.splice(kT, 1), this.onObjectRendererRemovedObservable.notifyObservers(TT), kT
      }
      removePostProcess(TT) {
        const kT = this.postProcesses.indexOf(TT);
        return -1 !== kT && this.postProcesses.splice(kT, 1), this.onPostProcessRemovedObservable.notifyObservers(TT), kT
      }
      removeEffectLayer(TT) {
        const kT = this.effectLayers.indexOf(TT);
        return -1 !== kT && this.effectLayers.splice(kT, 1), this.onEffectLayerRemovedObservable.notifyObservers(TT), kT
      }
      addLight(TT) {
        if (!this._blockEntityCollection) {
          this.lights.push(TT), this.sortLightsByPriority(), TT.parent || TT._addToSceneRootNodes();
          for (const kT of this.meshes) - 1 === kT.lightSources.indexOf(TT) && (kT.lightSources.push(TT), kT._resyncLightSources());
          MT.e.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(TT)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(pT.b.CompareLightsPriority)
      }
      addCamera(TT) {
        this._blockEntityCollection || (this.cameras.push(TT), MT.e.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(TT)
        })), TT.parent || TT._addToSceneRootNodes())
      }
      addSkeleton(TT) {
        this._blockEntityCollection || (this.skeletons.push(TT), MT.e.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(TT)
        })))
      }
      addParticleSystem(TT) {
        this._blockEntityCollection || (this.lF.push(TT), MT.e.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(TT)
        })))
      }
      addAnimation(TT) {
        this._blockEntityCollection || this.animations.push(TT)
      }
      addAnimationGroup(TT) {
        this._blockEntityCollection || (this.animationGroups.push(TT), MT.e.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(TT)
        })))
      }
      addMultiMaterial(TT) {
        this._blockEntityCollection || (this.multiMaterials.push(TT), MT.e.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(TT)
        })))
      }
      addMaterial(TT) {
        this._blockEntityCollection || TT.NJ() === this && -1 !== TT._indexInSceneMaterialArray || (TT._indexInSceneMaterialArray = this.materials.length, this.materials.push(TT), MT.e.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(TT)
        })))
      }
      addMorphTargetManager(TT) {
        this._blockEntityCollection || this.morphTargetManagers.push(TT)
      }
      addGeometry(TT) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[TT.uniqueId] = this.geometries.length), this.geometries.push(TT))
      }
      addActionManager(TT) {
        this.actionManagers.push(TT)
      }
      addTexture(TT) {
        this._blockEntityCollection || (this.textures.push(TT), this.onNewTextureAddedObservable.notifyObservers(TT))
      }
      addFrameGraph(TT) {
        this.frameGraphs.push(TT), MT.e.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(TT)
        }))
      }
      addObjectRenderer(TT) {
        this.objectRenderers.push(TT), MT.e.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(TT)
        }))
      }
      addPostProcess(TT) {
        this._blockEntityCollection || (this.postProcesses.push(TT), MT.e.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(TT)
        })))
      }
      addEffectLayer(TT) {
        this._blockEntityCollection || (this.effectLayers.push(TT), MT.e.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(TT)
        })))
      }
      switchActiveCamera(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = TT, kT && TT.attachControl())
      }
      setActiveCameraById(TT) {
        const kT = this.getCameraById(TT);
        return kT ? (this.activeCamera = kT, kT) : null
      }
      setActiveCameraByName(TT) {
        const kT = this.getCameraByName(TT);
        return kT ? (this.activeCamera = kT, kT) : null
      }
      getAnimationGroupByName(TT) {
        for (let kT = 0; kT < this.animationGroups.length; kT++)
          if (this.animationGroups[kT].name === TT) return this.animationGroups[kT];
        return null
      }
      _getMaterial(TT, kT) {
        for (let cT = 0; cT < this.materials.length; cT++) {
          const TT = this.materials[cT];
          if (kT(TT)) return TT
        }
        if (TT)
          for (let cT = 0; cT < this.multiMaterials.length; cT++) {
            const TT = this.multiMaterials[cT];
            if (kT(TT)) return TT
          }
        return null
      }
      getMaterialByUniqueID(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(TT, kT)
      }
      getMaterialByUniqueId(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(kT, (kT => kT.uniqueId === TT))
      }
      getMaterialById(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(kT, (kT => kT.id === TT))
      }
      getMaterialByName(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(kT, (kT => kT.name === TT))
      }
      getLastMaterialById(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let cT = this.materials.length - 1; cT >= 0; cT--)
          if (this.materials[cT].id === TT) return this.materials[cT];
        if (kT)
          for (let cT = this.multiMaterials.length - 1; cT >= 0; cT--)
            if (this.multiMaterials[cT].id === TT) return this.multiMaterials[cT];
        return null
      }
      getTextureByUniqueId(TT) {
        for (let kT = 0; kT < this.textures.length; kT++)
          if (this.textures[kT].uniqueId === TT) return this.textures[kT];
        return null
      }
      getTextureByName(TT) {
        for (let kT = 0; kT < this.textures.length; kT++)
          if (this.textures[kT].name === TT) return this.textures[kT];
        return null
      }
      getCameraById(TT) {
        for (let kT = 0; kT < this.cameras.length; kT++)
          if (this.cameras[kT].id === TT) return this.cameras[kT];
        return null
      }
      getCameraByUniqueId(TT) {
        for (let kT = 0; kT < this.cameras.length; kT++)
          if (this.cameras[kT].uniqueId === TT) return this.cameras[kT];
        return null
      }
      getCameraByName(TT) {
        for (let kT = 0; kT < this.cameras.length; kT++)
          if (this.cameras[kT].name === TT) return this.cameras[kT];
        return null
      }
      getBoneById(TT) {
        for (let kT = 0; kT < this.skeletons.length; kT++) {
          const cT = this.skeletons[kT];
          for (let kT = 0; kT < cT.bones.length; kT++)
            if (cT.bones[kT].id === TT) return cT.bones[kT]
        }
        return null
      }
      getBoneByName(TT) {
        for (let kT = 0; kT < this.skeletons.length; kT++) {
          const cT = this.skeletons[kT];
          for (let kT = 0; kT < cT.bones.length; kT++)
            if (cT.bones[kT].name === TT) return cT.bones[kT]
        }
        return null
      }
      getLightByName(TT) {
        for (let kT = 0; kT < this.lights.length; kT++)
          if (this.lights[kT].name === TT) return this.lights[kT];
        return null
      }
      getLightById(TT) {
        for (let kT = 0; kT < this.lights.length; kT++)
          if (this.lights[kT].id === TT) return this.lights[kT];
        return null
      }
      getLightByUniqueId(TT) {
        for (let kT = 0; kT < this.lights.length; kT++)
          if (this.lights[kT].uniqueId === TT) return this.lights[kT];
        return null
      }
      getParticleSystemById(TT) {
        for (let kT = 0; kT < this.lF.length; kT++)
          if (this.lF[kT].id === TT) return this.lF[kT];
        return null
      }
      getGeometryById(TT) {
        for (let kT = 0; kT < this.geometries.length; kT++)
          if (this.geometries[kT].id === TT) return this.geometries[kT];
        return null
      }
      _getGeometryByUniqueId(TT) {
        if (this._geometriesByUniqueId) {
          const kT = this._geometriesByUniqueId[TT];
          if (void 0 !== kT) return this.geometries[kT]
        } else
          for (let kT = 0; kT < this.geometries.length; kT++)
            if (this.geometries[kT].uniqueId === TT) return this.geometries[kT];
        return null
      }
      getFrameGraphByName(TT) {
        for (let kT = 0; kT < this.frameGraphs.length; kT++)
          if (this.frameGraphs[kT].name === TT) return this.frameGraphs[kT];
        return null
      }
      pushGeometry(TT, kT) {
        return !(!kT && this._getGeometryByUniqueId(TT.uniqueId)) && (this.addGeometry(TT), MT.e.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(TT)
        })), !0)
      }
      removeGeometry(TT) {
        let kT;
        if (this._geometriesByUniqueId) {
          if (kT = this._geometriesByUniqueId[TT.uniqueId], void 0 === kT) return !1
        } else if (kT = this.geometries.indexOf(TT), kT < 0) return !1;
        if (kT !== this.geometries.length - 1) {
          const TT = this.geometries[this.geometries.length - 1];
          TT && (this.geometries[kT] = TT, this._geometriesByUniqueId && (this._geometriesByUniqueId[TT.uniqueId] = kT))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[TT.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(TT), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(TT) {
        for (let kT = 0; kT < this.meshes.length; kT++)
          if (this.meshes[kT].id === TT) return this.meshes[kT];
        return null
      }
      getMeshesById(TT) {
        return this.meshes.filter((function(kT) {
          return kT.id === TT
        }))
      }
      getTransformNodeById(TT) {
        for (let kT = 0; kT < this.transformNodes.length; kT++)
          if (this.transformNodes[kT].id === TT) return this.transformNodes[kT];
        return null
      }
      getTransformNodeByUniqueId(TT) {
        for (let kT = 0; kT < this.transformNodes.length; kT++)
          if (this.transformNodes[kT].uniqueId === TT) return this.transformNodes[kT];
        return null
      }
      getTransformNodesById(TT) {
        return this.transformNodes.filter((function(kT) {
          return kT.id === TT
        }))
      }
      getMeshByUniqueId(TT) {
        for (let kT = 0; kT < this.meshes.length; kT++)
          if (this.meshes[kT].uniqueId === TT) return this.meshes[kT];
        return null
      }
      getLastMeshById(TT) {
        for (let kT = this.meshes.length - 1; kT >= 0; kT--)
          if (this.meshes[kT].id === TT) return this.meshes[kT];
        return null
      }
      getLastTransformNodeById(TT) {
        for (let kT = this.transformNodes.length - 1; kT >= 0; kT--)
          if (this.transformNodes[kT].id === TT) return this.transformNodes[kT];
        return null
      }
      getLastEntryById(TT) {
        let kT;
        for (kT = this.meshes.length - 1; kT >= 0; kT--)
          if (this.meshes[kT].id === TT) return this.meshes[kT];
        for (kT = this.transformNodes.length - 1; kT >= 0; kT--)
          if (this.transformNodes[kT].id === TT) return this.transformNodes[kT];
        for (kT = this.cameras.length - 1; kT >= 0; kT--)
          if (this.cameras[kT].id === TT) return this.cameras[kT];
        for (kT = this.lights.length - 1; kT >= 0; kT--)
          if (this.lights[kT].id === TT) return this.lights[kT];
        for (kT = this.skeletons.length - 1; kT >= 0; kT--) {
          const cT = this.skeletons[kT];
          for (let kT = cT.bones.length - 1; kT >= 0; kT--)
            if (cT.bones[kT].id === TT) return cT.bones[kT]
        }
        return null
      }
      getNodeById(TT) {
        const kT = this.getMeshById(TT);
        if (kT) return kT;
        const cT = this.getTransformNodeById(TT);
        if (cT) return cT;
        const lT = this.getLightById(TT);
        if (lT) return lT;
        const MT = this.getCameraById(TT);
        if (MT) return MT;
        const KT = this.getBoneById(TT);
        return KT || null
      }
      getNodeByName(TT) {
        const kT = this.getMeshByName(TT);
        if (kT) return kT;
        const cT = this.getTransformNodeByName(TT);
        if (cT) return cT;
        const lT = this.getLightByName(TT);
        if (lT) return lT;
        const MT = this.getCameraByName(TT);
        if (MT) return MT;
        const KT = this.getBoneByName(TT);
        return KT || null
      }
      getMeshByName(TT) {
        for (let kT = 0; kT < this.meshes.length; kT++)
          if (this.meshes[kT].name === TT) return this.meshes[kT];
        return null
      }
      getTransformNodeByName(TT) {
        for (let kT = 0; kT < this.transformNodes.length; kT++)
          if (this.transformNodes[kT].name === TT) return this.transformNodes[kT];
        return null
      }
      getLastSkeletonById(TT) {
        for (let kT = this.skeletons.length - 1; kT >= 0; kT--)
          if (this.skeletons[kT].id === TT) return this.skeletons[kT];
        return null
      }
      getSkeletonByUniqueId(TT) {
        for (let kT = 0; kT < this.skeletons.length; kT++)
          if (this.skeletons[kT].uniqueId === TT) return this.skeletons[kT];
        return null
      }
      getSkeletonById(TT) {
        for (let kT = 0; kT < this.skeletons.length; kT++)
          if (this.skeletons[kT].id === TT) return this.skeletons[kT];
        return null
      }
      getSkeletonByName(TT) {
        for (let kT = 0; kT < this.skeletons.length; kT++)
          if (this.skeletons[kT].name === TT) return this.skeletons[kT];
        return null
      }
      getMorphTargetManagerById(TT) {
        for (let kT = 0; kT < this.morphTargetManagers.length; kT++)
          if (this.morphTargetManagers[kT].uniqueId === TT) return this.morphTargetManagers[kT];
        return null
      }
      getMorphTargetById(TT) {
        for (let kT = 0; kT < this.morphTargetManagers.length; ++kT) {
          const cT = this.morphTargetManagers[kT];
          for (let kT = 0; kT < cT.numTargets; ++kT) {
            const lT = cT.getTarget(kT);
            if (lT.id === TT) return lT
          }
        }
        return null
      }
      getMorphTargetByName(TT) {
        for (let kT = 0; kT < this.morphTargetManagers.length; ++kT) {
          const cT = this.morphTargetManagers[kT];
          for (let kT = 0; kT < cT.numTargets; ++kT) {
            const lT = cT.getTarget(kT);
            if (lT.name === TT) return lT
          }
        }
        return null
      }
      getPostProcessByName(TT) {
        for (let kT = 0; kT < this.postProcesses.length; ++kT) {
          const cT = this.postProcesses[kT];
          if (cT.name === TT) return cT
        }
        return null
      }
      isActiveMesh(TT) {
        return -1 !== this._activeMeshes.indexOf(TT)
      }
      get uid() {
        return this._uid || (this._uid = lT.h.RandomId()), this._uid
      }
      addExternalData(TT, kT) {
        return this._externalData || (this._externalData = new fT), this._externalData.add(TT, kT)
      }
      getExternalData(TT) {
        return this._externalData ? this._externalData.get(TT) : null
      }
      getOrAddExternalDataWithFactory(TT, kT) {
        return this._externalData || (this._externalData = new fT), this._externalData.getOrAddWithFactory(TT, kT)
      }
      removeExternalData(TT) {
        return this._externalData.remove(TT)
      }
      _evaluateSubMesh(TT, kT, cT, lT) {
        if (lT || TT.isInFrustum(this._frustumPlanes)) {
          for (let lT = 0, MT = this._evaluateSubMeshStage; lT < MT.length; lT++) {
            MT[lT].action(kT, TT)
          }
          const cT = TT.wv();
          null !== cT && void 0 !== cT && (cT.hasRenderTargetTextures && null != cT.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(cT) && (this._processedMaterials.push(cT), this._materialsRenderTargets.concatWithNoDuplicate(cT.getRenderTargetTextures())), this._renderingManager.dispatch(TT, kT, cT))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(TT) {
        this._preventFreeActiveMeshesAndRenderingGroups !== TT && (TT && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = TT)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let TT = 0; TT < this.activeCameras.length; TT++) {
            const kT = this.activeCameras[TT];
            kT && kT._activeMeshes && kT._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let TT = 0; TT < this.textures.length; TT++) {
            const kT = this.textures[TT];
            kT && kT.renderList && kT.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          kT = arguments.length > 1 ? arguments[1] : void 0,
          cT = arguments.length > 2 ? arguments[2] : void 0,
          lT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          KT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const OT = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const TT of OT) TT.objectRenderer._freezeActiveMeshes(lT);
          return this._freezeActiveMeshesCancel = (0, MT.g)((() => {
            let TT = !0,
              kT = !0;
            for (const cT of OT) TT && (TT = cT.objectRenderer._isFrozen), kT && (kT = null !== cT.objectRenderer._freezeActiveMeshesCancel);
            if (TT) return !0;
            if (!kT) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = KT, this._skipEvaluateActiveMeshesCompletely = TT, kT?.()
          }), ((TT, kT) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), kT) {
              const kT = "Scene: Timeout while waiting for meshes to be frozen.";
              cT ? cT(kT) : (kc.e.Error(kT), TT && kc.e.Error(TT))
            } else {
              const kT = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              cT ? cT(kT) : (kc.e.Error(kT), TT && (kc.e.Error(TT), TT.stack && kc.e.Error(TT.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = KT, this._skipEvaluateActiveMeshesCompletely = TT, lT)
              for (let TT = 0; TT < this._activeMeshes.length; TT++) this._activeMeshes.data[TT]._freeze();
            kT && kT()
          } else cT && cT("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let TT = 0; TT < this.meshes.length; TT++) {
          const kT = this.meshes[TT];
          kT._internalAbstractMeshDataInfo && (kT._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const TT = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const kT of TT) kT.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let TT = 0; TT < this._activeMeshes.length; TT++) this._activeMeshes.data[TT]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(TT) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => TT.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const TT = this._activeMeshes.length;
            for (let kT = 0; kT < TT; kT++) {
              this._activeMeshes.data[kT].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const TT = this._activeParticleSystems.length;
            for (let kT = 0; kT < TT; kT++) this._activeParticleSystems.data[kT].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let MT = 0, KT = this._beforeEvaluateActiveMeshStage; MT < KT.length; MT++) {
          KT[MT].action()
        }
        const TT = this.getActiveMeshCandidates(),
          kT = TT.length,
          cT = UT.b.Enabled,
          lT = this.customLODSelector;
        for (let MT = 0; MT < kT; MT++) {
          const kT = TT.data[MT],
            KT = !lT && !kT.aJ && !kT._internalMeshDataInfo?._LODLevels.length;
          let OT, yT;
          if ((KT || (OT = kT._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), OT ? OT[1] = -1 : (OT = [kT, -1], kT._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, OT))), !kT.isBlocked) && (cT && this._totalVertices.addCount(kT.getTotalVertices(), !1), kT.isReady() && kT.isEnabled() && !kT.GA.hasAZeroComponent)) {
            if (kT.computeWorldMatrix(), kT.actionManager && kT.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(kT), KT) yT = kT;
            else if (yT = lT ? lT(kT, this.activeCamera) : kT.getLOD(this.activeCamera), OT[0] = yT, OT[1] = this._frameId, void 0 === yT || null === yT) continue;
            if (yT !== kT && 0 !== yT.billboardMode && yT.computeWorldMatrix(), kT._preActivate(), kT.isVisible && kT.visibility > 0 && 0 !== (kT.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || kT.av || kT.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(kT), this.activeCamera._activeMeshes.push(kT), yT !== kT && yT._activate(this._renderId, !1);
              for (let TT = 0, cT = this._preActiveMeshStage; TT < cT.length; TT++) {
                cT[TT].action(kT)
              }
              kT._activate(this._renderId, !1) && (kT.aJ ? kT._internalAbstractMeshDataInfo._actAsRegularMesh && (yT = kT) : yT._internalAbstractMeshDataInfo._onlyForInstances = !1, yT._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(kT, yT)), kT._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let TT = 0; TT < this.lF.length; TT++) {
            const kT = this.lF[TT];
            if (!kT.isStarted() || !kT.emitter) continue;
            const cT = kT.emitter;
            cT.position && !cT.isEnabled() || (this._activeParticleSystems.push(kT), kT.animate(), this._renderingManager.dispatchParticles(kT))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(TT) {
        this._skeletonsEnabled && TT.skeleton && (this._activeSkeletons.pushNoDuplicate(TT.skeleton) && (TT.skeleton.prepare(), this._activeBones.addCount(TT.skeleton.bones.length, !1)), TT.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(TT) && this.frameGraph && TT.applySkeleton(TT.skeleton))
      }
      _activeMesh(TT, kT) {
        this._prepareSkeleton(kT);
        let cT = TT.tlT || TT.aJ || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || kT.av;
        if (kT && kT.kF && kT.kF.length > 0) {
          const lT = this.getActiveSubMeshCandidates(kT),
            MT = lT.length;
          cT = cT || 1 === MT;
          for (let KT = 0; KT < MT; KT++) {
            const MT = lT.data[KT];
            this._evaluateSubMesh(MT, kT, TT, cT)
          }
        }
      }
      updateTransformMatrix(TT) {
        const kT = this.activeCamera;
        if (kT)
          if (kT._renderingMultiview) {
            const cT = kT._rigCameras[0],
              lT = kT._rigCameras[1];
            this.setTransformMatrix(cT.getViewMatrix(), cT.getProjectionMatrix(TT), lT.getViewMatrix(), lT.getProjectionMatrix(TT))
          } else this.setTransformMatrix(kT.getViewMatrix(), kT.getProjectionMatrix(TT))
      }
      _bindFrameBuffer(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (TT && TT._multiviewTexture ? TT._multiviewTexture._bindFrameBuffer() : TT && TT.outputRenderTarget ? TT.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), kT && this._clearFrameBuffer(TT)
      }
      _clearFrameBuffer(TT) {
        if (TT && TT._multiviewTexture);
        else if (TT && TT.outputRenderTarget && !TT._renderingMultiview) {
          const kT = TT.outputRenderTarget;
          kT.onClearObservable.hasObservers() ? kT.onClearObservable.notifyObservers(this._engine) : kT.skipInitialClear || TT.isRightCamera || (this.autoClear && this._engine.clear(kT.clearColor || this._clearColor, !kT._cleared, !0, !0), kT._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(TT, kT) {
        let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (TT && TT._skipRendering) return;
        const MT = this._engine;
        if (this._activeCamera = TT, !this.activeCamera) throw new Error("Active camera not set");
        if (MT.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && cT) {
          let kT = !0;
          TT._renderingMultiview && TT.outputRenderTarget && (kT = TT.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, TT.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), TT._renderingMultiview && TT.outputRenderTarget && (TT.outputRenderTarget.skipInitialClear = kT)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = TT.outputRenderTarget?.renderPassId ?? TT.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let lT = 0; lT < this._softwareSkinnedMeshes.length; lT++) {
          const TT = this._softwareSkinnedMeshes.data[lT];
          TT.applySkeleton(TT.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), TT.customRenderTargets && TT.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(TT.customRenderTargets), kT && kT.customRenderTargets && kT.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(kT.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let lT = 0, yT = this._gatherActiveCameraRenderTargetsStage; lT < yT.length; lT++) {
          yT[lT].action(this._renderTargets)
        }
        let KT = !1;
        if (this.renderTargetsEnabled) {
          let TT;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            lT.h.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const kT = this.getBoundingBoxRenderer?.();
            for (let cT = 0; cT < this._renderTargets.length; cT++) {
              const lT = this._renderTargets.data[cT];
              if (lT._shouldRender()) {
                this._renderId++;
                const cT = lT.activeCamera && lT.activeCamera !== this.activeCamera;
                kT && !TT && (TT = kT.renderList.length > 0 ? kT.renderList.data.slice() : [], TT.length = kT.renderList.length), lT.render(cT, this.dumpNextRenderTargets), KT = !0
              }
            }
            kT && TT && (kT.renderList.data = TT, kT.renderList.length = TT.length), lT.h.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const kT = this.getBoundingBoxRenderer?.();
            kT && !TT && (TT = kT.renderList.length > 0 ? kT.renderList.data.slice() : [], TT.length = kT.renderList.length);
            for (let TT = 0, cT = this._cameraDrawRenderTargetStage; TT < cT.length; TT++) {
              KT = cT[TT].action(this.activeCamera) || KT
            }
            kT && TT && (kT.renderList.data = TT, kT.renderList.length = TT.length)
          }
          this._intermediateRendering = !1
        }
        KT && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || TT._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let lT = 0, yT = this._beforeCameraDrawStage; lT < yT.length; lT++) {
          yT[lT].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const OT = MT.snapshotRendering && 1 === MT.snapshotRenderingMode;
        OT && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !OT), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let lT = 0, yT = this._afterCameraDrawStage; lT < yT.length; lT++) {
          yT[lT].action(this.activeCamera)
        }
        if (this.postProcessManager && !TT._multiviewTexture) {
          const kT = TT.outputRenderTarget ? TT.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(TT.isIntermediate, kT)
        }
        for (let lT = 0, yT = this._afterCameraPostProcessStage; lT < yT.length; lT++) {
          yT[lT].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === TT.cameraRigMode || TT._renderingMultiview) return TT._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(TT, void 0, kT), void this.onAfterRenderCameraObservable.notifyObservers(TT);
        if (TT._useMultiviewToSingleView) this._renderMultiviewToSingleView(TT);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(TT);
          for (let kT = 0; kT < TT._rigCameras.length; kT++) this._renderForCamera(TT._rigCameras[kT], TT)
        }
        this._activeCamera = TT, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(TT)
      }
      _checkIntersections() {
        for (let TT = 0; TT < this._meshesForIntersections.length; TT++) {
          const kT = this._meshesForIntersections.data[TT];
          if (kT.actionManager)
            for (let TT = 0; kT.actionManager && TT < kT.actionManager.actions.length; TT++) {
              const cT = kT.actionManager.actions[TT];
              if (12 === cT.trigger || 13 === cT.trigger) {
                const TT = cT.getTriggerParameter(),
                  lT = TT.mesh ? TT.mesh : TT,
                  MT = lT.xlT(kT, TT.usePreciseIntersection),
                  KT = kT._intersectionsInProgress.indexOf(lT);
                MT && -1 === KT ? 12 === cT.trigger ? (cT._executeCurrent(vT.CreateNew(kT, void 0, lT)), kT._intersectionsInProgress.push(lT)) : 13 === cT.trigger && kT._intersectionsInProgress.push(lT) : !MT && KT > -1 && (13 === cT.trigger && cT._executeCurrent(vT.CreateNew(kT, void 0, lT)), kT.actionManager.hasSpecificTrigger(13, (TT => {
                  const kT = TT.mesh ? TT.mesh : TT;
                  return lT === kT
                })) && 13 !== cT.trigger || kT._intersectionsInProgress.splice(KT, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(TT) {}
      _animate(TT) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let TT = Math.max(Oc.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Oc.MaxDeltaTime)) + this._timeAccumulator;
          const kT = this._engine.getTimeStep(),
            cT = 1e3 / kT / 1e3;
          let lT = 0;
          const MT = this._engine.getLockstepMaxSteps();
          let KT = Math.floor(TT / kT);
          for (KT = Math.min(KT, MT); TT > 0 && lT < KT;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = kT * cT, this._animate(kT), this.onAfterAnimationsObservable.notifyObservers(this), this.sG && this._advancePhysicsEngineStep(kT), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, lT++, TT -= kT;
          this._timeAccumulator = TT < 0 ? 0 : TT
        } else {
          const TT = this.useConstantAnimationDeltaTime ? 16 : Math.max(Oc.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Oc.MaxDeltaTime));
          this._animationRatio = .06 * TT, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.sG && this._advancePhysicsEngineStep(TT)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(TT) {
        if (TT?.outputRenderTarget && !TT?.isRigCamera && (TT.outputRenderTarget._cleared = !1), TT?.rigCameras?.length)
          for (let kT = 0; kT < TT.rigCameras.length; ++kT) {
            const cT = TT.rigCameras[kT].outputRenderTarget;
            cT && (cT._cleared = !1)
          }
      }
      resetDrawCache(TT) {
        if (this.meshes)
          for (const kT of this.meshes) kT.resetDrawCache(TT)
      }
      _renderWithFrameGraph() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          kT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, TT)
          for (const cT of this.cameras)
            if (cT.update(), 0 !== cT.cameraRigMode)
              for (let TT = 0; TT < cT._rigCameras.length; TT++) cT._rigCameras[TT].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(kT)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(TT) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const kT = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), lT.h.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let TT = 0; TT < this._renderTargets.length; TT++) {
            const cT = this._renderTargets.data[TT],
              lT = cT.activeCamera || kT;
            this._renderRenderTarget(cT, lT, !0, this.dumpNextRenderTargets)
          }
          lT.h.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let cT = 0, lT = this._beforeClearStage; cT < lT.length; cT++) {
          lT[cT].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const kT = this.getActiveMeshCandidates(),
            cT = kT.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let TT = 0; TT < cT; TT++) {
                const cT = kT.data[TT];
                cT._internalAbstractMeshDataInfo._wasActiveLastFrame && cT.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const TT = this._activeParticleSystems.length;
              for (let kT = 0; kT < TT; kT++) this._activeParticleSystems.data[kT].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let lT = 0; lT < cT; lT++) {
              const cT = kT.data[lT];
              cT._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, cT.isBlocked || (this._totalVertices.addCount(cT.getTotalVertices(), !1), cT.isReady() && cT.isEnabled() && !cT.GA.hasAZeroComponent && (cT.computeWorldMatrix(TT), cT.actionManager && cT.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(cT)))
            }
            if (this.particlesEnabled)
              for (let TT = 0; TT < this.lF.length; TT++) {
                const kT = this.lF[TT];
                if (!kT.isStarted() || !kT.emitter) continue;
                const cT = kT.emitter;
                cT.position && !cT.isEnabled() || (this._activeParticleSystems.push(kT), kT.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, TT._shouldRender()) {
          if (this._renderId++, this.activeCamera = kT, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), TT.render(cT, lT)
        }
        this._intermediateRendering = !1
      }
      render() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.VkT) return;
        const cT = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(TT, kT)
        } finally {
          this._renderingMeshEvaluationDepth = cT
        }
      }
      _renderFrame(TT, kT) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), hT.d.NJ = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const cT of this.activeCameras) this._checkCameraRenderTarget(cT);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), kT || this.animate();
        for (let cT = 0, lT = this._beforeCameraUpdateStage; cT < lT.length; cT++) {
          lT[cT].action()
        }
        if (TT)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let cT = 0; cT < this.activeCameras.length; cT++) {
              const TT = this.activeCameras[cT];
              if (TT.update(), 0 !== TT.cameraRigMode)
                for (let kT = 0; kT < TT._rigCameras.length; kT++) TT._rigCameras[kT].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let cT = 0; cT < this.activeCamera._rigCameras.length; cT++) this.activeCamera._rigCameras[cT].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(TT, kT);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const TT = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            lT.h.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let kT = 0; kT < this.customRenderTargets.length; kT++) {
              const cT = this.customRenderTargets[kT],
                lT = cT.activeCamera || this.activeCamera;
              this._renderRenderTarget(cT, lT, TT !== lT, this.dumpNextRenderTargets)
            }
            lT.h.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = TT?.renderPassId ?? 0, this.activeCamera = TT, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let kT = 0, cT = this._beforeClearStage; kT < cT.length; kT++) {
            cT[kT].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let kT = 0, cT = this._gatherRenderTargetsStage; kT < cT.length; kT++) {
            cT[kT].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let kT = 0; kT < this.activeCameras.length; kT++) this._processSubCameras(this.activeCameras[kT], kT > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let cT = 0, lT = this._afterRenderStage; cT < lT.length; cT++) {
          lT[cT].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let TT = 0; TT < this._toBeDisposed.length; TT++) {
            const kT = this._toBeDisposed[TT];
            kT && kT.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let TT = 0; TT < this.materials.length; TT++) this.materials[TT].freeze()
      }
      unfreezeMaterials() {
        for (let TT = 0; TT < this.materials.length; TT++) this.materials[TT].unfreeze()
      }
      dispose() {
        if (this.VkT) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, aT.c)(this.stopAllAnimations)) {
          for (const TT of this._activeAnimatables) TT.onAnimationEndObservable.clear(), TT.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const TT = this._activeRequests.slice();
        for (const KT of TT) KT.abort();
        this._activeRequests.length = 0;
        try {
          this.QJ.notifyObservers(this)
        } catch (MT) {
          kc.e.Error("An error occurred while calling onDisposeObservable!", MT)
        }
        this.detachControl();
        const kT = this._engine.getInputElement?.();
        if (kT)
          for (let KT = 0; KT < this.cameras.length; KT++) this.cameras[KT].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (TT => TT.dispose(!0))), this._disposeList(this.transformNodes, (TT => TT.dispose(!0)));
        const cT = this.cameras;
        this._disposeList(cT), this._disposeList(this.lF), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let lT = this._engine.scenes.indexOf(this);
        if (lT > -1 && this._engine.scenes.splice(lT, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, hT.j)(), DT.d._LastCreatedScene === this) {
          DT.d._LastCreatedScene = null;
          let TT = DT.d.Instances.length - 1;
          for (; TT >= 0;) {
            const kT = DT.d.Instances[TT];
            if (kT.scenes.length > 0) {
              DT.d._LastCreatedScene = kT.scenes[this._engine.scenes.length - 1];
              break
            }
            TT--
          }
        }
        lT = this._engine._virtualScenes.indexOf(this), lT > -1 && this._engine._virtualScenes.splice(lT, 1), this._engine.wipeCaches(!0), this.QJ.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(TT, kT) {
        const cT = TT.slice(0);
        kT = kT ?? (TT => TT.dispose());
        for (const lT of cT) kT(lT);
        TT.length = 0
      }
      get VkT() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let TT = 0; TT < this.meshes.length; TT++) {
          const kT = this.meshes[TT].geometry;
          kT && kT.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const TT of this.textures) {
          TT._buffer && (TT._buffer = null)
        }
      }
      getWorldExtends(TT) {
        const kT = new IT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          cT = new IT.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        TT = TT || (() => !0);
        const lT = this.meshes.filter(TT);
        for (const MT of lT) {
          if (MT.computeWorldMatrix(!0), !MT.kF || 0 === MT.kF.length || MT.infiniteDistance) continue;
          const TT = MT.DH(),
            lT = TT.boundingBox.minimumWorld,
            KT = TT.boundingBox.maximumWorld;
          IT.m.CheckExtends(lT, kT, cT), IT.m.CheckExtends(KT, kT, cT)
        }
        return kT.x === Number.MAX_VALUE ? {
          min: IT.m.Zero(),
          max: IT.m.Zero()
        } : {
          min: kT,
          max: cT
        }
      }
      createPickingRay(TT, kT, cT, lT) {
        throw (0, aT.i)("Ray")
      }
      createPickingRayToRef(TT, kT, cT, lT, MT) {
        throw (0, aT.i)("Ray")
      }
      createPickingRayInCameraSpace(TT, kT, cT) {
        throw (0, aT.i)("Ray")
      }
      createPickingRayInCameraSpaceToRef(TT, kT, cT, lT) {
        throw (0, aT.i)("Ray")
      }
      gC(TT, kT, cT, lT, MT, KT) {
        const OT = (0, aT.i)("Ray", !0);
        return OT && kc.e.Warn(OT), new jT.d
      }
      pickWithBoundingInfo(TT, kT, cT, lT, MT) {
        const KT = (0, aT.i)("Ray", !0);
        return KT && kc.e.Warn(KT), new jT.d
      }
      pickWithRay(TT, kT, cT, lT) {
        throw (0, aT.i)("Ray")
      }
      multiPick(TT, kT, cT, lT, MT) {
        throw (0, aT.i)("Ray")
      }
      multiPickWithRay(TT, kT, cT) {
        throw (0, aT.i)("Ray")
      }
      setPointerOverMesh(TT, kT, cT) {
        this._inputManager.setPointerOverMesh(TT, kT, cT)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const TT of this.geometries) TT._rebuild();
        for (const TT of this.meshes) TT._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const TT of this._components) TT.rebuild();
        for (const TT of this.lF) TT.rebuild();
        if (this.spriteManagers)
          for (const TT of this.spriteManagers) TT.rebuild()
      }
      _rebuildTextures() {
        for (const TT of this.textures) TT._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(TT, kT, cT) {
        if (void 0 === kT) return TT;
        const lT = [];
        for (const MT in TT) {
          const KT = TT[MT];
          xT.b && xT.b.MatchesQuery(KT, kT) && (!cT || cT(KT)) && lT.push(KT)
        }
        return lT
      }
      getMeshesByTags(TT, kT) {
        return this._getByTags(this.meshes, TT, kT)
      }
      getCamerasByTags(TT, kT) {
        return this._getByTags(this.cameras, TT, kT)
      }
      getLightsByTags(TT, kT) {
        return this._getByTags(this.lights, TT, kT)
      }
      getMaterialByTags(TT, kT) {
        return this._getByTags(this.materials, TT, kT).concat(this._getByTags(this.multiMaterials, TT, kT))
      }
      getTransformNodesByTags(TT, kT) {
        return this._getByTags(this.transformNodes, TT, kT)
      }
      setRenderingOrder(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(TT, kT, cT, lT)
      }
      setRenderingAutoClearDepthStencil(TT, kT) {
        let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          lT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(TT, kT, cT, lT)
      }
      getAutoClearDepthStencilSetup(TT) {
        return this._renderingManager.getAutoClearDepthStencilSetup(TT)
      }
      _forceBlockMaterialDirtyMechanism(TT) {
        this._blockMaterialDirtyMechanism = TT
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(TT) {
        this._blockMaterialDirtyMechanism !== TT && (this._blockMaterialDirtyMechanism = TT, TT || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(TT, kT) {
        if (!this._blockMaterialDirtyMechanism)
          for (const cT of this.materials) kT && !kT(cT) || cT.pTT(TT)
      }
      _loadFile(TT, kT, cT, lT, MT, KT, OT) {
        const yT = (0, nT.k)(TT, kT, cT, lT ? this.offlineProvider : void 0, MT, KT, OT);
        return this._activeRequests.push(yT), yT.onCompleteObservable.add((TT => {
          this._activeRequests.splice(this._activeRequests.indexOf(TT), 1)
        })), yT
      }
      async _loadFileAsync(TT, kT, cT, lT, MT) {
        return await new Promise(((KT, OT) => {
          this._loadFile(TT, (TT => {
            KT(TT)
          }), kT, cT, lT, ((TT, kT) => {
            OT(kT)
          }), MT)
        }))
      }
      async _loadDelayedFileAsync(TT, kT, cT) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const lT = `${TT}|${kT?"binary":"string"}`;
        let MT = this._delayedFileRequests.get(lT);
        if (!MT) {
          MT = kT ? this._loadFileAsync(TT, void 0, cT, !0) : this._loadFileAsync(TT, void 0, cT, !1);
          const KT = MT;
          (async () => {
            try {
              await KT
            } catch {}
            this._delayedFileRequests?.delete(lT)
          })(), this._delayedFileRequests.set(lT, MT)
        }
        return await MT
      }
      _requestFile(TT, kT, cT, lT, MT, KT, OT) {
        const yT = (0, nT.u)(TT, kT, cT, lT ? this.offlineProvider : void 0, MT, KT, OT);
        return this._activeRequests.push(yT), yT.onCompleteObservable.add((TT => {
          this._activeRequests.splice(this._activeRequests.indexOf(TT), 1)
        })), yT
      }
      async _requestFileAsync(TT, kT, cT, lT, MT) {
        return await new Promise(((KT, OT) => {
          this._requestFile(TT, (TT => {
            KT(TT)
          }), kT, cT, lT, (TT => {
            OT(TT)
          }), MT)
        }))
      }
      _readFile(TT, kT, cT, lT, MT) {
        const KT = (0, nT.p)(TT, kT, cT, lT, MT);
        return this._activeRequests.push(KT), KT.onCompleteObservable.add((TT => {
          this._activeRequests.splice(this._activeRequests.indexOf(TT), 1)
        })), KT
      }
      async _readFileAsync(TT, kT, cT) {
        return await new Promise(((lT, MT) => {
          this._readFile(TT, (TT => {
            lT(TT)
          }), kT, cT, (TT => {
            MT(TT)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, aT.i)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(TT) {
        return this.setActiveCameraById(TT)
      }
      getMaterialByID(TT) {
        return this.getMaterialById(TT)
      }
      getLastMaterialByID(TT) {
        return this.getLastMaterialById(TT)
      }
      getTextureByUniqueID(TT) {
        return this.getTextureByUniqueId(TT)
      }
      getCameraByID(TT) {
        return this.getCameraById(TT)
      }
      getCameraByUniqueID(TT) {
        return this.getCameraByUniqueId(TT)
      }
      getBoneByID(TT) {
        return this.getBoneById(TT)
      }
      getLightByID(TT) {
        return this.getLightById(TT)
      }
      getLightByUniqueID(TT) {
        return this.getLightByUniqueId(TT)
      }
      getParticleSystemByID(TT) {
        return this.getParticleSystemById(TT)
      }
      getGeometryByID(TT) {
        return this.getGeometryById(TT)
      }
      getMeshByID(TT) {
        return this.getMeshById(TT)
      }
      getMeshByUniqueID(TT) {
        return this.getMeshByUniqueId(TT)
      }
      getLastMeshByID(TT) {
        return this.getLastMeshById(TT)
      }
      getMeshesByID(TT) {
        return this.getMeshesById(TT)
      }
      getTransformNodeByID(TT) {
        return this.getTransformNodeById(TT)
      }
      getTransformNodeByUniqueID(TT) {
        return this.getTransformNodeByUniqueId(TT)
      }
      getTransformNodesByID(TT) {
        return this.getTransformNodesById(TT)
      }
      getNodeByID(TT) {
        return this.getNodeById(TT)
      }
      getLastEntryByID(TT) {
        return this.getLastEntryById(TT)
      }
      getLastSkeletonByID(TT) {
        return this.getLastSkeletonById(TT)
      }
    }
    Oc.FOGMODE_NONE = 0, Oc.FOGMODE_EXP = 1, Oc.FOGMODE_EXP2 = 2, Oc.FOGMODE_LINEAR = 3, Oc.MinDeltaTime = 1, Oc.MaxDeltaTime = 1e3, Oc._OriginalDefaultMaterialFactory = Oc.DefaultMaterialFactory;
    let yc = !1;

    function fc() {
      yc || (yc = !0, (0, cc.g)("BABYLON.Scene", Oc))
    }(sT = Oc.prototype).sortActiveAnimatables ?? (sT.sortActiveAnimatables = (0, aT.f)("Scene", "sortActiveAnimatables")), (Tk = Oc.prototype).beginWeightedAnimation ?? (Tk.beginWeightedAnimation = (0, aT.f)("Scene", "beginWeightedAnimation")), (kk = Oc.prototype).beginAnimation ?? (kk.beginAnimation = (0, aT.f)("Scene", "beginAnimation")), (ck = Oc.prototype).beginHierarchyAnimation ?? (ck.beginHierarchyAnimation = (0, aT.f)("Scene", "beginHierarchyAnimation")), (lk = Oc.prototype).beginDirectAnimation ?? (lk.beginDirectAnimation = (0, aT.f)("Scene", "beginDirectAnimation")), (Mk = Oc.prototype).beginDirectHierarchyAnimation ?? (Mk.beginDirectHierarchyAnimation = (0, aT.f)("Scene", "beginDirectHierarchyAnimation")), (Kk = Oc.prototype).getAnimatableByTarget ?? (Kk.getAnimatableByTarget = (0, aT.f)("Scene", "getAnimatableByTarget")), (Ok = Oc.prototype).getAllAnimatablesByTarget ?? (Ok.getAllAnimatablesByTarget = (0, aT.f)("Scene", "getAllAnimatablesByTarget")), (yk = Oc.prototype).stopAllAnimations ?? (yk.stopAllAnimations = (0, aT.f)("Scene", "stopAllAnimations")), (fk = Oc.prototype).getSoundByName ?? (fk.getSoundByName = (0, aT.f)("Scene", "getSoundByName")), (xk = Oc.prototype).createOrUpdateSelectionOctree ?? (xk.createOrUpdateSelectionOctree = (0, aT.f)("Scene", "createOrUpdateSelectionOctree")), (Ik = Oc.prototype).createDefaultLight ?? (Ik.createDefaultLight = (0, aT.f)("Scene", "createDefaultLight")), (Ak = Oc.prototype).createDefaultCamera ?? (Ak.createDefaultCamera = (0, aT.f)("Scene", "createDefaultCamera")), (Ck = Oc.prototype).createDefaultCameraOrLight ?? (Ck.createDefaultCameraOrLight = (0, aT.f)("Scene", "createDefaultCameraOrLight")), (jk = Oc.prototype).createDefaultSkybox ?? (jk.createDefaultSkybox = (0, aT.f)("Scene", "createDefaultSkybox")), (vk = Oc.prototype).createDefaultEnvironment ?? (vk.createDefaultEnvironment = (0, aT.f)("Scene", "createDefaultEnvironment")), (tk = Oc.prototype).createDefaultVRExperience ?? (tk.createDefaultVRExperience = (0, aT.f)("Scene", "createDefaultVRExperience")), (hk = Oc.prototype).createDefaultXRExperienceAsync ?? (hk.createDefaultXRExperienceAsync = (0, aT.f)("Scene", "createDefaultXRExperienceAsync")), (Nk = Oc.prototype).getGlowLayerByName ?? (Nk.getGlowLayerByName = (0, aT.f)("Scene", "getGlowLayerByName")), (Qk = Oc.prototype).getHighlightLayerByName ?? (Qk.getHighlightLayerByName = (0, aT.f)("Scene", "getHighlightLayerByName")), (Sk = Oc.prototype).getSelectionOutlineLayerByName ?? (Sk.getSelectionOutlineLayerByName = (0, aT.f)("Scene", "getSelectionOutlineLayerByName")), (Dk = Oc.prototype).removeLensFlareSystem ?? (Dk.removeLensFlareSystem = (0, aT.f)("Scene", "removeLensFlareSystem")), (ak = Oc.prototype).addLensFlareSystem ?? (ak.addLensFlareSystem = (0, aT.f)("Scene", "addLensFlareSystem")), (Fk = Oc.prototype).getLensFlareSystemByName ?? (Fk.getLensFlareSystemByName = (0, aT.f)("Scene", "getLensFlareSystemByName")), (rk = Oc.prototype).getLensFlareSystemByID ?? (rk.getLensFlareSystemByID = (0, aT.f)("Scene", "getLensFlareSystemByID")), (Pk = Oc.prototype).getLensFlareSystemById ?? (Pk.getLensFlareSystemById = (0, aT.f)("Scene", "getLensFlareSystemById")), (wk = Oc.prototype).getPhysicsEngine ?? (wk.getPhysicsEngine = (0, aT.f)("Scene", "getPhysicsEngine")), (mk = Oc.prototype).enablePhysics ?? (mk.enablePhysics = (0, aT.f)("Scene", "enablePhysics")), (bk = Oc.prototype).disablePhysicsEngine ?? (bk.disablePhysicsEngine = (0, aT.f)("Scene", "disablePhysicsEngine")), (zk = Oc.prototype).isPhysicsEnabled ?? (zk.isPhysicsEnabled = (0, aT.f)("Scene", "isPhysicsEnabled")), (Jk = Oc.prototype).deleteCompoundImpostor ?? (Jk.deleteCompoundImpostor = (0, aT.f)("Scene", "deleteCompoundImpostor")), (Hk = Oc.prototype).removeReflectionProbe ?? (Hk.removeReflectionProbe = (0, aT.f)("Scene", "removeReflectionProbe")), (ek = Oc.prototype).addReflectionProbe ?? (ek.addReflectionProbe = (0, aT.f)("Scene", "addReflectionProbe")), (Gk = Oc.prototype).getBoundingBoxRenderer ?? (Gk.getBoundingBoxRenderer = (0, aT.f)("Scene", "getBoundingBoxRenderer")), (Vk = Oc.prototype).enableDepthRenderer ?? (Vk.enableDepthRenderer = (0, aT.f)("Scene", "enableDepthRenderer")), (Ek = Oc.prototype).disableDepthRenderer ?? (Ek.disableDepthRenderer = (0, aT.f)("Scene", "disableDepthRenderer")), (Zk = Oc.prototype).enableFluidRenderer ?? (Zk.enableFluidRenderer = (0, aT.f)("Scene", "enableFluidRenderer")), (uk = Oc.prototype).disableFluidRenderer ?? (uk.disableFluidRenderer = (0, aT.f)("Scene", "disableFluidRenderer")), (Xk = Oc.prototype).enableGeometryBufferRenderer ?? (Xk.enableGeometryBufferRenderer = (0, aT.f)("Scene", "enableGeometryBufferRenderer")), (dk = Oc.prototype).disableGeometryBufferRenderer ?? (dk.disableGeometryBufferRenderer = (0, aT.f)("Scene", "disableGeometryBufferRenderer")), (Lk = Oc.prototype).enableIblCdfGenerator ?? (Lk.enableIblCdfGenerator = (0, aT.f)("Scene", "enableIblCdfGenerator")), (Rk = Oc.prototype).disableIblCdfGenerator ?? (Rk.disableIblCdfGenerator = (0, aT.f)("Scene", "disableIblCdfGenerator")), (gk = Oc.prototype).getOutlineRenderer ?? (gk.getOutlineRenderer = (0, aT.f)("Scene", "getOutlineRenderer")), (Uk = Oc.prototype).enablePrePassRenderer ?? (Uk.enablePrePassRenderer = (0, aT.f)("Scene", "enablePrePassRenderer")), (Yk = Oc.prototype).disablePrePassRenderer ?? (Yk.disablePrePassRenderer = (0, aT.f)("Scene", "disablePrePassRenderer")), (Bk = Oc.prototype).enableSubSurfaceForPrePass ?? (Bk.enableSubSurfaceForPrePass = (0, aT.f)("Scene", "enableSubSurfaceForPrePass")), (Wk = Oc.prototype).disableSubSurfaceForPrePass ?? (Wk.disableSubSurfaceForPrePass = (0, aT.f)("Scene", "disableSubSurfaceForPrePass")), (nk = Oc.prototype).pickSprite ?? (nk.pickSprite = (0, aT.f)("Scene", "pickSprite")), (pk = Oc.prototype).pickSpriteWithRay ?? (pk.pickSpriteWithRay = (0, aT.f)("Scene", "pickSpriteWithRay")), (ik = Oc.prototype).multiPickSprite ?? (ik.multiPickSprite = (0, aT.f)("Scene", "multiPickSprite")), (qk = Oc.prototype).multiPickSpriteWithRay ?? (qk.multiPickSpriteWithRay = (0, aT.f)("Scene", "multiPickSpriteWithRay")), (sk = Oc.prototype).setPointerOverSprite ?? (sk.setPointerOverSprite = (0, aT.f)("Scene", "setPointerOverSprite")), (Tc = Oc.prototype).getPointerOverSprite ?? (Tc.getPointerOverSprite = (0, aT.f)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(Oc.prototype, "mainSoundTrack") || Object.defineProperty(Oc.prototype, "mainSoundTrack", (0, aT.d)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(Oc.prototype, "soundTracks") || Object.defineProperty(Oc.prototype, "soundTracks", (0, aT.d)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(Oc.prototype, "audioEnabled") || Object.defineProperty(Oc.prototype, "audioEnabled", (0, aT.d)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(Oc.prototype, "headphone") || Object.defineProperty(Oc.prototype, "headphone", (0, aT.d)("Scene", "headphone")), Object.getOwnPropertyDescriptor(Oc.prototype, "audioListenerPositionProvider") || Object.defineProperty(Oc.prototype, "audioListenerPositionProvider", (0, aT.d)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(Oc.prototype, "audioListenerRotationProvider") || Object.defineProperty(Oc.prototype, "audioListenerRotationProvider", (0, aT.d)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(Oc.prototype, "audioPositioningRefreshRate") || Object.defineProperty(Oc.prototype, "audioPositioningRefreshRate", (0, aT.d)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(Oc.prototype, "selectionOctree") || Object.defineProperty(Oc.prototype, "selectionOctree", (0, aT.d)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(Oc.prototype, "debugLayer") || Object.defineProperty(Oc.prototype, "debugLayer", (0, aT.d)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(Oc.prototype, "gamepadManager") || Object.defineProperty(Oc.prototype, "gamepadManager", (0, aT.d)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(Oc.prototype, "simplificationQueue") || Object.defineProperty(Oc.prototype, "simplificationQueue", (0, aT.d)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(Oc.prototype, "onBeforePhysicsObservable") || Object.defineProperty(Oc.prototype, "onBeforePhysicsObservable", (0, aT.d)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(Oc.prototype, "onAfterPhysicsObservable") || Object.defineProperty(Oc.prototype, "onAfterPhysicsObservable", (0, aT.d)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(Oc.prototype, "reflectionProbes") || Object.defineProperty(Oc.prototype, "reflectionProbes", (0, aT.d)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(Oc.prototype, "forceShowBoundingBoxes") || Object.defineProperty(Oc.prototype, "forceShowBoundingBoxes", (0, aT.d)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(Oc.prototype, "depthPeelingRenderer") || Object.defineProperty(Oc.prototype, "depthPeelingRenderer", (0, aT.d)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(Oc.prototype, "useOrderIndependentTransparency") || Object.defineProperty(Oc.prototype, "useOrderIndependentTransparency", (0, aT.d)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(Oc.prototype, "fluidRenderer") || Object.defineProperty(Oc.prototype, "fluidRenderer", (0, aT.d)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(Oc.prototype, "geometryBufferRenderer") || Object.defineProperty(Oc.prototype, "geometryBufferRenderer", (0, aT.d)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(Oc.prototype, "iblCdfGenerator") || Object.defineProperty(Oc.prototype, "iblCdfGenerator", (0, aT.d)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(Oc.prototype, "prePassRenderer") || Object.defineProperty(Oc.prototype, "prePassRenderer", (0, aT.d)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(Oc.prototype, "subSurfaceConfiguration") || Object.defineProperty(Oc.prototype, "subSurfaceConfiguration", (0, aT.d)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(Oc.prototype, "spriteManagers") || Object.defineProperty(Oc.prototype, "spriteManagers", (0, aT.d)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(Oc.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(Oc.prototype, "onBeforeSpritesRenderingObservable", (0, aT.d)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(Oc.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(Oc.prototype, "onAfterSpritesRenderingObservable", (0, aT.d)("Scene", "onAfterSpritesRenderingObservable"))
  },
  39809: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT,
      g: () => MT
    });
    class lT {}
    lT.NAME_EFFECTLAYER = "EffectLayer", lT.NAME_LAYER = "Layer", lT.NAME_LENSFLARESYSTEM = "LensFlareSystem", lT.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", lT.NAME_PARTICLESYSTEM = "ParticleSystem", lT.NAME_GAMEPAD = "Gamepad", lT.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", lT.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", lT.NAME_PREPASSRENDERER = "PrePassRenderer", lT.NAME_DEPTHRENDERER = "DepthRenderer", lT.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", lT.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", lT.NAME_SPRITE = "Sprite", lT.NAME_SUBSURFACE = "SubSurface", lT.NAME_OUTLINERENDERER = "Outline", lT.NAME_PROCEDURALTEXTURE = "ProceduralTexture", lT.NAME_SHADOWGENERATOR = "ShadowGenerator", lT.NAME_OCTREE = "ecT", lT.NAME_PHYSICSENGINE = "PhysicsEngine", lT.NAME_AUDIO = "Audio", lT.NAME_FLUIDRENDERER = "FluidRenderer", lT.NAME_IBLCDFGENERATOR = "iblCDFGenerator", lT.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", lT.STEP_ISREADYFORMESH_EFFECTLAYER = 0, lT.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, lT.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, lT.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, lT.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, lT.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, lT.STEP_BEFORECAMERADRAW_PREPASS = 0, lT.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, lT.STEP_BEFORECAMERADRAW_LAYER = 2, lT.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, lT.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, lT.STEP_BEFORERENDERINGMESH_PREPASS = 0, lT.STEP_BEFORERENDERINGMESH_OUTLINE = 1, lT.STEP_AFTERRENDERINGMESH_PREPASS = 0, lT.STEP_AFTERRENDERINGMESH_OUTLINE = 1, lT.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, lT.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, lT.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, lT.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, lT.STEP_BEFORECLEAR_PREPASS = 1, lT.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, lT.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, lT.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, lT.STEP_AFTERCAMERADRAW_PREPASS = 0, lT.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, lT.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, lT.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, lT.STEP_AFTERCAMERADRAW_LAYER = 4, lT.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, lT.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, lT.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, lT.STEP_AFTERRENDER_AUDIO = 0, lT.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, lT.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, lT.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, lT.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, lT.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, lT.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, lT.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, lT.STEP_POINTERMOVE_SPRITE = 0, lT.STEP_POINTERDOWN_SPRITE = 0, lT.STEP_POINTERUP_SPRITE = 0;
    class MT extends Array {
      constructor(TT) {
        super(...TT)
      }
      static Create() {
        return Object.create(MT.prototype)
      }
      registerStep(TT, kT, cT) {
        let lT, MT = 0;
        for (; MT < this.length; MT++) {
          if (lT = this[MT].index, TT < lT) break
        }
        this.splice(MT, 0, {
          index: TT,
          component: kT,
          action: cT.bind(kT)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  39620: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT,
      d: () => yT,
      e: () => lT,
      h: () => MT,
      l: () => KT
    });

    function lT(TT, kT, cT, lT, MT, KT) {
      function OT(TT) {
        if (void 0 !== TT && "function" !== typeof TT) throw new TypeError("Function expected");
        return TT
      }
      for (var yT, fT = lT.kind, xT = "getter" === fT ? "get" : "setter" === fT ? "set" : "value", IT = !kT && TT ? lT.static ? TT : TT.prototype : null, AT = kT || (IT ? Object.getOwnPropertyDescriptor(IT, lT.name) : {}), CT = !1, jT = cT.length - 1; jT >= 0; jT--) {
        var vT = {};
        for (var tT in lT) vT[tT] = "access" === tT ? {} : lT[tT];
        for (var tT in lT.access) vT.access[tT] = lT.access[tT];
        vT.addInitializer = function(TT) {
          if (CT) throw new TypeError("Cannot add initializers after decoration has completed");
          KT.push(OT(TT || null))
        };
        var hT = (0, cT[jT])("accessor" === fT ? {
          get: AT.get,
          set: AT.set
        } : AT[xT], vT);
        if ("accessor" === fT) {
          if (void 0 === hT) continue;
          if (null === hT || "object" !== typeof hT) throw new TypeError("Object expected");
          (yT = OT(hT.get)) && (AT.get = yT), (yT = OT(hT.set)) && (AT.set = yT), (yT = OT(hT.init)) && MT.unshift(yT)
        } else(yT = OT(hT)) && ("field" === fT ? MT.unshift(yT) : AT[xT] = yT)
      }
      IT && Object.defineProperty(IT, lT.name, AT), CT = !0
    }

    function MT(TT, kT, cT) {
      for (var lT = arguments.length > 2, MT = 0; MT < kT.length; MT++) cT = lT ? kT[MT].call(TT, cT) : kT[MT].call(TT);
      return lT ? cT : void 0
    }

    function KT(TT, kT, cT) {
      return "symbol" === typeof kT && (kT = kT.description ? "[".concat(kT.description, "]") : ""), Object.defineProperty(TT, "name", {
        configurable: !0,
        value: cT ? "".concat(cT, " ", kT) : kT
      })
    }
    Object.create;
    Object.create;

    function OT(TT, kT, cT, lT) {
      if ("a" === cT && !lT) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof kT ? TT !== kT || !lT : !kT.has(TT)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === cT ? lT : "a" === cT ? lT.call(TT) : lT ? lT.value : kT.get(TT)
    }

    function yT(TT, kT, cT, lT, MT) {
      if ("m" === lT) throw new TypeError("Private method is not writable");
      if ("a" === lT && !MT) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof kT ? TT !== kT || !MT : !kT.has(TT)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === lT ? MT.call(TT, cT) : MT ? MT.value = cT : kT.set(TT, cT), cT
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);