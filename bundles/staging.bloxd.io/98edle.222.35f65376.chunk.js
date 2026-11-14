export const id = 222;
export const ids = [222];
export const modules = {
  37722: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => bR,
      d: () => iR,
      h: () => NW,
      j: () => yR
    });
    var wW = MW(37517),
      CW = MW(36721),
      zR = MW(37652),
      AW = MW(37557);
    class bR {
      get cNW() {
        return this._isDisposed
      }
      constructor(WW, RW, MW) {
        let CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          zR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          bR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          yR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          NW = arguments.length > 7 ? arguments[7] : void 0,
          eW = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, AW.c)(), WW && WW.QRW ? this._engine = WW.QRW().mC() : this._engine = WW, this._updatable = MW, this._instanced = bR, this._divisor = NW || 1, this._label = eW, RW instanceof wW.d ? (this._data = null, this._buffer = RW) : (this._data = RW, this._buffer = null), this.byteStride = yR ? CW : CW * Float32Array.BYTES_PER_ELEMENT, zR || this.create()
      }
      createVertexBuffer(WW, RW, MW, wW, CW) {
        let zR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          AW = arguments.length > 6 ? arguments[6] : void 0;
        const bR = zR ? RW : RW * Float32Array.BYTES_PER_ELEMENT,
          NW = wW ? zR ? wW : wW * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new yR(this._engine, this, WW, this._updatable, !0, NW, void 0 === CW ? this._instanced : CW, bR, MW, void 0, void 0, !0, this._divisor || AW)
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
          if (this._buffer.aR > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.aR, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.aR, void 0, this._label));
          CW.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(WW) {
        this.create(WW)
      }
      updateDirectly(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, WW, wW ? RW : RW * Float32Array.BYTES_PER_ELEMENT, MW ? MW * this.byteStride : void 0), this._data = 0 === RW && void 0 === MW ? WW : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class yR {
      get cNW() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(WW) {
        const RW = 0 != WW;
        this._instanceDivisor = WW, RW !== this._instanced && (this._instanced = RW, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const WW = this.getData();
        return WW ? Array.isArray(WW) ? WW.length / (this.byteStride / 4) - this.byteOffset / 4 : (WW.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(WW, RW, MW, wW, CW, AW, BW, tR, TW, gR) {
        let iR, YW = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          JW = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          PW = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          IW = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = WW, "object" === typeof wW && null !== wW ? (iR = wW.updatable ?? !1, CW = wW.postponeInternalCreation, AW = wW.stride, BW = wW.instanced, tR = wW.offset, TW = wW.size, gR = wW.type, YW = wW.normalized ?? !1, JW = wW.useBytes ?? !1, PW = wW.divisor ?? 1, IW = wW.takeBufferOwnership ?? !1, this._label = wW.label) : iR = !!wW, RW instanceof bR ? (this._buffer = RW, this._ownsBuffer = IW) : (this._buffer = new bR(WW, RW, iR, AW, CW, BW, JW, PW, this._label), this._ownsBuffer = !0), this.uniqueId = yR._Counter++, this._kind = MW, void 0 === gR) {
          const WW = this.getData();
          this.type = WW ? eW(WW) : yR.FLOAT
        } else this.type = gR;
        const oW = (0, zR.r)(this.type);
        JW ? (this._size = TW || (AW ? AW / oW : NW(MW)), this.byteStride = AW || this._buffer.byteStride || this._size * oW, this.byteOffset = tR || 0) : (this._size = TW || AW || NW(MW), this.byteStride = AW ? AW * oW : this._buffer.byteStride || this._size * oW, this.byteOffset = (tR || 0) * oW), this.normalized = YW, this._instanced = void 0 !== BW && BW, this._instanceDivisor = BW ? PW : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(WW) {
        switch (WW) {
          case yR.BYTE:
            return 0;
          case yR.UNSIGNED_BYTE:
            return 1;
          case yR.SHORT:
            return 2;
          case yR.UNSIGNED_SHORT:
            return 3;
          case yR.INT:
            return 4;
          case yR.UNSIGNED_INT:
            return 5;
          case yR.FLOAT:
            return 6;
          case yR.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${WW}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (yR._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(WW, RW) {
        const MW = this.getData();
        return MW ? (0, zR.n)(MW, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, WW, RW) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, zR.r)(this.type)
      }
      iNW() {
        return this.byteOffset / (0, zR.r)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, zR.r)(this.type) : this._size
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
      updateDirectly(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(WW, RW, void 0, MW), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(WW, RW) {
        (0, zR.l)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, WW, this.normalized, ((WW, MW) => {
          for (let wW = 0; wW < this._size; wW++) RW(WW[wW], MW + wW)
        }))
      }
      _alignBuffer() {}
    }

    function NW(WW) {
      switch (WW) {
        case yR.UVKind:
        case yR.UV2Kind:
        case yR.UV3Kind:
        case yR.UV4Kind:
        case yR.UV5Kind:
        case yR.UV6Kind:
          return 2;
        case yR.NormalKind:
        case yR.PositionKind:
          return 3;
        case yR.ColorKind:
        case yR.ColorInstanceKind:
        case yR.MatricesIndicesKind:
        case yR.MatricesIndicesExtraKind:
        case yR.MatricesWeightsKind:
        case yR.MatricesWeightsExtraKind:
        case yR.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + WW + "'")
      }
    }

    function eW(WW) {
      return WW instanceof Int8Array ? yR.BYTE : WW instanceof Uint8Array ? yR.UNSIGNED_BYTE : WW instanceof Int16Array ? yR.SHORT : WW instanceof Uint16Array ? yR.UNSIGNED_SHORT : WW instanceof Int32Array ? yR.INT : WW instanceof Uint32Array ? yR.UNSIGNED_INT : yR.FLOAT
    }

    function BW(WW) {
      return (0, zR.r)(WW)
    }

    function tR(WW, RW, MW, wW, CW, AW, bR, yR) {
      (0, zR.l)(WW, RW, MW, wW, CW, AW, bR, ((WW, RW) => {
        for (let MW = 0; MW < wW; MW++) yR(WW[MW], RW + MW)
      }))
    }

    function TW(WW, RW, MW, wW, CW, AW, bR, yR) {
      return (0, zR.n)(WW, RW, MW, wW, CW, AW, bR, yR)
    }
    yR._Counter = 0, yR.BYTE = 5120, yR.UNSIGNED_BYTE = 5121, yR.SHORT = 5122, yR.UNSIGNED_SHORT = 5123, yR.INT = 5124, yR.UNSIGNED_INT = 5125, yR.FLOAT = 5126, yR.HALF_FLOAT = 5131, yR.PositionKind = "position", yR.NormalKind = "normal", yR.TangentKind = "tangent", yR.UVKind = "uv", yR.UV2Kind = "uv2", yR.UV3Kind = "uv3", yR.UV4Kind = "uv4", yR.UV5Kind = "uv5", yR.UV6Kind = "uv6", yR.ColorKind = "color", yR.ColorInstanceKind = "instanceColor", yR.MatricesIndicesKind = "matricesIndices", yR.MatricesWeightsKind = "matricesWeights", yR.MatricesIndicesExtraKind = "matricesIndicesExtra", yR.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let gR = !1;

    function iR() {
      gR || (gR = !0, yR.DeduceStride = NW, yR.GetDataType = eW, yR.GetTypeByteLength = BW, yR.ForEach = tR, yR.GetFloatData = TW)
    }
  },
  37517: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => wW
    });
    class wW {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.aR = 0, this.is32Bits = !1, this.uniqueId = wW._Counter++
      }
    }
    wW._Counter = 0
  },
  37716: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => zR
    });
    var wW = MW(35324),
      CW = MW(37722);
    class zR {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || RW && !this.pickedMesh.isVerticesDataPresent(CW.j.NormalKind)) return null;
        let MW, zR = this.pickedMesh.ptW();
        0 === zR?.length && (zR = null);
        const AW = wW.k.vC[0],
          bR = wW.k.vC[1],
          yR = wW.k.vC[2];
        if (RW) {
          const WW = this.pickedMesh.getVerticesData(CW.j.NormalKind);
          let RW = zR ? wW.q.FromArrayToRef(WW, 3 * zR[3 * this.faceId], AW) : AW.nzW(WW[3 * this.faceId * 3], WW[3 * this.faceId * 3 + 1], WW[3 * this.faceId * 3 + 2]),
            NW = zR ? wW.q.FromArrayToRef(WW, 3 * zR[3 * this.faceId + 1], bR) : bR.nzW(WW[3 * (3 * this.faceId + 1)], WW[3 * (3 * this.faceId + 1) + 1], WW[3 * (3 * this.faceId + 1) + 2]),
            eW = zR ? wW.q.FromArrayToRef(WW, 3 * zR[3 * this.faceId + 2], yR) : yR.nzW(WW[3 * (3 * this.faceId + 2)], WW[3 * (3 * this.faceId + 2) + 1], WW[3 * (3 * this.faceId + 2) + 2]);
          RW = RW.scale(this.bu), NW = NW.scale(this.bv), eW = eW.scale(1 - this.bu - this.bv), MW = new wW.q(RW.x + NW.x + eW.x, RW.y + NW.y + eW.y, RW.z + NW.z + eW.z)
        } else {
          const WW = this.pickedMesh.getVerticesData(CW.j.PositionKind),
            RW = zR ? wW.q.FromArrayToRef(WW, 3 * zR[3 * this.faceId], AW) : AW.nzW(WW[3 * this.faceId * 3], WW[3 * this.faceId * 3 + 1], WW[3 * this.faceId * 3 + 2]),
            NW = zR ? wW.q.FromArrayToRef(WW, 3 * zR[3 * this.faceId + 1], bR) : bR.nzW(WW[3 * (3 * this.faceId + 1)], WW[3 * (3 * this.faceId + 1) + 1], WW[3 * (3 * this.faceId + 1) + 2]),
            eW = zR ? wW.q.FromArrayToRef(WW, 3 * zR[3 * this.faceId + 2], yR) : yR.nzW(WW[3 * (3 * this.faceId + 2)], WW[3 * (3 * this.faceId + 2) + 1], WW[3 * (3 * this.faceId + 2) + 2]),
            BW = RW.subtract(NW),
            tR = eW.subtract(NW);
          MW = wW.q.Cross(BW, tR)
        }
        const NW = (WW, RW) => {
          if (-1 !== this.thinInstanceIndex) {
            const MW = WW._thinInstanceDataStorage.matrixData,
              CW = this.thinInstanceIndex << 4;
            if (MW && MW.length > CW) {
              const WW = wW.k.Matrix[0];
              wW.d.FromArrayToRef(MW, CW, WW), wW.q.TransformNormalToRef(RW, WW, RW)
            }
          }
          let MW = WW.getWorldMatrix();
          WW.nonUniformScaling && (wW.k.Matrix[0].hyW(MW), MW = wW.k.Matrix[0], MW.setTranslationFromFloats(0, 0, 0), MW.invert(), MW.transposeToRef(wW.k.Matrix[1]), MW = wW.k.Matrix[1]), wW.q.TransformNormalToRef(RW, MW, RW)
        };
        if (WW && NW(this.pickedMesh, MW), this.ray) {
          const RW = wW.k.vC[0].hyW(MW);
          WW || NW(this.pickedMesh, RW), wW.q.Dot(RW, this.ray.direction) > 0 && MW.negateInPlace()
        }
        return MW.normalize(), MW
      }
      getTextureCoordinates() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CW.j.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(WW)) return null;
        const RW = this.pickedMesh.ptW();
        if (!RW) return null;
        const MW = this.pickedMesh.getVerticesData(WW);
        if (!MW) return null;
        let zR = wW.n.FromArray(MW, 2 * RW[3 * this.faceId]),
          AW = wW.n.FromArray(MW, 2 * RW[3 * this.faceId + 1]),
          bR = wW.n.FromArray(MW, 2 * RW[3 * this.faceId + 2]);
        return zR = zR.scale(this.bu), AW = AW.scale(this.bv), bR = bR.scale(1 - this.bu - this.bv), new wW.n(zR.x + AW.x + bR.x, zR.y + AW.y + bR.y)
      }
    }
  },
  37557: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR
    });
    var wW = MW(37433);
    let CW = !1;

    function zR() {
      CW || (CW = !0, wW.ThinEngine.prototype.updateDynamicIndexBuffer = function(WW, RW) {
        let MW;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(WW), MW = WW.is32Bits ? RW instanceof Uint32Array ? RW : new Uint32Array(RW) : RW instanceof Uint16Array ? RW : new Uint16Array(RW), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, MW, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, wW.ThinEngine.prototype.updateDynamicVertexBuffer = function(WW, RW, MW, wW) {
        this.bindArrayBuffer(WW), void 0 === MW && (MW = 0);
        const CW = RW.byteLength || RW.length;
        void 0 === wW || wW >= CW && 0 === MW ? RW instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, MW, new Float32Array(RW)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, MW, RW) : RW instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, MW, new Float32Array(RW).subarray(0, wW / 4)) : (RW = ArrayBuffer.isView(RW) ? new Uint8Array(RW.buffer, RW.byteOffset, wW) : new Uint8Array(RW, 0, wW), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, MW, RW)), this._resetVertexBufferBinding()
      })
    }
  },
  37529: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => wW
    });
    class wW {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          RW = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = RW, !WW && (WW = RW.createTexture(), !WW)) throw new Error("Unable to create webGL texture");
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
  37485: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => PW
    });
    var wW = MW(35346),
      CW = MW(37437),
      zR = MW(35344),
      AW = MW(36721),
      bR = MW(35336),
      yR = MW(37488);
    class NW {
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
    class eW {
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
        const RW = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = RW ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = RW ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = RW ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = RW ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = RW ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = RW ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = RW ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = RW ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = RW ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = RW ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = RW ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = RW ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? WW.enable(WW.STENCIL_TEST) : WW.disable(WW.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (WW.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (WW.stencilFuncSeparate(WW.FRONT, this.func, this.funcRef, this.funcMask), WW.stencilFuncSeparate(WW.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (WW.stencilOpSeparate(WW.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), WW.stencilOpSeparate(WW.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class BW {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = BW.ALWAYS, this.opStencilFail = BW.KEEP, this.opDepthFail = BW.KEEP, this.opStencilDepthPass = BW.REPLACE, this.backFunc = BW.ALWAYS, this.backOpStencilFail = BW.KEEP, this.backOpDepthFail = BW.KEEP, this.backOpStencilDepthPass = BW.REPLACE
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
    BW.ALWAYS = 519, BW.KEEP = 7680, BW.REPLACE = 7681;
    var tR = MW(37495),
      TW = MW(37470),
      gR = MW(37424),
      iR = MW(37456),
      YW = MW(37465);

    function JW(WW, RW) {
      if (RW) {
        const {
          requestAnimationFrame: MW
        } = RW;
        if ("function" === typeof MW) return MW(WW)
      }
      if ((0, iR.m)()) {
        const {
          requestAnimationFrame: MW
        } = RW || window;
        if ("function" === typeof MW) return MW(WW)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(WW);
      return setTimeout(WW, 16)
    }
    class PW {
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
      get BNW() {
        return this._useReverseDepthBuffer
      }
      set BNW(WW) {
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
        if (WW) return this.isNDCHalfZRange ? WW.IS_NDC_HALF_ZRANGE = "" : delete WW.IS_NDC_HALF_ZRANGE, this.BNW ? WW.USE_REVERSE_DEPTHBUFFER = "" : delete WW.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? WW.USE_EXACT_SRGB_CONVERSIONS = "" : delete WW.USE_EXACT_SRGB_CONVERSIONS);
        {
          let WW = "";
          return this.isNDCHalfZRange && (WW += "#define IS_NDC_HALF_ZRANGE"), this.BNW && (WW && (WW += "\n"), WW += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (WW && (WW += "\n"), WW += "#define USE_EXACT_SRGB_CONVERSIONS"), WW
        }
      }
      _rebuildInternalTextures() {
        const WW = this._internalTexturesCache.slice();
        for (const RW of WW) RW._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const WW = this._renderTargetWrapperCache.slice();
        for (const RW of WW) RW.textures?.some((WW => 15 === WW.source)) || RW._rebuild()
      }
      _rebuildEffects() {
        for (const WW in this._compiledEffects) {
          const RW = this._compiledEffects[WW];
          RW._pipelineContext = null, RW._prepareEffect()
        }
        CW.d.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        AW.b.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(WW) {
        setTimeout((() => {
          this._clearEmptyResources();
          const RW = this._depthCullingState.depthTest,
            MW = this._depthCullingState.depthFunc,
            wW = this._depthCullingState.depthMask,
            CW = this._stencilState.stencilTest;
          WW(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = RW, this._depthCullingState.depthFunc = MW, this._depthCullingState.depthMask = wW, this._stencilState.stencilTest = CW, this._flagContextRestored()
        }), 0)
      }
      get cNW() {
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
            RW = [WW, WW, WW, WW, WW, WW];
          this._emptyCubeTexture = this.createRawCubeTexture(RW, 1, 5, 0, !1, !1, 1)
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
        const RW = this._activeRenderLoops.indexOf(WW);
        RW >= 0 && (this._activeRenderLoops.splice(RW, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: WW
            } = this.customAnimationFrameRequester;
            WW && WW(this.customAnimationFrameRequester.Kw), delete this.customAnimationFrameRequester.Kw
          }
        } else if (0 !== this._frameHandler) {
          const WW = this._frameHandler;
          if (this._frameHandler = 0, (0, iR.m)()) {
            const {
              cancelAnimationFrame: RW
            } = this.getHostWindow() || window;
            if ("function" === typeof RW) return RW(WW)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(WW);
          return clearTimeout(WW)
        }
      }
      Vk() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      Lk() {
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
        const RW = WW - this._lastFrameTime;
        return this._lastFrameTime = WW, this._renderAccumulator += RW, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(WW) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(WW)) {
          let WW = !0;
          (this.cNW || !this.renderEvenInBackground && this._windowIsBackground) && (WW = !1), WW && (this.Vk(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.Lk())
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
      _queueNewFrame(WW, RW) {
        return JW(WW, RW)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.Kw = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.Kw) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
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
        this._depthCullingState.zOffset = this.BNW ? -WW : WW
      }
      getZOffset() {
        const WW = this._depthCullingState.zOffset;
        return this.BNW ? -WW : WW
      }
      setZOffsetUnits(WW) {
        this._depthCullingState.zOffsetUnits = this.BNW ? -WW : WW
      }
      getZOffsetUnits() {
        const WW = this._depthCullingState.zOffsetUnits;
        return this.BNW ? -WW : WW
      }
      getHostWindow() {
        return (0, iR.m)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
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
        const RW = this._renderTargetWrapperCache.indexOf(WW); - 1 !== RW && this._renderTargetWrapperCache.splice(RW, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(WW, RW, MW) {
        const wW = RW || this.getRenderWidth(),
          CW = MW || this.getRenderHeight(),
          zR = WW.x || 0,
          AW = WW.y || 0;
        this._cachedViewport = WW, this._viewport(zR * wW, AW * CW, wW * WW.width, CW * WW.height)
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
      _createTextureBase(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          bR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          yR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          NW = arguments.length > 7 ? arguments[7] : void 0,
          eW = arguments.length > 8 ? arguments[8] : void 0,
          BW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          tR = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          TW = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          iR = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          YW = arguments.length > 13 ? arguments[13] : void 0,
          JW = arguments.length > 14 ? arguments[14] : void 0,
          IW = arguments.length > 15 ? arguments[15] : void 0;
        const oW = "data:" === (WW = WW || "").substring(0, 5),
          lW = "blob:" === WW.substring(0, 5),
          FW = oW && -1 !== WW.indexOf(";base64,"),
          fW = tR || new gR.e(this, 1);
        fW !== tR && (fW.label = WW.substring(0, 60));
        const QW = WW;
        !this._transformTextureUrl || FW || tR || BW || (WW = this._transformTextureUrl(WW)), QW !== WW && (fW._originalUrl = QW);
        const rR = WW.lastIndexOf(".");
        let cR = iR || (rR > -1 ? WW.substring(rR).toLowerCase() : "");
        cR.indexOf("?") > -1 && (cR = cR.split("?")[0]);
        const XW = PW.GetCompatibleTextureLoader(cR, YW);
        wW && wW.addPendingData(fW), fW.url = WW, fW.generateMipMaps = !RW, fW.samplingMode = CW, fW.invertY = MW, fW._useSRGBBuffer = this._getUseSRGBBuffer(!!IW, RW), this._doNotHandleContextLost || (fW._buffer = BW);
        let jR = null;
        bR && !tR && (jR = fW.onLoadedObservable.add(bR)), tR || this._internalTexturesCache.push(fW);
        const kR = (MW, tR) => {
          wW && wW.removePendingData(fW), WW === QW ? (jR && fW.onLoadedObservable.remove(jR), zR.d.UseFallbackTexture && WW !== zR.d.FallbackTexture && this._createTextureBase(zR.d.FallbackTexture, RW, fW.invertY, wW, CW, null, yR, NW, eW, BW, fW), MW = (MW || "Unknown error") + (zR.d.UseFallbackTexture ? " - Fallback texture was used" : ""), fW.onErrorObservable.notifyObservers({
            message: MW,
            exception: tR
          }), yR && yR(MW, tR)) : (AW.b.Warn(`Failed to load ${WW}, falling back to ${QW}`), this._createTextureBase(QW, RW, fW.invertY, wW, CW, bR, yR, NW, eW, BW, fW, TW, iR, YW, JW, IW))
        };
        if (XW) {
          const RW = async WW => {
            (await XW).loadData(WW, fW, ((WW, RW, MW, zR, AW, bR) => {
              bR ? kR("TextureLoader failed to load data") : NW(fW, cR, wW, {
                width: WW,
                height: RW
              }, fW.invertY, !MW, zR, (() => (AW(), !1)), CW)
            }), JW)
          };
          if (BW) {
            const WW = async WW => {
              try {
                await RW(WW)
              } catch (MW) {
                kR("Failed to parse texture data", MW)
              }
            };
            BW instanceof ArrayBuffer ? WW(new Uint8Array(BW)) : ArrayBuffer.isView(BW) ? WW(BW) : yR && yR("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(WW, (async WW => {
            try {
              await RW(new Uint8Array(WW))
            } catch (MW) {
              kR("Failed to parse texture data", MW)
            }
          }), void 0, wW ? wW.offlineProvider : void 0, !0, ((WW, RW) => {
            kR("Unable to load " + (WW && WW.responseURL, RW))
          }))
        } else {
          const MW = WW => {
            lW && !this._doNotHandleContextLost && (fW._buffer = WW), NW(fW, cR, wW, WW, fW.invertY, RW, !1, eW, CW)
          };
          !oW || FW ? BW && ("string" === typeof BW.decoding || BW.close) ? MW(BW) : PW._FileToolsLoadImage(WW || "", MW, kR, wW ? wW.offlineProvider : null, YW, fW.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof BW || BW instanceof ArrayBuffer || ArrayBuffer.isView(BW) || BW instanceof Blob ? PW._FileToolsLoadImage(BW, MW, kR, wW ? wW.offlineProvider : null, YW, fW.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : BW && MW(BW)
        }
        return fW
      }
      _rebuildBuffers() {
        for (const WW of this._uniformBuffers) WW._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, iR.g)() ? document : null
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
      constructor(WW, RW, MW) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new NW, this._stencilStateComposer = new eW, this._stencilState = new BW, this._alphaState = new tR.b(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new wW.c, this.onCanvasFocusObservable = new wW.c, this.onNewSceneAddedObservable = new wW.c, this.onResizeObservable = new wW.c, this.onCanvasPointerOutObservable = new wW.c, this.onEffectErrorObservable = new wW.c, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new wW.c, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = WW => this._renderLoop(WW), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new wW.c, this.onAfterShaderCompilationObservable = new wW.c, this.onBeginFrameObservable = new wW.c, this.onEndFrameObservable = new wW.c, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new wW.c, this.onContextRestoredObservable = new wW.c, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.rMW = new wW.c, this.onReleaseEffectsObservable = new wW.c, zR.d.Instances.push(this), this.startTime = yR.d.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, bR.d.SetMatrixPrecision(!!RW.useLargeWorldRendering || !!RW.useHighPrecisionMatrix), (0, iR.j)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), RW.antialias = WW ?? RW.antialias, RW.deterministicLockstep = RW.deterministicLockstep ?? !1, RW.lockstepMaxSteps = RW.lockstepMaxSteps ?? 4, RW.timeStep = RW.timeStep ?? 1 / 60, RW.stencil = RW.stencil ?? !0, this._audioContext = RW.audioEngineOptions?.audioContext ?? null, this._audioDestination = RW.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = RW.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!RW.doNotHandleContextLost, this._isStencilEnable = !!RW.stencil, this.useExactSrgbConversions = RW.useExactSrgbConversions ?? !1, this.canvasTabIndex = RW.canvasTabIndex ?? this.canvasTabIndex;
        const CW = (0, iR.m)() && window.devicePixelRatio || 1,
          AW = RW.limitDeviceRatio || CW;
        MW = MW || RW.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = MW, this._hardwareScalingLevel = MW ? 1 / Math.min(AW, CW) : 1, this._lastDevicePixelRatio = CW, this._creationOptions = RW
      }
      resize() {
        let WW, RW, MW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const WW = (0, iR.m)() && window.devicePixelRatio || 1,
            RW = this._lastDevicePixelRatio / WW;
          this._lastDevicePixelRatio = WW, this._hardwareScalingLevel *= RW
        }
        if ((0, iR.m)() && (0, iR.g)())
          if (this._renderingCanvas) {
            const MW = this._renderingCanvas.getBoundingClientRect?.();
            WW = this._renderingCanvas.clientWidth || MW?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, RW = this._renderingCanvas.clientHeight || MW?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else WW = window.innerWidth, RW = window.innerHeight;
        else WW = this._renderingCanvas ? this._renderingCanvas.width : 100, RW = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(WW / this._hardwareScalingLevel, RW / this._hardwareScalingLevel, MW)
      }
      setSize(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (WW |= 0, RW |= 0, !MW && this._renderingCanvas.width === WW && this._renderingCanvas.height === RW) return !1;
        if (this._renderingCanvas.width = WW, this._renderingCanvas.height = RW, this.scenes) {
          for (let WW = 0; WW < this.scenes.length; WW++) {
            const RW = this.scenes[WW];
            for (let WW = 0; WW < RW.cameras.length; WW++) {
              RW.cameras[WW]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW, eW, BW) {
        throw (0, TW.g)("engine.rawTexture")
      }
      createRawCubeTexture(WW, RW, MW, wW, CW, zR, AW, bR) {
        throw (0, TW.g)("engine.rawTexture")
      }
      createRawTexture3D(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW, eW) {
        throw (0, TW.g)("engine.rawTexture")
      }
      createRawTexture2DArray(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW, eW, BW) {
        throw (0, TW.g)("engine.rawTexture")
      }
      _sharedInit(WW) {
        this._renderingCanvas = WW
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const WW = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== WW.indexOf("Mobile") || -1 !== WW.indexOf("Mac") && (0, iR.g)() && "ontouchend" in document
        }, this._checkForMobile(), (0, iR.m)() && window.addEventListener("resize", this._checkForMobile))
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
      _createImageBitmapFromSource(WW, RW) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(WW, RW) {
        return createImageBitmap(WW, RW)
      }
      resizeImageBitmap(WW, RW, MW) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(WW) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(WW, RW) {
        if ("undefined" === typeof document) return new OffscreenCanvas(WW, RW);
        const MW = document.createElement("canvas");
        return MW.width = WW, MW.height = RW, MW
      }
      createCanvas(WW, RW) {
        return PW._CreateCanvas(WW, RW)
      }
      static _FileToolsLoadImage(WW, RW, MW, wW, CW, zR, AW) {
        if (!YW.b.loadImage) throw (0, TW.g)("FileTools");
        return YW.b.loadImage(WW, RW, MW, wW, CW, zR, AW)
      }
      _loadFile(WW, RW, MW, wW, CW, zR) {
        const AW = (0, YW.j)(WW, RW, MW, wW, CW, zR);
        return this._activeRequests.push(AW), AW.onCompleteObservable.add((() => {
          const WW = this._activeRequests.indexOf(AW); - 1 !== WW && this._activeRequests.splice(WW, 1)
        })), AW
      }
      static _FileToolsLoadFile(WW, RW, MW, wW, CW, zR) {
        if (YW.b.loadFile) return YW.b.loadFile(WW, RW, MW, wW, CW, zR);
        throw (0, TW.g)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), CW.d.ResetCache();
        for (const RW of this._activeRequests) RW.abort();
        this._boundRenderFunction = null, this.rMW.notifyObservers(this), this.rMW.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, iR.m)() && window.removeEventListener("resize", this._checkForMobile);
        const WW = zR.d.Instances.indexOf(this);
        WW >= 0 && zR.d.Instances.splice(WW, 1), zR.d.Instances.length || (zR.d.OnEnginesDisposedObservable.notifyObservers(this), zR.d.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(WW) {
        throw (0, TW.g)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(WW, RW) {
        for (let MW = 0; MW < zR.d.Instances.length; MW++) {
          const wW = zR.d.Instances[MW];
          for (let MW = 0; MW < wW.scenes.length; MW++) wW.scenes[MW].markAllMaterialsAsDirty(WW, RW)
        }
      }
      static GetCompatibleTextureLoader(WW, RW) {
        return null
      }
    }
    PW._RenderPassIdCounter = 0, PW._RescalePostProcessFactory = null, PW.CollisionsEpsilon = .001, PW.QueueNewFrame = JW
  },
  37441: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => wW
    });
    class wW {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wW.ShadersRepository : wW.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wW.ShadersStore : wW.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wW.IncludesShadersStore : wW.IncludesShadersStoreWGSL
      }
    }
    wW.ShadersRepository = "src/Shaders/", wW.ShadersStore = {}, wW.IncludesShadersStore = {}, wW.ShadersRepositoryWGSL = "src/ShadersWGSL/", wW.ShadersStoreWGSL = {}, wW.IncludesShadersStoreWGSL = {}
  },
  37460: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => tR,
      h: () => IW,
      k: () => gR,
      n: () => TW,
      o: () => iR,
      s: () => PW,
      w: () => BW,
      z: () => NW,
      A: () => eW,
      C: () => yR,
      F: () => bR
    });
    class wW {
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
      _fillEffectInformation(WW, RW, MW, wW, CW, zR, AW, bR) {
        const yR = this.engine;
        if (yR.supportsUniformBuffers)
          for (const eW in RW) WW.bindUniformBlock(eW, RW[eW]);
        let NW;
        for (this.engine.getUniforms(this, MW).forEach(((WW, RW) => {
            wW[MW[RW]] = WW
          })), this._uniforms = wW, NW = 0; NW < CW.length; NW++) {
          null == WW.getUniform(CW[NW]) && (CW.splice(NW, 1), NW--)
        }
        CW.forEach(((WW, RW) => {
          zR[WW] = RW
        }));
        for (const eW of yR.getAttributes(this, AW)) bR.push(eW)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(WW, RW) {
        const MW = this._valueCache[WW],
          wW = RW.updateFlag;
        if (void 0 !== MW && MW === wW) return !1;
        const CW = RW.JNW();
        let zR = this._matrixValueCache[WW];
        if (void 0 !== MW && null !== MW && void 0 !== zR) {
          let RW = !0;
          for (let WW = 15; WW >= 0; WW--)
            if (zR[WW] !== CW[WW]) {
              RW = !1;
              break
            } if (RW) return this._valueCache[WW] = wW, !1
        }
        return void 0 === zR && (zR = this._matrixValueCache[WW] = new Float32Array(16)), zR.set(CW), this._valueCache[WW] = wW, !0
      }
      _cacheFloat2(WW, RW, MW) {
        let wW = this._valueCache[WW];
        if (!wW || 2 !== wW.length) return wW = [RW, MW], this._valueCache[WW] = wW, !0;
        let CW = !1;
        return wW[0] !== RW && (wW[0] = RW, CW = !0), wW[1] !== MW && (wW[1] = MW, CW = !0), CW
      }
      _cacheFloat3(WW, RW, MW, wW) {
        let CW = this._valueCache[WW];
        if (!CW || 3 !== CW.length) return CW = [RW, MW, wW], this._valueCache[WW] = CW, !0;
        let zR = !1;
        return CW[0] !== RW && (CW[0] = RW, zR = !0), CW[1] !== MW && (CW[1] = MW, zR = !0), CW[2] !== wW && (CW[2] = wW, zR = !0), zR
      }
      _cacheFloat4(WW, RW, MW, wW, CW) {
        let zR = this._valueCache[WW];
        if (!zR || 4 !== zR.length) return zR = [RW, MW, wW, CW], this._valueCache[WW] = zR, !0;
        let AW = !1;
        return zR[0] !== RW && (zR[0] = RW, AW = !0), zR[1] !== MW && (zR[1] = MW, AW = !0), zR[2] !== wW && (zR[2] = wW, AW = !0), zR[3] !== CW && (zR[3] = CW, AW = !0), AW
      }
      setInt(WW, RW) {
        const MW = this._valueCache[WW];
        void 0 !== MW && MW === RW || this.engine.setInt(this._uniforms[WW], RW) && (this._valueCache[WW] = RW)
      }
      setInt2(WW, RW, MW) {
        this._cacheFloat2(WW, RW, MW) && (this.engine.setInt2(this._uniforms[WW], RW, MW) || (this._valueCache[WW] = null))
      }
      setInt3(WW, RW, MW, wW) {
        this._cacheFloat3(WW, RW, MW, wW) && (this.engine.setInt3(this._uniforms[WW], RW, MW, wW) || (this._valueCache[WW] = null))
      }
      setInt4(WW, RW, MW, wW, CW) {
        this._cacheFloat4(WW, RW, MW, wW, CW) && (this.engine.setInt4(this._uniforms[WW], RW, MW, wW, CW) || (this._valueCache[WW] = null))
      }
      setIntArray(WW, RW) {
        this._valueCache[WW] = null, this.engine.setIntArray(this._uniforms[WW], RW)
      }
      setIntArray2(WW, RW) {
        this._valueCache[WW] = null, this.engine.setIntArray2(this._uniforms[WW], RW)
      }
      setIntArray3(WW, RW) {
        this._valueCache[WW] = null, this.engine.setIntArray3(this._uniforms[WW], RW)
      }
      setIntArray4(WW, RW) {
        this._valueCache[WW] = null, this.engine.setIntArray4(this._uniforms[WW], RW)
      }
      setUInt(WW, RW) {
        const MW = this._valueCache[WW];
        void 0 !== MW && MW === RW || this.engine.setUInt(this._uniforms[WW], RW) && (this._valueCache[WW] = RW)
      }
      setUInt2(WW, RW, MW) {
        this._cacheFloat2(WW, RW, MW) && (this.engine.setUInt2(this._uniforms[WW], RW, MW) || (this._valueCache[WW] = null))
      }
      setUInt3(WW, RW, MW, wW) {
        this._cacheFloat3(WW, RW, MW, wW) && (this.engine.setUInt3(this._uniforms[WW], RW, MW, wW) || (this._valueCache[WW] = null))
      }
      setUInt4(WW, RW, MW, wW, CW) {
        this._cacheFloat4(WW, RW, MW, wW, CW) && (this.engine.setUInt4(this._uniforms[WW], RW, MW, wW, CW) || (this._valueCache[WW] = null))
      }
      setUIntArray(WW, RW) {
        this._valueCache[WW] = null, this.engine.setUIntArray(this._uniforms[WW], RW)
      }
      setUIntArray2(WW, RW) {
        this._valueCache[WW] = null, this.engine.setUIntArray2(this._uniforms[WW], RW)
      }
      setUIntArray3(WW, RW) {
        this._valueCache[WW] = null, this.engine.setUIntArray3(this._uniforms[WW], RW)
      }
      setUIntArray4(WW, RW) {
        this._valueCache[WW] = null, this.engine.setUIntArray4(this._uniforms[WW], RW)
      }
      setArray(WW, RW) {
        this._valueCache[WW] = null, this.engine.setArray(this._uniforms[WW], RW)
      }
      setArray2(WW, RW) {
        this._valueCache[WW] = null, this.engine.setArray2(this._uniforms[WW], RW)
      }
      setArray3(WW, RW) {
        this._valueCache[WW] = null, this.engine.setArray3(this._uniforms[WW], RW)
      }
      setArray4(WW, RW) {
        this._valueCache[WW] = null, this.engine.setArray4(this._uniforms[WW], RW)
      }
      setMatrices(WW, RW) {
        RW && (this._valueCache[WW] = null, this.engine.setMatrices(this._uniforms[WW], RW))
      }
      setMatrix(WW, RW) {
        this._cacheMatrix(WW, RW) && (this.engine.setMatrices(this._uniforms[WW], RW.JNW()) || (this._valueCache[WW] = null))
      }
      setMatrix3x3(WW, RW) {
        this._valueCache[WW] = null, this.engine.setMatrix3x3(this._uniforms[WW], RW)
      }
      setMatrix2x2(WW, RW) {
        this._valueCache[WW] = null, this.engine.setMatrix2x2(this._uniforms[WW], RW)
      }
      setFloat(WW, RW) {
        const MW = this._valueCache[WW];
        void 0 !== MW && MW === RW || this.engine.setFloat(this._uniforms[WW], RW) && (this._valueCache[WW] = RW)
      }
      setVector2(WW, RW) {
        this._cacheFloat2(WW, RW.x, RW.y) && (this.engine.setFloat2(this._uniforms[WW], RW.x, RW.y) || (this._valueCache[WW] = null))
      }
      setFloat2(WW, RW, MW) {
        this._cacheFloat2(WW, RW, MW) && (this.engine.setFloat2(this._uniforms[WW], RW, MW) || (this._valueCache[WW] = null))
      }
      setVector3(WW, RW) {
        this._cacheFloat3(WW, RW.x, RW.y, RW.z) && (this.engine.setFloat3(this._uniforms[WW], RW.x, RW.y, RW.z) || (this._valueCache[WW] = null))
      }
      setFloat3(WW, RW, MW, wW) {
        this._cacheFloat3(WW, RW, MW, wW) && (this.engine.setFloat3(this._uniforms[WW], RW, MW, wW) || (this._valueCache[WW] = null))
      }
      setVector4(WW, RW) {
        this._cacheFloat4(WW, RW.x, RW.y, RW.z, RW.w) && (this.engine.setFloat4(this._uniforms[WW], RW.x, RW.y, RW.z, RW.w) || (this._valueCache[WW] = null))
      }
      setQuaternion(WW, RW) {
        this._cacheFloat4(WW, RW.x, RW.y, RW.z, RW.w) && (this.engine.setFloat4(this._uniforms[WW], RW.x, RW.y, RW.z, RW.w) || (this._valueCache[WW] = null))
      }
      setFloat4(WW, RW, MW, wW, CW) {
        this._cacheFloat4(WW, RW, MW, wW, CW) && (this.engine.setFloat4(this._uniforms[WW], RW, MW, wW, CW) || (this._valueCache[WW] = null))
      }
      setColor3(WW, RW) {
        this._cacheFloat3(WW, RW.r, RW.g, RW.b) && (this.engine.setFloat3(this._uniforms[WW], RW.r, RW.g, RW.b) || (this._valueCache[WW] = null))
      }
      setColor4(WW, RW, MW) {
        this._cacheFloat4(WW, RW.r, RW.g, RW.b, MW) && (this.engine.setFloat4(this._uniforms[WW], RW.r, RW.g, RW.b, MW) || (this._valueCache[WW] = null))
      }
      setDirectColor4(WW, RW) {
        this._cacheFloat4(WW, RW.r, RW.g, RW.b, RW.a) && (this.engine.setFloat4(this._uniforms[WW], RW.r, RW.g, RW.b, RW.a) || (this._valueCache[WW] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var CW = MW(37465);
    const zR = new WeakMap,
      AW = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function bR(WW) {
      let RW = zR.get(WW);
      if (!RW) {
        if (!WW) return AW;
        RW = {
          _webGLVersion: WW.TEXTURE_BINDING_3D ? 2 : 1,
          _context: WW,
          parallelShaderCompile: WW.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, zR.set(WW, RW)
      }
      return RW
    }

    function yR(WW) {
      zR.delete(WW)
    }

    function NW(WW, RW, MW, wW, CW, zR) {
      const AW = bR(wW);
      zR || (zR = AW._createShaderProgramInjection ?? tR);
      return zR(WW, JW(RW, "vertex", wW, AW._contextWasLost), JW(MW, "fragment", wW, AW._contextWasLost), wW, CW, AW.validateShaderPrograms)
    }

    function eW(WW, RW, MW, wW, CW) {
      let zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        AW = arguments.length > 6 ? arguments[6] : void 0;
      const yR = bR(CW);
      AW || (AW = yR._createShaderProgramInjection ?? tR);
      const NW = yR._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return AW(WW, YW(RW, "vertex", wW, NW, CW, yR._contextWasLost), YW(MW, "fragment", wW, NW, CW, yR._contextWasLost), CW, zR, yR.validateShaderPrograms)
    }

    function BW(WW, RW) {
      const MW = new wW,
        CW = bR(WW);
      return CW.parallelShaderCompile && !CW.disableParallelShaderCompile && (MW.isParallelCompiled = !0), MW.context = CW._context, MW
    }

    function tR(WW, RW, MW, wW) {
      let CW = arguments.length > 5 ? arguments[5] : void 0;
      const zR = wW.createProgram();
      if (WW.program = zR, !zR) throw new Error("Unable to create program");
      return wW.attachShader(zR, RW), wW.attachShader(zR, MW), wW.linkProgram(zR), WW.context = wW, WW.vertexShader = RW, WW.fragmentShader = MW, WW.isParallelCompiled || gR(WW, wW, CW), zR
    }

    function TW(WW, RW, MW) {
      const wW = WW;
      if (wW._isDisposed) return !1;
      const CW = bR(RW);
      return !!(CW && CW.parallelShaderCompile && CW.parallelShaderCompile.COMPLETION_STATUS_KHR && wW.program && RW.getProgramParameter(wW.program, CW.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (gR(wW, RW, MW), !0)
    }

    function gR(WW, RW, MW) {
      const wW = WW.context,
        CW = WW.vertexShader,
        zR = WW.fragmentShader,
        AW = WW.program;
      if (!wW.getProgramParameter(AW, wW.LINK_STATUS)) {
        if (!RW.getShaderParameter(CW, RW.COMPILE_STATUS)) {
          const MW = RW.getShaderInfoLog(CW);
          if (MW) throw WW.vertexCompilationError = MW, new Error("VERTEX SHADER " + MW)
        }
        if (!RW.getShaderParameter(zR, RW.COMPILE_STATUS)) {
          const MW = RW.getShaderInfoLog(zR);
          if (MW) throw WW.fragmentCompilationError = MW, new Error("FRAGMENT SHADER " + MW)
        }
        const MW = wW.getProgramInfoLog(AW);
        if (MW) throw WW.programLinkError = MW, new Error(MW)
      }
      if (MW) {
        wW.validateProgram(AW);
        if (!wW.getProgramParameter(AW, wW.VALIDATE_STATUS)) {
          const RW = wW.getProgramInfoLog(AW);
          if (RW) throw WW.programValidationError = RW, new Error(RW)
        }
      }
      wW.deleteShader(CW), wW.deleteShader(zR), WW.vertexShader = void 0, WW.fragmentShader = void 0, WW.onCompiled && (WW.onCompiled(), WW.onCompiled = void 0)
    }

    function iR(WW, RW, MW, wW, CW, zR, AW, yR, BW) {
      let tR = arguments.length > 10 ? arguments[10] : void 0,
        TW = arguments.length > 11 ? arguments[11] : void 0,
        gR = arguments.length > 12 ? arguments[12] : void 0;
      const iR = bR(WW.context);
      TW || (TW = iR.createRawShaderProgramInjection ?? NW), gR || (gR = iR.createShaderProgramInjection ?? eW);
      const YW = WW;
      YW.program = wW ? TW(YW, RW, MW, YW.context, BW) : gR(YW, RW, MW, yR, YW.context, BW), YW.program.__SPECTOR_rebuildProgram = AW, tR()
    }

    function YW(WW, RW, MW, wW, zR, AW) {
      return JW((0, CW.e)(WW, MW, wW), RW, zR, AW)
    }

    function JW(WW, RW, MW, wW) {
      const CW = MW.createShader("vertex" === RW ? MW.VERTEX_SHADER : MW.FRAGMENT_SHADER);
      if (!CW) {
        let WW, CW = MW.NO_ERROR;
        for (;
          (WW = MW.getError()) !== MW.NO_ERROR;) CW = WW;
        throw new Error(`Something went wrong while creating a gl ${RW} shader object. gl error=${CW}, gl isContextLost=${MW.isContextLost()}, _contextWasLost=${wW}`)
      }
      return MW.shaderSource(CW, WW), MW.compileShader(CW), CW
    }

    function PW(WW, RW) {
      RW.useProgram(WW)
    }

    function IW(WW, RW) {
      const MW = WW;
      if (!MW.isParallelCompiled) return void RW(WW);
      const wW = MW.onCompiled;
      MW.onCompiled = () => {
        wW?.(), RW(WW)
      }
    }
  },
  37433: (WW, RW, MW) => {
    MW.d(RW, {
      ThinEngine: () => lW
    });
    var wW = MW(37437),
      CW = MW(37460),
      zR = MW(37485),
      AW = MW(37500),
      bR = MW(36721),
      yR = MW(37456);
    class NW {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(WW, RW, MW, wW, CW) {
        if (CW.drawBuffersExtensionDisabled) {
          const RW = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          WW = WW.replace(RW, "")
        }
        return WW
      }
    }
    const eW = /(flat\s)?\s*varying\s*.*/;
    class BW {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(WW) {
        return WW.replace("attribute", "in")
      }
      varyingCheck(WW, RW) {
        return eW.test(WW)
      }
      varyingProcessor(WW, RW) {
        return WW.replace("varying", RW ? "in" : "out")
      }
      postProcessor(WW, RW, MW) {
        const wW = -1 !== WW.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (WW = (WW = WW.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), MW) {
          const MW = -1 !== WW.search(/layout *\(location *= *0\) *out/g),
            CW = -1 !== RW.indexOf("#define DUAL_SOURCE_BLENDING"),
            zR = CW ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          CW && (WW = "#extension GL_EXT_blend_func_extended : require\n" + WW), WW = (WW = (WW = (WW = (WW = (WW = (WW = WW.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (wW || MW ? "" : zR) + "void main(")
        } else {
          RW.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (WW = "invariant gl_Position;\n" + WW);
          if (-1 !== RW.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + WW
        }
        return WW
      }
    }
    var tR = MW(37509),
      TW = MW(37520),
      gR = MW(37529),
      iR = MW(37424),
      YW = MW(37465),
      JW = MW(37447),
      PW = MW(37533),
      IW = MW(37495);
    class oW {}
    class lW extends zR.b {
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
        return wW.d.ShadersRepository
      }
      static set ShadersRepository(WW) {
        wW.d.ShadersRepository = WW
      }
      get supportsUniformBuffers() {
        return this.Gs > 1 && !this.disableUniformBuffers
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
      constructor(WW, RW, MW, wW) {
        if (MW = MW || {}, super(RW ?? MW.antialias, MW, wW), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !WW) return;
        let zR;
        if (WW.getContext) {
          if (zR = WW, void 0 === MW.preserveDrawingBuffer && (MW.preserveDrawingBuffer = !1), void 0 === MW.xrCompatible && (MW.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const WW = navigator.userAgent;
            for (const RW of lW.ExceptionList) {
              const wW = RW.key,
                CW = RW.targets;
              if (new RegExp(wW).test(WW)) {
                if (RW.capture && RW.captureConstraint) {
                  const MW = RW.capture,
                    wW = RW.captureConstraint,
                    CW = new RegExp(MW).exec(WW);
                  if (CW && CW.length > 0) {
                    if (parseInt(CW[CW.length - 1]) >= wW) continue
                  }
                }
                for (const WW of CW) switch (WW) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    MW.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, CW.C)(this._gl)
            } : (this._onContextLost = WW => {
              WW.preventDefault(), this._contextWasLost = !0, (0, CW.C)(this._gl), bR.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, zR.addEventListener("webglcontextrestored", this._onContextRestored, !1), MW.powerPreference = MW.powerPreference || "high-performance"), zR.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (MW.xrCompatible = !1), !MW.disableWebGL2Support) try {
            this._gl = zR.getContext("webgl2", MW) || zR.getContext("experimental-webgl2", MW), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (eW) {}
          if (!this._gl) {
            if (!zR) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = zR.getContext("webgl", MW) || zR.getContext("experimental-webgl", MW)
            } catch (eW) {
              throw new Error("WebGL not supported", {
                cause: eW
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = WW, zR = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const RW = this._gl.getContextAttributes();
          RW && (MW.stencil = RW.stencil)
        }
        this._sharedInit(zR), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== MW.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = MW.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let CW = 0; CW < this._caps.maxVertexAttribs; CW++) this._currentBufferPointers[CW] = new oW;
        this._shaderProcessor = this.Gs > 1 ? new BW : new NW;
        const AW = `Babylon.js v${lW.Version}`;
        bR.b.Log(AW + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", AW);
        const yR = (0, CW.F)(this._gl);
        yR.validateShaderPrograms = this.validateShaderPrograms, yR.parallelShaderCompile = this._caps.parallelShaderCompile
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
        const RW = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!RW, this._alphaState = new IW.b(this._caps.blendParametersPerTarget), RW && (this._gl.blendEquationSeparateIndexed = RW.blendEquationSeparateiOES.bind(RW), this._gl.blendEquationIndexed = RW.blendEquationiOES.bind(RW), this._gl.blendFuncSeparateIndexed = RW.blendFuncSeparateiOES.bind(RW), this._gl.blendFuncIndexed = RW.blendFunciOES.bind(RW), this._gl.colorMaskIndexed = RW.colorMaskiOES.bind(RW), this._gl.disableIndexed = RW.disableiOES.bind(RW), this._gl.enableIndexed = RW.enableiOES.bind(RW)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const WW = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== WW) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = WW.drawBuffersWEBGL.bind(WW), this._caps.maxDrawBuffers = this._gl.getParameter(WW.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let RW = 0; RW < 16; RW++) this._gl["COLOR_ATTACHMENT" + RW + "_WEBGL"] = WW["COLOR_ATTACHMENT" + RW + "_WEBGL"]
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
            RW = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (WW && RW && (this._caps.highPrecisionShaderSupported = 0 !== WW.precision && 0 !== RW.precision, this._caps.shaderFloatPrecision = Math.min(WW.precision, RW.precision)), !this._shouldUseHighPrecisionShader) {
            const WW = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              RW = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            WW && RW && (this._caps.shaderFloatPrecision = Math.min(WW.precision, RW.precision))
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
        for (let MW = 0; MW < this._maxSimultaneousTextures; MW++) this._nextFreeTextureSlots.push(MW);
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
      get Gs() {
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
      clear(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const zR = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = zR;
        let AW = 0;
        if (RW && WW) {
          let RW = !0;
          if (this._currentRenderTarget) {
            const MW = this._currentRenderTarget.texture?.format;
            if (void 0 !== MW && (0, PW.k)(MW)) {
              const MW = this._currentRenderTarget.texture?.type;
              void 0 !== MW && (0, PW.l)(MW) ? (lW._TempClearColorUint32[0] = 255 * WW.r, lW._TempClearColorUint32[1] = 255 * WW.g, lW._TempClearColorUint32[2] = 255 * WW.b, lW._TempClearColorUint32[3] = 255 * WW.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, lW._TempClearColorUint32), RW = !1) : (lW._TempClearColorInt32[0] = 255 * WW.r, lW._TempClearColorInt32[1] = 255 * WW.g, lW._TempClearColorInt32[2] = 255 * WW.b, lW._TempClearColorInt32[3] = 255 * WW.a, this._gl.clearBufferiv(this._gl.COLOR, 0, lW._TempClearColorInt32), RW = !1)
            }
          }
          RW && (this._gl.clearColor(WW.r, WW.g, WW.b, void 0 !== WW.a ? WW.a : 1), AW |= this._gl.COLOR_BUFFER_BIT)
        }
        MW && (this.BNW ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), AW |= this._gl.DEPTH_BUFFER_BIT), wW && (this._gl.clearStencil(CW), AW |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(AW)
      }
      _clearColorAttachment(WW, RW, MW, wW) {
        if ((0, PW.k)(MW)) {
          const MW = (0, PW.l)(wW),
            CW = MW ? lW._TempClearColorUint32 : lW._TempClearColorInt32;
          return CW[0] = RW.r, CW[1] = RW.g, CW[2] = RW.b, CW[3] = RW.a, void(MW ? this._gl.clearBufferuiv(this._gl.COLOR, WW, CW) : this._gl.clearBufferiv(this._gl.COLOR, WW, CW))
        }
        lW._TempClearColorFloat32[0] = RW.r, lW._TempClearColorFloat32[1] = RW.g, lW._TempClearColorFloat32[2] = RW.b, lW._TempClearColorFloat32[3] = RW.a, this._gl.clearBufferfv(this._gl.COLOR, WW, lW._TempClearColorFloat32)
      }
      _viewport(WW, RW, MW, wW) {
        WW === this._viewportCached.x && RW === this._viewportCached.y && MW === this._viewportCached.z && wW === this._viewportCached.w || (this._viewportCached.x = WW, this._viewportCached.y = RW, this._viewportCached.z = MW, this._viewportCached.w = wW, this._gl.viewport(WW, RW, MW, wW))
      }
      Lk() {
        super.Lk(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 ? arguments[2] : void 0,
          wW = arguments.length > 3 ? arguments[3] : void 0,
          CW = arguments.length > 4 ? arguments[4] : void 0,
          zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          AW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const yR = WW;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = WW, this._integerMRTAttachmentsMask = !WW.isMulti && WW.texture && (0, PW.k)(WW.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(yR._framebuffer);
        const NW = this._gl;
        WW.isMulti || (WW.is2DArray || WW.is3D ? (NW.framebufferTextureLayer(NW.FRAMEBUFFER, NW.COLOR_ATTACHMENT0, WW.texture._hardwareTexture?.underlyingResource, zR, AW), yR._currentLOD = zR) : WW.isCube ? NW.framebufferTexture2D(NW.FRAMEBUFFER, NW.COLOR_ATTACHMENT0, NW.TEXTURE_CUBE_MAP_POSITIVE_X + RW, WW.texture._hardwareTexture?.underlyingResource, zR) : yR._currentLOD !== zR && (NW.framebufferTexture2D(NW.FRAMEBUFFER, NW.COLOR_ATTACHMENT0, NW.TEXTURE_2D, WW.texture._hardwareTexture?.underlyingResource, zR), yR._currentLOD = zR));
        const eW = WW._depthStencilTexture;
        if (eW) {
          WW.is3D && (WW.texture.width === eW.width && WW.texture.height === eW.height && WW.texture.depth === eW.depth || bR.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const MW = WW._depthStencilTextureWithStencil ? NW.DEPTH_STENCIL_ATTACHMENT : NW.DEPTH_ATTACHMENT;
          WW.is2DArray || WW.is3D ? NW.framebufferTextureLayer(NW.FRAMEBUFFER, MW, eW._hardwareTexture?.underlyingResource, zR, AW) : WW.isCube ? NW.framebufferTexture2D(NW.FRAMEBUFFER, MW, NW.TEXTURE_CUBE_MAP_POSITIVE_X + RW, eW._hardwareTexture?.underlyingResource, zR) : NW.framebufferTexture2D(NW.FRAMEBUFFER, MW, NW.TEXTURE_2D, eW._hardwareTexture?.underlyingResource, zR)
        }
        yR._MSAAFramebuffer && this._bindUnboundFramebuffer(yR._MSAAFramebuffer), this._cachedViewport && !CW ? this.setViewport(this._cachedViewport, MW, wW) : (MW || (MW = WW.width, zR && (MW /= Math.pow(2, zR))), wW || (wW = WW.height, zR && (wW /= Math.pow(2, zR))), this._viewport(0, 0, MW, wW)), this.wipeCaches()
      }
      setStateCullFaceType(WW, RW) {
        const MW = this.cullBackFaces ?? WW ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== MW || RW) && (this._depthCullingState.cullFace = MW)
      }
      setState(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 ? arguments[2] : void 0,
          wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          CW = arguments.length > 4 ? arguments[4] : void 0,
          zR = arguments.length > 5 ? arguments[5] : void 0,
          AW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== WW || MW) && (this._depthCullingState.cull = WW), this.setStateCullFaceType(CW, MW), this.setZOffset(RW), this.setZOffsetUnits(AW);
        const bR = wW ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== bR || MW) && (this._depthCullingState.frontFace = bR), this._stencilStateComposer.stencilMaterial = zR
      }
      _resolveAndGenerateMipMapsFramebuffer(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        WW.disableAutomaticMSAAResolve || (WW.isMulti ? this.resolveMultiFramebuffer(WW) : this.resolveFramebuffer(WW)), RW || (WW.isMulti ? this.generateMipMapsMultiFramebuffer(WW) : this.generateMipMapsFramebuffer(WW))
      }
      _bindUnboundFramebuffer(WW) {
        this._currentFramebuffer !== WW && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, WW), this._currentFramebuffer = WW)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(WW) {
        const RW = this._getTextureTarget(WW);
        this._bindTextureDirectly(RW, WW, !0), this._gl.generateMipmap(RW), this._bindTextureDirectly(RW, null)
      }
      unBindFramebuffer(WW, RW, MW) {
        const wW = WW;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(WW, RW), MW && (wW._MSAAFramebuffer && this._bindUnboundFramebuffer(wW._framebuffer), MW()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(WW) {
        WW.isMulti || !WW.texture?.generateMipMaps || WW.isCube || this.generateMipmaps(WW.texture)
      }
      resolveFramebuffer(WW) {
        const RW = WW,
          MW = this._gl;
        if (!RW._MSAAFramebuffer || RW.isMulti) return;
        let wW = RW.resolveMSAAColors ? MW.COLOR_BUFFER_BIT : 0;
        wW |= RW._generateDepthBuffer && RW.resolveMSAADepth ? MW.DEPTH_BUFFER_BIT : 0, wW |= RW._generateStencilBuffer && RW.resolveMSAAStencil ? MW.STENCIL_BUFFER_BIT : 0, MW.bindFramebuffer(MW.READ_FRAMEBUFFER, RW._MSAAFramebuffer), MW.bindFramebuffer(MW.DRAW_FRAMEBUFFER, RW._framebuffer), MW.blitFramebuffer(0, 0, WW.width, WW.height, 0, 0, WW.width, WW.height, wW, MW.NEAREST)
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
      createVertexBuffer(WW, RW, MW) {
        return this._createVertexBuffer(WW, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(WW, RW) {
        const MW = this._gl.createBuffer();
        if (!MW) throw new Error("Unable to create vertex buffer");
        const wW = new tR.c(MW);
        return this.bindArrayBuffer(wW), "number" !== typeof WW ? WW instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(WW), RW), wW.aR = 4 * WW.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, WW, RW), wW.aR = WW.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(WW), RW), wW.aR = WW), this._resetVertexBufferBinding(), wW.references = 1, wW
      }
      createDynamicVertexBuffer(WW, RW) {
        return this._createVertexBuffer(WW, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(WW, RW, MW) {
        const wW = this._gl.createBuffer(),
          CW = new tR.c(wW);
        if (!wW) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(CW);
        const zR = this._normalizeIndexData(WW);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, zR, RW ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), CW.references = 1, CW.is32Bits = 4 === zR.BYTES_PER_ELEMENT, CW
      }
      _normalizeIndexData(WW) {
        if (2 === WW.BYTES_PER_ELEMENT) return WW;
        if (this._caps.uintIndices) {
          if (WW instanceof Uint32Array) return WW;
          for (let RW = 0; RW < WW.length; RW++)
            if (WW[RW] >= 65535) return new Uint32Array(WW);
          return new Uint16Array(WW)
        }
        return new Uint16Array(WW)
      }
      bindArrayBuffer(WW) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(WW, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(WW, RW, MW) {
        const wW = WW.program,
          CW = this._gl.getUniformBlockIndex(wW, RW);
        this._gl.uniformBlockBinding(wW, CW, MW)
      }
      bindIndexBuffer(WW) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(WW, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(WW, RW) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[RW] !== WW) && (this._gl.bindBuffer(RW, WW ? WW.underlyingResource : null), this._currentBoundBuffer[RW] = WW)
      }
      updateArrayBuffer(WW) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, WW)
      }
      _vertexAttribPointer(WW, RW, MW, wW, CW, zR, AW) {
        const bR = this._currentBufferPointers[RW];
        if (!bR) return;
        let yR = !1;
        bR.active ? (bR.buffer !== WW && (bR.buffer = WW, yR = !0), bR.size !== MW && (bR.size = MW, yR = !0), bR.type !== wW && (bR.type = wW, yR = !0), bR.normalized !== CW && (bR.normalized = CW, yR = !0), bR.stride !== zR && (bR.stride = zR, yR = !0), bR.offset !== AW && (bR.offset = AW, yR = !0)) : (yR = !0, bR.active = !0, bR.index = RW, bR.size = MW, bR.type = wW, bR.normalized = CW, bR.stride = zR, bR.offset = AW, bR.buffer = WW), (yR || this._vaoRecordInProgress) && (this.bindArrayBuffer(WW), wW === this._gl.UNSIGNED_INT || wW === this._gl.INT ? this._gl.vertexAttribIPointer(RW, MW, wW, zR, AW) : this._gl.vertexAttribPointer(RW, MW, wW, CW, zR, AW))
      }
      _bindIndexBufferWithCache(WW) {
        null != WW && this._cachedIndexBuffer !== WW && (this._cachedIndexBuffer = WW, this.bindIndexBuffer(WW), this._uintIndicesCurrentlySet = WW.is32Bits)
      }
      _bindVertexBuffersAttributes(WW, RW, MW) {
        const wW = RW.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let CW = 0; CW < wW.length; CW++) {
          const zR = RW.getAttributeLocation(CW);
          if (zR >= 0) {
            const RW = wW[CW];
            let AW = null;
            if (MW && (AW = MW[RW]), AW || (AW = WW[RW]), !AW) continue;
            this._gl.enableVertexAttribArray(zR), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[zR] = !0);
            const bR = AW.getBuffer();
            bR && (this._vertexAttribPointer(bR, zR, AW.getSize(), AW.type, AW.normalized, AW.byteStride, AW.byteOffset), AW.getIsInstanced() && (this._gl.vertexAttribDivisor(zR, AW.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(zR), this._currentInstanceBuffers.push(bR))))
          }
        }
      }
      recordVertexArrayObject(WW, RW, MW, wW) {
        const CW = this._gl.createVertexArray();
        if (!CW) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(CW), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(WW, MW, wW), this.bindIndexBuffer(RW), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), CW
      }
      bindVertexArrayObject(WW, RW) {
        this._cachedVertexArrayObject !== WW && (this._cachedVertexArrayObject = WW, this._gl.bindVertexArray(WW), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != RW && RW.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(WW, RW, MW, wW, CW) {
        if (this._cachedVertexBuffers !== WW || this._cachedEffectForVertexBuffers !== CW) {
          this._cachedVertexBuffers = WW, this._cachedEffectForVertexBuffers = CW;
          const RW = CW.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let zR = 0;
          for (let AW = 0; AW < RW; AW++)
            if (AW < MW.length) {
              const RW = CW.getAttributeLocation(AW);
              RW >= 0 && (this._gl.enableVertexAttribArray(RW), this._vertexAttribArraysEnabled[RW] = !0, this._vertexAttribPointer(WW, RW, MW[AW], this._gl.FLOAT, !1, wW, zR)), zR += 4 * MW[AW]
            }
        }
        this._bindIndexBufferWithCache(RW)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(WW, RW, MW, wW) {
        this._cachedVertexBuffers === WW && this._cachedEffectForVertexBuffers === MW || (this._cachedVertexBuffers = WW, this._cachedEffectForVertexBuffers = MW, this._bindVertexBuffersAttributes(WW, MW, wW)), this._bindIndexBufferWithCache(RW)
      }
      unbindInstanceAttributes() {
        let WW;
        for (let RW = 0, MW = this._currentInstanceLocations.length; RW < MW; RW++) {
          const MW = this._currentInstanceBuffers[RW];
          WW != MW && MW.references && (WW = MW, this.bindArrayBuffer(MW));
          const wW = this._currentInstanceLocations[RW];
          this._gl.vertexAttribDivisor(wW, 0)
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
      updateAndBindInstancesBuffer(WW, RW, MW) {
        if (this.bindArrayBuffer(WW), RW && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, RW), void 0 !== MW[0].index) this.bindInstancesBuffer(WW, MW, !0);
        else
          for (let wW = 0; wW < 4; wW++) {
            const RW = MW[wW];
            this._vertexAttribArraysEnabled[RW] || (this._gl.enableVertexAttribArray(RW), this._vertexAttribArraysEnabled[RW] = !0), this._vertexAttribPointer(WW, RW, 4, this._gl.FLOAT, !1, 64, 16 * wW), this._gl.vertexAttribDivisor(RW, 1), this._currentInstanceLocations.push(RW), this._currentInstanceBuffers.push(WW)
          }
      }
      bindInstancesBuffer(WW, RW) {
        let MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(WW);
        let wW = 0;
        if (MW)
          for (let CW = 0; CW < RW.length; CW++) {
            wW += 4 * RW[CW].attributeSize
          }
        for (let CW = 0; CW < RW.length; CW++) {
          const MW = RW[CW];
          void 0 === MW.index && (MW.index = this._currentEffect.getAttributeLocationByName(MW.attributeName)), MW.index < 0 || (this._vertexAttribArraysEnabled[MW.index] || (this._gl.enableVertexAttribArray(MW.index), this._vertexAttribArraysEnabled[MW.index] = !0), this._vertexAttribPointer(WW, MW.index, MW.attributeSize, MW.attributeType || this._gl.FLOAT, MW.normalized || !1, wW, MW.offset), this._gl.vertexAttribDivisor(MW.index, void 0 === MW.divisor ? 1 : MW.divisor), this._currentInstanceLocations.push(MW.index), this._currentInstanceBuffers.push(WW))
        }
      }
      disableInstanceAttributeByName(WW) {
        if (!this._currentEffect) return;
        const RW = this._currentEffect.getAttributeLocationByName(WW);
        this.disableInstanceAttribute(RW)
      }
      disableInstanceAttribute(WW) {
        let RW, MW = !1;
        for (; - 1 !== (RW = this._currentInstanceLocations.indexOf(WW));) this._currentInstanceLocations.splice(RW, 1), this._currentInstanceBuffers.splice(RW, 1), MW = !0;
        MW && (this._gl.vertexAttribDivisor(WW, 0), this.disableAttributeByIndex(WW))
      }
      disableAttributeByIndex(WW) {
        this._gl.disableVertexAttribArray(WW), this._vertexAttribArraysEnabled[WW] = !1, this._currentBufferPointers[WW].active = !1
      }
      draw(WW, RW, MW, wW) {
        this.drawElementsType(WW ? 0 : 1, RW, MW, wW)
      }
      drawPointClouds(WW, RW, MW) {
        this.drawArraysType(2, WW, RW, MW)
      }
      drawUnIndexed(WW, RW, MW, wW) {
        this.drawArraysType(WW ? 0 : 1, RW, MW, wW)
      }
      drawElementsType(WW, RW, MW, wW) {
        this.applyStates(), this._reportDrawCall();
        const CW = this._drawMode(WW),
          zR = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          AW = this._uintIndicesCurrentlySet ? 4 : 2;
        wW ? this._gl.drawElementsInstanced(CW, MW, zR, RW * AW, wW) : this._gl.drawElements(CW, MW, zR, RW * AW)
      }
      drawArraysType(WW, RW, MW, wW) {
        this.applyStates(), this._reportDrawCall();
        const CW = this._drawMode(WW);
        wW ? this._gl.drawArraysInstanced(CW, RW, MW, wW) : this._gl.drawArrays(CW, RW, MW)
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
        const RW = WW.getPipelineContext();
        RW && this._deletePipelineContext(RW)
      }
      _deletePipelineContext(WW) {
        const RW = WW;
        RW && RW.program && (RW.program.__SPECTOR_rebuildProgram = null, (0, JW.o)(RW), this._gl && (this._currentProgram === RW.program && this._setProgram(null), this._gl.deleteProgram(RW.program)))
      }
      _getGlobalDefines(WW) {
        return (0, YW.g)(WW, this.isNDCHalfZRange, this.BNW, this.useExactSrgbConversions)
      }
      createEffect(WW, RW, MW, zR, AW, bR, yR, NW, eW) {
        let BW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          tR = arguments.length > 10 ? arguments[10] : void 0;
        const TW = "string" === typeof WW ? WW : WW.vertexToken || WW.vertexSource || WW.vertexElement || WW.vertex,
          gR = "string" === typeof WW ? WW : WW.fragmentToken || WW.fragmentSource || WW.fragmentElement || WW.fragment,
          iR = this._getGlobalDefines(),
          YW = void 0 !== RW.attributes;
        let JW = AW ?? RW.defines ?? "";
        iR && (JW += iR);
        const PW = TW + "+" + gR + "@" + JW;
        if (this._compiledEffects[PW]) {
          const WW = this._compiledEffects[PW];
          return yR && WW.isReady() && yR(WW), WW._refCount++, WW
        }
        this._gl && (0, CW.F)(this._gl);
        const IW = new wW.d(WW, RW, YW ? this : MW, zR, this, AW, bR, yR, NW, eW, PW, RW.shaderLanguage ?? BW, RW.extraInitializationsAsync ?? tR);
        return this._compiledEffects[PW] = IW, IW
      }
      _getShaderSource(WW) {
        return this._gl.getShaderSource(WW)
      }
      createRawShaderProgram(WW, RW, MW, wW) {
        let zR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const AW = (0, CW.F)(this._gl);
        return AW._contextWasLost = this._contextWasLost, AW.validateShaderPrograms = this.validateShaderPrograms, (0, CW.z)(WW, RW, MW, wW || this._gl, zR)
      }
      createShaderProgram(WW, RW, MW, wW, zR) {
        let AW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const bR = (0, CW.F)(this._gl);
        return bR._contextWasLost = this._contextWasLost, bR.validateShaderPrograms = this.validateShaderPrograms, (0, CW.A)(WW, RW, MW, wW, zR || this._gl, AW)
      }
      inlineShaderCode(WW) {
        return WW
      }
      createPipelineContext(WW) {
        if (this._gl) {
          (0, CW.F)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const RW = (0, CW.w)(this._gl, WW);
        return RW.engine = this, RW
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(WW) {
        return (0, CW.k)(WW, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(WW, RW, MW, wW, zR, AW, bR, yR, NW, eW, BW) {
        const tR = (0, CW.F)(this._gl);
        return tR._contextWasLost = this._contextWasLost, tR.validateShaderPrograms = this.validateShaderPrograms, tR._createShaderProgramInjection = this._createShaderProgram.bind(this), tR.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), tR.createShaderProgramInjection = this.createShaderProgram.bind(this), tR.loadFileInjection = this._loadFile.bind(this), (0, CW.o)(WW, RW, MW, wW, zR, AW, bR, yR, NW, eW, BW)
      }
      _createShaderProgram(WW, RW, MW, wW) {
        let zR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, CW.e)(WW, RW, MW, wW, zR)
      }
      _isRenderingStateCompiled(WW) {
        return !this._isDisposed && (0, CW.n)(WW, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(WW, RW) {
        (0, CW.h)(WW, RW)
      }
      getUniforms(WW, RW) {
        const MW = new Array,
          wW = WW;
        for (let CW = 0; CW < RW.length; CW++) MW.push(this._gl.getUniformLocation(wW.program, RW[CW]));
        return MW
      }
      getAttributes(WW, RW) {
        const MW = [],
          wW = WW;
        for (let zR = 0; zR < RW.length; zR++) try {
          MW.push(this._gl.getAttribLocation(wW.program, RW[zR]))
        } catch (CW) {
          MW.push(-1)
        }
        return MW
      }
      enableEffect(WW) {
        (WW = null !== WW && (0, AW.c)(WW) ? WW.effect : WW) && WW !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(WW), this._currentEffect = WW, WW.onBind && WW.onBind(WW), WW._onBindObservable && WW._onBindObservable.notifyObservers(WW))
      }
      setInt(WW, RW) {
        return !!WW && (this._gl.uniform1i(WW, RW), !0)
      }
      setInt2(WW, RW, MW) {
        return !!WW && (this._gl.uniform2i(WW, RW, MW), !0)
      }
      setInt3(WW, RW, MW, wW) {
        return !!WW && (this._gl.uniform3i(WW, RW, MW, wW), !0)
      }
      setInt4(WW, RW, MW, wW, CW) {
        return !!WW && (this._gl.uniform4i(WW, RW, MW, wW, CW), !0)
      }
      setIntArray(WW, RW) {
        return !!WW && (this._gl.uniform1iv(WW, RW), !0)
      }
      setIntArray2(WW, RW) {
        return !(!WW || RW.length % 2 !== 0) && (this._gl.uniform2iv(WW, RW), !0)
      }
      setIntArray3(WW, RW) {
        return !(!WW || RW.length % 3 !== 0) && (this._gl.uniform3iv(WW, RW), !0)
      }
      setIntArray4(WW, RW) {
        return !(!WW || RW.length % 4 !== 0) && (this._gl.uniform4iv(WW, RW), !0)
      }
      setUInt(WW, RW) {
        return !!WW && (this._gl.uniform1ui(WW, RW), !0)
      }
      setUInt2(WW, RW, MW) {
        return !!WW && (this._gl.uniform2ui(WW, RW, MW), !0)
      }
      setUInt3(WW, RW, MW, wW) {
        return !!WW && (this._gl.uniform3ui(WW, RW, MW, wW), !0)
      }
      setUInt4(WW, RW, MW, wW, CW) {
        return !!WW && (this._gl.uniform4ui(WW, RW, MW, wW, CW), !0)
      }
      setUIntArray(WW, RW) {
        return !!WW && (this._gl.uniform1uiv(WW, RW), !0)
      }
      setUIntArray2(WW, RW) {
        return !(!WW || RW.length % 2 !== 0) && (this._gl.uniform2uiv(WW, RW), !0)
      }
      setUIntArray3(WW, RW) {
        return !(!WW || RW.length % 3 !== 0) && (this._gl.uniform3uiv(WW, RW), !0)
      }
      setUIntArray4(WW, RW) {
        return !(!WW || RW.length % 4 !== 0) && (this._gl.uniform4uiv(WW, RW), !0)
      }
      setArray(WW, RW) {
        return !!WW && (!(RW.length < 1) && (this._gl.uniform1fv(WW, RW), !0))
      }
      setArray2(WW, RW) {
        return !(!WW || RW.length % 2 !== 0) && (this._gl.uniform2fv(WW, RW), !0)
      }
      setArray3(WW, RW) {
        return !(!WW || RW.length % 3 !== 0) && (this._gl.uniform3fv(WW, RW), !0)
      }
      setArray4(WW, RW) {
        return !(!WW || RW.length % 4 !== 0) && (this._gl.uniform4fv(WW, RW), !0)
      }
      setMatrices(WW, RW) {
        return !!WW && (this._gl.uniformMatrix4fv(WW, !1, RW), !0)
      }
      setMatrix3x3(WW, RW) {
        return !!WW && (this._gl.uniformMatrix3fv(WW, !1, RW), !0)
      }
      setMatrix2x2(WW, RW) {
        return !!WW && (this._gl.uniformMatrix2fv(WW, !1, RW), !0)
      }
      setFloat(WW, RW) {
        return !!WW && (this._gl.uniform1f(WW, RW), !0)
      }
      setFloat2(WW, RW, MW) {
        return !!WW && (this._gl.uniform2f(WW, RW, MW), !0)
      }
      setFloat3(WW, RW, MW, wW) {
        return !!WW && (this._gl.uniform3f(WW, RW, MW, wW), !0)
      }
      setFloat4(WW, RW, MW, wW, CW) {
        return !!WW && (this._gl.uniform4f(WW, RW, MW, wW, CW), !0)
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
      _getSamplingParameters(WW, RW) {
        const MW = this._gl;
        let wW = MW.NEAREST,
          CW = MW.NEAREST,
          zR = !1;
        switch (WW) {
          case 11:
            wW = MW.LINEAR, CW = RW ? MW.LINEAR_MIPMAP_NEAREST : MW.LINEAR;
            break;
          case 3:
            wW = MW.LINEAR, zR = !0, CW = RW ? MW.LINEAR_MIPMAP_LINEAR : MW.LINEAR;
            break;
          case 8:
            zR = !0, wW = MW.NEAREST, CW = RW ? MW.NEAREST_MIPMAP_LINEAR : MW.NEAREST;
            break;
          case 4:
            wW = MW.NEAREST, CW = RW ? MW.NEAREST_MIPMAP_NEAREST : MW.NEAREST;
            break;
          case 5:
            wW = MW.NEAREST, CW = RW ? MW.LINEAR_MIPMAP_NEAREST : MW.LINEAR;
            break;
          case 6:
            zR = !0, wW = MW.NEAREST, CW = RW ? MW.LINEAR_MIPMAP_LINEAR : MW.LINEAR;
            break;
          case 7:
            wW = MW.NEAREST, CW = MW.LINEAR;
            break;
          case 1:
            wW = MW.NEAREST, CW = MW.NEAREST;
            break;
          case 9:
            wW = MW.LINEAR, CW = RW ? MW.NEAREST_MIPMAP_NEAREST : MW.NEAREST;
            break;
          case 10:
            zR = !0, wW = MW.LINEAR, CW = RW ? MW.NEAREST_MIPMAP_LINEAR : MW.NEAREST;
            break;
          case 2:
            wW = MW.LINEAR, CW = MW.LINEAR;
            break;
          case 12:
            wW = MW.LINEAR, CW = MW.NEAREST
        }
        return {
          min: CW,
          mag: wW,
          hasMipMaps: zR
        }
      }
      _createTexture() {
        const WW = this._gl.createTexture();
        if (!WW) throw new Error("Unable to create texture");
        return WW
      }
      _createHardwareTexture() {
        return new gR.d(this._createTexture(), this._gl)
      }
      _createInternalTexture(WW, RW) {
        let MW, wW, CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          zR = !1,
          AW = 0,
          yR = 3,
          NW = 5,
          eW = !1,
          BW = 1,
          tR = !1,
          TW = 0,
          gR = !1;
        void 0 !== RW && "object" === typeof RW ? (MW = !!RW.generateMipMaps, zR = !!RW.createMipMaps, AW = void 0 === RW.type ? 0 : RW.type, yR = void 0 === RW.samplingMode ? 3 : RW.samplingMode, NW = void 0 === RW.format ? 5 : RW.format, eW = void 0 !== RW.useSRGBBuffer && RW.useSRGBBuffer, BW = RW.samples ?? 1, wW = RW.label, tR = !!RW.createMSAATexture, TW = RW.comparisonFunction || 0, gR = !!RW.isCube) : MW = !!RW, eW && (eW = this._caps.supportSRGBBuffers && (this.Gs > 1 || this.isWebGPU)), (1 !== AW || this._caps.textureFloatLinearFiltering) && (2 !== AW || this._caps.textureHalfFloatLinearFiltering) || (yR = 1), 1 !== AW || this._caps.textureFloat || (AW = 0, bR.b.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const YW = (0, PW.i)(NW),
          JW = (0, PW.e)(NW),
          IW = this._gl,
          oW = new iR.e(this, CW),
          lW = WW.width || WW,
          FW = WW.height || WW,
          fW = WW.depth || 0,
          QW = WW.layers || 0,
          rR = this._getSamplingParameters(yR, (MW || zR) && !YW),
          cR = 0 !== QW ? IW.TEXTURE_2D_ARRAY : 0 !== fW ? IW.TEXTURE_3D : gR ? IW.TEXTURE_CUBE_MAP : IW.TEXTURE_2D,
          XW = YW ? this._getInternalFormatFromDepthTextureFormat(NW, !0, JW) : this._getRGBABufferInternalSizedFormat(AW, NW, eW),
          jR = YW ? JW ? IW.DEPTH_STENCIL : IW.DEPTH_COMPONENT : this._getInternalFormat(NW),
          kR = YW ? this._getWebGLTextureTypeFromDepthTextureFormat(NW) : this._getWebGLTextureType(AW);
        if (this._bindTextureDirectly(cR, oW), 0 !== QW) oW.is2DArray = !0, IW.texImage3D(cR, 0, XW, lW, FW, QW, 0, jR, kR, null);
        else if (0 !== fW) oW.is3D = !0, IW.texImage3D(cR, 0, XW, lW, FW, fW, 0, jR, kR, null);
        else if (gR) {
          oW.isCube = !0;
          for (let WW = 0; WW < 6; WW++) IW.texImage2D(IW.TEXTURE_CUBE_MAP_POSITIVE_X + WW, 0, XW, lW, FW, 0, jR, kR, null)
        } else IW.texImage2D(cR, 0, XW, lW, FW, 0, jR, kR, null);
        if (IW.texParameteri(cR, IW.TEXTURE_MAG_FILTER, rR.mag), IW.texParameteri(cR, IW.TEXTURE_MIN_FILTER, rR.min), IW.texParameteri(cR, IW.TEXTURE_WRAP_S, IW.CLAMP_TO_EDGE), IW.texParameteri(cR, IW.TEXTURE_WRAP_T, IW.CLAMP_TO_EDGE), YW && this.Gs > 1 && (0 === TW ? (IW.texParameteri(cR, IW.TEXTURE_COMPARE_FUNC, 515), IW.texParameteri(cR, IW.TEXTURE_COMPARE_MODE, IW.NONE)) : (IW.texParameteri(cR, IW.TEXTURE_COMPARE_FUNC, TW), IW.texParameteri(cR, IW.TEXTURE_COMPARE_MODE, IW.COMPARE_REF_TO_TEXTURE))), (MW || zR) && this._gl.generateMipmap(cR), this._bindTextureDirectly(cR, null), oW._useSRGBBuffer = eW, oW.baseWidth = lW, oW.baseHeight = FW, oW.width = lW, oW.height = FW, oW.depth = QW || fW, oW.isReady = !0, oW.samples = BW, oW.generateMipMaps = MW, oW.samplingMode = yR, oW.type = AW, oW.format = NW, oW.label = wW, oW.comparisonFunction = TW, this._internalTexturesCache.push(oW), tR) {
          let WW;
          if (WW = (0, PW.i)(oW.format) ? this._setupFramebufferDepthAttachments((0, PW.e)(oW.format), 19 !== oW.format, oW.width, oW.height, BW, oW.format, !0) : this._createRenderBuffer(oW.width, oW.height, BW, -1, this._getRGBABufferInternalSizedFormat(oW.type, oW.format, oW._useSRGBBuffer), -1), !WW) throw new Error("Unable to create render buffer");
          oW._autoMSAAManagement = !0;
          let RW = oW._hardwareTexture;
          RW || (RW = oW._hardwareTexture = this._createHardwareTexture()), RW.addMSAARenderBuffer(WW)
        }
        return oW
      }
      _getUseSRGBBuffer(WW, RW) {
        return WW && this._caps.supportSRGBBuffers && (this.Gs > 1 || RW)
      }
      createTexture(WW, RW, MW, wW) {
        var CW = this;
        let zR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          AW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          bR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          yR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          NW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          eW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          BW = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          tR = arguments.length > 11 ? arguments[11] : void 0,
          TW = arguments.length > 12 ? arguments[12] : void 0,
          gR = arguments.length > 13 ? arguments[13] : void 0,
          YW = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(WW, RW, MW, wW, zR, AW, bR, (function() {
          for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
          return CW._prepareWebGLTexture(...RW, eW)
        }), ((WW, RW, MW, CW, zR, AW) => {
          const bR = this._gl,
            yR = MW.width === WW && MW.height === RW;
          zR._creationFlags = gR ?? 0;
          const NW = this._getTexImageParametersForCreateTexture(zR.format, zR._useSRGBBuffer);
          if (yR) return bR.texImage2D(bR.TEXTURE_2D, 0, NW.internalFormat, NW.format, NW.type, MW), !1;
          const eW = this._caps.maxTextureSize;
          if (MW.width > eW || MW.height > eW || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = WW, this._workingCanvas.height = RW, this._workingContext.drawImage(MW, 0, 0, MW.width, MW.height, 0, 0, WW, RW), bR.texImage2D(bR.TEXTURE_2D, 0, NW.internalFormat, NW.format, NW.type, this._workingCanvas), zR.width = WW, zR.height = RW, !1);
          {
            const WW = new iR.e(this, 2);
            this._bindTextureDirectly(bR.TEXTURE_2D, WW, !0), bR.texImage2D(bR.TEXTURE_2D, 0, NW.internalFormat, NW.format, NW.type, MW), this._rescaleTexture(WW, zR, wW, NW.format, (() => {
              this._releaseTexture(WW), this._bindTextureDirectly(bR.TEXTURE_2D, zR, !0), AW()
            }))
          }
          return !0
        }), yR, NW, eW, BW, tR, TW, YW)
      }
      _getTexImageParametersForCreateTexture(WW, RW) {
        let MW, wW;
        return 1 === this.Gs ? (MW = this._getInternalFormat(WW, RW), wW = MW) : (MW = this._getInternalFormat(WW, !1), wW = this._getRGBABufferInternalSizedFormat(0, WW, RW)), {
          internalFormat: wW,
          format: MW,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(WW, RW, MW, wW, CW) {}
      _unpackFlipY(WW) {
        this._unpackFlipYCached !== WW && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, WW ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = WW))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(WW) {
        return WW.isCube ? this._gl.TEXTURE_CUBE_MAP : WW.is3D ? this._gl.TEXTURE_3D : WW.is2DArray || WW.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wW = this._getTextureTarget(RW),
          CW = this._getSamplingParameters(WW, RW.useMipMaps || MW);
        this._setTextureParameterInteger(wW, this._gl.TEXTURE_MAG_FILTER, CW.mag, RW), this._setTextureParameterInteger(wW, this._gl.TEXTURE_MIN_FILTER, CW.min), MW && CW.hasMipMaps && (RW.generateMipMaps = !0, this._gl.generateMipmap(wW)), this._bindTextureDirectly(wW, null), RW.samplingMode = WW
      }
      updateTextureDimensions(WW, RW, MW) {}
      updateTextureWrappingMode(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const CW = this._getTextureTarget(WW);
        null !== RW && (this._setTextureParameterInteger(CW, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(RW), WW), WW._cachedWrapU = RW), null !== MW && (this._setTextureParameterInteger(CW, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(MW), WW), WW._cachedWrapV = MW), (WW.is2DArray || WW.is3D) && null !== wW && (this._setTextureParameterInteger(CW, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(wW), WW), WW._cachedWrapR = wW), this._bindTextureDirectly(CW, null)
      }
      _uploadCompressedDataToTextureDirectly(WW, RW, MW, wW, CW) {
        let zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          AW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const bR = this._gl;
        let yR = bR.TEXTURE_2D;
        if (WW.isCube && (yR = bR.TEXTURE_CUBE_MAP_POSITIVE_X + zR), WW._useSRGBBuffer) switch (RW) {
          case 37492:
          case 36196:
            this._caps.etc2 ? RW = bR.COMPRESSED_SRGB8_ETC2 : WW._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? RW = bR.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : WW._useSRGBBuffer = !1;
            break;
          case 36492:
            RW = bR.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            RW = bR.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            RW = bR.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            RW = bR.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            RW = bR.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            RW = bR.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            RW = bR.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            RW = bR.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            RW = bR.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            RW = bR.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            RW = bR.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            RW = bR.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            RW = bR.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            RW = bR.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            RW = bR.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? RW = bR.COMPRESSED_SRGB_S3TC_DXT1_EXT : WW._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? RW = bR.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : WW._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? RW = bR.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : WW._useSRGBBuffer = !1;
            break;
          default:
            WW._useSRGBBuffer = !1
        }
        if (WW.generateMipMaps) {
          const zR = WW._hardwareTexture;
          zR.memoryAllocated || (bR.texStorage2D(WW.isCube ? bR.TEXTURE_CUBE_MAP : bR.TEXTURE_2D, Math.floor(Math.log2(Math.max(MW, wW))) + 1, RW, WW.width, WW.height), zR.memoryAllocated = !0), this._gl.compressedTexSubImage2D(yR, AW, 0, 0, MW, wW, RW, CW)
        } else this._gl.compressedTexImage2D(yR, AW, RW, MW, wW, 0, CW)
      }
      _uploadDataToTextureDirectly(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          CW = arguments.length > 4 ? arguments[4] : void 0,
          zR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const AW = this._gl,
          bR = this._getWebGLTextureType(WW.type),
          yR = this._getInternalFormat(WW.format),
          NW = void 0 === CW ? this._getRGBABufferInternalSizedFormat(WW.type, WW.format, WW._useSRGBBuffer) : this._getInternalFormat(CW, WW._useSRGBBuffer);
        this._unpackFlipY(WW.invertY);
        let eW = AW.TEXTURE_2D;
        WW.isCube && (eW = AW.TEXTURE_CUBE_MAP_POSITIVE_X + MW);
        const BW = Math.round(Math.log(WW.width) * Math.LOG2E),
          tR = Math.round(Math.log(WW.height) * Math.LOG2E),
          TW = zR ? WW.width : Math.pow(2, Math.max(BW - wW, 0)),
          gR = zR ? WW.height : Math.pow(2, Math.max(tR - wW, 0));
        AW.texImage2D(eW, wW, NW, TW, gR, 0, yR, bR, RW)
      }
      updateTextureData(WW, RW, MW, wW, CW, zR) {
        let AW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          bR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          yR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const NW = this._gl,
          eW = this._getWebGLTextureType(WW.type),
          BW = this._getInternalFormat(WW.format);
        this._unpackFlipY(WW.invertY);
        let tR = NW.TEXTURE_2D,
          TW = NW.TEXTURE_2D;
        WW.isCube && (TW = NW.TEXTURE_CUBE_MAP_POSITIVE_X + AW, tR = NW.TEXTURE_CUBE_MAP), this._bindTextureDirectly(tR, WW, !0), NW.texSubImage2D(TW, bR, MW, wW, CW, zR, BW, eW, RW), yR && this._gl.generateMipmap(TW), this._bindTextureDirectly(tR, null)
      }
      _uploadArrayBufferViewToTexture(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const CW = this._gl,
          zR = WW.isCube ? CW.TEXTURE_CUBE_MAP : CW.TEXTURE_2D;
        this._bindTextureDirectly(zR, WW, !0), this._uploadDataToTextureDirectly(WW, RW, MW, wW), this._bindTextureDirectly(zR, null, !0)
      }
      _prepareWebGLTextureContinuation(WW, RW, MW, wW, CW) {
        const zR = this._gl;
        if (!zR) return;
        const AW = this._getSamplingParameters(CW, !MW);
        zR.texParameteri(zR.TEXTURE_2D, zR.TEXTURE_MAG_FILTER, AW.mag), zR.texParameteri(zR.TEXTURE_2D, zR.TEXTURE_MIN_FILTER, AW.min), MW || wW || zR.generateMipmap(zR.TEXTURE_2D), this._bindTextureDirectly(zR.TEXTURE_2D, null), RW && RW.removePendingData(WW), WW.onLoadedObservable.notifyObservers(WW), WW.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW) {
        const eW = this.getCaps().maxTextureSize,
          BW = Math.min(eW, this.needPOTTextures ? (0, TW.e)(wW.width, eW) : wW.width),
          tR = Math.min(eW, this.needPOTTextures ? (0, TW.e)(wW.height, eW) : wW.height),
          gR = this._gl;
        gR && (WW._hardwareTexture ? (this._bindTextureDirectly(gR.TEXTURE_2D, WW, !0), this._unpackFlipY(void 0 === CW || !!CW), WW.baseWidth = wW.width, WW.baseHeight = wW.height, WW.width = BW, WW.height = tR, WW.isReady = !0, WW.type = -1 !== WW.type ? WW.type : 0, WW.format = -1 !== WW.format ? WW.format : NW ?? (".jpg" !== RW || WW._useSRGBBuffer ? 5 : 4), bR(BW, tR, wW, RW, WW, (() => {
          this._prepareWebGLTextureContinuation(WW, MW, zR, AW, yR)
        })) || this._prepareWebGLTextureContinuation(WW, MW, zR, AW, yR)) : MW && MW.removePendingData(WW))
      }
      _getInternalFormatFromDepthTextureFormat(WW, RW, MW) {
        const wW = this._gl;
        if (!RW) return wW.STENCIL_INDEX8;
        let CW = MW ? wW.DEPTH_STENCIL : wW.DEPTH_COMPONENT;
        return this.Gs > 1 ? 15 === WW ? CW = wW.DEPTH_COMPONENT16 : 16 === WW ? CW = wW.DEPTH_COMPONENT24 : 17 === WW || 13 === WW ? CW = MW ? wW.DEPTH24_STENCIL8 : wW.DEPTH_COMPONENT24 : 14 === WW ? CW = wW.DEPTH_COMPONENT32F : 18 === WW && (CW = MW ? wW.DEPTH32F_STENCIL8 : wW.DEPTH_COMPONENT32F) : CW = wW.DEPTH_COMPONENT16, CW
      }
      _getWebGLTextureTypeFromDepthTextureFormat(WW) {
        const RW = this._gl;
        let MW = RW.UNSIGNED_INT;
        return 15 === WW ? MW = RW.UNSIGNED_SHORT : 17 === WW || 13 === WW ? MW = RW.UNSIGNED_INT_24_8 : 14 === WW ? MW = RW.FLOAT : 18 === WW ? MW = RW.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === WW && (MW = RW.UNSIGNED_BYTE), MW
      }
      _setupFramebufferDepthAttachments(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          zR = arguments.length > 5 ? arguments[5] : void 0,
          AW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const bR = this._gl;
        zR = zR ?? (WW ? 13 : 14);
        const yR = this._getInternalFormatFromDepthTextureFormat(zR, RW, WW);
        return WW && RW ? this._createRenderBuffer(MW, wW, CW, bR.DEPTH_STENCIL, yR, AW ? -1 : bR.DEPTH_STENCIL_ATTACHMENT) : RW ? this._createRenderBuffer(MW, wW, CW, yR, yR, AW ? -1 : bR.DEPTH_ATTACHMENT) : WW ? this._createRenderBuffer(MW, wW, CW, yR, yR, AW ? -1 : bR.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(WW, RW, MW, wW, CW, zR) {
        let AW = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const bR = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(bR, WW, RW, MW, wW, CW, zR, AW)
      }
      _updateRenderBuffer(WW, RW, MW, wW, CW, zR, AW) {
        let bR = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const yR = this._gl;
        return yR.bindRenderbuffer(yR.RENDERBUFFER, WW), wW > 1 && yR.renderbufferStorageMultisample ? yR.renderbufferStorageMultisample(yR.RENDERBUFFER, wW, zR, RW, MW) : yR.renderbufferStorage(yR.RENDERBUFFER, CW, RW, MW), -1 !== AW && yR.framebufferRenderbuffer(yR.FRAMEBUFFER, AW, yR.RENDERBUFFER, WW), bR && yR.bindRenderbuffer(yR.RENDERBUFFER, null), WW
      }
      _releaseTexture(WW) {
        this._deleteTexture(WW._hardwareTexture), this.unbindAllTextures();
        const RW = this._internalTexturesCache.indexOf(WW); - 1 !== RW && this._internalTexturesCache.splice(RW, 1), WW._lodTextureHigh && WW._lodTextureHigh.dispose(), WW._lodTextureMid && WW._lodTextureMid.dispose(), WW._lodTextureLow && WW._lodTextureLow.dispose(), WW._irradianceTexture && WW._irradianceTexture.dispose()
      }
      _deleteTexture(WW) {
        WW?.release()
      }
      _setProgram(WW) {
        this._currentProgram !== WW && ((0, CW.s)(WW, this._gl), this._currentProgram = WW)
      }
      bindSamplers(WW) {
        const RW = WW.getPipelineContext();
        this._setProgram(RW.program);
        const MW = WW.getSamplers();
        for (let wW = 0; wW < MW.length; wW++) {
          const RW = WW.getUniform(MW[wW]);
          RW && (this._boundUniforms[wW] = RW)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          CW = !1;
        const zR = RW && RW._associatedChannel > -1;
        MW && zR && (this._activeChannel = RW._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== RW || wW) {
          if (this._activateCurrentTexture(), RW && RW.isMultiview) throw bR.b.Error(["_bindTextureDirectly called with a multiview texture!", WW, RW]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(WW, RW?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = RW, RW && (RW._associatedChannel = this._activeChannel)
        } else MW && (CW = !0, this._activateCurrentTexture());
        return zR && !MW && this._bindSamplerUniformToChannel(RW._associatedChannel, this._activeChannel), CW
      }
      _bindTexture(WW, RW, MW) {
        if (void 0 === WW) return;
        RW && (RW._associatedChannel = WW), this._activeChannel = WW;
        const wW = RW ? this._getTextureTarget(RW) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(wW, RW)
      }
      unbindAllTextures() {
        for (let WW = 0; WW < this._maxSimultaneousTextures; WW++) this._activeChannel = WW, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Gs > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(WW, RW, MW, wW) {
        void 0 !== WW && (RW && (this._boundUniforms[WW] = RW), this._setTexture(WW, MW))
      }
      _bindSamplerUniformToChannel(WW, RW) {
        const MW = this._boundUniforms[WW];
        MW && MW._currentState !== RW && (this._gl.uniform1i(MW, RW), MW._currentState = RW)
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
      _setTexture(WW, RW) {
        let MW, wW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          CW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!RW) return null != this._boundTexturesCache[WW] && (this._activeChannel = WW, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Gs > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (RW.video) {
          this._activeChannel = WW;
          const MW = RW.getInternalTexture();
          MW && (MW._associatedChannel = WW), RW.update()
        } else if (4 === RW.delayLoadState) return RW.delayLoad(), !1;
        MW = CW ? RW.depthStencilTexture : RW.isReady() ? RW.getInternalTexture() : RW.isCube ? this.emptyCubeTexture : RW.is3D ? this.emptyTexture3D : RW.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !wW && MW && (MW._associatedChannel = WW);
        let zR = !0;
        this._boundTexturesCache[WW] === MW && (wW || this._bindSamplerUniformToChannel(MW._associatedChannel, WW), zR = !1), this._activeChannel = WW;
        const AW = this._getTextureTarget(MW);
        if (zR && this._bindTextureDirectly(AW, MW, wW), MW && !MW.isMultiview) {
          if (MW.isCube && MW._cachedCoordinatesMode !== RW.coordinatesMode) {
            MW._cachedCoordinatesMode = RW.coordinatesMode;
            const WW = 3 !== RW.coordinatesMode && 5 !== RW.coordinatesMode ? 1 : 0;
            RW.wrapU = WW, RW.wrapV = WW
          }
          MW._cachedWrapU !== RW.wrapU && (MW._cachedWrapU = RW.wrapU, this._setTextureParameterInteger(AW, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(RW.wrapU), MW)), MW._cachedWrapV !== RW.wrapV && (MW._cachedWrapV = RW.wrapV, this._setTextureParameterInteger(AW, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(RW.wrapV), MW)), MW.is3D && MW._cachedWrapR !== RW.wrapR && (MW._cachedWrapR = RW.wrapR, this._setTextureParameterInteger(AW, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(RW.wrapR), MW)), this._setAnisotropicLevel(AW, MW, RW.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(WW, RW, MW, wW) {
        if (void 0 !== WW && RW) {
          this._textureUnits && this._textureUnits.length === MW.length || (this._textureUnits = new Int32Array(MW.length));
          for (let RW = 0; RW < MW.length; RW++) {
            const wW = MW[RW].getInternalTexture();
            wW ? (this._textureUnits[RW] = WW + RW, wW._associatedChannel = WW + RW) : this._textureUnits[RW] = -1
          }
          this._gl.uniform1iv(RW, this._textureUnits);
          for (let WW = 0; WW < MW.length; WW++) this._setTexture(this._textureUnits[WW], MW[WW], !0)
        }
      }
      _setAnisotropicLevel(WW, RW, MW) {
        const wW = this._caps.textureAnisotropicFilterExtension;
        11 !== RW.samplingMode && 3 !== RW.samplingMode && 2 !== RW.samplingMode && (MW = 1), wW && RW._cachedAnisotropicFilteringLevel !== MW && (this._setTextureParameterFloat(WW, wW.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(MW, this._caps.maxAnisotropy), RW), RW._cachedAnisotropicFilteringLevel = MW)
      }
      _setTextureParameterFloat(WW, RW, MW, wW) {
        this._bindTextureDirectly(WW, wW, !0, !0), this._gl.texParameterf(WW, RW, MW)
      }
      _setTextureParameterInteger(WW, RW, MW, wW) {
        wW && this._bindTextureDirectly(WW, wW, !0, !0), this._gl.texParameteri(WW, RW, MW)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let WW = 0; WW < this._caps.maxVertexAttribs; WW++) this.disableAttributeByIndex(WW)
        } else
          for (let WW = 0, RW = this._vertexAttribArraysEnabled.length; WW < RW; WW++) WW >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[WW] || this.disableAttributeByIndex(WW)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, yR.m)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, CW.C)(this._gl)
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
        const RW = this._gl;
        for (; RW.getError() !== RW.NO_ERROR;);
        let MW = !0;
        const wW = RW.createTexture();
        RW.bindTexture(RW.TEXTURE_2D, wW), RW.texImage2D(RW.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(WW), 1, 1, 0, RW.RGBA, this._getWebGLTextureType(WW), null), RW.texParameteri(RW.TEXTURE_2D, RW.TEXTURE_MIN_FILTER, RW.NEAREST), RW.texParameteri(RW.TEXTURE_2D, RW.TEXTURE_MAG_FILTER, RW.NEAREST);
        const CW = RW.createFramebuffer();
        RW.bindFramebuffer(RW.FRAMEBUFFER, CW), RW.framebufferTexture2D(RW.FRAMEBUFFER, RW.COLOR_ATTACHMENT0, RW.TEXTURE_2D, wW, 0);
        const zR = RW.checkFramebufferStatus(RW.FRAMEBUFFER);
        if (MW = MW && zR === RW.FRAMEBUFFER_COMPLETE, MW = MW && RW.getError() === RW.NO_ERROR, MW && (RW.clear(RW.COLOR_BUFFER_BIT), MW = MW && RW.getError() === RW.NO_ERROR), MW) {
          RW.bindFramebuffer(RW.FRAMEBUFFER, null);
          const WW = RW.RGBA,
            wW = RW.UNSIGNED_BYTE,
            CW = new Uint8Array(4);
          RW.readPixels(0, 0, 1, 1, WW, wW, CW), MW = MW && RW.getError() === RW.NO_ERROR
        }
        for (RW.deleteTexture(wW), RW.deleteFramebuffer(CW), RW.bindFramebuffer(RW.FRAMEBUFFER, null); !MW && RW.getError() !== RW.NO_ERROR;);
        return MW
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
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = RW ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (WW) {
          case 0:
            MW = this._gl.ALPHA;
            break;
          case 1:
            MW = this._gl.LUMINANCE;
            break;
          case 2:
            MW = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            MW = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            MW = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            MW = RW ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            MW = RW ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (WW) {
          case 8:
            MW = this._gl.RED_INTEGER;
            break;
          case 9:
            MW = this._gl.RG_INTEGER;
            break;
          case 10:
            MW = this._gl.RGB_INTEGER;
            break;
          case 11:
            MW = this._gl.RGBA_INTEGER
        }
        return MW
      }
      _getRGBABufferInternalSizedFormat(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== RW) switch (RW) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return MW ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (WW) {
          case 3:
            switch (RW) {
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
            switch (RW) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return MW ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return MW ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (RW) {
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
            switch (RW) {
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
            switch (RW) {
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
            switch (RW) {
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
            switch (RW) {
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
            switch (RW) {
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
            switch (RW) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return MW ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(WW, RW, MW, wW) {
        let CW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          zR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          AW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const yR = CW ? 4 : 3,
          NW = CW ? this._gl.RGBA : this._gl.RGB,
          eW = MW * wW * yR;
        if (AW) {
          if (AW.length < eW) return bR.b.Error(`Data buffer is too small to store the read pixels (${AW.length} should be more than ${eW})`), Promise.resolve(AW)
        } else AW = new Uint8Array(eW);
        return zR && this.flushFramebuffer(), this._gl.readPixels(WW, RW, MW, wW, NW, this._gl.UNSIGNED_BYTE, AW), Promise.resolve(AW)
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
          const WW = zR.b._CreateCanvas(1, 1),
            RW = WW.getContext("webgl") || WW.getContext("experimental-webgl");
          this._IsSupported = null != RW && !!globalThis.WebGLRenderingContext
        } catch (WW) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const WW = zR.b._CreateCanvas(1, 1),
            RW = WW.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || WW.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !RW
        } catch (WW) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    lW._TempClearColorUint32 = new Uint32Array(4), lW._TempClearColorInt32 = new Int32Array(4), lW._TempClearColorFloat32 = new Float32Array(4), lW.ExceptionList = [{
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
    }], lW._ConcatenateShader = YW.e, lW._IsSupported = null, lW._HasMajorPerformanceCaveat = null
  },
  37765: (WW, RW, MW) => {
    var wW;
    MW.d(RW, {
        c: () => CW
      }),
      function(WW) {
        WW[WW.PointerMove = 0] = "PointerMove", WW[WW.PointerDown = 1] = "PointerDown", WW[WW.PointerUp = 2] = "PointerUp"
      }(wW || (wW = {}));
    class CW {}
    CW.DOM_DELTA_PIXEL = 0, CW.DOM_DELTA_LINE = 1, CW.DOM_DELTA_PAGE = 2
  },
  37763: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW,
      i: () => zR,
      m: () => CW
    });
    class wW {}
    wW.KEYDOWN = 1, wW.KEYUP = 2;
    class CW {
      constructor(WW, RW) {
        this.type = WW, this.event = RW
      }
    }
    class zR extends CW {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(WW) {
        this.skipOnKeyboardObservable = WW
      }
      constructor(WW, RW) {
        super(WW, RW), this.type = WW, this.event = RW, this.skipOnKeyboardObservable = !1
      }
    }
  },
  37758: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW,
      e: () => AW,
      g: () => bR
    });
    var wW = MW(35324);
    class CW {}
    CW.POINTERDOWN = 1, CW.POINTERUP = 2, CW.POINTERMOVE = 4, CW.POINTERWHEEL = 8, CW.POINTERPICK = 16, CW.POINTERTAP = 32, CW.POINTERDOUBLETAP = 64;
    class zR {
      constructor(WW, RW) {
        this.type = WW, this.event = RW
      }
    }
    class AW extends zR {
      constructor(WW, RW, MW, CW) {
        super(WW, RW), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new wW.n(MW, CW)
      }
    }
    class bR extends zR {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(WW, RW), this._pickInfo = MW, this._inputManager = wW
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  37774: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => wW
    });
    class wW {
      static CompareLightsPriority(WW, RW) {
        return WW.shadowEnabled !== RW.shadowEnabled ? (RW.shadowEnabled ? 1 : 0) - (WW.shadowEnabled ? 1 : 0) : RW.renderPriority - WW.renderPriority
      }
    }
    wW.FALLOFF_DEFAULT = 0, wW.FALLOFF_PHYSICAL = 1, wW.FALLOFF_GLTF = 2, wW.FALLOFF_STANDARD = 3, wW.LIGHTMAP_DEFAULT = 0, wW.LIGHTMAP_SPECULAR = 1, wW.LIGHTMAP_SHADOWSONLY = 2, wW.INTENSITYMODE_AUTOMATIC = 0, wW.INTENSITYMODE_LUMINOUSPOWER = 1, wW.INTENSITYMODE_LUMINOUSINTENSITY = 2, wW.INTENSITYMODE_ILLUMINANCE = 3, wW.INTENSITYMODE_LUMINANCE = 4, wW.LIGHTTYPEID_POINTLIGHT = 0, wW.LIGHTTYPEID_DIRECTIONALLIGHT = 1, wW.LIGHTTYPEID_SPOTLIGHT = 2, wW.LIGHTTYPEID_HEMISPHERICLIGHT = 3, wW.LIGHTTYPEID_RECT_AREALIGHT = 4, wW.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  37424: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => AW
    });
    var wW, CW = MW(35346),
      zR = MW(37428);
    ! function(WW) {
      WW[WW.Unknown = 0] = "Unknown", WW[WW.Url = 1] = "Url", WW[WW.Temp = 2] = "Temp", WW[WW.Raw = 3] = "Raw", WW[WW.Dynamic = 4] = "Dynamic", WW[WW.RenderTarget = 5] = "RenderTarget", WW[WW.MultiRenderTarget = 6] = "MultiRenderTarget", WW[WW.Cube = 7] = "Cube", WW[WW.CubeRaw = 8] = "CubeRaw", WW[WW.CubePrefiltered = 9] = "CubePrefiltered", WW[WW.Raw3D = 10] = "Raw3D", WW[WW.Raw2DArray = 11] = "Raw2DArray", WW[WW.DepthStencil = 12] = "DepthStencil", WW[WW.CubeRawRGBD = 13] = "CubeRawRGBD", WW[WW.Depth = 14] = "Depth", WW[WW.External = 15] = "External"
    }(wW || (wW = {}));
    class AW extends zR.e {
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
      mC() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new CW.c, this.onErrorObservable = new CW.c, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = WW, this._source = RW, this._uniqueId = AW._Counter++, MW || (this._hardwareTexture = WW._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, WW, RW, MW), this.width = WW, this.height = RW, this.depth = MW, this.baseWidth = WW, this.baseHeight = RW, this.baseDepth = MW, this._size = WW * RW * MW
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const WW = this.onRebuildCallback(this),
            RW = RW => {
              RW._swapAndDie(this, !1), this.isReady = WW.isReady
            };
          return void(WW.isAsync ? WW.proxy.then(RW) : RW(WW.proxy))
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
                const RW = this._bufferViewArray[WW];
                RW && this._engine.updateRawTexture(this, RW, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, WW)
              }
            this.isReady = !0;
            break;
          case 10:
            WW = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), WW._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (WW = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), WW._swapAndDie(this, !1), this._bufferViewArray)
              for (let WW = 0; WW < this._bufferViewArray.length; WW++) {
                const RW = this._bufferViewArray[WW];
                RW && this._engine.updateRawTexture2DArray(this, RW, this.format, this.invertY, this._compression, this.type, WW)
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
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(WW._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), WW._hardwareTexture = this._hardwareTexture, WW._setUniqueId(AW._Counter++), RW && (WW._isRGBD = this._isRGBD), this._lodTextureHigh && (WW._lodTextureHigh && WW._lodTextureHigh.dispose(), WW._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (WW._lodTextureMid && WW._lodTextureMid.dispose(), WW._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (WW._lodTextureLow && WW._lodTextureLow.dispose(), WW._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (WW._irradianceTexture && WW._irradianceTexture.dispose(), WW._irradianceTexture = this._irradianceTexture);
        const MW = this._engine.getLoadedTexturesCache();
        let wW = MW.indexOf(this); - 1 !== wW && MW.splice(wW, 1), wW = MW.indexOf(WW), -1 === wW && MW.push(WW)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    AW._Counter = 0
  },
  37533: (WW, RW, MW) => {
    function wW(WW) {
      return 13 === WW || 14 === WW || 15 === WW || 16 === WW || 17 === WW || 18 === WW || 19 === WW
    }

    function CW(WW) {
      return 8 === WW || 9 === WW || 10 === WW || 11 === WW
    }

    function zR(WW) {
      return 0 === WW || 5 === WW || 7 === WW || 11 === WW
    }

    function AW(WW) {
      return 13 === WW || 17 === WW || 18 === WW || 19 === WW
    }
    MW.d(RW, {
      e: () => AW,
      i: () => wW,
      k: () => CW,
      l: () => zR
    })
  },
  37428: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW
    });
    class wW {
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
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = WW, this._cachedWrapV = RW, this._cachedWrapR = MW, this._cachedAnisotropicFilteringLevel = wW, this.samplingMode = CW, this._comparisonFunction = zR, this
      }
      compareSampler(WW) {
        return this._cachedWrapU === WW._cachedWrapU && this._cachedWrapV === WW._cachedWrapV && this._cachedWrapR === WW._cachedWrapR && this._cachedAnisotropicFilteringLevel === WW._cachedAnisotropicFilteringLevel && this.samplingMode === WW.samplingMode && this._comparisonFunction === WW._comparisonFunction && this._useMipMaps === WW._useMipMaps
      }
    }
  },
  37701: (WW, RW, MW) => {
    function wW(WW) {
      WW.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    MW.d(RW, {
      e: () => wW
    })
  },
  37500: (WW, RW, MW) => {
    function wW(WW) {
      return void 0 === WW.getPipelineContext
    }
    MW.d(RW, {
      c: () => wW
    })
  },
  37900: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => CW
    });
    var wW = MW(37483);
    class CW {
      static GetEffect(WW) {
        return void 0 === WW.getPipelineContext ? WW.effect : WW
      }
      constructor(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = WW.createDrawContext(), RW && (this.materialContext = WW.createMaterialContext())
      }
      setEffect(WW, RW) {
        let MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        MW || this.effect === WW || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = WW, void 0 !== RW && (this.defines = RW), MW && this.drawContext?.reset()
      }
      dispose() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const RW = this.effect;
          WW ? RW.dispose() : wW.c.SetImmediate((() => {
            RW.mC().onEndFrameObservable.addOnce((() => {
              RW.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  37447: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => BW,
      h: () => TW,
      l: () => NW,
      o: () => eW
    });
    var wW = MW(37456),
      CW = MW(37460),
      zR = MW(37441),
      AW = MW(36721),
      bR = MW(37477),
      yR = MW(37465);

    function NW(WW, RW) {
      return (0, CW.F)(RW).cachedPipelines[WW]
    }

    function eW(WW) {
      const RW = WW._name,
        MW = WW.context;
      if (RW && MW) {
        const WW = (0, CW.F)(MW),
          wW = WW.cachedPipelines[RW];
        wW?.dispose(), delete WW.cachedPipelines[RW]
      }
    }

    function BW(WW, RW, MW, CW, zR, AW, yR) {
      let NW, eW;
      const BW = (0, wW.m)() ? AW?.getHostDocument() : null;
      NW = "string" === typeof RW ? RW : "string" === typeof RW.vertexSource ? "source:" + RW.vertexSource : "string" === typeof RW.vertexElement ? BW?.getElementById(RW.vertexElement) || RW.vertexElement : RW.vertex || RW, eW = "string" === typeof RW ? RW : "string" === typeof RW.fragmentSource ? "source:" + RW.fragmentSource : "string" === typeof RW.fragmentElement ? BW?.getElementById(RW.fragmentElement) || RW.fragmentElement : RW.fragment || RW;
      const TW = [void 0, void 0],
        gR = () => {
          if (TW[0] && TW[1]) {
            const [wW, NW] = TW;
            (0, bR.f)(WW), (0, bR.m)(wW, WW, ((wW, eW) => {
              yR && (yR._vertexSourceCodeBeforeMigration = eW), MW && (wW = MW("vertex", wW)), WW.isFragment = !0, (0, bR.m)(NW, WW, ((AW, NW) => {
                yR && (yR._fragmentSourceCodeBeforeMigration = NW), MW && (AW = MW("fragment", AW));
                const eW = (0, bR.e)(wW, AW, WW);
                WW = null;
                const BW = function(WW, RW, MW, wW) {
                  if (MW) {
                    return {
                      vertexSourceCode: (1 === wW ? "//" : "") + "#define SHADER_NAME vertex:" + (MW.vertexElement || MW.vertex || MW.spectorName || MW) + "\n" + WW,
                      fragmentSourceCode: (1 === wW ? "//" : "") + "#define SHADER_NAME fragment:" + (MW.fragmentElement || MW.fragment || MW.spectorName || MW) + "\n" + RW
                    }
                  }
                  return {
                    vertexSourceCode: WW,
                    fragmentSourceCode: RW
                  }
                }(eW.vertexCode, eW.fragmentCode, RW, zR);
                CW?.(BW.vertexSourceCode, BW.fragmentSourceCode)
              }), AW)
            }), AW)
          }
        };
      tR(NW, "Vertex", "", (WW => {
        yR && (yR._rawVertexSourceCode = WW), TW[0] = WW, gR()
      }), zR), tR(eW, "Fragment", "Pixel", (WW => {
        yR && (yR._rawFragmentSourceCode = WW), TW[1] = WW, gR()
      }), zR)
    }

    function tR(WW, RW, MW, CW, AW, bR) {
      if ("undefined" !== typeof HTMLElement && WW instanceof HTMLElement) {
        return void CW((0, wW.c)(WW))
      }
      if ("source:" === WW.substring(0, 7)) return void CW(WW.substring(7));
      if ("base64:" === WW.substring(0, 7)) {
        return void CW(window.atob(WW.substring(7)))
      }
      const NW = zR.c.GetShadersStore(AW);
      if (NW[WW + RW + "Shader"]) return void CW(NW[WW + RW + "Shader"]);
      if (MW && NW[WW + MW + "Shader"]) return void CW(NW[WW + MW + "Shader"]);
      let eW;
      if (eW = "." === WW[0] || "/" === WW[0] || WW.indexOf("http") > -1 ? WW : zR.c.GetShadersRepository(AW) + WW, !(bR = bR || yR.j)) throw new Error("loadFileInjection is not defined");
      bR(eW + "." + RW.toLowerCase() + ".fx", CW)
    }
    const TW = (WW, RW, MW, wW) => {
      try {
        const zR = WW.context ? (0, CW.F)(WW.context) : null;
        zR && (zR.disableParallelShaderCompile = WW.disableParallelCompilation);
        const AW = WW.existingPipelineContext || RW(WW.shaderProcessingContext);
        return AW._name = WW.name, WW.name && zR && (zR.cachedPipelines[WW.name] = AW), MW(AW, WW.vertex, WW.fragment, !!WW.createAsRaw, "", "", WW.rebuildRebind, WW.defines, WW.transformFeedbackVaryings, "", (() => {
          wW(AW, (() => {
            WW.onRenderingStateCompiled?.(AW)
          }))
        })), AW
      } catch (zR) {
        throw AW.b.Error("Error compiling effect"), zR
      }
    }
  },
  37437: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => yR
    });
    var wW = MW(35346),
      CW = MW(36721),
      zR = MW(37441),
      AW = MW(37447),
      bR = MW(37483);
    class yR {
      static get ShadersRepository() {
        return zR.c.ShadersRepository
      }
      static set ShadersRepository(WW) {
        zR.c.ShadersRepository = WW
      }
      get cNW() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new wW.c), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(WW, RW, MW) {
        let CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          zR = arguments.length > 4 ? arguments[4] : void 0,
          bR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          NW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          eW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          BW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          tR = arguments.length > 9 ? arguments[9] : void 0,
          TW = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          gR = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          iR = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new wW.c, this.onErrorObservable = new wW.c, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = WW, this._key = TW;
        const YW = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let JW;
        if (RW.attributes) {
          const WW = RW;
          if (this._engine = MW, this._attributesNames = WW.attributes, this._uniformsNames = WW.uniformsNames.concat(WW.samplers), this._samplerList = WW.samplers.slice(), this.defines = WW.defines, this.onError = WW.onError, this.onCompiled = WW.onCompiled, this._fallbacks = WW.fallbacks, this._indexParameters = WW.indexParameters, this._transformFeedbackVaryings = WW.transformFeedbackVaryings || null, this._multiTarget = !!WW.multiTarget, this._shaderLanguage = WW.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!WW.disableParallelShaderCompilation, WW.uniformBuffersNames) {
            this._uniformBuffersNamesList = WW.uniformBuffersNames.slice();
            for (let RW = 0; RW < WW.uniformBuffersNames.length; RW++) this._uniformBuffersNames[WW.uniformBuffersNames[RW]] = RW
          }
          this._processFinalCode = WW.processFinalCode ?? null, this._processCodeAfterIncludes = WW.processCodeAfterIncludes ?? void 0, iR = WW.extraInitializationsAsync, JW = WW.existingPipelineContext
        } else this._engine = zR, this.defines = null == bR ? "" : bR, this._uniformsNames = MW.concat(CW), this._samplerList = CW ? CW.slice() : [], this._attributesNames = RW, this._uniformBuffersNamesList = [], this._shaderLanguage = gR, this.onError = BW, this.onCompiled = eW, this._indexParameters = tR, this._fallbacks = NW;
        "WEBGL2" === this._engine.shaderPlatformName && (JW = (0, AW.l)(YW, this._engine._gl) ?? JW), this._attributeLocationByName = {}, this.uniqueId = yR._UniqueIdSeed++, JW ? (this._pipelineContext = JW, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, iR).catch((WW => {
          const RW = WW?.message ?? String(WW),
            MW = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${RW}`);
          WW && "string" === typeof WW.stack && (MW.stack = `${MW.message}\nCaused by: ${WW.stack}`), this._processCompilationErrors(MW)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.cNW || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wW = arguments.length > 3 ? arguments[3] : void 0;
        wW && await wW(), this._processingContext = MW || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const CW = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: WW ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: zR.c.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: zR.c.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          BNW: this._engine.BNW,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, AW.e)(CW, this.name, this._processFinalCode, ((WW, MW) => {
          this._vertexSourceCode = WW, this._fragmentSourceCode = MW, this._prepareEffect(RW)
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
        return !!this._engine.cNW || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      mC() {
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
        this.isReady() ? WW(this) : (this.onCompileObservable.add((RW => {
          WW(RW)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(WW) {
        (0, bR.g)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (RW => {
          this._processCompilationErrors(RW, WW)
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
            BNW: this._engine.BNW,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(WW, RW, MW, wW) {
        this._isReady = !1, this._vertexSourceCodeOverride = WW, this._fragmentSourceCodeOverride = RW, this.onError = (WW, RW) => {
          wW && wW(RW)
        }, this.onCompiled = () => {
          const WW = this.mC().scenes;
          if (WW)
            for (let RW = 0; RW < WW.length; RW++) WW[RW].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(MW)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(WW) {
        if (this._pipelineContext = WW, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let RW = 0; RW < this._attributesNames.length; RW++) {
            const WW = this._attributesNames[RW];
            this._attributeLocationByName[WW] = this._attributes[RW]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), yR.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RW = this._pipelineContext;
        this._isReady = !1;
        try {
          const MW = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            wW = MW ? null : this.defines,
            CW = MW ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            zR = MW ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            bR = this._engine;
          this._pipelineContext = (0, AW.h)({
            existingPipelineContext: WW ? RW : null,
            vertex: CW,
            fragment: zR,
            context: "WEBGL2" === bR.shaderPlatformName || "WEBGL1" === bR.shaderPlatformName ? bR._gl : void 0,
            rebuildRebind: (WW, RW, MW, wW) => this._rebuildProgram(WW, RW, MW, wW),
            defines: wW,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: MW,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: MW => {
              RW && !WW && this._engine._deletePipelineContext(RW), MW && this._onRenderingStateCompiled(MW)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(RW)
        } catch (MW) {
          this._processCompilationErrors(MW, RW)
        }
      }
      _getShaderCodeAndErrorLine(WW, RW, MW) {
        const wW = MW ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let CW = null;
        if (RW && WW) {
          const zR = RW.match(wW);
          if (zR && 2 === zR.length) {
            const RW = parseInt(zR[1]),
              wW = WW.split("\n", -1);
            wW.length >= RW && (CW = `Offending line [${RW}] in ${MW?"fragment":"vertex"} code: ${wW[RW-1]}`)
          }
        }
        return [WW, CW]
      }
      _processCompilationErrors(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof WW?.stack ? WW.stack : WW?.message ?? String(WW);
        const MW = this._attributesNames,
          wW = this._fallbacks;
        if (CW.b.Error("Unable to compile effect:"), CW.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), CW.b.Error(`Attributes: ${MW.join(" ")}`), CW.b.Error("Defines:\n" + this.defines), yR.LogShaderCodeOnCompilationError) {
          let WW, RW = null,
            MW = null;
          this._pipelineContext?._getVertexShaderCode() && ([WW, RW] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), WW && (CW.b.Error("Vertex code:"), CW.b.Error(WW))), this._pipelineContext?._getFragmentShaderCode() && ([WW, MW] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), WW && (CW.b.Error("Fragment code:"), CW.b.Error(WW))), RW && CW.b.Error(RW), MW && CW.b.Error(MW)
        }
        CW.b.Error("Error: " + this._compilationError);
        const zR = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        RW && (this._pipelineContext = RW, this._isReady = !0, zR()), wW ? (this._pipelineContext = null, wW.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, CW.b.Error("Trying next fallback."), this.defines = wW.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, zR(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, RW || zR())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(WW, RW) {
        this._engine._bindTexture(this._samplers[WW], RW, WW)
      }
      setTexture(WW, RW) {
        this._engine.setTexture(this._samplers[WW], this._uniforms[WW], RW, WW)
      }
      setTextureArray(WW, RW) {
        const MW = WW + "Ex";
        if (-1 === this._samplerList.indexOf(MW + "0")) {
          const wW = this._samplerList.indexOf(WW);
          for (let WW = 1; WW < RW.length; WW++) {
            const RW = MW + (WW - 1).toString();
            this._samplerList.splice(wW + WW, 0, RW)
          }
          let CW = 0;
          for (const WW of this._samplerList) this._samplers[WW] = CW, CW += 1
        }
        this._engine.setTextureArray(this._samplers[WW], this._uniforms[WW], RW, WW)
      }
      bindUniformBuffer(WW, RW) {
        const MW = this._uniformBuffersNames[RW];
        void 0 === MW || yR._BaseCache[MW] === WW && this._engine._features.useUBOBindingCache || (yR._BaseCache[MW] = WW, this._engine.bindUniformBufferBase(WW, MW, RW))
      }
      bindUniformBlock(WW, RW) {
        this._engine.bindUniformBlock(this._pipelineContext, WW, RW)
      }
      setInt(WW, RW) {
        return this._pipelineContext.setInt(WW, RW), this
      }
      setInt2(WW, RW, MW) {
        return this._pipelineContext.setInt2(WW, RW, MW), this
      }
      setInt3(WW, RW, MW, wW) {
        return this._pipelineContext.setInt3(WW, RW, MW, wW), this
      }
      setInt4(WW, RW, MW, wW, CW) {
        return this._pipelineContext.setInt4(WW, RW, MW, wW, CW), this
      }
      setIntArray(WW, RW) {
        return this._pipelineContext.setIntArray(WW, RW), this
      }
      setIntArray2(WW, RW) {
        return this._pipelineContext.setIntArray2(WW, RW), this
      }
      setIntArray3(WW, RW) {
        return this._pipelineContext.setIntArray3(WW, RW), this
      }
      setIntArray4(WW, RW) {
        return this._pipelineContext.setIntArray4(WW, RW), this
      }
      setUInt(WW, RW) {
        return this._pipelineContext.setUInt(WW, RW), this
      }
      setUInt2(WW, RW, MW) {
        return this._pipelineContext.setUInt2(WW, RW, MW), this
      }
      setUInt3(WW, RW, MW, wW) {
        return this._pipelineContext.setUInt3(WW, RW, MW, wW), this
      }
      setUInt4(WW, RW, MW, wW, CW) {
        return this._pipelineContext.setUInt4(WW, RW, MW, wW, CW), this
      }
      setUIntArray(WW, RW) {
        return this._pipelineContext.setUIntArray(WW, RW), this
      }
      setUIntArray2(WW, RW) {
        return this._pipelineContext.setUIntArray2(WW, RW), this
      }
      setUIntArray3(WW, RW) {
        return this._pipelineContext.setUIntArray3(WW, RW), this
      }
      setUIntArray4(WW, RW) {
        return this._pipelineContext.setUIntArray4(WW, RW), this
      }
      setFloatArray(WW, RW) {
        return this._pipelineContext.setArray(WW, RW), this
      }
      setFloatArray2(WW, RW) {
        return this._pipelineContext.setArray2(WW, RW), this
      }
      setFloatArray3(WW, RW) {
        return this._pipelineContext.setArray3(WW, RW), this
      }
      setFloatArray4(WW, RW) {
        return this._pipelineContext.setArray4(WW, RW), this
      }
      setArray(WW, RW) {
        return this._pipelineContext.setArray(WW, RW), this
      }
      setArray2(WW, RW) {
        return this._pipelineContext.setArray2(WW, RW), this
      }
      setArray3(WW, RW) {
        return this._pipelineContext.setArray3(WW, RW), this
      }
      setArray4(WW, RW) {
        return this._pipelineContext.setArray4(WW, RW), this
      }
      setMatrices(WW, RW) {
        return this._pipelineContext.setMatrices(WW, RW), this
      }
      setMatrix(WW, RW) {
        return this._pipelineContext.setMatrix(WW, RW), this
      }
      setMatrix3x3(WW, RW) {
        return this._pipelineContext.setMatrix3x3(WW, RW), this
      }
      setMatrix2x2(WW, RW) {
        return this._pipelineContext.setMatrix2x2(WW, RW), this
      }
      setFloat(WW, RW) {
        return this._pipelineContext.setFloat(WW, RW), this
      }
      setBool(WW, RW) {
        return this._pipelineContext.setInt(WW, RW ? 1 : 0), this
      }
      setVector2(WW, RW) {
        return this._pipelineContext.setVector2(WW, RW), this
      }
      setFloat2(WW, RW, MW) {
        return this._pipelineContext.setFloat2(WW, RW, MW), this
      }
      setVector3(WW, RW) {
        return this._pipelineContext.setVector3(WW, RW), this
      }
      setFloat3(WW, RW, MW, wW) {
        return this._pipelineContext.setFloat3(WW, RW, MW, wW), this
      }
      setVector4(WW, RW) {
        return this._pipelineContext.setVector4(WW, RW), this
      }
      setQuaternion(WW, RW) {
        return this._pipelineContext.setQuaternion(WW, RW), this
      }
      setFloat4(WW, RW, MW, wW, CW) {
        return this._pipelineContext.setFloat4(WW, RW, MW, wW, CW), this
      }
      setColor3(WW, RW) {
        return this._pipelineContext.setColor3(WW, RW), this
      }
      setColor4(WW, RW, MW) {
        return this._pipelineContext.setColor4(WW, RW, MW), this
      }
      setDirectColor4(WW, RW) {
        return this._pipelineContext.setDirectColor4(WW, RW), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (yR.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, AW.o)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        RW && (zR.c.GetShadersStore(wW)[`${WW}PixelShader`] = RW), MW && (zR.c.GetShadersStore(wW)[`${WW}VertexShader`] = MW)
      }
      static ResetCache() {
        yR._BaseCache = {}
      }
    }
    yR.LogShaderCodeOnCompilationError = !0, yR.PersistentMode = !1, yR.AutomaticallyClearCodeCache = !1, yR._UniqueIdSeed = 0, yR._BaseCache = {}, yR.ShadersStore = zR.c.ShadersStore, yR.IncludesShadersStore = zR.c.IncludesShadersStore
  },
  37735: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => eW,
      e: () => fW,
      h: () => FW
    });
    var wW = MW(37437),
      CW = MW(35324),
      zR = MW(35359),
      AW = MW(37712);
    const bR = new CW.d,
      yR = new CW.d,
      NW = new CW.d,
      eW = {
        QRW: () => {},
        eyeAtCamera: !0
      };

    function BW(WW, RW, MW) {
      const wW = MW.JNW(),
        CW = RW.JNW();
      for (let zR = 0; zR < 16; zR++) wW[zR] = CW[zR];
      return wW[12] -= WW.x, wW[13] -= WW.y, wW[14] -= WW.z, MW.markAsUpdated(), MW
    }

    function tR(WW, RW, MW) {
      return (0, zR.j)(RW, yR), BW(WW, yR, NW), (0, zR.j)(NW, MW), MW
    }

    function TW(WW, RW, MW) {
      if (!eW.eyeAtCamera) return tR(WW, RW, MW);
      const wW = MW.JNW(),
        CW = RW.JNW();
      for (let zR = 0; zR < 16; zR++) wW[zR] = CW[zR];
      return wW[12] = 0, wW[13] = 0, wW[14] = 0, MW.markAsUpdated(), MW
    }

    function gR(WW, RW, MW, wW) {
      return (0, zR.q)(TW(WW, RW, wW), MW, wW), wW
    }

    function iR(WW, RW, MW, wW) {
      return (0, zR.j)(MW, yR), (0, zR.q)(RW, yR, NW), BW(WW, NW, yR), TW(WW, MW, NW), (0, zR.q)(yR, NW, wW), wW
    }

    function YW(WW, RW, MW, wW, CW, AW) {
      return (0, zR.j)(MW, yR), (0, zR.q)(RW, yR, NW), BW(WW, NW, yR), gR(WW, wW, CW, NW), (0, zR.q)(yR, NW, AW), AW
    }

    function JW(WW, RW) {
      const MW = eW.QRW();
      if (!MW || bR === RW) return RW;
      bR.updateFlag = RW.updateFlag;
      const wW = MW.floatingOriginOffset;
      switch (WW) {
        case "world":
          return BW(wW, RW, bR);
        case "view":
          return TW(wW, RW, bR);
        case "worldView":
          return iR(wW, RW, MW.getViewMatrix(), bR);
        case "viewProjection":
          return gR(wW, MW.getViewMatrix(), MW.getProjectionMatrix(), bR);
        case "worldViewProjection":
          return YW(wW, RW, MW.getTransformMatrix(), MW.getViewMatrix(), MW.getProjectionMatrix(), bR);
        default:
          if (WW.startsWith("u_")) {
            const CW = WW.toLowerCase();
            if (CW.startsWith("u_worldviewprojection")) return YW(wW, RW, MW.getTransformMatrix(), MW.getViewMatrix(), MW.getProjectionMatrix(), bR);
            if (CW.startsWith("u_viewprojection")) return gR(wW, MW.getViewMatrix(), MW.getProjectionMatrix(), bR);
            if (CW.startsWith("u_worldview")) return iR(wW, RW, MW.getViewMatrix(), bR);
            if (CW.startsWith("u_world")) return BW(wW, RW, bR);
            if (CW.startsWith("u_view")) return TW(wW, RW, bR)
          }
          return RW
      }
    }
    const PW = AW.b,
      IW = wW.d,
      oW = PW.prototype._updateMatrixForUniform,
      lW = wW.d.prototype.setMatrix;

    function FW() {
      wW.d.prototype.setMatrix = lW, IW._setMatrixOverride = void 0, PW.prototype._updateMatrixForUniform = oW, PW.prototype._updateMatrixForUniformOverride = void 0
    }

    function fW() {
      IW.prototype._setMatrixOverride = lW, IW.prototype.setMatrix = function(WW, RW) {
        return this._setMatrixOverride(WW, JW(WW, RW)), this
      }, PW.prototype._updateMatrixForUniformOverride = oW, PW.prototype._updateMatrixForUniform = function(WW, RW) {
        this._updateMatrixForUniformOverride(WW, JW(WW, RW))
      }
    }
  },
  37704: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => zR,
      f: () => CW
    });
    var wW = MW(37701);

    function CW(WW, RW) {
      RW.WHITEBALANCE && WW.push("whiteBalanceMatrix"), RW.EXPOSURE && WW.push("exposureLinear"), RW.CONTRAST && WW.push("contrast"), RW.COLORGRADING && WW.push("colorTransformSettings"), (RW.VIGNETTE || RW.DITHER) && WW.push("vInverseScreenSize"), RW.VIGNETTE && (WW.push("vignetteSettings1"), WW.push("vignetteSettings2")), RW.COLORCURVES && (0, wW.e)(WW), RW.DITHER && WW.push("ditherIntensity")
    }

    function zR(WW, RW) {
      RW.COLORGRADING && WW.push("txColorTransform")
    }
  },
  37699: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => jR,
      d: () => sW
    });
    var wW = MW(37587),
      CW = MW(37593),
      zR = MW(35346),
      AW = MW(35376),
      bR = MW(35353),
      yR = MW(35324);
    const NW = [
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
      eW = 1e6 / NW[NW.length - 1][0],
      BW = 150;

    function tR(WW, RW) {
      const MW = Number.isNaN(WW) ? eW : Math.max(WW, eW),
        wW = (0, bR.Clamp)(1e6 / MW, NW[0][0], NW[NW.length - 1][0]);
      let CW = 0,
        zR = NW.length - 1;
      for (; zR - CW > 1;) {
        const WW = CW + zR >> 1;
        NW[WW][0] <= wW ? CW = WW : zR = WW
      }
      const AW = CW,
        [tR, TW, gR, iR] = NW[AW],
        [YW, JW, PW, IW] = NW[AW + 1],
        oW = (wW - tR) / (YW - tR),
        lW = yR.n.Lerp(new yR.n(TW, gR), new yR.n(JW, PW), oW),
        FW = yR.n.Normalize(new yR.n(1, iR)),
        fW = yR.n.Normalize(new yR.n(1, IW)),
        QW = yR.n.Normalize(yR.n.Lerp(FW, fW, oW)),
        rR = (0, bR.Clamp)(RW, -150, BW);
      lW.pNW(QW.scale(rR / 3e3));
      const cR = 2 * lW.x - 8 * lW.y + 4,
        XW = 3 * lW.x / cR,
        jR = 2 * lW.y / cR;
      return new yR.q(XW / jR, 1, (1 - XW - jR) / jR)
    }
    const TW = yR.d.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      gR = yR.d.Invert(TW);

    function iR(WW, RW) {
      const MW = RW > 0 ? WW / RW : 10;
      return (0, bR.Clamp)(MW, .1, 10)
    }

    function YW(WW, RW) {
      const MW = yR.q.TransformNormal(WW, TW),
        wW = yR.q.TransformNormal(RW, TW),
        CW = yR.d.FromArray([iR(wW.x, MW.x), 0, 0, 0, 0, iR(wW.y, MW.y), 0, 0, 0, 0, iR(wW.z, MW.z), 0, 0, 0, 0, 1]);
      return TW.multiply(CW).multiply(gR)
    }
    const JW = new yR.q(.95047, 1, 1.08883),
      PW = yR.d.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(YW(JW, tR(6500, 0))),
      IW = yR.d.Invert(PW),
      oW = yR.q.TransformNormal(new yR.q(1, 1, 1), PW);
    var lW = MW(37615),
      FW = MW(37701);
    let fW = (() => {
      var WW;
      let RW, MW, zR, bR, yR, NW, eW, BW, tR, TW, gR, iR, YW = [],
        JW = [],
        PW = [],
        IW = [],
        oW = [],
        fW = [],
        QW = [],
        rR = [],
        cR = [],
        XW = [],
        jR = [],
        kR = [],
        aR = [],
        sW = [],
        dW = [],
        pW = [],
        hW = [],
        UW = [],
        EW = [],
        VW = [],
        mR = [],
        xR = [],
        vR = [],
        KW = [];
      return WW = class {
        constructor() {
          this._dirty = !0, this._tempColor = new AW.h(0, 0, 0, 0), this._globalCurve = new AW.h(0, 0, 0, 0), this._highlightsCurve = new AW.h(0, 0, 0, 0), this._midtonesCurve = new AW.h(0, 0, 0, 0), this._shadowsCurve = new AW.h(0, 0, 0, 0), this._positiveCurve = new AW.h(0, 0, 0, 0), this._negativeCurve = new AW.h(0, 0, 0, 0), this._globalHue = (0, wW.i)(this, YW, 30), this._globalDensity = ((0, wW.i)(this, JW), (0, wW.i)(this, PW, 0)), this._globalSaturation = ((0, wW.i)(this, IW), (0, wW.i)(this, oW, 0)), this._globalExposure = ((0, wW.i)(this, fW), (0, wW.i)(this, QW, 0)), this._highlightsHue = ((0, wW.i)(this, rR), (0, wW.i)(this, cR, 30)), this._highlightsDensity = ((0, wW.i)(this, XW), (0, wW.i)(this, jR, 0)), this._highlightsSaturation = ((0, wW.i)(this, kR), (0, wW.i)(this, aR, 0)), this._highlightsExposure = ((0, wW.i)(this, sW), (0, wW.i)(this, dW, 0)), this._midtonesHue = ((0, wW.i)(this, pW), (0, wW.i)(this, hW, 30)), this._midtonesDensity = ((0, wW.i)(this, UW), (0, wW.i)(this, EW, 0)), this._midtonesSaturation = ((0, wW.i)(this, VW), (0, wW.i)(this, mR, 0)), this._midtonesExposure = ((0, wW.i)(this, xR), (0, wW.i)(this, vR, 0)), this._shadowsHue = ((0, wW.i)(this, KW), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
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
        _getColorGradingDataToRef(RW, MW, wW, CW, zR) {
          null != RW && (RW = WW._Clamp(RW, 0, 360), MW = WW._Clamp(MW, -100, 100), wW = WW._Clamp(wW, -100, 100), CW = WW._Clamp(CW, -100, 100), MW = WW._ApplyColorGradingSliderNonlinear(MW), MW *= .5, CW = WW._ApplyColorGradingSliderNonlinear(CW), MW < 0 && (MW *= -1, RW = (RW + 180) % 360), WW._FromHSBToRef(RW, MW, 50 + .25 * CW, zR), zR.scaleToRef(2, zR), zR.a = 1 + .01 * wW)
        }
        static _ApplyColorGradingSliderNonlinear(WW) {
          WW /= 100;
          let RW = Math.abs(WW);
          return RW = Math.pow(RW, 2), WW < 0 && (RW *= -1), RW *= 100, RW
        }
        static _FromHSBToRef(RW, MW, wW, CW) {
          let zR = WW._Clamp(RW, 0, 360);
          const AW = WW._Clamp(MW / 100, 0, 1),
            bR = WW._Clamp(wW / 100, 0, 1);
          if (0 === AW) CW.r = bR, CW.g = bR, CW.b = bR;
          else {
            zR /= 60;
            const WW = Math.floor(zR),
              RW = zR - WW,
              MW = bR * (1 - AW),
              wW = bR * (1 - AW * RW),
              yR = bR * (1 - AW * (1 - RW));
            switch (WW) {
              case 0:
                CW.r = bR, CW.g = yR, CW.b = MW;
                break;
              case 1:
                CW.r = wW, CW.g = bR, CW.b = MW;
                break;
              case 2:
                CW.r = MW, CW.g = bR, CW.b = yR;
                break;
              case 3:
                CW.r = MW, CW.g = wW, CW.b = bR;
                break;
              case 4:
                CW.r = yR, CW.g = MW, CW.b = bR;
                break;
              default:
                CW.r = bR, CW.g = MW, CW.b = wW
            }
          }
          CW.a = 1
        }
        static _Clamp(WW, RW, MW) {
          return Math.min(Math.max(WW, RW), MW)
        }
        clone() {
          return lW.d.Clone((() => new WW), this)
        }
        serialize() {
          return lW.d.Serialize(this)
        }
        _bind(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), WW && (WW.setFloat4(RW, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), WW.setFloat4(MW, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), WW.setFloat4(wW, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const AW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RW = [(0, CW.D)()], MW = [(0, CW.D)()], zR = [(0, CW.D)()], bR = [(0, CW.D)()], yR = [(0, CW.D)()], NW = [(0, CW.D)()], eW = [(0, CW.D)()], BW = [(0, CW.D)()], tR = [(0, CW.D)()], TW = [(0, CW.D)()], gR = [(0, CW.D)()], iR = [(0, CW.D)()], (0, wW.e)(null, null, RW, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: WW => "_globalHue" in WW,
            get: WW => WW._globalHue,
            set: (WW, RW) => {
              WW._globalHue = RW
            }
          },
          metadata: AW
        }, YW, JW), (0, wW.e)(null, null, MW, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "_globalDensity" in WW,
            get: WW => WW._globalDensity,
            set: (WW, RW) => {
              WW._globalDensity = RW
            }
          },
          metadata: AW
        }, PW, IW), (0, wW.e)(null, null, zR, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: WW => "_globalSaturation" in WW,
            get: WW => WW._globalSaturation,
            set: (WW, RW) => {
              WW._globalSaturation = RW
            }
          },
          metadata: AW
        }, oW, fW), (0, wW.e)(null, null, bR, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: WW => "_globalExposure" in WW,
            get: WW => WW._globalExposure,
            set: (WW, RW) => {
              WW._globalExposure = RW
            }
          },
          metadata: AW
        }, QW, rR), (0, wW.e)(null, null, yR, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: WW => "_highlightsHue" in WW,
            get: WW => WW._highlightsHue,
            set: (WW, RW) => {
              WW._highlightsHue = RW
            }
          },
          metadata: AW
        }, cR, XW), (0, wW.e)(null, null, NW, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "_highlightsDensity" in WW,
            get: WW => WW._highlightsDensity,
            set: (WW, RW) => {
              WW._highlightsDensity = RW
            }
          },
          metadata: AW
        }, jR, kR), (0, wW.e)(null, null, eW, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: WW => "_highlightsSaturation" in WW,
            get: WW => WW._highlightsSaturation,
            set: (WW, RW) => {
              WW._highlightsSaturation = RW
            }
          },
          metadata: AW
        }, aR, sW), (0, wW.e)(null, null, BW, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: WW => "_highlightsExposure" in WW,
            get: WW => WW._highlightsExposure,
            set: (WW, RW) => {
              WW._highlightsExposure = RW
            }
          },
          metadata: AW
        }, dW, pW), (0, wW.e)(null, null, tR, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: WW => "_midtonesHue" in WW,
            get: WW => WW._midtonesHue,
            set: (WW, RW) => {
              WW._midtonesHue = RW
            }
          },
          metadata: AW
        }, hW, UW), (0, wW.e)(null, null, TW, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "_midtonesDensity" in WW,
            get: WW => WW._midtonesDensity,
            set: (WW, RW) => {
              WW._midtonesDensity = RW
            }
          },
          metadata: AW
        }, EW, VW), (0, wW.e)(null, null, gR, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: WW => "_midtonesSaturation" in WW,
            get: WW => WW._midtonesSaturation,
            set: (WW, RW) => {
              WW._midtonesSaturation = RW
            }
          },
          metadata: AW
        }, mR, xR), (0, wW.e)(null, null, iR, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: WW => "_midtonesExposure" in WW,
            get: WW => WW._midtonesExposure,
            set: (WW, RW) => {
              WW._midtonesExposure = RW
            }
          },
          metadata: AW
        }, vR, KW), AW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: AW
        })
      })(), WW.PrepareUniforms = FW.e, WW
    })();

    function QW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      WW._bind(RW, MW, wW, CW)
    }
    var rR = MW(37520),
      cR = MW(37704),
      XW = MW(35361);
    let jR = (() => {
        var WW;
        let RW, MW, NW, TW, gR, iR, JW, FW, XW, jR, kR, aR, sW, dW, pW, hW, UW, EW, VW, mR, xR, vR, KW, uW, OW, nW, GW, LW, HW = [],
          DW = [],
          qR = [],
          ZW = [],
          SW = [],
          WR = [],
          RR = [],
          MR = [],
          wR = [],
          CR = [],
          zM = [],
          AR = [],
          bM = [],
          yM = [],
          NR = [],
          eR = [],
          BR = [],
          tM = [],
          TR = [],
          gM = [],
          iM = [],
          YR = [],
          JR = [],
          PR = [],
          IR = [],
          oR = [],
          lR = [],
          FR = [],
          fR = [],
          QR = [],
          rM = [],
          cM = [],
          XR = [],
          jM = [],
          kM = [],
          aM = [],
          sR = [],
          dR = [],
          pR = [],
          hR = [],
          UR = [],
          ER = [],
          VR = [],
          mM = [],
          xM = [],
          vM = [],
          KR = [],
          uR = [],
          OR = [],
          nR = [],
          GR = [],
          LR = [],
          HR = [],
          DR = [],
          qM = [],
          ZR = [];
        return WW = class {
          constructor() {
            this.colorCurves = (0, wW.i)(this, HW, new fW), this._colorCurvesEnabled = ((0, wW.i)(this, DW), (0, wW.i)(this, qR, !1)), this._colorGradingTexture = ((0, wW.i)(this, ZW), (0, wW.i)(this, SW, void 0)), this._colorGradingEnabled = ((0, wW.i)(this, WR), (0, wW.i)(this, RR, !1)), this._colorGradingWithGreenDepth = ((0, wW.i)(this, MR), (0, wW.i)(this, wR, !0)), this._colorGradingBGR = ((0, wW.i)(this, CR), (0, wW.i)(this, zM, !0)), this._exposure = ((0, wW.i)(this, AR), (0, wW.i)(this, bM, 1)), this._toneMappingEnabled = ((0, wW.i)(this, yM), (0, wW.i)(this, NR, !1)), this._toneMappingType = ((0, wW.i)(this, eR), (0, wW.i)(this, BR, WW.TONEMAPPING_STANDARD)), this._contrast = ((0, wW.i)(this, tM), (0, wW.i)(this, TR, 1)), this._whiteBalanceEnabled = ((0, wW.i)(this, gM), (0, wW.i)(this, iM, !1)), this._temperature = ((0, wW.i)(this, YR), (0, wW.i)(this, JR, 6500)), this._tint = ((0, wW.i)(this, PR), (0, wW.i)(this, IR, 0)), this._whiteBalanceMatrix = ((0, wW.i)(this, oR), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, wW.i)(this, lR, 0), this.vignetteCenterX = ((0, wW.i)(this, FR), (0, wW.i)(this, fR, 0)), this.vignetteCenterY = ((0, wW.i)(this, QR), (0, wW.i)(this, rM, 0)), this.vignetteWeight = ((0, wW.i)(this, cM), (0, wW.i)(this, XR, 1.5)), this.vignetteColor = ((0, wW.i)(this, jM), (0, wW.i)(this, kM, new AW.h(0, 0, 0, 0))), this.vignetteCameraFov = ((0, wW.i)(this, aM), (0, wW.i)(this, sR, .5)), this._vignetteBlendMode = ((0, wW.i)(this, dR), (0, wW.i)(this, pR, WW.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, wW.i)(this, hR), (0, wW.i)(this, UR, !1)), this._ditheringEnabled = ((0, wW.i)(this, ER), (0, wW.i)(this, VR, !1)), this._ditheringIntensity = ((0, wW.i)(this, mM), (0, wW.i)(this, xM, 1 / 255)), this._skipFinalColorClamp = ((0, wW.i)(this, vM), (0, wW.i)(this, KR, !1)), this._applyByPostProcess = ((0, wW.i)(this, uR), (0, wW.i)(this, OR, !1)), this._isEnabled = ((0, wW.i)(this, nR), (0, wW.i)(this, GR, !0)), this.outputTextureWidth = ((0, wW.i)(this, LR), (0, wW.i)(this, HR, 0)), this.outputTextureHeight = ((0, wW.i)(this, DR), (0, wW.i)(this, qM, 0)), this.onUpdateParameters = ((0, wW.i)(this, ZR), new zR.c)
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
            WW = Number.isNaN(WW) ? eW : Math.max(WW, eW), this._temperature !== WW && (this._temperature = WW, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(WW) {
            WW = (0, bR.Clamp)(WW, -150, BW), this._tint !== WW && (this._tint = WW, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(WW, RW) {
              const MW = YW(tR(WW, RW), oW),
                wW = PW.multiply(MW).multiply(IW);
              return yR.d.GetAsMatrix3x3(wW)
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
          prepareDefines(RW) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return RW.WHITEBALANCE = !1, RW.VIGNETTE = !1, RW.TONEMAPPING = 0, RW.CONTRAST = !1, RW.EXPOSURE = !1, RW.COLORCURVES = !1, RW.COLORGRADING = !1, RW.COLORGRADING3D = !1, RW.DITHER = !1, RW.IMAGEPROCESSING = !1, RW.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(RW.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (RW.WHITEBALANCE = this._whiteBalanceEnabled, RW.VIGNETTE = this.vignetteEnabled, RW.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === WW._VIGNETTEMODE_MULTIPLY, RW.VIGNETTEBLENDMODEOPAQUE = !RW.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case WW.TONEMAPPING_KHR_PBR_NEUTRAL:
                RW.TONEMAPPING = 3;
                break;
              case WW.TONEMAPPING_ACES:
                RW.TONEMAPPING = 2;
                break;
              default:
                RW.TONEMAPPING = 1
            } else RW.TONEMAPPING = 0;
            RW.CONTRAST = 1 !== this.contrast, RW.EXPOSURE = 1 !== this.exposure, RW.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, RW.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, RW.COLORGRADING ? RW.COLORGRADING3D = this.colorGradingTexture.is3D : RW.COLORGRADING3D = !1, RW.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, RW.SAMPLER3DBGRMAP = this.colorGradingBGR, RW.DITHER = this._ditheringEnabled, RW.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, RW.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, RW.IMAGEPROCESSING = RW.WHITEBALANCE || RW.VIGNETTE || !!RW.TONEMAPPING || RW.CONTRAST || RW.EXPOSURE || RW.COLORCURVES || RW.COLORGRADING || RW.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(WW, RW) {
            if (this._whiteBalanceEnabled && WW.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && QW(this.colorCurves, WW), this._vignetteEnabled || this._ditheringEnabled) {
              const MW = 1 / (this.outputTextureWidth || WW.mC().getRenderWidth()),
                wW = 1 / (this.outputTextureHeight || WW.mC().getRenderHeight());
              if (WW.setFloat2("vInverseScreenSize", MW, wW), this._ditheringEnabled && WW.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const CW = null != RW ? RW : wW / MW;
                let zR = Math.tan(.5 * this.vignetteCameraFov),
                  AW = zR * CW;
                const bR = Math.sqrt(AW * zR);
                AW = (0, rR.i)(AW, bR, this.vignetteStretch), zR = (0, rR.i)(zR, bR, this.vignetteStretch), WW.setFloat4("vignetteSettings1", AW, zR, -AW * this.vignetteCenterX, -zR * this.vignetteCenterY);
                const yR = -2 * this.vignetteWeight;
                WW.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, yR)
              }
            }
            if (WW.setFloat("exposureLinear", this.exposure), WW.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              WW.setTexture("txColorTransform", this.colorGradingTexture);
              const RW = this.colorGradingTexture.getSize().height;
              WW.setFloat4("colorTransformSettings", (RW - 1) / RW, .5 / RW, RW, this.colorGradingTexture.level)
            }
          }
          clone() {
            return lW.d.Clone((() => new WW), this)
          }
          serialize() {
            return lW.d.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const zR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          RW = [(0, CW.j)()], MW = [(0, CW.D)()], NW = [(0, CW.y)("colorGradingTexture")], TW = [(0, CW.D)()], gR = [(0, CW.D)()], iR = [(0, CW.D)()], JW = [(0, CW.D)()], FW = [(0, CW.D)()], XW = [(0, CW.D)()], jR = [(0, CW.D)()], kR = [(0, CW.D)()], aR = [(0, CW.D)()], sW = [(0, CW.D)()], dW = [(0, CW.D)()], pW = [(0, CW.D)()], hW = [(0, CW.D)()], UW = [(0, CW.D)()], EW = [(0, CW.o)()], VW = [(0, CW.D)()], mR = [(0, CW.D)()], xR = [(0, CW.D)()], vR = [(0, CW.D)()], KW = [(0, CW.D)()], uW = [(0, CW.D)()], OW = [(0, CW.D)()], nW = [(0, CW.D)()], GW = [(0, CW.D)()], LW = [(0, CW.D)()], (0, wW.e)(null, null, RW, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: WW => "colorCurves" in WW,
              get: WW => WW.colorCurves,
              set: (WW, RW) => {
                WW.colorCurves = RW
              }
            },
            metadata: zR
          }, HW, DW), (0, wW.e)(null, null, MW, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: WW => "_colorCurvesEnabled" in WW,
              get: WW => WW._colorCurvesEnabled,
              set: (WW, RW) => {
                WW._colorCurvesEnabled = RW
              }
            },
            metadata: zR
          }, qR, ZW), (0, wW.e)(null, null, NW, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "_colorGradingTexture" in WW,
              get: WW => WW._colorGradingTexture,
              set: (WW, RW) => {
                WW._colorGradingTexture = RW
              }
            },
            metadata: zR
          }, SW, WR), (0, wW.e)(null, null, TW, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: WW => "_colorGradingEnabled" in WW,
              get: WW => WW._colorGradingEnabled,
              set: (WW, RW) => {
                WW._colorGradingEnabled = RW
              }
            },
            metadata: zR
          }, RR, MR), (0, wW.e)(null, null, gR, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: WW => "_colorGradingWithGreenDepth" in WW,
              get: WW => WW._colorGradingWithGreenDepth,
              set: (WW, RW) => {
                WW._colorGradingWithGreenDepth = RW
              }
            },
            metadata: zR
          }, wR, CR), (0, wW.e)(null, null, iR, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: WW => "_colorGradingBGR" in WW,
              get: WW => WW._colorGradingBGR,
              set: (WW, RW) => {
                WW._colorGradingBGR = RW
              }
            },
            metadata: zR
          }, zM, AR), (0, wW.e)(null, null, JW, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: WW => "_exposure" in WW,
              get: WW => WW._exposure,
              set: (WW, RW) => {
                WW._exposure = RW
              }
            },
            metadata: zR
          }, bM, yM), (0, wW.e)(null, null, FW, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: WW => "_toneMappingEnabled" in WW,
              get: WW => WW._toneMappingEnabled,
              set: (WW, RW) => {
                WW._toneMappingEnabled = RW
              }
            },
            metadata: zR
          }, NR, eR), (0, wW.e)(null, null, XW, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: WW => "_toneMappingType" in WW,
              get: WW => WW._toneMappingType,
              set: (WW, RW) => {
                WW._toneMappingType = RW
              }
            },
            metadata: zR
          }, BR, tM), (0, wW.e)(null, null, jR, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: WW => "_contrast" in WW,
              get: WW => WW._contrast,
              set: (WW, RW) => {
                WW._contrast = RW
              }
            },
            metadata: zR
          }, TR, gM), (0, wW.e)(null, null, kR, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: WW => "_whiteBalanceEnabled" in WW,
              get: WW => WW._whiteBalanceEnabled,
              set: (WW, RW) => {
                WW._whiteBalanceEnabled = RW
              }
            },
            metadata: zR
          }, iM, YR), (0, wW.e)(null, null, aR, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: WW => "_temperature" in WW,
              get: WW => WW._temperature,
              set: (WW, RW) => {
                WW._temperature = RW
              }
            },
            metadata: zR
          }, JR, PR), (0, wW.e)(null, null, sW, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: WW => "_tint" in WW,
              get: WW => WW._tint,
              set: (WW, RW) => {
                WW._tint = RW
              }
            },
            metadata: zR
          }, IR, oR), (0, wW.e)(null, null, dW, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: WW => "vignetteStretch" in WW,
              get: WW => WW.vignetteStretch,
              set: (WW, RW) => {
                WW.vignetteStretch = RW
              }
            },
            metadata: zR
          }, lR, FR), (0, wW.e)(null, null, pW, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: WW => "vignetteCenterX" in WW,
              get: WW => WW.vignetteCenterX,
              set: (WW, RW) => {
                WW.vignetteCenterX = RW
              }
            },
            metadata: zR
          }, fR, QR), (0, wW.e)(null, null, hW, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: WW => "vignetteCenterY" in WW,
              get: WW => WW.vignetteCenterY,
              set: (WW, RW) => {
                WW.vignetteCenterY = RW
              }
            },
            metadata: zR
          }, rM, cM), (0, wW.e)(null, null, UW, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: WW => "vignetteWeight" in WW,
              get: WW => WW.vignetteWeight,
              set: (WW, RW) => {
                WW.vignetteWeight = RW
              }
            },
            metadata: zR
          }, XR, jM), (0, wW.e)(null, null, EW, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "vignetteColor" in WW,
              get: WW => WW.vignetteColor,
              set: (WW, RW) => {
                WW.vignetteColor = RW
              }
            },
            metadata: zR
          }, kM, aM), (0, wW.e)(null, null, VW, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: WW => "vignetteCameraFov" in WW,
              get: WW => WW.vignetteCameraFov,
              set: (WW, RW) => {
                WW.vignetteCameraFov = RW
              }
            },
            metadata: zR
          }, sR, dR), (0, wW.e)(null, null, mR, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: WW => "_vignetteBlendMode" in WW,
              get: WW => WW._vignetteBlendMode,
              set: (WW, RW) => {
                WW._vignetteBlendMode = RW
              }
            },
            metadata: zR
          }, pR, hR), (0, wW.e)(null, null, xR, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: WW => "_vignetteEnabled" in WW,
              get: WW => WW._vignetteEnabled,
              set: (WW, RW) => {
                WW._vignetteEnabled = RW
              }
            },
            metadata: zR
          }, UR, ER), (0, wW.e)(null, null, vR, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: WW => "_ditheringEnabled" in WW,
              get: WW => WW._ditheringEnabled,
              set: (WW, RW) => {
                WW._ditheringEnabled = RW
              }
            },
            metadata: zR
          }, VR, mM), (0, wW.e)(null, null, KW, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: WW => "_ditheringIntensity" in WW,
              get: WW => WW._ditheringIntensity,
              set: (WW, RW) => {
                WW._ditheringIntensity = RW
              }
            },
            metadata: zR
          }, xM, vM), (0, wW.e)(null, null, uW, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: WW => "_skipFinalColorClamp" in WW,
              get: WW => WW._skipFinalColorClamp,
              set: (WW, RW) => {
                WW._skipFinalColorClamp = RW
              }
            },
            metadata: zR
          }, KR, uR), (0, wW.e)(null, null, OW, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: WW => "_applyByPostProcess" in WW,
              get: WW => WW._applyByPostProcess,
              set: (WW, RW) => {
                WW._applyByPostProcess = RW
              }
            },
            metadata: zR
          }, OR, nR), (0, wW.e)(null, null, nW, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: WW => "_isEnabled" in WW,
              get: WW => WW._isEnabled,
              set: (WW, RW) => {
                WW._isEnabled = RW
              }
            },
            metadata: zR
          }, GR, LR), (0, wW.e)(null, null, GW, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: WW => "outputTextureWidth" in WW,
              get: WW => WW.outputTextureWidth,
              set: (WW, RW) => {
                WW.outputTextureWidth = RW
              }
            },
            metadata: zR
          }, HR, DR), (0, wW.e)(null, null, LW, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: WW => "outputTextureHeight" in WW,
              get: WW => WW.outputTextureHeight,
              set: (WW, RW) => {
                WW.outputTextureHeight = RW
              }
            },
            metadata: zR
          }, qM, ZR), zR && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zR
          })
        })(), WW.TONEMAPPING_STANDARD = 0, WW.TONEMAPPING_ACES = 1, WW.TONEMAPPING_KHR_PBR_NEUTRAL = 2, WW.PrepareUniforms = cR.f, WW.PrepareSamplers = cR.e, WW._VIGNETTEMODE_MULTIPLY = 0, WW._VIGNETTEMODE_OPAQUE = 1, WW
      })(),
      kR = !1;

    function aR(WW) {
      const RW = lW.d.Parse((() => new jR), WW, null, null);
      return void 0 !== WW.vignetteCentreX && (RW.vignetteCenterX = WW.vignetteCentreX), void 0 !== WW.vignetteCentreY && (RW.vignetteCenterY = WW.vignetteCentreY), RW
    }

    function sW() {
      kR || (kR = !0, jR.Parse = aR, lW.d._ImageProcessingConfigurationParser = aR, (0, XW.e)("BABYLON.ImageProcessingConfiguration", jR))
    }
  },
  37712: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR
    });
    var wW = MW(36721),
      CW = MW(37685);
    class zR {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wW = arguments.length > 3 ? arguments[3] : void 0,
          CW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          zR = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = WW, this._noUBO = !WW.supportsUniformBuffers || CW, this._dynamic = MW, this._name = wW ?? "no-name", this._data = RW || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === zR && this._engine._features.trackUbosInFrame || !0 === zR) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.aAW = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.aAW = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
        let RW;
        if (RW = WW <= 2 ? WW : 4, this._uniformLocationPointer % RW !== 0) {
          const WW = this._uniformLocationPointer;
          this._uniformLocationPointer += RW - this._uniformLocationPointer % RW;
          const MW = this._uniformLocationPointer - WW;
          for (let RW = 0; RW < MW; RW++) this._data.push(0)
        }
      }
      addUniform(WW, RW) {
        let MW, wW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (wW > 0 && "number" === typeof RW && (this._uniformArraySizes[WW] = {
            strideSize: RW,
            arraySize: wW
          }), void 0 === this._uniformLocations[WW] && (this._uniformNames.push(WW), !this._noUBO)) {
          if (wW > 0) {
            if (RW instanceof Array) throw "addUniform should not be use with Array in UBO: " + WW;
            if (this._fillAlignment(4), 16 == RW) RW *= wW;
            else {
              RW = RW * wW + (4 - RW) * wW
            }
            MW = [];
            for (let WW = 0; WW < RW; WW++) MW.push(0)
          } else {
            if (RW instanceof Array) MW = RW, RW = MW.length;
            else {
              MW = [];
              for (let WW = 0; WW < RW; WW++) MW.push(0)
            }
            this._fillAlignment(RW)
          }
          this._uniformSizes[WW] = RW, this._uniformLocations[WW] = this._uniformLocationPointer, this._uniformLocationPointer += RW;
          for (let WW = 0; WW < RW; WW++) this._data.push(MW[WW]);
          this._needSync = !0
        }
      }
      addMatrix(WW, RW) {
        this.addUniform(WW, Array.prototype.slice.call(RW.JNW()))
      }
      addFloat2(WW, RW, MW) {
        const wW = [RW, MW];
        this.addUniform(WW, wW)
      }
      addFloat3(WW, RW, MW, wW) {
        const CW = [RW, MW, wW];
        this.addUniform(WW, CW)
      }
      addColor3(WW, RW) {
        const MW = [RW.r, RW.g, RW.b];
        this.addUniform(WW, MW)
      }
      addColor4(WW, RW, MW) {
        const wW = [RW.r, RW.g, RW.b, MW];
        this.addUniform(WW, wW)
      }
      addVector3(WW, RW) {
        const MW = [RW.x, RW.y, RW.z];
        this.addUniform(WW, MW)
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
        let RW = 0;
        for (const MW in this._uniformLocations)
          if (WW.push(MW), 10 === ++RW) break;
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
      _buffersEqual(WW, RW) {
        for (let MW = 0; MW < WW.length; ++MW)
          if (WW[MW] !== RW[MW]) return !1;
        return !0
      }
      _copyBuffer(WW, RW) {
        for (let MW = 0; MW < WW.length; ++MW) RW[MW] = WW[MW]
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
        let RW = this._slotByOwner.get(WW);
        if (void 0 === RW && (RW = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(WW, RW), this._ownerCount++, WW._uniformBuffersWithOwnedSlot || (WW._uniformBuffersWithOwnedSlot = []), WW._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(RW, WW._uniformBuffersWithOwnedSlot)), this._slotGeneration[RW] === this._dataGeneration) return this._bufferIndex = RW, this._buffer = this._buffers[RW][0], this.bindUniformBuffer(), this._slotFrameId[RW] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const MW = this._buffers[RW][1];
        this._slotFrameId[RW] === this._currentFrameId && MW && !this._buffersEqual(this._bufferData, MW) && (RW = this._takeFreeSlot(!1)), this._bufferIndex = RW, this._buffer = this._buffers[RW][0], this.bindUniformBuffer();
        const wW = this._buffers[RW][1];
        wW && this._buffersEqual(this._bufferData, wW) || (wW && this._copyBuffer(this._bufferData, wW), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[RW] = this._currentFrameId, this._slotGeneration[RW] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(WW) {
        for (let MW = 0; MW < this._freeSlots.length; ++MW) {
          const RW = this._freeSlots[MW];
          if (this._slotFrameId[RW] !== this._currentFrameId) return WW && (this._freeSlots[MW] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), RW
        }
        this._rebuild();
        const RW = this._buffers.length - 1;
        return WW || this._freeSlots.push(RW), RW
      }
      _releaseOwnerSlot(WW) {
        const RW = this._slotByOwner?.get(WW);
        if (void 0 === RW) return;
        this._slotByOwner.delete(WW);
        const MW = this._ownerListsBySlot.get(RW);
        MW && (this._removeOwnerBacklink(MW), this._ownerListsBySlot.delete(RW)), this._ownerCount--, this._freeSlots.push(RW)
      }
      _removeOwnerBacklink(WW) {
        const RW = WW.indexOf(this); - 1 !== RW && (WW[RW] = WW[WW.length - 1], WW.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(WW, RW, MW) {
        this._checkNewFrame();
        let CW = this._uniformLocations[WW];
        if (void 0 === CW) {
          if (this._buffer) return void wW.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + WW);
          this.addUniform(WW, MW), CW = this._uniformLocations[WW]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let WW = 0; WW < MW; WW++) this._bufferData[CW + WW] = RW[WW];
          this._dataGeneration++
        } else {
          let WW = !1;
          for (let wW = 0; wW < MW; wW++)(16 === MW && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[CW + wW] !== Math.fround(RW[wW])) && (WW = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[CW + wW] = RW[wW]);
          this._needSync = this._needSync || WW, WW && this._dataGeneration++
        }
      }
      updateUniformArray(WW, RW, MW) {
        this._checkNewFrame();
        const zR = this._uniformLocations[WW];
        if (void 0 === zR) return void wW.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const AW = this._uniformArraySizes[WW];
        if (this._dynamic) {
          for (let WW = 0; WW < MW; WW++) this._bufferData[zR + WW] = RW[WW];
          this._dataGeneration++
        } else {
          let WW = !1,
            wW = 0,
            bR = 0;
          for (let yR = 0; yR < MW; yR++)
            if (this._bufferData[zR + 4 * bR + wW] !== CW.j.FloatRound(RW[yR]) && (WW = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[zR + 4 * bR + wW] = RW[yR]), wW++, wW === AW.strideSize) {
              for (; wW < 4; wW++) this._bufferData[zR + 4 * bR + wW] = 0;
              wW = 0, bR++
            } this._needSync = this._needSync || WW, WW && this._dataGeneration++
        }
      }
      _cacheMatrix(WW, RW) {
        this._checkNewFrame();
        const MW = this._valueCache[WW],
          wW = RW.updateFlag;
        return (void 0 === MW || MW !== wW) && (this._valueCache[WW] = wW, !0)
      }
      _updateMatrix3x3ForUniform(WW, RW) {
        for (let MW = 0; MW < 3; MW++) zR._TempBuffer[4 * MW] = RW[3 * MW], zR._TempBuffer[4 * MW + 1] = RW[3 * MW + 1], zR._TempBuffer[4 * MW + 2] = RW[3 * MW + 2], zR._TempBuffer[4 * MW + 3] = 0;
        this.updateUniform(WW, zR._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(WW, RW) {
        this._currentEffect.setMatrix3x3(WW, RW)
      }
      _updateMatrix2x2ForEffect(WW, RW) {
        this._currentEffect.setMatrix2x2(WW, RW)
      }
      _updateMatrix2x2ForUniform(WW, RW) {
        for (let MW = 0; MW < 2; MW++) zR._TempBuffer[4 * MW] = RW[2 * MW], zR._TempBuffer[4 * MW + 1] = RW[2 * MW + 1], zR._TempBuffer[4 * MW + 2] = 0, zR._TempBuffer[4 * MW + 3] = 0;
        this.updateUniform(WW, zR._TempBuffer, 8)
      }
      _updateFloatForEffect(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(WW + MW, RW)
      }
      _updateFloatForUniform(WW, RW) {
        zR._TempBuffer[0] = RW, this.updateUniform(WW, zR._TempBuffer, 1)
      }
      _updateFloat2ForEffect(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(WW + wW, RW, MW)
      }
      _updateFloat2ForUniform(WW, RW, MW) {
        zR._TempBuffer[0] = RW, zR._TempBuffer[1] = MW, this.updateUniform(WW, zR._TempBuffer, 2)
      }
      _updateFloat3ForEffect(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(WW + CW, RW, MW, wW)
      }
      _updateFloat3ForUniform(WW, RW, MW, wW) {
        zR._TempBuffer[0] = RW, zR._TempBuffer[1] = MW, zR._TempBuffer[2] = wW, this.updateUniform(WW, zR._TempBuffer, 3)
      }
      _updateFloat4ForEffect(WW, RW, MW, wW, CW) {
        let zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(WW + zR, RW, MW, wW, CW)
      }
      _updateFloat4ForUniform(WW, RW, MW, wW, CW) {
        zR._TempBuffer[0] = RW, zR._TempBuffer[1] = MW, zR._TempBuffer[2] = wW, zR._TempBuffer[3] = CW, this.updateUniform(WW, zR._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[WW]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(WW + MW, RW);
            break;
          case 3:
            this._currentEffect.setFloatArray3(WW + MW, RW);
            break;
          case 4:
            this._currentEffect.setFloatArray4(WW + MW, RW);
            break;
          default:
            this._currentEffect.setFloatArray(WW + MW, RW)
        }
      }
      _updateFloatArrayForUniform(WW, RW) {
        this.updateUniformArray(WW, RW, RW.length)
      }
      _updateArrayForEffect(WW, RW) {
        this._currentEffect.setArray(WW, RW)
      }
      _updateArrayForUniform(WW, RW) {
        this.updateUniformArray(WW, RW, RW.length)
      }
      _updateIntArrayForEffect(WW, RW) {
        this._currentEffect.setIntArray(WW, RW)
      }
      _updateIntArrayForUniform(WW, RW) {
        zR._TempBufferInt32View.set(RW), this.updateUniformArray(WW, zR._TempBuffer, RW.length)
      }
      _updateUIntArrayForEffect(WW, RW) {
        this._currentEffect.setUIntArray(WW, RW)
      }
      _updateUIntArrayForUniform(WW, RW) {
        zR._TempBufferUInt32View.set(RW), this.updateUniformArray(WW, zR._TempBuffer, RW.length)
      }
      _updateMatrixForEffect(WW, RW) {
        this._currentEffect.setMatrix(WW, RW)
      }
      _updateMatrixForUniform(WW, RW) {
        this._cacheMatrix(WW, RW) && this.updateUniform(WW, RW.JNW(), 16)
      }
      _updateMatricesForEffect(WW, RW) {
        this._currentEffect.setMatrices(WW, RW)
      }
      _updateMatricesForUniform(WW, RW) {
        this.updateUniform(WW, RW, RW.length)
      }
      _updateVector3ForEffect(WW, RW) {
        this._currentEffect.setVector3(WW, RW)
      }
      _updateVector3ForUniform(WW, RW) {
        zR._TempBuffer[0] = RW.x, zR._TempBuffer[1] = RW.y, zR._TempBuffer[2] = RW.z, this.updateUniform(WW, zR._TempBuffer, 3)
      }
      _updateVector4ForEffect(WW, RW) {
        this._currentEffect.setVector4(WW, RW)
      }
      _updateVector4ForUniform(WW, RW) {
        zR._TempBuffer[0] = RW.x, zR._TempBuffer[1] = RW.y, zR._TempBuffer[2] = RW.z, zR._TempBuffer[3] = RW.w, this.updateUniform(WW, zR._TempBuffer, 4)
      }
      _updateColor3ForEffect(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(WW + MW, RW)
      }
      _updateColor3ForUniform(WW, RW) {
        zR._TempBuffer[0] = RW.r, zR._TempBuffer[1] = RW.g, zR._TempBuffer[2] = RW.b, this.updateUniform(WW, zR._TempBuffer, 3)
      }
      _updateColor4ForEffect(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(WW + wW, RW, MW)
      }
      _updateDirectColor4ForEffect(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(WW + MW, RW)
      }
      _updateColor4ForUniform(WW, RW, MW) {
        zR._TempBuffer[0] = RW.r, zR._TempBuffer[1] = RW.g, zR._TempBuffer[2] = RW.b, zR._TempBuffer[3] = MW, this.updateUniform(WW, zR._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(WW, RW) {
        zR._TempBuffer[0] = RW.r, zR._TempBuffer[1] = RW.g, zR._TempBuffer[2] = RW.b, zR._TempBuffer[3] = RW.a, this.updateUniform(WW, zR._TempBuffer, 4)
      }
      _updateIntForEffect(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(WW + MW, RW)
      }
      _updateIntForUniform(WW, RW) {
        zR._TempBufferInt32View[0] = RW, this.updateUniform(WW, zR._TempBuffer, 1)
      }
      _updateInt2ForEffect(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(WW + wW, RW, MW)
      }
      _updateInt2ForUniform(WW, RW, MW) {
        zR._TempBufferInt32View[0] = RW, zR._TempBufferInt32View[1] = MW, this.updateUniform(WW, zR._TempBuffer, 2)
      }
      _updateInt3ForEffect(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(WW + CW, RW, MW, wW)
      }
      _updateInt3ForUniform(WW, RW, MW, wW) {
        zR._TempBufferInt32View[0] = RW, zR._TempBufferInt32View[1] = MW, zR._TempBufferInt32View[2] = wW, this.updateUniform(WW, zR._TempBuffer, 3)
      }
      _updateInt4ForEffect(WW, RW, MW, wW, CW) {
        let zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(WW + zR, RW, MW, wW, CW)
      }
      _updateInt4ForUniform(WW, RW, MW, wW, CW) {
        zR._TempBufferInt32View[0] = RW, zR._TempBufferInt32View[1] = MW, zR._TempBufferInt32View[2] = wW, zR._TempBufferInt32View[3] = CW, this.updateUniform(WW, zR._TempBuffer, 4)
      }
      _updateUIntForEffect(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(WW + MW, RW)
      }
      _updateUIntForUniform(WW, RW) {
        zR._TempBufferUInt32View[0] = RW, this.updateUniform(WW, zR._TempBuffer, 1)
      }
      _updateUInt2ForEffect(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(WW + wW, RW, MW)
      }
      _updateUInt2ForUniform(WW, RW, MW) {
        zR._TempBufferUInt32View[0] = RW, zR._TempBufferUInt32View[1] = MW, this.updateUniform(WW, zR._TempBuffer, 2)
      }
      _updateUInt3ForEffect(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(WW + CW, RW, MW, wW)
      }
      _updateUInt3ForUniform(WW, RW, MW, wW) {
        zR._TempBufferUInt32View[0] = RW, zR._TempBufferUInt32View[1] = MW, zR._TempBufferUInt32View[2] = wW, this.updateUniform(WW, zR._TempBuffer, 3)
      }
      _updateUInt4ForEffect(WW, RW, MW, wW, CW) {
        let zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(WW + zR, RW, MW, wW, CW)
      }
      _updateUInt4ForUniform(WW, RW, MW, wW, CW) {
        zR._TempBufferUInt32View[0] = RW, zR._TempBufferUInt32View[1] = MW, zR._TempBufferUInt32View[2] = wW, zR._TempBufferUInt32View[3] = CW, this.updateUniform(WW, zR._TempBuffer, 4)
      }
      setTexture(WW, RW) {
        this._currentEffect.setTexture(WW, RW)
      }
      setTextureArray(WW, RW) {
        this._currentEffect.setTextureArray(WW, RW)
      }
      bindTexture(WW, RW) {
        this._currentEffect._bindTexture(WW, RW)
      }
      updateUniformDirectly(WW, RW) {
        this.updateUniform(WW, RW, RW.length), this.update()
      }
      bindToEffect(WW, RW) {
        this._currentEffect = WW, this._currentEffectName = RW
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(WW) {
        if (!this._buffers) return this._buffer === WW;
        for (let RW = 0; RW < this._buffers.length; ++RW) {
          if (this._buffers[RW][0] === WW) return this._bufferIndex = RW, this._buffer = WW, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[RW][1] && (this._bufferData.set(this._buffers[RW][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(WW) {
        return void 0 !== this._uniformLocations[WW]
      }
      dispose() {
        if (this._noUBO) return;
        const WW = this._engine._uniformBuffers,
          RW = WW.indexOf(this);
        if (-1 !== RW && (WW[RW] = WW[WW.length - 1], WW.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let WW = 0; WW < this._buffers.length; ++WW) {
            const RW = this._buffers[WW][0];
            this._engine._releaseBuffer(RW)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    zR._MAX_UNIFORM_SIZE = 256, zR._TempBuffer = new Float32Array(zR._MAX_UNIFORM_SIZE), zR._TempBufferInt32View = new Int32Array(zR._TempBuffer.buffer), zR._TempBufferUInt32View = new Uint32Array(zR._TempBuffer.buffer)
  },
  37509: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW
    });
    var wW = MW(37517);
    class CW extends wW.d {
      constructor(WW) {
        super(), this._buffer = WW
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  37599: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => yR,
      i: () => NW
    });
    const wW = "__bjs_serializable__",
      CW = new WeakMap;

    function zR(WW, RW) {
      return Object.prototype.hasOwnProperty.call(WW, RW)
    }
    const AW = function() {
      let WW = Symbol.metadata;
      return WW || (WW = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: WW
      })), WW
    }();

    function bR(WW) {
      return "function" === typeof WW ? WW : WW?.constructor
    }

    function yR(WW) {
      if (!WW) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(AW)}) polyfill must run before decorated classes are evaluated.`);
      return zR(WW, wW) || (WW[wW] = {}), WW[wW]
    }

    function NW(WW) {
      const RW = bR(WW),
        MW = RW ? RW[AW] : void 0;
      if (!MW) return {};
      const yR = CW.get(MW);
      if (yR) return yR;
      const NW = {},
        eW = [];
      let BW = MW;
      for (; BW;) eW.push(BW), BW = Object.getPrototypeOf(BW);
      for (const CW of eW)
        if (zR(CW, wW)) {
          const WW = CW[wW];
          for (const RW in WW) NW[RW] = WW[RW]
        } return CW.set(MW, NW), NW
    }
  },
  37593: (WW, RW, MW) => {
    MW.d(RW, {
      B: () => BW,
      D: () => AW,
      d: () => IW,
      h: () => zR,
      i: () => PW,
      j: () => TW,
      m: () => yR,
      o: () => gR,
      q: () => NW,
      r: () => YW,
      t: () => tR,
      u: () => iR,
      y: () => bR,
      z: () => eW
    });
    var wW = MW(37599);

    function CW(WW, RW) {
      return (MW, CW) => {
        if (!CW.metadata) return;
        const zR = String(CW.name),
          AW = (0, wW.e)(CW.metadata);
        AW[zR] || (AW[zR] = {
          type: WW,
          sourceName: RW
        })
      }
    }

    function zR(WW) {
      return function(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (MW, wW) => {
          const CW = RW || "_" + String(wW.name);
          return {
            init(WW) {
              return void 0 === WW && CW in this || (this[CW] = WW), WW
            },
            get() {
              return this[CW]
            },
            set(RW) {
              "function" === typeof this[CW]?.equals && this[CW].equals(RW) || this[CW] !== RW && (this[CW] = RW, this[WW]())
            }
          }
        }
      }(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function AW(WW) {
      return CW(0, WW)
    }

    function bR(WW) {
      return CW(1, WW)
    }

    function yR(WW) {
      return CW(2, WW)
    }

    function NW(WW) {
      return CW(3, WW)
    }

    function eW(WW) {
      return CW(4, WW)
    }

    function BW(WW) {
      return CW(5, WW)
    }

    function tR(WW) {
      return CW(6, WW)
    }

    function TW(WW) {
      return CW(7, WW)
    }

    function gR(WW) {
      return CW(8, WW)
    }

    function iR(WW) {
      return CW(10, WW)
    }

    function YW(WW) {
      return CW(12, WW)
    }

    function JW(WW, RW, MW) {
      const wW = String(RW.name);
      let CW = null;
      const zR = function() {
        if (null === CW) {
          CW = WW, "undefined" !== typeof _native && _native[wW] && (CW = MW(_native[wW], WW));
          const AW = this && (RW.static ? this : Object.getPrototypeOf(this));
          AW?.[wW] === zR && (AW[wW] = CW)
        }
        for (var AW = arguments.length, bR = new Array(AW), yR = 0; yR < AW; yR++) bR[yR] = arguments[yR];
        return CW.apply(this, bR)
      };
      return zR
    }

    function PW(WW, RW) {
      return JW(WW, RW, (WW => WW))
    }

    function IW(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (MW, wW) => {
        const CW = RW || "_" + String(wW.name);
        return {
          get() {
            return this[CW]?.value
          },
          set(RW) {
            "function" === typeof this[CW]?.value?.equals && this[CW].value.equals(RW) || this[CW].value !== RW && (this[CW].value = RW, this[WW]())
          }
        }
      }
    }
    PW.filter = function(WW) {
      return (RW, MW) => JW(RW, MW, ((RW, MW) => function() {
        for (var wW = arguments.length, CW = new Array(wW), zR = 0; zR < wW; zR++) CW[zR] = arguments[zR];
        return WW(...CW) ? RW(...CW) : MW.apply(this, CW)
      }))
    }
  },
  37615: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => NW
    });
    var wW = MW(37470),
      CW = MW(37621),
      zR = MW(35376),
      AW = MW(35324),
      bR = MW(37599);
    const yR = function(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const zR = WW();
      CW.d && CW.d.HasTags(RW) && CW.d.AddTagsTo(zR, CW.d.GetTags(RW, !0));
      const AW = (0, bR.i)(zR),
        yR = {};
      for (const CW in AW) {
        const WW = AW[CW],
          bR = RW[CW],
          eW = WW.type;
        if (void 0 !== bR && null !== bR && ("uniqueId" !== CW || NW.AllowLoadingUniqueId)) switch (eW) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof bR.slice ? zR[CW] = bR.slice() : zR[CW] = bR;
            break;
          case 1:
            wW.cloneTexturesOnlyOnce && yR[bR.uniqueId] ? zR[CW] = yR[bR.uniqueId] : (zR[CW] = MW || bR.isRenderTarget ? bR : bR.clone(), yR[bR.uniqueId] = zR[CW]);
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
            zR[CW] = MW ? bR : bR.clone()
        }
      }
      return zR
    };
    class NW {
      static AppendSerializedAnimations(WW, RW) {
        if (WW.animations) {
          RW.animations = [];
          for (let MW = 0; MW < WW.animations.length; MW++) {
            const wW = WW.animations[MW];
            RW.animations.push(wW.serialize())
          }
        }
      }
      static Serialize(WW, RW) {
        RW || (RW = {}), CW.d && (RW.tags = CW.d.GetTags(WW));
        const MW = (0, bR.i)(WW);
        for (const wW in MW) {
          const CW = MW[wW],
            zR = CW.sourceName || wW,
            AW = CW.type,
            bR = WW[wW];
          if (void 0 !== bR && null !== bR && ("uniqueId" !== wW || NW.AllowLoadingUniqueId)) switch (AW) {
            case 0:
              Array.isArray(bR) ? RW[zR] = bR.slice() : RW[zR] = bR;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              RW[zR] = bR.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              RW[zR] = bR.JNW();
              break;
            case 6:
            case 11:
              RW[zR] = bR.id
          }
        }
        return RW
      }
      static ParseProperties(WW, RW, MW, wW) {
        wW || (wW = "");
        const CW = (0, bR.i)(RW);
        for (const bR in CW) {
          const yR = CW[bR],
            eW = WW[yR.sourceName || bR],
            BW = yR.type;
          if (void 0 !== eW && null !== eW && ("uniqueId" !== bR || NW.AllowLoadingUniqueId)) {
            const WW = RW;
            switch (BW) {
              case 0:
                WW[bR] = eW;
                break;
              case 1:
                MW && (WW[bR] = NW._TextureParser(eW, MW, wW));
                break;
              case 2:
                WW[bR] = zR.d.FromArray(eW);
                break;
              case 3:
                WW[bR] = NW._FresnelParametersParser(eW);
                break;
              case 4:
                WW[bR] = AW.n.FromArray(eW);
                break;
              case 5:
                WW[bR] = AW.q.FromArray(eW);
                break;
              case 6:
                MW && (WW[bR] = MW.getLastMeshById(eW));
                break;
              case 7:
                WW[bR] = NW._ColorCurvesParser(eW);
                break;
              case 8:
                WW[bR] = zR.h.FromArray(eW);
                break;
              case 9:
                WW[bR] = NW._ImageProcessingConfigurationParser(eW);
                break;
              case 10:
                WW[bR] = AW.e.FromArray(eW);
                break;
              case 11:
                MW && (WW[bR] = MW.getCameraById(eW));
                break;
              case 12:
                WW[bR] = AW.d.FromArray(eW);
                break;
              case 13:
                WW[bR] = AW.s.FromArray(eW)
            }
          }
        }
      }
      static Parse(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const zR = WW();
        return CW.d && CW.d.AddTagsTo(zR, RW.tags), NW.ParseProperties(RW, zR, MW, wW), zR
      }
      static Clone(WW, RW) {
        return yR(WW, RW, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(WW, RW) {
        return yR(WW, RW, !0)
      }
    }
    NW.AllowLoadingUniqueId = !1, NW._ImageProcessingConfigurationParser = WW => {
      throw (0, wW.g)("ImageProcessingConfiguration")
    }, NW._FresnelParametersParser = WW => {
      throw (0, wW.g)("FresnelParameters")
    }, NW._ColorCurvesParser = WW => {
      throw (0, wW.g)("ColorCurves")
    }, NW._TextureParser = (WW, RW, MW) => {
      throw (0, wW.g)("Texture")
    }
  },
  37541: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => CW
    });
    var wW = MW(37488);
    class CW {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = CW.Enabled, this._lastSecValueCount++
      }
      addCount(WW, RW) {
        CW.Enabled && (this._current += WW, this._hasCurrentValue = !0, RW && this._fetchResult())
      }
      beginMonitoring() {
        CW.Enabled && (this._startMonitoringTime = wW.d.Now)
      }
      endMonitoring() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!CW.Enabled) return;
        WW && this.fetchNewFrame();
        const RW = wW.d.Now;
        this._current = RW - this._startMonitoringTime, this._hasCurrentValue = !0, WW && this._fetchResult()
      }
      Lk() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const WW = wW.d.Now;
        WW - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = WW, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    CW.Enabled = !0
  },
  37693: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW,
      i: () => wW
    });
    class wW {
      constructor(WW) {
        this.length = 0, this.data = new Array(WW), this._id = wW._GlobalId++
      }
      push(WW) {
        this.data[this.length++] = WW, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(WW) {
        for (let RW = 0; RW < this.length; RW++) WW(this.data[RW])
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
          for (let RW = 0; RW < WW.length; RW++) this.data[this.length++] = (WW.data || WW)[RW]
        }
      }
      indexOf(WW) {
        const RW = this.data.indexOf(WW);
        return RW >= this.length ? -1 : RW
      }
      contains(WW) {
        return -1 !== this.indexOf(WW)
      }
    }
    wW._GlobalId = 0;
    class CW extends wW {
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
          for (let RW = 0; RW < WW.length; RW++) {
            const MW = (WW.data || WW)[RW];
            this.pushNoDuplicate(MW)
          }
        }
      }
    }
  },
  37621: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => CW
    });
    class wW {
      static Eval(WW, RW) {
        return "true" === (WW = WW.match(/\([^()]*\)/g) ? WW.replace(/\([^()]*\)/g, (WW => (WW = WW.slice(1, WW.length - 1), wW._HandleParenthesisContent(WW, RW)))) : wW._HandleParenthesisContent(WW, RW)) || "false" !== WW && wW.Eval(WW, RW)
      }
      static _HandleParenthesisContent(WW, RW) {
        let MW;
        RW = RW || (WW => "true" === WW);
        const CW = WW.split("||");
        for (const zR in CW)
          if (Object.prototype.hasOwnProperty.call(CW, zR)) {
            let WW = wW._SimplifyNegation(CW[zR].trim());
            const AW = WW.split("&&");
            if (AW.length > 1)
              for (let CW = 0; CW < AW.length; ++CW) {
                const zR = wW._SimplifyNegation(AW[CW].trim());
                if (MW = "true" !== zR && "false" !== zR ? "!" === zR[0] ? !RW(zR.substring(1)) : RW(zR) : "true" === zR, !MW) {
                  WW = "false";
                  break
                }
              }
            if (MW || "true" === WW) {
              MW = !0;
              break
            }
            MW = "true" !== WW && "false" !== WW ? "!" === WW[0] ? !RW(WW.substring(1)) : RW(WW) : "true" === WW
          } return MW ? "true" : "false"
      }
      static _SimplifyNegation(WW) {
        return "!true" === (WW = (WW = WW.replace(/^[\s!]+/, (WW => (WW = WW.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? WW = "false" : "!false" === WW && (WW = "true"), WW
      }
    }
    class CW {
      static EnableFor(WW) {
        WW._tags = WW._tags || {}, WW.hasTags = () => CW.HasTags(WW), WW.addTags = RW => CW.AddTagsTo(WW, RW), WW.removeTags = RW => CW.RemoveTagsFrom(WW, RW), WW.matchesTagsQuery = RW => CW.MatchesQuery(WW, RW)
      }
      static DisableFor(WW) {
        delete WW._tags, delete WW.hasTags, delete WW.addTags, delete WW.removeTags, delete WW.matchesTagsQuery
      }
      static HasTags(WW) {
        if (!WW._tags) return !1;
        const RW = WW._tags;
        for (const MW in RW)
          if (Object.prototype.hasOwnProperty.call(RW, MW)) return !0;
        return !1
      }
      static GetTags(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!WW._tags) return null;
        if (RW) {
          const RW = [];
          for (const MW in WW._tags) Object.prototype.hasOwnProperty.call(WW._tags, MW) && !0 === WW._tags[MW] && RW.push(MW);
          return RW.join(" ")
        }
        return WW._tags
      }
      static AddTagsTo(WW, RW) {
        if (!RW) return;
        if ("string" !== typeof RW) return;
        const MW = RW.split(" ");
        for (const wW of MW) CW._AddTagTo(WW, wW)
      }
      static _AddTagTo(WW, RW) {
        "" !== (RW = RW.trim()) && "true" !== RW && "false" !== RW && (RW.match(/[\s]/) || RW.match(/^([!]|([|]|[&]){2})/) || (CW.EnableFor(WW), WW._tags[RW] = !0))
      }
      static RemoveTagsFrom(WW, RW) {
        if (!CW.HasTags(WW)) return;
        const MW = RW.split(" ");
        for (const wW in MW) CW._RemoveTagFrom(WW, MW[wW])
      }
      static _RemoveTagFrom(WW, RW) {
        delete WW._tags[RW]
      }
      static MatchesQuery(WW, RW) {
        return void 0 === RW || ("" === RW ? CW.HasTags(WW) : wW.Eval(RW, (RW => CW.HasTags(WW) && WW._tags[RW])))
      }
    }
  },
  37728: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => zR
    });
    var wW = MW(37722),
      CW = MW(35346);
    class zR {
      constructor(WW) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new CW.c, this._scene = WW
      }
      _prepareBuffers() {
        if (this._vertexBuffers[wW.j.PositionKind]) return;
        const WW = [];
        WW.push(1, 1), WW.push(-1, 1), WW.push(-1, -1), WW.push(1, -1), this._vertexBuffers[wW.j.PositionKind] = new wW.j(this._scene.mC(), WW, wW.j.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const WW = [];
        WW.push(0), WW.push(1), WW.push(2), WW.push(0), WW.push(2), WW.push(3), this._indexBuffer = this._scene.mC().createIndexBuffer(WW)
      }
      _getActivePostProcesses(WW) {
        const RW = this._activePostProcesses;
        RW.length = 0;
        for (let MW = 0; MW < WW.length; MW++) {
          const wW = WW[MW];
          wW && RW.push(wW)
        }
        return RW
      }
      _rebuild() {
        const WW = this._vertexBuffers[wW.j.PositionKind];
        WW && (WW._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const MW = this._scene.activeCamera;
        return !!MW && (RW = RW || this._getActivePostProcesses(MW._postProcesses), !(!RW || 0 === RW.length || !this._scene.postProcessesEnabled) && (RW[0].activate(MW, WW, null !== RW && void 0 !== RW), !0))
      }
      directRender(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          zR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          AW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : WW.length;
        const bR = this._scene.mC();
        for (let yR = 0; yR < AW; yR++) {
          yR < WW.length - 1 ? WW[yR + 1].activate(this._scene.activeCamera || this._scene, RW?.texture) : (RW ? bR.bindFramebuffer(RW, wW, void 0, void 0, MW, CW) : zR || bR.restoreDefaultFramebuffer(), bR._debugInsertMarker?.(`post process ${WW[yR].name} output`));
          const AW = WW[yR],
            NW = AW.apply();
          NW && (AW.onBeforeRenderObservable.notifyObservers(NW), this._prepareBuffers(), bR.bindBuffers(this._vertexBuffers, this._indexBuffer, NW), bR.drawElementsType(0, 0, 6), AW.onAfterRenderObservable.notifyObservers(NW))
        }
        bR.setDepthBuffer(!0), bR.setDepthWrite(!0)
      }
      _finalizeFrame(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const zR = this._scene.activeCamera;
        if (!zR) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (wW = wW || this._getActivePostProcesses(zR._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const AW = this._scene.mC();
        for (let bR = 0, yR = wW.length; bR < yR; bR++) {
          const NW = wW[bR];
          if (bR < yR - 1 ? NW._outputTexture = wW[bR + 1].activate(zR, RW?.texture) : (RW ? (AW.bindFramebuffer(RW, MW, void 0, void 0, CW), NW._outputTexture = RW) : (AW.restoreDefaultFramebuffer(), NW._outputTexture = null), AW._debugInsertMarker?.(`post process ${wW[bR].name} output`)), WW) break;
          const eW = NW.apply();
          eW && (NW.onBeforeRenderObservable.notifyObservers(eW), this._prepareBuffers(), AW.bindBuffers(this._vertexBuffers, this._indexBuffer, eW), AW.drawElementsType(0, 0, 6), NW.onAfterRenderObservable.notifyObservers(eW))
        }
        AW.setDepthBuffer(!0), AW.setDepthWrite(!0), AW.setAlphaMode(0)
      }
      dispose() {
        const WW = this._vertexBuffers[wW.j.PositionKind];
        WW && (WW.dispose(), this._vertexBuffers[wW.j.PositionKind] = null), this._indexBuffer && (this._scene.mC()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  37742: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR
    });
    var wW = MW(37693),
      CW = MW(35324);
    class zR {
      set opaqueSortCompareFn(WW) {
        this._opaqueSortCompareFn = WW || zR.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(WW) {
        this._alphaTestSortCompareFn = WW || zR.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(WW) {
        this._transparentSortCompareFn = WW || zR.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          zR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = WW, this._opaqueSubMeshes = new wW.i(256), this._transparentSubMeshes = new wW.i(256), this._alphaTestSubMeshes = new wW.i(256), this._depthOnlySubMeshes = new wW.i(256), this._particleSystems = new wW.i(256), this._spriteManagers = new wW.i(256), this._empty = !0, this._edgesRenderers = new wW.e(16), this.disableDepthPrePass = !1, this._scene = RW, this.opaqueSortCompareFn = MW, this.alphaTestSortCompareFn = CW, this.transparentSortCompareFn = zR
      }
      render(WW, RW, MW, wW) {
        let CW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          zR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          AW = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          bR = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          yR = arguments.length > 8 ? arguments[8] : void 0;
        if (WW) return void WW(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const NW = this._scene.mC();
        CW && 0 !== this._depthOnlySubMeshes.length && (NW.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), NW.setColorWrite(!0)), zR && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), AW && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const eW = NW.getStencilBuffer();
        if (NW.setStencilBuffer(!1), RW && this._renderSprites(), MW && this._renderParticles(wW), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), bR && (yR || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (NW.setStencilBuffer(eW), yR) yR(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const WW = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            WW.length && this._renderTransparent(WW)
          } else this._renderTransparent(this._transparentSubMeshes);
          NW.setAlphaMode(0)
        }
        if (NW.setStencilBuffer(!1), zR && this._edgesRenderers.length) {
          for (let WW = 0; WW < this._edgesRenderers.length; WW++) this._edgesRenderers.data[WW].render();
          NW.setAlphaMode(0)
        }
        NW.setStencilBuffer(eW)
      }
      _renderOpaqueSorted(WW) {
        zR._RenderSorted(WW, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(WW) {
        zR._RenderSorted(WW, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(WW) {
        zR._RenderSorted(WW, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(WW, RW, MW, wW, AW) {
        let bR, yR = 0;
        const NW = MW ? MW.globalPosition : zR._ZeroVector;
        if (wW && RW !== zR.PainterSortCompare)
          for (; yR < WW.length; yR++) bR = WW.data[yR], bR._alphaIndex = bR.getMesh().alphaIndex, bR._distanceToCamera = CW.q.Distance(bR.LRW().VNW.centerWorld, NW);
        const eW = WW.length === WW.data.length ? WW.data : WW.data.slice(0, WW.length);
        RW && eW.sort(RW);
        const BW = eW[0].getMesh().QRW();
        for (yR = 0; yR < eW.length; yR++) {
          if (bR = eW[yR], BW._activeMeshesFrozenButKeepClipping && !bR.isInFrustum(BW._frustumPlanes)) continue;
          let WW = !1;
          if (wW) {
            const RW = bR.Ow();
            if (RW && RW.needDepthPrePass && !AW) {
              WW = !0;
              const MW = RW.QRW().mC();
              MW.setColorWrite(!1), MW.setAlphaMode(0), bR.render(!1), MW.setColorWrite(!0)
            }
          }
          const RW = bR._renderingMesh;
          !WW && RW._renderRunFollower(bR, wW) || bR.render(wW)
        }
      }
      static defaultTransparentSortCompare(WW, RW) {
        return WW._alphaIndex > RW._alphaIndex ? 1 : WW._alphaIndex < RW._alphaIndex ? -1 : zR.backToFrontSortCompare(WW, RW)
      }
      static backToFrontSortCompare(WW, RW) {
        return WW._distanceToCamera < RW._distanceToCamera ? 1 : WW._distanceToCamera > RW._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(WW, RW) {
        return WW._distanceToCamera < RW._distanceToCamera ? -1 : WW._distanceToCamera > RW._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(WW, RW) {
        const MW = WW.getMesh(),
          wW = RW.getMesh();
        return MW.material && wW.material ? MW.material.uniqueId - wW.material.uniqueId : MW.uniqueId - wW.uniqueId
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
      dispatch(WW, RW, MW) {
        void 0 === RW && (RW = WW.getMesh()), void 0 === MW && (MW = WW.Ow()), null !== MW && void 0 !== MW && (MW.needAlphaBlendingForMesh(RW) ? this._transparentSubMeshes.push(WW) : MW.needAlphaTestingForMesh(RW) ? (MW.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(WW), this._alphaTestSubMeshes.push(WW)) : (MW.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(WW), this._opaqueSubMeshes.push(WW)), RW._renderingGroup = this, RW._edgesRenderer && RW.isEnabled() && RW.isVisible && RW._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(RW._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(WW) {
        this._spriteManagers.push(WW), this._empty = !1
      }
      dispatchParticles(WW) {
        this._particleSystems.push(WW), this._empty = !1
      }
      _renderParticles(WW) {
        if (0 === this._particleSystems.length) return;
        const RW = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let MW = 0; MW < this._particleSystems.length; MW++) {
          const wW = this._particleSystems.data[MW];
          if (0 === (RW && RW.layerMask & wW.layerMask)) continue;
          const CW = wW.emitter;
          CW.position && WW && -1 === WW.indexOf(CW) || this._scene._activeParticles.addCount(wW.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const WW = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let RW = 0; RW < this._spriteManagers.length; RW++) {
          const MW = this._spriteManagers.data[RW];
          0 !== (WW && WW.layerMask & MW.layerMask) && MW.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    zR._ZeroVector = CW.q.Zero()
  },
  37739: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => zR
    });
    var wW = MW(37742);
    class CW {}
    class zR {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(WW) {
        this._disableDepthPrePass = WW;
        for (const RW of this._renderingGroups) RW.disableDepthPrePass = WW
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(WW) {
        WW !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = WW, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const WW of this._scene.meshes)
          if (WW.Qs)
            for (const RW of WW.Qs) RW._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const WW of this._scene.spriteManagers) WW._wasDispatched = !1;
        for (const WW of this._scene.Xs) WW._wasDispatched = !1
      }
      constructor(WW) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new CW, this._maintainStateBetweenFrames = !1, this._scene = WW;
        for (let RW = zR.MIN_RENDERINGGROUPS; RW < zR.MAX_RENDERINGGROUPS; RW++) this._autoClearDepthStencil[RW] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(WW) {
        const RW = WW || 0;
        return this._prepareRenderingGroup(RW), this._renderingGroups[RW]
      }
      _clearDepthStencilBuffer() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.mC().clear(null, !1, WW, RW), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(WW, RW, MW, wW) {
        let CW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          AW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          bR = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          yR = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          NW = arguments.length > 8 ? arguments[8] : void 0,
          eW = arguments.length > 9 ? arguments[9] : void 0;
        const BW = this._renderingGroupInfo;
        BW.LC = this._scene, BW.camera = this._scene.activeCamera, BW.renderingManager = this;
        const tR = eW ?? this._scene.spriteManagers;
        if (tR && wW)
          for (let zR = 0; zR < tR.length; zR++) {
            const WW = tR[zR];
            this.dispatchSprites(WW)
          }
        for (let TW = zR.MIN_RENDERINGGROUPS; TW < zR.MAX_RENDERINGGROUPS; TW++) {
          this._depthStencilBufferAlreadyCleaned = TW === zR.MIN_RENDERINGGROUPS;
          const eW = this._renderingGroups[TW];
          if (!eW || eW._empty) continue;
          const tR = 1 << TW;
          if (BW.renderingGroupId = TW, this._scene.onBeforeRenderingGroupObservable.notifyObservers(BW, tR), zR.AUTOCLEAR) {
            const WW = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(TW) : this._autoClearDepthStencil[TW];
            WW && WW.autoClear && this._clearDepthStencilBuffer(WW.depth, WW.stencil)
          }
          for (let WW = 0, RW = this._scene._beforeRenderingGroupDrawStage; WW < RW.length; WW++) {
            RW[WW].action(TW)
          }
          eW.render(WW, wW, MW, RW, CW, AW, bR, yR, NW);
          for (let WW = 0, RW = this._scene._afterRenderingGroupDrawStage; WW < RW.length; WW++) {
            RW[WW].action(TW)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(BW, tR)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let WW = zR.MIN_RENDERINGGROUPS; WW < zR.MAX_RENDERINGGROUPS; WW++) {
            const RW = this._renderingGroups[WW];
            RW && RW.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let WW = zR.MIN_RENDERINGGROUPS; WW < zR.MAX_RENDERINGGROUPS; WW++) {
            const RW = this._renderingGroups[WW];
            RW && RW.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let WW = zR.MIN_RENDERINGGROUPS; WW < zR.MAX_RENDERINGGROUPS; WW++) {
          const RW = this._renderingGroups[WW];
          RW && RW.dispose()
        }
      }
      _prepareRenderingGroup(WW) {
        void 0 === this._renderingGroups[WW] && (this._renderingGroups[WW] = new wW.b(WW, this._scene, this._customOpaqueSortCompareFn[WW], this._customAlphaTestSortCompareFn[WW], this._customTransparentSortCompareFn[WW]), this._renderingGroups[WW].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(WW) {
        this.maintainStateBetweenFrames && WW._wasDispatched || (WW._wasDispatched = !0, this.getRenderingGroup(WW.renderingGroupId).dispatchSprites(WW))
      }
      dispatchParticles(WW) {
        this.maintainStateBetweenFrames && WW._wasDispatched || (WW._wasDispatched = !0, this.getRenderingGroup(WW.renderingGroupId).dispatchParticles(WW))
      }
      dispatch(WW, RW, MW) {
        void 0 === RW && (RW = WW.getMesh()), this.maintainStateBetweenFrames && WW._wasDispatched || (WW._wasDispatched = !0, this.getRenderingGroup(RW.renderingGroupId).dispatch(WW, RW, MW))
      }
      setRenderingOrder(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[WW] = RW, this._customAlphaTestSortCompareFn[WW] = MW, this._customTransparentSortCompareFn[WW] = wW, this._renderingGroups[WW]) {
          const RW = this._renderingGroups[WW];
          RW.opaqueSortCompareFn = this._customOpaqueSortCompareFn[WW], RW.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[WW], RW.transparentSortCompareFn = this._customTransparentSortCompareFn[WW]
        }
      }
      setRenderingAutoClearDepthStencil(WW, RW) {
        let MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          wW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[WW] = {
          autoClear: RW,
          depth: MW,
          stencil: wW
        }
      }
      getAutoClearDepthStencilSetup(WW) {
        return this._autoClearDepthStencil[WW]
      }
    }
    zR.MAX_RENDERINGGROUPS = 4, zR.MIN_RENDERINGGROUPS = 0, zR.AUTOCLEAR = !0
  },
  37495: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW
    });
    class wW {
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
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[RW] !== WW && (WW ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[RW] = WW, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(WW, RW, MW, wW) {
        this._blendConstants[0] === WW && this._blendConstants[1] === RW && this._blendConstants[2] === MW && this._blendConstants[3] === wW || (this._blendConstants[0] = WW, this._blendConstants[1] = RW, this._blendConstants[2] = MW, this._blendConstants[3] = wW, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(WW, RW, MW, wW) {
        const CW = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[CW + 0] === WW && this._blendFunctionParameters[CW + 1] === RW && this._blendFunctionParameters[CW + 2] === MW && this._blendFunctionParameters[CW + 3] === wW || (this._blendFunctionParameters[CW + 0] = WW, this._blendFunctionParameters[CW + 1] = RW, this._blendFunctionParameters[CW + 2] = MW, this._blendFunctionParameters[CW + 3] = wW, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(WW, RW) {
        const MW = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[MW + 0] === WW && this._blendEquationParameters[MW + 1] === RW || (this._blendEquationParameters[MW + 0] = WW, this._blendEquationParameters[MW + 1] = RW, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== RW && (this._numTargets = RW, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== MW && (this._blendDisabledTargetsMask = MW, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (WW.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === RW || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (RW > 1 && 0 !== MW && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & MW) ? WW.enable(WW.BLEND) : WW.disable(WW.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (WW.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (WW.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const wW = WW;
        if (this._isAlphaBlendDirty) {
          for (let CW = 0; CW < RW; CW++) {
            const RW = CW < this._numTargetEnabled ? CW : 0;
            this._alphaBlend[RW] && 0 === (MW & 1 << CW) ? wW.enableIndexed(WW.BLEND, CW) : wW.disableIndexed(WW.BLEND, CW)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let WW = 0; WW < RW; WW++) {
            const RW = WW < this._numTargetEnabled ? 4 * WW : 0;
            wW.blendFuncSeparateIndexed(WW, this._blendFunctionParameters[RW + 0], this._blendFunctionParameters[RW + 1], this._blendFunctionParameters[RW + 2], this._blendFunctionParameters[RW + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let WW = 0; WW < RW; WW++) {
            const RW = WW < this._numTargetEnabled ? 2 * WW : 0;
            wW.blendEquationSeparateIndexed(WW, this._blendEquationParameters[RW + 0], this._blendEquationParameters[RW + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(WW, RW) {
        let MW = 32774;
        switch (WW) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, RW);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, RW);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, RW);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, RW);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, RW);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, RW);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, RW);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, RW);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, RW);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, RW);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, RW);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, RW);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, RW);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, RW);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, RW);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, RW);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, RW), MW = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, RW), MW = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, RW);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, RW)
        }
        this.setAlphaEquationParameters(MW, MW, RW)
      }
    }
  },
  37768: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW
    });
    class wW {}
    wW._IsPickingAvailable = !1
  },
  37677: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => bw,
      i: () => zw
    });
    var wW = MW(37685),
      CW = MW(37483),
      zR = MW(37488),
      AW = MW(35346),
      bR = MW(37693);
    class yR {
      constructor() {
        this._count = 0, this._data = {}
      }
      hyW(WW) {
        this.clear(), WW.forEach(((WW, RW) => this.add(WW, RW)))
      }
      get(WW) {
        const RW = this._data[WW];
        if (void 0 !== RW) return RW
      }
      getOrAddWithFactory(WW, RW) {
        let MW = this.get(WW);
        return void 0 !== MW || (MW = RW(WW), MW && this.add(WW, MW)), MW
      }
      getOrAdd(WW, RW) {
        const MW = this.get(WW);
        return void 0 !== MW ? MW : (this.add(WW, RW), RW)
      }
      contains(WW) {
        return void 0 !== this._data[WW]
      }
      add(WW, RW) {
        return void 0 === this._data[WW] && (this._data[WW] = RW, ++this._count, !0)
      }
      set(WW, RW) {
        return void 0 !== this._data[WW] && (this._data[WW] = RW, !0)
      }
      getAndRemove(WW) {
        const RW = this.get(WW);
        return void 0 !== RW ? (delete this._data[WW], --this._count, RW) : null
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
        for (const RW in this._data) {
          WW(RW, this._data[RW])
        }
      }
      first(WW) {
        for (const RW in this._data) {
          const MW = WW(RW, this._data[RW]);
          if (MW) return MW
        }
        return null
      }
    }
    var NW = MW(37621),
      eW = MW(35324),
      BW = MW(37699),
      tR = MW(37712),
      TW = MW(37716);
    class gR {
      constructor(WW, RW, MW, wW, CW, zR) {
        this.source = WW, this.pointerX = RW, this.pointerY = MW, this.meshUnderPointer = wW, this.sourceEvent = CW, this.additionalData = zR
      }
      static CreateNew(WW, RW, MW) {
        const wW = WW.QRW();
        return new gR(WW, wW.pointerX, wW.pointerY, wW.meshUnderPointer || WW, RW, MW)
      }
      static CreateNewFromSprite(WW, RW, MW, wW) {
        return new gR(WW, RW.pointerX, RW.pointerY, RW.meshUnderPointer, MW, wW)
      }
      static CreateNewFromScene(WW, RW) {
        return new gR(null, WW.pointerX, WW.pointerY, WW.meshUnderPointer, RW)
      }
      static CreateNewFromPrimitive(WW, RW, MW, wW) {
        return new gR(WW, RW.x, RW.y, null, MW, wW)
      }
    }
    var iR = MW(37728),
      YW = MW(37735),
      JW = MW(37739),
      PW = MW(37749),
      IW = MW(37456),
      oW = MW(35344),
      lW = MW(37470),
      FW = MW(37758);
    class fW {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const WW in fW.Triggers)
          if (Object.prototype.hasOwnProperty.call(fW.Triggers, WW)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const WW in fW.Triggers)
          if (Object.prototype.hasOwnProperty.call(fW.Triggers, WW)) {
            const RW = parseInt(WW);
            if (RW >= 1 && RW <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(WW) {
        for (const RW in fW.Triggers)
          if (Object.prototype.hasOwnProperty.call(fW.Triggers, RW)) {
            if (parseInt(RW) === WW) return !0
          } return !1
      }
    }
    fW.Triggers = {};
    var QW, rR, cR, XW, jR, kR, aR, sW = MW(37763);
    ! function(WW) {
      WW[WW.Generic = 0] = "Generic", WW[WW.Keyboard = 1] = "Keyboard", WW[WW.Mouse = 2] = "Mouse", WW[WW.Touch = 3] = "Touch", WW[WW.DualShock = 4] = "DualShock", WW[WW.Xbox = 5] = "Xbox", WW[WW.Switch = 6] = "Switch", WW[WW.DualSense = 7] = "DualSense"
    }(QW || (QW = {})),
    function(WW) {
      WW[WW.Horizontal = 0] = "Horizontal", WW[WW.Vertical = 1] = "Vertical", WW[WW.LeftClick = 2] = "LeftClick", WW[WW.MiddleClick = 3] = "MiddleClick", WW[WW.RightClick = 4] = "RightClick", WW[WW.BrowserBack = 5] = "BrowserBack", WW[WW.BrowserForward = 6] = "BrowserForward", WW[WW.MouseWheelX = 7] = "MouseWheelX", WW[WW.MouseWheelY = 8] = "MouseWheelY", WW[WW.MouseWheelZ = 9] = "MouseWheelZ", WW[WW.Move = 12] = "Move"
    }(rR || (rR = {})),
    function(WW) {
      WW[WW.Horizontal = 0] = "Horizontal", WW[WW.Vertical = 1] = "Vertical", WW[WW.LeftClick = 2] = "LeftClick", WW[WW.MiddleClick = 3] = "MiddleClick", WW[WW.RightClick = 4] = "RightClick", WW[WW.BrowserBack = 5] = "BrowserBack", WW[WW.BrowserForward = 6] = "BrowserForward", WW[WW.MouseWheelX = 7] = "MouseWheelX", WW[WW.MouseWheelY = 8] = "MouseWheelY", WW[WW.MouseWheelZ = 9] = "MouseWheelZ", WW[WW.DeltaHorizontal = 10] = "DeltaHorizontal", WW[WW.DeltaVertical = 11] = "DeltaVertical"
    }(cR || (cR = {})),
    function(WW) {
      WW[WW.Cross = 0] = "Cross", WW[WW.Circle = 1] = "Circle", WW[WW.Square = 2] = "Square", WW[WW.Triangle = 3] = "Triangle", WW[WW.L1 = 4] = "L1", WW[WW.R1 = 5] = "R1", WW[WW.L2 = 6] = "L2", WW[WW.R2 = 7] = "R2", WW[WW.Share = 8] = "Share", WW[WW.Options = 9] = "Options", WW[WW.L3 = 10] = "L3", WW[WW.R3 = 11] = "R3", WW[WW.DPadUp = 12] = "DPadUp", WW[WW.DPadDown = 13] = "DPadDown", WW[WW.DPadLeft = 14] = "DPadLeft", WW[WW.DPadRight = 15] = "DPadRight", WW[WW.Home = 16] = "Home", WW[WW.TouchPad = 17] = "TouchPad", WW[WW.LStickXAxis = 18] = "LStickXAxis", WW[WW.LStickYAxis = 19] = "LStickYAxis", WW[WW.RStickXAxis = 20] = "RStickXAxis", WW[WW.RStickYAxis = 21] = "RStickYAxis"
    }(XW || (XW = {})),
    function(WW) {
      WW[WW.Cross = 0] = "Cross", WW[WW.Circle = 1] = "Circle", WW[WW.Square = 2] = "Square", WW[WW.Triangle = 3] = "Triangle", WW[WW.L1 = 4] = "L1", WW[WW.R1 = 5] = "R1", WW[WW.L2 = 6] = "L2", WW[WW.R2 = 7] = "R2", WW[WW.Create = 8] = "Create", WW[WW.Options = 9] = "Options", WW[WW.L3 = 10] = "L3", WW[WW.R3 = 11] = "R3", WW[WW.DPadUp = 12] = "DPadUp", WW[WW.DPadDown = 13] = "DPadDown", WW[WW.DPadLeft = 14] = "DPadLeft", WW[WW.DPadRight = 15] = "DPadRight", WW[WW.Home = 16] = "Home", WW[WW.TouchPad = 17] = "TouchPad", WW[WW.LStickXAxis = 18] = "LStickXAxis", WW[WW.LStickYAxis = 19] = "LStickYAxis", WW[WW.RStickXAxis = 20] = "RStickXAxis", WW[WW.RStickYAxis = 21] = "RStickYAxis"
    }(jR || (jR = {})),
    function(WW) {
      WW[WW.A = 0] = "A", WW[WW.B = 1] = "B", WW[WW.X = 2] = "X", WW[WW.Y = 3] = "Y", WW[WW.LB = 4] = "LB", WW[WW.RB = 5] = "RB", WW[WW.LT = 6] = "LT", WW[WW.RT = 7] = "RT", WW[WW.Back = 8] = "Back", WW[WW.Start = 9] = "Start", WW[WW.LS = 10] = "LS", WW[WW.RS = 11] = "RS", WW[WW.DPadUp = 12] = "DPadUp", WW[WW.DPadDown = 13] = "DPadDown", WW[WW.DPadLeft = 14] = "DPadLeft", WW[WW.DPadRight = 15] = "DPadRight", WW[WW.Home = 16] = "Home", WW[WW.LStickXAxis = 17] = "LStickXAxis", WW[WW.LStickYAxis = 18] = "LStickYAxis", WW[WW.RStickXAxis = 19] = "RStickXAxis", WW[WW.RStickYAxis = 20] = "RStickYAxis"
    }(kR || (kR = {})),
    function(WW) {
      WW[WW.B = 0] = "B", WW[WW.A = 1] = "A", WW[WW.Y = 2] = "Y", WW[WW.X = 3] = "X", WW[WW.L = 4] = "L", WW[WW.R = 5] = "R", WW[WW.ZL = 6] = "ZL", WW[WW.ZR = 7] = "ZR", WW[WW.Minus = 8] = "Minus", WW[WW.Plus = 9] = "Plus", WW[WW.LS = 10] = "LS", WW[WW.RS = 11] = "RS", WW[WW.DPadUp = 12] = "DPadUp", WW[WW.DPadDown = 13] = "DPadDown", WW[WW.DPadLeft = 14] = "DPadLeft", WW[WW.DPadRight = 15] = "DPadRight", WW[WW.Home = 16] = "Home", WW[WW.Capture = 17] = "Capture", WW[WW.LStickXAxis = 18] = "LStickXAxis", WW[WW.LStickYAxis = 19] = "LStickYAxis", WW[WW.RStickXAxis = 20] = "RStickXAxis", WW[WW.RStickYAxis = 21] = "RStickYAxis"
    }(aR || (aR = {}));
    var dW = MW(37765);
    class pW {
      static CreateDeviceEvent(WW, RW, MW, wW, CW, zR, AW) {
        switch (WW) {
          case QW.Keyboard:
            return this._CreateKeyboardEvent(MW, wW, CW, zR);
          case QW.Mouse:
            if (MW === rR.MouseWheelX || MW === rR.MouseWheelY || MW === rR.MouseWheelZ) return this._CreateWheelEvent(WW, RW, MW, wW, CW, zR);
          case QW.Touch:
            return this._CreatePointerEvent(WW, RW, MW, wW, CW, zR, AW);
          default:
            throw `Unable to generate event for device ${QW[WW]}`
        }
      }
      static _CreatePointerEvent(WW, RW, MW, wW, CW, zR, AW) {
        const bR = this._CreateMouseEvent(WW, RW, MW, wW, CW, zR);
        WW === QW.Mouse ? (bR.deviceType = QW.Mouse, bR.pointerId = 1, bR.pointerType = "mouse") : (bR.deviceType = QW.Touch, bR.pointerId = AW ?? RW, bR.pointerType = "touch");
        let yR = 0;
        return yR += CW.pollInput(WW, RW, rR.LeftClick), yR += 2 * CW.pollInput(WW, RW, rR.RightClick), yR += 4 * CW.pollInput(WW, RW, rR.MiddleClick), bR.buttons = yR, MW === rR.Move ? bR.type = "pointermove" : MW >= rR.LeftClick && MW <= rR.RightClick && (bR.type = 1 === wW ? "pointerdown" : "pointerup", bR.button = MW - 2), bR
      }
      static _CreateWheelEvent(WW, RW, MW, wW, CW, zR) {
        const AW = this._CreateMouseEvent(WW, RW, MW, wW, CW, zR);
        switch (AW.pointerId = 1, AW.type = "wheel", AW.deltaMode = dW.c.DOM_DELTA_PIXEL, AW.deltaX = 0, AW.deltaY = 0, AW.deltaZ = 0, MW) {
          case rR.MouseWheelX:
            AW.deltaX = wW;
            break;
          case rR.MouseWheelY:
            AW.deltaY = wW;
            break;
          case rR.MouseWheelZ:
            AW.deltaZ = wW
        }
        return AW
      }
      static _CreateMouseEvent(WW, RW, MW, wW, CW, zR) {
        const AW = this._CreateEvent(zR),
          bR = CW.pollInput(WW, RW, rR.Horizontal),
          yR = CW.pollInput(WW, RW, rR.Vertical);
        return zR ? (AW.movementX = 0, AW.movementY = 0, AW.offsetX = AW.movementX - zR.getBoundingClientRect().x, AW.offsetY = AW.movementY - zR.getBoundingClientRect().y) : (AW.movementX = CW.pollInput(WW, RW, 10), AW.movementY = CW.pollInput(WW, RW, 11), AW.offsetX = 0, AW.offsetY = 0), this._CheckNonCharacterKeys(AW, CW), AW.clientX = bR, AW.clientY = yR, AW.x = bR, AW.y = yR, AW.deviceType = WW, AW.deviceSlot = RW, AW.inputIndex = MW, AW
      }
      static _CreateKeyboardEvent(WW, RW, MW, wW) {
        const CW = this._CreateEvent(wW);
        return this._CheckNonCharacterKeys(CW, MW), CW.deviceType = QW.Keyboard, CW.deviceSlot = 0, CW.inputIndex = WW, CW.type = 1 === RW ? "keydown" : "keyup", CW.key = String.fromCharCode(WW), CW.keyCode = WW, CW
      }
      static _CheckNonCharacterKeys(WW, RW) {
        const MW = RW.isDeviceAvailable(QW.Keyboard),
          wW = MW && 1 === RW.pollInput(QW.Keyboard, 0, 18),
          CW = MW && 1 === RW.pollInput(QW.Keyboard, 0, 17),
          zR = MW && (1 === RW.pollInput(QW.Keyboard, 0, 91) || 1 === RW.pollInput(QW.Keyboard, 0, 92) || 1 === RW.pollInput(QW.Keyboard, 0, 93)),
          AW = MW && 1 === RW.pollInput(QW.Keyboard, 0, 16);
        WW.altKey = wW, WW.ctrlKey = CW, WW.metaKey = zR, WW.shiftKey = AW
      }
      static _CreateEvent(WW) {
        const RW = {
          preventDefault: () => {}
        };
        return RW.target = WW, RW
      }
    }
    class hW {
      constructor(WW, RW, MW) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(WW, RW, ((WW, RW, wW, CW) => {
          const zR = pW.CreateDeviceEvent(WW, RW, wW, CW, this);
          MW(WW, RW, zR)
        })) : this._createDummyNativeInput()
      }
      pollInput(WW, RW, MW) {
        return this._nativeInput.pollInput(WW, RW, MW)
      }
      isDeviceAvailable(WW) {
        return WW === QW.Mouse || WW === QW.Touch
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
    const UW = Object.keys(rR).length / 2;
    class EW {
      constructor(WW, RW, MW, CW) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = wW.j.IsSafari(), this._usingMacOs = (0, IW.j)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = WW => {}, this._keyboardUpEvent = WW => {}, this._keyboardBlurEvent = WW => {}, this._pointerMoveEvent = WW => {}, this._pointerDownEvent = WW => {}, this._pointerUpEvent = WW => {}, this._pointerCancelEvent = WW => {}, this._pointerCancelTouch = WW => {}, this._pointerLeaveEvent = WW => {}, this._pointerWheelEvent = WW => {}, this._pointerBlurEvent = WW => {}, this._pointerMacOsChromeOutEvent = WW => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, IW.j)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, IW.j)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = WW => {}, this._gamepadDisconnectedEvent = WW => {}, this._eventPrefix = wW.j.GetPointerPrefix(WW), this._engine = WW, this._onDeviceConnected = RW, this._onDeviceDisconnected = MW, this._onInputChanged = CW, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(WW, RW, MW) {
        const CW = this._inputs[WW][RW];
        if (!CW) throw `Unable to find device ${QW[WW]}`;
        WW >= QW.DualShock && WW <= QW.DualSense && this._updateDevice(WW, RW, MW);
        const zR = CW[MW];
        if (void 0 === zR) throw `Unable to find input ${MW} for device ${QW[WW]} in slot ${RW}`;
        return MW === rR.Move && wW.j.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), zR
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
                for (const RW in WW) {
                  const MW = WW[+RW];
                  if (MW)
                    for (let WW = 0; WW < MW.length; WW++) MW[WW] = 0
                }
          this._elementToAttachTo = WW, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "Cw", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const WW = navigator.getGamepads();
          for (const RW of WW) RW && this._addGamePad(RW)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(QW.Mouse, 0, 0, 0)
      }
      _addGamePad(WW) {
        const RW = this._getGamepadDeviceType(WW.id),
          MW = WW.index;
        this._gamepads = this._gamepads || new Array(WW.index + 1), this._registerDevice(RW, MW, WW.buttons.length + WW.axes.length), this._gamepads[MW] = RW
      }
      _addPointerDevice(WW, RW, MW, wW) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(WW, RW, UW);
        const CW = this._inputs[WW][RW];
        CW[0] = MW, CW[1] = wW
      }
      _registerDevice(WW, RW, MW) {
        if (void 0 === RW) throw `Unable to register device ${QW[WW]} to undefined slot.`;
        if (this._inputs[WW] || (this._inputs[WW] = {}), !this._inputs[WW][RW]) {
          const wW = new Array(MW);
          wW.fill(0), this._inputs[WW][RW] = wW, this._onDeviceConnected(WW, RW)
        }
      }
      _unregisterDevice(WW, RW) {
        this._inputs[WW][RW] && (delete this._inputs[WW][RW], this._onDeviceDisconnected(WW, RW))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = WW => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(QW.Keyboard, 0, 255));
          const RW = this._inputs[QW.Keyboard][0];
          if (RW) {
            RW[WW.keyCode] = 1;
            const MW = WW;
            MW.inputIndex = WW.keyCode, this._usingMacOs && WW.metaKey && "Meta" !== WW.key && (this._metaKeys.includes(WW.keyCode) || this._metaKeys.push(WW.keyCode)), this._onInputChanged(QW.Keyboard, 0, MW)
          }
        }, this._keyboardUpEvent = WW => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(QW.Keyboard, 0, 255));
          const RW = this._inputs[QW.Keyboard][0];
          if (RW) {
            RW[WW.keyCode] = 0;
            const MW = WW;
            if (MW.inputIndex = WW.keyCode, this._usingMacOs && "Meta" === WW.key && this._metaKeys.length > 0) {
              for (const WW of this._metaKeys) {
                const MW = pW.CreateDeviceEvent(QW.Keyboard, 0, WW, 0, this, this._elementToAttachTo);
                RW[WW] = 0, this._onInputChanged(QW.Keyboard, 0, MW)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(QW.Keyboard, 0, MW)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const WW = this._inputs[QW.Keyboard][0];
            for (let RW = 0; RW < WW.length; RW++)
              if (0 !== WW[RW]) {
                WW[RW] = 0;
                const MW = pW.CreateDeviceEvent(QW.Keyboard, 0, RW, 0, this, this._elementToAttachTo);
                this._onInputChanged(QW.Keyboard, 0, MW)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, IW.j)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let wW = 0; wW < this._maxTouchPoints; wW++) this._activeTouchIds[wW] = -1;
        this._pointerMoveEvent = WW => {
          const RW = this._getPointerType(WW);
          let MW = RW === QW.Mouse ? 0 : this._activeTouchIds.indexOf(WW.pointerId);
          if (RW === QW.Touch && -1 === MW) {
            if (0 === WW.buttons) return;
            const CW = this._activeTouchIds.indexOf(-1);
            if (!(CW >= 0)) return void wW.j.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            MW = CW, this._activeTouchIds[CW] = WW.pointerId, this._onDeviceConnected(RW, MW)
          }
          this._inputs[RW] || (this._inputs[RW] = {}), this._inputs[RW][MW] || this._addPointerDevice(RW, MW, WW.clientX, WW.clientY);
          const CW = this._inputs[RW][MW];
          if (CW) {
            const wW = WW;
            wW.inputIndex = rR.Move, CW[rR.Horizontal] = WW.clientX, CW[rR.Vertical] = WW.clientY, RW === QW.Touch && 0 === CW[rR.LeftClick] && (CW[rR.LeftClick] = 1), void 0 === WW.pointerId && (WW.pointerId = this._mouseId), this._onInputChanged(RW, MW, wW), this._usingSafari || -1 === WW.button || (wW.inputIndex = WW.button + 2, CW[WW.button + 2] = CW[WW.button + 2] ? 0 : 1, this._onInputChanged(RW, MW, wW))
          }
        }, this._pointerDownEvent = WW => {
          const RW = this._getPointerType(WW);
          let MW = RW === QW.Mouse ? 0 : WW.pointerId;
          if (RW === QW.Touch) {
            let RW = this._activeTouchIds.indexOf(WW.pointerId);
            if (-1 === RW && (RW = this._activeTouchIds.indexOf(-1)), !(RW >= 0)) return void wW.j.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            MW = RW, this._activeTouchIds[RW] = WW.pointerId
          }
          this._inputs[RW] || (this._inputs[RW] = {}), this._inputs[RW][MW] ? RW === QW.Touch && this._onDeviceConnected(RW, MW) : this._addPointerDevice(RW, MW, WW.clientX, WW.clientY);
          const CW = this._inputs[RW][MW];
          if (CW) {
            const wW = CW[rR.Horizontal],
              AW = CW[rR.Vertical];
            if (RW === QW.Mouse) {
              if (void 0 === WW.pointerId && (WW.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (zR) {}
            } else if (WW.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(WW.pointerId)
            } catch (zR) {}
            CW[rR.Horizontal] = WW.clientX, CW[rR.Vertical] = WW.clientY, CW[WW.button + 2] = 1;
            const bR = WW;
            bR.inputIndex = WW.button + 2, this._onInputChanged(RW, MW, bR), wW === WW.clientX && AW === WW.clientY || (bR.inputIndex = rR.Move, this._onInputChanged(RW, MW, bR))
          }
        }, this._pointerUpEvent = WW => {
          const RW = this._getPointerType(WW),
            MW = RW === QW.Mouse ? 0 : this._activeTouchIds.indexOf(WW.pointerId);
          if (RW === QW.Touch) {
            if (-1 === MW) return;
            this._activeTouchIds[MW] = -1
          }
          const wW = this._inputs[RW]?.[MW];
          let CW = WW.button,
            zR = wW && 0 !== wW[CW + 2];
          if (!zR && this._isUsingFirefox && this._usingMacOs && wW && (CW = 2 === CW ? 0 : 2, zR = 0 !== wW[CW + 2]), zR) {
            const zR = wW[rR.Horizontal],
              AW = wW[rR.Vertical];
            wW[rR.Horizontal] = WW.clientX, wW[rR.Vertical] = WW.clientY, wW[CW + 2] = 0;
            const bR = WW;
            void 0 === WW.pointerId && (WW.pointerId = this._mouseId), zR === WW.clientX && AW === WW.clientY || (bR.inputIndex = rR.Move, this._onInputChanged(RW, MW, bR)), bR.inputIndex = CW + 2, RW === QW.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : WW.pointerId && this._elementToAttachTo.hasPointerCapture?.(WW.pointerId) && this._elementToAttachTo.releasePointerCapture(WW.pointerId), this._onInputChanged(RW, MW, bR), RW === QW.Touch && this._onDeviceDisconnected(RW, MW)
          }
        }, this._pointerCancelTouch = WW => {
          const RW = this._activeTouchIds.indexOf(WW);
          if (-1 === RW) return;
          this._elementToAttachTo.hasPointerCapture?.(WW) && this._elementToAttachTo.releasePointerCapture(WW), this._inputs[QW.Touch][RW][rR.LeftClick] = 0;
          const MW = pW.CreateDeviceEvent(QW.Touch, RW, rR.LeftClick, 0, this, this._elementToAttachTo, WW);
          this._onInputChanged(QW.Touch, RW, MW), this._activeTouchIds[RW] = -1, this._onDeviceDisconnected(QW.Touch, RW)
        }, this._pointerCancelEvent = WW => {
          if ("mouse" === WW.pointerType) {
            const WW = this._inputs[QW.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let RW = rR.LeftClick; RW <= rR.BrowserForward; RW++)
              if (1 === WW[RW]) {
                WW[RW] = 0;
                const MW = pW.CreateDeviceEvent(QW.Mouse, 0, RW, 0, this, this._elementToAttachTo);
                this._onInputChanged(QW.Mouse, 0, MW)
              }
          } else this._pointerCancelTouch(WW.pointerId)
        }, this._pointerLeaveEvent = WW => {
          "pen" === WW.pointerType && this._pointerCancelTouch(WW.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let WW = !1;
        const RW = function() {};
        try {
          const MW = Object.defineProperty({}, "passive", {
            get: function() {
              WW = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", RW, MW), this._elementToAttachTo.removeEventListener("test", RW, MW)
        } catch (MW) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(QW.Mouse)) {
            const WW = this._inputs[QW.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let RW = rR.LeftClick; RW <= rR.BrowserForward; RW++)
              if (1 === WW[RW]) {
                WW[RW] = 0;
                const MW = pW.CreateDeviceEvent(QW.Mouse, 0, RW, 0, this, this._elementToAttachTo);
                this._onInputChanged(QW.Mouse, 0, MW)
              }
          }
          if (this.isDeviceAvailable(QW.Touch)) {
            const WW = this._inputs[QW.Touch];
            for (let RW = 0; RW < this._activeTouchIds.length; RW++) {
              const MW = this._activeTouchIds[RW];
              if (this._elementToAttachTo.hasPointerCapture?.(MW) && this._elementToAttachTo.releasePointerCapture(MW), -1 !== MW && 1 === WW[RW]?.[rR.LeftClick]) {
                WW[RW][rR.LeftClick] = 0;
                const wW = pW.CreateDeviceEvent(QW.Touch, RW, rR.LeftClick, 0, this, this._elementToAttachTo, MW);
                this._onInputChanged(QW.Touch, RW, wW), this._activeTouchIds[RW] = -1, this._onDeviceDisconnected(QW.Touch, RW)
              }
            }
          }
        }, this._pointerWheelEvent = WW => {
          const RW = QW.Mouse;
          this._inputs[RW] || (this._inputs[RW] = []), this._inputs[RW][0] || (this._pointerActive = !0, this._registerDevice(RW, 0, UW));
          const MW = this._inputs[RW][0];
          if (MW) {
            MW[rR.MouseWheelX] = WW.deltaX || 0, MW[rR.MouseWheelY] = WW.deltaY || WW.wheelDelta || 0, MW[rR.MouseWheelZ] = WW.deltaZ || 0;
            const wW = WW;
            void 0 === WW.pointerId && (WW.pointerId = this._mouseId), 0 !== MW[rR.MouseWheelX] && (wW.inputIndex = rR.MouseWheelX, this._onInputChanged(RW, 0, wW)), 0 !== MW[rR.MouseWheelY] && (wW.inputIndex = rR.MouseWheelY, this._onInputChanged(RW, 0, wW)), 0 !== MW[rR.MouseWheelZ] && (wW.inputIndex = rR.MouseWheelZ, this._onInputChanged(RW, 0, wW))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = WW => {
          WW.buttons > 1 && this._pointerCancelEvent(WW)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "Cw", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!WW && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(QW.Mouse)) {
            const WW = this._inputs[QW.Mouse][0];
            WW[rR.MouseWheelX] = 0, WW[rR.MouseWheelY] = 0, WW[rR.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = WW => {
          this._addGamePad(WW.gamepad)
        }, this._gamepadDisconnectedEvent = WW => {
          if (this._gamepads) {
            const RW = this._getGamepadDeviceType(WW.gamepad.id),
              MW = WW.gamepad.index;
            this._unregisterDevice(RW, MW), delete this._gamepads[MW]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(WW, RW, MW) {
        const wW = navigator.getGamepads()[RW];
        if (wW && WW === this._gamepads[RW]) {
          const CW = this._inputs[WW][RW];
          MW >= wW.buttons.length ? CW[MW] = wW.axes[MW - wW.buttons.length].valueOf() : CW[MW] = wW.buttons[MW].value
        }
      }
      _getGamepadDeviceType(WW) {
        return -1 !== WW.indexOf("054c") ? -1 !== WW.indexOf("0ce6") ? QW.DualSense : QW.DualShock : -1 !== WW.indexOf("Xbox One") || -1 !== WW.search("Xbox 360") || -1 !== WW.search("xinput") || -1 !== WW.indexOf("045e") && -1 === WW.indexOf("Surface Dock") ? QW.Xbox : -1 !== WW.indexOf("057e") ? QW.Switch : QW.Generic
      }
      _getPointerType(WW) {
        let RW = QW.Mouse;
        return ("touch" === WW.pointerType || "pen" === WW.pointerType || WW.touches) && (RW = QW.Touch), RW
      }
    }
    class VW {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = RW, this.deviceSlot = MW, this.onInputChangedObservable = new AW.c, this._deviceInputSystem = WW
      }
      getInput(WW) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, WW)
      }
    }
    class mR {
      constructor(WW) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = WW => {
          for (let RW = 0; RW < this._devices.length; RW++) {
            const MW = this._devices[RW];
            for (const wW in MW) {
              const MW = +wW;
              WW._addDevice(new VW(this._deviceInputSystem, RW, MW))
            }
          }
          this._registeredManagers.push(WW)
        }, this.unregisterManager = WW => {
          const RW = this._registeredManagers.indexOf(WW);
          RW > -1 && this._registeredManagers.splice(RW, 1)
        };
        const RW = Object.keys(QW).length / 2;
        this._devices = new Array(RW);
        const MW = (WW, RW) => {
            this._devices[WW] || (this._devices[WW] = new Array), this._devices[WW][RW] || (this._devices[WW][RW] = RW);
            for (const MW of this._registeredManagers) {
              const wW = new VW(this._deviceInputSystem, WW, RW);
              MW._addDevice(wW)
            }
          },
          wW = (WW, RW) => {
            this._devices[WW]?.[RW] && delete this._devices[WW][RW];
            for (const MW of this._registeredManagers) MW._removeDevice(WW, RW)
          },
          CW = (WW, RW, MW) => {
            if (MW)
              for (const wW of this._registeredManagers) wW._onInputChanged(WW, RW, MW)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new hW(MW, wW, CW) : this._deviceInputSystem = new EW(WW, MW, wW, CW)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class xR {
      getDeviceSource(WW, RW) {
        if (void 0 === RW) {
          if (void 0 === this._firstDevice[WW]) return null;
          RW = this._firstDevice[WW]
        }
        return this._devices[WW] && void 0 !== this._devices[WW][RW] ? this._devices[WW][RW] : null
      }
      getDeviceSources(WW) {
        return this._devices[WW] ? this._devices[WW].filter((WW => !!WW)) : []
      }
      constructor(WW) {
        const RW = Object.keys(QW).length / 2;
        this._devices = new Array(RW), this._firstDevice = new Array(RW), this._engine = WW, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new mR(WW)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new AW.c((WW => {
          for (const RW of this._devices)
            if (RW)
              for (const MW of RW) MW && this.onDeviceConnectedObservable.notifyObserver(WW, MW)
        })), this.onDeviceDisconnectedObservable = new AW.c, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = WW.rMW.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.rMW.remove(this._onDisposeObserver)
      }
      _addDevice(WW) {
        this._devices[WW.deviceType] || (this._devices[WW.deviceType] = []), this._devices[WW.deviceType][WW.deviceSlot] || (this._devices[WW.deviceType][WW.deviceSlot] = WW, this._updateFirstDevices(WW.deviceType)), this.onDeviceConnectedObservable.notifyObservers(WW)
      }
      _removeDevice(WW, RW) {
        const MW = this._devices[WW]?.[RW];
        this.onDeviceDisconnectedObservable.notifyObservers(MW), this._devices[WW]?.[RW] && delete this._devices[WW][RW], this._updateFirstDevices(WW)
      }
      _onInputChanged(WW, RW, MW) {
        this._devices[WW]?.[RW]?.onInputChangedObservable.notifyObservers(MW)
      }
      _updateFirstDevices(WW) {
        switch (WW) {
          case QW.Keyboard:
          case QW.Mouse:
            this._firstDevice[WW] = 0;
            break;
          case QW.Touch:
          case QW.DualSense:
          case QW.DualShock:
          case QW.Xbox:
          case QW.Switch:
          case QW.Generic: {
            delete this._firstDevice[WW];
            const RW = this._devices[WW];
            if (RW)
              for (let MW = 0; MW < RW.length; MW++)
                if (RW[MW]) {
                  this._firstDevice[WW] = MW;
                  break
                } break
          }
        }
      }
    }
    var vR = MW(37768);
    class KW {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get mN() {
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
      set mN(WW) {
        this._doubleClick = WW
      }
      set hasSwiped(WW) {
        this._hasSwiped = WW
      }
      set ignore(WW) {
        this._ignore = WW
      }
    }
    class uW {
      constructor(WW) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new eW.n(0, 0), this._previousStartingPointerPosition = new eW.n(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = WW || oW.d.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(WW) {
        return this._meshUnderPointerId[WW] || null
      }
      get unTranslatedPointer() {
        return new eW.n(this._unTranslatedPointerX, this._unTranslatedPointerY)
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
        const RW = this._scene.mC().getInputElementClientRect();
        RW && (this._pointerX = WW.clientX - RW.left, this._pointerY = WW.clientY - RW.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(WW, RW) {
        const MW = this._scene,
          wW = MW.mC(),
          CW = wW.getInputElement();
        CW && (CW.tabIndex = wW.canvasTabIndex, MW.doNotHandleCursors || (CW.style.cursor = MW.defaultCursor)), this._setCursorAndPointerOverMesh(WW, RW, MW);
        for (const bR of MW._pointerMoveStage) {
          WW = WW || this._pickMove(RW);
          const MW = !!WW?.pickedMesh;
          WW = bR.action(this._unTranslatedPointerX, this._unTranslatedPointerY, WW, MW, CW)
        }
        const zR = RW.inputIndex >= rR.MouseWheelX && RW.inputIndex <= rR.MouseWheelZ ? FW.c.POINTERWHEEL : FW.c.POINTERMOVE;
        let AW;
        MW.onPointerMove && (WW = WW || this._pickMove(RW), MW.onPointerMove(RW, WW, zR)), WW ? (AW = new FW.g(zR, RW, WW), this._setRayOnPointerInfo(WW, RW)) : (AW = new FW.g(zR, RW, null, this), this._movePointerInfo = AW), MW.onPointerObservable.hasObservers() && MW.onPointerObservable.notifyObservers(AW, zR)
      }
      _setRayOnPointerInfo(WW, RW) {
        const MW = this._scene;
        WW && vR.e._IsPickingAvailable && (WW.ray || (WW.ray = MW.createPickingRay(RW.offsetX, RW.offsetY, eW.d.Identity(), MW.activeCamera)))
      }
      _addCameraPointerObserver(WW, RW) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(WW, RW)
      }
      _removeCameraPointerObserver(WW) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(WW)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(WW, RW, MW) {
        const wW = this._scene,
          CW = new FW.e(MW, RW, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return WW && (CW.originalPickingInfo = WW, CW.ray = WW.ray, "xr-near" === RW.pointerType && WW.originMesh && (CW.nearInteractionPickingInfo = WW)), wW.onPrePointerObservable.notifyObservers(CW, MW), !!CW.skipOnPointerObservable
      }
      _pickMove(WW) {
        const RW = this._scene,
          MW = RW.WM(this._unTranslatedPointerX, this._unTranslatedPointerY, RW.pointerMovePredicate, RW.pointerMoveFastCheck, RW.cameraToUseForPointers, RW.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(MW, WW, RW), MW
      }
      _updateMeshUnderPointer() {
        const WW = this._scene;
        if (!WW.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || WW.skipPointerMovePicking || !WW.cameraToUseForPointers && !WW.activeCamera) return;
        this._ensurePointerMovePredicate();
        const RW = this._pointerX,
          MW = this._pointerY,
          wW = this._unTranslatedPointerX,
          CW = this._unTranslatedPointerY;
        for (const zR of this._latestPointerMoveEvents.values()) this._pointerX = zR.pointerX, this._pointerY = zR.pointerY, this._unTranslatedPointerX = zR.unTranslatedPointerX, this._unTranslatedPointerY = zR.unTranslatedPointerY, this._pickMove(zR.event);
        this._pointerX = RW, this._pointerY = MW, this._unTranslatedPointerX = wW, this._unTranslatedPointerY = CW
      }
      _ensurePointerMovePredicate() {
        const WW = this._scene;
        WW.pointerMovePredicate || (WW.pointerMovePredicate = RW => (RW._isPointerMovePickable ?? RW.DC) && RW.isVisible && RW.isReady() && RW.isEnabled() && (RW.enablePointerMoveEvents || WW.constantlyUpdateMeshUnderPointer || null !== RW._getActionManagerForTrigger()) && (!WW.cameraToUseForPointers || 0 !== (WW.cameraToUseForPointers.layerMask & RW.layerMask)))
      }
      _setCursorAndPointerOverMesh(WW, RW, MW) {
        const wW = MW.mC().getInputElement();
        if (WW?.pickedMesh) {
          if (this.setPointerOverMesh(WW.pickedMesh, RW.pointerId, WW, RW), !MW.doNotHandleCursors && wW && this._pointerOverMesh) {
            const WW = this._pointerOverMesh._getActionManagerForTrigger();
            WW && WW.hasPointerTriggers && (wW.style.cursor = WW.hoverCursor || MW.hoverCursor)
          }
        } else this.setPointerOverMesh(null, RW.pointerId, WW, RW)
      }
      simulatePointerMove(WW, RW) {
        const MW = new PointerEvent("pointermove", RW);
        MW.inputIndex = rR.Move, this._checkPrePointerObservable(WW, MW, FW.c.POINTERMOVE) || this._processPointerMove(WW, MW)
      }
      simulatePointerDown(WW, RW) {
        const MW = new PointerEvent("pointerdown", RW);
        MW.inputIndex = MW.button + 2, this._checkPrePointerObservable(WW, MW, FW.c.POINTERDOWN) || this._processPointerDown(WW, MW)
      }
      _processPointerDown(WW, RW) {
        const MW = this._scene;
        if (WW?.pickedMesh) {
          this._pickedDownMesh = WW.pickedMesh;
          const wW = WW.pickedMesh._getActionManagerForTrigger();
          if (wW) {
            if (wW.hasPickTriggers) switch (wW.processTrigger(5, new gR(WW.pickedMesh, MW.pointerX, MW.pointerY, WW.pickedMesh, RW, WW)), RW.button) {
              case 0:
                wW.processTrigger(2, new gR(WW.pickedMesh, MW.pointerX, MW.pointerY, WW.pickedMesh, RW, WW));
                break;
              case 1:
                wW.processTrigger(4, new gR(WW.pickedMesh, MW.pointerX, MW.pointerY, WW.pickedMesh, RW, WW));
                break;
              case 2:
                wW.processTrigger(3, new gR(WW.pickedMesh, MW.pointerX, MW.pointerY, WW.pickedMesh, RW, WW))
            }
            wW.hasSpecificTrigger(8) && window.setTimeout((() => {
              const WW = MW.WM(this._unTranslatedPointerX, this._unTranslatedPointerY, (WW => WW.DC && WW.isVisible && WW.isReady() && WW.actionManager && WW.actionManager.hasSpecificTrigger(8) && WW === this._pickedDownMesh), !1, MW.cameraToUseForPointers);
              WW?.pickedMesh && wW && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > uW.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, wW.processTrigger(8, gR.CreateNew(WW.pickedMesh, RW)))
            }), uW.LongPressDelay)
          }
        } else
          for (const zR of MW._pointerDownStage) WW = zR.action(this._unTranslatedPointerX, this._unTranslatedPointerY, WW, RW, !1);
        let wW;
        const CW = FW.c.POINTERDOWN;
        WW ? (MW.onPointerDown && MW.onPointerDown(RW, WW, CW), wW = new FW.g(CW, RW, WW), this._setRayOnPointerInfo(WW, RW)) : wW = new FW.g(CW, RW, null, this), MW.onPointerObservable.hasObservers() && MW.onPointerObservable.notifyObservers(wW, CW)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(WW, RW, MW) {
        const wW = new PointerEvent("pointerup", RW);
        wW.inputIndex = rR.Move;
        const CW = new KW;
        MW ? CW.mN = !0 : CW.singleClick = !0, this._checkPrePointerObservable(WW, wW, FW.c.POINTERUP) || this._processPointerUp(WW, wW, CW)
      }
      _processPointerUp(WW, RW, MW) {
        const wW = this._scene;
        if (WW?.pickedMesh) {
          if (this._pickedUpMesh = WW.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (wW.onPointerPick && wW.onPointerPick(RW, WW), MW.singleClick && !MW.ignore && wW.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const MW = FW.c.POINTERPICK,
              CW = new FW.g(MW, RW, WW);
            this._setRayOnPointerInfo(WW, RW), wW.onPointerObservable.notifyObservers(CW, MW)
          }
          const CW = WW.pickedMesh._getActionManagerForTrigger();
          if (CW && !MW.ignore) {
            CW.processTrigger(7, gR.CreateNew(WW.pickedMesh, RW, WW)), !MW.hasSwiped && MW.singleClick && CW.processTrigger(1, gR.CreateNew(WW.pickedMesh, RW, WW));
            const wW = WW.pickedMesh._getActionManagerForTrigger(6);
            MW.mN && wW && wW.processTrigger(6, gR.CreateNew(WW.pickedMesh, RW, WW))
          }
        } else if (!MW.ignore)
          for (const CW of wW._pointerUpStage) WW = CW.action(this._unTranslatedPointerX, this._unTranslatedPointerY, WW, RW, MW.mN);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const WW = this._pickedDownMesh._getActionManagerForTrigger(16);
          WW && WW.processTrigger(16, gR.CreateNew(this._pickedDownMesh, RW))
        }
        if (!MW.ignore) {
          const CW = new FW.g(FW.c.POINTERUP, RW, WW);
          if (this._setRayOnPointerInfo(WW, RW), wW.onPointerObservable.notifyObservers(CW, FW.c.POINTERUP), wW.onPointerUp && wW.onPointerUp(RW, WW, FW.c.POINTERUP), !MW.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let CW = 0;
            if (MW.singleClick ? CW = FW.c.POINTERTAP : MW.mN && (CW = FW.c.POINTERDOUBLETAP), CW) {
              const MW = new FW.g(CW, RW, WW);
              wW.onPointerObservable.hasObservers() && wW.onPointerObservable.hasSpecificMask(CW) && wW.onPointerObservable.notifyObservers(MW, CW)
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
          RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const CW = this._scene,
          zR = CW.mC();
        wW || (wW = zR.getInputElement()), this._alreadyAttached && this.detachControl(), wW && (this._alreadyAttachedTo = wW), this._deviceSourceManager = new xR(zR), this._initActionManager = WW => {
          if (!this._meshPickProceed) {
            const RW = CW.skipPointerUpPicking || 0 === CW._registeredActions && !this._checkForPicking() && !CW.onPointerUp ? null : CW.WM(this._unTranslatedPointerX, this._unTranslatedPointerY, CW.pointerUpPredicate, CW.pointerUpFastCheck, CW.cameraToUseForPointers, CW.pointerUpTrianglePredicate);
            this._currentPickResult = RW, RW && (WW = RW.hit && RW.pickedMesh ? RW.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return WW
        }, this._delayedSimpleClick = (WW, RW, MW) => {
          if ((Date.now() - this._previousStartingPointerTime > uW.DoubleClickDelay && !this._doubleClickOccured || WW !== this._previousButtonPressed) && (this._doubleClickOccured = !1, RW.singleClick = !0, RW.ignore = !1, this._delayedClicks[WW])) {
            const RW = this._delayedClicks[WW].evt,
              MW = FW.c.POINTERTAP,
              wW = new FW.g(MW, RW, this._currentPickResult);
            CW.onPointerObservable.hasObservers() && CW.onPointerObservable.hasSpecificMask(MW) && CW.onPointerObservable.notifyObservers(wW, MW), this._delayedClicks[WW] = null
          }
        }, this._initClickEvent = (WW, RW, MW, wW) => {
          const CW = new KW;
          this._currentPickResult = null;
          let zR = null,
            AW = WW.hasSpecificMask(FW.c.POINTERPICK) || RW.hasSpecificMask(FW.c.POINTERPICK) || WW.hasSpecificMask(FW.c.POINTERTAP) || RW.hasSpecificMask(FW.c.POINTERTAP) || WW.hasSpecificMask(FW.c.POINTERDOUBLETAP) || RW.hasSpecificMask(FW.c.POINTERDOUBLETAP);
          !AW && fW && (zR = this._initActionManager(zR, CW), zR && (AW = zR.hasPickTriggers));
          let bR = !1;
          if (AW = AW && !this._isMultiTouchGesture, AW) {
            const AW = MW.button;
            if (CW.hasSwiped = this._isPointerSwiping(), !CW.hasSwiped) {
              let yR = !uW.ExclusiveDoubleClickMode;
              if (yR || (yR = !WW.hasSpecificMask(FW.c.POINTERDOUBLETAP) && !RW.hasSpecificMask(FW.c.POINTERDOUBLETAP), yR && !fW.HasSpecificTrigger(6) && (zR = this._initActionManager(zR, CW), zR && (yR = !zR.hasSpecificTrigger(6)))), yR)(Date.now() - this._previousStartingPointerTime > uW.DoubleClickDelay || AW !== this._previousButtonPressed) && (CW.singleClick = !0, wW(CW, this._currentPickResult), bR = !0);
              else {
                const WW = {
                  evt: MW,
                  clickInfo: CW,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, AW, CW, wW), uW.DoubleClickDelay)
                };
                this._delayedClicks[AW] = WW
              }
              let NW = WW.hasSpecificMask(FW.c.POINTERDOUBLETAP) || RW.hasSpecificMask(FW.c.POINTERDOUBLETAP);
              !NW && fW.HasSpecificTrigger(6) && (zR = this._initActionManager(zR, CW), zR && (NW = zR.hasSpecificTrigger(6))), NW && (AW === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < uW.DoubleClickDelay && !this._doubleClickOccured ? (CW.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = AW, uW.ExclusiveDoubleClickMode ? (this._delayedClicks[AW] && (clearTimeout(this._delayedClicks[AW]?.timeoutId), this._delayedClicks[AW] = null), wW(CW, this._previousPickResult)) : wW(CW, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, CW.mN = !0, CW.ignore = !1, uW.ExclusiveDoubleClickMode && this._delayedClicks[AW] && (clearTimeout(this._delayedClicks[AW]?.timeoutId), this._delayedClicks[AW] = null), wW(CW, this._currentPickResult)), bR = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = AW))
            }
          }
          bR || wW(CW, this._currentPickResult)
        }, this._onPointerMove = WW => {
          if (this._updatePointerPosition(WW), this._latestPointerMoveEvents.set(WW.pointerId, {
              event: WW,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > uW.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > uW.DragMovementThreshold), zR.isPointerLock && zR._verifyPointerLock(), this._checkPrePointerObservable(null, WW, WW.inputIndex >= rR.MouseWheelX && WW.inputIndex <= rR.MouseWheelZ ? FW.c.POINTERWHEEL : FW.c.POINTERMOVE)) return;
          if (!CW.cameraToUseForPointers && !CW.activeCamera) return;
          if (CW.skipPointerMovePicking) return void this._processPointerMove(new TW.d, WW);
          this._ensurePointerMovePredicate();
          const RW = CW._registeredActions > 0 || CW.constantlyUpdateMeshUnderPointer ? this._pickMove(WW) : null;
          this._processPointerMove(RW, WW)
        }, this._onPointerDown = WW => {
          const RW = this._activePointerIds.indexOf(-1);
          if (-1 === RW ? this._activePointerIds.push(WW.pointerId) : this._activePointerIds[RW] = WW.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, uW.ExclusiveDoubleClickMode)
            for (let wW = 0; wW < this._delayedClicks.length; wW++)
              if (this._delayedClicks[wW])
                if (WW.button === wW) clearTimeout(this._delayedClicks[wW]?.timeoutId);
                else {
                  const WW = this._delayedClicks[wW].clickInfo;
                  this._doubleClickOccured = !1, WW.singleClick = !0, WW.ignore = !1;
                  const RW = this._delayedClicks[wW].evt,
                    MW = FW.c.POINTERTAP,
                    zR = new FW.g(MW, RW, this._currentPickResult);
                  CW.onPointerObservable.hasObservers() && CW.onPointerObservable.hasSpecificMask(MW) && CW.onPointerObservable.notifyObservers(zR, MW), this._delayedClicks[wW] = null
                } if (this._updatePointerPosition(WW), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = WW.button), CW.preventDefaultOnPointerDown && wW && (WW.preventDefault(), wW.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, WW, FW.c.POINTERDOWN)) return;
          if (!CW.cameraToUseForPointers && !CW.activeCamera) return;
          let MW;
          this._pointerCaptures[WW.pointerId] = !0, CW.pointerDownPredicate || (CW.pointerDownPredicate = WW => WW.DC && WW.isVisible && WW.isReady() && WW.isEnabled() && (!CW.cameraToUseForPointers || 0 !== (CW.cameraToUseForPointers.layerMask & WW.layerMask))), this._pickedDownMesh = null, MW = CW.skipPointerDownPicking || 0 === CW._registeredActions && !this._checkForPicking() && !CW.onPointerDown ? new TW.d : CW.WM(this._unTranslatedPointerX, this._unTranslatedPointerY, CW.pointerDownPredicate, CW.pointerDownFastCheck, CW.cameraToUseForPointers, CW.pointerDownTrianglePredicate), this._processPointerDown(MW, WW)
        }, this._onPointerUp = WW => {
          const RW = this._activePointerIds.indexOf(WW.pointerId); - 1 !== RW && (this._activePointerIds[RW] = -1, this._activePointerIdsCount--, "touch" === WW.pointerType && this._latestPointerMoveEvents.delete(WW.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(WW), CW.preventDefaultOnPointerUp && wW && (WW.preventDefault(), wW.focus()), this._initClickEvent(CW.onPrePointerObservable, CW.onPointerObservable, WW, ((RW, MW) => {
            if (CW.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !RW.ignore)) {
              if (this._checkPrePointerObservable(null, WW, FW.c.POINTERUP)) return this._swipeButtonPressed === WW.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === WW.buttons && (this._pointerCaptures[WW.pointerId] = !1));
              RW.hasSwiped || (RW.singleClick && CW.onPrePointerObservable.hasSpecificMask(FW.c.POINTERTAP) && this._checkPrePointerObservable(null, WW, FW.c.POINTERTAP) && (this._skipPointerTap = !0), RW.mN && CW.onPrePointerObservable.hasSpecificMask(FW.c.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, WW, FW.c.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[WW.pointerId] ? (0 === WW.buttons && (this._pointerCaptures[WW.pointerId] = !1), (CW.cameraToUseForPointers || CW.activeCamera) && (CW.pointerUpPredicate || (CW.pointerUpPredicate = WW => WW.DC && WW.isVisible && WW.isReady() && WW.isEnabled() && (!CW.cameraToUseForPointers || 0 !== (CW.cameraToUseForPointers.layerMask & WW.layerMask))), !this._meshPickProceed && (fW && fW.HasTriggers || this._checkForPicking() || CW.onPointerUp) && this._initActionManager(null, RW), MW || (MW = this._currentPickResult), this._processPointerUp(MW, WW, RW), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === WW.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === WW.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = WW => {
          const RW = sW.e.KEYDOWN;
          if (CW.onPreKeyboardObservable.hasObservers()) {
            const MW = new sW.i(RW, WW);
            if (CW.onPreKeyboardObservable.notifyObservers(MW, RW), MW.skipOnKeyboardObservable) return
          }
          if (CW.onKeyboardObservable.hasObservers()) {
            const MW = new sW.m(RW, WW);
            CW.onKeyboardObservable.notifyObservers(MW, RW)
          }
          CW.actionManager && CW.actionManager.processTrigger(14, gR.CreateNewFromScene(CW, WW))
        }, this._onKeyUp = WW => {
          const RW = sW.e.KEYUP;
          if (CW.onPreKeyboardObservable.hasObservers()) {
            const MW = new sW.i(RW, WW);
            if (CW.onPreKeyboardObservable.notifyObservers(MW, RW), MW.skipOnKeyboardObservable) return
          }
          if (CW.onKeyboardObservable.hasObservers()) {
            const MW = new sW.m(RW, WW);
            CW.onKeyboardObservable.notifyObservers(MW, RW)
          }
          CW.actionManager && CW.actionManager.processTrigger(15, gR.CreateNewFromScene(CW, WW))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((wW => {
          wW.deviceType === QW.Mouse ? wW.onInputChangedObservable.add((CW => {
            this._originMouseEvent = CW, CW.inputIndex === rR.LeftClick || CW.inputIndex === rR.MiddleClick || CW.inputIndex === rR.RightClick || CW.inputIndex === rR.BrowserBack || CW.inputIndex === rR.BrowserForward ? RW && 1 === wW.getInput(CW.inputIndex) ? this._onPointerDown(CW) : WW && 0 === wW.getInput(CW.inputIndex) && this._onPointerUp(CW) : MW && (CW.inputIndex === rR.Move ? this._onPointerMove(CW) : CW.inputIndex !== rR.MouseWheelX && CW.inputIndex !== rR.MouseWheelY && CW.inputIndex !== rR.MouseWheelZ || this._onPointerMove(CW))
          })) : wW.deviceType === QW.Touch ? wW.onInputChangedObservable.add((CW => {
            CW.inputIndex === rR.LeftClick && (RW && 1 === wW.getInput(CW.inputIndex) ? (this._onPointerDown(CW), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : WW && 0 === wW.getInput(CW.inputIndex) && (this._onPointerUp(CW), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), MW && CW.inputIndex === rR.Move && this._onPointerMove(CW)
          })) : wW.deviceType === QW.Keyboard && wW.onInputChangedObservable.add((WW => {
            "keydown" === WW.type ? this._onKeyDown(WW) : "keyup" === WW.type && this._onKeyUp(WW)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 ? arguments[2] : void 0,
          wW = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[RW] === WW && (!WW || !WW._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const CW = this._meshUnderPointerId[RW];
        let zR;
        CW && (zR = CW._getActionManagerForTrigger(10), zR && zR.processTrigger(10, new gR(CW, this._pointerX, this._pointerY, WW, wW, {
          pointerId: RW
        }))), WW ? (this._meshUnderPointerId[RW] = WW, this._pointerOverMesh = WW, zR = WW._getActionManagerForTrigger(9), zR && zR.processTrigger(9, new gR(WW, this._pointerX, this._pointerY, WW, wW, {
          pointerId: RW,
          pickResult: MW
        }))) : (delete this._meshUnderPointerId[RW], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: WW,
          pointerId: RW
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(WW) {
        this._pointerOverMesh === WW && (this._pointerOverMesh = null), this._pickedDownMesh === WW && (this._pickedDownMesh = null), this._pickedUpMesh === WW && (this._pickedUpMesh = null);
        for (const RW in this._meshUnderPointerId) this._meshUnderPointerId[RW] === WW && delete this._meshUnderPointerId[RW]
      }
    }
    uW.DragMovementThreshold = 10, uW.LongPressDelay = 500, uW.DoubleClickDelay = 300, uW.ExclusiveDoubleClickMode = !1;
    var OW = MW(37541),
      nW = MW(35376),
      GW = MW(35845);
    class LW {
      static get UniqueId() {
        const WW = this._UniqueIdCounter;
        return this._UniqueIdCounter++, WW
      }
    }
    LW._UniqueIdCounter = 1;
    var HW = MW(37635),
      DW = MW(37774),
      qR = MW(35330);
    class ZW {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var SW, WR, RR, MR, wR, CR, zM, AR, bM, yM, NR, eR, BR, tM, TR, gM, iM, YR, JR, PR, IR, oR, lR, FR, fR, QR, rM, cM, XR, jM, kM, aM, sR, dR, pR, hR, UR, ER, VR, mM, xM, vM, KR, uR, OR, nR, GR, LR, HR, DR, qM, ZR, SR, WM = MW(36721),
      RM = MW(35361);
    const MM = new eW.s,
      wM = new eW.s;
    var CM;
    ! function(WW) {
      WW[WW.BackwardCompatible = 0] = "BackwardCompatible", WW[WW.Intermediate = 1] = "Intermediate", WW[WW.Aggressive = 2] = "Aggressive"
    }(CM || (CM = {}));
    class zw {
      static DefaultMaterialFactory(WW) {
        throw (0, lW.g)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, lW.g)("DefaultCollisionCoordinator")
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
        for (const RW of this.skeletons) WW = WW.concat(RW.bones);
        return WW
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(WW) {
        this._animationPropertiesOverride = WW
      }
      set onDispose(WW) {
        this._onDisposeObserver && this.rMW.remove(this._onDisposeObserver), this._onDisposeObserver = this.rMW.add(WW)
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
        return uW.DragMovementThreshold
      }
      static set DragMovementThreshold(WW) {
        uW.DragMovementThreshold = WW
      }
      static get LongPressDelay() {
        return uW.LongPressDelay
      }
      static set LongPressDelay(WW) {
        uW.LongPressDelay = WW
      }
      static get DoubleClickDelay() {
        return uW.DoubleClickDelay
      }
      static set DoubleClickDelay(WW) {
        uW.DoubleClickDelay = WW
      }
      static get ExclusiveDoubleClickMode() {
        return uW.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(WW) {
        uW.ExclusiveDoubleClickMode = WW
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? eW.q.ZeroReadOnly
      }
      bindEyePosition(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wW = this._eyePosition,
          CW = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          zR = this.floatingOriginOffset,
          AW = MM.set(wW.x, wW.y, wW.z, CW ? -1 : 1),
          bR = AW.subtractFromFloatsToRef(zR.x, zR.y, zR.z, 0, wM);
        return WW && (MW ? WW.setFloat3(RW, bR.x, bR.y, bR.z) : WW.setVector4(RW, bR)), AW
      }
      finalizeSceneUbo() {
        const WW = this.getSceneUniformBuffer(),
          RW = this.bindEyePosition(null),
          MW = this.floatingOriginOffset;
        return WW.updateFloat4("vEyePosition", RW.x - MW.x, RW.y - MW.y, RW.z - MW.z, RW.w), WW.update(), WW
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
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), WW && (this._unObserveActiveCameras = (0, qR.g)(WW, (() => {
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
        return zw.DefaultMaterialFactory !== zw._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = zw.DefaultMaterialFactory(this)), this._defaultMaterial
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
        return this._collisionCoordinator || (this._collisionCoordinator = zw.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
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
      SyW(WW) {
        this._components.push(WW), this._transientComponents.push(WW);
        const RW = WW;
        RW.addFromContainer && RW.serialize && this._serializableComponents.push(RW)
      }
      _getComponent(WW) {
        for (const RW of this._components)
          if (RW.name === WW) return RW;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(WW, RW) {
        this._inputManager = new uW(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new nW.h(.2, .2, .3, 1), this.onClearColorChangedObservable = new AW.c, this.ambientColor = new nW.d(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new AW.c, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.Xs = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.rMW = new AW.c, this._onDisposeObserver = null, this.onBeforeRenderObservable = new AW.c, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new AW.c, this.onAfterRenderCameraObservable = new AW.c, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new AW.c, this.onAfterAnimationsObservable = new AW.c, this.onBeforeDrawPhaseObservable = new AW.c, this.onAfterDrawPhaseObservable = new AW.c, this.onReadyObservable = new AW.c, this.onBeforeCameraRenderObservable = new AW.c, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new AW.c, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new AW.c, this.onAfterActiveMeshesEvaluationObservable = new AW.c, this.onBeforeParticlesRenderingObservable = new AW.c, this.onAfterParticlesRenderingObservable = new AW.c, this.onDataLoadedObservable = new AW.c, this.onNewCameraAddedObservable = new AW.c, this.onCameraRemovedObservable = new AW.c, this.onNewLightAddedObservable = new AW.c, this.onLightRemovedObservable = new AW.c, this.onNewGeometryAddedObservable = new AW.c, this.onGeometryRemovedObservable = new AW.c, this.onNewTransformNodeAddedObservable = new AW.c, this.onTransformNodeRemovedObservable = new AW.c, this.onNewMeshAddedObservable = new AW.c, this.onMeshRemovedObservable = new AW.c, this.onNewSkeletonAddedObservable = new AW.c, this.onSkeletonRemovedObservable = new AW.c, this.onNewParticleSystemAddedObservable = new AW.c, this.onParticleSystemRemovedObservable = new AW.c, this.onNewAnimationGroupAddedObservable = new AW.c, this.onAnimationGroupRemovedObservable = new AW.c, this.onNewMaterialAddedObservable = new AW.c, this.onNewMultiMaterialAddedObservable = new AW.c, this.onMaterialRemovedObservable = new AW.c, this.onMultiMaterialRemovedObservable = new AW.c, this.onNewTextureAddedObservable = new AW.c, this.onTextureRemovedObservable = new AW.c, this.onNewFrameGraphAddedObservable = new AW.c, this.onFrameGraphRemovedObservable = new AW.c, this.onNewObjectRendererAddedObservable = new AW.c, this.onObjectRendererRemovedObservable = new AW.c, this.onNewPostProcessAddedObservable = new AW.c, this.onPostProcessRemovedObservable = new AW.c, this.onNewEffectLayerAddedObservable = new AW.c, this.onEffectLayerRemovedObservable = new AW.c, this.onBeforeRenderTargetsRenderObservable = new AW.c, this.onAfterRenderTargetsRenderObservable = new AW.c, this.onBeforeStepObservable = new AW.c, this.onAfterStepObservable = new AW.c, this.onActiveCameraChanged = new AW.c, this.onActiveCamerasChanged = new AW.c, this.onBeforeRenderingGroupObservable = new AW.c, this.onAfterRenderingGroupObservable = new AW.c, this.onMeshImportedObservable = new AW.c, this.onAnimationFileImportedObservable = new AW.c, this.onEnvironmentTextureChangedObservable = new AW.c, this.onMeshUnderPointerUpdatedObservable = new AW.c, this._registeredForLateAnimationBindings = new bR.e(256), this._pointerPickingConfiguration = new ZW, this.onPrePointerObservable = new AW.c, this.onPointerObservable = new AW.c, this.onPreKeyboardObservable = new AW.c, this.onKeyboardObservable = new AW.c, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = zw.FOGMODE_NONE, this.fogColor = new nW.d(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.lMW = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new eW.q(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new bR.e(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new OW.d, this._activeIndices = new OW.d, this._activeParticles = new OW.d, this._activeBones = new OW.d, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new bR.i(256), this._processedMaterials = new bR.i(256), this._renderTargets = new bR.e(256), this._materialsRenderTargets = new bR.e(256), this._activeParticleSystems = new bR.i(256), this._activeSkeletons = new bR.e(32), this._softwareSkinnedMeshes = new bR.e(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = eW.d.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = PW.f.Create(), this._beforeClearStage = PW.f.Create(), this._beforeRenderTargetClearStage = PW.f.Create(), this._gatherRenderTargetsStage = PW.f.Create(), this._gatherActiveCameraRenderTargetsStage = PW.f.Create(), this._isReadyForMeshStage = PW.f.Create(), this._beforeEvaluateActiveMeshStage = PW.f.Create(), this._evaluateSubMeshStage = PW.f.Create(), this._preActiveMeshStage = PW.f.Create(), this._cameraDrawRenderTargetStage = PW.f.Create(), this._beforeCameraDrawStage = PW.f.Create(), this._beforeRenderTargetDrawStage = PW.f.Create(), this._beforeRenderingGroupDrawStage = PW.f.Create(), this._beforeRenderingMeshStage = PW.f.Create(), this._afterRenderingMeshStage = PW.f.Create(), this._afterRenderingGroupDrawStage = PW.f.Create(), this._afterCameraDrawStage = PW.f.Create(), this._afterCameraPostProcessStage = PW.f.Create(), this._afterRenderTargetDrawStage = PW.f.Create(), this._afterRenderTargetPostProcessStage = PW.f.Create(), this._afterRenderStage = PW.f.Create(), this._pointerMoveStage = PW.f.Create(), this._pointerDownStage = PW.f.Create(), this._pointerUpStage = PW.f.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new AW.c, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const MW = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...RW
        };
        this.defaultCameraLayerMask = MW.defaultCameraLayerMask, this.defaultRenderableLayerMask = MW.defaultRenderableLayerMask, WW = this._engine = WW || oW.d.LastCreatedEngine, MW.virtual ? WW._virtualScenes.push(this) : (oW.d._LastCreatedScene = this, WW.scenes.push(this)), (WW.getCreationOptions().useLargeWorldRendering || RW?.useFloatingOrigin) && ((0, YW.e)(), this._floatingOriginScene = this, YW.b.QRW = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new JW.d(this), iR.d && (this.postProcessManager = new iR.d(this)), (0, IW.m)() && this.attachControl(), this._createUbo(), BW.b && (this._imageProcessingConfiguration = new BW.b), this.setDefaultCandidateProviders(), MW.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = MW.useMaterialMeshMap, this.useClonedMeshMap = MW.useClonedMeshMap, RW && RW.virtual || WW.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(WW) {
        return this._defaultSubMeshCandidates.data = WW.Qs, this._defaultSubMeshCandidates.length = WW.Qs.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = WW => this._getDefaultSubMeshCandidates(WW), this.getIntersectingSubMeshCandidates = (WW, RW) => this._getDefaultSubMeshCandidates(WW), this.getCollidingSubMeshCandidates = (WW, RW) => this._getDefaultSubMeshCandidates(WW)
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
      isCachedMaterialInvalid(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== RW || this._cachedMaterial !== WW || this._cachedVisibility !== MW
      }
      mC() {
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
      simulatePointerMove(WW, RW) {
        return this._inputManager.simulatePointerMove(WW, RW), this
      }
      simulatePointerDown(WW, RW) {
        return this._inputManager.simulatePointerDown(WW, RW), this
      }
      simulatePointerUp(WW, RW, MW) {
        return this._inputManager.simulatePointerUp(WW, RW, MW), this
      }
      isPointerCaptured() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(WW)
      }
      attachControl() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(WW, RW, MW)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let WW, RW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const MW = this.mC(),
          wW = MW.currentRenderPassId;
        MW.currentRenderPassId = this.activeCamera?.renderPassId ?? wW;
        let CW = !0;
        for (this._pendingData.length > 0 && (CW = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && CW && (CW = this.depthPeelingRenderer.isReady()), RW && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), WW = 0; WW < this.meshes.length; WW++) {
          const wW = this.meshes[WW];
          if (!wW.Qs || 0 === wW.Qs.length) continue;
          if (!wW.isReady(!0)) {
            CW = !1;
            continue
          }
          const zR = wW.hasThinInstances || "InstancedMesh" === wW.getClassName() || "InstancedLinesMesh" === wW.getClassName() || MW.getCaps().instancedArrays && wW.instances.length > 0;
          for (let WW = 0, RW = this._isReadyForMeshStage; WW < RW.length; WW++) {
            RW[WW].action(wW, zR) || (CW = !1)
          }
          if (!RW) continue;
          const AW = wW.material || this.defaultMaterial;
          if (AW)
            if (AW._storeEffectOnSubMeshes)
              for (const WW of wW.Qs) {
                const RW = WW.Ow();
                RW && RW.hasRenderTargetTextures && null != RW.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(RW) && (this._processedMaterials.push(RW), this._materialsRenderTargets.concatWithNoDuplicate(RW.getRenderTargetTextures()))
              } else AW.hasRenderTargetTextures && null != AW.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(AW) && (this._processedMaterials.push(AW), this._materialsRenderTargets.concatWithNoDuplicate(AW.getRenderTargetTextures()))
        }
        if (RW) {
          for (WW = 0; WW < this._materialsRenderTargets.length; ++WW) {
            this._materialsRenderTargets.data[WW].isReadyForRendering() || (CW = !1)
          }
          for (WW = 0; WW < this.customRenderTargets.length; ++WW) {
            this.customRenderTargets[WW].isReadyForRendering() || (CW = !1)
          }
        }
        for (WW = 0; WW < this.geometries.length; WW++) {
          2 === this.geometries[WW].delayLoadState && (CW = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const zR of this.activeCameras) zR.isReady(!0) || (CW = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (CW = !1));
        for (const zR of this.Xs) zR.isReady() || (CW = !1);
        if (this.proceduralTexturesEnabled)
          for (const zR of this.proceduralTextures) zR.isReady() || (CW = !1);
        if (this.layers)
          for (const zR of this.layers) zR.isReady() || (CW = !1);
        if (this.effectLayers)
          for (const zR of this.effectLayers) zR.isLayerReady() || (CW = !1);
        for (const zR of this._isReadyChecks) zR.isReady() || (CW = !1);
        return MW.areAllEffectsReady() || (CW = !1), MW.currentRenderPassId = wW, CW
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
        const RW = () => {
          WW(), setTimeout((() => {
            this.unregisterBeforeRender(RW)
          }))
        };
        this.registerBeforeRender(RW)
      }
      executeOnceBeforeRender(WW, RW) {
        void 0 !== RW ? setTimeout((() => {
          this._executeOnceBeforeRender(WW)
        }), RW) : this._executeOnceBeforeRender(WW)
      }
      addPendingData(WW) {
        this._pendingData.push(WW)
      }
      removePendingData(WW) {
        const RW = this.isLoading,
          MW = this._pendingData.indexOf(WW); - 1 !== MW && this._pendingData.splice(MW, 1), RW && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
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
        const RW = this._isReadyChecks.indexOf(WW); - 1 !== RW && this._isReadyChecks.splice(RW, 1)
      }
      executeWhenReady(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(WW), null === this._executeWhenReadyTimeoutId && this._checkIsReady(RW)
      }
      async whenReadyAsync() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((RW => {
          this.executeWhenReady((() => {
            RW()
          }), WW)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = zR.d.Now;
        else if (this.onReadyTimeoutDuration > 0 && zR.d.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(WW)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(WW)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = zR.d.Now
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
      setTransformMatrix(WW, RW, MW, wW) {
        this._multiviewSceneUboIsActive = !!(MW && wW && this._multiviewSceneUbo), this._viewUpdateFlag === WW.updateFlag && this._projectionUpdateFlag === RW.updateFlag || (this._viewUpdateFlag = WW.updateFlag, this._projectionUpdateFlag = RW.updateFlag, this._viewMatrix = WW, this._projectionMatrix = RW, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new eW.d), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? GW.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = GW.e.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(MW, wW) : this._sceneUbo.useUbo && (this._sceneUbo.aAW("viewProjection", this._transformMatrix), this._sceneUbo.aAW("view", this._viewMatrix), this._sceneUbo.aAW("projection", this._projectionMatrix), this._sceneUbo.aAW("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(WW, RW) {
        const MW = "boolean" === typeof RW ? RW : RW?.trackUBOsInFrame,
          wW = new tR.b(this._engine, void 0, !1, WW ?? "LC", void 0, MW);
        return wW.addUniform("viewProjection", 16), wW.addUniform("view", 16), wW.addUniform("projection", 16), wW.addUniform("vEyePosition", 4), wW.addUniform("inverseProjection", 16), wW
      }
      setSceneUniformBuffer(WW) {
        this._sceneUbo = WW, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : eW.q.ZeroReadOnly
      }
      getUniqueId() {
        return LW.UniqueId
      }
      TNW(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(WW), WW._resyncLightSources(), WW.parent || WW._addToSceneRootNodes(), CW.c.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(WW)
          })), RW)) {
          const RW = WW.getChildMeshes();
          for (const WW of RW) this.TNW(WW)
        }
      }
      dRW(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const MW = this.meshes.indexOf(WW);
        if (-1 !== MW && (this.meshes.splice(MW, 1), WW.parent || WW._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(WW), this.onMeshRemovedObservable.notifyObservers(WW), RW) {
          const RW = WW.getChildMeshes();
          for (const WW of RW) this.dRW(WW)
        }
        return MW
      }
      addTransformNode(WW) {
        this._blockEntityCollection || WW.QRW() === this && -1 !== WW._indexInSceneTransformNodesArray || (WW._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(WW), WW.parent || WW._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(WW))
      }
      removeTransformNode(WW) {
        const RW = WW._indexInSceneTransformNodesArray;
        if (-1 !== RW) {
          if (RW !== this.transformNodes.length - 1) {
            const WW = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[RW] = WW, WW._indexInSceneTransformNodesArray = RW
          }
          WW._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), WW.parent || WW._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(WW), RW
      }
      removeSkeleton(WW) {
        const RW = this.skeletons.indexOf(WW);
        return -1 !== RW && (this.skeletons.splice(RW, 1), this.onSkeletonRemovedObservable.notifyObservers(WW), this._executeActiveContainerCleanup(this._activeSkeletons)), RW
      }
      removeMorphTargetManager(WW) {
        const RW = this.morphTargetManagers.indexOf(WW);
        return -1 !== RW && this.morphTargetManagers.splice(RW, 1), RW
      }
      removeLight(WW) {
        const RW = this.lights.indexOf(WW);
        if (-1 !== RW) {
          for (const RW of this.meshes) RW._removeLightSource(WW, !1);
          this.lights.splice(RW, 1), this.sortLightsByPriority(), WW.parent || WW._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(WW)
        }
        return RW
      }
      removeCamera(WW) {
        const RW = this.cameras.indexOf(WW);
        if (-1 !== RW && (this.cameras.splice(RW, 1), WW.parent || WW._removeFromSceneRootNodes()), this.activeCameras) {
          const RW = this.activeCameras.indexOf(WW); - 1 !== RW && this.activeCameras.splice(RW, 1)
        }
        return this.activeCamera === WW && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(WW), RW
      }
      removeParticleSystem(WW) {
        const RW = this.Xs.indexOf(WW);
        return -1 !== RW && (this.Xs.splice(RW, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(WW), RW
      }
      removeAnimation(WW) {
        const RW = this.animations.indexOf(WW);
        return -1 !== RW && this.animations.splice(RW, 1), RW
      }
      stopAnimation(WW, RW, MW) {}
      removeAnimationGroup(WW) {
        const RW = this.animationGroups.indexOf(WW);
        return -1 !== RW && this.animationGroups.splice(RW, 1), this.onAnimationGroupRemovedObservable.notifyObservers(WW), RW
      }
      removeMultiMaterial(WW) {
        const RW = this.multiMaterials.indexOf(WW);
        return -1 !== RW && this.multiMaterials.splice(RW, 1), this.onMultiMaterialRemovedObservable.notifyObservers(WW), RW
      }
      removeMaterial(WW) {
        const RW = WW._indexInSceneMaterialArray;
        if (-1 !== RW && RW < this.materials.length) {
          if (RW !== this.materials.length - 1) {
            const WW = this.materials[this.materials.length - 1];
            this.materials[RW] = WW, WW._indexInSceneMaterialArray = RW
          }
          WW._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(WW), RW
      }
      removeActionManager(WW) {
        const RW = this.actionManagers.indexOf(WW);
        return -1 !== RW && this.actionManagers.splice(RW, 1), RW
      }
      removeTexture(WW) {
        const RW = this.textures.indexOf(WW);
        return -1 !== RW && this.textures.splice(RW, 1), this.onTextureRemovedObservable.notifyObservers(WW), RW
      }
      removeFrameGraph(WW) {
        const RW = this.frameGraphs.indexOf(WW);
        return -1 !== RW && this.frameGraphs.splice(RW, 1), this.onFrameGraphRemovedObservable.notifyObservers(WW), RW
      }
      removeObjectRenderer(WW) {
        const RW = this.objectRenderers.indexOf(WW);
        return -1 !== RW && this.objectRenderers.splice(RW, 1), this.onObjectRendererRemovedObservable.notifyObservers(WW), RW
      }
      removePostProcess(WW) {
        const RW = this.postProcesses.indexOf(WW);
        return -1 !== RW && this.postProcesses.splice(RW, 1), this.onPostProcessRemovedObservable.notifyObservers(WW), RW
      }
      removeEffectLayer(WW) {
        const RW = this.effectLayers.indexOf(WW);
        return -1 !== RW && this.effectLayers.splice(RW, 1), this.onEffectLayerRemovedObservable.notifyObservers(WW), RW
      }
      addLight(WW) {
        if (!this._blockEntityCollection) {
          this.lights.push(WW), this.sortLightsByPriority(), WW.parent || WW._addToSceneRootNodes();
          for (const RW of this.meshes) - 1 === RW.lightSources.indexOf(WW) && (RW.lightSources.push(WW), RW._resyncLightSources());
          CW.c.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(WW)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(DW.c.CompareLightsPriority)
      }
      addCamera(WW) {
        this._blockEntityCollection || (this.cameras.push(WW), CW.c.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(WW)
        })), WW.parent || WW._addToSceneRootNodes())
      }
      addSkeleton(WW) {
        this._blockEntityCollection || (this.skeletons.push(WW), CW.c.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(WW)
        })))
      }
      addParticleSystem(WW) {
        this._blockEntityCollection || (this.Xs.push(WW), CW.c.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(WW)
        })))
      }
      addAnimation(WW) {
        this._blockEntityCollection || this.animations.push(WW)
      }
      addAnimationGroup(WW) {
        this._blockEntityCollection || (this.animationGroups.push(WW), CW.c.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(WW)
        })))
      }
      addMultiMaterial(WW) {
        this._blockEntityCollection || (this.multiMaterials.push(WW), CW.c.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(WW)
        })))
      }
      addMaterial(WW) {
        this._blockEntityCollection || WW.QRW() === this && -1 !== WW._indexInSceneMaterialArray || (WW._indexInSceneMaterialArray = this.materials.length, this.materials.push(WW), CW.c.SetImmediate((() => {
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
        this.frameGraphs.push(WW), CW.c.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(WW)
        }))
      }
      addObjectRenderer(WW) {
        this.objectRenderers.push(WW), CW.c.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(WW)
        }))
      }
      addPostProcess(WW) {
        this._blockEntityCollection || (this.postProcesses.push(WW), CW.c.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(WW)
        })))
      }
      addEffectLayer(WW) {
        this._blockEntityCollection || (this.effectLayers.push(WW), CW.c.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(WW)
        })))
      }
      switchActiveCamera(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = WW, RW && WW.attachControl())
      }
      setActiveCameraById(WW) {
        const RW = this.getCameraById(WW);
        return RW ? (this.activeCamera = RW, RW) : null
      }
      setActiveCameraByName(WW) {
        const RW = this.getCameraByName(WW);
        return RW ? (this.activeCamera = RW, RW) : null
      }
      getAnimationGroupByName(WW) {
        for (let RW = 0; RW < this.animationGroups.length; RW++)
          if (this.animationGroups[RW].name === WW) return this.animationGroups[RW];
        return null
      }
      _getMaterial(WW, RW) {
        for (let MW = 0; MW < this.materials.length; MW++) {
          const WW = this.materials[MW];
          if (RW(WW)) return WW
        }
        if (WW)
          for (let MW = 0; MW < this.multiMaterials.length; MW++) {
            const WW = this.multiMaterials[MW];
            if (RW(WW)) return WW
          }
        return null
      }
      getMaterialByUniqueID(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(WW, RW)
      }
      getMaterialByUniqueId(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(RW, (RW => RW.uniqueId === WW))
      }
      getMaterialById(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(RW, (RW => RW.id === WW))
      }
      getMaterialByName(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(RW, (RW => RW.name === WW))
      }
      getLastMaterialById(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let MW = this.materials.length - 1; MW >= 0; MW--)
          if (this.materials[MW].id === WW) return this.materials[MW];
        if (RW)
          for (let MW = this.multiMaterials.length - 1; MW >= 0; MW--)
            if (this.multiMaterials[MW].id === WW) return this.multiMaterials[MW];
        return null
      }
      getTextureByUniqueId(WW) {
        for (let RW = 0; RW < this.textures.length; RW++)
          if (this.textures[RW].uniqueId === WW) return this.textures[RW];
        return null
      }
      getTextureByName(WW) {
        for (let RW = 0; RW < this.textures.length; RW++)
          if (this.textures[RW].name === WW) return this.textures[RW];
        return null
      }
      getCameraById(WW) {
        for (let RW = 0; RW < this.cameras.length; RW++)
          if (this.cameras[RW].id === WW) return this.cameras[RW];
        return null
      }
      getCameraByUniqueId(WW) {
        for (let RW = 0; RW < this.cameras.length; RW++)
          if (this.cameras[RW].uniqueId === WW) return this.cameras[RW];
        return null
      }
      getCameraByName(WW) {
        for (let RW = 0; RW < this.cameras.length; RW++)
          if (this.cameras[RW].name === WW) return this.cameras[RW];
        return null
      }
      getBoneById(WW) {
        for (let RW = 0; RW < this.skeletons.length; RW++) {
          const MW = this.skeletons[RW];
          for (let RW = 0; RW < MW.bones.length; RW++)
            if (MW.bones[RW].id === WW) return MW.bones[RW]
        }
        return null
      }
      getBoneByName(WW) {
        for (let RW = 0; RW < this.skeletons.length; RW++) {
          const MW = this.skeletons[RW];
          for (let RW = 0; RW < MW.bones.length; RW++)
            if (MW.bones[RW].name === WW) return MW.bones[RW]
        }
        return null
      }
      getLightByName(WW) {
        for (let RW = 0; RW < this.lights.length; RW++)
          if (this.lights[RW].name === WW) return this.lights[RW];
        return null
      }
      getLightById(WW) {
        for (let RW = 0; RW < this.lights.length; RW++)
          if (this.lights[RW].id === WW) return this.lights[RW];
        return null
      }
      getLightByUniqueId(WW) {
        for (let RW = 0; RW < this.lights.length; RW++)
          if (this.lights[RW].uniqueId === WW) return this.lights[RW];
        return null
      }
      getParticleSystemById(WW) {
        for (let RW = 0; RW < this.Xs.length; RW++)
          if (this.Xs[RW].id === WW) return this.Xs[RW];
        return null
      }
      getGeometryById(WW) {
        for (let RW = 0; RW < this.geometries.length; RW++)
          if (this.geometries[RW].id === WW) return this.geometries[RW];
        return null
      }
      _getGeometryByUniqueId(WW) {
        if (this._geometriesByUniqueId) {
          const RW = this._geometriesByUniqueId[WW];
          if (void 0 !== RW) return this.geometries[RW]
        } else
          for (let RW = 0; RW < this.geometries.length; RW++)
            if (this.geometries[RW].uniqueId === WW) return this.geometries[RW];
        return null
      }
      getFrameGraphByName(WW) {
        for (let RW = 0; RW < this.frameGraphs.length; RW++)
          if (this.frameGraphs[RW].name === WW) return this.frameGraphs[RW];
        return null
      }
      pushGeometry(WW, RW) {
        return !(!RW && this._getGeometryByUniqueId(WW.uniqueId)) && (this.addGeometry(WW), CW.c.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(WW)
        })), !0)
      }
      removeGeometry(WW) {
        let RW;
        if (this._geometriesByUniqueId) {
          if (RW = this._geometriesByUniqueId[WW.uniqueId], void 0 === RW) return !1
        } else if (RW = this.geometries.indexOf(WW), RW < 0) return !1;
        if (RW !== this.geometries.length - 1) {
          const WW = this.geometries[this.geometries.length - 1];
          WW && (this.geometries[RW] = WW, this._geometriesByUniqueId && (this._geometriesByUniqueId[WW.uniqueId] = RW))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[WW.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(WW), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(WW) {
        for (let RW = 0; RW < this.meshes.length; RW++)
          if (this.meshes[RW].id === WW) return this.meshes[RW];
        return null
      }
      getMeshesById(WW) {
        return this.meshes.filter((function(RW) {
          return RW.id === WW
        }))
      }
      getTransformNodeById(WW) {
        for (let RW = 0; RW < this.transformNodes.length; RW++)
          if (this.transformNodes[RW].id === WW) return this.transformNodes[RW];
        return null
      }
      getTransformNodeByUniqueId(WW) {
        for (let RW = 0; RW < this.transformNodes.length; RW++)
          if (this.transformNodes[RW].uniqueId === WW) return this.transformNodes[RW];
        return null
      }
      getTransformNodesById(WW) {
        return this.transformNodes.filter((function(RW) {
          return RW.id === WW
        }))
      }
      getMeshByUniqueId(WW) {
        for (let RW = 0; RW < this.meshes.length; RW++)
          if (this.meshes[RW].uniqueId === WW) return this.meshes[RW];
        return null
      }
      getLastMeshById(WW) {
        for (let RW = this.meshes.length - 1; RW >= 0; RW--)
          if (this.meshes[RW].id === WW) return this.meshes[RW];
        return null
      }
      getLastTransformNodeById(WW) {
        for (let RW = this.transformNodes.length - 1; RW >= 0; RW--)
          if (this.transformNodes[RW].id === WW) return this.transformNodes[RW];
        return null
      }
      getLastEntryById(WW) {
        let RW;
        for (RW = this.meshes.length - 1; RW >= 0; RW--)
          if (this.meshes[RW].id === WW) return this.meshes[RW];
        for (RW = this.transformNodes.length - 1; RW >= 0; RW--)
          if (this.transformNodes[RW].id === WW) return this.transformNodes[RW];
        for (RW = this.cameras.length - 1; RW >= 0; RW--)
          if (this.cameras[RW].id === WW) return this.cameras[RW];
        for (RW = this.lights.length - 1; RW >= 0; RW--)
          if (this.lights[RW].id === WW) return this.lights[RW];
        for (RW = this.skeletons.length - 1; RW >= 0; RW--) {
          const MW = this.skeletons[RW];
          for (let RW = MW.bones.length - 1; RW >= 0; RW--)
            if (MW.bones[RW].id === WW) return MW.bones[RW]
        }
        return null
      }
      getNodeById(WW) {
        const RW = this.getMeshById(WW);
        if (RW) return RW;
        const MW = this.getTransformNodeById(WW);
        if (MW) return MW;
        const wW = this.getLightById(WW);
        if (wW) return wW;
        const CW = this.getCameraById(WW);
        if (CW) return CW;
        const zR = this.getBoneById(WW);
        return zR || null
      }
      getNodeByName(WW) {
        const RW = this.getMeshByName(WW);
        if (RW) return RW;
        const MW = this.getTransformNodeByName(WW);
        if (MW) return MW;
        const wW = this.getLightByName(WW);
        if (wW) return wW;
        const CW = this.getCameraByName(WW);
        if (CW) return CW;
        const zR = this.getBoneByName(WW);
        return zR || null
      }
      getMeshByName(WW) {
        for (let RW = 0; RW < this.meshes.length; RW++)
          if (this.meshes[RW].name === WW) return this.meshes[RW];
        return null
      }
      getTransformNodeByName(WW) {
        for (let RW = 0; RW < this.transformNodes.length; RW++)
          if (this.transformNodes[RW].name === WW) return this.transformNodes[RW];
        return null
      }
      getLastSkeletonById(WW) {
        for (let RW = this.skeletons.length - 1; RW >= 0; RW--)
          if (this.skeletons[RW].id === WW) return this.skeletons[RW];
        return null
      }
      getSkeletonByUniqueId(WW) {
        for (let RW = 0; RW < this.skeletons.length; RW++)
          if (this.skeletons[RW].uniqueId === WW) return this.skeletons[RW];
        return null
      }
      getSkeletonById(WW) {
        for (let RW = 0; RW < this.skeletons.length; RW++)
          if (this.skeletons[RW].id === WW) return this.skeletons[RW];
        return null
      }
      getSkeletonByName(WW) {
        for (let RW = 0; RW < this.skeletons.length; RW++)
          if (this.skeletons[RW].name === WW) return this.skeletons[RW];
        return null
      }
      getMorphTargetManagerById(WW) {
        for (let RW = 0; RW < this.morphTargetManagers.length; RW++)
          if (this.morphTargetManagers[RW].uniqueId === WW) return this.morphTargetManagers[RW];
        return null
      }
      getMorphTargetById(WW) {
        for (let RW = 0; RW < this.morphTargetManagers.length; ++RW) {
          const MW = this.morphTargetManagers[RW];
          for (let RW = 0; RW < MW.numTargets; ++RW) {
            const wW = MW.getTarget(RW);
            if (wW.id === WW) return wW
          }
        }
        return null
      }
      getMorphTargetByName(WW) {
        for (let RW = 0; RW < this.morphTargetManagers.length; ++RW) {
          const MW = this.morphTargetManagers[RW];
          for (let RW = 0; RW < MW.numTargets; ++RW) {
            const wW = MW.getTarget(RW);
            if (wW.name === WW) return wW
          }
        }
        return null
      }
      getPostProcessByName(WW) {
        for (let RW = 0; RW < this.postProcesses.length; ++RW) {
          const MW = this.postProcesses[RW];
          if (MW.name === WW) return MW
        }
        return null
      }
      isActiveMesh(WW) {
        return -1 !== this._activeMeshes.indexOf(WW)
      }
      get uid() {
        return this._uid || (this._uid = wW.j.RandomId()), this._uid
      }
      addExternalData(WW, RW) {
        return this._externalData || (this._externalData = new yR), this._externalData.add(WW, RW)
      }
      getExternalData(WW) {
        return this._externalData ? this._externalData.get(WW) : null
      }
      getOrAddExternalDataWithFactory(WW, RW) {
        return this._externalData || (this._externalData = new yR), this._externalData.getOrAddWithFactory(WW, RW)
      }
      removeExternalData(WW) {
        return this._externalData.remove(WW)
      }
      _evaluateSubMesh(WW, RW, MW, wW) {
        if (wW || WW.isInFrustum(this._frustumPlanes)) {
          for (let wW = 0, CW = this._evaluateSubMeshStage; wW < CW.length; wW++) {
            CW[wW].action(RW, WW)
          }
          const MW = WW.Ow();
          null !== MW && void 0 !== MW && (MW.hasRenderTargetTextures && null != MW.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(MW) && (this._processedMaterials.push(MW), this._materialsRenderTargets.concatWithNoDuplicate(MW.getRenderTargetTextures())), this._renderingManager.dispatch(WW, RW, MW))
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
            const RW = this.activeCameras[WW];
            RW && RW._activeMeshes && RW._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let WW = 0; WW < this.textures.length; WW++) {
            const RW = this.textures[WW];
            RW && RW.renderList && RW.freeRenderingGroups()
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
          RW = arguments.length > 1 ? arguments[1] : void 0,
          MW = arguments.length > 2 ? arguments[2] : void 0,
          wW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          zR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const AW = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const WW of AW) WW.objectRenderer._freezeActiveMeshes(wW);
          return this._freezeActiveMeshesCancel = (0, CW.g)((() => {
            let WW = !0,
              RW = !0;
            for (const MW of AW) WW && (WW = MW.objectRenderer._isFrozen), RW && (RW = null !== MW.objectRenderer._freezeActiveMeshesCancel);
            if (WW) return !0;
            if (!RW) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = zR, this._skipEvaluateActiveMeshesCompletely = WW, RW?.()
          }), ((WW, RW) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), RW) {
              const RW = "Scene: Timeout while waiting for meshes to be frozen.";
              MW ? MW(RW) : (WM.b.Error(RW), WW && WM.b.Error(WW))
            } else {
              const RW = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              MW ? MW(RW) : (WM.b.Error(RW), WW && (WM.b.Error(WW), WW.stack && WM.b.Error(WW.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = zR, this._skipEvaluateActiveMeshesCompletely = WW, wW)
              for (let WW = 0; WW < this._activeMeshes.length; WW++) this._activeMeshes.data[WW]._freeze();
            RW && RW()
          } else MW && MW("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let WW = 0; WW < this.meshes.length; WW++) {
          const RW = this.meshes[WW];
          RW._internalAbstractMeshDataInfo && (RW._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const WW = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const RW of WW) RW.objectRenderer._unfreezeActiveMeshes()
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
            for (let RW = 0; RW < WW; RW++) {
              this._activeMeshes.data[RW].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const WW = this._activeParticleSystems.length;
            for (let RW = 0; RW < WW; RW++) this._activeParticleSystems.data[RW].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let CW = 0, zR = this._beforeEvaluateActiveMeshStage; CW < zR.length; CW++) {
          zR[CW].action()
        }
        const WW = this.getActiveMeshCandidates(),
          RW = WW.length,
          MW = OW.d.Enabled,
          wW = this.customLODSelector;
        for (let CW = 0; CW < RW; CW++) {
          const RW = WW.data[CW],
            zR = !wW && !RW.cMW && !RW._internalMeshDataInfo?._LODLevels.length;
          let AW, bR;
          if ((zR || (AW = RW._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), AW ? AW[1] = -1 : (AW = [RW, -1], RW._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, AW))), !RW.isBlocked) && (MW && this._totalVertices.addCount(RW.getTotalVertices(), !1), RW.isReady() && RW.isEnabled() && !RW.NA.hasAZeroComponent)) {
            if (RW.computeWorldMatrix(), RW.actionManager && RW.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(RW), zR) bR = RW;
            else if (bR = wW ? wW(RW, this.activeCamera) : RW.getLOD(this.activeCamera), AW[0] = bR, AW[1] = this._frameId, void 0 === bR || null === bR) continue;
            if (bR !== RW && 0 !== bR.billboardMode && bR.computeWorldMatrix(), RW._preActivate(), RW.isVisible && RW.visibility > 0 && 0 !== (RW.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || RW.xC || RW.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(RW), this.activeCamera._activeMeshes.push(RW), bR !== RW && bR._activate(this._renderId, !1);
              for (let WW = 0, MW = this._preActiveMeshStage; WW < MW.length; WW++) {
                MW[WW].action(RW)
              }
              RW._activate(this._renderId, !1) && (RW.cMW ? RW._internalAbstractMeshDataInfo._actAsRegularMesh && (bR = RW) : bR._internalAbstractMeshDataInfo._onlyForInstances = !1, bR._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(RW, bR)), RW._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let WW = 0; WW < this.Xs.length; WW++) {
            const RW = this.Xs[WW];
            if (!RW.isStarted() || !RW.emitter) continue;
            const MW = RW.emitter;
            MW.position && !MW.isEnabled() || (this._activeParticleSystems.push(RW), RW.animate(), this._renderingManager.dispatchParticles(RW))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(WW) {
        this._skeletonsEnabled && WW.skeleton && (this._activeSkeletons.pushNoDuplicate(WW.skeleton) && (WW.skeleton.prepare(), this._activeBones.addCount(WW.skeleton.bones.length, !1)), WW.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(WW) && this.frameGraph && WW.applySkeleton(WW.skeleton))
      }
      _activeMesh(WW, RW) {
        this._prepareSkeleton(RW);
        let MW = WW.bBW || WW.cMW || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || RW.xC;
        if (RW && RW.Qs && RW.Qs.length > 0) {
          const wW = this.getActiveSubMeshCandidates(RW),
            CW = wW.length;
          MW = MW || 1 === CW;
          for (let zR = 0; zR < CW; zR++) {
            const CW = wW.data[zR];
            this._evaluateSubMesh(CW, RW, WW, MW)
          }
        }
      }
      updateTransformMatrix(WW) {
        const RW = this.activeCamera;
        if (RW)
          if (RW._renderingMultiview) {
            const MW = RW._rigCameras[0],
              wW = RW._rigCameras[1];
            this.setTransformMatrix(MW.getViewMatrix(), MW.getProjectionMatrix(WW), wW.getViewMatrix(), wW.getProjectionMatrix(WW))
          } else this.setTransformMatrix(RW.getViewMatrix(), RW.getProjectionMatrix(WW))
      }
      _bindFrameBuffer(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (WW && WW._multiviewTexture ? WW._multiviewTexture._bindFrameBuffer() : WW && WW.outputRenderTarget ? WW.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), RW && this._clearFrameBuffer(WW)
      }
      _clearFrameBuffer(WW) {
        if (WW && WW._multiviewTexture);
        else if (WW && WW.outputRenderTarget && !WW._renderingMultiview) {
          const RW = WW.outputRenderTarget;
          RW.onClearObservable.hasObservers() ? RW.onClearObservable.notifyObservers(this._engine) : RW.skipInitialClear || WW.isRightCamera || (this.autoClear && this._engine.clear(RW.clearColor || this._clearColor, !RW._cleared, !0, !0), RW._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(WW, RW) {
        let MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (WW && WW._skipRendering) return;
        const CW = this._engine;
        if (this._activeCamera = WW, !this.activeCamera) throw new Error("Active camera not set");
        if (CW.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && MW) {
          let RW = !0;
          WW._renderingMultiview && WW.outputRenderTarget && (RW = WW.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, WW.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), WW._renderingMultiview && WW.outputRenderTarget && (WW.outputRenderTarget.skipInitialClear = RW)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = WW.outputRenderTarget?.renderPassId ?? WW.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let wW = 0; wW < this._softwareSkinnedMeshes.length; wW++) {
          const WW = this._softwareSkinnedMeshes.data[wW];
          WW.applySkeleton(WW.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), WW.customRenderTargets && WW.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(WW.customRenderTargets), RW && RW.customRenderTargets && RW.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(RW.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let wW = 0, bR = this._gatherActiveCameraRenderTargetsStage; wW < bR.length; wW++) {
          bR[wW].action(this._renderTargets)
        }
        let zR = !1;
        if (this.renderTargetsEnabled) {
          let WW;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            wW.j.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const RW = this.getBoundingBoxRenderer?.();
            for (let MW = 0; MW < this._renderTargets.length; MW++) {
              const wW = this._renderTargets.data[MW];
              if (wW._shouldRender()) {
                this._renderId++;
                const MW = wW.activeCamera && wW.activeCamera !== this.activeCamera;
                RW && !WW && (WW = RW.renderList.length > 0 ? RW.renderList.data.slice() : [], WW.length = RW.renderList.length), wW.render(MW, this.dumpNextRenderTargets), zR = !0
              }
            }
            RW && WW && (RW.renderList.data = WW, RW.renderList.length = WW.length), wW.j.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const RW = this.getBoundingBoxRenderer?.();
            RW && !WW && (WW = RW.renderList.length > 0 ? RW.renderList.data.slice() : [], WW.length = RW.renderList.length);
            for (let WW = 0, MW = this._cameraDrawRenderTargetStage; WW < MW.length; WW++) {
              zR = MW[WW].action(this.activeCamera) || zR
            }
            RW && WW && (RW.renderList.data = WW, RW.renderList.length = WW.length)
          }
          this._intermediateRendering = !1
        }
        zR && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || WW._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let wW = 0, bR = this._beforeCameraDrawStage; wW < bR.length; wW++) {
          bR[wW].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const AW = CW.snapshotRendering && 1 === CW.snapshotRenderingMode;
        AW && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !AW), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let wW = 0, bR = this._afterCameraDrawStage; wW < bR.length; wW++) {
          bR[wW].action(this.activeCamera)
        }
        if (this.postProcessManager && !WW._multiviewTexture) {
          const RW = WW.outputRenderTarget ? WW.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(WW.isIntermediate, RW)
        }
        for (let wW = 0, bR = this._afterCameraPostProcessStage; wW < bR.length; wW++) {
          bR[wW].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === WW.cameraRigMode || WW._renderingMultiview) return WW._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(WW, void 0, RW), void this.onAfterRenderCameraObservable.notifyObservers(WW);
        if (WW._useMultiviewToSingleView) this._renderMultiviewToSingleView(WW);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(WW);
          for (let RW = 0; RW < WW._rigCameras.length; RW++) this._renderForCamera(WW._rigCameras[RW], WW)
        }
        this._activeCamera = WW, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(WW)
      }
      _checkIntersections() {
        for (let WW = 0; WW < this._meshesForIntersections.length; WW++) {
          const RW = this._meshesForIntersections.data[WW];
          if (RW.actionManager)
            for (let WW = 0; RW.actionManager && WW < RW.actionManager.actions.length; WW++) {
              const MW = RW.actionManager.actions[WW];
              if (12 === MW.trigger || 13 === MW.trigger) {
                const WW = MW.getTriggerParameter(),
                  wW = WW.mesh ? WW.mesh : WW,
                  CW = wW.ReW(RW, WW.usePreciseIntersection),
                  zR = RW._intersectionsInProgress.indexOf(wW);
                CW && -1 === zR ? 12 === MW.trigger ? (MW._executeCurrent(gR.CreateNew(RW, void 0, wW)), RW._intersectionsInProgress.push(wW)) : 13 === MW.trigger && RW._intersectionsInProgress.push(wW) : !CW && zR > -1 && (13 === MW.trigger && MW._executeCurrent(gR.CreateNew(RW, void 0, wW)), RW.actionManager.hasSpecificTrigger(13, (WW => {
                  const RW = WW.mesh ? WW.mesh : WW;
                  return wW === RW
                })) && 13 !== MW.trigger || RW._intersectionsInProgress.splice(zR, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(WW) {}
      _animate(WW) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let WW = Math.max(zw.MinDeltaTime, Math.min(this._engine.getDeltaTime(), zw.MaxDeltaTime)) + this._timeAccumulator;
          const RW = this._engine.getTimeStep(),
            MW = 1e3 / RW / 1e3;
          let wW = 0;
          const CW = this._engine.getLockstepMaxSteps();
          let zR = Math.floor(WW / RW);
          for (zR = Math.min(zR, CW); WW > 0 && wW < zR;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = RW * MW, this._animate(RW), this.onAfterAnimationsObservable.notifyObservers(this), this.lMW && this._advancePhysicsEngineStep(RW), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, wW++, WW -= RW;
          this._timeAccumulator = WW < 0 ? 0 : WW
        } else {
          const WW = this.useConstantAnimationDeltaTime ? 16 : Math.max(zw.MinDeltaTime, Math.min(this._engine.getDeltaTime(), zw.MaxDeltaTime));
          this._animationRatio = .06 * WW, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.lMW && this._advancePhysicsEngineStep(WW)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(WW) {
        if (WW?.outputRenderTarget && !WW?.isRigCamera && (WW.outputRenderTarget._cleared = !1), WW?.rigCameras?.length)
          for (let RW = 0; RW < WW.rigCameras.length; ++RW) {
            const MW = WW.rigCameras[RW].outputRenderTarget;
            MW && (MW._cleared = !1)
          }
      }
      resetDrawCache(WW) {
        if (this.meshes)
          for (const RW of this.meshes) RW.resetDrawCache(WW)
      }
      _renderWithFrameGraph() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          RW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, WW)
          for (const MW of this.cameras)
            if (MW.update(), 0 !== MW.cameraRigMode)
              for (let WW = 0; WW < MW._rigCameras.length; WW++) MW._rigCameras[WW].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(RW)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(WW) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const RW = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), wW.j.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let WW = 0; WW < this._renderTargets.length; WW++) {
            const MW = this._renderTargets.data[WW],
              wW = MW.activeCamera || RW;
            this._renderRenderTarget(MW, wW, !0, this.dumpNextRenderTargets)
          }
          wW.j.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let MW = 0, wW = this._beforeClearStage; MW < wW.length; MW++) {
          wW[MW].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const RW = this.getActiveMeshCandidates(),
            MW = RW.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let WW = 0; WW < MW; WW++) {
                const MW = RW.data[WW];
                MW._internalAbstractMeshDataInfo._wasActiveLastFrame && MW.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const WW = this._activeParticleSystems.length;
              for (let RW = 0; RW < WW; RW++) this._activeParticleSystems.data[RW].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let wW = 0; wW < MW; wW++) {
              const MW = RW.data[wW];
              MW._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, MW.isBlocked || (this._totalVertices.addCount(MW.getTotalVertices(), !1), MW.isReady() && MW.isEnabled() && !MW.NA.hasAZeroComponent && (MW.computeWorldMatrix(WW), MW.actionManager && MW.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(MW)))
            }
            if (this.particlesEnabled)
              for (let WW = 0; WW < this.Xs.length; WW++) {
                const RW = this.Xs[WW];
                if (!RW.isStarted() || !RW.emitter) continue;
                const MW = RW.emitter;
                MW.position && !MW.isEnabled() || (this._activeParticleSystems.push(RW), RW.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, WW._shouldRender()) {
          if (this._renderId++, this.activeCamera = RW, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), WW.render(MW, wW)
        }
        this._intermediateRendering = !1
      }
      render() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.cNW) return;
        const MW = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(WW, RW)
        } finally {
          this._renderingMeshEvaluationDepth = MW
        }
      }
      _renderFrame(WW, RW) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), YW.b.QRW = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const MW of this.activeCameras) this._checkCameraRenderTarget(MW);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), RW || this.animate();
        for (let MW = 0, wW = this._beforeCameraUpdateStage; MW < wW.length; MW++) {
          wW[MW].action()
        }
        if (WW)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let MW = 0; MW < this.activeCameras.length; MW++) {
              const WW = this.activeCameras[MW];
              if (WW.update(), 0 !== WW.cameraRigMode)
                for (let RW = 0; RW < WW._rigCameras.length; RW++) WW._rigCameras[RW].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let MW = 0; MW < this.activeCamera._rigCameras.length; MW++) this.activeCamera._rigCameras[MW].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(WW, RW);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const WW = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            wW.j.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let RW = 0; RW < this.customRenderTargets.length; RW++) {
              const MW = this.customRenderTargets[RW],
                wW = MW.activeCamera || this.activeCamera;
              this._renderRenderTarget(MW, wW, WW !== wW, this.dumpNextRenderTargets)
            }
            wW.j.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = WW?.renderPassId ?? 0, this.activeCamera = WW, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let RW = 0, MW = this._beforeClearStage; RW < MW.length; RW++) {
            MW[RW].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let RW = 0, MW = this._gatherRenderTargetsStage; RW < MW.length; RW++) {
            MW[RW].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let RW = 0; RW < this.activeCameras.length; RW++) this._processSubCameras(this.activeCameras[RW], RW > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let MW = 0, wW = this._afterRenderStage; MW < wW.length; MW++) {
          wW[MW].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let WW = 0; WW < this._toBeDisposed.length; WW++) {
            const RW = this._toBeDisposed[WW];
            RW && RW.dispose()
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
        if (this.cNW) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, lW.b)(this.stopAllAnimations)) {
          for (const WW of this._activeAnimatables) WW.onAnimationEndObservable.clear(), WW.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const WW = this._activeRequests.slice();
        for (const zR of WW) zR.abort();
        this._activeRequests.length = 0;
        try {
          this.rMW.notifyObservers(this)
        } catch (CW) {
          WM.b.Error("An error occurred while calling onDisposeObservable!", CW)
        }
        this.detachControl();
        const RW = this._engine.getInputElement?.();
        if (RW)
          for (let zR = 0; zR < this.cameras.length; zR++) this.cameras[zR].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (WW => WW.dispose(!0))), this._disposeList(this.transformNodes, (WW => WW.dispose(!0)));
        const MW = this.cameras;
        this._disposeList(MW), this._disposeList(this.Xs), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let wW = this._engine.scenes.indexOf(this);
        if (wW > -1 && this._engine.scenes.splice(wW, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, YW.h)(), oW.d._LastCreatedScene === this) {
          oW.d._LastCreatedScene = null;
          let WW = oW.d.Instances.length - 1;
          for (; WW >= 0;) {
            const RW = oW.d.Instances[WW];
            if (RW.scenes.length > 0) {
              oW.d._LastCreatedScene = RW.scenes[this._engine.scenes.length - 1];
              break
            }
            WW--
          }
        }
        wW = this._engine._virtualScenes.indexOf(this), wW > -1 && this._engine._virtualScenes.splice(wW, 1), this._engine.wipeCaches(!0), this.rMW.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(WW, RW) {
        const MW = WW.slice(0);
        RW = RW ?? (WW => WW.dispose());
        for (const wW of MW) RW(wW);
        WW.length = 0
      }
      get cNW() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let WW = 0; WW < this.meshes.length; WW++) {
          const RW = this.meshes[WW].geometry;
          RW && RW.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const WW of this.textures) {
          WW._buffer && (WW._buffer = null)
        }
      }
      getWorldExtends(WW) {
        const RW = new eW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          MW = new eW.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        WW = WW || (() => !0);
        const wW = this.meshes.filter(WW);
        for (const CW of wW) {
          if (CW.computeWorldMatrix(!0), !CW.Qs || 0 === CW.Qs.length || CW.infiniteDistance) continue;
          const WW = CW.LRW(),
            wW = WW.boundingBox.minimumWorld,
            zR = WW.boundingBox.maximumWorld;
          eW.q.CheckExtends(wW, RW, MW), eW.q.CheckExtends(zR, RW, MW)
        }
        return RW.x === Number.MAX_VALUE ? {
          min: eW.q.Zero(),
          max: eW.q.Zero()
        } : {
          min: RW,
          max: MW
        }
      }
      createPickingRay(WW, RW, MW, wW) {
        throw (0, lW.g)("Ray")
      }
      createPickingRayToRef(WW, RW, MW, wW, CW) {
        throw (0, lW.g)("Ray")
      }
      createPickingRayInCameraSpace(WW, RW, MW) {
        throw (0, lW.g)("Ray")
      }
      createPickingRayInCameraSpaceToRef(WW, RW, MW, wW) {
        throw (0, lW.g)("Ray")
      }
      WM(WW, RW, MW, wW, CW, zR) {
        const AW = (0, lW.g)("Ray", !0);
        return AW && WM.b.Warn(AW), new TW.d
      }
      pickWithBoundingInfo(WW, RW, MW, wW, CW) {
        const zR = (0, lW.g)("Ray", !0);
        return zR && WM.b.Warn(zR), new TW.d
      }
      pickWithRay(WW, RW, MW, wW) {
        throw (0, lW.g)("Ray")
      }
      multiPick(WW, RW, MW, wW, CW) {
        throw (0, lW.g)("Ray")
      }
      multiPickWithRay(WW, RW, MW) {
        throw (0, lW.g)("Ray")
      }
      setPointerOverMesh(WW, RW, MW) {
        this._inputManager.setPointerOverMesh(WW, RW, MW)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const WW of this.geometries) WW._rebuild();
        for (const WW of this.meshes) WW._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const WW of this._components) WW.rebuild();
        for (const WW of this.Xs) WW.rebuild();
        if (this.spriteManagers)
          for (const WW of this.spriteManagers) WW.rebuild()
      }
      _rebuildTextures() {
        for (const WW of this.textures) WW._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(WW, RW, MW) {
        if (void 0 === RW) return WW;
        const wW = [];
        for (const CW in WW) {
          const zR = WW[CW];
          NW.d && NW.d.MatchesQuery(zR, RW) && (!MW || MW(zR)) && wW.push(zR)
        }
        return wW
      }
      getMeshesByTags(WW, RW) {
        return this._getByTags(this.meshes, WW, RW)
      }
      getCamerasByTags(WW, RW) {
        return this._getByTags(this.cameras, WW, RW)
      }
      getLightsByTags(WW, RW) {
        return this._getByTags(this.lights, WW, RW)
      }
      getMaterialByTags(WW, RW) {
        return this._getByTags(this.materials, WW, RW).concat(this._getByTags(this.multiMaterials, WW, RW))
      }
      getTransformNodesByTags(WW, RW) {
        return this._getByTags(this.transformNodes, WW, RW)
      }
      setRenderingOrder(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(WW, RW, MW, wW)
      }
      setRenderingAutoClearDepthStencil(WW, RW) {
        let MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          wW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(WW, RW, MW, wW)
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
      markAllMaterialsAsDirty(WW, RW) {
        if (!this._blockMaterialDirtyMechanism)
          for (const MW of this.materials) RW && !RW(MW) || MW.KbW(WW)
      }
      _loadFile(WW, RW, MW, wW, CW, zR, AW) {
        const bR = (0, HW.l)(WW, RW, MW, wW ? this.offlineProvider : void 0, CW, zR, AW);
        return this._activeRequests.push(bR), bR.onCompleteObservable.add((WW => {
          this._activeRequests.splice(this._activeRequests.indexOf(WW), 1)
        })), bR
      }
      async _loadFileAsync(WW, RW, MW, wW, CW) {
        return await new Promise(((zR, AW) => {
          this._loadFile(WW, (WW => {
            zR(WW)
          }), RW, MW, wW, ((WW, RW) => {
            AW(RW)
          }), CW)
        }))
      }
      async _loadDelayedFileAsync(WW, RW, MW) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const wW = `${WW}|${RW?"binary":"string"}`;
        let CW = this._delayedFileRequests.get(wW);
        if (!CW) {
          CW = RW ? this._loadFileAsync(WW, void 0, MW, !0) : this._loadFileAsync(WW, void 0, MW, !1);
          const zR = CW;
          (async () => {
            try {
              await zR
            } catch {}
            this._delayedFileRequests?.delete(wW)
          })(), this._delayedFileRequests.set(wW, CW)
        }
        return await CW
      }
      _requestFile(WW, RW, MW, wW, CW, zR, AW) {
        const bR = (0, HW.v)(WW, RW, MW, wW ? this.offlineProvider : void 0, CW, zR, AW);
        return this._activeRequests.push(bR), bR.onCompleteObservable.add((WW => {
          this._activeRequests.splice(this._activeRequests.indexOf(WW), 1)
        })), bR
      }
      async _requestFileAsync(WW, RW, MW, wW, CW) {
        return await new Promise(((zR, AW) => {
          this._requestFile(WW, (WW => {
            zR(WW)
          }), RW, MW, wW, (WW => {
            AW(WW)
          }), CW)
        }))
      }
      _readFile(WW, RW, MW, wW, CW) {
        const zR = (0, HW.p)(WW, RW, MW, wW, CW);
        return this._activeRequests.push(zR), zR.onCompleteObservable.add((WW => {
          this._activeRequests.splice(this._activeRequests.indexOf(WW), 1)
        })), zR
      }
      async _readFileAsync(WW, RW, MW) {
        return await new Promise(((wW, CW) => {
          this._readFile(WW, (WW => {
            wW(WW)
          }), RW, MW, (WW => {
            CW(WW)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, lW.g)("performanceViewerSceneExtension")
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
    zw.FOGMODE_NONE = 0, zw.FOGMODE_EXP = 1, zw.FOGMODE_EXP2 = 2, zw.FOGMODE_LINEAR = 3, zw.MinDeltaTime = 1, zw.MaxDeltaTime = 1e3, zw._OriginalDefaultMaterialFactory = zw.DefaultMaterialFactory;
    let AM = !1;

    function bw() {
      AM || (AM = !0, (0, RM.e)("BABYLON.Scene", zw))
    }(SW = zw.prototype).sortActiveAnimatables ?? (SW.sortActiveAnimatables = (0, lW.f)("Scene", "sortActiveAnimatables")), (WR = zw.prototype).beginWeightedAnimation ?? (WR.beginWeightedAnimation = (0, lW.f)("Scene", "beginWeightedAnimation")), (RR = zw.prototype).beginAnimation ?? (RR.beginAnimation = (0, lW.f)("Scene", "beginAnimation")), (MR = zw.prototype).beginHierarchyAnimation ?? (MR.beginHierarchyAnimation = (0, lW.f)("Scene", "beginHierarchyAnimation")), (wR = zw.prototype).beginDirectAnimation ?? (wR.beginDirectAnimation = (0, lW.f)("Scene", "beginDirectAnimation")), (CR = zw.prototype).beginDirectHierarchyAnimation ?? (CR.beginDirectHierarchyAnimation = (0, lW.f)("Scene", "beginDirectHierarchyAnimation")), (zM = zw.prototype).getAnimatableByTarget ?? (zM.getAnimatableByTarget = (0, lW.f)("Scene", "getAnimatableByTarget")), (AR = zw.prototype).getAllAnimatablesByTarget ?? (AR.getAllAnimatablesByTarget = (0, lW.f)("Scene", "getAllAnimatablesByTarget")), (bM = zw.prototype).stopAllAnimations ?? (bM.stopAllAnimations = (0, lW.f)("Scene", "stopAllAnimations")), (yM = zw.prototype).getSoundByName ?? (yM.getSoundByName = (0, lW.f)("Scene", "getSoundByName")), (NR = zw.prototype).createOrUpdateSelectionOctree ?? (NR.createOrUpdateSelectionOctree = (0, lW.f)("Scene", "createOrUpdateSelectionOctree")), (eR = zw.prototype).createDefaultLight ?? (eR.createDefaultLight = (0, lW.f)("Scene", "createDefaultLight")), (BR = zw.prototype).createDefaultCamera ?? (BR.createDefaultCamera = (0, lW.f)("Scene", "createDefaultCamera")), (tM = zw.prototype).createDefaultCameraOrLight ?? (tM.createDefaultCameraOrLight = (0, lW.f)("Scene", "createDefaultCameraOrLight")), (TR = zw.prototype).createDefaultSkybox ?? (TR.createDefaultSkybox = (0, lW.f)("Scene", "createDefaultSkybox")), (gM = zw.prototype).createDefaultEnvironment ?? (gM.createDefaultEnvironment = (0, lW.f)("Scene", "createDefaultEnvironment")), (iM = zw.prototype).createDefaultVRExperience ?? (iM.createDefaultVRExperience = (0, lW.f)("Scene", "createDefaultVRExperience")), (YR = zw.prototype).createDefaultXRExperienceAsync ?? (YR.createDefaultXRExperienceAsync = (0, lW.f)("Scene", "createDefaultXRExperienceAsync")), (JR = zw.prototype).getGlowLayerByName ?? (JR.getGlowLayerByName = (0, lW.f)("Scene", "getGlowLayerByName")), (PR = zw.prototype).getHighlightLayerByName ?? (PR.getHighlightLayerByName = (0, lW.f)("Scene", "getHighlightLayerByName")), (IR = zw.prototype).getSelectionOutlineLayerByName ?? (IR.getSelectionOutlineLayerByName = (0, lW.f)("Scene", "getSelectionOutlineLayerByName")), (oR = zw.prototype).removeLensFlareSystem ?? (oR.removeLensFlareSystem = (0, lW.f)("Scene", "removeLensFlareSystem")), (lR = zw.prototype).addLensFlareSystem ?? (lR.addLensFlareSystem = (0, lW.f)("Scene", "addLensFlareSystem")), (FR = zw.prototype).getLensFlareSystemByName ?? (FR.getLensFlareSystemByName = (0, lW.f)("Scene", "getLensFlareSystemByName")), (fR = zw.prototype).getLensFlareSystemByID ?? (fR.getLensFlareSystemByID = (0, lW.f)("Scene", "getLensFlareSystemByID")), (QR = zw.prototype).getLensFlareSystemById ?? (QR.getLensFlareSystemById = (0, lW.f)("Scene", "getLensFlareSystemById")), (rM = zw.prototype).getPhysicsEngine ?? (rM.getPhysicsEngine = (0, lW.f)("Scene", "getPhysicsEngine")), (cM = zw.prototype).enablePhysics ?? (cM.enablePhysics = (0, lW.f)("Scene", "enablePhysics")), (XR = zw.prototype).disablePhysicsEngine ?? (XR.disablePhysicsEngine = (0, lW.f)("Scene", "disablePhysicsEngine")), (jM = zw.prototype).isPhysicsEnabled ?? (jM.isPhysicsEnabled = (0, lW.f)("Scene", "isPhysicsEnabled")), (kM = zw.prototype).deleteCompoundImpostor ?? (kM.deleteCompoundImpostor = (0, lW.f)("Scene", "deleteCompoundImpostor")), (aM = zw.prototype).removeReflectionProbe ?? (aM.removeReflectionProbe = (0, lW.f)("Scene", "removeReflectionProbe")), (sR = zw.prototype).addReflectionProbe ?? (sR.addReflectionProbe = (0, lW.f)("Scene", "addReflectionProbe")), (dR = zw.prototype).getBoundingBoxRenderer ?? (dR.getBoundingBoxRenderer = (0, lW.f)("Scene", "getBoundingBoxRenderer")), (pR = zw.prototype).enableDepthRenderer ?? (pR.enableDepthRenderer = (0, lW.f)("Scene", "enableDepthRenderer")), (hR = zw.prototype).disableDepthRenderer ?? (hR.disableDepthRenderer = (0, lW.f)("Scene", "disableDepthRenderer")), (UR = zw.prototype).enableFluidRenderer ?? (UR.enableFluidRenderer = (0, lW.f)("Scene", "enableFluidRenderer")), (ER = zw.prototype).disableFluidRenderer ?? (ER.disableFluidRenderer = (0, lW.f)("Scene", "disableFluidRenderer")), (VR = zw.prototype).enableGeometryBufferRenderer ?? (VR.enableGeometryBufferRenderer = (0, lW.f)("Scene", "enableGeometryBufferRenderer")), (mM = zw.prototype).disableGeometryBufferRenderer ?? (mM.disableGeometryBufferRenderer = (0, lW.f)("Scene", "disableGeometryBufferRenderer")), (xM = zw.prototype).enableIblCdfGenerator ?? (xM.enableIblCdfGenerator = (0, lW.f)("Scene", "enableIblCdfGenerator")), (vM = zw.prototype).disableIblCdfGenerator ?? (vM.disableIblCdfGenerator = (0, lW.f)("Scene", "disableIblCdfGenerator")), (KR = zw.prototype).getOutlineRenderer ?? (KR.getOutlineRenderer = (0, lW.f)("Scene", "getOutlineRenderer")), (uR = zw.prototype).enablePrePassRenderer ?? (uR.enablePrePassRenderer = (0, lW.f)("Scene", "enablePrePassRenderer")), (OR = zw.prototype).disablePrePassRenderer ?? (OR.disablePrePassRenderer = (0, lW.f)("Scene", "disablePrePassRenderer")), (nR = zw.prototype).enableSubSurfaceForPrePass ?? (nR.enableSubSurfaceForPrePass = (0, lW.f)("Scene", "enableSubSurfaceForPrePass")), (GR = zw.prototype).disableSubSurfaceForPrePass ?? (GR.disableSubSurfaceForPrePass = (0, lW.f)("Scene", "disableSubSurfaceForPrePass")), (LR = zw.prototype).pickSprite ?? (LR.pickSprite = (0, lW.f)("Scene", "pickSprite")), (HR = zw.prototype).pickSpriteWithRay ?? (HR.pickSpriteWithRay = (0, lW.f)("Scene", "pickSpriteWithRay")), (DR = zw.prototype).multiPickSprite ?? (DR.multiPickSprite = (0, lW.f)("Scene", "multiPickSprite")), (qM = zw.prototype).multiPickSpriteWithRay ?? (qM.multiPickSpriteWithRay = (0, lW.f)("Scene", "multiPickSpriteWithRay")), (ZR = zw.prototype).setPointerOverSprite ?? (ZR.setPointerOverSprite = (0, lW.f)("Scene", "setPointerOverSprite")), (SR = zw.prototype).getPointerOverSprite ?? (SR.getPointerOverSprite = (0, lW.f)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(zw.prototype, "mainSoundTrack") || Object.defineProperty(zw.prototype, "mainSoundTrack", (0, lW.e)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(zw.prototype, "soundTracks") || Object.defineProperty(zw.prototype, "soundTracks", (0, lW.e)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(zw.prototype, "audioEnabled") || Object.defineProperty(zw.prototype, "audioEnabled", (0, lW.e)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(zw.prototype, "headphone") || Object.defineProperty(zw.prototype, "headphone", (0, lW.e)("Scene", "headphone")), Object.getOwnPropertyDescriptor(zw.prototype, "audioListenerPositionProvider") || Object.defineProperty(zw.prototype, "audioListenerPositionProvider", (0, lW.e)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(zw.prototype, "audioListenerRotationProvider") || Object.defineProperty(zw.prototype, "audioListenerRotationProvider", (0, lW.e)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(zw.prototype, "audioPositioningRefreshRate") || Object.defineProperty(zw.prototype, "audioPositioningRefreshRate", (0, lW.e)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(zw.prototype, "selectionOctree") || Object.defineProperty(zw.prototype, "selectionOctree", (0, lW.e)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(zw.prototype, "debugLayer") || Object.defineProperty(zw.prototype, "debugLayer", (0, lW.e)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(zw.prototype, "gamepadManager") || Object.defineProperty(zw.prototype, "gamepadManager", (0, lW.e)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(zw.prototype, "simplificationQueue") || Object.defineProperty(zw.prototype, "simplificationQueue", (0, lW.e)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(zw.prototype, "onBeforePhysicsObservable") || Object.defineProperty(zw.prototype, "onBeforePhysicsObservable", (0, lW.e)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(zw.prototype, "onAfterPhysicsObservable") || Object.defineProperty(zw.prototype, "onAfterPhysicsObservable", (0, lW.e)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(zw.prototype, "reflectionProbes") || Object.defineProperty(zw.prototype, "reflectionProbes", (0, lW.e)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(zw.prototype, "forceShowBoundingBoxes") || Object.defineProperty(zw.prototype, "forceShowBoundingBoxes", (0, lW.e)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(zw.prototype, "depthPeelingRenderer") || Object.defineProperty(zw.prototype, "depthPeelingRenderer", (0, lW.e)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(zw.prototype, "useOrderIndependentTransparency") || Object.defineProperty(zw.prototype, "useOrderIndependentTransparency", (0, lW.e)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(zw.prototype, "fluidRenderer") || Object.defineProperty(zw.prototype, "fluidRenderer", (0, lW.e)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(zw.prototype, "geometryBufferRenderer") || Object.defineProperty(zw.prototype, "geometryBufferRenderer", (0, lW.e)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(zw.prototype, "iblCdfGenerator") || Object.defineProperty(zw.prototype, "iblCdfGenerator", (0, lW.e)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(zw.prototype, "prePassRenderer") || Object.defineProperty(zw.prototype, "prePassRenderer", (0, lW.e)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(zw.prototype, "subSurfaceConfiguration") || Object.defineProperty(zw.prototype, "subSurfaceConfiguration", (0, lW.e)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(zw.prototype, "spriteManagers") || Object.defineProperty(zw.prototype, "spriteManagers", (0, lW.e)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(zw.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(zw.prototype, "onBeforeSpritesRenderingObservable", (0, lW.e)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(zw.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(zw.prototype, "onAfterSpritesRenderingObservable", (0, lW.e)("Scene", "onAfterSpritesRenderingObservable"))
  },
  37749: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => wW,
      f: () => CW
    });
    class wW {}
    wW.NAME_EFFECTLAYER = "EffectLayer", wW.NAME_LAYER = "Layer", wW.NAME_LENSFLARESYSTEM = "LensFlareSystem", wW.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", wW.NAME_PARTICLESYSTEM = "ParticleSystem", wW.NAME_GAMEPAD = "Gamepad", wW.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", wW.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", wW.NAME_PREPASSRENDERER = "PrePassRenderer", wW.NAME_DEPTHRENDERER = "DepthRenderer", wW.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", wW.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", wW.NAME_SPRITE = "Sprite", wW.NAME_SUBSURFACE = "SubSurface", wW.NAME_OUTLINERENDERER = "Outline", wW.NAME_PROCEDURALTEXTURE = "ProceduralTexture", wW.NAME_SHADOWGENERATOR = "ShadowGenerator", wW.NAME_OCTREE = "fNW", wW.NAME_PHYSICSENGINE = "PhysicsEngine", wW.NAME_AUDIO = "Audio", wW.NAME_FLUIDRENDERER = "FluidRenderer", wW.NAME_IBLCDFGENERATOR = "iblCDFGenerator", wW.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", wW.STEP_ISREADYFORMESH_EFFECTLAYER = 0, wW.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, wW.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, wW.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, wW.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, wW.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, wW.STEP_BEFORECAMERADRAW_PREPASS = 0, wW.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, wW.STEP_BEFORECAMERADRAW_LAYER = 2, wW.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, wW.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, wW.STEP_BEFORERENDERINGMESH_PREPASS = 0, wW.STEP_BEFORERENDERINGMESH_OUTLINE = 1, wW.STEP_AFTERRENDERINGMESH_PREPASS = 0, wW.STEP_AFTERRENDERINGMESH_OUTLINE = 1, wW.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, wW.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, wW.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, wW.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, wW.STEP_BEFORECLEAR_PREPASS = 1, wW.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, wW.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, wW.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, wW.STEP_AFTERCAMERADRAW_PREPASS = 0, wW.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, wW.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, wW.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, wW.STEP_AFTERCAMERADRAW_LAYER = 4, wW.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, wW.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, wW.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, wW.STEP_AFTERRENDER_AUDIO = 0, wW.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, wW.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, wW.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, wW.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, wW.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, wW.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, wW.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, wW.STEP_POINTERMOVE_SPRITE = 0, wW.STEP_POINTERDOWN_SPRITE = 0, wW.STEP_POINTERUP_SPRITE = 0;
    class CW extends Array {
      constructor(WW) {
        super(...WW)
      }
      static Create() {
        return Object.create(CW.prototype)
      }
      registerStep(WW, RW, MW) {
        let wW, CW = 0;
        for (; CW < this.length; CW++) {
          if (wW = this[CW].index, WW < wW) break
        }
        this.splice(CW, 0, {
          index: WW,
          component: RW,
          action: MW.bind(RW)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  37587: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW,
      d: () => bR,
      e: () => wW,
      i: () => CW,
      j: () => zR
    });

    function wW(WW, RW, MW, wW, CW, zR) {
      function AW(WW) {
        if (void 0 !== WW && "function" !== typeof WW) throw new TypeError("Function expected");
        return WW
      }
      for (var bR, yR = wW.kind, NW = "getter" === yR ? "get" : "setter" === yR ? "set" : "value", eW = !RW && WW ? wW.static ? WW : WW.prototype : null, BW = RW || (eW ? Object.getOwnPropertyDescriptor(eW, wW.name) : {}), tR = !1, TW = MW.length - 1; TW >= 0; TW--) {
        var gR = {};
        for (var iR in wW) gR[iR] = "access" === iR ? {} : wW[iR];
        for (var iR in wW.access) gR.access[iR] = wW.access[iR];
        gR.addInitializer = function(WW) {
          if (tR) throw new TypeError("Cannot add initializers after decoration has completed");
          zR.push(AW(WW || null))
        };
        var YW = (0, MW[TW])("accessor" === yR ? {
          get: BW.get,
          set: BW.set
        } : BW[NW], gR);
        if ("accessor" === yR) {
          if (void 0 === YW) continue;
          if (null === YW || "object" !== typeof YW) throw new TypeError("Object expected");
          (bR = AW(YW.get)) && (BW.get = bR), (bR = AW(YW.set)) && (BW.set = bR), (bR = AW(YW.init)) && CW.unshift(bR)
        } else(bR = AW(YW)) && ("field" === yR ? CW.unshift(bR) : BW[NW] = bR)
      }
      eW && Object.defineProperty(eW, wW.name, BW), tR = !0
    }

    function CW(WW, RW, MW) {
      for (var wW = arguments.length > 2, CW = 0; CW < RW.length; CW++) MW = wW ? RW[CW].call(WW, MW) : RW[CW].call(WW);
      return wW ? MW : void 0
    }

    function zR(WW, RW, MW) {
      return "symbol" === typeof RW && (RW = RW.description ? "[".concat(RW.description, "]") : ""), Object.defineProperty(WW, "name", {
        configurable: !0,
        value: MW ? "".concat(MW, " ", RW) : RW
      })
    }
    Object.create;
    Object.create;

    function AW(WW, RW, MW, wW) {
      if ("a" === MW && !wW) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof RW ? WW !== RW || !wW : !RW.has(WW)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === MW ? wW : "a" === MW ? wW.call(WW) : wW ? wW.value : RW.get(WW)
    }

    function bR(WW, RW, MW, wW, CW) {
      if ("m" === wW) throw new TypeError("Private method is not writable");
      if ("a" === wW && !CW) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof RW ? WW !== RW || !CW : !RW.has(WW)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === wW ? CW.call(WW, MW) : CW ? CW.value = MW : RW.set(WW, MW), MW
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);