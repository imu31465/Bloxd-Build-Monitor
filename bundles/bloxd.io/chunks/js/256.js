export const id = 256;
export const ids = [256];
export const modules = {
  40257: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => nT,
      d: () => ZT,
      e: () => kT,
      i: () => HT
    });
    var WT = mT(40016),
      zT = mT(38800),
      MT = mT(40171),
      gT = mT(40062);
    class nT {
      get bJ() {
        return this._isDisposed
      }
      constructor(TT, UT, mT) {
        let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          nT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          HT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          kT = arguments.length > 7 ? arguments[7] : void 0,
          jT = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, gT.d)(), TT && TT.KF ? this._engine = TT.KF().eB() : this._engine = TT, this._updatable = mT, this._instanced = nT, this._divisor = kT || 1, this._label = jT, UT instanceof WT.e ? (this._data = null, this._buffer = UT) : (this._data = UT, this._buffer = null), this.byteStride = HT ? zT : zT * Float32Array.BYTES_PER_ELEMENT, MT || this.create()
      }
      createVertexBuffer(TT, UT, mT, WT, zT) {
        let MT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          gT = arguments.length > 6 ? arguments[6] : void 0;
        const nT = MT ? UT : UT * Float32Array.BYTES_PER_ELEMENT,
          kT = WT ? MT ? WT : WT * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new HT(this._engine, this, TT, this._updatable, !0, kT, void 0 === zT ? this._instanced : zT, nT, mT, void 0, void 0, !0, this._divisor || gT)
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
          if (this._buffer.fl > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.fl, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.fl, void 0, this._label));
          zT.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(TT) {
        this.create(TT)
      }
      updateDirectly(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, TT, WT ? UT : UT * Float32Array.BYTES_PER_ELEMENT, mT ? mT * this.byteStride : void 0), this._data = 0 === UT && void 0 === mT ? TT : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class HT {
      get bJ() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(TT) {
        const UT = 0 != TT;
        this._instanceDivisor = TT, UT !== this._instanced && (this._instanced = UT, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const TT = this.getData();
        return TT ? Array.isArray(TT) ? TT.length / (this.byteStride / 4) - this.byteOffset / 4 : (TT.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(TT, UT, mT, WT, zT, gT, lT, LT, pT, BT) {
        let ZT, cT = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          vT = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          fT = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          qT = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = TT, "object" === typeof WT && null !== WT ? (ZT = WT.updatable ?? !1, zT = WT.postponeInternalCreation, gT = WT.stride, lT = WT.instanced, LT = WT.offset, pT = WT.size, BT = WT.type, cT = WT.normalized ?? !1, vT = WT.useBytes ?? !1, fT = WT.divisor ?? 1, qT = WT.takeBufferOwnership ?? !1, this._label = WT.label) : ZT = !!WT, UT instanceof nT ? (this._buffer = UT, this._ownsBuffer = qT) : (this._buffer = new nT(TT, UT, ZT, gT, zT, lT, vT, fT, this._label), this._ownsBuffer = !0), this.uniqueId = HT._Counter++, this._kind = mT, void 0 === BT) {
          const TT = this.getData();
          this.type = TT ? jT(TT) : HT.FLOAT
        } else this.type = BT;
        const iT = (0, MT.s)(this.type);
        vT ? (this._size = pT || (gT ? gT / iT : kT(mT)), this.byteStride = gT || this._buffer.byteStride || this._size * iT, this.byteOffset = LT || 0) : (this._size = pT || gT || kT(mT), this.byteStride = gT ? gT * iT : this._buffer.byteStride || this._size * iT, this.byteOffset = (LT || 0) * iT), this.normalized = cT, this._instanced = void 0 !== lT && lT, this._instanceDivisor = lT ? fT : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(TT) {
        switch (TT) {
          case HT.BYTE:
            return 0;
          case HT.UNSIGNED_BYTE:
            return 1;
          case HT.SHORT:
            return 2;
          case HT.UNSIGNED_SHORT:
            return 3;
          case HT.INT:
            return 4;
          case HT.UNSIGNED_INT:
            return 5;
          case HT.FLOAT:
            return 6;
          case HT.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${TT}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (HT._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(TT, UT) {
        const mT = this.getData();
        return mT ? (0, MT.p)(mT, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, TT, UT) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, MT.s)(this.type)
      }
      qmT() {
        return this.byteOffset / (0, MT.s)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, MT.s)(this.type) : this._size
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
      updateDirectly(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(TT, UT, void 0, mT), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(TT, UT) {
        (0, MT.l)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, TT, this.normalized, ((TT, mT) => {
          for (let WT = 0; WT < this._size; WT++) UT(TT[WT], mT + WT)
        }))
      }
      _alignBuffer() {}
    }

    function kT(TT) {
      switch (TT) {
        case HT.UVKind:
        case HT.UV2Kind:
        case HT.UV3Kind:
        case HT.UV4Kind:
        case HT.UV5Kind:
        case HT.UV6Kind:
          return 2;
        case HT.NormalKind:
        case HT.PositionKind:
          return 3;
        case HT.ColorKind:
        case HT.ColorInstanceKind:
        case HT.MatricesIndicesKind:
        case HT.MatricesIndicesExtraKind:
        case HT.MatricesWeightsKind:
        case HT.MatricesWeightsExtraKind:
        case HT.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + TT + "'")
      }
    }

    function jT(TT) {
      return TT instanceof Int8Array ? HT.BYTE : TT instanceof Uint8Array ? HT.UNSIGNED_BYTE : TT instanceof Int16Array ? HT.SHORT : TT instanceof Uint16Array ? HT.UNSIGNED_SHORT : TT instanceof Int32Array ? HT.INT : TT instanceof Uint32Array ? HT.UNSIGNED_INT : HT.FLOAT
    }

    function lT(TT) {
      return (0, MT.s)(TT)
    }

    function LT(TT, UT, mT, WT, zT, gT, nT, HT) {
      (0, MT.l)(TT, UT, mT, WT, zT, gT, nT, ((TT, UT) => {
        for (let mT = 0; mT < WT; mT++) HT(TT[mT], UT + mT)
      }))
    }

    function pT(TT, UT, mT, WT, zT, gT, nT, HT) {
      return (0, MT.p)(TT, UT, mT, WT, zT, gT, nT, HT)
    }
    HT._Counter = 0, HT.BYTE = 5120, HT.UNSIGNED_BYTE = 5121, HT.SHORT = 5122, HT.UNSIGNED_SHORT = 5123, HT.INT = 5124, HT.UNSIGNED_INT = 5125, HT.FLOAT = 5126, HT.HALF_FLOAT = 5131, HT.PositionKind = "position", HT.NormalKind = "normal", HT.TangentKind = "tangent", HT.UVKind = "uv", HT.UV2Kind = "uv2", HT.UV3Kind = "uv3", HT.UV4Kind = "uv4", HT.UV5Kind = "uv5", HT.UV6Kind = "uv6", HT.ColorKind = "color", HT.ColorInstanceKind = "instanceColor", HT.MatricesIndicesKind = "matricesIndices", HT.MatricesWeightsKind = "matricesWeights", HT.MatricesIndicesExtraKind = "matricesIndicesExtra", HT.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let BT = !1;

    function ZT() {
      BT || (BT = !0, HT.DeduceStride = kT, HT.GetDataType = jT, HT.GetTypeByteLength = lT, HT.ForEach = LT, HT.GetFloatData = pT)
    }
  },
  40016: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT
    });
    class WT {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.fl = 0, this.is32Bits = !1, this.uniqueId = WT._Counter++
      }
    }
    WT._Counter = 0
  },
  40251: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT
    });
    var WT = mT(37188),
      zT = mT(40257);
    class MT {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || UT && !this.pickedMesh.isVerticesDataPresent(zT.i.NormalKind)) return null;
        let mT, MT = this.pickedMesh.vWT();
        0 === MT?.length && (MT = null);
        const gT = WT.l.JB[0],
          nT = WT.l.JB[1],
          HT = WT.l.JB[2];
        if (UT) {
          const TT = this.pickedMesh.getVerticesData(zT.i.NormalKind);
          let UT = MT ? WT.p.FromArrayToRef(TT, 3 * MT[3 * this.faceId], gT) : gT.J9(TT[3 * this.faceId * 3], TT[3 * this.faceId * 3 + 1], TT[3 * this.faceId * 3 + 2]),
            kT = MT ? WT.p.FromArrayToRef(TT, 3 * MT[3 * this.faceId + 1], nT) : nT.J9(TT[3 * (3 * this.faceId + 1)], TT[3 * (3 * this.faceId + 1) + 1], TT[3 * (3 * this.faceId + 1) + 2]),
            jT = MT ? WT.p.FromArrayToRef(TT, 3 * MT[3 * this.faceId + 2], HT) : HT.J9(TT[3 * (3 * this.faceId + 2)], TT[3 * (3 * this.faceId + 2) + 1], TT[3 * (3 * this.faceId + 2) + 2]);
          UT = UT.scale(this.bu), kT = kT.scale(this.bv), jT = jT.scale(1 - this.bu - this.bv), mT = new WT.p(UT.x + kT.x + jT.x, UT.y + kT.y + jT.y, UT.z + kT.z + jT.z)
        } else {
          const TT = this.pickedMesh.getVerticesData(zT.i.PositionKind),
            UT = MT ? WT.p.FromArrayToRef(TT, 3 * MT[3 * this.faceId], gT) : gT.J9(TT[3 * this.faceId * 3], TT[3 * this.faceId * 3 + 1], TT[3 * this.faceId * 3 + 2]),
            kT = MT ? WT.p.FromArrayToRef(TT, 3 * MT[3 * this.faceId + 1], nT) : nT.J9(TT[3 * (3 * this.faceId + 1)], TT[3 * (3 * this.faceId + 1) + 1], TT[3 * (3 * this.faceId + 1) + 2]),
            jT = MT ? WT.p.FromArrayToRef(TT, 3 * MT[3 * this.faceId + 2], HT) : HT.J9(TT[3 * (3 * this.faceId + 2)], TT[3 * (3 * this.faceId + 2) + 1], TT[3 * (3 * this.faceId + 2) + 2]),
            lT = UT.subtract(kT),
            LT = jT.subtract(kT);
          mT = WT.p.Cross(lT, LT)
        }
        const kT = (TT, UT) => {
          if (-1 !== this.thinInstanceIndex) {
            const mT = TT._thinInstanceDataStorage.matrixData,
              zT = this.thinInstanceIndex << 4;
            if (mT && mT.length > zT) {
              const TT = WT.l.Matrix[0];
              WT.e.FromArrayToRef(mT, zT, TT), WT.p.TransformNormalToRef(UT, TT, UT)
            }
          }
          let mT = TT.getWorldMatrix();
          TT.nonUniformScaling && (WT.l.Matrix[0].Gw(mT), mT = WT.l.Matrix[0], mT.setTranslationFromFloats(0, 0, 0), mT.invert(), mT.transposeToRef(WT.l.Matrix[1]), mT = WT.l.Matrix[1]), WT.p.TransformNormalToRef(UT, mT, UT)
        };
        if (TT && kT(this.pickedMesh, mT), this.ray) {
          const UT = WT.l.JB[0].Gw(mT);
          TT || kT(this.pickedMesh, UT), WT.p.Dot(UT, this.ray.direction) > 0 && mT.negateInPlace()
        }
        return mT.normalize(), mT
      }
      getTextureCoordinates() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zT.i.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(TT)) return null;
        const UT = this.pickedMesh.vWT();
        if (!UT) return null;
        const mT = this.pickedMesh.getVerticesData(TT);
        if (!mT) return null;
        let MT = WT.o.FromArray(mT, 2 * UT[3 * this.faceId]),
          gT = WT.o.FromArray(mT, 2 * UT[3 * this.faceId + 1]),
          nT = WT.o.FromArray(mT, 2 * UT[3 * this.faceId + 2]);
        return MT = MT.scale(this.bu), gT = gT.scale(this.bv), nT = nT.scale(1 - this.bu - this.bv), new WT.o(MT.x + gT.x + nT.x, MT.y + gT.y + nT.y)
      }
    }
  },
  40062: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => MT
    });
    var WT = mT(39922);
    let zT = !1;

    function MT() {
      zT || (zT = !0, WT.ThinEngine.prototype.updateDynamicIndexBuffer = function(TT, UT) {
        let mT;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(TT), mT = TT.is32Bits ? UT instanceof Uint32Array ? UT : new Uint32Array(UT) : UT instanceof Uint16Array ? UT : new Uint16Array(UT), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, mT, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, WT.ThinEngine.prototype.updateDynamicVertexBuffer = function(TT, UT, mT, WT) {
        this.bindArrayBuffer(TT), void 0 === mT && (mT = 0);
        const zT = UT.byteLength || UT.length;
        void 0 === WT || WT >= zT && 0 === mT ? UT instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, mT, new Float32Array(UT)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, mT, UT) : UT instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, mT, new Float32Array(UT).subarray(0, WT / 4)) : (UT = ArrayBuffer.isView(UT) ? new Uint8Array(UT.buffer, UT.byteOffset, WT) : new Uint8Array(UT, 0, WT), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, mT, UT)), this._resetVertexBufferBinding()
      })
    }
  },
  40029: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT
    });
    class WT {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          UT = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = UT, !TT && (TT = UT.createTexture(), !TT)) throw new Error("Unable to create webGL texture");
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
  39982: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => fT
    });
    var WT = mT(37219),
      zT = mT(39926),
      MT = mT(37216),
      gT = mT(38800),
      nT = mT(37211),
      HT = mT(39986);
    class kT {
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
    class jT {
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
        const UT = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = UT ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = UT ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = UT ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = UT ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = UT ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = UT ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = UT ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = UT ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = UT ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = UT ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = UT ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = UT ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? TT.enable(TT.STENCIL_TEST) : TT.disable(TT.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (TT.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (TT.stencilFuncSeparate(TT.FRONT, this.func, this.funcRef, this.funcMask), TT.stencilFuncSeparate(TT.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (TT.stencilOpSeparate(TT.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), TT.stencilOpSeparate(TT.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class lT {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = lT.ALWAYS, this.opStencilFail = lT.KEEP, this.opDepthFail = lT.KEEP, this.opStencilDepthPass = lT.REPLACE, this.backFunc = lT.ALWAYS, this.backOpStencilFail = lT.KEEP, this.backOpDepthFail = lT.KEEP, this.backOpStencilDepthPass = lT.REPLACE
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
    lT.ALWAYS = 519, lT.KEEP = 7680, lT.REPLACE = 7681;
    var LT = mT(39994),
      pT = mT(39965),
      BT = mT(39913),
      ZT = mT(39946),
      cT = mT(39957);

    function vT(TT, UT) {
      if (UT) {
        const {
          requestAnimationFrame: mT
        } = UT;
        if ("function" === typeof mT) return mT(TT)
      }
      if ((0, ZT.j)()) {
        const {
          requestAnimationFrame: mT
        } = UT || window;
        if ("function" === typeof mT) return mT(TT)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(TT);
      return setTimeout(TT, 16)
    }
    class fT {
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
      get pWT() {
        return this._useReverseDepthBuffer
      }
      set pWT(TT) {
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
        if (TT) return this.isNDCHalfZRange ? TT.IS_NDC_HALF_ZRANGE = "" : delete TT.IS_NDC_HALF_ZRANGE, this.pWT ? TT.USE_REVERSE_DEPTHBUFFER = "" : delete TT.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? TT.USE_EXACT_SRGB_CONVERSIONS = "" : delete TT.USE_EXACT_SRGB_CONVERSIONS);
        {
          let TT = "";
          return this.isNDCHalfZRange && (TT += "#define IS_NDC_HALF_ZRANGE"), this.pWT && (TT && (TT += "\n"), TT += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (TT && (TT += "\n"), TT += "#define USE_EXACT_SRGB_CONVERSIONS"), TT
        }
      }
      _rebuildInternalTextures() {
        const TT = this._internalTexturesCache.slice();
        for (const UT of TT) UT._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const TT = this._renderTargetWrapperCache.slice();
        for (const UT of TT) UT.textures?.some((TT => 15 === TT.source)) || UT._rebuild()
      }
      _rebuildEffects() {
        for (const TT in this._compiledEffects) {
          const UT = this._compiledEffects[TT];
          UT._pipelineContext = null, UT._prepareEffect()
        }
        zT.b.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        gT.b.Warn(this.name + " context successfully restored."), this.OB.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(TT) {
        setTimeout((() => {
          this._clearEmptyResources();
          const UT = this._depthCullingState.depthTest,
            mT = this._depthCullingState.depthFunc,
            WT = this._depthCullingState.depthMask,
            zT = this._stencilState.stencilTest;
          TT(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = UT, this._depthCullingState.depthFunc = mT, this._depthCullingState.depthMask = WT, this._stencilState.stencilTest = zT, this._flagContextRestored()
        }), 0)
      }
      get bJ() {
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
            UT = [TT, TT, TT, TT, TT, TT];
          this._emptyCubeTexture = this.createRawCubeTexture(UT, 1, 5, 0, !1, !1, 1)
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
        const UT = this._activeRenderLoops.indexOf(TT);
        UT >= 0 && (this._activeRenderLoops.splice(UT, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: TT
            } = this.customAnimationFrameRequester;
            TT && TT(this.customAnimationFrameRequester.xB), delete this.customAnimationFrameRequester.xB
          }
        } else if (0 !== this._frameHandler) {
          const TT = this._frameHandler;
          if (this._frameHandler = 0, (0, ZT.j)()) {
            const {
              cancelAnimationFrame: UT
            } = this.getHostWindow() || window;
            if ("function" === typeof UT) return UT(TT)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(TT);
          return clearTimeout(TT)
        }
      }
      fY() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      qY() {
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
        const UT = TT - this._lastFrameTime;
        return this._lastFrameTime = TT, this._renderAccumulator += UT, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(TT) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(TT)) {
          let TT = !0;
          (this.bJ || !this.renderEvenInBackground && this._windowIsBackground) && (TT = !1), TT && (this.fY(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.qY())
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
      _queueNewFrame(TT, UT) {
        return vT(TT, UT)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.xB = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.xB) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
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
        this._depthCullingState.zOffset = this.pWT ? -TT : TT
      }
      getZOffset() {
        const TT = this._depthCullingState.zOffset;
        return this.pWT ? -TT : TT
      }
      setZOffsetUnits(TT) {
        this._depthCullingState.zOffsetUnits = this.pWT ? -TT : TT
      }
      getZOffsetUnits() {
        const TT = this._depthCullingState.zOffsetUnits;
        return this.pWT ? -TT : TT
      }
      getHostWindow() {
        return (0, ZT.j)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
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
        const UT = this._renderTargetWrapperCache.indexOf(TT); - 1 !== UT && this._renderTargetWrapperCache.splice(UT, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(TT, UT, mT) {
        const WT = UT || this.getRenderWidth(),
          zT = mT || this.getRenderHeight(),
          MT = TT.x || 0,
          gT = TT.y || 0;
        this._cachedViewport = TT, this._viewport(MT * WT, gT * zT, WT * TT.width, zT * TT.height)
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
      _createTextureBase(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          nT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          HT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          kT = arguments.length > 7 ? arguments[7] : void 0,
          jT = arguments.length > 8 ? arguments[8] : void 0,
          lT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          LT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          pT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          ZT = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          cT = arguments.length > 13 ? arguments[13] : void 0,
          vT = arguments.length > 14 ? arguments[14] : void 0,
          qT = arguments.length > 15 ? arguments[15] : void 0;
        const iT = "data:" === (TT = TT || "").substring(0, 5),
          bT = "blob:" === TT.substring(0, 5),
          OT = iT && -1 !== TT.indexOf(";base64,"),
          eT = LT || new BT.b(this, 1);
        eT !== LT && (eT.label = TT.substring(0, 60));
        const YT = TT;
        !this._transformTextureUrl || OT || LT || lT || (TT = this._transformTextureUrl(TT)), YT !== TT && (eT._originalUrl = YT);
        const JT = TT.lastIndexOf(".");
        let xT = ZT || (JT > -1 ? TT.substring(JT).toLowerCase() : "");
        xT.indexOf("?") > -1 && (xT = xT.split("?")[0]);
        const dT = fT.GetCompatibleTextureLoader(xT, cT);
        WT && WT.addPendingData(eT), eT.url = TT, eT.generateMipMaps = !UT, eT.samplingMode = zT, eT.invertY = mT, eT._useSRGBBuffer = this._getUseSRGBBuffer(!!qT, UT), this._doNotHandleContextLost || (eT._buffer = lT);
        let wT = null;
        nT && !LT && (wT = eT.onLoadedObservable.add(nT)), LT || this._internalTexturesCache.push(eT);
        const tT = (mT, LT) => {
          WT && WT.removePendingData(eT), TT === YT ? (wT && eT.onLoadedObservable.remove(wT), MT.c.UseFallbackTexture && TT !== MT.c.FallbackTexture && this._createTextureBase(MT.c.FallbackTexture, UT, eT.invertY, WT, zT, null, HT, kT, jT, lT, eT), mT = (mT || "Unknown error") + (MT.c.UseFallbackTexture ? " - Fallback texture was used" : ""), eT.onErrorObservable.notifyObservers({
            message: mT,
            exception: LT
          }), HT && HT(mT, LT)) : (gT.b.Warn(`Failed to load ${TT}, falling back to ${YT}`), this._createTextureBase(YT, UT, eT.invertY, WT, zT, nT, HT, kT, jT, lT, eT, pT, ZT, cT, vT, qT))
        };
        if (dT) {
          const UT = async TT => {
            (await dT).loadData(TT, eT, ((TT, UT, mT, MT, gT, nT) => {
              nT ? tT("TextureLoader failed to load data") : kT(eT, xT, WT, {
                width: TT,
                height: UT
              }, eT.invertY, !mT, MT, (() => (gT(), !1)), zT)
            }), vT)
          };
          if (lT) {
            const TT = async TT => {
              try {
                await UT(TT)
              } catch (mT) {
                tT("Failed to parse texture data", mT)
              }
            };
            lT instanceof ArrayBuffer ? TT(new Uint8Array(lT)) : ArrayBuffer.isView(lT) ? TT(lT) : HT && HT("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(TT, (async TT => {
            try {
              await UT(new Uint8Array(TT))
            } catch (mT) {
              tT("Failed to parse texture data", mT)
            }
          }), void 0, WT ? WT.offlineProvider : void 0, !0, ((TT, UT) => {
            tT("Unable to load " + (TT && TT.responseURL, UT))
          }))
        } else {
          const mT = TT => {
            bT && !this._doNotHandleContextLost && (eT._buffer = TT), kT(eT, xT, WT, TT, eT.invertY, UT, !1, jT, zT)
          };
          !iT || OT ? lT && ("string" === typeof lT.decoding || lT.close) ? mT(lT) : fT._FileToolsLoadImage(TT || "", mT, tT, WT ? WT.offlineProvider : null, cT, eT.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof lT || lT instanceof ArrayBuffer || ArrayBuffer.isView(lT) || lT instanceof Blob ? fT._FileToolsLoadImage(lT, mT, tT, WT ? WT.offlineProvider : null, cT, eT.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : lT && mT(lT)
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
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, ZT.d)() ? document : null
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
      constructor(TT, UT, mT) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new kT, this._stencilStateComposer = new jT, this._stencilState = new lT, this._alphaState = new LT.b(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new WT.d, this.onCanvasFocusObservable = new WT.d, this.onNewSceneAddedObservable = new WT.d, this.onResizeObservable = new WT.d, this.onCanvasPointerOutObservable = new WT.d, this.onEffectErrorObservable = new WT.d, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new WT.d, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = TT => this._renderLoop(TT), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new WT.d, this.onAfterShaderCompilationObservable = new WT.d, this.onBeginFrameObservable = new WT.d, this.onEndFrameObservable = new WT.d, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new WT.d, this.OB = new WT.d, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.SF = new WT.d, this.onReleaseEffectsObservable = new WT.d, MT.c.Instances.push(this), this.startTime = HT.c.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, nT.c.SetMatrixPrecision(!!UT.useLargeWorldRendering || !!UT.useHighPrecisionMatrix), (0, ZT.f)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), UT.antialias = TT ?? UT.antialias, UT.deterministicLockstep = UT.deterministicLockstep ?? !1, UT.lockstepMaxSteps = UT.lockstepMaxSteps ?? 4, UT.timeStep = UT.timeStep ?? 1 / 60, UT.stencil = UT.stencil ?? !0, this._audioContext = UT.audioEngineOptions?.audioContext ?? null, this._audioDestination = UT.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = UT.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!UT.doNotHandleContextLost, this._isStencilEnable = !!UT.stencil, this.useExactSrgbConversions = UT.useExactSrgbConversions ?? !1, this.canvasTabIndex = UT.canvasTabIndex ?? this.canvasTabIndex;
        const zT = (0, ZT.j)() && window.devicePixelRatio || 1,
          gT = UT.limitDeviceRatio || zT;
        mT = mT || UT.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = mT, this._hardwareScalingLevel = mT ? 1 / Math.min(gT, zT) : 1, this._lastDevicePixelRatio = zT, this._creationOptions = UT
      }
      resize() {
        let TT, UT, mT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const TT = (0, ZT.j)() && window.devicePixelRatio || 1,
            UT = this._lastDevicePixelRatio / TT;
          this._lastDevicePixelRatio = TT, this._hardwareScalingLevel *= UT
        }
        if ((0, ZT.j)() && (0, ZT.d)())
          if (this._renderingCanvas) {
            const mT = this._renderingCanvas.getBoundingClientRect?.();
            TT = this._renderingCanvas.clientWidth || mT?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, UT = this._renderingCanvas.clientHeight || mT?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else TT = window.innerWidth, UT = window.innerHeight;
        else TT = this._renderingCanvas ? this._renderingCanvas.width : 100, UT = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(TT / this._hardwareScalingLevel, UT / this._hardwareScalingLevel, mT)
      }
      setSize(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (TT |= 0, UT |= 0, !mT && this._renderingCanvas.width === TT && this._renderingCanvas.height === UT) return !1;
        if (this._renderingCanvas.width = TT, this._renderingCanvas.height = UT, this.scenes) {
          for (let TT = 0; TT < this.scenes.length; TT++) {
            const UT = this.scenes[TT];
            for (let TT = 0; TT < UT.cameras.length; TT++) {
              UT.cameras[TT]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT, jT, lT) {
        throw (0, pT.k)("engine.rawTexture")
      }
      createRawCubeTexture(TT, UT, mT, WT, zT, MT, gT, nT) {
        throw (0, pT.k)("engine.rawTexture")
      }
      createRawTexture3D(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT, jT) {
        throw (0, pT.k)("engine.rawTexture")
      }
      createRawTexture2DArray(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT, jT, lT) {
        throw (0, pT.k)("engine.rawTexture")
      }
      _sharedInit(TT) {
        this._renderingCanvas = TT
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const TT = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== TT.indexOf("Mobile") || -1 !== TT.indexOf("Mac") && (0, ZT.d)() && "ontouchend" in document
        }, this._checkForMobile(), (0, ZT.j)() && window.addEventListener("resize", this._checkForMobile))
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
      _createImageBitmapFromSource(TT, UT) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(TT, UT) {
        return createImageBitmap(TT, UT)
      }
      resizeImageBitmap(TT, UT, mT) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(TT) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(TT, UT) {
        if ("undefined" === typeof document) return new OffscreenCanvas(TT, UT);
        const mT = document.createElement("canvas");
        return mT.width = TT, mT.height = UT, mT
      }
      createCanvas(TT, UT) {
        return fT._CreateCanvas(TT, UT)
      }
      static _FileToolsLoadImage(TT, UT, mT, WT, zT, MT, gT) {
        if (!cT.d.loadImage) throw (0, pT.k)("FileTools");
        return cT.d.loadImage(TT, UT, mT, WT, zT, MT, gT)
      }
      _loadFile(TT, UT, mT, WT, zT, MT) {
        const gT = (0, cT.m)(TT, UT, mT, WT, zT, MT);
        return this._activeRequests.push(gT), gT.onCompleteObservable.add((() => {
          const TT = this._activeRequests.indexOf(gT); - 1 !== TT && this._activeRequests.splice(TT, 1)
        })), gT
      }
      static _FileToolsLoadFile(TT, UT, mT, WT, zT, MT) {
        if (cT.d.loadFile) return cT.d.loadFile(TT, UT, mT, WT, zT, MT);
        throw (0, pT.k)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), zT.b.ResetCache();
        for (const UT of this._activeRequests) UT.abort();
        this._boundRenderFunction = null, this.SF.notifyObservers(this), this.SF.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, ZT.j)() && window.removeEventListener("resize", this._checkForMobile);
        const TT = MT.c.Instances.indexOf(this);
        TT >= 0 && MT.c.Instances.splice(TT, 1), MT.c.Instances.length || (MT.c.OnEnginesDisposedObservable.notifyObservers(this), MT.c.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(TT) {
        throw (0, pT.k)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(TT, UT) {
        for (let mT = 0; mT < MT.c.Instances.length; mT++) {
          const WT = MT.c.Instances[mT];
          for (let mT = 0; mT < WT.scenes.length; mT++) WT.scenes[mT].markAllMaterialsAsDirty(TT, UT)
        }
      }
      static GetCompatibleTextureLoader(TT, UT) {
        return null
      }
    }
    fT._RenderPassIdCounter = 0, fT._RescalePostProcessFactory = null, fT.CollisionsEpsilon = .001, fT.QueueNewFrame = vT
  },
  39934: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT
    });
    class WT {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? WT.ShadersRepository : WT.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? WT.ShadersStore : WT.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? WT.IncludesShadersStore : WT.IncludesShadersStoreWGSL
      }
    }
    WT.ShadersRepository = "src/Shaders/", WT.ShadersStore = {}, WT.IncludesShadersStore = {}, WT.ShadersRepositoryWGSL = "src/ShadersWGSL/", WT.ShadersStoreWGSL = {}, WT.IncludesShadersStoreWGSL = {}
  },
  39949: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => LT,
      f: () => qT,
      g: () => BT,
      h: () => pT,
      l: () => ZT,
      o: () => fT,
      q: () => lT,
      u: () => kT,
      w: () => jT,
      y: () => HT,
      A: () => nT
    });
    class WT {
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
      _fillEffectInformation(TT, UT, mT, WT, zT, MT, gT, nT) {
        const HT = this.engine;
        if (HT.supportsUniformBuffers)
          for (const jT in UT) TT.bindUniformBlock(jT, UT[jT]);
        let kT;
        for (this.engine.getUniforms(this, mT).forEach(((TT, UT) => {
            WT[mT[UT]] = TT
          })), this._uniforms = WT, kT = 0; kT < zT.length; kT++) {
          null == TT.getUniform(zT[kT]) && (zT.splice(kT, 1), kT--)
        }
        zT.forEach(((TT, UT) => {
          MT[TT] = UT
        }));
        for (const jT of HT.getAttributes(this, gT)) nT.push(jT)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(TT, UT) {
        const mT = this._valueCache[TT],
          WT = UT.updateFlag;
        if (void 0 !== mT && mT === WT) return !1;
        const zT = UT.cWT();
        let MT = this._matrixValueCache[TT];
        if (void 0 !== mT && null !== mT && void 0 !== MT) {
          let UT = !0;
          for (let TT = 15; TT >= 0; TT--)
            if (MT[TT] !== zT[TT]) {
              UT = !1;
              break
            } if (UT) return this._valueCache[TT] = WT, !1
        }
        return void 0 === MT && (MT = this._matrixValueCache[TT] = new Float32Array(16)), MT.set(zT), this._valueCache[TT] = WT, !0
      }
      _cacheFloat2(TT, UT, mT) {
        let WT = this._valueCache[TT];
        if (!WT || 2 !== WT.length) return WT = [UT, mT], this._valueCache[TT] = WT, !0;
        let zT = !1;
        return WT[0] !== UT && (WT[0] = UT, zT = !0), WT[1] !== mT && (WT[1] = mT, zT = !0), zT
      }
      _cacheFloat3(TT, UT, mT, WT) {
        let zT = this._valueCache[TT];
        if (!zT || 3 !== zT.length) return zT = [UT, mT, WT], this._valueCache[TT] = zT, !0;
        let MT = !1;
        return zT[0] !== UT && (zT[0] = UT, MT = !0), zT[1] !== mT && (zT[1] = mT, MT = !0), zT[2] !== WT && (zT[2] = WT, MT = !0), MT
      }
      _cacheFloat4(TT, UT, mT, WT, zT) {
        let MT = this._valueCache[TT];
        if (!MT || 4 !== MT.length) return MT = [UT, mT, WT, zT], this._valueCache[TT] = MT, !0;
        let gT = !1;
        return MT[0] !== UT && (MT[0] = UT, gT = !0), MT[1] !== mT && (MT[1] = mT, gT = !0), MT[2] !== WT && (MT[2] = WT, gT = !0), MT[3] !== zT && (MT[3] = zT, gT = !0), gT
      }
      setInt(TT, UT) {
        const mT = this._valueCache[TT];
        void 0 !== mT && mT === UT || this.engine.setInt(this._uniforms[TT], UT) && (this._valueCache[TT] = UT)
      }
      setInt2(TT, UT, mT) {
        this._cacheFloat2(TT, UT, mT) && (this.engine.setInt2(this._uniforms[TT], UT, mT) || (this._valueCache[TT] = null))
      }
      setInt3(TT, UT, mT, WT) {
        this._cacheFloat3(TT, UT, mT, WT) && (this.engine.setInt3(this._uniforms[TT], UT, mT, WT) || (this._valueCache[TT] = null))
      }
      setInt4(TT, UT, mT, WT, zT) {
        this._cacheFloat4(TT, UT, mT, WT, zT) && (this.engine.setInt4(this._uniforms[TT], UT, mT, WT, zT) || (this._valueCache[TT] = null))
      }
      setIntArray(TT, UT) {
        this._valueCache[TT] = null, this.engine.setIntArray(this._uniforms[TT], UT)
      }
      setIntArray2(TT, UT) {
        this._valueCache[TT] = null, this.engine.setIntArray2(this._uniforms[TT], UT)
      }
      setIntArray3(TT, UT) {
        this._valueCache[TT] = null, this.engine.setIntArray3(this._uniforms[TT], UT)
      }
      setIntArray4(TT, UT) {
        this._valueCache[TT] = null, this.engine.setIntArray4(this._uniforms[TT], UT)
      }
      setUInt(TT, UT) {
        const mT = this._valueCache[TT];
        void 0 !== mT && mT === UT || this.engine.setUInt(this._uniforms[TT], UT) && (this._valueCache[TT] = UT)
      }
      setUInt2(TT, UT, mT) {
        this._cacheFloat2(TT, UT, mT) && (this.engine.setUInt2(this._uniforms[TT], UT, mT) || (this._valueCache[TT] = null))
      }
      setUInt3(TT, UT, mT, WT) {
        this._cacheFloat3(TT, UT, mT, WT) && (this.engine.setUInt3(this._uniforms[TT], UT, mT, WT) || (this._valueCache[TT] = null))
      }
      setUInt4(TT, UT, mT, WT, zT) {
        this._cacheFloat4(TT, UT, mT, WT, zT) && (this.engine.setUInt4(this._uniforms[TT], UT, mT, WT, zT) || (this._valueCache[TT] = null))
      }
      setUIntArray(TT, UT) {
        this._valueCache[TT] = null, this.engine.setUIntArray(this._uniforms[TT], UT)
      }
      setUIntArray2(TT, UT) {
        this._valueCache[TT] = null, this.engine.setUIntArray2(this._uniforms[TT], UT)
      }
      setUIntArray3(TT, UT) {
        this._valueCache[TT] = null, this.engine.setUIntArray3(this._uniforms[TT], UT)
      }
      setUIntArray4(TT, UT) {
        this._valueCache[TT] = null, this.engine.setUIntArray4(this._uniforms[TT], UT)
      }
      setArray(TT, UT) {
        this._valueCache[TT] = null, this.engine.setArray(this._uniforms[TT], UT)
      }
      setArray2(TT, UT) {
        this._valueCache[TT] = null, this.engine.setArray2(this._uniforms[TT], UT)
      }
      setArray3(TT, UT) {
        this._valueCache[TT] = null, this.engine.setArray3(this._uniforms[TT], UT)
      }
      setArray4(TT, UT) {
        this._valueCache[TT] = null, this.engine.setArray4(this._uniforms[TT], UT)
      }
      setMatrices(TT, UT) {
        UT && (this._valueCache[TT] = null, this.engine.setMatrices(this._uniforms[TT], UT))
      }
      setMatrix(TT, UT) {
        this._cacheMatrix(TT, UT) && (this.engine.setMatrices(this._uniforms[TT], UT.cWT()) || (this._valueCache[TT] = null))
      }
      setMatrix3x3(TT, UT) {
        this._valueCache[TT] = null, this.engine.setMatrix3x3(this._uniforms[TT], UT)
      }
      setMatrix2x2(TT, UT) {
        this._valueCache[TT] = null, this.engine.setMatrix2x2(this._uniforms[TT], UT)
      }
      setFloat(TT, UT) {
        const mT = this._valueCache[TT];
        void 0 !== mT && mT === UT || this.engine.setFloat(this._uniforms[TT], UT) && (this._valueCache[TT] = UT)
      }
      setVector2(TT, UT) {
        this._cacheFloat2(TT, UT.x, UT.y) && (this.engine.setFloat2(this._uniforms[TT], UT.x, UT.y) || (this._valueCache[TT] = null))
      }
      setFloat2(TT, UT, mT) {
        this._cacheFloat2(TT, UT, mT) && (this.engine.setFloat2(this._uniforms[TT], UT, mT) || (this._valueCache[TT] = null))
      }
      setVector3(TT, UT) {
        this._cacheFloat3(TT, UT.x, UT.y, UT.z) && (this.engine.setFloat3(this._uniforms[TT], UT.x, UT.y, UT.z) || (this._valueCache[TT] = null))
      }
      setFloat3(TT, UT, mT, WT) {
        this._cacheFloat3(TT, UT, mT, WT) && (this.engine.setFloat3(this._uniforms[TT], UT, mT, WT) || (this._valueCache[TT] = null))
      }
      setVector4(TT, UT) {
        this._cacheFloat4(TT, UT.x, UT.y, UT.z, UT.w) && (this.engine.setFloat4(this._uniforms[TT], UT.x, UT.y, UT.z, UT.w) || (this._valueCache[TT] = null))
      }
      setQuaternion(TT, UT) {
        this._cacheFloat4(TT, UT.x, UT.y, UT.z, UT.w) && (this.engine.setFloat4(this._uniforms[TT], UT.x, UT.y, UT.z, UT.w) || (this._valueCache[TT] = null))
      }
      setFloat4(TT, UT, mT, WT, zT) {
        this._cacheFloat4(TT, UT, mT, WT, zT) && (this.engine.setFloat4(this._uniforms[TT], UT, mT, WT, zT) || (this._valueCache[TT] = null))
      }
      setColor3(TT, UT) {
        this._cacheFloat3(TT, UT.r, UT.g, UT.b) && (this.engine.setFloat3(this._uniforms[TT], UT.r, UT.g, UT.b) || (this._valueCache[TT] = null))
      }
      setColor4(TT, UT, mT) {
        this._cacheFloat4(TT, UT.r, UT.g, UT.b, mT) && (this.engine.setFloat4(this._uniforms[TT], UT.r, UT.g, UT.b, mT) || (this._valueCache[TT] = null))
      }
      setDirectColor4(TT, UT) {
        this._cacheFloat4(TT, UT.r, UT.g, UT.b, UT.a) && (this.engine.setFloat4(this._uniforms[TT], UT.r, UT.g, UT.b, UT.a) || (this._valueCache[TT] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var zT = mT(39957);
    const MT = new WeakMap,
      gT = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function nT(TT) {
      let UT = MT.get(TT);
      if (!UT) {
        if (!TT) return gT;
        UT = {
          _webGLVersion: TT.TEXTURE_BINDING_3D ? 2 : 1,
          _context: TT,
          parallelShaderCompile: TT.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, MT.set(TT, UT)
      }
      return UT
    }

    function HT(TT) {
      MT.delete(TT)
    }

    function kT(TT, UT, mT, WT, zT, MT) {
      const gT = nT(WT);
      MT || (MT = gT._createShaderProgramInjection ?? LT);
      return MT(TT, vT(UT, "vertex", WT, gT._contextWasLost), vT(mT, "fragment", WT, gT._contextWasLost), WT, zT, gT.validateShaderPrograms)
    }

    function jT(TT, UT, mT, WT, zT) {
      let MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        gT = arguments.length > 6 ? arguments[6] : void 0;
      const HT = nT(zT);
      gT || (gT = HT._createShaderProgramInjection ?? LT);
      const kT = HT._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return gT(TT, cT(UT, "vertex", WT, kT, zT, HT._contextWasLost), cT(mT, "fragment", WT, kT, zT, HT._contextWasLost), zT, MT, HT.validateShaderPrograms)
    }

    function lT(TT, UT) {
      const mT = new WT,
        zT = nT(TT);
      return zT.parallelShaderCompile && !zT.disableParallelShaderCompile && (mT.isParallelCompiled = !0), mT.context = zT._context, mT
    }

    function LT(TT, UT, mT, WT) {
      let zT = arguments.length > 5 ? arguments[5] : void 0;
      const MT = WT.createProgram();
      if (TT.program = MT, !MT) throw new Error("Unable to create program");
      return WT.attachShader(MT, UT), WT.attachShader(MT, mT), WT.linkProgram(MT), TT.context = WT, TT.vertexShader = UT, TT.fragmentShader = mT, TT.isParallelCompiled || BT(TT, WT, zT), MT
    }

    function pT(TT, UT, mT) {
      const WT = TT;
      if (WT._isDisposed) return !1;
      const zT = nT(UT);
      return !!(zT && zT.parallelShaderCompile && zT.parallelShaderCompile.COMPLETION_STATUS_KHR && WT.program && UT.getProgramParameter(WT.program, zT.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (BT(WT, UT, mT), !0)
    }

    function BT(TT, UT, mT) {
      const WT = TT.context,
        zT = TT.vertexShader,
        MT = TT.fragmentShader,
        gT = TT.program;
      if (!WT.getProgramParameter(gT, WT.LINK_STATUS)) {
        if (!UT.getShaderParameter(zT, UT.COMPILE_STATUS)) {
          const mT = UT.getShaderInfoLog(zT);
          if (mT) throw TT.vertexCompilationError = mT, new Error("VERTEX SHADER " + mT)
        }
        if (!UT.getShaderParameter(MT, UT.COMPILE_STATUS)) {
          const mT = UT.getShaderInfoLog(MT);
          if (mT) throw TT.fragmentCompilationError = mT, new Error("FRAGMENT SHADER " + mT)
        }
        const mT = WT.getProgramInfoLog(gT);
        if (mT) throw TT.programLinkError = mT, new Error(mT)
      }
      if (mT) {
        WT.validateProgram(gT);
        if (!WT.getProgramParameter(gT, WT.VALIDATE_STATUS)) {
          const UT = WT.getProgramInfoLog(gT);
          if (UT) throw TT.programValidationError = UT, new Error(UT)
        }
      }
      WT.deleteShader(zT), WT.deleteShader(MT), TT.vertexShader = void 0, TT.fragmentShader = void 0, TT.onCompiled && (TT.onCompiled(), TT.onCompiled = void 0)
    }

    function ZT(TT, UT, mT, WT, zT, MT, gT, HT, lT) {
      let LT = arguments.length > 10 ? arguments[10] : void 0,
        pT = arguments.length > 11 ? arguments[11] : void 0,
        BT = arguments.length > 12 ? arguments[12] : void 0;
      const ZT = nT(TT.context);
      pT || (pT = ZT.createRawShaderProgramInjection ?? kT), BT || (BT = ZT.createShaderProgramInjection ?? jT);
      const cT = TT;
      cT.program = WT ? pT(cT, UT, mT, cT.context, lT) : BT(cT, UT, mT, HT, cT.context, lT), cT.program.__SPECTOR_rebuildProgram = gT, LT()
    }

    function cT(TT, UT, mT, WT, MT, gT) {
      return vT((0, zT.g)(TT, mT, WT), UT, MT, gT)
    }

    function vT(TT, UT, mT, WT) {
      const zT = mT.createShader("vertex" === UT ? mT.VERTEX_SHADER : mT.FRAGMENT_SHADER);
      if (!zT) {
        let TT, zT = mT.NO_ERROR;
        for (;
          (TT = mT.getError()) !== mT.NO_ERROR;) zT = TT;
        throw new Error(`Something went wrong while creating a gl ${UT} shader object. gl error=${zT}, gl isContextLost=${mT.isContextLost()}, _contextWasLost=${WT}`)
      }
      return mT.shaderSource(zT, TT), mT.compileShader(zT), zT
    }

    function fT(TT, UT) {
      UT.useProgram(TT)
    }

    function qT(TT, UT) {
      const mT = TT;
      if (!mT.isParallelCompiled) return void UT(TT);
      const WT = mT.onCompiled;
      mT.onCompiled = () => {
        WT?.(), UT(TT)
      }
    }
  },
  39922: (TT, UT, mT) => {
    mT.d(UT, {
      ThinEngine: () => bT
    });
    var WT = mT(39926),
      zT = mT(39949),
      MT = mT(39982),
      gT = mT(40001),
      nT = mT(38800),
      HT = mT(39946);
    class kT {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(TT, UT, mT, WT, zT) {
        if (zT.drawBuffersExtensionDisabled) {
          const UT = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          TT = TT.replace(UT, "")
        }
        return TT
      }
    }
    const jT = /(flat\s)?\s*varying\s*.*/;
    class lT {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(TT) {
        return TT.replace("attribute", "in")
      }
      varyingCheck(TT, UT) {
        return jT.test(TT)
      }
      varyingProcessor(TT, UT) {
        return TT.replace("varying", UT ? "in" : "out")
      }
      postProcessor(TT, UT, mT) {
        const WT = -1 !== TT.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (TT = (TT = TT.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), mT) {
          const mT = -1 !== TT.search(/layout *\(location *= *0\) *out/g),
            zT = -1 !== UT.indexOf("#define DUAL_SOURCE_BLENDING"),
            MT = zT ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          zT && (TT = "#extension GL_EXT_blend_func_extended : require\n" + TT), TT = (TT = (TT = (TT = (TT = (TT = (TT = TT.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (WT || mT ? "" : MT) + "void main(")
        } else {
          UT.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (TT = "invariant gl_Position;\n" + TT);
          if (-1 !== UT.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + TT
        }
        return TT
      }
    }
    var LT = mT(40007),
      pT = mT(40022),
      BT = mT(40029),
      ZT = mT(39913),
      cT = mT(39957),
      vT = mT(39938),
      fT = mT(40036),
      qT = mT(39994);
    class iT {}
    class bT extends MT.c {
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
        return WT.b.ShadersRepository
      }
      static set ShadersRepository(TT) {
        WT.b.ShadersRepository = TT
      }
      get supportsUniformBuffers() {
        return this.TZ > 1 && !this.disableUniformBuffers
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
      constructor(TT, UT, mT, WT) {
        if (mT = mT || {}, super(UT ?? mT.antialias, mT, WT), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !TT) return;
        let MT;
        if (TT.getContext) {
          if (MT = TT, void 0 === mT.preserveDrawingBuffer && (mT.preserveDrawingBuffer = !1), void 0 === mT.xrCompatible && (mT.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const TT = navigator.userAgent;
            for (const UT of bT.ExceptionList) {
              const WT = UT.key,
                zT = UT.targets;
              if (new RegExp(WT).test(TT)) {
                if (UT.capture && UT.captureConstraint) {
                  const mT = UT.capture,
                    WT = UT.captureConstraint,
                    zT = new RegExp(mT).exec(TT);
                  if (zT && zT.length > 0) {
                    if (parseInt(zT[zT.length - 1]) >= WT) continue
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
                    mT.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, zT.y)(this._gl)
            } : (this._onContextLost = TT => {
              TT.preventDefault(), this._contextWasLost = !0, (0, zT.y)(this._gl), nT.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, MT.addEventListener("webglcontextrestored", this._onContextRestored, !1), mT.powerPreference = mT.powerPreference || "high-performance"), MT.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (mT.xrCompatible = !1), !mT.disableWebGL2Support) try {
            this._gl = MT.getContext("webgl2", mT) || MT.getContext("experimental-webgl2", mT), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (jT) {}
          if (!this._gl) {
            if (!MT) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = MT.getContext("webgl", mT) || MT.getContext("experimental-webgl", mT)
            } catch (jT) {
              throw new Error("WebGL not supported", {
                cause: jT
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = TT, MT = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const UT = this._gl.getContextAttributes();
          UT && (mT.stencil = UT.stencil)
        }
        this._sharedInit(MT), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== mT.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = mT.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let zT = 0; zT < this._caps.maxVertexAttribs; zT++) this._currentBufferPointers[zT] = new iT;
        this._shaderProcessor = this.TZ > 1 ? new lT : new kT;
        const gT = `Babylon.js v${bT.Version}`;
        nT.b.Log(gT + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", gT);
        const HT = (0, zT.A)(this._gl);
        HT.validateShaderPrograms = this.validateShaderPrograms, HT.parallelShaderCompile = this._caps.parallelShaderCompile
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
        const UT = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!UT, this._alphaState = new qT.b(this._caps.blendParametersPerTarget), UT && (this._gl.blendEquationSeparateIndexed = UT.blendEquationSeparateiOES.bind(UT), this._gl.blendEquationIndexed = UT.blendEquationiOES.bind(UT), this._gl.blendFuncSeparateIndexed = UT.blendFuncSeparateiOES.bind(UT), this._gl.blendFuncIndexed = UT.blendFunciOES.bind(UT), this._gl.colorMaskIndexed = UT.colorMaskiOES.bind(UT), this._gl.disableIndexed = UT.disableiOES.bind(UT), this._gl.enableIndexed = UT.enableiOES.bind(UT)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const TT = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== TT) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = TT.drawBuffersWEBGL.bind(TT), this._caps.maxDrawBuffers = this._gl.getParameter(TT.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let UT = 0; UT < 16; UT++) this._gl["COLOR_ATTACHMENT" + UT + "_WEBGL"] = TT["COLOR_ATTACHMENT" + UT + "_WEBGL"]
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
            UT = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (TT && UT && (this._caps.highPrecisionShaderSupported = 0 !== TT.precision && 0 !== UT.precision, this._caps.shaderFloatPrecision = Math.min(TT.precision, UT.precision)), !this._shouldUseHighPrecisionShader) {
            const TT = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              UT = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            TT && UT && (this._caps.shaderFloatPrecision = Math.min(TT.precision, UT.precision))
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
        for (let mT = 0; mT < this._maxSimultaneousTextures; mT++) this._nextFreeTextureSlots.push(mT);
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
      get TZ() {
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
      clear(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const MT = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = MT;
        let gT = 0;
        if (UT && TT) {
          let UT = !0;
          if (this._currentRenderTarget) {
            const mT = this._currentRenderTarget.texture?.format;
            if (void 0 !== mT && (0, fT.k)(mT)) {
              const mT = this._currentRenderTarget.texture?.type;
              void 0 !== mT && (0, fT.m)(mT) ? (bT._TempClearColorUint32[0] = 255 * TT.r, bT._TempClearColorUint32[1] = 255 * TT.g, bT._TempClearColorUint32[2] = 255 * TT.b, bT._TempClearColorUint32[3] = 255 * TT.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, bT._TempClearColorUint32), UT = !1) : (bT._TempClearColorInt32[0] = 255 * TT.r, bT._TempClearColorInt32[1] = 255 * TT.g, bT._TempClearColorInt32[2] = 255 * TT.b, bT._TempClearColorInt32[3] = 255 * TT.a, this._gl.clearBufferiv(this._gl.COLOR, 0, bT._TempClearColorInt32), UT = !1)
            }
          }
          UT && (this._gl.clearColor(TT.r, TT.g, TT.b, void 0 !== TT.a ? TT.a : 1), gT |= this._gl.COLOR_BUFFER_BIT)
        }
        mT && (this.pWT ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), gT |= this._gl.DEPTH_BUFFER_BIT), WT && (this._gl.clearStencil(zT), gT |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(gT)
      }
      _clearColorAttachment(TT, UT, mT, WT) {
        if ((0, fT.k)(mT)) {
          const mT = (0, fT.m)(WT),
            zT = mT ? bT._TempClearColorUint32 : bT._TempClearColorInt32;
          return zT[0] = UT.r, zT[1] = UT.g, zT[2] = UT.b, zT[3] = UT.a, void(mT ? this._gl.clearBufferuiv(this._gl.COLOR, TT, zT) : this._gl.clearBufferiv(this._gl.COLOR, TT, zT))
        }
        bT._TempClearColorFloat32[0] = UT.r, bT._TempClearColorFloat32[1] = UT.g, bT._TempClearColorFloat32[2] = UT.b, bT._TempClearColorFloat32[3] = UT.a, this._gl.clearBufferfv(this._gl.COLOR, TT, bT._TempClearColorFloat32)
      }
      _viewport(TT, UT, mT, WT) {
        TT === this._viewportCached.x && UT === this._viewportCached.y && mT === this._viewportCached.z && WT === this._viewportCached.w || (this._viewportCached.x = TT, this._viewportCached.y = UT, this._viewportCached.z = mT, this._viewportCached.w = WT, this._gl.viewport(TT, UT, mT, WT))
      }
      qY() {
        super.qY(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 ? arguments[2] : void 0,
          WT = arguments.length > 3 ? arguments[3] : void 0,
          zT = arguments.length > 4 ? arguments[4] : void 0,
          MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          gT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const HT = TT;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = TT, this._integerMRTAttachmentsMask = !TT.isMulti && TT.texture && (0, fT.k)(TT.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(HT._framebuffer);
        const kT = this._gl;
        TT.isMulti || (TT.is2DArray || TT.is3D ? (kT.framebufferTextureLayer(kT.FRAMEBUFFER, kT.COLOR_ATTACHMENT0, TT.texture._hardwareTexture?.underlyingResource, MT, gT), HT._currentLOD = MT) : TT.isCube ? kT.framebufferTexture2D(kT.FRAMEBUFFER, kT.COLOR_ATTACHMENT0, kT.TEXTURE_CUBE_MAP_POSITIVE_X + UT, TT.texture._hardwareTexture?.underlyingResource, MT) : HT._currentLOD !== MT && (kT.framebufferTexture2D(kT.FRAMEBUFFER, kT.COLOR_ATTACHMENT0, kT.TEXTURE_2D, TT.texture._hardwareTexture?.underlyingResource, MT), HT._currentLOD = MT));
        const jT = TT._depthStencilTexture;
        if (jT) {
          TT.is3D && (TT.texture.width === jT.width && TT.texture.height === jT.height && TT.texture.depth === jT.depth || nT.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const mT = TT._depthStencilTextureWithStencil ? kT.DEPTH_STENCIL_ATTACHMENT : kT.DEPTH_ATTACHMENT;
          TT.is2DArray || TT.is3D ? kT.framebufferTextureLayer(kT.FRAMEBUFFER, mT, jT._hardwareTexture?.underlyingResource, MT, gT) : TT.isCube ? kT.framebufferTexture2D(kT.FRAMEBUFFER, mT, kT.TEXTURE_CUBE_MAP_POSITIVE_X + UT, jT._hardwareTexture?.underlyingResource, MT) : kT.framebufferTexture2D(kT.FRAMEBUFFER, mT, kT.TEXTURE_2D, jT._hardwareTexture?.underlyingResource, MT)
        }
        HT._MSAAFramebuffer && this._bindUnboundFramebuffer(HT._MSAAFramebuffer), this._cachedViewport && !zT ? this.setViewport(this._cachedViewport, mT, WT) : (mT || (mT = TT.width, MT && (mT /= Math.pow(2, MT))), WT || (WT = TT.height, MT && (WT /= Math.pow(2, MT))), this._viewport(0, 0, mT, WT)), this.wipeCaches()
      }
      setStateCullFaceType(TT, UT) {
        const mT = this.cullBackFaces ?? TT ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== mT || UT) && (this._depthCullingState.cullFace = mT)
      }
      setState(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 ? arguments[2] : void 0,
          WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          zT = arguments.length > 4 ? arguments[4] : void 0,
          MT = arguments.length > 5 ? arguments[5] : void 0,
          gT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== TT || mT) && (this._depthCullingState.cull = TT), this.setStateCullFaceType(zT, mT), this.setZOffset(UT), this.setZOffsetUnits(gT);
        const nT = WT ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== nT || mT) && (this._depthCullingState.frontFace = nT), this._stencilStateComposer.stencilMaterial = MT
      }
      _resolveAndGenerateMipMapsFramebuffer(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        TT.disableAutomaticMSAAResolve || (TT.isMulti ? this.resolveMultiFramebuffer(TT) : this.resolveFramebuffer(TT)), UT || (TT.isMulti ? this.generateMipMapsMultiFramebuffer(TT) : this.generateMipMapsFramebuffer(TT))
      }
      _bindUnboundFramebuffer(TT) {
        this._currentFramebuffer !== TT && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, TT), this._currentFramebuffer = TT)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(TT) {
        const UT = this._getTextureTarget(TT);
        this._bindTextureDirectly(UT, TT, !0), this._gl.generateMipmap(UT), this._bindTextureDirectly(UT, null)
      }
      unBindFramebuffer(TT, UT, mT) {
        const WT = TT;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(TT, UT), mT && (WT._MSAAFramebuffer && this._bindUnboundFramebuffer(WT._framebuffer), mT()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(TT) {
        TT.isMulti || !TT.texture?.generateMipMaps || TT.isCube || this.generateMipmaps(TT.texture)
      }
      resolveFramebuffer(TT) {
        const UT = TT,
          mT = this._gl;
        if (!UT._MSAAFramebuffer || UT.isMulti) return;
        let WT = UT.resolveMSAAColors ? mT.COLOR_BUFFER_BIT : 0;
        WT |= UT._generateDepthBuffer && UT.resolveMSAADepth ? mT.DEPTH_BUFFER_BIT : 0, WT |= UT._generateStencilBuffer && UT.resolveMSAAStencil ? mT.STENCIL_BUFFER_BIT : 0, mT.bindFramebuffer(mT.READ_FRAMEBUFFER, UT._MSAAFramebuffer), mT.bindFramebuffer(mT.DRAW_FRAMEBUFFER, UT._framebuffer), mT.blitFramebuffer(0, 0, TT.width, TT.height, 0, 0, TT.width, TT.height, WT, mT.NEAREST)
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
      createVertexBuffer(TT, UT, mT) {
        return this._createVertexBuffer(TT, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(TT, UT) {
        const mT = this._gl.createBuffer();
        if (!mT) throw new Error("Unable to create vertex buffer");
        const WT = new LT.c(mT);
        return this.bindArrayBuffer(WT), "number" !== typeof TT ? TT instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(TT), UT), WT.fl = 4 * TT.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, TT, UT), WT.fl = TT.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(TT), UT), WT.fl = TT), this._resetVertexBufferBinding(), WT.references = 1, WT
      }
      createDynamicVertexBuffer(TT, UT) {
        return this._createVertexBuffer(TT, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(TT, UT, mT) {
        const WT = this._gl.createBuffer(),
          zT = new LT.c(WT);
        if (!WT) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(zT);
        const MT = this._normalizeIndexData(TT);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, MT, UT ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), zT.references = 1, zT.is32Bits = 4 === MT.BYTES_PER_ELEMENT, zT
      }
      _normalizeIndexData(TT) {
        if (2 === TT.BYTES_PER_ELEMENT) return TT;
        if (this._caps.uintIndices) {
          if (TT instanceof Uint32Array) return TT;
          for (let UT = 0; UT < TT.length; UT++)
            if (TT[UT] >= 65535) return new Uint32Array(TT);
          return new Uint16Array(TT)
        }
        return new Uint16Array(TT)
      }
      bindArrayBuffer(TT) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(TT, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(TT, UT, mT) {
        const WT = TT.program,
          zT = this._gl.getUniformBlockIndex(WT, UT);
        this._gl.uniformBlockBinding(WT, zT, mT)
      }
      bindIndexBuffer(TT) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(TT, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(TT, UT) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[UT] !== TT) && (this._gl.bindBuffer(UT, TT ? TT.underlyingResource : null), this._currentBoundBuffer[UT] = TT)
      }
      updateArrayBuffer(TT) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, TT)
      }
      _vertexAttribPointer(TT, UT, mT, WT, zT, MT, gT) {
        const nT = this._currentBufferPointers[UT];
        if (!nT) return;
        let HT = !1;
        nT.active ? (nT.buffer !== TT && (nT.buffer = TT, HT = !0), nT.size !== mT && (nT.size = mT, HT = !0), nT.type !== WT && (nT.type = WT, HT = !0), nT.normalized !== zT && (nT.normalized = zT, HT = !0), nT.stride !== MT && (nT.stride = MT, HT = !0), nT.offset !== gT && (nT.offset = gT, HT = !0)) : (HT = !0, nT.active = !0, nT.index = UT, nT.size = mT, nT.type = WT, nT.normalized = zT, nT.stride = MT, nT.offset = gT, nT.buffer = TT), (HT || this._vaoRecordInProgress) && (this.bindArrayBuffer(TT), WT === this._gl.UNSIGNED_INT || WT === this._gl.INT ? this._gl.vertexAttribIPointer(UT, mT, WT, MT, gT) : this._gl.vertexAttribPointer(UT, mT, WT, zT, MT, gT))
      }
      _bindIndexBufferWithCache(TT) {
        null != TT && this._cachedIndexBuffer !== TT && (this._cachedIndexBuffer = TT, this.bindIndexBuffer(TT), this._uintIndicesCurrentlySet = TT.is32Bits)
      }
      _bindVertexBuffersAttributes(TT, UT, mT) {
        const WT = UT.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let zT = 0; zT < WT.length; zT++) {
          const MT = UT.getAttributeLocation(zT);
          if (MT >= 0) {
            const UT = WT[zT];
            let gT = null;
            if (mT && (gT = mT[UT]), gT || (gT = TT[UT]), !gT) continue;
            this._gl.enableVertexAttribArray(MT), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[MT] = !0);
            const nT = gT.getBuffer();
            nT && (this._vertexAttribPointer(nT, MT, gT.getSize(), gT.type, gT.normalized, gT.byteStride, gT.byteOffset), gT.getIsInstanced() && (this._gl.vertexAttribDivisor(MT, gT.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(MT), this._currentInstanceBuffers.push(nT))))
          }
        }
      }
      recordVertexArrayObject(TT, UT, mT, WT) {
        const zT = this._gl.createVertexArray();
        if (!zT) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(zT), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(TT, mT, WT), this.bindIndexBuffer(UT), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), zT
      }
      bindVertexArrayObject(TT, UT) {
        this._cachedVertexArrayObject !== TT && (this._cachedVertexArrayObject = TT, this._gl.bindVertexArray(TT), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != UT && UT.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(TT, UT, mT, WT, zT) {
        if (this._cachedVertexBuffers !== TT || this._cachedEffectForVertexBuffers !== zT) {
          this._cachedVertexBuffers = TT, this._cachedEffectForVertexBuffers = zT;
          const UT = zT.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let MT = 0;
          for (let gT = 0; gT < UT; gT++)
            if (gT < mT.length) {
              const UT = zT.getAttributeLocation(gT);
              UT >= 0 && (this._gl.enableVertexAttribArray(UT), this._vertexAttribArraysEnabled[UT] = !0, this._vertexAttribPointer(TT, UT, mT[gT], this._gl.FLOAT, !1, WT, MT)), MT += 4 * mT[gT]
            }
        }
        this._bindIndexBufferWithCache(UT)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(TT, UT, mT, WT) {
        this._cachedVertexBuffers === TT && this._cachedEffectForVertexBuffers === mT || (this._cachedVertexBuffers = TT, this._cachedEffectForVertexBuffers = mT, this._bindVertexBuffersAttributes(TT, mT, WT)), this._bindIndexBufferWithCache(UT)
      }
      unbindInstanceAttributes() {
        let TT;
        for (let UT = 0, mT = this._currentInstanceLocations.length; UT < mT; UT++) {
          const mT = this._currentInstanceBuffers[UT];
          TT != mT && mT.references && (TT = mT, this.bindArrayBuffer(mT));
          const WT = this._currentInstanceLocations[UT];
          this._gl.vertexAttribDivisor(WT, 0)
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
      updateAndBindInstancesBuffer(TT, UT, mT) {
        if (this.bindArrayBuffer(TT), UT && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, UT), void 0 !== mT[0].index) this.bindInstancesBuffer(TT, mT, !0);
        else
          for (let WT = 0; WT < 4; WT++) {
            const UT = mT[WT];
            this._vertexAttribArraysEnabled[UT] || (this._gl.enableVertexAttribArray(UT), this._vertexAttribArraysEnabled[UT] = !0), this._vertexAttribPointer(TT, UT, 4, this._gl.FLOAT, !1, 64, 16 * WT), this._gl.vertexAttribDivisor(UT, 1), this._currentInstanceLocations.push(UT), this._currentInstanceBuffers.push(TT)
          }
      }
      bindInstancesBuffer(TT, UT) {
        let mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(TT);
        let WT = 0;
        if (mT)
          for (let zT = 0; zT < UT.length; zT++) {
            WT += 4 * UT[zT].attributeSize
          }
        for (let zT = 0; zT < UT.length; zT++) {
          const mT = UT[zT];
          void 0 === mT.index && (mT.index = this._currentEffect.getAttributeLocationByName(mT.attributeName)), mT.index < 0 || (this._vertexAttribArraysEnabled[mT.index] || (this._gl.enableVertexAttribArray(mT.index), this._vertexAttribArraysEnabled[mT.index] = !0), this._vertexAttribPointer(TT, mT.index, mT.attributeSize, mT.attributeType || this._gl.FLOAT, mT.normalized || !1, WT, mT.offset), this._gl.vertexAttribDivisor(mT.index, void 0 === mT.divisor ? 1 : mT.divisor), this._currentInstanceLocations.push(mT.index), this._currentInstanceBuffers.push(TT))
        }
      }
      disableInstanceAttributeByName(TT) {
        if (!this._currentEffect) return;
        const UT = this._currentEffect.getAttributeLocationByName(TT);
        this.disableInstanceAttribute(UT)
      }
      disableInstanceAttribute(TT) {
        let UT, mT = !1;
        for (; - 1 !== (UT = this._currentInstanceLocations.indexOf(TT));) this._currentInstanceLocations.splice(UT, 1), this._currentInstanceBuffers.splice(UT, 1), mT = !0;
        mT && (this._gl.vertexAttribDivisor(TT, 0), this.disableAttributeByIndex(TT))
      }
      disableAttributeByIndex(TT) {
        this._gl.disableVertexAttribArray(TT), this._vertexAttribArraysEnabled[TT] = !1, this._currentBufferPointers[TT].active = !1
      }
      draw(TT, UT, mT, WT) {
        this.drawElementsType(TT ? 0 : 1, UT, mT, WT)
      }
      drawPointClouds(TT, UT, mT) {
        this.drawArraysType(2, TT, UT, mT)
      }
      drawUnIndexed(TT, UT, mT, WT) {
        this.drawArraysType(TT ? 0 : 1, UT, mT, WT)
      }
      drawElementsType(TT, UT, mT, WT) {
        this.applyStates(), this._reportDrawCall();
        const zT = this._drawMode(TT),
          MT = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          gT = this._uintIndicesCurrentlySet ? 4 : 2;
        WT ? this._gl.drawElementsInstanced(zT, mT, MT, UT * gT, WT) : this._gl.drawElements(zT, mT, MT, UT * gT)
      }
      drawArraysType(TT, UT, mT, WT) {
        this.applyStates(), this._reportDrawCall();
        const zT = this._drawMode(TT);
        WT ? this._gl.drawArraysInstanced(zT, UT, mT, WT) : this._gl.drawArrays(zT, UT, mT)
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
        const UT = TT.getPipelineContext();
        UT && this._deletePipelineContext(UT)
      }
      _deletePipelineContext(TT) {
        const UT = TT;
        UT && UT.program && (UT.program.__SPECTOR_rebuildProgram = null, (0, vT.h)(UT), this._gl && (this._currentProgram === UT.program && this._setProgram(null), this._gl.deleteProgram(UT.program)))
      }
      _getGlobalDefines(TT) {
        return (0, cT.j)(TT, this.isNDCHalfZRange, this.pWT, this.useExactSrgbConversions)
      }
      createEffect(TT, UT, mT, MT, gT, nT, HT, kT, jT) {
        let lT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          LT = arguments.length > 10 ? arguments[10] : void 0;
        const pT = "string" === typeof TT ? TT : TT.vertexToken || TT.vertexSource || TT.vertexElement || TT.vertex,
          BT = "string" === typeof TT ? TT : TT.fragmentToken || TT.fragmentSource || TT.fragmentElement || TT.fragment,
          ZT = this._getGlobalDefines(),
          cT = void 0 !== UT.attributes;
        let vT = gT ?? UT.defines ?? "";
        ZT && (vT += ZT);
        const fT = pT + "+" + BT + "@" + vT;
        if (this._compiledEffects[fT]) {
          const TT = this._compiledEffects[fT];
          return HT && TT.isReady() && HT(TT), TT._refCount++, TT
        }
        this._gl && (0, zT.A)(this._gl);
        const qT = new WT.b(TT, UT, cT ? this : mT, MT, this, gT, nT, HT, kT, jT, fT, UT.shaderLanguage ?? lT, UT.extraInitializationsAsync ?? LT);
        return this._compiledEffects[fT] = qT, qT
      }
      _getShaderSource(TT) {
        return this._gl.getShaderSource(TT)
      }
      createRawShaderProgram(TT, UT, mT, WT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const gT = (0, zT.A)(this._gl);
        return gT._contextWasLost = this._contextWasLost, gT.validateShaderPrograms = this.validateShaderPrograms, (0, zT.u)(TT, UT, mT, WT || this._gl, MT)
      }
      createShaderProgram(TT, UT, mT, WT, MT) {
        let gT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const nT = (0, zT.A)(this._gl);
        return nT._contextWasLost = this._contextWasLost, nT.validateShaderPrograms = this.validateShaderPrograms, (0, zT.w)(TT, UT, mT, WT, MT || this._gl, gT)
      }
      inlineShaderCode(TT) {
        return TT
      }
      createPipelineContext(TT) {
        if (this._gl) {
          (0, zT.A)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const UT = (0, zT.q)(this._gl, TT);
        return UT.engine = this, UT
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(TT) {
        return (0, zT.g)(TT, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(TT, UT, mT, WT, MT, gT, nT, HT, kT, jT, lT) {
        const LT = (0, zT.A)(this._gl);
        return LT._contextWasLost = this._contextWasLost, LT.validateShaderPrograms = this.validateShaderPrograms, LT._createShaderProgramInjection = this._createShaderProgram.bind(this), LT.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), LT.createShaderProgramInjection = this.createShaderProgram.bind(this), LT.loadFileInjection = this._loadFile.bind(this), (0, zT.l)(TT, UT, mT, WT, MT, gT, nT, HT, kT, jT, lT)
      }
      _createShaderProgram(TT, UT, mT, WT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, zT.e)(TT, UT, mT, WT, MT)
      }
      _isRenderingStateCompiled(TT) {
        return !this._isDisposed && (0, zT.h)(TT, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(TT, UT) {
        (0, zT.f)(TT, UT)
      }
      getUniforms(TT, UT) {
        const mT = new Array,
          WT = TT;
        for (let zT = 0; zT < UT.length; zT++) mT.push(this._gl.getUniformLocation(WT.program, UT[zT]));
        return mT
      }
      getAttributes(TT, UT) {
        const mT = [],
          WT = TT;
        for (let MT = 0; MT < UT.length; MT++) try {
          mT.push(this._gl.getAttribLocation(WT.program, UT[MT]))
        } catch (zT) {
          mT.push(-1)
        }
        return mT
      }
      enableEffect(TT) {
        (TT = null !== TT && (0, gT.b)(TT) ? TT.effect : TT) && TT !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(TT), this._currentEffect = TT, TT.onBind && TT.onBind(TT), TT._onBindObservable && TT._onBindObservable.notifyObservers(TT))
      }
      setInt(TT, UT) {
        return !!TT && (this._gl.uniform1i(TT, UT), !0)
      }
      setInt2(TT, UT, mT) {
        return !!TT && (this._gl.uniform2i(TT, UT, mT), !0)
      }
      setInt3(TT, UT, mT, WT) {
        return !!TT && (this._gl.uniform3i(TT, UT, mT, WT), !0)
      }
      setInt4(TT, UT, mT, WT, zT) {
        return !!TT && (this._gl.uniform4i(TT, UT, mT, WT, zT), !0)
      }
      setIntArray(TT, UT) {
        return !!TT && (this._gl.uniform1iv(TT, UT), !0)
      }
      setIntArray2(TT, UT) {
        return !(!TT || UT.length % 2 !== 0) && (this._gl.uniform2iv(TT, UT), !0)
      }
      setIntArray3(TT, UT) {
        return !(!TT || UT.length % 3 !== 0) && (this._gl.uniform3iv(TT, UT), !0)
      }
      setIntArray4(TT, UT) {
        return !(!TT || UT.length % 4 !== 0) && (this._gl.uniform4iv(TT, UT), !0)
      }
      setUInt(TT, UT) {
        return !!TT && (this._gl.uniform1ui(TT, UT), !0)
      }
      setUInt2(TT, UT, mT) {
        return !!TT && (this._gl.uniform2ui(TT, UT, mT), !0)
      }
      setUInt3(TT, UT, mT, WT) {
        return !!TT && (this._gl.uniform3ui(TT, UT, mT, WT), !0)
      }
      setUInt4(TT, UT, mT, WT, zT) {
        return !!TT && (this._gl.uniform4ui(TT, UT, mT, WT, zT), !0)
      }
      setUIntArray(TT, UT) {
        return !!TT && (this._gl.uniform1uiv(TT, UT), !0)
      }
      setUIntArray2(TT, UT) {
        return !(!TT || UT.length % 2 !== 0) && (this._gl.uniform2uiv(TT, UT), !0)
      }
      setUIntArray3(TT, UT) {
        return !(!TT || UT.length % 3 !== 0) && (this._gl.uniform3uiv(TT, UT), !0)
      }
      setUIntArray4(TT, UT) {
        return !(!TT || UT.length % 4 !== 0) && (this._gl.uniform4uiv(TT, UT), !0)
      }
      setArray(TT, UT) {
        return !!TT && (!(UT.length < 1) && (this._gl.uniform1fv(TT, UT), !0))
      }
      setArray2(TT, UT) {
        return !(!TT || UT.length % 2 !== 0) && (this._gl.uniform2fv(TT, UT), !0)
      }
      setArray3(TT, UT) {
        return !(!TT || UT.length % 3 !== 0) && (this._gl.uniform3fv(TT, UT), !0)
      }
      setArray4(TT, UT) {
        return !(!TT || UT.length % 4 !== 0) && (this._gl.uniform4fv(TT, UT), !0)
      }
      setMatrices(TT, UT) {
        return !!TT && (this._gl.uniformMatrix4fv(TT, !1, UT), !0)
      }
      setMatrix3x3(TT, UT) {
        return !!TT && (this._gl.uniformMatrix3fv(TT, !1, UT), !0)
      }
      setMatrix2x2(TT, UT) {
        return !!TT && (this._gl.uniformMatrix2fv(TT, !1, UT), !0)
      }
      setFloat(TT, UT) {
        return !!TT && (this._gl.uniform1f(TT, UT), !0)
      }
      setFloat2(TT, UT, mT) {
        return !!TT && (this._gl.uniform2f(TT, UT, mT), !0)
      }
      setFloat3(TT, UT, mT, WT) {
        return !!TT && (this._gl.uniform3f(TT, UT, mT, WT), !0)
      }
      setFloat4(TT, UT, mT, WT, zT) {
        return !!TT && (this._gl.uniform4f(TT, UT, mT, WT, zT), !0)
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
      _getSamplingParameters(TT, UT) {
        const mT = this._gl;
        let WT = mT.NEAREST,
          zT = mT.NEAREST,
          MT = !1;
        switch (TT) {
          case 11:
            WT = mT.LINEAR, zT = UT ? mT.LINEAR_MIPMAP_NEAREST : mT.LINEAR;
            break;
          case 3:
            WT = mT.LINEAR, MT = !0, zT = UT ? mT.LINEAR_MIPMAP_LINEAR : mT.LINEAR;
            break;
          case 8:
            MT = !0, WT = mT.NEAREST, zT = UT ? mT.NEAREST_MIPMAP_LINEAR : mT.NEAREST;
            break;
          case 4:
            WT = mT.NEAREST, zT = UT ? mT.NEAREST_MIPMAP_NEAREST : mT.NEAREST;
            break;
          case 5:
            WT = mT.NEAREST, zT = UT ? mT.LINEAR_MIPMAP_NEAREST : mT.LINEAR;
            break;
          case 6:
            MT = !0, WT = mT.NEAREST, zT = UT ? mT.LINEAR_MIPMAP_LINEAR : mT.LINEAR;
            break;
          case 7:
            WT = mT.NEAREST, zT = mT.LINEAR;
            break;
          case 1:
            WT = mT.NEAREST, zT = mT.NEAREST;
            break;
          case 9:
            WT = mT.LINEAR, zT = UT ? mT.NEAREST_MIPMAP_NEAREST : mT.NEAREST;
            break;
          case 10:
            MT = !0, WT = mT.LINEAR, zT = UT ? mT.NEAREST_MIPMAP_LINEAR : mT.NEAREST;
            break;
          case 2:
            WT = mT.LINEAR, zT = mT.LINEAR;
            break;
          case 12:
            WT = mT.LINEAR, zT = mT.NEAREST
        }
        return {
          min: zT,
          mag: WT,
          hasMipMaps: MT
        }
      }
      _createTexture() {
        const TT = this._gl.createTexture();
        if (!TT) throw new Error("Unable to create texture");
        return TT
      }
      _createHardwareTexture() {
        return new BT.e(this._createTexture(), this._gl)
      }
      _createInternalTexture(TT, UT) {
        let mT, WT, zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          MT = !1,
          gT = 0,
          HT = 3,
          kT = 5,
          jT = !1,
          lT = 1,
          LT = !1,
          pT = 0,
          BT = !1;
        void 0 !== UT && "object" === typeof UT ? (mT = !!UT.generateMipMaps, MT = !!UT.createMipMaps, gT = void 0 === UT.type ? 0 : UT.type, HT = void 0 === UT.samplingMode ? 3 : UT.samplingMode, kT = void 0 === UT.format ? 5 : UT.format, jT = void 0 !== UT.useSRGBBuffer && UT.useSRGBBuffer, lT = UT.samples ?? 1, WT = UT.label, LT = !!UT.createMSAATexture, pT = UT.comparisonFunction || 0, BT = !!UT.isCube) : mT = !!UT, jT && (jT = this._caps.supportSRGBBuffers && (this.TZ > 1 || this.isWebGPU)), (1 !== gT || this._caps.textureFloatLinearFiltering) && (2 !== gT || this._caps.textureHalfFloatLinearFiltering) || (HT = 1), 1 !== gT || this._caps.textureFloat || (gT = 0, nT.b.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const cT = (0, fT.g)(kT),
          vT = (0, fT.c)(kT),
          qT = this._gl,
          iT = new ZT.b(this, zT),
          bT = TT.width || TT,
          OT = TT.height || TT,
          eT = TT.depth || 0,
          YT = TT.layers || 0,
          JT = this._getSamplingParameters(HT, (mT || MT) && !cT),
          xT = 0 !== YT ? qT.TEXTURE_2D_ARRAY : 0 !== eT ? qT.TEXTURE_3D : BT ? qT.TEXTURE_CUBE_MAP : qT.TEXTURE_2D,
          dT = cT ? this._getInternalFormatFromDepthTextureFormat(kT, !0, vT) : this._getRGBABufferInternalSizedFormat(gT, kT, jT),
          wT = cT ? vT ? qT.DEPTH_STENCIL : qT.DEPTH_COMPONENT : this._getInternalFormat(kT),
          tT = cT ? this._getWebGLTextureTypeFromDepthTextureFormat(kT) : this._getWebGLTextureType(gT);
        if (this._bindTextureDirectly(xT, iT), 0 !== YT) iT.is2DArray = !0, qT.texImage3D(xT, 0, dT, bT, OT, YT, 0, wT, tT, null);
        else if (0 !== eT) iT.is3D = !0, qT.texImage3D(xT, 0, dT, bT, OT, eT, 0, wT, tT, null);
        else if (BT) {
          iT.isCube = !0;
          for (let TT = 0; TT < 6; TT++) qT.texImage2D(qT.TEXTURE_CUBE_MAP_POSITIVE_X + TT, 0, dT, bT, OT, 0, wT, tT, null)
        } else qT.texImage2D(xT, 0, dT, bT, OT, 0, wT, tT, null);
        if (qT.texParameteri(xT, qT.TEXTURE_MAG_FILTER, JT.mag), qT.texParameteri(xT, qT.TEXTURE_MIN_FILTER, JT.min), qT.texParameteri(xT, qT.TEXTURE_WRAP_S, qT.CLAMP_TO_EDGE), qT.texParameteri(xT, qT.TEXTURE_WRAP_T, qT.CLAMP_TO_EDGE), cT && this.TZ > 1 && (0 === pT ? (qT.texParameteri(xT, qT.TEXTURE_COMPARE_FUNC, 515), qT.texParameteri(xT, qT.TEXTURE_COMPARE_MODE, qT.NONE)) : (qT.texParameteri(xT, qT.TEXTURE_COMPARE_FUNC, pT), qT.texParameteri(xT, qT.TEXTURE_COMPARE_MODE, qT.COMPARE_REF_TO_TEXTURE))), (mT || MT) && this._gl.generateMipmap(xT), this._bindTextureDirectly(xT, null), iT._useSRGBBuffer = jT, iT.baseWidth = bT, iT.baseHeight = OT, iT.width = bT, iT.height = OT, iT.depth = YT || eT, iT.isReady = !0, iT.samples = lT, iT.generateMipMaps = mT, iT.samplingMode = HT, iT.type = gT, iT.format = kT, iT.label = WT, iT.comparisonFunction = pT, this._internalTexturesCache.push(iT), LT) {
          let TT;
          if (TT = (0, fT.g)(iT.format) ? this._setupFramebufferDepthAttachments((0, fT.c)(iT.format), 19 !== iT.format, iT.width, iT.height, lT, iT.format, !0) : this._createRenderBuffer(iT.width, iT.height, lT, -1, this._getRGBABufferInternalSizedFormat(iT.type, iT.format, iT._useSRGBBuffer), -1), !TT) throw new Error("Unable to create render buffer");
          iT._autoMSAAManagement = !0;
          let UT = iT._hardwareTexture;
          UT || (UT = iT._hardwareTexture = this._createHardwareTexture()), UT.addMSAARenderBuffer(TT)
        }
        return iT
      }
      _getUseSRGBBuffer(TT, UT) {
        return TT && this._caps.supportSRGBBuffers && (this.TZ > 1 || UT)
      }
      createTexture(TT, UT, mT, WT) {
        var zT = this;
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          gT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          nT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          HT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          kT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          jT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          lT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          LT = arguments.length > 11 ? arguments[11] : void 0,
          pT = arguments.length > 12 ? arguments[12] : void 0,
          BT = arguments.length > 13 ? arguments[13] : void 0,
          cT = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(TT, UT, mT, WT, MT, gT, nT, (function() {
          for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
          return zT._prepareWebGLTexture(...UT, jT)
        }), ((TT, UT, mT, zT, MT, gT) => {
          const nT = this._gl,
            HT = mT.width === TT && mT.height === UT;
          MT._creationFlags = BT ?? 0;
          const kT = this._getTexImageParametersForCreateTexture(MT.format, MT._useSRGBBuffer);
          if (HT) return nT.texImage2D(nT.TEXTURE_2D, 0, kT.internalFormat, kT.format, kT.type, mT), !1;
          const jT = this._caps.maxTextureSize;
          if (mT.width > jT || mT.height > jT || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = TT, this._workingCanvas.height = UT, this._workingContext.drawImage(mT, 0, 0, mT.width, mT.height, 0, 0, TT, UT), nT.texImage2D(nT.TEXTURE_2D, 0, kT.internalFormat, kT.format, kT.type, this._workingCanvas), MT.width = TT, MT.height = UT, !1);
          {
            const TT = new ZT.b(this, 2);
            this._bindTextureDirectly(nT.TEXTURE_2D, TT, !0), nT.texImage2D(nT.TEXTURE_2D, 0, kT.internalFormat, kT.format, kT.type, mT), this._rescaleTexture(TT, MT, WT, kT.format, (() => {
              this._releaseTexture(TT), this._bindTextureDirectly(nT.TEXTURE_2D, MT, !0), gT()
            }))
          }
          return !0
        }), HT, kT, jT, lT, LT, pT, cT)
      }
      _getTexImageParametersForCreateTexture(TT, UT) {
        let mT, WT;
        return 1 === this.TZ ? (mT = this._getInternalFormat(TT, UT), WT = mT) : (mT = this._getInternalFormat(TT, !1), WT = this._getRGBABufferInternalSizedFormat(0, TT, UT)), {
          internalFormat: WT,
          format: mT,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(TT, UT, mT, WT, zT) {}
      _unpackFlipY(TT) {
        this._unpackFlipYCached !== TT && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, TT ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = TT))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(TT) {
        return TT.isCube ? this._gl.TEXTURE_CUBE_MAP : TT.is3D ? this._gl.TEXTURE_3D : TT.is2DArray || TT.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const WT = this._getTextureTarget(UT),
          zT = this._getSamplingParameters(TT, UT.useMipMaps || mT);
        this._setTextureParameterInteger(WT, this._gl.TEXTURE_MAG_FILTER, zT.mag, UT), this._setTextureParameterInteger(WT, this._gl.TEXTURE_MIN_FILTER, zT.min), mT && zT.hasMipMaps && (UT.generateMipMaps = !0, this._gl.generateMipmap(WT)), this._bindTextureDirectly(WT, null), UT.samplingMode = TT
      }
      updateTextureDimensions(TT, UT, mT) {}
      updateTextureWrappingMode(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const zT = this._getTextureTarget(TT);
        null !== UT && (this._setTextureParameterInteger(zT, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(UT), TT), TT._cachedWrapU = UT), null !== mT && (this._setTextureParameterInteger(zT, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(mT), TT), TT._cachedWrapV = mT), (TT.is2DArray || TT.is3D) && null !== WT && (this._setTextureParameterInteger(zT, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(WT), TT), TT._cachedWrapR = WT), this._bindTextureDirectly(zT, null)
      }
      _uploadCompressedDataToTextureDirectly(TT, UT, mT, WT, zT) {
        let MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          gT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const nT = this._gl;
        let HT = nT.TEXTURE_2D;
        if (TT.isCube && (HT = nT.TEXTURE_CUBE_MAP_POSITIVE_X + MT), TT._useSRGBBuffer) switch (UT) {
          case 37492:
          case 36196:
            this._caps.etc2 ? UT = nT.COMPRESSED_SRGB8_ETC2 : TT._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? UT = nT.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : TT._useSRGBBuffer = !1;
            break;
          case 36492:
            UT = nT.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            UT = nT.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            UT = nT.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            UT = nT.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            UT = nT.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            UT = nT.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            UT = nT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            UT = nT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            UT = nT.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            UT = nT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            UT = nT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            UT = nT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            UT = nT.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            UT = nT.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            UT = nT.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? UT = nT.COMPRESSED_SRGB_S3TC_DXT1_EXT : TT._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? UT = nT.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : TT._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? UT = nT.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : TT._useSRGBBuffer = !1;
            break;
          default:
            TT._useSRGBBuffer = !1
        }
        if (TT.generateMipMaps) {
          const MT = TT._hardwareTexture;
          MT.memoryAllocated || (nT.texStorage2D(TT.isCube ? nT.TEXTURE_CUBE_MAP : nT.TEXTURE_2D, Math.floor(Math.log2(Math.max(mT, WT))) + 1, UT, TT.width, TT.height), MT.memoryAllocated = !0), this._gl.compressedTexSubImage2D(HT, gT, 0, 0, mT, WT, UT, zT)
        } else this._gl.compressedTexImage2D(HT, gT, UT, mT, WT, 0, zT)
      }
      _uploadDataToTextureDirectly(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          zT = arguments.length > 4 ? arguments[4] : void 0,
          MT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const gT = this._gl,
          nT = this._getWebGLTextureType(TT.type),
          HT = this._getInternalFormat(TT.format),
          kT = void 0 === zT ? this._getRGBABufferInternalSizedFormat(TT.type, TT.format, TT._useSRGBBuffer) : this._getInternalFormat(zT, TT._useSRGBBuffer);
        this._unpackFlipY(TT.invertY);
        let jT = gT.TEXTURE_2D;
        TT.isCube && (jT = gT.TEXTURE_CUBE_MAP_POSITIVE_X + mT);
        const lT = Math.round(Math.log(TT.width) * Math.LOG2E),
          LT = Math.round(Math.log(TT.height) * Math.LOG2E),
          pT = MT ? TT.width : Math.pow(2, Math.max(lT - WT, 0)),
          BT = MT ? TT.height : Math.pow(2, Math.max(LT - WT, 0));
        gT.texImage2D(jT, WT, kT, pT, BT, 0, HT, nT, UT)
      }
      updateTextureData(TT, UT, mT, WT, zT, MT) {
        let gT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          nT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          HT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const kT = this._gl,
          jT = this._getWebGLTextureType(TT.type),
          lT = this._getInternalFormat(TT.format);
        this._unpackFlipY(TT.invertY);
        let LT = kT.TEXTURE_2D,
          pT = kT.TEXTURE_2D;
        TT.isCube && (pT = kT.TEXTURE_CUBE_MAP_POSITIVE_X + gT, LT = kT.TEXTURE_CUBE_MAP), this._bindTextureDirectly(LT, TT, !0), kT.texSubImage2D(pT, nT, mT, WT, zT, MT, lT, jT, UT), HT && this._gl.generateMipmap(pT), this._bindTextureDirectly(LT, null)
      }
      _uploadArrayBufferViewToTexture(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const zT = this._gl,
          MT = TT.isCube ? zT.TEXTURE_CUBE_MAP : zT.TEXTURE_2D;
        this._bindTextureDirectly(MT, TT, !0), this._uploadDataToTextureDirectly(TT, UT, mT, WT), this._bindTextureDirectly(MT, null, !0)
      }
      _prepareWebGLTextureContinuation(TT, UT, mT, WT, zT) {
        const MT = this._gl;
        if (!MT) return;
        const gT = this._getSamplingParameters(zT, !mT);
        MT.texParameteri(MT.TEXTURE_2D, MT.TEXTURE_MAG_FILTER, gT.mag), MT.texParameteri(MT.TEXTURE_2D, MT.TEXTURE_MIN_FILTER, gT.min), mT || WT || MT.generateMipmap(MT.TEXTURE_2D), this._bindTextureDirectly(MT.TEXTURE_2D, null), UT && UT.removePendingData(TT), TT.onLoadedObservable.notifyObservers(TT), TT.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT) {
        const jT = this.getCaps().maxTextureSize,
          lT = Math.min(jT, this.needPOTTextures ? (0, pT.f)(WT.width, jT) : WT.width),
          LT = Math.min(jT, this.needPOTTextures ? (0, pT.f)(WT.height, jT) : WT.height),
          BT = this._gl;
        BT && (TT._hardwareTexture ? (this._bindTextureDirectly(BT.TEXTURE_2D, TT, !0), this._unpackFlipY(void 0 === zT || !!zT), TT.baseWidth = WT.width, TT.baseHeight = WT.height, TT.width = lT, TT.height = LT, TT.isReady = !0, TT.type = -1 !== TT.type ? TT.type : 0, TT.format = -1 !== TT.format ? TT.format : kT ?? (".jpg" !== UT || TT._useSRGBBuffer ? 5 : 4), nT(lT, LT, WT, UT, TT, (() => {
          this._prepareWebGLTextureContinuation(TT, mT, MT, gT, HT)
        })) || this._prepareWebGLTextureContinuation(TT, mT, MT, gT, HT)) : mT && mT.removePendingData(TT))
      }
      _getInternalFormatFromDepthTextureFormat(TT, UT, mT) {
        const WT = this._gl;
        if (!UT) return WT.STENCIL_INDEX8;
        let zT = mT ? WT.DEPTH_STENCIL : WT.DEPTH_COMPONENT;
        return this.TZ > 1 ? 15 === TT ? zT = WT.DEPTH_COMPONENT16 : 16 === TT ? zT = WT.DEPTH_COMPONENT24 : 17 === TT || 13 === TT ? zT = mT ? WT.DEPTH24_STENCIL8 : WT.DEPTH_COMPONENT24 : 14 === TT ? zT = WT.DEPTH_COMPONENT32F : 18 === TT && (zT = mT ? WT.DEPTH32F_STENCIL8 : WT.DEPTH_COMPONENT32F) : zT = WT.DEPTH_COMPONENT16, zT
      }
      _getWebGLTextureTypeFromDepthTextureFormat(TT) {
        const UT = this._gl;
        let mT = UT.UNSIGNED_INT;
        return 15 === TT ? mT = UT.UNSIGNED_SHORT : 17 === TT || 13 === TT ? mT = UT.UNSIGNED_INT_24_8 : 14 === TT ? mT = UT.FLOAT : 18 === TT ? mT = UT.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === TT && (mT = UT.UNSIGNED_BYTE), mT
      }
      _setupFramebufferDepthAttachments(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          MT = arguments.length > 5 ? arguments[5] : void 0,
          gT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const nT = this._gl;
        MT = MT ?? (TT ? 13 : 14);
        const HT = this._getInternalFormatFromDepthTextureFormat(MT, UT, TT);
        return TT && UT ? this._createRenderBuffer(mT, WT, zT, nT.DEPTH_STENCIL, HT, gT ? -1 : nT.DEPTH_STENCIL_ATTACHMENT) : UT ? this._createRenderBuffer(mT, WT, zT, HT, HT, gT ? -1 : nT.DEPTH_ATTACHMENT) : TT ? this._createRenderBuffer(mT, WT, zT, HT, HT, gT ? -1 : nT.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(TT, UT, mT, WT, zT, MT) {
        let gT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const nT = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(nT, TT, UT, mT, WT, zT, MT, gT)
      }
      _updateRenderBuffer(TT, UT, mT, WT, zT, MT, gT) {
        let nT = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const HT = this._gl;
        return HT.bindRenderbuffer(HT.RENDERBUFFER, TT), WT > 1 && HT.renderbufferStorageMultisample ? HT.renderbufferStorageMultisample(HT.RENDERBUFFER, WT, MT, UT, mT) : HT.renderbufferStorage(HT.RENDERBUFFER, zT, UT, mT), -1 !== gT && HT.framebufferRenderbuffer(HT.FRAMEBUFFER, gT, HT.RENDERBUFFER, TT), nT && HT.bindRenderbuffer(HT.RENDERBUFFER, null), TT
      }
      _releaseTexture(TT) {
        this._deleteTexture(TT._hardwareTexture), this.unbindAllTextures();
        const UT = this._internalTexturesCache.indexOf(TT); - 1 !== UT && this._internalTexturesCache.splice(UT, 1), TT._lodTextureHigh && TT._lodTextureHigh.dispose(), TT._lodTextureMid && TT._lodTextureMid.dispose(), TT._lodTextureLow && TT._lodTextureLow.dispose(), TT._irradianceTexture && TT._irradianceTexture.dispose()
      }
      _deleteTexture(TT) {
        TT?.release()
      }
      _setProgram(TT) {
        this._currentProgram !== TT && ((0, zT.o)(TT, this._gl), this._currentProgram = TT)
      }
      bindSamplers(TT) {
        const UT = TT.getPipelineContext();
        this._setProgram(UT.program);
        const mT = TT.getSamplers();
        for (let WT = 0; WT < mT.length; WT++) {
          const UT = TT.getUniform(mT[WT]);
          UT && (this._boundUniforms[WT] = UT)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          zT = !1;
        const MT = UT && UT._associatedChannel > -1;
        mT && MT && (this._activeChannel = UT._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== UT || WT) {
          if (this._activateCurrentTexture(), UT && UT.isMultiview) throw nT.b.Error(["_bindTextureDirectly called with a multiview texture!", TT, UT]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(TT, UT?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = UT, UT && (UT._associatedChannel = this._activeChannel)
        } else mT && (zT = !0, this._activateCurrentTexture());
        return MT && !mT && this._bindSamplerUniformToChannel(UT._associatedChannel, this._activeChannel), zT
      }
      _bindTexture(TT, UT, mT) {
        if (void 0 === TT) return;
        UT && (UT._associatedChannel = TT), this._activeChannel = TT;
        const WT = UT ? this._getTextureTarget(UT) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(WT, UT)
      }
      unbindAllTextures() {
        for (let TT = 0; TT < this._maxSimultaneousTextures; TT++) this._activeChannel = TT, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.TZ > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(TT, UT, mT, WT) {
        void 0 !== TT && (UT && (this._boundUniforms[TT] = UT), this._setTexture(TT, mT))
      }
      _bindSamplerUniformToChannel(TT, UT) {
        const mT = this._boundUniforms[TT];
        mT && mT._currentState !== UT && (this._gl.uniform1i(mT, UT), mT._currentState = UT)
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
      _setTexture(TT, UT) {
        let mT, WT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          zT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!UT) return null != this._boundTexturesCache[TT] && (this._activeChannel = TT, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.TZ > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (UT.video) {
          this._activeChannel = TT;
          const mT = UT.getInternalTexture();
          mT && (mT._associatedChannel = TT), UT.update()
        } else if (4 === UT.delayLoadState) return UT.delayLoad(), !1;
        mT = zT ? UT.depthStencilTexture : UT.isReady() ? UT.getInternalTexture() : UT.isCube ? this.emptyCubeTexture : UT.is3D ? this.emptyTexture3D : UT.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !WT && mT && (mT._associatedChannel = TT);
        let MT = !0;
        this._boundTexturesCache[TT] === mT && (WT || this._bindSamplerUniformToChannel(mT._associatedChannel, TT), MT = !1), this._activeChannel = TT;
        const gT = this._getTextureTarget(mT);
        if (MT && this._bindTextureDirectly(gT, mT, WT), mT && !mT.isMultiview) {
          if (mT.isCube && mT._cachedCoordinatesMode !== UT.coordinatesMode) {
            mT._cachedCoordinatesMode = UT.coordinatesMode;
            const TT = 3 !== UT.coordinatesMode && 5 !== UT.coordinatesMode ? 1 : 0;
            UT.wrapU = TT, UT.wrapV = TT
          }
          mT._cachedWrapU !== UT.wrapU && (mT._cachedWrapU = UT.wrapU, this._setTextureParameterInteger(gT, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(UT.wrapU), mT)), mT._cachedWrapV !== UT.wrapV && (mT._cachedWrapV = UT.wrapV, this._setTextureParameterInteger(gT, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(UT.wrapV), mT)), mT.is3D && mT._cachedWrapR !== UT.wrapR && (mT._cachedWrapR = UT.wrapR, this._setTextureParameterInteger(gT, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(UT.wrapR), mT)), this._setAnisotropicLevel(gT, mT, UT.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(TT, UT, mT, WT) {
        if (void 0 !== TT && UT) {
          this._textureUnits && this._textureUnits.length === mT.length || (this._textureUnits = new Int32Array(mT.length));
          for (let UT = 0; UT < mT.length; UT++) {
            const WT = mT[UT].getInternalTexture();
            WT ? (this._textureUnits[UT] = TT + UT, WT._associatedChannel = TT + UT) : this._textureUnits[UT] = -1
          }
          this._gl.uniform1iv(UT, this._textureUnits);
          for (let TT = 0; TT < mT.length; TT++) this._setTexture(this._textureUnits[TT], mT[TT], !0)
        }
      }
      _setAnisotropicLevel(TT, UT, mT) {
        const WT = this._caps.textureAnisotropicFilterExtension;
        11 !== UT.samplingMode && 3 !== UT.samplingMode && 2 !== UT.samplingMode && (mT = 1), WT && UT._cachedAnisotropicFilteringLevel !== mT && (this._setTextureParameterFloat(TT, WT.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(mT, this._caps.maxAnisotropy), UT), UT._cachedAnisotropicFilteringLevel = mT)
      }
      _setTextureParameterFloat(TT, UT, mT, WT) {
        this._bindTextureDirectly(TT, WT, !0, !0), this._gl.texParameterf(TT, UT, mT)
      }
      _setTextureParameterInteger(TT, UT, mT, WT) {
        WT && this._bindTextureDirectly(TT, WT, !0, !0), this._gl.texParameteri(TT, UT, mT)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let TT = 0; TT < this._caps.maxVertexAttribs; TT++) this.disableAttributeByIndex(TT)
        } else
          for (let TT = 0, UT = this._vertexAttribArraysEnabled.length; TT < UT; TT++) TT >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[TT] || this.disableAttributeByIndex(TT)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, HT.j)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, zT.y)(this._gl)
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
        const UT = this._gl;
        for (; UT.getError() !== UT.NO_ERROR;);
        let mT = !0;
        const WT = UT.createTexture();
        UT.bindTexture(UT.TEXTURE_2D, WT), UT.texImage2D(UT.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(TT), 1, 1, 0, UT.RGBA, this._getWebGLTextureType(TT), null), UT.texParameteri(UT.TEXTURE_2D, UT.TEXTURE_MIN_FILTER, UT.NEAREST), UT.texParameteri(UT.TEXTURE_2D, UT.TEXTURE_MAG_FILTER, UT.NEAREST);
        const zT = UT.createFramebuffer();
        UT.bindFramebuffer(UT.FRAMEBUFFER, zT), UT.framebufferTexture2D(UT.FRAMEBUFFER, UT.COLOR_ATTACHMENT0, UT.TEXTURE_2D, WT, 0);
        const MT = UT.checkFramebufferStatus(UT.FRAMEBUFFER);
        if (mT = mT && MT === UT.FRAMEBUFFER_COMPLETE, mT = mT && UT.getError() === UT.NO_ERROR, mT && (UT.clear(UT.COLOR_BUFFER_BIT), mT = mT && UT.getError() === UT.NO_ERROR), mT) {
          UT.bindFramebuffer(UT.FRAMEBUFFER, null);
          const TT = UT.RGBA,
            WT = UT.UNSIGNED_BYTE,
            zT = new Uint8Array(4);
          UT.readPixels(0, 0, 1, 1, TT, WT, zT), mT = mT && UT.getError() === UT.NO_ERROR
        }
        for (UT.deleteTexture(WT), UT.deleteFramebuffer(zT), UT.bindFramebuffer(UT.FRAMEBUFFER, null); !mT && UT.getError() !== UT.NO_ERROR;);
        return mT
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
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = UT ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (TT) {
          case 0:
            mT = this._gl.ALPHA;
            break;
          case 1:
            mT = this._gl.LUMINANCE;
            break;
          case 2:
            mT = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            mT = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            mT = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            mT = UT ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            mT = UT ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (TT) {
          case 8:
            mT = this._gl.RED_INTEGER;
            break;
          case 9:
            mT = this._gl.RG_INTEGER;
            break;
          case 10:
            mT = this._gl.RGB_INTEGER;
            break;
          case 11:
            mT = this._gl.RGBA_INTEGER
        }
        return mT
      }
      _getRGBABufferInternalSizedFormat(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== UT) switch (UT) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return mT ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (TT) {
          case 3:
            switch (UT) {
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
            switch (UT) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return mT ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return mT ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (UT) {
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
            switch (UT) {
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
            switch (UT) {
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
            switch (UT) {
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
            switch (UT) {
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
            switch (UT) {
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
            switch (UT) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return mT ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(TT, UT, mT, WT) {
        let zT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          MT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          gT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const HT = zT ? 4 : 3,
          kT = zT ? this._gl.RGBA : this._gl.RGB,
          jT = mT * WT * HT;
        if (gT) {
          if (gT.length < jT) return nT.b.Error(`Data buffer is too small to store the read pixels (${gT.length} should be more than ${jT})`), Promise.resolve(gT)
        } else gT = new Uint8Array(jT);
        return MT && this.flushFramebuffer(), this._gl.readPixels(TT, UT, mT, WT, kT, this._gl.UNSIGNED_BYTE, gT), Promise.resolve(gT)
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
          const TT = MT.c._CreateCanvas(1, 1),
            UT = TT.getContext("webgl") || TT.getContext("experimental-webgl");
          this._IsSupported = null != UT && !!globalThis.WebGLRenderingContext
        } catch (TT) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const TT = MT.c._CreateCanvas(1, 1),
            UT = TT.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || TT.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !UT
        } catch (TT) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    bT._TempClearColorUint32 = new Uint32Array(4), bT._TempClearColorInt32 = new Int32Array(4), bT._TempClearColorFloat32 = new Float32Array(4), bT.ExceptionList = [{
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
    }], bT._ConcatenateShader = cT.g, bT._IsSupported = null, bT._HasMajorPerformanceCaveat = null
  },
  40297: (TT, UT, mT) => {
    var WT;
    mT.d(UT, {
        c: () => zT
      }),
      function(TT) {
        TT[TT.PointerMove = 0] = "PointerMove", TT[TT.PointerDown = 1] = "PointerDown", TT[TT.PointerUp = 2] = "PointerUp"
      }(WT || (WT = {}));
    class zT {}
    zT.DOM_DELTA_PIXEL = 0, zT.DOM_DELTA_LINE = 1, zT.DOM_DELTA_PAGE = 2
  },
  40290: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT,
      i: () => MT,
      k: () => zT
    });
    class WT {}
    WT.KEYDOWN = 1, WT.KEYUP = 2;
    class zT {
      constructor(TT, UT) {
        this.type = TT, this.event = UT
      }
    }
    class MT extends zT {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(TT) {
        this.skipOnKeyboardObservable = TT
      }
      constructor(TT, UT) {
        super(TT, UT), this.type = TT, this.event = UT, this.skipOnKeyboardObservable = !1
      }
    }
  },
  40288: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT,
      f: () => gT,
      h: () => nT
    });
    var WT = mT(37188);
    class zT {}
    zT.POINTERDOWN = 1, zT.POINTERUP = 2, zT.POINTERMOVE = 4, zT.POINTERWHEEL = 8, zT.POINTERPICK = 16, zT.POINTERTAP = 32, zT.POINTERDOUBLETAP = 64;
    class MT {
      constructor(TT, UT) {
        this.type = TT, this.event = UT
      }
    }
    class gT extends MT {
      constructor(TT, UT, mT, zT) {
        super(TT, UT), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new WT.o(mT, zT)
      }
    }
    class nT extends MT {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(TT, UT), this._pickInfo = mT, this._inputManager = WT
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  40310: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT
    });
    class WT {
      static CompareLightsPriority(TT, UT) {
        return TT.shadowEnabled !== UT.shadowEnabled ? (UT.shadowEnabled ? 1 : 0) - (TT.shadowEnabled ? 1 : 0) : UT.renderPriority - TT.renderPriority
      }
    }
    WT.FALLOFF_DEFAULT = 0, WT.FALLOFF_PHYSICAL = 1, WT.FALLOFF_GLTF = 2, WT.FALLOFF_STANDARD = 3, WT.LIGHTMAP_DEFAULT = 0, WT.LIGHTMAP_SPECULAR = 1, WT.LIGHTMAP_SHADOWSONLY = 2, WT.INTENSITYMODE_AUTOMATIC = 0, WT.INTENSITYMODE_LUMINOUSPOWER = 1, WT.INTENSITYMODE_LUMINOUSINTENSITY = 2, WT.INTENSITYMODE_ILLUMINANCE = 3, WT.INTENSITYMODE_LUMINANCE = 4, WT.LIGHTTYPEID_POINTLIGHT = 0, WT.LIGHTTYPEID_DIRECTIONALLIGHT = 1, WT.LIGHTTYPEID_SPOTLIGHT = 2, WT.LIGHTTYPEID_HEMISPHERICLIGHT = 3, WT.LIGHTTYPEID_RECT_AREALIGHT = 4, WT.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  39913: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => gT
    });
    var WT, zT = mT(37219),
      MT = mT(39916);
    ! function(TT) {
      TT[TT.Unknown = 0] = "Unknown", TT[TT.Url = 1] = "Url", TT[TT.Temp = 2] = "Temp", TT[TT.Raw = 3] = "Raw", TT[TT.Dynamic = 4] = "Dynamic", TT[TT.RenderTarget = 5] = "RenderTarget", TT[TT.MultiRenderTarget = 6] = "MultiRenderTarget", TT[TT.Cube = 7] = "Cube", TT[TT.CubeRaw = 8] = "CubeRaw", TT[TT.CubePrefiltered = 9] = "CubePrefiltered", TT[TT.Raw3D = 10] = "Raw3D", TT[TT.Raw2DArray = 11] = "Raw2DArray", TT[TT.DepthStencil = 12] = "DepthStencil", TT[TT.CubeRawRGBD = 13] = "CubeRawRGBD", TT[TT.Depth = 14] = "Depth", TT[TT.External = 15] = "External"
    }(WT || (WT = {}));
    class gT extends MT.b {
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
      eB() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new zT.d, this.onErrorObservable = new zT.d, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = TT, this._source = UT, this._uniqueId = gT._Counter++, mT || (this._hardwareTexture = TT._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, TT, UT, mT), this.width = TT, this.height = UT, this.depth = mT, this.baseWidth = TT, this.baseHeight = UT, this.baseDepth = mT, this._size = TT * UT * mT
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const TT = this.onRebuildCallback(this),
            UT = UT => {
              UT._swapAndDie(this, !1), this.isReady = TT.isReady
            };
          return void(TT.isAsync ? TT.proxy.then(UT) : UT(TT.proxy))
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
                const UT = this._bufferViewArray[TT];
                UT && this._engine.updateRawTexture(this, UT, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, TT)
              }
            this.isReady = !0;
            break;
          case 10:
            TT = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), TT._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (TT = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), TT._swapAndDie(this, !1), this._bufferViewArray)
              for (let TT = 0; TT < this._bufferViewArray.length; TT++) {
                const UT = this._bufferViewArray[TT];
                UT && this._engine.updateRawTexture2DArray(this, UT, this.format, this.invertY, this._compression, this.type, TT)
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
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(TT._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), TT._hardwareTexture = this._hardwareTexture, TT._setUniqueId(gT._Counter++), UT && (TT._isRGBD = this._isRGBD), this._lodTextureHigh && (TT._lodTextureHigh && TT._lodTextureHigh.dispose(), TT._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (TT._lodTextureMid && TT._lodTextureMid.dispose(), TT._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (TT._lodTextureLow && TT._lodTextureLow.dispose(), TT._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (TT._irradianceTexture && TT._irradianceTexture.dispose(), TT._irradianceTexture = this._irradianceTexture);
        const mT = this._engine.getLoadedTexturesCache();
        let WT = mT.indexOf(this); - 1 !== WT && mT.splice(WT, 1), WT = mT.indexOf(TT), -1 === WT && mT.push(TT)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    gT._Counter = 0
  },
  40036: (TT, UT, mT) => {
    function WT(TT) {
      return 13 === TT || 14 === TT || 15 === TT || 16 === TT || 17 === TT || 18 === TT || 19 === TT
    }

    function zT(TT) {
      return 8 === TT || 9 === TT || 10 === TT || 11 === TT
    }

    function MT(TT) {
      return 0 === TT || 5 === TT || 7 === TT || 11 === TT
    }

    function gT(TT) {
      return 13 === TT || 17 === TT || 18 === TT || 19 === TT
    }
    mT.d(UT, {
      c: () => gT,
      g: () => WT,
      k: () => zT,
      m: () => MT
    })
  },
  39916: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT
    });
    class WT {
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
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = TT, this._cachedWrapV = UT, this._cachedWrapR = mT, this._cachedAnisotropicFilteringLevel = WT, this.samplingMode = zT, this._comparisonFunction = MT, this
      }
      compareSampler(TT) {
        return this._cachedWrapU === TT._cachedWrapU && this._cachedWrapV === TT._cachedWrapV && this._cachedWrapR === TT._cachedWrapR && this._cachedAnisotropicFilteringLevel === TT._cachedAnisotropicFilteringLevel && this.samplingMode === TT.samplingMode && this._comparisonFunction === TT._comparisonFunction && this._useMipMaps === TT._useMipMaps
      }
    }
  },
  40228: (TT, UT, mT) => {
    function WT(TT) {
      TT.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    mT.d(UT, {
      d: () => WT
    })
  },
  40001: (TT, UT, mT) => {
    function WT(TT) {
      return void 0 === TT.getPipelineContext
    }
    mT.d(UT, {
      b: () => WT
    })
  },
  40449: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => zT
    });
    var WT = mT(39975);
    class zT {
      static GetEffect(TT) {
        return void 0 === TT.getPipelineContext ? TT.effect : TT
      }
      constructor(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = TT.createDrawContext(), UT && (this.materialContext = TT.createMaterialContext())
      }
      setEffect(TT, UT) {
        let mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        mT || this.effect === TT || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = TT, void 0 !== UT && (this.defines = UT), mT && this.drawContext?.reset()
      }
      dispose() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const UT = this.effect;
          TT ? UT.dispose() : WT.e.SetImmediate((() => {
            UT.eB().onEndFrameObservable.addOnce((() => {
              UT.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39938: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => lT,
      f: () => pT,
      g: () => kT,
      h: () => jT
    });
    var WT = mT(39946),
      zT = mT(39949),
      MT = mT(39934),
      gT = mT(38800),
      nT = mT(39972),
      HT = mT(39957);

    function kT(TT, UT) {
      return (0, zT.A)(UT).cachedPipelines[TT]
    }

    function jT(TT) {
      const UT = TT._name,
        mT = TT.context;
      if (UT && mT) {
        const TT = (0, zT.A)(mT),
          WT = TT.cachedPipelines[UT];
        WT?.dispose(), delete TT.cachedPipelines[UT]
      }
    }

    function lT(TT, UT, mT, zT, MT, gT, HT) {
      let kT, jT;
      const lT = (0, WT.j)() ? gT?.getHostDocument() : null;
      kT = "string" === typeof UT ? UT : "string" === typeof UT.vertexSource ? "source:" + UT.vertexSource : "string" === typeof UT.vertexElement ? lT?.getElementById(UT.vertexElement) || UT.vertexElement : UT.vertex || UT, jT = "string" === typeof UT ? UT : "string" === typeof UT.fragmentSource ? "source:" + UT.fragmentSource : "string" === typeof UT.fragmentElement ? lT?.getElementById(UT.fragmentElement) || UT.fragmentElement : UT.fragment || UT;
      const pT = [void 0, void 0],
        BT = () => {
          if (pT[0] && pT[1]) {
            const [WT, kT] = pT;
            (0, nT.d)(TT), (0, nT.h)(WT, TT, ((WT, jT) => {
              HT && (HT._vertexSourceCodeBeforeMigration = jT), mT && (WT = mT("vertex", WT)), TT.isFragment = !0, (0, nT.h)(kT, TT, ((gT, kT) => {
                HT && (HT._fragmentSourceCodeBeforeMigration = kT), mT && (gT = mT("fragment", gT));
                const jT = (0, nT.b)(WT, gT, TT);
                TT = null;
                const lT = function(TT, UT, mT, WT) {
                  if (mT) {
                    return {
                      vertexSourceCode: (1 === WT ? "//" : "") + "#define SHADER_NAME vertex:" + (mT.vertexElement || mT.vertex || mT.spectorName || mT) + "\n" + TT,
                      fragmentSourceCode: (1 === WT ? "//" : "") + "#define SHADER_NAME fragment:" + (mT.fragmentElement || mT.fragment || mT.spectorName || mT) + "\n" + UT
                    }
                  }
                  return {
                    vertexSourceCode: TT,
                    fragmentSourceCode: UT
                  }
                }(jT.vertexCode, jT.fragmentCode, UT, MT);
                zT?.(lT.vertexSourceCode, lT.fragmentSourceCode)
              }), gT)
            }), gT)
          }
        };
      LT(kT, "Vertex", "", (TT => {
        HT && (HT._rawVertexSourceCode = TT), pT[0] = TT, BT()
      }), MT), LT(jT, "Fragment", "Pixel", (TT => {
        HT && (HT._rawFragmentSourceCode = TT), pT[1] = TT, BT()
      }), MT)
    }

    function LT(TT, UT, mT, zT, gT, nT) {
      if ("undefined" !== typeof HTMLElement && TT instanceof HTMLElement) {
        return void zT((0, WT.c)(TT))
      }
      if ("source:" === TT.substring(0, 7)) return void zT(TT.substring(7));
      if ("base64:" === TT.substring(0, 7)) {
        return void zT(window.atob(TT.substring(7)))
      }
      const kT = MT.d.GetShadersStore(gT);
      if (kT[TT + UT + "Shader"]) return void zT(kT[TT + UT + "Shader"]);
      if (mT && kT[TT + mT + "Shader"]) return void zT(kT[TT + mT + "Shader"]);
      let jT;
      if (jT = "." === TT[0] || "/" === TT[0] || TT.indexOf("http") > -1 ? TT : MT.d.GetShadersRepository(gT) + TT, !(nT = nT || HT.m)) throw new Error("loadFileInjection is not defined");
      nT(jT + "." + UT.toLowerCase() + ".fx", zT)
    }
    const pT = (TT, UT, mT, WT) => {
      try {
        const MT = TT.context ? (0, zT.A)(TT.context) : null;
        MT && (MT.disableParallelShaderCompile = TT.disableParallelCompilation);
        const gT = TT.existingPipelineContext || UT(TT.shaderProcessingContext);
        return gT._name = TT.name, TT.name && MT && (MT.cachedPipelines[TT.name] = gT), mT(gT, TT.vertex, TT.fragment, !!TT.createAsRaw, "", "", TT.rebuildRebind, TT.defines, TT.transformFeedbackVaryings, "", (() => {
          WT(gT, (() => {
            TT.onRenderingStateCompiled?.(gT)
          }))
        })), gT
      } catch (MT) {
        throw gT.b.Error("Error compiling effect"), MT
      }
    }
  },
  39926: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => HT
    });
    var WT = mT(37219),
      zT = mT(38800),
      MT = mT(39934),
      gT = mT(39938),
      nT = mT(39975);
    class HT {
      static get ShadersRepository() {
        return MT.d.ShadersRepository
      }
      static set ShadersRepository(TT) {
        MT.d.ShadersRepository = TT
      }
      get bJ() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new WT.d), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(TT, UT, mT) {
        let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          MT = arguments.length > 4 ? arguments[4] : void 0,
          nT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          kT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          jT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          lT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          LT = arguments.length > 9 ? arguments[9] : void 0,
          pT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          BT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          ZT = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new WT.d, this.onErrorObservable = new WT.d, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = TT, this._key = pT;
        const cT = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let vT;
        if (UT.attributes) {
          const TT = UT;
          if (this._engine = mT, this._attributesNames = TT.attributes, this._uniformsNames = TT.uniformsNames.concat(TT.samplers), this._samplerList = TT.samplers.slice(), this.defines = TT.defines, this.onError = TT.onError, this.onCompiled = TT.onCompiled, this._fallbacks = TT.fallbacks, this._indexParameters = TT.indexParameters, this._transformFeedbackVaryings = TT.transformFeedbackVaryings || null, this._multiTarget = !!TT.multiTarget, this._shaderLanguage = TT.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!TT.disableParallelShaderCompilation, TT.uniformBuffersNames) {
            this._uniformBuffersNamesList = TT.uniformBuffersNames.slice();
            for (let UT = 0; UT < TT.uniformBuffersNames.length; UT++) this._uniformBuffersNames[TT.uniformBuffersNames[UT]] = UT
          }
          this._processFinalCode = TT.processFinalCode ?? null, this._processCodeAfterIncludes = TT.processCodeAfterIncludes ?? void 0, ZT = TT.extraInitializationsAsync, vT = TT.existingPipelineContext
        } else this._engine = MT, this.defines = null == nT ? "" : nT, this._uniformsNames = mT.concat(zT), this._samplerList = zT ? zT.slice() : [], this._attributesNames = UT, this._uniformBuffersNamesList = [], this._shaderLanguage = BT, this.onError = lT, this.onCompiled = jT, this._indexParameters = LT, this._fallbacks = kT;
        "WEBGL2" === this._engine.shaderPlatformName && (vT = (0, gT.g)(cT, this._engine._gl) ?? vT), this._attributeLocationByName = {}, this.uniqueId = HT._UniqueIdSeed++, vT ? (this._pipelineContext = vT, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, ZT).catch((TT => {
          const UT = TT?.message ?? String(TT),
            mT = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${UT}`);
          TT && "string" === typeof TT.stack && (mT.stack = `${mT.message}\nCaused by: ${TT.stack}`), this._processCompilationErrors(mT)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.bJ || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          WT = arguments.length > 3 ? arguments[3] : void 0;
        WT && await WT(), this._processingContext = mT || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const zT = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: TT ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: MT.d.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: MT.d.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          pWT: this._engine.pWT,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, gT.c)(zT, this.name, this._processFinalCode, ((TT, mT) => {
          this._vertexSourceCode = TT, this._fragmentSourceCode = mT, this._prepareEffect(UT)
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
        return !!this._engine.bJ || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      eB() {
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
        this.isReady() ? TT(this) : (this.onCompileObservable.add((UT => {
          TT(UT)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(TT) {
        (0, nT.i)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (UT => {
          this._processCompilationErrors(UT, TT)
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
            pWT: this._engine.pWT,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(TT, UT, mT, WT) {
        this._isReady = !1, this._vertexSourceCodeOverride = TT, this._fragmentSourceCodeOverride = UT, this.onError = (TT, UT) => {
          WT && WT(UT)
        }, this.onCompiled = () => {
          const TT = this.eB().scenes;
          if (TT)
            for (let UT = 0; UT < TT.length; UT++) TT[UT].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(mT)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(TT) {
        if (this._pipelineContext = TT, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let UT = 0; UT < this._attributesNames.length; UT++) {
            const TT = this._attributesNames[UT];
            this._attributeLocationByName[TT] = this._attributes[UT]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), HT.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const UT = this._pipelineContext;
        this._isReady = !1;
        try {
          const mT = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            WT = mT ? null : this.defines,
            zT = mT ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            MT = mT ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            nT = this._engine;
          this._pipelineContext = (0, gT.f)({
            existingPipelineContext: TT ? UT : null,
            vertex: zT,
            fragment: MT,
            context: "WEBGL2" === nT.shaderPlatformName || "WEBGL1" === nT.shaderPlatformName ? nT._gl : void 0,
            rebuildRebind: (TT, UT, mT, WT) => this._rebuildProgram(TT, UT, mT, WT),
            defines: WT,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: mT,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: mT => {
              UT && !TT && this._engine._deletePipelineContext(UT), mT && this._onRenderingStateCompiled(mT)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(UT)
        } catch (mT) {
          this._processCompilationErrors(mT, UT)
        }
      }
      _getShaderCodeAndErrorLine(TT, UT, mT) {
        const WT = mT ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let zT = null;
        if (UT && TT) {
          const MT = UT.match(WT);
          if (MT && 2 === MT.length) {
            const UT = parseInt(MT[1]),
              WT = TT.split("\n", -1);
            WT.length >= UT && (zT = `Offending line [${UT}] in ${mT?"fragment":"vertex"} code: ${WT[UT-1]}`)
          }
        }
        return [TT, zT]
      }
      _processCompilationErrors(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof TT?.stack ? TT.stack : TT?.message ?? String(TT);
        const mT = this._attributesNames,
          WT = this._fallbacks;
        if (zT.b.Error("Unable to compile effect:"), zT.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), zT.b.Error(`Attributes: ${mT.join(" ")}`), zT.b.Error("Defines:\n" + this.defines), HT.LogShaderCodeOnCompilationError) {
          let TT, UT = null,
            mT = null;
          this._pipelineContext?._getVertexShaderCode() && ([TT, UT] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), TT && (zT.b.Error("Vertex code:"), zT.b.Error(TT))), this._pipelineContext?._getFragmentShaderCode() && ([TT, mT] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), TT && (zT.b.Error("Fragment code:"), zT.b.Error(TT))), UT && zT.b.Error(UT), mT && zT.b.Error(mT)
        }
        zT.b.Error("Error: " + this._compilationError);
        const MT = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        UT && (this._pipelineContext = UT, this._isReady = !0, MT()), WT ? (this._pipelineContext = null, WT.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, zT.b.Error("Trying next fallback."), this.defines = WT.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, MT(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, UT || MT())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(TT, UT) {
        this._engine._bindTexture(this._samplers[TT], UT, TT)
      }
      setTexture(TT, UT) {
        this._engine.setTexture(this._samplers[TT], this._uniforms[TT], UT, TT)
      }
      setTextureArray(TT, UT) {
        const mT = TT + "Ex";
        if (-1 === this._samplerList.indexOf(mT + "0")) {
          const WT = this._samplerList.indexOf(TT);
          for (let TT = 1; TT < UT.length; TT++) {
            const UT = mT + (TT - 1).toString();
            this._samplerList.splice(WT + TT, 0, UT)
          }
          let zT = 0;
          for (const TT of this._samplerList) this._samplers[TT] = zT, zT += 1
        }
        this._engine.setTextureArray(this._samplers[TT], this._uniforms[TT], UT, TT)
      }
      bindUniformBuffer(TT, UT) {
        const mT = this._uniformBuffersNames[UT];
        void 0 === mT || HT._BaseCache[mT] === TT && this._engine._features.useUBOBindingCache || (HT._BaseCache[mT] = TT, this._engine.bindUniformBufferBase(TT, mT, UT))
      }
      bindUniformBlock(TT, UT) {
        this._engine.bindUniformBlock(this._pipelineContext, TT, UT)
      }
      setInt(TT, UT) {
        return this._pipelineContext.setInt(TT, UT), this
      }
      setInt2(TT, UT, mT) {
        return this._pipelineContext.setInt2(TT, UT, mT), this
      }
      setInt3(TT, UT, mT, WT) {
        return this._pipelineContext.setInt3(TT, UT, mT, WT), this
      }
      setInt4(TT, UT, mT, WT, zT) {
        return this._pipelineContext.setInt4(TT, UT, mT, WT, zT), this
      }
      setIntArray(TT, UT) {
        return this._pipelineContext.setIntArray(TT, UT), this
      }
      setIntArray2(TT, UT) {
        return this._pipelineContext.setIntArray2(TT, UT), this
      }
      setIntArray3(TT, UT) {
        return this._pipelineContext.setIntArray3(TT, UT), this
      }
      setIntArray4(TT, UT) {
        return this._pipelineContext.setIntArray4(TT, UT), this
      }
      setUInt(TT, UT) {
        return this._pipelineContext.setUInt(TT, UT), this
      }
      setUInt2(TT, UT, mT) {
        return this._pipelineContext.setUInt2(TT, UT, mT), this
      }
      setUInt3(TT, UT, mT, WT) {
        return this._pipelineContext.setUInt3(TT, UT, mT, WT), this
      }
      setUInt4(TT, UT, mT, WT, zT) {
        return this._pipelineContext.setUInt4(TT, UT, mT, WT, zT), this
      }
      setUIntArray(TT, UT) {
        return this._pipelineContext.setUIntArray(TT, UT), this
      }
      setUIntArray2(TT, UT) {
        return this._pipelineContext.setUIntArray2(TT, UT), this
      }
      setUIntArray3(TT, UT) {
        return this._pipelineContext.setUIntArray3(TT, UT), this
      }
      setUIntArray4(TT, UT) {
        return this._pipelineContext.setUIntArray4(TT, UT), this
      }
      setFloatArray(TT, UT) {
        return this._pipelineContext.setArray(TT, UT), this
      }
      setFloatArray2(TT, UT) {
        return this._pipelineContext.setArray2(TT, UT), this
      }
      setFloatArray3(TT, UT) {
        return this._pipelineContext.setArray3(TT, UT), this
      }
      setFloatArray4(TT, UT) {
        return this._pipelineContext.setArray4(TT, UT), this
      }
      setArray(TT, UT) {
        return this._pipelineContext.setArray(TT, UT), this
      }
      setArray2(TT, UT) {
        return this._pipelineContext.setArray2(TT, UT), this
      }
      setArray3(TT, UT) {
        return this._pipelineContext.setArray3(TT, UT), this
      }
      setArray4(TT, UT) {
        return this._pipelineContext.setArray4(TT, UT), this
      }
      setMatrices(TT, UT) {
        return this._pipelineContext.setMatrices(TT, UT), this
      }
      setMatrix(TT, UT) {
        return this._pipelineContext.setMatrix(TT, UT), this
      }
      setMatrix3x3(TT, UT) {
        return this._pipelineContext.setMatrix3x3(TT, UT), this
      }
      setMatrix2x2(TT, UT) {
        return this._pipelineContext.setMatrix2x2(TT, UT), this
      }
      setFloat(TT, UT) {
        return this._pipelineContext.setFloat(TT, UT), this
      }
      setBool(TT, UT) {
        return this._pipelineContext.setInt(TT, UT ? 1 : 0), this
      }
      setVector2(TT, UT) {
        return this._pipelineContext.setVector2(TT, UT), this
      }
      setFloat2(TT, UT, mT) {
        return this._pipelineContext.setFloat2(TT, UT, mT), this
      }
      setVector3(TT, UT) {
        return this._pipelineContext.setVector3(TT, UT), this
      }
      setFloat3(TT, UT, mT, WT) {
        return this._pipelineContext.setFloat3(TT, UT, mT, WT), this
      }
      setVector4(TT, UT) {
        return this._pipelineContext.setVector4(TT, UT), this
      }
      setQuaternion(TT, UT) {
        return this._pipelineContext.setQuaternion(TT, UT), this
      }
      setFloat4(TT, UT, mT, WT, zT) {
        return this._pipelineContext.setFloat4(TT, UT, mT, WT, zT), this
      }
      setColor3(TT, UT) {
        return this._pipelineContext.setColor3(TT, UT), this
      }
      setColor4(TT, UT, mT) {
        return this._pipelineContext.setColor4(TT, UT, mT), this
      }
      setDirectColor4(TT, UT) {
        return this._pipelineContext.setDirectColor4(TT, UT), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (HT.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, gT.h)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        UT && (MT.d.GetShadersStore(WT)[`${TT}PixelShader`] = UT), mT && (MT.d.GetShadersStore(WT)[`${TT}VertexShader`] = mT)
      }
      static ResetCache() {
        HT._BaseCache = {}
      }
    }
    HT.LogShaderCodeOnCompilationError = !0, HT.PersistentMode = !1, HT.AutomaticallyClearCodeCache = !1, HT._UniqueIdSeed = 0, HT._BaseCache = {}, HT.ShadersStore = MT.d.ShadersStore, HT.IncludesShadersStore = MT.d.IncludesShadersStore
  },
  40263: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => jT,
      c: () => eT,
      d: () => OT
    });
    var WT = mT(39926),
      zT = mT(37188),
      MT = mT(37232),
      gT = mT(40242);
    const nT = new zT.e,
      HT = new zT.e,
      kT = new zT.e,
      jT = {
        KF: () => {},
        eyeAtCamera: !0
      };

    function lT(TT, UT, mT) {
      const WT = mT.cWT(),
        zT = UT.cWT();
      for (let MT = 0; MT < 16; MT++) WT[MT] = zT[MT];
      return WT[12] -= TT.x, WT[13] -= TT.y, WT[14] -= TT.z, mT.markAsUpdated(), mT
    }

    function LT(TT, UT, mT) {
      return (0, MT.l)(UT, HT), lT(TT, HT, kT), (0, MT.l)(kT, mT), mT
    }

    function pT(TT, UT, mT) {
      if (!jT.eyeAtCamera) return LT(TT, UT, mT);
      const WT = mT.cWT(),
        zT = UT.cWT();
      for (let MT = 0; MT < 16; MT++) WT[MT] = zT[MT];
      return WT[12] = 0, WT[13] = 0, WT[14] = 0, mT.markAsUpdated(), mT
    }

    function BT(TT, UT, mT, WT) {
      return (0, MT.t)(pT(TT, UT, WT), mT, WT), WT
    }

    function ZT(TT, UT, mT, WT) {
      return (0, MT.l)(mT, HT), (0, MT.t)(UT, HT, kT), lT(TT, kT, HT), pT(TT, mT, kT), (0, MT.t)(HT, kT, WT), WT
    }

    function cT(TT, UT, mT, WT, zT, gT) {
      return (0, MT.l)(mT, HT), (0, MT.t)(UT, HT, kT), lT(TT, kT, HT), BT(TT, WT, zT, kT), (0, MT.t)(HT, kT, gT), gT
    }

    function vT(TT, UT) {
      const mT = jT.KF();
      if (!mT || nT === UT) return UT;
      nT.updateFlag = UT.updateFlag;
      const WT = mT.floatingOriginOffset;
      switch (TT) {
        case "world":
          return lT(WT, UT, nT);
        case "view":
          return pT(WT, UT, nT);
        case "worldView":
          return ZT(WT, UT, mT.getViewMatrix(), nT);
        case "viewProjection":
          return BT(WT, mT.getViewMatrix(), mT.getProjectionMatrix(), nT);
        case "worldViewProjection":
          return cT(WT, UT, mT.getTransformMatrix(), mT.getViewMatrix(), mT.getProjectionMatrix(), nT);
        default:
          if (TT.startsWith("u_")) {
            const zT = TT.toLowerCase();
            if (zT.startsWith("u_worldviewprojection")) return cT(WT, UT, mT.getTransformMatrix(), mT.getViewMatrix(), mT.getProjectionMatrix(), nT);
            if (zT.startsWith("u_viewprojection")) return BT(WT, mT.getViewMatrix(), mT.getProjectionMatrix(), nT);
            if (zT.startsWith("u_worldview")) return ZT(WT, UT, mT.getViewMatrix(), nT);
            if (zT.startsWith("u_world")) return lT(WT, UT, nT);
            if (zT.startsWith("u_view")) return pT(WT, UT, nT)
          }
          return UT
      }
    }
    const fT = gT.c,
      qT = WT.b,
      iT = fT.prototype._updateMatrixForUniform,
      bT = WT.b.prototype.setMatrix;

    function OT() {
      WT.b.prototype.setMatrix = bT, qT._setMatrixOverride = void 0, fT.prototype._updateMatrixForUniform = iT, fT.prototype._updateMatrixForUniformOverride = void 0
    }

    function eT() {
      qT.prototype._setMatrixOverride = bT, qT.prototype.setMatrix = function(TT, UT) {
        return this._setMatrixOverride(TT, vT(TT, UT)), this
      }, fT.prototype._updateMatrixForUniformOverride = iT, fT.prototype._updateMatrixForUniform = function(TT, UT) {
        this._updateMatrixForUniformOverride(TT, vT(TT, UT))
      }
    }
  },
  40235: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => MT,
      e: () => zT
    });
    var WT = mT(40228);

    function zT(TT, UT) {
      UT.WHITEBALANCE && TT.push("whiteBalanceMatrix"), UT.EXPOSURE && TT.push("exposureLinear"), UT.CONTRAST && TT.push("contrast"), UT.COLORGRADING && TT.push("colorTransformSettings"), (UT.VIGNETTE || UT.DITHER) && TT.push("vInverseScreenSize"), UT.VIGNETTE && (TT.push("vignetteSettings1"), TT.push("vignetteSettings2")), UT.COLORCURVES && (0, WT.d)(TT), UT.DITHER && TT.push("ditherIntensity")
    }

    function MT(TT, UT) {
      UT.COLORGRADING && TT.push("txColorTransform")
    }
  },
  40223: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => wT,
      d: () => yT
    });
    var WT = mT(40095),
      zT = mT(40102),
      MT = mT(37219),
      gT = mT(37367),
      nT = mT(37226),
      HT = mT(37188);
    const kT = [
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
      jT = 1e6 / kT[kT.length - 1][0],
      lT = 150;

    function LT(TT, UT) {
      const mT = Number.isNaN(TT) ? jT : Math.max(TT, jT),
        WT = (0, nT.Clamp)(1e6 / mT, kT[0][0], kT[kT.length - 1][0]);
      let zT = 0,
        MT = kT.length - 1;
      for (; MT - zT > 1;) {
        const TT = zT + MT >> 1;
        kT[TT][0] <= WT ? zT = TT : MT = TT
      }
      const gT = zT,
        [LT, pT, BT, ZT] = kT[gT],
        [cT, vT, fT, qT] = kT[gT + 1],
        iT = (WT - LT) / (cT - LT),
        bT = HT.o.Lerp(new HT.o(pT, BT), new HT.o(vT, fT), iT),
        OT = HT.o.Normalize(new HT.o(1, ZT)),
        eT = HT.o.Normalize(new HT.o(1, qT)),
        YT = HT.o.Normalize(HT.o.Lerp(OT, eT, iT)),
        JT = (0, nT.Clamp)(UT, -150, lT);
      bT.FWT(YT.scale(JT / 3e3));
      const xT = 2 * bT.x - 8 * bT.y + 4,
        dT = 3 * bT.x / xT,
        wT = 2 * bT.y / xT;
      return new HT.p(dT / wT, 1, (1 - dT - wT) / wT)
    }
    const pT = HT.e.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      BT = HT.e.Invert(pT);

    function ZT(TT, UT) {
      const mT = UT > 0 ? TT / UT : 10;
      return (0, nT.Clamp)(mT, .1, 10)
    }

    function cT(TT, UT) {
      const mT = HT.p.TransformNormal(TT, pT),
        WT = HT.p.TransformNormal(UT, pT),
        zT = HT.e.FromArray([ZT(WT.x, mT.x), 0, 0, 0, 0, ZT(WT.y, mT.y), 0, 0, 0, 0, ZT(WT.z, mT.z), 0, 0, 0, 0, 1]);
      return pT.multiply(zT).multiply(BT)
    }
    const vT = new HT.p(.95047, 1, 1.08883),
      fT = HT.e.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(cT(vT, LT(6500, 0))),
      qT = HT.e.Invert(fT),
      iT = HT.p.TransformNormal(new HT.p(1, 1, 1), fT);
    var bT = mT(40122),
      OT = mT(40228);
    let eT = (() => {
      var TT;
      let UT, mT, MT, nT, HT, kT, jT, lT, LT, pT, BT, ZT, cT = [],
        vT = [],
        fT = [],
        qT = [],
        iT = [],
        eT = [],
        YT = [],
        JT = [],
        xT = [],
        dT = [],
        wT = [],
        tT = [],
        aT = [],
        yT = [],
        XT = [],
        IT = [],
        QT = [],
        sT = [],
        FT = [],
        PT = [],
        VT = [],
        uT = [],
        CT = [],
        rT = [];
      return TT = class {
        constructor() {
          this._dirty = !0, this._tempColor = new gT.g(0, 0, 0, 0), this._globalCurve = new gT.g(0, 0, 0, 0), this._highlightsCurve = new gT.g(0, 0, 0, 0), this._midtonesCurve = new gT.g(0, 0, 0, 0), this._shadowsCurve = new gT.g(0, 0, 0, 0), this._positiveCurve = new gT.g(0, 0, 0, 0), this._negativeCurve = new gT.g(0, 0, 0, 0), this._globalHue = (0, WT.k)(this, cT, 30), this._globalDensity = ((0, WT.k)(this, vT), (0, WT.k)(this, fT, 0)), this._globalSaturation = ((0, WT.k)(this, qT), (0, WT.k)(this, iT, 0)), this._globalExposure = ((0, WT.k)(this, eT), (0, WT.k)(this, YT, 0)), this._highlightsHue = ((0, WT.k)(this, JT), (0, WT.k)(this, xT, 30)), this._highlightsDensity = ((0, WT.k)(this, dT), (0, WT.k)(this, wT, 0)), this._highlightsSaturation = ((0, WT.k)(this, tT), (0, WT.k)(this, aT, 0)), this._highlightsExposure = ((0, WT.k)(this, yT), (0, WT.k)(this, XT, 0)), this._midtonesHue = ((0, WT.k)(this, IT), (0, WT.k)(this, QT, 30)), this._midtonesDensity = ((0, WT.k)(this, sT), (0, WT.k)(this, FT, 0)), this._midtonesSaturation = ((0, WT.k)(this, PT), (0, WT.k)(this, VT, 0)), this._midtonesExposure = ((0, WT.k)(this, uT), (0, WT.k)(this, CT, 0)), this._shadowsHue = ((0, WT.k)(this, rT), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
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
        _getColorGradingDataToRef(UT, mT, WT, zT, MT) {
          null != UT && (UT = TT._Clamp(UT, 0, 360), mT = TT._Clamp(mT, -100, 100), WT = TT._Clamp(WT, -100, 100), zT = TT._Clamp(zT, -100, 100), mT = TT._ApplyColorGradingSliderNonlinear(mT), mT *= .5, zT = TT._ApplyColorGradingSliderNonlinear(zT), mT < 0 && (mT *= -1, UT = (UT + 180) % 360), TT._FromHSBToRef(UT, mT, 50 + .25 * zT, MT), MT.scaleToRef(2, MT), MT.a = 1 + .01 * WT)
        }
        static _ApplyColorGradingSliderNonlinear(TT) {
          TT /= 100;
          let UT = Math.abs(TT);
          return UT = Math.pow(UT, 2), TT < 0 && (UT *= -1), UT *= 100, UT
        }
        static _FromHSBToRef(UT, mT, WT, zT) {
          let MT = TT._Clamp(UT, 0, 360);
          const gT = TT._Clamp(mT / 100, 0, 1),
            nT = TT._Clamp(WT / 100, 0, 1);
          if (0 === gT) zT.r = nT, zT.g = nT, zT.b = nT;
          else {
            MT /= 60;
            const TT = Math.floor(MT),
              UT = MT - TT,
              mT = nT * (1 - gT),
              WT = nT * (1 - gT * UT),
              HT = nT * (1 - gT * (1 - UT));
            switch (TT) {
              case 0:
                zT.r = nT, zT.g = HT, zT.b = mT;
                break;
              case 1:
                zT.r = WT, zT.g = nT, zT.b = mT;
                break;
              case 2:
                zT.r = mT, zT.g = nT, zT.b = HT;
                break;
              case 3:
                zT.r = mT, zT.g = WT, zT.b = nT;
                break;
              case 4:
                zT.r = HT, zT.g = mT, zT.b = nT;
                break;
              default:
                zT.r = nT, zT.g = mT, zT.b = WT
            }
          }
          zT.a = 1
        }
        static _Clamp(TT, UT, mT) {
          return Math.min(Math.max(TT, UT), mT)
        }
        clone() {
          return bT.e.Clone((() => new TT), this)
        }
        serialize() {
          return bT.e.Serialize(this)
        }
        _bind(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), TT && (TT.setFloat4(UT, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), TT.setFloat4(mT, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), TT.setFloat4(WT, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const gT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        UT = [(0, zT.L)()], mT = [(0, zT.L)()], MT = [(0, zT.L)()], nT = [(0, zT.L)()], HT = [(0, zT.L)()], kT = [(0, zT.L)()], jT = [(0, zT.L)()], lT = [(0, zT.L)()], LT = [(0, zT.L)()], pT = [(0, zT.L)()], BT = [(0, zT.L)()], ZT = [(0, zT.L)()], (0, WT.h)(null, null, UT, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: TT => "_globalHue" in TT,
            get: TT => TT._globalHue,
            set: (TT, UT) => {
              TT._globalHue = UT
            }
          },
          metadata: gT
        }, cT, vT), (0, WT.h)(null, null, mT, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "_globalDensity" in TT,
            get: TT => TT._globalDensity,
            set: (TT, UT) => {
              TT._globalDensity = UT
            }
          },
          metadata: gT
        }, fT, qT), (0, WT.h)(null, null, MT, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: TT => "_globalSaturation" in TT,
            get: TT => TT._globalSaturation,
            set: (TT, UT) => {
              TT._globalSaturation = UT
            }
          },
          metadata: gT
        }, iT, eT), (0, WT.h)(null, null, nT, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: TT => "_globalExposure" in TT,
            get: TT => TT._globalExposure,
            set: (TT, UT) => {
              TT._globalExposure = UT
            }
          },
          metadata: gT
        }, YT, JT), (0, WT.h)(null, null, HT, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: TT => "_highlightsHue" in TT,
            get: TT => TT._highlightsHue,
            set: (TT, UT) => {
              TT._highlightsHue = UT
            }
          },
          metadata: gT
        }, xT, dT), (0, WT.h)(null, null, kT, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "_highlightsDensity" in TT,
            get: TT => TT._highlightsDensity,
            set: (TT, UT) => {
              TT._highlightsDensity = UT
            }
          },
          metadata: gT
        }, wT, tT), (0, WT.h)(null, null, jT, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: TT => "_highlightsSaturation" in TT,
            get: TT => TT._highlightsSaturation,
            set: (TT, UT) => {
              TT._highlightsSaturation = UT
            }
          },
          metadata: gT
        }, aT, yT), (0, WT.h)(null, null, lT, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: TT => "_highlightsExposure" in TT,
            get: TT => TT._highlightsExposure,
            set: (TT, UT) => {
              TT._highlightsExposure = UT
            }
          },
          metadata: gT
        }, XT, IT), (0, WT.h)(null, null, LT, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: TT => "_midtonesHue" in TT,
            get: TT => TT._midtonesHue,
            set: (TT, UT) => {
              TT._midtonesHue = UT
            }
          },
          metadata: gT
        }, QT, sT), (0, WT.h)(null, null, pT, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "_midtonesDensity" in TT,
            get: TT => TT._midtonesDensity,
            set: (TT, UT) => {
              TT._midtonesDensity = UT
            }
          },
          metadata: gT
        }, FT, PT), (0, WT.h)(null, null, BT, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: TT => "_midtonesSaturation" in TT,
            get: TT => TT._midtonesSaturation,
            set: (TT, UT) => {
              TT._midtonesSaturation = UT
            }
          },
          metadata: gT
        }, VT, uT), (0, WT.h)(null, null, ZT, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: TT => "_midtonesExposure" in TT,
            get: TT => TT._midtonesExposure,
            set: (TT, UT) => {
              TT._midtonesExposure = UT
            }
          },
          metadata: gT
        }, CT, rT), gT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: gT
        })
      })(), TT.PrepareUniforms = OT.d, TT
    })();

    function YT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      TT._bind(UT, mT, WT, zT)
    }
    var JT = mT(40022),
      xT = mT(40235),
      dT = mT(37239);
    let wT = (() => {
        var TT;
        let UT, mT, kT, pT, BT, ZT, vT, OT, dT, wT, tT, aT, yT, XT, IT, QT, sT, FT, PT, VT, uT, CT, rT, KT, ST, GT, NT, ET, hT = [],
          DT = [],
          oT = [],
          AT = [],
          RT = [],
          TU = [],
          UU = [],
          mU = [],
          WU = [],
          zU = [],
          MU = [],
          gU = [],
          nU = [],
          HU = [],
          kU = [],
          jU = [],
          lU = [],
          LU = [],
          pU = [],
          BU = [],
          ZU = [],
          cU = [],
          vU = [],
          fU = [],
          qU = [],
          iU = [],
          bU = [],
          OU = [],
          eU = [],
          YU = [],
          JU = [],
          xU = [],
          dU = [],
          wU = [],
          tU = [],
          aU = [],
          yU = [],
          XU = [],
          IU = [],
          QU = [],
          sU = [],
          FU = [],
          PU = [],
          VU = [],
          uU = [],
          CU = [],
          rU = [],
          KU = [],
          SU = [],
          GU = [],
          NU = [],
          EU = [],
          hU = [],
          DU = [],
          oU = [],
          AU = [];
        return TT = class {
          constructor() {
            this.colorCurves = (0, WT.k)(this, hT, new eT), this._colorCurvesEnabled = ((0, WT.k)(this, DT), (0, WT.k)(this, oT, !1)), this._colorGradingTexture = ((0, WT.k)(this, AT), (0, WT.k)(this, RT, void 0)), this._colorGradingEnabled = ((0, WT.k)(this, TU), (0, WT.k)(this, UU, !1)), this._colorGradingWithGreenDepth = ((0, WT.k)(this, mU), (0, WT.k)(this, WU, !0)), this._colorGradingBGR = ((0, WT.k)(this, zU), (0, WT.k)(this, MU, !0)), this._exposure = ((0, WT.k)(this, gU), (0, WT.k)(this, nU, 1)), this._toneMappingEnabled = ((0, WT.k)(this, HU), (0, WT.k)(this, kU, !1)), this._toneMappingType = ((0, WT.k)(this, jU), (0, WT.k)(this, lU, TT.TONEMAPPING_STANDARD)), this._contrast = ((0, WT.k)(this, LU), (0, WT.k)(this, pU, 1)), this._whiteBalanceEnabled = ((0, WT.k)(this, BU), (0, WT.k)(this, ZU, !1)), this._temperature = ((0, WT.k)(this, cU), (0, WT.k)(this, vU, 6500)), this._tint = ((0, WT.k)(this, fU), (0, WT.k)(this, qU, 0)), this._whiteBalanceMatrix = ((0, WT.k)(this, iU), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, WT.k)(this, bU, 0), this.vignetteCenterX = ((0, WT.k)(this, OU), (0, WT.k)(this, eU, 0)), this.vignetteCenterY = ((0, WT.k)(this, YU), (0, WT.k)(this, JU, 0)), this.vignetteWeight = ((0, WT.k)(this, xU), (0, WT.k)(this, dU, 1.5)), this.vignetteColor = ((0, WT.k)(this, wU), (0, WT.k)(this, tU, new gT.g(0, 0, 0, 0))), this.vignetteCameraFov = ((0, WT.k)(this, aU), (0, WT.k)(this, yU, .5)), this._vignetteBlendMode = ((0, WT.k)(this, XU), (0, WT.k)(this, IU, TT.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, WT.k)(this, QU), (0, WT.k)(this, sU, !1)), this._ditheringEnabled = ((0, WT.k)(this, FU), (0, WT.k)(this, PU, !1)), this._ditheringIntensity = ((0, WT.k)(this, VU), (0, WT.k)(this, uU, 1 / 255)), this._skipFinalColorClamp = ((0, WT.k)(this, CU), (0, WT.k)(this, rU, !1)), this._applyByPostProcess = ((0, WT.k)(this, KU), (0, WT.k)(this, SU, !1)), this._isEnabled = ((0, WT.k)(this, GU), (0, WT.k)(this, NU, !0)), this.outputTextureWidth = ((0, WT.k)(this, EU), (0, WT.k)(this, hU, 0)), this.outputTextureHeight = ((0, WT.k)(this, DU), (0, WT.k)(this, oU, 0)), this.onUpdateParameters = ((0, WT.k)(this, AU), new MT.d)
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
            TT = Number.isNaN(TT) ? jT : Math.max(TT, jT), this._temperature !== TT && (this._temperature = TT, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(TT) {
            TT = (0, nT.Clamp)(TT, -150, lT), this._tint !== TT && (this._tint = TT, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(TT, UT) {
              const mT = cT(LT(TT, UT), iT),
                WT = fT.multiply(mT).multiply(qT);
              return HT.e.GetAsMatrix3x3(WT)
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
          prepareDefines(UT) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return UT.WHITEBALANCE = !1, UT.VIGNETTE = !1, UT.TONEMAPPING = 0, UT.CONTRAST = !1, UT.EXPOSURE = !1, UT.COLORCURVES = !1, UT.COLORGRADING = !1, UT.COLORGRADING3D = !1, UT.DITHER = !1, UT.IMAGEPROCESSING = !1, UT.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(UT.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (UT.WHITEBALANCE = this._whiteBalanceEnabled, UT.VIGNETTE = this.vignetteEnabled, UT.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === TT._VIGNETTEMODE_MULTIPLY, UT.VIGNETTEBLENDMODEOPAQUE = !UT.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case TT.TONEMAPPING_KHR_PBR_NEUTRAL:
                UT.TONEMAPPING = 3;
                break;
              case TT.TONEMAPPING_ACES:
                UT.TONEMAPPING = 2;
                break;
              default:
                UT.TONEMAPPING = 1
            } else UT.TONEMAPPING = 0;
            UT.CONTRAST = 1 !== this.contrast, UT.EXPOSURE = 1 !== this.exposure, UT.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, UT.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, UT.COLORGRADING ? UT.COLORGRADING3D = this.colorGradingTexture.is3D : UT.COLORGRADING3D = !1, UT.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, UT.SAMPLER3DBGRMAP = this.colorGradingBGR, UT.DITHER = this._ditheringEnabled, UT.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, UT.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, UT.IMAGEPROCESSING = UT.WHITEBALANCE || UT.VIGNETTE || !!UT.TONEMAPPING || UT.CONTRAST || UT.EXPOSURE || UT.COLORCURVES || UT.COLORGRADING || UT.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(TT, UT) {
            if (this._whiteBalanceEnabled && TT.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && YT(this.colorCurves, TT), this._vignetteEnabled || this._ditheringEnabled) {
              const mT = 1 / (this.outputTextureWidth || TT.eB().getRenderWidth()),
                WT = 1 / (this.outputTextureHeight || TT.eB().getRenderHeight());
              if (TT.setFloat2("vInverseScreenSize", mT, WT), this._ditheringEnabled && TT.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const zT = null != UT ? UT : WT / mT;
                let MT = Math.tan(.5 * this.vignetteCameraFov),
                  gT = MT * zT;
                const nT = Math.sqrt(gT * MT);
                gT = (0, JT.m)(gT, nT, this.vignetteStretch), MT = (0, JT.m)(MT, nT, this.vignetteStretch), TT.setFloat4("vignetteSettings1", gT, MT, -gT * this.vignetteCenterX, -MT * this.vignetteCenterY);
                const HT = -2 * this.vignetteWeight;
                TT.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, HT)
              }
            }
            if (TT.setFloat("exposureLinear", this.exposure), TT.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              TT.setTexture("txColorTransform", this.colorGradingTexture);
              const UT = this.colorGradingTexture.getSize().height;
              TT.setFloat4("colorTransformSettings", (UT - 1) / UT, .5 / UT, UT, this.colorGradingTexture.level)
            }
          }
          clone() {
            return bT.e.Clone((() => new TT), this)
          }
          serialize() {
            return bT.e.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          UT = [(0, zT.k)()], mT = [(0, zT.L)()], kT = [(0, zT.C)("colorGradingTexture")], pT = [(0, zT.L)()], BT = [(0, zT.L)()], ZT = [(0, zT.L)()], vT = [(0, zT.L)()], OT = [(0, zT.L)()], dT = [(0, zT.L)()], wT = [(0, zT.L)()], tT = [(0, zT.L)()], aT = [(0, zT.L)()], yT = [(0, zT.L)()], XT = [(0, zT.L)()], IT = [(0, zT.L)()], QT = [(0, zT.L)()], sT = [(0, zT.L)()], FT = [(0, zT.n)()], PT = [(0, zT.L)()], VT = [(0, zT.L)()], uT = [(0, zT.L)()], CT = [(0, zT.L)()], rT = [(0, zT.L)()], KT = [(0, zT.L)()], ST = [(0, zT.L)()], GT = [(0, zT.L)()], NT = [(0, zT.L)()], ET = [(0, zT.L)()], (0, WT.h)(null, null, UT, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: TT => "colorCurves" in TT,
              get: TT => TT.colorCurves,
              set: (TT, UT) => {
                TT.colorCurves = UT
              }
            },
            metadata: MT
          }, hT, DT), (0, WT.h)(null, null, mT, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: TT => "_colorCurvesEnabled" in TT,
              get: TT => TT._colorCurvesEnabled,
              set: (TT, UT) => {
                TT._colorCurvesEnabled = UT
              }
            },
            metadata: MT
          }, oT, AT), (0, WT.h)(null, null, kT, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_colorGradingTexture" in TT,
              get: TT => TT._colorGradingTexture,
              set: (TT, UT) => {
                TT._colorGradingTexture = UT
              }
            },
            metadata: MT
          }, RT, TU), (0, WT.h)(null, null, pT, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: TT => "_colorGradingEnabled" in TT,
              get: TT => TT._colorGradingEnabled,
              set: (TT, UT) => {
                TT._colorGradingEnabled = UT
              }
            },
            metadata: MT
          }, UU, mU), (0, WT.h)(null, null, BT, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: TT => "_colorGradingWithGreenDepth" in TT,
              get: TT => TT._colorGradingWithGreenDepth,
              set: (TT, UT) => {
                TT._colorGradingWithGreenDepth = UT
              }
            },
            metadata: MT
          }, WU, zU), (0, WT.h)(null, null, ZT, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: TT => "_colorGradingBGR" in TT,
              get: TT => TT._colorGradingBGR,
              set: (TT, UT) => {
                TT._colorGradingBGR = UT
              }
            },
            metadata: MT
          }, MU, gU), (0, WT.h)(null, null, vT, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: TT => "_exposure" in TT,
              get: TT => TT._exposure,
              set: (TT, UT) => {
                TT._exposure = UT
              }
            },
            metadata: MT
          }, nU, HU), (0, WT.h)(null, null, OT, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: TT => "_toneMappingEnabled" in TT,
              get: TT => TT._toneMappingEnabled,
              set: (TT, UT) => {
                TT._toneMappingEnabled = UT
              }
            },
            metadata: MT
          }, kU, jU), (0, WT.h)(null, null, dT, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: TT => "_toneMappingType" in TT,
              get: TT => TT._toneMappingType,
              set: (TT, UT) => {
                TT._toneMappingType = UT
              }
            },
            metadata: MT
          }, lU, LU), (0, WT.h)(null, null, wT, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: TT => "_contrast" in TT,
              get: TT => TT._contrast,
              set: (TT, UT) => {
                TT._contrast = UT
              }
            },
            metadata: MT
          }, pU, BU), (0, WT.h)(null, null, tT, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: TT => "_whiteBalanceEnabled" in TT,
              get: TT => TT._whiteBalanceEnabled,
              set: (TT, UT) => {
                TT._whiteBalanceEnabled = UT
              }
            },
            metadata: MT
          }, ZU, cU), (0, WT.h)(null, null, aT, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: TT => "_temperature" in TT,
              get: TT => TT._temperature,
              set: (TT, UT) => {
                TT._temperature = UT
              }
            },
            metadata: MT
          }, vU, fU), (0, WT.h)(null, null, yT, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: TT => "_tint" in TT,
              get: TT => TT._tint,
              set: (TT, UT) => {
                TT._tint = UT
              }
            },
            metadata: MT
          }, qU, iU), (0, WT.h)(null, null, XT, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: TT => "vignetteStretch" in TT,
              get: TT => TT.vignetteStretch,
              set: (TT, UT) => {
                TT.vignetteStretch = UT
              }
            },
            metadata: MT
          }, bU, OU), (0, WT.h)(null, null, IT, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: TT => "vignetteCenterX" in TT,
              get: TT => TT.vignetteCenterX,
              set: (TT, UT) => {
                TT.vignetteCenterX = UT
              }
            },
            metadata: MT
          }, eU, YU), (0, WT.h)(null, null, QT, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: TT => "vignetteCenterY" in TT,
              get: TT => TT.vignetteCenterY,
              set: (TT, UT) => {
                TT.vignetteCenterY = UT
              }
            },
            metadata: MT
          }, JU, xU), (0, WT.h)(null, null, sT, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "vignetteWeight" in TT,
              get: TT => TT.vignetteWeight,
              set: (TT, UT) => {
                TT.vignetteWeight = UT
              }
            },
            metadata: MT
          }, dU, wU), (0, WT.h)(null, null, FT, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "vignetteColor" in TT,
              get: TT => TT.vignetteColor,
              set: (TT, UT) => {
                TT.vignetteColor = UT
              }
            },
            metadata: MT
          }, tU, aU), (0, WT.h)(null, null, PT, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: TT => "vignetteCameraFov" in TT,
              get: TT => TT.vignetteCameraFov,
              set: (TT, UT) => {
                TT.vignetteCameraFov = UT
              }
            },
            metadata: MT
          }, yU, XU), (0, WT.h)(null, null, VT, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "_vignetteBlendMode" in TT,
              get: TT => TT._vignetteBlendMode,
              set: (TT, UT) => {
                TT._vignetteBlendMode = UT
              }
            },
            metadata: MT
          }, IU, QU), (0, WT.h)(null, null, uT, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: TT => "_vignetteEnabled" in TT,
              get: TT => TT._vignetteEnabled,
              set: (TT, UT) => {
                TT._vignetteEnabled = UT
              }
            },
            metadata: MT
          }, sU, FU), (0, WT.h)(null, null, CT, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: TT => "_ditheringEnabled" in TT,
              get: TT => TT._ditheringEnabled,
              set: (TT, UT) => {
                TT._ditheringEnabled = UT
              }
            },
            metadata: MT
          }, PU, VU), (0, WT.h)(null, null, rT, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: TT => "_ditheringIntensity" in TT,
              get: TT => TT._ditheringIntensity,
              set: (TT, UT) => {
                TT._ditheringIntensity = UT
              }
            },
            metadata: MT
          }, uU, CU), (0, WT.h)(null, null, KT, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: TT => "_skipFinalColorClamp" in TT,
              get: TT => TT._skipFinalColorClamp,
              set: (TT, UT) => {
                TT._skipFinalColorClamp = UT
              }
            },
            metadata: MT
          }, rU, KU), (0, WT.h)(null, null, ST, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: TT => "_applyByPostProcess" in TT,
              get: TT => TT._applyByPostProcess,
              set: (TT, UT) => {
                TT._applyByPostProcess = UT
              }
            },
            metadata: MT
          }, SU, GU), (0, WT.h)(null, null, GT, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: TT => "_isEnabled" in TT,
              get: TT => TT._isEnabled,
              set: (TT, UT) => {
                TT._isEnabled = UT
              }
            },
            metadata: MT
          }, NU, EU), (0, WT.h)(null, null, NT, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: TT => "outputTextureWidth" in TT,
              get: TT => TT.outputTextureWidth,
              set: (TT, UT) => {
                TT.outputTextureWidth = UT
              }
            },
            metadata: MT
          }, hU, DU), (0, WT.h)(null, null, ET, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "outputTextureHeight" in TT,
              get: TT => TT.outputTextureHeight,
              set: (TT, UT) => {
                TT.outputTextureHeight = UT
              }
            },
            metadata: MT
          }, oU, AU), MT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MT
          })
        })(), TT.TONEMAPPING_STANDARD = 0, TT.TONEMAPPING_ACES = 1, TT.TONEMAPPING_KHR_PBR_NEUTRAL = 2, TT.PrepareUniforms = xT.e, TT.PrepareSamplers = xT.b, TT._VIGNETTEMODE_MULTIPLY = 0, TT._VIGNETTEMODE_OPAQUE = 1, TT
      })(),
      tT = !1;

    function aT(TT) {
      const UT = bT.e.Parse((() => new wT), TT, null, null);
      return void 0 !== TT.vignetteCentreX && (UT.vignetteCenterX = TT.vignetteCentreX), void 0 !== TT.vignetteCentreY && (UT.vignetteCenterY = TT.vignetteCentreY), UT
    }

    function yT() {
      tT || (tT = !0, wT.Parse = aT, bT.e._ImageProcessingConfigurationParser = aT, (0, dT.h)("BABYLON.ImageProcessingConfiguration", wT))
    }
  },
  40242: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT
    });
    var WT = mT(38800),
      zT = mT(40201);
    class MT {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          WT = arguments.length > 3 ? arguments[3] : void 0,
          zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          MT = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = TT, this._noUBO = !TT.supportsUniformBuffers || zT, this._dynamic = mT, this._name = WT ?? "no-name", this._data = UT || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === MT && this._engine._features.trackUbosInFrame || !0 === MT) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.R7 = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.R7 = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
        let UT;
        if (UT = TT <= 2 ? TT : 4, this._uniformLocationPointer % UT !== 0) {
          const TT = this._uniformLocationPointer;
          this._uniformLocationPointer += UT - this._uniformLocationPointer % UT;
          const mT = this._uniformLocationPointer - TT;
          for (let UT = 0; UT < mT; UT++) this._data.push(0)
        }
      }
      addUniform(TT, UT) {
        let mT, WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (WT > 0 && "number" === typeof UT && (this._uniformArraySizes[TT] = {
            strideSize: UT,
            arraySize: WT
          }), void 0 === this._uniformLocations[TT] && (this._uniformNames.push(TT), !this._noUBO)) {
          if (WT > 0) {
            if (UT instanceof Array) throw "addUniform should not be use with Array in UBO: " + TT;
            if (this._fillAlignment(4), 16 == UT) UT *= WT;
            else {
              UT = UT * WT + (4 - UT) * WT
            }
            mT = [];
            for (let TT = 0; TT < UT; TT++) mT.push(0)
          } else {
            if (UT instanceof Array) mT = UT, UT = mT.length;
            else {
              mT = [];
              for (let TT = 0; TT < UT; TT++) mT.push(0)
            }
            this._fillAlignment(UT)
          }
          this._uniformSizes[TT] = UT, this._uniformLocations[TT] = this._uniformLocationPointer, this._uniformLocationPointer += UT;
          for (let TT = 0; TT < UT; TT++) this._data.push(mT[TT]);
          this._needSync = !0
        }
      }
      addMatrix(TT, UT) {
        this.addUniform(TT, Array.prototype.slice.call(UT.cWT()))
      }
      addFloat2(TT, UT, mT) {
        const WT = [UT, mT];
        this.addUniform(TT, WT)
      }
      addFloat3(TT, UT, mT, WT) {
        const zT = [UT, mT, WT];
        this.addUniform(TT, zT)
      }
      addColor3(TT, UT) {
        const mT = [UT.r, UT.g, UT.b];
        this.addUniform(TT, mT)
      }
      addColor4(TT, UT, mT) {
        const WT = [UT.r, UT.g, UT.b, mT];
        this.addUniform(TT, WT)
      }
      addVector3(TT, UT) {
        const mT = [UT.x, UT.y, UT.z];
        this.addUniform(TT, mT)
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
        let UT = 0;
        for (const mT in this._uniformLocations)
          if (TT.push(mT), 10 === ++UT) break;
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
      _buffersEqual(TT, UT) {
        for (let mT = 0; mT < TT.length; ++mT)
          if (TT[mT] !== UT[mT]) return !1;
        return !0
      }
      _copyBuffer(TT, UT) {
        for (let mT = 0; mT < TT.length; ++mT) UT[mT] = TT[mT]
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
        let UT = this._slotByOwner.get(TT);
        if (void 0 === UT && (UT = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(TT, UT), this._ownerCount++, TT._uniformBuffersWithOwnedSlot || (TT._uniformBuffersWithOwnedSlot = []), TT._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(UT, TT._uniformBuffersWithOwnedSlot)), this._slotGeneration[UT] === this._dataGeneration) return this._bufferIndex = UT, this._buffer = this._buffers[UT][0], this.bindUniformBuffer(), this._slotFrameId[UT] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const mT = this._buffers[UT][1];
        this._slotFrameId[UT] === this._currentFrameId && mT && !this._buffersEqual(this._bufferData, mT) && (UT = this._takeFreeSlot(!1)), this._bufferIndex = UT, this._buffer = this._buffers[UT][0], this.bindUniformBuffer();
        const WT = this._buffers[UT][1];
        WT && this._buffersEqual(this._bufferData, WT) || (WT && this._copyBuffer(this._bufferData, WT), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[UT] = this._currentFrameId, this._slotGeneration[UT] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(TT) {
        for (let mT = 0; mT < this._freeSlots.length; ++mT) {
          const UT = this._freeSlots[mT];
          if (this._slotFrameId[UT] !== this._currentFrameId) return TT && (this._freeSlots[mT] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), UT
        }
        this._rebuild();
        const UT = this._buffers.length - 1;
        return TT || this._freeSlots.push(UT), UT
      }
      _releaseOwnerSlot(TT) {
        const UT = this._slotByOwner?.get(TT);
        if (void 0 === UT) return;
        this._slotByOwner.delete(TT);
        const mT = this._ownerListsBySlot.get(UT);
        mT && (this._removeOwnerBacklink(mT), this._ownerListsBySlot.delete(UT)), this._ownerCount--, this._freeSlots.push(UT)
      }
      _removeOwnerBacklink(TT) {
        const UT = TT.indexOf(this); - 1 !== UT && (TT[UT] = TT[TT.length - 1], TT.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(TT, UT, mT) {
        this._checkNewFrame();
        let zT = this._uniformLocations[TT];
        if (void 0 === zT) {
          if (this._buffer) return void WT.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + TT);
          this.addUniform(TT, mT), zT = this._uniformLocations[TT]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let TT = 0; TT < mT; TT++) this._bufferData[zT + TT] = UT[TT];
          this._dataGeneration++
        } else {
          let TT = !1;
          for (let WT = 0; WT < mT; WT++)(16 === mT && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[zT + WT] !== Math.fround(UT[WT])) && (TT = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[zT + WT] = UT[WT]);
          this._needSync = this._needSync || TT, TT && this._dataGeneration++
        }
      }
      updateUniformArray(TT, UT, mT) {
        this._checkNewFrame();
        const MT = this._uniformLocations[TT];
        if (void 0 === MT) return void WT.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const gT = this._uniformArraySizes[TT];
        if (this._dynamic) {
          for (let TT = 0; TT < mT; TT++) this._bufferData[MT + TT] = UT[TT];
          this._dataGeneration++
        } else {
          let TT = !1,
            WT = 0,
            nT = 0;
          for (let HT = 0; HT < mT; HT++)
            if (this._bufferData[MT + 4 * nT + WT] !== zT.j.FloatRound(UT[HT]) && (TT = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[MT + 4 * nT + WT] = UT[HT]), WT++, WT === gT.strideSize) {
              for (; WT < 4; WT++) this._bufferData[MT + 4 * nT + WT] = 0;
              WT = 0, nT++
            } this._needSync = this._needSync || TT, TT && this._dataGeneration++
        }
      }
      _cacheMatrix(TT, UT) {
        this._checkNewFrame();
        const mT = this._valueCache[TT],
          WT = UT.updateFlag;
        return (void 0 === mT || mT !== WT) && (this._valueCache[TT] = WT, !0)
      }
      _updateMatrix3x3ForUniform(TT, UT) {
        for (let mT = 0; mT < 3; mT++) MT._TempBuffer[4 * mT] = UT[3 * mT], MT._TempBuffer[4 * mT + 1] = UT[3 * mT + 1], MT._TempBuffer[4 * mT + 2] = UT[3 * mT + 2], MT._TempBuffer[4 * mT + 3] = 0;
        this.updateUniform(TT, MT._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(TT, UT) {
        this._currentEffect.setMatrix3x3(TT, UT)
      }
      _updateMatrix2x2ForEffect(TT, UT) {
        this._currentEffect.setMatrix2x2(TT, UT)
      }
      _updateMatrix2x2ForUniform(TT, UT) {
        for (let mT = 0; mT < 2; mT++) MT._TempBuffer[4 * mT] = UT[2 * mT], MT._TempBuffer[4 * mT + 1] = UT[2 * mT + 1], MT._TempBuffer[4 * mT + 2] = 0, MT._TempBuffer[4 * mT + 3] = 0;
        this.updateUniform(TT, MT._TempBuffer, 8)
      }
      _updateFloatForEffect(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(TT + mT, UT)
      }
      _updateFloatForUniform(TT, UT) {
        MT._TempBuffer[0] = UT, this.updateUniform(TT, MT._TempBuffer, 1)
      }
      _updateFloat2ForEffect(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(TT + WT, UT, mT)
      }
      _updateFloat2ForUniform(TT, UT, mT) {
        MT._TempBuffer[0] = UT, MT._TempBuffer[1] = mT, this.updateUniform(TT, MT._TempBuffer, 2)
      }
      _updateFloat3ForEffect(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(TT + zT, UT, mT, WT)
      }
      _updateFloat3ForUniform(TT, UT, mT, WT) {
        MT._TempBuffer[0] = UT, MT._TempBuffer[1] = mT, MT._TempBuffer[2] = WT, this.updateUniform(TT, MT._TempBuffer, 3)
      }
      _updateFloat4ForEffect(TT, UT, mT, WT, zT) {
        let MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(TT + MT, UT, mT, WT, zT)
      }
      _updateFloat4ForUniform(TT, UT, mT, WT, zT) {
        MT._TempBuffer[0] = UT, MT._TempBuffer[1] = mT, MT._TempBuffer[2] = WT, MT._TempBuffer[3] = zT, this.updateUniform(TT, MT._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[TT]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(TT + mT, UT);
            break;
          case 3:
            this._currentEffect.setFloatArray3(TT + mT, UT);
            break;
          case 4:
            this._currentEffect.setFloatArray4(TT + mT, UT);
            break;
          default:
            this._currentEffect.setFloatArray(TT + mT, UT)
        }
      }
      _updateFloatArrayForUniform(TT, UT) {
        this.updateUniformArray(TT, UT, UT.length)
      }
      _updateArrayForEffect(TT, UT) {
        this._currentEffect.setArray(TT, UT)
      }
      _updateArrayForUniform(TT, UT) {
        this.updateUniformArray(TT, UT, UT.length)
      }
      _updateIntArrayForEffect(TT, UT) {
        this._currentEffect.setIntArray(TT, UT)
      }
      _updateIntArrayForUniform(TT, UT) {
        MT._TempBufferInt32View.set(UT), this.updateUniformArray(TT, MT._TempBuffer, UT.length)
      }
      _updateUIntArrayForEffect(TT, UT) {
        this._currentEffect.setUIntArray(TT, UT)
      }
      _updateUIntArrayForUniform(TT, UT) {
        MT._TempBufferUInt32View.set(UT), this.updateUniformArray(TT, MT._TempBuffer, UT.length)
      }
      _updateMatrixForEffect(TT, UT) {
        this._currentEffect.setMatrix(TT, UT)
      }
      _updateMatrixForUniform(TT, UT) {
        this._cacheMatrix(TT, UT) && this.updateUniform(TT, UT.cWT(), 16)
      }
      _updateMatricesForEffect(TT, UT) {
        this._currentEffect.setMatrices(TT, UT)
      }
      _updateMatricesForUniform(TT, UT) {
        this.updateUniform(TT, UT, UT.length)
      }
      _updateVector3ForEffect(TT, UT) {
        this._currentEffect.setVector3(TT, UT)
      }
      _updateVector3ForUniform(TT, UT) {
        MT._TempBuffer[0] = UT.x, MT._TempBuffer[1] = UT.y, MT._TempBuffer[2] = UT.z, this.updateUniform(TT, MT._TempBuffer, 3)
      }
      _updateVector4ForEffect(TT, UT) {
        this._currentEffect.setVector4(TT, UT)
      }
      _updateVector4ForUniform(TT, UT) {
        MT._TempBuffer[0] = UT.x, MT._TempBuffer[1] = UT.y, MT._TempBuffer[2] = UT.z, MT._TempBuffer[3] = UT.w, this.updateUniform(TT, MT._TempBuffer, 4)
      }
      _updateColor3ForEffect(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(TT + mT, UT)
      }
      _updateColor3ForUniform(TT, UT) {
        MT._TempBuffer[0] = UT.r, MT._TempBuffer[1] = UT.g, MT._TempBuffer[2] = UT.b, this.updateUniform(TT, MT._TempBuffer, 3)
      }
      _updateColor4ForEffect(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(TT + WT, UT, mT)
      }
      _updateDirectColor4ForEffect(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(TT + mT, UT)
      }
      _updateColor4ForUniform(TT, UT, mT) {
        MT._TempBuffer[0] = UT.r, MT._TempBuffer[1] = UT.g, MT._TempBuffer[2] = UT.b, MT._TempBuffer[3] = mT, this.updateUniform(TT, MT._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(TT, UT) {
        MT._TempBuffer[0] = UT.r, MT._TempBuffer[1] = UT.g, MT._TempBuffer[2] = UT.b, MT._TempBuffer[3] = UT.a, this.updateUniform(TT, MT._TempBuffer, 4)
      }
      _updateIntForEffect(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(TT + mT, UT)
      }
      _updateIntForUniform(TT, UT) {
        MT._TempBufferInt32View[0] = UT, this.updateUniform(TT, MT._TempBuffer, 1)
      }
      _updateInt2ForEffect(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(TT + WT, UT, mT)
      }
      _updateInt2ForUniform(TT, UT, mT) {
        MT._TempBufferInt32View[0] = UT, MT._TempBufferInt32View[1] = mT, this.updateUniform(TT, MT._TempBuffer, 2)
      }
      _updateInt3ForEffect(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(TT + zT, UT, mT, WT)
      }
      _updateInt3ForUniform(TT, UT, mT, WT) {
        MT._TempBufferInt32View[0] = UT, MT._TempBufferInt32View[1] = mT, MT._TempBufferInt32View[2] = WT, this.updateUniform(TT, MT._TempBuffer, 3)
      }
      _updateInt4ForEffect(TT, UT, mT, WT, zT) {
        let MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(TT + MT, UT, mT, WT, zT)
      }
      _updateInt4ForUniform(TT, UT, mT, WT, zT) {
        MT._TempBufferInt32View[0] = UT, MT._TempBufferInt32View[1] = mT, MT._TempBufferInt32View[2] = WT, MT._TempBufferInt32View[3] = zT, this.updateUniform(TT, MT._TempBuffer, 4)
      }
      _updateUIntForEffect(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(TT + mT, UT)
      }
      _updateUIntForUniform(TT, UT) {
        MT._TempBufferUInt32View[0] = UT, this.updateUniform(TT, MT._TempBuffer, 1)
      }
      _updateUInt2ForEffect(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(TT + WT, UT, mT)
      }
      _updateUInt2ForUniform(TT, UT, mT) {
        MT._TempBufferUInt32View[0] = UT, MT._TempBufferUInt32View[1] = mT, this.updateUniform(TT, MT._TempBuffer, 2)
      }
      _updateUInt3ForEffect(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(TT + zT, UT, mT, WT)
      }
      _updateUInt3ForUniform(TT, UT, mT, WT) {
        MT._TempBufferUInt32View[0] = UT, MT._TempBufferUInt32View[1] = mT, MT._TempBufferUInt32View[2] = WT, this.updateUniform(TT, MT._TempBuffer, 3)
      }
      _updateUInt4ForEffect(TT, UT, mT, WT, zT) {
        let MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(TT + MT, UT, mT, WT, zT)
      }
      _updateUInt4ForUniform(TT, UT, mT, WT, zT) {
        MT._TempBufferUInt32View[0] = UT, MT._TempBufferUInt32View[1] = mT, MT._TempBufferUInt32View[2] = WT, MT._TempBufferUInt32View[3] = zT, this.updateUniform(TT, MT._TempBuffer, 4)
      }
      setTexture(TT, UT) {
        this._currentEffect.setTexture(TT, UT)
      }
      setTextureArray(TT, UT) {
        this._currentEffect.setTextureArray(TT, UT)
      }
      bindTexture(TT, UT) {
        this._currentEffect._bindTexture(TT, UT)
      }
      updateUniformDirectly(TT, UT) {
        this.updateUniform(TT, UT, UT.length), this.update()
      }
      bindToEffect(TT, UT) {
        this._currentEffect = TT, this._currentEffectName = UT
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(TT) {
        if (!this._buffers) return this._buffer === TT;
        for (let UT = 0; UT < this._buffers.length; ++UT) {
          if (this._buffers[UT][0] === TT) return this._bufferIndex = UT, this._buffer = TT, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[UT][1] && (this._bufferData.set(this._buffers[UT][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(TT) {
        return void 0 !== this._uniformLocations[TT]
      }
      dispose() {
        if (this._noUBO) return;
        const TT = this._engine._uniformBuffers,
          UT = TT.indexOf(this);
        if (-1 !== UT && (TT[UT] = TT[TT.length - 1], TT.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let TT = 0; TT < this._buffers.length; ++TT) {
            const UT = this._buffers[TT][0];
            this._engine._releaseBuffer(UT)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    MT._MAX_UNIFORM_SIZE = 256, MT._TempBuffer = new Float32Array(MT._MAX_UNIFORM_SIZE), MT._TempBufferInt32View = new Int32Array(MT._TempBuffer.buffer), MT._TempBufferUInt32View = new Uint32Array(MT._TempBuffer.buffer)
  },
  40007: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT
    });
    var WT = mT(40016);
    class zT extends WT.e {
      constructor(TT) {
        super(), this._buffer = TT
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  40106: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => HT,
      g: () => kT
    });
    const WT = "__bjs_serializable__",
      zT = new WeakMap;

    function MT(TT, UT) {
      return Object.prototype.hasOwnProperty.call(TT, UT)
    }
    const gT = function() {
      let TT = Symbol.metadata;
      return TT || (TT = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: TT
      })), TT
    }();

    function nT(TT) {
      return "function" === typeof TT ? TT : TT?.constructor
    }

    function HT(TT) {
      if (!TT) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(gT)}) polyfill must run before decorated classes are evaluated.`);
      return MT(TT, WT) || (TT[WT] = {}), TT[WT]
    }

    function kT(TT) {
      const UT = nT(TT),
        mT = UT ? UT[gT] : void 0;
      if (!mT) return {};
      const HT = zT.get(mT);
      if (HT) return HT;
      const kT = {},
        jT = [];
      let lT = mT;
      for (; lT;) jT.push(lT), lT = Object.getPrototypeOf(lT);
      for (const zT of jT)
        if (MT(zT, WT)) {
          const TT = zT[WT];
          for (const UT in TT) kT[UT] = TT[UT]
        } return zT.set(mT, kT), kT
    }
  },
  40102: (TT, UT, mT) => {
    mT.d(UT, {
      B: () => ZT,
      C: () => nT,
      F: () => jT,
      J: () => lT,
      L: () => gT,
      d: () => qT,
      g: () => MT,
      i: () => fT,
      k: () => pT,
      l: () => HT,
      n: () => BT,
      r: () => kT,
      v: () => cT,
      x: () => LT
    });
    var WT = mT(40106);

    function zT(TT, UT) {
      return (mT, zT) => {
        if (!zT.metadata) return;
        const MT = String(zT.name),
          gT = (0, WT.c)(zT.metadata);
        gT[MT] || (gT[MT] = {
          type: TT,
          sourceName: UT
        })
      }
    }

    function MT(TT) {
      return function(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (mT, WT) => {
          const zT = UT || "_" + String(WT.name);
          return {
            init(TT) {
              return void 0 === TT && zT in this || (this[zT] = TT), TT
            },
            get() {
              return this[zT]
            },
            set(UT) {
              "function" === typeof this[zT]?.equals && this[zT].equals(UT) || this[zT] !== UT && (this[zT] = UT, this[TT]())
            }
          }
        }
      }(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function gT(TT) {
      return zT(0, TT)
    }

    function nT(TT) {
      return zT(1, TT)
    }

    function HT(TT) {
      return zT(2, TT)
    }

    function kT(TT) {
      return zT(3, TT)
    }

    function jT(TT) {
      return zT(4, TT)
    }

    function lT(TT) {
      return zT(5, TT)
    }

    function LT(TT) {
      return zT(6, TT)
    }

    function pT(TT) {
      return zT(7, TT)
    }

    function BT(TT) {
      return zT(8, TT)
    }

    function ZT(TT) {
      return zT(10, TT)
    }

    function cT(TT) {
      return zT(12, TT)
    }

    function vT(TT, UT, mT) {
      const WT = String(UT.name);
      let zT = null;
      const MT = function() {
        if (null === zT) {
          zT = TT, "undefined" !== typeof _native && _native[WT] && (zT = mT(_native[WT], TT));
          const gT = this && (UT.static ? this : Object.getPrototypeOf(this));
          gT?.[WT] === MT && (gT[WT] = zT)
        }
        for (var gT = arguments.length, nT = new Array(gT), HT = 0; HT < gT; HT++) nT[HT] = arguments[HT];
        return zT.apply(this, nT)
      };
      return MT
    }

    function fT(TT, UT) {
      return vT(TT, UT, (TT => TT))
    }

    function qT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (mT, WT) => {
        const zT = UT || "_" + String(WT.name);
        return {
          get() {
            return this[zT]?.value
          },
          set(UT) {
            "function" === typeof this[zT]?.value?.equals && this[zT].value.equals(UT) || this[zT].value !== UT && (this[zT].value = UT, this[TT]())
          }
        }
      }
    }
    fT.filter = function(TT) {
      return (UT, mT) => vT(UT, mT, ((UT, mT) => function() {
        for (var WT = arguments.length, zT = new Array(WT), MT = 0; MT < WT; MT++) zT[MT] = arguments[MT];
        return TT(...zT) ? UT(...zT) : mT.apply(this, zT)
      }))
    }
  },
  40122: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => kT
    });
    var WT = mT(39965),
      zT = mT(40129),
      MT = mT(37367),
      gT = mT(37188),
      nT = mT(40106);
    const HT = function(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const MT = TT();
      zT.b && zT.b.HasTags(UT) && zT.b.AddTagsTo(MT, zT.b.GetTags(UT, !0));
      const gT = (0, nT.g)(MT),
        HT = {};
      for (const zT in gT) {
        const TT = gT[zT],
          nT = UT[zT],
          jT = TT.type;
        if (void 0 !== nT && null !== nT && ("uniqueId" !== zT || kT.AllowLoadingUniqueId)) switch (jT) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof nT.slice ? MT[zT] = nT.slice() : MT[zT] = nT;
            break;
          case 1:
            WT.cloneTexturesOnlyOnce && HT[nT.uniqueId] ? MT[zT] = HT[nT.uniqueId] : (MT[zT] = mT || nT.isRenderTarget ? nT : nT.clone(), HT[nT.uniqueId] = MT[zT]);
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
            MT[zT] = mT ? nT : nT.clone()
        }
      }
      return MT
    };
    class kT {
      static AppendSerializedAnimations(TT, UT) {
        if (TT.animations) {
          UT.animations = [];
          for (let mT = 0; mT < TT.animations.length; mT++) {
            const WT = TT.animations[mT];
            UT.animations.push(WT.serialize())
          }
        }
      }
      static Serialize(TT, UT) {
        UT || (UT = {}), zT.b && (UT.tags = zT.b.GetTags(TT));
        const mT = (0, nT.g)(TT);
        for (const WT in mT) {
          const zT = mT[WT],
            MT = zT.sourceName || WT,
            gT = zT.type,
            nT = TT[WT];
          if (void 0 !== nT && null !== nT && ("uniqueId" !== WT || kT.AllowLoadingUniqueId)) switch (gT) {
            case 0:
              Array.isArray(nT) ? UT[MT] = nT.slice() : UT[MT] = nT;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              UT[MT] = nT.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              UT[MT] = nT.cWT();
              break;
            case 6:
            case 11:
              UT[MT] = nT.id
          }
        }
        return UT
      }
      static ParseProperties(TT, UT, mT, WT) {
        WT || (WT = "");
        const zT = (0, nT.g)(UT);
        for (const nT in zT) {
          const HT = zT[nT],
            jT = TT[HT.sourceName || nT],
            lT = HT.type;
          if (void 0 !== jT && null !== jT && ("uniqueId" !== nT || kT.AllowLoadingUniqueId)) {
            const TT = UT;
            switch (lT) {
              case 0:
                TT[nT] = jT;
                break;
              case 1:
                mT && (TT[nT] = kT._TextureParser(jT, mT, WT));
                break;
              case 2:
                TT[nT] = MT.d.FromArray(jT);
                break;
              case 3:
                TT[nT] = kT._FresnelParametersParser(jT);
                break;
              case 4:
                TT[nT] = gT.o.FromArray(jT);
                break;
              case 5:
                TT[nT] = gT.p.FromArray(jT);
                break;
              case 6:
                mT && (TT[nT] = mT.getLastMeshById(jT));
                break;
              case 7:
                TT[nT] = kT._ColorCurvesParser(jT);
                break;
              case 8:
                TT[nT] = MT.g.FromArray(jT);
                break;
              case 9:
                TT[nT] = kT._ImageProcessingConfigurationParser(jT);
                break;
              case 10:
                TT[nT] = gT.f.FromArray(jT);
                break;
              case 11:
                mT && (TT[nT] = mT.getCameraById(jT));
                break;
              case 12:
                TT[nT] = gT.e.FromArray(jT);
                break;
              case 13:
                TT[nT] = gT.t.FromArray(jT)
            }
          }
        }
      }
      static Parse(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const MT = TT();
        return zT.b && zT.b.AddTagsTo(MT, UT.tags), kT.ParseProperties(UT, MT, mT, WT), MT
      }
      static Clone(TT, UT) {
        return HT(TT, UT, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(TT, UT) {
        return HT(TT, UT, !0)
      }
    }
    kT.AllowLoadingUniqueId = !1, kT._ImageProcessingConfigurationParser = TT => {
      throw (0, WT.k)("ImageProcessingConfiguration")
    }, kT._FresnelParametersParser = TT => {
      throw (0, WT.k)("FresnelParameters")
    }, kT._ColorCurvesParser = TT => {
      throw (0, WT.k)("ColorCurves")
    }, kT._TextureParser = (TT, UT, mT) => {
      throw (0, WT.k)("Texture")
    }
  },
  40039: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => zT
    });
    var WT = mT(39986);
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
      addCount(TT, UT) {
        zT.Enabled && (this._current += TT, this._hasCurrentValue = !0, UT && this._fetchResult())
      }
      beginMonitoring() {
        zT.Enabled && (this._startMonitoringTime = WT.c.Now)
      }
      endMonitoring() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!zT.Enabled) return;
        TT && this.fetchNewFrame();
        const UT = WT.c.Now;
        this._current = UT - this._startMonitoringTime, this._hasCurrentValue = !0, TT && this._fetchResult()
      }
      qY() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const TT = WT.c.Now;
        TT - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = TT, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    zT.Enabled = !0
  },
  40215: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT,
      f: () => WT
    });
    class WT {
      constructor(TT) {
        this.length = 0, this.data = new Array(TT), this._id = WT._GlobalId++
      }
      push(TT) {
        this.data[this.length++] = TT, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(TT) {
        for (let UT = 0; UT < this.length; UT++) TT(this.data[UT])
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
          for (let UT = 0; UT < TT.length; UT++) this.data[this.length++] = (TT.data || TT)[UT]
        }
      }
      indexOf(TT) {
        const UT = this.data.indexOf(TT);
        return UT >= this.length ? -1 : UT
      }
      contains(TT) {
        return -1 !== this.indexOf(TT)
      }
    }
    WT._GlobalId = 0;
    class zT extends WT {
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
          for (let UT = 0; UT < TT.length; UT++) {
            const mT = (TT.data || TT)[UT];
            this.pushNoDuplicate(mT)
          }
        }
      }
    }
  },
  40129: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => zT
    });
    class WT {
      static Eval(TT, UT) {
        return "true" === (TT = TT.match(/\([^()]*\)/g) ? TT.replace(/\([^()]*\)/g, (TT => (TT = TT.slice(1, TT.length - 1), WT._HandleParenthesisContent(TT, UT)))) : WT._HandleParenthesisContent(TT, UT)) || "false" !== TT && WT.Eval(TT, UT)
      }
      static _HandleParenthesisContent(TT, UT) {
        let mT;
        UT = UT || (TT => "true" === TT);
        const zT = TT.split("||");
        for (const MT in zT)
          if (Object.prototype.hasOwnProperty.call(zT, MT)) {
            let TT = WT._SimplifyNegation(zT[MT].trim());
            const gT = TT.split("&&");
            if (gT.length > 1)
              for (let zT = 0; zT < gT.length; ++zT) {
                const MT = WT._SimplifyNegation(gT[zT].trim());
                if (mT = "true" !== MT && "false" !== MT ? "!" === MT[0] ? !UT(MT.substring(1)) : UT(MT) : "true" === MT, !mT) {
                  TT = "false";
                  break
                }
              }
            if (mT || "true" === TT) {
              mT = !0;
              break
            }
            mT = "true" !== TT && "false" !== TT ? "!" === TT[0] ? !UT(TT.substring(1)) : UT(TT) : "true" === TT
          } return mT ? "true" : "false"
      }
      static _SimplifyNegation(TT) {
        return "!true" === (TT = (TT = TT.replace(/^[\s!]+/, (TT => (TT = TT.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? TT = "false" : "!false" === TT && (TT = "true"), TT
      }
    }
    class zT {
      static EnableFor(TT) {
        TT._tags = TT._tags || {}, TT.hasTags = () => zT.HasTags(TT), TT.addTags = UT => zT.AddTagsTo(TT, UT), TT.removeTags = UT => zT.RemoveTagsFrom(TT, UT), TT.matchesTagsQuery = UT => zT.MatchesQuery(TT, UT)
      }
      static DisableFor(TT) {
        delete TT._tags, delete TT.hasTags, delete TT.addTags, delete TT.removeTags, delete TT.matchesTagsQuery
      }
      static HasTags(TT) {
        if (!TT._tags) return !1;
        const UT = TT._tags;
        for (const mT in UT)
          if (Object.prototype.hasOwnProperty.call(UT, mT)) return !0;
        return !1
      }
      static GetTags(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!TT._tags) return null;
        if (UT) {
          const UT = [];
          for (const mT in TT._tags) Object.prototype.hasOwnProperty.call(TT._tags, mT) && !0 === TT._tags[mT] && UT.push(mT);
          return UT.join(" ")
        }
        return TT._tags
      }
      static AddTagsTo(TT, UT) {
        if (!UT) return;
        if ("string" !== typeof UT) return;
        const mT = UT.split(" ");
        for (const WT of mT) zT._AddTagTo(TT, WT)
      }
      static _AddTagTo(TT, UT) {
        "" !== (UT = UT.trim()) && "true" !== UT && "false" !== UT && (UT.match(/[\s]/) || UT.match(/^([!]|([|]|[&]){2})/) || (zT.EnableFor(TT), TT._tags[UT] = !0))
      }
      static RemoveTagsFrom(TT, UT) {
        if (!zT.HasTags(TT)) return;
        const mT = UT.split(" ");
        for (const WT in mT) zT._RemoveTagFrom(TT, mT[WT])
      }
      static _RemoveTagFrom(TT, UT) {
        delete TT._tags[UT]
      }
      static MatchesQuery(TT, UT) {
        return void 0 === UT || ("" === UT ? zT.HasTags(TT) : WT.Eval(UT, (UT => zT.HasTags(TT) && TT._tags[UT])))
      }
    }
  },
  40260: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => MT
    });
    var WT = mT(40257),
      zT = mT(37219);
    class MT {
      constructor(TT) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new zT.d, this._scene = TT
      }
      _prepareBuffers() {
        if (this._vertexBuffers[WT.i.PositionKind]) return;
        const TT = [];
        TT.push(1, 1), TT.push(-1, 1), TT.push(-1, -1), TT.push(1, -1), this._vertexBuffers[WT.i.PositionKind] = new WT.i(this._scene.eB(), TT, WT.i.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const TT = [];
        TT.push(0), TT.push(1), TT.push(2), TT.push(0), TT.push(2), TT.push(3), this._indexBuffer = this._scene.eB().createIndexBuffer(TT)
      }
      _getActivePostProcesses(TT) {
        const UT = this._activePostProcesses;
        UT.length = 0;
        for (let mT = 0; mT < TT.length; mT++) {
          const WT = TT[mT];
          WT && UT.push(WT)
        }
        return UT
      }
      _rebuild() {
        const TT = this._vertexBuffers[WT.i.PositionKind];
        TT && (TT._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const mT = this._scene.activeCamera;
        return !!mT && (UT = UT || this._getActivePostProcesses(mT._postProcesses), !(!UT || 0 === UT.length || !this._scene.postProcessesEnabled) && (UT[0].activate(mT, TT, null !== UT && void 0 !== UT), !0))
      }
      directRender(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          MT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          gT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : TT.length;
        const nT = this._scene.eB();
        for (let HT = 0; HT < gT; HT++) {
          HT < TT.length - 1 ? TT[HT + 1].activate(this._scene.activeCamera || this._scene, UT?.texture) : (UT ? nT.bindFramebuffer(UT, WT, void 0, void 0, mT, zT) : MT || nT.restoreDefaultFramebuffer(), nT._debugInsertMarker?.(`post process ${TT[HT].name} output`));
          const gT = TT[HT],
            kT = gT.apply();
          kT && (gT.onBeforeRenderObservable.notifyObservers(kT), this._prepareBuffers(), nT.bindBuffers(this._vertexBuffers, this._indexBuffer, kT), nT.drawElementsType(0, 0, 6), gT.onAfterRenderObservable.notifyObservers(kT))
        }
        nT.setDepthBuffer(!0), nT.setDepthWrite(!0)
      }
      _finalizeFrame(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const MT = this._scene.activeCamera;
        if (!MT) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (WT = WT || this._getActivePostProcesses(MT._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const gT = this._scene.eB();
        for (let nT = 0, HT = WT.length; nT < HT; nT++) {
          const kT = WT[nT];
          if (nT < HT - 1 ? kT._outputTexture = WT[nT + 1].activate(MT, UT?.texture) : (UT ? (gT.bindFramebuffer(UT, mT, void 0, void 0, zT), kT._outputTexture = UT) : (gT.restoreDefaultFramebuffer(), kT._outputTexture = null), gT._debugInsertMarker?.(`post process ${WT[nT].name} output`)), TT) break;
          const jT = kT.apply();
          jT && (kT.onBeforeRenderObservable.notifyObservers(jT), this._prepareBuffers(), gT.bindBuffers(this._vertexBuffers, this._indexBuffer, jT), gT.drawElementsType(0, 0, 6), kT.onAfterRenderObservable.notifyObservers(jT))
        }
        gT.setDepthBuffer(!0), gT.setDepthWrite(!0), gT.setAlphaMode(0)
      }
      dispose() {
        const TT = this._vertexBuffers[WT.i.PositionKind];
        TT && (TT.dispose(), this._vertexBuffers[WT.i.PositionKind] = null), this._indexBuffer && (this._scene.eB()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  40274: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => kT
    });
    var WT = mT(40215),
      zT = mT(37188);
    const MT = [],
      gT = [];
    let nT = !1;

    function HT(TT, UT) {
      for (; TT.length < UT;) TT.push(void 0)
    }
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
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = TT, this._opaqueSubMeshes = new WT.f(256), this._transparentSubMeshes = new WT.f(256), this._alphaTestSubMeshes = new WT.f(256), this._depthOnlySubMeshes = new WT.f(256), this._particleSystems = new WT.f(256), this._spriteManagers = new WT.f(256), this._empty = !0, this._edgesRenderers = new WT.c(16), this.disableDepthPrePass = !1, this._scene = UT, this.opaqueSortCompareFn = mT, this.alphaTestSortCompareFn = zT, this.transparentSortCompareFn = MT
      }
      render(TT, UT, mT, WT) {
        let zT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          MT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          gT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          nT = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          HT = arguments.length > 8 ? arguments[8] : void 0;
        if (TT) return void TT(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const kT = this._scene.eB();
        zT && 0 !== this._depthOnlySubMeshes.length && (kT.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), kT.setColorWrite(!0)), MT && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), gT && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const jT = kT.getStencilBuffer();
        if (kT.setStencilBuffer(!1), UT && this._renderSprites(), mT && this._renderParticles(WT), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), nT && (HT || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (kT.setStencilBuffer(jT), HT) HT(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const TT = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            TT.length && this._renderTransparent(TT)
          } else this._renderTransparent(this._transparentSubMeshes);
          kT.setAlphaMode(0)
        }
        if (kT.setStencilBuffer(!1), MT && this._edgesRenderers.length) {
          for (let TT = 0; TT < this._edgesRenderers.length; TT++) this._edgesRenderers.data[TT].render();
          kT.setAlphaMode(0)
        }
        kT.setStencilBuffer(jT)
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
      static _RenderSorted(TT, UT, mT, WT, MT) {
        let jT, lT = 0;
        const LT = mT ? mT.globalPosition : kT._ZeroVector;
        if (WT && UT !== kT.PainterSortCompare)
          for (; lT < TT.length; lT++) jT = TT.data[lT], jT._alphaIndex = jT.getMesh().alphaIndex, jT._distanceToCamera = zT.p.Distance(jT.rV().rWT.centerWorld, LT);
        const pT = TT.length;
        let BT = TT.data;
        const ZT = pT !== BT.length && !nT;
        if (ZT) {
          for (nT = !0, HT(gT, pT), lT = 0; lT < pT; lT++) gT[lT] = BT[lT];
          BT = gT
        } else pT !== BT.length && (BT = BT.slice(0, pT));
        try {
          UT && kT._StableSort(BT, pT, UT), kT._DrawSorted(BT, pT, WT, MT)
        } finally {
          ZT && (gT.fill(void 0, 0, pT), nT = !1)
        }
      }
      static _DrawSorted(TT, UT, mT, WT) {
        let zT;
        const MT = TT[0].getMesh().KF();
        for (let gT = 0; gT < UT; gT++) {
          if (zT = TT[gT], MT._activeMeshesFrozenButKeepClipping && !zT.isInFrustum(MT._frustumPlanes)) continue;
          let UT = !1;
          if (mT) {
            const TT = zT.wB();
            if (TT && TT.needDepthPrePass && !WT) {
              UT = !0;
              const mT = TT.KF().eB();
              mT.setColorWrite(!1), mT.setAlphaMode(0), zT.render(!1), mT.setColorWrite(!0)
            }
          }
          const nT = zT._renderingMesh;
          !UT && nT._renderRunFollower(zT, mT) || zT.render(mT)
        }
      }
      static _StableSort(TT, UT, mT) {
        for (let WT = 0; WT < UT; WT += 16) {
          const zT = Math.min(WT + 16, UT);
          for (let UT = WT + 1; UT < zT; UT++) {
            const zT = TT[UT];
            let MT = WT,
              gT = UT;
            for (; MT < gT;) {
              const UT = MT + gT >>> 1;
              mT(zT, TT[UT]) < 0 ? gT = UT : MT = UT + 1
            }
            for (let mT = UT; mT > MT; mT--) TT[mT] = TT[mT - 1];
            TT[MT] = zT
          }
        }
        if (!(UT <= 16)) {
          HT(MT, UT);
          try {
            let WT = TT,
              zT = MT;
            for (let TT = 16; TT < UT; TT *= 2) {
              for (let gT = 0; gT < UT; gT += 2 * TT) {
                const MT = Math.min(gT + TT, UT),
                  nT = Math.min(gT + 2 * TT, UT);
                let HT = gT,
                  kT = MT,
                  jT = gT;
                if (MT < nT && mT(WT[MT], WT[MT - 1]) < 0)
                  for (; HT < MT && kT < nT;) zT[jT++] = mT(WT[kT], WT[HT]) < 0 ? WT[kT++] : WT[HT++];
                for (; HT < MT;) zT[jT++] = WT[HT++];
                for (; kT < nT;) zT[jT++] = WT[kT++]
              }
              const MT = zT;
              zT = WT, WT = MT
            }
            if (WT !== TT)
              for (let mT = 0; mT < UT; mT++) TT[mT] = WT[mT]
          } finally {
            MT.fill(void 0, 0, UT)
          }
        }
      }
      static defaultTransparentSortCompare(TT, UT) {
        return TT._alphaIndex > UT._alphaIndex ? 1 : TT._alphaIndex < UT._alphaIndex ? -1 : kT.backToFrontSortCompare(TT, UT)
      }
      static backToFrontSortCompare(TT, UT) {
        return TT._distanceToCamera < UT._distanceToCamera ? 1 : TT._distanceToCamera > UT._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(TT, UT) {
        return TT._distanceToCamera < UT._distanceToCamera ? -1 : TT._distanceToCamera > UT._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(TT, UT) {
        const mT = TT.getMesh(),
          WT = UT.getMesh();
        return mT.material && WT.material ? mT.material.uniqueId - WT.material.uniqueId : mT.uniqueId - WT.uniqueId
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
      dispatch(TT, UT, mT) {
        void 0 === UT && (UT = TT.getMesh()), void 0 === mT && (mT = TT.wB()), null !== mT && void 0 !== mT && (mT.needAlphaBlendingForMesh(UT) ? this._transparentSubMeshes.push(TT) : mT.needAlphaTestingForMesh(UT) ? (mT.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(TT), this._alphaTestSubMeshes.push(TT)) : (mT.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(TT), this._opaqueSubMeshes.push(TT)), UT._renderingGroup = this, UT._edgesRenderer && UT.isEnabled() && UT.isVisible && UT._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(UT._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(TT) {
        this._spriteManagers.push(TT), this._empty = !1
      }
      dispatchParticles(TT) {
        this._particleSystems.push(TT), this._empty = !1
      }
      _renderParticles(TT) {
        if (0 === this._particleSystems.length) return;
        const UT = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let mT = 0; mT < this._particleSystems.length; mT++) {
          const WT = this._particleSystems.data[mT];
          if (0 === (UT && UT.layerMask & WT.layerMask)) continue;
          const zT = WT.emitter;
          zT.position && TT && -1 === TT.indexOf(zT) || this._scene._activeParticles.addCount(WT.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const TT = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let UT = 0; UT < this._spriteManagers.length; UT++) {
          const mT = this._spriteManagers.data[UT];
          0 !== (TT && TT.layerMask & mT.layerMask) && mT.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    kT._ZeroVector = zT.p.Zero()
  },
  40270: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => MT
    });
    var WT = mT(40274);
    class zT {}
    class MT {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(TT) {
        this._disableDepthPrePass = TT;
        for (const UT of this._renderingGroups) UT.disableDepthPrePass = TT
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(TT) {
        TT !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = TT, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const TT of this._scene.meshes)
          if (TT.rY)
            for (const UT of TT.rY) UT._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const TT of this._scene.spriteManagers) TT._wasDispatched = !1;
        for (const TT of this._scene.EY) TT._wasDispatched = !1
      }
      constructor(TT) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new zT, this._maintainStateBetweenFrames = !1, this._scene = TT;
        for (let UT = MT.MIN_RENDERINGGROUPS; UT < MT.MAX_RENDERINGGROUPS; UT++) this._autoClearDepthStencil[UT] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(TT) {
        const UT = TT || 0;
        return this._prepareRenderingGroup(UT), this._renderingGroups[UT]
      }
      _clearDepthStencilBuffer() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.eB().clear(null, !1, TT, UT), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(TT, UT, mT, WT) {
        let zT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          gT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          nT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          HT = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          kT = arguments.length > 8 ? arguments[8] : void 0,
          jT = arguments.length > 9 ? arguments[9] : void 0;
        const lT = this._renderingGroupInfo;
        lT.XZ = this._scene, lT.camera = this._scene.activeCamera, lT.renderingManager = this;
        const LT = jT ?? this._scene.spriteManagers;
        if (LT && WT)
          for (let MT = 0; MT < LT.length; MT++) {
            const TT = LT[MT];
            this.dispatchSprites(TT)
          }
        for (let pT = MT.MIN_RENDERINGGROUPS; pT < MT.MAX_RENDERINGGROUPS; pT++) {
          this._depthStencilBufferAlreadyCleaned = pT === MT.MIN_RENDERINGGROUPS;
          const jT = this._renderingGroups[pT];
          if (!jT || jT._empty) continue;
          const LT = 1 << pT;
          if (lT.renderingGroupId = pT, this._scene.onBeforeRenderingGroupObservable.notifyObservers(lT, LT), MT.AUTOCLEAR) {
            const TT = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(pT) : this._autoClearDepthStencil[pT];
            TT && TT.autoClear && this._clearDepthStencilBuffer(TT.depth, TT.stencil)
          }
          for (let TT = 0, UT = this._scene._beforeRenderingGroupDrawStage; TT < UT.length; TT++) {
            UT[TT].action(pT)
          }
          jT.render(TT, WT, mT, UT, zT, gT, nT, HT, kT);
          for (let TT = 0, UT = this._scene._afterRenderingGroupDrawStage; TT < UT.length; TT++) {
            UT[TT].action(pT)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(lT, LT)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let TT = MT.MIN_RENDERINGGROUPS; TT < MT.MAX_RENDERINGGROUPS; TT++) {
            const UT = this._renderingGroups[TT];
            UT && UT.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let TT = MT.MIN_RENDERINGGROUPS; TT < MT.MAX_RENDERINGGROUPS; TT++) {
            const UT = this._renderingGroups[TT];
            UT && UT.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let TT = MT.MIN_RENDERINGGROUPS; TT < MT.MAX_RENDERINGGROUPS; TT++) {
          const UT = this._renderingGroups[TT];
          UT && UT.dispose()
        }
      }
      _prepareRenderingGroup(TT) {
        void 0 === this._renderingGroups[TT] && (this._renderingGroups[TT] = new WT.b(TT, this._scene, this._customOpaqueSortCompareFn[TT], this._customAlphaTestSortCompareFn[TT], this._customTransparentSortCompareFn[TT]), this._renderingGroups[TT].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(TT) {
        this.maintainStateBetweenFrames && TT._wasDispatched || (TT._wasDispatched = !0, this.getRenderingGroup(TT.renderingGroupId).dispatchSprites(TT))
      }
      dispatchParticles(TT) {
        this.maintainStateBetweenFrames && TT._wasDispatched || (TT._wasDispatched = !0, this.getRenderingGroup(TT.renderingGroupId).dispatchParticles(TT))
      }
      dispatch(TT, UT, mT) {
        void 0 === UT && (UT = TT.getMesh()), this.maintainStateBetweenFrames && TT._wasDispatched || (TT._wasDispatched = !0, this.getRenderingGroup(UT.renderingGroupId).dispatch(TT, UT, mT))
      }
      setRenderingOrder(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[TT] = UT, this._customAlphaTestSortCompareFn[TT] = mT, this._customTransparentSortCompareFn[TT] = WT, this._renderingGroups[TT]) {
          const UT = this._renderingGroups[TT];
          UT.opaqueSortCompareFn = this._customOpaqueSortCompareFn[TT], UT.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[TT], UT.transparentSortCompareFn = this._customTransparentSortCompareFn[TT]
        }
      }
      setRenderingAutoClearDepthStencil(TT, UT) {
        let mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          WT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[TT] = {
          autoClear: UT,
          depth: mT,
          stencil: WT
        }
      }
      getAutoClearDepthStencilSetup(TT) {
        return this._autoClearDepthStencil[TT]
      }
    }
    MT.MAX_RENDERINGGROUPS = 4, MT.MIN_RENDERINGGROUPS = 0, MT.AUTOCLEAR = !0
  },
  39994: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT
    });
    class WT {
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
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[UT] !== TT && (TT ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[UT] = TT, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(TT, UT, mT, WT) {
        this._blendConstants[0] === TT && this._blendConstants[1] === UT && this._blendConstants[2] === mT && this._blendConstants[3] === WT || (this._blendConstants[0] = TT, this._blendConstants[1] = UT, this._blendConstants[2] = mT, this._blendConstants[3] = WT, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(TT, UT, mT, WT) {
        const zT = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[zT + 0] === TT && this._blendFunctionParameters[zT + 1] === UT && this._blendFunctionParameters[zT + 2] === mT && this._blendFunctionParameters[zT + 3] === WT || (this._blendFunctionParameters[zT + 0] = TT, this._blendFunctionParameters[zT + 1] = UT, this._blendFunctionParameters[zT + 2] = mT, this._blendFunctionParameters[zT + 3] = WT, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(TT, UT) {
        const mT = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[mT + 0] === TT && this._blendEquationParameters[mT + 1] === UT || (this._blendEquationParameters[mT + 0] = TT, this._blendEquationParameters[mT + 1] = UT, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== UT && (this._numTargets = UT, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== mT && (this._blendDisabledTargetsMask = mT, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (TT.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === UT || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (UT > 1 && 0 !== mT && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & mT) ? TT.enable(TT.BLEND) : TT.disable(TT.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (TT.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (TT.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const WT = TT;
        if (this._isAlphaBlendDirty) {
          for (let zT = 0; zT < UT; zT++) {
            const UT = zT < this._numTargetEnabled ? zT : 0;
            this._alphaBlend[UT] && 0 === (mT & 1 << zT) ? WT.enableIndexed(TT.BLEND, zT) : WT.disableIndexed(TT.BLEND, zT)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let TT = 0; TT < UT; TT++) {
            const UT = TT < this._numTargetEnabled ? 4 * TT : 0;
            WT.blendFuncSeparateIndexed(TT, this._blendFunctionParameters[UT + 0], this._blendFunctionParameters[UT + 1], this._blendFunctionParameters[UT + 2], this._blendFunctionParameters[UT + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let TT = 0; TT < UT; TT++) {
            const UT = TT < this._numTargetEnabled ? 2 * TT : 0;
            WT.blendEquationSeparateIndexed(TT, this._blendEquationParameters[UT + 0], this._blendEquationParameters[UT + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(TT, UT) {
        let mT = 32774;
        switch (TT) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, UT);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, UT);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, UT);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, UT);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, UT);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, UT);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, UT);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, UT);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, UT);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, UT);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, UT);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, UT);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, UT);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, UT);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, UT);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, UT);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, UT), mT = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, UT), mT = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, UT);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, UT)
        }
        this.setAlphaEquationParameters(mT, mT, UT)
      }
    }
  },
  40305: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT
    });
    class WT {}
    WT._IsPickingAvailable = !1
  },
  40198: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => nm,
      i: () => Mm
    });
    var WT = mT(40201),
      zT = mT(39975),
      MT = mT(39986),
      gT = mT(37219),
      nT = mT(40215);
    class HT {
      constructor() {
        this._count = 0, this._data = {}
      }
      Gw(TT) {
        this.clear(), TT.forEach(((TT, UT) => this.add(TT, UT)))
      }
      get(TT) {
        const UT = this._data[TT];
        if (void 0 !== UT) return UT
      }
      getOrAddWithFactory(TT, UT) {
        let mT = this.get(TT);
        return void 0 !== mT || (mT = UT(TT), mT && this.add(TT, mT)), mT
      }
      getOrAdd(TT, UT) {
        const mT = this.get(TT);
        return void 0 !== mT ? mT : (this.add(TT, UT), UT)
      }
      contains(TT) {
        return void 0 !== this._data[TT]
      }
      add(TT, UT) {
        return void 0 === this._data[TT] && (this._data[TT] = UT, ++this._count, !0)
      }
      set(TT, UT) {
        return void 0 !== this._data[TT] && (this._data[TT] = UT, !0)
      }
      getAndRemove(TT) {
        const UT = this.get(TT);
        return void 0 !== UT ? (delete this._data[TT], --this._count, UT) : null
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
        for (const UT in this._data) {
          TT(UT, this._data[UT])
        }
      }
      first(TT) {
        for (const UT in this._data) {
          const mT = TT(UT, this._data[UT]);
          if (mT) return mT
        }
        return null
      }
    }
    var kT = mT(40129),
      jT = mT(37188),
      lT = mT(40223),
      LT = mT(40242),
      pT = mT(40251);
    class BT {
      constructor(TT, UT, mT, WT, zT, MT) {
        this.source = TT, this.pointerX = UT, this.pointerY = mT, this.meshUnderPointer = WT, this.sourceEvent = zT, this.additionalData = MT
      }
      static CreateNew(TT, UT, mT) {
        const WT = TT.KF();
        return new BT(TT, WT.pointerX, WT.pointerY, WT.meshUnderPointer || TT, UT, mT)
      }
      static CreateNewFromSprite(TT, UT, mT, WT) {
        return new BT(TT, UT.pointerX, UT.pointerY, UT.meshUnderPointer, mT, WT)
      }
      static CreateNewFromScene(TT, UT) {
        return new BT(null, TT.pointerX, TT.pointerY, TT.meshUnderPointer, UT)
      }
      static CreateNewFromPrimitive(TT, UT, mT, WT) {
        return new BT(TT, UT.x, UT.y, null, mT, WT)
      }
    }
    var ZT = mT(40260),
      cT = mT(40263),
      vT = mT(40270),
      fT = mT(40283),
      qT = mT(39946),
      iT = mT(37216),
      bT = mT(39965),
      OT = mT(40288);
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
            const UT = parseInt(TT);
            if (UT >= 1 && UT <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(TT) {
        for (const UT in eT.Triggers)
          if (Object.prototype.hasOwnProperty.call(eT.Triggers, UT)) {
            if (parseInt(UT) === TT) return !0
          } return !1
      }
    }
    eT.Triggers = {};
    var YT, JT, xT, dT, wT, tT, aT, yT = mT(40290);
    ! function(TT) {
      TT[TT.Generic = 0] = "Generic", TT[TT.Keyboard = 1] = "Keyboard", TT[TT.Mouse = 2] = "Mouse", TT[TT.Touch = 3] = "Touch", TT[TT.DualShock = 4] = "DualShock", TT[TT.Xbox = 5] = "Xbox", TT[TT.Switch = 6] = "Switch", TT[TT.DualSense = 7] = "DualSense"
    }(YT || (YT = {})),
    function(TT) {
      TT[TT.Horizontal = 0] = "Horizontal", TT[TT.Vertical = 1] = "Vertical", TT[TT.LeftClick = 2] = "LeftClick", TT[TT.MiddleClick = 3] = "MiddleClick", TT[TT.RightClick = 4] = "RightClick", TT[TT.BrowserBack = 5] = "BrowserBack", TT[TT.BrowserForward = 6] = "BrowserForward", TT[TT.MouseWheelX = 7] = "MouseWheelX", TT[TT.MouseWheelY = 8] = "MouseWheelY", TT[TT.MouseWheelZ = 9] = "MouseWheelZ", TT[TT.Move = 12] = "Move"
    }(JT || (JT = {})),
    function(TT) {
      TT[TT.Horizontal = 0] = "Horizontal", TT[TT.Vertical = 1] = "Vertical", TT[TT.LeftClick = 2] = "LeftClick", TT[TT.MiddleClick = 3] = "MiddleClick", TT[TT.RightClick = 4] = "RightClick", TT[TT.BrowserBack = 5] = "BrowserBack", TT[TT.BrowserForward = 6] = "BrowserForward", TT[TT.MouseWheelX = 7] = "MouseWheelX", TT[TT.MouseWheelY = 8] = "MouseWheelY", TT[TT.MouseWheelZ = 9] = "MouseWheelZ", TT[TT.DeltaHorizontal = 10] = "DeltaHorizontal", TT[TT.DeltaVertical = 11] = "DeltaVertical"
    }(xT || (xT = {})),
    function(TT) {
      TT[TT.Cross = 0] = "Cross", TT[TT.Circle = 1] = "Circle", TT[TT.Square = 2] = "Square", TT[TT.Triangle = 3] = "Triangle", TT[TT.L1 = 4] = "L1", TT[TT.R1 = 5] = "R1", TT[TT.L2 = 6] = "L2", TT[TT.R2 = 7] = "R2", TT[TT.Share = 8] = "Share", TT[TT.Options = 9] = "Options", TT[TT.L3 = 10] = "L3", TT[TT.R3 = 11] = "R3", TT[TT.DPadUp = 12] = "DPadUp", TT[TT.DPadDown = 13] = "DPadDown", TT[TT.DPadLeft = 14] = "DPadLeft", TT[TT.DPadRight = 15] = "DPadRight", TT[TT.Home = 16] = "Home", TT[TT.TouchPad = 17] = "TouchPad", TT[TT.LStickXAxis = 18] = "LStickXAxis", TT[TT.LStickYAxis = 19] = "LStickYAxis", TT[TT.RStickXAxis = 20] = "RStickXAxis", TT[TT.RStickYAxis = 21] = "RStickYAxis"
    }(dT || (dT = {})),
    function(TT) {
      TT[TT.Cross = 0] = "Cross", TT[TT.Circle = 1] = "Circle", TT[TT.Square = 2] = "Square", TT[TT.Triangle = 3] = "Triangle", TT[TT.L1 = 4] = "L1", TT[TT.R1 = 5] = "R1", TT[TT.L2 = 6] = "L2", TT[TT.R2 = 7] = "R2", TT[TT.Create = 8] = "Create", TT[TT.Options = 9] = "Options", TT[TT.L3 = 10] = "L3", TT[TT.R3 = 11] = "R3", TT[TT.DPadUp = 12] = "DPadUp", TT[TT.DPadDown = 13] = "DPadDown", TT[TT.DPadLeft = 14] = "DPadLeft", TT[TT.DPadRight = 15] = "DPadRight", TT[TT.Home = 16] = "Home", TT[TT.TouchPad = 17] = "TouchPad", TT[TT.LStickXAxis = 18] = "LStickXAxis", TT[TT.LStickYAxis = 19] = "LStickYAxis", TT[TT.RStickXAxis = 20] = "RStickXAxis", TT[TT.RStickYAxis = 21] = "RStickYAxis"
    }(wT || (wT = {})),
    function(TT) {
      TT[TT.A = 0] = "A", TT[TT.B = 1] = "B", TT[TT.X = 2] = "X", TT[TT.Y = 3] = "Y", TT[TT.LB = 4] = "LB", TT[TT.RB = 5] = "RB", TT[TT.LT = 6] = "LT", TT[TT.RT = 7] = "RT", TT[TT.Back = 8] = "Back", TT[TT.Start = 9] = "Start", TT[TT.LS = 10] = "LS", TT[TT.RS = 11] = "RS", TT[TT.DPadUp = 12] = "DPadUp", TT[TT.DPadDown = 13] = "DPadDown", TT[TT.DPadLeft = 14] = "DPadLeft", TT[TT.DPadRight = 15] = "DPadRight", TT[TT.Home = 16] = "Home", TT[TT.LStickXAxis = 17] = "LStickXAxis", TT[TT.LStickYAxis = 18] = "LStickYAxis", TT[TT.RStickXAxis = 19] = "RStickXAxis", TT[TT.RStickYAxis = 20] = "RStickYAxis"
    }(tT || (tT = {})),
    function(TT) {
      TT[TT.B = 0] = "B", TT[TT.A = 1] = "A", TT[TT.Y = 2] = "Y", TT[TT.X = 3] = "X", TT[TT.L = 4] = "L", TT[TT.R = 5] = "R", TT[TT.ZL = 6] = "ZL", TT[TT.ZR = 7] = "ZR", TT[TT.Minus = 8] = "Minus", TT[TT.Plus = 9] = "Plus", TT[TT.LS = 10] = "LS", TT[TT.RS = 11] = "RS", TT[TT.DPadUp = 12] = "DPadUp", TT[TT.DPadDown = 13] = "DPadDown", TT[TT.DPadLeft = 14] = "DPadLeft", TT[TT.DPadRight = 15] = "DPadRight", TT[TT.Home = 16] = "Home", TT[TT.Capture = 17] = "Capture", TT[TT.LStickXAxis = 18] = "LStickXAxis", TT[TT.LStickYAxis = 19] = "LStickYAxis", TT[TT.RStickXAxis = 20] = "RStickXAxis", TT[TT.RStickYAxis = 21] = "RStickYAxis"
    }(aT || (aT = {}));
    var XT = mT(40297);
    class IT {
      static CreateDeviceEvent(TT, UT, mT, WT, zT, MT, gT) {
        switch (TT) {
          case YT.Keyboard:
            return this._CreateKeyboardEvent(mT, WT, zT, MT);
          case YT.Mouse:
            if (mT === JT.MouseWheelX || mT === JT.MouseWheelY || mT === JT.MouseWheelZ) return this._CreateWheelEvent(TT, UT, mT, WT, zT, MT);
          case YT.Touch:
            return this._CreatePointerEvent(TT, UT, mT, WT, zT, MT, gT);
          default:
            throw `Unable to generate event for device ${YT[TT]}`
        }
      }
      static _CreatePointerEvent(TT, UT, mT, WT, zT, MT, gT) {
        const nT = this._CreateMouseEvent(TT, UT, mT, WT, zT, MT);
        TT === YT.Mouse ? (nT.deviceType = YT.Mouse, nT.pointerId = 1, nT.pointerType = "mouse") : (nT.deviceType = YT.Touch, nT.pointerId = gT ?? UT, nT.pointerType = "touch");
        let HT = 0;
        return HT += zT.pollInput(TT, UT, JT.LeftClick), HT += 2 * zT.pollInput(TT, UT, JT.RightClick), HT += 4 * zT.pollInput(TT, UT, JT.MiddleClick), nT.buttons = HT, mT === JT.Move ? nT.type = "pointermove" : mT >= JT.LeftClick && mT <= JT.RightClick && (nT.type = 1 === WT ? "pointerdown" : "pointerup", nT.button = mT - 2), nT
      }
      static _CreateWheelEvent(TT, UT, mT, WT, zT, MT) {
        const gT = this._CreateMouseEvent(TT, UT, mT, WT, zT, MT);
        switch (gT.pointerId = 1, gT.type = "wheel", gT.deltaMode = XT.c.DOM_DELTA_PIXEL, gT.deltaX = 0, gT.deltaY = 0, gT.deltaZ = 0, mT) {
          case JT.MouseWheelX:
            gT.deltaX = WT;
            break;
          case JT.MouseWheelY:
            gT.deltaY = WT;
            break;
          case JT.MouseWheelZ:
            gT.deltaZ = WT
        }
        return gT
      }
      static _CreateMouseEvent(TT, UT, mT, WT, zT, MT) {
        const gT = this._CreateEvent(MT),
          nT = zT.pollInput(TT, UT, JT.Horizontal),
          HT = zT.pollInput(TT, UT, JT.Vertical);
        return MT ? (gT.movementX = 0, gT.movementY = 0, gT.offsetX = gT.movementX - MT.getBoundingClientRect().x, gT.offsetY = gT.movementY - MT.getBoundingClientRect().y) : (gT.movementX = zT.pollInput(TT, UT, 10), gT.movementY = zT.pollInput(TT, UT, 11), gT.offsetX = 0, gT.offsetY = 0), this._CheckNonCharacterKeys(gT, zT), gT.clientX = nT, gT.clientY = HT, gT.x = nT, gT.y = HT, gT.deviceType = TT, gT.deviceSlot = UT, gT.inputIndex = mT, gT
      }
      static _CreateKeyboardEvent(TT, UT, mT, WT) {
        const zT = this._CreateEvent(WT);
        return this._CheckNonCharacterKeys(zT, mT), zT.deviceType = YT.Keyboard, zT.deviceSlot = 0, zT.inputIndex = TT, zT.type = 1 === UT ? "keydown" : "keyup", zT.key = String.fromCharCode(TT), zT.keyCode = TT, zT
      }
      static _CheckNonCharacterKeys(TT, UT) {
        const mT = UT.isDeviceAvailable(YT.Keyboard),
          WT = mT && 1 === UT.pollInput(YT.Keyboard, 0, 18),
          zT = mT && 1 === UT.pollInput(YT.Keyboard, 0, 17),
          MT = mT && (1 === UT.pollInput(YT.Keyboard, 0, 91) || 1 === UT.pollInput(YT.Keyboard, 0, 92) || 1 === UT.pollInput(YT.Keyboard, 0, 93)),
          gT = mT && 1 === UT.pollInput(YT.Keyboard, 0, 16);
        TT.altKey = WT, TT.ctrlKey = zT, TT.metaKey = MT, TT.shiftKey = gT
      }
      static _CreateEvent(TT) {
        const UT = {
          preventDefault: () => {}
        };
        return UT.target = TT, UT
      }
    }
    class QT {
      constructor(TT, UT, mT) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(TT, UT, ((TT, UT, WT, zT) => {
          const MT = IT.CreateDeviceEvent(TT, UT, WT, zT, this);
          mT(TT, UT, MT)
        })) : this._createDummyNativeInput()
      }
      pollInput(TT, UT, mT) {
        return this._nativeInput.pollInput(TT, UT, mT)
      }
      isDeviceAvailable(TT) {
        return TT === YT.Mouse || TT === YT.Touch
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
    const sT = Object.keys(JT).length / 2;
    class FT {
      constructor(TT, UT, mT, zT) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = WT.j.IsSafari(), this._usingMacOs = (0, qT.f)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = TT => {}, this._keyboardUpEvent = TT => {}, this._keyboardBlurEvent = TT => {}, this._pointerMoveEvent = TT => {}, this._pointerDownEvent = TT => {}, this._pointerUpEvent = TT => {}, this._pointerCancelEvent = TT => {}, this._pointerCancelTouch = TT => {}, this._pointerLeaveEvent = TT => {}, this._pointerWheelEvent = TT => {}, this._pointerBlurEvent = TT => {}, this._pointerMacOsChromeOutEvent = TT => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, qT.f)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, qT.f)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = TT => {}, this._gamepadDisconnectedEvent = TT => {}, this._eventPrefix = WT.j.GetPointerPrefix(TT), this._engine = TT, this._onDeviceConnected = UT, this._onDeviceDisconnected = mT, this._onInputChanged = zT, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(TT, UT, mT) {
        const zT = this._inputs[TT][UT];
        if (!zT) throw `Unable to find device ${YT[TT]}`;
        TT >= YT.DualShock && TT <= YT.DualSense && this._updateDevice(TT, UT, mT);
        const MT = zT[mT];
        if (void 0 === MT) throw `Unable to find input ${mT} for device ${YT[TT]} in slot ${UT}`;
        return mT === JT.Move && WT.j.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), MT
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
                for (const UT in TT) {
                  const mT = TT[+UT];
                  if (mT)
                    for (let TT = 0; TT < mT.length; TT++) mT[TT] = 0
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
          for (const UT of TT) UT && this._addGamePad(UT)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(YT.Mouse, 0, 0, 0)
      }
      _addGamePad(TT) {
        const UT = this._getGamepadDeviceType(TT.id),
          mT = TT.index;
        this._gamepads = this._gamepads || new Array(TT.index + 1), this._registerDevice(UT, mT, TT.buttons.length + TT.axes.length), this._gamepads[mT] = UT
      }
      _addPointerDevice(TT, UT, mT, WT) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(TT, UT, sT);
        const zT = this._inputs[TT][UT];
        zT[0] = mT, zT[1] = WT
      }
      _registerDevice(TT, UT, mT) {
        if (void 0 === UT) throw `Unable to register device ${YT[TT]} to undefined slot.`;
        if (this._inputs[TT] || (this._inputs[TT] = {}), !this._inputs[TT][UT]) {
          const WT = new Array(mT);
          WT.fill(0), this._inputs[TT][UT] = WT, this._onDeviceConnected(TT, UT)
        }
      }
      _unregisterDevice(TT, UT) {
        this._inputs[TT][UT] && (delete this._inputs[TT][UT], this._onDeviceDisconnected(TT, UT))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = TT => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(YT.Keyboard, 0, 255));
          const UT = this._inputs[YT.Keyboard][0];
          if (UT) {
            UT[TT.keyCode] = 1;
            const mT = TT;
            mT.inputIndex = TT.keyCode, this._usingMacOs && TT.metaKey && "Meta" !== TT.key && (this._metaKeys.includes(TT.keyCode) || this._metaKeys.push(TT.keyCode)), this._onInputChanged(YT.Keyboard, 0, mT)
          }
        }, this._keyboardUpEvent = TT => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(YT.Keyboard, 0, 255));
          const UT = this._inputs[YT.Keyboard][0];
          if (UT) {
            UT[TT.keyCode] = 0;
            const mT = TT;
            if (mT.inputIndex = TT.keyCode, this._usingMacOs && "Meta" === TT.key && this._metaKeys.length > 0) {
              for (const TT of this._metaKeys) {
                const mT = IT.CreateDeviceEvent(YT.Keyboard, 0, TT, 0, this, this._elementToAttachTo);
                UT[TT] = 0, this._onInputChanged(YT.Keyboard, 0, mT)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(YT.Keyboard, 0, mT)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const TT = this._inputs[YT.Keyboard][0];
            for (let UT = 0; UT < TT.length; UT++)
              if (0 !== TT[UT]) {
                TT[UT] = 0;
                const mT = IT.CreateDeviceEvent(YT.Keyboard, 0, UT, 0, this, this._elementToAttachTo);
                this._onInputChanged(YT.Keyboard, 0, mT)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, qT.f)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let WT = 0; WT < this._maxTouchPoints; WT++) this._activeTouchIds[WT] = -1;
        this._pointerMoveEvent = TT => {
          const UT = this._getPointerType(TT);
          let mT = UT === YT.Mouse ? 0 : this._activeTouchIds.indexOf(TT.pointerId);
          if (UT === YT.Touch && -1 === mT) {
            if (0 === TT.buttons) return;
            const zT = this._activeTouchIds.indexOf(-1);
            if (!(zT >= 0)) return void WT.j.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            mT = zT, this._activeTouchIds[zT] = TT.pointerId, this._onDeviceConnected(UT, mT)
          }
          this._inputs[UT] || (this._inputs[UT] = {}), this._inputs[UT][mT] || this._addPointerDevice(UT, mT, TT.clientX, TT.clientY);
          const zT = this._inputs[UT][mT];
          if (zT) {
            const WT = TT;
            WT.inputIndex = JT.Move, zT[JT.Horizontal] = TT.clientX, zT[JT.Vertical] = TT.clientY, UT === YT.Touch && 0 === zT[JT.LeftClick] && (zT[JT.LeftClick] = 1), void 0 === TT.pointerId && (TT.pointerId = this._mouseId), this._onInputChanged(UT, mT, WT), this._usingSafari || -1 === TT.button || (WT.inputIndex = TT.button + 2, zT[TT.button + 2] = zT[TT.button + 2] ? 0 : 1, this._onInputChanged(UT, mT, WT))
          }
        }, this._pointerDownEvent = TT => {
          const UT = this._getPointerType(TT);
          let mT = UT === YT.Mouse ? 0 : TT.pointerId;
          if (UT === YT.Touch) {
            let UT = this._activeTouchIds.indexOf(TT.pointerId);
            if (-1 === UT && (UT = this._activeTouchIds.indexOf(-1)), !(UT >= 0)) return void WT.j.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            mT = UT, this._activeTouchIds[UT] = TT.pointerId
          }
          this._inputs[UT] || (this._inputs[UT] = {}), this._inputs[UT][mT] ? UT === YT.Touch && this._onDeviceConnected(UT, mT) : this._addPointerDevice(UT, mT, TT.clientX, TT.clientY);
          const zT = this._inputs[UT][mT];
          if (zT) {
            const WT = zT[JT.Horizontal],
              gT = zT[JT.Vertical];
            if (UT === YT.Mouse) {
              if (void 0 === TT.pointerId && (TT.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (MT) {}
            } else if (TT.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(TT.pointerId)
            } catch (MT) {}
            zT[JT.Horizontal] = TT.clientX, zT[JT.Vertical] = TT.clientY, zT[TT.button + 2] = 1;
            const nT = TT;
            nT.inputIndex = TT.button + 2, this._onInputChanged(UT, mT, nT), WT === TT.clientX && gT === TT.clientY || (nT.inputIndex = JT.Move, this._onInputChanged(UT, mT, nT))
          }
        }, this._pointerUpEvent = TT => {
          const UT = this._getPointerType(TT),
            mT = UT === YT.Mouse ? 0 : this._activeTouchIds.indexOf(TT.pointerId);
          if (UT === YT.Touch) {
            if (-1 === mT) return;
            this._activeTouchIds[mT] = -1
          }
          const WT = this._inputs[UT]?.[mT];
          let zT = TT.button,
            MT = WT && 0 !== WT[zT + 2];
          if (!MT && this._isUsingFirefox && this._usingMacOs && WT && (zT = 2 === zT ? 0 : 2, MT = 0 !== WT[zT + 2]), MT) {
            const MT = WT[JT.Horizontal],
              gT = WT[JT.Vertical];
            WT[JT.Horizontal] = TT.clientX, WT[JT.Vertical] = TT.clientY, WT[zT + 2] = 0;
            const nT = TT;
            void 0 === TT.pointerId && (TT.pointerId = this._mouseId), MT === TT.clientX && gT === TT.clientY || (nT.inputIndex = JT.Move, this._onInputChanged(UT, mT, nT)), nT.inputIndex = zT + 2, UT === YT.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : TT.pointerId && this._elementToAttachTo.hasPointerCapture?.(TT.pointerId) && this._elementToAttachTo.releasePointerCapture(TT.pointerId), this._onInputChanged(UT, mT, nT), UT === YT.Touch && this._onDeviceDisconnected(UT, mT)
          }
        }, this._pointerCancelTouch = TT => {
          const UT = this._activeTouchIds.indexOf(TT);
          if (-1 === UT) return;
          this._elementToAttachTo.hasPointerCapture?.(TT) && this._elementToAttachTo.releasePointerCapture(TT), this._inputs[YT.Touch][UT][JT.LeftClick] = 0;
          const mT = IT.CreateDeviceEvent(YT.Touch, UT, JT.LeftClick, 0, this, this._elementToAttachTo, TT);
          this._onInputChanged(YT.Touch, UT, mT), this._activeTouchIds[UT] = -1, this._onDeviceDisconnected(YT.Touch, UT)
        }, this._pointerCancelEvent = TT => {
          if ("mouse" === TT.pointerType) {
            const TT = this._inputs[YT.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let UT = JT.LeftClick; UT <= JT.BrowserForward; UT++)
              if (1 === TT[UT]) {
                TT[UT] = 0;
                const mT = IT.CreateDeviceEvent(YT.Mouse, 0, UT, 0, this, this._elementToAttachTo);
                this._onInputChanged(YT.Mouse, 0, mT)
              }
          } else this._pointerCancelTouch(TT.pointerId)
        }, this._pointerLeaveEvent = TT => {
          "pen" === TT.pointerType && this._pointerCancelTouch(TT.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let TT = !1;
        const UT = function() {};
        try {
          const mT = Object.defineProperty({}, "passive", {
            get: function() {
              TT = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", UT, mT), this._elementToAttachTo.removeEventListener("test", UT, mT)
        } catch (mT) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(YT.Mouse)) {
            const TT = this._inputs[YT.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let UT = JT.LeftClick; UT <= JT.BrowserForward; UT++)
              if (1 === TT[UT]) {
                TT[UT] = 0;
                const mT = IT.CreateDeviceEvent(YT.Mouse, 0, UT, 0, this, this._elementToAttachTo);
                this._onInputChanged(YT.Mouse, 0, mT)
              }
          }
          if (this.isDeviceAvailable(YT.Touch)) {
            const TT = this._inputs[YT.Touch];
            for (let UT = 0; UT < this._activeTouchIds.length; UT++) {
              const mT = this._activeTouchIds[UT];
              if (this._elementToAttachTo.hasPointerCapture?.(mT) && this._elementToAttachTo.releasePointerCapture(mT), -1 !== mT && 1 === TT[UT]?.[JT.LeftClick]) {
                TT[UT][JT.LeftClick] = 0;
                const WT = IT.CreateDeviceEvent(YT.Touch, UT, JT.LeftClick, 0, this, this._elementToAttachTo, mT);
                this._onInputChanged(YT.Touch, UT, WT), this._activeTouchIds[UT] = -1, this._onDeviceDisconnected(YT.Touch, UT)
              }
            }
          }
        }, this._pointerWheelEvent = TT => {
          const UT = YT.Mouse;
          this._inputs[UT] || (this._inputs[UT] = []), this._inputs[UT][0] || (this._pointerActive = !0, this._registerDevice(UT, 0, sT));
          const mT = this._inputs[UT][0];
          if (mT) {
            mT[JT.MouseWheelX] = TT.deltaX || 0, mT[JT.MouseWheelY] = TT.deltaY || TT.wheelDelta || 0, mT[JT.MouseWheelZ] = TT.deltaZ || 0;
            const WT = TT;
            void 0 === TT.pointerId && (TT.pointerId = this._mouseId), 0 !== mT[JT.MouseWheelX] && (WT.inputIndex = JT.MouseWheelX, this._onInputChanged(UT, 0, WT)), 0 !== mT[JT.MouseWheelY] && (WT.inputIndex = JT.MouseWheelY, this._onInputChanged(UT, 0, WT)), 0 !== mT[JT.MouseWheelZ] && (WT.inputIndex = JT.MouseWheelZ, this._onInputChanged(UT, 0, WT))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = TT => {
          TT.buttons > 1 && this._pointerCancelEvent(TT)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!TT && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(YT.Mouse)) {
            const TT = this._inputs[YT.Mouse][0];
            TT[JT.MouseWheelX] = 0, TT[JT.MouseWheelY] = 0, TT[JT.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = TT => {
          this._addGamePad(TT.gamepad)
        }, this._gamepadDisconnectedEvent = TT => {
          if (this._gamepads) {
            const UT = this._getGamepadDeviceType(TT.gamepad.id),
              mT = TT.gamepad.index;
            this._unregisterDevice(UT, mT), delete this._gamepads[mT]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(TT, UT, mT) {
        const WT = navigator.getGamepads()[UT];
        if (WT && TT === this._gamepads[UT]) {
          const zT = this._inputs[TT][UT];
          mT >= WT.buttons.length ? zT[mT] = WT.axes[mT - WT.buttons.length].valueOf() : zT[mT] = WT.buttons[mT].value
        }
      }
      _getGamepadDeviceType(TT) {
        return -1 !== TT.indexOf("054c") ? -1 !== TT.indexOf("0ce6") ? YT.DualSense : YT.DualShock : -1 !== TT.indexOf("Xbox One") || -1 !== TT.search("Xbox 360") || -1 !== TT.search("xinput") || -1 !== TT.indexOf("045e") && -1 === TT.indexOf("Surface Dock") ? YT.Xbox : -1 !== TT.indexOf("057e") ? YT.Switch : YT.Generic
      }
      _getPointerType(TT) {
        let UT = YT.Mouse;
        return ("touch" === TT.pointerType || "pen" === TT.pointerType || TT.touches) && (UT = YT.Touch), UT
      }
    }
    class PT {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = UT, this.deviceSlot = mT, this.onInputChangedObservable = new gT.d, this._deviceInputSystem = TT
      }
      getInput(TT) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, TT)
      }
    }
    class VT {
      constructor(TT) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = TT => {
          for (let UT = 0; UT < this._devices.length; UT++) {
            const mT = this._devices[UT];
            for (const WT in mT) {
              const mT = +WT;
              TT._addDevice(new PT(this._deviceInputSystem, UT, mT))
            }
          }
          this._registeredManagers.push(TT)
        }, this.unregisterManager = TT => {
          const UT = this._registeredManagers.indexOf(TT);
          UT > -1 && this._registeredManagers.splice(UT, 1)
        };
        const UT = Object.keys(YT).length / 2;
        this._devices = new Array(UT);
        const mT = (TT, UT) => {
            this._devices[TT] || (this._devices[TT] = new Array), this._devices[TT][UT] || (this._devices[TT][UT] = UT);
            for (const mT of this._registeredManagers) {
              const WT = new PT(this._deviceInputSystem, TT, UT);
              mT._addDevice(WT)
            }
          },
          WT = (TT, UT) => {
            this._devices[TT]?.[UT] && delete this._devices[TT][UT];
            for (const mT of this._registeredManagers) mT._removeDevice(TT, UT)
          },
          zT = (TT, UT, mT) => {
            if (mT)
              for (const WT of this._registeredManagers) WT._onInputChanged(TT, UT, mT)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new QT(mT, WT, zT) : this._deviceInputSystem = new FT(TT, mT, WT, zT)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class uT {
      getDeviceSource(TT, UT) {
        if (void 0 === UT) {
          if (void 0 === this._firstDevice[TT]) return null;
          UT = this._firstDevice[TT]
        }
        return this._devices[TT] && void 0 !== this._devices[TT][UT] ? this._devices[TT][UT] : null
      }
      getDeviceSources(TT) {
        return this._devices[TT] ? this._devices[TT].filter((TT => !!TT)) : []
      }
      constructor(TT) {
        const UT = Object.keys(YT).length / 2;
        this._devices = new Array(UT), this._firstDevice = new Array(UT), this._engine = TT, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new VT(TT)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new gT.d((TT => {
          for (const UT of this._devices)
            if (UT)
              for (const mT of UT) mT && this.onDeviceConnectedObservable.notifyObserver(TT, mT)
        })), this.onDeviceDisconnectedObservable = new gT.d, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = TT.SF.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.SF.remove(this._onDisposeObserver)
      }
      _addDevice(TT) {
        this._devices[TT.deviceType] || (this._devices[TT.deviceType] = []), this._devices[TT.deviceType][TT.deviceSlot] || (this._devices[TT.deviceType][TT.deviceSlot] = TT, this._updateFirstDevices(TT.deviceType)), this.onDeviceConnectedObservable.notifyObservers(TT)
      }
      _removeDevice(TT, UT) {
        const mT = this._devices[TT]?.[UT];
        this.onDeviceDisconnectedObservable.notifyObservers(mT), this._devices[TT]?.[UT] && delete this._devices[TT][UT], this._updateFirstDevices(TT)
      }
      _onInputChanged(TT, UT, mT) {
        this._devices[TT]?.[UT]?.onInputChangedObservable.notifyObservers(mT)
      }
      _updateFirstDevices(TT) {
        switch (TT) {
          case YT.Keyboard:
          case YT.Mouse:
            this._firstDevice[TT] = 0;
            break;
          case YT.Touch:
          case YT.DualSense:
          case YT.DualShock:
          case YT.Xbox:
          case YT.Switch:
          case YT.Generic: {
            delete this._firstDevice[TT];
            const UT = this._devices[TT];
            if (UT)
              for (let mT = 0; mT < UT.length; mT++)
                if (UT[mT]) {
                  this._firstDevice[TT] = mT;
                  break
                } break
          }
        }
      }
    }
    var CT = mT(40305);
    class rT {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get Cj() {
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
      set Cj(TT) {
        this._doubleClick = TT
      }
      set hasSwiped(TT) {
        this._hasSwiped = TT
      }
      set ignore(TT) {
        this._ignore = TT
      }
    }
    class KT {
      constructor(TT) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new jT.o(0, 0), this._previousStartingPointerPosition = new jT.o(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = TT || iT.c.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(TT) {
        return this._meshUnderPointerId[TT] || null
      }
      get unTranslatedPointer() {
        return new jT.o(this._unTranslatedPointerX, this._unTranslatedPointerY)
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
        const UT = this._scene.eB().getInputElementClientRect();
        UT && (this._pointerX = TT.clientX - UT.left, this._pointerY = TT.clientY - UT.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(TT, UT) {
        const mT = this._scene,
          WT = mT.eB(),
          zT = WT.getInputElement();
        zT && (zT.tabIndex = WT.canvasTabIndex, mT.doNotHandleCursors || (zT.style.cursor = mT.defaultCursor)), this._setCursorAndPointerOverMesh(TT, UT, mT);
        for (const nT of mT._pointerMoveStage) {
          TT = TT || this._pickMove(UT);
          const mT = !!TT?.pickedMesh;
          TT = nT.action(this._unTranslatedPointerX, this._unTranslatedPointerY, TT, mT, zT)
        }
        const MT = UT.inputIndex >= JT.MouseWheelX && UT.inputIndex <= JT.MouseWheelZ ? OT.d.POINTERWHEEL : OT.d.POINTERMOVE;
        let gT;
        mT.onPointerMove && (TT = TT || this._pickMove(UT), mT.onPointerMove(UT, TT, MT)), TT ? (gT = new OT.h(MT, UT, TT), this._setRayOnPointerInfo(TT, UT)) : (gT = new OT.h(MT, UT, null, this), this._movePointerInfo = gT), mT.onPointerObservable.hasObservers() && mT.onPointerObservable.notifyObservers(gT, MT)
      }
      _setRayOnPointerInfo(TT, UT) {
        const mT = this._scene;
        TT && CT.c._IsPickingAvailable && (TT.ray || (TT.ray = mT.createPickingRay(UT.offsetX, UT.offsetY, jT.e.Identity(), mT.activeCamera)))
      }
      _addCameraPointerObserver(TT, UT) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(TT, UT)
      }
      _removeCameraPointerObserver(TT) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(TT)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(TT, UT, mT) {
        const WT = this._scene,
          zT = new OT.f(mT, UT, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return TT && (zT.originalPickingInfo = TT, zT.ray = TT.ray, "xr-near" === UT.pointerType && TT.originMesh && (zT.nearInteractionPickingInfo = TT)), WT.onPrePointerObservable.notifyObservers(zT, mT), !!zT.skipOnPointerObservable
      }
      _pickMove(TT) {
        const UT = this._scene,
          mT = UT.VL(this._unTranslatedPointerX, this._unTranslatedPointerY, UT.pointerMovePredicate, UT.pointerMoveFastCheck, UT.cameraToUseForPointers, UT.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(mT, TT, UT), mT
      }
      _updateMeshUnderPointer() {
        const TT = this._scene;
        if (!TT.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || TT.skipPointerMovePicking || !TT.cameraToUseForPointers && !TT.activeCamera) return;
        this._ensurePointerMovePredicate();
        const UT = this._pointerX,
          mT = this._pointerY,
          WT = this._unTranslatedPointerX,
          zT = this._unTranslatedPointerY;
        for (const MT of this._latestPointerMoveEvents.values()) this._pointerX = MT.pointerX, this._pointerY = MT.pointerY, this._unTranslatedPointerX = MT.unTranslatedPointerX, this._unTranslatedPointerY = MT.unTranslatedPointerY, this._pickMove(MT.event);
        this._pointerX = UT, this._pointerY = mT, this._unTranslatedPointerX = WT, this._unTranslatedPointerY = zT
      }
      _ensurePointerMovePredicate() {
        const TT = this._scene;
        TT.pointerMovePredicate || (TT.pointerMovePredicate = UT => (UT._isPointerMovePickable ?? UT.QZ) && UT.isVisible && UT.isReady() && UT.isEnabled() && (UT.enablePointerMoveEvents || TT.constantlyUpdateMeshUnderPointer || null !== UT._getActionManagerForTrigger()) && (!TT.cameraToUseForPointers || 0 !== (TT.cameraToUseForPointers.layerMask & UT.layerMask)))
      }
      _setCursorAndPointerOverMesh(TT, UT, mT) {
        const WT = mT.eB().getInputElement();
        if (TT?.pickedMesh) {
          if (this.setPointerOverMesh(TT.pickedMesh, UT.pointerId, TT, UT), !mT.doNotHandleCursors && WT && this._pointerOverMesh) {
            const TT = this._pointerOverMesh._getActionManagerForTrigger();
            TT && TT.hasPointerTriggers && (WT.style.cursor = TT.hoverCursor || mT.hoverCursor)
          }
        } else this.setPointerOverMesh(null, UT.pointerId, TT, UT)
      }
      simulatePointerMove(TT, UT) {
        const mT = new PointerEvent("pointermove", UT);
        mT.inputIndex = JT.Move, this._checkPrePointerObservable(TT, mT, OT.d.POINTERMOVE) || this._processPointerMove(TT, mT)
      }
      simulatePointerDown(TT, UT) {
        const mT = new PointerEvent("pointerdown", UT);
        mT.inputIndex = mT.button + 2, this._checkPrePointerObservable(TT, mT, OT.d.POINTERDOWN) || this._processPointerDown(TT, mT)
      }
      _processPointerDown(TT, UT) {
        const mT = this._scene;
        if (TT?.pickedMesh) {
          this._pickedDownMesh = TT.pickedMesh;
          const WT = TT.pickedMesh._getActionManagerForTrigger();
          if (WT) {
            if (WT.hasPickTriggers) switch (WT.processTrigger(5, new BT(TT.pickedMesh, mT.pointerX, mT.pointerY, TT.pickedMesh, UT, TT)), UT.button) {
              case 0:
                WT.processTrigger(2, new BT(TT.pickedMesh, mT.pointerX, mT.pointerY, TT.pickedMesh, UT, TT));
                break;
              case 1:
                WT.processTrigger(4, new BT(TT.pickedMesh, mT.pointerX, mT.pointerY, TT.pickedMesh, UT, TT));
                break;
              case 2:
                WT.processTrigger(3, new BT(TT.pickedMesh, mT.pointerX, mT.pointerY, TT.pickedMesh, UT, TT))
            }
            WT.hasSpecificTrigger(8) && window.setTimeout((() => {
              const TT = mT.VL(this._unTranslatedPointerX, this._unTranslatedPointerY, (TT => TT.QZ && TT.isVisible && TT.isReady() && TT.actionManager && TT.actionManager.hasSpecificTrigger(8) && TT === this._pickedDownMesh), !1, mT.cameraToUseForPointers);
              TT?.pickedMesh && WT && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > KT.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, WT.processTrigger(8, BT.CreateNew(TT.pickedMesh, UT)))
            }), KT.LongPressDelay)
          }
        } else
          for (const MT of mT._pointerDownStage) TT = MT.action(this._unTranslatedPointerX, this._unTranslatedPointerY, TT, UT, !1);
        let WT;
        const zT = OT.d.POINTERDOWN;
        TT ? (mT.onPointerDown && mT.onPointerDown(UT, TT, zT), WT = new OT.h(zT, UT, TT), this._setRayOnPointerInfo(TT, UT)) : WT = new OT.h(zT, UT, null, this), mT.onPointerObservable.hasObservers() && mT.onPointerObservable.notifyObservers(WT, zT)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(TT, UT, mT) {
        const WT = new PointerEvent("pointerup", UT);
        WT.inputIndex = JT.Move;
        const zT = new rT;
        mT ? zT.Cj = !0 : zT.singleClick = !0, this._checkPrePointerObservable(TT, WT, OT.d.POINTERUP) || this._processPointerUp(TT, WT, zT)
      }
      _processPointerUp(TT, UT, mT) {
        const WT = this._scene;
        if (TT?.pickedMesh) {
          if (this._pickedUpMesh = TT.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (WT.onPointerPick && WT.onPointerPick(UT, TT), mT.singleClick && !mT.ignore && WT.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const mT = OT.d.POINTERPICK,
              zT = new OT.h(mT, UT, TT);
            this._setRayOnPointerInfo(TT, UT), WT.onPointerObservable.notifyObservers(zT, mT)
          }
          const zT = TT.pickedMesh._getActionManagerForTrigger();
          if (zT && !mT.ignore) {
            zT.processTrigger(7, BT.CreateNew(TT.pickedMesh, UT, TT)), !mT.hasSwiped && mT.singleClick && zT.processTrigger(1, BT.CreateNew(TT.pickedMesh, UT, TT));
            const WT = TT.pickedMesh._getActionManagerForTrigger(6);
            mT.Cj && WT && WT.processTrigger(6, BT.CreateNew(TT.pickedMesh, UT, TT))
          }
        } else if (!mT.ignore)
          for (const zT of WT._pointerUpStage) TT = zT.action(this._unTranslatedPointerX, this._unTranslatedPointerY, TT, UT, mT.Cj);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const TT = this._pickedDownMesh._getActionManagerForTrigger(16);
          TT && TT.processTrigger(16, BT.CreateNew(this._pickedDownMesh, UT))
        }
        if (!mT.ignore) {
          const zT = new OT.h(OT.d.POINTERUP, UT, TT);
          if (this._setRayOnPointerInfo(TT, UT), WT.onPointerObservable.notifyObservers(zT, OT.d.POINTERUP), WT.onPointerUp && WT.onPointerUp(UT, TT, OT.d.POINTERUP), !mT.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let zT = 0;
            if (mT.singleClick ? zT = OT.d.POINTERTAP : mT.Cj && (zT = OT.d.POINTERDOUBLETAP), zT) {
              const mT = new OT.h(zT, UT, TT);
              WT.onPointerObservable.hasObservers() && WT.onPointerObservable.hasSpecificMask(zT) && WT.onPointerObservable.notifyObservers(mT, zT)
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
          UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const zT = this._scene,
          MT = zT.eB();
        WT || (WT = MT.getInputElement()), this._alreadyAttached && this.detachControl(), WT && (this._alreadyAttachedTo = WT), this._deviceSourceManager = new uT(MT), this._initActionManager = TT => {
          if (!this._meshPickProceed) {
            const UT = zT.skipPointerUpPicking || 0 === zT._registeredActions && !this._checkForPicking() && !zT.onPointerUp ? null : zT.VL(this._unTranslatedPointerX, this._unTranslatedPointerY, zT.pointerUpPredicate, zT.pointerUpFastCheck, zT.cameraToUseForPointers, zT.pointerUpTrianglePredicate);
            this._currentPickResult = UT, UT && (TT = UT.hit && UT.pickedMesh ? UT.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return TT
        }, this._delayedSimpleClick = (TT, UT, mT) => {
          if ((Date.now() - this._previousStartingPointerTime > KT.DoubleClickDelay && !this._doubleClickOccured || TT !== this._previousButtonPressed) && (this._doubleClickOccured = !1, UT.singleClick = !0, UT.ignore = !1, this._delayedClicks[TT])) {
            const UT = this._delayedClicks[TT].evt,
              mT = OT.d.POINTERTAP,
              WT = new OT.h(mT, UT, this._currentPickResult);
            zT.onPointerObservable.hasObservers() && zT.onPointerObservable.hasSpecificMask(mT) && zT.onPointerObservable.notifyObservers(WT, mT), this._delayedClicks[TT] = null
          }
        }, this._initClickEvent = (TT, UT, mT, WT) => {
          const zT = new rT;
          this._currentPickResult = null;
          let MT = null,
            gT = TT.hasSpecificMask(OT.d.POINTERPICK) || UT.hasSpecificMask(OT.d.POINTERPICK) || TT.hasSpecificMask(OT.d.POINTERTAP) || UT.hasSpecificMask(OT.d.POINTERTAP) || TT.hasSpecificMask(OT.d.POINTERDOUBLETAP) || UT.hasSpecificMask(OT.d.POINTERDOUBLETAP);
          !gT && eT && (MT = this._initActionManager(MT, zT), MT && (gT = MT.hasPickTriggers));
          let nT = !1;
          if (gT = gT && !this._isMultiTouchGesture, gT) {
            const gT = mT.button;
            if (zT.hasSwiped = this._isPointerSwiping(), !zT.hasSwiped) {
              let HT = !KT.ExclusiveDoubleClickMode;
              if (HT || (HT = !TT.hasSpecificMask(OT.d.POINTERDOUBLETAP) && !UT.hasSpecificMask(OT.d.POINTERDOUBLETAP), HT && !eT.HasSpecificTrigger(6) && (MT = this._initActionManager(MT, zT), MT && (HT = !MT.hasSpecificTrigger(6)))), HT)(Date.now() - this._previousStartingPointerTime > KT.DoubleClickDelay || gT !== this._previousButtonPressed) && (zT.singleClick = !0, WT(zT, this._currentPickResult), nT = !0);
              else {
                const TT = {
                  evt: mT,
                  clickInfo: zT,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, gT, zT, WT), KT.DoubleClickDelay)
                };
                this._delayedClicks[gT] = TT
              }
              let kT = TT.hasSpecificMask(OT.d.POINTERDOUBLETAP) || UT.hasSpecificMask(OT.d.POINTERDOUBLETAP);
              !kT && eT.HasSpecificTrigger(6) && (MT = this._initActionManager(MT, zT), MT && (kT = MT.hasSpecificTrigger(6))), kT && (gT === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < KT.DoubleClickDelay && !this._doubleClickOccured ? (zT.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = gT, KT.ExclusiveDoubleClickMode ? (this._delayedClicks[gT] && (clearTimeout(this._delayedClicks[gT]?.timeoutId), this._delayedClicks[gT] = null), WT(zT, this._previousPickResult)) : WT(zT, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, zT.Cj = !0, zT.ignore = !1, KT.ExclusiveDoubleClickMode && this._delayedClicks[gT] && (clearTimeout(this._delayedClicks[gT]?.timeoutId), this._delayedClicks[gT] = null), WT(zT, this._currentPickResult)), nT = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = gT))
            }
          }
          nT || WT(zT, this._currentPickResult)
        }, this._onPointerMove = TT => {
          if (this._updatePointerPosition(TT), this._latestPointerMoveEvents.set(TT.pointerId, {
              event: TT,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > KT.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > KT.DragMovementThreshold), MT.isPointerLock && MT._verifyPointerLock(), this._checkPrePointerObservable(null, TT, TT.inputIndex >= JT.MouseWheelX && TT.inputIndex <= JT.MouseWheelZ ? OT.d.POINTERWHEEL : OT.d.POINTERMOVE)) return;
          if (!zT.cameraToUseForPointers && !zT.activeCamera) return;
          if (zT.skipPointerMovePicking) return void this._processPointerMove(new pT.c, TT);
          this._ensurePointerMovePredicate();
          const UT = zT._registeredActions > 0 || zT.constantlyUpdateMeshUnderPointer ? this._pickMove(TT) : null;
          this._processPointerMove(UT, TT)
        }, this._onPointerDown = TT => {
          const UT = this._activePointerIds.indexOf(-1);
          if (-1 === UT ? this._activePointerIds.push(TT.pointerId) : this._activePointerIds[UT] = TT.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, KT.ExclusiveDoubleClickMode)
            for (let WT = 0; WT < this._delayedClicks.length; WT++)
              if (this._delayedClicks[WT])
                if (TT.button === WT) clearTimeout(this._delayedClicks[WT]?.timeoutId);
                else {
                  const TT = this._delayedClicks[WT].clickInfo;
                  this._doubleClickOccured = !1, TT.singleClick = !0, TT.ignore = !1;
                  const UT = this._delayedClicks[WT].evt,
                    mT = OT.d.POINTERTAP,
                    MT = new OT.h(mT, UT, this._currentPickResult);
                  zT.onPointerObservable.hasObservers() && zT.onPointerObservable.hasSpecificMask(mT) && zT.onPointerObservable.notifyObservers(MT, mT), this._delayedClicks[WT] = null
                } if (this._updatePointerPosition(TT), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = TT.button), zT.preventDefaultOnPointerDown && WT && (TT.preventDefault(), WT.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, TT, OT.d.POINTERDOWN)) return;
          if (!zT.cameraToUseForPointers && !zT.activeCamera) return;
          let mT;
          this._pointerCaptures[TT.pointerId] = !0, zT.pointerDownPredicate || (zT.pointerDownPredicate = TT => TT.QZ && TT.isVisible && TT.isReady() && TT.isEnabled() && (!zT.cameraToUseForPointers || 0 !== (zT.cameraToUseForPointers.layerMask & TT.layerMask))), this._pickedDownMesh = null, mT = zT.skipPointerDownPicking || 0 === zT._registeredActions && !this._checkForPicking() && !zT.onPointerDown ? new pT.c : zT.VL(this._unTranslatedPointerX, this._unTranslatedPointerY, zT.pointerDownPredicate, zT.pointerDownFastCheck, zT.cameraToUseForPointers, zT.pointerDownTrianglePredicate), this._processPointerDown(mT, TT)
        }, this._onPointerUp = TT => {
          const UT = this._activePointerIds.indexOf(TT.pointerId); - 1 !== UT && (this._activePointerIds[UT] = -1, this._activePointerIdsCount--, "touch" === TT.pointerType && this._latestPointerMoveEvents.delete(TT.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(TT), zT.preventDefaultOnPointerUp && WT && (TT.preventDefault(), WT.focus()), this._initClickEvent(zT.onPrePointerObservable, zT.onPointerObservable, TT, ((UT, mT) => {
            if (zT.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !UT.ignore)) {
              if (this._checkPrePointerObservable(null, TT, OT.d.POINTERUP)) return this._swipeButtonPressed === TT.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === TT.buttons && (this._pointerCaptures[TT.pointerId] = !1));
              UT.hasSwiped || (UT.singleClick && zT.onPrePointerObservable.hasSpecificMask(OT.d.POINTERTAP) && this._checkPrePointerObservable(null, TT, OT.d.POINTERTAP) && (this._skipPointerTap = !0), UT.Cj && zT.onPrePointerObservable.hasSpecificMask(OT.d.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, TT, OT.d.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[TT.pointerId] ? (0 === TT.buttons && (this._pointerCaptures[TT.pointerId] = !1), (zT.cameraToUseForPointers || zT.activeCamera) && (zT.pointerUpPredicate || (zT.pointerUpPredicate = TT => TT.QZ && TT.isVisible && TT.isReady() && TT.isEnabled() && (!zT.cameraToUseForPointers || 0 !== (zT.cameraToUseForPointers.layerMask & TT.layerMask))), !this._meshPickProceed && (eT && eT.HasTriggers || this._checkForPicking() || zT.onPointerUp) && this._initActionManager(null, UT), mT || (mT = this._currentPickResult), this._processPointerUp(mT, TT, UT), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === TT.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === TT.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = TT => {
          const UT = yT.e.KEYDOWN;
          if (zT.onPreKeyboardObservable.hasObservers()) {
            const mT = new yT.i(UT, TT);
            if (zT.onPreKeyboardObservable.notifyObservers(mT, UT), mT.skipOnKeyboardObservable) return
          }
          if (zT.onKeyboardObservable.hasObservers()) {
            const mT = new yT.k(UT, TT);
            zT.onKeyboardObservable.notifyObservers(mT, UT)
          }
          zT.actionManager && zT.actionManager.processTrigger(14, BT.CreateNewFromScene(zT, TT))
        }, this._onKeyUp = TT => {
          const UT = yT.e.KEYUP;
          if (zT.onPreKeyboardObservable.hasObservers()) {
            const mT = new yT.i(UT, TT);
            if (zT.onPreKeyboardObservable.notifyObservers(mT, UT), mT.skipOnKeyboardObservable) return
          }
          if (zT.onKeyboardObservable.hasObservers()) {
            const mT = new yT.k(UT, TT);
            zT.onKeyboardObservable.notifyObservers(mT, UT)
          }
          zT.actionManager && zT.actionManager.processTrigger(15, BT.CreateNewFromScene(zT, TT))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((WT => {
          WT.deviceType === YT.Mouse ? WT.onInputChangedObservable.add((zT => {
            this._originMouseEvent = zT, zT.inputIndex === JT.LeftClick || zT.inputIndex === JT.MiddleClick || zT.inputIndex === JT.RightClick || zT.inputIndex === JT.BrowserBack || zT.inputIndex === JT.BrowserForward ? UT && 1 === WT.getInput(zT.inputIndex) ? this._onPointerDown(zT) : TT && 0 === WT.getInput(zT.inputIndex) && this._onPointerUp(zT) : mT && (zT.inputIndex === JT.Move ? this._onPointerMove(zT) : zT.inputIndex !== JT.MouseWheelX && zT.inputIndex !== JT.MouseWheelY && zT.inputIndex !== JT.MouseWheelZ || this._onPointerMove(zT))
          })) : WT.deviceType === YT.Touch ? WT.onInputChangedObservable.add((zT => {
            zT.inputIndex === JT.LeftClick && (UT && 1 === WT.getInput(zT.inputIndex) ? (this._onPointerDown(zT), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : TT && 0 === WT.getInput(zT.inputIndex) && (this._onPointerUp(zT), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), mT && zT.inputIndex === JT.Move && this._onPointerMove(zT)
          })) : WT.deviceType === YT.Keyboard && WT.onInputChangedObservable.add((TT => {
            "keydown" === TT.type ? this._onKeyDown(TT) : "keyup" === TT.type && this._onKeyUp(TT)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 ? arguments[2] : void 0,
          WT = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[UT] === TT && (!TT || !TT._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const zT = this._meshUnderPointerId[UT];
        let MT;
        zT && (MT = zT._getActionManagerForTrigger(10), MT && MT.processTrigger(10, new BT(zT, this._pointerX, this._pointerY, TT, WT, {
          pointerId: UT
        }))), TT ? (this._meshUnderPointerId[UT] = TT, this._pointerOverMesh = TT, MT = TT._getActionManagerForTrigger(9), MT && MT.processTrigger(9, new BT(TT, this._pointerX, this._pointerY, TT, WT, {
          pointerId: UT,
          pickResult: mT
        }))) : (delete this._meshUnderPointerId[UT], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: TT,
          pointerId: UT
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(TT) {
        this._pointerOverMesh === TT && (this._pointerOverMesh = null), this._pickedDownMesh === TT && (this._pickedDownMesh = null), this._pickedUpMesh === TT && (this._pickedUpMesh = null);
        for (const UT in this._meshUnderPointerId) this._meshUnderPointerId[UT] === TT && delete this._meshUnderPointerId[UT]
      }
    }
    KT.DragMovementThreshold = 10, KT.LongPressDelay = 500, KT.DoubleClickDelay = 300, KT.ExclusiveDoubleClickMode = !1;
    var ST = mT(40039),
      GT = mT(37367),
      NT = mT(37885);
    class ET {
      static get UniqueId() {
        const TT = this._UniqueIdCounter;
        return this._UniqueIdCounter++, TT
      }
    }
    ET._UniqueIdCounter = 1;
    var hT = mT(40151),
      DT = mT(40310),
      oT = mT(37205);
    class AT {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var RT, TU, UU, mU, WU, zU, MU, gU, nU, HU, kU, jU, lU, LU, pU, BU, ZU, cU, vU, fU, qU, iU, bU, OU, eU, YU, JU, xU, dU, wU, tU, aU, yU, XU, IU, QU, sU, FU, PU, VU, uU, CU, rU, KU, SU, GU, NU, EU, hU, DU, oU, AU, RU, Tm = mT(38800),
      Um = mT(37239);
    const mm = new jT.t,
      Wm = new jT.t;
    var zm;
    ! function(TT) {
      TT[TT.BackwardCompatible = 0] = "BackwardCompatible", TT[TT.Intermediate = 1] = "Intermediate", TT[TT.Aggressive = 2] = "Aggressive"
    }(zm || (zm = {}));
    class Mm {
      static DefaultMaterialFactory(TT) {
        throw (0, bT.k)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, bT.k)("DefaultCollisionCoordinator")
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
        for (const UT of this.skeletons) TT = TT.concat(UT.bones);
        return TT
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(TT) {
        this._animationPropertiesOverride = TT
      }
      set onDispose(TT) {
        this._onDisposeObserver && this.SF.remove(this._onDisposeObserver), this._onDisposeObserver = this.SF.add(TT)
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
        return KT.DragMovementThreshold
      }
      static set DragMovementThreshold(TT) {
        KT.DragMovementThreshold = TT
      }
      static get LongPressDelay() {
        return KT.LongPressDelay
      }
      static set LongPressDelay(TT) {
        KT.LongPressDelay = TT
      }
      static get DoubleClickDelay() {
        return KT.DoubleClickDelay
      }
      static set DoubleClickDelay(TT) {
        KT.DoubleClickDelay = TT
      }
      static get ExclusiveDoubleClickMode() {
        return KT.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(TT) {
        KT.ExclusiveDoubleClickMode = TT
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? jT.p.ZeroReadOnly
      }
      bindEyePosition(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const WT = this._eyePosition,
          zT = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          MT = this.floatingOriginOffset,
          gT = mm.set(WT.x, WT.y, WT.z, zT ? -1 : 1),
          nT = gT.subtractFromFloatsToRef(MT.x, MT.y, MT.z, 0, Wm);
        return TT && (mT ? TT.setFloat3(UT, nT.x, nT.y, nT.z) : TT.setVector4(UT, nT)), gT
      }
      finalizeSceneUbo() {
        const TT = this.getSceneUniformBuffer(),
          UT = this.bindEyePosition(null),
          mT = this.floatingOriginOffset;
        return TT.updateFloat4("vEyePosition", UT.x - mT.x, UT.y - mT.y, UT.z - mT.z, UT.w), TT.update(), TT
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
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), TT && (this._unObserveActiveCameras = (0, oT.e)(TT, (() => {
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
        return Mm.DefaultMaterialFactory !== Mm._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = Mm.DefaultMaterialFactory(this)), this._defaultMaterial
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
        return this._collisionCoordinator || (this._collisionCoordinator = Mm.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
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
      WWT(TT) {
        this._components.push(TT), this._transientComponents.push(TT);
        const UT = TT;
        UT.addFromContainer && UT.serialize && this._serializableComponents.push(UT)
      }
      _getComponent(TT) {
        for (const UT of this._components)
          if (UT.name === TT) return UT;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(TT, UT) {
        this._inputManager = new KT(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new GT.g(.2, .2, .3, 1), this.onClearColorChangedObservable = new gT.d, this.ambientColor = new GT.d(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new gT.d, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.EY = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.SF = new gT.d, this._onDisposeObserver = null, this.onBeforeRenderObservable = new gT.d, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new gT.d, this.onAfterRenderCameraObservable = new gT.d, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new gT.d, this.onAfterAnimationsObservable = new gT.d, this.onBeforeDrawPhaseObservable = new gT.d, this.onAfterDrawPhaseObservable = new gT.d, this.onReadyObservable = new gT.d, this.onBeforeCameraRenderObservable = new gT.d, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new gT.d, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new gT.d, this.onAfterActiveMeshesEvaluationObservable = new gT.d, this.onBeforeParticlesRenderingObservable = new gT.d, this.onAfterParticlesRenderingObservable = new gT.d, this.onDataLoadedObservable = new gT.d, this.onNewCameraAddedObservable = new gT.d, this.onCameraRemovedObservable = new gT.d, this.onNewLightAddedObservable = new gT.d, this.onLightRemovedObservable = new gT.d, this.onNewGeometryAddedObservable = new gT.d, this.onGeometryRemovedObservable = new gT.d, this.onNewTransformNodeAddedObservable = new gT.d, this.onTransformNodeRemovedObservable = new gT.d, this.onNewMeshAddedObservable = new gT.d, this.onMeshRemovedObservable = new gT.d, this.onNewSkeletonAddedObservable = new gT.d, this.onSkeletonRemovedObservable = new gT.d, this.onNewParticleSystemAddedObservable = new gT.d, this.onParticleSystemRemovedObservable = new gT.d, this.onNewAnimationGroupAddedObservable = new gT.d, this.onAnimationGroupRemovedObservable = new gT.d, this.onNewMaterialAddedObservable = new gT.d, this.onNewMultiMaterialAddedObservable = new gT.d, this.onMaterialRemovedObservable = new gT.d, this.onMultiMaterialRemovedObservable = new gT.d, this.onNewTextureAddedObservable = new gT.d, this.onTextureRemovedObservable = new gT.d, this.onNewFrameGraphAddedObservable = new gT.d, this.onFrameGraphRemovedObservable = new gT.d, this.onNewObjectRendererAddedObservable = new gT.d, this.onObjectRendererRemovedObservable = new gT.d, this.onNewPostProcessAddedObservable = new gT.d, this.onPostProcessRemovedObservable = new gT.d, this.onNewEffectLayerAddedObservable = new gT.d, this.onEffectLayerRemovedObservable = new gT.d, this.onBeforeRenderTargetsRenderObservable = new gT.d, this.onAfterRenderTargetsRenderObservable = new gT.d, this.onBeforeStepObservable = new gT.d, this.onAfterStepObservable = new gT.d, this.onActiveCameraChanged = new gT.d, this.onActiveCamerasChanged = new gT.d, this.onBeforeRenderingGroupObservable = new gT.d, this.onAfterRenderingGroupObservable = new gT.d, this.onMeshImportedObservable = new gT.d, this.onAnimationFileImportedObservable = new gT.d, this.onEnvironmentTextureChangedObservable = new gT.d, this.onMeshUnderPointerUpdatedObservable = new gT.d, this._registeredForLateAnimationBindings = new nT.c(256), this._pointerPickingConfiguration = new AT, this.onPrePointerObservable = new gT.d, this.onPointerObservable = new gT.d, this.onPreKeyboardObservable = new gT.d, this.onKeyboardObservable = new gT.d, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = Mm.FOGMODE_NONE, this.fogColor = new GT.d(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.RC = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new jT.p(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new nT.c(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new ST.b, this._activeIndices = new ST.b, this._activeParticles = new ST.b, this._activeBones = new ST.b, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new nT.f(256), this._processedMaterials = new nT.f(256), this._renderTargets = new nT.c(256), this._materialsRenderTargets = new nT.c(256), this._activeParticleSystems = new nT.f(256), this._activeSkeletons = new nT.c(32), this._softwareSkinnedMeshes = new nT.c(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = jT.e.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = fT.d.Create(), this._beforeClearStage = fT.d.Create(), this._beforeRenderTargetClearStage = fT.d.Create(), this._gatherRenderTargetsStage = fT.d.Create(), this._gatherActiveCameraRenderTargetsStage = fT.d.Create(), this._isReadyForMeshStage = fT.d.Create(), this._beforeEvaluateActiveMeshStage = fT.d.Create(), this._evaluateSubMeshStage = fT.d.Create(), this._preActiveMeshStage = fT.d.Create(), this._cameraDrawRenderTargetStage = fT.d.Create(), this._beforeCameraDrawStage = fT.d.Create(), this._beforeRenderTargetDrawStage = fT.d.Create(), this._beforeRenderingGroupDrawStage = fT.d.Create(), this._beforeRenderingMeshStage = fT.d.Create(), this._afterRenderingMeshStage = fT.d.Create(), this._afterRenderingGroupDrawStage = fT.d.Create(), this._afterCameraDrawStage = fT.d.Create(), this._afterCameraPostProcessStage = fT.d.Create(), this._afterRenderTargetDrawStage = fT.d.Create(), this._afterRenderTargetPostProcessStage = fT.d.Create(), this._afterRenderStage = fT.d.Create(), this._pointerMoveStage = fT.d.Create(), this._pointerDownStage = fT.d.Create(), this._pointerUpStage = fT.d.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new gT.d, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const mT = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...UT
        };
        this.defaultCameraLayerMask = mT.defaultCameraLayerMask, this.defaultRenderableLayerMask = mT.defaultRenderableLayerMask, TT = this._engine = TT || iT.c.LastCreatedEngine, mT.virtual ? TT._virtualScenes.push(this) : (iT.c._LastCreatedScene = this, TT.scenes.push(this)), (TT.getCreationOptions().useLargeWorldRendering || UT?.useFloatingOrigin) && ((0, cT.c)(), this._floatingOriginScene = this, cT.b.KF = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new vT.d(this), ZT.b && (this.postProcessManager = new ZT.b(this)), (0, qT.j)() && this.attachControl(), this._createUbo(), lT.b && (this._imageProcessingConfiguration = new lT.b), this.setDefaultCandidateProviders(), mT.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = mT.useMaterialMeshMap, this.useClonedMeshMap = mT.useClonedMeshMap, UT && UT.virtual || TT.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(TT) {
        return this._defaultSubMeshCandidates.data = TT.rY, this._defaultSubMeshCandidates.length = TT.rY.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = TT => this._getDefaultSubMeshCandidates(TT), this.getIntersectingSubMeshCandidates = (TT, UT) => this._getDefaultSubMeshCandidates(TT), this.getCollidingSubMeshCandidates = (TT, UT) => this._getDefaultSubMeshCandidates(TT)
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
      isCachedMaterialInvalid(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== UT || this._cachedMaterial !== TT || this._cachedVisibility !== mT
      }
      eB() {
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
      simulatePointerMove(TT, UT) {
        return this._inputManager.simulatePointerMove(TT, UT), this
      }
      simulatePointerDown(TT, UT) {
        return this._inputManager.simulatePointerDown(TT, UT), this
      }
      simulatePointerUp(TT, UT, mT) {
        return this._inputManager.simulatePointerUp(TT, UT, mT), this
      }
      isPointerCaptured() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(TT)
      }
      attachControl() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(TT, UT, mT)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let TT, UT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const mT = this.eB(),
          WT = mT.currentRenderPassId;
        mT.currentRenderPassId = this.activeCamera?.renderPassId ?? WT;
        let zT = !0;
        for (this._pendingData.length > 0 && (zT = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && zT && (zT = this.depthPeelingRenderer.isReady()), UT && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), TT = 0; TT < this.meshes.length; TT++) {
          const WT = this.meshes[TT];
          if (!WT.rY || 0 === WT.rY.length) continue;
          if (!WT.isReady(!0)) {
            zT = !1;
            continue
          }
          const MT = WT.hasThinInstances || "InstancedMesh" === WT.getClassName() || "InstancedLinesMesh" === WT.getClassName() || mT.getCaps().instancedArrays && WT.instances.length > 0;
          for (let TT = 0, UT = this._isReadyForMeshStage; TT < UT.length; TT++) {
            UT[TT].action(WT, MT) || (zT = !1)
          }
          if (!UT) continue;
          const gT = WT.material || this.defaultMaterial;
          if (gT)
            if (gT._storeEffectOnSubMeshes)
              for (const TT of WT.rY) {
                const UT = TT.wB();
                UT && UT.hasRenderTargetTextures && null != UT.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(UT) && (this._processedMaterials.push(UT), this._materialsRenderTargets.concatWithNoDuplicate(UT.getRenderTargetTextures()))
              } else gT.hasRenderTargetTextures && null != gT.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(gT) && (this._processedMaterials.push(gT), this._materialsRenderTargets.concatWithNoDuplicate(gT.getRenderTargetTextures()))
        }
        if (UT) {
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
          for (const MT of this.activeCameras) MT.isReady(!0) || (zT = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (zT = !1));
        for (const MT of this.EY) MT.isReady() || (zT = !1);
        if (this.proceduralTexturesEnabled)
          for (const MT of this.proceduralTextures) MT.isReady() || (zT = !1);
        if (this.layers)
          for (const MT of this.layers) MT.isReady() || (zT = !1);
        if (this.effectLayers)
          for (const MT of this.effectLayers) MT.isLayerReady() || (zT = !1);
        for (const MT of this._isReadyChecks) MT.isReady() || (zT = !1);
        return mT.areAllEffectsReady() || (zT = !1), mT.currentRenderPassId = WT, zT
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
        const UT = () => {
          TT(), setTimeout((() => {
            this.unregisterBeforeRender(UT)
          }))
        };
        this.registerBeforeRender(UT)
      }
      executeOnceBeforeRender(TT, UT) {
        void 0 !== UT ? setTimeout((() => {
          this._executeOnceBeforeRender(TT)
        }), UT) : this._executeOnceBeforeRender(TT)
      }
      addPendingData(TT) {
        this._pendingData.push(TT)
      }
      removePendingData(TT) {
        const UT = this.isLoading,
          mT = this._pendingData.indexOf(TT); - 1 !== mT && this._pendingData.splice(mT, 1), UT && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
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
        const UT = this._isReadyChecks.indexOf(TT); - 1 !== UT && this._isReadyChecks.splice(UT, 1)
      }
      executeWhenReady(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(TT), null === this._executeWhenReadyTimeoutId && this._checkIsReady(UT)
      }
      async whenReadyAsync() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((UT => {
          this.executeWhenReady((() => {
            UT()
          }), TT)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = MT.c.Now;
        else if (this.onReadyTimeoutDuration > 0 && MT.c.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(TT)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(TT)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = MT.c.Now
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
      setTransformMatrix(TT, UT, mT, WT) {
        this._multiviewSceneUboIsActive = !!(mT && WT && this._multiviewSceneUbo), this._viewUpdateFlag === TT.updateFlag && this._projectionUpdateFlag === UT.updateFlag || (this._viewUpdateFlag = TT.updateFlag, this._projectionUpdateFlag = UT.updateFlag, this._viewMatrix = TT, this._projectionMatrix = UT, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new jT.e), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? NT.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = NT.d.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(mT, WT) : this._sceneUbo.useUbo && (this._sceneUbo.R7("viewProjection", this._transformMatrix), this._sceneUbo.R7("view", this._viewMatrix), this._sceneUbo.R7("projection", this._projectionMatrix), this._sceneUbo.R7("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(TT, UT) {
        const mT = "boolean" === typeof UT ? UT : UT?.trackUBOsInFrame,
          WT = new LT.c(this._engine, void 0, !1, TT ?? "XZ", void 0, mT);
        return WT.addUniform("viewProjection", 16), WT.addUniform("view", 16), WT.addUniform("projection", 16), WT.addUniform("vEyePosition", 4), WT.addUniform("inverseProjection", 16), WT
      }
      setSceneUniformBuffer(TT) {
        this._sceneUbo = TT, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : jT.p.ZeroReadOnly
      }
      getUniqueId() {
        return ET.UniqueId
      }
      fWT(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(TT), TT._resyncLightSources(), TT.parent || TT._addToSceneRootNodes(), zT.e.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(TT)
          })), UT)) {
          const UT = TT.getChildMeshes();
          for (const TT of UT) this.fWT(TT)
        }
      }
      cV(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const mT = this.meshes.indexOf(TT);
        if (-1 !== mT && (this.meshes.splice(mT, 1), TT.parent || TT._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(TT), this.onMeshRemovedObservable.notifyObservers(TT), UT) {
          const UT = TT.getChildMeshes();
          for (const TT of UT) this.cV(TT)
        }
        return mT
      }
      addTransformNode(TT) {
        this._blockEntityCollection || TT.KF() === this && -1 !== TT._indexInSceneTransformNodesArray || (TT._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(TT), TT.parent || TT._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(TT))
      }
      removeTransformNode(TT) {
        const UT = TT._indexInSceneTransformNodesArray;
        if (-1 !== UT) {
          if (UT !== this.transformNodes.length - 1) {
            const TT = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[UT] = TT, TT._indexInSceneTransformNodesArray = UT
          }
          TT._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), TT.parent || TT._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(TT), UT
      }
      removeSkeleton(TT) {
        const UT = this.skeletons.indexOf(TT);
        return -1 !== UT && (this.skeletons.splice(UT, 1), this.onSkeletonRemovedObservable.notifyObservers(TT), this._executeActiveContainerCleanup(this._activeSkeletons)), UT
      }
      removeMorphTargetManager(TT) {
        const UT = this.morphTargetManagers.indexOf(TT);
        return -1 !== UT && this.morphTargetManagers.splice(UT, 1), UT
      }
      removeLight(TT) {
        const UT = this.lights.indexOf(TT);
        if (-1 !== UT) {
          for (const UT of this.meshes) UT._removeLightSource(TT, !1);
          this.lights.splice(UT, 1), this.sortLightsByPriority(), TT.parent || TT._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(TT)
        }
        return UT
      }
      removeCamera(TT) {
        const UT = this.cameras.indexOf(TT);
        if (-1 !== UT && (this.cameras.splice(UT, 1), TT.parent || TT._removeFromSceneRootNodes()), this.activeCameras) {
          const UT = this.activeCameras.indexOf(TT); - 1 !== UT && this.activeCameras.splice(UT, 1)
        }
        return this.activeCamera === TT && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(TT), UT
      }
      removeParticleSystem(TT) {
        const UT = this.EY.indexOf(TT);
        return -1 !== UT && (this.EY.splice(UT, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(TT), UT
      }
      removeAnimation(TT) {
        const UT = this.animations.indexOf(TT);
        return -1 !== UT && this.animations.splice(UT, 1), UT
      }
      stopAnimation(TT, UT, mT) {}
      removeAnimationGroup(TT) {
        const UT = this.animationGroups.indexOf(TT);
        return -1 !== UT && this.animationGroups.splice(UT, 1), this.onAnimationGroupRemovedObservable.notifyObservers(TT), UT
      }
      removeMultiMaterial(TT) {
        const UT = this.multiMaterials.indexOf(TT);
        return -1 !== UT && this.multiMaterials.splice(UT, 1), this.onMultiMaterialRemovedObservable.notifyObservers(TT), UT
      }
      removeMaterial(TT) {
        const UT = TT._indexInSceneMaterialArray;
        if (-1 !== UT && UT < this.materials.length) {
          if (UT !== this.materials.length - 1) {
            const TT = this.materials[this.materials.length - 1];
            this.materials[UT] = TT, TT._indexInSceneMaterialArray = UT
          }
          TT._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(TT), UT
      }
      removeActionManager(TT) {
        const UT = this.actionManagers.indexOf(TT);
        return -1 !== UT && this.actionManagers.splice(UT, 1), UT
      }
      removeTexture(TT) {
        const UT = this.textures.indexOf(TT);
        return -1 !== UT && this.textures.splice(UT, 1), this.onTextureRemovedObservable.notifyObservers(TT), UT
      }
      removeFrameGraph(TT) {
        const UT = this.frameGraphs.indexOf(TT);
        return -1 !== UT && this.frameGraphs.splice(UT, 1), this.onFrameGraphRemovedObservable.notifyObservers(TT), UT
      }
      removeObjectRenderer(TT) {
        const UT = this.objectRenderers.indexOf(TT);
        return -1 !== UT && this.objectRenderers.splice(UT, 1), this.onObjectRendererRemovedObservable.notifyObservers(TT), UT
      }
      removePostProcess(TT) {
        const UT = this.postProcesses.indexOf(TT);
        return -1 !== UT && this.postProcesses.splice(UT, 1), this.onPostProcessRemovedObservable.notifyObservers(TT), UT
      }
      removeEffectLayer(TT) {
        const UT = this.effectLayers.indexOf(TT);
        return -1 !== UT && this.effectLayers.splice(UT, 1), this.onEffectLayerRemovedObservable.notifyObservers(TT), UT
      }
      addLight(TT) {
        if (!this._blockEntityCollection) {
          this.lights.push(TT), this.sortLightsByPriority(), TT.parent || TT._addToSceneRootNodes();
          for (const UT of this.meshes) - 1 === UT.lightSources.indexOf(TT) && (UT.lightSources.push(TT), UT._resyncLightSources());
          zT.e.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(TT)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(DT.b.CompareLightsPriority)
      }
      addCamera(TT) {
        this._blockEntityCollection || (this.cameras.push(TT), zT.e.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(TT)
        })), TT.parent || TT._addToSceneRootNodes())
      }
      addSkeleton(TT) {
        this._blockEntityCollection || (this.skeletons.push(TT), zT.e.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(TT)
        })))
      }
      addParticleSystem(TT) {
        this._blockEntityCollection || (this.EY.push(TT), zT.e.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(TT)
        })))
      }
      addAnimation(TT) {
        this._blockEntityCollection || this.animations.push(TT)
      }
      addAnimationGroup(TT) {
        this._blockEntityCollection || (this.animationGroups.push(TT), zT.e.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(TT)
        })))
      }
      addMultiMaterial(TT) {
        this._blockEntityCollection || (this.multiMaterials.push(TT), zT.e.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(TT)
        })))
      }
      addMaterial(TT) {
        this._blockEntityCollection || TT.KF() === this && -1 !== TT._indexInSceneMaterialArray || (TT._indexInSceneMaterialArray = this.materials.length, this.materials.push(TT), zT.e.SetImmediate((() => {
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
        this.frameGraphs.push(TT), zT.e.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(TT)
        }))
      }
      addObjectRenderer(TT) {
        this.objectRenderers.push(TT), zT.e.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(TT)
        }))
      }
      addPostProcess(TT) {
        this._blockEntityCollection || (this.postProcesses.push(TT), zT.e.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(TT)
        })))
      }
      addEffectLayer(TT) {
        this._blockEntityCollection || (this.effectLayers.push(TT), zT.e.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(TT)
        })))
      }
      switchActiveCamera(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = TT, UT && TT.attachControl())
      }
      setActiveCameraById(TT) {
        const UT = this.getCameraById(TT);
        return UT ? (this.activeCamera = UT, UT) : null
      }
      setActiveCameraByName(TT) {
        const UT = this.getCameraByName(TT);
        return UT ? (this.activeCamera = UT, UT) : null
      }
      getAnimationGroupByName(TT) {
        for (let UT = 0; UT < this.animationGroups.length; UT++)
          if (this.animationGroups[UT].name === TT) return this.animationGroups[UT];
        return null
      }
      _getMaterial(TT, UT) {
        for (let mT = 0; mT < this.materials.length; mT++) {
          const TT = this.materials[mT];
          if (UT(TT)) return TT
        }
        if (TT)
          for (let mT = 0; mT < this.multiMaterials.length; mT++) {
            const TT = this.multiMaterials[mT];
            if (UT(TT)) return TT
          }
        return null
      }
      getMaterialByUniqueID(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(TT, UT)
      }
      getMaterialByUniqueId(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(UT, (UT => UT.uniqueId === TT))
      }
      getMaterialById(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(UT, (UT => UT.id === TT))
      }
      getMaterialByName(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(UT, (UT => UT.name === TT))
      }
      getLastMaterialById(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let mT = this.materials.length - 1; mT >= 0; mT--)
          if (this.materials[mT].id === TT) return this.materials[mT];
        if (UT)
          for (let mT = this.multiMaterials.length - 1; mT >= 0; mT--)
            if (this.multiMaterials[mT].id === TT) return this.multiMaterials[mT];
        return null
      }
      getTextureByUniqueId(TT) {
        for (let UT = 0; UT < this.textures.length; UT++)
          if (this.textures[UT].uniqueId === TT) return this.textures[UT];
        return null
      }
      getTextureByName(TT) {
        for (let UT = 0; UT < this.textures.length; UT++)
          if (this.textures[UT].name === TT) return this.textures[UT];
        return null
      }
      getCameraById(TT) {
        for (let UT = 0; UT < this.cameras.length; UT++)
          if (this.cameras[UT].id === TT) return this.cameras[UT];
        return null
      }
      getCameraByUniqueId(TT) {
        for (let UT = 0; UT < this.cameras.length; UT++)
          if (this.cameras[UT].uniqueId === TT) return this.cameras[UT];
        return null
      }
      getCameraByName(TT) {
        for (let UT = 0; UT < this.cameras.length; UT++)
          if (this.cameras[UT].name === TT) return this.cameras[UT];
        return null
      }
      getBoneById(TT) {
        for (let UT = 0; UT < this.skeletons.length; UT++) {
          const mT = this.skeletons[UT];
          for (let UT = 0; UT < mT.bones.length; UT++)
            if (mT.bones[UT].id === TT) return mT.bones[UT]
        }
        return null
      }
      getBoneByName(TT) {
        for (let UT = 0; UT < this.skeletons.length; UT++) {
          const mT = this.skeletons[UT];
          for (let UT = 0; UT < mT.bones.length; UT++)
            if (mT.bones[UT].name === TT) return mT.bones[UT]
        }
        return null
      }
      getLightByName(TT) {
        for (let UT = 0; UT < this.lights.length; UT++)
          if (this.lights[UT].name === TT) return this.lights[UT];
        return null
      }
      getLightById(TT) {
        for (let UT = 0; UT < this.lights.length; UT++)
          if (this.lights[UT].id === TT) return this.lights[UT];
        return null
      }
      getLightByUniqueId(TT) {
        for (let UT = 0; UT < this.lights.length; UT++)
          if (this.lights[UT].uniqueId === TT) return this.lights[UT];
        return null
      }
      getParticleSystemById(TT) {
        for (let UT = 0; UT < this.EY.length; UT++)
          if (this.EY[UT].id === TT) return this.EY[UT];
        return null
      }
      getGeometryById(TT) {
        for (let UT = 0; UT < this.geometries.length; UT++)
          if (this.geometries[UT].id === TT) return this.geometries[UT];
        return null
      }
      _getGeometryByUniqueId(TT) {
        if (this._geometriesByUniqueId) {
          const UT = this._geometriesByUniqueId[TT];
          if (void 0 !== UT) return this.geometries[UT]
        } else
          for (let UT = 0; UT < this.geometries.length; UT++)
            if (this.geometries[UT].uniqueId === TT) return this.geometries[UT];
        return null
      }
      getFrameGraphByName(TT) {
        for (let UT = 0; UT < this.frameGraphs.length; UT++)
          if (this.frameGraphs[UT].name === TT) return this.frameGraphs[UT];
        return null
      }
      pushGeometry(TT, UT) {
        return !(!UT && this._getGeometryByUniqueId(TT.uniqueId)) && (this.addGeometry(TT), zT.e.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(TT)
        })), !0)
      }
      removeGeometry(TT) {
        let UT;
        if (this._geometriesByUniqueId) {
          if (UT = this._geometriesByUniqueId[TT.uniqueId], void 0 === UT) return !1
        } else if (UT = this.geometries.indexOf(TT), UT < 0) return !1;
        if (UT !== this.geometries.length - 1) {
          const TT = this.geometries[this.geometries.length - 1];
          TT && (this.geometries[UT] = TT, this._geometriesByUniqueId && (this._geometriesByUniqueId[TT.uniqueId] = UT))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[TT.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(TT), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(TT) {
        for (let UT = 0; UT < this.meshes.length; UT++)
          if (this.meshes[UT].id === TT) return this.meshes[UT];
        return null
      }
      getMeshesById(TT) {
        return this.meshes.filter((function(UT) {
          return UT.id === TT
        }))
      }
      getTransformNodeById(TT) {
        for (let UT = 0; UT < this.transformNodes.length; UT++)
          if (this.transformNodes[UT].id === TT) return this.transformNodes[UT];
        return null
      }
      getTransformNodeByUniqueId(TT) {
        for (let UT = 0; UT < this.transformNodes.length; UT++)
          if (this.transformNodes[UT].uniqueId === TT) return this.transformNodes[UT];
        return null
      }
      getTransformNodesById(TT) {
        return this.transformNodes.filter((function(UT) {
          return UT.id === TT
        }))
      }
      getMeshByUniqueId(TT) {
        for (let UT = 0; UT < this.meshes.length; UT++)
          if (this.meshes[UT].uniqueId === TT) return this.meshes[UT];
        return null
      }
      getLastMeshById(TT) {
        for (let UT = this.meshes.length - 1; UT >= 0; UT--)
          if (this.meshes[UT].id === TT) return this.meshes[UT];
        return null
      }
      getLastTransformNodeById(TT) {
        for (let UT = this.transformNodes.length - 1; UT >= 0; UT--)
          if (this.transformNodes[UT].id === TT) return this.transformNodes[UT];
        return null
      }
      getLastEntryById(TT) {
        let UT;
        for (UT = this.meshes.length - 1; UT >= 0; UT--)
          if (this.meshes[UT].id === TT) return this.meshes[UT];
        for (UT = this.transformNodes.length - 1; UT >= 0; UT--)
          if (this.transformNodes[UT].id === TT) return this.transformNodes[UT];
        for (UT = this.cameras.length - 1; UT >= 0; UT--)
          if (this.cameras[UT].id === TT) return this.cameras[UT];
        for (UT = this.lights.length - 1; UT >= 0; UT--)
          if (this.lights[UT].id === TT) return this.lights[UT];
        for (UT = this.skeletons.length - 1; UT >= 0; UT--) {
          const mT = this.skeletons[UT];
          for (let UT = mT.bones.length - 1; UT >= 0; UT--)
            if (mT.bones[UT].id === TT) return mT.bones[UT]
        }
        return null
      }
      getNodeById(TT) {
        const UT = this.getMeshById(TT);
        if (UT) return UT;
        const mT = this.getTransformNodeById(TT);
        if (mT) return mT;
        const WT = this.getLightById(TT);
        if (WT) return WT;
        const zT = this.getCameraById(TT);
        if (zT) return zT;
        const MT = this.getBoneById(TT);
        return MT || null
      }
      getNodeByName(TT) {
        const UT = this.getMeshByName(TT);
        if (UT) return UT;
        const mT = this.getTransformNodeByName(TT);
        if (mT) return mT;
        const WT = this.getLightByName(TT);
        if (WT) return WT;
        const zT = this.getCameraByName(TT);
        if (zT) return zT;
        const MT = this.getBoneByName(TT);
        return MT || null
      }
      getMeshByName(TT) {
        for (let UT = 0; UT < this.meshes.length; UT++)
          if (this.meshes[UT].name === TT) return this.meshes[UT];
        return null
      }
      getTransformNodeByName(TT) {
        for (let UT = 0; UT < this.transformNodes.length; UT++)
          if (this.transformNodes[UT].name === TT) return this.transformNodes[UT];
        return null
      }
      getLastSkeletonById(TT) {
        for (let UT = this.skeletons.length - 1; UT >= 0; UT--)
          if (this.skeletons[UT].id === TT) return this.skeletons[UT];
        return null
      }
      getSkeletonByUniqueId(TT) {
        for (let UT = 0; UT < this.skeletons.length; UT++)
          if (this.skeletons[UT].uniqueId === TT) return this.skeletons[UT];
        return null
      }
      getSkeletonById(TT) {
        for (let UT = 0; UT < this.skeletons.length; UT++)
          if (this.skeletons[UT].id === TT) return this.skeletons[UT];
        return null
      }
      getSkeletonByName(TT) {
        for (let UT = 0; UT < this.skeletons.length; UT++)
          if (this.skeletons[UT].name === TT) return this.skeletons[UT];
        return null
      }
      getMorphTargetManagerById(TT) {
        for (let UT = 0; UT < this.morphTargetManagers.length; UT++)
          if (this.morphTargetManagers[UT].uniqueId === TT) return this.morphTargetManagers[UT];
        return null
      }
      getMorphTargetById(TT) {
        for (let UT = 0; UT < this.morphTargetManagers.length; ++UT) {
          const mT = this.morphTargetManagers[UT];
          for (let UT = 0; UT < mT.numTargets; ++UT) {
            const WT = mT.getTarget(UT);
            if (WT.id === TT) return WT
          }
        }
        return null
      }
      getMorphTargetByName(TT) {
        for (let UT = 0; UT < this.morphTargetManagers.length; ++UT) {
          const mT = this.morphTargetManagers[UT];
          for (let UT = 0; UT < mT.numTargets; ++UT) {
            const WT = mT.getTarget(UT);
            if (WT.name === TT) return WT
          }
        }
        return null
      }
      getPostProcessByName(TT) {
        for (let UT = 0; UT < this.postProcesses.length; ++UT) {
          const mT = this.postProcesses[UT];
          if (mT.name === TT) return mT
        }
        return null
      }
      isActiveMesh(TT) {
        return -1 !== this._activeMeshes.indexOf(TT)
      }
      get uid() {
        return this._uid || (this._uid = WT.j.RandomId()), this._uid
      }
      addExternalData(TT, UT) {
        return this._externalData || (this._externalData = new HT), this._externalData.add(TT, UT)
      }
      getExternalData(TT) {
        return this._externalData ? this._externalData.get(TT) : null
      }
      getOrAddExternalDataWithFactory(TT, UT) {
        return this._externalData || (this._externalData = new HT), this._externalData.getOrAddWithFactory(TT, UT)
      }
      removeExternalData(TT) {
        return this._externalData.remove(TT)
      }
      _evaluateSubMesh(TT, UT, mT, WT) {
        if (WT || TT.isInFrustum(this._frustumPlanes)) {
          for (let WT = 0, zT = this._evaluateSubMeshStage; WT < zT.length; WT++) {
            zT[WT].action(UT, TT)
          }
          const mT = TT.wB();
          null !== mT && void 0 !== mT && (mT.hasRenderTargetTextures && null != mT.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(mT) && (this._processedMaterials.push(mT), this._materialsRenderTargets.concatWithNoDuplicate(mT.getRenderTargetTextures())), this._renderingManager.dispatch(TT, UT, mT))
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
            const UT = this.activeCameras[TT];
            UT && UT._activeMeshes && UT._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let TT = 0; TT < this.textures.length; TT++) {
            const UT = this.textures[TT];
            UT && UT.renderList && UT.freeRenderingGroups()
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
          UT = arguments.length > 1 ? arguments[1] : void 0,
          mT = arguments.length > 2 ? arguments[2] : void 0,
          WT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const gT = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const TT of gT) TT.objectRenderer._freezeActiveMeshes(WT);
          return this._freezeActiveMeshesCancel = (0, zT.i)((() => {
            let TT = !0,
              UT = !0;
            for (const mT of gT) TT && (TT = mT.objectRenderer._isFrozen), UT && (UT = null !== mT.objectRenderer._freezeActiveMeshesCancel);
            if (TT) return !0;
            if (!UT) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = MT, this._skipEvaluateActiveMeshesCompletely = TT, UT?.()
          }), ((TT, UT) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), UT) {
              const UT = "Scene: Timeout while waiting for meshes to be frozen.";
              mT ? mT(UT) : (Tm.b.Error(UT), TT && Tm.b.Error(TT))
            } else {
              const UT = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              mT ? mT(UT) : (Tm.b.Error(UT), TT && (Tm.b.Error(TT), TT.stack && Tm.b.Error(TT.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = MT, this._skipEvaluateActiveMeshesCompletely = TT, WT)
              for (let TT = 0; TT < this._activeMeshes.length; TT++) this._activeMeshes.data[TT]._freeze();
            UT && UT()
          } else mT && mT("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let TT = 0; TT < this.meshes.length; TT++) {
          const UT = this.meshes[TT];
          UT._internalAbstractMeshDataInfo && (UT._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const TT = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const UT of TT) UT.objectRenderer._unfreezeActiveMeshes()
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
            for (let UT = 0; UT < TT; UT++) {
              this._activeMeshes.data[UT].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const TT = this._activeParticleSystems.length;
            for (let UT = 0; UT < TT; UT++) this._activeParticleSystems.data[UT].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let zT = 0, MT = this._beforeEvaluateActiveMeshStage; zT < MT.length; zT++) {
          MT[zT].action()
        }
        const TT = this.getActiveMeshCandidates(),
          UT = TT.length,
          mT = ST.b.Enabled,
          WT = this.customLODSelector;
        for (let zT = 0; zT < UT; zT++) {
          const UT = TT.data[zT],
            MT = !WT && !UT.RP && !UT._internalMeshDataInfo?._LODLevels.length;
          let gT, nT;
          if ((MT || (gT = UT._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), gT ? gT[1] = -1 : (gT = [UT, -1], UT._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, gT))), !UT.isBlocked) && (mT && this._totalVertices.addCount(UT.getTotalVertices(), !1), UT.isReady() && UT.isEnabled() && !UT.gp.hasAZeroComponent)) {
            if (UT.computeWorldMatrix(), UT.actionManager && UT.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(UT), MT) nT = UT;
            else if (nT = WT ? WT(UT, this.activeCamera) : UT.getLOD(this.activeCamera), gT[0] = nT, gT[1] = this._frameId, void 0 === nT || null === nT) continue;
            if (nT !== UT && 0 !== nT.billboardMode && nT.computeWorldMatrix(), UT._preActivate(), UT.isVisible && UT.visibility > 0 && 0 !== (UT.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || UT.YB || UT.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(UT), this.activeCamera._activeMeshes.push(UT), nT !== UT && nT._activate(this._renderId, !1);
              for (let TT = 0, mT = this._preActiveMeshStage; TT < mT.length; TT++) {
                mT[TT].action(UT)
              }
              UT._activate(this._renderId, !1) && (UT.RP ? UT._internalAbstractMeshDataInfo._actAsRegularMesh && (nT = UT) : nT._internalAbstractMeshDataInfo._onlyForInstances = !1, nT._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(UT, nT)), UT._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let TT = 0; TT < this.EY.length; TT++) {
            const UT = this.EY[TT];
            if (!UT.isStarted() || !UT.emitter) continue;
            const mT = UT.emitter;
            mT.position && !mT.isEnabled() || (this._activeParticleSystems.push(UT), UT.animate(), this._renderingManager.dispatchParticles(UT))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(TT) {
        this._skeletonsEnabled && TT.skeleton && (this._activeSkeletons.pushNoDuplicate(TT.skeleton) && (TT.skeleton.prepare(), this._activeBones.addCount(TT.skeleton.bones.length, !1)), TT.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(TT) && this.frameGraph && TT.applySkeleton(TT.skeleton))
      }
      _activeMesh(TT, UT) {
        this._prepareSkeleton(UT);
        let mT = TT.ZzT || TT.RP || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || UT.YB;
        if (UT && UT.rY && UT.rY.length > 0) {
          const WT = this.getActiveSubMeshCandidates(UT),
            zT = WT.length;
          mT = mT || 1 === zT;
          for (let MT = 0; MT < zT; MT++) {
            const zT = WT.data[MT];
            this._evaluateSubMesh(zT, UT, TT, mT)
          }
        }
      }
      updateTransformMatrix(TT) {
        const UT = this.activeCamera;
        if (UT)
          if (UT._renderingMultiview) {
            const mT = UT._rigCameras[0],
              WT = UT._rigCameras[1];
            this.setTransformMatrix(mT.getViewMatrix(), mT.getProjectionMatrix(TT), WT.getViewMatrix(), WT.getProjectionMatrix(TT))
          } else this.setTransformMatrix(UT.getViewMatrix(), UT.getProjectionMatrix(TT))
      }
      _bindFrameBuffer(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (TT && TT._multiviewTexture ? TT._multiviewTexture._bindFrameBuffer() : TT && TT.outputRenderTarget ? TT.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), UT && this._clearFrameBuffer(TT)
      }
      _clearFrameBuffer(TT) {
        if (TT && TT._multiviewTexture);
        else if (TT && TT.outputRenderTarget && !TT._renderingMultiview) {
          const UT = TT.outputRenderTarget;
          UT.onClearObservable.hasObservers() ? UT.onClearObservable.notifyObservers(this._engine) : UT.skipInitialClear || TT.isRightCamera || (this.autoClear && this._engine.clear(UT.clearColor || this._clearColor, !UT._cleared, !0, !0), UT._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(TT, UT) {
        let mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (TT && TT._skipRendering) return;
        const zT = this._engine;
        if (this._activeCamera = TT, !this.activeCamera) throw new Error("Active camera not set");
        if (zT.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && mT) {
          let UT = !0;
          TT._renderingMultiview && TT.outputRenderTarget && (UT = TT.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, TT.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), TT._renderingMultiview && TT.outputRenderTarget && (TT.outputRenderTarget.skipInitialClear = UT)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = TT.outputRenderTarget?.renderPassId ?? TT.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let WT = 0; WT < this._softwareSkinnedMeshes.length; WT++) {
          const TT = this._softwareSkinnedMeshes.data[WT];
          TT.applySkeleton(TT.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), TT.customRenderTargets && TT.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(TT.customRenderTargets), UT && UT.customRenderTargets && UT.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(UT.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let WT = 0, nT = this._gatherActiveCameraRenderTargetsStage; WT < nT.length; WT++) {
          nT[WT].action(this._renderTargets)
        }
        let MT = !1;
        if (this.renderTargetsEnabled) {
          let TT;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            WT.j.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const UT = this.getBoundingBoxRenderer?.();
            for (let mT = 0; mT < this._renderTargets.length; mT++) {
              const WT = this._renderTargets.data[mT];
              if (WT._shouldRender()) {
                this._renderId++;
                const mT = WT.activeCamera && WT.activeCamera !== this.activeCamera;
                UT && !TT && (TT = UT.renderList.length > 0 ? UT.renderList.data.slice() : [], TT.length = UT.renderList.length), WT.render(mT, this.dumpNextRenderTargets), MT = !0
              }
            }
            UT && TT && (UT.renderList.data = TT, UT.renderList.length = TT.length), WT.j.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const UT = this.getBoundingBoxRenderer?.();
            UT && !TT && (TT = UT.renderList.length > 0 ? UT.renderList.data.slice() : [], TT.length = UT.renderList.length);
            for (let TT = 0, mT = this._cameraDrawRenderTargetStage; TT < mT.length; TT++) {
              MT = mT[TT].action(this.activeCamera) || MT
            }
            UT && TT && (UT.renderList.data = TT, UT.renderList.length = TT.length)
          }
          this._intermediateRendering = !1
        }
        MT && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || TT._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let WT = 0, nT = this._beforeCameraDrawStage; WT < nT.length; WT++) {
          nT[WT].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const gT = zT.snapshotRendering && 1 === zT.snapshotRenderingMode;
        gT && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !gT), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let WT = 0, nT = this._afterCameraDrawStage; WT < nT.length; WT++) {
          nT[WT].action(this.activeCamera)
        }
        if (this.postProcessManager && !TT._multiviewTexture) {
          const UT = TT.outputRenderTarget ? TT.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(TT.isIntermediate, UT)
        }
        for (let WT = 0, nT = this._afterCameraPostProcessStage; WT < nT.length; WT++) {
          nT[WT].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === TT.cameraRigMode || TT._renderingMultiview) return TT._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(TT, void 0, UT), void this.onAfterRenderCameraObservable.notifyObservers(TT);
        if (TT._useMultiviewToSingleView) this._renderMultiviewToSingleView(TT);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(TT);
          for (let UT = 0; UT < TT._rigCameras.length; UT++) this._renderForCamera(TT._rigCameras[UT], TT)
        }
        this._activeCamera = TT, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(TT)
      }
      _checkIntersections() {
        for (let TT = 0; TT < this._meshesForIntersections.length; TT++) {
          const UT = this._meshesForIntersections.data[TT];
          if (UT.actionManager)
            for (let TT = 0; UT.actionManager && TT < UT.actionManager.actions.length; TT++) {
              const mT = UT.actionManager.actions[TT];
              if (12 === mT.trigger || 13 === mT.trigger) {
                const TT = mT.getTriggerParameter(),
                  WT = TT.mesh ? TT.mesh : TT,
                  zT = WT.HzT(UT, TT.usePreciseIntersection),
                  MT = UT._intersectionsInProgress.indexOf(WT);
                zT && -1 === MT ? 12 === mT.trigger ? (mT._executeCurrent(BT.CreateNew(UT, void 0, WT)), UT._intersectionsInProgress.push(WT)) : 13 === mT.trigger && UT._intersectionsInProgress.push(WT) : !zT && MT > -1 && (13 === mT.trigger && mT._executeCurrent(BT.CreateNew(UT, void 0, WT)), UT.actionManager.hasSpecificTrigger(13, (TT => {
                  const UT = TT.mesh ? TT.mesh : TT;
                  return WT === UT
                })) && 13 !== mT.trigger || UT._intersectionsInProgress.splice(MT, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(TT) {}
      _animate(TT) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let TT = Math.max(Mm.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Mm.MaxDeltaTime)) + this._timeAccumulator;
          const UT = this._engine.getTimeStep(),
            mT = 1e3 / UT / 1e3;
          let WT = 0;
          const zT = this._engine.getLockstepMaxSteps();
          let MT = Math.floor(TT / UT);
          for (MT = Math.min(MT, zT); TT > 0 && WT < MT;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = UT * mT, this._animate(UT), this.onAfterAnimationsObservable.notifyObservers(this), this.RC && this._advancePhysicsEngineStep(UT), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, WT++, TT -= UT;
          this._timeAccumulator = TT < 0 ? 0 : TT
        } else {
          const TT = this.useConstantAnimationDeltaTime ? 16 : Math.max(Mm.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Mm.MaxDeltaTime));
          this._animationRatio = .06 * TT, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.RC && this._advancePhysicsEngineStep(TT)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(TT) {
        if (TT?.outputRenderTarget && !TT?.isRigCamera && (TT.outputRenderTarget._cleared = !1), TT?.rigCameras?.length)
          for (let UT = 0; UT < TT.rigCameras.length; ++UT) {
            const mT = TT.rigCameras[UT].outputRenderTarget;
            mT && (mT._cleared = !1)
          }
      }
      resetDrawCache(TT) {
        if (this.meshes)
          for (const UT of this.meshes) UT.resetDrawCache(TT)
      }
      _renderWithFrameGraph() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          UT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, TT)
          for (const mT of this.cameras)
            if (mT.update(), 0 !== mT.cameraRigMode)
              for (let TT = 0; TT < mT._rigCameras.length; TT++) mT._rigCameras[TT].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(UT)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(TT) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const UT = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), WT.j.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let TT = 0; TT < this._renderTargets.length; TT++) {
            const mT = this._renderTargets.data[TT],
              WT = mT.activeCamera || UT;
            this._renderRenderTarget(mT, WT, !0, this.dumpNextRenderTargets)
          }
          WT.j.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let mT = 0, WT = this._beforeClearStage; mT < WT.length; mT++) {
          WT[mT].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const UT = this.getActiveMeshCandidates(),
            mT = UT.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let TT = 0; TT < mT; TT++) {
                const mT = UT.data[TT];
                mT._internalAbstractMeshDataInfo._wasActiveLastFrame && mT.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const TT = this._activeParticleSystems.length;
              for (let UT = 0; UT < TT; UT++) this._activeParticleSystems.data[UT].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let WT = 0; WT < mT; WT++) {
              const mT = UT.data[WT];
              mT._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, mT.isBlocked || (this._totalVertices.addCount(mT.getTotalVertices(), !1), mT.isReady() && mT.isEnabled() && !mT.gp.hasAZeroComponent && (mT.computeWorldMatrix(TT), mT.actionManager && mT.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(mT)))
            }
            if (this.particlesEnabled)
              for (let TT = 0; TT < this.EY.length; TT++) {
                const UT = this.EY[TT];
                if (!UT.isStarted() || !UT.emitter) continue;
                const mT = UT.emitter;
                mT.position && !mT.isEnabled() || (this._activeParticleSystems.push(UT), UT.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, TT._shouldRender()) {
          if (this._renderId++, this.activeCamera = UT, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), TT.render(mT, WT)
        }
        this._intermediateRendering = !1
      }
      render() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.bJ) return;
        const mT = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(TT, UT)
        } finally {
          this._renderingMeshEvaluationDepth = mT
        }
      }
      _renderFrame(TT, UT) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), cT.b.KF = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const mT of this.activeCameras) this._checkCameraRenderTarget(mT);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), UT || this.animate();
        for (let mT = 0, WT = this._beforeCameraUpdateStage; mT < WT.length; mT++) {
          WT[mT].action()
        }
        if (TT)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let mT = 0; mT < this.activeCameras.length; mT++) {
              const TT = this.activeCameras[mT];
              if (TT.update(), 0 !== TT.cameraRigMode)
                for (let UT = 0; UT < TT._rigCameras.length; UT++) TT._rigCameras[UT].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let mT = 0; mT < this.activeCamera._rigCameras.length; mT++) this.activeCamera._rigCameras[mT].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(TT, UT);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const TT = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            WT.j.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let UT = 0; UT < this.customRenderTargets.length; UT++) {
              const mT = this.customRenderTargets[UT],
                WT = mT.activeCamera || this.activeCamera;
              this._renderRenderTarget(mT, WT, TT !== WT, this.dumpNextRenderTargets)
            }
            WT.j.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = TT?.renderPassId ?? 0, this.activeCamera = TT, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let UT = 0, mT = this._beforeClearStage; UT < mT.length; UT++) {
            mT[UT].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let UT = 0, mT = this._gatherRenderTargetsStage; UT < mT.length; UT++) {
            mT[UT].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let UT = 0; UT < this.activeCameras.length; UT++) this._processSubCameras(this.activeCameras[UT], UT > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let mT = 0, WT = this._afterRenderStage; mT < WT.length; mT++) {
          WT[mT].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let TT = 0; TT < this._toBeDisposed.length; TT++) {
            const UT = this._toBeDisposed[TT];
            UT && UT.dispose()
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
        if (this.bJ) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, bT.e)(this.stopAllAnimations)) {
          for (const TT of this._activeAnimatables) TT.onAnimationEndObservable.clear(), TT.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const TT = this._activeRequests.slice();
        for (const MT of TT) MT.abort();
        this._activeRequests.length = 0;
        try {
          this.SF.notifyObservers(this)
        } catch (zT) {
          Tm.b.Error("An error occurred while calling onDisposeObservable!", zT)
        }
        this.detachControl();
        const UT = this._engine.getInputElement?.();
        if (UT)
          for (let MT = 0; MT < this.cameras.length; MT++) this.cameras[MT].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (TT => TT.dispose(!0))), this._disposeList(this.transformNodes, (TT => TT.dispose(!0)));
        const mT = this.cameras;
        this._disposeList(mT), this._disposeList(this.EY), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let WT = this._engine.scenes.indexOf(this);
        if (WT > -1 && this._engine.scenes.splice(WT, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, cT.d)(), iT.c._LastCreatedScene === this) {
          iT.c._LastCreatedScene = null;
          let TT = iT.c.Instances.length - 1;
          for (; TT >= 0;) {
            const UT = iT.c.Instances[TT];
            if (UT.scenes.length > 0) {
              iT.c._LastCreatedScene = UT.scenes[this._engine.scenes.length - 1];
              break
            }
            TT--
          }
        }
        WT = this._engine._virtualScenes.indexOf(this), WT > -1 && this._engine._virtualScenes.splice(WT, 1), this._engine.wipeCaches(!0), this.SF.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(TT, UT) {
        const mT = TT.slice(0);
        UT = UT ?? (TT => TT.dispose());
        for (const WT of mT) UT(WT);
        TT.length = 0
      }
      get bJ() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let TT = 0; TT < this.meshes.length; TT++) {
          const UT = this.meshes[TT].geometry;
          UT && UT.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const TT of this.textures) {
          TT._buffer && (TT._buffer = null)
        }
      }
      getWorldExtends(TT) {
        const UT = new jT.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          mT = new jT.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        TT = TT || (() => !0);
        const WT = this.meshes.filter(TT);
        for (const zT of WT) {
          if (zT.computeWorldMatrix(!0), !zT.rY || 0 === zT.rY.length || zT.infiniteDistance) continue;
          const TT = zT.rV(),
            WT = TT.boundingBox.minimumWorld,
            MT = TT.boundingBox.maximumWorld;
          jT.p.CheckExtends(WT, UT, mT), jT.p.CheckExtends(MT, UT, mT)
        }
        return UT.x === Number.MAX_VALUE ? {
          min: jT.p.Zero(),
          max: jT.p.Zero()
        } : {
          min: UT,
          max: mT
        }
      }
      createPickingRay(TT, UT, mT, WT) {
        throw (0, bT.k)("Ray")
      }
      createPickingRayToRef(TT, UT, mT, WT, zT) {
        throw (0, bT.k)("Ray")
      }
      createPickingRayInCameraSpace(TT, UT, mT) {
        throw (0, bT.k)("Ray")
      }
      createPickingRayInCameraSpaceToRef(TT, UT, mT, WT) {
        throw (0, bT.k)("Ray")
      }
      VL(TT, UT, mT, WT, zT, MT) {
        const gT = (0, bT.k)("Ray", !0);
        return gT && Tm.b.Warn(gT), new pT.c
      }
      pickWithBoundingInfo(TT, UT, mT, WT, zT) {
        const MT = (0, bT.k)("Ray", !0);
        return MT && Tm.b.Warn(MT), new pT.c
      }
      pickWithRay(TT, UT, mT, WT) {
        throw (0, bT.k)("Ray")
      }
      multiPick(TT, UT, mT, WT, zT) {
        throw (0, bT.k)("Ray")
      }
      multiPickWithRay(TT, UT, mT) {
        throw (0, bT.k)("Ray")
      }
      setPointerOverMesh(TT, UT, mT) {
        this._inputManager.setPointerOverMesh(TT, UT, mT)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const TT of this.geometries) TT._rebuild();
        for (const TT of this.meshes) TT._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const TT of this._components) TT.rebuild();
        for (const TT of this.EY) TT.rebuild();
        if (this.spriteManagers)
          for (const TT of this.spriteManagers) TT.rebuild()
      }
      _rebuildTextures() {
        for (const TT of this.textures) TT._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(TT, UT, mT) {
        if (void 0 === UT) return TT;
        const WT = [];
        for (const zT in TT) {
          const MT = TT[zT];
          kT.b && kT.b.MatchesQuery(MT, UT) && (!mT || mT(MT)) && WT.push(MT)
        }
        return WT
      }
      getMeshesByTags(TT, UT) {
        return this._getByTags(this.meshes, TT, UT)
      }
      getCamerasByTags(TT, UT) {
        return this._getByTags(this.cameras, TT, UT)
      }
      getLightsByTags(TT, UT) {
        return this._getByTags(this.lights, TT, UT)
      }
      getMaterialByTags(TT, UT) {
        return this._getByTags(this.materials, TT, UT).concat(this._getByTags(this.multiMaterials, TT, UT))
      }
      getTransformNodesByTags(TT, UT) {
        return this._getByTags(this.transformNodes, TT, UT)
      }
      setRenderingOrder(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(TT, UT, mT, WT)
      }
      setRenderingAutoClearDepthStencil(TT, UT) {
        let mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          WT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(TT, UT, mT, WT)
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
      markAllMaterialsAsDirty(TT, UT) {
        if (!this._blockMaterialDirtyMechanism)
          for (const mT of this.materials) UT && !UT(mT) || mT.NUT(TT)
      }
      _loadFile(TT, UT, mT, WT, zT, MT, gT) {
        const nT = (0, hT.n)(TT, UT, mT, WT ? this.offlineProvider : void 0, zT, MT, gT);
        return this._activeRequests.push(nT), nT.onCompleteObservable.add((TT => {
          this._activeRequests.splice(this._activeRequests.indexOf(TT), 1)
        })), nT
      }
      async _loadFileAsync(TT, UT, mT, WT, zT) {
        return await new Promise(((MT, gT) => {
          this._loadFile(TT, (TT => {
            MT(TT)
          }), UT, mT, WT, ((TT, UT) => {
            gT(UT)
          }), zT)
        }))
      }
      async _loadDelayedFileAsync(TT, UT, mT) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const WT = `${TT}|${UT?"binary":"string"}`;
        let zT = this._delayedFileRequests.get(WT);
        if (!zT) {
          zT = UT ? this._loadFileAsync(TT, void 0, mT, !0) : this._loadFileAsync(TT, void 0, mT, !1);
          const MT = zT;
          (async () => {
            try {
              await MT
            } catch {}
            this._delayedFileRequests?.delete(WT)
          })(), this._delayedFileRequests.set(WT, zT)
        }
        return await zT
      }
      _requestFile(TT, UT, mT, WT, zT, MT, gT) {
        const nT = (0, hT.z)(TT, UT, mT, WT ? this.offlineProvider : void 0, zT, MT, gT);
        return this._activeRequests.push(nT), nT.onCompleteObservable.add((TT => {
          this._activeRequests.splice(this._activeRequests.indexOf(TT), 1)
        })), nT
      }
      async _requestFileAsync(TT, UT, mT, WT, zT) {
        return await new Promise(((MT, gT) => {
          this._requestFile(TT, (TT => {
            MT(TT)
          }), UT, mT, WT, (TT => {
            gT(TT)
          }), zT)
        }))
      }
      _readFile(TT, UT, mT, WT, zT) {
        const MT = (0, hT.u)(TT, UT, mT, WT, zT);
        return this._activeRequests.push(MT), MT.onCompleteObservable.add((TT => {
          this._activeRequests.splice(this._activeRequests.indexOf(TT), 1)
        })), MT
      }
      async _readFileAsync(TT, UT, mT) {
        return await new Promise(((WT, zT) => {
          this._readFile(TT, (TT => {
            WT(TT)
          }), UT, mT, (TT => {
            zT(TT)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, bT.k)("performanceViewerSceneExtension")
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
    Mm.FOGMODE_NONE = 0, Mm.FOGMODE_EXP = 1, Mm.FOGMODE_EXP2 = 2, Mm.FOGMODE_LINEAR = 3, Mm.MinDeltaTime = 1, Mm.MaxDeltaTime = 1e3, Mm._OriginalDefaultMaterialFactory = Mm.DefaultMaterialFactory;
    let gm = !1;

    function nm() {
      gm || (gm = !0, (0, Um.h)("BABYLON.Scene", Mm))
    }(RT = Mm.prototype).sortActiveAnimatables ?? (RT.sortActiveAnimatables = (0, bT.j)("Scene", "sortActiveAnimatables")), (TU = Mm.prototype).beginWeightedAnimation ?? (TU.beginWeightedAnimation = (0, bT.j)("Scene", "beginWeightedAnimation")), (UU = Mm.prototype).beginAnimation ?? (UU.beginAnimation = (0, bT.j)("Scene", "beginAnimation")), (mU = Mm.prototype).beginHierarchyAnimation ?? (mU.beginHierarchyAnimation = (0, bT.j)("Scene", "beginHierarchyAnimation")), (WU = Mm.prototype).beginDirectAnimation ?? (WU.beginDirectAnimation = (0, bT.j)("Scene", "beginDirectAnimation")), (zU = Mm.prototype).beginDirectHierarchyAnimation ?? (zU.beginDirectHierarchyAnimation = (0, bT.j)("Scene", "beginDirectHierarchyAnimation")), (MU = Mm.prototype).getAnimatableByTarget ?? (MU.getAnimatableByTarget = (0, bT.j)("Scene", "getAnimatableByTarget")), (gU = Mm.prototype).getAllAnimatablesByTarget ?? (gU.getAllAnimatablesByTarget = (0, bT.j)("Scene", "getAllAnimatablesByTarget")), (nU = Mm.prototype).stopAllAnimations ?? (nU.stopAllAnimations = (0, bT.j)("Scene", "stopAllAnimations")), (HU = Mm.prototype).getSoundByName ?? (HU.getSoundByName = (0, bT.j)("Scene", "getSoundByName")), (kU = Mm.prototype).createOrUpdateSelectionOctree ?? (kU.createOrUpdateSelectionOctree = (0, bT.j)("Scene", "createOrUpdateSelectionOctree")), (jU = Mm.prototype).createDefaultLight ?? (jU.createDefaultLight = (0, bT.j)("Scene", "createDefaultLight")), (lU = Mm.prototype).createDefaultCamera ?? (lU.createDefaultCamera = (0, bT.j)("Scene", "createDefaultCamera")), (LU = Mm.prototype).createDefaultCameraOrLight ?? (LU.createDefaultCameraOrLight = (0, bT.j)("Scene", "createDefaultCameraOrLight")), (pU = Mm.prototype).createDefaultSkybox ?? (pU.createDefaultSkybox = (0, bT.j)("Scene", "createDefaultSkybox")), (BU = Mm.prototype).createDefaultEnvironment ?? (BU.createDefaultEnvironment = (0, bT.j)("Scene", "createDefaultEnvironment")), (ZU = Mm.prototype).createDefaultVRExperience ?? (ZU.createDefaultVRExperience = (0, bT.j)("Scene", "createDefaultVRExperience")), (cU = Mm.prototype).createDefaultXRExperienceAsync ?? (cU.createDefaultXRExperienceAsync = (0, bT.j)("Scene", "createDefaultXRExperienceAsync")), (vU = Mm.prototype).getGlowLayerByName ?? (vU.getGlowLayerByName = (0, bT.j)("Scene", "getGlowLayerByName")), (fU = Mm.prototype).getHighlightLayerByName ?? (fU.getHighlightLayerByName = (0, bT.j)("Scene", "getHighlightLayerByName")), (qU = Mm.prototype).getSelectionOutlineLayerByName ?? (qU.getSelectionOutlineLayerByName = (0, bT.j)("Scene", "getSelectionOutlineLayerByName")), (iU = Mm.prototype).removeLensFlareSystem ?? (iU.removeLensFlareSystem = (0, bT.j)("Scene", "removeLensFlareSystem")), (bU = Mm.prototype).addLensFlareSystem ?? (bU.addLensFlareSystem = (0, bT.j)("Scene", "addLensFlareSystem")), (OU = Mm.prototype).getLensFlareSystemByName ?? (OU.getLensFlareSystemByName = (0, bT.j)("Scene", "getLensFlareSystemByName")), (eU = Mm.prototype).getLensFlareSystemByID ?? (eU.getLensFlareSystemByID = (0, bT.j)("Scene", "getLensFlareSystemByID")), (YU = Mm.prototype).getLensFlareSystemById ?? (YU.getLensFlareSystemById = (0, bT.j)("Scene", "getLensFlareSystemById")), (JU = Mm.prototype).getPhysicsEngine ?? (JU.getPhysicsEngine = (0, bT.j)("Scene", "getPhysicsEngine")), (xU = Mm.prototype).enablePhysics ?? (xU.enablePhysics = (0, bT.j)("Scene", "enablePhysics")), (dU = Mm.prototype).disablePhysicsEngine ?? (dU.disablePhysicsEngine = (0, bT.j)("Scene", "disablePhysicsEngine")), (wU = Mm.prototype).isPhysicsEnabled ?? (wU.isPhysicsEnabled = (0, bT.j)("Scene", "isPhysicsEnabled")), (tU = Mm.prototype).deleteCompoundImpostor ?? (tU.deleteCompoundImpostor = (0, bT.j)("Scene", "deleteCompoundImpostor")), (aU = Mm.prototype).removeReflectionProbe ?? (aU.removeReflectionProbe = (0, bT.j)("Scene", "removeReflectionProbe")), (yU = Mm.prototype).addReflectionProbe ?? (yU.addReflectionProbe = (0, bT.j)("Scene", "addReflectionProbe")), (XU = Mm.prototype).getBoundingBoxRenderer ?? (XU.getBoundingBoxRenderer = (0, bT.j)("Scene", "getBoundingBoxRenderer")), (IU = Mm.prototype).enableDepthRenderer ?? (IU.enableDepthRenderer = (0, bT.j)("Scene", "enableDepthRenderer")), (QU = Mm.prototype).disableDepthRenderer ?? (QU.disableDepthRenderer = (0, bT.j)("Scene", "disableDepthRenderer")), (sU = Mm.prototype).enableFluidRenderer ?? (sU.enableFluidRenderer = (0, bT.j)("Scene", "enableFluidRenderer")), (FU = Mm.prototype).disableFluidRenderer ?? (FU.disableFluidRenderer = (0, bT.j)("Scene", "disableFluidRenderer")), (PU = Mm.prototype).enableGeometryBufferRenderer ?? (PU.enableGeometryBufferRenderer = (0, bT.j)("Scene", "enableGeometryBufferRenderer")), (VU = Mm.prototype).disableGeometryBufferRenderer ?? (VU.disableGeometryBufferRenderer = (0, bT.j)("Scene", "disableGeometryBufferRenderer")), (uU = Mm.prototype).enableIblCdfGenerator ?? (uU.enableIblCdfGenerator = (0, bT.j)("Scene", "enableIblCdfGenerator")), (CU = Mm.prototype).disableIblCdfGenerator ?? (CU.disableIblCdfGenerator = (0, bT.j)("Scene", "disableIblCdfGenerator")), (rU = Mm.prototype).getOutlineRenderer ?? (rU.getOutlineRenderer = (0, bT.j)("Scene", "getOutlineRenderer")), (KU = Mm.prototype).enablePrePassRenderer ?? (KU.enablePrePassRenderer = (0, bT.j)("Scene", "enablePrePassRenderer")), (SU = Mm.prototype).disablePrePassRenderer ?? (SU.disablePrePassRenderer = (0, bT.j)("Scene", "disablePrePassRenderer")), (GU = Mm.prototype).enableSubSurfaceForPrePass ?? (GU.enableSubSurfaceForPrePass = (0, bT.j)("Scene", "enableSubSurfaceForPrePass")), (NU = Mm.prototype).disableSubSurfaceForPrePass ?? (NU.disableSubSurfaceForPrePass = (0, bT.j)("Scene", "disableSubSurfaceForPrePass")), (EU = Mm.prototype).pickSprite ?? (EU.pickSprite = (0, bT.j)("Scene", "pickSprite")), (hU = Mm.prototype).pickSpriteWithRay ?? (hU.pickSpriteWithRay = (0, bT.j)("Scene", "pickSpriteWithRay")), (DU = Mm.prototype).multiPickSprite ?? (DU.multiPickSprite = (0, bT.j)("Scene", "multiPickSprite")), (oU = Mm.prototype).multiPickSpriteWithRay ?? (oU.multiPickSpriteWithRay = (0, bT.j)("Scene", "multiPickSpriteWithRay")), (AU = Mm.prototype).setPointerOverSprite ?? (AU.setPointerOverSprite = (0, bT.j)("Scene", "setPointerOverSprite")), (RU = Mm.prototype).getPointerOverSprite ?? (RU.getPointerOverSprite = (0, bT.j)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(Mm.prototype, "mainSoundTrack") || Object.defineProperty(Mm.prototype, "mainSoundTrack", (0, bT.h)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(Mm.prototype, "soundTracks") || Object.defineProperty(Mm.prototype, "soundTracks", (0, bT.h)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(Mm.prototype, "audioEnabled") || Object.defineProperty(Mm.prototype, "audioEnabled", (0, bT.h)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(Mm.prototype, "headphone") || Object.defineProperty(Mm.prototype, "headphone", (0, bT.h)("Scene", "headphone")), Object.getOwnPropertyDescriptor(Mm.prototype, "audioListenerPositionProvider") || Object.defineProperty(Mm.prototype, "audioListenerPositionProvider", (0, bT.h)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(Mm.prototype, "audioListenerRotationProvider") || Object.defineProperty(Mm.prototype, "audioListenerRotationProvider", (0, bT.h)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(Mm.prototype, "audioPositioningRefreshRate") || Object.defineProperty(Mm.prototype, "audioPositioningRefreshRate", (0, bT.h)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(Mm.prototype, "selectionOctree") || Object.defineProperty(Mm.prototype, "selectionOctree", (0, bT.h)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(Mm.prototype, "debugLayer") || Object.defineProperty(Mm.prototype, "debugLayer", (0, bT.h)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(Mm.prototype, "gamepadManager") || Object.defineProperty(Mm.prototype, "gamepadManager", (0, bT.h)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(Mm.prototype, "simplificationQueue") || Object.defineProperty(Mm.prototype, "simplificationQueue", (0, bT.h)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(Mm.prototype, "onBeforePhysicsObservable") || Object.defineProperty(Mm.prototype, "onBeforePhysicsObservable", (0, bT.h)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(Mm.prototype, "onAfterPhysicsObservable") || Object.defineProperty(Mm.prototype, "onAfterPhysicsObservable", (0, bT.h)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(Mm.prototype, "reflectionProbes") || Object.defineProperty(Mm.prototype, "reflectionProbes", (0, bT.h)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(Mm.prototype, "forceShowBoundingBoxes") || Object.defineProperty(Mm.prototype, "forceShowBoundingBoxes", (0, bT.h)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(Mm.prototype, "depthPeelingRenderer") || Object.defineProperty(Mm.prototype, "depthPeelingRenderer", (0, bT.h)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(Mm.prototype, "useOrderIndependentTransparency") || Object.defineProperty(Mm.prototype, "useOrderIndependentTransparency", (0, bT.h)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(Mm.prototype, "fluidRenderer") || Object.defineProperty(Mm.prototype, "fluidRenderer", (0, bT.h)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(Mm.prototype, "geometryBufferRenderer") || Object.defineProperty(Mm.prototype, "geometryBufferRenderer", (0, bT.h)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(Mm.prototype, "iblCdfGenerator") || Object.defineProperty(Mm.prototype, "iblCdfGenerator", (0, bT.h)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(Mm.prototype, "prePassRenderer") || Object.defineProperty(Mm.prototype, "prePassRenderer", (0, bT.h)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(Mm.prototype, "subSurfaceConfiguration") || Object.defineProperty(Mm.prototype, "subSurfaceConfiguration", (0, bT.h)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(Mm.prototype, "spriteManagers") || Object.defineProperty(Mm.prototype, "spriteManagers", (0, bT.h)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(Mm.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(Mm.prototype, "onBeforeSpritesRenderingObservable", (0, bT.h)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(Mm.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(Mm.prototype, "onAfterSpritesRenderingObservable", (0, bT.h)("Scene", "onAfterSpritesRenderingObservable"))
  },
  40283: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT,
      d: () => zT
    });
    class WT {}
    WT.NAME_EFFECTLAYER = "EffectLayer", WT.NAME_LAYER = "Layer", WT.NAME_LENSFLARESYSTEM = "LensFlareSystem", WT.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", WT.NAME_PARTICLESYSTEM = "ParticleSystem", WT.NAME_GAMEPAD = "Gamepad", WT.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", WT.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", WT.NAME_PREPASSRENDERER = "PrePassRenderer", WT.NAME_DEPTHRENDERER = "DepthRenderer", WT.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", WT.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", WT.NAME_SPRITE = "Sprite", WT.NAME_SUBSURFACE = "SubSurface", WT.NAME_OUTLINERENDERER = "Outline", WT.NAME_PROCEDURALTEXTURE = "ProceduralTexture", WT.NAME_SHADOWGENERATOR = "ShadowGenerator", WT.NAME_OCTREE = "dWT", WT.NAME_PHYSICSENGINE = "PhysicsEngine", WT.NAME_AUDIO = "Audio", WT.NAME_FLUIDRENDERER = "FluidRenderer", WT.NAME_IBLCDFGENERATOR = "iblCDFGenerator", WT.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", WT.STEP_ISREADYFORMESH_EFFECTLAYER = 0, WT.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, WT.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, WT.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, WT.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, WT.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, WT.STEP_BEFORECAMERADRAW_PREPASS = 0, WT.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, WT.STEP_BEFORECAMERADRAW_LAYER = 2, WT.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, WT.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, WT.STEP_BEFORERENDERINGMESH_PREPASS = 0, WT.STEP_BEFORERENDERINGMESH_OUTLINE = 1, WT.STEP_AFTERRENDERINGMESH_PREPASS = 0, WT.STEP_AFTERRENDERINGMESH_OUTLINE = 1, WT.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, WT.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, WT.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, WT.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, WT.STEP_BEFORECLEAR_PREPASS = 1, WT.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, WT.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, WT.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, WT.STEP_AFTERCAMERADRAW_PREPASS = 0, WT.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, WT.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, WT.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, WT.STEP_AFTERCAMERADRAW_LAYER = 4, WT.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, WT.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, WT.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, WT.STEP_AFTERRENDER_AUDIO = 0, WT.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, WT.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, WT.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, WT.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, WT.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, WT.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, WT.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, WT.STEP_POINTERMOVE_SPRITE = 0, WT.STEP_POINTERDOWN_SPRITE = 0, WT.STEP_POINTERUP_SPRITE = 0;
    class zT extends Array {
      constructor(TT) {
        super(...TT)
      }
      static Create() {
        return Object.create(zT.prototype)
      }
      registerStep(TT, UT, mT) {
        let WT, zT = 0;
        for (; zT < this.length; zT++) {
          if (WT = this[zT].index, TT < WT) break
        }
        this.splice(zT, 0, {
          index: TT,
          component: UT,
          action: mT.bind(UT)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  40095: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT,
      e: () => nT,
      h: () => WT,
      k: () => zT,
      m: () => MT
    });

    function WT(TT, UT, mT, WT, zT, MT) {
      function gT(TT) {
        if (void 0 !== TT && "function" !== typeof TT) throw new TypeError("Function expected");
        return TT
      }
      for (var nT, HT = WT.kind, kT = "getter" === HT ? "get" : "setter" === HT ? "set" : "value", jT = !UT && TT ? WT.static ? TT : TT.prototype : null, lT = UT || (jT ? Object.getOwnPropertyDescriptor(jT, WT.name) : {}), LT = !1, pT = mT.length - 1; pT >= 0; pT--) {
        var BT = {};
        for (var ZT in WT) BT[ZT] = "access" === ZT ? {} : WT[ZT];
        for (var ZT in WT.access) BT.access[ZT] = WT.access[ZT];
        BT.addInitializer = function(TT) {
          if (LT) throw new TypeError("Cannot add initializers after decoration has completed");
          MT.push(gT(TT || null))
        };
        var cT = (0, mT[pT])("accessor" === HT ? {
          get: lT.get,
          set: lT.set
        } : lT[kT], BT);
        if ("accessor" === HT) {
          if (void 0 === cT) continue;
          if (null === cT || "object" !== typeof cT) throw new TypeError("Object expected");
          (nT = gT(cT.get)) && (lT.get = nT), (nT = gT(cT.set)) && (lT.set = nT), (nT = gT(cT.init)) && zT.unshift(nT)
        } else(nT = gT(cT)) && ("field" === HT ? zT.unshift(nT) : lT[kT] = nT)
      }
      jT && Object.defineProperty(jT, WT.name, lT), LT = !0
    }

    function zT(TT, UT, mT) {
      for (var WT = arguments.length > 2, zT = 0; zT < UT.length; zT++) mT = WT ? UT[zT].call(TT, mT) : UT[zT].call(TT);
      return WT ? mT : void 0
    }

    function MT(TT, UT, mT) {
      return "symbol" === typeof UT && (UT = UT.description ? "[".concat(UT.description, "]") : ""), Object.defineProperty(TT, "name", {
        configurable: !0,
        value: mT ? "".concat(mT, " ", UT) : UT
      })
    }
    Object.create;
    Object.create;

    function gT(TT, UT, mT, WT) {
      if ("a" === mT && !WT) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof UT ? TT !== UT || !WT : !UT.has(TT)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === mT ? WT : "a" === mT ? WT.call(TT) : WT ? WT.value : UT.get(TT)
    }

    function nT(TT, UT, mT, WT, zT) {
      if ("m" === WT) throw new TypeError("Private method is not writable");
      if ("a" === WT && !zT) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof UT ? TT !== UT || !zT : !UT.has(TT)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === WT ? zT.call(TT, mT) : zT ? zT.value = mT : UT.set(TT, mT), mT
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);