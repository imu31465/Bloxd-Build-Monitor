export const id = 287;
export const ids = [287];
export const modules = {
  41660: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW,
      c: () => bW,
      g: () => wW,
      k: () => cW
    });
    var mW = OW(41453),
      EW = OW(39911),
      NW = OW(41582),
      PW = OW(41484);
    class LW {
      get Ay() {
        return this._isDisposed
      }
      constructor(WW, iW, OW) {
        let EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          NW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          LW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          cW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          wW = arguments.length > 7 ? arguments[7] : void 0,
          tW = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, PW.b)(), WW && WW.bD ? this._engine = WW.bD().VA() : this._engine = WW, this._updatable = OW, this._instanced = LW, this._divisor = wW || 1, this._label = tW, iW instanceof mW.e ? (this._data = null, this._buffer = iW) : (this._data = iW, this._buffer = null), this.byteStride = cW ? EW : EW * Float32Array.BYTES_PER_ELEMENT, NW || this.create()
      }
      createVertexBuffer(WW, iW, OW, mW, EW) {
        let NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          PW = arguments.length > 6 ? arguments[6] : void 0;
        const LW = NW ? iW : iW * Float32Array.BYTES_PER_ELEMENT,
          wW = mW ? NW ? mW : mW * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new cW(this._engine, this, WW, this._updatable, !0, wW, void 0 === EW ? this._instanced : EW, LW, OW, void 0, void 0, !0, this._divisor || PW)
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
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !WW && this._buffer || (WW = WW || this._data, WW && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, WW), this._data = WW) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(WW, this._label), this._data = WW) : this._buffer = this._engine.createVertexBuffer(WW, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.aZ > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.aZ, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.aZ, void 0, this._label));
          EW.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(WW) {
        this.create(WW)
      }
      updateDirectly(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, WW, mW ? iW : iW * Float32Array.BYTES_PER_ELEMENT, OW ? OW * this.byteStride : void 0), this._data = 0 === iW && void 0 === OW ? WW : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class cW {
      get Ay() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(WW) {
        const iW = 0 != WW;
        this._instanceDivisor = WW, iW !== this._instanced && (this._instanced = iW, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const WW = this.getData();
        return WW ? Array.isArray(WW) ? WW.length / (this.byteStride / 4) - this.byteOffset / 4 : (WW.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(WW, iW, OW, mW, EW, PW, ZW, xW, lW, AW) {
        let bW, jW = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          UW = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          kW = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          sW = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = WW, "object" === typeof mW && null !== mW ? (bW = mW.updatable ?? !1, EW = mW.postponeInternalCreation, PW = mW.stride, ZW = mW.instanced, xW = mW.offset, lW = mW.size, AW = mW.type, jW = mW.normalized ?? !1, UW = mW.useBytes ?? !1, kW = mW.divisor ?? 1, sW = mW.takeBufferOwnership ?? !1, this._label = mW.label) : bW = !!mW, iW instanceof LW ? (this._buffer = iW, this._ownsBuffer = sW) : (this._buffer = new LW(WW, iW, bW, PW, EW, ZW, UW, kW, this._label), this._ownsBuffer = !0), this.uniqueId = cW._Counter++, this._kind = OW, void 0 === AW) {
          const WW = this.getData();
          this.type = WW ? tW(WW) : cW.FLOAT
        } else this.type = AW;
        const MW = (0, NW.k)(this.type);
        UW ? (this._size = lW || (PW ? PW / MW : wW(OW)), this.byteStride = PW || this._buffer.byteStride || this._size * MW, this.byteOffset = xW || 0) : (this._size = lW || PW || wW(OW), this.byteStride = PW ? PW * MW : this._buffer.byteStride || this._size * MW, this.byteOffset = (xW || 0) * MW), this.normalized = jW, this._instanced = void 0 !== ZW && ZW, this._instanceDivisor = ZW ? kW : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(WW) {
        switch (WW) {
          case cW.BYTE:
            return 0;
          case cW.UNSIGNED_BYTE:
            return 1;
          case cW.SHORT:
            return 2;
          case cW.UNSIGNED_SHORT:
            return 3;
          case cW.INT:
            return 4;
          case cW.UNSIGNED_INT:
            return 5;
          case cW.FLOAT:
            return 6;
          case cW.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${WW}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (cW._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(WW, iW) {
        const OW = this.getData();
        return OW ? (0, NW.j)(OW, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, WW, iW) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, NW.k)(this.type)
      }
      DOW() {
        return this.byteOffset / (0, NW.k)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, NW.k)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(WW) {
        this._buffer.create(WW), this._alignBuffer()
      }
      update(WW) {
        this._buffer.update(WW), this._alignBuffer()
      }
      updateDirectly(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(WW, iW, void 0, OW), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(WW, iW) {
        (0, NW.f)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, WW, this.normalized, ((WW, OW) => {
          for (let mW = 0; mW < this._size; mW++) iW(WW[mW], OW + mW)
        }))
      }
      _alignBuffer() {}
    }

    function wW(WW) {
      switch (WW) {
        case cW.UVKind:
        case cW.UV2Kind:
        case cW.UV3Kind:
        case cW.UV4Kind:
        case cW.UV5Kind:
        case cW.UV6Kind:
          return 2;
        case cW.NormalKind:
        case cW.PositionKind:
          return 3;
        case cW.ColorKind:
        case cW.ColorInstanceKind:
        case cW.MatricesIndicesKind:
        case cW.MatricesIndicesExtraKind:
        case cW.MatricesWeightsKind:
        case cW.MatricesWeightsExtraKind:
        case cW.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + WW + "'")
      }
    }

    function tW(WW) {
      return WW instanceof Int8Array ? cW.BYTE : WW instanceof Uint8Array ? cW.UNSIGNED_BYTE : WW instanceof Int16Array ? cW.SHORT : WW instanceof Uint16Array ? cW.UNSIGNED_SHORT : WW instanceof Int32Array ? cW.INT : WW instanceof Uint32Array ? cW.UNSIGNED_INT : cW.FLOAT
    }

    function ZW(WW) {
      return (0, NW.k)(WW)
    }

    function xW(WW, iW, OW, mW, EW, PW, LW, cW) {
      (0, NW.f)(WW, iW, OW, mW, EW, PW, LW, ((WW, iW) => {
        for (let OW = 0; OW < mW; OW++) cW(WW[OW], iW + OW)
      }))
    }

    function lW(WW, iW, OW, mW, EW, PW, LW, cW) {
      return (0, NW.j)(WW, iW, OW, mW, EW, PW, LW, cW)
    }
    cW._Counter = 0, cW.BYTE = 5120, cW.UNSIGNED_BYTE = 5121, cW.SHORT = 5122, cW.UNSIGNED_SHORT = 5123, cW.INT = 5124, cW.UNSIGNED_INT = 5125, cW.FLOAT = 5126, cW.HALF_FLOAT = 5131, cW.PositionKind = "position", cW.NormalKind = "normal", cW.TangentKind = "tangent", cW.UVKind = "uv", cW.UV2Kind = "uv2", cW.UV3Kind = "uv3", cW.UV4Kind = "uv4", cW.UV5Kind = "uv5", cW.UV6Kind = "uv6", cW.ColorKind = "color", cW.ColorInstanceKind = "instanceColor", cW.MatricesIndicesKind = "matricesIndices", cW.MatricesWeightsKind = "matricesWeights", cW.MatricesIndicesExtraKind = "matricesIndicesExtra", cW.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let AW = !1;

    function bW() {
      AW || (AW = !0, cW.DeduceStride = wW, cW.GetDataType = tW, cW.GetTypeByteLength = ZW, cW.ForEach = xW, cW.GetFloatData = lW)
    }
  },
  41453: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    class mW {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.aZ = 0, this.is32Bits = !1, this.uniqueId = mW._Counter++
      }
    }
    mW._Counter = 0
  },
  41653: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW
    });
    var mW = OW(38241),
      EW = OW(41660);
    class NW {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || iW && !this.pickedMesh.isVerticesDataPresent(EW.k.NormalKind)) return null;
        let OW, NW = this.pickedMesh.IEW();
        0 === NW?.length && (NW = null);
        const PW = mW.l.fA[0],
          LW = mW.l.fA[1],
          cW = mW.l.fA[2];
        if (iW) {
          const WW = this.pickedMesh.getVerticesData(EW.k.NormalKind);
          let iW = NW ? mW.q.FromArrayToRef(WW, 3 * NW[3 * this.faceId], PW) : PW.yWW(WW[3 * this.faceId * 3], WW[3 * this.faceId * 3 + 1], WW[3 * this.faceId * 3 + 2]),
            wW = NW ? mW.q.FromArrayToRef(WW, 3 * NW[3 * this.faceId + 1], LW) : LW.yWW(WW[3 * (3 * this.faceId + 1)], WW[3 * (3 * this.faceId + 1) + 1], WW[3 * (3 * this.faceId + 1) + 2]),
            tW = NW ? mW.q.FromArrayToRef(WW, 3 * NW[3 * this.faceId + 2], cW) : cW.yWW(WW[3 * (3 * this.faceId + 2)], WW[3 * (3 * this.faceId + 2) + 1], WW[3 * (3 * this.faceId + 2) + 2]);
          iW = iW.scale(this.bu), wW = wW.scale(this.bv), tW = tW.scale(1 - this.bu - this.bv), OW = new mW.q(iW.x + wW.x + tW.x, iW.y + wW.y + tW.y, iW.z + wW.z + tW.z)
        } else {
          const WW = this.pickedMesh.getVerticesData(EW.k.PositionKind),
            iW = NW ? mW.q.FromArrayToRef(WW, 3 * NW[3 * this.faceId], PW) : PW.yWW(WW[3 * this.faceId * 3], WW[3 * this.faceId * 3 + 1], WW[3 * this.faceId * 3 + 2]),
            wW = NW ? mW.q.FromArrayToRef(WW, 3 * NW[3 * this.faceId + 1], LW) : LW.yWW(WW[3 * (3 * this.faceId + 1)], WW[3 * (3 * this.faceId + 1) + 1], WW[3 * (3 * this.faceId + 1) + 2]),
            tW = NW ? mW.q.FromArrayToRef(WW, 3 * NW[3 * this.faceId + 2], cW) : cW.yWW(WW[3 * (3 * this.faceId + 2)], WW[3 * (3 * this.faceId + 2) + 1], WW[3 * (3 * this.faceId + 2) + 2]),
            ZW = iW.subtract(wW),
            xW = tW.subtract(wW);
          OW = mW.q.Cross(ZW, xW)
        }
        const wW = (WW, iW) => {
          if (-1 !== this.thinInstanceIndex) {
            const OW = WW._thinInstanceDataStorage.matrixData,
              EW = this.thinInstanceIndex << 4;
            if (OW && OW.length > EW) {
              const WW = mW.l.Matrix[0];
              mW.d.FromArrayToRef(OW, EW, WW), mW.q.TransformNormalToRef(iW, WW, iW)
            }
          }
          let OW = WW.getWorldMatrix();
          WW.nonUniformScaling && (mW.l.Matrix[0].HJ(OW), OW = mW.l.Matrix[0], OW.setTranslationFromFloats(0, 0, 0), OW.invert(), OW.transposeToRef(mW.l.Matrix[1]), OW = mW.l.Matrix[1]), mW.q.TransformNormalToRef(iW, OW, iW)
        };
        if (WW && wW(this.pickedMesh, OW), this.ray) {
          const iW = mW.l.fA[0].HJ(OW);
          WW || wW(this.pickedMesh, iW), mW.q.Dot(iW, this.ray.direction) > 0 && OW.negateInPlace()
        }
        return OW.normalize(), OW
      }
      getTextureCoordinates() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : EW.k.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(WW)) return null;
        const iW = this.pickedMesh.IEW();
        if (!iW) return null;
        const OW = this.pickedMesh.getVerticesData(WW);
        if (!OW) return null;
        let NW = mW.m.FromArray(OW, 2 * iW[3 * this.faceId]),
          PW = mW.m.FromArray(OW, 2 * iW[3 * this.faceId + 1]),
          LW = mW.m.FromArray(OW, 2 * iW[3 * this.faceId + 2]);
        return NW = NW.scale(this.bu), PW = PW.scale(this.bv), LW = LW.scale(1 - this.bu - this.bv), new mW.m(NW.x + PW.x + LW.x, NW.y + PW.y + LW.y)
      }
    }
  },
  41484: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW
    });
    var mW = OW(41384);
    let EW = !1;

    function NW() {
      EW || (EW = !0, mW.ThinEngine.prototype.updateDynamicIndexBuffer = function(WW, iW) {
        let OW;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(WW), OW = WW.is32Bits ? iW instanceof Uint32Array ? iW : new Uint32Array(iW) : iW instanceof Uint16Array ? iW : new Uint16Array(iW), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, OW, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, mW.ThinEngine.prototype.updateDynamicVertexBuffer = function(WW, iW, OW, mW) {
        this.bindArrayBuffer(WW), void 0 === OW && (OW = 0);
        const EW = iW.byteLength || iW.length;
        void 0 === mW || mW >= EW && 0 === OW ? iW instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, OW, new Float32Array(iW)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, OW, iW) : iW instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, OW, new Float32Array(iW).subarray(0, mW / 4)) : (iW = ArrayBuffer.isView(iW) ? new Uint8Array(iW.buffer, iW.byteOffset, mW) : new Uint8Array(iW, 0, mW), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, OW, iW)), this._resetVertexBufferBinding()
      })
    }
  },
  41463: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW
    });
    class mW {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          iW = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = iW, !WW && (WW = iW.createTexture(), !WW)) throw new Error("Unable to create webGL texture");
        this.set(WW)
      }
      setUsage() {}
      set(WW) {
        this._webGLTexture = WW
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(WW) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(WW)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const WW of this._MSAARenderBuffers) this._context.deleteRenderbuffer(WW);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[WW] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  41423: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => kW
    });
    var mW = OW(38276),
      EW = OW(41389),
      NW = OW(38270),
      PW = OW(39911),
      LW = OW(38262),
      cW = OW(41431);
    class wW {
      constructor() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, WW && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(WW) {
        this._zOffset !== WW && (this._zOffset = WW, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(WW) {
        this._zOffsetUnits !== WW && (this._zOffsetUnits = WW, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(WW) {
        this._cullFace !== WW && (this._cullFace = WW, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(WW) {
        this._cull !== WW && (this._cull = WW, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(WW) {
        this._depthFunc !== WW && (this._depthFunc = WW, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(WW) {
        this._depthMask !== WW && (this._depthMask = WW, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(WW) {
        this._depthTest !== WW && (this._depthTest = WW, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(WW) {
        this._frontFace !== WW && (this._frontFace = WW, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(WW) {
        this.isDirty && (this._isCullDirty && (this.cull ? WW.enable(WW.CULL_FACE) : WW.disable(WW.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (WW.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (WW.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? WW.enable(WW.DEPTH_TEST) : WW.disable(WW.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (WW.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (WW.enable(WW.POLYGON_OFFSET_FILL), WW.polygonOffset(this.zOffset, this.zOffsetUnits)) : WW.disable(WW.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (WW.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class tW {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(WW) {
        this._func !== WW && (this._func = WW, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(WW) {
        this._backFunc !== WW && (this._backFunc = WW, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(WW) {
        this._funcRef !== WW && (this._funcRef = WW, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(WW) {
        this._funcMask !== WW && (this._funcMask = WW, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(WW) {
        this._opStencilFail !== WW && (this._opStencilFail = WW, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(WW) {
        this._opDepthFail !== WW && (this._opDepthFail = WW, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(WW) {
        this._opStencilDepthPass !== WW && (this._opStencilDepthPass = WW, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(WW) {
        this._backOpStencilFail !== WW && (this._backOpStencilFail = WW, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(WW) {
        this._backOpDepthFail !== WW && (this._backOpDepthFail = WW, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(WW) {
        this._backOpStencilDepthPass !== WW && (this._backOpStencilDepthPass = WW, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(WW) {
        this._mask !== WW && (this._mask = WW, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(WW) {
        this._enabled !== WW && (this._enabled = WW, this._isStencilTestDirty = !0)
      }
      constructor() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, WW && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(WW) {
        if (!WW) return;
        const iW = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = iW ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = iW ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = iW ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = iW ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = iW ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = iW ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = iW ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = iW ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = iW ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = iW ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = iW ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = iW ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? WW.enable(WW.STENCIL_TEST) : WW.disable(WW.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (WW.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (WW.stencilFuncSeparate(WW.FRONT, this.func, this.funcRef, this.funcMask), WW.stencilFuncSeparate(WW.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (WW.stencilOpSeparate(WW.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), WW.stencilOpSeparate(WW.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class ZW {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = ZW.ALWAYS, this.opStencilFail = ZW.KEEP, this.opDepthFail = ZW.KEEP, this.opStencilDepthPass = ZW.REPLACE, this.backFunc = ZW.ALWAYS, this.backOpStencilFail = ZW.KEEP, this.backOpDepthFail = ZW.KEEP, this.backOpStencilDepthPass = ZW.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(WW) {
        this.func = WW
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(WW) {
        this.backFunc = WW
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(WW) {
        this.funcRef = WW
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(WW) {
        this.funcMask = WW
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(WW) {
        this.opStencilFail = WW
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(WW) {
        this.opDepthFail = WW
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(WW) {
        this.opStencilDepthPass = WW
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(WW) {
        this.backOpStencilFail = WW
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(WW) {
        this.backOpDepthFail = WW
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(WW) {
        this.backOpStencilDepthPass = WW
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(WW) {
        this.mask = WW
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(WW) {
        this.enabled = WW
      }
    }
    ZW.ALWAYS = 519, ZW.KEEP = 7680, ZW.REPLACE = 7681;
    var xW = OW(41433),
      lW = OW(41415),
      AW = OW(41371),
      bW = OW(41406),
      jW = OW(41412);

    function UW(WW, iW) {
      if (iW) {
        const {
          requestAnimationFrame: OW
        } = iW;
        if ("function" === typeof OW) return OW(WW)
      }
      if ((0, bW.j)()) {
        const {
          requestAnimationFrame: OW
        } = iW || window;
        if ("function" === typeof OW) return OW(WW)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(WW);
      return setTimeout(WW, 16)
    }
    class kW {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(WW) {
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
      get nmW() {
        return this._useReverseDepthBuffer
      }
      set nmW(WW) {
        WW !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = WW, this._depthCullingState.depthFunc = WW ? 518 : 515)
      }
      setColorWrite(WW) {
        WW !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = WW)
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
      _getGlobalDefines(WW) {
        if (WW) return this.isNDCHalfZRange ? WW.IS_NDC_HALF_ZRANGE = "" : delete WW.IS_NDC_HALF_ZRANGE, this.nmW ? WW.USE_REVERSE_DEPTHBUFFER = "" : delete WW.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? WW.USE_EXACT_SRGB_CONVERSIONS = "" : delete WW.USE_EXACT_SRGB_CONVERSIONS);
        {
          let WW = "";
          return this.isNDCHalfZRange && (WW += "#define IS_NDC_HALF_ZRANGE"), this.nmW && (WW && (WW += "\n"), WW += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (WW && (WW += "\n"), WW += "#define USE_EXACT_SRGB_CONVERSIONS"), WW
        }
      }
      _rebuildInternalTextures() {
        const WW = this._internalTexturesCache.slice();
        for (const iW of WW) iW._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const WW = this._renderTargetWrapperCache.slice();
        for (const iW of WW) iW.textures?.some((WW => 15 === WW.source)) || iW._rebuild()
      }
      _rebuildEffects() {
        for (const WW in this._compiledEffects) {
          const iW = this._compiledEffects[WW];
          iW._pipelineContext = null, iW._prepareEffect()
        }
        EW.e.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        PW.b.Warn(this.name + " context successfully restored."), this.DA.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(WW) {
        setTimeout((() => {
          this._clearEmptyResources();
          const iW = this._depthCullingState.depthTest,
            OW = this._depthCullingState.depthFunc,
            mW = this._depthCullingState.depthMask,
            EW = this._stencilState.stencilTest;
          WW(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = iW, this._depthCullingState.depthFunc = OW, this._depthCullingState.depthMask = mW, this._stencilState.stencilTest = EW, this._flagContextRestored()
        }), 0)
      }
      get Ay() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(WW) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(WW) {}
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
          const WW = new Uint8Array(4),
            iW = [WW, WW, WW, WW, WW, WW];
          this._emptyCubeTexture = this.createRawCubeTexture(iW, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(WW) {
        this._framebufferDimensionsObject = WW
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(WW) {
        if (!WW) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const iW = this._activeRenderLoops.indexOf(WW);
        iW >= 0 && (this._activeRenderLoops.splice(iW, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: WW
            } = this.customAnimationFrameRequester;
            WW && WW(this.customAnimationFrameRequester.CA), delete this.customAnimationFrameRequester.CA
          }
        } else if (0 !== this._frameHandler) {
          const WW = this._frameHandler;
          if (this._frameHandler = 0, (0, bW.j)()) {
            const {
              cancelAnimationFrame: iW
            } = this.getHostWindow() || window;
            if ("function" === typeof iW) return iW(WW)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(WW);
          return clearTimeout(WW)
        }
      }
      AY() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      SZ() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(WW) {
        this._maxFPS = WW, void 0 !== WW && (this._minFrameTime = WW <= 0 ? Number.MAX_VALUE : 1e3 / WW)
      }
      _isOverFrameTime(WW) {
        if (!WW || void 0 === this._maxFPS) return !1;
        const iW = WW - this._lastFrameTime;
        return this._lastFrameTime = WW, this._renderAccumulator += iW, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(WW) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(WW)) {
          let WW = !0;
          (this.Ay || !this.renderEvenInBackground && this._windowIsBackground) && (WW = !1), WW && (this.AY(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.SZ())
        }
      }
      _renderLoop(WW) {
        this._processFrame(WW), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let WW = 0; WW < this._activeRenderLoops.length; WW++) {
          (0, this._activeRenderLoops[WW])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(WW, iW) {
        return UW(WW, iW)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.CA = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.CA) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(WW) {
        -1 === this._activeRenderLoops.indexOf(WW) && (this._activeRenderLoops.push(WW), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(WW) {
        this._depthCullingState.depthTest = WW
      }
      setZOffset(WW) {
        this._depthCullingState.zOffset = this.nmW ? -WW : WW
      }
      getZOffset() {
        const WW = this._depthCullingState.zOffset;
        return this.nmW ? -WW : WW
      }
      setZOffsetUnits(WW) {
        this._depthCullingState.zOffsetUnits = this.nmW ? -WW : WW
      }
      getZOffsetUnits() {
        const WW = this._depthCullingState.zOffsetUnits;
        return this.nmW ? -WW : WW
      }
      getHostWindow() {
        return (0, bW.j)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(WW) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const WW of this.scenes) WW._rebuildTextures();
        for (const WW of this._virtualScenes) WW._rebuildTextures()
      }
      _releaseRenderTargetWrapper(WW) {
        const iW = this._renderTargetWrapperCache.indexOf(WW); - 1 !== iW && this._renderTargetWrapperCache.splice(iW, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(WW, iW, OW) {
        const mW = iW || this.getRenderWidth(),
          EW = OW || this.getRenderHeight(),
          NW = WW.x || 0,
          PW = WW.y || 0;
        this._cachedViewport = WW, this._viewport(NW * mW, PW * EW, mW * WW.width, EW * WW.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(WW) {
        return new Path2D(WW)
      }
      get description() {
        let WW = this.name + this.version;
        return this._caps.parallelShaderCompile && (WW += " - Parallel shader compilation"), WW
      }
      _createTextureBase(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          LW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          cW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          wW = arguments.length > 7 ? arguments[7] : void 0,
          tW = arguments.length > 8 ? arguments[8] : void 0,
          ZW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          xW = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          lW = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          bW = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          jW = arguments.length > 13 ? arguments[13] : void 0,
          UW = arguments.length > 14 ? arguments[14] : void 0,
          sW = arguments.length > 15 ? arguments[15] : void 0;
        const MW = "data:" === (WW = WW || "").substring(0, 5),
          KW = "blob:" === WW.substring(0, 5),
          SW = MW && -1 !== WW.indexOf(";base64,"),
          YW = xW || new AW.e(this, 1);
        YW !== xW && (YW.label = WW.substring(0, 60));
        const yW = WW;
        !this._transformTextureUrl || SW || xW || ZW || (WW = this._transformTextureUrl(WW)), yW !== WW && (YW._originalUrl = yW);
        const TW = WW.lastIndexOf(".");
        let JW = bW || (TW > -1 ? WW.substring(TW).toLowerCase() : "");
        JW.indexOf("?") > -1 && (JW = JW.split("?")[0]);
        const hW = kW.GetCompatibleTextureLoader(JW, jW);
        mW && mW.addPendingData(YW), YW.url = WW, YW.generateMipMaps = !iW, YW.samplingMode = EW, YW.invertY = OW, YW._useSRGBBuffer = this._getUseSRGBBuffer(!!sW, iW), this._doNotHandleContextLost || (YW._buffer = ZW);
        let HW = null;
        LW && !xW && (HW = YW.onLoadedObservable.add(LW)), xW || this._internalTexturesCache.push(YW);
        const nW = (OW, xW) => {
          mW && mW.removePendingData(YW), WW === yW ? (HW && YW.onLoadedObservable.remove(HW), NW.d.UseFallbackTexture && WW !== NW.d.FallbackTexture && this._createTextureBase(NW.d.FallbackTexture, iW, YW.invertY, mW, EW, null, cW, wW, tW, ZW, YW), OW = (OW || "Unknown error") + (NW.d.UseFallbackTexture ? " - Fallback texture was used" : ""), YW.onErrorObservable.notifyObservers({
            message: OW,
            exception: xW
          }), cW && cW(OW, xW)) : (PW.b.Warn(`Failed to load ${WW}, falling back to ${yW}`), this._createTextureBase(yW, iW, YW.invertY, mW, EW, LW, cW, wW, tW, ZW, YW, lW, bW, jW, UW, sW))
        };
        if (hW) {
          const iW = async WW => {
            (await hW).loadData(WW, YW, ((WW, iW, OW, NW, PW, LW) => {
              LW ? nW("TextureLoader failed to load data") : wW(YW, JW, mW, {
                width: WW,
                height: iW
              }, YW.invertY, !OW, NW, (() => (PW(), !1)), EW)
            }), UW)
          };
          if (ZW) {
            const WW = async WW => {
              try {
                await iW(WW)
              } catch (OW) {
                nW("Failed to parse texture data", OW)
              }
            };
            ZW instanceof ArrayBuffer ? WW(new Uint8Array(ZW)) : ArrayBuffer.isView(ZW) ? WW(ZW) : cW && cW("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(WW, (async WW => {
            try {
              await iW(new Uint8Array(WW))
            } catch (OW) {
              nW("Failed to parse texture data", OW)
            }
          }), void 0, mW ? mW.offlineProvider : void 0, !0, ((WW, iW) => {
            nW("Unable to load " + (WW && WW.responseURL, iW))
          }))
        } else {
          const OW = WW => {
            KW && !this._doNotHandleContextLost && (YW._buffer = WW), wW(YW, JW, mW, WW, YW.invertY, iW, !1, tW, EW)
          };
          !MW || SW ? ZW && ("string" === typeof ZW.decoding || ZW.close) ? OW(ZW) : kW._FileToolsLoadImage(WW || "", OW, nW, mW ? mW.offlineProvider : null, jW, YW.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof ZW || ZW instanceof ArrayBuffer || ArrayBuffer.isView(ZW) || ZW instanceof Blob ? kW._FileToolsLoadImage(ZW, OW, nW, mW ? mW.offlineProvider : null, jW, YW.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : ZW && OW(ZW)
        }
        return YW
      }
      _rebuildBuffers() {
        for (const WW of this._uniformBuffers) WW._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, bW.f)() ? document : null
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
        for (const WW in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, WW) && (this._boundTexturesCache[WW] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(WW) {
        this._name = WW
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
      setHardwareScalingLevel(WW) {
        this._hardwareScalingLevel = WW, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(WW) {
        this._doNotHandleContextLost = WW
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(WW, iW, OW) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new wW, this._stencilStateComposer = new tW, this._stencilState = new ZW, this._alphaState = new xW.c(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new mW.e, this.onCanvasFocusObservable = new mW.e, this.onNewSceneAddedObservable = new mW.e, this.onResizeObservable = new mW.e, this.onCanvasPointerOutObservable = new mW.e, this.onEffectErrorObservable = new mW.e, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new mW.e, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = WW => this._renderLoop(WW), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new mW.e, this.onAfterShaderCompilationObservable = new mW.e, this.onBeginFrameObservable = new mW.e, this.onEndFrameObservable = new mW.e, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new mW.e, this.DA = new mW.e, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.jD = new mW.e, this.onReleaseEffectsObservable = new mW.e, NW.d.Instances.push(this), this.startTime = cW.d.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, LW.c.SetMatrixPrecision(!!iW.useLargeWorldRendering || !!iW.useHighPrecisionMatrix), (0, bW.i)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), iW.antialias = WW ?? iW.antialias, iW.deterministicLockstep = iW.deterministicLockstep ?? !1, iW.lockstepMaxSteps = iW.lockstepMaxSteps ?? 4, iW.timeStep = iW.timeStep ?? 1 / 60, iW.stencil = iW.stencil ?? !0, this._audioContext = iW.audioEngineOptions?.audioContext ?? null, this._audioDestination = iW.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = iW.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!iW.doNotHandleContextLost, this._isStencilEnable = !!iW.stencil, this.useExactSrgbConversions = iW.useExactSrgbConversions ?? !1, this.canvasTabIndex = iW.canvasTabIndex ?? this.canvasTabIndex;
        const EW = (0, bW.j)() && window.devicePixelRatio || 1,
          PW = iW.limitDeviceRatio || EW;
        OW = OW || iW.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = OW, this._hardwareScalingLevel = OW ? 1 / Math.min(PW, EW) : 1, this._lastDevicePixelRatio = EW, this._creationOptions = iW
      }
      resize() {
        let WW, iW, OW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const WW = (0, bW.j)() && window.devicePixelRatio || 1,
            iW = this._lastDevicePixelRatio / WW;
          this._lastDevicePixelRatio = WW, this._hardwareScalingLevel *= iW
        }
        if ((0, bW.j)() && (0, bW.f)())
          if (this._renderingCanvas) {
            const OW = this._renderingCanvas.getBoundingClientRect?.();
            WW = this._renderingCanvas.clientWidth || OW?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, iW = this._renderingCanvas.clientHeight || OW?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else WW = window.innerWidth, iW = window.innerHeight;
        else WW = this._renderingCanvas ? this._renderingCanvas.width : 100, iW = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(WW / this._hardwareScalingLevel, iW / this._hardwareScalingLevel, OW)
      }
      setSize(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (WW |= 0, iW |= 0, !OW && this._renderingCanvas.width === WW && this._renderingCanvas.height === iW) return !1;
        if (this._renderingCanvas.width = WW, this._renderingCanvas.height = iW, this.scenes) {
          for (let WW = 0; WW < this.scenes.length; WW++) {
            const iW = this.scenes[WW];
            for (let WW = 0; WW < iW.cameras.length; WW++) {
              iW.cameras[WW]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW, ZW) {
        throw (0, lW.o)("engine.rawTexture")
      }
      createRawCubeTexture(WW, iW, OW, mW, EW, NW, PW, LW) {
        throw (0, lW.o)("engine.rawTexture")
      }
      createRawTexture3D(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW) {
        throw (0, lW.o)("engine.rawTexture")
      }
      createRawTexture2DArray(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW, ZW) {
        throw (0, lW.o)("engine.rawTexture")
      }
      _sharedInit(WW) {
        this._renderingCanvas = WW
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const WW = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== WW.indexOf("Mobile") || -1 !== WW.indexOf("Mac") && (0, bW.f)() && "ontouchend" in document
        }, this._checkForMobile(), (0, bW.j)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(WW) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(WW, !1)
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
      _createImageBitmapFromSource(WW, iW) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(WW, iW) {
        return createImageBitmap(WW, iW)
      }
      resizeImageBitmap(WW, iW, OW) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(WW) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(WW, iW) {
        if ("undefined" === typeof document) return new OffscreenCanvas(WW, iW);
        const OW = document.createElement("canvas");
        return OW.width = WW, OW.height = iW, OW
      }
      createCanvas(WW, iW) {
        return kW._CreateCanvas(WW, iW)
      }
      static _FileToolsLoadImage(WW, iW, OW, mW, EW, NW, PW) {
        if (!jW.e.loadImage) throw (0, lW.o)("FileTools");
        return jW.e.loadImage(WW, iW, OW, mW, EW, NW, PW)
      }
      _loadFile(WW, iW, OW, mW, EW, NW) {
        const PW = (0, jW.l)(WW, iW, OW, mW, EW, NW);
        return this._activeRequests.push(PW), PW.onCompleteObservable.add((() => {
          const WW = this._activeRequests.indexOf(PW); - 1 !== WW && this._activeRequests.splice(WW, 1)
        })), PW
      }
      static _FileToolsLoadFile(WW, iW, OW, mW, EW, NW) {
        if (jW.e.loadFile) return jW.e.loadFile(WW, iW, OW, mW, EW, NW);
        throw (0, lW.o)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), EW.e.ResetCache();
        for (const iW of this._activeRequests) iW.abort();
        this._boundRenderFunction = null, this.jD.notifyObservers(this), this.jD.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, bW.j)() && window.removeEventListener("resize", this._checkForMobile);
        const WW = NW.d.Instances.indexOf(this);
        WW >= 0 && NW.d.Instances.splice(WW, 1), NW.d.Instances.length || (NW.d.OnEnginesDisposedObservable.notifyObservers(this), NW.d.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(WW) {
        throw (0, lW.o)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(WW, iW) {
        for (let OW = 0; OW < NW.d.Instances.length; OW++) {
          const mW = NW.d.Instances[OW];
          for (let OW = 0; OW < mW.scenes.length; OW++) mW.scenes[OW].markAllMaterialsAsDirty(WW, iW)
        }
      }
      static GetCompatibleTextureLoader(WW, iW) {
        return null
      }
    }
    kW._RenderPassIdCounter = 0, kW._RescalePostProcessFactory = null, kW.CollisionsEpsilon = .001, kW.QueueNewFrame = UW
  },
  41392: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW
    });
    class mW {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? mW.ShadersRepository : mW.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? mW.ShadersStore : mW.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? mW.IncludesShadersStore : mW.IncludesShadersStoreWGSL
      }
    }
    mW.ShadersRepository = "src/Shaders/", mW.ShadersStore = {}, mW.IncludesShadersStore = {}, mW.ShadersRepositoryWGSL = "src/ShadersWGSL/", mW.ShadersStoreWGSL = {}, mW.IncludesShadersStoreWGSL = {}
  },
  41408: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => xW,
      h: () => sW,
      l: () => AW,
      p: () => lW,
      q: () => bW,
      r: () => kW,
      t: () => ZW,
      v: () => wW,
      x: () => tW,
      y: () => cW,
      A: () => LW
    });
    class mW {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(WW) {
        WW && this.program && WW(this.program)
      }
      setEngine(WW) {
        this.engine = WW
      }
      _fillEffectInformation(WW, iW, OW, mW, EW, NW, PW, LW) {
        const cW = this.engine;
        if (cW.supportsUniformBuffers)
          for (const tW in iW) WW.bindUniformBlock(tW, iW[tW]);
        let wW;
        for (this.engine.getUniforms(this, OW).forEach(((WW, iW) => {
            mW[OW[iW]] = WW
          })), this._uniforms = mW, wW = 0; wW < EW.length; wW++) {
          null == WW.getUniform(EW[wW]) && (EW.splice(wW, 1), wW--)
        }
        EW.forEach(((WW, iW) => {
          NW[WW] = iW
        }));
        for (const tW of cW.getAttributes(this, PW)) LW.push(tW)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(WW, iW) {
        const OW = this._valueCache[WW],
          mW = iW.updateFlag;
        if (void 0 !== OW && OW === mW) return !1;
        const EW = iW.wEW();
        let NW = this._matrixValueCache[WW];
        if (void 0 !== OW && null !== OW && void 0 !== NW) {
          let iW = !0;
          for (let WW = 15; WW >= 0; WW--)
            if (NW[WW] !== EW[WW]) {
              iW = !1;
              break
            } if (iW) return this._valueCache[WW] = mW, !1
        }
        return void 0 === NW && (NW = this._matrixValueCache[WW] = new Float32Array(16)), NW.set(EW), this._valueCache[WW] = mW, !0
      }
      _cacheFloat2(WW, iW, OW) {
        let mW = this._valueCache[WW];
        if (!mW || 2 !== mW.length) return mW = [iW, OW], this._valueCache[WW] = mW, !0;
        let EW = !1;
        return mW[0] !== iW && (mW[0] = iW, EW = !0), mW[1] !== OW && (mW[1] = OW, EW = !0), EW
      }
      _cacheFloat3(WW, iW, OW, mW) {
        let EW = this._valueCache[WW];
        if (!EW || 3 !== EW.length) return EW = [iW, OW, mW], this._valueCache[WW] = EW, !0;
        let NW = !1;
        return EW[0] !== iW && (EW[0] = iW, NW = !0), EW[1] !== OW && (EW[1] = OW, NW = !0), EW[2] !== mW && (EW[2] = mW, NW = !0), NW
      }
      _cacheFloat4(WW, iW, OW, mW, EW) {
        let NW = this._valueCache[WW];
        if (!NW || 4 !== NW.length) return NW = [iW, OW, mW, EW], this._valueCache[WW] = NW, !0;
        let PW = !1;
        return NW[0] !== iW && (NW[0] = iW, PW = !0), NW[1] !== OW && (NW[1] = OW, PW = !0), NW[2] !== mW && (NW[2] = mW, PW = !0), NW[3] !== EW && (NW[3] = EW, PW = !0), PW
      }
      setInt(WW, iW) {
        const OW = this._valueCache[WW];
        void 0 !== OW && OW === iW || this.engine.setInt(this._uniforms[WW], iW) && (this._valueCache[WW] = iW)
      }
      setInt2(WW, iW, OW) {
        this._cacheFloat2(WW, iW, OW) && (this.engine.setInt2(this._uniforms[WW], iW, OW) || (this._valueCache[WW] = null))
      }
      setInt3(WW, iW, OW, mW) {
        this._cacheFloat3(WW, iW, OW, mW) && (this.engine.setInt3(this._uniforms[WW], iW, OW, mW) || (this._valueCache[WW] = null))
      }
      setInt4(WW, iW, OW, mW, EW) {
        this._cacheFloat4(WW, iW, OW, mW, EW) && (this.engine.setInt4(this._uniforms[WW], iW, OW, mW, EW) || (this._valueCache[WW] = null))
      }
      setIntArray(WW, iW) {
        this._valueCache[WW] = null, this.engine.setIntArray(this._uniforms[WW], iW)
      }
      setIntArray2(WW, iW) {
        this._valueCache[WW] = null, this.engine.setIntArray2(this._uniforms[WW], iW)
      }
      setIntArray3(WW, iW) {
        this._valueCache[WW] = null, this.engine.setIntArray3(this._uniforms[WW], iW)
      }
      setIntArray4(WW, iW) {
        this._valueCache[WW] = null, this.engine.setIntArray4(this._uniforms[WW], iW)
      }
      setUInt(WW, iW) {
        const OW = this._valueCache[WW];
        void 0 !== OW && OW === iW || this.engine.setUInt(this._uniforms[WW], iW) && (this._valueCache[WW] = iW)
      }
      setUInt2(WW, iW, OW) {
        this._cacheFloat2(WW, iW, OW) && (this.engine.setUInt2(this._uniforms[WW], iW, OW) || (this._valueCache[WW] = null))
      }
      setUInt3(WW, iW, OW, mW) {
        this._cacheFloat3(WW, iW, OW, mW) && (this.engine.setUInt3(this._uniforms[WW], iW, OW, mW) || (this._valueCache[WW] = null))
      }
      setUInt4(WW, iW, OW, mW, EW) {
        this._cacheFloat4(WW, iW, OW, mW, EW) && (this.engine.setUInt4(this._uniforms[WW], iW, OW, mW, EW) || (this._valueCache[WW] = null))
      }
      setUIntArray(WW, iW) {
        this._valueCache[WW] = null, this.engine.setUIntArray(this._uniforms[WW], iW)
      }
      setUIntArray2(WW, iW) {
        this._valueCache[WW] = null, this.engine.setUIntArray2(this._uniforms[WW], iW)
      }
      setUIntArray3(WW, iW) {
        this._valueCache[WW] = null, this.engine.setUIntArray3(this._uniforms[WW], iW)
      }
      setUIntArray4(WW, iW) {
        this._valueCache[WW] = null, this.engine.setUIntArray4(this._uniforms[WW], iW)
      }
      setArray(WW, iW) {
        this._valueCache[WW] = null, this.engine.setArray(this._uniforms[WW], iW)
      }
      setArray2(WW, iW) {
        this._valueCache[WW] = null, this.engine.setArray2(this._uniforms[WW], iW)
      }
      setArray3(WW, iW) {
        this._valueCache[WW] = null, this.engine.setArray3(this._uniforms[WW], iW)
      }
      setArray4(WW, iW) {
        this._valueCache[WW] = null, this.engine.setArray4(this._uniforms[WW], iW)
      }
      setMatrices(WW, iW) {
        iW && (this._valueCache[WW] = null, this.engine.setMatrices(this._uniforms[WW], iW))
      }
      setMatrix(WW, iW) {
        this._cacheMatrix(WW, iW) && (this.engine.setMatrices(this._uniforms[WW], iW.wEW()) || (this._valueCache[WW] = null))
      }
      setMatrix3x3(WW, iW) {
        this._valueCache[WW] = null, this.engine.setMatrix3x3(this._uniforms[WW], iW)
      }
      setMatrix2x2(WW, iW) {
        this._valueCache[WW] = null, this.engine.setMatrix2x2(this._uniforms[WW], iW)
      }
      setFloat(WW, iW) {
        const OW = this._valueCache[WW];
        void 0 !== OW && OW === iW || this.engine.setFloat(this._uniforms[WW], iW) && (this._valueCache[WW] = iW)
      }
      setVector2(WW, iW) {
        this._cacheFloat2(WW, iW.x, iW.y) && (this.engine.setFloat2(this._uniforms[WW], iW.x, iW.y) || (this._valueCache[WW] = null))
      }
      setFloat2(WW, iW, OW) {
        this._cacheFloat2(WW, iW, OW) && (this.engine.setFloat2(this._uniforms[WW], iW, OW) || (this._valueCache[WW] = null))
      }
      setVector3(WW, iW) {
        this._cacheFloat3(WW, iW.x, iW.y, iW.z) && (this.engine.setFloat3(this._uniforms[WW], iW.x, iW.y, iW.z) || (this._valueCache[WW] = null))
      }
      setFloat3(WW, iW, OW, mW) {
        this._cacheFloat3(WW, iW, OW, mW) && (this.engine.setFloat3(this._uniforms[WW], iW, OW, mW) || (this._valueCache[WW] = null))
      }
      setVector4(WW, iW) {
        this._cacheFloat4(WW, iW.x, iW.y, iW.z, iW.w) && (this.engine.setFloat4(this._uniforms[WW], iW.x, iW.y, iW.z, iW.w) || (this._valueCache[WW] = null))
      }
      setQuaternion(WW, iW) {
        this._cacheFloat4(WW, iW.x, iW.y, iW.z, iW.w) && (this.engine.setFloat4(this._uniforms[WW], iW.x, iW.y, iW.z, iW.w) || (this._valueCache[WW] = null))
      }
      setFloat4(WW, iW, OW, mW, EW) {
        this._cacheFloat4(WW, iW, OW, mW, EW) && (this.engine.setFloat4(this._uniforms[WW], iW, OW, mW, EW) || (this._valueCache[WW] = null))
      }
      setColor3(WW, iW) {
        this._cacheFloat3(WW, iW.r, iW.g, iW.b) && (this.engine.setFloat3(this._uniforms[WW], iW.r, iW.g, iW.b) || (this._valueCache[WW] = null))
      }
      setColor4(WW, iW, OW) {
        this._cacheFloat4(WW, iW.r, iW.g, iW.b, OW) && (this.engine.setFloat4(this._uniforms[WW], iW.r, iW.g, iW.b, OW) || (this._valueCache[WW] = null))
      }
      setDirectColor4(WW, iW) {
        this._cacheFloat4(WW, iW.r, iW.g, iW.b, iW.a) && (this.engine.setFloat4(this._uniforms[WW], iW.r, iW.g, iW.b, iW.a) || (this._valueCache[WW] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var EW = OW(41412);
    const NW = new WeakMap,
      PW = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function LW(WW) {
      let iW = NW.get(WW);
      if (!iW) {
        if (!WW) return PW;
        iW = {
          _webGLVersion: WW.TEXTURE_BINDING_3D ? 2 : 1,
          _context: WW,
          parallelShaderCompile: WW.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, NW.set(WW, iW)
      }
      return iW
    }

    function cW(WW) {
      NW.delete(WW)
    }

    function wW(WW, iW, OW, mW, EW, NW) {
      const PW = LW(mW);
      NW || (NW = PW._createShaderProgramInjection ?? xW);
      return NW(WW, UW(iW, "vertex", mW, PW._contextWasLost), UW(OW, "fragment", mW, PW._contextWasLost), mW, EW, PW.validateShaderPrograms)
    }

    function tW(WW, iW, OW, mW, EW) {
      let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        PW = arguments.length > 6 ? arguments[6] : void 0;
      const cW = LW(EW);
      PW || (PW = cW._createShaderProgramInjection ?? xW);
      const wW = cW._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return PW(WW, jW(iW, "vertex", mW, wW, EW, cW._contextWasLost), jW(OW, "fragment", mW, wW, EW, cW._contextWasLost), EW, NW, cW.validateShaderPrograms)
    }

    function ZW(WW, iW) {
      const OW = new mW,
        EW = LW(WW);
      return EW.parallelShaderCompile && !EW.disableParallelShaderCompile && (OW.isParallelCompiled = !0), OW.context = EW._context, OW
    }

    function xW(WW, iW, OW, mW) {
      let EW = arguments.length > 5 ? arguments[5] : void 0;
      const NW = mW.createProgram();
      if (WW.program = NW, !NW) throw new Error("Unable to create program");
      return mW.attachShader(NW, iW), mW.attachShader(NW, OW), mW.linkProgram(NW), WW.context = mW, WW.vertexShader = iW, WW.fragmentShader = OW, WW.isParallelCompiled || AW(WW, mW, EW), NW
    }

    function lW(WW, iW, OW) {
      const mW = WW;
      if (mW._isDisposed) return !1;
      const EW = LW(iW);
      return !!(EW && EW.parallelShaderCompile && EW.parallelShaderCompile.COMPLETION_STATUS_KHR && mW.program && iW.getProgramParameter(mW.program, EW.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (AW(mW, iW, OW), !0)
    }

    function AW(WW, iW, OW) {
      const mW = WW.context,
        EW = WW.vertexShader,
        NW = WW.fragmentShader,
        PW = WW.program;
      if (!mW.getProgramParameter(PW, mW.LINK_STATUS)) {
        if (!iW.getShaderParameter(EW, iW.COMPILE_STATUS)) {
          const OW = iW.getShaderInfoLog(EW);
          if (OW) throw WW.vertexCompilationError = OW, new Error("VERTEX SHADER " + OW)
        }
        if (!iW.getShaderParameter(NW, iW.COMPILE_STATUS)) {
          const OW = iW.getShaderInfoLog(NW);
          if (OW) throw WW.fragmentCompilationError = OW, new Error("FRAGMENT SHADER " + OW)
        }
        const OW = mW.getProgramInfoLog(PW);
        if (OW) throw WW.programLinkError = OW, new Error(OW)
      }
      if (OW) {
        mW.validateProgram(PW);
        if (!mW.getProgramParameter(PW, mW.VALIDATE_STATUS)) {
          const iW = mW.getProgramInfoLog(PW);
          if (iW) throw WW.programValidationError = iW, new Error(iW)
        }
      }
      mW.deleteShader(EW), mW.deleteShader(NW), WW.vertexShader = void 0, WW.fragmentShader = void 0, WW.onCompiled && (WW.onCompiled(), WW.onCompiled = void 0)
    }

    function bW(WW, iW, OW, mW, EW, NW, PW, cW, ZW) {
      let xW = arguments.length > 10 ? arguments[10] : void 0,
        lW = arguments.length > 11 ? arguments[11] : void 0,
        AW = arguments.length > 12 ? arguments[12] : void 0;
      const bW = LW(WW.context);
      lW || (lW = bW.createRawShaderProgramInjection ?? wW), AW || (AW = bW.createShaderProgramInjection ?? tW);
      const jW = WW;
      jW.program = mW ? lW(jW, iW, OW, jW.context, ZW) : AW(jW, iW, OW, cW, jW.context, ZW), jW.program.__SPECTOR_rebuildProgram = PW, xW()
    }

    function jW(WW, iW, OW, mW, NW, PW) {
      return UW((0, EW.h)(WW, OW, mW), iW, NW, PW)
    }

    function UW(WW, iW, OW, mW) {
      const EW = OW.createShader("vertex" === iW ? OW.VERTEX_SHADER : OW.FRAGMENT_SHADER);
      if (!EW) {
        let WW, EW = OW.NO_ERROR;
        for (;
          (WW = OW.getError()) !== OW.NO_ERROR;) EW = WW;
        throw new Error(`Something went wrong while creating a gl ${iW} shader object. gl error=${EW}, gl isContextLost=${OW.isContextLost()}, _contextWasLost=${mW}`)
      }
      return OW.shaderSource(EW, WW), OW.compileShader(EW), EW
    }

    function kW(WW, iW) {
      iW.useProgram(WW)
    }

    function sW(WW, iW) {
      const OW = WW;
      if (!OW.isParallelCompiled) return void iW(WW);
      const mW = OW.onCompiled;
      OW.onCompiled = () => {
        mW?.(), iW(WW)
      }
    }
  },
  41384: (WW, iW, OW) => {
    OW.d(iW, {
      ThinEngine: () => KW
    });
    var mW = OW(41389),
      EW = OW(41408),
      NW = OW(41423),
      PW = OW(41439),
      LW = OW(39911),
      cW = OW(41406);
    class wW {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(WW, iW, OW, mW, EW) {
        if (EW.drawBuffersExtensionDisabled) {
          const iW = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          WW = WW.replace(iW, "")
        }
        return WW
      }
    }
    const tW = /(flat\s)?\s*varying\s*.*/;
    class ZW {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(WW) {
        return WW.replace("attribute", "in")
      }
      varyingCheck(WW, iW) {
        return tW.test(WW)
      }
      varyingProcessor(WW, iW) {
        return WW.replace("varying", iW ? "in" : "out")
      }
      postProcessor(WW, iW, OW) {
        const mW = -1 !== WW.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (WW = (WW = WW.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), OW) {
          const OW = -1 !== WW.search(/layout *\(location *= *0\) *out/g),
            EW = -1 !== iW.indexOf("#define DUAL_SOURCE_BLENDING"),
            NW = EW ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          EW && (WW = "#extension GL_EXT_blend_func_extended : require\n" + WW), WW = (WW = (WW = (WW = (WW = (WW = (WW = WW.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (mW || OW ? "" : NW) + "void main(")
        } else {
          iW.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (WW = "invariant gl_Position;\n" + WW);
          if (-1 !== iW.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + WW
        }
        return WW
      }
    }
    var xW = OW(41446),
      lW = OW(41458),
      AW = OW(41463),
      bW = OW(41371),
      jW = OW(41412),
      UW = OW(41401),
      kW = OW(41467),
      sW = OW(41433);
    class MW {}
    class KW extends NW.b {
      get name() {
        return this._name
      }
      set name(WW) {
        this._name = WW
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return mW.e.ShadersRepository
      }
      static set ShadersRepository(WW) {
        mW.e.ShadersRepository = WW
      }
      get supportsUniformBuffers() {
        return this.bb > 1 && !this.disableUniformBuffers
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
      constructor(WW, iW, OW, mW) {
        if (OW = OW || {}, super(iW ?? OW.antialias, OW, mW), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !WW) return;
        let NW;
        if (WW.getContext) {
          if (NW = WW, void 0 === OW.preserveDrawingBuffer && (OW.preserveDrawingBuffer = !1), void 0 === OW.xrCompatible && (OW.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const WW = navigator.userAgent;
            for (const iW of KW.ExceptionList) {
              const mW = iW.key,
                EW = iW.targets;
              if (new RegExp(mW).test(WW)) {
                if (iW.capture && iW.captureConstraint) {
                  const OW = iW.capture,
                    mW = iW.captureConstraint,
                    EW = new RegExp(OW).exec(WW);
                  if (EW && EW.length > 0) {
                    if (parseInt(EW[EW.length - 1]) >= mW) continue
                  }
                }
                for (const WW of EW) switch (WW) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    OW.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, EW.y)(this._gl)
            } : (this._onContextLost = WW => {
              WW.preventDefault(), this._contextWasLost = !0, (0, EW.y)(this._gl), LW.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, NW.addEventListener("webglcontextrestored", this._onContextRestored, !1), OW.powerPreference = OW.powerPreference || "high-performance"), NW.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (OW.xrCompatible = !1), !OW.disableWebGL2Support) try {
            this._gl = NW.getContext("webgl2", OW) || NW.getContext("experimental-webgl2", OW), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (tW) {}
          if (!this._gl) {
            if (!NW) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = NW.getContext("webgl", OW) || NW.getContext("experimental-webgl", OW)
            } catch (tW) {
              throw new Error("WebGL not supported", {
                cause: tW
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = WW, NW = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const iW = this._gl.getContextAttributes();
          iW && (OW.stencil = iW.stencil)
        }
        this._sharedInit(NW), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== OW.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = OW.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let EW = 0; EW < this._caps.maxVertexAttribs; EW++) this._currentBufferPointers[EW] = new MW;
        this._shaderProcessor = this.bb > 1 ? new ZW : new wW;
        const PW = `Babylon.js v${KW.Version}`;
        LW.b.Log(PW + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", PW);
        const cW = (0, EW.A)(this._gl);
        cW.validateShaderPrograms = this.validateShaderPrograms, cW.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(WW) {
        return null
      }
      areAllEffectsReady() {
        for (const WW in this._compiledEffects) {
          if (!this._compiledEffects[WW].isReady()) return !1
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
        const WW = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != WW && (this._glRenderer = this._gl.getParameter(WW.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(WW.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const iW = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!iW, this._alphaState = new sW.c(this._caps.blendParametersPerTarget), iW && (this._gl.blendEquationSeparateIndexed = iW.blendEquationSeparateiOES.bind(iW), this._gl.blendEquationIndexed = iW.blendEquationiOES.bind(iW), this._gl.blendFuncSeparateIndexed = iW.blendFuncSeparateiOES.bind(iW), this._gl.blendFuncIndexed = iW.blendFunciOES.bind(iW), this._gl.colorMaskIndexed = iW.colorMaskiOES.bind(iW), this._gl.disableIndexed = iW.disableiOES.bind(iW), this._gl.enableIndexed = iW.enableiOES.bind(iW)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const WW = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== WW) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = WW.drawBuffersWEBGL.bind(WW), this._caps.maxDrawBuffers = this._gl.getParameter(WW.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let iW = 0; iW < 16; iW++) this._gl["COLOR_ATTACHMENT" + iW + "_WEBGL"] = WW["COLOR_ATTACHMENT" + iW + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const WW = this._gl.getExtension("WEBGL_depth_texture");
          null != WW && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = WW.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const WW = this._gl.getExtension("OES_vertex_array_object");
          null != WW && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = WW.createVertexArrayOES.bind(WW), this._gl.bindVertexArray = WW.bindVertexArrayOES.bind(WW), this._gl.deleteVertexArray = WW.deleteVertexArrayOES.bind(WW))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const WW = this._gl.getExtension("ANGLE_instanced_arrays");
          null != WW ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = WW.drawArraysInstancedANGLE.bind(WW), this._gl.drawElementsInstanced = WW.drawElementsInstancedANGLE.bind(WW), this._gl.vertexAttribDivisor = WW.vertexAttribDivisorANGLE.bind(WW)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const WW = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            iW = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (WW && iW && (this._caps.highPrecisionShaderSupported = 0 !== WW.precision && 0 !== iW.precision, this._caps.shaderFloatPrecision = Math.min(WW.precision, iW.precision)), !this._shouldUseHighPrecisionShader) {
            const WW = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              iW = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            WW && iW && (this._caps.shaderFloatPrecision = Math.min(WW.precision, iW.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const WW = this._gl.getExtension("EXT_blend_minmax");
          null != WW && (this._caps.blendMinMax = !0, this._gl.MAX = WW.MAX_EXT, this._gl.MIN = WW.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const WW = this._gl.getExtension("EXT_sRGB");
            null != WW && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: WW.SRGB_EXT,
              SRGB8: WW.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: WW.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const WW = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== WW && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && WW)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let OW = 0; OW < this._maxSimultaneousTextures; OW++) this._nextFreeTextureSlots.push(OW);
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
      get bb() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const WW = this._workingCanvas.getContext("2d");
        WW && (this._workingContext = WW)
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
        const WW = this.getGlInfo();
        return WW && WW.renderer ? WW.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const NW = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = NW;
        let PW = 0;
        if (iW && WW) {
          let iW = !0;
          if (this._currentRenderTarget) {
            const OW = this._currentRenderTarget.texture?.format;
            if (void 0 !== OW && (0, kW.i)(OW)) {
              const OW = this._currentRenderTarget.texture?.type;
              void 0 !== OW && (0, kW.m)(OW) ? (KW._TempClearColorUint32[0] = 255 * WW.r, KW._TempClearColorUint32[1] = 255 * WW.g, KW._TempClearColorUint32[2] = 255 * WW.b, KW._TempClearColorUint32[3] = 255 * WW.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, KW._TempClearColorUint32), iW = !1) : (KW._TempClearColorInt32[0] = 255 * WW.r, KW._TempClearColorInt32[1] = 255 * WW.g, KW._TempClearColorInt32[2] = 255 * WW.b, KW._TempClearColorInt32[3] = 255 * WW.a, this._gl.clearBufferiv(this._gl.COLOR, 0, KW._TempClearColorInt32), iW = !1)
            }
          }
          iW && (this._gl.clearColor(WW.r, WW.g, WW.b, void 0 !== WW.a ? WW.a : 1), PW |= this._gl.COLOR_BUFFER_BIT)
        }
        OW && (this.nmW ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), PW |= this._gl.DEPTH_BUFFER_BIT), mW && (this._gl.clearStencil(EW), PW |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(PW)
      }
      _clearColorAttachment(WW, iW, OW, mW) {
        if ((0, kW.i)(OW)) {
          const OW = (0, kW.m)(mW),
            EW = OW ? KW._TempClearColorUint32 : KW._TempClearColorInt32;
          return EW[0] = iW.r, EW[1] = iW.g, EW[2] = iW.b, EW[3] = iW.a, void(OW ? this._gl.clearBufferuiv(this._gl.COLOR, WW, EW) : this._gl.clearBufferiv(this._gl.COLOR, WW, EW))
        }
        KW._TempClearColorFloat32[0] = iW.r, KW._TempClearColorFloat32[1] = iW.g, KW._TempClearColorFloat32[2] = iW.b, KW._TempClearColorFloat32[3] = iW.a, this._gl.clearBufferfv(this._gl.COLOR, WW, KW._TempClearColorFloat32)
      }
      _viewport(WW, iW, OW, mW) {
        WW === this._viewportCached.x && iW === this._viewportCached.y && OW === this._viewportCached.z && mW === this._viewportCached.w || (this._viewportCached.x = WW, this._viewportCached.y = iW, this._viewportCached.z = OW, this._viewportCached.w = mW, this._gl.viewport(WW, iW, OW, mW))
      }
      SZ() {
        super.SZ(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 ? arguments[2] : void 0,
          mW = arguments.length > 3 ? arguments[3] : void 0,
          EW = arguments.length > 4 ? arguments[4] : void 0,
          NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          PW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const cW = WW;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = WW, this._integerMRTAttachmentsMask = !WW.isMulti && WW.texture && (0, kW.i)(WW.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(cW._framebuffer);
        const wW = this._gl;
        WW.isMulti || (WW.is2DArray || WW.is3D ? (wW.framebufferTextureLayer(wW.FRAMEBUFFER, wW.COLOR_ATTACHMENT0, WW.texture._hardwareTexture?.underlyingResource, NW, PW), cW._currentLOD = NW) : WW.isCube ? wW.framebufferTexture2D(wW.FRAMEBUFFER, wW.COLOR_ATTACHMENT0, wW.TEXTURE_CUBE_MAP_POSITIVE_X + iW, WW.texture._hardwareTexture?.underlyingResource, NW) : cW._currentLOD !== NW && (wW.framebufferTexture2D(wW.FRAMEBUFFER, wW.COLOR_ATTACHMENT0, wW.TEXTURE_2D, WW.texture._hardwareTexture?.underlyingResource, NW), cW._currentLOD = NW));
        const tW = WW._depthStencilTexture;
        if (tW) {
          WW.is3D && (WW.texture.width === tW.width && WW.texture.height === tW.height && WW.texture.depth === tW.depth || LW.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const OW = WW._depthStencilTextureWithStencil ? wW.DEPTH_STENCIL_ATTACHMENT : wW.DEPTH_ATTACHMENT;
          WW.is2DArray || WW.is3D ? wW.framebufferTextureLayer(wW.FRAMEBUFFER, OW, tW._hardwareTexture?.underlyingResource, NW, PW) : WW.isCube ? wW.framebufferTexture2D(wW.FRAMEBUFFER, OW, wW.TEXTURE_CUBE_MAP_POSITIVE_X + iW, tW._hardwareTexture?.underlyingResource, NW) : wW.framebufferTexture2D(wW.FRAMEBUFFER, OW, wW.TEXTURE_2D, tW._hardwareTexture?.underlyingResource, NW)
        }
        cW._MSAAFramebuffer && this._bindUnboundFramebuffer(cW._MSAAFramebuffer), this._cachedViewport && !EW ? this.setViewport(this._cachedViewport, OW, mW) : (OW || (OW = WW.width, NW && (OW /= Math.pow(2, NW))), mW || (mW = WW.height, NW && (mW /= Math.pow(2, NW))), this._viewport(0, 0, OW, mW)), this.wipeCaches()
      }
      setStateCullFaceType(WW, iW) {
        const OW = this.cullBackFaces ?? WW ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== OW || iW) && (this._depthCullingState.cullFace = OW)
      }
      setState(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 ? arguments[2] : void 0,
          mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          EW = arguments.length > 4 ? arguments[4] : void 0,
          NW = arguments.length > 5 ? arguments[5] : void 0,
          PW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== WW || OW) && (this._depthCullingState.cull = WW), this.setStateCullFaceType(EW, OW), this.setZOffset(iW), this.setZOffsetUnits(PW);
        const LW = mW ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== LW || OW) && (this._depthCullingState.frontFace = LW), this._stencilStateComposer.stencilMaterial = NW
      }
      _resolveAndGenerateMipMapsFramebuffer(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        WW.disableAutomaticMSAAResolve || (WW.isMulti ? this.resolveMultiFramebuffer(WW) : this.resolveFramebuffer(WW)), iW || (WW.isMulti ? this.generateMipMapsMultiFramebuffer(WW) : this.generateMipMapsFramebuffer(WW))
      }
      _bindUnboundFramebuffer(WW) {
        this._currentFramebuffer !== WW && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, WW), this._currentFramebuffer = WW)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(WW) {
        const iW = this._getTextureTarget(WW);
        this._bindTextureDirectly(iW, WW, !0), this._gl.generateMipmap(iW), this._bindTextureDirectly(iW, null)
      }
      unBindFramebuffer(WW, iW, OW) {
        const mW = WW;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(WW, iW), OW && (mW._MSAAFramebuffer && this._bindUnboundFramebuffer(mW._framebuffer), OW()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(WW) {
        WW.isMulti || !WW.texture?.generateMipMaps || WW.isCube || this.generateMipmaps(WW.texture)
      }
      resolveFramebuffer(WW) {
        const iW = WW,
          OW = this._gl;
        if (!iW._MSAAFramebuffer || iW.isMulti) return;
        let mW = iW.resolveMSAAColors ? OW.COLOR_BUFFER_BIT : 0;
        mW |= iW._generateDepthBuffer && iW.resolveMSAADepth ? OW.DEPTH_BUFFER_BIT : 0, mW |= iW._generateStencilBuffer && iW.resolveMSAAStencil ? OW.STENCIL_BUFFER_BIT : 0, OW.bindFramebuffer(OW.READ_FRAMEBUFFER, iW._MSAAFramebuffer), OW.bindFramebuffer(OW.DRAW_FRAMEBUFFER, iW._framebuffer), OW.blitFramebuffer(0, 0, WW.width, WW.height, 0, 0, WW.width, WW.height, mW, OW.NEAREST)
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
      createVertexBuffer(WW, iW, OW) {
        return this._createVertexBuffer(WW, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(WW, iW) {
        const OW = this._gl.createBuffer();
        if (!OW) throw new Error("Unable to create vertex buffer");
        const mW = new xW.b(OW);
        return this.bindArrayBuffer(mW), "number" !== typeof WW ? WW instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(WW), iW), mW.aZ = 4 * WW.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, WW, iW), mW.aZ = WW.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(WW), iW), mW.aZ = WW), this._resetVertexBufferBinding(), mW.references = 1, mW
      }
      createDynamicVertexBuffer(WW, iW) {
        return this._createVertexBuffer(WW, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(WW, iW, OW) {
        const mW = this._gl.createBuffer(),
          EW = new xW.b(mW);
        if (!mW) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(EW);
        const NW = this._normalizeIndexData(WW);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, NW, iW ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), EW.references = 1, EW.is32Bits = 4 === NW.BYTES_PER_ELEMENT, EW
      }
      _normalizeIndexData(WW) {
        if (2 === WW.BYTES_PER_ELEMENT) return WW;
        if (this._caps.uintIndices) {
          if (WW instanceof Uint32Array) return WW;
          for (let iW = 0; iW < WW.length; iW++)
            if (WW[iW] >= 65535) return new Uint32Array(WW);
          return new Uint16Array(WW)
        }
        return new Uint16Array(WW)
      }
      bindArrayBuffer(WW) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(WW, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(WW, iW, OW) {
        const mW = WW.program,
          EW = this._gl.getUniformBlockIndex(mW, iW);
        this._gl.uniformBlockBinding(mW, EW, OW)
      }
      bindIndexBuffer(WW) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(WW, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(WW, iW) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[iW] !== WW) && (this._gl.bindBuffer(iW, WW ? WW.underlyingResource : null), this._currentBoundBuffer[iW] = WW)
      }
      updateArrayBuffer(WW) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, WW)
      }
      _vertexAttribPointer(WW, iW, OW, mW, EW, NW, PW) {
        const LW = this._currentBufferPointers[iW];
        if (!LW) return;
        let cW = !1;
        LW.active ? (LW.buffer !== WW && (LW.buffer = WW, cW = !0), LW.size !== OW && (LW.size = OW, cW = !0), LW.type !== mW && (LW.type = mW, cW = !0), LW.normalized !== EW && (LW.normalized = EW, cW = !0), LW.stride !== NW && (LW.stride = NW, cW = !0), LW.offset !== PW && (LW.offset = PW, cW = !0)) : (cW = !0, LW.active = !0, LW.index = iW, LW.size = OW, LW.type = mW, LW.normalized = EW, LW.stride = NW, LW.offset = PW, LW.buffer = WW), (cW || this._vaoRecordInProgress) && (this.bindArrayBuffer(WW), mW === this._gl.UNSIGNED_INT || mW === this._gl.INT ? this._gl.vertexAttribIPointer(iW, OW, mW, NW, PW) : this._gl.vertexAttribPointer(iW, OW, mW, EW, NW, PW))
      }
      _bindIndexBufferWithCache(WW) {
        null != WW && this._cachedIndexBuffer !== WW && (this._cachedIndexBuffer = WW, this.bindIndexBuffer(WW), this._uintIndicesCurrentlySet = WW.is32Bits)
      }
      _bindVertexBuffersAttributes(WW, iW, OW) {
        const mW = iW.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let EW = 0; EW < mW.length; EW++) {
          const NW = iW.getAttributeLocation(EW);
          if (NW >= 0) {
            const iW = mW[EW];
            let PW = null;
            if (OW && (PW = OW[iW]), PW || (PW = WW[iW]), !PW) continue;
            this._gl.enableVertexAttribArray(NW), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[NW] = !0);
            const LW = PW.getBuffer();
            LW && (this._vertexAttribPointer(LW, NW, PW.getSize(), PW.type, PW.normalized, PW.byteStride, PW.byteOffset), PW.getIsInstanced() && (this._gl.vertexAttribDivisor(NW, PW.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(NW), this._currentInstanceBuffers.push(LW))))
          }
        }
      }
      recordVertexArrayObject(WW, iW, OW, mW) {
        const EW = this._gl.createVertexArray();
        if (!EW) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(EW), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(WW, OW, mW), this.bindIndexBuffer(iW), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), EW
      }
      bindVertexArrayObject(WW, iW) {
        this._cachedVertexArrayObject !== WW && (this._cachedVertexArrayObject = WW, this._gl.bindVertexArray(WW), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != iW && iW.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(WW, iW, OW, mW, EW) {
        if (this._cachedVertexBuffers !== WW || this._cachedEffectForVertexBuffers !== EW) {
          this._cachedVertexBuffers = WW, this._cachedEffectForVertexBuffers = EW;
          const iW = EW.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let NW = 0;
          for (let PW = 0; PW < iW; PW++)
            if (PW < OW.length) {
              const iW = EW.getAttributeLocation(PW);
              iW >= 0 && (this._gl.enableVertexAttribArray(iW), this._vertexAttribArraysEnabled[iW] = !0, this._vertexAttribPointer(WW, iW, OW[PW], this._gl.FLOAT, !1, mW, NW)), NW += 4 * OW[PW]
            }
        }
        this._bindIndexBufferWithCache(iW)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(WW, iW, OW, mW) {
        this._cachedVertexBuffers === WW && this._cachedEffectForVertexBuffers === OW || (this._cachedVertexBuffers = WW, this._cachedEffectForVertexBuffers = OW, this._bindVertexBuffersAttributes(WW, OW, mW)), this._bindIndexBufferWithCache(iW)
      }
      unbindInstanceAttributes() {
        let WW;
        for (let iW = 0, OW = this._currentInstanceLocations.length; iW < OW; iW++) {
          const OW = this._currentInstanceBuffers[iW];
          WW != OW && OW.references && (WW = OW, this.bindArrayBuffer(OW));
          const mW = this._currentInstanceLocations[iW];
          this._gl.vertexAttribDivisor(mW, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(WW) {
        this._gl.deleteVertexArray(WW)
      }
      _releaseBuffer(WW) {
        return WW.references--, 0 === WW.references && (this._deleteBuffer(WW), !0)
      }
      _deleteBuffer(WW) {
        this._gl.deleteBuffer(WW.underlyingResource)
      }
      updateAndBindInstancesBuffer(WW, iW, OW) {
        if (this.bindArrayBuffer(WW), iW && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, iW), void 0 !== OW[0].index) this.bindInstancesBuffer(WW, OW, !0);
        else
          for (let mW = 0; mW < 4; mW++) {
            const iW = OW[mW];
            this._vertexAttribArraysEnabled[iW] || (this._gl.enableVertexAttribArray(iW), this._vertexAttribArraysEnabled[iW] = !0), this._vertexAttribPointer(WW, iW, 4, this._gl.FLOAT, !1, 64, 16 * mW), this._gl.vertexAttribDivisor(iW, 1), this._currentInstanceLocations.push(iW), this._currentInstanceBuffers.push(WW)
          }
      }
      bindInstancesBuffer(WW, iW) {
        let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(WW);
        let mW = 0;
        if (OW)
          for (let EW = 0; EW < iW.length; EW++) {
            mW += 4 * iW[EW].attributeSize
          }
        for (let EW = 0; EW < iW.length; EW++) {
          const OW = iW[EW];
          void 0 === OW.index && (OW.index = this._currentEffect.getAttributeLocationByName(OW.attributeName)), OW.index < 0 || (this._vertexAttribArraysEnabled[OW.index] || (this._gl.enableVertexAttribArray(OW.index), this._vertexAttribArraysEnabled[OW.index] = !0), this._vertexAttribPointer(WW, OW.index, OW.attributeSize, OW.attributeType || this._gl.FLOAT, OW.normalized || !1, mW, OW.offset), this._gl.vertexAttribDivisor(OW.index, void 0 === OW.divisor ? 1 : OW.divisor), this._currentInstanceLocations.push(OW.index), this._currentInstanceBuffers.push(WW))
        }
      }
      disableInstanceAttributeByName(WW) {
        if (!this._currentEffect) return;
        const iW = this._currentEffect.getAttributeLocationByName(WW);
        this.disableInstanceAttribute(iW)
      }
      disableInstanceAttribute(WW) {
        let iW, OW = !1;
        for (; - 1 !== (iW = this._currentInstanceLocations.indexOf(WW));) this._currentInstanceLocations.splice(iW, 1), this._currentInstanceBuffers.splice(iW, 1), OW = !0;
        OW && (this._gl.vertexAttribDivisor(WW, 0), this.disableAttributeByIndex(WW))
      }
      disableAttributeByIndex(WW) {
        this._gl.disableVertexAttribArray(WW), this._vertexAttribArraysEnabled[WW] = !1, this._currentBufferPointers[WW].active = !1
      }
      draw(WW, iW, OW, mW) {
        this.drawElementsType(WW ? 0 : 1, iW, OW, mW)
      }
      drawPointClouds(WW, iW, OW) {
        this.drawArraysType(2, WW, iW, OW)
      }
      drawUnIndexed(WW, iW, OW, mW) {
        this.drawArraysType(WW ? 0 : 1, iW, OW, mW)
      }
      drawElementsType(WW, iW, OW, mW) {
        this.applyStates(), this._reportDrawCall();
        const EW = this._drawMode(WW),
          NW = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          PW = this._uintIndicesCurrentlySet ? 4 : 2;
        mW ? this._gl.drawElementsInstanced(EW, OW, NW, iW * PW, mW) : this._gl.drawElements(EW, OW, NW, iW * PW)
      }
      drawArraysType(WW, iW, OW, mW) {
        this.applyStates(), this._reportDrawCall();
        const EW = this._drawMode(WW);
        mW ? this._gl.drawArraysInstanced(EW, iW, OW, mW) : this._gl.drawArrays(EW, iW, OW)
      }
      _drawMode(WW) {
        switch (WW) {
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
      _releaseEffect(WW) {
        this._compiledEffects[WW._key] && delete this._compiledEffects[WW._key];
        const iW = WW.getPipelineContext();
        iW && this._deletePipelineContext(iW)
      }
      _deletePipelineContext(WW) {
        const iW = WW;
        iW && iW.program && (iW.program.__SPECTOR_rebuildProgram = null, (0, UW.k)(iW), this._gl && (this._currentProgram === iW.program && this._setProgram(null), this._gl.deleteProgram(iW.program)))
      }
      _getGlobalDefines(WW) {
        return (0, jW.k)(WW, this.isNDCHalfZRange, this.nmW, this.useExactSrgbConversions)
      }
      createEffect(WW, iW, OW, NW, PW, LW, cW, wW, tW) {
        let ZW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          xW = arguments.length > 10 ? arguments[10] : void 0;
        const lW = "string" === typeof WW ? WW : WW.vertexToken || WW.vertexSource || WW.vertexElement || WW.vertex,
          AW = "string" === typeof WW ? WW : WW.fragmentToken || WW.fragmentSource || WW.fragmentElement || WW.fragment,
          bW = this._getGlobalDefines(),
          jW = void 0 !== iW.attributes;
        let UW = PW ?? iW.defines ?? "";
        bW && (UW += bW);
        const kW = lW + "+" + AW + "@" + UW;
        if (this._compiledEffects[kW]) {
          const WW = this._compiledEffects[kW];
          return cW && WW.isReady() && cW(WW), WW._refCount++, WW
        }
        this._gl && (0, EW.A)(this._gl);
        const sW = new mW.e(WW, iW, jW ? this : OW, NW, this, PW, LW, cW, wW, tW, kW, iW.shaderLanguage ?? ZW, iW.extraInitializationsAsync ?? xW);
        return this._compiledEffects[kW] = sW, sW
      }
      _getShaderSource(WW) {
        return this._gl.getShaderSource(WW)
      }
      createRawShaderProgram(WW, iW, OW, mW) {
        let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const PW = (0, EW.A)(this._gl);
        return PW._contextWasLost = this._contextWasLost, PW.validateShaderPrograms = this.validateShaderPrograms, (0, EW.v)(WW, iW, OW, mW || this._gl, NW)
      }
      createShaderProgram(WW, iW, OW, mW, NW) {
        let PW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const LW = (0, EW.A)(this._gl);
        return LW._contextWasLost = this._contextWasLost, LW.validateShaderPrograms = this.validateShaderPrograms, (0, EW.x)(WW, iW, OW, mW, NW || this._gl, PW)
      }
      inlineShaderCode(WW) {
        return WW
      }
      createPipelineContext(WW) {
        if (this._gl) {
          (0, EW.A)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const iW = (0, EW.t)(this._gl, WW);
        return iW.engine = this, iW
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(WW) {
        return (0, EW.l)(WW, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(WW, iW, OW, mW, NW, PW, LW, cW, wW, tW, ZW) {
        const xW = (0, EW.A)(this._gl);
        return xW._contextWasLost = this._contextWasLost, xW.validateShaderPrograms = this.validateShaderPrograms, xW._createShaderProgramInjection = this._createShaderProgram.bind(this), xW.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), xW.createShaderProgramInjection = this.createShaderProgram.bind(this), xW.loadFileInjection = this._loadFile.bind(this), (0, EW.q)(WW, iW, OW, mW, NW, PW, LW, cW, wW, tW, ZW)
      }
      _createShaderProgram(WW, iW, OW, mW) {
        let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, EW.e)(WW, iW, OW, mW, NW)
      }
      _isRenderingStateCompiled(WW) {
        return !this._isDisposed && (0, EW.p)(WW, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(WW, iW) {
        (0, EW.h)(WW, iW)
      }
      getUniforms(WW, iW) {
        const OW = new Array,
          mW = WW;
        for (let EW = 0; EW < iW.length; EW++) OW.push(this._gl.getUniformLocation(mW.program, iW[EW]));
        return OW
      }
      getAttributes(WW, iW) {
        const OW = [],
          mW = WW;
        for (let NW = 0; NW < iW.length; NW++) try {
          OW.push(this._gl.getAttribLocation(mW.program, iW[NW]))
        } catch (EW) {
          OW.push(-1)
        }
        return OW
      }
      enableEffect(WW) {
        (WW = null !== WW && (0, PW.d)(WW) ? WW.effect : WW) && WW !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(WW), this._currentEffect = WW, WW.onBind && WW.onBind(WW), WW._onBindObservable && WW._onBindObservable.notifyObservers(WW))
      }
      setInt(WW, iW) {
        return !!WW && (this._gl.uniform1i(WW, iW), !0)
      }
      setInt2(WW, iW, OW) {
        return !!WW && (this._gl.uniform2i(WW, iW, OW), !0)
      }
      setInt3(WW, iW, OW, mW) {
        return !!WW && (this._gl.uniform3i(WW, iW, OW, mW), !0)
      }
      setInt4(WW, iW, OW, mW, EW) {
        return !!WW && (this._gl.uniform4i(WW, iW, OW, mW, EW), !0)
      }
      setIntArray(WW, iW) {
        return !!WW && (this._gl.uniform1iv(WW, iW), !0)
      }
      setIntArray2(WW, iW) {
        return !(!WW || iW.length % 2 !== 0) && (this._gl.uniform2iv(WW, iW), !0)
      }
      setIntArray3(WW, iW) {
        return !(!WW || iW.length % 3 !== 0) && (this._gl.uniform3iv(WW, iW), !0)
      }
      setIntArray4(WW, iW) {
        return !(!WW || iW.length % 4 !== 0) && (this._gl.uniform4iv(WW, iW), !0)
      }
      setUInt(WW, iW) {
        return !!WW && (this._gl.uniform1ui(WW, iW), !0)
      }
      setUInt2(WW, iW, OW) {
        return !!WW && (this._gl.uniform2ui(WW, iW, OW), !0)
      }
      setUInt3(WW, iW, OW, mW) {
        return !!WW && (this._gl.uniform3ui(WW, iW, OW, mW), !0)
      }
      setUInt4(WW, iW, OW, mW, EW) {
        return !!WW && (this._gl.uniform4ui(WW, iW, OW, mW, EW), !0)
      }
      setUIntArray(WW, iW) {
        return !!WW && (this._gl.uniform1uiv(WW, iW), !0)
      }
      setUIntArray2(WW, iW) {
        return !(!WW || iW.length % 2 !== 0) && (this._gl.uniform2uiv(WW, iW), !0)
      }
      setUIntArray3(WW, iW) {
        return !(!WW || iW.length % 3 !== 0) && (this._gl.uniform3uiv(WW, iW), !0)
      }
      setUIntArray4(WW, iW) {
        return !(!WW || iW.length % 4 !== 0) && (this._gl.uniform4uiv(WW, iW), !0)
      }
      setArray(WW, iW) {
        return !!WW && (!(iW.length < 1) && (this._gl.uniform1fv(WW, iW), !0))
      }
      setArray2(WW, iW) {
        return !(!WW || iW.length % 2 !== 0) && (this._gl.uniform2fv(WW, iW), !0)
      }
      setArray3(WW, iW) {
        return !(!WW || iW.length % 3 !== 0) && (this._gl.uniform3fv(WW, iW), !0)
      }
      setArray4(WW, iW) {
        return !(!WW || iW.length % 4 !== 0) && (this._gl.uniform4fv(WW, iW), !0)
      }
      setMatrices(WW, iW) {
        return !!WW && (this._gl.uniformMatrix4fv(WW, !1, iW), !0)
      }
      setMatrix3x3(WW, iW) {
        return !!WW && (this._gl.uniformMatrix3fv(WW, !1, iW), !0)
      }
      setMatrix2x2(WW, iW) {
        return !!WW && (this._gl.uniformMatrix2fv(WW, !1, iW), !0)
      }
      setFloat(WW, iW) {
        return !!WW && (this._gl.uniform1f(WW, iW), !0)
      }
      setFloat2(WW, iW, OW) {
        return !!WW && (this._gl.uniform2f(WW, iW, OW), !0)
      }
      setFloat3(WW, iW, OW, mW) {
        return !!WW && (this._gl.uniform3f(WW, iW, OW, mW), !0)
      }
      setFloat4(WW, iW, OW, mW, EW) {
        return !!WW && (this._gl.uniform4f(WW, iW, OW, mW, EW), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const WW = this._colorWrite;
          this._gl.colorMask(WW, WW, WW, WW)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(WW) {
        this.preventCacheWipeBetweenFrames && !WW || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), WW && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(WW, iW) {
        const OW = this._gl;
        let mW = OW.NEAREST,
          EW = OW.NEAREST,
          NW = !1;
        switch (WW) {
          case 11:
            mW = OW.LINEAR, EW = iW ? OW.LINEAR_MIPMAP_NEAREST : OW.LINEAR;
            break;
          case 3:
            mW = OW.LINEAR, NW = !0, EW = iW ? OW.LINEAR_MIPMAP_LINEAR : OW.LINEAR;
            break;
          case 8:
            NW = !0, mW = OW.NEAREST, EW = iW ? OW.NEAREST_MIPMAP_LINEAR : OW.NEAREST;
            break;
          case 4:
            mW = OW.NEAREST, EW = iW ? OW.NEAREST_MIPMAP_NEAREST : OW.NEAREST;
            break;
          case 5:
            mW = OW.NEAREST, EW = iW ? OW.LINEAR_MIPMAP_NEAREST : OW.LINEAR;
            break;
          case 6:
            NW = !0, mW = OW.NEAREST, EW = iW ? OW.LINEAR_MIPMAP_LINEAR : OW.LINEAR;
            break;
          case 7:
            mW = OW.NEAREST, EW = OW.LINEAR;
            break;
          case 1:
            mW = OW.NEAREST, EW = OW.NEAREST;
            break;
          case 9:
            mW = OW.LINEAR, EW = iW ? OW.NEAREST_MIPMAP_NEAREST : OW.NEAREST;
            break;
          case 10:
            NW = !0, mW = OW.LINEAR, EW = iW ? OW.NEAREST_MIPMAP_LINEAR : OW.NEAREST;
            break;
          case 2:
            mW = OW.LINEAR, EW = OW.LINEAR;
            break;
          case 12:
            mW = OW.LINEAR, EW = OW.NEAREST
        }
        return {
          min: EW,
          mag: mW,
          hasMipMaps: NW
        }
      }
      _createTexture() {
        const WW = this._gl.createTexture();
        if (!WW) throw new Error("Unable to create texture");
        return WW
      }
      _createHardwareTexture() {
        return new AW.c(this._createTexture(), this._gl)
      }
      _createInternalTexture(WW, iW) {
        let OW, mW, EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          NW = !1,
          PW = 0,
          cW = 3,
          wW = 5,
          tW = !1,
          ZW = 1,
          xW = !1,
          lW = 0,
          AW = !1;
        void 0 !== iW && "object" === typeof iW ? (OW = !!iW.generateMipMaps, NW = !!iW.createMipMaps, PW = void 0 === iW.type ? 0 : iW.type, cW = void 0 === iW.samplingMode ? 3 : iW.samplingMode, wW = void 0 === iW.format ? 5 : iW.format, tW = void 0 !== iW.useSRGBBuffer && iW.useSRGBBuffer, ZW = iW.samples ?? 1, mW = iW.label, xW = !!iW.createMSAATexture, lW = iW.comparisonFunction || 0, AW = !!iW.isCube) : OW = !!iW, tW && (tW = this._caps.supportSRGBBuffers && (this.bb > 1 || this.isWebGPU)), (1 !== PW || this._caps.textureFloatLinearFiltering) && (2 !== PW || this._caps.textureHalfFloatLinearFiltering) || (cW = 1), 1 !== PW || this._caps.textureFloat || (PW = 0, LW.b.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const jW = (0, kW.e)(wW),
          UW = (0, kW.c)(wW),
          sW = this._gl,
          MW = new bW.e(this, EW),
          KW = WW.width || WW,
          SW = WW.height || WW,
          YW = WW.depth || 0,
          yW = WW.layers || 0,
          TW = this._getSamplingParameters(cW, (OW || NW) && !jW),
          JW = 0 !== yW ? sW.TEXTURE_2D_ARRAY : 0 !== YW ? sW.TEXTURE_3D : AW ? sW.TEXTURE_CUBE_MAP : sW.TEXTURE_2D,
          hW = jW ? this._getInternalFormatFromDepthTextureFormat(wW, !0, UW) : this._getRGBABufferInternalSizedFormat(PW, wW, tW),
          HW = jW ? UW ? sW.DEPTH_STENCIL : sW.DEPTH_COMPONENT : this._getInternalFormat(wW),
          nW = jW ? this._getWebGLTextureTypeFromDepthTextureFormat(wW) : this._getWebGLTextureType(PW);
        if (this._bindTextureDirectly(JW, MW), 0 !== yW) MW.is2DArray = !0, sW.texImage3D(JW, 0, hW, KW, SW, yW, 0, HW, nW, null);
        else if (0 !== YW) MW.is3D = !0, sW.texImage3D(JW, 0, hW, KW, SW, YW, 0, HW, nW, null);
        else if (AW) {
          MW.isCube = !0;
          for (let WW = 0; WW < 6; WW++) sW.texImage2D(sW.TEXTURE_CUBE_MAP_POSITIVE_X + WW, 0, hW, KW, SW, 0, HW, nW, null)
        } else sW.texImage2D(JW, 0, hW, KW, SW, 0, HW, nW, null);
        if (sW.texParameteri(JW, sW.TEXTURE_MAG_FILTER, TW.mag), sW.texParameteri(JW, sW.TEXTURE_MIN_FILTER, TW.min), sW.texParameteri(JW, sW.TEXTURE_WRAP_S, sW.CLAMP_TO_EDGE), sW.texParameteri(JW, sW.TEXTURE_WRAP_T, sW.CLAMP_TO_EDGE), jW && this.bb > 1 && (0 === lW ? (sW.texParameteri(JW, sW.TEXTURE_COMPARE_FUNC, 515), sW.texParameteri(JW, sW.TEXTURE_COMPARE_MODE, sW.NONE)) : (sW.texParameteri(JW, sW.TEXTURE_COMPARE_FUNC, lW), sW.texParameteri(JW, sW.TEXTURE_COMPARE_MODE, sW.COMPARE_REF_TO_TEXTURE))), (OW || NW) && this._gl.generateMipmap(JW), this._bindTextureDirectly(JW, null), MW._useSRGBBuffer = tW, MW.baseWidth = KW, MW.baseHeight = SW, MW.width = KW, MW.height = SW, MW.depth = yW || YW, MW.isReady = !0, MW.samples = ZW, MW.generateMipMaps = OW, MW.samplingMode = cW, MW.type = PW, MW.format = wW, MW.label = mW, MW.comparisonFunction = lW, this._internalTexturesCache.push(MW), xW) {
          let WW;
          if (WW = (0, kW.e)(MW.format) ? this._setupFramebufferDepthAttachments((0, kW.c)(MW.format), 19 !== MW.format, MW.width, MW.height, ZW, MW.format, !0) : this._createRenderBuffer(MW.width, MW.height, ZW, -1, this._getRGBABufferInternalSizedFormat(MW.type, MW.format, MW._useSRGBBuffer), -1), !WW) throw new Error("Unable to create render buffer");
          MW._autoMSAAManagement = !0;
          let iW = MW._hardwareTexture;
          iW || (iW = MW._hardwareTexture = this._createHardwareTexture()), iW.addMSAARenderBuffer(WW)
        }
        return MW
      }
      _getUseSRGBBuffer(WW, iW) {
        return WW && this._caps.supportSRGBBuffers && (this.bb > 1 || iW)
      }
      createTexture(WW, iW, OW, mW) {
        var EW = this;
        let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          PW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          LW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          cW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          wW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          tW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          ZW = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          xW = arguments.length > 11 ? arguments[11] : void 0,
          lW = arguments.length > 12 ? arguments[12] : void 0,
          AW = arguments.length > 13 ? arguments[13] : void 0,
          jW = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(WW, iW, OW, mW, NW, PW, LW, (function() {
          for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
          return EW._prepareWebGLTexture(...iW, tW)
        }), ((WW, iW, OW, EW, NW, PW) => {
          const LW = this._gl,
            cW = OW.width === WW && OW.height === iW;
          NW._creationFlags = AW ?? 0;
          const wW = this._getTexImageParametersForCreateTexture(NW.format, NW._useSRGBBuffer);
          if (cW) return LW.texImage2D(LW.TEXTURE_2D, 0, wW.internalFormat, wW.format, wW.type, OW), !1;
          const tW = this._caps.maxTextureSize;
          if (OW.width > tW || OW.height > tW || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = WW, this._workingCanvas.height = iW, this._workingContext.drawImage(OW, 0, 0, OW.width, OW.height, 0, 0, WW, iW), LW.texImage2D(LW.TEXTURE_2D, 0, wW.internalFormat, wW.format, wW.type, this._workingCanvas), NW.width = WW, NW.height = iW, !1);
          {
            const WW = new bW.e(this, 2);
            this._bindTextureDirectly(LW.TEXTURE_2D, WW, !0), LW.texImage2D(LW.TEXTURE_2D, 0, wW.internalFormat, wW.format, wW.type, OW), this._rescaleTexture(WW, NW, mW, wW.format, (() => {
              this._releaseTexture(WW), this._bindTextureDirectly(LW.TEXTURE_2D, NW, !0), PW()
            }))
          }
          return !0
        }), cW, wW, tW, ZW, xW, lW, jW)
      }
      _getTexImageParametersForCreateTexture(WW, iW) {
        let OW, mW;
        return 1 === this.bb ? (OW = this._getInternalFormat(WW, iW), mW = OW) : (OW = this._getInternalFormat(WW, !1), mW = this._getRGBABufferInternalSizedFormat(0, WW, iW)), {
          internalFormat: mW,
          format: OW,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(WW, iW, OW, mW, EW) {}
      _unpackFlipY(WW) {
        this._unpackFlipYCached !== WW && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, WW ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = WW))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(WW) {
        return WW.isCube ? this._gl.TEXTURE_CUBE_MAP : WW.is3D ? this._gl.TEXTURE_3D : WW.is2DArray || WW.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const mW = this._getTextureTarget(iW),
          EW = this._getSamplingParameters(WW, iW.useMipMaps || OW);
        this._setTextureParameterInteger(mW, this._gl.TEXTURE_MAG_FILTER, EW.mag, iW), this._setTextureParameterInteger(mW, this._gl.TEXTURE_MIN_FILTER, EW.min), OW && EW.hasMipMaps && (iW.generateMipMaps = !0, this._gl.generateMipmap(mW)), this._bindTextureDirectly(mW, null), iW.samplingMode = WW
      }
      updateTextureDimensions(WW, iW, OW) {}
      updateTextureWrappingMode(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const EW = this._getTextureTarget(WW);
        null !== iW && (this._setTextureParameterInteger(EW, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(iW), WW), WW._cachedWrapU = iW), null !== OW && (this._setTextureParameterInteger(EW, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(OW), WW), WW._cachedWrapV = OW), (WW.is2DArray || WW.is3D) && null !== mW && (this._setTextureParameterInteger(EW, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(mW), WW), WW._cachedWrapR = mW), this._bindTextureDirectly(EW, null)
      }
      _uploadCompressedDataToTextureDirectly(WW, iW, OW, mW, EW) {
        let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          PW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const LW = this._gl;
        let cW = LW.TEXTURE_2D;
        if (WW.isCube && (cW = LW.TEXTURE_CUBE_MAP_POSITIVE_X + NW), WW._useSRGBBuffer) switch (iW) {
          case 37492:
          case 36196:
            this._caps.etc2 ? iW = LW.COMPRESSED_SRGB8_ETC2 : WW._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? iW = LW.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : WW._useSRGBBuffer = !1;
            break;
          case 36492:
            iW = LW.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            iW = LW.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            iW = LW.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            iW = LW.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            iW = LW.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            iW = LW.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            iW = LW.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            iW = LW.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            iW = LW.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            iW = LW.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            iW = LW.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            iW = LW.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            iW = LW.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            iW = LW.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            iW = LW.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? iW = LW.COMPRESSED_SRGB_S3TC_DXT1_EXT : WW._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? iW = LW.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : WW._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? iW = LW.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : WW._useSRGBBuffer = !1;
            break;
          default:
            WW._useSRGBBuffer = !1
        }
        if (WW.generateMipMaps) {
          const NW = WW._hardwareTexture;
          NW.memoryAllocated || (LW.texStorage2D(WW.isCube ? LW.TEXTURE_CUBE_MAP : LW.TEXTURE_2D, Math.floor(Math.log2(Math.max(OW, mW))) + 1, iW, WW.width, WW.height), NW.memoryAllocated = !0), this._gl.compressedTexSubImage2D(cW, PW, 0, 0, OW, mW, iW, EW)
        } else this._gl.compressedTexImage2D(cW, PW, iW, OW, mW, 0, EW)
      }
      _uploadDataToTextureDirectly(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          EW = arguments.length > 4 ? arguments[4] : void 0,
          NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const PW = this._gl,
          LW = this._getWebGLTextureType(WW.type),
          cW = this._getInternalFormat(WW.format),
          wW = void 0 === EW ? this._getRGBABufferInternalSizedFormat(WW.type, WW.format, WW._useSRGBBuffer) : this._getInternalFormat(EW, WW._useSRGBBuffer);
        this._unpackFlipY(WW.invertY);
        let tW = PW.TEXTURE_2D;
        WW.isCube && (tW = PW.TEXTURE_CUBE_MAP_POSITIVE_X + OW);
        const ZW = Math.round(Math.log(WW.width) * Math.LOG2E),
          xW = Math.round(Math.log(WW.height) * Math.LOG2E),
          lW = NW ? WW.width : Math.pow(2, Math.max(ZW - mW, 0)),
          AW = NW ? WW.height : Math.pow(2, Math.max(xW - mW, 0));
        PW.texImage2D(tW, mW, wW, lW, AW, 0, cW, LW, iW)
      }
      updateTextureData(WW, iW, OW, mW, EW, NW) {
        let PW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          LW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          cW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const wW = this._gl,
          tW = this._getWebGLTextureType(WW.type),
          ZW = this._getInternalFormat(WW.format);
        this._unpackFlipY(WW.invertY);
        let xW = wW.TEXTURE_2D,
          lW = wW.TEXTURE_2D;
        WW.isCube && (lW = wW.TEXTURE_CUBE_MAP_POSITIVE_X + PW, xW = wW.TEXTURE_CUBE_MAP), this._bindTextureDirectly(xW, WW, !0), wW.texSubImage2D(lW, LW, OW, mW, EW, NW, ZW, tW, iW), cW && this._gl.generateMipmap(lW), this._bindTextureDirectly(xW, null)
      }
      _uploadArrayBufferViewToTexture(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const EW = this._gl,
          NW = WW.isCube ? EW.TEXTURE_CUBE_MAP : EW.TEXTURE_2D;
        this._bindTextureDirectly(NW, WW, !0), this._uploadDataToTextureDirectly(WW, iW, OW, mW), this._bindTextureDirectly(NW, null, !0)
      }
      _prepareWebGLTextureContinuation(WW, iW, OW, mW, EW) {
        const NW = this._gl;
        if (!NW) return;
        const PW = this._getSamplingParameters(EW, !OW);
        NW.texParameteri(NW.TEXTURE_2D, NW.TEXTURE_MAG_FILTER, PW.mag), NW.texParameteri(NW.TEXTURE_2D, NW.TEXTURE_MIN_FILTER, PW.min), OW || mW || NW.generateMipmap(NW.TEXTURE_2D), this._bindTextureDirectly(NW.TEXTURE_2D, null), iW && iW.removePendingData(WW), WW.onLoadedObservable.notifyObservers(WW), WW.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW) {
        const tW = this.getCaps().maxTextureSize,
          ZW = Math.min(tW, this.needPOTTextures ? (0, lW.h)(mW.width, tW) : mW.width),
          xW = Math.min(tW, this.needPOTTextures ? (0, lW.h)(mW.height, tW) : mW.height),
          AW = this._gl;
        AW && (WW._hardwareTexture ? (this._bindTextureDirectly(AW.TEXTURE_2D, WW, !0), this._unpackFlipY(void 0 === EW || !!EW), WW.baseWidth = mW.width, WW.baseHeight = mW.height, WW.width = ZW, WW.height = xW, WW.isReady = !0, WW.type = -1 !== WW.type ? WW.type : 0, WW.format = -1 !== WW.format ? WW.format : wW ?? (".jpg" !== iW || WW._useSRGBBuffer ? 5 : 4), LW(ZW, xW, mW, iW, WW, (() => {
          this._prepareWebGLTextureContinuation(WW, OW, NW, PW, cW)
        })) || this._prepareWebGLTextureContinuation(WW, OW, NW, PW, cW)) : OW && OW.removePendingData(WW))
      }
      _getInternalFormatFromDepthTextureFormat(WW, iW, OW) {
        const mW = this._gl;
        if (!iW) return mW.STENCIL_INDEX8;
        let EW = OW ? mW.DEPTH_STENCIL : mW.DEPTH_COMPONENT;
        return this.bb > 1 ? 15 === WW ? EW = mW.DEPTH_COMPONENT16 : 16 === WW ? EW = mW.DEPTH_COMPONENT24 : 17 === WW || 13 === WW ? EW = OW ? mW.DEPTH24_STENCIL8 : mW.DEPTH_COMPONENT24 : 14 === WW ? EW = mW.DEPTH_COMPONENT32F : 18 === WW && (EW = OW ? mW.DEPTH32F_STENCIL8 : mW.DEPTH_COMPONENT32F) : EW = mW.DEPTH_COMPONENT16, EW
      }
      _getWebGLTextureTypeFromDepthTextureFormat(WW) {
        const iW = this._gl;
        let OW = iW.UNSIGNED_INT;
        return 15 === WW ? OW = iW.UNSIGNED_SHORT : 17 === WW || 13 === WW ? OW = iW.UNSIGNED_INT_24_8 : 14 === WW ? OW = iW.FLOAT : 18 === WW ? OW = iW.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === WW && (OW = iW.UNSIGNED_BYTE), OW
      }
      _setupFramebufferDepthAttachments(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          NW = arguments.length > 5 ? arguments[5] : void 0,
          PW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const LW = this._gl;
        NW = NW ?? (WW ? 13 : 14);
        const cW = this._getInternalFormatFromDepthTextureFormat(NW, iW, WW);
        return WW && iW ? this._createRenderBuffer(OW, mW, EW, LW.DEPTH_STENCIL, cW, PW ? -1 : LW.DEPTH_STENCIL_ATTACHMENT) : iW ? this._createRenderBuffer(OW, mW, EW, cW, cW, PW ? -1 : LW.DEPTH_ATTACHMENT) : WW ? this._createRenderBuffer(OW, mW, EW, cW, cW, PW ? -1 : LW.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(WW, iW, OW, mW, EW, NW) {
        let PW = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const LW = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(LW, WW, iW, OW, mW, EW, NW, PW)
      }
      _updateRenderBuffer(WW, iW, OW, mW, EW, NW, PW) {
        let LW = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const cW = this._gl;
        return cW.bindRenderbuffer(cW.RENDERBUFFER, WW), mW > 1 && cW.renderbufferStorageMultisample ? cW.renderbufferStorageMultisample(cW.RENDERBUFFER, mW, NW, iW, OW) : cW.renderbufferStorage(cW.RENDERBUFFER, EW, iW, OW), -1 !== PW && cW.framebufferRenderbuffer(cW.FRAMEBUFFER, PW, cW.RENDERBUFFER, WW), LW && cW.bindRenderbuffer(cW.RENDERBUFFER, null), WW
      }
      _releaseTexture(WW) {
        this._deleteTexture(WW._hardwareTexture), this.unbindAllTextures();
        const iW = this._internalTexturesCache.indexOf(WW); - 1 !== iW && this._internalTexturesCache.splice(iW, 1), WW._lodTextureHigh && WW._lodTextureHigh.dispose(), WW._lodTextureMid && WW._lodTextureMid.dispose(), WW._lodTextureLow && WW._lodTextureLow.dispose(), WW._irradianceTexture && WW._irradianceTexture.dispose()
      }
      _deleteTexture(WW) {
        WW?.release()
      }
      _setProgram(WW) {
        this._currentProgram !== WW && ((0, EW.r)(WW, this._gl), this._currentProgram = WW)
      }
      bindSamplers(WW) {
        const iW = WW.getPipelineContext();
        this._setProgram(iW.program);
        const OW = WW.getSamplers();
        for (let mW = 0; mW < OW.length; mW++) {
          const iW = WW.getUniform(OW[mW]);
          iW && (this._boundUniforms[mW] = iW)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          EW = !1;
        const NW = iW && iW._associatedChannel > -1;
        OW && NW && (this._activeChannel = iW._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== iW || mW) {
          if (this._activateCurrentTexture(), iW && iW.isMultiview) throw LW.b.Error(["_bindTextureDirectly called with a multiview texture!", WW, iW]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(WW, iW?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = iW, iW && (iW._associatedChannel = this._activeChannel)
        } else OW && (EW = !0, this._activateCurrentTexture());
        return NW && !OW && this._bindSamplerUniformToChannel(iW._associatedChannel, this._activeChannel), EW
      }
      _bindTexture(WW, iW, OW) {
        if (void 0 === WW) return;
        iW && (iW._associatedChannel = WW), this._activeChannel = WW;
        const mW = iW ? this._getTextureTarget(iW) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(mW, iW)
      }
      unbindAllTextures() {
        for (let WW = 0; WW < this._maxSimultaneousTextures; WW++) this._activeChannel = WW, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.bb > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(WW, iW, OW, mW) {
        void 0 !== WW && (iW && (this._boundUniforms[WW] = iW), this._setTexture(WW, OW))
      }
      _bindSamplerUniformToChannel(WW, iW) {
        const OW = this._boundUniforms[WW];
        OW && OW._currentState !== iW && (this._gl.uniform1i(OW, iW), OW._currentState = iW)
      }
      _getTextureWrapMode(WW) {
        switch (WW) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(WW, iW) {
        let OW, mW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          EW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!iW) return null != this._boundTexturesCache[WW] && (this._activeChannel = WW, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.bb > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (iW.video) {
          this._activeChannel = WW;
          const OW = iW.getInternalTexture();
          OW && (OW._associatedChannel = WW), iW.update()
        } else if (4 === iW.delayLoadState) return iW.delayLoad(), !1;
        OW = EW ? iW.depthStencilTexture : iW.isReady() ? iW.getInternalTexture() : iW.isCube ? this.emptyCubeTexture : iW.is3D ? this.emptyTexture3D : iW.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !mW && OW && (OW._associatedChannel = WW);
        let NW = !0;
        this._boundTexturesCache[WW] === OW && (mW || this._bindSamplerUniformToChannel(OW._associatedChannel, WW), NW = !1), this._activeChannel = WW;
        const PW = this._getTextureTarget(OW);
        if (NW && this._bindTextureDirectly(PW, OW, mW), OW && !OW.isMultiview) {
          if (OW.isCube && OW._cachedCoordinatesMode !== iW.coordinatesMode) {
            OW._cachedCoordinatesMode = iW.coordinatesMode;
            const WW = 3 !== iW.coordinatesMode && 5 !== iW.coordinatesMode ? 1 : 0;
            iW.wrapU = WW, iW.wrapV = WW
          }
          OW._cachedWrapU !== iW.wrapU && (OW._cachedWrapU = iW.wrapU, this._setTextureParameterInteger(PW, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(iW.wrapU), OW)), OW._cachedWrapV !== iW.wrapV && (OW._cachedWrapV = iW.wrapV, this._setTextureParameterInteger(PW, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(iW.wrapV), OW)), OW.is3D && OW._cachedWrapR !== iW.wrapR && (OW._cachedWrapR = iW.wrapR, this._setTextureParameterInteger(PW, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(iW.wrapR), OW)), this._setAnisotropicLevel(PW, OW, iW.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(WW, iW, OW, mW) {
        if (void 0 !== WW && iW) {
          this._textureUnits && this._textureUnits.length === OW.length || (this._textureUnits = new Int32Array(OW.length));
          for (let iW = 0; iW < OW.length; iW++) {
            const mW = OW[iW].getInternalTexture();
            mW ? (this._textureUnits[iW] = WW + iW, mW._associatedChannel = WW + iW) : this._textureUnits[iW] = -1
          }
          this._gl.uniform1iv(iW, this._textureUnits);
          for (let WW = 0; WW < OW.length; WW++) this._setTexture(this._textureUnits[WW], OW[WW], !0)
        }
      }
      _setAnisotropicLevel(WW, iW, OW) {
        const mW = this._caps.textureAnisotropicFilterExtension;
        11 !== iW.samplingMode && 3 !== iW.samplingMode && 2 !== iW.samplingMode && (OW = 1), mW && iW._cachedAnisotropicFilteringLevel !== OW && (this._setTextureParameterFloat(WW, mW.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(OW, this._caps.maxAnisotropy), iW), iW._cachedAnisotropicFilteringLevel = OW)
      }
      _setTextureParameterFloat(WW, iW, OW, mW) {
        this._bindTextureDirectly(WW, mW, !0, !0), this._gl.texParameterf(WW, iW, OW)
      }
      _setTextureParameterInteger(WW, iW, OW, mW) {
        mW && this._bindTextureDirectly(WW, mW, !0, !0), this._gl.texParameteri(WW, iW, OW)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let WW = 0; WW < this._caps.maxVertexAttribs; WW++) this.disableAttributeByIndex(WW)
        } else
          for (let WW = 0, iW = this._vertexAttribArraysEnabled.length; WW < iW; WW++) WW >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[WW] || this.disableAttributeByIndex(WW)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, cW.j)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, EW.y)(this._gl)
      }
      attachContextLostEvent(WW) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", WW, !1)
      }
      attachContextRestoredEvent(WW) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", WW, !1)
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
      _canRenderToFramebuffer(WW) {
        const iW = this._gl;
        for (; iW.getError() !== iW.NO_ERROR;);
        let OW = !0;
        const mW = iW.createTexture();
        iW.bindTexture(iW.TEXTURE_2D, mW), iW.texImage2D(iW.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(WW), 1, 1, 0, iW.RGBA, this._getWebGLTextureType(WW), null), iW.texParameteri(iW.TEXTURE_2D, iW.TEXTURE_MIN_FILTER, iW.NEAREST), iW.texParameteri(iW.TEXTURE_2D, iW.TEXTURE_MAG_FILTER, iW.NEAREST);
        const EW = iW.createFramebuffer();
        iW.bindFramebuffer(iW.FRAMEBUFFER, EW), iW.framebufferTexture2D(iW.FRAMEBUFFER, iW.COLOR_ATTACHMENT0, iW.TEXTURE_2D, mW, 0);
        const NW = iW.checkFramebufferStatus(iW.FRAMEBUFFER);
        if (OW = OW && NW === iW.FRAMEBUFFER_COMPLETE, OW = OW && iW.getError() === iW.NO_ERROR, OW && (iW.clear(iW.COLOR_BUFFER_BIT), OW = OW && iW.getError() === iW.NO_ERROR), OW) {
          iW.bindFramebuffer(iW.FRAMEBUFFER, null);
          const WW = iW.RGBA,
            mW = iW.UNSIGNED_BYTE,
            EW = new Uint8Array(4);
          iW.readPixels(0, 0, 1, 1, WW, mW, EW), OW = OW && iW.getError() === iW.NO_ERROR
        }
        for (iW.deleteTexture(mW), iW.deleteFramebuffer(EW), iW.bindFramebuffer(iW.FRAMEBUFFER, null); !OW && iW.getError() !== iW.NO_ERROR;);
        return OW
      }
      _getWebGLTextureType(WW) {
        if (1 === this._webGLVersion) {
          switch (WW) {
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
        switch (WW) {
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
      _getInternalFormat(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = iW ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (WW) {
          case 0:
            OW = this._gl.ALPHA;
            break;
          case 1:
            OW = this._gl.LUMINANCE;
            break;
          case 2:
            OW = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            OW = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            OW = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            OW = iW ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            OW = iW ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (WW) {
          case 8:
            OW = this._gl.RED_INTEGER;
            break;
          case 9:
            OW = this._gl.RG_INTEGER;
            break;
          case 10:
            OW = this._gl.RGB_INTEGER;
            break;
          case 11:
            OW = this._gl.RGBA_INTEGER
        }
        return OW
      }
      _getRGBABufferInternalSizedFormat(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== iW) switch (iW) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return OW ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (WW) {
          case 3:
            switch (iW) {
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
            switch (iW) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return OW ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return OW ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (iW) {
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
            switch (iW) {
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
            switch (iW) {
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
            switch (iW) {
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
            switch (iW) {
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
            switch (iW) {
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
            switch (iW) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return OW ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(WW, iW, OW, mW) {
        let EW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          NW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          PW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const cW = EW ? 4 : 3,
          wW = EW ? this._gl.RGBA : this._gl.RGB,
          tW = OW * mW * cW;
        if (PW) {
          if (PW.length < tW) return LW.b.Error(`Data buffer is too small to store the read pixels (${PW.length} should be more than ${tW})`), Promise.resolve(PW)
        } else PW = new Uint8Array(tW);
        return NW && this.flushFramebuffer(), this._gl.readPixels(WW, iW, OW, mW, wW, this._gl.UNSIGNED_BYTE, PW), Promise.resolve(PW)
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
          const WW = NW.b._CreateCanvas(1, 1),
            iW = WW.getContext("webgl") || WW.getContext("experimental-webgl");
          this._IsSupported = null != iW && !!globalThis.WebGLRenderingContext
        } catch (WW) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const WW = NW.b._CreateCanvas(1, 1),
            iW = WW.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || WW.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !iW
        } catch (WW) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    KW._TempClearColorUint32 = new Uint32Array(4), KW._TempClearColorInt32 = new Int32Array(4), KW._TempClearColorFloat32 = new Float32Array(4), KW.ExceptionList = [{
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
    }], KW._ConcatenateShader = jW.h, KW._IsSupported = null, KW._HasMajorPerformanceCaveat = null
  },
  41703: (WW, iW, OW) => {
    var mW;
    OW.d(iW, {
        e: () => EW
      }),
      function(WW) {
        WW[WW.PointerMove = 0] = "PointerMove", WW[WW.PointerDown = 1] = "PointerDown", WW[WW.PointerUp = 2] = "PointerUp"
      }(mW || (mW = {}));
    class EW {}
    EW.DOM_DELTA_PIXEL = 0, EW.DOM_DELTA_LINE = 1, EW.DOM_DELTA_PAGE = 2
  },
  41700: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW,
      g: () => NW,
      h: () => EW
    });
    class mW {}
    mW.KEYDOWN = 1, mW.KEYUP = 2;
    class EW {
      constructor(WW, iW) {
        this.type = WW, this.event = iW
      }
    }
    class NW extends EW {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(WW) {
        this.skipOnKeyboardObservable = WW
      }
      constructor(WW, iW) {
        super(WW, iW), this.type = WW, this.event = iW, this.skipOnKeyboardObservable = !1
      }
    }
  },
  41695: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => EW,
      d: () => PW,
      f: () => LW
    });
    var mW = OW(38241);
    class EW {}
    EW.POINTERDOWN = 1, EW.POINTERUP = 2, EW.POINTERMOVE = 4, EW.POINTERWHEEL = 8, EW.POINTERPICK = 16, EW.POINTERTAP = 32, EW.POINTERDOUBLETAP = 64;
    class NW {
      constructor(WW, iW) {
        this.type = WW, this.event = iW
      }
    }
    class PW extends NW {
      constructor(WW, iW, OW, EW) {
        super(WW, iW), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new mW.m(OW, EW)
      }
    }
    class LW extends NW {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(WW, iW), this._pickInfo = OW, this._inputManager = mW
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  41710: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    class mW {
      static CompareLightsPriority(WW, iW) {
        return WW.shadowEnabled !== iW.shadowEnabled ? (iW.shadowEnabled ? 1 : 0) - (WW.shadowEnabled ? 1 : 0) : iW.renderPriority - WW.renderPriority
      }
    }
    mW.FALLOFF_DEFAULT = 0, mW.FALLOFF_PHYSICAL = 1, mW.FALLOFF_GLTF = 2, mW.FALLOFF_STANDARD = 3, mW.LIGHTMAP_DEFAULT = 0, mW.LIGHTMAP_SPECULAR = 1, mW.LIGHTMAP_SHADOWSONLY = 2, mW.INTENSITYMODE_AUTOMATIC = 0, mW.INTENSITYMODE_LUMINOUSPOWER = 1, mW.INTENSITYMODE_LUMINOUSINTENSITY = 2, mW.INTENSITYMODE_ILLUMINANCE = 3, mW.INTENSITYMODE_LUMINANCE = 4, mW.LIGHTTYPEID_POINTLIGHT = 0, mW.LIGHTTYPEID_DIRECTIONALLIGHT = 1, mW.LIGHTTYPEID_SPOTLIGHT = 2, mW.LIGHTTYPEID_HEMISPHERICLIGHT = 3, mW.LIGHTTYPEID_RECT_AREALIGHT = 4, mW.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  41371: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW
    });
    var mW, EW = OW(38276),
      NW = OW(41380);
    ! function(WW) {
      WW[WW.Unknown = 0] = "Unknown", WW[WW.Url = 1] = "Url", WW[WW.Temp = 2] = "Temp", WW[WW.Raw = 3] = "Raw", WW[WW.Dynamic = 4] = "Dynamic", WW[WW.RenderTarget = 5] = "RenderTarget", WW[WW.MultiRenderTarget = 6] = "MultiRenderTarget", WW[WW.Cube = 7] = "Cube", WW[WW.CubeRaw = 8] = "CubeRaw", WW[WW.CubePrefiltered = 9] = "CubePrefiltered", WW[WW.Raw3D = 10] = "Raw3D", WW[WW.Raw2DArray = 11] = "Raw2DArray", WW[WW.DepthStencil = 12] = "DepthStencil", WW[WW.CubeRawRGBD = 13] = "CubeRawRGBD", WW[WW.Depth = 14] = "Depth", WW[WW.External = 15] = "External"
    }(mW || (mW = {}));
    class PW extends NW.c {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(WW) {
        this._useMipMaps = WW
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(WW) {
        this._uniqueId = WW
      }
      VA() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new EW.e, this.onErrorObservable = new EW.e, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = WW, this._source = iW, this._uniqueId = PW._Counter++, OW || (this._hardwareTexture = WW._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, WW, iW, OW), this.width = WW, this.height = iW, this.depth = OW, this.baseWidth = WW, this.baseHeight = iW, this.baseDepth = OW, this._size = WW * iW * OW
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const WW = this.onRebuildCallback(this),
            iW = iW => {
              iW._swapAndDie(this, !1), this.isReady = WW.isReady
            };
          return void(WW.isAsync ? WW.proxy.then(iW) : iW(WW.proxy))
        }
        let WW;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(WW = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (WW => {
              WW._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (WW = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), WW._swapAndDie(this, !1), this._bufferViewArray)
              for (let WW = 0; WW < this._bufferViewArray.length; WW++) {
                const iW = this._bufferViewArray[WW];
                iW && this._engine.updateRawTexture(this, iW, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, WW)
              }
            this.isReady = !0;
            break;
          case 10:
            WW = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), WW._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (WW = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), WW._swapAndDie(this, !1), this._bufferViewArray)
              for (let WW = 0; WW < this._bufferViewArray.length; WW++) {
                const iW = this._bufferViewArray[WW];
                iW && this._engine.updateRawTexture2DArray(this, iW, this.format, this.invertY, this._compression, this.type, WW)
              }
            this.isReady = !0;
            break;
          case 4:
            WW = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), WW._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(WW = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              WW._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            WW = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), WW._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return WW = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (WW => {
              WW && WW._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(WW._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(WW._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), WW._hardwareTexture = this._hardwareTexture, WW._setUniqueId(PW._Counter++), iW && (WW._isRGBD = this._isRGBD), this._lodTextureHigh && (WW._lodTextureHigh && WW._lodTextureHigh.dispose(), WW._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (WW._lodTextureMid && WW._lodTextureMid.dispose(), WW._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (WW._lodTextureLow && WW._lodTextureLow.dispose(), WW._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (WW._irradianceTexture && WW._irradianceTexture.dispose(), WW._irradianceTexture = this._irradianceTexture);
        const OW = this._engine.getLoadedTexturesCache();
        let mW = OW.indexOf(this); - 1 !== mW && OW.splice(mW, 1), mW = OW.indexOf(WW), -1 === mW && OW.push(WW)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    PW._Counter = 0
  },
  41467: (WW, iW, OW) => {
    function mW(WW) {
      return 13 === WW || 14 === WW || 15 === WW || 16 === WW || 17 === WW || 18 === WW || 19 === WW
    }

    function EW(WW) {
      return 8 === WW || 9 === WW || 10 === WW || 11 === WW
    }

    function NW(WW) {
      return 0 === WW || 5 === WW || 7 === WW || 11 === WW
    }

    function PW(WW) {
      return 13 === WW || 17 === WW || 18 === WW || 19 === WW
    }
    OW.d(iW, {
      c: () => PW,
      e: () => mW,
      i: () => EW,
      m: () => NW
    })
  },
  41380: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW
    });
    class mW {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(WW) {
        this._cachedWrapU = WW
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(WW) {
        this._cachedWrapV = WW
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(WW) {
        this._cachedWrapR = WW
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(WW) {
        this._cachedAnisotropicFilteringLevel = WW
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(WW) {
        this._comparisonFunction = WW
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(WW) {
        this._useMipMaps = WW
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = WW, this._cachedWrapV = iW, this._cachedWrapR = OW, this._cachedAnisotropicFilteringLevel = mW, this.samplingMode = EW, this._comparisonFunction = NW, this
      }
      compareSampler(WW) {
        return this._cachedWrapU === WW._cachedWrapU && this._cachedWrapV === WW._cachedWrapV && this._cachedWrapR === WW._cachedWrapR && this._cachedAnisotropicFilteringLevel === WW._cachedAnisotropicFilteringLevel && this.samplingMode === WW.samplingMode && this._comparisonFunction === WW._comparisonFunction && this._useMipMaps === WW._useMipMaps
      }
    }
  },
  41639: (WW, iW, OW) => {
    function mW(WW) {
      WW.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    OW.d(iW, {
      e: () => mW
    })
  },
  41439: (WW, iW, OW) => {
    function mW(WW) {
      return void 0 === WW.getPipelineContext
    }
    OW.d(iW, {
      d: () => mW
    })
  },
  41840: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW
    });
    var mW = OW(41420);
    class EW {
      static GetEffect(WW) {
        return void 0 === WW.getPipelineContext ? WW.effect : WW
      }
      constructor(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = WW.createDrawContext(), iW && (this.materialContext = WW.createMaterialContext())
      }
      setEffect(WW, iW) {
        let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        OW || this.effect === WW || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = WW, void 0 !== iW && (this.defines = iW), OW && this.drawContext?.reset()
      }
      dispose() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const iW = this.effect;
          WW ? iW.dispose() : mW.d.SetImmediate((() => {
            iW.VA().onEndFrameObservable.addOnce((() => {
              iW.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  41401: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => ZW,
      e: () => lW,
      g: () => wW,
      k: () => tW
    });
    var mW = OW(41406),
      EW = OW(41408),
      NW = OW(41392),
      PW = OW(39911),
      LW = OW(41418),
      cW = OW(41412);

    function wW(WW, iW) {
      return (0, EW.A)(iW).cachedPipelines[WW]
    }

    function tW(WW) {
      const iW = WW._name,
        OW = WW.context;
      if (iW && OW) {
        const WW = (0, EW.A)(OW),
          mW = WW.cachedPipelines[iW];
        mW?.dispose(), delete WW.cachedPipelines[iW]
      }
    }

    function ZW(WW, iW, OW, EW, NW, PW, cW) {
      let wW, tW;
      const ZW = (0, mW.j)() ? PW?.getHostDocument() : null;
      wW = "string" === typeof iW ? iW : "string" === typeof iW.vertexSource ? "source:" + iW.vertexSource : "string" === typeof iW.vertexElement ? ZW?.getElementById(iW.vertexElement) || iW.vertexElement : iW.vertex || iW, tW = "string" === typeof iW ? iW : "string" === typeof iW.fragmentSource ? "source:" + iW.fragmentSource : "string" === typeof iW.fragmentElement ? ZW?.getElementById(iW.fragmentElement) || iW.fragmentElement : iW.fragment || iW;
      const lW = [void 0, void 0],
        AW = () => {
          if (lW[0] && lW[1]) {
            const [mW, wW] = lW;
            (0, LW.c)(WW), (0, LW.i)(mW, WW, ((mW, tW) => {
              cW && (cW._vertexSourceCodeBeforeMigration = tW), OW && (mW = OW("vertex", mW)), WW.isFragment = !0, (0, LW.i)(wW, WW, ((PW, wW) => {
                cW && (cW._fragmentSourceCodeBeforeMigration = wW), OW && (PW = OW("fragment", PW));
                const tW = (0, LW.b)(mW, PW, WW);
                WW = null;
                const ZW = function(WW, iW, OW, mW) {
                  if (OW) {
                    return {
                      vertexSourceCode: (1 === mW ? "//" : "") + "#define SHADER_NAME vertex:" + (OW.vertexElement || OW.vertex || OW.spectorName || OW) + "\n" + WW,
                      fragmentSourceCode: (1 === mW ? "//" : "") + "#define SHADER_NAME fragment:" + (OW.fragmentElement || OW.fragment || OW.spectorName || OW) + "\n" + iW
                    }
                  }
                  return {
                    vertexSourceCode: WW,
                    fragmentSourceCode: iW
                  }
                }(tW.vertexCode, tW.fragmentCode, iW, NW);
                EW?.(ZW.vertexSourceCode, ZW.fragmentSourceCode)
              }), PW)
            }), PW)
          }
        };
      xW(wW, "Vertex", "", (WW => {
        cW && (cW._rawVertexSourceCode = WW), lW[0] = WW, AW()
      }), NW), xW(tW, "Fragment", "Pixel", (WW => {
        cW && (cW._rawFragmentSourceCode = WW), lW[1] = WW, AW()
      }), NW)
    }

    function xW(WW, iW, OW, EW, PW, LW) {
      if ("undefined" !== typeof HTMLElement && WW instanceof HTMLElement) {
        return void EW((0, mW.c)(WW))
      }
      if ("source:" === WW.substring(0, 7)) return void EW(WW.substring(7));
      if ("base64:" === WW.substring(0, 7)) {
        return void EW(window.atob(WW.substring(7)))
      }
      const wW = NW.c.GetShadersStore(PW);
      if (wW[WW + iW + "Shader"]) return void EW(wW[WW + iW + "Shader"]);
      if (OW && wW[WW + OW + "Shader"]) return void EW(wW[WW + OW + "Shader"]);
      let tW;
      if (tW = "." === WW[0] || "/" === WW[0] || WW.indexOf("http") > -1 ? WW : NW.c.GetShadersRepository(PW) + WW, !(LW = LW || cW.l)) throw new Error("loadFileInjection is not defined");
      LW(tW + "." + iW.toLowerCase() + ".fx", EW)
    }
    const lW = (WW, iW, OW, mW) => {
      try {
        const NW = WW.context ? (0, EW.A)(WW.context) : null;
        NW && (NW.disableParallelShaderCompile = WW.disableParallelCompilation);
        const PW = WW.existingPipelineContext || iW(WW.shaderProcessingContext);
        return PW._name = WW.name, WW.name && NW && (NW.cachedPipelines[WW.name] = PW), OW(PW, WW.vertex, WW.fragment, !!WW.createAsRaw, "", "", WW.rebuildRebind, WW.defines, WW.transformFeedbackVaryings, "", (() => {
          mW(PW, (() => {
            WW.onRenderingStateCompiled?.(PW)
          }))
        })), PW
      } catch (NW) {
        throw PW.b.Error("Error compiling effect"), NW
      }
    }
  },
  41389: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => cW
    });
    var mW = OW(38276),
      EW = OW(39911),
      NW = OW(41392),
      PW = OW(41401),
      LW = OW(41420);
    class cW {
      static get ShadersRepository() {
        return NW.c.ShadersRepository
      }
      static set ShadersRepository(WW) {
        NW.c.ShadersRepository = WW
      }
      get Ay() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new mW.e), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(WW, iW, OW) {
        let EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          NW = arguments.length > 4 ? arguments[4] : void 0,
          LW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          wW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          tW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          ZW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          xW = arguments.length > 9 ? arguments[9] : void 0,
          lW = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          AW = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          bW = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new mW.e, this.onErrorObservable = new mW.e, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = WW, this._key = lW;
        const jW = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let UW;
        if (iW.attributes) {
          const WW = iW;
          if (this._engine = OW, this._attributesNames = WW.attributes, this._uniformsNames = WW.uniformsNames.concat(WW.samplers), this._samplerList = WW.samplers.slice(), this.defines = WW.defines, this.onError = WW.onError, this.onCompiled = WW.onCompiled, this._fallbacks = WW.fallbacks, this._indexParameters = WW.indexParameters, this._transformFeedbackVaryings = WW.transformFeedbackVaryings || null, this._multiTarget = !!WW.multiTarget, this._shaderLanguage = WW.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!WW.disableParallelShaderCompilation, WW.uniformBuffersNames) {
            this._uniformBuffersNamesList = WW.uniformBuffersNames.slice();
            for (let iW = 0; iW < WW.uniformBuffersNames.length; iW++) this._uniformBuffersNames[WW.uniformBuffersNames[iW]] = iW
          }
          this._processFinalCode = WW.processFinalCode ?? null, this._processCodeAfterIncludes = WW.processCodeAfterIncludes ?? void 0, bW = WW.extraInitializationsAsync, UW = WW.existingPipelineContext
        } else this._engine = NW, this.defines = null == LW ? "" : LW, this._uniformsNames = OW.concat(EW), this._samplerList = EW ? EW.slice() : [], this._attributesNames = iW, this._uniformBuffersNamesList = [], this._shaderLanguage = AW, this.onError = ZW, this.onCompiled = tW, this._indexParameters = xW, this._fallbacks = wW;
        "WEBGL2" === this._engine.shaderPlatformName && (UW = (0, PW.g)(jW, this._engine._gl) ?? UW), this._attributeLocationByName = {}, this.uniqueId = cW._UniqueIdSeed++, UW ? (this._pipelineContext = UW, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, bW).catch((WW => {
          const iW = WW?.message ?? String(WW),
            OW = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${iW}`);
          WW && "string" === typeof WW.stack && (OW.stack = `${OW.message}\nCaused by: ${WW.stack}`), this._processCompilationErrors(OW)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.Ay || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          mW = arguments.length > 3 ? arguments[3] : void 0;
        mW && await mW(), this._processingContext = OW || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const EW = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: WW ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: NW.c.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: NW.c.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          nmW: this._engine.nmW,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, PW.d)(EW, this.name, this._processFinalCode, ((WW, OW) => {
          this._vertexSourceCode = WW, this._fragmentSourceCode = OW, this._prepareEffect(iW)
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
        return !!this._engine.Ay || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      VA() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(WW) {
        return this._attributes[WW]
      }
      getAttributeLocationByName(WW) {
        return this._attributeLocationByName[WW]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(WW) {
        return this._uniformsNames.indexOf(WW)
      }
      getUniform(WW) {
        return this._uniforms[WW]
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
        return await new Promise((WW => {
          this.executeWhenCompiled(WW)
        }))
      }
      executeWhenCompiled(WW) {
        this.isReady() ? WW(this) : (this.onCompileObservable.add((iW => {
          WW(iW)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(WW) {
        (0, LW.g)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (iW => {
          this._processCompilationErrors(iW, WW)
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
            nmW: this._engine.nmW,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(WW, iW, OW, mW) {
        this._isReady = !1, this._vertexSourceCodeOverride = WW, this._fragmentSourceCodeOverride = iW, this.onError = (WW, iW) => {
          mW && mW(iW)
        }, this.onCompiled = () => {
          const WW = this.VA().scenes;
          if (WW)
            for (let iW = 0; iW < WW.length; iW++) WW[iW].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(OW)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(WW) {
        if (this._pipelineContext = WW, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let iW = 0; iW < this._attributesNames.length; iW++) {
            const WW = this._attributesNames[iW];
            this._attributeLocationByName[WW] = this._attributes[iW]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), cW.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const iW = this._pipelineContext;
        this._isReady = !1;
        try {
          const OW = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            mW = OW ? null : this.defines,
            EW = OW ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            NW = OW ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            LW = this._engine;
          this._pipelineContext = (0, PW.e)({
            existingPipelineContext: WW ? iW : null,
            vertex: EW,
            fragment: NW,
            context: "WEBGL2" === LW.shaderPlatformName || "WEBGL1" === LW.shaderPlatformName ? LW._gl : void 0,
            rebuildRebind: (WW, iW, OW, mW) => this._rebuildProgram(WW, iW, OW, mW),
            defines: mW,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: OW,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: OW => {
              iW && !WW && this._engine._deletePipelineContext(iW), OW && this._onRenderingStateCompiled(OW)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(iW)
        } catch (OW) {
          this._processCompilationErrors(OW, iW)
        }
      }
      _getShaderCodeAndErrorLine(WW, iW, OW) {
        const mW = OW ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let EW = null;
        if (iW && WW) {
          const NW = iW.match(mW);
          if (NW && 2 === NW.length) {
            const iW = parseInt(NW[1]),
              mW = WW.split("\n", -1);
            mW.length >= iW && (EW = `Offending line [${iW}] in ${OW?"fragment":"vertex"} code: ${mW[iW-1]}`)
          }
        }
        return [WW, EW]
      }
      _processCompilationErrors(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof WW?.stack ? WW.stack : WW?.message ?? String(WW);
        const OW = this._attributesNames,
          mW = this._fallbacks;
        if (EW.b.Error("Unable to compile effect:"), EW.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), EW.b.Error(`Attributes: ${OW.join(" ")}`), EW.b.Error("Defines:\n" + this.defines), cW.LogShaderCodeOnCompilationError) {
          let WW, iW = null,
            OW = null;
          this._pipelineContext?._getVertexShaderCode() && ([WW, iW] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), WW && (EW.b.Error("Vertex code:"), EW.b.Error(WW))), this._pipelineContext?._getFragmentShaderCode() && ([WW, OW] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), WW && (EW.b.Error("Fragment code:"), EW.b.Error(WW))), iW && EW.b.Error(iW), OW && EW.b.Error(OW)
        }
        EW.b.Error("Error: " + this._compilationError);
        const NW = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        iW && (this._pipelineContext = iW, this._isReady = !0, NW()), mW ? (this._pipelineContext = null, mW.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, EW.b.Error("Trying next fallback."), this.defines = mW.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, NW(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, iW || NW())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(WW, iW) {
        this._engine._bindTexture(this._samplers[WW], iW, WW)
      }
      setTexture(WW, iW) {
        this._engine.setTexture(this._samplers[WW], this._uniforms[WW], iW, WW)
      }
      setTextureArray(WW, iW) {
        const OW = WW + "Ex";
        if (-1 === this._samplerList.indexOf(OW + "0")) {
          const mW = this._samplerList.indexOf(WW);
          for (let WW = 1; WW < iW.length; WW++) {
            const iW = OW + (WW - 1).toString();
            this._samplerList.splice(mW + WW, 0, iW)
          }
          let EW = 0;
          for (const WW of this._samplerList) this._samplers[WW] = EW, EW += 1
        }
        this._engine.setTextureArray(this._samplers[WW], this._uniforms[WW], iW, WW)
      }
      bindUniformBuffer(WW, iW) {
        const OW = this._uniformBuffersNames[iW];
        void 0 === OW || cW._BaseCache[OW] === WW && this._engine._features.useUBOBindingCache || (cW._BaseCache[OW] = WW, this._engine.bindUniformBufferBase(WW, OW, iW))
      }
      bindUniformBlock(WW, iW) {
        this._engine.bindUniformBlock(this._pipelineContext, WW, iW)
      }
      setInt(WW, iW) {
        return this._pipelineContext.setInt(WW, iW), this
      }
      setInt2(WW, iW, OW) {
        return this._pipelineContext.setInt2(WW, iW, OW), this
      }
      setInt3(WW, iW, OW, mW) {
        return this._pipelineContext.setInt3(WW, iW, OW, mW), this
      }
      setInt4(WW, iW, OW, mW, EW) {
        return this._pipelineContext.setInt4(WW, iW, OW, mW, EW), this
      }
      setIntArray(WW, iW) {
        return this._pipelineContext.setIntArray(WW, iW), this
      }
      setIntArray2(WW, iW) {
        return this._pipelineContext.setIntArray2(WW, iW), this
      }
      setIntArray3(WW, iW) {
        return this._pipelineContext.setIntArray3(WW, iW), this
      }
      setIntArray4(WW, iW) {
        return this._pipelineContext.setIntArray4(WW, iW), this
      }
      setUInt(WW, iW) {
        return this._pipelineContext.setUInt(WW, iW), this
      }
      setUInt2(WW, iW, OW) {
        return this._pipelineContext.setUInt2(WW, iW, OW), this
      }
      setUInt3(WW, iW, OW, mW) {
        return this._pipelineContext.setUInt3(WW, iW, OW, mW), this
      }
      setUInt4(WW, iW, OW, mW, EW) {
        return this._pipelineContext.setUInt4(WW, iW, OW, mW, EW), this
      }
      setUIntArray(WW, iW) {
        return this._pipelineContext.setUIntArray(WW, iW), this
      }
      setUIntArray2(WW, iW) {
        return this._pipelineContext.setUIntArray2(WW, iW), this
      }
      setUIntArray3(WW, iW) {
        return this._pipelineContext.setUIntArray3(WW, iW), this
      }
      setUIntArray4(WW, iW) {
        return this._pipelineContext.setUIntArray4(WW, iW), this
      }
      setFloatArray(WW, iW) {
        return this._pipelineContext.setArray(WW, iW), this
      }
      setFloatArray2(WW, iW) {
        return this._pipelineContext.setArray2(WW, iW), this
      }
      setFloatArray3(WW, iW) {
        return this._pipelineContext.setArray3(WW, iW), this
      }
      setFloatArray4(WW, iW) {
        return this._pipelineContext.setArray4(WW, iW), this
      }
      setArray(WW, iW) {
        return this._pipelineContext.setArray(WW, iW), this
      }
      setArray2(WW, iW) {
        return this._pipelineContext.setArray2(WW, iW), this
      }
      setArray3(WW, iW) {
        return this._pipelineContext.setArray3(WW, iW), this
      }
      setArray4(WW, iW) {
        return this._pipelineContext.setArray4(WW, iW), this
      }
      setMatrices(WW, iW) {
        return this._pipelineContext.setMatrices(WW, iW), this
      }
      setMatrix(WW, iW) {
        return this._pipelineContext.setMatrix(WW, iW), this
      }
      setMatrix3x3(WW, iW) {
        return this._pipelineContext.setMatrix3x3(WW, iW), this
      }
      setMatrix2x2(WW, iW) {
        return this._pipelineContext.setMatrix2x2(WW, iW), this
      }
      setFloat(WW, iW) {
        return this._pipelineContext.setFloat(WW, iW), this
      }
      setBool(WW, iW) {
        return this._pipelineContext.setInt(WW, iW ? 1 : 0), this
      }
      setVector2(WW, iW) {
        return this._pipelineContext.setVector2(WW, iW), this
      }
      setFloat2(WW, iW, OW) {
        return this._pipelineContext.setFloat2(WW, iW, OW), this
      }
      setVector3(WW, iW) {
        return this._pipelineContext.setVector3(WW, iW), this
      }
      setFloat3(WW, iW, OW, mW) {
        return this._pipelineContext.setFloat3(WW, iW, OW, mW), this
      }
      setVector4(WW, iW) {
        return this._pipelineContext.setVector4(WW, iW), this
      }
      setQuaternion(WW, iW) {
        return this._pipelineContext.setQuaternion(WW, iW), this
      }
      setFloat4(WW, iW, OW, mW, EW) {
        return this._pipelineContext.setFloat4(WW, iW, OW, mW, EW), this
      }
      setColor3(WW, iW) {
        return this._pipelineContext.setColor3(WW, iW), this
      }
      setColor4(WW, iW, OW) {
        return this._pipelineContext.setColor4(WW, iW, OW), this
      }
      setDirectColor4(WW, iW) {
        return this._pipelineContext.setDirectColor4(WW, iW), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (cW.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, PW.k)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        iW && (NW.c.GetShadersStore(mW)[`${WW}PixelShader`] = iW), OW && (NW.c.GetShadersStore(mW)[`${WW}VertexShader`] = OW)
      }
      static ResetCache() {
        cW._BaseCache = {}
      }
    }
    cW.LogShaderCodeOnCompilationError = !0, cW.PersistentMode = !1, cW.AutomaticallyClearCodeCache = !1, cW._UniqueIdSeed = 0, cW._BaseCache = {}, cW.ShadersStore = NW.c.ShadersStore, cW.IncludesShadersStore = NW.c.IncludesShadersStore
  },
  41670: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => tW,
      f: () => YW,
      j: () => SW
    });
    var mW = OW(41389),
      EW = OW(38241),
      NW = OW(38291),
      PW = OW(41649);
    const LW = new EW.d,
      cW = new EW.d,
      wW = new EW.d,
      tW = {
        bD: () => {},
        eyeAtCamera: !0
      };

    function ZW(WW, iW, OW) {
      const mW = OW.wEW(),
        EW = iW.wEW();
      for (let NW = 0; NW < 16; NW++) mW[NW] = EW[NW];
      return mW[12] -= WW.x, mW[13] -= WW.y, mW[14] -= WW.z, OW.markAsUpdated(), OW
    }

    function xW(WW, iW, OW) {
      return (0, NW.i)(iW, cW), ZW(WW, cW, wW), (0, NW.i)(wW, OW), OW
    }

    function lW(WW, iW, OW) {
      if (!tW.eyeAtCamera) return xW(WW, iW, OW);
      const mW = OW.wEW(),
        EW = iW.wEW();
      for (let NW = 0; NW < 16; NW++) mW[NW] = EW[NW];
      return mW[12] = 0, mW[13] = 0, mW[14] = 0, OW.markAsUpdated(), OW
    }

    function AW(WW, iW, OW, mW) {
      return (0, NW.o)(lW(WW, iW, mW), OW, mW), mW
    }

    function bW(WW, iW, OW, mW) {
      return (0, NW.i)(OW, cW), (0, NW.o)(iW, cW, wW), ZW(WW, wW, cW), lW(WW, OW, wW), (0, NW.o)(cW, wW, mW), mW
    }

    function jW(WW, iW, OW, mW, EW, PW) {
      return (0, NW.i)(OW, cW), (0, NW.o)(iW, cW, wW), ZW(WW, wW, cW), AW(WW, mW, EW, wW), (0, NW.o)(cW, wW, PW), PW
    }

    function UW(WW, iW) {
      const OW = tW.bD();
      if (!OW || LW === iW) return iW;
      LW.updateFlag = iW.updateFlag;
      const mW = OW.floatingOriginOffset;
      switch (WW) {
        case "world":
          return ZW(mW, iW, LW);
        case "view":
          return lW(mW, iW, LW);
        case "worldView":
          return bW(mW, iW, OW.getViewMatrix(), LW);
        case "viewProjection":
          return AW(mW, OW.getViewMatrix(), OW.getProjectionMatrix(), LW);
        case "worldViewProjection":
          return jW(mW, iW, OW.getTransformMatrix(), OW.getViewMatrix(), OW.getProjectionMatrix(), LW);
        default:
          if (WW.startsWith("u_")) {
            const EW = WW.toLowerCase();
            if (EW.startsWith("u_worldviewprojection")) return jW(mW, iW, OW.getTransformMatrix(), OW.getViewMatrix(), OW.getProjectionMatrix(), LW);
            if (EW.startsWith("u_viewprojection")) return AW(mW, OW.getViewMatrix(), OW.getProjectionMatrix(), LW);
            if (EW.startsWith("u_worldview")) return bW(mW, iW, OW.getViewMatrix(), LW);
            if (EW.startsWith("u_world")) return ZW(mW, iW, LW);
            if (EW.startsWith("u_view")) return lW(mW, iW, LW)
          }
          return iW
      }
    }
    const kW = PW.c,
      sW = mW.e,
      MW = kW.prototype._updateMatrixForUniform,
      KW = mW.e.prototype.setMatrix;

    function SW() {
      mW.e.prototype.setMatrix = KW, sW._setMatrixOverride = void 0, kW.prototype._updateMatrixForUniform = MW, kW.prototype._updateMatrixForUniformOverride = void 0
    }

    function YW() {
      sW.prototype._setMatrixOverride = KW, sW.prototype.setMatrix = function(WW, iW) {
        return this._setMatrixOverride(WW, UW(WW, iW)), this
      }, kW.prototype._updateMatrixForUniformOverride = MW, kW.prototype._updateMatrixForUniform = function(WW, iW) {
        this._updateMatrixForUniformOverride(WW, UW(WW, iW))
      }
    }
  },
  41644: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW,
      h: () => EW
    });
    var mW = OW(41639);

    function EW(WW, iW) {
      iW.WHITEBALANCE && WW.push("whiteBalanceMatrix"), iW.EXPOSURE && WW.push("exposureLinear"), iW.CONTRAST && WW.push("contrast"), iW.COLORGRADING && WW.push("colorTransformSettings"), (iW.VIGNETTE || iW.DITHER) && WW.push("vInverseScreenSize"), iW.VIGNETTE && (WW.push("vignetteSettings1"), WW.push("vignetteSettings2")), iW.COLORCURVES && (0, mW.e)(WW), iW.DITHER && WW.push("ditherIntensity")
    }

    function NW(WW, iW) {
      iW.COLORGRADING && WW.push("txColorTransform")
    }
  },
  41634: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => HW,
      g: () => oW
    });
    var mW = OW(41516),
      EW = OW(41519),
      NW = OW(38276),
      PW = OW(38372),
      LW = OW(38285),
      cW = OW(38241);
    const wW = [
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
      tW = 1e6 / wW[wW.length - 1][0],
      ZW = 150;

    function xW(WW, iW) {
      const OW = Number.isNaN(WW) ? tW : Math.max(WW, tW),
        mW = (0, LW.Clamp)(1e6 / OW, wW[0][0], wW[wW.length - 1][0]);
      let EW = 0,
        NW = wW.length - 1;
      for (; NW - EW > 1;) {
        const WW = EW + NW >> 1;
        wW[WW][0] <= mW ? EW = WW : NW = WW
      }
      const PW = EW,
        [xW, lW, AW, bW] = wW[PW],
        [jW, UW, kW, sW] = wW[PW + 1],
        MW = (mW - xW) / (jW - xW),
        KW = cW.m.Lerp(new cW.m(lW, AW), new cW.m(UW, kW), MW),
        SW = cW.m.Normalize(new cW.m(1, bW)),
        YW = cW.m.Normalize(new cW.m(1, sW)),
        yW = cW.m.Normalize(cW.m.Lerp(SW, YW, MW)),
        TW = (0, LW.Clamp)(iW, -150, ZW);
      KW.yEW(yW.scale(TW / 3e3));
      const JW = 2 * KW.x - 8 * KW.y + 4,
        hW = 3 * KW.x / JW,
        HW = 2 * KW.y / JW;
      return new cW.q(hW / HW, 1, (1 - hW - HW) / HW)
    }
    const lW = cW.d.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      AW = cW.d.Invert(lW);

    function bW(WW, iW) {
      const OW = iW > 0 ? WW / iW : 10;
      return (0, LW.Clamp)(OW, .1, 10)
    }

    function jW(WW, iW) {
      const OW = cW.q.TransformNormal(WW, lW),
        mW = cW.q.TransformNormal(iW, lW),
        EW = cW.d.FromArray([bW(mW.x, OW.x), 0, 0, 0, 0, bW(mW.y, OW.y), 0, 0, 0, 0, bW(mW.z, OW.z), 0, 0, 0, 0, 1]);
      return lW.multiply(EW).multiply(AW)
    }
    const UW = new cW.q(.95047, 1, 1.08883),
      kW = cW.d.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(jW(UW, xW(6500, 0))),
      sW = cW.d.Invert(kW),
      MW = cW.q.TransformNormal(new cW.q(1, 1, 1), kW);
    var KW = OW(41538),
      SW = OW(41639);
    let YW = (() => {
      var WW;
      let iW, OW, NW, LW, cW, wW, tW, ZW, xW, lW, AW, bW, jW = [],
        UW = [],
        kW = [],
        sW = [],
        MW = [],
        YW = [],
        yW = [],
        TW = [],
        JW = [],
        hW = [],
        HW = [],
        nW = [],
        uW = [],
        oW = [],
        dW = [],
        eW = [],
        vW = [],
        gW = [],
        DW = [],
        VW = [],
        pW = [],
        fW = [],
        CW = [],
        XW = [];
      return WW = class {
        constructor() {
          this._dirty = !0, this._tempColor = new PW.d(0, 0, 0, 0), this._globalCurve = new PW.d(0, 0, 0, 0), this._highlightsCurve = new PW.d(0, 0, 0, 0), this._midtonesCurve = new PW.d(0, 0, 0, 0), this._shadowsCurve = new PW.d(0, 0, 0, 0), this._positiveCurve = new PW.d(0, 0, 0, 0), this._negativeCurve = new PW.d(0, 0, 0, 0), this._globalHue = (0, mW.g)(this, jW, 30), this._globalDensity = ((0, mW.g)(this, UW), (0, mW.g)(this, kW, 0)), this._globalSaturation = ((0, mW.g)(this, sW), (0, mW.g)(this, MW, 0)), this._globalExposure = ((0, mW.g)(this, YW), (0, mW.g)(this, yW, 0)), this._highlightsHue = ((0, mW.g)(this, TW), (0, mW.g)(this, JW, 30)), this._highlightsDensity = ((0, mW.g)(this, hW), (0, mW.g)(this, HW, 0)), this._highlightsSaturation = ((0, mW.g)(this, nW), (0, mW.g)(this, uW, 0)), this._highlightsExposure = ((0, mW.g)(this, oW), (0, mW.g)(this, dW, 0)), this._midtonesHue = ((0, mW.g)(this, eW), (0, mW.g)(this, vW, 30)), this._midtonesDensity = ((0, mW.g)(this, gW), (0, mW.g)(this, DW, 0)), this._midtonesSaturation = ((0, mW.g)(this, VW), (0, mW.g)(this, pW, 0)), this._midtonesExposure = ((0, mW.g)(this, fW), (0, mW.g)(this, CW, 0)), this._shadowsHue = ((0, mW.g)(this, XW), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(WW) {
          this._globalHue = WW, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(WW) {
          this._globalDensity = WW, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(WW) {
          this._globalSaturation = WW, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(WW) {
          this._globalExposure = WW, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(WW) {
          this._highlightsHue = WW, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(WW) {
          this._highlightsDensity = WW, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(WW) {
          this._highlightsSaturation = WW, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(WW) {
          this._highlightsExposure = WW, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(WW) {
          this._midtonesHue = WW, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(WW) {
          this._midtonesDensity = WW, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(WW) {
          this._midtonesSaturation = WW, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(WW) {
          this._midtonesExposure = WW, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(WW) {
          this._shadowsHue = WW, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(WW) {
          this._shadowsDensity = WW, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(WW) {
          this._shadowsSaturation = WW, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(WW) {
          this._shadowsExposure = WW, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(iW, OW, mW, EW, NW) {
          null != iW && (iW = WW._Clamp(iW, 0, 360), OW = WW._Clamp(OW, -100, 100), mW = WW._Clamp(mW, -100, 100), EW = WW._Clamp(EW, -100, 100), OW = WW._ApplyColorGradingSliderNonlinear(OW), OW *= .5, EW = WW._ApplyColorGradingSliderNonlinear(EW), OW < 0 && (OW *= -1, iW = (iW + 180) % 360), WW._FromHSBToRef(iW, OW, 50 + .25 * EW, NW), NW.scaleToRef(2, NW), NW.a = 1 + .01 * mW)
        }
        static _ApplyColorGradingSliderNonlinear(WW) {
          WW /= 100;
          let iW = Math.abs(WW);
          return iW = Math.pow(iW, 2), WW < 0 && (iW *= -1), iW *= 100, iW
        }
        static _FromHSBToRef(iW, OW, mW, EW) {
          let NW = WW._Clamp(iW, 0, 360);
          const PW = WW._Clamp(OW / 100, 0, 1),
            LW = WW._Clamp(mW / 100, 0, 1);
          if (0 === PW) EW.r = LW, EW.g = LW, EW.b = LW;
          else {
            NW /= 60;
            const WW = Math.floor(NW),
              iW = NW - WW,
              OW = LW * (1 - PW),
              mW = LW * (1 - PW * iW),
              cW = LW * (1 - PW * (1 - iW));
            switch (WW) {
              case 0:
                EW.r = LW, EW.g = cW, EW.b = OW;
                break;
              case 1:
                EW.r = mW, EW.g = LW, EW.b = OW;
                break;
              case 2:
                EW.r = OW, EW.g = LW, EW.b = cW;
                break;
              case 3:
                EW.r = OW, EW.g = mW, EW.b = LW;
                break;
              case 4:
                EW.r = cW, EW.g = OW, EW.b = LW;
                break;
              default:
                EW.r = LW, EW.g = OW, EW.b = mW
            }
          }
          EW.a = 1
        }
        static _Clamp(WW, iW, OW) {
          return Math.min(Math.max(WW, iW), OW)
        }
        clone() {
          return KW.d.Clone((() => new WW), this)
        }
        serialize() {
          return KW.d.Serialize(this)
        }
        _bind(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), WW && (WW.setFloat4(iW, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), WW.setFloat4(OW, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), WW.setFloat4(mW, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const PW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        iW = [(0, EW.M)()], OW = [(0, EW.M)()], NW = [(0, EW.M)()], LW = [(0, EW.M)()], cW = [(0, EW.M)()], wW = [(0, EW.M)()], tW = [(0, EW.M)()], ZW = [(0, EW.M)()], xW = [(0, EW.M)()], lW = [(0, EW.M)()], AW = [(0, EW.M)()], bW = [(0, EW.M)()], (0, mW.e)(null, null, iW, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: WW => "_globalHue" in WW,
            get: WW => WW._globalHue,
            set: (WW, iW) => {
              WW._globalHue = iW
            }
          },
          metadata: PW
        }, jW, UW), (0, mW.e)(null, null, OW, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "_globalDensity" in WW,
            get: WW => WW._globalDensity,
            set: (WW, iW) => {
              WW._globalDensity = iW
            }
          },
          metadata: PW
        }, kW, sW), (0, mW.e)(null, null, NW, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: WW => "_globalSaturation" in WW,
            get: WW => WW._globalSaturation,
            set: (WW, iW) => {
              WW._globalSaturation = iW
            }
          },
          metadata: PW
        }, MW, YW), (0, mW.e)(null, null, LW, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: WW => "_globalExposure" in WW,
            get: WW => WW._globalExposure,
            set: (WW, iW) => {
              WW._globalExposure = iW
            }
          },
          metadata: PW
        }, yW, TW), (0, mW.e)(null, null, cW, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: WW => "_highlightsHue" in WW,
            get: WW => WW._highlightsHue,
            set: (WW, iW) => {
              WW._highlightsHue = iW
            }
          },
          metadata: PW
        }, JW, hW), (0, mW.e)(null, null, wW, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "_highlightsDensity" in WW,
            get: WW => WW._highlightsDensity,
            set: (WW, iW) => {
              WW._highlightsDensity = iW
            }
          },
          metadata: PW
        }, HW, nW), (0, mW.e)(null, null, tW, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: WW => "_highlightsSaturation" in WW,
            get: WW => WW._highlightsSaturation,
            set: (WW, iW) => {
              WW._highlightsSaturation = iW
            }
          },
          metadata: PW
        }, uW, oW), (0, mW.e)(null, null, ZW, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: WW => "_highlightsExposure" in WW,
            get: WW => WW._highlightsExposure,
            set: (WW, iW) => {
              WW._highlightsExposure = iW
            }
          },
          metadata: PW
        }, dW, eW), (0, mW.e)(null, null, xW, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: WW => "_midtonesHue" in WW,
            get: WW => WW._midtonesHue,
            set: (WW, iW) => {
              WW._midtonesHue = iW
            }
          },
          metadata: PW
        }, vW, gW), (0, mW.e)(null, null, lW, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "_midtonesDensity" in WW,
            get: WW => WW._midtonesDensity,
            set: (WW, iW) => {
              WW._midtonesDensity = iW
            }
          },
          metadata: PW
        }, DW, VW), (0, mW.e)(null, null, AW, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: WW => "_midtonesSaturation" in WW,
            get: WW => WW._midtonesSaturation,
            set: (WW, iW) => {
              WW._midtonesSaturation = iW
            }
          },
          metadata: PW
        }, pW, fW), (0, mW.e)(null, null, bW, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: WW => "_midtonesExposure" in WW,
            get: WW => WW._midtonesExposure,
            set: (WW, iW) => {
              WW._midtonesExposure = iW
            }
          },
          metadata: PW
        }, CW, XW), PW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: PW
        })
      })(), WW.PrepareUniforms = SW.e, WW
    })();

    function yW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      WW._bind(iW, OW, mW, EW)
    }
    var TW = OW(41458),
      JW = OW(41644),
      hW = OW(38299);
    let HW = (() => {
        var WW;
        let iW, OW, wW, lW, AW, bW, UW, SW, hW, HW, nW, uW, oW, dW, eW, vW, gW, DW, VW, pW, fW, CW, XW, BW, qW, RW, GW, IW, aW = [],
          rW = [],
          zW = [],
          FW = [],
          QW = [],
          Wi = [],
          ii = [],
          Oi = [],
          mi = [],
          Ei = [],
          Ni = [],
          Pi = [],
          Li = [],
          ci = [],
          wi = [],
          ti = [],
          Zi = [],
          xi = [],
          li = [],
          Ai = [],
          bi = [],
          ji = [],
          Ui = [],
          ki = [],
          si = [],
          Mi = [],
          Ki = [],
          Si = [],
          Yi = [],
          yi = [],
          Ti = [],
          Ji = [],
          Hi = [],
          ni = [],
          ui = [],
          oi = [],
          di = [],
          ei = [],
          vi = [],
          gi = [],
          Di = [],
          Vi = [],
          fi = [],
          Ci = [],
          Xi = [],
          Bi = [],
          qi = [],
          Ri = [],
          Gi = [],
          Ii = [],
          ai = [],
          ri = [],
          zi = [],
          Fi = [],
          Qi = [],
          WO = [];
        return WW = class {
          constructor() {
            this.colorCurves = (0, mW.g)(this, aW, new YW), this._colorCurvesEnabled = ((0, mW.g)(this, rW), (0, mW.g)(this, zW, !1)), this._colorGradingTexture = ((0, mW.g)(this, FW), (0, mW.g)(this, QW, void 0)), this._colorGradingEnabled = ((0, mW.g)(this, Wi), (0, mW.g)(this, ii, !1)), this._colorGradingWithGreenDepth = ((0, mW.g)(this, Oi), (0, mW.g)(this, mi, !0)), this._colorGradingBGR = ((0, mW.g)(this, Ei), (0, mW.g)(this, Ni, !0)), this._exposure = ((0, mW.g)(this, Pi), (0, mW.g)(this, Li, 1)), this._toneMappingEnabled = ((0, mW.g)(this, ci), (0, mW.g)(this, wi, !1)), this._toneMappingType = ((0, mW.g)(this, ti), (0, mW.g)(this, Zi, WW.TONEMAPPING_STANDARD)), this._contrast = ((0, mW.g)(this, xi), (0, mW.g)(this, li, 1)), this._whiteBalanceEnabled = ((0, mW.g)(this, Ai), (0, mW.g)(this, bi, !1)), this._temperature = ((0, mW.g)(this, ji), (0, mW.g)(this, Ui, 6500)), this._tint = ((0, mW.g)(this, ki), (0, mW.g)(this, si, 0)), this._whiteBalanceMatrix = ((0, mW.g)(this, Mi), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, mW.g)(this, Ki, 0), this.vignetteCenterX = ((0, mW.g)(this, Si), (0, mW.g)(this, Yi, 0)), this.vignetteCenterY = ((0, mW.g)(this, yi), (0, mW.g)(this, Ti, 0)), this.vignetteWeight = ((0, mW.g)(this, Ji), (0, mW.g)(this, Hi, 1.5)), this.vignetteColor = ((0, mW.g)(this, ni), (0, mW.g)(this, ui, new PW.d(0, 0, 0, 0))), this.vignetteCameraFov = ((0, mW.g)(this, oi), (0, mW.g)(this, di, .5)), this._vignetteBlendMode = ((0, mW.g)(this, ei), (0, mW.g)(this, vi, WW.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, mW.g)(this, gi), (0, mW.g)(this, Di, !1)), this._ditheringEnabled = ((0, mW.g)(this, Vi), (0, mW.g)(this, fi, !1)), this._ditheringIntensity = ((0, mW.g)(this, Ci), (0, mW.g)(this, Xi, 1 / 255)), this._skipFinalColorClamp = ((0, mW.g)(this, Bi), (0, mW.g)(this, qi, !1)), this._applyByPostProcess = ((0, mW.g)(this, Ri), (0, mW.g)(this, Gi, !1)), this._isEnabled = ((0, mW.g)(this, Ii), (0, mW.g)(this, ai, !0)), this.outputTextureWidth = ((0, mW.g)(this, ri), (0, mW.g)(this, zi, 0)), this.outputTextureHeight = ((0, mW.g)(this, Fi), (0, mW.g)(this, Qi, 0)), this.onUpdateParameters = ((0, mW.g)(this, WO), new NW.e)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(WW) {
            this._colorCurvesEnabled !== WW && (this._colorCurvesEnabled = WW, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(WW) {
            this._colorGradingTexture !== WW && (this._colorGradingTexture = WW, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(WW) {
            this._colorGradingEnabled !== WW && (this._colorGradingEnabled = WW, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(WW) {
            this._colorGradingWithGreenDepth !== WW && (this._colorGradingWithGreenDepth = WW, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(WW) {
            this._colorGradingBGR !== WW && (this._colorGradingBGR = WW, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(WW) {
            this._exposure !== WW && (this._exposure = WW, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(WW) {
            this._toneMappingEnabled !== WW && (this._toneMappingEnabled = WW, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(WW) {
            this._toneMappingType !== WW && (this._toneMappingType = WW, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(WW) {
            this._contrast !== WW && (this._contrast = WW, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(WW) {
            this._whiteBalanceEnabled !== WW && (this._whiteBalanceEnabled = WW, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(WW) {
            WW = Number.isNaN(WW) ? tW : Math.max(WW, tW), this._temperature !== WW && (this._temperature = WW, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(WW) {
            WW = (0, LW.Clamp)(WW, -150, ZW), this._tint !== WW && (this._tint = WW, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(WW, iW) {
              const OW = jW(xW(WW, iW), MW),
                mW = kW.multiply(OW).multiply(sW);
              return cW.d.GetAsMatrix3x3(mW)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(WW) {
            this.vignetteCenterY = WW
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(WW) {
            this.vignetteCenterX = WW
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(WW) {
            this._vignetteBlendMode !== WW && (this._vignetteBlendMode = WW, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(WW) {
            this._vignetteEnabled !== WW && (this._vignetteEnabled = WW, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(WW) {
            this._ditheringEnabled !== WW && (this._ditheringEnabled = WW, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(WW) {
            this._ditheringIntensity !== WW && (this._ditheringIntensity = WW, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(WW) {
            this._skipFinalColorClamp !== WW && (this._skipFinalColorClamp = WW, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(WW) {
            this._applyByPostProcess !== WW && (this._applyByPostProcess = WW, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(WW) {
            this._isEnabled !== WW && (this._isEnabled = WW, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(iW) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return iW.WHITEBALANCE = !1, iW.VIGNETTE = !1, iW.TONEMAPPING = 0, iW.CONTRAST = !1, iW.EXPOSURE = !1, iW.COLORCURVES = !1, iW.COLORGRADING = !1, iW.COLORGRADING3D = !1, iW.DITHER = !1, iW.IMAGEPROCESSING = !1, iW.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(iW.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (iW.WHITEBALANCE = this._whiteBalanceEnabled, iW.VIGNETTE = this.vignetteEnabled, iW.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === WW._VIGNETTEMODE_MULTIPLY, iW.VIGNETTEBLENDMODEOPAQUE = !iW.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case WW.TONEMAPPING_KHR_PBR_NEUTRAL:
                iW.TONEMAPPING = 3;
                break;
              case WW.TONEMAPPING_ACES:
                iW.TONEMAPPING = 2;
                break;
              default:
                iW.TONEMAPPING = 1
            } else iW.TONEMAPPING = 0;
            iW.CONTRAST = 1 !== this.contrast, iW.EXPOSURE = 1 !== this.exposure, iW.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, iW.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, iW.COLORGRADING ? iW.COLORGRADING3D = this.colorGradingTexture.is3D : iW.COLORGRADING3D = !1, iW.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, iW.SAMPLER3DBGRMAP = this.colorGradingBGR, iW.DITHER = this._ditheringEnabled, iW.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, iW.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, iW.IMAGEPROCESSING = iW.WHITEBALANCE || iW.VIGNETTE || !!iW.TONEMAPPING || iW.CONTRAST || iW.EXPOSURE || iW.COLORCURVES || iW.COLORGRADING || iW.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(WW, iW) {
            if (this._whiteBalanceEnabled && WW.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && yW(this.colorCurves, WW), this._vignetteEnabled || this._ditheringEnabled) {
              const OW = 1 / (this.outputTextureWidth || WW.VA().getRenderWidth()),
                mW = 1 / (this.outputTextureHeight || WW.VA().getRenderHeight());
              if (WW.setFloat2("vInverseScreenSize", OW, mW), this._ditheringEnabled && WW.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const EW = null != iW ? iW : mW / OW;
                let NW = Math.tan(.5 * this.vignetteCameraFov),
                  PW = NW * EW;
                const LW = Math.sqrt(PW * NW);
                PW = (0, TW.j)(PW, LW, this.vignetteStretch), NW = (0, TW.j)(NW, LW, this.vignetteStretch), WW.setFloat4("vignetteSettings1", PW, NW, -PW * this.vignetteCenterX, -NW * this.vignetteCenterY);
                const cW = -2 * this.vignetteWeight;
                WW.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, cW)
              }
            }
            if (WW.setFloat("exposureLinear", this.exposure), WW.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              WW.setTexture("txColorTransform", this.colorGradingTexture);
              const iW = this.colorGradingTexture.getSize().height;
              WW.setFloat4("colorTransformSettings", (iW - 1) / iW, .5 / iW, iW, this.colorGradingTexture.level)
            }
          }
          clone() {
            return KW.d.Clone((() => new WW), this)
          }
          serialize() {
            return KW.d.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          iW = [(0, EW.k)()], OW = [(0, EW.M)()], wW = [(0, EW.F)("colorGradingTexture")], lW = [(0, EW.M)()], AW = [(0, EW.M)()], bW = [(0, EW.M)()], UW = [(0, EW.M)()], SW = [(0, EW.M)()], hW = [(0, EW.M)()], HW = [(0, EW.M)()], nW = [(0, EW.M)()], uW = [(0, EW.M)()], oW = [(0, EW.M)()], dW = [(0, EW.M)()], eW = [(0, EW.M)()], vW = [(0, EW.M)()], gW = [(0, EW.M)()], DW = [(0, EW.r)()], VW = [(0, EW.M)()], pW = [(0, EW.M)()], fW = [(0, EW.M)()], CW = [(0, EW.M)()], XW = [(0, EW.M)()], BW = [(0, EW.M)()], qW = [(0, EW.M)()], RW = [(0, EW.M)()], GW = [(0, EW.M)()], IW = [(0, EW.M)()], (0, mW.e)(null, null, iW, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: WW => "colorCurves" in WW,
              get: WW => WW.colorCurves,
              set: (WW, iW) => {
                WW.colorCurves = iW
              }
            },
            metadata: NW
          }, aW, rW), (0, mW.e)(null, null, OW, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: WW => "_colorCurvesEnabled" in WW,
              get: WW => WW._colorCurvesEnabled,
              set: (WW, iW) => {
                WW._colorCurvesEnabled = iW
              }
            },
            metadata: NW
          }, zW, FW), (0, mW.e)(null, null, wW, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "_colorGradingTexture" in WW,
              get: WW => WW._colorGradingTexture,
              set: (WW, iW) => {
                WW._colorGradingTexture = iW
              }
            },
            metadata: NW
          }, QW, Wi), (0, mW.e)(null, null, lW, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: WW => "_colorGradingEnabled" in WW,
              get: WW => WW._colorGradingEnabled,
              set: (WW, iW) => {
                WW._colorGradingEnabled = iW
              }
            },
            metadata: NW
          }, ii, Oi), (0, mW.e)(null, null, AW, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: WW => "_colorGradingWithGreenDepth" in WW,
              get: WW => WW._colorGradingWithGreenDepth,
              set: (WW, iW) => {
                WW._colorGradingWithGreenDepth = iW
              }
            },
            metadata: NW
          }, mi, Ei), (0, mW.e)(null, null, bW, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: WW => "_colorGradingBGR" in WW,
              get: WW => WW._colorGradingBGR,
              set: (WW, iW) => {
                WW._colorGradingBGR = iW
              }
            },
            metadata: NW
          }, Ni, Pi), (0, mW.e)(null, null, UW, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: WW => "_exposure" in WW,
              get: WW => WW._exposure,
              set: (WW, iW) => {
                WW._exposure = iW
              }
            },
            metadata: NW
          }, Li, ci), (0, mW.e)(null, null, SW, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: WW => "_toneMappingEnabled" in WW,
              get: WW => WW._toneMappingEnabled,
              set: (WW, iW) => {
                WW._toneMappingEnabled = iW
              }
            },
            metadata: NW
          }, wi, ti), (0, mW.e)(null, null, hW, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: WW => "_toneMappingType" in WW,
              get: WW => WW._toneMappingType,
              set: (WW, iW) => {
                WW._toneMappingType = iW
              }
            },
            metadata: NW
          }, Zi, xi), (0, mW.e)(null, null, HW, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: WW => "_contrast" in WW,
              get: WW => WW._contrast,
              set: (WW, iW) => {
                WW._contrast = iW
              }
            },
            metadata: NW
          }, li, Ai), (0, mW.e)(null, null, nW, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: WW => "_whiteBalanceEnabled" in WW,
              get: WW => WW._whiteBalanceEnabled,
              set: (WW, iW) => {
                WW._whiteBalanceEnabled = iW
              }
            },
            metadata: NW
          }, bi, ji), (0, mW.e)(null, null, uW, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: WW => "_temperature" in WW,
              get: WW => WW._temperature,
              set: (WW, iW) => {
                WW._temperature = iW
              }
            },
            metadata: NW
          }, Ui, ki), (0, mW.e)(null, null, oW, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: WW => "_tint" in WW,
              get: WW => WW._tint,
              set: (WW, iW) => {
                WW._tint = iW
              }
            },
            metadata: NW
          }, si, Mi), (0, mW.e)(null, null, dW, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: WW => "vignetteStretch" in WW,
              get: WW => WW.vignetteStretch,
              set: (WW, iW) => {
                WW.vignetteStretch = iW
              }
            },
            metadata: NW
          }, Ki, Si), (0, mW.e)(null, null, eW, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: WW => "vignetteCenterX" in WW,
              get: WW => WW.vignetteCenterX,
              set: (WW, iW) => {
                WW.vignetteCenterX = iW
              }
            },
            metadata: NW
          }, Yi, yi), (0, mW.e)(null, null, vW, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: WW => "vignetteCenterY" in WW,
              get: WW => WW.vignetteCenterY,
              set: (WW, iW) => {
                WW.vignetteCenterY = iW
              }
            },
            metadata: NW
          }, Ti, Ji), (0, mW.e)(null, null, gW, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: WW => "vignetteWeight" in WW,
              get: WW => WW.vignetteWeight,
              set: (WW, iW) => {
                WW.vignetteWeight = iW
              }
            },
            metadata: NW
          }, Hi, ni), (0, mW.e)(null, null, DW, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "vignetteColor" in WW,
              get: WW => WW.vignetteColor,
              set: (WW, iW) => {
                WW.vignetteColor = iW
              }
            },
            metadata: NW
          }, ui, oi), (0, mW.e)(null, null, VW, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: WW => "vignetteCameraFov" in WW,
              get: WW => WW.vignetteCameraFov,
              set: (WW, iW) => {
                WW.vignetteCameraFov = iW
              }
            },
            metadata: NW
          }, di, ei), (0, mW.e)(null, null, pW, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: WW => "_vignetteBlendMode" in WW,
              get: WW => WW._vignetteBlendMode,
              set: (WW, iW) => {
                WW._vignetteBlendMode = iW
              }
            },
            metadata: NW
          }, vi, gi), (0, mW.e)(null, null, fW, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: WW => "_vignetteEnabled" in WW,
              get: WW => WW._vignetteEnabled,
              set: (WW, iW) => {
                WW._vignetteEnabled = iW
              }
            },
            metadata: NW
          }, Di, Vi), (0, mW.e)(null, null, CW, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: WW => "_ditheringEnabled" in WW,
              get: WW => WW._ditheringEnabled,
              set: (WW, iW) => {
                WW._ditheringEnabled = iW
              }
            },
            metadata: NW
          }, fi, Ci), (0, mW.e)(null, null, XW, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: WW => "_ditheringIntensity" in WW,
              get: WW => WW._ditheringIntensity,
              set: (WW, iW) => {
                WW._ditheringIntensity = iW
              }
            },
            metadata: NW
          }, Xi, Bi), (0, mW.e)(null, null, BW, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: WW => "_skipFinalColorClamp" in WW,
              get: WW => WW._skipFinalColorClamp,
              set: (WW, iW) => {
                WW._skipFinalColorClamp = iW
              }
            },
            metadata: NW
          }, qi, Ri), (0, mW.e)(null, null, qW, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: WW => "_applyByPostProcess" in WW,
              get: WW => WW._applyByPostProcess,
              set: (WW, iW) => {
                WW._applyByPostProcess = iW
              }
            },
            metadata: NW
          }, Gi, Ii), (0, mW.e)(null, null, RW, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: WW => "_isEnabled" in WW,
              get: WW => WW._isEnabled,
              set: (WW, iW) => {
                WW._isEnabled = iW
              }
            },
            metadata: NW
          }, ai, ri), (0, mW.e)(null, null, GW, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: WW => "outputTextureWidth" in WW,
              get: WW => WW.outputTextureWidth,
              set: (WW, iW) => {
                WW.outputTextureWidth = iW
              }
            },
            metadata: NW
          }, zi, Fi), (0, mW.e)(null, null, IW, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: WW => "outputTextureHeight" in WW,
              get: WW => WW.outputTextureHeight,
              set: (WW, iW) => {
                WW.outputTextureHeight = iW
              }
            },
            metadata: NW
          }, Qi, WO), NW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: NW
          })
        })(), WW.TONEMAPPING_STANDARD = 0, WW.TONEMAPPING_ACES = 1, WW.TONEMAPPING_KHR_PBR_NEUTRAL = 2, WW.PrepareUniforms = JW.h, WW.PrepareSamplers = JW.e, WW._VIGNETTEMODE_MULTIPLY = 0, WW._VIGNETTEMODE_OPAQUE = 1, WW
      })(),
      nW = !1;

    function uW(WW) {
      const iW = KW.d.Parse((() => new HW), WW, null, null);
      return void 0 !== WW.vignetteCentreX && (iW.vignetteCenterX = WW.vignetteCentreX), void 0 !== WW.vignetteCentreY && (iW.vignetteCenterY = WW.vignetteCentreY), iW
    }

    function oW() {
      nW || (nW = !0, HW.Parse = uW, KW.d._ImageProcessingConfigurationParser = uW, (0, hW.h)("BABYLON.ImageProcessingConfiguration", HW))
    }
  },
  41649: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW
    });
    var mW = OW(39911),
      EW = OW(41620);
    class NW {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          mW = arguments.length > 3 ? arguments[3] : void 0,
          EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          NW = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = WW, this._noUBO = !WW.supportsUniformBuffers || EW, this._dynamic = OW, this._name = mW ?? "no-name", this._data = iW || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === NW && this._engine._features.trackUbosInFrame || !0 === NW) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.tWW = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.tWW = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(WW) {
        let iW;
        if (iW = WW <= 2 ? WW : 4, this._uniformLocationPointer % iW !== 0) {
          const WW = this._uniformLocationPointer;
          this._uniformLocationPointer += iW - this._uniformLocationPointer % iW;
          const OW = this._uniformLocationPointer - WW;
          for (let iW = 0; iW < OW; iW++) this._data.push(0)
        }
      }
      addUniform(WW, iW) {
        let OW, mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (mW > 0 && "number" === typeof iW && (this._uniformArraySizes[WW] = {
            strideSize: iW,
            arraySize: mW
          }), void 0 === this._uniformLocations[WW] && (this._uniformNames.push(WW), !this._noUBO)) {
          if (mW > 0) {
            if (iW instanceof Array) throw "addUniform should not be use with Array in UBO: " + WW;
            if (this._fillAlignment(4), 16 == iW) iW *= mW;
            else {
              iW = iW * mW + (4 - iW) * mW
            }
            OW = [];
            for (let WW = 0; WW < iW; WW++) OW.push(0)
          } else {
            if (iW instanceof Array) OW = iW, iW = OW.length;
            else {
              OW = [];
              for (let WW = 0; WW < iW; WW++) OW.push(0)
            }
            this._fillAlignment(iW)
          }
          this._uniformSizes[WW] = iW, this._uniformLocations[WW] = this._uniformLocationPointer, this._uniformLocationPointer += iW;
          for (let WW = 0; WW < iW; WW++) this._data.push(OW[WW]);
          this._needSync = !0
        }
      }
      addMatrix(WW, iW) {
        this.addUniform(WW, Array.prototype.slice.call(iW.wEW()))
      }
      addFloat2(WW, iW, OW) {
        const mW = [iW, OW];
        this.addUniform(WW, mW)
      }
      addFloat3(WW, iW, OW, mW) {
        const EW = [iW, OW, mW];
        this.addUniform(WW, EW)
      }
      addColor3(WW, iW) {
        const OW = [iW.r, iW.g, iW.b];
        this.addUniform(WW, OW)
      }
      addColor4(WW, iW, OW) {
        const mW = [iW.r, iW.g, iW.b, OW];
        this.addUniform(WW, mW)
      }
      addVector3(WW, iW) {
        const OW = [iW.x, iW.y, iW.z];
        this.addUniform(WW, OW)
      }
      addMatrix3x3(WW) {
        this.addUniform(WW, 12)
      }
      addMatrix2x2(WW) {
        this.addUniform(WW, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const WW = [];
        let iW = 0;
        for (const OW in this._uniformLocations)
          if (WW.push(OW), 10 === ++iW) break;
        return WW.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const WW of this._ownerListsBySlot.values()) this._removeOwnerBacklink(WW);
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
      set name(WW) {
        this._name = WW
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(WW, iW) {
        for (let OW = 0; OW < WW.length; ++OW)
          if (WW[OW] !== iW[OW]) return !1;
        return !0
      }
      _copyBuffer(WW, iW) {
        for (let OW = 0; OW < WW.length; ++OW) iW[OW] = WW[OW]
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
      _updateOwnerKeyed(WW) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let iW = this._slotByOwner.get(WW);
        if (void 0 === iW && (iW = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(WW, iW), this._ownerCount++, WW._uniformBuffersWithOwnedSlot || (WW._uniformBuffersWithOwnedSlot = []), WW._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(iW, WW._uniformBuffersWithOwnedSlot)), this._slotGeneration[iW] === this._dataGeneration) return this._bufferIndex = iW, this._buffer = this._buffers[iW][0], this.bindUniformBuffer(), this._slotFrameId[iW] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const OW = this._buffers[iW][1];
        this._slotFrameId[iW] === this._currentFrameId && OW && !this._buffersEqual(this._bufferData, OW) && (iW = this._takeFreeSlot(!1)), this._bufferIndex = iW, this._buffer = this._buffers[iW][0], this.bindUniformBuffer();
        const mW = this._buffers[iW][1];
        mW && this._buffersEqual(this._bufferData, mW) || (mW && this._copyBuffer(this._bufferData, mW), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[iW] = this._currentFrameId, this._slotGeneration[iW] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(WW) {
        for (let OW = 0; OW < this._freeSlots.length; ++OW) {
          const iW = this._freeSlots[OW];
          if (this._slotFrameId[iW] !== this._currentFrameId) return WW && (this._freeSlots[OW] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), iW
        }
        this._rebuild();
        const iW = this._buffers.length - 1;
        return WW || this._freeSlots.push(iW), iW
      }
      _releaseOwnerSlot(WW) {
        const iW = this._slotByOwner?.get(WW);
        if (void 0 === iW) return;
        this._slotByOwner.delete(WW);
        const OW = this._ownerListsBySlot.get(iW);
        OW && (this._removeOwnerBacklink(OW), this._ownerListsBySlot.delete(iW)), this._ownerCount--, this._freeSlots.push(iW)
      }
      _removeOwnerBacklink(WW) {
        const iW = WW.indexOf(this); - 1 !== iW && (WW[iW] = WW[WW.length - 1], WW.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(WW, iW, OW) {
        this._checkNewFrame();
        let EW = this._uniformLocations[WW];
        if (void 0 === EW) {
          if (this._buffer) return void mW.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + WW);
          this.addUniform(WW, OW), EW = this._uniformLocations[WW]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let WW = 0; WW < OW; WW++) this._bufferData[EW + WW] = iW[WW];
          this._dataGeneration++
        } else {
          let WW = !1;
          for (let mW = 0; mW < OW; mW++)(16 === OW && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[EW + mW] !== Math.fround(iW[mW])) && (WW = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[EW + mW] = iW[mW]);
          this._needSync = this._needSync || WW, WW && this._dataGeneration++
        }
      }
      updateUniformArray(WW, iW, OW) {
        this._checkNewFrame();
        const NW = this._uniformLocations[WW];
        if (void 0 === NW) return void mW.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const PW = this._uniformArraySizes[WW];
        if (this._dynamic) {
          for (let WW = 0; WW < OW; WW++) this._bufferData[NW + WW] = iW[WW];
          this._dataGeneration++
        } else {
          let WW = !1,
            mW = 0,
            LW = 0;
          for (let cW = 0; cW < OW; cW++)
            if (this._bufferData[NW + 4 * LW + mW] !== EW.f.FloatRound(iW[cW]) && (WW = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[NW + 4 * LW + mW] = iW[cW]), mW++, mW === PW.strideSize) {
              for (; mW < 4; mW++) this._bufferData[NW + 4 * LW + mW] = 0;
              mW = 0, LW++
            } this._needSync = this._needSync || WW, WW && this._dataGeneration++
        }
      }
      _cacheMatrix(WW, iW) {
        this._checkNewFrame();
        const OW = this._valueCache[WW],
          mW = iW.updateFlag;
        return (void 0 === OW || OW !== mW) && (this._valueCache[WW] = mW, !0)
      }
      _updateMatrix3x3ForUniform(WW, iW) {
        for (let OW = 0; OW < 3; OW++) NW._TempBuffer[4 * OW] = iW[3 * OW], NW._TempBuffer[4 * OW + 1] = iW[3 * OW + 1], NW._TempBuffer[4 * OW + 2] = iW[3 * OW + 2], NW._TempBuffer[4 * OW + 3] = 0;
        this.updateUniform(WW, NW._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(WW, iW) {
        this._currentEffect.setMatrix3x3(WW, iW)
      }
      _updateMatrix2x2ForEffect(WW, iW) {
        this._currentEffect.setMatrix2x2(WW, iW)
      }
      _updateMatrix2x2ForUniform(WW, iW) {
        for (let OW = 0; OW < 2; OW++) NW._TempBuffer[4 * OW] = iW[2 * OW], NW._TempBuffer[4 * OW + 1] = iW[2 * OW + 1], NW._TempBuffer[4 * OW + 2] = 0, NW._TempBuffer[4 * OW + 3] = 0;
        this.updateUniform(WW, NW._TempBuffer, 8)
      }
      _updateFloatForEffect(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(WW + OW, iW)
      }
      _updateFloatForUniform(WW, iW) {
        NW._TempBuffer[0] = iW, this.updateUniform(WW, NW._TempBuffer, 1)
      }
      _updateFloat2ForEffect(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(WW + mW, iW, OW)
      }
      _updateFloat2ForUniform(WW, iW, OW) {
        NW._TempBuffer[0] = iW, NW._TempBuffer[1] = OW, this.updateUniform(WW, NW._TempBuffer, 2)
      }
      _updateFloat3ForEffect(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(WW + EW, iW, OW, mW)
      }
      _updateFloat3ForUniform(WW, iW, OW, mW) {
        NW._TempBuffer[0] = iW, NW._TempBuffer[1] = OW, NW._TempBuffer[2] = mW, this.updateUniform(WW, NW._TempBuffer, 3)
      }
      _updateFloat4ForEffect(WW, iW, OW, mW, EW) {
        let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(WW + NW, iW, OW, mW, EW)
      }
      _updateFloat4ForUniform(WW, iW, OW, mW, EW) {
        NW._TempBuffer[0] = iW, NW._TempBuffer[1] = OW, NW._TempBuffer[2] = mW, NW._TempBuffer[3] = EW, this.updateUniform(WW, NW._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[WW]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(WW + OW, iW);
            break;
          case 3:
            this._currentEffect.setFloatArray3(WW + OW, iW);
            break;
          case 4:
            this._currentEffect.setFloatArray4(WW + OW, iW);
            break;
          default:
            this._currentEffect.setFloatArray(WW + OW, iW)
        }
      }
      _updateFloatArrayForUniform(WW, iW) {
        this.updateUniformArray(WW, iW, iW.length)
      }
      _updateArrayForEffect(WW, iW) {
        this._currentEffect.setArray(WW, iW)
      }
      _updateArrayForUniform(WW, iW) {
        this.updateUniformArray(WW, iW, iW.length)
      }
      _updateIntArrayForEffect(WW, iW) {
        this._currentEffect.setIntArray(WW, iW)
      }
      _updateIntArrayForUniform(WW, iW) {
        NW._TempBufferInt32View.set(iW), this.updateUniformArray(WW, NW._TempBuffer, iW.length)
      }
      _updateUIntArrayForEffect(WW, iW) {
        this._currentEffect.setUIntArray(WW, iW)
      }
      _updateUIntArrayForUniform(WW, iW) {
        NW._TempBufferUInt32View.set(iW), this.updateUniformArray(WW, NW._TempBuffer, iW.length)
      }
      _updateMatrixForEffect(WW, iW) {
        this._currentEffect.setMatrix(WW, iW)
      }
      _updateMatrixForUniform(WW, iW) {
        this._cacheMatrix(WW, iW) && this.updateUniform(WW, iW.wEW(), 16)
      }
      _updateMatricesForEffect(WW, iW) {
        this._currentEffect.setMatrices(WW, iW)
      }
      _updateMatricesForUniform(WW, iW) {
        this.updateUniform(WW, iW, iW.length)
      }
      _updateVector3ForEffect(WW, iW) {
        this._currentEffect.setVector3(WW, iW)
      }
      _updateVector3ForUniform(WW, iW) {
        NW._TempBuffer[0] = iW.x, NW._TempBuffer[1] = iW.y, NW._TempBuffer[2] = iW.z, this.updateUniform(WW, NW._TempBuffer, 3)
      }
      _updateVector4ForEffect(WW, iW) {
        this._currentEffect.setVector4(WW, iW)
      }
      _updateVector4ForUniform(WW, iW) {
        NW._TempBuffer[0] = iW.x, NW._TempBuffer[1] = iW.y, NW._TempBuffer[2] = iW.z, NW._TempBuffer[3] = iW.w, this.updateUniform(WW, NW._TempBuffer, 4)
      }
      _updateColor3ForEffect(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(WW + OW, iW)
      }
      _updateColor3ForUniform(WW, iW) {
        NW._TempBuffer[0] = iW.r, NW._TempBuffer[1] = iW.g, NW._TempBuffer[2] = iW.b, this.updateUniform(WW, NW._TempBuffer, 3)
      }
      _updateColor4ForEffect(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(WW + mW, iW, OW)
      }
      _updateDirectColor4ForEffect(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(WW + OW, iW)
      }
      _updateColor4ForUniform(WW, iW, OW) {
        NW._TempBuffer[0] = iW.r, NW._TempBuffer[1] = iW.g, NW._TempBuffer[2] = iW.b, NW._TempBuffer[3] = OW, this.updateUniform(WW, NW._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(WW, iW) {
        NW._TempBuffer[0] = iW.r, NW._TempBuffer[1] = iW.g, NW._TempBuffer[2] = iW.b, NW._TempBuffer[3] = iW.a, this.updateUniform(WW, NW._TempBuffer, 4)
      }
      _updateIntForEffect(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(WW + OW, iW)
      }
      _updateIntForUniform(WW, iW) {
        NW._TempBufferInt32View[0] = iW, this.updateUniform(WW, NW._TempBuffer, 1)
      }
      _updateInt2ForEffect(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(WW + mW, iW, OW)
      }
      _updateInt2ForUniform(WW, iW, OW) {
        NW._TempBufferInt32View[0] = iW, NW._TempBufferInt32View[1] = OW, this.updateUniform(WW, NW._TempBuffer, 2)
      }
      _updateInt3ForEffect(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(WW + EW, iW, OW, mW)
      }
      _updateInt3ForUniform(WW, iW, OW, mW) {
        NW._TempBufferInt32View[0] = iW, NW._TempBufferInt32View[1] = OW, NW._TempBufferInt32View[2] = mW, this.updateUniform(WW, NW._TempBuffer, 3)
      }
      _updateInt4ForEffect(WW, iW, OW, mW, EW) {
        let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(WW + NW, iW, OW, mW, EW)
      }
      _updateInt4ForUniform(WW, iW, OW, mW, EW) {
        NW._TempBufferInt32View[0] = iW, NW._TempBufferInt32View[1] = OW, NW._TempBufferInt32View[2] = mW, NW._TempBufferInt32View[3] = EW, this.updateUniform(WW, NW._TempBuffer, 4)
      }
      _updateUIntForEffect(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(WW + OW, iW)
      }
      _updateUIntForUniform(WW, iW) {
        NW._TempBufferUInt32View[0] = iW, this.updateUniform(WW, NW._TempBuffer, 1)
      }
      _updateUInt2ForEffect(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(WW + mW, iW, OW)
      }
      _updateUInt2ForUniform(WW, iW, OW) {
        NW._TempBufferUInt32View[0] = iW, NW._TempBufferUInt32View[1] = OW, this.updateUniform(WW, NW._TempBuffer, 2)
      }
      _updateUInt3ForEffect(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(WW + EW, iW, OW, mW)
      }
      _updateUInt3ForUniform(WW, iW, OW, mW) {
        NW._TempBufferUInt32View[0] = iW, NW._TempBufferUInt32View[1] = OW, NW._TempBufferUInt32View[2] = mW, this.updateUniform(WW, NW._TempBuffer, 3)
      }
      _updateUInt4ForEffect(WW, iW, OW, mW, EW) {
        let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(WW + NW, iW, OW, mW, EW)
      }
      _updateUInt4ForUniform(WW, iW, OW, mW, EW) {
        NW._TempBufferUInt32View[0] = iW, NW._TempBufferUInt32View[1] = OW, NW._TempBufferUInt32View[2] = mW, NW._TempBufferUInt32View[3] = EW, this.updateUniform(WW, NW._TempBuffer, 4)
      }
      setTexture(WW, iW) {
        this._currentEffect.setTexture(WW, iW)
      }
      setTextureArray(WW, iW) {
        this._currentEffect.setTextureArray(WW, iW)
      }
      bindTexture(WW, iW) {
        this._currentEffect._bindTexture(WW, iW)
      }
      updateUniformDirectly(WW, iW) {
        this.updateUniform(WW, iW, iW.length), this.update()
      }
      bindToEffect(WW, iW) {
        this._currentEffect = WW, this._currentEffectName = iW
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(WW) {
        if (!this._buffers) return this._buffer === WW;
        for (let iW = 0; iW < this._buffers.length; ++iW) {
          if (this._buffers[iW][0] === WW) return this._bufferIndex = iW, this._buffer = WW, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[iW][1] && (this._bufferData.set(this._buffers[iW][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(WW) {
        return void 0 !== this._uniformLocations[WW]
      }
      dispose() {
        if (this._noUBO) return;
        const WW = this._engine._uniformBuffers,
          iW = WW.indexOf(this);
        if (-1 !== iW && (WW[iW] = WW[WW.length - 1], WW.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let WW = 0; WW < this._buffers.length; ++WW) {
            const iW = this._buffers[WW][0];
            this._engine._releaseBuffer(iW)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    NW._MAX_UNIFORM_SIZE = 256, NW._TempBuffer = new Float32Array(NW._MAX_UNIFORM_SIZE), NW._TempBufferInt32View = new Int32Array(NW._TempBuffer.buffer), NW._TempBufferUInt32View = new Uint32Array(NW._TempBuffer.buffer)
  },
  41446: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW
    });
    var mW = OW(41453);
    class EW extends mW.e {
      constructor(WW) {
        super(), this._buffer = WW
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  41523: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => cW,
      c: () => wW
    });
    const mW = "__bjs_serializable__",
      EW = new WeakMap;

    function NW(WW, iW) {
      return Object.prototype.hasOwnProperty.call(WW, iW)
    }
    const PW = function() {
      let WW = Symbol.metadata;
      return WW || (WW = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: WW
      })), WW
    }();

    function LW(WW) {
      return "function" === typeof WW ? WW : WW?.constructor
    }

    function cW(WW) {
      if (!WW) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(PW)}) polyfill must run before decorated classes are evaluated.`);
      return NW(WW, mW) || (WW[mW] = {}), WW[mW]
    }

    function wW(WW) {
      const iW = LW(WW),
        OW = iW ? iW[PW] : void 0;
      if (!OW) return {};
      const cW = EW.get(OW);
      if (cW) return cW;
      const wW = {},
        tW = [];
      let ZW = OW;
      for (; ZW;) tW.push(ZW), ZW = Object.getPrototypeOf(ZW);
      for (const EW of tW)
        if (NW(EW, mW)) {
          const WW = EW[mW];
          for (const iW in WW) wW[iW] = WW[iW]
        } return EW.set(OW, wW), wW
    }
  },
  41519: (WW, iW, OW) => {
    OW.d(iW, {
      C: () => bW,
      F: () => LW,
      H: () => tW,
      K: () => ZW,
      M: () => PW,
      d: () => sW,
      h: () => NW,
      j: () => kW,
      k: () => lW,
      n: () => cW,
      r: () => AW,
      t: () => wW,
      x: () => jW,
      z: () => xW
    });
    var mW = OW(41523);

    function EW(WW, iW) {
      return (OW, EW) => {
        if (!EW.metadata) return;
        const NW = String(EW.name),
          PW = (0, mW.b)(EW.metadata);
        PW[NW] || (PW[NW] = {
          type: WW,
          sourceName: iW
        })
      }
    }

    function NW(WW) {
      return function(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (OW, mW) => {
          const EW = iW || "_" + String(mW.name);
          return {
            init(WW) {
              return void 0 === WW && EW in this || (this[EW] = WW), WW
            },
            get() {
              return this[EW]
            },
            set(iW) {
              "function" === typeof this[EW]?.equals && this[EW].equals(iW) || this[EW] !== iW && (this[EW] = iW, this[WW]())
            }
          }
        }
      }(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function PW(WW) {
      return EW(0, WW)
    }

    function LW(WW) {
      return EW(1, WW)
    }

    function cW(WW) {
      return EW(2, WW)
    }

    function wW(WW) {
      return EW(3, WW)
    }

    function tW(WW) {
      return EW(4, WW)
    }

    function ZW(WW) {
      return EW(5, WW)
    }

    function xW(WW) {
      return EW(6, WW)
    }

    function lW(WW) {
      return EW(7, WW)
    }

    function AW(WW) {
      return EW(8, WW)
    }

    function bW(WW) {
      return EW(10, WW)
    }

    function jW(WW) {
      return EW(12, WW)
    }

    function UW(WW, iW, OW) {
      const mW = String(iW.name);
      let EW = null;
      const NW = function() {
        if (null === EW) {
          EW = WW, "undefined" !== typeof _native && _native[mW] && (EW = OW(_native[mW], WW));
          const PW = this && (iW.static ? this : Object.getPrototypeOf(this));
          PW?.[mW] === NW && (PW[mW] = EW)
        }
        for (var PW = arguments.length, LW = new Array(PW), cW = 0; cW < PW; cW++) LW[cW] = arguments[cW];
        return EW.apply(this, LW)
      };
      return NW
    }

    function kW(WW, iW) {
      return UW(WW, iW, (WW => WW))
    }

    function sW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (OW, mW) => {
        const EW = iW || "_" + String(mW.name);
        return {
          get() {
            return this[EW]?.value
          },
          set(iW) {
            "function" === typeof this[EW]?.value?.equals && this[EW].value.equals(iW) || this[EW].value !== iW && (this[EW].value = iW, this[WW]())
          }
        }
      }
    }
    kW.filter = function(WW) {
      return (iW, OW) => UW(iW, OW, ((iW, OW) => function() {
        for (var mW = arguments.length, EW = new Array(mW), NW = 0; NW < mW; NW++) EW[NW] = arguments[NW];
        return WW(...EW) ? iW(...EW) : OW.apply(this, EW)
      }))
    }
  },
  41538: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => wW
    });
    var mW = OW(41415),
      EW = OW(41544),
      NW = OW(38372),
      PW = OW(38241),
      LW = OW(41523);
    const cW = function(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const NW = WW();
      EW.d && EW.d.HasTags(iW) && EW.d.AddTagsTo(NW, EW.d.GetTags(iW, !0));
      const PW = (0, LW.c)(NW),
        cW = {};
      for (const EW in PW) {
        const WW = PW[EW],
          LW = iW[EW],
          tW = WW.type;
        if (void 0 !== LW && null !== LW && ("uniqueId" !== EW || wW.AllowLoadingUniqueId)) switch (tW) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof LW.slice ? NW[EW] = LW.slice() : NW[EW] = LW;
            break;
          case 1:
            mW.cloneTexturesOnlyOnce && cW[LW.uniqueId] ? NW[EW] = cW[LW.uniqueId] : (NW[EW] = OW || LW.isRenderTarget ? LW : LW.clone(), cW[LW.uniqueId] = NW[EW]);
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
            NW[EW] = OW ? LW : LW.clone()
        }
      }
      return NW
    };
    class wW {
      static AppendSerializedAnimations(WW, iW) {
        if (WW.animations) {
          iW.animations = [];
          for (let OW = 0; OW < WW.animations.length; OW++) {
            const mW = WW.animations[OW];
            iW.animations.push(mW.serialize())
          }
        }
      }
      static Serialize(WW, iW) {
        iW || (iW = {}), EW.d && (iW.tags = EW.d.GetTags(WW));
        const OW = (0, LW.c)(WW);
        for (const mW in OW) {
          const EW = OW[mW],
            NW = EW.sourceName || mW,
            PW = EW.type,
            LW = WW[mW];
          if (void 0 !== LW && null !== LW && ("uniqueId" !== mW || wW.AllowLoadingUniqueId)) switch (PW) {
            case 0:
              Array.isArray(LW) ? iW[NW] = LW.slice() : iW[NW] = LW;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              iW[NW] = LW.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              iW[NW] = LW.wEW();
              break;
            case 6:
            case 11:
              iW[NW] = LW.id
          }
        }
        return iW
      }
      static ParseProperties(WW, iW, OW, mW) {
        mW || (mW = "");
        const EW = (0, LW.c)(iW);
        for (const LW in EW) {
          const cW = EW[LW],
            tW = WW[cW.sourceName || LW],
            ZW = cW.type;
          if (void 0 !== tW && null !== tW && ("uniqueId" !== LW || wW.AllowLoadingUniqueId)) {
            const WW = iW;
            switch (ZW) {
              case 0:
                WW[LW] = tW;
                break;
              case 1:
                OW && (WW[LW] = wW._TextureParser(tW, OW, mW));
                break;
              case 2:
                WW[LW] = NW.b.FromArray(tW);
                break;
              case 3:
                WW[LW] = wW._FresnelParametersParser(tW);
                break;
              case 4:
                WW[LW] = PW.m.FromArray(tW);
                break;
              case 5:
                WW[LW] = PW.q.FromArray(tW);
                break;
              case 6:
                OW && (WW[LW] = OW.getLastMeshById(tW));
                break;
              case 7:
                WW[LW] = wW._ColorCurvesParser(tW);
                break;
              case 8:
                WW[LW] = NW.d.FromArray(tW);
                break;
              case 9:
                WW[LW] = wW._ImageProcessingConfigurationParser(tW);
                break;
              case 10:
                WW[LW] = PW.g.FromArray(tW);
                break;
              case 11:
                OW && (WW[LW] = OW.getCameraById(tW));
                break;
              case 12:
                WW[LW] = PW.d.FromArray(tW);
                break;
              case 13:
                WW[LW] = PW.r.FromArray(tW)
            }
          }
        }
      }
      static Parse(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const NW = WW();
        return EW.d && EW.d.AddTagsTo(NW, iW.tags), wW.ParseProperties(iW, NW, OW, mW), NW
      }
      static Clone(WW, iW) {
        return cW(WW, iW, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(WW, iW) {
        return cW(WW, iW, !0)
      }
    }
    wW.AllowLoadingUniqueId = !1, wW._ImageProcessingConfigurationParser = WW => {
      throw (0, mW.o)("ImageProcessingConfiguration")
    }, wW._FresnelParametersParser = WW => {
      throw (0, mW.o)("FresnelParameters")
    }, wW._ColorCurvesParser = WW => {
      throw (0, mW.o)("ColorCurves")
    }, wW._TextureParser = (WW, iW, OW) => {
      throw (0, mW.o)("Texture")
    }
  },
  41469: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW
    });
    var mW = OW(41431);
    class EW {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = EW.Enabled, this._lastSecValueCount++
      }
      addCount(WW, iW) {
        EW.Enabled && (this._current += WW, this._hasCurrentValue = !0, iW && this._fetchResult())
      }
      beginMonitoring() {
        EW.Enabled && (this._startMonitoringTime = mW.d.Now)
      }
      endMonitoring() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!EW.Enabled) return;
        WW && this.fetchNewFrame();
        const iW = mW.d.Now;
        this._current = iW - this._startMonitoringTime, this._hasCurrentValue = !0, WW && this._fetchResult()
      }
      SZ() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const WW = mW.d.Now;
        WW - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = WW, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    EW.Enabled = !0
  },
  41628: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW,
      g: () => mW
    });
    class mW {
      constructor(WW) {
        this.length = 0, this.data = new Array(WW), this._id = mW._GlobalId++
      }
      push(WW) {
        this.data[this.length++] = WW, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(WW) {
        for (let iW = 0; iW < this.length; iW++) WW(this.data[iW])
      }
      sort(WW) {
        this.data.sort(WW)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(WW) {
        if (0 !== WW.length) {
          this.length + WW.length > this.data.length && (this.data.length = 2 * (this.length + WW.length));
          for (let iW = 0; iW < WW.length; iW++) this.data[this.length++] = (WW.data || WW)[iW]
        }
      }
      indexOf(WW) {
        const iW = this.data.indexOf(WW);
        return iW >= this.length ? -1 : iW
      }
      contains(WW) {
        return -1 !== this.indexOf(WW)
      }
    }
    mW._GlobalId = 0;
    class EW extends mW {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(WW) {
        super.push(WW), WW.__smartArrayFlags || (WW.__smartArrayFlags = {}), WW.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(WW) {
        return (!WW.__smartArrayFlags || WW.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(WW), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(WW) {
        if (0 !== WW.length) {
          this.length + WW.length > this.data.length && (this.data.length = 2 * (this.length + WW.length));
          for (let iW = 0; iW < WW.length; iW++) {
            const OW = (WW.data || WW)[iW];
            this.pushNoDuplicate(OW)
          }
        }
      }
    }
  },
  41544: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW
    });
    class mW {
      static Eval(WW, iW) {
        return "true" === (WW = WW.match(/\([^()]*\)/g) ? WW.replace(/\([^()]*\)/g, (WW => (WW = WW.slice(1, WW.length - 1), mW._HandleParenthesisContent(WW, iW)))) : mW._HandleParenthesisContent(WW, iW)) || "false" !== WW && mW.Eval(WW, iW)
      }
      static _HandleParenthesisContent(WW, iW) {
        let OW;
        iW = iW || (WW => "true" === WW);
        const EW = WW.split("||");
        for (const NW in EW)
          if (Object.prototype.hasOwnProperty.call(EW, NW)) {
            let WW = mW._SimplifyNegation(EW[NW].trim());
            const PW = WW.split("&&");
            if (PW.length > 1)
              for (let EW = 0; EW < PW.length; ++EW) {
                const NW = mW._SimplifyNegation(PW[EW].trim());
                if (OW = "true" !== NW && "false" !== NW ? "!" === NW[0] ? !iW(NW.substring(1)) : iW(NW) : "true" === NW, !OW) {
                  WW = "false";
                  break
                }
              }
            if (OW || "true" === WW) {
              OW = !0;
              break
            }
            OW = "true" !== WW && "false" !== WW ? "!" === WW[0] ? !iW(WW.substring(1)) : iW(WW) : "true" === WW
          } return OW ? "true" : "false"
      }
      static _SimplifyNegation(WW) {
        return "!true" === (WW = (WW = WW.replace(/^[\s!]+/, (WW => (WW = WW.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? WW = "false" : "!false" === WW && (WW = "true"), WW
      }
    }
    class EW {
      static EnableFor(WW) {
        WW._tags = WW._tags || {}, WW.hasTags = () => EW.HasTags(WW), WW.addTags = iW => EW.AddTagsTo(WW, iW), WW.removeTags = iW => EW.RemoveTagsFrom(WW, iW), WW.matchesTagsQuery = iW => EW.MatchesQuery(WW, iW)
      }
      static DisableFor(WW) {
        delete WW._tags, delete WW.hasTags, delete WW.addTags, delete WW.removeTags, delete WW.matchesTagsQuery
      }
      static HasTags(WW) {
        if (!WW._tags) return !1;
        const iW = WW._tags;
        for (const OW in iW)
          if (Object.prototype.hasOwnProperty.call(iW, OW)) return !0;
        return !1
      }
      static GetTags(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!WW._tags) return null;
        if (iW) {
          const iW = [];
          for (const OW in WW._tags) Object.prototype.hasOwnProperty.call(WW._tags, OW) && !0 === WW._tags[OW] && iW.push(OW);
          return iW.join(" ")
        }
        return WW._tags
      }
      static AddTagsTo(WW, iW) {
        if (!iW) return;
        if ("string" !== typeof iW) return;
        const OW = iW.split(" ");
        for (const mW of OW) EW._AddTagTo(WW, mW)
      }
      static _AddTagTo(WW, iW) {
        "" !== (iW = iW.trim()) && "true" !== iW && "false" !== iW && (iW.match(/[\s]/) || iW.match(/^([!]|([|]|[&]){2})/) || (EW.EnableFor(WW), WW._tags[iW] = !0))
      }
      static RemoveTagsFrom(WW, iW) {
        if (!EW.HasTags(WW)) return;
        const OW = iW.split(" ");
        for (const mW in OW) EW._RemoveTagFrom(WW, OW[mW])
      }
      static _RemoveTagFrom(WW, iW) {
        delete WW._tags[iW]
      }
      static MatchesQuery(WW, iW) {
        return void 0 === iW || ("" === iW ? EW.HasTags(WW) : mW.Eval(iW, (iW => EW.HasTags(WW) && WW._tags[iW])))
      }
    }
  },
  41665: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW
    });
    var mW = OW(41660),
      EW = OW(38276);
    class NW {
      constructor(WW) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new EW.e, this._scene = WW
      }
      _prepareBuffers() {
        if (this._vertexBuffers[mW.k.PositionKind]) return;
        const WW = [];
        WW.push(1, 1), WW.push(-1, 1), WW.push(-1, -1), WW.push(1, -1), this._vertexBuffers[mW.k.PositionKind] = new mW.k(this._scene.VA(), WW, mW.k.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const WW = [];
        WW.push(0), WW.push(1), WW.push(2), WW.push(0), WW.push(2), WW.push(3), this._indexBuffer = this._scene.VA().createIndexBuffer(WW)
      }
      _getActivePostProcesses(WW) {
        const iW = this._activePostProcesses;
        iW.length = 0;
        for (let OW = 0; OW < WW.length; OW++) {
          const mW = WW[OW];
          mW && iW.push(mW)
        }
        return iW
      }
      _rebuild() {
        const WW = this._vertexBuffers[mW.k.PositionKind];
        WW && (WW._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const OW = this._scene.activeCamera;
        return !!OW && (iW = iW || this._getActivePostProcesses(OW._postProcesses), !(!iW || 0 === iW.length || !this._scene.postProcessesEnabled) && (iW[0].activate(OW, WW, null !== iW && void 0 !== iW), !0))
      }
      directRender(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          PW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : WW.length;
        const LW = this._scene.VA();
        for (let cW = 0; cW < PW; cW++) {
          cW < WW.length - 1 ? WW[cW + 1].activate(this._scene.activeCamera || this._scene, iW?.texture) : (iW ? LW.bindFramebuffer(iW, mW, void 0, void 0, OW, EW) : NW || LW.restoreDefaultFramebuffer(), LW._debugInsertMarker?.(`post process ${WW[cW].name} output`));
          const PW = WW[cW],
            wW = PW.apply();
          wW && (PW.onBeforeRenderObservable.notifyObservers(wW), this._prepareBuffers(), LW.bindBuffers(this._vertexBuffers, this._indexBuffer, wW), LW.drawElementsType(0, 0, 6), PW.onAfterRenderObservable.notifyObservers(wW))
        }
        LW.setDepthBuffer(!0), LW.setDepthWrite(!0)
      }
      _finalizeFrame(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const NW = this._scene.activeCamera;
        if (!NW) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (mW = mW || this._getActivePostProcesses(NW._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const PW = this._scene.VA();
        for (let LW = 0, cW = mW.length; LW < cW; LW++) {
          const wW = mW[LW];
          if (LW < cW - 1 ? wW._outputTexture = mW[LW + 1].activate(NW, iW?.texture) : (iW ? (PW.bindFramebuffer(iW, OW, void 0, void 0, EW), wW._outputTexture = iW) : (PW.restoreDefaultFramebuffer(), wW._outputTexture = null), PW._debugInsertMarker?.(`post process ${mW[LW].name} output`)), WW) break;
          const tW = wW.apply();
          tW && (wW.onBeforeRenderObservable.notifyObservers(tW), this._prepareBuffers(), PW.bindBuffers(this._vertexBuffers, this._indexBuffer, tW), PW.drawElementsType(0, 0, 6), wW.onAfterRenderObservable.notifyObservers(tW))
        }
        PW.setDepthBuffer(!0), PW.setDepthWrite(!0), PW.setAlphaMode(0)
      }
      dispose() {
        const WW = this._vertexBuffers[mW.k.PositionKind];
        WW && (WW.dispose(), this._vertexBuffers[mW.k.PositionKind] = null), this._indexBuffer && (this._scene.VA()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  41680: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => wW
    });
    var mW = OW(41628),
      EW = OW(38241);
    const NW = [],
      PW = [];
    let LW = !1;

    function cW(WW, iW) {
      for (; WW.length < iW;) WW.push(void 0)
    }
    class wW {
      set opaqueSortCompareFn(WW) {
        this._opaqueSortCompareFn = WW || wW.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(WW) {
        this._alphaTestSortCompareFn = WW || wW.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(WW) {
        this._transparentSortCompareFn = WW || wW.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = WW, this._opaqueSubMeshes = new mW.g(256), this._transparentSubMeshes = new mW.g(256), this._alphaTestSubMeshes = new mW.g(256), this._depthOnlySubMeshes = new mW.g(256), this._particleSystems = new mW.g(256), this._spriteManagers = new mW.g(256), this._empty = !0, this._edgesRenderers = new mW.d(16), this.disableDepthPrePass = !1, this._scene = iW, this.opaqueSortCompareFn = OW, this.alphaTestSortCompareFn = EW, this.transparentSortCompareFn = NW
      }
      render(WW, iW, OW, mW) {
        let EW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          NW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          PW = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          LW = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          cW = arguments.length > 8 ? arguments[8] : void 0;
        if (WW) return void WW(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const wW = this._scene.VA();
        EW && 0 !== this._depthOnlySubMeshes.length && (wW.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), wW.setColorWrite(!0)), NW && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), PW && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const tW = wW.getStencilBuffer();
        if (wW.setStencilBuffer(!1), iW && this._renderSprites(), OW && this._renderParticles(mW), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), LW && (cW || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (wW.setStencilBuffer(tW), cW) cW(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const WW = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            WW.length && this._renderTransparent(WW)
          } else this._renderTransparent(this._transparentSubMeshes);
          wW.setAlphaMode(0)
        }
        if (wW.setStencilBuffer(!1), NW && this._edgesRenderers.length) {
          for (let WW = 0; WW < this._edgesRenderers.length; WW++) this._edgesRenderers.data[WW].render();
          wW.setAlphaMode(0)
        }
        wW.setStencilBuffer(tW)
      }
      _renderOpaqueSorted(WW) {
        wW._RenderSorted(WW, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(WW) {
        wW._RenderSorted(WW, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(WW) {
        wW._RenderSorted(WW, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(WW, iW, OW, mW, NW) {
        let tW, ZW = 0;
        const xW = OW ? OW.globalPosition : wW._ZeroVector;
        if (mW && iW !== wW.PainterSortCompare)
          for (; ZW < WW.length; ZW++) tW = WW.data[ZW], tW._alphaIndex = tW.getMesh().alphaIndex, tW._distanceToCamera = EW.q.Distance(tW.KV().HEW.centerWorld, xW);
        const lW = WW.length;
        let AW = WW.data;
        const bW = lW !== AW.length && !LW;
        if (bW) {
          for (LW = !0, cW(PW, lW), ZW = 0; ZW < lW; ZW++) PW[ZW] = AW[ZW];
          AW = PW
        } else lW !== AW.length && (AW = AW.slice(0, lW));
        try {
          iW && wW._StableSort(AW, lW, iW), wW._DrawSorted(AW, lW, mW, NW)
        } finally {
          bW && (PW.fill(void 0, 0, lW), LW = !1)
        }
      }
      static _DrawSorted(WW, iW, OW, mW) {
        let EW;
        const NW = WW[0].getMesh().bD();
        for (let PW = 0; PW < iW; PW++) {
          if (EW = WW[PW], NW._activeMeshesFrozenButKeepClipping && !EW.isInFrustum(NW._frustumPlanes)) continue;
          let iW = !1;
          if (OW) {
            const WW = EW.BA();
            if (WW && WW.needDepthPrePass && !mW) {
              iW = !0;
              const OW = WW.bD().VA();
              OW.setColorWrite(!1), OW.setAlphaMode(0), EW.render(!1), OW.setColorWrite(!0)
            }
          }
          const LW = EW._renderingMesh;
          !iW && LW._renderRunFollower(EW, OW) || EW.render(OW)
        }
      }
      static _StableSort(WW, iW, OW) {
        for (let mW = 0; mW < iW; mW += 16) {
          const EW = Math.min(mW + 16, iW);
          for (let iW = mW + 1; iW < EW; iW++) {
            const EW = WW[iW];
            let NW = mW,
              PW = iW;
            for (; NW < PW;) {
              const iW = NW + PW >>> 1;
              OW(EW, WW[iW]) < 0 ? PW = iW : NW = iW + 1
            }
            for (let OW = iW; OW > NW; OW--) WW[OW] = WW[OW - 1];
            WW[NW] = EW
          }
        }
        if (!(iW <= 16)) {
          cW(NW, iW);
          try {
            let mW = WW,
              EW = NW;
            for (let WW = 16; WW < iW; WW *= 2) {
              for (let PW = 0; PW < iW; PW += 2 * WW) {
                const NW = Math.min(PW + WW, iW),
                  LW = Math.min(PW + 2 * WW, iW);
                let cW = PW,
                  wW = NW,
                  tW = PW;
                if (NW < LW && OW(mW[NW], mW[NW - 1]) < 0)
                  for (; cW < NW && wW < LW;) EW[tW++] = OW(mW[wW], mW[cW]) < 0 ? mW[wW++] : mW[cW++];
                for (; cW < NW;) EW[tW++] = mW[cW++];
                for (; wW < LW;) EW[tW++] = mW[wW++]
              }
              const NW = EW;
              EW = mW, mW = NW
            }
            if (mW !== WW)
              for (let OW = 0; OW < iW; OW++) WW[OW] = mW[OW]
          } finally {
            NW.fill(void 0, 0, iW)
          }
        }
      }
      static defaultTransparentSortCompare(WW, iW) {
        return WW._alphaIndex > iW._alphaIndex ? 1 : WW._alphaIndex < iW._alphaIndex ? -1 : wW.backToFrontSortCompare(WW, iW)
      }
      static backToFrontSortCompare(WW, iW) {
        return WW._distanceToCamera < iW._distanceToCamera ? 1 : WW._distanceToCamera > iW._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(WW, iW) {
        return WW._distanceToCamera < iW._distanceToCamera ? -1 : WW._distanceToCamera > iW._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(WW, iW) {
        const OW = WW.getMesh(),
          mW = iW.getMesh();
        return OW.material && mW.material ? OW.material.uniqueId - mW.material.uniqueId : OW.uniqueId - mW.uniqueId
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
      dispatch(WW, iW, OW) {
        void 0 === iW && (iW = WW.getMesh()), void 0 === OW && (OW = WW.BA()), null !== OW && void 0 !== OW && (OW.needAlphaBlendingForMesh(iW) ? this._transparentSubMeshes.push(WW) : OW.needAlphaTestingForMesh(iW) ? (OW.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(WW), this._alphaTestSubMeshes.push(WW)) : (OW.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(WW), this._opaqueSubMeshes.push(WW)), iW._renderingGroup = this, iW._edgesRenderer && iW.isEnabled() && iW.isVisible && iW._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(iW._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(WW) {
        this._spriteManagers.push(WW), this._empty = !1
      }
      dispatchParticles(WW) {
        this._particleSystems.push(WW), this._empty = !1
      }
      _renderParticles(WW) {
        if (0 === this._particleSystems.length) return;
        const iW = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let OW = 0; OW < this._particleSystems.length; OW++) {
          const mW = this._particleSystems.data[OW];
          if (0 === (iW && iW.layerMask & mW.layerMask)) continue;
          const EW = mW.emitter;
          EW.position && WW && -1 === WW.indexOf(EW) || this._scene._activeParticles.addCount(mW.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const WW = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let iW = 0; iW < this._spriteManagers.length; iW++) {
          const OW = this._spriteManagers.data[iW];
          0 !== (WW && WW.layerMask & OW.layerMask) && OW.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    wW._ZeroVector = EW.q.Zero()
  },
  41675: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW
    });
    var mW = OW(41680);
    class EW {}
    class NW {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(WW) {
        this._disableDepthPrePass = WW;
        for (const iW of this._renderingGroups) iW.disableDepthPrePass = WW
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(WW) {
        WW !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = WW, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const WW of this._scene.meshes)
          if (WW.hY)
            for (const iW of WW.hY) iW._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const WW of this._scene.spriteManagers) WW._wasDispatched = !1;
        for (const WW of this._scene.vY) WW._wasDispatched = !1
      }
      constructor(WW) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new EW, this._maintainStateBetweenFrames = !1, this._scene = WW;
        for (let iW = NW.MIN_RENDERINGGROUPS; iW < NW.MAX_RENDERINGGROUPS; iW++) this._autoClearDepthStencil[iW] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(WW) {
        const iW = WW || 0;
        return this._prepareRenderingGroup(iW), this._renderingGroups[iW]
      }
      _clearDepthStencilBuffer() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.VA().clear(null, !1, WW, iW), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(WW, iW, OW, mW) {
        let EW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          PW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          LW = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          cW = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          wW = arguments.length > 8 ? arguments[8] : void 0,
          tW = arguments.length > 9 ? arguments[9] : void 0;
        const ZW = this._renderingGroupInfo;
        ZW.rb = this._scene, ZW.camera = this._scene.activeCamera, ZW.renderingManager = this;
        const xW = tW ?? this._scene.spriteManagers;
        if (xW && mW)
          for (let NW = 0; NW < xW.length; NW++) {
            const WW = xW[NW];
            this.dispatchSprites(WW)
          }
        for (let lW = NW.MIN_RENDERINGGROUPS; lW < NW.MAX_RENDERINGGROUPS; lW++) {
          this._depthStencilBufferAlreadyCleaned = lW === NW.MIN_RENDERINGGROUPS;
          const tW = this._renderingGroups[lW];
          if (!tW || tW._empty) continue;
          const xW = 1 << lW;
          if (ZW.renderingGroupId = lW, this._scene.onBeforeRenderingGroupObservable.notifyObservers(ZW, xW), NW.AUTOCLEAR) {
            const WW = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(lW) : this._autoClearDepthStencil[lW];
            WW && WW.autoClear && this._clearDepthStencilBuffer(WW.depth, WW.stencil)
          }
          for (let WW = 0, iW = this._scene._beforeRenderingGroupDrawStage; WW < iW.length; WW++) {
            iW[WW].action(lW)
          }
          tW.render(WW, mW, OW, iW, EW, PW, LW, cW, wW);
          for (let WW = 0, iW = this._scene._afterRenderingGroupDrawStage; WW < iW.length; WW++) {
            iW[WW].action(lW)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(ZW, xW)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let WW = NW.MIN_RENDERINGGROUPS; WW < NW.MAX_RENDERINGGROUPS; WW++) {
            const iW = this._renderingGroups[WW];
            iW && iW.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let WW = NW.MIN_RENDERINGGROUPS; WW < NW.MAX_RENDERINGGROUPS; WW++) {
            const iW = this._renderingGroups[WW];
            iW && iW.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let WW = NW.MIN_RENDERINGGROUPS; WW < NW.MAX_RENDERINGGROUPS; WW++) {
          const iW = this._renderingGroups[WW];
          iW && iW.dispose()
        }
      }
      _prepareRenderingGroup(WW) {
        void 0 === this._renderingGroups[WW] && (this._renderingGroups[WW] = new mW.c(WW, this._scene, this._customOpaqueSortCompareFn[WW], this._customAlphaTestSortCompareFn[WW], this._customTransparentSortCompareFn[WW]), this._renderingGroups[WW].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(WW) {
        this.maintainStateBetweenFrames && WW._wasDispatched || (WW._wasDispatched = !0, this.getRenderingGroup(WW.renderingGroupId).dispatchSprites(WW))
      }
      dispatchParticles(WW) {
        this.maintainStateBetweenFrames && WW._wasDispatched || (WW._wasDispatched = !0, this.getRenderingGroup(WW.renderingGroupId).dispatchParticles(WW))
      }
      dispatch(WW, iW, OW) {
        void 0 === iW && (iW = WW.getMesh()), this.maintainStateBetweenFrames && WW._wasDispatched || (WW._wasDispatched = !0, this.getRenderingGroup(iW.renderingGroupId).dispatch(WW, iW, OW))
      }
      setRenderingOrder(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[WW] = iW, this._customAlphaTestSortCompareFn[WW] = OW, this._customTransparentSortCompareFn[WW] = mW, this._renderingGroups[WW]) {
          const iW = this._renderingGroups[WW];
          iW.opaqueSortCompareFn = this._customOpaqueSortCompareFn[WW], iW.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[WW], iW.transparentSortCompareFn = this._customTransparentSortCompareFn[WW]
        }
      }
      setRenderingAutoClearDepthStencil(WW, iW) {
        let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[WW] = {
          autoClear: iW,
          depth: OW,
          stencil: mW
        }
      }
      getAutoClearDepthStencilSetup(WW) {
        return this._autoClearDepthStencil[WW]
      }
    }
    NW.MAX_RENDERINGGROUPS = 4, NW.MIN_RENDERINGGROUPS = 0, NW.AUTOCLEAR = !0
  },
  41433: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW
    });
    class mW {
      constructor(WW) {
        this._supportBlendParametersPerTarget = WW, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(WW) {
        this.setAlphaBlend(WW)
      }
      setAlphaBlend(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[iW] !== WW && (WW ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[iW] = WW, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(WW, iW, OW, mW) {
        this._blendConstants[0] === WW && this._blendConstants[1] === iW && this._blendConstants[2] === OW && this._blendConstants[3] === mW || (this._blendConstants[0] = WW, this._blendConstants[1] = iW, this._blendConstants[2] = OW, this._blendConstants[3] = mW, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(WW, iW, OW, mW) {
        const EW = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[EW + 0] === WW && this._blendFunctionParameters[EW + 1] === iW && this._blendFunctionParameters[EW + 2] === OW && this._blendFunctionParameters[EW + 3] === mW || (this._blendFunctionParameters[EW + 0] = WW, this._blendFunctionParameters[EW + 1] = iW, this._blendFunctionParameters[EW + 2] = OW, this._blendFunctionParameters[EW + 3] = mW, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(WW, iW) {
        const OW = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[OW + 0] === WW && this._blendEquationParameters[OW + 1] === iW || (this._blendEquationParameters[OW + 0] = WW, this._blendEquationParameters[OW + 1] = iW, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== iW && (this._numTargets = iW, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== OW && (this._blendDisabledTargetsMask = OW, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (WW.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === iW || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (iW > 1 && 0 !== OW && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & OW) ? WW.enable(WW.BLEND) : WW.disable(WW.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (WW.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (WW.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const mW = WW;
        if (this._isAlphaBlendDirty) {
          for (let EW = 0; EW < iW; EW++) {
            const iW = EW < this._numTargetEnabled ? EW : 0;
            this._alphaBlend[iW] && 0 === (OW & 1 << EW) ? mW.enableIndexed(WW.BLEND, EW) : mW.disableIndexed(WW.BLEND, EW)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let WW = 0; WW < iW; WW++) {
            const iW = WW < this._numTargetEnabled ? 4 * WW : 0;
            mW.blendFuncSeparateIndexed(WW, this._blendFunctionParameters[iW + 0], this._blendFunctionParameters[iW + 1], this._blendFunctionParameters[iW + 2], this._blendFunctionParameters[iW + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let WW = 0; WW < iW; WW++) {
            const iW = WW < this._numTargetEnabled ? 2 * WW : 0;
            mW.blendEquationSeparateIndexed(WW, this._blendEquationParameters[iW + 0], this._blendEquationParameters[iW + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(WW, iW) {
        let OW = 32774;
        switch (WW) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, iW);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, iW);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, iW);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, iW);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, iW);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, iW);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, iW);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, iW);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, iW);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, iW);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, iW);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, iW);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, iW);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, iW);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, iW);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, iW);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, iW), OW = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, iW), OW = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, iW);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, iW)
        }
        this.setAlphaEquationParameters(OW, OW, iW)
      }
    }
  },
  41706: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW
    });
    class mW {}
    mW._IsPickingAvailable = !1
  },
  41612: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => wO,
      i: () => LO
    });
    var mW = OW(41620),
      EW = OW(41420),
      NW = OW(41431),
      PW = OW(38276),
      LW = OW(41628);
    class cW {
      constructor() {
        this._count = 0, this._data = {}
      }
      HJ(WW) {
        this.clear(), WW.forEach(((WW, iW) => this.add(WW, iW)))
      }
      get(WW) {
        const iW = this._data[WW];
        if (void 0 !== iW) return iW
      }
      getOrAddWithFactory(WW, iW) {
        let OW = this.get(WW);
        return void 0 !== OW || (OW = iW(WW), OW && this.add(WW, OW)), OW
      }
      getOrAdd(WW, iW) {
        const OW = this.get(WW);
        return void 0 !== OW ? OW : (this.add(WW, iW), iW)
      }
      contains(WW) {
        return void 0 !== this._data[WW]
      }
      add(WW, iW) {
        return void 0 === this._data[WW] && (this._data[WW] = iW, ++this._count, !0)
      }
      set(WW, iW) {
        return void 0 !== this._data[WW] && (this._data[WW] = iW, !0)
      }
      getAndRemove(WW) {
        const iW = this.get(WW);
        return void 0 !== iW ? (delete this._data[WW], --this._count, iW) : null
      }
      remove(WW) {
        return !!this.contains(WW) && (delete this._data[WW], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(WW) {
        for (const iW in this._data) {
          WW(iW, this._data[iW])
        }
      }
      first(WW) {
        for (const iW in this._data) {
          const OW = WW(iW, this._data[iW]);
          if (OW) return OW
        }
        return null
      }
    }
    var wW = OW(41544),
      tW = OW(38241),
      ZW = OW(41634),
      xW = OW(41649),
      lW = OW(41653);
    class AW {
      constructor(WW, iW, OW, mW, EW, NW) {
        this.source = WW, this.pointerX = iW, this.pointerY = OW, this.meshUnderPointer = mW, this.sourceEvent = EW, this.additionalData = NW
      }
      static CreateNew(WW, iW, OW) {
        const mW = WW.bD();
        return new AW(WW, mW.pointerX, mW.pointerY, mW.meshUnderPointer || WW, iW, OW)
      }
      static CreateNewFromSprite(WW, iW, OW, mW) {
        return new AW(WW, iW.pointerX, iW.pointerY, iW.meshUnderPointer, OW, mW)
      }
      static CreateNewFromScene(WW, iW) {
        return new AW(null, WW.pointerX, WW.pointerY, WW.meshUnderPointer, iW)
      }
      static CreateNewFromPrimitive(WW, iW, OW, mW) {
        return new AW(WW, iW.x, iW.y, null, OW, mW)
      }
    }
    var bW = OW(41665),
      jW = OW(41670),
      UW = OW(41675),
      kW = OW(41689),
      sW = OW(41406),
      MW = OW(38270),
      KW = OW(41415),
      SW = OW(41695);
    class YW {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const WW in YW.Triggers)
          if (Object.prototype.hasOwnProperty.call(YW.Triggers, WW)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const WW in YW.Triggers)
          if (Object.prototype.hasOwnProperty.call(YW.Triggers, WW)) {
            const iW = parseInt(WW);
            if (iW >= 1 && iW <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(WW) {
        for (const iW in YW.Triggers)
          if (Object.prototype.hasOwnProperty.call(YW.Triggers, iW)) {
            if (parseInt(iW) === WW) return !0
          } return !1
      }
    }
    YW.Triggers = {};
    var yW, TW, JW, hW, HW, nW, uW, oW = OW(41700);
    ! function(WW) {
      WW[WW.Generic = 0] = "Generic", WW[WW.Keyboard = 1] = "Keyboard", WW[WW.Mouse = 2] = "Mouse", WW[WW.Touch = 3] = "Touch", WW[WW.DualShock = 4] = "DualShock", WW[WW.Xbox = 5] = "Xbox", WW[WW.Switch = 6] = "Switch", WW[WW.DualSense = 7] = "DualSense"
    }(yW || (yW = {})),
    function(WW) {
      WW[WW.Horizontal = 0] = "Horizontal", WW[WW.Vertical = 1] = "Vertical", WW[WW.LeftClick = 2] = "LeftClick", WW[WW.MiddleClick = 3] = "MiddleClick", WW[WW.RightClick = 4] = "RightClick", WW[WW.BrowserBack = 5] = "BrowserBack", WW[WW.BrowserForward = 6] = "BrowserForward", WW[WW.MouseWheelX = 7] = "MouseWheelX", WW[WW.MouseWheelY = 8] = "MouseWheelY", WW[WW.MouseWheelZ = 9] = "MouseWheelZ", WW[WW.Move = 12] = "Move"
    }(TW || (TW = {})),
    function(WW) {
      WW[WW.Horizontal = 0] = "Horizontal", WW[WW.Vertical = 1] = "Vertical", WW[WW.LeftClick = 2] = "LeftClick", WW[WW.MiddleClick = 3] = "MiddleClick", WW[WW.RightClick = 4] = "RightClick", WW[WW.BrowserBack = 5] = "BrowserBack", WW[WW.BrowserForward = 6] = "BrowserForward", WW[WW.MouseWheelX = 7] = "MouseWheelX", WW[WW.MouseWheelY = 8] = "MouseWheelY", WW[WW.MouseWheelZ = 9] = "MouseWheelZ", WW[WW.DeltaHorizontal = 10] = "DeltaHorizontal", WW[WW.DeltaVertical = 11] = "DeltaVertical"
    }(JW || (JW = {})),
    function(WW) {
      WW[WW.Cross = 0] = "Cross", WW[WW.Circle = 1] = "Circle", WW[WW.Square = 2] = "Square", WW[WW.Triangle = 3] = "Triangle", WW[WW.L1 = 4] = "L1", WW[WW.R1 = 5] = "R1", WW[WW.L2 = 6] = "L2", WW[WW.R2 = 7] = "R2", WW[WW.Share = 8] = "Share", WW[WW.Options = 9] = "Options", WW[WW.L3 = 10] = "L3", WW[WW.R3 = 11] = "R3", WW[WW.DPadUp = 12] = "DPadUp", WW[WW.DPadDown = 13] = "DPadDown", WW[WW.DPadLeft = 14] = "DPadLeft", WW[WW.DPadRight = 15] = "DPadRight", WW[WW.Home = 16] = "Home", WW[WW.TouchPad = 17] = "TouchPad", WW[WW.LStickXAxis = 18] = "LStickXAxis", WW[WW.LStickYAxis = 19] = "LStickYAxis", WW[WW.RStickXAxis = 20] = "RStickXAxis", WW[WW.RStickYAxis = 21] = "RStickYAxis"
    }(hW || (hW = {})),
    function(WW) {
      WW[WW.Cross = 0] = "Cross", WW[WW.Circle = 1] = "Circle", WW[WW.Square = 2] = "Square", WW[WW.Triangle = 3] = "Triangle", WW[WW.L1 = 4] = "L1", WW[WW.R1 = 5] = "R1", WW[WW.L2 = 6] = "L2", WW[WW.R2 = 7] = "R2", WW[WW.Create = 8] = "Create", WW[WW.Options = 9] = "Options", WW[WW.L3 = 10] = "L3", WW[WW.R3 = 11] = "R3", WW[WW.DPadUp = 12] = "DPadUp", WW[WW.DPadDown = 13] = "DPadDown", WW[WW.DPadLeft = 14] = "DPadLeft", WW[WW.DPadRight = 15] = "DPadRight", WW[WW.Home = 16] = "Home", WW[WW.TouchPad = 17] = "TouchPad", WW[WW.LStickXAxis = 18] = "LStickXAxis", WW[WW.LStickYAxis = 19] = "LStickYAxis", WW[WW.RStickXAxis = 20] = "RStickXAxis", WW[WW.RStickYAxis = 21] = "RStickYAxis"
    }(HW || (HW = {})),
    function(WW) {
      WW[WW.A = 0] = "A", WW[WW.B = 1] = "B", WW[WW.X = 2] = "X", WW[WW.Y = 3] = "Y", WW[WW.LB = 4] = "LB", WW[WW.RB = 5] = "RB", WW[WW.LT = 6] = "LT", WW[WW.RT = 7] = "RT", WW[WW.Back = 8] = "Back", WW[WW.Start = 9] = "Start", WW[WW.LS = 10] = "LS", WW[WW.RS = 11] = "RS", WW[WW.DPadUp = 12] = "DPadUp", WW[WW.DPadDown = 13] = "DPadDown", WW[WW.DPadLeft = 14] = "DPadLeft", WW[WW.DPadRight = 15] = "DPadRight", WW[WW.Home = 16] = "Home", WW[WW.LStickXAxis = 17] = "LStickXAxis", WW[WW.LStickYAxis = 18] = "LStickYAxis", WW[WW.RStickXAxis = 19] = "RStickXAxis", WW[WW.RStickYAxis = 20] = "RStickYAxis"
    }(nW || (nW = {})),
    function(WW) {
      WW[WW.B = 0] = "B", WW[WW.A = 1] = "A", WW[WW.Y = 2] = "Y", WW[WW.X = 3] = "X", WW[WW.L = 4] = "L", WW[WW.R = 5] = "R", WW[WW.ZL = 6] = "ZL", WW[WW.ZR = 7] = "ZR", WW[WW.Minus = 8] = "Minus", WW[WW.Plus = 9] = "Plus", WW[WW.LS = 10] = "LS", WW[WW.RS = 11] = "RS", WW[WW.DPadUp = 12] = "DPadUp", WW[WW.DPadDown = 13] = "DPadDown", WW[WW.DPadLeft = 14] = "DPadLeft", WW[WW.DPadRight = 15] = "DPadRight", WW[WW.Home = 16] = "Home", WW[WW.Capture = 17] = "Capture", WW[WW.LStickXAxis = 18] = "LStickXAxis", WW[WW.LStickYAxis = 19] = "LStickYAxis", WW[WW.RStickXAxis = 20] = "RStickXAxis", WW[WW.RStickYAxis = 21] = "RStickYAxis"
    }(uW || (uW = {}));
    var dW = OW(41703);
    class eW {
      static CreateDeviceEvent(WW, iW, OW, mW, EW, NW, PW) {
        switch (WW) {
          case yW.Keyboard:
            return this._CreateKeyboardEvent(OW, mW, EW, NW);
          case yW.Mouse:
            if (OW === TW.MouseWheelX || OW === TW.MouseWheelY || OW === TW.MouseWheelZ) return this._CreateWheelEvent(WW, iW, OW, mW, EW, NW);
          case yW.Touch:
            return this._CreatePointerEvent(WW, iW, OW, mW, EW, NW, PW);
          default:
            throw `Unable to generate event for device ${yW[WW]}`
        }
      }
      static _CreatePointerEvent(WW, iW, OW, mW, EW, NW, PW) {
        const LW = this._CreateMouseEvent(WW, iW, OW, mW, EW, NW);
        WW === yW.Mouse ? (LW.deviceType = yW.Mouse, LW.pointerId = 1, LW.pointerType = "mouse") : (LW.deviceType = yW.Touch, LW.pointerId = PW ?? iW, LW.pointerType = "touch");
        let cW = 0;
        return cW += EW.pollInput(WW, iW, TW.LeftClick), cW += 2 * EW.pollInput(WW, iW, TW.RightClick), cW += 4 * EW.pollInput(WW, iW, TW.MiddleClick), LW.buttons = cW, OW === TW.Move ? LW.type = "pointermove" : OW >= TW.LeftClick && OW <= TW.RightClick && (LW.type = 1 === mW ? "pointerdown" : "pointerup", LW.button = OW - 2), LW
      }
      static _CreateWheelEvent(WW, iW, OW, mW, EW, NW) {
        const PW = this._CreateMouseEvent(WW, iW, OW, mW, EW, NW);
        switch (PW.pointerId = 1, PW.type = "wheel", PW.deltaMode = dW.e.DOM_DELTA_PIXEL, PW.deltaX = 0, PW.deltaY = 0, PW.deltaZ = 0, OW) {
          case TW.MouseWheelX:
            PW.deltaX = mW;
            break;
          case TW.MouseWheelY:
            PW.deltaY = mW;
            break;
          case TW.MouseWheelZ:
            PW.deltaZ = mW
        }
        return PW
      }
      static _CreateMouseEvent(WW, iW, OW, mW, EW, NW) {
        const PW = this._CreateEvent(NW),
          LW = EW.pollInput(WW, iW, TW.Horizontal),
          cW = EW.pollInput(WW, iW, TW.Vertical);
        return NW ? (PW.movementX = 0, PW.movementY = 0, PW.offsetX = PW.movementX - NW.getBoundingClientRect().x, PW.offsetY = PW.movementY - NW.getBoundingClientRect().y) : (PW.movementX = EW.pollInput(WW, iW, 10), PW.movementY = EW.pollInput(WW, iW, 11), PW.offsetX = 0, PW.offsetY = 0), this._CheckNonCharacterKeys(PW, EW), PW.clientX = LW, PW.clientY = cW, PW.x = LW, PW.y = cW, PW.deviceType = WW, PW.deviceSlot = iW, PW.inputIndex = OW, PW
      }
      static _CreateKeyboardEvent(WW, iW, OW, mW) {
        const EW = this._CreateEvent(mW);
        return this._CheckNonCharacterKeys(EW, OW), EW.deviceType = yW.Keyboard, EW.deviceSlot = 0, EW.inputIndex = WW, EW.type = 1 === iW ? "keydown" : "keyup", EW.key = String.fromCharCode(WW), EW.keyCode = WW, EW
      }
      static _CheckNonCharacterKeys(WW, iW) {
        const OW = iW.isDeviceAvailable(yW.Keyboard),
          mW = OW && 1 === iW.pollInput(yW.Keyboard, 0, 18),
          EW = OW && 1 === iW.pollInput(yW.Keyboard, 0, 17),
          NW = OW && (1 === iW.pollInput(yW.Keyboard, 0, 91) || 1 === iW.pollInput(yW.Keyboard, 0, 92) || 1 === iW.pollInput(yW.Keyboard, 0, 93)),
          PW = OW && 1 === iW.pollInput(yW.Keyboard, 0, 16);
        WW.altKey = mW, WW.ctrlKey = EW, WW.metaKey = NW, WW.shiftKey = PW
      }
      static _CreateEvent(WW) {
        const iW = {
          preventDefault: () => {}
        };
        return iW.target = WW, iW
      }
    }
    class vW {
      constructor(WW, iW, OW) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(WW, iW, ((WW, iW, mW, EW) => {
          const NW = eW.CreateDeviceEvent(WW, iW, mW, EW, this);
          OW(WW, iW, NW)
        })) : this._createDummyNativeInput()
      }
      pollInput(WW, iW, OW) {
        return this._nativeInput.pollInput(WW, iW, OW)
      }
      isDeviceAvailable(WW) {
        return WW === yW.Mouse || WW === yW.Touch
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
    const gW = Object.keys(TW).length / 2;
    class DW {
      constructor(WW, iW, OW, EW) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = mW.f.IsSafari(), this._usingMacOs = (0, sW.i)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = WW => {}, this._keyboardUpEvent = WW => {}, this._keyboardBlurEvent = WW => {}, this._pointerMoveEvent = WW => {}, this._pointerDownEvent = WW => {}, this._pointerUpEvent = WW => {}, this._pointerCancelEvent = WW => {}, this._pointerCancelTouch = WW => {}, this._pointerLeaveEvent = WW => {}, this._pointerWheelEvent = WW => {}, this._pointerBlurEvent = WW => {}, this._pointerMacOsChromeOutEvent = WW => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, sW.i)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, sW.i)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = WW => {}, this._gamepadDisconnectedEvent = WW => {}, this._eventPrefix = mW.f.GetPointerPrefix(WW), this._engine = WW, this._onDeviceConnected = iW, this._onDeviceDisconnected = OW, this._onInputChanged = EW, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(WW, iW, OW) {
        const EW = this._inputs[WW][iW];
        if (!EW) throw `Unable to find device ${yW[WW]}`;
        WW >= yW.DualShock && WW <= yW.DualSense && this._updateDevice(WW, iW, OW);
        const NW = EW[OW];
        if (void 0 === NW) throw `Unable to find input ${OW} for device ${yW[WW]} in slot ${iW}`;
        return OW === TW.Move && mW.f.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), NW
      }
      isDeviceAvailable(WW) {
        return void 0 !== this._inputs[WW]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const WW = this?._engine.getInputElement();
        if (WW && (!this._eventsAttached || this._elementToAttachTo !== WW)) {
          if (this._disableEvents(), this._inputs)
            for (const WW of this._inputs)
              if (WW)
                for (const iW in WW) {
                  const OW = WW[+iW];
                  if (OW)
                    for (let WW = 0; WW < OW.length; WW++) OW[WW] = 0
                }
          this._elementToAttachTo = WW, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const WW = navigator.getGamepads();
          for (const iW of WW) iW && this._addGamePad(iW)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(yW.Mouse, 0, 0, 0)
      }
      _addGamePad(WW) {
        const iW = this._getGamepadDeviceType(WW.id),
          OW = WW.index;
        this._gamepads = this._gamepads || new Array(WW.index + 1), this._registerDevice(iW, OW, WW.buttons.length + WW.axes.length), this._gamepads[OW] = iW
      }
      _addPointerDevice(WW, iW, OW, mW) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(WW, iW, gW);
        const EW = this._inputs[WW][iW];
        EW[0] = OW, EW[1] = mW
      }
      _registerDevice(WW, iW, OW) {
        if (void 0 === iW) throw `Unable to register device ${yW[WW]} to undefined slot.`;
        if (this._inputs[WW] || (this._inputs[WW] = {}), !this._inputs[WW][iW]) {
          const mW = new Array(OW);
          mW.fill(0), this._inputs[WW][iW] = mW, this._onDeviceConnected(WW, iW)
        }
      }
      _unregisterDevice(WW, iW) {
        this._inputs[WW][iW] && (delete this._inputs[WW][iW], this._onDeviceDisconnected(WW, iW))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = WW => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(yW.Keyboard, 0, 255));
          const iW = this._inputs[yW.Keyboard][0];
          if (iW) {
            iW[WW.keyCode] = 1;
            const OW = WW;
            OW.inputIndex = WW.keyCode, this._usingMacOs && WW.metaKey && "Meta" !== WW.key && (this._metaKeys.includes(WW.keyCode) || this._metaKeys.push(WW.keyCode)), this._onInputChanged(yW.Keyboard, 0, OW)
          }
        }, this._keyboardUpEvent = WW => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(yW.Keyboard, 0, 255));
          const iW = this._inputs[yW.Keyboard][0];
          if (iW) {
            iW[WW.keyCode] = 0;
            const OW = WW;
            if (OW.inputIndex = WW.keyCode, this._usingMacOs && "Meta" === WW.key && this._metaKeys.length > 0) {
              for (const WW of this._metaKeys) {
                const OW = eW.CreateDeviceEvent(yW.Keyboard, 0, WW, 0, this, this._elementToAttachTo);
                iW[WW] = 0, this._onInputChanged(yW.Keyboard, 0, OW)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(yW.Keyboard, 0, OW)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const WW = this._inputs[yW.Keyboard][0];
            for (let iW = 0; iW < WW.length; iW++)
              if (0 !== WW[iW]) {
                WW[iW] = 0;
                const OW = eW.CreateDeviceEvent(yW.Keyboard, 0, iW, 0, this, this._elementToAttachTo);
                this._onInputChanged(yW.Keyboard, 0, OW)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, sW.i)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let mW = 0; mW < this._maxTouchPoints; mW++) this._activeTouchIds[mW] = -1;
        this._pointerMoveEvent = WW => {
          const iW = this._getPointerType(WW);
          let OW = iW === yW.Mouse ? 0 : this._activeTouchIds.indexOf(WW.pointerId);
          if (iW === yW.Touch && -1 === OW) {
            if (0 === WW.buttons) return;
            const EW = this._activeTouchIds.indexOf(-1);
            if (!(EW >= 0)) return void mW.f.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            OW = EW, this._activeTouchIds[EW] = WW.pointerId, this._onDeviceConnected(iW, OW)
          }
          this._inputs[iW] || (this._inputs[iW] = {}), this._inputs[iW][OW] || this._addPointerDevice(iW, OW, WW.clientX, WW.clientY);
          const EW = this._inputs[iW][OW];
          if (EW) {
            const mW = WW;
            mW.inputIndex = TW.Move, EW[TW.Horizontal] = WW.clientX, EW[TW.Vertical] = WW.clientY, iW === yW.Touch && 0 === EW[TW.LeftClick] && (EW[TW.LeftClick] = 1), void 0 === WW.pointerId && (WW.pointerId = this._mouseId), this._onInputChanged(iW, OW, mW), this._usingSafari || -1 === WW.button || (mW.inputIndex = WW.button + 2, EW[WW.button + 2] = EW[WW.button + 2] ? 0 : 1, this._onInputChanged(iW, OW, mW))
          }
        }, this._pointerDownEvent = WW => {
          const iW = this._getPointerType(WW);
          let OW = iW === yW.Mouse ? 0 : WW.pointerId;
          if (iW === yW.Touch) {
            let iW = this._activeTouchIds.indexOf(WW.pointerId);
            if (-1 === iW && (iW = this._activeTouchIds.indexOf(-1)), !(iW >= 0)) return void mW.f.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            OW = iW, this._activeTouchIds[iW] = WW.pointerId
          }
          this._inputs[iW] || (this._inputs[iW] = {}), this._inputs[iW][OW] ? iW === yW.Touch && this._onDeviceConnected(iW, OW) : this._addPointerDevice(iW, OW, WW.clientX, WW.clientY);
          const EW = this._inputs[iW][OW];
          if (EW) {
            const mW = EW[TW.Horizontal],
              PW = EW[TW.Vertical];
            if (iW === yW.Mouse) {
              if (void 0 === WW.pointerId && (WW.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (NW) {}
            } else if (WW.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(WW.pointerId)
            } catch (NW) {}
            EW[TW.Horizontal] = WW.clientX, EW[TW.Vertical] = WW.clientY, EW[WW.button + 2] = 1;
            const LW = WW;
            LW.inputIndex = WW.button + 2, this._onInputChanged(iW, OW, LW), mW === WW.clientX && PW === WW.clientY || (LW.inputIndex = TW.Move, this._onInputChanged(iW, OW, LW))
          }
        }, this._pointerUpEvent = WW => {
          const iW = this._getPointerType(WW),
            OW = iW === yW.Mouse ? 0 : this._activeTouchIds.indexOf(WW.pointerId);
          if (iW === yW.Touch) {
            if (-1 === OW) return;
            this._activeTouchIds[OW] = -1
          }
          const mW = this._inputs[iW]?.[OW];
          let EW = WW.button,
            NW = mW && 0 !== mW[EW + 2];
          if (!NW && this._isUsingFirefox && this._usingMacOs && mW && (EW = 2 === EW ? 0 : 2, NW = 0 !== mW[EW + 2]), NW) {
            const NW = mW[TW.Horizontal],
              PW = mW[TW.Vertical];
            mW[TW.Horizontal] = WW.clientX, mW[TW.Vertical] = WW.clientY, mW[EW + 2] = 0;
            const LW = WW;
            void 0 === WW.pointerId && (WW.pointerId = this._mouseId), NW === WW.clientX && PW === WW.clientY || (LW.inputIndex = TW.Move, this._onInputChanged(iW, OW, LW)), LW.inputIndex = EW + 2, iW === yW.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : WW.pointerId && this._elementToAttachTo.hasPointerCapture?.(WW.pointerId) && this._elementToAttachTo.releasePointerCapture(WW.pointerId), this._onInputChanged(iW, OW, LW), iW === yW.Touch && this._onDeviceDisconnected(iW, OW)
          }
        }, this._pointerCancelTouch = WW => {
          const iW = this._activeTouchIds.indexOf(WW);
          if (-1 === iW) return;
          this._elementToAttachTo.hasPointerCapture?.(WW) && this._elementToAttachTo.releasePointerCapture(WW), this._inputs[yW.Touch][iW][TW.LeftClick] = 0;
          const OW = eW.CreateDeviceEvent(yW.Touch, iW, TW.LeftClick, 0, this, this._elementToAttachTo, WW);
          this._onInputChanged(yW.Touch, iW, OW), this._activeTouchIds[iW] = -1, this._onDeviceDisconnected(yW.Touch, iW)
        }, this._pointerCancelEvent = WW => {
          if ("mouse" === WW.pointerType) {
            const WW = this._inputs[yW.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let iW = TW.LeftClick; iW <= TW.BrowserForward; iW++)
              if (1 === WW[iW]) {
                WW[iW] = 0;
                const OW = eW.CreateDeviceEvent(yW.Mouse, 0, iW, 0, this, this._elementToAttachTo);
                this._onInputChanged(yW.Mouse, 0, OW)
              }
          } else this._pointerCancelTouch(WW.pointerId)
        }, this._pointerLeaveEvent = WW => {
          "pen" === WW.pointerType && this._pointerCancelTouch(WW.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let WW = !1;
        const iW = function() {};
        try {
          const OW = Object.defineProperty({}, "passive", {
            get: function() {
              WW = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", iW, OW), this._elementToAttachTo.removeEventListener("test", iW, OW)
        } catch (OW) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(yW.Mouse)) {
            const WW = this._inputs[yW.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let iW = TW.LeftClick; iW <= TW.BrowserForward; iW++)
              if (1 === WW[iW]) {
                WW[iW] = 0;
                const OW = eW.CreateDeviceEvent(yW.Mouse, 0, iW, 0, this, this._elementToAttachTo);
                this._onInputChanged(yW.Mouse, 0, OW)
              }
          }
          if (this.isDeviceAvailable(yW.Touch)) {
            const WW = this._inputs[yW.Touch];
            for (let iW = 0; iW < this._activeTouchIds.length; iW++) {
              const OW = this._activeTouchIds[iW];
              if (this._elementToAttachTo.hasPointerCapture?.(OW) && this._elementToAttachTo.releasePointerCapture(OW), -1 !== OW && 1 === WW[iW]?.[TW.LeftClick]) {
                WW[iW][TW.LeftClick] = 0;
                const mW = eW.CreateDeviceEvent(yW.Touch, iW, TW.LeftClick, 0, this, this._elementToAttachTo, OW);
                this._onInputChanged(yW.Touch, iW, mW), this._activeTouchIds[iW] = -1, this._onDeviceDisconnected(yW.Touch, iW)
              }
            }
          }
        }, this._pointerWheelEvent = WW => {
          const iW = yW.Mouse;
          this._inputs[iW] || (this._inputs[iW] = []), this._inputs[iW][0] || (this._pointerActive = !0, this._registerDevice(iW, 0, gW));
          const OW = this._inputs[iW][0];
          if (OW) {
            OW[TW.MouseWheelX] = WW.deltaX || 0, OW[TW.MouseWheelY] = WW.deltaY || WW.wheelDelta || 0, OW[TW.MouseWheelZ] = WW.deltaZ || 0;
            const mW = WW;
            void 0 === WW.pointerId && (WW.pointerId = this._mouseId), 0 !== OW[TW.MouseWheelX] && (mW.inputIndex = TW.MouseWheelX, this._onInputChanged(iW, 0, mW)), 0 !== OW[TW.MouseWheelY] && (mW.inputIndex = TW.MouseWheelY, this._onInputChanged(iW, 0, mW)), 0 !== OW[TW.MouseWheelZ] && (mW.inputIndex = TW.MouseWheelZ, this._onInputChanged(iW, 0, mW))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = WW => {
          WW.buttons > 1 && this._pointerCancelEvent(WW)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!WW && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(yW.Mouse)) {
            const WW = this._inputs[yW.Mouse][0];
            WW[TW.MouseWheelX] = 0, WW[TW.MouseWheelY] = 0, WW[TW.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = WW => {
          this._addGamePad(WW.gamepad)
        }, this._gamepadDisconnectedEvent = WW => {
          if (this._gamepads) {
            const iW = this._getGamepadDeviceType(WW.gamepad.id),
              OW = WW.gamepad.index;
            this._unregisterDevice(iW, OW), delete this._gamepads[OW]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(WW, iW, OW) {
        const mW = navigator.getGamepads()[iW];
        if (mW && WW === this._gamepads[iW]) {
          const EW = this._inputs[WW][iW];
          OW >= mW.buttons.length ? EW[OW] = mW.axes[OW - mW.buttons.length].valueOf() : EW[OW] = mW.buttons[OW].value
        }
      }
      _getGamepadDeviceType(WW) {
        return -1 !== WW.indexOf("054c") ? -1 !== WW.indexOf("0ce6") ? yW.DualSense : yW.DualShock : -1 !== WW.indexOf("Xbox One") || -1 !== WW.search("Xbox 360") || -1 !== WW.search("xinput") || -1 !== WW.indexOf("045e") && -1 === WW.indexOf("Surface Dock") ? yW.Xbox : -1 !== WW.indexOf("057e") ? yW.Switch : yW.Generic
      }
      _getPointerType(WW) {
        let iW = yW.Mouse;
        return ("touch" === WW.pointerType || "pen" === WW.pointerType || WW.touches) && (iW = yW.Touch), iW
      }
    }
    class VW {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = iW, this.deviceSlot = OW, this.onInputChangedObservable = new PW.e, this._deviceInputSystem = WW
      }
      getInput(WW) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, WW)
      }
    }
    class pW {
      constructor(WW) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = WW => {
          for (let iW = 0; iW < this._devices.length; iW++) {
            const OW = this._devices[iW];
            for (const mW in OW) {
              const OW = +mW;
              WW._addDevice(new VW(this._deviceInputSystem, iW, OW))
            }
          }
          this._registeredManagers.push(WW)
        }, this.unregisterManager = WW => {
          const iW = this._registeredManagers.indexOf(WW);
          iW > -1 && this._registeredManagers.splice(iW, 1)
        };
        const iW = Object.keys(yW).length / 2;
        this._devices = new Array(iW);
        const OW = (WW, iW) => {
            this._devices[WW] || (this._devices[WW] = new Array), this._devices[WW][iW] || (this._devices[WW][iW] = iW);
            for (const OW of this._registeredManagers) {
              const mW = new VW(this._deviceInputSystem, WW, iW);
              OW._addDevice(mW)
            }
          },
          mW = (WW, iW) => {
            this._devices[WW]?.[iW] && delete this._devices[WW][iW];
            for (const OW of this._registeredManagers) OW._removeDevice(WW, iW)
          },
          EW = (WW, iW, OW) => {
            if (OW)
              for (const mW of this._registeredManagers) mW._onInputChanged(WW, iW, OW)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new vW(OW, mW, EW) : this._deviceInputSystem = new DW(WW, OW, mW, EW)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class fW {
      getDeviceSource(WW, iW) {
        if (void 0 === iW) {
          if (void 0 === this._firstDevice[WW]) return null;
          iW = this._firstDevice[WW]
        }
        return this._devices[WW] && void 0 !== this._devices[WW][iW] ? this._devices[WW][iW] : null
      }
      getDeviceSources(WW) {
        return this._devices[WW] ? this._devices[WW].filter((WW => !!WW)) : []
      }
      constructor(WW) {
        const iW = Object.keys(yW).length / 2;
        this._devices = new Array(iW), this._firstDevice = new Array(iW), this._engine = WW, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new pW(WW)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new PW.e((WW => {
          for (const iW of this._devices)
            if (iW)
              for (const OW of iW) OW && this.onDeviceConnectedObservable.notifyObserver(WW, OW)
        })), this.onDeviceDisconnectedObservable = new PW.e, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = WW.jD.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.jD.remove(this._onDisposeObserver)
      }
      _addDevice(WW) {
        this._devices[WW.deviceType] || (this._devices[WW.deviceType] = []), this._devices[WW.deviceType][WW.deviceSlot] || (this._devices[WW.deviceType][WW.deviceSlot] = WW, this._updateFirstDevices(WW.deviceType)), this.onDeviceConnectedObservable.notifyObservers(WW)
      }
      _removeDevice(WW, iW) {
        const OW = this._devices[WW]?.[iW];
        this.onDeviceDisconnectedObservable.notifyObservers(OW), this._devices[WW]?.[iW] && delete this._devices[WW][iW], this._updateFirstDevices(WW)
      }
      _onInputChanged(WW, iW, OW) {
        this._devices[WW]?.[iW]?.onInputChangedObservable.notifyObservers(OW)
      }
      _updateFirstDevices(WW) {
        switch (WW) {
          case yW.Keyboard:
          case yW.Mouse:
            this._firstDevice[WW] = 0;
            break;
          case yW.Touch:
          case yW.DualSense:
          case yW.DualShock:
          case yW.Xbox:
          case yW.Switch:
          case yW.Generic: {
            delete this._firstDevice[WW];
            const iW = this._devices[WW];
            if (iW)
              for (let OW = 0; OW < iW.length; OW++)
                if (iW[OW]) {
                  this._firstDevice[WW] = OW;
                  break
                } break
          }
        }
      }
    }
    var CW = OW(41706);
    class XW {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get aL() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(WW) {
        this._singleClick = WW
      }
      set aL(WW) {
        this._doubleClick = WW
      }
      set hasSwiped(WW) {
        this._hasSwiped = WW
      }
      set ignore(WW) {
        this._ignore = WW
      }
    }
    class BW {
      constructor(WW) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new tW.m(0, 0), this._previousStartingPointerPosition = new tW.m(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = WW || MW.d.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(WW) {
        return this._meshUnderPointerId[WW] || null
      }
      get unTranslatedPointer() {
        return new tW.m(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(WW) {
        this._pointerX = WW
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(WW) {
        this._pointerY = WW
      }
      _updatePointerPosition(WW) {
        const iW = this._scene.VA().getInputElementClientRect();
        iW && (this._pointerX = WW.clientX - iW.left, this._pointerY = WW.clientY - iW.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(WW, iW) {
        const OW = this._scene,
          mW = OW.VA(),
          EW = mW.getInputElement();
        EW && (EW.tabIndex = mW.canvasTabIndex, OW.doNotHandleCursors || (EW.style.cursor = OW.defaultCursor)), this._setCursorAndPointerOverMesh(WW, iW, OW);
        for (const LW of OW._pointerMoveStage) {
          WW = WW || this._pickMove(iW);
          const OW = !!WW?.pickedMesh;
          WW = LW.action(this._unTranslatedPointerX, this._unTranslatedPointerY, WW, OW, EW)
        }
        const NW = iW.inputIndex >= TW.MouseWheelX && iW.inputIndex <= TW.MouseWheelZ ? SW.c.POINTERWHEEL : SW.c.POINTERMOVE;
        let PW;
        OW.onPointerMove && (WW = WW || this._pickMove(iW), OW.onPointerMove(iW, WW, NW)), WW ? (PW = new SW.f(NW, iW, WW), this._setRayOnPointerInfo(WW, iW)) : (PW = new SW.f(NW, iW, null, this), this._movePointerInfo = PW), OW.onPointerObservable.hasObservers() && OW.onPointerObservable.notifyObservers(PW, NW)
      }
      _setRayOnPointerInfo(WW, iW) {
        const OW = this._scene;
        WW && CW.b._IsPickingAvailable && (WW.ray || (WW.ray = OW.createPickingRay(iW.offsetX, iW.offsetY, tW.d.Identity(), OW.activeCamera)))
      }
      _addCameraPointerObserver(WW, iW) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(WW, iW)
      }
      _removeCameraPointerObserver(WW) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(WW)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(WW, iW, OW) {
        const mW = this._scene,
          EW = new SW.d(OW, iW, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return WW && (EW.originalPickingInfo = WW, EW.ray = WW.ray, "xr-near" === iW.pointerType && WW.originMesh && (EW.nearInteractionPickingInfo = WW)), mW.onPrePointerObservable.notifyObservers(EW, OW), !!EW.skipOnPointerObservable
      }
      _pickMove(WW) {
        const iW = this._scene,
          OW = iW.Kl(this._unTranslatedPointerX, this._unTranslatedPointerY, iW.pointerMovePredicate, iW.pointerMoveFastCheck, iW.cameraToUseForPointers, iW.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(OW, WW, iW), OW
      }
      _updateMeshUnderPointer() {
        const WW = this._scene;
        if (!WW.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || WW.skipPointerMovePicking || !WW.cameraToUseForPointers && !WW.activeCamera) return;
        this._ensurePointerMovePredicate();
        const iW = this._pointerX,
          OW = this._pointerY,
          mW = this._unTranslatedPointerX,
          EW = this._unTranslatedPointerY;
        for (const NW of this._latestPointerMoveEvents.values()) this._pointerX = NW.pointerX, this._pointerY = NW.pointerY, this._unTranslatedPointerX = NW.unTranslatedPointerX, this._unTranslatedPointerY = NW.unTranslatedPointerY, this._pickMove(NW.event);
        this._pointerX = iW, this._pointerY = OW, this._unTranslatedPointerX = mW, this._unTranslatedPointerY = EW
      }
      _ensurePointerMovePredicate() {
        const WW = this._scene;
        WW.pointerMovePredicate || (WW.pointerMovePredicate = iW => (iW._isPointerMovePickable ?? iW.Fb) && iW.isVisible && iW.isReady() && iW.isEnabled() && (iW.enablePointerMoveEvents || WW.constantlyUpdateMeshUnderPointer || null !== iW._getActionManagerForTrigger()) && (!WW.cameraToUseForPointers || 0 !== (WW.cameraToUseForPointers.layerMask & iW.layerMask)))
      }
      _setCursorAndPointerOverMesh(WW, iW, OW) {
        const mW = OW.VA().getInputElement();
        if (WW?.pickedMesh) {
          if (this.setPointerOverMesh(WW.pickedMesh, iW.pointerId, WW, iW), !OW.doNotHandleCursors && mW && this._pointerOverMesh) {
            const WW = this._pointerOverMesh._getActionManagerForTrigger();
            WW && WW.hasPointerTriggers && (mW.style.cursor = WW.hoverCursor || OW.hoverCursor)
          }
        } else this.setPointerOverMesh(null, iW.pointerId, WW, iW)
      }
      simulatePointerMove(WW, iW) {
        const OW = new PointerEvent("pointermove", iW);
        OW.inputIndex = TW.Move, this._checkPrePointerObservable(WW, OW, SW.c.POINTERMOVE) || this._processPointerMove(WW, OW)
      }
      simulatePointerDown(WW, iW) {
        const OW = new PointerEvent("pointerdown", iW);
        OW.inputIndex = OW.button + 2, this._checkPrePointerObservable(WW, OW, SW.c.POINTERDOWN) || this._processPointerDown(WW, OW)
      }
      _processPointerDown(WW, iW) {
        const OW = this._scene;
        if (WW?.pickedMesh) {
          this._pickedDownMesh = WW.pickedMesh;
          const mW = WW.pickedMesh._getActionManagerForTrigger();
          if (mW) {
            if (mW.hasPickTriggers) switch (mW.processTrigger(5, new AW(WW.pickedMesh, OW.pointerX, OW.pointerY, WW.pickedMesh, iW, WW)), iW.button) {
              case 0:
                mW.processTrigger(2, new AW(WW.pickedMesh, OW.pointerX, OW.pointerY, WW.pickedMesh, iW, WW));
                break;
              case 1:
                mW.processTrigger(4, new AW(WW.pickedMesh, OW.pointerX, OW.pointerY, WW.pickedMesh, iW, WW));
                break;
              case 2:
                mW.processTrigger(3, new AW(WW.pickedMesh, OW.pointerX, OW.pointerY, WW.pickedMesh, iW, WW))
            }
            mW.hasSpecificTrigger(8) && window.setTimeout((() => {
              const WW = OW.Kl(this._unTranslatedPointerX, this._unTranslatedPointerY, (WW => WW.Fb && WW.isVisible && WW.isReady() && WW.actionManager && WW.actionManager.hasSpecificTrigger(8) && WW === this._pickedDownMesh), !1, OW.cameraToUseForPointers);
              WW?.pickedMesh && mW && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > BW.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, mW.processTrigger(8, AW.CreateNew(WW.pickedMesh, iW)))
            }), BW.LongPressDelay)
          }
        } else
          for (const NW of OW._pointerDownStage) WW = NW.action(this._unTranslatedPointerX, this._unTranslatedPointerY, WW, iW, !1);
        let mW;
        const EW = SW.c.POINTERDOWN;
        WW ? (OW.onPointerDown && OW.onPointerDown(iW, WW, EW), mW = new SW.f(EW, iW, WW), this._setRayOnPointerInfo(WW, iW)) : mW = new SW.f(EW, iW, null, this), OW.onPointerObservable.hasObservers() && OW.onPointerObservable.notifyObservers(mW, EW)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(WW, iW, OW) {
        const mW = new PointerEvent("pointerup", iW);
        mW.inputIndex = TW.Move;
        const EW = new XW;
        OW ? EW.aL = !0 : EW.singleClick = !0, this._checkPrePointerObservable(WW, mW, SW.c.POINTERUP) || this._processPointerUp(WW, mW, EW)
      }
      _processPointerUp(WW, iW, OW) {
        const mW = this._scene;
        if (WW?.pickedMesh) {
          if (this._pickedUpMesh = WW.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (mW.onPointerPick && mW.onPointerPick(iW, WW), OW.singleClick && !OW.ignore && mW.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const OW = SW.c.POINTERPICK,
              EW = new SW.f(OW, iW, WW);
            this._setRayOnPointerInfo(WW, iW), mW.onPointerObservable.notifyObservers(EW, OW)
          }
          const EW = WW.pickedMesh._getActionManagerForTrigger();
          if (EW && !OW.ignore) {
            EW.processTrigger(7, AW.CreateNew(WW.pickedMesh, iW, WW)), !OW.hasSwiped && OW.singleClick && EW.processTrigger(1, AW.CreateNew(WW.pickedMesh, iW, WW));
            const mW = WW.pickedMesh._getActionManagerForTrigger(6);
            OW.aL && mW && mW.processTrigger(6, AW.CreateNew(WW.pickedMesh, iW, WW))
          }
        } else if (!OW.ignore)
          for (const EW of mW._pointerUpStage) WW = EW.action(this._unTranslatedPointerX, this._unTranslatedPointerY, WW, iW, OW.aL);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const WW = this._pickedDownMesh._getActionManagerForTrigger(16);
          WW && WW.processTrigger(16, AW.CreateNew(this._pickedDownMesh, iW))
        }
        if (!OW.ignore) {
          const EW = new SW.f(SW.c.POINTERUP, iW, WW);
          if (this._setRayOnPointerInfo(WW, iW), mW.onPointerObservable.notifyObservers(EW, SW.c.POINTERUP), mW.onPointerUp && mW.onPointerUp(iW, WW, SW.c.POINTERUP), !OW.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let EW = 0;
            if (OW.singleClick ? EW = SW.c.POINTERTAP : OW.aL && (EW = SW.c.POINTERDOUBLETAP), EW) {
              const OW = new SW.f(EW, iW, WW);
              mW.onPointerObservable.hasObservers() && mW.onPointerObservable.hasSpecificMask(EW) && mW.onPointerObservable.notifyObservers(OW, EW)
            }
          }
        }
      }
      isPointerCaptured() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[WW]
      }
      attachControl() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const EW = this._scene,
          NW = EW.VA();
        mW || (mW = NW.getInputElement()), this._alreadyAttached && this.detachControl(), mW && (this._alreadyAttachedTo = mW), this._deviceSourceManager = new fW(NW), this._initActionManager = WW => {
          if (!this._meshPickProceed) {
            const iW = EW.skipPointerUpPicking || 0 === EW._registeredActions && !this._checkForPicking() && !EW.onPointerUp ? null : EW.Kl(this._unTranslatedPointerX, this._unTranslatedPointerY, EW.pointerUpPredicate, EW.pointerUpFastCheck, EW.cameraToUseForPointers, EW.pointerUpTrianglePredicate);
            this._currentPickResult = iW, iW && (WW = iW.hit && iW.pickedMesh ? iW.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return WW
        }, this._delayedSimpleClick = (WW, iW, OW) => {
          if ((Date.now() - this._previousStartingPointerTime > BW.DoubleClickDelay && !this._doubleClickOccured || WW !== this._previousButtonPressed) && (this._doubleClickOccured = !1, iW.singleClick = !0, iW.ignore = !1, this._delayedClicks[WW])) {
            const iW = this._delayedClicks[WW].evt,
              OW = SW.c.POINTERTAP,
              mW = new SW.f(OW, iW, this._currentPickResult);
            EW.onPointerObservable.hasObservers() && EW.onPointerObservable.hasSpecificMask(OW) && EW.onPointerObservable.notifyObservers(mW, OW), this._delayedClicks[WW] = null
          }
        }, this._initClickEvent = (WW, iW, OW, mW) => {
          const EW = new XW;
          this._currentPickResult = null;
          let NW = null,
            PW = WW.hasSpecificMask(SW.c.POINTERPICK) || iW.hasSpecificMask(SW.c.POINTERPICK) || WW.hasSpecificMask(SW.c.POINTERTAP) || iW.hasSpecificMask(SW.c.POINTERTAP) || WW.hasSpecificMask(SW.c.POINTERDOUBLETAP) || iW.hasSpecificMask(SW.c.POINTERDOUBLETAP);
          !PW && YW && (NW = this._initActionManager(NW, EW), NW && (PW = NW.hasPickTriggers));
          let LW = !1;
          if (PW = PW && !this._isMultiTouchGesture, PW) {
            const PW = OW.button;
            if (EW.hasSwiped = this._isPointerSwiping(), !EW.hasSwiped) {
              let cW = !BW.ExclusiveDoubleClickMode;
              if (cW || (cW = !WW.hasSpecificMask(SW.c.POINTERDOUBLETAP) && !iW.hasSpecificMask(SW.c.POINTERDOUBLETAP), cW && !YW.HasSpecificTrigger(6) && (NW = this._initActionManager(NW, EW), NW && (cW = !NW.hasSpecificTrigger(6)))), cW)(Date.now() - this._previousStartingPointerTime > BW.DoubleClickDelay || PW !== this._previousButtonPressed) && (EW.singleClick = !0, mW(EW, this._currentPickResult), LW = !0);
              else {
                const WW = {
                  evt: OW,
                  clickInfo: EW,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, PW, EW, mW), BW.DoubleClickDelay)
                };
                this._delayedClicks[PW] = WW
              }
              let wW = WW.hasSpecificMask(SW.c.POINTERDOUBLETAP) || iW.hasSpecificMask(SW.c.POINTERDOUBLETAP);
              !wW && YW.HasSpecificTrigger(6) && (NW = this._initActionManager(NW, EW), NW && (wW = NW.hasSpecificTrigger(6))), wW && (PW === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < BW.DoubleClickDelay && !this._doubleClickOccured ? (EW.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = PW, BW.ExclusiveDoubleClickMode ? (this._delayedClicks[PW] && (clearTimeout(this._delayedClicks[PW]?.timeoutId), this._delayedClicks[PW] = null), mW(EW, this._previousPickResult)) : mW(EW, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, EW.aL = !0, EW.ignore = !1, BW.ExclusiveDoubleClickMode && this._delayedClicks[PW] && (clearTimeout(this._delayedClicks[PW]?.timeoutId), this._delayedClicks[PW] = null), mW(EW, this._currentPickResult)), LW = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = PW))
            }
          }
          LW || mW(EW, this._currentPickResult)
        }, this._onPointerMove = WW => {
          if (this._updatePointerPosition(WW), this._latestPointerMoveEvents.set(WW.pointerId, {
              event: WW,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > BW.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > BW.DragMovementThreshold), NW.isPointerLock && NW._verifyPointerLock(), this._checkPrePointerObservable(null, WW, WW.inputIndex >= TW.MouseWheelX && WW.inputIndex <= TW.MouseWheelZ ? SW.c.POINTERWHEEL : SW.c.POINTERMOVE)) return;
          if (!EW.cameraToUseForPointers && !EW.activeCamera) return;
          if (EW.skipPointerMovePicking) return void this._processPointerMove(new lW.b, WW);
          this._ensurePointerMovePredicate();
          const iW = EW._registeredActions > 0 || EW.constantlyUpdateMeshUnderPointer ? this._pickMove(WW) : null;
          this._processPointerMove(iW, WW)
        }, this._onPointerDown = WW => {
          const iW = this._activePointerIds.indexOf(-1);
          if (-1 === iW ? this._activePointerIds.push(WW.pointerId) : this._activePointerIds[iW] = WW.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, BW.ExclusiveDoubleClickMode)
            for (let mW = 0; mW < this._delayedClicks.length; mW++)
              if (this._delayedClicks[mW])
                if (WW.button === mW) clearTimeout(this._delayedClicks[mW]?.timeoutId);
                else {
                  const WW = this._delayedClicks[mW].clickInfo;
                  this._doubleClickOccured = !1, WW.singleClick = !0, WW.ignore = !1;
                  const iW = this._delayedClicks[mW].evt,
                    OW = SW.c.POINTERTAP,
                    NW = new SW.f(OW, iW, this._currentPickResult);
                  EW.onPointerObservable.hasObservers() && EW.onPointerObservable.hasSpecificMask(OW) && EW.onPointerObservable.notifyObservers(NW, OW), this._delayedClicks[mW] = null
                } if (this._updatePointerPosition(WW), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = WW.button), EW.preventDefaultOnPointerDown && mW && (WW.preventDefault(), mW.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, WW, SW.c.POINTERDOWN)) return;
          if (!EW.cameraToUseForPointers && !EW.activeCamera) return;
          let OW;
          this._pointerCaptures[WW.pointerId] = !0, EW.pointerDownPredicate || (EW.pointerDownPredicate = WW => WW.Fb && WW.isVisible && WW.isReady() && WW.isEnabled() && (!EW.cameraToUseForPointers || 0 !== (EW.cameraToUseForPointers.layerMask & WW.layerMask))), this._pickedDownMesh = null, OW = EW.skipPointerDownPicking || 0 === EW._registeredActions && !this._checkForPicking() && !EW.onPointerDown ? new lW.b : EW.Kl(this._unTranslatedPointerX, this._unTranslatedPointerY, EW.pointerDownPredicate, EW.pointerDownFastCheck, EW.cameraToUseForPointers, EW.pointerDownTrianglePredicate), this._processPointerDown(OW, WW)
        }, this._onPointerUp = WW => {
          const iW = this._activePointerIds.indexOf(WW.pointerId); - 1 !== iW && (this._activePointerIds[iW] = -1, this._activePointerIdsCount--, "touch" === WW.pointerType && this._latestPointerMoveEvents.delete(WW.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(WW), EW.preventDefaultOnPointerUp && mW && (WW.preventDefault(), mW.focus()), this._initClickEvent(EW.onPrePointerObservable, EW.onPointerObservable, WW, ((iW, OW) => {
            if (EW.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !iW.ignore)) {
              if (this._checkPrePointerObservable(null, WW, SW.c.POINTERUP)) return this._swipeButtonPressed === WW.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === WW.buttons && (this._pointerCaptures[WW.pointerId] = !1));
              iW.hasSwiped || (iW.singleClick && EW.onPrePointerObservable.hasSpecificMask(SW.c.POINTERTAP) && this._checkPrePointerObservable(null, WW, SW.c.POINTERTAP) && (this._skipPointerTap = !0), iW.aL && EW.onPrePointerObservable.hasSpecificMask(SW.c.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, WW, SW.c.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[WW.pointerId] ? (0 === WW.buttons && (this._pointerCaptures[WW.pointerId] = !1), (EW.cameraToUseForPointers || EW.activeCamera) && (EW.pointerUpPredicate || (EW.pointerUpPredicate = WW => WW.Fb && WW.isVisible && WW.isReady() && WW.isEnabled() && (!EW.cameraToUseForPointers || 0 !== (EW.cameraToUseForPointers.layerMask & WW.layerMask))), !this._meshPickProceed && (YW && YW.HasTriggers || this._checkForPicking() || EW.onPointerUp) && this._initActionManager(null, iW), OW || (OW = this._currentPickResult), this._processPointerUp(OW, WW, iW), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === WW.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === WW.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = WW => {
          const iW = oW.c.KEYDOWN;
          if (EW.onPreKeyboardObservable.hasObservers()) {
            const OW = new oW.g(iW, WW);
            if (EW.onPreKeyboardObservable.notifyObservers(OW, iW), OW.skipOnKeyboardObservable) return
          }
          if (EW.onKeyboardObservable.hasObservers()) {
            const OW = new oW.h(iW, WW);
            EW.onKeyboardObservable.notifyObservers(OW, iW)
          }
          EW.actionManager && EW.actionManager.processTrigger(14, AW.CreateNewFromScene(EW, WW))
        }, this._onKeyUp = WW => {
          const iW = oW.c.KEYUP;
          if (EW.onPreKeyboardObservable.hasObservers()) {
            const OW = new oW.g(iW, WW);
            if (EW.onPreKeyboardObservable.notifyObservers(OW, iW), OW.skipOnKeyboardObservable) return
          }
          if (EW.onKeyboardObservable.hasObservers()) {
            const OW = new oW.h(iW, WW);
            EW.onKeyboardObservable.notifyObservers(OW, iW)
          }
          EW.actionManager && EW.actionManager.processTrigger(15, AW.CreateNewFromScene(EW, WW))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((mW => {
          mW.deviceType === yW.Mouse ? mW.onInputChangedObservable.add((EW => {
            this._originMouseEvent = EW, EW.inputIndex === TW.LeftClick || EW.inputIndex === TW.MiddleClick || EW.inputIndex === TW.RightClick || EW.inputIndex === TW.BrowserBack || EW.inputIndex === TW.BrowserForward ? iW && 1 === mW.getInput(EW.inputIndex) ? this._onPointerDown(EW) : WW && 0 === mW.getInput(EW.inputIndex) && this._onPointerUp(EW) : OW && (EW.inputIndex === TW.Move ? this._onPointerMove(EW) : EW.inputIndex !== TW.MouseWheelX && EW.inputIndex !== TW.MouseWheelY && EW.inputIndex !== TW.MouseWheelZ || this._onPointerMove(EW))
          })) : mW.deviceType === yW.Touch ? mW.onInputChangedObservable.add((EW => {
            EW.inputIndex === TW.LeftClick && (iW && 1 === mW.getInput(EW.inputIndex) ? (this._onPointerDown(EW), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : WW && 0 === mW.getInput(EW.inputIndex) && (this._onPointerUp(EW), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), OW && EW.inputIndex === TW.Move && this._onPointerMove(EW)
          })) : mW.deviceType === yW.Keyboard && mW.onInputChangedObservable.add((WW => {
            "keydown" === WW.type ? this._onKeyDown(WW) : "keyup" === WW.type && this._onKeyUp(WW)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 ? arguments[2] : void 0,
          mW = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[iW] === WW && (!WW || !WW._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const EW = this._meshUnderPointerId[iW];
        let NW;
        EW && (NW = EW._getActionManagerForTrigger(10), NW && NW.processTrigger(10, new AW(EW, this._pointerX, this._pointerY, WW, mW, {
          pointerId: iW
        }))), WW ? (this._meshUnderPointerId[iW] = WW, this._pointerOverMesh = WW, NW = WW._getActionManagerForTrigger(9), NW && NW.processTrigger(9, new AW(WW, this._pointerX, this._pointerY, WW, mW, {
          pointerId: iW,
          pickResult: OW
        }))) : (delete this._meshUnderPointerId[iW], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: WW,
          pointerId: iW
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(WW) {
        this._pointerOverMesh === WW && (this._pointerOverMesh = null), this._pickedDownMesh === WW && (this._pickedDownMesh = null), this._pickedUpMesh === WW && (this._pickedUpMesh = null);
        for (const iW in this._meshUnderPointerId) this._meshUnderPointerId[iW] === WW && delete this._meshUnderPointerId[iW]
      }
    }
    BW.DragMovementThreshold = 10, BW.LongPressDelay = 500, BW.DoubleClickDelay = 300, BW.ExclusiveDoubleClickMode = !1;
    var qW = OW(41469),
      RW = OW(38372),
      GW = OW(38937);
    class IW {
      static get UniqueId() {
        const WW = this._UniqueIdCounter;
        return this._UniqueIdCounter++, WW
      }
    }
    IW._UniqueIdCounter = 1;
    var aW = OW(41558),
      rW = OW(41710),
      zW = OW(38253);
    class FW {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var QW, Wi, ii, Oi, mi, Ei, Ni, Pi, Li, ci, wi, ti, Zi, xi, li, Ai, bi, ji, Ui, ki, si, Mi, Ki, Si, Yi, yi, Ti, Ji, Hi, ni, ui, oi, di, ei, vi, gi, Di, Vi, fi, Ci, Xi, Bi, qi, Ri, Gi, Ii, ai, ri, zi, Fi, Qi, WO, iO, OO = OW(39911),
      mO = OW(38299);
    const EO = new tW.r,
      NO = new tW.r;
    var PO;
    ! function(WW) {
      WW[WW.BackwardCompatible = 0] = "BackwardCompatible", WW[WW.Intermediate = 1] = "Intermediate", WW[WW.Aggressive = 2] = "Aggressive"
    }(PO || (PO = {}));
    class LO {
      static DefaultMaterialFactory(WW) {
        throw (0, KW.o)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, KW.o)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(WW) {
        WW !== this._clearColor && (this._clearColor = WW, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(WW) {
        if (WW !== this._performancePriority) {
          switch (this._performancePriority = WW, WW) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(WW)
        }
      }
      set forceWireframe(WW) {
        this._forceWireframe !== WW && (this._forceWireframe = WW, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(WW) {
        this._skipFrustumClipping !== WW && (this._skipFrustumClipping = WW)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(WW) {
        this._forcePointsCloud !== WW && (this._forcePointsCloud = WW, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(WW) {
        this._environmentTexture !== WW && (this._environmentTexture = WW, this.onEnvironmentTextureChangedObservable.notifyObservers(WW), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let WW = [];
        WW = WW.concat(this.meshes), WW = WW.concat(this.lights), WW = WW.concat(this.cameras), WW = WW.concat(this.transformNodes);
        for (const iW of this.skeletons) WW = WW.concat(iW.bones);
        return WW
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(WW) {
        this._animationPropertiesOverride = WW
      }
      set onDispose(WW) {
        this._onDisposeObserver && this.jD.remove(this._onDisposeObserver), this._onDisposeObserver = this.jD.add(WW)
      }
      set beforeRender(WW) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), WW && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(WW))
      }
      set afterRender(WW) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), WW && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(WW))
      }
      set beforeCameraRender(WW) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(WW)
      }
      set afterCameraRender(WW) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(WW)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(WW) {
        this._pointerPickingConfiguration.pointerDownPredicate = WW
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(WW) {
        this._pointerPickingConfiguration.pointerUpPredicate = WW
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(WW) {
        this._pointerPickingConfiguration.pointerMovePredicate = WW
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(WW) {
        this._pointerPickingConfiguration.pointerDownFastCheck = WW
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(WW) {
        this._pointerPickingConfiguration.pointerUpFastCheck = WW
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(WW) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = WW
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(WW) {
        this._pointerPickingConfiguration.skipPointerMovePicking = WW
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(WW) {
        this._pointerPickingConfiguration.skipPointerDownPicking = WW
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(WW) {
        this._pointerPickingConfiguration.skipPointerUpPicking = WW
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return BW.DragMovementThreshold
      }
      static set DragMovementThreshold(WW) {
        BW.DragMovementThreshold = WW
      }
      static get LongPressDelay() {
        return BW.LongPressDelay
      }
      static set LongPressDelay(WW) {
        BW.LongPressDelay = WW
      }
      static get DoubleClickDelay() {
        return BW.DoubleClickDelay
      }
      static set DoubleClickDelay(WW) {
        BW.DoubleClickDelay = WW
      }
      static get ExclusiveDoubleClickMode() {
        return BW.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(WW) {
        BW.ExclusiveDoubleClickMode = WW
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? tW.q.ZeroReadOnly
      }
      bindEyePosition(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const mW = this._eyePosition,
          EW = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          NW = this.floatingOriginOffset,
          PW = EO.set(mW.x, mW.y, mW.z, EW ? -1 : 1),
          LW = PW.subtractFromFloatsToRef(NW.x, NW.y, NW.z, 0, NO);
        return WW && (OW ? WW.setFloat3(iW, LW.x, LW.y, LW.z) : WW.setVector4(iW, LW)), PW
      }
      finalizeSceneUbo() {
        const WW = this.getSceneUniformBuffer(),
          iW = this.bindEyePosition(null),
          OW = this.floatingOriginOffset;
        return WW.updateFloat4("vEyePosition", iW.x - OW.x, iW.y - OW.y, iW.z - OW.z, iW.w), WW.update(), WW
      }
      set useRightHandedSystem(WW) {
        this._useRightHandedSystem !== WW && (this._useRightHandedSystem = WW, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(WW) {
        this._currentStepId = WW
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(WW) {
        this._fogEnabled !== WW && (this._fogEnabled = WW, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(WW) {
        this._fogMode !== WW && (this._fogMode = WW, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(WW) {
        this._shadowsEnabled !== WW && (this._shadowsEnabled = WW, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(WW) {
        this._lightsEnabled !== WW && (this._lightsEnabled = WW, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(WW) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), WW && (this._unObserveActiveCameras = (0, zW.j)(WW, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = WW
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(WW) {
        WW !== this._activeCamera && (this._activeCamera = WW, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return LO.DefaultMaterialFactory !== LO._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = LO.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(WW) {
        this._defaultMaterial = WW
      }
      set texturesEnabled(WW) {
        this._texturesEnabled !== WW && (this._texturesEnabled = WW, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(WW) {
        if (this._frameGraph) return this._frameGraph = WW, void(WW || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = WW, WW && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(WW) {
        this._skeletonsEnabled !== WW && (this._skeletonsEnabled = WW, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = LO.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const WW of this._transientComponents) WW.register();
          this._transientComponents.length = 0
        }
      }
      MmW(WW) {
        this._components.push(WW), this._transientComponents.push(WW);
        const iW = WW;
        iW.addFromContainer && iW.serialize && this._serializableComponents.push(iW)
      }
      _getComponent(WW) {
        for (const iW of this._components)
          if (iW.name === WW) return iW;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(WW, iW) {
        this._inputManager = new BW(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new RW.d(.2, .2, .3, 1), this.onClearColorChangedObservable = new PW.e, this.ambientColor = new RW.b(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new PW.e, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.vY = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.jD = new PW.e, this._onDisposeObserver = null, this.onBeforeRenderObservable = new PW.e, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new PW.e, this.onAfterRenderCameraObservable = new PW.e, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new PW.e, this.onAfterAnimationsObservable = new PW.e, this.onBeforeDrawPhaseObservable = new PW.e, this.onAfterDrawPhaseObservable = new PW.e, this.onReadyObservable = new PW.e, this.onBeforeCameraRenderObservable = new PW.e, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new PW.e, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new PW.e, this.onAfterActiveMeshesEvaluationObservable = new PW.e, this.onBeforeParticlesRenderingObservable = new PW.e, this.onAfterParticlesRenderingObservable = new PW.e, this.onDataLoadedObservable = new PW.e, this.onNewCameraAddedObservable = new PW.e, this.onCameraRemovedObservable = new PW.e, this.onNewLightAddedObservable = new PW.e, this.onLightRemovedObservable = new PW.e, this.onNewGeometryAddedObservable = new PW.e, this.onGeometryRemovedObservable = new PW.e, this.onNewTransformNodeAddedObservable = new PW.e, this.onTransformNodeRemovedObservable = new PW.e, this.onNewMeshAddedObservable = new PW.e, this.onMeshRemovedObservable = new PW.e, this.onNewSkeletonAddedObservable = new PW.e, this.onSkeletonRemovedObservable = new PW.e, this.onNewParticleSystemAddedObservable = new PW.e, this.onParticleSystemRemovedObservable = new PW.e, this.onNewAnimationGroupAddedObservable = new PW.e, this.onAnimationGroupRemovedObservable = new PW.e, this.onNewMaterialAddedObservable = new PW.e, this.onNewMultiMaterialAddedObservable = new PW.e, this.onMaterialRemovedObservable = new PW.e, this.onMultiMaterialRemovedObservable = new PW.e, this.onNewTextureAddedObservable = new PW.e, this.onTextureRemovedObservable = new PW.e, this.onNewFrameGraphAddedObservable = new PW.e, this.onFrameGraphRemovedObservable = new PW.e, this.onNewObjectRendererAddedObservable = new PW.e, this.onObjectRendererRemovedObservable = new PW.e, this.onNewPostProcessAddedObservable = new PW.e, this.onPostProcessRemovedObservable = new PW.e, this.onNewEffectLayerAddedObservable = new PW.e, this.onEffectLayerRemovedObservable = new PW.e, this.onBeforeRenderTargetsRenderObservable = new PW.e, this.onAfterRenderTargetsRenderObservable = new PW.e, this.onBeforeStepObservable = new PW.e, this.onAfterStepObservable = new PW.e, this.onActiveCameraChanged = new PW.e, this.onActiveCamerasChanged = new PW.e, this.onBeforeRenderingGroupObservable = new PW.e, this.onAfterRenderingGroupObservable = new PW.e, this.onMeshImportedObservable = new PW.e, this.onAnimationFileImportedObservable = new PW.e, this.onEnvironmentTextureChangedObservable = new PW.e, this.onMeshUnderPointerUpdatedObservable = new PW.e, this._registeredForLateAnimationBindings = new LW.d(256), this._pointerPickingConfiguration = new FW, this.onPrePointerObservable = new PW.e, this.onPointerObservable = new PW.e, this.onPreKeyboardObservable = new PW.e, this.onKeyboardObservable = new PW.e, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = LO.FOGMODE_NONE, this.fogColor = new RW.b(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.JC = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new tW.q(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new LW.d(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new qW.e, this._activeIndices = new qW.e, this._activeParticles = new qW.e, this._activeBones = new qW.e, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new LW.g(256), this._processedMaterials = new LW.g(256), this._renderTargets = new LW.d(256), this._materialsRenderTargets = new LW.d(256), this._activeParticleSystems = new LW.g(256), this._activeSkeletons = new LW.d(32), this._softwareSkinnedMeshes = new LW.d(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = tW.d.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = kW.f.Create(), this._beforeClearStage = kW.f.Create(), this._beforeRenderTargetClearStage = kW.f.Create(), this._gatherRenderTargetsStage = kW.f.Create(), this._gatherActiveCameraRenderTargetsStage = kW.f.Create(), this._isReadyForMeshStage = kW.f.Create(), this._beforeEvaluateActiveMeshStage = kW.f.Create(), this._evaluateSubMeshStage = kW.f.Create(), this._preActiveMeshStage = kW.f.Create(), this._cameraDrawRenderTargetStage = kW.f.Create(), this._beforeCameraDrawStage = kW.f.Create(), this._beforeRenderTargetDrawStage = kW.f.Create(), this._beforeRenderingGroupDrawStage = kW.f.Create(), this._beforeRenderingMeshStage = kW.f.Create(), this._afterRenderingMeshStage = kW.f.Create(), this._afterRenderingGroupDrawStage = kW.f.Create(), this._afterCameraDrawStage = kW.f.Create(), this._afterCameraPostProcessStage = kW.f.Create(), this._afterRenderTargetDrawStage = kW.f.Create(), this._afterRenderTargetPostProcessStage = kW.f.Create(), this._afterRenderStage = kW.f.Create(), this._pointerMoveStage = kW.f.Create(), this._pointerDownStage = kW.f.Create(), this._pointerUpStage = kW.f.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new PW.e, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const OW = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...iW
        };
        this.defaultCameraLayerMask = OW.defaultCameraLayerMask, this.defaultRenderableLayerMask = OW.defaultRenderableLayerMask, WW = this._engine = WW || MW.d.LastCreatedEngine, OW.virtual ? WW._virtualScenes.push(this) : (MW.d._LastCreatedScene = this, WW.scenes.push(this)), (WW.getCreationOptions().useLargeWorldRendering || iW?.useFloatingOrigin) && ((0, jW.f)(), this._floatingOriginScene = this, jW.c.bD = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new UW.d(this), bW.c && (this.postProcessManager = new bW.c(this)), (0, sW.j)() && this.attachControl(), this._createUbo(), ZW.e && (this._imageProcessingConfiguration = new ZW.e), this.setDefaultCandidateProviders(), OW.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = OW.useMaterialMeshMap, this.useClonedMeshMap = OW.useClonedMeshMap, iW && iW.virtual || WW.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(WW) {
        return this._defaultSubMeshCandidates.data = WW.hY, this._defaultSubMeshCandidates.length = WW.hY.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = WW => this._getDefaultSubMeshCandidates(WW), this.getIntersectingSubMeshCandidates = (WW, iW) => this._getDefaultSubMeshCandidates(WW), this.getCollidingSubMeshCandidates = (WW, iW) => this._getDefaultSubMeshCandidates(WW)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(WW) {
        this._inputManager.pointerX = WW
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(WW) {
        this._inputManager.pointerY = WW
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
      isCachedMaterialInvalid(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== iW || this._cachedMaterial !== WW || this._cachedVisibility !== OW
      }
      VA() {
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
      simulatePointerMove(WW, iW) {
        return this._inputManager.simulatePointerMove(WW, iW), this
      }
      simulatePointerDown(WW, iW) {
        return this._inputManager.simulatePointerDown(WW, iW), this
      }
      simulatePointerUp(WW, iW, OW) {
        return this._inputManager.simulatePointerUp(WW, iW, OW), this
      }
      isPointerCaptured() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(WW)
      }
      attachControl() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(WW, iW, OW)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let WW, iW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const OW = this.VA(),
          mW = OW.currentRenderPassId;
        OW.currentRenderPassId = this.activeCamera?.renderPassId ?? mW;
        let EW = !0;
        for (this._pendingData.length > 0 && (EW = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && EW && (EW = this.depthPeelingRenderer.isReady()), iW && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), WW = 0; WW < this.meshes.length; WW++) {
          const mW = this.meshes[WW];
          if (!mW.hY || 0 === mW.hY.length) continue;
          if (!mW.isReady(!0)) {
            EW = !1;
            continue
          }
          const NW = mW.hasThinInstances || "InstancedMesh" === mW.getClassName() || "InstancedLinesMesh" === mW.getClassName() || OW.getCaps().instancedArrays && mW.instances.length > 0;
          for (let WW = 0, iW = this._isReadyForMeshStage; WW < iW.length; WW++) {
            iW[WW].action(mW, NW) || (EW = !1)
          }
          if (!iW) continue;
          const PW = mW.material || this.defaultMaterial;
          if (PW)
            if (PW._storeEffectOnSubMeshes)
              for (const WW of mW.hY) {
                const iW = WW.BA();
                iW && iW.hasRenderTargetTextures && null != iW.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(iW) && (this._processedMaterials.push(iW), this._materialsRenderTargets.concatWithNoDuplicate(iW.getRenderTargetTextures()))
              } else PW.hasRenderTargetTextures && null != PW.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(PW) && (this._processedMaterials.push(PW), this._materialsRenderTargets.concatWithNoDuplicate(PW.getRenderTargetTextures()))
        }
        if (iW) {
          for (WW = 0; WW < this._materialsRenderTargets.length; ++WW) {
            this._materialsRenderTargets.data[WW].isReadyForRendering() || (EW = !1)
          }
          for (WW = 0; WW < this.customRenderTargets.length; ++WW) {
            this.customRenderTargets[WW].isReadyForRendering() || (EW = !1)
          }
        }
        for (WW = 0; WW < this.geometries.length; WW++) {
          2 === this.geometries[WW].delayLoadState && (EW = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const NW of this.activeCameras) NW.isReady(!0) || (EW = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (EW = !1));
        for (const NW of this.vY) NW.isReady() || (EW = !1);
        if (this.proceduralTexturesEnabled)
          for (const NW of this.proceduralTextures) NW.isReady() || (EW = !1);
        if (this.layers)
          for (const NW of this.layers) NW.isReady() || (EW = !1);
        if (this.effectLayers)
          for (const NW of this.effectLayers) NW.isLayerReady() || (EW = !1);
        for (const NW of this._isReadyChecks) NW.isReady() || (EW = !1);
        return OW.areAllEffectsReady() || (EW = !1), OW.currentRenderPassId = mW, EW
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(WW) {
        this.onBeforeRenderObservable.add(WW)
      }
      unregisterBeforeRender(WW) {
        this.onBeforeRenderObservable.removeCallback(WW)
      }
      registerAfterRender(WW) {
        this.onAfterRenderObservable.add(WW)
      }
      unregisterAfterRender(WW) {
        this.onAfterRenderObservable.removeCallback(WW)
      }
      _executeOnceBeforeRender(WW) {
        const iW = () => {
          WW(), setTimeout((() => {
            this.unregisterBeforeRender(iW)
          }))
        };
        this.registerBeforeRender(iW)
      }
      executeOnceBeforeRender(WW, iW) {
        void 0 !== iW ? setTimeout((() => {
          this._executeOnceBeforeRender(WW)
        }), iW) : this._executeOnceBeforeRender(WW)
      }
      addPendingData(WW) {
        this._pendingData.push(WW)
      }
      removePendingData(WW) {
        const iW = this.isLoading,
          OW = this._pendingData.indexOf(WW); - 1 !== OW && this._pendingData.splice(OW, 1), iW && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(WW) {
        -1 === this._isReadyChecks.indexOf(WW) && this._isReadyChecks.push(WW)
      }
      removeIsReadyCheck(WW) {
        const iW = this._isReadyChecks.indexOf(WW); - 1 !== iW && this._isReadyChecks.splice(iW, 1)
      }
      executeWhenReady(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(WW), null === this._executeWhenReadyTimeoutId && this._checkIsReady(iW)
      }
      async whenReadyAsync() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((iW => {
          this.executeWhenReady((() => {
            iW()
          }), WW)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = NW.d.Now;
        else if (this.onReadyTimeoutDuration > 0 && NW.d.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(WW)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(WW)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = NW.d.Now
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
      setTransformMatrix(WW, iW, OW, mW) {
        this._multiviewSceneUboIsActive = !!(OW && mW && this._multiviewSceneUbo), this._viewUpdateFlag === WW.updateFlag && this._projectionUpdateFlag === iW.updateFlag || (this._viewUpdateFlag = WW.updateFlag, this._projectionUpdateFlag = iW.updateFlag, this._viewMatrix = WW, this._projectionMatrix = iW, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new tW.d), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? GW.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = GW.e.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(OW, mW) : this._sceneUbo.useUbo && (this._sceneUbo.tWW("viewProjection", this._transformMatrix), this._sceneUbo.tWW("view", this._viewMatrix), this._sceneUbo.tWW("projection", this._projectionMatrix), this._sceneUbo.tWW("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(WW, iW) {
        const OW = "boolean" === typeof iW ? iW : iW?.trackUBOsInFrame,
          mW = new xW.c(this._engine, void 0, !1, WW ?? "rb", void 0, OW);
        return mW.addUniform("viewProjection", 16), mW.addUniform("view", 16), mW.addUniform("projection", 16), mW.addUniform("vEyePosition", 4), mW.addUniform("inverseProjection", 16), mW
      }
      setSceneUniformBuffer(WW) {
        this._sceneUbo = WW, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : tW.q.ZeroReadOnly
      }
      getUniqueId() {
        return IW.UniqueId
      }
      xEW(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(WW), WW._resyncLightSources(), WW.parent || WW._addToSceneRootNodes(), EW.d.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(WW)
          })), iW)) {
          const iW = WW.getChildMeshes();
          for (const WW of iW) this.xEW(WW)
        }
      }
      pD(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const OW = this.meshes.indexOf(WW);
        if (-1 !== OW && (this.meshes.splice(OW, 1), WW.parent || WW._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(WW), this.onMeshRemovedObservable.notifyObservers(WW), iW) {
          const iW = WW.getChildMeshes();
          for (const WW of iW) this.pD(WW)
        }
        return OW
      }
      addTransformNode(WW) {
        this._blockEntityCollection || WW.bD() === this && -1 !== WW._indexInSceneTransformNodesArray || (WW._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(WW), WW.parent || WW._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(WW))
      }
      removeTransformNode(WW) {
        const iW = WW._indexInSceneTransformNodesArray;
        if (-1 !== iW) {
          if (iW !== this.transformNodes.length - 1) {
            const WW = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[iW] = WW, WW._indexInSceneTransformNodesArray = iW
          }
          WW._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), WW.parent || WW._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(WW), iW
      }
      removeSkeleton(WW) {
        const iW = this.skeletons.indexOf(WW);
        return -1 !== iW && (this.skeletons.splice(iW, 1), this.onSkeletonRemovedObservable.notifyObservers(WW), this._executeActiveContainerCleanup(this._activeSkeletons)), iW
      }
      removeMorphTargetManager(WW) {
        const iW = this.morphTargetManagers.indexOf(WW);
        return -1 !== iW && this.morphTargetManagers.splice(iW, 1), iW
      }
      removeLight(WW) {
        const iW = this.lights.indexOf(WW);
        if (-1 !== iW) {
          for (const iW of this.meshes) iW._removeLightSource(WW, !1);
          this.lights.splice(iW, 1), this.sortLightsByPriority(), WW.parent || WW._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(WW)
        }
        return iW
      }
      removeCamera(WW) {
        const iW = this.cameras.indexOf(WW);
        if (-1 !== iW && (this.cameras.splice(iW, 1), WW.parent || WW._removeFromSceneRootNodes()), this.activeCameras) {
          const iW = this.activeCameras.indexOf(WW); - 1 !== iW && this.activeCameras.splice(iW, 1)
        }
        return this.activeCamera === WW && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(WW), iW
      }
      removeParticleSystem(WW) {
        const iW = this.vY.indexOf(WW);
        return -1 !== iW && (this.vY.splice(iW, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(WW), iW
      }
      removeAnimation(WW) {
        const iW = this.animations.indexOf(WW);
        return -1 !== iW && this.animations.splice(iW, 1), iW
      }
      stopAnimation(WW, iW, OW) {}
      removeAnimationGroup(WW) {
        const iW = this.animationGroups.indexOf(WW);
        return -1 !== iW && this.animationGroups.splice(iW, 1), this.onAnimationGroupRemovedObservable.notifyObservers(WW), iW
      }
      removeMultiMaterial(WW) {
        const iW = this.multiMaterials.indexOf(WW);
        return -1 !== iW && this.multiMaterials.splice(iW, 1), this.onMultiMaterialRemovedObservable.notifyObservers(WW), iW
      }
      removeMaterial(WW) {
        const iW = WW._indexInSceneMaterialArray;
        if (-1 !== iW && iW < this.materials.length) {
          if (iW !== this.materials.length - 1) {
            const WW = this.materials[this.materials.length - 1];
            this.materials[iW] = WW, WW._indexInSceneMaterialArray = iW
          }
          WW._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(WW), iW
      }
      removeActionManager(WW) {
        const iW = this.actionManagers.indexOf(WW);
        return -1 !== iW && this.actionManagers.splice(iW, 1), iW
      }
      removeTexture(WW) {
        const iW = this.textures.indexOf(WW);
        return -1 !== iW && this.textures.splice(iW, 1), this.onTextureRemovedObservable.notifyObservers(WW), iW
      }
      removeFrameGraph(WW) {
        const iW = this.frameGraphs.indexOf(WW);
        return -1 !== iW && this.frameGraphs.splice(iW, 1), this.onFrameGraphRemovedObservable.notifyObservers(WW), iW
      }
      removeObjectRenderer(WW) {
        const iW = this.objectRenderers.indexOf(WW);
        return -1 !== iW && this.objectRenderers.splice(iW, 1), this.onObjectRendererRemovedObservable.notifyObservers(WW), iW
      }
      removePostProcess(WW) {
        const iW = this.postProcesses.indexOf(WW);
        return -1 !== iW && this.postProcesses.splice(iW, 1), this.onPostProcessRemovedObservable.notifyObservers(WW), iW
      }
      removeEffectLayer(WW) {
        const iW = this.effectLayers.indexOf(WW);
        return -1 !== iW && this.effectLayers.splice(iW, 1), this.onEffectLayerRemovedObservable.notifyObservers(WW), iW
      }
      addLight(WW) {
        if (!this._blockEntityCollection) {
          this.lights.push(WW), this.sortLightsByPriority(), WW.parent || WW._addToSceneRootNodes();
          for (const iW of this.meshes) - 1 === iW.lightSources.indexOf(WW) && (iW.lightSources.push(WW), iW._resyncLightSources());
          EW.d.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(WW)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(rW.e.CompareLightsPriority)
      }
      addCamera(WW) {
        this._blockEntityCollection || (this.cameras.push(WW), EW.d.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(WW)
        })), WW.parent || WW._addToSceneRootNodes())
      }
      addSkeleton(WW) {
        this._blockEntityCollection || (this.skeletons.push(WW), EW.d.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(WW)
        })))
      }
      addParticleSystem(WW) {
        this._blockEntityCollection || (this.vY.push(WW), EW.d.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(WW)
        })))
      }
      addAnimation(WW) {
        this._blockEntityCollection || this.animations.push(WW)
      }
      addAnimationGroup(WW) {
        this._blockEntityCollection || (this.animationGroups.push(WW), EW.d.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(WW)
        })))
      }
      addMultiMaterial(WW) {
        this._blockEntityCollection || (this.multiMaterials.push(WW), EW.d.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(WW)
        })))
      }
      addMaterial(WW) {
        this._blockEntityCollection || WW.bD() === this && -1 !== WW._indexInSceneMaterialArray || (WW._indexInSceneMaterialArray = this.materials.length, this.materials.push(WW), EW.d.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(WW)
        })))
      }
      addMorphTargetManager(WW) {
        this._blockEntityCollection || this.morphTargetManagers.push(WW)
      }
      addGeometry(WW) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[WW.uniqueId] = this.geometries.length), this.geometries.push(WW))
      }
      addActionManager(WW) {
        this.actionManagers.push(WW)
      }
      addTexture(WW) {
        this._blockEntityCollection || (this.textures.push(WW), this.onNewTextureAddedObservable.notifyObservers(WW))
      }
      addFrameGraph(WW) {
        this.frameGraphs.push(WW), EW.d.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(WW)
        }))
      }
      addObjectRenderer(WW) {
        this.objectRenderers.push(WW), EW.d.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(WW)
        }))
      }
      addPostProcess(WW) {
        this._blockEntityCollection || (this.postProcesses.push(WW), EW.d.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(WW)
        })))
      }
      addEffectLayer(WW) {
        this._blockEntityCollection || (this.effectLayers.push(WW), EW.d.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(WW)
        })))
      }
      switchActiveCamera(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = WW, iW && WW.attachControl())
      }
      setActiveCameraById(WW) {
        const iW = this.getCameraById(WW);
        return iW ? (this.activeCamera = iW, iW) : null
      }
      setActiveCameraByName(WW) {
        const iW = this.getCameraByName(WW);
        return iW ? (this.activeCamera = iW, iW) : null
      }
      getAnimationGroupByName(WW) {
        for (let iW = 0; iW < this.animationGroups.length; iW++)
          if (this.animationGroups[iW].name === WW) return this.animationGroups[iW];
        return null
      }
      _getMaterial(WW, iW) {
        for (let OW = 0; OW < this.materials.length; OW++) {
          const WW = this.materials[OW];
          if (iW(WW)) return WW
        }
        if (WW)
          for (let OW = 0; OW < this.multiMaterials.length; OW++) {
            const WW = this.multiMaterials[OW];
            if (iW(WW)) return WW
          }
        return null
      }
      getMaterialByUniqueID(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(WW, iW)
      }
      getMaterialByUniqueId(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(iW, (iW => iW.uniqueId === WW))
      }
      getMaterialById(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(iW, (iW => iW.id === WW))
      }
      getMaterialByName(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(iW, (iW => iW.name === WW))
      }
      getLastMaterialById(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let OW = this.materials.length - 1; OW >= 0; OW--)
          if (this.materials[OW].id === WW) return this.materials[OW];
        if (iW)
          for (let OW = this.multiMaterials.length - 1; OW >= 0; OW--)
            if (this.multiMaterials[OW].id === WW) return this.multiMaterials[OW];
        return null
      }
      getTextureByUniqueId(WW) {
        for (let iW = 0; iW < this.textures.length; iW++)
          if (this.textures[iW].uniqueId === WW) return this.textures[iW];
        return null
      }
      getTextureByName(WW) {
        for (let iW = 0; iW < this.textures.length; iW++)
          if (this.textures[iW].name === WW) return this.textures[iW];
        return null
      }
      getCameraById(WW) {
        for (let iW = 0; iW < this.cameras.length; iW++)
          if (this.cameras[iW].id === WW) return this.cameras[iW];
        return null
      }
      getCameraByUniqueId(WW) {
        for (let iW = 0; iW < this.cameras.length; iW++)
          if (this.cameras[iW].uniqueId === WW) return this.cameras[iW];
        return null
      }
      getCameraByName(WW) {
        for (let iW = 0; iW < this.cameras.length; iW++)
          if (this.cameras[iW].name === WW) return this.cameras[iW];
        return null
      }
      getBoneById(WW) {
        for (let iW = 0; iW < this.skeletons.length; iW++) {
          const OW = this.skeletons[iW];
          for (let iW = 0; iW < OW.bones.length; iW++)
            if (OW.bones[iW].id === WW) return OW.bones[iW]
        }
        return null
      }
      getBoneByName(WW) {
        for (let iW = 0; iW < this.skeletons.length; iW++) {
          const OW = this.skeletons[iW];
          for (let iW = 0; iW < OW.bones.length; iW++)
            if (OW.bones[iW].name === WW) return OW.bones[iW]
        }
        return null
      }
      getLightByName(WW) {
        for (let iW = 0; iW < this.lights.length; iW++)
          if (this.lights[iW].name === WW) return this.lights[iW];
        return null
      }
      getLightById(WW) {
        for (let iW = 0; iW < this.lights.length; iW++)
          if (this.lights[iW].id === WW) return this.lights[iW];
        return null
      }
      getLightByUniqueId(WW) {
        for (let iW = 0; iW < this.lights.length; iW++)
          if (this.lights[iW].uniqueId === WW) return this.lights[iW];
        return null
      }
      getParticleSystemById(WW) {
        for (let iW = 0; iW < this.vY.length; iW++)
          if (this.vY[iW].id === WW) return this.vY[iW];
        return null
      }
      getGeometryById(WW) {
        for (let iW = 0; iW < this.geometries.length; iW++)
          if (this.geometries[iW].id === WW) return this.geometries[iW];
        return null
      }
      _getGeometryByUniqueId(WW) {
        if (this._geometriesByUniqueId) {
          const iW = this._geometriesByUniqueId[WW];
          if (void 0 !== iW) return this.geometries[iW]
        } else
          for (let iW = 0; iW < this.geometries.length; iW++)
            if (this.geometries[iW].uniqueId === WW) return this.geometries[iW];
        return null
      }
      getFrameGraphByName(WW) {
        for (let iW = 0; iW < this.frameGraphs.length; iW++)
          if (this.frameGraphs[iW].name === WW) return this.frameGraphs[iW];
        return null
      }
      pushGeometry(WW, iW) {
        return !(!iW && this._getGeometryByUniqueId(WW.uniqueId)) && (this.addGeometry(WW), EW.d.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(WW)
        })), !0)
      }
      removeGeometry(WW) {
        let iW;
        if (this._geometriesByUniqueId) {
          if (iW = this._geometriesByUniqueId[WW.uniqueId], void 0 === iW) return !1
        } else if (iW = this.geometries.indexOf(WW), iW < 0) return !1;
        if (iW !== this.geometries.length - 1) {
          const WW = this.geometries[this.geometries.length - 1];
          WW && (this.geometries[iW] = WW, this._geometriesByUniqueId && (this._geometriesByUniqueId[WW.uniqueId] = iW))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[WW.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(WW), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(WW) {
        for (let iW = 0; iW < this.meshes.length; iW++)
          if (this.meshes[iW].id === WW) return this.meshes[iW];
        return null
      }
      getMeshesById(WW) {
        return this.meshes.filter((function(iW) {
          return iW.id === WW
        }))
      }
      getTransformNodeById(WW) {
        for (let iW = 0; iW < this.transformNodes.length; iW++)
          if (this.transformNodes[iW].id === WW) return this.transformNodes[iW];
        return null
      }
      getTransformNodeByUniqueId(WW) {
        for (let iW = 0; iW < this.transformNodes.length; iW++)
          if (this.transformNodes[iW].uniqueId === WW) return this.transformNodes[iW];
        return null
      }
      getTransformNodesById(WW) {
        return this.transformNodes.filter((function(iW) {
          return iW.id === WW
        }))
      }
      getMeshByUniqueId(WW) {
        for (let iW = 0; iW < this.meshes.length; iW++)
          if (this.meshes[iW].uniqueId === WW) return this.meshes[iW];
        return null
      }
      getLastMeshById(WW) {
        for (let iW = this.meshes.length - 1; iW >= 0; iW--)
          if (this.meshes[iW].id === WW) return this.meshes[iW];
        return null
      }
      getLastTransformNodeById(WW) {
        for (let iW = this.transformNodes.length - 1; iW >= 0; iW--)
          if (this.transformNodes[iW].id === WW) return this.transformNodes[iW];
        return null
      }
      getLastEntryById(WW) {
        let iW;
        for (iW = this.meshes.length - 1; iW >= 0; iW--)
          if (this.meshes[iW].id === WW) return this.meshes[iW];
        for (iW = this.transformNodes.length - 1; iW >= 0; iW--)
          if (this.transformNodes[iW].id === WW) return this.transformNodes[iW];
        for (iW = this.cameras.length - 1; iW >= 0; iW--)
          if (this.cameras[iW].id === WW) return this.cameras[iW];
        for (iW = this.lights.length - 1; iW >= 0; iW--)
          if (this.lights[iW].id === WW) return this.lights[iW];
        for (iW = this.skeletons.length - 1; iW >= 0; iW--) {
          const OW = this.skeletons[iW];
          for (let iW = OW.bones.length - 1; iW >= 0; iW--)
            if (OW.bones[iW].id === WW) return OW.bones[iW]
        }
        return null
      }
      getNodeById(WW) {
        const iW = this.getMeshById(WW);
        if (iW) return iW;
        const OW = this.getTransformNodeById(WW);
        if (OW) return OW;
        const mW = this.getLightById(WW);
        if (mW) return mW;
        const EW = this.getCameraById(WW);
        if (EW) return EW;
        const NW = this.getBoneById(WW);
        return NW || null
      }
      getNodeByName(WW) {
        const iW = this.getMeshByName(WW);
        if (iW) return iW;
        const OW = this.getTransformNodeByName(WW);
        if (OW) return OW;
        const mW = this.getLightByName(WW);
        if (mW) return mW;
        const EW = this.getCameraByName(WW);
        if (EW) return EW;
        const NW = this.getBoneByName(WW);
        return NW || null
      }
      getMeshByName(WW) {
        for (let iW = 0; iW < this.meshes.length; iW++)
          if (this.meshes[iW].name === WW) return this.meshes[iW];
        return null
      }
      getTransformNodeByName(WW) {
        for (let iW = 0; iW < this.transformNodes.length; iW++)
          if (this.transformNodes[iW].name === WW) return this.transformNodes[iW];
        return null
      }
      getLastSkeletonById(WW) {
        for (let iW = this.skeletons.length - 1; iW >= 0; iW--)
          if (this.skeletons[iW].id === WW) return this.skeletons[iW];
        return null
      }
      getSkeletonByUniqueId(WW) {
        for (let iW = 0; iW < this.skeletons.length; iW++)
          if (this.skeletons[iW].uniqueId === WW) return this.skeletons[iW];
        return null
      }
      getSkeletonById(WW) {
        for (let iW = 0; iW < this.skeletons.length; iW++)
          if (this.skeletons[iW].id === WW) return this.skeletons[iW];
        return null
      }
      getSkeletonByName(WW) {
        for (let iW = 0; iW < this.skeletons.length; iW++)
          if (this.skeletons[iW].name === WW) return this.skeletons[iW];
        return null
      }
      getMorphTargetManagerById(WW) {
        for (let iW = 0; iW < this.morphTargetManagers.length; iW++)
          if (this.morphTargetManagers[iW].uniqueId === WW) return this.morphTargetManagers[iW];
        return null
      }
      getMorphTargetById(WW) {
        for (let iW = 0; iW < this.morphTargetManagers.length; ++iW) {
          const OW = this.morphTargetManagers[iW];
          for (let iW = 0; iW < OW.numTargets; ++iW) {
            const mW = OW.getTarget(iW);
            if (mW.id === WW) return mW
          }
        }
        return null
      }
      getMorphTargetByName(WW) {
        for (let iW = 0; iW < this.morphTargetManagers.length; ++iW) {
          const OW = this.morphTargetManagers[iW];
          for (let iW = 0; iW < OW.numTargets; ++iW) {
            const mW = OW.getTarget(iW);
            if (mW.name === WW) return mW
          }
        }
        return null
      }
      getPostProcessByName(WW) {
        for (let iW = 0; iW < this.postProcesses.length; ++iW) {
          const OW = this.postProcesses[iW];
          if (OW.name === WW) return OW
        }
        return null
      }
      isActiveMesh(WW) {
        return -1 !== this._activeMeshes.indexOf(WW)
      }
      get uid() {
        return this._uid || (this._uid = mW.f.RandomId()), this._uid
      }
      addExternalData(WW, iW) {
        return this._externalData || (this._externalData = new cW), this._externalData.add(WW, iW)
      }
      getExternalData(WW) {
        return this._externalData ? this._externalData.get(WW) : null
      }
      getOrAddExternalDataWithFactory(WW, iW) {
        return this._externalData || (this._externalData = new cW), this._externalData.getOrAddWithFactory(WW, iW)
      }
      removeExternalData(WW) {
        return this._externalData.remove(WW)
      }
      _evaluateSubMesh(WW, iW, OW, mW) {
        if (mW || WW.isInFrustum(this._frustumPlanes)) {
          for (let mW = 0, EW = this._evaluateSubMeshStage; mW < EW.length; mW++) {
            EW[mW].action(iW, WW)
          }
          const OW = WW.BA();
          null !== OW && void 0 !== OW && (OW.hasRenderTargetTextures && null != OW.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(OW) && (this._processedMaterials.push(OW), this._materialsRenderTargets.concatWithNoDuplicate(OW.getRenderTargetTextures())), this._renderingManager.dispatch(WW, iW, OW))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(WW) {
        this._preventFreeActiveMeshesAndRenderingGroups !== WW && (WW && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = WW)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let WW = 0; WW < this.activeCameras.length; WW++) {
            const iW = this.activeCameras[WW];
            iW && iW._activeMeshes && iW._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let WW = 0; WW < this.textures.length; WW++) {
            const iW = this.textures[WW];
            iW && iW.renderList && iW.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          iW = arguments.length > 1 ? arguments[1] : void 0,
          OW = arguments.length > 2 ? arguments[2] : void 0,
          mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          NW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const PW = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const WW of PW) WW.objectRenderer._freezeActiveMeshes(mW);
          return this._freezeActiveMeshesCancel = (0, EW.g)((() => {
            let WW = !0,
              iW = !0;
            for (const OW of PW) WW && (WW = OW.objectRenderer._isFrozen), iW && (iW = null !== OW.objectRenderer._freezeActiveMeshesCancel);
            if (WW) return !0;
            if (!iW) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = NW, this._skipEvaluateActiveMeshesCompletely = WW, iW?.()
          }), ((WW, iW) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), iW) {
              const iW = "Scene: Timeout while waiting for meshes to be frozen.";
              OW ? OW(iW) : (OO.b.Error(iW), WW && OO.b.Error(WW))
            } else {
              const iW = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              OW ? OW(iW) : (OO.b.Error(iW), WW && (OO.b.Error(WW), WW.stack && OO.b.Error(WW.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = NW, this._skipEvaluateActiveMeshesCompletely = WW, mW)
              for (let WW = 0; WW < this._activeMeshes.length; WW++) this._activeMeshes.data[WW]._freeze();
            iW && iW()
          } else OW && OW("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let WW = 0; WW < this.meshes.length; WW++) {
          const iW = this.meshes[WW];
          iW._internalAbstractMeshDataInfo && (iW._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const WW = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const iW of WW) iW.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let WW = 0; WW < this._activeMeshes.length; WW++) this._activeMeshes.data[WW]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(WW) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => WW.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const WW = this._activeMeshes.length;
            for (let iW = 0; iW < WW; iW++) {
              this._activeMeshes.data[iW].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const WW = this._activeParticleSystems.length;
            for (let iW = 0; iW < WW; iW++) this._activeParticleSystems.data[iW].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let EW = 0, NW = this._beforeEvaluateActiveMeshStage; EW < NW.length; EW++) {
          NW[EW].action()
        }
        const WW = this.getActiveMeshCandidates(),
          iW = WW.length,
          OW = qW.e.Enabled,
          mW = this.customLODSelector;
        for (let EW = 0; EW < iW; EW++) {
          const iW = WW.data[EW],
            NW = !mW && !iW.KD && !iW._internalMeshDataInfo?._LODLevels.length;
          let PW, LW;
          if ((NW || (PW = iW._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), PW ? PW[1] = -1 : (PW = [iW, -1], iW._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, PW))), !iW.isBlocked) && (OW && this._totalVertices.addCount(iW.getTotalVertices(), !1), iW.isReady() && iW.isEnabled() && !iW.YZ.hasAZeroComponent)) {
            if (iW.computeWorldMatrix(), iW.actionManager && iW.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(iW), NW) LW = iW;
            else if (LW = mW ? mW(iW, this.activeCamera) : iW.getLOD(this.activeCamera), PW[0] = LW, PW[1] = this._frameId, void 0 === LW || null === LW) continue;
            if (LW !== iW && 0 !== LW.billboardMode && LW.computeWorldMatrix(), iW._preActivate(), iW.isVisible && iW.visibility > 0 && 0 !== (iW.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || iW.pA || iW.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(iW), this.activeCamera._activeMeshes.push(iW), LW !== iW && LW._activate(this._renderId, !1);
              for (let WW = 0, OW = this._preActiveMeshStage; WW < OW.length; WW++) {
                OW[WW].action(iW)
              }
              iW._activate(this._renderId, !1) && (iW.KD ? iW._internalAbstractMeshDataInfo._actAsRegularMesh && (LW = iW) : LW._internalAbstractMeshDataInfo._onlyForInstances = !1, LW._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(iW, LW)), iW._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let WW = 0; WW < this.vY.length; WW++) {
            const iW = this.vY[WW];
            if (!iW.isStarted() || !iW.emitter) continue;
            const OW = iW.emitter;
            OW.position && !OW.isEnabled() || (this._activeParticleSystems.push(iW), iW.animate(), this._renderingManager.dispatchParticles(iW))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(WW) {
        this._skeletonsEnabled && WW.skeleton && (this._activeSkeletons.pushNoDuplicate(WW.skeleton) && (WW.skeleton.prepare(), this._activeBones.addCount(WW.skeleton.bones.length, !1)), WW.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(WW) && this.frameGraph && WW.applySkeleton(WW.skeleton))
      }
      _activeMesh(WW, iW) {
        this._prepareSkeleton(iW);
        let OW = WW.QEW || WW.KD || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || iW.pA;
        if (iW && iW.hY && iW.hY.length > 0) {
          const mW = this.getActiveSubMeshCandidates(iW),
            EW = mW.length;
          OW = OW || 1 === EW;
          for (let NW = 0; NW < EW; NW++) {
            const EW = mW.data[NW];
            this._evaluateSubMesh(EW, iW, WW, OW)
          }
        }
      }
      updateTransformMatrix(WW) {
        const iW = this.activeCamera;
        if (iW)
          if (iW._renderingMultiview) {
            const OW = iW._rigCameras[0],
              mW = iW._rigCameras[1];
            this.setTransformMatrix(OW.getViewMatrix(), OW.getProjectionMatrix(WW), mW.getViewMatrix(), mW.getProjectionMatrix(WW))
          } else this.setTransformMatrix(iW.getViewMatrix(), iW.getProjectionMatrix(WW))
      }
      _bindFrameBuffer(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (WW && WW._multiviewTexture ? WW._multiviewTexture._bindFrameBuffer() : WW && WW.outputRenderTarget ? WW.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), iW && this._clearFrameBuffer(WW)
      }
      _clearFrameBuffer(WW) {
        if (WW && WW._multiviewTexture);
        else if (WW && WW.outputRenderTarget && !WW._renderingMultiview) {
          const iW = WW.outputRenderTarget;
          iW.onClearObservable.hasObservers() ? iW.onClearObservable.notifyObservers(this._engine) : iW.skipInitialClear || WW.isRightCamera || (this.autoClear && this._engine.clear(iW.clearColor || this._clearColor, !iW._cleared, !0, !0), iW._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(WW, iW) {
        let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (WW && WW._skipRendering) return;
        const EW = this._engine;
        if (this._activeCamera = WW, !this.activeCamera) throw new Error("Active camera not set");
        if (EW.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && OW) {
          let iW = !0;
          WW._renderingMultiview && WW.outputRenderTarget && (iW = WW.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, WW.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), WW._renderingMultiview && WW.outputRenderTarget && (WW.outputRenderTarget.skipInitialClear = iW)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = WW.outputRenderTarget?.renderPassId ?? WW.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let mW = 0; mW < this._softwareSkinnedMeshes.length; mW++) {
          const WW = this._softwareSkinnedMeshes.data[mW];
          WW.applySkeleton(WW.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), WW.customRenderTargets && WW.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(WW.customRenderTargets), iW && iW.customRenderTargets && iW.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(iW.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let mW = 0, LW = this._gatherActiveCameraRenderTargetsStage; mW < LW.length; mW++) {
          LW[mW].action(this._renderTargets)
        }
        let NW = !1;
        if (this.renderTargetsEnabled) {
          let WW;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            mW.f.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const iW = this.getBoundingBoxRenderer?.();
            for (let OW = 0; OW < this._renderTargets.length; OW++) {
              const mW = this._renderTargets.data[OW];
              if (mW._shouldRender()) {
                this._renderId++;
                const OW = mW.activeCamera && mW.activeCamera !== this.activeCamera;
                iW && !WW && (WW = iW.renderList.length > 0 ? iW.renderList.data.slice() : [], WW.length = iW.renderList.length), mW.render(OW, this.dumpNextRenderTargets), NW = !0
              }
            }
            iW && WW && (iW.renderList.data = WW, iW.renderList.length = WW.length), mW.f.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const iW = this.getBoundingBoxRenderer?.();
            iW && !WW && (WW = iW.renderList.length > 0 ? iW.renderList.data.slice() : [], WW.length = iW.renderList.length);
            for (let WW = 0, OW = this._cameraDrawRenderTargetStage; WW < OW.length; WW++) {
              NW = OW[WW].action(this.activeCamera) || NW
            }
            iW && WW && (iW.renderList.data = WW, iW.renderList.length = WW.length)
          }
          this._intermediateRendering = !1
        }
        NW && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || WW._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let mW = 0, LW = this._beforeCameraDrawStage; mW < LW.length; mW++) {
          LW[mW].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const PW = EW.snapshotRendering && 1 === EW.snapshotRenderingMode;
        PW && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !PW), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let mW = 0, LW = this._afterCameraDrawStage; mW < LW.length; mW++) {
          LW[mW].action(this.activeCamera)
        }
        if (this.postProcessManager && !WW._multiviewTexture) {
          const iW = WW.outputRenderTarget ? WW.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(WW.isIntermediate, iW)
        }
        for (let mW = 0, LW = this._afterCameraPostProcessStage; mW < LW.length; mW++) {
          LW[mW].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === WW.cameraRigMode || WW._renderingMultiview) return WW._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(WW, void 0, iW), void this.onAfterRenderCameraObservable.notifyObservers(WW);
        if (WW._useMultiviewToSingleView) this._renderMultiviewToSingleView(WW);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(WW);
          for (let iW = 0; iW < WW._rigCameras.length; iW++) this._renderForCamera(WW._rigCameras[iW], WW)
        }
        this._activeCamera = WW, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(WW)
      }
      _checkIntersections() {
        for (let WW = 0; WW < this._meshesForIntersections.length; WW++) {
          const iW = this._meshesForIntersections.data[WW];
          if (iW.actionManager)
            for (let WW = 0; iW.actionManager && WW < iW.actionManager.actions.length; WW++) {
              const OW = iW.actionManager.actions[WW];
              if (12 === OW.trigger || 13 === OW.trigger) {
                const WW = OW.getTriggerParameter(),
                  mW = WW.mesh ? WW.mesh : WW,
                  EW = mW.qEW(iW, WW.usePreciseIntersection),
                  NW = iW._intersectionsInProgress.indexOf(mW);
                EW && -1 === NW ? 12 === OW.trigger ? (OW._executeCurrent(AW.CreateNew(iW, void 0, mW)), iW._intersectionsInProgress.push(mW)) : 13 === OW.trigger && iW._intersectionsInProgress.push(mW) : !EW && NW > -1 && (13 === OW.trigger && OW._executeCurrent(AW.CreateNew(iW, void 0, mW)), iW.actionManager.hasSpecificTrigger(13, (WW => {
                  const iW = WW.mesh ? WW.mesh : WW;
                  return mW === iW
                })) && 13 !== OW.trigger || iW._intersectionsInProgress.splice(NW, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(WW) {}
      _animate(WW) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let WW = Math.max(LO.MinDeltaTime, Math.min(this._engine.getDeltaTime(), LO.MaxDeltaTime)) + this._timeAccumulator;
          const iW = this._engine.getTimeStep(),
            OW = 1e3 / iW / 1e3;
          let mW = 0;
          const EW = this._engine.getLockstepMaxSteps();
          let NW = Math.floor(WW / iW);
          for (NW = Math.min(NW, EW); WW > 0 && mW < NW;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = iW * OW, this._animate(iW), this.onAfterAnimationsObservable.notifyObservers(this), this.JC && this._advancePhysicsEngineStep(iW), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, mW++, WW -= iW;
          this._timeAccumulator = WW < 0 ? 0 : WW
        } else {
          const WW = this.useConstantAnimationDeltaTime ? 16 : Math.max(LO.MinDeltaTime, Math.min(this._engine.getDeltaTime(), LO.MaxDeltaTime));
          this._animationRatio = .06 * WW, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.JC && this._advancePhysicsEngineStep(WW)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(WW) {
        if (WW?.outputRenderTarget && !WW?.isRigCamera && (WW.outputRenderTarget._cleared = !1), WW?.rigCameras?.length)
          for (let iW = 0; iW < WW.rigCameras.length; ++iW) {
            const OW = WW.rigCameras[iW].outputRenderTarget;
            OW && (OW._cleared = !1)
          }
      }
      resetDrawCache(WW) {
        if (this.meshes)
          for (const iW of this.meshes) iW.resetDrawCache(WW)
      }
      _renderWithFrameGraph() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          iW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, WW)
          for (const OW of this.cameras)
            if (OW.update(), 0 !== OW.cameraRigMode)
              for (let WW = 0; WW < OW._rigCameras.length; WW++) OW._rigCameras[WW].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(iW)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(WW) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const iW = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), mW.f.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let WW = 0; WW < this._renderTargets.length; WW++) {
            const OW = this._renderTargets.data[WW],
              mW = OW.activeCamera || iW;
            this._renderRenderTarget(OW, mW, !0, this.dumpNextRenderTargets)
          }
          mW.f.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let OW = 0, mW = this._beforeClearStage; OW < mW.length; OW++) {
          mW[OW].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const iW = this.getActiveMeshCandidates(),
            OW = iW.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let WW = 0; WW < OW; WW++) {
                const OW = iW.data[WW];
                OW._internalAbstractMeshDataInfo._wasActiveLastFrame && OW.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const WW = this._activeParticleSystems.length;
              for (let iW = 0; iW < WW; iW++) this._activeParticleSystems.data[iW].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let mW = 0; mW < OW; mW++) {
              const OW = iW.data[mW];
              OW._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, OW.isBlocked || (this._totalVertices.addCount(OW.getTotalVertices(), !1), OW.isReady() && OW.isEnabled() && !OW.YZ.hasAZeroComponent && (OW.computeWorldMatrix(WW), OW.actionManager && OW.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(OW)))
            }
            if (this.particlesEnabled)
              for (let WW = 0; WW < this.vY.length; WW++) {
                const iW = this.vY[WW];
                if (!iW.isStarted() || !iW.emitter) continue;
                const OW = iW.emitter;
                OW.position && !OW.isEnabled() || (this._activeParticleSystems.push(iW), iW.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, WW._shouldRender()) {
          if (this._renderId++, this.activeCamera = iW, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), WW.render(OW, mW)
        }
        this._intermediateRendering = !1
      }
      render() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.Ay) return;
        const OW = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(WW, iW)
        } finally {
          this._renderingMeshEvaluationDepth = OW
        }
      }
      _renderFrame(WW, iW) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), jW.c.bD = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const OW of this.activeCameras) this._checkCameraRenderTarget(OW);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), iW || this.animate();
        for (let OW = 0, mW = this._beforeCameraUpdateStage; OW < mW.length; OW++) {
          mW[OW].action()
        }
        if (WW)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let OW = 0; OW < this.activeCameras.length; OW++) {
              const WW = this.activeCameras[OW];
              if (WW.update(), 0 !== WW.cameraRigMode)
                for (let iW = 0; iW < WW._rigCameras.length; iW++) WW._rigCameras[iW].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let OW = 0; OW < this.activeCamera._rigCameras.length; OW++) this.activeCamera._rigCameras[OW].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(WW, iW);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const WW = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            mW.f.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let iW = 0; iW < this.customRenderTargets.length; iW++) {
              const OW = this.customRenderTargets[iW],
                mW = OW.activeCamera || this.activeCamera;
              this._renderRenderTarget(OW, mW, WW !== mW, this.dumpNextRenderTargets)
            }
            mW.f.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = WW?.renderPassId ?? 0, this.activeCamera = WW, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let iW = 0, OW = this._beforeClearStage; iW < OW.length; iW++) {
            OW[iW].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let iW = 0, OW = this._gatherRenderTargetsStage; iW < OW.length; iW++) {
            OW[iW].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let iW = 0; iW < this.activeCameras.length; iW++) this._processSubCameras(this.activeCameras[iW], iW > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let OW = 0, mW = this._afterRenderStage; OW < mW.length; OW++) {
          mW[OW].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let WW = 0; WW < this._toBeDisposed.length; WW++) {
            const iW = this._toBeDisposed[WW];
            iW && iW.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let WW = 0; WW < this.materials.length; WW++) this.materials[WW].freeze()
      }
      unfreezeMaterials() {
        for (let WW = 0; WW < this.materials.length; WW++) this.materials[WW].unfreeze()
      }
      dispose() {
        if (this.Ay) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, KW.e)(this.stopAllAnimations)) {
          for (const WW of this._activeAnimatables) WW.onAnimationEndObservable.clear(), WW.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const WW = this._activeRequests.slice();
        for (const NW of WW) NW.abort();
        this._activeRequests.length = 0;
        try {
          this.jD.notifyObservers(this)
        } catch (EW) {
          OO.b.Error("An error occurred while calling onDisposeObservable!", EW)
        }
        this.detachControl();
        const iW = this._engine.getInputElement?.();
        if (iW)
          for (let NW = 0; NW < this.cameras.length; NW++) this.cameras[NW].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (WW => WW.dispose(!0))), this._disposeList(this.transformNodes, (WW => WW.dispose(!0)));
        const OW = this.cameras;
        this._disposeList(OW), this._disposeList(this.vY), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let mW = this._engine.scenes.indexOf(this);
        if (mW > -1 && this._engine.scenes.splice(mW, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, jW.j)(), MW.d._LastCreatedScene === this) {
          MW.d._LastCreatedScene = null;
          let WW = MW.d.Instances.length - 1;
          for (; WW >= 0;) {
            const iW = MW.d.Instances[WW];
            if (iW.scenes.length > 0) {
              MW.d._LastCreatedScene = iW.scenes[this._engine.scenes.length - 1];
              break
            }
            WW--
          }
        }
        mW = this._engine._virtualScenes.indexOf(this), mW > -1 && this._engine._virtualScenes.splice(mW, 1), this._engine.wipeCaches(!0), this.jD.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(WW, iW) {
        const OW = WW.slice(0);
        iW = iW ?? (WW => WW.dispose());
        for (const mW of OW) iW(mW);
        WW.length = 0
      }
      get Ay() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let WW = 0; WW < this.meshes.length; WW++) {
          const iW = this.meshes[WW].geometry;
          iW && iW.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const WW of this.textures) {
          WW._buffer && (WW._buffer = null)
        }
      }
      getWorldExtends(WW) {
        const iW = new tW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          OW = new tW.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        WW = WW || (() => !0);
        const mW = this.meshes.filter(WW);
        for (const EW of mW) {
          if (EW.computeWorldMatrix(!0), !EW.hY || 0 === EW.hY.length || EW.infiniteDistance) continue;
          const WW = EW.KV(),
            mW = WW.boundingBox.minimumWorld,
            NW = WW.boundingBox.maximumWorld;
          tW.q.CheckExtends(mW, iW, OW), tW.q.CheckExtends(NW, iW, OW)
        }
        return iW.x === Number.MAX_VALUE ? {
          min: tW.q.Zero(),
          max: tW.q.Zero()
        } : {
          min: iW,
          max: OW
        }
      }
      createPickingRay(WW, iW, OW, mW) {
        throw (0, KW.o)("Ray")
      }
      createPickingRayToRef(WW, iW, OW, mW, EW) {
        throw (0, KW.o)("Ray")
      }
      createPickingRayInCameraSpace(WW, iW, OW) {
        throw (0, KW.o)("Ray")
      }
      createPickingRayInCameraSpaceToRef(WW, iW, OW, mW) {
        throw (0, KW.o)("Ray")
      }
      Kl(WW, iW, OW, mW, EW, NW) {
        const PW = (0, KW.o)("Ray", !0);
        return PW && OO.b.Warn(PW), new lW.b
      }
      pickWithBoundingInfo(WW, iW, OW, mW, EW) {
        const NW = (0, KW.o)("Ray", !0);
        return NW && OO.b.Warn(NW), new lW.b
      }
      pickWithRay(WW, iW, OW, mW) {
        throw (0, KW.o)("Ray")
      }
      multiPick(WW, iW, OW, mW, EW) {
        throw (0, KW.o)("Ray")
      }
      multiPickWithRay(WW, iW, OW) {
        throw (0, KW.o)("Ray")
      }
      setPointerOverMesh(WW, iW, OW) {
        this._inputManager.setPointerOverMesh(WW, iW, OW)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const WW of this.geometries) WW._rebuild();
        for (const WW of this.meshes) WW._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const WW of this._components) WW.rebuild();
        for (const WW of this.vY) WW.rebuild();
        if (this.spriteManagers)
          for (const WW of this.spriteManagers) WW.rebuild()
      }
      _rebuildTextures() {
        for (const WW of this.textures) WW._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(WW, iW, OW) {
        if (void 0 === iW) return WW;
        const mW = [];
        for (const EW in WW) {
          const NW = WW[EW];
          wW.d && wW.d.MatchesQuery(NW, iW) && (!OW || OW(NW)) && mW.push(NW)
        }
        return mW
      }
      getMeshesByTags(WW, iW) {
        return this._getByTags(this.meshes, WW, iW)
      }
      getCamerasByTags(WW, iW) {
        return this._getByTags(this.cameras, WW, iW)
      }
      getLightsByTags(WW, iW) {
        return this._getByTags(this.lights, WW, iW)
      }
      getMaterialByTags(WW, iW) {
        return this._getByTags(this.materials, WW, iW).concat(this._getByTags(this.multiMaterials, WW, iW))
      }
      getTransformNodesByTags(WW, iW) {
        return this._getByTags(this.transformNodes, WW, iW)
      }
      setRenderingOrder(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(WW, iW, OW, mW)
      }
      setRenderingAutoClearDepthStencil(WW, iW) {
        let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(WW, iW, OW, mW)
      }
      getAutoClearDepthStencilSetup(WW) {
        return this._renderingManager.getAutoClearDepthStencilSetup(WW)
      }
      _forceBlockMaterialDirtyMechanism(WW) {
        this._blockMaterialDirtyMechanism = WW
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(WW) {
        this._blockMaterialDirtyMechanism !== WW && (this._blockMaterialDirtyMechanism = WW, WW || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(WW, iW) {
        if (!this._blockMaterialDirtyMechanism)
          for (const OW of this.materials) iW && !iW(OW) || OW.xOW(WW)
      }
      _loadFile(WW, iW, OW, mW, EW, NW, PW) {
        const LW = (0, aW.o)(WW, iW, OW, mW ? this.offlineProvider : void 0, EW, NW, PW);
        return this._activeRequests.push(LW), LW.onCompleteObservable.add((WW => {
          this._activeRequests.splice(this._activeRequests.indexOf(WW), 1)
        })), LW
      }
      async _loadFileAsync(WW, iW, OW, mW, EW) {
        return await new Promise(((NW, PW) => {
          this._loadFile(WW, (WW => {
            NW(WW)
          }), iW, OW, mW, ((WW, iW) => {
            PW(iW)
          }), EW)
        }))
      }
      async _loadDelayedFileAsync(WW, iW, OW) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const mW = `${WW}|${iW?"binary":"string"}`;
        let EW = this._delayedFileRequests.get(mW);
        if (!EW) {
          EW = iW ? this._loadFileAsync(WW, void 0, OW, !0) : this._loadFileAsync(WW, void 0, OW, !1);
          const NW = EW;
          (async () => {
            try {
              await NW
            } catch {}
            this._delayedFileRequests?.delete(mW)
          })(), this._delayedFileRequests.set(mW, EW)
        }
        return await EW
      }
      _requestFile(WW, iW, OW, mW, EW, NW, PW) {
        const LW = (0, aW.D)(WW, iW, OW, mW ? this.offlineProvider : void 0, EW, NW, PW);
        return this._activeRequests.push(LW), LW.onCompleteObservable.add((WW => {
          this._activeRequests.splice(this._activeRequests.indexOf(WW), 1)
        })), LW
      }
      async _requestFileAsync(WW, iW, OW, mW, EW) {
        return await new Promise(((NW, PW) => {
          this._requestFile(WW, (WW => {
            NW(WW)
          }), iW, OW, mW, (WW => {
            PW(WW)
          }), EW)
        }))
      }
      _readFile(WW, iW, OW, mW, EW) {
        const NW = (0, aW.v)(WW, iW, OW, mW, EW);
        return this._activeRequests.push(NW), NW.onCompleteObservable.add((WW => {
          this._activeRequests.splice(this._activeRequests.indexOf(WW), 1)
        })), NW
      }
      async _readFileAsync(WW, iW, OW) {
        return await new Promise(((mW, EW) => {
          this._readFile(WW, (WW => {
            mW(WW)
          }), iW, OW, (WW => {
            EW(WW)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, KW.o)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(WW) {
        return this.setActiveCameraById(WW)
      }
      getMaterialByID(WW) {
        return this.getMaterialById(WW)
      }
      getLastMaterialByID(WW) {
        return this.getLastMaterialById(WW)
      }
      getTextureByUniqueID(WW) {
        return this.getTextureByUniqueId(WW)
      }
      getCameraByID(WW) {
        return this.getCameraById(WW)
      }
      getCameraByUniqueID(WW) {
        return this.getCameraByUniqueId(WW)
      }
      getBoneByID(WW) {
        return this.getBoneById(WW)
      }
      getLightByID(WW) {
        return this.getLightById(WW)
      }
      getLightByUniqueID(WW) {
        return this.getLightByUniqueId(WW)
      }
      getParticleSystemByID(WW) {
        return this.getParticleSystemById(WW)
      }
      getGeometryByID(WW) {
        return this.getGeometryById(WW)
      }
      getMeshByID(WW) {
        return this.getMeshById(WW)
      }
      getMeshByUniqueID(WW) {
        return this.getMeshByUniqueId(WW)
      }
      getLastMeshByID(WW) {
        return this.getLastMeshById(WW)
      }
      getMeshesByID(WW) {
        return this.getMeshesById(WW)
      }
      getTransformNodeByID(WW) {
        return this.getTransformNodeById(WW)
      }
      getTransformNodeByUniqueID(WW) {
        return this.getTransformNodeByUniqueId(WW)
      }
      getTransformNodesByID(WW) {
        return this.getTransformNodesById(WW)
      }
      getNodeByID(WW) {
        return this.getNodeById(WW)
      }
      getLastEntryByID(WW) {
        return this.getLastEntryById(WW)
      }
      getLastSkeletonByID(WW) {
        return this.getLastSkeletonById(WW)
      }
    }
    LO.FOGMODE_NONE = 0, LO.FOGMODE_EXP = 1, LO.FOGMODE_EXP2 = 2, LO.FOGMODE_LINEAR = 3, LO.MinDeltaTime = 1, LO.MaxDeltaTime = 1e3, LO._OriginalDefaultMaterialFactory = LO.DefaultMaterialFactory;
    let cO = !1;

    function wO() {
      cO || (cO = !0, (0, mO.h)("BABYLON.Scene", LO))
    }(QW = LO.prototype).sortActiveAnimatables ?? (QW.sortActiveAnimatables = (0, KW.k)("Scene", "sortActiveAnimatables")), (Wi = LO.prototype).beginWeightedAnimation ?? (Wi.beginWeightedAnimation = (0, KW.k)("Scene", "beginWeightedAnimation")), (ii = LO.prototype).beginAnimation ?? (ii.beginAnimation = (0, KW.k)("Scene", "beginAnimation")), (Oi = LO.prototype).beginHierarchyAnimation ?? (Oi.beginHierarchyAnimation = (0, KW.k)("Scene", "beginHierarchyAnimation")), (mi = LO.prototype).beginDirectAnimation ?? (mi.beginDirectAnimation = (0, KW.k)("Scene", "beginDirectAnimation")), (Ei = LO.prototype).beginDirectHierarchyAnimation ?? (Ei.beginDirectHierarchyAnimation = (0, KW.k)("Scene", "beginDirectHierarchyAnimation")), (Ni = LO.prototype).getAnimatableByTarget ?? (Ni.getAnimatableByTarget = (0, KW.k)("Scene", "getAnimatableByTarget")), (Pi = LO.prototype).getAllAnimatablesByTarget ?? (Pi.getAllAnimatablesByTarget = (0, KW.k)("Scene", "getAllAnimatablesByTarget")), (Li = LO.prototype).stopAllAnimations ?? (Li.stopAllAnimations = (0, KW.k)("Scene", "stopAllAnimations")), (ci = LO.prototype).getSoundByName ?? (ci.getSoundByName = (0, KW.k)("Scene", "getSoundByName")), (wi = LO.prototype).createOrUpdateSelectionOctree ?? (wi.createOrUpdateSelectionOctree = (0, KW.k)("Scene", "createOrUpdateSelectionOctree")), (ti = LO.prototype).createDefaultLight ?? (ti.createDefaultLight = (0, KW.k)("Scene", "createDefaultLight")), (Zi = LO.prototype).createDefaultCamera ?? (Zi.createDefaultCamera = (0, KW.k)("Scene", "createDefaultCamera")), (xi = LO.prototype).createDefaultCameraOrLight ?? (xi.createDefaultCameraOrLight = (0, KW.k)("Scene", "createDefaultCameraOrLight")), (li = LO.prototype).createDefaultSkybox ?? (li.createDefaultSkybox = (0, KW.k)("Scene", "createDefaultSkybox")), (Ai = LO.prototype).createDefaultEnvironment ?? (Ai.createDefaultEnvironment = (0, KW.k)("Scene", "createDefaultEnvironment")), (bi = LO.prototype).createDefaultVRExperience ?? (bi.createDefaultVRExperience = (0, KW.k)("Scene", "createDefaultVRExperience")), (ji = LO.prototype).createDefaultXRExperienceAsync ?? (ji.createDefaultXRExperienceAsync = (0, KW.k)("Scene", "createDefaultXRExperienceAsync")), (Ui = LO.prototype).getGlowLayerByName ?? (Ui.getGlowLayerByName = (0, KW.k)("Scene", "getGlowLayerByName")), (ki = LO.prototype).getHighlightLayerByName ?? (ki.getHighlightLayerByName = (0, KW.k)("Scene", "getHighlightLayerByName")), (si = LO.prototype).getSelectionOutlineLayerByName ?? (si.getSelectionOutlineLayerByName = (0, KW.k)("Scene", "getSelectionOutlineLayerByName")), (Mi = LO.prototype).removeLensFlareSystem ?? (Mi.removeLensFlareSystem = (0, KW.k)("Scene", "removeLensFlareSystem")), (Ki = LO.prototype).addLensFlareSystem ?? (Ki.addLensFlareSystem = (0, KW.k)("Scene", "addLensFlareSystem")), (Si = LO.prototype).getLensFlareSystemByName ?? (Si.getLensFlareSystemByName = (0, KW.k)("Scene", "getLensFlareSystemByName")), (Yi = LO.prototype).getLensFlareSystemByID ?? (Yi.getLensFlareSystemByID = (0, KW.k)("Scene", "getLensFlareSystemByID")), (yi = LO.prototype).getLensFlareSystemById ?? (yi.getLensFlareSystemById = (0, KW.k)("Scene", "getLensFlareSystemById")), (Ti = LO.prototype).getPhysicsEngine ?? (Ti.getPhysicsEngine = (0, KW.k)("Scene", "getPhysicsEngine")), (Ji = LO.prototype).enablePhysics ?? (Ji.enablePhysics = (0, KW.k)("Scene", "enablePhysics")), (Hi = LO.prototype).disablePhysicsEngine ?? (Hi.disablePhysicsEngine = (0, KW.k)("Scene", "disablePhysicsEngine")), (ni = LO.prototype).isPhysicsEnabled ?? (ni.isPhysicsEnabled = (0, KW.k)("Scene", "isPhysicsEnabled")), (ui = LO.prototype).deleteCompoundImpostor ?? (ui.deleteCompoundImpostor = (0, KW.k)("Scene", "deleteCompoundImpostor")), (oi = LO.prototype).removeReflectionProbe ?? (oi.removeReflectionProbe = (0, KW.k)("Scene", "removeReflectionProbe")), (di = LO.prototype).addReflectionProbe ?? (di.addReflectionProbe = (0, KW.k)("Scene", "addReflectionProbe")), (ei = LO.prototype).getBoundingBoxRenderer ?? (ei.getBoundingBoxRenderer = (0, KW.k)("Scene", "getBoundingBoxRenderer")), (vi = LO.prototype).enableDepthRenderer ?? (vi.enableDepthRenderer = (0, KW.k)("Scene", "enableDepthRenderer")), (gi = LO.prototype).disableDepthRenderer ?? (gi.disableDepthRenderer = (0, KW.k)("Scene", "disableDepthRenderer")), (Di = LO.prototype).enableFluidRenderer ?? (Di.enableFluidRenderer = (0, KW.k)("Scene", "enableFluidRenderer")), (Vi = LO.prototype).disableFluidRenderer ?? (Vi.disableFluidRenderer = (0, KW.k)("Scene", "disableFluidRenderer")), (fi = LO.prototype).enableGeometryBufferRenderer ?? (fi.enableGeometryBufferRenderer = (0, KW.k)("Scene", "enableGeometryBufferRenderer")), (Ci = LO.prototype).disableGeometryBufferRenderer ?? (Ci.disableGeometryBufferRenderer = (0, KW.k)("Scene", "disableGeometryBufferRenderer")), (Xi = LO.prototype).enableIblCdfGenerator ?? (Xi.enableIblCdfGenerator = (0, KW.k)("Scene", "enableIblCdfGenerator")), (Bi = LO.prototype).disableIblCdfGenerator ?? (Bi.disableIblCdfGenerator = (0, KW.k)("Scene", "disableIblCdfGenerator")), (qi = LO.prototype).getOutlineRenderer ?? (qi.getOutlineRenderer = (0, KW.k)("Scene", "getOutlineRenderer")), (Ri = LO.prototype).enablePrePassRenderer ?? (Ri.enablePrePassRenderer = (0, KW.k)("Scene", "enablePrePassRenderer")), (Gi = LO.prototype).disablePrePassRenderer ?? (Gi.disablePrePassRenderer = (0, KW.k)("Scene", "disablePrePassRenderer")), (Ii = LO.prototype).enableSubSurfaceForPrePass ?? (Ii.enableSubSurfaceForPrePass = (0, KW.k)("Scene", "enableSubSurfaceForPrePass")), (ai = LO.prototype).disableSubSurfaceForPrePass ?? (ai.disableSubSurfaceForPrePass = (0, KW.k)("Scene", "disableSubSurfaceForPrePass")), (ri = LO.prototype).pickSprite ?? (ri.pickSprite = (0, KW.k)("Scene", "pickSprite")), (zi = LO.prototype).pickSpriteWithRay ?? (zi.pickSpriteWithRay = (0, KW.k)("Scene", "pickSpriteWithRay")), (Fi = LO.prototype).multiPickSprite ?? (Fi.multiPickSprite = (0, KW.k)("Scene", "multiPickSprite")), (Qi = LO.prototype).multiPickSpriteWithRay ?? (Qi.multiPickSpriteWithRay = (0, KW.k)("Scene", "multiPickSpriteWithRay")), (WO = LO.prototype).setPointerOverSprite ?? (WO.setPointerOverSprite = (0, KW.k)("Scene", "setPointerOverSprite")), (iO = LO.prototype).getPointerOverSprite ?? (iO.getPointerOverSprite = (0, KW.k)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(LO.prototype, "mainSoundTrack") || Object.defineProperty(LO.prototype, "mainSoundTrack", (0, KW.h)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(LO.prototype, "soundTracks") || Object.defineProperty(LO.prototype, "soundTracks", (0, KW.h)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(LO.prototype, "audioEnabled") || Object.defineProperty(LO.prototype, "audioEnabled", (0, KW.h)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(LO.prototype, "headphone") || Object.defineProperty(LO.prototype, "headphone", (0, KW.h)("Scene", "headphone")), Object.getOwnPropertyDescriptor(LO.prototype, "audioListenerPositionProvider") || Object.defineProperty(LO.prototype, "audioListenerPositionProvider", (0, KW.h)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(LO.prototype, "audioListenerRotationProvider") || Object.defineProperty(LO.prototype, "audioListenerRotationProvider", (0, KW.h)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(LO.prototype, "audioPositioningRefreshRate") || Object.defineProperty(LO.prototype, "audioPositioningRefreshRate", (0, KW.h)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(LO.prototype, "selectionOctree") || Object.defineProperty(LO.prototype, "selectionOctree", (0, KW.h)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(LO.prototype, "debugLayer") || Object.defineProperty(LO.prototype, "debugLayer", (0, KW.h)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(LO.prototype, "gamepadManager") || Object.defineProperty(LO.prototype, "gamepadManager", (0, KW.h)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(LO.prototype, "simplificationQueue") || Object.defineProperty(LO.prototype, "simplificationQueue", (0, KW.h)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(LO.prototype, "onBeforePhysicsObservable") || Object.defineProperty(LO.prototype, "onBeforePhysicsObservable", (0, KW.h)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(LO.prototype, "onAfterPhysicsObservable") || Object.defineProperty(LO.prototype, "onAfterPhysicsObservable", (0, KW.h)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(LO.prototype, "reflectionProbes") || Object.defineProperty(LO.prototype, "reflectionProbes", (0, KW.h)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(LO.prototype, "forceShowBoundingBoxes") || Object.defineProperty(LO.prototype, "forceShowBoundingBoxes", (0, KW.h)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(LO.prototype, "depthPeelingRenderer") || Object.defineProperty(LO.prototype, "depthPeelingRenderer", (0, KW.h)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(LO.prototype, "useOrderIndependentTransparency") || Object.defineProperty(LO.prototype, "useOrderIndependentTransparency", (0, KW.h)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(LO.prototype, "fluidRenderer") || Object.defineProperty(LO.prototype, "fluidRenderer", (0, KW.h)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(LO.prototype, "geometryBufferRenderer") || Object.defineProperty(LO.prototype, "geometryBufferRenderer", (0, KW.h)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(LO.prototype, "iblCdfGenerator") || Object.defineProperty(LO.prototype, "iblCdfGenerator", (0, KW.h)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(LO.prototype, "prePassRenderer") || Object.defineProperty(LO.prototype, "prePassRenderer", (0, KW.h)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(LO.prototype, "subSurfaceConfiguration") || Object.defineProperty(LO.prototype, "subSurfaceConfiguration", (0, KW.h)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(LO.prototype, "spriteManagers") || Object.defineProperty(LO.prototype, "spriteManagers", (0, KW.h)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(LO.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(LO.prototype, "onBeforeSpritesRenderingObservable", (0, KW.h)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(LO.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(LO.prototype, "onAfterSpritesRenderingObservable", (0, KW.h)("Scene", "onAfterSpritesRenderingObservable"))
  },
  41689: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW,
      f: () => EW
    });
    class mW {}
    mW.NAME_EFFECTLAYER = "EffectLayer", mW.NAME_LAYER = "Layer", mW.NAME_LENSFLARESYSTEM = "LensFlareSystem", mW.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", mW.NAME_PARTICLESYSTEM = "ParticleSystem", mW.NAME_GAMEPAD = "Gamepad", mW.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", mW.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", mW.NAME_PREPASSRENDERER = "PrePassRenderer", mW.NAME_DEPTHRENDERER = "DepthRenderer", mW.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", mW.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", mW.NAME_SPRITE = "Sprite", mW.NAME_SUBSURFACE = "SubSurface", mW.NAME_OUTLINERENDERER = "Outline", mW.NAME_PROCEDURALTEXTURE = "ProceduralTexture", mW.NAME_SHADOWGENERATOR = "ShadowGenerator", mW.NAME_OCTREE = "bEW", mW.NAME_PHYSICSENGINE = "PhysicsEngine", mW.NAME_AUDIO = "Audio", mW.NAME_FLUIDRENDERER = "FluidRenderer", mW.NAME_IBLCDFGENERATOR = "iblCDFGenerator", mW.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", mW.STEP_ISREADYFORMESH_EFFECTLAYER = 0, mW.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, mW.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, mW.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, mW.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, mW.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, mW.STEP_BEFORECAMERADRAW_PREPASS = 0, mW.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, mW.STEP_BEFORECAMERADRAW_LAYER = 2, mW.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, mW.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, mW.STEP_BEFORERENDERINGMESH_PREPASS = 0, mW.STEP_BEFORERENDERINGMESH_OUTLINE = 1, mW.STEP_AFTERRENDERINGMESH_PREPASS = 0, mW.STEP_AFTERRENDERINGMESH_OUTLINE = 1, mW.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, mW.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, mW.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, mW.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, mW.STEP_BEFORECLEAR_PREPASS = 1, mW.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, mW.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, mW.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, mW.STEP_AFTERCAMERADRAW_PREPASS = 0, mW.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, mW.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, mW.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, mW.STEP_AFTERCAMERADRAW_LAYER = 4, mW.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, mW.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, mW.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, mW.STEP_AFTERRENDER_AUDIO = 0, mW.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, mW.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, mW.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, mW.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, mW.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, mW.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, mW.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, mW.STEP_POINTERMOVE_SPRITE = 0, mW.STEP_POINTERDOWN_SPRITE = 0, mW.STEP_POINTERUP_SPRITE = 0;
    class EW extends Array {
      constructor(WW) {
        super(...WW)
      }
      static Create() {
        return Object.create(EW.prototype)
      }
      registerStep(WW, iW, OW) {
        let mW, EW = 0;
        for (; EW < this.length; EW++) {
          if (mW = this[EW].index, WW < mW) break
        }
        this.splice(EW, 0, {
          index: WW,
          component: iW,
          action: OW.bind(iW)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  41516: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW,
      d: () => LW,
      e: () => mW,
      g: () => EW,
      k: () => NW
    });

    function mW(WW, iW, OW, mW, EW, NW) {
      function PW(WW) {
        if (void 0 !== WW && "function" !== typeof WW) throw new TypeError("Function expected");
        return WW
      }
      for (var LW, cW = mW.kind, wW = "getter" === cW ? "get" : "setter" === cW ? "set" : "value", tW = !iW && WW ? mW.static ? WW : WW.prototype : null, ZW = iW || (tW ? Object.getOwnPropertyDescriptor(tW, mW.name) : {}), xW = !1, lW = OW.length - 1; lW >= 0; lW--) {
        var AW = {};
        for (var bW in mW) AW[bW] = "access" === bW ? {} : mW[bW];
        for (var bW in mW.access) AW.access[bW] = mW.access[bW];
        AW.addInitializer = function(WW) {
          if (xW) throw new TypeError("Cannot add initializers after decoration has completed");
          NW.push(PW(WW || null))
        };
        var jW = (0, OW[lW])("accessor" === cW ? {
          get: ZW.get,
          set: ZW.set
        } : ZW[wW], AW);
        if ("accessor" === cW) {
          if (void 0 === jW) continue;
          if (null === jW || "object" !== typeof jW) throw new TypeError("Object expected");
          (LW = PW(jW.get)) && (ZW.get = LW), (LW = PW(jW.set)) && (ZW.set = LW), (LW = PW(jW.init)) && EW.unshift(LW)
        } else(LW = PW(jW)) && ("field" === cW ? EW.unshift(LW) : ZW[wW] = LW)
      }
      tW && Object.defineProperty(tW, mW.name, ZW), xW = !0
    }

    function EW(WW, iW, OW) {
      for (var mW = arguments.length > 2, EW = 0; EW < iW.length; EW++) OW = mW ? iW[EW].call(WW, OW) : iW[EW].call(WW);
      return mW ? OW : void 0
    }

    function NW(WW, iW, OW) {
      return "symbol" === typeof iW && (iW = iW.description ? "[".concat(iW.description, "]") : ""), Object.defineProperty(WW, "name", {
        configurable: !0,
        value: OW ? "".concat(OW, " ", iW) : iW
      })
    }
    Object.create;
    Object.create;

    function PW(WW, iW, OW, mW) {
      if ("a" === OW && !mW) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof iW ? WW !== iW || !mW : !iW.has(WW)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === OW ? mW : "a" === OW ? mW.call(WW) : mW ? mW.value : iW.get(WW)
    }

    function LW(WW, iW, OW, mW, EW) {
      if ("m" === mW) throw new TypeError("Private method is not writable");
      if ("a" === mW && !EW) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof iW ? WW !== iW || !EW : !iW.has(WW)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === mW ? EW.call(WW, OW) : EW ? EW.value = OW : iW.set(WW, OW), OW
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);