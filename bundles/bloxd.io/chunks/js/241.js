export const id = 241;
export const ids = [241];
export const modules = {
  38923: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => XT,
      e: () => KT,
      h: () => FT,
      i: () => BT
    });
    var iT = IT(38691),
      zT = IT(37660),
      kT = IT(38851),
      WT = IT(38740);
    class XT {
      get IIT() {
        return this._isDisposed
      }
      constructor(TT, oT, IT) {
        let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          kT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          XT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          BT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          FT = arguments.length > 7 ? arguments[7] : void 0,
          ST = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, WT.b)(), TT && TT.pC ? this._engine = TT.pC().Zc() : this._engine = TT, this._updatable = IT, this._instanced = XT, this._divisor = FT || 1, this._label = ST, oT instanceof iT.d ? (this._data = null, this._buffer = oT) : (this._data = oT, this._buffer = null), this.byteStride = BT ? zT : zT * Float32Array.BYTES_PER_ELEMENT, kT || this.create()
      }
      createVertexBuffer(TT, oT, IT, iT, zT) {
        let kT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          WT = arguments.length > 6 ? arguments[6] : void 0;
        const XT = kT ? oT : oT * Float32Array.BYTES_PER_ELEMENT,
          FT = iT ? kT ? iT : iT * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new BT(this._engine, this, TT, this._updatable, !0, FT, void 0 === zT ? this._instanced : zT, XT, IT, void 0, void 0, !0, this._divisor || WT)
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
          if (this._buffer.fD > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.fD, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.fD, void 0, this._label));
          zT.d.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(TT) {
        this.create(TT)
      }
      updateDirectly(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, TT, iT ? oT : oT * Float32Array.BYTES_PER_ELEMENT, IT ? IT * this.byteStride : void 0), this._data = 0 === oT && void 0 === IT ? TT : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class BT {
      get IIT() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(TT) {
        const oT = 0 != TT;
        this._instanceDivisor = TT, oT !== this._instanced && (this._instanced = oT, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const TT = this.getData();
        return TT ? Array.isArray(TT) ? TT.length / (this.byteStride / 4) - this.byteOffset / 4 : (TT.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(TT, oT, IT, iT, zT, WT, DT, LT, xT, cT) {
        let KT, MT = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          rT = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          AT = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          gT = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = TT, "object" === typeof iT && null !== iT ? (KT = iT.updatable ?? !1, zT = iT.postponeInternalCreation, WT = iT.stride, DT = iT.instanced, LT = iT.offset, xT = iT.size, cT = iT.type, MT = iT.normalized ?? !1, rT = iT.useBytes ?? !1, AT = iT.divisor ?? 1, gT = iT.takeBufferOwnership ?? !1, this._label = iT.label) : KT = !!iT, oT instanceof XT ? (this._buffer = oT, this._ownsBuffer = gT) : (this._buffer = new XT(TT, oT, KT, WT, zT, DT, rT, AT, this._label), this._ownsBuffer = !0), this.uniqueId = BT._Counter++, this._kind = IT, void 0 === cT) {
          const TT = this.getData();
          this.type = TT ? ST(TT) : BT.FLOAT
        } else this.type = cT;
        const hT = (0, kT.n)(this.type);
        rT ? (this._size = xT || (WT ? WT / hT : FT(IT)), this.byteStride = WT || this._buffer.byteStride || this._size * hT, this.byteOffset = LT || 0) : (this._size = xT || WT || FT(IT), this.byteStride = WT ? WT * hT : this._buffer.byteStride || this._size * hT, this.byteOffset = (LT || 0) * hT), this.normalized = MT, this._instanced = void 0 !== DT && DT, this._instanceDivisor = DT ? AT : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(TT) {
        switch (TT) {
          case BT.BYTE:
            return 0;
          case BT.UNSIGNED_BYTE:
            return 1;
          case BT.SHORT:
            return 2;
          case BT.UNSIGNED_SHORT:
            return 3;
          case BT.INT:
            return 4;
          case BT.UNSIGNED_INT:
            return 5;
          case BT.FLOAT:
            return 6;
          case BT.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${TT}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (BT._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(TT, oT) {
        const IT = this.getData();
        return IT ? (0, kT.m)(IT, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, TT, oT) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, kT.n)(this.type)
      }
      toT() {
        return this.byteOffset / (0, kT.n)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, kT.n)(this.type) : this._size
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
      updateDirectly(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(TT, oT, void 0, IT), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(TT, oT) {
        (0, kT.g)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, TT, this.normalized, ((TT, IT) => {
          for (let iT = 0; iT < this._size; iT++) oT(TT[iT], IT + iT)
        }))
      }
      _alignBuffer() {}
    }

    function FT(TT) {
      switch (TT) {
        case BT.UVKind:
        case BT.UV2Kind:
        case BT.UV3Kind:
        case BT.UV4Kind:
        case BT.UV5Kind:
        case BT.UV6Kind:
          return 2;
        case BT.NormalKind:
        case BT.PositionKind:
          return 3;
        case BT.ColorKind:
        case BT.ColorInstanceKind:
        case BT.MatricesIndicesKind:
        case BT.MatricesIndicesExtraKind:
        case BT.MatricesWeightsKind:
        case BT.MatricesWeightsExtraKind:
        case BT.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + TT + "'")
      }
    }

    function ST(TT) {
      return TT instanceof Int8Array ? BT.BYTE : TT instanceof Uint8Array ? BT.UNSIGNED_BYTE : TT instanceof Int16Array ? BT.SHORT : TT instanceof Uint16Array ? BT.UNSIGNED_SHORT : TT instanceof Int32Array ? BT.INT : TT instanceof Uint32Array ? BT.UNSIGNED_INT : BT.FLOAT
    }

    function DT(TT) {
      return (0, kT.n)(TT)
    }

    function LT(TT, oT, IT, iT, zT, WT, XT, BT) {
      (0, kT.g)(TT, oT, IT, iT, zT, WT, XT, ((TT, oT) => {
        for (let IT = 0; IT < iT; IT++) BT(TT[IT], oT + IT)
      }))
    }

    function xT(TT, oT, IT, iT, zT, WT, XT, BT) {
      return (0, kT.m)(TT, oT, IT, iT, zT, WT, XT, BT)
    }
    BT._Counter = 0, BT.BYTE = 5120, BT.UNSIGNED_BYTE = 5121, BT.SHORT = 5122, BT.UNSIGNED_SHORT = 5123, BT.INT = 5124, BT.UNSIGNED_INT = 5125, BT.FLOAT = 5126, BT.HALF_FLOAT = 5131, BT.PositionKind = "position", BT.NormalKind = "normal", BT.TangentKind = "tangent", BT.UVKind = "uv", BT.UV2Kind = "uv2", BT.UV3Kind = "uv3", BT.UV4Kind = "uv4", BT.UV5Kind = "uv5", BT.UV6Kind = "uv6", BT.ColorKind = "color", BT.ColorInstanceKind = "instanceColor", BT.MatricesIndicesKind = "matricesIndices", BT.MatricesWeightsKind = "matricesWeights", BT.MatricesIndicesExtraKind = "matricesIndicesExtra", BT.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let cT = !1;

    function KT() {
      cT || (cT = !0, BT.DeduceStride = FT, BT.GetDataType = ST, BT.GetTypeByteLength = DT, BT.ForEach = LT, BT.GetFloatData = xT)
    }
  },
  38691: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT
    });
    class iT {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.fD = 0, this.is32Bits = !1, this.uniqueId = iT._Counter++
      }
    }
    iT._Counter = 0
  },
  38918: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT
    });
    var iT = IT(36118),
      zT = IT(38923);
    class kT {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || oT && !this.pickedMesh.isVerticesDataPresent(zT.i.NormalKind)) return null;
        let IT, kT = this.pickedMesh.hWT();
        0 === kT?.length && (kT = null);
        const WT = iT.i.sc[0],
          XT = iT.i.sc[1],
          BT = iT.i.sc[2];
        if (oT) {
          const TT = this.pickedMesh.getVerticesData(zT.i.NormalKind);
          let oT = kT ? iT.m.FromArrayToRef(TT, 3 * kT[3 * this.faceId], WT) : WT.S_(TT[3 * this.faceId * 3], TT[3 * this.faceId * 3 + 1], TT[3 * this.faceId * 3 + 2]),
            FT = kT ? iT.m.FromArrayToRef(TT, 3 * kT[3 * this.faceId + 1], XT) : XT.S_(TT[3 * (3 * this.faceId + 1)], TT[3 * (3 * this.faceId + 1) + 1], TT[3 * (3 * this.faceId + 1) + 2]),
            ST = kT ? iT.m.FromArrayToRef(TT, 3 * kT[3 * this.faceId + 2], BT) : BT.S_(TT[3 * (3 * this.faceId + 2)], TT[3 * (3 * this.faceId + 2) + 1], TT[3 * (3 * this.faceId + 2) + 2]);
          oT = oT.scale(this.bu), FT = FT.scale(this.bv), ST = ST.scale(1 - this.bu - this.bv), IT = new iT.m(oT.x + FT.x + ST.x, oT.y + FT.y + ST.y, oT.z + FT.z + ST.z)
        } else {
          const TT = this.pickedMesh.getVerticesData(zT.i.PositionKind),
            oT = kT ? iT.m.FromArrayToRef(TT, 3 * kT[3 * this.faceId], WT) : WT.S_(TT[3 * this.faceId * 3], TT[3 * this.faceId * 3 + 1], TT[3 * this.faceId * 3 + 2]),
            FT = kT ? iT.m.FromArrayToRef(TT, 3 * kT[3 * this.faceId + 1], XT) : XT.S_(TT[3 * (3 * this.faceId + 1)], TT[3 * (3 * this.faceId + 1) + 1], TT[3 * (3 * this.faceId + 1) + 2]),
            ST = kT ? iT.m.FromArrayToRef(TT, 3 * kT[3 * this.faceId + 2], BT) : BT.S_(TT[3 * (3 * this.faceId + 2)], TT[3 * (3 * this.faceId + 2) + 1], TT[3 * (3 * this.faceId + 2) + 2]),
            DT = oT.subtract(FT),
            LT = ST.subtract(FT);
          IT = iT.m.Cross(DT, LT)
        }
        const FT = (TT, oT) => {
          if (-1 !== this.thinInstanceIndex) {
            const IT = TT._thinInstanceDataStorage.matrixData,
              zT = this.thinInstanceIndex << 4;
            if (IT && IT.length > zT) {
              const TT = iT.i.Matrix[0];
              iT.b.FromArrayToRef(IT, zT, TT), iT.m.TransformNormalToRef(oT, TT, oT)
            }
          }
          let IT = TT.getWorldMatrix();
          TT.nonUniformScaling && (iT.i.Matrix[0].SIT(IT), IT = iT.i.Matrix[0], IT.setTranslationFromFloats(0, 0, 0), IT.invert(), IT.transposeToRef(iT.i.Matrix[1]), IT = iT.i.Matrix[1]), iT.m.TransformNormalToRef(oT, IT, oT)
        };
        if (TT && FT(this.pickedMesh, IT), this.ray) {
          const oT = iT.i.sc[0].SIT(IT);
          TT || FT(this.pickedMesh, oT), iT.m.Dot(oT, this.ray.direction) > 0 && IT.negateInPlace()
        }
        return IT.normalize(), IT
      }
      getTextureCoordinates() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zT.i.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(TT)) return null;
        const oT = this.pickedMesh.hWT();
        if (!oT) return null;
        const IT = this.pickedMesh.getVerticesData(TT);
        if (!IT) return null;
        let kT = iT.j.FromArray(IT, 2 * oT[3 * this.faceId]),
          WT = iT.j.FromArray(IT, 2 * oT[3 * this.faceId + 1]),
          XT = iT.j.FromArray(IT, 2 * oT[3 * this.faceId + 2]);
        return kT = kT.scale(this.bu), WT = WT.scale(this.bv), XT = XT.scale(1 - this.bu - this.bv), new iT.j(kT.x + WT.x + XT.x, kT.y + WT.y + XT.y)
      }
    }
  },
  38740: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => kT
    });
    var iT = IT(38607);
    let zT = !1;

    function kT() {
      zT || (zT = !0, iT.ThinEngine.prototype.updateDynamicIndexBuffer = function(TT, oT) {
        let IT;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(TT), IT = TT.is32Bits ? oT instanceof Uint32Array ? oT : new Uint32Array(oT) : oT instanceof Uint16Array ? oT : new Uint16Array(oT), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, IT, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, iT.ThinEngine.prototype.updateDynamicVertexBuffer = function(TT, oT, IT, iT) {
        this.bindArrayBuffer(TT), void 0 === IT && (IT = 0);
        const zT = oT.byteLength || oT.length;
        void 0 === iT || iT >= zT && 0 === IT ? oT instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, IT, new Float32Array(oT)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, IT, oT) : oT instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, IT, new Float32Array(oT).subarray(0, iT / 4)) : (oT = ArrayBuffer.isView(oT) ? new Uint8Array(oT.buffer, oT.byteOffset, iT) : new Uint8Array(oT, 0, iT), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, IT, oT)), this._resetVertexBufferBinding()
      })
    }
  },
  38700: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT
    });
    class iT {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          oT = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = oT, !TT && (TT = oT.createTexture(), !TT)) throw new Error("Unable to create webGL texture");
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
  38659: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => AT
    });
    var iT = IT(36149),
      zT = IT(38609),
      kT = IT(36146),
      WT = IT(37660),
      XT = IT(36137),
      BT = IT(38667);
    class FT {
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
    class ST {
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
        const oT = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = oT ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = oT ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = oT ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = oT ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = oT ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = oT ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = oT ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = oT ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = oT ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = oT ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = oT ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = oT ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? TT.enable(TT.STENCIL_TEST) : TT.disable(TT.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (TT.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (TT.stencilFuncSeparate(TT.FRONT, this.func, this.funcRef, this.funcMask), TT.stencilFuncSeparate(TT.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (TT.stencilOpSeparate(TT.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), TT.stencilOpSeparate(TT.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class DT {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = DT.ALWAYS, this.opStencilFail = DT.KEEP, this.opDepthFail = DT.KEEP, this.opStencilDepthPass = DT.REPLACE, this.backFunc = DT.ALWAYS, this.backOpStencilFail = DT.KEEP, this.backOpDepthFail = DT.KEEP, this.backOpStencilDepthPass = DT.REPLACE
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
    DT.ALWAYS = 519, DT.KEEP = 7680, DT.REPLACE = 7681;
    var LT = IT(38673),
      xT = IT(38643),
      cT = IT(38594),
      KT = IT(38626),
      MT = IT(38635);

    function rT(TT, oT) {
      if (oT) {
        const {
          requestAnimationFrame: IT
        } = oT;
        if ("function" === typeof IT) return IT(TT)
      }
      if ((0, KT.k)()) {
        const {
          requestAnimationFrame: IT
        } = oT || window;
        if ("function" === typeof IT) return IT(TT)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(TT);
      return setTimeout(TT, 16)
    }
    class AT {
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
      get lIT() {
        return this._useReverseDepthBuffer
      }
      set lIT(TT) {
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
        if (TT) return this.isNDCHalfZRange ? TT.IS_NDC_HALF_ZRANGE = "" : delete TT.IS_NDC_HALF_ZRANGE, this.lIT ? TT.USE_REVERSE_DEPTHBUFFER = "" : delete TT.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? TT.USE_EXACT_SRGB_CONVERSIONS = "" : delete TT.USE_EXACT_SRGB_CONVERSIONS);
        {
          let TT = "";
          return this.isNDCHalfZRange && (TT += "#define IS_NDC_HALF_ZRANGE"), this.lIT && (TT && (TT += "\n"), TT += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (TT && (TT += "\n"), TT += "#define USE_EXACT_SRGB_CONVERSIONS"), TT
        }
      }
      _rebuildInternalTextures() {
        const TT = this._internalTexturesCache.slice();
        for (const oT of TT) oT._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const TT = this._renderTargetWrapperCache.slice();
        for (const oT of TT) oT.textures?.some((TT => 15 === TT.source)) || oT._rebuild()
      }
      _rebuildEffects() {
        for (const TT in this._compiledEffects) {
          const oT = this._compiledEffects[TT];
          oT._pipelineContext = null, oT._prepareEffect()
        }
        zT.c.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        WT.d.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(TT) {
        setTimeout((() => {
          this._clearEmptyResources();
          const oT = this._depthCullingState.depthTest,
            IT = this._depthCullingState.depthFunc,
            iT = this._depthCullingState.depthMask,
            zT = this._stencilState.stencilTest;
          TT(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = oT, this._depthCullingState.depthFunc = IT, this._depthCullingState.depthMask = iT, this._stencilState.stencilTest = zT, this._flagContextRestored()
        }), 0)
      }
      get IIT() {
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
            oT = [TT, TT, TT, TT, TT, TT];
          this._emptyCubeTexture = this.createRawCubeTexture(oT, 1, 5, 0, !1, !1, 1)
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
        const oT = this._activeRenderLoops.indexOf(TT);
        oT >= 0 && (this._activeRenderLoops.splice(oT, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: TT
            } = this.customAnimationFrameRequester;
            TT && TT(this.customAnimationFrameRequester.tc), delete this.customAnimationFrameRequester.tc
          }
        } else if (0 !== this._frameHandler) {
          const TT = this._frameHandler;
          if (this._frameHandler = 0, (0, KT.k)()) {
            const {
              cancelAnimationFrame: oT
            } = this.getHostWindow() || window;
            if ("function" === typeof oT) return oT(TT)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(TT);
          return clearTimeout(TT)
        }
      }
      xR() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      gR() {
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
        const oT = TT - this._lastFrameTime;
        return this._lastFrameTime = TT, this._renderAccumulator += oT, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(TT) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(TT)) {
          let TT = !0;
          (this.IIT || !this.renderEvenInBackground && this._windowIsBackground) && (TT = !1), TT && (this.xR(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.gR())
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
      _queueNewFrame(TT, oT) {
        return rT(TT, oT)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.tc = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.tc) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
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
        this._depthCullingState.zOffset = this.lIT ? -TT : TT
      }
      getZOffset() {
        const TT = this._depthCullingState.zOffset;
        return this.lIT ? -TT : TT
      }
      setZOffsetUnits(TT) {
        this._depthCullingState.zOffsetUnits = this.lIT ? -TT : TT
      }
      getZOffsetUnits() {
        const TT = this._depthCullingState.zOffsetUnits;
        return this.lIT ? -TT : TT
      }
      getHostWindow() {
        return (0, KT.k)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
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
        const oT = this._renderTargetWrapperCache.indexOf(TT); - 1 !== oT && this._renderTargetWrapperCache.splice(oT, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(TT, oT, IT) {
        const iT = oT || this.getRenderWidth(),
          zT = IT || this.getRenderHeight(),
          kT = TT.x || 0,
          WT = TT.y || 0;
        this._cachedViewport = TT, this._viewport(kT * iT, WT * zT, iT * TT.width, zT * TT.height)
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
      _createTextureBase(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          XT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          BT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          FT = arguments.length > 7 ? arguments[7] : void 0,
          ST = arguments.length > 8 ? arguments[8] : void 0,
          DT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          LT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          xT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          KT = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          MT = arguments.length > 13 ? arguments[13] : void 0,
          rT = arguments.length > 14 ? arguments[14] : void 0,
          gT = arguments.length > 15 ? arguments[15] : void 0;
        const hT = "data:" === (TT = TT || "").substring(0, 5),
          wT = "blob:" === TT.substring(0, 5),
          mT = hT && -1 !== TT.indexOf(";base64,"),
          eT = LT || new cT.e(this, 1);
        eT !== LT && (eT.label = TT.substring(0, 60));
        const RT = TT;
        !this._transformTextureUrl || mT || LT || DT || (TT = this._transformTextureUrl(TT)), RT !== TT && (eT._originalUrl = RT);
        const uT = TT.lastIndexOf(".");
        let vT = KT || (uT > -1 ? TT.substring(uT).toLowerCase() : "");
        vT.indexOf("?") > -1 && (vT = vT.split("?")[0]);
        const ET = AT.GetCompatibleTextureLoader(vT, MT);
        iT && iT.addPendingData(eT), eT.url = TT, eT.generateMipMaps = !oT, eT.samplingMode = zT, eT.invertY = IT, eT._useSRGBBuffer = this._getUseSRGBBuffer(!!gT, oT), this._doNotHandleContextLost || (eT._buffer = DT);
        let fT = null;
        XT && !LT && (fT = eT.onLoadedObservable.add(XT)), LT || this._internalTexturesCache.push(eT);
        const CT = (IT, LT) => {
          iT && iT.removePendingData(eT), TT === RT ? (fT && eT.onLoadedObservable.remove(fT), kT.d.UseFallbackTexture && TT !== kT.d.FallbackTexture && this._createTextureBase(kT.d.FallbackTexture, oT, eT.invertY, iT, zT, null, BT, FT, ST, DT, eT), IT = (IT || "Unknown error") + (kT.d.UseFallbackTexture ? " - Fallback texture was used" : ""), eT.onErrorObservable.notifyObservers({
            message: IT,
            exception: LT
          }), BT && BT(IT, LT)) : (WT.d.Warn(`Failed to load ${TT}, falling back to ${RT}`), this._createTextureBase(RT, oT, eT.invertY, iT, zT, XT, BT, FT, ST, DT, eT, xT, KT, MT, rT, gT))
        };
        if (ET) {
          const oT = async TT => {
            (await ET).loadData(TT, eT, ((TT, oT, IT, kT, WT, XT) => {
              XT ? CT("TextureLoader failed to load data") : FT(eT, vT, iT, {
                width: TT,
                height: oT
              }, eT.invertY, !IT, kT, (() => (WT(), !1)), zT)
            }), rT)
          };
          if (DT) {
            const TT = async TT => {
              try {
                await oT(TT)
              } catch (IT) {
                CT("Failed to parse texture data", IT)
              }
            };
            DT instanceof ArrayBuffer ? TT(new Uint8Array(DT)) : ArrayBuffer.isView(DT) ? TT(DT) : BT && BT("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(TT, (async TT => {
            try {
              await oT(new Uint8Array(TT))
            } catch (IT) {
              CT("Failed to parse texture data", IT)
            }
          }), void 0, iT ? iT.offlineProvider : void 0, !0, ((TT, oT) => {
            CT("Unable to load " + (TT && TT.responseURL, oT))
          }))
        } else {
          const IT = TT => {
            wT && !this._doNotHandleContextLost && (eT._buffer = TT), FT(eT, vT, iT, TT, eT.invertY, oT, !1, ST, zT)
          };
          !hT || mT ? DT && ("string" === typeof DT.decoding || DT.close) ? IT(DT) : AT._FileToolsLoadImage(TT || "", IT, CT, iT ? iT.offlineProvider : null, MT, eT.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof DT || DT instanceof ArrayBuffer || ArrayBuffer.isView(DT) || DT instanceof Blob ? AT._FileToolsLoadImage(DT, IT, CT, iT ? iT.offlineProvider : null, MT, eT.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : DT && IT(DT)
        }
        return eT
      }
      _rebuildBuffers() {
        for (const TT of this._uniformBuffers) TT._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, KT.e)() ? document : null
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
      constructor(TT, oT, IT) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new FT, this._stencilStateComposer = new ST, this._stencilState = new DT, this._alphaState = new LT.b(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new iT.d, this.onCanvasFocusObservable = new iT.d, this.onNewSceneAddedObservable = new iT.d, this.onResizeObservable = new iT.d, this.onCanvasPointerOutObservable = new iT.d, this.onEffectErrorObservable = new iT.d, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new iT.d, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = TT => this._renderLoop(TT), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new iT.d, this.onAfterShaderCompilationObservable = new iT.d, this.onBeginFrameObservable = new iT.d, this.onEndFrameObservable = new iT.d, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new iT.d, this.onContextRestoredObservable = new iT.d, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.bC = new iT.d, this.onReleaseEffectsObservable = new iT.d, kT.d.Instances.push(this), this.startTime = BT.c.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, XT.c.SetMatrixPrecision(!!oT.useLargeWorldRendering || !!oT.useHighPrecisionMatrix), (0, KT.g)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), oT.antialias = TT ?? oT.antialias, oT.deterministicLockstep = oT.deterministicLockstep ?? !1, oT.lockstepMaxSteps = oT.lockstepMaxSteps ?? 4, oT.timeStep = oT.timeStep ?? 1 / 60, oT.stencil = oT.stencil ?? !0, this._audioContext = oT.audioEngineOptions?.audioContext ?? null, this._audioDestination = oT.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = oT.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!oT.doNotHandleContextLost, this._isStencilEnable = !!oT.stencil, this.useExactSrgbConversions = oT.useExactSrgbConversions ?? !1, this.canvasTabIndex = oT.canvasTabIndex ?? this.canvasTabIndex;
        const zT = (0, KT.k)() && window.devicePixelRatio || 1,
          WT = oT.limitDeviceRatio || zT;
        IT = IT || oT.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = IT, this._hardwareScalingLevel = IT ? 1 / Math.min(WT, zT) : 1, this._lastDevicePixelRatio = zT, this._creationOptions = oT
      }
      resize() {
        let TT, oT, IT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const TT = (0, KT.k)() && window.devicePixelRatio || 1,
            oT = this._lastDevicePixelRatio / TT;
          this._lastDevicePixelRatio = TT, this._hardwareScalingLevel *= oT
        }
        if ((0, KT.k)() && (0, KT.e)())
          if (this._renderingCanvas) {
            const IT = this._renderingCanvas.getBoundingClientRect?.();
            TT = this._renderingCanvas.clientWidth || IT?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, oT = this._renderingCanvas.clientHeight || IT?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else TT = window.innerWidth, oT = window.innerHeight;
        else TT = this._renderingCanvas ? this._renderingCanvas.width : 100, oT = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(TT / this._hardwareScalingLevel, oT / this._hardwareScalingLevel, IT)
      }
      setSize(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (TT |= 0, oT |= 0, !IT && this._renderingCanvas.width === TT && this._renderingCanvas.height === oT) return !1;
        if (this._renderingCanvas.width = TT, this._renderingCanvas.height = oT, this.scenes) {
          for (let TT = 0; TT < this.scenes.length; TT++) {
            const oT = this.scenes[TT];
            for (let TT = 0; TT < oT.cameras.length; TT++) {
              oT.cameras[TT]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT, ST, DT) {
        throw (0, xT.k)("engine.rawTexture")
      }
      createRawCubeTexture(TT, oT, IT, iT, zT, kT, WT, XT) {
        throw (0, xT.k)("engine.rawTexture")
      }
      createRawTexture3D(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT, ST) {
        throw (0, xT.k)("engine.rawTexture")
      }
      createRawTexture2DArray(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT, ST, DT) {
        throw (0, xT.k)("engine.rawTexture")
      }
      _sharedInit(TT) {
        this._renderingCanvas = TT
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const TT = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== TT.indexOf("Mobile") || -1 !== TT.indexOf("Mac") && (0, KT.e)() && "ontouchend" in document
        }, this._checkForMobile(), (0, KT.k)() && window.addEventListener("resize", this._checkForMobile))
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
      _createImageBitmapFromSource(TT, oT) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(TT, oT) {
        return createImageBitmap(TT, oT)
      }
      resizeImageBitmap(TT, oT, IT) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(TT) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(TT, oT) {
        if ("undefined" === typeof document) return new OffscreenCanvas(TT, oT);
        const IT = document.createElement("canvas");
        return IT.width = TT, IT.height = oT, IT
      }
      createCanvas(TT, oT) {
        return AT._CreateCanvas(TT, oT)
      }
      static _FileToolsLoadImage(TT, oT, IT, iT, zT, kT, WT) {
        if (!MT.d.loadImage) throw (0, xT.k)("FileTools");
        return MT.d.loadImage(TT, oT, IT, iT, zT, kT, WT)
      }
      _loadFile(TT, oT, IT, iT, zT, kT) {
        const WT = (0, MT.m)(TT, oT, IT, iT, zT, kT);
        return this._activeRequests.push(WT), WT.onCompleteObservable.add((() => {
          const TT = this._activeRequests.indexOf(WT); - 1 !== TT && this._activeRequests.splice(TT, 1)
        })), WT
      }
      static _FileToolsLoadFile(TT, oT, IT, iT, zT, kT) {
        if (MT.d.loadFile) return MT.d.loadFile(TT, oT, IT, iT, zT, kT);
        throw (0, xT.k)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), zT.c.ResetCache();
        for (const oT of this._activeRequests) oT.abort();
        this._boundRenderFunction = null, this.bC.notifyObservers(this), this.bC.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, KT.k)() && window.removeEventListener("resize", this._checkForMobile);
        const TT = kT.d.Instances.indexOf(this);
        TT >= 0 && kT.d.Instances.splice(TT, 1), kT.d.Instances.length || (kT.d.OnEnginesDisposedObservable.notifyObservers(this), kT.d.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(TT) {
        throw (0, xT.k)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(TT, oT) {
        for (let IT = 0; IT < kT.d.Instances.length; IT++) {
          const iT = kT.d.Instances[IT];
          for (let IT = 0; IT < iT.scenes.length; IT++) iT.scenes[IT].markAllMaterialsAsDirty(TT, oT)
        }
      }
      static GetCompatibleTextureLoader(TT, oT) {
        return null
      }
    }
    AT._RenderPassIdCounter = 0, AT._RescalePostProcessFactory = null, AT.CollisionsEpsilon = .001, AT.QueueNewFrame = rT
  },
  38617: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT
    });
    class iT {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? iT.ShadersRepository : iT.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? iT.ShadersStore : iT.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? iT.IncludesShadersStore : iT.IncludesShadersStoreWGSL
      }
    }
    iT.ShadersRepository = "src/Shaders/", iT.ShadersStore = {}, iT.IncludesShadersStore = {}, iT.ShadersRepositoryWGSL = "src/ShadersWGSL/", iT.ShadersStoreWGSL = {}, iT.IncludesShadersStoreWGSL = {}
  },
  38631: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => LT,
      c: () => gT,
      f: () => cT,
      g: () => xT,
      j: () => KT,
      l: () => AT,
      o: () => DT,
      p: () => FT,
      t: () => ST,
      x: () => BT,
      A: () => XT
    });
    class iT {
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
      _fillEffectInformation(TT, oT, IT, iT, zT, kT, WT, XT) {
        const BT = this.engine;
        if (BT.supportsUniformBuffers)
          for (const ST in oT) TT.bindUniformBlock(ST, oT[ST]);
        let FT;
        for (this.engine.getUniforms(this, IT).forEach(((TT, oT) => {
            iT[IT[oT]] = TT
          })), this._uniforms = iT, FT = 0; FT < zT.length; FT++) {
          null == TT.getUniform(zT[FT]) && (zT.splice(FT, 1), FT--)
        }
        zT.forEach(((TT, oT) => {
          kT[TT] = oT
        }));
        for (const ST of BT.getAttributes(this, WT)) XT.push(ST)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(TT, oT) {
        const IT = this._valueCache[TT],
          iT = oT.updateFlag;
        if (void 0 !== IT && IT === iT) return !1;
        const zT = oT.bIT();
        let kT = this._matrixValueCache[TT];
        if (void 0 !== IT && null !== IT && void 0 !== kT) {
          let oT = !0;
          for (let TT = 15; TT >= 0; TT--)
            if (kT[TT] !== zT[TT]) {
              oT = !1;
              break
            } if (oT) return this._valueCache[TT] = iT, !1
        }
        return void 0 === kT && (kT = this._matrixValueCache[TT] = new Float32Array(16)), kT.set(zT), this._valueCache[TT] = iT, !0
      }
      _cacheFloat2(TT, oT, IT) {
        let iT = this._valueCache[TT];
        if (!iT || 2 !== iT.length) return iT = [oT, IT], this._valueCache[TT] = iT, !0;
        let zT = !1;
        return iT[0] !== oT && (iT[0] = oT, zT = !0), iT[1] !== IT && (iT[1] = IT, zT = !0), zT
      }
      _cacheFloat3(TT, oT, IT, iT) {
        let zT = this._valueCache[TT];
        if (!zT || 3 !== zT.length) return zT = [oT, IT, iT], this._valueCache[TT] = zT, !0;
        let kT = !1;
        return zT[0] !== oT && (zT[0] = oT, kT = !0), zT[1] !== IT && (zT[1] = IT, kT = !0), zT[2] !== iT && (zT[2] = iT, kT = !0), kT
      }
      _cacheFloat4(TT, oT, IT, iT, zT) {
        let kT = this._valueCache[TT];
        if (!kT || 4 !== kT.length) return kT = [oT, IT, iT, zT], this._valueCache[TT] = kT, !0;
        let WT = !1;
        return kT[0] !== oT && (kT[0] = oT, WT = !0), kT[1] !== IT && (kT[1] = IT, WT = !0), kT[2] !== iT && (kT[2] = iT, WT = !0), kT[3] !== zT && (kT[3] = zT, WT = !0), WT
      }
      setInt(TT, oT) {
        const IT = this._valueCache[TT];
        void 0 !== IT && IT === oT || this.engine.setInt(this._uniforms[TT], oT) && (this._valueCache[TT] = oT)
      }
      setInt2(TT, oT, IT) {
        this._cacheFloat2(TT, oT, IT) && (this.engine.setInt2(this._uniforms[TT], oT, IT) || (this._valueCache[TT] = null))
      }
      setInt3(TT, oT, IT, iT) {
        this._cacheFloat3(TT, oT, IT, iT) && (this.engine.setInt3(this._uniforms[TT], oT, IT, iT) || (this._valueCache[TT] = null))
      }
      setInt4(TT, oT, IT, iT, zT) {
        this._cacheFloat4(TT, oT, IT, iT, zT) && (this.engine.setInt4(this._uniforms[TT], oT, IT, iT, zT) || (this._valueCache[TT] = null))
      }
      setIntArray(TT, oT) {
        this._valueCache[TT] = null, this.engine.setIntArray(this._uniforms[TT], oT)
      }
      setIntArray2(TT, oT) {
        this._valueCache[TT] = null, this.engine.setIntArray2(this._uniforms[TT], oT)
      }
      setIntArray3(TT, oT) {
        this._valueCache[TT] = null, this.engine.setIntArray3(this._uniforms[TT], oT)
      }
      setIntArray4(TT, oT) {
        this._valueCache[TT] = null, this.engine.setIntArray4(this._uniforms[TT], oT)
      }
      setUInt(TT, oT) {
        const IT = this._valueCache[TT];
        void 0 !== IT && IT === oT || this.engine.setUInt(this._uniforms[TT], oT) && (this._valueCache[TT] = oT)
      }
      setUInt2(TT, oT, IT) {
        this._cacheFloat2(TT, oT, IT) && (this.engine.setUInt2(this._uniforms[TT], oT, IT) || (this._valueCache[TT] = null))
      }
      setUInt3(TT, oT, IT, iT) {
        this._cacheFloat3(TT, oT, IT, iT) && (this.engine.setUInt3(this._uniforms[TT], oT, IT, iT) || (this._valueCache[TT] = null))
      }
      setUInt4(TT, oT, IT, iT, zT) {
        this._cacheFloat4(TT, oT, IT, iT, zT) && (this.engine.setUInt4(this._uniforms[TT], oT, IT, iT, zT) || (this._valueCache[TT] = null))
      }
      setUIntArray(TT, oT) {
        this._valueCache[TT] = null, this.engine.setUIntArray(this._uniforms[TT], oT)
      }
      setUIntArray2(TT, oT) {
        this._valueCache[TT] = null, this.engine.setUIntArray2(this._uniforms[TT], oT)
      }
      setUIntArray3(TT, oT) {
        this._valueCache[TT] = null, this.engine.setUIntArray3(this._uniforms[TT], oT)
      }
      setUIntArray4(TT, oT) {
        this._valueCache[TT] = null, this.engine.setUIntArray4(this._uniforms[TT], oT)
      }
      setArray(TT, oT) {
        this._valueCache[TT] = null, this.engine.setArray(this._uniforms[TT], oT)
      }
      setArray2(TT, oT) {
        this._valueCache[TT] = null, this.engine.setArray2(this._uniforms[TT], oT)
      }
      setArray3(TT, oT) {
        this._valueCache[TT] = null, this.engine.setArray3(this._uniforms[TT], oT)
      }
      setArray4(TT, oT) {
        this._valueCache[TT] = null, this.engine.setArray4(this._uniforms[TT], oT)
      }
      setMatrices(TT, oT) {
        oT && (this._valueCache[TT] = null, this.engine.setMatrices(this._uniforms[TT], oT))
      }
      setMatrix(TT, oT) {
        this._cacheMatrix(TT, oT) && (this.engine.setMatrices(this._uniforms[TT], oT.bIT()) || (this._valueCache[TT] = null))
      }
      setMatrix3x3(TT, oT) {
        this._valueCache[TT] = null, this.engine.setMatrix3x3(this._uniforms[TT], oT)
      }
      setMatrix2x2(TT, oT) {
        this._valueCache[TT] = null, this.engine.setMatrix2x2(this._uniforms[TT], oT)
      }
      setFloat(TT, oT) {
        const IT = this._valueCache[TT];
        void 0 !== IT && IT === oT || this.engine.setFloat(this._uniforms[TT], oT) && (this._valueCache[TT] = oT)
      }
      setVector2(TT, oT) {
        this._cacheFloat2(TT, oT.x, oT.y) && (this.engine.setFloat2(this._uniforms[TT], oT.x, oT.y) || (this._valueCache[TT] = null))
      }
      setFloat2(TT, oT, IT) {
        this._cacheFloat2(TT, oT, IT) && (this.engine.setFloat2(this._uniforms[TT], oT, IT) || (this._valueCache[TT] = null))
      }
      setVector3(TT, oT) {
        this._cacheFloat3(TT, oT.x, oT.y, oT.z) && (this.engine.setFloat3(this._uniforms[TT], oT.x, oT.y, oT.z) || (this._valueCache[TT] = null))
      }
      setFloat3(TT, oT, IT, iT) {
        this._cacheFloat3(TT, oT, IT, iT) && (this.engine.setFloat3(this._uniforms[TT], oT, IT, iT) || (this._valueCache[TT] = null))
      }
      setVector4(TT, oT) {
        this._cacheFloat4(TT, oT.x, oT.y, oT.z, oT.w) && (this.engine.setFloat4(this._uniforms[TT], oT.x, oT.y, oT.z, oT.w) || (this._valueCache[TT] = null))
      }
      setQuaternion(TT, oT) {
        this._cacheFloat4(TT, oT.x, oT.y, oT.z, oT.w) && (this.engine.setFloat4(this._uniforms[TT], oT.x, oT.y, oT.z, oT.w) || (this._valueCache[TT] = null))
      }
      setFloat4(TT, oT, IT, iT, zT) {
        this._cacheFloat4(TT, oT, IT, iT, zT) && (this.engine.setFloat4(this._uniforms[TT], oT, IT, iT, zT) || (this._valueCache[TT] = null))
      }
      setColor3(TT, oT) {
        this._cacheFloat3(TT, oT.r, oT.g, oT.b) && (this.engine.setFloat3(this._uniforms[TT], oT.r, oT.g, oT.b) || (this._valueCache[TT] = null))
      }
      setColor4(TT, oT, IT) {
        this._cacheFloat4(TT, oT.r, oT.g, oT.b, IT) && (this.engine.setFloat4(this._uniforms[TT], oT.r, oT.g, oT.b, IT) || (this._valueCache[TT] = null))
      }
      setDirectColor4(TT, oT) {
        this._cacheFloat4(TT, oT.r, oT.g, oT.b, oT.a) && (this.engine.setFloat4(this._uniforms[TT], oT.r, oT.g, oT.b, oT.a) || (this._valueCache[TT] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var zT = IT(38635);
    const kT = new WeakMap,
      WT = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function XT(TT) {
      let oT = kT.get(TT);
      if (!oT) {
        if (!TT) return WT;
        oT = {
          _webGLVersion: TT.TEXTURE_BINDING_3D ? 2 : 1,
          _context: TT,
          parallelShaderCompile: TT.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, kT.set(TT, oT)
      }
      return oT
    }

    function BT(TT) {
      kT.delete(TT)
    }

    function FT(TT, oT, IT, iT, zT, kT) {
      const WT = XT(iT);
      kT || (kT = WT._createShaderProgramInjection ?? LT);
      return kT(TT, rT(oT, "vertex", iT, WT._contextWasLost), rT(IT, "fragment", iT, WT._contextWasLost), iT, zT, WT.validateShaderPrograms)
    }

    function ST(TT, oT, IT, iT, zT) {
      let kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        WT = arguments.length > 6 ? arguments[6] : void 0;
      const BT = XT(zT);
      WT || (WT = BT._createShaderProgramInjection ?? LT);
      const FT = BT._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return WT(TT, MT(oT, "vertex", iT, FT, zT, BT._contextWasLost), MT(IT, "fragment", iT, FT, zT, BT._contextWasLost), zT, kT, BT.validateShaderPrograms)
    }

    function DT(TT, oT) {
      const IT = new iT,
        zT = XT(TT);
      return zT.parallelShaderCompile && !zT.disableParallelShaderCompile && (IT.isParallelCompiled = !0), IT.context = zT._context, IT
    }

    function LT(TT, oT, IT, iT) {
      let zT = arguments.length > 5 ? arguments[5] : void 0;
      const kT = iT.createProgram();
      if (TT.program = kT, !kT) throw new Error("Unable to create program");
      return iT.attachShader(kT, oT), iT.attachShader(kT, IT), iT.linkProgram(kT), TT.context = iT, TT.vertexShader = oT, TT.fragmentShader = IT, TT.isParallelCompiled || cT(TT, iT, zT), kT
    }

    function xT(TT, oT, IT) {
      const iT = TT;
      if (iT._isDisposed) return !1;
      const zT = XT(oT);
      return !!(zT && zT.parallelShaderCompile && zT.parallelShaderCompile.COMPLETION_STATUS_KHR && iT.program && oT.getProgramParameter(iT.program, zT.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (cT(iT, oT, IT), !0)
    }

    function cT(TT, oT, IT) {
      const iT = TT.context,
        zT = TT.vertexShader,
        kT = TT.fragmentShader,
        WT = TT.program;
      if (!iT.getProgramParameter(WT, iT.LINK_STATUS)) {
        if (!oT.getShaderParameter(zT, oT.COMPILE_STATUS)) {
          const IT = oT.getShaderInfoLog(zT);
          if (IT) throw TT.vertexCompilationError = IT, new Error("VERTEX SHADER " + IT)
        }
        if (!oT.getShaderParameter(kT, oT.COMPILE_STATUS)) {
          const IT = oT.getShaderInfoLog(kT);
          if (IT) throw TT.fragmentCompilationError = IT, new Error("FRAGMENT SHADER " + IT)
        }
        const IT = iT.getProgramInfoLog(WT);
        if (IT) throw TT.programLinkError = IT, new Error(IT)
      }
      if (IT) {
        iT.validateProgram(WT);
        if (!iT.getProgramParameter(WT, iT.VALIDATE_STATUS)) {
          const oT = iT.getProgramInfoLog(WT);
          if (oT) throw TT.programValidationError = oT, new Error(oT)
        }
      }
      iT.deleteShader(zT), iT.deleteShader(kT), TT.vertexShader = void 0, TT.fragmentShader = void 0, TT.onCompiled && (TT.onCompiled(), TT.onCompiled = void 0)
    }

    function KT(TT, oT, IT, iT, zT, kT, WT, BT, DT) {
      let LT = arguments.length > 10 ? arguments[10] : void 0,
        xT = arguments.length > 11 ? arguments[11] : void 0,
        cT = arguments.length > 12 ? arguments[12] : void 0;
      const KT = XT(TT.context);
      xT || (xT = KT.createRawShaderProgramInjection ?? FT), cT || (cT = KT.createShaderProgramInjection ?? ST);
      const MT = TT;
      MT.program = iT ? xT(MT, oT, IT, MT.context, DT) : cT(MT, oT, IT, BT, MT.context, DT), MT.program.__SPECTOR_rebuildProgram = WT, LT()
    }

    function MT(TT, oT, IT, iT, kT, WT) {
      return rT((0, zT.f)(TT, IT, iT), oT, kT, WT)
    }

    function rT(TT, oT, IT, iT) {
      const zT = IT.createShader("vertex" === oT ? IT.VERTEX_SHADER : IT.FRAGMENT_SHADER);
      if (!zT) {
        let TT, zT = IT.NO_ERROR;
        for (;
          (TT = IT.getError()) !== IT.NO_ERROR;) zT = TT;
        throw new Error(`Something went wrong while creating a gl ${oT} shader object. gl error=${zT}, gl isContextLost=${IT.isContextLost()}, _contextWasLost=${iT}`)
      }
      return IT.shaderSource(zT, TT), IT.compileShader(zT), zT
    }

    function AT(TT, oT) {
      oT.useProgram(TT)
    }

    function gT(TT, oT) {
      const IT = TT;
      if (!IT.isParallelCompiled) return void oT(TT);
      const iT = IT.onCompiled;
      IT.onCompiled = () => {
        iT?.(), oT(TT)
      }
    }
  },
  38607: (TT, oT, IT) => {
    IT.d(oT, {
      ThinEngine: () => wT
    });
    var iT = IT(38609),
      zT = IT(38631),
      kT = IT(38659),
      WT = IT(38679),
      XT = IT(37660),
      BT = IT(38626);
    class FT {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(TT, oT, IT, iT, zT) {
        if (zT.drawBuffersExtensionDisabled) {
          const oT = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          TT = TT.replace(oT, "")
        }
        return TT
      }
    }
    const ST = /(flat\s)?\s*varying\s*.*/;
    class DT {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(TT) {
        return TT.replace("attribute", "in")
      }
      varyingCheck(TT, oT) {
        return ST.test(TT)
      }
      varyingProcessor(TT, oT) {
        return TT.replace("varying", oT ? "in" : "out")
      }
      postProcessor(TT, oT, IT) {
        const iT = -1 !== TT.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (TT = (TT = TT.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), IT) {
          const IT = -1 !== TT.search(/layout *\(location *= *0\) *out/g),
            zT = -1 !== oT.indexOf("#define DUAL_SOURCE_BLENDING"),
            kT = zT ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          zT && (TT = "#extension GL_EXT_blend_func_extended : require\n" + TT), TT = (TT = (TT = (TT = (TT = (TT = (TT = TT.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (iT || IT ? "" : kT) + "void main(")
        } else {
          oT.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (TT = "invariant gl_Position;\n" + TT);
          if (-1 !== oT.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + TT
        }
        return TT
      }
    }
    var LT = IT(38687),
      xT = IT(38698),
      cT = IT(38700),
      KT = IT(38594),
      MT = IT(38635),
      rT = IT(38624),
      AT = IT(38708),
      gT = IT(38673);
    class hT {}
    class wT extends kT.b {
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
        return iT.c.ShadersRepository
      }
      static set ShadersRepository(TT) {
        iT.c.ShadersRepository = TT
      }
      get supportsUniformBuffers() {
        return this.rK > 1 && !this.disableUniformBuffers
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
      constructor(TT, oT, IT, iT) {
        if (IT = IT || {}, super(oT ?? IT.antialias, IT, iT), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !TT) return;
        let kT;
        if (TT.getContext) {
          if (kT = TT, void 0 === IT.preserveDrawingBuffer && (IT.preserveDrawingBuffer = !1), void 0 === IT.xrCompatible && (IT.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const TT = navigator.userAgent;
            for (const oT of wT.ExceptionList) {
              const iT = oT.key,
                zT = oT.targets;
              if (new RegExp(iT).test(TT)) {
                if (oT.capture && oT.captureConstraint) {
                  const IT = oT.capture,
                    iT = oT.captureConstraint,
                    zT = new RegExp(IT).exec(TT);
                  if (zT && zT.length > 0) {
                    if (parseInt(zT[zT.length - 1]) >= iT) continue
                  }
                }
                for (const TT of zT) switch (TT) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    IT.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, zT.x)(this._gl)
            } : (this._onContextLost = TT => {
              TT.preventDefault(), this._contextWasLost = !0, (0, zT.x)(this._gl), XT.d.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, kT.addEventListener("webglcontextrestored", this._onContextRestored, !1), IT.powerPreference = IT.powerPreference || "high-performance"), kT.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (IT.xrCompatible = !1), !IT.disableWebGL2Support) try {
            this._gl = kT.getContext("webgl2", IT) || kT.getContext("experimental-webgl2", IT), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (ST) {}
          if (!this._gl) {
            if (!kT) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = kT.getContext("webgl", IT) || kT.getContext("experimental-webgl", IT)
            } catch (ST) {
              throw new Error("WebGL not supported", {
                cause: ST
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = TT, kT = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const oT = this._gl.getContextAttributes();
          oT && (IT.stencil = oT.stencil)
        }
        this._sharedInit(kT), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== IT.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = IT.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let zT = 0; zT < this._caps.maxVertexAttribs; zT++) this._currentBufferPointers[zT] = new hT;
        this._shaderProcessor = this.rK > 1 ? new DT : new FT;
        const WT = `Babylon.js v${wT.Version}`;
        XT.d.Log(WT + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", WT);
        const BT = (0, zT.A)(this._gl);
        BT.validateShaderPrograms = this.validateShaderPrograms, BT.parallelShaderCompile = this._caps.parallelShaderCompile
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
        const oT = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!oT, this._alphaState = new gT.b(this._caps.blendParametersPerTarget), oT && (this._gl.blendEquationSeparateIndexed = oT.blendEquationSeparateiOES.bind(oT), this._gl.blendEquationIndexed = oT.blendEquationiOES.bind(oT), this._gl.blendFuncSeparateIndexed = oT.blendFuncSeparateiOES.bind(oT), this._gl.blendFuncIndexed = oT.blendFunciOES.bind(oT), this._gl.colorMaskIndexed = oT.colorMaskiOES.bind(oT), this._gl.disableIndexed = oT.disableiOES.bind(oT), this._gl.enableIndexed = oT.enableiOES.bind(oT)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const TT = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== TT) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = TT.drawBuffersWEBGL.bind(TT), this._caps.maxDrawBuffers = this._gl.getParameter(TT.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let oT = 0; oT < 16; oT++) this._gl["COLOR_ATTACHMENT" + oT + "_WEBGL"] = TT["COLOR_ATTACHMENT" + oT + "_WEBGL"]
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
            oT = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (TT && oT && (this._caps.highPrecisionShaderSupported = 0 !== TT.precision && 0 !== oT.precision, this._caps.shaderFloatPrecision = Math.min(TT.precision, oT.precision)), !this._shouldUseHighPrecisionShader) {
            const TT = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              oT = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            TT && oT && (this._caps.shaderFloatPrecision = Math.min(TT.precision, oT.precision))
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
        for (let IT = 0; IT < this._maxSimultaneousTextures; IT++) this._nextFreeTextureSlots.push(IT);
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
      get rK() {
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
      clear(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const kT = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = kT;
        let WT = 0;
        if (oT && TT) {
          let oT = !0;
          if (this._currentRenderTarget) {
            const IT = this._currentRenderTarget.texture?.format;
            if (void 0 !== IT && (0, AT.i)(IT)) {
              const IT = this._currentRenderTarget.texture?.type;
              void 0 !== IT && (0, AT.m)(IT) ? (wT._TempClearColorUint32[0] = 255 * TT.r, wT._TempClearColorUint32[1] = 255 * TT.g, wT._TempClearColorUint32[2] = 255 * TT.b, wT._TempClearColorUint32[3] = 255 * TT.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, wT._TempClearColorUint32), oT = !1) : (wT._TempClearColorInt32[0] = 255 * TT.r, wT._TempClearColorInt32[1] = 255 * TT.g, wT._TempClearColorInt32[2] = 255 * TT.b, wT._TempClearColorInt32[3] = 255 * TT.a, this._gl.clearBufferiv(this._gl.COLOR, 0, wT._TempClearColorInt32), oT = !1)
            }
          }
          oT && (this._gl.clearColor(TT.r, TT.g, TT.b, void 0 !== TT.a ? TT.a : 1), WT |= this._gl.COLOR_BUFFER_BIT)
        }
        IT && (this.lIT ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), WT |= this._gl.DEPTH_BUFFER_BIT), iT && (this._gl.clearStencil(zT), WT |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(WT)
      }
      _clearColorAttachment(TT, oT, IT, iT) {
        if ((0, AT.i)(IT)) {
          const IT = (0, AT.m)(iT),
            zT = IT ? wT._TempClearColorUint32 : wT._TempClearColorInt32;
          return zT[0] = oT.r, zT[1] = oT.g, zT[2] = oT.b, zT[3] = oT.a, void(IT ? this._gl.clearBufferuiv(this._gl.COLOR, TT, zT) : this._gl.clearBufferiv(this._gl.COLOR, TT, zT))
        }
        wT._TempClearColorFloat32[0] = oT.r, wT._TempClearColorFloat32[1] = oT.g, wT._TempClearColorFloat32[2] = oT.b, wT._TempClearColorFloat32[3] = oT.a, this._gl.clearBufferfv(this._gl.COLOR, TT, wT._TempClearColorFloat32)
      }
      _viewport(TT, oT, IT, iT) {
        TT === this._viewportCached.x && oT === this._viewportCached.y && IT === this._viewportCached.z && iT === this._viewportCached.w || (this._viewportCached.x = TT, this._viewportCached.y = oT, this._viewportCached.z = IT, this._viewportCached.w = iT, this._gl.viewport(TT, oT, IT, iT))
      }
      gR() {
        super.gR(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 ? arguments[2] : void 0,
          iT = arguments.length > 3 ? arguments[3] : void 0,
          zT = arguments.length > 4 ? arguments[4] : void 0,
          kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          WT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const BT = TT;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = TT, this._integerMRTAttachmentsMask = !TT.isMulti && TT.texture && (0, AT.i)(TT.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(BT._framebuffer);
        const FT = this._gl;
        TT.isMulti || (TT.is2DArray || TT.is3D ? (FT.framebufferTextureLayer(FT.FRAMEBUFFER, FT.COLOR_ATTACHMENT0, TT.texture._hardwareTexture?.underlyingResource, kT, WT), BT._currentLOD = kT) : TT.isCube ? FT.framebufferTexture2D(FT.FRAMEBUFFER, FT.COLOR_ATTACHMENT0, FT.TEXTURE_CUBE_MAP_POSITIVE_X + oT, TT.texture._hardwareTexture?.underlyingResource, kT) : BT._currentLOD !== kT && (FT.framebufferTexture2D(FT.FRAMEBUFFER, FT.COLOR_ATTACHMENT0, FT.TEXTURE_2D, TT.texture._hardwareTexture?.underlyingResource, kT), BT._currentLOD = kT));
        const ST = TT._depthStencilTexture;
        if (ST) {
          TT.is3D && (TT.texture.width === ST.width && TT.texture.height === ST.height && TT.texture.depth === ST.depth || XT.d.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const IT = TT._depthStencilTextureWithStencil ? FT.DEPTH_STENCIL_ATTACHMENT : FT.DEPTH_ATTACHMENT;
          TT.is2DArray || TT.is3D ? FT.framebufferTextureLayer(FT.FRAMEBUFFER, IT, ST._hardwareTexture?.underlyingResource, kT, WT) : TT.isCube ? FT.framebufferTexture2D(FT.FRAMEBUFFER, IT, FT.TEXTURE_CUBE_MAP_POSITIVE_X + oT, ST._hardwareTexture?.underlyingResource, kT) : FT.framebufferTexture2D(FT.FRAMEBUFFER, IT, FT.TEXTURE_2D, ST._hardwareTexture?.underlyingResource, kT)
        }
        BT._MSAAFramebuffer && this._bindUnboundFramebuffer(BT._MSAAFramebuffer), this._cachedViewport && !zT ? this.setViewport(this._cachedViewport, IT, iT) : (IT || (IT = TT.width, kT && (IT /= Math.pow(2, kT))), iT || (iT = TT.height, kT && (iT /= Math.pow(2, kT))), this._viewport(0, 0, IT, iT)), this.wipeCaches()
      }
      setStateCullFaceType(TT, oT) {
        const IT = this.cullBackFaces ?? TT ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== IT || oT) && (this._depthCullingState.cullFace = IT)
      }
      setState(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 ? arguments[2] : void 0,
          iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          zT = arguments.length > 4 ? arguments[4] : void 0,
          kT = arguments.length > 5 ? arguments[5] : void 0,
          WT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== TT || IT) && (this._depthCullingState.cull = TT), this.setStateCullFaceType(zT, IT), this.setZOffset(oT), this.setZOffsetUnits(WT);
        const XT = iT ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== XT || IT) && (this._depthCullingState.frontFace = XT), this._stencilStateComposer.stencilMaterial = kT
      }
      _resolveAndGenerateMipMapsFramebuffer(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        TT.disableAutomaticMSAAResolve || (TT.isMulti ? this.resolveMultiFramebuffer(TT) : this.resolveFramebuffer(TT)), oT || (TT.isMulti ? this.generateMipMapsMultiFramebuffer(TT) : this.generateMipMapsFramebuffer(TT))
      }
      _bindUnboundFramebuffer(TT) {
        this._currentFramebuffer !== TT && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, TT), this._currentFramebuffer = TT)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(TT) {
        const oT = this._getTextureTarget(TT);
        this._bindTextureDirectly(oT, TT, !0), this._gl.generateMipmap(oT), this._bindTextureDirectly(oT, null)
      }
      unBindFramebuffer(TT, oT, IT) {
        const iT = TT;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(TT, oT), IT && (iT._MSAAFramebuffer && this._bindUnboundFramebuffer(iT._framebuffer), IT()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(TT) {
        TT.isMulti || !TT.texture?.generateMipMaps || TT.isCube || this.generateMipmaps(TT.texture)
      }
      resolveFramebuffer(TT) {
        const oT = TT,
          IT = this._gl;
        if (!oT._MSAAFramebuffer || oT.isMulti) return;
        let iT = oT.resolveMSAAColors ? IT.COLOR_BUFFER_BIT : 0;
        iT |= oT._generateDepthBuffer && oT.resolveMSAADepth ? IT.DEPTH_BUFFER_BIT : 0, iT |= oT._generateStencilBuffer && oT.resolveMSAAStencil ? IT.STENCIL_BUFFER_BIT : 0, IT.bindFramebuffer(IT.READ_FRAMEBUFFER, oT._MSAAFramebuffer), IT.bindFramebuffer(IT.DRAW_FRAMEBUFFER, oT._framebuffer), IT.blitFramebuffer(0, 0, TT.width, TT.height, 0, 0, TT.width, TT.height, iT, IT.NEAREST)
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
      createVertexBuffer(TT, oT, IT) {
        return this._createVertexBuffer(TT, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(TT, oT) {
        const IT = this._gl.createBuffer();
        if (!IT) throw new Error("Unable to create vertex buffer");
        const iT = new LT.e(IT);
        return this.bindArrayBuffer(iT), "number" !== typeof TT ? TT instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(TT), oT), iT.fD = 4 * TT.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, TT, oT), iT.fD = TT.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(TT), oT), iT.fD = TT), this._resetVertexBufferBinding(), iT.references = 1, iT
      }
      createDynamicVertexBuffer(TT, oT) {
        return this._createVertexBuffer(TT, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(TT, oT, IT) {
        const iT = this._gl.createBuffer(),
          zT = new LT.e(iT);
        if (!iT) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(zT);
        const kT = this._normalizeIndexData(TT);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, kT, oT ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), zT.references = 1, zT.is32Bits = 4 === kT.BYTES_PER_ELEMENT, zT
      }
      _normalizeIndexData(TT) {
        if (2 === TT.BYTES_PER_ELEMENT) return TT;
        if (this._caps.uintIndices) {
          if (TT instanceof Uint32Array) return TT;
          for (let oT = 0; oT < TT.length; oT++)
            if (TT[oT] >= 65535) return new Uint32Array(TT);
          return new Uint16Array(TT)
        }
        return new Uint16Array(TT)
      }
      bindArrayBuffer(TT) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(TT, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(TT, oT, IT) {
        const iT = TT.program,
          zT = this._gl.getUniformBlockIndex(iT, oT);
        this._gl.uniformBlockBinding(iT, zT, IT)
      }
      bindIndexBuffer(TT) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(TT, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(TT, oT) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[oT] !== TT) && (this._gl.bindBuffer(oT, TT ? TT.underlyingResource : null), this._currentBoundBuffer[oT] = TT)
      }
      updateArrayBuffer(TT) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, TT)
      }
      _vertexAttribPointer(TT, oT, IT, iT, zT, kT, WT) {
        const XT = this._currentBufferPointers[oT];
        if (!XT) return;
        let BT = !1;
        XT.active ? (XT.buffer !== TT && (XT.buffer = TT, BT = !0), XT.size !== IT && (XT.size = IT, BT = !0), XT.type !== iT && (XT.type = iT, BT = !0), XT.normalized !== zT && (XT.normalized = zT, BT = !0), XT.stride !== kT && (XT.stride = kT, BT = !0), XT.offset !== WT && (XT.offset = WT, BT = !0)) : (BT = !0, XT.active = !0, XT.index = oT, XT.size = IT, XT.type = iT, XT.normalized = zT, XT.stride = kT, XT.offset = WT, XT.buffer = TT), (BT || this._vaoRecordInProgress) && (this.bindArrayBuffer(TT), iT === this._gl.UNSIGNED_INT || iT === this._gl.INT ? this._gl.vertexAttribIPointer(oT, IT, iT, kT, WT) : this._gl.vertexAttribPointer(oT, IT, iT, zT, kT, WT))
      }
      _bindIndexBufferWithCache(TT) {
        null != TT && this._cachedIndexBuffer !== TT && (this._cachedIndexBuffer = TT, this.bindIndexBuffer(TT), this._uintIndicesCurrentlySet = TT.is32Bits)
      }
      _bindVertexBuffersAttributes(TT, oT, IT) {
        const iT = oT.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let zT = 0; zT < iT.length; zT++) {
          const kT = oT.getAttributeLocation(zT);
          if (kT >= 0) {
            const oT = iT[zT];
            let WT = null;
            if (IT && (WT = IT[oT]), WT || (WT = TT[oT]), !WT) continue;
            this._gl.enableVertexAttribArray(kT), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[kT] = !0);
            const XT = WT.getBuffer();
            XT && (this._vertexAttribPointer(XT, kT, WT.getSize(), WT.type, WT.normalized, WT.byteStride, WT.byteOffset), WT.getIsInstanced() && (this._gl.vertexAttribDivisor(kT, WT.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(kT), this._currentInstanceBuffers.push(XT))))
          }
        }
      }
      recordVertexArrayObject(TT, oT, IT, iT) {
        const zT = this._gl.createVertexArray();
        if (!zT) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(zT), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(TT, IT, iT), this.bindIndexBuffer(oT), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), zT
      }
      bindVertexArrayObject(TT, oT) {
        this._cachedVertexArrayObject !== TT && (this._cachedVertexArrayObject = TT, this._gl.bindVertexArray(TT), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != oT && oT.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(TT, oT, IT, iT, zT) {
        if (this._cachedVertexBuffers !== TT || this._cachedEffectForVertexBuffers !== zT) {
          this._cachedVertexBuffers = TT, this._cachedEffectForVertexBuffers = zT;
          const oT = zT.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let kT = 0;
          for (let WT = 0; WT < oT; WT++)
            if (WT < IT.length) {
              const oT = zT.getAttributeLocation(WT);
              oT >= 0 && (this._gl.enableVertexAttribArray(oT), this._vertexAttribArraysEnabled[oT] = !0, this._vertexAttribPointer(TT, oT, IT[WT], this._gl.FLOAT, !1, iT, kT)), kT += 4 * IT[WT]
            }
        }
        this._bindIndexBufferWithCache(oT)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(TT, oT, IT, iT) {
        this._cachedVertexBuffers === TT && this._cachedEffectForVertexBuffers === IT || (this._cachedVertexBuffers = TT, this._cachedEffectForVertexBuffers = IT, this._bindVertexBuffersAttributes(TT, IT, iT)), this._bindIndexBufferWithCache(oT)
      }
      unbindInstanceAttributes() {
        let TT;
        for (let oT = 0, IT = this._currentInstanceLocations.length; oT < IT; oT++) {
          const IT = this._currentInstanceBuffers[oT];
          TT != IT && IT.references && (TT = IT, this.bindArrayBuffer(IT));
          const iT = this._currentInstanceLocations[oT];
          this._gl.vertexAttribDivisor(iT, 0)
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
      updateAndBindInstancesBuffer(TT, oT, IT) {
        if (this.bindArrayBuffer(TT), oT && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, oT), void 0 !== IT[0].index) this.bindInstancesBuffer(TT, IT, !0);
        else
          for (let iT = 0; iT < 4; iT++) {
            const oT = IT[iT];
            this._vertexAttribArraysEnabled[oT] || (this._gl.enableVertexAttribArray(oT), this._vertexAttribArraysEnabled[oT] = !0), this._vertexAttribPointer(TT, oT, 4, this._gl.FLOAT, !1, 64, 16 * iT), this._gl.vertexAttribDivisor(oT, 1), this._currentInstanceLocations.push(oT), this._currentInstanceBuffers.push(TT)
          }
      }
      bindInstancesBuffer(TT, oT) {
        let IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(TT);
        let iT = 0;
        if (IT)
          for (let zT = 0; zT < oT.length; zT++) {
            iT += 4 * oT[zT].attributeSize
          }
        for (let zT = 0; zT < oT.length; zT++) {
          const IT = oT[zT];
          void 0 === IT.index && (IT.index = this._currentEffect.getAttributeLocationByName(IT.attributeName)), IT.index < 0 || (this._vertexAttribArraysEnabled[IT.index] || (this._gl.enableVertexAttribArray(IT.index), this._vertexAttribArraysEnabled[IT.index] = !0), this._vertexAttribPointer(TT, IT.index, IT.attributeSize, IT.attributeType || this._gl.FLOAT, IT.normalized || !1, iT, IT.offset), this._gl.vertexAttribDivisor(IT.index, void 0 === IT.divisor ? 1 : IT.divisor), this._currentInstanceLocations.push(IT.index), this._currentInstanceBuffers.push(TT))
        }
      }
      disableInstanceAttributeByName(TT) {
        if (!this._currentEffect) return;
        const oT = this._currentEffect.getAttributeLocationByName(TT);
        this.disableInstanceAttribute(oT)
      }
      disableInstanceAttribute(TT) {
        let oT, IT = !1;
        for (; - 1 !== (oT = this._currentInstanceLocations.indexOf(TT));) this._currentInstanceLocations.splice(oT, 1), this._currentInstanceBuffers.splice(oT, 1), IT = !0;
        IT && (this._gl.vertexAttribDivisor(TT, 0), this.disableAttributeByIndex(TT))
      }
      disableAttributeByIndex(TT) {
        this._gl.disableVertexAttribArray(TT), this._vertexAttribArraysEnabled[TT] = !1, this._currentBufferPointers[TT].active = !1
      }
      draw(TT, oT, IT, iT) {
        this.drawElementsType(TT ? 0 : 1, oT, IT, iT)
      }
      drawPointClouds(TT, oT, IT) {
        this.drawArraysType(2, TT, oT, IT)
      }
      drawUnIndexed(TT, oT, IT, iT) {
        this.drawArraysType(TT ? 0 : 1, oT, IT, iT)
      }
      drawElementsType(TT, oT, IT, iT) {
        this.applyStates(), this._reportDrawCall();
        const zT = this._drawMode(TT),
          kT = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          WT = this._uintIndicesCurrentlySet ? 4 : 2;
        iT ? this._gl.drawElementsInstanced(zT, IT, kT, oT * WT, iT) : this._gl.drawElements(zT, IT, kT, oT * WT)
      }
      drawArraysType(TT, oT, IT, iT) {
        this.applyStates(), this._reportDrawCall();
        const zT = this._drawMode(TT);
        iT ? this._gl.drawArraysInstanced(zT, oT, IT, iT) : this._gl.drawArrays(zT, oT, IT)
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
        const oT = TT.getPipelineContext();
        oT && this._deletePipelineContext(oT)
      }
      _deletePipelineContext(TT) {
        const oT = TT;
        oT && oT.program && (oT.program.__SPECTOR_rebuildProgram = null, (0, rT.i)(oT), this._gl && (this._currentProgram === oT.program && this._setProgram(null), this._gl.deleteProgram(oT.program)))
      }
      _getGlobalDefines(TT) {
        return (0, MT.j)(TT, this.isNDCHalfZRange, this.lIT, this.useExactSrgbConversions)
      }
      createEffect(TT, oT, IT, kT, WT, XT, BT, FT, ST) {
        let DT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          LT = arguments.length > 10 ? arguments[10] : void 0;
        const xT = "string" === typeof TT ? TT : TT.vertexToken || TT.vertexSource || TT.vertexElement || TT.vertex,
          cT = "string" === typeof TT ? TT : TT.fragmentToken || TT.fragmentSource || TT.fragmentElement || TT.fragment,
          KT = this._getGlobalDefines(),
          MT = void 0 !== oT.attributes;
        let rT = WT ?? oT.defines ?? "";
        KT && (rT += KT);
        const AT = xT + "+" + cT + "@" + rT;
        if (this._compiledEffects[AT]) {
          const TT = this._compiledEffects[AT];
          return BT && TT.isReady() && BT(TT), TT._refCount++, TT
        }
        this._gl && (0, zT.A)(this._gl);
        const gT = new iT.c(TT, oT, MT ? this : IT, kT, this, WT, XT, BT, FT, ST, AT, oT.shaderLanguage ?? DT, oT.extraInitializationsAsync ?? LT);
        return this._compiledEffects[AT] = gT, gT
      }
      _getShaderSource(TT) {
        return this._gl.getShaderSource(TT)
      }
      createRawShaderProgram(TT, oT, IT, iT) {
        let kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const WT = (0, zT.A)(this._gl);
        return WT._contextWasLost = this._contextWasLost, WT.validateShaderPrograms = this.validateShaderPrograms, (0, zT.p)(TT, oT, IT, iT || this._gl, kT)
      }
      createShaderProgram(TT, oT, IT, iT, kT) {
        let WT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const XT = (0, zT.A)(this._gl);
        return XT._contextWasLost = this._contextWasLost, XT.validateShaderPrograms = this.validateShaderPrograms, (0, zT.t)(TT, oT, IT, iT, kT || this._gl, WT)
      }
      inlineShaderCode(TT) {
        return TT
      }
      createPipelineContext(TT) {
        if (this._gl) {
          (0, zT.A)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const oT = (0, zT.o)(this._gl, TT);
        return oT.engine = this, oT
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(TT) {
        return (0, zT.f)(TT, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(TT, oT, IT, iT, kT, WT, XT, BT, FT, ST, DT) {
        const LT = (0, zT.A)(this._gl);
        return LT._contextWasLost = this._contextWasLost, LT.validateShaderPrograms = this.validateShaderPrograms, LT._createShaderProgramInjection = this._createShaderProgram.bind(this), LT.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), LT.createShaderProgramInjection = this.createShaderProgram.bind(this), LT.loadFileInjection = this._loadFile.bind(this), (0, zT.j)(TT, oT, IT, iT, kT, WT, XT, BT, FT, ST, DT)
      }
      _createShaderProgram(TT, oT, IT, iT) {
        let kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, zT.b)(TT, oT, IT, iT, kT)
      }
      _isRenderingStateCompiled(TT) {
        return !this._isDisposed && (0, zT.g)(TT, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(TT, oT) {
        (0, zT.c)(TT, oT)
      }
      getUniforms(TT, oT) {
        const IT = new Array,
          iT = TT;
        for (let zT = 0; zT < oT.length; zT++) IT.push(this._gl.getUniformLocation(iT.program, oT[zT]));
        return IT
      }
      getAttributes(TT, oT) {
        const IT = [],
          iT = TT;
        for (let kT = 0; kT < oT.length; kT++) try {
          IT.push(this._gl.getAttribLocation(iT.program, oT[kT]))
        } catch (zT) {
          IT.push(-1)
        }
        return IT
      }
      enableEffect(TT) {
        (TT = null !== TT && (0, WT.d)(TT) ? TT.effect : TT) && TT !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(TT), this._currentEffect = TT, TT.onBind && TT.onBind(TT), TT._onBindObservable && TT._onBindObservable.notifyObservers(TT))
      }
      setInt(TT, oT) {
        return !!TT && (this._gl.uniform1i(TT, oT), !0)
      }
      setInt2(TT, oT, IT) {
        return !!TT && (this._gl.uniform2i(TT, oT, IT), !0)
      }
      setInt3(TT, oT, IT, iT) {
        return !!TT && (this._gl.uniform3i(TT, oT, IT, iT), !0)
      }
      setInt4(TT, oT, IT, iT, zT) {
        return !!TT && (this._gl.uniform4i(TT, oT, IT, iT, zT), !0)
      }
      setIntArray(TT, oT) {
        return !!TT && (this._gl.uniform1iv(TT, oT), !0)
      }
      setIntArray2(TT, oT) {
        return !(!TT || oT.length % 2 !== 0) && (this._gl.uniform2iv(TT, oT), !0)
      }
      setIntArray3(TT, oT) {
        return !(!TT || oT.length % 3 !== 0) && (this._gl.uniform3iv(TT, oT), !0)
      }
      setIntArray4(TT, oT) {
        return !(!TT || oT.length % 4 !== 0) && (this._gl.uniform4iv(TT, oT), !0)
      }
      setUInt(TT, oT) {
        return !!TT && (this._gl.uniform1ui(TT, oT), !0)
      }
      setUInt2(TT, oT, IT) {
        return !!TT && (this._gl.uniform2ui(TT, oT, IT), !0)
      }
      setUInt3(TT, oT, IT, iT) {
        return !!TT && (this._gl.uniform3ui(TT, oT, IT, iT), !0)
      }
      setUInt4(TT, oT, IT, iT, zT) {
        return !!TT && (this._gl.uniform4ui(TT, oT, IT, iT, zT), !0)
      }
      setUIntArray(TT, oT) {
        return !!TT && (this._gl.uniform1uiv(TT, oT), !0)
      }
      setUIntArray2(TT, oT) {
        return !(!TT || oT.length % 2 !== 0) && (this._gl.uniform2uiv(TT, oT), !0)
      }
      setUIntArray3(TT, oT) {
        return !(!TT || oT.length % 3 !== 0) && (this._gl.uniform3uiv(TT, oT), !0)
      }
      setUIntArray4(TT, oT) {
        return !(!TT || oT.length % 4 !== 0) && (this._gl.uniform4uiv(TT, oT), !0)
      }
      setArray(TT, oT) {
        return !!TT && (!(oT.length < 1) && (this._gl.uniform1fv(TT, oT), !0))
      }
      setArray2(TT, oT) {
        return !(!TT || oT.length % 2 !== 0) && (this._gl.uniform2fv(TT, oT), !0)
      }
      setArray3(TT, oT) {
        return !(!TT || oT.length % 3 !== 0) && (this._gl.uniform3fv(TT, oT), !0)
      }
      setArray4(TT, oT) {
        return !(!TT || oT.length % 4 !== 0) && (this._gl.uniform4fv(TT, oT), !0)
      }
      setMatrices(TT, oT) {
        return !!TT && (this._gl.uniformMatrix4fv(TT, !1, oT), !0)
      }
      setMatrix3x3(TT, oT) {
        return !!TT && (this._gl.uniformMatrix3fv(TT, !1, oT), !0)
      }
      setMatrix2x2(TT, oT) {
        return !!TT && (this._gl.uniformMatrix2fv(TT, !1, oT), !0)
      }
      setFloat(TT, oT) {
        return !!TT && (this._gl.uniform1f(TT, oT), !0)
      }
      setFloat2(TT, oT, IT) {
        return !!TT && (this._gl.uniform2f(TT, oT, IT), !0)
      }
      setFloat3(TT, oT, IT, iT) {
        return !!TT && (this._gl.uniform3f(TT, oT, IT, iT), !0)
      }
      setFloat4(TT, oT, IT, iT, zT) {
        return !!TT && (this._gl.uniform4f(TT, oT, IT, iT, zT), !0)
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
      _getSamplingParameters(TT, oT) {
        const IT = this._gl;
        let iT = IT.NEAREST,
          zT = IT.NEAREST,
          kT = !1;
        switch (TT) {
          case 11:
            iT = IT.LINEAR, zT = oT ? IT.LINEAR_MIPMAP_NEAREST : IT.LINEAR;
            break;
          case 3:
            iT = IT.LINEAR, kT = !0, zT = oT ? IT.LINEAR_MIPMAP_LINEAR : IT.LINEAR;
            break;
          case 8:
            kT = !0, iT = IT.NEAREST, zT = oT ? IT.NEAREST_MIPMAP_LINEAR : IT.NEAREST;
            break;
          case 4:
            iT = IT.NEAREST, zT = oT ? IT.NEAREST_MIPMAP_NEAREST : IT.NEAREST;
            break;
          case 5:
            iT = IT.NEAREST, zT = oT ? IT.LINEAR_MIPMAP_NEAREST : IT.LINEAR;
            break;
          case 6:
            kT = !0, iT = IT.NEAREST, zT = oT ? IT.LINEAR_MIPMAP_LINEAR : IT.LINEAR;
            break;
          case 7:
            iT = IT.NEAREST, zT = IT.LINEAR;
            break;
          case 1:
            iT = IT.NEAREST, zT = IT.NEAREST;
            break;
          case 9:
            iT = IT.LINEAR, zT = oT ? IT.NEAREST_MIPMAP_NEAREST : IT.NEAREST;
            break;
          case 10:
            kT = !0, iT = IT.LINEAR, zT = oT ? IT.NEAREST_MIPMAP_LINEAR : IT.NEAREST;
            break;
          case 2:
            iT = IT.LINEAR, zT = IT.LINEAR;
            break;
          case 12:
            iT = IT.LINEAR, zT = IT.NEAREST
        }
        return {
          min: zT,
          mag: iT,
          hasMipMaps: kT
        }
      }
      _createTexture() {
        const TT = this._gl.createTexture();
        if (!TT) throw new Error("Unable to create texture");
        return TT
      }
      _createHardwareTexture() {
        return new cT.c(this._createTexture(), this._gl)
      }
      _createInternalTexture(TT, oT) {
        let IT, iT, zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          kT = !1,
          WT = 0,
          BT = 3,
          FT = 5,
          ST = !1,
          DT = 1,
          LT = !1,
          xT = 0,
          cT = !1;
        void 0 !== oT && "object" === typeof oT ? (IT = !!oT.generateMipMaps, kT = !!oT.createMipMaps, WT = void 0 === oT.type ? 0 : oT.type, BT = void 0 === oT.samplingMode ? 3 : oT.samplingMode, FT = void 0 === oT.format ? 5 : oT.format, ST = void 0 !== oT.useSRGBBuffer && oT.useSRGBBuffer, DT = oT.samples ?? 1, iT = oT.label, LT = !!oT.createMSAATexture, xT = oT.comparisonFunction || 0, cT = !!oT.isCube) : IT = !!oT, ST && (ST = this._caps.supportSRGBBuffers && (this.rK > 1 || this.isWebGPU)), (1 !== WT || this._caps.textureFloatLinearFiltering) && (2 !== WT || this._caps.textureHalfFloatLinearFiltering) || (BT = 1), 1 !== WT || this._caps.textureFloat || (WT = 0, XT.d.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const MT = (0, AT.f)(FT),
          rT = (0, AT.d)(FT),
          gT = this._gl,
          hT = new KT.e(this, zT),
          wT = TT.width || TT,
          mT = TT.height || TT,
          eT = TT.depth || 0,
          RT = TT.layers || 0,
          uT = this._getSamplingParameters(BT, (IT || kT) && !MT),
          vT = 0 !== RT ? gT.TEXTURE_2D_ARRAY : 0 !== eT ? gT.TEXTURE_3D : cT ? gT.TEXTURE_CUBE_MAP : gT.TEXTURE_2D,
          ET = MT ? this._getInternalFormatFromDepthTextureFormat(FT, !0, rT) : this._getRGBABufferInternalSizedFormat(WT, FT, ST),
          fT = MT ? rT ? gT.DEPTH_STENCIL : gT.DEPTH_COMPONENT : this._getInternalFormat(FT),
          CT = MT ? this._getWebGLTextureTypeFromDepthTextureFormat(FT) : this._getWebGLTextureType(WT);
        if (this._bindTextureDirectly(vT, hT), 0 !== RT) hT.is2DArray = !0, gT.texImage3D(vT, 0, ET, wT, mT, RT, 0, fT, CT, null);
        else if (0 !== eT) hT.is3D = !0, gT.texImage3D(vT, 0, ET, wT, mT, eT, 0, fT, CT, null);
        else if (cT) {
          hT.isCube = !0;
          for (let TT = 0; TT < 6; TT++) gT.texImage2D(gT.TEXTURE_CUBE_MAP_POSITIVE_X + TT, 0, ET, wT, mT, 0, fT, CT, null)
        } else gT.texImage2D(vT, 0, ET, wT, mT, 0, fT, CT, null);
        if (gT.texParameteri(vT, gT.TEXTURE_MAG_FILTER, uT.mag), gT.texParameteri(vT, gT.TEXTURE_MIN_FILTER, uT.min), gT.texParameteri(vT, gT.TEXTURE_WRAP_S, gT.CLAMP_TO_EDGE), gT.texParameteri(vT, gT.TEXTURE_WRAP_T, gT.CLAMP_TO_EDGE), MT && this.rK > 1 && (0 === xT ? (gT.texParameteri(vT, gT.TEXTURE_COMPARE_FUNC, 515), gT.texParameteri(vT, gT.TEXTURE_COMPARE_MODE, gT.NONE)) : (gT.texParameteri(vT, gT.TEXTURE_COMPARE_FUNC, xT), gT.texParameteri(vT, gT.TEXTURE_COMPARE_MODE, gT.COMPARE_REF_TO_TEXTURE))), (IT || kT) && this._gl.generateMipmap(vT), this._bindTextureDirectly(vT, null), hT._useSRGBBuffer = ST, hT.baseWidth = wT, hT.baseHeight = mT, hT.width = wT, hT.height = mT, hT.depth = RT || eT, hT.isReady = !0, hT.samples = DT, hT.generateMipMaps = IT, hT.samplingMode = BT, hT.type = WT, hT.format = FT, hT.label = iT, hT.comparisonFunction = xT, this._internalTexturesCache.push(hT), LT) {
          let TT;
          if (TT = (0, AT.f)(hT.format) ? this._setupFramebufferDepthAttachments((0, AT.d)(hT.format), 19 !== hT.format, hT.width, hT.height, DT, hT.format, !0) : this._createRenderBuffer(hT.width, hT.height, DT, -1, this._getRGBABufferInternalSizedFormat(hT.type, hT.format, hT._useSRGBBuffer), -1), !TT) throw new Error("Unable to create render buffer");
          hT._autoMSAAManagement = !0;
          let oT = hT._hardwareTexture;
          oT || (oT = hT._hardwareTexture = this._createHardwareTexture()), oT.addMSAARenderBuffer(TT)
        }
        return hT
      }
      _getUseSRGBBuffer(TT, oT) {
        return TT && this._caps.supportSRGBBuffers && (this.rK > 1 || oT)
      }
      createTexture(TT, oT, IT, iT) {
        var zT = this;
        let kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          WT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          XT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          BT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          FT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          ST = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          DT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          LT = arguments.length > 11 ? arguments[11] : void 0,
          xT = arguments.length > 12 ? arguments[12] : void 0,
          cT = arguments.length > 13 ? arguments[13] : void 0,
          MT = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(TT, oT, IT, iT, kT, WT, XT, (function() {
          for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
          return zT._prepareWebGLTexture(...oT, ST)
        }), ((TT, oT, IT, zT, kT, WT) => {
          const XT = this._gl,
            BT = IT.width === TT && IT.height === oT;
          kT._creationFlags = cT ?? 0;
          const FT = this._getTexImageParametersForCreateTexture(kT.format, kT._useSRGBBuffer);
          if (BT) return XT.texImage2D(XT.TEXTURE_2D, 0, FT.internalFormat, FT.format, FT.type, IT), !1;
          const ST = this._caps.maxTextureSize;
          if (IT.width > ST || IT.height > ST || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = TT, this._workingCanvas.height = oT, this._workingContext.drawImage(IT, 0, 0, IT.width, IT.height, 0, 0, TT, oT), XT.texImage2D(XT.TEXTURE_2D, 0, FT.internalFormat, FT.format, FT.type, this._workingCanvas), kT.width = TT, kT.height = oT, !1);
          {
            const TT = new KT.e(this, 2);
            this._bindTextureDirectly(XT.TEXTURE_2D, TT, !0), XT.texImage2D(XT.TEXTURE_2D, 0, FT.internalFormat, FT.format, FT.type, IT), this._rescaleTexture(TT, kT, iT, FT.format, (() => {
              this._releaseTexture(TT), this._bindTextureDirectly(XT.TEXTURE_2D, kT, !0), WT()
            }))
          }
          return !0
        }), BT, FT, ST, DT, LT, xT, MT)
      }
      _getTexImageParametersForCreateTexture(TT, oT) {
        let IT, iT;
        return 1 === this.rK ? (IT = this._getInternalFormat(TT, oT), iT = IT) : (IT = this._getInternalFormat(TT, !1), iT = this._getRGBABufferInternalSizedFormat(0, TT, oT)), {
          internalFormat: iT,
          format: IT,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(TT, oT, IT, iT, zT) {}
      _unpackFlipY(TT) {
        this._unpackFlipYCached !== TT && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, TT ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = TT))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(TT) {
        return TT.isCube ? this._gl.TEXTURE_CUBE_MAP : TT.is3D ? this._gl.TEXTURE_3D : TT.is2DArray || TT.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const iT = this._getTextureTarget(oT),
          zT = this._getSamplingParameters(TT, oT.useMipMaps || IT);
        this._setTextureParameterInteger(iT, this._gl.TEXTURE_MAG_FILTER, zT.mag, oT), this._setTextureParameterInteger(iT, this._gl.TEXTURE_MIN_FILTER, zT.min), IT && zT.hasMipMaps && (oT.generateMipMaps = !0, this._gl.generateMipmap(iT)), this._bindTextureDirectly(iT, null), oT.samplingMode = TT
      }
      updateTextureDimensions(TT, oT, IT) {}
      updateTextureWrappingMode(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const zT = this._getTextureTarget(TT);
        null !== oT && (this._setTextureParameterInteger(zT, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(oT), TT), TT._cachedWrapU = oT), null !== IT && (this._setTextureParameterInteger(zT, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(IT), TT), TT._cachedWrapV = IT), (TT.is2DArray || TT.is3D) && null !== iT && (this._setTextureParameterInteger(zT, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(iT), TT), TT._cachedWrapR = iT), this._bindTextureDirectly(zT, null)
      }
      _uploadCompressedDataToTextureDirectly(TT, oT, IT, iT, zT) {
        let kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          WT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const XT = this._gl;
        let BT = XT.TEXTURE_2D;
        if (TT.isCube && (BT = XT.TEXTURE_CUBE_MAP_POSITIVE_X + kT), TT._useSRGBBuffer) switch (oT) {
          case 37492:
          case 36196:
            this._caps.etc2 ? oT = XT.COMPRESSED_SRGB8_ETC2 : TT._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? oT = XT.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : TT._useSRGBBuffer = !1;
            break;
          case 36492:
            oT = XT.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            oT = XT.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            oT = XT.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            oT = XT.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            oT = XT.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            oT = XT.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            oT = XT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            oT = XT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            oT = XT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            oT = XT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            oT = XT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            oT = XT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            oT = XT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            oT = XT.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            oT = XT.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? oT = XT.COMPRESSED_SRGB_S3TC_DXT1_EXT : TT._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? oT = XT.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : TT._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? oT = XT.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : TT._useSRGBBuffer = !1;
            break;
          default:
            TT._useSRGBBuffer = !1
        }
        if (TT.generateMipMaps) {
          const kT = TT._hardwareTexture;
          kT.memoryAllocated || (XT.texStorage2D(TT.isCube ? XT.TEXTURE_CUBE_MAP : XT.TEXTURE_2D, Math.floor(Math.log2(Math.max(IT, iT))) + 1, oT, TT.width, TT.height), kT.memoryAllocated = !0), this._gl.compressedTexSubImage2D(BT, WT, 0, 0, IT, iT, oT, zT)
        } else this._gl.compressedTexImage2D(BT, WT, oT, IT, iT, 0, zT)
      }
      _uploadDataToTextureDirectly(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          zT = arguments.length > 4 ? arguments[4] : void 0,
          kT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const WT = this._gl,
          XT = this._getWebGLTextureType(TT.type),
          BT = this._getInternalFormat(TT.format),
          FT = void 0 === zT ? this._getRGBABufferInternalSizedFormat(TT.type, TT.format, TT._useSRGBBuffer) : this._getInternalFormat(zT, TT._useSRGBBuffer);
        this._unpackFlipY(TT.invertY);
        let ST = WT.TEXTURE_2D;
        TT.isCube && (ST = WT.TEXTURE_CUBE_MAP_POSITIVE_X + IT);
        const DT = Math.round(Math.log(TT.width) * Math.LOG2E),
          LT = Math.round(Math.log(TT.height) * Math.LOG2E),
          xT = kT ? TT.width : Math.pow(2, Math.max(DT - iT, 0)),
          cT = kT ? TT.height : Math.pow(2, Math.max(LT - iT, 0));
        WT.texImage2D(ST, iT, FT, xT, cT, 0, BT, XT, oT)
      }
      updateTextureData(TT, oT, IT, iT, zT, kT) {
        let WT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          XT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          BT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const FT = this._gl,
          ST = this._getWebGLTextureType(TT.type),
          DT = this._getInternalFormat(TT.format);
        this._unpackFlipY(TT.invertY);
        let LT = FT.TEXTURE_2D,
          xT = FT.TEXTURE_2D;
        TT.isCube && (xT = FT.TEXTURE_CUBE_MAP_POSITIVE_X + WT, LT = FT.TEXTURE_CUBE_MAP), this._bindTextureDirectly(LT, TT, !0), FT.texSubImage2D(xT, XT, IT, iT, zT, kT, DT, ST, oT), BT && this._gl.generateMipmap(xT), this._bindTextureDirectly(LT, null)
      }
      _uploadArrayBufferViewToTexture(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const zT = this._gl,
          kT = TT.isCube ? zT.TEXTURE_CUBE_MAP : zT.TEXTURE_2D;
        this._bindTextureDirectly(kT, TT, !0), this._uploadDataToTextureDirectly(TT, oT, IT, iT), this._bindTextureDirectly(kT, null, !0)
      }
      _prepareWebGLTextureContinuation(TT, oT, IT, iT, zT) {
        const kT = this._gl;
        if (!kT) return;
        const WT = this._getSamplingParameters(zT, !IT);
        kT.texParameteri(kT.TEXTURE_2D, kT.TEXTURE_MAG_FILTER, WT.mag), kT.texParameteri(kT.TEXTURE_2D, kT.TEXTURE_MIN_FILTER, WT.min), IT || iT || kT.generateMipmap(kT.TEXTURE_2D), this._bindTextureDirectly(kT.TEXTURE_2D, null), oT && oT.removePendingData(TT), TT.onLoadedObservable.notifyObservers(TT), TT.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT) {
        const ST = this.getCaps().maxTextureSize,
          DT = Math.min(ST, this.needPOTTextures ? (0, xT.e)(iT.width, ST) : iT.width),
          LT = Math.min(ST, this.needPOTTextures ? (0, xT.e)(iT.height, ST) : iT.height),
          cT = this._gl;
        cT && (TT._hardwareTexture ? (this._bindTextureDirectly(cT.TEXTURE_2D, TT, !0), this._unpackFlipY(void 0 === zT || !!zT), TT.baseWidth = iT.width, TT.baseHeight = iT.height, TT.width = DT, TT.height = LT, TT.isReady = !0, TT.type = -1 !== TT.type ? TT.type : 0, TT.format = -1 !== TT.format ? TT.format : FT ?? (".jpg" !== oT || TT._useSRGBBuffer ? 5 : 4), XT(DT, LT, iT, oT, TT, (() => {
          this._prepareWebGLTextureContinuation(TT, IT, kT, WT, BT)
        })) || this._prepareWebGLTextureContinuation(TT, IT, kT, WT, BT)) : IT && IT.removePendingData(TT))
      }
      _getInternalFormatFromDepthTextureFormat(TT, oT, IT) {
        const iT = this._gl;
        if (!oT) return iT.STENCIL_INDEX8;
        let zT = IT ? iT.DEPTH_STENCIL : iT.DEPTH_COMPONENT;
        return this.rK > 1 ? 15 === TT ? zT = iT.DEPTH_COMPONENT16 : 16 === TT ? zT = iT.DEPTH_COMPONENT24 : 17 === TT || 13 === TT ? zT = IT ? iT.DEPTH24_STENCIL8 : iT.DEPTH_COMPONENT24 : 14 === TT ? zT = iT.DEPTH_COMPONENT32F : 18 === TT && (zT = IT ? iT.DEPTH32F_STENCIL8 : iT.DEPTH_COMPONENT32F) : zT = iT.DEPTH_COMPONENT16, zT
      }
      _getWebGLTextureTypeFromDepthTextureFormat(TT) {
        const oT = this._gl;
        let IT = oT.UNSIGNED_INT;
        return 15 === TT ? IT = oT.UNSIGNED_SHORT : 17 === TT || 13 === TT ? IT = oT.UNSIGNED_INT_24_8 : 14 === TT ? IT = oT.FLOAT : 18 === TT ? IT = oT.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === TT && (IT = oT.UNSIGNED_BYTE), IT
      }
      _setupFramebufferDepthAttachments(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          kT = arguments.length > 5 ? arguments[5] : void 0,
          WT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const XT = this._gl;
        kT = kT ?? (TT ? 13 : 14);
        const BT = this._getInternalFormatFromDepthTextureFormat(kT, oT, TT);
        return TT && oT ? this._createRenderBuffer(IT, iT, zT, XT.DEPTH_STENCIL, BT, WT ? -1 : XT.DEPTH_STENCIL_ATTACHMENT) : oT ? this._createRenderBuffer(IT, iT, zT, BT, BT, WT ? -1 : XT.DEPTH_ATTACHMENT) : TT ? this._createRenderBuffer(IT, iT, zT, BT, BT, WT ? -1 : XT.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(TT, oT, IT, iT, zT, kT) {
        let WT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const XT = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(XT, TT, oT, IT, iT, zT, kT, WT)
      }
      _updateRenderBuffer(TT, oT, IT, iT, zT, kT, WT) {
        let XT = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const BT = this._gl;
        return BT.bindRenderbuffer(BT.RENDERBUFFER, TT), iT > 1 && BT.renderbufferStorageMultisample ? BT.renderbufferStorageMultisample(BT.RENDERBUFFER, iT, kT, oT, IT) : BT.renderbufferStorage(BT.RENDERBUFFER, zT, oT, IT), -1 !== WT && BT.framebufferRenderbuffer(BT.FRAMEBUFFER, WT, BT.RENDERBUFFER, TT), XT && BT.bindRenderbuffer(BT.RENDERBUFFER, null), TT
      }
      _releaseTexture(TT) {
        this._deleteTexture(TT._hardwareTexture), this.unbindAllTextures();
        const oT = this._internalTexturesCache.indexOf(TT); - 1 !== oT && this._internalTexturesCache.splice(oT, 1), TT._lodTextureHigh && TT._lodTextureHigh.dispose(), TT._lodTextureMid && TT._lodTextureMid.dispose(), TT._lodTextureLow && TT._lodTextureLow.dispose(), TT._irradianceTexture && TT._irradianceTexture.dispose()
      }
      _deleteTexture(TT) {
        TT?.release()
      }
      _setProgram(TT) {
        this._currentProgram !== TT && ((0, zT.l)(TT, this._gl), this._currentProgram = TT)
      }
      bindSamplers(TT) {
        const oT = TT.getPipelineContext();
        this._setProgram(oT.program);
        const IT = TT.getSamplers();
        for (let iT = 0; iT < IT.length; iT++) {
          const oT = TT.getUniform(IT[iT]);
          oT && (this._boundUniforms[iT] = oT)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          zT = !1;
        const kT = oT && oT._associatedChannel > -1;
        IT && kT && (this._activeChannel = oT._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== oT || iT) {
          if (this._activateCurrentTexture(), oT && oT.isMultiview) throw XT.d.Error(["_bindTextureDirectly called with a multiview texture!", TT, oT]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(TT, oT?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = oT, oT && (oT._associatedChannel = this._activeChannel)
        } else IT && (zT = !0, this._activateCurrentTexture());
        return kT && !IT && this._bindSamplerUniformToChannel(oT._associatedChannel, this._activeChannel), zT
      }
      _bindTexture(TT, oT, IT) {
        if (void 0 === TT) return;
        oT && (oT._associatedChannel = TT), this._activeChannel = TT;
        const iT = oT ? this._getTextureTarget(oT) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(iT, oT)
      }
      unbindAllTextures() {
        for (let TT = 0; TT < this._maxSimultaneousTextures; TT++) this._activeChannel = TT, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.rK > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(TT, oT, IT, iT) {
        void 0 !== TT && (oT && (this._boundUniforms[TT] = oT), this._setTexture(TT, IT))
      }
      _bindSamplerUniformToChannel(TT, oT) {
        const IT = this._boundUniforms[TT];
        IT && IT._currentState !== oT && (this._gl.uniform1i(IT, oT), IT._currentState = oT)
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
      _setTexture(TT, oT) {
        let IT, iT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          zT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!oT) return null != this._boundTexturesCache[TT] && (this._activeChannel = TT, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.rK > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (oT.video) {
          this._activeChannel = TT;
          const IT = oT.getInternalTexture();
          IT && (IT._associatedChannel = TT), oT.update()
        } else if (4 === oT.delayLoadState) return oT.delayLoad(), !1;
        IT = zT ? oT.depthStencilTexture : oT.isReady() ? oT.getInternalTexture() : oT.isCube ? this.emptyCubeTexture : oT.is3D ? this.emptyTexture3D : oT.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !iT && IT && (IT._associatedChannel = TT);
        let kT = !0;
        this._boundTexturesCache[TT] === IT && (iT || this._bindSamplerUniformToChannel(IT._associatedChannel, TT), kT = !1), this._activeChannel = TT;
        const WT = this._getTextureTarget(IT);
        if (kT && this._bindTextureDirectly(WT, IT, iT), IT && !IT.isMultiview) {
          if (IT.isCube && IT._cachedCoordinatesMode !== oT.coordinatesMode) {
            IT._cachedCoordinatesMode = oT.coordinatesMode;
            const TT = 3 !== oT.coordinatesMode && 5 !== oT.coordinatesMode ? 1 : 0;
            oT.wrapU = TT, oT.wrapV = TT
          }
          IT._cachedWrapU !== oT.wrapU && (IT._cachedWrapU = oT.wrapU, this._setTextureParameterInteger(WT, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(oT.wrapU), IT)), IT._cachedWrapV !== oT.wrapV && (IT._cachedWrapV = oT.wrapV, this._setTextureParameterInteger(WT, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(oT.wrapV), IT)), IT.is3D && IT._cachedWrapR !== oT.wrapR && (IT._cachedWrapR = oT.wrapR, this._setTextureParameterInteger(WT, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(oT.wrapR), IT)), this._setAnisotropicLevel(WT, IT, oT.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(TT, oT, IT, iT) {
        if (void 0 !== TT && oT) {
          this._textureUnits && this._textureUnits.length === IT.length || (this._textureUnits = new Int32Array(IT.length));
          for (let oT = 0; oT < IT.length; oT++) {
            const iT = IT[oT].getInternalTexture();
            iT ? (this._textureUnits[oT] = TT + oT, iT._associatedChannel = TT + oT) : this._textureUnits[oT] = -1
          }
          this._gl.uniform1iv(oT, this._textureUnits);
          for (let TT = 0; TT < IT.length; TT++) this._setTexture(this._textureUnits[TT], IT[TT], !0)
        }
      }
      _setAnisotropicLevel(TT, oT, IT) {
        const iT = this._caps.textureAnisotropicFilterExtension;
        11 !== oT.samplingMode && 3 !== oT.samplingMode && 2 !== oT.samplingMode && (IT = 1), iT && oT._cachedAnisotropicFilteringLevel !== IT && (this._setTextureParameterFloat(TT, iT.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(IT, this._caps.maxAnisotropy), oT), oT._cachedAnisotropicFilteringLevel = IT)
      }
      _setTextureParameterFloat(TT, oT, IT, iT) {
        this._bindTextureDirectly(TT, iT, !0, !0), this._gl.texParameterf(TT, oT, IT)
      }
      _setTextureParameterInteger(TT, oT, IT, iT) {
        iT && this._bindTextureDirectly(TT, iT, !0, !0), this._gl.texParameteri(TT, oT, IT)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let TT = 0; TT < this._caps.maxVertexAttribs; TT++) this.disableAttributeByIndex(TT)
        } else
          for (let TT = 0, oT = this._vertexAttribArraysEnabled.length; TT < oT; TT++) TT >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[TT] || this.disableAttributeByIndex(TT)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, BT.k)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, zT.x)(this._gl)
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
        const oT = this._gl;
        for (; oT.getError() !== oT.NO_ERROR;);
        let IT = !0;
        const iT = oT.createTexture();
        oT.bindTexture(oT.TEXTURE_2D, iT), oT.texImage2D(oT.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(TT), 1, 1, 0, oT.RGBA, this._getWebGLTextureType(TT), null), oT.texParameteri(oT.TEXTURE_2D, oT.TEXTURE_MIN_FILTER, oT.NEAREST), oT.texParameteri(oT.TEXTURE_2D, oT.TEXTURE_MAG_FILTER, oT.NEAREST);
        const zT = oT.createFramebuffer();
        oT.bindFramebuffer(oT.FRAMEBUFFER, zT), oT.framebufferTexture2D(oT.FRAMEBUFFER, oT.COLOR_ATTACHMENT0, oT.TEXTURE_2D, iT, 0);
        const kT = oT.checkFramebufferStatus(oT.FRAMEBUFFER);
        if (IT = IT && kT === oT.FRAMEBUFFER_COMPLETE, IT = IT && oT.getError() === oT.NO_ERROR, IT && (oT.clear(oT.COLOR_BUFFER_BIT), IT = IT && oT.getError() === oT.NO_ERROR), IT) {
          oT.bindFramebuffer(oT.FRAMEBUFFER, null);
          const TT = oT.RGBA,
            iT = oT.UNSIGNED_BYTE,
            zT = new Uint8Array(4);
          oT.readPixels(0, 0, 1, 1, TT, iT, zT), IT = IT && oT.getError() === oT.NO_ERROR
        }
        for (oT.deleteTexture(iT), oT.deleteFramebuffer(zT), oT.bindFramebuffer(oT.FRAMEBUFFER, null); !IT && oT.getError() !== oT.NO_ERROR;);
        return IT
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
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = oT ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (TT) {
          case 0:
            IT = this._gl.ALPHA;
            break;
          case 1:
            IT = this._gl.LUMINANCE;
            break;
          case 2:
            IT = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            IT = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            IT = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            IT = oT ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            IT = oT ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (TT) {
          case 8:
            IT = this._gl.RED_INTEGER;
            break;
          case 9:
            IT = this._gl.RG_INTEGER;
            break;
          case 10:
            IT = this._gl.RGB_INTEGER;
            break;
          case 11:
            IT = this._gl.RGBA_INTEGER
        }
        return IT
      }
      _getRGBABufferInternalSizedFormat(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== oT) switch (oT) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return IT ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (TT) {
          case 3:
            switch (oT) {
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
            switch (oT) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return IT ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return IT ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (oT) {
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
            switch (oT) {
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
            switch (oT) {
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
            switch (oT) {
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
            switch (oT) {
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
            switch (oT) {
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
            switch (oT) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return IT ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(TT, oT, IT, iT) {
        let zT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          kT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          WT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const BT = zT ? 4 : 3,
          FT = zT ? this._gl.RGBA : this._gl.RGB,
          ST = IT * iT * BT;
        if (WT) {
          if (WT.length < ST) return XT.d.Error(`Data buffer is too small to store the read pixels (${WT.length} should be more than ${ST})`), Promise.resolve(WT)
        } else WT = new Uint8Array(ST);
        return kT && this.flushFramebuffer(), this._gl.readPixels(TT, oT, IT, iT, FT, this._gl.UNSIGNED_BYTE, WT), Promise.resolve(WT)
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
          const TT = kT.b._CreateCanvas(1, 1),
            oT = TT.getContext("webgl") || TT.getContext("experimental-webgl");
          this._IsSupported = null != oT && !!globalThis.WebGLRenderingContext
        } catch (TT) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const TT = kT.b._CreateCanvas(1, 1),
            oT = TT.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || TT.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !oT
        } catch (TT) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    wT._TempClearColorUint32 = new Uint32Array(4), wT._TempClearColorInt32 = new Int32Array(4), wT._TempClearColorFloat32 = new Float32Array(4), wT.ExceptionList = [{
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
    }], wT._ConcatenateShader = MT.f, wT._IsSupported = null, wT._HasMajorPerformanceCaveat = null
  },
  38966: (TT, oT, IT) => {
    var iT;
    IT.d(oT, {
        b: () => zT
      }),
      function(TT) {
        TT[TT.PointerMove = 0] = "PointerMove", TT[TT.PointerDown = 1] = "PointerDown", TT[TT.PointerUp = 2] = "PointerUp"
      }(iT || (iT = {}));
    class zT {}
    zT.DOM_DELTA_PIXEL = 0, zT.DOM_DELTA_LINE = 1, zT.DOM_DELTA_PAGE = 2
  },
  38963: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT,
      d: () => kT,
      h: () => zT
    });
    class iT {}
    iT.KEYDOWN = 1, iT.KEYUP = 2;
    class zT {
      constructor(TT, oT) {
        this.type = TT, this.event = oT
      }
    }
    class kT extends zT {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(TT) {
        this.skipOnKeyboardObservable = TT
      }
      constructor(TT, oT) {
        super(TT, oT), this.type = TT, this.event = oT, this.skipOnKeyboardObservable = !1
      }
    }
  },
  38957: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT,
      e: () => WT,
      h: () => XT
    });
    var iT = IT(36118);
    class zT {}
    zT.POINTERDOWN = 1, zT.POINTERUP = 2, zT.POINTERMOVE = 4, zT.POINTERWHEEL = 8, zT.POINTERPICK = 16, zT.POINTERTAP = 32, zT.POINTERDOUBLETAP = 64;
    class kT {
      constructor(TT, oT) {
        this.type = TT, this.event = oT
      }
    }
    class WT extends kT {
      constructor(TT, oT, IT, zT) {
        super(TT, oT), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new iT.j(IT, zT)
      }
    }
    class XT extends kT {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(TT, oT), this._pickInfo = IT, this._inputManager = iT
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  38976: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT
    });
    class iT {
      static CompareLightsPriority(TT, oT) {
        return TT.shadowEnabled !== oT.shadowEnabled ? (oT.shadowEnabled ? 1 : 0) - (TT.shadowEnabled ? 1 : 0) : oT.renderPriority - TT.renderPriority
      }
    }
    iT.FALLOFF_DEFAULT = 0, iT.FALLOFF_PHYSICAL = 1, iT.FALLOFF_GLTF = 2, iT.FALLOFF_STANDARD = 3, iT.LIGHTMAP_DEFAULT = 0, iT.LIGHTMAP_SPECULAR = 1, iT.LIGHTMAP_SHADOWSONLY = 2, iT.INTENSITYMODE_AUTOMATIC = 0, iT.INTENSITYMODE_LUMINOUSPOWER = 1, iT.INTENSITYMODE_LUMINOUSINTENSITY = 2, iT.INTENSITYMODE_ILLUMINANCE = 3, iT.INTENSITYMODE_LUMINANCE = 4, iT.LIGHTTYPEID_POINTLIGHT = 0, iT.LIGHTTYPEID_DIRECTIONALLIGHT = 1, iT.LIGHTTYPEID_SPOTLIGHT = 2, iT.LIGHTTYPEID_HEMISPHERICLIGHT = 3, iT.LIGHTTYPEID_RECT_AREALIGHT = 4, iT.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  38594: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT
    });
    var iT, zT = IT(36149),
      kT = IT(38599);
    ! function(TT) {
      TT[TT.Unknown = 0] = "Unknown", TT[TT.Url = 1] = "Url", TT[TT.Temp = 2] = "Temp", TT[TT.Raw = 3] = "Raw", TT[TT.Dynamic = 4] = "Dynamic", TT[TT.RenderTarget = 5] = "RenderTarget", TT[TT.MultiRenderTarget = 6] = "MultiRenderTarget", TT[TT.Cube = 7] = "Cube", TT[TT.CubeRaw = 8] = "CubeRaw", TT[TT.CubePrefiltered = 9] = "CubePrefiltered", TT[TT.Raw3D = 10] = "Raw3D", TT[TT.Raw2DArray = 11] = "Raw2DArray", TT[TT.DepthStencil = 12] = "DepthStencil", TT[TT.CubeRawRGBD = 13] = "CubeRawRGBD", TT[TT.Depth = 14] = "Depth", TT[TT.External = 15] = "External"
    }(iT || (iT = {}));
    class WT extends kT.e {
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
      Zc() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new zT.d, this.onErrorObservable = new zT.d, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = TT, this._source = oT, this._uniqueId = WT._Counter++, IT || (this._hardwareTexture = TT._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, TT, oT, IT), this.width = TT, this.height = oT, this.depth = IT, this.baseWidth = TT, this.baseHeight = oT, this.baseDepth = IT, this._size = TT * oT * IT
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const TT = this.onRebuildCallback(this),
            oT = oT => {
              oT._swapAndDie(this, !1), this.isReady = TT.isReady
            };
          return void(TT.isAsync ? TT.proxy.then(oT) : oT(TT.proxy))
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
                const oT = this._bufferViewArray[TT];
                oT && this._engine.updateRawTexture(this, oT, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, TT)
              }
            this.isReady = !0;
            break;
          case 10:
            TT = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), TT._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (TT = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), TT._swapAndDie(this, !1), this._bufferViewArray)
              for (let TT = 0; TT < this._bufferViewArray.length; TT++) {
                const oT = this._bufferViewArray[TT];
                oT && this._engine.updateRawTexture2DArray(this, oT, this.format, this.invertY, this._compression, this.type, TT)
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
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(TT._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), TT._hardwareTexture = this._hardwareTexture, TT._setUniqueId(WT._Counter++), oT && (TT._isRGBD = this._isRGBD), this._lodTextureHigh && (TT._lodTextureHigh && TT._lodTextureHigh.dispose(), TT._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (TT._lodTextureMid && TT._lodTextureMid.dispose(), TT._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (TT._lodTextureLow && TT._lodTextureLow.dispose(), TT._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (TT._irradianceTexture && TT._irradianceTexture.dispose(), TT._irradianceTexture = this._irradianceTexture);
        const IT = this._engine.getLoadedTexturesCache();
        let iT = IT.indexOf(this); - 1 !== iT && IT.splice(iT, 1), iT = IT.indexOf(TT), -1 === iT && IT.push(TT)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    WT._Counter = 0
  },
  38708: (TT, oT, IT) => {
    function iT(TT) {
      return 13 === TT || 14 === TT || 15 === TT || 16 === TT || 17 === TT || 18 === TT || 19 === TT
    }

    function zT(TT) {
      return 8 === TT || 9 === TT || 10 === TT || 11 === TT
    }

    function kT(TT) {
      return 0 === TT || 5 === TT || 7 === TT || 11 === TT
    }

    function WT(TT) {
      return 13 === TT || 17 === TT || 18 === TT || 19 === TT
    }
    IT.d(oT, {
      d: () => WT,
      f: () => iT,
      i: () => zT,
      m: () => kT
    })
  },
  38599: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT
    });
    class iT {
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
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = TT, this._cachedWrapV = oT, this._cachedWrapR = IT, this._cachedAnisotropicFilteringLevel = iT, this.samplingMode = zT, this._comparisonFunction = kT, this
      }
      compareSampler(TT) {
        return this._cachedWrapU === TT._cachedWrapU && this._cachedWrapV === TT._cachedWrapV && this._cachedWrapR === TT._cachedWrapR && this._cachedAnisotropicFilteringLevel === TT._cachedAnisotropicFilteringLevel && this.samplingMode === TT.samplingMode && this._comparisonFunction === TT._comparisonFunction && this._useMipMaps === TT._useMipMaps
      }
    }
  },
  38902: (TT, oT, IT) => {
    function iT(TT) {
      TT.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    IT.d(oT, {
      e: () => iT
    })
  },
  38679: (TT, oT, IT) => {
    function iT(TT) {
      return void 0 === TT.getPipelineContext
    }
    IT.d(oT, {
      d: () => iT
    })
  },
  39105: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT
    });
    var iT = IT(38653);
    class zT {
      static GetEffect(TT) {
        return void 0 === TT.getPipelineContext ? TT.effect : TT
      }
      constructor(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = TT.createDrawContext(), oT && (this.materialContext = TT.createMaterialContext())
      }
      setEffect(TT, oT) {
        let IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        IT || this.effect === TT || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = TT, void 0 !== oT && (this.defines = oT), IT && this.drawContext?.reset()
      }
      dispose() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const oT = this.effect;
          TT ? oT.dispose() : iT.c.SetImmediate((() => {
            oT.Zc().onEndFrameObservable.addOnce((() => {
              oT.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  38624: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => DT,
      f: () => xT,
      h: () => FT,
      i: () => ST
    });
    var iT = IT(38626),
      zT = IT(38631),
      kT = IT(38617),
      WT = IT(37660),
      XT = IT(38647),
      BT = IT(38635);

    function FT(TT, oT) {
      return (0, zT.A)(oT).cachedPipelines[TT]
    }

    function ST(TT) {
      const oT = TT._name,
        IT = TT.context;
      if (oT && IT) {
        const TT = (0, zT.A)(IT),
          iT = TT.cachedPipelines[oT];
        iT?.dispose(), delete TT.cachedPipelines[oT]
      }
    }

    function DT(TT, oT, IT, zT, kT, WT, BT) {
      let FT, ST;
      const DT = (0, iT.k)() ? WT?.getHostDocument() : null;
      FT = "string" === typeof oT ? oT : "string" === typeof oT.vertexSource ? "source:" + oT.vertexSource : "string" === typeof oT.vertexElement ? DT?.getElementById(oT.vertexElement) || oT.vertexElement : oT.vertex || oT, ST = "string" === typeof oT ? oT : "string" === typeof oT.fragmentSource ? "source:" + oT.fragmentSource : "string" === typeof oT.fragmentElement ? DT?.getElementById(oT.fragmentElement) || oT.fragmentElement : oT.fragment || oT;
      const xT = [void 0, void 0],
        cT = () => {
          if (xT[0] && xT[1]) {
            const [iT, FT] = xT;
            (0, XT.f)(TT), (0, XT.j)(iT, TT, ((iT, ST) => {
              BT && (BT._vertexSourceCodeBeforeMigration = ST), IT && (iT = IT("vertex", iT)), TT.isFragment = !0, (0, XT.j)(FT, TT, ((WT, FT) => {
                BT && (BT._fragmentSourceCodeBeforeMigration = FT), IT && (WT = IT("fragment", WT));
                const ST = (0, XT.b)(iT, WT, TT);
                TT = null;
                const DT = function(TT, oT, IT, iT) {
                  if (IT) {
                    return {
                      vertexSourceCode: (1 === iT ? "//" : "") + "#define SHADER_NAME vertex:" + (IT.vertexElement || IT.vertex || IT.spectorName || IT) + "\n" + TT,
                      fragmentSourceCode: (1 === iT ? "//" : "") + "#define SHADER_NAME fragment:" + (IT.fragmentElement || IT.fragment || IT.spectorName || IT) + "\n" + oT
                    }
                  }
                  return {
                    vertexSourceCode: TT,
                    fragmentSourceCode: oT
                  }
                }(ST.vertexCode, ST.fragmentCode, oT, kT);
                zT?.(DT.vertexSourceCode, DT.fragmentSourceCode)
              }), WT)
            }), WT)
          }
        };
      LT(FT, "Vertex", "", (TT => {
        BT && (BT._rawVertexSourceCode = TT), xT[0] = TT, cT()
      }), kT), LT(ST, "Fragment", "Pixel", (TT => {
        BT && (BT._rawFragmentSourceCode = TT), xT[1] = TT, cT()
      }), kT)
    }

    function LT(TT, oT, IT, zT, WT, XT) {
      if ("undefined" !== typeof HTMLElement && TT instanceof HTMLElement) {
        return void zT((0, iT.d)(TT))
      }
      if ("source:" === TT.substring(0, 7)) return void zT(TT.substring(7));
      if ("base64:" === TT.substring(0, 7)) {
        return void zT(window.atob(TT.substring(7)))
      }
      const FT = kT.c.GetShadersStore(WT);
      if (FT[TT + oT + "Shader"]) return void zT(FT[TT + oT + "Shader"]);
      if (IT && FT[TT + IT + "Shader"]) return void zT(FT[TT + IT + "Shader"]);
      let ST;
      if (ST = "." === TT[0] || "/" === TT[0] || TT.indexOf("http") > -1 ? TT : kT.c.GetShadersRepository(WT) + TT, !(XT = XT || BT.m)) throw new Error("loadFileInjection is not defined");
      XT(ST + "." + oT.toLowerCase() + ".fx", zT)
    }
    const xT = (TT, oT, IT, iT) => {
      try {
        const kT = TT.context ? (0, zT.A)(TT.context) : null;
        kT && (kT.disableParallelShaderCompile = TT.disableParallelCompilation);
        const WT = TT.existingPipelineContext || oT(TT.shaderProcessingContext);
        return WT._name = TT.name, TT.name && kT && (kT.cachedPipelines[TT.name] = WT), IT(WT, TT.vertex, TT.fragment, !!TT.createAsRaw, "", "", TT.rebuildRebind, TT.defines, TT.transformFeedbackVaryings, "", (() => {
          iT(WT, (() => {
            TT.onRenderingStateCompiled?.(WT)
          }))
        })), WT
      } catch (kT) {
        throw WT.d.Error("Error compiling effect"), kT
      }
    }
  },
  38609: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => BT
    });
    var iT = IT(36149),
      zT = IT(37660),
      kT = IT(38617),
      WT = IT(38624),
      XT = IT(38653);
    class BT {
      static get ShadersRepository() {
        return kT.c.ShadersRepository
      }
      static set ShadersRepository(TT) {
        kT.c.ShadersRepository = TT
      }
      get IIT() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new iT.d), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(TT, oT, IT) {
        let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          kT = arguments.length > 4 ? arguments[4] : void 0,
          XT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          FT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          ST = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          DT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          LT = arguments.length > 9 ? arguments[9] : void 0,
          xT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          cT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          KT = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new iT.d, this.onErrorObservable = new iT.d, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = TT, this._key = xT;
        const MT = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let rT;
        if (oT.attributes) {
          const TT = oT;
          if (this._engine = IT, this._attributesNames = TT.attributes, this._uniformsNames = TT.uniformsNames.concat(TT.samplers), this._samplerList = TT.samplers.slice(), this.defines = TT.defines, this.onError = TT.onError, this.onCompiled = TT.onCompiled, this._fallbacks = TT.fallbacks, this._indexParameters = TT.indexParameters, this._transformFeedbackVaryings = TT.transformFeedbackVaryings || null, this._multiTarget = !!TT.multiTarget, this._shaderLanguage = TT.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!TT.disableParallelShaderCompilation, TT.uniformBuffersNames) {
            this._uniformBuffersNamesList = TT.uniformBuffersNames.slice();
            for (let oT = 0; oT < TT.uniformBuffersNames.length; oT++) this._uniformBuffersNames[TT.uniformBuffersNames[oT]] = oT
          }
          this._processFinalCode = TT.processFinalCode ?? null, this._processCodeAfterIncludes = TT.processCodeAfterIncludes ?? void 0, KT = TT.extraInitializationsAsync, rT = TT.existingPipelineContext
        } else this._engine = kT, this.defines = null == XT ? "" : XT, this._uniformsNames = IT.concat(zT), this._samplerList = zT ? zT.slice() : [], this._attributesNames = oT, this._uniformBuffersNamesList = [], this._shaderLanguage = cT, this.onError = DT, this.onCompiled = ST, this._indexParameters = LT, this._fallbacks = FT;
        "WEBGL2" === this._engine.shaderPlatformName && (rT = (0, WT.h)(MT, this._engine._gl) ?? rT), this._attributeLocationByName = {}, this.uniqueId = BT._UniqueIdSeed++, rT ? (this._pipelineContext = rT, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, KT).catch((TT => {
          const oT = TT?.message ?? String(TT),
            IT = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${oT}`);
          TT && "string" === typeof TT.stack && (IT.stack = `${IT.message}\nCaused by: ${TT.stack}`), this._processCompilationErrors(IT)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.IIT || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          iT = arguments.length > 3 ? arguments[3] : void 0;
        iT && await iT(), this._processingContext = IT || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const zT = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: TT ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: kT.c.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: kT.c.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          lIT: this._engine.lIT,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, WT.e)(zT, this.name, this._processFinalCode, ((TT, IT) => {
          this._vertexSourceCode = TT, this._fragmentSourceCode = IT, this._prepareEffect(oT)
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
        return !!this._engine.IIT || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      Zc() {
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
        this.isReady() ? TT(this) : (this.onCompileObservable.add((oT => {
          TT(oT)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(TT) {
        (0, XT.e)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (oT => {
          this._processCompilationErrors(oT, TT)
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
            lIT: this._engine.lIT,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(TT, oT, IT, iT) {
        this._isReady = !1, this._vertexSourceCodeOverride = TT, this._fragmentSourceCodeOverride = oT, this.onError = (TT, oT) => {
          iT && iT(oT)
        }, this.onCompiled = () => {
          const TT = this.Zc().scenes;
          if (TT)
            for (let oT = 0; oT < TT.length; oT++) TT[oT].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(IT)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(TT) {
        if (this._pipelineContext = TT, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let oT = 0; oT < this._attributesNames.length; oT++) {
            const TT = this._attributesNames[oT];
            this._attributeLocationByName[TT] = this._attributes[oT]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), BT.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const oT = this._pipelineContext;
        this._isReady = !1;
        try {
          const IT = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            iT = IT ? null : this.defines,
            zT = IT ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            kT = IT ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            XT = this._engine;
          this._pipelineContext = (0, WT.f)({
            existingPipelineContext: TT ? oT : null,
            vertex: zT,
            fragment: kT,
            context: "WEBGL2" === XT.shaderPlatformName || "WEBGL1" === XT.shaderPlatformName ? XT._gl : void 0,
            rebuildRebind: (TT, oT, IT, iT) => this._rebuildProgram(TT, oT, IT, iT),
            defines: iT,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: IT,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: IT => {
              oT && !TT && this._engine._deletePipelineContext(oT), IT && this._onRenderingStateCompiled(IT)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(oT)
        } catch (IT) {
          this._processCompilationErrors(IT, oT)
        }
      }
      _getShaderCodeAndErrorLine(TT, oT, IT) {
        const iT = IT ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let zT = null;
        if (oT && TT) {
          const kT = oT.match(iT);
          if (kT && 2 === kT.length) {
            const oT = parseInt(kT[1]),
              iT = TT.split("\n", -1);
            iT.length >= oT && (zT = `Offending line [${oT}] in ${IT?"fragment":"vertex"} code: ${iT[oT-1]}`)
          }
        }
        return [TT, zT]
      }
      _processCompilationErrors(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof TT?.stack ? TT.stack : TT?.message ?? String(TT);
        const IT = this._attributesNames,
          iT = this._fallbacks;
        if (zT.d.Error("Unable to compile effect:"), zT.d.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), zT.d.Error(`Attributes: ${IT.join(" ")}`), zT.d.Error("Defines:\n" + this.defines), BT.LogShaderCodeOnCompilationError) {
          let TT, oT = null,
            IT = null;
          this._pipelineContext?._getVertexShaderCode() && ([TT, oT] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), TT && (zT.d.Error("Vertex code:"), zT.d.Error(TT))), this._pipelineContext?._getFragmentShaderCode() && ([TT, IT] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), TT && (zT.d.Error("Fragment code:"), zT.d.Error(TT))), oT && zT.d.Error(oT), IT && zT.d.Error(IT)
        }
        zT.d.Error("Error: " + this._compilationError);
        const kT = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        oT && (this._pipelineContext = oT, this._isReady = !0, kT()), iT ? (this._pipelineContext = null, iT.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, zT.d.Error("Trying next fallback."), this.defines = iT.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, kT(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, oT || kT())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(TT, oT) {
        this._engine._bindTexture(this._samplers[TT], oT, TT)
      }
      setTexture(TT, oT) {
        this._engine.setTexture(this._samplers[TT], this._uniforms[TT], oT, TT)
      }
      setTextureArray(TT, oT) {
        const IT = TT + "Ex";
        if (-1 === this._samplerList.indexOf(IT + "0")) {
          const iT = this._samplerList.indexOf(TT);
          for (let TT = 1; TT < oT.length; TT++) {
            const oT = IT + (TT - 1).toString();
            this._samplerList.splice(iT + TT, 0, oT)
          }
          let zT = 0;
          for (const TT of this._samplerList) this._samplers[TT] = zT, zT += 1
        }
        this._engine.setTextureArray(this._samplers[TT], this._uniforms[TT], oT, TT)
      }
      bindUniformBuffer(TT, oT) {
        const IT = this._uniformBuffersNames[oT];
        void 0 === IT || BT._BaseCache[IT] === TT && this._engine._features.useUBOBindingCache || (BT._BaseCache[IT] = TT, this._engine.bindUniformBufferBase(TT, IT, oT))
      }
      bindUniformBlock(TT, oT) {
        this._engine.bindUniformBlock(this._pipelineContext, TT, oT)
      }
      setInt(TT, oT) {
        return this._pipelineContext.setInt(TT, oT), this
      }
      setInt2(TT, oT, IT) {
        return this._pipelineContext.setInt2(TT, oT, IT), this
      }
      setInt3(TT, oT, IT, iT) {
        return this._pipelineContext.setInt3(TT, oT, IT, iT), this
      }
      setInt4(TT, oT, IT, iT, zT) {
        return this._pipelineContext.setInt4(TT, oT, IT, iT, zT), this
      }
      setIntArray(TT, oT) {
        return this._pipelineContext.setIntArray(TT, oT), this
      }
      setIntArray2(TT, oT) {
        return this._pipelineContext.setIntArray2(TT, oT), this
      }
      setIntArray3(TT, oT) {
        return this._pipelineContext.setIntArray3(TT, oT), this
      }
      setIntArray4(TT, oT) {
        return this._pipelineContext.setIntArray4(TT, oT), this
      }
      setUInt(TT, oT) {
        return this._pipelineContext.setUInt(TT, oT), this
      }
      setUInt2(TT, oT, IT) {
        return this._pipelineContext.setUInt2(TT, oT, IT), this
      }
      setUInt3(TT, oT, IT, iT) {
        return this._pipelineContext.setUInt3(TT, oT, IT, iT), this
      }
      setUInt4(TT, oT, IT, iT, zT) {
        return this._pipelineContext.setUInt4(TT, oT, IT, iT, zT), this
      }
      setUIntArray(TT, oT) {
        return this._pipelineContext.setUIntArray(TT, oT), this
      }
      setUIntArray2(TT, oT) {
        return this._pipelineContext.setUIntArray2(TT, oT), this
      }
      setUIntArray3(TT, oT) {
        return this._pipelineContext.setUIntArray3(TT, oT), this
      }
      setUIntArray4(TT, oT) {
        return this._pipelineContext.setUIntArray4(TT, oT), this
      }
      setFloatArray(TT, oT) {
        return this._pipelineContext.setArray(TT, oT), this
      }
      setFloatArray2(TT, oT) {
        return this._pipelineContext.setArray2(TT, oT), this
      }
      setFloatArray3(TT, oT) {
        return this._pipelineContext.setArray3(TT, oT), this
      }
      setFloatArray4(TT, oT) {
        return this._pipelineContext.setArray4(TT, oT), this
      }
      setArray(TT, oT) {
        return this._pipelineContext.setArray(TT, oT), this
      }
      setArray2(TT, oT) {
        return this._pipelineContext.setArray2(TT, oT), this
      }
      setArray3(TT, oT) {
        return this._pipelineContext.setArray3(TT, oT), this
      }
      setArray4(TT, oT) {
        return this._pipelineContext.setArray4(TT, oT), this
      }
      setMatrices(TT, oT) {
        return this._pipelineContext.setMatrices(TT, oT), this
      }
      setMatrix(TT, oT) {
        return this._pipelineContext.setMatrix(TT, oT), this
      }
      setMatrix3x3(TT, oT) {
        return this._pipelineContext.setMatrix3x3(TT, oT), this
      }
      setMatrix2x2(TT, oT) {
        return this._pipelineContext.setMatrix2x2(TT, oT), this
      }
      setFloat(TT, oT) {
        return this._pipelineContext.setFloat(TT, oT), this
      }
      setBool(TT, oT) {
        return this._pipelineContext.setInt(TT, oT ? 1 : 0), this
      }
      setVector2(TT, oT) {
        return this._pipelineContext.setVector2(TT, oT), this
      }
      setFloat2(TT, oT, IT) {
        return this._pipelineContext.setFloat2(TT, oT, IT), this
      }
      setVector3(TT, oT) {
        return this._pipelineContext.setVector3(TT, oT), this
      }
      setFloat3(TT, oT, IT, iT) {
        return this._pipelineContext.setFloat3(TT, oT, IT, iT), this
      }
      setVector4(TT, oT) {
        return this._pipelineContext.setVector4(TT, oT), this
      }
      setQuaternion(TT, oT) {
        return this._pipelineContext.setQuaternion(TT, oT), this
      }
      setFloat4(TT, oT, IT, iT, zT) {
        return this._pipelineContext.setFloat4(TT, oT, IT, iT, zT), this
      }
      setColor3(TT, oT) {
        return this._pipelineContext.setColor3(TT, oT), this
      }
      setColor4(TT, oT, IT) {
        return this._pipelineContext.setColor4(TT, oT, IT), this
      }
      setDirectColor4(TT, oT) {
        return this._pipelineContext.setDirectColor4(TT, oT), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (BT.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, WT.i)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        oT && (kT.c.GetShadersStore(iT)[`${TT}PixelShader`] = oT), IT && (kT.c.GetShadersStore(iT)[`${TT}VertexShader`] = IT)
      }
      static ResetCache() {
        BT._BaseCache = {}
      }
    }
    BT.LogShaderCodeOnCompilationError = !0, BT.PersistentMode = !1, BT.AutomaticallyClearCodeCache = !1, BT._UniqueIdSeed = 0, BT._BaseCache = {}, BT.ShadersStore = kT.c.ShadersStore, BT.IncludesShadersStore = kT.c.IncludesShadersStore
  },
  38936: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => ST,
      e: () => eT,
      i: () => mT
    });
    var iT = IT(38609),
      zT = IT(36118),
      kT = IT(36159),
      WT = IT(38911);
    const XT = new zT.b,
      BT = new zT.b,
      FT = new zT.b,
      ST = {
        pC: () => {},
        eyeAtCamera: !0
      };

    function DT(TT, oT, IT) {
      const iT = IT.bIT(),
        zT = oT.bIT();
      for (let kT = 0; kT < 16; kT++) iT[kT] = zT[kT];
      return iT[12] -= TT.x, iT[13] -= TT.y, iT[14] -= TT.z, IT.markAsUpdated(), IT
    }

    function LT(TT, oT, IT) {
      return (0, kT.i)(oT, BT), DT(TT, BT, FT), (0, kT.i)(FT, IT), IT
    }

    function xT(TT, oT, IT) {
      if (!ST.eyeAtCamera) return LT(TT, oT, IT);
      const iT = IT.bIT(),
        zT = oT.bIT();
      for (let kT = 0; kT < 16; kT++) iT[kT] = zT[kT];
      return iT[12] = 0, iT[13] = 0, iT[14] = 0, IT.markAsUpdated(), IT
    }

    function cT(TT, oT, IT, iT) {
      return (0, kT.p)(xT(TT, oT, iT), IT, iT), iT
    }

    function KT(TT, oT, IT, iT) {
      return (0, kT.i)(IT, BT), (0, kT.p)(oT, BT, FT), DT(TT, FT, BT), xT(TT, IT, FT), (0, kT.p)(BT, FT, iT), iT
    }

    function MT(TT, oT, IT, iT, zT, WT) {
      return (0, kT.i)(IT, BT), (0, kT.p)(oT, BT, FT), DT(TT, FT, BT), cT(TT, iT, zT, FT), (0, kT.p)(BT, FT, WT), WT
    }

    function rT(TT, oT) {
      const IT = ST.pC();
      if (!IT || XT === oT) return oT;
      XT.updateFlag = oT.updateFlag;
      const iT = IT.floatingOriginOffset;
      switch (TT) {
        case "world":
          return DT(iT, oT, XT);
        case "view":
          return xT(iT, oT, XT);
        case "worldView":
          return KT(iT, oT, IT.getViewMatrix(), XT);
        case "viewProjection":
          return cT(iT, IT.getViewMatrix(), IT.getProjectionMatrix(), XT);
        case "worldViewProjection":
          return MT(iT, oT, IT.getTransformMatrix(), IT.getViewMatrix(), IT.getProjectionMatrix(), XT);
        default:
          if (TT.startsWith("u_")) {
            const zT = TT.toLowerCase();
            if (zT.startsWith("u_worldviewprojection")) return MT(iT, oT, IT.getTransformMatrix(), IT.getViewMatrix(), IT.getProjectionMatrix(), XT);
            if (zT.startsWith("u_viewprojection")) return cT(iT, IT.getViewMatrix(), IT.getProjectionMatrix(), XT);
            if (zT.startsWith("u_worldview")) return KT(iT, oT, IT.getViewMatrix(), XT);
            if (zT.startsWith("u_world")) return DT(iT, oT, XT);
            if (zT.startsWith("u_view")) return xT(iT, oT, XT)
          }
          return oT
      }
    }
    const AT = WT.e,
      gT = iT.c,
      hT = AT.prototype._updateMatrixForUniform,
      wT = iT.c.prototype.setMatrix;

    function mT() {
      iT.c.prototype.setMatrix = wT, gT._setMatrixOverride = void 0, AT.prototype._updateMatrixForUniform = hT, AT.prototype._updateMatrixForUniformOverride = void 0
    }

    function eT() {
      gT.prototype._setMatrixOverride = wT, gT.prototype.setMatrix = function(TT, oT) {
        return this._setMatrixOverride(TT, rT(TT, oT)), this
      }, AT.prototype._updateMatrixForUniformOverride = hT, AT.prototype._updateMatrixForUniform = function(TT, oT) {
        this._updateMatrixForUniformOverride(TT, rT(TT, oT))
      }
    }
  },
  38906: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT,
      e: () => zT
    });
    var iT = IT(38902);

    function zT(TT, oT) {
      oT.WHITEBALANCE && TT.push("whiteBalanceMatrix"), oT.EXPOSURE && TT.push("exposureLinear"), oT.CONTRAST && TT.push("contrast"), oT.COLORGRADING && TT.push("colorTransformSettings"), (oT.VIGNETTE || oT.DITHER) && TT.push("vInverseScreenSize"), oT.VIGNETTE && (TT.push("vignetteSettings1"), TT.push("vignetteSettings2")), oT.COLORCURVES && (0, iT.e)(TT), oT.DITHER && TT.push("ditherIntensity")
    }

    function kT(TT, oT) {
      oT.COLORGRADING && TT.push("txColorTransform")
    }
  },
  38899: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => fT,
      e: () => JT
    });
    var iT = IT(38764),
      zT = IT(38773),
      kT = IT(36149),
      WT = IT(36177),
      XT = IT(36156),
      BT = IT(36118);
    const FT = [
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
      ST = 1e6 / FT[FT.length - 1][0],
      DT = 150;

    function LT(TT, oT) {
      const IT = Number.isNaN(TT) ? ST : Math.max(TT, ST),
        iT = (0, XT.Clamp)(1e6 / IT, FT[0][0], FT[FT.length - 1][0]);
      let zT = 0,
        kT = FT.length - 1;
      for (; kT - zT > 1;) {
        const TT = zT + kT >> 1;
        FT[TT][0] <= iT ? zT = TT : kT = TT
      }
      const WT = zT,
        [LT, xT, cT, KT] = FT[WT],
        [MT, rT, AT, gT] = FT[WT + 1],
        hT = (iT - LT) / (MT - LT),
        wT = BT.j.Lerp(new BT.j(xT, cT), new BT.j(rT, AT), hT),
        mT = BT.j.Normalize(new BT.j(1, KT)),
        eT = BT.j.Normalize(new BT.j(1, gT)),
        RT = BT.j.Normalize(BT.j.Lerp(mT, eT, hT)),
        uT = (0, XT.Clamp)(oT, -150, DT);
      wT.SiT(RT.scale(uT / 3e3));
      const vT = 2 * wT.x - 8 * wT.y + 4,
        ET = 3 * wT.x / vT,
        fT = 2 * wT.y / vT;
      return new BT.m(ET / fT, 1, (1 - ET - fT) / fT)
    }
    const xT = BT.b.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      cT = BT.b.Invert(xT);

    function KT(TT, oT) {
      const IT = oT > 0 ? TT / oT : 10;
      return (0, XT.Clamp)(IT, .1, 10)
    }

    function MT(TT, oT) {
      const IT = BT.m.TransformNormal(TT, xT),
        iT = BT.m.TransformNormal(oT, xT),
        zT = BT.b.FromArray([KT(iT.x, IT.x), 0, 0, 0, 0, KT(iT.y, IT.y), 0, 0, 0, 0, KT(iT.z, IT.z), 0, 0, 0, 0, 1]);
      return xT.multiply(zT).multiply(cT)
    }
    const rT = new BT.m(.95047, 1, 1.08883),
      AT = BT.b.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(MT(rT, LT(6500, 0))),
      gT = BT.b.Invert(AT),
      hT = BT.m.TransformNormal(new BT.m(1, 1, 1), AT);
    var wT = IT(38799),
      mT = IT(38902);
    let eT = (() => {
      var TT;
      let oT, IT, kT, XT, BT, FT, ST, DT, LT, xT, cT, KT, MT = [],
        rT = [],
        AT = [],
        gT = [],
        hT = [],
        eT = [],
        RT = [],
        uT = [],
        vT = [],
        ET = [],
        fT = [],
        CT = [],
        jT = [],
        JT = [],
        UT = [],
        aT = [],
        YT = [],
        QT = [],
        OT = [],
        HT = [],
        nT = [],
        qT = [],
        ZT = [],
        lT = [];
      return TT = class {
        constructor() {
          this._dirty = !0, this._tempColor = new WT.i(0, 0, 0, 0), this._globalCurve = new WT.i(0, 0, 0, 0), this._highlightsCurve = new WT.i(0, 0, 0, 0), this._midtonesCurve = new WT.i(0, 0, 0, 0), this._shadowsCurve = new WT.i(0, 0, 0, 0), this._positiveCurve = new WT.i(0, 0, 0, 0), this._negativeCurve = new WT.i(0, 0, 0, 0), this._globalHue = (0, iT.j)(this, MT, 30), this._globalDensity = ((0, iT.j)(this, rT), (0, iT.j)(this, AT, 0)), this._globalSaturation = ((0, iT.j)(this, gT), (0, iT.j)(this, hT, 0)), this._globalExposure = ((0, iT.j)(this, eT), (0, iT.j)(this, RT, 0)), this._highlightsHue = ((0, iT.j)(this, uT), (0, iT.j)(this, vT, 30)), this._highlightsDensity = ((0, iT.j)(this, ET), (0, iT.j)(this, fT, 0)), this._highlightsSaturation = ((0, iT.j)(this, CT), (0, iT.j)(this, jT, 0)), this._highlightsExposure = ((0, iT.j)(this, JT), (0, iT.j)(this, UT, 0)), this._midtonesHue = ((0, iT.j)(this, aT), (0, iT.j)(this, YT, 30)), this._midtonesDensity = ((0, iT.j)(this, QT), (0, iT.j)(this, OT, 0)), this._midtonesSaturation = ((0, iT.j)(this, HT), (0, iT.j)(this, nT, 0)), this._midtonesExposure = ((0, iT.j)(this, qT), (0, iT.j)(this, ZT, 0)), this._shadowsHue = ((0, iT.j)(this, lT), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
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
        _getColorGradingDataToRef(oT, IT, iT, zT, kT) {
          null != oT && (oT = TT._Clamp(oT, 0, 360), IT = TT._Clamp(IT, -100, 100), iT = TT._Clamp(iT, -100, 100), zT = TT._Clamp(zT, -100, 100), IT = TT._ApplyColorGradingSliderNonlinear(IT), IT *= .5, zT = TT._ApplyColorGradingSliderNonlinear(zT), IT < 0 && (IT *= -1, oT = (oT + 180) % 360), TT._FromHSBToRef(oT, IT, 50 + .25 * zT, kT), kT.scaleToRef(2, kT), kT.a = 1 + .01 * iT)
        }
        static _ApplyColorGradingSliderNonlinear(TT) {
          TT /= 100;
          let oT = Math.abs(TT);
          return oT = Math.pow(oT, 2), TT < 0 && (oT *= -1), oT *= 100, oT
        }
        static _FromHSBToRef(oT, IT, iT, zT) {
          let kT = TT._Clamp(oT, 0, 360);
          const WT = TT._Clamp(IT / 100, 0, 1),
            XT = TT._Clamp(iT / 100, 0, 1);
          if (0 === WT) zT.r = XT, zT.g = XT, zT.b = XT;
          else {
            kT /= 60;
            const TT = Math.floor(kT),
              oT = kT - TT,
              IT = XT * (1 - WT),
              iT = XT * (1 - WT * oT),
              BT = XT * (1 - WT * (1 - oT));
            switch (TT) {
              case 0:
                zT.r = XT, zT.g = BT, zT.b = IT;
                break;
              case 1:
                zT.r = iT, zT.g = XT, zT.b = IT;
                break;
              case 2:
                zT.r = IT, zT.g = XT, zT.b = BT;
                break;
              case 3:
                zT.r = IT, zT.g = iT, zT.b = XT;
                break;
              case 4:
                zT.r = BT, zT.g = IT, zT.b = XT;
                break;
              default:
                zT.r = XT, zT.g = IT, zT.b = iT
            }
          }
          zT.a = 1
        }
        static _Clamp(TT, oT, IT) {
          return Math.min(Math.max(TT, oT), IT)
        }
        clone() {
          return wT.c.Clone((() => new TT), this)
        }
        serialize() {
          return wT.c.Serialize(this)
        }
        _bind(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), TT && (TT.setFloat4(oT, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), TT.setFloat4(IT, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), TT.setFloat4(iT, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const WT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        oT = [(0, zT.P)()], IT = [(0, zT.P)()], kT = [(0, zT.P)()], XT = [(0, zT.P)()], BT = [(0, zT.P)()], FT = [(0, zT.P)()], ST = [(0, zT.P)()], DT = [(0, zT.P)()], LT = [(0, zT.P)()], xT = [(0, zT.P)()], cT = [(0, zT.P)()], KT = [(0, zT.P)()], (0, iT.h)(null, null, oT, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: TT => "_globalHue" in TT,
            get: TT => TT._globalHue,
            set: (TT, oT) => {
              TT._globalHue = oT
            }
          },
          metadata: WT
        }, MT, rT), (0, iT.h)(null, null, IT, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "_globalDensity" in TT,
            get: TT => TT._globalDensity,
            set: (TT, oT) => {
              TT._globalDensity = oT
            }
          },
          metadata: WT
        }, AT, gT), (0, iT.h)(null, null, kT, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: TT => "_globalSaturation" in TT,
            get: TT => TT._globalSaturation,
            set: (TT, oT) => {
              TT._globalSaturation = oT
            }
          },
          metadata: WT
        }, hT, eT), (0, iT.h)(null, null, XT, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: TT => "_globalExposure" in TT,
            get: TT => TT._globalExposure,
            set: (TT, oT) => {
              TT._globalExposure = oT
            }
          },
          metadata: WT
        }, RT, uT), (0, iT.h)(null, null, BT, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: TT => "_highlightsHue" in TT,
            get: TT => TT._highlightsHue,
            set: (TT, oT) => {
              TT._highlightsHue = oT
            }
          },
          metadata: WT
        }, vT, ET), (0, iT.h)(null, null, FT, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "_highlightsDensity" in TT,
            get: TT => TT._highlightsDensity,
            set: (TT, oT) => {
              TT._highlightsDensity = oT
            }
          },
          metadata: WT
        }, fT, CT), (0, iT.h)(null, null, ST, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: TT => "_highlightsSaturation" in TT,
            get: TT => TT._highlightsSaturation,
            set: (TT, oT) => {
              TT._highlightsSaturation = oT
            }
          },
          metadata: WT
        }, jT, JT), (0, iT.h)(null, null, DT, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: TT => "_highlightsExposure" in TT,
            get: TT => TT._highlightsExposure,
            set: (TT, oT) => {
              TT._highlightsExposure = oT
            }
          },
          metadata: WT
        }, UT, aT), (0, iT.h)(null, null, LT, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: TT => "_midtonesHue" in TT,
            get: TT => TT._midtonesHue,
            set: (TT, oT) => {
              TT._midtonesHue = oT
            }
          },
          metadata: WT
        }, YT, QT), (0, iT.h)(null, null, xT, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "_midtonesDensity" in TT,
            get: TT => TT._midtonesDensity,
            set: (TT, oT) => {
              TT._midtonesDensity = oT
            }
          },
          metadata: WT
        }, OT, HT), (0, iT.h)(null, null, cT, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: TT => "_midtonesSaturation" in TT,
            get: TT => TT._midtonesSaturation,
            set: (TT, oT) => {
              TT._midtonesSaturation = oT
            }
          },
          metadata: WT
        }, nT, qT), (0, iT.h)(null, null, KT, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: TT => "_midtonesExposure" in TT,
            get: TT => TT._midtonesExposure,
            set: (TT, oT) => {
              TT._midtonesExposure = oT
            }
          },
          metadata: WT
        }, ZT, lT), WT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WT
        })
      })(), TT.PrepareUniforms = mT.e, TT
    })();

    function RT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      TT._bind(oT, IT, iT, zT)
    }
    var uT = IT(38698),
      vT = IT(38906),
      ET = IT(36166);
    let fT = (() => {
        var TT;
        let oT, IT, FT, xT, cT, KT, rT, mT, ET, fT, CT, jT, JT, UT, aT, YT, QT, OT, HT, nT, qT, ZT, lT, sT, tT, GT, pT, bT, yT = [],
          NT = [],
          PT = [],
          dT = [],
          VT = [],
          To = [],
          oo = [],
          Io = [],
          io = [],
          zo = [],
          ko = [],
          Wo = [],
          Xo = [],
          Bo = [],
          Fo = [],
          So = [],
          Do = [],
          Lo = [],
          xo = [],
          co = [],
          Ko = [],
          Mo = [],
          ro = [],
          Ao = [],
          go = [],
          ho = [],
          wo = [],
          mo = [],
          eo = [],
          Ro = [],
          uo = [],
          vo = [],
          Eo = [],
          fo = [],
          Co = [],
          jo = [],
          Jo = [],
          Uo = [],
          ao = [],
          Yo = [],
          Qo = [],
          Oo = [],
          Ho = [],
          no = [],
          qo = [],
          Zo = [],
          so = [],
          to = [],
          Go = [],
          po = [],
          bo = [],
          yo = [],
          No = [],
          Po = [],
          Vo = [],
          TI = [];
        return TT = class {
          constructor() {
            this.colorCurves = (0, iT.j)(this, yT, new eT), this._colorCurvesEnabled = ((0, iT.j)(this, NT), (0, iT.j)(this, PT, !1)), this._colorGradingTexture = ((0, iT.j)(this, dT), (0, iT.j)(this, VT, void 0)), this._colorGradingEnabled = ((0, iT.j)(this, To), (0, iT.j)(this, oo, !1)), this._colorGradingWithGreenDepth = ((0, iT.j)(this, Io), (0, iT.j)(this, io, !0)), this._colorGradingBGR = ((0, iT.j)(this, zo), (0, iT.j)(this, ko, !0)), this._exposure = ((0, iT.j)(this, Wo), (0, iT.j)(this, Xo, 1)), this._toneMappingEnabled = ((0, iT.j)(this, Bo), (0, iT.j)(this, Fo, !1)), this._toneMappingType = ((0, iT.j)(this, So), (0, iT.j)(this, Do, TT.TONEMAPPING_STANDARD)), this._contrast = ((0, iT.j)(this, Lo), (0, iT.j)(this, xo, 1)), this._whiteBalanceEnabled = ((0, iT.j)(this, co), (0, iT.j)(this, Ko, !1)), this._temperature = ((0, iT.j)(this, Mo), (0, iT.j)(this, ro, 6500)), this._tint = ((0, iT.j)(this, Ao), (0, iT.j)(this, go, 0)), this._whiteBalanceMatrix = ((0, iT.j)(this, ho), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, iT.j)(this, wo, 0), this.vignetteCenterX = ((0, iT.j)(this, mo), (0, iT.j)(this, eo, 0)), this.vignetteCenterY = ((0, iT.j)(this, Ro), (0, iT.j)(this, uo, 0)), this.vignetteWeight = ((0, iT.j)(this, vo), (0, iT.j)(this, Eo, 1.5)), this.vignetteColor = ((0, iT.j)(this, fo), (0, iT.j)(this, Co, new WT.i(0, 0, 0, 0))), this.vignetteCameraFov = ((0, iT.j)(this, jo), (0, iT.j)(this, Jo, .5)), this._vignetteBlendMode = ((0, iT.j)(this, Uo), (0, iT.j)(this, ao, TT.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, iT.j)(this, Yo), (0, iT.j)(this, Qo, !1)), this._ditheringEnabled = ((0, iT.j)(this, Oo), (0, iT.j)(this, Ho, !1)), this._ditheringIntensity = ((0, iT.j)(this, no), (0, iT.j)(this, qo, 1 / 255)), this._skipFinalColorClamp = ((0, iT.j)(this, Zo), (0, iT.j)(this, so, !1)), this._applyByPostProcess = ((0, iT.j)(this, to), (0, iT.j)(this, Go, !1)), this._isEnabled = ((0, iT.j)(this, po), (0, iT.j)(this, bo, !0)), this.outputTextureWidth = ((0, iT.j)(this, yo), (0, iT.j)(this, No, 0)), this.outputTextureHeight = ((0, iT.j)(this, Po), (0, iT.j)(this, Vo, 0)), this.onUpdateParameters = ((0, iT.j)(this, TI), new kT.d)
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
            TT = Number.isNaN(TT) ? ST : Math.max(TT, ST), this._temperature !== TT && (this._temperature = TT, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(TT) {
            TT = (0, XT.Clamp)(TT, -150, DT), this._tint !== TT && (this._tint = TT, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(TT, oT) {
              const IT = MT(LT(TT, oT), hT),
                iT = AT.multiply(IT).multiply(gT);
              return BT.b.GetAsMatrix3x3(iT)
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
          prepareDefines(oT) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return oT.WHITEBALANCE = !1, oT.VIGNETTE = !1, oT.TONEMAPPING = 0, oT.CONTRAST = !1, oT.EXPOSURE = !1, oT.COLORCURVES = !1, oT.COLORGRADING = !1, oT.COLORGRADING3D = !1, oT.DITHER = !1, oT.IMAGEPROCESSING = !1, oT.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(oT.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (oT.WHITEBALANCE = this._whiteBalanceEnabled, oT.VIGNETTE = this.vignetteEnabled, oT.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === TT._VIGNETTEMODE_MULTIPLY, oT.VIGNETTEBLENDMODEOPAQUE = !oT.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case TT.TONEMAPPING_KHR_PBR_NEUTRAL:
                oT.TONEMAPPING = 3;
                break;
              case TT.TONEMAPPING_ACES:
                oT.TONEMAPPING = 2;
                break;
              default:
                oT.TONEMAPPING = 1
            } else oT.TONEMAPPING = 0;
            oT.CONTRAST = 1 !== this.contrast, oT.EXPOSURE = 1 !== this.exposure, oT.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, oT.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, oT.COLORGRADING ? oT.COLORGRADING3D = this.colorGradingTexture.is3D : oT.COLORGRADING3D = !1, oT.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, oT.SAMPLER3DBGRMAP = this.colorGradingBGR, oT.DITHER = this._ditheringEnabled, oT.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, oT.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, oT.IMAGEPROCESSING = oT.WHITEBALANCE || oT.VIGNETTE || !!oT.TONEMAPPING || oT.CONTRAST || oT.EXPOSURE || oT.COLORCURVES || oT.COLORGRADING || oT.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(TT, oT) {
            if (this._whiteBalanceEnabled && TT.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && RT(this.colorCurves, TT), this._vignetteEnabled || this._ditheringEnabled) {
              const IT = 1 / (this.outputTextureWidth || TT.Zc().getRenderWidth()),
                iT = 1 / (this.outputTextureHeight || TT.Zc().getRenderHeight());
              if (TT.setFloat2("vInverseScreenSize", IT, iT), this._ditheringEnabled && TT.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const zT = null != oT ? oT : iT / IT;
                let kT = Math.tan(.5 * this.vignetteCameraFov),
                  WT = kT * zT;
                const XT = Math.sqrt(WT * kT);
                WT = (0, uT.k)(WT, XT, this.vignetteStretch), kT = (0, uT.k)(kT, XT, this.vignetteStretch), TT.setFloat4("vignetteSettings1", WT, kT, -WT * this.vignetteCenterX, -kT * this.vignetteCenterY);
                const BT = -2 * this.vignetteWeight;
                TT.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, BT)
              }
            }
            if (TT.setFloat("exposureLinear", this.exposure), TT.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              TT.setTexture("txColorTransform", this.colorGradingTexture);
              const oT = this.colorGradingTexture.getSize().height;
              TT.setFloat4("colorTransformSettings", (oT - 1) / oT, .5 / oT, oT, this.colorGradingTexture.level)
            }
          }
          clone() {
            return wT.c.Clone((() => new TT), this)
          }
          serialize() {
            return wT.c.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          oT = [(0, zT.m)()], IT = [(0, zT.P)()], FT = [(0, zT.H)("colorGradingTexture")], xT = [(0, zT.P)()], cT = [(0, zT.P)()], KT = [(0, zT.P)()], rT = [(0, zT.P)()], mT = [(0, zT.P)()], ET = [(0, zT.P)()], fT = [(0, zT.P)()], CT = [(0, zT.P)()], jT = [(0, zT.P)()], JT = [(0, zT.P)()], UT = [(0, zT.P)()], aT = [(0, zT.P)()], YT = [(0, zT.P)()], QT = [(0, zT.P)()], OT = [(0, zT.u)()], HT = [(0, zT.P)()], nT = [(0, zT.P)()], qT = [(0, zT.P)()], ZT = [(0, zT.P)()], lT = [(0, zT.P)()], sT = [(0, zT.P)()], tT = [(0, zT.P)()], GT = [(0, zT.P)()], pT = [(0, zT.P)()], bT = [(0, zT.P)()], (0, iT.h)(null, null, oT, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: TT => "colorCurves" in TT,
              get: TT => TT.colorCurves,
              set: (TT, oT) => {
                TT.colorCurves = oT
              }
            },
            metadata: kT
          }, yT, NT), (0, iT.h)(null, null, IT, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: TT => "_colorCurvesEnabled" in TT,
              get: TT => TT._colorCurvesEnabled,
              set: (TT, oT) => {
                TT._colorCurvesEnabled = oT
              }
            },
            metadata: kT
          }, PT, dT), (0, iT.h)(null, null, FT, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_colorGradingTexture" in TT,
              get: TT => TT._colorGradingTexture,
              set: (TT, oT) => {
                TT._colorGradingTexture = oT
              }
            },
            metadata: kT
          }, VT, To), (0, iT.h)(null, null, xT, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: TT => "_colorGradingEnabled" in TT,
              get: TT => TT._colorGradingEnabled,
              set: (TT, oT) => {
                TT._colorGradingEnabled = oT
              }
            },
            metadata: kT
          }, oo, Io), (0, iT.h)(null, null, cT, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: TT => "_colorGradingWithGreenDepth" in TT,
              get: TT => TT._colorGradingWithGreenDepth,
              set: (TT, oT) => {
                TT._colorGradingWithGreenDepth = oT
              }
            },
            metadata: kT
          }, io, zo), (0, iT.h)(null, null, KT, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: TT => "_colorGradingBGR" in TT,
              get: TT => TT._colorGradingBGR,
              set: (TT, oT) => {
                TT._colorGradingBGR = oT
              }
            },
            metadata: kT
          }, ko, Wo), (0, iT.h)(null, null, rT, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: TT => "_exposure" in TT,
              get: TT => TT._exposure,
              set: (TT, oT) => {
                TT._exposure = oT
              }
            },
            metadata: kT
          }, Xo, Bo), (0, iT.h)(null, null, mT, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: TT => "_toneMappingEnabled" in TT,
              get: TT => TT._toneMappingEnabled,
              set: (TT, oT) => {
                TT._toneMappingEnabled = oT
              }
            },
            metadata: kT
          }, Fo, So), (0, iT.h)(null, null, ET, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: TT => "_toneMappingType" in TT,
              get: TT => TT._toneMappingType,
              set: (TT, oT) => {
                TT._toneMappingType = oT
              }
            },
            metadata: kT
          }, Do, Lo), (0, iT.h)(null, null, fT, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: TT => "_contrast" in TT,
              get: TT => TT._contrast,
              set: (TT, oT) => {
                TT._contrast = oT
              }
            },
            metadata: kT
          }, xo, co), (0, iT.h)(null, null, CT, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: TT => "_whiteBalanceEnabled" in TT,
              get: TT => TT._whiteBalanceEnabled,
              set: (TT, oT) => {
                TT._whiteBalanceEnabled = oT
              }
            },
            metadata: kT
          }, Ko, Mo), (0, iT.h)(null, null, jT, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: TT => "_temperature" in TT,
              get: TT => TT._temperature,
              set: (TT, oT) => {
                TT._temperature = oT
              }
            },
            metadata: kT
          }, ro, Ao), (0, iT.h)(null, null, JT, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: TT => "_tint" in TT,
              get: TT => TT._tint,
              set: (TT, oT) => {
                TT._tint = oT
              }
            },
            metadata: kT
          }, go, ho), (0, iT.h)(null, null, UT, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: TT => "vignetteStretch" in TT,
              get: TT => TT.vignetteStretch,
              set: (TT, oT) => {
                TT.vignetteStretch = oT
              }
            },
            metadata: kT
          }, wo, mo), (0, iT.h)(null, null, aT, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: TT => "vignetteCenterX" in TT,
              get: TT => TT.vignetteCenterX,
              set: (TT, oT) => {
                TT.vignetteCenterX = oT
              }
            },
            metadata: kT
          }, eo, Ro), (0, iT.h)(null, null, YT, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: TT => "vignetteCenterY" in TT,
              get: TT => TT.vignetteCenterY,
              set: (TT, oT) => {
                TT.vignetteCenterY = oT
              }
            },
            metadata: kT
          }, uo, vo), (0, iT.h)(null, null, QT, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "vignetteWeight" in TT,
              get: TT => TT.vignetteWeight,
              set: (TT, oT) => {
                TT.vignetteWeight = oT
              }
            },
            metadata: kT
          }, Eo, fo), (0, iT.h)(null, null, OT, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "vignetteColor" in TT,
              get: TT => TT.vignetteColor,
              set: (TT, oT) => {
                TT.vignetteColor = oT
              }
            },
            metadata: kT
          }, Co, jo), (0, iT.h)(null, null, HT, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: TT => "vignetteCameraFov" in TT,
              get: TT => TT.vignetteCameraFov,
              set: (TT, oT) => {
                TT.vignetteCameraFov = oT
              }
            },
            metadata: kT
          }, Jo, Uo), (0, iT.h)(null, null, nT, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "_vignetteBlendMode" in TT,
              get: TT => TT._vignetteBlendMode,
              set: (TT, oT) => {
                TT._vignetteBlendMode = oT
              }
            },
            metadata: kT
          }, ao, Yo), (0, iT.h)(null, null, qT, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: TT => "_vignetteEnabled" in TT,
              get: TT => TT._vignetteEnabled,
              set: (TT, oT) => {
                TT._vignetteEnabled = oT
              }
            },
            metadata: kT
          }, Qo, Oo), (0, iT.h)(null, null, ZT, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: TT => "_ditheringEnabled" in TT,
              get: TT => TT._ditheringEnabled,
              set: (TT, oT) => {
                TT._ditheringEnabled = oT
              }
            },
            metadata: kT
          }, Ho, no), (0, iT.h)(null, null, lT, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: TT => "_ditheringIntensity" in TT,
              get: TT => TT._ditheringIntensity,
              set: (TT, oT) => {
                TT._ditheringIntensity = oT
              }
            },
            metadata: kT
          }, qo, Zo), (0, iT.h)(null, null, sT, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: TT => "_skipFinalColorClamp" in TT,
              get: TT => TT._skipFinalColorClamp,
              set: (TT, oT) => {
                TT._skipFinalColorClamp = oT
              }
            },
            metadata: kT
          }, so, to), (0, iT.h)(null, null, tT, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: TT => "_applyByPostProcess" in TT,
              get: TT => TT._applyByPostProcess,
              set: (TT, oT) => {
                TT._applyByPostProcess = oT
              }
            },
            metadata: kT
          }, Go, po), (0, iT.h)(null, null, GT, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: TT => "_isEnabled" in TT,
              get: TT => TT._isEnabled,
              set: (TT, oT) => {
                TT._isEnabled = oT
              }
            },
            metadata: kT
          }, bo, yo), (0, iT.h)(null, null, pT, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: TT => "outputTextureWidth" in TT,
              get: TT => TT.outputTextureWidth,
              set: (TT, oT) => {
                TT.outputTextureWidth = oT
              }
            },
            metadata: kT
          }, No, Po), (0, iT.h)(null, null, bT, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "outputTextureHeight" in TT,
              get: TT => TT.outputTextureHeight,
              set: (TT, oT) => {
                TT.outputTextureHeight = oT
              }
            },
            metadata: kT
          }, Vo, TI), kT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: kT
          })
        })(), TT.TONEMAPPING_STANDARD = 0, TT.TONEMAPPING_ACES = 1, TT.TONEMAPPING_KHR_PBR_NEUTRAL = 2, TT.PrepareUniforms = vT.e, TT.PrepareSamplers = vT.d, TT._VIGNETTEMODE_MULTIPLY = 0, TT._VIGNETTEMODE_OPAQUE = 1, TT
      })(),
      CT = !1;

    function jT(TT) {
      const oT = wT.c.Parse((() => new fT), TT, null, null);
      return void 0 !== TT.vignetteCentreX && (oT.vignetteCenterX = TT.vignetteCentreX), void 0 !== TT.vignetteCentreY && (oT.vignetteCenterY = TT.vignetteCentreY), oT
    }

    function JT() {
      CT || (CT = !0, fT.Parse = jT, wT.c._ImageProcessingConfigurationParser = jT, (0, ET.h)("BABYLON.ImageProcessingConfiguration", fT))
    }
  },
  38911: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT
    });
    var iT = IT(37660),
      zT = IT(38886);
    class kT {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          iT = arguments.length > 3 ? arguments[3] : void 0,
          zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          kT = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = TT, this._noUBO = !TT.supportsUniformBuffers || zT, this._dynamic = IT, this._name = iT ?? "no-name", this._data = oT || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === kT && this._engine._features.trackUbosInFrame || !0 === kT) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.Y1 = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.Y1 = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
        let oT;
        if (oT = TT <= 2 ? TT : 4, this._uniformLocationPointer % oT !== 0) {
          const TT = this._uniformLocationPointer;
          this._uniformLocationPointer += oT - this._uniformLocationPointer % oT;
          const IT = this._uniformLocationPointer - TT;
          for (let oT = 0; oT < IT; oT++) this._data.push(0)
        }
      }
      addUniform(TT, oT) {
        let IT, iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (iT > 0 && "number" === typeof oT && (this._uniformArraySizes[TT] = {
            strideSize: oT,
            arraySize: iT
          }), void 0 === this._uniformLocations[TT] && (this._uniformNames.push(TT), !this._noUBO)) {
          if (iT > 0) {
            if (oT instanceof Array) throw "addUniform should not be use with Array in UBO: " + TT;
            if (this._fillAlignment(4), 16 == oT) oT *= iT;
            else {
              oT = oT * iT + (4 - oT) * iT
            }
            IT = [];
            for (let TT = 0; TT < oT; TT++) IT.push(0)
          } else {
            if (oT instanceof Array) IT = oT, oT = IT.length;
            else {
              IT = [];
              for (let TT = 0; TT < oT; TT++) IT.push(0)
            }
            this._fillAlignment(oT)
          }
          this._uniformSizes[TT] = oT, this._uniformLocations[TT] = this._uniformLocationPointer, this._uniformLocationPointer += oT;
          for (let TT = 0; TT < oT; TT++) this._data.push(IT[TT]);
          this._needSync = !0
        }
      }
      addMatrix(TT, oT) {
        this.addUniform(TT, Array.prototype.slice.call(oT.bIT()))
      }
      addFloat2(TT, oT, IT) {
        const iT = [oT, IT];
        this.addUniform(TT, iT)
      }
      addFloat3(TT, oT, IT, iT) {
        const zT = [oT, IT, iT];
        this.addUniform(TT, zT)
      }
      addColor3(TT, oT) {
        const IT = [oT.r, oT.g, oT.b];
        this.addUniform(TT, IT)
      }
      addColor4(TT, oT, IT) {
        const iT = [oT.r, oT.g, oT.b, IT];
        this.addUniform(TT, iT)
      }
      addVector3(TT, oT) {
        const IT = [oT.x, oT.y, oT.z];
        this.addUniform(TT, IT)
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
        let oT = 0;
        for (const IT in this._uniformLocations)
          if (TT.push(IT), 10 === ++oT) break;
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
      _buffersEqual(TT, oT) {
        for (let IT = 0; IT < TT.length; ++IT)
          if (TT[IT] !== oT[IT]) return !1;
        return !0
      }
      _copyBuffer(TT, oT) {
        for (let IT = 0; IT < TT.length; ++IT) oT[IT] = TT[IT]
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
        let oT = this._slotByOwner.get(TT);
        if (void 0 === oT && (oT = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(TT, oT), this._ownerCount++, TT._uniformBuffersWithOwnedSlot || (TT._uniformBuffersWithOwnedSlot = []), TT._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(oT, TT._uniformBuffersWithOwnedSlot)), this._slotGeneration[oT] === this._dataGeneration) return this._bufferIndex = oT, this._buffer = this._buffers[oT][0], this.bindUniformBuffer(), this._slotFrameId[oT] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const IT = this._buffers[oT][1];
        this._slotFrameId[oT] === this._currentFrameId && IT && !this._buffersEqual(this._bufferData, IT) && (oT = this._takeFreeSlot(!1)), this._bufferIndex = oT, this._buffer = this._buffers[oT][0], this.bindUniformBuffer();
        const iT = this._buffers[oT][1];
        iT && this._buffersEqual(this._bufferData, iT) || (iT && this._copyBuffer(this._bufferData, iT), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[oT] = this._currentFrameId, this._slotGeneration[oT] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(TT) {
        for (let IT = 0; IT < this._freeSlots.length; ++IT) {
          const oT = this._freeSlots[IT];
          if (this._slotFrameId[oT] !== this._currentFrameId) return TT && (this._freeSlots[IT] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), oT
        }
        this._rebuild();
        const oT = this._buffers.length - 1;
        return TT || this._freeSlots.push(oT), oT
      }
      _releaseOwnerSlot(TT) {
        const oT = this._slotByOwner?.get(TT);
        if (void 0 === oT) return;
        this._slotByOwner.delete(TT);
        const IT = this._ownerListsBySlot.get(oT);
        IT && (this._removeOwnerBacklink(IT), this._ownerListsBySlot.delete(oT)), this._ownerCount--, this._freeSlots.push(oT)
      }
      _removeOwnerBacklink(TT) {
        const oT = TT.indexOf(this); - 1 !== oT && (TT[oT] = TT[TT.length - 1], TT.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(TT, oT, IT) {
        this._checkNewFrame();
        let zT = this._uniformLocations[TT];
        if (void 0 === zT) {
          if (this._buffer) return void iT.d.Error("Cannot add an uniform after UBO has been created. uniformName=" + TT);
          this.addUniform(TT, IT), zT = this._uniformLocations[TT]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let TT = 0; TT < IT; TT++) this._bufferData[zT + TT] = oT[TT];
          this._dataGeneration++
        } else {
          let TT = !1;
          for (let iT = 0; iT < IT; iT++)(16 === IT && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[zT + iT] !== Math.fround(oT[iT])) && (TT = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[zT + iT] = oT[iT]);
          this._needSync = this._needSync || TT, TT && this._dataGeneration++
        }
      }
      updateUniformArray(TT, oT, IT) {
        this._checkNewFrame();
        const kT = this._uniformLocations[TT];
        if (void 0 === kT) return void iT.d.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const WT = this._uniformArraySizes[TT];
        if (this._dynamic) {
          for (let TT = 0; TT < IT; TT++) this._bufferData[kT + TT] = oT[TT];
          this._dataGeneration++
        } else {
          let TT = !1,
            iT = 0,
            XT = 0;
          for (let BT = 0; BT < IT; BT++)
            if (this._bufferData[kT + 4 * XT + iT] !== zT.i.FloatRound(oT[BT]) && (TT = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[kT + 4 * XT + iT] = oT[BT]), iT++, iT === WT.strideSize) {
              for (; iT < 4; iT++) this._bufferData[kT + 4 * XT + iT] = 0;
              iT = 0, XT++
            } this._needSync = this._needSync || TT, TT && this._dataGeneration++
        }
      }
      _cacheMatrix(TT, oT) {
        this._checkNewFrame();
        const IT = this._valueCache[TT],
          iT = oT.updateFlag;
        return (void 0 === IT || IT !== iT) && (this._valueCache[TT] = iT, !0)
      }
      _updateMatrix3x3ForUniform(TT, oT) {
        for (let IT = 0; IT < 3; IT++) kT._TempBuffer[4 * IT] = oT[3 * IT], kT._TempBuffer[4 * IT + 1] = oT[3 * IT + 1], kT._TempBuffer[4 * IT + 2] = oT[3 * IT + 2], kT._TempBuffer[4 * IT + 3] = 0;
        this.updateUniform(TT, kT._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(TT, oT) {
        this._currentEffect.setMatrix3x3(TT, oT)
      }
      _updateMatrix2x2ForEffect(TT, oT) {
        this._currentEffect.setMatrix2x2(TT, oT)
      }
      _updateMatrix2x2ForUniform(TT, oT) {
        for (let IT = 0; IT < 2; IT++) kT._TempBuffer[4 * IT] = oT[2 * IT], kT._TempBuffer[4 * IT + 1] = oT[2 * IT + 1], kT._TempBuffer[4 * IT + 2] = 0, kT._TempBuffer[4 * IT + 3] = 0;
        this.updateUniform(TT, kT._TempBuffer, 8)
      }
      _updateFloatForEffect(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(TT + IT, oT)
      }
      _updateFloatForUniform(TT, oT) {
        kT._TempBuffer[0] = oT, this.updateUniform(TT, kT._TempBuffer, 1)
      }
      _updateFloat2ForEffect(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(TT + iT, oT, IT)
      }
      _updateFloat2ForUniform(TT, oT, IT) {
        kT._TempBuffer[0] = oT, kT._TempBuffer[1] = IT, this.updateUniform(TT, kT._TempBuffer, 2)
      }
      _updateFloat3ForEffect(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(TT + zT, oT, IT, iT)
      }
      _updateFloat3ForUniform(TT, oT, IT, iT) {
        kT._TempBuffer[0] = oT, kT._TempBuffer[1] = IT, kT._TempBuffer[2] = iT, this.updateUniform(TT, kT._TempBuffer, 3)
      }
      _updateFloat4ForEffect(TT, oT, IT, iT, zT) {
        let kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(TT + kT, oT, IT, iT, zT)
      }
      _updateFloat4ForUniform(TT, oT, IT, iT, zT) {
        kT._TempBuffer[0] = oT, kT._TempBuffer[1] = IT, kT._TempBuffer[2] = iT, kT._TempBuffer[3] = zT, this.updateUniform(TT, kT._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[TT]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(TT + IT, oT);
            break;
          case 3:
            this._currentEffect.setFloatArray3(TT + IT, oT);
            break;
          case 4:
            this._currentEffect.setFloatArray4(TT + IT, oT);
            break;
          default:
            this._currentEffect.setFloatArray(TT + IT, oT)
        }
      }
      _updateFloatArrayForUniform(TT, oT) {
        this.updateUniformArray(TT, oT, oT.length)
      }
      _updateArrayForEffect(TT, oT) {
        this._currentEffect.setArray(TT, oT)
      }
      _updateArrayForUniform(TT, oT) {
        this.updateUniformArray(TT, oT, oT.length)
      }
      _updateIntArrayForEffect(TT, oT) {
        this._currentEffect.setIntArray(TT, oT)
      }
      _updateIntArrayForUniform(TT, oT) {
        kT._TempBufferInt32View.set(oT), this.updateUniformArray(TT, kT._TempBuffer, oT.length)
      }
      _updateUIntArrayForEffect(TT, oT) {
        this._currentEffect.setUIntArray(TT, oT)
      }
      _updateUIntArrayForUniform(TT, oT) {
        kT._TempBufferUInt32View.set(oT), this.updateUniformArray(TT, kT._TempBuffer, oT.length)
      }
      _updateMatrixForEffect(TT, oT) {
        this._currentEffect.setMatrix(TT, oT)
      }
      _updateMatrixForUniform(TT, oT) {
        this._cacheMatrix(TT, oT) && this.updateUniform(TT, oT.bIT(), 16)
      }
      _updateMatricesForEffect(TT, oT) {
        this._currentEffect.setMatrices(TT, oT)
      }
      _updateMatricesForUniform(TT, oT) {
        this.updateUniform(TT, oT, oT.length)
      }
      _updateVector3ForEffect(TT, oT) {
        this._currentEffect.setVector3(TT, oT)
      }
      _updateVector3ForUniform(TT, oT) {
        kT._TempBuffer[0] = oT.x, kT._TempBuffer[1] = oT.y, kT._TempBuffer[2] = oT.z, this.updateUniform(TT, kT._TempBuffer, 3)
      }
      _updateVector4ForEffect(TT, oT) {
        this._currentEffect.setVector4(TT, oT)
      }
      _updateVector4ForUniform(TT, oT) {
        kT._TempBuffer[0] = oT.x, kT._TempBuffer[1] = oT.y, kT._TempBuffer[2] = oT.z, kT._TempBuffer[3] = oT.w, this.updateUniform(TT, kT._TempBuffer, 4)
      }
      _updateColor3ForEffect(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(TT + IT, oT)
      }
      _updateColor3ForUniform(TT, oT) {
        kT._TempBuffer[0] = oT.r, kT._TempBuffer[1] = oT.g, kT._TempBuffer[2] = oT.b, this.updateUniform(TT, kT._TempBuffer, 3)
      }
      _updateColor4ForEffect(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(TT + iT, oT, IT)
      }
      _updateDirectColor4ForEffect(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(TT + IT, oT)
      }
      _updateColor4ForUniform(TT, oT, IT) {
        kT._TempBuffer[0] = oT.r, kT._TempBuffer[1] = oT.g, kT._TempBuffer[2] = oT.b, kT._TempBuffer[3] = IT, this.updateUniform(TT, kT._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(TT, oT) {
        kT._TempBuffer[0] = oT.r, kT._TempBuffer[1] = oT.g, kT._TempBuffer[2] = oT.b, kT._TempBuffer[3] = oT.a, this.updateUniform(TT, kT._TempBuffer, 4)
      }
      _updateIntForEffect(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(TT + IT, oT)
      }
      _updateIntForUniform(TT, oT) {
        kT._TempBufferInt32View[0] = oT, this.updateUniform(TT, kT._TempBuffer, 1)
      }
      _updateInt2ForEffect(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(TT + iT, oT, IT)
      }
      _updateInt2ForUniform(TT, oT, IT) {
        kT._TempBufferInt32View[0] = oT, kT._TempBufferInt32View[1] = IT, this.updateUniform(TT, kT._TempBuffer, 2)
      }
      _updateInt3ForEffect(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(TT + zT, oT, IT, iT)
      }
      _updateInt3ForUniform(TT, oT, IT, iT) {
        kT._TempBufferInt32View[0] = oT, kT._TempBufferInt32View[1] = IT, kT._TempBufferInt32View[2] = iT, this.updateUniform(TT, kT._TempBuffer, 3)
      }
      _updateInt4ForEffect(TT, oT, IT, iT, zT) {
        let kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(TT + kT, oT, IT, iT, zT)
      }
      _updateInt4ForUniform(TT, oT, IT, iT, zT) {
        kT._TempBufferInt32View[0] = oT, kT._TempBufferInt32View[1] = IT, kT._TempBufferInt32View[2] = iT, kT._TempBufferInt32View[3] = zT, this.updateUniform(TT, kT._TempBuffer, 4)
      }
      _updateUIntForEffect(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(TT + IT, oT)
      }
      _updateUIntForUniform(TT, oT) {
        kT._TempBufferUInt32View[0] = oT, this.updateUniform(TT, kT._TempBuffer, 1)
      }
      _updateUInt2ForEffect(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(TT + iT, oT, IT)
      }
      _updateUInt2ForUniform(TT, oT, IT) {
        kT._TempBufferUInt32View[0] = oT, kT._TempBufferUInt32View[1] = IT, this.updateUniform(TT, kT._TempBuffer, 2)
      }
      _updateUInt3ForEffect(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(TT + zT, oT, IT, iT)
      }
      _updateUInt3ForUniform(TT, oT, IT, iT) {
        kT._TempBufferUInt32View[0] = oT, kT._TempBufferUInt32View[1] = IT, kT._TempBufferUInt32View[2] = iT, this.updateUniform(TT, kT._TempBuffer, 3)
      }
      _updateUInt4ForEffect(TT, oT, IT, iT, zT) {
        let kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(TT + kT, oT, IT, iT, zT)
      }
      _updateUInt4ForUniform(TT, oT, IT, iT, zT) {
        kT._TempBufferUInt32View[0] = oT, kT._TempBufferUInt32View[1] = IT, kT._TempBufferUInt32View[2] = iT, kT._TempBufferUInt32View[3] = zT, this.updateUniform(TT, kT._TempBuffer, 4)
      }
      setTexture(TT, oT) {
        this._currentEffect.setTexture(TT, oT)
      }
      setTextureArray(TT, oT) {
        this._currentEffect.setTextureArray(TT, oT)
      }
      bindTexture(TT, oT) {
        this._currentEffect._bindTexture(TT, oT)
      }
      updateUniformDirectly(TT, oT) {
        this.updateUniform(TT, oT, oT.length), this.update()
      }
      bindToEffect(TT, oT) {
        this._currentEffect = TT, this._currentEffectName = oT
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(TT) {
        if (!this._buffers) return this._buffer === TT;
        for (let oT = 0; oT < this._buffers.length; ++oT) {
          if (this._buffers[oT][0] === TT) return this._bufferIndex = oT, this._buffer = TT, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[oT][1] && (this._bufferData.set(this._buffers[oT][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(TT) {
        return void 0 !== this._uniformLocations[TT]
      }
      dispose() {
        if (this._noUBO) return;
        const TT = this._engine._uniformBuffers,
          oT = TT.indexOf(this);
        if (-1 !== oT && (TT[oT] = TT[TT.length - 1], TT.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let TT = 0; TT < this._buffers.length; ++TT) {
            const oT = this._buffers[TT][0];
            this._engine._releaseBuffer(oT)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    kT._MAX_UNIFORM_SIZE = 256, kT._TempBuffer = new Float32Array(kT._MAX_UNIFORM_SIZE), kT._TempBufferInt32View = new Int32Array(kT._TempBuffer.buffer), kT._TempBufferUInt32View = new Uint32Array(kT._TempBuffer.buffer)
  },
  38687: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT
    });
    var iT = IT(38691);
    class zT extends iT.d {
      constructor(TT) {
        super(), this._buffer = TT
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  38781: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => BT,
      g: () => FT
    });
    const iT = "__bjs_serializable__",
      zT = new WeakMap;

    function kT(TT, oT) {
      return Object.prototype.hasOwnProperty.call(TT, oT)
    }
    const WT = function() {
      let TT = Symbol.metadata;
      return TT || (TT = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: TT
      })), TT
    }();

    function XT(TT) {
      return "function" === typeof TT ? TT : TT?.constructor
    }

    function BT(TT) {
      if (!TT) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(WT)}) polyfill must run before decorated classes are evaluated.`);
      return kT(TT, iT) || (TT[iT] = {}), TT[iT]
    }

    function FT(TT) {
      const oT = XT(TT),
        IT = oT ? oT[WT] : void 0;
      if (!IT) return {};
      const BT = zT.get(IT);
      if (BT) return BT;
      const FT = {},
        ST = [];
      let DT = IT;
      for (; DT;) ST.push(DT), DT = Object.getPrototypeOf(DT);
      for (const zT of ST)
        if (kT(zT, iT)) {
          const TT = zT[iT];
          for (const oT in TT) FT[oT] = TT[oT]
        } return zT.set(IT, FT), FT
    }
  },
  38773: (TT, oT, IT) => {
    IT.d(oT, {
      B: () => MT,
      E: () => LT,
      G: () => KT,
      H: () => XT,
      I: () => ST,
      M: () => DT,
      P: () => WT,
      d: () => gT,
      h: () => kT,
      l: () => AT,
      m: () => xT,
      q: () => BT,
      u: () => cT,
      x: () => FT
    });
    var iT = IT(38781);

    function zT(TT, oT) {
      return (IT, zT) => {
        if (!zT.metadata) return;
        const kT = String(zT.name),
          WT = (0, iT.c)(zT.metadata);
        WT[kT] || (WT[kT] = {
          type: TT,
          sourceName: oT
        })
      }
    }

    function kT(TT) {
      return function(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (IT, iT) => {
          const zT = oT || "_" + String(iT.name);
          return {
            init(TT) {
              return void 0 === TT && zT in this || (this[zT] = TT), TT
            },
            get() {
              return this[zT]
            },
            set(oT) {
              "function" === typeof this[zT]?.equals && this[zT].equals(oT) || this[zT] !== oT && (this[zT] = oT, this[TT]())
            }
          }
        }
      }(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function WT(TT) {
      return zT(0, TT)
    }

    function XT(TT) {
      return zT(1, TT)
    }

    function BT(TT) {
      return zT(2, TT)
    }

    function FT(TT) {
      return zT(3, TT)
    }

    function ST(TT) {
      return zT(4, TT)
    }

    function DT(TT) {
      return zT(5, TT)
    }

    function LT(TT) {
      return zT(6, TT)
    }

    function xT(TT) {
      return zT(7, TT)
    }

    function cT(TT) {
      return zT(8, TT)
    }

    function KT(TT) {
      return zT(10, TT)
    }

    function MT(TT) {
      return zT(12, TT)
    }

    function rT(TT, oT, IT) {
      const iT = String(oT.name);
      let zT = null;
      const kT = function() {
        if (null === zT) {
          zT = TT, "undefined" !== typeof _native && _native[iT] && (zT = IT(_native[iT], TT));
          const WT = this && (oT.static ? this : Object.getPrototypeOf(this));
          WT?.[iT] === kT && (WT[iT] = zT)
        }
        for (var WT = arguments.length, XT = new Array(WT), BT = 0; BT < WT; BT++) XT[BT] = arguments[BT];
        return zT.apply(this, XT)
      };
      return kT
    }

    function AT(TT, oT) {
      return rT(TT, oT, (TT => TT))
    }

    function gT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (IT, iT) => {
        const zT = oT || "_" + String(iT.name);
        return {
          get() {
            return this[zT]?.value
          },
          set(oT) {
            "function" === typeof this[zT]?.value?.equals && this[zT].value.equals(oT) || this[zT].value !== oT && (this[zT].value = oT, this[TT]())
          }
        }
      }
    }
    AT.filter = function(TT) {
      return (oT, IT) => rT(oT, IT, ((oT, IT) => function() {
        for (var iT = arguments.length, zT = new Array(iT), kT = 0; kT < iT; kT++) zT[kT] = arguments[kT];
        return TT(...zT) ? oT(...zT) : IT.apply(this, zT)
      }))
    }
  },
  38799: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => FT
    });
    var iT = IT(38643),
      zT = IT(38808),
      kT = IT(36177),
      WT = IT(36118),
      XT = IT(38781);
    const BT = function(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const kT = TT();
      zT.c && zT.c.HasTags(oT) && zT.c.AddTagsTo(kT, zT.c.GetTags(oT, !0));
      const WT = (0, XT.g)(kT),
        BT = {};
      for (const zT in WT) {
        const TT = WT[zT],
          XT = oT[zT],
          ST = TT.type;
        if (void 0 !== XT && null !== XT && ("uniqueId" !== zT || FT.AllowLoadingUniqueId)) switch (ST) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof XT.slice ? kT[zT] = XT.slice() : kT[zT] = XT;
            break;
          case 1:
            iT.cloneTexturesOnlyOnce && BT[XT.uniqueId] ? kT[zT] = BT[XT.uniqueId] : (kT[zT] = IT || XT.isRenderTarget ? XT : XT.clone(), BT[XT.uniqueId] = kT[zT]);
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
            kT[zT] = IT ? XT : XT.clone()
        }
      }
      return kT
    };
    class FT {
      static AppendSerializedAnimations(TT, oT) {
        if (TT.animations) {
          oT.animations = [];
          for (let IT = 0; IT < TT.animations.length; IT++) {
            const iT = TT.animations[IT];
            oT.animations.push(iT.serialize())
          }
        }
      }
      static Serialize(TT, oT) {
        oT || (oT = {}), zT.c && (oT.tags = zT.c.GetTags(TT));
        const IT = (0, XT.g)(TT);
        for (const iT in IT) {
          const zT = IT[iT],
            kT = zT.sourceName || iT,
            WT = zT.type,
            XT = TT[iT];
          if (void 0 !== XT && null !== XT && ("uniqueId" !== iT || FT.AllowLoadingUniqueId)) switch (WT) {
            case 0:
              Array.isArray(XT) ? oT[kT] = XT.slice() : oT[kT] = XT;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              oT[kT] = XT.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              oT[kT] = XT.bIT();
              break;
            case 6:
            case 11:
              oT[kT] = XT.id
          }
        }
        return oT
      }
      static ParseProperties(TT, oT, IT, iT) {
        iT || (iT = "");
        const zT = (0, XT.g)(oT);
        for (const XT in zT) {
          const BT = zT[XT],
            ST = TT[BT.sourceName || XT],
            DT = BT.type;
          if (void 0 !== ST && null !== ST && ("uniqueId" !== XT || FT.AllowLoadingUniqueId)) {
            const TT = oT;
            switch (DT) {
              case 0:
                TT[XT] = ST;
                break;
              case 1:
                IT && (TT[XT] = FT._TextureParser(ST, IT, iT));
                break;
              case 2:
                TT[XT] = kT.e.FromArray(ST);
                break;
              case 3:
                TT[XT] = FT._FresnelParametersParser(ST);
                break;
              case 4:
                TT[XT] = WT.j.FromArray(ST);
                break;
              case 5:
                TT[XT] = WT.m.FromArray(ST);
                break;
              case 6:
                IT && (TT[XT] = IT.getLastMeshById(ST));
                break;
              case 7:
                TT[XT] = FT._ColorCurvesParser(ST);
                break;
              case 8:
                TT[XT] = kT.i.FromArray(ST);
                break;
              case 9:
                TT[XT] = FT._ImageProcessingConfigurationParser(ST);
                break;
              case 10:
                TT[XT] = WT.c.FromArray(ST);
                break;
              case 11:
                IT && (TT[XT] = IT.getCameraById(ST));
                break;
              case 12:
                TT[XT] = WT.b.FromArray(ST);
                break;
              case 13:
                TT[XT] = WT.n.FromArray(ST)
            }
          }
        }
      }
      static Parse(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const kT = TT();
        return zT.c && zT.c.AddTagsTo(kT, oT.tags), FT.ParseProperties(oT, kT, IT, iT), kT
      }
      static Clone(TT, oT) {
        return BT(TT, oT, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(TT, oT) {
        return BT(TT, oT, !0)
      }
    }
    FT.AllowLoadingUniqueId = !1, FT._ImageProcessingConfigurationParser = TT => {
      throw (0, iT.k)("ImageProcessingConfiguration")
    }, FT._FresnelParametersParser = TT => {
      throw (0, iT.k)("FresnelParameters")
    }, FT._ColorCurvesParser = TT => {
      throw (0, iT.k)("ColorCurves")
    }, FT._TextureParser = (TT, oT, IT) => {
      throw (0, iT.k)("Texture")
    }
  },
  38716: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT
    });
    var iT = IT(38667);
    class zT {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = zT.Enabled, this._lastSecValueCount++
      }
      addCount(TT, oT) {
        zT.Enabled && (this._current += TT, this._hasCurrentValue = !0, oT && this._fetchResult())
      }
      beginMonitoring() {
        zT.Enabled && (this._startMonitoringTime = iT.c.Now)
      }
      endMonitoring() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!zT.Enabled) return;
        TT && this.fetchNewFrame();
        const oT = iT.c.Now;
        this._current = oT - this._startMonitoringTime, this._hasCurrentValue = !0, TT && this._fetchResult()
      }
      gR() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const TT = iT.c.Now;
        TT - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = TT, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    zT.Enabled = !0
  },
  38897: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT,
      f: () => iT
    });
    class iT {
      constructor(TT) {
        this.length = 0, this.data = new Array(TT), this._id = iT._GlobalId++
      }
      push(TT) {
        this.data[this.length++] = TT, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(TT) {
        for (let oT = 0; oT < this.length; oT++) TT(this.data[oT])
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
          for (let oT = 0; oT < TT.length; oT++) this.data[this.length++] = (TT.data || TT)[oT]
        }
      }
      indexOf(TT) {
        const oT = this.data.indexOf(TT);
        return oT >= this.length ? -1 : oT
      }
      contains(TT) {
        return -1 !== this.indexOf(TT)
      }
    }
    iT._GlobalId = 0;
    class zT extends iT {
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
          for (let oT = 0; oT < TT.length; oT++) {
            const IT = (TT.data || TT)[oT];
            this.pushNoDuplicate(IT)
          }
        }
      }
    }
  },
  38808: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT
    });
    class iT {
      static Eval(TT, oT) {
        return "true" === (TT = TT.match(/\([^()]*\)/g) ? TT.replace(/\([^()]*\)/g, (TT => (TT = TT.slice(1, TT.length - 1), iT._HandleParenthesisContent(TT, oT)))) : iT._HandleParenthesisContent(TT, oT)) || "false" !== TT && iT.Eval(TT, oT)
      }
      static _HandleParenthesisContent(TT, oT) {
        let IT;
        oT = oT || (TT => "true" === TT);
        const zT = TT.split("||");
        for (const kT in zT)
          if (Object.prototype.hasOwnProperty.call(zT, kT)) {
            let TT = iT._SimplifyNegation(zT[kT].trim());
            const WT = TT.split("&&");
            if (WT.length > 1)
              for (let zT = 0; zT < WT.length; ++zT) {
                const kT = iT._SimplifyNegation(WT[zT].trim());
                if (IT = "true" !== kT && "false" !== kT ? "!" === kT[0] ? !oT(kT.substring(1)) : oT(kT) : "true" === kT, !IT) {
                  TT = "false";
                  break
                }
              }
            if (IT || "true" === TT) {
              IT = !0;
              break
            }
            IT = "true" !== TT && "false" !== TT ? "!" === TT[0] ? !oT(TT.substring(1)) : oT(TT) : "true" === TT
          } return IT ? "true" : "false"
      }
      static _SimplifyNegation(TT) {
        return "!true" === (TT = (TT = TT.replace(/^[\s!]+/, (TT => (TT = TT.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? TT = "false" : "!false" === TT && (TT = "true"), TT
      }
    }
    class zT {
      static EnableFor(TT) {
        TT._tags = TT._tags || {}, TT.hasTags = () => zT.HasTags(TT), TT.addTags = oT => zT.AddTagsTo(TT, oT), TT.removeTags = oT => zT.RemoveTagsFrom(TT, oT), TT.matchesTagsQuery = oT => zT.MatchesQuery(TT, oT)
      }
      static DisableFor(TT) {
        delete TT._tags, delete TT.hasTags, delete TT.addTags, delete TT.removeTags, delete TT.matchesTagsQuery
      }
      static HasTags(TT) {
        if (!TT._tags) return !1;
        const oT = TT._tags;
        for (const IT in oT)
          if (Object.prototype.hasOwnProperty.call(oT, IT)) return !0;
        return !1
      }
      static GetTags(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!TT._tags) return null;
        if (oT) {
          const oT = [];
          for (const IT in TT._tags) Object.prototype.hasOwnProperty.call(TT._tags, IT) && !0 === TT._tags[IT] && oT.push(IT);
          return oT.join(" ")
        }
        return TT._tags
      }
      static AddTagsTo(TT, oT) {
        if (!oT) return;
        if ("string" !== typeof oT) return;
        const IT = oT.split(" ");
        for (const iT of IT) zT._AddTagTo(TT, iT)
      }
      static _AddTagTo(TT, oT) {
        "" !== (oT = oT.trim()) && "true" !== oT && "false" !== oT && (oT.match(/[\s]/) || oT.match(/^([!]|([|]|[&]){2})/) || (zT.EnableFor(TT), TT._tags[oT] = !0))
      }
      static RemoveTagsFrom(TT, oT) {
        if (!zT.HasTags(TT)) return;
        const IT = oT.split(" ");
        for (const iT in IT) zT._RemoveTagFrom(TT, IT[iT])
      }
      static _RemoveTagFrom(TT, oT) {
        delete TT._tags[oT]
      }
      static MatchesQuery(TT, oT) {
        return void 0 === oT || ("" === oT ? zT.HasTags(TT) : iT.Eval(oT, (oT => zT.HasTags(TT) && TT._tags[oT])))
      }
    }
  },
  38931: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT
    });
    var iT = IT(38923),
      zT = IT(36149);
    class kT {
      constructor(TT) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new zT.d, this._scene = TT
      }
      _prepareBuffers() {
        if (this._vertexBuffers[iT.i.PositionKind]) return;
        const TT = [];
        TT.push(1, 1), TT.push(-1, 1), TT.push(-1, -1), TT.push(1, -1), this._vertexBuffers[iT.i.PositionKind] = new iT.i(this._scene.Zc(), TT, iT.i.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const TT = [];
        TT.push(0), TT.push(1), TT.push(2), TT.push(0), TT.push(2), TT.push(3), this._indexBuffer = this._scene.Zc().createIndexBuffer(TT)
      }
      _getActivePostProcesses(TT) {
        const oT = this._activePostProcesses;
        oT.length = 0;
        for (let IT = 0; IT < TT.length; IT++) {
          const iT = TT[IT];
          iT && oT.push(iT)
        }
        return oT
      }
      _rebuild() {
        const TT = this._vertexBuffers[iT.i.PositionKind];
        TT && (TT._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const IT = this._scene.activeCamera;
        return !!IT && (oT = oT || this._getActivePostProcesses(IT._postProcesses), !(!oT || 0 === oT.length || !this._scene.postProcessesEnabled) && (oT[0].activate(IT, TT, null !== oT && void 0 !== oT), !0))
      }
      directRender(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          kT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          WT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : TT.length;
        const XT = this._scene.Zc();
        for (let BT = 0; BT < WT; BT++) {
          BT < TT.length - 1 ? TT[BT + 1].activate(this._scene.activeCamera || this._scene, oT?.texture) : (oT ? XT.bindFramebuffer(oT, iT, void 0, void 0, IT, zT) : kT || XT.restoreDefaultFramebuffer(), XT._debugInsertMarker?.(`post process ${TT[BT].name} output`));
          const WT = TT[BT],
            FT = WT.apply();
          FT && (WT.onBeforeRenderObservable.notifyObservers(FT), this._prepareBuffers(), XT.bindBuffers(this._vertexBuffers, this._indexBuffer, FT), XT.drawElementsType(0, 0, 6), WT.onAfterRenderObservable.notifyObservers(FT))
        }
        XT.setDepthBuffer(!0), XT.setDepthWrite(!0)
      }
      _finalizeFrame(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const kT = this._scene.activeCamera;
        if (!kT) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (iT = iT || this._getActivePostProcesses(kT._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const WT = this._scene.Zc();
        for (let XT = 0, BT = iT.length; XT < BT; XT++) {
          const FT = iT[XT];
          if (XT < BT - 1 ? FT._outputTexture = iT[XT + 1].activate(kT, oT?.texture) : (oT ? (WT.bindFramebuffer(oT, IT, void 0, void 0, zT), FT._outputTexture = oT) : (WT.restoreDefaultFramebuffer(), FT._outputTexture = null), WT._debugInsertMarker?.(`post process ${iT[XT].name} output`)), TT) break;
          const ST = FT.apply();
          ST && (FT.onBeforeRenderObservable.notifyObservers(ST), this._prepareBuffers(), WT.bindBuffers(this._vertexBuffers, this._indexBuffer, ST), WT.drawElementsType(0, 0, 6), FT.onAfterRenderObservable.notifyObservers(ST))
        }
        WT.setDepthBuffer(!0), WT.setDepthWrite(!0), WT.setAlphaMode(0)
      }
      dispose() {
        const TT = this._vertexBuffers[iT.i.PositionKind];
        TT && (TT.dispose(), this._vertexBuffers[iT.i.PositionKind] = null), this._indexBuffer && (this._scene.Zc()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  38946: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT
    });
    var iT = IT(38897),
      zT = IT(36118);
    class kT {
      set opaqueSortCompareFn(TT) {
        this._opaqueSortCompareFn = TT || kT.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(TT) {
        this._alphaTestSortCompareFn = TT || kT.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(TT) {
        this._transparentSortCompareFn = TT || kT.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = TT, this._opaqueSubMeshes = new iT.f(256), this._transparentSubMeshes = new iT.f(256), this._alphaTestSubMeshes = new iT.f(256), this._depthOnlySubMeshes = new iT.f(256), this._particleSystems = new iT.f(256), this._spriteManagers = new iT.f(256), this._empty = !0, this._edgesRenderers = new iT.c(16), this.disableDepthPrePass = !1, this._scene = oT, this.opaqueSortCompareFn = IT, this.alphaTestSortCompareFn = zT, this.transparentSortCompareFn = kT
      }
      render(TT, oT, IT, iT) {
        let zT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          kT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          WT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          XT = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          BT = arguments.length > 8 ? arguments[8] : void 0;
        if (TT) return void TT(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const FT = this._scene.Zc();
        zT && 0 !== this._depthOnlySubMeshes.length && (FT.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), FT.setColorWrite(!0)), kT && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), WT && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const ST = FT.getStencilBuffer();
        if (FT.setStencilBuffer(!1), oT && this._renderSprites(), IT && this._renderParticles(iT), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), XT && (BT || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (FT.setStencilBuffer(ST), BT) BT(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const TT = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            TT.length && this._renderTransparent(TT)
          } else this._renderTransparent(this._transparentSubMeshes);
          FT.setAlphaMode(0)
        }
        if (FT.setStencilBuffer(!1), kT && this._edgesRenderers.length) {
          for (let TT = 0; TT < this._edgesRenderers.length; TT++) this._edgesRenderers.data[TT].render();
          FT.setAlphaMode(0)
        }
        FT.setStencilBuffer(ST)
      }
      _renderOpaqueSorted(TT) {
        kT._RenderSorted(TT, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(TT) {
        kT._RenderSorted(TT, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(TT) {
        kT._RenderSorted(TT, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(TT, oT, IT, iT, WT) {
        let XT, BT = 0;
        const FT = IT ? IT.globalPosition : kT._ZeroVector;
        if (iT && oT !== kT.PainterSortCompare)
          for (; BT < TT.length; BT++) XT = TT.data[BT], XT._alphaIndex = XT.getMesh().alphaIndex, XT._distanceToCamera = zT.m.Distance(XT.GJ().KiT.centerWorld, FT);
        const ST = TT.length === TT.data.length ? TT.data : TT.data.slice(0, TT.length);
        oT && ST.sort(oT);
        const DT = ST[0].getMesh().pC();
        for (BT = 0; BT < ST.length; BT++) {
          if (XT = ST[BT], DT._activeMeshesFrozenButKeepClipping && !XT.isInFrustum(DT._frustumPlanes)) continue;
          let TT = !1;
          if (iT) {
            const oT = XT.bc();
            if (oT && oT.needDepthPrePass && !WT) {
              TT = !0;
              const IT = oT.pC().Zc();
              IT.setColorWrite(!1), IT.setAlphaMode(0), XT.render(!1), IT.setColorWrite(!0)
            }
          }
          const oT = XT._renderingMesh;
          !TT && oT._renderRunFollower(XT, iT) || XT.render(iT)
        }
      }
      static defaultTransparentSortCompare(TT, oT) {
        return TT._alphaIndex > oT._alphaIndex ? 1 : TT._alphaIndex < oT._alphaIndex ? -1 : kT.backToFrontSortCompare(TT, oT)
      }
      static backToFrontSortCompare(TT, oT) {
        return TT._distanceToCamera < oT._distanceToCamera ? 1 : TT._distanceToCamera > oT._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(TT, oT) {
        return TT._distanceToCamera < oT._distanceToCamera ? -1 : TT._distanceToCamera > oT._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(TT, oT) {
        const IT = TT.getMesh(),
          iT = oT.getMesh();
        return IT.material && iT.material ? IT.material.uniqueId - iT.material.uniqueId : IT.uniqueId - iT.uniqueId
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
      dispatch(TT, oT, IT) {
        void 0 === oT && (oT = TT.getMesh()), void 0 === IT && (IT = TT.bc()), null !== IT && void 0 !== IT && (IT.needAlphaBlendingForMesh(oT) ? this._transparentSubMeshes.push(TT) : IT.needAlphaTestingForMesh(oT) ? (IT.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(TT), this._alphaTestSubMeshes.push(TT)) : (IT.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(TT), this._opaqueSubMeshes.push(TT)), oT._renderingGroup = this, oT._edgesRenderer && oT.isEnabled() && oT.isVisible && oT._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(oT._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(TT) {
        this._spriteManagers.push(TT), this._empty = !1
      }
      dispatchParticles(TT) {
        this._particleSystems.push(TT), this._empty = !1
      }
      _renderParticles(TT) {
        if (0 === this._particleSystems.length) return;
        const oT = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let IT = 0; IT < this._particleSystems.length; IT++) {
          const iT = this._particleSystems.data[IT];
          if (0 === (oT && oT.layerMask & iT.layerMask)) continue;
          const zT = iT.emitter;
          zT.position && TT && -1 === TT.indexOf(zT) || this._scene._activeParticles.addCount(iT.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const TT = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let oT = 0; oT < this._spriteManagers.length; oT++) {
          const IT = this._spriteManagers.data[oT];
          0 !== (TT && TT.layerMask & IT.layerMask) && IT.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    kT._ZeroVector = zT.m.Zero()
  },
  38941: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT
    });
    var iT = IT(38946);
    class zT {}
    class kT {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(TT) {
        this._disableDepthPrePass = TT;
        for (const oT of this._renderingGroups) oT.disableDepthPrePass = TT
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(TT) {
        TT !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = TT, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const TT of this._scene.meshes)
          if (TT.pR)
            for (const oT of TT.pR) oT._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const TT of this._scene.spriteManagers) TT._wasDispatched = !1;
        for (const TT of this._scene.bR) TT._wasDispatched = !1
      }
      constructor(TT) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new zT, this._maintainStateBetweenFrames = !1, this._scene = TT;
        for (let oT = kT.MIN_RENDERINGGROUPS; oT < kT.MAX_RENDERINGGROUPS; oT++) this._autoClearDepthStencil[oT] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(TT) {
        const oT = TT || 0;
        return this._prepareRenderingGroup(oT), this._renderingGroups[oT]
      }
      _clearDepthStencilBuffer() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.Zc().clear(null, !1, TT, oT), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(TT, oT, IT, iT) {
        let zT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          WT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          XT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          BT = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          FT = arguments.length > 8 ? arguments[8] : void 0,
          ST = arguments.length > 9 ? arguments[9] : void 0;
        const DT = this._renderingGroupInfo;
        DT.NK = this._scene, DT.camera = this._scene.activeCamera, DT.renderingManager = this;
        const LT = ST ?? this._scene.spriteManagers;
        if (LT && iT)
          for (let kT = 0; kT < LT.length; kT++) {
            const TT = LT[kT];
            this.dispatchSprites(TT)
          }
        for (let xT = kT.MIN_RENDERINGGROUPS; xT < kT.MAX_RENDERINGGROUPS; xT++) {
          this._depthStencilBufferAlreadyCleaned = xT === kT.MIN_RENDERINGGROUPS;
          const ST = this._renderingGroups[xT];
          if (!ST || ST._empty) continue;
          const LT = 1 << xT;
          if (DT.renderingGroupId = xT, this._scene.onBeforeRenderingGroupObservable.notifyObservers(DT, LT), kT.AUTOCLEAR) {
            const TT = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(xT) : this._autoClearDepthStencil[xT];
            TT && TT.autoClear && this._clearDepthStencilBuffer(TT.depth, TT.stencil)
          }
          for (let TT = 0, oT = this._scene._beforeRenderingGroupDrawStage; TT < oT.length; TT++) {
            oT[TT].action(xT)
          }
          ST.render(TT, iT, IT, oT, zT, WT, XT, BT, FT);
          for (let TT = 0, oT = this._scene._afterRenderingGroupDrawStage; TT < oT.length; TT++) {
            oT[TT].action(xT)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(DT, LT)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let TT = kT.MIN_RENDERINGGROUPS; TT < kT.MAX_RENDERINGGROUPS; TT++) {
            const oT = this._renderingGroups[TT];
            oT && oT.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let TT = kT.MIN_RENDERINGGROUPS; TT < kT.MAX_RENDERINGGROUPS; TT++) {
            const oT = this._renderingGroups[TT];
            oT && oT.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let TT = kT.MIN_RENDERINGGROUPS; TT < kT.MAX_RENDERINGGROUPS; TT++) {
          const oT = this._renderingGroups[TT];
          oT && oT.dispose()
        }
      }
      _prepareRenderingGroup(TT) {
        void 0 === this._renderingGroups[TT] && (this._renderingGroups[TT] = new iT.e(TT, this._scene, this._customOpaqueSortCompareFn[TT], this._customAlphaTestSortCompareFn[TT], this._customTransparentSortCompareFn[TT]), this._renderingGroups[TT].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(TT) {
        this.maintainStateBetweenFrames && TT._wasDispatched || (TT._wasDispatched = !0, this.getRenderingGroup(TT.renderingGroupId).dispatchSprites(TT))
      }
      dispatchParticles(TT) {
        this.maintainStateBetweenFrames && TT._wasDispatched || (TT._wasDispatched = !0, this.getRenderingGroup(TT.renderingGroupId).dispatchParticles(TT))
      }
      dispatch(TT, oT, IT) {
        void 0 === oT && (oT = TT.getMesh()), this.maintainStateBetweenFrames && TT._wasDispatched || (TT._wasDispatched = !0, this.getRenderingGroup(oT.renderingGroupId).dispatch(TT, oT, IT))
      }
      setRenderingOrder(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[TT] = oT, this._customAlphaTestSortCompareFn[TT] = IT, this._customTransparentSortCompareFn[TT] = iT, this._renderingGroups[TT]) {
          const oT = this._renderingGroups[TT];
          oT.opaqueSortCompareFn = this._customOpaqueSortCompareFn[TT], oT.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[TT], oT.transparentSortCompareFn = this._customTransparentSortCompareFn[TT]
        }
      }
      setRenderingAutoClearDepthStencil(TT, oT) {
        let IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          iT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[TT] = {
          autoClear: oT,
          depth: IT,
          stencil: iT
        }
      }
      getAutoClearDepthStencilSetup(TT) {
        return this._autoClearDepthStencil[TT]
      }
    }
    kT.MAX_RENDERINGGROUPS = 4, kT.MIN_RENDERINGGROUPS = 0, kT.AUTOCLEAR = !0
  },
  38673: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT
    });
    class iT {
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
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[oT] !== TT && (TT ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[oT] = TT, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(TT, oT, IT, iT) {
        this._blendConstants[0] === TT && this._blendConstants[1] === oT && this._blendConstants[2] === IT && this._blendConstants[3] === iT || (this._blendConstants[0] = TT, this._blendConstants[1] = oT, this._blendConstants[2] = IT, this._blendConstants[3] = iT, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(TT, oT, IT, iT) {
        const zT = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[zT + 0] === TT && this._blendFunctionParameters[zT + 1] === oT && this._blendFunctionParameters[zT + 2] === IT && this._blendFunctionParameters[zT + 3] === iT || (this._blendFunctionParameters[zT + 0] = TT, this._blendFunctionParameters[zT + 1] = oT, this._blendFunctionParameters[zT + 2] = IT, this._blendFunctionParameters[zT + 3] = iT, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(TT, oT) {
        const IT = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[IT + 0] === TT && this._blendEquationParameters[IT + 1] === oT || (this._blendEquationParameters[IT + 0] = TT, this._blendEquationParameters[IT + 1] = oT, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== oT && (this._numTargets = oT, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== IT && (this._blendDisabledTargetsMask = IT, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (TT.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === oT || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (oT > 1 && 0 !== IT && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & IT) ? TT.enable(TT.BLEND) : TT.disable(TT.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (TT.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (TT.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const iT = TT;
        if (this._isAlphaBlendDirty) {
          for (let zT = 0; zT < oT; zT++) {
            const oT = zT < this._numTargetEnabled ? zT : 0;
            this._alphaBlend[oT] && 0 === (IT & 1 << zT) ? iT.enableIndexed(TT.BLEND, zT) : iT.disableIndexed(TT.BLEND, zT)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let TT = 0; TT < oT; TT++) {
            const oT = TT < this._numTargetEnabled ? 4 * TT : 0;
            iT.blendFuncSeparateIndexed(TT, this._blendFunctionParameters[oT + 0], this._blendFunctionParameters[oT + 1], this._blendFunctionParameters[oT + 2], this._blendFunctionParameters[oT + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let TT = 0; TT < oT; TT++) {
            const oT = TT < this._numTargetEnabled ? 2 * TT : 0;
            iT.blendEquationSeparateIndexed(TT, this._blendEquationParameters[oT + 0], this._blendEquationParameters[oT + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(TT, oT) {
        let IT = 32774;
        switch (TT) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, oT);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, oT);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, oT);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, oT);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, oT);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, oT);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, oT);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, oT);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, oT);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, oT);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, oT);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, oT);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, oT);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, oT);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, oT);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, oT);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, oT), IT = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, oT), IT = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, oT);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, oT)
        }
        this.setAlphaEquationParameters(IT, IT, oT)
      }
    }
  },
  38974: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT
    });
    class iT {}
    iT._IsPickingAvailable = !1
  },
  38882: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => FI,
      d: () => XI
    });
    var iT = IT(38886),
      zT = IT(38653),
      kT = IT(38667),
      WT = IT(36149),
      XT = IT(38897);
    class BT {
      constructor() {
        this._count = 0, this._data = {}
      }
      SIT(TT) {
        this.clear(), TT.forEach(((TT, oT) => this.add(TT, oT)))
      }
      get(TT) {
        const oT = this._data[TT];
        if (void 0 !== oT) return oT
      }
      getOrAddWithFactory(TT, oT) {
        let IT = this.get(TT);
        return void 0 !== IT || (IT = oT(TT), IT && this.add(TT, IT)), IT
      }
      getOrAdd(TT, oT) {
        const IT = this.get(TT);
        return void 0 !== IT ? IT : (this.add(TT, oT), oT)
      }
      contains(TT) {
        return void 0 !== this._data[TT]
      }
      add(TT, oT) {
        return void 0 === this._data[TT] && (this._data[TT] = oT, ++this._count, !0)
      }
      set(TT, oT) {
        return void 0 !== this._data[TT] && (this._data[TT] = oT, !0)
      }
      getAndRemove(TT) {
        const oT = this.get(TT);
        return void 0 !== oT ? (delete this._data[TT], --this._count, oT) : null
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
        for (const oT in this._data) {
          TT(oT, this._data[oT])
        }
      }
      first(TT) {
        for (const oT in this._data) {
          const IT = TT(oT, this._data[oT]);
          if (IT) return IT
        }
        return null
      }
    }
    var FT = IT(38808),
      ST = IT(36118),
      DT = IT(38899),
      LT = IT(38911),
      xT = IT(38918);
    class cT {
      constructor(TT, oT, IT, iT, zT, kT) {
        this.source = TT, this.pointerX = oT, this.pointerY = IT, this.meshUnderPointer = iT, this.sourceEvent = zT, this.additionalData = kT
      }
      static CreateNew(TT, oT, IT) {
        const iT = TT.pC();
        return new cT(TT, iT.pointerX, iT.pointerY, iT.meshUnderPointer || TT, oT, IT)
      }
      static CreateNewFromSprite(TT, oT, IT, iT) {
        return new cT(TT, oT.pointerX, oT.pointerY, oT.meshUnderPointer, IT, iT)
      }
      static CreateNewFromScene(TT, oT) {
        return new cT(null, TT.pointerX, TT.pointerY, TT.meshUnderPointer, oT)
      }
      static CreateNewFromPrimitive(TT, oT, IT, iT) {
        return new cT(TT, oT.x, oT.y, null, IT, iT)
      }
    }
    var KT = IT(38931),
      MT = IT(38936),
      rT = IT(38941),
      AT = IT(38949),
      gT = IT(38626),
      hT = IT(36146),
      wT = IT(38643),
      mT = IT(38957);
    class eT {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const TT in eT.Triggers)
          if (Object.prototype.hasOwnProperty.call(eT.Triggers, TT)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const TT in eT.Triggers)
          if (Object.prototype.hasOwnProperty.call(eT.Triggers, TT)) {
            const oT = parseInt(TT);
            if (oT >= 1 && oT <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(TT) {
        for (const oT in eT.Triggers)
          if (Object.prototype.hasOwnProperty.call(eT.Triggers, oT)) {
            if (parseInt(oT) === TT) return !0
          } return !1
      }
    }
    eT.Triggers = {};
    var RT, uT, vT, ET, fT, CT, jT, JT = IT(38963);
    ! function(TT) {
      TT[TT.Generic = 0] = "Generic", TT[TT.Keyboard = 1] = "Keyboard", TT[TT.Mouse = 2] = "Mouse", TT[TT.Touch = 3] = "Touch", TT[TT.DualShock = 4] = "DualShock", TT[TT.Xbox = 5] = "Xbox", TT[TT.Switch = 6] = "Switch", TT[TT.DualSense = 7] = "DualSense"
    }(RT || (RT = {})),
    function(TT) {
      TT[TT.Horizontal = 0] = "Horizontal", TT[TT.Vertical = 1] = "Vertical", TT[TT.LeftClick = 2] = "LeftClick", TT[TT.MiddleClick = 3] = "MiddleClick", TT[TT.RightClick = 4] = "RightClick", TT[TT.BrowserBack = 5] = "BrowserBack", TT[TT.BrowserForward = 6] = "BrowserForward", TT[TT.MouseWheelX = 7] = "MouseWheelX", TT[TT.MouseWheelY = 8] = "MouseWheelY", TT[TT.MouseWheelZ = 9] = "MouseWheelZ", TT[TT.Move = 12] = "Move"
    }(uT || (uT = {})),
    function(TT) {
      TT[TT.Horizontal = 0] = "Horizontal", TT[TT.Vertical = 1] = "Vertical", TT[TT.LeftClick = 2] = "LeftClick", TT[TT.MiddleClick = 3] = "MiddleClick", TT[TT.RightClick = 4] = "RightClick", TT[TT.BrowserBack = 5] = "BrowserBack", TT[TT.BrowserForward = 6] = "BrowserForward", TT[TT.MouseWheelX = 7] = "MouseWheelX", TT[TT.MouseWheelY = 8] = "MouseWheelY", TT[TT.MouseWheelZ = 9] = "MouseWheelZ", TT[TT.DeltaHorizontal = 10] = "DeltaHorizontal", TT[TT.DeltaVertical = 11] = "DeltaVertical"
    }(vT || (vT = {})),
    function(TT) {
      TT[TT.Cross = 0] = "Cross", TT[TT.Circle = 1] = "Circle", TT[TT.Square = 2] = "Square", TT[TT.Triangle = 3] = "Triangle", TT[TT.L1 = 4] = "L1", TT[TT.R1 = 5] = "R1", TT[TT.L2 = 6] = "L2", TT[TT.R2 = 7] = "R2", TT[TT.Share = 8] = "Share", TT[TT.Options = 9] = "Options", TT[TT.L3 = 10] = "L3", TT[TT.R3 = 11] = "R3", TT[TT.DPadUp = 12] = "DPadUp", TT[TT.DPadDown = 13] = "DPadDown", TT[TT.DPadLeft = 14] = "DPadLeft", TT[TT.DPadRight = 15] = "DPadRight", TT[TT.Home = 16] = "Home", TT[TT.TouchPad = 17] = "TouchPad", TT[TT.LStickXAxis = 18] = "LStickXAxis", TT[TT.LStickYAxis = 19] = "LStickYAxis", TT[TT.RStickXAxis = 20] = "RStickXAxis", TT[TT.RStickYAxis = 21] = "RStickYAxis"
    }(ET || (ET = {})),
    function(TT) {
      TT[TT.Cross = 0] = "Cross", TT[TT.Circle = 1] = "Circle", TT[TT.Square = 2] = "Square", TT[TT.Triangle = 3] = "Triangle", TT[TT.L1 = 4] = "L1", TT[TT.R1 = 5] = "R1", TT[TT.L2 = 6] = "L2", TT[TT.R2 = 7] = "R2", TT[TT.Create = 8] = "Create", TT[TT.Options = 9] = "Options", TT[TT.L3 = 10] = "L3", TT[TT.R3 = 11] = "R3", TT[TT.DPadUp = 12] = "DPadUp", TT[TT.DPadDown = 13] = "DPadDown", TT[TT.DPadLeft = 14] = "DPadLeft", TT[TT.DPadRight = 15] = "DPadRight", TT[TT.Home = 16] = "Home", TT[TT.TouchPad = 17] = "TouchPad", TT[TT.LStickXAxis = 18] = "LStickXAxis", TT[TT.LStickYAxis = 19] = "LStickYAxis", TT[TT.RStickXAxis = 20] = "RStickXAxis", TT[TT.RStickYAxis = 21] = "RStickYAxis"
    }(fT || (fT = {})),
    function(TT) {
      TT[TT.A = 0] = "A", TT[TT.B = 1] = "B", TT[TT.X = 2] = "X", TT[TT.Y = 3] = "Y", TT[TT.LB = 4] = "LB", TT[TT.RB = 5] = "RB", TT[TT.LT = 6] = "LT", TT[TT.RT = 7] = "RT", TT[TT.Back = 8] = "Back", TT[TT.Start = 9] = "Start", TT[TT.LS = 10] = "LS", TT[TT.RS = 11] = "RS", TT[TT.DPadUp = 12] = "DPadUp", TT[TT.DPadDown = 13] = "DPadDown", TT[TT.DPadLeft = 14] = "DPadLeft", TT[TT.DPadRight = 15] = "DPadRight", TT[TT.Home = 16] = "Home", TT[TT.LStickXAxis = 17] = "LStickXAxis", TT[TT.LStickYAxis = 18] = "LStickYAxis", TT[TT.RStickXAxis = 19] = "RStickXAxis", TT[TT.RStickYAxis = 20] = "RStickYAxis"
    }(CT || (CT = {})),
    function(TT) {
      TT[TT.B = 0] = "B", TT[TT.A = 1] = "A", TT[TT.Y = 2] = "Y", TT[TT.X = 3] = "X", TT[TT.L = 4] = "L", TT[TT.R = 5] = "R", TT[TT.ZL = 6] = "ZL", TT[TT.ZR = 7] = "ZR", TT[TT.Minus = 8] = "Minus", TT[TT.Plus = 9] = "Plus", TT[TT.LS = 10] = "LS", TT[TT.RS = 11] = "RS", TT[TT.DPadUp = 12] = "DPadUp", TT[TT.DPadDown = 13] = "DPadDown", TT[TT.DPadLeft = 14] = "DPadLeft", TT[TT.DPadRight = 15] = "DPadRight", TT[TT.Home = 16] = "Home", TT[TT.Capture = 17] = "Capture", TT[TT.LStickXAxis = 18] = "LStickXAxis", TT[TT.LStickYAxis = 19] = "LStickYAxis", TT[TT.RStickXAxis = 20] = "RStickXAxis", TT[TT.RStickYAxis = 21] = "RStickYAxis"
    }(jT || (jT = {}));
    var UT = IT(38966);
    class aT {
      static CreateDeviceEvent(TT, oT, IT, iT, zT, kT, WT) {
        switch (TT) {
          case RT.Keyboard:
            return this._CreateKeyboardEvent(IT, iT, zT, kT);
          case RT.Mouse:
            if (IT === uT.MouseWheelX || IT === uT.MouseWheelY || IT === uT.MouseWheelZ) return this._CreateWheelEvent(TT, oT, IT, iT, zT, kT);
          case RT.Touch:
            return this._CreatePointerEvent(TT, oT, IT, iT, zT, kT, WT);
          default:
            throw `Unable to generate event for device ${RT[TT]}`
        }
      }
      static _CreatePointerEvent(TT, oT, IT, iT, zT, kT, WT) {
        const XT = this._CreateMouseEvent(TT, oT, IT, iT, zT, kT);
        TT === RT.Mouse ? (XT.deviceType = RT.Mouse, XT.pointerId = 1, XT.pointerType = "mouse") : (XT.deviceType = RT.Touch, XT.pointerId = WT ?? oT, XT.pointerType = "touch");
        let BT = 0;
        return BT += zT.pollInput(TT, oT, uT.LeftClick), BT += 2 * zT.pollInput(TT, oT, uT.RightClick), BT += 4 * zT.pollInput(TT, oT, uT.MiddleClick), XT.buttons = BT, IT === uT.Move ? XT.type = "pointermove" : IT >= uT.LeftClick && IT <= uT.RightClick && (XT.type = 1 === iT ? "pointerdown" : "pointerup", XT.button = IT - 2), XT
      }
      static _CreateWheelEvent(TT, oT, IT, iT, zT, kT) {
        const WT = this._CreateMouseEvent(TT, oT, IT, iT, zT, kT);
        switch (WT.pointerId = 1, WT.type = "wheel", WT.deltaMode = UT.b.DOM_DELTA_PIXEL, WT.deltaX = 0, WT.deltaY = 0, WT.deltaZ = 0, IT) {
          case uT.MouseWheelX:
            WT.deltaX = iT;
            break;
          case uT.MouseWheelY:
            WT.deltaY = iT;
            break;
          case uT.MouseWheelZ:
            WT.deltaZ = iT
        }
        return WT
      }
      static _CreateMouseEvent(TT, oT, IT, iT, zT, kT) {
        const WT = this._CreateEvent(kT),
          XT = zT.pollInput(TT, oT, uT.Horizontal),
          BT = zT.pollInput(TT, oT, uT.Vertical);
        return kT ? (WT.movementX = 0, WT.movementY = 0, WT.offsetX = WT.movementX - kT.getBoundingClientRect().x, WT.offsetY = WT.movementY - kT.getBoundingClientRect().y) : (WT.movementX = zT.pollInput(TT, oT, 10), WT.movementY = zT.pollInput(TT, oT, 11), WT.offsetX = 0, WT.offsetY = 0), this._CheckNonCharacterKeys(WT, zT), WT.clientX = XT, WT.clientY = BT, WT.x = XT, WT.y = BT, WT.deviceType = TT, WT.deviceSlot = oT, WT.inputIndex = IT, WT
      }
      static _CreateKeyboardEvent(TT, oT, IT, iT) {
        const zT = this._CreateEvent(iT);
        return this._CheckNonCharacterKeys(zT, IT), zT.deviceType = RT.Keyboard, zT.deviceSlot = 0, zT.inputIndex = TT, zT.type = 1 === oT ? "keydown" : "keyup", zT.key = String.fromCharCode(TT), zT.keyCode = TT, zT
      }
      static _CheckNonCharacterKeys(TT, oT) {
        const IT = oT.isDeviceAvailable(RT.Keyboard),
          iT = IT && 1 === oT.pollInput(RT.Keyboard, 0, 18),
          zT = IT && 1 === oT.pollInput(RT.Keyboard, 0, 17),
          kT = IT && (1 === oT.pollInput(RT.Keyboard, 0, 91) || 1 === oT.pollInput(RT.Keyboard, 0, 92) || 1 === oT.pollInput(RT.Keyboard, 0, 93)),
          WT = IT && 1 === oT.pollInput(RT.Keyboard, 0, 16);
        TT.altKey = iT, TT.ctrlKey = zT, TT.metaKey = kT, TT.shiftKey = WT
      }
      static _CreateEvent(TT) {
        const oT = {
          preventDefault: () => {}
        };
        return oT.target = TT, oT
      }
    }
    class YT {
      constructor(TT, oT, IT) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(TT, oT, ((TT, oT, iT, zT) => {
          const kT = aT.CreateDeviceEvent(TT, oT, iT, zT, this);
          IT(TT, oT, kT)
        })) : this._createDummyNativeInput()
      }
      pollInput(TT, oT, IT) {
        return this._nativeInput.pollInput(TT, oT, IT)
      }
      isDeviceAvailable(TT) {
        return TT === RT.Mouse || TT === RT.Touch
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
    const QT = Object.keys(uT).length / 2;
    class OT {
      constructor(TT, oT, IT, zT) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = iT.i.IsSafari(), this._usingMacOs = (0, gT.g)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = TT => {}, this._keyboardUpEvent = TT => {}, this._keyboardBlurEvent = TT => {}, this._pointerMoveEvent = TT => {}, this._pointerDownEvent = TT => {}, this._pointerUpEvent = TT => {}, this._pointerCancelEvent = TT => {}, this._pointerCancelTouch = TT => {}, this._pointerLeaveEvent = TT => {}, this._pointerWheelEvent = TT => {}, this._pointerBlurEvent = TT => {}, this._pointerMacOsChromeOutEvent = TT => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, gT.g)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, gT.g)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = TT => {}, this._gamepadDisconnectedEvent = TT => {}, this._eventPrefix = iT.i.GetPointerPrefix(TT), this._engine = TT, this._onDeviceConnected = oT, this._onDeviceDisconnected = IT, this._onInputChanged = zT, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(TT, oT, IT) {
        const zT = this._inputs[TT][oT];
        if (!zT) throw `Unable to find device ${RT[TT]}`;
        TT >= RT.DualShock && TT <= RT.DualSense && this._updateDevice(TT, oT, IT);
        const kT = zT[IT];
        if (void 0 === kT) throw `Unable to find input ${IT} for device ${RT[TT]} in slot ${oT}`;
        return IT === uT.Move && iT.i.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), kT
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
                for (const oT in TT) {
                  const IT = TT[+oT];
                  if (IT)
                    for (let TT = 0; TT < IT.length; TT++) IT[TT] = 0
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
          for (const oT of TT) oT && this._addGamePad(oT)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(RT.Mouse, 0, 0, 0)
      }
      _addGamePad(TT) {
        const oT = this._getGamepadDeviceType(TT.id),
          IT = TT.index;
        this._gamepads = this._gamepads || new Array(TT.index + 1), this._registerDevice(oT, IT, TT.buttons.length + TT.axes.length), this._gamepads[IT] = oT
      }
      _addPointerDevice(TT, oT, IT, iT) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(TT, oT, QT);
        const zT = this._inputs[TT][oT];
        zT[0] = IT, zT[1] = iT
      }
      _registerDevice(TT, oT, IT) {
        if (void 0 === oT) throw `Unable to register device ${RT[TT]} to undefined slot.`;
        if (this._inputs[TT] || (this._inputs[TT] = {}), !this._inputs[TT][oT]) {
          const iT = new Array(IT);
          iT.fill(0), this._inputs[TT][oT] = iT, this._onDeviceConnected(TT, oT)
        }
      }
      _unregisterDevice(TT, oT) {
        this._inputs[TT][oT] && (delete this._inputs[TT][oT], this._onDeviceDisconnected(TT, oT))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = TT => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(RT.Keyboard, 0, 255));
          const oT = this._inputs[RT.Keyboard][0];
          if (oT) {
            oT[TT.keyCode] = 1;
            const IT = TT;
            IT.inputIndex = TT.keyCode, this._usingMacOs && TT.metaKey && "Meta" !== TT.key && (this._metaKeys.includes(TT.keyCode) || this._metaKeys.push(TT.keyCode)), this._onInputChanged(RT.Keyboard, 0, IT)
          }
        }, this._keyboardUpEvent = TT => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(RT.Keyboard, 0, 255));
          const oT = this._inputs[RT.Keyboard][0];
          if (oT) {
            oT[TT.keyCode] = 0;
            const IT = TT;
            if (IT.inputIndex = TT.keyCode, this._usingMacOs && "Meta" === TT.key && this._metaKeys.length > 0) {
              for (const TT of this._metaKeys) {
                const IT = aT.CreateDeviceEvent(RT.Keyboard, 0, TT, 0, this, this._elementToAttachTo);
                oT[TT] = 0, this._onInputChanged(RT.Keyboard, 0, IT)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(RT.Keyboard, 0, IT)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const TT = this._inputs[RT.Keyboard][0];
            for (let oT = 0; oT < TT.length; oT++)
              if (0 !== TT[oT]) {
                TT[oT] = 0;
                const IT = aT.CreateDeviceEvent(RT.Keyboard, 0, oT, 0, this, this._elementToAttachTo);
                this._onInputChanged(RT.Keyboard, 0, IT)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, gT.g)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let iT = 0; iT < this._maxTouchPoints; iT++) this._activeTouchIds[iT] = -1;
        this._pointerMoveEvent = TT => {
          const oT = this._getPointerType(TT);
          let IT = oT === RT.Mouse ? 0 : this._activeTouchIds.indexOf(TT.pointerId);
          if (oT === RT.Touch && -1 === IT) {
            if (0 === TT.buttons) return;
            const zT = this._activeTouchIds.indexOf(-1);
            if (!(zT >= 0)) return void iT.i.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            IT = zT, this._activeTouchIds[zT] = TT.pointerId, this._onDeviceConnected(oT, IT)
          }
          this._inputs[oT] || (this._inputs[oT] = {}), this._inputs[oT][IT] || this._addPointerDevice(oT, IT, TT.clientX, TT.clientY);
          const zT = this._inputs[oT][IT];
          if (zT) {
            const iT = TT;
            iT.inputIndex = uT.Move, zT[uT.Horizontal] = TT.clientX, zT[uT.Vertical] = TT.clientY, oT === RT.Touch && 0 === zT[uT.LeftClick] && (zT[uT.LeftClick] = 1), void 0 === TT.pointerId && (TT.pointerId = this._mouseId), this._onInputChanged(oT, IT, iT), this._usingSafari || -1 === TT.button || (iT.inputIndex = TT.button + 2, zT[TT.button + 2] = zT[TT.button + 2] ? 0 : 1, this._onInputChanged(oT, IT, iT))
          }
        }, this._pointerDownEvent = TT => {
          const oT = this._getPointerType(TT);
          let IT = oT === RT.Mouse ? 0 : TT.pointerId;
          if (oT === RT.Touch) {
            let oT = this._activeTouchIds.indexOf(TT.pointerId);
            if (-1 === oT && (oT = this._activeTouchIds.indexOf(-1)), !(oT >= 0)) return void iT.i.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            IT = oT, this._activeTouchIds[oT] = TT.pointerId
          }
          this._inputs[oT] || (this._inputs[oT] = {}), this._inputs[oT][IT] ? oT === RT.Touch && this._onDeviceConnected(oT, IT) : this._addPointerDevice(oT, IT, TT.clientX, TT.clientY);
          const zT = this._inputs[oT][IT];
          if (zT) {
            const iT = zT[uT.Horizontal],
              WT = zT[uT.Vertical];
            if (oT === RT.Mouse) {
              if (void 0 === TT.pointerId && (TT.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (kT) {}
            } else if (TT.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(TT.pointerId)
            } catch (kT) {}
            zT[uT.Horizontal] = TT.clientX, zT[uT.Vertical] = TT.clientY, zT[TT.button + 2] = 1;
            const XT = TT;
            XT.inputIndex = TT.button + 2, this._onInputChanged(oT, IT, XT), iT === TT.clientX && WT === TT.clientY || (XT.inputIndex = uT.Move, this._onInputChanged(oT, IT, XT))
          }
        }, this._pointerUpEvent = TT => {
          const oT = this._getPointerType(TT),
            IT = oT === RT.Mouse ? 0 : this._activeTouchIds.indexOf(TT.pointerId);
          if (oT === RT.Touch) {
            if (-1 === IT) return;
            this._activeTouchIds[IT] = -1
          }
          const iT = this._inputs[oT]?.[IT];
          let zT = TT.button,
            kT = iT && 0 !== iT[zT + 2];
          if (!kT && this._isUsingFirefox && this._usingMacOs && iT && (zT = 2 === zT ? 0 : 2, kT = 0 !== iT[zT + 2]), kT) {
            const kT = iT[uT.Horizontal],
              WT = iT[uT.Vertical];
            iT[uT.Horizontal] = TT.clientX, iT[uT.Vertical] = TT.clientY, iT[zT + 2] = 0;
            const XT = TT;
            void 0 === TT.pointerId && (TT.pointerId = this._mouseId), kT === TT.clientX && WT === TT.clientY || (XT.inputIndex = uT.Move, this._onInputChanged(oT, IT, XT)), XT.inputIndex = zT + 2, oT === RT.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : TT.pointerId && this._elementToAttachTo.hasPointerCapture?.(TT.pointerId) && this._elementToAttachTo.releasePointerCapture(TT.pointerId), this._onInputChanged(oT, IT, XT), oT === RT.Touch && this._onDeviceDisconnected(oT, IT)
          }
        }, this._pointerCancelTouch = TT => {
          const oT = this._activeTouchIds.indexOf(TT);
          if (-1 === oT) return;
          this._elementToAttachTo.hasPointerCapture?.(TT) && this._elementToAttachTo.releasePointerCapture(TT), this._inputs[RT.Touch][oT][uT.LeftClick] = 0;
          const IT = aT.CreateDeviceEvent(RT.Touch, oT, uT.LeftClick, 0, this, this._elementToAttachTo, TT);
          this._onInputChanged(RT.Touch, oT, IT), this._activeTouchIds[oT] = -1, this._onDeviceDisconnected(RT.Touch, oT)
        }, this._pointerCancelEvent = TT => {
          if ("mouse" === TT.pointerType) {
            const TT = this._inputs[RT.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let oT = uT.LeftClick; oT <= uT.BrowserForward; oT++)
              if (1 === TT[oT]) {
                TT[oT] = 0;
                const IT = aT.CreateDeviceEvent(RT.Mouse, 0, oT, 0, this, this._elementToAttachTo);
                this._onInputChanged(RT.Mouse, 0, IT)
              }
          } else this._pointerCancelTouch(TT.pointerId)
        }, this._pointerLeaveEvent = TT => {
          "pen" === TT.pointerType && this._pointerCancelTouch(TT.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let TT = !1;
        const oT = function() {};
        try {
          const IT = Object.defineProperty({}, "passive", {
            get: function() {
              TT = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", oT, IT), this._elementToAttachTo.removeEventListener("test", oT, IT)
        } catch (IT) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(RT.Mouse)) {
            const TT = this._inputs[RT.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let oT = uT.LeftClick; oT <= uT.BrowserForward; oT++)
              if (1 === TT[oT]) {
                TT[oT] = 0;
                const IT = aT.CreateDeviceEvent(RT.Mouse, 0, oT, 0, this, this._elementToAttachTo);
                this._onInputChanged(RT.Mouse, 0, IT)
              }
          }
          if (this.isDeviceAvailable(RT.Touch)) {
            const TT = this._inputs[RT.Touch];
            for (let oT = 0; oT < this._activeTouchIds.length; oT++) {
              const IT = this._activeTouchIds[oT];
              if (this._elementToAttachTo.hasPointerCapture?.(IT) && this._elementToAttachTo.releasePointerCapture(IT), -1 !== IT && 1 === TT[oT]?.[uT.LeftClick]) {
                TT[oT][uT.LeftClick] = 0;
                const iT = aT.CreateDeviceEvent(RT.Touch, oT, uT.LeftClick, 0, this, this._elementToAttachTo, IT);
                this._onInputChanged(RT.Touch, oT, iT), this._activeTouchIds[oT] = -1, this._onDeviceDisconnected(RT.Touch, oT)
              }
            }
          }
        }, this._pointerWheelEvent = TT => {
          const oT = RT.Mouse;
          this._inputs[oT] || (this._inputs[oT] = []), this._inputs[oT][0] || (this._pointerActive = !0, this._registerDevice(oT, 0, QT));
          const IT = this._inputs[oT][0];
          if (IT) {
            IT[uT.MouseWheelX] = TT.deltaX || 0, IT[uT.MouseWheelY] = TT.deltaY || TT.wheelDelta || 0, IT[uT.MouseWheelZ] = TT.deltaZ || 0;
            const iT = TT;
            void 0 === TT.pointerId && (TT.pointerId = this._mouseId), 0 !== IT[uT.MouseWheelX] && (iT.inputIndex = uT.MouseWheelX, this._onInputChanged(oT, 0, iT)), 0 !== IT[uT.MouseWheelY] && (iT.inputIndex = uT.MouseWheelY, this._onInputChanged(oT, 0, iT)), 0 !== IT[uT.MouseWheelZ] && (iT.inputIndex = uT.MouseWheelZ, this._onInputChanged(oT, 0, iT))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = TT => {
          TT.buttons > 1 && this._pointerCancelEvent(TT)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!TT && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(RT.Mouse)) {
            const TT = this._inputs[RT.Mouse][0];
            TT[uT.MouseWheelX] = 0, TT[uT.MouseWheelY] = 0, TT[uT.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = TT => {
          this._addGamePad(TT.gamepad)
        }, this._gamepadDisconnectedEvent = TT => {
          if (this._gamepads) {
            const oT = this._getGamepadDeviceType(TT.gamepad.id),
              IT = TT.gamepad.index;
            this._unregisterDevice(oT, IT), delete this._gamepads[IT]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(TT, oT, IT) {
        const iT = navigator.getGamepads()[oT];
        if (iT && TT === this._gamepads[oT]) {
          const zT = this._inputs[TT][oT];
          IT >= iT.buttons.length ? zT[IT] = iT.axes[IT - iT.buttons.length].valueOf() : zT[IT] = iT.buttons[IT].value
        }
      }
      _getGamepadDeviceType(TT) {
        return -1 !== TT.indexOf("054c") ? -1 !== TT.indexOf("0ce6") ? RT.DualSense : RT.DualShock : -1 !== TT.indexOf("Xbox One") || -1 !== TT.search("Xbox 360") || -1 !== TT.search("xinput") || -1 !== TT.indexOf("045e") && -1 === TT.indexOf("Surface Dock") ? RT.Xbox : -1 !== TT.indexOf("057e") ? RT.Switch : RT.Generic
      }
      _getPointerType(TT) {
        let oT = RT.Mouse;
        return ("touch" === TT.pointerType || "pen" === TT.pointerType || TT.touches) && (oT = RT.Touch), oT
      }
    }
    class HT {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = oT, this.deviceSlot = IT, this.onInputChangedObservable = new WT.d, this._deviceInputSystem = TT
      }
      getInput(TT) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, TT)
      }
    }
    class nT {
      constructor(TT) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = TT => {
          for (let oT = 0; oT < this._devices.length; oT++) {
            const IT = this._devices[oT];
            for (const iT in IT) {
              const IT = +iT;
              TT._addDevice(new HT(this._deviceInputSystem, oT, IT))
            }
          }
          this._registeredManagers.push(TT)
        }, this.unregisterManager = TT => {
          const oT = this._registeredManagers.indexOf(TT);
          oT > -1 && this._registeredManagers.splice(oT, 1)
        };
        const oT = Object.keys(RT).length / 2;
        this._devices = new Array(oT);
        const IT = (TT, oT) => {
            this._devices[TT] || (this._devices[TT] = new Array), this._devices[TT][oT] || (this._devices[TT][oT] = oT);
            for (const IT of this._registeredManagers) {
              const iT = new HT(this._deviceInputSystem, TT, oT);
              IT._addDevice(iT)
            }
          },
          iT = (TT, oT) => {
            this._devices[TT]?.[oT] && delete this._devices[TT][oT];
            for (const IT of this._registeredManagers) IT._removeDevice(TT, oT)
          },
          zT = (TT, oT, IT) => {
            if (IT)
              for (const iT of this._registeredManagers) iT._onInputChanged(TT, oT, IT)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new YT(IT, iT, zT) : this._deviceInputSystem = new OT(TT, IT, iT, zT)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class qT {
      getDeviceSource(TT, oT) {
        if (void 0 === oT) {
          if (void 0 === this._firstDevice[TT]) return null;
          oT = this._firstDevice[TT]
        }
        return this._devices[TT] && void 0 !== this._devices[TT][oT] ? this._devices[TT][oT] : null
      }
      getDeviceSources(TT) {
        return this._devices[TT] ? this._devices[TT].filter((TT => !!TT)) : []
      }
      constructor(TT) {
        const oT = Object.keys(RT).length / 2;
        this._devices = new Array(oT), this._firstDevice = new Array(oT), this._engine = TT, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new nT(TT)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new WT.d((TT => {
          for (const oT of this._devices)
            if (oT)
              for (const IT of oT) IT && this.onDeviceConnectedObservable.notifyObserver(TT, IT)
        })), this.onDeviceDisconnectedObservable = new WT.d, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = TT.bC.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.bC.remove(this._onDisposeObserver)
      }
      _addDevice(TT) {
        this._devices[TT.deviceType] || (this._devices[TT.deviceType] = []), this._devices[TT.deviceType][TT.deviceSlot] || (this._devices[TT.deviceType][TT.deviceSlot] = TT, this._updateFirstDevices(TT.deviceType)), this.onDeviceConnectedObservable.notifyObservers(TT)
      }
      _removeDevice(TT, oT) {
        const IT = this._devices[TT]?.[oT];
        this.onDeviceDisconnectedObservable.notifyObservers(IT), this._devices[TT]?.[oT] && delete this._devices[TT][oT], this._updateFirstDevices(TT)
      }
      _onInputChanged(TT, oT, IT) {
        this._devices[TT]?.[oT]?.onInputChangedObservable.notifyObservers(IT)
      }
      _updateFirstDevices(TT) {
        switch (TT) {
          case RT.Keyboard:
          case RT.Mouse:
            this._firstDevice[TT] = 0;
            break;
          case RT.Touch:
          case RT.DualSense:
          case RT.DualShock:
          case RT.Xbox:
          case RT.Switch:
          case RT.Generic: {
            delete this._firstDevice[TT];
            const oT = this._devices[TT];
            if (oT)
              for (let IT = 0; IT < oT.length; IT++)
                if (oT[IT]) {
                  this._firstDevice[TT] = IT;
                  break
                } break
          }
        }
      }
    }
    var ZT = IT(38974);
    class lT {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get YW() {
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
      set YW(TT) {
        this._doubleClick = TT
      }
      set hasSwiped(TT) {
        this._hasSwiped = TT
      }
      set ignore(TT) {
        this._ignore = TT
      }
    }
    class sT {
      constructor(TT) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new ST.j(0, 0), this._previousStartingPointerPosition = new ST.j(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = TT || hT.d.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(TT) {
        return this._meshUnderPointerId[TT] || null
      }
      get unTranslatedPointer() {
        return new ST.j(this._unTranslatedPointerX, this._unTranslatedPointerY)
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
        const oT = this._scene.Zc().getInputElementClientRect();
        oT && (this._pointerX = TT.clientX - oT.left, this._pointerY = TT.clientY - oT.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(TT, oT) {
        const IT = this._scene,
          iT = IT.Zc(),
          zT = iT.getInputElement();
        zT && (zT.tabIndex = iT.canvasTabIndex, IT.doNotHandleCursors || (zT.style.cursor = IT.defaultCursor)), this._setCursorAndPointerOverMesh(TT, oT, IT);
        for (const XT of IT._pointerMoveStage) {
          TT = TT || this._pickMove(oT);
          const IT = !!TT?.pickedMesh;
          TT = XT.action(this._unTranslatedPointerX, this._unTranslatedPointerY, TT, IT, zT)
        }
        const kT = oT.inputIndex >= uT.MouseWheelX && oT.inputIndex <= uT.MouseWheelZ ? mT.c.POINTERWHEEL : mT.c.POINTERMOVE;
        let WT;
        IT.onPointerMove && (TT = TT || this._pickMove(oT), IT.onPointerMove(oT, TT, kT)), TT ? (WT = new mT.h(kT, oT, TT), this._setRayOnPointerInfo(TT, oT)) : (WT = new mT.h(kT, oT, null, this), this._movePointerInfo = WT), IT.onPointerObservable.hasObservers() && IT.onPointerObservable.notifyObservers(WT, kT)
      }
      _setRayOnPointerInfo(TT, oT) {
        const IT = this._scene;
        TT && ZT.c._IsPickingAvailable && (TT.ray || (TT.ray = IT.createPickingRay(oT.offsetX, oT.offsetY, ST.b.Identity(), IT.activeCamera)))
      }
      _addCameraPointerObserver(TT, oT) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(TT, oT)
      }
      _removeCameraPointerObserver(TT) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(TT)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(TT, oT, IT) {
        const iT = this._scene,
          zT = new mT.e(IT, oT, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return TT && (zT.originalPickingInfo = TT, zT.ray = TT.ray, "xr-near" === oT.pointerType && TT.originMesh && (zT.nearInteractionPickingInfo = TT)), iT.onPrePointerObservable.notifyObservers(zT, IT), !!zT.skipOnPointerObservable
      }
      _pickMove(TT) {
        const oT = this._scene,
          IT = oT.PL(this._unTranslatedPointerX, this._unTranslatedPointerY, oT.pointerMovePredicate, oT.pointerMoveFastCheck, oT.cameraToUseForPointers, oT.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(IT, TT, oT), IT
      }
      _updateMeshUnderPointer() {
        const TT = this._scene;
        if (!TT.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || TT.skipPointerMovePicking || !TT.cameraToUseForPointers && !TT.activeCamera) return;
        this._ensurePointerMovePredicate();
        const oT = this._pointerX,
          IT = this._pointerY,
          iT = this._unTranslatedPointerX,
          zT = this._unTranslatedPointerY;
        for (const kT of this._latestPointerMoveEvents.values()) this._pointerX = kT.pointerX, this._pointerY = kT.pointerY, this._unTranslatedPointerX = kT.unTranslatedPointerX, this._unTranslatedPointerY = kT.unTranslatedPointerY, this._pickMove(kT.event);
        this._pointerX = oT, this._pointerY = IT, this._unTranslatedPointerX = iT, this._unTranslatedPointerY = zT
      }
      _ensurePointerMovePredicate() {
        const TT = this._scene;
        TT.pointerMovePredicate || (TT.pointerMovePredicate = oT => (oT._isPointerMovePickable ?? oT.dK) && oT.isVisible && oT.isReady() && oT.isEnabled() && (oT.enablePointerMoveEvents || TT.constantlyUpdateMeshUnderPointer || null !== oT._getActionManagerForTrigger()) && (!TT.cameraToUseForPointers || 0 !== (TT.cameraToUseForPointers.layerMask & oT.layerMask)))
      }
      _setCursorAndPointerOverMesh(TT, oT, IT) {
        const iT = IT.Zc().getInputElement();
        if (TT?.pickedMesh) {
          if (this.setPointerOverMesh(TT.pickedMesh, oT.pointerId, TT, oT), !IT.doNotHandleCursors && iT && this._pointerOverMesh) {
            const TT = this._pointerOverMesh._getActionManagerForTrigger();
            TT && TT.hasPointerTriggers && (iT.style.cursor = TT.hoverCursor || IT.hoverCursor)
          }
        } else this.setPointerOverMesh(null, oT.pointerId, TT, oT)
      }
      simulatePointerMove(TT, oT) {
        const IT = new PointerEvent("pointermove", oT);
        IT.inputIndex = uT.Move, this._checkPrePointerObservable(TT, IT, mT.c.POINTERMOVE) || this._processPointerMove(TT, IT)
      }
      simulatePointerDown(TT, oT) {
        const IT = new PointerEvent("pointerdown", oT);
        IT.inputIndex = IT.button + 2, this._checkPrePointerObservable(TT, IT, mT.c.POINTERDOWN) || this._processPointerDown(TT, IT)
      }
      _processPointerDown(TT, oT) {
        const IT = this._scene;
        if (TT?.pickedMesh) {
          this._pickedDownMesh = TT.pickedMesh;
          const iT = TT.pickedMesh._getActionManagerForTrigger();
          if (iT) {
            if (iT.hasPickTriggers) switch (iT.processTrigger(5, new cT(TT.pickedMesh, IT.pointerX, IT.pointerY, TT.pickedMesh, oT, TT)), oT.button) {
              case 0:
                iT.processTrigger(2, new cT(TT.pickedMesh, IT.pointerX, IT.pointerY, TT.pickedMesh, oT, TT));
                break;
              case 1:
                iT.processTrigger(4, new cT(TT.pickedMesh, IT.pointerX, IT.pointerY, TT.pickedMesh, oT, TT));
                break;
              case 2:
                iT.processTrigger(3, new cT(TT.pickedMesh, IT.pointerX, IT.pointerY, TT.pickedMesh, oT, TT))
            }
            iT.hasSpecificTrigger(8) && window.setTimeout((() => {
              const TT = IT.PL(this._unTranslatedPointerX, this._unTranslatedPointerY, (TT => TT.dK && TT.isVisible && TT.isReady() && TT.actionManager && TT.actionManager.hasSpecificTrigger(8) && TT === this._pickedDownMesh), !1, IT.cameraToUseForPointers);
              TT?.pickedMesh && iT && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > sT.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, iT.processTrigger(8, cT.CreateNew(TT.pickedMesh, oT)))
            }), sT.LongPressDelay)
          }
        } else
          for (const kT of IT._pointerDownStage) TT = kT.action(this._unTranslatedPointerX, this._unTranslatedPointerY, TT, oT, !1);
        let iT;
        const zT = mT.c.POINTERDOWN;
        TT ? (IT.onPointerDown && IT.onPointerDown(oT, TT, zT), iT = new mT.h(zT, oT, TT), this._setRayOnPointerInfo(TT, oT)) : iT = new mT.h(zT, oT, null, this), IT.onPointerObservable.hasObservers() && IT.onPointerObservable.notifyObservers(iT, zT)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(TT, oT, IT) {
        const iT = new PointerEvent("pointerup", oT);
        iT.inputIndex = uT.Move;
        const zT = new lT;
        IT ? zT.YW = !0 : zT.singleClick = !0, this._checkPrePointerObservable(TT, iT, mT.c.POINTERUP) || this._processPointerUp(TT, iT, zT)
      }
      _processPointerUp(TT, oT, IT) {
        const iT = this._scene;
        if (TT?.pickedMesh) {
          if (this._pickedUpMesh = TT.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (iT.onPointerPick && iT.onPointerPick(oT, TT), IT.singleClick && !IT.ignore && iT.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const IT = mT.c.POINTERPICK,
              zT = new mT.h(IT, oT, TT);
            this._setRayOnPointerInfo(TT, oT), iT.onPointerObservable.notifyObservers(zT, IT)
          }
          const zT = TT.pickedMesh._getActionManagerForTrigger();
          if (zT && !IT.ignore) {
            zT.processTrigger(7, cT.CreateNew(TT.pickedMesh, oT, TT)), !IT.hasSwiped && IT.singleClick && zT.processTrigger(1, cT.CreateNew(TT.pickedMesh, oT, TT));
            const iT = TT.pickedMesh._getActionManagerForTrigger(6);
            IT.YW && iT && iT.processTrigger(6, cT.CreateNew(TT.pickedMesh, oT, TT))
          }
        } else if (!IT.ignore)
          for (const zT of iT._pointerUpStage) TT = zT.action(this._unTranslatedPointerX, this._unTranslatedPointerY, TT, oT, IT.YW);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const TT = this._pickedDownMesh._getActionManagerForTrigger(16);
          TT && TT.processTrigger(16, cT.CreateNew(this._pickedDownMesh, oT))
        }
        if (!IT.ignore) {
          const zT = new mT.h(mT.c.POINTERUP, oT, TT);
          if (this._setRayOnPointerInfo(TT, oT), iT.onPointerObservable.notifyObservers(zT, mT.c.POINTERUP), iT.onPointerUp && iT.onPointerUp(oT, TT, mT.c.POINTERUP), !IT.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let zT = 0;
            if (IT.singleClick ? zT = mT.c.POINTERTAP : IT.YW && (zT = mT.c.POINTERDOUBLETAP), zT) {
              const IT = new mT.h(zT, oT, TT);
              iT.onPointerObservable.hasObservers() && iT.onPointerObservable.hasSpecificMask(zT) && iT.onPointerObservable.notifyObservers(IT, zT)
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
          oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const zT = this._scene,
          kT = zT.Zc();
        iT || (iT = kT.getInputElement()), this._alreadyAttached && this.detachControl(), iT && (this._alreadyAttachedTo = iT), this._deviceSourceManager = new qT(kT), this._initActionManager = TT => {
          if (!this._meshPickProceed) {
            const oT = zT.skipPointerUpPicking || 0 === zT._registeredActions && !this._checkForPicking() && !zT.onPointerUp ? null : zT.PL(this._unTranslatedPointerX, this._unTranslatedPointerY, zT.pointerUpPredicate, zT.pointerUpFastCheck, zT.cameraToUseForPointers, zT.pointerUpTrianglePredicate);
            this._currentPickResult = oT, oT && (TT = oT.hit && oT.pickedMesh ? oT.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return TT
        }, this._delayedSimpleClick = (TT, oT, IT) => {
          if ((Date.now() - this._previousStartingPointerTime > sT.DoubleClickDelay && !this._doubleClickOccured || TT !== this._previousButtonPressed) && (this._doubleClickOccured = !1, oT.singleClick = !0, oT.ignore = !1, this._delayedClicks[TT])) {
            const oT = this._delayedClicks[TT].evt,
              IT = mT.c.POINTERTAP,
              iT = new mT.h(IT, oT, this._currentPickResult);
            zT.onPointerObservable.hasObservers() && zT.onPointerObservable.hasSpecificMask(IT) && zT.onPointerObservable.notifyObservers(iT, IT), this._delayedClicks[TT] = null
          }
        }, this._initClickEvent = (TT, oT, IT, iT) => {
          const zT = new lT;
          this._currentPickResult = null;
          let kT = null,
            WT = TT.hasSpecificMask(mT.c.POINTERPICK) || oT.hasSpecificMask(mT.c.POINTERPICK) || TT.hasSpecificMask(mT.c.POINTERTAP) || oT.hasSpecificMask(mT.c.POINTERTAP) || TT.hasSpecificMask(mT.c.POINTERDOUBLETAP) || oT.hasSpecificMask(mT.c.POINTERDOUBLETAP);
          !WT && eT && (kT = this._initActionManager(kT, zT), kT && (WT = kT.hasPickTriggers));
          let XT = !1;
          if (WT = WT && !this._isMultiTouchGesture, WT) {
            const WT = IT.button;
            if (zT.hasSwiped = this._isPointerSwiping(), !zT.hasSwiped) {
              let BT = !sT.ExclusiveDoubleClickMode;
              if (BT || (BT = !TT.hasSpecificMask(mT.c.POINTERDOUBLETAP) && !oT.hasSpecificMask(mT.c.POINTERDOUBLETAP), BT && !eT.HasSpecificTrigger(6) && (kT = this._initActionManager(kT, zT), kT && (BT = !kT.hasSpecificTrigger(6)))), BT)(Date.now() - this._previousStartingPointerTime > sT.DoubleClickDelay || WT !== this._previousButtonPressed) && (zT.singleClick = !0, iT(zT, this._currentPickResult), XT = !0);
              else {
                const TT = {
                  evt: IT,
                  clickInfo: zT,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, WT, zT, iT), sT.DoubleClickDelay)
                };
                this._delayedClicks[WT] = TT
              }
              let FT = TT.hasSpecificMask(mT.c.POINTERDOUBLETAP) || oT.hasSpecificMask(mT.c.POINTERDOUBLETAP);
              !FT && eT.HasSpecificTrigger(6) && (kT = this._initActionManager(kT, zT), kT && (FT = kT.hasSpecificTrigger(6))), FT && (WT === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < sT.DoubleClickDelay && !this._doubleClickOccured ? (zT.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = WT, sT.ExclusiveDoubleClickMode ? (this._delayedClicks[WT] && (clearTimeout(this._delayedClicks[WT]?.timeoutId), this._delayedClicks[WT] = null), iT(zT, this._previousPickResult)) : iT(zT, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, zT.YW = !0, zT.ignore = !1, sT.ExclusiveDoubleClickMode && this._delayedClicks[WT] && (clearTimeout(this._delayedClicks[WT]?.timeoutId), this._delayedClicks[WT] = null), iT(zT, this._currentPickResult)), XT = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = WT))
            }
          }
          XT || iT(zT, this._currentPickResult)
        }, this._onPointerMove = TT => {
          if (this._updatePointerPosition(TT), this._latestPointerMoveEvents.set(TT.pointerId, {
              event: TT,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > sT.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > sT.DragMovementThreshold), kT.isPointerLock && kT._verifyPointerLock(), this._checkPrePointerObservable(null, TT, TT.inputIndex >= uT.MouseWheelX && TT.inputIndex <= uT.MouseWheelZ ? mT.c.POINTERWHEEL : mT.c.POINTERMOVE)) return;
          if (!zT.cameraToUseForPointers && !zT.activeCamera) return;
          if (zT.skipPointerMovePicking) return void this._processPointerMove(new xT.d, TT);
          this._ensurePointerMovePredicate();
          const oT = zT._registeredActions > 0 || zT.constantlyUpdateMeshUnderPointer ? this._pickMove(TT) : null;
          this._processPointerMove(oT, TT)
        }, this._onPointerDown = TT => {
          const oT = this._activePointerIds.indexOf(-1);
          if (-1 === oT ? this._activePointerIds.push(TT.pointerId) : this._activePointerIds[oT] = TT.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, sT.ExclusiveDoubleClickMode)
            for (let iT = 0; iT < this._delayedClicks.length; iT++)
              if (this._delayedClicks[iT])
                if (TT.button === iT) clearTimeout(this._delayedClicks[iT]?.timeoutId);
                else {
                  const TT = this._delayedClicks[iT].clickInfo;
                  this._doubleClickOccured = !1, TT.singleClick = !0, TT.ignore = !1;
                  const oT = this._delayedClicks[iT].evt,
                    IT = mT.c.POINTERTAP,
                    kT = new mT.h(IT, oT, this._currentPickResult);
                  zT.onPointerObservable.hasObservers() && zT.onPointerObservable.hasSpecificMask(IT) && zT.onPointerObservable.notifyObservers(kT, IT), this._delayedClicks[iT] = null
                } if (this._updatePointerPosition(TT), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = TT.button), zT.preventDefaultOnPointerDown && iT && (TT.preventDefault(), iT.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, TT, mT.c.POINTERDOWN)) return;
          if (!zT.cameraToUseForPointers && !zT.activeCamera) return;
          let IT;
          this._pointerCaptures[TT.pointerId] = !0, zT.pointerDownPredicate || (zT.pointerDownPredicate = TT => TT.dK && TT.isVisible && TT.isReady() && TT.isEnabled() && (!zT.cameraToUseForPointers || 0 !== (zT.cameraToUseForPointers.layerMask & TT.layerMask))), this._pickedDownMesh = null, IT = zT.skipPointerDownPicking || 0 === zT._registeredActions && !this._checkForPicking() && !zT.onPointerDown ? new xT.d : zT.PL(this._unTranslatedPointerX, this._unTranslatedPointerY, zT.pointerDownPredicate, zT.pointerDownFastCheck, zT.cameraToUseForPointers, zT.pointerDownTrianglePredicate), this._processPointerDown(IT, TT)
        }, this._onPointerUp = TT => {
          const oT = this._activePointerIds.indexOf(TT.pointerId); - 1 !== oT && (this._activePointerIds[oT] = -1, this._activePointerIdsCount--, "touch" === TT.pointerType && this._latestPointerMoveEvents.delete(TT.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(TT), zT.preventDefaultOnPointerUp && iT && (TT.preventDefault(), iT.focus()), this._initClickEvent(zT.onPrePointerObservable, zT.onPointerObservable, TT, ((oT, IT) => {
            if (zT.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !oT.ignore)) {
              if (this._checkPrePointerObservable(null, TT, mT.c.POINTERUP)) return this._swipeButtonPressed === TT.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === TT.buttons && (this._pointerCaptures[TT.pointerId] = !1));
              oT.hasSwiped || (oT.singleClick && zT.onPrePointerObservable.hasSpecificMask(mT.c.POINTERTAP) && this._checkPrePointerObservable(null, TT, mT.c.POINTERTAP) && (this._skipPointerTap = !0), oT.YW && zT.onPrePointerObservable.hasSpecificMask(mT.c.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, TT, mT.c.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[TT.pointerId] ? (0 === TT.buttons && (this._pointerCaptures[TT.pointerId] = !1), (zT.cameraToUseForPointers || zT.activeCamera) && (zT.pointerUpPredicate || (zT.pointerUpPredicate = TT => TT.dK && TT.isVisible && TT.isReady() && TT.isEnabled() && (!zT.cameraToUseForPointers || 0 !== (zT.cameraToUseForPointers.layerMask & TT.layerMask))), !this._meshPickProceed && (eT && eT.HasTriggers || this._checkForPicking() || zT.onPointerUp) && this._initActionManager(null, oT), IT || (IT = this._currentPickResult), this._processPointerUp(IT, TT, oT), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === TT.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === TT.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = TT => {
          const oT = JT.b.KEYDOWN;
          if (zT.onPreKeyboardObservable.hasObservers()) {
            const IT = new JT.d(oT, TT);
            if (zT.onPreKeyboardObservable.notifyObservers(IT, oT), IT.skipOnKeyboardObservable) return
          }
          if (zT.onKeyboardObservable.hasObservers()) {
            const IT = new JT.h(oT, TT);
            zT.onKeyboardObservable.notifyObservers(IT, oT)
          }
          zT.actionManager && zT.actionManager.processTrigger(14, cT.CreateNewFromScene(zT, TT))
        }, this._onKeyUp = TT => {
          const oT = JT.b.KEYUP;
          if (zT.onPreKeyboardObservable.hasObservers()) {
            const IT = new JT.d(oT, TT);
            if (zT.onPreKeyboardObservable.notifyObservers(IT, oT), IT.skipOnKeyboardObservable) return
          }
          if (zT.onKeyboardObservable.hasObservers()) {
            const IT = new JT.h(oT, TT);
            zT.onKeyboardObservable.notifyObservers(IT, oT)
          }
          zT.actionManager && zT.actionManager.processTrigger(15, cT.CreateNewFromScene(zT, TT))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((iT => {
          iT.deviceType === RT.Mouse ? iT.onInputChangedObservable.add((zT => {
            this._originMouseEvent = zT, zT.inputIndex === uT.LeftClick || zT.inputIndex === uT.MiddleClick || zT.inputIndex === uT.RightClick || zT.inputIndex === uT.BrowserBack || zT.inputIndex === uT.BrowserForward ? oT && 1 === iT.getInput(zT.inputIndex) ? this._onPointerDown(zT) : TT && 0 === iT.getInput(zT.inputIndex) && this._onPointerUp(zT) : IT && (zT.inputIndex === uT.Move ? this._onPointerMove(zT) : zT.inputIndex !== uT.MouseWheelX && zT.inputIndex !== uT.MouseWheelY && zT.inputIndex !== uT.MouseWheelZ || this._onPointerMove(zT))
          })) : iT.deviceType === RT.Touch ? iT.onInputChangedObservable.add((zT => {
            zT.inputIndex === uT.LeftClick && (oT && 1 === iT.getInput(zT.inputIndex) ? (this._onPointerDown(zT), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : TT && 0 === iT.getInput(zT.inputIndex) && (this._onPointerUp(zT), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), IT && zT.inputIndex === uT.Move && this._onPointerMove(zT)
          })) : iT.deviceType === RT.Keyboard && iT.onInputChangedObservable.add((TT => {
            "keydown" === TT.type ? this._onKeyDown(TT) : "keyup" === TT.type && this._onKeyUp(TT)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 ? arguments[2] : void 0,
          iT = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[oT] === TT && (!TT || !TT._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const zT = this._meshUnderPointerId[oT];
        let kT;
        zT && (kT = zT._getActionManagerForTrigger(10), kT && kT.processTrigger(10, new cT(zT, this._pointerX, this._pointerY, TT, iT, {
          pointerId: oT
        }))), TT ? (this._meshUnderPointerId[oT] = TT, this._pointerOverMesh = TT, kT = TT._getActionManagerForTrigger(9), kT && kT.processTrigger(9, new cT(TT, this._pointerX, this._pointerY, TT, iT, {
          pointerId: oT,
          pickResult: IT
        }))) : (delete this._meshUnderPointerId[oT], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: TT,
          pointerId: oT
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(TT) {
        this._pointerOverMesh === TT && (this._pointerOverMesh = null), this._pickedDownMesh === TT && (this._pickedDownMesh = null), this._pickedUpMesh === TT && (this._pickedUpMesh = null);
        for (const oT in this._meshUnderPointerId) this._meshUnderPointerId[oT] === TT && delete this._meshUnderPointerId[oT]
      }
    }
    sT.DragMovementThreshold = 10, sT.LongPressDelay = 500, sT.DoubleClickDelay = 300, sT.ExclusiveDoubleClickMode = !1;
    var tT = IT(38716),
      GT = IT(36177),
      pT = IT(36710);
    class bT {
      static get UniqueId() {
        const TT = this._UniqueIdCounter;
        return this._UniqueIdCounter++, TT
      }
    }
    bT._UniqueIdCounter = 1;
    var yT = IT(38827),
      NT = IT(38976),
      PT = IT(36134);
    class dT {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var VT, To, oo, Io, io, zo, ko, Wo, Xo, Bo, Fo, So, Do, Lo, xo, co, Ko, Mo, ro, Ao, go, ho, wo, mo, eo, Ro, uo, vo, Eo, fo, Co, jo, Jo, Uo, ao, Yo, Qo, Oo, Ho, no, qo, Zo, so, to, Go, po, bo, yo, No, Po, Vo, TI, oI, II = IT(37660),
      iI = IT(36166);
    const zI = new ST.n,
      kI = new ST.n;
    var WI;
    ! function(TT) {
      TT[TT.BackwardCompatible = 0] = "BackwardCompatible", TT[TT.Intermediate = 1] = "Intermediate", TT[TT.Aggressive = 2] = "Aggressive"
    }(WI || (WI = {}));
    class XI {
      static DefaultMaterialFactory(TT) {
        throw (0, wT.k)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, wT.k)("DefaultCollisionCoordinator")
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
        for (const oT of this.skeletons) TT = TT.concat(oT.bones);
        return TT
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(TT) {
        this._animationPropertiesOverride = TT
      }
      set onDispose(TT) {
        this._onDisposeObserver && this.bC.remove(this._onDisposeObserver), this._onDisposeObserver = this.bC.add(TT)
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
        return sT.DragMovementThreshold
      }
      static set DragMovementThreshold(TT) {
        sT.DragMovementThreshold = TT
      }
      static get LongPressDelay() {
        return sT.LongPressDelay
      }
      static set LongPressDelay(TT) {
        sT.LongPressDelay = TT
      }
      static get DoubleClickDelay() {
        return sT.DoubleClickDelay
      }
      static set DoubleClickDelay(TT) {
        sT.DoubleClickDelay = TT
      }
      static get ExclusiveDoubleClickMode() {
        return sT.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(TT) {
        sT.ExclusiveDoubleClickMode = TT
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? ST.m.ZeroReadOnly
      }
      bindEyePosition(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const iT = this._eyePosition,
          zT = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          kT = this.floatingOriginOffset,
          WT = zI.set(iT.x, iT.y, iT.z, zT ? -1 : 1),
          XT = WT.subtractFromFloatsToRef(kT.x, kT.y, kT.z, 0, kI);
        return TT && (IT ? TT.setFloat3(oT, XT.x, XT.y, XT.z) : TT.setVector4(oT, XT)), WT
      }
      finalizeSceneUbo() {
        const TT = this.getSceneUniformBuffer(),
          oT = this.bindEyePosition(null),
          IT = this.floatingOriginOffset;
        return TT.updateFloat4("vEyePosition", oT.x - IT.x, oT.y - IT.y, oT.z - IT.z, oT.w), TT.update(), TT
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
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), TT && (this._unObserveActiveCameras = (0, PT.j)(TT, (() => {
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
        return XI.DefaultMaterialFactory !== XI._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = XI.DefaultMaterialFactory(this)), this._defaultMaterial
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
        return this._collisionCoordinator || (this._collisionCoordinator = XI.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
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
      fIT(TT) {
        this._components.push(TT), this._transientComponents.push(TT);
        const oT = TT;
        oT.addFromContainer && oT.serialize && this._serializableComponents.push(oT)
      }
      _getComponent(TT) {
        for (const oT of this._components)
          if (oT.name === TT) return oT;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(TT, oT) {
        this._inputManager = new sT(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new GT.i(.2, .2, .3, 1), this.onClearColorChangedObservable = new WT.d, this.ambientColor = new GT.e(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new WT.d, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.bR = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.bC = new WT.d, this._onDisposeObserver = null, this.onBeforeRenderObservable = new WT.d, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new WT.d, this.onAfterRenderCameraObservable = new WT.d, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new WT.d, this.onAfterAnimationsObservable = new WT.d, this.onBeforeDrawPhaseObservable = new WT.d, this.onAfterDrawPhaseObservable = new WT.d, this.onReadyObservable = new WT.d, this.onBeforeCameraRenderObservable = new WT.d, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new WT.d, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new WT.d, this.onAfterActiveMeshesEvaluationObservable = new WT.d, this.onBeforeParticlesRenderingObservable = new WT.d, this.onAfterParticlesRenderingObservable = new WT.d, this.onDataLoadedObservable = new WT.d, this.onNewCameraAddedObservable = new WT.d, this.onCameraRemovedObservable = new WT.d, this.onNewLightAddedObservable = new WT.d, this.onLightRemovedObservable = new WT.d, this.onNewGeometryAddedObservable = new WT.d, this.onGeometryRemovedObservable = new WT.d, this.onNewTransformNodeAddedObservable = new WT.d, this.onTransformNodeRemovedObservable = new WT.d, this.onNewMeshAddedObservable = new WT.d, this.onMeshRemovedObservable = new WT.d, this.onNewSkeletonAddedObservable = new WT.d, this.onSkeletonRemovedObservable = new WT.d, this.onNewParticleSystemAddedObservable = new WT.d, this.onParticleSystemRemovedObservable = new WT.d, this.onNewAnimationGroupAddedObservable = new WT.d, this.onAnimationGroupRemovedObservable = new WT.d, this.onNewMaterialAddedObservable = new WT.d, this.onNewMultiMaterialAddedObservable = new WT.d, this.onMaterialRemovedObservable = new WT.d, this.onMultiMaterialRemovedObservable = new WT.d, this.onNewTextureAddedObservable = new WT.d, this.onTextureRemovedObservable = new WT.d, this.onNewFrameGraphAddedObservable = new WT.d, this.onFrameGraphRemovedObservable = new WT.d, this.onNewObjectRendererAddedObservable = new WT.d, this.onObjectRendererRemovedObservable = new WT.d, this.onNewPostProcessAddedObservable = new WT.d, this.onPostProcessRemovedObservable = new WT.d, this.onNewEffectLayerAddedObservable = new WT.d, this.onEffectLayerRemovedObservable = new WT.d, this.onBeforeRenderTargetsRenderObservable = new WT.d, this.onAfterRenderTargetsRenderObservable = new WT.d, this.onBeforeStepObservable = new WT.d, this.onAfterStepObservable = new WT.d, this.onActiveCameraChanged = new WT.d, this.onActiveCamerasChanged = new WT.d, this.onBeforeRenderingGroupObservable = new WT.d, this.onAfterRenderingGroupObservable = new WT.d, this.onMeshImportedObservable = new WT.d, this.onAnimationFileImportedObservable = new WT.d, this.onEnvironmentTextureChangedObservable = new WT.d, this.onMeshUnderPointerUpdatedObservable = new WT.d, this._registeredForLateAnimationBindings = new XT.c(256), this._pointerPickingConfiguration = new dT, this.onPrePointerObservable = new WT.d, this.onPointerObservable = new WT.d, this.onPreKeyboardObservable = new WT.d, this.onKeyboardObservable = new WT.d, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = XI.FOGMODE_NONE, this.fogColor = new GT.e(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.EY = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new ST.m(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new XT.c(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new tT.c, this._activeIndices = new tT.c, this._activeParticles = new tT.c, this._activeBones = new tT.c, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new XT.f(256), this._processedMaterials = new XT.f(256), this._renderTargets = new XT.c(256), this._materialsRenderTargets = new XT.c(256), this._activeParticleSystems = new XT.f(256), this._activeSkeletons = new XT.c(32), this._softwareSkinnedMeshes = new XT.c(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = ST.b.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = AT.f.Create(), this._beforeClearStage = AT.f.Create(), this._beforeRenderTargetClearStage = AT.f.Create(), this._gatherRenderTargetsStage = AT.f.Create(), this._gatherActiveCameraRenderTargetsStage = AT.f.Create(), this._isReadyForMeshStage = AT.f.Create(), this._beforeEvaluateActiveMeshStage = AT.f.Create(), this._evaluateSubMeshStage = AT.f.Create(), this._preActiveMeshStage = AT.f.Create(), this._cameraDrawRenderTargetStage = AT.f.Create(), this._beforeCameraDrawStage = AT.f.Create(), this._beforeRenderTargetDrawStage = AT.f.Create(), this._beforeRenderingGroupDrawStage = AT.f.Create(), this._beforeRenderingMeshStage = AT.f.Create(), this._afterRenderingMeshStage = AT.f.Create(), this._afterRenderingGroupDrawStage = AT.f.Create(), this._afterCameraDrawStage = AT.f.Create(), this._afterCameraPostProcessStage = AT.f.Create(), this._afterRenderTargetDrawStage = AT.f.Create(), this._afterRenderTargetPostProcessStage = AT.f.Create(), this._afterRenderStage = AT.f.Create(), this._pointerMoveStage = AT.f.Create(), this._pointerDownStage = AT.f.Create(), this._pointerUpStage = AT.f.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new WT.d, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const IT = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...oT
        };
        this.defaultCameraLayerMask = IT.defaultCameraLayerMask, this.defaultRenderableLayerMask = IT.defaultRenderableLayerMask, TT = this._engine = TT || hT.d.LastCreatedEngine, IT.virtual ? TT._virtualScenes.push(this) : (hT.d._LastCreatedScene = this, TT.scenes.push(this)), (TT.getCreationOptions().useLargeWorldRendering || oT?.useFloatingOrigin) && ((0, MT.e)(), this._floatingOriginScene = this, MT.b.pC = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new rT.d(this), KT.d && (this.postProcessManager = new KT.d(this)), (0, gT.k)() && this.attachControl(), this._createUbo(), DT.c && (this._imageProcessingConfiguration = new DT.c), this.setDefaultCandidateProviders(), IT.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = IT.useMaterialMeshMap, this.useClonedMeshMap = IT.useClonedMeshMap, oT && oT.virtual || TT.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(TT) {
        return this._defaultSubMeshCandidates.data = TT.pR, this._defaultSubMeshCandidates.length = TT.pR.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = TT => this._getDefaultSubMeshCandidates(TT), this.getIntersectingSubMeshCandidates = (TT, oT) => this._getDefaultSubMeshCandidates(TT), this.getCollidingSubMeshCandidates = (TT, oT) => this._getDefaultSubMeshCandidates(TT)
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
      isCachedMaterialInvalid(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== oT || this._cachedMaterial !== TT || this._cachedVisibility !== IT
      }
      Zc() {
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
      simulatePointerMove(TT, oT) {
        return this._inputManager.simulatePointerMove(TT, oT), this
      }
      simulatePointerDown(TT, oT) {
        return this._inputManager.simulatePointerDown(TT, oT), this
      }
      simulatePointerUp(TT, oT, IT) {
        return this._inputManager.simulatePointerUp(TT, oT, IT), this
      }
      isPointerCaptured() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(TT)
      }
      attachControl() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(TT, oT, IT)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let TT, oT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const IT = this.Zc(),
          iT = IT.currentRenderPassId;
        IT.currentRenderPassId = this.activeCamera?.renderPassId ?? iT;
        let zT = !0;
        for (this._pendingData.length > 0 && (zT = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && zT && (zT = this.depthPeelingRenderer.isReady()), oT && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), TT = 0; TT < this.meshes.length; TT++) {
          const iT = this.meshes[TT];
          if (!iT.pR || 0 === iT.pR.length) continue;
          if (!iT.isReady(!0)) {
            zT = !1;
            continue
          }
          const kT = iT.hasThinInstances || "InstancedMesh" === iT.getClassName() || "InstancedLinesMesh" === iT.getClassName() || IT.getCaps().instancedArrays && iT.instances.length > 0;
          for (let TT = 0, oT = this._isReadyForMeshStage; TT < oT.length; TT++) {
            oT[TT].action(iT, kT) || (zT = !1)
          }
          if (!oT) continue;
          const WT = iT.material || this.defaultMaterial;
          if (WT)
            if (WT._storeEffectOnSubMeshes)
              for (const TT of iT.pR) {
                const oT = TT.bc();
                oT && oT.hasRenderTargetTextures && null != oT.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(oT) && (this._processedMaterials.push(oT), this._materialsRenderTargets.concatWithNoDuplicate(oT.getRenderTargetTextures()))
              } else WT.hasRenderTargetTextures && null != WT.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(WT) && (this._processedMaterials.push(WT), this._materialsRenderTargets.concatWithNoDuplicate(WT.getRenderTargetTextures()))
        }
        if (oT) {
          for (TT = 0; TT < this._materialsRenderTargets.length; ++TT) {
            this._materialsRenderTargets.data[TT].isReadyForRendering() || (zT = !1)
          }
          for (TT = 0; TT < this.customRenderTargets.length; ++TT) {
            this.customRenderTargets[TT].isReadyForRendering() || (zT = !1)
          }
        }
        for (TT = 0; TT < this.geometries.length; TT++) {
          2 === this.geometries[TT].delayLoadState && (zT = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const kT of this.activeCameras) kT.isReady(!0) || (zT = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (zT = !1));
        for (const kT of this.bR) kT.isReady() || (zT = !1);
        if (this.proceduralTexturesEnabled)
          for (const kT of this.proceduralTextures) kT.isReady() || (zT = !1);
        if (this.layers)
          for (const kT of this.layers) kT.isReady() || (zT = !1);
        if (this.effectLayers)
          for (const kT of this.effectLayers) kT.isLayerReady() || (zT = !1);
        for (const kT of this._isReadyChecks) kT.isReady() || (zT = !1);
        return IT.areAllEffectsReady() || (zT = !1), IT.currentRenderPassId = iT, zT
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
        const oT = () => {
          TT(), setTimeout((() => {
            this.unregisterBeforeRender(oT)
          }))
        };
        this.registerBeforeRender(oT)
      }
      executeOnceBeforeRender(TT, oT) {
        void 0 !== oT ? setTimeout((() => {
          this._executeOnceBeforeRender(TT)
        }), oT) : this._executeOnceBeforeRender(TT)
      }
      addPendingData(TT) {
        this._pendingData.push(TT)
      }
      removePendingData(TT) {
        const oT = this.isLoading,
          IT = this._pendingData.indexOf(TT); - 1 !== IT && this._pendingData.splice(IT, 1), oT && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
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
        const oT = this._isReadyChecks.indexOf(TT); - 1 !== oT && this._isReadyChecks.splice(oT, 1)
      }
      executeWhenReady(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(TT), null === this._executeWhenReadyTimeoutId && this._checkIsReady(oT)
      }
      async whenReadyAsync() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((oT => {
          this.executeWhenReady((() => {
            oT()
          }), TT)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = kT.c.Now;
        else if (this.onReadyTimeoutDuration > 0 && kT.c.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(TT)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(TT)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = kT.c.Now
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
      setTransformMatrix(TT, oT, IT, iT) {
        this._multiviewSceneUboIsActive = !!(IT && iT && this._multiviewSceneUbo), this._viewUpdateFlag === TT.updateFlag && this._projectionUpdateFlag === oT.updateFlag || (this._viewUpdateFlag = TT.updateFlag, this._projectionUpdateFlag = oT.updateFlag, this._viewMatrix = TT, this._projectionMatrix = oT, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new ST.b), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? pT.b.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = pT.b.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(IT, iT) : this._sceneUbo.useUbo && (this._sceneUbo.Y1("viewProjection", this._transformMatrix), this._sceneUbo.Y1("view", this._viewMatrix), this._sceneUbo.Y1("projection", this._projectionMatrix), this._sceneUbo.Y1("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(TT, oT) {
        const IT = "boolean" === typeof oT ? oT : oT?.trackUBOsInFrame,
          iT = new LT.e(this._engine, void 0, !1, TT ?? "NK", void 0, IT);
        return iT.addUniform("viewProjection", 16), iT.addUniform("view", 16), iT.addUniform("projection", 16), iT.addUniform("vEyePosition", 4), iT.addUniform("inverseProjection", 16), iT
      }
      setSceneUniformBuffer(TT) {
        this._sceneUbo = TT, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : ST.m.ZeroReadOnly
      }
      getUniqueId() {
        return bT.UniqueId
      }
      tIT(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(TT), TT._resyncLightSources(), TT.parent || TT._addToSceneRootNodes(), zT.c.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(TT)
          })), oT)) {
          const oT = TT.getChildMeshes();
          for (const TT of oT) this.tIT(TT)
        }
      }
      KJ(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const IT = this.meshes.indexOf(TT);
        if (-1 !== IT && (this.meshes.splice(IT, 1), TT.parent || TT._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(TT), this.onMeshRemovedObservable.notifyObservers(TT), oT) {
          const oT = TT.getChildMeshes();
          for (const TT of oT) this.KJ(TT)
        }
        return IT
      }
      addTransformNode(TT) {
        this._blockEntityCollection || TT.pC() === this && -1 !== TT._indexInSceneTransformNodesArray || (TT._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(TT), TT.parent || TT._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(TT))
      }
      removeTransformNode(TT) {
        const oT = TT._indexInSceneTransformNodesArray;
        if (-1 !== oT) {
          if (oT !== this.transformNodes.length - 1) {
            const TT = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[oT] = TT, TT._indexInSceneTransformNodesArray = oT
          }
          TT._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), TT.parent || TT._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(TT), oT
      }
      removeSkeleton(TT) {
        const oT = this.skeletons.indexOf(TT);
        return -1 !== oT && (this.skeletons.splice(oT, 1), this.onSkeletonRemovedObservable.notifyObservers(TT), this._executeActiveContainerCleanup(this._activeSkeletons)), oT
      }
      removeMorphTargetManager(TT) {
        const oT = this.morphTargetManagers.indexOf(TT);
        return -1 !== oT && this.morphTargetManagers.splice(oT, 1), oT
      }
      removeLight(TT) {
        const oT = this.lights.indexOf(TT);
        if (-1 !== oT) {
          for (const oT of this.meshes) oT._removeLightSource(TT, !1);
          this.lights.splice(oT, 1), this.sortLightsByPriority(), TT.parent || TT._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(TT)
        }
        return oT
      }
      removeCamera(TT) {
        const oT = this.cameras.indexOf(TT);
        if (-1 !== oT && (this.cameras.splice(oT, 1), TT.parent || TT._removeFromSceneRootNodes()), this.activeCameras) {
          const oT = this.activeCameras.indexOf(TT); - 1 !== oT && this.activeCameras.splice(oT, 1)
        }
        return this.activeCamera === TT && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(TT), oT
      }
      removeParticleSystem(TT) {
        const oT = this.bR.indexOf(TT);
        return -1 !== oT && (this.bR.splice(oT, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(TT), oT
      }
      removeAnimation(TT) {
        const oT = this.animations.indexOf(TT);
        return -1 !== oT && this.animations.splice(oT, 1), oT
      }
      stopAnimation(TT, oT, IT) {}
      removeAnimationGroup(TT) {
        const oT = this.animationGroups.indexOf(TT);
        return -1 !== oT && this.animationGroups.splice(oT, 1), this.onAnimationGroupRemovedObservable.notifyObservers(TT), oT
      }
      removeMultiMaterial(TT) {
        const oT = this.multiMaterials.indexOf(TT);
        return -1 !== oT && this.multiMaterials.splice(oT, 1), this.onMultiMaterialRemovedObservable.notifyObservers(TT), oT
      }
      removeMaterial(TT) {
        const oT = TT._indexInSceneMaterialArray;
        if (-1 !== oT && oT < this.materials.length) {
          if (oT !== this.materials.length - 1) {
            const TT = this.materials[this.materials.length - 1];
            this.materials[oT] = TT, TT._indexInSceneMaterialArray = oT
          }
          TT._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(TT), oT
      }
      removeActionManager(TT) {
        const oT = this.actionManagers.indexOf(TT);
        return -1 !== oT && this.actionManagers.splice(oT, 1), oT
      }
      removeTexture(TT) {
        const oT = this.textures.indexOf(TT);
        return -1 !== oT && this.textures.splice(oT, 1), this.onTextureRemovedObservable.notifyObservers(TT), oT
      }
      removeFrameGraph(TT) {
        const oT = this.frameGraphs.indexOf(TT);
        return -1 !== oT && this.frameGraphs.splice(oT, 1), this.onFrameGraphRemovedObservable.notifyObservers(TT), oT
      }
      removeObjectRenderer(TT) {
        const oT = this.objectRenderers.indexOf(TT);
        return -1 !== oT && this.objectRenderers.splice(oT, 1), this.onObjectRendererRemovedObservable.notifyObservers(TT), oT
      }
      removePostProcess(TT) {
        const oT = this.postProcesses.indexOf(TT);
        return -1 !== oT && this.postProcesses.splice(oT, 1), this.onPostProcessRemovedObservable.notifyObservers(TT), oT
      }
      removeEffectLayer(TT) {
        const oT = this.effectLayers.indexOf(TT);
        return -1 !== oT && this.effectLayers.splice(oT, 1), this.onEffectLayerRemovedObservable.notifyObservers(TT), oT
      }
      addLight(TT) {
        if (!this._blockEntityCollection) {
          this.lights.push(TT), this.sortLightsByPriority(), TT.parent || TT._addToSceneRootNodes();
          for (const oT of this.meshes) - 1 === oT.lightSources.indexOf(TT) && (oT.lightSources.push(TT), oT._resyncLightSources());
          zT.c.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(TT)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(NT.c.CompareLightsPriority)
      }
      addCamera(TT) {
        this._blockEntityCollection || (this.cameras.push(TT), zT.c.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(TT)
        })), TT.parent || TT._addToSceneRootNodes())
      }
      addSkeleton(TT) {
        this._blockEntityCollection || (this.skeletons.push(TT), zT.c.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(TT)
        })))
      }
      addParticleSystem(TT) {
        this._blockEntityCollection || (this.bR.push(TT), zT.c.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(TT)
        })))
      }
      addAnimation(TT) {
        this._blockEntityCollection || this.animations.push(TT)
      }
      addAnimationGroup(TT) {
        this._blockEntityCollection || (this.animationGroups.push(TT), zT.c.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(TT)
        })))
      }
      addMultiMaterial(TT) {
        this._blockEntityCollection || (this.multiMaterials.push(TT), zT.c.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(TT)
        })))
      }
      addMaterial(TT) {
        this._blockEntityCollection || TT.pC() === this && -1 !== TT._indexInSceneMaterialArray || (TT._indexInSceneMaterialArray = this.materials.length, this.materials.push(TT), zT.c.SetImmediate((() => {
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
        this.frameGraphs.push(TT), zT.c.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(TT)
        }))
      }
      addObjectRenderer(TT) {
        this.objectRenderers.push(TT), zT.c.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(TT)
        }))
      }
      addPostProcess(TT) {
        this._blockEntityCollection || (this.postProcesses.push(TT), zT.c.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(TT)
        })))
      }
      addEffectLayer(TT) {
        this._blockEntityCollection || (this.effectLayers.push(TT), zT.c.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(TT)
        })))
      }
      switchActiveCamera(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = TT, oT && TT.attachControl())
      }
      setActiveCameraById(TT) {
        const oT = this.getCameraById(TT);
        return oT ? (this.activeCamera = oT, oT) : null
      }
      setActiveCameraByName(TT) {
        const oT = this.getCameraByName(TT);
        return oT ? (this.activeCamera = oT, oT) : null
      }
      getAnimationGroupByName(TT) {
        for (let oT = 0; oT < this.animationGroups.length; oT++)
          if (this.animationGroups[oT].name === TT) return this.animationGroups[oT];
        return null
      }
      _getMaterial(TT, oT) {
        for (let IT = 0; IT < this.materials.length; IT++) {
          const TT = this.materials[IT];
          if (oT(TT)) return TT
        }
        if (TT)
          for (let IT = 0; IT < this.multiMaterials.length; IT++) {
            const TT = this.multiMaterials[IT];
            if (oT(TT)) return TT
          }
        return null
      }
      getMaterialByUniqueID(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(TT, oT)
      }
      getMaterialByUniqueId(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(oT, (oT => oT.uniqueId === TT))
      }
      getMaterialById(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(oT, (oT => oT.id === TT))
      }
      getMaterialByName(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(oT, (oT => oT.name === TT))
      }
      getLastMaterialById(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let IT = this.materials.length - 1; IT >= 0; IT--)
          if (this.materials[IT].id === TT) return this.materials[IT];
        if (oT)
          for (let IT = this.multiMaterials.length - 1; IT >= 0; IT--)
            if (this.multiMaterials[IT].id === TT) return this.multiMaterials[IT];
        return null
      }
      getTextureByUniqueId(TT) {
        for (let oT = 0; oT < this.textures.length; oT++)
          if (this.textures[oT].uniqueId === TT) return this.textures[oT];
        return null
      }
      getTextureByName(TT) {
        for (let oT = 0; oT < this.textures.length; oT++)
          if (this.textures[oT].name === TT) return this.textures[oT];
        return null
      }
      getCameraById(TT) {
        for (let oT = 0; oT < this.cameras.length; oT++)
          if (this.cameras[oT].id === TT) return this.cameras[oT];
        return null
      }
      getCameraByUniqueId(TT) {
        for (let oT = 0; oT < this.cameras.length; oT++)
          if (this.cameras[oT].uniqueId === TT) return this.cameras[oT];
        return null
      }
      getCameraByName(TT) {
        for (let oT = 0; oT < this.cameras.length; oT++)
          if (this.cameras[oT].name === TT) return this.cameras[oT];
        return null
      }
      getBoneById(TT) {
        for (let oT = 0; oT < this.skeletons.length; oT++) {
          const IT = this.skeletons[oT];
          for (let oT = 0; oT < IT.bones.length; oT++)
            if (IT.bones[oT].id === TT) return IT.bones[oT]
        }
        return null
      }
      getBoneByName(TT) {
        for (let oT = 0; oT < this.skeletons.length; oT++) {
          const IT = this.skeletons[oT];
          for (let oT = 0; oT < IT.bones.length; oT++)
            if (IT.bones[oT].name === TT) return IT.bones[oT]
        }
        return null
      }
      getLightByName(TT) {
        for (let oT = 0; oT < this.lights.length; oT++)
          if (this.lights[oT].name === TT) return this.lights[oT];
        return null
      }
      getLightById(TT) {
        for (let oT = 0; oT < this.lights.length; oT++)
          if (this.lights[oT].id === TT) return this.lights[oT];
        return null
      }
      getLightByUniqueId(TT) {
        for (let oT = 0; oT < this.lights.length; oT++)
          if (this.lights[oT].uniqueId === TT) return this.lights[oT];
        return null
      }
      getParticleSystemById(TT) {
        for (let oT = 0; oT < this.bR.length; oT++)
          if (this.bR[oT].id === TT) return this.bR[oT];
        return null
      }
      getGeometryById(TT) {
        for (let oT = 0; oT < this.geometries.length; oT++)
          if (this.geometries[oT].id === TT) return this.geometries[oT];
        return null
      }
      _getGeometryByUniqueId(TT) {
        if (this._geometriesByUniqueId) {
          const oT = this._geometriesByUniqueId[TT];
          if (void 0 !== oT) return this.geometries[oT]
        } else
          for (let oT = 0; oT < this.geometries.length; oT++)
            if (this.geometries[oT].uniqueId === TT) return this.geometries[oT];
        return null
      }
      getFrameGraphByName(TT) {
        for (let oT = 0; oT < this.frameGraphs.length; oT++)
          if (this.frameGraphs[oT].name === TT) return this.frameGraphs[oT];
        return null
      }
      pushGeometry(TT, oT) {
        return !(!oT && this._getGeometryByUniqueId(TT.uniqueId)) && (this.addGeometry(TT), zT.c.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(TT)
        })), !0)
      }
      removeGeometry(TT) {
        let oT;
        if (this._geometriesByUniqueId) {
          if (oT = this._geometriesByUniqueId[TT.uniqueId], void 0 === oT) return !1
        } else if (oT = this.geometries.indexOf(TT), oT < 0) return !1;
        if (oT !== this.geometries.length - 1) {
          const TT = this.geometries[this.geometries.length - 1];
          TT && (this.geometries[oT] = TT, this._geometriesByUniqueId && (this._geometriesByUniqueId[TT.uniqueId] = oT))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[TT.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(TT), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(TT) {
        for (let oT = 0; oT < this.meshes.length; oT++)
          if (this.meshes[oT].id === TT) return this.meshes[oT];
        return null
      }
      getMeshesById(TT) {
        return this.meshes.filter((function(oT) {
          return oT.id === TT
        }))
      }
      getTransformNodeById(TT) {
        for (let oT = 0; oT < this.transformNodes.length; oT++)
          if (this.transformNodes[oT].id === TT) return this.transformNodes[oT];
        return null
      }
      getTransformNodeByUniqueId(TT) {
        for (let oT = 0; oT < this.transformNodes.length; oT++)
          if (this.transformNodes[oT].uniqueId === TT) return this.transformNodes[oT];
        return null
      }
      getTransformNodesById(TT) {
        return this.transformNodes.filter((function(oT) {
          return oT.id === TT
        }))
      }
      getMeshByUniqueId(TT) {
        for (let oT = 0; oT < this.meshes.length; oT++)
          if (this.meshes[oT].uniqueId === TT) return this.meshes[oT];
        return null
      }
      getLastMeshById(TT) {
        for (let oT = this.meshes.length - 1; oT >= 0; oT--)
          if (this.meshes[oT].id === TT) return this.meshes[oT];
        return null
      }
      getLastTransformNodeById(TT) {
        for (let oT = this.transformNodes.length - 1; oT >= 0; oT--)
          if (this.transformNodes[oT].id === TT) return this.transformNodes[oT];
        return null
      }
      getLastEntryById(TT) {
        let oT;
        for (oT = this.meshes.length - 1; oT >= 0; oT--)
          if (this.meshes[oT].id === TT) return this.meshes[oT];
        for (oT = this.transformNodes.length - 1; oT >= 0; oT--)
          if (this.transformNodes[oT].id === TT) return this.transformNodes[oT];
        for (oT = this.cameras.length - 1; oT >= 0; oT--)
          if (this.cameras[oT].id === TT) return this.cameras[oT];
        for (oT = this.lights.length - 1; oT >= 0; oT--)
          if (this.lights[oT].id === TT) return this.lights[oT];
        for (oT = this.skeletons.length - 1; oT >= 0; oT--) {
          const IT = this.skeletons[oT];
          for (let oT = IT.bones.length - 1; oT >= 0; oT--)
            if (IT.bones[oT].id === TT) return IT.bones[oT]
        }
        return null
      }
      getNodeById(TT) {
        const oT = this.getMeshById(TT);
        if (oT) return oT;
        const IT = this.getTransformNodeById(TT);
        if (IT) return IT;
        const iT = this.getLightById(TT);
        if (iT) return iT;
        const zT = this.getCameraById(TT);
        if (zT) return zT;
        const kT = this.getBoneById(TT);
        return kT || null
      }
      getNodeByName(TT) {
        const oT = this.getMeshByName(TT);
        if (oT) return oT;
        const IT = this.getTransformNodeByName(TT);
        if (IT) return IT;
        const iT = this.getLightByName(TT);
        if (iT) return iT;
        const zT = this.getCameraByName(TT);
        if (zT) return zT;
        const kT = this.getBoneByName(TT);
        return kT || null
      }
      getMeshByName(TT) {
        for (let oT = 0; oT < this.meshes.length; oT++)
          if (this.meshes[oT].name === TT) return this.meshes[oT];
        return null
      }
      getTransformNodeByName(TT) {
        for (let oT = 0; oT < this.transformNodes.length; oT++)
          if (this.transformNodes[oT].name === TT) return this.transformNodes[oT];
        return null
      }
      getLastSkeletonById(TT) {
        for (let oT = this.skeletons.length - 1; oT >= 0; oT--)
          if (this.skeletons[oT].id === TT) return this.skeletons[oT];
        return null
      }
      getSkeletonByUniqueId(TT) {
        for (let oT = 0; oT < this.skeletons.length; oT++)
          if (this.skeletons[oT].uniqueId === TT) return this.skeletons[oT];
        return null
      }
      getSkeletonById(TT) {
        for (let oT = 0; oT < this.skeletons.length; oT++)
          if (this.skeletons[oT].id === TT) return this.skeletons[oT];
        return null
      }
      getSkeletonByName(TT) {
        for (let oT = 0; oT < this.skeletons.length; oT++)
          if (this.skeletons[oT].name === TT) return this.skeletons[oT];
        return null
      }
      getMorphTargetManagerById(TT) {
        for (let oT = 0; oT < this.morphTargetManagers.length; oT++)
          if (this.morphTargetManagers[oT].uniqueId === TT) return this.morphTargetManagers[oT];
        return null
      }
      getMorphTargetById(TT) {
        for (let oT = 0; oT < this.morphTargetManagers.length; ++oT) {
          const IT = this.morphTargetManagers[oT];
          for (let oT = 0; oT < IT.numTargets; ++oT) {
            const iT = IT.getTarget(oT);
            if (iT.id === TT) return iT
          }
        }
        return null
      }
      getMorphTargetByName(TT) {
        for (let oT = 0; oT < this.morphTargetManagers.length; ++oT) {
          const IT = this.morphTargetManagers[oT];
          for (let oT = 0; oT < IT.numTargets; ++oT) {
            const iT = IT.getTarget(oT);
            if (iT.name === TT) return iT
          }
        }
        return null
      }
      getPostProcessByName(TT) {
        for (let oT = 0; oT < this.postProcesses.length; ++oT) {
          const IT = this.postProcesses[oT];
          if (IT.name === TT) return IT
        }
        return null
      }
      isActiveMesh(TT) {
        return -1 !== this._activeMeshes.indexOf(TT)
      }
      get uid() {
        return this._uid || (this._uid = iT.i.RandomId()), this._uid
      }
      addExternalData(TT, oT) {
        return this._externalData || (this._externalData = new BT), this._externalData.add(TT, oT)
      }
      getExternalData(TT) {
        return this._externalData ? this._externalData.get(TT) : null
      }
      getOrAddExternalDataWithFactory(TT, oT) {
        return this._externalData || (this._externalData = new BT), this._externalData.getOrAddWithFactory(TT, oT)
      }
      removeExternalData(TT) {
        return this._externalData.remove(TT)
      }
      _evaluateSubMesh(TT, oT, IT, iT) {
        if (iT || TT.isInFrustum(this._frustumPlanes)) {
          for (let iT = 0, zT = this._evaluateSubMeshStage; iT < zT.length; iT++) {
            zT[iT].action(oT, TT)
          }
          const IT = TT.bc();
          null !== IT && void 0 !== IT && (IT.hasRenderTargetTextures && null != IT.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(IT) && (this._processedMaterials.push(IT), this._materialsRenderTargets.concatWithNoDuplicate(IT.getRenderTargetTextures())), this._renderingManager.dispatch(TT, oT, IT))
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
            const oT = this.activeCameras[TT];
            oT && oT._activeMeshes && oT._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let TT = 0; TT < this.textures.length; TT++) {
            const oT = this.textures[TT];
            oT && oT.renderList && oT.freeRenderingGroups()
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
          oT = arguments.length > 1 ? arguments[1] : void 0,
          IT = arguments.length > 2 ? arguments[2] : void 0,
          iT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          kT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const WT = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const TT of WT) TT.objectRenderer._freezeActiveMeshes(iT);
          return this._freezeActiveMeshesCancel = (0, zT.e)((() => {
            let TT = !0,
              oT = !0;
            for (const IT of WT) TT && (TT = IT.objectRenderer._isFrozen), oT && (oT = null !== IT.objectRenderer._freezeActiveMeshesCancel);
            if (TT) return !0;
            if (!oT) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = kT, this._skipEvaluateActiveMeshesCompletely = TT, oT?.()
          }), ((TT, oT) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), oT) {
              const oT = "Scene: Timeout while waiting for meshes to be frozen.";
              IT ? IT(oT) : (II.d.Error(oT), TT && II.d.Error(TT))
            } else {
              const oT = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              IT ? IT(oT) : (II.d.Error(oT), TT && (II.d.Error(TT), TT.stack && II.d.Error(TT.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = kT, this._skipEvaluateActiveMeshesCompletely = TT, iT)
              for (let TT = 0; TT < this._activeMeshes.length; TT++) this._activeMeshes.data[TT]._freeze();
            oT && oT()
          } else IT && IT("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let TT = 0; TT < this.meshes.length; TT++) {
          const oT = this.meshes[TT];
          oT._internalAbstractMeshDataInfo && (oT._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const TT = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const oT of TT) oT.objectRenderer._unfreezeActiveMeshes()
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
            for (let oT = 0; oT < TT; oT++) {
              this._activeMeshes.data[oT].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const TT = this._activeParticleSystems.length;
            for (let oT = 0; oT < TT; oT++) this._activeParticleSystems.data[oT].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let zT = 0, kT = this._beforeEvaluateActiveMeshStage; zT < kT.length; zT++) {
          kT[zT].action()
        }
        const TT = this.getActiveMeshCandidates(),
          oT = TT.length,
          IT = tT.c.Enabled,
          iT = this.customLODSelector;
        for (let zT = 0; zT < oT; zT++) {
          const oT = TT.data[zT],
            kT = !iT && !oT.yC && !oT._internalMeshDataInfo?._LODLevels.length;
          let WT, XT;
          if ((kT || (WT = oT._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), WT ? WT[1] = -1 : (WT = [oT, -1], oT._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, WT))), !oT.isBlocked) && (IT && this._totalVertices.addCount(oT.getTotalVertices(), !1), oT.isReady() && oT.isEnabled() && !oT.ti.hasAZeroComponent)) {
            if (oT.computeWorldMatrix(), oT.actionManager && oT.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(oT), kT) XT = oT;
            else if (XT = iT ? iT(oT, this.activeCamera) : oT.getLOD(this.activeCamera), WT[0] = XT, WT[1] = this._frameId, void 0 === XT || null === XT) continue;
            if (XT !== oT && 0 !== XT.billboardMode && XT.computeWorldMatrix(), oT._preActivate(), oT.isVisible && oT.visibility > 0 && 0 !== (oT.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || oT.lc || oT.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(oT), this.activeCamera._activeMeshes.push(oT), XT !== oT && XT._activate(this._renderId, !1);
              for (let TT = 0, IT = this._preActiveMeshStage; TT < IT.length; TT++) {
                IT[TT].action(oT)
              }
              oT._activate(this._renderId, !1) && (oT.yC ? oT._internalAbstractMeshDataInfo._actAsRegularMesh && (XT = oT) : XT._internalAbstractMeshDataInfo._onlyForInstances = !1, XT._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(oT, XT)), oT._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let TT = 0; TT < this.bR.length; TT++) {
            const oT = this.bR[TT];
            if (!oT.isStarted() || !oT.emitter) continue;
            const IT = oT.emitter;
            IT.position && !IT.isEnabled() || (this._activeParticleSystems.push(oT), oT.animate(), this._renderingManager.dispatchParticles(oT))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(TT) {
        this._skeletonsEnabled && TT.skeleton && (this._activeSkeletons.pushNoDuplicate(TT.skeleton) && (TT.skeleton.prepare(), this._activeBones.addCount(TT.skeleton.bones.length, !1)), TT.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(TT) && this.frameGraph && TT.applySkeleton(TT.skeleton))
      }
      _activeMesh(TT, oT) {
        this._prepareSkeleton(oT);
        let IT = TT.OiT || TT.yC || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || oT.lc;
        if (oT && oT.pR && oT.pR.length > 0) {
          const iT = this.getActiveSubMeshCandidates(oT),
            zT = iT.length;
          IT = IT || 1 === zT;
          for (let kT = 0; kT < zT; kT++) {
            const zT = iT.data[kT];
            this._evaluateSubMesh(zT, oT, TT, IT)
          }
        }
      }
      updateTransformMatrix(TT) {
        const oT = this.activeCamera;
        if (oT)
          if (oT._renderingMultiview) {
            const IT = oT._rigCameras[0],
              iT = oT._rigCameras[1];
            this.setTransformMatrix(IT.getViewMatrix(), IT.getProjectionMatrix(TT), iT.getViewMatrix(), iT.getProjectionMatrix(TT))
          } else this.setTransformMatrix(oT.getViewMatrix(), oT.getProjectionMatrix(TT))
      }
      _bindFrameBuffer(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (TT && TT._multiviewTexture ? TT._multiviewTexture._bindFrameBuffer() : TT && TT.outputRenderTarget ? TT.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), oT && this._clearFrameBuffer(TT)
      }
      _clearFrameBuffer(TT) {
        if (TT && TT._multiviewTexture);
        else if (TT && TT.outputRenderTarget && !TT._renderingMultiview) {
          const oT = TT.outputRenderTarget;
          oT.onClearObservable.hasObservers() ? oT.onClearObservable.notifyObservers(this._engine) : oT.skipInitialClear || TT.isRightCamera || (this.autoClear && this._engine.clear(oT.clearColor || this._clearColor, !oT._cleared, !0, !0), oT._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(TT, oT) {
        let IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (TT && TT._skipRendering) return;
        const zT = this._engine;
        if (this._activeCamera = TT, !this.activeCamera) throw new Error("Active camera not set");
        if (zT.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && IT) {
          let oT = !0;
          TT._renderingMultiview && TT.outputRenderTarget && (oT = TT.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, TT.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), TT._renderingMultiview && TT.outputRenderTarget && (TT.outputRenderTarget.skipInitialClear = oT)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = TT.outputRenderTarget?.renderPassId ?? TT.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let iT = 0; iT < this._softwareSkinnedMeshes.length; iT++) {
          const TT = this._softwareSkinnedMeshes.data[iT];
          TT.applySkeleton(TT.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), TT.customRenderTargets && TT.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(TT.customRenderTargets), oT && oT.customRenderTargets && oT.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(oT.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let iT = 0, XT = this._gatherActiveCameraRenderTargetsStage; iT < XT.length; iT++) {
          XT[iT].action(this._renderTargets)
        }
        let kT = !1;
        if (this.renderTargetsEnabled) {
          let TT;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            iT.i.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const oT = this.getBoundingBoxRenderer?.();
            for (let IT = 0; IT < this._renderTargets.length; IT++) {
              const iT = this._renderTargets.data[IT];
              if (iT._shouldRender()) {
                this._renderId++;
                const IT = iT.activeCamera && iT.activeCamera !== this.activeCamera;
                oT && !TT && (TT = oT.renderList.length > 0 ? oT.renderList.data.slice() : [], TT.length = oT.renderList.length), iT.render(IT, this.dumpNextRenderTargets), kT = !0
              }
            }
            oT && TT && (oT.renderList.data = TT, oT.renderList.length = TT.length), iT.i.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const oT = this.getBoundingBoxRenderer?.();
            oT && !TT && (TT = oT.renderList.length > 0 ? oT.renderList.data.slice() : [], TT.length = oT.renderList.length);
            for (let TT = 0, IT = this._cameraDrawRenderTargetStage; TT < IT.length; TT++) {
              kT = IT[TT].action(this.activeCamera) || kT
            }
            oT && TT && (oT.renderList.data = TT, oT.renderList.length = TT.length)
          }
          this._intermediateRendering = !1
        }
        kT && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || TT._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let iT = 0, XT = this._beforeCameraDrawStage; iT < XT.length; iT++) {
          XT[iT].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const WT = zT.snapshotRendering && 1 === zT.snapshotRenderingMode;
        WT && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !WT), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let iT = 0, XT = this._afterCameraDrawStage; iT < XT.length; iT++) {
          XT[iT].action(this.activeCamera)
        }
        if (this.postProcessManager && !TT._multiviewTexture) {
          const oT = TT.outputRenderTarget ? TT.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(TT.isIntermediate, oT)
        }
        for (let iT = 0, XT = this._afterCameraPostProcessStage; iT < XT.length; iT++) {
          XT[iT].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === TT.cameraRigMode || TT._renderingMultiview) return TT._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(TT, void 0, oT), void this.onAfterRenderCameraObservable.notifyObservers(TT);
        if (TT._useMultiviewToSingleView) this._renderMultiviewToSingleView(TT);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(TT);
          for (let oT = 0; oT < TT._rigCameras.length; oT++) this._renderForCamera(TT._rigCameras[oT], TT)
        }
        this._activeCamera = TT, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(TT)
      }
      _checkIntersections() {
        for (let TT = 0; TT < this._meshesForIntersections.length; TT++) {
          const oT = this._meshesForIntersections.data[TT];
          if (oT.actionManager)
            for (let TT = 0; oT.actionManager && TT < oT.actionManager.actions.length; TT++) {
              const IT = oT.actionManager.actions[TT];
              if (12 === IT.trigger || 13 === IT.trigger) {
                const TT = IT.getTriggerParameter(),
                  iT = TT.mesh ? TT.mesh : TT,
                  zT = iT.jiT(oT, TT.usePreciseIntersection),
                  kT = oT._intersectionsInProgress.indexOf(iT);
                zT && -1 === kT ? 12 === IT.trigger ? (IT._executeCurrent(cT.CreateNew(oT, void 0, iT)), oT._intersectionsInProgress.push(iT)) : 13 === IT.trigger && oT._intersectionsInProgress.push(iT) : !zT && kT > -1 && (13 === IT.trigger && IT._executeCurrent(cT.CreateNew(oT, void 0, iT)), oT.actionManager.hasSpecificTrigger(13, (TT => {
                  const oT = TT.mesh ? TT.mesh : TT;
                  return iT === oT
                })) && 13 !== IT.trigger || oT._intersectionsInProgress.splice(kT, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(TT) {}
      _animate(TT) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let TT = Math.max(XI.MinDeltaTime, Math.min(this._engine.getDeltaTime(), XI.MaxDeltaTime)) + this._timeAccumulator;
          const oT = this._engine.getTimeStep(),
            IT = 1e3 / oT / 1e3;
          let iT = 0;
          const zT = this._engine.getLockstepMaxSteps();
          let kT = Math.floor(TT / oT);
          for (kT = Math.min(kT, zT); TT > 0 && iT < kT;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = oT * IT, this._animate(oT), this.onAfterAnimationsObservable.notifyObservers(this), this.EY && this._advancePhysicsEngineStep(oT), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, iT++, TT -= oT;
          this._timeAccumulator = TT < 0 ? 0 : TT
        } else {
          const TT = this.useConstantAnimationDeltaTime ? 16 : Math.max(XI.MinDeltaTime, Math.min(this._engine.getDeltaTime(), XI.MaxDeltaTime));
          this._animationRatio = .06 * TT, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.EY && this._advancePhysicsEngineStep(TT)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(TT) {
        if (TT?.outputRenderTarget && !TT?.isRigCamera && (TT.outputRenderTarget._cleared = !1), TT?.rigCameras?.length)
          for (let oT = 0; oT < TT.rigCameras.length; ++oT) {
            const IT = TT.rigCameras[oT].outputRenderTarget;
            IT && (IT._cleared = !1)
          }
      }
      resetDrawCache(TT) {
        if (this.meshes)
          for (const oT of this.meshes) oT.resetDrawCache(TT)
      }
      _renderWithFrameGraph() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          oT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, TT)
          for (const IT of this.cameras)
            if (IT.update(), 0 !== IT.cameraRigMode)
              for (let TT = 0; TT < IT._rigCameras.length; TT++) IT._rigCameras[TT].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(oT)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(TT) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const oT = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), iT.i.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let TT = 0; TT < this._renderTargets.length; TT++) {
            const IT = this._renderTargets.data[TT],
              iT = IT.activeCamera || oT;
            this._renderRenderTarget(IT, iT, !0, this.dumpNextRenderTargets)
          }
          iT.i.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let IT = 0, iT = this._beforeClearStage; IT < iT.length; IT++) {
          iT[IT].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const oT = this.getActiveMeshCandidates(),
            IT = oT.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let TT = 0; TT < IT; TT++) {
                const IT = oT.data[TT];
                IT._internalAbstractMeshDataInfo._wasActiveLastFrame && IT.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const TT = this._activeParticleSystems.length;
              for (let oT = 0; oT < TT; oT++) this._activeParticleSystems.data[oT].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let iT = 0; iT < IT; iT++) {
              const IT = oT.data[iT];
              IT._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, IT.isBlocked || (this._totalVertices.addCount(IT.getTotalVertices(), !1), IT.isReady() && IT.isEnabled() && !IT.ti.hasAZeroComponent && (IT.computeWorldMatrix(TT), IT.actionManager && IT.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(IT)))
            }
            if (this.particlesEnabled)
              for (let TT = 0; TT < this.bR.length; TT++) {
                const oT = this.bR[TT];
                if (!oT.isStarted() || !oT.emitter) continue;
                const IT = oT.emitter;
                IT.position && !IT.isEnabled() || (this._activeParticleSystems.push(oT), oT.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, TT._shouldRender()) {
          if (this._renderId++, this.activeCamera = oT, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), TT.render(IT, iT)
        }
        this._intermediateRendering = !1
      }
      render() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.IIT) return;
        const IT = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(TT, oT)
        } finally {
          this._renderingMeshEvaluationDepth = IT
        }
      }
      _renderFrame(TT, oT) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), MT.b.pC = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const IT of this.activeCameras) this._checkCameraRenderTarget(IT);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), oT || this.animate();
        for (let IT = 0, iT = this._beforeCameraUpdateStage; IT < iT.length; IT++) {
          iT[IT].action()
        }
        if (TT)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let IT = 0; IT < this.activeCameras.length; IT++) {
              const TT = this.activeCameras[IT];
              if (TT.update(), 0 !== TT.cameraRigMode)
                for (let oT = 0; oT < TT._rigCameras.length; oT++) TT._rigCameras[oT].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let IT = 0; IT < this.activeCamera._rigCameras.length; IT++) this.activeCamera._rigCameras[IT].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(TT, oT);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const TT = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            iT.i.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let oT = 0; oT < this.customRenderTargets.length; oT++) {
              const IT = this.customRenderTargets[oT],
                iT = IT.activeCamera || this.activeCamera;
              this._renderRenderTarget(IT, iT, TT !== iT, this.dumpNextRenderTargets)
            }
            iT.i.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = TT?.renderPassId ?? 0, this.activeCamera = TT, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let oT = 0, IT = this._beforeClearStage; oT < IT.length; oT++) {
            IT[oT].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let oT = 0, IT = this._gatherRenderTargetsStage; oT < IT.length; oT++) {
            IT[oT].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let oT = 0; oT < this.activeCameras.length; oT++) this._processSubCameras(this.activeCameras[oT], oT > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let IT = 0, iT = this._afterRenderStage; IT < iT.length; IT++) {
          iT[IT].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let TT = 0; TT < this._toBeDisposed.length; TT++) {
            const oT = this._toBeDisposed[TT];
            oT && oT.dispose()
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
        if (this.IIT) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, wT.d)(this.stopAllAnimations)) {
          for (const TT of this._activeAnimatables) TT.onAnimationEndObservable.clear(), TT.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const TT = this._activeRequests.slice();
        for (const kT of TT) kT.abort();
        this._activeRequests.length = 0;
        try {
          this.bC.notifyObservers(this)
        } catch (zT) {
          II.d.Error("An error occurred while calling onDisposeObservable!", zT)
        }
        this.detachControl();
        const oT = this._engine.getInputElement?.();
        if (oT)
          for (let kT = 0; kT < this.cameras.length; kT++) this.cameras[kT].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (TT => TT.dispose(!0))), this._disposeList(this.transformNodes, (TT => TT.dispose(!0)));
        const IT = this.cameras;
        this._disposeList(IT), this._disposeList(this.bR), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let iT = this._engine.scenes.indexOf(this);
        if (iT > -1 && this._engine.scenes.splice(iT, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, MT.i)(), hT.d._LastCreatedScene === this) {
          hT.d._LastCreatedScene = null;
          let TT = hT.d.Instances.length - 1;
          for (; TT >= 0;) {
            const oT = hT.d.Instances[TT];
            if (oT.scenes.length > 0) {
              hT.d._LastCreatedScene = oT.scenes[this._engine.scenes.length - 1];
              break
            }
            TT--
          }
        }
        iT = this._engine._virtualScenes.indexOf(this), iT > -1 && this._engine._virtualScenes.splice(iT, 1), this._engine.wipeCaches(!0), this.bC.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(TT, oT) {
        const IT = TT.slice(0);
        oT = oT ?? (TT => TT.dispose());
        for (const iT of IT) oT(iT);
        TT.length = 0
      }
      get IIT() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let TT = 0; TT < this.meshes.length; TT++) {
          const oT = this.meshes[TT].geometry;
          oT && oT.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const TT of this.textures) {
          TT._buffer && (TT._buffer = null)
        }
      }
      getWorldExtends(TT) {
        const oT = new ST.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          IT = new ST.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        TT = TT || (() => !0);
        const iT = this.meshes.filter(TT);
        for (const zT of iT) {
          if (zT.computeWorldMatrix(!0), !zT.pR || 0 === zT.pR.length || zT.infiniteDistance) continue;
          const TT = zT.GJ(),
            iT = TT.boundingBox.minimumWorld,
            kT = TT.boundingBox.maximumWorld;
          ST.m.CheckExtends(iT, oT, IT), ST.m.CheckExtends(kT, oT, IT)
        }
        return oT.x === Number.MAX_VALUE ? {
          min: ST.m.Zero(),
          max: ST.m.Zero()
        } : {
          min: oT,
          max: IT
        }
      }
      createPickingRay(TT, oT, IT, iT) {
        throw (0, wT.k)("Ray")
      }
      createPickingRayToRef(TT, oT, IT, iT, zT) {
        throw (0, wT.k)("Ray")
      }
      createPickingRayInCameraSpace(TT, oT, IT) {
        throw (0, wT.k)("Ray")
      }
      createPickingRayInCameraSpaceToRef(TT, oT, IT, iT) {
        throw (0, wT.k)("Ray")
      }
      PL(TT, oT, IT, iT, zT, kT) {
        const WT = (0, wT.k)("Ray", !0);
        return WT && II.d.Warn(WT), new xT.d
      }
      pickWithBoundingInfo(TT, oT, IT, iT, zT) {
        const kT = (0, wT.k)("Ray", !0);
        return kT && II.d.Warn(kT), new xT.d
      }
      pickWithRay(TT, oT, IT, iT) {
        throw (0, wT.k)("Ray")
      }
      multiPick(TT, oT, IT, iT, zT) {
        throw (0, wT.k)("Ray")
      }
      multiPickWithRay(TT, oT, IT) {
        throw (0, wT.k)("Ray")
      }
      setPointerOverMesh(TT, oT, IT) {
        this._inputManager.setPointerOverMesh(TT, oT, IT)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const TT of this.geometries) TT._rebuild();
        for (const TT of this.meshes) TT._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const TT of this._components) TT.rebuild();
        for (const TT of this.bR) TT.rebuild();
        if (this.spriteManagers)
          for (const TT of this.spriteManagers) TT.rebuild()
      }
      _rebuildTextures() {
        for (const TT of this.textures) TT._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(TT, oT, IT) {
        if (void 0 === oT) return TT;
        const iT = [];
        for (const zT in TT) {
          const kT = TT[zT];
          FT.c && FT.c.MatchesQuery(kT, oT) && (!IT || IT(kT)) && iT.push(kT)
        }
        return iT
      }
      getMeshesByTags(TT, oT) {
        return this._getByTags(this.meshes, TT, oT)
      }
      getCamerasByTags(TT, oT) {
        return this._getByTags(this.cameras, TT, oT)
      }
      getLightsByTags(TT, oT) {
        return this._getByTags(this.lights, TT, oT)
      }
      getMaterialByTags(TT, oT) {
        return this._getByTags(this.materials, TT, oT).concat(this._getByTags(this.multiMaterials, TT, oT))
      }
      getTransformNodesByTags(TT, oT) {
        return this._getByTags(this.transformNodes, TT, oT)
      }
      setRenderingOrder(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(TT, oT, IT, iT)
      }
      setRenderingAutoClearDepthStencil(TT, oT) {
        let IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          iT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(TT, oT, IT, iT)
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
      markAllMaterialsAsDirty(TT, oT) {
        if (!this._blockMaterialDirtyMechanism)
          for (const IT of this.materials) oT && !oT(IT) || IT.roT(TT)
      }
      _loadFile(TT, oT, IT, iT, zT, kT, WT) {
        const XT = (0, yT.q)(TT, oT, IT, iT ? this.offlineProvider : void 0, zT, kT, WT);
        return this._activeRequests.push(XT), XT.onCompleteObservable.add((TT => {
          this._activeRequests.splice(this._activeRequests.indexOf(TT), 1)
        })), XT
      }
      async _loadFileAsync(TT, oT, IT, iT, zT) {
        return await new Promise(((kT, WT) => {
          this._loadFile(TT, (TT => {
            kT(TT)
          }), oT, IT, iT, ((TT, oT) => {
            WT(oT)
          }), zT)
        }))
      }
      async _loadDelayedFileAsync(TT, oT, IT) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const iT = `${TT}|${oT?"binary":"string"}`;
        let zT = this._delayedFileRequests.get(iT);
        if (!zT) {
          zT = oT ? this._loadFileAsync(TT, void 0, IT, !0) : this._loadFileAsync(TT, void 0, IT, !1);
          const kT = zT;
          (async () => {
            try {
              await kT
            } catch {}
            this._delayedFileRequests?.delete(iT)
          })(), this._delayedFileRequests.set(iT, zT)
        }
        return await zT
      }
      _requestFile(TT, oT, IT, iT, zT, kT, WT) {
        const XT = (0, yT.y)(TT, oT, IT, iT ? this.offlineProvider : void 0, zT, kT, WT);
        return this._activeRequests.push(XT), XT.onCompleteObservable.add((TT => {
          this._activeRequests.splice(this._activeRequests.indexOf(TT), 1)
        })), XT
      }
      async _requestFileAsync(TT, oT, IT, iT, zT) {
        return await new Promise(((kT, WT) => {
          this._requestFile(TT, (TT => {
            kT(TT)
          }), oT, IT, iT, (TT => {
            WT(TT)
          }), zT)
        }))
      }
      _readFile(TT, oT, IT, iT, zT) {
        const kT = (0, yT.u)(TT, oT, IT, iT, zT);
        return this._activeRequests.push(kT), kT.onCompleteObservable.add((TT => {
          this._activeRequests.splice(this._activeRequests.indexOf(TT), 1)
        })), kT
      }
      async _readFileAsync(TT, oT, IT) {
        return await new Promise(((iT, zT) => {
          this._readFile(TT, (TT => {
            iT(TT)
          }), oT, IT, (TT => {
            zT(TT)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, wT.k)("performanceViewerSceneExtension")
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
    XI.FOGMODE_NONE = 0, XI.FOGMODE_EXP = 1, XI.FOGMODE_EXP2 = 2, XI.FOGMODE_LINEAR = 3, XI.MinDeltaTime = 1, XI.MaxDeltaTime = 1e3, XI._OriginalDefaultMaterialFactory = XI.DefaultMaterialFactory;
    let BI = !1;

    function FI() {
      BI || (BI = !0, (0, iI.h)("BABYLON.Scene", XI))
    }(VT = XI.prototype).sortActiveAnimatables ?? (VT.sortActiveAnimatables = (0, wT.i)("Scene", "sortActiveAnimatables")), (To = XI.prototype).beginWeightedAnimation ?? (To.beginWeightedAnimation = (0, wT.i)("Scene", "beginWeightedAnimation")), (oo = XI.prototype).beginAnimation ?? (oo.beginAnimation = (0, wT.i)("Scene", "beginAnimation")), (Io = XI.prototype).beginHierarchyAnimation ?? (Io.beginHierarchyAnimation = (0, wT.i)("Scene", "beginHierarchyAnimation")), (io = XI.prototype).beginDirectAnimation ?? (io.beginDirectAnimation = (0, wT.i)("Scene", "beginDirectAnimation")), (zo = XI.prototype).beginDirectHierarchyAnimation ?? (zo.beginDirectHierarchyAnimation = (0, wT.i)("Scene", "beginDirectHierarchyAnimation")), (ko = XI.prototype).getAnimatableByTarget ?? (ko.getAnimatableByTarget = (0, wT.i)("Scene", "getAnimatableByTarget")), (Wo = XI.prototype).getAllAnimatablesByTarget ?? (Wo.getAllAnimatablesByTarget = (0, wT.i)("Scene", "getAllAnimatablesByTarget")), (Xo = XI.prototype).stopAllAnimations ?? (Xo.stopAllAnimations = (0, wT.i)("Scene", "stopAllAnimations")), (Bo = XI.prototype).getSoundByName ?? (Bo.getSoundByName = (0, wT.i)("Scene", "getSoundByName")), (Fo = XI.prototype).createOrUpdateSelectionOctree ?? (Fo.createOrUpdateSelectionOctree = (0, wT.i)("Scene", "createOrUpdateSelectionOctree")), (So = XI.prototype).createDefaultLight ?? (So.createDefaultLight = (0, wT.i)("Scene", "createDefaultLight")), (Do = XI.prototype).createDefaultCamera ?? (Do.createDefaultCamera = (0, wT.i)("Scene", "createDefaultCamera")), (Lo = XI.prototype).createDefaultCameraOrLight ?? (Lo.createDefaultCameraOrLight = (0, wT.i)("Scene", "createDefaultCameraOrLight")), (xo = XI.prototype).createDefaultSkybox ?? (xo.createDefaultSkybox = (0, wT.i)("Scene", "createDefaultSkybox")), (co = XI.prototype).createDefaultEnvironment ?? (co.createDefaultEnvironment = (0, wT.i)("Scene", "createDefaultEnvironment")), (Ko = XI.prototype).createDefaultVRExperience ?? (Ko.createDefaultVRExperience = (0, wT.i)("Scene", "createDefaultVRExperience")), (Mo = XI.prototype).createDefaultXRExperienceAsync ?? (Mo.createDefaultXRExperienceAsync = (0, wT.i)("Scene", "createDefaultXRExperienceAsync")), (ro = XI.prototype).getGlowLayerByName ?? (ro.getGlowLayerByName = (0, wT.i)("Scene", "getGlowLayerByName")), (Ao = XI.prototype).getHighlightLayerByName ?? (Ao.getHighlightLayerByName = (0, wT.i)("Scene", "getHighlightLayerByName")), (go = XI.prototype).getSelectionOutlineLayerByName ?? (go.getSelectionOutlineLayerByName = (0, wT.i)("Scene", "getSelectionOutlineLayerByName")), (ho = XI.prototype).removeLensFlareSystem ?? (ho.removeLensFlareSystem = (0, wT.i)("Scene", "removeLensFlareSystem")), (wo = XI.prototype).addLensFlareSystem ?? (wo.addLensFlareSystem = (0, wT.i)("Scene", "addLensFlareSystem")), (mo = XI.prototype).getLensFlareSystemByName ?? (mo.getLensFlareSystemByName = (0, wT.i)("Scene", "getLensFlareSystemByName")), (eo = XI.prototype).getLensFlareSystemByID ?? (eo.getLensFlareSystemByID = (0, wT.i)("Scene", "getLensFlareSystemByID")), (Ro = XI.prototype).getLensFlareSystemById ?? (Ro.getLensFlareSystemById = (0, wT.i)("Scene", "getLensFlareSystemById")), (uo = XI.prototype).getPhysicsEngine ?? (uo.getPhysicsEngine = (0, wT.i)("Scene", "getPhysicsEngine")), (vo = XI.prototype).enablePhysics ?? (vo.enablePhysics = (0, wT.i)("Scene", "enablePhysics")), (Eo = XI.prototype).disablePhysicsEngine ?? (Eo.disablePhysicsEngine = (0, wT.i)("Scene", "disablePhysicsEngine")), (fo = XI.prototype).isPhysicsEnabled ?? (fo.isPhysicsEnabled = (0, wT.i)("Scene", "isPhysicsEnabled")), (Co = XI.prototype).deleteCompoundImpostor ?? (Co.deleteCompoundImpostor = (0, wT.i)("Scene", "deleteCompoundImpostor")), (jo = XI.prototype).removeReflectionProbe ?? (jo.removeReflectionProbe = (0, wT.i)("Scene", "removeReflectionProbe")), (Jo = XI.prototype).addReflectionProbe ?? (Jo.addReflectionProbe = (0, wT.i)("Scene", "addReflectionProbe")), (Uo = XI.prototype).getBoundingBoxRenderer ?? (Uo.getBoundingBoxRenderer = (0, wT.i)("Scene", "getBoundingBoxRenderer")), (ao = XI.prototype).enableDepthRenderer ?? (ao.enableDepthRenderer = (0, wT.i)("Scene", "enableDepthRenderer")), (Yo = XI.prototype).disableDepthRenderer ?? (Yo.disableDepthRenderer = (0, wT.i)("Scene", "disableDepthRenderer")), (Qo = XI.prototype).enableFluidRenderer ?? (Qo.enableFluidRenderer = (0, wT.i)("Scene", "enableFluidRenderer")), (Oo = XI.prototype).disableFluidRenderer ?? (Oo.disableFluidRenderer = (0, wT.i)("Scene", "disableFluidRenderer")), (Ho = XI.prototype).enableGeometryBufferRenderer ?? (Ho.enableGeometryBufferRenderer = (0, wT.i)("Scene", "enableGeometryBufferRenderer")), (no = XI.prototype).disableGeometryBufferRenderer ?? (no.disableGeometryBufferRenderer = (0, wT.i)("Scene", "disableGeometryBufferRenderer")), (qo = XI.prototype).enableIblCdfGenerator ?? (qo.enableIblCdfGenerator = (0, wT.i)("Scene", "enableIblCdfGenerator")), (Zo = XI.prototype).disableIblCdfGenerator ?? (Zo.disableIblCdfGenerator = (0, wT.i)("Scene", "disableIblCdfGenerator")), (so = XI.prototype).getOutlineRenderer ?? (so.getOutlineRenderer = (0, wT.i)("Scene", "getOutlineRenderer")), (to = XI.prototype).enablePrePassRenderer ?? (to.enablePrePassRenderer = (0, wT.i)("Scene", "enablePrePassRenderer")), (Go = XI.prototype).disablePrePassRenderer ?? (Go.disablePrePassRenderer = (0, wT.i)("Scene", "disablePrePassRenderer")), (po = XI.prototype).enableSubSurfaceForPrePass ?? (po.enableSubSurfaceForPrePass = (0, wT.i)("Scene", "enableSubSurfaceForPrePass")), (bo = XI.prototype).disableSubSurfaceForPrePass ?? (bo.disableSubSurfaceForPrePass = (0, wT.i)("Scene", "disableSubSurfaceForPrePass")), (yo = XI.prototype).pickSprite ?? (yo.pickSprite = (0, wT.i)("Scene", "pickSprite")), (No = XI.prototype).pickSpriteWithRay ?? (No.pickSpriteWithRay = (0, wT.i)("Scene", "pickSpriteWithRay")), (Po = XI.prototype).multiPickSprite ?? (Po.multiPickSprite = (0, wT.i)("Scene", "multiPickSprite")), (Vo = XI.prototype).multiPickSpriteWithRay ?? (Vo.multiPickSpriteWithRay = (0, wT.i)("Scene", "multiPickSpriteWithRay")), (TI = XI.prototype).setPointerOverSprite ?? (TI.setPointerOverSprite = (0, wT.i)("Scene", "setPointerOverSprite")), (oI = XI.prototype).getPointerOverSprite ?? (oI.getPointerOverSprite = (0, wT.i)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(XI.prototype, "mainSoundTrack") || Object.defineProperty(XI.prototype, "mainSoundTrack", (0, wT.f)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(XI.prototype, "soundTracks") || Object.defineProperty(XI.prototype, "soundTracks", (0, wT.f)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(XI.prototype, "audioEnabled") || Object.defineProperty(XI.prototype, "audioEnabled", (0, wT.f)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(XI.prototype, "headphone") || Object.defineProperty(XI.prototype, "headphone", (0, wT.f)("Scene", "headphone")), Object.getOwnPropertyDescriptor(XI.prototype, "audioListenerPositionProvider") || Object.defineProperty(XI.prototype, "audioListenerPositionProvider", (0, wT.f)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(XI.prototype, "audioListenerRotationProvider") || Object.defineProperty(XI.prototype, "audioListenerRotationProvider", (0, wT.f)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(XI.prototype, "audioPositioningRefreshRate") || Object.defineProperty(XI.prototype, "audioPositioningRefreshRate", (0, wT.f)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(XI.prototype, "selectionOctree") || Object.defineProperty(XI.prototype, "selectionOctree", (0, wT.f)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(XI.prototype, "debugLayer") || Object.defineProperty(XI.prototype, "debugLayer", (0, wT.f)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(XI.prototype, "gamepadManager") || Object.defineProperty(XI.prototype, "gamepadManager", (0, wT.f)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(XI.prototype, "simplificationQueue") || Object.defineProperty(XI.prototype, "simplificationQueue", (0, wT.f)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(XI.prototype, "onBeforePhysicsObservable") || Object.defineProperty(XI.prototype, "onBeforePhysicsObservable", (0, wT.f)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(XI.prototype, "onAfterPhysicsObservable") || Object.defineProperty(XI.prototype, "onAfterPhysicsObservable", (0, wT.f)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(XI.prototype, "reflectionProbes") || Object.defineProperty(XI.prototype, "reflectionProbes", (0, wT.f)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(XI.prototype, "forceShowBoundingBoxes") || Object.defineProperty(XI.prototype, "forceShowBoundingBoxes", (0, wT.f)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(XI.prototype, "depthPeelingRenderer") || Object.defineProperty(XI.prototype, "depthPeelingRenderer", (0, wT.f)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(XI.prototype, "useOrderIndependentTransparency") || Object.defineProperty(XI.prototype, "useOrderIndependentTransparency", (0, wT.f)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(XI.prototype, "fluidRenderer") || Object.defineProperty(XI.prototype, "fluidRenderer", (0, wT.f)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(XI.prototype, "geometryBufferRenderer") || Object.defineProperty(XI.prototype, "geometryBufferRenderer", (0, wT.f)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(XI.prototype, "iblCdfGenerator") || Object.defineProperty(XI.prototype, "iblCdfGenerator", (0, wT.f)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(XI.prototype, "prePassRenderer") || Object.defineProperty(XI.prototype, "prePassRenderer", (0, wT.f)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(XI.prototype, "subSurfaceConfiguration") || Object.defineProperty(XI.prototype, "subSurfaceConfiguration", (0, wT.f)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(XI.prototype, "spriteManagers") || Object.defineProperty(XI.prototype, "spriteManagers", (0, wT.f)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(XI.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(XI.prototype, "onBeforeSpritesRenderingObservable", (0, wT.f)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(XI.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(XI.prototype, "onAfterSpritesRenderingObservable", (0, wT.f)("Scene", "onAfterSpritesRenderingObservable"))
  },
  38949: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT,
      f: () => zT
    });
    class iT {}
    iT.NAME_EFFECTLAYER = "EffectLayer", iT.NAME_LAYER = "Layer", iT.NAME_LENSFLARESYSTEM = "LensFlareSystem", iT.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", iT.NAME_PARTICLESYSTEM = "ParticleSystem", iT.NAME_GAMEPAD = "Gamepad", iT.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", iT.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", iT.NAME_PREPASSRENDERER = "PrePassRenderer", iT.NAME_DEPTHRENDERER = "DepthRenderer", iT.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", iT.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", iT.NAME_SPRITE = "Sprite", iT.NAME_SUBSURFACE = "SubSurface", iT.NAME_OUTLINERENDERER = "Outline", iT.NAME_PROCEDURALTEXTURE = "ProceduralTexture", iT.NAME_SHADOWGENERATOR = "ShadowGenerator", iT.NAME_OCTREE = "TiT", iT.NAME_PHYSICSENGINE = "PhysicsEngine", iT.NAME_AUDIO = "Audio", iT.NAME_FLUIDRENDERER = "FluidRenderer", iT.NAME_IBLCDFGENERATOR = "iblCDFGenerator", iT.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", iT.STEP_ISREADYFORMESH_EFFECTLAYER = 0, iT.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, iT.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, iT.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, iT.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, iT.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, iT.STEP_BEFORECAMERADRAW_PREPASS = 0, iT.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, iT.STEP_BEFORECAMERADRAW_LAYER = 2, iT.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, iT.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, iT.STEP_BEFORERENDERINGMESH_PREPASS = 0, iT.STEP_BEFORERENDERINGMESH_OUTLINE = 1, iT.STEP_AFTERRENDERINGMESH_PREPASS = 0, iT.STEP_AFTERRENDERINGMESH_OUTLINE = 1, iT.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, iT.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, iT.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, iT.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, iT.STEP_BEFORECLEAR_PREPASS = 1, iT.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, iT.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, iT.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, iT.STEP_AFTERCAMERADRAW_PREPASS = 0, iT.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, iT.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, iT.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, iT.STEP_AFTERCAMERADRAW_LAYER = 4, iT.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, iT.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, iT.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, iT.STEP_AFTERRENDER_AUDIO = 0, iT.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, iT.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, iT.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, iT.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, iT.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, iT.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, iT.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, iT.STEP_POINTERMOVE_SPRITE = 0, iT.STEP_POINTERDOWN_SPRITE = 0, iT.STEP_POINTERUP_SPRITE = 0;
    class zT extends Array {
      constructor(TT) {
        super(...TT)
      }
      static Create() {
        return Object.create(zT.prototype)
      }
      registerStep(TT, oT, IT) {
        let iT, zT = 0;
        for (; zT < this.length; zT++) {
          if (iT = this[zT].index, TT < iT) break
        }
        this.splice(zT, 0, {
          index: TT,
          component: oT,
          action: IT.bind(oT)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  38764: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => WT,
      e: () => XT,
      h: () => iT,
      j: () => zT,
      n: () => kT
    });

    function iT(TT, oT, IT, iT, zT, kT) {
      function WT(TT) {
        if (void 0 !== TT && "function" !== typeof TT) throw new TypeError("Function expected");
        return TT
      }
      for (var XT, BT = iT.kind, FT = "getter" === BT ? "get" : "setter" === BT ? "set" : "value", ST = !oT && TT ? iT.static ? TT : TT.prototype : null, DT = oT || (ST ? Object.getOwnPropertyDescriptor(ST, iT.name) : {}), LT = !1, xT = IT.length - 1; xT >= 0; xT--) {
        var cT = {};
        for (var KT in iT) cT[KT] = "access" === KT ? {} : iT[KT];
        for (var KT in iT.access) cT.access[KT] = iT.access[KT];
        cT.addInitializer = function(TT) {
          if (LT) throw new TypeError("Cannot add initializers after decoration has completed");
          kT.push(WT(TT || null))
        };
        var MT = (0, IT[xT])("accessor" === BT ? {
          get: DT.get,
          set: DT.set
        } : DT[FT], cT);
        if ("accessor" === BT) {
          if (void 0 === MT) continue;
          if (null === MT || "object" !== typeof MT) throw new TypeError("Object expected");
          (XT = WT(MT.get)) && (DT.get = XT), (XT = WT(MT.set)) && (DT.set = XT), (XT = WT(MT.init)) && zT.unshift(XT)
        } else(XT = WT(MT)) && ("field" === BT ? zT.unshift(XT) : DT[FT] = XT)
      }
      ST && Object.defineProperty(ST, iT.name, DT), LT = !0
    }

    function zT(TT, oT, IT) {
      for (var iT = arguments.length > 2, zT = 0; zT < oT.length; zT++) IT = iT ? oT[zT].call(TT, IT) : oT[zT].call(TT);
      return iT ? IT : void 0
    }

    function kT(TT, oT, IT) {
      return "symbol" === typeof oT && (oT = oT.description ? "[".concat(oT.description, "]") : ""), Object.defineProperty(TT, "name", {
        configurable: !0,
        value: IT ? "".concat(IT, " ", oT) : oT
      })
    }
    Object.create;
    Object.create;

    function WT(TT, oT, IT, iT) {
      if ("a" === IT && !iT) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof oT ? TT !== oT || !iT : !oT.has(TT)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === IT ? iT : "a" === IT ? iT.call(TT) : iT ? iT.value : oT.get(TT)
    }

    function XT(TT, oT, IT, iT, zT) {
      if ("m" === iT) throw new TypeError("Private method is not writable");
      if ("a" === iT && !zT) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof oT ? TT !== oT || !zT : !oT.has(TT)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === iT ? zT.call(TT, IT) : zT ? zT.value = IT : oT.set(TT, IT), IT
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);