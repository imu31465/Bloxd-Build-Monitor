export const id = 281;
export const ids = [281];
export const modules = {
  41427: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => tH,
      d: () => QH,
      f: () => CH,
      i: () => zH
    });
    var AH = LH(41218),
      rH = LH(39595),
      SH = LH(41356),
      hH = LH(41260);
    class tH {
      get mV() {
        return this._isDisposed
      }
      constructor(HH, BH, LH) {
        let rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          SH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          tH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          zH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          CH = arguments.length > 7 ? arguments[7] : void 0,
          EH = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, hH.c)(), HH && HH.yN ? this._engine = HH.yN().Iu() : this._engine = HH, this._updatable = LH, this._instanced = tH, this._divisor = CH || 1, this._label = EH, BH instanceof AH.e ? (this._data = null, this._buffer = BH) : (this._data = BH, this._buffer = null), this.byteStride = zH ? rH : rH * Float32Array.BYTES_PER_ELEMENT, SH || this.create()
      }
      createVertexBuffer(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          hH = arguments.length > 6 ? arguments[6] : void 0;
        const tH = SH ? BH : BH * Float32Array.BYTES_PER_ELEMENT,
          CH = AH ? SH ? AH : AH * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new zH(this._engine, this, HH, this._updatable, !0, CH, void 0 === rH ? this._instanced : rH, tH, LH, void 0, void 0, !0, this._divisor || hH)
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
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !HH && this._buffer || (HH = HH || this._data, HH && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, HH), this._data = HH) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(HH, this._label), this._data = HH) : this._buffer = this._engine.createVertexBuffer(HH, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.aX > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.aX, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.aX, void 0, this._label));
          rH.e.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(HH) {
        this.create(HH)
      }
      updateDirectly(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, HH, AH ? BH : BH * Float32Array.BYTES_PER_ELEMENT, LH ? LH * this.byteStride : void 0), this._data = 0 === BH && void 0 === LH ? HH : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class zH {
      get mV() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(HH) {
        const BH = 0 != HH;
        this._instanceDivisor = HH, BH !== this._instanced && (this._instanced = BH, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const HH = this.getData();
        return HH ? Array.isArray(HH) ? HH.length / (this.byteStride / 4) - this.byteOffset / 4 : (HH.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(HH, BH, LH, AH, rH, hH, XH, GH, YH, uH) {
        let QH, WH = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          MH = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          xH = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          vH = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = HH, "object" === typeof AH && null !== AH ? (QH = AH.updatable ?? !1, rH = AH.postponeInternalCreation, hH = AH.stride, XH = AH.instanced, GH = AH.offset, YH = AH.size, uH = AH.type, WH = AH.normalized ?? !1, MH = AH.useBytes ?? !1, xH = AH.divisor ?? 1, vH = AH.takeBufferOwnership ?? !1, this._label = AH.label) : QH = !!AH, BH instanceof tH ? (this._buffer = BH, this._ownsBuffer = vH) : (this._buffer = new tH(HH, BH, QH, hH, rH, XH, MH, xH, this._label), this._ownsBuffer = !0), this.uniqueId = zH._Counter++, this._kind = LH, void 0 === uH) {
          const HH = this.getData();
          this.type = HH ? EH(HH) : zH.FLOAT
        } else this.type = uH;
        const PH = (0, SH.q)(this.type);
        MH ? (this._size = YH || (hH ? hH / PH : CH(LH)), this.byteStride = hH || this._buffer.byteStride || this._size * PH, this.byteOffset = GH || 0) : (this._size = YH || hH || CH(LH), this.byteStride = hH ? hH * PH : this._buffer.byteStride || this._size * PH, this.byteOffset = (GH || 0) * PH), this.normalized = WH, this._instanced = void 0 !== XH && XH, this._instanceDivisor = XH ? xH : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(HH) {
        switch (HH) {
          case zH.BYTE:
            return 0;
          case zH.UNSIGNED_BYTE:
            return 1;
          case zH.SHORT:
            return 2;
          case zH.UNSIGNED_SHORT:
            return 3;
          case zH.INT:
            return 4;
          case zH.UNSIGNED_INT:
            return 5;
          case zH.FLOAT:
            return 6;
          case zH.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${HH}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (zH._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(HH, BH) {
        const LH = this.getData();
        return LH ? (0, SH.p)(LH, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, HH, BH) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, SH.q)(this.type)
      }
      xAH() {
        return this.byteOffset / (0, SH.q)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, SH.q)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(HH) {
        this._buffer.create(HH), this._alignBuffer()
      }
      update(HH) {
        this._buffer.update(HH), this._alignBuffer()
      }
      updateDirectly(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(HH, BH, void 0, LH), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(HH, BH) {
        (0, SH.j)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, HH, this.normalized, ((HH, LH) => {
          for (let AH = 0; AH < this._size; AH++) BH(HH[AH], LH + AH)
        }))
      }
      _alignBuffer() {}
    }

    function CH(HH) {
      switch (HH) {
        case zH.UVKind:
        case zH.UV2Kind:
        case zH.UV3Kind:
        case zH.UV4Kind:
        case zH.UV5Kind:
        case zH.UV6Kind:
          return 2;
        case zH.NormalKind:
        case zH.PositionKind:
          return 3;
        case zH.ColorKind:
        case zH.ColorInstanceKind:
        case zH.MatricesIndicesKind:
        case zH.MatricesIndicesExtraKind:
        case zH.MatricesWeightsKind:
        case zH.MatricesWeightsExtraKind:
        case zH.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + HH + "'")
      }
    }

    function EH(HH) {
      return HH instanceof Int8Array ? zH.BYTE : HH instanceof Uint8Array ? zH.UNSIGNED_BYTE : HH instanceof Int16Array ? zH.SHORT : HH instanceof Uint16Array ? zH.UNSIGNED_SHORT : HH instanceof Int32Array ? zH.INT : HH instanceof Uint32Array ? zH.UNSIGNED_INT : zH.FLOAT
    }

    function XH(HH) {
      return (0, SH.q)(HH)
    }

    function GH(HH, BH, LH, AH, rH, hH, tH, zH) {
      (0, SH.j)(HH, BH, LH, AH, rH, hH, tH, ((HH, BH) => {
        for (let LH = 0; LH < AH; LH++) zH(HH[LH], BH + LH)
      }))
    }

    function YH(HH, BH, LH, AH, rH, hH, tH, zH) {
      return (0, SH.p)(HH, BH, LH, AH, rH, hH, tH, zH)
    }
    zH._Counter = 0, zH.BYTE = 5120, zH.UNSIGNED_BYTE = 5121, zH.SHORT = 5122, zH.UNSIGNED_SHORT = 5123, zH.INT = 5124, zH.UNSIGNED_INT = 5125, zH.FLOAT = 5126, zH.HALF_FLOAT = 5131, zH.PositionKind = "position", zH.NormalKind = "normal", zH.TangentKind = "tangent", zH.UVKind = "uv", zH.UV2Kind = "uv2", zH.UV3Kind = "uv3", zH.UV4Kind = "uv4", zH.UV5Kind = "uv5", zH.UV6Kind = "uv6", zH.ColorKind = "color", zH.ColorInstanceKind = "instanceColor", zH.MatricesIndicesKind = "matricesIndices", zH.MatricesWeightsKind = "matricesWeights", zH.MatricesIndicesExtraKind = "matricesIndicesExtra", zH.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let uH = !1;

    function QH() {
      uH || (uH = !0, zH.DeduceStride = CH, zH.GetDataType = EH, zH.GetTypeByteLength = XH, zH.ForEach = GH, zH.GetFloatData = YH)
    }
  },
  41218: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH
    });
    class AH {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.aX = 0, this.is32Bits = !1, this.uniqueId = AH._Counter++
      }
    }
    AH._Counter = 0
  },
  41420: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => SH
    });
    var AH = LH(37963),
      rH = LH(41427);
    class SH {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || BH && !this.pickedMesh.isVerticesDataPresent(rH.i.NormalKind)) return null;
        let LH, SH = this.pickedMesh.vrH();
        0 === SH?.length && (SH = null);
        const hH = AH.l.lu[0],
          tH = AH.l.lu[1],
          zH = AH.l.lu[2];
        if (BH) {
          const HH = this.pickedMesh.getVerticesData(rH.i.NormalKind);
          let BH = SH ? AH.o.FromArrayToRef(HH, 3 * SH[3 * this.faceId], hH) : hH.SBH(HH[3 * this.faceId * 3], HH[3 * this.faceId * 3 + 1], HH[3 * this.faceId * 3 + 2]),
            CH = SH ? AH.o.FromArrayToRef(HH, 3 * SH[3 * this.faceId + 1], tH) : tH.SBH(HH[3 * (3 * this.faceId + 1)], HH[3 * (3 * this.faceId + 1) + 1], HH[3 * (3 * this.faceId + 1) + 2]),
            EH = SH ? AH.o.FromArrayToRef(HH, 3 * SH[3 * this.faceId + 2], zH) : zH.SBH(HH[3 * (3 * this.faceId + 2)], HH[3 * (3 * this.faceId + 2) + 1], HH[3 * (3 * this.faceId + 2) + 2]);
          BH = BH.scale(this.bu), CH = CH.scale(this.bv), EH = EH.scale(1 - this.bu - this.bv), LH = new AH.o(BH.x + CH.x + EH.x, BH.y + CH.y + EH.y, BH.z + CH.z + EH.z)
        } else {
          const HH = this.pickedMesh.getVerticesData(rH.i.PositionKind),
            BH = SH ? AH.o.FromArrayToRef(HH, 3 * SH[3 * this.faceId], hH) : hH.SBH(HH[3 * this.faceId * 3], HH[3 * this.faceId * 3 + 1], HH[3 * this.faceId * 3 + 2]),
            CH = SH ? AH.o.FromArrayToRef(HH, 3 * SH[3 * this.faceId + 1], tH) : tH.SBH(HH[3 * (3 * this.faceId + 1)], HH[3 * (3 * this.faceId + 1) + 1], HH[3 * (3 * this.faceId + 1) + 2]),
            EH = SH ? AH.o.FromArrayToRef(HH, 3 * SH[3 * this.faceId + 2], zH) : zH.SBH(HH[3 * (3 * this.faceId + 2)], HH[3 * (3 * this.faceId + 2) + 1], HH[3 * (3 * this.faceId + 2) + 2]),
            XH = BH.subtract(CH),
            GH = EH.subtract(CH);
          LH = AH.o.Cross(XH, GH)
        }
        const CH = (HH, BH) => {
          if (-1 !== this.thinInstanceIndex) {
            const LH = HH._thinInstanceDataStorage.matrixData,
              rH = this.thinInstanceIndex << 4;
            if (LH && LH.length > rH) {
              const HH = AH.l.Matrix[0];
              AH.e.FromArrayToRef(LH, rH, HH), AH.o.TransformNormalToRef(BH, HH, BH)
            }
          }
          let LH = HH.getWorldMatrix();
          HH.nonUniformScaling && (AH.l.Matrix[0].Tm(LH), LH = AH.l.Matrix[0], LH.setTranslationFromFloats(0, 0, 0), LH.invert(), LH.transposeToRef(AH.l.Matrix[1]), LH = AH.l.Matrix[1]), AH.o.TransformNormalToRef(BH, LH, BH)
        };
        if (HH && CH(this.pickedMesh, LH), this.ray) {
          const BH = AH.l.lu[0].Tm(LH);
          HH || CH(this.pickedMesh, BH), AH.o.Dot(BH, this.ray.direction) > 0 && LH.negateInPlace()
        }
        return LH.normalize(), LH
      }
      getTextureCoordinates() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rH.i.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(HH)) return null;
        const BH = this.pickedMesh.vrH();
        if (!BH) return null;
        const LH = this.pickedMesh.getVerticesData(HH);
        if (!LH) return null;
        let SH = AH.n.FromArray(LH, 2 * BH[3 * this.faceId]),
          hH = AH.n.FromArray(LH, 2 * BH[3 * this.faceId + 1]),
          tH = AH.n.FromArray(LH, 2 * BH[3 * this.faceId + 2]);
        return SH = SH.scale(this.bu), hH = hH.scale(this.bv), tH = tH.scale(1 - this.bu - this.bv), new AH.n(SH.x + hH.x + tH.x, SH.y + hH.y + tH.y)
      }
    }
  },
  41260: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH
    });
    var AH = LH(41129);
    let rH = !1;

    function SH() {
      rH || (rH = !0, AH.ThinEngine.prototype.updateDynamicIndexBuffer = function(HH, BH) {
        let LH;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(HH), LH = HH.is32Bits ? BH instanceof Uint32Array ? BH : new Uint32Array(BH) : BH instanceof Uint16Array ? BH : new Uint16Array(BH), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, LH, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, AH.ThinEngine.prototype.updateDynamicVertexBuffer = function(HH, BH, LH, AH) {
        this.bindArrayBuffer(HH), void 0 === LH && (LH = 0);
        const rH = BH.byteLength || BH.length;
        void 0 === AH || AH >= rH && 0 === LH ? BH instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, LH, new Float32Array(BH)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, LH, BH) : BH instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, LH, new Float32Array(BH).subarray(0, AH / 4)) : (BH = ArrayBuffer.isView(BH) ? new Uint8Array(BH.buffer, BH.byteOffset, AH) : new Uint8Array(BH, 0, AH), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, LH, BH)), this._resetVertexBufferBinding()
      })
    }
  },
  41225: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH
    });
    class AH {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          BH = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = BH, !HH && (HH = BH.createTexture(), !HH)) throw new Error("Unable to create webGL texture");
        this.set(HH)
      }
      setUsage() {}
      set(HH) {
        this._webGLTexture = HH
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(HH) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(HH)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const HH of this._MSAARenderBuffers) this._context.deleteRenderbuffer(HH);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[HH] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  41184: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => xH
    });
    var AH = LH(37997),
      rH = LH(41134),
      SH = LH(37989),
      hH = LH(39595),
      tH = LH(37982),
      zH = LH(41190);
    class CH {
      constructor() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, HH && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(HH) {
        this._zOffset !== HH && (this._zOffset = HH, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(HH) {
        this._zOffsetUnits !== HH && (this._zOffsetUnits = HH, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(HH) {
        this._cullFace !== HH && (this._cullFace = HH, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(HH) {
        this._cull !== HH && (this._cull = HH, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(HH) {
        this._depthFunc !== HH && (this._depthFunc = HH, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(HH) {
        this._depthMask !== HH && (this._depthMask = HH, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(HH) {
        this._depthTest !== HH && (this._depthTest = HH, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(HH) {
        this._frontFace !== HH && (this._frontFace = HH, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(HH) {
        this.isDirty && (this._isCullDirty && (this.cull ? HH.enable(HH.CULL_FACE) : HH.disable(HH.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (HH.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (HH.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? HH.enable(HH.DEPTH_TEST) : HH.disable(HH.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (HH.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (HH.enable(HH.POLYGON_OFFSET_FILL), HH.polygonOffset(this.zOffset, this.zOffsetUnits)) : HH.disable(HH.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (HH.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class EH {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(HH) {
        this._func !== HH && (this._func = HH, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(HH) {
        this._backFunc !== HH && (this._backFunc = HH, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(HH) {
        this._funcRef !== HH && (this._funcRef = HH, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(HH) {
        this._funcMask !== HH && (this._funcMask = HH, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(HH) {
        this._opStencilFail !== HH && (this._opStencilFail = HH, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(HH) {
        this._opDepthFail !== HH && (this._opDepthFail = HH, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(HH) {
        this._opStencilDepthPass !== HH && (this._opStencilDepthPass = HH, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(HH) {
        this._backOpStencilFail !== HH && (this._backOpStencilFail = HH, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(HH) {
        this._backOpDepthFail !== HH && (this._backOpDepthFail = HH, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(HH) {
        this._backOpStencilDepthPass !== HH && (this._backOpStencilDepthPass = HH, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(HH) {
        this._mask !== HH && (this._mask = HH, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(HH) {
        this._enabled !== HH && (this._enabled = HH, this._isStencilTestDirty = !0)
      }
      constructor() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, HH && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(HH) {
        if (!HH) return;
        const BH = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = BH ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = BH ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = BH ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = BH ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = BH ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = BH ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = BH ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = BH ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = BH ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = BH ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = BH ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = BH ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? HH.enable(HH.STENCIL_TEST) : HH.disable(HH.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (HH.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (HH.stencilFuncSeparate(HH.FRONT, this.func, this.funcRef, this.funcMask), HH.stencilFuncSeparate(HH.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (HH.stencilOpSeparate(HH.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), HH.stencilOpSeparate(HH.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class XH {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = XH.ALWAYS, this.opStencilFail = XH.KEEP, this.opDepthFail = XH.KEEP, this.opStencilDepthPass = XH.REPLACE, this.backFunc = XH.ALWAYS, this.backOpStencilFail = XH.KEEP, this.backOpDepthFail = XH.KEEP, this.backOpStencilDepthPass = XH.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(HH) {
        this.func = HH
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(HH) {
        this.backFunc = HH
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(HH) {
        this.funcRef = HH
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(HH) {
        this.funcMask = HH
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(HH) {
        this.opStencilFail = HH
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(HH) {
        this.opDepthFail = HH
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(HH) {
        this.opStencilDepthPass = HH
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(HH) {
        this.backOpStencilFail = HH
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(HH) {
        this.backOpDepthFail = HH
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(HH) {
        this.backOpStencilDepthPass = HH
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(HH) {
        this.mask = HH
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(HH) {
        this.enabled = HH
      }
    }
    XH.ALWAYS = 519, XH.KEEP = 7680, XH.REPLACE = 7681;
    var GH = LH(41197),
      YH = LH(41169),
      uH = LH(41122),
      QH = LH(41154),
      WH = LH(41164);

    function MH(HH, BH) {
      if (BH) {
        const {
          requestAnimationFrame: LH
        } = BH;
        if ("function" === typeof LH) return LH(HH)
      }
      if ((0, QH.k)()) {
        const {
          requestAnimationFrame: LH
        } = BH || window;
        if ("function" === typeof LH) return LH(HH)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(HH);
      return setTimeout(HH, 16)
    }
    class xH {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(HH) {
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
      get WrH() {
        return this._useReverseDepthBuffer
      }
      set WrH(HH) {
        HH !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = HH, this._depthCullingState.depthFunc = HH ? 518 : 515)
      }
      setColorWrite(HH) {
        HH !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = HH)
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
      _getGlobalDefines(HH) {
        if (HH) return this.isNDCHalfZRange ? HH.IS_NDC_HALF_ZRANGE = "" : delete HH.IS_NDC_HALF_ZRANGE, this.WrH ? HH.USE_REVERSE_DEPTHBUFFER = "" : delete HH.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? HH.USE_EXACT_SRGB_CONVERSIONS = "" : delete HH.USE_EXACT_SRGB_CONVERSIONS);
        {
          let HH = "";
          return this.isNDCHalfZRange && (HH += "#define IS_NDC_HALF_ZRANGE"), this.WrH && (HH && (HH += "\n"), HH += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (HH && (HH += "\n"), HH += "#define USE_EXACT_SRGB_CONVERSIONS"), HH
        }
      }
      _rebuildInternalTextures() {
        const HH = this._internalTexturesCache.slice();
        for (const BH of HH) BH._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const HH = this._renderTargetWrapperCache.slice();
        for (const BH of HH) BH.textures?.some((HH => 15 === HH.source)) || BH._rebuild()
      }
      _rebuildEffects() {
        for (const HH in this._compiledEffects) {
          const BH = this._compiledEffects[HH];
          BH._pipelineContext = null, BH._prepareEffect()
        }
        rH.c.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        hH.e.Warn(this.name + " context successfully restored."), this.ou.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(HH) {
        setTimeout((() => {
          this._clearEmptyResources();
          const BH = this._depthCullingState.depthTest,
            LH = this._depthCullingState.depthFunc,
            AH = this._depthCullingState.depthMask,
            rH = this._stencilState.stencilTest;
          HH(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = BH, this._depthCullingState.depthFunc = LH, this._depthCullingState.depthMask = AH, this._stencilState.stencilTest = rH, this._flagContextRestored()
        }), 0)
      }
      get mV() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(HH) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(HH) {}
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
          const HH = new Uint8Array(4),
            BH = [HH, HH, HH, HH, HH, HH];
          this._emptyCubeTexture = this.createRawCubeTexture(BH, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(HH) {
        this._framebufferDimensionsObject = HH
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(HH) {
        if (!HH) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const BH = this._activeRenderLoops.indexOf(HH);
        BH >= 0 && (this._activeRenderLoops.splice(BH, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: HH
            } = this.customAnimationFrameRequester;
            HH && HH(this.customAnimationFrameRequester.Ku), delete this.customAnimationFrameRequester.Ku
          }
        } else if (0 !== this._frameHandler) {
          const HH = this._frameHandler;
          if (this._frameHandler = 0, (0, QH.k)()) {
            const {
              cancelAnimationFrame: BH
            } = this.getHostWindow() || window;
            if ("function" === typeof BH) return BH(HH)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(HH);
          return clearTimeout(HH)
        }
      }
      WU() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      OX() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(HH) {
        this._maxFPS = HH, void 0 !== HH && (this._minFrameTime = HH <= 0 ? Number.MAX_VALUE : 1e3 / HH)
      }
      _isOverFrameTime(HH) {
        if (!HH || void 0 === this._maxFPS) return !1;
        const BH = HH - this._lastFrameTime;
        return this._lastFrameTime = HH, this._renderAccumulator += BH, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(HH) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(HH)) {
          let HH = !0;
          (this.mV || !this.renderEvenInBackground && this._windowIsBackground) && (HH = !1), HH && (this.WU(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.OX())
        }
      }
      _renderLoop(HH) {
        this._processFrame(HH), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let HH = 0; HH < this._activeRenderLoops.length; HH++) {
          (0, this._activeRenderLoops[HH])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(HH, BH) {
        return MH(HH, BH)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.Ku = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.Ku) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(HH) {
        -1 === this._activeRenderLoops.indexOf(HH) && (this._activeRenderLoops.push(HH), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(HH) {
        this._depthCullingState.depthTest = HH
      }
      setZOffset(HH) {
        this._depthCullingState.zOffset = this.WrH ? -HH : HH
      }
      getZOffset() {
        const HH = this._depthCullingState.zOffset;
        return this.WrH ? -HH : HH
      }
      setZOffsetUnits(HH) {
        this._depthCullingState.zOffsetUnits = this.WrH ? -HH : HH
      }
      getZOffsetUnits() {
        const HH = this._depthCullingState.zOffsetUnits;
        return this.WrH ? -HH : HH
      }
      getHostWindow() {
        return (0, QH.k)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(HH) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const HH of this.scenes) HH._rebuildTextures();
        for (const HH of this._virtualScenes) HH._rebuildTextures()
      }
      _releaseRenderTargetWrapper(HH) {
        const BH = this._renderTargetWrapperCache.indexOf(HH); - 1 !== BH && this._renderTargetWrapperCache.splice(BH, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(HH, BH, LH) {
        const AH = BH || this.getRenderWidth(),
          rH = LH || this.getRenderHeight(),
          SH = HH.x || 0,
          hH = HH.y || 0;
        this._cachedViewport = HH, this._viewport(SH * AH, hH * rH, AH * HH.width, rH * HH.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(HH) {
        return new Path2D(HH)
      }
      get description() {
        let HH = this.name + this.version;
        return this._caps.parallelShaderCompile && (HH += " - Parallel shader compilation"), HH
      }
      _createTextureBase(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          tH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          zH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          CH = arguments.length > 7 ? arguments[7] : void 0,
          EH = arguments.length > 8 ? arguments[8] : void 0,
          XH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          GH = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          YH = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          QH = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          WH = arguments.length > 13 ? arguments[13] : void 0,
          MH = arguments.length > 14 ? arguments[14] : void 0,
          vH = arguments.length > 15 ? arguments[15] : void 0;
        const PH = "data:" === (HH = HH || "").substring(0, 5),
          TH = "blob:" === HH.substring(0, 5),
          UH = PH && -1 !== HH.indexOf(";base64,"),
          VH = GH || new uH.e(this, 1);
        VH !== GH && (VH.label = HH.substring(0, 60));
        const OH = HH;
        !this._transformTextureUrl || UH || GH || XH || (HH = this._transformTextureUrl(HH)), OH !== HH && (VH._originalUrl = OH);
        const bH = HH.lastIndexOf(".");
        let kH = QH || (bH > -1 ? HH.substring(bH).toLowerCase() : "");
        kH.indexOf("?") > -1 && (kH = kH.split("?")[0]);
        const mH = xH.GetCompatibleTextureLoader(kH, WH);
        AH && AH.addPendingData(VH), VH.url = HH, VH.generateMipMaps = !BH, VH.samplingMode = rH, VH.invertY = LH, VH._useSRGBBuffer = this._getUseSRGBBuffer(!!vH, BH), this._doNotHandleContextLost || (VH._buffer = XH);
        let oH = null;
        tH && !GH && (oH = VH.onLoadedObservable.add(tH)), GH || this._internalTexturesCache.push(VH);
        const IH = (LH, GH) => {
          AH && AH.removePendingData(VH), HH === OH ? (oH && VH.onLoadedObservable.remove(oH), SH.d.UseFallbackTexture && HH !== SH.d.FallbackTexture && this._createTextureBase(SH.d.FallbackTexture, BH, VH.invertY, AH, rH, null, zH, CH, EH, XH, VH), LH = (LH || "Unknown error") + (SH.d.UseFallbackTexture ? " - Fallback texture was used" : ""), VH.onErrorObservable.notifyObservers({
            message: LH,
            exception: GH
          }), zH && zH(LH, GH)) : (hH.e.Warn(`Failed to load ${HH}, falling back to ${OH}`), this._createTextureBase(OH, BH, VH.invertY, AH, rH, tH, zH, CH, EH, XH, VH, YH, QH, WH, MH, vH))
        };
        if (mH) {
          const BH = async HH => {
            (await mH).loadData(HH, VH, ((HH, BH, LH, SH, hH, tH) => {
              tH ? IH("TextureLoader failed to load data") : CH(VH, kH, AH, {
                width: HH,
                height: BH
              }, VH.invertY, !LH, SH, (() => (hH(), !1)), rH)
            }), MH)
          };
          if (XH) {
            const HH = async HH => {
              try {
                await BH(HH)
              } catch (LH) {
                IH("Failed to parse texture data", LH)
              }
            };
            XH instanceof ArrayBuffer ? HH(new Uint8Array(XH)) : ArrayBuffer.isView(XH) ? HH(XH) : zH && zH("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(HH, (async HH => {
            try {
              await BH(new Uint8Array(HH))
            } catch (LH) {
              IH("Failed to parse texture data", LH)
            }
          }), void 0, AH ? AH.offlineProvider : void 0, !0, ((HH, BH) => {
            IH("Unable to load " + (HH && HH.responseURL, BH))
          }))
        } else {
          const LH = HH => {
            TH && !this._doNotHandleContextLost && (VH._buffer = HH), CH(VH, kH, AH, HH, VH.invertY, BH, !1, EH, rH)
          };
          !PH || UH ? XH && ("string" === typeof XH.decoding || XH.close) ? LH(XH) : xH._FileToolsLoadImage(HH || "", LH, IH, AH ? AH.offlineProvider : null, WH, VH.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof XH || XH instanceof ArrayBuffer || ArrayBuffer.isView(XH) || XH instanceof Blob ? xH._FileToolsLoadImage(XH, LH, IH, AH ? AH.offlineProvider : null, WH, VH.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : XH && LH(XH)
        }
        return VH
      }
      _rebuildBuffers() {
        for (const HH of this._uniformBuffers) HH._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, QH.d)() ? document : null
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
        for (const HH in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, HH) && (this._boundTexturesCache[HH] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(HH) {
        this._name = HH
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
      setHardwareScalingLevel(HH) {
        this._hardwareScalingLevel = HH, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(HH) {
        this._doNotHandleContextLost = HH
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(HH, BH, LH) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new CH, this._stencilStateComposer = new EH, this._stencilState = new XH, this._alphaState = new GH.b(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new AH.d, this.onCanvasFocusObservable = new AH.d, this.onNewSceneAddedObservable = new AH.d, this.onResizeObservable = new AH.d, this.onCanvasPointerOutObservable = new AH.d, this.onEffectErrorObservable = new AH.d, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new AH.d, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = HH => this._renderLoop(HH), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new AH.d, this.onAfterShaderCompilationObservable = new AH.d, this.onBeginFrameObservable = new AH.d, this.onEndFrameObservable = new AH.d, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new AH.d, this.ou = new AH.d, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.uR = new AH.d, this.onReleaseEffectsObservable = new AH.d, SH.d.Instances.push(this), this.startTime = zH.e.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, tH.e.SetMatrixPrecision(!!BH.useLargeWorldRendering || !!BH.useHighPrecisionMatrix), (0, QH.h)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), BH.antialias = HH ?? BH.antialias, BH.deterministicLockstep = BH.deterministicLockstep ?? !1, BH.lockstepMaxSteps = BH.lockstepMaxSteps ?? 4, BH.timeStep = BH.timeStep ?? 1 / 60, BH.stencil = BH.stencil ?? !0, this._audioContext = BH.audioEngineOptions?.audioContext ?? null, this._audioDestination = BH.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = BH.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!BH.doNotHandleContextLost, this._isStencilEnable = !!BH.stencil, this.useExactSrgbConversions = BH.useExactSrgbConversions ?? !1, this.canvasTabIndex = BH.canvasTabIndex ?? this.canvasTabIndex;
        const rH = (0, QH.k)() && window.devicePixelRatio || 1,
          hH = BH.limitDeviceRatio || rH;
        LH = LH || BH.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = LH, this._hardwareScalingLevel = LH ? 1 / Math.min(hH, rH) : 1, this._lastDevicePixelRatio = rH, this._creationOptions = BH
      }
      resize() {
        let HH, BH, LH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const HH = (0, QH.k)() && window.devicePixelRatio || 1,
            BH = this._lastDevicePixelRatio / HH;
          this._lastDevicePixelRatio = HH, this._hardwareScalingLevel *= BH
        }
        if ((0, QH.k)() && (0, QH.d)())
          if (this._renderingCanvas) {
            const LH = this._renderingCanvas.getBoundingClientRect?.();
            HH = this._renderingCanvas.clientWidth || LH?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, BH = this._renderingCanvas.clientHeight || LH?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else HH = window.innerWidth, BH = window.innerHeight;
        else HH = this._renderingCanvas ? this._renderingCanvas.width : 100, BH = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(HH / this._hardwareScalingLevel, BH / this._hardwareScalingLevel, LH)
      }
      setSize(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (HH |= 0, BH |= 0, !LH && this._renderingCanvas.width === HH && this._renderingCanvas.height === BH) return !1;
        if (this._renderingCanvas.width = HH, this._renderingCanvas.height = BH, this.scenes) {
          for (let HH = 0; HH < this.scenes.length; HH++) {
            const BH = this.scenes[HH];
            for (let HH = 0; HH < BH.cameras.length; HH++) {
              BH.cameras[HH]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH, XH) {
        throw (0, YH.i)("engine.rawTexture")
      }
      createRawCubeTexture(HH, BH, LH, AH, rH, SH, hH, tH) {
        throw (0, YH.i)("engine.rawTexture")
      }
      createRawTexture3D(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH) {
        throw (0, YH.i)("engine.rawTexture")
      }
      createRawTexture2DArray(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH, XH) {
        throw (0, YH.i)("engine.rawTexture")
      }
      _sharedInit(HH) {
        this._renderingCanvas = HH
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const HH = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== HH.indexOf("Mobile") || -1 !== HH.indexOf("Mac") && (0, QH.d)() && "ontouchend" in document
        }, this._checkForMobile(), (0, QH.k)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(HH) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(HH, !1)
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
      _createImageBitmapFromSource(HH, BH) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(HH, BH) {
        return createImageBitmap(HH, BH)
      }
      resizeImageBitmap(HH, BH, LH) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(HH) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(HH, BH) {
        if ("undefined" === typeof document) return new OffscreenCanvas(HH, BH);
        const LH = document.createElement("canvas");
        return LH.width = HH, LH.height = BH, LH
      }
      createCanvas(HH, BH) {
        return xH._CreateCanvas(HH, BH)
      }
      static _FileToolsLoadImage(HH, BH, LH, AH, rH, SH, hH) {
        if (!WH.b.loadImage) throw (0, YH.i)("FileTools");
        return WH.b.loadImage(HH, BH, LH, AH, rH, SH, hH)
      }
      _loadFile(HH, BH, LH, AH, rH, SH) {
        const hH = (0, WH.g)(HH, BH, LH, AH, rH, SH);
        return this._activeRequests.push(hH), hH.onCompleteObservable.add((() => {
          const HH = this._activeRequests.indexOf(hH); - 1 !== HH && this._activeRequests.splice(HH, 1)
        })), hH
      }
      static _FileToolsLoadFile(HH, BH, LH, AH, rH, SH) {
        if (WH.b.loadFile) return WH.b.loadFile(HH, BH, LH, AH, rH, SH);
        throw (0, YH.i)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), rH.c.ResetCache();
        for (const BH of this._activeRequests) BH.abort();
        this._boundRenderFunction = null, this.uR.notifyObservers(this), this.uR.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, QH.k)() && window.removeEventListener("resize", this._checkForMobile);
        const HH = SH.d.Instances.indexOf(this);
        HH >= 0 && SH.d.Instances.splice(HH, 1), SH.d.Instances.length || (SH.d.OnEnginesDisposedObservable.notifyObservers(this), SH.d.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(HH) {
        throw (0, YH.i)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(HH, BH) {
        for (let LH = 0; LH < SH.d.Instances.length; LH++) {
          const AH = SH.d.Instances[LH];
          for (let LH = 0; LH < AH.scenes.length; LH++) AH.scenes[LH].markAllMaterialsAsDirty(HH, BH)
        }
      }
      static GetCompatibleTextureLoader(HH, BH) {
        return null
      }
    }
    xH._RenderPassIdCounter = 0, xH._RescalePostProcessFactory = null, xH.CollisionsEpsilon = .001, xH.QueueNewFrame = MH
  },
  41138: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH
    });
    class AH {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? AH.ShadersRepository : AH.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? AH.ShadersStore : AH.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? AH.IncludesShadersStore : AH.IncludesShadersStoreWGSL
      }
    }
    AH.ShadersRepository = "src/Shaders/", AH.ShadersStore = {}, AH.IncludesShadersStore = {}, AH.ShadersRepositoryWGSL = "src/ShadersWGSL/", AH.ShadersStoreWGSL = {}, AH.IncludesShadersStoreWGSL = {}
  },
  41157: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => GH,
      f: () => vH,
      j: () => uH,
      l: () => YH,
      p: () => QH,
      r: () => xH,
      t: () => XH,
      v: () => CH,
      x: () => EH,
      A: () => zH,
      B: () => tH
    });
    class AH {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(HH) {
        HH && this.program && HH(this.program)
      }
      setEngine(HH) {
        this.engine = HH
      }
      _fillEffectInformation(HH, BH, LH, AH, rH, SH, hH, tH) {
        const zH = this.engine;
        if (zH.supportsUniformBuffers)
          for (const EH in BH) HH.bindUniformBlock(EH, BH[EH]);
        let CH;
        for (this.engine.getUniforms(this, LH).forEach(((HH, BH) => {
            AH[LH[BH]] = HH
          })), this._uniforms = AH, CH = 0; CH < rH.length; CH++) {
          null == HH.getUniform(rH[CH]) && (rH.splice(CH, 1), CH--)
        }
        rH.forEach(((HH, BH) => {
          SH[HH] = BH
        }));
        for (const EH of zH.getAttributes(this, hH)) tH.push(EH)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(HH, BH) {
        const LH = this._valueCache[HH],
          AH = BH.updateFlag;
        if (void 0 !== LH && LH === AH) return !1;
        const rH = BH.xrH();
        let SH = this._matrixValueCache[HH];
        if (void 0 !== LH && null !== LH && void 0 !== SH) {
          let BH = !0;
          for (let HH = 15; HH >= 0; HH--)
            if (SH[HH] !== rH[HH]) {
              BH = !1;
              break
            } if (BH) return this._valueCache[HH] = AH, !1
        }
        return void 0 === SH && (SH = this._matrixValueCache[HH] = new Float32Array(16)), SH.set(rH), this._valueCache[HH] = AH, !0
      }
      _cacheFloat2(HH, BH, LH) {
        let AH = this._valueCache[HH];
        if (!AH || 2 !== AH.length) return AH = [BH, LH], this._valueCache[HH] = AH, !0;
        let rH = !1;
        return AH[0] !== BH && (AH[0] = BH, rH = !0), AH[1] !== LH && (AH[1] = LH, rH = !0), rH
      }
      _cacheFloat3(HH, BH, LH, AH) {
        let rH = this._valueCache[HH];
        if (!rH || 3 !== rH.length) return rH = [BH, LH, AH], this._valueCache[HH] = rH, !0;
        let SH = !1;
        return rH[0] !== BH && (rH[0] = BH, SH = !0), rH[1] !== LH && (rH[1] = LH, SH = !0), rH[2] !== AH && (rH[2] = AH, SH = !0), SH
      }
      _cacheFloat4(HH, BH, LH, AH, rH) {
        let SH = this._valueCache[HH];
        if (!SH || 4 !== SH.length) return SH = [BH, LH, AH, rH], this._valueCache[HH] = SH, !0;
        let hH = !1;
        return SH[0] !== BH && (SH[0] = BH, hH = !0), SH[1] !== LH && (SH[1] = LH, hH = !0), SH[2] !== AH && (SH[2] = AH, hH = !0), SH[3] !== rH && (SH[3] = rH, hH = !0), hH
      }
      setInt(HH, BH) {
        const LH = this._valueCache[HH];
        void 0 !== LH && LH === BH || this.engine.setInt(this._uniforms[HH], BH) && (this._valueCache[HH] = BH)
      }
      setInt2(HH, BH, LH) {
        this._cacheFloat2(HH, BH, LH) && (this.engine.setInt2(this._uniforms[HH], BH, LH) || (this._valueCache[HH] = null))
      }
      setInt3(HH, BH, LH, AH) {
        this._cacheFloat3(HH, BH, LH, AH) && (this.engine.setInt3(this._uniforms[HH], BH, LH, AH) || (this._valueCache[HH] = null))
      }
      setInt4(HH, BH, LH, AH, rH) {
        this._cacheFloat4(HH, BH, LH, AH, rH) && (this.engine.setInt4(this._uniforms[HH], BH, LH, AH, rH) || (this._valueCache[HH] = null))
      }
      setIntArray(HH, BH) {
        this._valueCache[HH] = null, this.engine.setIntArray(this._uniforms[HH], BH)
      }
      setIntArray2(HH, BH) {
        this._valueCache[HH] = null, this.engine.setIntArray2(this._uniforms[HH], BH)
      }
      setIntArray3(HH, BH) {
        this._valueCache[HH] = null, this.engine.setIntArray3(this._uniforms[HH], BH)
      }
      setIntArray4(HH, BH) {
        this._valueCache[HH] = null, this.engine.setIntArray4(this._uniforms[HH], BH)
      }
      setUInt(HH, BH) {
        const LH = this._valueCache[HH];
        void 0 !== LH && LH === BH || this.engine.setUInt(this._uniforms[HH], BH) && (this._valueCache[HH] = BH)
      }
      setUInt2(HH, BH, LH) {
        this._cacheFloat2(HH, BH, LH) && (this.engine.setUInt2(this._uniforms[HH], BH, LH) || (this._valueCache[HH] = null))
      }
      setUInt3(HH, BH, LH, AH) {
        this._cacheFloat3(HH, BH, LH, AH) && (this.engine.setUInt3(this._uniforms[HH], BH, LH, AH) || (this._valueCache[HH] = null))
      }
      setUInt4(HH, BH, LH, AH, rH) {
        this._cacheFloat4(HH, BH, LH, AH, rH) && (this.engine.setUInt4(this._uniforms[HH], BH, LH, AH, rH) || (this._valueCache[HH] = null))
      }
      setUIntArray(HH, BH) {
        this._valueCache[HH] = null, this.engine.setUIntArray(this._uniforms[HH], BH)
      }
      setUIntArray2(HH, BH) {
        this._valueCache[HH] = null, this.engine.setUIntArray2(this._uniforms[HH], BH)
      }
      setUIntArray3(HH, BH) {
        this._valueCache[HH] = null, this.engine.setUIntArray3(this._uniforms[HH], BH)
      }
      setUIntArray4(HH, BH) {
        this._valueCache[HH] = null, this.engine.setUIntArray4(this._uniforms[HH], BH)
      }
      setArray(HH, BH) {
        this._valueCache[HH] = null, this.engine.setArray(this._uniforms[HH], BH)
      }
      setArray2(HH, BH) {
        this._valueCache[HH] = null, this.engine.setArray2(this._uniforms[HH], BH)
      }
      setArray3(HH, BH) {
        this._valueCache[HH] = null, this.engine.setArray3(this._uniforms[HH], BH)
      }
      setArray4(HH, BH) {
        this._valueCache[HH] = null, this.engine.setArray4(this._uniforms[HH], BH)
      }
      setMatrices(HH, BH) {
        BH && (this._valueCache[HH] = null, this.engine.setMatrices(this._uniforms[HH], BH))
      }
      setMatrix(HH, BH) {
        this._cacheMatrix(HH, BH) && (this.engine.setMatrices(this._uniforms[HH], BH.xrH()) || (this._valueCache[HH] = null))
      }
      setMatrix3x3(HH, BH) {
        this._valueCache[HH] = null, this.engine.setMatrix3x3(this._uniforms[HH], BH)
      }
      setMatrix2x2(HH, BH) {
        this._valueCache[HH] = null, this.engine.setMatrix2x2(this._uniforms[HH], BH)
      }
      setFloat(HH, BH) {
        const LH = this._valueCache[HH];
        void 0 !== LH && LH === BH || this.engine.setFloat(this._uniforms[HH], BH) && (this._valueCache[HH] = BH)
      }
      setVector2(HH, BH) {
        this._cacheFloat2(HH, BH.x, BH.y) && (this.engine.setFloat2(this._uniforms[HH], BH.x, BH.y) || (this._valueCache[HH] = null))
      }
      setFloat2(HH, BH, LH) {
        this._cacheFloat2(HH, BH, LH) && (this.engine.setFloat2(this._uniforms[HH], BH, LH) || (this._valueCache[HH] = null))
      }
      setVector3(HH, BH) {
        this._cacheFloat3(HH, BH.x, BH.y, BH.z) && (this.engine.setFloat3(this._uniforms[HH], BH.x, BH.y, BH.z) || (this._valueCache[HH] = null))
      }
      setFloat3(HH, BH, LH, AH) {
        this._cacheFloat3(HH, BH, LH, AH) && (this.engine.setFloat3(this._uniforms[HH], BH, LH, AH) || (this._valueCache[HH] = null))
      }
      setVector4(HH, BH) {
        this._cacheFloat4(HH, BH.x, BH.y, BH.z, BH.w) && (this.engine.setFloat4(this._uniforms[HH], BH.x, BH.y, BH.z, BH.w) || (this._valueCache[HH] = null))
      }
      setQuaternion(HH, BH) {
        this._cacheFloat4(HH, BH.x, BH.y, BH.z, BH.w) && (this.engine.setFloat4(this._uniforms[HH], BH.x, BH.y, BH.z, BH.w) || (this._valueCache[HH] = null))
      }
      setFloat4(HH, BH, LH, AH, rH) {
        this._cacheFloat4(HH, BH, LH, AH, rH) && (this.engine.setFloat4(this._uniforms[HH], BH, LH, AH, rH) || (this._valueCache[HH] = null))
      }
      setColor3(HH, BH) {
        this._cacheFloat3(HH, BH.r, BH.g, BH.b) && (this.engine.setFloat3(this._uniforms[HH], BH.r, BH.g, BH.b) || (this._valueCache[HH] = null))
      }
      setColor4(HH, BH, LH) {
        this._cacheFloat4(HH, BH.r, BH.g, BH.b, LH) && (this.engine.setFloat4(this._uniforms[HH], BH.r, BH.g, BH.b, LH) || (this._valueCache[HH] = null))
      }
      setDirectColor4(HH, BH) {
        this._cacheFloat4(HH, BH.r, BH.g, BH.b, BH.a) && (this.engine.setFloat4(this._uniforms[HH], BH.r, BH.g, BH.b, BH.a) || (this._valueCache[HH] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var rH = LH(41164);
    const SH = new WeakMap,
      hH = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function tH(HH) {
      let BH = SH.get(HH);
      if (!BH) {
        if (!HH) return hH;
        BH = {
          _webGLVersion: HH.TEXTURE_BINDING_3D ? 2 : 1,
          _context: HH,
          parallelShaderCompile: HH.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, SH.set(HH, BH)
      }
      return BH
    }

    function zH(HH) {
      SH.delete(HH)
    }

    function CH(HH, BH, LH, AH, rH, SH) {
      const hH = tH(AH);
      SH || (SH = hH._createShaderProgramInjection ?? GH);
      return SH(HH, MH(BH, "vertex", AH, hH._contextWasLost), MH(LH, "fragment", AH, hH._contextWasLost), AH, rH, hH.validateShaderPrograms)
    }

    function EH(HH, BH, LH, AH, rH) {
      let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        hH = arguments.length > 6 ? arguments[6] : void 0;
      const zH = tH(rH);
      hH || (hH = zH._createShaderProgramInjection ?? GH);
      const CH = zH._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return hH(HH, WH(BH, "vertex", AH, CH, rH, zH._contextWasLost), WH(LH, "fragment", AH, CH, rH, zH._contextWasLost), rH, SH, zH.validateShaderPrograms)
    }

    function XH(HH, BH) {
      const LH = new AH,
        rH = tH(HH);
      return rH.parallelShaderCompile && !rH.disableParallelShaderCompile && (LH.isParallelCompiled = !0), LH.context = rH._context, LH
    }

    function GH(HH, BH, LH, AH) {
      let rH = arguments.length > 5 ? arguments[5] : void 0;
      const SH = AH.createProgram();
      if (HH.program = SH, !SH) throw new Error("Unable to create program");
      return AH.attachShader(SH, BH), AH.attachShader(SH, LH), AH.linkProgram(SH), HH.context = AH, HH.vertexShader = BH, HH.fragmentShader = LH, HH.isParallelCompiled || uH(HH, AH, rH), SH
    }

    function YH(HH, BH, LH) {
      const AH = HH;
      if (AH._isDisposed) return !1;
      const rH = tH(BH);
      return !!(rH && rH.parallelShaderCompile && rH.parallelShaderCompile.COMPLETION_STATUS_KHR && AH.program && BH.getProgramParameter(AH.program, rH.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (uH(AH, BH, LH), !0)
    }

    function uH(HH, BH, LH) {
      const AH = HH.context,
        rH = HH.vertexShader,
        SH = HH.fragmentShader,
        hH = HH.program;
      if (!AH.getProgramParameter(hH, AH.LINK_STATUS)) {
        if (!BH.getShaderParameter(rH, BH.COMPILE_STATUS)) {
          const LH = BH.getShaderInfoLog(rH);
          if (LH) throw HH.vertexCompilationError = LH, new Error("VERTEX SHADER " + LH)
        }
        if (!BH.getShaderParameter(SH, BH.COMPILE_STATUS)) {
          const LH = BH.getShaderInfoLog(SH);
          if (LH) throw HH.fragmentCompilationError = LH, new Error("FRAGMENT SHADER " + LH)
        }
        const LH = AH.getProgramInfoLog(hH);
        if (LH) throw HH.programLinkError = LH, new Error(LH)
      }
      if (LH) {
        AH.validateProgram(hH);
        if (!AH.getProgramParameter(hH, AH.VALIDATE_STATUS)) {
          const BH = AH.getProgramInfoLog(hH);
          if (BH) throw HH.programValidationError = BH, new Error(BH)
        }
      }
      AH.deleteShader(rH), AH.deleteShader(SH), HH.vertexShader = void 0, HH.fragmentShader = void 0, HH.onCompiled && (HH.onCompiled(), HH.onCompiled = void 0)
    }

    function QH(HH, BH, LH, AH, rH, SH, hH, zH, XH) {
      let GH = arguments.length > 10 ? arguments[10] : void 0,
        YH = arguments.length > 11 ? arguments[11] : void 0,
        uH = arguments.length > 12 ? arguments[12] : void 0;
      const QH = tH(HH.context);
      YH || (YH = QH.createRawShaderProgramInjection ?? CH), uH || (uH = QH.createShaderProgramInjection ?? EH);
      const WH = HH;
      WH.program = AH ? YH(WH, BH, LH, WH.context, XH) : uH(WH, BH, LH, zH, WH.context, XH), WH.program.__SPECTOR_rebuildProgram = hH, GH()
    }

    function WH(HH, BH, LH, AH, SH, hH) {
      return MH((0, rH.c)(HH, LH, AH), BH, SH, hH)
    }

    function MH(HH, BH, LH, AH) {
      const rH = LH.createShader("vertex" === BH ? LH.VERTEX_SHADER : LH.FRAGMENT_SHADER);
      if (!rH) {
        let HH, rH = LH.NO_ERROR;
        for (;
          (HH = LH.getError()) !== LH.NO_ERROR;) rH = HH;
        throw new Error(`Something went wrong while creating a gl ${BH} shader object. gl error=${rH}, gl isContextLost=${LH.isContextLost()}, _contextWasLost=${AH}`)
      }
      return LH.shaderSource(rH, HH), LH.compileShader(rH), rH
    }

    function xH(HH, BH) {
      BH.useProgram(HH)
    }

    function vH(HH, BH) {
      const LH = HH;
      if (!LH.isParallelCompiled) return void BH(HH);
      const AH = LH.onCompiled;
      LH.onCompiled = () => {
        AH?.(), BH(HH)
      }
    }
  },
  41129: (HH, BH, LH) => {
    LH.d(BH, {
      ThinEngine: () => TH
    });
    var AH = LH(41134),
      rH = LH(41157),
      SH = LH(41184),
      hH = LH(41202),
      tH = LH(39595),
      zH = LH(41154);
    class CH {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(HH, BH, LH, AH, rH) {
        if (rH.drawBuffersExtensionDisabled) {
          const BH = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          HH = HH.replace(BH, "")
        }
        return HH
      }
    }
    const EH = /(flat\s)?\s*varying\s*.*/;
    class XH {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(HH) {
        return HH.replace("attribute", "in")
      }
      varyingCheck(HH, BH) {
        return EH.test(HH)
      }
      varyingProcessor(HH, BH) {
        return HH.replace("varying", BH ? "in" : "out")
      }
      postProcessor(HH, BH, LH) {
        const AH = -1 !== HH.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (HH = (HH = HH.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), LH) {
          const LH = -1 !== HH.search(/layout *\(location *= *0\) *out/g),
            rH = -1 !== BH.indexOf("#define DUAL_SOURCE_BLENDING"),
            SH = rH ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          rH && (HH = "#extension GL_EXT_blend_func_extended : require\n" + HH), HH = (HH = (HH = (HH = (HH = (HH = (HH = HH.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (AH || LH ? "" : SH) + "void main(")
        } else {
          BH.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (HH = "invariant gl_Position;\n" + HH);
          if (-1 !== BH.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + HH
        }
        return HH
      }
    }
    var GH = LH(41210),
      YH = LH(41222),
      uH = LH(41225),
      QH = LH(41122),
      WH = LH(41164),
      MH = LH(41147),
      xH = LH(41229),
      vH = LH(41197);
    class PH {}
    class TH extends SH.c {
      get name() {
        return this._name
      }
      set name(HH) {
        this._name = HH
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return AH.c.ShadersRepository
      }
      static set ShadersRepository(HH) {
        AH.c.ShadersRepository = HH
      }
      get supportsUniformBuffers() {
        return this.hQ > 1 && !this.disableUniformBuffers
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
      constructor(HH, BH, LH, AH) {
        if (LH = LH || {}, super(BH ?? LH.antialias, LH, AH), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !HH) return;
        let SH;
        if (HH.getContext) {
          if (SH = HH, void 0 === LH.preserveDrawingBuffer && (LH.preserveDrawingBuffer = !1), void 0 === LH.xrCompatible && (LH.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const HH = navigator.userAgent;
            for (const BH of TH.ExceptionList) {
              const AH = BH.key,
                rH = BH.targets;
              if (new RegExp(AH).test(HH)) {
                if (BH.capture && BH.captureConstraint) {
                  const LH = BH.capture,
                    AH = BH.captureConstraint,
                    rH = new RegExp(LH).exec(HH);
                  if (rH && rH.length > 0) {
                    if (parseInt(rH[rH.length - 1]) >= AH) continue
                  }
                }
                for (const HH of rH) switch (HH) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    LH.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, rH.A)(this._gl)
            } : (this._onContextLost = HH => {
              HH.preventDefault(), this._contextWasLost = !0, (0, rH.A)(this._gl), tH.e.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, SH.addEventListener("webglcontextrestored", this._onContextRestored, !1), LH.powerPreference = LH.powerPreference || "high-performance"), SH.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (LH.xrCompatible = !1), !LH.disableWebGL2Support) try {
            this._gl = SH.getContext("webgl2", LH) || SH.getContext("experimental-webgl2", LH), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (EH) {}
          if (!this._gl) {
            if (!SH) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = SH.getContext("webgl", LH) || SH.getContext("experimental-webgl", LH)
            } catch (EH) {
              throw new Error("WebGL not supported", {
                cause: EH
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = HH, SH = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const BH = this._gl.getContextAttributes();
          BH && (LH.stencil = BH.stencil)
        }
        this._sharedInit(SH), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== LH.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = LH.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let rH = 0; rH < this._caps.maxVertexAttribs; rH++) this._currentBufferPointers[rH] = new PH;
        this._shaderProcessor = this.hQ > 1 ? new XH : new CH;
        const hH = `Babylon.js v${TH.Version}`;
        tH.e.Log(hH + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", hH);
        const zH = (0, rH.B)(this._gl);
        zH.validateShaderPrograms = this.validateShaderPrograms, zH.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(HH) {
        return null
      }
      areAllEffectsReady() {
        for (const HH in this._compiledEffects) {
          if (!this._compiledEffects[HH].isReady()) return !1
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
        const HH = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != HH && (this._glRenderer = this._gl.getParameter(HH.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(HH.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const BH = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!BH, this._alphaState = new vH.b(this._caps.blendParametersPerTarget), BH && (this._gl.blendEquationSeparateIndexed = BH.blendEquationSeparateiOES.bind(BH), this._gl.blendEquationIndexed = BH.blendEquationiOES.bind(BH), this._gl.blendFuncSeparateIndexed = BH.blendFuncSeparateiOES.bind(BH), this._gl.blendFuncIndexed = BH.blendFunciOES.bind(BH), this._gl.colorMaskIndexed = BH.colorMaskiOES.bind(BH), this._gl.disableIndexed = BH.disableiOES.bind(BH), this._gl.enableIndexed = BH.enableiOES.bind(BH)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const HH = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== HH) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = HH.drawBuffersWEBGL.bind(HH), this._caps.maxDrawBuffers = this._gl.getParameter(HH.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let BH = 0; BH < 16; BH++) this._gl["COLOR_ATTACHMENT" + BH + "_WEBGL"] = HH["COLOR_ATTACHMENT" + BH + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const HH = this._gl.getExtension("WEBGL_depth_texture");
          null != HH && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = HH.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const HH = this._gl.getExtension("OES_vertex_array_object");
          null != HH && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = HH.createVertexArrayOES.bind(HH), this._gl.bindVertexArray = HH.bindVertexArrayOES.bind(HH), this._gl.deleteVertexArray = HH.deleteVertexArrayOES.bind(HH))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const HH = this._gl.getExtension("ANGLE_instanced_arrays");
          null != HH ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = HH.drawArraysInstancedANGLE.bind(HH), this._gl.drawElementsInstanced = HH.drawElementsInstancedANGLE.bind(HH), this._gl.vertexAttribDivisor = HH.vertexAttribDivisorANGLE.bind(HH)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const HH = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            BH = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (HH && BH && (this._caps.highPrecisionShaderSupported = 0 !== HH.precision && 0 !== BH.precision, this._caps.shaderFloatPrecision = Math.min(HH.precision, BH.precision)), !this._shouldUseHighPrecisionShader) {
            const HH = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              BH = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            HH && BH && (this._caps.shaderFloatPrecision = Math.min(HH.precision, BH.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const HH = this._gl.getExtension("EXT_blend_minmax");
          null != HH && (this._caps.blendMinMax = !0, this._gl.MAX = HH.MAX_EXT, this._gl.MIN = HH.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const HH = this._gl.getExtension("EXT_sRGB");
            null != HH && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: HH.SRGB_EXT,
              SRGB8: HH.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: HH.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const HH = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== HH && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && HH)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let LH = 0; LH < this._maxSimultaneousTextures; LH++) this._nextFreeTextureSlots.push(LH);
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
      get hQ() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const HH = this._workingCanvas.getContext("2d");
        HH && (this._workingContext = HH)
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
        const HH = this.getGlInfo();
        return HH && HH.renderer ? HH.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const SH = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = SH;
        let hH = 0;
        if (BH && HH) {
          let BH = !0;
          if (this._currentRenderTarget) {
            const LH = this._currentRenderTarget.texture?.format;
            if (void 0 !== LH && (0, xH.f)(LH)) {
              const LH = this._currentRenderTarget.texture?.type;
              void 0 !== LH && (0, xH.i)(LH) ? (TH._TempClearColorUint32[0] = 255 * HH.r, TH._TempClearColorUint32[1] = 255 * HH.g, TH._TempClearColorUint32[2] = 255 * HH.b, TH._TempClearColorUint32[3] = 255 * HH.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, TH._TempClearColorUint32), BH = !1) : (TH._TempClearColorInt32[0] = 255 * HH.r, TH._TempClearColorInt32[1] = 255 * HH.g, TH._TempClearColorInt32[2] = 255 * HH.b, TH._TempClearColorInt32[3] = 255 * HH.a, this._gl.clearBufferiv(this._gl.COLOR, 0, TH._TempClearColorInt32), BH = !1)
            }
          }
          BH && (this._gl.clearColor(HH.r, HH.g, HH.b, void 0 !== HH.a ? HH.a : 1), hH |= this._gl.COLOR_BUFFER_BIT)
        }
        LH && (this.WrH ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), hH |= this._gl.DEPTH_BUFFER_BIT), AH && (this._gl.clearStencil(rH), hH |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(hH)
      }
      _clearColorAttachment(HH, BH, LH, AH) {
        if ((0, xH.f)(LH)) {
          const LH = (0, xH.i)(AH),
            rH = LH ? TH._TempClearColorUint32 : TH._TempClearColorInt32;
          return rH[0] = BH.r, rH[1] = BH.g, rH[2] = BH.b, rH[3] = BH.a, void(LH ? this._gl.clearBufferuiv(this._gl.COLOR, HH, rH) : this._gl.clearBufferiv(this._gl.COLOR, HH, rH))
        }
        TH._TempClearColorFloat32[0] = BH.r, TH._TempClearColorFloat32[1] = BH.g, TH._TempClearColorFloat32[2] = BH.b, TH._TempClearColorFloat32[3] = BH.a, this._gl.clearBufferfv(this._gl.COLOR, HH, TH._TempClearColorFloat32)
      }
      _viewport(HH, BH, LH, AH) {
        HH === this._viewportCached.x && BH === this._viewportCached.y && LH === this._viewportCached.z && AH === this._viewportCached.w || (this._viewportCached.x = HH, this._viewportCached.y = BH, this._viewportCached.z = LH, this._viewportCached.w = AH, this._gl.viewport(HH, BH, LH, AH))
      }
      OX() {
        super.OX(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 ? arguments[2] : void 0,
          AH = arguments.length > 3 ? arguments[3] : void 0,
          rH = arguments.length > 4 ? arguments[4] : void 0,
          SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          hH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const zH = HH;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = HH, this._integerMRTAttachmentsMask = !HH.isMulti && HH.texture && (0, xH.f)(HH.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(zH._framebuffer);
        const CH = this._gl;
        HH.isMulti || (HH.is2DArray || HH.is3D ? (CH.framebufferTextureLayer(CH.FRAMEBUFFER, CH.COLOR_ATTACHMENT0, HH.texture._hardwareTexture?.underlyingResource, SH, hH), zH._currentLOD = SH) : HH.isCube ? CH.framebufferTexture2D(CH.FRAMEBUFFER, CH.COLOR_ATTACHMENT0, CH.TEXTURE_CUBE_MAP_POSITIVE_X + BH, HH.texture._hardwareTexture?.underlyingResource, SH) : zH._currentLOD !== SH && (CH.framebufferTexture2D(CH.FRAMEBUFFER, CH.COLOR_ATTACHMENT0, CH.TEXTURE_2D, HH.texture._hardwareTexture?.underlyingResource, SH), zH._currentLOD = SH));
        const EH = HH._depthStencilTexture;
        if (EH) {
          HH.is3D && (HH.texture.width === EH.width && HH.texture.height === EH.height && HH.texture.depth === EH.depth || tH.e.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const LH = HH._depthStencilTextureWithStencil ? CH.DEPTH_STENCIL_ATTACHMENT : CH.DEPTH_ATTACHMENT;
          HH.is2DArray || HH.is3D ? CH.framebufferTextureLayer(CH.FRAMEBUFFER, LH, EH._hardwareTexture?.underlyingResource, SH, hH) : HH.isCube ? CH.framebufferTexture2D(CH.FRAMEBUFFER, LH, CH.TEXTURE_CUBE_MAP_POSITIVE_X + BH, EH._hardwareTexture?.underlyingResource, SH) : CH.framebufferTexture2D(CH.FRAMEBUFFER, LH, CH.TEXTURE_2D, EH._hardwareTexture?.underlyingResource, SH)
        }
        zH._MSAAFramebuffer && this._bindUnboundFramebuffer(zH._MSAAFramebuffer), this._cachedViewport && !rH ? this.setViewport(this._cachedViewport, LH, AH) : (LH || (LH = HH.width, SH && (LH /= Math.pow(2, SH))), AH || (AH = HH.height, SH && (AH /= Math.pow(2, SH))), this._viewport(0, 0, LH, AH)), this.wipeCaches()
      }
      setStateCullFaceType(HH, BH) {
        const LH = this.cullBackFaces ?? HH ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== LH || BH) && (this._depthCullingState.cullFace = LH)
      }
      setState(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 ? arguments[2] : void 0,
          AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          rH = arguments.length > 4 ? arguments[4] : void 0,
          SH = arguments.length > 5 ? arguments[5] : void 0,
          hH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== HH || LH) && (this._depthCullingState.cull = HH), this.setStateCullFaceType(rH, LH), this.setZOffset(BH), this.setZOffsetUnits(hH);
        const tH = AH ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== tH || LH) && (this._depthCullingState.frontFace = tH), this._stencilStateComposer.stencilMaterial = SH
      }
      _resolveAndGenerateMipMapsFramebuffer(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        HH.disableAutomaticMSAAResolve || (HH.isMulti ? this.resolveMultiFramebuffer(HH) : this.resolveFramebuffer(HH)), BH || (HH.isMulti ? this.generateMipMapsMultiFramebuffer(HH) : this.generateMipMapsFramebuffer(HH))
      }
      _bindUnboundFramebuffer(HH) {
        this._currentFramebuffer !== HH && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, HH), this._currentFramebuffer = HH)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(HH) {
        const BH = this._getTextureTarget(HH);
        this._bindTextureDirectly(BH, HH, !0), this._gl.generateMipmap(BH), this._bindTextureDirectly(BH, null)
      }
      unBindFramebuffer(HH, BH, LH) {
        const AH = HH;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(HH, BH), LH && (AH._MSAAFramebuffer && this._bindUnboundFramebuffer(AH._framebuffer), LH()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(HH) {
        HH.isMulti || !HH.texture?.generateMipMaps || HH.isCube || this.generateMipmaps(HH.texture)
      }
      resolveFramebuffer(HH) {
        const BH = HH,
          LH = this._gl;
        if (!BH._MSAAFramebuffer || BH.isMulti) return;
        let AH = BH.resolveMSAAColors ? LH.COLOR_BUFFER_BIT : 0;
        AH |= BH._generateDepthBuffer && BH.resolveMSAADepth ? LH.DEPTH_BUFFER_BIT : 0, AH |= BH._generateStencilBuffer && BH.resolveMSAAStencil ? LH.STENCIL_BUFFER_BIT : 0, LH.bindFramebuffer(LH.READ_FRAMEBUFFER, BH._MSAAFramebuffer), LH.bindFramebuffer(LH.DRAW_FRAMEBUFFER, BH._framebuffer), LH.blitFramebuffer(0, 0, HH.width, HH.height, 0, 0, HH.width, HH.height, AH, LH.NEAREST)
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
      createVertexBuffer(HH, BH, LH) {
        return this._createVertexBuffer(HH, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(HH, BH) {
        const LH = this._gl.createBuffer();
        if (!LH) throw new Error("Unable to create vertex buffer");
        const AH = new GH.b(LH);
        return this.bindArrayBuffer(AH), "number" !== typeof HH ? HH instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(HH), BH), AH.aX = 4 * HH.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, HH, BH), AH.aX = HH.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(HH), BH), AH.aX = HH), this._resetVertexBufferBinding(), AH.references = 1, AH
      }
      createDynamicVertexBuffer(HH, BH) {
        return this._createVertexBuffer(HH, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(HH, BH, LH) {
        const AH = this._gl.createBuffer(),
          rH = new GH.b(AH);
        if (!AH) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(rH);
        const SH = this._normalizeIndexData(HH);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, SH, BH ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), rH.references = 1, rH.is32Bits = 4 === SH.BYTES_PER_ELEMENT, rH
      }
      _normalizeIndexData(HH) {
        if (2 === HH.BYTES_PER_ELEMENT) return HH;
        if (this._caps.uintIndices) {
          if (HH instanceof Uint32Array) return HH;
          for (let BH = 0; BH < HH.length; BH++)
            if (HH[BH] >= 65535) return new Uint32Array(HH);
          return new Uint16Array(HH)
        }
        return new Uint16Array(HH)
      }
      bindArrayBuffer(HH) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(HH, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(HH, BH, LH) {
        const AH = HH.program,
          rH = this._gl.getUniformBlockIndex(AH, BH);
        this._gl.uniformBlockBinding(AH, rH, LH)
      }
      bindIndexBuffer(HH) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(HH, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(HH, BH) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[BH] !== HH) && (this._gl.bindBuffer(BH, HH ? HH.underlyingResource : null), this._currentBoundBuffer[BH] = HH)
      }
      updateArrayBuffer(HH) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, HH)
      }
      _vertexAttribPointer(HH, BH, LH, AH, rH, SH, hH) {
        const tH = this._currentBufferPointers[BH];
        if (!tH) return;
        let zH = !1;
        tH.active ? (tH.buffer !== HH && (tH.buffer = HH, zH = !0), tH.size !== LH && (tH.size = LH, zH = !0), tH.type !== AH && (tH.type = AH, zH = !0), tH.normalized !== rH && (tH.normalized = rH, zH = !0), tH.stride !== SH && (tH.stride = SH, zH = !0), tH.offset !== hH && (tH.offset = hH, zH = !0)) : (zH = !0, tH.active = !0, tH.index = BH, tH.size = LH, tH.type = AH, tH.normalized = rH, tH.stride = SH, tH.offset = hH, tH.buffer = HH), (zH || this._vaoRecordInProgress) && (this.bindArrayBuffer(HH), AH === this._gl.UNSIGNED_INT || AH === this._gl.INT ? this._gl.vertexAttribIPointer(BH, LH, AH, SH, hH) : this._gl.vertexAttribPointer(BH, LH, AH, rH, SH, hH))
      }
      _bindIndexBufferWithCache(HH) {
        null != HH && this._cachedIndexBuffer !== HH && (this._cachedIndexBuffer = HH, this.bindIndexBuffer(HH), this._uintIndicesCurrentlySet = HH.is32Bits)
      }
      _bindVertexBuffersAttributes(HH, BH, LH) {
        const AH = BH.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let rH = 0; rH < AH.length; rH++) {
          const SH = BH.getAttributeLocation(rH);
          if (SH >= 0) {
            const BH = AH[rH];
            let hH = null;
            if (LH && (hH = LH[BH]), hH || (hH = HH[BH]), !hH) continue;
            this._gl.enableVertexAttribArray(SH), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[SH] = !0);
            const tH = hH.getBuffer();
            tH && (this._vertexAttribPointer(tH, SH, hH.getSize(), hH.type, hH.normalized, hH.byteStride, hH.byteOffset), hH.getIsInstanced() && (this._gl.vertexAttribDivisor(SH, hH.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(SH), this._currentInstanceBuffers.push(tH))))
          }
        }
      }
      recordVertexArrayObject(HH, BH, LH, AH) {
        const rH = this._gl.createVertexArray();
        if (!rH) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(rH), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(HH, LH, AH), this.bindIndexBuffer(BH), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), rH
      }
      bindVertexArrayObject(HH, BH) {
        this._cachedVertexArrayObject !== HH && (this._cachedVertexArrayObject = HH, this._gl.bindVertexArray(HH), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != BH && BH.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(HH, BH, LH, AH, rH) {
        if (this._cachedVertexBuffers !== HH || this._cachedEffectForVertexBuffers !== rH) {
          this._cachedVertexBuffers = HH, this._cachedEffectForVertexBuffers = rH;
          const BH = rH.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let SH = 0;
          for (let hH = 0; hH < BH; hH++)
            if (hH < LH.length) {
              const BH = rH.getAttributeLocation(hH);
              BH >= 0 && (this._gl.enableVertexAttribArray(BH), this._vertexAttribArraysEnabled[BH] = !0, this._vertexAttribPointer(HH, BH, LH[hH], this._gl.FLOAT, !1, AH, SH)), SH += 4 * LH[hH]
            }
        }
        this._bindIndexBufferWithCache(BH)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(HH, BH, LH, AH) {
        this._cachedVertexBuffers === HH && this._cachedEffectForVertexBuffers === LH || (this._cachedVertexBuffers = HH, this._cachedEffectForVertexBuffers = LH, this._bindVertexBuffersAttributes(HH, LH, AH)), this._bindIndexBufferWithCache(BH)
      }
      unbindInstanceAttributes() {
        let HH;
        for (let BH = 0, LH = this._currentInstanceLocations.length; BH < LH; BH++) {
          const LH = this._currentInstanceBuffers[BH];
          HH != LH && LH.references && (HH = LH, this.bindArrayBuffer(LH));
          const AH = this._currentInstanceLocations[BH];
          this._gl.vertexAttribDivisor(AH, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(HH) {
        this._gl.deleteVertexArray(HH)
      }
      _releaseBuffer(HH) {
        return HH.references--, 0 === HH.references && (this._deleteBuffer(HH), !0)
      }
      _deleteBuffer(HH) {
        this._gl.deleteBuffer(HH.underlyingResource)
      }
      updateAndBindInstancesBuffer(HH, BH, LH) {
        if (this.bindArrayBuffer(HH), BH && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, BH), void 0 !== LH[0].index) this.bindInstancesBuffer(HH, LH, !0);
        else
          for (let AH = 0; AH < 4; AH++) {
            const BH = LH[AH];
            this._vertexAttribArraysEnabled[BH] || (this._gl.enableVertexAttribArray(BH), this._vertexAttribArraysEnabled[BH] = !0), this._vertexAttribPointer(HH, BH, 4, this._gl.FLOAT, !1, 64, 16 * AH), this._gl.vertexAttribDivisor(BH, 1), this._currentInstanceLocations.push(BH), this._currentInstanceBuffers.push(HH)
          }
      }
      bindInstancesBuffer(HH, BH) {
        let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(HH);
        let AH = 0;
        if (LH)
          for (let rH = 0; rH < BH.length; rH++) {
            AH += 4 * BH[rH].attributeSize
          }
        for (let rH = 0; rH < BH.length; rH++) {
          const LH = BH[rH];
          void 0 === LH.index && (LH.index = this._currentEffect.getAttributeLocationByName(LH.attributeName)), LH.index < 0 || (this._vertexAttribArraysEnabled[LH.index] || (this._gl.enableVertexAttribArray(LH.index), this._vertexAttribArraysEnabled[LH.index] = !0), this._vertexAttribPointer(HH, LH.index, LH.attributeSize, LH.attributeType || this._gl.FLOAT, LH.normalized || !1, AH, LH.offset), this._gl.vertexAttribDivisor(LH.index, void 0 === LH.divisor ? 1 : LH.divisor), this._currentInstanceLocations.push(LH.index), this._currentInstanceBuffers.push(HH))
        }
      }
      disableInstanceAttributeByName(HH) {
        if (!this._currentEffect) return;
        const BH = this._currentEffect.getAttributeLocationByName(HH);
        this.disableInstanceAttribute(BH)
      }
      disableInstanceAttribute(HH) {
        let BH, LH = !1;
        for (; - 1 !== (BH = this._currentInstanceLocations.indexOf(HH));) this._currentInstanceLocations.splice(BH, 1), this._currentInstanceBuffers.splice(BH, 1), LH = !0;
        LH && (this._gl.vertexAttribDivisor(HH, 0), this.disableAttributeByIndex(HH))
      }
      disableAttributeByIndex(HH) {
        this._gl.disableVertexAttribArray(HH), this._vertexAttribArraysEnabled[HH] = !1, this._currentBufferPointers[HH].active = !1
      }
      draw(HH, BH, LH, AH) {
        this.drawElementsType(HH ? 0 : 1, BH, LH, AH)
      }
      drawPointClouds(HH, BH, LH) {
        this.drawArraysType(2, HH, BH, LH)
      }
      drawUnIndexed(HH, BH, LH, AH) {
        this.drawArraysType(HH ? 0 : 1, BH, LH, AH)
      }
      drawElementsType(HH, BH, LH, AH) {
        this.applyStates(), this._reportDrawCall();
        const rH = this._drawMode(HH),
          SH = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          hH = this._uintIndicesCurrentlySet ? 4 : 2;
        AH ? this._gl.drawElementsInstanced(rH, LH, SH, BH * hH, AH) : this._gl.drawElements(rH, LH, SH, BH * hH)
      }
      drawArraysType(HH, BH, LH, AH) {
        this.applyStates(), this._reportDrawCall();
        const rH = this._drawMode(HH);
        AH ? this._gl.drawArraysInstanced(rH, BH, LH, AH) : this._gl.drawArrays(rH, BH, LH)
      }
      _drawMode(HH) {
        switch (HH) {
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
      _releaseEffect(HH) {
        this._compiledEffects[HH._key] && delete this._compiledEffects[HH._key];
        const BH = HH.getPipelineContext();
        BH && this._deletePipelineContext(BH)
      }
      _deletePipelineContext(HH) {
        const BH = HH;
        BH && BH.program && (BH.program.__SPECTOR_rebuildProgram = null, (0, MH.l)(BH), this._gl && (this._currentProgram === BH.program && this._setProgram(null), this._gl.deleteProgram(BH.program)))
      }
      _getGlobalDefines(HH) {
        return (0, WH.f)(HH, this.isNDCHalfZRange, this.WrH, this.useExactSrgbConversions)
      }
      createEffect(HH, BH, LH, SH, hH, tH, zH, CH, EH) {
        let XH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          GH = arguments.length > 10 ? arguments[10] : void 0;
        const YH = "string" === typeof HH ? HH : HH.vertexToken || HH.vertexSource || HH.vertexElement || HH.vertex,
          uH = "string" === typeof HH ? HH : HH.fragmentToken || HH.fragmentSource || HH.fragmentElement || HH.fragment,
          QH = this._getGlobalDefines(),
          WH = void 0 !== BH.attributes;
        let MH = hH ?? BH.defines ?? "";
        QH && (MH += QH);
        const xH = YH + "+" + uH + "@" + MH;
        if (this._compiledEffects[xH]) {
          const HH = this._compiledEffects[xH];
          return zH && HH.isReady() && zH(HH), HH._refCount++, HH
        }
        this._gl && (0, rH.B)(this._gl);
        const vH = new AH.c(HH, BH, WH ? this : LH, SH, this, hH, tH, zH, CH, EH, xH, BH.shaderLanguage ?? XH, BH.extraInitializationsAsync ?? GH);
        return this._compiledEffects[xH] = vH, vH
      }
      _getShaderSource(HH) {
        return this._gl.getShaderSource(HH)
      }
      createRawShaderProgram(HH, BH, LH, AH) {
        let SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const hH = (0, rH.B)(this._gl);
        return hH._contextWasLost = this._contextWasLost, hH.validateShaderPrograms = this.validateShaderPrograms, (0, rH.v)(HH, BH, LH, AH || this._gl, SH)
      }
      createShaderProgram(HH, BH, LH, AH, SH) {
        let hH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const tH = (0, rH.B)(this._gl);
        return tH._contextWasLost = this._contextWasLost, tH.validateShaderPrograms = this.validateShaderPrograms, (0, rH.x)(HH, BH, LH, AH, SH || this._gl, hH)
      }
      inlineShaderCode(HH) {
        return HH
      }
      createPipelineContext(HH) {
        if (this._gl) {
          (0, rH.B)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const BH = (0, rH.t)(this._gl, HH);
        return BH.engine = this, BH
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(HH) {
        return (0, rH.j)(HH, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(HH, BH, LH, AH, SH, hH, tH, zH, CH, EH, XH) {
        const GH = (0, rH.B)(this._gl);
        return GH._contextWasLost = this._contextWasLost, GH.validateShaderPrograms = this.validateShaderPrograms, GH._createShaderProgramInjection = this._createShaderProgram.bind(this), GH.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), GH.createShaderProgramInjection = this.createShaderProgram.bind(this), GH.loadFileInjection = this._loadFile.bind(this), (0, rH.p)(HH, BH, LH, AH, SH, hH, tH, zH, CH, EH, XH)
      }
      _createShaderProgram(HH, BH, LH, AH) {
        let SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, rH.d)(HH, BH, LH, AH, SH)
      }
      _isRenderingStateCompiled(HH) {
        return !this._isDisposed && (0, rH.l)(HH, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(HH, BH) {
        (0, rH.f)(HH, BH)
      }
      getUniforms(HH, BH) {
        const LH = new Array,
          AH = HH;
        for (let rH = 0; rH < BH.length; rH++) LH.push(this._gl.getUniformLocation(AH.program, BH[rH]));
        return LH
      }
      getAttributes(HH, BH) {
        const LH = [],
          AH = HH;
        for (let SH = 0; SH < BH.length; SH++) try {
          LH.push(this._gl.getAttribLocation(AH.program, BH[SH]))
        } catch (rH) {
          LH.push(-1)
        }
        return LH
      }
      enableEffect(HH) {
        (HH = null !== HH && (0, hH.b)(HH) ? HH.effect : HH) && HH !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(HH), this._currentEffect = HH, HH.onBind && HH.onBind(HH), HH._onBindObservable && HH._onBindObservable.notifyObservers(HH))
      }
      setInt(HH, BH) {
        return !!HH && (this._gl.uniform1i(HH, BH), !0)
      }
      setInt2(HH, BH, LH) {
        return !!HH && (this._gl.uniform2i(HH, BH, LH), !0)
      }
      setInt3(HH, BH, LH, AH) {
        return !!HH && (this._gl.uniform3i(HH, BH, LH, AH), !0)
      }
      setInt4(HH, BH, LH, AH, rH) {
        return !!HH && (this._gl.uniform4i(HH, BH, LH, AH, rH), !0)
      }
      setIntArray(HH, BH) {
        return !!HH && (this._gl.uniform1iv(HH, BH), !0)
      }
      setIntArray2(HH, BH) {
        return !(!HH || BH.length % 2 !== 0) && (this._gl.uniform2iv(HH, BH), !0)
      }
      setIntArray3(HH, BH) {
        return !(!HH || BH.length % 3 !== 0) && (this._gl.uniform3iv(HH, BH), !0)
      }
      setIntArray4(HH, BH) {
        return !(!HH || BH.length % 4 !== 0) && (this._gl.uniform4iv(HH, BH), !0)
      }
      setUInt(HH, BH) {
        return !!HH && (this._gl.uniform1ui(HH, BH), !0)
      }
      setUInt2(HH, BH, LH) {
        return !!HH && (this._gl.uniform2ui(HH, BH, LH), !0)
      }
      setUInt3(HH, BH, LH, AH) {
        return !!HH && (this._gl.uniform3ui(HH, BH, LH, AH), !0)
      }
      setUInt4(HH, BH, LH, AH, rH) {
        return !!HH && (this._gl.uniform4ui(HH, BH, LH, AH, rH), !0)
      }
      setUIntArray(HH, BH) {
        return !!HH && (this._gl.uniform1uiv(HH, BH), !0)
      }
      setUIntArray2(HH, BH) {
        return !(!HH || BH.length % 2 !== 0) && (this._gl.uniform2uiv(HH, BH), !0)
      }
      setUIntArray3(HH, BH) {
        return !(!HH || BH.length % 3 !== 0) && (this._gl.uniform3uiv(HH, BH), !0)
      }
      setUIntArray4(HH, BH) {
        return !(!HH || BH.length % 4 !== 0) && (this._gl.uniform4uiv(HH, BH), !0)
      }
      setArray(HH, BH) {
        return !!HH && (!(BH.length < 1) && (this._gl.uniform1fv(HH, BH), !0))
      }
      setArray2(HH, BH) {
        return !(!HH || BH.length % 2 !== 0) && (this._gl.uniform2fv(HH, BH), !0)
      }
      setArray3(HH, BH) {
        return !(!HH || BH.length % 3 !== 0) && (this._gl.uniform3fv(HH, BH), !0)
      }
      setArray4(HH, BH) {
        return !(!HH || BH.length % 4 !== 0) && (this._gl.uniform4fv(HH, BH), !0)
      }
      setMatrices(HH, BH) {
        return !!HH && (this._gl.uniformMatrix4fv(HH, !1, BH), !0)
      }
      setMatrix3x3(HH, BH) {
        return !!HH && (this._gl.uniformMatrix3fv(HH, !1, BH), !0)
      }
      setMatrix2x2(HH, BH) {
        return !!HH && (this._gl.uniformMatrix2fv(HH, !1, BH), !0)
      }
      setFloat(HH, BH) {
        return !!HH && (this._gl.uniform1f(HH, BH), !0)
      }
      setFloat2(HH, BH, LH) {
        return !!HH && (this._gl.uniform2f(HH, BH, LH), !0)
      }
      setFloat3(HH, BH, LH, AH) {
        return !!HH && (this._gl.uniform3f(HH, BH, LH, AH), !0)
      }
      setFloat4(HH, BH, LH, AH, rH) {
        return !!HH && (this._gl.uniform4f(HH, BH, LH, AH, rH), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const HH = this._colorWrite;
          this._gl.colorMask(HH, HH, HH, HH)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(HH) {
        this.preventCacheWipeBetweenFrames && !HH || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), HH && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(HH, BH) {
        const LH = this._gl;
        let AH = LH.NEAREST,
          rH = LH.NEAREST,
          SH = !1;
        switch (HH) {
          case 11:
            AH = LH.LINEAR, rH = BH ? LH.LINEAR_MIPMAP_NEAREST : LH.LINEAR;
            break;
          case 3:
            AH = LH.LINEAR, SH = !0, rH = BH ? LH.LINEAR_MIPMAP_LINEAR : LH.LINEAR;
            break;
          case 8:
            SH = !0, AH = LH.NEAREST, rH = BH ? LH.NEAREST_MIPMAP_LINEAR : LH.NEAREST;
            break;
          case 4:
            AH = LH.NEAREST, rH = BH ? LH.NEAREST_MIPMAP_NEAREST : LH.NEAREST;
            break;
          case 5:
            AH = LH.NEAREST, rH = BH ? LH.LINEAR_MIPMAP_NEAREST : LH.LINEAR;
            break;
          case 6:
            SH = !0, AH = LH.NEAREST, rH = BH ? LH.LINEAR_MIPMAP_LINEAR : LH.LINEAR;
            break;
          case 7:
            AH = LH.NEAREST, rH = LH.LINEAR;
            break;
          case 1:
            AH = LH.NEAREST, rH = LH.NEAREST;
            break;
          case 9:
            AH = LH.LINEAR, rH = BH ? LH.NEAREST_MIPMAP_NEAREST : LH.NEAREST;
            break;
          case 10:
            SH = !0, AH = LH.LINEAR, rH = BH ? LH.NEAREST_MIPMAP_LINEAR : LH.NEAREST;
            break;
          case 2:
            AH = LH.LINEAR, rH = LH.LINEAR;
            break;
          case 12:
            AH = LH.LINEAR, rH = LH.NEAREST
        }
        return {
          min: rH,
          mag: AH,
          hasMipMaps: SH
        }
      }
      _createTexture() {
        const HH = this._gl.createTexture();
        if (!HH) throw new Error("Unable to create texture");
        return HH
      }
      _createHardwareTexture() {
        return new uH.e(this._createTexture(), this._gl)
      }
      _createInternalTexture(HH, BH) {
        let LH, AH, rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          SH = !1,
          hH = 0,
          zH = 3,
          CH = 5,
          EH = !1,
          XH = 1,
          GH = !1,
          YH = 0,
          uH = !1;
        void 0 !== BH && "object" === typeof BH ? (LH = !!BH.generateMipMaps, SH = !!BH.createMipMaps, hH = void 0 === BH.type ? 0 : BH.type, zH = void 0 === BH.samplingMode ? 3 : BH.samplingMode, CH = void 0 === BH.format ? 5 : BH.format, EH = void 0 !== BH.useSRGBBuffer && BH.useSRGBBuffer, XH = BH.samples ?? 1, AH = BH.label, GH = !!BH.createMSAATexture, YH = BH.comparisonFunction || 0, uH = !!BH.isCube) : LH = !!BH, EH && (EH = this._caps.supportSRGBBuffers && (this.hQ > 1 || this.isWebGPU)), (1 !== hH || this._caps.textureFloatLinearFiltering) && (2 !== hH || this._caps.textureHalfFloatLinearFiltering) || (zH = 1), 1 !== hH || this._caps.textureFloat || (hH = 0, tH.e.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const WH = (0, xH.d)(CH),
          MH = (0, xH.b)(CH),
          vH = this._gl,
          PH = new QH.e(this, rH),
          TH = HH.width || HH,
          UH = HH.height || HH,
          VH = HH.depth || 0,
          OH = HH.layers || 0,
          bH = this._getSamplingParameters(zH, (LH || SH) && !WH),
          kH = 0 !== OH ? vH.TEXTURE_2D_ARRAY : 0 !== VH ? vH.TEXTURE_3D : uH ? vH.TEXTURE_CUBE_MAP : vH.TEXTURE_2D,
          mH = WH ? this._getInternalFormatFromDepthTextureFormat(CH, !0, MH) : this._getRGBABufferInternalSizedFormat(hH, CH, EH),
          oH = WH ? MH ? vH.DEPTH_STENCIL : vH.DEPTH_COMPONENT : this._getInternalFormat(CH),
          IH = WH ? this._getWebGLTextureTypeFromDepthTextureFormat(CH) : this._getWebGLTextureType(hH);
        if (this._bindTextureDirectly(kH, PH), 0 !== OH) PH.is2DArray = !0, vH.texImage3D(kH, 0, mH, TH, UH, OH, 0, oH, IH, null);
        else if (0 !== VH) PH.is3D = !0, vH.texImage3D(kH, 0, mH, TH, UH, VH, 0, oH, IH, null);
        else if (uH) {
          PH.isCube = !0;
          for (let HH = 0; HH < 6; HH++) vH.texImage2D(vH.TEXTURE_CUBE_MAP_POSITIVE_X + HH, 0, mH, TH, UH, 0, oH, IH, null)
        } else vH.texImage2D(kH, 0, mH, TH, UH, 0, oH, IH, null);
        if (vH.texParameteri(kH, vH.TEXTURE_MAG_FILTER, bH.mag), vH.texParameteri(kH, vH.TEXTURE_MIN_FILTER, bH.min), vH.texParameteri(kH, vH.TEXTURE_WRAP_S, vH.CLAMP_TO_EDGE), vH.texParameteri(kH, vH.TEXTURE_WRAP_T, vH.CLAMP_TO_EDGE), WH && this.hQ > 1 && (0 === YH ? (vH.texParameteri(kH, vH.TEXTURE_COMPARE_FUNC, 515), vH.texParameteri(kH, vH.TEXTURE_COMPARE_MODE, vH.NONE)) : (vH.texParameteri(kH, vH.TEXTURE_COMPARE_FUNC, YH), vH.texParameteri(kH, vH.TEXTURE_COMPARE_MODE, vH.COMPARE_REF_TO_TEXTURE))), (LH || SH) && this._gl.generateMipmap(kH), this._bindTextureDirectly(kH, null), PH._useSRGBBuffer = EH, PH.baseWidth = TH, PH.baseHeight = UH, PH.width = TH, PH.height = UH, PH.depth = OH || VH, PH.isReady = !0, PH.samples = XH, PH.generateMipMaps = LH, PH.samplingMode = zH, PH.type = hH, PH.format = CH, PH.label = AH, PH.comparisonFunction = YH, this._internalTexturesCache.push(PH), GH) {
          let HH;
          if (HH = (0, xH.d)(PH.format) ? this._setupFramebufferDepthAttachments((0, xH.b)(PH.format), 19 !== PH.format, PH.width, PH.height, XH, PH.format, !0) : this._createRenderBuffer(PH.width, PH.height, XH, -1, this._getRGBABufferInternalSizedFormat(PH.type, PH.format, PH._useSRGBBuffer), -1), !HH) throw new Error("Unable to create render buffer");
          PH._autoMSAAManagement = !0;
          let BH = PH._hardwareTexture;
          BH || (BH = PH._hardwareTexture = this._createHardwareTexture()), BH.addMSAARenderBuffer(HH)
        }
        return PH
      }
      _getUseSRGBBuffer(HH, BH) {
        return HH && this._caps.supportSRGBBuffers && (this.hQ > 1 || BH)
      }
      createTexture(HH, BH, LH, AH) {
        var rH = this;
        let SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          hH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          tH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          zH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          CH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          EH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          XH = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          GH = arguments.length > 11 ? arguments[11] : void 0,
          YH = arguments.length > 12 ? arguments[12] : void 0,
          uH = arguments.length > 13 ? arguments[13] : void 0,
          WH = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(HH, BH, LH, AH, SH, hH, tH, (function() {
          for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
          return rH._prepareWebGLTexture(...BH, EH)
        }), ((HH, BH, LH, rH, SH, hH) => {
          const tH = this._gl,
            zH = LH.width === HH && LH.height === BH;
          SH._creationFlags = uH ?? 0;
          const CH = this._getTexImageParametersForCreateTexture(SH.format, SH._useSRGBBuffer);
          if (zH) return tH.texImage2D(tH.TEXTURE_2D, 0, CH.internalFormat, CH.format, CH.type, LH), !1;
          const EH = this._caps.maxTextureSize;
          if (LH.width > EH || LH.height > EH || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = HH, this._workingCanvas.height = BH, this._workingContext.drawImage(LH, 0, 0, LH.width, LH.height, 0, 0, HH, BH), tH.texImage2D(tH.TEXTURE_2D, 0, CH.internalFormat, CH.format, CH.type, this._workingCanvas), SH.width = HH, SH.height = BH, !1);
          {
            const HH = new QH.e(this, 2);
            this._bindTextureDirectly(tH.TEXTURE_2D, HH, !0), tH.texImage2D(tH.TEXTURE_2D, 0, CH.internalFormat, CH.format, CH.type, LH), this._rescaleTexture(HH, SH, AH, CH.format, (() => {
              this._releaseTexture(HH), this._bindTextureDirectly(tH.TEXTURE_2D, SH, !0), hH()
            }))
          }
          return !0
        }), zH, CH, EH, XH, GH, YH, WH)
      }
      _getTexImageParametersForCreateTexture(HH, BH) {
        let LH, AH;
        return 1 === this.hQ ? (LH = this._getInternalFormat(HH, BH), AH = LH) : (LH = this._getInternalFormat(HH, !1), AH = this._getRGBABufferInternalSizedFormat(0, HH, BH)), {
          internalFormat: AH,
          format: LH,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(HH, BH, LH, AH, rH) {}
      _unpackFlipY(HH) {
        this._unpackFlipYCached !== HH && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, HH ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = HH))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(HH) {
        return HH.isCube ? this._gl.TEXTURE_CUBE_MAP : HH.is3D ? this._gl.TEXTURE_3D : HH.is2DArray || HH.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const AH = this._getTextureTarget(BH),
          rH = this._getSamplingParameters(HH, BH.useMipMaps || LH);
        this._setTextureParameterInteger(AH, this._gl.TEXTURE_MAG_FILTER, rH.mag, BH), this._setTextureParameterInteger(AH, this._gl.TEXTURE_MIN_FILTER, rH.min), LH && rH.hasMipMaps && (BH.generateMipMaps = !0, this._gl.generateMipmap(AH)), this._bindTextureDirectly(AH, null), BH.samplingMode = HH
      }
      updateTextureDimensions(HH, BH, LH) {}
      updateTextureWrappingMode(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const rH = this._getTextureTarget(HH);
        null !== BH && (this._setTextureParameterInteger(rH, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(BH), HH), HH._cachedWrapU = BH), null !== LH && (this._setTextureParameterInteger(rH, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(LH), HH), HH._cachedWrapV = LH), (HH.is2DArray || HH.is3D) && null !== AH && (this._setTextureParameterInteger(rH, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(AH), HH), HH._cachedWrapR = AH), this._bindTextureDirectly(rH, null)
      }
      _uploadCompressedDataToTextureDirectly(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          hH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const tH = this._gl;
        let zH = tH.TEXTURE_2D;
        if (HH.isCube && (zH = tH.TEXTURE_CUBE_MAP_POSITIVE_X + SH), HH._useSRGBBuffer) switch (BH) {
          case 37492:
          case 36196:
            this._caps.etc2 ? BH = tH.COMPRESSED_SRGB8_ETC2 : HH._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? BH = tH.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : HH._useSRGBBuffer = !1;
            break;
          case 36492:
            BH = tH.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            BH = tH.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            BH = tH.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            BH = tH.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            BH = tH.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            BH = tH.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            BH = tH.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            BH = tH.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            BH = tH.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            BH = tH.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            BH = tH.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            BH = tH.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            BH = tH.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            BH = tH.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            BH = tH.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? BH = tH.COMPRESSED_SRGB_S3TC_DXT1_EXT : HH._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? BH = tH.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : HH._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? BH = tH.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : HH._useSRGBBuffer = !1;
            break;
          default:
            HH._useSRGBBuffer = !1
        }
        if (HH.generateMipMaps) {
          const SH = HH._hardwareTexture;
          SH.memoryAllocated || (tH.texStorage2D(HH.isCube ? tH.TEXTURE_CUBE_MAP : tH.TEXTURE_2D, Math.floor(Math.log2(Math.max(LH, AH))) + 1, BH, HH.width, HH.height), SH.memoryAllocated = !0), this._gl.compressedTexSubImage2D(zH, hH, 0, 0, LH, AH, BH, rH)
        } else this._gl.compressedTexImage2D(zH, hH, BH, LH, AH, 0, rH)
      }
      _uploadDataToTextureDirectly(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          rH = arguments.length > 4 ? arguments[4] : void 0,
          SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const hH = this._gl,
          tH = this._getWebGLTextureType(HH.type),
          zH = this._getInternalFormat(HH.format),
          CH = void 0 === rH ? this._getRGBABufferInternalSizedFormat(HH.type, HH.format, HH._useSRGBBuffer) : this._getInternalFormat(rH, HH._useSRGBBuffer);
        this._unpackFlipY(HH.invertY);
        let EH = hH.TEXTURE_2D;
        HH.isCube && (EH = hH.TEXTURE_CUBE_MAP_POSITIVE_X + LH);
        const XH = Math.round(Math.log(HH.width) * Math.LOG2E),
          GH = Math.round(Math.log(HH.height) * Math.LOG2E),
          YH = SH ? HH.width : Math.pow(2, Math.max(XH - AH, 0)),
          uH = SH ? HH.height : Math.pow(2, Math.max(GH - AH, 0));
        hH.texImage2D(EH, AH, CH, YH, uH, 0, zH, tH, BH)
      }
      updateTextureData(HH, BH, LH, AH, rH, SH) {
        let hH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          tH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          zH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const CH = this._gl,
          EH = this._getWebGLTextureType(HH.type),
          XH = this._getInternalFormat(HH.format);
        this._unpackFlipY(HH.invertY);
        let GH = CH.TEXTURE_2D,
          YH = CH.TEXTURE_2D;
        HH.isCube && (YH = CH.TEXTURE_CUBE_MAP_POSITIVE_X + hH, GH = CH.TEXTURE_CUBE_MAP), this._bindTextureDirectly(GH, HH, !0), CH.texSubImage2D(YH, tH, LH, AH, rH, SH, XH, EH, BH), zH && this._gl.generateMipmap(YH), this._bindTextureDirectly(GH, null)
      }
      _uploadArrayBufferViewToTexture(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const rH = this._gl,
          SH = HH.isCube ? rH.TEXTURE_CUBE_MAP : rH.TEXTURE_2D;
        this._bindTextureDirectly(SH, HH, !0), this._uploadDataToTextureDirectly(HH, BH, LH, AH), this._bindTextureDirectly(SH, null, !0)
      }
      _prepareWebGLTextureContinuation(HH, BH, LH, AH, rH) {
        const SH = this._gl;
        if (!SH) return;
        const hH = this._getSamplingParameters(rH, !LH);
        SH.texParameteri(SH.TEXTURE_2D, SH.TEXTURE_MAG_FILTER, hH.mag), SH.texParameteri(SH.TEXTURE_2D, SH.TEXTURE_MIN_FILTER, hH.min), LH || AH || SH.generateMipmap(SH.TEXTURE_2D), this._bindTextureDirectly(SH.TEXTURE_2D, null), BH && BH.removePendingData(HH), HH.onLoadedObservable.notifyObservers(HH), HH.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH) {
        const EH = this.getCaps().maxTextureSize,
          XH = Math.min(EH, this.needPOTTextures ? (0, YH.c)(AH.width, EH) : AH.width),
          GH = Math.min(EH, this.needPOTTextures ? (0, YH.c)(AH.height, EH) : AH.height),
          uH = this._gl;
        uH && (HH._hardwareTexture ? (this._bindTextureDirectly(uH.TEXTURE_2D, HH, !0), this._unpackFlipY(void 0 === rH || !!rH), HH.baseWidth = AH.width, HH.baseHeight = AH.height, HH.width = XH, HH.height = GH, HH.isReady = !0, HH.type = -1 !== HH.type ? HH.type : 0, HH.format = -1 !== HH.format ? HH.format : CH ?? (".jpg" !== BH || HH._useSRGBBuffer ? 5 : 4), tH(XH, GH, AH, BH, HH, (() => {
          this._prepareWebGLTextureContinuation(HH, LH, SH, hH, zH)
        })) || this._prepareWebGLTextureContinuation(HH, LH, SH, hH, zH)) : LH && LH.removePendingData(HH))
      }
      _getInternalFormatFromDepthTextureFormat(HH, BH, LH) {
        const AH = this._gl;
        if (!BH) return AH.STENCIL_INDEX8;
        let rH = LH ? AH.DEPTH_STENCIL : AH.DEPTH_COMPONENT;
        return this.hQ > 1 ? 15 === HH ? rH = AH.DEPTH_COMPONENT16 : 16 === HH ? rH = AH.DEPTH_COMPONENT24 : 17 === HH || 13 === HH ? rH = LH ? AH.DEPTH24_STENCIL8 : AH.DEPTH_COMPONENT24 : 14 === HH ? rH = AH.DEPTH_COMPONENT32F : 18 === HH && (rH = LH ? AH.DEPTH32F_STENCIL8 : AH.DEPTH_COMPONENT32F) : rH = AH.DEPTH_COMPONENT16, rH
      }
      _getWebGLTextureTypeFromDepthTextureFormat(HH) {
        const BH = this._gl;
        let LH = BH.UNSIGNED_INT;
        return 15 === HH ? LH = BH.UNSIGNED_SHORT : 17 === HH || 13 === HH ? LH = BH.UNSIGNED_INT_24_8 : 14 === HH ? LH = BH.FLOAT : 18 === HH ? LH = BH.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === HH && (LH = BH.UNSIGNED_BYTE), LH
      }
      _setupFramebufferDepthAttachments(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          SH = arguments.length > 5 ? arguments[5] : void 0,
          hH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const tH = this._gl;
        SH = SH ?? (HH ? 13 : 14);
        const zH = this._getInternalFormatFromDepthTextureFormat(SH, BH, HH);
        return HH && BH ? this._createRenderBuffer(LH, AH, rH, tH.DEPTH_STENCIL, zH, hH ? -1 : tH.DEPTH_STENCIL_ATTACHMENT) : BH ? this._createRenderBuffer(LH, AH, rH, zH, zH, hH ? -1 : tH.DEPTH_ATTACHMENT) : HH ? this._createRenderBuffer(LH, AH, rH, zH, zH, hH ? -1 : tH.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(HH, BH, LH, AH, rH, SH) {
        let hH = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const tH = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(tH, HH, BH, LH, AH, rH, SH, hH)
      }
      _updateRenderBuffer(HH, BH, LH, AH, rH, SH, hH) {
        let tH = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const zH = this._gl;
        return zH.bindRenderbuffer(zH.RENDERBUFFER, HH), AH > 1 && zH.renderbufferStorageMultisample ? zH.renderbufferStorageMultisample(zH.RENDERBUFFER, AH, SH, BH, LH) : zH.renderbufferStorage(zH.RENDERBUFFER, rH, BH, LH), -1 !== hH && zH.framebufferRenderbuffer(zH.FRAMEBUFFER, hH, zH.RENDERBUFFER, HH), tH && zH.bindRenderbuffer(zH.RENDERBUFFER, null), HH
      }
      _releaseTexture(HH) {
        this._deleteTexture(HH._hardwareTexture), this.unbindAllTextures();
        const BH = this._internalTexturesCache.indexOf(HH); - 1 !== BH && this._internalTexturesCache.splice(BH, 1), HH._lodTextureHigh && HH._lodTextureHigh.dispose(), HH._lodTextureMid && HH._lodTextureMid.dispose(), HH._lodTextureLow && HH._lodTextureLow.dispose(), HH._irradianceTexture && HH._irradianceTexture.dispose()
      }
      _deleteTexture(HH) {
        HH?.release()
      }
      _setProgram(HH) {
        this._currentProgram !== HH && ((0, rH.r)(HH, this._gl), this._currentProgram = HH)
      }
      bindSamplers(HH) {
        const BH = HH.getPipelineContext();
        this._setProgram(BH.program);
        const LH = HH.getSamplers();
        for (let AH = 0; AH < LH.length; AH++) {
          const BH = HH.getUniform(LH[AH]);
          BH && (this._boundUniforms[AH] = BH)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          rH = !1;
        const SH = BH && BH._associatedChannel > -1;
        LH && SH && (this._activeChannel = BH._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== BH || AH) {
          if (this._activateCurrentTexture(), BH && BH.isMultiview) throw tH.e.Error(["_bindTextureDirectly called with a multiview texture!", HH, BH]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(HH, BH?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = BH, BH && (BH._associatedChannel = this._activeChannel)
        } else LH && (rH = !0, this._activateCurrentTexture());
        return SH && !LH && this._bindSamplerUniformToChannel(BH._associatedChannel, this._activeChannel), rH
      }
      _bindTexture(HH, BH, LH) {
        if (void 0 === HH) return;
        BH && (BH._associatedChannel = HH), this._activeChannel = HH;
        const AH = BH ? this._getTextureTarget(BH) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(AH, BH)
      }
      unbindAllTextures() {
        for (let HH = 0; HH < this._maxSimultaneousTextures; HH++) this._activeChannel = HH, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.hQ > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(HH, BH, LH, AH) {
        void 0 !== HH && (BH && (this._boundUniforms[HH] = BH), this._setTexture(HH, LH))
      }
      _bindSamplerUniformToChannel(HH, BH) {
        const LH = this._boundUniforms[HH];
        LH && LH._currentState !== BH && (this._gl.uniform1i(LH, BH), LH._currentState = BH)
      }
      _getTextureWrapMode(HH) {
        switch (HH) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(HH, BH) {
        let LH, AH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          rH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!BH) return null != this._boundTexturesCache[HH] && (this._activeChannel = HH, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.hQ > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (BH.video) {
          this._activeChannel = HH;
          const LH = BH.getInternalTexture();
          LH && (LH._associatedChannel = HH), BH.update()
        } else if (4 === BH.delayLoadState) return BH.delayLoad(), !1;
        LH = rH ? BH.depthStencilTexture : BH.isReady() ? BH.getInternalTexture() : BH.isCube ? this.emptyCubeTexture : BH.is3D ? this.emptyTexture3D : BH.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !AH && LH && (LH._associatedChannel = HH);
        let SH = !0;
        this._boundTexturesCache[HH] === LH && (AH || this._bindSamplerUniformToChannel(LH._associatedChannel, HH), SH = !1), this._activeChannel = HH;
        const hH = this._getTextureTarget(LH);
        if (SH && this._bindTextureDirectly(hH, LH, AH), LH && !LH.isMultiview) {
          if (LH.isCube && LH._cachedCoordinatesMode !== BH.coordinatesMode) {
            LH._cachedCoordinatesMode = BH.coordinatesMode;
            const HH = 3 !== BH.coordinatesMode && 5 !== BH.coordinatesMode ? 1 : 0;
            BH.wrapU = HH, BH.wrapV = HH
          }
          LH._cachedWrapU !== BH.wrapU && (LH._cachedWrapU = BH.wrapU, this._setTextureParameterInteger(hH, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(BH.wrapU), LH)), LH._cachedWrapV !== BH.wrapV && (LH._cachedWrapV = BH.wrapV, this._setTextureParameterInteger(hH, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(BH.wrapV), LH)), LH.is3D && LH._cachedWrapR !== BH.wrapR && (LH._cachedWrapR = BH.wrapR, this._setTextureParameterInteger(hH, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(BH.wrapR), LH)), this._setAnisotropicLevel(hH, LH, BH.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(HH, BH, LH, AH) {
        if (void 0 !== HH && BH) {
          this._textureUnits && this._textureUnits.length === LH.length || (this._textureUnits = new Int32Array(LH.length));
          for (let BH = 0; BH < LH.length; BH++) {
            const AH = LH[BH].getInternalTexture();
            AH ? (this._textureUnits[BH] = HH + BH, AH._associatedChannel = HH + BH) : this._textureUnits[BH] = -1
          }
          this._gl.uniform1iv(BH, this._textureUnits);
          for (let HH = 0; HH < LH.length; HH++) this._setTexture(this._textureUnits[HH], LH[HH], !0)
        }
      }
      _setAnisotropicLevel(HH, BH, LH) {
        const AH = this._caps.textureAnisotropicFilterExtension;
        11 !== BH.samplingMode && 3 !== BH.samplingMode && 2 !== BH.samplingMode && (LH = 1), AH && BH._cachedAnisotropicFilteringLevel !== LH && (this._setTextureParameterFloat(HH, AH.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(LH, this._caps.maxAnisotropy), BH), BH._cachedAnisotropicFilteringLevel = LH)
      }
      _setTextureParameterFloat(HH, BH, LH, AH) {
        this._bindTextureDirectly(HH, AH, !0, !0), this._gl.texParameterf(HH, BH, LH)
      }
      _setTextureParameterInteger(HH, BH, LH, AH) {
        AH && this._bindTextureDirectly(HH, AH, !0, !0), this._gl.texParameteri(HH, BH, LH)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let HH = 0; HH < this._caps.maxVertexAttribs; HH++) this.disableAttributeByIndex(HH)
        } else
          for (let HH = 0, BH = this._vertexAttribArraysEnabled.length; HH < BH; HH++) HH >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[HH] || this.disableAttributeByIndex(HH)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, zH.k)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, rH.A)(this._gl)
      }
      attachContextLostEvent(HH) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", HH, !1)
      }
      attachContextRestoredEvent(HH) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", HH, !1)
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
      _canRenderToFramebuffer(HH) {
        const BH = this._gl;
        for (; BH.getError() !== BH.NO_ERROR;);
        let LH = !0;
        const AH = BH.createTexture();
        BH.bindTexture(BH.TEXTURE_2D, AH), BH.texImage2D(BH.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(HH), 1, 1, 0, BH.RGBA, this._getWebGLTextureType(HH), null), BH.texParameteri(BH.TEXTURE_2D, BH.TEXTURE_MIN_FILTER, BH.NEAREST), BH.texParameteri(BH.TEXTURE_2D, BH.TEXTURE_MAG_FILTER, BH.NEAREST);
        const rH = BH.createFramebuffer();
        BH.bindFramebuffer(BH.FRAMEBUFFER, rH), BH.framebufferTexture2D(BH.FRAMEBUFFER, BH.COLOR_ATTACHMENT0, BH.TEXTURE_2D, AH, 0);
        const SH = BH.checkFramebufferStatus(BH.FRAMEBUFFER);
        if (LH = LH && SH === BH.FRAMEBUFFER_COMPLETE, LH = LH && BH.getError() === BH.NO_ERROR, LH && (BH.clear(BH.COLOR_BUFFER_BIT), LH = LH && BH.getError() === BH.NO_ERROR), LH) {
          BH.bindFramebuffer(BH.FRAMEBUFFER, null);
          const HH = BH.RGBA,
            AH = BH.UNSIGNED_BYTE,
            rH = new Uint8Array(4);
          BH.readPixels(0, 0, 1, 1, HH, AH, rH), LH = LH && BH.getError() === BH.NO_ERROR
        }
        for (BH.deleteTexture(AH), BH.deleteFramebuffer(rH), BH.bindFramebuffer(BH.FRAMEBUFFER, null); !LH && BH.getError() !== BH.NO_ERROR;);
        return LH
      }
      _getWebGLTextureType(HH) {
        if (1 === this._webGLVersion) {
          switch (HH) {
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
        switch (HH) {
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
      _getInternalFormat(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = BH ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (HH) {
          case 0:
            LH = this._gl.ALPHA;
            break;
          case 1:
            LH = this._gl.LUMINANCE;
            break;
          case 2:
            LH = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            LH = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            LH = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            LH = BH ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            LH = BH ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (HH) {
          case 8:
            LH = this._gl.RED_INTEGER;
            break;
          case 9:
            LH = this._gl.RG_INTEGER;
            break;
          case 10:
            LH = this._gl.RGB_INTEGER;
            break;
          case 11:
            LH = this._gl.RGBA_INTEGER
        }
        return LH
      }
      _getRGBABufferInternalSizedFormat(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== BH) switch (BH) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return LH ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (HH) {
          case 3:
            switch (BH) {
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
            switch (BH) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return LH ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return LH ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (BH) {
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
            switch (BH) {
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
            switch (BH) {
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
            switch (BH) {
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
            switch (BH) {
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
            switch (BH) {
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
            switch (BH) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return LH ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(HH, BH, LH, AH) {
        let rH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          SH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          hH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const zH = rH ? 4 : 3,
          CH = rH ? this._gl.RGBA : this._gl.RGB,
          EH = LH * AH * zH;
        if (hH) {
          if (hH.length < EH) return tH.e.Error(`Data buffer is too small to store the read pixels (${hH.length} should be more than ${EH})`), Promise.resolve(hH)
        } else hH = new Uint8Array(EH);
        return SH && this.flushFramebuffer(), this._gl.readPixels(HH, BH, LH, AH, CH, this._gl.UNSIGNED_BYTE, hH), Promise.resolve(hH)
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
          const HH = SH.c._CreateCanvas(1, 1),
            BH = HH.getContext("webgl") || HH.getContext("experimental-webgl");
          this._IsSupported = null != BH && !!globalThis.WebGLRenderingContext
        } catch (HH) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const HH = SH.c._CreateCanvas(1, 1),
            BH = HH.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || HH.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !BH
        } catch (HH) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    TH._TempClearColorUint32 = new Uint32Array(4), TH._TempClearColorInt32 = new Int32Array(4), TH._TempClearColorFloat32 = new Float32Array(4), TH.ExceptionList = [{
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
    }], TH._ConcatenateShader = WH.c, TH._IsSupported = null, TH._HasMajorPerformanceCaveat = null
  },
  41466: (HH, BH, LH) => {
    var AH;
    LH.d(BH, {
        d: () => rH
      }),
      function(HH) {
        HH[HH.PointerMove = 0] = "PointerMove", HH[HH.PointerDown = 1] = "PointerDown", HH[HH.PointerUp = 2] = "PointerUp"
      }(AH || (AH = {}));
    class rH {}
    rH.DOM_DELTA_PIXEL = 0, rH.DOM_DELTA_LINE = 1, rH.DOM_DELTA_PAGE = 2
  },
  41464: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH,
      d: () => SH,
      g: () => rH
    });
    class AH {}
    AH.KEYDOWN = 1, AH.KEYUP = 2;
    class rH {
      constructor(HH, BH) {
        this.type = HH, this.event = BH
      }
    }
    class SH extends rH {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(HH) {
        this.skipOnKeyboardObservable = HH
      }
      constructor(HH, BH) {
        super(HH, BH), this.type = HH, this.event = BH, this.skipOnKeyboardObservable = !1
      }
    }
  },
  41458: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH,
      e: () => hH,
      g: () => tH
    });
    var AH = LH(37963);
    class rH {}
    rH.POINTERDOWN = 1, rH.POINTERUP = 2, rH.POINTERMOVE = 4, rH.POINTERWHEEL = 8, rH.POINTERPICK = 16, rH.POINTERTAP = 32, rH.POINTERDOUBLETAP = 64;
    class SH {
      constructor(HH, BH) {
        this.type = HH, this.event = BH
      }
    }
    class hH extends SH {
      constructor(HH, BH, LH, rH) {
        super(HH, BH), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new AH.n(LH, rH)
      }
    }
    class tH extends SH {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(HH, BH), this._pickInfo = LH, this._inputManager = AH
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  41472: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH
    });
    class AH {
      static CompareLightsPriority(HH, BH) {
        return HH.shadowEnabled !== BH.shadowEnabled ? (BH.shadowEnabled ? 1 : 0) - (HH.shadowEnabled ? 1 : 0) : BH.renderPriority - HH.renderPriority
      }
    }
    AH.FALLOFF_DEFAULT = 0, AH.FALLOFF_PHYSICAL = 1, AH.FALLOFF_GLTF = 2, AH.FALLOFF_STANDARD = 3, AH.LIGHTMAP_DEFAULT = 0, AH.LIGHTMAP_SPECULAR = 1, AH.LIGHTMAP_SHADOWSONLY = 2, AH.INTENSITYMODE_AUTOMATIC = 0, AH.INTENSITYMODE_LUMINOUSPOWER = 1, AH.INTENSITYMODE_LUMINOUSINTENSITY = 2, AH.INTENSITYMODE_ILLUMINANCE = 3, AH.INTENSITYMODE_LUMINANCE = 4, AH.LIGHTTYPEID_POINTLIGHT = 0, AH.LIGHTTYPEID_DIRECTIONALLIGHT = 1, AH.LIGHTTYPEID_SPOTLIGHT = 2, AH.LIGHTTYPEID_HEMISPHERICLIGHT = 3, AH.LIGHTTYPEID_RECT_AREALIGHT = 4, AH.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  41122: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => hH
    });
    var AH, rH = LH(37997),
      SH = LH(41124);
    ! function(HH) {
      HH[HH.Unknown = 0] = "Unknown", HH[HH.Url = 1] = "Url", HH[HH.Temp = 2] = "Temp", HH[HH.Raw = 3] = "Raw", HH[HH.Dynamic = 4] = "Dynamic", HH[HH.RenderTarget = 5] = "RenderTarget", HH[HH.MultiRenderTarget = 6] = "MultiRenderTarget", HH[HH.Cube = 7] = "Cube", HH[HH.CubeRaw = 8] = "CubeRaw", HH[HH.CubePrefiltered = 9] = "CubePrefiltered", HH[HH.Raw3D = 10] = "Raw3D", HH[HH.Raw2DArray = 11] = "Raw2DArray", HH[HH.DepthStencil = 12] = "DepthStencil", HH[HH.CubeRawRGBD = 13] = "CubeRawRGBD", HH[HH.Depth = 14] = "Depth", HH[HH.External = 15] = "External"
    }(AH || (AH = {}));
    class hH extends SH.d {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(HH) {
        this._useMipMaps = HH
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(HH) {
        this._uniqueId = HH
      }
      Iu() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new rH.d, this.onErrorObservable = new rH.d, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = HH, this._source = BH, this._uniqueId = hH._Counter++, LH || (this._hardwareTexture = HH._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, HH, BH, LH), this.width = HH, this.height = BH, this.depth = LH, this.baseWidth = HH, this.baseHeight = BH, this.baseDepth = LH, this._size = HH * BH * LH
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const HH = this.onRebuildCallback(this),
            BH = BH => {
              BH._swapAndDie(this, !1), this.isReady = HH.isReady
            };
          return void(HH.isAsync ? HH.proxy.then(BH) : BH(HH.proxy))
        }
        let HH;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(HH = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (HH => {
              HH._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (HH = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), HH._swapAndDie(this, !1), this._bufferViewArray)
              for (let HH = 0; HH < this._bufferViewArray.length; HH++) {
                const BH = this._bufferViewArray[HH];
                BH && this._engine.updateRawTexture(this, BH, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, HH)
              }
            this.isReady = !0;
            break;
          case 10:
            HH = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), HH._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (HH = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), HH._swapAndDie(this, !1), this._bufferViewArray)
              for (let HH = 0; HH < this._bufferViewArray.length; HH++) {
                const BH = this._bufferViewArray[HH];
                BH && this._engine.updateRawTexture2DArray(this, BH, this.format, this.invertY, this._compression, this.type, HH)
              }
            this.isReady = !0;
            break;
          case 4:
            HH = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), HH._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(HH = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              HH._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            HH = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), HH._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return HH = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (HH => {
              HH && HH._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(HH._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(HH._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), HH._hardwareTexture = this._hardwareTexture, HH._setUniqueId(hH._Counter++), BH && (HH._isRGBD = this._isRGBD), this._lodTextureHigh && (HH._lodTextureHigh && HH._lodTextureHigh.dispose(), HH._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (HH._lodTextureMid && HH._lodTextureMid.dispose(), HH._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (HH._lodTextureLow && HH._lodTextureLow.dispose(), HH._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (HH._irradianceTexture && HH._irradianceTexture.dispose(), HH._irradianceTexture = this._irradianceTexture);
        const LH = this._engine.getLoadedTexturesCache();
        let AH = LH.indexOf(this); - 1 !== AH && LH.splice(AH, 1), AH = LH.indexOf(HH), -1 === AH && LH.push(HH)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    hH._Counter = 0
  },
  41229: (HH, BH, LH) => {
    function AH(HH) {
      return 13 === HH || 14 === HH || 15 === HH || 16 === HH || 17 === HH || 18 === HH || 19 === HH
    }

    function rH(HH) {
      return 8 === HH || 9 === HH || 10 === HH || 11 === HH
    }

    function SH(HH) {
      return 0 === HH || 5 === HH || 7 === HH || 11 === HH
    }

    function hH(HH) {
      return 13 === HH || 17 === HH || 18 === HH || 19 === HH
    }
    LH.d(BH, {
      b: () => hH,
      d: () => AH,
      f: () => rH,
      i: () => SH
    })
  },
  41124: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH
    });
    class AH {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(HH) {
        this._cachedWrapU = HH
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(HH) {
        this._cachedWrapV = HH
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(HH) {
        this._cachedWrapR = HH
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(HH) {
        this._cachedAnisotropicFilteringLevel = HH
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(HH) {
        this._comparisonFunction = HH
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(HH) {
        this._useMipMaps = HH
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = HH, this._cachedWrapV = BH, this._cachedWrapR = LH, this._cachedAnisotropicFilteringLevel = AH, this.samplingMode = rH, this._comparisonFunction = SH, this
      }
      compareSampler(HH) {
        return this._cachedWrapU === HH._cachedWrapU && this._cachedWrapV === HH._cachedWrapV && this._cachedWrapR === HH._cachedWrapR && this._cachedAnisotropicFilteringLevel === HH._cachedAnisotropicFilteringLevel && this.samplingMode === HH.samplingMode && this._comparisonFunction === HH._comparisonFunction && this._useMipMaps === HH._useMipMaps
      }
    }
  },
  41407: (HH, BH, LH) => {
    function AH(HH) {
      HH.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    LH.d(BH, {
      c: () => AH
    })
  },
  41202: (HH, BH, LH) => {
    function AH(HH) {
      return void 0 === HH.getPipelineContext
    }
    LH.d(BH, {
      b: () => AH
    })
  },
  41609: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH
    });
    var AH = LH(41179);
    class rH {
      static GetEffect(HH) {
        return void 0 === HH.getPipelineContext ? HH.effect : HH
      }
      constructor(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = HH.createDrawContext(), BH && (this.materialContext = HH.createMaterialContext())
      }
      setEffect(HH, BH) {
        let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        LH || this.effect === HH || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = HH, void 0 !== BH && (this.defines = BH), LH && this.drawContext?.reset()
      }
      dispose() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const BH = this.effect;
          HH ? BH.dispose() : AH.d.SetImmediate((() => {
            BH.Iu().onEndFrameObservable.addOnce((() => {
              BH.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  41147: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => XH,
      f: () => YH,
      i: () => CH,
      l: () => EH
    });
    var AH = LH(41154),
      rH = LH(41157),
      SH = LH(41138),
      hH = LH(39595),
      tH = LH(41173),
      zH = LH(41164);

    function CH(HH, BH) {
      return (0, rH.B)(BH).cachedPipelines[HH]
    }

    function EH(HH) {
      const BH = HH._name,
        LH = HH.context;
      if (BH && LH) {
        const HH = (0, rH.B)(LH),
          AH = HH.cachedPipelines[BH];
        AH?.dispose(), delete HH.cachedPipelines[BH]
      }
    }

    function XH(HH, BH, LH, rH, SH, hH, zH) {
      let CH, EH;
      const XH = (0, AH.k)() ? hH?.getHostDocument() : null;
      CH = "string" === typeof BH ? BH : "string" === typeof BH.vertexSource ? "source:" + BH.vertexSource : "string" === typeof BH.vertexElement ? XH?.getElementById(BH.vertexElement) || BH.vertexElement : BH.vertex || BH, EH = "string" === typeof BH ? BH : "string" === typeof BH.fragmentSource ? "source:" + BH.fragmentSource : "string" === typeof BH.fragmentElement ? XH?.getElementById(BH.fragmentElement) || BH.fragmentElement : BH.fragment || BH;
      const YH = [void 0, void 0],
        uH = () => {
          if (YH[0] && YH[1]) {
            const [AH, CH] = YH;
            (0, tH.d)(HH), (0, tH.j)(AH, HH, ((AH, EH) => {
              zH && (zH._vertexSourceCodeBeforeMigration = EH), LH && (AH = LH("vertex", AH)), HH.isFragment = !0, (0, tH.j)(CH, HH, ((hH, CH) => {
                zH && (zH._fragmentSourceCodeBeforeMigration = CH), LH && (hH = LH("fragment", hH));
                const EH = (0, tH.b)(AH, hH, HH);
                HH = null;
                const XH = function(HH, BH, LH, AH) {
                  if (LH) {
                    return {
                      vertexSourceCode: (1 === AH ? "//" : "") + "#define SHADER_NAME vertex:" + (LH.vertexElement || LH.vertex || LH.spectorName || LH) + "\n" + HH,
                      fragmentSourceCode: (1 === AH ? "//" : "") + "#define SHADER_NAME fragment:" + (LH.fragmentElement || LH.fragment || LH.spectorName || LH) + "\n" + BH
                    }
                  }
                  return {
                    vertexSourceCode: HH,
                    fragmentSourceCode: BH
                  }
                }(EH.vertexCode, EH.fragmentCode, BH, SH);
                rH?.(XH.vertexSourceCode, XH.fragmentSourceCode)
              }), hH)
            }), hH)
          }
        };
      GH(CH, "Vertex", "", (HH => {
        zH && (zH._rawVertexSourceCode = HH), YH[0] = HH, uH()
      }), SH), GH(EH, "Fragment", "Pixel", (HH => {
        zH && (zH._rawFragmentSourceCode = HH), YH[1] = HH, uH()
      }), SH)
    }

    function GH(HH, BH, LH, rH, hH, tH) {
      if ("undefined" !== typeof HTMLElement && HH instanceof HTMLElement) {
        return void rH((0, AH.c)(HH))
      }
      if ("source:" === HH.substring(0, 7)) return void rH(HH.substring(7));
      if ("base64:" === HH.substring(0, 7)) {
        return void rH(window.atob(HH.substring(7)))
      }
      const CH = SH.c.GetShadersStore(hH);
      if (CH[HH + BH + "Shader"]) return void rH(CH[HH + BH + "Shader"]);
      if (LH && CH[HH + LH + "Shader"]) return void rH(CH[HH + LH + "Shader"]);
      let EH;
      if (EH = "." === HH[0] || "/" === HH[0] || HH.indexOf("http") > -1 ? HH : SH.c.GetShadersRepository(hH) + HH, !(tH = tH || zH.g)) throw new Error("loadFileInjection is not defined");
      tH(EH + "." + BH.toLowerCase() + ".fx", rH)
    }
    const YH = (HH, BH, LH, AH) => {
      try {
        const SH = HH.context ? (0, rH.B)(HH.context) : null;
        SH && (SH.disableParallelShaderCompile = HH.disableParallelCompilation);
        const hH = HH.existingPipelineContext || BH(HH.shaderProcessingContext);
        return hH._name = HH.name, HH.name && SH && (SH.cachedPipelines[HH.name] = hH), LH(hH, HH.vertex, HH.fragment, !!HH.createAsRaw, "", "", HH.rebuildRebind, HH.defines, HH.transformFeedbackVaryings, "", (() => {
          AH(hH, (() => {
            HH.onRenderingStateCompiled?.(hH)
          }))
        })), hH
      } catch (SH) {
        throw hH.e.Error("Error compiling effect"), SH
      }
    }
  },
  41134: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => zH
    });
    var AH = LH(37997),
      rH = LH(39595),
      SH = LH(41138),
      hH = LH(41147),
      tH = LH(41179);
    class zH {
      static get ShadersRepository() {
        return SH.c.ShadersRepository
      }
      static set ShadersRepository(HH) {
        SH.c.ShadersRepository = HH
      }
      get mV() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new AH.d), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(HH, BH, LH) {
        let rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          SH = arguments.length > 4 ? arguments[4] : void 0,
          tH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          CH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          EH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          XH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          GH = arguments.length > 9 ? arguments[9] : void 0,
          YH = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          uH = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          QH = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new AH.d, this.onErrorObservable = new AH.d, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = HH, this._key = YH;
        const WH = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let MH;
        if (BH.attributes) {
          const HH = BH;
          if (this._engine = LH, this._attributesNames = HH.attributes, this._uniformsNames = HH.uniformsNames.concat(HH.samplers), this._samplerList = HH.samplers.slice(), this.defines = HH.defines, this.onError = HH.onError, this.onCompiled = HH.onCompiled, this._fallbacks = HH.fallbacks, this._indexParameters = HH.indexParameters, this._transformFeedbackVaryings = HH.transformFeedbackVaryings || null, this._multiTarget = !!HH.multiTarget, this._shaderLanguage = HH.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!HH.disableParallelShaderCompilation, HH.uniformBuffersNames) {
            this._uniformBuffersNamesList = HH.uniformBuffersNames.slice();
            for (let BH = 0; BH < HH.uniformBuffersNames.length; BH++) this._uniformBuffersNames[HH.uniformBuffersNames[BH]] = BH
          }
          this._processFinalCode = HH.processFinalCode ?? null, this._processCodeAfterIncludes = HH.processCodeAfterIncludes ?? void 0, QH = HH.extraInitializationsAsync, MH = HH.existingPipelineContext
        } else this._engine = SH, this.defines = null == tH ? "" : tH, this._uniformsNames = LH.concat(rH), this._samplerList = rH ? rH.slice() : [], this._attributesNames = BH, this._uniformBuffersNamesList = [], this._shaderLanguage = uH, this.onError = XH, this.onCompiled = EH, this._indexParameters = GH, this._fallbacks = CH;
        "WEBGL2" === this._engine.shaderPlatformName && (MH = (0, hH.i)(WH, this._engine._gl) ?? MH), this._attributeLocationByName = {}, this.uniqueId = zH._UniqueIdSeed++, MH ? (this._pipelineContext = MH, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, QH).catch((HH => {
          const BH = HH?.message ?? String(HH),
            LH = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${BH}`);
          HH && "string" === typeof HH.stack && (LH.stack = `${LH.message}\nCaused by: ${HH.stack}`), this._processCompilationErrors(LH)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.mV || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          AH = arguments.length > 3 ? arguments[3] : void 0;
        AH && await AH(), this._processingContext = LH || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const rH = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: HH ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: SH.c.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: SH.c.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          WrH: this._engine.WrH,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, hH.d)(rH, this.name, this._processFinalCode, ((HH, LH) => {
          this._vertexSourceCode = HH, this._fragmentSourceCode = LH, this._prepareEffect(BH)
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
        return !!this._engine.mV || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      Iu() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(HH) {
        return this._attributes[HH]
      }
      getAttributeLocationByName(HH) {
        return this._attributeLocationByName[HH]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(HH) {
        return this._uniformsNames.indexOf(HH)
      }
      getUniform(HH) {
        return this._uniforms[HH]
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
        return await new Promise((HH => {
          this.executeWhenCompiled(HH)
        }))
      }
      executeWhenCompiled(HH) {
        this.isReady() ? HH(this) : (this.onCompileObservable.add((BH => {
          HH(BH)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(HH) {
        (0, tH.f)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (BH => {
          this._processCompilationErrors(BH, HH)
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
            WrH: this._engine.WrH,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(HH, BH, LH, AH) {
        this._isReady = !1, this._vertexSourceCodeOverride = HH, this._fragmentSourceCodeOverride = BH, this.onError = (HH, BH) => {
          AH && AH(BH)
        }, this.onCompiled = () => {
          const HH = this.Iu().scenes;
          if (HH)
            for (let BH = 0; BH < HH.length; BH++) HH[BH].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(LH)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(HH) {
        if (this._pipelineContext = HH, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let BH = 0; BH < this._attributesNames.length; BH++) {
            const HH = this._attributesNames[BH];
            this._attributeLocationByName[HH] = this._attributes[BH]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), zH.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const BH = this._pipelineContext;
        this._isReady = !1;
        try {
          const LH = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            AH = LH ? null : this.defines,
            rH = LH ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            SH = LH ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            tH = this._engine;
          this._pipelineContext = (0, hH.f)({
            existingPipelineContext: HH ? BH : null,
            vertex: rH,
            fragment: SH,
            context: "WEBGL2" === tH.shaderPlatformName || "WEBGL1" === tH.shaderPlatformName ? tH._gl : void 0,
            rebuildRebind: (HH, BH, LH, AH) => this._rebuildProgram(HH, BH, LH, AH),
            defines: AH,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: LH,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: LH => {
              BH && !HH && this._engine._deletePipelineContext(BH), LH && this._onRenderingStateCompiled(LH)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(BH)
        } catch (LH) {
          this._processCompilationErrors(LH, BH)
        }
      }
      _getShaderCodeAndErrorLine(HH, BH, LH) {
        const AH = LH ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let rH = null;
        if (BH && HH) {
          const SH = BH.match(AH);
          if (SH && 2 === SH.length) {
            const BH = parseInt(SH[1]),
              AH = HH.split("\n", -1);
            AH.length >= BH && (rH = `Offending line [${BH}] in ${LH?"fragment":"vertex"} code: ${AH[BH-1]}`)
          }
        }
        return [HH, rH]
      }
      _processCompilationErrors(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof HH?.stack ? HH.stack : HH?.message ?? String(HH);
        const LH = this._attributesNames,
          AH = this._fallbacks;
        if (rH.e.Error("Unable to compile effect:"), rH.e.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), rH.e.Error(`Attributes: ${LH.join(" ")}`), rH.e.Error("Defines:\n" + this.defines), zH.LogShaderCodeOnCompilationError) {
          let HH, BH = null,
            LH = null;
          this._pipelineContext?._getVertexShaderCode() && ([HH, BH] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), HH && (rH.e.Error("Vertex code:"), rH.e.Error(HH))), this._pipelineContext?._getFragmentShaderCode() && ([HH, LH] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), HH && (rH.e.Error("Fragment code:"), rH.e.Error(HH))), BH && rH.e.Error(BH), LH && rH.e.Error(LH)
        }
        rH.e.Error("Error: " + this._compilationError);
        const SH = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        BH && (this._pipelineContext = BH, this._isReady = !0, SH()), AH ? (this._pipelineContext = null, AH.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, rH.e.Error("Trying next fallback."), this.defines = AH.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, SH(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, BH || SH())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(HH, BH) {
        this._engine._bindTexture(this._samplers[HH], BH, HH)
      }
      setTexture(HH, BH) {
        this._engine.setTexture(this._samplers[HH], this._uniforms[HH], BH, HH)
      }
      setTextureArray(HH, BH) {
        const LH = HH + "Ex";
        if (-1 === this._samplerList.indexOf(LH + "0")) {
          const AH = this._samplerList.indexOf(HH);
          for (let HH = 1; HH < BH.length; HH++) {
            const BH = LH + (HH - 1).toString();
            this._samplerList.splice(AH + HH, 0, BH)
          }
          let rH = 0;
          for (const HH of this._samplerList) this._samplers[HH] = rH, rH += 1
        }
        this._engine.setTextureArray(this._samplers[HH], this._uniforms[HH], BH, HH)
      }
      bindUniformBuffer(HH, BH) {
        const LH = this._uniformBuffersNames[BH];
        void 0 === LH || zH._BaseCache[LH] === HH && this._engine._features.useUBOBindingCache || (zH._BaseCache[LH] = HH, this._engine.bindUniformBufferBase(HH, LH, BH))
      }
      bindUniformBlock(HH, BH) {
        this._engine.bindUniformBlock(this._pipelineContext, HH, BH)
      }
      setInt(HH, BH) {
        return this._pipelineContext.setInt(HH, BH), this
      }
      setInt2(HH, BH, LH) {
        return this._pipelineContext.setInt2(HH, BH, LH), this
      }
      setInt3(HH, BH, LH, AH) {
        return this._pipelineContext.setInt3(HH, BH, LH, AH), this
      }
      setInt4(HH, BH, LH, AH, rH) {
        return this._pipelineContext.setInt4(HH, BH, LH, AH, rH), this
      }
      setIntArray(HH, BH) {
        return this._pipelineContext.setIntArray(HH, BH), this
      }
      setIntArray2(HH, BH) {
        return this._pipelineContext.setIntArray2(HH, BH), this
      }
      setIntArray3(HH, BH) {
        return this._pipelineContext.setIntArray3(HH, BH), this
      }
      setIntArray4(HH, BH) {
        return this._pipelineContext.setIntArray4(HH, BH), this
      }
      setUInt(HH, BH) {
        return this._pipelineContext.setUInt(HH, BH), this
      }
      setUInt2(HH, BH, LH) {
        return this._pipelineContext.setUInt2(HH, BH, LH), this
      }
      setUInt3(HH, BH, LH, AH) {
        return this._pipelineContext.setUInt3(HH, BH, LH, AH), this
      }
      setUInt4(HH, BH, LH, AH, rH) {
        return this._pipelineContext.setUInt4(HH, BH, LH, AH, rH), this
      }
      setUIntArray(HH, BH) {
        return this._pipelineContext.setUIntArray(HH, BH), this
      }
      setUIntArray2(HH, BH) {
        return this._pipelineContext.setUIntArray2(HH, BH), this
      }
      setUIntArray3(HH, BH) {
        return this._pipelineContext.setUIntArray3(HH, BH), this
      }
      setUIntArray4(HH, BH) {
        return this._pipelineContext.setUIntArray4(HH, BH), this
      }
      setFloatArray(HH, BH) {
        return this._pipelineContext.setArray(HH, BH), this
      }
      setFloatArray2(HH, BH) {
        return this._pipelineContext.setArray2(HH, BH), this
      }
      setFloatArray3(HH, BH) {
        return this._pipelineContext.setArray3(HH, BH), this
      }
      setFloatArray4(HH, BH) {
        return this._pipelineContext.setArray4(HH, BH), this
      }
      setArray(HH, BH) {
        return this._pipelineContext.setArray(HH, BH), this
      }
      setArray2(HH, BH) {
        return this._pipelineContext.setArray2(HH, BH), this
      }
      setArray3(HH, BH) {
        return this._pipelineContext.setArray3(HH, BH), this
      }
      setArray4(HH, BH) {
        return this._pipelineContext.setArray4(HH, BH), this
      }
      setMatrices(HH, BH) {
        return this._pipelineContext.setMatrices(HH, BH), this
      }
      setMatrix(HH, BH) {
        return this._pipelineContext.setMatrix(HH, BH), this
      }
      setMatrix3x3(HH, BH) {
        return this._pipelineContext.setMatrix3x3(HH, BH), this
      }
      setMatrix2x2(HH, BH) {
        return this._pipelineContext.setMatrix2x2(HH, BH), this
      }
      setFloat(HH, BH) {
        return this._pipelineContext.setFloat(HH, BH), this
      }
      setBool(HH, BH) {
        return this._pipelineContext.setInt(HH, BH ? 1 : 0), this
      }
      setVector2(HH, BH) {
        return this._pipelineContext.setVector2(HH, BH), this
      }
      setFloat2(HH, BH, LH) {
        return this._pipelineContext.setFloat2(HH, BH, LH), this
      }
      setVector3(HH, BH) {
        return this._pipelineContext.setVector3(HH, BH), this
      }
      setFloat3(HH, BH, LH, AH) {
        return this._pipelineContext.setFloat3(HH, BH, LH, AH), this
      }
      setVector4(HH, BH) {
        return this._pipelineContext.setVector4(HH, BH), this
      }
      setQuaternion(HH, BH) {
        return this._pipelineContext.setQuaternion(HH, BH), this
      }
      setFloat4(HH, BH, LH, AH, rH) {
        return this._pipelineContext.setFloat4(HH, BH, LH, AH, rH), this
      }
      setColor3(HH, BH) {
        return this._pipelineContext.setColor3(HH, BH), this
      }
      setColor4(HH, BH, LH) {
        return this._pipelineContext.setColor4(HH, BH, LH), this
      }
      setDirectColor4(HH, BH) {
        return this._pipelineContext.setDirectColor4(HH, BH), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (zH.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, hH.l)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        BH && (SH.c.GetShadersStore(AH)[`${HH}PixelShader`] = BH), LH && (SH.c.GetShadersStore(AH)[`${HH}VertexShader`] = LH)
      }
      static ResetCache() {
        zH._BaseCache = {}
      }
    }
    zH.LogShaderCodeOnCompilationError = !0, zH.PersistentMode = !1, zH.AutomaticallyClearCodeCache = !1, zH._UniqueIdSeed = 0, zH._BaseCache = {}, zH.ShadersStore = SH.c.ShadersStore, zH.IncludesShadersStore = SH.c.IncludesShadersStore
  },
  41439: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => EH,
      g: () => VH,
      j: () => UH
    });
    var AH = LH(41134),
      rH = LH(37963),
      SH = LH(38008),
      hH = LH(41416);
    const tH = new rH.e,
      zH = new rH.e,
      CH = new rH.e,
      EH = {
        yN: () => {},
        eyeAtCamera: !0
      };

    function XH(HH, BH, LH) {
      const AH = LH.xrH(),
        rH = BH.xrH();
      for (let SH = 0; SH < 16; SH++) AH[SH] = rH[SH];
      return AH[12] -= HH.x, AH[13] -= HH.y, AH[14] -= HH.z, LH.markAsUpdated(), LH
    }

    function GH(HH, BH, LH) {
      return (0, SH.h)(BH, zH), XH(HH, zH, CH), (0, SH.h)(CH, LH), LH
    }

    function YH(HH, BH, LH) {
      if (!EH.eyeAtCamera) return GH(HH, BH, LH);
      const AH = LH.xrH(),
        rH = BH.xrH();
      for (let SH = 0; SH < 16; SH++) AH[SH] = rH[SH];
      return AH[12] = 0, AH[13] = 0, AH[14] = 0, LH.markAsUpdated(), LH
    }

    function uH(HH, BH, LH, AH) {
      return (0, SH.r)(YH(HH, BH, AH), LH, AH), AH
    }

    function QH(HH, BH, LH, AH) {
      return (0, SH.h)(LH, zH), (0, SH.r)(BH, zH, CH), XH(HH, CH, zH), YH(HH, LH, CH), (0, SH.r)(zH, CH, AH), AH
    }

    function WH(HH, BH, LH, AH, rH, hH) {
      return (0, SH.h)(LH, zH), (0, SH.r)(BH, zH, CH), XH(HH, CH, zH), uH(HH, AH, rH, CH), (0, SH.r)(zH, CH, hH), hH
    }

    function MH(HH, BH) {
      const LH = EH.yN();
      if (!LH || tH === BH) return BH;
      tH.updateFlag = BH.updateFlag;
      const AH = LH.floatingOriginOffset;
      switch (HH) {
        case "world":
          return XH(AH, BH, tH);
        case "view":
          return YH(AH, BH, tH);
        case "worldView":
          return QH(AH, BH, LH.getViewMatrix(), tH);
        case "viewProjection":
          return uH(AH, LH.getViewMatrix(), LH.getProjectionMatrix(), tH);
        case "worldViewProjection":
          return WH(AH, BH, LH.getTransformMatrix(), LH.getViewMatrix(), LH.getProjectionMatrix(), tH);
        default:
          if (HH.startsWith("u_")) {
            const rH = HH.toLowerCase();
            if (rH.startsWith("u_worldviewprojection")) return WH(AH, BH, LH.getTransformMatrix(), LH.getViewMatrix(), LH.getProjectionMatrix(), tH);
            if (rH.startsWith("u_viewprojection")) return uH(AH, LH.getViewMatrix(), LH.getProjectionMatrix(), tH);
            if (rH.startsWith("u_worldview")) return QH(AH, BH, LH.getViewMatrix(), tH);
            if (rH.startsWith("u_world")) return XH(AH, BH, tH);
            if (rH.startsWith("u_view")) return YH(AH, BH, tH)
          }
          return BH
      }
    }
    const xH = hH.c,
      vH = AH.c,
      PH = xH.prototype._updateMatrixForUniform,
      TH = AH.c.prototype.setMatrix;

    function UH() {
      AH.c.prototype.setMatrix = TH, vH._setMatrixOverride = void 0, xH.prototype._updateMatrixForUniform = PH, xH.prototype._updateMatrixForUniformOverride = void 0
    }

    function VH() {
      vH.prototype._setMatrixOverride = TH, vH.prototype.setMatrix = function(HH, BH) {
        return this._setMatrixOverride(HH, MH(HH, BH)), this
      }, xH.prototype._updateMatrixForUniformOverride = PH, xH.prototype._updateMatrixForUniform = function(HH, BH) {
        this._updateMatrixForUniformOverride(HH, MH(HH, BH))
      }
    }
  },
  41410: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH,
      h: () => rH
    });
    var AH = LH(41407);

    function rH(HH, BH) {
      BH.WHITEBALANCE && HH.push("whiteBalanceMatrix"), BH.EXPOSURE && HH.push("exposureLinear"), BH.CONTRAST && HH.push("contrast"), BH.COLORGRADING && HH.push("colorTransformSettings"), (BH.VIGNETTE || BH.DITHER) && HH.push("vInverseScreenSize"), BH.VIGNETTE && (HH.push("vignetteSettings1"), HH.push("vignetteSettings2")), BH.COLORCURVES && (0, AH.c)(HH), BH.DITHER && HH.push("ditherIntensity")
    }

    function SH(HH, BH) {
      BH.COLORGRADING && HH.push("txColorTransform")
    }
  },
  41402: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => oH,
      d: () => lH
    });
    var AH = LH(41290),
      rH = LH(41297),
      SH = LH(37997),
      hH = LH(38074),
      tH = LH(38002),
      zH = LH(37963);
    const CH = [
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
      EH = 1e6 / CH[CH.length - 1][0],
      XH = 150;

    function GH(HH, BH) {
      const LH = Number.isNaN(HH) ? EH : Math.max(HH, EH),
        AH = (0, tH.Clamp)(1e6 / LH, CH[0][0], CH[CH.length - 1][0]);
      let rH = 0,
        SH = CH.length - 1;
      for (; SH - rH > 1;) {
        const HH = rH + SH >> 1;
        CH[HH][0] <= AH ? rH = HH : SH = HH
      }
      const hH = rH,
        [GH, YH, uH, QH] = CH[hH],
        [WH, MH, xH, vH] = CH[hH + 1],
        PH = (AH - GH) / (WH - GH),
        TH = zH.n.Lerp(new zH.n(YH, uH), new zH.n(MH, xH), PH),
        UH = zH.n.Normalize(new zH.n(1, QH)),
        VH = zH.n.Normalize(new zH.n(1, vH)),
        OH = zH.n.Normalize(zH.n.Lerp(UH, VH, PH)),
        bH = (0, tH.Clamp)(BH, -150, XH);
      TH.grH(OH.scale(bH / 3e3));
      const kH = 2 * TH.x - 8 * TH.y + 4,
        mH = 3 * TH.x / kH,
        oH = 2 * TH.y / kH;
      return new zH.o(mH / oH, 1, (1 - mH - oH) / oH)
    }
    const YH = zH.e.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      uH = zH.e.Invert(YH);

    function QH(HH, BH) {
      const LH = BH > 0 ? HH / BH : 10;
      return (0, tH.Clamp)(LH, .1, 10)
    }

    function WH(HH, BH) {
      const LH = zH.o.TransformNormal(HH, YH),
        AH = zH.o.TransformNormal(BH, YH),
        rH = zH.e.FromArray([QH(AH.x, LH.x), 0, 0, 0, 0, QH(AH.y, LH.y), 0, 0, 0, 0, QH(AH.z, LH.z), 0, 0, 0, 0, 1]);
      return YH.multiply(rH).multiply(uH)
    }
    const MH = new zH.o(.95047, 1, 1.08883),
      xH = zH.e.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(WH(MH, GH(6500, 0))),
      vH = zH.e.Invert(xH),
      PH = zH.o.TransformNormal(new zH.o(1, 1, 1), xH);
    var TH = LH(41319),
      UH = LH(41407);
    let VH = (() => {
      var HH;
      let BH, LH, SH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH = [],
        MH = [],
        xH = [],
        vH = [],
        PH = [],
        VH = [],
        OH = [],
        bH = [],
        kH = [],
        mH = [],
        oH = [],
        IH = [],
        fH = [],
        lH = [],
        KH = [],
        cH = [],
        eH = [],
        qH = [],
        gH = [],
        NH = [],
        RH = [],
        jH = [],
        nH = [],
        FH = [];
      return HH = class {
        constructor() {
          this._dirty = !0, this._tempColor = new hH.g(0, 0, 0, 0), this._globalCurve = new hH.g(0, 0, 0, 0), this._highlightsCurve = new hH.g(0, 0, 0, 0), this._midtonesCurve = new hH.g(0, 0, 0, 0), this._shadowsCurve = new hH.g(0, 0, 0, 0), this._positiveCurve = new hH.g(0, 0, 0, 0), this._negativeCurve = new hH.g(0, 0, 0, 0), this._globalHue = (0, AH.k)(this, WH, 30), this._globalDensity = ((0, AH.k)(this, MH), (0, AH.k)(this, xH, 0)), this._globalSaturation = ((0, AH.k)(this, vH), (0, AH.k)(this, PH, 0)), this._globalExposure = ((0, AH.k)(this, VH), (0, AH.k)(this, OH, 0)), this._highlightsHue = ((0, AH.k)(this, bH), (0, AH.k)(this, kH, 30)), this._highlightsDensity = ((0, AH.k)(this, mH), (0, AH.k)(this, oH, 0)), this._highlightsSaturation = ((0, AH.k)(this, IH), (0, AH.k)(this, fH, 0)), this._highlightsExposure = ((0, AH.k)(this, lH), (0, AH.k)(this, KH, 0)), this._midtonesHue = ((0, AH.k)(this, cH), (0, AH.k)(this, eH, 30)), this._midtonesDensity = ((0, AH.k)(this, qH), (0, AH.k)(this, gH, 0)), this._midtonesSaturation = ((0, AH.k)(this, NH), (0, AH.k)(this, RH, 0)), this._midtonesExposure = ((0, AH.k)(this, jH), (0, AH.k)(this, nH, 0)), this._shadowsHue = ((0, AH.k)(this, FH), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(HH) {
          this._globalHue = HH, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(HH) {
          this._globalDensity = HH, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(HH) {
          this._globalSaturation = HH, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(HH) {
          this._globalExposure = HH, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(HH) {
          this._highlightsHue = HH, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(HH) {
          this._highlightsDensity = HH, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(HH) {
          this._highlightsSaturation = HH, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(HH) {
          this._highlightsExposure = HH, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(HH) {
          this._midtonesHue = HH, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(HH) {
          this._midtonesDensity = HH, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(HH) {
          this._midtonesSaturation = HH, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(HH) {
          this._midtonesExposure = HH, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(HH) {
          this._shadowsHue = HH, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(HH) {
          this._shadowsDensity = HH, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(HH) {
          this._shadowsSaturation = HH, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(HH) {
          this._shadowsExposure = HH, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(BH, LH, AH, rH, SH) {
          null != BH && (BH = HH._Clamp(BH, 0, 360), LH = HH._Clamp(LH, -100, 100), AH = HH._Clamp(AH, -100, 100), rH = HH._Clamp(rH, -100, 100), LH = HH._ApplyColorGradingSliderNonlinear(LH), LH *= .5, rH = HH._ApplyColorGradingSliderNonlinear(rH), LH < 0 && (LH *= -1, BH = (BH + 180) % 360), HH._FromHSBToRef(BH, LH, 50 + .25 * rH, SH), SH.scaleToRef(2, SH), SH.a = 1 + .01 * AH)
        }
        static _ApplyColorGradingSliderNonlinear(HH) {
          HH /= 100;
          let BH = Math.abs(HH);
          return BH = Math.pow(BH, 2), HH < 0 && (BH *= -1), BH *= 100, BH
        }
        static _FromHSBToRef(BH, LH, AH, rH) {
          let SH = HH._Clamp(BH, 0, 360);
          const hH = HH._Clamp(LH / 100, 0, 1),
            tH = HH._Clamp(AH / 100, 0, 1);
          if (0 === hH) rH.r = tH, rH.g = tH, rH.b = tH;
          else {
            SH /= 60;
            const HH = Math.floor(SH),
              BH = SH - HH,
              LH = tH * (1 - hH),
              AH = tH * (1 - hH * BH),
              zH = tH * (1 - hH * (1 - BH));
            switch (HH) {
              case 0:
                rH.r = tH, rH.g = zH, rH.b = LH;
                break;
              case 1:
                rH.r = AH, rH.g = tH, rH.b = LH;
                break;
              case 2:
                rH.r = LH, rH.g = tH, rH.b = zH;
                break;
              case 3:
                rH.r = LH, rH.g = AH, rH.b = tH;
                break;
              case 4:
                rH.r = zH, rH.g = LH, rH.b = tH;
                break;
              default:
                rH.r = tH, rH.g = LH, rH.b = AH
            }
          }
          rH.a = 1
        }
        static _Clamp(HH, BH, LH) {
          return Math.min(Math.max(HH, BH), LH)
        }
        clone() {
          return TH.c.Clone((() => new HH), this)
        }
        serialize() {
          return TH.c.Serialize(this)
        }
        _bind(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), HH && (HH.setFloat4(BH, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), HH.setFloat4(LH, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), HH.setFloat4(AH, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const hH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        BH = [(0, rH.H)()], LH = [(0, rH.H)()], SH = [(0, rH.H)()], tH = [(0, rH.H)()], zH = [(0, rH.H)()], CH = [(0, rH.H)()], EH = [(0, rH.H)()], XH = [(0, rH.H)()], GH = [(0, rH.H)()], YH = [(0, rH.H)()], uH = [(0, rH.H)()], QH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: HH => "_globalHue" in HH,
            get: HH => HH._globalHue,
            set: (HH, BH) => {
              HH._globalHue = BH
            }
          },
          metadata: hH
        }, WH, MH), (0, AH.g)(null, null, LH, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: HH => "_globalDensity" in HH,
            get: HH => HH._globalDensity,
            set: (HH, BH) => {
              HH._globalDensity = BH
            }
          },
          metadata: hH
        }, xH, vH), (0, AH.g)(null, null, SH, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: HH => "_globalSaturation" in HH,
            get: HH => HH._globalSaturation,
            set: (HH, BH) => {
              HH._globalSaturation = BH
            }
          },
          metadata: hH
        }, PH, VH), (0, AH.g)(null, null, tH, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: HH => "_globalExposure" in HH,
            get: HH => HH._globalExposure,
            set: (HH, BH) => {
              HH._globalExposure = BH
            }
          },
          metadata: hH
        }, OH, bH), (0, AH.g)(null, null, zH, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: HH => "_highlightsHue" in HH,
            get: HH => HH._highlightsHue,
            set: (HH, BH) => {
              HH._highlightsHue = BH
            }
          },
          metadata: hH
        }, kH, mH), (0, AH.g)(null, null, CH, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: HH => "_highlightsDensity" in HH,
            get: HH => HH._highlightsDensity,
            set: (HH, BH) => {
              HH._highlightsDensity = BH
            }
          },
          metadata: hH
        }, oH, IH), (0, AH.g)(null, null, EH, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: HH => "_highlightsSaturation" in HH,
            get: HH => HH._highlightsSaturation,
            set: (HH, BH) => {
              HH._highlightsSaturation = BH
            }
          },
          metadata: hH
        }, fH, lH), (0, AH.g)(null, null, XH, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: HH => "_highlightsExposure" in HH,
            get: HH => HH._highlightsExposure,
            set: (HH, BH) => {
              HH._highlightsExposure = BH
            }
          },
          metadata: hH
        }, KH, cH), (0, AH.g)(null, null, GH, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: HH => "_midtonesHue" in HH,
            get: HH => HH._midtonesHue,
            set: (HH, BH) => {
              HH._midtonesHue = BH
            }
          },
          metadata: hH
        }, eH, qH), (0, AH.g)(null, null, YH, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: HH => "_midtonesDensity" in HH,
            get: HH => HH._midtonesDensity,
            set: (HH, BH) => {
              HH._midtonesDensity = BH
            }
          },
          metadata: hH
        }, gH, NH), (0, AH.g)(null, null, uH, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: HH => "_midtonesSaturation" in HH,
            get: HH => HH._midtonesSaturation,
            set: (HH, BH) => {
              HH._midtonesSaturation = BH
            }
          },
          metadata: hH
        }, RH, jH), (0, AH.g)(null, null, QH, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: HH => "_midtonesExposure" in HH,
            get: HH => HH._midtonesExposure,
            set: (HH, BH) => {
              HH._midtonesExposure = BH
            }
          },
          metadata: hH
        }, nH, FH), hH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: hH
        })
      })(), HH.PrepareUniforms = UH.c, HH
    })();

    function OH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      HH._bind(BH, LH, AH, rH)
    }
    var bH = LH(41222),
      kH = LH(41410),
      mH = LH(38012);
    let oH = (() => {
        var HH;
        let BH, LH, CH, YH, uH, QH, MH, UH, mH, oH, IH, fH, lH, KH, cH, eH, qH, gH, NH, RH, jH, nH, FH, DH, wH, ZH, dH, aH, sH = [],
          JH = [],
          iH = [],
          pH = [],
          yH = [],
          HB = [],
          BB = [],
          LB = [],
          AB = [],
          rB = [],
          SB = [],
          hB = [],
          tB = [],
          zB = [],
          CB = [],
          EB = [],
          XB = [],
          GB = [],
          YB = [],
          uB = [],
          QB = [],
          WB = [],
          MB = [],
          xB = [],
          vB = [],
          PB = [],
          TB = [],
          UB = [],
          VB = [],
          OB = [],
          bB = [],
          kB = [],
          mB = [],
          oB = [],
          IB = [],
          fB = [],
          lB = [],
          KB = [],
          cB = [],
          eB = [],
          qB = [],
          gB = [],
          NB = [],
          RB = [],
          jB = [],
          nB = [],
          FB = [],
          DB = [],
          wB = [],
          ZB = [],
          dB = [],
          aB = [],
          sB = [],
          JB = [],
          iB = [],
          pB = [];
        return HH = class {
          constructor() {
            this.colorCurves = (0, AH.k)(this, sH, new VH), this._colorCurvesEnabled = ((0, AH.k)(this, JH), (0, AH.k)(this, iH, !1)), this._colorGradingTexture = ((0, AH.k)(this, pH), (0, AH.k)(this, yH, void 0)), this._colorGradingEnabled = ((0, AH.k)(this, HB), (0, AH.k)(this, BB, !1)), this._colorGradingWithGreenDepth = ((0, AH.k)(this, LB), (0, AH.k)(this, AB, !0)), this._colorGradingBGR = ((0, AH.k)(this, rB), (0, AH.k)(this, SB, !0)), this._exposure = ((0, AH.k)(this, hB), (0, AH.k)(this, tB, 1)), this._toneMappingEnabled = ((0, AH.k)(this, zB), (0, AH.k)(this, CB, !1)), this._toneMappingType = ((0, AH.k)(this, EB), (0, AH.k)(this, XB, HH.TONEMAPPING_STANDARD)), this._contrast = ((0, AH.k)(this, GB), (0, AH.k)(this, YB, 1)), this._whiteBalanceEnabled = ((0, AH.k)(this, uB), (0, AH.k)(this, QB, !1)), this._temperature = ((0, AH.k)(this, WB), (0, AH.k)(this, MB, 6500)), this._tint = ((0, AH.k)(this, xB), (0, AH.k)(this, vB, 0)), this._whiteBalanceMatrix = ((0, AH.k)(this, PB), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, AH.k)(this, TB, 0), this.vignetteCenterX = ((0, AH.k)(this, UB), (0, AH.k)(this, VB, 0)), this.vignetteCenterY = ((0, AH.k)(this, OB), (0, AH.k)(this, bB, 0)), this.vignetteWeight = ((0, AH.k)(this, kB), (0, AH.k)(this, mB, 1.5)), this.vignetteColor = ((0, AH.k)(this, oB), (0, AH.k)(this, IB, new hH.g(0, 0, 0, 0))), this.vignetteCameraFov = ((0, AH.k)(this, fB), (0, AH.k)(this, lB, .5)), this._vignetteBlendMode = ((0, AH.k)(this, KB), (0, AH.k)(this, cB, HH.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, AH.k)(this, eB), (0, AH.k)(this, qB, !1)), this._ditheringEnabled = ((0, AH.k)(this, gB), (0, AH.k)(this, NB, !1)), this._ditheringIntensity = ((0, AH.k)(this, RB), (0, AH.k)(this, jB, 1 / 255)), this._skipFinalColorClamp = ((0, AH.k)(this, nB), (0, AH.k)(this, FB, !1)), this._applyByPostProcess = ((0, AH.k)(this, DB), (0, AH.k)(this, wB, !1)), this._isEnabled = ((0, AH.k)(this, ZB), (0, AH.k)(this, dB, !0)), this.outputTextureWidth = ((0, AH.k)(this, aB), (0, AH.k)(this, sB, 0)), this.outputTextureHeight = ((0, AH.k)(this, JB), (0, AH.k)(this, iB, 0)), this.onUpdateParameters = ((0, AH.k)(this, pB), new SH.d)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(HH) {
            this._colorCurvesEnabled !== HH && (this._colorCurvesEnabled = HH, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(HH) {
            this._colorGradingTexture !== HH && (this._colorGradingTexture = HH, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(HH) {
            this._colorGradingEnabled !== HH && (this._colorGradingEnabled = HH, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(HH) {
            this._colorGradingWithGreenDepth !== HH && (this._colorGradingWithGreenDepth = HH, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(HH) {
            this._colorGradingBGR !== HH && (this._colorGradingBGR = HH, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(HH) {
            this._exposure !== HH && (this._exposure = HH, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(HH) {
            this._toneMappingEnabled !== HH && (this._toneMappingEnabled = HH, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(HH) {
            this._toneMappingType !== HH && (this._toneMappingType = HH, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(HH) {
            this._contrast !== HH && (this._contrast = HH, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(HH) {
            this._whiteBalanceEnabled !== HH && (this._whiteBalanceEnabled = HH, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(HH) {
            HH = Number.isNaN(HH) ? EH : Math.max(HH, EH), this._temperature !== HH && (this._temperature = HH, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(HH) {
            HH = (0, tH.Clamp)(HH, -150, XH), this._tint !== HH && (this._tint = HH, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(HH, BH) {
              const LH = WH(GH(HH, BH), PH),
                AH = xH.multiply(LH).multiply(vH);
              return zH.e.GetAsMatrix3x3(AH)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(HH) {
            this.vignetteCenterY = HH
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(HH) {
            this.vignetteCenterX = HH
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(HH) {
            this._vignetteBlendMode !== HH && (this._vignetteBlendMode = HH, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(HH) {
            this._vignetteEnabled !== HH && (this._vignetteEnabled = HH, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(HH) {
            this._ditheringEnabled !== HH && (this._ditheringEnabled = HH, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(HH) {
            this._ditheringIntensity !== HH && (this._ditheringIntensity = HH, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(HH) {
            this._skipFinalColorClamp !== HH && (this._skipFinalColorClamp = HH, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(HH) {
            this._applyByPostProcess !== HH && (this._applyByPostProcess = HH, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(HH) {
            this._isEnabled !== HH && (this._isEnabled = HH, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(BH) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return BH.WHITEBALANCE = !1, BH.VIGNETTE = !1, BH.TONEMAPPING = 0, BH.CONTRAST = !1, BH.EXPOSURE = !1, BH.COLORCURVES = !1, BH.COLORGRADING = !1, BH.COLORGRADING3D = !1, BH.DITHER = !1, BH.IMAGEPROCESSING = !1, BH.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(BH.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (BH.WHITEBALANCE = this._whiteBalanceEnabled, BH.VIGNETTE = this.vignetteEnabled, BH.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === HH._VIGNETTEMODE_MULTIPLY, BH.VIGNETTEBLENDMODEOPAQUE = !BH.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case HH.TONEMAPPING_KHR_PBR_NEUTRAL:
                BH.TONEMAPPING = 3;
                break;
              case HH.TONEMAPPING_ACES:
                BH.TONEMAPPING = 2;
                break;
              default:
                BH.TONEMAPPING = 1
            } else BH.TONEMAPPING = 0;
            BH.CONTRAST = 1 !== this.contrast, BH.EXPOSURE = 1 !== this.exposure, BH.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, BH.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, BH.COLORGRADING ? BH.COLORGRADING3D = this.colorGradingTexture.is3D : BH.COLORGRADING3D = !1, BH.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, BH.SAMPLER3DBGRMAP = this.colorGradingBGR, BH.DITHER = this._ditheringEnabled, BH.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, BH.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, BH.IMAGEPROCESSING = BH.WHITEBALANCE || BH.VIGNETTE || !!BH.TONEMAPPING || BH.CONTRAST || BH.EXPOSURE || BH.COLORCURVES || BH.COLORGRADING || BH.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(HH, BH) {
            if (this._whiteBalanceEnabled && HH.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && OH(this.colorCurves, HH), this._vignetteEnabled || this._ditheringEnabled) {
              const LH = 1 / (this.outputTextureWidth || HH.Iu().getRenderWidth()),
                AH = 1 / (this.outputTextureHeight || HH.Iu().getRenderHeight());
              if (HH.setFloat2("vInverseScreenSize", LH, AH), this._ditheringEnabled && HH.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const rH = null != BH ? BH : AH / LH;
                let SH = Math.tan(.5 * this.vignetteCameraFov),
                  hH = SH * rH;
                const tH = Math.sqrt(hH * SH);
                hH = (0, bH.k)(hH, tH, this.vignetteStretch), SH = (0, bH.k)(SH, tH, this.vignetteStretch), HH.setFloat4("vignetteSettings1", hH, SH, -hH * this.vignetteCenterX, -SH * this.vignetteCenterY);
                const zH = -2 * this.vignetteWeight;
                HH.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, zH)
              }
            }
            if (HH.setFloat("exposureLinear", this.exposure), HH.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              HH.setTexture("txColorTransform", this.colorGradingTexture);
              const BH = this.colorGradingTexture.getSize().height;
              HH.setFloat4("colorTransformSettings", (BH - 1) / BH, .5 / BH, BH, this.colorGradingTexture.level)
            }
          }
          clone() {
            return TH.c.Clone((() => new HH), this)
          }
          serialize() {
            return TH.c.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const SH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          BH = [(0, rH.j)()], LH = [(0, rH.H)()], CH = [(0, rH.A)("colorGradingTexture")], YH = [(0, rH.H)()], uH = [(0, rH.H)()], QH = [(0, rH.H)()], MH = [(0, rH.H)()], UH = [(0, rH.H)()], mH = [(0, rH.H)()], oH = [(0, rH.H)()], IH = [(0, rH.H)()], fH = [(0, rH.H)()], lH = [(0, rH.H)()], KH = [(0, rH.H)()], cH = [(0, rH.H)()], eH = [(0, rH.H)()], qH = [(0, rH.H)()], gH = [(0, rH.n)()], NH = [(0, rH.H)()], RH = [(0, rH.H)()], jH = [(0, rH.H)()], nH = [(0, rH.H)()], FH = [(0, rH.H)()], DH = [(0, rH.H)()], wH = [(0, rH.H)()], ZH = [(0, rH.H)()], dH = [(0, rH.H)()], aH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: HH => "colorCurves" in HH,
              get: HH => HH.colorCurves,
              set: (HH, BH) => {
                HH.colorCurves = BH
              }
            },
            metadata: SH
          }, sH, JH), (0, AH.g)(null, null, LH, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: HH => "_colorCurvesEnabled" in HH,
              get: HH => HH._colorCurvesEnabled,
              set: (HH, BH) => {
                HH._colorCurvesEnabled = BH
              }
            },
            metadata: SH
          }, iH, pH), (0, AH.g)(null, null, CH, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "_colorGradingTexture" in HH,
              get: HH => HH._colorGradingTexture,
              set: (HH, BH) => {
                HH._colorGradingTexture = BH
              }
            },
            metadata: SH
          }, yH, HB), (0, AH.g)(null, null, YH, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: HH => "_colorGradingEnabled" in HH,
              get: HH => HH._colorGradingEnabled,
              set: (HH, BH) => {
                HH._colorGradingEnabled = BH
              }
            },
            metadata: SH
          }, BB, LB), (0, AH.g)(null, null, uH, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: HH => "_colorGradingWithGreenDepth" in HH,
              get: HH => HH._colorGradingWithGreenDepth,
              set: (HH, BH) => {
                HH._colorGradingWithGreenDepth = BH
              }
            },
            metadata: SH
          }, AB, rB), (0, AH.g)(null, null, QH, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: HH => "_colorGradingBGR" in HH,
              get: HH => HH._colorGradingBGR,
              set: (HH, BH) => {
                HH._colorGradingBGR = BH
              }
            },
            metadata: SH
          }, SB, hB), (0, AH.g)(null, null, MH, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: HH => "_exposure" in HH,
              get: HH => HH._exposure,
              set: (HH, BH) => {
                HH._exposure = BH
              }
            },
            metadata: SH
          }, tB, zB), (0, AH.g)(null, null, UH, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: HH => "_toneMappingEnabled" in HH,
              get: HH => HH._toneMappingEnabled,
              set: (HH, BH) => {
                HH._toneMappingEnabled = BH
              }
            },
            metadata: SH
          }, CB, EB), (0, AH.g)(null, null, mH, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: HH => "_toneMappingType" in HH,
              get: HH => HH._toneMappingType,
              set: (HH, BH) => {
                HH._toneMappingType = BH
              }
            },
            metadata: SH
          }, XB, GB), (0, AH.g)(null, null, oH, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: HH => "_contrast" in HH,
              get: HH => HH._contrast,
              set: (HH, BH) => {
                HH._contrast = BH
              }
            },
            metadata: SH
          }, YB, uB), (0, AH.g)(null, null, IH, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: HH => "_whiteBalanceEnabled" in HH,
              get: HH => HH._whiteBalanceEnabled,
              set: (HH, BH) => {
                HH._whiteBalanceEnabled = BH
              }
            },
            metadata: SH
          }, QB, WB), (0, AH.g)(null, null, fH, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: HH => "_temperature" in HH,
              get: HH => HH._temperature,
              set: (HH, BH) => {
                HH._temperature = BH
              }
            },
            metadata: SH
          }, MB, xB), (0, AH.g)(null, null, lH, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: HH => "_tint" in HH,
              get: HH => HH._tint,
              set: (HH, BH) => {
                HH._tint = BH
              }
            },
            metadata: SH
          }, vB, PB), (0, AH.g)(null, null, KH, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: HH => "vignetteStretch" in HH,
              get: HH => HH.vignetteStretch,
              set: (HH, BH) => {
                HH.vignetteStretch = BH
              }
            },
            metadata: SH
          }, TB, UB), (0, AH.g)(null, null, cH, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: HH => "vignetteCenterX" in HH,
              get: HH => HH.vignetteCenterX,
              set: (HH, BH) => {
                HH.vignetteCenterX = BH
              }
            },
            metadata: SH
          }, VB, OB), (0, AH.g)(null, null, eH, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: HH => "vignetteCenterY" in HH,
              get: HH => HH.vignetteCenterY,
              set: (HH, BH) => {
                HH.vignetteCenterY = BH
              }
            },
            metadata: SH
          }, bB, kB), (0, AH.g)(null, null, qH, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: HH => "vignetteWeight" in HH,
              get: HH => HH.vignetteWeight,
              set: (HH, BH) => {
                HH.vignetteWeight = BH
              }
            },
            metadata: SH
          }, mB, oB), (0, AH.g)(null, null, gH, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "vignetteColor" in HH,
              get: HH => HH.vignetteColor,
              set: (HH, BH) => {
                HH.vignetteColor = BH
              }
            },
            metadata: SH
          }, IB, fB), (0, AH.g)(null, null, NH, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: HH => "vignetteCameraFov" in HH,
              get: HH => HH.vignetteCameraFov,
              set: (HH, BH) => {
                HH.vignetteCameraFov = BH
              }
            },
            metadata: SH
          }, lB, KB), (0, AH.g)(null, null, RH, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: HH => "_vignetteBlendMode" in HH,
              get: HH => HH._vignetteBlendMode,
              set: (HH, BH) => {
                HH._vignetteBlendMode = BH
              }
            },
            metadata: SH
          }, cB, eB), (0, AH.g)(null, null, jH, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: HH => "_vignetteEnabled" in HH,
              get: HH => HH._vignetteEnabled,
              set: (HH, BH) => {
                HH._vignetteEnabled = BH
              }
            },
            metadata: SH
          }, qB, gB), (0, AH.g)(null, null, nH, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: HH => "_ditheringEnabled" in HH,
              get: HH => HH._ditheringEnabled,
              set: (HH, BH) => {
                HH._ditheringEnabled = BH
              }
            },
            metadata: SH
          }, NB, RB), (0, AH.g)(null, null, FH, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: HH => "_ditheringIntensity" in HH,
              get: HH => HH._ditheringIntensity,
              set: (HH, BH) => {
                HH._ditheringIntensity = BH
              }
            },
            metadata: SH
          }, jB, nB), (0, AH.g)(null, null, DH, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: HH => "_skipFinalColorClamp" in HH,
              get: HH => HH._skipFinalColorClamp,
              set: (HH, BH) => {
                HH._skipFinalColorClamp = BH
              }
            },
            metadata: SH
          }, FB, DB), (0, AH.g)(null, null, wH, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: HH => "_applyByPostProcess" in HH,
              get: HH => HH._applyByPostProcess,
              set: (HH, BH) => {
                HH._applyByPostProcess = BH
              }
            },
            metadata: SH
          }, wB, ZB), (0, AH.g)(null, null, ZH, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: HH => "_isEnabled" in HH,
              get: HH => HH._isEnabled,
              set: (HH, BH) => {
                HH._isEnabled = BH
              }
            },
            metadata: SH
          }, dB, aB), (0, AH.g)(null, null, dH, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: HH => "outputTextureWidth" in HH,
              get: HH => HH.outputTextureWidth,
              set: (HH, BH) => {
                HH.outputTextureWidth = BH
              }
            },
            metadata: SH
          }, sB, JB), (0, AH.g)(null, null, aH, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: HH => "outputTextureHeight" in HH,
              get: HH => HH.outputTextureHeight,
              set: (HH, BH) => {
                HH.outputTextureHeight = BH
              }
            },
            metadata: SH
          }, iB, pB), SH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SH
          })
        })(), HH.TONEMAPPING_STANDARD = 0, HH.TONEMAPPING_ACES = 1, HH.TONEMAPPING_KHR_PBR_NEUTRAL = 2, HH.PrepareUniforms = kH.h, HH.PrepareSamplers = kH.e, HH._VIGNETTEMODE_MULTIPLY = 0, HH._VIGNETTEMODE_OPAQUE = 1, HH
      })(),
      IH = !1;

    function fH(HH) {
      const BH = TH.c.Parse((() => new oH), HH, null, null);
      return void 0 !== HH.vignetteCentreX && (BH.vignetteCenterX = HH.vignetteCentreX), void 0 !== HH.vignetteCentreY && (BH.vignetteCenterY = HH.vignetteCentreY), BH
    }

    function lH() {
      IH || (IH = !0, oH.Parse = fH, TH.c._ImageProcessingConfigurationParser = fH, (0, mH.f)("BABYLON.ImageProcessingConfiguration", oH))
    }
  },
  41416: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH
    });
    var AH = LH(39595),
      rH = LH(41387);
    class SH {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AH = arguments.length > 3 ? arguments[3] : void 0,
          rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          SH = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = HH, this._noUBO = !HH.supportsUniformBuffers || rH, this._dynamic = LH, this._name = AH ?? "no-name", this._data = BH || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === SH && this._engine._features.trackUbosInFrame || !0 === SH) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.wHH = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.wHH = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(HH) {
        let BH;
        if (BH = HH <= 2 ? HH : 4, this._uniformLocationPointer % BH !== 0) {
          const HH = this._uniformLocationPointer;
          this._uniformLocationPointer += BH - this._uniformLocationPointer % BH;
          const LH = this._uniformLocationPointer - HH;
          for (let BH = 0; BH < LH; BH++) this._data.push(0)
        }
      }
      addUniform(HH, BH) {
        let LH, AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (AH > 0 && "number" === typeof BH && (this._uniformArraySizes[HH] = {
            strideSize: BH,
            arraySize: AH
          }), void 0 === this._uniformLocations[HH] && (this._uniformNames.push(HH), !this._noUBO)) {
          if (AH > 0) {
            if (BH instanceof Array) throw "addUniform should not be use with Array in UBO: " + HH;
            if (this._fillAlignment(4), 16 == BH) BH *= AH;
            else {
              BH = BH * AH + (4 - BH) * AH
            }
            LH = [];
            for (let HH = 0; HH < BH; HH++) LH.push(0)
          } else {
            if (BH instanceof Array) LH = BH, BH = LH.length;
            else {
              LH = [];
              for (let HH = 0; HH < BH; HH++) LH.push(0)
            }
            this._fillAlignment(BH)
          }
          this._uniformSizes[HH] = BH, this._uniformLocations[HH] = this._uniformLocationPointer, this._uniformLocationPointer += BH;
          for (let HH = 0; HH < BH; HH++) this._data.push(LH[HH]);
          this._needSync = !0
        }
      }
      addMatrix(HH, BH) {
        this.addUniform(HH, Array.prototype.slice.call(BH.xrH()))
      }
      addFloat2(HH, BH, LH) {
        const AH = [BH, LH];
        this.addUniform(HH, AH)
      }
      addFloat3(HH, BH, LH, AH) {
        const rH = [BH, LH, AH];
        this.addUniform(HH, rH)
      }
      addColor3(HH, BH) {
        const LH = [BH.r, BH.g, BH.b];
        this.addUniform(HH, LH)
      }
      addColor4(HH, BH, LH) {
        const AH = [BH.r, BH.g, BH.b, LH];
        this.addUniform(HH, AH)
      }
      addVector3(HH, BH) {
        const LH = [BH.x, BH.y, BH.z];
        this.addUniform(HH, LH)
      }
      addMatrix3x3(HH) {
        this.addUniform(HH, 12)
      }
      addMatrix2x2(HH) {
        this.addUniform(HH, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const HH = [];
        let BH = 0;
        for (const LH in this._uniformLocations)
          if (HH.push(LH), 10 === ++BH) break;
        return HH.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const HH of this._ownerListsBySlot.values()) this._removeOwnerBacklink(HH);
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
      set name(HH) {
        this._name = HH
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(HH, BH) {
        for (let LH = 0; LH < HH.length; ++LH)
          if (HH[LH] !== BH[LH]) return !1;
        return !0
      }
      _copyBuffer(HH, BH) {
        for (let LH = 0; LH < HH.length; ++LH) BH[LH] = HH[LH]
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
      _updateOwnerKeyed(HH) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let BH = this._slotByOwner.get(HH);
        if (void 0 === BH && (BH = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(HH, BH), this._ownerCount++, HH._uniformBuffersWithOwnedSlot || (HH._uniformBuffersWithOwnedSlot = []), HH._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(BH, HH._uniformBuffersWithOwnedSlot)), this._slotGeneration[BH] === this._dataGeneration) return this._bufferIndex = BH, this._buffer = this._buffers[BH][0], this.bindUniformBuffer(), this._slotFrameId[BH] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const LH = this._buffers[BH][1];
        this._slotFrameId[BH] === this._currentFrameId && LH && !this._buffersEqual(this._bufferData, LH) && (BH = this._takeFreeSlot(!1)), this._bufferIndex = BH, this._buffer = this._buffers[BH][0], this.bindUniformBuffer();
        const AH = this._buffers[BH][1];
        AH && this._buffersEqual(this._bufferData, AH) || (AH && this._copyBuffer(this._bufferData, AH), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[BH] = this._currentFrameId, this._slotGeneration[BH] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(HH) {
        for (let LH = 0; LH < this._freeSlots.length; ++LH) {
          const BH = this._freeSlots[LH];
          if (this._slotFrameId[BH] !== this._currentFrameId) return HH && (this._freeSlots[LH] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), BH
        }
        this._rebuild();
        const BH = this._buffers.length - 1;
        return HH || this._freeSlots.push(BH), BH
      }
      _releaseOwnerSlot(HH) {
        const BH = this._slotByOwner?.get(HH);
        if (void 0 === BH) return;
        this._slotByOwner.delete(HH);
        const LH = this._ownerListsBySlot.get(BH);
        LH && (this._removeOwnerBacklink(LH), this._ownerListsBySlot.delete(BH)), this._ownerCount--, this._freeSlots.push(BH)
      }
      _removeOwnerBacklink(HH) {
        const BH = HH.indexOf(this); - 1 !== BH && (HH[BH] = HH[HH.length - 1], HH.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(HH, BH, LH) {
        this._checkNewFrame();
        let rH = this._uniformLocations[HH];
        if (void 0 === rH) {
          if (this._buffer) return void AH.e.Error("Cannot add an uniform after UBO has been created. uniformName=" + HH);
          this.addUniform(HH, LH), rH = this._uniformLocations[HH]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let HH = 0; HH < LH; HH++) this._bufferData[rH + HH] = BH[HH];
          this._dataGeneration++
        } else {
          let HH = !1;
          for (let AH = 0; AH < LH; AH++)(16 === LH && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[rH + AH] !== Math.fround(BH[AH])) && (HH = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[rH + AH] = BH[AH]);
          this._needSync = this._needSync || HH, HH && this._dataGeneration++
        }
      }
      updateUniformArray(HH, BH, LH) {
        this._checkNewFrame();
        const SH = this._uniformLocations[HH];
        if (void 0 === SH) return void AH.e.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const hH = this._uniformArraySizes[HH];
        if (this._dynamic) {
          for (let HH = 0; HH < LH; HH++) this._bufferData[SH + HH] = BH[HH];
          this._dataGeneration++
        } else {
          let HH = !1,
            AH = 0,
            tH = 0;
          for (let zH = 0; zH < LH; zH++)
            if (this._bufferData[SH + 4 * tH + AH] !== rH.i.FloatRound(BH[zH]) && (HH = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[SH + 4 * tH + AH] = BH[zH]), AH++, AH === hH.strideSize) {
              for (; AH < 4; AH++) this._bufferData[SH + 4 * tH + AH] = 0;
              AH = 0, tH++
            } this._needSync = this._needSync || HH, HH && this._dataGeneration++
        }
      }
      _cacheMatrix(HH, BH) {
        this._checkNewFrame();
        const LH = this._valueCache[HH],
          AH = BH.updateFlag;
        return (void 0 === LH || LH !== AH) && (this._valueCache[HH] = AH, !0)
      }
      _updateMatrix3x3ForUniform(HH, BH) {
        for (let LH = 0; LH < 3; LH++) SH._TempBuffer[4 * LH] = BH[3 * LH], SH._TempBuffer[4 * LH + 1] = BH[3 * LH + 1], SH._TempBuffer[4 * LH + 2] = BH[3 * LH + 2], SH._TempBuffer[4 * LH + 3] = 0;
        this.updateUniform(HH, SH._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(HH, BH) {
        this._currentEffect.setMatrix3x3(HH, BH)
      }
      _updateMatrix2x2ForEffect(HH, BH) {
        this._currentEffect.setMatrix2x2(HH, BH)
      }
      _updateMatrix2x2ForUniform(HH, BH) {
        for (let LH = 0; LH < 2; LH++) SH._TempBuffer[4 * LH] = BH[2 * LH], SH._TempBuffer[4 * LH + 1] = BH[2 * LH + 1], SH._TempBuffer[4 * LH + 2] = 0, SH._TempBuffer[4 * LH + 3] = 0;
        this.updateUniform(HH, SH._TempBuffer, 8)
      }
      _updateFloatForEffect(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(HH + LH, BH)
      }
      _updateFloatForUniform(HH, BH) {
        SH._TempBuffer[0] = BH, this.updateUniform(HH, SH._TempBuffer, 1)
      }
      _updateFloat2ForEffect(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(HH + AH, BH, LH)
      }
      _updateFloat2ForUniform(HH, BH, LH) {
        SH._TempBuffer[0] = BH, SH._TempBuffer[1] = LH, this.updateUniform(HH, SH._TempBuffer, 2)
      }
      _updateFloat3ForEffect(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(HH + rH, BH, LH, AH)
      }
      _updateFloat3ForUniform(HH, BH, LH, AH) {
        SH._TempBuffer[0] = BH, SH._TempBuffer[1] = LH, SH._TempBuffer[2] = AH, this.updateUniform(HH, SH._TempBuffer, 3)
      }
      _updateFloat4ForEffect(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(HH + SH, BH, LH, AH, rH)
      }
      _updateFloat4ForUniform(HH, BH, LH, AH, rH) {
        SH._TempBuffer[0] = BH, SH._TempBuffer[1] = LH, SH._TempBuffer[2] = AH, SH._TempBuffer[3] = rH, this.updateUniform(HH, SH._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[HH]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(HH + LH, BH);
            break;
          case 3:
            this._currentEffect.setFloatArray3(HH + LH, BH);
            break;
          case 4:
            this._currentEffect.setFloatArray4(HH + LH, BH);
            break;
          default:
            this._currentEffect.setFloatArray(HH + LH, BH)
        }
      }
      _updateFloatArrayForUniform(HH, BH) {
        this.updateUniformArray(HH, BH, BH.length)
      }
      _updateArrayForEffect(HH, BH) {
        this._currentEffect.setArray(HH, BH)
      }
      _updateArrayForUniform(HH, BH) {
        this.updateUniformArray(HH, BH, BH.length)
      }
      _updateIntArrayForEffect(HH, BH) {
        this._currentEffect.setIntArray(HH, BH)
      }
      _updateIntArrayForUniform(HH, BH) {
        SH._TempBufferInt32View.set(BH), this.updateUniformArray(HH, SH._TempBuffer, BH.length)
      }
      _updateUIntArrayForEffect(HH, BH) {
        this._currentEffect.setUIntArray(HH, BH)
      }
      _updateUIntArrayForUniform(HH, BH) {
        SH._TempBufferUInt32View.set(BH), this.updateUniformArray(HH, SH._TempBuffer, BH.length)
      }
      _updateMatrixForEffect(HH, BH) {
        this._currentEffect.setMatrix(HH, BH)
      }
      _updateMatrixForUniform(HH, BH) {
        this._cacheMatrix(HH, BH) && this.updateUniform(HH, BH.xrH(), 16)
      }
      _updateMatricesForEffect(HH, BH) {
        this._currentEffect.setMatrices(HH, BH)
      }
      _updateMatricesForUniform(HH, BH) {
        this.updateUniform(HH, BH, BH.length)
      }
      _updateVector3ForEffect(HH, BH) {
        this._currentEffect.setVector3(HH, BH)
      }
      _updateVector3ForUniform(HH, BH) {
        SH._TempBuffer[0] = BH.x, SH._TempBuffer[1] = BH.y, SH._TempBuffer[2] = BH.z, this.updateUniform(HH, SH._TempBuffer, 3)
      }
      _updateVector4ForEffect(HH, BH) {
        this._currentEffect.setVector4(HH, BH)
      }
      _updateVector4ForUniform(HH, BH) {
        SH._TempBuffer[0] = BH.x, SH._TempBuffer[1] = BH.y, SH._TempBuffer[2] = BH.z, SH._TempBuffer[3] = BH.w, this.updateUniform(HH, SH._TempBuffer, 4)
      }
      _updateColor3ForEffect(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(HH + LH, BH)
      }
      _updateColor3ForUniform(HH, BH) {
        SH._TempBuffer[0] = BH.r, SH._TempBuffer[1] = BH.g, SH._TempBuffer[2] = BH.b, this.updateUniform(HH, SH._TempBuffer, 3)
      }
      _updateColor4ForEffect(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(HH + AH, BH, LH)
      }
      _updateDirectColor4ForEffect(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(HH + LH, BH)
      }
      _updateColor4ForUniform(HH, BH, LH) {
        SH._TempBuffer[0] = BH.r, SH._TempBuffer[1] = BH.g, SH._TempBuffer[2] = BH.b, SH._TempBuffer[3] = LH, this.updateUniform(HH, SH._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(HH, BH) {
        SH._TempBuffer[0] = BH.r, SH._TempBuffer[1] = BH.g, SH._TempBuffer[2] = BH.b, SH._TempBuffer[3] = BH.a, this.updateUniform(HH, SH._TempBuffer, 4)
      }
      _updateIntForEffect(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(HH + LH, BH)
      }
      _updateIntForUniform(HH, BH) {
        SH._TempBufferInt32View[0] = BH, this.updateUniform(HH, SH._TempBuffer, 1)
      }
      _updateInt2ForEffect(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(HH + AH, BH, LH)
      }
      _updateInt2ForUniform(HH, BH, LH) {
        SH._TempBufferInt32View[0] = BH, SH._TempBufferInt32View[1] = LH, this.updateUniform(HH, SH._TempBuffer, 2)
      }
      _updateInt3ForEffect(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(HH + rH, BH, LH, AH)
      }
      _updateInt3ForUniform(HH, BH, LH, AH) {
        SH._TempBufferInt32View[0] = BH, SH._TempBufferInt32View[1] = LH, SH._TempBufferInt32View[2] = AH, this.updateUniform(HH, SH._TempBuffer, 3)
      }
      _updateInt4ForEffect(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(HH + SH, BH, LH, AH, rH)
      }
      _updateInt4ForUniform(HH, BH, LH, AH, rH) {
        SH._TempBufferInt32View[0] = BH, SH._TempBufferInt32View[1] = LH, SH._TempBufferInt32View[2] = AH, SH._TempBufferInt32View[3] = rH, this.updateUniform(HH, SH._TempBuffer, 4)
      }
      _updateUIntForEffect(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(HH + LH, BH)
      }
      _updateUIntForUniform(HH, BH) {
        SH._TempBufferUInt32View[0] = BH, this.updateUniform(HH, SH._TempBuffer, 1)
      }
      _updateUInt2ForEffect(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(HH + AH, BH, LH)
      }
      _updateUInt2ForUniform(HH, BH, LH) {
        SH._TempBufferUInt32View[0] = BH, SH._TempBufferUInt32View[1] = LH, this.updateUniform(HH, SH._TempBuffer, 2)
      }
      _updateUInt3ForEffect(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(HH + rH, BH, LH, AH)
      }
      _updateUInt3ForUniform(HH, BH, LH, AH) {
        SH._TempBufferUInt32View[0] = BH, SH._TempBufferUInt32View[1] = LH, SH._TempBufferUInt32View[2] = AH, this.updateUniform(HH, SH._TempBuffer, 3)
      }
      _updateUInt4ForEffect(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(HH + SH, BH, LH, AH, rH)
      }
      _updateUInt4ForUniform(HH, BH, LH, AH, rH) {
        SH._TempBufferUInt32View[0] = BH, SH._TempBufferUInt32View[1] = LH, SH._TempBufferUInt32View[2] = AH, SH._TempBufferUInt32View[3] = rH, this.updateUniform(HH, SH._TempBuffer, 4)
      }
      setTexture(HH, BH) {
        this._currentEffect.setTexture(HH, BH)
      }
      setTextureArray(HH, BH) {
        this._currentEffect.setTextureArray(HH, BH)
      }
      bindTexture(HH, BH) {
        this._currentEffect._bindTexture(HH, BH)
      }
      updateUniformDirectly(HH, BH) {
        this.updateUniform(HH, BH, BH.length), this.update()
      }
      bindToEffect(HH, BH) {
        this._currentEffect = HH, this._currentEffectName = BH
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(HH) {
        if (!this._buffers) return this._buffer === HH;
        for (let BH = 0; BH < this._buffers.length; ++BH) {
          if (this._buffers[BH][0] === HH) return this._bufferIndex = BH, this._buffer = HH, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[BH][1] && (this._bufferData.set(this._buffers[BH][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(HH) {
        return void 0 !== this._uniformLocations[HH]
      }
      dispose() {
        if (this._noUBO) return;
        const HH = this._engine._uniformBuffers,
          BH = HH.indexOf(this);
        if (-1 !== BH && (HH[BH] = HH[HH.length - 1], HH.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let HH = 0; HH < this._buffers.length; ++HH) {
            const BH = this._buffers[HH][0];
            this._engine._releaseBuffer(BH)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    SH._MAX_UNIFORM_SIZE = 256, SH._TempBuffer = new Float32Array(SH._MAX_UNIFORM_SIZE), SH._TempBufferInt32View = new Int32Array(SH._TempBuffer.buffer), SH._TempBufferUInt32View = new Uint32Array(SH._TempBuffer.buffer)
  },
  41210: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rH
    });
    var AH = LH(41218);
    class rH extends AH.e {
      constructor(HH) {
        super(), this._buffer = HH
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  41304: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => zH,
      h: () => CH
    });
    const AH = "__bjs_serializable__",
      rH = new WeakMap;

    function SH(HH, BH) {
      return Object.prototype.hasOwnProperty.call(HH, BH)
    }
    const hH = function() {
      let HH = Symbol.metadata;
      return HH || (HH = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: HH
      })), HH
    }();

    function tH(HH) {
      return "function" === typeof HH ? HH : HH?.constructor
    }

    function zH(HH) {
      if (!HH) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(hH)}) polyfill must run before decorated classes are evaluated.`);
      return SH(HH, AH) || (HH[AH] = {}), HH[AH]
    }

    function CH(HH) {
      const BH = tH(HH),
        LH = BH ? BH[hH] : void 0;
      if (!LH) return {};
      const zH = rH.get(LH);
      if (zH) return zH;
      const CH = {},
        EH = [];
      let XH = LH;
      for (; XH;) EH.push(XH), XH = Object.getPrototypeOf(XH);
      for (const rH of EH)
        if (SH(rH, AH)) {
          const HH = rH[AH];
          for (const BH in HH) CH[BH] = HH[BH]
        } return rH.set(LH, CH), CH
    }
  },
  41297: (HH, BH, LH) => {
    LH.d(BH, {
      A: () => tH,
      C: () => EH,
      F: () => XH,
      H: () => hH,
      c: () => vH,
      e: () => SH,
      g: () => xH,
      j: () => YH,
      l: () => zH,
      n: () => uH,
      r: () => CH,
      t: () => WH,
      v: () => GH,
      y: () => QH
    });
    var AH = LH(41304);

    function rH(HH, BH) {
      return (LH, rH) => {
        if (!rH.metadata) return;
        const SH = String(rH.name),
          hH = (0, AH.e)(rH.metadata);
        hH[SH] || (hH[SH] = {
          type: HH,
          sourceName: BH
        })
      }
    }

    function SH(HH) {
      return function(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (LH, AH) => {
          const rH = BH || "_" + String(AH.name);
          return {
            init(HH) {
              return void 0 === HH && rH in this || (this[rH] = HH), HH
            },
            get() {
              return this[rH]
            },
            set(BH) {
              "function" === typeof this[rH]?.equals && this[rH].equals(BH) || this[rH] !== BH && (this[rH] = BH, this[HH]())
            }
          }
        }
      }(HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function hH(HH) {
      return rH(0, HH)
    }

    function tH(HH) {
      return rH(1, HH)
    }

    function zH(HH) {
      return rH(2, HH)
    }

    function CH(HH) {
      return rH(3, HH)
    }

    function EH(HH) {
      return rH(4, HH)
    }

    function XH(HH) {
      return rH(5, HH)
    }

    function GH(HH) {
      return rH(6, HH)
    }

    function YH(HH) {
      return rH(7, HH)
    }

    function uH(HH) {
      return rH(8, HH)
    }

    function QH(HH) {
      return rH(10, HH)
    }

    function WH(HH) {
      return rH(12, HH)
    }

    function MH(HH, BH, LH) {
      const AH = String(BH.name);
      let rH = null;
      const SH = function() {
        if (null === rH) {
          rH = HH, "undefined" !== typeof _native && _native[AH] && (rH = LH(_native[AH], HH));
          const hH = this && (BH.static ? this : Object.getPrototypeOf(this));
          hH?.[AH] === SH && (hH[AH] = rH)
        }
        for (var hH = arguments.length, tH = new Array(hH), zH = 0; zH < hH; zH++) tH[zH] = arguments[zH];
        return rH.apply(this, tH)
      };
      return SH
    }

    function xH(HH, BH) {
      return MH(HH, BH, (HH => HH))
    }

    function vH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (LH, AH) => {
        const rH = BH || "_" + String(AH.name);
        return {
          get() {
            return this[rH]?.value
          },
          set(BH) {
            "function" === typeof this[rH]?.value?.equals && this[rH].value.equals(BH) || this[rH].value !== BH && (this[rH].value = BH, this[HH]())
          }
        }
      }
    }
    xH.filter = function(HH) {
      return (BH, LH) => MH(BH, LH, ((BH, LH) => function() {
        for (var AH = arguments.length, rH = new Array(AH), SH = 0; SH < AH; SH++) rH[SH] = arguments[SH];
        return HH(...rH) ? BH(...rH) : LH.apply(this, rH)
      }))
    }
  },
  41319: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => CH
    });
    var AH = LH(41169),
      rH = LH(41326),
      SH = LH(38074),
      hH = LH(37963),
      tH = LH(41304);
    const zH = function(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const SH = HH();
      rH.b && rH.b.HasTags(BH) && rH.b.AddTagsTo(SH, rH.b.GetTags(BH, !0));
      const hH = (0, tH.h)(SH),
        zH = {};
      for (const rH in hH) {
        const HH = hH[rH],
          tH = BH[rH],
          EH = HH.type;
        if (void 0 !== tH && null !== tH && ("uniqueId" !== rH || CH.AllowLoadingUniqueId)) switch (EH) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof tH.slice ? SH[rH] = tH.slice() : SH[rH] = tH;
            break;
          case 1:
            AH.cloneTexturesOnlyOnce && zH[tH.uniqueId] ? SH[rH] = zH[tH.uniqueId] : (SH[rH] = LH || tH.isRenderTarget ? tH : tH.clone(), zH[tH.uniqueId] = SH[rH]);
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
            SH[rH] = LH ? tH : tH.clone()
        }
      }
      return SH
    };
    class CH {
      static AppendSerializedAnimations(HH, BH) {
        if (HH.animations) {
          BH.animations = [];
          for (let LH = 0; LH < HH.animations.length; LH++) {
            const AH = HH.animations[LH];
            BH.animations.push(AH.serialize())
          }
        }
      }
      static Serialize(HH, BH) {
        BH || (BH = {}), rH.b && (BH.tags = rH.b.GetTags(HH));
        const LH = (0, tH.h)(HH);
        for (const AH in LH) {
          const rH = LH[AH],
            SH = rH.sourceName || AH,
            hH = rH.type,
            tH = HH[AH];
          if (void 0 !== tH && null !== tH && ("uniqueId" !== AH || CH.AllowLoadingUniqueId)) switch (hH) {
            case 0:
              Array.isArray(tH) ? BH[SH] = tH.slice() : BH[SH] = tH;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              BH[SH] = tH.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              BH[SH] = tH.xrH();
              break;
            case 6:
            case 11:
              BH[SH] = tH.id
          }
        }
        return BH
      }
      static ParseProperties(HH, BH, LH, AH) {
        AH || (AH = "");
        const rH = (0, tH.h)(BH);
        for (const tH in rH) {
          const zH = rH[tH],
            EH = HH[zH.sourceName || tH],
            XH = zH.type;
          if (void 0 !== EH && null !== EH && ("uniqueId" !== tH || CH.AllowLoadingUniqueId)) {
            const HH = BH;
            switch (XH) {
              case 0:
                HH[tH] = EH;
                break;
              case 1:
                LH && (HH[tH] = CH._TextureParser(EH, LH, AH));
                break;
              case 2:
                HH[tH] = SH.c.FromArray(EH);
                break;
              case 3:
                HH[tH] = CH._FresnelParametersParser(EH);
                break;
              case 4:
                HH[tH] = hH.n.FromArray(EH);
                break;
              case 5:
                HH[tH] = hH.o.FromArray(EH);
                break;
              case 6:
                LH && (HH[tH] = LH.getLastMeshById(EH));
                break;
              case 7:
                HH[tH] = CH._ColorCurvesParser(EH);
                break;
              case 8:
                HH[tH] = SH.g.FromArray(EH);
                break;
              case 9:
                HH[tH] = CH._ImageProcessingConfigurationParser(EH);
                break;
              case 10:
                HH[tH] = hH.f.FromArray(EH);
                break;
              case 11:
                LH && (HH[tH] = LH.getCameraById(EH));
                break;
              case 12:
                HH[tH] = hH.e.FromArray(EH);
                break;
              case 13:
                HH[tH] = hH.q.FromArray(EH)
            }
          }
        }
      }
      static Parse(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const SH = HH();
        return rH.b && rH.b.AddTagsTo(SH, BH.tags), CH.ParseProperties(BH, SH, LH, AH), SH
      }
      static Clone(HH, BH) {
        return zH(HH, BH, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(HH, BH) {
        return zH(HH, BH, !0)
      }
    }
    CH.AllowLoadingUniqueId = !1, CH._ImageProcessingConfigurationParser = HH => {
      throw (0, AH.i)("ImageProcessingConfiguration")
    }, CH._FresnelParametersParser = HH => {
      throw (0, AH.i)("FresnelParameters")
    }, CH._ColorCurvesParser = HH => {
      throw (0, AH.i)("ColorCurves")
    }, CH._TextureParser = (HH, BH, LH) => {
      throw (0, AH.i)("Texture")
    }
  },
  41231: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH
    });
    var AH = LH(41190);
    class rH {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = rH.Enabled, this._lastSecValueCount++
      }
      addCount(HH, BH) {
        rH.Enabled && (this._current += HH, this._hasCurrentValue = !0, BH && this._fetchResult())
      }
      beginMonitoring() {
        rH.Enabled && (this._startMonitoringTime = AH.e.Now)
      }
      endMonitoring() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!rH.Enabled) return;
        HH && this.fetchNewFrame();
        const BH = AH.e.Now;
        this._current = BH - this._startMonitoringTime, this._hasCurrentValue = !0, HH && this._fetchResult()
      }
      OX() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const HH = AH.e.Now;
        HH - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = HH, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    rH.Enabled = !0
  },
  41398: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH,
      i: () => AH
    });
    class AH {
      constructor(HH) {
        this.length = 0, this.data = new Array(HH), this._id = AH._GlobalId++
      }
      push(HH) {
        this.data[this.length++] = HH, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(HH) {
        for (let BH = 0; BH < this.length; BH++) HH(this.data[BH])
      }
      sort(HH) {
        this.data.sort(HH)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(HH) {
        if (0 !== HH.length) {
          this.length + HH.length > this.data.length && (this.data.length = 2 * (this.length + HH.length));
          for (let BH = 0; BH < HH.length; BH++) this.data[this.length++] = (HH.data || HH)[BH]
        }
      }
      indexOf(HH) {
        const BH = this.data.indexOf(HH);
        return BH >= this.length ? -1 : BH
      }
      contains(HH) {
        return -1 !== this.indexOf(HH)
      }
    }
    AH._GlobalId = 0;
    class rH extends AH {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(HH) {
        super.push(HH), HH.__smartArrayFlags || (HH.__smartArrayFlags = {}), HH.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(HH) {
        return (!HH.__smartArrayFlags || HH.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(HH), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(HH) {
        if (0 !== HH.length) {
          this.length + HH.length > this.data.length && (this.data.length = 2 * (this.length + HH.length));
          for (let BH = 0; BH < HH.length; BH++) {
            const LH = (HH.data || HH)[BH];
            this.pushNoDuplicate(LH)
          }
        }
      }
    }
  },
  41326: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rH
    });
    class AH {
      static Eval(HH, BH) {
        return "true" === (HH = HH.match(/\([^()]*\)/g) ? HH.replace(/\([^()]*\)/g, (HH => (HH = HH.slice(1, HH.length - 1), AH._HandleParenthesisContent(HH, BH)))) : AH._HandleParenthesisContent(HH, BH)) || "false" !== HH && AH.Eval(HH, BH)
      }
      static _HandleParenthesisContent(HH, BH) {
        let LH;
        BH = BH || (HH => "true" === HH);
        const rH = HH.split("||");
        for (const SH in rH)
          if (Object.prototype.hasOwnProperty.call(rH, SH)) {
            let HH = AH._SimplifyNegation(rH[SH].trim());
            const hH = HH.split("&&");
            if (hH.length > 1)
              for (let rH = 0; rH < hH.length; ++rH) {
                const SH = AH._SimplifyNegation(hH[rH].trim());
                if (LH = "true" !== SH && "false" !== SH ? "!" === SH[0] ? !BH(SH.substring(1)) : BH(SH) : "true" === SH, !LH) {
                  HH = "false";
                  break
                }
              }
            if (LH || "true" === HH) {
              LH = !0;
              break
            }
            LH = "true" !== HH && "false" !== HH ? "!" === HH[0] ? !BH(HH.substring(1)) : BH(HH) : "true" === HH
          } return LH ? "true" : "false"
      }
      static _SimplifyNegation(HH) {
        return "!true" === (HH = (HH = HH.replace(/^[\s!]+/, (HH => (HH = HH.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? HH = "false" : "!false" === HH && (HH = "true"), HH
      }
    }
    class rH {
      static EnableFor(HH) {
        HH._tags = HH._tags || {}, HH.hasTags = () => rH.HasTags(HH), HH.addTags = BH => rH.AddTagsTo(HH, BH), HH.removeTags = BH => rH.RemoveTagsFrom(HH, BH), HH.matchesTagsQuery = BH => rH.MatchesQuery(HH, BH)
      }
      static DisableFor(HH) {
        delete HH._tags, delete HH.hasTags, delete HH.addTags, delete HH.removeTags, delete HH.matchesTagsQuery
      }
      static HasTags(HH) {
        if (!HH._tags) return !1;
        const BH = HH._tags;
        for (const LH in BH)
          if (Object.prototype.hasOwnProperty.call(BH, LH)) return !0;
        return !1
      }
      static GetTags(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!HH._tags) return null;
        if (BH) {
          const BH = [];
          for (const LH in HH._tags) Object.prototype.hasOwnProperty.call(HH._tags, LH) && !0 === HH._tags[LH] && BH.push(LH);
          return BH.join(" ")
        }
        return HH._tags
      }
      static AddTagsTo(HH, BH) {
        if (!BH) return;
        if ("string" !== typeof BH) return;
        const LH = BH.split(" ");
        for (const AH of LH) rH._AddTagTo(HH, AH)
      }
      static _AddTagTo(HH, BH) {
        "" !== (BH = BH.trim()) && "true" !== BH && "false" !== BH && (BH.match(/[\s]/) || BH.match(/^([!]|([|]|[&]){2})/) || (rH.EnableFor(HH), HH._tags[BH] = !0))
      }
      static RemoveTagsFrom(HH, BH) {
        if (!rH.HasTags(HH)) return;
        const LH = BH.split(" ");
        for (const AH in LH) rH._RemoveTagFrom(HH, LH[AH])
      }
      static _RemoveTagFrom(HH, BH) {
        delete HH._tags[BH]
      }
      static MatchesQuery(HH, BH) {
        return void 0 === BH || ("" === BH ? rH.HasTags(HH) : AH.Eval(BH, (BH => rH.HasTags(HH) && HH._tags[BH])))
      }
    }
  },
  41433: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH
    });
    var AH = LH(41427),
      rH = LH(37997);
    class SH {
      constructor(HH) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new rH.d, this._scene = HH
      }
      _prepareBuffers() {
        if (this._vertexBuffers[AH.i.PositionKind]) return;
        const HH = [];
        HH.push(1, 1), HH.push(-1, 1), HH.push(-1, -1), HH.push(1, -1), this._vertexBuffers[AH.i.PositionKind] = new AH.i(this._scene.Iu(), HH, AH.i.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const HH = [];
        HH.push(0), HH.push(1), HH.push(2), HH.push(0), HH.push(2), HH.push(3), this._indexBuffer = this._scene.Iu().createIndexBuffer(HH)
      }
      _getActivePostProcesses(HH) {
        const BH = this._activePostProcesses;
        BH.length = 0;
        for (let LH = 0; LH < HH.length; LH++) {
          const AH = HH[LH];
          AH && BH.push(AH)
        }
        return BH
      }
      _rebuild() {
        const HH = this._vertexBuffers[AH.i.PositionKind];
        HH && (HH._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const LH = this._scene.activeCamera;
        return !!LH && (BH = BH || this._getActivePostProcesses(LH._postProcesses), !(!BH || 0 === BH.length || !this._scene.postProcessesEnabled) && (BH[0].activate(LH, HH, null !== BH && void 0 !== BH), !0))
      }
      directRender(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          hH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : HH.length;
        const tH = this._scene.Iu();
        for (let zH = 0; zH < hH; zH++) {
          zH < HH.length - 1 ? HH[zH + 1].activate(this._scene.activeCamera || this._scene, BH?.texture) : (BH ? tH.bindFramebuffer(BH, AH, void 0, void 0, LH, rH) : SH || tH.restoreDefaultFramebuffer(), tH._debugInsertMarker?.(`post process ${HH[zH].name} output`));
          const hH = HH[zH],
            CH = hH.apply();
          CH && (hH.onBeforeRenderObservable.notifyObservers(CH), this._prepareBuffers(), tH.bindBuffers(this._vertexBuffers, this._indexBuffer, CH), tH.drawElementsType(0, 0, 6), hH.onAfterRenderObservable.notifyObservers(CH))
        }
        tH.setDepthBuffer(!0), tH.setDepthWrite(!0)
      }
      _finalizeFrame(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const SH = this._scene.activeCamera;
        if (!SH) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (AH = AH || this._getActivePostProcesses(SH._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const hH = this._scene.Iu();
        for (let tH = 0, zH = AH.length; tH < zH; tH++) {
          const CH = AH[tH];
          if (tH < zH - 1 ? CH._outputTexture = AH[tH + 1].activate(SH, BH?.texture) : (BH ? (hH.bindFramebuffer(BH, LH, void 0, void 0, rH), CH._outputTexture = BH) : (hH.restoreDefaultFramebuffer(), CH._outputTexture = null), hH._debugInsertMarker?.(`post process ${AH[tH].name} output`)), HH) break;
          const EH = CH.apply();
          EH && (CH.onBeforeRenderObservable.notifyObservers(EH), this._prepareBuffers(), hH.bindBuffers(this._vertexBuffers, this._indexBuffer, EH), hH.drawElementsType(0, 0, 6), CH.onAfterRenderObservable.notifyObservers(EH))
        }
        hH.setDepthBuffer(!0), hH.setDepthWrite(!0), hH.setAlphaMode(0)
      }
      dispose() {
        const HH = this._vertexBuffers[AH.i.PositionKind];
        HH && (HH.dispose(), this._vertexBuffers[AH.i.PositionKind] = null), this._indexBuffer && (this._scene.Iu()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  41454: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => CH
    });
    var AH = LH(41398),
      rH = LH(37963);
    const SH = [],
      hH = [];
    let tH = !1;

    function zH(HH, BH) {
      for (; HH.length < BH;) HH.push(void 0)
    }
    class CH {
      set opaqueSortCompareFn(HH) {
        this._opaqueSortCompareFn = HH || CH.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(HH) {
        this._alphaTestSortCompareFn = HH || CH.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(HH) {
        this._transparentSortCompareFn = HH || CH.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = HH, this._opaqueSubMeshes = new AH.i(256), this._transparentSubMeshes = new AH.i(256), this._alphaTestSubMeshes = new AH.i(256), this._depthOnlySubMeshes = new AH.i(256), this._particleSystems = new AH.i(256), this._spriteManagers = new AH.i(256), this._empty = !0, this._edgesRenderers = new AH.e(16), this.disableDepthPrePass = !1, this._scene = BH, this.opaqueSortCompareFn = LH, this.alphaTestSortCompareFn = rH, this.transparentSortCompareFn = SH
      }
      render(HH, BH, LH, AH) {
        let rH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          SH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          hH = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          tH = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          zH = arguments.length > 8 ? arguments[8] : void 0;
        if (HH) return void HH(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const CH = this._scene.Iu();
        rH && 0 !== this._depthOnlySubMeshes.length && (CH.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), CH.setColorWrite(!0)), SH && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), hH && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const EH = CH.getStencilBuffer();
        if (CH.setStencilBuffer(!1), BH && this._renderSprites(), LH && this._renderParticles(AH), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), tH && (zH || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (CH.setStencilBuffer(EH), zH) zH(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const HH = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            HH.length && this._renderTransparent(HH)
          } else this._renderTransparent(this._transparentSubMeshes);
          CH.setAlphaMode(0)
        }
        if (CH.setStencilBuffer(!1), SH && this._edgesRenderers.length) {
          for (let HH = 0; HH < this._edgesRenderers.length; HH++) this._edgesRenderers.data[HH].render();
          CH.setAlphaMode(0)
        }
        CH.setStencilBuffer(EH)
      }
      _renderOpaqueSorted(HH) {
        CH._RenderSorted(HH, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(HH) {
        CH._RenderSorted(HH, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(HH) {
        CH._RenderSorted(HH, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(HH, BH, LH, AH, SH) {
        let EH, XH = 0;
        const GH = LH ? LH.globalPosition : CH._ZeroVector;
        if (AH && BH !== CH.PainterSortCompare)
          for (; XH < HH.length; XH++) EH = HH.data[XH], EH._alphaIndex = EH.getMesh().alphaIndex, EH._distanceToCamera = rH.o.Distance(EH.jF().nrH.centerWorld, GH);
        const YH = HH.length;
        let uH = HH.data;
        const QH = YH !== uH.length && !tH;
        if (QH) {
          for (tH = !0, zH(hH, YH), XH = 0; XH < YH; XH++) hH[XH] = uH[XH];
          uH = hH
        } else YH !== uH.length && (uH = uH.slice(0, YH));
        try {
          BH && CH._StableSort(uH, YH, BH), CH._DrawSorted(uH, YH, AH, SH)
        } finally {
          QH && (hH.fill(void 0, 0, YH), tH = !1)
        }
      }
      static _DrawSorted(HH, BH, LH, AH) {
        let rH;
        const SH = HH[0].getMesh().yN();
        for (let hH = 0; hH < BH; hH++) {
          if (rH = HH[hH], SH._activeMeshesFrozenButKeepClipping && !rH.isInFrustum(SH._frustumPlanes)) continue;
          let BH = !1;
          if (LH) {
            const HH = rH.eu();
            if (HH && HH.needDepthPrePass && !AH) {
              BH = !0;
              const LH = HH.yN().Iu();
              LH.setColorWrite(!1), LH.setAlphaMode(0), rH.render(!1), LH.setColorWrite(!0)
            }
          }
          const tH = rH._renderingMesh;
          !BH && tH._renderRunFollower(rH, LH) || rH.render(LH)
        }
      }
      static _StableSort(HH, BH, LH) {
        for (let AH = 0; AH < BH; AH += 16) {
          const rH = Math.min(AH + 16, BH);
          for (let BH = AH + 1; BH < rH; BH++) {
            const rH = HH[BH];
            let SH = AH,
              hH = BH;
            for (; SH < hH;) {
              const BH = SH + hH >>> 1;
              LH(rH, HH[BH]) < 0 ? hH = BH : SH = BH + 1
            }
            for (let LH = BH; LH > SH; LH--) HH[LH] = HH[LH - 1];
            HH[SH] = rH
          }
        }
        if (!(BH <= 16)) {
          zH(SH, BH);
          try {
            let AH = HH,
              rH = SH;
            for (let HH = 16; HH < BH; HH *= 2) {
              for (let hH = 0; hH < BH; hH += 2 * HH) {
                const SH = Math.min(hH + HH, BH),
                  tH = Math.min(hH + 2 * HH, BH);
                let zH = hH,
                  CH = SH,
                  EH = hH;
                if (SH < tH && LH(AH[SH], AH[SH - 1]) < 0)
                  for (; zH < SH && CH < tH;) rH[EH++] = LH(AH[CH], AH[zH]) < 0 ? AH[CH++] : AH[zH++];
                for (; zH < SH;) rH[EH++] = AH[zH++];
                for (; CH < tH;) rH[EH++] = AH[CH++]
              }
              const SH = rH;
              rH = AH, AH = SH
            }
            if (AH !== HH)
              for (let LH = 0; LH < BH; LH++) HH[LH] = AH[LH]
          } finally {
            SH.fill(void 0, 0, BH)
          }
        }
      }
      static defaultTransparentSortCompare(HH, BH) {
        return HH._alphaIndex > BH._alphaIndex ? 1 : HH._alphaIndex < BH._alphaIndex ? -1 : CH.backToFrontSortCompare(HH, BH)
      }
      static backToFrontSortCompare(HH, BH) {
        return HH._distanceToCamera < BH._distanceToCamera ? 1 : HH._distanceToCamera > BH._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(HH, BH) {
        return HH._distanceToCamera < BH._distanceToCamera ? -1 : HH._distanceToCamera > BH._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(HH, BH) {
        const LH = HH.getMesh(),
          AH = BH.getMesh();
        return LH.material && AH.material ? LH.material.uniqueId - AH.material.uniqueId : LH.uniqueId - AH.uniqueId
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
      dispatch(HH, BH, LH) {
        void 0 === BH && (BH = HH.getMesh()), void 0 === LH && (LH = HH.eu()), null !== LH && void 0 !== LH && (LH.needAlphaBlendingForMesh(BH) ? this._transparentSubMeshes.push(HH) : LH.needAlphaTestingForMesh(BH) ? (LH.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(HH), this._alphaTestSubMeshes.push(HH)) : (LH.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(HH), this._opaqueSubMeshes.push(HH)), BH._renderingGroup = this, BH._edgesRenderer && BH.isEnabled() && BH.isVisible && BH._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(BH._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(HH) {
        this._spriteManagers.push(HH), this._empty = !1
      }
      dispatchParticles(HH) {
        this._particleSystems.push(HH), this._empty = !1
      }
      _renderParticles(HH) {
        if (0 === this._particleSystems.length) return;
        const BH = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let LH = 0; LH < this._particleSystems.length; LH++) {
          const AH = this._particleSystems.data[LH];
          if (0 === (BH && BH.layerMask & AH.layerMask)) continue;
          const rH = AH.emitter;
          rH.position && HH && -1 === HH.indexOf(rH) || this._scene._activeParticles.addCount(AH.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const HH = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let BH = 0; BH < this._spriteManagers.length; BH++) {
          const LH = this._spriteManagers.data[BH];
          0 !== (HH && HH.layerMask & LH.layerMask) && LH.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    CH._ZeroVector = rH.o.Zero()
  },
  41448: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH
    });
    var AH = LH(41454);
    class rH {}
    class SH {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(HH) {
        this._disableDepthPrePass = HH;
        for (const BH of this._renderingGroups) BH.disableDepthPrePass = HH
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(HH) {
        HH !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = HH, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const HH of this._scene.meshes)
          if (HH.jU)
            for (const BH of HH.jU) BH._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const HH of this._scene.spriteManagers) HH._wasDispatched = !1;
        for (const HH of this._scene.dU) HH._wasDispatched = !1
      }
      constructor(HH) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new rH, this._maintainStateBetweenFrames = !1, this._scene = HH;
        for (let BH = SH.MIN_RENDERINGGROUPS; BH < SH.MAX_RENDERINGGROUPS; BH++) this._autoClearDepthStencil[BH] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(HH) {
        const BH = HH || 0;
        return this._prepareRenderingGroup(BH), this._renderingGroups[BH]
      }
      _clearDepthStencilBuffer() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.Iu().clear(null, !1, HH, BH), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(HH, BH, LH, AH) {
        let rH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          hH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          tH = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          zH = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          CH = arguments.length > 8 ? arguments[8] : void 0,
          EH = arguments.length > 9 ? arguments[9] : void 0;
        const XH = this._renderingGroupInfo;
        XH.NQ = this._scene, XH.camera = this._scene.activeCamera, XH.renderingManager = this;
        const GH = EH ?? this._scene.spriteManagers;
        if (GH && AH)
          for (let SH = 0; SH < GH.length; SH++) {
            const HH = GH[SH];
            this.dispatchSprites(HH)
          }
        for (let YH = SH.MIN_RENDERINGGROUPS; YH < SH.MAX_RENDERINGGROUPS; YH++) {
          this._depthStencilBufferAlreadyCleaned = YH === SH.MIN_RENDERINGGROUPS;
          const EH = this._renderingGroups[YH];
          if (!EH || EH._empty) continue;
          const GH = 1 << YH;
          if (XH.renderingGroupId = YH, this._scene.onBeforeRenderingGroupObservable.notifyObservers(XH, GH), SH.AUTOCLEAR) {
            const HH = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(YH) : this._autoClearDepthStencil[YH];
            HH && HH.autoClear && this._clearDepthStencilBuffer(HH.depth, HH.stencil)
          }
          for (let HH = 0, BH = this._scene._beforeRenderingGroupDrawStage; HH < BH.length; HH++) {
            BH[HH].action(YH)
          }
          EH.render(HH, AH, LH, BH, rH, hH, tH, zH, CH);
          for (let HH = 0, BH = this._scene._afterRenderingGroupDrawStage; HH < BH.length; HH++) {
            BH[HH].action(YH)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(XH, GH)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let HH = SH.MIN_RENDERINGGROUPS; HH < SH.MAX_RENDERINGGROUPS; HH++) {
            const BH = this._renderingGroups[HH];
            BH && BH.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let HH = SH.MIN_RENDERINGGROUPS; HH < SH.MAX_RENDERINGGROUPS; HH++) {
            const BH = this._renderingGroups[HH];
            BH && BH.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let HH = SH.MIN_RENDERINGGROUPS; HH < SH.MAX_RENDERINGGROUPS; HH++) {
          const BH = this._renderingGroups[HH];
          BH && BH.dispose()
        }
      }
      _prepareRenderingGroup(HH) {
        void 0 === this._renderingGroups[HH] && (this._renderingGroups[HH] = new AH.c(HH, this._scene, this._customOpaqueSortCompareFn[HH], this._customAlphaTestSortCompareFn[HH], this._customTransparentSortCompareFn[HH]), this._renderingGroups[HH].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(HH) {
        this.maintainStateBetweenFrames && HH._wasDispatched || (HH._wasDispatched = !0, this.getRenderingGroup(HH.renderingGroupId).dispatchSprites(HH))
      }
      dispatchParticles(HH) {
        this.maintainStateBetweenFrames && HH._wasDispatched || (HH._wasDispatched = !0, this.getRenderingGroup(HH.renderingGroupId).dispatchParticles(HH))
      }
      dispatch(HH, BH, LH) {
        void 0 === BH && (BH = HH.getMesh()), this.maintainStateBetweenFrames && HH._wasDispatched || (HH._wasDispatched = !0, this.getRenderingGroup(BH.renderingGroupId).dispatch(HH, BH, LH))
      }
      setRenderingOrder(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[HH] = BH, this._customAlphaTestSortCompareFn[HH] = LH, this._customTransparentSortCompareFn[HH] = AH, this._renderingGroups[HH]) {
          const BH = this._renderingGroups[HH];
          BH.opaqueSortCompareFn = this._customOpaqueSortCompareFn[HH], BH.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[HH], BH.transparentSortCompareFn = this._customTransparentSortCompareFn[HH]
        }
      }
      setRenderingAutoClearDepthStencil(HH, BH) {
        let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          AH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[HH] = {
          autoClear: BH,
          depth: LH,
          stencil: AH
        }
      }
      getAutoClearDepthStencilSetup(HH) {
        return this._autoClearDepthStencil[HH]
      }
    }
    SH.MAX_RENDERINGGROUPS = 4, SH.MIN_RENDERINGGROUPS = 0, SH.AUTOCLEAR = !0
  },
  41197: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH
    });
    class AH {
      constructor(HH) {
        this._supportBlendParametersPerTarget = HH, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(HH) {
        this.setAlphaBlend(HH)
      }
      setAlphaBlend(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[BH] !== HH && (HH ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[BH] = HH, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(HH, BH, LH, AH) {
        this._blendConstants[0] === HH && this._blendConstants[1] === BH && this._blendConstants[2] === LH && this._blendConstants[3] === AH || (this._blendConstants[0] = HH, this._blendConstants[1] = BH, this._blendConstants[2] = LH, this._blendConstants[3] = AH, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(HH, BH, LH, AH) {
        const rH = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[rH + 0] === HH && this._blendFunctionParameters[rH + 1] === BH && this._blendFunctionParameters[rH + 2] === LH && this._blendFunctionParameters[rH + 3] === AH || (this._blendFunctionParameters[rH + 0] = HH, this._blendFunctionParameters[rH + 1] = BH, this._blendFunctionParameters[rH + 2] = LH, this._blendFunctionParameters[rH + 3] = AH, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(HH, BH) {
        const LH = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[LH + 0] === HH && this._blendEquationParameters[LH + 1] === BH || (this._blendEquationParameters[LH + 0] = HH, this._blendEquationParameters[LH + 1] = BH, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== BH && (this._numTargets = BH, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== LH && (this._blendDisabledTargetsMask = LH, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (HH.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === BH || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (BH > 1 && 0 !== LH && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & LH) ? HH.enable(HH.BLEND) : HH.disable(HH.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (HH.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (HH.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const AH = HH;
        if (this._isAlphaBlendDirty) {
          for (let rH = 0; rH < BH; rH++) {
            const BH = rH < this._numTargetEnabled ? rH : 0;
            this._alphaBlend[BH] && 0 === (LH & 1 << rH) ? AH.enableIndexed(HH.BLEND, rH) : AH.disableIndexed(HH.BLEND, rH)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let HH = 0; HH < BH; HH++) {
            const BH = HH < this._numTargetEnabled ? 4 * HH : 0;
            AH.blendFuncSeparateIndexed(HH, this._blendFunctionParameters[BH + 0], this._blendFunctionParameters[BH + 1], this._blendFunctionParameters[BH + 2], this._blendFunctionParameters[BH + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let HH = 0; HH < BH; HH++) {
            const BH = HH < this._numTargetEnabled ? 2 * HH : 0;
            AH.blendEquationSeparateIndexed(HH, this._blendEquationParameters[BH + 0], this._blendEquationParameters[BH + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(HH, BH) {
        let LH = 32774;
        switch (HH) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, BH);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, BH);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, BH);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, BH);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, BH);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, BH);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, BH);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, BH);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, BH);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, BH);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, BH);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, BH);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, BH);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, BH);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, BH);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, BH);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, BH), LH = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, BH), LH = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, BH);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, BH)
        }
        this.setAlphaEquationParameters(LH, LH, BH)
      }
    }
  },
  41470: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH
    });
    class AH {}
    AH._IsPickingAvailable = !1
  },
  41383: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tL,
      d: () => SL
    });
    var AH = LH(41387),
      rH = LH(41179),
      SH = LH(41190),
      hH = LH(37997),
      tH = LH(41398);
    class zH {
      constructor() {
        this._count = 0, this._data = {}
      }
      Tm(HH) {
        this.clear(), HH.forEach(((HH, BH) => this.add(HH, BH)))
      }
      get(HH) {
        const BH = this._data[HH];
        if (void 0 !== BH) return BH
      }
      getOrAddWithFactory(HH, BH) {
        let LH = this.get(HH);
        return void 0 !== LH || (LH = BH(HH), LH && this.add(HH, LH)), LH
      }
      getOrAdd(HH, BH) {
        const LH = this.get(HH);
        return void 0 !== LH ? LH : (this.add(HH, BH), BH)
      }
      contains(HH) {
        return void 0 !== this._data[HH]
      }
      add(HH, BH) {
        return void 0 === this._data[HH] && (this._data[HH] = BH, ++this._count, !0)
      }
      set(HH, BH) {
        return void 0 !== this._data[HH] && (this._data[HH] = BH, !0)
      }
      getAndRemove(HH) {
        const BH = this.get(HH);
        return void 0 !== BH ? (delete this._data[HH], --this._count, BH) : null
      }
      remove(HH) {
        return !!this.contains(HH) && (delete this._data[HH], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(HH) {
        for (const BH in this._data) {
          HH(BH, this._data[BH])
        }
      }
      first(HH) {
        for (const BH in this._data) {
          const LH = HH(BH, this._data[BH]);
          if (LH) return LH
        }
        return null
      }
    }
    var CH = LH(41326),
      EH = LH(37963),
      XH = LH(41402),
      GH = LH(41416),
      YH = LH(41420);
    class uH {
      constructor(HH, BH, LH, AH, rH, SH) {
        this.source = HH, this.pointerX = BH, this.pointerY = LH, this.meshUnderPointer = AH, this.sourceEvent = rH, this.additionalData = SH
      }
      static CreateNew(HH, BH, LH) {
        const AH = HH.yN();
        return new uH(HH, AH.pointerX, AH.pointerY, AH.meshUnderPointer || HH, BH, LH)
      }
      static CreateNewFromSprite(HH, BH, LH, AH) {
        return new uH(HH, BH.pointerX, BH.pointerY, BH.meshUnderPointer, LH, AH)
      }
      static CreateNewFromScene(HH, BH) {
        return new uH(null, HH.pointerX, HH.pointerY, HH.meshUnderPointer, BH)
      }
      static CreateNewFromPrimitive(HH, BH, LH, AH) {
        return new uH(HH, BH.x, BH.y, null, LH, AH)
      }
    }
    var QH = LH(41433),
      WH = LH(41439),
      MH = LH(41448),
      xH = LH(41456),
      vH = LH(41154),
      PH = LH(37989),
      TH = LH(41169),
      UH = LH(41458);
    class VH {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const HH in VH.Triggers)
          if (Object.prototype.hasOwnProperty.call(VH.Triggers, HH)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const HH in VH.Triggers)
          if (Object.prototype.hasOwnProperty.call(VH.Triggers, HH)) {
            const BH = parseInt(HH);
            if (BH >= 1 && BH <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(HH) {
        for (const BH in VH.Triggers)
          if (Object.prototype.hasOwnProperty.call(VH.Triggers, BH)) {
            if (parseInt(BH) === HH) return !0
          } return !1
      }
    }
    VH.Triggers = {};
    var OH, bH, kH, mH, oH, IH, fH, lH = LH(41464);
    ! function(HH) {
      HH[HH.Generic = 0] = "Generic", HH[HH.Keyboard = 1] = "Keyboard", HH[HH.Mouse = 2] = "Mouse", HH[HH.Touch = 3] = "Touch", HH[HH.DualShock = 4] = "DualShock", HH[HH.Xbox = 5] = "Xbox", HH[HH.Switch = 6] = "Switch", HH[HH.DualSense = 7] = "DualSense"
    }(OH || (OH = {})),
    function(HH) {
      HH[HH.Horizontal = 0] = "Horizontal", HH[HH.Vertical = 1] = "Vertical", HH[HH.LeftClick = 2] = "LeftClick", HH[HH.MiddleClick = 3] = "MiddleClick", HH[HH.RightClick = 4] = "RightClick", HH[HH.BrowserBack = 5] = "BrowserBack", HH[HH.BrowserForward = 6] = "BrowserForward", HH[HH.MouseWheelX = 7] = "MouseWheelX", HH[HH.MouseWheelY = 8] = "MouseWheelY", HH[HH.MouseWheelZ = 9] = "MouseWheelZ", HH[HH.Move = 12] = "Move"
    }(bH || (bH = {})),
    function(HH) {
      HH[HH.Horizontal = 0] = "Horizontal", HH[HH.Vertical = 1] = "Vertical", HH[HH.LeftClick = 2] = "LeftClick", HH[HH.MiddleClick = 3] = "MiddleClick", HH[HH.RightClick = 4] = "RightClick", HH[HH.BrowserBack = 5] = "BrowserBack", HH[HH.BrowserForward = 6] = "BrowserForward", HH[HH.MouseWheelX = 7] = "MouseWheelX", HH[HH.MouseWheelY = 8] = "MouseWheelY", HH[HH.MouseWheelZ = 9] = "MouseWheelZ", HH[HH.DeltaHorizontal = 10] = "DeltaHorizontal", HH[HH.DeltaVertical = 11] = "DeltaVertical"
    }(kH || (kH = {})),
    function(HH) {
      HH[HH.Cross = 0] = "Cross", HH[HH.Circle = 1] = "Circle", HH[HH.Square = 2] = "Square", HH[HH.Triangle = 3] = "Triangle", HH[HH.L1 = 4] = "L1", HH[HH.R1 = 5] = "R1", HH[HH.L2 = 6] = "L2", HH[HH.R2 = 7] = "R2", HH[HH.Share = 8] = "Share", HH[HH.Options = 9] = "Options", HH[HH.L3 = 10] = "L3", HH[HH.R3 = 11] = "R3", HH[HH.DPadUp = 12] = "DPadUp", HH[HH.DPadDown = 13] = "DPadDown", HH[HH.DPadLeft = 14] = "DPadLeft", HH[HH.DPadRight = 15] = "DPadRight", HH[HH.Home = 16] = "Home", HH[HH.TouchPad = 17] = "TouchPad", HH[HH.LStickXAxis = 18] = "LStickXAxis", HH[HH.LStickYAxis = 19] = "LStickYAxis", HH[HH.RStickXAxis = 20] = "RStickXAxis", HH[HH.RStickYAxis = 21] = "RStickYAxis"
    }(mH || (mH = {})),
    function(HH) {
      HH[HH.Cross = 0] = "Cross", HH[HH.Circle = 1] = "Circle", HH[HH.Square = 2] = "Square", HH[HH.Triangle = 3] = "Triangle", HH[HH.L1 = 4] = "L1", HH[HH.R1 = 5] = "R1", HH[HH.L2 = 6] = "L2", HH[HH.R2 = 7] = "R2", HH[HH.Create = 8] = "Create", HH[HH.Options = 9] = "Options", HH[HH.L3 = 10] = "L3", HH[HH.R3 = 11] = "R3", HH[HH.DPadUp = 12] = "DPadUp", HH[HH.DPadDown = 13] = "DPadDown", HH[HH.DPadLeft = 14] = "DPadLeft", HH[HH.DPadRight = 15] = "DPadRight", HH[HH.Home = 16] = "Home", HH[HH.TouchPad = 17] = "TouchPad", HH[HH.LStickXAxis = 18] = "LStickXAxis", HH[HH.LStickYAxis = 19] = "LStickYAxis", HH[HH.RStickXAxis = 20] = "RStickXAxis", HH[HH.RStickYAxis = 21] = "RStickYAxis"
    }(oH || (oH = {})),
    function(HH) {
      HH[HH.A = 0] = "A", HH[HH.B = 1] = "B", HH[HH.X = 2] = "X", HH[HH.Y = 3] = "Y", HH[HH.LB = 4] = "LB", HH[HH.RB = 5] = "RB", HH[HH.LT = 6] = "LT", HH[HH.RT = 7] = "RT", HH[HH.Back = 8] = "Back", HH[HH.Start = 9] = "Start", HH[HH.LS = 10] = "LS", HH[HH.RS = 11] = "RS", HH[HH.DPadUp = 12] = "DPadUp", HH[HH.DPadDown = 13] = "DPadDown", HH[HH.DPadLeft = 14] = "DPadLeft", HH[HH.DPadRight = 15] = "DPadRight", HH[HH.Home = 16] = "Home", HH[HH.LStickXAxis = 17] = "LStickXAxis", HH[HH.LStickYAxis = 18] = "LStickYAxis", HH[HH.RStickXAxis = 19] = "RStickXAxis", HH[HH.RStickYAxis = 20] = "RStickYAxis"
    }(IH || (IH = {})),
    function(HH) {
      HH[HH.B = 0] = "B", HH[HH.A = 1] = "A", HH[HH.Y = 2] = "Y", HH[HH.X = 3] = "X", HH[HH.L = 4] = "L", HH[HH.R = 5] = "R", HH[HH.ZL = 6] = "ZL", HH[HH.ZR = 7] = "ZR", HH[HH.Minus = 8] = "Minus", HH[HH.Plus = 9] = "Plus", HH[HH.LS = 10] = "LS", HH[HH.RS = 11] = "RS", HH[HH.DPadUp = 12] = "DPadUp", HH[HH.DPadDown = 13] = "DPadDown", HH[HH.DPadLeft = 14] = "DPadLeft", HH[HH.DPadRight = 15] = "DPadRight", HH[HH.Home = 16] = "Home", HH[HH.Capture = 17] = "Capture", HH[HH.LStickXAxis = 18] = "LStickXAxis", HH[HH.LStickYAxis = 19] = "LStickYAxis", HH[HH.RStickXAxis = 20] = "RStickXAxis", HH[HH.RStickYAxis = 21] = "RStickYAxis"
    }(fH || (fH = {}));
    var KH = LH(41466);
    class cH {
      static CreateDeviceEvent(HH, BH, LH, AH, rH, SH, hH) {
        switch (HH) {
          case OH.Keyboard:
            return this._CreateKeyboardEvent(LH, AH, rH, SH);
          case OH.Mouse:
            if (LH === bH.MouseWheelX || LH === bH.MouseWheelY || LH === bH.MouseWheelZ) return this._CreateWheelEvent(HH, BH, LH, AH, rH, SH);
          case OH.Touch:
            return this._CreatePointerEvent(HH, BH, LH, AH, rH, SH, hH);
          default:
            throw `Unable to generate event for device ${OH[HH]}`
        }
      }
      static _CreatePointerEvent(HH, BH, LH, AH, rH, SH, hH) {
        const tH = this._CreateMouseEvent(HH, BH, LH, AH, rH, SH);
        HH === OH.Mouse ? (tH.deviceType = OH.Mouse, tH.pointerId = 1, tH.pointerType = "mouse") : (tH.deviceType = OH.Touch, tH.pointerId = hH ?? BH, tH.pointerType = "touch");
        let zH = 0;
        return zH += rH.pollInput(HH, BH, bH.LeftClick), zH += 2 * rH.pollInput(HH, BH, bH.RightClick), zH += 4 * rH.pollInput(HH, BH, bH.MiddleClick), tH.buttons = zH, LH === bH.Move ? tH.type = "pointermove" : LH >= bH.LeftClick && LH <= bH.RightClick && (tH.type = 1 === AH ? "pointerdown" : "pointerup", tH.button = LH - 2), tH
      }
      static _CreateWheelEvent(HH, BH, LH, AH, rH, SH) {
        const hH = this._CreateMouseEvent(HH, BH, LH, AH, rH, SH);
        switch (hH.pointerId = 1, hH.type = "wheel", hH.deltaMode = KH.d.DOM_DELTA_PIXEL, hH.deltaX = 0, hH.deltaY = 0, hH.deltaZ = 0, LH) {
          case bH.MouseWheelX:
            hH.deltaX = AH;
            break;
          case bH.MouseWheelY:
            hH.deltaY = AH;
            break;
          case bH.MouseWheelZ:
            hH.deltaZ = AH
        }
        return hH
      }
      static _CreateMouseEvent(HH, BH, LH, AH, rH, SH) {
        const hH = this._CreateEvent(SH),
          tH = rH.pollInput(HH, BH, bH.Horizontal),
          zH = rH.pollInput(HH, BH, bH.Vertical);
        return SH ? (hH.movementX = 0, hH.movementY = 0, hH.offsetX = hH.movementX - SH.getBoundingClientRect().x, hH.offsetY = hH.movementY - SH.getBoundingClientRect().y) : (hH.movementX = rH.pollInput(HH, BH, 10), hH.movementY = rH.pollInput(HH, BH, 11), hH.offsetX = 0, hH.offsetY = 0), this._CheckNonCharacterKeys(hH, rH), hH.clientX = tH, hH.clientY = zH, hH.x = tH, hH.y = zH, hH.deviceType = HH, hH.deviceSlot = BH, hH.inputIndex = LH, hH
      }
      static _CreateKeyboardEvent(HH, BH, LH, AH) {
        const rH = this._CreateEvent(AH);
        return this._CheckNonCharacterKeys(rH, LH), rH.deviceType = OH.Keyboard, rH.deviceSlot = 0, rH.inputIndex = HH, rH.type = 1 === BH ? "keydown" : "keyup", rH.key = String.fromCharCode(HH), rH.keyCode = HH, rH
      }
      static _CheckNonCharacterKeys(HH, BH) {
        const LH = BH.isDeviceAvailable(OH.Keyboard),
          AH = LH && 1 === BH.pollInput(OH.Keyboard, 0, 18),
          rH = LH && 1 === BH.pollInput(OH.Keyboard, 0, 17),
          SH = LH && (1 === BH.pollInput(OH.Keyboard, 0, 91) || 1 === BH.pollInput(OH.Keyboard, 0, 92) || 1 === BH.pollInput(OH.Keyboard, 0, 93)),
          hH = LH && 1 === BH.pollInput(OH.Keyboard, 0, 16);
        HH.altKey = AH, HH.ctrlKey = rH, HH.metaKey = SH, HH.shiftKey = hH
      }
      static _CreateEvent(HH) {
        const BH = {
          preventDefault: () => {}
        };
        return BH.target = HH, BH
      }
    }
    class eH {
      constructor(HH, BH, LH) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(HH, BH, ((HH, BH, AH, rH) => {
          const SH = cH.CreateDeviceEvent(HH, BH, AH, rH, this);
          LH(HH, BH, SH)
        })) : this._createDummyNativeInput()
      }
      pollInput(HH, BH, LH) {
        return this._nativeInput.pollInput(HH, BH, LH)
      }
      isDeviceAvailable(HH) {
        return HH === OH.Mouse || HH === OH.Touch
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
    const qH = Object.keys(bH).length / 2;
    class gH {
      constructor(HH, BH, LH, rH) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = AH.i.IsSafari(), this._usingMacOs = (0, vH.h)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = HH => {}, this._keyboardUpEvent = HH => {}, this._keyboardBlurEvent = HH => {}, this._pointerMoveEvent = HH => {}, this._pointerDownEvent = HH => {}, this._pointerUpEvent = HH => {}, this._pointerCancelEvent = HH => {}, this._pointerCancelTouch = HH => {}, this._pointerLeaveEvent = HH => {}, this._pointerWheelEvent = HH => {}, this._pointerBlurEvent = HH => {}, this._pointerMacOsChromeOutEvent = HH => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, vH.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, vH.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = HH => {}, this._gamepadDisconnectedEvent = HH => {}, this._eventPrefix = AH.i.GetPointerPrefix(HH), this._engine = HH, this._onDeviceConnected = BH, this._onDeviceDisconnected = LH, this._onInputChanged = rH, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(HH, BH, LH) {
        const rH = this._inputs[HH][BH];
        if (!rH) throw `Unable to find device ${OH[HH]}`;
        HH >= OH.DualShock && HH <= OH.DualSense && this._updateDevice(HH, BH, LH);
        const SH = rH[LH];
        if (void 0 === SH) throw `Unable to find input ${LH} for device ${OH[HH]} in slot ${BH}`;
        return LH === bH.Move && AH.i.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), SH
      }
      isDeviceAvailable(HH) {
        return void 0 !== this._inputs[HH]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const HH = this?._engine.getInputElement();
        if (HH && (!this._eventsAttached || this._elementToAttachTo !== HH)) {
          if (this._disableEvents(), this._inputs)
            for (const HH of this._inputs)
              if (HH)
                for (const BH in HH) {
                  const LH = HH[+BH];
                  if (LH)
                    for (let HH = 0; HH < LH.length; HH++) LH[HH] = 0
                }
          this._elementToAttachTo = HH, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const HH = navigator.getGamepads();
          for (const BH of HH) BH && this._addGamePad(BH)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(OH.Mouse, 0, 0, 0)
      }
      _addGamePad(HH) {
        const BH = this._getGamepadDeviceType(HH.id),
          LH = HH.index;
        this._gamepads = this._gamepads || new Array(HH.index + 1), this._registerDevice(BH, LH, HH.buttons.length + HH.axes.length), this._gamepads[LH] = BH
      }
      _addPointerDevice(HH, BH, LH, AH) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(HH, BH, qH);
        const rH = this._inputs[HH][BH];
        rH[0] = LH, rH[1] = AH
      }
      _registerDevice(HH, BH, LH) {
        if (void 0 === BH) throw `Unable to register device ${OH[HH]} to undefined slot.`;
        if (this._inputs[HH] || (this._inputs[HH] = {}), !this._inputs[HH][BH]) {
          const AH = new Array(LH);
          AH.fill(0), this._inputs[HH][BH] = AH, this._onDeviceConnected(HH, BH)
        }
      }
      _unregisterDevice(HH, BH) {
        this._inputs[HH][BH] && (delete this._inputs[HH][BH], this._onDeviceDisconnected(HH, BH))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = HH => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(OH.Keyboard, 0, 255));
          const BH = this._inputs[OH.Keyboard][0];
          if (BH) {
            BH[HH.keyCode] = 1;
            const LH = HH;
            LH.inputIndex = HH.keyCode, this._usingMacOs && HH.metaKey && "Meta" !== HH.key && (this._metaKeys.includes(HH.keyCode) || this._metaKeys.push(HH.keyCode)), this._onInputChanged(OH.Keyboard, 0, LH)
          }
        }, this._keyboardUpEvent = HH => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(OH.Keyboard, 0, 255));
          const BH = this._inputs[OH.Keyboard][0];
          if (BH) {
            BH[HH.keyCode] = 0;
            const LH = HH;
            if (LH.inputIndex = HH.keyCode, this._usingMacOs && "Meta" === HH.key && this._metaKeys.length > 0) {
              for (const HH of this._metaKeys) {
                const LH = cH.CreateDeviceEvent(OH.Keyboard, 0, HH, 0, this, this._elementToAttachTo);
                BH[HH] = 0, this._onInputChanged(OH.Keyboard, 0, LH)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(OH.Keyboard, 0, LH)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const HH = this._inputs[OH.Keyboard][0];
            for (let BH = 0; BH < HH.length; BH++)
              if (0 !== HH[BH]) {
                HH[BH] = 0;
                const LH = cH.CreateDeviceEvent(OH.Keyboard, 0, BH, 0, this, this._elementToAttachTo);
                this._onInputChanged(OH.Keyboard, 0, LH)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, vH.h)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let AH = 0; AH < this._maxTouchPoints; AH++) this._activeTouchIds[AH] = -1;
        this._pointerMoveEvent = HH => {
          const BH = this._getPointerType(HH);
          let LH = BH === OH.Mouse ? 0 : this._activeTouchIds.indexOf(HH.pointerId);
          if (BH === OH.Touch && -1 === LH) {
            if (0 === HH.buttons) return;
            const rH = this._activeTouchIds.indexOf(-1);
            if (!(rH >= 0)) return void AH.i.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            LH = rH, this._activeTouchIds[rH] = HH.pointerId, this._onDeviceConnected(BH, LH)
          }
          this._inputs[BH] || (this._inputs[BH] = {}), this._inputs[BH][LH] || this._addPointerDevice(BH, LH, HH.clientX, HH.clientY);
          const rH = this._inputs[BH][LH];
          if (rH) {
            const AH = HH;
            AH.inputIndex = bH.Move, rH[bH.Horizontal] = HH.clientX, rH[bH.Vertical] = HH.clientY, BH === OH.Touch && 0 === rH[bH.LeftClick] && (rH[bH.LeftClick] = 1), void 0 === HH.pointerId && (HH.pointerId = this._mouseId), this._onInputChanged(BH, LH, AH), this._usingSafari || -1 === HH.button || (AH.inputIndex = HH.button + 2, rH[HH.button + 2] = rH[HH.button + 2] ? 0 : 1, this._onInputChanged(BH, LH, AH))
          }
        }, this._pointerDownEvent = HH => {
          const BH = this._getPointerType(HH);
          let LH = BH === OH.Mouse ? 0 : HH.pointerId;
          if (BH === OH.Touch) {
            let BH = this._activeTouchIds.indexOf(HH.pointerId);
            if (-1 === BH && (BH = this._activeTouchIds.indexOf(-1)), !(BH >= 0)) return void AH.i.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            LH = BH, this._activeTouchIds[BH] = HH.pointerId
          }
          this._inputs[BH] || (this._inputs[BH] = {}), this._inputs[BH][LH] ? BH === OH.Touch && this._onDeviceConnected(BH, LH) : this._addPointerDevice(BH, LH, HH.clientX, HH.clientY);
          const rH = this._inputs[BH][LH];
          if (rH) {
            const AH = rH[bH.Horizontal],
              hH = rH[bH.Vertical];
            if (BH === OH.Mouse) {
              if (void 0 === HH.pointerId && (HH.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (SH) {}
            } else if (HH.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(HH.pointerId)
            } catch (SH) {}
            rH[bH.Horizontal] = HH.clientX, rH[bH.Vertical] = HH.clientY, rH[HH.button + 2] = 1;
            const tH = HH;
            tH.inputIndex = HH.button + 2, this._onInputChanged(BH, LH, tH), AH === HH.clientX && hH === HH.clientY || (tH.inputIndex = bH.Move, this._onInputChanged(BH, LH, tH))
          }
        }, this._pointerUpEvent = HH => {
          const BH = this._getPointerType(HH),
            LH = BH === OH.Mouse ? 0 : this._activeTouchIds.indexOf(HH.pointerId);
          if (BH === OH.Touch) {
            if (-1 === LH) return;
            this._activeTouchIds[LH] = -1
          }
          const AH = this._inputs[BH]?.[LH];
          let rH = HH.button,
            SH = AH && 0 !== AH[rH + 2];
          if (!SH && this._isUsingFirefox && this._usingMacOs && AH && (rH = 2 === rH ? 0 : 2, SH = 0 !== AH[rH + 2]), SH) {
            const SH = AH[bH.Horizontal],
              hH = AH[bH.Vertical];
            AH[bH.Horizontal] = HH.clientX, AH[bH.Vertical] = HH.clientY, AH[rH + 2] = 0;
            const tH = HH;
            void 0 === HH.pointerId && (HH.pointerId = this._mouseId), SH === HH.clientX && hH === HH.clientY || (tH.inputIndex = bH.Move, this._onInputChanged(BH, LH, tH)), tH.inputIndex = rH + 2, BH === OH.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : HH.pointerId && this._elementToAttachTo.hasPointerCapture?.(HH.pointerId) && this._elementToAttachTo.releasePointerCapture(HH.pointerId), this._onInputChanged(BH, LH, tH), BH === OH.Touch && this._onDeviceDisconnected(BH, LH)
          }
        }, this._pointerCancelTouch = HH => {
          const BH = this._activeTouchIds.indexOf(HH);
          if (-1 === BH) return;
          this._elementToAttachTo.hasPointerCapture?.(HH) && this._elementToAttachTo.releasePointerCapture(HH), this._inputs[OH.Touch][BH][bH.LeftClick] = 0;
          const LH = cH.CreateDeviceEvent(OH.Touch, BH, bH.LeftClick, 0, this, this._elementToAttachTo, HH);
          this._onInputChanged(OH.Touch, BH, LH), this._activeTouchIds[BH] = -1, this._onDeviceDisconnected(OH.Touch, BH)
        }, this._pointerCancelEvent = HH => {
          if ("mouse" === HH.pointerType) {
            const HH = this._inputs[OH.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let BH = bH.LeftClick; BH <= bH.BrowserForward; BH++)
              if (1 === HH[BH]) {
                HH[BH] = 0;
                const LH = cH.CreateDeviceEvent(OH.Mouse, 0, BH, 0, this, this._elementToAttachTo);
                this._onInputChanged(OH.Mouse, 0, LH)
              }
          } else this._pointerCancelTouch(HH.pointerId)
        }, this._pointerLeaveEvent = HH => {
          "pen" === HH.pointerType && this._pointerCancelTouch(HH.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let HH = !1;
        const BH = function() {};
        try {
          const LH = Object.defineProperty({}, "passive", {
            get: function() {
              HH = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", BH, LH), this._elementToAttachTo.removeEventListener("test", BH, LH)
        } catch (LH) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(OH.Mouse)) {
            const HH = this._inputs[OH.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let BH = bH.LeftClick; BH <= bH.BrowserForward; BH++)
              if (1 === HH[BH]) {
                HH[BH] = 0;
                const LH = cH.CreateDeviceEvent(OH.Mouse, 0, BH, 0, this, this._elementToAttachTo);
                this._onInputChanged(OH.Mouse, 0, LH)
              }
          }
          if (this.isDeviceAvailable(OH.Touch)) {
            const HH = this._inputs[OH.Touch];
            for (let BH = 0; BH < this._activeTouchIds.length; BH++) {
              const LH = this._activeTouchIds[BH];
              if (this._elementToAttachTo.hasPointerCapture?.(LH) && this._elementToAttachTo.releasePointerCapture(LH), -1 !== LH && 1 === HH[BH]?.[bH.LeftClick]) {
                HH[BH][bH.LeftClick] = 0;
                const AH = cH.CreateDeviceEvent(OH.Touch, BH, bH.LeftClick, 0, this, this._elementToAttachTo, LH);
                this._onInputChanged(OH.Touch, BH, AH), this._activeTouchIds[BH] = -1, this._onDeviceDisconnected(OH.Touch, BH)
              }
            }
          }
        }, this._pointerWheelEvent = HH => {
          const BH = OH.Mouse;
          this._inputs[BH] || (this._inputs[BH] = []), this._inputs[BH][0] || (this._pointerActive = !0, this._registerDevice(BH, 0, qH));
          const LH = this._inputs[BH][0];
          if (LH) {
            LH[bH.MouseWheelX] = HH.deltaX || 0, LH[bH.MouseWheelY] = HH.deltaY || HH.wheelDelta || 0, LH[bH.MouseWheelZ] = HH.deltaZ || 0;
            const AH = HH;
            void 0 === HH.pointerId && (HH.pointerId = this._mouseId), 0 !== LH[bH.MouseWheelX] && (AH.inputIndex = bH.MouseWheelX, this._onInputChanged(BH, 0, AH)), 0 !== LH[bH.MouseWheelY] && (AH.inputIndex = bH.MouseWheelY, this._onInputChanged(BH, 0, AH)), 0 !== LH[bH.MouseWheelZ] && (AH.inputIndex = bH.MouseWheelZ, this._onInputChanged(BH, 0, AH))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = HH => {
          HH.buttons > 1 && this._pointerCancelEvent(HH)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!HH && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(OH.Mouse)) {
            const HH = this._inputs[OH.Mouse][0];
            HH[bH.MouseWheelX] = 0, HH[bH.MouseWheelY] = 0, HH[bH.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = HH => {
          this._addGamePad(HH.gamepad)
        }, this._gamepadDisconnectedEvent = HH => {
          if (this._gamepads) {
            const BH = this._getGamepadDeviceType(HH.gamepad.id),
              LH = HH.gamepad.index;
            this._unregisterDevice(BH, LH), delete this._gamepads[LH]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(HH, BH, LH) {
        const AH = navigator.getGamepads()[BH];
        if (AH && HH === this._gamepads[BH]) {
          const rH = this._inputs[HH][BH];
          LH >= AH.buttons.length ? rH[LH] = AH.axes[LH - AH.buttons.length].valueOf() : rH[LH] = AH.buttons[LH].value
        }
      }
      _getGamepadDeviceType(HH) {
        return -1 !== HH.indexOf("054c") ? -1 !== HH.indexOf("0ce6") ? OH.DualSense : OH.DualShock : -1 !== HH.indexOf("Xbox One") || -1 !== HH.search("Xbox 360") || -1 !== HH.search("xinput") || -1 !== HH.indexOf("045e") && -1 === HH.indexOf("Surface Dock") ? OH.Xbox : -1 !== HH.indexOf("057e") ? OH.Switch : OH.Generic
      }
      _getPointerType(HH) {
        let BH = OH.Mouse;
        return ("touch" === HH.pointerType || "pen" === HH.pointerType || HH.touches) && (BH = OH.Touch), BH
      }
    }
    class NH {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = BH, this.deviceSlot = LH, this.onInputChangedObservable = new hH.d, this._deviceInputSystem = HH
      }
      getInput(HH) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, HH)
      }
    }
    class RH {
      constructor(HH) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = HH => {
          for (let BH = 0; BH < this._devices.length; BH++) {
            const LH = this._devices[BH];
            for (const AH in LH) {
              const LH = +AH;
              HH._addDevice(new NH(this._deviceInputSystem, BH, LH))
            }
          }
          this._registeredManagers.push(HH)
        }, this.unregisterManager = HH => {
          const BH = this._registeredManagers.indexOf(HH);
          BH > -1 && this._registeredManagers.splice(BH, 1)
        };
        const BH = Object.keys(OH).length / 2;
        this._devices = new Array(BH);
        const LH = (HH, BH) => {
            this._devices[HH] || (this._devices[HH] = new Array), this._devices[HH][BH] || (this._devices[HH][BH] = BH);
            for (const LH of this._registeredManagers) {
              const AH = new NH(this._deviceInputSystem, HH, BH);
              LH._addDevice(AH)
            }
          },
          AH = (HH, BH) => {
            this._devices[HH]?.[BH] && delete this._devices[HH][BH];
            for (const LH of this._registeredManagers) LH._removeDevice(HH, BH)
          },
          rH = (HH, BH, LH) => {
            if (LH)
              for (const AH of this._registeredManagers) AH._onInputChanged(HH, BH, LH)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new eH(LH, AH, rH) : this._deviceInputSystem = new gH(HH, LH, AH, rH)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class jH {
      getDeviceSource(HH, BH) {
        if (void 0 === BH) {
          if (void 0 === this._firstDevice[HH]) return null;
          BH = this._firstDevice[HH]
        }
        return this._devices[HH] && void 0 !== this._devices[HH][BH] ? this._devices[HH][BH] : null
      }
      getDeviceSources(HH) {
        return this._devices[HH] ? this._devices[HH].filter((HH => !!HH)) : []
      }
      constructor(HH) {
        const BH = Object.keys(OH).length / 2;
        this._devices = new Array(BH), this._firstDevice = new Array(BH), this._engine = HH, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new RH(HH)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new hH.d((HH => {
          for (const BH of this._devices)
            if (BH)
              for (const LH of BH) LH && this.onDeviceConnectedObservable.notifyObserver(HH, LH)
        })), this.onDeviceDisconnectedObservable = new hH.d, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = HH.uR.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.uR.remove(this._onDisposeObserver)
      }
      _addDevice(HH) {
        this._devices[HH.deviceType] || (this._devices[HH.deviceType] = []), this._devices[HH.deviceType][HH.deviceSlot] || (this._devices[HH.deviceType][HH.deviceSlot] = HH, this._updateFirstDevices(HH.deviceType)), this.onDeviceConnectedObservable.notifyObservers(HH)
      }
      _removeDevice(HH, BH) {
        const LH = this._devices[HH]?.[BH];
        this.onDeviceDisconnectedObservable.notifyObservers(LH), this._devices[HH]?.[BH] && delete this._devices[HH][BH], this._updateFirstDevices(HH)
      }
      _onInputChanged(HH, BH, LH) {
        this._devices[HH]?.[BH]?.onInputChangedObservable.notifyObservers(LH)
      }
      _updateFirstDevices(HH) {
        switch (HH) {
          case OH.Keyboard:
          case OH.Mouse:
            this._firstDevice[HH] = 0;
            break;
          case OH.Touch:
          case OH.DualSense:
          case OH.DualShock:
          case OH.Xbox:
          case OH.Switch:
          case OH.Generic: {
            delete this._firstDevice[HH];
            const BH = this._devices[HH];
            if (BH)
              for (let LH = 0; LH < BH.length; LH++)
                if (BH[LH]) {
                  this._firstDevice[HH] = LH;
                  break
                } break
          }
        }
      }
    }
    var nH = LH(41470);
    class FH {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get qE() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(HH) {
        this._singleClick = HH
      }
      set qE(HH) {
        this._doubleClick = HH
      }
      set hasSwiped(HH) {
        this._hasSwiped = HH
      }
      set ignore(HH) {
        this._ignore = HH
      }
    }
    class DH {
      constructor(HH) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new EH.n(0, 0), this._previousStartingPointerPosition = new EH.n(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = HH || PH.d.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(HH) {
        return this._meshUnderPointerId[HH] || null
      }
      get unTranslatedPointer() {
        return new EH.n(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(HH) {
        this._pointerX = HH
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(HH) {
        this._pointerY = HH
      }
      _updatePointerPosition(HH) {
        const BH = this._scene.Iu().getInputElementClientRect();
        BH && (this._pointerX = HH.clientX - BH.left, this._pointerY = HH.clientY - BH.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(HH, BH) {
        const LH = this._scene,
          AH = LH.Iu(),
          rH = AH.getInputElement();
        rH && (rH.tabIndex = AH.canvasTabIndex, LH.doNotHandleCursors || (rH.style.cursor = LH.defaultCursor)), this._setCursorAndPointerOverMesh(HH, BH, LH);
        for (const tH of LH._pointerMoveStage) {
          HH = HH || this._pickMove(BH);
          const LH = !!HH?.pickedMesh;
          HH = tH.action(this._unTranslatedPointerX, this._unTranslatedPointerY, HH, LH, rH)
        }
        const SH = BH.inputIndex >= bH.MouseWheelX && BH.inputIndex <= bH.MouseWheelZ ? UH.d.POINTERWHEEL : UH.d.POINTERMOVE;
        let hH;
        LH.onPointerMove && (HH = HH || this._pickMove(BH), LH.onPointerMove(BH, HH, SH)), HH ? (hH = new UH.g(SH, BH, HH), this._setRayOnPointerInfo(HH, BH)) : (hH = new UH.g(SH, BH, null, this), this._movePointerInfo = hH), LH.onPointerObservable.hasObservers() && LH.onPointerObservable.notifyObservers(hH, SH)
      }
      _setRayOnPointerInfo(HH, BH) {
        const LH = this._scene;
        HH && nH.e._IsPickingAvailable && (HH.ray || (HH.ray = LH.createPickingRay(BH.offsetX, BH.offsetY, EH.e.Identity(), LH.activeCamera)))
      }
      _addCameraPointerObserver(HH, BH) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(HH, BH)
      }
      _removeCameraPointerObserver(HH) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(HH)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(HH, BH, LH) {
        const AH = this._scene,
          rH = new UH.e(LH, BH, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return HH && (rH.originalPickingInfo = HH, rH.ray = HH.ray, "xr-near" === BH.pointerType && HH.originMesh && (rH.nearInteractionPickingInfo = HH)), AH.onPrePointerObservable.notifyObservers(rH, LH), !!rH.skipOnPointerObservable
      }
      _pickMove(HH) {
        const BH = this._scene,
          LH = BH.XY(this._unTranslatedPointerX, this._unTranslatedPointerY, BH.pointerMovePredicate, BH.pointerMoveFastCheck, BH.cameraToUseForPointers, BH.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(LH, HH, BH), LH
      }
      _updateMeshUnderPointer() {
        const HH = this._scene;
        if (!HH.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || HH.skipPointerMovePicking || !HH.cameraToUseForPointers && !HH.activeCamera) return;
        this._ensurePointerMovePredicate();
        const BH = this._pointerX,
          LH = this._pointerY,
          AH = this._unTranslatedPointerX,
          rH = this._unTranslatedPointerY;
        for (const SH of this._latestPointerMoveEvents.values()) this._pointerX = SH.pointerX, this._pointerY = SH.pointerY, this._unTranslatedPointerX = SH.unTranslatedPointerX, this._unTranslatedPointerY = SH.unTranslatedPointerY, this._pickMove(SH.event);
        this._pointerX = BH, this._pointerY = LH, this._unTranslatedPointerX = AH, this._unTranslatedPointerY = rH
      }
      _ensurePointerMovePredicate() {
        const HH = this._scene;
        HH.pointerMovePredicate || (HH.pointerMovePredicate = BH => (BH._isPointerMovePickable ?? BH.jQ) && BH.isVisible && BH.isReady() && BH.isEnabled() && (BH.enablePointerMoveEvents || HH.constantlyUpdateMeshUnderPointer || null !== BH._getActionManagerForTrigger()) && (!HH.cameraToUseForPointers || 0 !== (HH.cameraToUseForPointers.layerMask & BH.layerMask)))
      }
      _setCursorAndPointerOverMesh(HH, BH, LH) {
        const AH = LH.Iu().getInputElement();
        if (HH?.pickedMesh) {
          if (this.setPointerOverMesh(HH.pickedMesh, BH.pointerId, HH, BH), !LH.doNotHandleCursors && AH && this._pointerOverMesh) {
            const HH = this._pointerOverMesh._getActionManagerForTrigger();
            HH && HH.hasPointerTriggers && (AH.style.cursor = HH.hoverCursor || LH.hoverCursor)
          }
        } else this.setPointerOverMesh(null, BH.pointerId, HH, BH)
      }
      simulatePointerMove(HH, BH) {
        const LH = new PointerEvent("pointermove", BH);
        LH.inputIndex = bH.Move, this._checkPrePointerObservable(HH, LH, UH.d.POINTERMOVE) || this._processPointerMove(HH, LH)
      }
      simulatePointerDown(HH, BH) {
        const LH = new PointerEvent("pointerdown", BH);
        LH.inputIndex = LH.button + 2, this._checkPrePointerObservable(HH, LH, UH.d.POINTERDOWN) || this._processPointerDown(HH, LH)
      }
      _processPointerDown(HH, BH) {
        const LH = this._scene;
        if (HH?.pickedMesh) {
          this._pickedDownMesh = HH.pickedMesh;
          const AH = HH.pickedMesh._getActionManagerForTrigger();
          if (AH) {
            if (AH.hasPickTriggers) switch (AH.processTrigger(5, new uH(HH.pickedMesh, LH.pointerX, LH.pointerY, HH.pickedMesh, BH, HH)), BH.button) {
              case 0:
                AH.processTrigger(2, new uH(HH.pickedMesh, LH.pointerX, LH.pointerY, HH.pickedMesh, BH, HH));
                break;
              case 1:
                AH.processTrigger(4, new uH(HH.pickedMesh, LH.pointerX, LH.pointerY, HH.pickedMesh, BH, HH));
                break;
              case 2:
                AH.processTrigger(3, new uH(HH.pickedMesh, LH.pointerX, LH.pointerY, HH.pickedMesh, BH, HH))
            }
            AH.hasSpecificTrigger(8) && window.setTimeout((() => {
              const HH = LH.XY(this._unTranslatedPointerX, this._unTranslatedPointerY, (HH => HH.jQ && HH.isVisible && HH.isReady() && HH.actionManager && HH.actionManager.hasSpecificTrigger(8) && HH === this._pickedDownMesh), !1, LH.cameraToUseForPointers);
              HH?.pickedMesh && AH && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > DH.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, AH.processTrigger(8, uH.CreateNew(HH.pickedMesh, BH)))
            }), DH.LongPressDelay)
          }
        } else
          for (const SH of LH._pointerDownStage) HH = SH.action(this._unTranslatedPointerX, this._unTranslatedPointerY, HH, BH, !1);
        let AH;
        const rH = UH.d.POINTERDOWN;
        HH ? (LH.onPointerDown && LH.onPointerDown(BH, HH, rH), AH = new UH.g(rH, BH, HH), this._setRayOnPointerInfo(HH, BH)) : AH = new UH.g(rH, BH, null, this), LH.onPointerObservable.hasObservers() && LH.onPointerObservable.notifyObservers(AH, rH)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(HH, BH, LH) {
        const AH = new PointerEvent("pointerup", BH);
        AH.inputIndex = bH.Move;
        const rH = new FH;
        LH ? rH.qE = !0 : rH.singleClick = !0, this._checkPrePointerObservable(HH, AH, UH.d.POINTERUP) || this._processPointerUp(HH, AH, rH)
      }
      _processPointerUp(HH, BH, LH) {
        const AH = this._scene;
        if (HH?.pickedMesh) {
          if (this._pickedUpMesh = HH.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (AH.onPointerPick && AH.onPointerPick(BH, HH), LH.singleClick && !LH.ignore && AH.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const LH = UH.d.POINTERPICK,
              rH = new UH.g(LH, BH, HH);
            this._setRayOnPointerInfo(HH, BH), AH.onPointerObservable.notifyObservers(rH, LH)
          }
          const rH = HH.pickedMesh._getActionManagerForTrigger();
          if (rH && !LH.ignore) {
            rH.processTrigger(7, uH.CreateNew(HH.pickedMesh, BH, HH)), !LH.hasSwiped && LH.singleClick && rH.processTrigger(1, uH.CreateNew(HH.pickedMesh, BH, HH));
            const AH = HH.pickedMesh._getActionManagerForTrigger(6);
            LH.qE && AH && AH.processTrigger(6, uH.CreateNew(HH.pickedMesh, BH, HH))
          }
        } else if (!LH.ignore)
          for (const rH of AH._pointerUpStage) HH = rH.action(this._unTranslatedPointerX, this._unTranslatedPointerY, HH, BH, LH.qE);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const HH = this._pickedDownMesh._getActionManagerForTrigger(16);
          HH && HH.processTrigger(16, uH.CreateNew(this._pickedDownMesh, BH))
        }
        if (!LH.ignore) {
          const rH = new UH.g(UH.d.POINTERUP, BH, HH);
          if (this._setRayOnPointerInfo(HH, BH), AH.onPointerObservable.notifyObservers(rH, UH.d.POINTERUP), AH.onPointerUp && AH.onPointerUp(BH, HH, UH.d.POINTERUP), !LH.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let rH = 0;
            if (LH.singleClick ? rH = UH.d.POINTERTAP : LH.qE && (rH = UH.d.POINTERDOUBLETAP), rH) {
              const LH = new UH.g(rH, BH, HH);
              AH.onPointerObservable.hasObservers() && AH.onPointerObservable.hasSpecificMask(rH) && AH.onPointerObservable.notifyObservers(LH, rH)
            }
          }
        }
      }
      isPointerCaptured() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[HH]
      }
      attachControl() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const rH = this._scene,
          SH = rH.Iu();
        AH || (AH = SH.getInputElement()), this._alreadyAttached && this.detachControl(), AH && (this._alreadyAttachedTo = AH), this._deviceSourceManager = new jH(SH), this._initActionManager = HH => {
          if (!this._meshPickProceed) {
            const BH = rH.skipPointerUpPicking || 0 === rH._registeredActions && !this._checkForPicking() && !rH.onPointerUp ? null : rH.XY(this._unTranslatedPointerX, this._unTranslatedPointerY, rH.pointerUpPredicate, rH.pointerUpFastCheck, rH.cameraToUseForPointers, rH.pointerUpTrianglePredicate);
            this._currentPickResult = BH, BH && (HH = BH.hit && BH.pickedMesh ? BH.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return HH
        }, this._delayedSimpleClick = (HH, BH, LH) => {
          if ((Date.now() - this._previousStartingPointerTime > DH.DoubleClickDelay && !this._doubleClickOccured || HH !== this._previousButtonPressed) && (this._doubleClickOccured = !1, BH.singleClick = !0, BH.ignore = !1, this._delayedClicks[HH])) {
            const BH = this._delayedClicks[HH].evt,
              LH = UH.d.POINTERTAP,
              AH = new UH.g(LH, BH, this._currentPickResult);
            rH.onPointerObservable.hasObservers() && rH.onPointerObservable.hasSpecificMask(LH) && rH.onPointerObservable.notifyObservers(AH, LH), this._delayedClicks[HH] = null
          }
        }, this._initClickEvent = (HH, BH, LH, AH) => {
          const rH = new FH;
          this._currentPickResult = null;
          let SH = null,
            hH = HH.hasSpecificMask(UH.d.POINTERPICK) || BH.hasSpecificMask(UH.d.POINTERPICK) || HH.hasSpecificMask(UH.d.POINTERTAP) || BH.hasSpecificMask(UH.d.POINTERTAP) || HH.hasSpecificMask(UH.d.POINTERDOUBLETAP) || BH.hasSpecificMask(UH.d.POINTERDOUBLETAP);
          !hH && VH && (SH = this._initActionManager(SH, rH), SH && (hH = SH.hasPickTriggers));
          let tH = !1;
          if (hH = hH && !this._isMultiTouchGesture, hH) {
            const hH = LH.button;
            if (rH.hasSwiped = this._isPointerSwiping(), !rH.hasSwiped) {
              let zH = !DH.ExclusiveDoubleClickMode;
              if (zH || (zH = !HH.hasSpecificMask(UH.d.POINTERDOUBLETAP) && !BH.hasSpecificMask(UH.d.POINTERDOUBLETAP), zH && !VH.HasSpecificTrigger(6) && (SH = this._initActionManager(SH, rH), SH && (zH = !SH.hasSpecificTrigger(6)))), zH)(Date.now() - this._previousStartingPointerTime > DH.DoubleClickDelay || hH !== this._previousButtonPressed) && (rH.singleClick = !0, AH(rH, this._currentPickResult), tH = !0);
              else {
                const HH = {
                  evt: LH,
                  clickInfo: rH,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, hH, rH, AH), DH.DoubleClickDelay)
                };
                this._delayedClicks[hH] = HH
              }
              let CH = HH.hasSpecificMask(UH.d.POINTERDOUBLETAP) || BH.hasSpecificMask(UH.d.POINTERDOUBLETAP);
              !CH && VH.HasSpecificTrigger(6) && (SH = this._initActionManager(SH, rH), SH && (CH = SH.hasSpecificTrigger(6))), CH && (hH === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < DH.DoubleClickDelay && !this._doubleClickOccured ? (rH.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = hH, DH.ExclusiveDoubleClickMode ? (this._delayedClicks[hH] && (clearTimeout(this._delayedClicks[hH]?.timeoutId), this._delayedClicks[hH] = null), AH(rH, this._previousPickResult)) : AH(rH, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, rH.qE = !0, rH.ignore = !1, DH.ExclusiveDoubleClickMode && this._delayedClicks[hH] && (clearTimeout(this._delayedClicks[hH]?.timeoutId), this._delayedClicks[hH] = null), AH(rH, this._currentPickResult)), tH = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = hH))
            }
          }
          tH || AH(rH, this._currentPickResult)
        }, this._onPointerMove = HH => {
          if (this._updatePointerPosition(HH), this._latestPointerMoveEvents.set(HH.pointerId, {
              event: HH,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > DH.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > DH.DragMovementThreshold), SH.isPointerLock && SH._verifyPointerLock(), this._checkPrePointerObservable(null, HH, HH.inputIndex >= bH.MouseWheelX && HH.inputIndex <= bH.MouseWheelZ ? UH.d.POINTERWHEEL : UH.d.POINTERMOVE)) return;
          if (!rH.cameraToUseForPointers && !rH.activeCamera) return;
          if (rH.skipPointerMovePicking) return void this._processPointerMove(new YH.b, HH);
          this._ensurePointerMovePredicate();
          const BH = rH._registeredActions > 0 || rH.constantlyUpdateMeshUnderPointer ? this._pickMove(HH) : null;
          this._processPointerMove(BH, HH)
        }, this._onPointerDown = HH => {
          const BH = this._activePointerIds.indexOf(-1);
          if (-1 === BH ? this._activePointerIds.push(HH.pointerId) : this._activePointerIds[BH] = HH.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, DH.ExclusiveDoubleClickMode)
            for (let AH = 0; AH < this._delayedClicks.length; AH++)
              if (this._delayedClicks[AH])
                if (HH.button === AH) clearTimeout(this._delayedClicks[AH]?.timeoutId);
                else {
                  const HH = this._delayedClicks[AH].clickInfo;
                  this._doubleClickOccured = !1, HH.singleClick = !0, HH.ignore = !1;
                  const BH = this._delayedClicks[AH].evt,
                    LH = UH.d.POINTERTAP,
                    SH = new UH.g(LH, BH, this._currentPickResult);
                  rH.onPointerObservable.hasObservers() && rH.onPointerObservable.hasSpecificMask(LH) && rH.onPointerObservable.notifyObservers(SH, LH), this._delayedClicks[AH] = null
                } if (this._updatePointerPosition(HH), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = HH.button), rH.preventDefaultOnPointerDown && AH && (HH.preventDefault(), AH.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, HH, UH.d.POINTERDOWN)) return;
          if (!rH.cameraToUseForPointers && !rH.activeCamera) return;
          let LH;
          this._pointerCaptures[HH.pointerId] = !0, rH.pointerDownPredicate || (rH.pointerDownPredicate = HH => HH.jQ && HH.isVisible && HH.isReady() && HH.isEnabled() && (!rH.cameraToUseForPointers || 0 !== (rH.cameraToUseForPointers.layerMask & HH.layerMask))), this._pickedDownMesh = null, LH = rH.skipPointerDownPicking || 0 === rH._registeredActions && !this._checkForPicking() && !rH.onPointerDown ? new YH.b : rH.XY(this._unTranslatedPointerX, this._unTranslatedPointerY, rH.pointerDownPredicate, rH.pointerDownFastCheck, rH.cameraToUseForPointers, rH.pointerDownTrianglePredicate), this._processPointerDown(LH, HH)
        }, this._onPointerUp = HH => {
          const BH = this._activePointerIds.indexOf(HH.pointerId); - 1 !== BH && (this._activePointerIds[BH] = -1, this._activePointerIdsCount--, "touch" === HH.pointerType && this._latestPointerMoveEvents.delete(HH.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(HH), rH.preventDefaultOnPointerUp && AH && (HH.preventDefault(), AH.focus()), this._initClickEvent(rH.onPrePointerObservable, rH.onPointerObservable, HH, ((BH, LH) => {
            if (rH.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !BH.ignore)) {
              if (this._checkPrePointerObservable(null, HH, UH.d.POINTERUP)) return this._swipeButtonPressed === HH.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === HH.buttons && (this._pointerCaptures[HH.pointerId] = !1));
              BH.hasSwiped || (BH.singleClick && rH.onPrePointerObservable.hasSpecificMask(UH.d.POINTERTAP) && this._checkPrePointerObservable(null, HH, UH.d.POINTERTAP) && (this._skipPointerTap = !0), BH.qE && rH.onPrePointerObservable.hasSpecificMask(UH.d.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, HH, UH.d.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[HH.pointerId] ? (0 === HH.buttons && (this._pointerCaptures[HH.pointerId] = !1), (rH.cameraToUseForPointers || rH.activeCamera) && (rH.pointerUpPredicate || (rH.pointerUpPredicate = HH => HH.jQ && HH.isVisible && HH.isReady() && HH.isEnabled() && (!rH.cameraToUseForPointers || 0 !== (rH.cameraToUseForPointers.layerMask & HH.layerMask))), !this._meshPickProceed && (VH && VH.HasTriggers || this._checkForPicking() || rH.onPointerUp) && this._initActionManager(null, BH), LH || (LH = this._currentPickResult), this._processPointerUp(LH, HH, BH), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === HH.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === HH.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = HH => {
          const BH = lH.c.KEYDOWN;
          if (rH.onPreKeyboardObservable.hasObservers()) {
            const LH = new lH.d(BH, HH);
            if (rH.onPreKeyboardObservable.notifyObservers(LH, BH), LH.skipOnKeyboardObservable) return
          }
          if (rH.onKeyboardObservable.hasObservers()) {
            const LH = new lH.g(BH, HH);
            rH.onKeyboardObservable.notifyObservers(LH, BH)
          }
          rH.actionManager && rH.actionManager.processTrigger(14, uH.CreateNewFromScene(rH, HH))
        }, this._onKeyUp = HH => {
          const BH = lH.c.KEYUP;
          if (rH.onPreKeyboardObservable.hasObservers()) {
            const LH = new lH.d(BH, HH);
            if (rH.onPreKeyboardObservable.notifyObservers(LH, BH), LH.skipOnKeyboardObservable) return
          }
          if (rH.onKeyboardObservable.hasObservers()) {
            const LH = new lH.g(BH, HH);
            rH.onKeyboardObservable.notifyObservers(LH, BH)
          }
          rH.actionManager && rH.actionManager.processTrigger(15, uH.CreateNewFromScene(rH, HH))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((AH => {
          AH.deviceType === OH.Mouse ? AH.onInputChangedObservable.add((rH => {
            this._originMouseEvent = rH, rH.inputIndex === bH.LeftClick || rH.inputIndex === bH.MiddleClick || rH.inputIndex === bH.RightClick || rH.inputIndex === bH.BrowserBack || rH.inputIndex === bH.BrowserForward ? BH && 1 === AH.getInput(rH.inputIndex) ? this._onPointerDown(rH) : HH && 0 === AH.getInput(rH.inputIndex) && this._onPointerUp(rH) : LH && (rH.inputIndex === bH.Move ? this._onPointerMove(rH) : rH.inputIndex !== bH.MouseWheelX && rH.inputIndex !== bH.MouseWheelY && rH.inputIndex !== bH.MouseWheelZ || this._onPointerMove(rH))
          })) : AH.deviceType === OH.Touch ? AH.onInputChangedObservable.add((rH => {
            rH.inputIndex === bH.LeftClick && (BH && 1 === AH.getInput(rH.inputIndex) ? (this._onPointerDown(rH), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : HH && 0 === AH.getInput(rH.inputIndex) && (this._onPointerUp(rH), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), LH && rH.inputIndex === bH.Move && this._onPointerMove(rH)
          })) : AH.deviceType === OH.Keyboard && AH.onInputChangedObservable.add((HH => {
            "keydown" === HH.type ? this._onKeyDown(HH) : "keyup" === HH.type && this._onKeyUp(HH)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 ? arguments[2] : void 0,
          AH = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[BH] === HH && (!HH || !HH._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const rH = this._meshUnderPointerId[BH];
        let SH;
        rH && (SH = rH._getActionManagerForTrigger(10), SH && SH.processTrigger(10, new uH(rH, this._pointerX, this._pointerY, HH, AH, {
          pointerId: BH
        }))), HH ? (this._meshUnderPointerId[BH] = HH, this._pointerOverMesh = HH, SH = HH._getActionManagerForTrigger(9), SH && SH.processTrigger(9, new uH(HH, this._pointerX, this._pointerY, HH, AH, {
          pointerId: BH,
          pickResult: LH
        }))) : (delete this._meshUnderPointerId[BH], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: HH,
          pointerId: BH
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(HH) {
        this._pointerOverMesh === HH && (this._pointerOverMesh = null), this._pickedDownMesh === HH && (this._pickedDownMesh = null), this._pickedUpMesh === HH && (this._pickedUpMesh = null);
        for (const BH in this._meshUnderPointerId) this._meshUnderPointerId[BH] === HH && delete this._meshUnderPointerId[BH]
      }
    }
    DH.DragMovementThreshold = 10, DH.LongPressDelay = 500, DH.DoubleClickDelay = 300, DH.ExclusiveDoubleClickMode = !1;
    var wH = LH(41231),
      ZH = LH(38074),
      dH = LH(38610);
    class aH {
      static get UniqueId() {
        const HH = this._UniqueIdCounter;
        return this._UniqueIdCounter++, HH
      }
    }
    aH._UniqueIdCounter = 1;
    var sH = LH(41336),
      JH = LH(41472),
      iH = LH(37974);
    class pH {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var yH, HB, BB, LB, AB, rB, SB, hB, tB, zB, CB, EB, XB, GB, YB, uB, QB, WB, MB, xB, vB, PB, TB, UB, VB, OB, bB, kB, mB, oB, IB, fB, lB, KB, cB, eB, qB, gB, NB, RB, jB, nB, FB, DB, wB, ZB, dB, aB, sB, JB, iB, pB, yB, HL = LH(39595),
      BL = LH(38012);
    const LL = new EH.q,
      AL = new EH.q;
    var rL;
    ! function(HH) {
      HH[HH.BackwardCompatible = 0] = "BackwardCompatible", HH[HH.Intermediate = 1] = "Intermediate", HH[HH.Aggressive = 2] = "Aggressive"
    }(rL || (rL = {}));
    class SL {
      static DefaultMaterialFactory(HH) {
        throw (0, TH.i)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, TH.i)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(HH) {
        HH !== this._clearColor && (this._clearColor = HH, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(HH) {
        if (HH !== this._performancePriority) {
          switch (this._performancePriority = HH, HH) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(HH)
        }
      }
      set forceWireframe(HH) {
        this._forceWireframe !== HH && (this._forceWireframe = HH, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(HH) {
        this._skipFrustumClipping !== HH && (this._skipFrustumClipping = HH)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(HH) {
        this._forcePointsCloud !== HH && (this._forcePointsCloud = HH, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(HH) {
        this._environmentTexture !== HH && (this._environmentTexture = HH, this.onEnvironmentTextureChangedObservable.notifyObservers(HH), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let HH = [];
        HH = HH.concat(this.meshes), HH = HH.concat(this.lights), HH = HH.concat(this.cameras), HH = HH.concat(this.transformNodes);
        for (const BH of this.skeletons) HH = HH.concat(BH.bones);
        return HH
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(HH) {
        this._animationPropertiesOverride = HH
      }
      set onDispose(HH) {
        this._onDisposeObserver && this.uR.remove(this._onDisposeObserver), this._onDisposeObserver = this.uR.add(HH)
      }
      set beforeRender(HH) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), HH && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(HH))
      }
      set afterRender(HH) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), HH && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(HH))
      }
      set beforeCameraRender(HH) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(HH)
      }
      set afterCameraRender(HH) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(HH)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(HH) {
        this._pointerPickingConfiguration.pointerDownPredicate = HH
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(HH) {
        this._pointerPickingConfiguration.pointerUpPredicate = HH
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(HH) {
        this._pointerPickingConfiguration.pointerMovePredicate = HH
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(HH) {
        this._pointerPickingConfiguration.pointerDownFastCheck = HH
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(HH) {
        this._pointerPickingConfiguration.pointerUpFastCheck = HH
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(HH) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = HH
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(HH) {
        this._pointerPickingConfiguration.skipPointerMovePicking = HH
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(HH) {
        this._pointerPickingConfiguration.skipPointerDownPicking = HH
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(HH) {
        this._pointerPickingConfiguration.skipPointerUpPicking = HH
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return DH.DragMovementThreshold
      }
      static set DragMovementThreshold(HH) {
        DH.DragMovementThreshold = HH
      }
      static get LongPressDelay() {
        return DH.LongPressDelay
      }
      static set LongPressDelay(HH) {
        DH.LongPressDelay = HH
      }
      static get DoubleClickDelay() {
        return DH.DoubleClickDelay
      }
      static set DoubleClickDelay(HH) {
        DH.DoubleClickDelay = HH
      }
      static get ExclusiveDoubleClickMode() {
        return DH.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(HH) {
        DH.ExclusiveDoubleClickMode = HH
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? EH.o.ZeroReadOnly
      }
      bindEyePosition(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const AH = this._eyePosition,
          rH = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          SH = this.floatingOriginOffset,
          hH = LL.set(AH.x, AH.y, AH.z, rH ? -1 : 1),
          tH = hH.subtractFromFloatsToRef(SH.x, SH.y, SH.z, 0, AL);
        return HH && (LH ? HH.setFloat3(BH, tH.x, tH.y, tH.z) : HH.setVector4(BH, tH)), hH
      }
      finalizeSceneUbo() {
        const HH = this.getSceneUniformBuffer(),
          BH = this.bindEyePosition(null),
          LH = this.floatingOriginOffset;
        return HH.updateFloat4("vEyePosition", BH.x - LH.x, BH.y - LH.y, BH.z - LH.z, BH.w), HH.update(), HH
      }
      set useRightHandedSystem(HH) {
        this._useRightHandedSystem !== HH && (this._useRightHandedSystem = HH, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(HH) {
        this._currentStepId = HH
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(HH) {
        this._fogEnabled !== HH && (this._fogEnabled = HH, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(HH) {
        this._fogMode !== HH && (this._fogMode = HH, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(HH) {
        this._shadowsEnabled !== HH && (this._shadowsEnabled = HH, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(HH) {
        this._lightsEnabled !== HH && (this._lightsEnabled = HH, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(HH) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), HH && (this._unObserveActiveCameras = (0, iH.i)(HH, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = HH
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(HH) {
        HH !== this._activeCamera && (this._activeCamera = HH, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return SL.DefaultMaterialFactory !== SL._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = SL.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(HH) {
        this._defaultMaterial = HH
      }
      set texturesEnabled(HH) {
        this._texturesEnabled !== HH && (this._texturesEnabled = HH, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(HH) {
        if (this._frameGraph) return this._frameGraph = HH, void(HH || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = HH, HH && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(HH) {
        this._skeletonsEnabled !== HH && (this._skeletonsEnabled = HH, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = SL.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const HH of this._transientComponents) HH.register();
          this._transientComponents.length = 0
        }
      }
      SrH(HH) {
        this._components.push(HH), this._transientComponents.push(HH);
        const BH = HH;
        BH.addFromContainer && BH.serialize && this._serializableComponents.push(BH)
      }
      _getComponent(HH) {
        for (const BH of this._components)
          if (BH.name === HH) return BH;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(HH, BH) {
        this._inputManager = new DH(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new ZH.g(.2, .2, .3, 1), this.onClearColorChangedObservable = new hH.d, this.ambientColor = new ZH.c(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new hH.d, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.dU = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.uR = new hH.d, this._onDisposeObserver = null, this.onBeforeRenderObservable = new hH.d, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new hH.d, this.onAfterRenderCameraObservable = new hH.d, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new hH.d, this.onAfterAnimationsObservable = new hH.d, this.onBeforeDrawPhaseObservable = new hH.d, this.onAfterDrawPhaseObservable = new hH.d, this.onReadyObservable = new hH.d, this.onBeforeCameraRenderObservable = new hH.d, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new hH.d, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new hH.d, this.onAfterActiveMeshesEvaluationObservable = new hH.d, this.onBeforeParticlesRenderingObservable = new hH.d, this.onAfterParticlesRenderingObservable = new hH.d, this.onDataLoadedObservable = new hH.d, this.onNewCameraAddedObservable = new hH.d, this.onCameraRemovedObservable = new hH.d, this.onNewLightAddedObservable = new hH.d, this.onLightRemovedObservable = new hH.d, this.onNewGeometryAddedObservable = new hH.d, this.onGeometryRemovedObservable = new hH.d, this.onNewTransformNodeAddedObservable = new hH.d, this.onTransformNodeRemovedObservable = new hH.d, this.onNewMeshAddedObservable = new hH.d, this.onMeshRemovedObservable = new hH.d, this.onNewSkeletonAddedObservable = new hH.d, this.onSkeletonRemovedObservable = new hH.d, this.onNewParticleSystemAddedObservable = new hH.d, this.onParticleSystemRemovedObservable = new hH.d, this.onNewAnimationGroupAddedObservable = new hH.d, this.onAnimationGroupRemovedObservable = new hH.d, this.onNewMaterialAddedObservable = new hH.d, this.onNewMultiMaterialAddedObservable = new hH.d, this.onMaterialRemovedObservable = new hH.d, this.onMultiMaterialRemovedObservable = new hH.d, this.onNewTextureAddedObservable = new hH.d, this.onTextureRemovedObservable = new hH.d, this.onNewFrameGraphAddedObservable = new hH.d, this.onFrameGraphRemovedObservable = new hH.d, this.onNewObjectRendererAddedObservable = new hH.d, this.onObjectRendererRemovedObservable = new hH.d, this.onNewPostProcessAddedObservable = new hH.d, this.onPostProcessRemovedObservable = new hH.d, this.onNewEffectLayerAddedObservable = new hH.d, this.onEffectLayerRemovedObservable = new hH.d, this.onBeforeRenderTargetsRenderObservable = new hH.d, this.onAfterRenderTargetsRenderObservable = new hH.d, this.onBeforeStepObservable = new hH.d, this.onAfterStepObservable = new hH.d, this.onActiveCameraChanged = new hH.d, this.onActiveCamerasChanged = new hH.d, this.onBeforeRenderingGroupObservable = new hH.d, this.onAfterRenderingGroupObservable = new hH.d, this.onMeshImportedObservable = new hH.d, this.onAnimationFileImportedObservable = new hH.d, this.onEnvironmentTextureChangedObservable = new hH.d, this.onMeshUnderPointerUpdatedObservable = new hH.d, this._registeredForLateAnimationBindings = new tH.e(256), this._pointerPickingConfiguration = new pH, this.onPrePointerObservable = new hH.d, this.onPointerObservable = new hH.d, this.onPreKeyboardObservable = new hH.d, this.onKeyboardObservable = new hH.d, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = SL.FOGMODE_NONE, this.fogColor = new ZH.c(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.HZ = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new EH.o(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new tH.e(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new wH.e, this._activeIndices = new wH.e, this._activeParticles = new wH.e, this._activeBones = new wH.e, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new tH.i(256), this._processedMaterials = new tH.i(256), this._renderTargets = new tH.e(256), this._materialsRenderTargets = new tH.e(256), this._activeParticleSystems = new tH.i(256), this._activeSkeletons = new tH.e(32), this._softwareSkinnedMeshes = new tH.e(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = EH.e.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = xH.c.Create(), this._beforeClearStage = xH.c.Create(), this._beforeRenderTargetClearStage = xH.c.Create(), this._gatherRenderTargetsStage = xH.c.Create(), this._gatherActiveCameraRenderTargetsStage = xH.c.Create(), this._isReadyForMeshStage = xH.c.Create(), this._beforeEvaluateActiveMeshStage = xH.c.Create(), this._evaluateSubMeshStage = xH.c.Create(), this._preActiveMeshStage = xH.c.Create(), this._cameraDrawRenderTargetStage = xH.c.Create(), this._beforeCameraDrawStage = xH.c.Create(), this._beforeRenderTargetDrawStage = xH.c.Create(), this._beforeRenderingGroupDrawStage = xH.c.Create(), this._beforeRenderingMeshStage = xH.c.Create(), this._afterRenderingMeshStage = xH.c.Create(), this._afterRenderingGroupDrawStage = xH.c.Create(), this._afterCameraDrawStage = xH.c.Create(), this._afterCameraPostProcessStage = xH.c.Create(), this._afterRenderTargetDrawStage = xH.c.Create(), this._afterRenderTargetPostProcessStage = xH.c.Create(), this._afterRenderStage = xH.c.Create(), this._pointerMoveStage = xH.c.Create(), this._pointerDownStage = xH.c.Create(), this._pointerUpStage = xH.c.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new hH.d, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const LH = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...BH
        };
        this.defaultCameraLayerMask = LH.defaultCameraLayerMask, this.defaultRenderableLayerMask = LH.defaultRenderableLayerMask, HH = this._engine = HH || PH.d.LastCreatedEngine, LH.virtual ? HH._virtualScenes.push(this) : (PH.d._LastCreatedScene = this, HH.scenes.push(this)), (HH.getCreationOptions().useLargeWorldRendering || BH?.useFloatingOrigin) && ((0, WH.g)(), this._floatingOriginScene = this, WH.d.yN = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new MH.c(this), QH.e && (this.postProcessManager = new QH.e(this)), (0, vH.k)() && this.attachControl(), this._createUbo(), XH.b && (this._imageProcessingConfiguration = new XH.b), this.setDefaultCandidateProviders(), LH.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = LH.useMaterialMeshMap, this.useClonedMeshMap = LH.useClonedMeshMap, BH && BH.virtual || HH.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(HH) {
        return this._defaultSubMeshCandidates.data = HH.jU, this._defaultSubMeshCandidates.length = HH.jU.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = HH => this._getDefaultSubMeshCandidates(HH), this.getIntersectingSubMeshCandidates = (HH, BH) => this._getDefaultSubMeshCandidates(HH), this.getCollidingSubMeshCandidates = (HH, BH) => this._getDefaultSubMeshCandidates(HH)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(HH) {
        this._inputManager.pointerX = HH
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(HH) {
        this._inputManager.pointerY = HH
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
      isCachedMaterialInvalid(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== BH || this._cachedMaterial !== HH || this._cachedVisibility !== LH
      }
      Iu() {
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
      simulatePointerMove(HH, BH) {
        return this._inputManager.simulatePointerMove(HH, BH), this
      }
      simulatePointerDown(HH, BH) {
        return this._inputManager.simulatePointerDown(HH, BH), this
      }
      simulatePointerUp(HH, BH, LH) {
        return this._inputManager.simulatePointerUp(HH, BH, LH), this
      }
      isPointerCaptured() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(HH)
      }
      attachControl() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(HH, BH, LH)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let HH, BH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const LH = this.Iu(),
          AH = LH.currentRenderPassId;
        LH.currentRenderPassId = this.activeCamera?.renderPassId ?? AH;
        let rH = !0;
        for (this._pendingData.length > 0 && (rH = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && rH && (rH = this.depthPeelingRenderer.isReady()), BH && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), HH = 0; HH < this.meshes.length; HH++) {
          const AH = this.meshes[HH];
          if (!AH.jU || 0 === AH.jU.length) continue;
          if (!AH.isReady(!0)) {
            rH = !1;
            continue
          }
          const SH = AH.hasThinInstances || "InstancedMesh" === AH.getClassName() || "InstancedLinesMesh" === AH.getClassName() || LH.getCaps().instancedArrays && AH.instances.length > 0;
          for (let HH = 0, BH = this._isReadyForMeshStage; HH < BH.length; HH++) {
            BH[HH].action(AH, SH) || (rH = !1)
          }
          if (!BH) continue;
          const hH = AH.material || this.defaultMaterial;
          if (hH)
            if (hH._storeEffectOnSubMeshes)
              for (const HH of AH.jU) {
                const BH = HH.eu();
                BH && BH.hasRenderTargetTextures && null != BH.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(BH) && (this._processedMaterials.push(BH), this._materialsRenderTargets.concatWithNoDuplicate(BH.getRenderTargetTextures()))
              } else hH.hasRenderTargetTextures && null != hH.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(hH) && (this._processedMaterials.push(hH), this._materialsRenderTargets.concatWithNoDuplicate(hH.getRenderTargetTextures()))
        }
        if (BH) {
          for (HH = 0; HH < this._materialsRenderTargets.length; ++HH) {
            this._materialsRenderTargets.data[HH].isReadyForRendering() || (rH = !1)
          }
          for (HH = 0; HH < this.customRenderTargets.length; ++HH) {
            this.customRenderTargets[HH].isReadyForRendering() || (rH = !1)
          }
        }
        for (HH = 0; HH < this.geometries.length; HH++) {
          2 === this.geometries[HH].delayLoadState && (rH = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const SH of this.activeCameras) SH.isReady(!0) || (rH = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (rH = !1));
        for (const SH of this.dU) SH.isReady() || (rH = !1);
        if (this.proceduralTexturesEnabled)
          for (const SH of this.proceduralTextures) SH.isReady() || (rH = !1);
        if (this.layers)
          for (const SH of this.layers) SH.isReady() || (rH = !1);
        if (this.effectLayers)
          for (const SH of this.effectLayers) SH.isLayerReady() || (rH = !1);
        for (const SH of this._isReadyChecks) SH.isReady() || (rH = !1);
        return LH.areAllEffectsReady() || (rH = !1), LH.currentRenderPassId = AH, rH
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(HH) {
        this.onBeforeRenderObservable.add(HH)
      }
      unregisterBeforeRender(HH) {
        this.onBeforeRenderObservable.removeCallback(HH)
      }
      registerAfterRender(HH) {
        this.onAfterRenderObservable.add(HH)
      }
      unregisterAfterRender(HH) {
        this.onAfterRenderObservable.removeCallback(HH)
      }
      _executeOnceBeforeRender(HH) {
        const BH = () => {
          HH(), setTimeout((() => {
            this.unregisterBeforeRender(BH)
          }))
        };
        this.registerBeforeRender(BH)
      }
      executeOnceBeforeRender(HH, BH) {
        void 0 !== BH ? setTimeout((() => {
          this._executeOnceBeforeRender(HH)
        }), BH) : this._executeOnceBeforeRender(HH)
      }
      addPendingData(HH) {
        this._pendingData.push(HH)
      }
      removePendingData(HH) {
        const BH = this.isLoading,
          LH = this._pendingData.indexOf(HH); - 1 !== LH && this._pendingData.splice(LH, 1), BH && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(HH) {
        -1 === this._isReadyChecks.indexOf(HH) && this._isReadyChecks.push(HH)
      }
      removeIsReadyCheck(HH) {
        const BH = this._isReadyChecks.indexOf(HH); - 1 !== BH && this._isReadyChecks.splice(BH, 1)
      }
      executeWhenReady(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(HH), null === this._executeWhenReadyTimeoutId && this._checkIsReady(BH)
      }
      async whenReadyAsync() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((BH => {
          this.executeWhenReady((() => {
            BH()
          }), HH)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = SH.e.Now;
        else if (this.onReadyTimeoutDuration > 0 && SH.e.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(HH)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(HH)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = SH.e.Now
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
      setTransformMatrix(HH, BH, LH, AH) {
        this._multiviewSceneUboIsActive = !!(LH && AH && this._multiviewSceneUbo), this._viewUpdateFlag === HH.updateFlag && this._projectionUpdateFlag === BH.updateFlag || (this._viewUpdateFlag = HH.updateFlag, this._projectionUpdateFlag = BH.updateFlag, this._viewMatrix = HH, this._projectionMatrix = BH, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new EH.e), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? dH.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = dH.e.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(LH, AH) : this._sceneUbo.useUbo && (this._sceneUbo.wHH("viewProjection", this._transformMatrix), this._sceneUbo.wHH("view", this._viewMatrix), this._sceneUbo.wHH("projection", this._projectionMatrix), this._sceneUbo.wHH("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(HH, BH) {
        const LH = "boolean" === typeof BH ? BH : BH?.trackUBOsInFrame,
          AH = new GH.c(this._engine, void 0, !1, HH ?? "NQ", void 0, LH);
        return AH.addUniform("viewProjection", 16), AH.addUniform("view", 16), AH.addUniform("projection", 16), AH.addUniform("vEyePosition", 4), AH.addUniform("inverseProjection", 16), AH
      }
      setSceneUniformBuffer(HH) {
        this._sceneUbo = HH, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : EH.o.ZeroReadOnly
      }
      getUniqueId() {
        return aH.UniqueId
      }
      QrH(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(HH), HH._resyncLightSources(), HH.parent || HH._addToSceneRootNodes(), rH.d.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(HH)
          })), BH)) {
          const BH = HH.getChildMeshes();
          for (const HH of BH) this.QrH(HH)
        }
      }
      gR(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const LH = this.meshes.indexOf(HH);
        if (-1 !== LH && (this.meshes.splice(LH, 1), HH.parent || HH._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(HH), this.onMeshRemovedObservable.notifyObservers(HH), BH) {
          const BH = HH.getChildMeshes();
          for (const HH of BH) this.gR(HH)
        }
        return LH
      }
      addTransformNode(HH) {
        this._blockEntityCollection || HH.yN() === this && -1 !== HH._indexInSceneTransformNodesArray || (HH._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(HH), HH.parent || HH._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(HH))
      }
      removeTransformNode(HH) {
        const BH = HH._indexInSceneTransformNodesArray;
        if (-1 !== BH) {
          if (BH !== this.transformNodes.length - 1) {
            const HH = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[BH] = HH, HH._indexInSceneTransformNodesArray = BH
          }
          HH._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), HH.parent || HH._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(HH), BH
      }
      removeSkeleton(HH) {
        const BH = this.skeletons.indexOf(HH);
        return -1 !== BH && (this.skeletons.splice(BH, 1), this.onSkeletonRemovedObservable.notifyObservers(HH), this._executeActiveContainerCleanup(this._activeSkeletons)), BH
      }
      removeMorphTargetManager(HH) {
        const BH = this.morphTargetManagers.indexOf(HH);
        return -1 !== BH && this.morphTargetManagers.splice(BH, 1), BH
      }
      removeLight(HH) {
        const BH = this.lights.indexOf(HH);
        if (-1 !== BH) {
          for (const BH of this.meshes) BH._removeLightSource(HH, !1);
          this.lights.splice(BH, 1), this.sortLightsByPriority(), HH.parent || HH._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(HH)
        }
        return BH
      }
      removeCamera(HH) {
        const BH = this.cameras.indexOf(HH);
        if (-1 !== BH && (this.cameras.splice(BH, 1), HH.parent || HH._removeFromSceneRootNodes()), this.activeCameras) {
          const BH = this.activeCameras.indexOf(HH); - 1 !== BH && this.activeCameras.splice(BH, 1)
        }
        return this.activeCamera === HH && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(HH), BH
      }
      removeParticleSystem(HH) {
        const BH = this.dU.indexOf(HH);
        return -1 !== BH && (this.dU.splice(BH, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(HH), BH
      }
      removeAnimation(HH) {
        const BH = this.animations.indexOf(HH);
        return -1 !== BH && this.animations.splice(BH, 1), BH
      }
      stopAnimation(HH, BH, LH) {}
      removeAnimationGroup(HH) {
        const BH = this.animationGroups.indexOf(HH);
        return -1 !== BH && this.animationGroups.splice(BH, 1), this.onAnimationGroupRemovedObservable.notifyObservers(HH), BH
      }
      removeMultiMaterial(HH) {
        const BH = this.multiMaterials.indexOf(HH);
        return -1 !== BH && this.multiMaterials.splice(BH, 1), this.onMultiMaterialRemovedObservable.notifyObservers(HH), BH
      }
      removeMaterial(HH) {
        const BH = HH._indexInSceneMaterialArray;
        if (-1 !== BH && BH < this.materials.length) {
          if (BH !== this.materials.length - 1) {
            const HH = this.materials[this.materials.length - 1];
            this.materials[BH] = HH, HH._indexInSceneMaterialArray = BH
          }
          HH._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(HH), BH
      }
      removeActionManager(HH) {
        const BH = this.actionManagers.indexOf(HH);
        return -1 !== BH && this.actionManagers.splice(BH, 1), BH
      }
      removeTexture(HH) {
        const BH = this.textures.indexOf(HH);
        return -1 !== BH && this.textures.splice(BH, 1), this.onTextureRemovedObservable.notifyObservers(HH), BH
      }
      removeFrameGraph(HH) {
        const BH = this.frameGraphs.indexOf(HH);
        return -1 !== BH && this.frameGraphs.splice(BH, 1), this.onFrameGraphRemovedObservable.notifyObservers(HH), BH
      }
      removeObjectRenderer(HH) {
        const BH = this.objectRenderers.indexOf(HH);
        return -1 !== BH && this.objectRenderers.splice(BH, 1), this.onObjectRendererRemovedObservable.notifyObservers(HH), BH
      }
      removePostProcess(HH) {
        const BH = this.postProcesses.indexOf(HH);
        return -1 !== BH && this.postProcesses.splice(BH, 1), this.onPostProcessRemovedObservable.notifyObservers(HH), BH
      }
      removeEffectLayer(HH) {
        const BH = this.effectLayers.indexOf(HH);
        return -1 !== BH && this.effectLayers.splice(BH, 1), this.onEffectLayerRemovedObservable.notifyObservers(HH), BH
      }
      addLight(HH) {
        if (!this._blockEntityCollection) {
          this.lights.push(HH), this.sortLightsByPriority(), HH.parent || HH._addToSceneRootNodes();
          for (const BH of this.meshes) - 1 === BH.lightSources.indexOf(HH) && (BH.lightSources.push(HH), BH._resyncLightSources());
          rH.d.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(HH)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(JH.e.CompareLightsPriority)
      }
      addCamera(HH) {
        this._blockEntityCollection || (this.cameras.push(HH), rH.d.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(HH)
        })), HH.parent || HH._addToSceneRootNodes())
      }
      addSkeleton(HH) {
        this._blockEntityCollection || (this.skeletons.push(HH), rH.d.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(HH)
        })))
      }
      addParticleSystem(HH) {
        this._blockEntityCollection || (this.dU.push(HH), rH.d.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(HH)
        })))
      }
      addAnimation(HH) {
        this._blockEntityCollection || this.animations.push(HH)
      }
      addAnimationGroup(HH) {
        this._blockEntityCollection || (this.animationGroups.push(HH), rH.d.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(HH)
        })))
      }
      addMultiMaterial(HH) {
        this._blockEntityCollection || (this.multiMaterials.push(HH), rH.d.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(HH)
        })))
      }
      addMaterial(HH) {
        this._blockEntityCollection || HH.yN() === this && -1 !== HH._indexInSceneMaterialArray || (HH._indexInSceneMaterialArray = this.materials.length, this.materials.push(HH), rH.d.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(HH)
        })))
      }
      addMorphTargetManager(HH) {
        this._blockEntityCollection || this.morphTargetManagers.push(HH)
      }
      addGeometry(HH) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[HH.uniqueId] = this.geometries.length), this.geometries.push(HH))
      }
      addActionManager(HH) {
        this.actionManagers.push(HH)
      }
      addTexture(HH) {
        this._blockEntityCollection || (this.textures.push(HH), this.onNewTextureAddedObservable.notifyObservers(HH))
      }
      addFrameGraph(HH) {
        this.frameGraphs.push(HH), rH.d.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(HH)
        }))
      }
      addObjectRenderer(HH) {
        this.objectRenderers.push(HH), rH.d.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(HH)
        }))
      }
      addPostProcess(HH) {
        this._blockEntityCollection || (this.postProcesses.push(HH), rH.d.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(HH)
        })))
      }
      addEffectLayer(HH) {
        this._blockEntityCollection || (this.effectLayers.push(HH), rH.d.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(HH)
        })))
      }
      switchActiveCamera(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = HH, BH && HH.attachControl())
      }
      setActiveCameraById(HH) {
        const BH = this.getCameraById(HH);
        return BH ? (this.activeCamera = BH, BH) : null
      }
      setActiveCameraByName(HH) {
        const BH = this.getCameraByName(HH);
        return BH ? (this.activeCamera = BH, BH) : null
      }
      getAnimationGroupByName(HH) {
        for (let BH = 0; BH < this.animationGroups.length; BH++)
          if (this.animationGroups[BH].name === HH) return this.animationGroups[BH];
        return null
      }
      _getMaterial(HH, BH) {
        for (let LH = 0; LH < this.materials.length; LH++) {
          const HH = this.materials[LH];
          if (BH(HH)) return HH
        }
        if (HH)
          for (let LH = 0; LH < this.multiMaterials.length; LH++) {
            const HH = this.multiMaterials[LH];
            if (BH(HH)) return HH
          }
        return null
      }
      getMaterialByUniqueID(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(HH, BH)
      }
      getMaterialByUniqueId(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(BH, (BH => BH.uniqueId === HH))
      }
      getMaterialById(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(BH, (BH => BH.id === HH))
      }
      getMaterialByName(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(BH, (BH => BH.name === HH))
      }
      getLastMaterialById(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let LH = this.materials.length - 1; LH >= 0; LH--)
          if (this.materials[LH].id === HH) return this.materials[LH];
        if (BH)
          for (let LH = this.multiMaterials.length - 1; LH >= 0; LH--)
            if (this.multiMaterials[LH].id === HH) return this.multiMaterials[LH];
        return null
      }
      getTextureByUniqueId(HH) {
        for (let BH = 0; BH < this.textures.length; BH++)
          if (this.textures[BH].uniqueId === HH) return this.textures[BH];
        return null
      }
      getTextureByName(HH) {
        for (let BH = 0; BH < this.textures.length; BH++)
          if (this.textures[BH].name === HH) return this.textures[BH];
        return null
      }
      getCameraById(HH) {
        for (let BH = 0; BH < this.cameras.length; BH++)
          if (this.cameras[BH].id === HH) return this.cameras[BH];
        return null
      }
      getCameraByUniqueId(HH) {
        for (let BH = 0; BH < this.cameras.length; BH++)
          if (this.cameras[BH].uniqueId === HH) return this.cameras[BH];
        return null
      }
      getCameraByName(HH) {
        for (let BH = 0; BH < this.cameras.length; BH++)
          if (this.cameras[BH].name === HH) return this.cameras[BH];
        return null
      }
      getBoneById(HH) {
        for (let BH = 0; BH < this.skeletons.length; BH++) {
          const LH = this.skeletons[BH];
          for (let BH = 0; BH < LH.bones.length; BH++)
            if (LH.bones[BH].id === HH) return LH.bones[BH]
        }
        return null
      }
      getBoneByName(HH) {
        for (let BH = 0; BH < this.skeletons.length; BH++) {
          const LH = this.skeletons[BH];
          for (let BH = 0; BH < LH.bones.length; BH++)
            if (LH.bones[BH].name === HH) return LH.bones[BH]
        }
        return null
      }
      getLightByName(HH) {
        for (let BH = 0; BH < this.lights.length; BH++)
          if (this.lights[BH].name === HH) return this.lights[BH];
        return null
      }
      getLightById(HH) {
        for (let BH = 0; BH < this.lights.length; BH++)
          if (this.lights[BH].id === HH) return this.lights[BH];
        return null
      }
      getLightByUniqueId(HH) {
        for (let BH = 0; BH < this.lights.length; BH++)
          if (this.lights[BH].uniqueId === HH) return this.lights[BH];
        return null
      }
      getParticleSystemById(HH) {
        for (let BH = 0; BH < this.dU.length; BH++)
          if (this.dU[BH].id === HH) return this.dU[BH];
        return null
      }
      getGeometryById(HH) {
        for (let BH = 0; BH < this.geometries.length; BH++)
          if (this.geometries[BH].id === HH) return this.geometries[BH];
        return null
      }
      _getGeometryByUniqueId(HH) {
        if (this._geometriesByUniqueId) {
          const BH = this._geometriesByUniqueId[HH];
          if (void 0 !== BH) return this.geometries[BH]
        } else
          for (let BH = 0; BH < this.geometries.length; BH++)
            if (this.geometries[BH].uniqueId === HH) return this.geometries[BH];
        return null
      }
      getFrameGraphByName(HH) {
        for (let BH = 0; BH < this.frameGraphs.length; BH++)
          if (this.frameGraphs[BH].name === HH) return this.frameGraphs[BH];
        return null
      }
      pushGeometry(HH, BH) {
        return !(!BH && this._getGeometryByUniqueId(HH.uniqueId)) && (this.addGeometry(HH), rH.d.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(HH)
        })), !0)
      }
      removeGeometry(HH) {
        let BH;
        if (this._geometriesByUniqueId) {
          if (BH = this._geometriesByUniqueId[HH.uniqueId], void 0 === BH) return !1
        } else if (BH = this.geometries.indexOf(HH), BH < 0) return !1;
        if (BH !== this.geometries.length - 1) {
          const HH = this.geometries[this.geometries.length - 1];
          HH && (this.geometries[BH] = HH, this._geometriesByUniqueId && (this._geometriesByUniqueId[HH.uniqueId] = BH))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[HH.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(HH), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(HH) {
        for (let BH = 0; BH < this.meshes.length; BH++)
          if (this.meshes[BH].id === HH) return this.meshes[BH];
        return null
      }
      getMeshesById(HH) {
        return this.meshes.filter((function(BH) {
          return BH.id === HH
        }))
      }
      getTransformNodeById(HH) {
        for (let BH = 0; BH < this.transformNodes.length; BH++)
          if (this.transformNodes[BH].id === HH) return this.transformNodes[BH];
        return null
      }
      getTransformNodeByUniqueId(HH) {
        for (let BH = 0; BH < this.transformNodes.length; BH++)
          if (this.transformNodes[BH].uniqueId === HH) return this.transformNodes[BH];
        return null
      }
      getTransformNodesById(HH) {
        return this.transformNodes.filter((function(BH) {
          return BH.id === HH
        }))
      }
      getMeshByUniqueId(HH) {
        for (let BH = 0; BH < this.meshes.length; BH++)
          if (this.meshes[BH].uniqueId === HH) return this.meshes[BH];
        return null
      }
      getLastMeshById(HH) {
        for (let BH = this.meshes.length - 1; BH >= 0; BH--)
          if (this.meshes[BH].id === HH) return this.meshes[BH];
        return null
      }
      getLastTransformNodeById(HH) {
        for (let BH = this.transformNodes.length - 1; BH >= 0; BH--)
          if (this.transformNodes[BH].id === HH) return this.transformNodes[BH];
        return null
      }
      getLastEntryById(HH) {
        let BH;
        for (BH = this.meshes.length - 1; BH >= 0; BH--)
          if (this.meshes[BH].id === HH) return this.meshes[BH];
        for (BH = this.transformNodes.length - 1; BH >= 0; BH--)
          if (this.transformNodes[BH].id === HH) return this.transformNodes[BH];
        for (BH = this.cameras.length - 1; BH >= 0; BH--)
          if (this.cameras[BH].id === HH) return this.cameras[BH];
        for (BH = this.lights.length - 1; BH >= 0; BH--)
          if (this.lights[BH].id === HH) return this.lights[BH];
        for (BH = this.skeletons.length - 1; BH >= 0; BH--) {
          const LH = this.skeletons[BH];
          for (let BH = LH.bones.length - 1; BH >= 0; BH--)
            if (LH.bones[BH].id === HH) return LH.bones[BH]
        }
        return null
      }
      getNodeById(HH) {
        const BH = this.getMeshById(HH);
        if (BH) return BH;
        const LH = this.getTransformNodeById(HH);
        if (LH) return LH;
        const AH = this.getLightById(HH);
        if (AH) return AH;
        const rH = this.getCameraById(HH);
        if (rH) return rH;
        const SH = this.getBoneById(HH);
        return SH || null
      }
      getNodeByName(HH) {
        const BH = this.getMeshByName(HH);
        if (BH) return BH;
        const LH = this.getTransformNodeByName(HH);
        if (LH) return LH;
        const AH = this.getLightByName(HH);
        if (AH) return AH;
        const rH = this.getCameraByName(HH);
        if (rH) return rH;
        const SH = this.getBoneByName(HH);
        return SH || null
      }
      getMeshByName(HH) {
        for (let BH = 0; BH < this.meshes.length; BH++)
          if (this.meshes[BH].name === HH) return this.meshes[BH];
        return null
      }
      getTransformNodeByName(HH) {
        for (let BH = 0; BH < this.transformNodes.length; BH++)
          if (this.transformNodes[BH].name === HH) return this.transformNodes[BH];
        return null
      }
      getLastSkeletonById(HH) {
        for (let BH = this.skeletons.length - 1; BH >= 0; BH--)
          if (this.skeletons[BH].id === HH) return this.skeletons[BH];
        return null
      }
      getSkeletonByUniqueId(HH) {
        for (let BH = 0; BH < this.skeletons.length; BH++)
          if (this.skeletons[BH].uniqueId === HH) return this.skeletons[BH];
        return null
      }
      getSkeletonById(HH) {
        for (let BH = 0; BH < this.skeletons.length; BH++)
          if (this.skeletons[BH].id === HH) return this.skeletons[BH];
        return null
      }
      getSkeletonByName(HH) {
        for (let BH = 0; BH < this.skeletons.length; BH++)
          if (this.skeletons[BH].name === HH) return this.skeletons[BH];
        return null
      }
      getMorphTargetManagerById(HH) {
        for (let BH = 0; BH < this.morphTargetManagers.length; BH++)
          if (this.morphTargetManagers[BH].uniqueId === HH) return this.morphTargetManagers[BH];
        return null
      }
      getMorphTargetById(HH) {
        for (let BH = 0; BH < this.morphTargetManagers.length; ++BH) {
          const LH = this.morphTargetManagers[BH];
          for (let BH = 0; BH < LH.numTargets; ++BH) {
            const AH = LH.getTarget(BH);
            if (AH.id === HH) return AH
          }
        }
        return null
      }
      getMorphTargetByName(HH) {
        for (let BH = 0; BH < this.morphTargetManagers.length; ++BH) {
          const LH = this.morphTargetManagers[BH];
          for (let BH = 0; BH < LH.numTargets; ++BH) {
            const AH = LH.getTarget(BH);
            if (AH.name === HH) return AH
          }
        }
        return null
      }
      getPostProcessByName(HH) {
        for (let BH = 0; BH < this.postProcesses.length; ++BH) {
          const LH = this.postProcesses[BH];
          if (LH.name === HH) return LH
        }
        return null
      }
      isActiveMesh(HH) {
        return -1 !== this._activeMeshes.indexOf(HH)
      }
      get uid() {
        return this._uid || (this._uid = AH.i.RandomId()), this._uid
      }
      addExternalData(HH, BH) {
        return this._externalData || (this._externalData = new zH), this._externalData.add(HH, BH)
      }
      getExternalData(HH) {
        return this._externalData ? this._externalData.get(HH) : null
      }
      getOrAddExternalDataWithFactory(HH, BH) {
        return this._externalData || (this._externalData = new zH), this._externalData.getOrAddWithFactory(HH, BH)
      }
      removeExternalData(HH) {
        return this._externalData.remove(HH)
      }
      _evaluateSubMesh(HH, BH, LH, AH) {
        if (AH || HH.isInFrustum(this._frustumPlanes)) {
          for (let AH = 0, rH = this._evaluateSubMeshStage; AH < rH.length; AH++) {
            rH[AH].action(BH, HH)
          }
          const LH = HH.eu();
          null !== LH && void 0 !== LH && (LH.hasRenderTargetTextures && null != LH.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(LH) && (this._processedMaterials.push(LH), this._materialsRenderTargets.concatWithNoDuplicate(LH.getRenderTargetTextures())), this._renderingManager.dispatch(HH, BH, LH))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(HH) {
        this._preventFreeActiveMeshesAndRenderingGroups !== HH && (HH && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = HH)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let HH = 0; HH < this.activeCameras.length; HH++) {
            const BH = this.activeCameras[HH];
            BH && BH._activeMeshes && BH._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let HH = 0; HH < this.textures.length; HH++) {
            const BH = this.textures[HH];
            BH && BH.renderList && BH.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          BH = arguments.length > 1 ? arguments[1] : void 0,
          LH = arguments.length > 2 ? arguments[2] : void 0,
          AH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          SH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const hH = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const HH of hH) HH.objectRenderer._freezeActiveMeshes(AH);
          return this._freezeActiveMeshesCancel = (0, rH.f)((() => {
            let HH = !0,
              BH = !0;
            for (const LH of hH) HH && (HH = LH.objectRenderer._isFrozen), BH && (BH = null !== LH.objectRenderer._freezeActiveMeshesCancel);
            if (HH) return !0;
            if (!BH) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = SH, this._skipEvaluateActiveMeshesCompletely = HH, BH?.()
          }), ((HH, BH) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), BH) {
              const BH = "Scene: Timeout while waiting for meshes to be frozen.";
              LH ? LH(BH) : (HL.e.Error(BH), HH && HL.e.Error(HH))
            } else {
              const BH = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              LH ? LH(BH) : (HL.e.Error(BH), HH && (HL.e.Error(HH), HH.stack && HL.e.Error(HH.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = SH, this._skipEvaluateActiveMeshesCompletely = HH, AH)
              for (let HH = 0; HH < this._activeMeshes.length; HH++) this._activeMeshes.data[HH]._freeze();
            BH && BH()
          } else LH && LH("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let HH = 0; HH < this.meshes.length; HH++) {
          const BH = this.meshes[HH];
          BH._internalAbstractMeshDataInfo && (BH._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const HH = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const BH of HH) BH.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let HH = 0; HH < this._activeMeshes.length; HH++) this._activeMeshes.data[HH]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(HH) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => HH.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const HH = this._activeMeshes.length;
            for (let BH = 0; BH < HH; BH++) {
              this._activeMeshes.data[BH].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const HH = this._activeParticleSystems.length;
            for (let BH = 0; BH < HH; BH++) this._activeParticleSystems.data[BH].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let rH = 0, SH = this._beforeEvaluateActiveMeshStage; rH < SH.length; rH++) {
          SH[rH].action()
        }
        const HH = this.getActiveMeshCandidates(),
          BH = HH.length,
          LH = wH.e.Enabled,
          AH = this.customLODSelector;
        for (let rH = 0; rH < BH; rH++) {
          const BH = HH.data[rH],
            SH = !AH && !BH.xR && !BH._internalMeshDataInfo?._LODLevels.length;
          let hH, tH;
          if ((SH || (hH = BH._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), hH ? hH[1] = -1 : (hH = [BH, -1], BH._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, hH))), !BH.isBlocked) && (LH && this._totalVertices.addCount(BH.getTotalVertices(), !1), BH.isReady() && BH.isEnabled() && !BH.bX.hasAZeroComponent)) {
            if (BH.computeWorldMatrix(), BH.actionManager && BH.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(BH), SH) tH = BH;
            else if (tH = AH ? AH(BH, this.activeCamera) : BH.getLOD(this.activeCamera), hH[0] = tH, hH[1] = this._frameId, void 0 === tH || null === tH) continue;
            if (tH !== BH && 0 !== tH.billboardMode && tH.computeWorldMatrix(), BH._preActivate(), BH.isVisible && BH.visibility > 0 && 0 !== (BH.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || BH.fu || BH.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(BH), this.activeCamera._activeMeshes.push(BH), tH !== BH && tH._activate(this._renderId, !1);
              for (let HH = 0, LH = this._preActiveMeshStage; HH < LH.length; HH++) {
                LH[HH].action(BH)
              }
              BH._activate(this._renderId, !1) && (BH.xR ? BH._internalAbstractMeshDataInfo._actAsRegularMesh && (tH = BH) : tH._internalAbstractMeshDataInfo._onlyForInstances = !1, tH._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(BH, tH)), BH._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let HH = 0; HH < this.dU.length; HH++) {
            const BH = this.dU[HH];
            if (!BH.isStarted() || !BH.emitter) continue;
            const LH = BH.emitter;
            LH.position && !LH.isEnabled() || (this._activeParticleSystems.push(BH), BH.animate(), this._renderingManager.dispatchParticles(BH))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(HH) {
        this._skeletonsEnabled && HH.skeleton && (this._activeSkeletons.pushNoDuplicate(HH.skeleton) && (HH.skeleton.prepare(), this._activeBones.addCount(HH.skeleton.bones.length, !1)), HH.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(HH) && this.frameGraph && HH.applySkeleton(HH.skeleton))
      }
      _activeMesh(HH, BH) {
        this._prepareSkeleton(BH);
        let LH = HH.ESH || HH.xR || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || BH.fu;
        if (BH && BH.jU && BH.jU.length > 0) {
          const AH = this.getActiveSubMeshCandidates(BH),
            rH = AH.length;
          LH = LH || 1 === rH;
          for (let SH = 0; SH < rH; SH++) {
            const rH = AH.data[SH];
            this._evaluateSubMesh(rH, BH, HH, LH)
          }
        }
      }
      updateTransformMatrix(HH) {
        const BH = this.activeCamera;
        if (BH)
          if (BH._renderingMultiview) {
            const LH = BH._rigCameras[0],
              AH = BH._rigCameras[1];
            this.setTransformMatrix(LH.getViewMatrix(), LH.getProjectionMatrix(HH), AH.getViewMatrix(), AH.getProjectionMatrix(HH))
          } else this.setTransformMatrix(BH.getViewMatrix(), BH.getProjectionMatrix(HH))
      }
      _bindFrameBuffer(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (HH && HH._multiviewTexture ? HH._multiviewTexture._bindFrameBuffer() : HH && HH.outputRenderTarget ? HH.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), BH && this._clearFrameBuffer(HH)
      }
      _clearFrameBuffer(HH) {
        if (HH && HH._multiviewTexture);
        else if (HH && HH.outputRenderTarget && !HH._renderingMultiview) {
          const BH = HH.outputRenderTarget;
          BH.onClearObservable.hasObservers() ? BH.onClearObservable.notifyObservers(this._engine) : BH.skipInitialClear || HH.isRightCamera || (this.autoClear && this._engine.clear(BH.clearColor || this._clearColor, !BH._cleared, !0, !0), BH._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(HH, BH) {
        let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (HH && HH._skipRendering) return;
        const rH = this._engine;
        if (this._activeCamera = HH, !this.activeCamera) throw new Error("Active camera not set");
        if (rH.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && LH) {
          let BH = !0;
          HH._renderingMultiview && HH.outputRenderTarget && (BH = HH.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, HH.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), HH._renderingMultiview && HH.outputRenderTarget && (HH.outputRenderTarget.skipInitialClear = BH)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = HH.outputRenderTarget?.renderPassId ?? HH.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let AH = 0; AH < this._softwareSkinnedMeshes.length; AH++) {
          const HH = this._softwareSkinnedMeshes.data[AH];
          HH.applySkeleton(HH.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), HH.customRenderTargets && HH.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(HH.customRenderTargets), BH && BH.customRenderTargets && BH.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(BH.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let AH = 0, tH = this._gatherActiveCameraRenderTargetsStage; AH < tH.length; AH++) {
          tH[AH].action(this._renderTargets)
        }
        let SH = !1;
        if (this.renderTargetsEnabled) {
          let HH;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            AH.i.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const BH = this.getBoundingBoxRenderer?.();
            for (let LH = 0; LH < this._renderTargets.length; LH++) {
              const AH = this._renderTargets.data[LH];
              if (AH._shouldRender()) {
                this._renderId++;
                const LH = AH.activeCamera && AH.activeCamera !== this.activeCamera;
                BH && !HH && (HH = BH.renderList.length > 0 ? BH.renderList.data.slice() : [], HH.length = BH.renderList.length), AH.render(LH, this.dumpNextRenderTargets), SH = !0
              }
            }
            BH && HH && (BH.renderList.data = HH, BH.renderList.length = HH.length), AH.i.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const BH = this.getBoundingBoxRenderer?.();
            BH && !HH && (HH = BH.renderList.length > 0 ? BH.renderList.data.slice() : [], HH.length = BH.renderList.length);
            for (let HH = 0, LH = this._cameraDrawRenderTargetStage; HH < LH.length; HH++) {
              SH = LH[HH].action(this.activeCamera) || SH
            }
            BH && HH && (BH.renderList.data = HH, BH.renderList.length = HH.length)
          }
          this._intermediateRendering = !1
        }
        SH && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || HH._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let AH = 0, tH = this._beforeCameraDrawStage; AH < tH.length; AH++) {
          tH[AH].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const hH = rH.snapshotRendering && 1 === rH.snapshotRenderingMode;
        hH && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !hH), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let AH = 0, tH = this._afterCameraDrawStage; AH < tH.length; AH++) {
          tH[AH].action(this.activeCamera)
        }
        if (this.postProcessManager && !HH._multiviewTexture) {
          const BH = HH.outputRenderTarget ? HH.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(HH.isIntermediate, BH)
        }
        for (let AH = 0, tH = this._afterCameraPostProcessStage; AH < tH.length; AH++) {
          tH[AH].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === HH.cameraRigMode || HH._renderingMultiview) return HH._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(HH, void 0, BH), void this.onAfterRenderCameraObservable.notifyObservers(HH);
        if (HH._useMultiviewToSingleView) this._renderMultiviewToSingleView(HH);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(HH);
          for (let BH = 0; BH < HH._rigCameras.length; BH++) this._renderForCamera(HH._rigCameras[BH], HH)
        }
        this._activeCamera = HH, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(HH)
      }
      _checkIntersections() {
        for (let HH = 0; HH < this._meshesForIntersections.length; HH++) {
          const BH = this._meshesForIntersections.data[HH];
          if (BH.actionManager)
            for (let HH = 0; BH.actionManager && HH < BH.actionManager.actions.length; HH++) {
              const LH = BH.actionManager.actions[HH];
              if (12 === LH.trigger || 13 === LH.trigger) {
                const HH = LH.getTriggerParameter(),
                  AH = HH.mesh ? HH.mesh : HH,
                  rH = AH.rSH(BH, HH.usePreciseIntersection),
                  SH = BH._intersectionsInProgress.indexOf(AH);
                rH && -1 === SH ? 12 === LH.trigger ? (LH._executeCurrent(uH.CreateNew(BH, void 0, AH)), BH._intersectionsInProgress.push(AH)) : 13 === LH.trigger && BH._intersectionsInProgress.push(AH) : !rH && SH > -1 && (13 === LH.trigger && LH._executeCurrent(uH.CreateNew(BH, void 0, AH)), BH.actionManager.hasSpecificTrigger(13, (HH => {
                  const BH = HH.mesh ? HH.mesh : HH;
                  return AH === BH
                })) && 13 !== LH.trigger || BH._intersectionsInProgress.splice(SH, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(HH) {}
      _animate(HH) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let HH = Math.max(SL.MinDeltaTime, Math.min(this._engine.getDeltaTime(), SL.MaxDeltaTime)) + this._timeAccumulator;
          const BH = this._engine.getTimeStep(),
            LH = 1e3 / BH / 1e3;
          let AH = 0;
          const rH = this._engine.getLockstepMaxSteps();
          let SH = Math.floor(HH / BH);
          for (SH = Math.min(SH, rH); HH > 0 && AH < SH;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = BH * LH, this._animate(BH), this.onAfterAnimationsObservable.notifyObservers(this), this.HZ && this._advancePhysicsEngineStep(BH), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, AH++, HH -= BH;
          this._timeAccumulator = HH < 0 ? 0 : HH
        } else {
          const HH = this.useConstantAnimationDeltaTime ? 16 : Math.max(SL.MinDeltaTime, Math.min(this._engine.getDeltaTime(), SL.MaxDeltaTime));
          this._animationRatio = .06 * HH, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.HZ && this._advancePhysicsEngineStep(HH)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(HH) {
        if (HH?.outputRenderTarget && !HH?.isRigCamera && (HH.outputRenderTarget._cleared = !1), HH?.rigCameras?.length)
          for (let BH = 0; BH < HH.rigCameras.length; ++BH) {
            const LH = HH.rigCameras[BH].outputRenderTarget;
            LH && (LH._cleared = !1)
          }
      }
      resetDrawCache(HH) {
        if (this.meshes)
          for (const BH of this.meshes) BH.resetDrawCache(HH)
      }
      _renderWithFrameGraph() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          BH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, HH)
          for (const LH of this.cameras)
            if (LH.update(), 0 !== LH.cameraRigMode)
              for (let HH = 0; HH < LH._rigCameras.length; HH++) LH._rigCameras[HH].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(BH)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(HH) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const BH = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), AH.i.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let HH = 0; HH < this._renderTargets.length; HH++) {
            const LH = this._renderTargets.data[HH],
              AH = LH.activeCamera || BH;
            this._renderRenderTarget(LH, AH, !0, this.dumpNextRenderTargets)
          }
          AH.i.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let LH = 0, AH = this._beforeClearStage; LH < AH.length; LH++) {
          AH[LH].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const BH = this.getActiveMeshCandidates(),
            LH = BH.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let HH = 0; HH < LH; HH++) {
                const LH = BH.data[HH];
                LH._internalAbstractMeshDataInfo._wasActiveLastFrame && LH.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const HH = this._activeParticleSystems.length;
              for (let BH = 0; BH < HH; BH++) this._activeParticleSystems.data[BH].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let AH = 0; AH < LH; AH++) {
              const LH = BH.data[AH];
              LH._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, LH.isBlocked || (this._totalVertices.addCount(LH.getTotalVertices(), !1), LH.isReady() && LH.isEnabled() && !LH.bX.hasAZeroComponent && (LH.computeWorldMatrix(HH), LH.actionManager && LH.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(LH)))
            }
            if (this.particlesEnabled)
              for (let HH = 0; HH < this.dU.length; HH++) {
                const BH = this.dU[HH];
                if (!BH.isStarted() || !BH.emitter) continue;
                const LH = BH.emitter;
                LH.position && !LH.isEnabled() || (this._activeParticleSystems.push(BH), BH.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, HH._shouldRender()) {
          if (this._renderId++, this.activeCamera = BH, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), HH.render(LH, AH)
        }
        this._intermediateRendering = !1
      }
      render() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.mV) return;
        const LH = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(HH, BH)
        } finally {
          this._renderingMeshEvaluationDepth = LH
        }
      }
      _renderFrame(HH, BH) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), WH.d.yN = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const LH of this.activeCameras) this._checkCameraRenderTarget(LH);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), BH || this.animate();
        for (let LH = 0, AH = this._beforeCameraUpdateStage; LH < AH.length; LH++) {
          AH[LH].action()
        }
        if (HH)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let LH = 0; LH < this.activeCameras.length; LH++) {
              const HH = this.activeCameras[LH];
              if (HH.update(), 0 !== HH.cameraRigMode)
                for (let BH = 0; BH < HH._rigCameras.length; BH++) HH._rigCameras[BH].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let LH = 0; LH < this.activeCamera._rigCameras.length; LH++) this.activeCamera._rigCameras[LH].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(HH, BH);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const HH = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            AH.i.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let BH = 0; BH < this.customRenderTargets.length; BH++) {
              const LH = this.customRenderTargets[BH],
                AH = LH.activeCamera || this.activeCamera;
              this._renderRenderTarget(LH, AH, HH !== AH, this.dumpNextRenderTargets)
            }
            AH.i.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = HH?.renderPassId ?? 0, this.activeCamera = HH, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let BH = 0, LH = this._beforeClearStage; BH < LH.length; BH++) {
            LH[BH].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let BH = 0, LH = this._gatherRenderTargetsStage; BH < LH.length; BH++) {
            LH[BH].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let BH = 0; BH < this.activeCameras.length; BH++) this._processSubCameras(this.activeCameras[BH], BH > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let LH = 0, AH = this._afterRenderStage; LH < AH.length; LH++) {
          AH[LH].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let HH = 0; HH < this._toBeDisposed.length; HH++) {
            const BH = this._toBeDisposed[HH];
            BH && BH.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let HH = 0; HH < this.materials.length; HH++) this.materials[HH].freeze()
      }
      unfreezeMaterials() {
        for (let HH = 0; HH < this.materials.length; HH++) this.materials[HH].unfreeze()
      }
      dispose() {
        if (this.mV) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, TH.c)(this.stopAllAnimations)) {
          for (const HH of this._activeAnimatables) HH.onAnimationEndObservable.clear(), HH.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const HH = this._activeRequests.slice();
        for (const SH of HH) SH.abort();
        this._activeRequests.length = 0;
        try {
          this.uR.notifyObservers(this)
        } catch (rH) {
          HL.e.Error("An error occurred while calling onDisposeObservable!", rH)
        }
        this.detachControl();
        const BH = this._engine.getInputElement?.();
        if (BH)
          for (let SH = 0; SH < this.cameras.length; SH++) this.cameras[SH].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (HH => HH.dispose(!0))), this._disposeList(this.transformNodes, (HH => HH.dispose(!0)));
        const LH = this.cameras;
        this._disposeList(LH), this._disposeList(this.dU), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let AH = this._engine.scenes.indexOf(this);
        if (AH > -1 && this._engine.scenes.splice(AH, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, WH.j)(), PH.d._LastCreatedScene === this) {
          PH.d._LastCreatedScene = null;
          let HH = PH.d.Instances.length - 1;
          for (; HH >= 0;) {
            const BH = PH.d.Instances[HH];
            if (BH.scenes.length > 0) {
              PH.d._LastCreatedScene = BH.scenes[this._engine.scenes.length - 1];
              break
            }
            HH--
          }
        }
        AH = this._engine._virtualScenes.indexOf(this), AH > -1 && this._engine._virtualScenes.splice(AH, 1), this._engine.wipeCaches(!0), this.uR.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(HH, BH) {
        const LH = HH.slice(0);
        BH = BH ?? (HH => HH.dispose());
        for (const AH of LH) BH(AH);
        HH.length = 0
      }
      get mV() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let HH = 0; HH < this.meshes.length; HH++) {
          const BH = this.meshes[HH].geometry;
          BH && BH.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const HH of this.textures) {
          HH._buffer && (HH._buffer = null)
        }
      }
      getWorldExtends(HH) {
        const BH = new EH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          LH = new EH.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        HH = HH || (() => !0);
        const AH = this.meshes.filter(HH);
        for (const rH of AH) {
          if (rH.computeWorldMatrix(!0), !rH.jU || 0 === rH.jU.length || rH.infiniteDistance) continue;
          const HH = rH.jF(),
            AH = HH.boundingBox.minimumWorld,
            SH = HH.boundingBox.maximumWorld;
          EH.o.CheckExtends(AH, BH, LH), EH.o.CheckExtends(SH, BH, LH)
        }
        return BH.x === Number.MAX_VALUE ? {
          min: EH.o.Zero(),
          max: EH.o.Zero()
        } : {
          min: BH,
          max: LH
        }
      }
      createPickingRay(HH, BH, LH, AH) {
        throw (0, TH.i)("Ray")
      }
      createPickingRayToRef(HH, BH, LH, AH, rH) {
        throw (0, TH.i)("Ray")
      }
      createPickingRayInCameraSpace(HH, BH, LH) {
        throw (0, TH.i)("Ray")
      }
      createPickingRayInCameraSpaceToRef(HH, BH, LH, AH) {
        throw (0, TH.i)("Ray")
      }
      XY(HH, BH, LH, AH, rH, SH) {
        const hH = (0, TH.i)("Ray", !0);
        return hH && HL.e.Warn(hH), new YH.b
      }
      pickWithBoundingInfo(HH, BH, LH, AH, rH) {
        const SH = (0, TH.i)("Ray", !0);
        return SH && HL.e.Warn(SH), new YH.b
      }
      pickWithRay(HH, BH, LH, AH) {
        throw (0, TH.i)("Ray")
      }
      multiPick(HH, BH, LH, AH, rH) {
        throw (0, TH.i)("Ray")
      }
      multiPickWithRay(HH, BH, LH) {
        throw (0, TH.i)("Ray")
      }
      setPointerOverMesh(HH, BH, LH) {
        this._inputManager.setPointerOverMesh(HH, BH, LH)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const HH of this.geometries) HH._rebuild();
        for (const HH of this.meshes) HH._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const HH of this._components) HH.rebuild();
        for (const HH of this.dU) HH.rebuild();
        if (this.spriteManagers)
          for (const HH of this.spriteManagers) HH.rebuild()
      }
      _rebuildTextures() {
        for (const HH of this.textures) HH._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(HH, BH, LH) {
        if (void 0 === BH) return HH;
        const AH = [];
        for (const rH in HH) {
          const SH = HH[rH];
          CH.b && CH.b.MatchesQuery(SH, BH) && (!LH || LH(SH)) && AH.push(SH)
        }
        return AH
      }
      getMeshesByTags(HH, BH) {
        return this._getByTags(this.meshes, HH, BH)
      }
      getCamerasByTags(HH, BH) {
        return this._getByTags(this.cameras, HH, BH)
      }
      getLightsByTags(HH, BH) {
        return this._getByTags(this.lights, HH, BH)
      }
      getMaterialByTags(HH, BH) {
        return this._getByTags(this.materials, HH, BH).concat(this._getByTags(this.multiMaterials, HH, BH))
      }
      getTransformNodesByTags(HH, BH) {
        return this._getByTags(this.transformNodes, HH, BH)
      }
      setRenderingOrder(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(HH, BH, LH, AH)
      }
      setRenderingAutoClearDepthStencil(HH, BH) {
        let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          AH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(HH, BH, LH, AH)
      }
      getAutoClearDepthStencilSetup(HH) {
        return this._renderingManager.getAutoClearDepthStencilSetup(HH)
      }
      _forceBlockMaterialDirtyMechanism(HH) {
        this._blockMaterialDirtyMechanism = HH
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(HH) {
        this._blockMaterialDirtyMechanism !== HH && (this._blockMaterialDirtyMechanism = HH, HH || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(HH, BH) {
        if (!this._blockMaterialDirtyMechanism)
          for (const LH of this.materials) BH && !BH(LH) || LH.dLH(HH)
      }
      _loadFile(HH, BH, LH, AH, rH, SH, hH) {
        const tH = (0, sH.l)(HH, BH, LH, AH ? this.offlineProvider : void 0, rH, SH, hH);
        return this._activeRequests.push(tH), tH.onCompleteObservable.add((HH => {
          this._activeRequests.splice(this._activeRequests.indexOf(HH), 1)
        })), tH
      }
      async _loadFileAsync(HH, BH, LH, AH, rH) {
        return await new Promise(((SH, hH) => {
          this._loadFile(HH, (HH => {
            SH(HH)
          }), BH, LH, AH, ((HH, BH) => {
            hH(BH)
          }), rH)
        }))
      }
      async _loadDelayedFileAsync(HH, BH, LH) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const AH = `${HH}|${BH?"binary":"string"}`;
        let rH = this._delayedFileRequests.get(AH);
        if (!rH) {
          rH = BH ? this._loadFileAsync(HH, void 0, LH, !0) : this._loadFileAsync(HH, void 0, LH, !1);
          const SH = rH;
          (async () => {
            try {
              await SH
            } catch {}
            this._delayedFileRequests?.delete(AH)
          })(), this._delayedFileRequests.set(AH, rH)
        }
        return await rH
      }
      _requestFile(HH, BH, LH, AH, rH, SH, hH) {
        const tH = (0, sH.r)(HH, BH, LH, AH ? this.offlineProvider : void 0, rH, SH, hH);
        return this._activeRequests.push(tH), tH.onCompleteObservable.add((HH => {
          this._activeRequests.splice(this._activeRequests.indexOf(HH), 1)
        })), tH
      }
      async _requestFileAsync(HH, BH, LH, AH, rH) {
        return await new Promise(((SH, hH) => {
          this._requestFile(HH, (HH => {
            SH(HH)
          }), BH, LH, AH, (HH => {
            hH(HH)
          }), rH)
        }))
      }
      _readFile(HH, BH, LH, AH, rH) {
        const SH = (0, sH.n)(HH, BH, LH, AH, rH);
        return this._activeRequests.push(SH), SH.onCompleteObservable.add((HH => {
          this._activeRequests.splice(this._activeRequests.indexOf(HH), 1)
        })), SH
      }
      async _readFileAsync(HH, BH, LH) {
        return await new Promise(((AH, rH) => {
          this._readFile(HH, (HH => {
            AH(HH)
          }), BH, LH, (HH => {
            rH(HH)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, TH.i)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(HH) {
        return this.setActiveCameraById(HH)
      }
      getMaterialByID(HH) {
        return this.getMaterialById(HH)
      }
      getLastMaterialByID(HH) {
        return this.getLastMaterialById(HH)
      }
      getTextureByUniqueID(HH) {
        return this.getTextureByUniqueId(HH)
      }
      getCameraByID(HH) {
        return this.getCameraById(HH)
      }
      getCameraByUniqueID(HH) {
        return this.getCameraByUniqueId(HH)
      }
      getBoneByID(HH) {
        return this.getBoneById(HH)
      }
      getLightByID(HH) {
        return this.getLightById(HH)
      }
      getLightByUniqueID(HH) {
        return this.getLightByUniqueId(HH)
      }
      getParticleSystemByID(HH) {
        return this.getParticleSystemById(HH)
      }
      getGeometryByID(HH) {
        return this.getGeometryById(HH)
      }
      getMeshByID(HH) {
        return this.getMeshById(HH)
      }
      getMeshByUniqueID(HH) {
        return this.getMeshByUniqueId(HH)
      }
      getLastMeshByID(HH) {
        return this.getLastMeshById(HH)
      }
      getMeshesByID(HH) {
        return this.getMeshesById(HH)
      }
      getTransformNodeByID(HH) {
        return this.getTransformNodeById(HH)
      }
      getTransformNodeByUniqueID(HH) {
        return this.getTransformNodeByUniqueId(HH)
      }
      getTransformNodesByID(HH) {
        return this.getTransformNodesById(HH)
      }
      getNodeByID(HH) {
        return this.getNodeById(HH)
      }
      getLastEntryByID(HH) {
        return this.getLastEntryById(HH)
      }
      getLastSkeletonByID(HH) {
        return this.getLastSkeletonById(HH)
      }
    }
    SL.FOGMODE_NONE = 0, SL.FOGMODE_EXP = 1, SL.FOGMODE_EXP2 = 2, SL.FOGMODE_LINEAR = 3, SL.MinDeltaTime = 1, SL.MaxDeltaTime = 1e3, SL._OriginalDefaultMaterialFactory = SL.DefaultMaterialFactory;
    let hL = !1;

    function tL() {
      hL || (hL = !0, (0, BL.f)("BABYLON.Scene", SL))
    }(yH = SL.prototype).sortActiveAnimatables ?? (yH.sortActiveAnimatables = (0, TH.f)("Scene", "sortActiveAnimatables")), (HB = SL.prototype).beginWeightedAnimation ?? (HB.beginWeightedAnimation = (0, TH.f)("Scene", "beginWeightedAnimation")), (BB = SL.prototype).beginAnimation ?? (BB.beginAnimation = (0, TH.f)("Scene", "beginAnimation")), (LB = SL.prototype).beginHierarchyAnimation ?? (LB.beginHierarchyAnimation = (0, TH.f)("Scene", "beginHierarchyAnimation")), (AB = SL.prototype).beginDirectAnimation ?? (AB.beginDirectAnimation = (0, TH.f)("Scene", "beginDirectAnimation")), (rB = SL.prototype).beginDirectHierarchyAnimation ?? (rB.beginDirectHierarchyAnimation = (0, TH.f)("Scene", "beginDirectHierarchyAnimation")), (SB = SL.prototype).getAnimatableByTarget ?? (SB.getAnimatableByTarget = (0, TH.f)("Scene", "getAnimatableByTarget")), (hB = SL.prototype).getAllAnimatablesByTarget ?? (hB.getAllAnimatablesByTarget = (0, TH.f)("Scene", "getAllAnimatablesByTarget")), (tB = SL.prototype).stopAllAnimations ?? (tB.stopAllAnimations = (0, TH.f)("Scene", "stopAllAnimations")), (zB = SL.prototype).getSoundByName ?? (zB.getSoundByName = (0, TH.f)("Scene", "getSoundByName")), (CB = SL.prototype).createOrUpdateSelectionOctree ?? (CB.createOrUpdateSelectionOctree = (0, TH.f)("Scene", "createOrUpdateSelectionOctree")), (EB = SL.prototype).createDefaultLight ?? (EB.createDefaultLight = (0, TH.f)("Scene", "createDefaultLight")), (XB = SL.prototype).createDefaultCamera ?? (XB.createDefaultCamera = (0, TH.f)("Scene", "createDefaultCamera")), (GB = SL.prototype).createDefaultCameraOrLight ?? (GB.createDefaultCameraOrLight = (0, TH.f)("Scene", "createDefaultCameraOrLight")), (YB = SL.prototype).createDefaultSkybox ?? (YB.createDefaultSkybox = (0, TH.f)("Scene", "createDefaultSkybox")), (uB = SL.prototype).createDefaultEnvironment ?? (uB.createDefaultEnvironment = (0, TH.f)("Scene", "createDefaultEnvironment")), (QB = SL.prototype).createDefaultVRExperience ?? (QB.createDefaultVRExperience = (0, TH.f)("Scene", "createDefaultVRExperience")), (WB = SL.prototype).createDefaultXRExperienceAsync ?? (WB.createDefaultXRExperienceAsync = (0, TH.f)("Scene", "createDefaultXRExperienceAsync")), (MB = SL.prototype).getGlowLayerByName ?? (MB.getGlowLayerByName = (0, TH.f)("Scene", "getGlowLayerByName")), (xB = SL.prototype).getHighlightLayerByName ?? (xB.getHighlightLayerByName = (0, TH.f)("Scene", "getHighlightLayerByName")), (vB = SL.prototype).getSelectionOutlineLayerByName ?? (vB.getSelectionOutlineLayerByName = (0, TH.f)("Scene", "getSelectionOutlineLayerByName")), (PB = SL.prototype).removeLensFlareSystem ?? (PB.removeLensFlareSystem = (0, TH.f)("Scene", "removeLensFlareSystem")), (TB = SL.prototype).addLensFlareSystem ?? (TB.addLensFlareSystem = (0, TH.f)("Scene", "addLensFlareSystem")), (UB = SL.prototype).getLensFlareSystemByName ?? (UB.getLensFlareSystemByName = (0, TH.f)("Scene", "getLensFlareSystemByName")), (VB = SL.prototype).getLensFlareSystemByID ?? (VB.getLensFlareSystemByID = (0, TH.f)("Scene", "getLensFlareSystemByID")), (OB = SL.prototype).getLensFlareSystemById ?? (OB.getLensFlareSystemById = (0, TH.f)("Scene", "getLensFlareSystemById")), (bB = SL.prototype).getPhysicsEngine ?? (bB.getPhysicsEngine = (0, TH.f)("Scene", "getPhysicsEngine")), (kB = SL.prototype).enablePhysics ?? (kB.enablePhysics = (0, TH.f)("Scene", "enablePhysics")), (mB = SL.prototype).disablePhysicsEngine ?? (mB.disablePhysicsEngine = (0, TH.f)("Scene", "disablePhysicsEngine")), (oB = SL.prototype).isPhysicsEnabled ?? (oB.isPhysicsEnabled = (0, TH.f)("Scene", "isPhysicsEnabled")), (IB = SL.prototype).deleteCompoundImpostor ?? (IB.deleteCompoundImpostor = (0, TH.f)("Scene", "deleteCompoundImpostor")), (fB = SL.prototype).removeReflectionProbe ?? (fB.removeReflectionProbe = (0, TH.f)("Scene", "removeReflectionProbe")), (lB = SL.prototype).addReflectionProbe ?? (lB.addReflectionProbe = (0, TH.f)("Scene", "addReflectionProbe")), (KB = SL.prototype).getBoundingBoxRenderer ?? (KB.getBoundingBoxRenderer = (0, TH.f)("Scene", "getBoundingBoxRenderer")), (cB = SL.prototype).enableDepthRenderer ?? (cB.enableDepthRenderer = (0, TH.f)("Scene", "enableDepthRenderer")), (eB = SL.prototype).disableDepthRenderer ?? (eB.disableDepthRenderer = (0, TH.f)("Scene", "disableDepthRenderer")), (qB = SL.prototype).enableFluidRenderer ?? (qB.enableFluidRenderer = (0, TH.f)("Scene", "enableFluidRenderer")), (gB = SL.prototype).disableFluidRenderer ?? (gB.disableFluidRenderer = (0, TH.f)("Scene", "disableFluidRenderer")), (NB = SL.prototype).enableGeometryBufferRenderer ?? (NB.enableGeometryBufferRenderer = (0, TH.f)("Scene", "enableGeometryBufferRenderer")), (RB = SL.prototype).disableGeometryBufferRenderer ?? (RB.disableGeometryBufferRenderer = (0, TH.f)("Scene", "disableGeometryBufferRenderer")), (jB = SL.prototype).enableIblCdfGenerator ?? (jB.enableIblCdfGenerator = (0, TH.f)("Scene", "enableIblCdfGenerator")), (nB = SL.prototype).disableIblCdfGenerator ?? (nB.disableIblCdfGenerator = (0, TH.f)("Scene", "disableIblCdfGenerator")), (FB = SL.prototype).getOutlineRenderer ?? (FB.getOutlineRenderer = (0, TH.f)("Scene", "getOutlineRenderer")), (DB = SL.prototype).enablePrePassRenderer ?? (DB.enablePrePassRenderer = (0, TH.f)("Scene", "enablePrePassRenderer")), (wB = SL.prototype).disablePrePassRenderer ?? (wB.disablePrePassRenderer = (0, TH.f)("Scene", "disablePrePassRenderer")), (ZB = SL.prototype).enableSubSurfaceForPrePass ?? (ZB.enableSubSurfaceForPrePass = (0, TH.f)("Scene", "enableSubSurfaceForPrePass")), (dB = SL.prototype).disableSubSurfaceForPrePass ?? (dB.disableSubSurfaceForPrePass = (0, TH.f)("Scene", "disableSubSurfaceForPrePass")), (aB = SL.prototype).pickSprite ?? (aB.pickSprite = (0, TH.f)("Scene", "pickSprite")), (sB = SL.prototype).pickSpriteWithRay ?? (sB.pickSpriteWithRay = (0, TH.f)("Scene", "pickSpriteWithRay")), (JB = SL.prototype).multiPickSprite ?? (JB.multiPickSprite = (0, TH.f)("Scene", "multiPickSprite")), (iB = SL.prototype).multiPickSpriteWithRay ?? (iB.multiPickSpriteWithRay = (0, TH.f)("Scene", "multiPickSpriteWithRay")), (pB = SL.prototype).setPointerOverSprite ?? (pB.setPointerOverSprite = (0, TH.f)("Scene", "setPointerOverSprite")), (yB = SL.prototype).getPointerOverSprite ?? (yB.getPointerOverSprite = (0, TH.f)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(SL.prototype, "mainSoundTrack") || Object.defineProperty(SL.prototype, "mainSoundTrack", (0, TH.e)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(SL.prototype, "soundTracks") || Object.defineProperty(SL.prototype, "soundTracks", (0, TH.e)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(SL.prototype, "audioEnabled") || Object.defineProperty(SL.prototype, "audioEnabled", (0, TH.e)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(SL.prototype, "headphone") || Object.defineProperty(SL.prototype, "headphone", (0, TH.e)("Scene", "headphone")), Object.getOwnPropertyDescriptor(SL.prototype, "audioListenerPositionProvider") || Object.defineProperty(SL.prototype, "audioListenerPositionProvider", (0, TH.e)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(SL.prototype, "audioListenerRotationProvider") || Object.defineProperty(SL.prototype, "audioListenerRotationProvider", (0, TH.e)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(SL.prototype, "audioPositioningRefreshRate") || Object.defineProperty(SL.prototype, "audioPositioningRefreshRate", (0, TH.e)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(SL.prototype, "selectionOctree") || Object.defineProperty(SL.prototype, "selectionOctree", (0, TH.e)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(SL.prototype, "debugLayer") || Object.defineProperty(SL.prototype, "debugLayer", (0, TH.e)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(SL.prototype, "gamepadManager") || Object.defineProperty(SL.prototype, "gamepadManager", (0, TH.e)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(SL.prototype, "simplificationQueue") || Object.defineProperty(SL.prototype, "simplificationQueue", (0, TH.e)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(SL.prototype, "onBeforePhysicsObservable") || Object.defineProperty(SL.prototype, "onBeforePhysicsObservable", (0, TH.e)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(SL.prototype, "onAfterPhysicsObservable") || Object.defineProperty(SL.prototype, "onAfterPhysicsObservable", (0, TH.e)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(SL.prototype, "reflectionProbes") || Object.defineProperty(SL.prototype, "reflectionProbes", (0, TH.e)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(SL.prototype, "forceShowBoundingBoxes") || Object.defineProperty(SL.prototype, "forceShowBoundingBoxes", (0, TH.e)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(SL.prototype, "depthPeelingRenderer") || Object.defineProperty(SL.prototype, "depthPeelingRenderer", (0, TH.e)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(SL.prototype, "useOrderIndependentTransparency") || Object.defineProperty(SL.prototype, "useOrderIndependentTransparency", (0, TH.e)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(SL.prototype, "fluidRenderer") || Object.defineProperty(SL.prototype, "fluidRenderer", (0, TH.e)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(SL.prototype, "geometryBufferRenderer") || Object.defineProperty(SL.prototype, "geometryBufferRenderer", (0, TH.e)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(SL.prototype, "iblCdfGenerator") || Object.defineProperty(SL.prototype, "iblCdfGenerator", (0, TH.e)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(SL.prototype, "prePassRenderer") || Object.defineProperty(SL.prototype, "prePassRenderer", (0, TH.e)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(SL.prototype, "subSurfaceConfiguration") || Object.defineProperty(SL.prototype, "subSurfaceConfiguration", (0, TH.e)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(SL.prototype, "spriteManagers") || Object.defineProperty(SL.prototype, "spriteManagers", (0, TH.e)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(SL.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(SL.prototype, "onBeforeSpritesRenderingObservable", (0, TH.e)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(SL.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(SL.prototype, "onAfterSpritesRenderingObservable", (0, TH.e)("Scene", "onAfterSpritesRenderingObservable"))
  },
  41456: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH,
      c: () => rH
    });
    class AH {}
    AH.NAME_EFFECTLAYER = "EffectLayer", AH.NAME_LAYER = "Layer", AH.NAME_LENSFLARESYSTEM = "LensFlareSystem", AH.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", AH.NAME_PARTICLESYSTEM = "ParticleSystem", AH.NAME_GAMEPAD = "Gamepad", AH.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", AH.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", AH.NAME_PREPASSRENDERER = "PrePassRenderer", AH.NAME_DEPTHRENDERER = "DepthRenderer", AH.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", AH.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", AH.NAME_SPRITE = "Sprite", AH.NAME_SUBSURFACE = "SubSurface", AH.NAME_OUTLINERENDERER = "Outline", AH.NAME_PROCEDURALTEXTURE = "ProceduralTexture", AH.NAME_SHADOWGENERATOR = "ShadowGenerator", AH.NAME_OCTREE = "mrH", AH.NAME_PHYSICSENGINE = "PhysicsEngine", AH.NAME_AUDIO = "Audio", AH.NAME_FLUIDRENDERER = "FluidRenderer", AH.NAME_IBLCDFGENERATOR = "iblCDFGenerator", AH.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", AH.STEP_ISREADYFORMESH_EFFECTLAYER = 0, AH.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, AH.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, AH.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, AH.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, AH.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, AH.STEP_BEFORECAMERADRAW_PREPASS = 0, AH.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, AH.STEP_BEFORECAMERADRAW_LAYER = 2, AH.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, AH.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, AH.STEP_BEFORERENDERINGMESH_PREPASS = 0, AH.STEP_BEFORERENDERINGMESH_OUTLINE = 1, AH.STEP_AFTERRENDERINGMESH_PREPASS = 0, AH.STEP_AFTERRENDERINGMESH_OUTLINE = 1, AH.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, AH.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, AH.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, AH.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, AH.STEP_BEFORECLEAR_PREPASS = 1, AH.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, AH.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, AH.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, AH.STEP_AFTERCAMERADRAW_PREPASS = 0, AH.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, AH.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, AH.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, AH.STEP_AFTERCAMERADRAW_LAYER = 4, AH.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, AH.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, AH.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, AH.STEP_AFTERRENDER_AUDIO = 0, AH.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, AH.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, AH.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, AH.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, AH.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, AH.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, AH.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, AH.STEP_POINTERMOVE_SPRITE = 0, AH.STEP_POINTERDOWN_SPRITE = 0, AH.STEP_POINTERUP_SPRITE = 0;
    class rH extends Array {
      constructor(HH) {
        super(...HH)
      }
      static Create() {
        return Object.create(rH.prototype)
      }
      registerStep(HH, BH, LH) {
        let AH, rH = 0;
        for (; rH < this.length; rH++) {
          if (AH = this[rH].index, HH < AH) break
        }
        this.splice(rH, 0, {
          index: HH,
          component: BH,
          action: LH.bind(BH)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  41290: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => hH,
      f: () => tH,
      g: () => AH,
      k: () => rH,
      m: () => SH
    });

    function AH(HH, BH, LH, AH, rH, SH) {
      function hH(HH) {
        if (void 0 !== HH && "function" !== typeof HH) throw new TypeError("Function expected");
        return HH
      }
      for (var tH, zH = AH.kind, CH = "getter" === zH ? "get" : "setter" === zH ? "set" : "value", EH = !BH && HH ? AH.static ? HH : HH.prototype : null, XH = BH || (EH ? Object.getOwnPropertyDescriptor(EH, AH.name) : {}), GH = !1, YH = LH.length - 1; YH >= 0; YH--) {
        var uH = {};
        for (var QH in AH) uH[QH] = "access" === QH ? {} : AH[QH];
        for (var QH in AH.access) uH.access[QH] = AH.access[QH];
        uH.addInitializer = function(HH) {
          if (GH) throw new TypeError("Cannot add initializers after decoration has completed");
          SH.push(hH(HH || null))
        };
        var WH = (0, LH[YH])("accessor" === zH ? {
          get: XH.get,
          set: XH.set
        } : XH[CH], uH);
        if ("accessor" === zH) {
          if (void 0 === WH) continue;
          if (null === WH || "object" !== typeof WH) throw new TypeError("Object expected");
          (tH = hH(WH.get)) && (XH.get = tH), (tH = hH(WH.set)) && (XH.set = tH), (tH = hH(WH.init)) && rH.unshift(tH)
        } else(tH = hH(WH)) && ("field" === zH ? rH.unshift(tH) : XH[CH] = tH)
      }
      EH && Object.defineProperty(EH, AH.name, XH), GH = !0
    }

    function rH(HH, BH, LH) {
      for (var AH = arguments.length > 2, rH = 0; rH < BH.length; rH++) LH = AH ? BH[rH].call(HH, LH) : BH[rH].call(HH);
      return AH ? LH : void 0
    }

    function SH(HH, BH, LH) {
      return "symbol" === typeof BH && (BH = BH.description ? "[".concat(BH.description, "]") : ""), Object.defineProperty(HH, "name", {
        configurable: !0,
        value: LH ? "".concat(LH, " ", BH) : BH
      })
    }
    Object.create;
    Object.create;

    function hH(HH, BH, LH, AH) {
      if ("a" === LH && !AH) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof BH ? HH !== BH || !AH : !BH.has(HH)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === LH ? AH : "a" === LH ? AH.call(HH) : AH ? AH.value : BH.get(HH)
    }

    function tH(HH, BH, LH, AH, rH) {
      if ("m" === AH) throw new TypeError("Private method is not writable");
      if ("a" === AH && !rH) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof BH ? HH !== BH || !rH : !BH.has(HH)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === AH ? rH.call(HH, LH) : rH ? rH.value = LH : BH.set(HH, LH), LH
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);